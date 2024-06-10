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
    const { customisation, iswebview, info: { type } } = obj
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    const downscale = new Map<string,number>([
        ["xqjan",0.85]
    ])

    downscale.forEach((value,key) => customisation.preset === key && (webview.style.scale = value.toString()))

    ipcRenderer.once("dims", (event,dims: { width: number, height: number, offset: number, scalefactor: number }) => {
        // Updates the placement of the "ss" notification when changed without closing
        // (async () => {
        //     const config = (await (import("./config"))).sanconfig.get(true)
        //     config.onDidChange(`customisation.${type}.ovoffset`,(value: any) => setwebviewpos(margin,value))
        //     config.onDidChange(`customisation.${type}.ovpos`,() => setwebviewpos(margin,customisation.ovoffset))
        // })()

        const { width, height, offset, scalefactor } = dims
        webview.shadowRoot!.querySelector("iframe")!.style.width = `${width}px`
        webview.shadowRoot!.querySelector("iframe")!.style.height = `${height}px`
    
        document.documentElement.style.setProperty("--opacity","1")
        webview.style.setProperty("--width",`${width}px`)
        webview.style.setProperty("--height",`${height}px`)

        // Looks dumb, but if `offset` is 0, it is obviously falsy. So, an OR operator (`offset || 25`) would always be coerced to 25. Don't @ me
        // Also, `25 * (customisation.scale)` references the base value of 50 added to the notification size - not a magic number
        // This puts the notification at the edge of the screen, so we can then translate it by a fixed value (`translate` value) for each scale setting
        const margin = `${(!offset ? 0 : 25 * (customisation.scale / 100)) * -1}px`
        const translate = !offset ? 0 : 40 / scalefactor

        const postype = !customisation.ovmatch ? "ovpos" : "pos"
        const setoffset = (axis: number,plusdir: string) => axis + translate * (customisation[postype].includes(plusdir) ? 1 : -1)

        const setwebviewpos = (margin: string,offset: { x: number, y: number }) => {
            webview.style.setProperty("--margin",margin)
            webview.style.setProperty("--offset",`${customisation[postype].includes("center") ? 0 : setoffset(offset.x,"left")}px ${setoffset(offset.y,"top")}px`)
        
            setnotifypos(customisation).forEach((value,key) => document.documentElement.style.setProperty(key,value))
        }

        setwebviewpos(margin,{ x: customisation.ovx, y: customisation.ovy })
    
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