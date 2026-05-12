import { ipcRenderer } from "electron"
import { gametimer } from "./gametimer"

let timer: NodeJS.Timeout | null = null

ipcRenderer.on("initgametimer",async (event,statsobj: StatsObj,nogame: string) => {
    const { appid, gamename, achievements } = statsobj
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

ipcRenderer.on("gametimercompletionstatus",(event,complete: boolean) => {
    complete ? (timer && clearInterval(timer)) : ipcRenderer.send("startgametimer")
    document.body.toggleAttribute("complete",complete)
})

ipcRenderer.on("gametimerwinaot",(event,value: boolean) => document.body.toggleAttribute("aot",value))

window.addEventListener("DOMContentLoaded",() => {
    document.getElementById("winopacity")!.onclick = () => document.body.toggleAttribute("hidden",!document.body.hasAttribute("hidden"))
    
    ipcRenderer.send("gametimerwinready")
})