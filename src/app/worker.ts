import { ipcRenderer } from "electron"
import path from "path"
import { existsSync } from "fs"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { sanconfig } from "./config"
import { cachedata, checkunlockstatus, getachievementicon, cacheachievementicons, getlocalisedachievementinfo } from "./achievement"
import { getGamePath } from "steam-game-path"

declare global {
    interface Window {
        client: any
        cachedata: any
    }
}

log.init("WORKER")
sanhelper.errorhandler(log)

const startidle = () => {
    try {
        log.write("INFO","Idle loop started")
        sanhelper.resetdebuginfo()
        ipcRenderer.send("workeractive",false)
    
        let exclusionlogged = false
        
        const timer = setInterval(() => {
            const { pollrate, initdelay, releasedelay, maxretries, userust, debug, noiconcache, exclusions } = sanconfig.get().store
            const { appid, gamename } = sanhelper.gameinfo as AppInfo
    
            if (!appid) return
    
            if (exclusions.find(id => appid === id)) {
                if (!exclusionlogged) {
                    log.write("INFO",`AppID ${appid} in Exclusion List`)
                    exclusionlogged = true
                }
    
                return
            }
    
            clearInterval(timer)
    
            const appinfo: AppInfo = {
                appid: appid,
                gamename: gamename,
                pollrate: typeof pollrate !== "number" ? 250 : (pollrate < 50 ? 50 : pollrate),
                releasedelay: releasedelay,
                maxretries: maxretries,
                userust: userust,
                debug: debug,
                noiconcache: noiconcache
            }
    
            typeof pollrate !== "number" && log.write("ERROR",`"pollrate" has invalid type of "${typeof pollrate}" - setting to default value (250ms)...`) 
            pollrate < 50 && log.write("ERROR",`Minimum "pollrate" exceeded (${pollrate}ms) - setting to default value (50ms)`)
    
            initdelay && log.write("INFO",`Tracking process delayed by ${initdelay} seconds`)
            setTimeout(() => startsan(appinfo),initdelay * 1000)
        },1000)
    } catch (err) {
        log.write("ERROR",(err as Error).stack || (err as Error).message)
    }
}

const creategameinfo = (gamename: string, appid: number, exepath: string, pid: number, pollrate: number) => [
    "Game process started:",
    `gamename: ${gamename}`,
    `appid: ${appid}`,
    `exepath: ${exepath}`,
    `pid: ${pid}`,
    `pollrate: ${pollrate}ms`
].join("\n-")

const startsan = async (appinfo: AppInfo) => {
    try {
        const { appid, gamename, pollrate, maxretries, userust, noiconcache } = appinfo
        const { init } = await import("steamworks.js")
    
        const client = init(appid)
        sanhelper.devmode && (window.client = client)
    
        const rustlog = client.log.initLogger(path.join(sanhelper.appdata,"logs"))
        log.write("INFO",rustlog)
    
        const steam3id = client.localplayer.getSteamId().accountId
        const steam64id = client.localplayer.getSteamId().steamId64.toString().replace(/n$/,"")
        const username = client.localplayer.getName()
        const num = client.achievement.getNumAchievements()
    
        const getprocessinfo = (sgpexe?: string): ProcessInfo[] => {
            const processinfo: ProcessInfo[] = []
            const linkedgame: string | undefined = sgpexe || Object.entries(JSON.parse(localStorage.getItem("linkgame")!)).find(item => parseInt(item[0]) === appid)?.[1] as string
    
            linkedgame && log.write("INFO",`${sgpexe ? `"steam-game-path"` : "Linked Game"} executable found for AppID "${appid}": "${linkedgame}"`)
    
            client.processes.getGameProcesses(appid,linkedgame ? path.basename(linkedgame) : null).forEach(({ exe, pid }: ProcessInfo) => {
                processinfo.push({
                    pid: pid,
                    exe: exe
                } as ProcessInfo)
            })
    
            return processinfo
        }
    
        const isprocessrunning = (pid: number) => userust ? client.processes.isProcessRunning(pid) : sanhelper.isprocessrunning(pid)
    
        const processes: ProcessInfo[] = []
    
        const initgameloop = () => {
            processes.forEach(({ pid,exe }: ProcessInfo) => log.write("INFO",creategameinfo(gamename || "???",appid,exe,pid,pollrate || 250)))
            
            ipcRenderer.send("appid",appid,gamename,steam3id)
            ipcRenderer.on("steam3id",() => ipcRenderer.send("steam3id",steam3id))
            ipcRenderer.send("workeractive",true)
        
            const apinames: string[] = num ? client.achievement.getAchievementNames() : []
            let cache: Achievement[] = num ? cachedata(client,apinames) : []
    
            !num && log.write("INFO",`"${gamename}" has no achievements`)
            
            const gameloop = () => {
                if (processes.every(({ pid }: ProcessInfo) => pid !== -1 && !isprocessrunning(pid))) {
                    clearInterval(timer!)
                    log.write("INFO","Game loop stopped")
        
                    ipcRenderer.send("validateworker")
                }
    
                const { debug } = sanconfig.get().store
    
                debug && ipcRenderer.send("debuginfoupdated", {
                    username: username,
                    steam3id: steam3id,
                    steam64id: steam64id,
                    appid: appid,
                    gamename: gamename,
                    status: "Active",
                    processes: processes.map(({ exe, pid }: ProcessInfo) => {
                        return {
                            exe: exe,
                            pid: pid,
                            active: isprocessrunning(pid)
                        } as DebugProcessInfo
                    })
                })
    
                if (!num) return
        
                const live: Achievement[] = cachedata(client,apinames)
                const unlocked: Achievement[] = checkunlockstatus(cache,live)
                sanhelper.devmode && (window.cachedata = live)
            
                if (!unlocked.length) return
        
                sanhelper.devmode && log.write("INFO",JSON.stringify(unlocked))
        
                let hasshown = false
        
                unlocked.forEach(async (achievement: Achievement) => {
                    log.write("INFO",`Achievement unlocked: ${JSON.stringify(achievement)}`)
        
                    const config = sanconfig.get()
                    const { rarity } = config.store
                    const type = achievement.percent <= rarity ? "rare" : "main"
        
                    let retries = 0
        
                    const achievementicon = async (): Promise<string | null> => {
                        let icon: string | null = null
                        const cachedicon = path.join(sanhelper.temp,`${achievement.apiname}.jpg`)
        
                        try {
                            icon = (!noiconcache && existsSync(cachedicon)) ? cachedicon : await getachievementicon(client,achievement)
                            if (!icon) throw new Error(`Icon for ${achievement.apiname} is null. Retrying....`)
        
                            log.write("INFO",`Icon for ${achievement.apiname} saved successfully`)
                            return icon.replace(/\\/g,"/")
                        } catch (err) {
                            log.write("ERROR",err as string)
        
                            retries++
                            retries < 5 ? setTimeout(() => achievementicon(),100) : log.write("ERROR",`Failed to fetch icon for ${achievement.apiname}`)
        
                            return null
                        }
                    }
        
                    const icon = config.get(`customisation.${type}.usegameicon`) ? path.join(await sanhelper.steampath,"appcache","librarycache",`${appid}_icon.jpg`) : await achievementicon()

                    const steamlang = config.get("steamlang")
                    const maxlang = config.get("maxsteamlangretries")

                    const localised = {
                        name: steamlang ? await getlocalisedachievementinfo(steam3id,achievement.apiname,"name",maxlang) : null,
                        desc: steamlang ? await getlocalisedachievementinfo(steam3id,achievement.apiname,"description",maxlang) : null
                    }

                    const themeswitch: [key: string,ThemeSwitch] | undefined = Object.entries(JSON.parse(localStorage.getItem("themeswitch")!) as ThemeSwitch).find(item => parseInt(item[0]) === appid)
        
                    const notify: Notify = {
                        id: Math.round(Date.now() / Math.random() * 1000),
                        customisation: (themeswitch ? (config.get(`customisation.${type}.usertheme.${themeswitch[1].themes[type]}`) as UserTheme).customisation : config.get(`customisation.${type}`)) as Customisation,
                        type: type,
                        gamename: gamename || "???",
                        steam3id: steam3id,
                        apiname: achievement.apiname,
                        name: localised.name || achievement.name,
                        desc: localised.desc || achievement.desc,
                        unlocked: achievement.unlocked,
                        hidden: achievement.hidden,
                        percent: achievement.percent,
                        icon: icon || sanhelper.setfilepath("img","sanlogosquare.svg")
                    }

                    ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,themeswitch?.[1].src))
        
                    if (live.every(ach => ach.unlocked) && !hasshown) {
                        const { plat } = (config.get(`customisation.plat`) as Customisation).customicons as CustomIcon
        
                        const platnotify: Notify = {
                            id: Date.now(),
                            customisation: themeswitch ? (config.get(`customisation.plat.usertheme.${themeswitch[1].themes.plat}`) as UserTheme).customisation : config.get(`customisation.plat`) as Customisation,
                            type: "plat",
                            gamename: gamename || "???",
                            steam3id: steam3id,
                            apiname: "PLAT_NOTIFICATION",
                            name: "100%",
                            desc: "",
                            unlocked: true,
                            hidden: false,
                            percent: 0,
                            icon: plat || sanhelper.setfilepath("img","ribbon.svg")
                        }
        
                        ipcRenderer.send("notify",platnotify,undefined,themeswitch?.[1].src)
                        hasshown = true
                    }
                })
        
                cache = cachedata(client,apinames)
            }
        
            const timer: NodeJS.Timeout = setInterval(gameloop,pollrate || 250)
        }
    
        let retries = 0
    
        const getrunninggameprocesses = async () => {
            const processinfo: ProcessInfo[] = getprocessinfo()
    
            if (!processinfo.length) {
                if (retries < (maxretries || 10)) {
                    log.write("ERROR",`No running processes found for "${gamename}" - Retrying...`)
                    retries++
    
                    setTimeout(getrunninggameprocesses,1000)
                    return
                } else {
                    // If no processes are found by automatic process tracking or by manually adding a Linked Game, use "steam-game-path" as a last resort fallback
                    // This could potentially replace the `get_game_exes()` Rust function if it turns out to be more accurate, but is a lot slower, due to waiting for the `SteamUser` dependency of `steam-game-path` to parse `appinfo.vdf`
                    log.write("ERROR",`No matching game processes found via automatic process tracking or Linked Games. Checking for executable using "steam-game-path"...`)
    
                    const exes = async () => (await (getGamePath(appid,true)?.game)?.executable as any[]).filter(({ executable }: any) => path.extname(executable) === (process.platform === "win32" ? ".exe" : ""))    
    
                    for (const exe of await exes()) {
                        await (async () => {
                            const processinfo: ProcessInfo[] = getprocessinfo(exe.executable)
                            processinfo.length && processes.push(...processinfo)
                        })()
                    }
    
                    // If an EXE is still not found, push an invalid process. The user will then need to manually release the game
                    if (!processes.length) {
                        log.write("ERROR",`Unable to find running game process for "${gamename}": Game will not be able to quit automatically!`)
                        ipcRenderer.send("noexe")
                        
                        processes.push({
                            exe: "<Unknown>",
                            pid: -1
                        } as ProcessInfo)
                    }
                }
            } else {
                processes.push(...processinfo)
            }
    
            !noiconcache && await cacheachievementicons(gamename || "???",steam64id,appid)
            initgameloop()
        }
            
        getrunninggameprocesses()
    } catch (err) {
        log.write("ERROR",(err as Error).stack || (err as Error).message)
    }
}

startidle()