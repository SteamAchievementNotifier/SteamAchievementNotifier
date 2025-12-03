import { ipcRenderer, shell } from "electron"
import path from "path"
import fs from "fs"
import { __root, sanhelper } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { sanconfig } from "./config"
import { usertheme } from "./usertheme"
import { language } from "./language"
import { update } from "./update"
import { sendwebhook } from "./webhook"
import { rasupported } from "./ra"

declare global {
    interface Window {
        sanhelper: object,
        config: any,
        gpu: Function
        monitors: Monitor[],
        appid: number,
        steam3id: number,
        update: Function,
        availabletest: Function
    }
}

const sanhelperlog = sanhelper.initlogger(path.join(sanhelper.appdata,"logs"))
log.write("INFO",sanhelperlog)

log.init("RENDERER")
dialog.init()

!sanhelper.beta && update.renderer()

const errorbtn = document.querySelector(`.menubtn#error`)! as HTMLButtonElement
errorbtn.onclick = () => {
    document.body.removeAttribute("error")
    ipcRenderer.send("logwin",sanhelper.logcontents(config.get("logtype")))
}

sanhelper.errorhandler(log)

const gpu = () => ipcRenderer.send("gpu")
window.gpu = gpu

const config = sanconfig.get(true)

if (sanhelper.devmode) {
    window.sanhelper = sanhelper
    window.config = config
}

(async () => language.load())()
sanhelper.tooltips(config.get("tooltips"))

document.getElementById("version")!.textContent = `Steam Achievement Notifier (V${sanhelper.version})`
document.getElementById("copyright")!.textContent = `Copyright © Jackson0ne ${new Date().getFullYear()}. All Rights Reserved.`

const btns = new Map<string,string>([
    ["kofi","https://ko-fi.com/steamachievementnotifier"],
    ["discord","https://discord.gg/FxCFtpd3eu"],
    ["github","https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues"]
])

btns.forEach((value,key) => (document.getElementById(key) as HTMLButtonElement)!.onclick = () => shell.openExternal(value))

sanhelper.noanim(config.get("noanim"))
sanhelper.trophymode(config.get("trophymode"),config)
sanhelper.createclosedstate()
config.set("logtype","san") // Reset App Log to "san.log" on launch

// Verifies all required localStorage objects (and creates if missing) on launch
;(async () => await sanhelper.verifylocalstorage([
    "linkgame",
    "themeswitch",
    "statwin",
    "pinned"
]))()

sanhelper.beta && sanhelper.checkbetastatus()

const getmonitors = async () => {
    try {
        const displays: Display[] = await sanhelper.getdisplays()
        const lsmons = localStorage.getItem("monitors")
        const prevmons: Monitor[] = lsmons ? JSON.parse(lsmons) : null
    
        const monitors: Monitor[] = displays.map(display => {
            return {
                id: display.id,
                label: display.label,
                primary: display.primary,
                bounds: {
                    width: Math.round(display.bounds.width * display.scaleFactor),
                    height: Math.round(display.bounds.height * display.scaleFactor)
                },
                scaleFactor: display.scaleFactor
            } as Monitor
        })

        config.set("monitors",monitors)
        window.monitors = monitors

        const currentmonitor = monitors.find(monitor => monitor.id === config.get("monitor")) || monitors[0]
        !config.get("lastknownmonitorlbl") && config.set("lastknownmonitorlbl",currentmonitor.label)

        refreshmonitors(monitors,prevmons)
        sanhelper.devmode && monitors.forEach(monitor => ipcRenderer.send("montest",monitor.id))
    
        return `Successfully updated "monitors" array`
    } catch (err) {
        throw `Error updating "monitors" array: ${err}`
    }
}

const setmonitors = async () => {
    try {
        const msg = await getmonitors()
        log.write("INFO",msg)
    } catch (err) {
        log.write("WARN",err as string)
    }
}

const refreshmonitors = (monitors: Monitor[],prevmons: Monitor[]) => {
    const getmonid = (type: "id" | "themeswitch",id: number,str: string) => {str
        try {
            const match = monitors.find(monitor => config.get("lastknownmonitorlbl") === monitor.label) || monitors.find(monitor => monitor.id === id)

            if (match) {
                log.write("INFO", `Monitor found in "monitors" array for "${match.label}" (${match.id}) used as ${str}`)
                return match.id
            }
    
            const prevmon = prevmons.find(prevmon => prevmon.id === id)
            if (!prevmon) throw new Error(`[MONERR] Monitor "id" (${id}) not found in previous "monitors" object for ${str}`)
                
            const newmon = monitors.find(monitor => monitor.label === prevmon.label)
            if (!newmon) throw new Error(`[MONERR] No monitor matching "${prevmon.label}" found in "monitors" array`)
    
            if (prevmon.id !== newmon.id) {
                log.write("INFO",`"id" for "${prevmon.label}" updated from "${prevmon.id}" to "${newmon.id}" for ${str}`)
                return newmon.id
            }

            return id
        } catch (e) {
            const err = e as Error

            if (err.message.startsWith(`[MONERR]`)) {
                const primarymon = monitors.find(monitor => monitor.primary)

                if (primarymon) {
                    log.write("WARN",`Monitor "id" (${id}) not found in previous "monitors" object for ${str} - resetting to primary monitor...`)
                    return primarymon.id
                }
            }

            log.write("ERROR",err.message.replace(/^\[MONERR\]\s/,""))
            return type === "id" ? -1 : id
        }
    }

    const checkmonitor = (id: number) => getmonid("id",id,`"monitor" in config`)

    const checkthemeswitch = (themeswitch: { [key: string]: ThemeSwitch }) => {    
        return Object.fromEntries(Object.entries(themeswitch).map(([key,value]) => {
            const src = getmonid("themeswitch",value.src,`"src" in "themeswitch" for AppID ${key}`)
            
            if (src !== value.src) return [key,{ themes: { ...value.themes }, src } as ThemeSwitch]
            return [key,value]
        }))
    }

    const newmon = checkmonitor(config.get("monitor"))

    if (newmon !== -1) {
        config.set("monitor",newmon)
    } else {
        const primarymon = monitors.find(monitor => monitor.primary)

        if (primarymon) {
            config.set("monitor",primarymon.id)
            log.write("WARN",`Unable to find matching monitor by "id" in "monitors" array. "monitor" value was reset to primary display in config`)
        } else {
            log.write("ERROR",`Unable to find primary monitor in "monitors" array. "monitor" value cannot be updated or reset in config`)
        }
    }

    localStorage.setItem("monitors",JSON.stringify(monitors))
    log.write("INFO",`"monitors" localStorage object updated`)

    const newswitchmon = checkthemeswitch(JSON.parse(localStorage.getItem("themeswitch")!) as { [key: string]: ThemeSwitch })
    localStorage.setItem("themeswitch",JSON.stringify(newswitchmon))
}

window.addEventListener("DOMContentLoaded", () => setTimeout(() => {
    setmonitors()

    // Init renderer shortcuts on launch
    ipcRenderer.send("shortcut",true)
},100))

ipcRenderer.on("displaysupdated", () => {
    setmonitors()

    ipcRenderer.once("monitorsupdated", () => sanhelper.updatetabs())
    ipcRenderer.send("monitorsupdated")

    document.getElementById("webhookwrapper")?.remove()
})

config.onDidAnyChange((newobj: any) => {
    config.store = newobj
    ipcRenderer.send("configupdated",newobj)
    document.querySelector("dialog") && sanhelper.updatetabs()
})

usertheme.update()

document.getElementById("usertheme")!.onclick = async () => {
    const type = sanhelper.type
    dialog.open({
        type: "selection",
        title: `${await language.get("select")} ${await language.get(`${type}`)} ${await language.get("theme",["customiser","theme","content"])}`,
        icon: sanhelper.setfilepath("icon","stars.svg"),
        buttons: config.get(`customisation.${type}.usertheme`) as Button[]
    })
}

document.getElementById("settings")!.onclick = () => dialog.open({
    type: "menu",
    title: "settings"
})

let webview: Electron.WebviewTag | null = null
let nopreview: HTMLSpanElement | null = null

const removeelems = (elems: (Electron.WebviewTag | HTMLSpanElement | null)[]) => {
    elems.forEach((elem: Electron.WebviewTag | HTMLSpanElement | null) => {
        if (elem) {
            elem.remove()
            elem = null
        }
    })
}

const defaults = {
    width: 700,
    height: 500
}

const resizewebview = () => {
    if (!webview) return

    const { innerWidth: width, innerHeight: height } = window
    const scale = Math.max(Math.min(width / defaults.width,height / defaults.height),0.75)
    return webview.shadowRoot!.querySelector("iframe")!.style.scale = `${scale}`
}

const loadwebview = () => {
    try {
        (sanhelper.devmode && webview) && webview.closeDevTools()
        pause = false
        document.querySelector("#webviewbtns > #playback")!.toggleAttribute("paused",pause)
    
        const type = sanhelper.type as NotifyType
    
        return new Promise<void>(resolve => {
            removeelems([webview,nopreview])
            resolve()
        })
        .then(async () => {
            const os = config.get(`customisation.${type}.preset`) === "os"
    
            if (os) {
                nopreview = document.createElement("span")
                nopreview.id = "nopreview"
                nopreview.textContent = await language.get("nopreview")
                return webview = null
            }
    
            if (config.get("usecustomfiles")) {
                const presetsdir = fs.readdirSync(path.join(sanhelper.appdata,"customfiles","notify","presets")).filter(file => file !== "presets.json")
                const presetnames = JSON.parse(fs.readFileSync(path.join(sanhelper.appdata,"customfiles","notify","presets","presets.json")).toString())
                const ordered = Object.keys(presetnames).filter(preset => presetsdir.includes(preset))
                const presetbox = document.querySelector("select#preset")! as HTMLSelectElement
    
                presetbox.innerHTML = ""
    
                ordered.forEach(preset => {
                    const opt = document.createElement("option")
                    opt.value = preset
                    opt.textContent = presetnames[preset] || preset
                    presetbox.appendChild(opt)
                })
            }
    
            webview = document.createElement("webview") as Electron.WebviewTag
            webview.webpreferences = "nodeIntegration=true, contextIsolation=false"
            webview.src = config.get("usecustomfiles") ? path.join(sanhelper.appdata,"customfiles","notify","base.html") : path.join(__root,"notify","base.html");
            webview.style.opacity = "0"
            webview.shadowRoot!.querySelector("iframe")!.style.width = "auto"
    
            window.addEventListener("resize",resizewebview)
    
            const cmds = new Map<string,string>([
                ["scale",`"0.75"`],
                ["overflow",`"visible"`]
            ])
    
            const scaledpresets = [
                "xqjan"
            ]
    
            // Fixes an issue where the font size is displayed smaller in Customiser Previews, due to scaling used on these presets
            scaledpresets.forEach(preset => config.get(`customisation.${type}.preset`) === preset && cmds.set("fontSize",`"clamp(0.05rem,0.05rem + 4.25vmax,12.5rem)"`))
    
            webview.addEventListener("dom-ready", () => {
                resizewebview()
                cmds.forEach((value,key) => webview!.executeJavaScript(`document.documentElement.style.${key} = ${value}`))
    
                // Fixes an issue where the "Glow" effect gets cut off in Customiser Previews when used in conjunction with the "Mask" option, due to scaling used on these presets
                scaledpresets.forEach(preset => config.get(`customisation.${type}.preset`) === preset && webview!.executeJavaScript(`document.body.style.width = "calc(100vw + 50px)"`))
            })
        })
        .catch(err => log.write("ERROR",err as Error))
        .finally(() => {
            document.querySelector(".wrapper#webview > .wrapper")!.appendChild(webview || nopreview!)
            webview && webview.addEventListener("dom-ready",sendtestnotify)
        })
    } catch (err) {
        !(err as Error).message.startsWith("The WebView must be attached to the DOM") && log.write("WARN",err as Error)
    }
}

const getaudiofile = (mode: "file" | "folder",filepath: string) => {
    if (mode === "file") return filepath

    const sounddir = filepath as string || path.join(__root,"sound")
    const dirfiles = fs.readdirSync(sounddir)
    const valid: (string | null)[] = []

    for (const file of dirfiles) {
        const filepath = path.join(sounddir,file).replace(/\\/g,"/")
        sanhelper.audioextensions.includes(path.extname(file)) && fs.statSync(filepath).size && valid.push(filepath)
    }

    !valid.length && valid.push(null)

    return valid[Math.floor(Math.random() * valid.length)]
}

const handleaudio = (keypath: string,audio: HTMLAudioElement,elem?: HTMLElement) => {
    const soundmode = config.get(`${keypath}.soundmode`) as "file" | "folder"
    const type = keypath.replace(/^customisation\./,"") as NotifyType

    audio.src = getaudiofile(soundmode,config.get(`${keypath}.sound${soundmode === "file" ? "file" : "dir"}`) as string) || sanhelper.setfilepath("sound",`notify${type !== "main" ? `_${type}` : ""}.wav`)
    audio.volume = (config.get(`${keypath}.volume`) as number) / 100

    // Add transition time when `config.audiosrc` is set to "app" to prevent sound playing before notification appears
    setTimeout(() => audio.play(),!webview ? 250 : 0)

    if (elem) {
        elem.setAttribute("playing","")
        elem.onclick = () => audio.dispatchEvent(new Event("ended"))
    }

    return
}

let pause = false

const playback = () => {
    pause = !pause
    document.querySelector("#webviewbtns > #playback")!.toggleAttribute("paused",pause)
    webview && webview.send("playback",pause)
}

const sendsswin = async (type: NotifyType,customisation: Customisation,src: number) => ipcRenderer.send("sswin",await notifyinfo(type,customisation),src)

// Array of option ids to disable when `config.nohwa` is enabled
const nohwa = [
    "extwinshow"
]

window.addEventListener("tabchanged", async ({ detail }: CustomEventInit) => {
    const synced = usertheme.issynced(config)
    const type = detail.type as NotifyType
    const keypath = `customisation.${type}`

    let customisation = config.get(keypath) as Customisation
    let src = config.get("monitor")

    if (window.appid) {
        const { themeswitchcustomisation, themeswitchsrc } = usertheme.themeswitchinfo(config,window.appid,{ customisation, type, getsrc: true })
        customisation = themeswitchcustomisation || customisation
        src = themeswitchsrc || src
    }

    const settingscontent = document.querySelector("dialog[menu] #settingscontent")

    if (settingscontent) {
        settingscontent.querySelectorAll(`#settingscontent .opt > input[type="checkbox"], #settingscontent .opt > .sub > input[type="checkbox"]`).forEach(opt => sanhelper.getcheckbox(config,opt,(opt as HTMLElement).parentElement?.hasAttribute("customisation") ? keypath : null))
        settingscontent.querySelectorAll(`#settingscontent .opt:has(input[type="checkbox"]) > *`).forEach(opt => (opt as HTMLElement).onclick = (event: Event) => sanhelper.setcheckbox(config,event,(opt as HTMLElement).parentElement?.hasAttribute("customisation") ? keypath : null))
        settingscontent.querySelectorAll(`#settingscontent .opt > input[type="range"], #settingscontent .opt > select`).forEach(elem => sanhelper.setvalue(config,elem,(elem as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        settingscontent.querySelectorAll(`#settingscontent .opt > .optbtn`).forEach(btn => sanhelper.setbtn(config,btn,(btn as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        settingscontent.querySelectorAll(`#settingscontent .cont:has(.title#ra) .opt:has(input[type="text"]) > input,#settingscontent .cont:has(.title#ra) .opt:has(input[type="password"]) > input`).forEach(input => sanhelper.setvalue(config,input,null))
        ;(settingscontent.querySelector("#sspreview") as HTMLButtonElement).onclick = async () => sendsswin(type,(synced ? usertheme.syncedtheme(config,config.get(keypath) as Customisation) : customisation) as Customisation,src)
        ;(settingscontent.querySelector("#replaynotify") as HTMLButtonElement).onclick = () => ipcRenderer.send("replaynotify")
        settingscontent.querySelector("#ralastachievement > span:nth-child(2)")!.textContent = localStorage.getItem("ralastachievement")
        ;(settingscontent.querySelector(".wrapper#ralastachievement > button") as HTMLButtonElement).onclick = () => {
            try {
                localStorage.setItem("ralastachievement","0")
                log.write("INFO",`"ralastachievement" cleared successfully`)
                settingscontent.querySelector("#ralastachievement > span:nth-child(2)")!.textContent = localStorage.getItem("ralastachievement")
            } catch (err) {
                log.write("ERROR",`Unable to clear "ralastachievement": ${err}`)
            }
        }
        settingscontent.querySelector(".opt:has(#notifymax)")!.toggleAttribute("extwin",config.get("extwin"))

        const exclusionlist = settingscontent.querySelector("button#exclusionlist") as HTMLButtonElement
        const listmode = settingscontent.querySelector("button#listmode") as HTMLButtonElement
        const listmodevalue = `${config.get("inclusionlist") ? "in" : "ex"}clusion`
        
        exclusionlist.textContent = await language.get(`${listmodevalue}list`,["settings","games","content"])
        listmode.setAttribute("mode",listmodevalue)
        
        listmode.onclick = async () => {
            const { inclusionlist } = config.store
            const value = !inclusionlist
            const listmodevalue = `${value ? "in" : "ex"}clusion`
            
            config.set("inclusionlist",value)
            
            exclusionlist.textContent = await language.get(`${listmodevalue}list`,["settings","games","content"])
            listmode.setAttribute("mode",listmodevalue)

            sanhelper.tooltips(config.get("tooltips"))
        }

        const { elemselector } = await import("./elemselector")
        elemselector(settingscontent.querySelector("#settingscontent .wrapper:has(> input#ovmatch)")!,"sselems")

        const { webhookwrapper } = await import("./webhook")
        const setwebhookwrapper = () => {
            const wrapper = settingscontent.querySelector("#webhookwrapper")
            wrapper && wrapper.remove()

            return config.get("webhooks") && webhookwrapper(settingscontent.querySelector(`.wrapper:has(> #webhooks)`)!)
        }

        requestAnimationFrame(setwebhookwrapper)
        sanhelper.loadraemus(rasupported,config)

        synced && settingscontent.setAttribute("synced",synced)
        
        const synclbl = settingscontent.querySelector(".synclbl")
        synclbl && synced && (synclbl.textContent = `${await language.get("syncedwith",["customiser","theme","content"])} ${await language.get((config.get("trophymode") ? "trophy" : "") + synced)}`)

        // Adds "soon" attribute to all ids in `nohwa` array when `config.nohwa` is enabled
        requestAnimationFrame(() => nohwa.forEach(id => settingscontent.querySelector(`.opt:has(#${id})`)!.toggleAttribute("soon",config.get("nohwa"))))
    }

    const customiser = document.querySelector("body[customiser]")

    if (customiser) {
        if (!detail.noreload) {
            loadwebview()
            ;(customiser.querySelector("#playback") as HTMLButtonElement).onclick = playback
            ;(customiser.querySelector("#replay") as HTMLButtonElement).onclick = loadwebview
        }

        sanhelper.trophymode(config.get("trophymode"),config,true)
        customiser.querySelector("#customisertablbl > span")!.textContent = await language.get((config.get("trophymode") ? "trophy" : "") + type)

        const scaleelem = customiser.querySelector("#customiser .opt:has(#scale)")!
        scaleelem.querySelector(".lockedlbl")!.textContent = `${(await language.get("lockedby")).replace("$lock",await language.get("notifymax",["settings","notifications","content"]))}`
        scaleelem.toggleAttribute("locked",config.get("notifymax") > 1)
        
        customiser.querySelectorAll(`#customisercontent .opt > input[type="checkbox"]`).forEach(elem => sanhelper.getcheckbox(config,elem,keypath))
        customiser.querySelectorAll(`#customisercontent .opt:has(input[type="checkbox"]) > span, #customisercontent .opt > input[type="checkbox"]`).forEach(opt => (opt as HTMLElement).onclick = (event: Event) => sanhelper.setcheckbox(config,event,keypath))
        customiser.querySelectorAll(`#customisercontent .opt > input[type="range"], #customisercontent .opt > input[type="color"], #customisercontent .opt > select, #customisercontent .opt > input[type="text"], #customisercontent .opt > input[type="number"]`).forEach(elem => sanhelper.setvalue(config,elem,keypath))
        customiser.querySelectorAll(`#customisercontent .opt > .optbtn`).forEach(btn => sanhelper.setbtn(config,btn,btn.id === "logo" || btn.id.includes("decoration") ? `${keypath}.customicons.${config.get(`${keypath}.preset`)}` : (btn.id === "plat" ? `${keypath}.customicons` : keypath)))
        customiser.querySelectorAll(`#customisercontent .opt > .delbtn`).forEach(btn => (btn as HTMLButtonElement).onclick = async () => {
            const optbtn = btn.parentElement!.querySelector(`.optbtn`) as HTMLButtonElement
            const preset = config.get(`customisation.${type}.preset`) as string
            const key = `${keypath}.${optbtn.classList.contains("customicon") ? `customicons.${optbtn.id === "plat" ? `plat` : `${config.get(`${keypath}.preset`)}.${(optbtn.id.includes("decoration") && Array.isArray(sanconfig.defaulticons.get(preset)!.decoration)) ? `decoration.${[parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1]}` : optbtn.id.replace(/\d/,"")}`}` : optbtn.id}`         

            const customiconkey = (): string => Array.isArray(key) ? key[parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1] as string : key as string
            const defaultvalue = (): string => {
                for (const id of (["","bronze","silver"] as const)) {
                    if (optbtn.id === `iconborderimg${id}`) return sanhelper.setfilepath("img",`saniconborder${id ? `_${id}` : ""}.png`)
                }

                if (optbtn.id === "plat") return sanhelper.setfilepath("img","ribbon.svg")
                if (optbtn.id === "maskimg") return sanhelper.setfilepath("img","san_trophy_mask.png")
                if (optbtn.id === "customimgicon") return sanhelper.setfilepath("img","sanlogosquare.svg")
                if (optbtn.id !== "logo" && !optbtn.id.includes("decoration")) return ""

                if (optbtn.id === "logo") return sanconfig.defaulticons.get(preset)!["logo"] as string
                if (Array.isArray(sanconfig.defaulticons.get(preset)!.decoration)) return sanconfig.defaulticons.get(preset)!.decoration![parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1] as string

                return sanconfig.defaulticons.get(preset)!.decoration as string
            }
            
            config.set(customiconkey(),defaultvalue())

            log.write("INFO",`"${customiconkey()}" reset`)
            sanhelper.updatetabs(optbtn.id === "soundfile" || optbtn.id === "sounddir")
        })

        const pinbtn = customiser.querySelector(`#customisercontent > #customiseropts .pinbtn`)! as HTMLButtonElement
        pinbtn.parentElement!.toggleAttribute("sticky",(JSON.parse(localStorage.getItem("pinned")!) as string[]).includes(pinbtn.nextElementSibling!.id))

        pinbtn.onclick = event => {
            const pinned = JSON.parse(localStorage.getItem("pinned")!) as string[]

            const parent = (event.target as HTMLButtonElement).parentElement!
            const elem = pinbtn.nextElementSibling!
            const value = !pinned.includes(elem.id)
            parent.toggleAttribute("sticky",value)

            localStorage.setItem("pinned",JSON.stringify(value ? [...pinned,elem.id] : pinned.filter(id => id !== elem.id),null,4))
        }

        const soundpreviewbtn = customiser.querySelector("#customisercontent button.rect#preview")! as HTMLButtonElement
        const audio = document.querySelector("audio")!
        
        soundpreviewbtn.onclick = () => handleaudio(keypath,audio,soundpreviewbtn)
        audio.onended = () => {
            audio.currentTime = 0
            audio.pause()

            soundpreviewbtn.removeAttribute("playing")
            soundpreviewbtn.onclick = () => handleaudio(keypath,audio,soundpreviewbtn)
        }

        // Presets that only use `#unlockmsg`/`#title` elements when < 2 lines are displayed via Customiser > Notification Elements
        const unlockmsgtitlepresets = [
            "xbox360",
            "ps4",
            "ps3",
            "gfwl"
        ]

        // Presets that only use `#title`/`#desc` elements when < 2 lines are displayed via Customiser > Notification Elements
        const titledescpresets = [
            "epicgames",
            "steamdeck",
            "ps5"
        ]

        document.querySelectorAll(".customopt:has(> #unlockmsgfontsize), .customopt:has(> #titlefontsize), .customopt:has(> #descfontsize)").forEach(async opt => {
            const { elems, preset } = config.store.customisation[type]
            const elem = opt.querySelector("input") as HTMLInputElement
            const elemid = elem.id.replace(/fontsize$/,"") as "unlockmsg" | "title" | "desc"
            
            if (elems) {
                const twolinepreset = elems.length <= 2 ? (unlockmsgtitlepresets.includes(preset) ? ["unlockmsg","title"] : titledescpresets.includes(preset) ? ["title","desc"] : null) : null
                const twolinepresettype = twolinepreset ? ["unlockmsg","title"].every(id => twolinepreset.includes(id)) ? "unlockmsg" : "title" : null
                const targetelem = document.querySelector(`.customopt:has(input#${twolinepreset ? (elems[0] === elemid ? twolinepreset[0] : twolinepreset[1]) : elemid}fontsize)`)!
                const inuse = elems.includes(elemid)

                const fontcolor = document.querySelector(`.customopt:has(input[type="color"]#${elem.id.replace(/size$/,"color")}) > input`)!
                let nocolor = ![...unlockmsgtitlepresets,...titledescpresets].includes(preset) && elems.length <= 2 && (elems.length > 1 ? fontcolor.id.startsWith("desc") : !fontcolor.id.startsWith("unlockmsg"))

                if (twolinepreset) {
                    const targetelemid = targetelem.querySelector("input")!.id // Gets the id of the actual element that will be displayed in the notification
                    const value = config.get(`customisation.${type}.${targetelemid}`) // Gets the config value of the actual element
                    
                    elem.value = `${value}` // Assigns the actual element's config value to the relevant slider
                    opt.setAttribute("value",`${value}`) // Sets the "value" attribute to the actual element's config value, instead of the current value

                    // On change of the current slider, override default behaviour of the current slider to update config with the actual element's value
                    // This way, we can keep the correctly labelled slider on screen while updating the relevant visual element's config value instead
                    elem.onchange = event => {
                        config.set(`customisation.${type}.${targetelemid}`,parseInt((event.target as HTMLInputElement).value))
                        sanhelper.updatetabs()
                    }

                    nocolor = (elems.length < 2 && ((twolinepresettype === "unlockmsg" && !fontcolor.id.startsWith("unlockmsg")) || (twolinepresettype === "title" && !fontcolor.id.startsWith("title")))) || (twolinepresettype === "unlockmsg" && fontcolor.id.startsWith("desc")) || (twolinepresettype === "title" && fontcolor.id.startsWith("unlockmsg"))
                }

                opt.toggleAttribute("soon",!inuse)
                fontcolor.parentElement!.toggleAttribute("soon",nocolor)
            }
        })

        document.querySelectorAll("button#setcustompos, button#resetcustompos")!.forEach(btn => (btn as HTMLButtonElement).onclick = () => {
            btn.id === "setcustompos" && document.getElementById("customiser")!.setAttribute("poswin","")
            ipcRenderer.send("custompos",type,btn.id === "resetcustompos")
        })

        const visibilitybtn = document.querySelector(".opt.visibility > .visibilitybtn")! as HTMLButtonElement
        const setvisibilityicon = (key: string) => document.documentElement.style.setProperty("--visibility",`url('${sanhelper.setfilepath("icon",`visibility${!config.get(`${keypath}.${key}`) ? "_off" : ""}.svg`)}')`)

        setvisibilityicon("previewhiddenicon")
        visibilitybtn.onclick = () => {
            config.set(`${keypath}.previewhiddenicon`,!config.get(`${keypath}.previewhiddenicon`))
            setvisibilityicon("previewhiddenicon")
            sanhelper.updatetabs()
        }

        const { elemselector } = await import("./elemselector")
        elemselector(document.querySelector("#customisercontent .wrapper:has(> select#preset)")!,"elems")

        document.getElementById("customiser")!.toggleAttribute("customfiles",config.get("usecustomfiles"))

        synced && document.getElementById("customiser")!.setAttribute("synced",synced)

        const synclbl = document.querySelector("#customiser .synclbl")
        synclbl && synced && (synclbl.textContent = `${await language.get("syncedwith",["customiser","theme","content"])} ${await language.get((config.get("trophymode") ? "trophy" : "") + synced)}`)
    }

    document.body.toggleAttribute("nativeos",config.get(`${keypath}.preset`) === "os")

    const dialog = document.querySelector("dialog") || document.getElementById("customiser")
    sanhelper.loadclosedstate(dialog)

    ;["settingscontent","customiser"].forEach(id => {
        const menuelem = document.getElementById(id)
        menuelem && sanhelper.loadadditionaltooltips(menuelem)
    })
})

const seticon = (icon: string) => {
    icon = icon.replace(/\\/g,"/").replace(/ /g,"%20")
    document.getElementById("savethemeiconbtn")!.style.setProperty(`--icon`,icon)
    document.querySelector(".addhtml")!.removeAttribute("icons")
}

const resetwin = (attrs: string[], animationName?: string) => {
    const customiser = document.getElementById("customiser")

    document.getElementById("customiserlogo")!.remove()
    customiser!.remove()

    animationName ? (animationName === "customiserout" && attrs.forEach(attr => document.body.removeAttribute(attr))) : attrs.forEach(attr => document.body.removeAttribute(attr))

    document.getElementById("close")!.onclick = () => window.close()

    webview && webview.remove()
    webview = null

    window.removeEventListener("resize",resizewebview)
}

const customisebtn = document.getElementById("customise")! as HTMLButtonElement

const closecustomiser = () => {
    if (sanhelper.devmode && webview) {
        try {
            webview.closeDevTools()
        } catch (err) {
            log.write("WARN",err as Error)
        }
    }

    // Closes "poswin" instances
    ipcRenderer.send("closeopenwins")

    const noanim = document.body.hasAttribute("noanim")
    const attrs = [
        "opening",
        "closing",
        "customiser",
        "muted"
    ]

    document.body.setAttribute("closing","")
    !noanim ? document.getElementById("maincontent")!.addEventListener("animationend", ({ animationName }) => resetwin(attrs,animationName),{ once: true }) : resetwin(attrs)

    customisebtn.removeAttribute("active")
}

const opencustomiser = () => {
    customisebtn.setAttribute("active","")

    ;(async () => {
        await language.load()
        await sanhelper.updategamelbl(globalgamename)
    })()

    document.getElementById("main")!.insertAdjacentHTML("beforeend",fs.readFileSync(path.join(__dirname,"customiser.html")).toString())
    
    document.body.setAttribute("opening","")
    document.body.setAttribute("customiser","")

    document.querySelectorAll("#customiser #customisertabs > button").forEach(btn => (btn as HTMLElement).onclick = (event: Event) => sanhelper.switchcustomisertab(event,config.get("trophymode")))

    document.getElementById("updatetheme")!.onclick = async () => {
        const { userthemes } = usertheme.data()
        const currenttheme = userthemes.find(theme => theme.enabled)

        if (!currenttheme) return log.write("WARN",`Error updating Theme: No "enabled" Theme found`)
        usertheme.create(currenttheme.label,currenttheme.icon,undefined,"updatetheme",currenttheme.userthemedir)
    }

    document.getElementById("savetheme")!.onclick = async () => {
        dialog.open({
            title: await language.get("savetheme",["customiser","theme","content"]),
            type: "default",
            icon: sanhelper.setfilepath("icon","update_white.svg"),
            sub: await language.get("sub",["customiser","theme","content"]),
            addHTML: path.join(__dirname,"savetheme.html"),
            buttons: [{
                id: "ok",
                label: await language.get("save"),
                icon: sanhelper.setfilepath("icon","tick.svg"),
                click: () => {
                    const name = (document.getElementById("savethemename")! as HTMLInputElement).value
                    const icon = getComputedStyle(document.getElementById("savethemeiconbtn")!)!.getPropertyValue("--icon")

                    usertheme.create(name,icon)
                }
            }]
        })

        const themename = document.getElementById("savethemename")! as HTMLInputElement
        themename.placeholder = await language.get("placeholder",["customiser","theme","content"])

        themename.oninput = ({ target }: Event) => {
            const input = (target as HTMLInputElement)
            const invalidchars = /[<>":\\/|?*\x00-\x1F]/g.test(input.value)

            input.toggleAttribute("invalid",invalidchars)
        }

        document.getElementById("savethemeiconbtn")!.onclick = () => document.querySelector(`.addhtml`)!.toggleAttribute(`icons`, !document.querySelector(`.addhtml`)!.hasAttribute(`icons`))
        document.querySelectorAll(`.wrapper#savethemeiconbtns > button`)!.forEach(btn => (btn as HTMLButtonElement).onclick = ({ target }: Event) => {
            const elem = target as HTMLElement
            
            if (elem.id === "themeiconcustom") {
                ipcRenderer.once("themeiconcustom", (event,file) => file && seticon(`url('${file[0]}')`))
                return ipcRenderer.send("themeiconcustom")
            }

            seticon(getComputedStyle(elem)!.getPropertyValue("--icon"))
        })
    }

    document.getElementById("importtheme")!.onclick = () => usertheme.import()
    document.getElementById("exporttheme")!.onclick = () => usertheme.export()

    sanhelper.updatetabs()
    sanhelper.audiosrc(config.get("audiosrc"))
    sanhelper.tooltips(config.get("tooltips"))

    document.getElementById("close")!.onclick = closecustomiser
}

customisebtn.onclick = opencustomiser

// Closes "extwin" if "config.soundonly" is true
window.addEventListener("soundonly", () => ipcRenderer.send("closeopenwins"))

document.getElementById("maincontent")!.addEventListener("animationend", ({ animationName }) => animationName === "customiserin" && document.body.removeAttribute("opening"))
document.querySelectorAll(".wrapper#tabs > .tab").forEach(btn => btn instanceof HTMLButtonElement && (btn!.onclick = (event: MouseEvent) => sanhelper.switchtab(event)))

const notifyinfo = async (type: NotifyType,customobj: Customisation) => {
    const customisation = { ...customobj }
    delete (customisation as any).usertheme

    const { themeswitchcustomisation } = usertheme.themeswitchinfo(config,window.appid,{ customisation, type })
    const { plat } = (themeswitchcustomisation || config.get(`customisation.plat`) as Customisation).customicons as CustomIcon

    const gameiconpath = path.join(sanhelper.temp,"gameicon.png")
    const gameicon = (config.get(`customisation.${type}.usegameicon`) && fs.existsSync(gameiconpath)) ? gameiconpath : null

    const notify: Notify = {
        id: Math.round(Date.now() / Math.random() * 1000),
        customisation: customisation,
        gamename: globalgamename || null,
        steam3id: window.steam3id,
        type,
        apiname: `${type.toUpperCase()}_TEST_NOTIFICATION`,
        name: type === "plat" ? "" : `Steam Achievement Notifier`,
        desc: type === "plat" ? "" : await language.get("achievementdesc"),
        unlocked: true,
        hidden: customisation.previewhiddenicon,
        percent: type !== "plat" ? (type === "rare" ? config.get("rarity") : config.get("trophymode") && type === "semi" ? config.get("semirarity") : 50.0) : 0,
        icon: type !== "plat" ? sanhelper.setfilepath("img",`achicon.png`) : plat || sanhelper.setfilepath("img","ribbon.svg"),
        gameicon: gameicon || sanhelper.setfilepath("img","gameicon.png"),
        istestnotification: true,
        unlocktime: new Date(Date.now()).toISOString()
    }

    return notify
}

let globaltype: NotifyType | null = null

// This needs to have no parameters to use in "removeEventListener"
const sendtestnotify = async () => {
    const type = globaltype || sanhelper.type
    const customobj: Customisation = { ...config.get(`customisation.${type}`) as Customisation }
    
    const notify = await notifyinfo(type,customobj)

    let { customisation } = notify
    let src = config.get("monitor")
    
    if (webview) {
        webview.style.opacity = "1"
        webview.removeEventListener("dom-ready",sendtestnotify)

        sanhelper.devmode && webview.openDevTools()
    }

    if (window.appid) {
        const { themeswitchcustomisation, themeswitchsrc } = usertheme.themeswitchinfo(config,window.appid,{ customisation: notify.customisation, type: notify.type, getsrc: true })
        customisation = themeswitchcustomisation || customisation
        src = themeswitchsrc || src
    }

    notify.customisation = customisation
    
    ipcRenderer.send("notify",notify,webview !== null && "customiser",src)
    config.get("webhooktest") && !webview && ipcRenderer.emit("sendwebhook",null,notify)
    globaltype && (globaltype = null)
}

ipcRenderer.on("appaudio", (event,type) => {
    const audio = document.querySelector("audio")!
    handleaudio(`customisation.${type}`,audio)
})

document.getElementById("test")!.onclick = sendtestnotify

ipcRenderer.on("customisernotify", (event,obj: Info) => {
    const wrapper = document.querySelector(".wrapper:has(> webview)")! as HTMLElement
    let { width, height } = sanhelper.getpresetbounds(obj.customisation.preset)
    !width && !height && log.write("WARN",`Error parsing "width"/"height" values for "${obj.customisation.preset}" preset: No <meta> tag found in body`)

    if (obj.screenshots === "overlay" && obj.customisation.ssdisplay) {
        height += 175

        const webview = wrapper.querySelector("webview") as Electron.WebviewTag
        webview.style.height = `calc(var(--height) / 2 * 1px)`
    }

    wrapper.style.setProperty("--width",`${width + 50}`)
    wrapper.style.setProperty("--height",`${height + 50}`)

    if (window.appid) {
        const { themeswitchcustomisation } = usertheme.themeswitchinfo(config,window.appid,{ customisation: obj.customisation, type: obj.info.type })
        obj.customisation = themeswitchcustomisation || obj.customisation
    }

    webview && webview.send("notify",obj)
})

ipcRenderer.on("queue", (event,queue: WinType[]) => {
    log.write("INFO",`Queue Length: ${queue.length}`)
    console.log(queue)
})

ipcRenderer.on("poswinclosed", () => {
    const customiser = document.getElementById("customiser")! as HTMLElement
    customiser && customiser.removeAttribute("poswin")
})

let globalgamename: string | null = null
let achnum = 0
const gamelbl =  document.querySelector(`.rect#game > span`)!

gamelbl.addEventListener("updategamelbl",async () => await sanhelper.updategamelbl(globalgamename))

window.appid = 0
window.steam3id = 0

ipcRenderer.on("appid",async (event,appid,gamename,steam3id,num) => {
    // (config.get("nowtracking") && !config.get("soundonly") && appid !== 0 && gamename) && sanhelper.showtrack(gamename)
    (!config.get("soundonly") && appid !== 0 && gamename) && sanhelper.showtrack(gamename)
    window.appid = appid || 0
    window.steam3id = steam3id || 0
    achnum = num

    // Fixes issue where gamename is reset to default upon opening a dialog
    globalgamename = gamename || null
    
    gamelbl.parentElement!.toggleAttribute("novalue",!gamename)
    sanhelper.updategamelbl(gamename)

    const enabled = appid ? usertheme.themeswitchinfo(config,appid).enabled : false
    enabled ? document.body.setAttribute("themeswitch",appid) : document.body.removeAttribute("themeswitch")
})

sanhelper.soundonly(config.get("soundonly"))

ipcRenderer.on("soundonly", (event,type: NotifyType) => {
    const audio = document.querySelector("audio")!
    audio.src = config.get(`customisation.${type}.soundfile`) as string || sanhelper.setfilepath("sound",`notify${type !== "main" ? `_${type}` : ""}.wav`)
    audio.play()
})

ipcRenderer.on("shortcut", async (event,type) => {
    globaltype = type
    sendtestnotify()
})

window.addEventListener("lang",async () => {
    document.querySelector(".rect#game > span")!.textContent = globalgamename || await language.get("game",["app","content"])
    ipcRenderer.send("lang",globalgamename,achnum)
    document.getElementById("webhookwrapper")?.remove()
})

const checkdialogstatus = (input: HTMLInputElement) => config.set(input.id,input.checked)

ipcRenderer.on("releasegame", async (event,noreleasedialog: boolean) => {
    if (noreleasedialog) return ipcRenderer.send("validateworker")

    dialog.open({
        title: await language.get("releasegame"),
        type: "default",
        sub: await language.get("releasegamesub"),
        icon: sanhelper.setfilepath("icon","donotdisturb.svg"),
        addHTML: `<div class="wrapper donotshowagain"><input type="checkbox" id="noreleasedialog"><span>Don't show this dialog again</span></div>`,
        buttons: [{
            id: "ok",
            label: await language.get("ok"),
            icon: sanhelper.setfilepath("icon","tick.svg"),
            click: () => {
                checkdialogstatus(document.getElementById("noreleasedialog") as HTMLInputElement)
                ipcRenderer.send("validateworker")
                dialog.close()
            }
        }]
    })
})

ipcRenderer.on("notifyprogress", (event,displaytime: number,finish?: boolean) => {
    const progresscircle = document.querySelector(".rect#test > #progresscircle")! as HTMLElement
    progresscircle.style.setProperty("--displaytime",`${displaytime * 1000}ms`)

    if (finish) return progresscircle.removeAttribute("running")
    progresscircle.setAttribute("running","")
})

ipcRenderer.on("restartapp", async () => {
    if (config.get("norestartdialog")) return ipcRenderer.send("restart",`System Tray > "Options" > "Restart" selected by User`)

    dialog.open({
        title: await language.get("restartapp"),
        type: "default",
        sub: await language.get("restartappsub"),
        icon: sanhelper.setfilepath("icon","replay.svg"),
        addHTML: `<div class="wrapper donotshowagain"><input type="checkbox" id="norestartdialog"><span>Don't show this dialog again</span></div>`,
        buttons: [{
            id: "ok",
            label: await language.get("ok"),
            icon: sanhelper.setfilepath("icon","tick.svg"),
            click: () => {
                checkdialogstatus(document.getElementById("norestartdialog") as HTMLInputElement)
                ipcRenderer.send("restart",`System Tray > "Options" > "Restart" selected by User`)
                dialog.close()
            }
        }]
    })
})

ipcRenderer.on("clearls", async () => {
    try {
        const msg = await new Promise<string>((resolve,reject) => {
            try {
                localStorage.clear()
                resolve(`"localStorage" cleared successfully`)
            } catch (err) {
                reject(`Error clearing "localStorage": ${err}`)
            }
        })

        ipcRenderer.send("clearls",msg)
    } catch (err) {
        ipcRenderer.send("clearls",err)
    }
})

ipcRenderer.on("updatemenu", (event,id) => {
    if (id !== "debug") return

    const settings = document.querySelector("dialog > #content > #settingscontent")

    if (settings) {
        const input = settings.querySelector(`input#${id}`) as HTMLInputElement
        input && (input.checked = config.get(id) as boolean)
    }

    config.get("debug") && ipcRenderer.send("debuginfoupdated",{
        pollrate: config.get("pollrate"),
        releasedelay: config.get("releasedelay"),
        maxretries: config.get("maxretries"),
        userust: config.get("userust")
    })
})

ipcRenderer.on("workeractive", (event,value: boolean) => document.body.toggleAttribute("active",value))
ipcRenderer.on("updatelogtype", (event,logtype,filename?: string) => sanhelper.updatelogwin(logtype,filename))

const getsteamuser = async (): Promise<string | null> => {
    const VDF = await import("simple-vdf")
    const loginusers = fs.readFileSync(path.join(sanhelper.steampath,"config","loginusers.vdf")).toString()
    const users = VDF.parse(loginusers).users

    for (const user in users) {
        const entry = users[user]
        const mostrecent = Object.keys(entry).find(key => key.toLowerCase() === "mostrecent")

        if (mostrecent && parseInt(entry[mostrecent]) === 1) return entry.PersonaName
    }

    return null
}

const unlockstr = async (user: string,gamename: string,type: NotifyType) => `${(await language.get(`webhookunlockmsg${type === "plat" ? "plat" : ""}`)).replace(/\$user/,user)}${gamename ? ` ${(await language.get("webhookingame")).replace(/\$gamename/,gamename)}` : ""}`

const embeds = async (notify: Notify,appid: number) => {
    const { type, gamename, name, desc, icon, percent, hidden } = notify
    const user = notify.ra ? (config.get("rauser") || "???") : await getsteamuser()
    const nospoilers = hidden && config.get("webhookspoilers")
    const hexcode = (config.get(`webhookembedcolor${type}`) as string).replace(/#/g,"")

    return {
        color: parseInt(hexcode,16),
        author: {
            name: `${await unlockstr(user || "???",gamename || "",notify.type)}${notify.emu ? ` [${notify.emu}]` : ""}`
        },
        title: `${nospoilers ? "||" : ""}${type === "plat" && !name ? await language.get("gamecomplete") : name}${nospoilers ? "||" : ""}${type === "plat" ? "" : ` (${Math.max(parseFloat(percent.toFixed(1)),0.1)}%)`}`,
        description: `${nospoilers ? "||" : ""}${type === "plat" ? await language.get("gamecompletedesc") : desc}${nospoilers ? "||" : ""}`,
        thumbnail: {
            url: `attachment://${path.basename(icon)}`
        },
        ...(config.get("webhookappid") && appid && {
            footer: {
                text: `${appid}`
            }
        }),
        timestamp: new Date()
    }
}

ipcRenderer.on("sendwebhook",async (event,notify: Notify,appid: number) => {
    const config = sanconfig.get()

    if (notify.type === "plat") {
        notify.name = await language.get("gamecomplete")
        // Discord Webhooks only support JPG/JPEG
        notify.icon = ["jpg","jpeg"].map(ext => `.${ext}`).includes(path.extname(notify.icon)) ? notify.icon : sanhelper.setfilepath("img","ribbon.jpg")
    }

    config.get("webhooks") && sendwebhook(notify.type,config.get("webhookurl"),await embeds(notify,appid),notify.icon)
})

ipcRenderer.on("suspendresume", async (event,suspended: boolean) => {
    const settings = document.querySelector("dialog:has(#settingscontent)")

    if (settings) {
        const elem = settings.querySelector("button#suspendresume")! as HTMLButtonElement
        elem.toggleAttribute("suspend",suspended)
        elem.textContent = await language.get(!elem.hasAttribute("suspend") ? "suspend" : "resume")
    }
})

ipcRenderer.on("noexeclick",async () => {
    if (!window.appid) return log.write("INFO",`Failed to init Add Link dialog - AppID is 0`)
    ipcRenderer.send("noexeclose")

    dialog.open({
        title: await language.get("noexe"),
        type: "default",
        icon: sanhelper.setfilepath("icon","error.svg"),
        sub: await language.get("noexedialogsub"),
        addHTML: `<span id="noexeclick"></span>`,
        buttons: [{
            id: "addlink",
            label: await language.get("link",["linkgame","content"]),
            icon: sanhelper.setfilepath("icon","newlink.svg"),
            click: async () => {
                const { getFocusedWinPath } = await import("sanhelper.rs")
                let count = 5
                const addlinkbtn = document.getElementById("addlinkbtn") as HTMLButtonElement
            
                addlinkbtn.setAttribute("timer",`${count}`)

                const timer: NodeJS.Timeout = setInterval(() => {
                    count--

                    if (!count) {
                        const winpath = getFocusedWinPath().replace(/\\/g,"/")

                        // Re-check `window.appid` is not 0 (i.e. game is still open) before writing to localStorage
                        if (!winpath || !window.appid) {
                            ipcRenderer.send("noexe",true)
                        } else {
                            const lsobj = JSON.parse(localStorage.getItem("linkgame")!)
                            lsobj[window.appid] = winpath

                            localStorage.setItem("linkgame",JSON.stringify(lsobj,null,4))
                            log.write("INFO",`"${window.appid}" written to "linkgame" localStorage object successfully`)
                        }

                        addlinkbtn.removeAttribute("timer")
                        clearInterval(timer)
                        
                        if (winpath && window.appid) {
                            dialog.close()
                            ipcRenderer.send("releasegame")
                        }

                        return
                    }

                    addlinkbtn.setAttribute("timer",`${count}`)
                },1000)
            }
        }]
    })

    sanhelper.sethelpdialog(document.getElementById("linkgamehelp")!,"linkgamehelp")
})

ipcRenderer.on("ragame",async (event,status: "wait" | "idle" | "start" | "stop" | "achievement",ragame?: RAGame) => {
    (["emu","gamename","gameid"] as const).forEach(attr => {
        ragame ? document.body.setAttribute(`ra${attr}`,`${ragame[attr]}`) : document.body.removeAttribute(`ra${attr}`)
        document.body.style.setProperty(`--ra${attr}`,ragame ? `"${ragame[attr]}"` : "")
    })

    document.body.style.setProperty(`--rastatus`,`"${await language.get(status,["settings","ra","content"])}"`)
})

ipcRenderer.on("allowreplay",(event,replay: WinType | null) => {
    document.body.toggleAttribute("allowreplay",replay !== null)
    replay && window.dispatchEvent(new CustomEvent("lang"))
})

ipcRenderer.on("notifymax",(event,value: boolean) => {
    const settings = document.querySelector("dialog > #content > #settingscontent")
    if (!settings) return

    const notifymax = settings.querySelector(".opt:has(#notifymax)")
    notifymax && notifymax.toggleAttribute("extwin",value)
})