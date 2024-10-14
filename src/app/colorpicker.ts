import iro from "@jaames/iro"
import { Instance, Props } from "tippy.js"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"
import { log } from "./log"

export const createcolorpicker = (instance: Instance<Props>,input: HTMLInputElement,menutype: HTMLElement) => {
    for (const [name,parameter] of Object.entries({ instance, input, menutype })) {
        if (!parameter) return log.write("ERROR",`"${name}" parameter not supplied`)
    }

    const picker = instance.popper.querySelector("div#picker") as HTMLElement
    if (picker.innerHTML.length) return

    const type = sanhelper.type
    const config = sanconfig.get()
    let currentcolor = config.get(`customisation.${type}.${input.id}`) as string

    picker.parentElement!.style.setProperty("--configcolor",currentcolor)

    const colorcode = instance.popper.querySelector(`div#colorcode > input[type="text"]`) as HTMLInputElement
    colorcode.value = currentcolor
    
    const colorpicker = iro.ColorPicker(picker,{
        color: currentcolor,
        width: 100,
        margin: 10,
        layout: [
            {
                component: iro.ui.Box
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: "hue",
                    sliderSize: 10
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: "alpha",
                    sliderSize: 10
                }
            }
        ],
        layoutDirection: "horizontal"
    })

    const setcolorpickervalue = (hexcode: string) => {
        [input,picker.parentElement!].forEach(elem => elem.style.setProperty("--configcolor",hexcode))
        colorcode.value = hexcode
        
        config.set(`customisation.${type}.${input.id}`,hexcode)
        currentcolor = config.get(`customisation.${type}.${input.id}`) as string

        sanhelper.updatetabs()
        requestAnimationFrame(() => sanhelper.loadadditionaltooltips(menutype))
    }
    
    colorpicker.on("input:end",(color: any) => setcolorpickervalue(color.hex8String))

    colorcode.onchange = event => {
        const colorinput = (event.target as HTMLInputElement)

        const isvalid = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(colorinput.value)
        if (!isvalid) return colorinput.value = currentcolor

        colorpicker.color.set(colorinput.value)
        setcolorpickervalue(colorinput.value)
    }
}