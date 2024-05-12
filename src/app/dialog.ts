import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { usertheme } from "./usertheme"
import { language } from "./language"

export const dialog = {
    init: (error?: "ERROR") => {
        error && document.body.setAttribute("error","")
        window.addEventListener("click", ({ target }) => (target === document.querySelector("dialog") || target === document.getElementById("backbtn") || target === document.getElementById("settingsclose")) && dialog.close())
    },
    open: (obj: Dialog,errwin?: boolean) => {
        !errwin && (async () => {
            await language.load()
            document.querySelector(".rect#game > span")!.dispatchEvent(new Event("updategamelbl"))
        })()

        const config = sanconfig.get()
        const { type: menutype, title, sub, addHTML, icon, buttons } = obj
        const dialogelem = document.createElement("dialog")

        dialogelem.className = "wrapper"
        dialogelem.setAttribute(menutype,"")
        dialogelem.insertAdjacentHTML("beforeend",fs.readFileSync(path.join(__dirname,`${menutype === "menu" ? "settings" : "dialog"}.html`)).toString())
        document.body.prepend(dialogelem)

        if (menutype !== "menu") {
            document.querySelector(".contenttitle")!.textContent = title
            document.documentElement.style.setProperty("--dialogicon",`url('${icon}')`)

            if (sub instanceof Array) {
                const div = document.createElement("div")
                div.className = "wrapper"
                div.id = "contentsubitems"

                sub.forEach(item => {
                    const cont = document.createElement("div")
                    const span = document.createElement("span")
                    span.className = "contentsubitem"
                    span.innerHTML = item

                    cont.appendChild(span)
                    div.appendChild(cont)
                    document.querySelector(".contentsub")!.appendChild(div)
                })
            } else {
                document.querySelector(".contentsub")!.innerHTML = menutype === "default" ? (sub || "") : ""
            }

            if (addHTML) {
                const htmlstring = new DOMParser().parseFromString(addHTML,"text/html")
                const isvalidhtml = Array.from(htmlstring.body.childNodes).some(node => node.nodeType === 1)

                const div = document.createElement("div")
                div.className = "addhtml"
                div.innerHTML = isvalidhtml ? addHTML : fs.readFileSync(addHTML).toString()

                document.querySelector(".contentsub")!.appendChild(div)
            }

            menutype === "default" && document.documentElement.style.setProperty("--columns",`repeat(${buttons ? buttons.length + 1 : 1},1fr)`)
        } else {
            sanhelper.updatetabs()

            document.querySelector("#settingsheader > span")!.textContent = title

            document.querySelectorAll(`#settingscontent .settingstabs > .tab`).forEach(btn => btn instanceof HTMLButtonElement && (btn!.onclick = (event: MouseEvent) => {
                sanhelper.switchtab(event)
                sanhelper.getshortcut(config,event.target as HTMLElement)
                sanhelper.updatetabs()
            }))

            document.getElementById("shortcutbtn")!.onclick = event => sanhelper.setshortcut(config,event)
            document.getElementById("showcustomfiles")!.onclick = () => sanhelper.showcustomfiles()
            document.getElementById("log")!.onclick = () => sanhelper.createlogwin()
            document.getElementById("reset")!.onclick = async () => dialog.open({
                title: await language.get("reset",["settings","misc","content"]),
                type: "default",
                icon: sanhelper.setfilepath("icon","reset.svg"),
                sub: await language.get("sub",["reset","content"]),
                buttons: [{
                    id: "ok",
                    label: await language.get("reset",["reset","content"]),
                    icon: "",
                    click: () => ipcRenderer.send("restart","Reset App confirmed by User")
                }]
            })

            document.getElementById("checkforupdates")!.onclick = async () => {
                ipcRenderer.once("noupdateavailable", async (event,currentversion) => dialog.open({
                    title: await language.get("noupdateavailable"),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","update_white.svg"),
                    sub: `V${currentversion}: ${await language.get("latestversion")}`
                }))

                ipcRenderer.send("checkforupdates")
            }

            sanhelper.getshortcut(config,document.body)
            document.querySelector(`#settingsversion > span:last-child`)!.textContent = sanhelper.semver
        }

        buttons?.forEach((obj: Button) => {
            const { id, label, icon, click } = obj
            const isTheme = "customisation" in obj

            const btn = document.createElement("button")
            btn.className = menutype === "selection" ? "rect" : ""
            btn.id = !isTheme ? `${id}btn` : `usertheme${id}`
            btn.onclick = (event: Event) => !isTheme ? (click && click()) : usertheme.set(event, id as number)

            btn.style.setProperty("--icon",`url('${icon}')`)

            if (menutype === "default") {
                btn.textContent = label
                document.querySelector(".btnwrapper")!.insertBefore(btn,document.getElementById("backbtn"))
            } else if (menutype === "selection") {
                const span = document.createElement("span")
                span.textContent = label
                btn.appendChild(span)

                if (isTheme) {
                    const delbtn = document.createElement("button")
                    delbtn.className = `userthemedelbtn`
                    delbtn.id = `userthemedelbtn${id}`
                    btn.appendChild(delbtn)
                }

                document.querySelector(".contentsub")!.appendChild(btn)
            }
        })

        if (!errwin) {
            usertheme.update()
            sanhelper.tooltips(config.get("tooltips"))
        }

        const showdialog = () => {
            const dialog = document.querySelector("dialog")!
            const content = document.getElementById("content")!

            dialog.showModal()
            menutype === "selection" && (document.querySelector(".contentsub")!.scrollTop = 0)
            content.setAttribute("open","")
        }

        showdialog()
    },
    close: () => {
        ipcRenderer.send("sswin")

        const attrs = [
            "default",
            "selection",
            "menu"
        ]

        const config = sanconfig.get()
        const dialog = document.querySelector("dialog")!
        const content = document.getElementById("content")!
        const menutype = attrs.find(attr => dialog.hasAttribute(attr))
        const noanim = document.body.hasAttribute("noanim")

        const settransitionlistener = (): void => content.addEventListener(`transition${menutype === "menu" ? "start" : "end"}`, ({ propertyName }: TransitionEvent) => propertyName === `${menutype === "menu" ? "translate" : "scale"}` ? (dialog.style.animation = `dialogout var(--transition) forwards`) : settransitionlistener(), { once: true })
        const resetdialog = () => {
            dialog.style.animation = ""
            dialog.close()
            dialog.remove()

            document.documentElement.removeAttribute("style")
            sanhelper.tooltips(config.get("tooltips"))

            // Fixes issue where opening/closing the "Save Theme" menu removes label for Decoration elements in Customiser
            document.getElementById("customiser") && sanhelper.updatetabs()
        }
    
        content.removeAttribute("open")
        !noanim && settransitionlistener()
    
        !noanim ? dialog.addEventListener("animationend", ({ animationName }: AnimationEvent) => animationName === "dialogout" && resetdialog(),{ once: true }) : resetdialog()
    }
}