import { ipcRenderer } from "electron"

window.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.querySelector("body > .wrapper")! as HTMLElement
    wrapper.addEventListener("animationend", (event: AnimationEvent) => event.animationName === "fade" && ipcRenderer.send("trackwinclose"),{ once: true })

    ipcRenderer.once("gamename", async (event,text: string,gamename: string,gamearticon: string,gameartlibhero: string) => {
        document.querySelector(".wrapper#textcont > span")!.textContent = text

        gamename && (document.getElementById("gamename")!.textContent = gamename)

        const gamelogo = document.getElementById("gamelogo")! as HTMLImageElement
        gamelogo.src = gamearticon

        document.documentElement.style.setProperty("--primary","transparent")
        document.documentElement.style.setProperty("--header",`url('${gameartlibhero}')`)
    })

    ipcRenderer.once("trackwinclose", () => wrapper.style.animation = "fade 0.5s forwards")
    ipcRenderer.send("trackwinready")
})
