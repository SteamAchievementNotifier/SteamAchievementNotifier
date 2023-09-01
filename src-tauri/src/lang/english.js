export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "No User Detected",
                tt: "The Steam user for which achievements are currently being tracked"
            },
            gamelbl: {
                elem: gameName ? gameName : "No Game Detected",
                tt: "The game for which achievements are currently being tracked"
            },
            previewbtn: {
                tt: "Preview the selected sound"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Default (No Sound File Selected)" : custom.sounddir ? custom.sounddir : "Default (No Sound Folder Selected)"
            },
            soundmodelbl: {
                elem: "Sound Mode:"
            },
            // "searchbtn" object needs to be here to ensure the object can be written to below
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "file" : "randomised"
            },
            togglemain: {
                elem: "Main",
                tt: "Main Achievement Notification"
            },
            togglerare: {
                elem: "Rare",
                tt: "Rare Achievement Notification"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% Achievement Notification"
            },
            progresscirclewrapper: {
                tt: "Show a preview of the customised notification"
            },
            testbtnwrapper: {
                elem: "Show Test Notification",
                tt: "Show a preview of the customised notification",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Customise...",
                tt: "Open the notification customisation menu",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam is not running"
            },
            updatebtn: {
                tt: "Update available"
            },
            kofibtn: "Donate on Ko-Fi!",
            discordbtn: "Join on Discord!",
            githubbtn: "Report Issue on GitHub!",
            settingstitlelbl: {
                elem: "Settings"
            },
            configuration: {
                elem: "Configuration",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Language",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "OS",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notifications",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Screenshots",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Accessibility",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Other",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Version"
            },
            apikeybtn: {
                tt: "Click here to get your Steam Web API Key"
            },
            apikey: {
                placeholder: "Enter your API Key",
                tt: "The Steam Web API key associated with your Steam account"
            },
            eyebtn: {
                tt: "Toggle API Key visibility"
            },
            apikeylbl: {
                elem: "Get API Key"
            },
            steam64idbtn: {
                tt: "Click here to get your Steam64 ID"
            },
            steam64id: {
                placeholder: "Enter your Steam64 ID",
                tt: "The Steam64 ID associated with your Steam account"
            },
            steam64idlbl: {
                elem: "Get Steam64 ID"
            },
            switchaccountspan: {
                elem: "Switch Accounts"
            },
            switchaccountbtn: {
                tt: "Switch between linked Steam accounts"
            },
            testconnectionlbl: {
                elem: "Test Connection" ,
                tt: "Test your connection to the Steam Web API"
            },
            lang: {
                tt: "Set language for both UI and notifications"
            },
            desktop: {
                elem: "Create Desktop Shortcut",
                tt: "Create a shortcut on the desktop to launch the app",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Start with Windows",
                tt: "Run the app automatically when Windows starts",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Start Minimised",
                tt: "Minimise the app to the system tray after launching",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Disable Hardware Acceleration",
                tt: "Disable Hardware Acceleration for the app window",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite Mode",
                tt: "Disables the main app window to save system resources. Minimal options will remain available via the system tray icon to interact with the app",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Rarity Percentage",
                tt: `Only achievements with a global unlock percentage below this number will be displayed as "Rare" notifications`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Sound-Only Mode",
                tt: "Disable notifications, but plays the selected sound when unlocking an achievement",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Show All Unlock Percentages",
                tt: "Display global unlock percentages within all notification types",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicate to External Window",
                tt: `An external window that duplicates all notifications. Can be targeted by streaming/screen capture software.<div class="ttwarn">This window is <u>fully transparent</u>. To outline the window's current position, hold the <span class="ttcode">Ctrl</span> key.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Show "Now Tracking" Notification`,
                tt: `Toggle the "Now Tracking" notification when launching a game`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Notification Shortcuts",
                tt: "Set a keyboard shortcut to trigger Test Notifications",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Set a shortcut to trigger a Test Notification for this type"
            },
            sctabmain: {
                tt: "Main Notification Shortcut"
            },
            sctabrare: {
                tt: "Rare Notification Shortcut"
            },
            sctabplat: {
                tt: "100% Notification Shortcut"
            },
            screenshotmode: {
                tt: "Choose the mode for automatic achievement screenshots"
            },
            displayscreenshot: {
                elem: "Display Screenshot in Notification",
                tt: "Display a preview of screenshots within the achievement notification",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam Screenshot Keybind",
                tt: "Match your Steam client keybind to take native Steam screenshots when unlocking achievements",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Main Notification Overlay`
            },
            ovtabrare: {
                tt: `Rare Notification Overlay`
            },
            ovtabplat: {
                tt: `100% Notification Overlay`
            },
            monitor: {
                elem: "Monitor",
                tt: "Select the monitor to use as the screenshot source",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overlay Position",
                tt: "Set the position of the notification overlay",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Path",
                tt: "Set the path where screenshots will be saved",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Preview",
                tt: `Preview the notification overlay`,
                query: "label"
            },
            noanim: {
                elem: "Disable App Window Animations",
                tt: "Disable transition animations within the app window",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Enable NVDA Support",
                tt: "Copy notification contents to the clipboard in order to be read by the NVDA screen-reader software",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Show Tooltips",
                tt: "Toggle tooltips when hovering over app elements",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Show Notification DevTools",
                tt: "Open the notification's DevTools Panel when triggered",
                query: ".sanboxlbl"
            },
            filesystem: {
                elem: "Enable Filesystem Loading",
                tt: `Load notification files and assets from the application's executable directory, instead of internally`,
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "View Privacy Policy",
                tt: "View Steam Achievement Notifier's Privacy Policy",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Join Beta Channel",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Open App Log",
                tt: "View and share the contents of the app log",
                query: "label"
            },
            resetbtn: {
                elem: "Reset App",
                tt: "Remove all stored data and restart the app",
                query: "label"
            },
            customiserplaystate: {
                tt: "Pause/play the notification animation"
            },
            customiserreplay: {
                tt: "Replay the notification animation"
            },
            customisersavepreset: {
                tt: "Save current customisations as a new Notification Preset"
            },
            tabbtnnext: {
                tt: "Next"
            },
            tabbtnprev: {
                tt: "Back"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Notification Preset",
                tt: "Select a notification preset to customise",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Rare Icon Animation",
                tt: `Toggle the animation of the icon background`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Show All Details",
                tt: `Display all available notification details`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Display Time",
                tt: "The length of time the notification will display for",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Scale",
                tt: "The size of the notification<br><i>*Not reflected in the preview window</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Custom Text",
                tt: "Show a custom message in the notification",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Use Game Title",
                tt: "Show the title of the current game in the notification",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Custom Font",
                tt: "Load a custom font file to apply to all text elements within the notification",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Reset to default font"
            },
            style: {
                elem: "Style",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Background Style",
                tt: "Set the style of the notification background",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradient Angle",
                tt: "Set the angle of the color gradient",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Background Image",
                tt: "Select an image file to set as the notification background",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Game Art Brightness",
                tt: "Set the brightness of the game art background",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Roundness",
                tt: "Set the roundness of the notification corners",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Font Size",
                tt: "Set the scale of the font",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacity",
                tt: "Set the opacity of the notification",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Background Only",
                tt: "Only apply opacity to the background, leaving text and images fully opaque",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Colors",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primary Color",
                tt: "Set the primary notification color",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Secondary Color",
                tt: "Set the secondary notification color",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Text Color",
                tt: "Set the color of the text",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Text Outline",
                tt: "Apply an outline to all notification text",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Outline Color",
                tt: "Set the color of the text outline",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Text Shadow",
                tt: "Apply a shadow to all notification text",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Shadow Color",
                tt: "Set the color of the text shadow",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Icon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Icon Roundness",
                tt: "Set the roundness of the notification icon",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Use Custom Icon",
                tt: `Use an image file as a custom icon`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Custom Icon",
                tt: `Select an image file to set as a custom icon`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Reset the custom icon`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Use Custom 100% Icon",
                tt: `Use an image file as a custom 100% icon`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Custom 100% Icon",
                tt: `Select an image file to set as a custom 100% icon`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Reset the custom 100% icon`,
                query: ".sanboxlbl"
            },
            usegameicon: {
                elem: "Use Game Icon",
                tt: `Use the current game's icon`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "Position",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Screen Position",
                tt: `Set the position of the notification on the screen`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Use Custom Position",
                tt: "Use a custom position for the notification",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Set Position",
                tt: "Set a custom position for the notification",
                query: "label"
            },
            animdir: {
                elem: "Animation Direction",
                tt: "Set the direction of the notification's animation",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "PRIVACY POLICY"
            },
            ppusagetitle: {
                elem: "STEAM WEB API DATA USAGE"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier uses Valve's <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> to retrieve and display data relating to the user's Steam account(s), via the Steam API Key/Steam64 ID combination provided to the application by the user. This data includes:`
            },
            ppstats: {
                elem: "Statistics for locked and unlocked achievements"
            },
            ppusername: {
                elem: "Your Steam username"
            },
            ppsteamgames: {
                elem: "Your played Steam games"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier may use further Steam Web API data in the future to provide additional application features and updates."
            },
            ppkey64title: {
                elem: "STEAM API KEY/STEAM64 ID USAGE"
            },
            ppauth: {
                elem: "Steam Achievement Notifier requires the user to input their Steam API Key/Steam64 ID combination for authenticated access to the Steam Web API."
            },
            ppnoauth: {
                elem: "Without this information, web links (provided for use by Valve to access the Steam Web API) used to retrieve data related to a user's Steam account(s) - including achievement data - cannot be accessed."
            },
            ppstoragetitle: {
                elem: "STEAM WEB API DATA STORAGE"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier temporarily stores Steam Web API data locally on the user's PC solely for use within the application. Any temporary storage of this data is intended for use solely by Steam Achievement Notifier, and under normal circumstances, all non-persistent Steam Web API data will be cleared from local storage upon exit of the application."
            },
            pppersist: {
                elem: "Persistent data stored on the user's device only includes data that is stored by the application for user convenience, such as the user's Steam Web API Key and Steam64 ID."
            },
            ppdelete: {
                elem: "This data can also be manually deleted by the user at any time if required. Files created by Steam Achievement Notifier are located in the following directory:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Currently unsupported"
            },
            ppcollecttitle: {
                elem: "STANCE ON DATA COLLECTION"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier will <u>never</u> send or store user data outside of the user's local file system without the user's explicit permission to do so. This includes any information retrieved via the Steam Web API for use within the application, including the Steam API Key/Steam64 ID combination provided to the application for access to the Steam Web API."
            },
            ppconsent: {
                elem: "Through confirmation of consent and subsequent use of either existing or future feature implementations designed to send information externally, permission is implicitly granted by the user to do so. In these cases, the user will always be informed of the nature of the data being sent, and will be prompted to confirm consent to send data outside of the application."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier intentionally excludes any means to externally access, view, or collect any information provided to the application by the user, but via either existing or future feature implementations, the application may be able to send data externally on the user's behalf, but only upon their consent to do so."
            },
            pprequests: {
                elem: "Requests to access data from the Steam Web API are made from within the application itself using built-in methods, similar to functionality provided by web browsers. These requests contain the user's Steam API Key/Steam64 ID combination as required by the Steam Web API, but are never intentionally made available for use or interception by any other applications."
            },
            ppusertitle: {
                elem: "USER RESPONSIBILITY"
            },
            ppsteamtou: {
                elem: `BY DOWNLOADING AND USING ANY OFFICIALLY RELEASED VERSION OF STEAM ACHIEVEMENT NOTIFIER VIA THE <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICIAL GITHUB REPOSITORY</span>, YOU, THE USER, BY EXTENSION, ADHERE TO SECTIONS 7 AND 8 OF THE <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">STEAM WEB API TERMS OF USE</span>.`
            },
            gamedetails: "Game Details",
            mustbepublic: "must be set to Public",
            nosoundfile: "Default (No Sound File Selected)",
            nosoundfolder: "Default (No Sound Folder Selected)",
            file: "File",
            randomised: "Randomised",
            audioselectdialog: `Select Sound ${custom.mode === "file" ? "File" : "Folder"}`,
            imgselectdialog: `Select Image File`,
            unsupported: "Unsupported file!",
            novalidaudiofiles: "No valid audio files!",
            nolocate: "Unable to locate file!",
            switchaccountstitle: "Switch accounts",
            noaccounts: "Add an account to get started!",
            connecting: "Connecting...",
            connected: "Connected",
            testsuccessuser: `You're good to go`,
            testsuccess1: `Make sure your <span>Game Details</span> are set to <span>Public</span> in <a href="${privacysettings}">Steam's Privacy Settings</a>`,
            testsuccess2: `Check your in-game display mode is set to <span>Borderless</span> in order for notifications to show above the game window`,
            noapikeytitle: "No API Key",
            noapikeytxt: "Please enter your API Key",
            noapikeyhint: `Click the <img src="./icon/key.svg" alt=""> icon to get your API Key`,
            nosteam64idtitle: "No Steam64 ID",
            nosteam64idtxt: "Please enter your Steam64 ID",
            nosteam64idhint: `Click the <img src="./icon/id.svg" alt=""> icon to get your Steam64 ID`,
            invalidapikeytitle: "Invalid API Key!",
            invalidapikeymsg: "Unable to access the Steam Web API with the supplied API Key",
            invalidapikeydetail1: "Check your API Key is correct",
            invalidapikeydetail2: "Regenerate a new API Key for your account",
            invalidsteam64idtitle: "Invalid Steam64 ID!",
            invalidsteam64idmsg: "Unable to find a Steam account associated with the supplied Steam64 ID",
            invalidsteam64iddetail1: "Check the Steam64 ID value you have provided is the correct value for your Steam Account",
            nonetworkfound: "No active network connection found",
            connecttonetwork: "Connect your PC to a network and try again",
            testdefaulterrortitle: "An Error Occurred!",
            testdefaulterrormsg: "There was an error connecting to the Steam Web API",
            testdefaulterrordetail1: "Please report this issue on Discord or GitHub!",
            sspath: "Select Screenshot Path",
            wronguser: user ? `${user} not signed into Steam!` : "No linked user accounts found!",
            switchuser: "Click here to switch accounts",
            trackingfailed: "Tracking Failed!",
            checkapplog: "Check the app log for details",
            soon: "Coming soon!",
            gamecomplete: "100% Complete",
            gametitle: "Game Title",
            achievementunlocked: "Achievement unlocked",
            achievementtitle: "Achievement Title",
            allachievements: "You've unlocked all achievements!",
            achievementdesc: "Achievement description",
            show: "Show",
            quit: "Quit",
            off: "Off",
            steamss: "Steam In-Game Screenshot",
            overlayss: "Screenshot with Notification Overlay",
            match: "Match Customiser",
            topleft: "Top Left",
            topcenter: "Top Center",
            topright: "Top Right",
            bottomleft: "Bottom Left",
            bottomcenter: "Bottom Center",
            bottomright: "Bottom Right",
            solid: "Solid",
            gradient: "Gradient",
            bgimg: "Background Image",
            gameart: "Game Art",
            up: "Up",
            down: "Down",
            left: "Left",
            right: "Right",
            tracking: "Now Tracking",
            inuse: "In use by",
            invalidshortcut: "Invalid shortcut",
            nofont: "No Font Selected",
            fontselectdialog: "Select Font File"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Select a sound file to play when unlocking an achievement" : "Select a folder containing audio files to play at random when unlocking an achievement")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Here's a log of what's happened since the app was started at"
            },
            copylbl: {
                elem: "Copy Log Contents"
            },
            openlbl: {
                elem: "Generate Log File"
            },
        }

        return translations
    }
}