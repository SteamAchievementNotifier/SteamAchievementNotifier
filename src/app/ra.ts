import { ipcRenderer } from "electron"
import fs from "fs"
import { buildAuthorization, getGameInfoAndUserProgress } from "@retroachievements/api"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { log } from "./log"
import { downloadicon } from "./achievement"

export const rasupported = [
    "retroarch",
    "dolphin",
    "pcsx2",
    "duckstation"
]

export const raelems = [...rasupported].flatMap(id => [id,`${id}path`])

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

// Custom action overrides for specific emulators that do not follow the standard default log file pattern
const customactions = new Map<string,RAActions>([
    ["duckstation",{ start: /Identified game: (\d+)/i, stop: null, achievement: null, mode: /Hardcore enabled/i }]
])

const actionmap = (emu: string) => {
    const defaultactions: RAActions = { start: null, stop: null, achievement: null }
    const { start, stop, achievement, mode } = customactions.get(emu) || defaultactions
    
    return new Map<"start" | "stop" | "achievement" | "mode",RegExp>([
        ["start",start || /Game (\d+) loaded, Hardcore (enabled|disabled)/i],
        ["stop", stop || /Unloading game (\d+)/i],
        ["achievement",achievement || /Awarding achievement (\d+)/i],
        ...(mode ? [["mode",mode]] as const : [])
    ])
}

let lastaction: LogAction | null = null

export const getlastaction = (key: string,file: string): LogAction => {
    const contents = fs.readFileSync(file).toString().split("\n").reverse()
    const actions = actionmap(key)
    const moderegex = actions.get("mode")

    for (const line of contents) {
        for (const [action,regex] of actions) {
            if (action === "mode") continue
            const match = line.match(regex)
            
            if (match) {
                let mode: "hard" | "soft" | undefined = undefined

                if (action === "start") {
                    if (moderegex) mode = (line.match(moderegex) ?? contents.find(line => moderegex.test(line))?.match(moderegex)) ? "hard" : "soft"
                    if (!mode) mode = match[2] === "enabled" ? "hard" : "soft"
                }

                const newaction = { key, file, action, value: match[1] ? parseInt(match[1]) : null, mode }
    
                if (!lastaction || lastaction.action !== newaction.action || lastaction.value !== newaction.value) {
                    // Prevents retriggering achievement notifications on launch
                    if (newaction.action === "achievement" && parseInt(localStorage.getItem("ralastachievement")!) === newaction.value) continue
    
                    lastaction = newaction
                    return newaction
                }
    
                return { key, file, action: "idle", value: null, mode: undefined }
            }
        }
    }

    return { key: null, file: null, action: "idle", value: null, mode: undefined }
}

let gameid = 0
let ramode: "hard" | "soft" = "hard"
export let racached: RAAchievement[] = []

export const executeaction = async (lastaction: LogAction): Promise<[string | null,(string | null)[]]> => {
    const { key, action, value, mode } = lastaction

    try {
        switch (action) {
            case "start":
                if (!value) return ["ERROR",[key,`Unable to parse GameID in "start" action`]]
                if (!key) return ["ERROR",["<unknown>",`Unable to parse emulator name in "start" action`]]

                gameid = value
                emu = key
                ramode = mode!

                log.write("INFO",`Game ${value} is running in ${mode!.replace(mode![0],mode![0].toUpperCase())}core Mode`)
                
                const config = sanconfig.get()
                racached = await cacheradata(gameid,config.get("rauser"),config.get("rakey"),config.get("nowtracking"),mode as "hard" | "soft")
                sanhelper.devmode && console.log(racached)

                ipcRenderer.send("ragame",action,{ emu, gamename: racached[0].gamename, gameid } as RAGame)
                
                return ["INFO",[key,`[RA]: "${emu || key}" started Game ${gameid || value}`]]
            case "stop":
                const stopmsg: [string | null, (string | null)[]] = ["INFO",[key,`[RA]: "${emu || key}" stopped Game ${gameid || value}`]]
                gameid = 0
                emu = null
                ramode = "hard"
                racached.length = 0

                ipcRenderer.send("ragame",action)
                
                return stopmsg
            case "achievement":
                if (value) {
                    localStorage.setItem("ralastachievement",`${value}`) // Set the id of the last earned achievement in localStorage

                    const config = sanconfig.get()
                    const notify = await ranotify(gameid,value,ramode)

                    const { type } = notify
                    const themeswitch: [key: string,ThemeSwitch] | undefined = Object.entries(JSON.parse(localStorage.getItem("themeswitch")!)).find(item => parseInt(item[0]) === gameid) as [key: string,ThemeSwitch] | undefined
                    const customisation = config.get(`customisation.${type}${themeswitch ? `.usertheme.${themeswitch[1].themes[type]}.customisation` : ""}`) as Customisation
                    
                    if (themeswitch) {
                        log.write("INFO",`[RA]: Auto-switch entry detected for ${gameid}`)
                        sanhelper.devmode && console.log(customisation)
                    }

                    const notifycopy = { ...notify, customisation }

                    sanhelper.devmode && console.log(notifycopy)
                    ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notifycopy,undefined,themeswitch?.[1].src || config.get("monitor")))

                    ipcRenderer.send("ragame",action,{ emu, gamename: notifycopy.gamename, gameid } as RAGame)
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

const cacheradata = async (gameid: number,username: string,apikey: string,nowtracking: boolean,mode: "hard" | "soft"): Promise<RAAchievement[]> => {
    if (!gameid) throw new Error(`No "gameid" detected`)
    const auth = await getauth(username,apikey)
    if (!auth) return []

    const { imageBoxArt, imageIcon, title: gamename, achievements, numDistinctPlayersCasual, numDistinctPlayersHardcore } = await getGameInfoAndUserProgress(auth,{ username, gameId: gameid })
    const [iconurl,gameartlibherourl] = [imageIcon,imageBoxArt].map(asset => `${raurl}${asset}`)

    const gameicon = await geticon("gameicon",gameid,iconurl)
    const gameartlibhero = await geticon("gameartlibhero",gameid,gameartlibherourl)

    const raachievements = await Promise.all(Object.values(achievements).map(async achievement => {
        const icon = await geticon("achievement",achievement.badgeName,`${raurl}/Badge/${achievement.badgeName}.png`)

        return {
            ...achievement,
            icon,
            gamename,
            gameicon,
            gameartlibhero,
            softcorepercent: parseFloat(((achievement.numAwarded / numDistinctPlayersCasual) * 100).toFixed(1)),
            hardcorepercent: parseFloat(((achievement.numAwardedHardcore / numDistinctPlayersHardcore) * 100).toFixed(1)),
            unlocked: !!achievement[`dateEarned${mode === "hard" ? "Hardcore" : ""}`]
        }
    }))

    nowtracking && ipcRenderer.send("showtrack",gamename,{ icon: gameicon, gameartlibhero })
    return raachievements
}

const ranotify = async (gameid: number,achid: number,mode: "hard" | "soft") => {
    const config = sanconfig.get()
    const achievement = racached.find(achievement => achievement.id === achid)
    if (!achievement) throw new Error(`No matching achievement found for AchievementID ${achid} in Game ${gameid}`)

    achievement.unlocked = true // Update the achievement's `unlocked` value in `racached`

    const percent = achievement[`${mode}corepercent`]
    const type = percent <= config.get("rarity") ? "rare" : "main"

    const notify: Notify = {
        ra: true,
        emu,
        id: Math.round(Date.now() / Math.random() * 1000),
        type,
        customisation: config.get("customisation")[type],
        apiname: achievement.badgeName,
        name: achievement.title,
        desc: achievement.description,
        icon: achievement.icon,
        gameicon: achievement.gameicon,
        gamename: achievement.gamename,
        libhero: achievement.gameartlibhero,
        unlocked: true,
        hidden: false,
        steam3id: 0,
        percent,
        unlocktime: new Date(Date.now()).toISOString()
    }

    const platcustomisation = config.get("customisation").plat
    const platobj: RAAPlatObj = {
        achievement,
        customisation: platcustomisation,
        platicon: platcustomisation.usegameicon ? achievement.gameicon : (platcustomisation.usecustomimgicon ? platcustomisation.customimgicon :platcustomisation.customicons.plat as string),
        monitor: config.get("monitor"),
        username: config.get("rauser"),
        numawarded: racached.filter(achievement => achievement.unlocked).length,
        numachievements: racached.length
    }

    await raplatnotify(platobj)
    return notify
}

let hasshown = false

const raplatnotify = async (platobj: RAAPlatObj) => {
    const { achievement, customisation, platicon, monitor, username, numawarded, numachievements } = platobj
    log.write("INFO",`"${username}" has unlocked ${numawarded}/${numachievements} in ${achievement.gamename}${numawarded === numachievements ? " - triggering 100% notification..." : ""}`)

    if (numawarded < numachievements) return false
    if (hasshown) return false

    const platnotify: Notify = {
        ra: true,
        emu,
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
        percent: 0,
        unlocktime: new Date(Date.now()).toISOString()
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