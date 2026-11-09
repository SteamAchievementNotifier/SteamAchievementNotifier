import { ipcMain, ipcRenderer, BrowserWindow, shell } from "electron"
import path from "path"
import fs from "fs"
import { autoUpdater } from "electron-updater"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { language } from "./language"
import semver from "semver"

export const update = {
    check: () => !sanhelper.devmode ? autoUpdater.checkForUpdates() : log.write("INFO",`Unable to check for updates in devmode`),
    setlisteners: (win: BrowserWindow) => {
        autoUpdater.autoDownload = false
        sanhelper.devmode && ipcMain.on("availabletest",(event,newversion: string) => win.webContents.send("updateavailable",newversion || semver.inc(sanhelper.semver!,"patch")!))
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
            const current = semver.coerce(sanhelper.version)!
    
            return fs.readdirSync(parent,{ withFileTypes: true })
                .filter(entry => entry.isDirectory())
                .map(entry => ({
                    entry,
                    match: /^Steam Achievement Notifier \(V(\d+\.\d+)\)( \[DEVMODE\])?$/.exec(entry.name)
                }))
                .filter(({ match }) => match && !!match[2] === sanhelper.devmode && semver.lt(semver.coerce(match[1])!,current))
                .sort((a,b) => semver.rcompare(semver.coerce(a.match![1])!,semver.coerce(b.match![1])!))
                .map(({ entry }) => path.join(parent,entry.name))[0]
        } catch {
            return undefined
        }
    },
    /**
     * Removes/rebuilds the following upon upgrading to next major version.
     * 
     * Windows:
     * - Auto-start entries in the Windows Registry (via `sanhelper.rs`):
     *      - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\Steam Achievement Notifier (VX.X)`
     *      - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\StartupApproved\Run\Steam Achievement Notifier (VX.X)`
     * - Desktop shortcut (if present): `%userprofile%\Desktop\Steam Achievement Notifier (VX.X).lnk`
     * 
     * Linux:
     * - Auto-start entry:
     *      - `~/.config/autostart/Steam Achievement Notifier (VX.X).desktop`
     * - Desktop shortcut (if present):
     *      - `${xdgdesktopdir}/Steam Achievement Notifier (VX.X).desktop` or
     *      - `~/Desktop/Steam Achievement Notifier (VX.X).desktop`
     */
    cleanup: (legacyversion: string,desktop: boolean,startwin: boolean) => {
        if (legacyversion === sanhelper.version) return

        try {
            if (sanhelper.removeautostartentries(legacyversion,process.platform)) {
                log.write("INFO",`Removed legacy V${legacyversion} autostart entry`)
                startwin && ipcMain.emit("startwin",null,true) // rebuild under the new name
            }
        } catch (err) {
            log.write("WARN",`Unable to remove legacy V${legacyversion} autostart entry: ${(err as Error).message}`)
        }

        try {
            const shortcutdir = sanhelper.desktopshortcutpath(process.platform)
            if (!shortcutdir) return

            const legacyshortcut = path.join(shortcutdir,`Steam Achievement Notifier (V${legacyversion}).${process.platform === "linux" ? "desktop" : "lnk"}`)
            if (!fs.existsSync(legacyshortcut)) return

            fs.rmSync(legacyshortcut)
            log.write("INFO",`Removed legacy V${legacyversion} desktop shortcut`)
            desktop && sanhelper.desktop(true) // rebuild under the new name
        } catch (err) {
            log.write("WARN",`Unable to remove legacy V${legacyversion} desktop shortcut: ${(err as Error).message}`)
        }
    }
}