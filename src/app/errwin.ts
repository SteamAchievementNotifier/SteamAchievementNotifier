import { ipcRenderer, shell } from "electron"
import path from "path"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { language } from "./language"

dialog.init("ERROR")

ipcRenderer.on("err",(event,err: Error | string) => document.querySelector(".errorbox > code")!.textContent = err instanceof Error ? err.stack! : err)

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("subtitle")!.textContent = await language.get("subtitle",["error","content"])
    document.querySelector(".errorbox > div > span")!.textContent = await language.get("details",["error","content"])

    const btns = [
        "reset",
        "report",
        "log",
        "exit"
    ]

    btns.forEach(async lbl => document.querySelector(`#${lbl}btn > span`)!.textContent = await language.get(lbl,[lbl === "reset" ? "reset" : "error","content"]))

    document.getElementById("ss")!.onclick = () => {
        ipcRenderer.send("capture")
        ipcRenderer.once("capture",(event,err) => {
            document.getElementById("ss")!.setAttribute(!err ? "copied" : "failed","")
            !err && log.write("INFO",`Error window screenshot copied to clipboard`)
        })
    }
    
    document.getElementById("resetbtn")!.onclick = async () => {
        dialog.open({
            type: "default",
            title: await language.get("reset",["reset","content"]),
            icon: sanhelper.setfilepath("icon","reset.svg"),
            sub: await language.get("sub",["reset","content"]),
            buttons: [{
                id: "ok",
                icon: "",
                label: await language.get("ok"),
                click: () => ipcRenderer.send("restart","Reset App confirmed by User")
            }] as Button[]
        },true)

        document.getElementById("backbtn")!.textContent = await language.get("back")
    }
    
    document.getElementById("reportbtn")!.onclick = async () => {
        dialog.open({
            type: "default",
            title: await language.get("report",["error","content"]),
            icon: sanhelper.setfilepath("icon","report.svg"),
            sub: await language.get("sub",["error","content"]),
            buttons: [{
                id: "discord",
                label: "Discord",
                icon: sanhelper.setfilepath("icon","discord.svg"),
                click: async () => await shell.openExternal("https://discord.gg/FxCFtpd3eu")
            },
            {
                id: "github",
                label: "GitHub",
                icon: sanhelper.setfilepath("icon","github.svg"),
                click: async () => await shell.openExternal("https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues")
            }] as Button[]
        },true)

        document.getElementById("backbtn")!.textContent = await language.get("back")
    }
    
    document.getElementById("logbtn")!.onclick = () => shell.openPath(path.join(sanhelper.appdata,"logs"))
    document.getElementById("exitbtn")!.onclick = () => ipcRenderer.send("exit",`Exited via Error window`)
})
