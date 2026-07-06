import { ipcRenderer } from "electron"
import { sanconfig } from "./config"
import { language } from "./language"
import { gametimer } from "./gametimer"

declare global {
    interface Window {
        appid: number
    }
}

let timer: NodeJS.Timeout | null = null
window.appid = 0

const resettimer = (timerelem: HTMLElement,clear?: boolean) => {
    if (!clear) {
        timerelem.textContent = "00:00:00.000"
        document.body.removeAttribute("complete")
    }

    timer && clearInterval(timer)
    timer = null
}

ipcRenderer.on("gametimer",async (event,workerinfo: WorkerInfo,runninggametimer: RunningGameTimer) => {
    const { appid, gamename, allunlocked, ra } = workerinfo
    const active = ra ? "ra" : "steam"
    
    const gamenamewrapper = document.getElementById("gamename")!
    const timerelem = document.getElementById("timer")!

    gamenamewrapper.textContent = gamename || await language.get("game",["app","content"])
    gamenamewrapper.toggleAttribute("appid",!!appid)
    
    document.body.toggleAttribute("complete",!!allunlocked)

    const { json } = gametimer

    if (appid) {
        window.appid = appid
        ipcRenderer.send("extwinsstate",{ win: "gametimer", state: ra ? "ra" : "steam" } as ExtWinsPayload)
        
        const stored = json[appid]?.elapsed ?? 0
        const { started } = runninggametimer
        
        if (!timer && gametimer.start(appid)) timer = setInterval(() => timerelem.textContent = gametimer.currenttime(stored,started),50)

        gametimer.setcompletionstatus(appid,active,started,workerinfo)

        if (!!allunlocked) {
            timerelem.textContent = gametimer.currenttime(stored,started)
            resettimer(timerelem,true)
        }

        return
    }

    window.appid = 0
    ipcRenderer.send("extwinsstate",{ win: "gametimer", state: null } as ExtWinsPayload)

    resettimer(timerelem)

    if (!runninggametimer.appid) return

    const { started } = runninggametimer
    gametimer.stop(runninggametimer.appid,active,started)
})

ipcRenderer.on("gametimerwinappid",() => ipcRenderer.send("gametimerwinappid",window.appid || 0))

ipcRenderer.on("resetgametimer",async (event,runninggametimer: RunningGameTimer) => {
    const { json } = gametimer
    const timerelem = document.getElementById("timer")!

    json[runninggametimer.appid] = {
        elapsed: 0,
        complete: false
    }

    localStorage.setItem("gametimer",JSON.stringify(json,null,4))

    resettimer(timerelem)

    const stored = 0
    const { started } = runninggametimer

    timer = setInterval(() => timerelem.textContent = gametimer.currenttime(stored,started),50)

    ipcRenderer.send("resetgametimerstatus",runninggametimer.appid)
})

ipcRenderer.on("gametimerwinaot",(event,value: boolean) => document.body.toggleAttribute("aot",value))

window.addEventListener("DOMContentLoaded",() => {
    document.getElementById("close")!.onclick = () => window.close()

    const winopacity = document.getElementById("winopacity")!
    document.body.toggleAttribute("hidden",sanconfig.get().store.gametimerwinopacity)

    winopacity.onclick = () => {
        const config = sanconfig.get()
        const value = !config.get("gametimerwinopacity")

        config.set("gametimerwinopacity",value)

        document.body.toggleAttribute("hidden",value)
    }
    
    ipcRenderer.send("gametimerwinready")
})