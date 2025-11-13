import { ipcMain, BrowserWindow, desktopCapturer, screen } from "electron"
import path from "path"
import fs from "fs"
import { sanconfig } from "./config"
import { log } from "./log"
import { __root, sanhelper } from "./sanhelper"

// Used in `dialog.ts`/`renderer.ts` to close "sswin", and in `renderer.ts` to spawn the Preview window
ipcMain.on("sswin", (event,notify?: Notify,src?: number) => {
    const { screenshots, monitor } = sanconfig.get().store

    if (!notify) {
        for (const [id,sswin] of sswins) {
            screenshot.clearsswin(id)
        }

        return
    }

    const sswin = sswins.get(notify.id)
    sswin && sswin.win && screenshot.clearsswin(notify.id)

    sswins.set(notify.id,{
        win: null,
        src: monitor || -1,
        timer: null,
        windowtitle: null,
        haswarned: false
    })

    screenshot.createsswin(screenshots === "notifyimg" ? "img" : "ss",notify,true)
})

const sswins = new Map<number,SSWin>()

export const screenshot = {
    sswinbounds: {
        bounds: {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }
    },
    getlistenersvar: async (lv: "appid" | "win" | "worker" | "gameartobj") => await new Promise<BrowserWindow | number | GameArtObj | null>(resolve => {
        ipcMain.once(`ss_${lv}${lv === "appid" ? "num" : "obj"}`,(event,lv: BrowserWindow | number | null) => resolve(lv))
        ipcMain.emit(`ss_${lv}`)
    }),
    buildnotify: async (notify: Notify) => await new Promise<BuildNotifyInfo>(resolve => {
        ipcMain.once("buildnotifyobj",(event,info: BuildNotifyInfo) => resolve(info))
        ipcMain.emit("buildnotify",null,notify)
    }),
    setnotifybounds: async (dims: { width: number, height: number, x?: number, y?: number },type: NotifyType | null,offset = 20,wintype?: "extwin" | "sswin",customisation?: Customisation) => await new Promise<{ width: number, height: number, x: number, y: number }>(resolve => {
        ipcMain.once("setnotifyboundsobj",(event,bounds: { width: number, height: number, x: number, y: number }) => resolve(bounds))
        ipcMain.emit("setnotifybounds",null,dims,type,offset,wintype,customisation)
    }),
    monitor: (src?: number): { monitor: Monitor | Electron.Display | null, display: Electron.Display | null } => {
        const config = sanconfig.get()
        const targetid = src && src !== -1 ? src : config.get("monitor")

        let monitor: Monitor | Electron.Display | undefined = config.get("monitors").find(monitor => monitor.id === targetid)
        
        if (!monitor) {
            log.write("WARN",`Monitor id "${config.get("monitor")}" could not be found in "config.monitors" - Reverting to primary display...`)
            monitor = screen.getPrimaryDisplay()
        }

        log.write("INFO",`[Selected Monitor ID]:\n- ${config.get("monitor")}\n\n[Stored Monitors]:\n- ${config.get("monitors").map(monitor => monitor.id).join("\n- ")}`)
        const display = screen.getAllDisplays().find(display => display.id === monitor!.id)

        return { monitor: monitor || null, display: display || null }
    },
    srcpath: (id: number) => path.join(sanhelper.temp,`${id}.png`),
    checksrcimg: (notify: Notify,windowtitle: string | null,retries = 0) => {
        const tempimgpath = path.join(sanhelper.temp,`${notify.id}.png`)
        const sswin = sswins.get(notify.id)
        const { ssdelay } = sanconfig.get().store
        const interval = 250
        const max = Math.ceil((5000 + ((ssdelay * 1000) * 2)) / interval)

        sanhelper.devmode && console.log(`\nRETRIES = ${retries} | SSDELAY = ${ssdelay} | MAX = ${max}\n`)

        if (retries >= max) {
            screenshot.clearsswin(notify.id)
            return log.write("WARN",`Max retries exceeded for ID ${notify.id}`)
        }

        if (!sswin) {
            setTimeout(() => screenshot.checksrcimg(notify,windowtitle,retries + 1),interval)
            return
        }

        if (!fs.existsSync(tempimgpath)) {
            if (!sswin.haswarned) {
                log.write("WARN",`"${path.basename(tempimgpath)}" src file not present in "${path.dirname(tempimgpath)}" - retrying...`)
                sswin.haswarned = true
            }
                        
            sswin.timer && clearTimeout(sswin.timer)
            sswin.timer = setTimeout(() => screenshot.checksrcimg(notify,windowtitle,retries + 1),interval)
            
            return
        }

        log.write("INFO",`Total retries: ${retries}/${max}`)
        screenshot.createsswin("ss",notify)
    },
    checkwindowtitle: (ssmode: "screen" | "window",notify: Notify) => {
        const sswin = sswins.get(notify.id)

        if (!sswin) {
            setTimeout(() => screenshot.checkwindowtitle(ssmode,notify),250)
            return
        }

        if (ssmode === "window" && sswin!.windowtitle === null) {            
            setTimeout(() => screenshot.checkwindowtitle(ssmode,notify),250)
            return
        }

        log.write("INFO",`Building screenshot for "${notify.id}"...`)
        ssmode !== "window" || sswin.windowtitle !== null ? screenshot.checksrcimg(notify,sswin.windowtitle) : log.write("WARN",`Window Title for ID ${notify.id} not found`)
    },
    configuresrc: async (notify: Notify,monitorid?: number) => {
        try {
            const config = sanconfig.get()
            const screenshots = config.get("screenshots")

            const sswinsobj = {
                win: null,
                src: monitorid || -1,
                timer: null,
                windowtitle: null,
                haswarned: false
            }

            if (screenshots !== "overlay") {
                if (screenshots === "notifyimg") {
                    sswins.set(notify.id,sswinsobj)
                    screenshot.createsswin("img",notify)
                }
                
                return
            }

            sswins.has(notify.id) && sswins.delete(notify.id)

            ipcMain.once(`${notify.id}`,() => screenshot.checkwindowtitle(config.get("ssmode"),notify))

            const delay = config.get("ssdelay")
            const srcpath = screenshot.srcpath(notify.id)
            
            // Wait to receive global vars from `listeners.ts`
            const [win, worker, appid] = await Promise.all((["win","worker","appid"] as const).map(lv => screenshot.getlistenersvar(lv))) as [BrowserWindow,BrowserWindow,number]

            sswins.set(notify.id,sswinsobj)

            const sswin = sswins.get(notify.id)!

            if (worker && config.get("ssmode") === "window") {
                sswin.windowtitle = !appid ? win.title : await new Promise(resolve => {
                    ipcMain.once("windowtitles",(event,windowtitles: string[]) => resolve(windowtitles[0]))
                    worker!.webContents.send("windowtitles")
                })

                const { x, y, width, height } = sanhelper.getwindowbounds(sswin.windowtitle || "")
                const { id } = screen.getDisplayNearestPoint({ x, y })

                sswin.src = id

                Object.assign(screenshot.sswinbounds,{
                    bounds: {
                        x,
                        y,
                        width,
                        height
                    }
                })
            }

            // Fall back to provided "screen" src if no monitor is assigned when config.ssmode === "window"
            if (sswin.src === -1) {
                log.write("WARN",`"sswin.src" not found - using original "src" value (${monitorid})...`)
                
                const lastknownmonitor = config.get("monitors").find(monitor => config.get("lastknownmonitorlbl") === monitor.label)
                sswin.src = monitorid || (lastknownmonitor && lastknownmonitor.id) || config.get("monitor") || screen.getPrimaryDisplay().id
            }

            sswins.set(notify.id,sswin)

            const { monitor } = screenshot.monitor(sswin.src)
            if (!monitor) return log.write("ERROR",`Error configuring screenshot src: Could not locate Monitor with id ${config.get("monitor")}, and no primary fallback found.\n\n${JSON.stringify(config.get("monitors"))}`)

            const ssmode: "screen" | "window" = config.get("ssmode") === "window" && sswin.windowtitle ? "window" : "screen"
            log.write("INFO",`Using "${ssmode}" mode for Screenshot (ssmode: "${config.get("ssmode")}" | windowtitle: "${sswin.windowtitle}")`)

            const { id, label } = monitor
            let { bounds: { width, height } } = ssmode === "window" && (["width","height"] as const).every(dim => screenshot.sswinbounds.bounds[dim] !== 0) ? screenshot.sswinbounds : monitor

            ipcMain.once(`src_${notify.id}`,(event,err) => {
                if (err) {
                    log.write("ERROR",err as Error)
                    return screenshot.clearsswin(notify.id)
                }

                return log.write("INFO",`Screenshot for Monitor ${id} ("${label}") written successfully`)
            })
        
            setTimeout(() => screenshot.capturesrc({ config, notify: { id: notify.id }, bounds: { width, height }, id, label, monitor, ssmode, srcpath, windowtitle: sswin.windowtitle }),delay * 1000)
            return
        } catch (err) {
            log.write("ERROR",err as Error)
            return screenshot.clearsswin(notify.id)
        }
    },
    capturesrc: async (ssconfig: ScreenshotConfig) => {
        const { config, notify, bounds, id, label, monitor, ssmode, srcpath, windowtitle } = ssconfig
        const sswin = sswins.get(notify.id)
        if (!sswin) return log.write("WARN",`"sswin" not found for ID ${notify.id}`)
        
        if (config.get("hdrmode")) {
            let area: number[] | undefined

            if (config.get("ssmode") === "window") {
                const { x, y, width, height } = screenshot.sswinbounds.bounds
                area = [y,x,width,height] // Order of elements for `screenshots::Screen.capture_area()` is y/x/w/h
            }

            const msg: string = sanhelper.hdrscreenshot(monitor.id,srcpath,area)
            log.write("INFO",msg)
            return
        }

        try {
            const srcs = await desktopCapturer.getSources({
                types: [ssmode],
                thumbnailSize: bounds
            })

            log.write("INFO",`[Selected ${ssmode === "window" ? "Window Title" : "Monitor ID"}]:\n- ${ssmode === "window" ? windowtitle : id}\n\n[Available ${ssmode.replace(ssmode[0],ssmode[0].toUpperCase())} Sources]:\n- ${srcs.map(src => `${ssmode === "window" ? src.name : src.display_id} (${ssmode === "window" ? `Window name: ${src.name}` : `Parsed id: ${parseInt(src.display_id)}`} | Match?: ${ssmode === "window" ? src.name === windowtitle : parseInt(src.display_id) === sswin.src})`).join("\n- ")}`)

            const src = srcs.find(src => ssmode === "window" ? src.name === windowtitle : (parseInt(src.display_id) === sswin.src || screen.getPrimaryDisplay().id === sswin.src))
            if (!src) throw new Error(`Error configuring screenshot: No matching Display source ID found for Monitor ${sswin.src} ("${label}")`)
            
            fs.writeFileSync(srcpath,src.thumbnail.toPNG())
        } catch (err) {
            log.write("ERROR",err as Error)
            return screenshot.clearsswin(notify.id)
        }
    },
    createsswin: async (type: "ss" | "img",notify: Notify,ispreview?: boolean) => {
        try {
            const config = sanconfig.get()
            const sswintype = `${type === "ss" ? "Screenshot" : "Notification Image"}${ispreview ? " Preview" : ""} Window`
            
            // Screenshots are disabled in `ipcMain.on("notify")` event and shouldn't reach here anyway, but added as a logical fallback
            if (!config.get(`customisation.${notify.type}.ssenabled`)) return log.write("INFO",`${type === "ss" ? "Screenshots" : "Notification Images"} disabled for "${notify.type}" type`)

            let rapath = ""

            if (notify.ra) {
                const key = await new Promise<string | null>(resolve => {
                    ipcMain.once("sendemu",(event,emu: string | null) => resolve(emu))
                    ipcMain.emit("getemu")
                })

                const { language } = await import("./language")
                const emu = key ? await language.get(key,["settings","ra","content"]) : null

                rapath = path.join("RetroAchievements",emu || "[Unknown Emulator]")
            }

            const imgpath: string = path.join(config.get(`${type === "ss" ? "ov" : "img"}path`),rapath) as string
            const srcpath: string | null = type === "ss" ? (!ispreview ? screenshot.srcpath(notify.id) : sanhelper.setfilepath("img","santextlogobg.png")) : null

            try {
                !fs.existsSync(imgpath) && fs.mkdirSync(imgpath, { recursive: true })
                log.write("INFO",`"${imgpath}" ${!fs.existsSync(imgpath) ? "created successfully" : "already exists"}`)
            } catch (err) {
                log.write("ERROR",`Error creating "${imgpath}": ${err as Error}`)
                return screenshot.clearsswin(notify.id)
            }

            const info = await screenshot.buildnotify(notify)

            const sswin = sswins.get(notify.id)
            if (!sswin) return log.write("ERROR",`Error creating ${sswintype} for ID ${notify.id}: Entry not found in "sswins" Map`)

            ipcMain.once(`${type}winready_${notify.id}`,async event => {
                if (!sswin.win) return log.write("WARN",`Error sending ${type === "ss" ? `screenshot "src"` : "notification data"} for ID ${notify.id}: "${type}win" not found`)

                if (type === "ss") {
                    log.write("INFO",!ispreview ? `Sending "src" for ID ${notify.id}` : "Screenshot not taken for preview")
                    sswin.win.webContents.send(`src_${notify.id}`,srcpath)
                }

                ;(process.platform !== "linux" || ispreview) && sswin.win.show() // Prevent the window from showing, which still captures the contents but hides the window in "Window" and "Notification Image" modes

                const [appid,gameartobj] = await Promise.all((["appid","gameartobj"] as const).map(lv => screenshot.getlistenersvar(lv))) as [number,GameArtObj]
                const { usecustomfiles, ssalldetails, screenshots } = config.store
                const { icon, libhero, logo } = gameartobj

                const html = fs.readFileSync(path.join(__root,"notify","presets",notify.customisation.preset,"index.html")).toString()
                if (!html) throw new Error(`Error parsing HTML for "${notify.customisation.preset}" preset`)

                const meta = {
                    width: html.match(/width="(\d+)"/i)?.[1] || "0",
                    height: html.match(/height="(\d+)"/i)?.[1] || "0",
                    offset: html.match(/offset="(-?\d+)"/i)?.[1] || "20"
                }

                const dims = {
                    width: parseInt(meta.width),
                    height: parseInt(meta.height),
                    offset: parseInt(meta.offset),
                    scalefactor: 1
                }

                try {
                    const { width, height } = await screenshot.setnotifybounds({ width: dims.width, height: dims.height },notify.type,dims.offset,"sswin",notify.customisation)

                    if (type === "img") {
                        sswin.win.setSize(Math.round(width * (notify.customisation.scale / 100)),Math.round(height * (notify.customisation.scale / 100)))
                        sswin.win.center()
                    }

                    const monitor = (type !== "img" && screen.getAllDisplays().find(monitor => monitor.id === (sswin.src || config.get("monitor")))) || screen.getPrimaryDisplay()
                    dims.scalefactor = monitor.scaleFactor

                    sswin.win.setResizable(false)
                } catch (err) {
                    return log.write("ERROR",`Error creating ${sswintype} for ID ${notify.id} dimensions: ${err as Error}`)
                }
        
                event.reply(`${type}winready_${notify.id}`,{
                    info: {
                        info: info,
                        customisation: notify.customisation,
                        iswebview: ispreview ? "sspreview" : "ss",
                        steampath: sanhelper.steampath,
                        skipaudio: true,
                        customfiles: usecustomfiles ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : undefined,
                        hqicon: sanhelper.gethqicon(appid),
                        temp: sanhelper.temp,
                        ssalldetails,
                        screenshots,
                        gamearticon: icon,
                        gameartlibhero: libhero,
                        gameartlogo: logo
                    } as Info,
                    dims
                })

                !ispreview && ipcMain.once(`sscapture_${notify.id}`,async () => {
                    if (!sswin?.win) return log.write("WARN",`${sswintype} for ID ${notify.id} was closed before image file could be written to "${imgpath}"`)

                    const regex = /[^a-zA-Z0-9 _()\-\[\]]/g
                    const ssdir = path.join(imgpath,(!notify.istestnotification && info.gamename ? info.gamename : "Steam Achievement Notifier").replace(regex,"").replace(/\.$/,"").trim()).replace(/\\/g,"/")
                    const ssbasename = `${info.title.replace(regex,"").trim()}${type === "img" ? " - Notification" : ""}`
                    const ssext = ".png"

                    let sscounter = 0
                    let ssimg = path.join(ssdir,`${ssbasename}${ssext}`).replace(/\\/g,"/")

                    while (!notify.istestnotification && fs.existsSync(ssimg)) {
                        sscounter++
                        ssimg = path.join(ssdir,`${ssbasename}_${sscounter}${ssext}`).replace(/\\/g,"/")
                    }

                    try {
                        await new Promise(resolve => setTimeout(resolve,250)) // Allow additional frames for window to fully render before capturing

                        const img = await sswin.win.capturePage()
                        
                        !fs.existsSync(ssimg) && fs.mkdirSync(ssdir,{ recursive: true })
                        fs.writeFileSync(ssimg,img.toPNG())

                        log.write("INFO",`${sswintype.replace(" Window","")} written to "${ssimg}" successfully`)
                    } catch (err) {
                        log.write("ERROR",`Error capturing screenshot for "${info.apiname}": ${err as Error}`)
                    }
                    
                    screenshot.clearsswin(notify.id)
                })
            })

            const { monitor, display } = screenshot.monitor(sswin.src)

            if (!monitor) return log.write("ERROR",`Error configuring screenshot: Could not locate Monitor with id ${config.get("monitor")}, and no primary fallback found.\n\n${JSON.stringify(config.get("monitors"))}`)
            if (!display) return log.write("ERROR",`Error configuring screenshot: No Display matches Monitor id ${monitor.id}.\n\n${JSON.stringify(screen.getAllDisplays())}`)

            const offscreenpx = 10000

            // On Linux, attempts to get `monitor.bounds`, falls back to `display.bounds` and falls back again to default 1080p values if both are undefined
            const { fbw, fbh } = process.platform === "linux" && type === "ss" ? { fbw: monitor.bounds.width ?? display.bounds.width ?? 1920, fbh: monitor.bounds.height ?? display.bounds.height ?? 1080 } : { fbw: undefined, fbh: undefined }
            const { x, y } = display.bounds
            const { bounds: { width, height } } = screenshot.sswinbounds
            const ssmode: "screen" | "window" = config.get("ssmode") === "window" && sswin.windowtitle ? "window" : "screen"

            sswin.win = new BrowserWindow({
                title: `Steam Achievement Notifier (V${sanhelper.version}): ${type === "ss" ? "Screenshot" : "Notification Image"} ${ispreview ? "Preview" : "Window"}`,
                fullscreen: type === "ss" && ssmode !== "window" && (process.platform !== "linux" || ispreview), // On Linux, prevents `fullscreen` from being activated when not a preview
                x: type === "ss" && ssmode !== "window" ? x : undefined,
                y: (process.platform === "linux" && type === "ss") ? offscreenpx : (type === "ss" && ssmode !== "window" ? y : undefined), // On Linux, sets the `y` value to `offscreenpx` in "Screen" mode, moving it far offscreen
                width: width || fbw,
                height: height || fbh,
                autoHideMenuBar: true,
                frame: false,
                transparent: true,
                focusable: ispreview,
                movable: false,
                maximizable: false,
                minimizable: false,
                skipTaskbar: !sanhelper.devmode,
                show: false,
                center: ssmode === "window",
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    webviewTag: true,
                    additionalArguments: [
                        `--notifyid=${notify.id}`,
                        `--monwidth=${Math.round(monitor.bounds.width / monitor.scaleFactor)}`,
                        `--monheight=${Math.round(monitor.bounds.height / monitor.scaleFactor)}`
                    ]
                }
            })

            !ispreview && sswin.win.setOpacity(sanhelper.devmode ? 0.5 : 0)
            sswin.win.setIgnoreMouseEvents(!ispreview)
            sswin.win.loadFile(path.join(__root,"dist","app",`${type}win.html`))
            sanhelper.devmode && sanhelper.setdevtools(sswin.win)

            sswin.win.once("closed",() => log.write("INFO",`${sswintype} for ID ${notify.id} closed`))
        } catch (err) {
            log.write("ERROR",err as Error)
            screenshot.clearsswin(notify.id)
        }
    },
    clearsswin: (id: number) => {
        const sswin = sswins.get(id)

        try {
            if (sswin) {
                sswin.timer && clearTimeout(sswin.timer)
                sswin.timer = null
                
                sswin.win && sswin.win.close()
                sswins.delete(id)
            }
        } catch (err) {
            !(err as Error).message.includes("TypeError: Object has been destroyed") && log.write("WARN",`Unable to clear "sswin" for ID ${id}: ${err as Error}`)
        }

        try {
            const srcimg = screenshot.srcpath(id)
            
            if (fs.existsSync(srcimg)) {
                fs.rmSync(srcimg,{ force: true })
                log.write("INFO",`"src" image for ID ${id} deleted successfully`)
            }
        } catch (err) {
            log.write("WARN",`Unable to delete "src" image for ID ${id}: ${err as Error}`)
        }

        return log.write(sswin && !sswin.timer ? "INFO" : "WARN",`"sswin" for ID ${id} ${sswin && !sswin.timer ? "cleared successfully" : "could not be found"}`)
    }
}