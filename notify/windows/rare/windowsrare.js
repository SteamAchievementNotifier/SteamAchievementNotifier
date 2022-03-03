const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store","config.json")));

ipcRenderer.on('notifymain', function(event, notifyachievement, notifytitle, notifydesc, notifyicon, screenshot) {

var colour1 = config.rarecolour1;
var colour2 = config.rarecolour2;
var textcolour = config.raretextcolour;
var img;

if (config.rareimg == "default") {
    img = "../../../img/santextlogobg.png";
} else {
    img = config.rareimg;
}

var icon;

if (notifyicon == "test") {
    icon = "../../../img/sanlogosquare.svg";
} else {
    icon = notifyicon;
}

var solid = "background: " + colour1;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.rarescale;
document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)";

var borderradius = config.rareroundness + "px";
var ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
var ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";

var bgtype = config.rarebgtype;

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = solid;
    if (screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.rareiconroundness * 1.6) + "px";
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = background;
    if (screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.rareiconroundness * 1.6) + "px";
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style.backgroundImage = imgbackground;
    document.getElementById("notifycont").style.backgroundPosition = "center";
    document.getElementById("notifycont").style.backgroundRepeat = "no-repeat";
    document.getElementById("notifycont").style.backgroundSize = "364px";
    if (screenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + (config.rareiconroundness * 1.6) + "px";
}

if (screenshot == "true") {
    if (notifyicon == "test") {
        document.getElementById("screenshot").src = "../../../img/santextlogobg.png";
    } else {
        document.getElementById("screenshot").src = "../../../img/ss.png";
    }
    document.getElementById("cont").style.height = "279px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("cont").style.height = "110px";
    document.getElementById("screenshotcont").style.display = "none";
}

var title = notifytitle;
var desc = notifydesc;

if (desc.length > 75) {
    var shortdesc = desc.substring(0, 75)
    desc = shortdesc + "...";
}

document.getElementById("game").innerHTML = title;
document.getElementById("desc").innerHTML = desc;

var pause = 0;
var direction;

if (config.rarenotifypos == "topleft") {
    direction = "left";
} else if (config.rarenotifypos == "topcenter") {
    direction = "down";
} else if (config.rarenotifypos == "topright") {
    direction = "right";
} else if (config.rarenotifypos == "bottomleft") {
    direction = "left";
} else if (config.rarenotifypos == "bottomcenter") {
    direction = "up";
} else if (config.rarenotifypos == "bottomright") {
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

var displaytime = config.raredisplaytime;

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

});