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
            ["default",{ logo: sanhelper.setfilepath("img","sanlogosquare.svg"), decoration: sanhelper.setfilepath("img","sanlogotrophy.svg") }],
            ["xqjan",{ logo: sanhelper.setfilepath("img","steamlogonew.svg"), decoration: null }],
            ["steamdeck",{ logo: null, decoration: sanhelper.setfilepath("img","ribbonbw.svg") }],
            ["epicgames",{ logo: null, decoration: trophies }],
            ["xboxone",{ logo: sanhelper.setfilepath("img","sanlogotrophy.svg"), decoration: null }],
            ["xbox360",{ logo: sanhelper.setfilepath("img","sanlogotrophy.svg"), decoration: null }],
            ["ps5",{ logo: sanhelper.setfilepath("img","sanlogo.svg"), decoration: trophies }],
            ["ps4",{ logo: sanhelper.setfilepath("img","sanlogo.svg"), decoration: trophies }],
            ["ps3",{ logo: null, decoration: trophies }],
            ["windows",{ logo: sanhelper.setfilepath("img","sanlogo.svg"), decoration: null }],
            ["os",{ logo: null, decoration: null }],
        ])
    },
    create: (validate?: boolean): Config => {
        Store.initRenderer()
        
        const { id, bounds: { width, height }, scaleFactor } = screen.getPrimaryDisplay()
        const target = {
            width: 1050 / scaleFactor,
            height: 750 / scaleFactor
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
            audiosrc: "notify",
            nowtracking: true,
            nowtrackingscale: 100,
            shortcuts: false,
            steamss: false,
            screenshots: "off",
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
            releasedelay: 0,
            width: target.width,
            height: target.height,
            x: (width / 2) - (target.width / 2),
            y: (height / 2) - (target.height / 2),
            usecustomfiles: false,
            noreleasedialog: false,
            norestartdialog: false,
            userust: false,
            debug: false,
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
                roundness: 25,
                fontsize: 100,
                opacity: 100,
                bgonly: false,
                fontcolor: "#ffffff",
                fontoutline: false,
                fontoutlinecolor: "#000000",
                fontshadow: false,
                fontshadowcolor: "#000000",
                iconroundness: 0,
                usegameicon: false,
                customicons: {},
                showdecoration: true,
                pos: "bottomcenter",
                usecustompos: false,
                custompos: {
                    x: 0,
                    y: 0
                },
                animdir: "up",
                ovpos: "bottomcenter",
                ovmatch: false,
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
                usertheme: [] as Button[]
            }

            if (validate) {
                const configkeys = Object.keys(sanconfig.get().store.customisation[type])
                const customobjkeys = Object.keys(customobj)

                sanconfig.validateconfigkeys(configkeys,customobjkeys,customobj,type)
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
                            usertheme: [{
                                id: 0,
                                label: "Default Main",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as Button[]
                        })
    
                        break
                    case "rare":
                        Object.assign(customobj,{
                            primarycolor: "#663399",
                            secondarycolor: "#521f85",
                            shortcut: "CTRL+SHIFT+2",
                            iconanim: true,
                            usertheme: [{
                                id: 0,
                                label: "Default Rare",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as Button[]
                        })
    
                        break
                    case "plat":
                        Object.assign(customobj,{
                            primarycolor: "#4e75c9",
                            secondarycolor: "#3a61b5",
                            shortcut: "CTRL+SHIFT+3",
                            iconanim: true,
                            usertheme: [{
                                id: 0,
                                label: "Default 100%",
                                icon: sanlogotrophy,
                                customisation: {} as Customisation,
                                enabled: true
                            }] as Button[]
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
        }
    }
}