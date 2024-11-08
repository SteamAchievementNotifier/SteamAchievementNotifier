import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import Store from "electron-store"
import { dialog } from "./dialog"
import { sanconfig, customfilekeys } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"
import { language } from "./language"
import fsextra from "fs-extra"

export const themes = {
    load: () => {
        const themesmap = new Map<"main" | "rare" | "plat",Store<Customisation>[]>()
        const types = ["main","rare","plat"] as ("main" | "rare" | "plat")[]
        const themedir = path.join(sanhelper.appdata,"themes")

        types.forEach(type => {
            const typethemes = path.join(themedir,type)
            if (!fs.existsSync(typethemes)) throw new Error(`"${typethemes}" dir does not exist`)

            const themedirs = fs.readdirSync(typethemes)
            if (!themedirs.length) throw new Error(`"${typethemes}" contains no Themes`)

            const stores: Store<Customisation>[] = []

            themedirs.forEach(label => {
                const themepath = path.join(typethemes,label)
                const themejson = path.join(themepath,"theme.json")
                if (!fs.statSync(themepath).isDirectory()) throw new Error(`"${themepath}" is not a directory`)
                if (!fs.existsSync(themejson)) throw new Error(`"${themejson}" does not exist for "${label}" Theme`)
    
                const store = new Store<Customisation>({
                    name: "theme",
                    cwd: themepath
                })

                stores.push(store)
            })

            themesmap.set(type as "main" | "rare" | "plat",stores)
        })

        return themesmap
    },
    create: (type: "main" | "rare" | "plat",customobj: Customisation,importdir?: string) => {
        const themesdir = path.join(sanhelper.appdata,"themes")
        if (!fs.existsSync(themesdir)) throw new Error(`"${themesdir}" could not be located`)

        try {
            // Check if label contains unsupported OS characters
            const invalidchars = /[<>":\\/|?*\x00-\x1F]/g.test(customobj.label)
            if (invalidchars) throw new Error(`Theme label "${customobj.label}" uses unsupported characters`)
    
            const themepath = path.join(themesdir,type,customobj.label)
            if (importdir && fs.existsSync(themepath)) throw new Error(`A Theme with the label "${customobj.label}" already exists for "${type}" type`)
            
            const assetspath = path.join(themepath,"assets")

            if (!importdir) {
                // If `importdir` is not provided, update assets in `assetspath` with all files found in `customobj`
                if (!fs.existsSync(assetspath)) {
                    fs.mkdirSync(assetspath,{ recursive: true })
                    log.write("INFO",`"${assetspath}" dir created successfully`)
                }

                const assets = themes.updateassets(customobj,assetspath,customfilekeys)
                log.write(assets.length ? "INFO" : "ERROR",assets.length ? `Exported the following assets to "${assetspath}":\n\n- ${assets.join("\n- ")}` : `No assets were exported to "${assetspath}"`)
            } else {
                // If `importdir` is specified, copy the temp dir's "assets" folder contents, then delete the temp dir
                const importassetspath = path.join(importdir,"assets")

                // Create if `importdir` does not exist
                if (!fs.existsSync(importassetspath)) {
                    fs.mkdirSync(importassetspath,{ recursive: true })
                    log.write("INFO",`"${importassetspath}" dir created successfully`)
                }

                fs.mkdirSync(assetspath,{ recursive: true })
                log.write("INFO",`"${themepath}" dir created successfully`)

                fsextra.copySync(importassetspath,assetspath)
                log.write("INFO",`"${importassetspath}" copied to "${assetspath}" successfully`)
                
                // Remove the extracted dir to ensure `id` is set correctly from `destpath` length
                fs.rmSync(importdir,{ recursive: true, force: true })
                log.write("INFO",`"${importdir}" cleaned up successfully`)
            }

            // Create `theme.json` in `sanhelper.appdata/themes/<type>/<Theme label>` dir
            const store = new Store<Customisation>({
                name: "theme",
                cwd: themepath
            })

            store.set(customobj)
            log.write("INFO",`"${path.join(themepath,"theme.json")}" created successfully`)

            // Load created Theme into config/UI
            process.type === "renderer" && themes.update(type,customobj.id)

            return store
        } catch (err) {
            throw err
        }
    },
    update: (type: "main" | "rare" | "plat",id?: number): void => {
        try {
            let themesmap = themes.load()
            const themeselectlbl = document.querySelector(`button.rect#usertheme > span`)!
    
            if (typeof id === "number") {
                const stores = themesmap.get(type)
                if (!stores) throw new Error(`No "theme.json" files present in "${type}" Theme dir`)
                    
                // If `id` is provided, set Theme with matching `id` as enabled and disable all others
                for (const store of stores) {
                    const { store: theme } = store
                    const match = id === theme.id
                    
                    store.set({ ...theme, enabled: match })
                    match && log.write("INFO",`"${type}" Theme updated to "${theme.label}" (id: ${id})`)
                }
    
                // Reload `themesmap` for updated `theme.json` files if `id` is provided
                themesmap = themes.load()
                const config = sanconfig.get()
                const customisation = themes.set(type,themesmap)
    
                // Load the enabled Theme into config if `id` is provided
                config.set("customisation",customisation)
                log.write("INFO",`"config.customisation" updated:\n\nMain: "${customisation.main.label}"\nRare: "${customisation.rare.label}"\n100%: "${customisation.plat.label}"`)
    
                document.querySelector("dialog") && dialog.close()
            }

            let enabled = themesmap.get(type)!.find(({ store: theme }) => theme.enabled)

            if (!enabled) {
                log.write("ERROR",`No valid theme found for "${type}"`)
                return themes.update(type,0)
            }

            // Set the label of the Theme in the UI
            themeselectlbl.textContent = enabled.store.label
        } catch (err) {
            log.write("ERROR",`Error updating "${type}" Theme: ${(err as Error).stack}`);
        }
    },
    set: (type: "main" | "rare" | "plat",themesmap: Map<"main" | "rare" | "plat",Store<Customisation>[]>) => {
        try {
            const getenabledthemes = (themesmap: Map<"main" | "rare" | "plat",Store<Customisation>[]>) => {
                const customisation: any = {}
    
                for (const [type,stores] of themesmap) {
                    for (const store of stores) {
                        const { store: theme } = store
                        if (theme.enabled) {
                            customisation[type] = theme
                            break
                        }
                    }
    
                    if (!customisation[type]) {
                        const defaulttheme = stores.find(store => store.get("id") === 0)
                        if (!defaulttheme) throw new Error(`No Theme could be enabled as a "${type}" Theme`)
                        
                        const { store: theme } = defaulttheme
                        customisation[type] = theme
                    }
                }

                themes.reindex(type)
    
                return customisation as { main: Customisation, rare: Customisation, plat: Customisation }
            }

            return getenabledthemes(themesmap)
        } catch (err) {
            log.write("ERROR",`Error setting Themes: ${err as Error}`)

            const config = sanconfig.get()
            return config.get("customisation")
        }
    },
    setid: (type: "main" | "rare" | "plat") => {
        const themesmap = themes.load()
        const typethemes = themesmap.get(type)
        if (!typethemes || !typethemes.length) throw new Error(`Error getting Themes for "${type}": Themes for this type may be missing or corrupted`)
    
        const ids = new Set<number>()
    
        for (const { store: theme } of typethemes) {
            ids.add(theme.id)
        }
    
        let availableid = 0
    
        while (ids.has(availableid)) {
            availableid++
        }
    
        return availableid
    },
    delete: (type: "main" | "rare" | "plat",id: number) => {
        try {
            const themesmap = themes.load()
            const typethemes = themesmap.get(type)
            if (!typethemes || !typethemes.length) throw new Error(`Error getting Themes for "${type}": Themes for this type may be missing or corrupted`)
            if (typethemes.length === 1) return log.write("ERROR",`At least one Theme must be enabled for "${type}"`)
    
            const deletedtheme = typethemes.find(({ store: theme }) => theme.id === id)
            if (!deletedtheme) throw new Error(`"${type}" Theme with "id": ${id} not found in current Themes`)

            const themepath = path.dirname(deletedtheme.path)
            if (!fs.existsSync(themepath)) throw new Error(`"${themepath}" does not exist`)

            fs.rmSync(themepath,{ recursive: true, force: true })
            log.write("INFO",`"${themepath}" deleted successfully`)

            // Remove the associated button in the Theme Select menu
            document.querySelector(`button.rect#theme${id}`)?.remove()

            themes.reindex(type)
        } catch (err) {
            log.write("ERROR",`Error deleting "${type}" Theme: ${err as Error}`)
        }
    },
    reindex: (type: "main" | "rare" | "plat") => {
        const themesmap = themes.load()
        const typethemes = themesmap.get(type)
        if (!typethemes || !typethemes.length) throw new Error(`Error getting Themes for "${type}": Themes for this type may be missing or corrupted`)
    
        let availableid = 0
        typethemes.sort((a,b) => a.store.id - b.store.id)

        typethemes.forEach(store => {
            const { store: theme } = store
    
            if (theme.id !== availableid) {
                store.set({ ...theme, id: availableid })

                const themeselectbtn: HTMLButtonElement | null = document.querySelector(`button.rect#theme${theme.id}`)
                if (themeselectbtn) {
                    themeselectbtn.id = `theme${availableid}`
                    themeselectbtn.onclick = () => themes.update(type,availableid)
                }
    
                log.write("INFO",`Reassigned id for "${type}" Theme "${theme.label}" from ${theme.id} to ${availableid}`)
            }

            availableid++
        })
    
        log.write("INFO",`"${type}" Themes re-indexed successfully`)
    },
    import: async (type: "main" | "rare" | "plat") => {
        let rmdir: string | null = null

        const importhandler = async (file: string[],importlog: HTMLSpanElement) => {
            try {
                // Return if dialog is cancelled, or if file does not have a `.san` extension
                if (!file) return
                if (path.extname(file[0]) !== ".san") throw new Error(`"${path.extname(file[0])}" is not a valid import format`)
                
                const tempdir = path.join(sanhelper.appdata,"temp")
                rmdir = tempdir

                const src = path.join(tempdir,"importtheme")
                !fs.existsSync(src) && fs.mkdirSync(src,{ recursive: true })
                
                // Create the path to the temp dir where files will be extracted
                const srcdest = path.join(src,path.basename(file[0])) // This will be the full path to the `.san` file: `sanhelper.appdata/temp/importtheme/<filename>.san`
                const parsed = path.parse(srcdest) // This will be an object with each part of the path: { base: `<filename>.san`, dir: `sanhelper.appdata/themes/<type>`, ext: `.san`, name: `<filename>`, root: <`C:\\`, `D:\\` etc.> }

                // Rename `.../<filename>.san` to `.../<filename>.zip`, and store in in-memory `parsed` object
                parsed.ext = ".zip"
                parsed.base = `${parsed.name}${parsed.ext}`

                // Copy `.san` file from original location to `sanhelper.appdata/temp/importtheme`
                fs.copyFileSync(file[0],srcdest)
                log.write("INFO",`"${file[0]}" copied to "${srcdest}" successfully`)
                importlog && (importlog.innerHTML = await language.get("importcopied",["customiser","theme","content"]))

                // Join all keys in `parsed` object to create `sanhelper.appdata/temp/importtheme/<filename>.zip` path string
                const zipdest = path.format(parsed)

                // Rename `.san` file to `.zip`
                fs.renameSync(srcdest,zipdest)
                log.write("INFO",`"${zipdest}" renamed successfully`)
                importlog && (importlog.innerHTML = await language.get("importrenamed",["customiser","theme","content"]))

                const { default: AdmZip } = await import("adm-zip")
                const zip = new AdmZip(zipdest)

                // Update `parsed` object to remove the file extension, in order to unzip to a dir
                parsed.ext = ""
                parsed.base = `${parsed.name}${parsed.ext}`

                // Join all keys in `parsed` object to create `sanhelper.appdata/temp/importtheme/<filename>` dir string
                const importdir = path.format(parsed)

                // Extract all contents of `sanhelper.appdata/themes/<type>/<filename>.zip` to `sanhelper.appdata/themes/<type>/<filename>` dir
                zip.extractAllTo(importdir,true)
                fs.rmSync(zipdest,{ recursive: true, force: true })
                log.write("INFO",`"${zipdest}" dir extracted and cleaned up successfully`)
                importlog && (importlog.innerHTML = await language.get("importextracted",["customiser","theme","content"]))

                // Check if the extracted dir has a file named `usertheme.json` - if so, it's a legacy Theme
                const islegacytheme = fs.existsSync(path.join(importdir,"usertheme.json"))
                islegacytheme && log.write("INFO",`"${file[0]}" is a legacy Theme file, which will be converted to V1.9.15+ Theme format`)

                // Parse the JSON in the relevant `theme.json/usertheme.json` file
                const jsonpath = path.join(importdir,`${islegacytheme ? "user" : ""}theme.json`)
                const theme: Customisation | LegacyUserTheme = JSON.parse(fs.readFileSync(jsonpath).toString())

                // Convert legacy keys into new format, and rewrite all paths to use assets in `sanhelper.appdata/themes/<type>/<Theme label>`
                const importobj = themes.createimportobj(type,theme)

                const store = themes.create(type,importobj,importdir)
                rmdir = path.dirname(store.path)

                // Validate all keys in imported `store` object
                const validated = await sanconfig.validateconfigobj(importobj,type)

                if (validated) {
                    // Get validated `Customisation` object and write back to `theme.json` 
                    const customobj = validated.get(`customisation.${type}`) as Customisation
                    store.set(customobj)

                    // Needs re-updating after validation, as object is written to `theme.json`, but not yet to `config.json`
                    themes.update(type,customobj.id)
                }
            } catch (err) {
                log.write("ERROR",`Error importing Theme: ${(err as Error).stack}`)

                if (importlog) {
                    importlog.parentElement!.setAttribute("error","")
                    importlog.innerHTML = (err as Error).message || await language.get("importfailed",["customiser","theme","content"])
                }

                // Clean up partial dir if an error occurs during Theme creation
                if (rmdir && fs.existsSync(rmdir)) {
                    fs.rmSync(rmdir,{ recursive: true, force: true })
                    log.write("INFO",`Partial dir "${rmdir}" cleaned up successfully`)
                }
            }
        }

        return dialog.open({
            title: await language.get("importtheme",["customiser","theme","content"]),
            type: "default",
            icon: sanhelper.setfilepath("icon","import.svg"),
            sub: await language.get("importsub",["customiser","theme","content"]),
            addHTML: `
                <div class="wrapper" id="importlog">
                    <span>${await language.get("importidle",["customiser","theme","content"])}</span>
                </div>
            `,
            buttons: [{
                id: "import",
                label: await language.get("import",["customiser","theme","content"]),
                icon: sanhelper.setfilepath("icon","import.svg"),
                click: async () => {
                    const importlog = document.querySelector(".wrapper#importlog > span") as HTMLSpanElement

                    importlog.parentElement!.removeAttribute("error")
                    importlog.innerHTML = await language.get("importidle",["customiser","theme","content"])

                    ipcRenderer.once("importtheme", (event,file: string[]) => importhandler(file,importlog))
                    ipcRenderer.send("importtheme")
                }
            }]
        })
    },
    export: (store: Store<Customisation>,exportdest?: string) => {
        let rmdir: string | null = null

        const exporthandler = async (dest: string) => {
            const tempdir = path.join(sanhelper.appdata,"temp")
            const src = path.join(tempdir,"exporttheme")
            const exportdestdir = exportdest ? dest.replace(/\.zip$/,"") : null

            const { default: AdmZip } = await import("adm-zip")
            const zip = new AdmZip()
            const parsed = path.parse(dest)

            parsed.ext = ".san"
            parsed.base = `${parsed.name}${parsed.ext}`

            try {
                // Remove `sanhelper.appdata/temp/exporttheme` if exists
                fs.existsSync(src) && fs.rmSync(src,{ recursive: true, force: true })
                rmdir = src

                // Create the export dir's "assets" folder
                const assetspath = path.join(src,"assets")
                fs.mkdirSync(assetspath,{ recursive: true })
                log.write("INFO",`"${src}" dir created successfully`)

                const { store: theme } = store

                if (!exportdest) {
                    // Check all filepaths specified in `customfilekeys` and copies assets to export dir
                    const assets = themes.updateassets(theme,assetspath,customfilekeys)
                    log.write(assets.length ? "INFO" : "ERROR",assets.length ? `Exported the following assets to "${src}":\n\n- ${assets.join("\n- ")}` : `No assets were exported to "${src}"`)
                } else {
                    const exportassetspath = path.join(exportdestdir as string,"assets")
                    fsextra.copySync(exportassetspath,assetspath)
                    log.write("INFO",`"${exportassetspath}" copied to "${assetspath}" successfully`)
                }

                // Write `customicons` object that matches the currently selected preset, "plat" or "os" - otherwise sets the preset's value to `""`
                for (const key of Object.keys(theme)) {
                    if (key === "customicons") {
                        for (const [preset,value] of Object.entries(theme[key])) {
                            theme[key][preset] = (preset === theme.preset || preset === "plat" || preset === "os") ? value : ""
                        }
                    }
                }

                // Create `theme.json` file in export dir
                const jsonpath = path.join(src,"theme.json")
                fs.writeFileSync(jsonpath,JSON.stringify(theme,null,4))
                log.write("INFO",`"${jsonpath}" created successfully`)

                // Create `.zip` archive in chosen dest path
                zip.addLocalFolder(src)
                zip.writeZip(dest)
                log.write("INFO",`"${dest}" ZIP archive created successfully`)

                // Remove `sanhelper.appdata/temp/exporttheme` dir, along with `exportdestdir` if present
                ;[src,exportdestdir].forEach(dir => {
                    if (!dir) return
                    fs.rmSync(dir,{ recursive: true, force: true })
                    log.write("INFO",`"${dir}" cleaned up successfully`)
                })

                rmdir = dest

                // Rename `.zip` archive to `.san`
                fs.renameSync(dest,path.format(parsed))

                // Delete `sanhelper.appdata/temp` dir
                fs.existsSync(tempdir) && fs.rmSync(tempdir,{ recursive: true, force: true })
                log.write("INFO",`"${path.format(parsed)}" Theme exported successfully`)
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

                // Clean up partial dir if an error occurs during Theme export
                if (rmdir && fs.existsSync(rmdir)) {
                    fs.rmSync(rmdir,{ recursive: true, force: true })
                    log.write("INFO",`Partial dir "${rmdir}" cleaned up successfully`)
                }
            }
        }

        if (!exportdest) {
            ipcRenderer.once("exporttheme", async (event,dest: string | undefined) => {
                if (!dest) return
                exporthandler(dest)
            })

            return ipcRenderer.send("exporttheme")
        }

        exporthandler(exportdest)
    },
    updateassets: (customobj: Customisation,assetspath: string,filekeys: string[]) => {
        const copiedfiles = []
        const files = new Set<string>()
    
        const filtered = Object.fromEntries(Object.entries(customobj).filter(([key]) => filekeys.includes(key)))
    
        // Generates an array of filepath values found in root `Customisation` object
        const rootfiles = Object.entries(filtered)
            .filter(([key]) => key !== "customicons")
            .flatMap(([_,value]) => (value && typeof value === "string") ? [value] : [])
    
        // Generates an array of filepath values found in `customicons` sub-objects
        const customiconsfiles = Object.entries(filtered)
            .filter(([key]) => key === "customicons")
            .flatMap(([_,icons]) => Object.entries(icons as Record<string,CustomIcon | string>)
                .flatMap(([preset,icon]) => {
                    if (typeof icon === "string") return preset === "plat" ? [icon] : []
                    if (preset !== customobj.preset) return []
    
                    const logo = icon.logo
                    const decoration = icon.decoration
    
                    const logopaths = typeof logo === "string" ? [logo] : Array.isArray(logo) ? logo : []
                    const decorationpaths = typeof decoration === "string" ? [decoration] : Array.isArray(decoration) ? decoration : []
    
                    return [...logopaths, ...decorationpaths]
                })
            )
    
        // Creates an array of all existing filepaths in `customobj`
        const customobjfiles = [
            ...rootfiles,
            ...customiconsfiles
        ]
    
        // Copies each non-existent file from disk to `assetspath`, and adds to `files` Set
        for (const srcpath of customobjfiles) {
            const destpath = path.join(assetspath,path.basename(srcpath))
            files.add(destpath)
    
            if (!fs.existsSync(destpath)) {
                if (!fs.existsSync(srcpath)) throw new Error(`Error copying "${srcpath}": File does not exist`)
    
                fs.copyFileSync(srcpath,destpath)
                log.write("INFO",`"${srcpath}" copied to "${destpath}" successfully`)
    
                copiedfiles.push(destpath)
            }
        }
    
        // Creates an array of all files in `asetspath`
        const existingfiles = fs.readdirSync(assetspath).map(file => path.join(assetspath,file))
        
        // Deletes any files present in `assetspath` that are not specified in `files` Set
        for (const filepath of existingfiles) {
            if (!files.has(filepath)) {
                fs.rmSync(filepath,{ force: true })
                log.write("INFO", `"${filepath}" removed from "${assetspath}"`)
            }
        }
    
        return copiedfiles
    },
    updateimportobj: (customobj: Customisation,filekeys: string[],destdir: string) => {
        const formatpath = (filepath: string) => filepath.replace(/\\/g,"/")
    
        for (const [key,value] of Object.entries(customobj)) {
            if (value && filekeys.includes(key)) {
                if (typeof value === "object" && key === "customicons") {
                    for (const preset in value) {
                        const presetvalue = customobj[key][preset] as CustomIcon | string
    
                        if (typeof presetvalue === "string") {
                            customobj[key][preset] = presetvalue ? formatpath(path.join(destdir,path.basename(presetvalue))) : sanconfig.defaulticons.get(preset)!
                        } else if (typeof presetvalue === "object") {
                            for (const iconkey in presetvalue) {
                                ["logo", "decoration"].forEach(id => {
                                    if (presetvalue[iconkey] && iconkey === id) {
                                        const iconvalue = (customobj[key][preset] as CustomIcon)[iconkey]
                                        ;(customobj[key][preset] as CustomIcon)[iconkey] = (Array.isArray(iconvalue) && iconvalue.every(subvalue => typeof subvalue === "string")) ? iconvalue.map(subvalue => formatpath(path.join(destdir,path.basename(subvalue as string)))) : formatpath(path.join(destdir,path.basename(iconvalue as string)))
                                    }
                                })
                            }
                        } else {
                            log.write("ERROR",`Unexpected type for "${preset}"`)
                        }
                    }
                }
    
                if (typeof value === "string") customobj[key] = formatpath(path.join(destdir,path.basename(value)))
            }
        }
    
        return customobj
    },
    createimportobj: (type: "main" | "rare" | "plat",theme: Customisation | LegacyUserTheme,srcpath?: string): Customisation => {               
        const themesdir = path.join(sanhelper.appdata,"themes",type)
        const islegacytheme = "customisation" in theme
        const customisation = islegacytheme ? theme.customisation as Customisation : theme
        const { icon, label } = islegacytheme ? theme : customisation
    
        const id = themes.setid(type)
    
        const importobj = {
            ...customisation,
            id,
            icon,
            label,
            enabled: true
        } as Customisation
    
        const assetspath = path.join(themesdir,label,"assets")
        let srcassetspath = null
    
        if (srcpath) {
            srcassetspath = path.join(srcpath,"assets")
    
            if (fs.existsSync(srcpath)) {
                fs.rmSync(srcpath,{ recursive: true, force: true })
                log.write("INFO",`Existing Legacy Theme export dir "${srcpath}" removed successfully`)
            }
    
            fs.mkdirSync(srcassetspath,{ recursive: true })
            log.write("INFO",`Legacy Theme export dir "${srcpath}" created successfully`)
            
            const assets = themes.updateassets(importobj,srcassetspath,customfilekeys)
            log.write("INFO",`Exported the following assets to "${srcpath}":\n\n- ${assets.join("\n- ")}`)
        }
    
        return themes.updateimportobj(importobj,customfilekeys,srcassetspath || assetspath)
    },
    createbtns: (type: "main" | "rare" | "plat"): Button[] => {
        const themesmap = themes.load()
        const storesarr: Store<Customisation>[] = []
        
        for (const [themetype,stores] of themesmap) {
            if (themetype === type) {
                for (const store of stores) {
                    storesarr.push(store)
                }
            }
        }
    
        return storesarr.map(store => {
            const { store: theme } = store
            const { id, label, icon, enabled } = theme
            return { id, label, icon, enabled, click: () => themes.update(type,id), istheme: true } as Button
        })
    },
    issynced: () => {
        let synced: "main" | "rare" | "plat" | null = null
        const config = sanconfig.get()
        const customisation = config.get("customisation")

        for (const type in customisation) {
            (customisation[type] as Customisation).synctheme && (synced = type as "main" | "rare" | "plat")
        }

        return synced
    },
    sync: (type: "main" | "rare" | "plat",config: Store<Config>,btn: HTMLButtonElement) => {
        const key = `customisation.${type}.synctheme`
        const value = !config.get(key) as boolean

        config.set(key,value)
        btn.toggleAttribute("sync",value)

        const customobj = config.get(`customisation.${type}`) as Customisation
        console.log(themes.syncedtheme(config,customobj))
    },
    syncedtheme: (config: Store<Config>,syncobj: Customisation) => {
        // Syncs the Theme over all notification types if `customisation.${type}.synctheme` is enabled
        const customisation = config.get(`customisation`)

        for (const type in customisation) {
            const customobj = customisation[type] as Customisation
            const ignore = [
                "primarycolor",
                "secondarycolor",
                "tertiarycolor"
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
    autoswitch: (config: Store<Config>,appid: number) => {
        const themeswitch = JSON.parse(localStorage.getItem("themeswitch")!) as { [key: string]: ThemeSwitch }
        const customisation = config.get("customisation")
        const autoswitch: any = {}
        let res: ThemeSwitch | null = null
        
        for (const key in themeswitch) {
            if (parseInt(key) !== appid) continue
            res = themeswitch[key]
            break
        }

        if (!res) {
            log.write("ERROR",`"${appid}" not found in localStorage "themeswitch" object`)

            return {
                customobj: customisation,
                autoswitchobj: autoswitch
            }
        }

        const themesmap = themes.load()

        for (const [type,stores] of themesmap) {
            const id = res.themes[type]
            const match = stores.find(({ store: theme }) => theme.id === id)

            if (!match) {
                log.write("ERROR",`Theme id ${res.themes[type]} not found for "${type}" type`)
                continue
            }
            
            const { store: theme } = match
            autoswitch[type] = theme
        }

        return {
            customobj: customisation,
            autoswitchobj: autoswitch
        }
    }
}