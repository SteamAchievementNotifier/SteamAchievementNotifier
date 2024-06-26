import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"

const getgameart = (gamename: string,type: "icon" | "library_hero",appid: number,steampath: string,steam3id: number,hqicon: string): string => {
    const heropath = (steam3id: number) => {
        const heroimgpath = path.join(steampath,"userdata",`${steam3id}`,"config","grid",`${appid}_hero`).replace(/\\/g,"/")
        const exts = ["jpg","png"]

        for (const ext of exts) {
            if (fs.existsSync(`${heroimgpath}.${ext}`)) return `${heroimgpath}.${ext}`
        }

        return null
    }

    const gameart = type === "library_hero" && heropath(steam3id) || (type === "icon" && hqicon || path.join(steampath,"appcache","librarycache",`${appid}_${type}.jpg`)).replace(/\\/g,"/")

    try {
        if (!fs.existsSync(gameart)) throw new Error(`"${gameart}" not found`)
        return gameart
    } catch (err) {
        ipcRenderer.send("trackwinerror",`Error loading "${type}" image for "${gamename}": ${err as Error}`)
        return ""
    }
}

const convertICO = async (file: string,tempdir: string) => {
    if (path.extname(file) !== ".ico") return file

    const iconpng = path.join(tempdir,"gameicon.png")
    if (fs.existsSync(iconpng)) return iconpng

    const { parse } = await import("icojs")

    const buffer = fs.readFileSync(file)
    const layers = await parse(buffer,"image/png")
    const hq = layers.reduce((max,current) => (current.width > max.width) ? current : max)

    try {
        fs.writeFileSync(iconpng,Buffer.from(hq.buffer))
        return iconpng
    } catch (err) {
        return null
    }

    // return `data:img/png;base64,${Buffer.from(hq.buffer).toString("base64")}`
}

window.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("trackwinclose"),{ once: true })

    ipcRenderer.once("gamename", async (event,text: string,gamename: string,appid: number,steampath: string,steam3id: number = 0,hqicon: string,tempdir: string) => {
        document.querySelector(".wrapper#textcont > span")!.textContent = text

        if (gamename) {
            document.getElementById("gamename")!.textContent = gamename

            if (appid && steampath) {
                const icon = (hqicon?: string) => getgameart(gamename,"icon",appid,steampath,steam3id,hqicon || "")
                const hero = getgameart(gamename,"library_hero",appid,steampath,steam3id,hqicon)

                icon && ((document.getElementById("gamelogo")! as HTMLImageElement).src = await convertICO(icon(hqicon),tempdir) || icon())
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
