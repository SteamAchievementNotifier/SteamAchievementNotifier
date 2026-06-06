import { ipcRenderer } from "electron"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"

export const monitors = {
    order: (a: Monitor,b: Monitor) => Number(b.primary) - Number(a.primary),
    get: async () => {
        const config = sanconfig.get()

        try {
            const lsmonitors = localStorage.getItem("monitors")
            const previous: Monitor[] = ((lsmonitors ? JSON.parse(lsmonitors) : []) as Monitor[]).sort(monitors.order)
            const current: Monitor[] = (await sanhelper.getdisplays() as Display[]).map(display => {
                const { id, label, bounds: { width, height }, primary, scaleFactor, displayFrequency: frequency, rotation } = display

                return {
                    id,
                    label,
                    primary,
                    bounds: {
                        width: Math.round(width * scaleFactor),
                        height: Math.round(height * scaleFactor)
                    },
                    scaleFactor,
                    frequency,
                    rotation
                } as Monitor
            }).sort(monitors.order)

            config.set("monitors",current)
            window.monitors = current
            
            // const currentmonitor = current.find(monitor => monitor.id === config.get("monitor")) || current[0]
            // !config.get("lastknownmonitorlbl") && config.set("lastknownmonitorlbl",currentmonitor.label)
            
            monitors.refresh(config,current,previous)
            sanhelper.devmode && current.forEach(monitor => ipcRenderer.send("montest",monitor.id))
            
            log.write("INFO",`Successfully updated "monitors" array`)
            return { current, previous }
        } catch (err) {
            log.write("WARN",`Unable to update "monitors" array: ${err}`)
            return null
        }
    },
    // getid: (config: any,current: Monitor[],previous: Monitor[],type: "id" | "themeswitch",id: number,str: string) => {
    getid: (current: Monitor[],previous: Monitor[],type: "id" | "themeswitch",id: number,str: string) => {        
        try {
            // const match = current.find(monitor => config.get("lastknownmonitorlbl") === monitor.label) || current.find(monitor => monitor.id === id)
            const match = current.find(monitor => monitor.id === id)

            if (match) {
                log.write("INFO",`Monitor found in "monitors" array for "${match.label}" (${match.id}) used as ${str}`)
                return match.id
            }
    
            const previousmonitor = previous.find(monitor => monitor.id === id)
            if (!previousmonitor) throw new Error(`[MONERR] Monitor "id" (${id}) not found in previous "monitors" object for ${str}`)
                
            const newmonitor = current.find(monitor => monitor.label === previousmonitor.label)
            if (!newmonitor) throw new Error(`[MONERR] No monitor matching "${previousmonitor.label}" found in "monitors" array`)
    
            if (previousmonitor.id !== newmonitor.id) {
                log.write("INFO",`"id" for "${previousmonitor.label}" updated from "${previousmonitor.id}" to "${newmonitor.id}" for ${str}`)
                return newmonitor.id
            }

            return id
        } catch (e) {
            const err = e as Error

            if (err.message.startsWith(`[MONERR]`)) {
                const primarymon = current.find(monitor => monitor.primary)

                if (primarymon) {
                    log.write("WARN",`Monitor "id" (${id}) not found in previous "monitors" object for ${str} - resetting to primary monitor...`)
                    return primarymon.id
                }
            }

            log.write("ERROR",err.message.replace(/^\[MONERR\]\s/,""))
            return type === "id" ? -1 : id
        }
    },
    // themeswitch: (config: any,themeswitch: { [key: string]: ThemeSwitch },current: Monitor[],previous: Monitor[]) => Object.fromEntries(Object.entries(themeswitch).map(([key,value]) => {
    themeswitch: (themeswitch: { [key: string]: ThemeSwitch },current: Monitor[],previous: Monitor[]) => Object.fromEntries(Object.entries(themeswitch).map(([key,value]) => {
        // const src = monitors.getid(config,current,previous,"themeswitch",value.src,`"src" in "themeswitch" for AppID ${key}`)
        const src = monitors.getid(current,previous,"themeswitch",value.src,`"src" in "themeswitch" for AppID ${key}`)
        if (src !== value.src) return [key,{ themes: { ...value.themes }, src } as ThemeSwitch]
        return [key,value]
    })),
    refresh: (config: any,current: Monitor[],previous: Monitor[]) => {
        // const newid = monitors.getid(config,current,previous,"id",config.get("monitor"),`"monitor" in config`)
        const newid = monitors.getid(current,previous,"id",config.get("monitor"),`"monitor" in config`)

        if (newid !== -1) {
            config.set("monitor",newid)
        } else {
            const primary = current.find(monitor => monitor.primary)

            if (primary) {
                config.set("monitor",primary.id)
                log.write("WARN",`Unable to find matching monitor by "id" in "monitors" array. "monitor" value was reset to primary display in config`)
            } else {
                log.write("ERROR",`Unable to find primary monitor in "monitors" array. "monitor" value cannot be updated or reset in config`)
            }
        }

        localStorage.setItem("monitors",JSON.stringify(current))
        log.write("INFO",`"monitors" localStorage object updated`)

        // const themeswitch = monitors.themeswitch(config,JSON.parse(localStorage.getItem("themeswitch")!) as { [key: string]: ThemeSwitch },current,previous)
        const themeswitch = monitors.themeswitch(JSON.parse(localStorage.getItem("themeswitch")!) as { [key: string]: ThemeSwitch },current,previous)
        localStorage.setItem("themeswitch",JSON.stringify(themeswitch))
    }
}