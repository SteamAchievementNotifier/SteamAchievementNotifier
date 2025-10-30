import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanhelper } from "./sanhelper"
import { sanconfig, shortcutkeys } from "./config"
import { usertheme } from "./usertheme"
import { language } from "./language"

export const dialog = {
    init: (error?: "ERROR") => {
        error && document.body.setAttribute("error","")
        window.addEventListener("click", ({ target }) => (target === document.querySelector("dialog") || target === document.getElementById("backbtn") || target === document.getElementById("settingsclose")) && document.querySelector("dialog:not(:has(.btnwrapper > #betaexitbtn))") && dialog.close())
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
        } else {
            sanhelper.updatetabs()

            document.querySelector("#settingsheader > span")!.textContent = title

            document.querySelectorAll(`#settingscontent .settingstabs > .tab`).forEach(btn => btn instanceof HTMLButtonElement && (btn!.onclick = (event: MouseEvent) => {
                sanhelper.switchtab(event)
                sanhelper.getshortcut(config,event.target as HTMLElement)
                sanhelper.updatetabs()
            }))

            document.getElementById("shortcutbtn")!.onclick = event => sanhelper.setshortcut(config,event)

            shortcutkeys.forEach((partialcombo,key) => {
                const btn = document.getElementById(`${key}shortcut`)! as HTMLButtonElement
                
                btn.textContent = sanhelper.getshortcut(config,btn.id,btn.id)
                btn.onclick = event => sanhelper.setshortcut(config,event,(event.target as HTMLButtonElement).id,partialcombo)
            })

            const updatetables = async (type: "linkgame" | "exclusionlist" | "themeswitch") => {
                const table = document.querySelector(`.addhtml > .tbl#${type}tablewrapper > table`)! as HTMLTableElement
                const entries = type !== "exclusionlist" ? Object.entries(JSON.parse(localStorage.getItem(type)!)).sort() as [string,any][] : config.get("exclusions") as number[]

                table.querySelectorAll(`tr:not(#${type}headers)`).forEach(item => item && item.remove())

                if (type !== "exclusionlist") {
                    table.querySelector(`#${type}headers > th:nth-child(2)`)!.textContent = await language.get(type === "linkgame" ? "exepath" : "themes",[type,"content"])
                    type === "themeswitch" && (table.querySelector(`#${type}headers > th:nth-child(3)`)!.textContent = await language.get("src",[type,"content"]))
                }

                if (!entries.length) {
                    const html = `
                        <tr class="nodata">
                            <td>&lt;${await language.get("nodata")}&gt;</td>
                            ${type !== "exclusionlist" ? `<td>&lt;${await language.get("nodata")}&gt;</td>` : ""}
                            ${type === "themeswitch" ? `<td>&lt;${await language.get("nodata")}&gt;</td>` : ""}
                            <td></td>
                            <td></td>
                        </tr>
                    `

                    return table.insertAdjacentHTML("beforeend",html)
                }

                entries.forEach(async (entry: any) => {
                    const tr = document.createElement("tr")

                    const appid = document.createElement("td")
                    appid.textContent = type !== "exclusionlist" ? entry[0] : entry
                    tr.appendChild(appid)

                    const gettheme = (type: NotifyType,id: number) => (config.get(`customisation.${type}.usertheme`) as UserTheme[]).find(theme => theme.id === id)?.label

                    if (type !== "exclusionlist") {
                        if (typeof entry[1] === "object") {
                            const themedeleted = await language.get("themedeleted",["themeswitch","content"])

                            for (const i in entry[1]) {
                                const entryvalue = entry[1][i]

                                const objvalue = (type === "themeswitch" && i === "themes" ? Object.keys(entryvalue).filter(key => !config.get("trophymode") ? key !== "semi" : key).map(key => `<span ${key}></span>${gettheme(key as NotifyType,entryvalue[key]) || `<i style="color: red;">❗ ${themedeleted}</i>`}`) : Object.values(entryvalue)).join("<br>")
                                const strvalue = type === "themeswitch" && i === "src" ? (config.get("monitors").find(monitor => monitor.id === entryvalue)?.label || `<i style="font-size: 0.5rem; color: red;">❗ ${await language.get("notconnected")}</i>`) : entryvalue

                                const td = document.createElement("td")
                                td.innerHTML = typeof entryvalue === "object" ? objvalue : strvalue
                                tr.appendChild(td)
                            }
                        } else {
                            const td = document.createElement("td")
                            td.textContent = entry[1]
                            tr.appendChild(td)
                        }
                    }

                    for (const id of ["editbtn","unlinkbtn"] as const) {
                        const td = document.createElement("td")
                        const btn = document.createElement("button")

                        btn.className = id
                        td.appendChild(btn)

                        tr.appendChild(td)

                        table.appendChild(tr)
                    }
                })

                const getappid = (strid: string | null) => {
                    if (!strid || typeof parseInt(strid) !== "number") return null
                    return parseInt(strid)
                }

                requestAnimationFrame(() => {
                    document.querySelectorAll(".editbtn").forEach(async btn => {
                        const { log } = await import("./log")
                        let lsentry: { [key: number]: ThemeSwitch | string } | number | undefined = undefined

                        btn && ((btn as HTMLButtonElement).onclick = () => {
                            const elem = btn.parentElement!.parentElement!.querySelector("td:first-child")!.textContent
                            const appid = getappid(elem)
                            if (!appid) return log.write("WARN",`No matching "${type}" entry for AppID ${elem}`)

                            if (type !== "exclusionlist") {
                                const entries = JSON.parse(localStorage.getItem(type)!)
    
                                if (appid in entries) lsentry = entries[appid]
                            } else {
                                const exclusions = config.get("exclusions")
                                
                                const match = exclusions.find(id => id === appid)
                                if (!match) return log.write("WARN",`No matching "${type}" entry for AppID ${elem}`)
                                
                                lsentry = match
                            }

                            lsentry && setnewdialog(type,{ appid, lsentry })()
                        })
                    })

                    document.querySelectorAll(".unlinkbtn").forEach(async btn => {
                        const { log } = await import("./log")

                        btn && ((btn as HTMLButtonElement).onclick = () => {
                            const elem = btn.parentElement!.parentElement!.querySelector("td:first-child")!.textContent
                            const appid = getappid(elem)
                            if (!appid) return log.write("WARN",`No matching "${type}" entry for AppID ${elem}`)
    
                            if (type !== "exclusionlist") {
                                const entries = JSON.parse(localStorage.getItem(type)!)
    
                                if (appid in entries) {
                                    delete entries[appid]
                                    localStorage.setItem(type,JSON.stringify(entries))
                                }
                            } else {
                                const exclusions = config.get("exclusions")
                                config.set("exclusions",exclusions.filter(id => id !== appid))
                            }
    
                            updatetables(type)
                        })
                    })
                })
            }

            const settabindex = (btn: HTMLButtonElement,values: (string | null | undefined)[]) => btn.tabIndex = values.every(value => Boolean(value)) ? 0 : -1

            const setnewdialog = (type: "linkgame" | "exclusionlist" | "themeswitch",obj?: { appid: number, lsentry: { [key: number]: ThemeSwitch | string } | number }) => {
                switch (type) {
                    case "linkgame": return async () => {
                        dialog.open({
                            title: await language.get(`link${!!obj ? "edit" : "new"}`,[type,"content"]),
                            type: "default",
                            icon: sanhelper.setfilepath("icon",`${!!obj ? "edit" : "newlink"}.svg`),
                            sub: await language.get(`link${!!obj ? "edit" : "new"}sub`,[type,"content"]),
                            addHTML: path.join(__dirname,"linkgamenew.html"),
                            buttons: [{
                                id: "ok",
                                label: !!obj ? await language.get("edit") : await language.get("link",[type,"content"]),
                                icon: "",
                                click: () => {
                                    const entries = {
                                        ...JSON.parse(localStorage.getItem(type)!),
                                        [linkgameappid.value]: linkgameselect.textContent
                                    }

                                    localStorage.setItem(type,JSON.stringify(entries))

                                    updatetables(type)
                                    dialog.close()
                                }
                            }]
                        })

                        document.querySelector("#linkgamenewheaders > th:nth-child(2)")!.textContent = await language.get("exepath",["linkgame","content"])

                        const linkgameappid = document.getElementById("linkgameappid")! as HTMLInputElement
                        const linkgameselect = document.getElementById("linkgameselect")! as HTMLTableCellElement

                        linkgameappid.toggleAttribute("readonly",!!obj)

                        if (obj) {
                            linkgameappid.value = `${obj.appid}`
                            linkgameselect.textContent = obj.lsentry as string
                        }

                        linkgameselect.onclick = () => {
                            ipcRenderer.once("loadfile",(event,file) => file && (linkgameselect.textContent = file[0].replace(/\\/g,"/")))
                            ipcRenderer.send("loadfile","exe")
                        }

                        const okbtn = document.querySelector("button#okbtn")! as HTMLButtonElement
                        okbtn.tabIndex = -1

                        ;[linkgameappid,linkgameselect].forEach(elem => {
                            elem.onfocus = () => settabindex(okbtn,[linkgameappid.value,linkgameselect.textContent])
                            elem.onblur = () => settabindex(okbtn,[linkgameappid.value,linkgameselect.textContent])
                            elem.onkeydown = () => settabindex(okbtn,[linkgameappid.value,linkgameselect.textContent])
                        })
                    }
                    case "exclusionlist": return async () => {
                        ipcRenderer.once("runningappid",async (event,appid) => {
                            dialog.open({
                                title: await language.get(`exclusion${!!obj ? "edit" : "new"}`,["exclusions","content"]),
                                type: "default",
                                icon: sanhelper.setfilepath("icon",`${!!obj ? "edit" : "newexclusion"}.svg`),
                                sub: await language.get(`exclusion${!!obj ? "edit" : "new"}sub`,["exclusions","content"]),
                                addHTML: `<input type="number" class="appidinput" id="exclusionappid" placeholder="..."${appid ? ` appid="${appid}"` : ""}><button id="detectedappid"><span></span></button>`,
                                buttons: [{
                                    id: "ok",
                                    label: await language.get(!!obj ? "edit" : "ok"),
                                    icon: "",
                                    click: () => {
                                        const exclusions = config.get("exclusions")
    
                                        obj && exclusions.includes(obj.appid) && exclusions.splice(exclusions.indexOf(obj.appid),1)
    
                                        exclusions.push(parseInt(input.value))
    
                                        config.set("exclusions",exclusions)
                                        updatetables(type)
                                        dialog.close()

                                        appid && config.get("exclusions").includes(appid) && ipcRenderer.send("validateworker") // Restart the Worker process if the current AppID has been added to the Exclusion List
                                    }
                                }]
                            })
    
                            const okbtn = document.querySelector("button#okbtn")! as HTMLButtonElement
                            okbtn.tabIndex = -1
    
                            const input = document.getElementById("exclusionappid")! as HTMLInputElement
                            if (obj) input.value = `${obj.lsentry}`
    
                            input.onfocus = () => settabindex(okbtn,[input.value])
                            input.onblur = () => settabindex(okbtn,[input.value])
                            input.onkeydown = () => settabindex(okbtn,[input.value])

                            const detectedappidbtn = document.getElementById("detectedappid") as HTMLButtonElement | null
                            detectedappidbtn && appid && (detectedappidbtn.onclick = () => input.value = appid)
                        })

                        ipcRenderer.send("runningappid")
                    }
                    case "themeswitch": return async () => {
                        dialog.open({
                            title: await language.get(`themeswitch${!!obj ? "edit" : "new"}`,[type,"content"]),
                            type: "default",
                            icon: sanhelper.setfilepath("icon",`${!!obj ? "edit" : "newautoswitchtheme"}.svg`),
                            sub: await language.get(`themeswitch${!!obj ? "edit" : "new"}sub`,[type,"content"]),
                            addHTML: path.join(__dirname,"themeswitchnew.html"),
                            buttons: [{
                                id: "ok",
                                label: await language.get(!!obj ? "edit" : "ok"),
                                icon: "",
                                click: () => {
                                    const entries = {
                                        ...JSON.parse(localStorage.getItem(type)!),
                                        [themeswitchappid.value]: {
                                            themes: Object.fromEntries(types.map(t => [t,parseInt((document.querySelector(`#themeswitchnewselectwrapper select#${t}`)! as HTMLSelectElement).value)])),
                                            src: parseInt(srcselect.value)
                                        }
                                    }

                                    localStorage.setItem(type,JSON.stringify(entries))

                                    updatetables(type)
                                    dialog.close()
                                }
                            }]
                        })

                        document.querySelector("#themeswitchnewheaders > th:nth-child(2)")!.textContent = await language.get("src",[type,"content"])

                        const okbtn = document.querySelector("button#okbtn")! as HTMLButtonElement
                        okbtn.tabIndex = -1

                        const themeswitchappid = document.getElementById("themeswitchappid")! as HTMLInputElement
                        const themeswitchselects = document.querySelector("#themeswitchnewselectwrapper")!
                        const srcselect = document.getElementById("themeswitchsrc")! as HTMLSelectElement

                        themeswitchappid.toggleAttribute("readonly",!!obj)

                        if (obj) themeswitchappid.value = `${obj.appid}`

                        themeswitchappid.onfocus = () => settabindex(okbtn,[themeswitchappid.value])
                        themeswitchappid.onblur = () => settabindex(okbtn,[themeswitchappid.value])
                        themeswitchappid.onkeydown = () => settabindex(okbtn,[themeswitchappid.value])

                        config.get("monitors").forEach(monitor => srcselect.insertAdjacentHTML("beforeend",`<option value="${monitor.id}">${monitor.label}</option>`))

                        const { customisation, trophymode } = config.store
                        const types = ["main",...(trophymode ? ["semi"] : []),"rare", "plat"] as NotifyType[]

                        ;(async () => {
                            const { language } = await import("./language")
                            ;types.forEach(async t => themeswitchselects.querySelector(`th#${t}`)!.textContent = await language.get(t))
                        })()

                        themeswitchselects.querySelectorAll("select")!.forEach(s => {
                            const select = s as HTMLSelectElement
                            const themes = new Map<number,(string | number)[]>([])
                            const userthemes = (customisation[select.id] as Customisation).usertheme

                            for (const theme in userthemes) {
                                themes.set(userthemes[theme].id as number,[userthemes[theme].id,userthemes[theme].label])
                            }

                            themes.forEach(value => select.insertAdjacentHTML("beforeend",`<option value="${value[0]}">${value[1]}</option>`))
                        })

                        if (obj && typeof obj.lsentry === "object" && "themes" in obj.lsentry && "src" in obj.lsentry) {
                            const { themes, src } = obj.lsentry as ThemeSwitch

                            types.forEach(type => {
                                const select = themeswitchselects.querySelector(`select#${type}`) as HTMLSelectElement
                                if (select && themes[type] !== undefined) {
                                    select.value = `${themes[type]}`
                                }
                            })

                            srcselect.value = `${src}`
                        }
                    }
                }
            }

            document.getElementById("linkedgames")!.onclick = async () => {
                dialog.open({
                    title: await language.get("linkedgames",["settings","games","content"]),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","link.svg"),
                    sub: await language.get("managesub",["linkgame","content"]),
                    addHTML: path.join(__dirname,"linkgame.html"),
                    buttons: [{
                        id: "linknew",
                        label: await language.get("new"),
                        icon: sanhelper.setfilepath("icon","newlink.svg"),
                        click: setnewdialog("linkgame")
                    }]
                })

                sanhelper.sethelpdialog(document.getElementById("appidhelp")!,"findappid")
                updatetables("linkgame")
            }
            
            document.getElementById("exclusionlist")!.onclick = async () => {
                dialog.open({
                    title: await language.get("exclusionlist",["settings","games","content"]),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","exclusion.svg"),
                    sub: await language.get("managesub",["exclusions","content"]),
                    addHTML: path.join(__dirname,"exclusionlist.html"),
                    buttons: [{
                        id: "exclusionnew",
                        label: await language.get("new"),
                        icon: sanhelper.setfilepath("icon","newexclusion.svg"),
                        click: setnewdialog("exclusionlist")
                    }]
                })

                sanhelper.sethelpdialog(document.getElementById("appidhelp")!,"findappid")
                updatetables("exclusionlist")
            }

            document.getElementById("themeswitch")!.onclick = async () => {
                dialog.open({
                    title: await language.get("themeswitch",["settings","games","content"]),
                    type: "default",
                    icon: sanhelper.setfilepath("icon","autoswitchtheme.svg"),
                    sub: await language.get("managesub",["themeswitch","content"]),
                    addHTML: path.join(__dirname,"themeswitch.html"),
                    buttons: [{
                        id: "themeswitchnew",
                        label: await language.get("new"),
                        icon: sanhelper.setfilepath("icon","newautoswitchtheme.svg"),
                        click: setnewdialog("themeswitch")
                    }]
                })

                sanhelper.sethelpdialog(document.getElementById("appidhelp")!,"findappid")
                updatetables("themeswitch")
            }

            document.getElementById("showcustomfiles")!.onclick = () => sanhelper.showcustomfiles()
            sanhelper.sethelpdialog(document.querySelector("span#raloghelp")!,"raenablelog")

            ;[
                "resetwindow",
                "releasegame",
                "suspendresume",
                "restartapp"
            ].forEach(id => document.getElementById(id)!.onclick = () => ipcRenderer.send(id.replace(/window$/,"win")))

            document.getElementById("log")!.onclick = () => sanhelper.createlogwin(config.get("logtype"))

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
            btn.onclick = (event: Event) => !isTheme ? (click && click()) : usertheme.set(id as number,event)

            btn.style.setProperty("--icon",`url('${fs.existsSync(icon) ? icon : "../../img/sanlogotrophy.svg"}')`)

            if (menutype === "default") {
                btn.textContent = label
                document.querySelector(".btnwrapper")!.insertBefore(btn,document.getElementById("backbtn"))
            } else if (menutype === "selection") {
                const span = document.createElement("span")
                span.textContent = label
                btn.appendChild(span)

                if (isTheme) {
                    const delbtn = document.createElement("button")
                    delbtn.className = "userthemedelbtn"
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