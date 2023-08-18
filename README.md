![Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/steamachievementnotifier/steamachievementnotifier/raw/alpha/src-tauri/src/updater.json&query=$.version&label=Version&style=flat&color=0F80C1&logo=github)
[![Downloads](https://img.shields.io/github/downloads/SteamAchievementNotifier/SteamAchievementNotifier/total.svg?&label=Downloads&color=46C018&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAw0lEQVRYhe3TSQ6EIBCFYe7BNRxu5pbTcDRdmegN/t4YWprBoYxJJ/VWLOB9CRTGaDSvhi0KKKCAAgpcLh1oSgANg7TeAQttDqBlAZy0ni+xB7Z6REQAYKHbA3Sh/gqQPuKOWOnDumfN1R8OQW5DRKQrd3T+EIiI37gz509sKBDJ3d8GskTmaQVAQmQnRwRERGEwhUAginMvBozB1b7VA0A9CvwDMPJExjLgHwF8GbDM4voZW7tFi2e6XT7hq/Uaza18AN4mbZC0hY1XAAAAAElFTkSuQmCC)](https://GitHub.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/)
[![Discord](https://img.shields.io/discord/903745038826229762?label=Discord&logo=discord&logoColor=ffffff&color=768bd3)](https://discord.gg/FxCFtpd3eu)
[![KoFi](https://img.shields.io/static/v1?message=Donate&logo=kofi&labelColor=5c5c5c&color=yellow&logoColor=white&label=Ko-Fi)](https://ko-fi.com/steamachievementnotifier)

**[<img src="https://api.iconify.design/akar-icons/discord-fill.svg?color=white"> Join on Discord for news on future updates!](https://discord.gg/FxCFtpd3eu)**

**[<img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" width="16px"> Donate on Ko-Fi!](https://ko-fi.com/steamachievementnotifier)**

<p align="center"><img src="./src-tauri/src/img/santextlogo.png"></p>

<h3 align="center"><b><i>Enhance your Steam achievement experience!</i></b></h3>

**Steam Achievement Notifier** is a Tauri application that shows customisable notifications when you unlock any Steam Achievement!

<p align="center"><img src="https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/assets/77490730/53bc72c1-42e9-4f03-8479-ce02b7b9098a"></p>

Inspired by achievement notifications for consoles, it uses the *Steam Web API* to track achievement stats in real time, and displays an achievement summary within the notification.

**UPDATES**
-

**Version 1.85** is a complete overhaul of the existing application, and brings with it a huge number of changes, fixes and improvements:

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

<p align="center"><img src="https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/assets/77490730/02d4802f-8d8e-4843-9080-ecd3e39f5f51" width="50%"></p>

**SETUP:**
-

**PREREQUISITES:**
- An **[API Key](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey)** for your Steam account
- The **[Steam64ID](https://steamid.io/lookup)** for your Steam account
- "**Game Details**" are set to "**Public**" in Steam
> *To check this, click the "**Game Details**" link in the Settings menu.*

**INSTALLATION:**
1. Download **[SteamAchievementNotifier_1.85.4_x64-setup.exe](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.85/SteamAchievementNotifier_1.85.4_x64-setup.exe)** (or download from the [Releases](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases) page).
2. Run **SteamAchievementNotifier_1.85.4_x64-setup.exe** and follow the prompts to install.
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
- https://github.com/turuslan/HackTimer
- Steam logos and assets used with permission granted by Section 3 of the [Steam Web API Terms of Use](https://steamcommunity.com/dev/apiterms)

**RELEASE NOTES**:
-

<details>
<summary>
    <h4>V1.85.5 [LATEST]</h4>
</summary>

<h4><u>Updates:</u></h4>

- **Duplicate Notifications to Window**: *Now available again in **V1.85***! When enabled via the **Settings** menu, an external window will be created that duplicates all notifications spawned by the application, and will always stay open in the background. Useful for capturing notifications for use in streaming/screen capture software (*OBS/Twitch Studio/Streamlabs etc.*)!

> - The window is fully transparent - as to not interfere with capturing software - so when the option is first enabled, **you won't see anything on screen!** To locate the current position of the window, press and hold the `Ctrl` key (*while the main app window is focused*) to display an outline around it!
> - The window will now also reopen automatically when restarting the application if the option remains enabled when exiting.
> - The last position of the window will also be saved any time you disable the option via the **Settings** menu, and will be recalled when enabling it again.

- **Notification Shortcuts**: Trigger **Test Notifications** using the power of keyboard shortcuts! Enable the option via the **Settings** menu, and click the shortcut box to start listening for inputs. Once assigned, you'll be able to trigger a notification for each type using the shortcuts you've set!

> - **Keycodes are *very* complex, so all buttons may not work correctly!** If you encounter a key that doesn't work with this option, please check the **App Log**, and [open a new issue](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues) or report it in the `#support` forum on [Discord](https://discord.gg/FxCFtpd3eu)!
> - Accelerators - `Ctrl`/`Shift`/`Alt`/`Super` (or `WIN`) - cannot be used on their own (`Ctrl`), or as a combination of only accelerators (`Ctrl+Shift+Alt`).
> - Shortcuts will only assign a maximum of 3 inputs per shortcut.
> - **Shortcuts are GLOBAL!** This means that they will activate *everywhere* - including in-game - so be wary of assigning required in-game shortcuts to this option!

- **Single Instance Lock**: Using the [Tauri single-instance plugin](https://github.com/tauri-apps/plugins-workspace/tree/v1/plugins/single-instance), the application will now prevent further instances being opened when attempting to run it again (via a Desktop shortcut or the EXE file) while an instance is already running.

<h4><u>Bug Fixes:</u></h4>

- Redesigned window contents for **"Use Custom Position" Customiser** option.
- Fixed an issue where achievement percentages would be shown for multiple elements.
- Updated code to properly close notification windows when errors are encountered.
- Added `UnhandledRejection` errors to the **App Log** window.
</details>

<details>
<summary>
    <h4>V1.85.4</h4>
</summary>

<h4><u>Bug Fixes:</u></h4>

- Fixed an issue where screenshots generated using the **Screenshot with Notification Overlay** option would be rendered at an incorrect resolution if Windows scaling was set to anything higher than 100%.
- Fixed an issue where the notification overlay would be rendered at a smaller size when using the **Screenshot with Notification Overlay** option.
- Fixed an issue where percentages would not be displayed in screenshots generated using the **Screenshot with Notification Overlay** option.
- Added further checks for instances where tracking games with an invalid API response (such as games with no achievements or non-Steam games) would cause the application to stop working.
- Updated the installer's `webviewInstallMode` to `offlineInstaller` to handle cases where the application could be installed without having a valid **Webview2** installation, causing the application to crash immediately if the user has previously manually uninstalled Microsoft Edge.
- Added [Debug build](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/download/1.85/SteamAchievementNotifier_1.85.4_x64_DEBUG.exe) to allow for further investigation into startup crashes before in-app logging is initialised.

_In order to see error output to the Console when running the Debug build, please do the following:_
> - Uninstall any previously installed versions of the application.
> - Run the Debug build setup EXE and install.
> - Open Command Prompt, paste the following command and press Enter:
`%localappdata%\SteamAchievementNotifier\SteamAchievementNotifier.exe`
> - Any startup errors will then be logged to the Command Prompt window.
</details>

<details>
<summary>
    <h4>V1.85.3</h4>
</summary>

<h4><u>Updates:</u></h4>

- Added multiple extra API checks when a game's `.bin` file is updated in order to minimise the risk that an achievement unlock will be missed if the API is not updated before the check occurs.
- Updated logos to SVG format.
- Prevented further achievement tracking for games with 100% completion, and added a <span style="color:gold">gold</span> colour to the game's name in the **Game Display** box to indicate all achievements have been earned.
- Added header/sidebar images and EXE logo to installer.

<h4><u>Bug Fixes:</u></h4>

- Fixed an issue where the screenshot background window could take focus from the game when the **Screenshot with Notification Overlay** option was enabled.
- Fixed an issue where the application would stop tracking stats after launching a game with no achievements.
- Fixed an issue where continuous notifications would spawn after launching a game that was previously completed.
- Fixed an issue where the **Use Game Icon** Customiser option did not function correctly.
- Fixed an issue where percentages for the **Epic Games** preset did not show the actual value.
- Fixed an issue where the **Game Display** box would sometimes retain the previous game name instead of resetting back to the "No Game Detected" text after closing a game.
- Set the `window-state` plugin to only read the `SIZE` and `POSITION` properties of the main window on launch, which prevents an issue where a previously maximised window would stay stuck in a maximised state upon each subsequent launch of the application.
</details>

<details>
<summary>
    <h4>V1.85.2</h4>
</summary>

<h4><u>Bug Fixes:</u></h4>

- Fixed an issue where the application would not function correctly if the user chose to install anywhere other than the default location.
- Fixed an issue where the **Start Minimised** option did not function correctly.
- Fixed an issue where a Powershell console window would appear when the **Steam In-Game Screenshot** option was selected.
- Removed continuous logging to `rust.log` when Steam is not running.
</details>

<details>
<summary>
    <h4>V1.85.1</h4>
</summary>

<h4><u>Bug Fixes:</u></h4>

- Fixed an issue where the application would not function correctly after autostarting when using the **Start with Windows** option
- Fixed an issue where notifications would steal focus when the main window was closed to the system tray
- Fixed an issue where the **100% notification** would spawn multiple times after completing a game.
- Fixed an issue where screenshots taken using the **Screenshot with Notification Overlay** option could not create a screenshot folder due to invalid characters in the game name.
- Fixed an issue where the volume set using the **Volume slider** would not be reflected in spawned notifications.
- Fixed an issue where **Roundness** values for spawned notifications would not be properly applied. 
- Updated the **Version** string in **Settings** to reflect the current app's semantic version number and updated associated translations.
- Added `rust.log` file to log info, errors and panics from Rust process throughout the application's lifecycle.
- Fixed typos in `README.md`.
</details>
