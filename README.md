[![GitHub release](https://img.shields.io/github/release/SteamAchievementNotifier/SteamAchievementNotifier.svg?label=Release&logo=github)](https://GitHub.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/1.85)
![Revision](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/steamachievementnotifier/steamachievementnotifier/raw/alpha/src-tauri/src/updater.json&query=$.version&label=App%20Revision&style=flat&color=mediumpurple&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABxUlEQVRYw+2XvUrDUBiGj1IVlwp17IVkcPICFIpo7epV5AJEwT2dBF0chIBI6+QguOnYbooOrThYdXCqbeVxMk05v4n0gOC75jvvk5yc7+cI8a8/IGYICIlp8QzAMy1iQgJmfm9eZp8uOnXZp5zfvEREH5v6RJTy2G/xiqte2cpmXqBOVtUpuNov0iCPGiy6vX2TvGo6fEWOzZnYKJt9ld+qarJfpqdc9MgxR5wYMmKsHst6QKRccpCKWOHWioj0WatOq2H6lDPPmTX11NnNnnbJML2zFLmzIPZU9rN0pMBdBgliOxW7bgF0mJUBgRR2LwSVBDGilsTO8WJBBDIglIIOhUghvthJRV9aAKEMiHWngQqDSXshOLUAYhnQloKOkmeVSXshuLYA2jJATrEnfcfizZZu8hJVDqxqAWt8mnPBDfBAMSei77JFABcs5UL0XH7yT6HbYCEzou1yTMd654qYGz6oOCJil0RTaeCICF1KhSti061UqIqdE4JiUq9Mxc5Yrg0I5jl3KteGhmNAKO372nFS0zJ1iBpFhb2+ZRqavk6jjE1/6mOLh8HLw+g49eHXw/ju4QLi5Qrl4RLo5Rr7Lw/6Bhs9w9VVVJH+AAAAAElFTkSuQmCC)
[![Downloads](https://img.shields.io/github/downloads/SteamAchievementNotifier/SteamAchievementNotifier/total.svg?&label=Downloads&color=46C018&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAw0lEQVRYhe3TSQ6EIBCFYe7BNRxu5pbTcDRdmegN/t4YWprBoYxJJ/VWLOB9CRTGaDSvhi0KKKCAAgpcLh1oSgANg7TeAQttDqBlAZy0ni+xB7Z6REQAYKHbA3Sh/gqQPuKOWOnDumfN1R8OQW5DRKQrd3T+EIiI37gz509sKBDJ3d8GskTmaQVAQmQnRwRERGEwhUAginMvBozB1b7VA0A9CvwDMPJExjLgHwF8GbDM4voZW7tFi2e6XT7hq/Uaza18AN4mbZC0hY1XAAAAAElFTkSuQmCC)](https://GitHub.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/)
[![Discord](https://img.shields.io/discord/903745038826229762?label=Discord&logo=discord&logoColor=ffffff&color=768bd3)](https://discord.gg/FxCFtpd3eu)
[![KoFi](https://img.shields.io/static/v1?message=Donate&logo=kofi&labelColor=5c5c5c&color=yellow&logoColor=white&label=Ko-Fi)](https://ko-fi.com/steamachievementnotifier)

**[<img src="https://api.iconify.design/akar-icons/discord-fill.svg?color=white"> Join on Discord for news on future updates!](https://discord.gg/FxCFtpd3eu)**

**[<img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" width="16px"> Donate on Ko-Fi!](https://ko-fi.com/steamachievementnotifier)**

<p align="center"><img src="./src-tauri/src/img/santextlogo.png"></p>

<p align="center"><b><i>Enhance your Steam achievement experience!</i></b></p>

**Steam Achievement Notifier** is an Tauri application that shows customisable notifications when you unlock any Steam Achievement!

<p align="center"><img src=""></p>

Inspired by achievement notifications for consoles, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**UPDATES**
-

**Version 1.85** is a complete overhaul of the existing application, and brings with it a huge number of changes, fixes and improvements:!

- **Tauri**: Using the new [Tauri framework]("https://github.com/tauri-apps/tauri") allows access to **Rust** on the backend, which, along with providing more stable and reliable achievement tracking, benefits from internal build optimisations to reduce overall system resource usage, faster startup times and options for further development expansion.
- **UI Redesign**: Every aspect of the UI has been redesigned from the ground up. In addition, the window is now resizable, and the window contents should resize responsively for most* screen sizes/orientations! (**Some width/height combinations may not be fully supported, so currently, YMMV*)
- **100% Complete Notification Customisation**: There is now a separate tab for the 100% Complete Notification (also known as a "Plat" in some circles...), and will allow all existing customisations for the original notification types to be applied to this type too!
- **New Customisation Options**: All notification types now have access to new presets (**Steam Deck**,**Epic Games** and **Playstation 3**), and new customisation options, such as **Custom Text** (to set a custom message instead of "Achievement Unlocked"), **Show All Details** (for notifications presets that omit information by default), **Gradient Angle**, **Background-Only Opacity**, **Text Shadow**, and more coming soon!
- **Improved Screenshot Overlays**: The new **Notification with Screenshot Overlay** option provides new screenshot options, including selecting which monitor your game is currently running on, along with **custom placements** - which can either match your **Customiser** setting for the given notification type, or place it in any other preset location! Additionally, it will now take a screenshot before showing a notification, which ensures that notifications are not duplicated in generated screenshots.
- **Account Switching**: Support for using and switching between multiple Steam accounts has now been added. Also, if you have the wrong account selected when starting a game, it will auto-switch to the account signed into Steam!
- **API Connection Testing**: When adding an account, the app will now check the connection to the Steam Web API using the **Test Connection** button. This ensures that the user has entered the correct details before attempting to start a game, and if issues occur, a reason and some basic troubleshooting steps will be provided within the dialog box.
- **Icon/Information Caching**: All achievement details - including icons, game art and achievement details - are now cached when launching a game. This means that notifications will no longer have to retrieve information directly from the Steam Web API before showing it in the notification, leading to reduced notification spawn times, fewer network requests and less likelihood of missing assets!
- **Accessibility**: Further accessibility options have been added, such as **disabling app window animations**, toggling **tooltips** and **keyboard navigation support**.
- **App Log**: All main window information and errors will now be logged to the **App Log** window, which can be displayed using the **Open App Log** button in the **Settings** menu.

> ❗ **Steam Achievement Notifier (V1.85)** is an **ALPHA** build, meaning that you are **very likely** to encounter bugs and issues through general use! If you discover an issue, please report it either via a new [Issue]("https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues") or via the `#support` forum on [Discord]("https://discord.gg/FxCFtpd3eu")!

**SETUP:**
-

**PREREQUISITES:**
- An **[API Key](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey)** for your Steam account
- The **[Steam64ID](https://steamid.io/lookup)** for your Steam account
- "**Game Details**" are set to "**Public**" in Steam
> *To check this, click the "**Game Details**" link in the Settings menu.*

**INSTALLATION:**
1. Download "**[SteamAchievementNotifier_1.85.0_x64-setup.exe](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.85/SteamAchievementNotifier_1.85.0_x64-setup.exe)*" (or download from the [releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page).
2. Run **SteamAchievementNotifier_1.85.0_x64-setup.exe** and follow the prompts to install.
3. When the application opens, click the **Settings** (⚙) button in the top-left corner. Enter your _API Key_/_Steam64 ID_ and click the _Test Connection_ button to test your connection to the Steam Web API. After valid credentials have been entered, your username will display on the main app screen, and the app is ready to use!

**USAGE:**
-

Start **Steam Achievement Notifier**, and start any game through Steam.

Once a game is running, **Steam Achievement Notifier** will display a notification saying:

`Now tracking: <Current Game>.`
(*This can be turned off via the Settings menu*)

Once an achievement is unlocked, a **notification** will display containing the game name and details of the unlocked achievement!
  
🏆 Happy Achievement Hunting! 🏆

**CREDITS**:
-

**Steam Achievement Notifier (V1.85) [ALPHA]** uses (*and thanks!*) the following projects:

- https://github.com/rossengeorgiev/vdf-parser
- https://github.com/Fractal-Tess/tauri-plugin-snapshot
- Steam logos and assets used with permission granted by Section 3 of the [Steam Web API Terms of Use](https://steamcommunity.com/dev/apiterms)