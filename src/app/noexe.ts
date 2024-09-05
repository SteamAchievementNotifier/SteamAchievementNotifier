import { ipcRenderer } from "electron"

window.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("noexeclose"),{ once: true })

    ipcRenderer.once("noexeready", (event,noexe: string,noexesub: string) => {
        document.getElementById("title")!.textContent = noexe
        document.getElementById("sub")!.textContent = noexesub
    })

    ipcRenderer.once("noexeclose", () => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("noexeready")
})