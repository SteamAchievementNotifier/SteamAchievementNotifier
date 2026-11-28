import asar from "@electron/asar"
import fs from "fs"
import path from "path"
import Store from "electron-store"
import { sanconfig } from "./config"
import { log } from "./log"
import { sanhelper } from "./sanhelper"
import { lt, valid } from "semver"

const allow: Record<string,string[]> = {
    customfiles: [
        "dist/app/global.css",
        "dist/app/trackwin.html",
        "dist/app/trackwin.js",
        "dist/notify/base.js",
        "fonts",
        "icon/lock.svg",
        "img/achicon.png",
        "img/base64.png",
        "img/gameicon.png",
        "img/s.svg",
        "img/sanimgbg.png",
        "img/santextlogobg.png",
        "img/sanlogosquare.svg",
        "img/sanlogotrophy.svg",
        "notify/base.css",
        "notify/baseanim.css",
        "notify/base.html",
        "notify/presets",
        "sound",
        "package.json"
    ]
}

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
    },
    app: {
        checksingleinstance: (lock: boolean) => {
            !lock && log.write("WARN",`Steam Achievement Notifier (V${sanhelper.version}) is already running!`)
            return !lock
        },
        getcustomfilesversion: (packagepath: string) => {
            try {
                return valid(JSON.parse(fs.readFileSync(packagepath,"utf8")).version) ?? "0.0.0"
            } catch {
                return "0.0.0"
            }
        },
        copyrecursive: (src: string,dest: string,allow?: string[],root: string = src) => {
            if (!fs.existsSync(src)) throw new Error(`"${src}" does not exist`)

            const relpath = path.relative(root,src).split(path.sep).join("/")

            if (allow && relpath) {
                const src = allow.some(entry => relpath === entry || relpath.startsWith(`${entry}/`)) // The file itself, or within the dir
                const nestedsrc = allow.some(entry => entry.startsWith(`${relpath}/`)) // A nested file/dir (e.g. "notify" for "notify/presets")

                if (!src && !nestedsrc) return
                src && (allow = undefined) // Copy everything within an allowed path
            }

            if (fs.statSync(src).isDirectory()) {
                !fs.existsSync(dest) && fs.mkdirSync(dest,{ recursive: true })

                for (const file of fs.readdirSync(src)) {
                    utils.app.copyrecursive(path.join(src,file),path.join(dest,file),allow,root)
                }
            } else {
                fs.copyFileSync(src,dest)
            }
        },
        // Deletes every `customfiles_VX.X.X` backup in the same dir as `dirpath` (except `previousversion`)
        removecustomfilesbaks: (dirpath: string,previousversion: string) => {
            const parentdir = path.dirname(dirpath)

            try {
                for (const entry of fs.readdirSync(parentdir,{ withFileTypes: true })) {
                    const entrypath = path.join(parentdir,entry.name)
                    const match = entry.isDirectory() && /^customfiles_V(.+)$/.exec(entry.name)

                    if (!match || !valid(match[1]) || entrypath === previousversion) continue

                    try {
                        fs.rmSync(entrypath,{ recursive: true, force: true })
                        log.write("INFO",`Removed outdated "${entrypath}" backup directory`)
                    } catch (err) {
                        log.write("WARN",`Unable to remove outdated "${entrypath}" backup directory: ${(err as Error).message}`)
                    }
                }
            } catch (err) {
                log.write("WARN",`Unable to check for outdated "customfiles" backups in "${parentdir}": ${(err as Error).message}`)
            }
        },
        checkdir: (dirpath: string,callback: () => void,msg: string) => {
            if (fs.existsSync(dirpath)) {
                if (path.basename(dirpath) !== "customfiles") return log.write("INFO",`"${dirpath}" already exists: No changes were made`)

                const customfilesversion = utils.app.getcustomfilesversion(path.join(dirpath,"package.json"))
                const backuppath = dirpath + `_V${customfilesversion}`
                
                const { semver } = sanhelper
                if (!semver) throw new Error("Unable to parse semver")
                
                if (lt(customfilesversion,semver)) {
                    log.write("INFO",`"${dirpath}" Package Version (${customfilesversion}) is outdated compared to current App Version (${sanhelper.semver}): Attempting backup...`)

                    try {
                        fs.renameSync(dirpath,backuppath)
                        log.write("INFO",`"${backuppath}" backup directory created successfully`)
                        utils.app.removecustomfilesbaks(dirpath,backuppath) // Only the direct previous version's `customfiles` should be kept
                    } catch (err) {
                        return log.write("ERROR",`Error creating backup for ${customfilesversion} "customfiles" directory: ${err as Error}`)
                    }
                } else {
                    return log.write("INFO",`"${dirpath}" Package Version (${customfilesversion}) matches current App Version (${sanhelper.semver}): No changes were made`)
                }
            }

            try {
                callback()
                log.write("INFO",msg)
            } catch (err) {
                log.write("ERROR",(err as Error).message)
            }
        },
        createdir: (dirpath: string,src?: string,destdir?: string) => {
            utils.app.checkdir(dirpath,() => fs.mkdirSync(dirpath),`"${dirpath}" created successfully`)

            if (!src || !destdir) return log.write("INFO",`No ${!src ? "src" : "destdir"} value specified - copy operation aborted`)

            const dest = path.join(dirpath,destdir)
            const allowlist = allow[destdir]

            utils.app.checkdir(dest,() => {
                if (path.extname(src) === ".asar") {
                    const tempasar = path.join(sanhelper.appdata,"tempasar")

                    try {
                        asar.extractAll(src,tempasar)
                        utils.app.copyrecursive(tempasar,dest,allowlist)
                    } finally {
                        fs.rmSync(tempasar,{ recursive: true, force: true })
                    }
                } else {
                    utils.app.copyrecursive(src,dest,allowlist)
                }
            },`"${src}" copied to "${dest}" successfully`)

            process.platform === "linux" && fs.existsSync(dest) && fs.chmod(dest,0o777,err => log.write(err ? "ERROR" : "INFO",err ? `Error setting folder permissions for "${dest}": ${err}` : `Folder permissions for "${dest}" set successfully`))
        }
    },
    config: {
        removelegacykey: (config: Store<Config>,key: string) => {
            if (!config.has(key)) return

            try {
                config.delete(key)
                log.write("INFO",`Legacy "${key}" key removed from config successfully`)
            } catch (err) {
                log.write("WARN",`Unable to remove legacy "${key}" key: ${err}`)
            }
        },
        cleanup: (config: Store<Config>) => {
            // Legacy keys required to be removed if existing in config
            for (const key of [
                "webhooktypes",
                "uselegacynotifytimer",
                "showpercent",
                "showpercentpos",
                "showpercentstyle"
            ] as const) {
                utils.config.removelegacykey(config,key)
            }

            // Overwrites old default `customisation` key values with new default values
            for (const [key,values] of new Map<string,[any,any]>([
                ["outline",["off","solid"]],
                ["customicons.xboxone.decoration",[null,sanhelper.setfilepath("img","s.svg")]]
            ])) {
                utils.customisation.updatekeys(config,key,keypath => utils.customisation.updatedefaultvalue(config,keypath,values))
            }

            // Reset legacy `customisation` keys for each type, optionally limited to a single `NotifyType`
            for (const [key,type] of new Map<string,NotifyType | undefined>([
                ["alldetails",undefined],
                ["showdecoration",undefined],
                ["previewhiddenicon","plat"],
                ["bgonly",undefined]
            ])) {
                utils.customisation.updatekeys(config,key,keypath => config.has(keypath) && config.set(keypath,false),type)
            }
        }
    },
    customisation: {
        updatekeys: (config: Store<Config>,key: string,callback: (path: string) => void,limittype?: NotifyType) => {
            const customisation = (config.get("customisation") ?? {}) as Record<NotifyType,Customisation>

            for (const [type,{ usertheme }] of Object.entries(customisation) as [NotifyType,Customisation][]) {
                if (limittype && limittype !== type) continue

                callback(`customisation.${type}.${key}`)

                for (const i in usertheme) {
                    callback(`customisation.${type}.usertheme.${i}.customisation.${key}`)
                    type === "plat" && usertheme[i].set && callback(`customisation.plat.usertheme.${i}.set.${key}`)
                }
            }
        },
        updatedefaultvalue: (config: Store<Config>,path: string,[oldvalue,newvalue]: [any,any]) => {
            if (!config.has(path)) return log.write("WARN",`Unable to set new value for "${path}" key: Key not present in config`)

            try {
                if (config.get(path) === oldvalue) {
                    config.set(path,newvalue)
                    log.write("INFO",`Updated default "${path}" value from "${oldvalue}" to "${newvalue}" successfully`)
                }
            } catch (err) {
                log.write("ERROR",`Unable to update default value for "${path}" key: ${err}`)
            }
        }
    }
}