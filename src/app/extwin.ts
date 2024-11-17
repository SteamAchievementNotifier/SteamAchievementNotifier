import { ipcRenderer } from "electron"

window.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("img") as HTMLImageElement
    ipcRenderer.on("imgdata",(event,imgdata) => img.src = imgdata)
})