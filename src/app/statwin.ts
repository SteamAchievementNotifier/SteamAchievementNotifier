import { ipcRenderer, webFrame } from "electron"
import fs from "fs"
import path from "path"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { cssreplacemap, cssrevreplacemap } from "./keycodes"
import Sortable from "sortablejs"

declare global {
    interface Window {
        appid: number,
        statsobj: StatsObj | null,
        translations: StatsObjTranslations | null
    }
}

const zoomlvl = localStorage.getItem("statwinzoomlvl")
webFrame.setZoomLevel((zoomlvl && JSON.parse(zoomlvl)) || 0)

const getzoomchange = (code: string) => {
    switch (code) {
        case "Equal":
        case "NumpadAdd": return 1
        case "Minus":
        case "NumpadSubtract": return -1
        case "Digit0":
        case "Numpad0": return 0
        default: return null
    }
}

window.onkeydown = event => {
    if (!event.ctrlKey && !event.metaKey) return

    const zoomchange = getzoomchange(event.code)
    if (zoomchange === null) return

    const zoomlvl = zoomchange === 0 ? 0 : Math.floor(webFrame.getZoomLevel() + zoomchange)

    // Remap "zoom in" to `CTRL+=`, instead of `CTRL+Shift+=`
    ;(event.code === "Equal" && event.shiftKey) ? event.preventDefault() : webFrame.setZoomLevel(zoomlvl)
    localStorage.setItem("statwinzoomlvl",`${zoomlvl}`)
}

window.addEventListener("beforeunload",() => localStorage.setItem("statwinzoomlvl",`${webFrame.getZoomLevel()}`))

// Placeholder elements to ignore
const ignore = [
    "placeholder",
    "complete"
]

window.appid = 0
window.statsobj = null
window.translations = null

const getapiname = (elem: Element,ra?: boolean) => ra ? elem.id.replace(/^ACH\_/,"") : esc(elem.id.replace(/^ACH\_/,""),true)

const maxdisplay = (appid: number,max: number,filter: Element[]) => {
    const achievements: StatsEntry[] = JSON.parse(localStorage.getItem("statwin") || "{}")[appid]
    return filter
        .filter(elem => achievements.some(achievement => achievement.apiname === getapiname(elem)))
        .slice(0,max)
}

const shoulddisplay = (unlocked: boolean) => document.body.getAttribute("displaymode") === "locked" ? !unlocked : unlocked

const sortbyunlocktimestamp = (a: StatsEntry,b: StatsEntry) => {
    if (a.unlocktimestamp === -1 && b.unlocktimestamp !== -1) return 1
    if (b.unlocktimestamp === -1 && a.unlocktimestamp !== -1) return -1

    return b.unlocktimestamp - a.unlocktimestamp
}

const sortachievementlist = (a: string,b: string,order: StatsEntry[],displaymode: "locked" | "unlocked") => {
    if (displaymode === "unlocked") {
        const entrya = order.find(entry => entry.apiname === a)!
        const entryb = order.find(entry => entry.apiname === b)!

        if (!entrya || !entryb) return 0

        return sortbyunlocktimestamp(entrya,entryb) // Sort by unlock timestamp
    }

    const indexa = order.findIndex(entry => entry.apiname === a)
    const indexb = order.findIndex(entry => entry.apiname === b)

    return indexa - indexb // Sort by localStorage/manual Sortable order
}

const setmaxachievements = (elem: HTMLSelectElement | HTMLInputElement,order: StatsEntry[],displaymode: "locked" | "unlocked") => {
    try {
        if (!window.appid) throw new Error(`No game detected by "statwin"`)
        
        const achievementswrapper = document.getElementById("achievements")!
        const filter = Array.from(achievementswrapper.children)
            .filter(achelem => {
                if (ignore.includes(achelem.id)) return false
                return shoulddisplay(achelem.getAttribute("unlocked") === "true")
            })
            .sort((a,b) => {
                const apinamea = getapiname(a)
                const apinameb = getapiname(b)

                return sortachievementlist(apinamea,apinameb,order,displaymode)
            })
            
        const value = elem.value === "max" ? filter.length : parseInt(elem.value)

        const displayed = maxdisplay(window.appid,value,filter)
        if (!displayed) throw new Error(`No achievements were found in localStorage for AppID "${window.appid}"`)
    
        for (const achievement of filter) {
            achievement.toggleAttribute("nodisplay",!displayed.includes(achievement))
        }
    
        const config = sanconfig.get()
        config.set(`statwin${elem.id}`,elem.value)
    } catch (err) {
        log.write("WARN",err as Error)
    }
}

// If `config.noiconcache` is active, the `grey` version of the icon will be cached, so return `null` to re-cache color version
const isiconcached = (achievement: Achievement,noiconcache?: boolean) => {
    const cachedicon = path.join(sanhelper.temp,`${achievement.apiname}.jpg`).replace(/\\/g,"/")
    return fs.existsSync(cachedicon) && !noiconcache ? cachedicon : null
}

const cacheicon = async (achievement: Achievement) => {
    return new Promise<string>(resolve => {
        ipcRenderer.once(`iconpath_${achievement.apiname}`,(event,iconpath: string | null) => {
            if (iconpath) return resolve(iconpath.replace(/\\/g,"/"))

            log.write("WARN",`Unable to get achievement icon for "${achievement.apiname}"`)
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
    progressbar.toggleAttribute("complete",total !== 0 && unlocked === total)
}

const esc = (str: string,unesc?: boolean,iconpath?: boolean): string => {
    if (unesc) {
        for (const [value,key] of cssrevreplacemap) {
            str = str.replace(new RegExp(value,"g"),key)
        }

        return str
    }

    return str.replace(/([\s!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~])/g,match => !iconpath ? (cssreplacemap.get(match) || match) : `\\${match}`)
}

const unlocked = new Map<string,boolean>()
let ramode: "hard" | "soft" = "hard" // Default to Hardcore mode

const buildachievementlist = (statsobj: StatsObj,translations: StatsObjTranslations,init?: boolean) => {
    window.statsobj = statsobj
    window.translations = translations

    const { appid, gamename, achievements, ra, mode } = statsobj
    const { nogame, noachievements, startgame } = translations

    const gamenamewrapper = document.getElementById("gamename")!
    const achievementswrapper = document.getElementById("achievements")!
    const progressbar = document.getElementById("progressbar")!
    const placeholder = document.getElementById("placeholder")!
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

    window.appid = appid

    if (!appid) {
        ramode = "hard" // Reset to default Hardcore mode on game exit
        unlocked.clear() // Clear all achievements from `unlocked` on game exit
        ipcRenderer.send("extwinsstate",{ win: "stat", state: null } as ExtWinsPayload) // Clear `extwinsstate.stat` platform on game exit
        
        gamenamewrapper.textContent = nogame
        placeholder.querySelector("span:first-child")!.textContent = noachievements
        placeholder.querySelector("span:last-child")!.textContent = startgame

        document.getElementById("maxcustom")!.setAttribute("max",`1`)
        document.body.removeAttribute("reorder")
        progressbar.removeAttribute("complete")

        return ["unlocked","total"].forEach(id => document.documentElement.style.setProperty(`--${id}`,"0"))
    }

    gamenamewrapper.textContent = gamename

    if (!achievements) return

    if (!!init) {
        ra && mode && (ramode = mode)
        unlocked.clear()
        ipcRenderer.send("extwinsstate",{ win: "stat", state: ra ? "ra" : "steam" } as ExtWinsPayload)

        // On game/`statwin` launch, set latest achievement unlocked status in `unlock` Map
        for (const achievement of achievements) {
            unlocked.set(`${(achievement as any)[ra ? "id" : "apiname"]}`,achievement.unlocked)
        }
    }
    
    const { rarity, statwinnospoilers, statwindisplaymode } = sanconfig.get().store

    updateprogressbar(achievements,progressbar)

    document.body.toggleAttribute("nospoilers",statwinnospoilers)
    document.getElementById("maxcustom")!.setAttribute("max",`${achievements.length}`)

    let lsentry: Record<string,StatsEntry[]> = JSON.parse(localStorage.getItem("statwin") || "{}")

    if (!lsentry[appid]) {
        const statwinobj: Record<string,StatsEntry[]> = {
            ...lsentry,
            [appid]: achievements.map(achievement => {
                return {
                    apiname: `${ra ? (achievement as any).id : achievement.apiname}`,
                    unlocktimestamp: achievement.unlocktimestamp ?? -1
                }
            })
        }

        localStorage.setItem("statwin",JSON.stringify(statwinobj,null,4))
        lsentry = JSON.parse(localStorage.getItem("statwin") || "{}")
    }

    for (const achievement of achievements) {
        const apiname = `${ra ? (achievement as any).id : achievement.apiname}`
        const entry = lsentry[appid].find(entry => entry.apiname === apiname)

        if (!entry) continue
        entry.unlocktimestamp = achievement.unlocktimestamp ?? entry.unlocktimestamp
    }

    localStorage.setItem("statwin",JSON.stringify(lsentry,null,4))

    const order = lsentry[appid]

    achievements
    .sort((a,b) => {
        const apinamea = `${ra ? (a as any).id : a.apiname}`
        const apinameb = `${ra ? (b as any).id : b.apiname}`

        return sortachievementlist(apinamea,apinameb,order,statwindisplaymode)
    })
    .forEach(async achievement => {
        const html = `
            <div class="wrapper achievement" id="ACH_${ra ? (achievement as any).id : esc(achievement.apiname)}" unlocked="${achievement.unlocked}" rarity="${parseFloat(ra ? (achievement as any)[`${ramode}corepercent`] : achievement.percent.toFixed(1)) <= rarity ? "rare" : "main"}" ${achievement?.hidden ? "hidden" : ""}>
                <div class="inner">
                    <div class="wrapper icon"></div>
                    <div class="wrapper text">
                        <span>${ra ? (achievement as any).title : achievement.name}</span>
                        <span>${ra ? (achievement as any).description : achievement.desc}</span>
                    </div>
                    <span class="handle">⁝⁝</span>
                </div>
            </div>
        `

        achievementswrapper.insertAdjacentHTML("beforeend",html)

        const achid = `${ra ? (achievement as any).id : achievement.apiname}`
        const achelem = achievementswrapper.querySelector(`.achievement#ACH_${ra ? achid : esc(achid)}`) as HTMLElement
        
        // If icon does not exist in `temp` dir, cache it
        achelem.style.setProperty("--icon",`url('${ra ? (achievement as any).icon : esc(isiconcached(achievement) || await cacheicon(achievement),false,true)}')`)

        const wasunlocked = unlocked.get(achid) ?? false
        const isunlocked = achievement.unlocked

        // Update last achievement unlocked status in `unlocked` Map
        unlocked.set(achid,isunlocked)
        achelem.toggleAttribute("nodisplay",!shoulddisplay(isunlocked))
        
        if (isunlocked && !wasunlocked) {
            achievementswrapper.prepend(achelem)

            achelem.removeAttribute("nodisplay")
            achelem.setAttribute("playing","")

            const anim = statwindisplaymode === "locked" ? "shift" : "unlocked"

            const animhandler = (event: AnimationEvent) => {
                if (event.animationName !== anim) return

                achelem.removeAttribute("playing")
                achelem.removeAttribute("removing")
                statwindisplaymode === "locked" && achelem.setAttribute("nodisplay","")
                achelem.removeEventListener("animationend",animhandler)
            }

            statwindisplaymode === "locked" && achelem.setAttribute("removing","")
            achelem.addEventListener("animationend",animhandler)
        }
    })

    Sortable.create(achievementswrapper,{
        handle: ".handle",
        animation: 200,
        onEnd: event => localStorage.setItem("statwin",JSON.stringify({
            ...lsentry,
            [appid]: Array.from(event.to.children).filter(elem => !ignore.includes(elem.id)).map(elem => {
                const apiname = esc(getapiname(elem))
                
                return {
                    apiname,
                    unlocktimestamp: order.find(entry => entry.apiname === apiname)?.unlocktimestamp ?? -1
                }
            })
        },null,4))
    })

    setmaxachievements(select.value === "custom" ? input : select,order,statwindisplaymode)
}

ipcRenderer.on("stats",(event,statsobj: StatsObj,translations: StatsObjTranslations,init?: boolean) => buildachievementlist(statsobj,translations,init))
ipcRenderer.on("statwinaot",(event,value: boolean) => document.body.toggleAttribute("aot",value))

window.addEventListener("DOMContentLoaded",() => {
    document.getElementById("close")!.onclick = () => window.close()
    document.getElementById("reorder")!.onclick = () => document.body.toggleAttribute("reorder",!document.body.hasAttribute("reorder"))
    document.getElementById("spoilers")!.onclick = () => {
        const config = sanconfig.get()
        const value = !config.get("statwinnospoilers")

        config.set("statwinnospoilers",value)
        log.write("INFO",`"statwin" updated to ${value ? "hide" : "show"} spoilers`)

        document.body.toggleAttribute("nospoilers",value)
    }

    document.body.setAttribute("displaymode",sanconfig.get().store.statwindisplaymode)

    document.getElementById("displaymode")!.onclick = () => {
        document.body.removeAttribute("reorder")
        
        const config = sanconfig.get()
        const displaymode = config.get("statwindisplaymode") === "locked" ? "unlocked" : "locked"

        config.set("statwindisplaymode",displaymode)
        log.write("INFO",`"statwin" updated to display ${displaymode} achievements`)

        document.body.setAttribute("displaymode",`${displaymode}`)
        
        window.statsobj && window.translations && buildachievementlist(window.statsobj,window.translations,true)
    }

    const winopacity = document.getElementById("winopacity")!
    document.body.toggleAttribute("hidden",sanconfig.get().store.statwinopacity)
    
    winopacity.onclick = () => {
        const config = sanconfig.get()
        const value = !config.get("statwinopacity")

        config.set("statwinopacity",value)

        document.body.toggleAttribute("hidden",value)
    }

    const maxdisplayelem = document.getElementById("maxdisplay") as HTMLSelectElement
    maxdisplayelem.value = `${sanconfig.get().store.statwinmaxdisplay}`

    maxdisplayelem.onchange = event => {
        const { statwindisplaymode } = sanconfig.get().store
        const lsitem = JSON.parse(localStorage.getItem("statwin") || "{}")

        const select = event.target as HTMLSelectElement
        const input = document.getElementById("maxcustom") as HTMLInputElement
        const elem = select.value === "custom" ? input : select

        setmaxachievements(elem,lsitem[window.appid],statwindisplaymode)
    }

    const maxcustomelem = document.getElementById("maxcustom") as HTMLInputElement
    let current = sanconfig.get().store.statwinmaxcustom
    maxcustomelem.value = `${current}`

    maxcustomelem.onchange = event => {
        const { statwindisplaymode } = sanconfig.get().store
        const lsitem = JSON.parse(localStorage.getItem("statwin") || "{}")

        const input = event.target as HTMLInputElement
        if (!input.value || parseInt(input.value) > parseInt(input.max) || parseInt(input.value) < 1) return input.value = `${current}`

        current = parseInt(input.value)
        setmaxachievements(input,lsitem[window.appid],statwindisplaymode)
    }

    ipcRenderer.send("statwinready")
    if (!sanhelper.devmode) return
    
    document.getElementById("placeholder")!.onclick = event => {
        const target = event.target as HTMLElement
        const value = target.getAttribute("unlocked") === "true"
        target.setAttribute("unlocked",`${!value}`)
    }
})