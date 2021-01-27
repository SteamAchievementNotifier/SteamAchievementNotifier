#STEAM ACHIEVEMENT NOTIFIER SETUP#
#All scripts and content created by: o Jackson 1 o (https://github.com/Jackson0ne).

#This installer will set up all Steam Achievement Notifier dependencies as outlined in SteamAchievementNotifier.ps1. DO NOT MOVE "temp" folder or any files within to ensure successful installation!
#PLEASE RUN THIS SCRIPT AS ADMINISTRATOR IN POWERSHELL! (Start Menu > Search "powershell" > Right-Click before opening > "Run as Administrator").

Write-Host "Steam Achievement Notifier - Setup (Version 1.1)";
Write-Host "PLEASE RUN POWERSHELL AS ADMINISTRATOR! STEAM ACHIEVEMENT NOTIFIER WILL NOT INSTALL CORRECTLY OTHERWISE!" -ForegroundColor Red;

#Gets OS Drive Letter
$drive = ((Get-Item $PSScriptRoot).PSDrive.Name);

#UNINSTALL
#Removes existing AppData\Local\SteamAchievementNotifier .ps1 file and desktop shortcut/icon for fresh install.
if ((Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier.ps1" -PathType Leaf)) {
    Remove-Item -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
    Write-Host "SteamAchievementNotifier.ps1 deleted from ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier." -ForegroundColor Cyan;
} else { Write-Host "SteamAchievementNotifier.ps1 does not exist in ${drive}:\Users\$env:username\AppData\Local\." -ForegroundColor DarkCyan; }

if ((Test-Path "${drive}:\Users\$env:username\Desktop\Steam Achievement Notifier.lnk" -PathType Leaf)) {
    Remove-Item -Path "${drive}:\Users\$env:username\Desktop\Steam Achievement Notifier.lnk";
    Write-Host "Steam Achievement Notifier.lnk deleted from ${drive}:\Users\$env:username\Desktop\." -ForegroundColor Cyan;
} else { Write-Host "Steam Achievement Notifier.lnk does not exist in ${drive}:\Users\$env:username\Desktop\." -ForegroundColor DarkCyan; }

if ((Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\steamcheev.ico" -PathType Leaf)) {
    Remove-Item -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\steamcheev.ico";
    Write-Host "steamcheev.ico deleted from ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier." -ForegroundColor Cyan;
} else { Write-Host "steamcheev.ico does not exist in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier." -ForegroundColor DarkCyan; }

#REINSTALL
#Creates SteamAchievementNotifier folder in C:\Users\<username>\AppData\Local.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier" -PathType Container)) {
    New-Item -ItemType Directory -Force -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier" | Out-Null;
    Write-Host "SteamAchievementNotifier directory created in ${drive}:\Users\$env:username\AppData\Local\." -ForegroundColor Cyan;
} else { Write-Host "SteamAchievementNotifier directory already exists in ${drive}:\Users\$env:username\AppData\Local\." -ForegroundColor DarkCyan; }

#Creates Store directory in C:\Users\<username>\AppData\Local\SteamAchievementNotifier.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store" -PathType Container)) {
    New-Item -ItemType Directory -Force -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store" | Out-Null;
    Write-Host "Store directory created in ${drive}:\Users\$env:username\AppData\Local\." -ForegroundColor Cyan;
} else { Write-Host "Store directory already exists in ${drive}:\Users\$env:username\AppData\Local\." -ForegroundColor DarkCyan; }

#Creates "apikey.txt" in C:\Users\<username>\AppData\Local\SteamAchievementNotifier\Store.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt" | Out-Null;
    Write-Host "apikey.txt created in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "apikey.txt already exists in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Creates "steam64id.txt" in C:\Users\<username>\AppData\Local\SteamAchievementNotifier\Store.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt" | Out-Null;
    Write-Host "steam64id.txt created in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "steam64id.txt already exists in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Creates "sound.txt" in C:\Users\<username>\AppData\Local\SteamAchievementNotifier\Store.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\sound.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\sound.txt" | Out-Null;
    Write-Host "sound.txt created in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "sound.txt already exists in ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Moves "steamcheev.ico" to AppData for Desktop icon.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\steamcheev.ico" -PathType Leaf)) {
    Move-Item -Path "$PSScriptRoot\temp\steamcheev.ico" -Destination "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\steamcheev.ico";
    Write-Host "steamcheev.ico moved to ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "steamcheev.ico already exists." -ForegroundColor DarkCyan; }

#Creates "Steam Achievement Notifier" Desktop icon.
if (!(Test-Path "${drive}:\Users\$env:username\Desktop\Steam Achievement Notifier.lnk" -PathType Leaf)) {
    $shell = New-Object -ComObject WScript.Shell
    $shortcut = $shell.CreateShortcut("${drive}:\Users\$env:username\Desktop\Steam Achievement Notifier.lnk");
    $shortcut.IconLocation = "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\steamcheev.ico";
    $shortcut.TargetPath = "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
    $shortcut.Save();
    Write-Host "Steam Achievement Notifier desktop shortcut created." -ForegroundColor Cyan;
} else { Write-Host "Steam Achievement Notifier desktop shortcut already exists." -ForegroundColor DarkCyan; }

#Moves "SteamAchievementNotifier.ps1" to AppData to run from Desktop shortcut.
if (!(Test-Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier(v1.1).ps1" -PathType Leaf)) {
    Move-Item -Path "$PSScriptRoot\temp\SteamAchievementNotifier.ps1" -Destination "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
    Write-Host "SteamAchievementNotifier.ps1 moved to ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "SteamAchievementNotifier.ps1 already exists." -ForegroundColor DarkCyan; }

#Installs ""BurntToast" Powershell Module, which enables Toast Notifications for achievements.
if (!(Get-Module -ListAvailable -Name BurntToast)) {
    Write-Host "BurntToast Module not installed - Installing now." -ForegroundColor Blue;
    Write-Host "Please click Yes/Yes to All to all prompts for correct installation. For more information on the BurntToast Powershell Module, visit: https://github.com/Windos/BurntToast" -ForegroundColor Cyan;
    Write-Host "Please ensure Setup file (SteamAchievementNotifier-SETUP.ps1) is run as Administrator - BurntToast Notifications will not install otherwise! Please close Powershell and run as Administrator if you encounter an error." -ForegroundColor Red;
    Install-Module -Name BurntToast;
} else { Write-Host "BurntToastModule is already installed." -ForegroundColor DarkCyan; }

sleep 1;

#Checks for API Key, Steam64ID and Sound - Prompt in console if it doesn't exist.
$apikey = (Get-Content "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt");
$steam64ID = (Get-Content "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt");
$loc = (Get-Content "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\sound.txt");

if ($apikey -eq $null) {
    $apiprompt = Read-Host "Paste your API Key and press Enter (Get API Key here: https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey)";
    $apiprompt > ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt;
    }

if ($steam64id -eq $null) {
    $steam64prompt = Read-Host "Paste your Steam64ID and press Enter (Get Steam64ID here: https://steamid.io/lookup)";
    $steam64prompt > ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt;
    }

if ($loc -eq $null) {
    $locprompt = Read-Host "Paste the path to your Custom Audio and press Enter (Note: MUST BE A .WAV FILE!)";
    $locprompt > ${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\sound.txt;
    }

$apikeycheck = (Get-Content "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt");
$steam64check = (Get-Content "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt");
$usercheck = Invoke-RestMethod "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikeycheck&steamids=$steam64check";
$user = $usercheck.response.players.personaname;

if ($user -eq $null) {
    Write-Host "ERROR: Could not contact Steam API with supplied credentials." -ForegroundColor Red;
    Write-Host "Restarting script now - please try again and ensure credentials are correct. If error persists, please consult README.md on Steam Achievement Notifier GitHub page." -ForegroundColor Cyan;
    Remove-Item -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\apikey.txt";
    Remove-Item -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\steam64id.txt";
    Remove-Item -Path "${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\Store\sound.txt";
    sleep 5;
    cls;
    &"$PSScriptRoot\SteamAchievementNotifier-SETUP.ps1";
    exit;
    } else { Write-Host "Welcome, $user! You have successfully installed Steam Achievement Notifier (v1.1)." -ForegroundColor Green;
             Write-Host "Please close this window and start the application via the Steam Achievement Notifier shortcut on your Desktop." -ForegroundColor Green;
             Write-Host "Happy Achievement Hunting!" -ForegroundColor Green; 
      }

sleep 5;
&"${drive}:\Users\$env:username\AppData\Local\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
exit;