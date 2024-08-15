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

update.renderer()

// Prevent page zoom
window.onkeydown = event => ((event.code === "Minus" || event.code === "Equal") && (event.ctrlKey || event.metaKey)) ? event.preventDefault() : null

const errorbtn = document.querySelector(`.menubtn#error`)! as HTMLButtonElement
errorbtn.onclick = () => {
    document.body.removeAttribute("error")
    sanhelper.updatelogwin(config.get("logtype"))
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
sanhelper.createclosedstate()

const getmonitors = async () => {
    try {
        const displays: Display[] = await sanhelper.getdisplays()
    
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
        log.write("ERROR",err as string)
    }
}

window.addEventListener("DOMContentLoaded", () => setTimeout(setmonitors,100))

ipcRenderer.on("displaysupdated", () => {
    setmonitors()
    ipcRenderer.send("monitorsupdated")
    ipcRenderer.once("monitorsupdated", () => sanhelper.updatetabs())
})

config.onDidAnyChange((newobj: any) => {
    config.store = newobj
    ipcRenderer.send("configupdated",newobj)
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
    (sanhelper.devmode && webview) && webview.closeDevTools()
    pause = false
    document.querySelector("#webviewbtns > #playback")!.toggleAttribute("paused",pause)

    const type = sanhelper.type as "main" | "rare" | "plat"

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
    .finally(() => {
        document.querySelector(".wrapper#webview > .wrapper")!.appendChild(webview || nopreview!)
        webview && webview.addEventListener("dom-ready",sendtestnotify)
    })
}

const audioextensions = [
    ".wav",
    ".mp3",
    ".ogg",
    ".aac",
    ".m4a"
]

const getaudiofile = (mode: "file" | "folder",filepath: string) => {
    if (mode === "file") return filepath

    const sounddir = filepath as string || path.join(__root,"sound")
    const dirfiles = fs.readdirSync(sounddir)
    const valid: (string | null)[] = []

    for (const file of dirfiles) {
        const filepath = path.join(sounddir,file).replace(/\\/g,"/")
        audioextensions.includes(path.extname(file)) && fs.statSync(filepath).size && valid.push(filepath)
    }

    !valid.length && valid.push(null)

    return valid[Math.floor(Math.random() * valid.length)]
}

const handleaudio = (keypath: string,audio: HTMLAudioElement,elem?: HTMLElement) => {
    const soundmode = config.get(`${keypath}.soundmode`) as "file" | "folder"
    audio.src = getaudiofile(soundmode,config.get(`${keypath}.sound${soundmode === "file" ? "file" : "dir"}`) as string) || sanhelper.setfilepath("sound","notify.wav")
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

const sendsswin = async (type: "main" | "rare" | "plat", keypath: string) => ipcRenderer.send("sswin",await notifyinfo(type,config.get(keypath) as Customisation))

window.addEventListener("tabchanged", async ({ detail }: CustomEventInit) => {
    const type = detail.type as "main" | "rare" | "plat"
    const keypath = `customisation.${type}`

    if (document.querySelector("dialog[menu] #settingscontent")) {
        document.querySelectorAll(`#settingscontent .opt > input[type="checkbox"], #settingscontent .opt > .sub > input[type="checkbox"]`).forEach(opt => sanhelper.getcheckbox(config,opt,(opt as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        document.querySelectorAll(`#settingscontent .opt:has(input[type="checkbox"]) > *`).forEach(opt => (opt as HTMLElement).onclick = (event: Event) => sanhelper.setcheckbox(config,event,(opt as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        document.querySelectorAll(`#settingscontent .opt > input[type="range"], #settingscontent .opt > select`).forEach(elem => sanhelper.setvalue(config,elem,(elem as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        document.querySelectorAll(`#settingscontent .opt > .optbtn`).forEach(btn => sanhelper.setbtn(config,btn,(btn as HTMLElement).parentElement!.hasAttribute("customisation") ? keypath : null))
        document.getElementById("sspreview")!.onclick = async () => sendsswin(type,keypath)
    }

    if (document.querySelector("body[customiser]")) {
        if (!detail.noreload) {
            loadwebview()
            document.getElementById("playback")!.onclick = playback
            document.getElementById("replay")!.onclick = loadwebview
        }

        document.querySelector("#customisertablbl > span")!.textContent = type === "main" ? await language.get("main") : (type === "rare" ? await language.get("rare") : await language.get("plat"))
        
        document.querySelectorAll(`#customisercontent .opt > input[type="checkbox"]`).forEach(elem => sanhelper.getcheckbox(config,elem,keypath))
        document.querySelectorAll(`#customisercontent .opt:has(input[type="checkbox"]) > span, #customisercontent .opt > input[type="checkbox"]`).forEach(opt => (opt as HTMLElement).onclick = (event: Event) => sanhelper.setcheckbox(config,event,keypath))
        document.querySelectorAll(`#customisercontent .opt > input[type="range"], #customisercontent .opt > input[type="color"], #customisercontent .opt > select, #customisercontent .opt > input[type="text"], #customisercontent .opt > input[type="number"]`).forEach(elem => sanhelper.setvalue(config,elem,keypath))
        document.querySelectorAll(`#customisercontent .opt > .optbtn`).forEach(btn => sanhelper.setbtn(config,btn,btn.id === "logo" || btn.id.includes("decoration") ? `${keypath}.customicons.${config.get(`${keypath}.preset`)}` : (btn.id === "plat" ? `${keypath}.customicons` : keypath)))
        document.querySelectorAll(`#customisercontent .opt > .delbtn`).forEach(btn => (btn as HTMLButtonElement).onclick = async () => {
            const optbtn = btn.parentElement!.querySelector(`.optbtn`) as HTMLButtonElement
            const preset = config.get(`customisation.${type}.preset`) as string
            const key = `${keypath}.${optbtn.classList.contains("customicon") ? `customicons.${optbtn.id === "plat" ? `plat` : `${config.get(`${keypath}.preset`)}.${(optbtn.id.includes("decoration") && Array.isArray(sanconfig.defaulticons.get(preset)!.decoration)) ? `decoration.${[parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1]}` : optbtn.id.replace(/\d/,"")}`}` : optbtn.id}`         

            const customiconkey = (): string => Array.isArray(key) ? key[parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1] as string : key as string
            const defaultvalue = (): string => {
                if (optbtn.id === "plat") return sanhelper.setfilepath("img","ribbon.svg")
                if (optbtn.id === "maskimg") return sanhelper.setfilepath("img","san_trophy_mask.png")
                if (optbtn.id !== "logo" && !optbtn.id.includes("decoration")) return ""

                if (optbtn.id === "logo") return sanconfig.defaulticons.get(preset)!["logo"] as string
                if (Array.isArray(sanconfig.defaulticons.get(preset)!.decoration)) return sanconfig.defaulticons.get(preset)!.decoration![parseInt(optbtn.id.replace(/[^\d]/g,"")) - 1] as string

                return sanconfig.defaulticons.get(preset)!.decoration as string
            }
            
            config.set(customiconkey(),defaultvalue())

            log.write("INFO",`"${customiconkey()}" reset`)
            sanhelper.updatetabs(optbtn.id === "soundfile" || optbtn.id === "sounddir")
        })

        const soundpreviewbtn = document.querySelector("#customisercontent button.rect#preview")! as HTMLButtonElement
        const audio = document.querySelector("audio")!
        
        soundpreviewbtn.onclick = () => handleaudio(keypath,audio,soundpreviewbtn)
        audio.onended = () => {
            audio.currentTime = 0
            audio.pause()

            soundpreviewbtn.removeAttribute("playing")
            soundpreviewbtn.onclick = () => handleaudio(keypath,audio,soundpreviewbtn)
        }

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
        elemselector(document.querySelector("#customisercontent .wrapper:has(> select#preset)")!)

        document.getElementById("customiser")!.toggleAttribute("customfiles",config.get("usecustomfiles"))
    }

    document.body.toggleAttribute("nativeos",config.get(`${keypath}.preset`) === "os")

    const dialog = document.querySelector("dialog") || document.getElementById("customiser")
    sanhelper.loadclosedstate(dialog)
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

const closecustomiser = () => {
    (sanhelper.devmode && webview) && webview.closeDevTools()

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
}

document.getElementById("customise")!.onclick = () => {
    (async () => {
        await language.load()
        await sanhelper.updategamelbl(globalgamename)
    })()

    document.getElementById("main")!.insertAdjacentHTML("beforeend",fs.readFileSync(path.join(__dirname,"customiser.html")).toString())
    
    document.body.setAttribute("opening","")
    document.body.setAttribute("customiser","")

    document.querySelectorAll("#customiser #customisertabs > button").forEach(btn => (btn as HTMLElement).onclick = (event: Event) => sanhelper.switchcustomisertab(event))

    document.getElementById("updatetheme")!.onclick = async () => {
        const { userthemes } = usertheme.data()
        const currenttheme = userthemes.find(theme => theme.enabled)

        if (!currenttheme) return log.write("ERROR",`Error updating Theme: No "enabled" Theme found`)
        usertheme.create(currenttheme.label,currenttheme.icon,undefined,"updatetheme")
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

        document.getElementById("savethemeiconbtn")!.onclick = () => document.querySelector(`.addhtml`)!.toggleAttribute(`icons`, !document.querySelector(`.addhtml`)!.hasAttribute(`icons`))
        document.querySelectorAll(`.wrapper#savethemeiconbtns > button`)!.forEach(btn => (btn as HTMLButtonElement).onclick = ({ target }: Event) => {
            const elem = target as HTMLElement
            
            if (elem.id === "themeiconcustom") {
                ipcRenderer.send("themeiconcustom")
                ipcRenderer.once("themeiconcustom", (event,file) => file && seticon(`url('${file[0]}')`))
                return
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

// Closes "extwin" if "config.soundonly" is true
window.addEventListener("soundonly", () => ipcRenderer.send("closeopenwins"))

document.getElementById("maincontent")!.addEventListener("animationend", ({ animationName }) => animationName === "customiserin" && document.body.removeAttribute("opening"))
document.querySelectorAll(".wrapper#tabs > .tab").forEach(btn => btn instanceof HTMLButtonElement && (btn!.onclick = (event: MouseEvent) => sanhelper.switchtab(event)))

const notifyinfo = async (type: "main" | "rare" | "plat",customobj: Customisation) => {
    const customisation = { ...customobj }
    delete (customisation as any).usertheme

    const { plat } = (config.get(`customisation.plat`) as Customisation).customicons as CustomIcon

    const notify: Notify = {
        id: Math.round(Date.now() / Math.random() * 1000),
        customisation: customisation,
        gamename: null,
        steam3id: window.steam3id,
        type: type,
        apiname: `${type.toUpperCase()}_TEST_NOTIFICATION`,
        name: type === "plat" ? "" : `Steam Achievement Notifier`,
        desc: type === "plat" ? "" : await language.get("achievementdesc"),
        unlocked: true,
        hidden: customisation.previewhiddenicon,
        percent: type !== "plat" ? (type === "rare" ? 10.0 : 50.0) : 0,
        icon: type !== "plat" ? sanhelper.setfilepath("img",`${customisation.usegameicon ? "game" : "ach"}icon.png`) : plat || sanhelper.setfilepath("img","ribbon.svg")
    }

    return notify
}

let globaltype: "main" | "rare" | "plat" | null = null

// This needs to have no parameters to use in "removeEventListener"
const sendtestnotify = async () => {
    const type = globaltype || sanhelper.type
    const customisation: Customisation = { ...config.get(`customisation.${type}`) as Customisation }

    const notify = await notifyinfo(type,customisation)

    if (webview) {
        webview.style.opacity = "1"
        webview.removeEventListener("dom-ready",sendtestnotify)

        sanhelper.devmode && webview.openDevTools()
    }
    
    ipcRenderer.send("notify",notify,webview !== null && "customiser")
    globaltype && (globaltype = null)
}

ipcRenderer.on("appaudio", (event,type) => {
    const audio = document.querySelector("audio")!
    handleaudio(`customisation.${type}`,audio)
})

document.getElementById("test")!.onclick = sendtestnotify
ipcRenderer.on("customisernotify", (event,obj: Info) => {
    const wrapper = (document.querySelector(".wrapper:has(> webview)") as Electron.WebviewTag)!
    const { width, height } = sanhelper.getpresetbounds(obj.customisation.preset)
    !width && !height && log.write("ERROR",`Error parsing "width"/"height" values for "${obj.customisation.preset}" preset: No <meta> tag found in body`)

    wrapper.style.setProperty("--width",`${width + 50}`)
    wrapper.style.setProperty("--height",`${height + 50}`)

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
const gamelbl =  document.querySelector(`.rect#game > span`)!

gamelbl.addEventListener("updategamelbl", async () => await sanhelper.updategamelbl(globalgamename))

window.appid = 0
window.steam3id = 0

ipcRenderer.on("appid", async (event,appid,gamename,steam3id) => {
    (config.get("nowtracking") && !config.get("soundonly") && appid !== 0 && gamename) && sanhelper.showtrack(gamename)
    window.appid = appid || 0
    window.steam3id = steam3id || 0

    // Fixes issue where gamename is reset to default upon opening a dialog
    globalgamename = gamename || null
    
    gamelbl.parentElement!.toggleAttribute("novalue",!gamename)
    sanhelper.updategamelbl(gamename)
})

sanhelper.soundonly(config.get("soundonly"))

ipcRenderer.on("soundonly", (event,type: "main" | "rare" | "plat") => {
    const audio = document.querySelector("audio")!
    audio.src = config.get(`customisation.${type}.soundfile`) as string || sanhelper.setfilepath("sound","notify.wav")
    audio.play()
})

ipcRenderer.on("shortcut", async (event,type) => {
    globaltype = type
    sendtestnotify()
})

window.addEventListener("lang", async () => {
    document.querySelector(".rect#game > span")!.textContent = globalgamename || await language.get("game",["app","content"])
    ipcRenderer.send("lang",globalgamename)
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
ipcRenderer.on("updatelogtype", (event,logtype) => sanhelper.updatelogwin(logtype))