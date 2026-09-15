import path from "path"
import fs from "fs"

const isexecutable = (exe: string) => {
    try {
        fs.accessSync(exe,fs.constants.X_OK)
        return true
    } catch {
        return false
    }
}

export const troubleshooter = {
    exeinfo: (p: DebugProcessInfo,installdir: string | null) => {
        // Return null if process is invalid (i.e. SAN could not find a matching process)
        if (p.pid === -1 || p.exe === "<Unknown>") {
            return {
                path: null,
                installdir: null,
                exists: null,
                ...(process.platform === "linux" && { isexecutable: null }),
                iswithininstalldir: null,
                wrongplatformpath: null,
                realpath: null
            } as TroubleshooterExecutable
        }
        
        const exe = p.exe.toLowerCase().replace(/\\/g,"/")
        const dir = path.dirname(p.exe).replace(/\\/g,"/")
        const exists = fs.existsSync(p.exe)

        return {
            path: p.exe,
            installdir: installdir ? {
                path: dir,
                exists: fs.existsSync(installdir),
                dir: {
                    process: dir,
                    steamworks: installdir,
                    match: dir.toLowerCase() === installdir.toLowerCase()
                }
            } : null,
            exists,
            ...(process.platform === "linux" && { isexecutable: exists ? isexecutable(p.exe) : null }),
            iswithininstalldir: installdir ? exe.includes(installdir.toLowerCase().replace(/\\/g,"/")) : null,
            wrongplatformpath: process.platform === "linux" ? /^[a-z]:\//.test(exe) : exe.startsWith("/"),
            realpath: exists ? fs.realpathSync(p.exe) : null
        } as TroubleshooterExecutable
    }
}