import { ipcMain, ipcRenderer, BrowserWindow, shell } from "electron"
import path from "path"
import { autoUpdater } from "electron-updater"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { language } from "./language"

export const update = {
    check: () => !sanhelper.devmode ? autoUpdater.checkForUpdates() : log.write("INFO",`Unable to check for updates in devmode`),
    setlisteners: (win: BrowserWindow) => {
        autoUpdater.autoDownload = false
        sanhelper.devmode && ipcMain.on("availabletest", (event,newversion: string) => win.webContents.send("updateavailable",newversion || "1.9.X"))
        sanhelper.devmode && ipcMain.on("noupdatetest", (event,currentversion: string) => win.webContents.send("noupdateavailable",currentversion || "1.9.X"))

        ipcMain.once("updateconfirmed", () => autoUpdater.downloadUpdate())
        autoUpdater.on("checking-for-update", () => update.ipc(win,"Checking for update..."))

        autoUpdater.on("update-available", info => {
            update.ipc(win,`Update available (V${info.version})`)
            win.webContents.send("updateavailable",info.version)
        })

        autoUpdater.on("update-not-available", () => {
            update.ipc(win,`Latest version installed (V${autoUpdater.currentVersion})`)
            win.webContents.send("noupdateavailable",autoUpdater.currentVersion.version)
        })

        autoUpdater.on("download-progress", progress => win.webContents.send("updateprogress",progress.percent))
        autoUpdater.on("error", err => update.ipc(win,err))

        autoUpdater.on("update-downloaded", info => {
            autoUpdater.autoInstallOnAppQuit = true
            
            ipcMain.emit("update")
            update.ipc(win,`Installing update (V${info.version})...`)

            autoUpdater.quitAndInstall()
        })
    },
    ipc: (win: BrowserWindow,msg: string | Error,nolog?: boolean) => win.webContents.send("updatemsg",msg,nolog),
    renderer: () => {
        ipcRenderer.on("updatemsg", (event,msg: string | Error,nolog: boolean) => !nolog && log.write(msg instanceof Error ? "ERROR" : "INFO",`[AUTOUPDATER]: ${msg instanceof Error ? `Error during update: ${msg.stack}` : msg}`))

        const updatemsg = async (newversion: string) => {
            dialog.open({
                title: `${await language.get("updateavailable",["update"])}`,
                type: "default",
                icon: sanhelper.setfilepath("icon","update_white.svg"),
                sub: await language.get("sub",["update"]),
                addHTML: path.join(__dirname,"progressbar.html"),
                buttons: [{
                    id: "update",
                    label: await language.get("update",["update"]),
                    icon: sanhelper.setfilepath("icon","update_white.svg"),
                    click: () => {
                        document.body.setAttribute("updating","")
                        ipcRenderer.send("updateconfirmed")
                    }
                }]
            })
        
            document.querySelector("dialog span#newversion")!.textContent = `V${newversion}`

            const releasenotelinks = new Map<string,string>([
                ["discord","https://discord.gg/FxCFtpd3eu"],
                ["github",`https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/${newversion}`]
            ])
        
            releasenotelinks.forEach((value,key) => {
                const a = document.createElement("a")
                a.href = value
                a.onclick = event => {
                    event.preventDefault()
                    shell.openExternal(value)
                }
                a.textContent = key === "discord" ? "Discord" : "GitHub"
                document.querySelector(`dialog span#${key}releasenotes`)!.appendChild(a)
            })
        }
        
        ipcRenderer.on("updateavailable", (event,newversion: string) => {
            (document.querySelector(".menubtn#update") as HTMLButtonElement)!.onclick = () => updatemsg(newversion)
            document.body.setAttribute("update","")
            updatemsg(newversion)
        })
        
        ipcRenderer.on("updateprogress", (event,progress: number) => {
            sanhelper.devmode && console.log(`[UPDATE]: Download progress: ${parseInt(progress.toString())}%`)
            const progresswrapper = document.querySelector(`dialog .wrapper:has(> #progressbar)`) as HTMLElement
            progresswrapper && progresswrapper.style.setProperty(`--progress`,`${parseInt(progress.toString())}%`)
        })
        
        window.update = updatemsg
        
        const availabletest = (newversion: string) => ipcRenderer.send("availabletest",newversion)
        window.availabletest = availabletest
    }
}