import { app, ipcMain, BrowserWindow, Tray, Menu, nativeImage, dialog, Notification, screen, globalShortcut, BrowserWindowConstructorOptions, NotificationConstructorOptions, desktopCapturer, clipboard, shell } from "electron"
import path from "path"
import fs from "fs"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"
import { sanconfig } from "./config"
import { language } from "./language"
import { update } from "./update"

let appid: number = 0

let extwin: BrowserWindow | null = null

export const listeners = {
    setexit: () => {
        ipcMain.on("exit",(event,reason) => {
            if (extwin) {
                extwin.destroy()
                extwin = null
            }

            log.write("EXIT",reason || `No exit reason provided.`)
            app.exit()
        })
    },
    set: (win: BrowserWindow): void => {
        listeners.setexit()

        app.on("second-instance", () => win.show())

        const savewindowstate = () => {
            const config = sanconfig.get()
            const { width, height, x, y } = win.getBounds()

            config.set({
                width: width,
                height: height,
                x: x,
                y: y
            })
        }

        win.on("close",savewindowstate)

        let tray: Tray | null = null
        tray = new Tray(path.join(__root,"img","sanlogo_idle.png"))

        const updatetray = async (tray: Tray,gamename?: string | null) => {
            tray && tray.removeAllListeners()

            tray.setToolTip(`Steam Achievement Notifier (V${sanhelper.version})`)
            tray.setImage(path.join(__root,"img",`sanlogo_${gamename ? "active" : "idle"}.png`))

            const template: Electron.MenuItemConstructorOptions[] = [
                {
                    label: gamename || await language.get("game",["app","content"]),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon",`dot_${gamename ? "green" : "red"}.png`))
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
                            click: () => {
                                win.show()
                                win.focus()
                                win.webContents.send("releasegame")
                            }
                        },
                        {
                            label: await language.get("restartapp"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon","replay.png"))
                                    .resize({ width: 16 }),
                            click: () => {
                                win.show()
                                win.focus()
                                win.webContents.send("restartapp")
                            }
                        }
                    ]
                },
                {
                    label: await language.get("exit"),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon","close.png"))
                            .resize({ width: 16 }),
                    click: () => {
                        savewindowstate()
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
        ipcMain.on("lang", (event,gamename: string | null) => updatetray(tray!,gamename))

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

        ipcMain.on("appid", (event,id,gamename) => {
            appid = id
            win.webContents.send("appid",appid,gamename)
            updatetray(tray!,gamename)
        })

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

            trackwin.loadFile(path.join(__root,"dist","app","trackwin.html"))

            ipcMain.once("trackwinready", () => {
                const { width, height } = trackwin.getBounds()
                const bounds = setnotifybounds({ width: width, height: height },null) as { width: number, height: number, x: number, y: number }

                trackwin.webContents.send("gamename",gamename,appid,sanhelper.steampath)
                shownotify(trackwin,bounds)

                return setTimeout(() => trackwin.webContents.send("trackwinclose"),4500)
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

            // Default Target Resolution:
            // 700 (1050 / 1.5x) x 500 (750 / 1.5x) @ 1.5x scaleFactor
            const windefault = {
                width: 1050,
                height: 750
            }

            const { width, height } = windefault

            return new Promise<void>(resolve => {
                win.hide()
                win.setPosition(0,0)
                resolve()
            })
            .then(() => {
                const { scaleFactor } = config.get("monitors").find(monitor => monitor.primary) || screen.getPrimaryDisplay()
                win.setSize(Math.round(width / scaleFactor),Math.round(height / scaleFactor))
            })
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
            ipcMain.once("monitorsupdated", event => {
                event.reply("monitorsupdated")
                setwinsize()
            })
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

        ipcMain.on("resetwin",() => setwinsize())

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
            return new Promise((resolve,reject) => {
                if (reason !== "Reset App confirmed by User") return resolve(reason)

                try {
                    fs.rmSync(sanhelper.appdata, { recursive: true, force: true })
                    resolve(reason)
                } catch (err) {
                    reject(`Error removing "config.json": ${err}`)
                }
            })
            .then(msg => log.write("INFO",msg as string))
            .catch(err => log.write("ERROR",err as string))
            .finally(() => {
                app.relaunch()
                log.write("EXIT",`Exited due to "restart" event: ${reason || `No restart reason provided.`}`)
                app.exit()
            })
        })

        ipcMain.on("extwin", (event,value: boolean) => {
            const config = sanconfig.get()
            // If `reopenonlaunch` is true when the app closes, the window reopens next time the app is launched (as it writes bool value to config)
            let reopenonlaunch = true

            if (!value) return closeextwin()

            extwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Stream Notification`,
                width: 300,
                height: 50,
                minWidth: 125,
                minHeight: 50,
                x: 0,
                y: 0,
                autoHideMenuBar: true,
                fullscreen: false,
                fullscreenable: false,
                minimizable: false,
                maximizable: false,
                resizable: false,
                frame: false,
                transparent: true,
                opacity: sanhelper.devmode ? 0.5 : 0,
                skipTaskbar: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false,
                    webviewTag: true
                }
            })

            extwin.setIgnoreMouseEvents(true)
            extwin.loadFile(config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : path.join(__root,"notify","base.html"))
            sanhelper.devmode && sanhelper.setdevtools(extwin)

            extwin.once("close", () => reopenonlaunch = false)

            extwin.once("closed", () => {
                log.write("EXIT",`"Stream Notification" window ${reopenonlaunch ? "destroyed" : "closed"}.`)
                config.set("extwin",reopenonlaunch)
                ipcMain.emit("configupdated",null,config.store)
            })
        })

        ipcMain.on("closeopenwins", () => {
            if (!poswin) return

            poswin.destroy()
            poswin = null
            log.write("EXIT",`"Notification Position" window closed due to Customiser being closed while open`)
        })

        const closeextwin = () => {
            if (!extwin) return log.write("ERROR",`"extwin" not found`)

            extwin.close()
            extwin = null
        }

        ipcMain.on("closeextwin",closeextwin)

        ipcMain.on("shortcut", (event,shouldregister) => {
            globalShortcut.unregisterAll()

            if (!shouldregister) return

            const config = sanconfig.get()
            config.get("shortcuts") && ["main","rare","plat"].forEach(type => globalShortcut.register(config.get(`customisation.${type}.shortcut`) as string, () => win.webContents.send("shortcut",type)))
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
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${await language.get("select")} ${type.get(filetype)!.name}`,
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

        ipcMain.on("notify", async (event,notify: Notify,iswebview?: "customiser" | "sspreview" | null) => {
            const config = sanconfig.get()
            if (config.get("soundonly")) {
                if (!iswebview) {
                    win.webContents.send("soundonly",notify.type)
                    log.write("INFO",`"Sound-Only Mode" activated`)
                }

                return
            }

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
                            show: false,
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
                steampath: sanhelper.steampath
            } as Info)

            config.get("steamss") && worker && worker.webContents.send("steamss")
            preset !== "os" && capturesrc(notify.id,() => createsswin("ss",notify))

            win.webContents.send("queue",queue)
            checkifrunning(info)
        })

        const buildnotify = async (notify: Notify): Promise<BuildNotifyInfo> => {
            const config = sanconfig.get()
            const { customisation, gamename } = notify
            
            return {
                id: notify.id,
                type: notify.type,
                gamename: gamename,
                appid: appid,
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

        const setnotifybounds = (notify: { width: number, height: number, x?: number, y?: number },type: "main" | "rare" | "plat" | null,offset = 20,isextwin?: boolean) => {
            const config = sanconfig.get()
            if (config.get("soundonly")) return

            const custompos = config.get(`customisation.${type}.custompos`) as { x: number, y: number }
            const monitor = (notify.x !== undefined && notify.y !== undefined) ? screen.getDisplayNearestPoint({ x: notify.x, y: notify.y }) : (config.get(`customisation.${type}.usecustompos`) ? screen.getDisplayNearestPoint({ x: custompos.x, y: custompos.y }) : screen.getPrimaryDisplay())
            const scale = type ? (config.get(`customisation.${type}.scale`) as number) / 100 : 1

            // "screenwidth"/"screenheight" already have scaleFactor applied when returned as Electron.Display
            const screenwidth = monitor.bounds.width
            const screenheight = monitor.bounds.height
            const notifywidth = notify.width * scale
            const notifyheight = notify.height * scale

            const positions = {
                topleft: { x: offset, y: 20 },
                topcenter: { x: (screenwidth / 2) - (notifywidth / 2), y: offset },
                topright: { x: (screenwidth - notifywidth) - offset, y: 20 },
                bottomleft: { x: offset, y: (screenheight - notifyheight) - 20 },
                bottomcenter: { x: (screenwidth / 2) - (notifywidth / 2), y: (screenheight - notifyheight) - offset },
                bottomright: { x: (screenwidth - notifywidth) - offset, y: (screenheight - notifyheight) - 20 }
            } as Positions

            const { x, y } = (type && isextwin) ? { x: 0, y: 0 } : (type ? (config.get(`customisation.${type}.usecustompos`) ? config.get(`customisation.${type}.custompos`) as { x: number, y: number } : positions[config.get(`customisation.${type}.pos`) as "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright"] as { x: number, y: number }) : positions["bottomright"])

            return {
                width: notifywidth,
                height: notifyheight,
                x: x,
                y: y
            }
        }

        const shownotify = (win: BrowserWindow,bounds: { width: number, height: number, x: number, y: number },isextwin?: boolean) => {
            const { width, height, x, y } = bounds

            isextwin && win.setResizable(true)
            win.setSize(Math.round(width),Math.round(height))

            if (!isextwin) {
                win.setPosition(Math.round(x as number),Math.round(y as number))
                win.show()
            }
        }

        let notifywin: BrowserWindow | Notification | null = null
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
                        <toast>
                            <audio silent="true"></audio>
                            <visual>
                                <binding template="ToastGeneric">
                                    <text>${info.title}</text>
                                    <text>${info.unlockmsg}</text>
                                    <text>${info.desc}</text>
                                    <image placement="appLogoOverride" src="${info.icon}" alt="${info.apiname} Achievement Icon"/>
                                </binding>
                            </visual>
                        </toast>
                    `
                })

                notifywin.show()
            } else {
                notifywin = new BrowserWindow(options)
            }

            if (notifywin instanceof BrowserWindow) {
                notifywin.loadFile(config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : path.join(__root,"notify","base.html"))
                config.get("screenshots") !== "off" && config.get("ssdelay") > 0 && notifywin.setContentProtection(true)
                notifywin.setIgnoreMouseEvents(true)
                notifywin.setAlwaysOnTop(true,"screen-saver",1000)

                const notifyinfo = async (isextwin?: boolean) => {
                    return {
                        info: info,
                        customisation: customisation,
                        iswebview: null,
                        steampath: sanhelper.steampath,
                        skipaudio: isextwin || config.get("audiosrc") !== "notify"
                    }
                }

                notifywin.once("ready-to-show", async () => {
                    (notifywin as BrowserWindow).webContents.send("notify",await notifyinfo())
                    extwin && extwin.webContents.send("notify",await notifyinfo(true))
                })
    
                config.get("notifydebug") && sanhelper.setdevtools(notifywin)
                config.get("nvda") && clipboard.writeText(`${info.unlockmsg}. ${info.title}. ${info.desc}.`)
    
                ipcMain.once("notifyready", (event,res: Res) => {
                    const { msg, dims } = res

                    const preparewin = (win: BrowserWindow | null,isextwin?: boolean) => {
                        if (!win) return log.write("ERROR",`Error preparing ${isextwin ? "extwin" : "notifywin"}: Window was not found`)

                        // Set as <meta> tag dimensions, then send to `setnotifybounds` to calculate actual size
                        win.setSize(dims.width,dims.height)
                        const bounds = setnotifybounds({ width: dims.width, height: dims.height },notify.type,dims.offset,isextwin) as { width: number, height: number, x: number, y: number }
                        log.write("INFO",msg)

                        shownotify(win,bounds,isextwin)

                        if (isextwin) {
                            win.setResizable(false)
                            setTimeout(() => extwin ? extwin.webContents.send("notifyfinished",true,customisation.preset) : log.write("ERROR",`"extwin" destroyed before finishing timeout`),displaytime * 1000)
                        }
                    }
                    
                    preparewin(notifywin as BrowserWindow)
                    extwin && preparewin(extwin,true)
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
                    running = false

                    log.write("ERROR",`Notification window failed for "${notify.apiname}" - Check log for details`)
                    return ipcMain.emit("notifyclosed",null,true,customisation.preset)
                }

                // Closes the notification
                ipcMain.once("notifyfinished", async () => {
                    try {
                        const msg = await new Promise<string>(async resolve => {
                            if (!notifywin) return log.write("ERROR",`"notifywin" not found`)

                            notifywin.close()
                            notifywin = null

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
            },displaytime * 1000)
        }

        ipcMain.on("notifyfailed", (event,err: { msg: string }) => {
            notifyfailed = true
            log.write("ERROR",err.msg)
            win.webContents.send("notifyprogress",0,true)
        })

        // Prevents "Object has been destroyed" error if `extwin` is closed before `setTimeout` has occurred
        ipcMain.on("notifyclosed", (event,isextwin?: boolean,preset?: string) => (isextwin && extwin) && extwin.webContents.send("notifyclosed",preset))

        let poswin: BrowserWindow | null = null

        ipcMain.on("custompos", (event,type: "main" | "rare" | "plat",shouldreset: boolean) => {
            const config = sanconfig.get()
            if (poswin) return
            if (shouldreset) return config.set(`customisation.${type}.custompos`,{ x: 0, y: 0 })

            const { width: notifywidth, height: notifyheight } = sanhelper.getpresetbounds(`customisation.${type}.preset`)
            const { width, height } = setnotifybounds({ width: notifywidth, height: notifyheight },type) as { width: number, height: number }
            
            poswin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Notification Position`,
                width: width,
                height: height,
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
            poswin.on("ready-to-show", () => poswin!.webContents.send("poswin",type))

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

        ipcMain.on("logwin", (event,logcontents: string) => {
            if (logwin) return

            logwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): App Log`,
                width: 300,
                height: 400,
                center: true,
                autoHideMenuBar: true,
                fullscreen: false,
                fullscreenable: false,
                resizable: false,
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

            ipcMain.once("logwinready", event => event.reply("logwinready",logcontents))
            logwin.once("closed", () => {
                log.write("EXIT",`"App Log" window closed`)
                logwin = null
            })
        })

        ipcMain.on("steamss", async (event,steam3id) => {
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
        ipcMain.on("sswin", (event,notify?: Notify) => {
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

            createsswin(config.get("screenshots") === "notifyimg" ? "img" : "ss",notify,true)
        })

        const getssmonitor = (): { monitor: Monitor | Electron.Display | null, display: Electron.Display | null } => {
            const config = sanconfig.get()

            let monitor: Monitor | Electron.Display | undefined = config.get("monitors").find(monitor => config.get("monitor") === monitor.id)
            if (!monitor) {
                log.write("ERROR",`Monitor id "${config.get("monitor")}" could not be found in "config.monitors" - Reverting to primary display...`)
                monitor = screen.getPrimaryDisplay()
            }

            log.write("INFO",`[Selected Monitor ID]:\n- ${config.get("monitor")}\n\n[Stored Monitors]:\n- ${config.get("monitors").map(monitor => monitor.id).join("\n- ")}`)
            const display = screen.getAllDisplays().find(display => display.id === monitor!.id)

            return { monitor: monitor || null, display: display || null }
        }

        const getsspath = (id: number) => path.join(sanhelper.temp,`${id}.png`)

        const capturesrc = (notifyid: number, callback: () => void): void => {
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

            const { monitor } = getssmonitor()
            if (!monitor) return log.write("ERROR",`Error configuring screenshot src: Could not locate Monitor with id ${config.get("monitor")}, and no primary fallback found.\n\n${JSON.stringify(config.get("monitors"))}`)

            const { id, label, bounds: { width, height } } = monitor

            ipcMain.once("src",(event,err) => {
                if (err) return log.write("ERROR",`Error writing screenshot for Monitor ${id} ("${label}"): ${err}`)
                return log.write("INFO",`Screenshot for Monitor ${id} ("${label}") written successfully`)
            })
        
            const capture = () => {
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

        const createsswin = async (type: "ss" | "img",notify: Notify,ispreview?: boolean) => {
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
                    skipaudio: true
                } as Info)

                ipcMain.once("ssdims", (event,dims: { width: number, height: number, offset: number }) => {
                    if (!sswin) return log.write("ERROR",`Error setting "sswin" dimensions: "sswin" not found`)

                    if (type === "img") {
                        sswin.setSize(Math.round(dims.width * (notify.customisation.scale / 100)),Math.round(dims.height * (notify.customisation.scale / 100)))
                        sswin.center()
                        sswin.setResizable(false)
                    }

                    sswin.webContents.send("ssdims",dims)
                })

                !ispreview && ipcMain.once("sscapture", () => {
                    if (!sswin) return log.write("ERROR",`"${type}win" was closed before image file could be written to "${imgpath}"`)
                    
                    const ssdir = `${imgpath}/${(info.gamename || "Steam Achievement Notifier").replace(/[<>":\\/|?*\x00-\x1F]/g,"_").trim()}`
                    const ssimg = `${ssdir}/${info.title.replace(/[<>":\\/|?*\x00-\x1F]/g,"_").trim()}${type === "img" ? "_notification" : ""}.png`

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

            const { monitor, display } = getssmonitor()

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
                opacity: sanhelper.devmode || ispreview ? 1 : 0,
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

        return
    }
}