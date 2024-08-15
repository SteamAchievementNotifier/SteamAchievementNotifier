import ElectronStore from "electron-store"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

const moveelem = (arr: string[],from: number,to: number) => arr.map((item,i) => (i === to ? arr[from] : i === from ? arr[to] : item))

const updateelems = (config: ElectronStore<Config>,type: "main" | "rare" | "plat",elems: string[],select: HTMLSelectElement) => {
    const key = `customisation.${type}.elems`
    let i = elems.indexOf(select.id)
    let newelems = elems.slice()

    if (select.value !== "off") {
        i !== -1 ? (newelems = moveelem(newelems,i,parseInt(select.value) - 1)) : newelems.splice(parseInt(select.value) - 1,0,select.id)
    } else {
        (i !== -1 && newelems.length > 1) && newelems.splice(i,1)
    }

    config.set(key,newelems)
    select.value = newelems.indexOf(select.id) > -1 ? (newelems.indexOf(select.id) + 1).toString() : "off"

    sanhelper.updatetabs()
}

export const elemselector = async (elem: HTMLElement) => {
    const elemselector = document.getElementById("elemselector")
    elemselector && elemselector.remove()

    const config = sanconfig.get()
    const lang = config.get("lang")
    const { translations: { global } } = await import(`../lang/${lang}`)

    const html = `
        <div class="wrapper opt" id="elemselector">
            <span class="lbl"></span>
            <div class="wrapper opt">
                <div class="wrapper opt">
                    <span></span>
                    <select name="unlockmsg" id="unlockmsg">
                        <option value="off">🚫</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="title" id="title">
                        <option value="off">🚫</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                    </select>
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <select name="desc" id="desc">
                        <option value="off">🚫</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                    </select>
                </div>
            </div>
        </div>
    `

    elem.insertAdjacentHTML("afterend",html)

    document.querySelector(`#elemselector > span.lbl`)!.textContent = global["elemselector"]

    const type = sanhelper.type
    const elems = config.get(`customisation.${type}.elems`) as string[]

    document.querySelectorAll(`#elemselector > .opt > .opt:has(select) > span`).forEach(lbl => lbl.textContent = global[lbl.nextElementSibling!.id])

    if (!elems) return

    document.querySelectorAll(`#elemselector > .opt > .opt:has(select) > select`).forEach(s => {
        const select = s as HTMLSelectElement
        select.onchange = null
        select.value = elems.indexOf(select.id) > -1 ? (elems.indexOf(select.id) + 1).toString() : "off"
        select.onchange = () => updateelems(config,type,elems,select)
    })
}