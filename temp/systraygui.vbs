Dim shell,command
command = "powershell.exe -WindowStyle Hidden -ExecutionPolicy Bypass -File ""%localappdata%\SteamAchievementNotifier\systraygui.ps1"""
Set shell = CreateObject("WScript.Shell")
shell.Run command,0