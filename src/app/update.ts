import { ipcMain, ipcRenderer, BrowserWindow, shell } from "electron"
import path from "path"
import fs from "fs"
import { autoUpdater } from "electron-updater"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { language } from "./language"
import { coerce, lt, rcompare, inc } from "semver"

export const update = {
    check: () => !sanhelper.devmode ? autoUpdater.checkForUpdates() : log.write("INFO",`Unable to check for updates in devmode`),
    setlisteners: (win: BrowserWindow) => {
        autoUpdater.autoDownload = false
        sanhelper.devmode && ipcMain.on("availabletest",(event,newversion: string) => win.webContents.send("updateavailable",newversion || inc(sanhelper.semver!,"patch")!))
        sanhelper.devmode && ipcMain.on("noupdatetest",(event,currentversion: string) => win.webContents.send("noupdateavailable",currentversion || sanhelper.semver!))

        ipcMain.once("updateconfirmed",() => autoUpdater.downloadUpdate())
        autoUpdater.on("checking-for-update",() => update.ipc(win,"Checking for update..."))

        autoUpdater.on("update-available", info => {
            update.ipc(win,`Update available (V${info.version})`)
            win.webContents.send("updateavailable",info.version)
        })

        autoUpdater.on("update-not-available",() => {
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
        ipcRenderer.on("updatemsg",(event,msg: string | Error,nolog: boolean) => !nolog && log.write(msg instanceof Error ? "ERROR" : "INFO",`[AUTOUPDATER]: ${msg instanceof Error ? `Error during update: ${msg.stack}` : msg}`))

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
        
        ipcRenderer.on("updateavailable",(event,newversion: string) => {
            (document.querySelector(".menubtn#update") as HTMLButtonElement)!.onclick = () => updatemsg(newversion)
            document.body.setAttribute("update","")

            ;(async () => {
                const config = (await import("./config")).sanconfig.get()
                !config.get("noupdatedialog") && updatemsg(newversion)
            })()
        })
        
        ipcRenderer.on("updateprogress",(event,progress: number) => {
            sanhelper.devmode && console.log(`[UPDATE]: Download progress: ${parseInt(progress.toString())}%`)
            const progresswrapper = document.querySelector(`dialog .wrapper:has(> #progressbar)`) as HTMLElement
            progresswrapper && progresswrapper.style.setProperty(`--progress`,`${parseInt(progress.toString())}%`)
        })
        
        window.update = updatemsg
        
        const availabletest = (newversion: string) => ipcRenderer.send("availabletest",newversion)
        window.availabletest = availabletest
    },
    migrateappdata: (legacypath: string) => {
        const newconfig = path.join(sanhelper.appdata,"config.json")

        if (legacypath !== sanhelper.appdata && !fs.existsSync(newconfig) && fs.existsSync(path.join(legacypath,"config.json"))) {
            try {
                fs.cpSync(legacypath,sanhelper.appdata,{
                    recursive: true,
                    filter: src => path.relative(legacypath,src) !== "logs"
                })
                return { level: "INFO", msg: `Migrated "${legacypath}" to "${sanhelper.appdata}" successfully` } as MigrationResult
            } catch (err) {
                try { fs.rmSync(newconfig,{ force: true }) } catch {}
                return { level: "ERROR", msg: `Error migrating "${legacypath}" to "${sanhelper.appdata}": ${(err as Error).message}` } as MigrationResult
            }
        }
    },
    getlegacydir: () => {
        try {
            const parent = path.dirname(sanhelper.appdata)
            const current = coerce(sanhelper.version)!
    
            return fs.readdirSync(parent,{ withFileTypes: true })
                .filter(entry => entry.isDirectory())
                .map(entry => ({
                    entry,
                    match: /^Steam Achievement Notifier \(V(\d+\.\d+)\)( \[DEVMODE\])?$/.exec(entry.name)
                }))
                .filter(({ match }) => match && !!match[2] === sanhelper.devmode && lt(coerce(match[1])!,current))
                .sort((a,b) => rcompare(coerce(a.match![1])!,coerce(b.match![1])!))
                .map(({ entry }) => path.join(parent,entry.name))[0]
        } catch {
            return undefined
        }
    }
}