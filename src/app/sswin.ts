import { ipcRenderer } from "electron"

const checkimgload = (img: HTMLImageElement): boolean => {
    if (!img.complete) return false
    console.log(`"${img.id}" loaded`)
    return true
}

const checkreadystate = (img: HTMLImageElement,channel: string): NodeJS.Timeout | void => {
    if (document.readyState !== "complete") return setTimeout(() => checkreadystate(img,channel),1000)
    if (!checkimgload(img)) return setTimeout(() => checkreadystate(img,channel),1000)

    ipcRenderer.send(channel)
}

const setnotifypos = (customisation: Customisation) => {
    const { ovmatch, pos, ovpos } = customisation

    const positions = {
        topleft: { x: "start", y: "start" },
        topcenter: { x: "center", y: "start" },
        topright: { x: "end", y: "start" },
        bottomleft: { x: "start", y: "end" },
        bottomcenter: { x: "center", y: "end" },
        bottomright: { x: "end", y: "end" },
    } as Positions

    const { x, y } = ovmatch ? positions[pos] as { x: "start" | "center" | "end", y: "start" | "center" | "end" } : positions[ovpos] as { x: "start" | "center" | "end", y: "start" | "center" | "end" }

    return new Map([
        ["--x",x],
        ["--y",y]
    ])
}

ipcRenderer.once("src",(event,path: string) => {
    try {
        const img = document.getElementById("ss")! as HTMLImageElement
        img.src = path

        checkreadystate(img,"src")
    } catch (err) {
        ipcRenderer.send("src",err as Error)
    }
})

ipcRenderer.once("sswinready", (event,obj: Info) => {
    const { customisation, iswebview } = obj
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    const downscale = new Map<string,number>([
        ["xqjan",0.85]
    ])

    downscale.forEach((value,key) => customisation.preset === key && (webview.style.scale = value.toString()))

    ipcRenderer.once("dims", (event,dims: { width: number, height: number }) => {
        const { width, height } = dims
        webview.shadowRoot!.querySelector("iframe")!.style.width = `${width}px`
        webview.shadowRoot!.querySelector("iframe")!.style.height = `${height}px`
    
        document.documentElement.style.setProperty("--opacity","1")
        webview.style.setProperty("--width",`${width}px`)
        webview.style.setProperty("--height",`${height}px`)

        const bordersize = 50
        const glowsize = bordersize * customisation.scale / 100
        const top = `${((glowsize / 2) * -1) + (bordersize / 2)}px`
        const bottom = `${(glowsize / 2) - (bordersize / 2)}px`

        const offsetmap = new Map<string,string>([
            ["topleft",top],
            ["topcenter",top],
            ["topright",top],
            ["bottomleft",bottom],
            ["bottomcenter",bottom],
            ["bottomright",bottom],
        ])

        webview.style.setProperty("--offset",offsetmap.get(customisation.ovpos)!)
    
        setnotifypos(customisation).forEach((value,key) => document.documentElement.style.setProperty(key,value))
    
        obj.skipaudio = true
    })

    // V1.9.1 - Testing with longer timeout to ensure webview has loaded. Not an ideal solution, but will do for now
    webview.addEventListener("ipc-message", event => setTimeout(() => ipcRenderer.send(event.channel),2000))

    webview.addEventListener("dom-ready", () => {
        // Send "ss" event to webview - on receipt of this event, the webview adds the "ss" tag so animation can be disabled via CSS
        webview.send("ss")
        webview.send("notify",obj)
    })
})

window.addEventListener("DOMContentLoaded", () => ipcRenderer.send("sswinready"))