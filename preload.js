const path_preload = require('path')
const fs_preload = require('fs')

var sanjs = document.createElement("script")
var tooltipjs = document.createElement("script")

// SAN1.8.JS CHECK
if (!fs_preload.existsSync(path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","san1.8.js"))) {
    fs_preload.copyFile(path_preload.join(__dirname,"san1.8.js"), path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","san1.8.js"), (err) => {
        if (err) {
            console.log("%cFILE COPY ERROR: " + err, "color: red; font-family: 'Bahnschrift'")
        } else {
            console.log("%c\"san1.8.js\" copied to " + path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)"), "color: limegreen; font-family: 'Bahnschrift'")
            
            sanjs.defer = true
            sanjs.src = path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","san1.8.js")
        
            document.head.appendChild(sanjs)
        }
    })
} else {
    sanjs.defer = true
    sanjs.src = path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","san1.8.js")

    document.head.appendChild(sanjs)
}

// TOOLTIP.JS CHECK
if (!fs_preload.existsSync(path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","tooltip.js"))) {
    fs_preload.copyFile(path_preload.join(__dirname,"tooltip.js"), path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","tooltip.js"), (err) => {
        if (err) {
            console.log("%cFILE COPY ERROR: " + err, "color: red; font-family: 'Bahnschrift'")
        } else {
            console.log("%c\"tooltip.js\" copied to " + path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)"), "color: limegreen; font-family: 'Bahnschrift'")
            
            tooltipjs.defer = true
            tooltipjs.src = path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","tooltip.js")
            
            document.head.appendChild(tooltipjs)
        }
    })
} else {
    tooltipjs.defer = true
    tooltipjs.src = path_preload.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","tooltip.js")
    
    document.head.appendChild(tooltipjs)
}