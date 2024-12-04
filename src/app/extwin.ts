import { ipcRenderer } from "electron"

ipcRenderer.on("notify",() => document.body.setAttribute("notify",""))
ipcRenderer.on("notifyfinished",() => {
    const img = document.querySelector("img") as HTMLImageElement
    document.body.removeAttribute("notify")
    setTimeout(() => img.src = "../../img/transparent.png",1000)
})

window.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("img") as HTMLImageElement
    ipcRenderer.on("imgdata",(event,imgdata) => img.src = imgdata)
})

;(["up","down"] as const).forEach(dir => window.addEventListener(`key${dir}`,event => document.body.toggleAttribute("show",event.key === "Control" && event.type === "keydown")))