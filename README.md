Steam Achievement Notifier
-

**Steam Achievement Notifier** is a Powershell application that shows a Windows 10 Toast Notification when you unlock any Steam Achievement!

<p align="left"><img width="585" height="236" src="https://media.giphy.com/media/HBU4sWKTzLrHmOTUlj/source.gif"></p>

Inspired by Xbox Achievement notifications for *Game Pass for PC*, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**[Version 1.5](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/1.5)** now adds a GUI to the application! Check out the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page to see all improvements and updates!

<p align="left"><img width="300" height="200" src="https://user-images.githubusercontent.com/77490730/126452901-cd141a79-418b-41fe-ae75-1565d2385a3c.png"></p>

This script uses [**BurntToast** by Windos](https://github.com/Windos/BurntToast) to display Windows 10 notifications. The setup file includes an automatic installer for the **BurntToast** module via *Powershell Gallery*.

**SETUP:**
-

1. Download "_SANGUI.zip_" from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page.
- **Also ensure to "_Unblock_" the ZIP file before extracting, or the .ps1 scripts may not be allowed to run on your system - Right-click "SANGUI.zip" > _Properties_ > Tick `Unblock` checkbox > Click `Apply`.**

2. Unzip the folder (`Right-click` > _Extract All..._ > `Extract`).
3. `Double-click` "_setup.exe_" and click the _INSTALL_ button - this will uninstall previous versions of _Steam Achievement Notifier_ and install the new required files (including the latest version of _BurntToast_). _**Note: This will also remove your previous "apikey.txt" and "steam64id.txt" files!**_
4. When the _CLOSE_ button appears, click it to close the installer and open the GUI.
5. When the GUI opens, click the _CHECK STEAM CREDENTIALS_ button and enter your _API Key_/_Steam64 ID_ and click the "_Save_" button. After valid credentials have been saved, your username will be updated and the app is ready to use!

**USAGE:**
-
  
After setup has completed, the GUI will launch. You can create a Desktop shortcut for *"Steam Achievement Notifier"* by going to the _Settings cog_ (⚙) and clicking "_Create Desktop Shortcut_". Double-click this icon to run **Steam Achievement Notifier** (otherwise, run "_setup.exe_" again to launch).

If Steam is not currently running, **Steam Achievement Notifier** will open it.

Once a game is running, **Steam Achievement Notifier** will display a notification saying:

`Now tracking achievements for <Current Game>.`

Once an achievement is unlocked, a **Toast Notification** will display containing the game name and details of the unlocked achievement!
  
🏆 Happy Achievement Hunting! 🏆

**TROUBLESHOOTING:**
-

***When the "Steam Achievement Notifier" desktop icon is clicked, it opens in Notepad/another application.***

If the shortcut opens a Notepad or other application window after double-clicking, ensure your PC is set to open .ps1 files in Powershell by default. You can do this by right-clicking the Desktop shortcut, selecting **"Open file location"**, right-click **"SteamAchievementNotifier.ps1"** (or any *".ps1"* file), select **"Properties"** and click **"Change"**. Click **"More apps"** > **"Look for another app on this PC"** > **"This PC"** and go to the following folder: `C:\Windows\system32\WindowsPowershell\v1.0\`. Select `powershell.exe` and click **"Open"**. then click **"Apply"** to set the default app to Powershell.

***Errors when running "SteamAchievementNotifier-SETUP.ps1"***

*Check your PC's *Execution-Policy**

If your PC's *Execution Policy* is set to anything other than *"Bypass"* (e.g. *"Restricted"*), the script may not be allowed to run by your system.
- You can temporarily set your Execution Policy to `bypass` to run the *"SteamAchievementNotifier-SETUP.ps1"* script by typing: `Set-ExecutionPolicy bypass`
- After setting to `bypass`, run *"SteamAchievementNotifier-SETUP.ps1"* **as Administrator** in Powershell (Search *"Powershell"* > Right-Click > *Run as Administrator* > Type or paste: `C:\Users\$env:username\Downloads\SteamAchievementNotifier\SteamAchievementNotifier-SETUP.ps1` > Press *Enter*).
- Once completed, you can set the *Execution Policy* back to it's original value by typing: `Set-ExecutionPolicy youroriginalvalue` (e.g. `Set-ExecutionPolicy restricted`)

***Please note***: *As shown by the source code, there is no malicious code included in any of the Powershell scripts or EXE files included with Steam Achievement Notifier. Powershell usually does not allow running scripts downloaded from external sources for security reasons, and as such, may need the Execution Policy of your PC to be bypassed to allow the script to run successfully.*

*Ensure "SteamAchievementNotifier-SETUP.ps1" is running as Administrator*

The **BurntToast** module cannot be installed without administrator rights. If you continue to receive an error when installing via the script, run Powershell as Administrator in new Powershell instance, and type: `Install-Module -Name BurntToast`

*Check your Steam API Key/Steam64ID*

If these are set incorrectly, the script will not be able to contact the *Steam Web API*, which will display an error. If you are still having issues after updating your API Key/Steam64ID, go to `C:\Users\%username%\AppData\Local\SteamAchievementNotifier\Store` in File Explorer and delete *"apikey.txt"* and *"steam64id.txt"*. Once deleted, click the _CHECK STEAM CREDENTIALS_ button and re-enter your credentials.

***Steam username is wrong when finishing setup***

Ensure your Steam64ID is correct. Users can have similar names on Steam, so if you are unsure whether a profile is yours when using https://steamid.io/, click the profile link on the steamid.io page, or copy your Steam Community profile URL and paste into the steamid.io search box.

***Cannot select custom sound in GUI***

Custom audio for notifications ***only*** supports **.WAV files**. If you have a custom sound you would like to use for the notification that is not in .WAV format, there are plenty of reputable MP3 to WAV converters online. An easy method for converting any audio file to .WAV is to use [https://mp3cut.net/](https://mp3cut.net/) to open your file, click the *"MP3"* drop-down in the bottom-right corner and change to *"WAV"*. Then click *"Save"* to download the .WAV version. You can then view and select your sound from the sound browser.

***Notification does not appear on screen when unlocking an achievement***

Some games do not allow Windows notifications to overlay above them if they are in "Fullscreen" mode. If you hear the achievement notification sound but don't see it, run the game in "Fullscreen Borderless" mode, which should allow notifications to appear.

If you can't see any achievement and do not hear any achievement sounds when unlocking, check your Windows "Focus Assist" settings and ensure that notifications are allowed when running games.

***Version 1.5 - Antivirus blocks "setup.exe"/"SANGUI.exe" due to malware/malicious content***

This is explained further in the [Version 1.5 release notes](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/1.5), but to briefly summarise: I have used a tool called [PowershellToEXE](https://github.com/VortexUK/PowerShellToEXE) to convert the original .ps1 files to EXE format. Unfortunately, due to some people creating malware/malicious scripts by using tools like these, a lot of Antivirus vendors automatically and incorrectly flag **ANY** files converted using various .ps1 to EXE converters (such as PowershellToEXE/PS2EXE etc.) as malicious content.

I can assure you that I have not included any malicious scripts or executables in the available downloads, but if you're still wary, I have included an alternate version of the GUI application called "SANGUI-PS1.zip" which uses Powershell .ps1 scripts in place of the EXEs. If you wish to install this version instead, please see the installation notes on the releases page linked above.

**KNOWN ISSUES:**
-

- *Powershell* asks for permission to run script at every update - Right-click *"Steam Achievement Notifier"* shortcut on the Desktop and select *"Open File Location"*. Right-Click *"SteamAchievementNotifier.ps1"* > *"Properties"* > Tick the *"Unblock"* checkbox and click *"Apply"*.
- **BurntToast** Notification removes the achievement description if the game name/achievement title is too long. I will be looking into a way to shorten the achievement name if it contains more than a certain amount of characters which would fix this issue. *Note: This also happens when the Steam achievement is "Hidden"/"Secret" - this is a limitation of the Steam Web API as "Hidden"/"Secret" achievement descriptions are updated after unlocking.*
- **BurntToast** Notification displays *"Windows Powershell"* as the AppID - this cannot easily be fixed due to a recent change in Windows 10 Notifications, but this will be updated as soon as possible.

**THANKS:**
-

Thank you for checking out this project. This is the first Powershell application I've ever created and I would love your feedback. As I'm still pretty much a novice, I'm sure there are issues in the code that would be more efficient or could be done in a better way. If you're interested in this project or if you are a programmer or application developer, I would love to hear from you if you have suggestions on how to make this even better!

**Special Thanks:**
- Adam C. for ongoing support and guidance.
- Windos for creating BurntToast Notifications.
- Steam for allowing me to use their extensive Web API for this project.
