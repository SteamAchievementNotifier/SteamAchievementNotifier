import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import Store from "electron-store"
import { sanhelper } from "./sanhelper"
import { dialog } from "./dialog"
import { language } from "./language"
import { log } from "./log"
import { themes } from "./themes"

export const legacythemes = {
    convertavailable: async (type: "main" | "rare" | "plat") => {
        const typethemes = legacythemes.check(type)
        let legacythemesbtn = document.querySelector("button.rect#exportlegacythemes")
        !typethemes && legacythemesbtn?.parentElement!.remove()
        
        if (typethemes) {
            if (legacythemesbtn) return
            const themescont = document.querySelector(".cont:has(.title#theme) > .optcont") as HTMLElement

            const html = `
                <div class="wrapper opt">
                    <button class="rect" id="exportlegacythemes">
                        <span>${await language.get("exportlegacythemes",["customiser","theme","content"])}</span>
                    </button>
                </div>
            `

            themescont.insertAdjacentHTML("beforeend",html)

            ;(document.querySelector("button.rect#exportlegacythemes") as HTMLButtonElement).onclick = async () => dialog.open({
                title: await language.get("exportlegacythemes",["customiser","theme","content"]),
                type: "default",
                icon: sanhelper.setfilepath("icon","stars.svg"),
                sub: await language.get("exportlegacythemessub",["customiser","theme","content"]),
                buttons: [{
                    label: await language.get("export",["customiser","theme","content"]),
                    id: "ok",
                    icon: "",
                    click: () => {
                        const convertedthemes: Store<Customisation>[] = []

                        ipcRenderer.once("exportlegacythemes",async (event,dir: string[]) => {
                            if (!dir[0] || dir[0].startsWith(path.join(sanhelper.appdata,"temp"))) return

                            for (const legacytheme of typethemes) {
                                try {
                                    const res = await legacythemes.convert(type,legacytheme,dir[0])
                                    if (res instanceof Error) throw res
                                    log.write("INFO",`Legacy Theme "${legacytheme.label}" converted and exported successfully`)
    
                                    convertedthemes.push(res)
                                } catch (err) {
                                    log.write("ERROR",`Error converting "${legacytheme.label}" legacy Theme: ${err as Error}`)
                                }
                            }

                            for (const store of convertedthemes) {
                                // Ensure the exported file exists before removing from "legacythemes.json"
                                const sanfile = await themes.export(store,path.join(`${path.dirname(store.path)}.zip`)) as string
                                if (!fs.existsSync(sanfile)) throw new Error(`Exported legacy Theme "${sanfile}" not found`)

                                const { store: theme } = store
                                const json = path.join(sanhelper.appdata,"legacythemes.json")
                                const legacythemesmap = legacythemes.json()
                                const typelegacythemes = legacythemesmap.get(type)
                                if (!typelegacythemes) throw new Error(`No legacy Themes found in "${json}" for "${type}"`)

                                // Find exported Theme in "legacythemes.json" and remove
                                legacythemesmap.set(type,typelegacythemes.filter(legacytheme => legacytheme.label !== theme.label))
                                fs.writeFileSync(json,JSON.stringify(Object.fromEntries(legacythemesmap),null,4))
                                log.write("INFO",`"legacythemes.json" updated`)
                            }
    
                            dialog.close()
                        })

                        ipcRenderer.send("exportlegacythemes")
                    }
                }]
            })
        }
    },
    check: (type: "main" | "rare" | "plat") => {
        const legacythemesmap = legacythemes.json()
        const typethemes = legacythemesmap.get(type) as LegacyUserTheme[] || []
    
        return typethemes.length ? typethemes : null
    },
    json: () => {
        const legacythemejson = path.join(sanhelper.appdata,"legacythemes.json")
        
        try {
            if (!fs.existsSync(legacythemejson)) throw new Error(`"${legacythemejson}" does not exist`)
    
            const json = JSON.parse(fs.readFileSync(legacythemejson).toString()) as { [key: string]: LegacyUserTheme[] }
            return new Map((["main","rare","plat"] as const).map(type => [type,json[type] as LegacyUserTheme[] || []]))
        } catch (err) {
            log.write("ERROR",`Error getting legacy Themes: ${err as Error}`)
            return new Map((["main","rare","plat"] as const).map(type => [type,[]]))
        }
    },
    convert: async (type: "main" | "rare" | "plat",legacytheme: LegacyUserTheme,tempdir: string) => {    
        return new Promise<Store<Customisation> | Error>((resolve,reject) => {
            try {
                // Remove all unsupported OS characters and spaces from label
                const sanitisedlabel = `${legacytheme.label}_${type}`.replace(/[\s<>":\\/|?*\x00-\x1F]/g,"").trim().toLowerCase()
                const dest = path.join(tempdir,`legacytheme_${sanitisedlabel}`)
            
                // Create import object with format converted from `LegacyUserTheme` to `Customisation`
                const importobj = themes.createimportobj(type,legacytheme,dest)
            
                // Create `theme.json` in converted Theme dir
                const store = new Store<Customisation>({
                    name: "theme",
                    cwd: dest
                })
            
                // Update `theme.json` with contents of converted `Customisation` object
                store.set(importobj)
    
                // Return the `theme.json` `Store` object
                resolve(store)
            } catch (err) {
                reject(err as Error)
            }
        })
    }
}