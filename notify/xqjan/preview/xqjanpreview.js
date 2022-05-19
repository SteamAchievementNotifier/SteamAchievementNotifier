const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

var localappdata;

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA);
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share");
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support");
}

const config = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json")));

document.body.style.opacity = config.opacity * 0.01;

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

var logo;

if (config.icon == "" || config.icon == undefined) {
    logo = "../../../img/steamlogonew.svg";
} else {
    logo = config.icon;
}

var borderradius = config.roundness + "px ";
var ssborderradius;
var ssimgborderradius;

if (config.notifypos == "topleft") {
    ssimgborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px ";
    ssborderradius = config.roundness + "px " + config.roundness + "px " + " 0px 0px";
} else if (config.notifypos == "bottomleft") {
    ssborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
    ssimgborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";
} else if (config.notifypos == "topcenter") {
    ssimgborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
    ssborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";
} else if (config.notifypos == "topright") {
    ssimgborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
    ssborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";
} else if (config.notifypos == "bottomright") {
    ssborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
    ssimgborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";
} else if (config.notifypos == "bottomcenter") {
    ssborderradius = "0px 0px " + config.roundness + "px " + config.roundness + "px";
    ssimgborderradius = config.roundness + "px " + config.roundness + "px 0px 0px";
}

var solid = "background: " + colour1;
var solid1 = "background: " + colour2;
var background = "background: radial-gradient(circle, " + colour1 + " 0%, " + colour2 + " 100%)";
var imgbackground = "url('" + img + "')";

var scale = config.scale;
if (config.scale > 100) {
    document.getElementById("cont").style.transform = "scale(" + (100 + scale * 0.1) + "%, " + (100 + scale * 0.1) + "%)";
} else {
    document.getElementById("cont").style.transform = "scale(" + scale + "%, " + scale + "%)";
}

var bgtype = config.bgtype;

if (bgtype == "bgsolid") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("logocont").style = solid;
    document.getElementById("first").style = solid1;
    document.getElementById("second").style = solid;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
    document.getElementById("logo").src = logo;
    document.getElementById("logo").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
} else if (bgtype == "bg") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("logocont").style = background;
    document.getElementById("first").style = solid1;
    document.getElementById("second").style = solid;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
    document.getElementById("logo").src = logo;
    document.getElementById("logo").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
} else if (bgtype == "img") {
    document.getElementById("cont").style.color = textcolour;
    document.getElementById("first").style = solid1;
    document.getElementById("second").style = solid;
    document.getElementById("screenshot").style.borderRadius = ssimgborderradius;
    document.getElementById("logocont").style.backgroundImage = imgbackground;
    document.getElementById("logocont").style.backgroundPosition = "center";
    document.getElementById("logocont").style.backgroundRepeat = "no-repeat";
    document.getElementById("logocont").style.backgroundSize = "300px";
    document.getElementById("icon").src = icon;
    document.getElementById("icon").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
    document.getElementById("logo").src = logo;
    document.getElementById("logo").style.borderRadius = "" + config.iconroundness * 1.5 + "px";
}

if (config.screenshot == "true") {
    document.getElementById("cont").style.height = "219px";
    document.getElementById("screenshotcont").style.display = "flex";
} else {
    document.getElementById("cont").style.height = "50px";
    document.getElementById("screenshotcont").style.display = "none";
}

var text = "Achievement Unlocked!";
var title = "Steam Achievement Notifier";
var desc = "Your notifications are working correctly";

document.getElementById("title").innerHTML = text;
document.getElementById("game").innerHTML = title;
document.getElementById("desc").innerHTML = desc;

document.getElementById("textcont").style.fontSize = 14 * config.fontsize * 0.01 + "px";
document.getElementById("desc").style.fontSize = 12 * config.fontsize * 0.01 + "px";

if (config.fontsize < 100) {
    document.getElementById("title").style.lineHeight = 18 * config.fontsize * 0.01 + "px";
    document.getElementById("game").style.lineHeight = 18 * config.fontsize * 0.01 + "px";
}

if (config.notifypos == "topleft" || config.notifypos == "topright" || config.notifypos == "topcenter") {
    document.getElementById("logocont").style.order = "0";
    document.getElementById("screenshotcont").style.order = "1";
} else {
    document.getElementById("logocont").style.order = "1";
    document.getElementById("screenshotcont").style.order = "0";
}

function PlayNotification(add) {
    document.getElementById("cont").style.opacity = "1";

    document.getElementById("logocont").style.borderRadius = "50%";
    document.getElementById("logocont").style.animation = "popin 0.5s forwards , width 0.5s 2s forwards";
    document.getElementById("logo").style.animation = "fadeout 0.5s 2s forwards";

    document.getElementById("first").style.animation = "grow 2s";
    document.getElementById("first").style.animationIterationCount = "1";
    
    document.getElementById("second").style.animation = "grow 2s 0.5s";
    document.getElementById("second").style.animationIterationCount = "1";
    
    document.getElementById("third").style.animation = "grow1 2s 1s";
    document.getElementById("third").style.animationIterationCount = "1";

    document.getElementById("imgcont").style.animation = "fadein 0.5s 2.5s forwards";
    document.getElementById("textcont").style.animation = "fadein 0.5s 2.5s forwards";

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logo").style.opacity = "0";
            document.getElementById("imgcont").style.animation = "animpause " + add + "s forwards";
            document.getElementById("textcont").style.animation = "animpause " + add + "s forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("title").style.animation = "fadeout 0.5s forwards";
            document.getElementById("game").style.animation = "fadeout 0.5s forwards";
            document.getElementById("desc").style.animation = "fadein 0.5s 0.5s forwards";
        } else if (event.animationName == "fadeout1") {          
            document.getElementById("logocont").style.animation = "widthrev 0.5s forwards, popout 0.5s 2s forwards";
            document.getElementById("logo").style.animation = "fadein 0.5s 0.3s forwards";

            document.getElementById("first").style.animation = "grow2 2s 0.5s forwards";
            document.getElementById("first").style.animationIterationCount = "1";
            
            document.getElementById("second").style.animation = "grow2 2s 1s";
            document.getElementById("second").style.animationIterationCount = "1";
            
            document.getElementById("third").style.animation = "grow2 2s 1.5s";
            document.getElementById("third").style.animationIterationCount = "1";
        }
    });

    document.getElementById("desc").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("desc").style.animation = "animpause1 " + add + "s forwards";
        } else if (event.animationName == "animpause1") {
            document.getElementById("imgcont").style.animation = "fadeout1 0.5s forwards";
            document.getElementById("textcont").style.animation = "fadeout1 0.5s forwards";
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedownrev 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideuprev 0.5s forwards";
                }
            }
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationstart', function(event) {
        if (event.animationName == "width") {
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationend', function(event) {
        if (event.animationName == "width") {
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedown 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideup 0.5s forwards";
                }
                document.getElementById("logocont").style.borderRadius = ssborderradius;
            } else {
                document.getElementById("logocont").style.borderRadius = borderradius;
            }
        } else if (event.animationName == "popout") {
            // ipcRenderer.send('notifywinstop')
        }
    });

    document.getElementById("logo").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logocont").style.borderRadius = "50%";
        }
    });
}

function PlayFastNotification(add) {
    document.getElementById("cont").style.opacity = "1";

    document.getElementById("title").innerHTML = title;
    document.getElementById("game").innerHTML = desc;

    document.getElementById("logocont").style.borderRadius = "50%";
    document.getElementById("logocont").style.animation = "popin 0.5s forwards , width 0.5s 2s forwards";
    document.getElementById("logo").style.animation = "fadeout 0.5s 2s forwards";

    document.getElementById("first").style.animation = "grow 2s";
    document.getElementById("first").style.animationIterationCount = "1";
    
    document.getElementById("second").style.animation = "grow 2s 0.5s";
    document.getElementById("second").style.animationIterationCount = "1";
    
    document.getElementById("third").style.animation = "grow1 2s 1s";
    document.getElementById("third").style.animationIterationCount = "1";

    document.getElementById("imgcont").style.animation = "fadein 0.5s 2.5s forwards";
    document.getElementById("textcont").style.animation = "fadein 0.5s 2.5s forwards";

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logo").style.opacity = "0";
            document.getElementById("imgcont").style.animation = "animpause " + add + "s forwards";
            document.getElementById("textcont").style.animation = "animpause " + add + "s forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("title").style.animation = "fadeout 0.5s forwards";
            document.getElementById("game").style.animation = "fadeout 0.5s forwards";
        }
    });

    document.getElementById("title").addEventListener('animationend', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("logocont").style.animation = "widthrev 0.5s forwards, popout 0.5s 2s forwards";
            document.getElementById("logo").style.animation = "fadein 0.5s 0.3s forwards";

            document.getElementById("first").style.animation = "grow2 2s 0.5s forwards";
            document.getElementById("first").style.animationIterationCount = "1";
            
            document.getElementById("second").style.animation = "grow2 2s 1s";
            document.getElementById("second").style.animationIterationCount = "1";
            
            document.getElementById("third").style.animation = "grow2 2s 1.5s";
            document.getElementById("third").style.animationIterationCount = "1";
        }
    });

    document.getElementById("title").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("imgcont").style.animation = "fadeout1 0.5s forwards";
            document.getElementById("textcont").style.animation = "fadeout1 0.5s forwards";
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedownrev 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideuprev 0.5s forwards";
                }
            }
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationstart', function(event) {
        if (event.animationName == "width") {
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationend', function(event) {
        if (event.animationName == "width") {
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedown 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideup 0.5s forwards";
                }
                document.getElementById("logocont").style.borderRadius = ssborderradius;
            } else {
                document.getElementById("logocont").style.borderRadius = borderradius;
            }
        } else if (event.animationName == "popout") {
            // ipcRenderer.send('notifywinstop')
        }
    });

    document.getElementById("logo").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logocont").style.borderRadius = "50%";
        }
    });
}

function PlaySuperFastNotification(add) {
    document.getElementById("cont").style.opacity = "1";

    document.getElementById("title").innerHTML = title;
    document.getElementById("game").innerHTML = desc;

    document.getElementById("logocont").style.borderRadius = "50%";
    document.getElementById("logocont").style.animation = "popin 0.5s forwards , width 0.5s 1s forwards";
    document.getElementById("logo").style.animation = "fadeout 0.25s 1s forwards";

    document.getElementById("first").style.animation = "grow 1.5s";
    document.getElementById("first").style.animationIterationCount = "1";
    
    document.getElementById("second").style.animation = "grow 1.5s 0.25s";
    document.getElementById("second").style.animationIterationCount = "1";
    
    document.getElementById("third").style.animation = "grow1 1.5s 0.5s";
    document.getElementById("third").style.animationIterationCount = "1";

    document.getElementById("imgcont").style.animation = "fadein 0.25s 1.5s forwards";
    document.getElementById("textcont").style.animation = "fadein 0.25s 1.5s forwards";

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logo").style.opacity = "0";
            document.getElementById("imgcont").style.animation = "animpause " + add + "s forwards";
            document.getElementById("textcont").style.animation = "animpause " + add + "s forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("title").style.animation = "fadeout 0.25s forwards";
            document.getElementById("game").style.animation = "fadeout 0.25s forwards";
        }
    });

    document.getElementById("title").addEventListener('animationend', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("logocont").style.animation = "widthrev 0.5s forwards, popout 0.5s 2s forwards";
            document.getElementById("logo").style.animation = "fadein 0.25s 0.3s forwards";

            document.getElementById("first").style.animation = "grow2 1.5s 0.5s forwards";
            document.getElementById("first").style.animationIterationCount = "1";
            
            document.getElementById("second").style.animation = "grow2 1.5s 0.75s";
            document.getElementById("second").style.animationIterationCount = "1";
            
            document.getElementById("third").style.animation = "grow2 1.5s 1s";
            document.getElementById("third").style.animationIterationCount = "1";
        }
    });

    document.getElementById("title").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("imgcont").style.animation = "fadeout1 0.25s forwards";
            document.getElementById("textcont").style.animation = "fadeout1 0.25s forwards";
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedownrev 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideuprev 0.5s forwards";
                }
                document.getElementById("logocont").style.borderRadius = borderradius;
            }
        }
    });

    document.getElementById("logocont").addEventListener('animationstart', function(event) {
        if (event.animationName == "width") {
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationend', function(event) {
        if (event.animationName == "width") {
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedown 0.5s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideup 0.5s forwards";
                }
                document.getElementById("logocont").style.borderRadius = ssborderradius;
            } else {
                document.getElementById("logocont").style.borderRadius = borderradius;
            }
        } else if (event.animationName == "popout") {
            // ipcRenderer.send('notifywinstop')
        }
    });

    document.getElementById("logo").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logocont").style.borderRadius = "50%";
        }
    });
}

function PlaySuperFastestNotification(add) {
    document.getElementById("cont").style.opacity = "1";
    
    document.getElementById("title").innerHTML = title;
    document.getElementById("game").innerHTML = desc;

    document.getElementById("logocont").style.borderRadius = "50%";
    document.getElementById("logocont").style.animation = "popin 0.25s forwards , width 0.25s 0.5s forwards";
    document.getElementById("logo").style.animation = "fadeout 0.25s 0.5s forwards";

    document.getElementById("first").style.animation = "grow 0.5s";
    document.getElementById("first").style.animationIterationCount = "1";
    
    document.getElementById("second").style.animation = "grow 0.5s 0.1s";
    document.getElementById("second").style.animationIterationCount = "1";
    
    document.getElementById("third").style.animation = "grow1 0.5s 0.25s";
    document.getElementById("third").style.animationIterationCount = "1";

    document.getElementById("imgcont").style.animation = "fadein 0.25s 1s forwards";
    document.getElementById("textcont").style.animation = "fadein 0.25s 1s forwards";

    document.getElementById("textcont").addEventListener('animationend', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logo").style.opacity = "0";
            document.getElementById("imgcont").style.animation = "animpause " + add + "s forwards";
            document.getElementById("textcont").style.animation = "animpause " + add + "s forwards";
        } else if (event.animationName == "animpause") {
            document.getElementById("title").style.animation = "fadeout 0.25s forwards";
            document.getElementById("game").style.animation = "fadeout 0.25s forwards";
        }
    });

    document.getElementById("title").addEventListener('animationend', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("logocont").style.width = "300px"
            document.getElementById("logocont").style.animation = "fadeout2 0.25s forwards";
        }
    });

    document.getElementById("title").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadeout") {
            document.getElementById("imgcont").style.animation = "fadeout1 0.25s forwards";
            document.getElementById("textcont").style.animation = "fadeout1 0.25s forwards";
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedownrev 0.1s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideuprev 0.1s forwards";
                }
            }
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationstart', function(event) {
        if (event.animationName == "width") {
            document.getElementById("logocont").style.borderRadius = borderradius;
        }
    });

    document.getElementById("logocont").addEventListener('animationend', function(event) {
        if (event.animationName == "width") {
            if (config.screenshot == "true") {
                if (config.notifypos == "topleft" || config.notifypos == "topcenter" || config.notifypos == "topright") {
                    document.getElementById("screenshot").style.animation = "slidedown 0.1s forwards";
                } else {
                    document.getElementById("screenshot").style.animation = "slideup 0.1s forwards";
                }
                document.getElementById("logocont").style.borderRadius = ssborderradius;
            } else {
                document.getElementById("logocont").style.borderRadius = borderradius;
            }
        } else if (event.animationName == "fadeout2") {
            // ipcRenderer.send('notifywinstop')
        }
    });

    document.getElementById("logo").addEventListener('animationstart', function(event) {
        if (event.animationName == "fadein") {
            document.getElementById("logocont").style.borderRadius = "50%";
        }
    });
}

var displaytime = config.displaytime;

if (displaytime == 15) {
    PlayNotification(3.99)
} else if (displaytime == 14) {
    PlayNotification(3.5)
} else if (displaytime == 13) {
    PlayNotification(2.99)
} else if (displaytime == 12) {
    PlayNotification(2.5)
} else if (displaytime == 11) {
    PlayNotification(1.99)
} else if (displaytime == 10) {
    PlayNotification(1.5)
} else if (displaytime == 9) {
    PlayFastNotification(2.99)
} else if (displaytime == 8) {
    PlayFastNotification(1.99)
} else if (displaytime == 7) {
    PlaySuperFastNotification(2.5)
} else if (displaytime == 6) {
    PlaySuperFastNotification(1.5)
} else if (displaytime == 5) {
    PlaySuperFastestNotification(3.3)
} else if (displaytime == 4) {
    PlaySuperFastestNotification(2.3)
} else if (displaytime == 3) {
    PlaySuperFastestNotification(1.5)
} else if (displaytime == 2) {
    PlaySuperFastestNotification(0.3)
}

ipcRenderer.on('pausenotify', function() {
    document.getElementById("screenshot").style.animationPlayState = "paused";
    document.getElementById("logocont").style.animationPlayState = "paused";
    document.getElementById("logo").style.animationPlayState = "paused";
    document.getElementById("first").style.animationPlayState = "paused";
    document.getElementById("second").style.animationPlayState = "paused";
    document.getElementById("third").style.animationPlayState = "paused";
    document.getElementById("imgcont").style.animationPlayState = "paused";
    document.getElementById("textcont").style.animationPlayState = "paused";
    document.getElementById("title").style.animationPlayState = "paused";
    document.getElementById("game").style.animationPlayState = "paused";
    document.getElementById("desc").style.animationPlayState = "paused";
});

ipcRenderer.on('playnotify', function() {
    document.getElementById("screenshot").style.animationPlayState = "running";
    document.getElementById("logocont").style.animationPlayState = "running";
    document.getElementById("logo").style.animationPlayState = "running";
    document.getElementById("first").style.animationPlayState = "running";
    document.getElementById("second").style.animationPlayState = "running";
    document.getElementById("third").style.animationPlayState = "running";
    document.getElementById("imgcont").style.animationPlayState = "running";
    document.getElementById("textcont").style.animationPlayState = "running";
    document.getElementById("title").style.animationPlayState = "running";
    document.getElementById("game").style.animationPlayState = "running";
    document.getElementById("desc").style.animationPlayState = "running";
});