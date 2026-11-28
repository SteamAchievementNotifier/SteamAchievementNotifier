// import { app, protocol } from "electron"
import { app } from "electron"
import path from "path"

if (process.platform === "win32" && process.env.npm_lifecycle_event !== "dev") {
    const appdir = path.dirname(process.execPath)
    process.cwd() !== appdir && process.chdir(appdir)
}

import fs from "fs"
import { __root, sanhelper } from "./sanhelper"
import { sanconfig } from "./config"
import { log } from "./log"
import { error } from "./error"
import { main } from "./main"
import { update } from "./update"
import { utils } from "./utils"

// protocol.registerSchemesAsPrivileged([{
//     scheme: "sanplugin",
//     privileges: {
//         standard: true,
//         secure: true
//     }
// }])

const legacydir = update.getlegacydir()
const [appdata,localstorage] = legacydir ? Array.from(new Map([
    ["appdata",legacydir],
    ["localstorage",app.getPath("userData")]
] as const),([key,value]) => update.migrate[key](value)) : [undefined,undefined] // Migrates `sanhelper.appdata`/`localStorage` from previous version

sanconfig.get().store.colorprofile !== "none" && app.commandLine.appendSwitch("force-color-profile",sanconfig.get().store.colorprofile)

// In devmode, run `npm run dev -- --clean` for full data reset
if (app.commandLine.hasSwitch("clean")) {
    try {
        fs.existsSync(sanhelper.appdata) && fs.rmSync(path.join(sanhelper.appdata), { recursive: true, force: true })
        console.log(`--clean: "${sanhelper.appdata}" removed successfully\n`)
    } catch (err) {
        console.log(`--clean: Error removing "${sanhelper.appdata}": ${err}\n`)
    }
}

const lock = app.requestSingleInstanceLock()
utils.app.checksingleinstance(lock) && app.exit()

const starttime = new Date().toLocaleTimeString()
log.init("APP")

// Logs `MigrationResult` for `%appdata%`/`localStorage` migration
appdata && log.write(appdata.level,appdata.msg)
localstorage && log.write(localstorage.level,localstorage.msg)

;(async () => log.write("INFO",`OS: ${await sanhelper.getosinfo()}`))()

sanconfig.get().store.nohwa && app.disableHardwareAcceleration()

// Restores from backup on launch if `<appdatadir>/Temp/sanbak/` exists
const sanbak = path.join(path.dirname(sanhelper.appdata),"Temp","sanbak")
fs.existsSync(sanbak) && sanhelper.restorefrombackup(sanbak,log)

const config = sanconfig.get()
utils.config.cleanup(config)

app
.whenReady()
.then(() => {
    if (process.platform === "linux") {
        const tempdir = path.join(sanhelper.appdata,"resources","temp")
        !fs.existsSync(tempdir) && fs.mkdirSync(tempdir,{ recursive: true })
        utils.app.createdir(path.join(sanhelper.appdata,"resources"),path.join(__root,"img"),"img")
    }

    utils.app.createdir(sanhelper.appdata,__root,"customfiles")
    main(starttime)
})
.catch(async err => await error.showdialog(err as Error))