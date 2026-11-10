import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { usertheme } from "./usertheme"
import { log } from "./log"
 
export const sannotify = {
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
            id: Math.round(Date.now() / Math.random() * 1000),
            desc: "",
            unlocked: true,
            hidden: false,
            percent: 0,
            unlocktime: new Date().toISOString(),
            ...info,
            customisation,
            icon: info.icon ?? (type === "plat" ? (customisation.customicons as CustomIcon).plat as string ?? sanhelper.setfilepath("img","ribbon.svg") : fbimg),
            gameicon: info.gameicon ?? (usegameicon ? gameiconpath : fbimg)
        }
 
        ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,themeswitch?.[1].src ?? monitor))
 
        return notify
    }
}