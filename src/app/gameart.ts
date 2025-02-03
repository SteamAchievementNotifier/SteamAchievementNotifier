import path from "path"
import fs from "fs"

export const gameart = {
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
    get: async (obj: GameArt,files: string[]): Promise<string> => {
        const { appid, hqicon, steam3id, steampath, type } = obj
        if (!appid) return Promise.resolve(await gameart.get({ ...obj, appid: gameart.getrandomuserdir(steampath) },files))

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
            return Promise.reject(type === "logo" ? "../img/gameicon.png" : `../img/gameart/gameart${Math.floor(Math.random() * 3)}.jpg`)
        }
        
        return Promise.resolve(imgpath)
    },
    getall: async (obj: object,files: string[],temp: string,__root:string) => {
        const icon = await gameart.get({ ...obj, type: "icon" } as GameArt,files).then(res => res).catch(fallback => fallback)
        const gamearticon = await gameart.convertICO(icon,temp,__root)
        const gameartlibhero = await gameart.get({ ...obj, type: "library_hero" } as GameArt,files).then(res => res).catch(fallback => fallback)
        const gameartlogo = await gameart.get({ ...obj, type: "logo" } as GameArt,files).then(res => res).catch(fallback => fallback)

        return {
            icon: (gamearticon || icon).replace(/\\/g,"/"),
            libhero: gameartlibhero,
            logo: gameartlogo
        }
    },
    getrandomuserdir: (steampath: string) => {
        const libcache = path.join(steampath,"appcache","librarycache")
        const dirs: number[] = []
        const entries = fs.readdirSync(libcache).sort(() => Math.random() - 0.5).slice(0,100) // Limits to reading 100 randomly selected dir/file entries of `libcache` per call

        for (const dir of entries) {
            if (fs.statSync(path.join(libcache,dir)).isDirectory() && !isNaN(parseInt(dir))) {
                const entrydir = fs.readdirSync(path.join(libcache,dir))

                if (entrydir.length > 2) { // Prevents selecting dirs that are likely to not contain the required game art
                    dirs.push(parseInt(dir))
                }
            }
        }

        return dirs.length ? dirs[Math.floor(Math.random() * dirs.length)] : 0
    }
}