import { ipcRenderer } from "electron"
import { log } from "./log"

document.getElementById("okbtn")!.onclick = () => {
    return new Promise<void>(resolve => {
        ipcRenderer.send("poswincoords")
        resolve()
    })
    .then(() => window.close())
    .catch(err => log.write("ERROR",`Error setting notification position: ${err}`))
}

ipcRenderer.once("poswin", (event,type,bounds: { width: number, height: number }) => {
    document.body.setAttribute(type,"")

    document.documentElement.style.setProperty("--width",`${bounds.width}px`)
    document.documentElement.style.setProperty("--height",`${bounds.height}px`)
})

window.addEventListener("DOMContentLoaded", () => ipcRenderer.send("poswinready"))