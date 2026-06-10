import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { sanconfig } from "./config"
import { cachedata, checkunlockstatus, getachievementicon, cacheachievementicons, getlocalisedachievementinfo } from "./achievement"
import { getGamePath } from "steam-game-path"
import { getlogmap, getlastactions, executeaction, testraunlock, emu, rasupported, racached } from "./ra"
import sanwatcher, { WatchEvent } from "sanwatcher.rs"

declare global {
    interface Window {
        client: any
        cachedata: any,
        globallocalised: any,
        testraunlock: Function,
        racached: any,
        runninggametimers: any
    }
}

type LocalisedObj = {
    name: string | null,
    desc: string | null
}

log.init("WORKER")
sanhelper.errorhandler(log)

const globallocalised = new Map<string,LocalisedObj>()
window.globallocalised = globallocalised

const worker = {
    getadditionalargs: (arg?: string) => arg ? JSON.parse(arg.split("=")[1]) : null,
    resolvefilepath: (dir: string,file: string) => {
        if (process.platform === "win32") {
            const filepath = path.join(dir,file)
            return fs.existsSync(filepath) ? filepath : null
        }

        try {
            for (const entry of fs.readdirSync(dir)) {
                if (entry.toLowerCase() === file.toLowerCase()) return path.join(dir,entry)
            }
        } catch (err) {
            log.write("ERROR",`Error reading contents of "${dir}" directory: ${err as Error}`)
        }

        return null
    },
    creategameinfo: (gameinfo: { gamename: string, appid: number, exepath: string, pid: number, pollrate: number },event: "started" | "exited") => [
        `Game process ${event}:`,
        `gamename: ${gameinfo.gamename}`,
        `appid: ${gameinfo.appid}`,
        `exepath: ${gameinfo.exepath}`,
        `pid: ${gameinfo.pid}`,
        `pollrate: ${gameinfo.pollrate}ms`
    ].join("\n- "),
    localisedobj: async (steam3id: number,achievement: Achievement) => {
        const config = sanconfig.get()
        const steamlang = config.get("steamlang")
        const maxlang = config.get("maxsteamlangretries")

        const obj: LocalisedObj = {
            name: null,
            desc: null
        }

        for (const prop of (["name","description"] as const)) {
            const key = prop === "name" ? "name" : "desc"
            obj[key] = steamlang ? await getlocalisedachievementinfo(steam3id,achievement.apiname,prop,maxlang) : null
        }

        globallocalised.set(achievement.apiname,obj)
        window.globallocalised = globallocalised

        return obj
    },
    updatestats: async (workerinfo: WorkerInfo,achievements: Achievement[],launch?: boolean) => {
        const { appid, gamename, steam3id } = workerinfo
        if (!steam3id) return log.write("ERROR",`Invalid steam3id (${steam3id}) supplied to "updatestats()"`)
        
        const { steamlang } = sanconfig.get().store
        
        statsobj.appid = appid
        statsobj.gamename = gamename || "???"
        statsobj.achievements = !steamlang ? achievements : await Promise.all(
            achievements.map(async achievement => {
                const achievementcopy = { ...achievement }
                const localised = await worker.localisedobj(steam3id,achievementcopy)

                for (const key of Object.keys(localised)) {
                    achievementcopy[key as "name" | "desc"] = localised[key as "name" | "desc"] || achievementcopy[key as "name" | "desc"]
                }

                return achievementcopy
            })
        )

        ipcRenderer.send("stats",statsobj,launch)
    }
}

// `lastknowngame` var in `listeners.ts` is passed via `BrowserWindow.webPreferences.additionalArguments`, so current AppID/last install dir can be verified before re-initialising Steamworks for the same game in `startsan()`
// This ensures SAN does not re-initialise an AppID for a game that has now closed, which would prevent Steam from resetting `RunningAppID` to 0 in the Windows registry
const lastknowngame: LastKnownGame | null = worker.getadditionalargs(process.argv.find(arg => arg.startsWith("--lastknowngame="))) as LastKnownGame | null

const statsobj: StatsObj = {
    appid: 0,
    gamename: null
}

// `init` is only sent via "stats" IPC event when `statwin` spawns
ipcRenderer.on("stats",(event,init?: boolean) => ipcRenderer.send("stats",statsobj,init))

// Send to `listeners.ts` on spawn, in case `statwin` spawned between worker respawns and did not receive "stats" IPC event
ipcRenderer.send("stats",statsobj)

const workerinfo: WorkerInfo = {
    appid: 0,
    gamename: null,
    steam3id: undefined,
    achnum: undefined,
    allunlocked: undefined,
    ra: false
}

ipcRenderer.on("gametimer",(event,ra?: "ra") => ipcRenderer.send("gametimer",ra ? raworkerinfo : workerinfo))

const startidle = () => {
    try {
        log.write("INFO","Idle loop started")
        sanhelper.resetdebuginfo()
        ipcRenderer.send("workeractive",false)
    
        let exclusionlogged = false
        let invalidappidlogged = false
        
        const timer = setInterval(() => {
            const { pollrate, initdelay, releasedelay, maxretries, userust, debug, noiconcache, exclusions, inclusionlist } = sanconfig.get().store
            const { appid, gamename } = sanhelper.gameinfo as AppInfo
            
            if (!appid) return
            
            const { usesanwatcher } = sanconfig.get().store

            if (usesanwatcher) {
                // If `lastknowngame === null`, continue as normal, as there is no existing game data to compare to
                // Otherwise, if the current AppID is the same as the last known one, first check if the AppID is valid
                if (lastknowngame && appid === lastknowngame.appid) {
                    // If `installdir === null`, current AppID is invalid (i.e. a non-Steam game/application)
                    if (!lastknowngame.installdir) {
                        if (!invalidappidlogged) {
                            log.write("WARN",`Invalid AppID ${appid} currently active in Steam - skipping...`)
                            invalidappidlogged = true
                        }
                        
                        return
                    }
                    
                    // Check whether any install dir processes are active for the current AppID
                    const activeprocesses = sanwatcher.getActiveProcesses(lastknowngame.installdir)
                    
                    // If there are no active processes in the game's install dir, this signifies Steam is currently trying to reset `RunningAppID` back to 0 in the registry
                    if (!activeprocesses.length) {
                        log.write("WARN",`No active processes within game installation directory, but Steam reports AppID ${appid} is still active - exiting "Worker" process for Steam to clear AppID ${appid}...`)
                        clearInterval(timer)
                        return ipcRenderer.send("validateworker") // In this case, destroy the active "Worker" process and allow Steam to reset
                    }
                }
            }
            
            log.write("INFO",`AppID ${appid} detected - initialising...`)
            
            const match = inclusionlist ? !exclusions.includes(appid) : exclusions.includes(appid)
    
            if (match) {
                if (!exclusionlogged) {
                    log.write("INFO",`AppID ${appid} ${inclusionlist ? "not in In" : "in Ex"}clusion List`)
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
    
            typeof pollrate !== "number" && log.write("WARN",`"pollrate" has invalid type of "${typeof pollrate}" - setting to default value (250ms)...`) 
            pollrate < 50 && log.write("WARN",`Minimum "pollrate" exceeded (${pollrate}ms) - setting to default value (50ms)`)

            !usesanwatcher && initdelay && log.write("INFO",`Tracking process delayed by ${initdelay} seconds`)
            setTimeout(() => startsan(appinfo),usesanwatcher ? 0 : (initdelay * 1000))
        },1000)
    } catch (err) {
        log.write("ERROR",(err as Error).stack || (err as Error).message)
    }
}

const pids = new Set<number>()
let releasetimer: NodeJS.Timeout | null = null

const releasegame = (timer: NodeJS.Timeout,appid: number,process: ProcessInfo) => {
    log.write("INFO",`Releasing game for AppID ${appid}:\n- pid: ${process.pid}\n- exepath: ${process.exe}`)

    if (releasetimer) {
        clearTimeout(releasetimer)
        releasetimer = null
    }
    
    clearInterval(timer)
    log.write("INFO",`Game loop stopped for AppID ${appid}`)

    statsobj.appid = 0
    statsobj.gamename = null
    statsobj.achievements = undefined

    ipcRenderer.send("stats",statsobj)

    workerinfo.appid = 0
    workerinfo.gamename = undefined
    workerinfo.steam3id = 0
    workerinfo.achnum = undefined

    ipcRenderer.emit("gametimer")
    ipcRenderer.send("validateworker")
}

const startsan = async (appinfo: AppInfo) => {
    try {
        globallocalised.clear()

        const { appid, gamename, pollrate, maxretries, userust, noiconcache } = appinfo
        const { init } = await import("steamworks.js")
        
        const client = (() => {
            try {
                return init(appid)
            } catch (err) {                
                log.write("WARN",`Unable to initialise Steamworks for AppID ${appid}: ${err instanceof Error ? err.message : err}`)
                return null
            }
        })()

        if (!client) {
            ipcRenderer.send("lastknowngame",{ appid, installdir: null } as LastKnownGame)
            return ipcRenderer.send("validateworker")
        }

        sanhelper.devmode && (window.client = client)

        const { usesanwatcher, releasewaittime } = sanconfig.get().store
        log.write("INFO",`SANWatcher ${usesanwatcher ? "en" : "dis"}abled`)

        const installdir = client.apps.appInstallDir(appid).replace(/\\/g,"/")
        ipcRenderer.send("lastknowngame",{ appid, installdir } as LastKnownGame) // Update `lastknowngame` in `listeners.ts` to the current game

        ipcRenderer.on("statwinicon",async (event,achievement: Achievement) => {
            const icon = await getachievementicon(client,achievement)
            ipcRenderer.send(`iconpath_${achievement.apiname}`,icon)
        })

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

            client.processes.getGameProcesses(appid,linkedgame ? path.basename(linkedgame) : null).forEach(({ exe,pid }: ProcessInfo) => {
                processinfo.push({
                    pid,
                    exe
                } as ProcessInfo)
            })

            return processinfo
        }
    
        const isprocessrunning = (pid: number) => userust ? client.processes.isProcessRunning(pid) : sanhelper.isprocessrunning(pid)
    
        const processes: ProcessInfo[] = []

        ipcRenderer.on("windowtitles",() => ipcRenderer.send("windowtitles",(usesanwatcher ? Array.from(pids) : processes.map(process => process.pid)).map(pid => client.processes.getWindowTitle(pid))))
        
        ipcRenderer.on("addtosteam",(event,imgpath: string,width: number,height: number) => {
            try {
                client.screenshots.addScreenshotToLibrary(imgpath,width,height)
                log.write("INFO",`"${imgpath}" added to Steam successfully`)
            } catch (err) {
                log.write("WARN",`Unable to add media to Steam: ${(err as Error).message}`)
            }
        })
        
        const initgameloop = () => {
            !usesanwatcher && processes.forEach(({ pid,exe }: ProcessInfo) => {
                const gameinfo = {
                    gamename: gamename || "???",
                    appid,
                    exepath: exe,
                    pid,
                    pollrate: pollrate || 250
                }
                
                log.write("INFO",worker.creategameinfo(gameinfo,"started"))
            })

            workerinfo.appid = appid
            workerinfo.steam3id = steam3id
            workerinfo.achnum = num
            workerinfo.gamename = gamename

            ipcRenderer.send("appid",workerinfo)
            
            ipcRenderer.on("steam3id",(event,skipss?: boolean) => ipcRenderer.send("steam3id",steam3id,skipss))
            ipcRenderer.send("workeractive",true)
        
            const apinames: string[] = num ? client.achievement.getAchievementNames() : []
            let cache: Achievement[] = num ? cachedata(client,apinames) : []

            ;(async () => await worker.updatestats(workerinfo,cache,true))()
            ipcRenderer.on("steamlang",async () => await worker.updatestats(workerinfo,cache,true))

            workerinfo.allunlocked = cache.every(ach => ach.unlocked)
            ipcRenderer.emit("gametimer")
    
            !num && log.write("INFO",`"${gamename}" has no achievements`)

            if (usesanwatcher) {
                pids.clear() // Clear any stale PIDs in the set before tracking the current game
                
                sanwatcher.start(installdir,pollrate || 250,(err,event: WatchEvent) => {
                    if (err) return log.write("ERROR",err as string)
                    
                    const { started, pid, exe } = event
                    const gameinfo = {
                        gamename: gamename || "???",
                        appid,
                        exepath: exe,
                        pid,
                        pollrate: pollrate || 250
                    }
    
                    if (started) {
                        // If a new process within the current game's installdir is detected within X seconds (i.e. `releasewaittime`) of another installdir process exiting (e.g. a pre-game launcher), cancel the release and continue tracking
                        if (releasetimer) {
                            clearTimeout(releasetimer)
                            releasetimer = null
                            
                            ipcRenderer.send("gametimer",workerinfo) // Restart Game Timer if new process is discovered
                            ipcRenderer.send("releasing",gameinfo.gamename,false) // Send IPC event to remove "releasing" attribute to Game Display in UI
                            log.write("INFO",`New game process detected for AppID ${appid} - release cancelled`)
                        }
                        
                        pids.add(pid)
                        return log.write("INFO",worker.creategameinfo(gameinfo,"started"))
                    }
    
                    pids.delete(pid)
                    log.write("INFO",worker.creategameinfo(gameinfo,"exited"))
    
                    // If no PIDs for any processes in the game's installdir are active, and there is no active "releasetimer", begin checking for new installdir processes for X seconds (i.e. `releasewaittime`) before releasing the game
                    if (!pids.size && !releasetimer) {
                        log.write("INFO",`No tracked game processes found for AppID ${appid}. Checking for new game processes...`)
                        
                        const workerinfo = {
                            appid: 0,
                            gamename: undefined,
                            steam3id: 0,
                            achnum: undefined
                        }
                        
                        ipcRenderer.send("gametimer",workerinfo) // Stop active Game Timer on any installdir process exit
                        ipcRenderer.send("releasing",gameinfo.gamename,true) // Send IPC event to apply "releasing" attribute to Game Display in UI
                        releasetimer = setTimeout(() => !pids.size && releasegame(timer,appid,{ pid, exe } as ProcessInfo),releasewaittime * 1000)
                    }
                })
            }
            
            const gameloop = () => {
                !usesanwatcher && processes.every(({ pid }: ProcessInfo) => pid !== -1 && !isprocessrunning(pid)) && releasegame(timer,appid,processes[0])
    
                const { debug } = sanconfig.get().store

                debug && ipcRenderer.send("debuginfoupdated",{
                    username: username,
                    steam3id: steam3id,
                    steam64id: steam64id,
                    appid: appid,
                    gamename: gamename,
                    status: "Active",
                    processes: (usesanwatcher ? sanwatcher.getActiveProcesses(installdir) : processes).map(({ pid, exe }) => {
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
                    const unlocktime = Date.now()
                    achievement.unlocktimestamp = achievement.unlocked ? unlocktime : -1

                    log.write("INFO",`Achievement unlocked: ${JSON.stringify(achievement)}`)
        
                    const config = sanconfig.get()
                    const { rarity, semirarity, trophymode } = config.store
                    const type = achievement.percent <= rarity ? "rare" : (trophymode && (achievement.percent <= semirarity && achievement.percent > rarity) ? "semi" : "main")
        
                    let retries = 0
        
                    const achievementicon = async (): Promise<string | null> => {
                        let icon: string | null = null
                        const cachedicon = !noiconcache ? worker.resolvefilepath(sanhelper.temp,`${achievement.apiname}.jpg`) : null
        
                        try {
                            icon = cachedicon || await getachievementicon(client,achievement)
                            if (!icon) throw new Error(`Icon for ${achievement.apiname} is null. Retrying....`)
        
                            log.write("INFO",`Icon for ${achievement.apiname} saved successfully`)
                            return icon.replace(/\\/g,"/")
                        } catch (err) {
                            log.write("WARN",err as string)
        
                            retries++
                            retries < 5 ? setTimeout(() => achievementicon(),100) : log.write("ERROR",`Failed to fetch icon for ${achievement.apiname}`)
        
                            return null
                        }
                    }
        
                    const gameiconpath = path.join(sanhelper.temp,"gameicon.png")
                    const gameicon = (config.get(`customisation.${type}.usegameicon`) && fs.existsSync(gameiconpath)) ? gameiconpath : null
                    const localised = await worker.localisedobj(steam3id,achievement)
                    const themeswitch: [key: string,ThemeSwitch] | undefined = Object.entries(JSON.parse(localStorage.getItem("themeswitch")!)).find(item => parseInt(item[0]) === appid) as [key: string,ThemeSwitch] | undefined
                    const customisation = config.get(`customisation.${type}${themeswitch ? `.usertheme.${themeswitch[1].themes[type]}.customisation` : ""}`) as Customisation
                    
                    if (themeswitch) {
                        log.write("INFO",`Auto-switch entry detected for ${appid}`)
                        sanhelper.devmode && console.log(customisation)
                    }
        
                    const notify: Notify = {
                        id: Math.round(Date.now() / Math.random() * 1000),
                        customisation,
                        type,
                        gamename: gamename || "???",
                        steam3id,
                        apiname: achievement.apiname,
                        name: localised.name || achievement.name,
                        desc: localised.desc || achievement.desc,
                        unlocked: achievement.unlocked,
                        hidden: achievement.hidden,
                        percent: achievement.percent,
                        icon: await achievementicon() || sanhelper.setfilepath("img","sanlogosquare.svg"),
                        gameicon: gameicon || sanhelper.setfilepath("img","sanlogosquare.svg"),
                        unlocktime: new Date(unlocktime).toISOString()
                    }

                    ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,themeswitch?.[1].src))

                    ;(async () => {
                        statsobj.achievements = !config.get("steamlang") ? live : await Promise.all(
                            live.map(async achievement => {
                                const achievementcopy = { ...achievement }
                                const localised = globallocalised.get(achievementcopy.apiname) || await worker.localisedobj(steam3id,achievementcopy)
        
                                for (const key of Object.keys(localised)) {
                                    achievementcopy[key as "name" | "desc"] = localised[key as "name" | "desc"] || achievementcopy[key as "name" | "desc"]
                                }
                
                                return achievementcopy
                            })
                        )
                    })()

                    const allunlocked = live.every(ach => ach.unlocked)
                    workerinfo.allunlocked = allunlocked
                    ipcRenderer.emit("gametimer")
        
                    if (allunlocked && !hasshown) {
                        const { plat: platicon } = (config.get(`customisation.plat${themeswitch ? `.usertheme.${themeswitch[1].themes.plat}.customisation` : ""}`) as Customisation).customicons as CustomIcon
                        const customisation = config.get(`customisation.plat${themeswitch ? `.usertheme.${themeswitch[1].themes.plat}.customisation` : ""}`) as Customisation
        
                        const platnotify: Notify = {
                            id: Date.now(),
                            customisation,
                            type: "plat",
                            gamename: gamename || "???",
                            steam3id: steam3id,
                            apiname: "PLAT_NOTIFICATION",
                            name: "100%",
                            desc: "",
                            unlocked: true,
                            hidden: false,
                            percent: 0,
                            icon: platicon || sanhelper.setfilepath("img","ribbon.svg"),
                            gameicon: gameicon || sanhelper.setfilepath("img","sanlogosquare.svg"),
                            unlocktime: new Date(Date.now()).toISOString()
                        }
        
                        ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,platnotify,undefined,themeswitch?.[1].src))

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
                    log.write("WARN",`No running processes found for "${gamename}" - Retrying...`)
                    retries++
    
                    setTimeout(getrunninggameprocesses,1000)
                    return
                } else {
                    // If no processes are found by automatic process tracking or by manually adding a Linked Game, use "steam-game-path" as a last resort fallback
                    log.write("WARN",`No matching game processes found via automatic process tracking or Linked Games. Checking for executable using "steam-game-path"...`)
    
                    const exes = async () => (await (getGamePath(appid,true)?.game)?.executable as any[]).filter(({ executable }: any) => path.extname(executable) === (process.platform === "win32" ? ".exe" : ""))    
    
                    for (const exe of await exes()) {
                        await (async () => {
                            const processinfo: ProcessInfo[] = getprocessinfo(exe.executable)
                            processinfo.length && processes.push(...processinfo)
                        })()
                    }

                    // If an EXE is still not found, push an invalid process. The user will then need to manually release the game
                    if (!processes.length) {
                        log.write("WARN",`Unable to find running game process for "${gamename}": Game will not be able to quit automatically!`)
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
            
        // getrunninggameprocesses()
        usesanwatcher ? initgameloop() : getrunninggameprocesses()
    } catch (err) {
        log.write("ERROR",(err as Error).stack || (err as Error).message)
    }
}

startidle()

let gameid = 0
let ratimer: NodeJS.Timeout | null = null
const logactions = new Set<string>()
const lastlog: { [key: string]: string } = {}

for (const emu of rasupported) {
    lastlog[emu] = ""
}

// Set a variable in localStorage for the last earned achievement if it does not already exist
!localStorage.getItem("ralastachievement") && localStorage.setItem("ralastachievement","0")

// Converts `LogAction` to string and stores in `logactions` Set. This de-dupes by ensuring only unique new actions are stored
// Needs to be a string - Sets compare by reference (not by object or key/value), so comparing two `LogAction` objects directly will not work here
const getactionstr = (action: LogAction) => `${action.key}:${action.file}:${action.action}:${action.value}:${action.mode}`

const rastatsobj: StatsObj = {
    appid: 0,
    gamename: null,
    ra: true
}

const raworkerinfo: WorkerInfo = {
    appid: 0,
    gamename: null,
    achnum: undefined,
    allunlocked: undefined,
    ra: true
}

const startra = () => {
    if (ratimer) return log.write("WARN",`"ratimer" already active`)
    log.write("INFO",`"ratimer" started`)

    ratimer = setInterval(async () => {
        sanhelper.devmode && (window.racached = racached)
        const logmap = getlogmap()

        // Limits actions to active emulator
        for (const [key,file] of logmap) {
            if (!fs.existsSync(file) || (emu && emu !== key)) continue

            for (const newaction of getlastactions(key,file)) {
                if (newaction.action === "idle") continue

                const actionkey = getactionstr(newaction)
                if (logactions.has(actionkey)) continue

                logactions.add(actionkey)
                newaction.action === "stop" && setTimeout(() => logactions.clear(),1000)

                const [type,details] = await executeaction(newaction)
                const [keyname,msg] = details

                if (!type || !keyname || !msg) continue
                if (lastlog[keyname] === msg) continue

                type !== "CONSOLE" ? log.write(type as "INFO" | "ERROR", msg) : console.log(msg)

                lastlog[keyname] = msg

                const { action, value: appid, mode } = newaction
                if (appid === null) continue

                if (action !== "achievement") gameid = action === "start" ? appid : 0
                const live = action !== "stop"

                const {
                    gamename,
                    achievements,
                    achnum,
                    allunlocked
                } = {
                    gamename: live ? racached[0].gamename : null,
                    achievements: live ? racached as any : undefined,
                    achnum: live ? racached.length : undefined,
                    allunlocked: live ? (racached.length ? racached.every(ach => ach.unlocked) : false) : undefined
                }

                if (achievements) {
                    const unlocktime = Date.now()

                    for (const achievement of achievements) {
                        achievement.unlocktimestamp = achievement.unlocked ? unlocktime : -1
                    }
                }

                rastatsobj.appid = gameid
                rastatsobj.gamename = gamename
                rastatsobj.achievements = achievements
                rastatsobj.mode = mode

                ipcRenderer.send("stats",rastatsobj,action === "start")
                
                raworkerinfo.appid = gameid
                raworkerinfo.gamename = gamename
                raworkerinfo.achnum = achnum
                raworkerinfo.allunlocked = allunlocked

                ipcRenderer.emit("gametimer",null,"ra")
            }
        }
    },1000)
}

sanhelper.devmode && (window.testraunlock = testraunlock)
sanconfig.get().store.raemus.length && startra()

ipcRenderer.on("rastart",() => startra())
ipcRenderer.on("rastop",() => {
    if (!ratimer) return log.write("WARN",`"ratimer" is not active`)

    clearInterval(ratimer)
    ratimer = null
    log.write("INFO",`"ratimer" stopped`)
})

ipcRenderer.on("emu",() => ipcRenderer.send("emu",emu))
ipcRenderer.on("rastats",(event,init: boolean) => ipcRenderer.send("stats",rastatsobj,init))