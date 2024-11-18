<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<h1 align="center">Known Issues</h1>

- ⚠ **Notification sound can be heard, but notification cannot be seen/Notification only appears when tabbing out of the game**

> ℹ If the game uses *DirectX 9/10/11*\*, ensure your in-game display setting is set to ***Borderless***/***Borderless Windowed*** - not ***Fullscreen***. Any application external to a ***Fullscreen*** game *cannot* display content above it\*.
> 
> *\*If the game uses DirectX 12, setting the in-game display mode to **Fullscreen** (not **Exclusive Fullscreen**) should allow content to show above the game window, due to differences in the DX12 API vs previous versions. However, this may vary on a per-game basis, depending on implementation.*

- ⚠ **"Now Tracking" notification spawns repeatedly**

> ℹ When encountering this issue, try running **Steam Achievement Notifier (V1.9)** as Administrator:
> 
> - *Open the **Start Menu***
> - *Type `Steam Achievement Notifier (V1.9)`*
> - *Right-click*
> - *Select **Run as Administrator***
> 
> If running as Administrator still does not resolve the issue, try enabling **Settings** > **Alt. Process Mode**

- ⚠ **Achievement titles/descriptions are shown in English when Steam is set to use a different language**

> ℹ Enable the **Settings** > **Language** > **Translate Achievements to Steam Language** setting. Enabling this setting will attempt to load locally-stored translations for achievements in the user's chosen Steam UI language.
>
> ℹ Try manually specifying the **Language** setting for the current game:
> 
> - *Open **Steam** > **Library***
> - *Right-click the game > Properties*
> - *On the **General** tab (selected by default), select your desired language from the **Language** dropdown menu*
> 
> This may also be caused by [adding a game to the Library while Steam's language is set to **English**](https://github.com/ceifa/steamworks.js/issues/141#issuecomment-2168689532)

- ⚠ **Windows: "No Game Detected" displayed when a Steam game is currently running**

> ℹ Open **Settings** > **App Log**, then change the dropdown to `rust.log`.
> 
> If there is an error stating `Failed to execute "GetWmiObject" command: Error { kind: NotFound, message: "program not found" }`, this means **Windows** does not have an *environmental variable* set for **Powershell**.
> 
> In order to fix this issue, add a new *environmental variable* entry for **Powershell** on the system:
> 
> 1. Type `env` into the **Start Menu**
> 2. When it appears, click *Edit the system environment variables*
> 3. Once the window opens, click the *Environmental variables...* button
> 4. Under the *System Variables* section at the bottom of the window that appears, select the ***Path*** entry
> 5. Click the *Edit...* button
> 6. Another window will appear. Click the *New* button, which will create an empty text field
> 7. Paste the following text into the text field: `%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\`
> 8. Click the *OK* button\* on all opened windows to save the new *environmental variable*
> 
> ⚠ \* Ensure only *OK* is clicked, not *Cancel* - cancelling any of these windows will also cancel your changes!
> 
> 9. Exit the app via **System Tray** > **Options** > **Exit**, then relaunch. Games should now be detected as normal!
> 
> If any other errors are appearing in `san.log`/`rust.log`/`sanhelper.log`, please report the issue via [GitHub](https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues/new/choose) or [Discord](https://discord.gg/FxCFtpd3eu).
> 
> ℹ If the above does not solve the issue, you may be missing the [Latest Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version) (`VCRUNTIME140.dll`) on your system, as advised in [this GitHub Issue](https://github.com/ceifa/steamworks.js/issues/75#issuecomment-1497289791).
> 
> To install, click the above link, then try installing both the `x86` and `x64` versions. Once complete, restart the application and re-test.