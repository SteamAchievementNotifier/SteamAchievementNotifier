const { app } = require('electron')
const path = require('path')

var localappdata

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA);
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share");
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support");
}

const devmode = app.commandLine.getSwitchValue("devmode")

if (devmode == "true") {
    var startapp = require("./main.js")
} else {
    try {
        var startapp = require(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","app","main.js"))
    } catch (err) {
        var startapp = require("./main.js")
    }
}

app.on('ready', () => {
    startapp
})