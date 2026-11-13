import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { usertheme } from "./usertheme"
import { log } from "./log"
 
export const sannotify = {
    // Screenshot Only only. Starts capture before localisation/icon work so Steam's toast is still up.
    // Returns the id `show()` must reuse. Other media modes return undefined and keep `show()`'s own id.
    earlycapture: (appid: number,info: NotifyInfo) => {
        if (info.ra) return undefined

        const { type } = info
        const config = sanconfig.get()
        const themeswitch = usertheme.hasthemeswitch(appid,info.ra)
        const customisation = usertheme.gettypecustomisation(config,type,themeswitch)

        if (config.get("screenshots") !== "ssonly" || !customisation.ssenabled || customisation.preset === "os") return undefined

        const id = Math.round(Date.now() / Math.random() * 1000)
        const fbimg = sanhelper.setfilepath("img","sanlogosquare.svg")
        const notify: Notify = {
            desc: "",
            unlocked: true,
            hidden: false,
            percent: 0,
            unlocktime: new Date().toISOString(),
            ...info,
            id,
            customisation,
            icon: fbimg,
            gameicon: fbimg
        }

        ipcRenderer.send("earlycapture",notify,themeswitch?.[1].src)
        return id
    },
    show: (appid: number,info: NotifyInfo,monitor?: number) => {
        const { type, ra } = info
        const config = sanconfig.get()
        const themeswitch = usertheme.hasthemeswitch(appid,ra)
        const customisation = usertheme.gettypecustomisation(config,type,themeswitch)
 
        if (themeswitch) {
            log.write("INFO",`${ra ? "[RA]: " : ""}Auto-switch entry detected for ${appid}`)
            sanhelper.devmode && console.log(customisation)
        }
 
        const fbimg = sanhelper.setfilepath("img","sanlogosquare.svg")
        const gameiconpath = path.join(sanhelper.temp,"gameicon.png")
        const usegameicon = !ra && config.get(`customisation.${type}.usegameicon`) && fs.existsSync(gameiconpath)
 
        const notify: Notify = {
            desc: "",
            unlocked: true,
            hidden: false,
            percent: 0,
            unlocktime: new Date().toISOString(),
            ...info,
            id: info.id ?? Math.round(Date.now() / Math.random() * 1000),
            customisation,
            icon: info.icon ?? (type === "plat" ? (customisation.customicons as CustomIcon).plat as string ?? sanhelper.setfilepath("img","ribbon.svg") : fbimg),
            gameicon: info.gameicon ?? (usegameicon ? gameiconpath : fbimg)
        }
 
        ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,themeswitch?.[1].src ?? monitor))
 
        return notify
    }
}