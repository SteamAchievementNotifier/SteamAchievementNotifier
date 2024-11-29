import { ipcRenderer } from "electron"
import fs from "fs"
import path from "path"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import Sortable from "sortablejs"
import confetti from "canvas-confetti"

const achievementicon = (achievement: Achievement) => {
    const cachedicon = path.join(sanhelper.temp,`${achievement.apiname}.jpg`).replace(/\\/g,"/")
    return fs.existsSync(cachedicon) ? cachedicon : null
}

// - Get icons when "Disable Icon Caching" is enabled
// - Add animations to unlocks/completions
// - Allow selection of number of achievements visible in window
// - Add option for toggling visibility of unlocked achievements
ipcRenderer.on("stats",(event,statsobj: StatsObj,translations: { nogame: string, noachievements: string, startgame: string }) => {
    const { appid, gamename, achievements } = statsobj
    const { nogame, noachievements, startgame } = translations

    const gamenamewrapper = document.getElementById("gamename")!
    const achievementswrapper = document.getElementById("achievements")!
    const placeholder = document.getElementById("placeholder")!

    gamenamewrapper.toggleAttribute("appid",!!appid)
    Array.from(achievementswrapper.children).filter(node => node.id !== "placeholder").forEach(node => node.remove())

    if (!appid) {
        gamenamewrapper.textContent = nogame
        placeholder.querySelector("span:first-child")!.textContent = noachievements
        placeholder.querySelector("span:last-child")!.textContent = startgame

        return ["unlocked","total"].forEach(id => document.documentElement.style.setProperty(`--${id}`,"0"))
    }

    gamenamewrapper.textContent = gamename
    
    if (!achievements) return

    const { rarity } = sanconfig.get().store

    document.documentElement.style.setProperty("--unlocked",`${achievements.filter(achievement => achievement.unlocked).length}`)
    document.documentElement.style.setProperty("--total",`${achievements.length}`)

    const lsitem = JSON.parse(localStorage.getItem("statwin")!)

    !lsitem[appid] && localStorage.setItem("statwin",JSON.stringify({
        ...lsitem,
        [appid]: Array.from(achievementswrapper.children)
            .sort((a,b) => parseInt(b.getAttribute("unlocked")!) - parseInt(a.getAttribute("unlocked")!))
            .filter(elem => elem.id !== "placeholder")
            .map(elem => elem.id)
    },null,4))

    achievements
    .filter(achievement => !achievement.unlocked)
    .sort((a,b) => lsitem[appid].indexOf(a.apiname) - lsitem[appid].indexOf(b.apiname))
    .forEach(achievement => {
        const html = `
            <div class="wrapper achievement" id="${achievement.apiname}" unlocked="${achievement.unlocked}" rarity="${parseFloat(achievement.percent.toFixed(1)) <= rarity ? "rare" : "main"}">
                <div class="wrapper icon"></div>
                <div class="wrapper text">
                    <span>${achievement.name}</span>
                    <span>${achievement.desc}</span>
                </div>
                <span class="handle">⁝⁝</span>
            </div>
        `

        achievementswrapper.insertAdjacentHTML("beforeend",html)

        const elem = document.getElementById(achievement.apiname)!
        elem.addEventListener("animationend",event => event.animationName === "shift" && elem.remove())

        const icon = achievementicon(achievement)
        icon && elem.style.setProperty("--icon",`url('${icon}')`)
    })

    Sortable.create(achievementswrapper,{
        handle: ".handle",
        animation: 200,
        onEnd: event => localStorage.setItem("statwin",JSON.stringify({
            ...lsitem,
            [appid]: Array.from(event.to.children)
                .filter(elem => elem.id !== "placeholder")
                .map(elem => elem.id)
        },null,4))
    })
})

window.addEventListener("DOMContentLoaded", () => {
    ipcRenderer.send("statwinready")
    if (!sanhelper.devmode) return
    
    document.getElementById("placeholder")!.onclick = event => {
        const target = event.target as HTMLElement
        const value = target.getAttribute("unlocked") === "true"
        target.setAttribute("unlocked",`${!value}`)
    }
})