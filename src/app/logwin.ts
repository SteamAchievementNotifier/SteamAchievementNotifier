import { ipcRenderer, clipboard } from "electron"
import { language } from "./language"

// Prevent page zoom
window.onkeydown = event => ((event.code === "Minus" || event.code === "Equal") && (event.ctrlKey || event.metaKey)) ? event.preventDefault() : null

document.getElementById("close")!.onclick = () => window.close()
document.getElementById("copylog")!.onclick = () => clipboard.writeText(`\`${document.querySelector("#logcontents > code")!.innerHTML.replace(/<br>/g,"\n")}\``)

window.addEventListener("DOMContentLoaded", () => {
    ipcRenderer.send("logwinready")
    ipcRenderer.once("logwinready", (event,logcontents) => document.querySelector("#logcontents > code")!.innerHTML = logcontents)
    
    ipcRenderer.send("starttime")
    ipcRenderer.once("starttime", async (event,starttime) => {
        document.getElementById("tagline")!.textContent = await language.get("tagline",["logwin","content"])
        document.getElementById("starttime")!.textContent = starttime
        document.querySelector(".rect#copylog > span")!.textContent = await language.get("copylog",["logwin","content"])
    })
})