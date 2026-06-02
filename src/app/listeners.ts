import { app, ipcMain, BrowserWindow, Tray, Menu, nativeImage, dialog, Notification, screen, globalShortcut, BrowserWindowConstructorOptions, NotificationConstructorOptions, clipboard } from "electron"
import path from "path"
import fs from "fs"
import Store from "electron-store"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"
import { sanconfig } from "./config"
import { language } from "./language"
import { update } from "./update"
import { gameart } from "./gameart"
import { screenshot } from "./screenshots"
import { audio } from "./audio"

let appid: number = 0
let gameid: number = 0 // RetroAchievements GameID
let extwin: BrowserWindow | null = null
let statwin: BrowserWindow | null = null
let gametimerwin: BrowserWindow | null = null
let replay: { queueobj: WinType, src?: number } | null = null
const gameartfiles: string[] = []
let emu: string | null = null

const { defaultextwins } = sanconfig

export const listeners = {
    setexit: () => {
        ipcMain.on("exit",(event,reason) => {
            if (extwin) {
                extwin.destroy()
                extwin = null
            }

            log.backup(sanconfig.get())

            log.write("EXIT",reason || `No exit reason provided.`)
            app.exit()
        })
    },
    set: (win: BrowserWindow): void => {
        listeners.setexit()

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

        const updatetray = async (tray: Tray,gamename?: string | null,num?: number,betaunsupported?: boolean) => {
            tray && tray.removeAllListeners()

            const { usesanwatcher } = sanconfig.get().store
            const showautorelease = !usesanwatcher && !!appid

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
                            click: () => ipcMain.emit("releasegame"),
                            enabled: !betaunsupported
                        },
                        {
                            label: await language.get(suspended ? "resume" : "suspend"),
                            icon: nativeImage
                                    .createFromPath(path.join(__root,"icon",`power_${suspended ? "on" : "off"}.png`))
                                    .resize({ width: 16 }),
                            click: () => ipcMain.emit("suspendresume"),
                            enabled: !betaunsupported
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
                // Only show this option when global `appid` var is non-zero
                {
                    label: await language.get("autorelease"),
                    icon: nativeImage
                        .createFromPath(path.join(__root,"icon","link.png"))
                        .resize({ width: 16 }),
                    click: () => ipcMain.emit("noexe",null,false,true),
                    enabled: showautorelease,
                    visible: showautorelease
                },
                {
                    label: await language.get("replaynotify",["settings","notifications","content"]),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon","history.png"))
                            .resize({ width: 16 }),
                    click: () => ipcMain.emit("replaynotify"),
                    enabled: replay !== null
                },
                // Mouse events are ignored on Linux, so add "Show" option to system tray
                {
                    label: await language.get("show"),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon","show.png"))
                            .resize({ width: 16 }),
                    click: () => {
                        win.show()
                        win.focus()
                    },
                    enabled: process.platform === "linux",
                    visible: process.platform === "linux"
                },
                {
                    label: await language.get("exit"),
                    icon: nativeImage
                            .createFromPath(path.join(__root,"icon","close.png"))
                            .resize({ width: 16 }),
                    click: () => {
                        savewindowstate(win)
                        ipcMain.emit("exit",null,"App exited via System Tray")
                    }
                }
            ]

            tray.setContextMenu(Menu.buildFromTemplate(template))
            tray.on("double-click",() => win.show())
        }

        updatetray(tray)

        ipcMain.on("lang",(event,gamename: string | null,num: number) => {
            updatetray(tray!,gamename,num)
            ;(statwin || gametimerwin) && worker && worker.webContents.send("stats")
        })

        ipcMain.on("usesanwatcher",() => {
            updatetray(tray!)
            ipcMain.emit("validateworker")
        })

        ipcMain.on("steamlang",() => statwin && worker && worker.webContents.send("stats"))

        let lastknowngame: LastKnownGame | null = null // Updated via `worker.ts` and sent via "createworker" on each new "Worker" process spawn

        // Received from `worker.ts` when tracking begins for a new game
        ipcMain.on("lastknowngame",(event,game: LastKnownGame) => {
            lastknowngame = game
            log.write("INFO",`Cached last known game:\n\n- AppID: ${game.appid}\n- InstallDir: ${game.installdir}`)
        })

        let worker: BrowserWindow | null = null
        
        ipcMain.on("createworker",(event,lastknowngame: LastKnownGame | null) => {
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
                    backgroundThrottling: false,
                    additionalArguments: [
                        `--lastknowngame=${lastknowngame ? JSON.stringify(lastknowngame) : ""}` // "Worker" parses `lastknowngame` arg on spawn
                    ]
                }
            })

            worker.loadFile(path.join(__root,"dist","app","worker.html"))
            sanhelper.devmode && sanhelper.setdevtools(worker)
            worker.once("closed",() => log.write("EXIT",`"Worker" process closed`))

            const config = sanconfig.get()
            config.get("raemus").length && worker.webContents.send("startra")
        })

        // Starts/stops `ratimer` in `worker.ts` based on whether any emulators are selected under Settings > RetroAchievements > Emulators
        for (const action of (["start","stop"] as const)) {
            ipcMain.on(`ra${action}`,() => worker && worker.webContents.send(`ra${action}`))
        }

        ipcMain.on("worker",(event,args) => console.log(JSON.parse(args)))

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

        ipcMain.on("validateworker",async () => {
            win.webContents.send("releasing",false) // Clear "releasing" attribute
            
            const { releasedelay, usesanwatcher } = sanconfig.get().store

            try {
                ipcMain.emit("appid",null,{ appid: 0 })

                const msg = await validateworker()
                log.write("INFO",msg)

                setTimeout(() => ipcMain.emit("createworker",null,lastknowngame),usesanwatcher ? 0 : releasedelay * 1000)
            } catch (err) {
                log.write("WARN",err as Error)
                setTimeout(() => ipcMain.emit("validateworker"),1000)
            }
        })

        ipcMain.on("releasing",(event,value: boolean) => win.webContents.send("releasing",value)) // Adds visual "releasing" hint in UI

        const sendnoexeclick = (ipctype: "noexe" | "addlinkfailed",appid: number,skipnotify?: boolean) => {
            win.show()
            win.focus()
            win.webContents.send(`${ipctype}click`,appid,skipnotify)
        }

        ipcMain.on("noexe",(event,addlinkfailed?: boolean,skipnotify?: boolean) => {
            if (skipnotify) return sendnoexeclick("noexe",appid,skipnotify)
            
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
    
                ipcMain.once(`${ipctype}ready`,async () => {
                    if (!notifywin) return

                    const { width, height } = notifywin.getBounds()
                    const bounds = setnotifybounds({ width: width, height: height },null) as { width: number, height: number, x: number, y: number }
    
                    notifywin.webContents.send(`${ipctype}ready`,await language.get(ipctype),await language.get(`${ipctype}sub`))
                    shownotify(notifywin,bounds,undefined,true)
            
                    return setTimeout(() => notifywin && notifywin.webContents.send(`${ipctype}close`),!addlinkfailed ? 7500 : 5000)
                })
    
                ipcMain.once(`${ipctype}close`, () => {
                    if (!notifywin) return

                    notifywin.destroy()
                    notifywin = null
                })

                !addlinkfailed && ipcMain.once(`${ipctype}click`,() => sendnoexeclick(ipctype,appid))
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

        if (!sanhelper.beta) {
            update.setlisteners(win)
            update.check()
        }

        ipcMain.on("checkforupdates", () => !sanhelper.devmode ? update.check() : ipcMain.emit("noupdatetest"))

        const cleartemp = () => {
            try {
                fs.rmSync(sanhelper.temp,{ recursive: true, force: true })
                fs.mkdirSync(sanhelper.temp)
                return log.write("INFO",`"${sanhelper.temp}" directory cleared successfully`)
            } catch (err) {
                return log.write("ERROR",`Error clearing "${sanhelper.temp}" directory: ${err as Error}`)
            }
        }

        cleartemp()

        ipcMain.on("appid",(event,workerinfo: WorkerInfo) => {
            const { appid: id, gamename, achnum } = workerinfo
            appid = id
            win.webContents.send("appid",{ ...workerinfo, appid })
            updatetray(tray!,gamename,achnum)
        })

        ipcMain.on("runningappid",event => event.reply("runningappid",appid || 0))

        let debugwin: BrowserWindow | null = null

        ipcMain.on("debugwinready", () => worker && worker.webContents.send("debugwinready"))
        ipcMain.on("debuginfoupdated", (event,debuginfo: DebugInfo,reset?: boolean) => debugwin && debugwin.webContents.send("debuginfoupdated",debuginfo,reset))

        ipcMain.on("debugwin", (event,value: boolean) => {
            if (value && debugwin) return log.write("WARN",`"debugwin" already active`)
            if (!value && debugwin) return debugwin.close()

            debugwin = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): Debug Panel`,
                width: 500,
                height: 300,
                minWidth: 500,
                minHeight: 300,
                autoHideMenuBar: true,
                resizable: true,
                maximizable: false,
                fullscreenable: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            debugwin.setAspectRatio(5/3)

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

        ipcMain.on("showtrack", (event,gamename: string,ra?: { icon: string, gameartlibhero: string }) => {
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

            ipcMain.once("trackwinready",async () => {
                const { width, height } = trackwin.getBounds()
                const bounds = setnotifybounds({ width: width, height: height },null) as { width: number, height: number, x: number, y: number }

                const sendtrackinfo = async (gamename: string,gamearticon: string,gameartlibhero: string) => {
                    trackwin.webContents.send("gamename",await language.get("nowtracking"),gamename,gamearticon,gameartlibhero)
                    shownotify(trackwin,bounds,false,config.get("nowtracking"))
    
                    return setTimeout(() => trackwin.webContents.send("trackwinclose"),4500)
                }

                const steampath = sanhelper.steampath
                const hqicon = ra ? ra.icon : sanhelper.gethqicon(appid)
                const tempdir = sanhelper.temp
                
                const gameartobj = {
                    appid,
                    hqicon,
                    steam3id: 0,
                    steampath,
                    gamename
                }

                const getgameartimgs = async (obj: object,files: string[]): Promise<{ icon: string, gameartlibhero: string }> => {
                    return {
                        icon: await gameart.get({ ...obj, type: "icon" } as GameArt,files).then(res => res).catch(fallback => fallback),
                        gameartlibhero: await gameart.get({ ...obj, type: "library_hero" } as GameArt,files).then(res => res).catch(fallback => fallback)
                    }
                }

                try {
                    !ra && worker && worker.webContents.send("steam3id",true)

                    const { steam3id, skipss } = ra ? { steam3id: 0, skipss: true } : await new Promise<{ steam3id: number, skipss?: boolean }>(resolve => ipcMain.once("steam3id",async (event,steam3id: number = 0,skipss?: boolean) => resolve({ steam3id, skipss })))
                    const { icon, gameartlibhero } = ra || await getgameartimgs({ ...gameartobj, steam3id },gameartfiles)
                    const gamearticon = ra ? null : await gameart.convertICO(icon,tempdir)

                    skipss && sendtrackinfo(gamename,gamearticon || icon,gameartlibhero)
                } catch (err) {
                    log.write("ERROR",`Error sending tracking info to Worker: ${err}`)
                    
                    const { icon, gameartlibhero } = ra || await getgameartimgs(gameartobj,gameartfiles)
                    const gamearticon = ra ? null : await gameart.convertICO(icon,tempdir)

                    sendtrackinfo(gamename,gamearticon || icon,gameartlibhero)
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

                for (const win of [extwin,statwin,gametimerwin]) {
                    win && win.setPosition(0,0)
                }

                resolve()
            })
            .then(() => {
                win.setSize(width,height)
                statwin && statwin.setSize(250,500)
                gametimerwin && gametimerwin.setSize(250,100)
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

        ipcMain.on("releasegame",(event,skipdialog?: boolean) => {
            const { noreleasedialog } = sanconfig.get().store
            const showdialog = !skipdialog && !noreleasedialog

            if (showdialog) {
                win.show()
                win.focus()
            }

            win.webContents.send("releasegame",!showdialog)
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

        ipcMain.on("restart",(event,reason: string) => {
            return new Promise(async (resolve,reject) => {
                if (reason !== "Reset App confirmed by user") return resolve(reason)
                    
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

        const createextwin = (config: Store<Config>,type: ExtWins,value: boolean) => {
            if (!value) {
                closewin(type)
                return null
            }

            const { x, y } = config.get(`${type}winpos`)
            const { wintitle, width, height, minWidth, minHeight } = defaultextwins[type]

            const win = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${wintitle || "!!!MISSING"}`,
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
                resizable: type !== "ext",
                movable: true,
                frame: false,
                transparent: true,
                skipTaskbar: false,
                alwaysOnTop: type !== "ext" && config.get(`${type}winaot`),
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            // `extwin` does not render content if transparency is set while HWA is disabled
            type === "ext" && !config.get("nohwa") && win.setOpacity(config.get("extwinshow") ? 1 : (sanhelper.devmode ? 0.5 : 0))
            type !== "ext" && win.setIgnoreMouseEvents(config.get(`${type}winaot`))
            type === "gametimer" && win.setAspectRatio(2.5/1)

            win.loadFile(path.join(__root,"dist","app",`${type}win.html`))
            sanhelper.devmode && sanhelper.setdevtools(win)

            // Saved `config.get("statwinpos").height` value is not applied when positioned on a secondary monitor unless a timeout is used here
            setTimeout(() => win.setBounds({ x, y, width, height }),250)

            return win
        }

        const closewin = (type: string) => {
            // Needs explicit assignment to avoid "Object has been destroyed" error
            if (type === "ext") {
                if (!extwin) return log.write("WARN",`"${type}win" not found`)

                extwin.close()
                extwin = null
            }
            
            if (type === "stat") {
                if (!statwin) return log.write("WARN",`"${type}win" not found`)

                statwin && statwin.close()
                statwin = null
            }

            if (type === "gametimer") {
                if (!gametimerwin) return log.write("WARN",`"${type}win" not found`)

                gametimerwin && gametimerwin.close()
                gametimerwin = null
            }
        }

        const setwinbounds = (config: Store<Config>,type: ExtWins,win: BrowserWindow) => {
            const { x, y, width, height } = win.getBounds()
            const bounds: { x: number, y: number, width?: number, height?: number } = { x, y }

            if (type !== "ext") {
                bounds.width = roundbounds(width,"size")
                bounds.height = roundbounds(height,"size")
            }

            config.set(`${type}winpos`,bounds)
        }

        const setwinclosevalue = (config: Store<Config>,type: ExtWins,reopenonlaunch: boolean) => {
            log.write("EXIT",`${defaultextwins[type].wintitle || "!!!MISSING"} Window ${reopenonlaunch ? "destroyed" : "closed"}.`)
            config.set(`${type}win`,reopenonlaunch)
            ipcMain.emit("configupdated",null,config.store)
        }

        ipcMain.on("extwin",(event,value: boolean) => {
            const config = sanconfig.get()
            const { notifymax } = config.store
            
            if (value && notifymax > 1) {
                log.write("WARN",`Max notifications currently set to ${notifymax}, and Stream Notifications does not support more than 1 notification at a time. Resetting to 1...`)
                config.set("notifymax",1)
            }

            win.webContents.send("notifymax",value)

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

        ipcMain.on("statwin",(event,value: boolean) => {
            if (value && statwin) return log.write("WARN",`${defaultextwins.stat.wintitle} window already active`)
            
            const config = sanconfig.get()

            // If `reopenonlaunch` is true when the app closes, the window reopens next time the app is launched (as it writes bool value to config)
            let reopenonlaunch = true
            
            statwin = createextwin(config,"stat",value)
            if (!statwin) return

            ipcMain.once("statwinready",() => {
                const value = config.get("statwinaot")
                value && statwin!.webContents.send("statwinaot",value)
                worker && worker.webContents.send(`${gameid ? "ra" : ""}stats`,true)
            })

            statwin.on("moved",() => setwinbounds(config,"stat",statwin!))
            statwin.on("resized",() => setwinbounds(config,"stat",statwin!))

            statwin.once("close",() => {
                setwinbounds(config,"stat",statwin!)
                reopenonlaunch = false
            })

            statwin.once("closed",() => {
                setwinclosevalue(config,"stat",reopenonlaunch)
                statwin = null
            })
        })

        ipcMain.on("statwinaot",(event,value: boolean) => {
            if (!statwin) return

            statwin.setAlwaysOnTop(value)
            statwin.setIgnoreMouseEvents(value)

            statwin.webContents.send("statwinaot",value)
        })

        let runningstatwin: Record<"steam" | "ra",number> = { steam: 0, ra: 0 }

        ipcMain.on("stats",async (event,statsobj: StatsObj,init?: boolean) => {
            if (!statwin) return
            
            const { appid, ra } = statsobj
            const active = ra ? "ra" : "steam"
            const inactive = ra ? "steam" : "ra"

            if (runningstatwin[inactive] !== 0) return log.write("WARN",`${defaultextwins.stat.wintitle} already active for ${inactive === "ra" ? "RA Game" : "App"}ID ${runningstatwin[inactive]}`)
            
            runningstatwin[active] = appid
            
            const section = ["settings","streaming","content"]
            const translations: StatsObjTranslations = {
                nogame: await language.get("game",["app","content"]),
                noachievements: await language.get("noachievements",[...section]),
                startgame: await language.get("startgame",[...section]),
                max: await language.get("max",[...section]),
                custom: await language.get("custom",[...section]),
                congrats: await language.get("congrats"),
                gamecompletedesc: await language.get("gamecompletedesc"),
            }

            statwin.webContents.send("stats",statsobj,translations,init)
        })

        ipcMain.on("statwinicon",(event,achievement: Achievement) => {
            if (!worker) return statwin && statwin.webContents.send("statwinicon",null)

            ipcMain.once(`iconpath_${achievement.apiname}`,(event,iconpath: string | null) => statwin && statwin.webContents.send(`iconpath_${achievement.apiname}`,iconpath))
            worker.webContents.send("statwinicon",achievement)
        })

        ipcMain.on("steamlang",() => statwin && worker && worker.webContents.send("steamlang"))

        ipcMain.on("shortcut",(event,shouldregister?: boolean) => {
            globalShortcut.unregisterAll()
            win.webContents.send("noshortcuts",sanconfig.get().store.noshortcuts)

            if (shouldregister === false) return

            const config = sanconfig.get()
            config.get("shortcuts") && (["main",...(config.get("trophymode") ? ["semi"] : []),"rare","plat"] as NotifyType[]).forEach(type => globalShortcut.register(config.get(`customisation.${type}.shortcut`) as string, () => win.webContents.send("shortcut",type)))

            globalShortcut.register(config.get("releaseshortcut") as string,() => ipcMain.emit("releasegame"))

            for (const type of (["stat","gametimer"] as const)) {
                globalShortcut.register(config.get(`${type}winshortcut`) as string,() => {
                    const value = config.get(`${type}win`)
                    config.set(`${type}win`,!value)
                    ipcMain.emit(`${type}win`,null,!value)
                })
            }

            globalShortcut.register(config.get("replaynotifyshortcut") as string,() => ipcMain.emit("replaynotify"))
        })

        ipcMain.on("loadfile", async (event,filetype) => {
            const type = new Map<string,{ name: string, extensions: string[] }>([
                ["img",{ name: await language.get("image"), extensions: ["png","svg","jpg","jpeg","gif"] }],
                ["audio",{ name: await language.get("audio"), extensions: ["mp3","wav","ogg","aac"] }],
                ["dir",{ name: await language.get("folder"), extensions: [] }],
                ["font",{ name: await language.get("font"), extensions: ["ttf","otf","woff","woff2"] }],
                ["exe",{ name: await language.get("exepath",["linkgame","content"]), extensions: [ process.platform === "win32" ? "exe" : "*" ] }],
                ["log",{ name: await language.get("logfile",["settings","ra","content"]), extensions: ["log","txt"] }],
                ["sanbak",{ name: await language.get("backup",["settings","advanced","content"]), extensions: ["sanbak"] }]
            ])

            const isfile = filetype !== "dir"

            const filedialog = dialog.showOpenDialogSync({
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${await language.get("select")} ${type.get(filetype)!.name}`,
                buttonLabel: await language.get("select"),
                properties: [
                    `open${isfile ? "File" : "Directory" }`,
                    "dontAddToRecent"
                ],
                ...(isfile && { filters: [type.get(filetype)!] })
            })

            event.reply("loadfile",filedialog)
        })

        const queue: WinType[] = []
        const runningmap = new Map<number,BrowserWindow | Notification>()
        const posmap = new Map<"topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright",{ y: number, items: { id: number, win: BrowserWindow, bounds: { width: number, height: number, x: number, y: number }, type: NotifyType }[] }>()

        const gameartobj: GameArtObj = {
            icon: "../img/gameicon.png",
            libhero: "../img/sanimgbg.png",
            logo: "../img/gameicon.png"
        }

        ipcMain.on("notify",async (event,notify: Notify,iswebview?: "customiser" | "sspreview" | null,monitorid?: number) => {
            const config = sanconfig.get()
            
            if (config.get("soundonly")) {
                if (!iswebview) {
                    win.webContents.send("soundonly",notify.type)
                    log.write("INFO",`"Sound-Only Mode" activated`)
                }

                return
            }

            if (!notify.istestnotification && config.get("exportachdata")) {
                const achdata = path.join(sanhelper.appdata,"achdata.json")

                try {
                    const notifycopy = { ...notify }
                    
                    delete (notifycopy as any).customisation
                    notifycopy.gameicon = !notify.ra ? path.join(sanhelper.temp,"gameicon.png").replace(/\\/g,"/") : notify.gameicon

                    fs.writeFileSync(achdata,JSON.stringify(notifycopy,null,4))
                    log.write("INFO",`Exported achievement data for "${notify.name}" to "${achdata}"`)
                } catch (err) {
                    log.write("ERROR",`Unable to export achievement data for "${notify.name}": ${err}`)
                }
            }

            const { syncedtheme } = (await import("./usertheme")).usertheme
            notify.customisation = syncedtheme(config,notify.customisation)

            // Set all notifications to use the same scaling when Max Notifications > 1
            config.get("notifymax") > 1 && (notify.customisation = { ...notify.customisation, scale: config.get("customisation.main.scale") as number })

            const { preset } = notify.customisation

            if (!iswebview) {
                const wintypeobj = preset === "os" ? {
                    type: "Notification",
                    notify,
                    options: {
                        timeoutType: "never",
                        silent: true
                    } as NotificationConstructorOptions
                } : {
                    type: "BrowserWindow",
                    notify,
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
                }

                queue.push({ ...wintypeobj, order: queue.length } as WinType)
                
                // Sort "plat" notifications to always display last
                queue.sort((a,b) => {
                    if (a.notify.type === "plat" && b.notify.type !== "plat") return 1   // "plat" after "main"/"semi"/"rare"
                    if (a.notify.type !== "plat" && b.notify.type === "plat") return -1  // "main"/"semi"/"rare" before "plat"
                    
                    return a.order - b.order // Otherwise, preserve original order
                }).forEach((obj,i) => obj.order = i) // Normalise to sequential order

                // Safeguard to prevent duplicate `order` IDs if found
                const orders = queue.map(obj => obj.order)
                const duplicates = orders.some((order,i) => orders.indexOf(order) !== i)
                
                if (duplicates) {
                    log.write("WARN",`Notification queue contains duplicate order IDs - renormalising...`)
                    queue.forEach((obj,i) => obj.order = i)
                }
            }

            const info = await buildnotify(notify)

            const steampath = sanhelper.steampath
            const __temp = sanhelper.temp
            const steam3id = notify.steam3id
            const hqicon = sanhelper.gethqicon(appid)

            if (config.get(`customisation.${notify.type}.bgstyle`) === "gameart" || config.get(`customisation.${notify.type}.usegameicon`)) {
                if (notify.ra) {
                    for (const [key,value] of Object.entries({
                        icon: notify.gameicon!,
                        libhero: notify.libhero!,
                        logo: notify.gameicon!
                    })) {
                        gameartobj[key] = value
                    }
                } else {
                    // Gets all Game Art img files and assigns them to the global "gameartobj" object
                    for (const [key,value] of Object.entries(await gameart.getall(
                        { appid, hqicon, steam3id, steampath },
                        gameartfiles,
                        __temp,
                        __root
                    ))) {
                        gameartobj[key] = value
                    }
                }
            }
            
            if (iswebview === "customiser") {
                const { ssalldetails, screenshots, notify1line } = config.store
                const { icon, libhero, logo } = gameartobj

                return win.webContents.send("customisernotify",{
                    info,
                    customisation: notify.customisation,
                    iswebview,
                    steampath,
                    steam3id: notify.steam3id,
                    hqicon,
                    temp: sanhelper.temp,
                    ssalldetails,
                    screenshots,
                    gamearticon: icon,
                    gameartlibhero: libhero,
                    gameartlogo: logo,
                    notify1line
                } as Info)
            }

            worker && worker.webContents.send("steam3id")
            preset !== "os" && notify.customisation.ssenabled && await screenshot.configuresrc(notify,monitorid)

            win.webContents.send("queue",queue)
            checkifrunning(info,monitorid)
        })

        const buildnotify = async (notify: Notify): Promise<BuildNotifyInfo> => {
            const config = sanconfig.get()
            const { id, type, customisation, gamename, steam3id, apiname, icon, percent, hidden } = notify
            
            return {
                id,
                type,
                appid,
                gamename,
                steam3id,
                apiname,
                unlockmsg: `${(customisation.usegametitle && (gamename || await language.get("gametitle"))) || customisation.customtext || (notify.type === "plat" ? await language.get("congrats") : await language.get("achievementunlocked"))}`,
                title: type === "plat" ? await language.get("gamecomplete") : notify.name,
                desc: type === "plat" ? await language.get("gamecompletedesc") : notify.desc,
                icon,
                percent: {
                    value: percent,
                    rarity: config.get("rarity"),
                    semirarity: config.get("semirarity"),
                    showpercent: config.get("showpercent")
                },
                hidden
            } as BuildNotifyInfo
        }

        const setnotifybounds = (dims: { width: number, height: number, x?: number, y?: number },type: NotifyType | null,offset = 20,wintype?: "extwin" | "sswin",customisation?: Customisation) => {
            const config = sanconfig.get()
            if (config.get("soundonly")) return
        
            const custompos = customisation ? customisation.custompos : config.get(`customisation.${type}.custompos`) as { x: number, y: number }
            const monitor = (dims.x !== undefined && dims.y !== undefined) ? screen.getDisplayNearestPoint({ x: dims.x, y: dims.y }) : ((customisation ? customisation.usecustompos : (config.get(`customisation.${type}.usecustompos`))) ? screen.getDisplayNearestPoint({ x: custompos.x, y: custompos.y }) : screen.getPrimaryDisplay())
            const scale = type ? (customisation ? customisation.scale : config.get(`customisation.${type}.scale`) as number) / 100 : 1
        
            // "screenwidth"/"screenheight" already have scaleFactor applied when returned as Electron.Display
            const screenwidth = monitor.bounds.width
            const screenheight = monitor.bounds.height
            const notifywidth = dims.width * scale
            const ssheight = (type && wintype !== "sswin" && config.get("screenshots") === "overlay" && customisation && customisation.ssdisplay) ? 175 : 0
            const notifyheight = (dims.height + ssheight) * scale
        
            const bordersize = 50
            const glowsize = type ? bordersize * scale : 0

            // `!offset ? 0 : ...` fixes issue where presets containing HTML with a `meta` tag "offset" attribute value of 0 would still be assigned an offset, causing incorrect placement
            const top = !offset ? 0 : ((glowsize / 2) * -1) + (bordersize / 2)
            const bottom = !offset ? 0 : (glowsize / 2) - (bordersize / 2)
        
            const positions = {
                topleft: { x: top, y: top },
                topcenter: { x: (screenwidth / 2) - ((notifywidth + glowsize) / 2), y: top },
                topright: { x: (screenwidth - (notifywidth + glowsize) - top), y: top },
                bottomleft: { x: top, y: (screenheight - (notifyheight + glowsize) + bottom) },
                bottomcenter: { x: (screenwidth / 2) - ((notifywidth + glowsize) / 2), y: (screenheight - (notifyheight + glowsize) + bottom) },
                bottomright: { x: (screenwidth - (notifywidth + glowsize) + bottom), y: (screenheight - (notifyheight + glowsize) + bottom) }
            } as Positions
        
            const { x, y } = (type && wintype === "extwin") ? { x: 0, y: 0 } : (type ? (((customisation ? customisation.usecustompos : config.get(`customisation.${type}.usecustompos`)) ? custompos : positions[(customisation ? customisation.pos : config.get(`customisation.${type}.pos`)) as "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright"])) : positions[config.get("nowtrackingpos")])
        
            return {
                width: notifywidth + glowsize,
                height: notifyheight + glowsize,
                x,
                y
            }
        }

        const shownotify = (win: BrowserWindow,bounds: { width: number, height: number, x: number, y: number },isextwin?: boolean,istrackwin?: boolean) => {
            const { width, height, x, y } = bounds
            const offscreenpx: number | null = process.platform === "linux" && !sanconfig.get().store.extwinnotify ? 10000  : null
            
            isextwin && win.setResizable(true)
            win.setSize(Math.round(width),Math.round(height))

            !isextwin && win.setPosition(Math.round(x as number),offscreenpx ?? Math.round(y as number))
            istrackwin && win.show()
        }

        const notifywins = new Map<number,BrowserWindow | Notification | null>()
        const offscreenwins = new Map<number,BrowserWindow | null>()

        const checkifrunning = (info: BuildNotifyInfo,monitorid?: number): any => {
            const i = queue.findIndex(obj => obj.notify.id === info.id)
            if (runningmap.size > (sanconfig.get().store.notifymax - 1) || queue[i].order !== 0) return setTimeout(() => checkifrunning(info,monitorid),1000)

            if (!queue[i].notify.istestnotification) {
                replay = { queueobj: queue[i], src: monitorid }
                win.webContents.send("allowreplay",replay)
            }

            const config = sanconfig.get()
            const { type, notify, notify: { customisation }, options } = queue.splice(i,1)[0]

            for (const queueobj of queue) {
                queueobj.order -= 1
            }
            
            if (type === "Notification") {
                // `toastXML` overrides all other options on Windows, but not on other platforms
                notifywins.set(notify.id,new Notification({
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
                }))

                notifywins.get(notify.id)!.show()
            } else {
                notifywins.set(notify.id,new BrowserWindow(options))

                for (const [id,offscreenwin] of offscreenwins) {
                    offscreenwin && offscreenwin.destroy()
                }

                offscreenwins.clear() // For now, make sure only one `offscreenwin` exists at a time

                offscreenwins.set(notify.id,!extwin ? null : new BrowserWindow({
                    ...options,
                    title: `Steam Achievement Notifier (V${sanhelper.version}): Offscreen Notification`,
                    x: 0,
                    y: 0,
                    show: false,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false,
                        backgroundThrottling: false,
                        offscreen: {
                            deviceScaleFactor: screen.getPrimaryDisplay().scaleFactor
                        }
                    }
                }))

                offscreenwins.get(notify.id)?.webContents.setFrameRate(config.get("extwinframerate"))
                sanhelper.devmode && offscreenwins.get(notify.id)?.webContents.openDevTools({ mode: "detach" })
            }

            if (notifywins.get(notify.id)! instanceof BrowserWindow) {
                const basehtml = config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : path.join(__root,"notify","base.html")
                const notifywin = notifywins.get(notify.id)! as BrowserWindow
                const offscreenwin = offscreenwins.get(notify.id)! as BrowserWindow

                notifywin.loadFile(basehtml)
                config.get("screenshots") !== "off" && config.get("ssdelay") > 0 && notifywin.setContentProtection(true) // If `ssdelay` > 0, prevents on-screen notification from being captured to prevent duplicate notifications in screenshots
                notifywin.setIgnoreMouseEvents(true)
                notifywin.setAlwaysOnTop(true,"screen-saver",1000)
                config.get("extwin") && !config.get("nohwa") && process.platform !== "linux" && notifywin.setOpacity(!config.get("extwinnotify") ? (sanhelper.devmode ? 0.5 : 0) : 1)

                if (extwin && offscreenwin instanceof BrowserWindow) {
                    offscreenwin.loadFile(basehtml)
                    offscreenwin.setIgnoreMouseEvents(true)

                    // Send img data to offscreen window if `extwin` is active
                    offscreenwin.webContents.on("paint",(event,_,img) => extwin && extwin.webContents.send("imgdata",img.toDataURL()))
                }

                const notifyinfo = async (isextwin?: boolean) => {
                    const { audiosrc, ssalldetails, screenshots, notify1line } = config.store
                    const { appid, steam3id } = info
                    const steampath = sanhelper.steampath
                    const hqicon = notify.ra ? notify.gameicon : sanhelper.gethqicon(appid)
                    const { icon, libhero, logo } = gameartobj

                    return {
                        info,
                        customisation,
                        iswebview: null,
                        steampath,
                        skipaudio: isextwin || audiosrc !== "notify",
                        steam3id,
                        hqicon,
                        temp: sanhelper.temp,
                        ssalldetails,
                        screenshots,
                        gamearticon: icon,
                        gameartlibhero: libhero,
                        gameartlogo: logo,
                        notify1line,
                        ra: notify.ra
                    } as Info
                }

                // Fixes an issue where `ipcRenderer.on("notify",...)` was sometimes not received in `offscreenwin`'s `base.ts` instance, due to sending `offscreenwin.webContents.send("notify",...)` before the window was created
                // This prevents instances where notifications would sometimes appear blank in `extwin`, due to never receiving the "notify" event
                ipcMain.once(`offscreenready_${notify.id}`,async () => offscreenwin && offscreenwin.webContents.send("notify",await notifyinfo(true)))

                notifywin.once("ready-to-show", async () => {
                    const { notifymax } = config.store                    
                    const info = await notifyinfo()
                    
                    notifymax > 1 && info.customisation.preset !== "os" && audio.playhighestpriority(info,info.info.type) // Play the audio for the highest priority notification
                    ;(notifywin as BrowserWindow).webContents.send("notify",info,notify.id)

                    if (extwin) {
                        extwin.webContents.send("notify")

                        if (!offscreenwin) {
                            log.write("WARN",`"offscreenwin" not found - cannot send "notify" ipc event`)
                            return offscreenwins.clear()
                        }
                    }
                })
    
                config.get("notifydebug") && sanhelper.setdevtools(notifywin)
                config.get("nvda") && clipboard.writeText(`${info.unlockmsg}. ${info.title}. ${info.desc}.`)
                config.get("customtrigger") && setTimeout(async () => {
                    const { jstosteamkeycodes, steamkeycodes } = await import("./keycodes")
                    const sckeys = config.get("customtriggershortcut").split("+")
                    const keypresses: (string | number)[] = []
                    
                    for (const sckey of sckeys) {
                        const hotkey = `KEY_${jstosteamkeycodes.get(sckey) || sckey}`
                        const steamkeycode = steamkeycodes.get(hotkey)
                        const value = steamkeycode?.[process.platform === "win32" ? 0 : 1]

                        // Ensure 0x-based keycodes are not accidentally excluded by checking specifically for `null`/`undefined`
                        ;(value !== null && value !== undefined) ? keypresses.push(value) : log.write("WARN",`Custom Trigger not activated due to invalid key "${sckey}"`)
                    }

                    if (keypresses.length < sckeys.length) return log.write("WARN",`Custom Trigger failed due to invalid key(s)`)

                    sanhelper.triggerkeypress(keypresses)
                },((config.get(config.get("customtriggerusedisplaytime") ? `customisation.${notify.type}.displaytime` : "customtriggerdelay") as number) * 1000) + (config.get("customtriggerusedisplaytime") ? 1000 : 0))
    
                ipcMain.once("notifyready", (event,res: Res) => {
                    const { msg, dims } = res

                    const preparewin = (win: BrowserWindow | null,isextwin?: boolean) => {
                        if (!win) return log.write("WARN",`Error preparing ${isextwin ? "extwin" : "notifywin"}: Window was not found`)

                        // Set as <meta> tag dimensions, then send to `setnotifybounds` to calculate actual size
                        win.setSize(dims.width,dims.height)
                        const bounds = setnotifybounds({ width: dims.width, height: dims.height },notify.type,dims.offset,isextwin ? "extwin" : undefined,notify.customisation) as { width: number, height: number, x: number, y: number }
                        log.write("INFO",msg)

                        // Stack/offset notifications with the same `customisation.pos` value
                        if (config.store.notifymax > 1) {
                            const { pos } = notify.customisation
                            const top = pos.startsWith("top")

                            let stack = posmap.get(pos)
                            
                            if (!stack) {
                                stack = { y: bounds.y, items: [] }
                                posmap.set(pos,stack)
                            }

                            let offset = 0

                            const { notifyspace, customisation } = config.store
                            
                            for (const item of stack.items) {
                                offset += item.bounds.height + Math.round(notifyspace * (customisation[item.type].scale / 100))
                            }
                            
                            bounds.y = top ? stack.y + offset : stack.y - offset

                            stack.items.push({ id: notify.id, win: notifywin, bounds, type: notify.type })
                            posmap.set(pos,stack)
                        }

                        shownotify(win,bounds,isextwin)
                    }
                    
                    preparewin(notifywin as BrowserWindow)
                    extwin && [(offscreenwin as BrowserWindow),extwin].forEach(win => preparewin(win,true))
                    ipcMain.emit(`offscreenready_${notify.id}`)
                })
            }

            const notifywin = notifywins.get(notify.id)! as BrowserWindow
            const offscreenwin = offscreenwins.get(notify.id)! as BrowserWindow 

            (config.get("audiosrc") === "app" || notifywin instanceof Notification && config.get("audiosrc") !== "off") && win.webContents.send("appaudio",notify.type)

            runningmap.set(notify.id,notifywin)

            // Sends event to `createsswin()` to build screenshot for `notify.id`
            ipcMain.emit(`${notify.id}`)

            win.webContents.send("notifyprogress",notify.customisation.displaytime)
            log.write("INFO",`"${notify.apiname}" | unlocktime: ${notify.unlocktime} | notifytime: ${new Date(Date.now()).toISOString()}`)

            const notifyfinished = (id: number) => {
                notifywin instanceof BrowserWindow ? notifywin.webContents.send("notifyfinished",id) : ipcMain.emit("notifyfinished",null,id)

                log.write("INFO",`Animation for ID ${id} finished - closing notification window...`)
                
                if (extwin) {
                    if (!offscreenwin) return log.write("WARN",`"offscreenwin" not found - cannot send "notifyfinished" ipc event`)
                    offscreenwin.webContents.send("notifyfinished",id)
                }
            }

            // "animend" is received from `base.ts`, rather than controlled from here via Timeout
            // This allows notifications to dictate when to close, rather than being closed after `displaytime` with no context of animation progress
            // When the "Native OS" preset is selected, the legacy `setTimeout()` will be used instead
            ;customisation.preset === "os" ? setTimeout(() => { try { notifyfinished(notify.id) } catch {} },customisation.displaytime * 1000) : ipcMain.once(`animend_${notify.id}`,(event,id: number) => { try { notifyfinished(id) } catch {} })
        }

        // Closes the notification
        ipcMain.on("notifyfinished",async (event,id: number) => {
            const notify = { id: Array.from(notifywins.keys()).find(key => key === id) }
            const notifywin = notifywins.get(id)
            const offscreenwin = offscreenwins.get(id)
            
            if (!notify.id || notify.id !== id || !notifywin) return

            try {
                const msg = await new Promise<string>(async resolve => {
                    if (!notifywin) log.write("WARN",`"notifywin" for ID ${id} not found - cannot close window`)

                    notifywin && notifywin.close()
                    notify.id && notifywins.delete(notify.id)

                    if (extwin) {
                        extwin.webContents.send("notifyfinished",id)

                        if (!offscreenwin) log.write("WARN",`"offscreenwin" not found - cannot close window`)

                        offscreenwin && offscreenwin.close()
                        notify.id && offscreenwins.delete(notify.id)
                    }

                    resolve(`Notification window for ID ${id} closed successfully`)
                })

                log.write("INFO",msg)
                runningmap.delete(id)

                // Reposition and re-offset remaining notifications
                for (const [pos,stack] of posmap.entries()) {
                    const stackcopy = stack.items
                    const i = stack.items.findIndex(item => item.id === id)
                    if (i === -1) continue

                    stack.items.splice(i,1)

                    if (!stack.items.length) {
                        posmap.delete(pos)
                        continue
                    }

                    const top = pos.startsWith("top")

                    let offset = 0

                    const config = sanconfig.get()
                    const { notifyspace, customisation } = config.store

                    for (const item of stackcopy) {
                        const bounds = { ...item.bounds }
                        bounds.y = top ? stack.y + offset : stack.y - offset

                        setTimeout(() => { try { item.win.setBounds(bounds,true) } catch {} },50) // `try/catch` prevents "Object has been destroyed" error

                        item.bounds = bounds

                        offset += bounds.height + Math.round(notifyspace * (customisation[item.type].scale / 100))
                    }

                    stack.items = stackcopy
                    posmap.set(pos,stack)
                }

                win.webContents.send("queue",queue)
            } catch (err) {
                log.write("ERROR",`Error closing notification window for ${id}: ${err}`)
            } finally {
                win.webContents.send("notifyprogress",0,true)
            }
        })

        ipcMain.on("notifyfailed",(event,err?: Error,id?: number,apiname?: string) => {
            let success = true
            let catcherr: Error | null = null

            const notifywin = id ? notifywins.get(id) : null
            const offscreenwin = id ? offscreenwins.get(id) : null
            if (!id || !notifywin) return log.write("ERROR",`No ${!id ? "ID" : `window for ID ${id}`} found`)
            
            try {
                notifywin && (notifywin instanceof BrowserWindow ? notifywin.destroy() : notifywin.close()) // Destroys/closes the window
                notifywins.delete(id)
    
                offscreenwin && offscreenwin.destroy() // Destroys/closes the window
                offscreenwins.delete(id)

                // Emit dummy events to trigger `.once()` listeners, which removes them for subsequent notifications
                // Note: "notifyready" event cannot be triggered here, as it causes an error which prevents subsequent notifications from displaying
                ;["notifyfinished","animend"].forEach(event => ipcMain.emit(event,null,id))
                
                id && runningmap.delete(id)
    
                win.webContents.send("notifyprogress",0,true) // Resets UI progress circle
            } catch (err) {
                success = false
                catcherr = err as Error
            }

            return log.write("ERROR",`Notification window failed${apiname ? ` for ${apiname}` : ""}${err ? `: ${err}` : ""}\n\n${success ? "✅" : "❌"} Cleanup ${success ? "performed successfully" : `failed: ${catcherr || ""}`}`)
        })

        ipcMain.on("replaynotify",() => {
            if (!replay) return log.write("WARN",`Unable to replay notification: Replay queue is empty`)
            const { queueobj: { notify }, src } = replay
            ipcMain.emit("notify",null,notify,null,src)
        })

        ipcMain.on("sendwebhook",(event,notify: Notify) => win.webContents.send("sendwebhook",notify,notify.ra ? gameid : appid))

        let poswin: BrowserWindow | null = null

        ipcMain.on("custompos", (event,type: NotifyType,shouldreset: boolean) => {
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
                sanconfig.get().set("logwin","san") // Reset "logtype" to "san" on exit
            })
        })

        ipcMain.on("updatelogwin", (event,logcontents: string,logtype: "san" | "rust" | "sanhelperrs" | "bak",filename?: string) => logwin && logwin.webContents.send("updatelogwin",logcontents,logtype,filename))
        ipcMain.on("updatelogtype", (event,logtype,filename?: string) => {
            sanconfig.get().set("logtype",logtype)
            win.webContents.send("updatelogtype",logtype,filename)
        })

        ipcMain.on("steam3id", async (event,steam3id: number,skipss?: boolean) => {
            if (skipss) return log.write("INFO",`"skipss" received - skipping screenshot...`)
            if (!sanconfig.get().store.steamss) return log.write("INFO",`"steamss" not active`)

            try {
                const VDF = await import("simple-vdf")
                const localconfig = fs.readFileSync(path.join(sanhelper.steampath,"userdata",`${steam3id}`,"config","localconfig.vdf")).toString()
                const { InGameOverlayScreenshotHotKey } = VDF.parse(localconfig).UserLocalConfigStore.system || "KEY_F12"
                
                const { steamkeycodes } = await import("./keycodes")
                const hotkey = steamkeycodes.get(InGameOverlayScreenshotHotKey)?.[0]
                if (!hotkey) return log.write("WARN",`"${InGameOverlayScreenshotHotKey}" not found in "steamkeycodes" Map`)

                sanhelper.triggerkeypress([hotkey])
            } catch (err) {
                log.write("ERROR",`Error triggering Steam screenshot: ${err}`)
            }
        })

        const listenersvars = {
            get appid(): number { return appid },
            get win(): BrowserWindow { return win },
            get worker(): BrowserWindow | null { return worker },
            get gameartobj(): GameArtObj { return gameartobj }
        }

        for (const key of Object.keys(listenersvars) as (keyof typeof listenersvars)[]) {
            ipcMain.on(`ss_${key}`,() => {
                const value = listenersvars[key]
                const type = typeof value === "number" ? "num" : "obj"
                ipcMain.emit(`ss_${key}${type}`,null,value)
            })
        }

        ipcMain.on("buildnotify",async (event,notify: Notify) => ipcMain.emit("buildnotifyobj",null,await buildnotify(notify)))
        ipcMain.on("setnotifybounds",async (event,bounds: { width: number, height: number, x: number, y: number }) => ipcMain.emit("setnotifyboundsobj",null,setnotifybounds(bounds,null)))

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

        ipcMain.on("storekey",async (event,key: string) => {
            const { safeStorage } = await import("electron")
    
            // safeStorage encryption is not available on Steam Deck
            const encrypted = key.length ? (safeStorage.isEncryptionAvailable() ? safeStorage.encryptString(key).toString("base64") : key) : ""
    
            const config = sanconfig.get()
            config.set("rakey",encrypted)
            log.write("INFO",`"rakey"${safeStorage.isEncryptionAvailable() ? " securely" : ""} stored in config successfully`)

            event.reply("keystored",encrypted)
        })

        const decryptrakey = async (key: string): Promise<string | Error> => {
            try {
                const { safeStorage } = await import("electron")
                return safeStorage.isEncryptionAvailable() ? safeStorage.decryptString(Buffer.from(key,"base64")) : sanconfig.get().store.rakey                
            } catch (err) {
                return err as Error
            }
        }

        ipcMain.on("decryptrakey",async (event,key: string) => {
            const decrypted = await decryptrakey(key)
            event.reply("decryptrakey",decrypted)
        })

        ipcMain.on("ragame",async (event,status: RAStatus,ragame?: RAGame) => {
            gameid = ragame?.gameid || 0
            win.webContents.send("ragame",status,ragame)
        })
        
        ipcMain.on("emu",(event,_emu: string | null) => emu = _emu) // Updates global `emu` variable with name of current emulator (or `null` if nothing is running)
        ipcMain.on("getemu",event => ipcMain.emit("sendemu",null,emu)) // Sends emulator name to `screenshot.ts` if `notify.ra` is true

        ipcMain.on("betaunsupported",() => {
            if (!sanhelper.beta) return
            const config = sanconfig.get()

            setTimeout(() => {
                worker && worker.destroy()
                worker = null
            },(config.get("initdelay") * 1000) + 1000)

            updatetray(tray,undefined,undefined,true)
        })

        ipcMain.on("addtosteam",(event,imgpath: string,width: number,height: number) => {
            if (!fs.existsSync(imgpath)) return log.write("WARN",`Unable to add media to Steam: "${imgpath}" does not exist`)
            worker && worker.webContents.send("addtosteam",imgpath,width,height)
        })

        ipcMain.on("gametimerwin",(event,value: boolean) => {
            if (value && gametimerwin) return log.write("WARN",`${defaultextwins.gametimer.wintitle} window already active`)
            const config = sanconfig.get()
            
            // If `reopenonlaunch` is true when the app closes, the window reopens next time the app is launched (as it writes bool value to config)
            let reopenonlaunch = true

            gametimerwin = createextwin(config,"gametimer",value)
            if (!gametimerwin) return

            ipcMain.once("gametimerwinready",() => {
                const value = config.get("gametimerwinaot")
                value && gametimerwin!.webContents.send("gametimerwinaot",value)

                if (worker) {
                    worker.webContents.send("gametimer")
                    worker.webContents.send("gametimer","ra")
                }
            })

            gametimerwin.on("moved",() => setwinbounds(config,"gametimer",gametimerwin!))
            gametimerwin.on("resized",() => setwinbounds(config,"gametimer",gametimerwin!))

            gametimerwin.once("close",() => {
                setwinbounds(config,"gametimer",gametimerwin!)
                reopenonlaunch = false
            })

            gametimerwin.once("closed",() => {
                setwinclosevalue(config,"gametimer",reopenonlaunch)
                gametimerwin = null
            })
        })

        const runninggametimer: { steam: RunningGameTimer, ra: RunningGameTimer } = { steam: { appid: 0, started: 0 }, ra: { appid: 0, started: 0 } }

        ipcMain.on("gametimer",(event,workerinfo: WorkerInfo) => {
            const { appid, ra } = workerinfo
            const active = ra ? "ra" : "steam"
            const inactive = ra ? "steam" : "ra"

            if (runninggametimer[inactive].appid !== 0) return log.write("WARN",`${defaultextwins.gametimer.wintitle} already active for ${inactive === "ra" ? "RA Game" : "App"}ID ${runninggametimer[inactive].appid}`)
            
            if (appid) {
                runninggametimer[active].appid = appid
                if (runninggametimer[active].started === 0) runninggametimer[active].started = Date.now()
            } else {
                // Fixes issue where Game Timer will continue to count up after game has exited if Game Timer option is not enabled
                !gametimerwin && runninggametimer[active].appid && ipcMain.emit("stopgametimer",null,runninggametimer[active].appid,active,true)
            }

            // Fixes issue where Game Timer entry for the active game will not be written to localStorage if the Game Timer option is not enabled at game launch, which then causes an error when `gametimer.stop()` is called after closing the game
            if (!gametimerwin) return appid && win.webContents.send("creategametimerentry",appid)
            gametimerwin.webContents.send("gametimer",workerinfo,runninggametimer[active])
        })

        ipcMain.on("stopgametimer",(event,appid: number,active: "steam" | "ra",nowindow?: boolean) => {
            if (nowindow) {
                log.write("WARN",`Game Timer window inactive - stopping Game Timer for AppID ${appid}...`)

                const { started } = runninggametimer[active]
                win.webContents.send("stopgametimer",appid,active,started)
                return
            }

            runninggametimer[active] = {
                appid: 0,
                started: 0
            }

            log.write("INFO",`Game Timer for AppID ${appid} cleared`)
        })

        ipcMain.on("resetgametimer",(event,appid: number) => {
            try {
                if (!gametimerwin) throw new Error("Game Timer window inactive")

                const activetimers = Object.entries(runninggametimer).filter(([_,timer]) => timer.appid !== 0 && timer.started !== 0)
                if (!activetimers.length) throw new Error(`No active Game Timer found for AppID ${appid}`)
                if (activetimers.length > 1) throw new Error("Multiple active Game Timers found")
                
                const [active] = activetimers[0] as ["steam" | "ra",RunningGameTimer]
                runninggametimer[active].started = Date.now()
    
                gametimerwin.webContents.send("resetgametimer",runninggametimer[active])
            } catch (err) {
                ipcMain.emit("resetgametimerstatus",null,undefined,err as Error)
            }
        })

        ipcMain.on("resetgametimerstatus",(event,appid?: number,err?: Error) => win.webContents.send("resetgametimerstatus",appid,err))

        ipcMain.on("gametimerappid",async event => {
            const appid = await new Promise<number | null>(resolve => {
                if (!gametimerwin) return resolve(null)
                
                ipcMain.once("gametimerwinappid",(event,appid: number) => resolve(appid))
                gametimerwin.webContents.send("gametimerwinappid")
            })

            event.reply("gametimerappid",appid)
        })

        ipcMain.on("gametimerwinaot",(event,value: boolean) => {
            if (!gametimerwin) return

            gametimerwin.setAlwaysOnTop(value)
            gametimerwin.setIgnoreMouseEvents(value)

            gametimerwin.webContents.send("gametimerwinaot",value)
        })

        return
    }
}