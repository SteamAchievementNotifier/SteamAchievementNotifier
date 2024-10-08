import { shell } from "electron"
import fs from "fs"
import path from "path"
import electronlog, { transports, catchErrors } from "electron-log"
import { sanhelper } from "./sanhelper"
import Store from "electron-store"

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
                log.write("ERROR",`Error creating "rust.log": ${(err as Error).stack}`)
            }
        }

        log.write("INFO",`"${process}" process created`)
    },
    write: (event: "INFO" | "ERROR" | "EXIT", msg: Error | string) => {
        electronlog.info(`${event}\n${event === "ERROR" && msg instanceof Error ? msg.stack : msg}`)

        process.type === "renderer" && (async () => {
            const { sanconfig } = await import("./config")
            sanhelper.updatelogwin(sanconfig.get().store.logtype)
        })()
    },
    get open(): Promise<string> {
        return shell.openPath(path.join(sanhelper.appdata,"logs"))
    }
}