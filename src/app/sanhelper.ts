import { app, ipcRenderer, shell } from "electron"
import path from "path"
import fs from "fs"
import Store from "electron-store"
import { usertheme } from "./usertheme"
import { keycodes } from "./keycodes"
import { language } from "./language"
import tippy, { followCursor, Instance, Props } from "tippy.js"
import { getSteamPath, getAppInfo, pressKeysWin32, pressKeysLinux, depsInstalled, getHqIcon, log as sanhelperrslog, hdrScreenshot, getWindowBounds } from "sanhelper.rs"
import { selectorelems } from "./elemselector"
import { createcolorpicker } from "./colorpicker"
import { raelems, rasupported } from "./ra"

const { initLogger, testPanic } = sanhelperrslog

export const __root: string = path.resolve(__dirname,"..","..")
const tippies: Instance<Props>[][] = []
const defaulttippy = {
    placement: "bottom",
    followCursor: true,
    allowHTML: true,
    arrow: false,
    animation: "scale",
    trigger: "mouseenter",
    offset: [0,25],
    delay: [1000,10],
    maxWidth: 150,
    theme: "default",
    plugins: [followCursor]
} as Props

let currenttippy: any = null

// Element ids that should not reload the Customiser webview
const noreload = (elem: HTMLElement) => {
    return [
        "ovpos",
        "scale",
        "soundmode",
        "soundfile",
        "sounddir",
        "volume",
        "usecustompos"
    ].find(id => elem.id === id)
}

const deps = new Map<string,(string | null)[][]>([
    ["keypressrs",[
        ["steamss",null],
        ["customtrigger","notifications"]
    ]],
    ["hdr",[
        ["hdrmode",null]
    ]],
    ["wmctrl",[
        ["ssmode",null]
    ]]
])

export const sanhelper: SANHelper = {
    get devmode(): boolean { return process.env.npm_lifecycle_event === "dev" },
    // In devmode, run `npm run dev -- --beta` to enable Beta environment
    get beta(): boolean { return !sanhelper.devmode ? !!JSON.parse(fs.readFileSync(path.join(__root,"package.json")).toString())?.beta : (process.type === "renderer" ? ipcRenderer.sendSync("beta") : app.commandLine.hasSwitch("beta")) },
    // `process.env.npm_package_version` is not available in the Renderer on build
    get version(): number { return parseFloat(sanhelper.devmode ? process.env.npm_package_version! : (process.type === "renderer" ? ipcRenderer.sendSync("version") : app.getVersion())) },
    get semver(): string | undefined { return sanhelper.devmode ? process.env.npm_package_version! : (process.type === "renderer" ? ipcRenderer.sendSync("version") : app.getVersion()) },
    get appdata(): string { return path.join(process.platform === "linux" ? path.join(process.env.HOME!,".local","share") : process.env.localappdata!,`Steam Achievement Notifier (V${sanhelper.version})${sanhelper.devmode ? " [DEVMODE]" : ""}`) },
    get temp(): string { return sanhelper.devmode ? path.join(__root,"temp") : (process.platform === "linux" ? path.join(sanhelper.appdata,"resources","temp") : path.join(__root,"..","temp")) },
    get icon(): string {
        const iconfile = `sanlogo.${process.platform === "win32" ? "ico" : "png"}`
        const localicon = path.join(sanhelper.appdata,iconfile)

        const copyicon = async () => {
            const { log } = await import("./log")
            if (!fs.existsSync(localicon)) {
                try {
                    fs.copyFileSync(path.join(sanhelper.devmode ? __root : process.resourcesPath,"img",iconfile).replace(/\\/g,"/"),localicon)
                    return log.write("INFO",`"${iconfile}" copied to "${localicon}" successfully`)
                } catch (err) {
                    return log.write("ERROR",`Error copying "${iconfile}" to "${localicon}": ${err as Error}`)
                }
            } else {
                return log.write("WARN",`"${iconfile}" already exists in "${localicon}"`)
            }
        }

        (async () => await copyicon())()
        return localicon
    },
    get steampath(): string { return getSteamPath() },
    get gameinfo(): AppInfo { return getAppInfo()[0] },
    get audioextensions(): string[] { return [
            ".wav",
            ".mp3",
            ".ogg",
            ".aac",
            ".m4a"
    ]},
    gethqicon: (appid: number = 0) => getHqIcon(appid),
    getwindowbounds: (windowtitle: string) => getWindowBounds(windowtitle),
    initlogger: (appdata: string) => initLogger(appdata),
    hdrscreenshot: (monitorid: number,sspath: string,area?: [number,number,number,number]) => hdrScreenshot(monitorid,sspath,area),
    testpanic: () => testPanic(),
    isprocessrunning: (pid: number) => {
        try {
            process.kill(pid,0)
            return true
        } catch (err) {
            return false
        }
    },
    errorhandler: (log: any) => {
        const handleerr = (err: string) => {
            document.body.setAttribute("error","")
            log.write("ERROR",err)
        }
        
        ipcRenderer.on("error", (event,err) => handleerr((err as Error).stack || err as string))
        window.onerror = (event,src,lineno,colno,err) => handleerr(err ? `${err.stack}` : event.toString())
        window.onunhandledrejection = err => handleerr(err.toString())
        process.on("uncaughtException", (err: Error) => handleerr(`${err.stack}`))
        process.on("unhandledRejection", (err: Error) => handleerr(`${err.stack}`))
    },
    settypevalue: <T>(type: "main" | "rare" | "plat",values: { main: T,rare: T,plat: T }) => type === "plat" ? values.plat : (type === "rare" ? values.rare : values.main),
    // On build, the Notifications API cannot access the `img` files within the asar
    setfilepath: (dir: "img" | "icon" | "sound",filename: string) => path.join((dir === "img" && !sanhelper.devmode) ? (process.platform === "linux" ? path.join(sanhelper.appdata,"resources") : process.resourcesPath) : __root,dir,filename).replace(/\\/g,"/"),
    showtrack: (gamename: string) => ipcRenderer.send("showtrack",gamename),
    senderrordialog: (obj: Electron.MessageBoxSyncOptions, callback: (res: any) => void): void => {
        ipcRenderer.send("errordialog",obj)
        ipcRenderer.once("errordialog",(event,res) => callback(res))
    },
    getdisplays: (): Promise<Display[]> => {
        return new Promise<Display[]>(resolve => {
            const monitors: Display[] = []
    
            ipcRenderer.once("displays", (event,displays: {
                primary: Display,
                all: Display[]
            }) => {
                const primary = displays.all.find(d => displays.primary.id === d.id)
    
                for (const i in displays.all) {
                    Object.assign(displays.all[i],{
                        primary: primary && primary.id === displays.all[i].id
                    })
    
                    monitors.push(displays.all[i])
                }
    
                resolve(monitors)
            })

            ipcRenderer.send("displays")
        })
    },
    setdevtools: async (win: Electron.BrowserWindow) => {
        const { BrowserWindow, screen } = await import("electron")
        const { width, height } = screen.getPrimaryDisplay().bounds

        const devtools = new BrowserWindow({
            width: Math.round(width / 5),
            height: Math.round(height / 1.125),
            autoHideMenuBar: true
        })

        win.webContents.setDevToolsWebContents(devtools.webContents)
        win.webContents.openDevTools({ mode: "detach" })
        devtools.setPosition(Math.round(width - (width / 5 + 20)),Math.round((height - (height / 1.125)) / 2))

        win.once("closed", () => devtools.destroy())

        return
    },
    get type(): "main" | "rare" | "plat" { return ["main","rare","plat"].find(attr => document.body.hasAttribute(attr))! as "main" | "rare" | "plat" },
    logcontents: (logtype: "san" | "rust" | "sanhelperrs") => fs.readFileSync(path.join(sanhelper.appdata,"logs",`${logtype}.log`),"utf-8").replace(/(\r\n|\n|\r)/g,"<br>"),
    createlogwin:(logtype: "san" | "rust" | "sanhelperrs") => ipcRenderer.send("logwin",sanhelper.logcontents(logtype),logtype),
    updatelogwin: (logtype: "san" | "rust" | "sanhelperrs") => ipcRenderer && ipcRenderer.send("updatelogwin",sanhelper.logcontents(logtype),logtype),
    showcustomfiles: () => shell.openPath(path.join(sanhelper.appdata,"customfiles")),
    switchtab: ({ target }: Event) => {
        target instanceof HTMLElement && ["main","rare","plat"].forEach(attr => document.body.toggleAttribute(attr,target.hasAttribute(attr)))
        usertheme.update()
        sanhelper.reloadelemselector()
    },
    switchcustomisertab: ({ target }: Event) => {
        const attrs = ["main","rare","plat"]
        const i = attrs.indexOf(attrs.find(attr => document.body.hasAttribute(attr))!)
        
        if (i === -1) return
        switch ((target as HTMLElement)!.id) {
            case "customiserbackbtn":
                if (i > 0) {
                    document.body.setAttribute(attrs[i - 1],"")
                    document.body.removeAttribute(attrs[i])
                    window.dispatchEvent(new CustomEvent("tabchanged", { detail: { type: attrs[i - 1] } }))
                }
                break
            case "customisernextbtn":
                if (i < attrs.length - 1) {
                    document.body.setAttribute(attrs[i + 1],"")
                    document.body.removeAttribute(attrs[i])
                    window.dispatchEvent(new CustomEvent("tabchanged", { detail: { type: attrs[i + 1] } }))
                }
                break
        }

        usertheme.update()
        sanhelper.reloadelemselector()
    },
    getshortcut: (config: Store<Config>,target: HTMLElement,id?: string) => {
        const btn = document.getElementById(id || "shortcutbtn")! as HTMLButtonElement
        const type = !id ? ["main","rare","plat"].find(attr => (target as HTMLElement).hasAttribute(attr)) : null
        const keys = config.get(id || `customisation.${type}.shortcut`) as string

        return btn.textContent = keys.replace(/\+/g," + ")
    },
    setshortcut: (config: Store<Config>,event: Event,id?: string,partialcombo: boolean = false) => {
        const target = event.target as HTMLElement
        const type = sanhelper.type
        const keys: string[] = []
        const shortcutbtn = document.getElementById(id ? id : "shortcutbtn")! as HTMLButtonElement
        let count: number = 0
        let pressed: string[] = []

        // "false" unregisters all shortcuts then returns
        ipcRenderer.send("shortcut",false)
        
        const keydown = (event: KeyboardEvent) => {
            const key = event.code.toUpperCase()

            if (pressed.includes(key)) return
            pressed.push(key)

            keys.push(key)

            count++
            count === 3 && stop()
        }

        const stop = async () => {
            target.removeAttribute("set")

            window.removeEventListener("keydown",keydown)
            timer && clearTimeout(timer)

            let sctimer: NodeJS.Timeout | null = null
            const replaced = keys.map(key => keycodes.has(key) ? keycodes.get(key) : key.replace(/KEY|DIGIT|ARROW/g,"").replace(/NUMPAD/g,"NUM"))

            if (keys.length === 3 || (partialcombo && keys.length >= 1)) {
                const shortcut = replaced.join("+")
                const exists = ["main","rare","plat"].find(type => config.get(`customisation.${type}.shortcut`) === shortcut)

                const configshortcuts = Object.keys(config.store)
                    .filter(key => /^[A-Za-z0-9]+shortcut$/.test(key))
                    .map(key => config.get(key))
                    .filter(value => value === shortcut)

                if (exists || configshortcuts.includes(shortcut)) {
                    target.setAttribute("error","")
                    shortcutbtn.textContent = `In use${exists ? ` by ${(exists === "plat" ? "100%" : exists)}` : ""}!`.toUpperCase()

                    return sctimer = setTimeout(() => {
                        target.removeAttribute("error")
                        sanhelper.getshortcut(config,document.body,id)
                        ipcRenderer.send("shortcut",true)
                    },1500)
                }

                config.set(id ? id : `customisation.${type}.shortcut`,shortcut)
            }

            !sctimer && sanhelper.getshortcut(config,document.body,id)
            ipcRenderer.send("shortcut",true)
        }

        target.setAttribute("set","")
        window.addEventListener("keydown",keydown)
        const timer = setTimeout(stop,5000)
    },
    updategamelbl: async (gamename: string | null) => document.querySelector(".rect#game > span")!.textContent = gamename || await language.get("game",["app","content"]),
    get linuxshortcut(): string {
        return [
            "[Desktop Entry]",
            `Name=Steam Achievement Notifier (V${sanhelper.version})`,
            `Comment=Steam Achievement Notifier (V${sanhelper.version})`,
            `Exec="${!sanhelper.devmode ? process.env.APPIMAGE : ""}"`,
            `Icon=${sanhelper.icon}`,
            "Terminal=false",
            "Type=Application",
            "Categories=Utility;"
        ].join("\n")
    },
    steamlang: () => ipcRenderer.send("steamlang"),
    createshortcut: (value: boolean,shortcutpath: string) => {
        if ((!value && !fs.existsSync(shortcutpath)) || (value && fs.existsSync(shortcutpath))) return

        if (value && !fs.existsSync(shortcutpath)) {
            if (process.platform === "linux") {
                const iconsdir = path.join(process.env.HOME!,".icons")
                !fs.existsSync(iconsdir) && fs.mkdirSync(iconsdir)

                return fs.writeFileSync(shortcutpath,sanhelper.linuxshortcut)
            }

            return shell.writeShortcutLink(shortcutpath,{
                target: process.execPath,
                icon: sanhelper.icon,
                cwd: path.join(process.execPath,"..")
            })
        }

        return fs.rmSync(shortcutpath)
    },
    desktop: (value: boolean) => {
        const shortcutpath = (platform: string) => {
            if (platform !== "win32" && platform !== "linux") return ""

            try {
                const xdgdesktopdir = fs.readFileSync(path.join(process.env.HOME!,".config","user-dirs.dirs")).toString().split("\n").find(item => item.includes("XDG_DESKTOP_DIR"))?.match(/"([^"]+)"/)?.[1]?.replace(/^\$(?:\{)?HOME(?:\})?/,process.env.HOME!)
                if (!xdgdesktopdir || (xdgdesktopdir && !fs.existsSync(xdgdesktopdir))) throw new Error(`"${xdgdesktopdir}" not found - reverting to default Desktop path...`)
                
                return xdgdesktopdir
            } catch (err) {
                return path.join(process.env[platform === "linux" ? "HOME" : "USERPROFILE"]!,"Desktop")
            }
        }

        const shortcutdir = shortcutpath(process.platform)
        shortcutdir && sanhelper.createshortcut(value,path.join(shortcutdir,`Steam Achievement Notifier (V${sanhelper.version}).${process.platform === "linux" ? "desktop" : "lnk"}`))
    },
    startwin: (value: boolean) => ipcRenderer.send("startwin",value),
    nohwa: (value: boolean) => ipcRenderer.send("restart",`"nohwa" Settings option toggled to ${value}.`),
    soundonly: (value: boolean) => {
        document.body.toggleAttribute("soundonly",value)
        window.dispatchEvent(new Event("soundonly"))
    },
    extwin: (value: boolean) => ipcRenderer.send("extwin",value),
    extwinshow: (value: boolean) => ipcRenderer.send("extwinshow",value),
    audiosrc: (value: "notify" | "app" | "off") => document.body.toggleAttribute("muted",value === "off"),
    shortcuts: (value: boolean) => ipcRenderer.send("shortcut",value),
    statwin: (value: boolean) => ipcRenderer.send("statwin",value),
    statwinaot: (value: boolean) => ipcRenderer.send("statwinaot",value),
    noanim: (value: boolean) => document.body.toggleAttribute("noanim",value),
    tooltips: (value: boolean) => sanhelper.settooltips(value),
    debug: (value: boolean) => ipcRenderer.send("debugwin",value),
    usecustomfiles: () => ipcRenderer.send("closeextwin"),
    ramode: (value: boolean) => ipcRenderer.send("ra",value),
    getcheckbox: (config: Store<Config>,elem: HTMLInputElement,keypath?: string) => elem.checked = config.get((keypath ? `${keypath}.` : "") + elem.id) as boolean,
    setcheckbox: (config: Store<Config>,event: Event,keypath?: string) => {
        // event.preventDefault()
        const elem = (event.target instanceof HTMLSpanElement ? event.target.parentElement!.querySelector(`input[type="checkbox"]`)! : event.target!) as HTMLInputElement
        if (raelems.find(id => elem.id === id)) return

        if (process.platform === "linux") {    
            for (const [lib,entries] of deps) {
                for (const [id,section] of entries) {
                    if (elem.id === id && sanhelper.depsinstalled(lib,section || "media")) return
                }
            }
        }

        config.set((keypath ? `${keypath}.` : "") + elem.id,!config.get((keypath ? `${keypath}.` : "") + elem.id) as boolean)
        
        // `elem.checked` property does not update when clicking `input` element if `requestAnimationFrame`/`setTimeout` is not used here.
        requestAnimationFrame(() => {
            elem.checked = config.get((keypath ? `${keypath}.` : "") + elem.id) as boolean
            sanhelper[elem.id] && sanhelper[elem.id](config.get(elem.id) as boolean)

            sanhelper.updatetabs(noreload(elem) !== undefined)
            config.get("debug") && ipcRenderer.emit("updatemenu",null,"debug")
        })
    },
    setvalue: (config: Store<Config>,elem: (HTMLInputElement | HTMLSelectElement),keypath?: string) => {
        const key = config.get((keypath ? `${keypath}.` : "") + elem.id)

        if (elem.id === "monitors" && elem instanceof HTMLSelectElement) {
            // Resets `<select>` options to prevent duplicates
            elem.textContent = ""

            const monitors = key as Monitor[]
            let currentmonitor = monitors.find(monitor => config.get("lastknownmonitorlbl") === monitor.label)
            if (!currentmonitor) currentmonitor = monitors.find(monitor => monitor.id === config.get("monitor")) || monitors.find(monitor => monitor.primary)!

            for (const monitor of monitors) {
                const opt = document.createElement("option")
                opt.value = monitor.id.toString()
                opt.text = monitor.label
                elem.appendChild(opt)
            }

            elem.value = currentmonitor.id.toString()
            elem.onchange = ({ target }: Event) => {
                const select = target as HTMLSelectElement
                const id = parseInt(select.value)
                const lbl = select.querySelector(`option[value="${id}"]`)!.textContent

                config.set("monitor",id)
                config.set("lastknownmonitorlbl",lbl)

                sanhelper.devmode && ipcRenderer.send("montest",id)
            }

            return
        }

        if (elem.id === "themeselect") {
            const typethemes = config.get(`customisation.${sanhelper.type}.usertheme`) as UserTheme[]
            const themeselect = elem as HTMLSelectElement

            themeselect.innerHTML = ""
            typethemes.sort((a,b) => (a.id as number) - (b.id as number)).map(theme => `<option value="theme${theme.id}" ${theme.enabled ? "selected" : ""}>${theme.label}</option>`).forEach(opt => themeselect.insertAdjacentHTML("beforeend",opt))

            themeselect.onchange = event => {
                usertheme.set(parseInt((event.target as HTMLOptionElement).value.replace(/^theme/,"")),event)
                sanhelper.updatetabs()
                sanhelper.reloadelemselector()
            }

            return
        }

        const selectinputtype = (target: EventTarget) => ((target instanceof HTMLSelectElement ? target as HTMLSelectElement : target as HTMLInputElement)).value
        
        const skipelems = [
            ...selectorelems,
            ...raelems
        ]
        
        // Fixes issue where switching Customiser tabs/setting Screenshots to "off" causes an error on next line
        if (skipelems.find(id => elem.id === id)) return

        elem.value = key.toString()

        if (elem instanceof HTMLInputElement && elem.type === "color") return elem.onclick = event => event.preventDefault()

        elem.onchange = ({ target }: Event) => {
            config.set((keypath ? `${keypath}.` : "") + elem.id, (target instanceof HTMLInputElement && (target.type === "range" || target.type === "number")) ? parseFloat(target.value) : (typeof key === "number" ? parseInt(selectinputtype(target!)) : selectinputtype(target!)))
            sanhelper.updatetabs(noreload(elem) !== undefined)

            if (elem.id === "lang") {
                (async () => {
                    await language.load()
                    window.dispatchEvent(new Event("lang"))
                })()

                sanhelper.tooltips(config.get("tooltips"))
            }

            elem.id === "preset" && (async () => await sanhelper.resetelemselector(document.querySelector("#customiser")))()
            elem.id === "audiosrc" && sanhelper.audiosrc(config.get("audiosrc"))
            config.get("debug") && ipcRenderer.emit("updatemenu",null,"debug")
            elem.id === "screenshots" && sanhelper.loadadditionaltooltips(document.querySelector(`dialog[menu] #settingscontent`))
            // If `ra` Settings elements are updated, restart the `startra()` function in `worker.ts` with current settings
            elem.id === "rauser" && ipcRenderer.emit("ra")

            if (elem.id === "rakey") {
                sanhelper.storerakey(elem.value)
                ipcRenderer.emit("ra")
            }

            if (process.platform === "linux") {   
                for (const [lib,entries] of deps) {
                    for (const [id,section] of entries) {
                        if (id === "ssmode" && elem.id === id && sanhelper.depsinstalled(lib,section || "media")) {
                            config.set("ssmode","screen")
                            elem.value = "screen"
                            return
                        }
                    }
                }
            }
        }

        if (elem.hasAttribute("unit")) {
            elem.parentElement!.setAttribute("value",elem.id === "glowspeed" ? `${parseInt(elem.value) * 0.2}` : elem.value)
            elem.oninput = ({ target }: Event) => (elem as HTMLInputElement).parentElement!.setAttribute("value",(target as HTMLInputElement).id === "glowspeed" ? `${parseInt((target as HTMLInputElement).value) * 0.2}` : (target as HTMLInputElement).value)
        }
    },
    setbtn: async (config: Store<Config>,elem: HTMLButtonElement,keypath?: string) => {
        elem.removeAttribute("novalue")

        const key = config.get((keypath ? `${keypath}.` : "") + elem.id.replace(/\d/,""))
        const type = sanhelper.type
        
        elem.onclick = () => {
            const attr = ["img","audio","dir","font"].find(attr => elem.hasAttribute(attr))

            ipcRenderer.once("loadfile", (event,path) => {
                if (!path) return

                const iconkey = ["logo","decoration","plat"].find(id => elem.id.replace(/\d/,"") === id)
                const newkeypath = (keypath ? `${keypath}.` : "") + (iconkey ? (Array.isArray(config.get((keypath ? `${keypath}.` : "") + iconkey)) ? `${iconkey}.${parseInt(elem.id.replace(/[^\d]/g,"")) - 1}` : iconkey) : elem.id)

                config.set(newkeypath,path[0].replace(/\\/g,"/"))
                sanhelper.updatetabs(noreload(elem) !== undefined)
            })

            ipcRenderer.send("loadfile",attr)
        }

        if (!elem.classList.contains("img")) return elem.textContent = key ? key.toString().replace(/\\/g,"/") : (await language.get(`default${elem.id}`) || "MISSING!!!")
        if (!elem.classList.contains("customicon")) return elem.style.setProperty("--img",`url('${key ? key : sanhelper.setfilepath(elem.id === "hiddenicon" ? "icon" : "img",`${elem.id === "hiddenicon" ? (key || "lock.svg") : "sanimgbg.png"}`)}')`)

        const customiconkey = (): string | null => Array.isArray(key) ? key[parseInt(elem.id.replace(/[^\d]/g,"")) - 1] as string : key as string || null
        if (!customiconkey() || (type !== "plat" && elem.id === "plat") || (elem.id.includes("decoration") && (!Array.isArray(key) && elem.id !== "decoration1"))) return elem.setAttribute("novalue","")

        elem.style.setProperty("--img",`url('${customiconkey()}')`)

        if (elem.id.includes("decoration")) {
            const i = parseInt(elem.id.replace(/[^\d]/g,""))
            const raritylbl = i === 1 ? "> 50%" : (i === 2 ? `< 50% & > ${config.get("rarity")}%` : `< ${config.get("rarity")}%`)

            // Only bronze/silver icons should appear for "main" type, and gold for "rare"/"plat"
            if (Array.isArray(key)) {
                if ((type === "main" && (i - 1) > 1) || (type !== "main" && (i - 1) < 2)) return elem.setAttribute("novalue","")
            }
            
            elem.parentElement!.querySelector("span")!.textContent = `${await language.get(Array.isArray(key) ? "rarity" : "decoration",["customiser","icons","content"])}${Array.isArray(key) ? `: ${raritylbl}` : ""}`
        }
    },
    updatetabs: (noreload?: boolean) => window.dispatchEvent(new CustomEvent("tabchanged", { detail: { type: ["main","rare","plat"].find(attr => document.body.hasAttribute(attr)), noreload: noreload } })),
    loadadditionaltooltips: (menuelem: HTMLElement) => requestAnimationFrame(() => {
        if (!menuelem) return

        const elems = [
            `#elemselector select`,
            `#elemselector input`,
            `#elemselector button`,
            `#webhookwrapper input`,
            `button[id$="shortcut"]`,
            `.multiselect#raemuswrapper input[type="checkbox"]`,
            `.multiselect#raemuswrapper input[type="text"]`
        ].join(",")

        menuelem.querySelectorAll(elems)!.forEach(async elem => {
            // Removes previous tooltips from `tippies` array when present
            const prevtt = tippies.find(tt => tt[0]?.reference === elem.parentElement)
            prevtt && tippies.splice(tippies.indexOf(prevtt,1)).forEach(tt => tt[0]?.destroy())

            const trophies = [
                "bronze",
                "silver",
                "gold"
            ] as const

            let content = (await language.get(elem.id,["tooltips"])).replace(/\$type/,await language.get(menuelem.id === "settingscontent" ? "screenshot" : "notification",["tooltips"]))

            for (const id of trophies) {
                if (elem.id.endsWith(id)) {
                    const config = (await import("./config")).sanconfig.get()
                    content = content.replace(/\$rarity/,`${config.get("rarity")}%`)
                }
            }

            const wideelems = [...rasupported].flatMap(id => rasupported.includes(id) ? [id,`${id}path`] : [id])
            const elemselectorbtns = [...trophies].map(id => `percentbadgeimg${id}`)

            const tt = tippy(`#${menuelem.id} .opt:has(> #${elem.id})${elem.classList.contains("rect") ? ` > #${elem.id}` : ""}`,{
                ...defaulttippy,
                appendTo: "parent",
                content: content,
                maxWidth: sanhelper.maxwidth(wideelems,elem),
                triggerTarget: !elem.id.startsWith("webhookembedcolor") && ![...rasupported].some(id => elem.id === id) && ![...elemselectorbtns,"resetpbimgs"].some(id => elem.id === id) ? elem.parentElement : ([...rasupported,...elemselectorbtns].some(id => elem.id === id) ? [elem,elem.previousElementSibling!] : elem),
                onTrigger(inst) {
                    currenttippy && currenttippy !== inst && currenttippy.hide()
                    currenttippy = inst

                    inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                }
            }) as Instance<Props>[]

            tippies.push(tt)
        })

        const range = new Map<string,string>([
            ["percentbadgefontsize","%"],
            ["sspercentbadgefontsize","%"],
            ["percentbadgeroundness","%"],
            ["sspercentbadgeroundness","%"],
            ["percentbadgex","px"],
            ["sspercentbadgex","px"],
            ["percentbadgey","px"],
            ["sspercentbadgey","px"],
        ])

        range.forEach((value,key) => {
            const elem = document.getElementById(key)

            if (elem) {
                const tt = tippy(`#${key}`,{
                    ...defaulttippy,
                    content: `${(elem as HTMLInputElement).value}${value}`,
                    appendTo: "parent",
                    hideOnClick: false,
                    placement: "top",
                    followCursor: false,
                    offset: [0,5],
                    delay: [0,10],
                    theme: "default value",
                    onTrigger(inst) {
                        (elem as HTMLInputElement).oninput = () => inst.setProps({ content: `${(elem as HTMLInputElement).value}${value}` })
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                })
    
                tippies.push(tt)
            }
        })

        // Changing `menuelem` to `#customisercontent` would be easier, but stops displaying tooltips when changed for some reason
        const menu = document.getElementById(menuelem.id.endsWith("content") ? menuelem.id : `${menuelem.id}content`)

        menu?.querySelectorAll(`input[type="color"]`)?.forEach(async clr => {
            const { sanconfig } = await import("./config")
            const config = sanconfig.get()
            const dialog = document.querySelector(`dialog[menu]:has(#${menu?.id})`)
            const color = clr as HTMLInputElement

            color.style.setProperty("--configcolor",config.get(`${!color.id.startsWith("webhookembedcolor") ? `customisation.${sanhelper.type}.` : ""}${color.id}`) as string)
    
            const tt = tippy(`#${color.id}`,{
                allowHTML: true,
                appendTo: dialog || document.body,
                interactive: true,
                maxWidth: "none",
                trigger: "click",
                offset: [0,20],
                placement: menuelem.id === "customiser" ? "left" : "right",
                onTrigger: inst => {
                    currenttippy && currenttippy !== inst && currenttippy.hide()
                    currenttippy = inst

                    inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                },
                onMount: inst => {
                    menu.addEventListener("scroll",() => inst.hide(),{ once: true })
    
                    const html = `
                        <input type="text" spellcheck="false" maxlength="9">
                        <span id="colorcode"></span>
                        <div id="picker"></div>
                    `
        
                    inst.setContent(html)
                    createcolorpicker(inst,color,menuelem)
                },
                onHidden: inst => {
                    inst.setContent("")
                    currenttippy === inst && (currenttippy = null)
                }
            })
    
            tippies.push(tt)
        })
    }),
    maxwidth: (wideelems: string[],elem: HTMLElement) => wideelems.includes(elem.id) ? 200 : defaulttippy.maxWidth,
    settooltips: (value: boolean) => {
        tippies.forEach(tt => tt[0]?.destroy())
        tippies.length = 0

        const range = new Map<string,string>([
            ["rarity","%"],
            ["nowtrackingscale","%"],
            ["pollrate","ms"],
            ["initdelay","s"],
            ["releasedelay","s"],
            ["maxretries",""],
            ["maxsteamlangretries",""],
            ["extwinframerate","FPS"],
            ["customtriggerdelay","s"]
        ])

        const wideelems = [
            "exportachdata"
        ]

        range.forEach((value,key) => {
            const elem = document.getElementById(key)

            if (elem) {
                const tt = tippy(`#${key}`,{
                    ...defaulttippy,
                    content: `${(elem as HTMLInputElement).value}${value}`,
                    maxWidth: sanhelper.maxwidth(wideelems,elem),
                    appendTo: "parent",
                    hideOnClick: false,
                    placement: "top",
                    followCursor: false,
                    offset: [0,5],
                    delay: [0,10],
                    theme: "default value",
                    onTrigger(inst) {
                        (elem as HTMLInputElement).oninput = () => inst.setProps({ content: `${(elem as HTMLInputElement).value}${value}` })
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                })
    
                tippies.push(tt)
            }
        })

        if (!value) return

        const elems = [
            "game",
            "usertheme",
            "customise",
            "test",
            "link"
        ]

        elems.forEach(async elem => {
            const parent = document.querySelector(`.rect:has(> #${elem})`) as any
            
            const tt = tippy(`#${elem}`,{
                ...defaulttippy,
                maxWidth: sanhelper.maxwidth(wideelems,elem),
                content: await language.get(elem,["tooltips"]),
                onTrigger(inst) {
                    inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })

                    parent?.querySelector("button") && parent._tippy.hide()
                }
            }) as Instance<Props>[]

            tippies.push(tt)
        })

        const btns = [
            "kofi",
            "discord",
            "github"
        ]

        btns.forEach(async btn => {
            const tt = tippy(`#${btn}`,{
                ...defaulttippy,
                maxWidth: sanhelper.maxwidth(wideelems,btn),
                content: await language.get(btn,["tooltips"]),
                placement: "top",
                followCursor: false,
                offset: [0,15],
                delay: [0,10],
                onTrigger(inst) {
                    inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                }
            }) as Instance<Props>[]

            tippies.push(tt)
        })

        const settings = document.querySelector(`dialog[menu] #settingscontent`) as HTMLElement
        const settingsbtns = Array.from(document.querySelectorAll(`dialog[menu] #settingscontent button`)).filter(btn => btn.id).map(btn => btn.id)

        if (settings) {
            settings.querySelectorAll(`
                #settingscontent input,
                #settingscontent .optbtn,
                #settingscontent select,
                #settingscontent .rect,
                #settingscontent > .cont:has(button${settingsbtns.map(id => `#${id}`).join(",")}) > .optcont > button
            `)!.forEach(async elem => {
                if (!elem) return

                const tt = tippy(settingsbtns.includes(elem.id) ? `#${elem.id}` : `
                    .opt:not(:has(> .sub, > .opt)):has(#${elem.id}),
                    .opt:has(> .sub, > .opt):has(> #${elem.id}) > #${elem.id},
                    .opt:has(> .sub, > .opt):has(> #${elem.id}) > span
                `,{
                    ...defaulttippy,
                    maxWidth: sanhelper.maxwidth(wideelems,elem),
                    content: `${await language.get(elem.id,["tooltips"])}${(elem.id === "replaynotify" && !document.body.hasAttribute("allowreplay") ? await language.get("replaynotifyempty",["tooltips"]) : "")}`,
                    appendTo: settings,
                    onTrigger(inst) {
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                }) as Instance<Props>[]
        
                tippies.push(tt)
            })

            sanhelper.loadadditionaltooltips(settings)
        }

        const customiser = document.querySelector("#customiser") as HTMLElement

        const rarityids = [
            "glowcolor",
            "iconborderimg"
        ] as const

        if (customiser) {
            customiser.querySelectorAll(`
                #customisercontent input,
                #customisercontent .optbtn,
                #customisercontent select,
                #customisercontent .rect
            `)!.forEach(async elem => {
                let content = await language.get(elem.id.includes("decoration") ? elem.id.replace(/\d/,"") : elem.id,["tooltips"])

                for (const id of rarityids) {
                    if (!elem.id.startsWith(id)) continue

                    for (const rarity of (["bronze","silver","gold"] as const)) {
                        if (elem.id !== id + rarity) continue

                        const config = (await import("./config")).sanconfig.get()
                        content = content.replace(/\$rarity/,`${config.get("rarity")}%`)
                    }
                }

                const tt = tippy(`
                    .opt:not(#posbtns, :has(> .sub, > .opt)):has(#${elem.id}:not(.optbtn)),
                    .opt:not(#posbtns, :has(> .sub, > .opt)):has(.optbtn#${elem.id}) > #${elem.id},
                    .opt:not(#posbtns, :has(> .sub, > .opt)):has(.optbtn#${elem.id}) > span,
                    .opt:has(> .sub, > .opt):has(> #${elem.id}) > #${elem.id},
                    .opt:has(> .sub, > .opt):has(> #${elem.id}) > span,
                    .opt#posbtns > #${elem.id}
                `,{
                    ...defaulttippy,
                    maxWidth: sanhelper.maxwidth(wideelems,elem),
                    content,
                    onTrigger(inst) {
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                }) as Instance<Props>[]
                
                tippies.push(tt)
            })

            customiser.querySelectorAll(
                `.wrapper#webviewbtns > .menubtn`
            )!.forEach(async elem => {
                const tt = tippy(`#${elem.id}`,{
                    ...defaulttippy,
                    maxWidth: sanhelper.maxwidth(wideelems,elem),
                    content: await language.get(elem.id,["tooltips"]),
                    onTrigger(inst) {
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                })

                tippies.push(tt)
            })

            customiser.querySelectorAll(`
                .opt:has(.menubtn.delbtn) > .delbtn,
                .opt:has(.menubtn.visibilitybtn) > .visibilitybtn
            `)
            .forEach(async elem =>  {
                const tt = tippy(`.opt:has(#${elem.parentElement!.querySelector(`.optbtn`)!.id}) > .${elem.classList.contains("visibilitybtn") ? "visibilitybtn" : "delbtn"}`,{
                    ...defaulttippy,
                    maxWidth: sanhelper.maxwidth(wideelems,elem),
                    content: await language.get(elem.classList.contains("visibilitybtn") ? "visibilitybtn" : "delbtn",["tooltips"]),
                    onTrigger(inst) {
                        inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                    }
                })

                tippies.push(tt)
            })

            sanhelper.loadadditionaltooltips(customiser)
        }

        const selection = document.querySelector("dialog[selection]")

        if (selection) {
            requestAnimationFrame(() => {
                selection.querySelectorAll(
                    `button#userthemesync`
                )!.forEach(async elem => {
                    const tt = tippy(`#${elem.id}`,{
                        ...defaulttippy,
                        maxWidth: sanhelper.maxwidth(wideelems,elem),
                        content: await language.get(elem.id,["tooltips"]),
                        appendTo: "parent",
                        onTrigger(inst) {
                            inst.setProps({ animation: document.body.hasAttribute("noanim") ? false : "scale" })
                        }
                    })

                    tippies.push(tt)
                })
            })
        }
    },
    getpresetbounds: (preset: string) => {
        const meta = () => {
            try {
                const html = fs.readFileSync(path.join(__root,"notify","presets",preset,"index.html")).toString()
                return new DOMParser().parseFromString(html,"text/html").querySelector("meta")
            } catch (err) {
                return null
            }
        }

        return {
            width: meta() ? parseInt(meta()!.getAttribute("width")!) : 300,
            height: meta() ? parseInt(meta()!.getAttribute("height")!) : 50
        }
    },
    createclosedstate: () => !localStorage.getItem("closedstate") && localStorage.setItem("closedstate",JSON.stringify([],null,4)),
    loadclosedstate: (dialog: HTMLElement) => {
        sanhelper.createclosedstate()
        const closedstate: string[] = JSON.parse(localStorage.getItem("closedstate")!)

        if (!dialog) return

        requestAnimationFrame(() => {
            const dialogtitles = dialog.querySelectorAll(".wrapper.title, .wrapper#elemselector > span.lbl")
            const doctitles = document.querySelectorAll(".wrapper.title, .wrapper#elemselector > span.lbl")

            dialogtitles && dialogtitles.forEach(elem => {
                (elem as HTMLElement).onclick = () => {
                    elem.toggleAttribute("closed",!elem.hasAttribute("closed"))
    
                    elem.hasAttribute("closed") && !closedstate.includes(elem.id) && closedstate.push(elem.id)
                    !elem.hasAttribute("closed") && closedstate.includes(elem.id) && closedstate.splice(closedstate.indexOf(elem.id),1)
    
                    localStorage.setItem("closedstate",JSON.stringify([...closedstate],null,4))
                }
    
                doctitles && doctitles.forEach(elem => {
                    elem.toggleAttribute("notransition",elem.hasAttribute("closed"))
                    elem.toggleAttribute("closed",closedstate.includes(elem.id))
    
                    // Remove "notransition" attribute after transition duration to prevent elements from playing transition animation when opening menu
                    setTimeout(() => elem.removeAttribute("notransition"),200)
                })
            })
        })
    },
    presskeys: (keys: (string | number)[]) => setTimeout(() => process.platform === "win32" ? pressKeysWin32(keys as number[]) : pressKeysLinux(keys as string[]),100),
    triggerkeypress: async (hotkeys: (string | number)[]) => {
        const { log } = await import("./log")
        if (process.platform === "linux" && !sanhelper.depsinstalled("keypressrs","media")) return log.write("WARN",`Unable to trigger keypress: "xdotool" dependency not installed`)
        if (!hotkeys.length) return log.write("WARN",`No valid keys provided to trigger keypress/combo`)

        sanhelper.presskeys(hotkeys)
    },
    depsinstalled: (lib: "keypressrs" | "hdr" | "wmctrl",section: string): string => {
        const missinglib = depsInstalled(lib)
        
        if (process.platform === "linux" && missinglib) {
            if (!deps.has(lib)) throw new Error(`"${lib}" not found in "deps" map`)

            const entries = deps.get(lib)!
            const match = entries.find(([_,s]) => (s || "media") === section)

            if (!match) throw new Error(`No matching language section found for "${section}" ("${lib}")`)

            ;(async () => {
                const { dialog } = await import("./dialog")
                const { lang } = (await import("./config")).sanconfig.get().store
                const { missingdepssub } = await import(`../lang/${lang}`)

                dialog.open({
                    title: `${await language.get("missingdeps")}: ${missinglib}`,
                    type: "default",
                    icon: sanhelper.setfilepath("icon","error.svg"),
                    sub: missingdepssub(await language.get(match[0] as string,["settings",section,"content"]),missinglib)
                })
            })()

            return missinglib
        }

        return ""
    },
    resetdebuginfo: async (debugwin?: Electron.BrowserWindow) => {
        const config = (await import("./config")).sanconfig.get()

        const debuginfo = {
            username: "",
            appid: 0,
            status: "Released",
            gamename: "",
            pollrate: config.get("pollrate"),
            releasedelay: config.get("releasedelay"),
            maxretries: config.get("maxretries"),
            userust: config.get("userust"),
            processes: []
        } as DebugInfo

        const wintype = debugwin ? debugwin.webContents : ipcRenderer
        wintype.send("debuginfoupdated",debuginfo,true)
    },
    resetelemselector: async (menuelem: HTMLElement) => {
        const { sanconfig: { defaulticons, get } } = await import("./config")
        const config = get()
        const type = sanhelper.type

        // Reset all element indexes to default value (listed in `sanconfig.defaulticons`) when switching presets
        ;["elems","sselems"].forEach(elemtype => config.set(`customisation.${type}.${elemtype}`,defaulticons.get(config.get(`customisation.${type}.preset`) as string)![elemtype]))
        const index = defaulticons.get(config.get(`customisation.${type}.preset`) as string)!.index
        selectorelems.filter(id => ["percent","hiddenicon","decoration"].find(elemid => id === `${elemid}pos`)).forEach(id => [id,`ss${id}`].forEach(key => index && config.set(`customisation.${type}.${key}`,index[`${key.replace(/^ss/,"").replace(/pos$/,"")}`])))

        sanhelper.loadadditionaltooltips(menuelem)
    },
    reloadelemselector: async () => {
        const menutype = document.getElementById("settingscontent") || document.getElementById("customiser") as HTMLElement
        if (!menutype) return

        const settings = menutype.id === "settingscontent"

        const { elemselector } = await import("./elemselector")
        elemselector(document.querySelector(`#${settings ? "settings" : "customiser"}content .wrapper:has(> ${settings ? "input#ovmatch" : "select#preset"})`)!,`${settings ? "ss" : ""}elems`)

        sanhelper.loadadditionaltooltips(menutype)
    },
    sethelpdialog: (span: HTMLSpanElement,langid: string) => span.onclick = async () => {
        const { dialog } = await import("./dialog")

        dialog.open({
            title: await language.get(langid),
            type: "default",
            icon: sanhelper.setfilepath("icon","question.svg"),
            sub: await language.get(`${langid}sub`)
        })

        document.querySelector("dialog[default] .contentsubitem:first-child")!.setAttribute("nobefore","")
        document.querySelectorAll(`dialog[default] span.hl.help[url]`).forEach(elem => (elem as HTMLSpanElement).onclick = () => shell.openExternal(elem.getAttribute("url")!))
    },
    storerakey: async (key: string) => ipcRenderer.send("storekey",key),
    loadraemus: (emus: string[],config: Store<Config>) => {
        const raemuswrapper = document.querySelector(".wrapper#raemuswrapper") as HTMLElement
        const elems: Set<[string,string]> = new Set([])

        const createraemus = async (id: string) => {
            const html = `
                <div class="wrapper opt">
                    <span>${await language.get(id,["settings","ra","content"])}</span>
                    <input type="checkbox" id="${id}">
                    <div class="wrapper opt">
                        <span class="lbl">${await language.get("installdir",["settings","ra","content"])}</span>
                        <input type="text" id="${id}path">
                        <button class="rect" id="${id}browse"></button>
                    </div>
                </div>
            `
            
            elems.add([id,html])
        }

        const setraemuactions = async (opt: HTMLElement,id: string,config: Store<Config>) => {
            opt.onclick = null

            const span = opt.querySelector("span") as HTMLSpanElement
            const input = opt.querySelector(`input[type="checkbox"]`) as HTMLInputElement
            const installdir = opt.querySelector(`input[type="text"]`) as HTMLInputElement
            const installdirvalue = config.get(installdir.id) as string
            
            installdir.placeholder = await language.get("placeholder",["settings","ra","content"])
            installdir.value = installdirvalue

            span.onclick = null
            input.onclick = null

            const value = config.store.raemus.includes(id)
            input.checked = value

            for (const e of [span,input]) {
                const elem = e as HTMLSpanElement | HTMLInputElement

                elem.onclick = event => {
                    const raemus = config.get("raemus")
                    const elem = event.target as HTMLSpanElement | HTMLInputElement
                    const input = (elem instanceof HTMLSpanElement ? elem.nextElementSibling : elem) as HTMLInputElement

                    const value = raemus.includes(input.id)
                    value ? raemus.splice(raemus.indexOf(input.id),1) : raemus.push(input.id)

                    config.set("raemus",raemus)
                    input.checked = config.get("raemus").includes(input.id)

                    return
                }
            }

            installdir.onchange = event => {
                const input = event.target as HTMLInputElement
                const value = input.value.replace(/\\/g,"/")

                config.set(input.id,value)

                input.value = value
            }

            const btn = opt.querySelector(`button[id$="browse"]`) as HTMLButtonElement
                
            btn.onclick = event => {
                const btn = event.target as HTMLButtonElement
                const input = btn.parentElement!.querySelector("input") as HTMLInputElement

                ipcRenderer.once("loadfile",(event,dirpath) => {
                    if (!dirpath) return
                    const value = dirpath[0].replace(/\\/g,"/")

                    config.set(input.id,value)
    
                    input.value = value
                })

                ipcRenderer.send("loadfile","log")
            }
        }

        emus.forEach(async id => await createraemus(id))

        requestAnimationFrame(async () => {
            raemuswrapper.innerHTML = ""
            raemuswrapper.onclick = null

            elems.forEach(async ([id,html]) => {
                raemuswrapper.insertAdjacentHTML("beforeend",html)
                
                const opt = raemuswrapper.querySelector(`.opt:has(input#${id})`) as HTMLElement
                opt.onclick = null
                
                await setraemuactions(opt,id,config)
            })
        })
    },
    checkbetastatus: async () => {
        document.body.setAttribute("beta","")

        const { dialog } = await import("./dialog")
        const { log } = await import("./log")

        try {
            const tagname = (await (await fetch("https://api.github.com/repos/steamachievementnotifier/steamachievementnotifier/releases")).json())[0].tag_name
            const latest = parseInt(tagname.split(".")[2])
            const beta = parseInt(sanhelper.semver.split(".")[2])

            if (latest >= beta) {
                ipcRenderer.send("betaunsupported")

                dialog.open({
                    title: await language.get("betaunsupported"),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","error.svg"),
                    sub: await language.get("betaunsupportedsub"),
                    buttons: [{
                        icon: sanhelper.setfilepath("icon","github.svg"),
                        id: "betaghreleases",
                        label: await language.get("betaghreleases"),
                        click: () => shell.openExternal("https://www.github.com/steamachievementnotifier/steamachievementnotifier/releases/latest")
                    },
                    {
                        icon: sanhelper.setfilepath("icon","close.svg"),
                        id: "betaexit",
                        label: await language.get("exit"),
                        click: () => ipcRenderer.send("exit",`Unsupported Beta version installed (Beta: V1.9.${beta} | Latest: V1.9.${latest})`)
                    }]
                })
            }
        } catch (err) {
            log.write("ERROR",`Unable to query latest GitHub Release: ${err as Error}`)
        }
    }
}