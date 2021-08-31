Steam Achievement Notifier
-

**Steam Achievement Notifier** is a Powershell application that shows a Windows 10 Toast Notification when you unlock any Steam Achievement!

<p align="left"><img width="585" height="236" src="https://media.giphy.com/media/HBU4sWKTzLrHmOTUlj/source.gif"></p>

Inspired by Xbox Achievement notifications for *Game Pass for PC*, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**[Version 1.6](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.6/SANGUI-V1.61.zip)** now adds a GUI to the application, along with support for displaying an in-game Steam screenshot in the notification! Check out the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page to see all improvements and updates!

<p align="left"><img width="300" height="200" src="https://user-images.githubusercontent.com/77490730/126452901-cd141a79-418b-41fe-ae75-1565d2385a3c.png"></p>

This script uses [**BurntToast** by Windos](https://github.com/Windos/BurntToast) to display Windows 10 notifications. The setup file includes an automatic installer for the **BurntToast** module via *Powershell Gallery*.

**SETUP:**
-

1. Download "*[SANGUI-V1.61.zip](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.6/SANGUI-V1.61.zip)*" (or download from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page).
- **Also ensure to "_Unblock_" the ZIP file before extracting, or the .ps1 scripts may not be allowed to run on your system - Right-click "SANGUI-V1.61.zip" > _Properties_ > Tick `Unblock` checkbox > Click `Apply`.**

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

***Achievements are not being tracked***

Check your API Key/Steam64 ID values. If these are set incorrectly, the script will not be able to contact the *Steam Web API*, which will display an error. If you are still having issues after updating your API Key/Steam64ID, go to `C:\Users\%username%\AppData\Local\SteamAchievementNotifier\Store` in File Explorer and delete *"apikey.txt"* and *"steam64id.txt"*. Once deleted, click the _CHECK STEAM CREDENTIALS_ button and re-enter your credentials.

***Steam username is wrong when finishing setup***

Ensure your Steam64ID is correct. Users can have similar names on Steam, so if you are unsure whether a profile is yours when using https://steamid.io/, click the profile link on the steamid.io page, or copy your Steam Community profile URL and paste into the steamid.io search box.

***Cannot select custom sound in GUI***

Custom audio for notifications ***only*** supports **.WAV files**. If you have a custom sound you would like to use for the notification that is not in .WAV format, there are plenty of reputable MP3 to WAV converters online. An easy method for converting any audio file to .WAV is to use [https://mp3cut.net/](https://mp3cut.net/) to open your file, click the *"MP3"* drop-down in the bottom-right corner and change to *"WAV"*. Then click *"Save"* to download the .WAV version. You can then view and select your sound from the sound browser.

***Notification does not appear on screen when unlocking an achievement***

Some games do not allow Windows notifications to overlay above them if they are in "Fullscreen" mode. If you hear the achievement notification sound but don't see it, run the game in "Fullscreen Borderless" mode, which should allow notifications to appear.

If you can't see any achievement and do not hear any achievement sounds when unlocking, check your Windows "Focus Assist" settings and ensure that notifications are allowed when running games.

***Version 1.6 - Antivirus blocks "setup.exe"/"SANGUI.exe" due to malware/malicious content***

This is explained further in the [Version 1.4 release notes](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/1.6), but to briefly summarise: I have used a tool called [PS2EXE](https://github.com/MScholtes/PS2EXE) to convert the original .ps1 files to EXE format. Unfortunately, due to some people creating malware/malicious scripts by using tools like these, a lot of Antivirus vendors automatically and incorrectly flag **ANY** files converted using various .ps1 to EXE converters (such as PS2EXE) as malicious content.

I can assure you that I have not included any malicious scripts or executables in the available downloads, and will attempt to remove any false positive reports from antivirus companies stating otherwise.

If you are unable to download via your browser due to an error such as "*Download blocked: File contains malware*", you can download it via Powershell directly by pasting the following command:
`Invoke-WebRequest "https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.6/SANGUI-V1.61.zip" -outfile "$env:userprofile\Downloads\SANGUI-V1.61.zip"`.

**KNOWN ISSUES:**
-

- *Powershell* asks for permission to run script at every update - Right-click *"Steam Achievement Notifier"* shortcut on the Desktop and select *"Open File Location"*. Right-Click *"SteamAchievementNotifier.ps1"* > *"Properties"* > Tick the *"Unblock"* checkbox and click *"Apply"*.
- **BurntToast** Notification removes the achievement description if the game name/achievement title is too long. I will be looking into a way to shorten the achievement name if it contains more than a certain amount of characters which would fix this issue. *Note: This also happens when the Steam achievement is "Hidden"/"Secret" - this is a limitation of the Steam Web API as "Hidden"/"Secret" achievement descriptions are updated after unlocking.*
- **BurntToast** Notification displays *"Windows Powershell"* as the AppID - **Now fixed in Version 1.6!**

**THANKS:**
-

Thank you for checking out this project. This is the first Powershell application I've ever created and I would love your feedback. As I'm still pretty much a novice, I'm sure there are issues in the code that would be more efficient or could be done in a better way. If you're interested in this project or if you are a programmer or application developer, I would love to hear from you if you have suggestions on how to make this even better!

**Special Thanks:**
- Adam C. for ongoing support and guidance.
- Windos for creating BurntToast Notifications.
- Steam for allowing me to use their extensive Web API for this project.
