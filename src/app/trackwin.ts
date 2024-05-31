import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"

const getgameart = (gamename: string,type: "icon" | "library_hero",appid: number,steampath: string,steam3id?: number): string => {
    const heropath = (steam3id: number) => {
        const heroimgpath = path.join(steampath,"userdata",`${steam3id}`,"config","grid",`${appid}_hero`).replace(/\\/g,"/")
        const exts = ["jpg","png"]

        for (const ext of exts) {
            if (fs.existsSync(`${heroimgpath}.${ext}`)) return `${heroimgpath}.${ext}`
        }

        return null
    }

    const gameart = type === "library_hero" && steam3id && heropath(steam3id) || path.join(steampath,"appcache","librarycache",`${appid}_${type}.jpg`).replace(/\\/g,"/")

    console.log(gameart)

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

    ipcRenderer.once("gamename", (event,text: string,gamename: string,appid: number,steampath: string,steam3id?: number) => {
        document.querySelector(".wrapper#textcont > span")!.textContent = text

        if (gamename) {
            document.getElementById("gamename")!.textContent = gamename

            if (appid && steampath) {
                const icon = getgameart(gamename,"icon",appid,steampath)
                const hero = getgameart(gamename,"library_hero",appid,steampath,steam3id)

                icon && ((document.getElementById("gamelogo")! as HTMLImageElement).src = icon)
                if (hero) {
                    document.documentElement.style.setProperty("--primary","transparent")
                    document.documentElement.style.setProperty("--header",`url('${hero}')`)
                }
            }
        }
    })

    ipcRenderer.once("trackwinclose", () => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("trackwinready")
})
