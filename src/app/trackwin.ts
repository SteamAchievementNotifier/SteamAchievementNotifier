import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"

const getgameart = (gamename: string,type: "icon" | "library_hero",appid: number,steampath: string,steam3id: number,hqicon: string): string => {
    const heropath = (steam3id: number) => {
        const heroimgpath = path.join(steampath,"userdata",`${steam3id}`,"config","grid",`${appid}_hero`)
        const exts = ["jpg","png"]

        for (const ext of exts) {
            const heropath = `${heroimgpath}.${ext}`
            if (fs.existsSync(heropath)) return heropath
        }

        return null
    }

    let libcachefilepath: string | null = null

    const libcache = path.join(steampath,"appcache","librarycache")
    const files = [
        `${appid}_${type}.jpg`,
        `${type}.jpg`
    ] as const

    for (const file of files) {
        const filepaths: string[] = []

        const appiddir = path.join(libcache,`${appid}`)
        if (fs.existsSync(appiddir) && fs.statSync(appiddir).isDirectory()) {
            filepaths.push(path.join(appiddir,file))

            const subdirs = fs.readdirSync(appiddir).filter((subdir) => fs.statSync(path.join(appiddir,subdir)).isDirectory())

            for (const subdir of subdirs) {
                filepaths.push(path.join(appiddir,subdir,`${appid}_${type}.jpg`))
            }
        }

        for (const filepath of filepaths) {
            if (fs.existsSync(filepath)) {
                libcachefilepath = filepath
                break
            }
        }
    }

    const defaultheropath = path.join(libcache,`${appid}_${type}.jpg`)
    const gameart = (type === "library_hero" && heropath(steam3id) || type === "icon" && hqicon || libcachefilepath || defaultheropath).replace(/\\/g,"/")

    try {
        if (!fs.existsSync(gameart)) throw new Error(`"${gameart}" not found`)
        return gameart
    } catch (err) {
        ipcRenderer.send("trackwinerror",`Error loading "${type}" image for "${gamename}": ${err as Error}`)
        return ""
    }
}

const convertICO = async (file: string,tempdir: string,__root: string) => {
    if (path.extname(file) !== ".ico") return file

    const iconpng = path.join(tempdir,"gameicon.png")
    if (fs.existsSync(iconpng)) return iconpng

    const { parse } = await import(`${__root}/node_modules/icojs`)
    
    const buffer = fs.readFileSync(file)
    const layers = await parse(buffer,"image/png")
    
    // @ts-ignore
    const hq = layers.reduce((max,current) => (current.width > max.width) ? current : max)

    try {
        fs.writeFileSync(iconpng,Buffer.from(hq.buffer))
        return iconpng
    } catch (err) {
        return null
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("trackwinclose"),{ once: true })

    ipcRenderer.once("gamename", async (event,text: string,gamename: string,appid: number,steampath: string,steam3id: number = 0,hqicon: string,tempdir: string,__root: string) => {
        document.querySelector(".wrapper#textcont > span")!.textContent = text

        if (gamename) {
            document.getElementById("gamename")!.textContent = gamename

            if (appid && steampath) {
                const icon = (hqicon?: string) => getgameart(gamename,"icon",appid,steampath,steam3id,hqicon || "")
                const hero = getgameart(gamename,"library_hero",appid,steampath,steam3id,hqicon)

                icon && ((document.getElementById("gamelogo")! as HTMLImageElement).src = await convertICO(icon(hqicon),tempdir,__root) || icon())
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
