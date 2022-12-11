const startapp = () => {
    const { app, BrowserWindow, Menu, Tray, nativeImage, nativeTheme, ipcMain, dialog, desktopCapturer, powerSaveBlocker, powerMonitor, globalShortcut } = require('electron')
    const path = require('path')
    const fs = require('fs')
    const shell = require('electron').shell
    const { spawn } = require('child_process')
    const appversion = "V1.84"
    const appdir = "V1.8"

    app.commandLine.appendSwitch("disable-background-timer-throttling")

    var localappdata
    var appicon = path.join(__dirname,"img","sanlogo.ico")

    if (process.platform == "win32") {
        localappdata = path.join(process.env.LOCALAPPDATA)
    } else if (process.platform == "linux") {
        localappdata = path.join(process.env.HOME,".local","share")
        appicon = path.join(__dirname,"img","sanlogo-675x675.png")
    } else if (process.platform == "darwin") {
        localappdata = path.join(process.env.HOME,"Library","Application Support")
    } else {
        console.log(`Unsupported platform (${process.platform}) detected - awaiting exit signal...`)
    }

    // app.disableHardwareAcceleration() massively reduces memory usage on integrated graphics
    // Allows manual garbage collection via "gc()"
    if (fs.existsSync(localappdata,`Steam Achievement Notifier (${appdir})`,"store","hwa.txt")) {
        console.log("No HWA")

        app.disableHardwareAcceleration()
        app.commandLine.appendSwitch('js-flags', '--expose_gc --max-old-space-size=128')
        require("v8").setFlagsFromString('--expose_gc')
        global.gc = require("vm").runInNewContext('gc')
            
        // Garbage collected every minute
        setInterval(() => {
            gc()
        }, 60000)
    }

    function RunApp() {
        const sanlocalappdata = path.join(localappdata,`Steam Achievement Notifier (${appdir})`)

        function CheckConfig() {
            if (!fs.existsSync(path.join(sanlocalappdata,"store"))) {
                fs.mkdirSync(path.join(sanlocalappdata,"store"))
                console.log("\"store\" dir created in %LOCALAPPDATA%\\Steam Achievement Notifier (V1.8)")
                fs.copyFileSync(path.join(__dirname,"store","config.json"), path.join(sanlocalappdata,"store","config.json"))
                CheckGameStats()
            } else if (!fs.existsSync(path.join(sanlocalappdata,"store","config.json"))) {
                fs.copyFileSync(path.join(__dirname,"store","config.json"), path.join(sanlocalappdata,"store","config.json"))
                CheckGameStats()
            } else {
                console.log("config.json exists")
                CheckGameStats()
            }
        }

        function CheckImg() {
            if (!fs.existsSync(path.join(sanlocalappdata,"img"))) {
                fs.mkdirSync(path.join(sanlocalappdata,"img"))
                console.log("\"img\" dir created in %LOCALAPPDATA%\\Steam Achievement Notifier (V1.8)")
                fs.copyFileSync(path.join(__dirname,"img","sanlogo.ico"), path.join(sanlocalappdata,"img","sanlogo.ico"))
            } else if (!fs.existsSync(path.join(sanlocalappdata,"img","sanlogo.ico"))) {
                fs.copyFileSync(path.join(__dirname,"img","sanlogo.ico"), path.join(sanlocalappdata,"img","sanlogo.ico"))
            } else {
                console.log("sanlogo.ico exists")
            }
        }

        function CheckGameStats() {
            if (!fs.existsSync(path.join(sanlocalappdata,"store","gamestats.json"))) {
                fs.copyFileSync(path.join(__dirname,"store","gamestats.json"), path.join(sanlocalappdata,"store","gamestats.json"))
            } else {
                console.log("gamestats.json exists")
            }
        }

        // FULLSCREEN - Check whether "fullscreen.json" exists and copy over from __dirname "store" folder if not
        function CheckFullscreen() {
            if (!fs.existsSync(path.join(sanlocalappdata,"store","fullscreen.json"))) {
                fs.copyFileSync(path.join(__dirname,"store","fullscreen.json"), path.join(sanlocalappdata,"store","fullscreen.json"))
            } else {
                console.log("fullscreen.json exists")
            }
        }

        if (!fs.existsSync(sanlocalappdata)) {
            console.log("\"Steam Achievement Notifier (V1.8)\" directory does not exist in " + localappdata + ". Creating...")

            fs.mkdirSync(sanlocalappdata)

            CheckConfig()
            CheckImg()
            CheckFullscreen()
            
            console.log("\"Steam Achievement Notifier (V1.8)\" directory created in " + localappdata + ".")
        } else {
            CheckConfig()
            CheckImg()
            CheckFullscreen()
            
            console.log("\"Steam Achievement Notifier (V1.8)\" directory already exists in " + localappdata)
        }

        try {
            JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))
        } catch (err) {
            throw new Error(`"config.json" caused an error on load: "${err}"`)
        }

        const config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

        try {
            JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","fullscreen.json")))
        } catch (err) {
            throw new Error(`"fullscreen.json" caused an error on load: "${err}"`)
        }
        
        const fullscreen = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","fullscreen.json")))

        let win
        let tray = null

        function createWindow() {
            win = new BrowserWindow({
                width: 700,
                height: 500,
                transparent: true,
                autoHideMenuBar: true,
                frame: false,
                center: true,
                title: `Steam Achievement Notifier (${appversion})`,
                icon: appicon,
                resizable: false,
                maximizable: false,
                fullscreenable: false,
                show: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    enableRemoteModule: true,
                    backgroundThrottling: false,
                    webviewTag: true
                }
            })

            win.loadFile(path.join(__dirname, "index.html"))

            win.webContents.setBackgroundThrottling(false)

            win.on('close', (event) => {
                event.preventDefault()
                win.hide()
            })

            win.once('ready-to-show', () => {
                try {
                    if (config.startmin == "true") {
                        win.hide()
                    } else {
                        win.show()
                    }
                } catch {
                    win.show()
                }
            })
        }

        var display
        var screenobj

        app.whenReady().then(() =>{
            const { screen } = require('electron')
            display = screen.getPrimaryDisplay().bounds
            screenobj = screen

            function SetWindowSize() {
                win.setMinimumSize(700,500)
                win.setSize(700,500)
                win.center()
            }

            // Linux Window Manager fix (Beta Revision 0.6)
            if (process.platform == "linux") {
                display.width += display.x
                display.height += display.y
            }

            screen.on('display-metrics-changed', (event, disp) => {
                if (disp.id == screen.getPrimaryDisplay().id) {
                    win.webContents.send('displayupdated', disp.bounds.width, disp.bounds.height, disp.scaleFactor)
                    display = screen.getPrimaryDisplay().bounds
                    screenobj = screen

                    // Linux Window Manager fix (Beta Revision 0.6)
                    if (process.platform == "linux") {
                        display.width += display.x
                        display.height += + display.y
                    }

                    SetWindowSize()
                }
            })

            // Reset window size on 'display-added'/'display-removed' events (Beta Revision 0.6)
            screen.on('display-added', SetWindowSize)
            screen.on('display-removed', SetWindowSize)
        })

        ipcMain.on('trackwin', (event, gamename, appid) => {
            var trackx = display.width - 185
            var tracky = display.height - 85

            const trackwin = new BrowserWindow({
                width: 165,
                height: 65,
                title: 'trackwin',
                center: true,
                show: true,
                frame: false,
                resizable: false,
                maximizable: false,
                minimizable: false,
                movable: false,
                fullscreenable: false,
                focusable: false,
                skipTaskbar: true,
                transparent: true,
                x: trackx,
                y: tracky,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    enableRemoteModule: true,
                    backgroundThrottling: false
                }
            })
            trackwin.setIgnoreMouseEvents(true)
            trackwin.setAlwaysOnTop(true, 'screen-saver')

            trackwin.loadFile(path.join(__dirname,"notify","track","track.html"))

            trackwin.once('ready-to-show', () => {
                try {
                    if (config.tracking == "true") {
                        trackwin.show()
                    } else {
                        trackwin.hide()
                    }
                } catch {
                    trackwin.show()
                }

                trackwin.webContents.send('track', gamename, appid)
            })

            ipcMain.on('trackstop', () => {
                trackwin.destroy()
            })
        })

        var gameicon
        var gameartimg

        // FULLSCREEN - Receive "gamename" back from "trackwin" and write to "fullscreen.json" (otherwise, "gamename" gets overwritten to nothing for some reason)
        ipcMain.on('gameicon', (event, gameiconsrc, gameartimgsrc, gamename) => {
            // Reset icon/art to null to prevent previous game values being stored
            gameicon = null
            gameartimg = null
            gameicon = gameiconsrc
            gameartimg = gameartimgsrc

            if (config.fullscreen == true) {
                fullscreen["gamename"] = gamename
                fullscreen["gameicon"] = gameiconsrc
                fullscreen["gameart"] = gameartimgsrc
                fs.writeFileSync(path.join(sanlocalappdata,"store","fullscreen.json"), JSON.stringify(fullscreen, null, 2))

                win.webContents.send('gametrackdetails', gamename, gameicon, gameartimg)
            }
        })

        var offset = {}

        let notifywin

        ipcMain.on('notifywin', (event, queueobj) => {
            const config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            var width = Math.round(queueobj.width * queueobj.scale * 0.01)
            var height = Math.round(queueobj.height * queueobj.scale * 0.01)

            function GetOffset(wh, dispfactor, notify, factor, add) {
                return Math.round(wh * dispfactor - (((notify * factor) * queueobj.scale * 0.01) + add))
            }

            function SetNotifyPos(bc, tc, tl, tr, bl, br) {
                function GetNotifySize(p1, p2) {
                    return {
                        x: p1,
                        y: p2
                    }
                }

                function SetNotifySize(bc = { x, y }, tc = { x, y }, tl = { x, y }, tr = { x, y }, bl = { x, y }, br = { x, y }) {
                    switch (queueobj.pos) {
                        case "bottomcenter":
                            offset = GetNotifySize(bc.x, bc.y)
                            break
                        case "topcenter":
                            offset = GetNotifySize(tc.x, tc.y)
                            break
                        case "topleft":
                            offset = GetNotifySize(tl.x, tl.y)
                            break
                        case "topright":
                            offset = GetNotifySize(tr.x, tr.y)
                            break
                        case "bottomleft":
                            offset = GetNotifySize(bl.x, bl.y)
                            break
                        case "bottomright":
                            offset = GetNotifySize(br.x, br.y)
                            break
                    }
                }

                SetNotifySize(bc, tc, tl, tr, bl, br)
            }

            if (queueobj.type == "main" && config.custompos == "true") {
                offset.x = config.x
                offset.y = config.y
            } else if (queueobj.type == "rare" && config.rarecustompos == "true") {
                offset.x = config.rarex
                offset.y = config.rarey
            } else {
                switch (queueobj.style) {
                    case "default":
                    case "xbox360":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 20 },
                            { x: 20, y: 20 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: 20 },
                            { x: 20, y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: GetOffset(display.height, 1, queueobj.height, 1, 20) }
                        )
                        break
                    case "playstation":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 0) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 0 },
                            { x: 0, y: 100 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 0), y: 100 },
                            { x: 0, y: GetOffset(display.height, 1, queueobj.height, 1, 100) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 100) },
                        )
                        break
                    case "ps5":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 20 },
                            { x: 20, y: 20 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 0), y: 20 },
                            { x: 20, y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                        )
                        break
                    case "windows":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 20 },
                            { x: 20, y: 20 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: 20 },
                            { x: 20, y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                        )
                        break
                    case "xbox":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 20 },
                            { x: 20, y: 20 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: 20 },
                            { x: 20, y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                        )
                        break
                    case "xqjan":
                        SetNotifyPos(
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 0.5, queueobj.width, 0.5, 0), y: 20 },
                            { x: 20, y: 20 },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: 20 },
                            { x: 20, y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                            { x: GetOffset(display.width, 1, queueobj.width, 1, 20), y: GetOffset(display.height, 1, queueobj.height, 1, 20) },
                        )
                        break
                }
            }

            notifywin = new BrowserWindow({
                width: width,
                height: height,
                title: 'notifywin',
                center: true,
                show: true,
                frame: false,
                resizable: false,
                maximizable: false,
                minimizable: false,
                movable: false,
                fullscreenable: false,
                focusable: false,
                skipTaskbar: true,
                transparent: true,
                x: offset.x,
                y: offset.y,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            notifywin.setIgnoreMouseEvents(true)
            notifywin.setAlwaysOnTop(true, 'screen-saver')

            function SetNotifySrc(style) {
                switch (queueobj.type) {
                    case "main":
                        return path.join(__dirname, "notify", style, "main", `${style}.html`)
                    case "rare":
                        return path.join(__dirname, "notify", style, "rare", `${style}rare.html`)
                }
            }

            notifywin.loadFile(SetNotifySrc(queueobj.style))

            function TakeNotifyScreenshot() {
                return new Promise((resolve, reject) => {
                    if (queueobj.type == "main" && config.screenshot == "true" && config.ssprev == "true" || queueobj.type == "rare" && config.rarescreenshot == "true" && config.raressprev == "true") {
                        desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 852, height: 480 }}).then(sources => {
                            try {
                                fs.writeFileSync(path.join(sanlocalappdata,"img","ss.png"), sources[0].thumbnail.toPNG())
                                resolve()
                            } catch (err) {
                                reject(err)
                            }
                        })
                    }
                })
            }
        
            notifywin.once('ready-to-show', () => {
                function SendNotify() {
                    notifywin.setMinimumSize(width, height)
                    notifywin.setSize(width, height)
            
                    notifywin.show()
                    notifywin.webContents.send('notifymain', queueobj.achievement, queueobj.title, queueobj.desc, queueobj.icon, queueobj.screenshot, queueobj.percent, queueobj.audio, gameicon, gameartimg)

                    win.webContents.send('startcircle')
                }

                if (queueobj.type == "main" && config.screenshot == "true" && config.ssprev == "true" || queueobj.type == "rare" && config.rarescreenshot == "true" && config.raressprev == "true") {
                    TakeNotifyScreenshot().then(() => {
                        try {
                            SendNotify()
                        } catch (err) {
                            dialog.showErrorBox("SendNotify() Error: ", err)
                        }
                    }).catch(err => {
                        var m = `TakeNotifyScreenshot() Error: ${err}`
                        win.webContents.send('errormsg', m)
                    })
                } else {
                    try {
                        SendNotify()
                    } catch (err) {
                        dialog.showErrorBox("SendNotify() Error: ", err)
                    }
                }
            })
        
            ipcMain.once('notifywinstop', () => {
                notifywin.destroy()
                win.webContents.send('notrunning')
            })
        })

        ipcMain.on('extwin', (event, queueobj) => {
            var width = Math.round(queueobj.width * queueobj.scale * 0.01) + 20
            var height = Math.round(queueobj.height * queueobj.scale * 0.01) + 20

            extwin.setContentSize(width, height)

            var extnotifysrc

            function GetNotifySrc() {
                return new Promise(resolve => {
                    if (queueobj.type == "main") {
                        extnotifysrc = path.join(localappdata,`Steam Achievement Notifier (${appdir})`,"store","app","notify",queueobj.style,"fullscreen",`${queueobj.style}_fs.html`)
                    } else {
                        extnotifysrc = path.join(localappdata,`Steam Achievement Notifier (${appdir})`,"store","app","notify",queueobj.style,"fullscreen",`${queueobj.style}rare_fs.html`)
                    }
                    resolve()
                })
            }

            GetNotifySrc().then(() => {
                extwin.webContents.send('notifyext', extnotifysrc, queueobj.achievement, queueobj.title, queueobj.desc, queueobj.icon, queueobj.screenshot, queueobj.percent, queueobj.audio, gameicon, gameartimg)
            })
        })

        var traylabel
        var trayshow
        var trayexit

        app.whenReady().then(() => {
            tray = new Tray(appicon)

            const menuTemplate = [
                {
                    label: traylabel,
                    icon: nativeImage.createFromPath(path.join(__dirname,"icon","dot_red.png")).resize({ width:16 }),
                    enabled: false
                },
                {
                    label: "",
                    type: "separator"
                },
                {
                    label: trayshow,
                    icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
                    click: () => {
                        win.show()
                    }
                },
                {
                    label: trayexit,
                    icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
                    click: () => {
                        if (config.fullscreen == true) {
                            spawn("powershell.exe", ["-Command","taskkill /f /im goverlay.exe"])
                            .on('exit', () => {
                                app.exit()
                            })
                        } else {
                            app.exit()
                        }
                    }
                }
            ]
            
            const contextMenu = Menu.buildFromTemplate(menuTemplate)
            tray.setToolTip(`Steam Achievement Notifier (${appversion})`)
            tray.setContextMenu(contextMenu)
            tray.on('double-click', () => {
                win.show()
            })
            ipcMain.on('changelang', (event, traylabel, trayshow, trayexit) => {
                const menuTemplate = [
                    {
                        label: traylabel,
                        icon: nativeImage.createFromPath(path.join(__dirname,"icon","dot_red.png")).resize({ width:16 }),
                        enabled: false
                    },
                    {
                        label: "",
                        type: "separator"
                    },
                    {
                        label: trayshow,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
                        click: () => {
                            win.show()
                        }
                    },
                    {
                        label: trayexit,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
                        click: () => {
                            if (config.fullscreen == true) {
                                spawn("powershell.exe", ["-Command","taskkill /f /im goverlay.exe"])
                                .on('exit', () => {
                                    app.exit()
                                })
                            } else {
                                app.exit()
                            }
                        }
                    }
                ]
                const contextMenu = Menu.buildFromTemplate(menuTemplate)
                tray.setToolTip(`Steam Achievement Notifier (${appversion})`)
                tray.setContextMenu(contextMenu)
                tray.on('double-click', () => {
                    win.show()
                })
            })
            
            ipcMain.on('track', (event, gamename, trayshow, trayexit) => {
                var gamenamelbl = gamename
                if (gamenamelbl.length > 25) {
                    gamenamelbl = gamenamelbl.substring(0, 25) + "..."
                }
                const menuTemplate = [
                    {
                        label: `${gamenamelbl}`,
                        icon: nativeImage.createFromPath(path.join(__dirname,"icon","dot_green.png")).resize({ width:16 }),
                        enabled: false
                    },
                    {
                        label: "",
                        type: "separator"
                    },
                    {
                        label: trayshow,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
                        click: () => {
                            win.show()
                        }
                    },
                    {
                        label: trayexit,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
                        click: () => {
                            if (config.fullscreen == true) {
                                spawn("powershell.exe", ["-Command","taskkill /f /im goverlay.exe"])
                                .on('exit', () => {
                                    app.exit()
                                })
                            } else {
                                app.exit()
                            }
                        }
                    }
                ]
                const contextMenu = Menu.buildFromTemplate(menuTemplate)
                tray.setToolTip(`Steam Achievement Notifier (${appversion})`)
                tray.setContextMenu(contextMenu)
            })

            ipcMain.on('idle', (event, traylabel, trayshow, trayexit) => {
                const menuTemplate = [
                    {
                        label: traylabel,
                        icon: nativeImage.createFromPath(path.join(__dirname,"icon","dot_red.png")).resize({ width:16 }),
                        enabled: false,
                    },
                    {
                        label: "",
                        type: "separator"
                    },
                    {
                        label: trayshow,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
                        click: () => {
                            win.show()
                        }
                    },
                    {
                        label: trayexit,
                        icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
                        click: () => {
                            if (config.fullscreen == true) {
                                spawn("powershell.exe", ["-Command","taskkill /f /im goverlay.exe"])
                                .on('exit', () => {
                                    app.exit()
                                })
                            } else {
                                app.exit()
                            }
                        }
                    }
                ]
                const contextMenu = Menu.buildFromTemplate(menuTemplate)
                tray.setToolTip(`Steam Achievement Notifier (${appversion})`)
                tray.setContextMenu(contextMenu)
            })
        })

        ipcMain.on('reset', (event, options) => {
            var resetoptions = options

            var msg = dialog.showMessageBoxSync(win, resetoptions)
            if (msg == 0) {
                win.webContents.send('resetapp')
            } else if (msg == 1) {
                win.webContents.send('uninstallapp')
            }
        })

        ipcMain.on('resetcomplete', () => {
            var launcher = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","launcher.json")))

            app.relaunch({ execPath: launcher.path })
            app.exit()
        })

        ipcMain.on('uninstallcomplete', () => {
            app.exit()
        })

        ipcMain.on('openapilink', () => {
            shell.openExternal("https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey")
        })

        ipcMain.on('opensteam64link', () => {
            shell.openExternal("https://steamid.io/lookup")
        })

        ipcMain.on('link', (event, link) => {
            shell.openExternal(link)
        })

        ipcMain.on('kofi', () => {
            shell.openExternal("https://ko-fi.com/steamachievementnotifier")
        })

        ipcMain.on('discord', () => {
            shell.openExternal("https://discord.gg/FxCFtpd3eu")
        })

        ipcMain.on('report', () => {
            shell.openExternal("https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues")
        })

        ipcMain.on('update', (event, tag) => {
            shell.openExternal(`https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/${tag}`)
        })

        // TO DO: Test whether "execPath" actually starts the new EXE
        // ipcMain.on('updatecomplete', (event, newtag) => {
        //     app.relaunch({ execPath: path.join(os.homedir(),"Downloads",`SANLauncher(V${newtag}).exe`) })
        //     app.exit()
        // })

        ipcMain.on('reloadapp', () => {
            win.webContents.reloadIgnoringCache()
        })

        ipcMain.on('relaunchapp', () => {
            app.relaunch({ execPath: path.join(localappdata,`Steam Achievement Notifier (${appdir})`,`SteamAchievementNotifier${appversion}.exe`) })
            app.exit()
        })

        ipcMain.on('steamnotrunning', () => {
            dialog.showErrorBox("Steam is not running!", "Please ensure Steam is running to enable this option.")
        })

        var defaultPath

        if (process.platform == "win32") {
            defaultPath = path.join(process.env.USERPROFILE,"Pictures")
        } else if (process.platform == "linux" || process.platform == "darwin") {
            defaultPath = path.join(process.env.HOME,"Pictures")
        }

        ipcMain.on('ovpath', () => {
            var config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            win.webContents.send('lockpath')

            dialog.showOpenDialog({
                title: "Select Achievement Screenshots Folder",
                defaultPath: defaultPath,
                buttonLabel: "Select Folder",
                properties: ["openDirectory","dontAddToRecent"]
            }).then(selection => {
                var folder

                if (selection.canceled == true) {
                    if (config.ovpath !== "") {
                        folder = config.ovpath
                        var m = "Cancelled! Dir set to " + config.ovpath
                        console.log(m)
                        win.webContents.send('warnmsg', m)
                    } else {
                        folder = ""
                        var m = "Cancelled! No dir selected - Dir set to " + defaultPath
                        console.log(m)
                        win.webContents.send('warnmsg', m)
                    }
                } else {
                    folder = selection.filePaths[0]
                    var m = "Selected dir: " + folder
                    console.log(m)
                    win.webContents.send('warnmsg', m)
                }
                
                win.webContents.send('unlockpath', folder)
            }).catch(err => {
                var m = "PATH SELECT ERROR: " + err
                console.log(m)
                win.webContents.send('errormsg', m)
            })
        })

        ipcMain.on('overlaytest', (event, type) => {
            var screenwidth = display.width * screenobj.getPrimaryDisplay().scaleFactor
            var screenheight = display.height * screenobj.getPrimaryDisplay().scaleFactor

            const imgtestwin = new BrowserWindow({
                width: screenwidth,
                height: screenheight,
                center: true,
                frame: false,
                transparent: true,
                resizable: false,
                show: true,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            })

            imgtestwin.loadFile(path.join(__dirname,"notify","imgwin","imgwin.html"))
            imgtestwin.webContents.send('test', type)
        })

        ipcMain.on('img', (event, title, desc, icon, game, type, percent) => {
            var config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            var screenwidth = display.width * screenobj.getPrimaryDisplay().scaleFactor
            var screenheight = display.height * screenobj.getPrimaryDisplay().scaleFactor

            function TakeScreenshot() {
                return new Promise((resolve, reject) => {
                    desktopCapturer.getSources({ types: ['screen'], thumbnailSize: {
                        width: screenwidth,
                        height: screenheight
                    }}).then((sources) => {
                        fs.writeFileSync(path.join(sanlocalappdata,"img","ss1080p.png"), sources[0].thumbnail.toPNG())
                        resolve(`"ss1080p.png" updated. Applying overlay...`)
                    }).catch(err => {
                        reject(err)
                    })
                })
            }

            TakeScreenshot().then(data => {
                win.webContents.send("warnmsg", data)

                const imgwin = new BrowserWindow({
                    width: screenwidth,
                    height: screenheight,
                    center: true,
                    frame: false,
                    fullscreen: true,
                    resizable: false,
                    show: false,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false,
                        backgroundThrottling: false,
                        offscreen: true
                    }
                })

                imgwin.loadFile(path.join(__dirname,"notify","imgwin","imgwin.html"))
                imgwin.setIgnoreMouseEvents(true)
                imgwin.webContents.send('details', title, desc, icon, type, percent, gameartimg)

                var ovpath
                
                if (config.ovpath == "") {
                    ovpath = defaultPath
                    var m = `Screenshot Path not set - writing to ${ovpath}`
                    console.log(m)
                    win.webContents.send('warnmsg', m)
                } else {
                    try {
                        ovpath = config.ovpath
                        var m = `Screenshot Path set to ${ovpath}`
                        console.log(m)
                        win.webContents.send('warnmsg', m)
                    } catch (err) {
                        ovpath = defaultPath
                        var m = `SCREENSHOT ERROR: ${err}`
                        var m1 = `Unable to save to Screenshot Path - writing to ${ovpath}`
                        console.log(m)
                        console.log(m1)
                        win.webContents.send('errormsg', m)
                        win.webContents.send('warnmsg', m1)
                    }
                }
                
                var sandir = "SteamAchievementNotifier"
                var gamedir = game.replace(/[*<>:/\\|?]/g,"_")
                var filename = title.replace(/[*<>:/\\|?]/g,"_")
                var counter = 0

                function CreateSANDir() {
                    if (!fs.existsSync(path.join(ovpath,sandir))) {
                        fs.mkdir(path.join(ovpath,sandir), (err) => {
                            if (err) {
                                var m = `SAN FOLDER CREATION ERROR: ${err}`
                                console.log(m)
                                win.webContents.send('errormsg', m)
                            } else {
                                var m = `Directory for "${sandir}" created in ${ovpath}`
                                console.log(m)
                                win.webContents.send('warnmsg', m)
                                CreateGameDir()
                            }
                        })
                    } else {
                        CreateGameDir()
                    }
                }

                function CreateGameDir() {
                    if (!fs.existsSync(path.join(ovpath,sandir,gamedir))) {
                        fs.mkdir(path.join(ovpath,sandir,gamedir), (err) => {
                            if (err) {
                                var m = "DIR CREATION ERROR: " + err
                                console.log(m)
                                win.webContents.send('errormsg', m)
                            } else {
                                var m = `Directory for "${game}" created in ${path.join(ovpath,sandir)}`
                                console.log(m)
                                win.webContents.send('warnmsg', m)
                                CheckFilePath()
                            }
                        })
                    } else {
                        CheckFilePath()
                    }
                }
                
                function CheckFilePath() {
                    if (fs.existsSync(path.join(ovpath,sandir,gamedir,filename) + ".png")) {
                        var m = `File "${filename}.png" already exists! Renaming...`
                        console.log(m)
                        win.webContents.send('errormsg', m)
                        counter += 1
                        filename = filename.replace(/[0-9]/g,"") + counter
                        
                        CheckFilePath()
                    } else {
                        ipcMain.once('imgready', () => {
                            setTimeout(() => {
                                imgwin.webContents.capturePage().then(image => {
                                        fs.writeFileSync(`${path.join(ovpath,sandir,gamedir,filename)}.png`, image.toPNG())
                                        imgwin.destroy()
                                }).catch(err => {
                                    var m = `Error writing screenshot: ${err}`
                                    console.log(m)
                                    win.webContents.send('errormsg', m)
                                })
                            }, 5000)
                        })
                    }
                }

                if (!fs.existsSync(path.join(ovpath))) {
                    ovpath = defaultPath
                    var m = `${config.ovpath} does not exist! Writing to ${ovpath}`
                    console.log(m)
                    win.webContents.send('errormsg', m)
                    CreateSANDir()
                } else {
                    CreateSANDir()
                }
            }).catch(err => {
                var m = `SCREENSHOT CREATION ERROR: ${err}`
                console.log(m)
                win.webContents.send('errormsg', m)
            })
        })

        var dragwin = null

        ipcMain.on('setcustompos', (event, postype, style) => {
            const config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            function GetNotifyStyle() {
                function GetNotifyWidth(w) {
                    return w * config.scale * 0.01
                }

                function GetNotifyHeight(ss, noss) {
                    switch (postype) {
                        case "main":
                            return config.screenshot == "true" && config.ssprev == "true" ? ss * config.scale * 0.01 : noss * config.scale * 0.01
                        case "rare":
                            return config.rarescreenshot == "true" && config.raressprev == "true" ? ss * config.scale * 0.01 : noss * config.scale * 0.01
                    }
                }

                switch (style) {
                    case "default":
                    case "xbox360":
                        return { w: GetNotifyWidth(300), h: GetNotifyHeight(219, 50) }
                    case "playstation":
                        return { w: GetNotifyWidth(310), h: GetNotifyHeight(224, 55) }
                    case "ps5":
                        return { w: GetNotifyWidth(320), h: GetNotifyHeight(239, 50) }
                    case "windows":
                        return { w: GetNotifyWidth(300), h: GetNotifyHeight(279, 110) }
                    case "xbox":
                        return { w: GetNotifyWidth(310), h: GetNotifyHeight(239, 70) }
                    case "xqjan":
                        return { w: GetNotifyWidth(300), h: GetNotifyHeight(259, 70) }
                }
            }

            var dragwidth = Math.floor(GetNotifyStyle().w)
            var dragheight = Math.floor(GetNotifyStyle().h)

            function SetDragWinPos() {
                function CalculatePos(p1, p2) {
                    return Math.floor((p1 * 0.5) - (p2 * 0.5))
                }

                switch (postype) {
                    case "main":
                        return config.x == "" && config.x != 0 || config.y == "" && config.y != 0 ? { x: CalculatePos(display.width, dragwidth), y: CalculatePos(display.height, dragheight) } : { x: config.x, y: config.y }
                    case "rare":
                        return config.rarex == "" && config.rarex != 0 || config.rarey == "" && config.y != 0 ? { x: CalculatePos(display.width, dragwidth), y: CalculatePos(display.height, dragheight) } : { x: config.rarex, y: config.rarey }
                }
            }

            var xpos = SetDragWinPos().x
            var ypos = SetDragWinPos().y
            
            dragwin = new BrowserWindow({
                width: dragwidth,
                height: dragheight,
                minWidth: dragwidth,
                minHeight: dragheight,
                resizable: false,
                maximizable: false,
                alwaysOnTop: true,
                frame: false,
                transparent: true,
                autoHideMenuBar: true,
                x: xpos,
                y: ypos,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            dragwin.loadFile(path.join(__dirname,"notify","dragwin","dragwin.html"))

            dragwin.on('ready-to-show', () => {
                dragwin.webContents.send('postype', postype, style, dragwidth, dragheight)
                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
            })

            dragwin.on('always-on-top-changed', () => {
                dragwin.setAlwaysOnTop(true, "screen-saver")
            })

            ipcMain.on('recenter', () => {
                dragwin.center()

                if (postype == "main") {
                    config["x"] = dragwin.getPosition()[0]
                    config["y"] = dragwin.getPosition()[1]
                } else {
                    config["rarex"] = dragwin.getPosition()[0]
                    config["rarey"] = dragwin.getPosition()[1]
                }
                
                fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
                xpos = SetDragWinPos().x
                ypos = SetDragWinPos().y
            })

            dragwin.on('focus', () => {
                function SetShortcut(dir, x, y) {
                    globalShortcut.register(dir, () => {
                        dragwin.setPosition(x, y)
                        dragwin.setMinimumSize(dragwidth, dragheight)
                        dragwin.setSize(dragwidth, dragheight)
                    })
                }

                SetShortcut('Up', dragwin.getPosition()[0], dragwin.getPosition()[1] - 5)
                SetShortcut('Down', dragwin.getPosition()[0], dragwin.getPosition()[1] + 5)
                SetShortcut('Left', dragwin.getPosition()[0] - 5, dragwin.getPosition()[1])
                SetShortcut('Right', dragwin.getPosition()[0] + 5, dragwin.getPosition()[1])

                SetShortcut('Shift+Up', dragwin.getPosition()[0], dragwin.getPosition()[1] - 50)
                SetShortcut('Shift+Down', dragwin.getPosition()[0], dragwin.getPosition()[1] + 50)
                SetShortcut('Shift+Left', dragwin.getPosition()[0] - 50, dragwin.getPosition()[1])
                SetShortcut('Shift+Right', dragwin.getPosition()[0] + 50, dragwin.getPosition()[1])
            })

            dragwin.on('blur', () => {
                globalShortcut.unregisterAll()
            })

            ipcMain.on('checkdragwin', () => {
                if (dragwin) {
                    win.webContents.send('dragwinclose')
                    globalShortcut.unregisterAll()
                    dragwin.close()
                }
            })

            ipcMain.on('storedragwin', () => {
                if (postype == "main") {
                    config["x"] = config.x
                    config["y"] = config.y
                } else {
                    config["rarex"] = config.rarex
                    config["rarey"] = config.rarey
                }

                fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

                if (dragwin) {
                    win.webContents.send('dragwinclose')
                    globalShortcut.unregisterAll()
                    dragwin.close()
                }
            })

            ipcMain.on('resize', () => {
                if (dragwin) {
                    win.webContents.send('dragwinclose')
                    globalShortcut.unregisterAll()
                    dragwin.close()
                }
            })

            dragwin.on('moved', () => {
                xpos = Math.floor(dragwin.getPosition()[0])
                ypos = Math.floor(dragwin.getPosition()[1])

                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
                // dragwin.setSize(dragwidth, dragheight)
            })

            ipcMain.once('savepos', () => {
                if (postype == "main") {
                    win.webContents.send('saveposmain', dragwin.getPosition()[0], dragwin.getPosition()[1])
                } else {
                    win.webContents.send('saveposrare', dragwin.getPosition()[0], dragwin.getPosition()[1])
                }

                win.webContents.send('dragwinclose')
                globalShortcut.unregisterAll()
                dragwin.close()
            })
            
            dragwin.on('closed', () => {
                win.webContents.send('dragwinclose')
                globalShortcut.unregisterAll()
                dragwin = null
            })

            ipcMain.on('lockX', () => {
                var cursorx = screenobj.getCursorScreenPoint().x
                var cursory = screenobj.getCursorScreenPoint().y
                var currscreen = screenobj.getDisplayNearestPoint({ x: cursorx, y: cursory })

                if (currscreen.bounds.width < currscreen.bounds.height) {
                    var center = Math.abs(currscreen.bounds.width) * 0.5 - dragheight * 0.5
                } else {
                    var center = Math.abs(currscreen.bounds.height) * 0.5 - dragheight * 0.5
                }

                dragwin.setPosition(cursorx, Math.floor(center))

                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
                // dragwin.setSize(dragwidth, dragheight)
            })

            ipcMain.on('lockY', () => {
                var cursorx = screenobj.getCursorScreenPoint().x
                var cursory = screenobj.getCursorScreenPoint().y
                var currscreen = screenobj.getDisplayNearestPoint({ x: cursorx, y: cursory })

                if (currscreen.bounds.width < currscreen.bounds.height) {
                    var center = Math.abs(currscreen.bounds.width) * 0.5 + dragwidth * 0.5
                } else {
                    var center = Math.abs(currscreen.bounds.height) * 0.5 + dragwidth * 0.5
                }

                dragwin.setPosition(center, cursory)

                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
                // dragwin.setSize(dragwidth, dragheight)
            })
        })

        let extwin

        ipcMain.on('spawnextwin', () => {
            extwin = new BrowserWindow({
                width: 300,
                height: 80,
                title: `Notification Window`,
                icon: appicon,
                fullscreenable: false,
                minimizable: true,
                maximizable: false,
                autoHideMenuBar: true,
                center: true,
                useContentSize: true,
                resizable: false,
                transparent: true,
                frame: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false,
                    webviewTag: true
                }
            })

            extwin.loadFile(path.join(__dirname,"extwin.html"))

            ipcMain.on('despawnextwin', () => {
                if (extwin) {
                    extwin.destroy()
                }
            })

            ipcMain.once('closeextwin', () => {
                if (extwin) {
                    extwin.destroy()
                }

                extwin = null
                win.webContents.send('extwinclosed')
            })

            extwin.on('close', () => {
                extwin.destroy()
                extwin = null
                win.webContents.send('extwinclosed')
            })
        })

        ipcMain.on("opendevtools", () => {
            win.webContents.openDevTools({ mode: "detach" })
        })

        let statwin

        ipcMain.on('spawnstatwin', (event, user, translations) => {
            statwin = new BrowserWindow({
                width: 300,
                height: 600,
                minWidth: 300,
                minHeight: 200,
                maxHeight: 600,
                autoHideMenuBar: true,
                title: `Achievement Stats (${user})`,
                center: true,
                transparent: true,
                frame: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    backgroundThrottling: false
                }
            })

            statwin.loadFile(path.join(__dirname,"statwin.html"))

            // statwin.webContents.openDevTools({ mode: "detach" })

            statwin.on('ready-to-show', () => {
                statwin.webContents.send('user', user, translations)
            })

            ipcMain.on('despawnstatwin', () => {
                if (statwin) {
                    statwin.destroy()
                }
            })

            statwin.on('close', () => {
                statwin.destroy()
                statwin = null
                win.webContents.send('statwinclosed')
            })
        })

        ipcMain.on('statwinopen', () => {
            win.webContents.send('statwinopen')
        })

        ipcMain.on('statwingame', (event, appid) => {
            if (statwin) {
                statwin.webContents.send('statwingame', appid)
            }
        })

        ipcMain.on('updatestatwin', (event, apiname) => {
            if (statwin) {
                statwin.webContents.send('updatestatwin', apiname)
            }
        })

        ipcMain.on('statwinnogame', () => {
            if (statwin) {
                statwin.webContents.send('statwinnogame')
            }
        })

        ipcMain.on('resetstats', (event, options) => {
            var statsresult = dialog.showMessageBoxSync(win, options)
            if (statsresult == 0) {
                if (statwin) {
                    statwin.destroy()
                }

                win.webContents.send('clearlocalstorage')
            } else {
                console.log("Achievement Stats Reset cancelled")
            }
        })

        ipcMain.on('closestatwin', () => {
            statwin.destroy()
            statwin = null
            win.webContents.send('statwinclosed')
        })

        ipcMain.on('setstartwin', (event, bool, exepath) => {
            app.setLoginItemSettings({
                openAtLogin: bool,
                path: exepath
            })
        })

        ipcMain.on('notifydebug', () => {
            notifywin.webContents.openDevTools({ mode: "detach" })
        })

        nativeTheme.themeSource = "dark"

        createWindow()
    }

    app.whenReady().then(() => {
        RunApp()

        powerSaveBlocker.start('prevent-app-suspension')
        
        powerMonitor.on('resume', () => {
            app.relaunch({ execPath: path.join(localappdata,`Steam Achievement Notifier (${appdir})`,`SteamAchievementNotifier${appversion}.exe`) })
            app.exit()
        })
    }).catch(err => {
        var errwin = new BrowserWindow({
            width: 700,
            height: 500,
            resizable: false,
            autoHideMenuBar: true,
            frame: false,
            center: true,
            transparent: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })

        errwin.loadFile(path.join(__dirname,"errwin.html"))

        ipcMain.on('closeapp', () => {
            app.exit()
        })

        ipcMain.on('ghissue', () => {
            shell.openExternal(`https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues`)
        })

        ipcMain.on('discordissue', () => {
            shell.openExternal(`https://discord.gg/FxCFtpd3eu`)
        })

        errwin.on('ready-to-show', () => {
            errwin.webContents.send('err', err)
        })
    })
}

module.exports = startapp()
