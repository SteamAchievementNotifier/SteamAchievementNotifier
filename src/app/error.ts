import path from "path"
import { log } from "./log"
import { __root, sanhelper } from "./sanhelper"

export const error = {
    createwin: async (err: any) => {
        log.write("ERROR",err)
        
        const { app, ipcMain, BrowserWindow, clipboard, nativeImage } = await import("electron")
        const { setexit } = (await import("./listeners")).listeners
        
        setexit()
        log.init("ERROR")

        const errwin = new BrowserWindow({
            title: `Steam Achievement Notifier (V${sanhelper.version}): Error`,
            width: 500,
            height: 400,
            frame: false,
            transparent: true,
            autoHideMenuBar: true,
            center: true,
            darkTheme: true,
            fullscreen: false,
            fullscreenable: false,
            minimizable: false,
            maximizable: false,
            resizable: false,
            closable: false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })

        errwin.loadFile(path.join(__root,"dist","app","errwin.html"))
        sanhelper.devmode && sanhelper.setdevtools(errwin)

        errwin.once("ready-to-show", () => errwin.webContents.send("err",err))

        ipcMain.once("capture", async event => {
            const capture = await errwin.webContents.capturePage()

            try {
                const img = nativeImage.createFromBuffer(capture.toPNG())
                clipboard.writeImage(img)

                event.reply("capture")
            } catch (err) {
                log.write("ERROR",`Error capturing screenshot: ${err}`)
                event.reply("capture",err)
            }
        })

        ipcMain.on("restart",() => {
            app.relaunch({ execPath: process.execPath })
            log.write("EXIT",`Exited for relaunch requested via "Reset" Error Window option`)
            app.exit()
        })
    }
}