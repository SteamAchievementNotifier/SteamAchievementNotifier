import { screen } from "electron"
import path from "path"
import Store from "electron-store"
import { __root, sanhelper } from "./sanhelper"

export const sanconfig = {
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
            // extwinshow: false,
            // extwinpos: {
            //     x: 0,
            //     y: 0
            // },
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
            webhookurl: "",
            webhooklaststatus: "",
            // discord: {
            //     userid: "",
            //     avatarurl: "",
            //     webhookurl: ""
            // },
            steamlang: false,
            maxsteamlangretries: 10,
            customisation: {
                main: {} as Customisation,
                rare: {} as Customisation,
                plat: {} as Customisation
            }
        }

        if (validate) {
            const configkeys = Object.keys(sanconfig.get().store)
            const objkeys = Object.keys(obj)

            sanconfig.validateconfigkeys(configkeys,objkeys,obj)
        }

        for (const type in obj.customisation) {
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
                glowopacity: 100,
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
                elems: [
                    "unlockmsg",
                    "title",
                    "desc"
                ],
                hiddeniconpos: 2,
                decorationpos: 1,
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
                sselems: [
                    "title",
                    "desc"
                ],
                sshiddeniconpos: 2,
                ssdecorationpos: 1,
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
                percentpos: 1,
                sspercentpos: 1,
                percentbadge: false,
                sspercentbadge: false,
                percentbadgepos: "bottom",
                sspercentbadgepos: "bottom",
                percentbadgecolor: `#${type === "main" ? "203e7a" : (type === "rare" ? "663399" : "4e75c9")}`,
                sspercentbadgecolor: `#${type === "main" ? "203e7a" : (type === "rare" ? "663399" : "4e75c9")}`,
                percentbadgefontsize: 100,
                sspercentbadgefontsize: 100,
                percentbadgeroundness: 50,
                sspercentbadgeroundness: 50,
                usertheme: [] as UserTheme[]
            }

            if (validate) {
                const config = sanconfig.get()
                const configkeys = Object.keys(config.get(`customisation.${type}`))
                const customobjkeys = Object.keys(customobj)

                sanconfig.validateconfigkeys(configkeys,customobjkeys,customobj,type)
                sanconfig.validatecustomicons(type as "main" | "rare" | "plat")
            }

            if (!validate) {
                sanconfig.defaulticons.forEach((value: CustomIcon,key: string) => {
                    customobj.customicons[key] = value
                    type === "plat" && (customobj.customicons.plat = sanhelper.setfilepath("img","ribbon.svg"))
                })
                
                const sanlogotrophy = sanhelper.setfilepath("img","sanlogotrophy.svg")
    
                switch (type) {
                    case "main":
                        Object.assign(customobj,{
                            primarycolor: "#203e7a",
                            secondarycolor: "#0c2a66",
                            shortcut: "CTRL+SHIFT+1",
                            elems: sanconfig.defaulticons.get(customobj.preset)!.elems,
                            usertheme: [{
                                id: 0,
                                label: "Default Main",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as UserTheme[]
                        })
    
                        break
                    case "rare":
                        Object.assign(customobj,{
                            primarycolor: "#663399",
                            secondarycolor: "#521f85",
                            shortcut: "CTRL+SHIFT+2",
                            elems: sanconfig.defaulticons.get(customobj.preset)!.elems,
                            iconanim: true,
                            usertheme: [{
                                id: 0,
                                label: "Default Rare",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as UserTheme[]
                        })
    
                        break
                    case "plat":
                        Object.assign(customobj,{
                            primarycolor: "#4e75c9",
                            secondarycolor: "#3a61b5",
                            shortcut: "CTRL+SHIFT+3",
                            elems: sanconfig.defaulticons.get(customobj.preset)!.elems,
                            iconanim: true,
                            usertheme: [{
                                id: 0,
                                label: "Default 100%",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as UserTheme[]
                        })
                        
                        break
                }
    
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
    },
    validatecustomicons: async (type: "main" | "rare" | "plat") => {
        const config = sanconfig.get()
        const log = (await import("./log")).log

        const customicons = config.get(`customisation.${type}.customicons`) as { [key: string]: any }
        const userthemes = config.get(`customisation.${type}.usertheme`) as UserTheme[]

        const defaulticonkeys = Array.from(sanconfig.defaulticons.keys())
        const customiconkeys = Object.keys(customicons)

        const filter = (objkeys: string[]) => defaulticonkeys.filter(key => !objkeys.includes(key))
        const createnewkeys = (obj: { [key: string]: any },type: string) => {
            return filter(customiconkeys).map(key => {
                log.write("ERROR",`"${key}" preset missing from default icons for ${type}`)

                return Object.assign(obj,{
                    ...obj,
                    [key]: sanconfig.defaulticons.get(key)
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
    }
}