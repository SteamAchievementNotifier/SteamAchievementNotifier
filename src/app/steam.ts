import fs from "fs"
import path from "path"
import vdfbinary from "@xan105/vdf/binary"
import vdf from "simple-vdf"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"

const steam64base = 76561197960265728n
const percentcache = new Map<number,Map<string,number>>()

export const steam = {
    steam64tosteam3id: (steamid64: string) => Number(BigInt(steamid64) - steam64base), // BigInt: SteamID64 exceeds Number.MAX_SAFE_INTEGER
    findvdfkey: (entry: any,key: string) => entry[Object.keys(entry).find(k => k.toLowerCase() === key.toLowerCase()) ?? ""],
    users: {
        all:(steampath: string) => {
            const users: SteamUser[] = []

            const userdatadir = path.join(steampath,"userdata")
            const ondisk = new Set(fs.existsSync(userdatadir) ? fs.readdirSync(userdatadir,{ withFileTypes: true }).filter(entry => entry.isDirectory() && /^[1-9]\d*$/.test(entry.name)).map(entry => entry.name) : [])
            const loginusers = path.join(steampath,"config","loginusers.vdf")
            
            let vdfdata: any = {}

            try {
                vdfdata = vdf.parse(fs.readFileSync(loginusers,"utf8")) // `simple-vdf` only accepts a string, not a Buffer
            } catch (err) {
                log.write("WARN",`Unable to parse "${loginusers}": ${(err as Error).message}`)
            }

            for (const [steam64id,entry] of Object.entries<any>(vdfdata.users ?? {})) {
                const steam3id = steam.steam64tosteam3id(steam64id)
                ondisk.delete(`${steam3id}`)

                const [personaname,mostrecent,timestamp] = ["PersonaName","MostRecent","Timestamp"].map(key => steam.findvdfkey(entry,key))

                users.push({
                    steam3id,
                    steam64id,
                    personaname,
                    mostrecent: mostrecent === undefined ? null : mostrecent === "1",
                    timestamp: parseInt(timestamp ?? "0") || 0
                })
            }

            // Userdata folders with no matching loginusers.vdf entry (e.g. removed accounts)
            for (const id of ondisk) {
                users.push({
                    steam3id: parseInt(id),
                    steam64id: `${BigInt(id) + steam64base}`,
                    mostrecent: null,
                    timestamp: 0,
                })
            }

            return users
        },
        current: (users: SteamUser[],activeuser?: number | null) => {
            if (activeuser) {
                const active = users.find(user => user.steam3id === activeuser)
                if (active) return active
            }

            const bytimestamp = users.filter(user => user.timestamp > 0).sort((a,b) => b.timestamp - a.timestamp)[0]
            return bytimestamp ?? users.find(user => user.mostrecent) ?? null
        }
    },
    data: {
        getbinarydata: (statsdir: string,binfile: string) => vdfbinary.parse(fs.readFileSync(path.join(statsdir,binfile))),
        getpercentages: async (appid: number): Promise<Map<string,number>> => {
            const cached = percentcache.get(appid)
            if (cached) return cached

            const percentmap = new Map<string,number>()
            const url = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&format=json`

            try {
                const res = await fetch(url,{ signal: AbortSignal.timeout(10000) })
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)

                const data: { name: string, percent: string | number }[] = (await res.json()).achievementpercentages?.achievements ?? []

                for (const { name, percent } of data) {
                    const value = parseFloat(String(percent))
                    
                    percentmap.set(name,value)
                    percentmap.set(name.toLowerCase(),value)
                }

                percentmap.size && percentcache.set(appid,percentmap)
            } catch (err) {
                console.error(`Unable to fetch achievement percentages for AppID ${appid}: ${(err as Error).message}`)
            }

            return percentmap
        },
        getachievements: async (appid: number,usergamestats: any,schema: any) => {
            const stats = schema?.[appid]?.stats ?? {}
            const cache = usergamestats?.cache ?? {}
            const result: Achievement[] = []

            const percentages = await steam.data.getpercentages(appid)
            const { lang } = sanconfig.get().store

            for (const [statid,stat] of Object.entries<any>(stats)) {
                if (stat?.type !== "ACHIEVEMENTS") continue

                const entry = cache[statid]
                const data: number = typeof entry?.data === "number" ? entry.data : 0
                const times = entry?.AchievementTimes ?? {}

                for (const [bitstr,achievement] of Object.entries<any>(stat.bits ?? {})) {
                    const bit = Number(bitstr)
                    const unlocked = ((data >> bit) & 1) === 1
                    const time = times[bitstr]

                    const { name: apiname, display: { name, desc, hidden, icon } } = achievement

                    result.push({
                        unlocked,
                        apiname: apiname.toLowerCase(),
                        name: name[lang] ?? name.english ?? "",
                        desc: desc[lang] ?? desc.english ?? "",
                        hidden: !!hidden,
                        percent: percentages.get(apiname) ?? percentages.get(apiname.toLowerCase()) ?? -1,
                        icon,
                        unlocktimestamp: Date.now(),
                        statid: parseInt(statid),
                        bit,
                        unlocktime: unlocked ? time : null,
                        relocked: !unlocked && time !== undefined, // true => Previously unlocked, then relocked
                        raw: achievement
                    })
                }
            }

            const icons = new Map<string,string>()
            const queue = new Set(result.map(achievement => achievement.icon).filter(icon => icon !== undefined)).values()

            await Promise.all(Array.from({ length: 5 },async () => {
                for (const filename of queue) {
                    try {
                        const icon = await steam.geticon(appid,filename)
                        icon && icons.set(filename,icon)
                    } catch (err) {
                        console.error(`Failed to cache icon "${filename}": ${(err as Error).message}`)
                    }
                }
            }))

            for (const achievement of result) achievement.icon = achievement.icon ? icons.get(achievement.icon) : undefined

            return result
        }
    },
    geticon: async (appid: number,filename: string | undefined) => {
        if (!filename) return null
        
        const temp = path.join(sanhelper.temp,`${appid}`)
        const file = path.join(temp,filename)
        
        if (fs.existsSync(file)) return file // Get from cache if present

        const imgurl = "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps"
        
        const res = await fetch(`${imgurl}/${appid}/${filename}`,{ signal: AbortSignal.timeout(10000) })
        if (!res.ok) throw new Error(`${filename}: ${res.status}`)

        fs.mkdirSync(temp,{ recursive: true })
        fs.writeFileSync(file,Buffer.from(await res.arrayBuffer()))
        
        return file
    }
}