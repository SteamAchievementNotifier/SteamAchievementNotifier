export const translations = {
    global: {
        main: "Main",
        rare: "Rare",
        plat: "100%",
        test: "Test Notifications",
        topleft: "Top Left",
        topcenter: "Top Center",
        topright: "Top Right",
        bottomleft: "Bottom Left",
        bottomcenter: "Bottom Center",
        bottomright: "Bottom Right",
        ok: "OK",
        preview: "Preview",
        save: "Save",
        back: "Back",
        settings: "Settings",
        appversion: "App Version",
        image: "Image",
        audio: "Audio",
        folder: "Folder",
        font: "Font",
        select: "Select",
        gametitle: "Game Title",
        congrats: "Congratulations!",
        achievementunlocked: "Achievement unlocked",
        gamecomplete: "100% Complete",
        achievementdesc: "Clicked the Show Test Notification button",
        gamecompletedesc: "You've unlocked all achievements!",
        defaultcustomfont: "Default (No Font Selected)",
        defaultsoundfile: "Default (No File Selected)",
        defaultsounddir: "Default (No Folder Selected)",
        nowtracking: "Now tracking achievements for:",
        nopreview: "Preview not available for Native OS",
        options: "Options",
        resetwindow: "Reset Window",
        show: "Show",
        exit: "Exit",
        releasegame: "Release Game",
        releasegamesub: [
            `Restart the background Worker process and release the current game from being tracked`,
            `Try this option if you've recently closed a game but Steam still shows it as running, or if Steam Achievement Notifier still shows as tracking a game that's already been closed`
        ],
        noupdateavailable: "No Update Available",
        latestversion: "Latest version installed",
        missingdeps: "Missing dependency",
        restartapp: "Restart App",
        restartappsub: [
            `If things aren't working right, use this option to close and reopen the app`,
            `If the issue persists after restarting the app, please consider reporting it by using the in-app links on the Home Screen`
        ],
        suspend: "Suspend",
        resume: "Resume",
        new: "New...",
        nodata: "No Data",
        findappid: "Find AppID",
        findappidsub: [
            `Each Steam game has a unique number associated with it - called an <span class="hl">AppID</span>. You can find any Steam game's associated AppID by checking one of the following:`,
            `In the <span class="hl">Steam client</span>, <i>right-click</i> a game in your <span class="hl">Library</span> and select <i>Properties</i> > <i>Updates</i> - the AppID will be listed here`,
            `The <span class="hl">URL</span> of the game's <span class="hl">Store page</span> - it will be the number listed after <span class="hl">app/</span>: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites such as <span class="hl">SteamDB</span> - the <span class="hl">App Info</span> section will list the AppID for each game`
        ],
        noexe: "Game EXE not found!",
        noexesub: "Click here for more information",
        noexedialogsub: [
            `Steam Achievement Notifier was unable to locate the exectuable file for this game automatically. The location of the game's executable file is required in order to "release" the game`,
            `To manually release the game, <i>right-click</i> the <span class="hl">System Tray icon</span> > <span class="hl">Options</span> > <span class="hl">Release Game</span>, or use the <span class="hl">Release Game Shortcut</span>`,
            `Alternatively, click the <span class="hl">Link</span> button below to add any focused window's associated executable file to the <span class="hl">Linked Games</span> menu`,
            `<span class="hl help" id="linkgamehelp"><u>What happens when I click the Link button?</u></span>`
        ],
        linkgamehelp: "Link Game via Window",
        linkgamehelpsub: [
            `Clicking the <span class="hl">Link</span> button will automatically add a new entry to the <span class="hl">Settings</span> > <span class="hl">Linked Games</span> menu, using information from the currently focused window.`,
            `After clicking the <span class="hl">Link</span> button, a 5-second timer will begin`,
            `Before the timer ends, focus the game window`,
            `Once the timer has ended, a new entry for the current <span class="hl">AppID</span> will be added to the <span class="hl">Settings</span> > <span class="hl">Linked Games</span> menu, using the focused window's associated executable file`,
            `If you need to try again, remove the entry via <span class="hl">Settings</span> > <span class="hl">Linked Games</span> by clicking the <span id="linkhelpunlink"></span> button`
        ],
        addlinkfailed: "Unable to link window",
        addlinkfailedsub: `Click the <span class="hl">Link</span> button to try again`,
        webhookunlockmsg: "$user unlocked an achievement",
        webhookunlockmsgplat: "$user unlocked all achievements",
        webhookingame: "in $gamename",
        notconnected: "Not connected",
        raloghelp: "My game is not being detected",
        raenablelog: `Emulator log files`,
        raenablelogsub: [
            `In order to access internal game events (such as current game status, achievement unlock information etc.), logging to an external <span class="hl">log file</span> <u>must be enabled</u> within any selected emulators.<br><br>Any selected emulators <u>must use this <span class="hl">log file</span></u> as the <span class="hl">Log File Path</span> value.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Settings > Logging</span> must be configured with the following settings:
                    <br>
                    <ul>
                        <li><span class="hllb">Logging Verbosity</span>: <span class="hlgreen">ON</span></li>
                        <li><span class="hllb">Frontend Logging Level</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Log to File</span>: <span class="hlgreen">ON</span></li>
                        <li><span class="hllb">Timestamp Log Files</span>: <span class="hlred">OFF</span></li>
                    </ul>
                    <br>
                    Using default installation settings, <span class="hl">"retroarch.log"</span> is stored in:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > View > Show Log Configuration</span> must be configured with the following settings:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Logger Outputs</span> > <span class="hlgreen">Write to File</span></li>
                        <li><span class="hllb">Log Types</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Using default installation settings, <span class="hl">"dolphin.log"</span> is stored in one of the following locations:
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2 [Nightly]</summary>
                <div>
                    <span class="hl">PCSX2 > Tools > Enable File Logging</span> must be enabled
                    <br>
                    <br>
                    Using default installation settings, <span class="hl">"emulog.txt"</span> is stored in:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="duckstation">Duckstation</summary>
                <div>
                    <ul style="background-color: var(--primary); outline: 0.1rem solid red;">
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> must be <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>downloaded</u></span> and moved to <span class="hl">Duckstation's installation directory</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Settings > Achievements > RAIntegration (Developer Only)</span> must be enabled
                    <br>
                    <br>
                    Using default installation settings, <span class="hl">"RALog.txt"</span> is stored in:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Unsupported Beta",
        betaunsupportedsub: [
            "A new version of Steam Achievement Notifier has been released!",
            `<u>This Beta version is now unsupported</u>. Please download and install the latest official release via Github using the <span class="hl">Releases</span> button below.`,
            "Thanks for testing! 💜"
        ],
        betaghreleases: "Releases",
    },
    app: {
        content: {
            game: "No Game Detected",
            customise: "Customise",
            test: "Show Test Notification"
        }
    },
    settings: {
        language: {
            title: "Language",
            content: {
                steamlang: "Translate Achievements to Steam Language",
                maxsteamlangretries: "Max Translation Retries"
            }
        },
        os: {
            title: "OS",
            content: {
                desktop: "Create Desktop Shortcut",
                startwin: "Start at Login",
                startmin: "Start Minimized",
                nohwa: "Disable Hardware Acceleration",
                litemode: "Lite Mode"
            }
        },
        notifications: {
            title: "Notifications",
            content: {
                rarity: "Rarity Percentage",
                rareonly: "Rare Only",
                all: "All",
                off: "Off",
                showpercent: "Show Percentage",
                soundonly: "Sound-Only Mode",
                nowtracking: "Show Tracking Notification",
                nowtrackingscale: "Tracking Scale",
                nowtrackingpos: "Tracking Position",
                shortcuts: "Notification Shortcuts",
                noiconcache: "Disable Icon Caching",
                webhooks: "Post to Discord Server",
                webhooktypes: "Webhook Types",
                webhookurl: `Webhook URL`,
                webhookcaution: `By enabling this option and providing a valid Discord Webhook link, you agree that you understand that <u>all achievement and game information for the current Steam user</u> will be posted to the specified Discord server via the Webhook link provided.<br><br>If you do not wish for Steam Achievement Notifier to post this information on your behalf, please disable this option.`,
                webhooklaststatus: "Last Status",
                webhookspoilers: `Add Spoiler Tag`,
                replaynotify: "Replay Notification",
                replaynotifyshortcut: "Replay Shortcut",
                customtrigger: "Use Custom Trigger",
                customtriggershortcut: "Trigger Shortcut",
                customtriggerdelay: "Trigger Delay"
            }
        },
        games: {
            title: "Games",
            content: {
                linkedgames: "Linked Games",
                themeswitch: "Auto-Switch Themes",
                exclusionlist: "Exclusion List"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Take Steam Screenshot",
                screenshots: "Additional Media",
                off: "Off",
                overlay: "Screenshot with Notification Overlay",
                monitors: "Screenshot Source",
                hdrmode: "HDR Mode",
                ovpos: "Overlay Position",
                ovmatch: "Match Customiser Position",
                ovx: "Horizontal Offset",
                ovy: "Vertical Offset",
                ovpath: "Screenshot Path",
                ssdelay: "Screenshot Delay",
                notifyimg: "Notification Image",
                imgpath: "Image Path",
                ssenabled: "Enable",
                ssmode: "Screenshot Mode",
                screen: "Screen",
                window: "Window"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Stream Notifications",
                extwinframerate: "Frame Rate",
                extwinshow: "Show Window",
                audiosrc: "Audio Source",
                notify: "Notification",
                app: "App Window",
                off: "Muted",
                statwin: "Achievement Stats Overlay",
                statwinaot: "Always on Top",
                noachievements: "No achievements to display",
                startgame: "Start a game to show achievements!",
                max: "Max",
                custom: "Custom...",
                statwinshortcut: "Overlay Shortcut"
            }
        },
        accessibility: {
            title: "Accessibility",
            content: {
                noanim: "Disable App Window Animations",
                noupdatedialog: "Disable Update Dialog",
                nvda: "Enable NVDA Support",
                tooltips: "Show Tooltips",
                showsystrayopts: "Show System Tray Options",
                releaseshortcut: "Release Game Shortcut"
            }
        },
        advanced: {
            title: "Advanced",
            content: {
                pollrate: "Poll Rate",
                initdelay: "Tracking Delay",
                releasedelay: "Release Delay",
                maxretries: "Max Process Retries",
                debug: "Debug Panel",
                userust: "Alt. Process Mode",
                notifydebug: "Show Notification DevTools",
                exportachdata: "Export Achievement Data",
                uselegacynotifytimer: "Use Legacy Notification Timer",
                usecustomfiles: "Use Custom App Files",
                showcustomfiles: "Show Custom App Files"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulators",
                rauser: "Username",
                rakey: "API Key",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2 [Nightly]",
                duckstation: "Duckstation",
                installdir: "Log File Path",
                rapercenttype: "Percentage Type",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Enter log file path",
                logfile: "Log File",
                status: "Status",
                game: "Game",
                wait: "Waiting for emulator",
                idle: "Waiting for game event",
                start: "Starting game",
                stop: "Stopping game",
                achievement: "Achievement unlocked"
            }
        },
        misc: {
            title: "Misc",
            content: {
                colorprofile: "Color Profile",
                checkforupdates: "Check For Updates",
                log: "App Log",
                reset: "Reset App"
            }
        }
    },
    customiser: {
        preset: {
            title: "Preset",
            content: {
                preset: "Notification Preset",
                iconanim: "Rare Icon Animation",
                alldetails: "Show All Details",
                usepercent: "Use Percentage",
                displaytime: "Display Time",
                scale: "Scale",
                customtext: "Custom Text",
                usegametitle: "Use Game Title",
                customfont: "Custom Font"
            }
        },
        sound: {
            title: "Sound",
            content: {
                soundmode: "Sound Mode",
                file: "File",
                folder: "Randomised",
                soundfile: "Sound File",
                sounddir: "Sound Folder",
                volume: "Volume"
            }
        },
        style: {
            title: "Style",
            content: {
                bgstyle: "Background Style",
                solid: "Solid",
                gradient: "Gradient",
                img: "Image",
                gameart: "Game Art",
                gradientangle: "Gradient Angle",
                bgimg: "Background Image",
                bgimgbrightness: "Brightness",
                brightness: "Brightness",
                blur: "Blur",
                roundness: "Roundness",
                fontsize: "Font Size",
                usecustomfontsizes: "Use Custom Font Sizes",
                unlockmsgfontsize: "Unlock Message",
                titlefontsize: "Title",
                descfontsize: "Description",
                textvspace: "Text Spacing",
                opacity: "Opacity",
                bgonly: "Background Only",
                glow: "Glow",
                glowcolor: "Color",
                glowsize: "Size",
                glowx: "Horizontal Offset",
                glowy: "Vertical Offset",
                glowopacity: "Opacity",
                glowanim: "Animation",
                glowspeed: "Speed",
                glowrarity: "Use Rarity",
                glowcolorbronze: "Rarity: > 50%",
                glowcolorsilver: "Rarity: < 50% & > $rarity",
                glowcolorgold: "Rarity: < $rarity",
                off: "None",
                pulse: "Pulse",
                double: "Double",
                focus: "Focus",
                orbit: "Orbit",
                fluorescent: "Fluorescent",
                rainbow: "Rainbow",
                mask: "Mask",
                maskimg: "Mask Image",
                useoutline: "Outline",
                outline: "Outline Type",
                outlinecolor: "Outline Color",
                outlinewidth: "Outline Width",
                dashed: "Dashed",
                dotted: "Dotted"
            }
        },
        colors: {
            title: "Colors",
            content: {
                primarycolor: "Primary Color",
                secondarycolor: "Secondary Color",
                tertiarycolor: "Tertiary Color",
                iconshadowcolor: "Rare Icon Shadow Color",
                iconanimcolor: "Rare Icon Animation Color",
                fontcolor: "Font Color",
                usecustomfontcolors: "Use Custom Font Colors",
                unlockmsgfontcolor: "Color 1",
                titlefontcolor: "Color 2",
                descfontcolor: "Color 3",
                fontoutline: "Font Outline",
                fontoutlinecolor: "Font Outline Color",
                fontoutlinescale: "Font Outline Scale",
                fontshadow: "Font Shadow",
                fontshadowcolor: "Font Shadow Color",
                fontshadowscale: "Font Shadow Scale"
            }
        },
        icons: {
            title: "Icons",
            content: {
                iconscale: "Icon Scale",
                iconroundness: "Icon Roundness",
                showiconborder: "Show Icon Border",
                iconborderimg: "Icon Border",
                iconborderpos: "Border Position",
                iconborderscale: "Border Scale",
                iconborderx: "Horizontal Offset",
                iconbordery: "Vertical Offset",
                iconborderrarity: "Use Rarity",
                iconborderimgbronze: "Rarity > 50%",
                iconborderimgsilver: "Rarity: < 50% & > $rarity",
                front: "Front",
                back: "Back",
                plat: "100% Logo",
                usegameicon: "Use Game Icon",
                gameicontype: "Game Icon Type",
                usecustomimgicon: "Use Custom Icon",
                customimgicon: "Custom Icon",
                icon: "Icon",
                logo: "Logo",
                logoscale: "Logo Scale",
                decoration: "Decoration",
                decorationscale: "Decoration Scale",
                showdecoration: "Show Decoration",
                rarity: "Rarity",
                showhiddenicon: "Show Hidden Icon",
                hiddenicon: "Hidden Icon",
                replacelogo: "Replace Logo"
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Screen Position",
                usecustompos: "Use Custom Position",
                setcustompos: "Set",
                resetcustompos: "Reset"
            }
        },
        theme: {
            title: "Theme",
            content: {
                updatetheme: "Update Theme",
                savetheme: "Save Theme",
                sub: [
                    `Saved <span class="hl">User Themes</span> can be selected from the <span class="hl">Select Theme</span> menu on the Home screen.`,
                    `Make sure the <span class="hl">Theme Name</span> is <u>unique</u> - a name matching an existing theme <u>will overwrite the previous one</u>!`
                ],
                placeholder: "Theme Name",
                theme: "Theme",
                importtheme: "Import Theme",
                import: "Import",
                importsub: [
                    `Import a user-created <span class="hl">Theme file</span>`,
                    `<span class="hl">Imported Themes</span> will be loaded automatically once successfully imported, and can be selected from the <span class="hl">Theme Select</span> menu`,
                ],
                importidle: `Select a <span class="hl">Theme file</span> to import`,
                importcopied: `Theme copied successfully`,
                importrenamed: `Theme renamed successfully`,
                importextracted: `Theme extracted successfully`,
                importrewriting: `Rewriting Theme file paths...`,
                importconverting: `Converting Theme...`,
                importcreating: `Creating Theme...`,
                importdone: `Theme imported successfully`,
                importfailed: `Error importing selected Theme file!`,
                exporttheme: "Export Theme",
                export: "Export",
                exporterrortitle: "Error exporting Theme",
                exporterrorsub: [
                    "An error occurred while attempting to export the selected Theme",
                    `Try saving the current Theme (<i>via <span class="hl">Save Theme</span></i>) and attempt to export again`,
                    `If the issue persists, please copy the error below, then report via the link buttons on the <span class="hl">Home Screen</span>`
                ],
                synctheme: "Sync Theme",
                syncedwith: "Synced with",
                themeselect: "Selected Theme"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Here's what's happened since the app was started at",
            copylog: "Copy Log Contents"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Are you sure?</span>
                    <span>All previously configured data, <u>including Customisations</u>, will be reset to default.</span>
                    <span>🛑 This cannot be undone!</span>
                </div>
            `,
            reset: "Reset"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier encountered an issue and needs to close.",
            details: "Here's the error details:",
            sub: "Click the buttons below to report this issue via your preferred platform.",
            report: "Report",
            log: "App Log",
            exit: "Exit"
        }
    },
    tooltips: {
        game: "The game for which achievements are currently being tracked",
        usertheme: "Select a previously saved Theme",
        customise: "Customise achievement Notifications",
        test: "Show a Test Notification, including any customisations",
        kofi: "Donate on Ko-Fi!",
        discord: "Join on Discord!",
        github: "Report an issue",
        lang: "Select the UI language used within the app",
        steamlang: `Attempt to load translations located within Steam's application files to display achievement information in the user's chosen Steam client language<br><br><span class="ttdesc">This option attempts to locate translations in a JSON file stored within Steam's application data. If a translation for the current achievement cannot be located, achievement information retrieved from Steamworks will be displayed instead</span>`,
        maxsteamlangretries: `The number of times (per 100ms) attempts to locate valid translations for the current achievement will be made<br><br><span class="ttdesc">Steam currently only stores a small amount of achievement data within each game's associated JSON file. Any achievements that are not present within this file will be appended after the achievement is unlocked.<br><br>As appending new data can take time, increasing this value will increase the likelihood that translation data for the current achievement will be located, but may also delay the notification from appearing on-screen by the amount of time calculated by this setting.<br><br>If no valid translation data can be located for the current achievement, translations will fallback to the language specified in Steamworks.</span>`,
        desktop: "Toggle a shortcut on the Desktop to run the app",
        startwin: "Start Steam Achievement Notifier automatically after logging in",
        startmin: "After launching, hide the app UI window until opened from the System Tray",
        nohwa: `Disable Hardware Acceleration, which may improve performance on lower-end systems, or systems without a dedicated GPU<br><br><span class="ttdesc">App will restart after enabling/disabling this option</span>`,
        litemode: "Disable all interactive UI elements, while only providing limited app functionality via the System Tray icon. May improve resources consumed by the app",
        rarity: "The percentage at which Rare achievement notifications will be triggered. Any achievement with an unlock percentage above this value will be displayed as a Main notification",
        showpercent: "Display the unlock percentage of the achievement in the notification for the selected type(s)",
        soundonly: "Disable notifications, only playing sounds set via the Customiser",
        extwin: "Create a window that duplicates any notifications currently being displayed on-screen. This window can then be added as a Window Capture source for use in streaming software, such as OBS",
        extwinframerate: "Set the target frame rate for Stream Notifications",
        extwinshow: `Toggle visibility of the Stream Notifications window<br><br><span class="ttdesc">When focused in the taskbar, press and hold the <code class="ttcode">Ctrl</code> key to display the current location of the window</span>`,
        audiosrc: "Select the source of (or disable) audio generated by the app",
        nowtracking: "Display a notification notifying the user that achievements for a running game are being tracked",
        nowtrackingscale: `Set the size of the tracking notification`,
        nowtrackingpos: `Set the position of the tracking notification`,
        shortcuts: "Trigger a Test Notification via a keyboard shortcut. Shortcuts can be customised for each notification type",
        noiconcache: `Disable caching achievement icons while launching games<br><br><span class="ttdesc">This can greatly improve in-app performance when launching games, and may also resolve tracking issues with games that have a large number of achievements. However, in rare instances, disabling icon caching may result in missing achievement icons in notifications</span>`,
        steamss: "Take a Steam screenshot when an achievement is unlocked",
        screenshots: "Select the type of Additional Media to create when a notification is displayed",
        monitors: "The monitor that will be captured when taking the screenshot",
        hdrmode: `Take screenshots using a method compatible with monitors using High Dynamic Range (HDR)`,
        ovpos: "The position of the notification overlay within the screenshot",
        ovmatch: "Match the Screen Position set in the Customiser for this notification type",
        ovpath: "The location where screenshots generated by this option will be saved",
        ssdelay: "Add a delay from when the notification occurs to when the screenshot is taken",
        sspreview: "Show a preview of how the screenshot will appear when saved",
        noanim: "Disable all in-app window animations and transition effects",
        noupdatedialog: `Prevent the <span class="hl">Update Available</span> dialog from showing and focusing automatically<br><br><span class="ttdesc">The dialog can still be accessed by clicking the update button when available</span>`,
        nvda: "Enable copying achievement information to the clipboard when an achievement is unlocked, in order to be read by screen-reader software, such as NVDA",
        tooltips: "Display tooltips when hovering over certain UI elements",
        colorprofile: `Force all app windows to render using the selected color profile<br><br><span class="ttdesc">Requires app restart</span>`,
        pollrate: `Set the update interval for achievement data during gameplay<br><br><span class="ttdesc">Performance may increase/decrease depending on the value or system hardware. Higher values typically result in lower system load, but may cause notifications to be more delayed</span>`,
        initdelay: `Set the delay between detection of the current <span class="hl">AppID</span> and when process/achievement tracking starts<br><br><span class="ttdesc">Increasing this value can prevent scenarios where Steam is unable to launch the current game (due to the app initialising Steamworks before the game has launched)</span><br><br><span class="ttdesc">Alternatively, increasing this value can also be used to bypass incorrect detection of pre-game launcher processes</span>`,
        releasedelay: `Set how long the background Worker process waits to restart after the current game has been released. Affects both automatic process tracking and manually linked games<br><br><span class="ttdesc">Allows a longer timeframe for Steamworks to be fully released from the app. Increasing this value can prevent unusual behaviour, such as tracking a previously closed game</span>`,
        maxretries: `Set the maximum number of retries to link a running process to a detected AppID. Affects both automatic process tracking and manually linked games<br><br><span class="ttdesc">Retries are attempted once every second. If a running process is not linked to the current AppID after this number of retries, an invalid process will be returned. In such cases, the game will need to be manually released via System Tray > Options > Release Game</span>`,
        debug: "Open the Debug Panel, which displays in-depth Process Tracking info",
        userust: "Use an alternative Rust-based function to check whether tracked game processes are currently running on the system. When unchecked, the default Node JS-based process check will be used instead",
        notifydebug: "Create a DevTools window for all notifications. Useful for debugging/troubleshooting notification issues",
        usecustomfiles: "Enables notifications to load user-customisable files. Caution is advised for regular users",
        showcustomfiles: "Open the location of the custom files",
        log: "Open the App Log window, which displays information about process activity, warnings and errors",
        reset: "Removes all configuration data and restarts the app",
        playback: "Pause/resume the animation of the notification preview",
        replay: "Restart the animation of the notification preview",
        preset: "Select the notification preset to customise",
        iconanim: "Toggle the Rare icon border and animation",
        alldetails: "Display all text elements within the notification, including those hidden by default for this preset",
        usepercent: "Display the unlock percentage of the achievement, instead of the XP/S value",
        displaytime: "Set the number of seconds the notification will display",
        scale: "Increase or decrease the size of the notification",
        customtext: "Set a custom message to be displayed within the notification",
        usegametitle: "Show the title of the current game within the notification",
        customfont: "Load a custom font to be used within the notification",
        soundmode: "Select either a single audio file, or a randomly selected audio file from within a folder containing multiple audio files, when a notification occurs",
        soundfile: "Select an audio file to play when a notification occurs",
        sounddir: "Select a folder from which an audio file will be randomly selected when a notification occurs",
        volume: "Set the playback volume of the audio file",
        preview: "Preview the selected audio file, or an audio file randomly selected from the folder",
        bgstyle: "Select the style for the background of the notification",
        gradientangle: "Set the angle of the gradient",
        bgimg: "Load an image file to be used as the notification background",
        bgimgbrightness: "Set the brightness of the image used as the notification background",
        brightness: "Set the brightness of the game art used as the notification background",
        blur: "Set the level of blur applied to the background of the notification",
        roundness: "Set the roundness of the notification edges",
        fontsize: "Set the size of the font used in the notification",
        opacity: "Set the overall opacity of the notification",
        bgonly: "Only set the opacity for the notification background, keeping other elements at full opacity",
        glow: "Enable a glow effect that surrounds the notification",
        glowcolor: "Set the color of the glow effect",
        glowsize: "Set the size of the glow effect",
        glowx: "Offset the position of the glow effect horizontally",
        glowy: "Offset the position of the glow effect vertically",
        glowopacity: "Set the opacity of the glow effect",
        glowanim: "Select a preset animation to be applied to the glow effect",
        glowspeed: "Set the speed of the animation applied to the glow effect",
        glowrarity: "Change the color of the glow effect based on the rarity of the unlocked achievement",
        glowcolorbronze: "The glow color displayed when the unlock percentage is > 50%",
        glowcolorsilver: "The glow color displayed when the unlock percentage is < 50% and > $rarity",
        glowcolorgold: "The glow color displayed when the unlock percentage is < $rarity",
        mask: "Enable masking parts of the notification with a custom image",
        maskimg: `Load an image file to be used as the mask<br><br><span class="ttdesc">In CSS, <code class="ttcode">mask-mode: alpha</code> operates in the opposite way to what is usually expected - areas of transparency in the image file will be obscured, and areas of black/grey will allow the elements below to be visible</span>`,
        useoutline: "Display an outline around the notification",
        outline: "Select the type of outline to show around the notification",
        outlinecolor: "Set the color of the outline around the notification",
        outlinewidth: "Set the width of the outline around the notification",
        primarycolor: "Set the primary color of the notification",
        secondarycolor: "Set the secondary color of the notification",
        tertiarycolor: "Set the tertiary color of the notification",
        fontcolor: "Set the color of all text displayed within the notification",
        fontoutline: "Add an outline to all text displayed within the notification",
        fontoutlinecolor: "Set the color of the text outline",
        fontoutlinescale: "Set the thickness of the text outline",
        fontshadow: "Add a shadow to all text displayed within the notification",
        fontshadowcolor: "Set the color of the text shadow",
        fontshadowscale: "Set the thickness of the text shadow",
        iconroundness: "Set the roundness of the achievement/game icon displayed within the notification",
        plat: "Load an image file to be used as the 100% icon",
        usegameicon: "Replace the icon of the unlocked achievement with the icon for the current game",
        gameicontype: `Select which type of image to display as the Game Icon`,
        usecustomimgicon: "Replace the icon of the unlocked achievement with a custom image file",
        customimgicon: "Load an image file to be used as the Custom Icon",
        showhiddenicon: `Display an image indicating the achievement is a Hidden achievement in the notification`,
        hiddenicon: "Load an image file to replace the Hidden achievement icon",
        logo: "Load an image file to replace the Logo icon",
        decoration: "Load an image file to replace the Decoration icon",
        showdecoration: "Toggle the visibility of the Decoration icon",
        replacelogo: "Replace the Logo icon in the notification with the selected Decoration",
        pos: "Set the on-screen position of the notification",
        usecustompos: "Enable custom positioning for the notification",
        setcustompos: "Set the custom position for the notification",
        resetcustompos: "Reset the position of the notification to the default custom position",
        updatetheme: "Update the current Theme with the selected customisation options",
        savetheme: "Save all configured customisation options as a new Theme",
        visibilitybtn: "Toggle the visibility of the element in Customiser previews and Test Notifications",
        delbtn: "Reset the element to default",
        imgpath: "The location where notification images generated by this option will be saved",
        ssenabled: "Enable or disable generating media for this type",
        checkforupdates: `Check whether a new app version has been released on GitHub. If an update is available, it will be automatically downloaded and installed once confirmed via the <span class="hl">Update Available</span> dialog`,
        linkedgames: `Bypass <span class="hl">automatic process tracking</span> for specific Steam games<br><br><span class="ttdesc">This option should only be used for very specific scenarios. Users should not need to use this option under normal circumstances!</span>`,
        exclusionlist: `Prevent achievements in specific Steam games from being tracked by the app<br><br><span class="ttdesc">This option should only be used for very specific scenarios. Users should not need to use this option under normal circumstances!</span>`,
        ovx: "Offset the notification displayed in the screenshot horizontally",
        ovy: "Offset the notification displayed in the screenshot vertically",
        importtheme: `Import customisations via a user-created <span class="hl">Theme file</span>`,
        exporttheme: `Export the currently selected <span class="hl">Theme</span> for sharing<br><br><span class="ttdesc">Before attempting to export, please ensure the desired <span class="hl">Theme</span> has been selected (via the <span class="hl">Theme Select</span> menu). Please also ensure that customisations have been saved to the selected <span class="hl">Theme</span> (via the <span class="hl">Save Theme</span> menu)<br><br><u>Any customisations not yet saved to the current <span class="hl">Theme</span> will not be exported!</u></span>`,
        webhooks: "Use a Webhook URL to post in a Discord server whenever an achievement is unlocked",
        webhookmain: `Toggle whether to post achievement information to a Discord server when a Main achievement is unlocked`,
        webhookrare: "Toggle whether to post achievement information to a Discord server when a Rare achievement is unlocked",
        webhookplat: "Toggle whether to post achievement information to a Discord server when a 100% achievement is unlocked",
        webhooktest: "Toggle whether to post test information to a Discord server when Test Notifications of any type are triggered",
        webhookurl: `Set the <span class="hl">Webhook URL</span> for the desired Discord server<br><br><span class="ttdesc">A <span class="hl">Webhook URL</span> is used to post to a Discord server/channel on behalf of a user or application. In order to set up a new Webhook for a Discord server, the user must have a role within the desired server that allows the creation of Webhooks<br><br><u>A Webhook URL is required when using this option</u><br><br>Refer to Discord's official documentation for more information</span>`,
        webhookspoilers: `Add a spoiler tag to "Hidden" achievements when posted to Discord`,
        unlockmsg: "Set the position of the unlock message/custom text within the $type",
        title: "Set the position of the achievement title within the $type",
        desc: "Set the position of the achievement description within the $type",
        notification: "notification",
        screenshot: "screenshot",
        percentpos: "Set the position of the unlock percentage within the $type",
        sspercentpos: "Set the position of the unlock percentage within the $type",
        hiddeniconpos: "Set the position of the hidden/secret achievement icon within the $type",
        sshiddeniconpos: "Set the position of the hidden/secret achievement icon within the $type",
        decorationpos: "Set the position of the decoration element within the $type",
        ssdecorationpos: "Set the position of the decoration element within the $type",
        percentbadge: "Display the unlock percentage inside a badge placed above the achievement/game icon",
        sspercentbadge: "Display the unlock percentage inside a badge placed above the achievement/game icon",
        percentbadgepos: "Set the position of the badge",
        sspercentbadgepos: "Set the position of the badge",
        percentbadgecolor: "Set the background color of the badge",
        sspercentbadgecolor: "Set the background color of the badge",
        percentbadgefontcolor: "Set the font color of the badge",
        sspercentbadgefontcolor: "Set the font color of the badge",
        percentbadgefontsize: "Set the size of the badge",
        sspercentbadgefontsize: "Set the size of the badge",
        percentbadgeroundness: "Set the roundness of the badge",
        sspercentbadgeroundness: "Set the roundness of the badge",
        percentbadgex: "Offset the position of the badge element horizontally",
        sspercentbadgex: "Offset the position of the badge element horizontally",
        percentbadgey: "Offset the position of the badge element vertically",
        sspercentbadgey: "Offset the position of the badge element vertically",
        percentbadgeimg: "Display a rarity-based icon as the badge element",
        sspercentbadgeimg: "Display a rarity-based icon as the badge element",
        percentbadgeimgbronze: "The badge icon displayed when the unlock percentage is > 50%",
        sspercentbadgeimgbronze: "The badge icon displayed when the unlock percentage is > 50%",
        percentbadgeimgsilver: "The badge icon displayed when the unlock percentage is < 50% and > $rarity",
        sspercentbadgeimgsilver: "The badge icon displayed when the unlock percentage is < 50% and > $rarity",
        percentbadgeimggold: "The badge icon displayed when the unlock percentage is < $rarity",
        sspercentbadgeimggold: "The badge icon displayed when the unlock percentage is < $rarity",
        resetpbimgs: "Reset all badge icons to default",
        elemsmatch: `Match the Notification Elements settings set in the Customiser for this notification type<br><br><span class="ttdesc">Some Notification Presets cannot fully match Customiser settings, due to differences between on-screen and screenshot-based notification layouts</span>`,
        themeswitch: `Automatically switch to any saved <span class="hl">Theme</span> when a specific game is detected`,
        userthemesync: `Sync customisations in the selected <span class="hl">Theme</span> to all other notification types`,
        showsystrayopts: `Display all options usually located under <span class="hl">System Tray</span> > <span class="hl">Options</span> in <span class="hl">Settings</span> > <span class="hl">Misc.</span>`,
        releaseshortcut: "Release the currently tracked game using the specified keyboard shortcut",
        themeselect: "Select a previously saved Theme",
        statwin: `Display configurable achievement stats for the current game in an external window<br><br><span class="ttdesc">When used in conjunction with the <span class="hl">Translate Achievements to Steam Language</span> option, some translations may not be available until the specified achievement is unlocked</span>`,
        statwinaot: `Set the Achievement Stats Overlay to "Always on Top" mode, allowing the window to be displayed above the game window<br><br><span class="ttdesc">When enabled, the Achievement Stats Overlay will no longer register user interactions, such as "click" events. To re-enable interaction with the window, this option must be disabled</span>`,
        statwinshortcut: "Toggle the Achievement Stats Overlay using the specified keyboard shortcut",
        ssdisplay: "Display a preview of the captured screenshot within the notification",
        iconscale: "Increase or decrease the size of the achievement icon",
        showiconborder: "Display an image as a border around the achievement icon",
        iconborderimg: "Load an image file for use as a border around the achievement icon",
        iconborderpos: "Set whether to display the icon border image in front or behind the achievement icon",
        iconborderscale: "Increase or decrease the size of the icon border within the notification",
        iconborderx: "Increase or decrease the horizontal offset of the icon border within the notification",
        iconbordery: "Increase or decrease the vertical offset of the icon border within the notification",
        iconborderrarity: "Change the displayed icon border image based on the rarity of the unlocked achievement",
        iconborderimgbronze: "The icon border image displayed when the unlock percentage > 50%",
        iconborderimgsilver: "The icon border image displayed when the unlock percentage is < 50% and > $rarity",
        iconshadowcolor: "Set the color of the shadow effect surrounding the achievement icon when unlocking a Rare achievement",
        iconanimcolor: "Set the color of the animation effect behind the achievement icon when unlocking a Rare achievement",
        logoscale: "Increase or decrease the size of the Logo element within the notification",
        decorationscale: "Increase or decrase the size of the Decoration element within the notification",
        usecustomfontsizes: `Individually increase or decrease the size of text elements within the notification<br><br><span class="ttdesc">Preservation of the intended notification layout cannot be guaranteed when changing individual font size values</span>`,
        unlockmsgfontsize: "Increase or decrease the size of the unlock message text element",
        titlefontsize: "Increase or decrease the size of the achievement title text element",
        descfontsize: "Increase or decrease the size of the achievement description text element",
        webhookembedcolormain: "Set the color used in the webhook embed when a Main achievement is unlocked",
        webhookembedcolorrare: "Set the color used in the webhook embed when a Rare achievement is unlocked",
        webhookembedcolorplat: "Set the color used in the webhook embed when a 100% achievement is unlocked",
        raemus: "Display notifications when games are detected in supported emulators",
        rauser: "Set the Retro Achievements username to track achievements for",
        rakey: `Set the Web API Key to use for authentication to the Retro Achievements API<br><br><span class="ttdesc">A Web API Key can be copied or regenerated by logging into the Retro Achievements website and navigating to <span class="hl">Settings > Keys > Web API Key</span><br><br>🔒 The provided key will be encrypted before being stored locally on the system (if the current OS supports encryption)</span>`,
        rapercenttype: "Set whether to display Hardcore or Softcore achievement unlock percentages in notifications",
        retroarch: `Display Retro Achievements notifications for games emulated via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Settings > Logging</span> must be configured with the following settings:<br><br><ul><li><span class="hllb">Logging Verbosity</span>: <span class="hlgreen">ON</span></li><li><span class="hllb">Frontend Logging Level</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Log to File</span>: <span class="hlgreen">ON</span></li><li><span class="hllb">Timestamp Log Files</span>: <span class="hlred">OFF</span></li></ul></span>`,
        dolphin: `Display Retro Achievements notifications for games emulated via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > View > Show Log Configuration</span> must be configured with the following settings:<br><br><ul><li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Logger Outputs</span> > <span class="hlgreen">Write to File</span></li><li><span class="hllb">Log Types</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Display Retro Achievements notifications for games emulated via PCSX2 [Nightly]<br><br><span class="ttdesc"><span class="hl">PCSX2 > Tools > Enable File Logging</span> must be enabled</span><br><br><span class="ttdesc">❗ Due to recent updates, the contents of <span class="hl">"emulog.txt"</span> can currently only be accessed in the Nightly release of PCSX2</span>`,
        duckstation: `Display Retro Achievements notifications for games emulated via Duckstation<br><br><span class="ttdesc">❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> must be downloaded and moved to <span class="hl">Duckstation's installation directory</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Settings > Achievements > RAIntegration (Developer Only)</span> must be enabled</span>`,
        retroarchpath: `Set the path to RetroArch's <span class="hl">"retroarch.log"</span> log file<br><br><span class="ttdesc">Using default installation settings, <span class="hl">"retroarch.log"</span> is stored in <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Set the path to Dolphin's <span class="hl">"dolphin.log"</span> log file<br><br><span class="ttdesc">Using default installation settings, <span class="hl">"dolphin.log"</span> is stored in one of the following locations:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Set the path to PCSX2's <span class="hl">"emulog.txt"</span> log file<br><br><span class="ttdesc">Using default installation settings, <span class="hl">"emulog.txt"</span> is stored in <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Set the path to Duckstation's <span class="hl">"RALog.txt"</span> log file<br><br><span class="ttdesc">Using default installation settings, <span class="hl">"RALog.txt"</span> is stored in <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        usecustomfontcolors: "Individually set the color of text elements within the notification",
        unlockmsgfontcolor: "Set the color of the first text element",
        titlefontcolor: "Set the color of the second text element",
        descfontcolor: "Set the color of the third text element",
        exportachdata: `Export achievement data to a JSON file when an achievement is unlocked<br><br><span class="ttdesc">When enabled, <span class="ttcode">achdata.json</span> will be exported to:<br><br><ul><li><span class="hllb">%localappdata\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Adjust the vertical spacing between text elements within the notification",
        ssmode: `Set whether to capture the entire screen or the current game window<span style="color: red;">*</span> in screenshots<br><br><span class="ttdesc">If the current game's <span class="hl">executable file</span> cannot be located (<i>either via <span class="hl">automatic process tracking</span> or adding as a <span class="hl">Linked Game</span></i>), this option will default to "Screen" mode</span>`,
        replaynotify: "Replay the last achievement notification",
        replaynotifyshortcut: "Replay the last achievement notification using the specified keyboard shortcut",
        replaynotifyempty: `<br><br><span class="ttdesc">Replay queue is empty. Unlock an achievement to replay a notification</span>`,
        uselegacynotifytimer: `Despawn notifications using a static timer external to the notification window<br><br><span class="ttdesc">Enabling this option may result in notification animations failing to complete</span>`,
        customtrigger: "Trigger a key/combo to be simulated when unlocking an achievement. Can be used to trigger keyboard shortcuts registered in external applications",
        customtriggershortcut: "Trigger the specified key/combo when an achievement is unlocked",
        customtriggerdelay: "Delay the registered Custom Trigger key/combo"
    },
    update: {
        updateavailable: "Update available",
        sub: [
            `<span id="newversion"></span>`,
            "A new update to Steam Achievement Notifier is available!",
            `Full Release Notes available on <span id="discordreleasenotes"></span> and <span id="githubreleasenotes"></span>`
        ],
        update: "Update"
    },
    linkgame: {
        content: {
            exepath: "Executable Path",
            managesub: [
                `Manually link a game's <span class="hl">executable file</span> to a specific <span class="hl">AppID</span>, or <span class="hl">unlink</span> an existing one`,
                `Steam Achievement Notifier will no longer use <span class="hl">automatic process tracking</span> for any <span class="hl">linked games</span> - instead, the specified <span class="hl">executable file</span> will be tracked whenever the associated <span class="hl">AppID</span> is detected`,
                `<span class="hl help" id="appidhelp"><u>How do I find a Steam game's AppID?</u></span>`
            ],
            linknew: "New Linked Game",
            linknewsub: [
                `Create a new link between a <span class="hl">game executable</span> and the associated <span class="hl">AppID</span>`,
                `Once created, links can be <span class="hl">unlinked</span> via the previous <span class="hl">Manage Linked Games</span> dialog`
            ],
            link: "Link"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Add any Steam game's <span class="hl">AppID</span> to the <span class="hl">Exclusion List</span>`,
                `Steam Achievement Notifier will not attempt to track achievement data for any game's <span class="hl">AppID</span> added to the <span class="hl">Exclusion List</span>`,
                `<span class="hl help" id="appidhelp"><u>How do I find a Steam game's AppID?</u></span>`
            ],
            exclusionnew: "New Exclusion",
            exclusionnewsub: [
                `Enter the <span class="hl">AppID</span> to add to the <span class="hl">Exclusion List</span>`
            ]
        }
    },
    notificationelems: {
        title: "Notification Elements",
        content: {
            unlockmsg: "Unlock Message",
            title: "Achievement Title",
            desc: "Achievement Description",
            hiddeniconpos: "Hidden Icon",
            sshiddeniconpos: "Hidden Icon",
            decorationpos: "Decoration",
            ssdecorationpos: "Decoration",
            percentpos: "Rarity Percentage",
            sspercentpos: "Rarity Percentage",
            percentbadge: "Rarity Badge",
            sspercentbadge: "Rarity Badge",
            percentbadgepos: "Badge Position",
            sspercentbadgepos: "Badge Position",
            percentbadgecolor: "Badge Color",
            sspercentbadgecolor: "Badge Color",
            percentbadgefontcolor: "Badge Font Color",
            sspercentbadgefontcolor: "Badge Font Color",
            percentbadgefontsize: "Badge Size",
            sspercentbadgefontsize: "Badge Size",
            percentbadgeroundness: "Badge Roundness",
            sspercentbadgeroundness: "Badge Roundness",
            percentbadgex: "Horizontal Offset",
            sspercentbadgex: "Horizontal Offset",
            percentbadgey: "Vertical Offset",
            sspercentbadgey: "Vertical Offset",
            percentbadgeimg: "Use Icon",
            sspercentbadgeimg: "Use Icon",
            percentbadgeimgbronze: "Rarity: > 50%",
            sspercentbadgeimgbronze: "Rarity: > 50%",
            percentbadgeimgsilver: "Rarity: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Rarity: < 50% & > $rarity%",
            percentbadgeimggold: "Rarity: < $rarity%",
            sspercentbadgeimggold: "Rarity: < $rarity%",
            resetpbimgs: "Reset Badge Icons",
            elemsmatch: "Match Customiser Settings",
            ssdisplay: "Show Screenshot Preview"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Add any game's <span class="hl">AppID</span> to automatically switch <span class="hl">Themes</span> when detected`,
                `Any saved <span class="hl">Theme</span> can be selected for each notification type, along with the desired monitor to use as a <span class="hl">Screenshot Source</span>`,
                `<span class="hl help" id="appidhelp"><u>How do I find a Steam game's AppID?</u></span>`
            ],
            themeswitchnew: "New Auto-Switch",
            themeswitchnewsub: [
                `Enter the game's <span class="hl">AppID</span>, along with the desired monitor to use as a <span class="hl">Screenshot Source</span>`,
                `Select which <span class="hl">Theme</span> to switch to for each notification type when this game's <span class="hl">AppID</span> is detected`
            ],
            themes: "Themes",
            src: "Screenshot Source",
            themedeleted: "Theme deleted"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Looks like you're trying to enable the <span class="hl">${opt}</span> option. However, on Linux, screenshots cannot be enabled without installing the <code class="dialogcode">${dep}</code> package first`,
    `Please run <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> in order to install this dependency. This will ensure screenshots can be taken on this device`
]