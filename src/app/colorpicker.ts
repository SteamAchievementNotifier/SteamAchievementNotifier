import iro from "@jaames/iro"
import { Instance, Props } from "tippy.js"
import { sanconfig } from "./config"
import { sanhelper } from "./sanhelper"

export const createcolorpicker = (instance: Instance<Props>,input: HTMLInputElement,menutype: HTMLElement) => {
    const picker = instance.popper.querySelector("div#picker") as HTMLElement

    const type = sanhelper.type
    const config = sanconfig.get()
    const currentcolor = config.get(`customisation.${type}.${input.id}`) as string

    picker.parentElement!.style.setProperty("--configcolor",currentcolor)

    const colorcode = instance.popper.querySelector("span#colorcode") as HTMLSpanElement
    colorcode.textContent = currentcolor
    
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
    
    colorpicker.on("input:end",(color: any) => {
        const hexcode = color.hex8String
        colorcode.textContent = hexcode
        ;[input,picker.parentElement!].forEach(elem => elem.style.setProperty("--configcolor",hexcode))

        config.set(`customisation.${type}.${input.id}`,hexcode)
        sanhelper.updatetabs()
        requestAnimationFrame(() => sanhelper.loadadditionaltooltips(menutype))
    })
}