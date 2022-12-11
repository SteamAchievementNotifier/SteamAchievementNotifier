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

var borderradius = config.rareroundness + "px"
var ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px"
var ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px"

var solid = "background: " + colour1
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)"
var imgbackground = "url('" + img + "')"

var scale = config.rarescale
document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)"

if (config.iconanim == "false") {
    document.getElementById("outline").style.display = "none"
    document.getElementById("outlinecont").style.display = "none"
    document.getElementById("outlineinnercont").style.display = "none"
    document.getElementById("trophy").style.boxShadow = "none"
}

var bgtype = config.rarebgtype

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("innercont").style = solid
    document.getElementById("innercont").style.borderRadius = borderradius
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    document.getElementById("trophy").src = icon
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("circle").style.background = colour2
    document.getElementById("innercircle1").style.background = colour1
    document.getElementById("innercircle2").style.background = colour2
    document.getElementById("innercircle3").style.background = colour1
    document.getElementById("innercircle4").style.background = colour2

    document.getElementById("circle").style.borderRadius = borderradius
    document.getElementById("innercircle1").style.borderRadius = borderradius
    document.getElementById("innercircle2").style.borderRadius = borderradius
    document.getElementById("innercircle3").style.borderRadius = borderradius
    document.getElementById("innercircle4").style.borderRadius = borderradius
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("innercont").style = background
    document.getElementById("innercont").style.borderRadius = borderradius
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    document.getElementById("trophy").src = icon
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("circle").style.background = colour2
    document.getElementById("innercircle1").style.background = colour1
    document.getElementById("innercircle2").style.background = colour2
    document.getElementById("innercircle3").style.background = colour1
    document.getElementById("innercircle4").style.background = colour2

    document.getElementById("circle").style.borderRadius = borderradius
    document.getElementById("innercircle1").style.borderRadius = borderradius
    document.getElementById("innercircle2").style.borderRadius = borderradius
    document.getElementById("innercircle3").style.borderRadius = borderradius
    document.getElementById("innercircle4").style.borderRadius = borderradius
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour
    document.getElementById("innercont").style.backgroundImage = imgbackground
    document.getElementById("innercont").style.backgroundPosition = "center"
    document.getElementById("innercont").style.backgroundRepeat = "no-repeat"
    document.getElementById("innercont").style.backgroundSize = "314px"
    document.getElementById("innercont").style.borderRadius = borderradius
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    document.getElementById("trophy").src = icon
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("circle").style.background = "rgba(0,0,0,0.2)"
    document.getElementById("innercircle1").style.background = "transparent"
    document.getElementById("innercircle2").style.background = "rgba(0,0,0,0.2)"
    document.getElementById("innercircle3").style.background = "transparent"
    document.getElementById("innercircle4").style.background = "rgba(0,0,0,0.2)"

    document.getElementById("circle").style.borderRadius = borderradius
    document.getElementById("innercircle1").style.borderRadius = borderradius
    document.getElementById("innercircle2").style.borderRadius = borderradius
    document.getElementById("innercircle3").style.borderRadius = borderradius
    document.getElementById("innercircle4").style.borderRadius = borderradius
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
    document.getElementById("innercont").style.backgroundImage = gameartbg
    document.getElementById("innercont").style.backgroundPosition = "center"
    document.getElementById("innercont").style.backgroundRepeat = "no-repeat"
    document.getElementById("innercont").style.backgroundSize = "314px"
    document.getElementById("innercont").style.borderRadius = borderradius
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius
    document.getElementById("trophy").src = icon
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px"
    document.getElementById("circle").style.background = "rgba(0,0,0,0.2)"
    document.getElementById("innercircle1").style.background = "transparent"
    document.getElementById("innercircle2").style.background = "rgba(0,0,0,0.2)"
    document.getElementById("innercircle3").style.background = "transparent"
    document.getElementById("innercircle4").style.background = "rgba(0,0,0,0.2)"

    document.getElementById("circle").style.borderRadius = borderradius
    document.getElementById("innercircle1").style.borderRadius = borderradius
    document.getElementById("innercircle2").style.borderRadius = borderradius
    document.getElementById("innercircle3").style.borderRadius = borderradius
    document.getElementById("innercircle4").style.borderRadius = borderradius
}

if (screenshot == "true" && config.rarescreenshot == "true") {
    if (notifyicon == "test") {
        document.getElementById("screenshot").src = "../../../img/santextlogobg.png"
    } else {
        // document.getElementById("screenshot").src = "../../../img/ss.png"
        document.getElementById("screenshot").src = path.join(localappdata,`Steam Achievement Notifier (${appdir})`,"img","ss.png")
    }
    document.getElementById("cont").style.height = "219px"
    document.getElementById("screenshotcont").style.display = "flex"
} else {
    document.getElementById("cont").style.height = "50px"
    document.getElementById("screenshotcont").style.display = "none"
}

if (config.raretextout != "none") {
    document.getElementById("cont").style.textShadow = `${textoutline.repeat(31)} 0 0 1px ${config.raretextout}`
    document.getElementById("text").style.padding = "0 2px"
    document.getElementById("gametitle").style.padding = "0 2px"
    document.getElementById("desc").style.padding = "0 2px"
}

var achievement = notifyachievement
var title = notifytitle
var desc = notifydesc

document.getElementById("text").innerHTML = achievement
document.getElementById("gametitle").innerHTML = title
document.getElementById("desc").innerHTML = desc

document.body.style.fontSize = 11 * config.rarefontsize * 0.01 + "px"
document.getElementById("texttrophy").style.width = 12 * config.rarefontsize * 0.01 + "px"
document.getElementById("texttrophy").style.height = 12 * config.rarefontsize * 0.01 + "px"

var pause = 1000

function PlayNotification(add) {
    document.getElementById("innercont").style.animation = "grow 3s ease-in-out forwards"
    document.getElementById("screenshot").style.animation = "width 3s ease-in-out forwards"
    document.getElementById("textcont").style.animation = "fadein 1s 2.5s forwards"
    document.getElementById("circle").style.animation = "growcircle 1s forwards"
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards"
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards"
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards"
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards"
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards"

    document.getElementById("trophy").addEventListener('animationend', (event) => {
        if (event.animationName == "trophy") {
            if (screenshot == "true" && config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s"
                document.getElementById("innercont").style.borderRadius = ssborderradius
            }
        }
    })

    document.getElementById("textcont").addEventListener('animationend', (event) => {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards"
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards"
        }
    })

    document.getElementById("innercont").addEventListener('animationend', (event) => {
        if (event.animationName == "animpause") {
            document.getElementById("textcont").style.animation = "slideup 0.5s forwards"
        } else if (event.animationName == "shrink") {
            setTimeout(() => {
                ipcRenderer.sendToHost('reload', "reload")
            }, 1000)
        }
    })

    document.getElementById("textcont").addEventListener('animationend', (event) => {
        if (event.animationName == "slideup") {
            document.getElementById("desccont").style.animation = "slideuprev 0.5s forwards"
        }
    })

    document.getElementById("desccont").addEventListener('animationend', (event) => {
        if (event.animationName == "slideuprev") {
            document.getElementById("desccont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards"
        }
    })

    document.getElementById("desccont").addEventListener('animationend', (event) => {
        if (event.animationName == "animpause1") {
            document.getElementById("desccont").style.animation = "fadein 1s linear reverse backwards"
            document.getElementById("innercont").style.animation = "shrink 3s ease-in-out forwards"
            document.getElementById("screenshot").style.transform = "scaleX(100%)"
            document.getElementById("screenshot").style.animation = "widthrev 1s 0.6s ease-in-out forwards"

            document.getElementById("screenshot").addEventListener('animationstart', (event) => {
                if (event.animationName == "widthrev") {
                    if (screenshot == "true" && config.rarescreenshot == "true") {
                        document.getElementById("innercont").style.borderRadius = borderradius
                    }
                }
            })
        }
    })
}

function PlayFastNotification(add) {
    document.getElementById("innercont").style.animation = "grow 2s ease-in-out forwards"
    document.getElementById("screenshot").style.animation = "width 2s ease-in-out forwards"
    document.getElementById("textcont").style.animation = "fadein 1s 1.5s forwards"
    document.getElementById("circle").style.animation = "growcircle 1s forwards"
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards"
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards"
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards"
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards"
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards"

    document.getElementById("trophy").addEventListener('animationstart', (event) => {
        if (event.animationName == "trophy") {
            if (screenshot == "true" && config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s"
                document.getElementById("innercont").style.borderRadius = ssborderradius
            }
        }
    })

    document.getElementById("innercont").addEventListener('animationend', (event) => {
        if (event.animationName == "shrink") {
            ipcRenderer.sendToHost('reload', "reload")
        }
    })

    document.getElementById("textcont").addEventListener('animationend', (event) => {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards"
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards" 
        } else if (event.animationName == "animpause1") {
            document.getElementById("innercont").style.animation = "shrink 2s ease-in-out forwards"
            document.getElementById("textcont").style.animation = "slideup 0.5s forwards"
            document.getElementById("screenshot").style.transform = "scaleX(100%)"
            document.getElementById("screenshot").style.animation = "widthrev 0.6s 0.4s ease-in-out forwards"

            document.getElementById("screenshot").addEventListener('animationstart', (event) => {
                if (event.animationName == "widthrev") {
                    if (screenshot == "true" && config.rarescreenshot == "true") {
                        document.getElementById("innercont").style.borderRadius = borderradius
                    }
                }
            })
        }
    })
}

function PlaySuperFastNotification(add) {
    document.getElementById("innercont").style.animation = "grow 1s ease-in-out forwards"
    document.getElementById("screenshot").style.animation = "width 1s ease-in-out forwards"
    document.getElementById("textcont").style.animation = "fadein 0.5s 1s forwards"
    document.getElementById("circle").style.animation = "growcircle 1s forwards"
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards"
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards"
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards"
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards"
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards"

    document.getElementById("innercircle1").addEventListener('animationstart', (event) => {
        if (event.animationName == "circle1") {
            if (screenshot == "true" && config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s"
                document.getElementById("innercont").style.borderRadius = ssborderradius
            }
        }
    })

    document.getElementById("textcont").addEventListener('animationend', (event) => {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards"
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards"
        } else if (event.animationName == "animpause1") {
            document.getElementById("cont").style.opacity = 0
            document.getElementById("cont").style.transition = "0.2s"
            setTimeout(() => {
                ipcRenderer.sendToHost('reload', "reload")
            }, 200)
        }
    })
}

var displaytime = config.raredisplaytime

if (displaytime == 15) {
    PlayNotification(2.75)
} else if (displaytime == 14) {
    PlayNotification(2.25)
} else if (displaytime == 13) {
    PlayNotification(1.75)
} else if (displaytime == 12) {
    PlayNotification(1.25)
} else if (displaytime == 11) {
    PlayNotification(0.75)
} else if (displaytime == 10) {
    PlayNotification(0.25)
} else if (displaytime == 9) {
    PlayNotification(-0.25)
} else if (displaytime == 8) {
    PlayNotification(-0.75)
} else if (displaytime == 7) {
    PlayFastNotification(1.5)
} else if (displaytime == 6) {
    PlayFastNotification(0.5)
} else if (displaytime == 5) {
    PlayFastNotification(-0.5)
} else if (displaytime == 4) {
    PlaySuperFastNotification(1.5)
} else if (displaytime == 3) {
    PlaySuperFastNotification(0.5)
} else if (displaytime == 2) {
    PlaySuperFastNotification(-0.5)
}

})