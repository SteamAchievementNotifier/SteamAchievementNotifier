<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<h1 align="center">Retro Achievements Support</h1>

<h2 align="center" id="supportedemulators">SUPPORTED EMULATORS</h2>

The below table outlines current compatibility for emulators supporting **Retro Achievements** in **Steam Achievement Notifier (V1.9.26)** and above:

| Emulator | Supported | Notes |
| --- | --- | --- |
| RetroArch | ✔ | [Requires log file](#retroarch): `retroarch.log`  |
| Dolphin | ✔ | [Requires log file](#dolphin): `dolphin.log` |
| Bizhawk | ❌ | No external log-to-file functionality, but PS1 cores can be loaded via RetroArch |
| DuckStation | ❔ | Not tested  |
| PCSX2 | ❌ | Log file `emulog.txt` is permanently locked while PCSX2 is runnning. No other user, application or script can interact with the contents, despite the required game/achievement information being available within. However, PS2 core can be loaded via RetroArch |
| PPSPP | ❌ | No external log-to-file functionality, but PPSPP core can be loaded via RetroArch |
| RALibRetro | ❔ | Not tested |
| RANes | ❔ | Not tested |
| RALibRetro | ❔ | Not tested |
| RAP64 | 🧪 | Tested as compatible via log file: `RACache.txt`, but N64 core can be loaded via RetroArch |
| RAppleWin | ❔ | Not tested |
| RAQUASI88 | ❔ | Not tested |
| RASnes9x | ❔ | Not tested |
| RAVBA | 🧪 | Tested as compatible via log file: `RACache.txt`, but GBA core can be loaded via RetroArch |
| WinArcadia | ❔ | Not tested |


| Key | Definition |
| -- | -- |
| ✔ | Supported |
| ❌ | Incompatible |
| 🧪 | Tested |
| ❔ | Not Tested |

<h2 align="center" id="tldr">TLDR</h2>

> ❗ *Check the emulator you want to use (*or an alternative*) is [supported](#supportedemulators)*

> ❗ *Check you are logged into **Retro Achievements** via your chosen emulator as the same user you specify below*

1. 🌐 On the [Retro Achievements website](https://retroachievements.org), copy both your [*username*](#rasetup) and your [*Web API Key*](#rasetup)
2. ✏ Enter your *username*/*Web API Key* into **Steam Achievement Notifier** > **Settings** > **Retro Achievements**
3. 🧾 [Enable log-to-file functionality](#logfiles) in your chosen supported emulator
4. 🔎 Select the emulator's **log file** via **Steam Achievement Notifier** > **Settings** > **Retro Achievements** > **Emulators** > ***\<Emulator Name\>*** > **Log File Path**
5. 🏆 Start unlocking achievements!

<h2 align="center" id="prerequisites">PREREQUISITES</h2>

<h5 id="rasetup">Retro Achievements Username/Web API Key</h5>

To access the **Retro Achievements API**, a valid *Web API Key* must be supplied, along with the *username* of the **Retro Achievements** user account that notifications will be shown for.

To find your *username*/*Web API Key*, log into the [Retro Achievements website](https://retroachievements.org) with the same account you wish to show achievement notifications for:

- Your *username* can be found by hovering over your profile icon in the top-right corner of the homepage
- A *Web API Key* can be found and copied by clicking the button found via **Settings** > **Keys** > **Web API Key**

Once you have copied your *username*/*Web API Key*, paste each into the relevant options in the **Steam Achievement Notifier** > **Settings** > **Retro Achievements** section.

<h5 id="logfiles">Enabling log files</h5>

<details>
    <summary><h5 id="logfileinfo">ℹ Why do I need to enable log files?</h5></summary>

> *In order to fetch achievement data quickly and efficiently, while preventing abuse of the **Retro Achievements API**, emulator game data (*such as current game status, unlocked achievement information etc.*) is fetched locally from a **log file** created by each supported emulator when *log-to-file* functionality is enabled.*
> 
> *This prevents making excessive and frequent calls to the **Retro Achievements API**, while allowing achievement data to be cached locally using only a few API calls. Additionally, user/achievement updates to the API are not instantaneous; even if aggressive API polling was implemented, any changes to user/achievement data take a while to display, resulting in severely delayed achievement data/in-app notifications for achievement unlocks.*
> 
> *Conversely, achievement unlock information is written to these log files at the exact point they are unlocked, which provides a quick, efficient and accurate method for tracking **Retro Achievements** unlocks.*
</details>

> ⚠ ***Log-to-file** functionality is normally **not enabled** by default in any supported emulators, and requires the user to enable settings to do so.*

To enable *log-to-file* functionality:

<details>
    <summary>
    <h4 id="retroarch">RetroArch</h4>
    </summary>

- **RetroArch** > **Settings** > **Logging** must be configured with the following settings:

    - **Logging Verbosity**: *ON*
    - **Frontend Logging Level**: *1 (Info)*
    - **Log to File**: *ON*
    - **Timestamp Log Files**: *OFF*

> ⚠ Enabling **Timestamp Log Files** will create a version of RetroArch's **log file** with a timestamped filename - e.g. `retroarch_2025_01_01__12_00_00.log`.
> 
> While technically possible to account for this dynamically, the system is designed to check for a single, static log file per supported emulator, so please ensure this option is disabled.
</details>

<details>
    <summary>
    <h4 id="dolphin">Dolphin</h4>
    </summary>

- **Dolphin > View > Show Log Configuration** must be configured with the following settings:

    - **Verbosity**: *Info*
    - **Logger Outputs** > ☑ *Write to File*
    - **Log Types** > ☑ *Achievements (RetroAchievements)*
</details>

Once complete, this **log file** can then be selected in **Steam Achievement Notifier** for the associated emulator.

<h2 align="center" id="setup">IN-APP SETUP</h2>

Once [*log-to-file* functionality has been enabled](#logfiles), the emulator can then be enabled in **Steam Achievement Notifier** via **Settings** > **Retro Achievements** > **Emulators**.

<h5 id="selectlogfile">Selecting a log file</h5>

Once an emulator is enabled, a **Log File Path** option will appear. Click the 🔎 button to select the emulator's **log file** from the dialog:

<details>
    <summary>
    <h4>RetroArch</h4>
    </summary>

- Using default installation settings, `retroarch.log` is stored in:

    - `C:\RetroArch-x64\Logs`

> ⚠ *Note: The location may differ depending on the user's chosen install location. Please choose the folder path applicable for your system.*
</details>

<details>
    <summary>
    <h4>Dolphin</h4>
    </summary>

- Using default installation settings, `dolphin.log` is stored in one of the following locations:

    - `%APPDATA%\Dolphin Emulator\Logs`
    - `%USERPROFILE%\Documents\Dolphin Emulator\Logs`
    - 🐧 `$XDG_DATA_HOME/dolphin-emu/Logs`
</details>

<br>

<h5 id="notifications">Game Tracking/Achievement Notifications</h5>

Once the **log file** has been selected, run a game via the selected emulator.

Upon success, a **Now Tracking** notification will appear (*if **Settings** > **Notifications** > **Show Tracking Notification** is enabled*).

Once an achievement is unlocked, a notification with details of the unlocked achievement will display on-screen, including any previously configured customisations.

Additionally, status/game info will be displayed in **Steam Achievement Notifier** > **Settings** > **Retro Achievements**, along with a green dot indicator against the active emulator.

<hr>
<h3 align="center">🏆 Happy (Retro) Achievement Hunting! 🏆</h3>
<hr>