@echo off
@del /q %localappdata%\SteamAchievementNotifier\SteamAchievementNotifier.ps1
@del /q %localappdata%\SteamAchievementNotifier\systraygui.ps1
@copy %~dp0\temp\SteamAchievementNotifier.ps1 %localappdata%\SteamAchievementNotifier
@copy %~dp0\temp\systraygui.ps1 %localappdata%\SteamAchievementNotifier
echo Steam Achievement Notifier has been successfully patched to Version 1.5.
timeout /t 5
exit