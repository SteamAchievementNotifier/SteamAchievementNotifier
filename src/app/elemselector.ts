import ElectronStore from "electron-store"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

const togglelem = (config: ElectronStore<Config>,type: "main" | "rare" | "plat",elems: string[],input: HTMLInputElement) => {
    const i = elems.indexOf(input.id)
    const key = `customisation.${type}.elems`

    i > -1 ? (elems.length > 1 && elems.splice(i,1)) : elems.push(input.id)
    config.set(key,elems)

    input.checked = (config.get(key) as string[]).includes(input.id)
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
                    <input type="checkbox" id="unlockmsg">
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <input type="checkbox" id="title">
                </div>
                <div class="wrapper opt">
                    <span></span>
                    <input type="checkbox" id="desc">
                </div>
            </div>
        </div>
    `

    elem.insertAdjacentHTML("afterend",html)

    document.querySelector(`#elemselector > span.lbl`)!.textContent = global["elemselector"]

    const type = sanhelper.type
    const elems = config.get(`customisation.${type}.elems`) as string[]

    const lbls = document.querySelectorAll(`#elemselector > .opt > .opt:has(input[type="checkbox"]) > span`)
    lbls.forEach(lbl => {
        (lbl as HTMLSpanElement).onclick = () => togglelem(config,type,elems,lbl.nextElementSibling! as HTMLInputElement)
        lbl.textContent = global[lbl.nextElementSibling!.id]
    })
    
    const inputs = document.querySelectorAll(`#elemselector > .opt > .opt:has(input[type="checkbox"]) > input`)

    inputs.forEach(i => {
        const input = i as HTMLInputElement
        input.checked = elems.includes(input.id)

        input.onclick = event => {
            event.preventDefault()
            requestAnimationFrame(() => togglelem(config,type,elems,input))
        }
    })
}