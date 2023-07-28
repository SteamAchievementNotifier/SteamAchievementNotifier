const { getVersion } = window.__TAURI__.app

const sanhelper = {
    version: async () => {
        return parseFloat((await getVersion()).match(new RegExp(/^(\d+\.\d+)/)))
    },
    os: async () => {
        const platform = await os.platform()
        return platform
    },
    random: max => Math.floor(Math.random() * (max ? max : 999999)),
    read: (id,value) => document.getElementById(id).value = value,
    write: (input,keys,value) => {
        const name = Object.keys(input)[0]
        const obj = Object.values(input)[0]
        
        function WriteNestedObj(obj,keys,value) {
            const last = arguments.length === 3 ? keys.pop() : false
            
            keys.forEach(key => obj = obj[key] = obj[key] || {})
            last ? obj = obj[last] = value : null
            
            return obj
        }
        
        Array.isArray(keys) ? WriteNestedObj(obj,keys,value) : obj.push(value)
        localStorage.setItem(name,JSON.stringify(obj))
    }
}

sanhelper.shortcut = async () => {
    return await sanhelper.os() === "win32" ? await path.join(await path.desktopDir(),`Steam Achievement Notifier (V${await sanhelper.version()}).lnk`) : `~/.local/share/applications/'Steam Achievement Notifier (V${await sanhelper.version()})'.desktop`
}

sanhelper.steampath = async () => {
    let steampath = null

    await listen("steampath", async event => steampath = event.payload.msg)
    await invoke("get_steam_path")
    
    return steampath
}

const inittime = new Date().toLocaleTimeString()

const log = {
    write: (type,msg) => {
        let log = localStorage.getItem("log")
        const logmsg = `[%c${new Date().toLocaleString()}%c][%c${type.toUpperCase()}%c]:\n%c${msg}`
        const typecolor = type === "info" ? "yellow" : type === "error" ? "red" : "deepskyblue"
        const arr = ["seagreen","white",typecolor,"white","lightskyblue"]
        const colors = arr.map(color => `color:${color}`)

        if (log) {
            localStorage.setItem("log",`${log}\n${logmsg.replace(/%c/g,"")}`)
        } else {
            localStorage.setItem("log",logmsg.replace(/%c/g,""))
            log = localStorage.getItem("log")
        }

        invoke("ipc", { eventname: "updatelog", payload: { msg: localStorage.getItem("log") } })

        if (type === "error") {
            document.getElementById("errorbtn").setAttribute("error","")
            console.log(logmsg,...colors)
        } else {
            console.log(logmsg,...colors)
        }
    },
    open: async () => {
        const logwin = new WebviewWindow("logwin", {
            // !!! Base width/height on calculation of resolution and scale factor
            width: 300,
            height: 400,
            title: `Steam Achievement Notifier (V${await sanhelper.version()}) Log`,
            resizable: false,
            transparent: true,
            decorations: false,
            center: true,
            url: "components/log.html"
        })

        logwin.once("tauri://created", () => once("webviewready", () => setTimeout(() => invoke("ipc", { eventname: "logwin", payload: { msg: localStorage.getItem("log"), optional: inittime } }),100)))
        logwin.once("tauri://error", err => log.write("error",`"${err.windowLabel}" could not be created: ${err.payload}`))
    },
    generate: () => {
        return new Promise((resolve,reject) => {
            const log = localStorage.getItem("log")
            log ?
            fs.writeTextFile("sanlog.txt", localStorage.getItem("log"), { dir: fs.BaseDirectory.AppLocalData })
            .then(async () => resolve(`"sanlog.txt" created successfully in ${await path.appLocalDataDir()}`))
            .catch(err => reject(`Unable to create "sanlog.txt": ${err}`))
            : reject(`Unable to create "sanlog.txt": "log" object is empty!`,"color:red")
        })
    }
}