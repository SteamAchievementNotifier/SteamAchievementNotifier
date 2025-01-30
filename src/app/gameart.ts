import path from "path"
import fs from "fs"

export const gameart = {
    get appids(): number[] {
        return [
            620,
            4000,
            22300,
            257510,
            285900,
            361420,
            582010,
            613100,
            835960,
            1091500,
            1149460,
            1564220,
            1659040
        ]
    },
    convertICO: async (file: string,tempdir: string,__root: string) => {
        if (path.extname(file) !== ".ico") return file
    
        const iconpng = path.join(tempdir,"gameicon.png")
        if (fs.existsSync(iconpng)) return iconpng
    
        const { parse } = await import(`${__root}/node_modules/icojs`)
        
        const buffer = fs.readFileSync(file)
        const layers = await parse(buffer,"image/png")
        
        // @ts-ignore
        const hq = layers.reduce((max,current) => (current.width > max.width) ? current : max)
    
        try {
            fs.writeFileSync(iconpng,Buffer.from(hq.buffer))
            return iconpng
        } catch (err) {
            return null
        }
    },
    libheroimg: (appid: number,steam3id: number,steampath: string,exts: (".jpg" | ".png")[]) => {
        const heroimgpath = path.join(steampath,"userdata",`${steam3id}`,"config","grid",`${appid}_hero`)

        for (const ext of exts) {
            if (fs.existsSync(`${heroimgpath}${ext}`)) return `${heroimgpath}${ext}`
        }

        return null
    },
    getfiles: (dir: string,files: string[]) => {
        for (const file of fs.readdirSync(dir)) {
            const entrypath = path.join(dir,file)

            if (fs.statSync(entrypath).isDirectory()) {
                gameart.getfiles(entrypath,files)
            } else {
                files.push(entrypath)
            }
        }
    },
    getrandom: (appid: number) => `../img/gameart/${appid}_library_hero.jpg`,
    get: (obj: GameArt,files: string[]): Promise<string> => {
        const { appid, hqicon, steam3id, steampath, type } = obj
        if (!appid) return Promise.resolve(type === "icon" ? "../img/gameicon.png" : gameart.getrandom(gameart.appids[Math.floor(Math.random() * gameart.appids.length)]))

        // if (!appid) {
        //     const restype = type === "icon" ? "icon" : "library_hero" as const
        //     const randomdirinfo = gameart.getrandomdir(steampath,5)
        //     return Promise.resolve(gameart.getusergameart(randomdirinfo,steampath,hqicon).then(res => res[restype]).catch(err => err[restype]))
        // }

        const exts = ["jpg","png"].map(ext => `.${ext}`) as (".jpg" | ".png")[]
    
        let libcachefilepath: string | null = null
    
        const imgnames = [
            `${appid}_${type}`,
            `${type}`
        ].flatMap(img => exts.map(ext => `${img}${ext}`))
    
        const libcache = path.join(steampath,"appcache","librarycache")    
        const appiddir = path.join(libcache,`${appid}`)
    
        if (fs.existsSync(appiddir)) {
            gameart.getfiles(appiddir,files)
    
            for (const filename of imgnames) {
                const file = files.find(file => path.basename(file) == filename) || null
    
                if (file && fs.existsSync(file)) {
                    libcachefilepath = file.replace(/\\/g,"/")
                    files.length = 0
                    break
                }
            }
        }
    
        const defaultpath = path.join(libcache,`${appid}_${type}.jpg`)
        const imgpath = (type === "library_hero" && gameart.libheroimg(appid,steam3id,steampath,exts) || type === "icon" && hqicon || libcachefilepath || defaultpath).replace(/\\/g,"/")
    
        if (!fs.existsSync(imgpath)) {
            if (type === "icon") return gameart.get({ ...obj, type: "logo" },files)
            return Promise.reject(type === "logo" ? "../img/gameicon.png" : "../img/sanimgbg.png")
        }
        
        return Promise.resolve(imgpath)
    },
    getall: async (obj: object,files: string[],temp: string,__root:string) => {
        const icon = await gameart.get({ ...obj, type: "icon" } as GameArt,files).then(res => res).catch(fallback => fallback)
        const gamearticon = await gameart.convertICO(icon,temp,__root)
        const gameartlibhero = await gameart.get({ ...obj, type: "library_hero" } as GameArt,files).then(res => res).catch(fallback => fallback)

        return {
            icon: (gamearticon || icon).replace(/\\/g,"/"),
            libhero: gameartlibhero
        }
    }
    // getrandomdir: (steampath: string,max: number) => {
    //     const libcache = path.join(steampath,"appcache","librarycache")
    //     const validdirs = gameart.getvaliduserdirs(libcache)

    //     const i = Math.floor(Math.random() * validdirs.length)
    //     const randomdir = validdirs[i]

    //     return { randomdir, i, validdirs, max } as RandomDirInfo
    // },
    // getvaliduserdirs: (dir: string) => {
    //     const validdirs = fs.readdirSync(dir).filter(entry => {
    //         const dirpath = path.join(dir,entry)
    //         if (!fs.statSync(dirpath).isDirectory() || isNaN(parseInt(entry))) return false
    
    //         const innerfiles = fs.readdirSync(dirpath)
    //         return !(innerfiles.length <= 2 && innerfiles.includes("header.jpg"))
    //     })
    
    //     return validdirs.length ? validdirs.map(v => parseInt(v)) : []
    // },
    // getusergameart: async (obj: RandomDirInfo,steampath: string,hqicon: string) => {
    //     const { randomdir, i, validdirs, max } = obj
    //     const files: string[] = []

    //     const fallbackobj = {
    //         icon: "../img/gameicon.png",
    //         library_hero: "../img/sanimgbg.png"
    //     }
    
    //     const getlibhero = async (max: number): Promise<{ icon: string, library_hero: string }> => {
    //         if (!validdirs.length || max <= 0) return fallbackobj
    
    //         const gameartobj = {
    //             appid: randomdir,
    //             hqicon,
    //             steam3id: 0,
    //             steampath
    //         }
    
    //         try {
    //             const icon = await gameart.get({ ...gameartobj, type: "icon" } as GameArt,files)
    //             const library_hero = await gameart.get({ ...gameartobj, type: "library_hero" } as GameArt,files)

    //             if (icon) fallbackobj.icon = icon
    //             if (library_hero) fallbackobj.library_hero = library_hero
                
    //             return {
    //                 icon,
    //                 library_hero
    //             }
    //         } catch {
    //             validdirs.splice(i,1)
    //             return getlibhero(max - 1)
    //         }
    //     }
    
    //     return await getlibhero(max)
    // }
}