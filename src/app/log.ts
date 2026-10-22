import { shell } from "electron"
import fs from "fs"
import path from "path"
import electronlog, { transports, catchErrors } from "electron-log"
import { sanhelper } from "./sanhelper"

const iconmap = new Map([
    ["INFO","🔵"],
    ["WARN","🟡"],
    ["ERROR","🔴"],
    ["EXIT","⚫"]
])

const rustlogfiles: RustLogFiles[] = [
    "steamworks",
    "sanwatcher"
]

export const logfiles: LogFiles[] = [
    "san",
    ...rustlogfiles,
    "sanhelper"
]

const backupregex = new RegExp(`^(\\d{8}_\\d{6})_(?:${logfiles.join("|")})\\.log$`) // Only matches backup log files, not live (e.g. "san.log"/"san_reset.log")

export const log = {
    create: (process: "APP" | "MAIN" | "RENDERER" | "WORKER" | "ERROR") => {
        const format = "{d}/{m}/{y} {h}:{i}:{s}"
    
        transports.console.format = `[${format}]\n[${process}]:{text}\n`
        transports.file.format = `[${format}]\n[${process}]:{text}\n`

        transports.file.resolvePath = () => path.join(sanhelper.appdata,"logs","san.log")
        catchErrors({ showDialog: false })
    },
    clear: () => transports.file.getFile().clear(),
    init: (process: "APP" | "MAIN" | "RENDERER" | "WORKER" | "ERROR") => {
        log.create(process)

        if (process === "APP") {
            log.clear()

            // Rust-based log files must be created before game tracking starts to prevent continuous missing file error logging
            for (const logfile of rustlogfiles) {
                try {
                    fs.writeFileSync(path.join(sanhelper.appdata,"logs",`${logfile}.log`),"")
                    log.write("INFO",`"${logfile}.log" created successfully`)
                } catch (err) {
                    log.write("ERROR",`Error creating "${logfile}.log": ${(err as Error).stack || (err as Error).message}`)
                }
            }
        } else if (process === "RENDERER") {
            const vnan = path.join(sanhelper.appdata,"..","Steam Achievement Notifier (VNaN)")

            try {
                fs.existsSync(vnan) && fs.rmSync(vnan,{ recursive: true, force: true })
                log.write("INFO",`"VNaN" dir detected and removed successfully`)
            } catch (err) {
                log.write("ERROR",`Error removing "VNaN" dir: ${(err as Error).stack || (err as Error).message}`)
            }
        }

        log.write("INFO",`"${process}" process created`)
    },
    write: (event: "INFO" | "WARN" | "ERROR" | "EXIT", msg: Error | string) => {
        electronlog.info(`${`${iconmap.get(event) || "❔"} ${event}`}\n${event === "ERROR" && msg instanceof Error ? msg.stack : msg}`)

        process.type === "renderer" && (async () => {
            const { sanconfig } = await import("./config")
            sanhelper.updatelogwin(sanconfig.get().store.logtype)
        })()
    },
    get open(): Promise<string> {
        return shell.openPath(path.join(sanhelper.appdata,"logs"))
    },
    clearlogfile: (logspath: string,logfile: string) => {
        const filepath = path.join(logspath,logfile)

        try {
            fs.rmSync(filepath,{ force: true })
            log.write("INFO",`"${filepath}" cleared successfully`)
        } catch (err) {
            log.write("ERROR",`Unable to clear "${filepath}": ${err}`)
        }
    },
    getbackups: (logspath: string) => {
        const backups = new Map<string,string[]>()

        for (const file of fs.readdirSync(logspath)) {
            const timestamp = file.match(backupregex)?.[1]
            timestamp && backups.set(timestamp,[...(backups.get(timestamp) || []),file])
        }

        return backups
    },
    backup: (config: any) => {
        try {
            const { lognum } = config.store
            const logspath = path.join(sanhelper.appdata,"logs")
            const backups = log.getbackups(logspath)
            const timestamps = [...backups.keys()].sort()

            if (!Number.isFinite(lognum)) return log.write("WARN",`No. of logs is not valid (${lognum}) - skipping backup...`)

            if (!lognum) {
                log.write("INFO","No. logs set to 0 - clearing all previous logs...")

                for (const logfile of [...backups.values()].flat()) {
                    log.clearlogfile(logspath,logfile)
                }

                return log.write("INFO","Log file backup disabled")
            }

            while (timestamps.length && timestamps.length >= lognum) {
                const oldest = timestamps.shift()
                oldest && backups.get(oldest)!.forEach(logfile => log.clearlogfile(logspath,logfile))
            }

            const date = new Date()
            const [
                year,
                month,
                day,
                hour,
                minute,
                second
            ] = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            ].map((part,i) => (i !== 0 ? part.toString().padStart(2,"0") : part).toString())
            
            const timestamp = `${year + month + day}_${hour + minute + second}`

            for (const logtype of logfiles) {
                const src = path.join(logspath,`${logtype}.log`)
                if (!fs.existsSync(src)) continue // Not every log exists on every launch (e.g. "sanwatcher.log" when SANWatcher is not in use)

                const logpath = path.join(logspath,`${timestamp}_${logtype}.log`)

                try {
                    fs.copyFileSync(src,logpath)
                    log.write("INFO",`"${logpath}" created successfully`)
                } catch (err) {
                    log.write("ERROR",`Unable to write previous "${logtype}.log" file: ${err}`)
                }
            }
        } catch (err) {
            log.write("ERROR",`Unable to write previous log file: ${err}`)
        }
    }
}