const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store","config.json")));

var colour1 = config.rarecolour1;
var colour2 = config.rarecolour2;
var textcolour = config.raretextcolour;
var img;

if (config.rareimg == "default") {
    img = "../../../img/santextlogobg.png";
} else {
    img = config.rareimg;
}

var icon = "../../../img/sanlogosquare.svg";

var borderradius;
var ssborderradius;
var ssimgborderradius;

if (config.rarenotifypos == "topleft") {
    borderradius = config.rareroundness + "px";
    ssborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
    ssimgborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
  } else if (config.rarenotifypos == "bottomleft") {
    borderradius = config.rareroundness + "px";
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
  
    document.getElementById("screenshotcont").style.order = "-1";
  } else if (config.rarenotifypos == "topcenter") {
    borderradius = config.rareroundness + "px";
    ssborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
    ssimgborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
} else if (config.rarenotifypos == "topright") {
    borderradius = config.rareroundness + "px";
    ssborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
    ssimgborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
} else if (config.rarenotifypos == "bottomright") {
    borderradius = config.rareroundness + "px";
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";

    document.getElementById("screenshotcont").style.order = "-1";
  } else if (config.rarenotifypos == "bottomcenter") {
    borderradius = config.rareroundness + "px";
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";

    document.getElementById("screenshotcont").style.order = "-1";
}

var solid = "background: " + colour1;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.rarescale;
if (scale > 100) {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + (100 + scale * 0.1) + "%, " + (100 + scale * 0.1) + "%)";
} else {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)";
}

var bgtype = config.rarebgtype;

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = solid;
    if (config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px";
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style = background;
    if (config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px";
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("notifycont").style.backgroundImage = imgbackground;
    document.getElementById("notifycont").style.backgroundPosition = "center";
    document.getElementById("notifycont").style.backgroundRepeat = "no-repeat";
    document.getElementById("notifycont").style.backgroundSize = "300px";
    if (config.rarescreenshot == "true") {
        document.getElementById("notifycont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("notifycont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness + "px";
}

if (config.rarescreenshot == "true") {
    document.getElementById("cont").style.height = "219px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("cont").style.height = "50px";
    document.getElementById("screenshotcont").style.display = "none";
}

var title = "Steam Achievement Notifier";
var desc = "Rare Achievement Unlocked! (0.0%)";

if (title.length > 29) {
    var shorttitle = title.substring(0, 29)
    title = shorttitle + "...";
}

document.getElementById("textinner").innerHTML = title;
document.getElementById("desc").innerHTML = desc;

document.getElementById("notifycont").style.animation = "none";

var pause = 0;

var direction = "left";

if (config.rarenotifypos == "topright" || config.rarenotifypos == "topcenter" || config.rarenotifypos == "bottomcenter" || config.rarenotifypos == "bottomright") {
    direction = "left";
} else {
    direction = "right";
}

function PlayNotification(add) {
    if (config.rarenotifypos == "topcenter" || config.rarenotifypos == "topleft" || config.rarenotifypos == "topright") {
        document.getElementById("screenshot").style.animation = "revealdown 0.3s 0.3s forwards";
    } else {
        document.getElementById("screenshot").style.animation = "revealup 0.3s 0.3s forwards";
    }

    document.getElementById("notifycont").style.animation = "fadein" + direction + " 0.2s linear forwards";
    document.getElementById("notifycont").style.borderRadius = borderradius;

    document.getElementById("screenshot").addEventListener('animationstart', function(event) {
        if (event.animationName == "revealdown" || event.animationName == "revealup") {
            document.getElementById("notifycont").style.transition = "0.2s";
            document.getElementById("notifycont").style.borderRadius = ssborderradius;
        }
    });

    document.getElementById("notifycont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein" + direction) {
            document.getElementById("notifycont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("screenshot").style.animation = "fadeinrev" + direction + " 0.2s linear forwards";
            document.getElementById("notifycont").style.animation = "fadeinrev" + direction + " 0.2s linear forwards";
        }
    });
}

var displaytime = config.raredisplaytime;

if (displaytime == 15) {
    PlayNotification(14);
} else if (displaytime == 14) {
    PlayNotification(13);
} else if (displaytime == 13) {
    PlayNotification(12);
} else if (displaytime == 12) {
    PlayNotification(11);
} else if (displaytime == 11) {
    PlayNotification(10);
} else if (displaytime == 10) {
    PlayNotification(9);
} else if (displaytime == 9) {
    PlayNotification(8);
} else if (displaytime == 8) {
    PlayNotification(7);
} else if (displaytime == 7) {
    PlayNotification(6);
} else if (displaytime == 6) {
    PlayNotification(5);
} else if (displaytime == 5) {
    PlayNotification(4);
} else if (displaytime == 4) {
    PlayNotification(3);
} else if (displaytime == 3) {
    PlayNotification(2);
} else if (displaytime == 2) {
    PlayNotification(1);
}

ipcRenderer.on('pausenotify', function() {
    document.getElementById("notifycont").style.animationPlayState = "paused";
    document.getElementById("screenshot").style.animationPlayState = "paused";
});

ipcRenderer.on('playnotify', function() {
    document.getElementById("notifycont").style.animationPlayState = "running";
    document.getElementById("screenshot").style.animationPlayState = "running";
});