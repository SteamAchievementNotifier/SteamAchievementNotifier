import { ipcRenderer } from "electron"

window.addEventListener("DOMContentLoaded",() => {
    document.body.onclick = () => ipcRenderer.send("errnotifyclick")

    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("errnotifyclose"),{ once: true })

    ipcRenderer.once("errnotifyready",(event,channel: ErrNotifyType,title: string,sub: string) => {
        document.getElementById("title")!.textContent = title
        document.getElementById("sub")![channel === "addlinkfailed" ? "innerHTML" : "textContent"] = sub
    })

    ipcRenderer.once("errnotifyclose",() => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("errnotifyready")
})