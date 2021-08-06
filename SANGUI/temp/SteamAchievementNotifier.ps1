#STEAM ACHIEVEMENT NOTIFIER - Version 1.5
#All scripts and content created by: o Jackson 1 o (https://github.com/Jackson0ne).
#Updated: 06/08/2021 (17:23)

#Bug Fixes:
#Fixed an issue where achievements would stop being tracked after no game was launched for an extended period. (This was due to the script process being exited and re-started multiple times, resulting in a call depth overflow error. Fixed by using in-script loops instead of restarting the process.)

#Stops errors when no game is running.
$ErrorActionPreference = "SilentlyContinue";

#Gets OS Drive Letter.
$drive = ((Get-Item $PSScriptRoot).PSDrive.Name);

#Sets path to $loc variable and sets up System SoundPlayer Object.
$sound = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\sound.txt");
$PlayWav = New-Object System.Media.SoundPlayer;
$PlayWav.SoundLocation = $sound;

#Sets $logo image for Now Tracking Notification.
$steam = "$env:localappdata\SteamAchievementNotifier\steamcheev.ico";

#Checks for API Key and Steam64ID.
$apikey = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\apikey.txt");
$steam64id = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\steam64id.txt");

#If Steam isn't already running, start it.
$steamproc = Get-Process steam;

if ($steamproc -eq $null) {

    Start-Process -FilePath "${drive}:\Program Files (x86)\Steam\steam.exe";

}

function Check-AppID {

    if (!($appid)) {

        cls;
        Write-Host "Steam Achievement Notifier: ";
        Write-Host "No Steam game detected." -ForegroundColor Red;
        sleep 2;

    } else {

        cls;
        Write-Host "Steam Achievement Notifier: ";
        Write-Host "Now tracking achievements for ${gamename}." -ForegroundColor Cyan;
        New-BurntToastNotification -UniqueIdentifier "Track" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","Now tracking achievements for ${gamename}.";
        sleep 5;
        Remove-BTNotification -Group "Track"
        break;
    
    }

}

#Loops the script.
do {

    #Loops $appid check when not in game (and breaks when game is detected).
    while(!($appid)) {

        #Stores current static game stats in AppData\Local\SteamAchievementNotifier\Store to compare with later.
        $currentgame = Invoke-RestMethod "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikey&steamids=$steam64ID";
        $appid = $currentgame.response.players.gameid;
        $gamename = $currentgame.response.players.gameextrainfo;

        Check-AppID

    }

    $getcheev = Invoke-RestMethod "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=$appid&key=$apikey&steamid=$steam64ID" | ConvertTo-Json -Compress -Depth 100 | Out-File "$env:localappdata\SteamAchievementNotifier\Store\cheev.json";
    $cheev = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\cheev.json" | ConvertFrom-Json);

    $getdesc = Invoke-RestMethod "http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=$apikey&appid=$appid&l=english&format=json" | ConvertTo-Json -Compress -Depth 100 | Out-File "$env:localappdata\SteamAchievementNotifier\Store\desc.json";
    $desc = (Get-Content "$env:localappdata\SteamAchievementNotifier\Store\desc.json" | ConvertFrom-Json);

    #Loops to compare stored stats in AppData\Local\SteamAchievementNotifier\Store to live API stats (breaks after 1 second and repeats to prevent restarting script).
    do {

        $appcheck = Invoke-RestMethod "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikey&steamids=$steam64ID";
        Clear-Variable -Name appid;
        Set-Variable -Name appid -Value $appcheck.response.players.gameid;

        $random = Get-Random -Maximum 9999999;

        $currentCheev = Invoke-RestMethod "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=$appid&key=$apikey&steamid=${steam64ID}?__random=$random";

        for ($i = 0; $i -lt $desc.game.availableGameStats.achievements.Length; $i++) {

            $gameID = $currentCheev.playerstats.gameName + ": " + $desc.game.availableGameStats.achievements[$i].displayName;
            $currentStatus = $currentCheev.playerstats.achievements[$i].achieved;
            $currentDesc = $desc.game.availableGameStats.achievements[$i].description;
            $currentIcon = $desc.game.availableGameStats.achievements[$i].icon;
            $currentName = $desc.game.availableGameStats.achievements[$i].displayName;
            $cheevBoolean = if ($currentStatus -eq 1) {"Achieved"} else {"Locked"};

        if ($currentStatus -ne $cheev.playerstats.achievements[$i].achieved) {
            New-BurntToastNotification -AppLogo $currentIcon -Silent -Text "$gameID", "$currentDesc";
            sleep -Milliseconds 275;
            $PlayWav.Play();
            Write-Host Achievement ($i+1) """$currentName"" | ($currentDesc) |" $cheevBoolean;
            $cheev.playerstats.achievements[$i].achieved = $currentStatus;

        }
    }

    sleep 1;

    break;

    } while($appid);

} while($true);