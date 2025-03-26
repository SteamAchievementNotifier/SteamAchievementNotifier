import path from "path"
import { readFileSync, createWriteStream } from "fs"
import { get } from "https"
import { sanhelper, __root } from "./sanhelper"
import { log } from "./log"

export const cachedata = (client: any, apinames: string[]): Achievement[] => {
    const {
        isActivated,
        getAchievementDisplayAttribute,
        getAchievementAchievedPercent
    } = client.achievement

    const achievements: Achievement[] = []

    for (const i in apinames) {
        const name = apinames[i]
        const hidden = parseInt(getAchievementDisplayAttribute(name,"hidden"))
        const achievement: Achievement = {
            unlocked: isActivated(name),
            apiname: name,
            name: getAchievementDisplayAttribute(name,"name"),
            desc: getAchievementDisplayAttribute(name,"desc"),
            percent: getAchievementAchievedPercent(name),
            hidden: hidden !== 0
        }

        achievements.push(achievement)
    }

    return achievements
}

export const checkunlockstatus = (cache: Achievement[], live: Achievement[]): Achievement[] => {
    const unlocked: Achievement[] = []

    live.forEach(live => {
        const match = cache.find(cached => cached.apiname === live.apiname)

        if (match && live.unlocked !== match.unlocked) {
            unlocked.push(live)
            // match.unlocked = achievement.unlocked
        }
    })

    return unlocked
}

export const getachievementicon = async (client: any, achievement: Achievement): Promise<string | null> => {
    const fs = await import("fs")
    const { encode } = await import("jpeg-js")

    const { apiname } = achievement
    const { handle, width, height } = client.achievement.getAchievementIcon(apiname) as AchievementIcon
    if (!handle) return null

    log.write("INFO",`"${apiname}" Icon Info:\n- Handle: ${handle.length > 0 ? "OK" : "Error"}\n- Dimensions: ${width} x ${height}`)

    const { data } = encode({
        data: handle,
        width: width,
        height: height
    },100)
    
    const iconpath: string = path.join(sanhelper.temp,`${apiname}.jpg`)
    fs.writeFileSync(iconpath,data)
    return iconpath
}

export const downloadicon = async (achievement: { apiname: string, iconurl: string }): Promise<string> => {
    const { apiname, iconurl } = achievement
    const dest = path.join(sanhelper.temp,`${apiname}.jpg`)

    try {
        const promise = await new Promise<string>((resolve,reject) => {
            get(iconurl, res => {
                const file = createWriteStream(dest)
                res.pipe(file)
        
                file
                .on("finish", () => {
                    file.close()
                    resolve(dest)
                })
                .on("error", err => {
                    log.write("ERROR",`Error caching achievement icon for "${apiname}": ${err}`)
                    reject("")
                })
            })
        })

        return promise
    } catch (err) {
        return err as string
    }
}

/** As Steamworks' `getAchievementIcon()` function does not allow specification of whether to fetch locked/unlocked versions of achievement icons, they cannot be locally cached.
 * 
 * Caching icons from the user's Steam Community page ensures icons are locally available upon unlocking an achievement.
 * 
 * *`getAchievementIcon()` is then used as a fallback, in case caching the icon via this function fails.* */
export const cacheachievementicons = async (gamename: string, steam64id: string, appid: number, url?: string): Promise<string[]> => {
    const steamurl = url || `https://steamcommunity.com/profiles/${steam64id}/stats/${appid}/?xml=1`
    const icons: string[] = []
    let total = 0

    try {
        const res = await fetch(steamurl)

        if (!res.ok) throw new Error(`Error preparing to cache achievement icons: ${res.statusText}`)
        if (!res.url.includes(`${appid}`) && !res.url.includes("/?xml=1")) {
            log.write("INFO",`Steam Community Page for "${appid}" uses game name instead of AppId. Retrying...`)
            return cacheachievementicons(gamename,steam64id,appid,`${res.url}/?xml=1`)
        }

        const xml = new window.DOMParser().parseFromString(await res.text(),"text/xml")

        const error = xml.querySelector("error")
        if (error) throw new Error(`Error parsing Steam Community profile for "${steam64id}": ${error.textContent}`)

        const achievements = Array.from(xml.getElementsByTagName("achievement")) as HTMLElement[]
        total = achievements.length

        for (const i in achievements) {
            try {
                const achievement = {
                    apiname: achievements[i].querySelector("apiname")!.textContent!.toUpperCase(),
                    iconurl: achievements[i].querySelector("iconClosed")!.textContent!
                }

                const icon = await downloadicon(achievement)
                icon && icons.push(icon)
            } catch (err) {
                throw new Error(`Error downloading achievement icon: ${(err as Error).message}`)
            }
        }
    } catch (err) {
        log.write("ERROR",(err as Error).message)
    }

    log.write("INFO",`Cached ${icons.length}/${total} achievement icons for "${gamename}"`)

    return icons
}

const getlocalisedachievementdata = (jsonpath: string,apiname: string) => {
    try {
        const data = JSON.parse(readFileSync(jsonpath).toString())
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
                    const vecdata = vecs.flat().find(ach => ach.strID === apiname)
                    if (vecdata) return vecdata
                }
            }
        }
    
        if (achievementmapdata) {
            const mapdata = JSON.parse(achievementmapdata)
        
            for (const [_,achievements] of mapdata) {
                const match = achievements.find(([achname]: [string,any]) => achname === apiname)
                if (match) return match[1]
            }
        }
    
        return null
    } catch (err) {
        log.write("ERROR",`Error parsing "${jsonpath}": ${(err as Error).stack!}`)
        return null
    }
}

export const getlocalisedachievementinfo = async (steam3id: number,apiname: string,key: "name" | "description",maxretries: number): Promise<string | null> => {
    // JSON file only has a certain number of pre-added achievement objects (usually only 12 for...some reason).
    // Any missing achievements are added to this file only after they are unlocked, which is why we need a "retries" system
    let retries = 0
    const jsonpath = path.join(sanhelper.steampath,"userdata",`${steam3id}`,"config","librarycache",`${sanhelper.gameinfo.appid}.json`)
    const retryerr = `Unable to locate "${key}" for "${apiname}" in "${jsonpath}"`

    try {
        let achinfo = getlocalisedachievementdata(jsonpath,apiname);

        while (!achinfo && retries < maxretries) {
            retries++
            log.write("WARN",`${retryerr} - retrying (${retries}/${maxretries})...`)

            await new Promise(resolve => setTimeout(resolve,100))
            achinfo = getlocalisedachievementdata(jsonpath,apiname)
        }

        if (achinfo) return achinfo[`str${key.replace(key[0],key[0].toUpperCase())}`]

        log.write("ERROR",`${retryerr} - falling back to Steamworks...`)
        return null
    } catch (err) {
        log.write("ERROR",`Error parsing "${jsonpath}": ${(err as Error).stack || (err as Error).message}`)
        return null
    }
}