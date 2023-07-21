function HWAStatus() {
    new WebviewWindow("gpu", {
        "label": "gpu",
        "width": 200,
        "height": 200,
        "url": "chrome://gpu"
    })
}

document.getElementById("version").textContent = `Steam Achievement Notifier (V${sanhelper.version})`
document.getElementById("copyright").textContent = `Copyright © Jackson0ne ${new Date().getFullYear()}. All Rights Reserved.`

function BlurOnEnter(event) {
    event.key === "Enter" && event.target.blur()
}

function NumberMinMax(num) {
    const value = parseInt(num.value)
    const min = parseInt(num.min)
    const max = parseInt(num.max)
  
    return !num.value ? num.value = num.min : num.value = Math.max(min,Math.min(max,value))
}

async function ShowCustomiser() {
    const closebtn = document.getElementById("closebtn")
    closebtn.onclick = null

    const mainwrapper = document.querySelector(".mainwrapper")
    const logos = document.querySelectorAll(".logo")
    
    !config.noanim && mainwrapper.setAttribute("closing","")

    const type = GetTabType()

    readTextFile(await path.resolve(".","src","components","customiser.html"))
    .then(data => mainwrapper.insertAdjacentHTML("beforeend",data))
    .finally(() => {
        const iframe = CheckIfPortrait()

        iframe.addEventListener("DOMContentLoaded", () => {
            LoadConfig("customiser")
    
            function TransitionHandler() {
                mainwrapper.removeAttribute("closing")

                type === "main" ? SetTabTypes("main","rare") :
                type === "rare" ? SetTabTypes("main","plat") :
                SetTabTypes("rare","plat")

                logos.forEach(logo => logo.removeEventListener("transitionend", TransitionHandler))
            }
            
            logos.forEach(logo => {
                !config.noanim ? logo.addEventListener("transitionend", TransitionHandler, { once: true }) :
                mainwrapper.getAttribute("type") === "main" ? SetTabTypes("main","rare") :
                mainwrapper.getAttribute("type") === "rare" ? SetTabTypes("main","plat") :
                SetTabTypes("rare","plat")
            })

            window.addEventListener("resize",CheckIfPortrait)
        })
    })
    
    closebtn.onclick = async () => {
        window.removeEventListener("resize",CheckIfPortrait)

        const customiserwrapper = document.querySelector(".customiserwrapper")
        const customiserlogos = document.querySelectorAll(".customiserlogo")
        
        customiserwrapper.setAttribute("closing","")
        
        closebtn.onclick = null

        !config.noanim ? customiserlogos.forEach(logo => logo.addEventListener("transitionend",() => customiserwrapper.remove())) : customiserwrapper.remove()
        document.querySelectorAll(".mainwrapper > script").forEach(script => script.remove())
        CloseWindowByLbl("poswin")
        closebtn.onclick = () => invoke("close_window")
    }
}

function SetTabTypes(prev,next) {
    document.getElementById("tabbtnprev").setAttribute("type",prev)
    document.getElementById("tabbtnnext").setAttribute("type",next)

    document.querySelector(".customisertab > label").textContent = GetTabType() === "main" ? translations.togglemain.elem : GetTabType() === "rare" ? translations.togglerare.elem : translations.toggleplat.elem 
}

function CheckIfPortrait() {
    const iframe = document.getElementsByTagName("iframe")[0]
    const webviewdiv = document.querySelector(".webviewwrapper > div")

    const dims = ["width","height"]
    dims.forEach(dim => {
        iframe.setAttribute(dim,`${SetIFrameDimensions(dim)}px`)
        webviewdiv.style[dim] = `${SetIFrameDimensions(dim)}px`
    })

    return iframe.contentWindow
}

function SetIFrameDimensions(dim) {
    const webviewrapper = document.querySelector(".webviewwrapper")
    // return Math.floor((base[config.customisation[GetTabType()].preset][dim] + (dim === "height" && config.screenshotmode !== "off" && config.displayscreenshot ? 168.75 : 0)) * (webviewrapper.clientWidth / base[config.customisation[GetTabType()].preset].width))
    return Math.floor(base[config.customisation[GetTabType()].preset][dim] * (webviewrapper.clientWidth / base[config.customisation[GetTabType()].preset].width))
}

async function LoadIFrame() {
    const type = GetTabType()
    const iframe = document.getElementsByTagName("iframe")[0]

    const { msg, custom } = await BuildNotify({type})
    const html = await readTextFile(await path.resolve(".","src","notify","presets",custom.preset,"index.html"))

    const divs = ["mainwrapper","screenshotwrapper"]
    divs.map(div => iframe.contentWindow.document.querySelector(`.${div}`).style.animation = "none")

    // Triggers reflow
    function Reflow(elem) {
        elem.style.animation = "none"
        elem.offsetHeight
        elem.style.animation = null
    }

    iframe.contentWindow.document.querySelectorAll("*").forEach(elem => Reflow(elem))
    iframe.contentWindow.postMessage({ msg: msg, optional: { custom: custom, html: html } })
    
    CheckIfPortrait()

    const elems = [iframe.contentWindow.document.body,document.getElementById("customiserplaystate")]
    const states = ["paused","finish"]
    
    elems.forEach(elem => states.forEach(state => elem.removeAttribute(state)))
}

function ToggleIFramePlayState() {
    const iframe = document.getElementsByTagName("iframe")[0].contentWindow
    const elems = [iframe.document.body,document.getElementById("customiserplaystate")]

    elems.map(async elem => {
        if (elem.hasAttribute("finish")) {
            await new Promise(resolve => {
                iframe.document.getElementById("styles") && iframe.document.getElementById("styles").remove()
                setTimeout(resolve,50)
            })
            
            LoadIFrame()
        } else {
            elem.toggleAttribute("paused",!elem.hasAttribute("paused"))
        }
    })
}

function ToggleCustomiserTab(event) {
    const mainwrapper = document.querySelector(".mainwrapper")
    mainwrapper.setAttribute("type",event.target.getAttribute("type"))

    mainwrapper.getAttribute("type") === "main" ? SetTabTypes("main","rare") :
    mainwrapper.getAttribute("type") === "rare" ? SetTabTypes("main","plat") :
    SetTabTypes("rare","plat")

    LoadConfig("customiser")
}

function ToggleTab(event) {
    const type = event.target.getAttribute("type")
    const volumeslider = document.getElementById("volumeslider")
    const overlaypos = document.getElementById("overlayposdropdown")
    const customiserwrapper = document.querySelector(".customiserwrapper")

    document.querySelector(".mainwrapper").setAttribute("type",type)
    customiserwrapper && ToggleCustomiserTab(event)
    
    volumeslider ? volumeslider.value = config.customisation[type].volume : document.getElementById("portraitvolumeslider").value = config.customisation[type].volume
    overlaypos ? overlaypos.value = config.customisation[type].ovpos : null

    LoadLang(config.lang)
    SetSoundSrc()
    ResetAudio()
}

async function ShowDialog(file,elem,callback) {
    readTextFile(await path.resolve(".","src","components",`${file}.html`))
    .then(data => {
        return new Promise(resolve => {
            document.querySelector(`.${elem}`).insertAdjacentHTML("beforeend",data)
            resolve()
        })
        .finally(() => {
            callback && callback()
            LoadLang(config.lang)
        })
    })
    .finally(() => {
        config.noanim && document.querySelector(`dialog.${elem}`).setAttribute("noanim","")
        document.querySelector(`dialog.${elem}`).showModal()
    })
}

function CloseDialog(event) {
    const ids = [
        "dialogokbtn",
        "closesettingsbtn"
    ]

    const classlist = event.target.classList.value
    const dialog = classlist ? document.querySelector(`dialog.${classlist}[open]`) : ids.includes(event.target.id) ? document.querySelector(`dialog:has(#${event.target.id})`) : null

    event.target.contains(dialog) || ids.includes(event.target.id) && !config.noanim ? dialog.setAttribute("closing","") : null

    function ResetDialog() {
        const attrs = [
            "closing",
            "error",
            "success",
            "switch",
            "test",
            "noanim",
            "nott"
        ]

        const wins = ["logwin","extwin","ss"]
    
        attrs.forEach(attr => dialog.removeAttribute(attr))
        dialog.close()
        dialog.innerHTML = null

        wins.forEach(win => CloseWindowByLbl(win))
    }

    dialog ?
    !config.noanim ? dialog.addEventListener("transitionend",() => ResetDialog(),{ once: true }) : ResetDialog()
    : null
}

document.addEventListener("click", CloseDialog)

function LoadSANBoxIcons() {
    const sanboxtitle = document.querySelectorAll(".sanboxtitle")
    const sanboxlbl = document.querySelectorAll(".sanboxlbl")

    function SetIconSrc(elem) {
        elem.forEach(item => item.hasAttribute("src") && item.style.setProperty("--icon",`url("../icon/${item.getAttribute("src")}")`))
    }

    SetIconSrc(sanboxtitle)
    SetIconSrc(sanboxlbl)
}

LoadTooltips()

function LoadTooltips(menu) {
    const querypattern = menu === "settings" ? `.sanboxoption, select:not(#overlayposdropdown,#monitor), .settingswrapper button:not(#closesettingsbtn,#keybind,#ovpathbtn,#ppbtn), .settingswrapper input[type="password"], .settingswrapper input[type="text"]` : menu === "customiser" ? `.sanboxoption:has(input[type="checkbox"]), .sanboxoption:has(input:not([type="checkbox"])) > input, .sanboxoption > select, .customiserwrapper button` : ".rect, .soundbar > button, .togglewrapper > button, #steamstatus, #updatebtn"
    const parent = menu === "settings" ? document.querySelector(".settings") : menu === "customiser" ? document.querySelector(".customiserwrapper") : document.querySelector(".mainwrapper")

    document.body.toggleAttribute("nott",!config.tooltips)

    document.querySelectorAll(querypattern).forEach(elem => {
        if (!config.tooltips || elem._tippy) return

        tippy(querypattern, {
            onTrigger(instance) {
                const content = instance.reference.hasAttribute("content") && instance.reference || Array.from(instance.reference.children).find(child => child.hasAttribute("content"))

                instance.setProps({
                    content: content && content.getAttribute("content"),
                    duration: !config.noanim ? 200 : 0
                })

                instance.reference.hasAttribute("soon") && instance.setProps({ content: translations.soon })
            },
            allowHTML: true,
            appendTo: parent,
            placement: "bottom",
            followCursor: true,
            arrow: false,
            animation: "scale",
            trigger: "mouseenter",
            offset: [0,25],
            delay: [1000,10],
            maxWidth: 150
        })
    })

    const linkbtns = []
    document.querySelectorAll(".linkwrapper > button").forEach(button => linkbtns.push(button))

    tippy(`#kofibtn`, {
        onTrigger(instance,event) {
            instance.setProps({
                content: event.target.id === "kofibtn" ? translations.kofibtn : event.target.id === "discordbtn" ? translations.discordbtn : translations.githubbtn,
                duration: !config.noanim ? 50 : 0
            })
        },
        theme: "alwaysshow",
        appendTo: document.querySelector(".linkwrapper"),
        placement: "left",
        arrow: false,
        animation: "scale",
        trigger: "mouseenter focus",
        triggerTarget: linkbtns
    })

    menu === "settings" && tippy(`#rarity`, {
        onTrigger(instance) {
            instance.setProps({ duration: !config.noanim ? 50 : 0 })
        },
        content: `${document.getElementById("rarity").value}%`,
        theme: "alwaysshow",
        appendTo: parent,
        hideOnClick: false,
        arrow: false,
        followCursor: "horizontal",
        animation: "scale",
        trigger: "mouseenter focus",
    })
}

document.body.toggleAttribute("noanim",config.noanim)
document.body.toggleAttribute("nott",!config.tooltips)
window.addEventListener("DOMContentLoaded", async () => config.desktop && !await exists(await sanhelper.shortcut()) ? invoke("desktop_shortcut", { path: await sanhelper.shortcut() }) : null, { once: true })

async function ToggleDataFile(filename) {
    try {
        return config[filename] ? await writeTextFile(await path.join(await path.appCacheDir(),filename),"") : await removeFile(await path.join(await path.appCacheDir(),filename))
    } catch (err) {
        return log.write("error",`Error toggling "${filename}" in ${await path.appCacheDir()}: ${err}`)
    }
}

const ps = new Map([
    ["Digit0","0"],
    ["Digit1","1"],
    ["Digit2","2"],
    ["Digit3","3"],
    ["Digit4","4"],
    ["Digit5","5"],
    ["Digit6","6"],
    ["Digit7","7"],
    ["Digit8","8"],
    ["Digit9","9"],
    ["Numpad0","0"],
    ["Numpad1","1"],
    ["Numpad2","2"],
    ["Numpad3","3"],
    ["Numpad4","4"],
    ["Numpad5","5"],
    ["Numpad6","6"],
    ["Numpad7","7"],
    ["Numpad8","8"],
    ["Numpad9","9"],
    ["NumpadEnter",["{ENTER}","enter"]],
    ["KeyA","a"],
    ["KeyB","b"],
    ["KeyC","c"],
    ["KeyD","d"],
    ["KeyE","e"],
    ["KeyF","f"],
    ["KeyG","g"],
    ["KeyH","h"],
    ["KeyI","i"],
    ["KeyJ","j"],
    ["KeyK","k"],
    ["KeyL","l"],
    ["KeyM","m"],
    ["KeyN","n"],
    ["KeyO","o"],
    ["KeyP","p"],
    ["KeyQ","q"],
    ["KeyR","r"],
    ["KeyS","s"],
    ["KeyT","t"],
    ["KeyU","u"],
    ["KeyV","v"],
    ["KeyW","w"],
    ["KeyX","x"],
    ["KeyY","y"],
    ["KeyZ","z"],
    ["F1","{F1}"],
    ["F2","{F2}"],
    ["F3","{F3}"],
    ["F4","{F4}"],
    ["F5","{F5}"],
    ["F6","{F6}"],
    ["F7","{F7}"],
    ["F8","{F8}"],
    ["F9","{F9}"],
    ["F10","{F10}"],
    ["F11","{F11}"],
    ["F12","{F12}"],
    ["NumpadMultiply",["{MULTIPLY}","*"]],
    ["NumpadAdd",["{ADD}","+"]],
    ["NumpadSubtract",["{SUBTRACT}","-"]],
    ["NumpadDivide",["{DIVIDE}","/"]],
    ["NumpadDecimal","."],
    ["Minus","-"],
    ["Equal","="],
    ["BracketLeft","["],
    ["BracketRight","]"],
    ["Backslash","#"],
    ["IntlBackslash","\\"],
    ["Semicolon",";"],
    ["Quote","\'"],
    ["Comma",","],
    ["Period","."],
    ["Slash","/"],
    ["Backspace",["{BACKSPACE}","backsp"]],
    ["Pause","{BREAK}"],
    ["Tab","{TAB}"],
    ["Enter","{ENTER}"],
    ["Escape",["{ESC}","esc"]],
    ["Delete",["{DELETE}","del"]],
    ["Insert",["{INSERT}","ins"]],
    ["Home","{HOME}"],
    ["End","{END}"],
    ["PageUp",["{PGUP}","pgup"]],
    ["PageDown",["{PGDN}","pgdn"]],
    ["ArrowUp",["{UP}","up"]],
    ["ArrowDown",["{DOWN}","down"]],
    ["ArrowLeft",["{LEFT}","left"]],
    ["ArrowRight",["{RIGHT}","right"]],
    ["CapsLock",["{CAPSLOCK}","caps"]],
    ["ScrollLock",["{SCROLLLOCK}","scrlock"]],
    ["NumLock","{NUMLOCK}"],
    ["Space",[" ","space"]],
    ["ShiftLeft",null],
    ["ShiftRight",null],
    ["ControlLeft",null],
    ["ControlRight",null],
    ["AltLeft",null],
    ["AltRight",null],
    ["MetaLeft",null],
    ["MetaRight",null],
    ["Backquote",null]
])

const settings = {
    desktop: async () => config.desktop ? !await exists(await sanhelper.shortcut()) && invoke("desktop_shortcut", { path: await sanhelper.shortcut() }) : await exists(await sanhelper.shortcut()) && removeFile(await sanhelper.shortcut()),
    startwin: async () => await autostart.isEnabled() ? autostart.disable() : autostart.enable(),
    startmin: async () => await ToggleDataFile("startmin"),
    hwa: async () => {
        await ToggleDataFile("hwa")
        relaunch()
    },
    litemode: () => console.log("litemode"),
    // nosteam: async () => {
    //     const skindir = await path.join(await sanhelper.steampath(),"skins","NoSteamNotifications","resource","styles")

    //     if (config.nosteam) {
    //         try {
    //             !await exists(skindir) && await createDir(skindir, { recursive: true })
    //             await copyFile(await path.join(await path.resolve("src","notify","steam.styles")),await path.join(skindir,"steam.styles"))

    //             await invoke("toggle_steam_skin", { mode: true })
    //         } catch (err) {
    //             return log.write("error",`Unable to create "${skindir}" directory: ${err}`)
    //         }
    //     } else {
    //         await invoke("toggle_steam_skin", { mode: false })
    //     }
    // },
    soundonly: () => console.log("soundonly"),
    allpercent: () => console.log("allpercent"),
    extwin: () => console.log("extwin"),
    statwin: () => console.log("statwin"),
    track: () => console.log("track"),
    displayscreenshot: () => {
        document.getElementsByTagName("iframe")[0] && LoadIFrame()
        CloseWindowByLbl("poswin")
    },
    keybind: event => {
        const label = document.querySelector(`#${event.target.id} > label`)

        event.target.setAttribute("listen","")
        label.textContent = "•••"
        
        event.target.addEventListener("keydown", async event => {
            event.preventDefault()
            if (ps.get(event.code) === null) {
                event.target.removeAttribute("listen","")
                return label.textContent = GetKeybindValue()
            }

            const code = ps.get(event.code) || event.code
            sanhelper.write({config},["keybind"],typeof code === "object" ? code[0] : code)
            
            const key = [...ps.entries()].find(([k,v]) => v === code)[0]
            label.textContent = Array.isArray(code) ? code[1] : (code.includes("{") ? key : code)
            event.target.removeAttribute("listen")
        }, { once: true })
    },
    ovpath: event => {
        dialog.open({
            directory: true,
            title: `Steam Achievement Notifier (V${sanhelper.version}) - ${translations.sspath}`,
            multiple: false
        })
        .then(res => {
            if (res) {
                sanhelper.write({config},["ovpath"],res)
                document.querySelectorAll(`#${event.target.id} label`).forEach(elem => elem.textContent = res.replace(/\\\\/g,"\\"))
            }
        })
    },
    noanim: elem => document.body.toggleAttribute("noanim",elem.checked),
    nvda: () => console.log("nvda"),
    tooltips: () => LoadTooltips("settings"),
    debug: () => { return },
    ppbtn: () => ShowDialog(`pp`,`ppwin`),
    betabtn: () => console.log("betabtn"),
    resetbtn: async () => {
        await new Promise(resolve => {
            localStorage.clear()
            resolve()
        })
        
        await emit("stop_san")
        relaunch()
    },
    monitor: () => monitors.forEach((monitor,i) => {
        const option = document.createElement("option")
        option.textContent = `Monitor ${i + 1}${monitor.isPrimary ? " [Primary]" : ""}`
        option.value = monitor.id
        option.selected = config.monitor === monitor.id
        document.getElementById("monitor").appendChild(option)
    }),
    showalldetails: () => console.log("showalldetails")
}

function GetKeybindValue() {
    for (const [key,value] of ps.entries()) {
        if (!value) return

        if (typeof value === "object") {
            if (value[0] === config.keybind) return Array.isArray(value) ? value[1] : key
        } else {
            if (value === config.keybind) return key
        }
    }
}

const defaulticons = {
    steamdeck: "../../../icon/ribbonbw.svg",
    xboxone: "../../../img/sanlogotrophy.svg",
    xbox360: "../../../img/sanlogotrophy.svg",
    windows: "../../../img/sanlogo.svg"
}

function DeleteIcon(elem) {
    const type = GetTabType()
    const id = elem.parentElement.id

    sanhelper.write({config},["customisation",type,id],"")
    document.querySelector(`#${id}btn > img`).src = config.customisation[type][id] || (id === "platicon" ? "../img/ribbon.svg" : defaulticons[config.customisation[type].preset] || "../img/steamlogonew.svg")
    LoadIFrame()
}

async function LoadConfig(menu) {
    const type = GetTabType()

    if (menu === "settings") {
        document.querySelector("#keybind > label").textContent = config.keybind
        document.getElementById("overlayposdropdown").value = config.customisation[type].ovpos
        document.querySelector("#ovpathbtn > label").textContent = config.ovpath.replace(/\\\\/g,"\\")
        document.querySelectorAll(".marquee > label").forEach(lbl => lbl.textContent = config.ovpath.replace(/\\\\/g,"\\"))
        document.querySelector("#keybind > label").textContent = GetKeybindValue()
    }

    if (menu === "customiser") {
        document.querySelector("#bgimgbtn > img").src = config.customisation[type].bgimg || "../img/sanimgbg.png"
        document.querySelector("#customiconbtn > img").src = config.customisation[type].customicon || (defaulticons[config.customisation[type].preset] || "../img/steamlogonew.svg")
        document.querySelector("#platiconbtn > img") ? document.querySelector("#platiconbtn > img").src = config.customisation[type].platicon || "../img/ribbon.svg" : null
        LoadIFrame()
    }

    function SetValues(key,value,subkey) {
        const elem = document.getElementById(!subkey ? key : subkey)

        if (elem) {
            switch (typeof value) {
                case "boolean":
                    elem.checked = value

                    const targets = [document.querySelector(`.sanboxoption:has(#${!subkey ? key : subkey}) > .sanboxlbl`),elem]
                    targets.forEach(target => target.onclick = () => {
                        value = !value
                        sanhelper.write({config},!subkey ? [key] : [key,type,subkey],value)

                        menu === "settings" && settings[elem.id](elem)
                        menu === "settings" && log.write("info",`${!subkey ? [key] : [key,type,subkey]} ${value ? "enabled" : "disabled"}`)

                        elem.checked = !subkey ? config[key] : config[key][type][subkey]
                        
                        menu === "customiser" && elem.id !== "usecustompos" ? LoadIFrame() : null
                    })

                    break
                default:
                    elem.value = value

                    switch (elem.type) {
                        case "range":
                            elem.parentElement.setAttribute("value",Number(elem.value))
                            elem.parentElement.style.setProperty("--value",`${elem.value}rem`)
                            
                            elem.oninput = event => {
                                event.target.parentElement.setAttribute("value",event.target.value)
                                event.target.parentElement.style.setProperty("--value",`${elem.value}rem`)

                                if (event.target.id === "rarity") {
                                    event.target.step = parseFloat(elem.value) <= 1 ? 0.1 : 1
                                    parseFloat(event.target.value) === 0.0 ? event.target.value = 0.1 : null
                                    event.target._tippy.setContent(`${event.target.value}%`)
                                }
                                
                                sanhelper.write({config},!subkey ? [key] : [key,type,subkey],Number(elem.value))
                            }

                            menu === "customiser" && elem.id !== "scale" ? elem.onchange = () => LoadIFrame() : null
                            break
                        case "select-one":
                            if (menu === "settings" && elem.id === "lang") {
                                return elem.onchange = async event => {
                                    sanhelper.write({config},!subkey ? [key] : [key,type,subkey],event.target.value)
                                    await new Promise(resolve => resolve(LoadLang(event.target.value)))
                                    SetSoundSrc()
                                }
                            }

                            menu === "settings" && elem.id === "monitor" ? settings[elem.id](elem) : null

                            elem.onchange = event => {
                                sanhelper.write({config},!subkey ? [key] : [key,type,subkey],event.target.value)
                                elem.id === "screenshotmode" && settings.displayscreenshot()

                                if (menu === "customiser") {
                                    document.querySelector("#customiconbtn > img").src = config.customisation[type].customicon || (defaulticons[config.customisation[type].preset] || "../img/steamlogonew.svg")
                                    LoadIFrame()
                                    elem.id === "preset" && CloseWindowByLbl("poswin")
                                }
                            }
                            break
                        case "text":
                            menu !== "settings" ? elem.onblur = event => {
                                sanhelper.write({config},!subkey ? [key] : [key,type,subkey],event.target.value)
                                menu === "customiser" && LoadIFrame()
                            } : null
                            break
                        case "number":
                            menu !== "settings" ? elem.onblur = event => {
                                sanhelper.write({config},!subkey ? [key] : [key,type,subkey],NumberMinMax(event.target))
                                menu === "customiser" && LoadIFrame()
                            } : null
                            break
                        case "color":
                            elem.onchange = event => {
                                sanhelper.write({config},!subkey ? [key] : [key,type,subkey],event.target.value)
                                menu === "customiser" && LoadIFrame()
                            }
                            break
                    }
                    
                    break
            }
        }
        // } else console.log(`%cSkipping key: %c${!subkey ? key : subkey}`,"color:grey","color:darkred")
    }

    for (const [key,value] of Object.entries(config)) {
        if (menu === "settings" && key !== "customisation") {
            document.querySelector(".detailswrapper > a").href = privacysettings
            SetValues(key,value)
        } else if (menu === "customiser" && key === "customisation") {
            const type = GetTabType()

            for (const [subkey,value] of Object.entries(config[key][type])) {
                SetValues(key,value,subkey)
            }
        }
    }

    LoadSANBoxIcons()
    LoadLang(config.lang)
    LoadTooltips(menu)
}

function LoadDialog(title,msg,solutions) {
    const dialog = document.querySelector("dialog.dialog")
    const dialogtitlelbl = document.querySelector(".dialogtitle > label")
    const dialogmsglbl = document.querySelector(".dialogmsg > label")
    const dialogdetail = document.querySelector(".dialogcontent > .dialogdetail")

    dialogtitlelbl.textContent = title
    dialogmsglbl.innerHTML = msg || null
    solutions ? solutions.forEach(solution => {
        const span = `
            <div class="solutionwrapper">
                <span class="solutionicon">${solution.icon}</span>
                <span class="solutionmsg">${solution.msg}</span>
            </div>
        `

        dialogdetail.insertAdjacentHTML("beforeend",span)
    }) :
    dialog.hasAttribute("test") && !dialog.hasAttribute("success") ? (() => {
        const html = `
            <div class="testwrapper">
                <img src="./icon/monitor.svg">
                <div class="dotwrapper">
                    <div class="dot">•</div>
                    <div class="dot">•</div>
                    <div class="dot">•</div>
                </div>
                <img src="./icon/steam.svg">
            </div>
        `
    
        dialogdetail.insertAdjacentHTML("beforeend",html)
    })() : null
}

function ToggleAPI(event) {
    event.target.toggleAttribute("show",!event.target.hasAttribute("show"))
    document.getElementById("apikey").type = event.target.hasAttribute("show") ? "text" : "password"
}

function LoadImgFile(event,value) {
    dialog.open({
        directory: false,
        title: `Steam Achievement Notifier (V${sanhelper.version}) - ${translations.imgselectdialog}`,
        multiple: false,
        filters: [{
            name: "Image",
            extensions: ["png","jpeg","jpg","jfif","webp","gif","ico","svg"]
        }]
    })
    .then(res => {
        if (res) {
            sanhelper.write({config},["customisation",GetTabType(),value],convertFileSrc(res))
            document.querySelector(`#${event.target.id} > img`).src = convertFileSrc(res)
            LoadIFrame()
        }
    })
    .catch(err => log.write("error",`Error loading background img file: ${err}`))
}

function LoadSwitchAccountsMenu() {
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    const dialog = document.querySelector(".dialog")
    const dialogtitlelbl = document.querySelector(".dialogtitlelbl")
    const dialogcontent = document.querySelector(".dialogcontent")

    dialogtitlelbl.textContent = translations.switchaccountstitle
    
    if (!accounts.length) {
        dialogcontent.textContent = translations.noaccounts
    } else {
        dialog.setAttribute("switch","")

        accounts.forEach(account => {
            const card = `
                <div class="accountcard" id="user${account.id}">
                    <img class="accountavatar" src="${account.avatar}" alt="">
                    <label>${account.user}</label>
                    <button class="deletebtn" onclick="RemoveAccount(event.target)">
                        <img src="./icon/delete.svg" alt="">
                    </button>
                </div>
            `

            dialogcontent.insertAdjacentHTML("beforeend",card)

            const usercard = document.getElementById(`user${account.id}`)
            account.id === config.steam64id && usercard.setAttribute("active","")

            usercard.onclick = event => {
                if (event.target.classList.value === "deletebtn") return

                sanhelper.write({config},["steam64id"],account.id)
                
                document.querySelectorAll(".accountcard").forEach(card => {
                    return new Promise(resolve => resolve(card.removeAttribute("active")))
                    .finally(() => {
                        card.id.replace("user","") === config.steam64id && card.setAttribute("active","")

                        document.getElementById("steam64id").value = account.id
                        document.getElementById("userlbl").textContent = account.user
                    })
                })
            }
        })
    }
}

function TestConnection() {
    const apikeyvalue = document.getElementById("apikey").value
    const steam64idvalue = document.getElementById("steam64id").value
    const dialog = document.querySelector(".dialog")

    if (!apikeyvalue || !steam64idvalue) {
        dialog.setAttribute("error", "")
        const msg = !apikeyvalue ? translations.noapikeytitle : translations.nosteam64idtitle
        const txt = !apikeyvalue ? translations.noapikeytxt : translations.nosteam64idtxt
        const hint = !apikeyvalue ? translations.noapikeyhint : translations.nosteam64idhint

        ShowDialog("dialog","dialog",LoadDialog.bind(this,msg,txt,[{ icon: "💡", msg: hint }]))
    } else {
        dialog.setAttribute("test","")
        ShowDialog("dialog","dialog",LoadDialog.bind(this,translations.connecting))
        ConnectToAPI(apikeyvalue, steam64idvalue, true)
    }
}

function OpenCustomPos() {
    let { x, y } = config.customisation[GetTabType()].custompos

    const queueobj = {
        notify: {
            title: `Steam Achievement Notifier (V${sanhelper.version}) - Custom Position`,
            resizable: false,
            focus: false,
            alwaysOnTop: true,
            transparent: true,
            decorations: false,
            visible: true,
            skipTaskbar: true,
            url: `./components/poswin.html`
        },
        type: GetTabType()
    }

    SetNotifyDimensions(queueobj)
    .finally(() => {
        const poswin = new WebviewWindow("poswin",queueobj.notify)

        poswin.once("tauri://created", () => {
            once("webviewready", () => {
                const setcustompos = document.getElementById("setcustompos")
                setcustompos.setAttribute("open","")
        
                poswin.setPosition(new PhysicalPosition(x,y))
                poswin.setSize(new LogicalSize(queueobj.notify.width,queueobj.notify.height))
                setTimeout(() => invoke("ipc", { eventname: "type", payload: { msg: GetTabType() } }),100)
            })
        })
        poswin.once("tauri://error", err => log.write("error",`"${err.windowLabel}" could not be created: ${err.payload}`))
    })
}

function CloseWindowByLbl(lbl) {
    const setcustompos = document.getElementById("setcustompos")
    setcustompos && setcustompos.removeAttribute("open")

    getAll().forEach(win => win.label === lbl && win.close())
}