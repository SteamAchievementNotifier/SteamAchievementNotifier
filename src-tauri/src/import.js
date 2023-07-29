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