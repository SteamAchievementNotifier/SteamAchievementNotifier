import { app } from "electron"
import path from "path"
if (process.platform === "win32" && process.env.npm_lifecycle_event !== "dev") {
    const appdir = path.join(process.env.localappdata!,"Programs",app.name)
    process.cwd() !== appdir && process.chdir(appdir)
}

import fs from "fs"
import fsextra from "fs-extra"
import { __root, sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { log } from "./log"
import { error } from "./error"
import { main } from "./main"

const lock = app.requestSingleInstanceLock()
const checksingleinstance = (lock: boolean) => {
    if (!lock) {
        log.write("ERROR",`Steam Achievement Notifier (V${sanhelper.version}) is already running!`)
        return app.exit()
    }
}

checksingleinstance(lock)

const starttime = new Date().toLocaleTimeString()
log.init("APP")

sanconfig.get().store.nohwa && app.disableHardwareAcceleration()

const getcustomfilesversion = (packagepath: string): string => {
    try {
        return fs.existsSync(packagepath) ? (JSON.parse(fs.readFileSync(packagepath).toString())).version : sanhelper.semver
    } catch (err) {
        log.write("ERROR",`Error parsing package version number in "${packagepath}": ${err as Error}`)
        return sanhelper.semver
    }
}

const checkdir = (dirpath: string, callback: () => void, msg: string) => {
    if (fs.existsSync(dirpath)) {
        if (path.basename(dirpath) !== "customfiles") return log.write("INFO",`"${dirpath}" already exists: No changes were made`)

        const customfilesversion = getcustomfilesversion(path.join(dirpath,"package.json"))
        const backuppath = dirpath + `_V${customfilesversion}`

        if (parseInt(customfilesversion.split(".")[2]) < parseInt(sanhelper.semver.split(".")[2])) {
            log.write("INFO",`"${dirpath}" Package Version (${customfilesversion}) is outdated compared to current App Version (${sanhelper.semver}): Attempting backup...`)

            try {
                fs.renameSync(dirpath,backuppath)
                log.write("INFO",`"${backuppath}" backup directory created successfully`)
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
        log.write("ERROR",err as Error)
    }
}

const ignore = [
    ".git",
    ".vscode",
    "_backup",
    "_release",
    "deps",
    "node_modules",
    "src",
    ".gitattributes",
    ".gitignore",
    "DEV.md",
    "gh_token.txt",
    "package-lock.json",
    "README.md",
    "san.d.ts",
    "tsconfig.json"
]

const createdir = (dirpath: string,src?: string,destdir?: string) => {
    checkdir(dirpath,() => fs.mkdirSync(dirpath),`"${dirpath}" created successfully`)

    if (!src || !destdir) return log.write("INFO",`No ${!src ? "src" : "destdir"} value specified - copy operation aborted`)

    const dest = path.join(dirpath,destdir)
    
    checkdir(dest,() => fsextra.copySync(src,dest,{ filter(src) {
        if (destdir === "customfiles") {
            ignore.push("temp")
        } else if (destdir === "img") {
            const additional = [
                "dist",
                "fonts",
                "icon",
                "notify",
                "sound",
                "temp",
                "package.json"
            ]

            additional.forEach(dir => ignore.push(dir))
        }

        if (ignore.find(item => path.basename(src) === item)) return false
        return true
    } }),`"${src}" copied to "${dest}" successfully`)

    process.platform === "linux" && fs.chmod(dest,0o777, err => log.write(err ? "ERROR" : "INFO",err ? `Error setting folder permissions for "${dest}": ${err}` : `Folder permissions for "${dest}" set successfully`))
}

app
.whenReady()
.then(() => {
    if (process.platform === "linux") {
        const tempdir = path.join(sanhelper.appdata,"resources","temp")
        !fs.existsSync(tempdir) && fs.mkdirSync(tempdir, { recursive: true })
        createdir(path.join(sanhelper.appdata,"resources"),path.join(__root,"img"),"img")
    }

    createdir(sanhelper.appdata,__root,"customfiles")
    main(starttime)
})
.catch(async err => await error.createwin(err))