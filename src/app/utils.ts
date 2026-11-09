import fs from "fs"
import path from "path"
import { sanconfig } from "./config"
import { log } from "./log"
import { sanhelper } from "./sanhelper"

export const utils = {
    game: {
        createinfo: (gameinfo: { gamename: string, appid: number, pollrate: number },event: "started" | "exited") => [
            `Game process ${event}:\n`,
            `gamename: ${gameinfo.gamename}`,
            `appid: ${gameinfo.appid}`,
            `pollrate: ${gameinfo.pollrate}ms`,
        ].join("\n- ")
    },
    localised: {
        parse: (jsonpath: string,apiname: string) => {
            try {
                const data = JSON.parse(fs.readFileSync(jsonpath).toString())
                const achentry = data.find((entry: any[]) => entry[0] === "achievements")
                const achmapentry = data.find((entry: any[]) => entry[0] === "achievementmap")

                const achievementsdata = achentry?.[1]?.data || null
                const achievementmapdata = achmapentry?.[1]?.data || null
                const vecs: any[] = []
            
                if (achievementsdata) {
                    for (const vec in achievementsdata) {
                        vec.startsWith("vec") && vecs.push(achievementsdata[vec])
                    }
                }
            
                if (vecs.length) {
                    for (const vec of vecs) {
                        if (vec.length) {
                            const vecdata = vecs.flat().find(achievement => achievement.strID?.toLowerCase() === apiname.toLowerCase())
                            if (vecdata) return vecdata
                        }
                    }
                }
            
                if (achievementmapdata) {
                    const mapdata = JSON.parse(achievementmapdata)
                
                    for (const [_,achievements] of mapdata) {
                        const match = achievements.find(([achievementname]: [string,any]) => achievementname.toLowerCase() === apiname.toLowerCase())
                        if (match) return match[1]
                    }
                }
            
                return null
            } catch (err) {
                log.write("ERROR",`Error parsing "${jsonpath}": ${(err as Error).stack!}`)
                return null
            }
        },
        data: async (steam3id: number,apiname: string,key: "name" | "description",maxretries: number) => {
            // JSON file only has a certain number of pre-added achievement objects (usually only 12 for...some reason).
            // Any missing achievements are added to this file only after they are unlocked, which is why we need a "retries" system
            let retries = 0
            const jsonpath = path.join(sanhelper.steampath,"userdata",`${steam3id}`,"config","librarycache",`${sanhelper.gameinfo.appid}.json`)
            const err = `Unable to locate "${key}" for "${apiname}" in "${jsonpath}"`

            try {
                let achievementinfo = utils.localised.parse(jsonpath,apiname);

                while (!achievementinfo && retries < maxretries) {
                    retries++
                    log.write("WARN",`${err} - retrying (${retries}/${maxretries})...`)

                    await new Promise(resolve => setTimeout(resolve,100))
                    achievementinfo = utils.localised.parse(jsonpath,apiname)
                }

                if (achievementinfo) return achievementinfo[`str${key.replace(key[0],key[0].toUpperCase())}`]

                log.write("ERROR",err)
                return null
            } catch (err) {
                log.write("ERROR",`Error parsing "${jsonpath}": ${(err as Error).stack || (err as Error).message}`)
                return null
            }
        },
        obj: async (steam3id: number,achievement: Achievement) => {
            const config = sanconfig.get()
            const steamlang = config.get("steamlang")
            const maxlang = config.get("maxsteamlangretries")
    
            const obj: LocalisedObj = {
                name: null,
                desc: null
            }
    
            for (const prop of (["name","description"] as const)) {
                const key = prop === "name" ? "name" : "desc"
                obj[key] = steamlang ? await utils.localised.data(steam3id,achievement.apiname,prop,maxlang) : null
            }
    
            window.localised.set(achievement.apiname,obj)
    
            return obj
        }
    },
    stats: {
        update: async (workerinfo: WorkerInfo,achievements: Achievement[]) => {
            const { appid, gamename, steam3id } = workerinfo
            
            if (!steam3id) {
                log.write("ERROR",`Invalid steam3id (${steam3id}) supplied to "updatestats()"`)
                return null
            }
            
            const { steamlang } = sanconfig.get().store
    
            return {
                appid,
                gamename,
                achievements: !steamlang ? achievements : await Promise.all(achievements.map(async achievement => {
                    const achievementcopy = { ...achievement }
                    const localised = await utils.localised.obj(steam3id,achievementcopy)
    
                    for (const key of Object.keys(localised)) {
                        achievementcopy[key as "name" | "desc"] = localised[key as "name" | "desc"] || achievementcopy[key as "name" | "desc"]
                    }
    
                    return achievementcopy
                }))
            } as StatsObj
        }
    }
}