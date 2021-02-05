#STEAM ACHIEVEMENT NOTIFIER - SYSLAUNCH.PS1

$steam = "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.png";

$apikeycheck = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt");
$steam64check = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt");

<#if ($apikeycheck -eq $null) {

    New-BurntToastNotification -UniqueIdentifier "api" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","Click the button to open ""apikey.txt"", paste your API Key and save!" -Button (New-BTButton -Content "Enter API Key" -Arguments "$env:localappdata\SteamAchievementNotifier\Store\apikey.txt");

    } else { Remove-BTNotification -Group "api"; }

if ($apikeycheck -ne $null -and $steam64check -eq $null) {

    New-BurntToastNotification -UniqueIdentifier "id" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","Click the button to open ""steam64id.txt"", paste your Steam64ID and save!" -Button (New-BTButton -Content "Enter Steam64ID" -Arguments "$env:localappdata\SteamAchievementNotifier\Store\steam64id.txt");

    } else { Remove-BTNotification -Group "id"; }#>

$usercheck = Invoke-RestMethod "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$apikeycheck&steamids=$steam64check";

$user = $usercheck.response.players.personaname;

#if ($apikeycheck -and $steam64check) {

    if ($user -eq $null) {

    New-BurntToastNotification -Silent -AppLogo $steam -Text "Steam Achievement Notifier","ERROR: Could not contact Steam API with supplied credentials.","Restart the application to try again." -Button (New-BTButton -Content "Check Files" -Arguments "$env:localappdata\SteamAchievementNotifier\Store\");
    Clear-Content -Path "$env:localappdata\SteamAchievementNotifier\Store\apikey.txt";
    Clear-Content -Path "$env:localappdata\SteamAchievementNotifier\Store\steam64id.txt";
    sleep 5;
    exit;

    } else {
        & Start-Process "$PSScriptRoot\SteamAchievementNotifier.ps1" -WindowStyle Hidden;
        New-BurntToastNotification -UniqueIdentifier "Welcome" -Silent -AppLogo $steam -Text "Steam Achievement Notifier","Welcome, $user!";
        sleep 5;
        Remove-BTNotification -Group "Welcome";
        }
    #}

exit;