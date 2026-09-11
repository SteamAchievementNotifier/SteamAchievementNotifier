import { app } from "electron"
import os from "os"
import fs from "fs"
import { log } from "./log"

let cpus: os.CpuInfo[] | null = null
let cpupercent = 0
let cputimer: NodeJS.Timeout | null = null

const sumtimes = (t: os.CpuInfo["times"]) => t.user + t.nice + t.sys + t.idle + t.irq

const getlinuxmemvalue = (meminfo: string,key: string) => {
    const match = meminfo.match(new RegExp(`^${key}:\\s+(\\d+)`, 'm'))
    return match ? parseInt(match[1]) / 1024 : 0
}

const getlinuxmem = () => {
    const meminfo = fs.readFileSync("/proc/meminfo","utf-8")
    const total = getlinuxmemvalue(meminfo,"MemTotal")
    const available = getlinuxmemvalue(meminfo,"MemAvailable")

    return { memtotalMB: total, memusedMB: total - available }
}

export const resourceusage = {
    getcpu: () => {
        const current = os.cpus()

        if (cpus) {
            let idle = 0
            let total = 0

            for (const [i, start] of cpus.entries()) {
                const starttime = start.times
                const endtime = current[i].times

                idle += endtime.idle - starttime.idle
                total += sumtimes(endtime) - sumtimes(starttime)
            }

            cpupercent = total > 0 ? parseFloat(((1 - idle / total) * 100).toFixed(1)) : 0
        }

        cpus = current
    },
    init: (ms: number = 3000) => {
        if (cputimer) return
        
        resourceusage.getcpu()
        cputimer = setInterval(resourceusage.getcpu,ms)

        log.write("INFO",`[RESOURCEUSAGE] "cputimer" initialised`)
    },
    stop: () => {
        if (cputimer) clearInterval(cputimer)
        cputimer = null
        log.write("WARN",`[RESOURCEUSAGE] "cputimer" stopped`)
    },
    app: async () => {
        const metrics = app.getAppMetrics()
        const { residentSet } = await process.getProcessMemoryInfo()

        let cpu = 0

        for (const process of metrics) {
            cpu += process.cpu.percentCPUUsage
        }

        let totalmemMB = 0

        for (const process of metrics) {
            totalmemMB += process.memory.workingSetSize / 1024
        }

        return {
            processes: metrics.length,
            cpupercent: parseFloat(cpu.toFixed(1)),
            memmainMB: parseFloat((residentSet / 1024).toFixed(1)),
            memperprocessMB: metrics.map(process => ({
                type: process.type,
                MB: parseFloat((process.memory.workingSetSize / 1024).toFixed(1))
            })),
            memtotalMB: parseFloat(totalmemMB.toFixed(1))
        } as AppUsage
    },
    system: async () => {
        const { memtotalMB, memusedMB } = process.platform === "linux" ? getlinuxmem() : { memtotalMB: os.totalmem() / 1024 / 1024, memusedMB: (os.totalmem() - os.freemem()) / 1024 / 1024 }
        const mempercent = parseFloat(((memusedMB / memtotalMB) * 100).toFixed(1))

        return {
            cpupercent,
            mempercent,
            memusedMB: parseFloat(memusedMB.toFixed(1)),
            memtotalMB: parseFloat(memtotalMB.toFixed(1))
        } as SystemUsage
    }
}