import { app, BrowserWindow, ipcMain, nativeTheme } from "electron"
import path from "path"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"
import { error } from "./error"
import { sanconfig } from "./config"
import { listeners } from "./listeners"

app.setAppUserModelId(sanhelper.devmode ? process.execPath : "com.SteamAchievementNotifier.Jackson0ne") // Sets AppUserModelId for Native OS notifications
ipcMain.on("version",event => event.returnValue = app.getVersion())
sanhelper.devmode && ipcMain.on("beta",event => event.returnValue = app.commandLine.hasSwitch("beta"))

let win: BrowserWindow

export const main = async (starttime: string) => {
    const config = sanconfig.get()
    if (config.get("desktop") === undefined) config.store = sanconfig.create()
    
    sanconfig.create(true) // Validate config on launch
    
    const createwin = async () => {
        try {
            const steampath = sanhelper.steampath // Check Steam is installed
            if (!steampath) throw new Error(`Steam installation path not found. Please install Steam before running Steam Achievement Notifier`)
            log.write("INFO",`Steam installation path: ${steampath}`)
        } catch (err) {
            if (err instanceof Error && err.message) throw err
            throw new Error(`Unable to start Steam Achievement Notifier: ${err}`)
        }

        if (config === undefined) throw new Error(`"${path.join(sanhelper.appdata,"config.json")}" does not exist`)

        win = new BrowserWindow({
            title: `Steam Achievement Notifier (V${sanhelper.version})`,
            icon: path.join(__root,"img",`sanlogo.${process.platform === "linux" ? "png" : "ico"}`),
            width: config.get("width"),
            minWidth: 300,
            height: config.get("height"),
            minHeight: 450,
            frame: false,
            transparent: true,
            autoHideMenuBar: true,
            x: config.get("x"),
            y: config.get("y"),
            center: false,
            darkTheme: true,
            focusable: true,
            fullscreen: false,
            fullscreenable: false,
            minimizable: false,
            maximizable: true,
            resizable: true,
            show: !config.get("startmin"),
            skipTaskbar: false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                backgroundThrottling: false,
                webviewTag: true
            }
        })
    
        win.loadFile(path.join(__root,"dist","app","index.html"))
        sanhelper.devmode && sanhelper.setdevtools(win)

        let update = false
        ipcMain.on("update",() => update = true) // Emitted from `update.ts`

        win.on("close",event => {
            if (update) return ipcMain.emit("quitforupdate") // Send event to `listeners.ts` to quit worker if it exists

            event.preventDefault()
            return win.hide()
        })

        win.once("ready-to-show",() => {
            listeners.set(win)
            ipcMain.emit("validateworker")
            ipcMain.emit("shortcut",null,!config.get("noshortcuts"))

            for (const type of Object.keys(sanconfig.defaultextwins) as ExtWins[]) {
                config.get(`${type}win`) && ipcMain.emit(`${type}win`,null,true)
            }
        })

        win.webContents.once("render-process-gone",(event,{ reason, exitCode }) => {
            log.write("ERROR",`"Renderer" process closed unexpectedly: "${reason}" (${exitCode})`)
            ipcMain.emit("workercrash")
        })

        ipcMain.on("starttime",event => event.reply("starttime",starttime))
        ipcMain.on("configupdated",(event,newobj) => config.store = newobj)
    }

    log.init("MAIN")

    nativeTheme.themeSource = "dark"

    process.on("uncaughtException",err => win?.webContents.send("error",err))
    process.on("unhandledRejection",err => win?.webContents.send("error",err))

    app.on("window-all-closed",app.quit)

    app
    .whenReady()
    .then(createwin)
    .catch(async err => {
        await error.createwin(err)
        win && win.destroy()
    })
}