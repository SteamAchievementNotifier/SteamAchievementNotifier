import { ipcRenderer, clipboard } from "electron"
import fs from "fs"
import path from "path"
import { language } from "./language"
import { sanhelper } from "./sanhelper"

// Prevent page zoom
window.onkeydown = event => ((event.code === "Minus" || event.code === "Equal") && (event.ctrlKey || event.metaKey)) ? event.preventDefault() : null

document.getElementById("close")!.onclick = () => window.close()
document.getElementById("copylog")!.onclick = () => clipboard.writeText(`\`${document.querySelector("#logcontents > code")!.innerHTML.replace(/<br>/g,"\n")}\``)

window.addEventListener("DOMContentLoaded", () => {
    ipcRenderer.send("logwinready")
    ipcRenderer.on("updatelogwin", (event,logcontents,logtype,filename) => {
        const select = document.getElementById("logtype")! as HTMLSelectElement
        select.innerHTML = ""

        for (const opt of [
            "san",
            "rust",
            "sanhelperrs"
        ]) {
            select.insertAdjacentHTML("beforeend",`<option value="${opt}">${opt}.log</option>`)
        }

        const logfiles = fs.readdirSync(path.join(sanhelper.appdata,"logs")).filter(file => file.endsWith("_san.log")).sort()

        if (logfiles.length) {
            for (const logfile of logfiles) {
                select.insertAdjacentHTML("beforeend",`<option value="bak" timestamp="${logfile.replace(/_san.log$/,"")}">${logfile}</option>`)
            }
        }

        const bakopt = filename ? Array.from(select.options).find(opt => opt.getAttribute("timestamp") === filename.replace(/_san.log$/,"")) : undefined
        logtype === "bak" ? (bakopt ? (bakopt.selected = true) : (select.value = "san")) : (select.value = logtype) // Default to "san.log" if logtype is "bak" but no matching log backup is found
        
        document.querySelector("#logcontents > code")!.innerHTML = logcontents
    })
    
    ipcRenderer.send("starttime")
    ipcRenderer.once("starttime", async (event,starttime) => {
        document.getElementById("tagline")!.textContent = await language.get("tagline",["logwin","content"])
        document.getElementById("starttime")!.textContent = starttime
        document.querySelector(".rect#copylog > span")!.textContent = await language.get("copylog",["logwin","content"])
    })

    const select = document.getElementById("logtype")! as HTMLSelectElement

    select.onchange = event => {
        const target = event.target as HTMLSelectElement
        const value = target.value as "san" | "rust" | "sanhelperrs" | "bak"
        const filename = fs.readdirSync(path.join(sanhelper.appdata,"logs")).find(file => file.replace(/_san.log$/,"") === target.options[target.selectedIndex].getAttribute("timestamp"))
        
        ipcRenderer.send("updatelogtype",value,filename)
    }
})