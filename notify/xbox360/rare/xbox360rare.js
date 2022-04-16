const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store","config.json")));

ipcRenderer.on('notifymain', function(event, notifyachievement, notifytitle, notifydesc, notifyicon, screenshot, percent, audio) {

document.getElementById("audio").src = audio;
document.getElementById("audio").play();

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
var percentage;

if (notifyicon == "test") {
    percentage = "0.0";
    icon = "../../../img/sanlogosquare.svg";
} else {
    percentage = percent;
    icon = notifyicon;
}

var borderradius = config.rareroundness + "px";
var ssborderradius;
var ssimgborderradius;

if (config.rarenotifypos == "topleft") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px ";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px " + " 0px 0px";
} else if (config.rarenotifypos == "bottomleft") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
} else if (config.rarenotifypos == "topcenter") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
} else if (config.rarenotifypos == "topright") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
} else if (config.rarenotifypos == "bottomright") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
} else if (config.rarenotifypos == "bottomcenter") {
    ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
    ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";
}

var solid = "background: " + colour1;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.rarescale;
document.getElementById("maincont").style.transform = "scale(" + scale + "%, " + scale + "%)";

if (config.iconanim == "false") {
    document.getElementById("outline").style.display = "none";
    document.getElementById("outlinecont").style.display = "none";
    document.getElementById("outlineinnercont").style.display = "none";
    document.getElementById("circle").style.boxShadow = "none";
}

var bgtype = config.rarebgtype;

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("cont").style = solid;
    document.getElementById("semicircle1").style.background = colour2;
    if (config.rarescreenshot == "true") {
        document.getElementById("cont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("cont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("logo").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("innercont").style.borderRadius = "" + config.rareiconroundness * 1.5 + "px";
    document.getElementById("circle").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("semicircle1").style.borderRadius = "" + config.rareiconroundness * 1.25 + "px 0 0 0";
    document.getElementById("semicircle2").style.borderRadius = "0 0 0 " + config.rareiconroundness * 1.25 + "px";
    document.getElementById("semicircle3").style.borderRadius = "0 " + config.rareiconroundness * 1.25 + "px 0 0";
    document.getElementById("semicircle4").style.borderRadius = "0 0 " + config.rareiconroundness * 1.25 + "px 0";
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("cont").style = background;
    document.getElementById("semicircle1").style.background = colour2;
    if (config.rarescreenshot == "true") {
        document.getElementById("cont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("cont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("logo").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("innercont").style.borderRadius = "" + config.rareiconroundness * 1.5 + "px";
    document.getElementById("circle").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("semicircle1").style.borderRadius = "" + config.rareiconroundness * 1.25 + "px 0 0 0";
    document.getElementById("semicircle2").style.borderRadius = "0 0 0 " + config.rareiconroundness * 1.25 + "px";
    document.getElementById("semicircle3").style.borderRadius = "0 " + config.rareiconroundness * 1.25 + "px 0 0";
    document.getElementById("semicircle4").style.borderRadius = "0 0 " + config.rareiconroundness * 1.25 + "px 0";
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("semicircle1").style.background = colour2;
    document.getElementById("cont").style.backgroundImage = imgbackground;
    document.getElementById("cont").style.backgroundPosition = "center";
    document.getElementById("cont").style.backgroundRepeat = "no-repeat";
    document.getElementById("cont").style.backgroundSize = "300px";
    if (config.rarescreenshot == "true") {
        document.getElementById("cont").style.borderRadius = ssborderradius;
        document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    } else {
        document.getElementById("cont").style.borderRadius = borderradius;
    }
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("logo").style.borderRadius = "" + config.rareiconroundness * 0.75 + "px";
    document.getElementById("innercont").style.borderRadius = "" + config.rareiconroundness * 1.5 + "px";
    document.getElementById("circle").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("semicircle1").style.borderRadius = "" + config.rareiconroundness * 1.25 + "px 0 0 0";
    document.getElementById("semicircle2").style.borderRadius = "0 0 0 " + config.rareiconroundness * 1.25 + "px";
    document.getElementById("semicircle3").style.borderRadius = "0 " + config.rareiconroundness * 1.25 + "px 0 0";
    document.getElementById("semicircle4").style.borderRadius = "0 0 " + config.rareiconroundness * 1.25 + "px 0";
}

if (screenshot == "true") {
    if (notifyicon == "test") {
        document.getElementById("screenshot").src = "../../../img/santextlogobg.png";
    } else {
        document.getElementById("screenshot").src = "../../../img/ss.png";
    }
    document.getElementById("maincont").style.height = "219px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("maincont").style.height = "50px";
    document.getElementById("screenshotcont").style.display = "none";
}

var title = notifytitle;
var desc = " - " + notifydesc;

if (title.length > 43) {
    var shorttitle = title.substring(0, 43)
    title = shorttitle + "...";
}

if (desc.length > 43) {
    var shortdesc = desc.substring(0, 43)
    desc = shortdesc + "...";
}

if (percentage == undefined) {
    document.getElementById("title").innerHTML = title;
} else {
    document.getElementById("title").innerHTML = `(${percentage}%) ` + title;
}
document.getElementById("desc").innerHTML = desc;

var time = 0.2;

function PlayNotification(add) {
    document.getElementById("innercont").style.display = "flex";

    document.getElementById("cont").style.animation = "growright " + time + "s ease-in-out forwards"
    document.getElementById("innercont").style.animation = "grow " + time + "s ease-in-out forwards"
    document.getElementById("textcont").style.animation = "fadein " + time / 2 + "s " + time / 2 + "s ease-in-out forwards"
    document.getElementById("screenshot").style.animation = "growrightss " + time + "s forwards"

    document.getElementById("logo").style.animation = "growalt 2s infinite forwards"
    document.getElementById("icon").style.animation = "growalt 2s 1s infinite forwards"
        
    document.getElementById("cont").addEventListener('animationend', function(event) {
        if (event.animationName == "growright") {
            document.getElementById("cont").style.animation = "animpause " + time * add * 10 + "s forwards"
        } else if (event.animationName == "animpause") {
            document.getElementById("textcont").style.animation = "fadeout " + time + "s ease-in-out forwards"
            document.getElementById("cont").style.animation = "growoutcont " + time + "s " + time * 1.5 + "s forwards"
            document.getElementById("innercont").style.animation = "growout " + time + "s " + time + "s forwards"
            document.getElementById("screenshot").style.animation = "shrinkleftss " + time + "s " + time * 1.5 + "s forwards"
        } else if (event.animationName == "growoutcont") {
            ipcRenderer.send('notifywinstop')
        }
    })
}

var displaytime = config.raredisplaytime;

if (displaytime == 15) {
    PlayNotification(7.5)
} else if (displaytime == 14) {
    PlayNotification(7)
} else if (displaytime == 13) {
    PlayNotification(6.5)
} else if (displaytime == 12) {
    PlayNotification(6)
} else if (displaytime == 11) {
    PlayNotification(5.5)
} else if (displaytime == 10) {
    PlayNotification(5)
} else if (displaytime == 9) {
    PlayNotification(4.5)
} else if (displaytime == 8) {
    PlayNotification(4)
} else if (displaytime == 7) {
    PlayNotification(3.5)
} else if (displaytime == 6) {
    PlayNotification(3)
} else if (displaytime == 5) {
    PlayNotification(2.5)
} else if (displaytime == 4) {
    PlayNotification(2)
} else if (displaytime == 3) {
    PlayNotification(1.5)
} else if (displaytime == 2) {
    PlayNotification(1)
}

});