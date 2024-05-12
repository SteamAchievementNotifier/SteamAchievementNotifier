import { ipcRenderer } from "electron"

ipcRenderer.on("debuginfoupdated", (event,debuginfo: DebugInfo) => {
    const { appid, gamename, pollrate, processes, steam3id, steam64id, username, userust } = debuginfo

    const lbls = new Map<string,any>([
        ["username",username],
        ["steam3id",steam3id],
        ["steam64id",steam64id],
        ["appid",appid],
        ["gamename",gamename],
        ["pollrate",pollrate],
        ["userust",userust]
    ])

    lbls.forEach((value,key) => {
        document.querySelector(`#${key} > .key`)!.textContent = key
        document.querySelector(`#${key} > .value`)!.textContent = value
    })

    const debugprocesses = processes as DebugProcessInfo[]

    debugprocesses.forEach(({ exe, pid, active }: DebugProcessInfo,i) => {
        const processeselem = document.getElementById("processes")!
        processeselem.innerHTML = ""

        const html = `<span class="key">process_${i}</span>: <span class="value">${exe} (${pid}) [${active ? "ACTIVE" : "INACTIVE"}]</span>`
        processeselem.insertAdjacentHTML("beforeend",html)
    })
})

document.addEventListener("DOMContentLoaded", () => ipcRenderer.send("debugwinready"))