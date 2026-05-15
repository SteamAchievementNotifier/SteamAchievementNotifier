import { ipcRenderer } from "electron"
import { sanconfig } from "./config"
import { gametimer } from "./gametimer"

let timer: NodeJS.Timeout | null = null

ipcRenderer.on("initgametimer",async (event,statsobj: StatsObj,nogame: string) => {
    const { appid, gamename, achievements, ra, action } = statsobj
    if (ra && !action) return // Prevents invalid RA actions sent via `worker.ts` from stopping the timer on achievement unlocks
    
    const gamenamewrapper = document.getElementById("gamename")!
    const timerelem = document.getElementById("timer")!
    
    gamenamewrapper.textContent = gamename || nogame
    gamenamewrapper.toggleAttribute("appid",!!appid)
    
    achievements && document.body.toggleAttribute("complete",achievements.every(ach => ach.unlocked))
    
    if (appid) return

    timer && clearInterval(timer)
    timerelem.textContent = "00:00:00.000"
    document.body.removeAttribute("complete")
})

ipcRenderer.on("updategametimer",(event,obj: { stored: number, started?: number }) => {
    const { stored, started } = obj
    const timerelem = document.getElementById("timer")!
    
    timer && clearInterval(timer)
    timer = setInterval(() => timerelem.textContent = gametimer.currenttime(stored,started),16)
})

ipcRenderer.on("gametimercomplete",() => {
    timer && clearInterval(timer)
    document.body.setAttribute("complete","")
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