<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<p></p>

<div align="center">
<img src="https://img.shields.io/github/v/release/steamachievementnotifier/steamachievementnotifier?sort=date&display_name=tag&logo=github&label=Version">
<img src="https://img.shields.io/github/downloads/steamachievementnotifier/steamachievementnotifier/total?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAw0lEQVRYhe3TSQ6EIBCFYe7BNRxu5pbTcDRdmegN%2Ft4YWprBoYxJJ%2FVWLOB9CRTGaDSvhi0KKKCAAgpcLh1oSgANg7TeAQttDqBlAZy0ni%2BxB7Z6REQAYKHbA3Sh%2FgqQPuKOWOnDumfN1R8OQW5DRKQrd3T%2BEIiI37gz509sKBDJ3d8GskTmaQVAQmQnRwRERGEwhUAginMvBozB1b7VA0A9CvwDMPJExjLgHwF8GbDM4voZW7tFi2e6XT7hq%2FUaza18AN4mbZC0hY1XAAAAAElFTkSuQmCC&label=Downloads&link=https%3A%2F%2Fgithub.com%2FSteamAchievementNotifier%2FSteamAchievementNotifier%2Freleases">
<img src="https://img.shields.io/discord/903745038826229762?logo=discord&logoColor=ffffff&label=Discord&color=5561f5&link=https%3A%2F%2Fdiscord.gg%2FFxCFtpd3eu">
<img src="https://img.shields.io/static/v1?message=Donate!&logo=kofi&labelColor=5c5c5c&color=yellow&logoColor=white&label=Ko-Fi">
</div>

<p></p>

**Steam Achievement Notifier** shows fully customisable notifications when you unlock any achievement on Steam!

<p align="center">
<img width="100%" height="100%" src="img/SANGarryV1.9.gif">
</p>

In the most substantial update yet, **V1.9** uses Valve's internal [Steamworks](https://partner.steamgames.com/doc/api) API to track achievement progress in realtime, displaying all the details of the achievement within the notification!

Each notification type - **Main** (*for regular achievements*), **Rare** (*for achievements with a rarity below 10%*) and **100%** (*for unlocking all achievements in any game*) - can be personalised to your liking using a wealth of customisation options available via the **Steam Achievement Customiser** menu. Just click the **Customise** button to get started!

<p align="center">
<img width="100%" height="100%" src="img/SANUIV1.9.jpg">
</p>

<div align="center">

| <a href="#features">Features</a> | <a href="#updates">Updates</a> | <a href="#installation">Installation</a> | <a href="#credits">Credits</a> |
| --- | --- | --- | --- |

</div>

<h2 align="center" id="features">Features</h2>

- 🏆 **Realtime Achievement Tracking**: By implementing Steamworks (*provided by custom fork of [steamworks.js](https://github.com/ceifa/steamworks.js/)*), **Steam Achievement Notifier** no longer requires an *API Key*/*Steam64 ID* - just run the app and start unlocking achievements, with no configuration required! This also allows greater functionality to be added in future updates, so stay tuned!

- 🖌 **Redesigned UI**: The in-app UI has undergone a complete redesign to enhance user experience, with updated elements, menus, and options for a simplified and modernised look! Once you're done customising, minimise the app window to the system tray to keep it running it in the background. In **V1.9**, the app window is also now resizable!

- 🎨 **Fully Customisable Notifications**: Each notification type provides a wealth of customisation options to truly personalise your Steam achievements! First, choose a **Notification Preset** (*each with bespoke designs and animations*). Then, start designing - change the background, shape, colours, size, display time, icons, position, font, opacity - and much more!

- 🎶 **Custom Notification Sounds**: Load custom sounds that play whenever you unlock an achievement! In the **Customiser**, choose the **Sound Mode** for each notification type: **File** (*load a single audio file*) or **Randomised** (*select a folder containing multiple audio files which are then played at random*). Adjust the in-app volume, preview the sound and then unlock achievements to hear it! (*All in-app sounds can also be muted via the new <a href="#audiosrc">**Audio Source**</a> Settings option!*)

- ✨ **Themes**: Brand new to **V1.9**, all customisations made via the **Customiser** menu can be saved as a custom **Theme**, and reloaded at any time by selecting it via the new **Theme Select** menu on the Home screen. Name your masterpiece, give it an icon (*or load your own using the **+** icon in the **Save Theme** dialog*), and switch between saved **Themes** whenever you like!

- 💯 **100% Notification Type**: The newest notification type - **100%** - will show a notification when all achievements have been unlocked in any game! Additionally, this notification type is also now fully customisable with all customisation options available for **Main** and **Rare** types (*plus more options exclusive to this type*)!

- 📷 **Additional Media Options**: Includes options to automatically take a Steam screenshot when any achievement is unlocked, as well as generating a **Screenshot with Notification Overlay** (*by selecting the dropdown option under **Settings** > **Additional Media***), which takes a screenshot of your chosen monitor, and overlays an image of the achievement notification - including all customisations! Also new to V1.9, the **Notification Image** option generates an image of the notification itself, which can then be directly shared or added as an overlay elsewhere!

> 🐧 In order to enable the **Take Steam Screenshot** option on Linux, `xdotool` must be installed on the system

> 🐧 In order to enable the **HDR Mode** option on Linux, `libxcb1`, `libxrandr2` and `libdbus-1-3` must be installed on the system

- 🎥 **Stream Notifications**: Building on the foundations of the **Duplicate Notification to Window** option available in previous versions, **Stream Notifications** creates a background window that duplicates all on-screen notifications - including all customisations - which is targetable as a window source within streaming software, such as OBS/Streamlabs/Twitch Studio etc. By setting this window as your source, you can overlay all achievement notifications directly in your streams!

- 📊 **Achievement Stats Overlay**: Display a configurable list of locked achievements and a completion progress bar for the current game in a window targetable by streaming software.  Configure the order of the list, limit the number of displayed achievements, the opacity of the window and more! Additionally, any unlocked achievements will be moved to the top of the list (regardless of the display limit set), play an unlock animation and update the progress bar in real-time!

- 💬 **Native OS Preset**: **V1.9** adds a new **Notification Preset** type - **Native OS**\* shows a real OS notification containing the unlock message, achievement title and description, along with the achievement icon!

> ⚠ *\*Some features are not supported and will be made unavailable when this Notification Preset is selected*

- 🌍 **Localisation Support**: All UI and notification elements have been translated into most Steam-supported languages - select your preferred language from the **Settings** menu! Additionally, the new **Translate Achievements to Steam Language**\* option displays achievement information in the user's chosen Steam UI language!

> ⚠ \**Some translated achievement information will only be locally available after unlocking the achievement. The **Max Translation Retries** option controls how many times a missing translation will be searched for (repeated once per second) before using the default achievement information provided by Steamworks instead*

- 📡 **Auto Updater**: Using [electron-builder's autoUpdater](https://www.electron.build/auto-update.html), users will now be notified if a new update is available - if so, downloading/installation of the new version will all be handled automatically by the app!

<h2 align="center" id="updates">Updates</h2>

> ℹ *This is not a full changelog - only updates added since **V1.9** which are not present in previous releases (or options that have since undergone significant changes) will be listed*
 
<h3>UI</h3>

- **Customise Menu**: The **Customise** button is now shown more prominently on the Home screen
- **Select Theme**: Custom **User Themes** can be recalled via the new **Select Theme** menu on the Home screen
- **Collapsible Menu Sections**: All sections within both the **Settings**/**Customiser** menus are now collapsible by clicking on the section's title

<h3>System Tray Menu</h3>

- **Reset Window**: When right-clicking the system tray icon, the window size and position can be reset to default by selecting **Options** > **Reset Window**
- **Release Game**: Manually release the app's running instance of Steamworks for the current game (*see <a href="#automaticprocesstracking">automatic process tracking</a> for more information*)
- **Suspend**/**Resume**: Once suspended, games will no longer be tracked by the app until manually resumed

<h3>Settings</h3>

- **Notifications**
    - **Show Percentage**: Choose whether to show achievement percentages for **All** (*all notification types*), **Rare Only** (*only **Rare** notification types*) or **Off** (*hide for all notification types*)
    - **Tracking Scale**: Increase/decrease the scale of the **Now Tracking** notification
    - **Notification Shortcuts**: Set keyboard shortcuts to trigger a **Test Notification** for each notification type. Useful when testing compatibility with in-game display settings!
    - **Disable Icon Caching**: By default, all achievement icons will be cached from the game's Steam Community page. Enable this option to prevent this behaviour - and revert to icons provided by Steamworks upon unlocking the achievement - which will greatly improve performance for games with a large number of achievements
    - **Post to Discord Server**: Post unlocked achievement information for all games to a specified Discord server via a webhook
- **Games**
    - **Linked Games**: Associate a game (via its **AppID**) with a specific executable file on your system. **Linked Games** added via this menu will bypass <a href="#automaticprocesstracking">**automatic process tracking**</a>, so only the specified executable will be checked when the associated game's **AppID** is detected as running by Steam Achievement Notifier
    - **Auto-Switch Themes**: Add any game's **AppID** and select any previously saved **Theme** to automatically switch to the chosen **Theme** when the game is detected. Additionally, an independent **Screenshot Source** can be selected for each entry
    - **Exclusion List**: Any AppID added to the **Exclusion List** won't be tracked for achievements while Steam Achievement Notifier is active
- **Additional Media**: Various options for generating additional media achievements are unlocked - such as **Take Steam Screenshot**, **Screenshot with Notification Overlay** and **Notification Image**
    - **Screenshot with Notification Overlay**
        - **HDR Mode**: Take screenshots using a method compatible with monitors using High Dynamic Range (HDR)
        - **Screenshot Delay**: Add a delay of up to 5 seconds before taking a screenshot when using the **Screenshot with Notification Overlay** option. Useful when achievements usually unlock at inopportune times, such as during cutscene transitions!
- **Streaming**
    - <span id="audiosrc">**Audio Source**:</span> As audio is generated from within notifications by default, a new **Settings** option has been added for **V1.9** - setting **Audio Source** to **App** will ensure that notification audio can be captured by streaming software via the app window itself (*Or, if sounds aren't your thing, mute all in-app audio by selecting the **Off** option*)
    - **Achievement Stats Overlay** > **Always on Top**: Sets the Achievement Stats Overlay to "Always on Top" mode, allowing the window to be displayed above the game window (instead of being used as a streaming source)
    - **Overlay Shortcut**: Set a keyboard shortcut to open/close the **Achievement Stats Overlay**
- **Accessibility**
    - **Disable App Window Animations**: For those sensitive to animations/movement (*or just if it's a preference*), you can remove all app window transition effects for all UI elements
    - **Disable Update Dialog**: Prevent the **Update Available** dialog from automatically showing
    - **Enable NVDA Support**: Enable copying achievement information to the clipboard when an achievement is unlocked, in order to be read by screen-reader software, such as NVDA
    - **Show Tooltips**: Toggle whether to show tooltip hints when hovering over UI elements
    - **Show System Tray Options**: Display all options usually accessed via **System Tray** > *Right-click* > **Options** under **Settings** > **Misc.** as well
    - **Release Game Shortcut**: Set a keyboard shortcut to <a href="#automaticprocesstracking">release the current game</a>
- **Advanced**
    - **Poll Rate**: Increase/decrease the interval in which updates to achievement data is checked. Increasing this value may allow achievement unlock notifications to spawn faster, at the cost of slightly increased system load. Conversely, decreasing this value will reduce system load, but may cause achievement unlock notifications to spawn fractionally later
    - **Alt. Process Mode**: Use an alternative Rust-based function to check whether tracked game processes are currently running on the system. When unchecked, the default Node JS-based process check will be used instead
    - **Debug Panel**: Displays in-depth Process Tracking info for troubleshooting purposes
    - **Show Notification DevTools**: Spawns a DevTools window for each on-screen notification
    - **Use Custom App Files**: For those who love to tinker beyond what the app already provides, enable the **Use Custom App Files** option to load customisable HTML/CSS/JS files, which will then be used for notifications instead of the built-in ones! Click the **Show Custom App Files** button to open the directory where the custom files are stored, then get creative!

> *⚠ Caution is advised for casual users when editing notification files!*

> ℹ For additional information on other **Advanced** options, see <a href="#automaticprocesstracking">automatic process tracking</a>

- **Misc.**
    - **Check for Updates**: Check for updates to **Steam Achievement Notifier** without having to restart the application
    - **App Log**: All events and errors that happen within the application from startup will now be shown in the dedicated **App Log** window

<h3>Customiser</h3>

- **Preset**
    - **Notification Elements**: Choose which elements to display within the notification, along with the position of the element
        - **Rarity Badge**: Add a **Rarity Badge** to display the unlocked achievement's rarity percentage above the achievement icon
    - **Use Percent**: To simulate values provided by various other achievement ecosystems, some Notification Presets will calculate an **XP**/**Score** value to display in the notification to depict the look and feel of various achievement styles as accurately as possible. If preferred, this option will display the actual achievement unlock percentage instead
    - **Custom Text**/**Use Game Title**: Set a custom unlock message for each notification of this type, or **Use Game Title** to show the game name instead
    - **Custom Font**: Load a custom `.ttf`/`.otf` font file to use within the notification, instead of the default font
- **Style**
    - **Opacity** > **Background Only**: Enable transparency only for the background of the notification, leaving all other elements at full opacity
    - **Outline**: Display an outline around the edge of the notification
    - **Glow**: Add a glow effect around the outside of the notification
    - **Mask**: Add a custom image mask to overlay on top of the notification
- **Colors**
    - **Tertiary Color**: Set the color of extra elements only present in certain Notification Presets
- **Icons**
    - **Logo**/**Decoration**/**Rarity Elements**: Customise (*or completely remove*) any image element in any notification type - logos, icons, rarity indicators, XP elements etc.
    - **Replace Logo**: Replace any instances of the **Logo** element with the **Decoration** element
    - **100% Icon**: Set a custom **100% Icon** to show for all completed games
    - **Hidden Icon**: Set a custom icon to indicate an achievement is a **Hidden** achievement

> ℹ *The **Hidden Icon** can be completely hidden from each notification type by unticking the **Show Hidden Icon** option. Additionally, it can be toggled in **Customiser Previews**/**Test Notifications** by clicking the <img width="2%" src="./icon/visibility.svg">/<img width="2%" src="./icon/visibility_off.svg"> icons*

- **Themes**
    - **Save Theme**: Once your notification is looking the way that you want it, save it as a **Theme**, which can be loaded or changed from either the pinnnable **Selected Theme** dropdown in the **Customiser**, or via the **Theme Select** window on the Home screen
    - **Import/Export Theme**: Import/export your saved **Themes** as `.san` files, which can then be shared with other users!

<h3 id="automaticprocesstracking">Automatic Process Tracking</h3>

Due to integrating **Steamworks**, the way that games are detected as running/not running has changed in **V1.9**. This is no longer an automatic process as it was when using the **Steam Web API**. As Steamworks does not include any way to check whether a game is currently open or closed, another solution is needed.

> ℹ When initialising **Steamworks** via an application that is not the actual game - such as **Steam Achievement Notifier** - Steam will also see this external application as "**Playing**" the current game until it is also closed. This causes **Steam Achievement Notifier** to "*hold*" the current **AppID** of the game until it (or the process within it that initialised **Steamworks**) is closed - i.e. "*releasing*" the game.
>
> As **Steam Achievement Notifier** is intended to be a constantly-running background application, closing it every time a game closes is not an ideal solution.
>
> Additionally, if it does not track the current status of the game process - and the game then continues to be "held" by **Steam Achievement Notifier** - Steam will never report the game as being closed, which causes the game to remain in the "**Playing**" state in the Steam client.

To resolve this issue, **V1.9** implements **automatic process tracking** - a series of methods and fallbacks to locate the current game's executable file, and to continuously check whether this file is currently running on the user's system. Once this exectuable is no longer found to be running, it is assumed that the game has closed - **Steam Achievement Notifier** then automatically "*releases*" the game, allowing the app to start checking for new games, while also allowing Steam to reset the game's "**Playing**" state.

Additionally, there are several in-app options to control various aspects of **automatic process tracking**:

- **Release Game**: If Steam still reports the user as "**Playing**" the game as after closing the game window, or if Steam Achievement Notifier still displays the previously closed game in the **Game Display** box/system tray menu, the game can be manually "*released*" via **System Tray** > *Right-click* > **Options** > **Release Game** option.

- **Tracking Delay**: If Steam does not allow the game to be launched (*stating **`Game already running - <AppID>`***), try increasing the value of **Settings** > **Advanced** > **Tracking Delay**. This will increase the time between the current **AppID** being detected as running, and when **Steam Achievement Notifier** begins process/achievement tracking.

    - Alternatively, increasing this value can be useful if **Steam Achievement Notifier** is detecting a **pre-game launcher** process, instead of the actual game

- **Release Delay**: If **Steam Achievement Notifier** shows the **Now Tracking** notification for a game that has been recently closed, try increasing the value of the **Settings** > **Advanced** > **Release Delay** option to a higher value.

- **Max Process Retries**: If the current game takes a long time to start (*and subsquently misses the initial window to locate the running exectuable - default: 10 retries at 1 retry per second*), try increasing the **Settings** > **Advanced** > **Max Process Retries** option to a higher value.

<h2 align="center" id="installation">Installation</h2>

1. Download the installer/executable from the [Releases](https://github.com/steamAchievementNotifier/SteamAchievementNotifier/releases) page (*under **Assets** at the bottom of the page*)
2. Once downloaded, run the installer/executable
3. Once the app opens, customise your notifications and start unlocking achievements!

<hr>
<h3 align="center">🏆 Happy Achievement Hunting! 🏆</h3>
<hr>

<h2 align="center" id="knownissues">Known Issues</h2>

For details on known issues when installing or running the app, see the [Known Issues](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/blob/master/KNOWNISSUES.md) section.

<h2 align="center" id="credits">Credits</h2>

**Steam Achievement Notifier** uses (*and thanks!*) the following projects:

- A custom fork of [steamworks.js](https://github.com/ceifa/steamworks.js) by [ceifa](https://github.com/ceifa)
- A custom fork of [steamworks-rs](https://github.com/Noxime/steamworks-rs) by [Noxime](https://github.com/Noxime)
- [HackTimer](https://github.com/turuslan/HackTimer) by [turuslan](https://github.com/turuslan)
- [vdf-parser](https://github.com/rossengeorgiev/vdf-parser) by [rossengeorgiev](https://github.com/rossengeorgiev)
- [fs-extra](https://github.com/jprichardson/node-fs-extra) by [jprichardson](https://github.com/jprichardson/)
- [electron-builder/electron-updater](https://github.com/electron-userland/electron-builder)
- [Tippy.js](https://atomiks.github.io/tippyjs/)
- [jpeg-js](https://github.com/jpeg-js/jpeg-js)
- [steam-game-path](https://github.com/osztenkurden/steam-game-path) by [osztenkurden](https://github.com/osztenkurden)
- [vdf-rs](https://github.com/CosmicHorrorDev/vdf-rs) by [CosmicHorrorDev](https://github.com/CosmicHorrorDev)
- Custom forks of [screenshots (xcap)](https://github.com/nashaofu/xcap)/[display-info](https://github.com/nashaofu/display-info) by [nashaofu](https://github.com/nashaofu)
- [icojs](https://github.com/egy186/icojs) by [egy186](https://github.com/egy186)
- [iro.js](https://github.com/jaames/iro.js) by [jaames](https://github.com/jaames)
- [sortable](https://github.com/SortableJS/Sortable) by [SortableJS](https://github.com/SortableJS)