async function CacheAchievementData(appid) {
    return new Promise(async (resolve,reject) => {
        try {
            await createDir(await path.join(cachepath,appid), { recursive: true })

            !config.apikey && !config.steam64id ? reject(`No ${!config.apikey ? "API Key" : "Steam64 ID"} provided`) : null

            const { data: { playerstats, playerstats: { gameName } } } = await http(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${config.apikey}&steamid=${config.steam64id}&l=${config.lang}&?__random=${sanhelper.random()}`)
            
            !playerstats.success && reject(`Unable to access achievement data for ${appid}`)

            const { achievements } = playerstats
            const { data: { game: { availableGameStats: { achievements: schema } } } } = await http(`https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${config.apikey}&appid=${appid}&l=${config.lang}&format=json`)
            const { data: { achievementpercentages: { achievements: percentages } } } = await http(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&l=${config.lang}&format=json`)

            if (!achievements) return reject(0)
            if (achievements.every(achievement => achievement.achieved === 1)) return reject([100,gameName])

            const cachedata = []
        
            invoke("get_url_redirect", { steam64id: config.steam64id, appid: appid })
        
            window.addEventListener("xml", async event => {
                async function DownloadHandler(elem) {
                    const ext = await path.extname(event.detail[elem])
                    const filepath = await path.join(cachepath,appid,`${elem}.${ext}`)
                    event.detail[elem] ? await download(event.detail[elem],filepath) : null
                    return event.detail[elem] ? filepath : null
                }

                const gameicon = await exists(await path.join(steampath,"appcache","librarycache",`${appid}_icon.jpg`)) ? await path.join(steampath,"appcache","librarycache",`${appid}_icon.jpg`) : await DownloadHandler("gameicon")
                const gamearturl = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/library_hero.jpg`

                // Download Game Art from URL as fallback
                const res = await http(gamearturl, { responseType: 3 })
                res.ok ? await download(gamearturl,await path.join(cachepath,appid,`gameart.jpg`)) : DownloadHandler("gameart")

                function GetHiddenDesc(apiname) {
                    const match = event.detail.achievements.find(achievement => achievement.apiname.toUpperCase() === apiname.toUpperCase())
                    return `🔒 ${match.desc}`
                }

                function GetPercentage(apiname) {
                    const match = percentages.find(achievement => achievement.name.toUpperCase() === apiname.toUpperCase())
                    return match.percent
                }
        
                schema.forEach(async (achievement, i) => {
                    try {
                        const ext = await path.extname(achievement.icon)
                        await download(achievement.icon,await path.join(cachepath,appid,`${achievement.name}.${ext}`))
            
                        cachedata.push({
                            title: achievement.displayName,
                            apiname: achievement.name,
                            desc: !achievement.hidden ? achievement.description : GetHiddenDesc(achievement.name),
                            percentage: GetPercentage(achievement.name),
                            type: GetPercentage(achievement.name) > config.rarity ? "main" : "rare",
                            hidden: achievement.hidden === 1,
                            icon: await path.join(cachepath,appid,`${achievement.name}.${ext}`) || achievement.icon,
                            achieved: achievements[i].achieved
                        })
                    } catch (err) {
                        log.write("error",`Error caching achievement data for AppID ${appid}: ${err}`)
                    }
                })
                
                resolve({ gameName, cachedata, gameicon })
            }, { once: true })
        } catch (err) {
            reject(err)
        }
    })
}

const plat = {
    achieved: 1,
    apiname: "",
    desc: "",
    hidden: false,
    icon: "",
    percentage: 0,
    title: "",
    type: "plat"
}

let hasshown = false

async function CheckUnlockStatus(appid) {
    const { data: { playerstats: { achievements } } } = await http(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${config.apikey}&steamid=${config.steam64id}&l=${config.lang}&?__random=${sanhelper.random()}`)

    await new Promise(resolve => {
        achievements.forEach(achievement => {
            const match = cachedata.find(cached => cached.apiname === achievement.apiname)

            if (match && achievement.achieved !== match.achieved) {
                Notify(match)
                match.achieved = achievement.achieved
            }
        })

        resolve()
    })
    
    if (achievements.every(achievement => achievement.achieved === 1) && !hasshown) {
        hasshown = true
        Notify(plat)
    }
}