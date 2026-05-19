import { ipcRenderer } from "electron"
import { log } from "./log"

enum TimeUnit {
    SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE
}

export const gametimer = {
    get json(): Record<number,GameTimer> {
        const lsentry = localStorage.getItem("gametimer")
        !lsentry && localStorage.setItem("gametimer",JSON.stringify({},null,4))

        return JSON.parse(localStorage.getItem("gametimer") ?? "{}")
    },
    start: (appid: number) => {
        if (!appid) {
            log.write("WARN",`Invalid AppID (${appid}) supplied to Game Timer`)
            return false
        }

        const { json } = gametimer

        if (!json[appid] || json[appid].elapsed === undefined) {
            json[appid] = { elapsed: 0, complete: false }
            localStorage.setItem("gametimer",JSON.stringify(json,null,4))
            log.write("INFO",`Game Timer entry for AppID ${appid} written to localStorage`)
        }

        if (json[appid]?.complete) {
            log.write("INFO",`AppID ${appid} has been completed in ${gametimer.timestr(json[appid].elapsed)}`)
            return false
        }

        log.write("INFO",`Game Timer for AppID ${appid} started`)
        return true
    },
    stop: (appid: number,active: "steam" | "ra",started: number) => {
        const { json } = gametimer

        json[appid].elapsed += Date.now() - started
        localStorage.setItem("gametimer",JSON.stringify(json,null,4))

        ipcRenderer.send("stopgametimer",appid,active)
        log.write("INFO",`Game Timer for AppID ${appid} stopped${json[appid].complete ? " due to game completion" : ""}`)
        
        return
    },
    pad: (num: number,size = 2) => num.toString().padStart(size,"0"),
    timeobj: (timestamp: number) => {
        const total = Math.floor(timestamp)
    
        const hours = Math.floor(total / TimeUnit.HOUR)
        const minutes = Math.floor((total % TimeUnit.HOUR) / TimeUnit.MINUTE)
        const seconds = Math.floor((total % TimeUnit.MINUTE) / TimeUnit.SECOND)
        const milliseconds = total % TimeUnit.SECOND

        return { hours, minutes, seconds, milliseconds }
    },
    timestr: (timestamp: number) => {
        const { hours, minutes, seconds, milliseconds } = gametimer.timeobj(timestamp)
        const { pad } = gametimer

        return [
            pad(hours),
            pad(minutes),
            `${pad(seconds)}.${pad(milliseconds,3)}`
        ].join(":")
    },
    currenttime: (stored: number,started?: number) => {
        const timestamp = started ? stored + (Date.now() - started) : stored
        return gametimer.timestr(timestamp)
    },
    setcompletionstatus: (appid: number,active: "steam" | "ra",started: number,workerinfo: WorkerInfo) => {        
        const { allunlocked } = workerinfo
        const { json } = gametimer
        if (!json[appid] || json[appid].elapsed === undefined) return log.write("WARN",`Unable to set "complete" flag in Game Timer entry for AppID ${appid}: No valid entry found in localStorage`)

        const wascomplete = json[appid].complete // Cache the old value before overwriting
            
        json[appid].complete = !!allunlocked
        localStorage.setItem("gametimer",JSON.stringify(json,null,4))
        
        !!allunlocked && gametimer.stop(appid,active,started)
        wascomplete && !!!allunlocked && ipcRenderer.send("gametimer",workerinfo) // Rebuild `runninggametimer` if previously-completed game becomes incomplete again
    }
}