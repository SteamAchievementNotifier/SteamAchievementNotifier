import fs from "fs"
import path from "path"
import vdfbinary from "@xan105/vdf/binary"
// import vdf from "simple-vdf"
import vdf from "@xan105/vdf"
import { log } from "./log"

const steam64base = 76561197960265728n

export const steamiconurls = [
    "cdn.akamai.steamstatic.com/steamcommunity/public",
    "shared.fastly.steamstatic.com/community_assets"
]

export const steam = {
    steam64tosteam3id: (steamid64: string) => Number(BigInt(steamid64) - steam64base), // BigInt: SteamID64 exceeds Number.MAX_SAFE_INTEGER
    findvdfkey: (entry: any,key: string) => entry[Object.keys(entry).find(k => k.toLowerCase() === key.toLowerCase()) ?? ""],
    getallusers:(steampath: string) => {
        const users: SteamUser[] = []

        const userdatadir = path.join(steampath,"userdata")
        const ondisk = new Set(fs.existsSync(userdatadir) ? fs.readdirSync(userdatadir,{ withFileTypes: true }).filter(entry => entry.isDirectory() && /^[1-9]\d*$/.test(entry.name)).map(entry => entry.name) : [])
        const loginusers = path.join(steampath,"config","loginusers.vdf")

        const vdfdata = steam.parsevdf(loginusers)

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

        // Userdata folders with no matching `loginusers.vdf` entry (e.g. removed accounts)
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
    getcurrentuser: (users: SteamUser[],activeuser?: number | null) => {
        if (activeuser) {
            const active = users.find(user => user.steam3id === activeuser)
            if (active) return active
        }

        const bytimestamp = users.filter(user => user.timestamp > 0).sort((a,b) => b.timestamp - a.timestamp)[0]
        return bytimestamp ?? users.find(user => user.mostrecent) ?? null
    },
    getbinarydata: (binfile: string) => vdfbinary.parse(fs.readFileSync(binfile)),
    getstatlookup: (stats: Record<string, any>) => {
        const lookup = new Map<string,SteamStat>()

        for (const [statid,stat] of Object.entries<any>(stats)) {
            if (stat?.type === "ACHIEVEMENTS" || typeof stat?.name !== "string") continue
            
            lookup.set(stat.name,{
                statid,
                type: stat.type,
                default: Number(stat.default ?? 0)
            })
        }

        return lookup
    },
    getstatvalue: (stat: SteamStat,cache: any): number => {
        const data = cache[stat.statid]?.data
        if (typeof data !== "number") return stat.default

        if (stat.type === "FLOAT") {
            const buf = Buffer.alloc(4)
            buf.writeInt32LE(data | 0)
            return buf.readFloatLE()
        }

        return data
    },
    parsevdf: (filename: string) => {
        try {
            return vdf.parse(fs.readFileSync(filename,"utf8")) as any
        } catch (err) {
            log.write("WARN",`Unable to parse "${filename}": ${(err as Error).message}`)
        }
    },
    getplaytime: (user: SteamUser,appid: number,steampath: string) => {
        const localconfig = path.join(steampath,"userdata",`${user.steam3id}`,"config","localconfig.vdf")
        const vdfdata = steam.parsevdf(localconfig)
        const playtime = parseInt(vdfdata.UserLocalConfigStore?.Software?.valve?.Steam?.apps?.[appid]?.Playtime ?? "-1")

        return playtime >= 0 ? Math.round((playtime / 60) * 10) / 10 : -1 // Steam rounds to the nearest .1
    }
}