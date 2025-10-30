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

            try {
                fs.writeFileSync(path.join(sanhelper.appdata,"logs","rust.log"),"")
                log.write("INFO",`"rust.log" created successfully`)
            } catch (err) {
                log.write("ERROR",`Error creating "rust.log": ${(err as Error).stack || (err as Error).message}`)
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
    backup: (config: any) => {
        try {
            const { lognum } = config.store
            const logspath = path.join(sanhelper.appdata,"logs")
            const logfiles = fs.readdirSync(logspath).filter(file => file.endsWith("_san.log")).sort()

            if (!Number.isFinite(lognum)) return log.write("WARN",`No. of logs is not valid (${lognum}) - skipping backup...`)

            if (!lognum) {
                log.write("INFO","No. logs set to 0 - clearing all previous logs...")

                if (logfiles.length) {
                    for (const logfile of logfiles) {
                        log.clearlogfile(logspath,logfile)
                    }
                }

                return log.write("INFO","Log file backup disabled")
            }
            
            while (logfiles.length >= lognum) {
                const oldest = logfiles.shift()
                oldest && log.clearlogfile(logspath,oldest)
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
            
            const logpath = path.join(logspath,`${year + month + day}_${hour + minute + second}_san.log`)
            
            fs.copyFileSync(path.join(logspath,"san.log"),logpath)
            log.write("INFO",`"${logpath}" created successfully`)
        } catch (err) {
            log.write("ERROR",`Unable to write previous log file: ${err}`)
        }
    }
}