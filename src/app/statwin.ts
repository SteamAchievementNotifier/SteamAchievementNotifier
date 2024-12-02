import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import Sortable from "sortablejs"

// Placeholder elements to ignore
const ignore = [
    "placeholder",
    "complete"
]

let globalappid = 0

const getapiname = (elem: Element) => elem.id.replace(/^ACH\_/,"")

const maxdisplay = (appid: number,max: number,filter: Element[]) => {
    const achievements: string[] = JSON.parse(localStorage.getItem("statwin")!)[appid]
    return filter
        .filter(elem => achievements.includes(getapiname(elem)))
        .slice(0,max)
}

const setmaxachievements = (elem: HTMLSelectElement | HTMLInputElement,order: string[]) => {
    try {
        if (!globalappid) throw new Error(`No game detected by "statwin"`)
        
        const achievementswrapper = document.getElementById("achievements")!
        const filter = Array.from(achievementswrapper.children)
            .sort((a,b) => order.indexOf(getapiname(a)) - order.indexOf(getapiname(b)))
            .filter(achievement => !ignore.includes(achievement.id) && achievement.getAttribute("unlocked") !== "true")
    
        const value = elem.value === "max" ? filter.length : parseInt(elem.value)
    
        const displayed = maxdisplay(globalappid,value,filter)
        if (!displayed) throw new Error(`No achievements were found in localStorage for AppID "${globalappid}"`)
    
        for (const achievement of filter) {
            achievement.toggleAttribute("nodisplay",!displayed.includes(achievement))
        }
    
        const config = sanconfig.get()
        config.set(`statwin${elem.id}`,elem.value)
    } catch (err) {
        log.write("ERROR",err as Error)
    }
}

// If `config.noiconcache` is active, the `grey` version of the icon will be cached, so return `null` to re-cache color version
const isiconcached = (achievement: Achievement,noiconcache?: boolean) => {
    const cachedicon = path.join(sanhelper.temp,`${achievement.apiname}.jpg`).replace(/\\/g,"/")
    return fs.existsSync(cachedicon) && !noiconcache ? cachedicon : null
}

const cacheicon = async (achievement: Achievement) => {
    return new Promise<string>(resolve => {
        ipcRenderer.once(`iconpath_${achievement.apiname}`, (event,iconpath: string | null) => {
            if (iconpath) return resolve(iconpath.replace(/\\/g,"/"))

            log.write("ERROR",`Unable to get achievement icon for "${achievement.apiname}"`)
            resolve(sanhelper.setfilepath("img","sanlogosquare.svg"))
        })

        ipcRenderer.send("statwinicon",achievement)
    })
}

const updateprogressbar = (achievements: Achievement[],progressbar: HTMLElement) => {
    const unlocked = achievements.filter(achievement => achievement.unlocked).length
    const total = achievements.length

    document.documentElement.style.setProperty("--unlocked",`${unlocked}`)
    document.documentElement.style.setProperty("--total",`${total}`)
    progressbar.toggleAttribute("complete",unlocked === total)
}

// Send achievement translations when "Use Steam UI Language" option is enabled
// Test adding `ss` versions of used notifications instead of generic achievement (using `base.ts`/`sselems` from config)
ipcRenderer.on("stats",(event,statsobj: StatsObj,translations: StatsObjTranslations) => {
    const { appid, gamename, achievements } = statsobj
    const { nogame, noachievements, startgame } = translations
    // const { nogame, noachievements, startgame, congrats, gamecompletedesc } = translations

    const gamenamewrapper = document.getElementById("gamename")!
    const achievementswrapper = document.getElementById("achievements")!
    const progressbar = document.getElementById("progressbar")!
    const placeholder = document.getElementById("placeholder")!
    // const complete = document.getElementById("complete")!
    const select = document.getElementById("maxdisplay")! as HTMLSelectElement
    const input = document.getElementById("maxcustom")! as HTMLInputElement

    select.querySelectorAll("option").forEach(opt => {
        if (!["max","custom"].includes(opt.value)) return
        opt.textContent = translations[opt.value as "max" | "custom"]
    })

    gamenamewrapper.toggleAttribute("appid",!!appid)
    Array.from(achievementswrapper.children)
        .filter(node => !ignore.includes(node.id))
        .forEach(node => node.remove())

    globalappid = appid

    if (!appid) {
        gamenamewrapper.textContent = nogame
        placeholder.querySelector("span:first-child")!.textContent = noachievements
        placeholder.querySelector("span:last-child")!.textContent = startgame
        // complete.querySelector("span:first-child")!.textContent = congrats
        // complete.querySelector("span:last-child")!.textContent = gamecompletedesc

        document.getElementById("maxcustom")!.setAttribute("max",`1`)
        document.body.removeAttribute("reorder")
        progressbar.removeAttribute("complete")

        return ["unlocked","total"].forEach(id => document.documentElement.style.setProperty(`--${id}`,"0"))
    }

    gamenamewrapper.textContent = gamename

    if (!achievements) return
    
    const { rarity, statwinnospoilers } = sanconfig.get().store

    updateprogressbar(achievements,progressbar)

    document.body.toggleAttribute("nospoilers",statwinnospoilers)
    document.getElementById("maxcustom")!.setAttribute("max",`${achievements.length}`)

    let lsitem = JSON.parse(localStorage.getItem("statwin")!)

    if (!lsitem[appid]) {
        const lsentry = {
            ...lsitem,
            [appid]: achievements
                .sort((a,b) => Number(b.unlocked) - Number(a.unlocked))
                .map(achievement => achievement.apiname)
        }

        // Set the `lsentry` in "statwin" localStorage object, then get the new contents of `localStorage > "statwin"`
        localStorage.setItem("statwin",JSON.stringify(lsentry,null,4))
        lsitem = JSON.parse(localStorage.getItem("statwin")!)
    }

    achievements
    .sort((a,b) => lsitem[appid].indexOf(a.apiname) - lsitem[appid].indexOf(b.apiname))
    .forEach(async achievement => {
        const html = `
            <div class="wrapper achievement" id="ACH_${achievement.apiname}" unlocked="${achievement.unlocked}" rarity="${parseFloat(achievement.percent.toFixed(1)) <= rarity ? "rare" : "main"}" ${achievement.hidden ? "hidden" : ""}>
                <div class="inner">
                    <div class="wrapper icon"></div>
                    <div class="wrapper text">
                        <span>${achievement.name}</span>
                        <span>${achievement.desc}</span>
                    </div>
                    <span class="handle">⁝⁝</span>
                </div>
            </div>
        `

        achievementswrapper.insertAdjacentHTML("beforeend",html)

        const achelem = achievementswrapper.querySelector(`.achievement#ACH_${achievement.apiname}`) as HTMLElement

        // Move unlocked achievement to the top of the list
        achelem.addEventListener("animationstart",event => {
            if (event.animationName === "unlocked") {
                achelem.previousElementSibling && achievementswrapper.insertBefore(achelem,achelem.previousElementSibling)
            }
        })

        // If icon does not exist in `temp` dir, cache it
        achelem.style.setProperty("--icon",`url('${isiconcached(achievement) || await cacheicon(achievement)}')`)
    })

    Sortable.create(achievementswrapper,{
        handle: ".handle",
        animation: 200,
        onEnd: event => localStorage.setItem("statwin",JSON.stringify({
            ...lsitem,
            [appid]: Array.from(event.to.children)
                .filter(elem => !ignore.includes(elem.id))
                .map(elem => getapiname(elem))
        },null,4))
    })

    setmaxachievements(select.value === "custom" ? input : select,lsitem[appid])
})

ipcRenderer.on("statsunlock", async (event,achievement: Achievement,statsobj: StatsObj) => {
    const { noiconcache } = sanconfig.get().store
    const achievementswrapper = document.getElementById("achievements")!
    const progressbar = document.getElementById("progressbar")!

    const achelem = achievementswrapper.querySelector(`.achievement#ACH_${achievement.apiname}`) as HTMLElement | null
    if (!achelem) return ipcRenderer.send("stats",statsobj)

    const sendipc = (event: AnimationEvent) => {
        if (event.animationName === "shift") {
            achelem.removeAttribute("playing")
            ipcRenderer.send("stats",statsobj)
            achelem.removeEventListener("animationend",sendipc)
        }
    }

    // Reorder after unlocked achievement is set to `display: none` at end of animation
    // achelem.addEventListener("animationend",event => event.animationName === "shift" && ipcRenderer.send("stats",statsobj))
    achelem.addEventListener("animationend",sendipc)

    // Re-cache color icon if `grey` version is already present in `temp` dir
    achelem.style.setProperty("--icon",`url('${`${isiconcached(achievement,noiconcache) || await cacheicon(achievement)}?v=${Date.now()}`}')`)

    achelem.setAttribute("unlocked",`${achievement.unlocked}`)
    achelem.toggleAttribute("playing",achievement.unlocked)
    
    // Remove `nodisplay` attribute when unlocked, regardless of max number of achievements
    achelem.removeAttribute("nodisplay")

    // Update the progress bar before sending stats
    statsobj.achievements && updateprogressbar(statsobj.achievements,progressbar)
})

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("close")!.onclick = () => window.close()
    document.getElementById("winopacity")!.onclick = () => document.body.toggleAttribute("hidden",!document.body.hasAttribute("hidden"))
    document.getElementById("reorder")!.onclick = () => document.body.toggleAttribute("reorder",!document.body.hasAttribute("reorder"))
    document.getElementById("spoilers")!.onclick = () => {
        const config = sanconfig.get()
        const value = !config.get("statwinnospoilers")

        config.set("statwinnospoilers",value)
        log.write("INFO",`"statwin" updated to ${value ? "hide" : "show"} spoilers`)

        document.body.toggleAttribute("nospoilers",value)
    }

    const maxdisplayelem = document.getElementById("maxdisplay") as HTMLSelectElement
    maxdisplayelem.value = `${sanconfig.get().store.statwinmaxdisplay}`

    maxdisplayelem.onchange = event => {
        const lsitem = JSON.parse(localStorage.getItem("statwin")!)

        const select = event.target as HTMLSelectElement
        const input = document.getElementById("maxcustom") as HTMLInputElement
        const elem = select.value === "custom" ? input : select

        setmaxachievements(elem,lsitem[globalappid])
    }

    const maxcustomelem = document.getElementById("maxcustom") as HTMLInputElement
    let current = sanconfig.get().store.statwinmaxcustom
    maxcustomelem.value = `${current}`

    maxcustomelem.onchange = event => {
        const lsitem = JSON.parse(localStorage.getItem("statwin")!)

        const input = event.target as HTMLInputElement
        if (!input.value || parseInt(input.value) > parseInt(input.max) || parseInt(input.value) < 1) return input.value = `${current}`

        current = parseInt(input.value)
        setmaxachievements(input,lsitem[globalappid])
    }

    ipcRenderer.send("statwinready")
    if (!sanhelper.devmode) return
    
    document.getElementById("placeholder")!.onclick = event => {
        const target = event.target as HTMLElement
        const value = target.getAttribute("unlocked") === "true"
        target.setAttribute("unlocked",`${!value}`)
    }
})