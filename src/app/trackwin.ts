import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { language } from "./language"

const getgameart = (gamename: string,type: "icon" | "library_hero",appid: number,steampath: string): string => {
    const gameart = path.join(steampath,"appcache","librarycache",`${appid}_${type}.jpg`).replace(/\\/g,"/")

    try {
        if (!fs.existsSync(gameart)) throw new Error(`"${gameart}" not found`)
        return gameart
    } catch (err) {
        ipcRenderer.send("trackwinerror",`Error loading ${type} image for "${gamename}": ${err as Error}`)
        return ""
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("trackwinclose"),{ once: true })

    document.querySelector(".wrapper#textcont > span")!.textContent = await language.get("nowtracking")
   
    ipcRenderer.once("gamename", (event,gamename: string,appid: number,steampath: string) => {
        if (gamename) {
            document.getElementById("gamename")!.textContent = gamename

            if (appid && steampath) {
                const icon = getgameart(gamename,"icon",appid,steampath)
                const header = getgameart(gamename,"library_hero",appid,steampath)

                icon && ((document.getElementById("gamelogo")! as HTMLImageElement).src = icon)
                if (header) {
                    document.documentElement.style.setProperty("--primary","transparent")
                    document.documentElement.style.setProperty("--header",`url('${header}')`)
                }
            }
        }
    })

    ipcRenderer.once("trackwinclose", () => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("trackwinready")
})
