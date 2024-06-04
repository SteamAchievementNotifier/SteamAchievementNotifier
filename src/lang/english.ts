export const translations = {
    global: {
        main: "Main",
        rare: "Rare",
        plat: "100%",
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
        missingdepssub: [
            `Looks like you're trying to enable the <span class="hl">Take Steam Screenshot</span> option. However, on Linux, screenshots cannot be automatically triggered without installing the <code class="dialogcode">xdotool</code> package first`,
            `Please run <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> in order to install this dependency, which will ensure Steam screenshots can be taken on this device`
        ],
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
            `The <span class="hl">URL</span> of the game's <span class="hl">Store page</span> - it will be the number listed after <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites such as <span class="hl">SteamDB</span> - the <span class="hl">App Info</span> section will list the AppID for each game`
        ]
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
            title: "Language"
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
                extwin: "Stream Notifications",
                audiosrc: "Audio Source",
                notify: "Notification",
                app: "App",
                nowtracking: "Show Tracking Notification",
                nowtrackingscale: "Tracking Scale",
                shortcuts: "Notification Shortcuts",
                noiconcache: "Disable Icon Caching"
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
                ovpos: "Overlay Position",
                ovmatch: "Match Customiser Position",
                ovpath: "Screenshot Path",
                ssdelay: "Screenshot Delay",
                notifyimg: "Notification Image",
                imgpath: "Image Path"
            }
        },
        games: {
            title: "Games",
            content: {
                linkedgames: "Linked Games",
                exclusionlist: "Exclusion List"
            }
        },
        accessibility: {
            title: "Accessibility",
            content: {
                noanim: "Disable App Window Animations",
                nvda: "Enable NVDA Support",
                tooltips: "Show Tooltips"
            }
        },
        advanced: {
            title: "Advanced",
            content: {
                pollrate: "Poll Rate",
                releasedelay: "Release Delay",
                maxretries: "Max Process Retries",
                debug: "Debug Panel",
                userust: "Alt. Process Mode",
                notifydebug: "Show Notification DevTools",
                usecustomfiles: "Use Custom App Files",
                showcustomfiles: "Show Custom App Files"
            }
        },
        misc: {
            title: "Misc",
            content: {
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
                opacity: "Opacity",
                bgonly: "Background Only",
                glow: "Glow",
                glowcolor: "Color",
                glowsize: "Size",
                glowanim: "Animation",
                glowspeed: "Speed",
                off: "None",
                pulse: "Pulse",
                rainbow: "Rainbow",
                mask: "Mask",
                maskimg: "Mask Image"
            }
        },
        colors: {
            title: "Colors",
            content: {
                primarycolor: "Primary Color",
                secondarycolor: "Secondary Color",
                tertiarycolor: "Tertiary Color",
                fontcolor: "Font Color",
                fontoutline: "Font Outline",
                fontoutlinecolor: "Font Outline Color",
                fontshadow: "Font Shadow",
                fontshadowcolor: "Font Shadow Color"
            }
        },
        icons: {
            title: "Icons",
            content: {
                iconroundness: "Icon Roundness",
                plat: "100% Logo",
                usegameicon: "Use Game Icon",
                logo: "Logo",
                decoration: "Decoration",
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
                savetheme: "Save Theme",
                sub: [
                    `Saved <span class="hl">User Themes</span> can be selected from the <span class="hl">Select Theme</span> menu on the Home screen.`,
                    `Make sure the <span class="hl">Theme Name</span> is <u>unique</u> - a name matching an existing theme <u>will overwrite the previous one</u>!`
                ],
                placeholder: "Theme Name",
                theme: "Theme"
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
        desktop: "Toggle a shortcut on the Desktop to run the app",
        startwin: "Start Steam Achievement Notifier automatically after logging in",
        startmin: "After launching, hide the app UI window until opened from the System Tray",
        nohwa: `Disable Hardware Acceleration, which may improve performance on lower-end systems, or systems without a dedicated GPU<br><br><span class="ttdesc">App will restart after enabling/disabling this option</span>`,
        litemode: "Disable all interactive UI elements, while only providing limited app functionality via the System Tray icon. May improve resources consumed by the app",
        rarity: "The percentage at which Rare achievement notifications will be triggered. Any achievement with an unlock percentage above this value will be displayed as a Main notification",
        showpercent: "Display the unlock percentage of the achievement in the notification for the selected type(s)",
        soundonly: "Disable notifications, only playing sounds set via the Customiser",
        extwin: "Create a hidden background window that duplicates any notifications currently being displayed on-screen. This window can then be added as a Window Capture source for use in streaming software, such as OBS",
        audiosrc: "Select the source of (or disable) audio generated by the app",
        nowtracking: "Display a notification notifying the user that achievements for a running game are being tracked",
        nowtrackingscale: `Set the size of the tracking notification`,
        shortcuts: "Trigger a Test Notification via a keyboard shortcut. Shortcuts can be customised for each notification type",
        noiconcache: `Disable caching achievement icons while launching games.<br><br><span class="ttdesc">This can greatly improve in-app performance when launching games, and may also resolve tracking issues with games that have a large number of achievements. However, in rare instances, disabling icon caching may result in missing achievement icons in notifications</span>`,
        steamss: "Take a Steam screenshot when an achievement is unlocked",
        screenshots: "Select the type of Additional Media to create when a notification is displayed",
        monitors: "The monitor that will be captured when taking the screenshot",
        ovpos: "The position of the notification overlay within the screenshot",
        ovmatch: "Match the Screen Position set in the Customiser for this notification type",
        ovpath: "The location where screenshots generated by this option will be saved",
        ssdelay: "Add a delay from when the notification occurs to when the screenshot is taken",
        sspreview: "Show a preview of how the screenshot will appear when saved",
        noanim: "Disable all in-app window animations and transition effects",
        nvda: "Enable copying achievement information to the clipboard when an achievement is unlocked, in order to be read by screen-reader software, such as NVDA",
        tooltips: "Display tooltips when hovering over certain UI elements",
        pollrate: `Set the update interval for achievement data during gameplay<br><br><span class="ttdesc">Performance may increase/decrease depending on the value or system hardware. Higher values typically result in lower system load, but may cause notifications to be more delayed</span>`,
        releasedelay: `Set how long the background Worker process waits to restart after the current game has been released. Affects both automatic process tracking and manually linked games<br><br><span class="ttdesc">Allows a longer timeframe for Steamworks to be fully released from the app. Increasing this value can prevent unusual behaviour, such as tracking a previously closed game</span>`,
        maxretries: `Set the maximum number of retries to link a running process to a detected AppID. Affects both automatic process tracking and manually linked games<br><br><span class="ttdesc">Retries are attempted once every second. If a running process is not linked to the current AppID after this number of retries, an invalid process will be returned. In such cases, the game will need to be manually released via System Tray > Options > Release Game</span>`,
        debug: "Open the Debug Panel, which displays in-depth Process Tracking info",
        userust: "Use an alternative Rust-based function to check whether tracked game processes are currently running on the system. When unchecked, the default NodeJS-based process check will be used instead.",
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
        glowcolor: "Set the color of the glow efefct",
        glowsize: "Set the size of the glow effect",
        glowanim: "Select a preset animation to be applied to the glow effect",
        glowspeed: "Set the speed of the animation applied to the glow effect",
        mask: "Enable masking parts of the notification with a custom image",
        maskimg: `Load an image file to be used as the mask<br><br><span class="ttdesc">In CSS, <code class="ttcode">mask-mode: alpha</code> operates in the opposite way to what is usually expected - areas of transparency in the image file will be obscured, and areas of black/grey will allow the elements below to be visible</span>`,
        primarycolor: "Set the primary color of the notification",
        secondarycolor: "Set the secondary color of the notification",
        tertiarycolor: "Set the tertiary color of the notification",
        fontcolor: "Set the color of all text displayed within the notification",
        fontoutline: "Add an outline to all text displayed within the notification",
        fontoutlinecolor: "Set the color of the text outline",
        fontshadow: "Add a shadow to all text displayed within the notification",
        fontshadowcolor: "Set the color of the text shadow",
        iconroundness: "Set the roundness of the achievement/game icon displayed within the notification",
        plat: "Load an image file to be used as the 100% icon",
        usegameicon: "Replace the default notification icon with the icon for the current game",
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
        savetheme: "Save all configured customisation options as a new Theme",
        visibilitybtn: "Toggle the visibility of the element in Customiser previews and Test Notifications",
        delbtn: "Reset the element to default",
        imgpath: "The location where notification images generated by this option will be saved",
        checkforupdates: `Check whether a new app version has been released on GitHub. If an update is available, it will be automatically downloaded and installed once confirmed via the "Update Available" dialog`,
        linkedgames: `Bypass <span class="hl">automatic process tracking</span> for specific Steam games<br><br><span class="ttdesc">This option should only be used for very specific scenarios. Users should not need to use this option under normal circumstances!</span>`,
        exclusionlist: `Prevent achievements in specific Steam games from being tracked by the app<br><br><span class="ttdesc">This option should only be used for very specific scenarios. Users should not need to use this option under normal circumstances!</span>`
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
                `<span class="hl" id="appidhelp"><u>How do I find a Steam game's AppID?</u></span>`
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
                `<span class="hl" id="appidhelp"><u>How do I find a Steam game's AppID?</u></span>`
            ],
            exclusionnew: "New Exclusion",
            exclusionnewsub: [
                `Enter the <span class="hl">AppID</span> to add to the <span class="hl">Exclusion List</span>`
            ]
        }
    }
}