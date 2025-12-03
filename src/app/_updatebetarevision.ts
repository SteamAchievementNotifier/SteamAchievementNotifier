type Color = "red" | "blue" | "yellow" | "green"

const colors: Record<Color,string> = {
    red: "\x1b[31m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    green: "\x1b[32m"
} as const

const logcolormsg = (color: Color,msg: string) => `${colors[color]}${msg}${"\x1b[0m"}`
const logcolorbullet = (color: Color) => `${colors[color]}  • ${"\x1b[0m"}`

import fs from "fs"
import path from "path"

const __root = path.join(__dirname,"..","..")

const { GH_TOKEN } = process.env
const { author: owner, version } = JSON.parse(fs.readFileSync(path.join("package.json")).toString())
const { publish: [{ repo }] } = JSON.parse(fs.readFileSync(path.join("beta.json")).toString())

const url = `https://api.github.com/repos/${owner}/${repo}`

const getrevision = async (version: string) => {
    const release = await fetch(`${url}/releases/tags/${version}`)
    if (!release.ok) throw new Error(`Unable to fetch GitHub Release for ${version}: ${release.status === 404 ? `A GitHub Release for ${version} has not been published. Run \`npm run publish:beta\`, then publish the Release on GitHub before attempting to run \`npm run update:beta\`` : `${release.status} - ${release.statusText}`}`)
    
    const { upload_url: ul, assets_url } = await release.json()
    const upload_url = ul.replace(/\{.*$/,"")

    const assets = await fetch(assets_url)
    if (!assets.ok) throw new Error(`Unable to fetch GitHub Release assets for ${version}: ${assets.status} - ${assets.statusText}`)

    const asset = (await assets.json()).find((asset: any) => asset.name === "beta.json")
    
    if (!asset) {
        console.warn(`${logcolorbullet("yellow")}${logcolormsg("yellow",`beta.json`)} does not exist for ${logcolormsg("blue",version)} in ${logcolormsg("blue",`"${owner}/${repo}`)}`)
        return { upload_url, revision: 0 }
    }

    const dlres = await fetch(asset.browser_download_url)
    if (!dlres.ok) throw new Error(`Unable to download "${asset.name}": ${dlres.status} - ${dlres.statusText}`)

    try {
        const json = JSON.parse(await dlres.text())
        return { upload_url, revision: typeof json.revision === "number" ? json.revision : 0, asset }
    } catch {
        console.warn(`${logcolorbullet("yellow")}Unable to parse JSON for ${logcolormsg("yellow",`asset.browser_download_url`)} (${asset.browser_download_url})`)
        return { upload_url, revision: 0 }
    }
}

const updaterevision = async (version: string,revision: number,upload_url: string,asset?: any) => {
    const json = path.join(__root,"_release","beta.json")
    const basename = path.basename(json)
    fs.existsSync(json) && fs.rmSync(json,{ force: true })

    console.log(`${logcolorbullet("blue")}Existing ${logcolormsg("blue",basename)} [${logcolormsg("blue",`Revision ${revision}`)}] located`)

    revision += 1

    fs.writeFileSync(json,JSON.stringify({ version, revision },null,4))

    if (asset) {
        try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/assets/${asset.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${GH_TOKEN}`,
                    "User-Agent": "node"
                }
            })

            if (!res.ok && res.status !== 404) throw new Error(`Unable to delete asset ${asset.id} for ${version}: ${res.status} - ${res.statusText}`)

            console.log(`${logcolorbullet("yellow")}Existing ${logcolormsg("yellow",asset.name)} [${logcolormsg("blue",`Revision ${revision}`)}] removed`)
        } catch (err) {
            throw new Error(`Error removing "${asset.name}": ${err}`)
        }
    }

    const res = await fetch(`${upload_url}?name=${basename}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${GH_TOKEN}`,
            "Content-Type": "application/octet-stream",
            "User-Agent": "node"
        },
        body: fs.readFileSync(json)
    })

    if (!res.ok) throw new Error(`Unable to upload "${basename}" to GitHub Release for ${version}: ${res.status} - ${res.statusText}`)
    
    console.log(`${logcolorbullet("green")}${logcolormsg("green",basename)} [${logcolormsg("blue",`Revision ${revision}`)}] uploaded to GitHub Release for ${logcolormsg("blue",version)} on ${logcolormsg("blue",owner)}/${logcolormsg("blue",repo)}`)
    return
}

const start = async () => {
    try {
        const { upload_url, revision, asset } = await getrevision(version)
        await updaterevision(version,revision,upload_url,asset)
    } catch (err) {
        console.error(`${logcolorbullet("red")}${logcolormsg("red",(err as Error).message)}`)
    }
}

start()