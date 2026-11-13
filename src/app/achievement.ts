import path from "path"
import fs from "fs"
import { sanhelper, __root } from "./sanhelper"
import { sanconfig } from "./config"
import { steam, steamiconurls } from "./steam"
import { log } from "./log"

const percentcache = new Map<number,Map<string,number>>()

export const sanachievement = {
    cachedata: async (appid: number,usergamestats: any,schema: any) => {
        const stats = schema?.[appid]?.stats ?? {}
        const cache = usergamestats?.cache ?? {}
        const result: Achievement[] = []
    
        const statlookup = steam.getstatlookup(stats)
    
        const percentages = await sanachievement.getpercentages(appid)
        const { lang, noiconcache } = sanconfig.get().store
    
        for (const [statid,stat] of Object.entries<any>(stats)) {
            if (stat?.type !== "ACHIEVEMENTS") continue
    
            const entry = cache[statid]
            const data = typeof entry?.data === "number" ? entry.data as number : 0
            const times = entry?.AchievementTimes ?? {}
    
            for (const [bitstr,achievement] of Object.entries<any>(stat.bits ?? {})) {
                const bit = Number(bitstr)
                const unlocked = ((data >> bit) & 1) === 1
                const time = times[bitstr]
    
                const { name: apiname, display: { name, desc, hidden, icon }, groupid: setid } = achievement
    
                result.push({
                    unlocked,
                    apiname: apiname.toLowerCase(),
                    name: name[lang] ?? name.english ?? "",
                    desc: desc[lang] ?? desc.english ?? "",
                    hidden: !!hidden,
                    percent: percentages.get(apiname) ?? percentages.get(apiname.toLowerCase()) ?? -1,
                    icon,
                    statid: parseInt(statid),
                    setid,
                    bit,
                    unlocktime: unlocked ? time : null,
                    relocked: !unlocked && time !== undefined, // true: Previously unlocked, then relocked
                    raw: achievement,
                    progress: sanachievement.getprogress(achievement,statlookup,cache)
                })
            }
        }

        if (!noiconcache) {
            const icons = new Map<string,string>()
            const queue = new Set(result.map(achievement => achievement.icon).filter(icon => icon !== undefined)).values()
        
            await Promise.all(Array.from({ length: 5 },async () => {
                for (const filename of queue) {
                    try {
                        const icon = await sanachievement.geticon(appid,filename)
                        icon && icons.set(filename,icon)
                    } catch (err) {
                        log.write("WARN",`Failed to cache achievement icon for "${filename}": ${(err as Error).message}`)
                    }
                }
            }))
        
            for (const achievement of result) {
                achievement.icon = achievement.icon ? icons.get(achievement.icon) : undefined
            }
        }
    
        return result
    },
    getpercentages: async (appid: number): Promise<Map<string,number>> => {
        const cached = percentcache.get(appid)
        if (cached) return cached
    
        const percentmap = new Map<string,number>()
        const url = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&format=json`
    
        try {
            const res = await fetch(url,{ signal: AbortSignal.timeout(5000) })
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    
            const data: { name: string, percent: string | number }[] = (await res.json()).achievementpercentages?.achievements ?? []
    
            for (const { name, percent } of data) {
                const value = parseFloat(String(percent))
                
                percentmap.set(name,value)
                percentmap.set(name.toLowerCase(),value)
            }
    
            percentmap.size && percentcache.set(appid,percentmap)
        } catch (err) {
            log.write("WARN",`Unable to fetch achievement percentages for AppID ${appid}: ${(err as Error).message}`)
        }
    
        return percentmap
    },
    checkunlockstatus: (cache: Achievement[],live: Achievement[]): Achievement[] => {
        const unlocked: Achievement[] = []
    
        for (const achievement of live) {
            const match = cache.find(cached => cached.apiname === achievement.apiname)
            match && achievement.unlocked !== match.unlocked && unlocked.push(achievement)
        }
    
        return unlocked
    },
    getprogress: (achievement: any,statlookup: Map<string,SteamStat>,cache: any) => {
        const progress = achievement?.progress
        if (!progress || progress.value?.operation !== "statvalue") return
    
        const stat = progress.value.operand1 as string
        const def = statlookup.get(stat)
        if (!def) return
    
        const min = progress.min_val as number ?? 0
        const max = progress.max_val as number ?? 0
        const value = steam.getstatvalue(def,cache)
        const percent = max > min ? Math.min(100,Math.max(0, ((value - min) / (max - min)) * 100)) : 0
    
        return {
            stat,
            value,
            min,
            max,
            percent
        } as AchievementProgress
    },
    downloadicon: async (urls: string[],dest: string) => {
        if (fs.existsSync(dest)) return dest
        const dir = path.dirname(dest)

        for (const url of urls) {
            try {
                const res = await fetch(url,{ signal: AbortSignal.timeout(5000) })
                if (!res.ok) {
                    log.write("ERROR",`${url}: ${res.status} ${res.statusText}`)
                    continue
                }

                fs.mkdirSync(dir,{ recursive: true })
                fs.writeFileSync(dest,Buffer.from(await res.arrayBuffer()))
                return dest
            } catch (err) {
                log.write("ERROR",`${url}: ${(err as Error).message}`)
            }
        }

        log.write("ERROR",`Failed to download "${path.basename(dest)}" from any specified Steam URL`)
        return null
    },
    geticon: async (appid: number,filename: string | undefined) => {
        if (!filename) return null
        return sanachievement.downloadicon(steamiconurls.map(url => `https://${url}/images/apps/${appid}/${filename}`),path.join(sanhelper.temp,`${appid}`,filename))
    },
    getsetname: (schema: any,appid: number,groupid: number,lang: string) => {
        const name = schema?.[appid]?.groups?.[groupid]?.name
        return name?.[lang] ?? name?.english ?? `Set ${groupid}`
    },
    getcompletedsets: (live: Achievement[],unlocked: Achievement[]) => {
        const setids = new Set(live.map(achievement => achievement.setid).filter(id => id !== undefined))
        if (setids.size < 2) return [] // 0-1 Sets: Trigger normal 100% notification
        
        const unlockset = new Set(unlocked.filter(achievement => achievement.unlocked && achievement.setid !== undefined).map(achievement => achievement.setid!))
        return [...unlockset].filter(id => live.filter(achievement => achievement.setid === id).every(achievement => achievement.unlocked))
    }
}