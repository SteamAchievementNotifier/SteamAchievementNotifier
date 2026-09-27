import { ipcMain } from "electron"
import path from "path"
import fs from "fs"
import { language } from "./language"
import { sanhelper } from "./sanhelper"
import { sanconfig } from "./config"

const isexecutable = (exe: string) => {
    try {
        fs.accessSync(exe,fs.constants.X_OK)
        return true
    } catch {
        return false
    }
}

const getmsg = async (id: TroubleshooterRuleId,modifier?: boolean) => {
    const section = ["troubleshooter","rules",id]

    return {
        title: await language.get("title",section),
        issue: await language.get("issue",section),
        detail: await language.get("detail",section),
        solution: (await language.get("solution",section))[!modifier ? 0 : 1]
    } as TroubleshooterMsg
}

const getsettingshtml = async (section: string,option: string) => `<span class="hl">${await language.get("settings")}</span> > <span class="hl">${await language.get("title",["settings",section])}</span> > <span class="hl">${await language.get(option,["settings",section,"content"])}</span>`

const rules: { id: TroubleshooterRuleId, type: TroubleshooterType, test: (data: TroubleshooterData) => boolean, msg: (data: TroubleshooterData) => Promise<TroubleshooterMsg> }[] = [
    {
        id: "noactiveprocesses",
        type: "warning",
        test: data => data.process.status !== "releasing" && data.process.activeprocesses.filter(process => process.pid !== -1 && process.exe !== "<Unknown>").length === 0,
        msg: async data => {
            const { title, issue, detail, solution } = await getmsg("noactiveprocesses",data.executable.some(exe => exe.islinkedgame))
            const exes = await Promise.all(data.executable.filter(exe => exe.path).map(async exe => `<li>${exe.path}${exe.islinkedgame ? ` (${await language.get("addedvia",["troubleshooter","content"])} <span class="hl">${await language.get(`${data.process.usesanwatcher ? "linked" : "autorelease"}games`,["settings","games","content"])}</span>)` : ""}</li>`))
            
            return {
                title,
                issue,
                detail: `${detail}<br><ul>${exes.join("")}</ul>`,
                solution: solution.replace(/\$linkedgamesmenu/,await getsettingshtml("games",`${data.process.usesanwatcher ? "linked" : "autorelease"}games`))
            }
        }
    },
    {
        id: "unknownexecutable",
        type: "error",
        test: data => data.process.activeprocesses.some(p => p.pid === -1 && p.exe === "<Unknown>"),
        msg: async data => {
            const { title, issue, detail, solution } = await getmsg("unknownexecutable",data.process.usesanwatcher)

            return {
                title,
                issue,
                detail,
                solution: solution.replace(/\$sanwatcher/,await getsettingshtml("advanced","usesanwatcher")).replace(/\$linkedgamesmenu/,await getsettingshtml("games",`${data.process.usesanwatcher ? "linked" : "autorelease"}games`))
            } as TroubleshooterMsg
        }
    },
    {
        id: "missingexecutable",
        type: "error",
        test: data => data.executable.some(exe => exe.exists === false),
        msg: async data => {
            const { title, issue, detail, solution } = await getmsg("missingexecutable")

            return {
                title,
                issue,
                detail: `${detail}<br><ul><li>${data.executable.find(exe => exe.exists === false)?.path ?? null}</li></ul>`,
                solution
            }
        }
    },
    {
        id: "notexecutable",
        type: "error",
        test: data => data.executable.some(exe => exe.isexecutable === false),
        msg: async data => {
            const { title, issue, detail, solution } = await getmsg("notexecutable")

            return {
                title,
                issue,
                detail: `${detail}${data.executable.find(exe => exe.isexecutable === false)?.path}`,
                solution
            }
        }
    },
    {
        id: "notwithininstalldir",
        type: "warning",
        test: data => data.executable.some(exe => exe.iswithininstalldir === false),
        msg: async data => {
            const linkedgamesmenu = `${data.process.usesanwatcher ? "linked" : "autorelease"}games`
            const { title, issue, detail, solution } = await getmsg("notwithininstalldir")

            return {
                title,
                issue,
                detail: detail.replace(/\$linkedgamesmenu/,await getsettingshtml("games",linkedgamesmenu)),
                solution: solution.replace(/\$linkedgamesmenu/,await getsettingshtml("games",linkedgamesmenu))
            }
        }
    },
    {
        id: "wrongplatformpath",
        type: "error",
        test: data => data.executable.some(exe => exe.wrongplatformpath),
        msg: async () => {
            const { title, issue, detail, solution } = await getmsg("wrongplatformpath")

            return {
                title,
                issue,
                detail,
                solution
            }
        }
    },
    {
        id: "duplicatelinkentries",
        type: "warning",
        test: data => !!data.process.duplicatelinkentries?.length,
        msg: async data => {
            const linkedgamesmenu = `${data.process.usesanwatcher ? "linked" : "autorelease"}games`
            const { title, issue, detail, solution } = await getmsg("duplicatelinkentries")

            return {
                title,
                issue,
                detail: detail.replace(/\$appids/,data.process.duplicatelinkentries.join("/")).replace(/\$linkedgamesmenu/,await getsettingshtml("games",linkedgamesmenu)),
                solution
            }
        }
    },
    {
        id: "releasing",
        type: "info",
        test: data => data.process.status === "releasing" && data.process.releasetimer,
        msg: async () => {
            const { title, issue, detail, solution } = await getmsg("releasing")

            return {
                title,
                issue,
                detail,
                solution
            }
        }
    }
]

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
    },
    result: (data: TroubleshooterData): Promise<TroubleshooterResult>[] => rules.filter(rule => rule.test(data)).map(async ({ id, type, msg }) => ({ id, type, msg: await msg(data) })),
    data: async (worker: Electron.BrowserWindow | null) => {        
        const processdata = worker ? await new Promise<TroubleshooterProcess | null>(resolve => {
            ipcMain.once("processdata",(event,data: TroubleshooterProcess) => resolve(data))
            worker!.webContents.send("processdata")
        }) : null

        if (!processdata) throw new Error(`Worker inactive`)

        const { releasewaittime, releasedelay, pollrate, initdelay, maxretries, userust, exclusions, inclusionlist } = sanconfig.get().store

        const data = {
            app: {
                version: sanhelper.semver,
                beta: sanhelper.beta,
                platform: process.platform,
                osinfo: await sanhelper.getosinfo(),
                config: {
                    releasewaittime,
                    releasedelay,
                    pollrate,
                    initdelay,
                    maxretries,
                    userust,
                    exclusions,
                    inclusionlist
                }
            } as TroubleshooterApp,
            process: {
                ...processdata,
                installdir: undefined
            },
            executable: [
                ...processdata.activeprocesses.map(process => ({
                    islinkedgame: (!!processdata.linkedgame && process.exe.toLowerCase().replace(/\\/g,"/") === processdata.linkedgame.toLowerCase().replace(/\\/g,"/")) || undefined,
                    ...troubleshooter.exeinfo(process,processdata.installdir!)
                })),
                ...(processdata.linkedgame && !processdata.activeprocesses.some(process => process.exe.toLowerCase().replace(/\\/g,"/") === processdata.linkedgame!.toLowerCase().replace(/\\/g,"/")) ? [({
                    islinkedgame: true,
                    ...troubleshooter.exeinfo({ exe: processdata.linkedgame } as DebugProcessInfo,processdata.installdir!)
                }) as TroubleshooterExecutable] : [])
            ]
        } as TroubleshooterData

        return { data, result: await Promise.all(troubleshooter.result(data)) }
    }
}