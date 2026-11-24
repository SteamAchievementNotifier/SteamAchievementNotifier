import { app, dialog, clipboard, shell } from "electron"
import { log } from "./log"
import { sanhelper } from "./sanhelper"
import { language } from "./language"

export const error = {
    showdialog: async (err: Error) => {
        const id = 2
        const title = "Dang..."
        const issteamerr = err.message.startsWith("Steam installation path not found")
        const message = await language.get(issteamerr ? "steam" : "subtitle",["error","content"])
        const msg = err.stack && !issteamerr ? err.stack : err.message
        const detail = issteamerr ? msg : `${await language.get("details",["error","content"])}\n\n${msg}\n\n${await language.get("sub",["error","content"])}`
        
        const btn = dialog.showMessageBoxSync({
            title,
            message,
            detail,
            defaultId: id,
            cancelId: id,
            noLink: true,
            type: "error",
            buttons: await Promise.all((["copy","issue","exit"] as const).map(async id => await language.get(id,["error","content"])))
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