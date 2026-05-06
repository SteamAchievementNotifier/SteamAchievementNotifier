const path = require("path")
const fs = require("fs")

exports.default = async context => {
    if (context.electronPlatformName !== "linux") return

    const { appOutDir, packager: { executableName: exename } } = context
    const exepath = path.join(appOutDir,exename)

    if (!fs.existsSync(exepath)) {
        console.warn(`[afterPack] Executable not found at ${exepath}`)
        return
    }

    fs.renameSync(exepath,path.join(appOutDir,`${exename}.bin`))

    const wrapper = [
        `#!/bin/bash`,
        `DIR="$(dirname "$(readlink -f "$0")")"`,
        `exec "$DIR/${exename}.bin" --ozone-platform=x11 "$@"`,
        ""
    ].join("\n")

    fs.writeFileSync(exepath,wrapper,{ mode: 0o755 })
    console.log(`[afterPack] Injected "--ozone-platform=x11" wrapper for Linux AppImage`)
}