//IMPORT & SET UP MAIN CONTENT
const { ipcRenderer, desktopCapturer, clipboard, shell } = require('electron')
const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn
const { exec } = require('child_process')
const appversion = "V1.84"
const appdir = "V1.8"

var localappdata
var shortcut

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA)
    shortcut = path.join(process.env.USERPROFILE,"Desktop",`Steam Achievement Notifier (${appversion}).lnk`)
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share")

    // !!! Re-add if desktop shortcut/start up shortcut creation method is found
    document.getElementById("desktop").style.display = "none"
    document.getElementById("startwin").style.display = "none"
    // !!! Re-add if Steam can be stopped/restarted via shortcut, and if "SkinV5" regkey exists in "registry.vdf" after changing skin
    document.getElementById("nosteam").style.display = "none"
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support")

    // !!! Re-add if desktop shortcut/start up shortcut creation method is found
    document.getElementById("desktop").style.display = "none"
    document.getElementById("startwin").style.display = "none"
    // !!! Re-add if Steam can be stopped/restarted via shortcut, and if "SkinV5" regkey exists in "registry.vdf" after changing skin
    document.getElementById("nosteam").style.display = "none"
} else {
    alert(`Steam Achievement Notifier is not supported on ${process.platform}!`)
    ipcRenderer.send("uninstallcomplete")
}

const sanlocalappdata = path.join(localappdata,`Steam Achievement Notifier (${appdir})`)

const respath = path.join(process.resourcesPath,"app")

const config = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","config.json")))
const gamestats = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","gamestats.json")))
var launcher
var regkey

if (process.platform == "win32") {
    if (process.env.npm_lifecycle_event == "devmode") {
        regkey = require('regedit')
    } else {
        if (fs.existsSync(path.join(sanlocalappdata,"store","app"))) {
            regkey = require(path.join(respath,'node_modules','regedit'))
        } else {
            regkey = require('regedit')
        }
    }
    
    launcher = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","launcher.json")))
    launcher["firstlaunch"] = false
    fs.writeFileSync(path.join(sanlocalappdata,"store","launcher.json"), JSON.stringify(launcher, null, 2))
}

const version = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","version.json")))

if (version.beta == true && fs.existsSync(path.join(sanlocalappdata,"store","app","beta.txt"))) {
    document.getElementById("rev").innerHTML = `BETA ${version.betaversion}`
    document.getElementById("betalogo").style.display = "flex"
    document.getElementById("joinbetabtn").innerHTML = betaleave
} else {
    document.getElementById("rev").innerHTML = `${version.version}`
    document.getElementById("betalogo").style.display = "none"
    document.getElementById("joinbetabtn").innerHTML = betajoin
}

var tag = null

function CheckUpdate() {
    fetch("https://api.github.com/repos/SteamAchievementNotifier/SteamAchievementNotifier/releases").then(response => response.json()).then(data => {
        tag = data[0].tag_name
        if (tag > appversion.replace("V","")) {
            document.getElementById("updateicon").style.display = "flex"
        }
    }).catch(err => {
        console.log("%cUnable to check for updates: " + err, "color: red")
    })
}

CheckUpdate()

function OpenUpdateInBrowser() {
    ipcRenderer.send('update', tag)
}

function LoadVer() {
    document.getElementById("footertext1").innerHTML = `Steam Achievement Notifier (${appversion})`
}

LoadVer()

var lang
var nouser
var nogame
var nosound
var novalue
var resettitle
var resetdesc
var resetbtns
var traylabel
var trayshow
var trayexit
var secret

var achievementunlocked
var rareachievementunlocked
var testtitle = "Steam Achievement Notifier"
var testdesc
var addsound
var invalid
var addimage
var file
var nofolder
var novalidaudio
var soundmode
var randomised
var presskey
var gamecomplete
var allunlocked
var custompos
var settingpos
var settingposrare

// Beta Channel (App Revision 0.8)
var betajoin
var betaleave
var betaerrortext
var betaerrorsub

function LoadLangScript(language) {
    if (document.getElementById("langscript")) {
        document.body.removeChild(document.getElementById("langscript"))
    }

    var script = document.createElement("script")
    script.id = "langscript"
    script.src = path.join(__dirname,"lang",`${language}.js`)
    document.body.appendChild(script)

    return new Promise((resolve, reject) => {
        script.onload = () => {
            ipcRenderer.send('changelang', traylabel, trayshow, trayexit)
            LoadSound()
            LoadRareSound()
            CheckBeta()
            resolve()
        }

        script.onerror = () => {
            reject()
        }
    })
}

function LoadLang() {
    document.getElementById("lang").value = config.lang
    lang = config.lang

    LoadLangScript(config.lang)
    .catch(err => {
        console.log(`%cUnable to locate language script for ${config.lang}!`,"color: red")
    })

    GetPlayerName()

    var apikey = config.apikey
    var steam64id = config.steam64id
    
    if (!apikey || !steam64id) {
        document.getElementById("gamestatus").innerHTML = nogame
        document.getElementById("gamestatus").style.color = "red"
    } else {
        if (appid == 0 || appid == undefined) {
            document.getElementById("gamestatus").innerHTML = nogame
            document.getElementById("gamestatus").style.color = "red"
        } else {
            document.getElementById("gamestatus").innerHTML = gamename
            document.getElementById("gamestatus").style.color = "white"
        }
    }
}

LoadLang()

function SetLang() {
    config["lang"] = document.getElementById("lang").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

    LoadLang()
    LoadSound()
    LoadRareSound()
}

function ResetHover() {
    document.getElementById("reseticon").style.transform = "rotate(360deg)"
}

function ResetOut() {
    document.getElementById("reseticon").style.transform = "rotate(0deg)"
}

function ResetAppConfirm() {
    var options = {
        title: "Steam Achievement Notifier",
        icon: (path.join(__dirname, "img","sanlogo.ico")),
        message: resettitle,
        detail: resetdesc,
        buttons: resetbtns,
        noLink: true,
        defaultId: 2,
        cancelId: 2
    }

    ipcRenderer.send('reset', options)
}

function RemoveApp() {
    var tempdir

    if (process.platform == "win32") {
        tempdir = path.join(localappdata,"Temp")
    } else {
        tempdir = path.join(localappdata)
    }

    console.log("%cStep 1: BACKUP...", "color: deepskyblue")
    fs.writeFileSync(path.join(tempdir,"sanresetlog.txt"), "Step 1: BACKUP...")
    // Create "SAN1.8BACKUP" backup dir in %localappdata%\Temp
    try {
        fs.mkdirSync(path.join(tempdir,"SAN1.8BACKUP"))
        console.log("%c\"SAN1.8BACKUP\" directory created.", "color: seagreen")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"SAN1.8BACKUP\" directory created.")
    } catch {
        console.log("%c\"SAN1.8BACKUP\" directory already exists", "color: red")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"SAN1.8BACKUP\" directory already exists")
    }
    // Backup config file
    try {
        fs.copyFileSync(path.join(sanlocalappdata,"store","config.json"), path.join(tempdir,"SAN1.8BACKUP","config.json"))
        console.log("%cSteam Achievement Notifier config backed up", "color: seagreen")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up")
    } catch {
        console.log("%cError backing up Steam Achievement Notifier config", "color: red")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config")
    }
    // Backup logo file
    try {
        fs.copyFileSync(path.join(sanlocalappdata,"img","sanlogo.ico"), path.join(tempdir,"SAN1.8BACKUP","sanlogo.ico"))
        console.log("%cSteam Achievement Notifier logo backed up", "color: seagreen")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up")
    } catch {
        console.log("%cError backing up Steam Achievement Notifier logo", "color: red")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo")
    }
    console.log("%cStep 2: DELETING FILES...", "color: deepskyblue")
    fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nStep 2: DELETING FILES...")
    
    // If "Uninstall" option is selected, delete "Steam Achievement Notifier (V1.8)" dir in %localappdata%
    // Otherwise, just delete "config.json" (to preserve "SteamAchievementNotifier(V1.83).exe" file for restarting in main.js)
    if (resettype == "reset") {
        // Delete "config.json" in %localappdata%\SteamAchievementNotifier(V1.8)\"store"
        try {
            fs.rmSync(path.join(sanlocalappdata,"store","config.json"))
            console.log("%c\"config.json\" deleted in %localappdata%\\Steam Achievement Notifier (V1.8)\\store.", "color: seagreen")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"config.json\" deleted in %localappdata%\\Steam Achievement Notifier (V1.8)\\store")
        } catch {
            console.log("%cError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%", "color: red")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting \"store\" directory in %localappdata%\\Steam Achievement Notifier (V1.8)")
        }
    } else if (resettype == "uninstall") {
        // Delete "Steam Achievement Notifier (V1.8)" dir in %localappdata%
        try {
            fs.rmSync(path.join(sanlocalappdata), { recursive: true })
            console.log("%c\"Steam Achievement Notifier (V1.8)\" directory deleted in %localappdata%.", "color: seagreen")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.8)\" directory deleted in %localappdata%")
        } catch {
            console.log("%cError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%", "color: red")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%")
        }
    }

    // Remove Desktop shortcut
    try {
        fs.rmSync(shortcut)
        console.log("%cDesktop shortcut deleted.", "color: seagreen")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nDesktop shortcut deleted.")
    } catch {
        console.log("%cError deleting Desktop shortcut", "color: red")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting Desktop shortcut")
    }
    // Remove Startup folder shortcut from "shell:startup"
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup",`Steam Achievement Notifier (${appversion}).lnk`))
        console.log("%cStartup shortcut deleted.", "color: seagreen")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nStartup shortcut deleted.")
    } catch {
        console.log("%cError deleting Startup shortcut", "color: red")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting Startup shortcut")
    }
    console.log("%cReset: COMPLETE", "color: deepskyblue")
    fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nReset: COMPLETE")
}

var resettype

function ResetApp() {
    resettype = "reset"
    RemoveApp()

    if (process.platform == "win32") {
        launcher["firstlaunch"] = true
        fs.writeFileSync(path.join(sanlocalappdata,"store","launcher.json"), JSON.stringify(launcher, null, 2))
    }
    
    ipcRenderer.send('resetcomplete')
}

ipcRenderer.on('resetapp', () => {
    ResetApp()
})

function UninstallApp() {
    resettype = "uninstall"
    RemoveApp()
    ipcRenderer.send('uninstallcomplete')
}

ipcRenderer.on('uninstallapp', () => {
    UninstallApp()
})

document.getElementById("settingscont").style.display = "none"

function ShowSettings() {
    if (document.getElementById("settingscont").style.display == "none") {
        document.getElementById("settingscont").style.display = "block"
        document.getElementById("settingscont").style.animation = "slideright 0.2s forwards"
        document.getElementById("overlay").style.display = "flex"
        document.getElementById("apibox").type = "password"
    } else {
        document.getElementById("settingscont").style.animation = "slideleft 0.2s forwards"
        document.getElementById("overlay").style.display = "none"
        setTimeout(() => {
            document.getElementById("settingscont").style.display = "none"
        }, 200)
    }

    GetAPIKey()
    GetSteam64ID()
    CheckNoSteam()
    CheckShortcut()
    CheckStartWin()
    CheckStartMin()
    CheckSoundOnlyMode()
    CheckNowTracking()
    CheckAllPercent()
    CheckNVDA()
    CheckHWA()
    CheckBeta()
}

function CloseSettings() {
    document.getElementById("settingscont").style.animation = "slideleft 0.2s forwards"
    document.getElementById("overlay").style.display = "none"
    setTimeout(() => {
        document.getElementById("settingscont").style.display = "none"
    }, 200)
    
    if (document.getElementById("settingscont").style.display = "none") {
        document.getElementById("betadialog").style.animation = "poprev 0.2s forwards"
        document.getElementById("betaerror").style.animation = "poprev 0.2s forwards"
        document.getElementById("overlay").style.zIndex = "3"
        setTimeout(() => {
            document.getElementById("betadialog").style.display = "none"
            document.getElementById("betaerror").style.display = "none"
        }, 200)
    }
}

function CloseWindow() {
    window.close()
}

var queue = []
var running = false

function TestNotification() {
    GetNotifyStyle()

    console.log("%cMain Test Notification added to queue.", "color: lightskyblue")

    var notifyachievement

    if (config.allpercent == "true") {
        notifyachievement = achievementunlocked + " (50%)"
    } else {
        notifyachievement = achievementunlocked
    }

    var notifytitle = testtitle
    var notifydesc = testdesc
    var notifyicon = "test"

    const queueobj = {
        type: "main",
        width: notifywidth,
        height: notifyheight,
        style: config.notifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.ssprev,
        showss: config.screenshot,
        pos: config.notifypos,
        scale: config.scale,
        audio: document.getElementById("audio").src
    }

    queue.push(queueobj)

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000)
            return
        } else {
            running = true
            queue.shift(queueobj)
            NotifyWinPos()
            // notifystyle = config.notifystyle
            ipcRenderer.send('notifywin', queueobj)
            LoadSound()

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc)
            }

            ipcRenderer.once('notrunning', () => {
                running = false
                if (queue.length == 0) {
                    console.log("%cQueue is empty.", "color: grey")
                } else {
                    console.log("Queue Position: " + queue.length, "color: grey")
                }
            })
        }
    }

    CheckIfRunning()
}

function TestRareNotification() {
    GetNotifyStyleRare()

    console.log("%cRare Test Notification added to queue.", "color: darkorchid")

    var notifyachievement = rareachievementunlocked + " (0.0%)"
    var notifytitle = testtitle
    var notifydesc = testdesc
    var notifyicon = "test"

    const queueobj = {
        type: "rare",
        width: notifywidth,
        height: notifyheight,
        style: config.rarenotifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.raressprev,
        showss: config.rarescreenshot,
        pos: config.rarenotifypos,
        scale: config.rarescale,
        audio: document.getElementById("audiorare").src
    }

    queue.push(queueobj)

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000)
            return
        } else {
            running = true
            queue.shift(queueobj)
            NotifyWinPos()
            // notifystyle = config.rarenotifystyle
            ipcRenderer.send('notifywin', queueobj)
            LoadRareSound()

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc)
            }

            ipcRenderer.once('notrunning', () => {
                running = false
                if (queue.length == 0) {
                    console.log("%cQueue is empty.", "color: grey")
                } else {
                    console.log("%cQueue Position: " + queue.length, "color: grey")
                }
            })
        }
    }

    CheckIfRunning()
}

var defaultsound = "./sound/notify.wav"

function OpenSoundFile() {
    if (config.soundmode == "file") {
        var input = document.createElement("input")
        input.type = "file"
        input.accept = ".wav, .mp3, .flac, .ogg, .m4a, .aiff, .wma"

        input.onchange = function (selection) {
            var file = selection.target.files[0]
            document.getElementById("soundfile").innerHTML = file.path
            config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            LoadSound()
        }
        
        input.click()
    } else {
        var input = document.createElement("input")
        input.type = "file"
        input.webkitdirectory = "true"

        input.onchange = (selection) => {
            var files = selection.target.files[0]
            var relpath = files.path.split("\\" + files.name)
            config["sounddir"] = relpath[0].replace("\\","\\\\").replace(":\\\\",":\\")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            LoadSound()
        }

        input.click()
    }
}

function OpenRareSoundFile() {
    if (config.raresoundmode == "file") {
        var input = document.createElement("input")
        input.type = "file"
        input.accept = ".wav, .mp3, .flac, .ogg, .m4a, .aiff, .wma"

        input.onchange = function (selection) {
            var file = selection.target.files[0]
            document.getElementById("soundfilerare").innerHTML = file.path
            config["raresound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            LoadRareSound()
        }
        
        input.click()
    } else {
        var input = document.createElement("input")
        input.type = "file"
        input.webkitdirectory = "true"

        input.onchange = (selection) => {
            var files = selection.target.files[0]
            var relpath = files.path.split("\\" + files.name)
            config["raresounddir"] = relpath[0].replace("\\","\\\\").replace(":\\\\",":\\")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            LoadRareSound()
        }

        input.click()
    }
}

document.getElementById("soundfile").ondragover = (event) => {
    event.preventDefault()

    document.getElementById("soundfile").style.background = "#327a48"
    document.getElementById("soundfile").innerHTML = addsound + " <img src='./icon/add_circle_green.svg' width='16px' style='vertical-align: -3px'>"
}

document.getElementById("soundfile").ondragleave = (event) => {
    event.preventDefault()
    document.getElementById("soundfile").style.background = "#3d3d3d"
    LoadSound()
}

document.getElementById("soundfile").ondragend = (event) => {
    event.preventDefault()
    document.getElementById("soundfile").style.background = "#3d3d3d"
    LoadSound()
}

function DropSound(event) {
    event.preventDefault()

    if (config.soundmode == "file") {
        for (var file of event.dataTransfer.files) {
            if (file.type == "audio/wav" || file.type == "audio/mpeg") {
                document.getElementById("soundfile").innerHTML = file.path
                config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\")
                fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
                document.getElementById("soundfile").style.background = "#3d3d3d"
                LoadSound()
            } else {
                document.getElementById("soundfile").style.background = "#7a3232"
                document.getElementById("soundfile").innerHTML = "Invalid File Type <img src='./icon/cancel_red.svg' width='16px' style='vertical-align: -3px'>"
                setTimeout(() => {
                    document.getElementById("soundfile").style.background = "#3d3d3d"
                    LoadSound()
                }, 1000)
            }
        }
    } else {
        var folder = event.dataTransfer.files[0].path
        config["sounddir"] = folder.replace("\\","\\\\").replace(":\\\\",":\\")
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        document.getElementById("soundfile").style.background = "#3d3d3d"
        LoadSound()
    }
}

document.getElementById("soundfilerare").ondragover = (event) => {
    event.preventDefault()

    document.getElementById("soundfilerare").style.background = "#327a48"
    document.getElementById("soundfilerare").innerHTML = addsound + " <img src='./icon/add_circle_green.svg' width='16px' style='vertical-align: -3px'>"
}

document.getElementById("soundfilerare").ondragleave = (event) => {
    event.preventDefault()
    document.getElementById("soundfilerare").style.background = "#3d3d3d"
    LoadRareSound()
}

document.getElementById("soundfilerare").ondragend = (event) => {
    event.preventDefault()
    document.getElementById("soundfilerare").style.background = "#3d3d3d"
    LoadRareSound()
}

function DropRareSound(event) {
    event.preventDefault()

    for (var file of event.dataTransfer.files) {
        if (file.type == "audio/wav" || file.type == "audio/mpeg") {
            document.getElementById("soundfilerare").innerHTML = file.path
            config["raresound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            document.getElementById("soundfilerare").style.background = "#3d3d3d"
            LoadRareSound()
        } else {
            document.getElementById("soundfilerare").style.background = "#7a3232"
            document.getElementById("soundfilerare").innerHTML = invalid + " <img src='./icon/cancel_red.svg' width='16px' style='vertical-align: -3px'>"
            setTimeout(() => {
                document.getElementById("soundfilerare").style.background = "#3d3d3d"
                LoadRareSound()
            }, 1000)
        }
    }
}

document.getElementById("imgselectcont").ondragover = (event) => {
    event.preventDefault()
    document.getElementById("imgselectcont").style.background = "rgba(50,205,50,0.2)"
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="./icon/add_circle_green.svg" width="16px" style="vertical-align: -3px">' + addimage
}

document.getElementById("imgselectcont").ondragleave = (event) => {
    event.preventDefault()
    document.getElementById("imgselectcont").style.background = "#1b1b1b"
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">'
    GetBGType()
}

document.getElementById("imgselectcont").ondragend = (event) => {
    event.preventDefault()
    document.getElementById("imgselectcont").style.background = "#1b1b1b"
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">'
    GetBGType()
}

function DropImage(event) {
    event.preventDefault()

    for (var file of event.dataTransfer.files) {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
            config["img"] = (file.path).replace(/\\/g,"/")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            document.getElementById("imgselectcont").style.background = "#1b1b1b"
            document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">'
            GetBGType()
        } else {
            document.getElementById("imgselectcont").style.background = "rgba(255,0,0,0.2)"
            document.getElementById("imgselectinnerlbl").innerHTML = '<img src="./icon/cancel_red.svg" width="16px" style="vertical-align: -3px">Invalid File Type'
            setTimeout(() => {
                document.getElementById("imgselectcont").style.background = "#1b1b1b"
                document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">'
                GetBGType()
            }, 1000)
        }
        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        document.getElementById("webview").reload()
    }
}

document.getElementById("rareimgselectcont").ondragover = (event) => {
    event.preventDefault()
    document.getElementById("rareimgselectcont").style.background = "rgba(50,205,50,0.2)"
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="./icon/add_circle_green.svg" width="16px" style="vertical-align: -3px">Add Selected Image'
}

document.getElementById("rareimgselectcont").ondragleave = (event) => {
    event.preventDefault()
    document.getElementById("rareimgselectcont").style.background = "#1b1b1b"
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">'
    GetRareBGType()
}

document.getElementById("rareimgselectcont").ondragend = (event) => {
    event.preventDefault()
    document.getElementById("rareimgselectcont").style.background = "#1b1b1b"
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">'
    GetRareBGType()
}

function DropRareImage(event) {
    event.preventDefault()

    for (var file of event.dataTransfer.files) {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
            config["rareimg"] = (file.path).replace(/\\/g,"/")
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            document.getElementById("rareimgselectcont").style.background = "#1b1b1b"
            document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">'
            GetRareBGType()
        } else {
            document.getElementById("rareimgselectcont").style.background = "rgba(255,0,0,0.2)"
            document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="./icon/cancel_red.svg" width="16px" style="vertical-align: -3px">' + invalid
            setTimeout(() => {
                document.getElementById("rareimgselectcont").style.background = "#1b1b1b"
                document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">'
                GetRareBGType()
            }, 1000)
        }
        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        document.getElementById("webviewrare").reload()
    }
}

function ShowMouseWheelL() {
    document.getElementById("mousecontL").style.display = "flex"
    document.getElementById("mousecontL").style.animation = "fadein 1s forwards"
    document.getElementById("arrowupL").style.animation = "moveup 1s alternate infinite"
    document.getElementById("arrowdownL").style.animation = "movedown 1s alternate infinite"
    document.getElementById("mousewheelL").style.animation = "fadein 0.25s alternate infinite"
}

function HideMouseWheelL() {
    document.getElementById("mousecontL").style.display = "none"
}

function ShowMouseWheelR() {
    document.getElementById("mousecontR").style.display = "flex"
    document.getElementById("mousecontR").style.animation = "fadein 1s forwards"
    document.getElementById("arrowupR").style.animation = "moveup 1s alternate infinite"
    document.getElementById("arrowdownR").style.animation = "movedown 1s alternate infinite"
    document.getElementById("mousewheelR").style.animation = "fadein 0.25s alternate infinite"
}

function HideMouseWheelR() {
    document.getElementById("mousecontR").style.display = "none"
}

function ShowMouseWheelRareL() {
    document.getElementById("mousecontrareL").style.display = "flex"
    document.getElementById("mousecontrareL").style.animation = "fadein 1s forwards"
    document.getElementById("arrowuprareL").style.animation = "moveup 1s alternate infinite"
    document.getElementById("arrowdownrareL").style.animation = "movedown 1s alternate infinite"
    document.getElementById("mousewheelrareL").style.animation = "fadein 0.25s alternate infinite"
}

function HideMouseWheelRareL() {
    document.getElementById("mousecontrareL").style.display = "none"
}

function ShowMouseWheelRareR() {
    document.getElementById("mousecontrareR").style.display = "flex"
    document.getElementById("mousecontrareR").style.animation = "fadein 1s forwards"
    document.getElementById("arrowuprareR").style.animation = "moveup 1s alternate infinite"
    document.getElementById("arrowdownrareR").style.animation = "movedown 1s alternate infinite"
    document.getElementById("mousewheelrareR").style.animation = "fadein 0.25s alternate infinite"
}

function HideMouseWheelRareR() {
    document.getElementById("mousecontrareR").style.display = "none"
}

if (config.soundmode == "file") {
    document.getElementById("searchhover").style.transform = "translateY(0px)"
    document.getElementById("searchhoverdir").style.transform = "translateY(50px)"
} else {
    document.getElementById("searchhover").style.transform = "translateY(-50px)"
    document.getElementById("searchhoverdir").style.transform = "translateY(0px)"
}

var counter = 0

function CheckSoundSource() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    var sounddir = fs.readdirSync(config.sounddir)
    const random = getRandomInt(sounddir.length)

    if (sounddir[random].includes(".wav") || sounddir[random].includes(".mp3") || sounddir[random].includes(".flac") || sounddir[random].includes(".ogg") || sounddir[random].includes(".m4a") || sounddir[random].includes(".aiff") || sounddir[random].includes(".wma")) {
        // !!! Fix this to use "path.join" instead of concat
        document.getElementById("audio").src = config.sounddir + "\\" + sounddir[random]
    } else {
        counter++
        if (counter >= 50) {
            alert(novalidaudio + "\"" + sounddir + "\".")
            config["sounddir"] = ""
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            document.getElementById("soundfile").innerHTML = nofolder
            document.getElementById("audio").src = defaultsound
        } else {
            CheckSoundSource()
            setTimeout(() => {
                counter = 0
            }, 2000)
        }
    }
}

function ChangeSoundMode(event) {
    if (config.soundmode == "file") {
        config["soundmode"] = "folder"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverdir").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverdir").style.transition = "0s"
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)"
                document.getElementById("searchhover").style.transform = "translateY(-50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverdir").style.transition = "0.2s"
                    document.getElementById("searchhoverdir").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhover").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverdir").style.transform = "translateY(0px)"
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverdir").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverdir").style.transition = "0s"
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)"
                document.getElementById("searchhover").style.transform = "translateY(50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverdir").style.transition = "0.2s"
                    document.getElementById("searchhoverdir").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhover").style.transform = "translateY(50px)"
                document.getElementById("searchhoverdir").style.transform = "translateY(0px)"
            }
        }

        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir
        }
    } else {
        config["soundmode"] = "file"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhover").style.transform == "translateY(-50px)") {
                document.getElementById("searchhover").style.transition = "0s"
                document.getElementById("searchhover").style.transform = "translateY(50px)"
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)"
                setTimeout(() => {
                    document.getElementById("searchhover").style.transition = "0.2s"
                    document.getElementById("searchhover").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)"
                document.getElementById("searchhover").style.transform = "translateY(0px)"
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhover").style.transform == "translateY(50px)") {
                document.getElementById("searchhover").style.transition = "0s"
                document.getElementById("searchhover").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)"
                setTimeout(() => {
                    document.getElementById("searchhover").style.transition = "0.2s"
                    document.getElementById("searchhover").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)"
                document.getElementById("searchhover").style.transform = "translateY(0px)"
            }
        }

        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound
        } else {
            document.getElementById("soundfile").innerHTML = config.sound
        }
    }
    LoadSound()
    SearchHover()
}

function SearchHover() {
    if (config.soundmode == "file") {
        document.getElementById("searchhover").src = "./icon/file_black.svg"
        document.getElementById("soundmodediv").innerHTML = "<img src='./icon/audiofile.svg' width='16px' style='margin: 0px 3px 3px 0px'>" + soundmode + " <span style='color: lightskyblue; margin-left: 3px'>" + file + "</span>"
        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound
        } else {
            document.getElementById("soundfile").innerHTML = config.sound
        }
    } else {
        document.getElementById("searchhoverdir").src = "./icon/dice_black.svg"
        document.getElementById("soundmodediv").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>"
        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir
        }
    }
    document.getElementById("soundfile").style.borderTop = "none"
    document.getElementById("soundfile").style.background = "#101010"
}

function SearchOut() {
    if (config.soundmode == "file") {
        document.getElementById("searchhover").src = "./icon/file_white.svg"
    } else {
        document.getElementById("searchhoverdir").src = "./icon/dice.svg"
    }
    document.getElementById("soundfile").style.borderTop = "1px solid white"
    document.getElementById("soundfile").style.background = "linear-gradient(45deg, #2d2d2d 0%, #3d3d3d 50%, #2d2d2d 100%)"
}

function LoadSound() {
    if (config.soundmode == "file") {
        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound
            document.getElementById("audio").src = defaultsound
        } else {
            document.getElementById("soundfile").innerHTML = config.sound
            document.getElementById("audio").src = config.sound
        }
    } else {
        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder
            document.getElementById("audio").src = defaultsound
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir
            CheckSoundSource()
        }
    }
}

LoadSound()

function PreviewHover() {
    document.getElementById("previewhover").src = "./icon/volume_up_black.svg"
}

function PreviewOut() {
    document.getElementById("previewhover").src = "./icon/volume_up_white.svg"
}

function PreviewSound() {
    var audio = document.getElementById("audio")
    document.getElementById("preview").style.display = "none"
    document.getElementById("stop").style.display = "flex"
    LoadSound()
    audio.play()
    audio.addEventListener('ended', function () {
        document.getElementById("preview").style.display = "flex"
        document.getElementById("stop").style.display = "none"
    })
}

function StopSound() {
    var audio = document.getElementById("audio")
    document.getElementById("preview").style.display = "flex"
    document.getElementById("stop").style.display = "none"
    LoadSound()
    audio.pause()
    audio.currentTime = 0
}

if (config.raresoundmode == "file") {
    document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/audiofile.svg'>" + soundmode + "<span style='color: lightskyblue'>" + file + "</span>"
    document.getElementById("searchhoverrare").style.transform = "translateY(0px)"
    document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)"
} else {
    document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>"
    document.getElementById("searchhoverrare").style.transform = "translateY(-50px)"
    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)"
}

function CheckRareSoundSource() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    var raresounddir = fs.readdirSync(config.raresounddir)
    const random = getRandomInt(raresounddir.length)

    if (raresounddir[random].includes(".wav") || raresounddir[random].includes(".mp3") || raresounddir[random].includes(".flac") || raresounddir[random].includes(".ogg") || raresounddir[random].includes(".m4a") || raresounddir[random].includes(".aiff") || raresounddir[random].includes(".wma")) {
        // !!! Fix this to use "path.join" instead of concat
        document.getElementById("audiorare").src = config.raresounddir + "\\" + raresounddir[random]
    } else {
        counter++
        if (counter >= 50) {
            alert(novalidaudio + "\"" + raresounddir + "\".")
            config["raresounddir"] = ""
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            document.getElementById("soundfilerare").innerHTML = nofolder
            document.getElementById("audiorare").src = defaultsound
        } else {
            CheckRareSoundSource()
            setTimeout(() => {
                counter = 0
            }, 2000)
        }
    }
}

function ChangeRareSoundMode(event) {
    if (config.raresoundmode == "file") {
        config["raresoundmode"] = "folder"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverdirrare").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverdirrare").style.transition = "0s"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)"
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverdirrare").style.transition = "0.2s"
                    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)"
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverdirrare").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverdirrare").style.transition = "0s"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverdirrare").style.transition = "0.2s"
                    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)"
            }
        }

        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir
        }
    } else {
        config["raresoundmode"] = "file"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverrare").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverrare").style.transition = "0s"
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverrare").style.transition = "0.2s"
                    document.getElementById("searchhoverrare").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverrare").style.transform = "translateY(0px)"
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverrare").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverrare").style.transition = "0s"
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)"
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)"
                setTimeout(() => {
                    document.getElementById("searchhoverrare").style.transition = "0.2s"
                    document.getElementById("searchhoverrare").style.transform = "translateY(0px)"
                }, 10)
            } else {
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)"
                document.getElementById("searchhoverrare").style.transform = "translateY(0px)"
            }
        }

        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound
        }
    }
    LoadRareSound()
    SearchRareHover()
}

function SearchRareHover() {
    if (config.raresoundmode == "file") {
        document.getElementById("searchhoverrare").src = "./icon/file_black.svg"
        document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/audiofile.svg' width='16px' style='margin: 0px 3px 3px 0px'>" + soundmode + "<span style='color: lightskyblue; margin-left: 3px'>" + file + "</span>"
        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound
        }
    } else {
        document.getElementById("searchhoverdirrare").src = "./icon/dice_black.svg"
        document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>"
        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir
        }
    }
    document.getElementById("soundfilerare").style.borderTop = "none"
    document.getElementById("soundfilerare").style.background = "#101010"
}

function SearchRareOut() {
    if (config.raresoundmode == "file") {
        document.getElementById("searchhoverrare").src = "./icon/file_white.svg"
    } else {
        document.getElementById("searchhoverdirrare").src = "./icon/dice.svg"
    }
    document.getElementById("soundfilerare").style.borderTop = "1px solid white"
    document.getElementById("soundfilerare").style.background = "linear-gradient(45deg, #2d2d2d 0%, #3d3d3d 50%, #2d2d2d 100%)"
}

function LoadRareSound() {
    if (config.raresoundmode == "file") {
        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound
            document.getElementById("audiorare").src = defaultsound
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound
            document.getElementById("audiorare").src = config.raresound
        }
    } else {
        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder
            document.getElementById("audiorare").src = defaultsound
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir
            CheckRareSoundSource()
        }
    }
}

LoadRareSound()

function PreviewRareHover() {
    document.getElementById("previewhoverrare").src = "./icon/volume_up_black.svg"
}

function PreviewRareOut() {
    document.getElementById("previewhoverrare").src = "./icon/volume_up_white.svg"
}

function PreviewRareSound() {
    var audiorare = document.getElementById("audiorare")
    document.getElementById("previewrare").style.display = "none"
    document.getElementById("stoprare").style.display = "flex"
    LoadRareSound()
    audiorare.play()
    audiorare.addEventListener('ended', function () {
        document.getElementById("previewrare").style.display = "flex"
        document.getElementById("stoprare").style.display = "none"
    })
}

function StopRareSound() {
    var audiorare = document.getElementById("audiorare")
    document.getElementById("previewrare").style.display = "flex"
    document.getElementById("stoprare").style.display = "none"
    LoadRareSound()
    audiorare.pause()
    audiorare.currentTime = 0
}

var username

function GetPlayerName() {
    var apikey = config.apikey
    var steam64id = config.steam64id
    var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`
    
    if (!apikey || !steam64id) {
        document.getElementById("username").innerHTML = nouser
        document.getElementById("username").style.color = "red"
        document.getElementById("statusdot").src = "./icon/dot_red.svg"
    } else {
        fetch(apiurl).then(response => response.json()).then(data => {
            username = data.response.players[0].personaname
            document.getElementById("username").innerHTML = data.response.players[0].personaname

            if (process.platform == "win32") {
                launcher["user"] = data.response.players[0].personaname
                fs.writeFileSync(path.join(sanlocalappdata,"store","launcher.json"), JSON.stringify(launcher, null, 2))
            }

            document.getElementById("username").style.color = "white"
            document.getElementById("statusdot").src = "./icon/dot_green.svg"
        }).catch(error => {
            document.getElementById("username").innerHTML = nouser
            document.getElementById("username").style.color = "red"
            document.getElementById("statusdot").src = "./icon/dot_red.svg"

            console.log("%USERNAME ERROR: " + error, "color: red")
        })
    }
}

function CheckNowTracking() {
    if (config.tracking == "true") {
        document.getElementById("trackingbox").checked = true
        document.getElementById("trackopacity").style.opacity = "1"
        document.getElementById("trackopacityslider").style.pointerEvents = "auto"
    } else {
        document.getElementById("trackingbox").checked = false
        document.getElementById("trackopacity").style.opacity = "0.5"
        document.getElementById("trackopacityslider").style.pointerEvents = "none"
    }
}

function ToggleNowTracking() {
    if (config.tracking == "false") {
        config["tracking"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["tracking"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckNowTracking()
}

document.getElementById("trackopacityslider").value = config.trackopacity
document.getElementById("trackopacityvalue").innerHTML = config.trackopacity

function SetTrackOpacity() {
    config["trackopacity"] = document.getElementById("trackopacityslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

function CheckSoundOnlyMode() {
    if (config.soundonly == "true") {
        document.getElementById("soundonlybox").checked = true
    } else {
        document.getElementById("soundonlybox").checked = false
    }
}

function ToggleSoundOnlyMode() {
    if (config.soundonly == "false") {
        config["soundonly"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["soundonly"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckSoundOnlyMode()
}

function OpenAPILink() {
    ipcRenderer.send('openapilink')
}

function OpenSteam64Link() {
    ipcRenderer.send('opensteam64link')
}

function CheckConfig() {
    if (config.apikey == "") {
        document.getElementById("apibox").value = null
    } else {
        document.getElementById("apibox").value = config.apikey
    }

    if (config.steam64id == "") {
        document.getElementById("steam64box").value = null
    } else {
        document.getElementById("steam64box").value = config.steam64id
    }
}

function CheckShortcut() {
    if (fs.existsSync(shortcut)) {
        document.getElementById("desktopbox").checked = true
    } else {
        document.getElementById("desktopbox").checked = false
    }
}

/////////////////////////////////////////////////////////////////////////////
// TO DO: Edit for Linux/MacOS - don't use Powershell for these platforms  //
// EDIT: Removed option at script start instead                            //
/////////////////////////////////////////////////////////////////////////////
function CreateDesktopShortcut() {
    if (fs.existsSync(shortcut)) {
        document.getElementById("desktopbox").checked = true
        console.log(`%cDesktop Shortcut already exists.`, "color: deepskyblue")
    } else {
        const opts = {
            target: launcher.path,
            description: "Enhance your Steam achievement experience!"
        }

        try {
            const desktopshortcut = shell.writeShortcutLink(shortcut, opts)

            if (desktopshortcut.valueOf() == false) {
                throw new Error("Desktop Shortcut Error: ")
            } else {
                console.log(`%cDesktop shortcut created successfully.`, "color: limegreen")
            }
        } catch (err) {
            console.log(`%cDesktop shortcut could not be created!\n${err}`, "color: red")
        }
    }

    CheckShortcut()
}

function ShowAPI() {
    if (document.getElementById("apibox").type == "password") {
        document.getElementById("apibox").type = "text"
        document.getElementById("eye").src = "./icon/visibility.svg"
    } else {
        document.getElementById("apibox").type = "password"
        document.getElementById("eye").src = "./icon/visibility_off.svg"
    }
}

function GetAPIKey() {
    if (config.apikey == "") {
        document.getElementById("apibox").value = null
        document.getElementById("apibox").style.color = "white"
    } else {
        document.getElementById("apibox").value = config.apikey
        document.getElementById("apibox").style.color = "white"
    }
}

GetAPIKey()

function CheckAPIKey() {
    var apivalue = document.getElementById("apibox").value
    if (apivalue == "" || apivalue == novalue) {
        document.getElementById("apibox").type = "text"
        document.getElementById("apibox").value = novalue
        document.getElementById("apibox").style.color = "red"

        document.getElementById("apibox").addEventListener('click', () => {
            if (document.getElementById("apibox").value == novalue) {
                document.getElementById("apibox").value = null
            }
        })

        document.getElementById("saveapi").addEventListener('click', () =>{
            clearTimeout(apitimer)
        })

        var apitimer = setTimeout(() => {
            if (config.apikey == "") {
                document.getElementById("apibox").value = null
                document.getElementById("apibox").style.color = "white"
                document.getElementById("apibox").type = "password"
            } else {
                document.getElementById("apibox").value = config.apikey
                document.getElementById("apibox").style.color = "white"
                document.getElementById("apibox").type = "password"
            }
        }, 2000)
    } else {
        SaveAPIKey()
    }
}

function SaveAPIKey() {
    var apivalue = document.getElementById("apibox").value
    config["apikey"] = apivalue.replace(/\s+/g, "")
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    document.getElementById("apibox").value = apivalue

    document.getElementById("saveapiimg").style.animation = "shrink 0.1s forwards"
    setTimeout(() => {
        document.getElementById("saveapiimg").style.display = "none"
        document.getElementById("apitick").style.display = "block"
        document.getElementById("apitick").style.animation = "shrinkrev 0.2s forwards"
        setTimeout(() => {
            document.getElementById("apitick").style.animation = "shrink 0.1s forwards"
            setTimeout(() => {
                document.getElementById("apitick").style.display = "none"
                document.getElementById("saveapiimg").style.transform = "scale(0%, 0%)"
                document.getElementById("saveapiimg").style.display = "block"
                document.getElementById("saveapiimg").style.animation = "shrinkrev 0.2s forwards"
            }, 200)
        }, 1000)
    }, 200)
    GetPlayerName()
    GetSteam3ID()
    GetSteamPath()
}

function GetSteam64ID() {
    if (config.steam64id == "") {
        document.getElementById("steam64box").value = null
        document.getElementById("steam64box").style.color = "white"
    } else {
        document.getElementById("steam64box").value = config.steam64id
        document.getElementById("steam64box").style.color = "white"
    }
}

GetSteam64ID()

function CheckSteam64ID() {
    var steam64value = document.getElementById("steam64box").value
    if (steam64value == "" || steam64value == novalue) {
        document.getElementById("steam64box").value = novalue
        document.getElementById("steam64box").style.color = "red"

        document.getElementById("steam64box").addEventListener('click', () => {
            if (document.getElementById("steam64box").value == novalue) {
                document.getElementById("steam64box").value = null
                clearTimeout(steam64timer)
            }
        })

        document.getElementById("save64").addEventListener('click', () =>{
            clearTimeout(steam64timer)
        })

        var steam64timer = setTimeout(() => {
            if (config.steam64id == "") {
                document.getElementById("steam64box").value = null
                document.getElementById("steam64box").style.color = "white"
            } else {
                document.getElementById("steam64box").value = config.steam64id
                document.getElementById("steam64box").style.color = "white"
            }
        }, 2000)
    } else {
        SaveSteam64ID()
    }
}

function SaveSteam64ID() {
    var steam64value = document.getElementById("steam64box").value
    config["steam64id"] = steam64value.replace(/\s+/g, "")
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    document.getElementById("steam64box").value = steam64value
    
    document.getElementById("save64img").style.animation = "shrink 0.1s forwards"
    setTimeout(() => {
        document.getElementById("save64img").style.display = "none"
        document.getElementById("steam64tick").style.display = "block"
        document.getElementById("steam64tick").style.animation = "shrinkrev 0.2s forwards"
        setTimeout(() => {
            document.getElementById("steam64tick").style.animation = "shrink 0.1s forwards"
            setTimeout(() => {
                document.getElementById("steam64tick").style.display = "none"
                document.getElementById("save64img").style.transform = "scale(0%, 0%)"
                document.getElementById("save64img").style.display = "block"
                document.getElementById("save64img").style.animation = "shrinkrev 0.2s forwards"
            }, 200)
        }, 1000)
    }, 200)
    GetPlayerName()
    GetSteam3ID()
    GetSteamPath()
}

function ShowRareCheev() {
    var maincheev = document.getElementById("maincheevbtn")
    var rarecheev = document.getElementById("rarecheevbtn")
    var maindiv = document.getElementById("maindiv")
    var rarediv = document.getElementById("rarediv")

    maincheev.addEventListener('mouseover', () => {
        maincheev.style.opacity = 1
    })
    maincheev.addEventListener('mouseleave', () => {
        maincheev.style.opacity = 0.5
    })
    rarecheev.addEventListener('mouseover', () => {
        rarecheev.style.opacity = 1
    })
    rarecheev.addEventListener('mouseleave', () => {
        rarecheev.style.opacity = 1
    })

    maincheev.style.opacity = 0.5
    maincheev.style.background = "rgba(32,62,122,1)"
    maincheev.style.color = "white"
    
    rarecheev.style.opacity = 1
    rarecheev.style.background = "white"
    rarecheev.style.color = "black"

    maindiv.style.display = "none"
    rarediv.style.display = "flex"

    document.getElementById("mainimg").style.display = "none"
    document.getElementById("rareimg").style.display = "block"

    document.getElementById("username").style.background = "rebeccapurple"
    document.getElementById("steamimg").style.background = "rebeccapurple"
    document.getElementById("userempty").style.background = "rebeccapurple"

    document.getElementById("gamestatus").style.background = "rebeccapurple"
    document.getElementById("gameimg").style.background = "rebeccapurple"
    document.getElementById("gameempty").style.background = "rebeccapurple"
    
    tabtype = "rare"
}

function ShowMainCheev() {
    var maincheev = document.getElementById("maincheevbtn")
    var rarecheev = document.getElementById("rarecheevbtn")
    var maindiv = document.getElementById("maindiv")
    var rarediv = document.getElementById("rarediv")
    
    rarecheev.addEventListener('mouseover', () => {
        rarecheev.style.opacity = 1
    })
    rarecheev.addEventListener('mouseleave', () => {
        rarecheev.style.opacity = 0.5
    })
    maincheev.addEventListener('mouseover', () => {
        maincheev.style.opacity = 1
    })
    maincheev.addEventListener('mouseleave', () => {
        maincheev.style.opacity = 1
    })

    maincheev.style.opacity = 1
    maincheev.style.background = "white"
    maincheev.style.color = "black"
    
    rarecheev.style.opacity = 0.5
    rarecheev.style.background = "rgba(32,62,122,1)"
    rarecheev.style.color = "white"

    maindiv.style.display = "flex"
    rarediv.style.display = "none"

    document.getElementById("mainimg").style.display = "block"
    document.getElementById("rareimg").style.display = "none"

    document.getElementById("username").style.background = "rgba(32,62,122,1)"
    document.getElementById("steamimg").style.background = "rgba(32,62,122,1)"
    document.getElementById("userempty").style.background = "rgba(32,62,122,1)"

    document.getElementById("gamestatus").style.background = "rgba(32,62,122,1)"
    document.getElementById("gameimg").style.background = "rgba(32,62,122,1)"
    document.getElementById("gameempty").style.background = "rgba(32,62,122,1)"

    tabtype = "main"
}

function ShowMainTest() {
    document.getElementById("testrare").style.display = "none"
    document.getElementById("test").style.display = "flex"
}

function ShowRareTest() {
    document.getElementById("test").style.display = "none"
    document.getElementById("testrare").style.display = "flex"
}

// function ToggleScreenshot() {
//     if (config.screenshot == "false") {
//         config["screenshot"] = "true"
//         fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
//     } else {
//         config["screenshot"] = "false"
//         fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
//     }
//     CheckScreenshot()
// }

function CheckStartWin() {
    if (config.startwin == "true") {
        document.getElementById("startwinbox").checked = true
    } else {
        document.getElementById("startwinbox").checked = false
    }
}

/////////////////////////////////////////////////////////////////////////////////
// TO DO: Edit for Linux/MacOS - potentially remove option on these platforms  //
// EDIT: Removed at script start instead                                       //
/////////////////////////////////////////////////////////////////////////////////
function ToggleStartWin() {
    const startwin = path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup",`Steam Achievement Notifier (${appversion}).lnk`)

    if (config.startwin == "false") {
        config["startwin"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        const opts = {
            target: launcher.path,
            description: "Enhance your Steam achievement experience!"
        }

        try {
            const startwinshortcut = shell.writeShortcutLink(startwin, opts)

            if (startwinshortcut.valueOf() == false) {
                throw new Error("Startup Shortcut Error: ")
            } else {
                console.log(`%cStartup shortcut created successfully.`, "color: limegreen")
            }
        } catch (err) {
            console.log(`%cStartup shortcut could not be created!\n${err}`, "color: red")
        }
    } else {
        config["startwin"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

        if (fs.existsSync(startwin)) {
            fs.rmSync(startwin)
        } else {
            console.log(`%cStartWin shortcut no longer exists in "shell:startup"!`, "color: darkred")
        }
    }
    CheckStartWin()
}

function CheckStartMin() {
    if (config.startmin == "true") {
        document.getElementById("startminbox").checked = true
    } else {
        document.getElementById("startminbox").checked = false
    }
}

function ToggleStartMin() {
    if (config.startmin == "false") {
        config["startmin"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["startmin"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckStartMin()
}

var appid
var currgame = null

var gamename
var desc

function KoFiIconChange() {
    document.getElementById("kofi").style.opacity = 1
    document.getElementById("kofi").addEventListener("mouseleave", () => {
        document.getElementById("kofi").style.opacity = 0.5
    })
}

function OpenKoFi() {
    ipcRenderer.send('kofi')
}

function DiscordIconChange() {
    document.getElementById("discord").style.opacity = 1
    document.getElementById("discord").addEventListener("mouseleave", () => {
        document.getElementById("discord").style.opacity = 0.5
    })
}

function OpenDiscord() {
    ipcRenderer.send('discord')
}

function GithubIconChange() {
    document.getElementById("github").style.opacity = 1
    document.getElementById("github").addEventListener("mouseleave", () => {
        document.getElementById("github").style.opacity = 0.5
    })
}

function ReportIssue() {
    ipcRenderer.send('report')
}

function LoadNotify() {
    if (config.notifypos == "topleft") {
        pos = "topleft"
        document.getElementById("topleft").style.opacity = "1"
    } else if (config.notifypos == "topcenter") {
        pos = "topcenter"
        document.getElementById("topcenter").style.opacity = "1"
    } else if (config.notifypos == "topright") {
        pos = "topright"
        document.getElementById("topright").style.opacity = "1"
    } else if (config.notifypos == "bottomleft") {
        pos = "bottomleft"
        document.getElementById("bottomleft").style.opacity = "1"
    } else if (config.notifypos == "bottomcenter") {
        pos = "bottomcenter"
        document.getElementById("bottomcenter").style.opacity = "1"
    } else if (config.notifypos == "bottomright") {
        pos = "bottomright"
        document.getElementById("bottomright").style.opacity = "1"
    }
}

function LoadNotifyRare() {
    if (config.rarenotifypos == "topleft") {
        rarepos = "topleft"
        document.getElementById("topleftrare").style.opacity = "1"
    } else if (config.rarenotifypos == "topcenter") {
        rarepos = "topcenter"
        document.getElementById("topcenterrare").style.opacity = "1"
    } else if (config.rarenotifypos == "topright") {
        rarepos = "topright"
        document.getElementById("toprightrare").style.opacity = "1"
    } else if (config.rarenotifypos == "bottomleft") {
        rarepos = "bottomleft"
        document.getElementById("bottomleftrare").style.opacity = "1"
    } else if (config.rarenotifypos == "bottomcenter") {
        rarepos = "bottomcenter"
        document.getElementById("bottomcenterrare").style.opacity = "1"
    } else if (config.rarenotifypos == "bottomright") {
        rarepos = "bottomright"
        document.getElementById("bottomrightrare").style.opacity = "1"
    }
}

LoadNotifyRare()

function ExpandCustomise() {
    document.getElementById("customiselbl").style.display = "flex"
    document.getElementById("customiseicon").src = "./icon/tune_black.svg"
    document.getElementById("customisecont").style.bottom = "64px"
    document.getElementById("customisecont").style.height = "38px"

    document.getElementById("test").style.width = "330px"
    document.getElementById("test").style.transition = "0.2s"
    document.getElementById("testrare").style.width = "330px"
    document.getElementById("testrare").style.transition = "0.2s"
}

function ShrinkCustomise() {
    document.getElementById("customiselbl").style.display = "none"
    document.getElementById("customiseicon").src = "./icon/tune_white.svg"
    document.getElementById("customisecont").style.bottom = "68px"
    document.getElementById("customisecont").style.height = "30px"

    document.getElementById("test").style.width = "490px"
    document.getElementById("test").style.transition = "0.2s"
    document.getElementById("testrare").style.width = "490px"
    document.getElementById("testrare").style.transition = "0.2s"
}

var tabtype = "main"

function ShowCustomise() {
    SetWebViewSrc()
    SetWebViewSrcRare()

    document.getElementById("bodycont").style.display = "none"
    document.getElementById("customisemenu").style.display = "flex"
    document.getElementById("close").onclick = function () { CloseCustomiser() }

    if (tabtype == "main") {
        ToggleMainTab()
    } else {
        ToggleRareTab()
    }

    GetBGType()
    LoadNotify()
}

function CloseCustomiser() {
    document.getElementById("bodycont").style.display = "flex"
    document.getElementById("customisemenu").style.display = "none"
    document.getElementById("webview").remove()
    document.getElementById("webviewrare").remove()
    document.getElementById("close").onclick = function () { CloseWindow() }

    ipcRenderer.send('checkdragwin')
}

function ReplayNotification() {
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    document.getElementById("webview").reload()
}

var paused = false

function PauseNotification() {
    if (paused == false) {
        paused = true
        document.getElementById("pause").src = "./icon/play_white.svg"
        document.getElementById("webview").send('pausenotify')
    } else {
        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        document.getElementById("webview").send('playnotify')
    }
}

function ReplayRareNotification() {
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    document.getElementById("webviewrare").reload()
}

function PauseRareNotification() {
    if (paused == false) {
        paused = true
        document.getElementById("pauserare").src = "./icon/play_white.svg"
        document.getElementById("webviewrare").send('pausenotify')
    } else {
        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        document.getElementById("webviewrare").send('playnotify')
    }
}

function SetWebViewSrc() {
    var webviewelem = document.createElement("webview")

    if (config.notifystyle == "default") {
        webviewelem.src = "./notify/default/preview/defaultpreview.html"
    } else if (config.notifystyle == "xbox") {
        webviewelem.src = "./notify/xbox/preview/xboxpreview.html"
    } else if (config.notifystyle == "playstation") {
        webviewelem.src = "./notify/playstation/preview/playstationpreview.html"
    } else if (config.notifystyle == "ps5") {
        webviewelem.src = "./notify/ps5/preview/ps5preview.html"
    } else if (config.notifystyle == "windows") {
        webviewelem.src = "./notify/windows/preview/windowspreview.html"
    } else if (config.notifystyle == "xbox360") {
        webviewelem.src = "./notify/xbox360/preview/xbox360preview.html"
    } else if (config.notifystyle == "xqjan") {
        webviewelem.src = "./notify/xqjan/preview/xqjanpreview.html"
    }

    webviewelem.id = "webview"
    webviewelem.webpreferences = "nodeIntegration = true, contextIsolation = false"
    document.getElementById("notifypreview").appendChild(webviewelem)
}

function SetWebViewSrcRare() {
    var webviewelemrare = document.createElement("webview")

    if (config.rarenotifystyle == "default") {
        webviewelemrare.src = "./notify/default/rarepreview/defaultrarepreview.html"
    } else if (config.rarenotifystyle == "xbox") {
        webviewelemrare.src = "./notify/xbox/rarepreview/xboxrarepreview.html"
    } else if (config.rarenotifystyle == "playstation") {
        webviewelemrare.src = "./notify/playstation/rarepreview/playstationrarepreview.html"
    } else if (config.rarenotifystyle == "ps5") {
        webviewelemrare.src = "./notify/ps5/rarepreview/ps5rarepreview.html"
    } else if (config.rarenotifystyle == "windows") {
        webviewelemrare.src = "./notify/windows/rarepreview/windowsrarepreview.html"
    } else if (config.rarenotifystyle == "xbox360") {
        webviewelemrare.src = "./notify/xbox360/rarepreview/xbox360rarepreview.html"
    } else if (config.rarenotifystyle == "xqjan") {
        webviewelemrare.src = "./notify/xqjan/rarepreview/xqjanrarepreview.html"
    }

    webviewelemrare.id = "webviewrare"
    webviewelemrare.webpreferences = "nodeIntegration = true, contextIsolation = false"
    document.getElementById("notifypreviewrare").appendChild(webviewelemrare)
}

var notifywidth
var notifyheight

function SetNotifyStyle() {
    config["notifystyle"] = document.getElementById("customiserstyledropdown").value
    ipcRenderer.send('storedragwin')

    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    CheckCustomPos()
}

function GetNotifyStyle() {
    // Double Try/Catch for webviews are needed to prevent errors stating the webview is undefined on load (i.e. before the Customiser is loaded)!
    document.getElementById("customiserstyledropdown").value = config.notifystyle
    if (document.getElementById("customiserstyledropdown").value == "default") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 300
            notifyheight = 219
        } else {
            notifywidth = 300
            notifyheight = 50
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"

        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","default","preview","defaultpreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "xbox") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 315
            notifyheight = 244
        } else {
            notifywidth = 315
            notifyheight = 65
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","xbox","preview","xboxpreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "playstation") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 310
            notifyheight = 224
        } else {
            notifywidth = 310
            notifyheight = 55
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","playstation","preview","playstationpreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "ps5") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 340
            notifyheight = 219
        } else {
            notifywidth = 340
            notifyheight = 50
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","ps5","preview","ps5preview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "windows") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 300
            notifyheight = 279
        } else {
            notifywidth = 300
            notifyheight = 110
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","windows","preview","windowspreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "xbox360") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 300
            notifyheight = 219
        } else {
            notifywidth = 300
            notifyheight = 50
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","xbox360","preview","xbox360preview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdown").value == "xqjan") {
        if (config.ssprev == "true" && config.screenshot == "true") {
            notifywidth = 300
            notifyheight = 239
        } else {
            notifywidth = 300
            notifyheight = 70
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webview").loadURL(`file://${path.join(__dirname,"notify","xqjan","preview","xqjanpreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    }

    if (document.getElementById("customiserstyledropdown").value == "xbox") {
        document.getElementById("iconselectlbl").style.display = "none"
        document.getElementById("iconselectcont").style.display = "none"
        document.getElementById("gameiconcont").style.display = "none"
    } else {
        document.getElementById("iconselectlbl").style.display = "flex"
        document.getElementById("iconselectcont").style.display = "flex"
        document.getElementById("gameiconcont").style.display = "flex"
    }
}

GetNotifyStyle()

function SetNotifyStyleRare() {
    config["rarenotifystyle"] = document.getElementById("customiserstyledropdownrare").value
    ipcRenderer.send('storedragwin')

    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    CheckCustomPosRare()
}

document.getElementById("customiserstyledropdownrare").value = config.rarenotifystyle

function GetNotifyStyleRare() {
    // Double Try/Catch for webviews are needed to prevent errors stating the webview is undefined on load (i.e. before the Customiser is loaded)!
    document.getElementById("customiserstyledropdownrare").value = config.rarenotifystyle
    if (document.getElementById("customiserstyledropdownrare").value == "default") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 300
            notifyheight = 219
        } else {
            notifywidth = 300
            notifyheight = 50
        }

        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","default","rarepreview","defaultrarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "xbox") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 315
            notifyheight = 244
        } else {
            notifywidth = 315
            notifyheight = 65
        }

        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","xbox","rarepreview","xboxrarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "playstation") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 310
            notifyheight = 224
        } else {
            notifywidth = 310
            notifyheight = 55
        }

        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","playstation","rarepreview","playstationrarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "ps5") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 340
            notifyheight = 219
        } else {
            notifywidth = 340
            notifyheight = 50
        }

        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","ps5","rarepreview","ps5rarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "windows") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 300
            notifyheight = 279
        } else {
            notifywidth = 300
            notifyheight = 110
        }

        paused = false
        document.getElementById("pauserare").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","windows","rarepreview","windowsrarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "xbox360") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 300
            notifyheight = 219
        } else {
            notifywidth = 300
            notifyheight = 50
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"
        
        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","xbox360","rarepreview","xbox360rarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    } else if (document.getElementById("customiserstyledropdownrare").value == "xqjan") {
        if (config.raressprev == "true" && config.rarescreenshot == "true") {
            notifywidth = 300
            notifyheight = 239
        } else {
            notifywidth = 300
            notifyheight = 70
        }

        paused = false
        document.getElementById("pause").src = "./icon/pause_white.svg"

        try {
            document.getElementById("webviewrare").loadURL(`file://${path.join(__dirname,"notify","xqjan","rarepreview","xqjanrarepreview.html")}`).catch(err => {
                console.log(`%c${err}`, "color: red")
            })
        } catch (err) {}
    }

    if (document.getElementById("customiserstyledropdownrare").value == "xbox") {
        document.getElementById("rareiconselectlbl").style.display = "none"
        document.getElementById("rareiconselectcont").style.display = "none"
        document.getElementById("gameiconcontrare").style.display = "none"
    } else {
        document.getElementById("rareiconselectlbl").style.display = "flex"
        document.getElementById("rareiconselectcont").style.display = "flex"
        document.getElementById("gameiconcontrare").style.display = "flex"
    }
}

GetNotifyStyleRare()

function SetBGType() {
    if (document.getElementById("customiserbgdropdown").value == "bgsolid") {
        config["bgtype"] = "bgsolid"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdown").value == "bg") {
        config["bgtype"] = "bg"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdown").value == "img") {
        config["bgtype"] = "img"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdown").value == "game") {
        config["bgtype"] = "game"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    GetBGType()
}

var pos = config.notifypos
var rarepos = config.rarenotifypos

function GetBGType() {
    if (config.bgtype == "bgsolid") {
        document.getElementById("customiserbgdropdown").value = "bgsolid"
        document.getElementById("colourslbl").style.display = "flex"
        document.getElementById("colour1").style.display = "flex"
        document.getElementById("colour1box").value = config.colour1
        document.getElementById("colour2").style.display = "flex"
        document.getElementById("colour2box").value = config.colour2
        document.getElementById("imgselectlbl").style.display = "none"
        document.getElementById("imgselectcont").style.display = "none"
    } else if (config.bgtype == "bg") {
        document.getElementById("customiserbgdropdown").value = "bg"
        document.getElementById("colourslbl").style.display = "flex"
        document.getElementById("colour1").style.display = "flex"
        document.getElementById("colour1box").value = config.colour1
        document.getElementById("colour2").style.display = "flex"
        document.getElementById("colour2box").value = config.colour2
        document.getElementById("imgselectlbl").style.display = "none"
        document.getElementById("imgselectcont").style.display = "none"
    } else if (config.bgtype == "img") {
        document.getElementById("customiserbgdropdown").value = "img"
        document.getElementById("colourslbl").style.display = "flex"
        document.getElementById("colour1").style.display = "none"
        document.getElementById("colour1box").value = config.colour1
        document.getElementById("colour2").style.display = "none"
        document.getElementById("colour2box").value = config.colour2
        document.getElementById("imgselectlbl").style.display = "flex"
        document.getElementById("imgselectcont").style.display = "flex"

        if (config.img == "default") {
            document.getElementById("imgselecticon").src = "./img/santextlogobg.png"
        } else {
            document.getElementById("imgselecticon").src = config.img
        }
    } else if (config.bgtype == "game") {
        document.getElementById("customiserbgdropdown").value = "game"
        document.getElementById("colourslbl").style.display = "flex"
        document.getElementById("colour1").style.display = "none"
        document.getElementById("colour1box").value = config.colour1
        document.getElementById("colour2").style.display = "none"
        document.getElementById("colour2box").value = config.colour2
        document.getElementById("imgselectlbl").style.display = "none"
        document.getElementById("imgselectcont").style.display = "none"
    }

    document.getElementById("textcolourbox").value = config.textcolour
    document.getElementById("roundness").value = config.roundness
    document.getElementById("roundnesspreview").style.borderRadius = (config.roundness * 0.4) + "px"
    document.getElementById("iconroundness").value = config.iconroundness
    document.getElementById("iconroundnesspreview").style.borderRadius = (config.iconroundness * 0.6) + "px"

    if (config.icon == "" || config.icon == undefined) {
        document.getElementById("iconselecticon").src = "./img/sanlogosquare.svg"
    } else {
        document.getElementById("iconselecticon").src = config.icon
    }

    if (config.bgtype !== "game") {
        document.getElementById("brightnesslblcont").style.display = "none"
        document.getElementById("brightnessslidercont").style.display = "none"
    } else {
        document.getElementById("brightnesslblcont").style.display = "flex"
        document.getElementById("brightnessslidercont").style.display = "flex"
    }
}

function SetRareBGType() {
    if (document.getElementById("customiserbgdropdownrare").value == "bgsolid") {
        config["rarebgtype"] = "bgsolid"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdownrare").value == "bg") {
        config["rarebgtype"] = "bg"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdownrare").value == "img") {
        config["rarebgtype"] = "img"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else if (document.getElementById("customiserbgdropdownrare").value == "game") {
        config["rarebgtype"] = "game"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    GetRareBGType()
}

function GetRareBGType() {
    if (config.rarebgtype == "bgsolid") {
        document.getElementById("customiserbgdropdownrare").value = "bgsolid"
        document.getElementById("rarecolourslbl").style.display = "flex"
        document.getElementById("rarecolour1").style.display = "flex"
        document.getElementById("rarecolour1box").value = config.rarecolour1
        document.getElementById("rarecolour2").style.display = "flex"
        document.getElementById("rarecolour2box").value = config.rarecolour2
        document.getElementById("rareimgselectlbl").style.display = "none"
        document.getElementById("rareimgselectcont").style.display = "none"
    } else if (config.rarebgtype == "bg") {
        document.getElementById("customiserbgdropdownrare").value = "bg"
        document.getElementById("rarecolourslbl").style.display = "flex"
        document.getElementById("rarecolour1").style.display = "flex"
        document.getElementById("rarecolour1box").value = config.rarecolour1
        document.getElementById("rarecolour2").style.display = "flex"
        document.getElementById("rarecolour2box").value = config.rarecolour2
        document.getElementById("rareimgselectlbl").style.display = "none"
        document.getElementById("rareimgselectcont").style.display = "none"
    } else if (config.rarebgtype == "img") {
        document.getElementById("customiserbgdropdownrare").value = "img"
        document.getElementById("rarecolourslbl").style.display = "flex"
        document.getElementById("rarecolour1").style.display = "none"
        document.getElementById("rarecolour1box").value = config.rarecolour1
        document.getElementById("rarecolour2").style.display = "none"
        document.getElementById("rarecolour2box").value = config.rarecolour2
        document.getElementById("rareimgselectlbl").style.display = "flex"
        document.getElementById("rareimgselectcont").style.display = "flex"

        if (config.rareimg == "default") {
            document.getElementById("rareimgselecticon").src = "./img/santextlogobg.png"
        } else {
            document.getElementById("rareimgselecticon").src = config.rareimg
        }
    } else if (config.rarebgtype == "game") {
        document.getElementById("customiserbgdropdownrare").value = "game"
        document.getElementById("rarecolourslbl").style.display = "flex"
        document.getElementById("rarecolour1").style.display = "none"
        document.getElementById("rarecolour1box").value = config.rarecolour1
        document.getElementById("rarecolour2").style.display = "none"
        document.getElementById("rarecolour2box").value = config.rarecolour2
        document.getElementById("rareimgselectlbl").style.display = "none"
        document.getElementById("rareimgselectcont").style.display = "none"
    }

    document.getElementById("raretextcolourbox").value = config.raretextcolour
    document.getElementById("roundnessrare").value = config.rareroundness
    document.getElementById("roundnesspreviewrare").style.borderRadius = (config.rareroundness * 0.4) + "px"
    document.getElementById("iconroundnessrare").value = config.rareiconroundness
    document.getElementById("iconroundnesspreviewrare").style.borderRadius = (config.rareiconroundness * 0.6) + "px"

    if (config.rareicon == "" || config.rareicon == undefined) {
        document.getElementById("rareiconselecticon").src = "./img/sanlogosquare.svg"
    } else {
        document.getElementById("rareiconselecticon").src = config.rareicon
    }

    if (config.rarebgtype !== "game") {
        document.getElementById("brightnesslblcontrare").style.display = "none"
        document.getElementById("brightnessslidercontrare").style.display = "none"
    } else {
        document.getElementById("brightnesslblcontrare").style.display = "flex"
        document.getElementById("brightnessslidercontrare").style.display = "flex"
    }
}

function NotifyWinPos() {
    if (pos == "bottomcenter") {
        ipcRenderer.send('bottom', config.notifystyle)
    } else if (pos == "bottomleft") {
        ipcRenderer.send('bottomleft', config.notifystyle)
    } else if (pos == "bottomright") {
        ipcRenderer.send('bottomright', config.notifystyle)
    } else if (pos == "topcenter") {
        ipcRenderer.send('top', config.notifystyle)
    } else if (pos == "topleft") {
        ipcRenderer.send('topleft', config.notifystyle)
    } else if (pos == "topright") {
        ipcRenderer.send('topright', config.notifystyle)
    }
}

function SetTopLeft() {
    pos = "topleft"
    document.getElementById("topleft").style.opacity = "1"
    document.getElementById("topcenter").style.opacity = "0.5"
    document.getElementById("topright").style.opacity = "0.5"
    document.getElementById("bottomleft").style.opacity = "0.5"
    document.getElementById("bottomcenter").style.opacity = "0.5"
    document.getElementById("bottomright").style.opacity = "0.5"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))   
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetTopCenter() {
    pos = "topcenter"
    document.getElementById("topleft").style.opacity = "0.5"
    document.getElementById("topcenter").style.opacity = "1"
    document.getElementById("topright").style.opacity = "0.5"
    document.getElementById("bottomleft").style.opacity = "0.5"
    document.getElementById("bottomcenter").style.opacity = "0.5"
    document.getElementById("bottomright").style.opacity = "0.5"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetTopRight() {
    pos = "topright"
    document.getElementById("topleft").style.opacity = "0.5"
    document.getElementById("topcenter").style.opacity = "0.5"
    document.getElementById("topright").style.opacity = "1"
    document.getElementById("bottomleft").style.opacity = "0.5"
    document.getElementById("bottomcenter").style.opacity = "0.5"
    document.getElementById("bottomright").style.opacity = "0.5"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetBottomLeft() {
    pos = "bottomleft"
    document.getElementById("topleft").style.opacity = "0.5"
    document.getElementById("topcenter").style.opacity = "0.5"
    document.getElementById("topright").style.opacity = "0.5"
    document.getElementById("bottomleft").style.opacity = "1"
    document.getElementById("bottomcenter").style.opacity = "0.5"
    document.getElementById("bottomright").style.opacity = "0.5"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetBottomCenter() {
    pos = "bottomcenter"
    document.getElementById("topleft").style.opacity = "0.5"
    document.getElementById("topcenter").style.opacity = "0.5"
    document.getElementById("topright").style.opacity = "0.5"
    document.getElementById("bottomleft").style.opacity = "0.5"
    document.getElementById("bottomcenter").style.opacity = "1"
    document.getElementById("bottomright").style.opacity = "0.5"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetBottomRight() {
    pos = "bottomright"
    document.getElementById("topleft").style.opacity = "0.5"
    document.getElementById("topcenter").style.opacity = "0.5"
    document.getElementById("topright").style.opacity = "0.5"
    document.getElementById("bottomleft").style.opacity = "0.5"
    document.getElementById("bottomcenter").style.opacity = "0.5"
    document.getElementById("bottomright").style.opacity = "1"
    config["notifypos"] = pos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

function SetTopLeftRare() {
    rarepos = "topleft"
    document.getElementById("topleftrare").style.opacity = "1"
    document.getElementById("topcenterrare").style.opacity = "0.5"
    document.getElementById("toprightrare").style.opacity = "0.5"
    document.getElementById("bottomleftrare").style.opacity = "0.5"
    document.getElementById("bottomcenterrare").style.opacity = "0.5"
    document.getElementById("bottomrightrare").style.opacity = "0.5"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))   
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetTopCenterRare() {
    rarepos = "topcenter"
    document.getElementById("topleftrare").style.opacity = "0.5"
    document.getElementById("topcenterrare").style.opacity = "1"
    document.getElementById("toprightrare").style.opacity = "0.5"
    document.getElementById("bottomleftrare").style.opacity = "0.5"
    document.getElementById("bottomcenterrare").style.opacity = "0.5"
    document.getElementById("bottomrightrare").style.opacity = "0.5"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetTopRightRare() {
    rarepos = "topright"
    document.getElementById("topleftrare").style.opacity = "0.5"
    document.getElementById("topcenterrare").style.opacity = "0.5"
    document.getElementById("toprightrare").style.opacity = "1"
    document.getElementById("bottomleftrare").style.opacity = "0.5"
    document.getElementById("bottomcenterrare").style.opacity = "0.5"
    document.getElementById("bottomrightrare").style.opacity = "0.5"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetBottomLeftRare() {
    rarepos = "bottomleft"
    document.getElementById("topleftrare").style.opacity = "0.5"
    document.getElementById("topcenterrare").style.opacity = "0.5"
    document.getElementById("toprightrare").style.opacity = "0.5"
    document.getElementById("bottomleftrare").style.opacity = "1"
    document.getElementById("bottomcenterrare").style.opacity = "0.5"
    document.getElementById("bottomrightrare").style.opacity = "0.5"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetBottomCenterRare() {
    rarepos = "bottomcenter"
    document.getElementById("topleftrare").style.opacity = "0.5"
    document.getElementById("topcenterrare").style.opacity = "0.5"
    document.getElementById("toprightrare").style.opacity = "0.5"
    document.getElementById("bottomleftrare").style.opacity = "0.5"
    document.getElementById("bottomcenterrare").style.opacity = "1"
    document.getElementById("bottomrightrare").style.opacity = "0.5"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetBottomRightRare() {
    rarepos = "bottomright"
    document.getElementById("topleftrare").style.opacity = "0.5"
    document.getElementById("topcenterrare").style.opacity = "0.5"
    document.getElementById("toprightrare").style.opacity = "0.5"
    document.getElementById("bottomleftrare").style.opacity = "0.5"
    document.getElementById("bottomcenterrare").style.opacity = "0.5"
    document.getElementById("bottomrightrare").style.opacity = "1"
    config["rarenotifypos"] = rarepos
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

function SetColour1() {
    document.getElementById("colour1box").addEventListener('change', () => {
        config["colour1"] = document.getElementById("colour1box").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetBGType()
}

function SetColour2() {
    document.getElementById("colour2box").addEventListener('change', () => {
        config["colour2"] = document.getElementById("colour2box").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetBGType()
}

function SetTextColour() {
    document.getElementById("textcolourbox").addEventListener('change', () => {
        config["textcolour"] = document.getElementById("textcolourbox").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetBGType()
}

function SetRareColour1() {
    document.getElementById("rarecolour1box").addEventListener('change', () => {
        config["rarecolour1"] = document.getElementById("rarecolour1box").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetRareBGType()
}

function SetRareColour2() {
    document.getElementById("rarecolour2box").addEventListener('change', () => {
        config["rarecolour2"] = document.getElementById("rarecolour2box").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetRareBGType()
}

function SetRareTextColour() {
    document.getElementById("raretextcolourbox").addEventListener('change', () => {
        config["raretextcolour"] = document.getElementById("raretextcolourbox").value
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    })
    GetRareBGType()
}

document.getElementById("roundness").addEventListener('input', () => {
    config["roundness"] = document.getElementById("roundness").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    GetBGType()
})

document.getElementById("roundnessrare").addEventListener('input', () => {
    config["rareroundness"] = document.getElementById("roundnessrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    GetRareBGType()
})

document.getElementById("iconroundness").addEventListener('input', () => {
    config["iconroundness"] = document.getElementById("iconroundness").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    GetBGType()
})

document.getElementById("iconroundnessrare").addEventListener('input', () => {
    config["rareiconroundness"] = document.getElementById("iconroundnessrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    GetRareBGType()
})

document.getElementById("imgselect").onchange = (selection) => {
    var file = selection.target.files[0]
    config["img"] = (file.path).replace(/\\/g,"/")
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    PauseNotification()
    GetBGType()
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

document.getElementById("rareimgselect").onchange = (selection) => {
    var file = selection.target.files[0]
    config["rareimg"] = (file.path).replace(/\\/g,"/")
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    GetRareBGType()
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

// ICON SELECT
document.getElementById("iconselect").onchange = (selection) => {
    var file = selection.target.files[0]
    file = file.path
    try {
        config["icon"] = file.replace(/\\/g,"/")
    } catch {}
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    PauseNotification()
    GetBGType()
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    ReplayNotification()
}

// RARE ICON SELECT
document.getElementById("rareiconselect").onchange = (selection) => {
    var file = selection.target.files[0]
    file = file.path
    try {
        config["rareicon"] = file.replace(/\\/g,"/")
    } catch {}
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    GetRareBGType()
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    ReplayRareNotification()
}

document.getElementById("displaytimeslider").value = config.displaytime
document.getElementById("displaytimevalue").innerHTML = config.displaytime + "s"

function SetDisplayTime() {
    var displaytime = document.getElementById("displaytimeslider").value
    config["displaytime"] = displaytime
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    document.getElementById("webview").reload()
}

document.getElementById("displaytimesliderrare").value = config.raredisplaytime
document.getElementById("displaytimevaluerare").innerHTML = config.raredisplaytime + "s"

function SetRareDisplayTime() {
    var displaytime = document.getElementById("displaytimesliderrare").value
    config["raredisplaytime"] = displaytime
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    document.getElementById("webviewrare").reload()
}

// !!! TESTING !!!
function OpenDevTools() {
    document.getElementsByTagName('webview')[0].openDevTools()
}

function CheckScreenshot() {
    if (config.screenshot == "true") {
        document.getElementById("showscreenshotcheckbox").checked = true
        document.getElementById("showscreenshotlblcont").style.marginBottom = "5px"
        document.getElementById("previewlblcont").style.display = "flex"
        document.getElementById("previewlblcont").style.animation = "fadein 1s forwards"
    } else {
        document.getElementById("showscreenshotcheckbox").checked = false
        document.getElementById("showscreenshotlblcont").style.marginBottom = "10px"
        document.getElementById("previewlblcont").style.display = "none"
    }
}

CheckScreenshot()

function ToggleShowScreenshot() {
    if (config.screenshot == "true") {
        config["screenshot"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["screenshot"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    CheckScreenshot()
    GetNotifyStyle()
}

function CheckRareScreenshot() {
    if (config.rarescreenshot == "true") {
        document.getElementById("showscreenshotcheckboxrare").checked = true
        document.getElementById("previewlblcontrare").style.display = "flex"
        document.getElementById("previewlblcontrare").style.animation = "fadein 1s forwards"
    } else {
        document.getElementById("showscreenshotcheckboxrare").checked = false
        document.getElementById("previewlblcontrare").style.display = "none"
    }
}

CheckRareScreenshot()

function ToggleShowRareScreenshot() {
    if (config.rarescreenshot == "true") {
        config["rarescreenshot"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["rarescreenshot"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    CheckRareScreenshot()
    GetNotifyStyleRare()
}

function ToggleMainTab() {
    GetBGType()
    GetNotifyStyle()

    document.getElementById("customisermaintab").addEventListener('mouseover', () => {
        document.getElementById("customisermaintab").style.opacity = "1"
    })

    document.getElementById("customisermaintab").addEventListener('mouseleave', () => {
        document.getElementById("customisermaintab").style.opacity = "1"
    })

    document.getElementById("customiserraretab").addEventListener('mouseover', () => {
        document.getElementById("customiserraretab").style.opacity = "1"
    })

    document.getElementById("customiserraretab").addEventListener('mouseleave', () => {
        document.getElementById("customiserraretab").style.opacity = "0.5"
    })

    document.getElementById("customisermaintab").style.background = "white"
    document.getElementById("customisermaintab").style.color = "black"
    document.getElementById("customisermaintab").style.opacity = "1"

    document.getElementById("customiserraretab").style.background = "rgba(32,66,122,1)"
    document.getElementById("customiserraretab").style.color = "white"
    document.getElementById("customiserraretab").style.opacity = "0.5"

    document.getElementById("maintab").style.display = "block"
    document.getElementById("raretab").style.display = "none"
    document.getElementById("notifypreview").style.display = "flex"
    document.getElementById("notifypreviewrare").style.display = "none"
    document.getElementById("notifybtncont").style.display = "flex"
    document.getElementById("notifybtncontrare").style.display = "none"
    try {
        document.getElementById("webview").reload()
    } catch (err) {
        // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
    }
}

document.getElementById("customisermaintab").addEventListener('click', () => {
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
})

document.getElementById("notifyplay").addEventListener('click', () => {
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
})

document.getElementById("customiserstyledropdown").addEventListener('change', () => {
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
})

function ToggleRareTab() {
    GetRareBGType()
    GetNotifyStyleRare()

    document.getElementById("customiserraretab").addEventListener('mouseover', () => {
        document.getElementById("customiserraretab").style.opacity = "1"
    })

    document.getElementById("customiserraretab").addEventListener('mouseleave', () => {
        document.getElementById("customiserraretab").style.opacity = "1"
    })

    document.getElementById("customisermaintab").addEventListener('mouseover', () => {
        document.getElementById("customisermaintab").style.opacity = "1"
    })

    document.getElementById("customisermaintab").addEventListener('mouseleave', () => {
        document.getElementById("customisermaintab").style.opacity = "0.5"
    })

    document.getElementById("customiserraretab").style.background = "white"
    document.getElementById("customiserraretab").style.color = "black"
    document.getElementById("customiserraretab").style.opacity = "1"

    document.getElementById("customisermaintab").style.background = "rgba(32,66,122,1)"
    document.getElementById("customisermaintab").style.color = "white"
    document.getElementById("customisermaintab").style.opacity = "0.5"

    document.getElementById("maintab").style.display = "none"
    document.getElementById("raretab").style.display = "block"
    document.getElementById("notifypreview").style.display = "none"
    document.getElementById("notifypreviewrare").style.display = "flex"
    document.getElementById("notifybtncont").style.display = "none"
    document.getElementById("notifybtncontrare").style.display = "flex"
    try {
        document.getElementById("webviewrare").reload()
    } catch (err) {
        // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
    }
}

document.getElementById("customiserraretab").addEventListener('click', () => {
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
})

document.getElementById("notifyplayrare").addEventListener('click', () => {
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
})

document.getElementById("customiserstyledropdownrare").addEventListener('change', () => {
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
})

var configkeybind = config.keybind
configkeybind = configkeybind.replace("KEY_","").replace("PAD_","Num ")
document.getElementById("steamkeybind").innerHTML = configkeybind

function KeybindHover() {
    document.getElementById("steamkeybind").style.background = "white"
    document.getElementById("steamkeybind").style.color = "black"
}

function KeybindOut() {
    document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)"
    document.getElementById("steamkeybind").style.color = "white"
}

function SetKeybind() {
    document.getElementById("steamkeybind").style.animation = "bluetowhite 0.5s alternate infinite"
    document.getElementById("steamkeybind").innerHTML = presskey
    
    var keybind

    document.onkeydown = function KeyDown(event) {
        var keymap = new Map([
            ["Control","invalid"],
            ["Shift","invalid"],
            ["Alt","invalid"],
            ["AltGraph","invalid"],
            ["Meta","invalid"],
            ["`","invalid"],
            ["NumpadAdd","plus"],
            ["NumpadSubtract","minus"],
            ["NumpadDecimal","decimal"],
            ["NumpadMultiply","multiply"],
            ["NumpadDivide","divide"]
        ])

        function GetKeybind(code, key) {
            if (keymap.has(code)) {
                keybind = keymap.get(code)
            } else if (keymap.has(key)) {
                if (keymap.get(key) == "invalid") {
                    keybind = "invalid"
                } else {
                    keybind = keymap.get(key)
                }
            } else {
                if (code.includes("Numpad") && code != "NumpadEnter") {
                    keybind = "Num " + key
                } else {
                    keybind = key
                }
            }

            keybind = keybind.toUpperCase()
        }

        GetKeybind(event.code, event.key)
        
        if (keybind != "INVALID") {
            config["keybind"] = keybind
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
            
            document.getElementById("steamkeybind").innerHTML = keybind
            document.getElementById("steamkeybind").style.animation = "none"
            document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)"
            document.getElementById("steamkeybind").style.color = "white"
        } else {
            // TO DO: Change "steamkeybind" element background to red + "Invalid"
            // Reset back to previous value in config["keybind"]
            alert("Invalid key!")
            document.getElementById("steamkeybind").innerHTML = config.keybind
            document.getElementById("steamkeybind").style.animation = "none"
            document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)"
            document.getElementById("steamkeybind").style.color = "white"
        }
    
        document.onkeydown = null
    }
}

document.getElementById("scaleslider").value = config.scale
document.getElementById("scalevalue").innerHTML = config.scale + "%"

function SetScale() {
    config["scale"] = document.getElementById("scaleslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    document.getElementById("webview").reload()
}

document.getElementById("scalesliderrare").value = config.rarescale
document.getElementById("scalevaluerare").innerHTML = config.rarescale + "%"

function SetRareScale() {
    config["rarescale"] = document.getElementById("scalesliderrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    document.getElementById("webviewrare").reload()
}

document.getElementById("rarityslider").value = config.rarity
document.getElementById("rarityvalue").innerHTML = config.rarity

function SetRarity() {
    config["rarity"] = document.getElementById("rarityslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

document.getElementById("audio").volume = (config.volume * 10) / 100
document.getElementById("volumeslider").value = config.volume
document.getElementById("audiorare").volume = (config.rarevolume * 10) / 100
document.getElementById("volumesliderrare").value = config.rarevolume

function Volume(event) {
    if (event.deltaY < 0) {
        document.getElementById("volumeslider").value = parseInt(document.getElementById("volumeslider").value) + 1
    } else {
        document.getElementById("volumeslider").value = parseInt(document.getElementById("volumeslider").value) - 1
    }
    document.getElementById("audio").volume = (config.volume * 10) / 100
    config["volume"] = document.getElementById("volumeslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

function ShowVolume() {
    document.getElementById("volumeupicon").style.opacity = "1"
    document.getElementById("volumedownicon").style.opacity = "1"
    document.getElementById("volumeslider").style.opacity = "1"
}

function HideVolume() {
    document.getElementById("volumeupicon").style.opacity = "0"
    document.getElementById("volumedownicon").style.opacity = "0"
    document.getElementById("volumeslider").style.opacity = "0"
}

function VolumeRare(event) {
    if (event.deltaY < 0) {
        document.getElementById("volumesliderrare").value = parseInt(document.getElementById("volumesliderrare").value) + 1
    } else {
        document.getElementById("volumesliderrare").value = parseInt(document.getElementById("volumesliderrare").value) - 1
    }
    document.getElementById("audiorare").volume = (config.rarevolume * 10) / 100
    config["rarevolume"] = document.getElementById("volumesliderrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

function ShowVolumeRare() {
    document.getElementById("volumeupiconrare").style.opacity = "1"
    document.getElementById("volumedowniconrare").style.opacity = "1"
    document.getElementById("volumesliderrare").style.opacity = "1"
}

function HideVolumeRare() {
    document.getElementById("volumeupiconrare").style.opacity = "0"
    document.getElementById("volumedowniconrare").style.opacity = "0"
    document.getElementById("volumesliderrare").style.opacity = "0"
}

var steam3id
var steampath

function GetSteam3ID() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\ActiveProcess`], (err, result) => {
            try {
                steam3id = result["HKCU\\SOFTWARE\\Valve\\Steam\\ActiveProcess"].values.ActiveUser.value
            } catch {
                // console.log("%cSteam3ID not found", "color: red")
            }
        })
    } else if (process.platform == "linux" || process.platform == "darwin") {
        var steam64id = config.steam64id
        var steamidio = `https://steamid.io/lookup/${steam64id}`

        if (steam64id !== "") {
            fetch(steamidio)
            .then(res => res.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/html"))
            .then(data => {
                var lookup = data.body.getElementsByTagName("dd")[1].children[1].innerText
                lookup = lookup.replace(/U:1:/g,"").replace(/\[/g,"").replace(/\]/g,"")
                
                steam3id = lookup
            })
        } else {
            console.log("%No steam64id detected","color: darkred")
        }
    }
}

function GetSteamPath() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\`], (err, result) => {
            try {
                steampath = result["HKCU\\SOFTWARE\\Valve\\Steam\\"].values.SteamPath.value
            } catch {
                // console.log("%cSteam installation path not found", "color: red")
            }
        })
    } else if (process.platform == "linux") {
        steampath = path.join(process.env.HOME,".steam","steam")
    } else if (process.platform == "darwin") {
        steampath == path.join(localappdata,"Steam")
    }
}

function GetSteamDetails() {
    GetSteam3ID()
    GetSteamPath()
    
    var checksteamdetails = setInterval(() => {
        if (steam3id && steampath) {
            if (steam3id == 0) {
                GetSteam3ID()
            } else {
                clearInterval(checksteamdetails)
                SANIdle()
            }
        } else {
            GetSteam3ID()
            GetSteamPath()
        }
    }, 1000)
}

GetSteamDetails()

var xmllist
var achievementobj
var achievementarr = []

function GetHiddenDescs() {
    if (config.steam64id == "") {
        console.log("%cError fetching achievement information: No Steam64ID provided",`color: red; font-family:${font}`)
    } else {
        fetch(xmllist)
        .then(res => {
            if (res.ok) {
                if (!(res.url).includes(appid) && !(res.url).includes("/?xml=1")) {
                    console.log("%cError: Game uses Community Game Name (instead of appid)! Re-checking...","color:red")
                    xmllist = res.url + "/?xml=1"
                    GetHiddenDescs()
                } else {
                    console.log("%cUsing URL: " + xmllist,"color:limegreen")
                    xmllist = `https://steamcommunity.com/profiles/${config.steam64id}/stats/${appid}/?xml=1`
                    return res.text()
                }
            } else {
                console.log("%cError fetching achievement information for " + appid,"color:red")
            }
        })
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            var achievementdata = data.getElementsByTagName("achievement")
            for (var i = 0; i < achievementdata.length; i++) {
                achievementobj = {
                    name: achievementdata[i].children[2].textContent,
                    apiname: achievementdata[i].children[3].textContent,
                    desc: achievementdata[i].children[4].textContent
                }
                achievementarr.push(achievementobj)
            }
        })
    }
}

function GetAppIDFromRegKey() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam`], (err, result) => {
            appid = result["HKCU\\SOFTWARE\\Valve\\Steam"].values.RunningAppID.value
        })
    } else {
        var vdffile

        if (process.platform == "linux") {
            vdffile = fs.readFileSync(path.join(process.env.HOME,".steam","registry.vdf"))
        } else if (process.platform == "darwin") {
            vdffile = fs.readFileSync(path.join(localappdata,"Steam","registry.vdf"))
        }

        vdffile = vdffile.toString()
        var vdfdata = VDF.parse(vdffile)

        appid = vdfdata.Registry.HKCU.Software.Valve.Steam.RunningAppID
    }
}

function SANIdle() {
    GetSteam3ID()
    console.log("%cSteam3ID (For user logged into Steam client): " + steam3id, "color: seagreen")
    GetSteamPath()
    console.log("%cSteam installation path: " + steampath, "color: seagreen")

    function StoreLocal() {
        var apikey = config.apikey
        var steam64id = config.steam64id

        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }
        const random = getRandomInt(9999999)
        
        var gpalocal = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}&?__random=${random}`
        fetch(gpalocal).then(response => response.json()).then((data) => {
            fs.writeFileSync(path.join(sanlocalappdata,"store","local.json"), JSON.stringify(data))
        }).catch(error => {
            console.log("%cSTEAM WEB API ERROR: " + error, "color: red")
        })
    }

    var sanidle = setInterval(() => {
        GetAppIDFromRegKey()
        
        if (appid == 0 || appid == undefined) {
            // console.log("%cNo game detected", "color: darkred")
        } else {
            if (process.platform == "win32") {
                regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\Apps\\${appid}`], (err, result) => {
                    gamename = result[`HKCU\\SOFTWARE\\Valve\\Steam\\Apps\\${appid}`].values.Name.value

                    ipcRenderer.send('trackwin', gamename, appid)
                    setTimeout(() => {
                        ipcRenderer.send('trackstop')
                    }, 5000)

                    console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue")
                    document.getElementById("gamestatus").style.color = "white"
                    document.getElementById("gamestatus").innerHTML = gamename
                    ipcRenderer.send('track', gamename, trayshow, trayexit)
                })
            } else if (process.platform == "linux") {
                var regvdffile = fs.readFileSync(path.join(process.env.HOME,".steam","registry.vdf"))
                regvdffile = regvdffile.toString()
                var regvdfdata = VDF.parse(regvdffile)

                gamename = regvdfdata.Registry.HKCU.Software.Valve.Steam.apps[appid].name
                
                ipcRenderer.send('trackwin', gamename, appid)
                setTimeout(() => {
                    ipcRenderer.send('trackstop')
                }, 5000)

                console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue")
                document.getElementById("gamestatus").style.color = "white"
                document.getElementById("gamestatus").innerHTML = gamename
                ipcRenderer.send('track', gamename, trayshow, trayexit)
            } else if (process.platform == "darwin") {
                var regvdffile = fs.readFileSync(path.join(localappdata,"Steam","registry.vdf"))
                regvdffile = regvdffile.toString()
                var regvdfdata = VDF.parse(regvdffile)

                gamename = regvdfdata.Registry.HKCU.Software.Valve.Steam.apps[appid].name
                
                ipcRenderer.send('trackwin', gamename, appid)
                setTimeout(() => {
                    ipcRenderer.send('trackstop')
                }, 5000)

                console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue")
                document.getElementById("gamestatus").style.color = "white"
                document.getElementById("gamestatus").innerHTML = gamename
                ipcRenderer.send('track', gamename, trayshow, trayexit)
            }
            
            xmllist = `https://steamcommunity.com/profiles/${config.steam64id}/stats/${appid}/?xml=1`
            
            StoreLocal()
            clearInterval(sanidle)
            currgame = appid
            StartSAN()
        }
    }, 1000)
}

var percentages
var cheevnum

function CheckAchievements() {
    return new Promise((resolve, reject) => {
        var ggapfa = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&l=${lang}&format=json`
        fetch(ggapfa).then(response => response.json()).then(data => {
            percentages = data.achievementpercentages.achievements
            cheevnum = data.achievementpercentages.achievements.length
        
            if (cheevnum !== 0) {
                console.log(`%cAppID ${appid} has achievements (${cheevnum})`, "color: limegreen")
                
                GetHiddenDescs()
                
                resolve()
            } else {
                console.log(`%cAppID ${appid} has no achievements (${cheevnum})`, "color: red")
                reject()
            }
        }).catch(() => {
            if (appid !== 0) {
                console.log(`%cAppID ${appid} has no achievements (No API response received)`, "color: orange")
            }
            reject()
        })
    })
}

async function StartSAN() {
    try {
        await CheckAchievements()

        var apikey = config.apikey
        var steam64id = config.steam64id

        var lastmodified

        var gsfg = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${apikey}&appid=${appid}&l=${lang}&format=json`
        fetch(gsfg).then(response => response.json()).then(data => {
            desc = data
        })

        if (!gamestats.games[appid]) {
            gamestats.games["" + appid + ""] = {}
            gamestats.games[appid]["completed"] = false
            fs.writeFileSync(path.join(sanlocalappdata,"store","gamestats.json"), JSON.stringify(gamestats, null, 2))
        }

        function GetAchievementsFromURL() {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max)
            }
            const random = getRandomInt(9999999)

            var gpa = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}&?__random=${random}`
            fetch(gpa).then(response => response.json()).then(data => {
                var local = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","local.json")))
                var url = data

                function MainNotification(t, d, i) {
                    GetNotifyStyle()
                
                    console.log("%cMain Notification added to queue.", "color: lightskyblue")
                
                    var notifyachievement

                    if (config.allpercent == "true") {
                        notifyachievement = achievementunlocked + ` (${percent}%)`
                    } else {
                        notifyachievement = achievementunlocked
                    }

                    var notifytitle = "" + t + ""
                    var notifydesc = "" +  d + ""

                    if (notifydesc == "" || notifydesc == undefined) {
                        achievementarr.forEach(achievement => {
                            if (notifytitle == achievement.name) {
                                notifydesc = `${achievement.desc} (${secret})`
                            }
                        })
                    }

                    var notifyicon = "" + i + ""
                
                    const queueobj = {
                        type: "main",
                        width: notifywidth,
                        height: notifyheight,
                        style: config.notifystyle,
                        achievement: notifyachievement,
                        title: notifytitle,
                        desc: notifydesc,
                        icon: notifyicon,
                        screenshot: config.ssprev,
                        showss: config.screenshot,
                        pos: config.notifypos,
                        scale: config.scale,
                        percent: percent,
                        audio: document.getElementById("audio").src
                    }
                
                    queue.push(queueobj)
                
                    function CheckIfRunning() {
                        if (running == true) {
                            setTimeout(CheckIfRunning, 1000)
                            return
                        } else {
                            running = true
                            queue.shift(queueobj)
                            NotifyWinPos()
                            // notifystyle = config.notifystyle
                            if (config.screenshot == "true") {
                                // !!! Need to add alternative for Linux/MacOS
                                if (process.platform == "win32") {
                                    spawn("powershell.exe",["-Command","Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{" + configkeybind + "}');"])
                                }
                            }
                            ipcRenderer.send('notifywin', queueobj)
                            LoadSound()

                            if (config.nvda == "true") {
                                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc)
                            }

                            //if (config.screenshot == "true" && config.ssoverlay == "true") {
                            if (config.ssoverlay == "true") {
                                ipcRenderer.send('img', notifytitle, notifydesc, notifyicon, gamename, queueobj.type, percent)
                            }

                            ipcRenderer.once('notrunning', () => {
                                running = false
                                if (queue.length == 0) {
                                    console.log("%cQueue is empty.", "color: grey")
                                } else {
                                    console.log("%cQueue Position: " + queue.length, "color: grey")
                                }
                            })
                        }
                    }
                
                    CheckIfRunning()
                }

                function RareNotification(t, d, i) {
                    GetNotifyStyleRare()

                    console.log("%cRare Notification added to queue.", "color: darkorchid")

                    var notifyachievement = rareachievementunlocked + ` (${percent}%)`
                    var notifytitle = "" + t + ""
                    var notifydesc = "" + d + ""

                    if (notifydesc == "" || notifydesc == undefined) {
                        achievementarr.forEach(achievement => {
                            if (notifytitle == achievement.name) {
                                notifydesc = `${achievement.desc} (${secret})`
                            }
                        })
                    }

                    var notifyicon = "" + i + ""
                
                    const queueobj = {
                        type: "rare",
                        width: notifywidth,
                        height: notifyheight,
                        style: config.rarenotifystyle,
                        achievement: notifyachievement,
                        title: notifytitle,
                        desc: notifydesc,
                        icon: notifyicon,
                        screenshot: config.raressprev,
                        showss: config.rarescreenshot,
                        pos: config.rarenotifypos,
                        scale: config.rarescale,
                        percent: percent,
                        audio: document.getElementById("audiorare").src
                    }
                
                    queue.push(queueobj)
                
                    function CheckIfRunning() {
                        if (running == true) {
                            setTimeout(CheckIfRunning, 1000)
                            return
                        } else {
                            running = true
                            queue.shift(queueobj)
                            NotifyWinPos()
                            // notifystyle = config.rarenotifystyle
                            ipcRenderer.send('notifywin', queueobj)
                            if (config.rarescreenshot == "true") {
                                // !!! Need to add alternative for Linux/MacOS
                                if (process.platform == "win32") {
                                    spawn("powershell.exe",["-Command","Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{" + configkeybind + "}');"])
                                }
                                // } else if (process.platform == "linux") {
                                //     spawn("gnome-terminal",[`xdotool key ${configkeybind}`])
                                // }
                            }
                            LoadRareSound()

                            if (config.nvda == "true") {
                                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc)
                            }

                            // if (config.rarescreenshot == "true" && config.ssoverlay == "true") {
                            if (config.ssoverlay == "true") { 
                                ipcRenderer.send('img', notifytitle, notifydesc, notifyicon, gamename, queueobj.type, percent)
                            }

                            ipcRenderer.once('notrunning', () => {
                                running = false
                                if (queue.length == 0) {
                                    console.log("%cQueue is empty.", "color: grey")
                                } else {
                                    console.log("%cQueue Position: " + queue.length, "color: grey")
                                }
                            })
                        }
                    }
                
                    CheckIfRunning()
                }

                function MainSoundOnlyMode() {
                    var audio = document.getElementById("audio")
                    audio.play()
                }

                function RareSoundOnlyMode() {
                    var audiorare = document.getElementById("audiorare")
                    audiorare.play()
                }

                setTimeout(() =>{
                    if (config.ssprev == "true" && config.screenshot == "true") {
                        desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1280, height: 720 }}).then(sources => {
                            screenshot = sources[0].thumbnail.toDataURL()
                        })
                    } else if (config.raressprev == "true" && config.rarescreenshot == "true") {
                        desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1280, height: 720 }}).then(sources => {
                            screenshot = sources[0].thumbnail.toDataURL()
                        })
                    }
                }, 250)

                function CheckCompletionViaAPI() {
                    if (gamestats.games[appid].completed == true) {
                        console.log("%cGame already complete!", "color: orange")
                    } else {
                        var arrurl = url.playerstats.achievements
                        var acharr = []
    
                        arrurl.forEach(achievement => {
                            acharr.push(achievement.achieved)
                        })
    
                        if (acharr.every(achievement => achievement == 1) == true) {
                            console.log("%cGame Complete!", "color: yellow")
    
                            GameCompletionNotification()

                            gamestats.games[appid]["completed"] = true
                            fs.writeFileSync(path.join(sanlocalappdata,"store","gamestats.json"), JSON.stringify(gamestats, null, 2))
                        } else {
                            console.log("%cGame has not yet been completed", "color: orange")
                        }
                    }
                }

                for (var i = 0; i < url.playerstats.achievements.length; i++) {
                    if (local.playerstats.achievements[i].achieved !== url.playerstats.achievements[i].achieved) {
                        var achievementname = url.playerstats.achievements[i].name
                        var achievementdesc = url.playerstats.achievements[i].description
                        var achievementicon = desc.game.availableGameStats.achievements[i].icon

                        var apiname = url.playerstats.achievements[i].apiname
                        var percent

                        percentages.forEach(achievement => {
                            if (achievement.name == apiname) {
                                percent = achievement.percent
                                percent = Math.round(percent * 100) / 100
                            }
                        })

                        var configpercent = parseFloat(config.rarity)
                        configpercent = Math.round(configpercent * 100) / 100

                        if (percent < configpercent) {
                            if (config.soundonly == "true") {
                                RareSoundOnlyMode()
                            } else {
                                RareNotification(achievementname, achievementdesc, achievementicon)
                            }
                        } else {
                            if (config.soundonly == "true") {
                                MainSoundOnlyMode()
                            } else {
                                MainNotification(achievementname, achievementdesc, achievementicon)
                            }
                        }

                        setTimeout(() => {
                            fs.writeFileSync(path.join(sanlocalappdata,"store","local.json"), JSON.stringify(url))
                            local = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","local.json")))
                        }, 100)

                        if (config.gamecomplete == "true") {
                            setTimeout(CheckCompletionViaAPI, 500)
                        }
                    }
                }
                StartSAN()
            }).catch(error => {
                console.log("%cSTEAM WEB API ERROR: " + error, "color: red")
            })
        }

        console.log(`%cTracking changes to file: ${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, "color: seagreen")

        fs.stat(`${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, (err, stats) => {
            if (err) {
                clearInterval(checkgame)
                StartSAN()
            } else {
                lastmodified = stats.mtime
            }
        })

        var checkgame = setInterval(() => {
            GetAppIDFromRegKey()

            if (appid == 0 || appid == undefined || appid !== currgame) {
                clearInterval(checkgame)
                fs.writeFileSync(path.join(sanlocalappdata,"store","local.json"), "")
                document.getElementById("gamestatus").style.color = "red"
                document.getElementById("gamestatus").innerHTML = nogame
                ipcRenderer.send('idle', traylabel, trayshow, trayexit)
                currgame = null
                SANIdle()
            } else {
                fs.stat(`${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, (err, stats) => {
                    if (err) {
                        console.log("%cFSSTAT ERROR: " + err, "color: red")
                    } else {
                        if (stats.mtime > lastmodified) {
                            console.log("%cFile was changed!", "color: deepskyblue")
                            lastmodified = stats.mtime

                            clearInterval(checkgame)
                            GetAchievementsFromURL()
                        }
                    }
                })
            }
        }, 1000)
    } catch (err) {
        console.log("%cSTARTSAN ERROR: " + err, "color: red")

        var checkappid = setInterval(() => {
            GetAppIDFromRegKey()

            if (appid == 0 || appid == undefined || appid !== currgame) {
                clearInterval(checkappid)
                fs.writeFileSync(path.join(sanlocalappdata,"store","local.json"), "")
                document.getElementById("gamestatus").style.color = "red"
                document.getElementById("gamestatus").innerHTML = nogame
                ipcRenderer.send('idle', traylabel, trayshow, trayexit)
                currgame = null
                SANIdle()
            }
        }, 1000)
    }
}

function CheckNoSteam() {
    if (config.nosteam == "true") {
        document.getElementById("nosteambox").checked = true
    } else {
        document.getElementById("nosteambox").checked = false
    }
}

function ToggleNoSteam() {
    function RestartSteam() {
        spawn("powershell.exe",["-Command","taskkill /f /im steam.exe"])
        setTimeout(() => {
            spawn("powershell.exe",["-Command",`start '` + steampath + `/steam.exe'`])
            setTimeout(() => {
                document.getElementById("nosteambox").style.display = "flex"
                document.getElementById("nosteamloadcont").style.display = "none"
            }, 5000)
        }, 2500)
    }

    function SetSkinInReg() {
        var skinv5value = {
            'HKCU\\SOFTWARE\\Valve\\Steam': {
                'SkinV5': {
                    value: 'NoSteamNotifications',
                    type: 'REG_SZ'
                }
            }
        }
    
        regkey.putValue(skinv5value, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("%cNoSteamNotifications Steam skin set in Registry.", "color: seagreen")
                RestartSteam()
            }
        })
    }

    function RemoveSkinInReg() {
        var skinv5value = {
            'HKCU\\SOFTWARE\\Valve\\Steam': {
                'SkinV5': {
                    value: '',
                    type: 'REG_SZ'
                }
            }
        }
    
        regkey.putValue(skinv5value, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("%cDefault Steam skin set in Registry.", "color: seagreen")
                RestartSteam()
            }
        })
    }

    var execname
    var tasklist

    if (process.platform == "win32") {
        execname = "steam.exe"
        tasklist = "tasklist"
    } else if (process.platform == "linux") {
        execname = "steam"
        tasklist = "ps -A"
    } else if (process.platform == "darwin") {
        execname = "steam"
        tasklist = `ps -ax | grep ${execname}`
    }

    if (issteamrunning == true) {
        if (config.nosteam == "false") {
            document.getElementById("nosteambox").style.display = "none"
            document.getElementById("nosteamloadcont").style.display = "flex"

            config["nosteam"] = "true"
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

            if (fs.existsSync(path.join(steampath,"skins","NoSteamNotifications","resource","styles","steam.styles"))) {
                SetSkinInReg()
            } else {
                fs.mkdirSync(path.join(steampath,"skins","NoSteamNotifications","resource","styles"), { recursive: true })
                fs.copyFileSync(path.join(__dirname,"store","steam.styles"), path.join(steampath,"skins","NoSteamNotifications","resource","styles","steam.styles"))

                SetSkinInReg()
            }
        } else {
            document.getElementById("nosteambox").style.display = "none"
            document.getElementById("nosteamloadcont").style.display = "flex"
            
            config["nosteam"] = "false"
            fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

            RemoveSkinInReg()
        }

        CheckNoSteam()
    } else {
        ipcRenderer.send('steamnotrunning')
        document.getElementById("nosteambox").checked = false
    }
}

function CheckAllPercent() {
    if (config.allpercent == "true") {
        document.getElementById("allpercentbox").checked = true
    } else {
        document.getElementById("allpercentbox").checked = false
    }
}

function ToggleAllPercent() {
    if (config.allpercent == "false") {
        config["allpercent"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["allpercent"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckAllPercent()
}

function CheckNVDA() {
    if (config.nvda == "true") {
        document.getElementById("nvdabox").checked = true
    } else {
        document.getElementById("nvdabox").checked = false
    }
}

function ToggleNVDA() {
    if (config.nvda == "false") {
        config["nvda"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["nvda"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckNVDA()
}

function CheckHWA() {
    if (config.hwa == "true") {
        if (!fs.existsSync(path.join(sanlocalappdata,"store","hwa.txt"))) {
            fs.writeFileSync(path.join(sanlocalappdata,"store","hwa.txt"), "")
        }

        document.getElementById("hwabox").checked = true
    } else {
        document.getElementById("hwabox").checked = false
    }
}

function ToggleHWA() {
    if (config.hwa == "false") {
        config["hwa"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        fs.writeFileSync(path.join(sanlocalappdata,"store","hwa.txt"), "")
        ipcRenderer.send('resetcomplete')
    } else {
        config["hwa"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        fs.rmSync(path.join(sanlocalappdata,"store","hwa.txt"))
        ipcRenderer.send('resetcomplete')
    }
}

var issteamrunning

function CheckIfSteamIsRunning() {
    var execname
    var tasklist

    if (process.platform == "win32") {
        execname = "steam.exe"
        tasklist = "tasklist"
    } else if (process.platform == "linux") {
        execname = "steam"
        tasklist = "ps -A"
    } else if (process.platform == "darwin") {
        execname = "steam"
        tasklist = `ps -ax | grep ${execname}`
    }

    exec(tasklist, (err, process) => {
        var steam = process.toLowerCase().indexOf(execname)

        if (steam == -1) {
            issteamrunning = false
            console.log("%cSteam is NOT running", "color: red")
            document.getElementById("nosteamlbl").style.opacity = "0.5"

            var checkprocesses = setInterval(() => {
                exec(tasklist, (err, process) => {
                    var steamrecheck = process.toLowerCase().indexOf(execname)
                    if (steamrecheck !== -1) {
                        clearInterval(checkprocesses)
                        ipcRenderer.send('reloadapp')
                    }
                })
            }, 2000)
        } else {
            issteamrunning = true
            console.log("%cSteam is running.", "color: cyan")
            document.getElementById("nosteamlbl").style.opacity = "1"
        }
    })
}

CheckIfSteamIsRunning()

function GameCompletionNotification() {
    GetNotifyStyleRare()

    console.log("%cGame Completion Notification added to queue.", "color: yellow")

    var notifyachievement = gamecomplete
    var notifytitle = gamename
    var notifydesc = allunlocked + " (" + cheevnum + "/" + cheevnum + ")"
    var notifyicon = "../../../img/ribbon.svg"

    const queueobj = {
        type: "rare",
        width: notifywidth,
        height: notifyheight,
        style: config.rarenotifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.raressprev,
        showss: config.rarescreenshot,
        pos: config.rarenotifypos,
        scale: config.rarescale
    }

    queue.push(queueobj)

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000)
            return
        } else {
            running = true
            queue.shift(queueobj)
            NotifyWinPos()
            // notifystyle = config.rarenotifystyle
            ipcRenderer.send('notifywin', queueobj)
            var audio = document.getElementById("audiorare")
            LoadRareSound()
            audio.play()

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc)
            }

            ipcRenderer.once('notrunning', () => {
                running = false
                if (queue.length == 0) {
                    console.log("%cQueue is empty.", "color: grey")
                } else {
                    console.log("%cQueue Position: " + queue.length, "color: grey")
                }
            })
        }
    }

    CheckIfRunning()
}

function CheckIconAnimation() {
    if (config.iconanim == "true") {
        document.getElementById("iconanimation").checked = true
    } else {
        document.getElementById("iconanimation").checked = false
    }
}

CheckIconAnimation()

function ToggleIconAnimation() {
    if (config.iconanim == "false") {
        config["iconanim"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["iconanim"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckIconAnimation()
}

function CheckSSOverlay() {
    if (!config.ssoverlay) {
        config["ssoverlay"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (!config.ovpath) {
        config["ovpath"] = "" 
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    
    if (config.ovpath == "") {
        if (process.platform == "win32") {
            document.getElementById("ssoverlaypath").innerHTML = path.join(process.env.USERPROFILE,"Pictures")
        } else if (process.platform == "linux" || process.platform == "darwin") {
            document.getElementById("ssoverlaypath").innerHTML = path.join(process.env.HOME,"Pictures")
        }
    } else {
        var folder = config.ovpath

        if (folder.length > 40) {
            var shortfolder = folder.substring((folder.length - 40), folder.length)
            folder = "..." + shortfolder
        }

        document.getElementById("ssoverlaypath").innerHTML = folder
    }

    document.getElementById("ssoverlaypathcont").style.transition = "0.2s"
    document.getElementById("ssoverlaypathcont").style.animation = "fadein 0.5s forwards"
    document.getElementById("sstestcont").style.transition = "0.2s"
    document.getElementById("sstestcont").style.animation = "fadein 0.5s forwards"

    if (config.ssoverlay == "true") {
        document.getElementById("ssoverlaybox").checked = true
        document.getElementById("ssoverlaypathcont").style.display = "flex"
        document.getElementById("sstestcont").style.display = "flex"
    } else {
        document.getElementById("ssoverlaybox").checked = false
        document.getElementById("ssoverlaypathcont").style.display = "none"
        document.getElementById("sstestcont").style.display = "none"
    }
}

CheckSSOverlay()

function ToggleSSOverlay() {
    if (config.ssoverlay == "false") {
        config["ssoverlay"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["ssoverlay"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    CheckSSOverlay()
}

function SetSSOverlayPath() {
    ipcRenderer.send('ovpath')
}

var pathlocked = false

function CheckPathLock() {
    if (pathlocked == true) {
        document.getElementById("ssoverlaypath").style.pointerEvents = "none"
        document.getElementById("ssoverlaybox").disabled = true
    } else {
        document.getElementById("ssoverlaypath").style.pointerEvents = "auto"
        document.getElementById("ssoverlaybox").disabled = false
    }
}

ipcRenderer.on('lockpath', () => {
    pathlocked = true
    CheckPathLock()
})

ipcRenderer.on('unlockpath', (event, folder) => {
    pathlocked = false
    CheckPathLock()

    config["ovpath"] = folder
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

    var folderpath = folder

    if (folderpath == "") {
        if (process.platform == "win32") {
            folderpath = path.join(process.env.USERPROFILE,"Pictures")
        } else if (process.platform == "linux" || process.platform == "darwin") {
            folderpath = path.join(process.env.HOME,"Pictures")
        }
    }

    // !!! Change to use text-overflow in "path" element instead...
    if (folderpath.length > 40) {
        var shortfolder = folderpath.substring((folderpath.length - 40), folderpath.length)
        folderpath = "..." + shortfolder
    }

    document.getElementById("ssoverlaypath").innerHTML = folderpath
})

function CheckGameCompletion() {
    if (!config.gamecomplete) {
        config["gamecomplete"] = "true" 
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (config.gamecomplete == "true") {
        document.getElementById("gamecompletionbox").checked = true
    } else {
        document.getElementById("gamecompletionbox").checked = false
    }
}

CheckGameCompletion()

function ToggleGameCompletion() {
    if (config.gamecomplete == "false") {
        config["gamecomplete"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["gamecomplete"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckGameCompletion()
}

function CheckCustomPos() {
    if (config.custompos == "false") {
        document.getElementById("dragposbox").checked = false
        document.getElementById("dragposbtn").style.display = "none"
        document.getElementById("notifypositioncont").style.opacity = "1"
        document.getElementById("notifypositioncont").style.pointerEvents = "auto"
    } else {
        document.getElementById("dragposbox").checked = true
        document.getElementById("dragposbtn").style.display = "flex"
        document.getElementById("notifypositioncont").style.opacity = "0.5"
        document.getElementById("notifypositioncont").style.pointerEvents = "none"
    }
}

CheckCustomPos()

function ToggleCustomPos() {
    if (config.custompos == "false") {
        config["custompos"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["custompos"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckCustomPos()
}

function CheckCustomPosRare() {
    if (config.rarecustompos == "false") {
        document.getElementById("dragposboxrare").checked = false
        document.getElementById("dragposbtnrare").style.display = "none"
        document.getElementById("notifypositioncontrare").style.opacity = "1"
        document.getElementById("notifypositioncontrare").style.pointerEvents = "auto"
    } else {
        document.getElementById("dragposboxrare").checked = true
        document.getElementById("dragposbtnrare").style.display = "flex"
        document.getElementById("notifypositioncontrare").style.opacity = "0.5"
        document.getElementById("notifypositioncontrare").style.pointerEvents = "none"
    }
}

CheckCustomPosRare()

function ToggleCustomPosRare() {
    if (config.rarecustompos == "false") {
        config["rarecustompos"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["rarecustompos"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }
    CheckCustomPosRare()
}

var postype
var style

function SetCustomPos() {
    postype = "main"
    style = document.getElementById("customiserstyledropdown").value
    
    document.getElementById("dragposbox").style.pointerEvents = "none"
    document.getElementById("dragposbtn").style.pointerEvents = "none"
    document.getElementById("dragposbtn").innerHTML = "..."
    document.getElementById("dragposbtn").style.animation = "bluetowhite 0.5s alternate infinite forwards"
    
    document.getElementById("dragposboxrare").style.pointerEvents = "none"
    document.getElementById("dragposbtnrare").style.pointerEvents = "none"
    document.getElementById("dragposbtnrare").innerHTML = settingpos
    document.getElementById("dragposbtnrare").style.animation = "bluetowhite 0.5s alternate infinite forwards"

    document.getElementById("recenter").style.display = "flex"
    
    ipcRenderer.send('setcustompos', postype, style)
}

function SetCustomPosRare() {
    postype = "rare"
    style = document.getElementById("customiserstyledropdownrare").value
    
    document.getElementById("dragposboxrare").style.pointerEvents = "none"
    document.getElementById("dragposbtnrare").style.pointerEvents = "none"
    document.getElementById("dragposbtnrare").innerHTML = "..."
    document.getElementById("dragposbtnrare").style.animation = "bluetowhite 0.5s alternate infinite forwards"
    
    document.getElementById("dragposbox").style.pointerEvents = "none"
    document.getElementById("dragposbtn").style.pointerEvents = "none"
    document.getElementById("dragposbtn").innerHTML = settingposrare
    document.getElementById("dragposbtn").style.animation = "bluetowhite 0.5s alternate infinite forwards"

    document.getElementById("recenterrare").style.display = "flex"

    ipcRenderer.send('setcustompos', postype, style)
}

ipcRenderer.on('dragwinclose', () => {
    document.getElementById("dragposbox").style.pointerEvents = "auto"
    document.getElementById("dragposbtn").style.pointerEvents = "auto"
    document.getElementById("dragposbtn").innerHTML = custompos
    document.getElementById("dragposbtn").style.animation = "none"

    document.getElementById("dragposboxrare").style.pointerEvents = "auto"
    document.getElementById("dragposbtnrare").style.pointerEvents = "auto"
    document.getElementById("dragposbtnrare").innerHTML = custompos
    document.getElementById("dragposbtnrare").style.animation = "none"

    document.getElementById("recenter").style.display = "none"
    document.getElementById("recenterrare").style.display = "none"
})

function RecenterDragWin() {
    ipcRenderer.send('recenter')
}

ipcRenderer.on('saveposmain', (event, x, y) => {
    config["x"] = x
    config["y"] = y
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
})

ipcRenderer.on('saveposrare', (event, x, y) => {
    config["rarex"] = x
    config["rarey"] = y
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
})

if (config.fontsize == undefined) {
    document.getElementById("fontsizeslider").value = "100"
    document.getElementById("fontsizevalue").innerHTML = "100%"
} else {
    document.getElementById("fontsizeslider").value = config.fontsize
    document.getElementById("fontsizevalue").innerHTML = config.fontsize + "%"
}

if (config.rarefontsize == undefined) {
    document.getElementById("fontsizesliderrare").value = "100"
    document.getElementById("fontsizevaluerare").innerHTML = "100%"
} else {
    document.getElementById("fontsizesliderrare").value = config.rarefontsize
    document.getElementById("fontsizevaluerare").innerHTML = config.rarefontsize + "%"
}

function SetFontSize() {
    config["fontsize"] = document.getElementById("fontsizeslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pause").src = "./icon/pause_white.svg"
    document.getElementById("webview").reload()
}

function SetFontSizeRare() {
    config["rarefontsize"] = document.getElementById("fontsizesliderrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    paused = false
    document.getElementById("pauserare").src = "./icon/pause_white.svg"
    document.getElementById("webviewrare").reload()
}

if (config.opacity == undefined) {
    document.getElementById("opacityslider").value = "100"
    document.getElementById("opacityvalue").innerHTML = document.getElementById("opacityslider").value
} else {
    document.getElementById("opacityslider").value = config.opacity
    document.getElementById("opacityvalue").innerHTML = document.getElementById("opacityslider").value
}

function SetOpacity() {
    config["opacity"] = document.getElementById("opacityslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

function ResetIcon() {
    document.getElementById("iconselecticon").src = "./img/sanlogosquare.svg"

    config["icon"] = ""
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

    GetNotifyStyle()
}

function ResetIconRare() {
    document.getElementById("rareiconselecticon").src = "./img/sanlogosquare.svg"

    config["rareicon"] = ""
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

    GetNotifyStyleRare()
}

function CheckGameIcon() {
    if (config.gameicon == undefined) {
        config["gameicon"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (config.gameicon == "true") {
        document.getElementById("gameiconbox").checked = true
        document.getElementById("iconselectcont").style.pointerEvents = "none"
        document.getElementById("iconselectcont").style.filter = "brightness(50%)"
    } else {
        document.getElementById("gameiconbox").checked = false
        document.getElementById("iconselectcont").style.pointerEvents = "auto"
        document.getElementById("iconselectcont").style.filter = "brightness(100%)"
    }
}

CheckGameIcon()

function ToggleGameIcon() {
    if (config.gameicon == "false") {
        config["gameicon"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
        
        GetNotifyStyle()
    } else {
        config["gameicon"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

        GetNotifyStyle()
    }
    CheckGameIcon()
}

function CheckGameIconRare() {
    if (config.raregameicon == undefined) {
        config["raregameicon"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (config.raregameicon == "true") {
        document.getElementById("gameiconboxrare").checked = true
        document.getElementById("rareiconselectcont").style.pointerEvents = "none"
        document.getElementById("rareiconselectcont").style.filter = "brightness(50%)"
    } else {
        document.getElementById("gameiconboxrare").checked = false
        document.getElementById("rareiconselectcont").style.pointerEvents = "auto"
        document.getElementById("rareiconselectcont").style.filter = "brightness(100%)"
    }
}

CheckGameIconRare()

function ToggleGameIconRare() {
    if (config.raregameicon == "false") {
        config["raregameicon"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

        GetNotifyStyleRare()
    } else {
        config["raregameicon"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))

        GetNotifyStyleRare()
    }
    CheckGameIconRare()
}

function ShowOverlayTest(type) {
    ipcRenderer.send("overlaytest", type)
}

document.getElementById("ssmaintestbtn").style.display = "flex"
document.getElementById("ssmainbtn").style.display = "flex"
document.getElementById("ssraretestbtn").style.display = "none"
document.getElementById("ssrarebtn").style.display = "none"

function SSHover() {
    document.getElementById("ssmainimg").src = "./icon/replay.svg"
    document.getElementById("ssmainimg").style.filter = "brightness(0%)"
    document.getElementById("ssrareimg").src = "./icon/replay.svg"
    document.getElementById("ssrareimg").style.filter = "brightness(0%)"
}

function SSOut() {
    document.getElementById("ssmainimg").src = "./icon/emoji_events_gold.png"
    document.getElementById("ssmainimg").style.filter = "brightness(100%)"
    document.getElementById("ssrareimg").src = "./icon/emoji_events_purple.png"
    document.getElementById("ssrareimg").style.filter = "brightness(100%)"
}

function ToggleSSTestType() {
    if (document.getElementById("ssmaintestbtn").style.display == "flex") {
        document.getElementById("ssmaintestbtn").style.display = "none"
        document.getElementById("ssmainbtn").style.display = "none"
        document.getElementById("ssraretestbtn").style.display = "flex"
        document.getElementById("ssrarebtn").style.display = "flex"
    } else {
        document.getElementById("ssmaintestbtn").style.display = "flex"
        document.getElementById("ssmainbtn").style.display = "flex"
        document.getElementById("ssraretestbtn").style.display = "none"
        document.getElementById("ssrarebtn").style.display = "none"
    }
}

function CheckScreenshotPreview() {
    if (config.ssprev == undefined) {
        config["ssprev"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (config.ssprev == "true") {
        document.getElementById("previewcheckbox").checked = true
    } else {
        document.getElementById("previewcheckbox").checked = false
    }
}

CheckScreenshotPreview()

function ToggleScreenshotPreview() {
    if (config.ssprev == "true") {
        config["ssprev"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["ssprev"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    GetNotifyStyle()
    CheckScreenshotPreview()
}

function CheckScreenshotPreviewRare() {
    if (config.raressprev == undefined) {
        config["raressprev"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    if (config.raressprev == "true") {
        document.getElementById("previewcheckboxrare").checked = true
    } else {
        document.getElementById("previewcheckboxrare").checked = false
    }
}

CheckScreenshotPreviewRare()

function ToggleScreenshotPreviewRare() {
    if (config.raressprev == "true") {
        config["raressprev"] = "false"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    } else {
        config["raressprev"] = "true"
        fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    }

    GetNotifyStyleRare()
    CheckScreenshotPreviewRare()
}

function CheckBeta() {
    const version = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","version.json")))

    if (version.beta == undefined) {
        version["beta"] = false
        version["betaversion"] = 0.1
        fs.writeFileSync(path.join(sanlocalappdata,"store","version.json"), JSON.stringify(version, null, 2))
    }

    if (version.beta == true) {
        document.getElementById("joinbetabtn").innerHTML = betaleave
    } else {
        document.getElementById("joinbetabtn").innerHTML = betajoin
    }
}

if (document.getElementById("settingscont").style.display = "none") {
    document.getElementById("betadialog").style.display = "none"
    document.getElementById("betaerror").style.display = "none"
}

function ToggleBeta() {
    const version = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","version.json")))

    function ShowBetaDialog() {
        document.getElementById("betadialog").style.display = "flex"
        document.getElementById("betadialog").style.animation = "pop 0.5s forwards"
        document.getElementById("betatext").style.animation = "bounce 1s ease-in-out infinite forwards"
        document.getElementById("overlay").style.zIndex = "19"
        document.getElementById("leavebetacont").style.display = "none"
    }

    function ShowLeaveBetaDialog() {
        document.getElementById("betadialog").style.display = "flex"
        document.getElementById("betadialog").style.animation = "pop 0.5s forwards"
        document.getElementById("betatext").style.display = "none"
        document.getElementById("sanbetalogo").style.display = "none"
        document.getElementById("betatagline").style.display = "none"
        document.getElementById("betadesccont").style.display = "none"
        document.getElementById("betawarn").style.display = "none"
        document.getElementById("betabtns").style.display = "none"
        document.getElementById("overlay").style.zIndex = "19"

        document.getElementById("betadialog").style.width = "50%"
        document.getElementById("betadialog").style.height = "30%"
        document.getElementById("betadialog").style.justifyContent = "center"
        document.getElementById("betadialog").style.alignItems = "center"
        document.getElementById("leavebetacont").style.display = "flex"
    }

    if (version.beta == false) {
        ShowBetaDialog()
    } else {
        ShowLeaveBetaDialog()
    }
}

function BetaAccept() {
    const version = JSON.parse(fs.readFileSync(path.join(sanlocalappdata,"store","version.json")))

    document.getElementById("betadialog").style.animation = "poprev 0.2s forwards"
    setTimeout(() => {
        document.getElementById("betadialog").style.display = "none"
    }, 200)

    fetch("https://www.github.com/steamachievementnotifier/steamachievementnotifier/").then(res => {
        if (res.ok == true) {
            return `Connected! (Status Code: ${res.status})`
        } else {
            return Promise.reject()
        }
    }).then(status => {
        console.log(`%c${status}`, "color: lime")

        version["beta"] = true
        version["betaversion"] = 0
        fs.writeFileSync(path.join(sanlocalappdata,"store","version.json"), JSON.stringify(version, null, 4))

        ipcRenderer.send('resetcomplete')
    }).catch(err => {
        console.log(`%cDisconnected! (Reason: "${err}")`, "color:red")
        document.getElementById("betaerror").style.display = "flex"
        document.getElementById("betaerrortext").innerHTML = `🛑 ${betaerrortext}`
        document.getElementById("betaerrorsub").innerHTML = betaerrorsub
        document.getElementById("betaerror").style.animation = "pop 0.5s forwards"
    })
}

function BetaCancel() {
    document.getElementById("betadialog").style.animation = "poprev 0.2s forwards"
    document.getElementById("overlay").style.zIndex = "3"
    setTimeout(() => {
        document.getElementById("betadialog").style.display = "none"
    }, 200)
}

function LeaveBeta() {
    version["beta"] = false
    version["betaversion"] = 0
    fs.writeFileSync(path.join(sanlocalappdata,"store","version.json"), JSON.stringify(version, null, 4))
    ipcRenderer.send('resetcomplete')
}

function CloseBetaError() {
    document.getElementById("betaerror").style.animation = "poprev 0.2s forwards"
    document.getElementById("overlay").style.zIndex = "3"
    setTimeout(() => {
        document.getElementById("betaerror").style.display = "none"
    }, 200)
}

if (config.brightness == undefined) {
    // Opacity is calculated backwards for linear-gradient in the notifications - i.e. 0 is 100% opacity, 1 is 0%
    config["brightness"] = "0"
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

if (config.rarebrightness == undefined) {
    // Opacity is calculated backwards for linear-gradient in the notifications - i.e. 0 is 100% opacity, 1 is 0%
    config["rarebrightness"] = "0"
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
}

function GetGameArtBrightness() {
    document.getElementById("brightnessslider").value = config.brightness
    document.getElementById("brightnessvalue").innerHTML = `${(config.brightness * 100 - 100).toString().replace('-','')}%`
}

GetGameArtBrightness()

function SetGameArtBrightness() {
    config["brightness"] = document.getElementById("brightnessslider").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    ReplayNotification()
}

function GetGameArtBrightnessRare() {
    document.getElementById("brightnesssliderrare").value = config.rarebrightness
    document.getElementById("brightnessvaluerare").innerHTML = `${(config.rarebrightness * 100 - 100).toString().replace('-','')}%`
}

GetGameArtBrightnessRare()

function SetGameArtBrightnessRare() {
    config["rarebrightness"] = document.getElementById("brightnesssliderrare").value
    fs.writeFileSync(path.join(sanlocalappdata,"store","config.json"), JSON.stringify(config, null, 2))
    ReplayRareNotification()
}

ipcRenderer.on('displayupdated', (event, w, h, sf) => {
    console.log(`%cPrimary Display metrics updated!\n`, "color: mediumpurple", { resolution: `${w} x ${h}`, scaleFactor: `${sf * 100}%` })
})

ipcRenderer.on('warnmsg', (e, m) => {
    console.log(`%c${m}`, "color: orange")
})

ipcRenderer.on('errormsg', (e, m) => {
    console.log(`%c${m}`, "color: red")
})