import { ipcRenderer } from "electron"

const notifyid = process.argv.find(arg => arg.startsWith("--notifyid="))!.split("=")[1]
const [monwidth,monheight] = (["width","height"] as const).map(dim => parseInt(process.argv.find(arg => arg.startsWith(`--mon${dim}`))!.split("=")[1]))

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

ipcRenderer.once(`src_${notifyid}`,(event,path: string) => {
    try {
        const img = document.getElementById("ss")! as HTMLImageElement
        img.src = path

        checkreadystate(img,`src_${notifyid}`)
    } catch (err) {
        ipcRenderer.send(`src_${notifyid}`,err as Error)
    }
})

ipcRenderer.once(`sswinready_${notifyid}`,async (event,obj: { info: Info, dims: { width: number, height: number, offset: number, scalefactor: number } }) => {
    const { customisation, iswebview, info: { type }, customfiles } = obj.info
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = customfiles || "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    const downscale = new Map<string,number>([
        ["xqjan",0.85]
    ])

    for (const [key,value] of downscale) {
        customisation.preset === key && (webview.style.scale = value.toString())
    }

    const setwebviewpos = (margin: string,offset: { x: number, y: number }) => {
        const postype = !customisation.ovmatch ? "ovpos" : "pos"
        const setoffset = (axis: number,plusdir: string) => axis + (customisation[postype].includes("center") && plusdir === "left" ? 0 : translate) * (customisation[postype].includes(plusdir) ? 1 : -1)

        webview.style.setProperty("--margin",margin)
        webview.style.setProperty("--offset",`${setoffset(offset.x,"left")}px ${setoffset(offset.y,"top")}px`)
    
        setnotifypos(customisation).forEach((value,key) => document.documentElement.style.setProperty(key,value))
    }

    // Updates the placement of the "ss" notification when changed without closing
    const offsets = ["ovx","ovy"] as const
    const ovs = ["ovpos","ovmatch"] as const
    const config = (await (import("./config"))).sanconfig.get(true)

    for (const offset of offsets) {
        config.onDidChange(`customisation.${type}.${offset}`,(value: any) => setwebviewpos(margin,offset === "ovx" ? { x: value, y: customisation.ovy } : { x: customisation.ovx, y: value }))
    }

    for (const ov of ovs) {
        config.onDidChange(`customisation.${type}.${ov}`,(value: any) => {
            ov === "ovpos" ? customisation[ov] = value as "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" : customisation[ov] = value as boolean
            setwebviewpos(margin,{ x: customisation.ovx, y: customisation.ovy })
        })
    }

    const scale = customisation.scale / 100

    const { width, height, offset, scalefactor } = obj.dims
    webview.shadowRoot!.querySelector("iframe")!.style.width = `${Math.round(width * scale)}px`
    webview.shadowRoot!.querySelector("iframe")!.style.height = `${Math.round(height * scale)}px`

    document.documentElement.style.setProperty("--opacity","1")
    webview.style.setProperty("--width",`${Math.round(width * scale)}px`)
    webview.style.setProperty("--height",`${Math.round(height * scale)}px`)

    // `25 * (customisation.scale)` references the base value of 50 added to the notification size divided by 2 - not a magic number
    // This puts the notification at the edge of the screen, so we can then translate it by a fixed value (`translate` value) for each scale setting
    const margin = `${(!offset ? 0 : (25 * scale) * -1)}px`
    const baseoffset = (75 / scalefactor) + (Math.min(monwidth,monheight) * 0.025)
    const translate = !offset ? 0 : (baseoffset / scalefactor) * scale

    setwebviewpos(margin,{ x: customisation.ovx, y: customisation.ovy })

    obj.info.skipaudio = true

    // Sends the "sscapture_${notify.id}" (triggered via `base.ts` > `checkreadystate()` > `ipcRenderer.sendToHost()`) IPC event to Main
    webview.addEventListener("ipc-message",event => setTimeout(() => ipcRenderer.send(event.channel),2000))

    webview.addEventListener("dom-ready", () => {
        // Send "ss" event to webview - on receipt of this event, the webview adds the "ss" tag so animation can be disabled via CSS
        webview.send("ss")
        webview.send("notify",obj.info)
    })
})

window.addEventListener("DOMContentLoaded",() => ipcRenderer.send(`sswinready_${notifyid}`))