import { ipcRenderer } from "electron"

const notifyid = process.argv.find(arg => arg.startsWith("--notifyid="))!.split("=")[1]

ipcRenderer.once(`imgwinready_${notifyid}`, (event,obj: { info: Info, dims: { width: number, height: number, offset: number, scalefactor: number } }) => {
    const { iswebview } = obj.info
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    document.documentElement.style.setProperty("--opacity","1")
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