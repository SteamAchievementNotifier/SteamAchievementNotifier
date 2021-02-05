#STEAM ACHIEVEMENT NOTIFIER SETUP#
#All scripts and content created by: o Jackson 1 o (https://github.com/Jackson0ne), except "systray.ps1, modified from and created by: Adam The Automator (https://www.adamtheautomator.com).

#This installer will set up all Steam Achievement Notifier dependencies as outlined in SteamAchievementNotifier.ps1. DO NOT MOVE "temp" folder or any files within to ensure successful installation!
#PLEASE RUN THIS SCRIPT AS ADMINISTRATOR IN POWERSHELL! (Start Menu > Search "powershell" > Right-Click before opening > "Run as Administrator").

#Suppress errors in console.
$ErrorActionPreference = "SilentlyContinue";

#Sets .ps1 files to open in Powershell by default (instead of Notepad).
cmd /c ftype Microsoft.PowershellScript.1=C:\Windows\system32\WindowsPowershell\v1.0\powershell.exe %1 *%
cls;

Write-Host "Steam Achievement Notifier - Setup (Systray Update)";

#Gets OS Drive Letter
$drive = ((Get-Item $PSScriptRoot).PSDrive.Name);

#Sets Execution Policy for local PC to "Bypass", in order to run scripts correctly.
Set-ExecutionPolicy Bypass -Force;

#UNINSTALL
#Removes existing %localappdata%\SteamAchievementNotifier .ps1 file and desktop shortcut/icon for fresh install.
if ((Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\SteamAchievementNotifier.ps1" -PathType Leaf)) {
    Remove-Item -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
    Write-Host "SteamAchievementNotifier.ps1 deleted from $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
} else { Write-Host "SteamAchievementNotifier.ps1 does not exist in $env:LOCALAPPDATA." -ForegroundColor DarkCyan; }

if ((Test-Path "$env:userprofile\Desktop\Steam Achievement Notifier.lnk" -PathType Leaf)) {
    Remove-Item -Path "$env:userprofile\Desktop\Steam Achievement Notifier.lnk";
    Write-Host "Steam Achievement Notifier.lnk deleted from $env:userprofile\Desktop\." -ForegroundColor Cyan;
} else { Write-Host "Steam Achievement Notifier.lnk does not exist in $env:userprofile\Desktop\." -ForegroundColor DarkCyan; }

if ((Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico" -PathType Leaf)) {
    Remove-Item -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico";
    Write-Host "steamcheev.ico deleted from $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
} else { Write-Host "steamcheev.ico does not exist in $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor DarkCyan; }

#REINSTALL
#Creates SteamAchievementNotifier folder in %localappdata%.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier" -PathType Container)) {
    New-Item -ItemType Directory -Force -Path "$env:LOCALAPPDATA\SteamAchievementNotifier" | Out-Null;
    Write-Host "SteamAchievementNotifier directory created in $env:LOCALAPPDATA." -ForegroundColor Cyan;
} else { Write-Host "SteamAchievementNotifier directory already exists in $env:LOCALAPPDATA." -ForegroundColor DarkCyan; }

#Creates Store directory in %localappdata%\SteamAchievementNotifier.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store" -PathType Container)) {
    New-Item -ItemType Directory -Force -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store" | Out-Null;
    Write-Host "Store directory created in $env:LOCALAPPDATA." -ForegroundColor Cyan;
} else { Write-Host "Store directory already exists in $env:LOCALAPPDATA." -ForegroundColor DarkCyan; }

#Creates "apikey.txt" in %localappdata%\SteamAchievementNotifier\Store.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt" | Out-Null;
    Write-Host "apikey.txt created in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "apikey.txt already exists in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Creates "steam64id.txt" in %localappdata%\SteamAchievementNotifier\Store.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt" | Out-Null;
    Write-Host "steam64id.txt created in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "steam64id.txt already exists in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Creates "sound.txt" in %localappdata%\SteamAchievementNotifier\Store.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\sound.txt" -PathType Leaf)) {
    New-Item -ItemType File -Force -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\sound.txt" | Out-Null;
    Write-Host "sound.txt created in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor Cyan;
} else { Write-Host "sound.txt already exists in $env:LOCALAPPDATA\SteamAchievementNotifier\Store." -ForegroundColor DarkCyan; }

#Copies "steamcheev.ico" to %localappdata% for Desktop icon.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico" -PathType Leaf)) {
    Copy-Item -Path "$PSScriptRoot\steamcheev.ico" -Destination "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico";
    Write-Host "steamcheev.ico moved to $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "steamcheev.ico already exists." -ForegroundColor DarkCyan; }

#Copies "steamcheev.png" to %localappdata% for Steam Achievement Notifier -AppLogo in notifications.
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.png" -PathType Leaf)) {
    Copy-Item -Path "$PSScriptRoot\steamcheev.png" -Destination "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.png";
    Write-Host "steamcheev.png moved to $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "steamcheev.png already exists." -ForegroundColor DarkCyan; }

#Creates "Steam Achievement Notifier" Desktop icon.
if (!(Test-Path "$env:userprofile\Desktop\Steam Achievement Notifier.lnk" -PathType Leaf)) {
    $shell = New-Object -ComObject WScript.Shell
    $shortcut = $shell.CreateShortcut("$env:userprofile\Desktop\Steam Achievement Notifier.lnk");
    $shortcut.IconLocation = "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico";
    $shortcut.TargetPath = "$env:LOCALAPPDATA\SteamAchievementNotifier\systray.ps1";
    $shortcut.Save();
    Write-Host "Steam Achievement Notifier desktop shortcut created." -ForegroundColor Cyan;
} else { Write-Host "Steam Achievement Notifier desktop shortcut already exists." -ForegroundColor DarkCyan; }

#Copies "SteamAchievementNotifier.ps1" to %localappdata% folder (Started by: "syslaunch.ps1").
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\SteamAchievementNotifier.ps1" -PathType Leaf)) {
    Copy-Item -Path "$PSScriptRoot\SteamAchievementNotifier.ps1" -Destination "$env:LOCALAPPDATA\SteamAchievementNotifier\SteamAchievementNotifier.ps1";
    Write-Host "SteamAchievementNotifier.ps1 moved to $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "SteamAchievementNotifier.ps1 already exists." -ForegroundColor DarkCyan; }

#Copies "syslaunch.ps1" to %localappdata% folder (Started by: "systray.ps1").
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\syslaunch.ps1" -PathType Leaf)) {
    Copy-Item -Path "$PSScriptRoot\syslaunch.ps1" -Destination "$env:LOCALAPPDATA\SteamAchievementNotifier\syslaunch.ps1";
    Write-Host "syslaunch.ps1 moved to $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "syslaunch.ps1 already exists." -ForegroundColor DarkCyan; }

#Copies "systray.ps1" to %localappdata% folder (Started by: "Steam Achievement Notifier.lnk").
if (!(Test-Path "$env:LOCALAPPDATA\SteamAchievementNotifier\systray.ps1" -PathType Leaf)) {
    Copy-Item -Path "$PSScriptRoot\systray.ps1" -Destination "$env:LOCALAPPDATA\SteamAchievementNotifier\systray.ps1";
    Write-Host "systray.ps1 moved to $env:LOCALAPPDATA\SteamAchievementNotifier." -ForegroundColor Cyan;
    } else { Write-Host "systray.ps1 already exists." -ForegroundColor DarkCyan; }

#Installs ""BurntToast" Powershell Module, which enables Toast Notifications for achievements.
if (!(Get-Module -ListAvailable -Name BurntToast)) {
    Write-Host "BurntToast Module not installed - Installing now." -ForegroundColor Blue;
    #Write-Host "Please select Yes [Y]/Yes to All [A] to all prompts for correct installation. For more information on the BurntToast Powershell Module, visit: https://github.com/Windos/BurntToast" -ForegroundColor Magenta;
    Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force | Out-Null;
    Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted;
    Install-Module -Name BurntToast;
    Write-Host "BurntToast Module - Installation complete." -ForegroundColor Green;
} else { Write-Host "BurntToastModule is already installed." -ForegroundColor DarkCyan; }

sleep 1;
cls;

$steam = "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.png";

#Checks for API Key, Steam64ID and Sound - Prompt in console if it doesn't exist.
$apikey = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt");
$steam64ID = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt");
$loc = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\sound.txt");

if ($apikey -eq $null) {

    Write-Host "Enter/Paste your ""API Key"" and press ""Enter""." -ForegroundColor Green;
    Write-Host "Tip:  Click ""Get API Key"" in the notification to get your API Key." -ForegroundColor Magenta;
    New-BurntToastNotification -UniqueIdentifier "key" -Sound Mail -HeroImage "$PSScriptRoot\api.gif" -AppLogo $steam -Text "Steam Achievement Notifier","Click below to get your API Key and paste it into the ""Setup"" window." -Button (New-BTButton -Content "Get API Key" -Arguments "https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey");
    $apiprompt = Read-Host "API Key";
    Remove-BTNotification -Group "key";
    $apiprompt > $env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt;

    }

if ($steam64id -eq $null) {

    Write-Host "Enter/Paste your ""Steam64ID"" and press ""Enter"" (Get Steam64ID here: )" -ForegroundColor Green;
    Write-Host "Tip: Click ""Get Steam64ID"" in the notification to get your Steam64ID." -ForegroundColor Magenta;
    New-BurntToastNotification -UniqueIdentifier "64" -Sound Mail -HeroImage "$PSScriptRoot\64.gif" -AppLogo $steam -Text "Steam Achievement Notifier","Click below to get your Steam64ID and paste it into the ""Setup"" window." -Button (New-BTButton -Content "Get Steam64ID" -Arguments "https://steamid.io/lookup");
    $steam64prompt = Read-Host "Steam64ID";
    Remove-BTNotification -Group "64";
    $steam64prompt > $env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt;

    }

if ($loc -eq $null) {

    Write-Host "Enter/Paste the path to your .WAV audio file and press ""Enter""" -ForegroundColor Green;
    Write-Host "NOTE: AUDIO MUST BE IN .WAV FORMAT!" -ForegroundColor Red;
    Write-Host "Tip: You can get the path to your .WAV file as text by holding ""Shift"" and right-clicking the file, and selecting ""Copy as path""." -ForegroundColor Magenta;
    New-BurntToastNotification -UniqueIdentifier "path" -Sound Mail -HeroImage "$PSScriptRoot\copy.gif" -AppLogo $steam -Text "Steam Achievement Notifier","Paste your .WAV audio path into the ""Setup"" window.";
    $locprompt = Read-Host "Custom Audio Path";
    Remove-BTNotification -Group "path";
    $locprompt > $env:LOCALAPPDATA\SteamAchievementNotifier\Store\sound.txt;

    }

$apikeycheck = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt");
$steam64check = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt");
$usercheck = Invoke-RestMethod "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikeycheck&steamids=$steam64check";
$user = $usercheck.response.players.personaname;

Write-Host "Contacting Steam API with supplied user credentials..." -ForegroundColor Cyan;

if ($user -eq $null) {
    Write-Host "ERROR: Could not contact Steam API with supplied credentials." -ForegroundColor Red;
    New-BurntToastNotification -UniqueIdentifier "error" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","ERROR: Could not contact Steam API with supplied credentials. Click ""Check Files"" to edit config files, or restart the installer from the script to try again." -Button (New-BTButton -Content "Check Files" -Arguments "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\");
    Clear-Content -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt";
    Clear-Content -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt";
    Clear-Content -Path "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\sound.txt";
    Read-Host "Press any key to restart setup";
    cls;
    Remove-BTNotification -Group "error";
    &"$PSScriptRoot\SteamAchievementNotifier-SETUP.ps1";
    exit;
    } else { Write-Host "Welcome, $user! You have successfully installed Steam Achievement Notifier (Systray Update)." -ForegroundColor Green;
             Write-Host "Please close this window and start the application via the Steam Achievement Notifier shortcut on your Desktop." -ForegroundColor Green;
             Write-Host "Happy Achievement Hunting!" -ForegroundColor Green;
             New-BurntToastNotification -UniqueIdentifier "setup" -AppLogo $steam -Sound IM -Text "Steam Achievement Notifier","Welcome, $user! Setup is now complete.";
      }

sleep 5;
Remove-BTNotification -Group "setup";
exit;