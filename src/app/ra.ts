// import { ipcRenderer } from "electron"
// import { buildAuthorization, getUserRecentAchievements, UserRecentAchievement, AuthObject, getGameExtended, GameExtendedAchievementEntity, getGameInfoAndUserProgress } from "@retroachievements/api"
// import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
// import { log } from "./log"
// import { downloadicon } from "./achievement"

import path from "path"
import fs from "fs"

export const rasupported = [
    "retroarch",
    "dolphin",
    "pcsx2",
    "ppspp"
]

const logfiles: { [key: string]: string } = {
    retroarch: "retroarch.log",
    dolphin: "dolphin.log",
    pcsx2: "emulog.txt",
    ppspp: "something.txt"
}

export const logmap = new Map<string,string>()

export const getlogmap = () => {
    const config = sanconfig.get()

    for (const emu of rasupported) {
        const enabled = config.get("raemus").includes(emu)
        const installdir = config.get(`${emu}path`) as string
        if (installdir) enabled ? logmap.set(emu,path.join(installdir,"logs",logfiles[emu])) : logmap.delete(emu)
    }

    return logmap
}

const actionmap = new Map<string,RegExp>([
    ["start",/Game (\d+) loaded/],
    ["stop",/Unloading game (\d+)/],
    ["achievement",/Achievement (\d+) awarded/]
])

export const getlastaction = (logmap: Map<string,string>) => {
    if (!logmap.size) return null

    for (const [key,file] of logmap) {
        const contents = fs.readFileSync(file).toString().split("\n").reverse()
        
        for (const line of contents) {
            for (const [action,regex] of actionmap) {
                const match = line.match(regex)
                if (match) return { key, file, action, value: parseInt(match[1]) }
            }
        }
    }

    return null
}

// export const cacheradata = async (auth: AuthObject) => {
//     try {
//         return await getUserRecentAchievements(auth,{ username: auth.username })
//     } catch (err) {
//         throw new Error(`Unable to cache Retro Achievements data: ${err}`)
//     }
// }

// const checkraunlockstatus = (cache: UserRecentAchievement[],live: UserRecentAchievement[]): UserRecentAchievement[] => {
//     const unlocked: UserRecentAchievement[] = []

//     live.forEach(live => {
//         const match = cache.find(cached => cached.achievementId === live.achievementId)
//         if (!match) unlocked.push(live)
//     })

//     return unlocked
// }

// export const startra = async (ra: { user: string, key: string }) => {
//     let ratimer: NodeJS.Timeout | null = null
//     let cache: any = []

//     const { user, key } = ra
//     const { cacheradata } = await import("./ra")
    
//     try {
//         if (!user || !key) throw new Error(`No ${!user ? "user" : "key"} specified in config`)
//         if (user === "stopra" && key === "stopra") {
//             log.write("INFO","Retro Achievements Support stopped")
//             return null
//         }

//         const auth = buildAuthorization({ username: user, webApiKey: key })

//         cache = await cacheradata(auth)
//         if (cache instanceof Error) throw cache
//         log.write("INFO",`Retro Achievements data cached for "${user}" successfully`)

//         sanhelper.devmode && console.log(cache)

//         ratimer = setInterval(async () => {
//             const config = sanconfig.get()
//             const live = await cacheradata(auth)
//             if (live instanceof Error) throw live
//             const unlocked = checkraunlockstatus(cache,live || [])

//             if (!unlocked.length) return console.log("No change")

//             unlocked.forEach(async (achievement: UserRecentAchievement) => {
//                 const { achievementId, gameId, badgeName, badgeUrl, title, description, gameTitle, gameIcon, date } = achievement
//                 const { numDistinctPlayersCasual, achievements, numAchievements } = await getGameExtended(auth,{ gameId: achievement.gameId })
//                 const { numAwardedToUser } = await getGameInfoAndUserProgress(auth,{ gameId: achievement.gameId, username: user })

//                 const match = Object.values(achievements).find(ach => ach.id === achievementId)
//                 if (!match) log.write("ERROR",`No matching achievement found for achievementId "${achievementId}" in gameId "${gameId}"'s achievement list`)

//                 let percent = parseFloat((match ? (match.numAwarded / numDistinctPlayersCasual) * 100 : 100).toFixed(1))
//                 const type = percent <= config.get("rarity") ? "rare" : "main"
//                 const customisation = config.get("customisation")

//                 const achobj: Achievement = {
//                     apiname: badgeName,
//                     name: title,
//                     desc: description,
//                     hidden: false,
//                     percent,
//                     unlocked: true
//                 }

//                 let hasshown = false

//                 const notify: Notify = {
//                     unlocktime: new Date(Date.now()).toISOString().replace(/[TZ]/g," ").trim(),
//                     ...achobj,
//                     id: Math.round(Date.now() / Math.random() * 1000),
//                     type,
//                     customisation: customisation[type],
//                     gamename: gameTitle || "???",
//                     steam3id: 0,
//                     icon: await downloadicon({ apiname: achobj.apiname, iconurl: `https://retroachievements.org${badgeUrl}` }),
//                     gameicon: await downloadicon({ apiname: gameTitle, iconurl: `https://retroachievements.org${gameIcon}` })
//                 }
                
//                 sanhelper.devmode && console.log(notify,live)
//                 ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,notify,undefined,config.get("monitor")))

//                 log.write("INFO",`RATime: ${date} | NotifyTime: ${notify.unlocktime}`)

//                 if (numAwardedToUser >= numAchievements && !hasshown) {
//                     const platnotify: Notify = {
//                         ...notify,
//                         ...achobj,
//                         apiname: "PLAT_NOTIFICATION",
//                         name: "100%",
//                         desc: "",
//                         percent: 0,
//                         type: "plat",
//                         customisation: customisation.plat,
//                         icon: customisation.plat.customicons.plat as string,
//                         gameicon: await downloadicon({ apiname: gameTitle, iconurl: `https://retroachievements.org${gameIcon}` })
//                     }

//                     ;["notify","sendwebhook"].forEach(cmd => ipcRenderer.send(cmd,platnotify,undefined,config.get("monitor")))
//                     hasshown = true
//                 }
//             })

//             cache = await cacheradata(auth)
//             if (cache instanceof Error) throw cache
//         },1000)
//     } catch (err) {
//         log.write("ERROR",`Unable to start Retro Achievements support: ${err}`)
//         ratimer = null
//     }

//     return ratimer
// }