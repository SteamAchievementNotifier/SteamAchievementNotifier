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

            // Prevents "updategamelinks" function from including localStorage items with the given key
            const localstoragefilter = [
                "closedstate"
            ]

            const setappidhelpdialog = (span: HTMLSpanElement) => span.onclick = async () => dialog.open({
                title: await language.get("findappid"),
                type: "default",
                icon: sanhelper.setfilepath("icon","question.svg"),
                sub: await language.get("findappidsub")
            })

            const updatetables = async (type: "linkgame" | "exclusionlist") => {
                const table = document.querySelector(`.addhtml > .tbl#${type}tablewrapper > table`)! as HTMLTableElement
                const entries = type === "linkgame" ? Object.entries(localStorage).filter(item => !localstoragefilter.includes(item[0])).sort() : config.get("exclusions")

                table.querySelectorAll(`tr:not(#${type}headers)`).forEach(item => item && item.remove())
                type === "linkgame" && (table.querySelector(`#${type}headers > th:nth-child(2)`)!.textContent = await language.get("exepath",["linkgame","content"]))

                if (!entries.length) {
                    const html = `
                        <tr class="nodata">
                            <td>&lt;${await language.get("nodata")}&gt;</td>
                            ${type === "linkgame" ? `<td>&lt;${await language.get("nodata")}&gt;</td>` : ""}
                            <td></td>
                        </tr>
                    `

                    return table.insertAdjacentHTML("beforeend",html)
                }

                entries.forEach((entry: any) => {
                    const tr = document.createElement("tr")

                    const appid = document.createElement("td")
                    appid.textContent = type === "linkgame" ? entry[0] : entry
                    tr.appendChild(appid)

                    if (type === "linkgame") {
                        const exepath = document.createElement("td")
                        exepath.textContent = entry[1]
                        tr.appendChild(exepath)
                    }

                    const unlinktd = document.createElement("td")
                    const unlinkbtn = document.createElement("button")

                    unlinkbtn.className = "unlinkbtn"
                    unlinktd.appendChild(unlinkbtn)

                    tr.appendChild(unlinktd)

                    table.appendChild(tr)
                })

                const unlinkbtns = document.querySelectorAll(".unlinkbtn")
                unlinkbtns.forEach(btn => {
                    btn && ((btn as HTMLButtonElement).onclick = () => {
                        const appid = btn.parentElement!.parentElement!.querySelector("td:nth-child(1)")!.textContent

                        if (type === "linkgame") {
                            appid && localStorage.removeItem(appid)
                        } else if (type === "exclusionlist") {
                            const exclusions = config.get("exclusions")
                            appid && config.set("exclusions",exclusions.filter(id => id !== parseInt(appid)))
                        }

                        updatetables(type)
                    })
                })
            }

            document.getElementById("linkedgames")!.onclick = async () => {
                dialog.open({
                    title: await language.get("linkedgames",["settings","games","content"]),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","link.svg"),
                    sub: await language.get("managesub",["linkgame","content"]),
                    buttons: [{
                        id: "linknew",
                        label: await language.get("new"),
                        icon: sanhelper.setfilepath("icon","newlink.svg"),
                        click: async () => {
                            dialog.open({
                                title: await language.get("linknew",["linkgame","content"]),
                                type: "default",
                                icon: sanhelper.setfilepath("icon","newlink.svg"),
                                sub: await language.get("linknewsub",["linkgame","content"]),
                                addHTML: path.join(__dirname,"linkgamenew.html"),
                                buttons: [{
                                    id: "ok",
                                    label: await language.get("link",["linkgame","content"]),
                                    icon: "",
                                    click: () => {
                                        localStorage.setItem(linkgameappid.value,linkgameselect.innerText)
                                        updatetables("linkgame")
                                        dialog.close()
                                    }
                                }]
                            })

                            document.querySelector("#linkgamenewheaders > th:nth-child(2)")!.textContent = await language.get("exepath",["linkgame","content"])

                            const linkgameappid = document.getElementById("linkgameappid")! as HTMLInputElement
                            const linkgameselect = document.getElementById("linkgameselect")! as HTMLTableCellElement

                            linkgameselect.onclick = () => {
                                ipcRenderer.once("loadfile", (event,file) => file && (linkgameselect.textContent = file[0].replace(/\\/g,"/")))
                                ipcRenderer.send("loadfile","exe")
                            }
                        }
                    }],
                    addHTML: path.join(__dirname,"linkgame.html")
                })

                setappidhelpdialog(document.getElementById("appidhelp")!)
                updatetables("linkgame")
            }
            
            document.getElementById("exclusionlist")!.onclick = async () => {
                dialog.open({
                    title: await language.get("exclusionlist",["settings","games","content"]),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","exclusion.svg"),
                    sub: await language.get("managesub",["exclusions","content"]),
                    buttons: [{
                        id: "exclusionnew",
                        label: await language.get("new"),
                        icon: sanhelper.setfilepath("icon","newexclusion.svg"),
                        click: async () => dialog.open({
                            title: await language.get("exclusionnew",["exclusions","content"]),
                            type: "default",
                            icon: sanhelper.setfilepath("icon","newexclusion.svg"),
                            sub: await language.get("exclusionnewsub",["exclusions","content"]),
                            addHTML: `<input type="number" class="appidinput" id="exclusionappid" placeholder="...">`,
                            buttons: [{
                                id: "ok",
                                label: await language.get("ok"),
                                icon: "",
                                click: () => {
                                    const exclusions = config.get("exclusions")
                                    exclusions.push(parseInt((document.getElementById("exclusionappid")! as HTMLInputElement).value))

                                    config.set("exclusions",exclusions)
                                    updatetables("exclusionlist")
                                    dialog.close()
                                }
                            }]
                        })
                    }],
                    addHTML: path.join(__dirname,"exclusionlist.html"),
                })

                setappidhelpdialog(document.getElementById("appidhelp")!)
                updatetables("exclusionlist")
            }

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

                requestAnimationFrame(() => document.querySelector(".contentsub")!.appendChild(btn))
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
    close: (skipanim?: boolean) => {
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
        const noanim = skipanim || document.body.hasAttribute("noanim")

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