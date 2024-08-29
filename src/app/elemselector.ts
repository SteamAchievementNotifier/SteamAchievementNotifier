import ElectronStore from "electron-store"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

const moveelem = (arr: string[],from: number,to: number) => arr.map((item,i) => (i === to ? arr[from] : i === from ? arr[to] : item))

const updateelems = (config: ElectronStore<Config>,type: "main" | "rare" | "plat",elems: string[],select: HTMLSelectElement,elemtype: "elems" | "sselems",max: number) => {
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

    sanhelper.updatetabs()
}

export const elemselector = async (elem: HTMLElement,elemtype: "elems" | "sselems") => {
    const menutype = document.getElementById(elemtype === "elems" ? "customiser" : "settingscontent")!
    const elemselector = menutype.querySelector("#elemselector")
    elemselector && elemselector.remove()

    const config = sanconfig.get()
    const lang = config.get("lang")
    const { translations: { global } } = await import(`../lang/${lang}`)

    const type = sanhelper.type
    const max = elemtype === "sselems" && !(config.get("ssalldetails") as string[]).includes(config.get(`customisation.${type}.preset`) as string) ? 2 : 3

    const html = `
        <div class="wrapper opt" id="elemselector">
            <span class="lbl"></span>
            <div class="wrapper opt">
                <div class="wrapper opt">
                    <span></span>
                    <select name="unlockmsg" id="unlockmsg">
                        <option value="off">🚫</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="title" id="title">
                        <option value="off">🚫</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="desc" id="desc">
                        <option value="off">🚫</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="hiddeniconpos" id="hiddeniconpos">
                        <option value="off">🚫</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="decorationpos" id="decorationpos">
                        <option value="off">🚫</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
        </div>
    `

    elem.insertAdjacentHTML("afterend",html)

    menutype.querySelectorAll(`select#hiddeniconpos,select#customiconpos`).forEach(select => elemtype === "sselems" && (select.id = `ss${select.id}`))
    menutype.querySelector(`#elemselector > span.lbl`)!.textContent = global["elemselector"]

    const elems = config.get(`customisation.${type}.${elemtype}`) as string[]

    menutype.querySelectorAll(`#elemselector > .opt > .opt:has(select) > span`).forEach(lbl => lbl.textContent = global[lbl.nextElementSibling!.id])

    if (!elems) return

    menutype.querySelectorAll(`#elemselector > .opt > .opt:has(select) > select`).forEach(s => {
        const select = s as HTMLSelectElement
        select.onchange = null

        const iconids = [
            "hiddeniconpos",
            "decorationpos"
        ]
        .map(id => `${elemtype === "sselems" ? "ss" : ""}${id}`)

        const iconid = iconids.find(id => select.id.includes(id))

        if (iconid) {
            if (iconid === "decorationpos" && !sanconfig.defaulticons.get(config.get(`customisation.${type}.preset`) as string)!.decoration) return select.parentElement!.remove()

            const iconpos = config.get(`customisation.${type}.${iconid}`) as number
            select.value = iconpos > 0 ? iconpos.toString() : "off"
            select.onchange = event => {
                const value = (event.target as HTMLSelectElement).value
                config.set(`customisation.${type}.${iconid}`,value !== "off" ? parseInt(value) : 0)

                sanhelper.updatetabs()
            }

            return
        }

        select.value = elems.indexOf(select.id) > -1 ? (elems.indexOf(select.id) + 1).toString() : "off"
        select.onchange = () => updateelems(config,type,elems,select,elemtype,max)

        select.querySelectorAll("option").forEach((opt,i) => {
            opt.removeAttribute("disabled")
            select.value !== "off" && i > elems.length && opt.setAttribute("disabled","")
            i > max && opt.remove()
        })
    })
}