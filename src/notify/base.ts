import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"

window.addEventListener("unhandledrejection",event => ipcRenderer.send("notifyfailed",event.reason as Error))
window.addEventListener("error",event => ipcRenderer.send("notifyfailed",event.error as Error))

const imgs = [document.getElementById("achicon")] as HTMLImageElement[]

const hiddenelems = [
    "steamdeck",
    "epicgames",
    "ps5"
]

let notifyid: number = -1

const notifyhelper = {
    appendcss: (preset: string) => {
        document.querySelector(`link#${preset}css`)! && document.querySelector(`link#${preset}css`)!.remove()
    
        const link = document.createElement("link")
        link.id = `${preset}css`
        link.rel = "stylesheet"
        link.href = path.join(__dirname,"presets",preset,"styles.css")
    
        return link
    },
    get audioextensions(): string[] {
        return [
            ".wav",
            ".mp3",
            ".ogg",
            ".aac"
        ]
    },
    getaudiofile: (mode: "file" | "folder",filepath: string) => {
        if (mode === "file") return filepath
    
        const sounddir = filepath as string || path.join(__dirname,"..","sound")
        const dirfiles = fs.readdirSync(sounddir)
        const valid: (string | null)[] = []
    
        for (const file of dirfiles) {
            const filepath = path.join(sounddir,file).replace(/\\/g,"/")
            notifyhelper.audioextensions.includes(path.extname(file)) && fs.statSync(filepath).size && valid.push(filepath)
        }
    
        !valid.length && valid.push(null)
    
        return valid[Math.floor(Math.random() * valid.length)]
    },
    playaudio: (customisation: Customisation, iswebview: "customiser" | "sspreview" | "ss" | null, skipaudio: boolean | undefined, type: NotifyType) => {
        if (iswebview || skipaudio) return
    
        const audio = document.querySelector("audio")!
        audio.src = notifyhelper.getaudiofile(customisation.soundmode,customisation[`sound${customisation.soundmode === "file" ? "file" : "dir"}`]) || `../sound/notify${(type !== "main" && type !== "semi") ? `_${type}` : ""}.wav`
        audio.volume = customisation.volume / 100
        audio.play()
    },
    convertICO: async (file: string,tempdir: string) => {
        if (path.extname(file) !== ".ico") return file

        // "gameicon.png" should always exist here, as it is written to "./temp" in `trackwin.ts`
        const iconpng = path.join(tempdir,"gameicon.png").replace(/\\/g,"/")
        if (fs.existsSync(iconpng)) return iconpng

        return null
    },
    checkimgload: (imgs: HTMLImageElement[]): boolean => {
        for (const img of imgs) {
            if (!img) return true
            if (!img.complete) return false
            console.log(`"${img.id}" loaded`)
        }
    
        return true
    },
    checkreadystate: (status: "ready" | "failed",obj: Info,imgs: HTMLImageElement[],res: Res): NodeJS.Timeout | void => {
        if (document.readyState !== "complete") return setTimeout(() => notifyhelper.checkreadystate(status,obj,imgs,res),250)
        if (!notifyhelper.checkimgload(imgs)) return setTimeout(() => notifyhelper.checkreadystate(status,obj,imgs,res),250)

        const { customisation, iswebview, skipaudio, info: { type, id } } = obj
        if (iswebview === "customiser" || iswebview === "sspreview") return

        ipcRenderer.send(`notify${status}`,...(status === "failed" ? [res.msg,obj.info.id,obj.info.apiname] : [res]))
        status === "ready" && ipcRenderer.sendToHost(`sscapture_${id}`)
    
        return notifyhelper.playaudio(customisation,iswebview,skipaudio,type)
    },
    setcustomisations: (customisation: Customisation,percent: { value: number, rarity: number, semirarity: number },iswebview: "customiser" | "sspreview" | "ss" | null,appid: number,steampath: string,steam3id: number,hqicon: string,temp: string,percentimg: "bronze" | "silver" | "gold",gamearticon: string,gameartlibhero: string,gameartlogo: string,ra?: boolean): Promise<HTMLImageElement[] | null> => {
        return new Promise<HTMLImageElement[] | null>(async (resolve,reject) => {
            const fontloader = document.getElementById("fontloader")
            fontloader && fontloader.remove()
            
            if (customisation.customfont) {   
                const style = document.createElement("style")
                style.id = "fontloader"
                style.textContent = `@font-face {\n\tfont-family: "customfont";\n\tsrc: url("${customisation.customfont}");\n\t}\n\n.wrapper#achcont > .wrapper#achcontent {\n\tfont-family: "customfont" !important;\n\t}`
                document.head.appendChild(style)
            }

            const getpercent = (trophies?: { bronze: string | number, silver: string | number, gold: string | number }): string | number => {
                if (!trophies) return 100 - Math.round(percent.value / 5) * 5
                return percent.value > percent.semirarity ? trophies.bronze : (percent.value <= percent.semirarity && percent.value > percent.rarity ? trophies.silver : trophies.gold)
            }

            const getcustomicon = (type: "logo" | "decoration"): string => {
                const preseticons = customisation.customicons[customisation.preset] as CustomIcon
                if (preseticons.decoration && customisation.replacelogo) type = "decoration"

                const icon = preseticons[type]
                if (!icon) return ""

                if (Array.isArray(icon)) return `url('${getpercent({ bronze: icon[0],silver: icon[1],gold: icon[2] })}')`

                return `url('${icon}')`
            }
        
            iswebview === "customiser" && (customisation.scale = 100)
    
            const preloadimgs: HTMLImageElement[] = []
            const imgerrors: string[] = []
    
            const getpreloadimgurl = async (type: "bgstyle" | "usegameicon",icon: string,libhero: string,logo: string) => {
                const preloadimg = document.createElement("img")
                const url = (type === "bgstyle" && customisation.bgstyle === "bgimg") ? (customisation.bgimg || "../img/sanimgbg.png") : type === "bgstyle" ? libhero : (customisation.gameicontype === "icon" ? icon : logo)
                
                const convertedicon = (await notifyhelper.convertICO(url,temp)) || (type === "bgstyle" ? libhero : (customisation.gameicontype === "icon" ? icon : logo))
                preloadimg.id = `${type}url`
                preloadimg.src = convertedicon
    
                preloadimgs.push(preloadimg)
    
                return convertedicon
            }

            const gamearturl: string | null = (customisation.bgstyle === "gameart" || customisation.bgstyle === "bgimg") ? await getpreloadimgurl("bgstyle",gamearticon,gameartlibhero,gameartlogo) : null
            const gameiconurl: string | null = customisation.usecustomimgicon ? customisation.customimgicon : (customisation.usegameicon ? (ra ? gamearticon : (appid ? await getpreloadimgurl("usegameicon",gamearticon,gameartlibhero,gameartlogo) : "../img/gameicon.png")) : null)
    
            gameiconurl && ((document.getElementById("achicon")! as HTMLImageElement)!.src = gameiconurl)

            const ss = (iswebview && !customisation.elemsmatch && iswebview.startsWith("ss")) ? "ss" : ""

            const badgepos = (pos: string) => {
                const scale = customisation.scale / 100
                const badge = {
                    x: customisation[`${ss}percentbadgex`] * scale,
                    y: customisation[`${ss}percentbadgey`] * scale
                }

                const positions: { [key: string]: { x: string, y: string } } = {
                    "topleft": { x: "20%", y: "10%" },
                    "topcenter": { x: "50%", y: "10%" },
                    "topright": { x: "80%", y: "10%" },
                    "bottomleft": { x: "20%", y: "90%" },
                    "bottomcenter": { x: "50%", y: "90%" },
                    "bottomright": { x: "80%", y: "90%" }
                }

                const { x, y } = positions[pos] || positions["bottomcenter"]

                return {
                    x: `calc(${x} + ${badge.x}px) calc(${100 - parseInt(x)}% - ${badge.x}px)`,
                    y: `calc(${y} + ${badge.y}px) 0`
                }
            }

            const properties = new Map<string,string>([
                ["--displaytime",`${customisation.displaytime}s`],
                ["--scale",`${customisation.scale / 100}`],
                ["--gradientangle",`${customisation.gradientangle}deg`],
                ["--bgimg",`url('${gamearturl}')`],
                ["--bgimgbrightness",`${customisation.bgimgbrightness}%`],
                ["--brightness",`${customisation.brightness}%`],
                ["--roundness",`${(customisation.roundness / 4) * (customisation.scale / 100)}px`],
                ["--fontsize", `${customisation.usecustomfontsizes ? 1 : customisation.fontsize / 100}`],
                ["--opacity", `${customisation.opacity / 100}`],
                ["--iconroundness",customisation.iconroundness === 100 ? "50%" : `${(customisation.iconroundness / 6) * (customisation.scale / 100)}px`],
                ["--fontoutline",customisation.fontoutline ? `${(customisation.scale / 100) * customisation.fontoutlinescale}px ${customisation.fontoutlinecolor}` : "none"],
                ["--fontshadow",customisation.fontshadow ? `drop-shadow(0 0 ${(customisation.scale / 100) * customisation.fontshadowscale}px ${customisation.fontshadowcolor}) `.repeat(3) : "none"],
                ["--logo",getcustomicon("logo")],
                ["--decoration",getcustomicon("decoration")],
                ["--decorationdisplaytype","block"],
                ["--gs",customisation.usepercent ? `${percent.value.toFixed(1)}` : `${getpercent()}`],
                ["--unit",customisation.usepercent ? "%" : (customisation.preset === "epicgames" ? " XP" : (customisation.preset === "xbox360" || customisation.preset === "gfwl" ? "G" : ""))],
                ["--raritycolor",`${percent.value > percent.semirarity ? "#a05526" : (percent.value <= percent.semirarity && percent.value > percent.rarity ? "#828282" : "#b4904a")}`],
                ["--hiddenicon",`url('${customisation.hiddenicon || "../icon/lock.svg"}')`],
                ["--glow",customisation.glow ? `drop-shadow(${(customisation.glowx * (customisation.scale / 100)) / 10}px ${(customisation.glowy * (customisation.scale / 100)) / 10}px var(--glowsize) var(--glowcolor))` : "none"],
                ["--glowsize",`${(customisation.glowsize / 100) * 0.6}rem`],
                ["--glowcolor",customisation.glowrarity ? (percent.value > percent.semirarity ? customisation.glowcolorbronze : (percent.value <= percent.semirarity && percent.value > percent.rarity ? customisation.glowcolorsilver : customisation.glowcolorgold)) : customisation.glowcolor],
                ["--glowanim",customisation.glow && customisation.glowanim !== "off" ? `${customisation.glowanim} calc(var(--transition) * var(--glowspeed)) linear infinite` : "none"],
                ["--glowspeed",`${customisation.glowspeed}`],
                ["--blur",`${customisation.blur * (iswebview === "customiser" ? 1 : customisation.scale / 100) / 50}px`],
                ["--mask",customisation.mask ? `url('${customisation.maskimg}') center / cover no-repeat` : "none"],
                ["--outline",customisation.useoutline ? customisation.outline : "none"],
                ["--outlinecolor",customisation.outlinecolor],
                ["--outlinewidth",`${(customisation.outlinewidth / 25) * (customisation.scale / 100)}px`],
                ["--badgeposx",badgepos(customisation[`${ss}percentbadgepos`]).x],
                ["--badgeposy",badgepos(customisation[`${ss}percentbadgepos`]).y],
                ["--badgecolor",customisation[`${ss}percentbadgecolor`]],
                ["--badgefontcolor",customisation[`${ss}percentbadgefontcolor`]],
                ["--badgesize",`${(customisation[`${ss}percentbadgefontsize`] / 10) * (customisation.scale / 100)}px`],
                ["--badgeroundness",customisation[`${ss}percentbadgeroundness`] === 100 ? "50%" : `${(customisation[`${ss}percentbadgefontsize`] / 4) / (customisation[`${ss}percentbadgeroundness`] / 10)}px`],
                ["--badgeimg",customisation[`${ss}percentbadgeimg`] ? (`url('${customisation[`${ss}percentbadgeimg${percentimg}`]}')` || `url('../img/sanlogotrophy.svg')`) : "none"],
                ["--iconscale",`${customisation.iconscale / 100}`],
                ["--iconshadowcolor",`${customisation.iconshadowcolor}`],
                ["--iconanimcolor",`${customisation.iconanimcolor}`],
                ["--logoscale",`${customisation.logoscale / 100}`],
                ["--decorationscale",`${customisation.decorationscale / 100}`],
                ["--unlockmsgfontsize",`${(customisation.usecustomfontsizes ? customisation.unlockmsgfontsize : customisation.fontsize) / 100}`],
                ["--titlefontsize",`${(customisation.usecustomfontsizes ? customisation.titlefontsize : customisation.fontsize) / 100}`],
                ["--descfontsize",`${(customisation.usecustomfontsizes ? customisation.descfontsize : customisation.fontsize) / 100}`],
                ["--unlockmsgfontcolor",`${customisation.usecustomfontcolors ? customisation.unlockmsgfontcolor : customisation.fontcolor}`],
                ["--titlefontcolor",`${customisation.usecustomfontcolors ? customisation.titlefontcolor : customisation.fontcolor}`],
                ["--descfontcolor",`${customisation.usecustomfontcolors ? customisation.descfontcolor : customisation.fontcolor}`],
                ["--iconborder",customisation.showiconborder ? `url('${(!customisation.iconborderrarity ? customisation.iconborderimg : (percent.value > percent.semirarity ? customisation.iconborderimgbronze : (percent.value <= percent.semirarity && percent.value > percent.rarity ? customisation.iconborderimgsilver : customisation.iconborderimg)))}')` : ""],
                ["--iconborderpos",`${customisation.iconborderpos === "back" ? -1 : 99}`],
                ["--iconborderscale",`${customisation.iconborderscale / 100}`],
                ["--iconborderx",`${customisation.iconborderx}`],
                ["--iconbordery",`${customisation.iconbordery}`],
                ["--textvspace",`${customisation.textvspace}`]
            ])

            const xpwrapper = document.getElementById("xpwrapper")
            const gselems = xpwrapper ? [xpwrapper] : ((customisation.preset === "xboxone" || customisation.preset === "xbox360" || customisation.preset === "gfwl") ? ["title","desc"].map(id => document.getElementById(id)) : [null])

            gselems.every(elem => elem !== null) && gselems.forEach(elem => ["gs","unit"].forEach(prop => elem!.setAttribute(prop,properties.get(`--${prop}`)!)))

            const colors = [
                "primarycolor",
                "secondarycolor",
                "tertiarycolor",
                "fontcolor"
            ]

            colors.forEach(color => properties.set(`--${color}`,(customisation as any)[color]))

            const attrs = [
                "bgstyle",
                "bgonly",
                `${(iswebview === "sspreview" || iswebview === "ss") && !customisation.ovmatch ? "ov" : ""}pos`
            ]
    
            attrs.forEach(attr => (customisation as any)[attr] && document.body.setAttribute(typeof (customisation as any)[attr] === "boolean" ? attr : (customisation as any)[attr],""))

            properties.forEach((value,key) => document.documentElement.style.setProperty(key,value))
    
            document.documentElement.style.setProperty("--bodyopacity","1")
    
            if (!imgerrors.length) return resolve(preloadimgs)
    
            const errobj = {
                validimgs: preloadimgs.filter(img => imgerrors.includes(img.id)),
                msg: `${imgerrors.map(id => id === "bgstyle" ? "Game Art" : "Game Icon").join(" and ")} image not found for ${appid}`
            }
    
            return reject(errobj)
        })
    }
}

try {
    document.body.addEventListener("animationend",({ animationName }) => animationName === "animend" && ipcRenderer.send(`animend_${notifyid}`,notifyid))
    
    ipcRenderer.on("notify", async (event,obj: Info,id: number) => {
        const { info: { type, appid, steam3id, apiname, unlockmsg, title, desc, icon, percent, hidden }, customisation, iswebview, steampath, hqicon, temp, ssalldetails, screenshots, gamearticon, gameartlibhero, gameartlogo, ra } = obj
        notifyid = id // Store globally to access in "notifyfinished" IPC event
    
        try {
            document.body.setAttribute(type,"")
            document.body.toggleAttribute("noiconanim",!!!customisation.iconanim)
    
            const ssdisplay = screenshots === "overlay" && customisation.ssdisplay
            document.body.toggleAttribute("ssdisplay",ssdisplay)
    
            if (iswebview === "customiser") {
                document.documentElement.style.scale = `0.${ssdisplay ? "" : 7}5`
                // Fixes issue on "PS Classic" preset where preview is not centered in the Customiser
                customisation.preset === "ps4" && document.body.style.setProperty("--placement","center")
            }
    
            if (iswebview !== "customiser" && ssdisplay) {
                const sspath = path.join(temp,`${id}.png`).replace(/\\/g,"/")
                fs.existsSync(sspath) && document.documentElement.style.setProperty("--ssimg",`url('${sspath}')`)   
            }
    
            const fastanimmap = new Map<string,number>([
                ["xqjan",8],
                ["xboxone",8]
            ])
    
            fastanimmap.forEach((value,key) => {
                if (customisation.preset !== key) return
                document.body.toggleAttribute("fastanim",customisation.displaytime < value)
            })
            
            const inserthtml = await new Promise<string>((resolve,reject) => {
                try {
                    resolve(fs.readFileSync(path.join(__dirname,"presets",customisation.preset,"index.html")).toString())
                } catch (err) {
                    reject(`Error inserting HTML for "${customisation.preset}" preset: ${err}`)
                }
            })
            .catch(err => { throw new Error(err) })
    
            document.body.insertAdjacentHTML("beforeend",inserthtml)
            
            const meta = document.querySelector("body > meta")
            if (!meta) throw new Error(`Error inserting HTML for "${customisation.preset}" preset: No <meta> tag found in body`)
    
            const dims = {
                width: parseInt(meta.getAttribute("width") as string),
                height: parseInt(meta.getAttribute("height") as string),
                offset: meta.getAttribute("offset") ? parseInt(meta.getAttribute("offset") as string) : 20
            }
            
            document.documentElement.style.setProperty("--notifywidth",`${dims.width * (iswebview !== "customiser" ? customisation.scale / 100 : 1)}px`)
            document.documentElement.style.setProperty("--notifyheight",`${dims.height * (iswebview !== "customiser" ? customisation.scale / 100 : 1)}px`)
            
            const res = await new Promise<Res>(resolve => {
                document.head.appendChild(notifyhelper.appendcss(customisation.preset))
    
                const achicons = document.querySelectorAll("#achicon")!
                achicons.forEach(achicon => (achicon as HTMLImageElement)!.src = icon)
    
                const percentvalue = Math.max(parseFloat(percent.value.toFixed(1)),0.1)
                const percentstr = customisation.percentbadge ? "" : `${((type === "main" || type === "semi") && percent.showpercent === "all" || type === "rare" && percent.showpercent !== "off") ? ` (${percentvalue}%)` : ""}`
                const percentimg = percentvalue <= percent.rarity ? "gold" : ((percentvalue <= percent.semirarity && percentvalue > percent.rarity) ? "silver" : "bronze")
    
                const ss = iswebview && !customisation.elemsmatch && iswebview.startsWith("ss") ? "ss" : ""
                customisation[`${ss}percentbadge`] && document.querySelectorAll(".wrapper#achiconwrapper")!.forEach(icon => icon.insertAdjacentHTML("beforeend",`<span id="badge" ${customisation[`${ss}percentbadgeimg`] ? "badgeimg" : ""}>${customisation[`${ss}percentbadgeimg`] ? "" : `${percentvalue}%`}</span>`))
    
                const str = {
                    unlockmsg,
                    title,
                    desc
                }
    
                const elemtype = `${ss}elems`
                const elems = customisation[elemtype] as ("unlockmsg" | "title" | "desc")[]
                const ssnodetails = elemtype === "sselems" && !(ssalldetails as string[]).includes(customisation.preset)
    
                if (elems) {
                    const filter = elems.filter(elem => elem !== null)
                    document.body.toggleAttribute("alldetails",filter.length === 3)
    
                    const offset = hiddenelems.includes(customisation.preset) && !document.body.hasAttribute("alldetails") ? 1 : 0
    
                    const addelem = (type: "percent" | "hiddenicon" | "decoration",pos: number) => {
                        if (!customisation[`${ss}${type}pos`] || customisation[`${ss}${type}pos`] + (ssnodetails ? 1 : 0) !== pos) return ""
                        
                        switch (type) {
                            case "percent": return ` ${percentstr}`
                            case "hiddenicon": return customisation.showhiddenicon && hidden ? `<span id="hiddenicon"></span>` : ""
                            case "decoration": return customisation[`${ss}decorationpos`] ? `<span id="decoration"></span>` : ""
                            default: ""
                        }
                    }
    
                    new Map<string,number[]>([
                        ["unlockmsg",[1,0]],
                        ["title",[2 - offset,ssnodetails ? 0 : 1 - offset]],
                        ["desc",[3 - offset,ssnodetails ? 1 : 2 - offset]]
                    ])
                    .forEach((value,key) => {
                        const elem = document.getElementById(key)!
                        elem.innerHTML = `${addelem("decoration",value[0])}${addelem("hiddenicon",value[0])}${key === "unlockmsg" && ssnodetails ? "" : str[filter[value[1]]] || ""}${addelem("percent",value[0])}`
                        // Once `innerHTML` has been added, see if it has any `textContent`. If not, remove the element's `innerHTML`
                        // Not ideal, but "hiddenicon"/"decoration" elements aren't added until the text is, so checking for `textContent` beforehand added won't work
                        !elem.textContent && (elem.innerHTML = "")
                    })
    
                    document.documentElement.style.setProperty("--decorationindex",(customisation[`${ss}decorationpos`]).toString())
                }
                
                if (!steampath) throw new Error(`Steam installation path not found!`)
    
                notifyhelper.setcustomisations(customisation,percent,iswebview,appid,steampath,steam3id,hqicon,temp,percentimg,gamearticon,gameartlibhero,gameartlogo,ra)
                .then(preloadimgs => {
                    preloadimgs && preloadimgs.forEach(img => imgs.push(img))
                    resolve({
                        msg: `Achievement data for "${apiname}" loaded successfully`,
                        dims: dims
                    } as Res)
                })
                .catch((err: { validimgs: HTMLImageElement[] | null, msg: string }) => {
                    err.validimgs && err.validimgs.forEach(img => imgs.push(img))
                    resolve({
                        msg: `Achievement data for "${apiname}" loaded with errors: ${err.msg}`,
                        dims: dims
                    } as Res)
                })
                .finally(() => !customisation[`${ss}decorationpos`] && customisation.preset !== "epicgames" && ["","displaytype"].forEach(prop => document.documentElement.style.setProperty(`--decoration${prop}`,"none")))
            })
    
            notifyhelper.checkreadystate("ready",obj,imgs,res)
        } catch (err) {
            const res = {
                msg: `Error loading achievement data for ${apiname}: ${err}`,
                dims: {
                    width: 0,
                    height: 0,
                    offset: 20
                }
            }
    
            notifyhelper.checkreadystate("failed",obj,imgs,res)
        }
    })
    
    ipcRenderer.once("ss",() => document.body.setAttribute("ss",""))
    ipcRenderer.on("playback",(event,shouldpause: boolean) => document.body.toggleAttribute("paused",shouldpause))
    
    ipcRenderer.on("notifyfinished",(event,id: number,isextwin?: boolean,preset?: string) => {
        try {
            if (isextwin) return ipcRenderer.send("notifyclosed",id,isextwin,preset)
        
            document.body.addEventListener("transitionend", (event: TransitionEvent) => event.propertyName === "opacity" && ipcRenderer.send("notifyfinished",id))
            document.documentElement.style.setProperty("--bodyopacity","0")
        } catch (err) {
            ipcRenderer.send("notifyfailed",err as Error,id)
        }
    })
} catch (err) {
    ipcRenderer.send("notifyfailed",err as Error,notifyid)
}