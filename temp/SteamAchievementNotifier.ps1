#STEAM ACHIEVEMENT NOTIFIER - Version 1.6
#All scripts and content created by: o Jackson 1 o (https://github.com/Jackson0ne).
#Updated: 21/08/2021 (14:30)

#Bug Fixes:
#Changed API link to use "https" protocol instead of "http".

#Stops errors when no game is running.
$ErrorActionPreference = "SilentlyContinue";

#Adds WinForms to get Key Inputs for Steam screenshots.
Add-Type -AssemblyName System.Windows.Forms;

#Sets path to $loc variable and sets up System SoundPlayer Object.
$sound = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\sound.txt");
$PlayWav = New-Object System.Media.SoundPlayer;
$PlayWav.SoundLocation = $sound;

#Sets $logo image for Now Tracking Notification.
$steam = "$env:localappdata\SteamAchievementNotifier\steamcheev.ico";

$gif = "$env:userprofile\Videos\sananim.gif"

#Checks for API Key and Steam64ID.
$apikey = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\apikey.txt");
$steam64id = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\steam64id.txt");

#If Steam isn't already running, start it.
$steamproc = Get-Process steam;
if ($steamproc -eq $null) {

    $Error.Clear()
    Start-Process -FilePath "${env:ProgramFiles(x86)}\Steam\steam.exe";

}

#Stores current static game stats in AppData\Local\SteamAchievementNotifier\Store to compare with later.
$currentgame = Invoke-RestMethod "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikey&steamids=$steam64ID";
$appid = $currentgame.response.players.gameid;
$gamename = $currentgame.response.players.gameextrainfo;

#Takes a Steam screenshot and adds it to a Toast notification.
function Show-Screenshot {

    $getpercent = (Invoke-WebRequest "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=$appid&format=json" -UseBasicParsing | ConvertFrom-Json).achievementpercentages.achievements[$i].percent;
    $percent = [Math]::Round($getpercent,2);

    [System.Windows.Forms.SendKeys]::SendWait("{F12}");

    sleep -Milliseconds 50;

    $sort = Get-ChildItem -Path "${env:ProgramFiles(x86)}\steam\userdata" -Filter *.jpg -Recurse -File | Where { $_.FullName -notlike "*\thumbnails\*" } | sort LastWriteTime | select -Last 1;
    $location = $sort.FullName;

    $screenshot = New-BTImage -Source $location;

    if ($percent -gt "10") {

        New-BurntToastNotification -AppLogo $currentIcon -Silent -Text "$gameID", "$currentDesc" -HeroImage $screenshot;

    } else {
            
        $rareheader = New-BTHeader -Title "Rare Steam Achievement Unlocked! (${percent}%)"
        New-BurntToastNotification -AppLogo $currentIcon -Silent -Text "$gameID", "$currentDesc" -HeroImage $screenshot -Header $rareheader;

    }

}

#Shows normal notification.
function Show-Notification {

    $getpercent = (Invoke-WebRequest "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=$appid&format=json" -UseBasicParsing | ConvertFrom-Json).achievementpercentages.achievements[$i].percent;
    $percent = [Math]::Round($getpercent,2);

    if ($percent -gt "10") {
        
        New-BurntToastNotification -AppLogo $currentIcon -Silent -Text "$gameID", "$currentDesc";

    } else {

        $rareheader = New-BTHeader -Title "Rare Steam Achievement Unlocked! (${percent}%)"
        New-BurntToastNotification -AppLogo $currenticon -Silent -Text "$gameID", "$currentDesc" -Header $rareheader

    }

}

if ($appid -eq $null) {

    cls;
    Write-Host "Steam Achievement Notifier: ";
    Write-Host "No Steam game detected." -ForegroundColor Red;
    sleep 2;
    &"$PSScriptRoot\SteamAchievementNotifier.ps1";
    [System.GC]::Collect()
    $Error.Clear()
    exit;

} else {

    cls;
    Write-Host "Steam Achievement Notifier: ";
    Write-Host "Now tracking achievements for ${gamename}." -ForegroundColor Cyan;
    New-BurntToastNotification -UniqueIdentifier "Track" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","Now tracking achievements for ${gamename}.";
    sleep 5;
    Remove-BTNotification -Group "Track"
    cls;

    }

$getcheev = Invoke-RestMethod "https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=$appid&key=$apikey&steamid=$steam64ID" | ConvertTo-Json -Compress -Depth 100 | Out-File "$env:localappdata\SteamAchievementNotifier\Store\cheev.json";
$cheev = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\cheev.json" | ConvertFrom-Json);

$getdesc = Invoke-RestMethod "https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=$apikey&appid=$appid&l=english&format=json" | ConvertTo-Json -Compress -Depth 100 | Out-File "$env:localappdata\SteamAchievementNotifier\Store\desc.json";
$desc = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\desc.json" | ConvertFrom-Json);

#Loops to compare stored stats in AppData\Local\SteamAchievementNotifier\Store to live API stats.
do {
    
    $appcheck = Invoke-RestMethod "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikey&steamids=$steam64ID";
    Clear-Variable -Name appid;
    Set-Variable -Name appid -Value $appcheck.response.players.gameid;
    if ($appid -eq $null) {

        cls;
        Write-Host "Steam Achievement Notifier: ";
        Write-Host "No Steam game detected." -ForegroundColor Red;
        sleep 2;
        &"$PSScriptRoot\SteamAchievementNotifier.ps1";
        $Error.Clear()
        [System.GC]::Collect()
        exit;

        }

    $random = Get-Random -Maximum 9999999;

    $currentCheev = Invoke-RestMethod "https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=$appid&key=$apikey&steamid=${steam64ID}?__random=$random";

    for ($i = 0; $i -lt $desc.game.availableGameStats.achievements.Length; $i++) {

        $gameID = $currentCheev.playerstats.gameName + ": " + $desc.game.availableGameStats.achievements[$i].displayName;
        $currentStatus = $currentCheev.playerstats.achievements[$i].achieved;
        $currentDesc = $desc.game.availableGameStats.achievements[$i].description;
        $currentIcon = $desc.game.availableGameStats.achievements[$i].icon;
        $currentName = $desc.game.availableGameStats.achievements[$i].displayName;
        $cheevBoolean = if ($currentStatus -eq 1) {"Achieved"} else {"Locked"};

    if ($currentStatus -ne $cheev.playerstats.achievements[$i].achieved) {
        
        $checkss = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\screenshot.txt");

        if ($checkss -eq "1") {

            Show-Screenshot;

        } else {

            Show-Notification

        }
        
        sleep -Milliseconds 275;
        $PlayWav.Play();

        $cheev.playerstats.achievements[$i].achieved = $currentStatus;

        }

    }

    $Error.Clear()
    sleep 1;

} while ($true);