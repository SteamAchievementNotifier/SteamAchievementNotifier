import { sanhelper } from "./sanhelper"
import { dialog } from "./dialog"
import { sanconfig } from "./config"

export const usertheme = {
    data: () => {
        const config = sanconfig.get()

        const type = sanhelper.type
        const userthemes = config.get(`customisation.${type}.usertheme`) as Button[]

        return { config, type, userthemes }
    },
    update: () => {
        const { config, type, userthemes } = usertheme.data()
        const enabled: number | undefined = userthemes.find(theme => theme.enabled)?.id as number || undefined

        // If no theme is enabled, enable the first one
        !enabled && config.set(`customisation.${type}.usertheme.0.enabled`,true)

        if (!document.querySelector("dialog[selection]")) return document.querySelector(`#usertheme > span`)!.textContent = userthemes[enabled || 0].label

        document.querySelectorAll(`dialog[selection] .contentsub > .rect`)!.forEach(btn => {
            const id = parseInt(btn.id.replace(/[^\d]+/g, ""))
            const exists = userthemes.some(theme => id === theme.id)
            
            if (!exists) return btn.remove()

            document.querySelector(`#${btn.id} > span`)!.textContent = userthemes[id].label
            document.querySelector(`#usertheme > span`)!.textContent = userthemes[enabled || 0].label

            btn.toggleAttribute("enabled",btn.id === `usertheme${enabled || 0}`)
        })
    },
    set: ({ target }: Event, id: number) => {
        const { config, type, userthemes } = usertheme.data()
        if ((target as HTMLElement).classList.contains(`userthemedelbtn`)) return usertheme.delete(type,target!)
        
        const updatedthemes = userthemes.map(theme => {
            theme.enabled = theme.id === id
            return theme
        })
        
        const selected = updatedthemes.find(theme => theme.enabled)!
        const customisation = { ...selected.customisation as Customisation }

        customisation.usertheme = []

        updatedthemes.forEach((theme: Button) => {
            delete (theme.customisation as any).usertheme
            customisation.usertheme.push(theme)
        })

        config.set(`customisation.${type}`,customisation)
        usertheme.update()
    },
    create: (name: string, icon: string) => {
        const { config, type, userthemes } = usertheme.data()
        const ids = userthemes.map(theme => theme.id)
        const labelmatch = userthemes.find(theme => theme.label === name)

        let newid = 0

        if (labelmatch) {
            newid = labelmatch.id as number
        } else {
            while (ids.includes(newid)) newid++
        }

        const customisation: Customisation = config.get(`customisation.${type}`) as Customisation
        delete (customisation as any).usertheme

        const theme: Button = {
            id: newid,
            label: name,
            icon: icon.replace(/^(url\(["']?)|(["']?\))$/g,""),
            customisation: customisation,
            enabled: true
        }

        userthemes.forEach((theme,i) => config.set(`customisation.${type}.usertheme.${i}.enabled`,false))
        config.set(`customisation.${type}.usertheme.${newid}`,theme)
        usertheme.update()
        dialog.close()
    },
    delete: (type: string, target: EventTarget) => {
        const { config } = usertheme.data()
        let { userthemes } = usertheme.data()
        const id = parseInt((target as HTMLElement).id.replace(/[^\d]+/g, ""))
        const remaining: Button[] = []
        
        userthemes.forEach(theme => theme.id !== id && remaining.push(theme))
        if (!remaining.length) return
      
        config.set(`customisation.${type}.usertheme`,remaining)

        // Update the current userthemes list (after deleting theme),
        // and reset each object's `id` to be zero indexed
        userthemes = config.get(`customisation.${type}.usertheme`) as Button[]
        userthemes.forEach((theme,i) => config.set(`customisation.${type}.usertheme.${i}.id`,i))

        const enabled = userthemes.find(theme => theme.enabled)
        !enabled && (config.set(`customisation.${type}.usertheme.0.enabled`,true))

        usertheme.update()
    }
}