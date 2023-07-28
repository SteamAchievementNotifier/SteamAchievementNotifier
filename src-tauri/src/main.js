const { os, path, dialog, fs, shell } = window.__TAURI__
const { invoke, convertFileSrc } = window.__TAURI__.tauri
const { exists, readTextFile, removeFile, readDir, createDir, removeDir, writeTextFile, copyFile } = window.__TAURI__.fs
const { WebviewWindow, LogicalPosition, LogicalSize, PhysicalPosition, availableMonitors, getAll } = window.__TAURI__.window
const { emit, listen, once } = window.__TAURI__.event
const { fetch: http } = window.__TAURI__.http
const { relaunch } = window.__TAURI__.process

// Setting "id/undefined" here will default to the current user's Privacy Settings page in Steam
const privacysettings = "steam://openurl/https://steamcommunity.com/id/undefined/edit/settings"

function GetTabType() {
    return document.querySelector(".mainwrapper").getAttribute("type")
}

async function GetBaseDimensions() {
    const base = {}
    const dir = await readDir(await path.join("SteamAchievementNotifier","src","notify","presets"), { dir: fs.BaseDirectory.LocalData })

    const filesarr = await Promise.all(dir.map(async subfolder => await readDir(await path.resolve(subfolder.path))))

    filesarr.forEach(async (files,i) => {
        base[dir[i].name] = {}

        files.map(async file => {
            function GetBaseValues(html) {
                const parsed = new window.DOMParser().parseFromString(html,"text/html")
                const basetag = parsed.querySelector("base")

                base[dir[i].name].width = basetag ? parseInt(basetag.getAttribute("width")) : 300
                base[dir[i].name].height = basetag ? parseInt(basetag.getAttribute("height")) : 50
                basetag && basetag.hasAttribute("offset") ? base[dir[i].name].offset = parseInt(basetag.getAttribute("offset")) : null

                !basetag && log.write("error",`"base" element for notification type "${dir[i].name}" not present in "${file.path}". Using default values [300(H) x 50(W)]`)
            }

            const ext = await path.extname(file.path)
            ext === "html" && readTextFile(file.path)
            .then(html => GetBaseValues(html))
        })
    })

    return base
}

GetBaseDimensions().then(base => window.base = base)

async function CreateTempDir() {
    const san = {
        cachepath: await path.join(await path.appCacheDir(),"cache"),
        avatarpath: await path.join(await path.appCacheDir(),"avatars")
    }

    window.cachepath = await san.cachepath
    window.avatarpath = await san.avatarpath
    
    try {
        await exists(await san.cachepath) && await removeDir(await san.cachepath, { recursive: true })
        await createDir(await san.cachepath, { recursive: true })
        !await exists(await san.avatarpath) && await createDir(await san.avatarpath, { recursive: true })
    } catch (err) {
        log.write("error",`Unable to create "${cachepath}" directory: ${err}`)
    }
}

CreateTempDir()

document.addEventListener("contextmenu", event => event.preventDefault())

window.addEventListener("error",err => log.write("error",`${err.message}\n[LINE: ${err.lineno}]\n[FILE: ${err.filename}]`))

window.appid = null
window.gameName = null

window.addEventListener("DOMContentLoaded", async () => {
    const userlbl = document.getElementById("userlbl")
    const gamelbl = document.getElementById("gamelbl")
    
    listen("appid", event => {
        log.write("info",event.payload.msg)

        if (parseInt(event.payload.optional) === 0) {
            
            async function CheckQueueIsEmpty() {
                if (!queue.length) {
                    window.gameName = null
                    
                    gamelbl.textContent = translations.gamelbl.elem
                    gamelbl.setAttribute("novalue","")

                    await removeDir(await path.join(cachepath,appid), { recursive: true })
                    window.appid = null
                    delete window.cachedata
                } else {
                    console.log("%cWaiting for queue to be empty...","color:darkred")
                    return setTimeout(CheckQueueIsEmpty,1000)
                }
            }

            CheckQueueIsEmpty()
        }
    })

    async function SteamAccountMatch() {
        const loginusers = VDF.parse(await fs.readTextFile(await path.join(await invoke("get_steam_path"),"config","loginusers.vdf")))
        return Object.entries(loginusers.users).find(user => parseInt(user[1].MostRecent || user[1].mostrecent) === 1)[0] === config.steam64id
    }

    window.SteamAccountMatch = SteamAccountMatch

    listen("track",async event => {
        return new Promise(async (resolve,reject) => await SteamAccountMatch() ? resolve("SAN user matches Steam client user") : reject("User mismatch - switching accounts..."))
        .then(msg => log.write("info",msg))
        .catch(async err => {
            log.write("error",err)
            await emit("stop_san")

            const loginusers = VDF.parse(await fs.readTextFile(await path.join(await invoke("get_steam_path"),"config","loginusers.vdf")))
            const accounts = JSON.parse(localStorage.getItem("accounts"))

            Object.entries(loginusers.users).forEach(user => parseInt(user[1].MostRecent || user[1].mostrecent) === 1 && sanhelper.write({config},["steam64id"],user[0]))
            
            try {
                userlbl.textContent = Object.values(accounts).find(account => account.id === config.steam64id).user
            } catch (err) {
                log.write("Error",`Unable to access Steam user info: ${err}`)
            }

            await invoke("is_steam_running")
        })
        .finally(async () => {
            try {
                window.appid = event.payload.optional
                
                const { gameName, cachedata, gameicon } = await CacheAchievementData(event.payload.optional)
                window.gameName = gameName
                window.cachedata = cachedata
    
                config.track && ShowInfoNotify(gameName,gameicon ? convertFileSrc(gameicon) : "../img/sanlogo.svg")
    
                log.write("info",event.payload.msg)
    
                gamelbl.textContent = gameName
                gamelbl.removeAttribute("novalue")
            } catch (err) {
                log.write("error",`Error caching achievement data: ${err}`)
                ShowInfoNotify(translations.trackingfailed,"../icon/error.svg",translations.checkapplog)
            }
        })
    })

    const steamstatusbtn = document.getElementById("steamstatus")
    once("steam_running", () => {
        steamstatusbtn.removeAttribute("nosteam")
        steamstatusbtn.addEventListener("transitionend", () => steamstatusbtn.remove()), { once: true }
    })

    window.steampath = await invoke("get_steam_path")

    listen("startsan",event => log.write("info",event.payload.msg))

    listen("redirect", async event => {
        const redirect = event.payload.msg

        const { data } = await http(`${redirect}/?xml=1`,{ responseType: 2 })
        const parsed = (new window.DOMParser()).parseFromString(data,"text/xml")
    
        const acharr = []
        let gameicon
        let backupgameart

        try {
            const xmllist = Array.from(parsed.getElementsByTagName("achievement"))
            if (!xmllist.length) throw new Error(`"xmllist" did not return any results. Game Icons, Backup Game Art and Hidden Descriptions will be unavailable for this session`)
            gameicon = parsed.getElementsByTagName("gameIcon")[0].textContent
            backupgameart = parsed.getElementsByTagName("gameLogo")[0].textContent.split("?")[0]
    
            xmllist.map(elem => acharr.push({
                apiname: elem.children[3].textContent,
                desc: elem.children[4].textContent
            }))
        } catch (err) {
            log.write("error",typeof err === "object" ? err.message : err)
            ShowInfoNotify(null,"../icon/error.svg","Steam profile error!")
        }

        window.dispatchEvent(new CustomEvent("xml", { detail: { gameicon: gameicon, gameart: backupgameart, achievements: acharr } }))
    })

    listen("modified",event => {
        cachedata ? CheckUnlockStatus(event.payload.optional) : log.write("cache miss",`"cachedata" was missing on last check`)
        log.write("info",`MSG: ${event.payload.msg}\nAPPID: ${event.payload.optional}`)
    })

    listen("notifyerror", event => {
        console.log(event.payload.msg)
        log.write("error",event.payload.msg)
    })

    listen("ssready", async () => window.dispatchEvent(new CustomEvent("ss", { detail: convertFileSrc(await path.join(await path.appCacheDir(),"src.png")) })))

    listen("coords", event => {
        const { x, y } = event.payload.msg
        const setcustompos = document.getElementById("setcustompos")

        sanhelper.write({config},["customisation",GetTabType(),"custompos"],{ x: x, y: y })
        setcustompos.removeAttribute("open")
    })

    listen("hideui", event => {
        !config.noanim && document.body.toggleAttribute("noanim",event.payload.msg)
        document.body.style.opacity = event.payload.msg ? 0 : 1
    })

    await invoke("is_steam_running")
},{ once: true })