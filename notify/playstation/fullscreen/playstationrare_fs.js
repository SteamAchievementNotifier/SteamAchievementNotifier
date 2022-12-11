const { ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')
const appdir = "V1.8"

var localappdata

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA)
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share")
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support")
}

const config = JSON.parse(fs.readFileSync(path.join(localappdata,`Steam Achievement Notifier (${appdir})`,"store","config.json")))

document.body.style.opacity = config.opacity * 0.01

ipcRenderer.on('play', (event, notifyachievement, notifytitle, notifydesc, notifyicon, screenshot, percent, audio, gameicon, gameartimg) => {

document.getElementById("audio").src = audio
document.getElementById("audio").volume = (config.rarevolume * 10) / 100
document.getElementById("audio").play()

var colour1 = config.rarecolour1
var colour2 = config.rarecolour2
var textcolour = config.raretextcolour
var textoutline = `0 0 1px ${config.raretextout}, `

var img

if (config.rareimg == "default") {
    img = "../../../img/santextlogobg.png"
} else {
    img = config.rareimg
}

var icon

if (notifyicon == "test") {
    icon = "../../../img/sanlogosquare.svg"
} else {
    icon = notifyicon
}

var righticon

if (config.raregameicon == "true") {
    if (notifyicon == "test") {
        righticon = "../../../img/gameicon.png"
    } else {
        righticon = gameicon
    }
} else {
    if (config.rareicon == "" || config.rareicon == undefined) {
        righticon = "../../../img/sanlogo.svg"
    } else {
        righticon = config.rareicon
    }
}

var borderradius
var ssborderradius
var ssimgborderradius

if (config.rarenotifypos == "topleft") {
    borderradius = "0px " + config.rareroundness + "px " + config.rareroundness + "px 0px"
    ssborderradius = "0px " + config.rareroundness + "px 0px 0px"
    ssimgborderradius = "0px 0px " + config.rareroundness + "px 0px"
} else if (config.rarenotifypos == "bottomleft") {
    borderradius = "0px " + config.rareroundness + "px " + config.rareroundness + "px 0px"
    ssborderradius = "0px 0px " + config.rareroundness + "px 0px"
    ssimgborderradius = "0px " + config.rareroundness + "px 0px 0px"
} else if (config.rarenotifypos == "topcenter") {
    borderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px"
    ssborderradius = "0px 0px 0px 0px"
    ssimgborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px"
} else if (config.rarenotifypos == "topright") {
    borderradius = config.rareroundness + "px 0px 0px " + config.rareroundness + "px"
    ssborderradius = config.rareroundness + "px 0px 0px 0px"
    ssimgborderradius = "0px 0px 0px " + config.rareroundness + "px"
} else if (config.rarenotifypos == "bottomright") {
    borderradius = config.rareroundness + "px 0px 0px " + config.rareroundness + "px"
    ssborderradius = "0px 0px 0px " + config.rareroundness + "px"
    ssimgborderradius = config.rareroundness + "px 0px 0px 0px"
} else if (config.rarenotifypos == "bottomcenter") {
    borderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px"
    ssborderradius = "0px 0px 0px 0px"
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px"
}

var solid = "background: " + colour1
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)"
var imgbackground = "url('" + img + "')"

var scale = config.rarescale
document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)"

if (config.iconanim == "false") {
    document.getElementById("outline").style.display = "none"
    document.getElementById("outlinecont").style.display = "none"
    document.getElementById("outlineinnercont").style.display = "none"
    document.getElementById("icon").style.boxShadow = "none"
}

var bgtype = config.rarebgtype

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("notifycont").style = solid
    if (screenshot == "true" && config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius
    }
    document.getElementById("icon").src = icon
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("righticon").src = righticon
    document.getElementById("righticon").style.borderRadius = "" + config.rareiconroundness + "px"
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("notifycont").style = background
    if (screenshot == "true" && config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius
    }
    document.getElementById("icon").src = icon
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("righticon").src = righticon
    document.getElementById("righticon").style.borderRadius = "" + config.rareiconroundness + "px"
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("notifycont").style.backgroundImage = imgbackground
    document.getElementById("notifycont").style.backgroundPosition = "center"
    document.getElementById("notifycont").style.backgroundRepeat = "no-repeat"
    document.getElementById("notifycont").style.backgroundSize = "300px"
    if (screenshot == "true" && config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius
    }
    document.getElementById("icon").src = icon
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("righticon").src = righticon
    document.getElementById("righticon").style.borderRadius = "" + config.rareiconroundness + "px"
} else if (bgtype == "game") {
    var arr = [
        "220",
        "620",
        "4000",
        "22300",
        "257510",
        "275850",
        "361420",
        "412020",
        "499520",
        "582010",
        "648800",
        "782330",
        "1091500",
        "1659040",
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    var gamearturl = `https://cdn.cloudflare.steamstatic.com/steam/apps/${arr[getRandomInt(arr.length)]}/library_hero.jpg`

    var gameartbg

    if (notifyicon == "test") {
        gameartbg = `linear-gradient(rgba(0,0,0,${config.rarebrightness}), rgba(0,0,0,${config.rarebrightness})), url("${gamearturl}")`
    } else {
        gameartbg = `linear-gradient(rgba(0,0,0,${config.rarebrightness}), rgba(0,0,0,${config.rarebrightness})), url("${gameartimg}")`
    }

    document.getElementById("cont").style.color = textcolour
    document.getElementById("notifycont").style.backgroundImage = gameartbg
    document.getElementById("notifycont").style.backgroundPosition = "center"
    document.getElementById("notifycont").style.backgroundRepeat = "no-repeat"
    document.getElementById("notifycont").style.backgroundSize = "300px"
    if (screenshot == "true" && config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius
    }
    document.getElementById("icon").src = icon
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("righticon").src = righticon
    document.getElementById("righticon").style.borderRadius = "" + config.rareiconroundness + "px"
}

if (screenshot == "true" && config.rarescreenshot == "true") {
    if (notifyicon == "test") {
        document.getElementById("screenshot").src = "../../../img/santextlogobg.png"
    } else {
        document.getElementById("screenshot").src = path.join(localappdata,`Steam Achievement Notifier (${appdir})`,"img","ss.png")
    }
    document.getElementById("cont").style.height = "224px"
    document.getElementById("screenshotcont").style.display = "flex"
} else {
    document.getElementById("cont").style.height = "55px"
    document.getElementById("screenshotcont").style.display = "none"
}

if (config.raretextout != "none") {
    document.getElementById("cont").style.textShadow = `${textoutline.repeat(31)} 0 0 1px ${config.raretextout}`
    document.getElementById("text").style.padding = "0 2px"
    document.getElementById("game").style.padding = "0 2px"
}

var text = notifytitle
var title = notifydesc

document.getElementById("notifycont").style.animation = "none"

document.getElementById("text").innerHTML = text
document.getElementById("game").innerHTML = '<img id="trophyicon" src="../../../img/psgold.png" width="10px">' + title

document.getElementById("text").style.fontSize = 12.7 * config.rarefontsize * 0.01 + "px"
document.getElementById("game").style.fontSize = 12 * config.rarefontsize * 0.01 + "px"
document.getElementById("trophyicon").style.width = 10 * config.rarefontsize * 0.01 + "px"
document.getElementById("trophyicon").style.height = 10 * config.rarefontsize * 0.01 + "px"

var direction = "left"

if (config.rarenotifypos == "topleft") {
    direction = "left"
} else if (config.rarenotifypos == "bottomleft") {
    direction = "left"
} else if (config.rarenotifypos == "topcenter") {
    direction = "down"
} else if (config.rarenotifypos == "bottomcenter") {
    direction = "up"
} else if (config.rarenotifypos == "topright") {
    direction = "right"
} else if (config.rarenotifypos == "bottomright") {
    direction = "right"
}

if (config.rarenotifypos == "topleft") {
    document.getElementById("cont").style.justifyContent = "flex-start"
    document.getElementById("cont").style.alignItems = "flex-start"
    document.getElementById("notifycont").style.justifyContent = "flex-end"
    document.getElementById("textcont").style.alignItems = "flex-start"
    document.getElementById("icon").style.order = "1"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "3"
    document.getElementById("screenshotcont").style.order = "2"
    document.getElementById("notifycont").style.order = "1"

    document.getElementById("outlinecont").style.left = "12px"
} else if (config.rarenotifypos == "bottomleft") {
    document.getElementById("cont").style.justifyContent = "flex-end"
    document.getElementById("cont").style.alignItems = "flex-start"
    document.getElementById("notifycont").style.justifyContent = "flex-end"
    document.getElementById("textcont").style.alignItems = "flex-start"
    document.getElementById("icon").style.order = "1"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "3"
    document.getElementById("screenshotcont").style.order = "1"
    document.getElementById("notifycont").style.order = "2"

    document.getElementById("outlinecont").style.left = "12px"
} else if (config.rarenotifypos == "topright") {
    document.getElementById("cont").style.justifyContent = "flex-start"
    document.getElementById("cont").style.alignItems = "flex-end"
    document.getElementById("notifycont").style.justifyContent = "flex-start"
    document.getElementById("textcont").style.alignItems = "flex-end"
    document.getElementById("icon").style.order = "3"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "1"
    document.getElementById("screenshotcont").style.order = "2"
    document.getElementById("notifycont").style.order = "1"

    document.getElementById("outlinecont").style.left = "243px"
} else if (config.rarenotifypos == "bottomright") {
    document.getElementById("cont").style.justifyContent = "flex-end"
    document.getElementById("cont").style.alignItems = "flex-end"
    document.getElementById("notifycont").style.justifyContent = "flex-start"
    document.getElementById("textcont").style.alignItems = "flex-end"
    document.getElementById("icon").style.order = "3"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "1"
    document.getElementById("screenshotcont").style.order = "1"
    document.getElementById("notifycont").style.order = "2"

    document.getElementById("outlinecont").style.left = "243px"
} else if (config.rarenotifypos == "topcenter") {
    document.getElementById("cont").style.justifyContent = "flex-start"
    document.getElementById("cont").style.alignItems = "center"
    document.getElementById("notifycont").style.justifyContent = "center"
    document.getElementById("textcont").style.alignItems = "flex-start"
    document.getElementById("icon").style.order = "1"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "3"
    document.getElementById("screenshotcont").style.order = "2"
    document.getElementById("notifycont").style.order = "1"

    document.getElementById("outlinecont").style.left = "12px"
} else if (config.rarenotifypos == "bottomcenter") {
    document.getElementById("cont").style.justifyContent = "flex-end"
    document.getElementById("cont").style.alignItems = "center"
    document.getElementById("notifycont").style.justifyContent = "center"
    document.getElementById("textcont").style.alignItems = "flex-start"
    document.getElementById("icon").style.order = "1"
    document.getElementById("textcont").style.order = "2"
    document.getElementById("righticon").style.order = "3"
    document.getElementById("screenshotcont").style.order = "1"
    document.getElementById("notifycont").style.order = "2"

    document.getElementById("outlinecont").style.left = "12px"
}

var pause = 0

function PlayNotification(add) {
    if (config.rarenotifypos == "topcenter" || config.rarenotifypos == "topleft" || config.rarenotifypos == "topright") {
        document.getElementById("screenshot").style.animation = "revealdown 0.3s 0.3s forwards"
    } else {
        document.getElementById("screenshot").style.animation = "revealup 0.3s 0.3s forwards"
    }

    document.getElementById("notifycont").style.animation = "slidein" + direction + " 0.5s linear forwards"
    document.getElementById("shadowdiv").style.animation = "slidein" + direction + " 0.5s linear forwards"
    document.getElementById("notifycont").style.borderRadius = borderradius

    document.getElementById("screenshot").addEventListener('animationstart', (event) => {
        if (event.animationName == "revealdown" || event.animationName == "revealup") {
            document.getElementById("notifycont").style.transition = "0.2s"
            document.getElementById("notifycont").style.borderRadius = ssborderradius
        }
    })

    document.getElementById("notifycont").addEventListener('animationend', (event) => {
        if (event.animationName == "slidein" + direction) {
            document.getElementById("notifycont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards"
            document.getElementById("shadowdiv").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards"
        } else if (event.animationName == "animpause") {
            if (config.rarenotifypos == "topcenter" || config.rarenotifypos == "topleft" || config.rarenotifypos == "topright") {
                document.getElementById("screenshot").style.animation = "revealdownrev 0.3s forwards"
                document.getElementById("notifycont").style.transition = "0.2s"
                document.getElementById("notifycont").style.borderRadius = borderradius
            } else {
                document.getElementById("screenshot").style.animation = "revealuprev 0.3s forwards"
                document.getElementById("notifycont").style.transition = "0.2s"
                document.getElementById("notifycont").style.borderRadius = borderradius
            }
            document.getElementById("notifycont").style.animation = "slideout" + direction + " 0.5s linear reverse backwards"
            document.getElementById("shadowdiv").style.animation = "slideout" + direction + " 0.5s linear reverse backwards"
        } else if (event.animationName == "slideout" + direction) {
            ipcRenderer.sendToHost('reload', "reload")
        }
    })
}

var displaytime = config.raredisplaytime

if (displaytime == 15) {
    PlayNotification(14)
} else if (displaytime == 14) {
    PlayNotification(13)
} else if (displaytime == 13) {
    PlayNotification(12)
} else if (displaytime == 12) {
    PlayNotification(11)
} else if (displaytime == 11) {
    PlayNotification(10)
} else if (displaytime == 10) {
    PlayNotification(9)
} else if (displaytime == 9) {
    PlayNotification(8)
} else if (displaytime == 8) {
    PlayNotification(7)
} else if (displaytime == 7) {
    PlayNotification(6)
} else if (displaytime == 6) {
    PlayNotification(5)
} else if (displaytime == 5) {
    PlayNotification(4)
} else if (displaytime == 4) {
    PlayNotification(3)
} else if (displaytime == 3) {
    PlayNotification(2)
} else if (displaytime == 2) {
    PlayNotification(1)
}

})