import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"
import { AuthObject, buildAuthorization, getGameExtended, getGameInfoAndUserProgress } from "@retroachievements/api"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { log } from "./log"
import { downloadicon } from "./achievement"

export const rasupported = [
    "retroarch",
    "dolphin",
    // "ravba", // Supports automatic logging to `RACache/RALog.txt`, but may not be as widely used as RetroArch VBA cores
    // "rap64" // Supports automatic logging to `RACache/RALog.txt`, but may not be as widely used as RetroArch N64 cores
    // "pcsx2", // "emulog.txt" is completely locked while PCSX2 is running, so the contents cannot be read, but the PS2 Core can be loaded via RetroArch
    // "ppspp" // PPSPP does not allow logging to a file, but the PPSPP core can be loaded via RetroArch
]

export const raelems = [...rasupported].flatMap(id => [id,`${id}path`])

// const logfiles: { [key: string]: string } = {
//     retroarch: "retroarch.log",
//     dolphin: "dolphin.log",
//     // ravba: "ralog.txt",
//     // rap64: "ralog.txt"
//     // pcsx2: "emulog.txt",
//     // ppspp: ""
// }

export let emu: string | null = null

const logmap = new Map<string,string>()

export const getlogmap = () => {
    const config = sanconfig.get()

    for (const emu of rasupported) {
        const enabled = config.get("raemus").includes(emu)
        const installdir = (config.get(`${emu}path`) as string).replace(/\\/g,"/")
        if (installdir) enabled ? logmap.set(emu,installdir.replace(/\\/g,"/")) : logmap.delete(emu)
    }

    return logmap
}

let authobj: AuthObject | null = null

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

export const executeaction = async (lastaction: LogAction): Promise<[string | null,(string | null)[]]> => {
    const { key, action, value } = lastaction
    // action !== "idle" && log.write("INFO",`[RA]: Detected "${action}" action in "${file}"`)

    try {
        switch (action) {
            case "start":
                if (!value) return ["ERROR",[key,`Unable to parse GameID in "start" action`]]
                if (!key) return ["ERROR",["<unknown>",`Unable to parse emulator name in "start" action`]]

                gameid = value
                emu = key
                
                const config = sanconfig.get()
                racached = await cacheradata(gameid,config.get("rauser"),config.get("rakey"),config.get("nowtracking"))
                sanhelper.devmode && console.log(racached)

                ipcRenderer.send("ragame",action,{ emu, gamename: racached[0].gamename, gameid } as RAGame)
                
                return ["INFO",[key,`[RA]: "${emu || key}" started Game ${gameid || value}`]]
            case "stop":
                gameid = 0
                emu = null
                racached.length = 0

                ipcRenderer.send("ragame",action)
                
                return ["INFO",[key,`[RA]: "${emu || key}" stopped Game ${gameid || value}`]]
            case "achievement":
                if (value) {
                    localStorage.setItem("ralastachievement",`${value}`) // Set the id of the last earned achievement in localStorage

                    const config = sanconfig.get()
                    const notify = await ranotify(gameid,value)

                    sanhelper.devmode && console.log(notify)
                    ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,config.get("monitor")))

                    ipcRenderer.send("ragame",action,{ emu, gamename: notify.gamename, gameid } as RAGame)
                }
                
                return [value ? "INFO" : "ERROR",[key,`[RA]: ${!value ? "Unable to display achievement notification - " : ""}"${emu || key}" unlocked Achievement ${value} in Game ${gameid || value}${!value ? `, but no AchievementID value was found in "achievement" action` : ""}`]]
            default:
                ipcRenderer.send("ragame",emu ? action : "wait",gameid ? { emu, gamename: racached[0].gamename, gameid } as RAGame : null)
                return ["CONSOLE",[key,`[RA]: ${!emu ? "No emulator actions detected" : `"${emu || key}" is idle${gameid ? ` for Game ${gameid}` : ""}`}`]]
        }
    } catch (err) {
        return ["ERROR",[null,(err as Error).message]]
    }
}

const raurl = `https://media.retroachievements.org`

const geticon = async (type: "gameicon" | "gameartlibhero" | "achievement",label: string | number,url: string,format?: string) => (await downloadicon({ apiname: type !== "achievement" ? `${label}_${type}` : `${label}`, iconurl: url },format || "png")).replace(/\\/g,"/")

const cacheradata = async (gameid: number,username: string,apikey: string,nowtracking: boolean): Promise<RAAchievement[]> => {
    if (!gameid) throw new Error(`No "gameid" detected`)
    const auth = await getauth(username,apikey)
    if (!auth) return []

    !authobj && (authobj = auth)
    
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

    const notify: Notify = {
        ra: true,
        id: Math.round(Date.now() / Math.random() * 1000),
        type,
        customisation: config.get("customisation")[type],
        apiname: achievement.badgeName,
        name: achievement.title,
        desc: achievement.description,
        icon: achicon,
        gameicon: achievement.gameicon,
        gamename: achievement.gamename,
        libhero: achievement.gameartlibhero,
        unlocked: true,
        hidden: false,
        steam3id: 0,
        percent
    }

    const platcustomisation = config.get("customisation").plat
    const platobj: RAAPlatObj = {
        gameid,
        achievement,
        customisation: platcustomisation,
        platicon: platcustomisation.usegameicon ? achievement.gameicon : (platcustomisation.usecustomimgicon ? platcustomisation.customimgicon :platcustomisation.customicons.plat as string),
        monitor: config.get("monitor"),
        username: config.get("rauser"),
        apikey: config.get("rakey"),
        achievementsnum: racached.length
    }

    await raplatnotify(platobj)
    return notify
}

const numawardedtouser = async (gameid: number,username: string,apikey: string) => {
    const auth = authobj || await getauth(username,apikey)

    if (!auth) {
        log.write("ERROR",`Unable to authenticate "${username}" to get completion progress`)
        return 0
    }

    !authobj && (authobj = auth)

    return (await getGameInfoAndUserProgress(auth,{ gameId: gameid, username })).numAwardedToUser
}

let hasshown = false

const raplatnotify = async (platobj: RAAPlatObj) => {
    const { gameid, achievement, customisation, platicon, monitor, username, apikey, achievementsnum } = platobj
    const awarded = await numawardedtouser(gameid,username,apikey)

    log.write("INFO",`"${username}" has unlocked ${awarded}/${achievementsnum} in ${achievement.gamename}${awarded === achievementsnum ? " - triggering 100% notification..." : ""}`)

    if (awarded < achievementsnum) return false
    if (hasshown) return false

    const platnotify: Notify = {
        ra: true,
        id: Date.now(),
        type: "plat",
        customisation,
        apiname: "PLAT_NOTIFICATION",
        name: "100%",
        desc: "",
        icon: platicon,
        gameicon: achievement.gameicon,
        gamename: achievement.gamename,
        libhero: achievement.gameartlibhero,
        unlocked: true,
        hidden: false,
        steam3id: 0,
        percent: 0
    }

    // Set timer to ensure last achievement is added to queue before plat notification
    setTimeout(() => {
        sanhelper.devmode && console.log(platnotify)
        ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,platnotify,undefined,monitor))

        hasshown = true
    },1000)

    return true
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