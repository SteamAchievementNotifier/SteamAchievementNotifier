import { app, dialog, clipboard, shell } from "electron"
import { log } from "./log"
import { sanhelper } from "./sanhelper"

export const error = {
    showdialog: async (err: Error) => {
        const id = 2
        const title = "Dang..."
        const issteamerr = err.message.startsWith("Steam installation path not found")
        const message = issteamerr ? `Steam installation not found` : `Steam Achievement Notifier (V${sanhelper.version}) was unable to start`
        const msg = err.stack && !issteamerr ? err.stack : err.message
        const detail = issteamerr ? msg : `Details of the error are as follows:\n\n${msg}`
        
        const btn = dialog.showMessageBoxSync({
            title,
            message,
            detail,
            defaultId: id,
            cancelId: id,
            noLink: true,
            type: "error",
            buttons: [
                "Copy error details",
                "Open GitHub issue",
                "Exit"
            ]
        })

        switch (btn) {
            case 0:
                await clipboard.writeText(msg)
                break
            case 1:
                await shell.openExternal("https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues/new?template=bugreport.yml")
                break
        }

        log.write("EXIT",`App could not start due to an error: ${msg}`)
        app.exit()
    }
}