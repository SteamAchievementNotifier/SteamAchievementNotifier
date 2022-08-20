const startapp = () => {
    const { app, BrowserWindow, Menu, Tray, nativeImage, nativeTheme, ipcMain, dialog, desktopCapturer, powerSaveBlocker, powerMonitor, globalShortcut } = require('electron')
    const path = require('path')
    const fs = require('fs')
    const shell = require('electron').shell
    const os = require('os')
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

        var offsetx
        var offsety

        var display
        var screenobj

        app.whenReady().then(() =>{
            const { screen } = require('electron')
            display = screen.getPrimaryDisplay().bounds
            screenobj = screen

            screen.on('display-metrics-changed', (event, disp) => {
                if (disp.id == screen.getPrimaryDisplay().id) {
                    win.webContents.send('displayupdated', disp.bounds.width, disp.bounds.height, disp.scaleFactor)
                    display = screen.getPrimaryDisplay().bounds
                    screenobj = screen
                    win.setMinimumSize(700,500)
                    win.setSize(700,500)
                    win.center()
                }
            })
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

        ipcMain.on('notifywin', (event, queueobj) => {
            var config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            var width = queueobj.width * queueobj.scale * 0.01
            var height = queueobj.height * queueobj.scale * 0.01
            width = Math.round(width)
            height = Math.round(height)

            if (queueobj.type == "main" && config.custompos == "true") {
                offsetx = config.x
                offsety = config.y
            } else if (queueobj.type == "rare" && config.rarecustompos == "true") {
                offsetx = config.rarex
                offsety = config.rarey
            } else {
                if (queueobj.pos == "bottomcenter") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((219 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((50 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "xbox") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (157 * queueobj.scale * 0.01)
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (157 * queueobj.scale * 0.01)
                            offsety = display.height - ((65 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "playstation") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (155 * queueobj.scale * 0.01)
                            offsety = display.height - (224 * queueobj.scale * 0.01)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (155 * queueobj.scale * 0.01)
                            offsety = display.height - (55 * queueobj.scale * 0.01)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "ps5") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (170 * queueobj.scale * 0.01)
                            offsety = display.height - (239 * queueobj.scale * 0.01)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (170 * queueobj.scale * 0.01)
                            offsety = display.height - (70 * queueobj.scale * 0.01)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "windows") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((279 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((110 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "xqjan") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                            offsety = display.height - ((70 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    }
                } else if (queueobj.pos == "topcenter") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "xbox") {
                        offsetx = display.width * 0.5 - (157 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "playstation") {
                        offsetx = display.width * 0.5 - (155 * queueobj.scale * 0.01)
                        offsety = 0
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "ps5") {
                        offsetx = display.width * 0.5 - (170 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "windows") {
                        offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "xqjan") {
                        offsetx = display.width * 0.5 - (150 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    }
                } else if (queueobj.pos == "topleft") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        offsetx = 20
                        offsety = 20
                    } else if (queueobj.style == "xbox") {
                        offsetx = 20
                        offsety = 20
                    } else if (queueobj.style == "playstation") {
                        offsetx = 0
                        offsety = 100
                    } else if (queueobj.style == "ps5") {
                        offsetx = 0
                        offsety = 20
                    } else if (queueobj.style == "windows") {
                        offsetx = 20
                        offsety = 20
                    } else if (queueobj.style == "xqjan") {
                        offsetx = 20
                        offsety = 20
                    }
                } else if (queueobj.pos == "topright") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "xbox") {   
                        offsetx = display.width - ((315 * queueobj.scale * 0.01) + 20)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "playstation") {
                        offsetx = display.width - (310 * queueobj.scale * 0.01)
                        offsety = 100
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "ps5") {
                        offsetx = display.width - (340 * queueobj.scale * 0.01)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "windows") {
                        offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    } else if (queueobj.style == "xqjan") {
                        offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                        offsety = 20
                        offsetx = Math.round(offsetx)
                        offsety = Math.round(offsety)
                    }
                } else if (queueobj.pos == "bottomleft") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 20
                            offsety = display.height - ((219 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 20
                            offsety = display.height - ((50 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "xbox") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 20
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 20
                            offsety = display.height - ((65 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "playstation") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 0
                            offsety = display.height - ((224 * queueobj.scale * 0.01) + 100)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 0
                            offsety = display.height - ((55 * queueobj.scale * 0.01) + 100)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "ps5") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 0
                            offsety = display.height - ((219 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 0
                            offsety = display.height - ((50 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "windows") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 20
                            offsety = display.height - ((279 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 20
                            offsety = display.height - ((110 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "xqjan") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = 20
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = 20
                            offsety = display.height - ((70 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    }
                } else if (queueobj.pos == "bottomright") {
                    if (queueobj.style == "default" || queueobj.style == "xbox360") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((219 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((50 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "xbox") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - ((315 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - ((315 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((65 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "playstation") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - (310 * queueobj.scale * 0.01)
                            offsety = display.height - ((224 * queueobj.scale * 0.01) + 100)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - (310 * queueobj.scale * 0.01)
                            offsety = display.height - ((55 * queueobj.scale * 0.01) + 100)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "ps5") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - (340 * queueobj.scale * 0.01)
                            offsety = display.height - ((219 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - (340 * queueobj.scale * 0.01)
                            offsety = display.height - ((50 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } else if (queueobj.style == "windows") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((279 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((110 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    } if (queueobj.style == "xqjan") {
                        if (queueobj.screenshot == "true" && queueobj.showss == "true") {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((239 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        } else {
                            offsetx = display.width - ((300 * queueobj.scale * 0.01) + 20)
                            offsety = display.height - ((70 * queueobj.scale * 0.01) + 20)
                            offsetx = Math.round(offsetx)
                            offsety = Math.round(offsety)
                        }
                    }
                } else {
                    console.log("Error! Could not place notification. X: 0, Y: 0")
                    offsetx = 0
                    offsety = 0
                }
            }

            const notifywin = new BrowserWindow({
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
                x: offsetx,
                y: offsety,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    enableRemoteModule: true,
                    backgroundThrottling: false
                }
            })
            notifywin.setIgnoreMouseEvents(true)
            notifywin.setAlwaysOnTop(true, 'screen-saver')
    
            var notifysrc
    
            if (queueobj.type == "main") {
                if (queueobj.style == "default") {
                    notifysrc = path.join(__dirname,"notify","default","main","default.html")
                } else if (queueobj.style == "xbox") {
                    notifysrc = path.join(__dirname,"notify","xbox","main","xbox.html")
                } else if (queueobj.style == "playstation") {
                    notifysrc = path.join(__dirname,"notify","playstation","main","playstation.html")
                } else if (queueobj.style == "ps5") {
                    notifysrc = path.join(__dirname,"notify","ps5","main","ps5.html")
                } else if (queueobj.style == "windows") {
                    notifysrc = path.join(__dirname,"notify","windows","main","windows.html")
                } else if (queueobj.style == "xbox360") {
                    notifysrc = path.join(__dirname,"notify","xbox360","main","xbox360.html")
                } else if (queueobj.style == "xqjan") {
                    notifysrc = path.join(__dirname,"notify","xqjan","main","xqjan.html")
                }
            } else {
                if (queueobj.style == "default") {
                    notifysrc = path.join(__dirname,"notify","default","rare","defaultrare.html")
                } else if (queueobj.style == "xbox") {
                    notifysrc = path.join(__dirname,"notify","xbox","rare","xboxrare.html")
                } else if (queueobj.style == "playstation") {
                    notifysrc = path.join(__dirname,"notify","playstation","rare","playstationrare.html")
                } else if (queueobj.style == "ps5") {
                    notifysrc = path.join(__dirname,"notify","ps5","rare","ps5rare.html")
                } else if (queueobj.style == "windows") {
                    notifysrc = path.join(__dirname,"notify","windows","rare","windowsrare.html")
                } else if (queueobj.style == "xbox360") {
                    notifysrc = path.join(__dirname,"notify","xbox360","rare","xbox360rare.html")
                } else if (queueobj.style == "xqjan") {
                    notifysrc = path.join(__dirname,"notify","xqjan","rare","xqjanrare.html")
                }
            }

            notifywin.loadFile(notifysrc)
            
            // OG
            // if (config.screenshot == "true" && config.ssprev == "true" || config.rarescreenshot == "true" && config.raressprev == "true") {
            //     desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 852, height: 480 }}).then(sources => {
            //         fs.writeFileSync(path.join(sanlocalappdata,"img","ss.png"), sources[0].thumbnail.toPNG())
            //     })
            // }

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
                }

                if (queueobj.type == "main" && config.screenshot == "true" && config.ssprev == "true" || queueobj.type == "rare" && config.rarescreenshot == "true" && config.raressprev == "true") {
                    TakeNotifyScreenshot().then(() => {
                        SendNotify()
                    }).catch(err => {
                        var m = `TakeNotifyScreenshot() Error: ${err}`
                        win.webContents.send('errormsg', m)
                    })
                } else {
                    SendNotify()
                }

                // OG
                // notifywin.setMinimumSize(width, height)
                // notifywin.setSize(width, height)
        
                // notifywin.show()
                // notifywin.webContents.send('notifymain', queueobj.achievement, queueobj.title, queueobj.desc, queueobj.icon, queueobj.screenshot, queueobj.percent, queueobj.audio, gameicon, gameartimg)
                // // notifywin.webContents.openDevTools({ mode: 'detach' })
            })
        
            ipcMain.once('notifywinstop', () => {
                notifywin.destroy()
                win.webContents.send('notrunning')
            })
        })

        ipcMain.on('extwin', (event, queueobj) => {
            var width = queueobj.width * queueobj.scale * 0.01
            var height = queueobj.height * queueobj.scale * 0.01
            width = Math.round(width + 20)
            height = Math.round(height + 20)

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

        ipcMain.on('reset', (e, options) => {
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
            var config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))

            var dragwidth
            var dragheight

            if (style == "default" || style == "xbox360") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 219 * config.scale * 0.01
                    } else {
                        dragheight = 50 * config.scale * 0.01
                    }
                    dragwidth = 300 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 219 * config.rarescale * 0.01
                    } else {
                        dragheight = 50 * config.rarescale * 0.01
                    }
                    dragwidth = 300 * config.rarescale * 0.01
                }
            } else if (style == "xbox") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 239 * config.scale * 0.01
                    } else {
                        dragheight = 70 * config.scale * 0.01
                    }
                    dragwidth = 310 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 239 * config.rarescale * 0.01
                    } else {
                        dragheight = 70 * config.rarescale * 0.01
                    }
                    dragwidth = 310 * config.rarescale * 0.01
                }
            } else if (style == "playstation") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 224 * config.scale * 0.01
                    } else {
                        dragheight = 55 * config.scale * 0.01
                    }
                    dragwidth = 310 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 224 * config.rarescale * 0.01
                    } else {
                        dragheight = 55 * config.rarescale * 0.01
                    }
                    dragwidth = 310 * config.rarescale * 0.01
                }
            } else if (style == "ps5") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 239 * config.scale * 0.01
                    } else {
                        dragheight = 50 * config.scale * 0.01
                    }
                    dragwidth = 320 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 239 * config.rarescale * 0.01
                    } else {
                        dragheight = 50 * config.rarescale * 0.01
                    }
                    dragwidth = 320 * config.rarescale * 0.01
                }
            } else if (style == "windows") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 279 * config.scale * 0.01
                    } else {
                        dragheight = 110 * config.scale * 0.01
                    }
                    dragwidth = 300 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 279 * config.rarescale * 0.01
                    } else {
                        dragheight = 110 * config.rarescale * 0.01
                    }
                    dragwidth = 300 * config.rarescale * 0.01
                }
            } else if (style == "xqjan") {
                if (postype == "main") {
                    if (config.screenshot == "true" && config.ssprev == "true") {
                        dragheight = 259 * config.scale * 0.01
                    } else {
                        dragheight = 70 * config.scale * 0.01
                    }
                    dragwidth = 300 * config.scale * 0.01
                } else {
                    if (config.rarescreenshot == "true" && config.raressprev == "true") {
                        dragheight = 259 * config.rarescale * 0.01
                    } else {
                        dragheight = 70 * config.rarescale * 0.01
                    }
                    dragwidth = 300 * config.rarescale * 0.01
                }
            }

            dragwidth = Math.floor(dragwidth)
            dragheight = Math.floor(dragheight)

            var xpos
            var ypos

            function SetDragWinPos() {
                if (postype == "main") {
                    if (config.x == "" && config.x != 0 || config.y == "" && config.y != 0) {
                        xpos = (display.width * 0.5) - (dragwidth * 0.5)
                        ypos = (display.height * 0.5) - (dragheight * 0.5)
            
                        xpos = Math.floor(xpos)
                        ypos = Math.floor(ypos)
                    } else {
                        xpos = config.x
                        ypos = config.y
                    }
                } else {
                    if (config.rarex == "" && config.rarex != 0 || config.rarey == "" && config.y != 0) {
                        xpos = (display.width * 0.5) - (dragwidth * 0.5)
                        ypos = (display.height * 0.5) - (dragheight * 0.5)
            
                        xpos = Math.floor(xpos)
                        ypos = Math.floor(ypos)
                    } else {
                        xpos = config.rarex
                        ypos = config.rarey
                    }
                }
            }

            SetDragWinPos()
            
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
                SetDragWinPos()
            })

            dragwin.on('focus', () => {
                globalShortcut.register('Up', () => {
                    dragwin.setPosition(dragwin.getPosition()[0], dragwin.getPosition()[1] - 5)
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Down', () => {
                    dragwin.setPosition(dragwin.getPosition()[0], dragwin.getPosition()[1] + 5)
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Left', () => {
                    dragwin.setPosition(dragwin.getPosition()[0] - 5, dragwin.getPosition()[1])
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Right', () => {
                    dragwin.setPosition(dragwin.getPosition()[0] + 5, dragwin.getPosition()[1])
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })

                globalShortcut.register('Shift+Up', () => {
                    dragwin.setPosition(dragwin.getPosition()[0], dragwin.getPosition()[1] - 50)
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Shift+Down', () => {
                    dragwin.setPosition(dragwin.getPosition()[0], dragwin.getPosition()[1] + 50)
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Shift+Left', () => {
                    dragwin.setPosition(dragwin.getPosition()[0] - 50, dragwin.getPosition()[1])
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
                globalShortcut.register('Shift+Right', () => {
                    dragwin.setPosition(dragwin.getPosition()[0] + 50, dragwin.getPosition()[1])
                    dragwin.setMinimumSize(dragwidth, dragheight)
                    dragwin.setSize(dragwidth, dragheight)
                })
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
                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
            })

            dragwin.on('moved', () => {
                xpos = dragwin.getPosition()[0]
                ypos = dragwin.getPosition()[1]

                xpos = Math.floor(xpos)
                ypos = Math.floor(ypos)

                dragwin.setMinimumSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
                dragwin.setSize(dragwidth, dragheight)
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
                dragwin.setSize(dragwidth, dragheight)
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
                dragwin.setSize(dragwidth, dragheight)
            })
        })

        let extwin

        ipcMain.on('spawnextwin', () => {
            extwin = new BrowserWindow({
                width: 300,
                height: 50,
                title: `Notification Window`,
                icon: appicon,
                fullscreenable: false,
                minimizable: true,
                maximizable: false,
                autoHideMenuBar: true,
                center: true,
                useContentSize: true,
                resizable: false,
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

            extwin.on('close', () => {
                extwin.destroy()
                extwin = null
                win.webContents.send('extwinclosed')
            })
        })

        ipcMain.on('extwinbgchange', () => {
            if (extwin) {
                extwin.webContents.send('changecolour')
            }
        })

        ipcMain.on("opendevtools", () => {
            win.webContents.openDevTools({ mode: "detach" })
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
