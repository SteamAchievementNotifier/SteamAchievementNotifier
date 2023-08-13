const monitors = []

function GetMonitorInfo() {
    invoke("available_monitors")
    .then(async res => {
        const available = await availableMonitors()
    
        res.map((monitor,i) => {
            const info = {
                id: monitor.id.toString(),
                width: monitor.width,
                height: monitor.height,
                // "scale_factor" from "screenshots" crate always returns "1", so get it from "availableMonitors" API instead
                scaleFactor: available[i].scaleFactor,
                isPrimary: monitor.is_primary
            }
    
            monitors.push(info)
        })
    
        !config.monitor && sanhelper.write({config},["monitor"],monitors[0].id.toString())
    })
}

GetMonitorInfo()

listen("tauri://scale-change", event => {
    const { size: { width, height }, scaleFactor } = event.payload
    log.write("info",`Scale Factor changed: ${width} x ${height} @ ${scaleFactor}x`)

    return new Promise(resolve => resolve(monitors.length = 0))
    .finally(GetMonitorInfo)
})

function NotifyPosition(notify,type,offset = 20) {
    if (config.soundonly) return

    const custom = config.customisation[type]

    notify.innerSize().then(res => {
        const { width, height, scaleFactor } = monitors[0]
        const screenwidth = width / scaleFactor
        const screenheight = height / scaleFactor
        const notifywidth = res.width / scaleFactor
        const notifyheight = res.height / scaleFactor

        const positions = {
            topleft: { x: offset, y: offset },
            topcenter: { x: (screenwidth / 2) - (notifywidth / 2), y: offset },
            topright: { x: screenwidth - notifywidth - offset, y: offset },
            bottomleft: { x: offset, y: screenheight - notifyheight - offset },
            bottomcenter: { x: (screenwidth / 2) - (notifywidth / 2), y: screenheight - notifyheight - offset },
            bottomright: { x: screenwidth - notifywidth - offset, y: screenheight - notifyheight - offset }
        }

        const { x, y } = notify.label !== "info" ? (type ? (custom.usecustompos ? custom.custompos : positions[custom.pos]) : positions.bottomcenter) : positions.bottomright
        notify.setPosition(notify.label !== "info" && custom.usecustompos ? new PhysicalPosition(x,y) : new LogicalPosition(x,y))
    })
    .finally(() => {
        notify.setIgnoreCursorEvents(true)
        notify.show()
    })
}

async function TestGameArt() {
    const imgs = await readDir(await path.join("src","img","gameart"), { dir: fs.BaseDirectory.Resource })
    return convertFileSrc(imgs[sanhelper.random(imgs.length)].path)
}

async function BuildNotify({data,type,audio}) {
    const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
    const custom = config.customisation[type]

    custom.gameart = appid ? convertFileSrc(await exists(await path.join(steampath,"appcache","librarycache",`${appid}_library_hero.jpg`)) ? await path.join(steampath,"appcache","librarycache",`${appid}_library_hero.jpg`) : await path.join(cachepath,appid,`gameart.jpg`)) : await TestGameArt()

    const percentage = (Math.round(data?.percentage * 100) / 100)

    const msg = {
        hasdata: data !== undefined,
        type: type,
        base: base,
        unlockmsg: type === "plat" ? (custom.customtext || translations.gamecomplete) : `${custom.usegametitle ? gameName || translations.gametitle : custom.customtext || translations.achievementunlocked}${(data?.type === "rare" || data && config.allpercent) ? ` (${percentage}%)` : type === "rare" ? ` (0.1%)` : (config.allpercent && type !== "plat") ? ` (50%)` : ""}`,
        title: type !== "plat" ? data?.title || translations.achievementtitle : gameName || translations.gametitle,
        desc: type === "plat" ? translations.allachievements : data?.desc || translations.achievementdesc,
        icon: (data && custom.usegameicon && convertFileSrc(gameicon)) || (data?.icon && convertFileSrc(data.icon) || (custom.usegameicon ? "../img/gameicon.png" : (type === "plat" ? custom.useplaticon && custom.platicon || "../img/ribbon.svg" : "../img/achicon.png"))),
        audio: data?.audio ?? audio ?? "",
        screenshot: [config.screenshotmode !== "off" && config.displayscreenshot, data && convertFileSrc(await path.join(await path.appCacheDir(),"src.png")) || "../img/santextlogobg.png"],
        ovpath: user ? `${config.ovpath}\\${user.replace(/[\\/:"*?<>|]+/g,"_")}\\${gameName ? gameName.replace(/[\\/:"*?<>|]+/g,"_") : null}` : null,
        nvda: config.nvda,
        debug: config.debug,
        percent: percentage || (GetTabType() === "main" ? 50 : 0.1),
        rarity: config.rarity,
        defaulticons: defaulticons
    }

    return { msg, custom }
}

async function CreateSSWin(event,msg,custom,html,preview) {
    const monitor = monitors.find(monitor => monitor.id === config.monitor)

    const ss = new WebviewWindow("ss", {
        width: monitor.width / monitor.scaleFactor,
        height: monitor.height / monitor.scaleFactor,
        title: `Steam Achievement Notifier (V${await sanhelper.version()}) - Screenshot`,
        center: true,
        resizable: false,
        focus: false,
        fullscreen: false,
        decorations: false,
        visible: preview,
        transparent: true,
        skipTaskbar: !preview,
        url: "./notify/ss.html"
    })

    // Create a deep copy of the msg arg, due to object referencing overwriting the original object for all other functions
    // TODO: Also need similiar behaviour when some presets (such as xQjan) have shorter notifications that don't show the `msg` element
    const msgcopy = { ...msg }
    msgcopy.title += (msgcopy.type === "rare" || msgcopy.hasdata && config.allpercent) ? ` (${msgcopy.percent}%)` : msgcopy.type === "rare" ? ` (0.1%)` : (config.allpercent && msgcopy.type !== "plat") ? ` (50%)` : ""
    
    ss.once("tauri://created", () => {
        ss.setIgnoreCursorEvents(!preview)
        once("ssready", () => setTimeout(() => invoke("ipc", { eventname: "ss", payload: { msg: event.detail, optional: { msg: msgcopy, custom: custom, html: html, preview: preview } } }),100))
    })
    ss.once("tauri://error", err => log.write("error",`"${err.windowLabel}" could not be created: ${err.payload}`))
}

async function ShowOvPreview() {
    const type = GetTabType()
    const { msg, custom } = await BuildNotify({type})
    const html = await readTextFile(await path.join("src","notify","presets",custom.preset,"index.html"), { dir: fs.BaseDirectory.Resource })

    CreateSSWin({ detail: "../img/santextlogobg.png" },msg,custom,html,true)
}

// !!! When moving the notification window to another monitor and setting "decorations: false", the extra space normally taken up by the now hidden title bar is added to the window, resulting in the notification area being bigger than intended
// (Can be seen if commenting out "transparent: true" in Notify function, and comparing against "decorations: true"/"transparent: false")
function SetNotifyDimensions(queueobj) {
    return new Promise(resolve => resolve(base))
    .then(async base => {
        const defaulthandler = base[config.customisation[queueobj.type].preset] ? base[config.customisation[queueobj.type].preset] : base.default
        
        const dims = ["width","height"]
        dims.forEach(dim => queueobj.notify[dim] = (config.customisation[queueobj.type].scale / 100) * defaulthandler[dim])

        config.screenshotmode !== "off" && config.displayscreenshot ? queueobj.notify.height += (config.customisation[queueobj.type].scale / 100) * 168.75 : null
        
        const offsetvalue = defaulthandler.offset
        queueobj.offset = offsetvalue !== 0 && !offsetvalue ? 20 : offsetvalue

        defaulthandler === base.default && config.customisation[queueobj.type].preset !== "default" ? log.write("error",`No base values exist for notification type "${config.customisation[queueobj.type].preset}". If you want to create a new notification type, you must add a "<base>" tag within your HTML file that specifies the base dimensions for your notification! Example: <base width="<WIDTH>" height="<HEIGHT>"!`) : null
    })
    .catch(err => {
        log.write("error",`Error fetching notification dimensions: ${err}`)
        queueobj.notify.width = (config.customisation[queueobj.type].scale / 100) * 300
        queueobj.notify.height = (config.customisation[queueobj.type].scale / 100) * 50
    })
}

const queue = []
let running = false
let sslock = false

async function Notify(data) {
    const queueobj = {
        notify: {
            title: `Steam Achievement Notifier (V${await sanhelper.version()}) - Notification`,
            resizable: false,
            focus: false,
            alwaysOnTop: true,
            transparent: true,
            decorations: false,
            visible: false,
            skipTaskbar: true,
            url: "./notify/base.html"
        },
        type: data && data.type || GetTabType()
    }

    SetNotifyDimensions(queueobj)
    .finally(() => {
        sslock = queue.length > 0
        queueobj.sslock = sslock
        // Cooldown for "sslock"
        // If multiple notifications are added to the queue within a 500ms period, a new screenshot WILL NOT be generated
        // Otherwise, if the 500ms period ends before getting another achievement, a new screenshot WILL be generated
        setTimeout(() => sslock = false,500)
        queue.push(queueobj)

        function CheckIfRunning() {
            if (running) {
                return setTimeout(CheckIfRunning,1000)
            } else {
                running = true

                const notify = new WebviewWindow("notify",queue[0].notify)
                const progresscircle = document.getElementById("progresscircle")

                notify.once("tauri://created", async () => {
                    once("webviewready", async () => {
                        const type = queue[0].type
                        const res = await GetSoundFile(type)
                        const audio = convertFileSrc(res[sanhelper.random(res.length)])

                        const { msg, custom } = await BuildNotify({data,type,audio})
                        const html = await readTextFile(await path.join("src","notify","presets",custom.preset,"index.html"), { dir: fs.BaseDirectory.Resource })

                        function ShiftNotify() {
                            invoke("ipc", { eventname: "achievement", payload: { msg: msg, optional: { custom: custom, html: html } } })
                            NotifyPosition(notify,type,queue[0].offset)

                            once("startprogress", () => {
                                progresscircle.setAttribute("running","")
                                progresscircle.style.animation = `fill ${config.customisation[queueobj.type].displaytime}s linear forwards`
                            })

                            queue.shift()
                        }

                        if (config.screenshotmode !== "off") {
                            window.addEventListener("ss", async event => {
                                await new Promise(async resolve => {
                                    config.screenshotmode === "overlay" ? CreateSSWin(event,msg,custom,html,false) : await invoke("press_key", { key: config.keybind })
                                    setTimeout(resolve,50)
                                })

                                ShiftNotify()
                            }, { once: true })

                            // If "sslock" is false, take the screenshot, otherwise use the first screenshot taken (within 500ms)
                            !queue[0].sslock ? await invoke("take_screenshot", { id: config.monitor }) : await invoke("ipc", { eventname: "ssready", payload: {} })
                        } else ShiftNotify()

                        invoke("ipc", { eventname: "notifyext", payload: { msg: msg, optional: { custom: custom, html: html } } })
                    })

                    once("notifyclosed", () => {
                        running = false
                        
                        progresscircle.removeAttribute("running")
                        progresscircle.style.animation = "none"
    
                        queue.length ? console.log(`%cQueue Length: %c${queue.length}`,"color:grey","color:deepskyblue") : console.log(`%cQueue is now empty`,"color:grey")
                    })
                })
                
                notify.once("tauri://error", err => {
                    log.write("error",`"${err.windowLabel}" could not be created: ${err.payload}`)
                    notify.close()
                })
            }
        }
    
        CheckIfRunning()
    })
}

async function ShowInfoNotify(gamename,gameicon,err) {
    const info = new WebviewWindow("info", {
        width: 200,
        height: 75,
        title: `Steam Achievement Notifier (V${await sanhelper.version()}) - Info`,
        resizable: false,
        focus: false,
        alwaysOnTop: true,
        transparent: true,
        decorations: false,
        visible: false,
        skipTaskbar: true,
        url: "./notify/info.html"
    })
    
    info.once("tauri://created", () => {
        NotifyPosition(info)
        once("webviewready", () => {
            invoke("ipc", { eventname: !err ? "showtrack" : "showerr", payload: { msg: !err ? translations.tracking : gamename, optional: { gameicon: gameicon, gamename: !err ? gamename : err } } })
            err && info.setIgnoreCursorEvents(false)
        })
    })
    info.once("tauri://error", err => log.write("error",`"${err.windowLabel}" could not be created: ${err.payload}`))
}

// Check "extwin" state at launch
settings.extwin()