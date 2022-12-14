document.getElementById("maincont").style.opacity = 1

const { ipcRenderer } = require('electron')
const exec = require('child_process').exec
const execFile = require('child_process').execFile
const spawn = require('child_process').spawn
const fs = require('fs')
const path = require('path')
const https = require('https')

var localappdata
var runproc

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA);
    runproc = 'tasklist'
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share");
    runproc = 'ps -A -f'
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support");
    runproc = `ps -ax | grep "steamachievementnotifier"`
} else {
    console.log(`Unsupported platform (${process.platform}) detected - awaiting exit signal...`)
    document.getElementById("log").innerHTML = `ERROR: Steam Achievement Notifier is not supported on ${process.platform}!`
    document.getElementById("log").style.color = "red"
    setTimeout(() => {
        ipcRenderer.send('quit')
    }, 2500)
}

var launcher
var current

const ver = "1.84"
const exename = `SteamAchievementNotifierV${ver}.exe`
const appimgname = `SteamAchievementNotifierV${ver}.AppImage`
const appdatadir = `Steam Achievement Notifier (V1.8)`

var branch

if (fs.existsSync(path.join(localappdata,appdatadir,"store","version.json"))) {
    var localver = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","version.json")))
    
    if (localver.beta == true) {
        branch = "beta"
        console.log(`%cBeta Branch enabled`,"color: mediumpurple")
    } else {
        branch = "main"
        console.log(`%cMain Branch enabled`,"color: blue")
    }
    
    if (localver.beta == false && fs.existsSync(path.join(localappdata,appdatadir,"store","app","beta.txt"))) {
        fs.rmSync(path.join(localappdata,appdatadir,"store","app"), { recursive: true, force: true })
        console.log(`%cRemoved Beta "app" directory`, "color: limegreen")
    
        fs.renameSync(path.join(localappdata,appdatadir,"store","appbackup"), path.join(localappdata,appdatadir,"store","app"))
        console.log(`%cMain Branch "app" directory restored successfully`,"color: limegreen")
    
        localver["betaversion"] = 0
        fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(localver, null, 4))
    } else if (localver.beta == true && !fs.existsSync(path.join(localappdata,appdatadir,"store","app","beta.txt"))) {
        fs.renameSync(path.join(localappdata,appdatadir,"store","app"), path.join(localappdata,appdatadir,"store","appbackup"))
        console.log(`%cMain "app" directory backed up successfully`, "color: limegreen")
    }
} else {
    console.log(`%c"version.json" not present in ${path.join(localappdata,appdatadir,"store")}\nInstalling Main branch...`, "color: orange")
    branch = "main"
}

function IntToFloat(num) {
    if (Number.isInteger(num)) {
        return num += ".0"
    } else {
        return num
    }
}

const ghuser = "SteamAchievementNotifier"
const ghrepo = "SteamAchievementNotifier"

const files = []

function Run() {
    function CheckForPreviousVersions() {
        // V1.8
        if (fs.existsSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.8).lnk"))) {
            fs.rmSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.8).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.8).lnk\" Desktop shortcut", "color: aqua")
        }

        if (fs.existsSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.8).lnk"))) {
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.8).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.8).lnk\" Startup shortcut", "color: aqua")
        }

        // V1.81
        if (fs.existsSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.81).lnk"))) {
            fs.rmSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.81).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.81).lnk\" Desktop shortcut", "color: aqua")
        }

        if (fs.existsSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.81).lnk"))) {
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.81).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.81).lnk\" Startup shortcut", "color: aqua")
        }

        // V1.82
        if (fs.existsSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.82).lnk"))) {
            fs.rmSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.82).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.82).lnk\" Desktop shortcut", "color: aqua")
        }
        
        if (fs.existsSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.82).lnk"))) {
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.82).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.82).lnk\" Startup shortcut", "color: aqua")
        }

        // V1.83
        if (fs.existsSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.83).lnk"))) {
            fs.rmSync(path.join(process.env.USERPROFILE,"Desktop","Steam Achievement Notifier (V1.83).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.83).lnk\" Desktop shortcut", "color: aqua")
        }
        
        if (fs.existsSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.83).lnk"))) {
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.83).lnk"))
            console.log("%cRemoved \"Steam Achievement Notifier (V1.83).lnk\" Startup shortcut", "color: aqua")
        }
    }

    function CheckIfEXEExists() {
        if (process.platform == "win32") {
            CheckForPreviousVersions()
        }

        if (!fs.existsSync(path.join(localappdata,appdatadir))) {
            document.getElementById("log").innerHTML = `Creating app directory...`
            document.getElementById("log").style.color = "white"
            
            fs.mkdir(path.join(localappdata,appdatadir), (err) => {
                if (err) {
                    console.log("Error: " + err)
                    document.getElementById("log").innerHTML = `Error creating "${appdatadir}" directory in ` + localappdata + ": " + err
                    document.getElementById("log").style.color = "red"
                } else {
                    console.log(`%c"${appdatadir}" dir created in %localappdata%`, "color: darkorchid")
                    CopyFiles()
                }
            })
        } else {
            console.log(`%c"${appdatadir}" directory exists in ` + localappdata, "color: limegreen")
            if (process.platform == "win32" && !fs.existsSync(path.join(localappdata,appdatadir,exename)) || process.platform == "linux" && !fs.existsSync(path.join(localappdata,appdatadir,appimgname))) {
                CopyFiles()
            } else {
                console.log(`%cExecutable file already exists`, "color: yellow")
                if (fs.existsSync(path.join(localappdata,appdatadir,"store","launcher.json"))) {
                    var launcher = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","launcher.json")))

                    try {
                        if (process.platform == "win32") {
                            // fs.rmSync(path.join(localappdata,appdatadir,exename))
                            spawn('powershell.exe',["-Command",`$currexe = (Get-Item "${path.join(localappdata,appdatadir,exename)}"; $latestexe = (Get-Item "${path.join(__dirname,"store",exename)}"); if ($currexe.VersionInfo.FileVersion -lt $latestexe.VersionInfo.FileVersion) { Remove-Item $currexe -Force }`])
                            console.log(`%cRemoved previous version of ${exename} from ${localappdata}/${appdatadir}`,"color: aqua")
                        } else if (process.platform == "linux") {
                            // fs.rmSync(path.join(localappdata,appdatadir,appimgname))
                            // console.log(`%cRemoved previous version of ${appimgname} from ${localappdata}/${appdatadir}`,"color: aqua")
                        }
                        
                        launcher["firstlaunch"] = false
                        fs.writeFileSync(path.join(localappdata,appdatadir,"store","launcher.json"), JSON.stringify(launcher, null, 2))
                    } catch (err) {
                        console.log(`%cUnable to remove previous version of Executable from ${localappdata}/${appdatadir}: ` + err,"color: red")
                    }
                }

                CopyFiles()
            }
        }
    }

    function CopyFiles() {
        document.getElementById("log").innerHTML = `Checking app files...`
        document.getElementById("log").style.color = "white"

        // EXE/AppImage Check
        if (process.platform == "win32" && !fs.existsSync(path.join(localappdata,appdatadir,exename)) || process.platform == "linux" && !fs.existsSync(path.join(localappdata,appdatadir,appimgname))) {
            if (process.platform == "win32") {
                fs.copyFile(path.join(__dirname,"store",exename), path.join(localappdata,appdatadir,exename), (err) => {
                    if (err) {
                        console.log("%cEXE Copy error: " + err, "color: red")
                        document.getElementById("log").innerHTML = `Error copying file "${exename}": ` + err
                        document.getElementById("log").style.color = "red"
                    } else {
                        console.log(`%c"${exename}" successfully copied to %localappdata%\\${appdatadir}`, "color: green")
                        CopyFiles()
                    }
                })
            } else if (process.platform == "linux") {
                fs.copyFile(path.join(__dirname,"store",appimgname), path.join(localappdata,appdatadir,appimgname), (err) => {
                    if (err) {
                        console.log("%cAPPIMAGE Copy error: " + err, "color: red")
                        document.getElementById("log").innerHTML = `Error copying file "${appimgname}": ` + err
                        document.getElementById("log").style.color = "red"
                    } else {
                        console.log(`%c"${appimgname}" successfully copied to ~/.local/share/${appdatadir}`, "color: green")
                        CopyFiles()
                    }
                })
            }
        // "store" Dir Check
        } else if (!fs.existsSync(path.join(localappdata,appdatadir,"store"))) {
            fs.mkdir(path.join(localappdata,appdatadir,"store"), (err) => {
                if (err) {
                    console.log("%cDIR ERROR: Unable to create \"store\" dir: " + err, "color: red")
                    document.getElementById("log").innerHTML = `Error creating directory "store": ` + err
                    document.getElementById("log").style.color = "red"
                } else {
                    console.log("%c\"store\" dir created", "color: blueviolet")
                    CopyFiles()
                }
            })
        // Launcher Check
        } else if (!fs.existsSync(path.join(localappdata,appdatadir,"store","launcher.json"))) {
            fs.copyFile(path.join(__dirname,"store","launcher.json"), path.join(localappdata,appdatadir,"store","launcher.json"), (err) => {
                if (err) {
                    console.log("%cJSON Copy error: " + err, "color: red")
                    document.getElementById("log").innerHTML = `Error copying file "launcher.json": ` + err
                    document.getElementById("log").style.color = "red"
                } else {
                    console.log("%c\"launcher.json\" successfully copied to " + path.join(localappdata,appdatadir,"store"), "color: deeppink")
                    launcher = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","launcher.json")))

                    launcher["firstlaunch"] = false
                    fs.writeFileSync(path.join(localappdata,appdatadir,"store","launcher.json"), JSON.stringify(launcher, null, 2))

                    CopyFiles()
                }
            })
        // Version Check
        } else if (!fs.existsSync(path.join(localappdata,appdatadir,"store","version.json"))) {
            fs.copyFile(path.join(__dirname,"store","version.json"), path.join(localappdata,appdatadir,"store","version.json"), (err) => {
                if (err) {
                    console.log("%cVERSION.JSON Copy error: " + err, "color: red")
                    document.getElementById("log").innerHTML = `Error copying file "version.json": ` + err
                    document.getElementById("log").style.color = "red"
                } else {
                    console.log("%c\"version.json\" successfully copied to " + path.join(localappdata,appdatadir), "color: darkorchid")
                    current = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","version.json")))

                    if (current.beta == undefined) {
                        current["beta"] = false
                        fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(current, null, 2));
                    }

                    if (current.betaversion == undefined) {
                        current["betaversion"] = 0
                        fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(current, null, 2));
                    }

                    CopyFiles()
                }
            })
        // "app" Dir Check
        } else if (!fs.existsSync(path.join(localappdata,appdatadir,"store","app"))) {
            fs.mkdir(path.join(localappdata,appdatadir,"store","app"), (err) => {
                if (err) {
                    console.log("%cDIR ERROR: Unable to create \"app\" dir: " + err, "color: red")
                    document.getElementById("log").innerHTML = `Error creating directory "app": ` + err
                    document.getElementById("log").style.color = "red"
                } else {
                    console.log("%c\"app\" dir created", "color: blueviolet")
                    CopyFiles()
                }
            })
        //ZIP Check
        } else {
            fs.readdir(path.join(localappdata,appdatadir,"store","app"), (err, files) => {
                if (err) {
                    console.log("%cDIR ERROR: Unable to read contents of \"app\" dir: " + err, "color: red")
                    document.getElementById("log").innerHTML = `Error reading directory "app": ` + err
                    document.getElementById("log").style.color = "red"

                    console.log("%cCould not copy appfiles to %localappdata% folder - app will run from local fallbacks...", "color: red")
                    TestQuit()
                } else {
                    if (files.length == 0) {
                        document.getElementById("log").innerHTML = `Copying app files...`
                        document.getElementById("log").style.color = "white"

                        var filecopy

                        if (process.platform == "win32") {
                            filecopy = spawn('powershell.exe',["-Command",`Expand-Archive -Path "${path.join(__dirname,"store","app.zip")}" -DestinationPath "${path.join(localappdata,appdatadir,"store","app")}"`])
                        
                            filecopy.on('exit', () => {
                                console.log("%cAll required files copied!", "color: green")
                                TestQuit()
                            })
                        } else if (process.platform == "linux") {
                            fs.copyFile(path.join(__dirname,"store","app.zip"), path.join(localappdata,appdatadir,"app.zip"), (err) => {
                                if (err) {
                                    console.log("%cZIP COPY ERROR: " + err, "color: red")
                                } else {
                                    console.log(`%cZIP copied to ~/.local/share/${appdatadir}`, "color: deepskyblue")
                                    filecopy = exec(`unzip -o '${path.join(localappdata,appdatadir,"app.zip")}' -d '${path.join(localappdata,appdatadir,"store","app")}'`)
                                    
                                    filecopy.on('error', (err) => {
                                        console.log(err)
                                    })
                                    
                                    filecopy.on('exit', () => {
                                        console.log("%cAll required files copied!", "color: green")
                                        TestQuit()
                                    })
                                }
                            })
                        }
                    } else {
                        console.log("%cAll required files copied!", "color: limegreen")
                        TestQuit()
                    }
                }
            })
        }
    }

    function TestQuit() {
        current = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","version.json")))
        launcher = JSON.parse(fs.readFileSync(path.join(localappdata,appdatadir,"store","launcher.json")))
        
        if (process.platform == "win32") {
            launcher["path"] = path.join(process.env.PORTABLE_EXECUTABLE_FILE)
        } else if (process.platform == "linux") {
            launcher["path"] = path.join(process.env.APPIMAGE)
        }

        fs.writeFileSync(path.join(localappdata,appdatadir,"store","launcher.json"), JSON.stringify(launcher, null, 2))

        exec(runproc, (err, processes) => {
            processes = processes.toLowerCase()

            if (!processes.includes("steamachievementnotifier")) {
                console.log("%cProcess not running - starting app...", "color: limegreen")
                document.getElementById("log").innerHTML = `No running process found`
                document.getElementById("log").style.color = "white"

                DownloadServerSideUpdates()
                // StartApp()
            } else {
                console.log("%cProcess is already running!", "color: red")
                document.getElementById("log").innerHTML = `Steam Achievement Notifier is already running!`
                document.getElementById("log").style.color = "white"
                
                setTimeout(() => {
                    console.log("Quitting...")
                    ipcRenderer.send('quit')
                }, 500)
            }
        })
    }

    function StartApp() {
        document.getElementById("log").innerHTML = `Starting...`
        document.getElementById("log").style.color = "white"

        var randommsg = [
            "Reticulating splines...",
            "Constructing additional pylons...",
            "NOT made by Notch",
            "Where's my Dragonator?!",
            "This app is not a natural formation...",
            "Wah! Hoo-hoo! WAHOO!",
            "Canadian Laser Bears!",
            "Adding !; to motherlode...",
            "Would you kindly join the Discord?",
            "I like shorts! They're comfy and easy to wear!",
            "Guh-huh!",
            "Waiting for The Talos Principle 2...",
            "PSA: Unlock that last achievement!",
            "PSA: Don't press ALT + F4!",
            "PSA: Gaming chairs improve your accuracy!",
            "if (rgb) { fps + 10 }",
            "Free copy paper?! SWEET!"
        ]

        if (launcher) {
            if (!launcher.user == "") {
                var username = launcher.user

                randommsg.push(
                    `Rise and shine, ${username}. Rise. And. Shine...`,
                    `What kind of a name is ${username}?`,
                    `Hey ${username}, you're finally awake!`
                )
            }
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        var randomnum = getRandomInt(randommsg.length)
        
        document.getElementById("log").innerHTML = randommsg[randomnum]
        document.getElementById("log").style.color = "white"
        
        const exepath = path.join(localappdata,appdatadir,exename)
        const appimgpath = path.join(localappdata,appdatadir,appimgname)

        if (process.platform == "win32" && fs.existsSync(exepath) || process.platform == "linux" && fs.existsSync(appimgpath)) {
            console.log(`%cExecutable exists!`, "color: deeppink")
            
            if (process.platform == "win32") {
                // execFile(exepath)
                spawn('powershell.exe', ["-Command",`start '${exepath}'`])
            } else if (process.platform == "linux") {
                execFile(appimgpath)
            }

            setTimeout(() => {
                console.log("Quitting...")
                ipcRenderer.send('quit')
            }, 5000)
        } else {
            console.log("%cError - Executable does not exist!", "color: red")
            document.getElementById("log").innerHTML = `ERROR! Executable does not exist!`
            document.getElementById("log").style.color = "red"
        }
    }

    function DownloadServerSideUpdates() {
        document.getElementById("log").innerHTML = `Checking for updates...`
        document.getElementById("log").style.color = "white"

        const commits = `https://api.github.com/repos/${ghuser}/${ghrepo}/commits?sha=${branch}`
        fetch(commits, { cache: "no-store" }).then(response => {
            if (!response.ok) {
                return Promise.reject(response.status)
            } else {
                return response.json()
            }
        }).then(commitdata => {
            var sha = commitdata[0].sha

            function GetTreeURL() {
                return new Promise(resolve => {
                    fetch(`https://api.github.com/repos/${ghuser}/${ghrepo}/commits/${sha}`, { cache: "no-store" }).then(response => {
                        if (!response.ok) {
                            return Promise.reject(response.status)
                        } else {
                            return response.json()
                        }
                    }).then(data => {
                        resolve(`${data.commit.tree.url}?recursive=true`)
                    }).catch(err => {
                        console.log(`%cError checking for Repo Filetree (Status: ${err})`, "color: red")
                        alert(`Error in GetTreeURL() (Status: ${err})`)
                    })
                })
            }

            GetTreeURL().then(treeurl => {
                fetch(treeurl, { cache: "no-store" }).then(response => {
                    if (!response.ok) {
                        return Promise.reject(response.status)
                    } else {
                        return response.json()
                    }
                }).then(treefiles => {
                    treefiles.tree.forEach(treefile => {
                        if (treefile.type == "blob") {
                            files.push(treefile.path)
                        }
                    })
                    
                    function DownloadFiles() {
                        console.log("Current: ", current)
        
                        fetch(`https://cdn.jsdelivr.net/gh/${ghuser}/${ghrepo}@${sha}/version.json`).then(res => res.json()).then(data => {
                            var latest = data
                            console.log("Latest: ", latest)
        
                            var repoversion
                            var localversion
        
                            if (branch == "beta") {
                                repoversion = latest.betaversion
                                localversion = current.betaversion
                            } else {
                                repoversion = latest.version
                                localversion = current.version
                            }
        
                            function CheckVersion() {
                                return new Promise(resolve => {
                                    // New DL Code
                                    function StartDownload() {
                                        const sandir = path.join(localappdata,appdatadir).replace(/\\/g,"/")
        
                                        try {
                                            fs.rmdirSync(`${sandir}/store/app`, { recursive: true, force: true })
                                            console.log(`%c"${sandir}/store/app" deleted successfully`, "color: limegreen")
                                        } catch (err) {
                                            console.log(`%cError deleting "app" dir: ${err}`, "color: red")
                                        }
                                        
                                        var completed = []
                                        
                                        function CreateSANRootDir() {
                                            return new Promise((resolve, reject) => {
                                                try {
                                                    if (!fs.existsSync(sandir)) {
                                                        fs.mkdirSync(sandir)
                                                        console.log(`%cRoot dir ${sandir} created`,"color:limegreen")
                                                        resolve()
                                                    } else {
                                                        console.log(`%cRoot dir ${sandir} already exists! Skipping...`,"color:blueviolet")
                                                        resolve()
                                                    }
                                                } catch (err) {
                                                    reject(err)
                                                }
                                            })
                                        }
                                        
                                        CreateSANRootDir().then(() => {
                                            // Create Progress Bar
                                            var pbcont = document.createElement("div")
                                            pbcont.id = "pbcont"
                                            document.body.appendChild(pbcont)
                                            
                                            var pbl = document.createElement("div")
                                            pbl.id = "pbl"
                                            document.getElementById("pbcont").appendChild(pbl)
                                            
                                            var pbr = document.createElement("div")
                                            pbr.id = "pbr"
                                            document.getElementById("pbcont").appendChild(pbr)
                                            
                                            // DL Timeout
                                            var seconds = 0
                                            var dlcomplete = false
                                            
                                            var timer = setInterval(() => {
                                                seconds += 1
                                                if (seconds > 15 && dlcomplete == false) {
                                                    seconds = 0
                                                    console.log(`%cDownload incomplete after 10 seconds. Rechecking...`,"color:yellow")
                                                
                                                    completed = []
                                                
                                                    DLAllFiles()
                                                }
                                            }, 1000)
                                        
                                            function DLAllFiles() {
                                                files.forEach(filepath => {
                                                    var folderpath = (`${sandir}/store/app/${filepath.replace(/[^\/]+$/g,"")}`)
                                                    
                                                    function CreateSANDirs() {
                                                        return new Promise((resolve, reject) => {
                                                            try {
                                                                if (!fs.existsSync(folderpath)) {
                                                                fs.mkdirSync(folderpath, { recursive: true })
                                                                console.log(`%c${folderpath} dir created`,"color:limegreen")
                                                                resolve()
                                                                } else {
                                                                console.log(`%c${folderpath} already exists! Skipping...`,"color:blueviolet")
                                                                resolve()
                                                                }
                                                            } catch (err) {
                                                                reject(err)
                                                            }
                                                        })
                                                    }
                                            
                                                    CreateSANDirs().then(() => {
                                                        var filename = filepath.replace(/.*\//g,"")
                                                
                                                        function CheckCompletedFiles() {
                                                            completed.push(filename)
                                                            console.log(`%cCompleted: ${completed.length}/${files.length}`,"color:teal")
            
                                                            document.getElementById("pbl").style.width = Math.round(completed.length / files.length * 100) + "%"
                                                            document.getElementById("pbr").style.width = (100 - Math.round(completed.length / files.length * 100)) + "%"
                                                
                                                            if (completed.length == files.length) {
                                                                dlcomplete = true
                                                                clearInterval(timer)
            
                                                                document.getElementById("pbcont").style.animation = "progressbarrev 0.5s ease-in-out forwards"
            
                                                                if (branch == "beta") {
                                                                    current["betaversion"] = IntToFloat(latest.betaversion)
                                                                    fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(current, null, 4))
                                                                } else {
                                                                    current["version"] = IntToFloat(latest.version)
                                                                    fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(current, null, 4))
                                                                }
            
                                                                resolve()
                                                            }
                                                        }
                                                    
                                                        if (fs.existsSync(folderpath + filename)) {
                                                            console.log(`%c${folderpath + filename} exists`,"color:rebeccapurple")
                                                            CheckCompletedFiles()
                                                        } else {
                                                            console.log(`%c${folderpath + filename} does not exist! Downloading...`,"color:seagreen")
        
                                                            https.get(`https://cdn.jsdelivr.net/gh/${ghuser}/${ghrepo}@${sha}/${filepath}`, res => {
                                                                var file = fs.createWriteStream(folderpath + filename)
                                                                res.pipe(file)
                                                                file.on("finish", () => {
                                                                    file.close()
                                                        
                                                                    console.log(`%c${filename} downloaded successfully`,"color:limegreen")
                                                        
                                                                    CheckCompletedFiles()
                                                                }).on("error", err => {
                                                                    console.log(`%cError downloading ${filename}: ${err}`,"color:red")
                                                                })
                                                            })
                                                        }
                                                    }).catch(err => {
                                                        console.log(`%c${err}`,"color:red")
                                                    })
                                                })
                                            }
                                            
                                            DLAllFiles()
                                        }).catch(err => {
                                            console.log(`%c${err}`,"color:red")
                                        })
                                    }
        
                                    if (repoversion > localversion) {
                                        var confirmmsg

                                        if (branch == "beta") {
                                            confirmmsg = `New App Revision (BETA ${IntToFloat(repoversion)}) available! Do you want to download it?`
                                        } else {
                                            confirmmsg = `New App Revision (${IntToFloat(repoversion)}) available! Do you want to download it?`
                                        }

                                        if (window.confirm(confirmmsg)) {
                                            if (branch == "beta") {
                                                console.log("%cBeta Updates found - downloading...", "color: blueviolet")
                                                document.getElementById("log").innerHTML = `Downloading Beta App Revision ${IntToFloat(repoversion)} updates...`
                                                document.getElementById("log").style.color = "mediumpurple"
                                            } else {
                                                console.log("%cUpdates found - downloading...", "color: blueviolet")
                                                document.getElementById("log").innerHTML = `Downloading App Revision ${IntToFloat(repoversion)} updates...`
                                                document.getElementById("log").style.color = "white"
                                            }
            
                                            StartDownload()
                                        } else {
                                            StartApp()
                                        }
                                    } else {
                                        // Check for missing files on every launch - re-download if files are missing
                                        const appdir = path.join(localappdata,appdatadir,"store","app").replace(/\\/g,"/")
                                        var existingfiles = []
        
                                        function GetExistingFiles(dirname) {
                                            localfiles = fs.readdirSync(dirname)
                                            
                                            localfiles.forEach(localfile => {
                                                if (fs.statSync(`${dirname}/${localfile}`).isDirectory()) {
                                                    GetExistingFiles(`${dirname}/${localfile}`)
                                                } else {
                                                    existingfiles.push(`${dirname}/${localfile}`)
                                                }
                                            })
                                        }
        
                                        function CompareFiles() {
                                            if (existingfiles.length < files.length) {
                                                files.forEach(file => {
                                                    var filepath = (`${localappdata}/${appdatadir}/store/app/${file}`).replace(/\\/g,"/")
        
                                                    if (!existingfiles.includes(filepath)) {
                                                        console.log(`%cMissing: ${filepath}`, "color: red")
                                                    }
                                                })
                                                
                                                document.getElementById("log").innerHTML = `Re-downloading missing app files...`
                                                document.getElementById("log").style.color = "white"
                                                StartDownload()
                                            } else {
                                                console.log(`%cApp is up to date`,"color: limegreen")
                                                document.getElementById("log").innerHTML = `App Revision ${localversion} is installed and verified`
                                                document.getElementById("log").style.color = "white"
                                                resolve()
                                            }
                                        }
        
                                        GetExistingFiles(appdir)
                                        CompareFiles()
                                    }
                                })
                            }
        
                            async function CheckForUpdates() {
                                await CheckVersion()
        
                                if (branch == "beta") {
                                    if (!fs.existsSync(path.join(localappdata,appdatadir,"store","app","GOverlay.exe"))) {
                                        function DownloadGOverlay() {
                                            return new Promise(resolve => {
                                                console.log("%cDownloading GOverlay.exe...", "color: seagreen")
                                                document.getElementById("log").innerHTML = `Downloading "GOverlay.exe"...`
                        
                                                fetch(`https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/${ver}/GOverlay.exe`).then(response => {
                                                    https.get(response.url, res => {
                                                        var goverlay = fs.createWriteStream(path.join(localappdata,appdatadir,"store","app","GOverlay.exe"))
                                                        
                                                        res.pipe(goverlay)
                                                        
                                                        goverlay.on('finish', () => {
                                                            goverlay.close()
                                                            console.log("%cGOverlay.exe downloaded successfully", "color: limegreen")
                                                            document.getElementById("log").innerHTML = "Downloaded GOverlay.exe"
                                                            resolve()
                                                        })
                            
                                                        goverlay.on('error', err => {
                                                            console.log(`GOVERLAY ERROR: ${err}`)
                                                            document.getElementById("log").innerHTML = "Error downloading GOverlay.exe!"
                                                            document.getElementById("log").style.color = "red"
                                                            goverlay.close()
                                                            resolve()
                                                        })
                                                    })
                                                })
                                            })
                                        }
        
                                        DownloadGOverlay().then(() => {
                                            console.log("%cUpdate checks complete - app should now start...", "color: deepskyblue")
                                            document.getElementById("log").innerHTML = `Starting...`
                                            document.getElementById("log").style.color = "white"
                                            StartApp()
                                        })
                                    } else {
                                        console.log("%cGOverlay.exe exists!", "color: seagreen")
                                        console.log("%cUpdate checks complete - app should now start...", "color: deepskyblue")
                                        document.getElementById("log").innerHTML = `Starting...`
                                        document.getElementById("log").style.color = "white"
                                        StartApp()
                                    }
                                } else {
                                    console.log("%cUpdate checks complete - app should now start...", "color: deepskyblue")
                                    document.getElementById("log").innerHTML = `Starting...`
                                    document.getElementById("log").style.color = "white"
                                    StartApp()
                                }
                            }
        
                            CheckForUpdates()
                        })
                    }
        
                    fetch(`https://cdn.jsdelivr.net/gh/${ghuser}/${ghrepo}@${sha}/`).then(response => {
                        if (response.ok) {
                            return response
                        } else {
                            return Promise.reject(err)
                        }
                    }).then(() => {
                        console.log(`%cConnected to Repo`, "color: limegreen")
                        document.getElementById("log").innerHTML = `Connected to GitHub Repository...`
                        document.getElementById("log").style.color = "white"
        
                        DownloadFiles()
                    }).catch(err => {
                        console.log(`%cFailed to locate updates in Repo - loading local fallbacks...`, "color: red")
                        document.getElementById("log").innerHTML = `Unable to locate update files...`
                        document.getElementById("log").style.color = "orange"
        
                        console.log("%cApp should now start...", "color: deeppink")
                        StartApp()
                    })
                })
            })
        }).catch(err => {
            console.log(`%cNo response received from Repo: ${ghuser}/${ghrepo} - loading local fallbacks...`, "color: red")
            document.getElementById("log").innerHTML = `Unable to update...`
            document.getElementById("log").style.color = "red"

            console.log("%cApp should now start...", "color: pink")
            StartApp()
        })
    }

    CheckIfEXEExists()
}

setTimeout(Run, 1500)
