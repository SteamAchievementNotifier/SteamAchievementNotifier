import { sanhelper } from "./sanhelper"

export const mc = {
    get processinfo(): MCProcessInfo[] { return sanhelper.getmcprocess }
}