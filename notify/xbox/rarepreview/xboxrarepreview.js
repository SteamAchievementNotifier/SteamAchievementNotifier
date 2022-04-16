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

var borderradius = config.rareroundness + "px";
var ssborderradius = "0px 0px " + config.rareroundness + "px " + config.rareroundness + "px";
var ssimgborderradius = config.rareroundness + "px " + config.rareroundness + "px 0px 0px";

var solid = "background: " + colour1;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.rarescale;
if (scale > 100) {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + (100 + scale * 0.1) + "%, " + (100 + scale * 0.1) + "%)";
} else {
    document.getElementById("cont").style.transform = "translate(-50%, -50%) scale(" + scale + "%, " + scale + "%)";
}

if (config.iconanim == "false") {
    document.getElementById("outline").style.display = "none";
    document.getElementById("outlinecont").style.display = "none";
    document.getElementById("outlineinnercont").style.display = "none";
    document.getElementById("trophy").style.boxShadow = "none";
}

var bgtype = config.rarebgtype;

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("innercont").style = solid;
    document.getElementById("innercont").style.borderRadius = borderradius;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("trophy").src = icon;
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("circle").style.background = colour2;
    document.getElementById("innercircle1").style.background = colour1;
    document.getElementById("innercircle2").style.background = colour2;
    document.getElementById("innercircle3").style.background = colour1;
    document.getElementById("innercircle4").style.background = colour2;

    document.getElementById("circle").style.borderRadius = borderradius;
    document.getElementById("innercircle1").style.borderRadius = borderradius;
    document.getElementById("innercircle2").style.borderRadius = borderradius;
    document.getElementById("innercircle3").style.borderRadius = borderradius;
    document.getElementById("innercircle4").style.borderRadius = borderradius;
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("innercont").style = background;
    document.getElementById("innercont").style.borderRadius = borderradius;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("trophy").src = icon;
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("circle").style.background = colour2;
    document.getElementById("innercircle1").style.background = colour1;
    document.getElementById("innercircle2").style.background = colour2;
    document.getElementById("innercircle3").style.background = colour1;
    document.getElementById("innercircle4").style.background = colour2;

    document.getElementById("circle").style.borderRadius = borderradius;
    document.getElementById("innercircle1").style.borderRadius = borderradius;
    document.getElementById("innercircle2").style.borderRadius = borderradius;
    document.getElementById("innercircle3").style.borderRadius = borderradius;
    document.getElementById("innercircle4").style.borderRadius = borderradius;
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("innercont").style.backgroundImage = imgbackground;
    document.getElementById("innercont").style.backgroundPosition = "center";
    document.getElementById("innercont").style.backgroundRepeat = "no-repeat";
    document.getElementById("innercont").style.backgroundSize = "314px";
    document.getElementById("innercont").style.borderRadius = borderradius;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("trophy").src = icon;
    document.getElementById("trophy").style.borderRadius = "" + config.rareiconroundness + "px";
    document.getElementById("circle").style.background = "rgba(0,0,0,0.2)";
    document.getElementById("innercircle1").style.background = "transparent";
    document.getElementById("innercircle2").style.background = "rgba(0,0,0,0.2)";
    document.getElementById("innercircle3").style.background = "transparent";
    document.getElementById("innercircle4").style.background = "rgba(0,0,0,0.2)";

    document.getElementById("circle").style.borderRadius = borderradius;
    document.getElementById("innercircle1").style.borderRadius = borderradius;
    document.getElementById("innercircle2").style.borderRadius = borderradius;
    document.getElementById("innercircle3").style.borderRadius = borderradius;
    document.getElementById("innercircle4").style.borderRadius = borderradius;
}

if (config.rarescreenshot == "true") {
    document.getElementById("cont").style.height = "219px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("cont").style.height = "50px";
    document.getElementById("screenshotcont").style.display = "none";
}

var text = "Rare Achievement Unlocked! (0.0%)";
var title = "<img id='texttrophy' src='../../../img/sanlogotrophy.svg' width='12px' height='12px'> " + "Steam Achievement Notifier";
var desc = "Your notifications are working correctly";

if (title.length > 121) {
    var shorttitle = title.substring(0, 121);
    title = shorttitle + "...";
}

if (desc.length > 77) {
    var shortdesc = desc.substring(0, 77);
    desc = shortdesc + "...";
}

document.getElementById("text").innerHTML = text;
document.getElementById("game").innerHTML = title;
document.getElementById("desc").innerHTML = desc;

var pause = 1000;

function PlayNotification(add) {
    document.getElementById("innercont").style.animation = "grow 3s ease-in-out forwards";
    document.getElementById("screenshot").style.animation = "width 3s ease-in-out forwards";
    document.getElementById("textcont").style.animation = "fadein 1s 2.5s forwards";
    document.getElementById("circle").style.animation = "growcircle 1s forwards";
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards";
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards";
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards";
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards";
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards";

    document.getElementById("trophy").addEventListener('animationend', function(event) {
        if (event.animationName == "trophy") {
            if (config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s";
                document.getElementById("innercont").style.borderRadius = ssborderradius;
            }
        }
    });

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards";
        }
    });

    document.getElementById("innercont").addEventListener('animationend', function(event) {
        if (event.animationName == "animpause") {
            document.getElementById("textcont").style.animation = "slideup 0.5s forwards";
        }
    });

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "slideup") {
            document.getElementById("desccont").style.animation = "slideuprev 0.5s forwards";
        }
    });

    document.getElementById("desccont").addEventListener('animationend', function(event) {
        if (event.animationName == "slideuprev") {
            document.getElementById("desccont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards";
        }
    });

    document.getElementById("desccont").addEventListener('animationend', function(event) {
        if (event.animationName == "animpause1") {
            document.getElementById("desccont").style.animation = "fadein 1s linear reverse backwards";
            document.getElementById("innercont").style.animation = "grow 3s ease-in-out reverse backwards";
            document.getElementById("screenshot").style.transform = "scaleX(100%)";
            document.getElementById("screenshot").style.animation = "widthrev 1s 0.6s ease-in-out forwards";

            document.getElementById("screenshot").addEventListener('animationstart', function(event) {
                if (event.animationName == "widthrev") {
                    if (config.rarescreenshot == "true") {
                        document.getElementById("innercont").style.borderRadius = borderradius;
                    }
                }
            });
        }
    });
}

function PlayFastNotification(add) {
    document.getElementById("innercont").style.animation = "grow 2s ease-in-out forwards";
    document.getElementById("screenshot").style.animation = "width 2s ease-in-out forwards";
    document.getElementById("textcont").style.animation = "fadein 1s 1.5s forwards";
    document.getElementById("circle").style.animation = "growcircle 1s forwards";
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards";
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards";
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards";
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards";
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards";

    document.getElementById("trophy").addEventListener('animationstart', function(event) {
        if (event.animationName == "trophy") {
            if (config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s";
                document.getElementById("innercont").style.borderRadius = ssborderradius;
            }
        }
    });

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards"; 
        } else if (event.animationName == "animpause1") {
            document.getElementById("innercont").style.animation = "grow 2s reverse ease-in-out forwards";
            document.getElementById("textcont").style.animation = "slideup 0.5s forwards";
            document.getElementById("screenshot").style.transform = "scaleX(100%)";
            document.getElementById("screenshot").style.animation = "widthrev 0.6s 0.4s ease-in-out forwards";

            document.getElementById("screenshot").addEventListener('animationstart', function(event) {
                if (event.animationName == "widthrev") {
                    if (config.rarescreenshot == "true") {
                        document.getElementById("innercont").style.borderRadius = borderradius;
                    }
                }
            });
        }
    });
}

function PlaySuperFastNotification(add) {
    document.getElementById("innercont").style.animation = "grow 1s ease-in-out forwards";
    document.getElementById("screenshot").style.animation = "width 1s ease-in-out forwards";
    document.getElementById("textcont").style.animation = "fadein 0.5s 1s forwards";
    document.getElementById("circle").style.animation = "growcircle 1s forwards";
    document.getElementById("innercircle1").style.animation = "circle1 0.5s 0.4s forwards";
    document.getElementById("innercircle2").style.animation = "circle2 0.5s 0.6s forwards";
    document.getElementById("innercircle3").style.animation = "circle3 0.5s 0.8s forwards";
    document.getElementById("innercircle4").style.animation = "circle4 0.5s 1s forwards";
    document.getElementById("trophy").style.animation = "trophy 1s 1s forwards";

    document.getElementById("innercircle1").addEventListener('animationstart', function(event) {
        if (event.animationName == "circle1") {
            if (config.rarescreenshot == "true") {
                document.getElementById("innercont").style.transition = "0.5s";
                document.getElementById("innercont").style.borderRadius = ssborderradius;
            }
        }
    });

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("innercont").style.animation = "animpause " + ((pause * 0.001) + add) + "s linear forwards";
            document.getElementById("textcont").style.animation = "animpause1 " + ((pause * 0.001) + add) + "s linear forwards";
        } else if (event.animationName == "animpause1") {
            document.getElementById("cont").style.opacity = 0;
            document.getElementById("cont").style.transition = "0.2s";
        }
    });
}

var displaytime = config.raredisplaytime;

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

ipcRenderer.on('pausenotify', function() {
    document.getElementById("innercont").style.animationPlayState = "paused";
    document.getElementById("circle").style.animationPlayState = "paused";
    document.getElementById("trophy").style.animationPlayState = "paused";
    document.getElementById("innercircle1").style.animationPlayState = "paused";
    document.getElementById("innercircle2").style.animationPlayState = "paused";
    document.getElementById("innercircle3").style.animationPlayState = "paused";
    document.getElementById("innercircle4").style.animationPlayState = "paused";
    document.getElementById("textcont").style.animationPlayState = "paused";
    document.getElementById("desccont").style.animationPlayState = "paused";
    document.getElementById("screenshot").style.animationPlayState = "paused";
});

ipcRenderer.on('playnotify', function() {
    document.getElementById("innercont").style.animationPlayState = "running";
    document.getElementById("circle").style.animationPlayState = "running";
    document.getElementById("trophy").style.animationPlayState = "running";
    document.getElementById("innercircle1").style.animationPlayState = "running";
    document.getElementById("innercircle2").style.animationPlayState = "running";
    document.getElementById("innercircle3").style.animationPlayState = "running";
    document.getElementById("innercircle4").style.animationPlayState = "running";
    document.getElementById("textcont").style.animationPlayState = "running";
    document.getElementById("desccont").style.animationPlayState = "running";
    document.getElementById("screenshot").style.animationPlayState = "running";
});