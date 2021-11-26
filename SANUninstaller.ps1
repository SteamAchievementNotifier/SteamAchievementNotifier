###Steam Achievement Notifier (V1.7) Uninstaller###

#Gets Desktop Path
$desktop = [Environment]::GetFolderPath('Desktop')

#Deletes BurntToast config file from "Steam Achievement Notifier" app directory (Version 1.7)
Remove-Item "$env:localappdata\Temp\Steam Achievement Notifier\resources\app\BurntToast\0.8.5\config.json" -Force
#Renames original BurntToast config file for use
Rename-Item "$env:localappdata\Temp\Steam Achievement Notifier\resources\app\BurntToast\0.8.5\config.json.old" -NewName 'config.json' -Force
#Deletes entire "Steam Achievement Notifier (V1.7)" directory in %localappdata%
Remove-Item "$env:localappdata\Steam Achievement Notifier (V1.7)" -Recurse -Force
#Deletes Start Menu Shortcut
Remove-Item "$env:appdata\Microsoft\Windows\Start Menu\Programs\Steam Achievement Notifier (V1.7).lnk" -Force
#Deletes Desktop Shortcut (if present)
Remove-Item "$desktop\Steam Achievement Notifier (V1.7).lnk" -Force
#Deletes Startup shortcut (if present)
Remove-Item "$env:appdata\Microsoft\Windows\Start Menu\Programs\Startup\Steam Achievement Notifier (V1.7).lnk" -Force
#Pause to show results
Read-Host "Press any key to exit..."