const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store","config.json")));

var colour1 = config.colour1;
var colour2 = config.colour2;
var textcolour = config.textcolour;
var img;

if (config.img == "default") {
    img = "../../../img/santextlogobg.png";
} else {
    img = config.img;
}

var icon = "../../../img/sanlogosquare.svg";

var solid = "background: " + colour1;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.scale;
if (scale > 100) {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + (100 + scale * 0.1) + "%, " + (100 + scale * 0.1) + "%)";
} else {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)";
}

var bgtype = config.bgtype;

var borderradius = config.roundness + "px";
var ssborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
var ssimgborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = solid;
    if (config.screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.iconroundness * 1.6) + "px";
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = background;
    if (config.screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.iconroundness * 1.6) + "px";
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style.backgroundImage = imgbackground;
    document.getElementById("notifycont").style.backgroundPosition = "center";
    document.getElementById("notifycont").style.backgroundRepeat = "no-repeat";
    document.getElementById("notifycont").style.backgroundSize = "364px";
    if (config.screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.iconroundness * 1.6) + "px";
}

if (config.screenshot == "true") {
    document.getElementById("cont").style.height = "279px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("cont").style.height = "110px";
    document.getElementById("screenshotcont").style.display = "none";
}

var title = "Steam Achievement Notifier";
var desc = "Your notifications are working correctly";

if (title.length > 32) {
    var shorttitle = title.substring(0, 32)
    title = shorttitle + "...";
}

if (desc.length > 75) {
    var shortdesc = desc.substring(0, 75)
    desc = shortdesc + "...";
}

document.getElementById("game").innerHTML = title;
document.getElementById("desc").innerHTML = desc;

var pause = 0;
var direction;

if (config.notifypos == "topleft") {
    direction = "left";
} else if (config.notifypos == "topcenter") {
    direction = "down";
} else if (config.notifypos == "topright") {
    direction = "right";
} else if (config.notifypos == "bottomleft") {
    direction = "left";
} else if (config.notifypos == "bottomcenter") {
    direction = "up";
} else if (config.notifypos == "bottomright") {
    direction = "right";
}

function PlayNotification(add) {
    document.getElementById("screenshotcont").style.animation = "slidein" + direction + " 1s linear forwards";
    document.getElementById("notifycont").style.animation = "slidein" + direction + " 1s linear forwards";
    
    document.getElementById("notifycont").addEventListener('animationend', function(event) {
        if (event.animationName == "slidein" + direction) {
            document.getElementById("screenshotcont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
            document.getElementById("notifycont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("screenshotcont").style.animation = "slideout" + direction + " 1s linear reverse backwards";
            document.getElementById("notifycont").style.animation = "slideout" + direction + " 1s linear reverse backwards";
        }
    });
}

var displaytime = config.displaytime;

if (displaytime == 15) {
    PlayNotification(13)
} else if (displaytime == 14) {
    PlayNotification(12)
} else if (displaytime == 13) {
    PlayNotification(11)
} else if (displaytime == 12) {
    PlayNotification(10)
} else if (displaytime == 11) {
    PlayNotification(9)
} else if (displaytime == 10) {
    PlayNotification(8)
} else if (displaytime == 9) {
    PlayNotification(7)
} else if (displaytime == 8) {
    PlayNotification(6)
} else if (displaytime == 7) {
    PlayNotification(5)
} else if (displaytime == 6) {
    PlayNotification(4)
} else if (displaytime == 5) {
    PlayNotification(3)
} else if (displaytime == 4) {
    PlayNotification(2)
} else if (displaytime == 3) {
    PlayNotification(1)
} else if (displaytime == 2) {
    PlayNotification(0)
}

ipcRenderer.on('pausenotify', function() {
    document.getElementById("notifycont").style.animationPlayState = "paused";
    document.getElementById("screenshotcont").style.animationPlayState = "paused";
});

ipcRenderer.on('playnotify', function() {
    document.getElementById("notifycont").style.animationPlayState = "running";
    document.getElementById("screenshotcont").style.animationPlayState = "running";
});