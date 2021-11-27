Steam Achievement Notifier
-
**[<img src="https://api.iconify.design/akar-icons/discord-fill.svg?color=white"> Join on Discord for news on future updates!](https://discord.gg/FxCFtpd3eu)**

**Steam Achievement Notifier** is a Powershell application that shows a Windows 10 Toast Notification when you unlock any Steam Achievement!

<p align="left"><img width="546" src="https://user-images.githubusercontent.com/77490730/143626251-31aae548-05be-4428-ba1f-02bd051242b2.gif"></p>

Inspired by Xbox Achievement notifications for *Game Pass for PC*, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**[Version 1.7](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.7/SteamAchievementNotifierV1.7.exe)** adds custom sounds for **rare achievements**, along with a shiny new ***Electron***-based interface (with various improvements)! Check out the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page to see all improvements and updates!

<p align="left"><img width="400" src="https://user-images.githubusercontent.com/77490730/143625339-bf739383-03db-45c4-bca3-514759146e8a.png"></p>

This application uses [**BurntToast** by Windos](https://github.com/Windos/BurntToast) to display Windows 10 notifications.

**SETUP:**
-

1. Download "*[SteamAchievementNotifierV1.7.zip](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.7/SteamAchievementNotifierV1.7.zip)*" (or download from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page).

**Make sure to unblock the ZIP file before extracting - the application may not work as intended if not unblocked! To do this, right-click the ZIP file > Properties > Click the "Unblock" checkbox > Click "Apply".**

2. Extract the ZIP file: *Right-click* > *Extract All...*
3. Run *Steam Achievement Notifier (V1.7).exe*.
4. When the application opens, click the _SETTINGS_ button in the top-left corner. Enter your _API Key_/_Steam64 ID_ and click the "_Save_" button(s). After valid credentials have been saved, your username will be updated and the app is ready to use!

**USAGE:**
-

Start *Steam Achievement Notifier (V1.7).exe*, and start any game through Steam.

Once a game is running, **Steam Achievement Notifier** will display a notification saying:

`Now tracking achievements for <Current Game>.`

Once an achievement is unlocked, a **Toast Notification** will display containing the game name and details of the unlocked achievement!
  
🏆 Happy Achievement Hunting! 🏆

**TROUBLESHOOTING:**
-

***Achievements are not being tracked***

Check your API Key/Steam64 ID values. If these are set incorrectly, the script will not be able to contact the *Steam Web API*, which will display an error. Also, make sure your "Game details" are set to "Public" via *Steam* > *Edit Profile* > *Privacy Settings*.

***Steam username is wrong when finishing setup***

Ensure your Steam64ID is correct. Users can have similar names on Steam, so if you are unsure whether a profile is yours when using https://steamid.io/, click the profile link on the steamid.io page, or copy your Steam Community profile URL and paste into the steamid.io search box.

***Cannot select custom sound in GUI***

Custom audio for notifications ***only*** supports **.WAV files**. If you have a custom sound you would like to use for the notification that is not in .WAV format, there are plenty of reputable MP3 to WAV converters online. An easy method for converting any audio file to .WAV is to use [https://mp3cut.net/](https://mp3cut.net/) to open your file, click the *"MP3"* drop-down in the bottom-right corner and change to *"WAV"*. Then click *"Save"* to download the .WAV version. You can then view and select your sound from the sound browser.

***Notification does not appear on screen when unlocking an achievement***

Some games do not allow Windows notifications to overlay above them if they are in "Fullscreen" mode. If you hear the achievement notification sound but don't see it, run the game in "Fullscreen Borderless" mode, which should allow notifications to appear.

If you can't see any achievement and do not hear any achievement sounds when unlocking, check your Windows "Focus Assist" settings and ensure that notifications are allowed when running games.

**KNOWN ISSUES:**
-

- **BurntToast** Notification removes the achievement description if the game name/achievement title is too long. I will be looking into a way to shorten the achievement name if it contains more than a certain amount of characters which would fix this issue. *Note: This also happens when the Steam achievement is "Hidden"/"Secret" - this is a limitation of the Steam Web API as "Hidden"/"Secret" achievement descriptions are updated after unlocking.*
