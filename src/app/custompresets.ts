import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import { sanconfig } from "./config"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"
import { dialog } from "./dialog"
import { language } from "./language"

export const custompresets = {
    create: async (config: any,wrapper: HTMLElement,input: HTMLInputElement) => {
        const presetlog = document.querySelector("dialog .addhtml > .wrapper > .wrapper > .presetlog")!

        let temppresetsjson: string | null = null
        let presetdir: string | null = null
        let preset: string | null = null
                        
        try {
            const presets: { path: string, json: any } | null = sanhelper.presets
            if (!presets || typeof presets.json !== "object") throw new Error(`Unable to read contents of "presets.json"`)
            
            const existing = new Set(Object.keys(presets.json).map(key => key.match(/^custom(\d+)$/)?.[1]).filter(key => !!key).map(key => Number(key)))

            let i = 0
            while (existing.has(i)) i++

            preset = `custom${i}`

            const newpresets = {
                ...presets.json,
                [`custom${i}`]: input.value
            }

            const { dir, name, ext } = path.parse(presets.path)
            const tempjson = path.join(dir,`${name}_TEMP${ext}`).replace(/\\/g,"/")

            fs.writeFileSync(tempjson,JSON.stringify(newpresets,null,4))
            log.write("INFO",`"${tempjson}" created successfully`)

            temppresetsjson = tempjson

            const newpresetdir = path.join(path.dirname(presets.path),`custom${i}`).replace(/\\/g,"/")
            if (fs.existsSync(newpresetdir)) throw new Error(`"${newpresetdir}" already exists. Move, rename or delete the existing directory to continue`)

            fs.mkdirSync(newpresetdir)
            log.write("INFO",`"${newpresetdir}" created successfully`)

            presetdir = newpresetdir

            for (const file of (["index.html","styles.css"] as const)) {
                const filepath = path.join(__root,"notify","_template",file).replace(/\\/g,"/")
                const dest = path.join(newpresetdir,file).replace(/\\/g,"/")
                if (!fs.existsSync(filepath)) throw new Error(`"${filepath}" does not exist`)
                
                fs.copyFileSync(filepath,dest)
                log.write("INFO",`"${file}" copied to "${newpresetdir}" successfully`)
            }

            const imgbtns = wrapper.querySelectorAll(`button[id^="createnewpreset"]`)
            const defaulticons: CustomIcon = {
                logo: null,
                decoration: null,
                plat: sanhelper.setfilepath("img","ribbon.svg").replace(/\\/g,"/"),
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["unlockmsg","title","desc"],
                sselems: ["unlockmsg","title","desc"]
            }

            const decorations: string[] = []
            const decorationselect = wrapper.querySelector("select#createnewpresetdecoration") as HTMLSelectElement
            
            const assetsdir = path.join(newpresetdir,"assets").replace(/\\/g,"/")

            for (const btn of imgbtns) {
                const iconvalue = getComputedStyle(btn).getPropertyValue("--icon").match(/url\('([^']+)'\)/)?.[1] || "../../img/sanlogotrophy.svg"
                const ogiconpath = (path.isAbsolute(iconvalue) ? iconvalue : sanhelper.setfilepath("img",path.basename(iconvalue))).replace(/\\/g,"/")

                if (btn.id === "createnewpresetlogoimg") {
                    const logoselect = wrapper.querySelector("select#createnewpresetlogo") as HTMLSelectElement
                    
                    if (logoselect.value !== "none") {
                        const iconpath = custompresets.copyimgtoassets(ogiconpath,assetsdir)
                        if (!iconpath) throw new Error(`Unable to copy "${ogiconpath}" to "${assetsdir}"`)
                        
                        defaulticons.logo = iconpath
                    }
                    
                    continue
                }

                if (!btn.id.startsWith("createnewpresetdecoration") || decorationselect.value === "none") continue

                if (decorationselect.value === "fixed") {
                    if (btn.id === "createnewpresetdecorationimg1") {
                        const iconpath = custompresets.copyimgtoassets(ogiconpath,assetsdir)
                        if (!iconpath) throw new Error(`Unable to copy "${ogiconpath}" to "${assetsdir}"`)
                        
                        defaulticons.decoration = iconpath
                    }
                    
                    continue
                }

                const iconpath = custompresets.copyimgtoassets(ogiconpath,assetsdir)
                if (!iconpath) throw new Error(`Unable to copy "${ogiconpath}" to "${assetsdir}"`)
                
                const i = parseInt(btn.id.slice(-1)) - 1
                decorations[i] = iconpath
            }

            if (decorationselect.value === "dynamic") {
                if (!decorations.some(item => !!item)) throw new Error(`No selected decoration images could be assigned`)
                defaulticons.decoration = decorations
            }

            // Contains originally selected files used for resetting preset images to default
            const defaulticonsjson = path.join(newpresetdir,"defaulticons.json")
            fs.writeFileSync(defaulticonsjson,JSON.stringify(defaulticons,null,4))
            log.write("INFO",`"${defaulticonsjson}" created successfully`)
            
            // Used to write to as a "temp config" when new element images are selected via the Customiser
            // Prevents having to write custom keys to config (and subsequently clean up from multiple places on deletion)
            const customiconsjson = path.join(newpresetdir,"customicons.json")
            fs.writeFileSync(customiconsjson,JSON.stringify(defaulticons,null,4))
            log.write("INFO",`"${customiconsjson}" created successfully`)

            fs.copyFileSync(tempjson,presets.path) // Rename `presets_TEMP.json` to `presets.json`
            temppresetsjson = null // Prevent deletion in `catch` block
            fs.rmSync(tempjson,{ force: true }) // Remove `presets_TEMP.json`
            
            config.set(`customisation.${sanhelper.type}.preset`,`custom${i}`)
            dialog.close()
        } catch (err) {
            const cleanup = [
                { path: temppresetsjson, opts: { force: true } },
                { path: presetdir, opts: { recursive: true, force: true } }
            ]

            for (const item of cleanup) {
                if (!item.path) continue

                try { fs.rmSync(item.path,item.opts) }
                catch (err) { log.write("WARN",`Unable to remove "${item.path}": ${(err as Error).message}`) }
            }

            const key = `customisation.${sanhelper.type}.preset`
            const configpreset = config.get(key) as string | undefined
            
            // On error, if `customisation[<type>].preset` is set to use the custom preset, reset back to the "default" preset
            configpreset === preset && config.set(key,"default")

            log.write("WARN",`Unable to create new preset: ${(err as Error).message}`)
            presetlog.textContent = `${await language.get("createnewpreseterror")} ${await language.get("applogdetails")}`
            input.value = ""
        }
    },
    copyimgtoassets: (ogiconpath: string,assetsdir: string) => {
        try {
            const iconpath = path.join(assetsdir,path.basename(ogiconpath)).replace(/\\/g,"/")

            !fs.existsSync(assetsdir) && fs.mkdirSync(assetsdir,{ recursive: true })
            fs.copyFileSync(ogiconpath,iconpath)
            log.write("INFO",`"${ogiconpath}" copied to "${assetsdir}" successfully`)

            return iconpath
        } catch {
            return null
        }
    },
    createselectelems: async (wrapper: HTMLElement,input: HTMLInputElement,okbtn: HTMLButtonElement) => {
        for (const id of (["logo","decoration"] as const)) {
            const elem = wrapper.querySelector(`dialog .addhtml > .wrapper > .opt:has(select#createnewpreset${id})`)
            
            if (!elem) {
                log.write("ERROR",`"createnewpreset${id}" element not found`)
                continue
            }

            elem.querySelector("span")!.textContent = await language.get(`createnewpreset${id}`)

            for (const opt of elem.querySelectorAll("option")) {
                opt.textContent = await language.get(opt.value)
            }

            const select = elem.querySelector("select") as HTMLSelectElement
            select.onchange = () => custompresets.setokbtnstate(wrapper,input,okbtn)

            const imgbtns = elem.querySelectorAll("button") as NodeListOf<HTMLButtonElement>
            
            for (const btn of imgbtns) {
                btn.onclick = event => {
                    const target = event.target as HTMLButtonElement

                    ipcRenderer.once("loadfile",(event,path) => {
                        if (!path) return
                        target.style.setProperty("--icon",`url('${path[0].replace(/\\/g,"/")}')`)
                    })

                    ipcRenderer.send("loadfile","img")
                }
            }
        }
    },
    setokbtnstate: (wrapper: HTMLElement,input: HTMLInputElement,okbtn: HTMLButtonElement) => {
        const logoselect = wrapper.querySelector("select#createnewpresetlogo") as HTMLSelectElement
        const decorationselect = wrapper.querySelector("select#createnewpresetdecoration") as HTMLSelectElement
        const invalid = [logoselect,decorationselect].every(elem => elem.value === "none")

        for (const elem of [okbtn,logoselect,decorationselect]) {
            elem.toggleAttribute("invalid",invalid)
        }

        sanhelper.settabindex(okbtn,[input.value,!invalid])
    },
    delete: async (config: any,presetselect: HTMLSelectElement) => {
        const preset = presetselect.value
        const corepresets = Array.from(sanconfig.defaulticons.keys())
        if (corepresets.includes(preset)) return log.write("WARN",`Unable to delete core preset "${preset}"`)
        
        const presetlog = document.querySelector("dialog .addhtml > .wrapper > .presetlog#delete")!

        let temppresetsjson: string | null = null
        
        try {
            const presets: { path: string, json: any } | null = sanhelper.presets
            if (!presets || typeof presets.json !== "object") throw new Error(`Unable to read contents of "presets.json"`)

            const newpresets = { ...presets.json }
            delete newpresets[preset]

            const { dir, name, ext } = path.parse(presets.path)
            const tempjson = path.join(dir,`${name}_TEMP${ext}`)
            
            fs.writeFileSync(tempjson,JSON.stringify(newpresets,null,4))
            log.write("INFO",`"${tempjson}" created successfully`)

            temppresetsjson = tempjson

            fs.copyFileSync(tempjson,presets.path) // Rename `presets_TEMP.json` to `presets.json`
            temppresetsjson = null // Prevent deletion in `catch` block
            fs.rmSync(tempjson,{ force: true }) // Remove `presets_TEMP.json`

            log.write("INFO",`Removed "${preset}" key from "${presets.path}" successfully`)

            // Check all types - if `customisation[<type>].preset` uses the deleted preset, reset to "default"
            for (const type of (["main","semi","rare","plat"] as const)) {
                const key = `customisation.${type}.preset`
                const configpreset = config.get(key) as string | undefined
                
                configpreset === preset && config.set(key,"default")
            }

            const newpresetdir = path.join(sanhelper.appdata,"customfiles","notify","presets",preset).replace(/\\/g,"/")

            try {
                fs.rmSync(newpresetdir,{ recursive: true, force: true })
                log.write("INFO",`"${newpresetdir}" removed successfully`)
            } catch (err) {
                log.write("WARN",`Unable to remove "${newpresetdir}": ${(err as Error).message}`)
            }

            dialog.close()
        } catch (err) {
            if (temppresetsjson) {
                try { fs.rmSync(temppresetsjson,{ force: true }) }
                catch (err) { log.write("WARN",`Unable to remove "${temppresetsjson}": ${(err as Error).message}`) }
            }

            log.write("WARN",`Unable to delete preset: ${(err as Error).message}`)
            presetlog.textContent = `${await language.get("deletenewpreseterror")} ${await language.get("applogdetails")}`
        }
    }
}