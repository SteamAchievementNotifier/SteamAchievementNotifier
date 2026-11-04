import { app, BrowserWindow, BrowserWindowConstructorOptions, screen } from "electron"
import { execFileSync } from "child_process"
import fs from "fs"
import { log } from "./log"

declare interface TrackingStatus {
    appid: number,
    gamename: string | null,
    ra: boolean,
    unlocked: number,
    total: number
}

// Tracked separately, as the Worker and RAWorker both send "stats" events independently (e.g. RAWorker sends `appid: 0` while idle)
const tracking: Record<"steam" | "ra",TrackingStatus | null> = { steam: null, ra: null }
const counted: Record<"steam" | "ra",Set<string>> = { steam: new Set(), ra: new Set() } // Prevents replayed notifications being counted twice

// Steam Deck/SteamOS "Game Mode" runs under the gamescope compositor, which only composites the focused game + Steam's own overlay layers.
// X11 windows with the `GAMESCOPE_EXTERNAL_OVERLAY` atom set are composited on top of the game instead (the same mechanism used by `mangoapp`).
// The atom is set via `xprop` if available, otherwise via `libX11` using Python's `ctypes` (both ship with SteamOS).

const atom = "GAMESCOPE_EXTERNAL_OVERLAY"

const pyscript = `
import ctypes, sys
x = ctypes.cdll.LoadLibrary("libX11.so.6")
x.XOpenDisplay.restype = ctypes.c_void_p
x.XOpenDisplay.argtypes = [ctypes.c_char_p]
x.XInternAtom.restype = ctypes.c_ulong
x.XInternAtom.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_int]
x.XChangeProperty.argtypes = [ctypes.c_void_p, ctypes.c_ulong, ctypes.c_ulong, ctypes.c_ulong, ctypes.c_int, ctypes.c_int, ctypes.c_void_p, ctypes.c_int]
x.XSync.argtypes = [ctypes.c_void_p, ctypes.c_int]
x.XCloseDisplay.argtypes = [ctypes.c_void_p]
d = x.XOpenDisplay(None)
if not d: sys.exit("Unable to open X display")
val = (ctypes.c_long * 1)(1)
# XA_CARDINAL = 6, PropModeReplace = 0
x.XChangeProperty(d, int(sys.argv[1]), x.XInternAtom(d, b"${atom}", 0), 6, 32, 0, val, 1)
x.XSync(d, 0)
x.XCloseDisplay(d)
`

// gamescope always draws an external overlay window from the top-left of the screen (ignoring the window's position), and only one at a time.
// So under gamescope, notification windows are rendered offscreen, and each frame is drawn by a single fullscreen overlay window ("host") at the notification's position.
// Frames are sent as raw BGRA bitmaps (premultiplied alpha), converted to RGBA for `ImageData` here, to avoid PNG encoding every frame
const hosthtml = `<!DOCTYPE html>
<html>
    <body style="margin: 0; overflow: hidden; background: transparent;">
        <script>
            const { ipcRenderer } = require("electron")
            const canvases = new Map()

            ipcRenderer.on("frame",(event,id,x,y,width,height,bitmap) => {
                if (bitmap.byteLength < width * height * 4) return // e.g. a bitmap at a different scale factor than its reported size

                let canvas = canvases.get(id)

                if (!canvas) {
                    canvas = document.createElement("canvas")
                    canvas.style.position = "absolute"
                    document.body.appendChild(canvas)
                    canvases.set(id,canvas)
                }

                canvas.style.left = x + "px"
                canvas.style.top = y + "px"
                if (canvas.width !== width || canvas.height !== height) [canvas.width,canvas.height] = [width,height]

                const data = new Uint8ClampedArray(bitmap.buffer,bitmap.byteOffset,width * height * 4)

                for (let i = 0; i < data.length; i += 4) {
                    const a = data[i + 3]
                    const b = data[i]
                    data[i] = a ? data[i + 2] * 255 / a : 0
                    data[i + 1] = a ? data[i + 1] * 255 / a : 0
                    data[i + 2] = a ? b * 255 / a : 0
                }

                canvas.getContext("2d").putImageData(new ImageData(data,width,height),0,0)
            })

            ipcRenderer.on("remove",(event,id) => {
                canvases.get(id)?.remove()
                canvases.delete(id)
            })
        </script>
    </body>
</html>`

let host: BrowserWindow | null = null
let hostready = false
const attached = new Set<number>()
const pending = new Map<number,any[]>() // Latest frame per window, held until the host page has loaded

const sendframe = (id: number,...frame: any[]) => {
    if (!host || host.isDestroyed()) return
    hostready ? host.webContents.send("frame",id,...frame) : pending.set(id,frame)
}

const gethost = (): BrowserWindow => {
    if (host && !host.isDestroyed()) return host

    const { bounds } = screen.getPrimaryDisplay()

    host = new BrowserWindow({
        ...bounds,
        title: "Steam Achievement Notifier: gamescope overlay",
        frame: false,
        transparent: true,
        focusable: false,
        resizable: false,
        movable: false,
        skipTaskbar: true,
        hasShadow: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false
        }
    })

    host.setIgnoreMouseEvents(true)
    gamescope.setoverlay(host)

    hostready = false
    host.webContents.once("did-finish-load",() => {
        hostready = true
        for (const [id,frame] of pending) sendframe(id,...frame)
        pending.clear()
    })

    host.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(hosthtml)}`)
    host.on("closed",() => host = null)

    return host
}

export const gamescope = {
    get active(): boolean {
        if (process.platform !== "linux") return false
        return app.commandLine.hasSwitch("gamescope") || !!process.env.GAMESCOPE_WAYLAND_DISPLAY || process.env.XDG_CURRENT_DESKTOP?.toLowerCase() === "gamescope"
    },
    xid: (win: BrowserWindow): number => {
        const handle = win.getNativeWindowHandle()
        return handle.length >= 8 ? Number(handle.readBigUInt64LE(0)) : handle.readUInt32LE(0)
    },
    // Must be called before the window is mapped (i.e. before `show()`), so gamescope picks up the atom when the window is first composited
    setoverlay: (win: BrowserWindow): boolean => {
        if (!gamescope.active || win.isDestroyed()) return false

        const xid = gamescope.xid(win)
        const setters: [string,string[]][] = [
            ["xprop",["-id",`${xid}`,"-f",atom,"32c","-set",atom,"1"]],
            ["python3",["-c",pyscript,`${xid}`]]
        ]

        for (const [cmd,args] of setters) {
            try {
                execFileSync(cmd,args,{ timeout: 2000, stdio: "pipe" })
                return true
            } catch (err) {
                log.write("WARN",`Unable to set "${atom}" on window ${xid} via "${cmd}": ${err instanceof Error ? err.message : err}`)
            }
        }

        log.write("ERROR",`Unable to set "${atom}" on window ${xid} - notifications will not be visible in Game Mode`)
        return false
    },
    // Window options for a notification window under gamescope: rendered offscreen, then drawn by the host via `attach()`
    options: (options: BrowserWindowConstructorOptions): BrowserWindowConstructorOptions => !gamescope.active ? options : {
        ...options,
        show: false,
        webPreferences: { ...options.webPreferences, offscreen: true }
    },
    // Forwards each painted frame of an offscreen notification window to the host, at the window's current position
    attach: (win: BrowserWindow) => {
        if (!gamescope.active) return

        const { id } = win
        const target = gethost()
        const { x: hostx, y: hosty } = target.getBounds()

        attached.add(id)
        target.isVisible() || target.showInactive()

        win.webContents.setFrameRate(60)
        win.webContents.on("paint",(event,dirty,image) => {
            if (target.isDestroyed()) return

            const { width, height } = image.getSize()
            const { x, y } = win.getBounds()

            width && height && sendframe(id,x - hostx,y - hosty,width,height,image.toBitmap())
        })

        // "ready-to-show" isn't reliably emitted for offscreen windows, so emit it once the page has loaded if it hasn't been already
        let ready = false
        win.once("ready-to-show",() => ready = true)
        win.webContents.once("did-finish-load",() => !ready && win.emit("ready-to-show"))

        win.once("closed",() => {
            attached.delete(id)
            pending.delete(id)
            if (target.isDestroyed()) return

            target.webContents.send("remove",id)
            attached.size || target.hide() // Unmap the fullscreen overlay while no notifications are showing
        })
    },
    // The Decky plugin sets `SAN_STATUS_FILE` when launching SAN, and reads it to display the currently tracked game
    writestatus: () => {
        const file = process.env.SAN_STATUS_FILE
        if (!file) return

        try {
            // Written to a temp file first, so the plugin never reads a partially written file
            fs.writeFileSync(`${file}.tmp`,JSON.stringify({ tracking: tracking.steam ?? tracking.ra, updated: Date.now() }))
            fs.renameSync(`${file}.tmp`,file)
        } catch (err) {
            log.write("WARN",`Unable to write status file "${file}": ${err instanceof Error ? err.message : err}`)
        }
    },
    updatestatus: ({ appid, gamename, achievements, ra }: StatsObj) => {
        const src = ra ? "ra" : "steam"

        counted[src].clear()
        tracking[src] = appid ? {
            appid,
            gamename,
            ra: !!ra,
            unlocked: achievements?.filter(ach => ach.unlocked).length ?? 0,
            total: achievements?.length ?? 0
        } : null

        gamescope.writestatus()
    },
    // "stats" events are only sent when a game starts/stops being tracked, so increment the unlocked count on each achievement notification
    addunlock: ({ istestnotification, type, ra, apiname }: Notify) => {
        const src = ra ? "ra" : "steam"
        const status = tracking[src]
        if (!status || istestnotification || type === "plat" || counted[src].has(apiname)) return

        counted[src].add(apiname)
        status.unlocked = Math.min(status.unlocked + 1,status.total)
        gamescope.writestatus()
    }
}
