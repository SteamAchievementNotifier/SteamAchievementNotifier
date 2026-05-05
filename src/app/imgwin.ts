import { ipcRenderer } from "electron"

const notifyid = process.argv.find(arg => arg.startsWith("--notifyid="))!.split("=")[1]

ipcRenderer.once(`imgwinready_${notifyid}`, (event,obj: { info: Info, dims: { width: number, height: number, offset: number, scalefactor: number } }) => {
    const { customisation, iswebview, customfiles } = obj.info
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = customfiles || "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    const downscale = new Map<string,number>([
        ["xqjan",0.85]
    ])

    for (const [key,value] of downscale) {
        customisation.preset === key && (webview.style.scale = value.toString())
    }

    const { width, height } = obj.dims
    const scale = customisation.scale / 100
    const bordersize = 50
    const glowsize = Math.round(bordersize * scale)

    // `width` is increased to accomodate `glowsize` @ 100%. Otherwise, the glow effect gets cut off at the sides
    webview.shadowRoot!.querySelector("iframe")!.style.width = `${(Math.round(width * scale) + glowsize) * 1.075}px`
    webview.shadowRoot!.querySelector("iframe")!.style.height = `${Math.round(height * scale) + glowsize}px`

    document.documentElement.style.setProperty("--opacity","1")
    webview.style.setProperty("--width",`${Math.round(width * scale) + glowsize}px`)
    webview.style.setProperty("--height",`${Math.round(height * scale) + glowsize}px`)

    obj.info.skipaudio = true

    // Sends the "sscapture_${notify.id}" (triggered via `base.ts` > `checkreadystate()` > `ipcRenderer.sendToHost()`) IPC event to Main
    webview.addEventListener("ipc-message", event => setTimeout(() => ipcRenderer.send(event.channel),2000))

    webview.addEventListener("dom-ready", () => {
        // Send "ss" event to webview - on receipt of this event, the webview adds the "ss" tag so animation can be disabled via CSS
        webview.send("ss")
        webview.send("notify",obj.info)
    })
})

window.addEventListener("DOMContentLoaded", () => ipcRenderer.send(`imgwinready_${notifyid}`))