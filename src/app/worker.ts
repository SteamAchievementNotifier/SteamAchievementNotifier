import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { steam } from "./steam"
import { sanconfig } from "./config"
import { sanachievement } from "./achievement"
import { usertheme } from "./usertheme"
import { utils } from "./utils"

declare global {
    interface Window {
        client: any
        cachedata: any,
        localised: Map<string,LocalisedObj>,
        runninggametimers: any
    }
}

const logged = {
    exclusion: false,
    activeuser: false,
    binfile: false
}

log.init("WORKER")
sanhelper.errorhandler(log)

window.localised = new Map<string,LocalisedObj>()

const statsobj: StatsObj = {
    appid: 0,
    gamename: null
}

const workerinfo: WorkerInfo = {
    appid: 0,
    gamename: null,
    steam3id: undefined,
    achnum: undefined,
    allunlocked: undefined,
    ra: false
}

ipcRenderer.on("appid",() => ipcRenderer.send("appid",workerinfo))

// `init` is only sent via "stats" IPC event when `statwin` spawns
ipcRenderer.on("stats",(event,init?: boolean) => ipcRenderer.send("stats",statsobj,init))

// Send to `listeners.ts` on spawn, in case `statwin` spawned between worker respawns and did not receive "stats" IPC event
ipcRenderer.send("stats",statsobj)

ipcRenderer.on("gametimer",() => ipcRenderer.send("gametimer",workerinfo))

const startidle = () => {
    try {
        log.write("INFO","Idle loop started")
        sanhelper.resetdebuginfo()
        ipcRenderer.send("workeractive",false)

        const timer = setInterval(() => {
            const { pollrate, debug, noiconcache, exclusions, inclusionlist } = sanconfig.get().store
            const { appid, gamename } = sanhelper.gameinfo as AppInfo
            
            if (!appid) {
                logged.exclusion = false
                logged.activeuser = false   
                return
            }
            
            const match = inclusionlist ? !exclusions.includes(appid) : exclusions.includes(appid)
    
            if (match) {
                if (!logged.exclusion) {
                    log.write("INFO",`AppID ${appid} ${inclusionlist ? "not in In" : "in Ex"}clusion List`)
                    logged.exclusion = true
                }

                return
            }
            
            const allusers = steam.getallusers(sanhelper.steampath)
            const user = steam.getcurrentuser(allusers,sanhelper.activesteamuser)
            
            if (!user) {
                if (!logged.activeuser) {
                    log.write("WARN","No active Steam user found")
                    logged.activeuser = true
                }

                return
            }
            
            clearInterval(timer)
            
            log.write("INFO",`AppID ${appid} detected - initialising...`)
            
            const appinfo: AppInfo = {
                appid,
                gamename,
                pollrate: typeof pollrate !== "number" ? 250 : (pollrate < 50 ? 50 : pollrate),
                debug: debug,
                noiconcache: noiconcache
            }
            
            ;(async () => await startsan(user,appinfo))()
        },1000)
    } catch (err) {
        log.write("WARN",(err as Error).message)
    }
}

const startsan = async (user: SteamUser,appinfo: AppInfo) => {
    try {
        window.localised.clear()
    
        const { steam3id, steam64id, personaname } = user
        const { appid, gamename, pollrate, noiconcache } = appinfo

        // Handles game exits/AppID changes if `UserGameStats_<steam3id>_<appid>.bin` cannot be found and triggers early return
        if (sanhelper.gameinfo.appid !== appid) {
            log.write("INFO",utils.game.createinfo({
                gamename: gamename ?? "???",
                appid,
                pollrate: pollrate ?? 250
            },"exited"))
            
            ipcRenderer.send("validateworker")
            return
        }
        
        const statsdir = path.join(sanhelper.steampath,"appcache","stats")
        const binfiles = {
            userstats: path.join(statsdir,`UserGameStats_${steam3id}_${appid}.bin`),
            schema: path.join(statsdir,`UserGameStatsSchema_${appid}.bin`)
        }

        for (const binfile of Object.values(binfiles)) {
            if (!fs.existsSync(binfile)) {
                if (!logged.binfile) {
                    log.write("INFO",`"${binfile}" not found - retrying...`)
                    logged.binfile = true
                }
                
                setTimeout(() => startsan(user,appinfo),1000)
                return
            }
        }

        const mtime = {
            previous: fs.statSync(binfiles.userstats).mtimeMs,
            current: -1
        }
        
        const [userstats,schema] = [binfiles.userstats,binfiles.schema].map(binfile => steam.getbinarydata(binfile))
        log.write("INFO",`Achievement data for ${personaname} (${steam3id}) parsed successfully`)

        let cache = await sanachievement.cachedata(appid,userstats,schema)
        window.cachedata = cache

        log.write("INFO",utils.game.createinfo({
            gamename: gamename ?? "???",
            appid,
            pollrate: pollrate ?? 250
        },"started"))

        // ipcRenderer.on("addtosteam",(event,imgpath: string,width: number,height: number) => {
        //     try {
        //         client.screenshots.addScreenshotToLibrary(imgpath,width,height)
        //         log.write("INFO",`"${imgpath}" added to Steam successfully`)
        //     } catch (err) {
        //         log.write("WARN",`Unable to add media to Steam: ${(err as Error).message}`)
        //     }
        // })

        Object.assign(workerinfo,{
            appid: appid,
            steam3id: steam3id,
            achnum: cache.length,
            gamename: gamename
        })
        
        ipcRenderer.emit("appid",null,workerinfo)
        ipcRenderer.on("steam3id",(event,skipss?: boolean) => ipcRenderer.send("steam3id",steam3id,skipss))
        ipcRenderer.send("workeractive",true)

        const updatestats = async (stats: StatsObj | null) => {
            if (!stats) return

            Object.assign(statsobj,stats)
            ipcRenderer.send("stats",statsobj,true)
        }
        
        ;(async () => await updatestats(await utils.stats.update(workerinfo,cache)))()
        ipcRenderer.on("steamlang",async () => await updatestats(await utils.stats.update(workerinfo,cache)))
        
        workerinfo.allunlocked = cache.every(ach => ach.unlocked)
        ipcRenderer.emit("gametimer")

        let processing = false

        const gameloop = async () => {
            if (!sanhelper.gameinfo.appid) {
                log.write("INFO",utils.game.createinfo({
                    gamename: gamename ?? "???",
                    appid,
                    pollrate: pollrate ?? 250
                },"exited"))

                clearInterval(timer)

                Object.assign(workerinfo,{
                    appid: 0,
                    gamename: null,
                    steam3id: undefined,
                    achnum: undefined,
                    allunlocked: undefined
                })

                Object.assign(statsobj,{
                    appid: 0,
                    gamename: null
                })

                ipcRenderer.send("stats",statsobj)
                ipcRenderer.send("workeractive",false)
                ipcRenderer.emit("appid",null,workerinfo)
                ipcRenderer.emit("gametimer")
                ipcRenderer.send("validateworker")
                
                return
            }

            const { debug } = sanconfig.get().store

            debug && ipcRenderer.send("debuginfoupdated",{
                username: user.personaname ?? "???",
                steam3id,
                steam64id,
                appid: appid,
                gamename: gamename,
                status: "Active"
            })

            try {
                mtime.current = fs.statSync(binfiles.userstats).mtimeMs
            } catch {
                return
            }

            if (mtime.current === mtime.previous) return

            if (!cache.length) {
                log.write("WARN",`AppID ${appid} has no achievements`)
                return
            }
            
            if (processing) return
            processing = true

            let live: Achievement[]

            try {
                const [userstats,schema] = [binfiles.userstats,binfiles.schema].map(binfile => steam.getbinarydata(binfile))
                live = await sanachievement.cachedata(appid,userstats,schema)
            } catch (err) {
                log.write("WARN",`Unable to read achievement data: ${(err as Error).message}`) // Likely mid-write: mtime.previous is not updated, so the next tick retries
                return
            } finally {
                processing = false
            }

            mtime.previous = mtime.current

            const unlocked = sanachievement.checkunlockstatus(cache,live)
            if (!unlocked.length) return

            cache = live
            window.cachedata = live

            sanhelper.devmode && log.write("INFO",JSON.stringify(unlocked))
            
            let hasshown = false
            
            const config = sanconfig.get()
            const { rarity, semirarity, trophymode } = config.store
            const themeswitch: [key: string,ThemeSwitch] | undefined = usertheme.hasthemeswitch(appid)
            
            for (const achievement of unlocked) {
                const unlocktime = Date.now()
                achievement.unlocktimestamp = achievement.unlocked ? unlocktime : -1
                
                const valid = achievement.percent >= 0 // -1: Percentages unavailable
                const type = valid && achievement.percent <= rarity ? "rare" : (trophymode && valid && achievement.percent <= semirarity && achievement.percent > rarity ? "semi" : "main")

                const gameiconpath = path.join(sanhelper.temp,"gameicon.png")
                const gameicon = (config.get(`customisation.${type}.usegameicon`) && fs.existsSync(gameiconpath)) ? gameiconpath : null
                const localised = await utils.localised.obj(steam3id,achievement)
                const customisation = usertheme.gettypecustomisation(config,type,themeswitch)
                
                if (themeswitch) {
                    log.write("INFO",`Auto-switch entry detected for ${appid}`)
                    sanhelper.devmode && console.log(customisation)
                }
    
                const notify: Notify = {
                    id: Math.round(Date.now() / Math.random() * 1000),
                    customisation,
                    type,
                    gamename: gamename ?? "???",
                    steam3id,
                    apiname: achievement.apiname,
                    name: localised.name ?? achievement.name,
                    desc: localised.desc ?? achievement.desc,
                    unlocked: achievement.unlocked,
                    hidden: achievement.hidden,
                    percent: achievement.percent,
                    icon: achievement.icon ?? sanhelper.setfilepath("img","sanlogosquare.svg"),
                    gameicon: gameicon ?? sanhelper.setfilepath("img","sanlogosquare.svg"),
                    unlocktime: new Date(unlocktime).toISOString()
                }

                ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,themeswitch?.[1].src))

                ;(async () => {
                    statsobj.achievements = !config.get("steamlang") ? live : await Promise.all(
                        live.map(async achievement => {
                            const achievementcopy = { ...achievement }
                            const localised = window.localised.get(achievementcopy.apiname) || await utils.localised.obj(steam3id,achievementcopy)
    
                            for (const key of Object.keys(localised)) {
                                achievementcopy[key as "name" | "desc"] = localised[key as "name" | "desc"] || achievementcopy[key as "name" | "desc"]
                            }
            
                            return achievementcopy
                        })
                    )
                })()
            }
            
            const allunlocked = live.every(achievement => achievement.unlocked)
            workerinfo.allunlocked = allunlocked
            ipcRenderer.emit("gametimer")

            if (allunlocked && !hasshown) {
                const platcustomisation = usertheme.gettypecustomisation(config,"plat",themeswitch)
                const { plat: platicon } = platcustomisation.customicons as CustomIcon
                const customisation = platcustomisation

                if (themeswitch) {
                    log.write("INFO",`Auto-switch entry detected for ${appid}`)
                    sanhelper.devmode && console.log(customisation)
                }
                
                const gameiconpath = path.join(sanhelper.temp,"gameicon.png")
                const gameicon = (config.get(`customisation.plat.usegameicon`) && fs.existsSync(gameiconpath)) ? gameiconpath : null

                const platnotify: Notify = {
                    id: Date.now(),
                    customisation,
                    type: "plat",
                    gamename: gamename ?? "???",
                    steam3id: steam3id,
                    apiname: "PLAT_NOTIFICATION",
                    name: "100%",
                    desc: "",
                    unlocked: true,
                    hidden: false,
                    percent: 0,
                    icon: platicon as string ?? sanhelper.setfilepath("img","ribbon.svg"),
                    gameicon: gameicon ?? sanhelper.setfilepath("img","sanlogosquare.svg"),
                    unlocktime: new Date(Date.now()).toISOString()
                }

                ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,platnotify,undefined,themeswitch?.[1].src))

                hasshown = true
            }
        }

        const timer = setInterval(gameloop,pollrate ?? 250)
    } catch (err) {
        log.write("ERROR",`Error tracking achievement data: ${(err as Error).message}`)
        log.write("WARN","Restarting Worker process in 5 seconds...")
        setTimeout(() => ipcRenderer.send("validateworker"),5000)
    }
}

startidle()