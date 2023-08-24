document.getElementById("volumeslider").value = document.getElementById("portraitvolumeslider").value = config.customisation.main.volume

function SetVolume(event) {
    const type = GetTabType()
    const volumeslider = document.getElementById("volumeslider")
    const portraitvolumeslider = document.getElementById("portraitvolumeslider")

    const value = Math.min(Math.max(config.customisation[type].volume + (event.deltaY < 0 ? 1 : -1), 1), 10)
    sanhelper.write({config},["customisation",type,"volume"],value)

    volumeslider ? volumeslider.value = config.customisation[type].volume : null
    portraitvolumeslider ? portraitvolumeslider.value = config.customisation[type].volume : null
}

const audioformats = ["aiff","flac","m4a","mp3","ogg","wav","wma"]

function ValidateAudioFile(res,mode,errmsg) {
    return new Promise(async (resolve,reject) => {
        const soundfilebtn = document.getElementById("soundfilebtn")
        const valid = []

        async function CheckFile(file) {
            try {
                const ext = await path.extname(file)
                const { size } = await metadata(file)
    
                await exists(file) && size && audioformats.includes(ext) ? valid.push(file) : null
            } catch (err) {
                reject({ path: res, valid: valid, msg: err })
            }
        }
        
        if (mode === "file") {
            await CheckFile(res)
        } else {
            const dir = await readDir(res,{ recursive: true })
            await Promise.all(dir.map(({path}) => CheckFile(path)))
        }
        
        valid.length ? resolve(valid) : reject({ path: res, valid: valid})

        soundfilebtn.setAttribute("value",errmsg)
        soundfilebtn.toggleAttribute("error",!valid.length)

        setTimeout(() => soundfilebtn.removeAttribute("error"),1500)
    })
}

async function SelectSound(mode) {
    const type = GetTabType()
    const soundfilelbl = document.getElementById("soundfilelbl")
    
    dialog.open({
        directory: mode === "folder",
        title: `Steam Achievement Notifier (V${await sanhelper.version()}) - ${translations.audioselectdialog}`,
        multiple: false,
        filters: [{
            name: "Audio",
            extensions: audioformats
        }]
    })
    .then(res => {
        res ?
        ValidateAudioFile(res,mode,mode === "file" ? translations.unsupported : translations.novalidaudiofiles)
        .then(() => {
            sanhelper.write({config},["customisation",type,`sound${mode === "file" ? "file" : "dir"}`],res)
            soundfilelbl.textContent = res
        })
        .catch(err => mode === "file" ? log.write("error",`Sound file is unsupported`) : log.write("error",`No valid audio files located in "${err.path}" directory`))
        : null
    })
    .catch(err => log.write("error",err))
}

function SetScrollDirection(elem1,elem2,scroll) {
    elem1.style.translate = "0 0"
    elem2.style.translate = scroll && scroll.deltaY > 0 ? "0 -500%" : "0 500%"

    const dir = scroll && scroll.deltaY > 0 ? "down" : "up"
    const delay = "calc(var(--transition) / 2)"
    elem1.style.animation = `scrollfromcenter${dir} ${delay} forwards`
    elem2.style.animation = `scrolltocenter${dir} ${delay} ${delay} forwards`
}

document.querySelector(".soundbar").setAttribute("mode",config.customisation.main.mode)

function SetSoundSrc() {
    const type = GetTabType()
    const { soundfile, sounddir, mode } = config.customisation[type]
    const soundbar = document.querySelector(".soundbar")
    const soundmodelbl = document.getElementById("soundmodelbl")
    
    soundbar.setAttribute("mode",mode)
    document.getElementById("soundfilelbl").textContent = mode === "file" ? soundfile ? soundfile : translations.nosoundfile : sounddir ? sounddir : translations.nosoundfolder

    const fileicon = document.getElementById("fileicon")
    const diceicon = document.getElementById("diceicon")

    mode === "folder" ? SetScrollDirection(fileicon,diceicon) : SetScrollDirection(diceicon,fileicon)

    soundmodelbl.setAttribute("mode",mode === "file" ? translations.file : translations.randomised)
}

window.addEventListener("translations",SetSoundSrc,{ once: true })

document.getElementById("fileicon").style.translate = document.querySelector(".soundbar").getAttribute("mode") === "file" ? "0 0" : "0 500%"
document.getElementById("diceicon").style.translate = document.querySelector(".soundbar").getAttribute("mode") === "folder" ? "0 0" : "0 500%"

function ChangeSoundMode(event) {
    const type = GetTabType()
    const soundbar = document.querySelector(".soundbar")

    const newvalue = soundbar.getAttribute("mode") === "file" ? "folder" : "file"
    
    event ? sanhelper.write({config},["customisation",type,"mode"],newvalue) : null
    
    soundbar.setAttribute("mode",newvalue)
    SetSoundSrc()
    
    const fileicon = document.getElementById("fileicon")
    const diceicon = document.getElementById("diceicon")

    soundbar.getAttribute("mode") === "folder" ? SetScrollDirection(fileicon,diceicon,event) : SetScrollDirection(diceicon,fileicon,event)

    const btns = ["soundfilelbl","searchbtn"]
    btns.forEach(btn => document.getElementById(btn).setAttribute("content",translations[btn].tt))
}

function ResetAudio() {
    const audio = document.querySelector("audio")
    const previewbtn = document.getElementById("previewbtn")
    
    previewbtn.setAttribute("state","play")
    audio.pause()
    audio.currentTime = 0

    previewbtn.onclick = null
    previewbtn.onclick = () => PreviewSound()
}

function GetSoundFile(type) {
    const mode = document.querySelector(".soundbar").getAttribute("mode")

    return new Promise(async (resolve,reject) => {
        config.customisation[type][mode === "file" ? "soundfile" : "sounddir"] ?
        ValidateAudioFile(config.customisation[type][mode === "file" ? "soundfile" : "sounddir"],mode,translations.nolocate)
        .then(res => resolve(res))
        .catch(err => reject(err))
        : resolve([await path.resolve(await path.resourceDir(),"src","sound","notify.wav")])
    })
}

function PreviewSound() {
    const type = GetTabType()

    function PlaySound(res) {
        const audio = document.querySelector("audio")
        const previewbtn = document.getElementById("previewbtn")
    
        previewbtn.setAttribute("state","stop")
        previewbtn.onclick = () => ResetAudio()

        audio.src = convertFileSrc(res[sanhelper.random(res.length)])
        audio.volume = config.customisation[type].volume / 10
        audio.play()
        audio.addEventListener("ended",() => ResetAudio())
    }

    GetSoundFile(type)
    .then(res => PlaySound(res))
    .catch(async err => {
        log.write("error",`Unable to play "${err.path}": ${err.msg}`)
        PlaySound([await path.resolve(await path.resourceDir(),"src","sound","notify.wav")])
    })
}