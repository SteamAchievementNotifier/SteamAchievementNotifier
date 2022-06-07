[![GitHub release](https://img.shields.io/github/release/SteamAchievementNotifier/SteamAchievementNotifier.svg?label=Release&logo=)](https://GitHub.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/)
[![Github all releases](https://img.shields.io/github/downloads/SteamAchievementNotifier/SteamAchievementNotifier/total.svg?&label=Downloads&color=46C018)](https://GitHub.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/)
[![Discord](https://img.shields.io/discord/903745038826229762?label=Discord&logo=discord&logoColor=ffffff&color=768bd3)](https://discord.gg/FxCFtpd3eu)
[![KoFi](https://img.shields.io/static/v1?message=Donate&logo=kofi&labelColor=5c5c5c&color=yellow&logoColor=white&label=Ko-Fi)](https://kofi.com/steamachievementnotifier)

Steam Achievement Notifier
-
**[<img src="https://api.iconify.design/akar-icons/discord-fill.svg?color=white"> Join on Discord for news on future updates!](https://discord.gg/FxCFtpd3eu)**

**[<img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" width="16px"> Donate on Ko-Fi!](https://ko-fi.com/steamachievementnotifier)**

**Steam Achievement Notifier** is an Electron application that shows customisable notifications when you unlock any Steam Achievement!

<p align="center"><img src="https://user-images.githubusercontent.com/77490730/169311283-b733f2fa-9aaa-4d67-b15f-26c0f24c4b13.gif"></p>

Inspired by achievement notifications for consoles, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**[Version 1.84](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.84/SANLauncherV1.84.exe)** is a huge new update including:

- **Customisable Notifications**: Click the "**Customise...**" button to open the new **Steam Achievement Customiser** interface. From there, select an Achievement Style (including Console-style designs), and customise the size, screen position, shape, colour/image background, icon shape, display time and more! All changes will be shown in the preview window as you customise, and you can use different styles/values for both main and rare notifications!
- **Game Completion Notification**: The **Game Completion Notification** will show when 100% of achievements have been earned in any game!
- **Custom Icons**: Most notification types now support using a custom icon for certain elements of the notification!
- **Custom Notification Positions**: Using the new "**Use Custom Screen Position**" option in the Customiser menu, notifications can now be positioned wherever you like - even on secondary monitors!
- **Randomised Sound Mode**: When hovering over the "*Sound Select*" box, scroll your mouse wheel to switch between *File Mode* and *Randomised Mode*. In *File Mode*, your selected sound will play as normal, but in *Randomised Mode*, select a folder containing audio files, and each one will randomly play every time an achievement is unlocked!
- **Volume Controls**: Hover over the "*Preview Sound*" button and scroll your mouse wheel to change the volume of the notification sound. This can be changed independently for both main and rare achievements!
- **Redesigned Settings Menu**: The Settings menu has been re-worked as a flyout-style menu instead of a separate page, which makes changing things a lot quicker! Additional Settings have also been added, including *hiding native Steam achievement notifications*, *configurable rarity percentage*, *showing percentages for all notification types*, *notification opacity* and more!
- **Screenshot Overlay**: Enabling the "**Save Screenshots with Overlay**" option in the Settings menu (and enabling screenshots in the Customiser menu) will save a screenshot to your specified folder, and will overlay a notification with details of your earned achievement on top!
- **Automatic Updates**: Starting with **Version 1.84**, all elements of the app can now be updated on-the-fly, without needing to download new EXE versions!
- **Linux Support**: An AppImage version of **Version 1.84** is available for download! (*Note: Not all features are currently available for use on the Linux platform!*)
- **Localisation Support**: All application elements have been translated into most Steam-supported languages - just select your preferred language option in the Settings menu!

Check out the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page to see all improvements and updates!

<p align="center"><img src="https://user-images.githubusercontent.com/77490730/169263877-b839022d-b444-49f4-acd6-8f4e73018157.png"></p>

**SETUP:**
-

**PREREQUISITES:**
- An **[API Key](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey)** for your Steam account
- The **[Steam64ID](https://steamid.io/lookup)** for your Steam account
- "**Game Details**" are set to "**Public**" in Steam
> *To check this, click the "**Game Details**" link in the Settings menu.*

**INSTALLATION:**
1. Download "*[SANLauncherV1.84.exe](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.84/SanLauncherV1.84.exe)*" (or download from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page).

> ⚠ Starting with **Version 1.84**, automatic updates are attempted on every launch. Make sure to "unblock" **SANLauncherV1.84.exe** (via *right-click* > `Properties` > *Tick* `Unblock` > *Click* `Apply`) before running - automatic updates cannot be downloaded if the file is blocked!

2. Run *SANLauncherV1.84.exe*.
3. When the application opens, click the _Settings_ (⚙) button in the top-left corner. Enter your _API Key_/_Steam64 ID_ and click the "_Save_" button(s). After valid credentials have been saved, your username will be updated and the app is ready to use!

**USAGE:**
-

Start **Steam Achievement Notifier**, and start any game through Steam.

Once a game is running, **Steam Achievement Notifier** will display a notification saying:

`Now tracking achievements for <Current Game>.` (This can be turned off via the Settings menu)

Once an achievement is unlocked, a **Notification** will display containing the game name and details of the unlocked achievement!
  
🏆 Happy Achievement Hunting! 🏆

**TROUBLESHOOTING:**
-

***Achievements are not being tracked***

Check your API Key/Steam64 ID values. If these are set incorrectly, the script will not be able to contact the *Steam Web API*, which will display an error. Also, make sure your "Game details" are set to "Public" via *Steam* > *Edit Profile* > *Privacy Settings*.

***Steam username is wrong when finishing setup***

Ensure your Steam64ID is correct. Users can have similar names on Steam, so if you are unsure whether a profile is yours when using https://steamid.io/, click the profile link on the steamid.io page, or copy your Steam Community profile URL and paste into the steamid.io search box.

***Notification does not appear on screen when unlocking an achievement***

Some games do not allow Windows notifications to overlay above them if they are in "Fullscreen" mode. If you hear the achievement notification sound but don't see it, run the game in "Borderless" mode, which should allow notifications to appear. I am actively working on a solution to allow notifications to show in Fullscreen mode!

***Cannot download EXE via Releases due to "Virus Detected" warning in Browser***

EXE files generated by the [electron-builder](https://www.electron.build/) NPM Package can mistakenly trigger virus/trojan warnings when downloading via a browser. This is a false positive, as Antivirus programs do not thoroughly scan each file for viruses, but instead flag ALL unsigned apps generated by a particular method (such as electron-builder) as unsafe, due to some people abusing the method by generating malware.

Each version of Steam Achievement Notifier is sent to Microsoft to confirm a false positive when triggered, and has always been marked as an incorrect virus detection upon further investigation. Once this is complete, the signature is usually updated to reflect that it is in fact safe to download and use. **Steam Achievement Notifier will never include any features that will intentionally damage your computer or its contents.**

If you are using Windows Defender but you are unable to download the file due to the above error, please do the following:
- Open Windows Defender
- Click the Menu (☰) button
- Select "*Virus & threat protection*"
- Click "*Protection history*"
- Under "*All recent items*", click the "*Threat blocked*" message that contains "**SteamAchievementNotifierVX.XX.exe**"
- Click "*Actions*" in the bottom-right corner
- Select "*Allow*" and confirm

Once these steps are complete, the file should now show in your Downloads folder as normal.

**KNOWN ISSUES:**
-

- A error dialog appears when switching between Customiser tabs on Linux.

**ADDITIONAL NPM DEPENDENCIES/CREDITS**
-

Steam Achievement Notifier **requires** [regedit](https://github.com/ironSource/node-regedit) to check the Windows Registry, and will not function correctly if not installed manually when cloning/forking the repository. To install via NPM, use: `npm install regedit`

Optionally, the application is complied to EXE format using [electron-builder](https://www.electron.build/). To install via NPM, use: `npm install electron-builder`

Steam Achievement Notifier also makes use of [vdf-parser](https://github.com/rossengeorgiev/vdf-parser) by [rossengeorgiev](https://github.com/rossengeorgiev).
