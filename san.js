//MAIN CONTENT FUNCTIONS
const { ipcRenderer, app } = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;
const shortcut = path.join(os.homedir(), "Desktop", "Steam Achievement Notifier (V1.71).lnk");

//INITIAL SETUP
spawn("powershell.exe",["-Command","$policy = Get-ExecutionPolicy; if ($policy -ne 'Bypass') { Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass; }"]);
console.log("Execution Policy updated to Bypass.")

const sanlocalappdata = path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)");
console.log(sanlocalappdata)
if (!fs.existsSync(sanlocalappdata)) {
    console.log("\"Steam Achievement Notifier (V1.7)\" directory does not exist in LocalAppData. Creating...")
    fs.mkdirSync(sanlocalappdata);
    fs.mkdirSync(path.join(sanlocalappdata,"store"));
    fs.mkdirSync(path.join(sanlocalappdata,"img"));
    fs.copyFileSync(path.join(__dirname,"store","config.json"), path.join(sanlocalappdata,"store","config.json"));
    fs.copyFileSync(path.join(__dirname,"img","sanlogo.ico"), path.join(sanlocalappdata,"img","sanlogo.ico"));
    console.log("\"Steam Achievement Notifier (V1.7)\" directory created in LocalAppData. WARNING: \"config.json\" has been reset to Default.")
} else {
    console.log("\"Steam Achievement Notifier (V1.7)\" directory already exists.")
}

//SETS CONFIG FILE AFTER COPYING
const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json")));

//WRITES LOCAL.JSON FILE
fs.writeFileSync(path.join(__dirname,"store","local.json"), "");

//CURRENT VERSION NUMBER
var thisver = "1.71";
var tag = null;

function CheckUpdate() {
    fetch("https://api.github.com/repos/SteamAchievementNotifier/SteamAchievementNotifier/releases").then(response => response.json()).then((data) => {
        tag = data[0].tag_name
        if (tag > thisver) {
            document.getElementById("updateicon").style.display = "flex";
        }
    });
}

CheckUpdate();

function OpenUpdateInBrowser() {
    ipcRenderer.send('update', tag);
}

function CreateStartMenuShortcut() {
    //const startmenu = path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk");
    //if (!fs.existsSync(startmenu)) {
        try {
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
            fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.71).lnk"));
        } catch (error) {
            console.log(error);
        }
        spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.71).lnk") + `'); $shortcut.IconLocation = '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save(); $sc = "steam achievement notifier (V1.71)"; $txtinfo = (Get-Culture).TextInfo; $scfix = $txtinfo.ToTitleCase($sc); Rename-Item -Path "` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.71).lnk") + `" -NewName "$scfix.lnk"`]);
        console.log("\"Steam Achievement Notifier (V1.71).lnk\" created in Start Menu.")
    //} else {
        //console.log("\"Steam Achievement Notifier (V1.7).lnk\" Start Menu shortcut already exists.")
    //}
}

CreateStartMenuShortcut();

function ReplaceBTConfig() {
    const btconfig = JSON.parse(fs.readFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json")));

    if (btconfig.AppId !== path.join(process.env.PORTABLE_EXECUTABLE_FILE)) {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(__dirname,"BurntToast","0.8.5","config.json.old"));
        btconfig["AppId"] = process.env.PORTABLE_EXECUTABLE_FILE.replace("\\","\\\\").replace(":\\\\",":\\");
        btconfig["AppLogo"] = path.join(__dirname, "img", "sanlogo.ico");
        fs.writeFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), JSON.stringify(btconfig, null, 2));
        console.log("BurntToast AppId/AppLogo have been set to \"Steam Achievement Notifier (V1.7).exe\".");
    } else {
        console.log("BurntToast AppId is set correctly.");
    }
}

ReplaceBTConfig();

function ResetAppConfirm() {
    ipcRenderer.send('reset');
}

function ResetApp() {
    console.log("Step 1: BACKUP...")
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "Step 1: BACKUP...");
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP"));
        console.log("\"SAN1.7BACKUP\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory already exists");
    }
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT"))
        console.log("\"SAN1.7BACKUP\\BT\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\\BT\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory already exists");
    }
    try {
        fs.copyFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT","config.json"));
        console.log("BurntToast config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config backed up");
    } catch {
        console.log("Error backing up BurntToast config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up BurntToast config");
    }
    console.log("Step 2: RESETTING BURNTTOAST CONFIG...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 2: RESETTING BURNTTOAST CONFIG...");
    try {
        fs.rmSync(path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast custom config deleted")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast custom config deleted");
    } catch {
        console.log("Error deleting BurntToast custom config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting BurntToast custom config");
    }
    try {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json.old"), path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast config reset to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config reset to default");
    } catch {
        console.log("Error resetting BurntToast config to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError resetting BurntToast config to default");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","config.json"));
        console.log("Steam Achievement Notifier config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","sanlogo.ico"));
        console.log("Steam Achievement Notifier logo backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier logo")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo");
    }
    console.log("Step 3: DELETING FILES...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 3: DELETING FILES...");
    try {
        fs.rmSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)"), { recursive: true });
        console.log("\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%");
    } catch {
        console.log("Error deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
        console.log("Start Menu shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStart Menu shortcut deleted.");
    } catch {
        console.log("Error deleting Start Menu shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Start Menu shortcut");
    }
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V1.71).lnk"));
        console.log("Desktop shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("Error deleting Desktop shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.71).lnk"));
        console.log("Startup shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStartup shortcut deleted.");
    } catch {
        console.log("Error deleting Startup shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Startup shortcut");
    }
    console.log("Reset: COMPLETE")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nReset: COMPLETE");
    ipcRenderer.send('resetcomplete')
}

ipcRenderer.on('resetapp', function() {
    ResetApp();
})

function UninstallApp() {
    console.log("Step 1: BACKUP...")
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "Step 1: BACKUP...");
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP"));
        console.log("\"SAN1.7BACKUP\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory already exists");
    }
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT"))
        console.log("\"SAN1.7BACKUP\\BT\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\\BT\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory already exists");
    }
    try {
        fs.copyFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT","config.json"));
        console.log("BurntToast config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config backed up");
    } catch {
        console.log("Error backing up BurntToast config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up BurntToast config");
    }
    console.log("Step 2: RESETTING BURNTTOAST CONFIG...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 2: RESETTING BURNTTOAST CONFIG...");
    try {
        fs.rmSync(path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast custom config deleted")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast custom config deleted");
    } catch {
        console.log("Error deleting BurntToast custom config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting BurntToast custom config");
    }
    try {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json.old"), path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast config reset to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config reset to default");
    } catch {
        console.log("Error resetting BurntToast config to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError resetting BurntToast config to default");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","config.json"));
        console.log("Steam Achievement Notifier config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","sanlogo.ico"));
        console.log("Steam Achievement Notifier logo backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier logo")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo");
    }
    console.log("Step 3: DELETING FILES...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 3: DELETING FILES...");
    try {
        fs.rmSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)"), { recursive: true });
        console.log("\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%");
    } catch {
        console.log("Error deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
        console.log("Start Menu shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStart Menu shortcut deleted.");
    } catch {
        console.log("Error deleting Start Menu shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Start Menu shortcut");
    }
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V1.71).lnk"));
        console.log("Desktop shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("Error deleting Desktop shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.71).lnk"));
        console.log("Startup shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStartup shortcut deleted.");
    } catch {
        console.log("Error deleting Startup shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Startup shortcut");
    }
    console.log("Uninstall: COMPLETE")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nUninstall: COMPLETE");
    ipcRenderer.send('uninstallcomplete')
}

ipcRenderer.on('uninstallapp', function() {
    UninstallApp();
})

function DependencyChecks() {
    var btinstall = document.getElementById("btinstall");
    var btappid = document.getElementById("btappid");
    var startshortcut = document.getElementById("startshortcut");

    var btfolder = path.join(__dirname,"BurntToast");
    if (fs.existsSync(btfolder)) {
        btinstall.src = "./icons/dot_green.svg";
    } else {
        btinstall.src = "./icons/dot_red.svg";
    }

    var readbtappid = JSON.parse(fs.readFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json")));
    if (readbtappid.AppId == process.env.PORTABLE_EXECUTABLE_FILE.replace("\\","\\\\").replace(":\\\\",":\\")) {
        btappid.src = "./icons/dot_green.svg";
    } else {
        btappid.src = "./icons/dot_red.svg";
    }

    var getstartshortcut = path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk");
    if (fs.existsSync(getstartshortcut)) {
        startshortcut.src = "./icons/dot_green.svg";
    } else {
        startshortcut.src = "./icons/dot_red.svg";
    }
}

function ShowDependencyChecks() {
    document.getElementById("checks").style.opacity = "1";
    document.getElementById("checks").style.transition = "0.2s";
}

function HideDependencyChecks() {
    document.getElementById("checks").style.opacity = "0";
    document.getElementById("checks").style.transition = "0.2s";
}

function ShowSettings() {
    document.getElementById("bodycont").style.display = "none";
    document.getElementById("settingscont").style.display = "flex";
    document.getElementById("close").onclick = function () { CloseSettings() };
    document.getElementById("settings").onclick = function () { CloseSettings() };

    CheckConfig();
    CheckScreenshot();
    CheckShortcut();
    CheckStartWin();
    CheckStartMin()
    CheckNowTracking();
    CheckSoundOnlyMode();
    GetPlayerName();
    DependencyChecks();
    GetDisplayTime();
    LoadKeybind();
}

function CloseSettings() {
    document.getElementById("bodycont").style.display = "flex";
    document.getElementById("settingscont").style.display = "none";
    document.getElementById("close").onclick = function () { CloseWindow() };
    document.getElementById("settings").onclick = function () { ShowSettings() };
    GetPlayerName();
}

function CloseWindow() {
    window.close();
}

var queue = [];
var running = false;

function TestNotification() {
    var mainps = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
    $screenshot = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).screenshot;
    $gif = '` + path.join(__dirname,"img","santoasttest.gif") + `';
    $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
    $play = New-Object System.Media.SoundPlayer; $play.SoundLocation = $sound;
    if ($screenshot -eq 'true') {
        New-BurntToastNotification -UniqueIdentifier 'testss' -Text 'Steam Achievement Notifier','Your notifications are working correctly.' -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -HeroImage $gif -Silent;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'testss';
    } else {
        New-BurntToastNotification -UniqueIdentifier 'test' -Text 'Steam Achievement Notifier','Your notifications are working correctly.' -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'test';
    }`

    queue.push(mainps);
    console.log("Main Test Notification pushed")
    function CheckIfRunning(){
        if(running == true) {
            setTimeout(CheckIfRunning, 1000);
            return
        } else {
            running = true;
            queue.shift(spawn("powershell",["-Command",mainps]));
            console.log("Main Test Notification shifted");
            setTimeout(function(){
                running = false;
            }, slider.valueAsNumber * 1000 + 500);
        }
        console.log("Queue Length is now: " + queue.length);
    }
    CheckIfRunning();
}

function TestRareNotification() {
    var rareps = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
    $screenshot = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).screenshot;
    $gif = '` + path.join(__dirname,"img","santoasttest.gif") + `';
    $header = New-BTHeader -Title 'Rare Achievement Unlocked! (0%)';
    $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
    $play = New-Object System.Media.SoundPlayer;
    $play.SoundLocation = $sound;
    if ($screenshot -eq 'true') {
        New-BurntToastNotification -UniqueIdentifier 'raretestss' -Text 'Steam Achievement Notifier','Your notifications are working correctly.' -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -HeroImage $gif -Silent -Header $header;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'raretestss';
    } else {
        New-BurntToastNotification -UniqueIdentifier 'raretest' -Text 'Steam Achievement Notifier','Your notifications are working correctly.' -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent -Header $header;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'raretest';
    }`

    queue.push(rareps);
    console.log("Rare Test Notification pushed")
    function CheckIfRunning(){
        if(running == true) {
            setTimeout(CheckIfRunning, 1000);
            return
        } else {
            running = true;
            queue.shift(spawn("powershell",["-Command",rareps]));
            console.log("Rare Test Notification shifted");
            setTimeout(function(){
                running = false;
            }, slider.valueAsNumber * 1000 + 500);
        }
        console.log("Queue Length is now: " + queue.length);
    }

    CheckIfRunning();
}

function OpenSoundFile() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = ".wav";

    input.onchange = function (selection) {
        var file = selection.target.files[0];
        document.getElementById("soundfile").innerHTML = file.path;
        config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        LoadSound();
    }
    
    input.click();
}

function SearchHover() {
    document.getElementById("searchhover").src = "./icons/search_black.svg";
}

function SearchOut() {
    document.getElementById("searchhover").src = "./icons/search_white.svg";
}

function LoadSound() {
    if (config.sound == "") {
        document.getElementById("soundfile").innerHTML = "Default (No Sound Selected)";
        document.getElementById("audio").src = "file:///C:/Windows/Media/Windows%20Background.wav";
    } else {
        document.getElementById("soundfile").innerHTML = config.sound;
        document.getElementById("audio").src = config.sound;
    }
}

function PreviewSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "none";
    document.getElementById("stop").style.display = "flex";
    audio.play();
    audio.addEventListener('ended', function () {
        document.getElementById("preview").style.display = "flex";
        document.getElementById("stop").style.display = "none";
    });
}

function PreviewHover() {
    document.getElementById("previewhover").src = "./icons/volume_up_black.svg";
}

function PreviewOut() {
    document.getElementById("previewhover").src = "./icons/volume_up_white.svg";
}

function StopSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "flex";
    document.getElementById("stop").style.display = "none";
    audio.pause();
    audio.currentTime = 0;
}

function OpenRareSoundFile() {
    var inputrare = document.createElement('input');
    inputrare.type = 'file';
    inputrare.accept = ".wav";

    inputrare.onchange = function (selection) {
        var filerare = selection.target.files[0];
        document.getElementById("soundfilerare").innerHTML = filerare.path;
        config["raresound"] = (filerare.path).replace("\\","\\\\").replace(":\\\\",":\\");
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        LoadRareSound();
    }
    
    inputrare.click();
}

function SearchRareHover() {
    document.getElementById("searchhoverrare").src = "./icons/search_black.svg";
}

function SearchRareOut() {
    document.getElementById("searchhoverrare").src = "./icons/search_white.svg";
}

function LoadRareSound() {
    if (config.raresound == "") {
        document.getElementById("soundfilerare").innerHTML = "Default (No Sound Selected)";
        document.getElementById("audiorare").src = "file:///C:/Windows/Media/Windows%20Background.wav";
    } else {
        document.getElementById("soundfilerare").innerHTML = config.raresound;
        document.getElementById("audiorare").src = config.raresound;
    }
}

function PreviewRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "none";
    document.getElementById("stoprare").style.display = "flex";
    audiorare.play();
    audiorare.addEventListener('ended', function () {
        document.getElementById("previewrare").style.display = "flex";
        document.getElementById("stoprare").style.display = "none";
    });
}

function PreviewRareHover() {
    document.getElementById("previewhoverrare").src = "./icons/volume_up_black.svg";
}

function PreviewRareOut() {
    document.getElementById("previewhoverrare").src = "./icons/volume_up_white.svg";
}

function StopRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "flex";
    document.getElementById("stoprare").style.display = "none";
    audiorare.pause();
    audiorare.currentTime = 0;
}

function GetPlayerName() {
    var apikey = config.apikey;
    var steam64id = config.steam64id;
    var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
    fetch(apiurl).then(response => response.json()).then((data) => {
        document.getElementById("username").innerHTML = data.response.players[0].personaname;
        document.getElementById("username").style.color = "white";
        document.getElementById("status").innerHTML = "LINKED";
        document.getElementById("status").style.color = "green";
    }).catch(error => {
        document.getElementById("username").innerHTML = "No User Detected";
        document.getElementById("username").style.color = "red";
        document.getElementById("status").innerHTML = "UNLINKED";
        document.getElementById("status").style.color = "red";
        }
    );
}

function CheckNowTracking() {
    if (config.tracking == "true") {
        document.getElementById("tracking").checked = true;
    } else {
        document.getElementById("tracking").checked = false;
    }
}

function ToggleNowTracking() {
    if (config.tracking == "false") {
        config["tracking"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">"Now Tracking" Notification: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("tracking").addEventListener('click', function(){
            clearTimeout(trackingon);
            clearTimeout(trackingoff);
        });
        var trackingon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["tracking"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">"Now Tracking" Notification: <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("tracking").addEventListener('click', function(){
            clearTimeout(trackingon);
            clearTimeout(trackingoff);
        });
        var trackingoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckNowTracking();
}

function CheckSoundOnlyMode() {
    if (config.soundonly == "true") {
        document.getElementById("soundonly").checked = true;
        document.getElementById("slider").disabled = true;
        document.getElementById("slider").style.opacity = 0.5;
        document.getElementById("slidervaluetitle").style.opacity = 0.5;
    } else {
        document.getElementById("soundonly").checked = false;
        document.getElementById("slider").disabled = false;
        document.getElementById("slider").style.opacity = 1;
        document.getElementById("slidervaluetitle").style.opacity = 1;
    }
}

function ToggleSoundOnlyMode() {
    if (config.soundonly == "false") {
        config["soundonly"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Sound-Only Mode: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("soundonly").addEventListener('click', function(){
            clearTimeout(soundonlyon);
            clearTimeout(soundonlyoff);
        });
        var soundonlyon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
        document.getElementById("slider").disabled = true;
        document.getElementById("slider").style.opacity = 0.5;
        document.getElementById("slidervaluetitle").style.opacity = 0.5;
    } else {
        config["soundonly"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Sound-Only Mode: <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("soundonly").addEventListener('click', function(){
            clearTimeout(soundonlyon);
            clearTimeout(soundonlyoff);
        });
        var soundonlyoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
        document.getElementById("slider").disabled = false;
        document.getElementById("slider").style.opacity = 1;
        document.getElementById("slidervaluetitle").style.opacity = 1;
    }
    CheckSoundOnlyMode();
}

var gamename = null;

function CheckGame() {
    var checkgame = setInterval(function() {
        var apikey = config.apikey;
        var steam64id = config.steam64id;
        var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
        fetch(apiurl).then(response => response.json()).then((data) => {
            gamename = data.response.players[0].gameextrainfo;

            if (!gamename) {
                GetGame();
                clearInterval(checkgame);
                ipcRenderer.send('idle');
            }
        
        }).catch(error => {
            console.log("ERROR: Steam credentials not supplied or incorrect! \nPlease check your API Key/Steam64 ID, and ensure \"Game Details\" is set to \"Public\" in your Steam Privacy Settings.")  
        });
    }, 1000);
}

function GetGame() {
    var getgame = setInterval(function() {
            var apikey = config.apikey;
            var steam64id = config.steam64id;
            var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
            fetch(apiurl).then(response => response.json()).then((data) => {
                gamename = data.response.players[0].gameextrainfo;
            
                if (!gamename) {
                    document.getElementById("gamestatus").innerHTML = "No Game Detected";
                    document.getElementById("gamestatus").style.color = "red";
                } else {
                    document.getElementById("gamestatus").innerHTML = gamename;
                    document.getElementById("gamestatus").style.color = "white";
                    clearInterval(getgame);
                    if (config.tracking == "true") {
                        //NEW TRACKING NOTIFICATION (WITH QUEUE)
                        var tracknotification = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        New-BurntToastNotification -UniqueIdentifier "Track" -Text "Steam Achievement Notifier","Now tracking achievements for: ${gamename}" -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent; sleep 3;
                        Remove-BTNotification -UniqueIdentifier "Track"`

                        queue.push(tracknotification);
                        console.log("Tracking Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",tracknotification]));
                                console.log("Tracking Notification shifted");
                                setTimeout(function(){
                                    running = false;
                                }, 3000);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }
                        CheckIfRunning();
                    }
                    ipcRenderer.send('track', gamename);
                    CheckGame();
                }
            }).catch(error => {
                console.log("ERROR: Steam credentials not supplied or incorrect! \nPlease check your API Key/Steam64 ID, and ensure \"Game Details\" is set to \"Public\" in your Steam Privacy Settings.")
            });
    }, 1000);
}

GetGame();

function OpenAPILink() {
    ipcRenderer.send('openapilink');
}

function OpenSteam64Link() {
    ipcRenderer.send('opensteam64link');
}

function CheckConfig() {
    if (config.apikey == "") {
        document.getElementById("apibox").value = null;
    } else {
        document.getElementById("apibox").value = config.apikey;
    }

    if (config.steam64id == "") {
        document.getElementById("steam64box").value = null;
    } else {
        document.getElementById("steam64box").value = config.steam64id;
    }
}

function CheckShortcut() {
    if (fs.existsSync(shortcut)) {
        document.getElementById("desktop").checked = true;
    } else {
        document.getElementById("desktop").checked = false;
    }
}

function CreateDesktopShortcut() {
    CheckShortcut();
    if (fs.existsSync(shortcut)) {
        document.getElementById("msg").innerHTML = "Desktop shortcut already exists";
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msg").style.color = "lightskyblue";
        document.getElementById("desktop").checked = true;
        document.getElementById("desktop").addEventListener('click', function(){
            clearTimeout(desktopon);
            clearTimeout(desktopoff);
        });
        var desktopon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        spawn("powershell.exe",["-NoExit","-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + shortcut + `'); $shortcut.IconLocation = '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save(); $sc = "steam achievement notifier (V1.71)"; $txtinfo = (Get-Culture).TextInfo; $scfix = $txtinfo.ToTitleCase($sc); Rename-Item -Path "` + shortcut + `" -NewName "$scfix.lnk"`]);
        document.getElementById("desktop").checked = true;
        document.getElementById("msg").outerHTML = '<div id="msg">Desktop Shortcut: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("desktop").checked = true;
        document.getElementById("desktop").addEventListener('click', function(){
            clearTimeout(desktopon);
            clearTimeout(desktopoff);
        });
        var desktopoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
}

function CheckAPI() {
    var apivalue = document.getElementById("apibox").value;
    if (apivalue == "" || apivalue == "Please enter a value") {
        document.getElementById("apibox").value = "Please enter a value";
        document.getElementById("apibox").style.color = "red";
        document.getElementById("saveapi").addEventListener('click', function(){
            clearTimeout(apitimer);
        });
        var apitimer = setTimeout(function() {
            document.getElementById("apibox").value = null;
            document.getElementById("apibox").style.color = "white";
        }, 2000);
    } else {
        document.getElementById("confirmapi").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("confirmapivalue").innerHTML = apivalue;
    }
}

function SaveAPI() {
    var apivalue = document.getElementById("apibox").value;
    config["apikey"] = apivalue.replace(/\s+/g, "");
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("apibox").value = apivalue;
    GetPlayerName();
    document.getElementById("confirmapi").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function SaveAPIHover() {
    document.getElementById("saveapihover").src = "./icons/save_black.svg";
}

function SaveAPIOut() {
    document.getElementById("saveapihover").src = "./icons/save_white.svg";
}

function CancelAPI() {
    document.getElementById("confirmapi").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function CheckSteam64() {
    var steam64value = document.getElementById("steam64box").value;
    if (steam64value == "" || steam64value == "Please enter a value") {
        document.getElementById("steam64box").value = "Please enter a value";
        document.getElementById("steam64box").style.color = "red";
        document.getElementById("save64").addEventListener('click', function(){
            clearTimeout(steam64timer);
        });
        var steam64timer = setTimeout(function() {
            document.getElementById("steam64box").value = null;
            document.getElementById("steam64box").style.color = "white";
        }, 2000);
    } else {
        document.getElementById("confirmsteam64").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("confirmsteam64value").innerHTML = steam64value;
    }
}

function SaveSteam64() {
    var steam64value = document.getElementById("steam64box").value;
    config["steam64id"] = steam64value.replace(/\s+/g, "");
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("steam64box").value = steam64value;
    GetPlayerName();
    document.getElementById("confirmsteam64").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function Save64Hover() {
    document.getElementById("save64hover").src = "./icons/save_black.svg";
}

function Save64Out() {
    document.getElementById("save64hover").src = "./icons/save_white.svg";
}

function CancelSteam64() {
    document.getElementById("confirmsteam64").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function ShowRareCheev() {
    var maincheev = document.getElementById("maincheevbtn");
    var rarecheev = document.getElementById("rarecheevbtn");
    var maindiv = document.getElementById("maindiv");
    var rarediv = document.getElementById("rarediv");

    maincheev.addEventListener('mouseover', function() {
        maincheev.style.opacity = 1;
    });
    maincheev.addEventListener('mouseleave', function() {
        maincheev.style.opacity = 0.5;
    });
    rarecheev.addEventListener('mouseover', function() {
        rarecheev.style.opacity = 1;
    });
    rarecheev.addEventListener('mouseleave', function() {
        rarecheev.style.opacity = 1;
    });

    maincheev.style.opacity = 0.5;
    maincheev.style.background = "rgba(32,62,122,1)";
    maincheev.style.color = "white";
    
    rarecheev.style.opacity = 1;
    rarecheev.style.background = "white";
    rarecheev.style.color = "black";

    maindiv.style.display = "none";
    rarediv.style.display = "flex";

    document.getElementById("username").style.background = "rebeccapurple";
    document.getElementById("steamimg").style.background = "rebeccapurple";
    document.getElementById("userempty").style.background = "rebeccapurple";

    document.getElementById("gamestatus").style.background = "rebeccapurple";
    document.getElementById("gameimg").style.background = "rebeccapurple";
    document.getElementById("gameempty").style.background = "rebeccapurple";
}

function ShowMainCheev() {
    var maincheev = document.getElementById("maincheevbtn");
    var rarecheev = document.getElementById("rarecheevbtn");
    var maindiv = document.getElementById("maindiv");
    var rarediv = document.getElementById("rarediv");
    
    rarecheev.addEventListener('mouseover', function() {
        rarecheev.style.opacity = 1;
    });
    rarecheev.addEventListener('mouseleave', function() {
        rarecheev.style.opacity = 0.5;
    });
    maincheev.addEventListener('mouseover', function() {
        maincheev.style.opacity = 1;
    });
    maincheev.addEventListener('mouseleave', function() {
        maincheev.style.opacity = 1;
    });

    maincheev.style.opacity = 1;
    maincheev.style.background = "white";
    maincheev.style.color = "black";
    
    rarecheev.style.opacity = 0.5;
    rarecheev.style.background = "rgba(32,62,122,1)";
    rarecheev.style.color = "white";

    maindiv.style.display = "flex";
    rarediv.style.display = "none";

    document.getElementById("username").style.background = "rgba(32,62,122,1)";
    document.getElementById("steamimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("userempty").style.background = "rgba(32,62,122,1)";

    document.getElementById("gamestatus").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameempty").style.background = "rgba(32,62,122,1)";
}

function ShowMainTest() {
    document.getElementById("testrare").style.display = "none";
    document.getElementById("test").style.display = "flex";
}

function ShowRareTest() {
    document.getElementById("test").style.display = "none";
    document.getElementById("testrare").style.display = "flex";
}

function CheckScreenshot() {
    if (config.screenshot == "true") {
        document.getElementById("screenshot").checked = true;
    } else {
        document.getElementById("screenshot").checked = false;
    }
}

function ToggleScreenshot() {
    if (config.screenshot == "false") {
        config["screenshot"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Achievement Screenshot: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("screenshot").addEventListener('click', function(){
            clearTimeout(screenshoton);
            clearTimeout(screenshotoff);
        });
        var screenshoton = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["screenshot"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Achievement Screenshot: <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("screenshot").addEventListener('click', function(){
            clearTimeout(screenshoton);
            clearTimeout(screenshotoff);
        });
        var screenshotoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckScreenshot();
}

document.getElementById("keybind").addEventListener('mouseover', function() {
    document.getElementById("keybind").style.background = "white";
    document.getElementById("keybind").style.color = "black";
    document.getElementById("keybind").style.transition = "0.2s";
})

document.getElementById("keybind").addEventListener('mouseleave', function() {
    document.getElementById("keybind").style.background = "rgba(32,62,122,1)";
    document.getElementById("keybind").style.color = "white";
    document.getElementById("keybind").style.transition = "0.2s";
});

var keybind = config.keybind;

function LoadKeybind() {
    if (keybind == "PageUp") {
        keybind = "PGUP";
    } else if (keybind == "PageDown") {
        keybind = "PGDN";
    }
    console.log("Keybind is set to: " + keybind);
    document.getElementById("keybind").innerHTML = keybind;
}

function ShowKeybindMenu() {
    document.getElementById("keybind").innerHTML = keybind;
    document.getElementById("keybindcont").style.display = "flex";
    document.getElementById("overlay").style.display = "flex";
}

function KeybindClose() {
    document.getElementById("keybind").innerHTML = keybind;
    document.getElementById("keybindcont").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function KeyDown(event) {
    var key = event.key;
    if (key == "PageUp") {
        key = "PGUP";
    } else if (key == "PageDown") {
        key = "PGDN";
    }
    config["keybind"] = key;
    keybind = key;
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("keybind").innerHTML = keybind;
}

function StopKeyDown() {
    document.removeEventListener('keydown', KeyDown);
    document.getElementById("keybind").style.background = "rgba(32,62,122,1)";
    document.getElementById("keybind").style.color = "white";
    document.getElementById("keybind").style.animation = "none";
}

function GetKeybind() {
    document.getElementById("keybind").style.animation = "bluetowhite 0.5s alternate infinite";
    document.getElementById("keybind").innerHTML = "...";
    document.addEventListener('keydown', KeyDown);
    document.addEventListener('keyup', StopKeyDown);
}

function CheckStartWin() {
    if (config.startwin == "true") {
        document.getElementById("startwin").checked = true;
    } else {
        document.getElementById("startwin").checked = false;
    }
}

function ToggleStartWin() {
    if (config.startwin == "false") {
        config["startwin"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.7).lnk") + `'); $shortcut.IconLocation = '` + path.join(__dirname,"img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save();`]);
        document.getElementById("msg").outerHTML = '<div id="msg">Start with Windows: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("startwin").addEventListener('click', function(){
            clearTimeout(startwinon);
            clearTimeout(startwinoff);
        });
        var startwinon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["startwin"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        spawn("powershell.exe",["-Command",`Remove-Item -Path '` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.7).lnk") + `'`]);
        document.getElementById("msg").outerHTML = '<div id="msg">Start with Windows: <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("startwin").addEventListener('click', function(){
            clearTimeout(startwinon);
            clearTimeout(startwinoff);
        });
        var startwinoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckStartWin();
}

function CheckStartMin() {
    if (config.startmin == "true") {
        document.getElementById("startmin").checked = true;
    } else {
        document.getElementById("startmin").checked = false;
    }
}

function ToggleStartMin() {
    if (config.startmin == "false") {
        config["startmin"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Start Minimized: <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("startmin").addEventListener('click', function(){
            clearTimeout(startminon);
            clearTimeout(startminoff);
        });
        var startminon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["startmin"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">Start Minimized: <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("startmin").addEventListener('click', function(){
            clearTimeout(startminon);
            clearTimeout(startminoff);
        });
        var startminoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckStartMin();
}

var slider = document.getElementById("slider");
var slidervalue = document.getElementById("slidervalue");

slidervalue.innerHTML = slider.value;

slider.addEventListener("input", function() {
    slidervalue.innerHTML = slider.value;
    if (slider.value < 2) {
        document.getElementById("seconds").innerHTML = "second";
    } else {
        document.getElementById("seconds").innerHTML = "seconds";
    }
    config["displaytime"] = slider.value;
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
});

function GetDisplayTime() {
    slider.value = config.displaytime;
    slidervalue.innerHTML = config.displaytime;
    if (slider.value < 2) {
        document.getElementById("seconds").innerHTML = "second";
    } else {
        document.getElementById("seconds").innerHTML = "seconds";
    }
}

var appid = null;
var currgame = null;

function SANIdle() {
    var sanidle = setInterval(function() {
        var apikey = config.apikey;
        var steam64id = config.steam64id;

        var gps = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`
        fetch(gps).then(response => response.json()).then((data) => {
            appid = data.response.players[0].gameid;
        }).catch(error => {
            error;
        });

        function StoreLocal() {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            const random = getRandomInt(9999999);
            
            var gpalocal = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}?__random=${random}`;
            fetch(gpalocal).then(response => response.json()).then((data) => {
                fs.writeFileSync(path.join(__dirname,"store","local.json"), JSON.stringify(data));
            }).catch(error => {
                error;
            });
        }

        if (!appid) {
            appid = null;
        } else {
            clearInterval(sanidle);
            currgame = appid;
            StoreLocal();
            setTimeout(function() {
                StartSAN();
            }, 500);
        }
    }, 1000);
}

SANIdle();

var url = null;
var desc = null;
var getpercent = null;

function StartSAN() {
    var local = JSON.parse(fs.readFileSync(path.join(__dirname,"store","local.json")));
    var startsan = setInterval(function() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const random = getRandomInt(9999999);

        var apikey = config.apikey;
        var steam64id = config.steam64id;

        var gps = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`
        fetch(gps).then(response => response.json()).then((data) => {
            appid = data.response.players[0].gameid;
        }).catch(error => {
            error;
        });

        var gpa = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}?__random=${random}`;
        fetch(gpa).then(response => response.json()).then((data) => {
            url = data;
        });
        var gsfg = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${apikey}&appid=${appid}&l=english&format=json`;
        fetch(gsfg).then(response => response.json()).then((data) => {
            desc = data;
        });

        for (var i = 0; i < url.playerstats.achievements.length; i++) {
            if (local.playerstats.achievements[i].achieved !== url.playerstats.achievements[i].achieved) {
                var game = url.playerstats.gameName;
                var cheev = desc.game.availableGameStats.achievements[i].displayName;
                var description = desc.game.availableGameStats.achievements[i].description;
                var icon = desc.game.availableGameStats.achievements[i].icon;

                var ggapfa = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&format=json`;
                fetch(ggapfa).then(response => response.json()).then((data) => {
                    getpercent = data;
                });

                var apiname = url.playerstats.achievements[i].apiname;
                var percentobj = getpercent.achievementpercentages.achievements
                var percent;
                percentobj.forEach(function(element) {
                    if (element.name == apiname) {
                        percent = element.percent
                        percent = +percent.toFixed(2);
                    }
                });

                function MainNotification() {
                    if (config.screenshot == "true") {
                        var maincheevss = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        Add-Type -AssemblyName System.Windows.Forms;
                        [System.Windows.Forms.SendKeys]::SendWait('{` + keybind + `}');
                        sleep -Milliseconds 50;
                        $sort = Get-ChildItem -Path '` + path.join(process.env.HOMEDRIVE,"Program Files (x86)","steam","userdata") + `' -Filter *.jpg -Recurse -File | Where { $_.FullName -notlike '*\\thumbnails\\*' } | sort LastWriteTime | select -Last 1;
                        $location = $sort.FullName;
                        $screenshot = New-BTImage -Source $location;
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "cheevss" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -HeroImage $screenshot;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "cheevss"`

                        queue.push(maincheevss);
                        console.log("Main Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",maincheevss]));
                                console.log("Main Achievement Notification w/ Screenshot shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    } else {
                        var maincheev = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "cheev" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "cheev"`

                        queue.push(maincheev);
                        console.log("Main Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",maincheev]));
                                console.log("Main Achievement Notification shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    }
                }

                function RareNotification() {
                    if (config.screenshot == "true") {
                        var rarecheevss = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        Add-Type -AssemblyName System.Windows.Forms;
                        [System.Windows.Forms.SendKeys]::SendWait('{` + keybind + `}');
                        sleep -Milliseconds 50;
                        $sort = Get-ChildItem -Path '` + path.join(process.env.HOMEDRIVE,"Program Files (x86)","steam","userdata") + `' -Filter *.jpg -Recurse -File | Where { $_.FullName -notlike '*\\thumbnails\\*' } | sort LastWriteTime | select -Last 1;
                        $location = $sort.FullName;
                        $screenshot = New-BTImage -Source $location;
                        $header = New-BTHeader -Title "Rare Achievement Unlocked! (${percent}%)";
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "rarecheevss" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -HeroImage $screenshot -Header $header;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "rarecheevss"`

                        queue.push(rarecheevss);
                        console.log("Rare Achievement Notification w/ Screenshot pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",rarecheevss]));
                                console.log("Rare Achievement Notification w/ Screenshot shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    } else {
                        var rarecheev = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        $header = New-BTHeader -Title "Rare Achievement Unlocked! (${percent}%)";
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "rarecheev" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -Header $header;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "rarecheev"`

                        queue.push(rarecheev);
                        console.log("Rare Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",rarecheev]));
                                console.log("Rare Achievement Notification shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    }
                }

                function MainSoundOnlyMode() {
                    var audio = document.getElementById("audio");
                    audio.play();
                }

                function RareSoundOnlyMode() {
                    var audiorare = document.getElementById("audiorare");
                    audiorare.play();
                }

                if (percent > 10) {
                    if (config.soundonly == "true") {
                        MainSoundOnlyMode();
                    } else {
                        MainNotification();
                    }
                    console.log(`ACHIEVEMENT UNLOCKED! | Game: ${game} | Achievement: ${cheev} | percent = ` + percent);
                } else {
                    if (config.soundonly == "true") {
                        RareSoundOnlyMode();
                    } else {
                        RareNotification();
                    }
                    console.log(`RARE ACHIEVEMENT UNLOCKED! | Game: ${game} | Achievement: ${cheev} | percent = ` + percent);
                }
                setTimeout(function() {
                    fs.writeFileSync(path.join(__dirname,"store","local.json"), JSON.stringify(url));
                    local = JSON.parse(fs.readFileSync(path.join(__dirname,"store","local.json")));
                }, 100);
            }
        }

        if (!appid) {
            appid = null;
            clearInterval(startsan);
            fs.writeFileSync(path.join(__dirname,"store","local.json"), "");
            SANIdle();
        } else if (appid !== currgame) {
            ipcRenderer.send('reloadapp');
        }
    }, 1000);
}

function DiscordIconChange() {
    document.getElementById("discord").style.opacity = 1;
    document.getElementById("discord").addEventListener("mouseleave", function() {
        document.getElementById("discord").style.opacity = 0.5;
    })
}

function OpenDiscord() {
    ipcRenderer.send('discord');
}

function GithubIconChange() {
    document.getElementById("github").style.opacity = 1;
    document.getElementById("github").addEventListener("mouseleave", function() {
        document.getElementById("github").style.opacity = 0.5;
    })
}

function ReportIssue() {
    ipcRenderer.send('report');
}