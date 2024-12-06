import { app, ipcMain, BrowserWindow, Tray, Menu, nativeImage, dialog, Notification, screen, globalShortcut, BrowserWindowConstructorOptions, NotificationConstructorOptions, desktopCapturer, clipboard, shell, ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import Store from "electron-store"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"
import { sanconfig } from "./config"
import { language } from "./language"
import { update } from "./update"

let appid: number = 0
let extwin: BrowserWindow | null = null
let statwin: BrowserWindow | null = null

export const listeners = {
    setexit: (win?: BrowserWindow) => {
        ipcMain.on("exit",(event,reason) => {
            if (extwin) {
                extwin.destroy()
                extwin = null
            }

            log.write("EXIT",reason || `No exit reason provided.`)

            // Stores last known monitor IDs in localStorage to compare against, as new monitor IDs are generated on restart due to Electron bug
            if (win) {
                ipcMain.on("storemonitors", () => {
                    log.write("INFO",`"monitors" localStorage object updated`)
                    app.exit()
                })

                win.webContents.send("storemonitors")
            } else {
                app.exit()
            }
        })
    },
    set: (win: BrowserWindow): void => {
        listeners.setexit(win)

        app.on("second-instance", () => win.show())

        // Prevent page zoom
        win.webContents.on("before-input-event",(event,input) => ((input.code === "Minus" || input.code === "Equal") && (input.control || input.meta)) && event.preventDefault())

        // Fixes issue where non-standard Windows scaling values - e.g. 149% - causes window to grow larger each time `savewindowstate()` is called
        const roundbounds = (value: number,type: "size" | "pos") => {
            const factor = type === "size" ? 10 : 5
            return Math[type === "size" ? "floor" : "round"](value / factor) * factor
        }

        const savewindowstate = (wintype: BrowserWindow,key?: string) => {
            const config = sanconfig.get()
            const { width, height, x, y } = wintype.getBounds()

            const bounds = {
                x: roundbounds(x,"pos"),
                y: roundbounds(y,"pos")
            } as { x: number, y: number, width?: number, height?: number }

            if (wintype === win) {
                bounds.width = roundbounds(width,"size")
                bounds.height = roundbounds(height,"size")
            }

            return key ? config.set(key,bounds) : config.set(bounds)
        }

        win.on("close", () => savewindowstate(win))

        let tray: Tray | null = null
        tray = new Tray(path.join(__root,"img","sanlogo_idle.png"))

        let suspended = false

        const updatetray = async (tray: Tray,gamename?: string | null,num?: number) => {
            tray && tray.removeAllListeners()

            tray.setToolTip(`Steam Achievement Notifier (V${sanhelper.version})`)
            tray.setImage(path.join(__root,"img",`sanlogo_${num === 0 ? "inactive" : (gamename ? "active" : "idle")}.${process.platform === "win32" ? "ico" : "png"}`))

            const template: Electron.MenuItemConstructorOptions[] = [
                {
                    label: gamename || await language.get("game",["app","content"]),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon",`dot_${num === 0 ? "yellow" : (gamename ? "green" : "red")}.png`))
                            .resize({ width: 10 }),
                    enabled: false
                },
                {
                    type: "separator"
                },
                {
                    label: await language.get("options"),
                    icon: nativeImage
                        .createFromPath(path.join(__root,"icon","options.png"))
                        .resize({ width: 16 }),
                    type: "submenu",
                    submenu: [
                        {
                            label: await language.get("resetwindow"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon","resetwin.png"))
                                    .resize({ width: 16 }),
                            click: () => ipcMain.emit("resetwin")
                        },
                        {
                            label: await language.get("releasegame"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon","donotdisturb.png"))
                                    .resize({ width: 16 }),
                            click: () => ipcMain.emit("releasegame")
                        },
                        {
                            label: await language.get(suspended ? "resume" : "suspend"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon",`power_${suspended ? "on" : "off"}.png`))
                                    .resize({ width: 16 }),
                            click: () => ipcMain.emit("suspendresume")
                        },
                        {
                            label: await language.get("restartapp"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon","replay.png"))
                                    .resize({ width: 16 }),
                            click: () => ipcMain.emit("restartapp")
                        }
                    ]
                },
                {
                    label: await language.get("exit"),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon","close.png"))
                            .resize({ width: 16 }),
                    click: () => {
                        savewindowstate(win)
                        ipcMain.emit("exit",null,`App exited via System Tray.`)
                    }
                }
            ]

            // Mouse events are ignored on Linux, so add "Show" option to system tray
            process.platform === "linux" && template.splice(template.length - 1,0,{
                label: await language.get("show"),
                icon: nativeImage
                        .createFromPath(path.join(__root,"icon","show.png"))
                        .resize({ width: 16 }),
                click: () => {
                    win.show()
                    win.focus()
                }
            })

            tray.setContextMenu(Menu.buildFromTemplate(template))
            tray.on("double-click",() => win.show())
        }

        updatetray(tray)
        ipcMain.on("lang", (event,gamename: string | null,num: number) => {
            updatetray(tray!,gamename,num)
            statwin && worker && worker.webContents.send("stats")
        })

        ipcMain.on("steamlang",() => statwin && worker && worker.webContents.send("stats"))

        let worker: BrowserWindow | null = null

        ipcMain.on("createworker",() => {
            worker = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Worker`,
                width: 100,
                height: 100,
                center: true,
                show: false,
                autoHideMenuBar: true,
                focusable: false,
                fullscreen: false,
                fullscreenable: false,
                minimizable: false,
                maximizable: false,
                resizable: false,
                hasShadow: false,
                movable: false,
                skipTaskbar: true,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            worker.loadFile(path.join(__root,"dist","app","worker.html"))
            sanhelper.devmode && sanhelper.setdevtools(worker)
            worker.once("closed",() => log.write("EXIT",`"Worker" process closed`))
        })

        ipcMain.on("worker",(event,args) => console.log(JSON.parse(args)))
        ipcMain.on("noexe",(event,addlinkfailed?: boolean) => {
            const config = sanconfig.get()
            let notifywin: BrowserWindow | null = null
            const ipctype = !addlinkfailed ? "noexe" : "addlinkfailed"

            // Delay to prevent overlapping with trackwin
            setTimeout(() => {
                const { scaleFactor }: Monitor = config.get("monitors").find(monitor => monitor.primary)!
    
                notifywin = new BrowserWindow({
                    title: `Steam Achievement Notifier (V${sanhelper.version}): ${!addlinkfailed ? "No Game EXE" : "Add Link Failed"}`,
                    width: Math.round((375 / scaleFactor) * (config.get("nowtrackingscale") / 100)),
                    height: Math.round((112.5 / scaleFactor) * (config.get("nowtrackingscale") / 100)),
                    autoHideMenuBar: true,
                    frame: false,
                    transparent: true,
                    focusable: false,
                    minimizable: false,
                    maximizable: false,
                    fullscreen: false,
                    fullscreenable: false,
                    skipTaskbar: true,
                    movable: false,
                    resizable: false,
                    show: false,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false
                    }
                })
    
                addlinkfailed && notifywin.setIgnoreMouseEvents(true)
                notifywin.setAlwaysOnTop(true,"screen-saver")
                sanhelper.devmode && sanhelper.setdevtools(notifywin)
    
                notifywin.loadFile(path.join(__root,"dist","app",`${ipctype}.html`))
    
                ipcMain.once(`${ipctype}ready`, async () => {
                    if (!notifywin) return

                    const { width, height } = notifywin.getBounds()
                    const bounds = setnotifybounds({ width: width, height: height },null) as { width: number, height: number, x: number, y: number }
    
                    notifywin.webContents.send(`${ipctype}ready`,await language.get(ipctype),await language.get(`${ipctype}sub`))
                    shownotify(notifywin,bounds)
            
                    return setTimeout(() => notifywin && notifywin.webContents.send(`${ipctype}close`),!addlinkfailed ? 7500 : 5000)
                })
    
                ipcMain.once(`${ipctype}close`, () => {
                    if (!notifywin) return

                    notifywin.destroy()
                    notifywin = null
                })

                !addlinkfailed && ipcMain.once(`${ipctype}click`,() => {
                    win.show()
                    win.focus()
                    win.webContents.send(`${ipctype}click`,appid)
                })
            },config.get("nowtracking") ? 6500 : 0)
        })

        // Emitted from `main.ts`
        ipcMain.on("quitforupdate", () => {
            log.write("INFO",`"quitforupdate" event recieved. Closing Worker process...`)
            if (worker) {
                worker.destroy()
                worker = null
            }
        })

        update.setlisteners(win)
        update.check()

        ipcMain.on("checkforupdates", () => !sanhelper.devmode ? update.check() : ipcMain.emit("noupdatetest"))

        const cleartemp = () => {
            try {
                fs.rmSync(sanhelper.temp,{ recursive: true, force: true })
                fs.mkdirSync(sanhelper.temp)
                return log.write("INFO",`"${sanhelper.temp}" directory cleared successfully`)
            } catch (err) {
                return log.write("ERROR",`Error cleared "${sanhelper.temp}" directory: ${err as Error}`)
            }
        }

        cleartemp()

        const validateworker = (): Promise<string> => {
            return new Promise<string>((resolve,reject) => {
                if (worker) {
                    worker.destroy()
                    worker = null
                    reject(`Existing "Worker" process destroyed.`)
                }

                const gameicon = path.join(sanhelper.temp,"gameicon.png")
                fs.existsSync(gameicon) && fs.rmSync(gameicon,{ force: true })

                resolve(`No running game or "Worker" processes found. Restarting "Worker" process...`)
            })
        }
        
        ipcMain.on("validateworker", async () => {
            const { releasedelay } = sanconfig.get().store

            try {
                ipcMain.emit("appid",0)

                const msg = await validateworker()
                log.write("INFO",msg)
                setTimeout(() => ipcMain.emit("createworker"),releasedelay * 1000)
            } catch (err) {
                log.write("INFO",err as Error)
                setTimeout(() => ipcMain.emit("validateworker"),1000)
            }
        })

        ipcMain.on("appid", (event,id,gamename,steam3id,num) => {
            appid = id
            win.webContents.send("appid",appid,gamename,steam3id,num)
            updatetray(tray!,gamename,num)
        })

        let debugwin: BrowserWindow | null = null

        ipcMain.on("debugwinready", () => worker && worker.webContents.send("debugwinready"))
        ipcMain.on("debuginfoupdated", (event,debuginfo: DebugInfo,reset?: boolean) => debugwin && debugwin.webContents.send("debuginfoupdated",debuginfo,reset))

        ipcMain.on("debugwin", (event,value: boolean) => {
            if (value && debugwin) return log.write("ERROR",`"debugwin" already active`)
            if (!value && debugwin) return debugwin.close()

            debugwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Debug Panel`,
                width: 500,
                height: 300,
                autoHideMenuBar: true,
                resizable: false,
                maximizable: false,
                fullscreenable: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            debugwin.loadFile(path.join(__root,"dist","app","debugwin.html"))
            debugwin.once("ready-to-show", () => debugwin && sanhelper.resetdebuginfo(debugwin))

            debugwin.once("closed", () => {
                const config = sanconfig.get()
                log.write("INFO",`"debugwin" closed`)
                debugwin = null

                config.set("debug",false)

                // Catches "Object has been destroyed" error when window is closed via app exit
                try {
                    win.webContents.send("updatemenu","debug")
                } catch (err) {
                    log.write("ERROR",`Error sending "updatemenu" event to "win": ${err}`)
                }
            })
        })

        ipcMain.on("workeractive", (event,value: boolean) => win.webContents.send("workeractive",value))

        ipcMain.on("showtrack", (event,gamename: string) => {
            const config = sanconfig.get()
            const { scaleFactor }: Monitor = config.get("monitors").find(monitor => monitor.primary)!

            const trackwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Now Tracking`,
                width: Math.round((375 / scaleFactor) * (config.get("nowtrackingscale") / 100)),
                height: Math.round((112.5 / scaleFactor) * (config.get("nowtrackingscale") / 100)),
                autoHideMenuBar: true,
                frame: false,
                transparent: true,
                focusable: false,
                minimizable: false,
                maximizable: false,
                fullscreen: false,
                fullscreenable: false,
                skipTaskbar: sanhelper.devmode,
                movable: false,
                resizable: false,
                show: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            })

            trackwin.setIgnoreMouseEvents(true)
            trackwin.setAlwaysOnTop(true,"screen-saver")
            sanhelper.devmode && sanhelper.setdevtools(trackwin)

            trackwin.loadFile(config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","dist","app","trackwin.html") : path.join(__root,"dist","app","trackwin.html"))

            ipcMain.once("trackwinready", () => {
                const { width, height } = trackwin.getBounds()
                const bounds = setnotifybounds({ width: width, height: height },null) as { width: number, height: number, x: number, y: number }

                const sendtrackinfo = async (gamename: string,appid: number,steampath: string,steam3id: number,hqicon: string,tempdir: string,__root: string) => {
                    trackwin.webContents.send("gamename",await language.get("nowtracking"),gamename,appid,steampath,steam3id,hqicon,tempdir,__root)
                    shownotify(trackwin,bounds,false,true)
    
                    return setTimeout(() => trackwin.webContents.send("trackwinclose"),4500)
                }

                const steampath = sanhelper.steampath
                const hqicon = sanhelper.gethqicon(appid)
                const temp = sanhelper.temp

                try {
                    worker && worker.webContents.send("steam3id",true)
                    ipcMain.once("steam3id",(event,steam3id: number = 0,skipss?: boolean) => skipss && sendtrackinfo(gamename,appid,steampath,steam3id,hqicon,temp,__root))
                } catch (err) {
                    log.write("ERROR",`Error sending tracking info to Worker: ${err}`)
                    sendtrackinfo(gamename,appid,steampath,0,hqicon,temp,__root)
                }
            })

            ipcMain.once("trackwinclose", () => trackwin.destroy())
        })

        ipcMain.on("trackwinerror", (event,err) => log.write("ERROR",err))

        ipcMain.on("errordialog",(event,obj: Electron.MessageBoxSyncOptions) => {
            const objcopy = {...obj}

            Object.assign(objcopy, {
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${obj.title}`,
                noLink: true,
                icon: path.join(__root,"img","32x32.png")
            })

            const msgbox = dialog.showMessageBoxSync(win,objcopy)
            event.reply("errordialog",msgbox)
        })

        ipcMain.on("displays", event => {
            event.reply("displays",{
                primary: screen.getPrimaryDisplay(),
                all: screen.getAllDisplays()
            })
        })

        win.on("resized", () => {
            const config = sanconfig.get()
            const { width, height, x, y } = win.getBounds()

            return config.set({
                width: width,
                height: height,
                x: x,
                y: y
            })
        })

        const setwinsize = () => {
            const config = sanconfig.get()
            const { scaleFactor } = config.get("monitors").find(monitor => monitor.primary) || screen.getPrimaryDisplay()

            // Default Target Resolution:
            // 700 (1050 / 1.5x) x 500 (750 / 1.5x) @ 1.5x scaleFactor
            const windefault = {
                width: Math.round(1050 / scaleFactor),
                height: Math.round(750 / scaleFactor)
            }

            const { width, height } = windefault

            return new Promise<void>(resolve => {
                win.hide()
                win.setPosition(0,0)
                resolve()
            })
            .then(() => win.setSize(width,height))
            .finally(() => {
                win.center()
                win.show()

                const { x, y } = win.getBounds()
    
                return config.set({
                    width: width,
                    height: height,
                    x: x,
                    y: y
                })
            })
        }

        const displayschanged = (action: "added" | "removed" | "updated",display?: Electron.Display,) => {
            if (display) {
                const { id, label, bounds: { width, height }, scaleFactor } = display
                log.write("INFO",`Display ${action} ("${label}" | ${id} | ${width} x ${height} | ${scaleFactor}x)`)
            }

            win.webContents.send("displaysupdated")
            ipcMain.once("monitorsupdated", event => event.reply("monitorsupdated"))
        }

        screen.on("display-added", (event,newdisplay) => displayschanged("added",newdisplay))
        screen.on("display-removed", (event,olddisplay) => displayschanged("removed",olddisplay))
        screen.on("display-metrics-changed", (event, { id, label, bounds: { width, height }, scaleFactor }, changed) => {
            return new Promise<void>(resolve => {
                ["bounds","scaleFactor","rotation"].forEach(metric => {
                    if (!changed.includes(metric)) return
                    log.write("INFO",`Display "${metric}" updated ("${label}" | ${id} | ${width} x ${height} | ${scaleFactor}x)`)
                })

                resolve()
            })
            .finally(() => displayschanged("updated"))
        })

        ipcMain.on("resetwin",setwinsize)

        ipcMain.on("releasegame", (event,skipdialog?: boolean) => {
            const { noreleasedialog } = sanconfig.get().store

            if (!skipdialog || !noreleasedialog) {
                win.show()
                win.focus()
            }

            win.webContents.send("releasegame",skipdialog || noreleasedialog)
        })

        ipcMain.on("suspendresume", () => {
            suspended ? ipcMain.emit("validateworker") : (worker && worker.close())
            suspended = !suspended

            log.write("INFO",`Worker ${suspended ? "suspended" : "resumed"}`)
            win.webContents.send("suspendresume",suspended)
            updatetray(tray)
        })

        ipcMain.on("restartapp", () => {
            win.show()
            win.focus()
            win.webContents.send("restartapp")
        })

        ipcMain.on("startwin", (event,value: boolean) => {
            if (process.platform === "linux") {
                const autostartpath = path.join(process.env.HOME!,".config","autostart")
                const shortcutpath = path.join(autostartpath,`Steam Achievement Notifier (V${sanhelper.version}).desktop`)

                try {
                    if (!value && fs.existsSync(shortcutpath)) return fs.rmSync(shortcutpath)

                    !fs.existsSync(autostartpath) && fs.mkdirSync(autostartpath)
                    !fs.existsSync(shortcutpath) && fs.writeFileSync(shortcutpath,sanhelper.linuxshortcut)
                } catch (err) {
                    log.write("ERROR",`Error ${!value ? "removing" : "creating"} autostart entry: ${err}`)
                }

                return
            }

            app.setLoginItemSettings({
                name: `Steam Achievement Notifier (V${sanhelper.version})`,
                openAtLogin: value
            })

            sanhelper.devmode && log.write("INFO",JSON.stringify(app.getLoginItemSettings(),null,4))
        })

        ipcMain.on("restart", (event,reason: string) => {
            return new Promise(async (resolve,reject) => {
                if (reason !== "Reset App confirmed by User") return resolve(reason)
                    
                await new Promise<void>(resolve => {
                    ipcMain.once("clearls", (event,msg) => {
                        log.write("INFO",msg as string)
                        resolve()
                    })

                    win.webContents.send("clearls")
                })

                try {
                    fs.rmSync(path.join(sanhelper.appdata,"config.json"))
                    fs.rmSync(path.join(sanhelper.appdata,"customfiles"), { recursive: true, force: true })
                    resolve(reason)
                } catch (err) {
                    reject(`Error removing application data: ${err}`)
                }
            })
            .then(msg => log.write("INFO",msg as string))
            .catch(err => log.write("ERROR",err as string))
            .finally(async () => {
                app.relaunch(process.platform === "linux" && !sanhelper.devmode ? { execPath: process.env.APPIMAGE } : undefined)
                log.write("EXIT",`Exited due to "restart" event: ${reason || `No restart reason provided.`}`)

                try {
                    fs.renameSync(path.join(sanhelper.appdata,"logs","san.log"),path.join(sanhelper.appdata,"logs","san_reset.log"))
                } catch (err) {
                    console.log(err)
                }

                app.exit()
            })
        })

        const createextwin = (config: Store<Config>,type: "ext" | "stat",value: boolean) => {
            if (!value) {
                closewin(type)
                return null
            }

            const { x, y } = config.get(`${type}winpos`)
            const { width, height, minWidth, minHeight } = {
                width: type === "ext" ? 300 : config.get("statwinpos").width,
                height: type === "ext" ? 50 : config.get("statwinpos").height,
                minWidth: type === "ext" ? 125 : 200,
                minHeight: type === "ext" ? 50 : 300
            }

            const wintitle = type === "ext" ? "Stream Notification" : "Achievement Stats Overlay"

            const win = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${wintitle}`,
                width,
                height,
                minWidth,
                minHeight,
                x: x,
                y: y,
                autoHideMenuBar: true,
                fullscreen: false,
                fullscreenable: false,
                minimizable: false,
                maximizable: false,
                resizable: type === "stat",
                movable: true,
                frame: false,
                transparent: true,
                skipTaskbar: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false,
                    // webviewTag: type === "stat"
                }
            })

            // `extwin` does not render content if transparency is set while HWA is disabled
            type === "ext" && !config.get("nohwa") && win.setOpacity(config.get("extwinshow") ? 1 : (sanhelper.devmode ? 0.5 : 0))

            win.loadFile(path.join(__root,"dist","app",`${type}win.html`))
            sanhelper.devmode && sanhelper.setdevtools(win)

            return win
        }

        const closewin = (type: string) => {
            // Needs explicit assignment to avoid "Object has been destroyed" error
            if (type === "ext") {
                if (!extwin) return log.write("ERROR",`"${type}win" not found`)

                extwin.close()
                extwin = null
            } else {
                if (!statwin) return log.write("ERROR",`"${type}win" not found`)

                statwin && statwin.close()
                statwin = null
            }
        }

        const setwinbounds = (config: Store<Config>,type: "ext" | "stat",win: BrowserWindow) => {
            const { x, y, width, height } = win.getBounds()
            const bounds: { x: number, y: number, width?: number, height?: number } = {
                x: x,
                y: y
            }

            if (type === "stat") {
                bounds.width = width
                bounds.height = height
            }

            config.set(`${type}winpos`,bounds)
        }

        const setwinclosevalue = (config: Store<Config>,type: "ext" | "stat",reopenonlaunch: boolean) => {
            log.write("EXIT",`"${type === "ext" ? "Stream Notification" : "Achievement Stats Overlay"}" window ${reopenonlaunch ? "destroyed" : "closed"}.`)
            config.set(`${type}win`,reopenonlaunch)
            ipcMain.emit("configupdated",null,config.store)
        }

        ipcMain.on("extwin", (event,value: boolean) => {
            const config = sanconfig.get()

            // If `reopenonlaunch` is true when the app closes, the window reopens next time the app is launched (as it writes bool value to config)
            let reopenonlaunch = true

            extwin = createextwin(config,"ext",value)
            if (!extwin) return

            extwin.on("moved",() => setwinbounds(config,"ext",extwin!))

            extwin.once("close", () => {
                setwinbounds(config,"ext",extwin!)
                reopenonlaunch = false
            })

            extwin.once("closed", () => {
                setwinclosevalue(config,"ext",reopenonlaunch)
                extwin = null
            })
        })

        ipcMain.on("extwinshow",(event,show: boolean) => extwin && extwin.setOpacity(show ? 1 : (sanhelper.devmode ? 0.5 : 0)))
        ipcMain.on("closeextwin",() => closewin("ext"))

        ipcMain.on("statwin", (event,value: boolean) => {
            const config = sanconfig.get()

            // If `reopenonlaunch` is true when the app closes, the window reopens next time the app is launched (as it writes bool value to config)
            let reopenonlaunch = true
            
            statwin = createextwin(config,"stat",value)
            if (!statwin) return

            ipcMain.once("statwinready",() => worker && worker.webContents.send("stats"))

            statwin.on("moved",() => setwinbounds(config,"stat",statwin!))

            statwin.once("close", () => {
                setwinbounds(config,"stat",statwin!)
                reopenonlaunch = false
            })

            statwin.once("closed", () => {
                setwinclosevalue(config,"stat",reopenonlaunch)
                statwin = null
            })
        })

        ipcMain.on("stats",async (event,statsobj: StatsObj) => {
            if (statwin) {
                const translations: StatsObjTranslations = {
                    nogame: await language.get("game",["app","content"]),
                    noachievements: await language.get("noachievements",["settings","media","content"]),
                    startgame: await language.get("startgame",["settings","media","content"]),
                    max: await language.get("max",["settings","media","content"]),
                    custom: await language.get("custom",["settings","media","content"]),
                    congrats: await language.get("congrats"),
                    gamecompletedesc: await language.get("gamecompletedesc"),
                }

                statwin.webContents.send("stats",statsobj,translations)
            }
        })

        ipcMain.on("statsunlock",(event,achievement: Achievement,statsobj: StatsObj) => statwin && statwin.webContents.send("statsunlock",achievement,statsobj))

        ipcMain.on("statwinicon",(event,achievement: Achievement) => {
            if (!worker) return statwin && statwin.webContents.send("statwinicon",null)

            ipcMain.once(`iconpath_${achievement.apiname}`,(event,iconpath: string | null) => statwin && statwin.webContents.send(`iconpath_${achievement.apiname}`,iconpath))
            worker.webContents.send("statwinicon",achievement)
        })

        ipcMain.on("steamlang",() => statwin && worker && worker.webContents.send("steamlang"))

        ipcMain.on("shortcut", (event,shouldregister) => {
            globalShortcut.unregisterAll()

            if (!shouldregister) return

            const config = sanconfig.get()
            config.get("shortcuts") && ["main","rare","plat"].forEach(type => globalShortcut.register(config.get(`customisation.${type}.shortcut`) as string, () => win.webContents.send("shortcut",type)))
            globalShortcut.register(config.get("releaseshortcut") as string,() => ipcMain.emit("releasegame"))
        })

        ipcMain.on("loadfile", async (event,filetype) => {
            const type = new Map<string,{ name: string, extensions: string[] }>([
                ["img",{ name: await language.get("image"), extensions: ["png","svg","jpg","jpeg","gif"] }],
                ["audio",{ name: await language.get("audio"), extensions: ["mp3","wav","ogg","aac"] }],
                ["dir",{ name: await language.get("folder"), extensions: [] }],
                ["font",{ name: await language.get("font"), extensions: ["ttf","otf","woff","woff2"] }],
                ["exe",{ name: await language.get("exepath",["linkgame","content"]), extensions: [ process.platform === "win32" ? "exe" : "*" ] }]
            ])

            const filedialog = dialog.showOpenDialogSync({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Select ${type.get(filetype)!.name}`,
                buttonLabel: await language.get("select"),
                properties: [
                    filetype === "dir" ? "openDirectory" : "openFile",
                    "dontAddToRecent"
                ],
                filters: [type.get(filetype)!]
            })

            event.reply("loadfile",filedialog)
        })

        const queue: WinType[] = []
        let running: boolean = false

        ipcMain.on("notify", async (event,notify: Notify,iswebview?: "customiser" | "sspreview" | null,src?: number) => {            
            const config = sanconfig.get()
            
            if (config.get("soundonly")) {
                if (!iswebview) {
                    win.webContents.send("soundonly",notify.type)
                    log.write("INFO",`"Sound-Only Mode" activated`)
                }

                return
            }

            const { syncedtheme } = (await import("./usertheme")).usertheme
            notify.customisation = syncedtheme(config,notify.customisation)

            const { preset } = notify.customisation

            if (!iswebview) {
                if (preset === "os") {
                    queue.push({
                        type: "Notification",
                        notify: notify,
                        options: {
                            timeoutType: "never",
                            silent: true
                        } as NotificationConstructorOptions
                    } as WinType)
                } else {
                    queue.push({
                        type: "BrowserWindow",
                        notify: notify,
                        options: {
                            title: `Steam Achievement Notifier (V${sanhelper.version}): Notification`,
                            // show: false,
                            alwaysOnTop: true,
                            frame: false,
                            transparent: true,
                            focusable: false,
                            fullscreen: false,
                            fullscreenable: false,
                            maximizable: false,
                            minimizable: false,
                            autoHideMenuBar: true,
                            hasShadow: false,
                            movable: false,
                            resizable: true,
                            skipTaskbar: sanhelper.devmode,
                            webPreferences: {
                                nodeIntegration: true,
                                contextIsolation: false,
                                backgroundThrottling: false
                            }
                        } as BrowserWindowConstructorOptions
                    } as WinType)
                }
            }

            const info = await buildnotify(notify)

            if (iswebview === "customiser") return win.webContents.send("customisernotify",{
                info: info,
                customisation: notify.customisation,
                iswebview: iswebview,
                steampath: sanhelper.steampath,
                steam3id: notify.steam3id,
                hqicon: sanhelper.gethqicon(appid),
                temp: sanhelper.temp,
                ssalldetails: config.get("ssalldetails")
            } as Info)

            worker && worker.webContents.send("steam3id")
            preset !== "os" && capturesrc(notify.id,() => createsswin("ss",notify,undefined,src),src)

            win.webContents.send("queue",queue)
            checkifrunning(info)
        })

        const buildnotify = async (notify: Notify): Promise<BuildNotifyInfo> => {
            const config = sanconfig.get()
            const { customisation, gamename, steam3id } = notify
            
            return {
                id: notify.id,
                type: notify.type,
                appid: appid,
                gamename: gamename,
                steam3id: steam3id,
                apiname: notify.apiname,
                unlockmsg: `${(customisation.usegametitle && (gamename || await language.get("gametitle"))) || customisation.customtext || (notify.type === "plat" ? await language.get("congrats") : await language.get("achievementunlocked"))}`,
                title: notify.type === "plat" ? await language.get("gamecomplete") : notify.name,
                desc: notify.type === "plat" ? await language.get("gamecompletedesc") : notify.desc,
                icon: notify.icon,
                percent: {
                    value: notify.percent,
                    rarity: config.get("rarity"),
                    showpercent: config.get("showpercent")
                },
                hidden: notify.hidden
            } as BuildNotifyInfo
        }

        const setnotifybounds = (dims: { width: number, height: number, x?: number, y?: number },type: "main" | "rare" | "plat" | null,offset = 20,isextwin?: boolean,customisation?: Customisation) => {
            const config = sanconfig.get()
            if (config.get("soundonly")) return
        
            const custompos = customisation?.custompos || config.get(`customisation.${type}.custompos`) as { x: number, y: number }
            const monitor = (dims.x !== undefined && dims.y !== undefined) ? screen.getDisplayNearestPoint({ x: dims.x, y: dims.y }) : ((customisation?.usecustompos || (config.get(`customisation.${type}.usecustompos`))) ? screen.getDisplayNearestPoint({ x: custompos.x, y: custompos.y }) : screen.getPrimaryDisplay())
            const scale = type ? (customisation?.scale || config.get(`customisation.${type}.scale`) as number) / 100 : 1
        
            // "screenwidth"/"screenheight" already have scaleFactor applied when returned as Electron.Display
            const screenwidth = monitor.bounds.width
            const screenheight = monitor.bounds.height
            const notifywidth = dims.width * scale
            const notifyheight = dims.height * scale
        
            const bordersize = 50
            const glowsize = type ? bordersize * scale : 0
            const top = ((glowsize / 2) * -1) + (bordersize / 2)
            const bottom = (glowsize / 2) - (bordersize / 2)
        
            const positions = {
                topleft: { x: top, y: top },
                topcenter: { x: (screenwidth / 2) - ((notifywidth + glowsize) / 2), y: top },
                topright: { x: (screenwidth - (notifywidth + glowsize) - top), y: top },
                bottomleft: { x: top, y: (screenheight - (notifyheight + glowsize) + bottom) },
                bottomcenter: { x: (screenwidth / 2) - ((notifywidth + glowsize) / 2), y: (screenheight - (notifyheight + glowsize) + bottom) },
                bottomright: { x: (screenwidth - (notifywidth + glowsize) + bottom), y: (screenheight - (notifyheight + glowsize) + bottom) }
            } as Positions
        
            const { x, y } = (type && isextwin) ? { x: 0, y: 0 } : (type ? (((customisation ? customisation.usecustompos : config.get(`customisation.${type}.usecustompos`)) ? custompos : positions[(customisation?.pos || config.get(`customisation.${type}.pos`)) as "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright"])) : positions[config.get("nowtrackingpos")])
        
            return {
                width: notifywidth + glowsize,
                height: notifyheight + glowsize,
                x: x,
                y: y
            }
        }

        const shownotify = (win: BrowserWindow,bounds: { width: number, height: number, x: number, y: number },isextwin?: boolean,istrackwin?: boolean) => {
            const { width, height, x, y } = bounds

            isextwin && win.setResizable(true)
            win.setSize(Math.round(width),Math.round(height))

            if (!isextwin) {
                win.setPosition(Math.round(x as number),Math.round(y as number))
                // win.show()
            }

            istrackwin && win.show()
        }

        let notifywin: BrowserWindow | Notification | null = null
        let offscreenwin: BrowserWindow | null = null
        let notifyfailed: boolean = false

        const checkifrunning = (info: BuildNotifyInfo): any => {
            if (running) return setTimeout(() => checkifrunning(info),1000)

            const config = sanconfig.get()

            const i = queue.findIndex(obj => obj.notify.id === info.id)
            const { type, notify, notify: { customisation }, options } = queue.splice(i,1)[0]
            const { displaytime } = customisation
            
            if (type === "Notification") {
                // `toastXML` overrides all other options on Windows, but not on other platforms
                notifywin = new Notification({
                    ...options,
                    title: info.title,
                    subtitle: info.unlockmsg,
                    body: info.desc,
                    icon: info.icon,
                    toastXml: `
                        <toast scenario="reminder">
                            <audio silent="true"></audio>
                            <visual>
                                <binding template="ToastGeneric">
                                    <text>${info.title}</text>
                                    <text>${info.unlockmsg}</text>
                                    <text>${info.desc}</text>
                                    <image placement="appLogoOverride" src="${info.icon}" alt="${info.apiname} Achievement Icon"/>
                                </binding>
                            </visual>
                            <actions>
                                <action content="Dismiss" arguments="action=dismiss"/>
                            </actions>
                        </toast>
                    `
                })

                notifywin.show()
            } else {
                notifywin = new BrowserWindow(options)
                offscreenwin = !extwin ? null : new BrowserWindow({
                    ...options,
                    title: `Steam Achievement Notifier (V${sanhelper.version}): Offscreen Notification`,
                    x: 0,
                    y: 0,
                    show: false,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false,
                        backgroundThrottling: false,
                        offscreen: true
                    }
                })

                offscreenwin?.webContents.setFrameRate(config.get("extwinframerate"))
            }

            if (notifywin instanceof BrowserWindow) {
                const basehtml = config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : path.join(__root,"notify","base.html")

                notifywin.loadFile(basehtml)
                config.get("screenshots") !== "off" && config.get("ssdelay") > 0 && notifywin.setContentProtection(true)
                notifywin.setIgnoreMouseEvents(true)
                notifywin.setAlwaysOnTop(true,"screen-saver",1000)

                if (extwin && offscreenwin instanceof BrowserWindow) {
                    offscreenwin.loadFile(basehtml)
                    offscreenwin.setIgnoreMouseEvents(true)

                    // Send img data to offscreen window if `extwin` is active
                    offscreenwin.webContents.on("paint",(event,_,img) => extwin && extwin.webContents.send("imgdata",img.toDataURL()))
                }

                const notifyinfo = async (isextwin?: boolean) => {
                    return {
                        info: info,
                        customisation: customisation,
                        iswebview: null,
                        steampath: sanhelper.steampath,
                        skipaudio: isextwin || config.get("audiosrc") !== "notify",
                        steam3id: info.steam3id,
                        hqicon: sanhelper.gethqicon(appid),
                        temp: sanhelper.temp,
                        ssalldetails: config.get("ssalldetails")
                    } as Info
                }

                notifywin.once("ready-to-show", async () => {
                    (notifywin as BrowserWindow).webContents.send("notify",await notifyinfo())

                    if (extwin) {
                        extwin.webContents.send("notify")

                        if (!offscreenwin) return log.write("ERROR",`"offscreenwin" not found - cannot send "notify" ipc event`)
                        offscreenwin.webContents.send("notify",await notifyinfo(true))
                    }
                })
    
                config.get("notifydebug") && sanhelper.setdevtools(notifywin)
                config.get("nvda") && clipboard.writeText(`${info.unlockmsg}. ${info.title}. ${info.desc}.`)
    
                ipcMain.once("notifyready", (event,res: Res) => {
                    const { msg, dims } = res

                    const preparewin = (win: BrowserWindow | null,isextwin?: boolean) => {
                        if (!win) return log.write("ERROR",`Error preparing ${isextwin ? "extwin" : "notifywin"}: Window was not found`)

                        // Set as <meta> tag dimensions, then send to `setnotifybounds` to calculate actual size
                        win.setSize(dims.width,dims.height)
                        const bounds = setnotifybounds({ width: dims.width, height: dims.height },notify.type,dims.offset,isextwin,notify.customisation) as { width: number, height: number, x: number, y: number }
                        log.write("INFO",msg)

                        shownotify(win,bounds,isextwin)
                    }
                    
                    preparewin(notifywin as BrowserWindow)
                    extwin && [(offscreenwin as BrowserWindow),extwin].forEach(win => preparewin(win,true))
                })
            }

            (config.get("audiosrc") === "app" || notifywin instanceof Notification && config.get("audiosrc") !== "off") && win.webContents.send("appaudio",notify.type)

            running = true

            // Sends event to `createsswin()` to build screenshot for `notify.id`
            ipcMain.emit(`${notify.id}`)

            // Creates "notifyimg" file on notification spawn, as it doesn't have to wait for screenshots to be generated
            config.get("screenshots") === "notifyimg" && createsswin("img",notify)

            win.webContents.send("notifyprogress",notify.customisation.displaytime)

            return setTimeout(() => {
                if (notifyfailed) {
                    notifywin = null
                    offscreenwin = null
                    running = false

                    log.write("ERROR",`Notification window failed for "${notify.apiname}" - Check log for details`)
                    return ipcMain.emit("notifyclosed",null,true,customisation.preset)
                }

                // Closes the notification
                ipcMain.once("notifyfinished", async () => {
                    try {
                        const msg = await new Promise<string>(async resolve => {
                            if (!notifywin) log.write("ERROR",`"notifywin" not found - cannot close window`)

                            notifywin && notifywin.close()
                            notifywin = null

                            if (extwin) {
                                extwin.webContents.send("notifyfinished")

                                if (!offscreenwin) log.write("ERROR",`"offscreenwin" not found - cannot close window`)

                                offscreenwin && offscreenwin.close()
                                offscreenwin = null
                            }

                            resolve(`Notification window for "${notify.apiname}" closed successfully`)
                        })
    
                        log.write("INFO",msg)
                        running = false

                        win.webContents.send("queue",queue)
                    } catch (err) {
                        log.write("ERROR",`Error closing notification window for "${notify.apiname}": ${err}`)
                    } finally {
                        win.webContents.send("notifyprogress",0,true)
                    }
                })

                notifywin instanceof BrowserWindow ? notifywin.webContents.send("notifyfinished") : ipcMain.emit("notifyfinished")
                
                if (extwin) {
                    if (!offscreenwin) return log.write("ERROR",`"offscreenwin" not found - cannot send "notifyfinished" ipc event`)
                    offscreenwin.webContents.send("notifyfinished")
                }
            },displaytime * 1000)
        }

        ipcMain.on("notifyfailed", (event,err: { msg: string }) => {
            notifyfailed = true
            log.write("ERROR",err.msg)
            win.webContents.send("notifyprogress",0,true)
        })

        ipcMain.on("sendwebhook", (event,notify: Notify) => win.webContents.send("sendwebhook",notify))

        let poswin: BrowserWindow | null = null

        ipcMain.on("custompos", (event,type: "main" | "rare" | "plat",shouldreset: boolean) => {
            const config = sanconfig.get()
            if (poswin) return
            if (shouldreset) return config.set(`customisation.${type}.custompos`,{ x: 0, y: 0 })

            const { width: notifywidth, height: notifyheight } = sanhelper.getpresetbounds(`customisation.${type}.preset`)
            const { width, height } = setnotifybounds({ width: Math.round(notifywidth), height: Math.round(notifyheight) },type) as { width: number, height: number }
            const customisation = config.get(`customisation.${type}`) as Customisation
            
            poswin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Notification Position`,
                width: Math.round(width),
                height: Math.round(height),
                x: config.get(`customisation.${type}.custompos.x`) as number,
                y: config.get(`customisation.${type}.custompos.y`) as number,
                show: false,
                alwaysOnTop: true,
                frame: false,
                transparent: true,
                fullscreen: false,
                fullscreenable: false,
                maximizable: false,
                minimizable: false,
                autoHideMenuBar: true,
                hasShadow: false,
                resizable: false,
                skipTaskbar: sanhelper.devmode,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            poswin.loadFile(path.join(__root,"dist","app","poswin.html"))
            sanhelper.devmode && sanhelper.setdevtools(poswin)
            poswin.on("ready-to-show", () => poswin!.webContents.send("poswin",type,{ width: Math.round(notifywidth * (customisation.scale / 100)), height: Math.round(notifyheight * (customisation.scale / 100)) }))

            ipcMain.once("poswinready", () => poswin!.show())
            ipcMain.once("poswincoords", () => {
                const { x, y } = poswin!.getBounds()
                config.set(`customisation.${type}.custompos`,{ x: x, y: y })
            })

            poswin.once("closed", () => {
                log.write("INFO",`"Notification Position" window closed`)
                win.webContents.send("poswinclosed")
                poswin = null
            })
        })

        ipcMain.on("closeopenwins", () => {
            if (!poswin) return

            poswin.destroy()
            poswin = null
            log.write("EXIT",`"Notification Position" window closed due to Customiser being closed while open`)
        })

        ipcMain.on("themeiconcustom", event => {
            const themedialog = dialog.showOpenDialogSync({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Select Theme Icon`,
                buttonLabel: "Select",
                properties: [
                    "openFile",
                    "dontAddToRecent"
                ],
                filters: [
                    {
                        name: "Image",
                        extensions: ["png","svg","jpg","jpeg","gif"]
                    }
                ]
            })

            event.reply("themeiconcustom",themedialog)
        })

        let logwin: BrowserWindow | null = null

        ipcMain.on("logwin", (event,logcontents: string,logtype: string) => {
            if (logwin) return

            logwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): App Log`,
                width: 300,
                minWidth: 300,
                height: 400,
                minHeight: 400,
                center: true,
                autoHideMenuBar: true,
                fullscreen: false,
                fullscreenable: false,
                resizable: true,
                frame: false,
                transparent: true,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            logwin.loadFile(path.join(__root,"dist","app","logwin.html"))
            sanhelper.devmode && sanhelper.setdevtools(logwin)

            ipcMain.once("logwinready", event => event.reply("updatelogwin",logcontents,logtype))
            logwin.once("closed", () => {
                log.write("EXIT",`"App Log" window closed`)
                logwin = null
            })
        })

        ipcMain.on("updatelogwin", (event,logcontents: string,logtype: "san" | "rust") => logwin && logwin.webContents.send("updatelogwin",logcontents,logtype))
        ipcMain.on("updatelogtype", (event,logtype) => {
            sanconfig.get().set("logtype",logtype)
            win.webContents.send("updatelogtype",logtype)
        })

        ipcMain.on("steam3id", async (event,steam3id: number,skipss?: boolean) => {
            if (skipss) return log.write("INFO",`"skipss" received - skipping screenshot...`)
            if (!sanconfig.get().store.steamss) return log.write("INFO",`"steamss" not active`)

            try {
                const VDF = await import("simple-vdf")
                const localconfig = fs.readFileSync(path.join(sanhelper.steampath,"userdata",`${steam3id}`,"config","localconfig.vdf")).toString()
                const { InGameOverlayScreenshotHotKey: hotkey } = VDF.parse(localconfig).UserLocalConfigStore.system || "KEY_F12"
    
                const { steamkeycodes } = await import("./keycodes")
                const { sanhelper: { presskey, depsinstalled } } = await import("./sanhelper")

                if (process.platform === "linux" && !depsinstalled) return log.write("ERROR",`Error triggering Steam screenshot: "xdotool" dependency not installed`)
    
                steamkeycodes.has(hotkey) && steamkeycodes.get(hotkey) !== null ? presskey(steamkeycodes.get(hotkey)) : log.write("ERROR",`Error triggering Steam screenshot: Key "${hotkey}" does not exist in steamkeycodes Map`)
            } catch (err) {
                log.write("ERROR",`Error triggering Steam screenshot: ${err}`)
            }
        })

        let sswin: Electron.BrowserWindow | null = null

        // Used in `dialog.ts`/`renderer.ts` to close "sswin", and in `renderer.ts` to spawn the Preview window
        ipcMain.on("sswin", (event,notify?: Notify,src?: number) => {
            const config = sanconfig.get()

            if (!notify) {
                sswin && sswin.destroy()
                sswin = null
                return
            }

            if (sswin) {
                sswin.destroy()
                sswin = null
            }

            createsswin(config.get("screenshots") === "notifyimg" ? "img" : "ss",notify,true,src)
        })

        const getssmonitor = (src?: number): { monitor: Monitor | Electron.Display | null, display: Electron.Display | null } => {
            const config = sanconfig.get()

            let monitor: Monitor | Electron.Display | undefined = config.get("monitors").find(monitor => (src || config.get("monitor")) === monitor.id)
            if (!monitor) {
                log.write("ERROR",`Monitor id "${config.get("monitor")}" could not be found in "config.monitors" - Reverting to primary display...`)
                monitor = screen.getPrimaryDisplay()
            }

            log.write("INFO",`[Selected Monitor ID]:\n- ${config.get("monitor")}\n\n[Stored Monitors]:\n- ${config.get("monitors").map(monitor => monitor.id).join("\n- ")}`)
            const display = screen.getAllDisplays().find(display => display.id === monitor!.id)

            return { monitor: monitor || null, display: display || null }
        }

        const getsspath = (id: number) => path.join(sanhelper.temp,`${id}.png`)

        const capturesrc = (notifyid: number,callback: () => void,src?: number): void => {
            const config = sanconfig.get()
            if (config.get("screenshots") !== "overlay") return
            
            const checksrc = (src: string) =>  {
                if (!fs.existsSync(src)) {
                    log.write("ERROR",`"${notifyid}.png" src file not present in "${sanhelper.temp}" - retrying...`)
                    setTimeout(() => checksrc(src),250)
                    return
                }

                callback()
            }

            ipcMain.once(`${notifyid}`, () => {
                log.write("INFO",`Building screenshot for "${notifyid}"...`)
                checksrc(path.join(sanhelper.temp,`${notifyid}.png`))
            })

            const delay = config.get("ssdelay")
            const sspath = getsspath(notifyid)

            const { monitor } = getssmonitor(src)
            if (!monitor) return log.write("ERROR",`Error configuring screenshot src: Could not locate Monitor with id ${config.get("monitor")}, and no primary fallback found.\n\n${JSON.stringify(config.get("monitors"))}`)

            const { id, label, bounds: { width, height } } = monitor

            ipcMain.once("src",(event,err) => {
                if (err) return log.write("ERROR",`Error writing screenshot for Monitor ${id} ("${label}"): ${err}`)
                return log.write("INFO",`Screenshot for Monitor ${id} ("${label}") written successfully`)
            })
        
            const capture = () => {
                if (config.get("hdrmode")) {
                    const msg: string = sanhelper.hdrscreenshot(monitor.id,sspath)
                    log.write("INFO",msg)
                    return
                }

                desktopCapturer.getSources({
                    types: ["screen"],
                    thumbnailSize: { width: width, height: height }
                })
                .then((srcs: Electron.DesktopCapturerSource[]) => {
                    log.write("INFO",`[Selected Monitor ID]:\n- ${id}\n\n[Available Screen Sources]:\n- ${srcs.map(src => `${src.display_id} (Parsed id: ${parseInt(src.display_id)} | Match?: ${parseInt(src.display_id) === id})`).join("\n- ")}`)

                    const src = srcs.find(src => parseInt(src.display_id) === id)
                    if (!src) return log.write("ERROR",`Error configuring screenshot: No matching Display source id found for Monitor ${id} ("${label}")`)
                    
                    fs.writeFileSync(sspath,src.thumbnail.toPNG())
                })
                .catch(err => log.write("ERROR",err as string))
            }
        
            setTimeout(capture,delay * 1000)
            return
        }

        const createimgpathdir = (imgpath: string) => {
            try {
                !fs.existsSync(imgpath) && fs.mkdirSync(imgpath, { recursive: true })
                log.write("INFO",`"${imgpath}" ${!fs.existsSync(imgpath) ? "created successfully" : "already exists"}`)
            } catch (err) {
                return log.write("ERROR",`Error creating "${imgpath}": ${err}`)
            }
        }

        const createsswin = async (type: "ss" | "img",notify: Notify,ispreview?: boolean,src?: number) => {
            const config = sanconfig.get()

            const imgpath: string = config.get(`${type === "ss" ? "ov" : "img"}path`) as string
            const sspath: string | null = type === "ss" ? (!ispreview ? getsspath(notify.id) : sanhelper.setfilepath("img","santextlogobg.png")) : null

            createimgpathdir(imgpath)

            const info = await buildnotify(notify)

            ipcMain.once(`${type}winready`, async event => {
                if (!sswin) return log.write("ERROR",`Error sending ${type === "ss" ? `screenshot "src"` : "notification data"}: "${type}win" not found`)

                if (type === "ss") {
                    log.write("INFO",!ispreview ? `Sending "src" for id: ${notify.id}` : "Screenshot not taken for preview")
                    sswin.webContents.send("src",sspath)
                }

                sswin.show()
        
                event.reply(`${type}winready`,{
                    info: info,
                    customisation: notify.customisation,
                    iswebview: ispreview ? "sspreview" : "ss",
                    steampath: sanhelper.steampath,
                    skipaudio: true,
                    customfiles: config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : undefined,
                    hqicon: sanhelper.gethqicon(appid),
                    temp: sanhelper.temp,
                    ssalldetails: config.get("ssalldetails")
                } as Info)

                ipcMain.once("dims", (event,dims: { width: number, height: number, offset: number }) => {
                    if (!sswin) return log.write("ERROR",`Error setting "sswin" dimensions: "sswin" not found`)

                    const { width, height } = setnotifybounds({ width: dims.width, height: dims.height },notify.type,dims.offset,false,notify.customisation) as { width: number, height: number, x: number, y: number }

                    if (type === "img") {
                        sswin.setSize(Math.round(width),Math.round(height))
                        sswin.center()
                    }

                    const monitor = (type !== "img" && screen.getAllDisplays().find(monitor => monitor.id === (src || config.get("monitor")))) || screen.getPrimaryDisplay()

                    sswin.setResizable(false)
                    sswin.webContents.send("dims",{ width, height, offset: dims.offset, scalefactor: monitor.scaleFactor })
                })

                !ispreview && ipcMain.once("sscapture", () => {
                    if (!sswin) return log.write("ERROR",`"${type}win" was closed before image file could be written to "${imgpath}"`)

                    const ssdir = `${imgpath}/${(!notify.istestnotification && info.gamename ? info.gamename : "Steam Achievement Notifier").replace(/[<>":\\/|?*\x00-\x1F]/g,"").trim()}`
                    const ssimg = `${ssdir}/${info.title.replace(/[<>":\\/|?*\x00-\x1F]/g,"").trim()}${type === "img" ? " - Notification" : ""}.png`

                    sswin.webContents.capturePage()
                    .then(img => {
                        try {
                            !fs.existsSync(ssimg) && fs.mkdirSync(ssdir,{ recursive: true })
                            fs.writeFileSync(ssimg,img.toPNG())
    
                            log.write("INFO",`Screenshot written to "${ssimg}" successfully`)
                        } catch (err) {
                            log.write("ERROR",`Error writing screenshot for "${info.apiname}": ${err}`)
                        }
                    })
                    .then(() => {
                        if (type !== "ss") return
                        const temp = getsspath(notify.id)

                        try {
                            fs.rmSync(temp)
                            log.write("INFO",`Removed "src" image: "${temp}"`)
                        } catch (err) {
                            log.write("ERROR",`Error removing "src" image "${temp}": ${err as Error}`)
                        }
                    })
                    .finally(() => {
                        sswin && sswin.destroy()
                        sswin = null
                    })
                })
            })

            const { monitor, display } = getssmonitor(src)

            if (!monitor) return log.write("ERROR",`Error configuring screenshot: Could not locate Monitor with id ${config.get("monitor")}, and no primary fallback found.\n\n${JSON.stringify(config.get("monitors"))}`)
            if (!display) return log.write("ERROR",`Error configuring screenshot: No Display matches Monitor id ${monitor.id}.\n\n${JSON.stringify(screen.getAllDisplays())}`)

            const { x, y } = display.bounds

            sswin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${type === "ss" ? "Screenshot" : "Notification Image"} ${ispreview ? "Preview" : "Window"}`,
                fullscreen: type === "ss",
                x: type === "ss" ? x : undefined,
                y: type === "ss" ? y : undefined,
                autoHideMenuBar: true,
                frame: false,
                transparent: true,
                focusable: ispreview,
                movable: false,
                maximizable: false,
                minimizable: false,
                skipTaskbar: !sanhelper.devmode,
                show: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    webviewTag: true
                }
            })

            !ispreview && sswin.setOpacity(0)
            sswin.setIgnoreMouseEvents(!ispreview)
            sswin.loadFile(path.join(__root,"dist","app",`${type}win.html`))
            sanhelper.devmode && sanhelper.setdevtools(sswin)

            sswin.once("closed", () => {
                log.write("INFO",`"${type === "ss" ? "Screenshot" : "Notification Image"} ${ispreview ? "Preview" : "Window"}" closed`)
                sswin = null
            })
        }

        ipcMain.on("gpu", () => {
            const gpu = new BrowserWindow({
                width: 300,
                height: 300,
                autoHideMenuBar: true
            })

            gpu.loadURL("chrome://gpu")
        })

        ipcMain.on("importtheme", async event => {
            const impdialog = dialog.showOpenDialogSync({
                title: `Steam Achievement Notifier (V1.9): Import Theme`,
                properties: [
                    "openFile",
                    "dontAddToRecent"
                ],
                buttonLabel: await language.get("importtheme",["customiser","theme","content"]),
                filters: [{
                    "name": `Steam Achievement Notifier (V${sanhelper.version}) File`,
                    extensions: ["san"]
                }]
            })

            event.reply("importtheme",impdialog)
        })

        ipcMain.on("exporttheme", async event => {
            const { filePath: expdialog } = await dialog.showSaveDialog({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Export Theme`,
                properties: [
                    "showOverwriteConfirmation",
                    "dontAddToRecent"
                ],
                buttonLabel: await language.get("exporttheme",["customiser","theme","content"]),
                filters: [{
                    "name": "ZIP Archive",
                    extensions: ["zip"]
                }]
            })

            event.reply("exporttheme",expdialog)
        })

        ipcMain.on("montest", (event,id: number) => {
            const config = sanconfig.get()

            try {
                const screens = screen.getAllDisplays()
                for (const screen of screens) {
                    screen.id === id && log.write("INFO",`Monitor Info: mainlabel: ${screen.label} | mainid: ${screen.id} | rendererid: ${id}${config.get("monitor") === id ? " (Current)" : ""}`)
                }

                if (!screens.find(screen => screen.id === id)) throw new Error(`Display "id" ${id} not found in current monitors`)
            } catch (err) {
                dialog.showErrorBox(`Monitor Test Failed!`,(err as Error).stack || (err as Error).message)
            }
        })

        return
    }
}