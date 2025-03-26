import { app, ipcMain, ipcRenderer, shell } from "electron"
import path from "path"
import fs from "fs"
import Store from "electron-store"
import { usertheme } from "./usertheme"
import { keycodes } from "./keycodes"
import { language } from "./language"
import tippy, { followCursor, Instance, Props } from "tippy.js"
import { getSteamPath, getAppInfo, pressKey, depsInstalled, getHqIcon, log as sanhelperrslog, hdrScreenshot } from "sanhelper.rs"
import { selectorelems } from "./elemselector"
import { createcolorpicker } from "./colorpicker"
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

export const sanhelper: SANHelper = {
    get devmode(): boolean { return process.env.npm_lifecycle_event === "dev" },
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
    initlogger: (appdata: string) => initLogger(appdata),
    hdrscreenshot: (monitorid: number,sspath: string) => hdrScreenshot(monitorid,sspath),
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
    getshortcut: (config: Store<Config>, target: HTMLElement, id?: string) => {
        const btn = document.getElementById(id || "shortcutbtn")! as HTMLButtonElement
        const type = !id ? ["main","rare","plat"].find(attr => (target as HTMLElement).hasAttribute(attr)) : null
        const keys = config.get(id || `customisation.${type}.shortcut`) as string

        return btn.textContent = keys.replace(/\+/g," + ")
    },
    setshortcut: (config: Store<Config>, event: Event, id?: string) => {
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

            if (keys.length === 3) {
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
                return fs.readFileSync(path.join(process.env.HOME!,".config","user-dirs.dirs")).toString().split("\n").find(item => item.includes("XDG_DESKTOP_DIR"))!.match(/"([^"]+)"/)![1]
            } catch {
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

        if (process.platform === "linux") {
            const deps = new Map<string,string>([
                ["steamss","keypressrs"],
                ["hdrmode","hdr"]
            ])
    
            for (const [key,value] of deps) {
                if (elem.id === key && sanhelper.depsinstalled(value)) return
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
            const currentmonitor = monitors.find(monitor => monitor.id === config.get("monitor")) || monitors.find(monitor => monitor.primary)!

            for (const monitor of monitors) {
                const opt = document.createElement("option")
                opt.value = monitor.id.toString()
                opt.text = monitor.label
                elem.appendChild(opt)
            }

            elem.value = currentmonitor.id.toString()
            elem.onchange = ({ target }: Event) => {
                const id = parseInt((target as HTMLOptionElement).value)
                config.set("monitor",id)
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
        
        // Fixes issue where switching Customiser tabs/setting Screenshots to "off" causes an error on next line
        if (selectorelems.find(id => elem.id === id)) return

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
            `button[id$="shortcut"]`
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

            const tt = tippy(`#${menuelem.id} .opt:has(> #${elem.id})${elem.classList.contains("rect") ? ` > #${elem.id}` : ""}`,{
                ...defaulttippy,
                appendTo: "parent",
                content: content,
                triggerTarget: !elem.id.startsWith("webhookembedcolor") ? elem.parentElement : elem,
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
            ["extwinframerate","FPS"]
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
                    content: await language.get(elem.id,["tooltips"]),
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

        if (customiser) {
            customiser.querySelectorAll(`
                #customisercontent input,
                #customisercontent .optbtn,
                #customisercontent select,
                #customisercontent .rect
            `)!.forEach(async elem => {
                let content = await language.get(elem.id.includes("decoration") ? elem.id.replace(/\d/,"") : elem.id,["tooltips"])

                if (elem.id.startsWith("glowcolor")) {
                    for (const type of ["silver","gold"].map(type => `glowcolor${type}`)) {
                        if (elem.id === type) {
                            const config = (await import("./config")).sanconfig.get()
                            content = content.replace(/\$rarity/,`${config.get("rarity")}%`)
                        }
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
    presskey: (key: number) => setTimeout(() => pressKey(key),100),
    depsinstalled: (lib: "keypressrs" | "hdr"): String => {
        const missinglib = depsInstalled(lib)

        if (process.platform === "linux" && missinglib) {
            (async () => {
                const { dialog } = await import("./dialog")
                const lang = (await import("./config")).sanconfig.get().store.lang
                const { missingdepssub } = await import(`../lang/${lang}`)

                dialog.open({
                    title: `${await language.get("missingdeps")}: ${missinglib}`,
                    type: "default",
                    icon: sanhelper.setfilepath("icon","error.svg"),
                    sub: missingdepssub(await language.get(lib === "keypressrs" ? "steamss" : "hdrmode",["settings","media","content"]),missinglib)
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
    },
    storerakey: async (key: string) => ipcRenderer.send("storekey",key)
}