import { ipcRenderer } from "electron"

ipcRenderer.once("imgwinready", (event,obj: Info) => {
    const { iswebview } = obj
    const webview = document.querySelector("webview")! as Electron.WebviewTag

    webview.src = "../../notify/base.html"
    !iswebview || iswebview === "ss" && (document.querySelector(".menubtn#close") as HTMLButtonElement)!.remove()

    // Nothing is actually done here, but is used to signify that the notification window is ready to be shown
    ipcRenderer.once("ssdims", () => {
        document.documentElement.style.setProperty("--opacity","1")
        obj.skipaudio = true
    })

    webview.addEventListener("ipc-message", event => setTimeout(() => ipcRenderer.send(event.channel),2000))

    webview.addEventListener("dom-ready", () => {
        // Send "ss" event to webview - on receipt of this event, the webview adds the "ss" tag so animation can be disabled via CSS
        webview.send("ss")
        webview.send("notify",obj)
    })
})

window.addEventListener("DOMContentLoaded", () => ipcRenderer.send("imgwinready"))