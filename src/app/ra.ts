import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import { buildAuthorization, getGameExtended } from "@retroachievements/api"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { log } from "./log"
import { downloadicon } from "./achievement"

export const rasupported = [
    "retroarch",
    "dolphin",
    "pcsx2",
    // "ppspp" // PPSPP does not allow logging to a file, but the PPSPP core can be loaded via RetroArch
]

const logfiles: { [key: string]: string } = {
    retroarch: "retroarch.log",
    dolphin: "dolphin.log",
    pcsx2: "emulog.txt",
    // ppspp: ""
}

export let emu: string | null = null

const logmap = new Map<string,string>()

export const getlogmap = () => {
    const config = sanconfig.get()

    for (const emu of rasupported) {
        const enabled = config.get("raemus").includes(emu)
        const installdir = (config.get(`${emu}path`) as string).replace(/\\/g,"/")
        if (installdir) enabled ? logmap.set(emu,path.join(installdir,"logs",logfiles[emu]).replace(/\\/g,"/")) : logmap.delete(emu)
    }

    return logmap
}

const actionmap = new Map<"start" | "stop" | "achievement",RegExp>([
    ["start",/Game (\d+) loaded/i],
    ["stop",/Unloading game (\d+)/i],
    ["achievement",/Achievement (\d+) awarded/i]
])

let lastaction: LogAction | null = null

export const getlastaction = (key: string,file: string): LogAction => {
    const contents = fs.readFileSync(file).toString().split("\n").reverse()

    for (const line of contents) {
        for (const [action,regex] of actionmap) {
            const match = line.match(regex)
            
            if (match) {
                const newaction = { key, file, action, value: parseInt(match[1]) }
    
                if (!lastaction || lastaction.action !== newaction.action || lastaction.value !== newaction.value) {
                    // Prevents retriggering achievement notifications on launch
                    if (newaction.action === "achievement" && parseInt(localStorage.getItem("ralastachievement")!) === newaction.value) continue
    
                    lastaction = newaction
                    return newaction
                }
    
                return { key, file, action: "idle", value: null }
            }
        }
    }

    return { key: null, file: null, action: "idle", value: null }
}

let gameid = 0
let racached: RAAchievement[] = []

// Set a variable in localStorage for the last earned achievement if it does not already exist
!localStorage.getItem("ralastachievement") && localStorage.setItem("ralastachievement","0")

export const executeaction = async (lastaction: LogAction) => {
    const { key, file, action, value } = lastaction
    action !== "idle" && log.write("INFO",`[RA]: Detected "${action}" action in "${file}"`)

    try {
        switch (action) {
            case "start":
                const config = sanconfig.get()

                value && (gameid = value)
                key && (emu = key)
                
                racached = await cacheradata(gameid,config.get("rauser"),config.get("rakey"),config.get("nowtracking"))
                sanhelper.devmode && console.log(racached)
                
                return ["INFO",`[RA]: "${emu || key}" started Game ${gameid || value}`]
            case "stop":
                gameid = 0
                emu = null
                racached.length = 0
                
                return ["INFO",`[RA]: "${emu || key}" stopped Game ${gameid || value}`]
            case "achievement":
                if (value) {
                    localStorage.setItem("ralastachievement",`${value}`) // Set the id of the last earned achievement in localStorage

                    const config = sanconfig.get()
                    const notify = await ranotify(gameid,value)

                    sanhelper.devmode && console.log(notify)
                    ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,config.get("monitor")))
                }
                
                return [value ? "INFO" : "ERROR",`[RA]: ${!value ? "Unable to display achievement notification - " : ""}"${emu || key}" unlocked Achievement ${value} in Game ${gameid || value}${!value ? `, but no AchievementID value was found in "achievement" action` : ""}`]
            default: return !sanhelper.devmode ? [null,null] : ["CONSOLE",`[RA]: ${!emu ? "No emulator actions detected" : `"${emu || key}" is idle${gameid ? ` for Game ${gameid}` : ""}`}`]
        }
    } catch (err) {
        return ["ERROR",(err as Error).message]
    }
}

const getauth = async (username: string,apikey: string) => {
    if (!username || !apikey) throw new Error(`Unable to locate "${!username ? "username" : "apikey"}" in config`)

    const decrypted = await new Promise<string | Error>(resolve => {
        ipcRenderer.once("decryptrakey",(event,decryptedkey: string | Error) => resolve(decryptedkey))
        ipcRenderer.send("decryptrakey",apikey)
    })

    if (decrypted instanceof Error) {
        log.write("ERROR",`Unable to decrypt "apikey" in config: ${decrypted.message}`)
        return null
    }

    return buildAuthorization({ username, webApiKey: decrypted })
}

const raurl = `https://media.retroachievements.org`

const geticon = async (type: "gameicon" | "gameartlibhero" | "achievement",label: string | number,url: string,format?: string) => (await downloadicon({ apiname: type !== "achievement" ? `${label}_${type}` : `${label}`, iconurl: url },format || "png")).replace(/\\/g,"/")

const cacheradata = async (gameid: number,username: string,apikey: string,nowtracking: boolean): Promise<RAAchievement[]> => {
    if (!gameid) throw new Error(`No "gameid" detected`)
    const auth = await getauth(username,apikey)
    if (!auth) return []
    
    const { imageBoxArt, imageIcon, title: gamename, achievements, numDistinctPlayersCasual, numDistinctPlayersHardcore } = await getGameExtended(auth,{ gameId: gameid })
    const [iconurl,gameartlibherourl] = [imageIcon,imageBoxArt].map(asset => `${raurl}${asset}`)

    const icon = await geticon("gameicon",gameid,iconurl)
    const gameartlibhero = await geticon("gameartlibhero",gameid,gameartlibherourl)

    nowtracking && ipcRenderer.send("showtrack",gamename,{ icon, gameartlibhero })

    return Object.values(achievements).map(achievement => {
        return {
            ...achievement,
            gamename,
            gameicon: icon,
            gameartlibhero,
            softcorepercent: parseFloat(((achievement.numAwarded / numDistinctPlayersCasual) * 100).toFixed(1)),
            hardcorepercent: parseFloat(((achievement.numAwardedHardcore / numDistinctPlayersHardcore) * 100).toFixed(1))
        }
    })
}

const ranotify = async (gameid: number,achid: number) => {
    const config = sanconfig.get()
    const achievement = racached.find(achievement => achievement.id === achid)
    if (!achievement) throw new Error(`No matching achievement found for AchievementID ${achid} in Game ${gameid}`)

    const achicon = await geticon("achievement",achievement.badgeName,`${raurl}/Badge/${achievement.badgeName}.png`)
    const percent = achievement[`${config.get("rapercenttype")}corepercent`]
    const type = percent <= config.get("rarity") ? "rare" : "main"

    return {
        id: Math.round(Date.now() / Math.random() * 1000),
        type,
        customisation: config.get("customisation")[type],
        apiname: achievement.badgeName,
        name: achievement.title,
        desc: achievement.description,
        icon: achicon,
        gameicon: achievement.gameicon,
        gamename: achievement.gamename,
        unlocked: true,
        hidden: false,
        steam3id: 0,
        percent
    } as Notify
}

export const testraunlock = (achid: number) => {
    try {
        localStorage.setItem("ralastachievement","0")
        if (!emu || !gameid) throw new Error("No emulator active")
            
        const file = logmap.get(emu)
        if (!file) throw new Error(`"${emu}" not found in logmap`)
            
        const line = `Achievement ${achid} awarded\n`
        fs.appendFileSync(file,line)
    } catch (err) {
        console.log(`[RA]: ${(err as Error).message}`)
    }
}

// TODO:
// - Either ensure only one emulator can be tracked at a time, or update code to account for multiple emulators/games simultaneously
// - Change `gameart.ts` to support RA images