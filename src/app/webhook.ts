import fs from "fs"
import path from "path"
import { log } from "./log"
import { sanconfig } from "./config"
import { __root } from "./sanhelper"

const setlaststatus = (statuscode?: string) => {
    const webhooklaststatus = document.getElementById("webhooklaststatus") as HTMLElement
    if (!webhooklaststatus) return

    ;["ok","error"].forEach(attr => webhooklaststatus.removeAttribute(attr))

    const status = !statuscode ? "" : statuscode.startsWith("2") ? "ok" : (statuscode === "ERROR" || statuscode.startsWith("4") || statuscode.startsWith("5") ? "error" : "")

    status && webhooklaststatus.setAttribute(status,"")
    webhooklaststatus.textContent = statuscode || "N/A"
}

export const sendwebhook = async (type: "main" | "rare" | "plat",webhookurl: string,content: object,icon: string,userid?: string,avatarurl?: string) => {
    const config = sanconfig.get()
    if (!config.get(`webhook${type}`)) return log.write("INFO",`"webhook${type}" not active in config - skipping...`)

    const webhooklaststatus = document.getElementById("webhooklaststatus")
    let status = "ERROR"

    if (!webhookurl) {
        config.set("webhooklaststatus",status)
        setlaststatus(status)

        return log.write("INFO",`"webhookurl" parameter is blank`)
    }

    try {
        const formdata = new FormData()

        formdata.append("payload_json",JSON.stringify({
            username: userid ? `<@${userid}>` : null,
            avatar_url: avatarurl || null,
            embeds: [content]
        }))

        formdata.append("file",new Blob([fs.readFileSync(icon)],{ type: `image/${path.extname(icon).replace(/^./,"")}` }),path.basename(icon))

        const request = await fetch(webhookurl,{
            method: "post",
            body: formdata
        })

        log.write("INFO",`Webhook status: ${request.status} ${request.statusText}`)
        status = request.status.toString()
    } catch (err) {
        log.write("ERROR",`Error sending webhook: ${(err as Error).stack || (err as Error).message}`)
    }

    config.set("webhooklaststatus",status)

    if (webhooklaststatus) {
        setlaststatus(status)
    }
}

export const webhookwrapper = async (elem: HTMLElement) => {
    const { language } = await import("./language")
    const config = sanconfig.get()
    
    const html = fs.readFileSync(path.join(__root,"dist","app","webhook.html")).toString()
    elem.insertAdjacentHTML("afterend",html)

    // const discord = config.get("discord")

    // ;["userid","avatarurl","webhookurl"].forEach(async id => {
    //     const input = document.querySelector(`.wrapper:has(#${id}) > #${id}`)! as HTMLInputElement
    //     const lbl = input.parentElement!.querySelector(`span.lbl`) as HTMLSpanElement

    //     input.value = discord[id]
    //     lbl.innerHTML = await language.get(id,["settings","notifications","content"])

    //     input.onchange = () => config.set(`discord.${id}`,input.value)
    // })

    const input = document.getElementById("webhookurl")! as HTMLInputElement
    const lbl = input.parentElement!.querySelector("span.lbl")! as HTMLSpanElement

    input.value = config.get("webhookurl").trim()
    lbl.innerHTML = await language.get("webhookurl",["settings","notifications","content"])

    input.onchange = () => config.set("webhookurl",input.value)

    const caution = document.getElementById("webhookcaution")! as HTMLSpanElement
    caution.innerHTML = `❗ ${await language.get("webhookcaution",["settings","notifications","content"])}`

    const typeswrapper = document.querySelector(".wrapper:has(> #webhooktypes)")! as HTMLElement
    const typeslbl = typeswrapper.querySelector("span.lbl#webhooktypes")! as HTMLSpanElement
    typeslbl.textContent = await language.get("webhooktypes",["settings","notifications","content"])

    typeswrapper.querySelectorAll(`.wrapper#webhooktypeswrapper > .wrapper:has(> input)`).forEach(async wrapper => {
        const span = wrapper.querySelector("span") as HTMLSpanElement
        const input = wrapper.querySelector("input") as HTMLInputElement
        const type = (["main","rare","plat","test"] as const).find(type => input.id.endsWith(type)) as "main" | "rare" | "plat" | "test"

        span.textContent = await language.get(type)

        input.checked = config.get(`webhook${type}`) as boolean

        ;[span,input].forEach(elem => elem.onclick = () => {
            const value = !input.checked
            config.set(`webhook${type}`,value)
            input.checked = value
        })
    })

    const spoilers = document.querySelector(`.wrapper:has(> input#webhookspoilers)`)!
    const spoilersspan = spoilers.querySelector("span") as HTMLSpanElement
    const spoilersinput = spoilers.querySelector("input") as HTMLInputElement

    spoilersspan.textContent = await language.get("webhookspoilers",["settings","notifications","content"])
    spoilersinput.checked = config.get("webhookspoilers")

    ;[spoilersspan,spoilersinput].forEach(elem => elem.onclick = event => {
        const input = (event.target as HTMLSpanElement | HTMLInputElement).parentElement!.querySelector("input")!
        const value = !input.checked
        config.set("webhookspoilers",value)
        input.checked = value
    })

    const laststatus = document.getElementById("webhooklaststatus")!
    const lslbl = laststatus.parentElement!.querySelector("span:first-child") as HTMLSpanElement

    lslbl.textContent = `${await language.get("webhooklaststatus",["settings","notifications","content"])}:`
    setlaststatus(config.get("webhooklaststatus"))
}