localStorage.setItem("log","")

const configtemplate = {
    apikey: "",
    steam64id: "",
    lang: "english",
    desktop: false,
    startwin: false,
    startmin: false,
    hwa: false,
    litemode: false,
    // nosteam: false,
    rarity: 10,
    soundonly: false,
    allpercent: false,
    extwin: false,
    statwin: false,
    track: true,
    screenshotmode: "off",
    displayscreenshot: false,
    keybind: "{F12}",
    noanim: false,
    nvda: false,
    tooltips: true,
    pollrate: 100,
    debug: false,
    customisation: {
        main: {},
        rare: {},
        plat: {}
    },
    shortcuts: false
}

// let customisetemplate

for (const type in configtemplate.customisation) {
    const customisetemplate = {
        mode: "file",
        soundfile: "",
        sounddir: "",
        volume: 10,
        preset: "default",
        displaytime: 10,
        scale: 100,
        customtext: "",
        usegametitle: false,
        bgstyle: "solid",
        angle: 90,
        bgimg: "",
        brightness: 100,
        roundness: 1,
        customfont: "",
        fontsize: 100,
        opacity: 100,
        bgonly: false,
        textcolor: "#ffffff",
        textoutline: false,
        outlinecolor: "#000000",
        textshadow: false,
        shadowcolor: "#000000",
        iconroundness: 0,
        usecustomicon: false,
        customicon: "",
        usegameicon: false,
        pos: "bottomcenter",
        usecustompos: false,
        custompos: {
            x: 0,
            y: 0
        },
        animdir: "up",
        ovpos: "match",
        alldetails: false
    }

    switch (type) {
        case "main":
            customisetemplate.primarycolor = "#305cb8"
            customisetemplate.secondarycolor = "#132958"
            customisetemplate.shortcut = "Ctrl + Shift + 1"
            break
        case "rare":
            customisetemplate.primarycolor = "#9932cc"
            customisetemplate.secondarycolor = "#663399"
            customisetemplate.shortcut = "Ctrl + Shift + 2"
            break
        case "plat":
            customisetemplate.primarycolor = "#4e75c9"
            customisetemplate.secondarycolor = "#8a2be2"
            customisetemplate.useplaticon = false
            customisetemplate.platicon = ""
            customisetemplate.shortcut = "Ctrl + Shift + 3"
            break
    }

    type !== "main" ? customisetemplate.iconanim = true : null

    configtemplate.customisation[type] = customisetemplate
}

function SetLocalStorageItem(key,value) {
    if (!localStorage.getItem(key)) {
        log.write("info",`${key} not present in localStorage on load`)

        try {
            localStorage.setItem(key,JSON.stringify(value))
            log.write("info",`"${key}" successfully written to localStorage`)
        } catch (err) {
            log.write("error",`Unable to write "${value}" to "${key}" in localStorage: ${err}`)
        }
    } else {
        log.write("info",`"${key}" loaded successfully`)
    }
}

SetLocalStorageItem("config",configtemplate)
SetLocalStorageItem("accounts",[])

const config = JSON.parse(localStorage.getItem("config"))

!config.ovpath && path.pictureDir()
.then(async defaultdir => {
    config.ovpath = await path.join(defaultdir,`Steam Achievement Notifier (V${await sanhelper.version()})`)
    !await exists(await config.ovpath) && createDir(await config.ovpath)
    
    localStorage.setItem("config",JSON.stringify(config))
})

function CheckNewConfigKeys() {
    return new Promise(resolve => {
        const customiseignorelist = [
            "iconanim",
            "useplaticon",
            "platicon"
        ]
        
        for (const key in configtemplate) {
            if (config[key] === undefined && key !== "customisation") {
                sanhelper.write({config},[key],configtemplate[key])
                log.write("info",`New template key "${key}" was written to "config"`)
            } else if (key === "customisation") {
                for (const type in config[key]) {
                    for (const tempkey in configtemplate.customisation[type]) {
                        if (!customiseignorelist.includes(tempkey) && config[key][type][tempkey] === undefined) {
                            sanhelper.write({config},["customisation",type,tempkey],configtemplate.customisation[type][tempkey])
                            log.write("info",`New customisation template key "${tempkey}" was written to "config.customisation.${type}"`)
                        }
                    }
                }
            }
        }

        resolve()
    })
}

CheckNewConfigKeys()
.finally(() => window.dispatchEvent(new CustomEvent("config", { detail: config })))

async function ConnectToAPI(key,id,isDialog) {
    function GetCredentials() {
        return new Promise((resolve,reject) => {
            !key ? reject("No API Key") :
            !id ? reject("No Steam64 ID") : resolve({ apikey: key, steam64id: id })
        })
    }

    const dialog = document.querySelector(".dialog")
    
    try {
        const { apikey, steam64id } = await GetCredentials()
        
        const res = await http(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`)
        if (!res.ok) throw res.status
        
        if (res.data.response.players.length) {
            const { personaname, avatarfull, profileurl } = res.data.response.players[0]
            const userlbl = document.getElementById("userlbl")
            
            userlbl.textContent = personaname
            userlbl.removeAttribute("novalue")
            
            const ext = await path.extname(avatarfull)
            const localavatar = await path.join(avatarpath,`${steam64id}.${ext}`)

            try {
                if (!await exists(localavatar)) {
                    await download(avatarfull,localavatar)
                    log.write("info",`Avatar for user "${personaname}" cached successfully`)
                    
                }
            } catch (err) {
                log.write("error",`Unable to download avatar for user "${personaname}": ${err}`)
            }
            
            if (isDialog) {
                sanhelper.write({config},["apikey"],key)
    
                setTimeout(() => {
                    dialog.setAttribute("success","")
    
                    const testwrapper = document.querySelector(".testwrapper")

                    function SetSuccessMsg() {
                        testwrapper.remove()
                        document.querySelector(".dialogmsg > img").src = account.avatar

                        LoadDialog(translations.connected,`${translations.testsuccessuser}, <span>${account.user}</span>!`,[{ icon: "🔓", msg: translations.testsuccess1 }, { icon: "📺", msg: translations.testsuccess2 }])
                    }
                    
                    !config.noanim ? testwrapper.addEventListener("transitionend", () => SetSuccessMsg(), { once: true }) : SetSuccessMsg()
                }, 500)
    
                const account = {
                    id: id,
                    user: personaname,
                    avatar: await exists(localavatar) ? convertFileSrc(localavatar) : avatarfull,
                    url: profileurl
                }
    
                AddAccount(account)

                // Resets the tracking process
                await emit("stop_san")
                await invoke("is_steam_running")
            }
        } else throw 405
    } catch (err) {
        function SetDialogError(code) {
            switch (code) {
                case 403: return { title: translations.invalidapikeytitle, msg: translations.invalidapikeymsg, detail: [{ icon: "🔑", msg: translations.invalidapikeydetail1 },{ icon: "🔄", msg: translations.invalidapikeydetail2 }] }
                case 405: return { title: translations.invalidsteam64idtitle, msg: translations.invalidsteam64idmsg, detail: [{ icon: "🆔", msg: translations.invalidsteam64iddetail1 }] }
                // case 500: return { }
                default: return { title: translations.testdefaulterrortitle, msg: translations.testdefaulterrormsg, detail: [{ icon: "❌", msg: navigator.onLine ? err.replace(new RegExp(config.apikey,"gi"),"[APIKEY]") : translations.nonetworkfound }, { icon: navigator.onLine ? "📣" : "🌐", msg: navigator.onLine ? translations.testdefaulterrordetail1 : translations.connecttonetwork }] }
            }
        }

        if (isDialog) {
            setTimeout(() => {
                dialog.setAttribute("error","")

                const testwrapper = document.querySelector(".testwrapper")

                function SetErrorMsg() {
                    testwrapper.remove()
    
                    const { title, msg, detail } = SetDialogError(err)
                    LoadDialog(title,msg,detail)
                }
                
                !config.noanim ? testwrapper.addEventListener("transitionend", () => SetErrorMsg(), { once: true }) : SetErrorMsg()
            }, 500)

            log.write("error",`Unable to connect to the Steam Web API! (Status: ${err})`)
        }
    }
}

ConnectToAPI(config.apikey,config.steam64id)

function AddAccount(account) {
    sanhelper.write({config},["steam64id"],account.id)

    const accounts = JSON.parse(localStorage.getItem("accounts"))
    if (accounts.every(obj => obj.id !== account.id)) {
        sanhelper.write({accounts},null,account)
    } else {
        accounts.forEach(current => {
            if (current.avatar !== account.avatar) {
                sanhelper.write({accounts},null,account)
    
                localStorage.setItem("accounts",JSON.stringify(accounts.filter(account => current.avatar !== account.avatar)))
                log.write("info",`Local avatar for "${account.user}" (${account.id}) updated in "accounts"`)
            }
        })

        log.write("info",`Account for "${account.user}" (${account.id}) already exists in "accounts"!`)
    }
}

function RemoveAccount(elem) {
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    localStorage.setItem("accounts",JSON.stringify(accounts.filter(account => account.id !== elem.parentElement.id.replace("user",""))))
    elem.parentElement.remove()
}