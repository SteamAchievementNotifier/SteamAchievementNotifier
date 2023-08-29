document.addEventListener("contextmenu", event => event.preventDefault())

const transition = 100

async function SetNotifyContent(msg,custom,html,href,fonts) {
    return new Promise(async resolve => {
        document.querySelector(".mainwrapper").innerHTML = null
        document.getElementById("fontloader") && document.getElementById("fontloader").remove()

        const fontface = fonts.map(font => {
            return `@font-face { font-family: "${font.fontname}"; src: url("${convertFileSrc(font.fontfile)}"); }`
        })

        let style = document.createElement("style")
        style.id = "fontloader"
        style.textContent = fontface.join("\n")

        const link = document.createElement("link")
        link.id = "styles"
        link.rel = "stylesheet"
        // link.href = `./presets/${custom.preset}/styles.css`  
        link.href = href
        
        document.head.appendChild(link)

        document.querySelector(".mainwrapper").insertAdjacentHTML("beforeend",html)
    
        document.querySelector("audio").src = msg.audio
        document.querySelectorAll(".iconwrapper > img:not(#customicon)").forEach(icon => icon.src = msg.icon)
        document.querySelectorAll("#msg").forEach(achmsg => achmsg.textContent = msg.unlockmsg)
        document.querySelectorAll("#title").forEach(title => title.textContent = msg.title)
        document.querySelectorAll("#desc").forEach(desc => desc.textContent = msg.desc)

        !msg.overlay && document.querySelector(".mainwrapper").toggleAttribute("ss",msg.screenshot[0])

        document.querySelectorAll(".iconwrapper").forEach(icon => icon.toggleAttribute("rare",msg.type !== "main"))
        document.querySelectorAll(".iconwrapper").forEach(icon => icon.toggleAttribute("noanim",msg.type !== "main" && !custom.iconanim))

        msg.screenshot[0] ? document.querySelector(".screenshotwrapper > img").src = msg.screenshot[1] : null

        const hexopacity = Math.floor((custom.opacity / 100) * 255).toString(16).padStart(2,"0")

        const bgtypes = {
            solid: `${custom.primarycolor}${hexopacity}`,
            gradient: `linear-gradient(${custom.angle}deg,${custom.primarycolor}${hexopacity},${custom.secondarycolor}${hexopacity})`,
            bgimg: `url("${`${custom.bgimg}` || `../img/sanimgbg.png`}") center / cover no-repeat`,
            gameart: `url("${`${custom.gameart}`}") center / cover no-repeat`
        }

        for (const bgtype of Object.keys(bgtypes)) {
            document.querySelector(".mainwrapper").toggleAttribute(bgtype,custom.bgstyle === bgtype)
        }

        const posattrs = [
            "topleft",
            "topcenter",
            "topright",
            "bottomleft",
            "bottomcenter",
            "bottomright"
        ]

        posattrs.forEach(attr => document.body.toggleAttribute(attr,!msg.overlay || custom.ovpos === "match" ? attr === custom.pos : attr === custom.ovpos))

        document.body.toggleAttribute("alldetails",custom.alldetails)

        function ConvertPercentToXP(percent) {
            return Math.max(Math.min(Math.round((100 - percent) / 5) * 5,100),0)
        }

        document.getElementById("percent") && document.getElementById("percent").setAttribute("percent",`${msg.type !== "plat" ? ConvertPercentToXP(msg.percent) : 250}XP`)

        const percentattrs = ["bronze","silver","gold"]
        let percenttype = msg.percent > 25 && msg.percent !== 100 ? "bronze" : msg.percent <= 25 && msg.percent >= msg.rarity ? "silver" : "gold"

        percentattrs.forEach(attr => document.body.toggleAttribute(attr,attr === percenttype))

        const fxvalue = [
            custom.textoutline ? 0.025 : 0,
            custom.textshadow ? 0.35 : 0,
            custom.textoutline ? custom.outlinecolor : custom.textshadow ? custom.shadowcolor : "transparent"
        ]

        const textfx = (custom.textoutline ?
            (`-${fxvalue[0]}rem -${fxvalue[0]}rem ${fxvalue[1]}rem ${fxvalue[2]},
            ${fxvalue[0]}rem -${fxvalue[0]}rem ${fxvalue[1]}rem ${fxvalue[2]},
            -${fxvalue[0]}rem ${fxvalue[0]}rem ${fxvalue[1]}rem ${fxvalue[2]},
            ${fxvalue[0]}rem ${fxvalue[0]}rem ${fxvalue[1]}rem ${fxvalue[2]},`
            .repeat(30)) :
            (`${fxvalue[0]}rem ${fxvalue[0]}rem ${fxvalue[1]}rem ${fxvalue[2]},`)
            .repeat(3))
            .replace(/,$/, "")

        const customisations = new Map([
            ["--transition",`${transition}ms`],
            ["--time",`${custom.displaytime}s`],
            ["--minheight",`${(custom.scale / 100) * (msg.base[custom.preset] ? msg.base[custom.preset].height : 50)}px`],
            ["--bg",bgtypes[custom.bgstyle]],
            ["--primary",`${custom.primarycolor}${hexopacity}`],
            ["--secondary",`${custom.secondarycolor}${hexopacity}`],
            ["--br",`${(custom.roundness <= 1 ? custom.roundness * 0.33 : custom.roundness * 0.33 + (custom.roundness - 1) * 0.05) * (custom.scale > 100 ? custom.scale / 100 : 1)}rem`],
            ["--op",custom.bgonly ? custom.opacity / 100 : 1],
            ["--fontsize",custom.fontsize / 100],
            ["--textcolor",custom.textcolor],
            ["--textoutline",textfx],
            ["--dropshadow",custom.textoutline ? (`drop-shadow(0 0 0.025rem ${custom.outlinecolor}) `).repeat(3) : custom.textshadow ? `drop-shadow(0 0 0.175rem ${custom.shadowcolor})` : `none`],
            ["--iconbr",`${custom.iconroundness * 12.5}%`],
            ["--brightness",`${custom.brightness}%`],
            ["--sanlogotrophy",`url("${convertFileSrc(await path.join(await path.resourceDir(),"src","img","sanlogotrophy.svg"))}")`]
        ])

        custom.customfont ? fonts.forEach(font => font.fontfile === custom.customfont ? style.textContent += `\n#msg,#title,#desc { font-family: "${font.fontname}" !important; }` : null) : null
        document.head.appendChild(style)

        customisations.forEach((value,prop) => document.body.style.setProperty(prop,value))

        document.body.toggleAttribute("maxrnd",custom.roundness === 4)
        document.body.toggleAttribute("fastanim",custom.displaytime < 8)
        document.querySelector(".mainwrapper:has(#customicon)") ? document.getElementById("customicon").src = custom.usecustomicon && custom.customicon || msg.defaulticons[custom.preset] || "../../../img/steamlogonew.svg" : null

        const divs = ["mainwrapper","screenshotwrapper"]
        divs.map(div => document.querySelector(`.${div}`).style.animation = `start var(--transition) forwards, finish var(--transition) var(--time) forwards`)

        const textwrapperids = ["msg","title","desc"]
        textwrapperids.forEach(id => custom.textshadow && document.querySelectorAll(`#${id}`).forEach(elem => elem.setAttribute("text",elem.textContent)))

        resolve()
    })
    .then(() => document.body.style.opacity = custom.bgonly ? 1 : custom.opacity / 100)
    .catch(err => console.log(`%c${err}`,"color:red"))
}

if (window === window.top) {
    const { path } = window.__TAURI__
    const { invoke, convertFileSrc } = window.__TAURI__.tauri
    const { listen } = window.__TAURI__.event
    const { writeText } = window.__TAURI__.clipboard

    window.path = path
    window.convertFileSrc = convertFileSrc
    
    window.addEventListener("DOMContentLoaded", () => invoke("ipc", { eventname: "webviewready", payload: {} }), { once: true })
    
    listen("achievement", async event => {
        const msg = event.payload.msg
        const { custom, html, href, fonts } = event.payload.optional

        await SetNotifyContent(msg,custom,html,href,fonts)
        .catch(err => invoke("ipc", { eventname: "notifyerror", payload: { msg: typeof err === "object" ? err.message : err } }))
        .finally(() => setTimeout(() => {
            msg.nvda && writeText(`${msg.unlockmsg}, ${msg.title}, ${msg.desc}`)

            document.querySelector("audio").src = msg.audio
            document.querySelector("audio").volume = custom.volume / 10
            document.querySelector("audio").play()

            invoke("ipc", { eventname: "startprogress", payload: { msg: msg.debug } })
        }, transition))
    })

    document.querySelector(".mainwrapper").addEventListener("animationend", event => {
        if (event.animationName === "finish") {
            invoke("ipc", { eventname: "notifyclosed", payload: {} })
            invoke("close_window")
        }
    })
} else {
    const { path } = window.top.__TAURI__
    const { convertFileSrc } = window.top.__TAURI__.tauri

    window.path = path
    window.convertFileSrc = convertFileSrc

    window.addEventListener("message", async event => {
        document.getElementById("styles") && await new Promise(resolve => {
            document.getElementById("styles").remove()
            document.querySelector(".mainwrapper").innerHTML = null
            setTimeout(resolve,50)
        })

        const msg = event.data.msg
        const { custom, html, href, fonts } = event.data.optional

        !msg.overlay && !msg.extwin ? custom.scale = 100 : null
        !msg.overlay ? (document.body.style.backgroundColor = msg.extwin ? "transparent" : "#101010") : document.body.setAttribute("noanim","")
        // msg.extwin && window.top.document.body.setAttribute("playing","")

        await SetNotifyContent(msg,custom,html,href,fonts)
        .catch(err => console.log(typeof err === "object" ? err.message : err))

        document.querySelector(".mainwrapper").addEventListener("animationend", event => {
            const divs = ["mainwrapper","screenshotwrapper"]
            if (event.animationName === "finish") {
                divs.map(div => document.querySelector(`.${div}`).style.animation = "none")

                const elems = [window.top.document.getElementById("customiserplaystate"),document.body]
                elems.map(elem => elem && elem.setAttribute("finish",""))

                // window.top.document.body.removeAttribute("playing")
            }
        })
    })
}