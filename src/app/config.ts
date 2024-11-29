import { screen } from "electron"
import fs from "fs"
import path from "path"
import Store from "electron-store"
import { __root, sanhelper } from "./sanhelper"

// Contains keys whose values are filepaths in "config"
const configfilekeys = [
    "ovpath",
    "imgpath"
]

// Contains keys whose values are filepaths in "config.customisation.<type>"
export const customfilekeys = [
    "bgimg",
    "customfont",
    "customicons",
    "hiddenicon",
    "maskimg",
    "sounddir",
    "soundfile",
    "percentbadgeimg",
    "icon"
].flatMap(id => {
    if (id !== "percentbadgeimg") return [id]
    return ["bronze","silver","gold"].flatMap(type => [`${id}${type}`,`ss${id}${type}`])
})

export const sanconfig = {
    get defaultfiles(): { [key: string]: any } {
        const customobj = sanconfig.defaultobj("customisation")

        customobj.customicons = Object.fromEntries(sanconfig.defaulticons)
        ;(customobj.customicons as CustomIcon).plat = sanhelper.setfilepath("img","ribbon.svg")

        return Object.fromEntries(Object.entries(customobj).filter(([key]) => customfilekeys.includes(key)))
    },
    get defaulticons(): Map<string,CustomIcon> {
        const trophies: string[] = [
            sanhelper.setfilepath("img","sanlogotrophy_bronze.svg"),
            sanhelper.setfilepath("img","sanlogotrophy_silver.svg"),
            sanhelper.setfilepath("img","sanlogotrophy_gold.svg")
        ]

        return new Map<string,CustomIcon>([
            ["default",{
                logo: sanhelper.setfilepath("img","sanlogosquare.svg"),
                index: {
                    percent: 1,
                    hiddenicon: 2,
                    decoration: 1
                } as Index,
                decoration: sanhelper.setfilepath("img","sanlogotrophy.svg"),
                elems: ["unlockmsg","title","desc"],
                sselems: ["title","desc"]
            }],
            ["xqjan",{
                logo: sanhelper.setfilepath("img","steamlogonew.svg"),
                index: {
                    percent: 1,
                    hiddenicon: 2,
                    decoration: 0
                } as Index,
                decoration: null,
                elems: ["unlockmsg","title","desc"],
                sselems: ["title","desc"]
            }],
            ["steamdeck",{
                logo: null,
                decoration: sanhelper.setfilepath("img","ribbonbw.svg"),
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["title","desc"],
                sselems: ["title","desc"]
            }],
            ["epicgames",{
                logo: null,
                decoration: trophies,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["title"],
                sselems: ["title"]
            }],
            ["xboxone",{
                logo: sanhelper.setfilepath("img","sanlogotrophy.svg"),
                decoration: null,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                },
                elems: ["unlockmsg","title","desc"],
                sselems: ["unlockmsg","title"]
            }],
            ["xbox360",{
                logo: sanhelper.setfilepath("img","sanlogotrophy_small.svg"),
                decoration: null,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["unlockmsg","title"],
                sselems: ["unlockmsg","title"]
            }],
            ["ps5",{
                logo: sanhelper.setfilepath("img","sanlogo.svg"),
                decoration: trophies,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["title","desc"],
                sselems: ["title","desc"]
            }],
            ["ps4",{
                logo: sanhelper.setfilepath("img","sanlogo.svg"),
                decoration: trophies,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 2
                } as Index,
                elems: ["unlockmsg","title"],
                sselems: ["unlockmsg","title"]
            }],
            ["ps3",{
                logo: null, decoration: trophies,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 2
                } as Index,
                elems: ["unlockmsg","title"],
                sselems: ["unlockmsg","title"]
            }],
            ["windows",{
                logo: sanhelper.setfilepath("img","sanlogotrophy.svg"),
                decoration: null,
                index: {
                    percent: 2,
                    hiddenicon: 2,
                    decoration: 1
                } as Index,
                elems: ["unlockmsg","title","desc"],
                sselems: ["unlockmsg","title","desc"]
            }],
            ["gfwl",{
                logo: sanhelper.setfilepath("img","sanlogotrophy_small.svg"),
                decoration: null,
                index: {
                    percent: 1,
                    hiddenicon: 1,
                    decoration: 1
                } as Index,
                elems: ["unlockmsg","title"],
                sselems: ["unlockmsg","title"]
            }],
            ["os",{
                logo: null,
                decoration: null,
                index: null,
                elems: null,
                sselems: null
            }]
        ])
    },
    defaultobj: (objtype: "config" | "customisation",props?: { id: number, imgpath: string, target: { width: number, height: number }, width: number, height: number } | "main" | "rare" | "plat"): Config | Customisation => {
        if (objtype === "config" && typeof props === "object") {
            const { id, imgpath, target, width, height } = props!

            const obj: Config = {
                lang: "english",
                desktop: false,
                startwin: false,
                startmin: false,
                nohwa: false,
                litemode: false,
                rarity: 10,
                soundonly: false,
                showpercent: "rareonly",
                extwin: false,
                extwinframerate: 60,
                extwinshow: true,
                extwinpos: {
                    x: 0,
                    y: 0
                },
                audiosrc: "notify",
                nowtracking: true,
                nowtrackingscale: 100,
                nowtrackingpos: "bottomright",
                shortcuts: false,
                steamss: false,
                screenshots: "off",
                hdrmode: false,
                monitor: id,
                monitors: [] as Monitor[],
                ssdelay: 0,
                ovpath: imgpath,
                imgpath: imgpath,
                noanim: false,
                nvda: false,
                tooltips: true,
                notifydebug: false,
                pollrate: 250,
                maxretries: 10,
                initdelay: 0,
                releasedelay: 0,
                width: target.width,
                height: target.height,
                x: Math.round((width / 2) - (target.width / 2)),
                y: Math.round((height / 2) - (target.height / 2)),
                usecustomfiles: false,
                noreleasedialog: false,
                norestartdialog: false,
                noupdatedialog: false,
                userust: false,
                debug: false,
                noiconcache: false,
                exclusions: [],
                logtype: "san",
                ssalldetails: [
                    "steamdeck",
                    "epicgames",
                    "xbox360",
                    "ps5",
                    "ps4",
                    "ps3",
                    "windows",
                    "gfwl"
                ],
                webhooks: false,
                webhooktypes: {
                    main: true,
                    rare: true,
                    plat: true
                },
                webhookurl: "",
                webhooklaststatus: "",
                // discord: {
                //     userid: "",
                //     avatarurl: "",
                //     webhookurl: ""
                // },
                steamlang: false,
                maxsteamlangretries: 10,
                showsystrayopts: false,
                releaseshortcut: "CTRL+SHIFT+Q",
                statwin: false,
                statwinpos: {
                    x: 0,
                    y: 0
                },
                customisation: {
                    main: {} as Customisation,
                    rare: {} as Customisation,
                    plat: {} as Customisation
                }
            }

            return obj
        } else {
            const customobj: Customisation = {
                soundmode: "file",
                soundfile: "",
                sounddir: "",
                volume: 100,
                preset: "default",
                displaytime: 10,
                scale: 100,
                customtext: "",
                usegametitle: false,
                bgstyle: "solid",
                gradientangle: 90,
                bgimg: "",
                bgimgbrightness: 100,
                brightness: 100,
                blur: 0,
                roundness: 25,
                fontsize: 100,
                opacity: 100,
                bgonly: false,
                glow: false,
                glowcolor: "#8a2be2",
                glowsize: 50,
                glowx: 0,
                glowy: 0,
                glowanim: "off",
                glowspeed: 50,
                mask: false,
                maskimg: sanhelper.setfilepath("img","san_trophy_mask.png"),
                outline: "off",
                outlinecolor: "#8a2be2",
                outlinewidth: 50,
                fontcolor: "#ffffff",
                fontoutline: false,
                fontoutlinecolor: "#000000",
                fontshadow: false,
                fontshadowcolor: "#000000",
                iconroundness: 0,
                usegameicon: false,
                customicons: {},
                showdecoration: false,
                pos: "bottomcenter",
                usecustompos: false,
                custompos: {
                    x: 0,
                    y: 0
                },
                animdir: "up",
                ovpos: "bottomcenter",
                ovmatch: false,
                ovx: 0,
                ovy: 0,
                alldetails: false,
                primarycolor: "",
                secondarycolor: "",
                tertiarycolor: "#ffffff",
                gameart: "",
                shortcut: "",
                customfont: "",
                showhiddenicon: true,
                replacelogo: false,
                hiddenicon: "",
                previewhiddenicon: false,
                usepercent: false,
                elems: [
                    "unlockmsg",
                    "title",
                    "desc"
                ],
                sselems: [
                    "title",
                    "desc"
                ],
                elemsmatch: false,
                hiddeniconpos: 2,
                sshiddeniconpos: 2,
                decorationpos: 1,
                ssdecorationpos: 1,
                percentpos: 1,
                sspercentpos: 1,
                percentbadge: false,
                sspercentbadge: false,
                percentbadgepos: "bottomcenter",
                sspercentbadgepos: "bottomcenter",
                percentbadgecolor: `#${sanhelper.settypevalue(props,{ main: "203e7a", rare: "663399", plat: "4e75c9" })}`,
                sspercentbadgecolor: `#${sanhelper.settypevalue(props,{ main: "203e7a", rare: "663399", plat: "4e75c9" })}`,
                percentbadgefontsize: 100,
                sspercentbadgefontsize: 100,
                percentbadgefontcolor: "#ffffff",
                sspercentbadgefontcolor: "#ffffff",
                percentbadgeroundness: 50,
                sspercentbadgeroundness: 50,
                percentbadgex: 0,
                sspercentbadgex: 0,
                percentbadgey: 0,
                sspercentbadgey: 0,
                percentbadgeimg: false,
                sspercentbadgeimg: false,
                percentbadgeimgbronze: sanhelper.setfilepath("img","sanlogotrophy_bronze.svg"),
                sspercentbadgeimgbronze: sanhelper.setfilepath("img","sanlogotrophy_bronze.svg"),
                percentbadgeimgsilver: sanhelper.setfilepath("img","sanlogotrophy_silver.svg"),
                sspercentbadgeimgsilver: sanhelper.setfilepath("img","sanlogotrophy_silver.svg"),
                percentbadgeimggold: sanhelper.setfilepath("img","sanlogotrophy_gold.svg"),
                sspercentbadgeimggold: sanhelper.setfilepath("img","sanlogotrophy_gold.svg"),
                synctheme: false,
                usertheme: [] as UserTheme[]
            }

            return customobj
        }
    },
    create: (validate?: boolean): Config => {
        // When calling from renderer, it cannot access the `screen` API - so create a dummy object to bypass
        const dummyscreen: DefaultBounds = {
            id: 0,
            bounds: {
                width: 1050,
                height: 750
            },
            scaleFactor: 1
        }

        process.type === "browser" && Store.initRenderer()
        
        const { id, bounds: { width, height }, scaleFactor }: Electron.Display | DefaultBounds = process.type === "browser" ? screen.getPrimaryDisplay() : dummyscreen
        const target = {
            width: Math.round(1050 / scaleFactor),
            height: Math.round(750 / scaleFactor)
        }

        const imgpath = path.join(process.env[process.platform === "linux" ? "HOME" : "userprofile"]!,"Pictures",`Steam Achievement Notifier (V${sanhelper.version})`).replace(/\\/g,"/")

        const props = { id, imgpath, target, width, height }
        const obj = sanconfig.defaultobj("config",props) as Config

        if (validate) {
            sanconfig.validateconfigobj(obj)
        }

        for (const type in obj.customisation) {
            const customobj = sanconfig.defaultobj("customisation",type as "main" | "rare" | "plat") as Customisation
            validate && sanconfig.validateconfigobj(customobj,type as "main" | "rare" | "plat")

            if (!validate) {
                sanconfig.defaulticons.forEach((value: CustomIcon,key: string) => {
                    customobj.customicons[key] = value
                    type === "plat" && (customobj.customicons.plat = sanhelper.setfilepath("img","ribbon.svg"))
                })
                
                const sanlogotrophy = sanhelper.setfilepath("img","sanlogotrophy.svg")

                Object.assign(customobj,{
                    primarycolor: `#${sanhelper.settypevalue(type,{ main: "203e7a", rare: "663399", plat: "4e75c9" })}`,
                    secondarycolor: `#${sanhelper.settypevalue(type,{ main: "0c2a66", rare: "521f85", plat: "3a61b5" })}`,
                    shortcut: `CTRL+SHIFT+${sanhelper.settypevalue(type,{ main: 1, rare: 2, plat: 3 })}`,
                    elems: sanconfig.defaulticons.get(customobj.preset)!.elems,
                    usertheme: [{
                        id: 0,
                        label: `Default ${sanhelper.settypevalue(type,{ main: "Main", rare: "Rare", plat: "100%" })}`,
                        icon: sanlogotrophy,
                        customisation: {} as Customisation,
                        enabled: true
                    }] as UserTheme[]
                })
    
                customobj.usertheme[0].customisation = { ...customobj as any }
                delete (customobj.usertheme[0].customisation as any).usertheme
    
                obj.customisation[type] = customobj
            }
        }

        return obj
    },
    get: (watch?: boolean): Store<Config> => new Store<Config>({
        cwd: sanhelper.appdata,
        watch: watch || false
    }),
    validateconfigkeys: async (configkeys: string[],objkeys: string[],obj: Config | Customisation,type?: string) => {
        const config = sanconfig.get()
        const log = (await import("./log")).log
        
        for (const key of objkeys) {
            if (!configkeys.includes(key)) {
                log.write("ERROR",`"${key}" missing in ${type ? `"customisation.${type}"` : "config"}`)

                try {
                    config.set(type ? `customisation.${type}.${key}` : key,obj[key as string])
                    log.write("INFO",`"${key}" written to ${type ? `"customisation.${type}"` : "config"} successfully`)
                } catch (err) {
                    log.write("ERROR",`Error writing missing "${key}" key to config: ${err as Error}`)
                }
            }

            const ssalldetails = "ssalldetails"

            if (!type && key === ssalldetails) {
                for (const id of obj[key] as any) {
                    if (!config.get(key).includes(id)) {
                        log.write("ERROR",`"${id}" missing in "config.${ssalldetails}"`)
                        
                        try {
                            config.set(ssalldetails,obj[key as string])
                            log.write("INFO",`"${id}" written to "config.${ssalldetails}" successfully`)
                        } catch (err) {
                            log.write("ERROR",`Error writing missing "${id}" key to "config.${ssalldetails}": ${err as Error}`)
                        }
                    }
                }
            }
        }

        const missingfiles = await sanconfig.validatefiles(config,objkeys,type as "main" | "rare" | "plat" | undefined)
        missingfiles.size && sanconfig.resetmissingfiles(missingfiles,config,log)
    },
    validatecustomicons: async (type: "main" | "rare" | "plat") => {
        const config = sanconfig.get()
        const log = (await import("./log")).log
        const defaulticons = sanconfig.defaulticons

        const customicons = config.get(`customisation.${type}.customicons`) as { [key: string]: any }
        const userthemes = config.get(`customisation.${type}.usertheme`) as UserTheme[]

        type === "plat" && defaulticons.set("plat",sanhelper.setfilepath("img","ribbon.svg"))

        const defaulticonkeys = Array.from(defaulticons.keys())
        const customiconkeys = Object.keys(customicons)

        const filter = (objkeys: string[]) => defaulticonkeys.filter(key => !objkeys.includes(key))
        const createnewkeys = (obj: { [key: string]: any },type: string) => {
            return filter(customiconkeys).map(key => {
                log.write("ERROR",`"${key}" preset missing from default icons for ${type}`)

                return Object.assign(obj,{
                    ...obj,
                    [key]: defaulticons.get(key)
                })
            })
        }

        if (filter(customiconkeys).length) {
            try {
                config.set(`customisation.${type}.customicons`,createnewkeys(customicons,`"${type}" config`).find(obj => obj))
                log.write("INFO",`Default icons for "${type}" updated successfully`)
            } catch (err) {
                log.write("ERROR",`Error updating default icons for "${type}": ${err}`)
            }
        }

        const missingfiles = await sanconfig.validatefiles(config,["customicons"],type as "main" | "rare" | "plat" | undefined)
        missingfiles.size && sanconfig.resetmissingfiles(missingfiles,config,log)

        const { customisation } = sanconfig.create()
        const defaultkeys = Object.keys(customisation[type]).filter(key => key !== "usertheme")

        userthemes.forEach((theme,i) => {
            const userthemecustomicons = theme.customisation!.customicons
            const userthemeiconkeys = Object.keys(userthemecustomicons)

            if (filter(userthemeiconkeys).length) {
                try {
                    config.set(`customisation.${type}.usertheme.${i}.customisation.customicons`,createnewkeys(userthemecustomicons,`"${theme.label}" User Theme`).find(obj => obj))
                    log.write("INFO",`Default icons for "${theme.label}" User Theme updated successfully`)
                } catch (err) {
                    log.write("ERROR",`Error updating default icons for "${theme.label}" User Theme: ${err}`)
                }
            }

            // Validate all previously saved User Themes, and add new keys with default values if missing
            const themekeys = Object.keys(theme.customisation!)
            sanconfig.validateconfigkeys(themekeys,defaultkeys,customisation[type],`${type}.usertheme.${i}.customisation`)
        })
    },
    validatefiles: async (config: Store<Config>,keys: string[],type?: "main" | "rare" | "plat") => {
        const files = new Map<string[],string>([])

        for (const key of keys) {
            if ((sanconfig.defaultfiles as Object).hasOwnProperty(key)) {
                const value = config.get(type ? `customisation.${type}.${key}` : key)
    
                if (value) {
                    if (typeof value === "object" && key === "customicons") {
                        const valueobj = value as { [key: string]: any }
    
                        for (const preset in valueobj) {
                            const presetobj = valueobj[preset] as { [key: string]: any }

                            if (typeof presetobj === "string") {
                                preset === "plat" && files.set([`${key}.${preset}`,`customisation.${type}.${key}.${preset}`],presetobj)
                            } else {
                                for (const icontype in presetobj) {
                                    ["logo","decoration"].forEach(id => icontype === id && valueobj[preset][icontype] && files.set([`${key}.${preset}.${icontype}`,`customisation.${type}.${key}.${preset}.${icontype}`],valueobj[preset][icontype]))
                                }
                            }
                        }
                    } else {
                        files.set([key,type ? `customisation.${type}.${key}` : key],value as string)
                    }
                }
            }
        }

        // If the value is an Array, return the key plus the index of the missing file appended to the key string. If it's a string, just return as normal
        return new Map(Array.from(files).flatMap(([key,value]) => Array.isArray(value) ? value.map((file,i) => !fs.existsSync(file) ? [[`${key[0]}.${i}`,`${key[1]}.${i}`],file] : null).filter((entry): entry is [string[],string] => Boolean(entry)) : !fs.existsSync(value) ? [[key,value]] : []))
    },
    resetmissingfiles: (files: Map<string[],string>,config: Store<Config>,log: any) => files.forEach((value,key) => {
        log.write("ERROR",`"${value}" does not exist, but is currently in use by "${key[1]}" - resetting to default...`)

        try {
            const defaultfile = key[0].split(".").map(key => isNaN(Number(key)) ? key : Number(key)).reduce((acc:any,key) => acc[key],sanconfig.defaultfiles)
            config.set(key[1],defaultfile)
            log.write("INFO",`"${key[1]}" reset to "${defaultfile}" successfully`)
        } catch (err) {
            log.write("ERROR",`Unable to reset "${key}" to default value: ${err as Error}`)
        }
    }),
    validateconfigobj: async (obj: Config | Customisation,type?: "main" | "rare" | "plat") => {
        const config = sanconfig.get()
        const configkeys = Object.keys(!type ? config.store : config.get(`customisation.${type}`))
        const objkeys = Object.keys(obj)

        const keys = !type ? configfilekeys : customfilekeys
        keys.forEach(key => sanconfig.defaultfiles[key] = obj[key])

        await sanconfig.validateconfigkeys(configkeys,objkeys,obj,type)
        type && await sanconfig.validatecustomicons(type as "main" | "rare" | "plat")
    }
}