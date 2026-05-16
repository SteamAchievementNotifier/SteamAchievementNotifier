import { ipcRenderer } from "electron"
import { sanconfig } from "./config"
import { language } from "./language"
import { gametimer } from "./gametimer"

let timer: NodeJS.Timeout | null = null

ipcRenderer.on("gametimer",async (event,workerinfo: WorkerInfo,runninggametimer: RunningGameTimer | null) => {
    const { appid, gamename, allunlocked } = workerinfo
    
    const gamenamewrapper = document.getElementById("gamename")!
    const timerelem = document.getElementById("timer")!

    gamenamewrapper.textContent = gamename || await language.get("game",["app","content"])
    gamenamewrapper.toggleAttribute("appid",!!appid)
    
    document.body.toggleAttribute("complete",!!allunlocked)

    const { json } = gametimer

    if (runninggametimer && appid) {
        const stored = json[appid]?.elapsed ?? 0
        const { started } = runninggametimer
        
        if (!timer && gametimer.start(appid)) timer = setInterval(() => timerelem.textContent = gametimer.currenttime(stored,started),50)

        if (!!allunlocked) {
            gametimer.setcomplete(appid,started)
            timerelem.textContent = gametimer.currenttime(stored,started)

            timer && clearInterval(timer)
            timer = null
        }

        return
    }

    timerelem.textContent = "00:00:00.000"
    document.body.removeAttribute("complete")

    timer && clearInterval(timer)
    timer = null

    if (!runninggametimer) return

    const { started } = runninggametimer
    gametimer.stop(runninggametimer.appid,started)
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