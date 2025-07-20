import { ipcRenderer } from "electron"
import Store from "electron-store"
import path from "path"
import fs from "fs"
import fsextra from "fs-extra"
import { sanhelper, __root } from "./sanhelper"
import { dialog } from "./dialog"
import { sanconfig, customfilekeys } from "./config"
import { log } from "./log"

const isobject = (item: any): item is Record<string,any> => typeof item === "object" && item !== null && !Array.isArray(item)

const getkeyvalue = (value: any,key: string,map = new Map<string,any>()): Map<string,any> => {
    if (!isobject(value)) {
        map.set(key,value)
        return map
    }

    for (const subkey in value) {
        if (Object.prototype.hasOwnProperty.call(value,subkey)) {
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

const rewritepath = (themedir: string,value: string | string[]) => {
    if (!value) return log.write("WARN",`Received ${typeof value} - skipping...`)
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
        const type = sanhelper.type as NotifyType
        const userthemes = config.get(`customisation.${type}.usertheme`) as UserTheme[]

        return { config, type, userthemes }
    },
    update: () => {
        let { config, type, userthemes } = usertheme.data()
        let enabled = userthemes.find(theme => theme.enabled)!.id as number

        // If no theme is enabled, enable the first one
        if (!enabled) {
            config.set(`customisation.${type}.usertheme.0.enabled`,true)

            ;({ config, type, userthemes } = usertheme.data())
            enabled = userthemes.find(theme => theme.enabled)?.id as number
        }

        const synced = usertheme.issynced(config)

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

            const themeselect = document.querySelector(`dialog[selection]:has([id^="usertheme"])`)

            if (themeselect) {
                if (themeselect.querySelector("button#userthemesync")) return

                const btnwrapper = document.querySelector(`dialog[selection] .btnwrapper`)!
                btnwrapper.querySelector("button#backbtn")!.remove()

                const html = `
                    <button id="userthemesync">
                        <div id="userthemesyncstars">
                            <span id="stars_main"></span>
                            <span id="stars_semi"></span>
                        </div>
                        <span></span>
                    </button>
                `

                btnwrapper.insertAdjacentHTML("beforeend",html)

                const sync = btnwrapper.querySelector("button#userthemesync")! as HTMLButtonElement
                sync.onclick = event => usertheme.sync(config,event.target as HTMLButtonElement,type)

                const span = sync.querySelector("button#userthemesync > span")!

                sync.toggleAttribute("sync",(synced && synced === type) as boolean)
                ;(synced && synced !== type) && themeselect.setAttribute("synced",synced)

                ;(async () => {
                    const { language } = await import("./language")
                    const syncstr = await language.get("synctheme",["customiser","theme","content"])
                    const typestr = synced ? await language.get((config.get("trophymode") ? "trophy" : "") + synced) : ""
                    const syncedwithstr = `${await language.get("syncedwith",["customiser","theme","content"])} ${typestr}`

                    span.textContent = !synced ? syncstr : (synced !== type ? syncedwithstr : syncstr)
                })()

                btnwrapper.appendChild(sync)
            }
        })
    },
    issynced: (config: Store<Config>) => {
        let synced: NotifyType | null = null
        const customisation = config.get("customisation")

        for (const type in customisation) {
            (customisation[type] as Customisation).synctheme && (synced = type as NotifyType)
        }

        return synced
    },
    set: (id: number,event?: Event) => {
        const { config, type, userthemes } = usertheme.data()
        const dialogelem = document.querySelector("dialog")
        if (event && (event.target as HTMLElement).classList.contains(`userthemedelbtn`)) return usertheme.delete(type,event.target!)
        
        const updatedthemes = userthemes.map(theme => {
            theme.enabled = theme.id === id
            return theme
        })
        
        const selected = updatedthemes.find(theme => theme.enabled)!
        const customisation = { ...selected.customisation as Customisation }

        // Checks all keys in current type on import and adds defaults if missing
        ;(async () => {
            const { sanconfig } = await import("./config")
            const customobj = sanconfig.defaultobj("customisation",type) as Customisation
            await sanconfig.validateconfigobj(customobj,type)
        })()

        customisation.usertheme = []

        updatedthemes.forEach((theme: UserTheme) => {
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

        dialogelem && dialog.close()
        usertheme.update()
    },
    create: (label: string,icon: string,customobj?: Customisation,update?: string,userthemedir?: string,usecustomfiles?: boolean) => {
        const { config, type, userthemes } = usertheme.data()
        const ids = userthemes.map(theme => theme.id)
        const labelmatch = userthemes.find(theme => theme.label === label)

        let newid = 0

        if (labelmatch) {
            newid = labelmatch.id as number
        } else {
            while (ids.includes(newid)) newid++
        }

        const customisation: Customisation = customobj || config.get(`customisation.${type}`) as Customisation
        delete (customisation as any).usertheme

        const theme: UserTheme = {
            id: newid,
            label,
            icon: icon.replace(/^(url\(["']?)|(["']?\))$/g,""),
            customisation: customisation,
            enabled: true,
            userthemedir: (userthemedir || "").replace(/\\/g,"/")
        }

        usecustomfiles && (theme.usecustomfiles = true)

        userthemes.forEach((theme,i) => config.set(`customisation.${type}.usertheme.${i}.enabled`,false))
        config.set(`customisation.${type}.usertheme.${newid}`,theme)

        if (customobj) {
            (async () => await sanconfig.validatecustomicons(type))()
            usertheme.set(theme.id as number)
            return window.dispatchEvent(new CustomEvent("tabchanged",{ detail: { type: type } }))
        }

        usertheme.update()
        !update && dialog.close()

        if (update) {
            const updatedbtn = document.getElementById(update)

            if (updatedbtn) {
                updatedbtn.removeAttribute("updated")
                updatedbtn.addEventListener("animationend",({ animationName }: AnimationEvent) => {
                    if (!config.get("noanim")) return updatedbtn.removeAttribute("updated")
                    animationName === "updated" && updatedbtn.removeAttribute("updated")
                },{ once: true })
                requestAnimationFrame(() => updatedbtn.setAttribute("updated",""))
            }
        }
    },
    delete: (type: string,target: EventTarget) => {
        const { config } = usertheme.data()
        let { userthemes } = usertheme.data()
        const id = parseInt((target as HTMLElement).id.replace(/[^\d]+/g,""))

        const remaining: UserTheme[] = []
        
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

                    if (json.userthemedir === theme.userthemedir) {
                        match = dirname
                        break
                    }
                }

                if (!match) return log.write("INFO",`No imported Theme dirs matching "${theme.userthemedir}" found in "${userthemedir}"`)

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
        userthemes = config.get(`customisation.${type}.usertheme`) as UserTheme[]
        userthemes.forEach((theme,i) => {
            config.set(`customisation.${type}.usertheme.${i}.id`,i)
            document.getElementById(`usertheme${i}`)!.style.setProperty("--icon",`url('${fs.existsSync(theme.icon) ? theme.icon : "../../img/sanlogotrophy.svg"}')`)
        })

        const enabled = userthemes.find(theme => theme.enabled)
        !enabled && (config.set(`customisation.${type}.usertheme.0.enabled`,true))

        usertheme.update()
    },
    import: async () => {
        const { language } = await import("./language")
        const importhandler = () => ipcRenderer.once("importtheme", async (event,file: string) => {
            if (!file) return
            if (path.extname(file[0]) !== ".san") return log.write("WARN",`"${file[0]}" is not a valid import file`)

            const destpath = path.join(sanhelper.appdata,"userthemes")
            const dest = path.join(destpath,path.basename(file[0]))
            const parsed = path.parse(dest)
            const importlog = document.querySelector(".wrapper#importlog > span")!

            parsed.name = `${parsed.name}_${sanhelper.type}`
            parsed.ext = ".zip"
            parsed.base = `${parsed.name}${parsed.ext}`
            
            try {
                fsextra.copySync(file[0],dest)
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

                const json = path.join(themedir,"usertheme.json")
                const importtheme: UserTheme = JSON.parse(fs.readFileSync(json).toString())
                const { customisation } = importtheme as UserTheme

                if (!customisation) throw new Error(`Error loading imported usertheme: "customisation" missing from object`)

                importtheme.icon = path.join(themedir,"assets",path.basename(importtheme.icon)).replace(/\\/g,"/")
                importtheme.userthemedir = parsed.name
    
                const customfilesmap = new Map<string,any>()
        
                customfilekeys.forEach(key => {
                    if (customisation[key] === undefined) return log.write("WARN",`"customisation.${sanhelper.type}.${key}" does not exist`)
                    getkeyvalue(customisation[key],key,customfilesmap)
                })

                if (!customfilesmap.size) throw new Error(`No keys found in "contentmap"`)

                importlog.innerHTML = await language.get("importrewriting",["customiser","theme","content"])
        
                customfilesmap.forEach((value,key) => {
                    if (!value || (typeof value !== "string" && !Array.isArray(value)) || key.endsWith("elems")) return
                    customfilesmap.set(key,rewritepath(themedir,value))
                })

                const config = sanconfig.get()
                const newkeys = converttoobject(Object.fromEntries(customfilesmap))

                // Populate all empty, non-exported `customicons` keys with default values
                for (const [preset,value] of Object.entries(newkeys.customicons)) {
                    if (value === "") {
                        if (sanconfig.defaulticons.has(preset)) {
                            newkeys.customicons[preset] = sanconfig.defaulticons.get(preset)
                        } else {
                            log.write("ERROR",`Unable to find "${preset}" in "sanconfig.defaulticons" - skipping...`)
                        }
                    }
                }

                importlog.innerHTML = await language.get("importconverting",["customiser","theme","content"])
                
                const newcustomisation = { ...customisation, ...newkeys }

                // Update `usertheme.json()` with converted values
                importtheme.customisation = { ...newcustomisation }
                fs.writeFileSync(json,JSON.stringify(importtheme,null,4))

                importlog.innerHTML = await language.get("importcreating",["customiser","theme","content"])

                usertheme.create(importtheme.label,importtheme.icon,newcustomisation,undefined,parsed.name,config.get("usecustomfiles"))
            } catch (err) {
                log.write("ERROR",`Error importing Theme: ${err as Error}`)
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
        const src = path.join(sanhelper.appdata,"temp","exporttheme")

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

                const theme = usertheme.data().userthemes.find(theme => theme.enabled) as UserTheme
                const { customisation } = theme

                if (!customisation) throw new Error("Error loading current usertheme")

                const contentmap = new Map<string,any>()
                
                customfilekeys.forEach(key => {
                    if (customisation[key] === undefined) return log.write("WARN",`"customisation.${sanhelper.type}.${key}" does not exist`)

                    const customicons = customisation[key] as { [key: string]: CustomIcon | string }

                    if (key === "customicons") {
                        for (const preset in customicons) {
                            if (!("plat" in customicons)) customicons.plat = sanhelper.setfilepath("img","ribbon.svg")
                            if (preset !== customisation.preset && preset !== "plat") (customicons as any)[preset] = ""
                        }

                        customisation.customicons = customicons
                    }

                    getkeyvalue(customisation[key],key,contentmap)
                })

                if (!contentmap.size) throw new Error(`No keys found in "contentmap"`)

                const icondir = fs.existsSync(path.join(__root,"img",path.basename(theme.icon))) ? "img" : "icon"
                theme.icon = (!path.isAbsolute(theme.icon) ? path.join(__root,icondir,path.basename(theme.icon)) : theme.icon).replace(/\\/g,"/")
                fsextra.copySync(theme.icon,path.join(src,"assets",path.basename(theme.icon)))

                theme.version = sanhelper.semver
                theme.userthemedir = parsed.name

                // Filters by and copies all string-based keys (filepaths) listed in `customfilekeys` from the value's path to "temp/exporttheme/assets"
                contentmap.forEach((value,key) => {
                    if (!value || typeof value !== "string" && (!Array.isArray(value) || !value.every(item => typeof item === "string" && ["unlockmsg","title","desc"].every(elem => item !== elem)))) return

                    if (Array.isArray(value)) {
                        value.forEach(subvalue => fsextra.copySync(subvalue,path.join(src,"assets",path.basename(subvalue))))
                    } else {
                        if (key === "sounddir") {
                            // `value` is the "sounddir" folder path
                            const sounddirpath = path.join(src,"assets",path.basename(value))
                            fs.mkdirSync(sounddirpath,{ recursive: true })
                            
                            for (const validfile of fs.readdirSync(value).filter(file => sanhelper.audioextensions.includes(path.extname(file)))) {
                                fsextra.copySync(path.join(value,validfile),path.join(sounddirpath,validfile))
                            }
                        } else {
                            fsextra.copySync(value,path.join(src,"assets",path.basename(value)))
                        }
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

                ;(async () => {
                    const { language } = await import("./language")

                    dialog.open({
                        title: await language.get("exporterrortitle",["customiser","theme","content"]),
                        type: "default",
                        icon: sanhelper.setfilepath("icon","error.svg"),
                        sub: await language.get("exporterrorsub",["customiser","theme","content"]),
                        addHTML: `<div class="wrapper" id="exportthemeerror"><code>${err as Error}</code></div>`
                    })
                })()
            }
        })

        ipcRenderer.send("exporttheme")
    },
    sync: (config: Store<Config>,btn: HTMLButtonElement,elemtype: NotifyType) => {
        const key = `customisation.${elemtype}.synctheme`
        const value = !config.get(key) as boolean

        config.set(key,value)
        btn.toggleAttribute("sync",value)
    },
    syncedtheme: (config: Store<Config>,syncobj: Customisation) => {
        // Syncs the Theme over all notification types if `customisation.${type}.synctheme` is enabled
        const customisation = config.get(`customisation`)

        for (const type in customisation) {
            const customobj = customisation[type] as Customisation
            const ignore = [
                "primarycolor",
                "secondarycolor",
                "tertiarycolor",
                "percentbadgecolor",
                "sspercentbadgecolor"
            ]

            if (customobj.synctheme) {
                syncobj = {
                    ...syncobj,
                    ...Object.keys(syncobj).reduce((acc,key) => {
                        acc[key] = (key in customobj && !ignore.includes(key)) ? customobj[key] : syncobj[key]
                        return acc
                    },{} as Customisation)
                }

                break
            }
        }

        return syncobj
    },
    themeswitchinfo: (config: Store<Config>,appid: number,notify?: { customisation: Customisation,type: NotifyType,getsrc?: boolean }) => {
        const themeswitch: [key: string,ThemeSwitch] | undefined = Object.entries(JSON.parse(localStorage.getItem("themeswitch")!)).find(item => parseInt(item[0]) === appid) as [key: string,ThemeSwitch]
        if (!notify) return { themeswitchcustomisation: null, themeswitchsrc: null, enabled: Boolean(themeswitch) }

        const { customisation, type, getsrc } = notify

        let customobj = { ...customisation }
        let src = config.get("monitor")

        delete (customobj as any).usertheme

        if (themeswitch) {
            const theme = config.get(`customisation.${type}.usertheme.${themeswitch[1].themes[type]}`) as UserTheme

            if (theme && "customisation" in theme) {
                customobj = theme.customisation
                getsrc && (src = themeswitch[1].src)
            } else {
                log.write("ERROR",`Unable to load Theme for AppID "${appid}" via Auto-Switch Themes - assigned Theme may have been deleted`)
            }
        }

        return { themeswitchcustomisation: customobj, themeswitchsrc: src, enabled: Boolean(themeswitch) }
    }
}