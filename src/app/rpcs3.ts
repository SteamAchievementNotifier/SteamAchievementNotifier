import fs from "fs"
import path from "path"
import chokidar from "chokidar"
import { ipcRenderer } from "electron"
import { parseStringPromise } from "xml2js"
import { log } from "./log"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

let trophyWatcher: any | null = null
const activeSessions = new Set<string>()

let cachedTrophies = new Map<string, Buffer>()
let currentGameId: string | null = null
let currentTitleName: string | null = null

export const initRpcs3Watcher = () => {
    const config = sanconfig.get()
    const rpcs3path = (config.get("rpcs3path") as string).replace(/\\/g,"/")
    if (!rpcs3path || !fs.existsSync(rpcs3path)) {
        log.write("WARN", `RPCS3 path not valid: ${rpcs3path}`)
        return
    }

    log.write("INFO", `Initializing RPCS3 Watchers for path: ${rpcs3path}`)
    watchTrophyDir(rpcs3path)
}

export const stopRpcs3Watcher = () => {
    if (trophyWatcher) {
        trophyWatcher.close()
        trophyWatcher = null
    }
    cachedTrophies.clear()
    activeSessions.clear()
    currentGameId = null
    currentTitleName = null
    log.write("INFO", "Stopped RPCS3 Watchers")
}



const watchTrophyDir = (trophyDir: string) => {
    if (trophyWatcher) trophyWatcher.close()

    // Watch all TROPUSR.DAT files
    const watchPath = path.join(trophyDir, "**", "TROPUSR.DAT").replace(/\\/g, "/")
    log.write("INFO", `Watching for trophy changes at: ${watchPath}`)

    trophyWatcher = chokidar.watch(watchPath, {
        persistent: true,
        usePolling: true,
        interval: 1000
    })

    trophyWatcher.on("add", (filePath: string) => updateCache(filePath))

    trophyWatcher.on("change", async (filePath: string) => {
        log.write("INFO", `TROPUSR.DAT changed: ${filePath}`)
        await handleTrophyChange(filePath)
    })
}

const updateCache = (filePath: string) => {
    try {
        const data = fs.readFileSync(filePath)
        cachedTrophies.set(filePath, data)
    } catch (err) {
        log.write("ERROR", `Error reading ${filePath}: ${err}`)
    }
}

const handleTrophyChange = async (filePath: string) => {
    try {
        const newData = fs.readFileSync(filePath)
        const oldData = cachedTrophies.get(filePath)

        if (!oldData) {
            cachedTrophies.set(filePath, newData)
            return
        }

        // Compare old and new buffers to find newly unlocked trophies
        // Typically, unlocked flags might change a byte from 0x00 to 0x10, etc.
        // Trophies are usually indexed by ID.
        let changedIndexes: number[] = []
        for (let i = 0; i < Math.min(oldData.length, newData.length); i++) {
            if (oldData[i] !== newData[i]) {
                log.write("INFO", `Byte changed at offset ${i}: ${oldData[i]} -> ${newData[i]}`)
                // Find trophy ID based on changed byte offset?
                // For TROPUSR.DAT, usually there is an array of records.
                // We will parse the metadata and trigger notifications.
                changedIndexes.push(i)
            }
        }

        cachedTrophies.set(filePath, newData)

        const dirPath = path.dirname(filePath)
        const titleId = path.basename(dirPath)
        const sfmPath = path.join(dirPath, "TROPCONF.SFM")

        if (changedIndexes.length === 0) {
            // File accessed but no unlocks (boot up)
            if (!activeSessions.has(titleId)) {
                activeSessions.add(titleId)
                if (fs.existsSync(sfmPath)) {
                    try {
                        const xmlContent = fs.readFileSync(sfmPath, "utf8")
                        const parsed = await parseStringPromise(xmlContent)
                        const gameTitle = parsed.trophyconf?.title_name?.[0] || "Unknown PS3 Game"

                        log.write("INFO", `RPCS3 Tracking Started: ${gameTitle}`)
                        const gameIconPath = path.join(dirPath, "ICON0.PNG").replace(/\\/g, "/")
                        const iconUrl = fs.existsSync(gameIconPath) ? gameIconPath : sanhelper.setfilepath("img", "sanlogosquare.svg")

                        ipcRenderer.send("showtrack", gameTitle, { icon: iconUrl, gameartlibhero: iconUrl })
                    } catch (err) {
                        log.write("ERROR", `Error parsing TROPCONF.SFM on boot: ${err}`)
                    }
                }
            }
        } else {
            if (fs.existsSync(sfmPath)) {
                await processTrophyUnlock(sfmPath, changedIndexes)
            } else {
                log.write("WARN", `TROPCONF.SFM not found at ${sfmPath}`)
            }
        }
    } catch (err) {
        log.write("ERROR", `Error handling trophy change: ${err}`)
    }
}

const processTrophyUnlock = async (sfmPath: string, changedIndexes: number[]) => {
    try {
        const xmlContent = fs.readFileSync(sfmPath, "utf8")
        const parsed = await parseStringPromise(xmlContent)

        const trophies = parsed.trophyconf?.trophy || []
        const gameTitle = parsed.trophyconf?.title_name?.[0] || "Unknown PS3 Game"

        // As a simplified logic, if multiple bytes changed, we will just use the index to guess the trophy ID
        // Note: The actual binary structure of TROPUSR.DAT has records of 0x40 bytes starting at offset 0x40 or 0x60 typically
        // We will just find the trophy that matches the change or if we don't know the exact structure, just trigger the last unlocked.

        // For accurate tracking, since TROPUSR.DAT changes when unlocked, we should match the trophy ID.
        // Let's assume we can map `changedIndexes` to a trophy ID.
        // For now, if we can't reliably map it, let's just trigger a notification for any trophy that might be newly unlocked
        // Or actually, RPCS3 updates timestamps. So we will find the first trophy we can map to the changed offset.

        // We'll iterate through `trophies` and just trigger one for now for demonstration,
        // but let's try to extract the ID based on record size.
        // In PS3 TROPUSR.DAT, header is typically 0x40 bytes, followed by records of 0x40 bytes each.
        // Record at index 0 (Trophy ID 0) starts at offset 0x40.

        for (const index of changedIndexes) {
            // Check if index is in the records section
            if (index >= 0x40) {
                const trophyId = Math.floor((index - 0x40) / 0x40)
                const trophyData = trophies.find((t: any) => parseInt(t.$.id) === trophyId)

                if (trophyData) {
                    const name = trophyData.name?.[0] || "Unknown Trophy"
                    const desc = trophyData.detail?.[0] || "No description"
                    const hidden = trophyData.$.hidden === "yes"
                    // trophy types: "B" = Bronze, "S" = Silver, "G" = Gold, "P" = Platinum
                    const tType = trophyData.$.ttype
                    let rarityType = "main" // Bronze/Default
                    if (tType === "S") rarityType = "semi"
                    if (tType === "G") rarityType = "rare"
                    if (tType === "P") rarityType = "plat"

                    const iconId = trophyData.$.id.padStart(3, "0")
                    const iconPath = path.join(path.dirname(sfmPath), `TROP${iconId}.PNG`).replace(/\\/g, "/")

                    triggerNotification(rarityType, gameTitle, name, desc, iconPath, hidden)
                    // only trigger one for this ID to avoid duplicate notifications for multiple byte changes in the same record
                    break
                }
            }
        }
    } catch (err) {
        log.write("ERROR", `Error parsing TROPCONF.SFM: ${err}`)
    }
}

const triggerNotification = (type: string, gamename: string, name: string, desc: string, icon: string, hidden: boolean) => {
    const config = sanconfig.get()
    const customisation = config.get(`customisation.${type}`) as any

    const notifyObj = {
        id: Math.round(Date.now() / Math.random() * 1000),
        customisation,
        type,
        gamename,
        steam3id: 0, // Using 0 for RPCS3 as it's not Steam
        apiname: name,
        name,
        desc,
        unlocked: true,
        hidden,
        percent: 0, // Unused for RPCS3
        icon: fs.existsSync(icon) ? icon : sanhelper.setfilepath("img", "sanlogotrophy.svg"),
        gameicon: sanhelper.setfilepath("img", "sanlogosquare.svg"), // Optional: extract game icon from ICON0.PNG
        unlocktime: new Date().toISOString(),
        ra: false // It's not a RetroAchievements unlock
    }

    log.write("INFO", `Triggering RPCS3 Notification: ${name} (${type})`)
    ipcRenderer.send("notify", notifyObj)
}
