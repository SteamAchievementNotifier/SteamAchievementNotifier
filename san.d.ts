declare interface Display extends Electron.Display {
    primary: boolean
}

declare interface Monitor {
    id: number,
    label: string,
    primary: boolean,
    bounds: {
        width: number,
        height: number
    },
    scaleFactor: number
}

declare interface Res {
    msg: string,
    dims: {
        width: number,
        height: number,
        offset: number
    }
}

interface SANHelper {
    [key: string]: function | boolean | number | string | Promise<any> | undefined
}

declare interface Config {
    lang: string,
    desktop: boolean,
    startwin: boolean,
    startmin: boolean,
    nohwa: boolean,
    litemode: boolean,
    rarity: number,
    soundonly: boolean,
    showpercent: "rareonly" | "all" | "off",
    extwin: boolean,
    // extwinshow: boolean,
    // extwinpos: {
    //     x: number,
    //     y: number
    // },
    audiosrc: "notify" | "app" | "off",
    nowtracking: boolean,
    nowtrackingscale: number,
    nowtrackingpos: "bottomcenter" | "topcenter" | "topleft" | "topright" | "bottomleft" | "bottomright",
    shortcuts: boolean,
    steamss: boolean,
    screenshots: "off" | "overlay" | "notifyimg",
    hdrmode: boolean,
    monitor: number,
    monitors: Monitor[],
    ssdelay: number,
    ovpath: string,
    imgpath: string,
    noanim: boolean,
    nvda: boolean,
    tooltips: boolean,
    notifydebug: boolean,
    pollrate: number,
    maxretries: number,
    initdelay: number,
    releasedelay: number,
    width: number,
    height: number,
    x: number,
    y: number,
    usecustomfiles: boolean,
    noreleasedialog: boolean,
    norestartdialog: boolean,
    noupdatedialog: boolean,
    userust: boolean,
    debug: boolean,
    noiconcache: boolean,
    exclusions: number[],
    logtype: "san" | "rust" | "sanhelperrs",
    ssalldetails: string[],
    webhooks: boolean,
    webhookurl: string,
    webhooklaststatus: string,
    // discord: {
    //     [key: string]: string,
    //     userid: string,
    //     avatarurl: string,
    //     webhookurl: string
    // },
    customisation: {
        main: Customisation,
        rare: Customisation,
        plat: Customisation,
        [key: string]: object
    },
    [key: string]: string | number | boolean | object
}

declare interface Customisation {
    soundmode: "file" | "folder",
    soundfile: string,
    sounddir: string,
    volume: number,
    preset: string,
    displaytime: number,
    scale: number,
    customtext: string,
    usegametitle: boolean,
    bgstyle: "solid" | "gradient" | "bgimg" | "gameart",
    gradientangle: number,
    bgimg: string,
    bgimgbrightness: number,
    brightness: number,
    blur: number,
    roundness: number,
    fontsize: number,
    opacity: number,
    bgonly: boolean,
    glow: boolean,
    glowcolor: string,
    glowsize: number,
    glowx: number,
    glowy: number,
    glowopacity: number,
    glowanim: "off" | "pulse" | "rainbow",
    glowspeed: number,
    mask: boolean,
    maskimg: string,
    outline: "solid" | "dashed" | "dotted" | "off",
    outlinecolor: string,
    outlinewidth: number,
    fontcolor: string,
    fontoutline: boolean,
    fontoutlinecolor: string,
    fontshadow: boolean,
    fontshadowcolor: string,
    iconroundness: number,
    usegameicon: boolean,
    customicons: { [key: string]: CustomIcon | string },
    elems: ("unlockmsg" | "title" | "desc")[] | null,
    hiddeniconpos: number,
    decorationpos: number
    showdecoration: boolean,
    pos: "bottomcenter" | "topcenter" | "topleft" | "topright" | "bottomleft" | "bottomright",
    usecustompos: boolean,
    custompos: {
        x: number,
        y: number
    },
    animdir: "up" | "down" | "left" | "right",
    ovpos: "bottomcenter" | "topcenter" | "topleft" | "topright" | "bottomleft" | "bottomright",
    ovmatch: boolean,
    ovx: number,
    ovy: number,
    sselems: ("unlockmsg" | "title" | "desc")[] | null,
    sshiddeniconpos: number,
    ssdecorationpos: number,
    alldetails: boolean,
    primarycolor: string,
    secondarycolor: string,
    tertiarycolor: string,
    gameart: string,
    shortcut: string,
    customfont: string
    iconanim?: boolean,
    showhiddenicon: boolean,
    replacelogo: boolean,
    hiddenicon: string,
    previewhiddenicon: boolean,
    usepercent: boolean,
    percentpos: number,
    sspercentpos: number,
    usertheme: UserTheme[],
    [key: string]: string | number | boolean | object
}

declare interface CustomIcon {
    [key: string]: string | string[] | Index | null | ("unlockmsg" | "title" | "desc")[],
    logo: string | string[] | null,
    decoration: string | string[] | null,
    index: Index | null,
    plat?: string | string[] | null,
    elems: ("unlockmsg" | "title" | "desc")[] | null,
    sselems: ("unlockmsg" | "title" | "desc")[] | null
}

declare interface Index {
    [key: string]: number
    percent: number,
    hiddenicon: number,
    decoration: number
}

declare interface GameData {
    appid: number,
    gamename?: string,
    exepath?: string,
    pid: number,
    pollrate?: number
}

declare interface Achievement {
    unlocked: boolean,
    apiname: string,
    name: string,
    desc: string,
    percent: number,
    hidden: boolean
}

declare interface Notify extends Achievement {
    id: number,
    type: "main" | "rare" | "plat",
    customisation: Customisation,
    icon: string,
    gamename: string | null,
    steam3id: number
}

declare interface Dialog {
    type: "default" | "selection" | "menu",
    title: string,
    sub?: string | string[],
    addHTML?: string,
    icon?: string,
    buttons?: Button[]
}

declare interface Button {
    id: string | number,
    label: string,
    icon: string,
    click?: Function,
}

declare interface UserTheme extends Button {
    customisation: Customisation,
    enabled: boolean,
    version?: string,
    userthemedir?: string,
    usecustomfiles?: boolean
}

declare interface WinType {
    type: "BrowserWindow" | "Notification",
    notify: Notify,
    options: Electron.BrowserWindowConstructorOptions | Electron.NotificationConstructorOptions
}

declare interface Info {
    info: BuildNotifyInfo,
    customisation: Customisation,
    iswebview: "customiser" | "sspreview" | "ss" | null,
    steampath: string | null,
    skipaudio?: boolean,
    customfiles?: string,
    hqicon: string,
    temp: string,
    ssalldetails: string[]
}

declare interface BuildNotifyInfo {
    id: number,
    type: "main" | "rare" | "plat",
    gamename: string | null,
    steam3id: number,
    appid: number,
    apiname: string,
    unlockmsg: string,
    title: string,
    desc: string,
    icon: string,
    percent: {
        value: number,
        rarity: number,
        showpercent: "rareonly" | "all" | "off"
    },
    hidden: boolean
}

declare interface Positions {
    topleft: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" },
    topcenter: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" },
    topright: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" },
    bottomleft: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" },
    bottomcenter: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" },
    bottomright: { x: number | "start" | "center" | "end", y: number | "start" | "center" | "end" }
}

declare interface ProcessInfo {
    pid: number,
    exe: string
}

declare interface AppInfo {
    appid: number,
    status?: "Active" | "Released",
    gamename?: string | null
    pollrate?: number,
    releasedelay?: number,
    maxretries?: number,
    userust?: boolean,
    debug?: boolean,
    noiconcache?: boolean
}

declare interface DebugInfo extends AppInfo {
    username?: string,
    steam3id?: number,
    steam64id?: string,
    releasedelay?: number,
    processes: ProcessInfo[] | DebugProcessInfo[]
}

declare interface DebugProcessInfo extends ProcessInfo {
    active: boolean
}

declare interface AchievementIcon {
    handle: any,
    width: number,
    height: number
}

declare interface DefaultBounds {
    id: number,
    bounds: {
        width: number,
        height: number
    },
    scaleFactor: number
}

declare module "simple-vdf"
declare module "adm-zip"