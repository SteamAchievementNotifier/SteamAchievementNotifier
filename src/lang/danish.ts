export const translations = {
    global: {
        main: "Hoved",
        semi: "Halv",
        rare: "Sjælden",
        plat: "100%",
        trophymain: "Bronze",
        trophysemi: "Sølv",
        trophyrare: "Guld",
        trophyplat: "Platin",
        test: "Test Notifikationer",
        topleft: "Øverst til venstre",
        topcenter: "Øverst i midten",
        topright: "Øverst til højre",
        bottomleft: "Nederst til venstre",
        bottomcenter: "Nederst i midten",
        bottomright: "Nederst til højre",
        ok: "OK",
        preview: "Forhåndsvisning",
        save: "Gem",
        back: "Tilbage",
        edit: "Rediger",
        lockedby: "Låst af $lock",
        settings: "Indstillinger",
        appversion: "App-version",
        image: "Billede",
        audio: "Lyd",
        folder: "Mappe",
        font: "Skrifttype",
        select: "Vælg",
        gametitle: "Spiltitel",
        congrats: "Tillykke!",
        achievementunlocked: "Fuldført præstation",
        gamecomplete: "100% Færdig",
        achievementdesc: "Klikkede på knappen Vis testmeddelelse",
        gamecompletedesc: "Du har låst alle præstationer op!",
        defaultcustomfont: "Standard (Ingen skrifttype valgt)",
        defaultsoundfile: "Standard (Ingen fil valgt)",
        defaultsounddir: "Standard (Ingen mappe valgt)",
        nowtracking: "Tracker nu præstationer for:",
        nopreview: "Forhåndsvisning ikke tilgængelig for native OS",
        options: "Indstillinger",
        resetwindow: "Nulstil vindue",
        show: "Vis",
        exit: "Afslut",
        donotshowagain: "Vis ikke denne dialog igen",
        releasegame: "Frigiv Spil",
        releasegamesub: [
            `Genstart baggrundsarbejderprocessen og frigiv det nuværende spil fra at blive sporet`,
            `Prøv denne mulighed, hvis du for nylig har lukket et spil, men Steam viser stadig, at det kører, eller hvis Steam Achievement Notifier stadig viser, at det sporer et spil, der allerede er blevet lukket`
        ],
        noupdateavailable: "Ingen opdatering tilgængelig",
        latestversion: "Seneste version installeret",
        missingdeps: "Manglende afhængighed",
        restartapp: "Genstart App",
        restartappsub: [
            `Hvis tingene ikke fungerer korrekt, skal du bruge denne mulighed for at lukke og genåbne appen`,
            `Hvis problemet fortsætter efter genstart af appen, bør du overveje at rapportere det ved at bruge de indbyggede links på startsiden`
        ],
        suspend: "Suspendér",
        resume: "Genoptag",
        new: "Ny...",
        nodata: "Ingen data",
        findappid: "Find AppID",
        findappidsub: [
            `Hvert Steam-spil har et unikt nummer knyttet til det - kaldet en <span class="hl">AppID</span>. Du kan finde et hvilket som helst Steam-spils tilknyttede AppID ved at kontrollere en af følgende:`,
            `I <span class="hl">Steam-klienten</span>, højreklik på et spil i din <span class="hl">Bibliotek</span> og vælg <i>Egenskaber</i> > <i>Opdateringer</i> - AppID'en vil blive angivet her`,
            `URL'en til spillets <span class="hl">Butiks side</span> - det vil være tallet efter <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites som <span class="hl">SteamDB</span> - sektionen <span class="hl">App Info</span> vil liste AppID for hvert spil`
        ],
        noexe: "Spillets EXE-fil blev ikke fundet!",
        noexesub: "Klik her for mere information",
        noexedialogsub: [
            `Steam Achievement Notifier kunne ikke automatisk finde den eksekverbare fil til dette spil. Placeringen af spillets eksekverbare fil er påkrævet for at kunne "frigive" spillet, når det er lukket`,
            `For at frigive spillet manuelt efter lukning skal du <i>højreklikke</i> på <span class="hl">System Tray-ikonet</span> > <span class="hl">Indstillinger</span> > <span class="hl">Frigiv spil</span>, eller bruge <span class="hl">Genvej til frigivelse af spil</span>`,
            `Alternativt kan du klikke på knappen <span class="hl">Tilføj</span> nedenfor for at tilføje den eksekverbare fil, der er knyttet til et vilkårligt fokuseret vindue, til <span class="hl">Indstillinger</span> > <span class="hl">Spil</span> > <span class="hl">Automatisk frigivelse af spil</span>`,
        ],
        autorelease: "Automatisk frigivelse af spil",
        autoreleasesub: [
            `Hvis Steam stadig viser et spil som <i>Spiller</i> efter spilvinduet er lukket, kan du prøve at tilføje en ny post til <span class="hl">Automatisk frigivelse af spil</span>`,
            `For at gøre dette for det aktuelle spil skal du klikke på knappen <span class="hl">Tilføj</span> nedenfor for at tilføje den eksekverbare fil, der er knyttet til et vilkårligt fokuseret vindue, til <span class="hl">Indstillinger</span> > <span class="hl">Spil</span> > <span class="hl">Automatisk frigivelse af spil</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Hvad sker der, når jeg klikker på knappen Tilføj?</u></span>`,
        linkgamehelp: "Tilføj post via fokus",
        linkgamehelpsub: [
            `Når du klikker på knappen <span class="hl">Tilføj</span>, tilføjes der automatisk en ny post til <span class="hl">Indstillinger</span> > <span class="hl">Spil</span> > <span class="hl">Automatisk frigivelse af spil</span> ved brug af oplysninger fra det aktuelt fokuserede vindue.`,
            `Efter klik på knappen <span class="hl">Tilføj</span> starter en 5-sekunders timer`,
            `Før timeren udløber, skal du sætte fokus på spilvinduet`,
            `Når timeren er udløbet, tilføjes en ny post for det aktuelle <span class="hl">AppID</span> til <span class="hl">Indstillinger</span> > <span class="hl">Spil</span> > <span class="hl">Automatisk frigivelse af spil</span> ved brug af den eksekverbare fil, der er knyttet til det fokuserede vindue`,
            `Nye forsøg vil overskrive eksisterende poster, eller posten kan fjernes via <span class="hl">Indstillinger</span> > <span class="hl">Spil</span> > <span class="hl">Automatisk frigivelse af spil</span> ved at klikke på knappen <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Kunne ikke tilføje vinduet",
        addlinkfailedsub: `Klik på knappen <span class="hl">Tilføj</span> for at prøve igen`,
        webhookunlockmsg: "$user låste op for en præstation",
        webhookunlockmsgplat: "$user låste op for alle præstationer",
        webhookingame: "i $gamename",
        notconnected: "Ikke forbundet",
        raloghelp: "Mit spil bliver ikke registreret",
        raenablelog: `Emulator logfiler`,
        raenablelogsub: [
            `For at få adgang til interne spilbegivenheder (såsom aktuel spilstilstand, oplysninger om oplåste præstationer osv.) skal logning til en ekstern <span class="hl">logfil</span> <u>være aktiveret</u> i alle valgte emulatorer.<br><br>Alle valgte emulatorer <u>skal bruge denne <span class="hl">logfil</span></u> som værdien for <span class="hl">Logfilens sti</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Indstillinger > Logning</span> skal konfigureres med følgende indstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Logningsdetaljer</span>: <span class="hlgreen">TIL</span></li>
                        <li><span class="hllb">Frontend-logningsniveau</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Log til fil</span>: <span class="hlgreen">TIL</span></li>
                        <li><span class="hllb">Tidsstempler i logfiler</span>: <span class="hlred">FRA</span></li>
                    </ul>
                    <br>
                    Ved standardinstallationen gemmes <span class="hl">"retroarch.log"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Vis > Vis logkonfiguration</span> skal konfigureres med følgende indstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Detaljeringsgrad</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Logudgange</span> > <span class="hlgreen">Skriv til fil</span></li>
                        <li><span class="hllb">Logtyper</span> > <span class="hlgreen">Præstationer (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Ved standardinstallationen gemmes <span class="hl">"dolphin.log"</span> på en af følgende placeringer:
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2</summary>
                <div>
                    <span class="hl">PCSX2 > Værktøjer > Aktiver fil-logning</span> skal være aktiveret
                    <br>
                    <br>
                    Med standardinstallationsindstillinger gemmes <span class="hl">"emulog.txt"</span> i:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> skal <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>downloades</u></span> og flyttes til <span class="hl">Duckstations installationsmappe</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Indstillinger > Achievements > RAIntegration (kun for udviklere)</span> skal være aktiveret
                    <br>
                    <br>
                    Ved brug af standardinstallationsindstillinger gemmes <span class="hl">"RALog.txt"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> skal være aktiveret og konfigureret med følgende indstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Ved brug af standardinstallationsindstillinger gemmes <span class="hl">"log.txt"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Ikke-understøttet Beta",
        betaunsupportedsub: [
            "En ny version af Steam Achievement Notifier er blevet udgivet!",
            `<u>Denne Beta-version understøttes ikke længere</u>. Download og installer venligst den nyeste officielle udgivelse via Github ved at bruge knappen <span class="hl">Udgivelser</span> nedenfor.`,
            "Tak for at du testede! 💜"
        ],
        betaghreleases: "Udgivelser",
        checkapplog: "Tjek venligst App-loggen for detaljer."
    },
    app: {
        content: {
            game: "Ingen spil fundet",
            customise: "Tilpas",
            test: "Vis testmeddelelse"
        }
    },
    settings: {
        language: {
            title: "Sprog",
            content: {
                steamlang: "Oversæt præstationer til Steams sprog",
                maxsteamlangretries: "Maksimalt antal forsøg på oversættelse"
            }
        },
        os: {
            title: "Operativsystem",
            content: {
                desktop: "Opret skrivebordsgenvej",
                startwin: "Start ved logon",
                startmin: "Start minimeret",
                nohwa: "Deaktiver hardwareacceleration",
                litemode: "Lite-tilstand"
            }
        },
        notifications: {
            title: "Notifikationer",
            content: {
                rarity: "Sjældenhedsprocent",
                semirarity: "Sølvprocent",
                rareonly: "Kun sjældne",
                all: "Alle",
                off: "Fra",
                showpercent: "Vis procent",
                soundonly: "Lyd kun",
                nowtracking: "Vis sporingsmeddelelse",
                nowtrackingscale: "Sporingsskala",
                nowtrackingpos: "Sporingsposition",
                shortcuts: "Notifikationsgenveje",
                noiconcache: "Deaktivér ikon-cache",
                webhooks: "Send til Discord-server",
                webhooktypes: "Webhook-typer",
                webhookurl: `Webhook-URL`,
                webhookcaution: `Ved at aktivere denne mulighed og angive et gyldigt Discord-webhook-link, accepterer du, at du forstår, at <u>al præstations- og spilinformations for den nuværende Steam-bruger</u> vil blive sendt til den angivne Discord-server via det angivne webhook-link.<br><br>Hvis du ikke ønsker, at Steam Achievement Notifier skal sende disse oplysninger på dine vegne, skal du deaktivere denne mulighed.`,
                webhooklaststatus: "Sidste status",
                webhookspoilers: `Tilføj spoiler-mærke`,
                webhookappid: `Vis AppID`,
                replaynotify: "Gentagelsesnotifikation",
                replaynotifyshortcut: "Genvej til gentagelse",
                customtrigger: "Brugertilpasset Udløser",
                customtriggershortcut: "Genvej til Udløser",
                customtriggerdelay: "Forsinkelse af Udløser",
                customtriggerusedisplaytime: "Brug Visningstid",
                trophymode: "Trofætilstand",
                notifymax: "Maksimalt antal notifikationer", 
                notifyspace: "Afstand mellem notifikationer",
                notify1line: "Begræns tekst til 1 linje"
            }
        },
        games: {
            title: "Spil",
            content: {
                linkedgames: "Automatisk frigivelse af spil",
                themeswitch: "Automatisk skift af tema",
                exclusionlist: "Udelukkelsesliste",
                inclusionlist: "Inklusionsliste",
                listmode: "Listefunktion",
                exclusion: "Ekskludering",
                inclusion: "Inkludering"
            }
        },
        media: {
            title: "Medier",
            content: {
                steamss: "Tag Steam-screenshot",
                screenshots: "Yderligere medier",
                off: "Fra",
                ssonly: "Kun skærmbillede",
                overlay: "Screenshot med notifikationsoverlejring",
                monitors: "Screenshot-kilde",
                hdrmode: "HDR-tilstand",
                ovpos: "Overlejringsposition",
                ovmatch: "Match tilpasningsposition",
                ovx: "Horisontal forskydning",
                ovy: "Vertikal forskydning",
                ovpath: "Screenshot-sti",
                ssdelay: "Screenshot-forsinkelse",
                notifyimg: "Notifikationsbillede",
                imgpath: "Billedsti",
                ssenabled: "Aktiver",
                ssmode: "Skærmbilledetilstand",
                screen: "Skærm",
                window: "Vindue",
                rauseemudir: "Gem i emulatorens undermappe",
                ssext: "Skærmbilledeformat",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Tilføj til Steam"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Stream-notifikationer",
                extwinframerate: "Billedhastighed",
                extwinshow: "Vis vindue",
                audiosrc: "Lyd-kilde",
                notify: "Notifikation",
                app: "App",
                off: "Dæmpet",
                statwin: "Statistik for Præstationsvindue",
                statwinaot: "Altid øverst",
                noachievements: "Ingen præstationer at vise",
                startgame: "Start et spil for at vise præstationer!",
                max: "Maks",
                custom: "Brugerdefineret...",
                statwinshortcut: "Overlay Genvejstast",
                gametimerwin: "Spilafslutningstimer",
                gametimerwinshortcut: "Genvej til timer",
                gametimerwinaot: "Altid øverst",
                resetgametimer: "Nulstil timer",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Er du sikker?</span>
                        <span>Dette vil nulstille spilafslutningstimeren for det aktuelle spil tilbage til 00:00:00.000.</span>
                        <span class="noundo">🛑 Dette kan ikke fortrydes!</span>
                    </div>
                `,
                resetgametimerfailed: "Kunne ikke nulstille timeren.",
                resetgametimercomplete: "AppID $appid er allerede fuldført.",
                extwinnotify: "Vis notifikation på skærmen"
            }
        },
        accessibility: {
            title: "Tilgængelighed",
            content: {
                noanim: "Deaktiver app-vinduesanimationer",
                noupdatedialog: "Deaktivér opdateringsdialog",
                nvda: "Aktivér NVDA-support",
                tooltips: "Vis tooltips",
                showsystrayopts: "Vis systembakke-indstillinger",
                releaseshortcut: "Genvej til frigivelse af spil",
                noshortcuts: "Deaktiver tastaturgenveje"
            }
        },
        advanced: {
            title: "Avanceret",
            content: {
                pollrate: "Afstemningshastighed",
                initdelay: "Forsinkelse på sporing",
                releasedelay: "Udgivelsesforsinkelse",
                maxretries: "Maksimalt antal genforsøg",
                debug: "Fejlfindingspanel",
                userust: "Alternativ procesbehandlingstilstand",
                notifydebug: "Vis notifikationer for fejlfinding",
                exportachdata: "Eksporter præstationsdata",
                lognum: "Tidligere logfiler", 
                audiocooldown: "Lydnedkøling",
                usecustomfiles: "Brug tilpassede app-filer",
                showcustomfiles: "Vis tilpassede app-filer",
                appdatadir: "Vis AppData-mappe",
                backup: "Backup",
                backuppath: "Backup-sti",
                backupsub: [
                    "Lav en backup af indholdet i appens AppData-mappe til et valgt sted",
                    "Denne backup vil fungere som et gendannelsespunkt for den nuværende tilstand af appen",
                    `Gendan en tidligere backup via <span class="hl">Indstillinger</span> > <span class="hl">Avanceret</span> > <span class="hl">Gendan</span>`
                ],
                backupfailed: "Kunne ikke oprette backup.",
                restore: "Gendan",
                restoresub: [
                    "Gendan indholdet af appens AppData-mappe fra en tidligere backup",
                    `Vælg en <span class="hl">.sanbak</span> backup-fil at gendanne fra. Denne fil vil blive bevaret efter gendannelsen`,
                    "❗ Når bekræftet, genstarter appen for at gendanne den valgte backup-fil"
                ],
                restorefailed: "Kunne ikke gendanne backup.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Ventetid før frigivelse"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatorer",
                rauser: "Brugernavn",
                rakey: "API-nøgle",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Logfilens sti",
                rapercenttype: "Procenttype",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Indtast stien til logfilen",
                logfile: "Logfil",
                status: "Status",
                game: "Spil",
                lastachievement: "ID for sidste præstation",
                wait: "Venter på emulator",
                idle: "Venter på spilbegivenhed",
                start: "Starter spil",
                stop: "Stopper spil",
                achievement: "Opnåelse opnået"
            }
        },
        misc: {
            title: "Diverse",
            content: {
                colorprofile: "Farveprofil",
                checkforupdates: "Tjek Efter Opdateringer",
                log: "Applikationslog",
                reset: "Nulstil app"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Forudindstilling",
            content: {
                preset: "Notifikationsforudindstilling",
                iconanim: "Sjælden ikonanimation",
                alldetails: "Vis alle detaljer",
                usepercent: "Brug Procent",
                displaytime: "Visningstid",
                scale: "Skala",
                customtext: "Tilpasset tekst",
                usegametitle: "Brug spiltitel",
                customfont: "Tilpasset skrifttype"
            }
        },
        sound: {
            title: "Lyd",
            content: {
                soundmode: "Lydtilstand",
                file: "Fil",
                folder: "Tilfældig",
                soundfile: "Lyd fil",
                sounddir: "Lydmappe",
                volume: "Volumen"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Baggrundsstil",
                solid: "Solid",
                gradient: "Gradient",
                img: "Billede",
                gameart: "Spilkunst",
                gradientangle: "Gradientvinkel",
                bgimg: "Baggrundsbillede",
                bgachicon: "Brug Præstationsikon",
                bgimgbrightness: "Lysstyrke",
                brightness: "Lysstyrke",
                blur: "Sløring",
                roundness: "Rundhed",
                fontsize: "Skriftstørrelse",
                usecustomfontsizes: "Brug tilpassede skrifttyper",
                unlockmsgfontsize: "Oplåsningsbesked",
                titlefontsize: "Titel",
                descfontsize: "Beskrivelse",
                textvspace: "Tekstafstand",
                opacity: "Gennemsigtighed",
                bgonly: "Kun baggrund",
                glow: "Glød",
                glowcolor: "Farve",
                glowsize: "Størrelse",
                glowx: "Horisontal Forskydning",
                glowy: "Vertikal Forskydning",
                glowopacity: "Gennemsigtighed",
                glowanim: "Animation",
                glowspeed: "Hastighed",
                glowrarity: "Brug sjældenhed",
                glowcolorbronze: "Sjældenhed: > $semirarity",
                glowcolorsilver: "Sjældenhed: < $semirarity & > $rarity",
                glowcolorgold: "Sjældenhed: < $rarity",
                off: "Ingen",
                pulse: "Puls",
                double: "Dobbelt",
                focus: "Fokus",
                orbit: "Kredsløb",
                fluorescent: "Fluorescerende",
                rainbow: "Regnbue",
                mask: "Maske",
                maskimg: "Maske billede",
                useoutline: "Kontur",
                outline: "Konturtype",
                outlinecolor: "Konturfarve",
                outlinewidth: "Konturbredde",
                dashed: "Stiplet",
                dotted: "Prikket"
            }
        },
        colors: {
            title: "Farver",
            content: {
                primarycolor: "Primær farve",
                secondarycolor: "Sekundær farve",
                tertiarycolor: "Tertiær farve",
                iconshadowcolor: "Skyggefarve for sjælden ikon",
                iconanimcolor: "Animationsfarve for sjælden ikon",
                fontcolor: "Skriftfarve",
                usecustomfontcolors: "Brug brugerdefinerede skrifttyper",
                unlockmsgfontcolor: "Farve 1",
                titlefontcolor: "Farve 2",
                descfontcolor: "Farve 3",
                fontoutline: "Skriftkontur",
                fontoutlinecolor: "Skriftkonturfarve",
                fontoutlinescale: "Skriftkonturens skala",
                fontshadow: "Skriftskygge",
                fontshadowcolor: "Skriftskyggefarve",
                fontshadowscale: "Skriftskyggens skala",
                fontshadowx: "Horisontal Offset",
                fontshadowy: "Vertikal Offset"
            }
        },
        icons: {
            title: "Ikon",
            content: {
                iconscale: "Ikonskala",
                iconroundness: "Ikon afrunding",
                showiconborder: "Vis ikonramme",
                iconborderimg: "Ikonramme",
                iconborderpos: "Rammeplacering",
                iconborderscale: "Rammestørrelse",
                iconborderx: "Vandret forskydning",
                iconbordery: "Lodret forskydning",
                iconborderrarity: "Brug Sjældenhed",
                iconborderimgbronze: "Sjældenhed: > $semirarity",
                iconborderimgsilver: "Sjældenhed: < $semirarity & > $rarity",
                front: "Foran",
                back: "Bagved",
                plat: "100% Logo",
                usegameicon: "Brug spilikon",
                gameicontype: "Spilikonetype",
                usecustomimgicon: "Brug brugerdefineret ikon",
                customimgicon: "Brugerdefineret ikon",
                icon: "Ikon",
                logo: "Logo",
                logoscale: "Logoskala",
                decoration: "Dekoration",
                decorationscale: "Dekorationsskala",
                showdecoration: "Vis dekoration",
                rarity: "Sjældenhed",
                showhiddenicon: "Vis Skjult Ikon",
                hiddenicon: "Skjult Ikon",
                replacelogo: "Erstat Logo"
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Skærmposition",
                usecustompos: "Brug tilpasset position",
                setcustompos: "Indstil",
                copycustompos: "Anvend på Alle",
                resetcustompos: "Nulstil"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Opdater Tema",
                savetheme: "Gem tema",
                sub: [
                    `Gemte <span class="hl">Brugertemaer</span> kan vælges fra <span class="hl">Vælg tema</span> menuen på startsiden.`,
                    `Sørg for, at <span class="hl">Temanavn</span> er <u>unik</u> - et navn, der matcher et eksisterende tema, <u>vil overskrive det tidligere</u>!`
                ],
                placeholder: "Temanavn",
                theme: "Tema",
                importtheme: "Importer Tema",
                import: "Importer",
                importsub: [
                    `Importer en brugeroprettet <span class="hl">temafil</span>`,
                    `<span class="hl">Importerede temaer</span> vil automatisk blive indlæst, når de er importeret med succes, og kan vælges fra menuen <span class="hl">Vælg Tema</span>`,
                ],
                importidle: `Vælg en <span class="hl">temafil</span> til import`,
                importcopied: `Tema kopieret med succes`,
                importrenamed: `Tema omdøbt med succes`,
                importextracted: `Tema udtrukket med succes`,
                importrewriting: `Omskriver temafilstier...`,
                importconverting: `Konverterer tema...`,
                importcreating: `Opretter tema...`,
                importdone: `Tema importeret med succes`,
                importfailed: `Fejl ved import af valgt temafil!`,
                exporttheme: "Eksporter Tema",
                export: "Eksporter",
                exporterrortitle: "Eksportfejl",
                exporterrorsub: [
                    "Der opstod en fejl under forsøg på at eksportere det valgte tema",
                    `Prøv at gemme det aktuelle tema (<i>via <span class="hl">Gem tema</span></i>) og prøv at eksportere igen`,
                    `Hvis problemet fortsætter, skal du kopiere fejlen nedenfor og rapportere det via linkknapperne på <span class="hl">Hjemmeskærmen</span>`
                ],
                synctheme: "Synkroniser tema",
                syncedwith: "Synkroniseret med",
                themeselect: "Valgt tema",
                copytheme: "Kopiér tema",
                copythemesub: "Vælg den/de notifikationstype(r), som det valgte tema skal kopieres til"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Her er hvad der er sket siden app'en blev startet ved",
            copylog: "Kopier log indhold"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Er du sikker?</span>
                    <span>Alle tidligere konfigurerede data, <u>inklusive tilpasninger</u>, vil blive nulstillet til standard.</span>
                    <span>🛑 Dette kan ikke fortrydes!</span>
                </div>
            `,
            reset: "Nulstil"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier stødte på et problem og skal lukkes.",
            details: "Her er fejldetaljerne:",
            sub: "Klik på knapperne nedenfor for at rapportere dette problem via din foretrukne platform.",
            report: "Rapport",
            log: "App Log",
            exit: "Afslut"
        }
    },    
    tooltips: {
        game: "Spillet, som der i øjeblikket spores præstationer for",
        usertheme: "Vælg en tidligere gemt Tema",
        customise: "Tilpas præstationsmeddelelser",
        test: "Vis en testmeddelelse, inklusive eventuelle tilpasninger",
        kofi: "Donér på Ko-Fi!",
        discord: "Deltag på Discord!",
        github: "Rapporter et problem",
        lang: "Vælg det sprog, der bruges i appen",
        steamlang: `Forsøg at indlæse oversættelser placeret i Steams applikationsfiler for at vise præstationsinformation på brugerens valgte sprog i Steam-klienten<br><br><span class="ttdesc">Denne mulighed forsøger at finde oversættelser i en JSON-fil, der er gemt i Steams applikationsdata. Hvis en oversættelse for den aktuelle præstation ikke kan findes, vil præstationsinformation hentet fra Steamworks blive vist i stedet.</span>`,
        maxsteamlangretries: `Antallet af gange (pr. 100ms), der forsøges at finde gyldige oversættelser for den aktuelle præstation<br><br><span class="ttdesc">Steam gemmer i øjeblikket kun en lille mængde præstationsdata i hver spils tilknyttede JSON-fil. Eventuelle præstationer, der ikke er til stede i denne fil, vil blive tilføjet, når præstationen er låst op.<br><br>Da tilføjelse af nye data kan tage tid, vil en forøgelse af denne værdi øge sandsynligheden for, at der findes oversættelsesdata for den aktuelle præstation, men det kan også forsinke notifikationen, der vises på skærmen, med den tid, der beregnes af denne indstilling.<br><br>Hvis der ikke kan findes gyldige oversættelsesdata for den aktuelle præstation, vil oversættelsen falde tilbage til det sprog, der er angivet i Steamworks.</span>`,
        desktop: "Skift en genvej på skrivebordet for at køre appen",
        startwin: "Start Steam Achievement Notifier automatisk efter login",
        startmin: "Efter lancering skjul appens brugergrænsefladevindue, indtil det åbnes fra systembakken",
        nohwa: `Deaktiver hardwareacceleration, hvilket kan forbedre ydeevnen på systemer med lavere ressourcer eller systemer uden dedikeret GPU<br><br><span class="ttdesc">Programmet genstarter efter aktivering/deaktivering af denne mulighed</span>`,
        litemode: "Deaktiver alle interaktive brugergrænsefladeelementer og tilbyder kun begrænset app-funktionalitet via systembakkeikonet. Kan forbedre ressourceforbruget af appen",
        rarity: `Procenten hvor notifikationer for Sjældne præstationer udløses.<br><br>Enhver præstation med en oplåsningsprocent over denne værdi vil blive vist som en Hoved-notifikation<br><br><span class="ttdesc">Hvis <span class="hl">Trofætilstand</span> er aktiveret, vil enhver præstation med en oplåsningsprocent over denne værdi i stedet blive vist som en Sølv-notifikation</span>`,
        semirarity: `Procenten hvor "Sølv"-notifikationselementer vises (f.eks. <span class="hl">Sjældenhedsemblemer</span>, <span class="hl">Dekorationer</span> osv.).<br><br>Enhver præstation med en oplåsningsprocent under (eller lig med) denne værdi og over værdien for <span class="hl">Sjældenhedsprocent</span>, vil vise notifikationselementer konfigureret til "Sølv"-sjældenheder.<br><br>Enhver præstation med en oplåsningsprocent over denne værdi vil vise notifikationselementer konfigureret til "Bronze"-sjældenheder<br><br><span class="ttdesc">Hvis <span class="hl">Trofætilstand</span> er aktiveret, vil enhver præstation med en oplåsningsprocent over denne værdi i stedet blive vist som en Bronze-notifikation</span>`,
        showpercent: "Vis låseprocenten af præstationen i meddelelsen for de valgte typer",
        soundonly: "Deaktiver meddelelser og afspil kun lyde, der er indstillet via Tilpasning",
        extwin: "Opret et vindue, der duplicerer alle meddelelser, der i øjeblikket vises på skærmen. Dette vindue kan derefter tilføjes som en vinduesoptagelseskilde til brug i streaming-software som OBS",
        extwinframerate: "Indstil den målrettede billedhastighed for stream-notifikationer",
        extwinshow: `Skift synlighed af Stream Notifications-vinduet<br><br><span class="ttdesc">Når det er fokuseret på proceslinjen, skal du trykke og holde <code class="ttcode">Ctrl</code>-tasten nede for at vise vinduets aktuelle placering</span>`,
        audiosrc: "Vælg lydkilden til (eller deaktiver) lyd genereret af appen",
        nowtracking: "Vis en meddelelse, der informerer brugeren om, at præstationer for et kørende spil spores",
        nowtrackingscale: `Indstil størrelsen af sporingsmeddelelsen`,
        nowtrackingpos: `Angiv positionen for sporingsmeddelelsen`,
        shortcuts: "Udløs en testmeddelelse via en tastaturgenvej. Genveje kan tilpasses for hver meddelelsestype",
        noiconcache: `Deaktiver ikon-cache under starten af spil.<br><br><span class="ttdesc">Dette kan markant forbedre ydeevnen i appen under opstart af spil og kan også løse sporingsproblemer med spil, der har et stort antal præstationer. Dog kan deaktivering af ikon-cache i sjældne tilfælde resultere i manglende præstationsikoner i meddelelser</span>`,
        steamss: "Tag et Steam-screenshot, når en præstation låses op",
        screenshots: "Vælg typen af yderligere medier, der skal oprettes, når en meddelelse vises",
        monitors: "Skærmen, der vil blive fanget, når skærmbilledet tages",
        hdrmode: `Tag skærmbilleder ved hjælp af en metode, der er kompatibel med skærme, der bruger High Dynamic Range (HDR)`,
        ovpos: "Positionen for meddelelsesoverlejringen inden for skærmbilledet",
        ovmatch: "Match skærmpositionen indstillet i Tilpasning for denne meddelelsestype",
        ovpath: "Stien, hvor skærmbilleder genereret af denne indstilling vil blive gemt",
        ssdelay: "Tilføj en forsinkelse fra meddelelsen vises, til skærmbilledet tages",
        sspreview: "Vis en forhåndsvisning af, hvordan skærmbilledet vil se ud, når det gemmes",
        noanim: "Deaktiver alle vinduesanimationer og overgangseffekter i appen",
        noupdatedialog: `Forhindrer automatisk visning og fokus af dialogen <span class="hl">Opdatering tilgængelig</span><br><br><span class="ttdesc">Dialogen kan stadig åbnes ved at klikke på opdateringsknappen, når den er tilgængelig</span>`,
        nvda: "Aktivér kopiering af præstationsoplysninger til udklipsholderen, når en præstation låses op, for at blive læst af skærmlæser-software som NVDA",
        tooltips: "Vis værktøjstip, når du holder markøren over visse brugergrænsefladeelementer",
        colorprofile: `Tving alle app-vinduer til at gengive med den valgte farveprofil<br><br><span class="ttdesc">Kræver genstart af appen</span>`,
        pollrate: `Indstil opdateringsintervallet for præstationsdata under spil<br><br><span class="ttdesc">Ydelsen kan stige/falde afhængigt af værdien eller systemets hardware. Højere værdier resulterer normalt i lavere systembelastning, men kan forsinke meddelelser</span>`,
        initdelay: `Indstil forsinkelsen mellem detektion af det aktuelle <span class="hl">AppID</span> og når sporing af proces/bedrift starter<br><br><span class="ttdesc">Øgning af denne værdi kan forhindre scenarier, hvor Steam ikke kan starte det aktuelle spil (på grund af at appen initialiserer Steamworks, før spillet er startet)</span><br><br><span class="ttdesc">Alternativt kan øgning af denne værdi også bruges til at omgå forkert detektion af processer før spillet</span>`,
        releasedelay: `Indstil hvor længe Worker-processen i baggrunden venter på at genstarte, efter at det aktuelle spil er blevet frigivet. Påvirker både automatisk processporing og Automatisk frigivelse af spil<br><br><span class="ttdesc">Tillader et længere tidsrum, så Steamworks kan blive fuldt frigivet fra appen. Forøgelse af denne værdi kan forhindre usædvanlig adfærd, såsom sporing af et tidligere lukket spil</span>`,
        maxretries: `Indstil det maksimale antal forsøg på at forbinde en kørende proces med et registreret AppID. Påvirker både automatisk processporing og Automatisk frigivelse af spil<br><br><span class="ttdesc">Forsøg udføres én gang i sekundet. Hvis en kørende proces ikke forbindes med det aktuelle AppID efter dette antal forsøg, returneres en ugyldig proces. I sådanne tilfælde skal spillet frigives manuelt via System Tray > Indstillinger > Frigiv spil</span>`,
        debug: "Åbn fejlfindingspanelet, som viser detaljerede oplysninger om procesovervågning",
        userust: "Brug en alternativ Rust-baseret funktion til at kontrollere, om de trackede spilprocesser i øjeblikket kører på systemet. Når det ikke er markeret, vil standard NodeJS-baseret proceskontrol blive brugt i stedet.",
        notifydebug: "Opret et DevTools-vindue for alle meddelelser. Nyttigt til fejlfinding af meddelelsesproblemer",
        usecustomfiles: "Aktiver indlæsning af brugerdefinerede filer til meddelelser. Forsigtighed anbefales for almindelige brugere",
        showcustomfiles: "Åbn placeringen af de brugerdefinerede filer",
        log: "Åbn App Log-vinduet, der viser information om procesaktivitet, advarsler og fejl",
        reset: "Fjern alle konfigurationsdata og genstart appen",
        playback: "Pause/afspil animationen af forhåndsvisningen af meddelelsen",
        replay: "Genstart animationen af forhåndsvisningen af meddelelsen",
        preset: "Vælg den forudindstillede meddelelse, der skal tilpasses",
        iconanim: "Skift mellem sjælden ikonramme og animation",
        alldetails: "Vis alle tekstelementer i meddelelsen, herunder dem, der er skjult som standard for denne forudindstilling",
        usepercent: "Vis låseprocenten for præstationen i stedet for XP/S-værdien",
        displaytime: "Indstil antallet af sekunder, som meddelelsen vises",
        scale: "Øg eller formindsk størrelsen af meddelelsen",
        customtext: "Indstil en brugerdefineret besked, der skal vises i meddelelsen",
        usegametitle: "Vis titlen på det aktuelle spil i meddelelsen",
        customfont: "Indlæs en brugerdefineret skrifttype, der skal bruges i meddelelsen",
        soundmode: "Vælg enten en enkelt lydfil eller en tilfældigt valgt lydfil fra en mappe med flere lydfiler, når en meddelelse vises",
        soundfile: "Vælg en lydfil, der skal afspilles, når en meddelelse vises",
        sounddir: "Vælg en mappe, hvorfra en lydfil vil blive tilfældigt valgt, når en meddelelse vises",
        volume: "Indstil afspilningsvolumen for lydfilen",
        preview: "Forhåndsvis den valgte lydfil eller en tilfældigt valgt lydfil fra mappen",
        bgstyle: "Vælg stilen for baggrunden i meddelelsen",
        gradientangle: "Indstil vinklen for gradienten",
        bgimg: "Indlæs en billedfil, der skal bruges som baggrund for meddelelsen",
        bgachicon: "Brug ikonet for den opnåede præstation som baggrund for notifikationen",
        bgimgbrightness: "Indstil lysstyrken på billedet, der bruges som baggrund for meddelelsen",
        brightness: "Indstil lysstyrken for spillets kunst, der bruges som baggrund for meddelelsen",
        blur: "Indstil niveauet af sløring, der påføres baggrunden af meddelelsen",
        roundness: "Indstil afrundetheden af meddelelsens kanter",
        fontsize: "Indstil størrelsen på skrifttypen, der bruges i meddelelsen",
        opacity: "Indstil den overordnede gennemsigtighed af meddelelsen",
        bgonly: "Indstil kun gennemsigtigheden for meddelelsens baggrund og bevar andre elementer med fuld gennemsigtighed",
        glow: "Aktiver en glødeeffekt, der omgiver meddelelsen",
        glowcolor: "Indstil farven på glødeeffekten",
        glowsize: "Indstil størrelsen af glødeeffekten",
        glowx: "Forskyd positionen for glødeeffekten horisontalt",
        glowy: "Forskyd positionen for glødeeffekten vertikalt",
        glowopacity: "Angiv gennemsigtigheden af glødeeffekten",
        glowanim: "Vælg en foruddefineret animation, der skal anvendes på glødeeffekten",
        glowspeed: "Indstil hastigheden af animationen, der anvendes på glødeeffekten",
        glowrarity: "Ændr farven på glødeffekten baseret på sjældenheden af den oplåste præstation",
        glowcolorbronze: "Glødens farve, der vises når oplåsningsprocenten er > $semirarity",
        glowcolorsilver: "Glødens farve, der vises når oplåsningsprocenten er < $semirarity og > $rarity",
        glowcolorgold: "Glødens farve, når oplåsningsprocenten er < $rarity",
        mask: "Aktiver maske af dele af meddelelsen med et brugerdefineret billede",
        maskimg: `Indlæs en billedfil, der skal bruges som maske<br><br><span class="ttdesc">I CSS fungerer <code class="ttcode">mask-mode: alpha</code> på en modsat måde end forventet - områder med gennemsigtighed i billedfilen vil blive skjult, og områder af sort/grå vil tillade elementerne nedenfor at være synlige</span>`,
        useoutline: "Vis en kontur omkring notifikationen",
        outline: "Vælg den type kontur, der skal vises omkring notifikationen",
        outlinecolor: "Indstil konturens farve omkring notifikationen",
        outlinewidth: "Indstil konturens bredde omkring notifikationen",
        primarycolor: "Indstil primærfarven for meddelelsen",
        secondarycolor: "Indstil sekundærfarven for meddelelsen",
        tertiarycolor: "Indstil tertiærfarven for meddelelsen",
        fontcolor: "Indstil farven på al tekst, der vises i meddelelsen",
        fontoutline: "Tilføj en omrids til al tekst, der vises i meddelelsen",
        fontoutlinecolor: "Indstil farven på tekstens omrids",
        fontoutlinescale: "Angiv tykkelsen på tekstkonturen",
        fontshadow: "Tilføj en skygge til al tekst, der vises i meddelelsen",
        fontshadowcolor: "Indstil farven på tekstens skygge",
        fontshadowscale: "Angiv tykkelsen på tekstens skygge",
        fontshadowx: "Forskyder tekstskyggen horisontalt",
        fontshadowy: "Forskyder tekstskyggen vertikalt",
        iconroundness: "Indstil afrundetheden af præstations-/spilikonet, der vises i meddelelsen",
        plat: "Indlæs en billedfil, der skal bruges som 100% ikon",
        usegameicon: "Erstat ikonet for den oplåste præstation med ikonet for det aktuelle spil",
        gameicontype: `Vælg, hvilken type billede der skal vises som spilikon`,
        usecustomimgicon: "Erstat ikonet for den oplåste præstation med en brugerdefineret billedfil",
        customimgicon: "Indlæs en billedfil, der skal bruges som brugerdefineret ikon",
        showhiddenicon: "Vis et billede, der angiver, at præstationen er skjult i meddelelsen",
        hiddenicon: "Indlæs en billedfil for at erstatte ikonet for skjult præstation",
        logo: "Indlæs en billedfil for at erstatte Logo-ikonet",
        decoration: "Indlæs en billedfil for at erstatte Dekorationsikonet",
        showdecoration: "Skift synligheden af Dekorationsikonet",
        replacelogo: "Erstat ikonet for logoet i meddelelsen med den valgte dekoration",
        pos: "Indstil skærmpositionen for meddelelsen",
        usecustompos: "Aktivér brugerdefineret placering for meddelelsen",
        setcustompos: "Indstil brugerdefineret position for meddelelsen",
        copycustompos: "Anvend den brugerdefinerede placering på alle andre notifikationstyper",
        resetcustompos: "Nulstil positionen for meddelelsen til standard brugerdefineret position",
        updatetheme: "Opdater det aktuelle Tema med de valgte tilpasningsmuligheder",
        savetheme: "Gem alle konfigurerede tilpasningsindstillinger som et nyt tema",
        visibilitybtn: "Skift synligheden af elementet i Tilpas previews og Testmeddelelser",
        delbtn: "Nulstil elementet til standard",
        imgpath: "Stedet, hvor notifikationsbilleder genereret af denne indstilling vil blive gemt",
        ssenabled: "Aktiver eller deaktiver generering af medier for denne type",
        checkforupdates: `Tjek om en ny app-version er blevet udgivet på GitHub. Hvis der er en opdatering tilgængelig, vil den automatisk blive downloadet og installeret, når den er bekræftet via dialogvinduet <span class="hl">Opdatering tilgængelig</span>`,
        linkedgames: `Omgå <span class="hl">automatisk procesregistrering</span> for specifikke Steam-spil<br><br><span class="ttdesc">Denne mulighed bør kun bruges i meget specifikke scenarier. Brugere bør ikke have brug for at bruge denne mulighed under normale omstændigheder!</span>`,
        exclusionlist: `Forhindre præstationer i specifikke Steam-spil i at blive sporet af appen<br><br><span class="ttdesc">Denne mulighed bør kun bruges i meget specifikke scenarier. Brugere bør ikke have brug for at bruge denne mulighed under normale omstændigheder!</span>`,
        inclusionlist: `Forhindrer alle Steam-spil i at blive sporet af appen, medmindre de er specificeret<br><br><span class="ttdesc">Denne indstilling bør kun bruges i meget specifikke situationer. Brugere bør normalt ikke have behov for at bruge denne indstilling!</span>`,
        ovx: "Forskyd meddelelsen vist på skærmbilledet horisontalt",
        ovy: "Forskyd meddelelsen vist på skærmbilledet vertikalt",
        importtheme: `Importer tilpasninger via en brugeroprettet <span class="hl">temafil</span>`,
        exporttheme: `Eksporter det aktuelt valgte <span class="hl">tema</span> til deling<br><br><span class="ttdesc">Før du forsøger at eksportere, skal du sikre dig, at det ønskede <span class="hl">tema</span> er valgt (via menuen <span class="hl">Vælg Tema</span>). Sørg også for, at tilpasninger er gemt til det valgte <span class="hl">tema</span> (via menuen <span class="hl">Gem Tema</span>)<br><br><u>Enhver tilpasning, der endnu ikke er gemt til det aktuelle <span class="hl">tema</span>, vil ikke blive eksporteret!</u></span>`,
        webhooks: "Brug en webhook-URL til at sende beskeder til en Discord-server, hver gang en præstation låses op",
        webhookmain: `Skift om præstationsoplysninger skal sendes til en Discord-server, når en $main præstation låses op`,
        webhooksemi: `Skift om præstationsoplysninger skal sendes til en Discord-server, når en $semi præstation låses op`,
        webhookrare: "Skift om præstationsoplysninger skal sendes til en Discord-server, når en $rare præstation låses op",
        webhookplat: "Skift om præstationsoplysninger skal sendes til en Discord-server, når en $plat præstation låses op",
        webhooktest: "Skift om testinformation skal sendes til en Discord-server, når testnotifikationer af enhver type udløses",
        webhookurl: `Indstil <span class="hl">webhook-URL'en</span> for den ønskede Discord-server<br><br><span class="ttdesc">En <span class="hl">webhook-URL</span> bruges til at sende beskeder til en Discord-server/kanal på vegne af en bruger eller applikation. For at opsætte en ny webhook til en Discord-server, skal brugeren have en rolle på den ønskede server, der tillader oprettelse af webhooks<br><br><u>En webhook-URL er påkrævet, når du bruger denne mulighed</u><br><br>Se Discords officielle dokumentation for flere oplysninger</span>`,
        webhookspoilers: `Tilføj et spoiler-mærke til "Skjulte" præstationer, når de bliver delt på Discord`,
        webhookappid: "Vis AppID for det aktuelle spil i sidefoden af webhook-embedden",
        unlockmsg: "Indstil positionen for oplåsningsbeskeden/tilpasset tekst inden i $type",
        title: "Indstil positionen for præstationsnavnet inden i $type",
        desc: "Indstil positionen for præstationsbeskrivelsen inden i $type",
        notification: "notifikation",
        screenshot: "skærmbillede",
        percentpos: "Indstil positionen for sjældenhedsprocenten inden i $type",
        sspercentpos: "Indstil positionen for sjældenhedsprocenten inden i $type",
        hiddeniconpos: "Indstil positionen for ikonet for skjult/hemmelig præstation inden i $type",
        sshiddeniconpos: "Indstil positionen for ikonet for skjult/hemmelig præstation inden i $type",
        decorationpos: "Indstil positionen for dekorationselementet inden i $type",
        ssdecorationpos: "Indstil positionen for dekorationselementet inden i $type",
        percentbadge: "Vis procentdelen af låsningen inden i et badge placeret over ikonet for præstationen/spillet",
        sspercentbadge: "Vis procentdelen af låsningen inden i et badge placeret over ikonet for præstationen/spillet",
        percentbadgepos: "Indstil badgepositionen",
        sspercentbadgepos: "Indstil badgepositionen",
        percentbadgecolor: "Indstil baggrundsfarven for badgen",
        sspercentbadgecolor: "Indstil baggrundsfarven for badgen",
        percentbadgefontcolor: "Indstil skrifttypens farve på badge",
        sspercentbadgefontcolor: "Indstil skrifttypens farve på badge",
        percentbadgefontsize: "Indstil størrelsen på badgen",
        sspercentbadgefontsize: "Indstil størrelsen på badgen",
        percentbadgeroundness: "Indstil rundheden af badgen",
        sspercentbadgeroundness: "Indstil rundheden af badgen",
        percentbadgex: "Forskyd positionen af badge-elementet horisontalt",
        sspercentbadgex: "Forskyd positionen af badge-elementet horisontalt",
        percentbadgey: "Forskyd positionen af badge-elementet vertikalt",
        sspercentbadgey: "Forskyd positionen af badge-elementet vertikalt",
        percentbadgeimg: "Vis et sjældenhedsbaseret ikon som badge-element",
        sspercentbadgeimg: "Vis et sjældenhedsbaseret ikon som badge-element",
        percentbadgeimgbronze: "Badgeikonet der vises når oplåsningsprocenten er > $semirarity",
        sspercentbadgeimgbronze: "Badgeikonet der vises når oplåsningsprocenten er > $semirarity",
        percentbadgeimgsilver: "Badgeikonet der vises når oplåsningsprocenten er < $semirarity og > $rarity",
        sspercentbadgeimgsilver: "Badgeikonet der vises når oplåsningsprocenten er < $semirarity og > $rarity",
        percentbadgeimggold: "Badge-ikonet, der vises, når oplåsningsprocenten er < $rarity",
        sspercentbadgeimggold: "Badge-ikonet, der vises, når oplåsningsprocenten er < $rarity",
        percentbadgeimgplat: "Badgeikonet der vises når alle præstationer er blevet låst op",
        sspercentbadgeimgplat: "Badgeikonet der vises når alle præstationer er blevet låst op",
        resetpbimgs: "Nulstil alle badge-ikoner til standard",
        elemsmatch: `Matcher indstillingerne for meddelelser, der er angivet i tilpasseren for denne meddelelsestype<br><br><span class="ttdesc">Nogle meddelelsespræferencer kan ikke fuldt ud matche tilpasserens indstillinger på grund af forskelle mellem layout på skærmen og meddelelser baseret på skærmbilleder</span>`,
        themeswitch: `Skift automatisk til ethvert gemt <span class="hl">Tema</span>, når et bestemt spil opdages`,
        userthemesync: `Synkroniser tilpasninger i det valgte <span class="hl">Tema</span> til alle andre meddelelsestyper`,
        showsystrayopts: `Vis alle muligheder, der normalt findes under <span class="hl">Systembakke</span> > <span class="hl">Indstillinger</span> i <span class="hl">Indstillinger</span> > <span class="hl">Diverse</span>`,
        releaseshortcut: "Frigiv det aktuelt overvågede spil ved hjælp af den angivne tastaturgenvej",
        themeselect: "Vælg et tidligere gemt Tema",
        statwin: `Vis konfigurerbare præstationsstatistikker for det aktuelle spil i et eksternt vindue<br><br><span class="ttdesc">Når det bruges sammen med indstillingen <span class="hl">Oversæt Præstationer til Steam-sprog</span>, kan nogle oversættelser være utilgængelige, indtil den specifikke præstation er låst op</span>`,
        statwinaot: `Indstil vinduet for præstationsstatistik til tilstanden "Altid øverst", så vinduet vises over spilvinduet<br><br><span class="ttdesc">Når denne mulighed er aktiveret, vil vinduet for præstationsstatistik ikke længere registrere brugerinteraktioner, såsom "klik"-hændelser. For at genaktivere interaktion med vinduet skal denne mulighed deaktiveres</span>`,
        statwinshortcut: "Skift Achievement Stats Overlay ved hjælp af den angivne genvejstast",
        ssdisplay: "Vis en forhåndsvisning af det optagede skærmbillede i meddelelsen",
        iconscale: "Forøg eller formindsk størrelsen på præstationsikonet",
        showiconborder: "Vis et billede som en ramme omkring præstationsikonet",
        iconborderimg: "Indlæs en billedfil til brug som ramme omkring præstationsikonet",
        iconborderpos: "Angiv, om ikonrammen skal vises foran eller bagved præstationsikonet",
        iconborderscale: "Forøg eller formindsk størrelsen på ikonrammen i notifikationen",
        iconborderx: "Forøg eller formindsk den vandrette forskydning af ikonrammen i notifikationen",
        iconbordery: "Forøg eller formindsk den lodrette forskydning af ikonrammen i notifikationen",
        iconborderrarity: "Ændrer den viste ikonramme baseret på sjældenheden af den oplåste præstation",
        iconborderimgbronze: "Ikonrammen der vises når oplåsningsprocenten er > $semirarity",
        iconborderimgsilver: "Ikonrammen der vises når oplåsningsprocenten er < $semirarity og > $rarity",
        iconshadowcolor: "Indstil farven på skyggeeffekten omkring præstationsikonet, når en sjælden præstation låses op",
        iconanimcolor: "Indstil farven på animationseffekten bag præstationsikonet, når en sjælden præstation låses op",
        logoscale: "Forøg eller formindsk størrelsen på logoelementet i notifikationen",
        decorationscale: "Forøg eller formindsk størrelsen på dekorationselementet i notifikationen",
        usecustomfontsizes: `Individuelt forøg eller formindsk størrelsen på textelementer i notifikationen<br><br><span class="ttdesc">Bevarelse af den oprindelige notifikationslayout kan ikke garanteres, når individuelle skriftstørrelser ændres</span>`,
        unlockmsgfontsize: "Forøg eller formindsk størrelsen på textelementet for oplåsningsbeskeden",
        titlefontsize: "Forøg eller formindsk størrelsen på textelementet for præstationstitlen",
        descfontsize: "Forøg eller formindsk størrelsen på textelementet for præstationsbeskrivelsen",
        webhookembedcolormain: "Angiv den farve, der bruges i webhook-indlejringen, når en $main præstation låses op",
        webhookembedcolorsemi: "Angiv den farve, der bruges i webhook-indlejringen, når en $semi præstation låses op",
        webhookembedcolorrare: "Angiv den farve, der bruges i webhook-indlejringen, når en $rare præstation låses op",
        webhookembedcolorplat: "Angiv den farve, der bruges i webhook-indlejringen, når en $plat præstation låses op",
        raemus: "Vis notifikationer, når spil registreres i understøttede emulatorer",
        rauser: "Angiv Retro Achievements-brugernavnet for at spore achievements",
        rakey: `Angiv Web API-nøglen, der skal bruges til godkendelse med Retro Achievements API<br><br><span class="ttdesc">En Web API-nøgle kan kopieres eller gendannes ved at logge ind på Retro Achievements-hjemmesiden og navigere til <span class="hl">Indstillinger > Nøgler > Web API-nøgle</span><br><br>🔒 Den angivne nøgle vil blive krypteret, før den gemmes lokalt på systemet (hvis det aktuelle operativsystem understøtter kryptering)</span>`,
        rapercenttype: "Angiv, om procentdelen af oplåste Hardcore eller Softcore achievements skal vises i notifikationer",
        retroarch: `Vis Retro Achievements-meddelelser for spil emuleret via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Indstillinger > Logning</span> skal konfigureres med følgende indstillinger:<br><br><ul><li><span class="hllb">Logningsdetaljer</span>: <span class="hlgreen">TIL</span></li><li><span class="hllb">Frontend-logningsniveau</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Log til fil</span>: <span class="hlgreen">TIL</span></li><li><span class="hllb">Tidsstempler i logfiler</span>: <span class="hlred">FRA</span></li></ul></span>`,
        dolphin: `Vis Retro Achievements-meddelelser for spil emuleret via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Vis > Vis logkonfiguration</span> skal konfigureres med følgende indstillinger:<br><br><ul><li><span class="hllb">Detaljeringsgrad</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Logudgange</span> > <span class="hlgreen">Skriv til fil</span></li><li><span class="hllb">Logtyper</span> > <span class="hlgreen">Præstationer (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Vis Retro Achievements-meddelelser for spil emuleret via PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Værktøjer > Aktiver fil-logning</span> skal være aktiveret</span>`,
        duckstation: `Vis Retro Achievements-notifikationer for spil emuleret via Duckstation<br><br><span class="ttdesc">❗ Filen <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> skal downloades og flyttes til <span class="hl">Duckstations installationsmappe</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Indstillinger > Præstationer > RAIntegration (Kun for udviklere)</span> skal være aktiveret</span>`,
        ppsspp: `Vis Retro Achievements-notifikationer for spil emuleret via PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> skal være aktiveret og konfigureret med følgende indstillinger:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Indstil stien til RetroArch's <span class="hl">"retroarch.log"</span> logfil<br><br><span class="ttdesc">Ved standardinstallationen gemmes <span class="hl">"retroarch.log"</span> i <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Indstil stien til Dolphin's <span class="hl">"dolphin.log"</span> logfil<br><br><span class="ttdesc">Ved standardinstallationen gemmes <span class="hl">"dolphin.log"</span> på en af følgende placeringer:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Indstil stien til PCSX2's <span class="hl">"emulog.txt"</span> logfil<br><br><span class="ttdesc">Ved standardinstallationen gemmes <span class="hl">"emulog.txt"</span> i <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Angiv stien til logfilen <span class="hl">"RALog.txt"</span> for Duckstation<br><br><span class="ttdesc">Med standardinstallationsindstillinger gemmes <span class="hl">"RALog.txt"</span> i <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Angiv stien til PPSSPP's logfil <span class="hl">"log.txt"</span><br><br><span class="ttdesc">Ved brug af standardinstallationsindstillinger gemmes <span class="hl">"log.txt"</span> i <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Indstil farverne individuelt for tekstelementer i notifikationen",
        unlockmsgfontcolor: "Indstil farven på det første tekstelement",
        titlefontcolor: "Indstil farven på det andet tekstelement",
        descfontcolor: "Indstil farven på det tredje tekstelement",
        exportachdata: `Eksporter præstationsdata til en JSON-fil, når en præstation låses op<br><br><span class="ttdesc">Når aktiveret, vil <span class="ttcode">achdata.json</span> blive eksporteret til:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Justerer den lodrette afstand mellem textelementerne i notifikationen",
        ssmode: `Indstil om skærmbilleder skal optage hele skærmen eller det aktuelle spilvindue<span style="color: red;">*</span><br><br><span class="ttdesc">Hvis den aktuelle spils <span class="hl">eksekverbare fil</span> ikke kan findes (<i>enten via <span class="hl">automatisk processporing</span> eller når den tilføjes som en post i <span class="hl">Automatisk frigivelse af spil</span></i>), vil denne indstilling som standard blive sat til tilstanden "Skærm"</span>`,
        replaynotify: "Gentag den seneste præstationsnotifikation",
        replaynotifyshortcut: "Gentag den seneste præstationsnotifikation med den angivne tastaturgenvej",
        replaynotifyempty: `<br><br><span class="ttdesc">Gentagelseskøen er tom. Lås op for en præstation for at gentage en notifikation</span>`,
        customtrigger: "Udløser en tast/kombination, der simuleres ved oplåsning af en achievement. Kan bruges til at udløse tastaturgenveje registreret i eksterne applikationer",
        customtriggershortcut: `Udløser den angivne tast/kombination, når en achievement låses op<br><br><span class="ttdesc">Understøtter mellem 1-3 taster pr. genvej. For tastetryk/kombinationer med færre end 3 taster, tryk på de ønskede taster og vent på, at timeren (5 sek.) udløber</span>`,
        customtriggerdelay: "Forsinker den angivne brugertilpassede tast/kombination",
        customtriggerusedisplaytime: `Forsinker den angivne brugertilpassede tast/kombination baseret på den aktuelle notifikationstypes Visningstid`,
        trophymode: "Erstat Hoved/Sjælden/100% notifikationstyper med Bronze/Sølv/Guld/Platin",
        lognum: `Antallet af tidligere logfiler, der gemmes, før de slettes. En ny logfil oprettes ved hver appstart<br><br><span class="ttdesc">Når sat til 0, slettes alle tidligere logfiler ved afslutning</span>`, 
        detectedappid: `Brug <span class="hl">AppID</span> for det aktuelt registrerede spil`,
        listmode: `Angiver adfærden for <span class="hl">Ekskludering</span>/<span class="hl">Inklusionsliste</span><br><br><span class="ttdesc">• <span class="hl">Ekskludering</span>: Ignorer kun de spil, der er angivet på listen<br>• <span class="hl">Inkludering</span>: Ignorer alle spil undtagen dem, der er angivet på listen</span>`,
        notifymax: `Indstil det maksimale antal notifikationer, der kan vises samtidigt på skærmen<br><br><span class="ttdesc">Øgning af antallet af samtidige notifikationer kræver flere ressourcer og kan reducere ydeevnen</span>`,
        notifyspace: "Indstil afstanden mellem samtidige notifikationer på skærmen",
        audiocooldown: `Indstil hvor lang tid efterfølgende notifikationer skal vente, før ny lyd kan afspilles<br><br><span class="ttdesc">Lyden påvirkes ikke, hvis Maksimalt antal notifikationer er sat til 1</span>`,
        rauseemudir: "Gem skærmbilleder/notifikationsbilleder, der er låst op via RetroAchievements, i en undermappe for den aktuelle emulator inden for den angivne mappe til skærmbilleder/billeder",
        ssext: "Angiv filformatet for skærmbilleder, der genereres via indstillingen for skærmbillede med notifikationsoverlay",
        notify1line: `Begræns antallet af tekstlinjer, der vises i alle notifikationer, til 1<br><br><span class="ttdesc">Tekststrenge, der ikke kan være på én linje, vil blive afkortet med "..."</span>`,
        copytheme: "Kopiér det valgte tema til en anden notifikationstype",
        ssaddtosteam: "Tilføj automatisk genereret medie til den aktuelle spils Optagelser og Skærmbilleder i Steam",
        appdatadir: "Åbn placeringen af appens AppData-mappe",
        backup: "Lav en backup af indholdet i appens AppData-mappe til et valgt sted, som vil fungere som et gendannelsespunkt for den nuværende tilstand af appen",
        restore: "Gendan indholdet af appens AppData-mappe fra en tidligere backup",
        gametimerwin: "Viser en timer på skærmen, der viser den tid, det tager at låse op for alle achievements i det aktuelle spil",
        gametimerwinshortcut: "Skifter spilafslutningstimeren ved hjælp af den angivne tastaturgenvej",
        gametimerwinaot: `Sætter spilafslutningstimeren til tilstanden "Altid øverst", så vinduet kan vises over spilvinduet<br><br><span class="ttdesc">Når aktiveret, vil spilafslutningstimeren ikke længere registrere brugerinteraktioner, såsom "klik"-hændelser. For at genaktivere interaktion med vinduet skal denne indstilling deaktiveres</span>`,
        resetgametimer: "Nulstiller spilafslutningstimeren for det aktuelle spil",
        noshortcuts: `Deaktiverer alle tastaturgenveje i appen<br><br><span class="ttdesc">Når aktiveret, <u>vil alle genveje i appen ikke længere fungere</u>. Alle indstillinger relateret til tastaturgenveje vil også blive skjult</span>`,
        extwinnotify: "Skifter synligheden af alle notifikationer på skærmen ved brug af Stream Notifications",
        usesanwatcher: `Aktivér SAN's nye overvågning af spilprocesser<br><br><span class="ttdesc">Forskellene mellem den nye SANWatcher og de gamle metoder til automatisk procesovervågning er som følger:<br><br><div class="wrapper sanwatcher"><span class="hl">TIL</span><ul><li>Overvåger aktivt start-/afslutningshændelser for alle processer, der er gemt i spillets installationsmappe</li><li>Kræver ikke, at spillets eksekverbare fil er kendt for at frigive det aktuelle spil</li><li>Adfærden for launchere før spilstart kan variere, så fuld kompatibilitet med alle Steam-spil kan ikke garanteres</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">FRA</span><ul><li>Scanner spillets installationsmappe for kørende eksekverbare filer efter spilstart</li><li>Kræver, at spillets eksekverbare fil er kendt for at frigive det aktuelle spil</li><li>Hvis spilprocessen ikke kan bestemmes automatisk, skal brugeren manuelt tilføje en ny post til <span class="hl">Auto-Release Games</span>, for at spillene kan frigives automatisk</li></ul></div>`,
        releasewaittime: `Angiv, hvor længe SANWatcher skal vente på, at nye spilprocesser starter, før det aktuelle spil frigives<br><br><span class="ttdesc">Hvis det aktuelle spil for eksempel starter en launcher eller et konfigurationsvindue før selve spillet, bestemmer denne indstilling, hvor mange sekunder SANWatcher skal vente på, at det faktiske spilvindue åbnes, efter at launcheren eller konfigurationsvinduet er blevet lukket<br><br>Hvis en ny aktiv spilproces registreres inden for denne ventetid, annulleres frigivelsen, og den nye aktive proces vil i stedet blive overvåget<br><br>💡 Spilnavnet vil blinke <span style="color: yellow;">gult</span> i feltet <span class="hl">Game Display</span>, mens det aktuelle spil venter på at blive frigivet</span>`
    },
    update: {
        updateavailable: "Opdatering tilgængelig",
        sub: [
            `<span id="newversion"></span>`,
            "Der er en ny opdatering til Steam Achievement Notifier tilgængelig!",
            `Fuld versionsnoter kan findes på <span id="discordreleasenotes"></span> og <span id="githubreleasenotes"></span>`
        ],
        update: "Opdater"
    },
    linkgame: {
        content: {
            exepath: "Sti til eksekverbar fil",
            managesub: [
                `Hvis Steam stadig viser et spil som <i>Spiller</i> efter spilvinduet er lukket, kan du prøve at tilføje en ny post til <span class="hl">Automatisk frigivelse af spil</span>`,
                `Tilføj et specifikt spils <span class="hl">AppID</span> sammen med det forventede <span class="hl">spil-eksekverbare fil</span>, eller <span class="hl">fjern</span> en eksisterende post`,
                `Nye poster kan også tilføjes ved at <i>højreklikke</i> på <span class="hl">System Tray-ikonet</span> > <span class="hl">Automatisk frigivelse af spil</span>, når et spil er blevet registreret`,
                `<span class="hl help" id="appidhelp"><u>Hvordan finder jeg AppID for et Steam-spil?</u></span>`
            ],
            linknew: "Ny post",
            linknewsub: [
                `Tilføj et nyt spils <span class="hl">AppID</span> sammen med det forventede <span class="hl">spil-eksekverbare fil</span>`,
                `Når de er tilføjet, kan poster <span class="hl">fjernes</span> via den forrige menu <span class="hl">Automatisk frigivelse af spil</span>`
            ],
            linkedit: "Rediger post",
            linkeditsub: [
                `Rediger et eksisterende spils <span class="hl">AppID</span> sammen med det forventede <span class="hl">spil-eksekverbare fil</span>`,
                `Når de er tilføjet, kan poster <span class="hl">fjernes</span> via den forrige menu <span class="hl">Automatisk frigivelse af spil</span>`
            ],
            link: "Tilføj"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Tilføj et Steam-spils <span class="hl">AppID</span> til <span class="hl">udelukkelseslisten</span>`,
                `Steam Achievement Notifier vil ikke forsøge at spore præstationsdata for nogen spil med et <span class="hl">AppID</span>, der er tilføjet til <span class="hl">udelukkelseslisten</span>`,
                `<span class="hl" id="appidhelp"><u>Hvordan finder jeg et Steam-spils AppID?</u></span>`
            ],
            exclusionnew: "Ny udelukkelse",
            exclusionnewsub: [
                `Indtast <span class="hl">AppID</span> for at tilføje det til <span class="hl">udelukkelseslisten</span>`
            ],
            exclusionedit: "Rediger Udelukkelse",
            exclusioneditsub: [
                `Rediger det eksisterende <span class="hl">AppID</span> i <span class="hl">Udelukkelseslisten</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Tilføj et Steam-spils <span class="hl">AppID</span> til <span class="hl">Inklusionslisten</span>`,
                `Steam Achievement Notifier forsøger kun at spore præstationsdata for spil, der har et <span class="hl">AppID</span> tilføjet til <span class="hl">Inklusionslisten</span>`,
                `<span class="hl help" id="appidhelp"><u>Hvordan finder jeg et Steam-spils AppID?</u></span>`
            ],
            inclusionnew: "Ny inklusion",
            inclusionnewsub: [
                `Indtast <span class="hl">AppID</span> for at tilføje det til <span class="hl">Inklusionslisten</span>`
            ],
            inclusionedit: "Rediger inklusion",
            inclusioneditsub: [
                `Rediger det eksisterende <span class="hl">AppID</span> i <span class="hl">Inklusionslisten</span>`
            ]
        }
    },
    notificationelems: {
        title: "Notifikationselementer",
        content: {
            unlockmsg: "Oplåsningsbesked",
            title: "Præstationsnavn",
            desc: "Præstationsbeskrivelse",
            hiddeniconpos: "Skjult ikon",
            sshiddeniconpos: "Skjult ikon",
            decorationpos: "Dekoration",
            ssdecorationpos: "Dekoration",
            percentpos: "Sjældenhedsprocent",
            sspercentpos: "Sjældenhedsprocent",
            percentbadge: "Procentbadge",
            sspercentbadge: "Procentbadge",
            percentbadgepos: "Badgeposition",
            sspercentbadgepos: "Badgeposition",
            percentbadgecolor: "Badgefarve",
            sspercentbadgecolor: "Badgefarve",
            percentbadgefontsize: "Badgestørrelse",
            sspercentbadgefontsize: "Badgestørrelse",
            percentbadgefontcolor: "Badge skrifttypens farve",
            sspercentbadgefontcolor: "Badge skrifttypens farve",
            percentbadgeroundness: "Badgeafrunde",
            sspercentbadgeroundness: "Badgeafrunde",
            percentbadgex: "Horisontal forskydning",
            sspercentbadgex: "Horisontal forskydning",
            percentbadgey: "Vertikal forskydning",
            sspercentbadgey: "Vertikal forskydning",
            percentbadgeimg: "Brug ikon",
            sspercentbadgeimg: "Brug ikon",
            percentbadgeimgbronze: "Sjældenhed: > $semirarity",
            sspercentbadgeimgbronze: "Sjældenhed: > $semirarity",
            percentbadgeimgsilver: "Sjældenhed: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Sjældenhed: < $semirarity & > $rarity",
            percentbadgeimggold: "Sjældenhed: < $rarity",
            sspercentbadgeimggold: "Sjældenhed: < $rarity",
            resetpbimgs: "Nulstil badge-ikoner",
            elemsmatch: "Matcher tilpasserens indstillinger",
            ssdisplay: "Skærmbillede Forhåndsvisning"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Tilføj et spils <span class="hl">AppID</span> for automatisk at skifte <span class="hl">Temaer</span>, når det opdages`,
                `Ethvert gemt <span class="hl">Tema</span> kan vælges for hver meddelelsestype sammen med den ønskede skærm, der skal bruges som <span class="hl">Skærmbilledkilde</span>`,
                `<span class="hl" id="appidhelp"><u>Hvordan finder jeg AppID for et Steam-spil?</u></span>`
            ],
            themeswitchnew: "Ny automatisk skift",
            themeswitchnewsub: [
                `Indtast spillets <span class="hl">AppID</span> sammen med den ønskede skærm, der skal bruges som <span class="hl">Skærmbilledkilde</span>`,
                `Vælg hvilket <span class="hl">Tema</span> der skal skiftes til for hver meddelelsestype, når dette spils <span class="hl">AppID</span> opdages`
            ],
            themeswitchedit: "Rediger Automatisk Skift",
            themeswitcheditsub: [
                `Rediger den ønskede skærm, der skal bruges som <span class="hl">Skærmbilledkilde</span> for dette spils <span class="hl">AppID</span>`,
                `Ændr hvilket <span class="hl">Tema</span> der skal skiftes til for hver notifikationstype, når dette spils <span class="hl">AppID</span> registreres`
            ],
            themes: "Temaer",
            src: "Skærmbilledkilde",
            themedeleted: "Tema slettet"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Det ser ud til, at du prøver at aktivere indstillingen <span class="hl">${opt}</span>, men denne indstilling kan ikke aktiveres uden først at installere pakken <code class="dialogcode">${dep}</code>`,
    `Kør venligst <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> for at installere denne afhængighed`
]