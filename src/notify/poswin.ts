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

ipcRenderer.once("poswin", (event,type) => document.body.setAttribute(type,""))
window.addEventListener("DOMContentLoaded", () => ipcRenderer.send("poswinready"))