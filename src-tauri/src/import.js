import { download } from "./plugins/upload/index.min.js"
window.download = download

import { metadata } from "./plugins/fs-extra/index.min.js"
window.metadata = metadata

import { enable, disable, isEnabled } from "./plugins/autostart/index.min.js"
window.autostart = {
    enable: enable,
    disable: disable,
    isEnabled: isEnabled
}

import "./tippy.js/popper.min.js"
import "./tippy.js/tippy-bundle.umd.min.js"

import { keys } from "./components/keys.js"
window.keys = keys

const winlbl = window.__TAURI__.window.getCurrent().label

async function LoadLang(lang) {
    async function GetTranslations(lang) {
        const module = await import(`./lang/${lang}.js`)
        
        for (const key in module.translations()) {
            if (module.translations().hasOwnProperty(key)) {
                const elem = document.getElementById(key)
                const value = module.translations()[key]

                if (elem) {
                    const query = elem.classList[0] === "sanbox" ? document.querySelector(`#${key} > ${value.query}`) : value.query === ".sanboxlbl" ? document.querySelector(`.sanboxoption:has(#${key}) > .sanboxlbl`) : document.querySelector(`#${key} > label`)

                    
                    if (value.elem) {
                        value.query ? query.textContent = value.elem : elem[key.includes("pp") ? "innerHTML" : "textContent"] = value.elem
                    }

                    value.tt && elem.setAttribute("content",value.tt)
                }
            }
        }

        return module.translations()
    }
    
    try {
        const translations = await GetTranslations(lang)

        if (winlbl === "main") {
            const optsmap = {
                screenshotmode: {
                    off: translations.off,
                    steam: translations.steamss,
                    overlay: translations.overlayss
                },
                overlayposdropdown: {
                    match: translations.match,
                    topleft: translations.topleft,
                    topcenter: translations.topcenter,
                    topright: translations.topright,
                    bottomleft: translations.bottomleft,
                    bottomcenter: translations.bottomcenter,
                    bottomright: translations.bottomright
                },
                bgstyle: {
                    solid: translations.solid,
                    gradient: translations.gradient,
                    bgimg: translations.bgimg,
                    gameart: translations.gameart
                },
                pos: {
                    topleft: translations.topleft,
                    topcenter: translations.topcenter,
                    topright: translations.topright,
                    bottomleft: translations.bottomleft,
                    bottomcenter: translations.bottomcenter,
                    bottomright: translations.bottomright
                },
                animdir: {
                    up: translations.up,
                    down: translations.down,
                    left: translations.left,
                    right: translations.right
                }
            }
            
            Object.entries(optsmap).forEach(([id,map]) => {
                const elem = document.getElementById(id)
                elem && Object.entries(map).forEach(([key, value]) => document.querySelector(`#${id} > option[value="${key}"]`).textContent = value)

                // Load the "detailswrapper" link and "placeholder" text if an associated Settings menu item is loaded
                if (id === "screenshotmode" && elem) {
                    document.querySelector(`.detailswrapper > a`).textContent = translations.gamedetails
                    document.querySelector(`.detailswrapper > span`).textContent = translations.mustbepublic

                    document.getElementById("apikey").placeholder = translations.apikey.placeholder
                    document.getElementById("steam64id").placeholder = translations.steam64id.placeholder
                }

                if (id === "bgstyle" && elem) {
                    document.querySelector(".customisertab > .sanboxlbl").textContent = translations[`toggle${GetTabType()}`].elem
                    document.querySelector("#customfont > label").textContent = config.customisation[GetTabType()].customfont || translations.nofont
                }
            })

            const presetopts = Object.keys(base) || {}
            const preset = document.getElementById("preset")
            presetopts && preset ? presetopts.forEach(opt => opt !== "[TEMPLATE]" ? document.querySelector(`#${preset.id} > option[value="${opt}"]`).textContent = document.querySelector(`#${preset.id} > option[value="${opt}"]`).getAttribute("lbl") : null) : null
        }

        window.translations = translations
        window.dispatchEvent(new CustomEvent("translations"))
    } catch (err) {
        const langbox = document.getElementById("lang")

        log.write("error",`Error loading "${lang}.js": ${err.stack}`)
        sanhelper.write({config},["lang"],"english")
        
        await GetTranslations("english")
        window.dispatchEvent(new CustomEvent("translations"))
        langbox ? langbox.value = "english" : null
    }
}

window.LoadLang = LoadLang

window.addEventListener("DOMContentLoaded", () => {
    const scripts = [
        "config",
        "ui",
        "sound",
        "notify",
        "achievements"
    ]

    function LoadScript(i) {
        if (i >= scripts.length) {
            InitUI()
            LoadLang(config.lang)
            return
        }

        const script = document.createElement("script")
        script.src = `./components/${scripts[i]}.js`

        script.onload = () => LoadScript(i + 1)
        document.head.appendChild(script)
    }

    LoadScript(0)
})

function InitUI() {
    const loadingdiv = document.querySelector("#loading > div")

    // Timeout added to match the timeout set to trigger "contentloaded" in main.js
    setTimeout(() => {
        document.querySelector(".mainwrapper").removeAttribute("loading")
        !config.noanim ? loadingdiv.addEventListener("animationend", event => event.animationName === "loadcomplete" && event.target.parentElement.remove(), { once: true }) : loadingdiv.parentElement.remove()
    },100)
}

export function GetTabType() {
    return document.querySelector(".mainwrapper").getAttribute("type")
}

window.GetTabType = GetTabType

export async function GetHREF(preset) {
    return convertFileSrc(await path.join(await path.resourceDir(),"src","notify","presets",preset,"styles.css"))
}

window.GetHREF = GetHREF

export async function LoadIFrame(msg,custom,html,href,fonts) {
    const type = !arguments.length ? GetTabType() : null
    const iframe = document.getElementsByTagName("iframe")[0]
    const divs = ["mainwrapper","screenshotwrapper"]

    // Triggers reflow
    function Reflow(elem) {
        elem.style.animation = "none"
        elem.offsetHeight
        elem.style.animation = null
    }

    iframe.contentWindow.document.querySelectorAll("*").forEach(elem => Reflow(elem))
    divs.forEach(div => iframe.contentWindow.document.querySelector(`.${div}`).style.animation = "none")

    if (!arguments.length) {
        const { msg, custom, href, fonts } = await BuildNotify({type})
        const html = await readTextFile(await path.join("src","notify","presets",custom.preset,"index.html"), { dir: fs.BaseDirectory.Resource })

        iframe.contentWindow.postMessage({ msg, optional: { custom, html, href, fonts } })

        CheckIfPortrait()
        
        const elems = [iframe.contentWindow.document.body,document.getElementById("customiserplaystate")]
        const states = ["paused","finish"]
        
        elems.forEach(elem => states.forEach(state => elem.removeAttribute(state)))
    } else {
        const msgcopy = { ...msg }
        msgcopy.extwin = true

        iframe.contentWindow.postMessage({ msg: msgcopy, optional: { custom, html, href, fonts } })
    }
}

window.LoadIFrame = LoadIFrame

window.addEventListener("keydown", event => event.key === "Control" && invoke("ipc", { eventname: "showextwin", payload: {} }))
window.addEventListener("keyup", event => event.key === "Control" && invoke("ipc", { eventname: "hideextwin", payload: {} }))

const { isRegistered, register, unregister } = window.__TAURI__.globalShortcut

// Listens for "config" event sent from "config.js"/"ui.js" ("settings.shortcuts")
// Prevents "config is undefined" errors on load
window.addEventListener("config", async event => {
    const config = event.detail

    const shortcuts = () => {
        return {
            main: config.customisation.main.shortcut,
            rare: config.customisation.rare.shortcut,
            plat: config.customisation.plat.shortcut,
        }
    }
    
    window.shortcuts = shortcuts

    for (const key in shortcuts()) {
        !await isRegistered(shortcuts()[key]) && config.shortcuts ?
        await register(shortcuts()[key], async () => {
            await new Promise(resolve => resolve(document.getElementById(`toggle${key}`).click()))
            Notify()
        }) :
        await unregister(shortcuts()[key])
    }
})

// TODO:
// - Add "recenter" option
export async function CreateExtWin(type = GetTabType()) {
    const { width, height } = base[config.customisation[type].preset]
    
    // Removed "skipTaskbar", as this causes blank window capture in OBS
    const extwin = new WebviewWindow("extwin",{
        width: width * (config.customisation[type].scale / 100),
        height: height * (config.customisation[type].scale / 100),
        title: `Steam Achievement Notifier (V${await sanhelper.version()}) - External Window`,
        alwaysOnTop: true,
        fullscreen: false,
        focus: false,
        transparent: true,
        resizable: false,
        minimizable: false,
        maximizable: false,
        decorations: false,
        url: "./components/extwin.html"
    })

    window.extwin = extwin

    extwin.once("tauri://created", () => once("webviewready", () => setTimeout(() => invoke("ipc", { eventname: "ext", payload: {} }),100)))
    extwin.once("tauri://error", err => log.write("error",`${err.windowLabel}" could not be created: ${err.payload}`))
    extwin.once("tauri://destroyed", async () => window.extwin = null)
    extwin.listen("tauri://move", () => invoke("ipc", { eventname: "showextwin", payload: {} }))
}

window.extwin = null
window.CreateExtWin = CreateExtWin