import { ipcRenderer } from "electron"
import { log } from "./log"

enum TimeUnit {
    SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE
}

export const gametimer = {
    get json(): Record<number,{ elapsed: number, complete: boolean }> {
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
    stop: (appid: number,started: number) => {
        const { json } = gametimer

        json[appid].elapsed += Date.now() - started
        localStorage.setItem("gametimer",JSON.stringify(json,null,4))
        
        return log.write("INFO",`Game Timer for AppID ${appid} stopped`)
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
    setcompletionstatus: (appid: number,complete: boolean,started: number) => {        
        const { json } = gametimer
        if (!json[appid] || json[appid].elapsed === undefined) return log.write("WARN",`Unable to set "complete" flag in Game Timer entry for AppID ${appid}: Valid entry not found in localStorage`)
            
        json[appid].complete = complete
        localStorage.setItem("gametimer",JSON.stringify(json,null,4))
        
        complete ? gametimer.stop(appid,started) : ipcRenderer.send("startgametimer",Date.now())
        log.write("INFO",`Game Timer for AppID ${appid} ${complete ? "stopped due to game completion" : "restarted due to re-locked achievements"}`)

        ipcRenderer.send("gametimercompletionstatus",complete)
    }
}