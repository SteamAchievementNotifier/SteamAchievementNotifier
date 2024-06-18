import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import fsextra from "fs-extra"
import { sanhelper, __root } from "./sanhelper"
import { dialog } from "./dialog"
import { sanconfig } from "./config"
import { log } from "./log"

const content = [
    "bgimg",
    "customfont",
    "customicons",
    "hiddenicon",
    "maskimg",
    "sounddir",
    "soundfile"
] as const

const isobject = (item: any): item is Record<string,any> => typeof item === "object" && item !== null && !Array.isArray(item)

const getkeyvalue = (value: any, key: string, map = new Map<string, any>()): Map<string, any> => {
    if (!isobject(value)) {
        map.set(key,value)
        return map
    }

    for (const subkey in value) {
        if (Object.prototype.hasOwnProperty.call(value, subkey)) {
            const keypath = key ? `${key}.${subkey}` : subkey

            if (!isobject(value[subkey])) {
                map.set(keypath,value[subkey])
            } else {
                getkeyvalue(value[subkey],keypath,map)
            }
        }
    }

    return map
}

const rewritepath = (themedir: string,value: string) => {
    const valuepath = (value: string) => path.join(themedir,"assets",path.basename(value)).replace(/\\/g,"/")

    if (Array.isArray(value)) return value.map(subvalue => subvalue = valuepath(subvalue))
    return valuepath(value)
}

const converttoobject = (obj: Record<string,any>) => {
    const res: Record<string,any> = {}

    for (const [key,value] of Object.entries(obj)) {
        const keys = key.split(".")
        let current = res

        while (keys.length > 1) {
            const subkey = keys.shift()!

            if (!current[subkey]) {
                current[subkey] = {}
            }

            current = current[subkey]
        }

        current[keys[0]] = value
    }

    return res
}

export const usertheme = {
    data: () => {
        const config = sanconfig.get()
        const type = sanhelper.type as "main" | "rare" | "plat"
        const userthemes = config.get(`customisation.${type}.usertheme`) as Button[]

        return { config, type, userthemes }
    },
    update: () => {
        let { config, type, userthemes } = usertheme.data()
        let enabled: number | undefined = userthemes.find(theme => theme.enabled)?.id as number || undefined

        // If no theme is enabled, enable the first one
        if (!enabled) {
            config.set(`customisation.${type}.usertheme.0.enabled`,true)

            ;({ config, type, userthemes } = usertheme.data())
            enabled = userthemes.find(theme => theme.enabled)?.id as number || undefined
        }

        requestAnimationFrame(() => {
            if (!document.querySelector("dialog[selection]")) return document.querySelector(`#usertheme > span`)!.textContent = userthemes[enabled || 0].label
    
            document.querySelectorAll(`dialog[selection] .contentsub > .rect`)!.forEach(btn => {
                const id = parseInt(btn.id.replace(/[^\d]+/g, ""))
                const exists = userthemes.some(theme => id === theme.id)
                
                if (!exists) return btn.remove()
    
                document.querySelector(`#${btn.id} > span`)!.textContent = userthemes[id].label
                document.querySelector(`#usertheme > span`)!.textContent = userthemes[enabled || 0].label
    
                btn.toggleAttribute("enabled",btn.id === `usertheme${enabled || 0}`)
            })
        })
    },
    set: (id: number,event?: Event) => {
        const { config, type, userthemes } = usertheme.data()
        if (event && (event.target as HTMLElement).classList.contains(`userthemedelbtn`)) return usertheme.delete(type,event.target!)
        
        const updatedthemes = userthemes.map(theme => {
            theme.enabled = theme.id === id
            return theme
        })
        
        const selected = updatedthemes.find(theme => theme.enabled)!
        const customisation = { ...selected.customisation as Customisation }

        customisation.usertheme = []

        updatedthemes.forEach((theme: Button) => {
            delete (theme.customisation as any).usertheme
            customisation.usertheme.push(theme)
        })

        config.set(`customisation.${type}`,customisation)

        ;(async () => {
            if (!event) {
                const importlog = document.querySelector(".wrapper#importlog")
                if (!importlog) return

                const { language } = await import("./language")
                importlog.innerHTML = await language.get("importdone",["customiser","theme","content"])
            }
        })()

        dialog.close()
        usertheme.update()
    },
    create: (name: string,icon: string,customobj?: Customisation) => {
        const { config, type, userthemes } = usertheme.data()
        const ids = userthemes.map(theme => theme.id)
        const labelmatch = userthemes.find(theme => theme.label === name)

        let newid = 0

        if (labelmatch) {
            newid = labelmatch.id as number
        } else {
            while (ids.includes(newid)) newid++
        }

        const customisation: Customisation = customobj || config.get(`customisation.${type}`) as Customisation
        delete (customisation as any).usertheme

        const theme: Button = {
            id: newid,
            label: name,
            icon: icon.replace(/^(url\(["']?)|(["']?\))$/g,""),
            customisation: customisation,
            enabled: true
        }

        userthemes.forEach((theme,i) => config.set(`customisation.${type}.usertheme.${i}.enabled`,false))
        config.set(`customisation.${type}.usertheme.${newid}`,theme)

        if (customobj) {
            (async () => await sanconfig.validatecustomicons(type))()
            usertheme.set(theme.id as number)
            return window.dispatchEvent(new CustomEvent("tabchanged",{ detail: { type: type } }))
        }

        usertheme.update()
        dialog.close()
    },
    delete: (type: string,target: EventTarget) => {
        const { config } = usertheme.data()
        let { userthemes } = usertheme.data()
        const id = parseInt((target as HTMLElement).id.replace(/[^\d]+/g,""))

        const remaining: Button[] = []
        
        userthemes.forEach(theme => {
            if (theme.id !== id) return remaining.push(theme)
            
            try {
                const userthemedir = path.join(sanhelper.appdata,"userthemes")
                if (!fs.existsSync(userthemedir)) return

                const subdirs = fs.readdirSync(userthemedir)
                let match: string | null = null

                for (const dirname of subdirs) {
                    const filepath = path.join(userthemedir,dirname,"usertheme.json")
                    if (!fs.existsSync(filepath)) throw new Error(`No "usertheme.json" file found in "${path.join(userthemedir,dirname)}"`)

                    const json = JSON.parse(fs.readFileSync(filepath).toString())

                    if (json.label === theme.label) {
                        match = dirname
                        break
                    }
                }

                if (!match) return log.write("INFO",`No imported theme labels matching "${theme.label}" found in "${userthemedir}"`)

                const handlecustomfiles = (customfiles: boolean,dir: string,theme: Button) => {
                    if (!customfiles) return log.write("INFO",`"customfiles" not active`)

                    const userthemepath = path.join(sanhelper.appdata,"userthemes",dir,"usertheme.json")
                    const userthemejson = fs.existsSync(userthemepath) ? JSON.parse(fs.readFileSync(userthemepath).toString()) as Button : null
    
                    if (!userthemejson) throw new Error(`No "userthemes.json" file found for "${theme.label}". Imported Theme files cannot be removed`)
                    if (!userthemejson.customfilesdir) return log.write("INFO",`No "customfilesdir" key found for "${theme.label}" in "usertheme.json"`)
    
                    const { customfilesdir } = userthemejson
    
                    const filepath = path.join(sanhelper.appdata,"customfiles","notify","presets","presets.json")
                    const presetsjson = JSON.parse(fs.readFileSync(filepath).toString()) as { [key: string]: string }
    
                    delete (presetsjson as any)[customfilesdir]
                    fs.writeFileSync(filepath,JSON.stringify(presetsjson,null,4))
                    log.write("INFO",`"presets.json" updated successfully`)
                }

                handlecustomfiles(config.get("usecustomfiles"),match,theme)

                const removeimportdir = (dir: string): boolean => {
                    if (!fs.existsSync(dir)) return false

                    fs.rmSync(dir,{ recursive: true, force: true })
                    log.write("INFO",`"${dir}" removed successfully`)

                    return true
                }

                const userthemespresetdir = path.join(sanhelper.appdata,"userthemes",match)
                const res = removeimportdir(userthemespresetdir)
                if (!res) throw new Error(`"${userthemespresetdir}" does not exist`)
            } catch (err) {
                log.write("ERROR",`Error removing "${theme.label}": ${(err as Error).stack}`)
            }
        })

        if (!remaining.length) return
      
        config.set(`customisation.${type}.usertheme`,remaining)

        // Update the current userthemes list (after deleting theme), and reset each object's `id` to be zero indexed
        userthemes = config.get(`customisation.${type}.usertheme`) as Button[]
        userthemes.forEach((theme,i) => {
            config.set(`customisation.${type}.usertheme.${i}.id`,i)
            document.getElementById(`usertheme${i}`)!.style.setProperty("--icon",`url('${theme.icon}')`)
        })

        const enabled = userthemes.find(theme => theme.enabled)
        !enabled && (config.set(`customisation.${type}.usertheme.0.enabled`,true))

        usertheme.update()
    },
    import: async () => {
        const { language } = await import("./language")
        const importhandler = () => ipcRenderer.once("importtheme", async (event,file: string) => {
            if (!file) return
            if (path.extname(file[0]) !== ".san") return log.write("ERROR",`"${file[0]}" is not a valid import file`)

            const destpath = path.join(sanhelper.appdata,"userthemes")
            const dest = path.join(destpath,path.basename(file[0]))
            const parsed = path.parse(dest)
            const importlog = document.querySelector(".wrapper#importlog > span")!

            parsed.ext = ".zip"
            parsed.base = `${parsed.name}${parsed.ext}`

            try {
                !fs.existsSync(destpath) && fs.mkdirSync(destpath,{ recursive: true })
                fs.copyFileSync(file[0],dest)
                log.write("INFO",`"${file[0]}" copied to "${dest}" successfully`)
                importlog.innerHTML = await language.get("importcopied",["customiser","theme","content"])

                const zipdest = path.format(parsed)

                fs.renameSync(dest,zipdest)
                log.write("INFO",`"${zipdest}" renamed successfully`)
                importlog.innerHTML = await language.get("importrenamed",["customiser","theme","content"])

                const { default: AdmZip } = await import("adm-zip")
                const zip = new AdmZip(zipdest)

                parsed.ext = ""
                parsed.base = `${parsed.name}${parsed.ext}`

                const themedir = path.format(parsed)

                zip.extractAllTo(themedir,true)
                fs.rmSync(zipdest,{ recursive: true, force: true })
                log.write("INFO",`"${zipdest}" dir extracted and cleaned up successfully`)
                importlog.innerHTML = await language.get("importextracted",["customiser","theme","content"])

                const importtheme: Button = JSON.parse(fs.readFileSync(path.join(themedir,"usertheme.json")).toString())
                const { customisation } = importtheme as Button
                importtheme.icon = path.join(themedir,"assets",path.basename(importtheme.icon)).replace(/\\/g,"/")
                
                if (!customisation) throw new Error(`Error loading imported usertheme: "customisation" missing from object`)
                const presetsdir = path.join(themedir,"presets")

                if (fs.existsSync(presetsdir)) {
                    const preset = customisation.preset

                    fsextra.copySync(path.join(presetsdir,preset),path.join(sanhelper.appdata,"customfiles","notify","presets",preset))
                    log.write("INFO",`"${preset}" dir copied successfully`)
                    
                    const presetsjson = path.join(themedir,"presets","presets.json")
                    fs.existsSync(presetsjson) && fs.copyFileSync(presetsjson,path.join(sanhelper.appdata,"customfiles","notify","presets","presets.json"))
                    log.write("INFO",`"${presetsjson}" extracted successfully`)

                    // Enable "usecustomfiles" automatically if a user-created preset is detected
                    sanconfig.get().set("usecustomfiles",true)
                }
    
                const contentmap = new Map<string,any>()
        
                content.forEach(key => {
                    if (customisation[key] === undefined) return log.write("ERROR",`"customisation.${sanhelper.type}.${key}" does not exist`)
                    getkeyvalue(customisation[key],key,contentmap)
                })
        
                if (!contentmap.size) throw new Error(`No keys found in "contentmap"`)

                importlog.innerHTML = await language.get("importrewriting",["customiser","theme","content"])
        
                contentmap.forEach((value,key) => {
                    if (!value) return
                    contentmap.set(key,rewritepath(themedir,value))
                })
        
                const newcustomisation = { ...customisation }
                const newkeys = converttoobject(Object.fromEntries(contentmap))

                importlog.innerHTML = await language.get("importconverting",["customiser","theme","content"])
        
                for (const [newkey,newvalue] of Object.entries(newkeys)) {
                    for (const [key,value] of Object.entries(customisation)) {
                        (newkey === key && newvalue !== value) && Object.assign(newcustomisation,{ [key]: newvalue })
                    }
                }

                importlog.innerHTML = await language.get("importcreating",["customiser","theme","content"])
                usertheme.create(importtheme.label,importtheme.icon,newcustomisation)
            } catch (err) {
                log.write("ERROR",`Error importing Theme: ${(err as Error).stack}`)
                importlog.parentElement!.setAttribute("error","")
                importlog.innerHTML = await language.get("importfailed",["customiser","theme","content"])
            }
        })

        dialog.open({
            title: await language.get("importtheme",["customiser","theme","content"]),
            type: "default",
            icon: sanhelper.setfilepath("icon","import.svg"),
            sub: await language.get("importsub",["customiser","theme","content"]),
            addHTML: `<div class="wrapper" id="importlog"><span>${await language.get("importidle",["customiser","theme","content"])}</span></div>`,
            buttons: [{
                id: "import",
                label: await language.get("import",["customiser","theme","content"]),
                icon: sanhelper.setfilepath("icon","import.svg"),
                click: async () => {
                    const importlog = document.querySelector(".wrapper#importlog > span")!
                    importlog.parentElement!.removeAttribute("error")
                    importlog.innerHTML = await language.get("importidle",["customiser","theme","content"])

                    importhandler()
                    ipcRenderer.send("importtheme")
                }
            }]
        })
    },
    export: () => {
        ipcRenderer.once("exporttheme", async (event,dest: string | undefined) => {
            if (!dest) return

            const { default: AdmZip } = await import("adm-zip")
            const zip = new AdmZip()
            const parsed = path.parse(dest)

            parsed.ext = ".san"
            parsed.base = `${parsed.name}${parsed.ext}`

            try {
                fs.existsSync(src) && fs.rmSync(src,{ recursive: true, force: true })
                fs.mkdirSync(path.join(src,"assets"),{ recursive: true })
                log.write("INFO",`"${src}" dir created successfully`)

                const theme = usertheme.data().userthemes.find(theme => theme.enabled) as Button
                const { customisation } = theme

                if (!customisation) throw new Error("Error loading current usertheme")

                const contentmap = new Map<string,any>()

                content.forEach(key => {
                    if (customisation[key] === undefined) return log.write("ERROR",`"customisation.${sanhelper.type}.${key}" does not exist`)
                    getkeyvalue(customisation[key],key,contentmap)
                })

                if (!contentmap.size) throw new Error(`No keys found in "contentmap"`)

                const icondir = fs.existsSync(path.join(__root,"img",path.basename(theme.icon))) ? "img" : "icon"
                theme.icon = (!path.isAbsolute(theme.icon) ? path.join(__root,icondir,path.basename(theme.icon)) : theme.icon).replace(/\\/g,"/")
                fs.copyFileSync(theme.icon,path.join(src,"assets",path.basename(theme.icon)))

                theme.version = sanhelper.semver

                const config = sanconfig.get()
                const preset = config.get("usecustomfiles") ? config.get(`customisation.${sanhelper.type as "main" | "rare" | "plat"}.preset`) as string : null
                const defaultpresets = Array.from(sanconfig.defaulticons.keys()).filter(dir => dir !== "os")

                if (preset && !defaultpresets.includes(preset)) {
                    const presetdir = path.join(src,"presets",preset)
                    const customfilesdir = path.join(sanhelper.appdata,"customfiles","notify","presets",preset)
    
                    if (!fs.existsSync(customfilesdir)) throw new Error(`"${preset}" is invalid - expected Preset dir "${customfilesdir}" does not exist`)
                    
                    !fs.existsSync(presetdir) && fs.mkdirSync(presetdir,{ recursive: true })
                    fsextra.copySync(path.join(sanhelper.appdata,"customfiles","notify","presets",preset),presetdir)
                    log.write("INFO",`"${path.join(sanhelper.appdata,"customfiles","notify","presets",preset)}" dir copied successfully`)

                    const presetsjson = path.join(sanhelper.appdata,"customfiles","notify","presets","presets.json")
                    fs.copyFileSync(presetsjson,path.join(src,"presets","presets.json"))
                    log.write("INFO",`"${presetsjson}" copied successfully`)
                }

                // Writes the `userthemes`/`customfiles` dirnames to the Theme - required when deleting leftover files from imported Themes
                theme.userthemedir = parsed.name
                preset && (theme.customfilesdir = preset)

                contentmap.forEach(value => {
                    if (!value) return

                    if (Array.isArray(value)) {
                        value.forEach(subvalue => fs.copyFileSync(subvalue,path.join(src,"assets",path.basename(subvalue))))
                    } else {
                        fs.copyFileSync(value,path.join(src,"assets",path.basename(value)))
                    }
                })

                const json = JSON.stringify(theme,null,4)
                fs.writeFileSync(path.join(src,"usertheme.json"),json)

                zip.addLocalFolder(src)
                zip.writeZip(dest)
                log.write("INFO",`"${dest}" ZIP archive created successfully`)

                fs.renameSync(dest,path.format(parsed))
                fs.rmSync(src,{ recursive: true, force: true })
                log.write("INFO",`"${src}" removed successfully`)
            } catch (err) {
                log.write("ERROR",`Error exporting Theme: ${(err as Error).stack}`)
            }
        })

        const src = path.join(sanhelper.appdata,"temp","exporttheme")

        ipcRenderer.send("exporttheme")
    }
}