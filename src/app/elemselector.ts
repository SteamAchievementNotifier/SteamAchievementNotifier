import ElectronStore from "electron-store"
import { sanconfig } from "./config"
import { __root, sanhelper } from "./sanhelper"
import path from "path"
import fs from "fs"

export const selectorelems = [
    "unlockmsg",
    "title",
    "desc",
    "percentpos",
    "hiddeniconpos",
    "decorationpos",
    "sspercentpos",
    "sshiddeniconpos",
    "ssdecorationpos"
]

const moveelem = (arr: string[],from: number,to: number) => arr.map((item,i) => (i === to ? arr[from] : i === from ? arr[to] : item))

const updateelems = (config: ElectronStore<Config>,type: "main" | "rare" | "plat",elems: string[],select: HTMLSelectElement,elemtype: "elems" | "sselems",max: number,posids: string[]) => {
    const key = `customisation.${type}.${elemtype}`
    let i = elems.indexOf(select.id)
    let newelems = elems.slice()

    const newpos = parseInt(select.value) - 1

    if (select.value !== "off") {
        i !== -1 ? (newelems = moveelem(newelems,i,newpos)) : newelems.splice(newpos,0,select.id)
        newelems.length > max && (newelems.pop() === select.id && (newelems = newelems.slice(0,max)))
    } else {
        i !== -1 && newelems.splice(i,1)
    }

    newelems = newelems.filter(value => (document.querySelector(`select#${value}`) as HTMLSelectElement).value !== "off" && value !== null)

    newelems.length < 1 && elems.length > 0 && (newelems = elems.slice(0,1))

    config.set(key,newelems)
    select.value = newelems.indexOf(select.id) > -1 ? (newelems.indexOf(select.id) + 1).toString() : "off"

    ;(async () => {
        // `config`/`elems` need to be refreshed, due to being updated by `config.set()` above
        const { sanconfig } = await import("./config")
        const config = sanconfig.get()
        posids.forEach(id => adjustpos(config,type,id,config.get(`customisation.${type}.${elemtype}`) as string[]))
    })()

    sanhelper.updatetabs()
}

const updateopts = (select: HTMLSelectElement,elems: string[],max: number) => select.querySelectorAll("option").forEach((opt,i) => {
    opt.removeAttribute("disabled")

    const istext = ["unlockmsg","title","desc"].some(id => select.id.includes(id))
    const selecttype = (istext && select.value !== "off") || !istext

    selecttype && i > elems.length && opt.setAttribute("disabled","")
    i > max && opt.remove()
})

const adjustpos = (config: ElectronStore<Config>, type: "main" | "rare" | "plat", id: string, elems: string[]) => config.get(`customisation.${type}.${id}`) as number > elems.length && config.set(`customisation.${type}.${id}`, elems.length > 0 ? elems.length : 0)

export const elemselector = async (elem: HTMLElement,elemtype: "elems" | "sselems") => {
    const config = sanconfig.get()
    if (elemtype === "sselems" && config.get("screenshots") === "off") return

    const lang = config.get("lang")
    const { translations: { global } } = await import(`../lang/${lang}`)

    const menutype = document.getElementById(elemtype === "elems" ? "customiser" : "settingscontent")!
    const elemselector = menutype.querySelector("#elemselector")
    elemselector && elemselector.remove()

    const type = sanhelper.type
    const max = elemtype === "sselems" && !(config.get("ssalldetails") as string[]).includes(config.get(`customisation.${type}.preset`) as string) ? 2 : 3
    const elems = config.get(`customisation.${type}.${elemtype}`) as string[]

    const posids = [
        "percent",
        "hiddenicon",
        "decoration"
    ]
    .map(id => `${elemtype === "sselems" ? "ss" : ""}${id}pos`)

    const html = fs.readFileSync(path.join(__root,"dist","app","elemselector.html")).toString()
    elem.insertAdjacentHTML("afterend",html)

    ;["overlay","notifyimg"].forEach(id => elemtype === "sselems" && menutype.querySelector("#elemselector")!.setAttribute(id,""))
    
    posids.forEach(id => menutype.querySelector(`#${id.replace(/^ss/,"")}`)!.id = id)
    menutype.querySelector(`#elemselector > span.lbl`)!.textContent = global["elemselector"]
    menutype.querySelectorAll(`#elemselector > .opt > .opt:has(select) > span`).forEach(lbl => lbl.textContent = global[lbl.nextElementSibling!.id])

    if (!elems) return

    menutype.querySelectorAll(`#elemselector > .opt > .opt:has(select) > select`).forEach(s => {
        const select = s as HTMLSelectElement
        select.onchange = null

        const id = posids.find(id => select.id.includes(id))

        if (id) {
            // if (id.includes("decorationpos") && (!sanconfig.defaulticons.get(config.get(`customisation.${type}.preset`) as string)!.decoration || config.get(`customisation.${type}.preset`) === "epicgames")) return select.parentElement!.remove()
            const preset = config.get(`customisation.${type}.preset`) as string
            // !!! Fix tooltips not showing on these presets
            const usedecoration = [
                "epicgames",
                "xboxone",
                "xbox360",
                "gfwl"
            ]

            if (id.includes("decorationpos")) {
                // Note: `defaulticons.epicgames.decoration` is NOT null in config, hence the equality check
                if (!sanconfig.defaulticons.get(preset)!.decoration || preset === "epicgames") {
                    // Dynamically removes the `select` element if `defaulticons.<preset>.decoration` is null
                    if (!usedecoration.includes(preset)) return select.parentElement!.remove()
                    // Dynamically removes any `option` elements greater than 1 for any preset in the `usedecoration` array (replaces legacy "Show Decoration" option)
                    menutype.querySelectorAll(`#${id} > option:not([value="off"],[value="1"])`).forEach(elem => elem.remove())
                }
            }

            if (type === "plat" && id.includes("hiddeniconpos")) return select.parentElement!.remove()

            const pos = config.get(`customisation.${type}.${id}`) as number
            select.value = pos > 0 ? pos.toString() : "off"
            select.onchange = event => {
                const value = (event.target as HTMLSelectElement).value
                config.set(`customisation.${type}.${id}`,value !== "off" ? parseInt(value) : 0)

                sanhelper.updatetabs()
                sanhelper.loadadditionaltooltips(menutype)
            }

            updateopts(select,elems,max)
            
            return
        }
        
        select.value = elems.indexOf(select.id) > -1 ? (elems.indexOf(select.id) + 1).toString() : "off"
        select.onchange = () => {
            updateelems(config,type,elems,select,elemtype,max,posids)
            sanhelper.loadadditionaltooltips(menutype)
        }
        
        updateopts(select,elems,max)
    })
}