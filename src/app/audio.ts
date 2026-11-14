import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

let cooldown = 0
const pendingaudio: { id: number, type: NotifyType, info: Info }[] = []

export const audio = {
    shouldplay: (info: Info,type: NotifyType) => {
        const { id } = info.info
        const { audiocooldown } = sanconfig.get().store
        const now = Date.now()

        if (now < cooldown && !sanhelper.plattype(type)) {
            pendingaudio.push({ id, type, info })
            return false
        }
        
        cooldown = now + audiocooldown
        return true
    },
    checkhighestpriority: () => {
        if (!pendingaudio.length) return

        let selected = pendingaudio.find(pending => sanhelper.plattype(pending.type)) || pendingaudio[0]
        
        const filtered = pendingaudio.filter(pending => ["main","semi","rare"].includes(pending.type))
        if (filtered.length) selected = filtered.reduce((lowest,cur) => cur.info.info.percent.value < lowest.info.info.percent.value ? cur : lowest,filtered[0])

        selected.info.skipaudio = false

        pendingaudio.length = 0
    },
    playhighestpriority: (info: Info,type: NotifyType): void => {
        const { audiocooldown } = sanconfig.get().store
        audio.shouldplay(info,type) ? (sanhelper.plattype(type) ? (pendingaudio.length = 0) : setTimeout(audio.checkhighestpriority,audiocooldown + 10)) : info.skipaudio = true
    }
}