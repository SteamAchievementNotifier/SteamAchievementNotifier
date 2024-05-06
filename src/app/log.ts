import { shell } from "electron"
import path from "path"
import electronlog, { transports, catchErrors } from "electron-log"
import { sanhelper } from "./sanhelper"

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
        process === "APP" && log.clear()
        log.write("INFO",`"${process}" process created`)
    },
    write: (event: "INFO" | "ERROR" | "EXIT", msg: Error | string) => electronlog.info(`${event}\n${event === "ERROR" && msg instanceof Error ? msg.stack : msg}`),
    get open(): Promise<string> {
        return shell.openPath(path.join(sanhelper.appdata,"logs"))
    }
}