import { ipcRenderer } from "electron"
import fs from "fs"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { getlogmap, getlastactions, executeaction, testraunlock, emu, rasupported, racached } from "./ra"

declare global {
    interface Window {
        gameid: number,
        testraunlock: Function,
        racached: any
    }
}

window.addEventListener("DOMContentLoaded",() => ipcRenderer.send("raworkerready"))

window.gameid = 0

let ratimer: NodeJS.Timeout | null = null
const logactions = new Set<string>()
const lastlog: { [key: string]: string } = {}

for (const emu of rasupported) {
    lastlog[emu] = ""
}

const statsobj: StatsObj = {
    appid: 0,
    gamename: null,
    ra: true
}

const workerinfo: WorkerInfo = {
    appid: 0,
    gamename: null,
    achnum: undefined,
    allunlocked: undefined,
    ra: true
}

ipcRenderer.on("gametimer",() => ipcRenderer.send("gametimer",workerinfo))

// Set a variable in localStorage for the last earned achievement if it does not already exist
!localStorage.getItem("ralastachievement") && localStorage.setItem("ralastachievement","0")

// Converts `LogAction` to string and stores in `logactions` Set. This de-dupes by ensuring only unique new actions are stored
// Needs to be a string - Sets compare by reference (not by object or key/value), so comparing two `LogAction` objects directly will not work here
const getactionstr = (action: LogAction) => `${action.key}:${action.file}:${action.action}:${action.value}:${action.mode}`

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

                if (action !== "achievement") window.gameid = action === "start" ? appid : 0
                const live = action !== "stop"

                const {
                    gamename,
                    achievements,
                    achnum,
                    allunlocked
                } = {
                    gamename: live ? (racached[0]?.gamename || null) : null,
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

                statsobj.appid = window.gameid
                statsobj.gamename = gamename
                statsobj.achievements = achievements
                statsobj.mode = mode

                ipcRenderer.send("stats",statsobj,action === "start")
                
                workerinfo.appid = window.gameid
                workerinfo.gamename = gamename
                workerinfo.achnum = achnum
                workerinfo.allunlocked = allunlocked

                ipcRenderer.emit("gametimer")
                action !== "achievement" && ipcRenderer.send("gameid",workerinfo)
            }
        }
    },1000)
}

sanhelper.devmode && (window.testraunlock = testraunlock)

ipcRenderer.on("rastart",() => startra())
ipcRenderer.on("rastop",() => {
    if (!ratimer) return log.write("WARN",`"ratimer" is not active`)

    clearInterval(ratimer)
    ratimer = null
    log.write("INFO",`"ratimer" stopped`)
})

ipcRenderer.on("gameid",() => ipcRenderer.send("gameid",workerinfo))
ipcRenderer.on("emu",() => ipcRenderer.send("emu",emu))
ipcRenderer.on("stats",(event,init: boolean) => ipcRenderer.send("stats",statsobj,init)) // Sent from "statwinready" IPC event in `listeners.ts`