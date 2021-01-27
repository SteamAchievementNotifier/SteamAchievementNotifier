Steam Achievement Notifier
-

**Steam Achievement Notifier** is a Powershell application that shows a Windows 10 Toast Notification when you unlock any Steam Achievement!

![notification](https://media.giphy.com/media/HBU4sWKTzLrHmOTUlj/source.gif)

Inspired by Xbox Achievement notifications for *Game Pass for PC*, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification. Includes a setup file ("SteamAchievementNotifier-SETUP.ps1") to automatically set up all dependencies and prompts for *Steam API Key*/*Steam64ID* ***(This must be run as Administrator).***

**[Version 1.1](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/v1.1)** introduces **Custom Audio** for achievement notifications! *(.WAV Files only.)*

This script uses [**BurntToast** by Windos](https://github.com/Windos/BurntToast) to display Windows 10 notifications. The setup file includes an automatic installer for the **BurntToast** module via *Powershell Gallery*.

**SETUP:**
-
  
1. Download the latest version of **Steam Achievement Notifier** from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page.

2. In your Downloads folder, right-click *"SteamAchievementNotifier.zip"*, select *"Extract All..."* and click the *"Extract"* button.

3. Before running, please check your *Execution Policy* settings in Powershell:

* Search *"Powershell"* in the Windows Start Menu, right-click (before opening) and select *"Run As Administrator"*.
* When loaded, type: `Get-ExecutionPolicy`
* If your PC's *Execution Policy* is set to anything other than `bypass` (e.g. `restricted`), the script may not be allowed to run by your system. Please see the ***Troubleshooting*** section below for instructions on how to update your PC's *Execution Policy*.

4. In order for the **BurntToast** Powershell module to install, *"SteamAchievementNotifier-SETUP.ps1"* will need to be run as Administrator:

- Search *"Powershell"* in the Windows Start Menu.
- **Before opening**, right-click and select *"Run as Administrator"*.
- Type or paste: `C:\Users\$env:username\Downloads\SteamAchievementNotifier\SteamAchievementNotifier-SETUP.ps1`
- Press *Enter* to run the script.

When prompted to install the **BurntToast** module, select **"Yes To All"** for complete installation and install all required dependencies.

5. You will then be prompted to enter your *Steam API Key* - a valid API Key is required to access links to the Steam Web API (included in the script) which will display personal stats for your account. You can obtain a *Steam API Key* by following [this link](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey), logging in with your Steam credentials and completing the form. Once you have obtained your API Key, copy and paste it into the Powershell console and press *Enter*.

6. You will then be prompted to enter your *Steam64ID* - this is a unique identifier for your Steam account and is also used in links within the script. You can find your *Steam64ID* by going to [this link](https://steamid.io/) and either searching for your Steam profile or by pasting your profile URL into the search box.

7. You will then be prompted to enter the path to your .WAV file to be used for your Custom Audio notification sound. Find the desired .WAV file in Windows Explorer, **hold shift** and **right-click** the file and select *"Copy as path"* - then paste the path into the *"SteamAchievementNotifier-SETUP.ps1"* window and press *Enter*.

8. Once completed, the setup script will confirm your Steam username and will automatically run *"SteamAchievementNotifier.ps1"*.

**USAGE:**
-
  
After setup has completed, a desktop shortcut called *"Steam Achievement Notifier"* will appear on your Desktop. Double-click this icon to run **Steam Achievement Notifier**.

If Steam is not currently running, **Steam Achievement Notifier** will open it.

If you are not currently playing a game, **Steam Achievement Notifier** will display: `No Steam game detected.`

Once a game is running, **Steam Achievement Notifier** will display: `Now tracking achievements for <Current Game>.`

Once an achievement is unlocked, a **Toast Notification** will display containing the game name and details of the achievement and confirmation of the achievement will be printed in the Powershell console!
  
Happy Achievement Hunting!

**TROUBLESHOOTING:**
-

***When the "Steam Achievement Notifier" desktop icon is clicked, it opens in Notepad/another application.***

If the shortcut opens a Notepad or other application window after double-clicking, ensure your PC is set to open .ps1 files in Powershell by default. You can do this by right-clicking the desktop shortcut, selecting **"Open file location"**, right-click **"SteamAchievementNotifier.ps1"**, select **"Properties"** and click **"Change"** - then select *"Powershell"* from the list.)

***Errors when running "SteamAchievementNotifier-SETUP.ps1"***

*Check your PC's *Execution-Policy**

If your PC's *Execution Policy* is set to anything other than *"Bypass"* (e.g. *"Restricted"*), the script may not be allowed to run by your system.
- You can temporarily set your Execution Policy to `bypass` to run the *"SteamAchievementNotifier-SETUP.ps1"* script by typing: `Set-ExecutionPolicy bypass`
- After setting to `bypass`, run *"SteamAchievementNotifier-SETUP.ps1"* **as Administrator** in Powershell (Search *"Powershell"* > Right-Click > *Run as Administrator* > Type or paste: `C:\Users\$env:username\Downloads\SteamAchievementNotifier\SteamAchievementNotifier-SETUP.ps1` > Press *Enter*).
- Once completed, you can set the *Execution Policy* back to it's original value by typing: `Set-ExecutionPolicy youroriginalvalue` (e.g. `Set-ExecutionPolicy restricted`)

***Please note***: *As shown by the source code, there is no malicious code included in any of the two Powershell scripts included with Steam Achievement Notifier (**"SteamAchievementNotifier-SETUP.ps1"**/**"SteamAchievementNotifier.ps1"**). Powershell usually does not allow running scripts downloaded from external sources for security reasons, and as such, may need the Execution Policy of your PC to be bypassed to allow the script to run successfully.*

*Ensure "SteamAchievementNotifier-SETUP.ps1" is running as Administrator*

The **BurntToast** module cannot be installed without administrator rights. If you continue to receive an error when installing via the script, run Powershell as Administrator in new Powershell instance, and type: `Install-Module -Name BurntToast`

*Check your Steam API Key/Steam64ID*

If these are set incorrectly, the script will not be able to contact the *Steam Web API*, which will display an error. If you are still having issues after updating your API Key/Steam64ID, go to `C:\Users\%username%\AppData\Local\SteamAchievementNotifier\Store` in File Explorer and delete *"apikey.txt"* and *"steam64id.txt"*. Once deleted, run the setup script again (as Administrator).

***Steam username is wrong when finishing setup***

Ensure your Steam64ID is correct. Users can have similar names on Steam, so if you are unsure whether a profile is yours when using https://steamid.io/, click the profile link on the steamid.io page, or copy your Steam Community profile URL and paste into the steamid.io search box.

***Version 1.1 - No Sound with achievement notification***

Custom audio for notifications ***only*** supports **.WAV files**. If you have a custom sound you would like to use for the notification that is not in .WAV format, there are plenty of reputable MP3 to WAV converters online. An easy method for converting any audio file to .WAV is to use [https://mp3cut.net/](https://mp3cut.net/) to open your file, click the *"MP3"* drop-down in the bottom-right corner and change to *"WAV"*. Then click *"Save"* to download the .WAV version. You can then follow the steps outlined on the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page to add the path to your new .WAV file.

If you want to change your audio file at any point, go to `C:\Users\%username%\%localappdata%\SteamAchievementNotifier\Store`, open `sound.txt`, replace the existing path with the path to your new file and save `sound.txt`.

**KNOWN ISSUES:**
-

- *SteamAchievementNotifier-SETUP.ps1* may give an error if incorrect API Key/Steam64ID values are entered, and then correct API Key/Steam64ID values are re-entered when prompted. If this occurs, close the powershell window and restart the script. If the issue persists, go to `C:\Users\%username%\AppData\Local\SteamAchievementNotifier\Store` in File Explorer and delete *"apikey.txt"* and *"steam64id.txt"*. Once deleted, run the setup script again.
- *Powershell* asks for permission to run script at every update - Right-click *"Steam Achievement Notifier"* shortcut on the Desktop and select *"Open File Location"*. Right-Click *"SteamAchievementNotifier.ps1"* > *"Properties"* > Tick the *"Unblock"* checkbox and click *"Apply"*.
- **BurntToast** Notification removes the achievement description if the game name/achievement title is too long. I will be looking into a way to shorten the achievement name if it contains more than a certain amount of characters which would fix this issue. *Note: This also happens when the Steam achievement is "Hidden"/"Secret" - this is a limitation of the Steam Web API as "Hidden"/"Secret" achievement descriptions are updated after unlocking.*
- **BurntToast** Notification displays *"Windows Powershell"* as the AppID - this cannot easily be fixed due to a recent change in Windows 10 Notifications, but this will be updated as soon as possible.
- **[Version 1.0](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/v1.0) only (Custom Audio is supported in [Version 1.1](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/v1.1))**: When using Steam Achievement Notifier - Version 1.0, Achievement sound cannot be changed to custom audio - this is a limitation of the **BurntToast** module, so by default, the Windows "IM" sound is used. **Please update to [Version 1.1](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/v1.1) to use Custom Audio notification sounds**. You can use other system sounds available in `C:\Windows\Media` if you prefer by opening *"SteamAchievementNotifier.ps1"* (located in `C:\Users\%username%\AppData\Local\SteamAchievementNotifier`) in *Powershell ISE*/*Notepad* etc., and changing the **-Sound** parameter in: `New-BurntToastNotification -AppLogo $currentIcon -Sound IM` to a preferred sound (e.g. `-Sound Default`).

### *Valid -Sound IDs:*
- Alarm/Alarm2/Alarm3/Alarm4/Alarm5/Alarm6/Alarm7/Alarm8/Alarm9/Alarm10
- Call/Call2/Call3/Call4/Call5/Call6/Call7/Call8/Call9/Call10
- Default
- IM
- Mail
- Reminder
- SMS

**THANKS:**
-

Thank you for checking out this project. This is the first Powershell application I've ever created and I would love your feedback. As I'm still pretty much a novice, I'm sure there are issues in the code that would be more efficient or could be done in a better way. If you're interested in this project or if you are a programmer or application developer, I would love to hear from you if you have suggestions on how to make this even better!

**Special Thanks:**
- Adam C. for ongoing support and guidance.
- Windos for creating BurntToast Notifications.
- Steam for allowing me to use their extensive Web API for this project.
