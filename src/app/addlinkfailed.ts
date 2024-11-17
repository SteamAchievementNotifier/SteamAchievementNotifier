import { ipcRenderer } from "electron"

window.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("addlinkfailedclose"),{ once: true })

    ipcRenderer.once("addlinkfailedready", (event,addlinkfailed: string,addlinkfailedsub: string) => {
        document.getElementById("title")!.textContent = addlinkfailed
        document.getElementById("sub")!.innerHTML = addlinkfailedsub
    })

    ipcRenderer.once("addlinkfailedclose", () => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("addlinkfailedready")
})