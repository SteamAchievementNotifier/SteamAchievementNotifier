document.getElementById("maincont").style.opacity = 1

const { ipcRenderer } = require('electron')
const exec = require('child_process').exec
const execFile = require('child_process').execFile
const spawn = require('child_process').spawn
const fs = require('fs')
const path = require('path')

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
const extractdirname = "SteamAchievementNotifier-main"

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
                                    console.log("%cZIP copied to ~/.local/share/Steam Achievement Notifier (V1.8)", "color: deepskyblue")
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
                    console.log(files)
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
                var user = launcher.user

                randommsg.push(
                    `Rise and shine, ${user}. Rise. And. Shine...`,
                    `What kind of a name is ${user}?`,
                    `Hey ${user}, you're finally awake!`
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

        const https = require('https')

        const user = "SteamAchievementNotifier"
        const repo = "SteamAchievementNotifier"

        const commits = `https://api.github.com/repos/${user}/${repo}/commits`
        fetch(commits, { cache: "no-store" }).then(response => {
            if (!response.ok) {
                return Promise.reject(err)
            } else {
                return response.json()
            }
        }).then(commitdata => {
            var sha = commitdata[0].sha

            function DownloadFiles() {
                console.log("Current: ", current)

                fetch(`https://cdn.jsdelivr.net/gh/${user}/${repo}@${sha}/version.json`).then(res => res.json()).then(data => {
                    var latest = data
                    console.log("Latest: ", latest)

                    function CheckVersion() {
                        return new Promise(resolve => {
                            if (latest.version > current.version) {
                                console.log("%cUpdates found - downloading...", "color: blueviolet")
                                document.getElementById("log").innerHTML = `Downloading App Revision ${latest.version} updates...`
                                document.getElementById("log").style.color = "white"

                                https.get(`https://codeload.github.com/${user}/${repo}/zip/main`, res => {
                                    var zip
                                    
                                    if (process.platform == "win32") {
                                        zip = fs.createWriteStream(path.join(__dirname,"latest.zip"))   
                                    } else if (process.platform == "linux") {
                                        zip = fs.createWriteStream(path.join(localappdata,appdatadir,"latest.zip"))
                                    }
                                    
                                    res.pipe(zip)
                                    zip.on('finish', () => {
                                        zip.close()

                                        current["version"] = latest.version
                                        fs.writeFileSync(path.join(localappdata,appdatadir,"store","version.json"), JSON.stringify(current, null, 4))

                                        var extract
                                        
                                        if (process.platform == "win32") {
                                            extract = spawn('powershell.exe',["-Command",`Expand-Archive -Path '${path.join(__dirname,"latest.zip")}' -DestinationPath '${path.join(__dirname)}' -Force; Remove-Item -Path '${path.join(localappdata,appdatadir,"store","app")}' -Recurse -Force; New-Item -Path '${path.join(localappdata,appdatadir,"store")}' -Name "app" -ItemType "directory"; Move-Item -Path '${path.join(__dirname,extractdirname)}\\*' -Destination '${path.join(localappdata,appdatadir,"store","app")}' -Force;`])
                                        } else if (process.platform == "linux") {
                                            extract = exec(`unzip -o '${path.join(localappdata,appdatadir,"latest.zip")}' -d '${path.join(localappdata,appdatadir)}'; rm -rf '${path.join(localappdata,appdatadir,"store","app")}'; mkdir '${path.join(localappdata,appdatadir,"store","app")}'; mv ~/.local/share/${appdatadir}/store/${extractdirname}/* ~/.local/share/${appdatadir}/store/app/;`)
                                        }

                                        extract.on('exit', () => {
                                            function CheckForMissingFiles() {
                                                var required = ["fonts","icon","img","notify","sanlauncher","sound","store","README.md","appentry.js","css.css","index.html","main.js","package-lock.json","package.json","san1.8.js","tooltip.js","vdf.js","version.json"]
                                            
                                                var requiredfiles = []
                                                var actualfiles = []
                                            
                                                fs.readdir(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","app"), (err, files) => {
                                                    if (err) {
                                                        console.log(`%cError reading "app" dir: ` + err)
                                                    } else {
                                                        files.forEach(file => {
                                                            actualfiles.push(file)
                                                        })
                                                
                                                        required.forEach(file => {
                                                            requiredfiles.push(file)
                                                        })
                                                
                                                        console.log("Expected: ", requiredfiles)
                                                        console.log("Actual:", actualfiles)
                                                
                                                        if (actualfiles.length < requiredfiles.length) {
                                                            console.log("%cMissing files!", "color: red")

                                                            var reextract

                                                            if (process.platform == "win32") {
                                                                reextract = spawn('powershell.exe',["-Command",`Move-Item -Path '${path.join(__dirname,extractdirname)}\\*' -Destination '${path.join(localappdata,appdatadir,"store","app")}' -Force;`])
                                                            } else if (process.platform == "linux") {
                                                                reextract = exec(`mv ~/.local/share/${appdatadir}/store/${extractdirname}/* ~/.local/share/${appdatadir}/store/app/;`)
                                                            }

                                                            reextract.on('exit', () => {
                                                                CheckForMissingFiles()
                                                            })
                                                        } else {
                                                            console.log(`%cAll required files exist in local "app" directory`,"color:limegreen")
                                                            console.log(`%cApp updated to App Revision ${current.version}`, "color: limegreen")
                                                            document.getElementById("log").innerHTML = `Updated to App Revision ${latest.version}`
                                                            document.getElementById("log").style.color = "white"
                                                            resolve()
                                                        }
                                                    }
                                                })
                                            }
                                            
                                            CheckForMissingFiles()
                                        })
                                    })
                                })
                            } else {
                                console.log(`%cApp is up to date`,"color: green")
                                document.getElementById("log").innerHTML = `Latest Version (${current.version}) is already installed`
                                document.getElementById("log").style.color = "white"
                                resolve()
                            }
                        })
                    }

                    async function CheckForUpdates() {
                        await CheckVersion()

                        console.log("%cUpdate checks complete - app should now start...", "color: deepskyblue")
                        document.getElementById("log").innerHTML = `Starting...`
                        document.getElementById("log").style.color = "white"
                        StartApp()
                    }

                    CheckForUpdates()
                })
            }

            fetch(`https://cdn.jsdelivr.net/gh/${user}/${repo}@${sha}/`).then(response => {
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
        }).catch(err => {
            console.log(`%cNo response received from Repo: ${user}/${repo} - loading local fallbacks...`, "color: red")
            document.getElementById("log").innerHTML = `Unable to update...`
            document.getElementById("log").style.color = "red"

            console.log("%cApp should now start...", "color: pink")
            StartApp()
        })
    }

    CheckIfEXEExists()
}

setTimeout(Run, 1500)