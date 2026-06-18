export const translations = {
    global: {
        main: "Huvud",
        semi: "Semi",
        rare: "Sällsynt",
        plat: "100%",
        trophymain: "Brons",
        trophysemi: "Silver",
        trophyrare: "Guld",
        trophyplat: "Platina",
        test: "Testnotifikationer",
        topleft: "Övre vänstra",
        topcenter: "Övre mitten",
        topright: "Övre högra",
        bottomleft: "Nedre vänstra",
        bottomcenter: "Nedre mitten",
        bottomright: "Nedre högra",
        ok: "OK",
        preview: "Förhandsvisning",
        save: "Spara",
        back: "Tillbaka",
        edit: "Redigera",
        lockedby: "Låst av $lock",
        settings: "Inställningar",
        appversion: "Appversion",
        image: "Bild",
        audio: "Ljud",
        folder: "Mapp",
        font: "Typsnitt",
        select: "Välj",
        gametitle: "Spelets titel",
        congrats: "Grattis!",
        achievementunlocked: "Prestation upplåst",
        gamecomplete: "100% Färdig",
        achievementdesc: "Klickade på knappen för att visa testmeddelande",
        gamecompletedesc: "Du har låst upp alla prestationer!",
        defaultcustomfont: "Standard (Inget typsnitt valt)",
        defaultsoundfile: "Standard (Ingen fil vald)",
        defaultsounddir: "Standard (Ingen mapp vald)",
        nowtracking: "Spårar nu prestationer för:",
        nopreview: "Förhandsvisning är inte tillgänglig för det nativa operativsystemet",
        options: "Alternativ",
        resetwindow: "Återställ Fönster",
        show: "Visa",
        exit: "Avsluta",
        donotshowagain: "Visa inte den här dialogrutan igen",
        releasegame: "Frigör Spel",
        releasegamesub: [
            `Starta om bakgrundsprocessen för Worker och frigör det nuvarande spelet från att spåras`,
            `Prova detta alternativ om du nyligen har stängt ett spel men Steam visar fortfarande att det körs, eller om Steam Achievement Notifier fortfarande visar att det spårar ett spel som redan har stängts`
        ],
        noupdateavailable: "Inga uppdateringar tillgängliga",
        latestversion: "Senaste versionen installerad",
        missingdeps: "Saknad beroende",
        restartapp: "Starta om appen",
        restartappsub: [
            `Om sakerna inte fungerar korrekt, använd detta alternativ för att stänga och öppna appen igen`,
            `Om problemet kvarstår efter att ha startat om appen, överväg att rapportera det genom att använda de inbyggda länkarna på startsidan`
        ],
        suspend: "Pausa",
        resume: "Återuppta",
        new: "Nytt...",
        nodata: "Inga Data",
        findappid: "Hitta AppID",
        findappidsub: [
            `Varje Steam-spel har ett unikt nummer associerat med det - kallat <span class="hl">AppID</span>. Du kan hitta ett Steam-spels associerade AppID genom att kontrollera en av följande:`,
            `I <span class="hl">Steam-klienten</span>, högerklicka på ett spel i ditt <span class="hl">Bibliotek</span> och välj <i>Egenskaper</i> > <i>Uppdateringar</i> - AppID:et kommer att listas här`,
            `URL:en till spelets <span class="hl">Butikssida</span> - det kommer att vara numret listat efter <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Webbplatser som <span class="hl">SteamDB</span> - avsnittet <span class="hl">App Info</span> kommer att lista AppID för varje spel`
        ],
        noexe: "Spelets EXE-fil hittades inte!",
        noexesub: "Klicka här för mer information",
        noexedialogsub: [
            `Steam Achievement Notifier kunde inte automatiskt hitta den körbara filen för detta spel. Platsen för spelets körbara fil krävs för att kunna "frigöra" spelet när det har stängts`,
            `För att manuellt frigöra spelet när det har stängts, <i>högerklicka</i> på <span class="hl">Systemfältsikonen</span> > <span class="hl">Alternativ</span> > <span class="hl">Frigör Spel</span>, eller använd <span class="hl">Genväg för Frigör Spel</span>`,
            `Alternativt kan du klicka på knappen <span class="hl">Lägg till</span> nedan för att lägga till den körbara filen som är associerad med ett fokuserat fönster i <span class="hl">Inställningar</span> > <span class="hl">Spel</span> > <span class="hl">Automatiskt Frigjorda Spel</span>`,
        ],
        autorelease: "Automatisk Frigöring av Spel",
        autoreleasesub: [
            `Om Steam fortfarande visar ett spel som <i>Spelar</i> efter att spelfönstret har stängts, försök att lägga till en ny post i <span class="hl">Automatiskt Frigjorda Spel</span>`,
            `För att göra detta för det aktuella spelet, klicka på knappen <span class="hl">Lägg till</span> nedan för att lägga till den körbara filen som är associerad med ett fokuserat fönster i <span class="hl">Inställningar</span> > <span class="hl">Spel</span> > <span class="hl">Automatiskt Frigjorda Spel</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Vad händer när jag klickar på knappen Lägg till?</u></span>`,
        linkgamehelp: "Lägg till Post via Fokus",
        linkgamehelpsub: [
            `Om du klickar på knappen <span class="hl">Lägg till</span> läggs en ny post automatiskt till i <span class="hl">Inställningar</span> > <span class="hl">Spel</span> > <span class="hl">Automatiskt Frigjorda Spel</span>, med information från det för närvarande fokuserade fönstret.`,
            `Efter att du klickat på knappen <span class="hl">Lägg till</span> startar en timer på 5 sekunder`,
            `Innan timern tar slut, fokusera spelfönstret`,
            `När timern har avslutats läggs en ny post för det aktuella <span class="hl">AppID</span> till i <span class="hl">Inställningar</span> > <span class="hl">Spel</span> > <span class="hl">Automatiskt Frigjorda Spel</span>, med den körbara fil som är associerad med det fokuserade fönstret`,
            `Nya försök kommer att skriva över befintliga poster, eller så kan posten tas bort via <span class="hl">Inställningar</span> > <span class="hl">Spel</span> > <span class="hl">Automatiskt Frigjorda Spel</span> genom att klicka på knappen <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Det gick inte att lägga till fönstret",
        addlinkfailedsub: `Klicka på knappen <span class="hl">Lägg till</span> för att försöka igen`,
        webhookunlockmsg: "$user har låst upp en prestation",
        webhookunlockmsgplat: "$user har låst upp alla prestationer",
        webhookingame: "i $gamename",
        notconnected: "Inte ansluten",
        raloghelp: "Mitt spel upptäcks inte",
        raenablelog: `Emulatorloggfiler`,
        raenablelogsub: [
            `För att få tillgång till interna spelevent (som aktuell spelstatus, information om prestationer osv.), måste loggning till en extern <span class="hl">loggfil</span> <u>aktiveras</u> inom alla valda emulatorer.<br><br>Alla valda emulatorer <u>måste använda denna <span class="hl">loggfil</span></u> som värde för <span class="hl">Loggfilens sökväg</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Inställningar > Loggning</span> måste konfigureras med följande inställningar:
                    <br>
                    <ul>
                        <li><span class="hllb">Loggningsverbositet</span>: <span class="hlgreen">PÅ</span></li>
                        <li><span class="hllb">Frontend Loggningsnivå</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Logga till fil</span>: <span class="hlgreen">PÅ</span></li>
                        <li><span class="hllb">Tidsstämpel för loggfiler</span>: <span class="hlred">AV</span></li>
                    </ul>
                    <br>
                    Med standardinstallationen lagras <span class="hl">"retroarch.log"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Visa > Visa loggkonfiguration</span> måste konfigureras med följande inställningar:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Logger Outputs</span> > <span class="hlgreen">Skriv till fil</span></li>
                        <li><span class="hllb">Loggtyper</span> > <span class="hlgreen">Prestationer (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Med standardinstallationen lagras <span class="hl">"dolphin.log"</span> i en av följande platser:
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
                    <span class="hl">PCSX2 > Verktyg > Aktivera filinspelning</span> måste vara aktiverat
                    <br>
                    <br>
                    Med standardinstallationen lagras <span class="hl">"emulog.txt"</span> i:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> måste <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>laddas ner</u></span> och flyttas till <span class="hl">Duckstation installationsmapp</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Inställningar > Prestationer > RAIntegration (Endast för utvecklare)</span> måste vara aktiverat
                    <br>
                    <br>
                    Med standardinstallationsinställningarna sparas <span class="hl">"RALog.txt"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> måste vara aktiverat och konfigurerat med följande inställningar:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Med standardinstallationsinställningar sparas <span class="hl">"log.txt"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta-version inte stöds",
        betaunsupportedsub: [
            "En ny version av Steam Achievement Notifier har släppts!",
            `<u>Den här Beta-versionen stöds inte längre</u>. Vänligen ladda ner och installera den senaste officiella versionen via Github med knappen <span class="hl">Releases</span> nedan.`,
            "Tack för att du testade! 💜"
        ],
        betaghreleases: "Uppdateringar",
        checkapplog: "Vänligen kontrollera apploggen för mer information."
    },
    app: {
        content: {
            game: "Inget spel upptäckt",
            customise: "Anpassa",
            test: "Visa testmeddelande"
        }
    },
    settings: {
        language: {
            title: "Språk",
            content: {
                steamlang: "Översätt prestationer till Steam-språk",
                maxsteamlangretries: "Maximalt antal översättningsförsök"
            }
        },
        os: {
            title: "Operativsystem",
            content: {
                desktop: "Skapa skrivbordsgenväg",
                startwin: "Starta vid inloggning",
                startmin: "Starta minimerad",
                nohwa: "Inaktivera hårdvaruacceleration",
                litemode: "Lättläst läge"
            }
        },
        notifications: {
            title: "Aviseringar",
            content: {
                rarity: "Sällsynthetsprocent",
                semirarity: "Silverprocent",
                rareonly: "Endast sällsynta",
                all: "Alla",
                off: "Av",
                showpercent: "Visa procent",
                soundonly: "Endast ljud",
                nowtracking: "Visa spårningsmeddelande",
                nowtrackingscale: "Spårningsskala",
                nowtrackingpos: "Spårningsposition",
                shortcuts: "Aviseringsgenvägar",
                noiconcache: "Inaktivera ikoncache",
                webhooks: "Posta till Discord-server",
                webhooktypes: "Webhook-typer",
                webhookurl: `Webhook-URL`,
                webhookcaution: `Genom att aktivera det här alternativet och tillhandahålla en giltig Discord Webhook-länk godkänner du att du förstår att <u>all prestation och spelinformation för den aktuella Steam-användaren</u> kommer att publiceras på den angivna Discord-servern via den angivna Webhook-länken.<br><br>Om du inte vill att Steam Achievement Notifier ska posta den här informationen å dina vägnar, inaktivera det här alternativet.`,
                webhooklaststatus: "Senaste status",
                webhookspoilers: `Lägg till spoiler-tag`,
                webhookappid: `Visa AppID`,
                replaynotify: "Wiederholungsbenachrichtigung",
                replaynotifyshortcut: "Wiederholungs-Schnellzugriff",
                customtrigger: "Anpassad Trigger",
                customtriggershortcut: "Triggergenväg",
                customtriggerdelay: "Triggerfördröjning",
                customtriggerusedisplaytime: "Använd Visningstid",
                trophymode: "Trofyläge",
                notifymax: "Maximalt antal aviseringar", 
                notifyspace: "Aviseringsavstånd",
                notify1line: "Begränsa text till 1 rad"
            }
        },
        games: {
            title: "Spel",
            content: {
                linkedgames: "Automatiskt Frigjorda Spel",
                themeswitch: "Automatisk byte av teman",
                exclusionlist: "Undantagslista",
                inclusionlist: "Inklusionslista",
                listmode: "Listläge",
                exclusion: "Exkludering",
                inclusion: "Inkludering"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Ta Steam-skärmdump",
                screenshots: "Ytterligare media",
                off: "Av",
                ssonly: "Endast skärmbild",
                overlay: "Skärmdump med aviseringens överlagring",
                monitors: "Skärmdumpskälla",
                hdrmode: "HDR-läge",
                ovpos: "Överlagringsposition",
                ovmatch: "Matcha anpassad position",
                ovx: "Horisontellt förskjutning",
                ovy: "Vertikalt förskjutning",                
                ovpath: "Skärmdumpssökväg",
                ssdelay: "Skärmdumpsfördröjning",
                notifyimg: "Meddelandebild",
                imgpath: "Bildsökväg",
                ssenabled: "Aktivera",
                ssmode: "Skärmdumpsläge",
                screen: "Skärm",
                window: "Fönster",
                rauseemudir: "Spara i emulatorns undermapp",
                ssext: "Skärmbildsformat",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Lägg till i Steam"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Strömma aviseringar",
                extwinframerate: "Bildfrekvens",
                extwinshow: "Visa fönster",
                audiosrc: "Ljudkälla",
                notify: "Avisera",
                app: "Applikation",
                off: "Avstängt",
                statwin: "Prestationstatistikfönster",
                statwinaot: "Alltid överst",
                noachievements: "Inga prestationer att visa",
                startgame: "Starta ett spel för att visa prestationer!",
                max: "Max",
                custom: "Anpassad...",
                statwinshortcut: "Snarväg för överlägg",
                gametimerwin: "Timer för spelavslut",
                gametimerwinshortcut: "Genväg för timer",
                gametimerwinaot: "Alltid överst",
                resetgametimer: "Återställ timer",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Är du säker?</span>
                        <span>Detta kommer att återställa Timern för spelavslut för det aktuella spelet tillbaka till 00:00:00.000.</span>
                        <span class="noundo">🛑 Detta kan inte ångras!</span>
                    </div>
                `,
                resetgametimerfailed: "Det gick inte att återställa timern.",
                resetgametimercomplete: "AppID $appid har redan slutförts.",
                extwinnotify: "Visa skärmnotifikation"
            }
        },
        accessibility: {
            title: "Tillgänglighet",
            content: {
                noanim: "Inaktivera appfönsteranimationer",
                noupdatedialog: "Inaktivera uppdateringsdialog",
                nvda: "Aktivera NVDA-stöd",
                tooltips: "Visa verktygstips",
                showsystrayopts: "Visa systemfältalternativ",
                releaseshortcut: "Genväg för att frigöra spel",
                noshortcuts: "Inaktivera tangentbordsgenvägar"
            }
        },
        advanced: {
            title: "Avancerad",
            content: {
                pollrate: "Undersökningsfrekvens",
                initdelay: "Försening spårning",
                releasedelay: "Utgivningsfördröjning",
                maxretries: "Maximalt antal återförsök",
                debug: "Debugpanel",
                userust: "Alternativ bearbetningsläge",
                notifydebug: "Visa felsökningsaviseringar",
                workerdebug: "Visa Worker DevTools",
                exportachdata: "Exportera prestationsdata",
                lognum: "Tidigare loggfiler", 
                audiocooldown: "Ljudnedkylning",
                usecustomfiles: "Använd anpassade appfiler",
                showcustomfiles: "Visa anpassade appfiler",
                appdatadir: "Visa AppData-mapp",
                backup: "Säkerhetskopiering",
                backuppath: "Säkerhetskopieringsväg",
                backupsub: [
                    "Säkerhetskopiera innehållet i appens AppData-mapp till en vald plats",
                    "Denna säkerhetskopia fungerar som en återställningspunkt för appens nuvarande tillstånd",
                    `Återställ en tidigare säkerhetskopia via <span class="hl">Inställningar</span> > <span class="hl">Avancerat</span> > <span class="hl">Återställ</span>`
                ],
                backupfailed: "Kunde inte skapa säkerhetskopia.",
                restore: "Återställ",
                restoresub: [
                    "Återställ innehållet i appens AppData-mapp från en tidigare säkerhetskopia",
                    `Välj en <span class="hl">.sanbak</span> säkerhetskopieringsfil att återställa från. Denna fil bevaras efter återställningen`,
                    "❗ Efter bekräftelse startas appen om för att återställa den valda säkerhetskopieringsfilen"
                ],
                restorefailed: "Kunde inte återställa säkerhetskopian.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Väntetid för frigöring"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatorer",
                rauser: "Användarnamn",
                rakey: "API-nyckel",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Loggfilens sökväg",
                rapercenttype: "Procenttyp",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Ange loggfilens sökväg",
                logfile: "Loggfil",
                status: "Status",
                game: "Spel",
                lastachievement: "Senaste prestationens ID",
                wait: "Väntar på emulator",
                idle: "Väntar på spelhändelse",
                start: "Startar spelet",
                stop: "Stoppar spelet",
                achievement: "Uppnåelse upplåst"
            }
        },
        misc: {
            title: "Övrigt",
            content: {
                colorprofile: "Färgprofil",
                checkforupdates: "Sök Efter Uppdateringar",
                log: "Applikationslogg",
                reset: "Återställ appen"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Förinställning",
            content: {
                preset: "Meddelandeinställning",
                iconanim: "Sällsynt ikonanimation",
                alldetails: "Visa alla detaljer",
                usepercent: "Använd Procent",
                displaytime: "Visningstid",
                scale: "Skala",
                customtext: "Anpassad text",
                usegametitle: "Använd speltitel",
                customfont: "Anpassad typsnitt"
            }
        },
        sound: {
            title: "Ljud",
            content: {
                soundmode: "Ljudläge",
                file: "Fil",
                folder: "Slumpmässig",
                soundfile: "Ljudfil",
                sounddir: "Ljudmapp",
                volume: "Volym"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Bakgrundsstil",
                solid: "Solid",
                gradient: "Gradient",
                img: "Bild",
                gameart: "Spelkonst",
                gradientangle: "Gradientvinkel",
                bgimg: "Bakgrundsbild",
                bgachicon: "Använd Prestationens Ikon",
                bgimgbrightness: "Ljusstyrka",
                brightness: "Ljusstyrka",
                blur: "Oskärpa",
                roundness: "Rundhet",
                fontsize: "Typsnittstorlek",
                usecustomfontsizes: "Använd anpassade teckenstorlekar",
                unlockmsgfontsize: "Upplåsningsmeddelande",
                titlefontsize: "Titel",
                descfontsize: "Beskrivning",
                textvspace: "Textavstånd",
                opacity: "Opacitet",
                bgonly: "Endast bakgrund",
                glow: "Glow",
                glowcolor: "Färg",
                glowsize: "Storlek",
                glowx: "Horisontell förskjutning",
                glowy: "Vertikal förskjutning",
                glowopacity: "Opacitet",
                glowanim: "Animation",
                glowspeed: "Hastighet",
                glowrarity: "Använd sällsynthet",
                glowcolorbronze: "Sällsynthet: > $semirarity",
                glowcolorsilver: "Sällsynthet: < $semirarity & > $rarity",
                glowcolorgold: "Sällsynthet: < $rarity",
                off: "Ingen",
                pulse: "Puls",
                double: "Dubbla",
                focus: "Fokus",
                orbit: "Orbit",
                fluorescent: "Fluorescerande",
                rainbow: "Regnbåge",
                mask: "Mask",
                maskimg: "Maskbild",
                useoutline: "Kontur",
                outline: "Konturtyp",
                outlinecolor: "Konturens färg",
                outlinewidth: "Konturens bredd",
                dashed: "Streckad",
                dotted: "Prickad"
            }
        },
        colors: {
            title: "Färger",
            content: {
                primarycolor: "Primärfärg",
                secondarycolor: "Sekundärfärg",
                tertiarycolor: "Tertiärfärg",
                iconshadowcolor: "Färg på sällsynt ikonens skugga",
                iconanimcolor: "Färg på sällsynt ikonens animation",
                fontcolor: "Typsnittsfärg",
                usecustomfontcolors: "Använd anpassade teckensnittsfärger",
                unlockmsgfontcolor: "Färg 1",
                titlefontcolor: "Färg 2",
                descfontcolor: "Färg 3",
                fontoutline: "Typsnittets kontur",
                fontoutlinecolor: "Typsnittets konturfärg",
                fontoutlinescale: "Teckensnittets konturskalning",
                fontshadow: "Typsnittsskugga",
                fontshadowcolor: "Typsnittsskuggans färg",
                fontshadowscale: "Teckensnittets skuggsalning",
                fontshadowx: "Horisontell förskjutning",
                fontshadowy: "Vertikal förskjutning"
            }
        },
        icons: {
            title: "Ikoner",
            content: {
                iconscale: "Ikonskala",
                iconroundness: "Ikonens rundhet",
                showiconborder: "Visa ikonram",
                iconborderimg: "Ikonram",
                iconborderpos: "Ramposition",
                iconborderscale: "Ramskala",
                iconborderx: "Horisontell förskjutning",
                iconbordery: "Vertikal förskjutning",
                iconborderrarity: "Använd sällsynthet",
                iconborderimgbronze: "Sällsynthet: > $semirarity",
                iconborderimgsilver: "Sällsynthet: < $semirarity & > $rarity",
                front: "Framför",
                back: "Bakom",
                plat: "100 % -logotyp",
                usegameicon: "Använd spelikonen",
                gameicontype: "Spelikontyp",
                usecustomimgicon: "Använd anpassat ikon",
                customimgicon: "Anpassad ikon",
                icon: "Ikon",
                logo: "Logotyp",
                logoscale: "Logoskala",
                decoration: "Dekoration",
                decorationscale: "Dekorationsskala",
                showdecoration: "Visa dekoration",
                rarity: "Sällsynthet",
                showhiddenicon: "Visa Dold ikon",
                hiddenicon: "Dold ikon",
                replacelogo: "Ersätt Logo"
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Skärmposition",
                usecustompos: "Använd anpassad position",
                setcustompos: "Ange",
                copycustompos: "Tillämpa på Alla",
                resetcustompos: "Återställ"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Uppdatera Tema",
                savetheme: "Spara tema",
                sub: [
                    `Sparade <span class="hl">Användarteman</span> kan väljas från menyn <span class="hl">Välj tema</span> på startskärmen.`,
                    `Se till att <span class="hl">Temans namn</span> är <u>unikt</u> - ett namn som matchar ett befintligt tema <u>kommer att skriva över det föregående</u>!`
                ],
                placeholder: "Temans namn",
                theme: "Tema",
                importtheme: "Importera Tema",
                import: "Importera",
                importsub: [
                    `Importera en användarskapad <span class="hl">temafil</span>`,
                    `<span class="hl">Importerade teman</span> kommer att laddas automatiskt när de har importerats framgångsrikt och kan väljas från menyn <span class="hl">Välj tema</span>`,
                ],
                importidle: `Välj en <span class="hl">temafil</span> att importera`,
                importcopied: `Tema kopierat framgångsrikt`,
                importrenamed: `Tema omdöpt framgångsrikt`,
                importextracted: `Tema extraherat framgångsrikt`,
                importrewriting: `Omskrivning av temafilvägar...`,
                importconverting: `Konverterar tema...`,
                importcreating: `Skapar tema...`,
                importdone: `Tema importerat framgångsrikt`,
                importfailed: `Fel vid import av vald temafil!`,
                exporttheme: "Exportera Tema",
                export: "Exportera",
                exporterrortitle: "Exportfel",
                exporterrorsub: [
                    "Ett fel uppstod vid försök att exportera det valda temat",
                    `Försök att spara det aktuella temat (<i>via <span class="hl">Spara Tema</span></i>) och försök att exportera igen`,
                    `Om problemet kvarstår, vänligen kopiera felet nedan och rapportera det via länkknapparna på <span class="hl">Startsidan</span>`
                ],
                synctheme: "Synkronisera tema",
                syncedwith: "Synkroniserad med",
                themeselect: "Valt tema",
                copytheme: "Kopiera tema",
                copythemesub: "Välj vilka aviseringstyper som det valda temat ska kopieras till"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Det här är vad som har hänt sedan appen startades",
            copylog: "Kopiera logg innehåll"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Är du säker?</span>
                    <span>All tidigare konfigurerade data, <u>inklusive Anpassningar</u>, återställs till standardvärden.</span>
                    <span>🛑 Denna åtgärd kan inte ångras!</span>
                </div>
            `,
            reset: "Återställ"
        }
    },
    error: {
        content: {
            subtitle: "Steam Prestationsmeddelande har stött på ett problem och behöver stängas av.",
            details: "Här är feldetaljerna:",
            sub: "Klicka på knapparna nedan för att rapportera detta problem via din föredragna plattform.",
            report: "Rapportera",
            log: "Applogg",
            exit: "Avsluta"
        }
    },    
    tooltips: {
        game: "Spelet för vilket prestationer för närvarande spåras",
        usertheme: "Välj en tidigare sparad tema",
        customise: "Anpassa prestationaviseringar",
        test: "Visa ett testmeddelande, inklusive eventuella anpassningar",
        kofi: "Donera på Ko-Fi!",
        discord: "Gå med på Discord!",
        github: "Rapportera ett problem",
        lang: "Välj det användargränssnittsspråk som används i appen",
        steamlang: `Försök att ladda översättningar som finns i Steam-applikationsfilerna för att visa prestationer på det språk som användaren valt i Steam-klienten<br><br><span class="ttdesc">Detta alternativ försöker hitta översättningar i en JSON-fil som lagras i Steam-applikationsdata. Om en översättning för den aktuella prestationen inte kan hittas, visas istället information om prestationen som hämtas från Steamworks.</span>`,
        maxsteamlangretries: `Antal försök (per 100 ms) för att hitta giltiga översättningar för den aktuella prestationen<br><br><span class="ttdesc">Steam lagrar för närvarande endast en liten mängd prestationsdata i JSON-filen som är kopplad till varje spel. Eventuella prestationer som inte finns i denna fil kommer att läggas till efter att prestationen har upplåsts.<br><br>Eftersom det kan ta tid att lägga till nya data, kommer en ökning av detta värde att öka chansen att hitta översättningsdata för den aktuella prestationen, men kan också fördröja visningen av meddelandet på skärmen med den tid som beräknas av denna inställning.<br><br>Om inga giltiga översättningsdata kan hittas för den aktuella prestationen, kommer översättningen att återgå till det språk som anges i Steamworks.</span>`,
        desktop: "Växla en genväg på skrivbordet för att köra appen",
        startwin: "Starta Steam Achievement Notifier automatiskt efter inloggning",
        startmin: "Efter starten dölj appens användargränssnittsfönster tills det öppnas från systemfältet",
        nohwa: `Inaktivera hårdvaruacceleration, vilket kan förbättra prestandan på system med begränsade resurser eller system utan dedikerad GPU<br><br><span class="ttdesc">Appen kommer att starta om efter aktivering/inaktivering av detta alternativ</span>`,
        litemode: "Inaktivera alla interaktiva användargränssnittselement och erbjuda endast begränsad appfunktionalitet via systemfältets ikon. Kan förbättra resursförbrukningen av appen",
        rarity: `Procentandelen vid vilken sällsynta prestationer kommer att utlösa notifikationer.<br><br>Varje prestation med en upplåsningsprocent över detta värde kommer att visas som en Huvudnotifikation<br><br><span class="ttdesc">Om <span class="hl">Trofyläge</span> är aktiverat kommer varje prestation med en upplåsningsprocent över detta värde istället att visas som en Silvernotifikation</span>`,
        semirarity: `Procentandelen vid vilken "Silver"-notifikationselement kommer att visas (t.ex. <span class="hl">Sällsynthetsmärken</span>, <span class="hl">Dekorationer</span> osv.).<br><br>Varje prestation med en upplåsningsprocent under (eller lika med) detta värde, och över värdet för <span class="hl">Sällsynthetsprocent</span>, kommer att visa notifikationselement konfigurerade för "Silver"-sällsyntheter.<br><br>Varje prestation med en upplåsningsprocent över detta värde kommer att visa notifikationselement konfigurerade för "Brons"-sällsyntheter<br><br><span class="ttdesc">Om <span class="hl">Trofyläge</span> är aktiverat kommer varje prestation med en upplåsningsprocent över detta värde istället att visas som en Bronsnotifikation</span>`,
        showpercent: "Visa upplåsningsprocenten för prestationen i aviseringen för de valda typerna",
        soundonly: "Inaktivera aviseringar och spela endast ljud som är inställt via anpassaren",
        extwin: "Skapa ett fönster som duplicerar alla meddelanden som för närvarande visas på skärmen. Detta fönster kan sedan läggas till som en fönsterkälla för användning i streamingsprogramvara som OBS",
        extwinframerate: "Ställ in målbilder för strömnotifikationer",
        extwinshow: `Växla synligheten för streammeddelandefönstret<br><br><span class="ttdesc">När det är fokuserat i aktivitetsfältet, håll ned <code class="ttcode">Ctrl</code>-tangenten för att visa fönstrets aktuella position</span>`,
        audiosrc: "Välj källan för (eller inaktivera) ljud som genereras av appen",
        nowtracking: "Visa en avisering som meddelar användaren att prestationer för ett körande spel spåras",
        nowtrackingscale: `Ange storleken på spårningsmeddelandet`,
        nowtrackingpos: `Ange positionen för spårningsmeddelandet`,
        shortcuts: "Utlös ett testmeddelande via en tangentbordsgenväg. Genvägar kan anpassas för varje typ av avisering",
        noiconcache: `Inaktiverar ikoncaching vid start av spel.<br><br><span class="ttdesc">Detta kan betydligt förbättra appens prestanda vid start av spel och lösa även spårningsproblem med spel som har ett stort antal prestationer. Dock kan inaktivering av ikoncaching i sällsynta fall leda till att prestationsikoner saknas i aviseringar</span>`,
        steamss: "Ta en Steam-skärmdump när en prestation låses upp",
        screenshots: "Välj typen av ytterligare media som ska skapas när en avisering visas",
        monitors: "Monitorn som kommer att fångas när skärmdumpen tas",
        hdrmode: `Ta skärmbilder med en metod som är kompatibel med skärmar som använder High Dynamic Range (HDR)`,
        ovpos: "Positionen för aviseringens överlagring i skärmdumpen",
        ovmatch: "Matcha skärmläget som är inställt i anpassaren för denna typ av avisering",
        ovpath: "Platsen där skärmdumpar som genereras av detta alternativ kommer att sparas",
        ssdelay: "Lägg till en fördröjning från när aviseringen inträffar till när skärmdumpen tas",
        sspreview: "Visa en förhandsgranskning av hur skärmdumpen kommer att se ut när den sparas",
        noanim: "Inaktivera alla fönsteranimationer och övergångseffekter i appen",
        noupdatedialog: `Förhindrar att dialogrutan <span class="hl">Uppdatering tillgänglig</span> visas automatiskt och får fokus<br><br><span class="ttdesc">Dialogrutan kan fortfarande öppnas genom att klicka på uppdateringsknappen när den är tillgänglig</span>`,
        nvda: "Aktivera kopiering av prestationinformation till urklipp när en prestation låses upp, för att läsas av skärmläsarprogramvara, som NVDA",
        tooltips: "Visa verktygstips när du håller musen över vissa användargränssnittselement",
        colorprofile: `Tvinga alla appfönster att renderas med den valda färgprofilen<br><br><span class="ttdesc">Kräver omstart av appen</span>`,
        pollrate: `Ställ in uppdateringsintervallet för prestationdata under spel<br><br><span class="ttdesc">Prestandan kan öka/minska beroende på värdet eller systemets maskinvara. Högre värden resulterar vanligtvis i lägre systembelastning, men kan orsaka fördröjningar i aviseringar</span>`,
        initdelay: `Ställ in förseningen mellan upptäckten av aktuellt <span class="hl">AppID</span> och när process-/prestations-spårning börjar<br><br><span class="ttdesc">Att öka detta värde kan förhindra scenarier där Steam inte kan starta det aktuella spelet (på grund av att applikationen initialiserar Steamworks innan spelet har startats)</span><br><br><span class="ttdesc">Alternativt kan ökning av detta värde också användas för att kringgå felaktig upptäckt av för-spelsstart-processer</span>`,
        releasedelay: `Ställ in hur länge bakgrundsprocessen Worker väntar innan den startar om efter att det aktuella spelet har frigjorts. Påverkar både automatisk processpårning och Automatiskt Frigjorda Spel<br><br><span class="ttdesc">Tillåter ett längre tidsfönster för att Steamworks ska kunna frigöras helt från appen. Att öka detta värde kan förhindra ovanligt beteende, till exempel att ett tidigare stängt spel fortfarande spåras</span>`,
        maxretries: `Ställ in det maximala antalet försök att länka en körande process till ett upptäckt AppID. Påverkar både automatisk processpårning och Automatiskt Frigjorda Spel<br><br><span class="ttdesc">Försök görs en gång per sekund. Om en körande process inte länkas till det aktuella AppID:t efter detta antal försök, returneras en ogiltig process. I sådana fall måste spelet frigöras manuellt via Systemfält > Alternativ > Frigör Spel</span>`,
        debug: "Öppna Debugpanelen, som visar detaljerad processpårningsinformation",
        userust: "Använd en alternativ Rust-baserad funktion för att kontrollera om de spårade spelprocesserna för närvarande körs på systemet. När det inte är markerat kommer standardprocesskontrollen baserad på NodeJS att användas istället.",
        notifydebug: "Skapa ett DevTools-fönster för alla aviseringar. Användbart för felsökning av aviseringar",
        workerdebug: "Skapa ett DevTools-fönster för Worker-processen. Användbart för felsökning och problemlösning av problem med spelspårning",
        usecustomfiles: "Aktiverar aviseringar för att ladda användaranpassade filer. Försiktighet rekommenderas för vanliga användare",
        showcustomfiles: "Öppna platsen för de anpassade filerna",
        log: "Öppna apploggen som visar information om processaktivitet, varningar och fel",
        reset: "Ta bort all konfigurationsdata och starta om appen",
        playback: "Pausa/återuppta animationen av förhandsgranskningen av aviseringen",
        replay: "Starta om animationen av förhandsgranskningen av aviseringen",
        preset: "Välj förinställningen för aviseringen att anpassa",
        iconanim: "Växla sällsynt ikonram och animation",
        alldetails: "Visa alla textelement i aviseringen, inklusive de som är dolda som standard för denna förinställning",
        usepercent: "Visa låsningsprocenten för prestationen, istället för XP/S-värdet",
        displaytime: "Ange antalet sekunder som aviseringen kommer att visas",
        scale: "Öka eller minska storleken på aviseringen",
        customtext: "Ange ett anpassat meddelande som ska visas i aviseringen",
        usegametitle: "Visa titeln på det aktuella spelet i aviseringen",
        customfont: "Ladda en anpassad typsnitt som ska användas i aviseringen",
        soundmode: "Välj antingen en enskild ljudfil eller en slumpmässigt vald ljudfil från en mapp som innehåller flera ljudfiler när en avisering inträffar",
        soundfile: "Välj en ljudfil som ska spelas när en avisering inträffar",
        sounddir: "Välj en mapp från vilken en ljudfil slumpmässigt kommer att väljas när en avisering inträffar",
        volume: "Ställ in uppspelningsvolymen för ljudfilen",
        preview: "Förhandsgranska den valda ljudfilen eller en slumpmässigt vald ljudfil från mappen",
        bgstyle: "Välj stilen för bakgrunden i aviseringen",
        gradientangle: "Ange vinkeln för gradienten",
        bgimg: "Ladda en bildfil som ska användas som bakgrund för aviseringen",
        bgachicon: "Använd ikonen för den upplåsta prestationen som bakgrund för notifikationen",
        bgimgbrightness: "Ställ in ljusstyrkan för bilden som används som bakgrund för aviseringen",
        brightness: "Ställ in ljusstyrkan för spelkonst som används som bakgrund för aviseringen",
        blur: "Ställ in nivån av suddighet som appliceras på bakgrunden av meddelandet",
        roundness: "Ställ in rundheten för aviseringens kanter",
        fontsize: "Ställ in storleken på teckensnittet som används i aviseringen",
        opacity: "Ställ in den totala opaciteten för aviseringen",
        bgonly: "Ställ endast in opaciteten för aviseringens bakgrund och behåll andra element med full opacitet",
        glow: "Aktivera en glödeffekt som omger meddelandet",
        glowcolor: "Ställ in färgen på glödeffekten",
        glowsize: "Ställ in storleken på glödeffekten",
        glowx: "Justera den horisontella positionen för ljuseffekten",
        glowy: "Justera den vertikala positionen för ljuseffekten",
        glowopacity: "Ställ in opaciteten för ljuseffekten",
        glowanim: "Välj en fördefinierad animation som ska tillämpas på glödeffekten",
        glowspeed: "Ställ in hastigheten på animationen som tillämpas på glödeffekten",
        glowrarity: "Ändrar färgen på glödeffekten baserat på sällsyntheten av den upplåsta prestationen",
        glowcolorbronze: "Glow-färgen som visas när upplåsningsprocenten är > $semirarity",
        glowcolorsilver: "Glow-färgen som visas när upplåsningsprocenten är < $semirarity och > $rarity",
        glowcolorgold: "Glödens färg som visas när upplåsningsprocenten är < $rarity",
        mask: "Aktivera maskering av delar av meddelandet med en anpassad bild",
        maskimg: `Ladda en bildfil som ska användas som mask<br><br><span class="ttdesc">I CSS fungerar <code class="ttcode">mask-mode: alpha</code> på ett motsatt sätt än vad som vanligtvis förväntas - områden med genomskinlighet i bildfilen kommer att förbli osynliga, medan svarta/grå områden tillåter de underliggande elementen att vara synliga</span>`,
        useoutline: "Visa en kontur runt meddelandet",
        outline: "Välj typen av kontur som ska visas runt notifikationen",
        outlinecolor: "Ställ in färgen på konturen runt notifikationen",
        outlinewidth: "Ställ in bredden på konturen runt notifikationen",
        primarycolor: "Ställ in primärfärgen för aviseringen",
        secondarycolor: "Ställ in sekundärfärgen för aviseringen",
        tertiarycolor: "Ställ in tertiärfärgen för aviseringen",
        fontcolor: "Ställ in färgen på all text som visas i aviseringen",
        fontoutline: "Lägg till en kontur till all text som visas i aviseringen",
        fontoutlinecolor: "Ställ in färgen på textens kontur",
        fontoutlinescale: "Ställ in tjockleken på textens kontur",
        fontshadow: "Lägg till en skugga till all text som visas i aviseringen",
        fontshadowcolor: "Ställ in färgen på textens skugga",
        fontshadowscale: "Ställ in tjockleken på textens skugga",
        fontshadowx: "Flyttar textskuggans position horisontellt",
        fontshadowy: "Flyttar textskuggans position vertikalt",
        iconroundness: "Ställ in rundheten för prestation/spelikonen som visas i aviseringen",
        plat: "Ladda en bildfil som ska användas som 100% ikon",
        usegameicon: "Ersätt ikonen för det upplåsta achievementet med spelets nuvarande ikon",
        gameicontype: `Välj vilken typ av bild som ska visas som spelikon`,
        usecustomimgicon: "Ersätt ikonen för det upplåsta achievementet med en anpassad bildfil",
        customimgicon: "Ladda upp en bildfil som ska användas som anpassad ikon",
        showhiddenicon: "Visa en bild som indikerar att prestationen är dold i meddelandet",
        hiddenicon: "Ladda upp en bildfil för att ersätta den dolda prestationens ikon",
        logo: "Ladda en bildfil för att ersätta logotypen",
        decoration: "Ladda en bildfil för att ersätta dekorationsikonen",
        showdecoration: "Växla synligheten för dekorationsikonen",
        replacelogo: "Ersätt logotypikonen i meddelandet med den valda dekorationen",
        pos: "Ställ in skärmläget för aviseringen",
        usecustompos: "Aktivera anpassad positionering för aviseringen",
        setcustompos: "Ställ in den anpassade positionen för aviseringen",
        copycustompos: "Tillämpa den anpassade positionen på alla andra aviseringstyper",
        resetcustompos: "Återställ aviseringens position till standardanpassad position",
        updatetheme: "Uppdatera det aktuella temat med de valda anpassningsalternativen",
        savetheme: "Spara alla konfigurerade anpassningsalternativ som ett nytt tema",
        visibilitybtn: "Växla synligheten för elementet i anpassade förhandsvisningar och testmeddelanden",
        delbtn: "Återställ elementet till standardvärdet",
        imgpath: "Platsen där meddelandebilder genererade av detta alternativ kommer att sparas",
        ssenabled: "Aktivera eller inaktivera generering av media för denna typ",
        checkforupdates: `Kontrollera om en ny appversion har släppts på GitHub. Om en uppdatering är tillgänglig kommer den automatiskt att laddas ner och installeras när den bekräftas via dialogrutan <span class="hl">Uppdatering tillgänglig</span>`,
        linkedgames: `Bypassa <span class="hl">automatisk processpårning</span> för specifika Steam-spel<br><br><span class="ttdesc">Denna alternativ bör endast användas i mycket specifika scenarier. Användare bör inte behöva använda detta alternativ under normala omständigheter!</span>`,
        exclusionlist: `Förhindra att prestationer i specifika Steam-spel spåras av appen<br><br><span class="ttdesc">Denna alternativ bör endast användas i mycket specifika scenarier. Användare bör inte behöva använda detta alternativ under normala omständigheter!</span>`,
        inclusionlist: `Förhindra att alla Steam-spel spåras av appen om de inte anges<br><br><span class="ttdesc">Detta alternativ bör endast användas i mycket specifika situationer. Användare ska normalt inte behöva använda detta alternativ!</span>`,
        ovx: "Förskjutning av meddelandet som visas i skärmdumpen horisontellt",
        ovy: "Förskjutning av meddelandet som visas i skärmdumpen vertikalt",
        importtheme: `Importera anpassningar via en användarskapad <span class="hl">temafil</span>`,
        exporttheme: `Exportera det aktuellt valda <span class="hl">temat</span> för delning<br><br><span class="ttdesc">Innan du försöker exportera, se till att det önskade <span class="hl">temat</span> är valt (via menyn <span class="hl">Välj tema</span>). Kontrollera också att anpassningar har sparats i det valda <span class="hl">temat</span> (via menyn <span class="hl">Spara tema</span>)<br><br><u>Alla anpassningar som inte har sparats i det aktuella <span class="hl">temat</span> kommer inte att exporteras!</u></span>`,
        webhooks: "Använd en Webhook-URL för att posta på en Discord-server varje gång en prestation låses upp",
        webhookmain: `Växla om prestationinformation ska skickas till en Discord-server när en $main prestation låses upp`,
        webhooksemi: `Växla om prestationinformation ska skickas till en Discord-server när en $semi prestation låses upp`,
        webhookrare: "Växla om prestationinformation ska skickas till en Discord-server när en $rare prestation låses upp",
        webhookplat: "Växla om prestationinformation ska skickas till en Discord-server när en $plat prestation låses upp",
        webhooktest: "Växla om testinformation ska skickas till en Discord-server när testnotifikationer av något slag utlöses",
        webhookurl: `Ställ in <span class="hl">Webhook-URL</span> för den önskade Discord-servern<br><br><span class="ttdesc">En <span class="hl">Webhook-URL</span> används för att posta på en Discord-server/kanal på uppdrag av en användare eller applikation. För att konfigurera en ny Webhook för en Discord-server måste användaren ha en roll på den önskade servern som tillåter skapande av Webhooks<br><br><u>En Webhook-URL är nödvändig när du använder det här alternativet</u><br><br>Se Dischords officiella dokumentation för mer information</span>`,
        webhookspoilers: `Lägg till en spoiler-tag till "Dolda" prestationer när de postas på Discord`,
        webhookappid: "Visa AppID för det aktuella spelet i sidfoten av webhook-embedden",
        unlockmsg: "Ställ in positionen för upplåsningmeddelandet/anpassad text inom $type",
        title: "Ställ in positionen för prestationstiteln inom $type",
        desc: "Ställ in positionen för prestationsbeskrivningen inom $type",
        notification: "notifikation",
        screenshot: "skärmbild",
        percentpos: "Ställ in positionen för sällsynthetsprocenten inom $type",
        sspercentpos: "Ställ in positionen för sällsynthetsprocenten inom $type",
        hiddeniconpos: "Ställ in positionen för den dolda/hemliga prestationikonen inom $type",
        sshiddeniconpos: "Ställ in positionen för den dolda/hemliga prestationikonen inom $type",
        decorationpos: "Ställ in positionen för dekorationselementet inom $type",
        ssdecorationpos: "Ställ in positionen för dekorationselementet inom $type",
        percentbadge: "Visa låsningsprocenten inuti en badge som är placerad ovanför ikonen för prestation/spel",
        sspercentbadge: "Visa låsningsprocenten inuti en badge som är placerad ovanför ikonen för prestation/spel",
        percentbadgepos: "Ställ in badgepositionen",
        sspercentbadgepos: "Ställ in badgepositionen",
        percentbadgecolor: "Ställ in bakgrundsfärgen på badge",
        sspercentbadgecolor: "Ställ in bakgrundsfärgen på badge",
        percentbadgefontcolor: "Ställ in teckenfärgen för badge",
        sspercentbadgefontcolor: "Ställ in teckenfärgen för badge",
        percentbadgefontsize: "Ställ in storleken på badge",
        sspercentbadgefontsize: "Ställ in storleken på badge",
        percentbadgeroundness: "Ställ in rundheten på badge",
        sspercentbadgeroundness: "Ställ in rundheten på badge",
        percentbadgex: "Justera positionen för badge-elementet horisontellt",
        sspercentbadgex: "Justera positionen för badge-elementet horisontellt",
        percentbadgey: "Justera positionen för badge-elementet vertikalt",
        sspercentbadgey: "Justera positionen för badge-elementet vertikalt",
        percentbadgeimg: "Visa en ikon baserad på sällsynthet som badge-element",
        sspercentbadgeimg: "Visa en ikon baserad på sällsynthet som badge-element",
        percentbadgeimgbronze: "Märkesikonen som visas när upplåsningsprocenten är > $semirarity",
        sspercentbadgeimgbronze: "Märkesikonen som visas när upplåsningsprocenten är > $semirarity",
        percentbadgeimgsilver: "Märkesikonen som visas när upplåsningsprocenten är < $semirarity och > $rarity",
        sspercentbadgeimgsilver: "Märkesikonen som visas när upplåsningsprocenten är < $semirarity och > $rarity",
        percentbadgeimggold: "Ikonen för badge som visas när upplåsningsprocenten är < $rarity",
        sspercentbadgeimggold: "Ikonen för badge som visas när upplåsningsprocenten är < $rarity",
        percentbadgeimgplat: "Märkesikonen som visas när alla prestationer har låsts upp",
        sspercentbadgeimgplat: "Märkesikonen som visas när alla prestationer har låsts upp",
        resetpbimgs: "Återställ alla badge-ikoner till standard",
        elemsmatch: `Matcha inställningarna för notifieringselement som ställts in i anpassaren för den här typen av notifiering<br><br><span class="ttdesc">Vissa notifieringsförinställningar kan inte helt matcha anpassarinställningar, på grund av skillnader mellan skärmbaserade och skärmdumpbaserade notifieringslayouter</span>`,
        themeswitch: `Automatiskt byta till vilket <span class="hl">Tema</span> som helst som sparats när ett specifikt spel upptäcks`,
        userthemesync: `Synkronisera anpassningar i det valda <span class="hl">Temat</span> till alla andra notifieringstyper`,
        showsystrayopts: `Visa alla alternativ som vanligtvis finns under <span class="hl">Systemfält</span> > <span class="hl">Alternativ</span> i <span class="hl">Inställningar</span> > <span class="hl">Övrigt</span>`,
        releaseshortcut: "Frigör det nuvarande spårade spelet med den angivna tangentbordsgenvägen",
        themeselect: "Välj ett tidigare sparat tema",
        statwin: `Visa konfigurerbara prestationstatistik för det aktuella spelet i ett externt fönster<br><br><span class="ttdesc">När den används tillsammans med alternativet <span class="hl">Översätt prestationer till Steam-språk</span> kan vissa översättningar vara otillgängliga tills den specifika prestationen är upplåst</span>`,
        statwinaot: `Ställ in prestationsstatistikfönstret till "Alltid överst"-läge, så att fönstret visas ovanför spelfönstret<br><br><span class="ttdesc">När detta alternativ är aktiverat kommer prestationsstatistikfönstret inte längre registrera användarinteraktioner, som till exempel "klick"-händelser. För att återaktivera interaktion med fönstret måste detta alternativ inaktiveras</span>`,
        statwinshortcut: "Växla prestationstatistiköverlägget med den angivna tangentbordsgenvägen",
        ssdisplay: "Visa en förhandsvisning av den fångade skärmbilden i meddelandet",
        iconscale: "Öka eller minska storleken på prestationens ikon",
        showiconborder: "Visa en bild som en ram runt prestationsikonen",
        iconborderimg: "Ladda en bildfil att använda som ram runt prestationsikonen",
        iconborderpos: "Ställ in om ikonramen ska visas framför eller bakom prestationsikonen",
        iconborderscale: "Öka eller minska storleken på ikonramen i aviseringen",
        iconborderx: "Öka eller minska ikonramens horisontella förskjutning i aviseringen",
        iconbordery: "Öka eller minska ikonramens vertikala förskjutning i aviseringen",
        iconborderrarity: "Ändrar bildramen på ikonen baserat på sällsyntheten av det upplåsta prestationen",
        iconborderimgbronze: "Ikonrambilden som visas när upplåsningsprocenten är > $semirarity",
        iconborderimgsilver: "Ikonrambilden som visas när upplåsningsprocenten är < $semirarity och > $rarity",
        iconshadowcolor: "Ställ in färgen på skuggningen runt prestationens ikon när en sällsynt prestation låses upp",
        iconanimcolor: "Ställ in färgen på animationen bakom prestationens ikon när en sällsynt prestation låses upp",
        logoscale: "Öka eller minska storleken på logoelementet inom meddelandet",
        decorationscale: "Öka eller minska storleken på dekorationselementet inom meddelandet",
        usecustomfontsizes: `Öka eller minska storleken på individuella textelement inom meddelandet<br><br><span class="ttdesc">Bevarandet av det ursprungliga meddelandeformatet kan inte garanteras när individuella teckenstorleksvärden ändras</span>`,
        unlockmsgfontsize: "Öka eller minska storleken på textmeddelandet för upplåsning",
        titlefontsize: "Öka eller minska storleken på texten för prestationstiteln",
        descfontsize: "Öka eller minska storleken på texten för prestationsbeskrivningen",
        webhookembedcolormain: "Ange färgen som används i webhook-embed när en $main prestation låses upp",
        webhookembedcolorsemi: "Ange färgen som används i webhook-embed när en $semi prestation låses upp",
        webhookembedcolorrare: "Ange färgen som används i webhook-embed när en $rare prestation låses upp",
        webhookembedcolorplat: "Ange färgen som används i webhook-embed när en $plat prestation låses upp",
        raemus: "Visa meddelanden när spel detekteras i stödda emulatorer",
        rauser: "Ställ in användarnamnet för Retro Achievements för att spåra prestationer",
        rakey: `Ställ in Web API-nyckeln som ska användas för autentisering med Retro Achievements API<br><br><span class="ttdesc">En Web API-nyckel kan kopieras eller regenereras genom att logga in på Retro Achievements-webbplatsen och navigera till <span class="hl">Inställningar > Nycklar > Web API Key</span><br><br>🔒 Den angivna nyckeln kommer att krypteras innan den lagras lokalt på systemet (om det aktuella operativsystemet stöder kryptering)</span>`,
        rapercenttype: "Ställ in om du vill visa Hardcore eller Softcore prestationers upplåsningsprocent i meddelandena",
        retroarch: `Visa Retro Achievements-notifikationer för spel som emuleras via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Inställningar > Loggning</span> måste konfigureras med följande inställningar:<br><br><ul><li><span class="hllb">Loggningsverbositet</span>: <span class="hlgreen">PÅ</span></li><li><span class="hllb">Frontend Loggningsnivå</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Logga till fil</span>: <span class="hlgreen">PÅ</span></li><li><span class="hllb">Tidsstämpel för loggfiler</span>: <span class="hlred">AV</span></li></ul></span>`,
        dolphin: `Visa Retro Achievements-notifikationer för spel som emuleras via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Visa > Visa loggkonfiguration</span> måste konfigureras med följande inställningar:<br><br><ul><li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Logger Outputs</span> > <span class="hlgreen">Skriv till fil</span></li><li><span class="hllb">Loggtyper</span> > <span class="hlgreen">Prestationer (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Visa Retro Achievements-notifikationer för spel som emuleras via PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Verktyg > Aktivera filinspelning</span> måste vara aktiverat</span>`,
        duckstation: `Visa Retro Achievements-notifikationer för spel emulerade via Duckstation<br><br><span class="ttdesc">❗ Filen <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> måste laddas ner och flyttas till <span class="hl">Duckstations installationsmapp</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Inställningar > Prestationer > RAIntegration (Endast för utvecklare)</span> måste vara aktiverat</span>`,
        ppsspp: `Visa Retro Achievements-notiser för spel som emuleras via PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> måste vara aktiverat och konfigurerat med följande inställningar:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Ange sökvägen till RetroArchs <span class="hl">"retroarch.log"</span> loggfil<br><br><span class="ttdesc">Med standardinstallationen lagras <span class="hl">"retroarch.log"</span> i <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Ange sökvägen till Dolphins <span class="hl">"dolphin.log"</span> loggfil<br><br><span class="ttdesc">Med standardinstallationen lagras <span class="hl">"dolphin.log"</span> i en av följande platser:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Ange sökvägen till PCSX2s <span class="hl">"emulog.txt"</span> loggfil<br><br><span class="ttdesc">Med standardinstallationen lagras <span class="hl">"emulog.txt"</span> i <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Ange sökvägen till Duckstations <span class="hl">"RALog.txt"</span> loggfil<br><br><span class="ttdesc">Med standardinstallationsinställningarna lagras <span class="hl">"RALog.txt"</span> i <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Ange sökvägen till PPSSPP:s loggfil <span class="hl">"log.txt"</span><br><br><span class="ttdesc">Med standardinstallationsinställningar sparas <span class="hl">"log.txt"</span> i <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Ange färg individuellt för textelement i aviseringen",
        unlockmsgfontcolor: "Ange färgen för det första textelementet",
        titlefontcolor: "Ange färgen för det andra textelementet",
        descfontcolor: "Ange färgen för det tredje textelementet",
        exportachdata: `Exportera prestationsdata till en JSON-fil när en prestation låses upp<br><br><span class="ttdesc">När aktiverat kommer <span class="ttcode">achdata.json</span> att exporteras till:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Justera det vertikala avståndet mellan textelementen i notifikationen",
        ssmode: `Ställ in om hela skärmen eller det aktuella spelfönstret<span style="color: red;">*</span> ska fångas i skärmbilder<br><br><span class="ttdesc">Om den aktuella spelets <span class="hl">körbara fil</span> inte kan hittas (<i>antingen via <span class="hl">automatisk processpårning</span> eller när det läggs till som en post i <span class="hl">Automatiskt Frigjorda Spel</span></i>), kommer detta alternativ som standard att använda läget "Skärm"</span>`,
        replaynotify: "Repetera den senaste prestationen",
        replaynotifyshortcut: "Repetera den senaste prestationen med hjälp av den angivna snabbknappen",
        replaynotifyempty: `<br><br><span class="ttdesc">Kön för upprepning är tom. Lås upp en prestation för att upprepa en notifikation</span>`,
        customtrigger: "Aktiverar en tangent/kommando som simuleras vid upplåsning av ett achievement. Kan användas för att aktivera tangentbordsgenvägar registrerade i externa applikationer",
        customtriggershortcut: `Aktiverar den angivna tangenten/kommandot när ett achievement låses upp<br><br><span class="ttdesc">Stöder mellan 1 och 3 tangenter per genväg. För knapptryckningar/kommandon med färre än 3 tangenter, tryck på önskade tangenter och vänta tills timern (5 s) går ut</span>`,
        customtriggerdelay: "Fördröj den angivna anpassade tangentkombinationen",
        customtriggerusedisplaytime: `Fördröj den angivna anpassade tangentkombinationen baserat på visningstiden för den aktuella notifikationstypen`,
        trophymode: "Ersätt Huvud/Sällsynt/100%-notifikationstyper med Brons/Silver/Guld/Platina",
        lognum: `Antalet tidigare loggfiler som lagras innan de tas bort. En ny loggfil skapas vid varje start av appen<br><br><span class="ttdesc">När detta värde är satt till 0 tas alla tidigare loggfiler bort vid avslut</span>`, 
        detectedappid: `Använd det <span class="hl">AppID</span> som tillhör det spel som för närvarande har upptäckts`,
        listmode: `Ställ in beteendet för <span class="hl">Exklusionslista</span>/<span class="hl">Inklusionslista</span><br><br><span class="ttdesc">• <span class="hl">Exkludering</span>: Ignorera endast de spel som anges i listan<br>• <span class="hl">Inkludering</span>: Ignorera alla spel förutom de som anges i listan</span>`,
        notifymax: `Ställ in det maximala antalet aviseringar som kan visas samtidigt på skärmen<br><br><span class="ttdesc">Att öka antalet samtidiga aviseringar kräver mer resurser och kan påverka prestandan</span>`,
        notifyspace: "Ställ in avståndet mellan samtidiga aviseringar på skärmen",
        audiocooldown: `Ställ in hur lång tid efterföljande aviseringar väntar innan nytt ljud kan spelas upp<br><br><span class="ttdesc">Ljudet påverkas inte om Maximalt antal aviseringar är satt till 1</span>`,
        rauseemudir: "Spara skärmbilder/aviseringsbilder upplåsta via RetroAchievements i en undermapp för den aktuella emulatorn inom den angivna katalogen för skärmbilder/bilder",
        ssext: "Ange filformat för skärmbilder som genereras via alternativet Screenshot with Notification Overlay",
        notify1line: `Begränsa antalet textrader som visas i alla aviseringar till 1<br><br><span class="ttdesc">Textsträngar som inte får plats på en enda rad kommer att trunkeras med "..."</span>`,
        copytheme: "Kopiera det valda temat till en annan aviseringstyp",
        ssaddtosteam: "Lägg automatiskt till genererat media i det aktuella spelets inspelningar och skärmbilder i Steam",
        appdatadir: "Öppna platsen för appens AppData-mapp",
        backup: "Säkerhetskopiera innehållet i appens AppData-mapp till en vald plats, vilket fungerar som en återställningspunkt för appens nuvarande tillstånd",
        restore: "Återställ innehållet i appens AppData-mapp från en tidigare säkerhetskopia",
        gametimerwin: "Visa en timer på skärmen som visar hur lång tid det tagit att låsa upp alla prestationer för det aktuella spelet",
        gametimerwinshortcut: "Växla Timern för spelavslut med den angivna tangentbordsgenvägen",
        gametimerwinaot: `Ställ in Timern för spelavslut till läget "Alltid överst", så att fönstret visas ovanför spelfönstret<br><br><span class="ttdesc">När detta är aktiverat kommer Timern för spelavslut inte längre att registrera användarinteraktioner, såsom "click"-händelser. För att återaktivera interaktion med fönstret måste detta alternativ inaktiveras</span>`,
        resetgametimer: "Återställ Timern för spelavslut för det aktuella spelet",
        noshortcuts: `Inaktiverar alla tangentbordsgenvägar i appen<br><br><span class="ttdesc">När detta är aktiverat kommer <u>alla genvägar i appen inte längre att fungera</u>. Alla alternativ relaterade till tangentbordsgenvägar kommer också att döljas</span>`,
        extwinnotify: "Växla synlighet för alla skärmnotifikationer vid användning av Stream Notifications",
        usesanwatcher: `Aktivera SAN:s nya övervakare för spelprocesser<br><br><span class="ttdesc">Skillnaderna mellan den nya SANWatcher och den gamla metoden för automatisk processövervakning är följande:<br><br><div class="wrapper sanwatcher"><span class="hl">PÅ</span><ul><li>Övervakar aktivt start- och avslutningshändelser för alla processer som finns i spelets installationskatalog</li><li>Kräver inte att spelets körbara fil är känd för att frigöra det aktuella spelet</li><li>Beteendet hos startprogram före spelets start kan variera, så full kompatibilitet med alla Steam-spel kan inte garanteras</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">AV</span><ul><li>Söker igenom spelets installationskatalog efter körbara filer som är igång efter att spelet har startats</li><li>Kräver att spelets körbara fil är känd för att frigöra det aktuella spelet</li><li>Om spelprocessen inte kan fastställas automatiskt måste användaren manuellt lägga till en ny post i <span class="hl">Automatiskt Frigjorda Spel</span> för att spel ska frigöras automatiskt</li></ul></div>`,
        releasewaittime: `Ange hur länge SANWatcher ska vänta på att nya spelprocesser startas innan det aktuella spelet släpps<br><br><span class="ttdesc">Om det aktuella spelet till exempel startar ett förstartsfönster/en konfigurationsruta innan själva spelet startas, avgör denna inställning hur många sekunder SANWatcher ska vänta på att det faktiska spelfönstret ska startas efter att förstartsfönstret/konfigurationsrutan har stängts<br><br>Om en ny aktiv spelprocess upptäcks inom denna väntetid kommer frigöringen att avbrytas och den nyaktiva processen kommer i stället att spåras<br><br>💡 Spelnamnet kommer att <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">blinka</span> i rutan <span class="hl">Spelvisning</span> medan det aktuella spelet väntar på att släppas</span>`
    },
    update: {
        updateavailable: "Uppdatering tillgänglig",
        sub: [
            `<span id="newversion"></span>`,
            "En ny uppdatering av Steam Achievement Notifier är tillgänglig!",
            `Fullständiga versionsanteckningar finns tillgängliga på <span id="discordreleasenotes"></span> och <span id="githubreleasenotes"></span>`
        ],
        update: "Uppdatera"
    },
    linkgame: {
        content: {
            exepath: "Sökväg till Körbar Fil",
            managesub: [
                `Om Steam fortfarande visar ett spel som <i>Spelar</i> efter att spelfönstret har stängts, försök att lägga till en ny post i <span class="hl">Automatiskt Frigjorda Spel</span>`,
                `Lägg till ett specifikt spels <span class="hl">AppID</span> tillsammans med dess förväntade <span class="hl">körbara spelfil</span>, eller <span class="hl">ta bort</span> en befintlig post`,
                `Nya poster kan också läggas till genom att <i>högerklicka</i> på <span class="hl">Systemfältsikonen</span> > <span class="hl">Automatisk Frigöring av Spel</span> när ett spel har upptäckts`,
                `<span class="hl help" id="appidhelp"><u>Hur hittar jag AppID för ett Steam-spel?</u></span>`
            ],
            linknew: "Ny Post",
            linknewsub: [
                `Lägg till ett nytt spels <span class="hl">AppID</span> tillsammans med dess förväntade <span class="hl">körbara spelfil</span>`,
                `När de har lagts till kan poster <span class="hl">tas bort</span> via den tidigare menyn <span class="hl">Automatiskt Frigjorda Spel</span>`
            ],
            linkedit: "Redigera Post",
            linkeditsub: [
                `Redigera ett befintligt spels <span class="hl">AppID</span> tillsammans med dess förväntade <span class="hl">körbara spelfil</span>`,
                `När de har lagts till kan poster <span class="hl">tas bort</span> via den tidigare menyn <span class="hl">Automatiskt Frigjorda Spel</span>`
            ],
            link: "Lägg till"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Lägg till <span class="hl">AppID</span> för valfritt Steam-spel i <span class="hl">Undantagslistan</span>`,
                `Steam Achievement Notifier kommer inte att försöka spåra prestandadata för något spel vars <span class="hl">AppID</span> lagts till <span class="hl">Undantagslistan</span>`,
                `<span class="hl" id="appidhelp"><u>Hur hittar jag AppID för ett Steam-spel?</u></span>`
            ],
            exclusionnew: "Ny uteslutning",
            exclusionnewsub: [
                `Ange <span class="hl">AppID</span> för att lägga till i <span class="hl">Undantagslistan</span>`
            ],
            exclusionedit: "Redigera undantag",
            exclusioneditsub: [
                `Redigera den befintliga <span class="hl">AppID</span> i <span class="hl">undantagslistan</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Lägg till ett Steam-spels <span class="hl">AppID</span> i <span class="hl">Inklusionslistan</span>`,
                `Steam Achievement Notifier försöker endast spåra prestationsdata för spel vars <span class="hl">AppID</span> har lagts till i <span class="hl">Inklusionslistan</span>`,
                `<span class="hl help" id="appidhelp"><u>Hur hittar jag ett Steam-spels AppID?</u></span>`
            ],
            inclusionnew: "Ny inkludering",
            inclusionnewsub: [
                `Ange <span class="hl">AppID</span> som ska läggas till i <span class="hl">Inklusionslistan</span>`
            ],
            inclusionedit: "Redigera inkludering",
            inclusioneditsub: [
                `Redigera det befintliga <span class="hl">AppID</span> i <span class="hl">Inklusionslistan</span>`
            ]
        }
    },
    notificationelems: {
        title: "Notifikationselement",
        content: {
            unlockmsg: "Upplåsningmeddelande",
            title: "Prestationsrubrik",
            desc: "Prestationsbeskrivning",
            hiddeniconpos: "Dold ikon",
            sshiddeniconpos: "Dold ikon",
            decorationpos: "Dekoration",
            ssdecorationpos: "Dekoration",
            percentpos: "Sällsynthetsprocent",
            sspercentpos: "Sällsynthetsprocent",
            percentbadge: "Procentbadge",
            sspercentbadge: "Procentbadge",
            percentbadgepos: "Badgeposition",
            sspercentbadgepos: "Badgeposition",
            percentbadgecolor: "Badgefärg",
            sspercentbadgecolor: "Badgefärg",
            percentbadgefontcolor: "Badge Teckenfärg",
            sspercentbadgefontcolor: "Badge Teckenfärg",
            percentbadgefontsize: "Badge storlek",
            sspercentbadgefontsize: "Badge storlek",
            percentbadgeroundness: "Badge rundhet",
            sspercentbadgeroundness: "Badge rundhet",
            percentbadgex: "Horisontell förskjutning",
            sspercentbadgex: "Horisontell förskjutning",
            percentbadgey: "Vertikal förskjutning",
            sspercentbadgey: "Vertikal förskjutning",
            percentbadgeimg: "Använd ikon",
            sspercentbadgeimg: "Använd ikon",
            percentbadgeimgbronze: "Sällsynthet: > $semirarity",
            sspercentbadgeimgbronze: "Sällsynthet: > $semirarity",
            percentbadgeimgsilver: "Sällsynthet: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Sällsynthet: < $semirarity & > $rarity",
            percentbadgeimggold: "Sällsynthet: < $rarity",
            sspercentbadgeimggold: "Sällsynthet: < $rarity",
            resetpbimgs: "Återställ badge-ikoner",
            elemsmatch: "Matcha anpassarinställningar",
            ssdisplay: "Skärmbildsförhandsvisning"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Lägg till vilket spels <span class="hl">AppID</span> som helst för att automatiskt byta <span class="hl">Teman</span> när det upptäcks`,
                `Vilket sparat <span class="hl">Tema</span> som helst kan väljas för varje notifieringstyp, tillsammans med den önskade monitorn som ska användas som <span class="hl">Skärmdumpkälla</span>`,
                `<span class="hl" id="appidhelp"><u>Hur hittar jag ett Steam-spels AppID?</u></span>`
            ],
            themeswitchnew: "Nytt automatiskt byte",
            themeswitchnewsub: [
                `Ange spelets <span class="hl">AppID</span>, tillsammans med den önskade monitorn som ska användas som <span class="hl">Skärmdumpkälla</span>`,
                `Välj vilket <span class="hl">Tema</span> som ska bytas till för varje notifieringstyp när detta spels <span class="hl">AppID</span> upptäcks`
            ],
            themeswitchedit: "Redigera automatisk växling",
            themeswitcheditsub: [
                `Redigera den önskade skärmen som ska användas som <span class="hl">källan för skärmbilder</span> för detta spels <span class="hl">AppID</span>`,
                `Ändra vilket <span class="hl">tema</span> som ska växlas till för varje notifikationstyp när detta spels <span class="hl">AppID</span> upptäcks`
            ],
            themes: "Teman",
            src: "Skärmdumpkälla",
            themedeleted: "Tema raderat"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Det verkar som att du försöker aktivera alternativet <span class="hl">${opt}</span>, men detta alternativ kan inte aktiveras utan att först installera paketet <code class="dialogcode">${dep}</code>`,
    `Kör <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> för att installera detta beroende`
]