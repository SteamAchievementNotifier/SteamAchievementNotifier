import { sanconfig } from "./config"
import { log } from "./log"

export const language = {
    load: async () => {
        const config = sanconfig.get()
        const lang = config.get("lang")
        
        try {
            const { translations: { global, app, settings, customiser } } = await import(`../lang/${lang}`)
            const langmap = new Map<HTMLElement,string>([])
            const maincontent = document.querySelector(`.wrapper#maincontent`)!

            const appelems = [
                "game",
                "customise",
                "test"
            ]

            appelems.forEach(id => langmap.set(maincontent.querySelector(`.rect#${id} > span`)!,app.content[id]))

            const tabtypes = [
                "main",
                "rare",
                "plat"
            ]

            tabtypes.forEach(type => langmap.set(document.querySelector(`.wrapper#tabs > .tab[${type}]`)!,global[type]))

            const dialog = document.querySelector("dialog")
            if (dialog) {
                const backbtn = document.getElementById("backbtn")
                const type = dialog.hasAttribute("menu") ? (dialog.querySelector("#content > #settingscontent") ? "settings" : "menu") : "selection"

                if (type === "settings") {
                    const settingsheader = document.getElementById("settingsheader")!
                    const settingscontent = document.getElementById("settingscontent")!
                    const settingsversion = document.getElementById("settingsversion")!

                    langmap.set(settingsheader.querySelector(`span`)!,global.settings)
                    langmap.set(settingsversion.querySelector(`span:first-child`)!,`${global.appversion}:`)

                    const settingstitles = Array.from(settingscontent.querySelectorAll(`.cont > .title`)).map(title => title.id)

                    const selectignore = [
                        "lang",
                        "monitors"
                    ].map(select => `#${select}`).join(",")

                    const posselect = [
                        "ovpos",
                        "nowtrackingpos"
                    ]

                    settingstitles.forEach(title => {
                        langmap.set(settingscontent.querySelector(`span.title#${title}`)!,settings[title].title)
                        settingscontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(input) > input`).forEach(input => langmap.set(input.parentElement!.querySelector(`span`)!,settings[title].content[input.id]))
                        settingscontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(select) > select`).forEach(select => select.parentElement!.querySelector(`span`) && langmap.set(select.parentElement!.querySelector(`span`)!,settings[title].content[select.id]))
                        settingscontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(select:not(${selectignore})) > select > option`).forEach(opt => opt.textContent = posselect.includes(opt.parentElement!.id) ? global[(opt as HTMLOptionElement).value] : settings[title].content[(opt as HTMLOptionElement).value])
                        settingscontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(button) > button`).forEach(btn => btn.parentElement!.querySelector(`span`) && langmap.set(btn.parentElement!.querySelector(`span`)!,btn.id === "sspreview" ? global.preview : settings[title].content[btn.id]))
                    })

                    const settingsbtns = Array.from(document.querySelectorAll(`dialog[menu] #settingscontent button`)).filter(btn => btn.id).map(btn => btn.id)!

                    settingsbtns.forEach(id => {
                        const elem = settingscontent.querySelector(`button.wrapper#${id}`)! as HTMLElement
                        if (!elem) return

                        const title = elem.parentElement!.parentElement!.querySelector(".title")!.id
                        const systray = global[elem.id === "suspendresume" ? (!elem.hasAttribute("suspend") ? "suspend" : "resume") : elem.id]

                        langmap.set(elem,elem.hasAttribute("systray") ? systray : settings[title].content[id])
                    })

                    const releaseshortcutlbl = settingscontent.querySelector(".wrapper:has(> button#releaseshortcut) > span")! as HTMLSpanElement
                    const releaseshortcuttitle = releaseshortcutlbl.parentElement!.parentElement!.parentElement!.querySelector(".title")!.id
                    
                    langmap.set(releaseshortcutlbl,settings[releaseshortcuttitle].content["releaseshortcut"])
                }

                (type === "selection" && backbtn) && (backbtn.textContent = global.back)
            }
            
            const customiserelem = document.querySelector(".wrapper#customiser")
            if (customiserelem) {
                const customisercontent = document.getElementById("customisercontent")!
                const customisertitles = Array.from(customisercontent.querySelectorAll(`#customiseropts > .cont > .title`)).map(title => title.id)!

                customisertitles.forEach(title => {
                    langmap.set(customisercontent.querySelector(`span.title#${title}`)!,customiser[title].title)
                    customisercontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(input) > input`).forEach(input => langmap.set(input.parentElement!.querySelector(`span`)!,customiser[title].content[input.id]))
                    customisercontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(select) > select`).forEach(select => select.parentElement!.querySelector(`span`) && langmap.set(select.parentElement!.querySelector(`span`)!,customiser[title].content[select.id]))
                    customisercontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(select:not(#preset)) > select > option`).forEach(opt => opt.textContent = opt.parentElement!.id === "pos" ? global[(opt as HTMLOptionElement).value] : customiser[title].content[(opt as HTMLOptionElement).value])
                    customisercontent.querySelectorAll(`.cont:has(span.title#${title}) .opt:has(button) > button`).forEach(btn => {
                        if (btn.id === "savetheme") return langmap.set(btn.querySelector("span")!,customiser.theme.content.savetheme)
                        if (btn.id.includes("decoration")) return
                        if (btn.parentElement!.id === "posbtns") return langmap.set(btn.querySelector("span")!,customiser[title].content[btn.id])

                        btn.parentElement!.querySelector(`span`) && langmap.set(btn.parentElement!.querySelector(`span`)!,btn.id === "preview" ? global.preview : customiser[title].content[btn.id])
                    })
                })
            }

            langmap.forEach((value,elem) => {
                if (!elem) {
                    log.write("ERROR",`Error loading element "${elem}" in language file "${lang}.js"`)
                    return console.log(elem)
                }

                elem.textContent = value
            })

            return
        } catch (err) {
            log.write("ERROR",`Error loading language file "${lang}.js": ${(err as Error).stack || (err as Error).message}`)
        }
    },
    getkeypath: (obj: any,keys: string[]): any => keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),obj),
    get: async (id: string, keys?: string | string[]) => {
        const config = sanconfig.get()
        const lang = config.get("lang") || "english"
    
        try {
            const { translations, translations: { global } } = await import(`../lang/${lang}`)
            if (!keys) return global[id]
    
            const keysarr = Array.isArray(keys) ? keys : [keys]
            const top = translations[keysarr.shift() as string]
            const keypath = language.getkeypath(top,keysarr)
    
            return keypath ? keypath[id] : "MISSING!!!"
        } catch (err) {
            log.write("ERROR", `Error getting translation for "${id}" in language file "${lang}.js": ${err}`)
        }
    }
}