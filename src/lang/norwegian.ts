export const translations = {
    global: {
        main: "Hoved",
        semi: "Semi",
        rare: "Sjelden",
        plat: "100%",
        trophymain: "Bronse",
        trophysemi: "Sølv",
        trophyrare: "Gull",
        trophyplat: "Platina",
        test: "Testvarsler",
        topleft: "Øverst til venstre",
        topcenter: "Øverst i midten",
        topright: "Øverst til høyre",
        bottomleft: "Nederst til venstre",
        bottomcenter: "Nederst i midten",
        bottomright: "Nederst til høyre",
        ok: "OK",
        preview: "Forhåndsvisning",
        save: "Lagre",
        back: "Tilbake",
        edit: "Rediger",
        lockedby: "Låst av $lock",
        settings: "Innstillinger",
        appversion: "Appversjon",
        image: "Bilde",
        audio: "Lyd",
        folder: "Mappe",
        font: "Skrift",
        select: "Velg",
        gametitle: "Spilltittel",
        congrats: "Gratulerer!",
        achievementunlocked: "Oppnåelse låst opp",
        gamecomplete: "100% Fullført",
        achievementdesc: "Klikket på knappen for å vise testvarsel",
        gamecompletedesc: "Du har låst opp alle prestasjonene!",
        defaultcustomfont: "Standard (Ingen skrift valgt)",
        defaultsoundfile: "Standard (Ingen fil valgt)",
        defaultsounddir: "Standard (Ingen mappe valgt)",
        nowtracking: "Sporer nå prestasjoner for:",
        nopreview: "Forhåndsvisning er ikke tilgjengelig for det naturlige operativsystemet",
        options: "Alternativer",
        resetwindow: "Tilbakestill Vindu",
        show: "Vis",
        exit: "Avslutt",
        donotshowagain: "Ikke vis denne dialogen igjen",
        releasegame: "Frigi Spill",
        releasegamesub: [
            `Restart bakgrunnsprosessen til Worker og frigi det nåværende spillet fra å bli sporet`,
            `Prøv denne alternativet hvis du nylig har lukket et spill, men Steam viser det fortsatt som kjører, eller hvis Steam Achievement Notifier fortsatt viser at det sporer et spill som allerede har blitt lukket`
        ],
        noupdateavailable: "Ingen oppdateringer tilgjengelig",
        latestversion: "Siste versjon er installert",
        missingdeps: "Manglende avhengighet",
        restartapp: "Start appen på nytt",
        restartappsub: [
            `Hvis ting ikke fungerer som de skal, bruk dette alternativet for å lukke og åpne appen på nytt`,
            `Hvis problemet vedvarer etter at appen er startet på nytt, vurder å rapportere det ved å bruke de innebygde lenkene på startskjermen`
        ],
        suspend: "Suspendere",
        resume: "Fortsette",
        new: "Ny...",
        nodata: "Ingen data",
        findappid: "Finn AppID",
        findappidsub: [
            `Hvert Steam-spill har et unikt nummer knyttet til det - kalt en <span class="hl">AppID</span>. Du kan finne AppID-en til ethvert Steam-spill ved å sjekke en av følgende:`,
            `I <span class="hl">Steam-klienten</span>, høyreklikk på et spill i <span class="hl">Biblioteket</span> ditt og velg <i>Egenskaper</i> > <i>Oppdateringer</i> - AppID-en vil bli oppført her`,
            `URL-en til spillets <span class="hl">butikkside</span> - det vil være nummeret som er oppført etter <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Nettsteder som <span class="hl">SteamDB</span> - seksjonen <span class="hl">App Info</span> vil liste opp AppID-en for hvert spill`
        ],
        noexe: "Spillets EXE-fil ble ikke funnet!",
        noexesub: "Klikk her for mer informasjon",
        noexedialogsub: [
            `Steam Achievement Notifier klarte ikke å finne spillets kjørbare fil automatisk. Plasseringen av spillets kjørbare fil er nødvendig for å kunne "frigi" spillet etter at det er lukket`,
            `For å frigi spillet manuelt etter at det er lukket, <i>høyreklikk</i> på <span class="hl">systemstatusikonet</span> > <span class="hl">Alternativer</span> > <span class="hl">Frigi spill</span>, eller bruk <span class="hl">Snarvei for å frigi spill</span>`,
            `Alternativt kan du klikke på <span class="hl">Legg til</span>-knappen nedenfor for å legge til den kjørbare filen som er knyttet til et hvilket som helst fokusert vindu i <span class="hl">Innstillinger</span> > <span class="hl">Spill</span> > <span class="hl">Spill med automatisk frigivelse</span>`,
        ],
        autorelease: "Automatisk frigivelse av spill",
        autoreleasesub: [
            `Hvis Steam fortsatt viser et spill som <i>Spiller</i> etter at spillvinduet er lukket, kan du prøve å legge til en ny oppføring i <span class="hl">Spill med automatisk frigivelse</span>`,
            `For å gjøre dette for det gjeldende spillet, klikk på <span class="hl">Legg til</span>-knappen nedenfor for å legge til den kjørbare filen som er knyttet til et hvilket som helst fokusert vindu i <span class="hl">Innstillinger</span> > <span class="hl">Spill</span> > <span class="hl">Spill med automatisk frigivelse</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Hva skjer når jeg klikker på Legg til-knappen?</u></span>`,
        linkgamehelp: "Legg til oppføring via fokus",
        linkgamehelpsub: [
            `Når du klikker på <span class="hl">Legg til</span>-knappen, legges det automatisk til en ny oppføring i <span class="hl">Innstillinger</span> > <span class="hl">Spill</span> > <span class="hl">Spill med automatisk frigivelse</span>, ved å bruke informasjon fra det for øyeblikket fokuserte vinduet.`,
            `Etter at du har klikket på <span class="hl">Legg til</span>-knappen, starter en 5-sekunders timer`,
            `Før timeren er ferdig, sett fokus på spillvinduet`,
            `Når timeren er ferdig, legges en ny oppføring for gjeldende <span class="hl">AppID</span> til i <span class="hl">Innstillinger</span> > <span class="hl">Spill</span> > <span class="hl">Spill med automatisk frigivelse</span>, ved å bruke den kjørbare filen som er knyttet til det fokuserte vinduet`,
            `Nye forsøk vil overskrive eksisterende oppføringer, eller oppføringen kan fjernes via <span class="hl">Innstillinger</span> > <span class="hl">Spill</span> > <span class="hl">Spill med automatisk frigivelse</span> ved å klikke på <span id="linkhelpunlink"></span>-knappen`
        ],
        addlinkfailed: "Kunne ikke legge til vindu",
        addlinkfailedsub: `Klikk på <span class="hl">Legg til</span>-knappen for å prøve igjen`,
        webhookunlockmsg: "$user har låst opp en prestasjon",
        webhookunlockmsgplat: "$user låste opp alle prestasjoner",
        webhookingame: "i $gamename",
        notconnected: "Ikke tilkoblet",
        raloghelp: "Spillet mitt blir ikke oppdaget",
        raenablelog: `Emulatorloggfiler`,
        raenablelogsub: [
            `For å få tilgang til interne spillhendelser (som nåværende spillstatus, informasjon om oppnåelse av prestasjoner osv.), må logging til en ekstern <span class="hl">loggfil</span> <u>aktiveres</u> i de valgte emulatorene.<br><br>Alle valgte emulatorer <u>må bruke denne <span class="hl">loggfilen</span></u> som verdien for <span class="hl">Loggfilbane</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Innstillinger > Logging</span> må konfigureres med følgende innstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Logging Detaljnivå</span>: <span class="hlgreen">PÅ</span></li>
                        <li><span class="hllb">Frontend Logging Nivå</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Logg til Fil</span>: <span class="hlgreen">PÅ</span></li>
                        <li><span class="hllb">Tidsstempel Logg Filer</span>: <span class="hlred">AV</span></li>
                    </ul>
                    <br>
                    Ved standard installasjonsinnstillinger, vil <span class="hl">"retroarch.log"</span> bli lagret i:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Visning > Vis Loggkonfigurasjon</span> må konfigureres med følgende innstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Detaljnivå</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Logger Utganger</span> > <span class="hlgreen">Skriv til Fil</span></li>
                        <li><span class="hllb">Loggtyper</span> > <span class="hlgreen">Prestasjoner (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Ved standard installasjonsinnstillinger, vil <span class="hl">"dolphin.log"</span> bli lagret på en av følgende steder:
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
                    <span class="hl">PCSX2 > Verktøy > Aktiver fillogging</span> må være aktivert
                    <br>
                    <br>
                    Med standard installasjonsinnstillinger, lagres <span class="hl">"emulog.txt"</span> i:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> må <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>lastes ned</u></span> og flyttes til <span class="hl">Duckstation sin installasjonsmappe</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Innstillinger > Prestasjoner > RAIntegration (Kun utviklere)</span> må være aktivert
                    <br>
                    <br>
                    Ved bruk av standard installasjonsinnstillinger, vil <span class="hl">"RALog.txt"</span> bli lagret på:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Innstillinger > Utviklerverktøy > Generelt > Logg til fil</span> må være aktivert og konfigurert med følgende innstillinger:
                    <br>
                    <ul>
                        <li><span class="hllb">Prestasjoner</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Med standard installasjonsinnstillinger lagres <span class="hl">"log.txt"</span> i:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Ikke-støttet Beta",
        betaunsupportedsub: [
            "En ny versjon av Steam Achievement Notifier har blitt utgitt!",
            `<u>Denne Beta-versjonen er ikke lenger støttet</u>. Vennligst last ned og installer den nyeste offisielle versjonen via Github ved å bruke knappen <span class="hl">Releases</span> nedenfor.`,
            "Takk for at du testet! 💜"
        ],
        betaghreleases: "Utgivelser",
        createnewpreset: "Lag Nytt Forhåndsinnstilt Valg",
        createnewpresetplaceholder: "Forhåndsinnstilling Navn",
        createnewpreseterror: "Kunne ikke lage nytt forhåndsinnstilt valg. Vennligst sjekk App-loggen for detaljer.",
        createnewpresetlogo: "Logo",
        createnewpresetdecoration: "Dekorasjon",
        none: "Ingen",
        fixed: "Fast",
        dynamic: "Dynamisk"
    },
    app: {
        content: {
            game: "Ingen spill oppdaget",
            customise: "Tilpass",
            test: "Vis testvarsel"
        }
    },
    settings: {
        language: {
            title: "Språk",
            content: {
                steamlang: "Oversett prestasjoner til Steam-språk",
                maxsteamlangretries: "Maksimalt antall oversettelsesforsøk"
            }
        },
        os: {
            title: "Operativsystem",
            content: {
                desktop: "Opprett skrivebordsgenväg",
                startwin: "Start ved pålogging",
                startmin: "Start minimert",
                nohwa: "Deaktiver maskinvareakselerasjon",
                litemode: "Lett modus"
            }
        },
        notifications: {
            title: "Varsler",
            content: {
                rarity: "Sjeldenhetsprosent",
                semirarity: "Sølvprosent",
                rareonly: "Bare sjeldne",
                all: "Alle",
                off: "Av",
                showpercent: "Vis prosent",
                soundonly: "Bare lyd",
                nowtracking: "Vis sporingsvarsel",
                nowtrackingscale: "Sporingsskala",
                nowtrackingpos: "Sporingsposisjon",
                shortcuts: "Varsel snarveier",
                noiconcache: "Deaktiver ikonbuffer",
                webhooks: "Post til Discord-server",
                webhooktypes: "Webhook typer",
                webhookurl: `Webhook URL`,
                webhookcaution: `Ved å aktivere dette alternativet og oppgi en gyldig Discord Webhook-lenke, samtykker du i å forstå at <u>all prestasjons- og spillinformasjon for den nåværende Steam-brukeren</u> vil bli postet til den angitte Discord-serveren via den oppgitte Webhook-lenken.<br><br>Hvis du ikke ønsker at Steam Achievement Notifier skal poste denne informasjonen på dine vegne, vennligst deaktiver dette alternativet.`,
                webhooklaststatus: "Siste status",
                webhookspoilers: `Legg til spoiler-merke`,
                webhookappid: `Vis AppID`,
                replaynotify: "Gjenta varsling",
                replaynotifyshortcut: "Gjenta snarveien",
                customtrigger: "Egendefinert Utløser",
                customtriggershortcut: "Utløser hurtigtast",
                customtriggerdelay: "Utløser forsinkelse",
                customtriggerusedisplaytime: "Bruk visningstid",
                trophymode: "Trofémodus",
                notifymax: "Maksimalt antall varsler", 
                notifyspace: "Avstand mellom varsler",
                notify1line: "Begrens tekst til 1 linje"
            }
        },
        games: {
            title: "Spill",
            content: {
                linkedgames: "Spill med automatisk frigivelse",
                themeswitch: "Automatisk bytte av temaer",
                exclusionlist: "Unntaksliste",
                inclusionlist: "Inkluderingsliste",
                listmode: "Listemodus",
                exclusion: "Utelukkelse",
                inclusion: "Inkludering"
            }
        },
        media: {
            title: "Medier",
            content: {
                steamss: "Ta Steam skjermbilde",
                screenshots: "Ekstra medier",
                off: "Av",
                ssonly: "Kun skjermbilde",
                overlay: "Skjermbilde med varsel overlay",
                monitors: "Skjermbilde kilde",
                hdrmode: "HDR-modus",
                ovpos: "Overlay posisjon",
                ovmatch: "Match tilpasser posisjon",
                ovx: "Horisontal forskyvning",
                ovy: "Vertikal forskyvning",                
                ovpath: "Skjermbilde sti",
                ssdelay: "Skjermbilde forsinkelse",
                notifyimg: "Varslingsbilde",
                imgpath: "Bildesti",
                ssenabled: "Aktiver",
                ssmode: "Skjermbilde-modus",
                screen: "Skjerm",
                window: "Vindu",
                rauseemudir: "Lagre i emulatorens undermappe",
                ssext: "Skjermbildeformat",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Legg til i Steam"
            }
        },
        streaming: {
            title: "Strømming",
            content: {
                extwin: "Strømvarsler",
                extwinframerate: "Bilderate",
                extwinshow: "Vis vindu",
                audiosrc: "Lyd kilde",
                notify: "Varsel",
                app: "Applikasjon",
                off: "Dempet",
                statwin: "Prestasjonstatistikkvindu",
                statwinaot: "Alltid på toppen",
                noachievements: "Ingen prestasjoner å vise",
                startgame: "Start et spill for å vise prestasjoner!",
                max: "Maks",
                custom: "Egendefinert...",
                statwinshortcut: "Snarvei for overlegg",
            }
        },
        accessibility: {
            title: "Tilgjengelighet",
            content: {
                noanim: "Deaktiver App-vindu-animasjoner",
                noupdatedialog: "Deaktiver oppdateringsdialog",
                nvda: "Aktiver NVDA-støtte",
                tooltips: "Vis verktøytips",
                showsystrayopts: "Vis systemstatusalternativer",
                releaseshortcut: "Frigjør spill hurtigtast"
            }
        },
        advanced: {
            title: "Avansert",
            content: {
                pollrate: "Avstemningsfrekvens",
                initdelay: "Sporing forsinkelse",
                releasedelay: "Utgivelsesforsinkelse",
                maxretries: "Maksimalt antall forsøk på prosessering",
                debug: "Feilsøkingspanel",
                userust: "Alternativ prosessbehandlingmodus",
                notifydebug: "Vis feilsøkingsvarsler",
                exportachdata: "Eksporter prestasjonsdata",
                lognum: "Tidligere loggfiler", 
                audiocooldown: "Lydnedkjøling",
                usecustomfiles: "Bruk egendefinerte app-filer",
                showcustomfiles: "Vis egendefinerte app-filer"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatorer",
                rauser: "Brukernavn",
                rakey: "API-nøkkel",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Loggfilbane",
                rapercenttype: "Prosenttype",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Skriv inn loggfilbane",
                logfile: "Loggfil",
                status: "Status",
                game: "Spill",
                lastachievement: "Siste prestasjons-ID",
                wait: "Venter på emulator",
                idle: "Venter på spillhendelse",
                start: "Starter spill",
                stop: "Stopper spill",
                achievement: "Oppnåelse låst opp"
            }
        },
        misc: {
            title: "Diverse",
            content: {
                colorprofile: "Fargeprofil",
                checkforupdates: "Sjekk etter oppdateringer",
                log: "Applikasjonslogg",
                reset: "Tilbakestill app"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Forhåndsinnstilt",
            content: {
                preset: "Varslingsforhåndsinnstilt",
                iconanim: "Sjelden Ikonanimasjon",
                alldetails: "Vis Alle Detaljer",
                usepercent: "Bruk prosentandel",
                displaytime: "Visningstid",
                scale: "Skala",
                customtext: "Tilpasset Tekst",
                usegametitle: "Bruk Spilltittel",
                customfont: "Tilpasset Font"
            }
        },
        sound: {
            title: "Lyd",
            content: {
                soundmode: "Lydmodus",
                file: "Fil",
                folder: "Tilfeldig",
                soundfile: "Lyd Fil",
                sounddir: "Lyd Mappe",
                volume: "Volum"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Bakgrunnsstil",
                solid: "Solid",
                gradient: "Gradient",
                img: "Bilde",
                gameart: "Spill Kunst",
                gradientangle: "Gradient Vinkel",
                bgimg: "Bakgrunnsbilde",
                bgachicon: "Bruk Prestasjonsikon",
                bgimgbrightness: "Lysstyrke",
                brightness: "Lysstyrke",
                blur: "Uskarphet",
                roundness: "Avrunding",
                fontsize: "Font Størrelse",
                usecustomfontsizes: "Bruk egendefinerte skrifttstørrelser",
                unlockmsgfontsize: "Låse opp melding",
                titlefontsize: "Tittel",
                descfontsize: "Beskrivelse",
                textvspace: "Tekstavstand",
                opacity: "Gjennomsiktighet",
                bgonly: "Bare Bakgrunn",
                glow: "Glimt",
                glowcolor: "Farge",
                glowsize: "Størrelse",
                glowx: "Horisontal forskyvning",
                glowy: "Vertikal forskyvning",
                glowopacity: "Gjennomsiktighet",
                glowanim: "Animasjon",
                glowspeed: "Hastighet",
                glowrarity: "Bruk sjeldenhet",
                glowcolorbronze: "Sjeldenhet: > $semirarity",
                glowcolorsilver: "Sjeldenhet: < $semirarity & > $rarity",
                glowcolorgold: "Sjeldenhet: < $rarity",
                off: "Ingen",
                pulse: "Puls",
                double: "Dobbelt",
                focus: "Fokus",
                orbit: "Bane",
                fluorescent: "Fluorescerende",
                rainbow: "Regnbue",
                mask: "Maske",
                maskimg: "Maskebilde",
                useoutline: "Kontur",
                outline: "Konturtype",
                outlinecolor: "Konturfarge",
                outlinewidth: "Konturbredde",
                dashed: "Stiplet",
                dotted: "Prikket"
            }
        },
        colors: {
            title: "Farger",
            content: {
                primarycolor: "Primærfarge",
                secondarycolor: "Sekundærfarge",
                tertiarycolor: "Tertiærfarge",
                iconshadowcolor: "Skyggefarge for sjeldent ikon",
                iconanimcolor: "Animert farge for sjeldent ikon",
                fontcolor: "Fontfarge",
                usecustomfontcolors: "Bruk tilpassede skrifttypefarger",
                unlockmsgfontcolor: "Farge 1",
                titlefontcolor: "Farge 2",
                descfontcolor: "Farge 3",
                fontoutline: "Fontkontur",
                fontoutlinecolor: "Fontkontur Farge",
                fontoutlinescale: "Fontkontur Skala",
                fontshadow: "Fontskygge",
                fontshadowcolor: "Fontskygge Farge",
                fontshadowscale: "Fontskygge Skala",
                fontshadowx: "Horisontal Forskyvning",
                fontshadowy: "Vertikal Forskyvning"
            }
        },
        icons: {
            title: "Ikon",
            content: {
                iconscale: "Ikon skala",
                iconroundness: "Ikon Avrunding",
                showiconborder: "Vis ikonramme",
                iconborderimg: "Ikonramme",
                iconborderpos: "Rammeposisjon",
                iconborderscale: "Rammens skala",
                iconborderx: "Horisontal forskyvning",
                iconbordery: "Vertikal forskyvning",
                iconborderrarity: "Bruk sjeldenhet",
                iconborderimgbronze: "Sjeldenhet: > $semirarity",
                iconborderimgsilver: "Sjeldenhet: < $semirarity & > $rarity",
                front: "Foran",
                back: "Bak",
                plat: "100% Logo",
                usegameicon: "Bruk Spillikon",
                gameicontype: "Spillikonetype",
                usecustomimgicon: "Bruk tilpasset ikon",
                customimgicon: "Tilpasset ikon",
                icon: "Ikon",
                logo: "Logo",
                logoscale: "Logo skala",
                decoration: "Dekorasjon",
                decorationscale: "Dekorasjon skala",
                showdecoration: "Vis Dekorasjon",
                rarity: "Sjeldenhet",
                showhiddenicon: "Vis skjult ikon",
                hiddenicon: "Skjult ikon",
                replacelogo: "Erstatt Logo"
            }
        },
        position: {
            title: "Posisjon",
            content: {
                pos: "Skjermposisjon",
                usecustompos: "Bruk Tilpasset Posisjon",
                setcustompos: "Sett",
                copycustompos: "Bruk på Alle",
                resetcustompos: "Tilbakestill"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Oppdater Tema",
                savetheme: "Lagre Tema",
                sub: [
                    `Lagrede <span class="hl">Brukertemaer</span> kan velges fra <span class="hl">Velg Tema</span> -menyen på Hjem-skjermen.`,
                    `Sørg for at <span class="hl">Temnavn</span> er <u>unikt</u> - et navn som matcher et eksisterende tema <u>vil overskrive det forrige</u>!`
                ],
                placeholder: "Temnavn",
                theme: "Tema",
                importtheme: "Importer tema",
                import: "Importer",
                importsub: [
                    `Importer en brukerskapt <span class="hl">temafil</span>`,
                    `<span class="hl">Importerte temaer</span> blir lastet automatisk når de er importert med suksess, og kan velges fra <span class="hl">Tema velg</span> menyen`,
                ],
                importidle: `Velg en <span class="hl">temafil</span> for å importere`,
                importcopied: `Tema kopiert vellykket`,
                importrenamed: `Tema omdøpt vellykket`,
                importextracted: `Tema ekstrahert vellykket`,
                importrewriting: `Omskriver temafilbaner...`,
                importconverting: `Konverterer tema...`,
                importcreating: `Oppretter tema...`,
                importdone: `Tema importert vellykket`,
                importfailed: `Feil ved import av valgt temafil!`,
                exporttheme: "Eksporter tema",
                export: "Eksporter",
                exporterrortitle: "Eksportfeil",
                exporterrorsub: [
                    "Det oppstod en feil under forsøk på å eksportere det valgte temaet",
                    `Prøv å lagre det nåværende temaet (<i>via <span class="hl">Lagre tema</span></i>) og prøv å eksportere på nytt`,
                    `Hvis problemet vedvarer, vennligst kopier feilmeldingen nedenfor, og rapporter via lenkeknappene på <span class="hl">Hjemmeskjermen</span>`
                ],
                synctheme: "Synkroniser tema",
                syncedwith: "Synkronisert med",
                themeselect: "Valgt tema",
                copytheme: "Kopier tema",
                copythemesub: "Velg varslingstype(r) du vil kopiere det valgte temaet til"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Her er hva som har skjedd siden appen ble startet",
            copylog: "Kopier Logginnhold"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Er du sikker?</span>
                    <span>Allerede konfigurerte data, <u>inkludert Tilpasninger</u>, vil bli tilbakestilt til standard.</span>
                    <span>🛑 Dette kan ikke angres!</span>
                </div>
            `,
            reset: "Tilbakestill"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier møtte på et problem og må lukkes.",
            details: "Her er feildetaljene:",
            sub: "Klikk på knappene nedenfor for å rapportere dette problemet via din foretrukne plattform.",
            report: "Rapporter",
            log: "Applogg",
            exit: "Avslutt"
        }
    },    
    tooltips: {
        game: "Spillet som for øyeblikket blir sporet",
        usertheme: "Velg en tidligere lagret tema",
        customise: "Tilpass prestasjonsvarsler",
        test: "Vis en testvarsel, inkludert eventuelle tilpasninger",
        kofi: "Doner på Ko-Fi!",
        discord: "Bli med på Discord!",
        github: "Rapporter et problem",
        lang: "Velg språket som brukes i appen",
        steamlang: `Forsøk å laste oversettelser som ligger i Steams applikasjonsfiler for å vise prestasjonsinformasjon på brukerens valgte språk i Steam-klienten<br><br><span class="ttdesc">Dette alternativet prøver å finne oversettelser i en JSON-fil lagret i Steams applikasjonsdata. Hvis det ikke finnes noen oversettelse for den nåværende prestasjonen, vil informasjon om prestasjonen hentet fra Steamworks bli vist i stedet.</span>`,
        maxsteamlangretries: `Antall forsøk (per 100 ms) for å finne gyldige oversettelser for den nåværende prestasjonen<br><br><span class="ttdesc">Steam lagrer for øyeblikket bare en liten mengde prestasjonsdata i JSON-filen knyttet til hvert spill. Eventuelle prestasjoner som ikke er til stede i denne filen, vil bli lagt til etter at prestasjonen er låst opp.<br><br>Siden det kan ta tid å legge til nye data, vil økning av denne verdien øke sjansen for å finne oversettelsesdata for den nåværende prestasjonen, men det kan også forsinke visningen av varslingen på skjermen med den tiden som beregnes av denne innstillingen.<br><br>Hvis ingen gyldige oversettelsesdata kan finnes for den nåværende prestasjonen, vil oversettelsen gå tilbake til språket spesifisert i Steamworks.</span>`,
        desktop: "Veksle en snarvei på skrivebordet for å kjøre appen",
        startwin: "Start Steam Achievement Notifier automatisk etter pålogging",
        startmin: "Etter oppstart, skjul appens brukergrensesnittvindu til det åpnes fra systemstatusfeltet",
        nohwa: `Deaktiver maskinvareakselerasjon, noe som kan forbedre ytelsen på systemer med begrensede ressurser eller systemer uten dedikert GPU<br><br><span class="ttdesc">Appen vil starte på nytt etter aktivering/deaktivering av dette alternativet</span>`,
        litemode: "Deaktiver alle interaktive brukergrensesnittelementer, og tilbyr bare begrenset appfunksjonalitet via systemstatusfeltikonet. Kan forbedre ressursene som brukes av appen",
        rarity: `Prosentandelen hvor varsler for sjeldne prestasjoner utløses.<br><br>Enhver prestasjon med en opplåsingsprosent over denne verdien vil vises som en Hovedvarsling<br><br><span class="ttdesc">Hvis <span class="hl">Trofe-modus</span> er aktivert, vil enhver prestasjon med en opplåsingsprosent over denne verdien vises som en Sølvvarsling i stedet</span>`,
        semirarity: `Prosentandelen hvor "Sølv"-varslingsobjekter vises (f.eks. <span class="hl">Sjeldenhetsmerker</span>, <span class="hl">Dekorasjoner</span> osv.).<br><br>Enhver prestasjon med en opplåsingsprosent under (eller lik) denne verdien, og over verdien for <span class="hl">Sjeldenhetsprosent</span>, vil vise varslingsobjekter konfigurert for "Sølv" sjeldenheter.<br><br>Enhver prestasjon med en opplåsingsprosent over denne verdien vil vise varslingsobjekter konfigurert for "Bronse" sjeldenheter<br><br><span class="ttdesc">Hvis <span class="hl">Trofe-modus</span> er aktivert, vil enhver prestasjon med en opplåsingsprosent over denne verdien vises som en Bronsevarsling i stedet</span>`,
        showpercent: "Vis låseprosenten for prestasjonen i varslingen for de valgte typene",
        soundonly: "Deaktiver varsler, og spill bare av lyder som er satt via Tilpasseren",
        extwin: "Opprett et vindu som dupliserer alle varsler som for øyeblikket vises på skjermen. Dette vinduet kan deretter legges til som en vindusfangstkilde for bruk i strømmeprogramvare som OBS",
        extwinframerate: "Sett målbildesatsen for strømvarsler",
        extwinshow: `Veksle synligheten til vinduet for strømmingsvarsler<br><br><span class="ttdesc">Når det er fokusert på oppgavelinjen, hold nede <code class="ttcode">Ctrl</code>-tasten for å vise vinduets gjeldende plassering</span>`,
        audiosrc: "Velg kilden til (eller deaktiver) lyd generert av appen",
        nowtracking: "Vis en varsling som informerer brukeren om at prestasjoner for et kjørende spill blir sporet",
        nowtrackingscale: `Angi størrelsen på sporingsvarslingen`,
        nowtrackingpos: `Angi posisjonen til sporingvarslingen`,
        shortcuts: "Utløs en testvarsel via en tastatursnarvei. Snarveier kan tilpasses for hver varslingstype",
        noiconcache: `Deaktiver ikonbuffer ved oppstart av spill.<br><br><span class="ttdesc">Dette kan betydelig forbedre appens ytelse ved oppstart av spill, og løse sporingsproblemer med spill som har et stort antall prestasjoner. Imidlertid kan deaktivering av ikonbuffer i sjeldne tilfeller føre til manglende prestasjonsikoner i varsler</span>`,
        steamss: "Ta et Steam-skjermbilde når en prestasjon blir låst opp",
        screenshots: "Velg typen ekstra medier som skal opprettes når en varsling vises",
        monitors: "Skjermen som vil bli fanget når skjermbildet tas",
        hdrmode: `Ta skjermbilder ved hjelp av en metode som er kompatibel med skjermer som bruker High Dynamic Range (HDR)`,
        ovpos: "Posisjonen til varslingsoverlegget i skjermbildet",
        ovmatch: "Samsvare med skjermposisjonen som er satt i Tilpasseren for denne varslingstypen",
        ovpath: "Plasseringen der skjermbilder generert av denne opsjonen vil bli lagret",
        ssdelay: "Legg til en forsinkelse fra når varslingen oppstår til når skjermbildet tas",
        sspreview: "Vis en forhåndsvisning av hvordan skjermbildet vil se ut når det lagres",
        noanim: "Deaktiver alle animasjoner og overgangseffekter for appvinduer",
        noupdatedialog: `Forhindrer automatisk visning og fokus på <span class="hl">Oppdatering tilgjengelig</span>-dialogen<br><br><span class="ttdesc">Dialogen kan fortsatt åpnes ved å klikke på oppdateringsknappen når den er tilgjengelig</span>`,
        nvda: "Aktiver kopiering av prestasjonsinformasjon til utklippstavlen når en prestasjon blir låst opp, for å bli lest av skjermleserprogramvare, for eksempel NVDA",
        tooltips: "Vis verktøytips når du holder musepekeren over visse brukergrensesnittelementer",
        colorprofile: `Tving alle appvinduer til å bruke den valgte fargeprofilen<br><br><span class="ttdesc">Krever app-nevning</span>`,
        pollrate: `Sett oppdateringsintervallet for prestasjonsdata under spill<br><br><span class="ttdesc">Ytelsen kan øke/redusere avhengig av verdien eller systemets maskinvare. Høyere verdier fører vanligvis til lavere systembelastning, men kan forsinke varsler</span>`,
        initdelay: `Sett forsinkelsen mellom deteksjon av gjeldende <span class="hl">AppID</span> og når prosess-/prestasjesporing starter<br><br><span class="ttdesc">Øke denne verdien kan forhindre scenarier der Steam ikke klarer å starte gjeldende spill (på grunn av initialisering av applikasjonen i Steamworks før spillet har startet)</span><br><br><span class="ttdesc">Alternativt kan økning av denne verdien også brukes til å omgå feilaktig deteksjon av forhåndslanseringsprosesser</span>`,
        releasedelay: `Angi hvor lenge bakgrunnsprosessen Worker venter før den starter på nytt etter at det gjeldende spillet er frigitt. Påvirker både automatisk prosesstracking og Spill med automatisk frigivelse<br><br><span class="ttdesc">Gir en lengre tidsramme for at Steamworks skal bli fullstendig frigitt fra appen. Å øke denne verdien kan forhindre uvanlig atferd, som for eksempel sporing av et tidligere lukket spill</span>`,
        maxretries: `Angi maksimalt antall forsøk på å koble en kjørende prosess til en oppdaget AppID. Påvirker både automatisk prosesstracking og Spill med automatisk frigivelse<br><br><span class="ttdesc">Forsøk gjøres én gang per sekund. Hvis en kjørende prosess ikke er koblet til gjeldende AppID etter dette antallet forsøk, vil en ugyldig prosess bli returnert. I slike tilfeller må spillet frigjøres manuelt via Systemstatusfelt > Alternativer > Frigi spill</span>`,
        debug: "Åpne feilsøkingspanelet, som viser detaljert prosessporingsinformasjon",
        userust: "Bruk en alternativ Rust-basert funksjon for å sjekke om de sporede spillprosessene kjører på systemet for øyeblikket. Når ikke avmerket, vil standard NodeJS-basert prosesskontroll bli brukt i stedet.",
        notifydebug: "Opprett et DevTools-vindu for alle varsler. Nyttig for feilsøking av varslingproblemer",
        usecustomfiles: "Aktiver varsler for å laste brukertilpassede filer. Forsiktighet anbefales for vanlige brukere",
        showcustomfiles: "Åpne plasseringen av de tilpassede filene",
        log: "Åpne apploggvinduet, som viser informasjon om prosessaktivitet, advarsler og feil",
        reset: "Fjern all konfigurasjonsdata og start appen på nytt",
        playback: "Pause/gjenoppta animasjonen av forhåndsvisningen av varslingen",
        replay: "Start animasjonen av forhåndsvisningen av varslingen på nytt",
        preset: "Velg forhåndsinnstillingen for varslingen som skal tilpasses",
        iconanim: "Veksle mellom sjeldenhetsikonets kant og animasjon",
        alldetails: "Vis alle tekstelementer i varslingen, inkludert de som er skjult som standard for denne forhåndsinnstillingen",
        usepercent: "Vis låseprosenten for prestasjonen, i stedet for XP/S-verdien",
        displaytime: "Angi antall sekunder varslingen vil vises",
        scale: "Øk eller reduser størrelsen på varslingen",
        customtext: "Angi en tilpasset melding som skal vises i varslingen",
        usegametitle: "Vis tittelen på gjeldende spill i varslingen",
        customfont: "Last inn en tilpasset skrifttype som skal brukes i varslingen",
        soundmode: "Velg enten en enkelt lydfil eller en tilfeldig valgt lydfil fra en mappe som inneholder flere lydfiler, når en varsling oppstår",
        soundfile: "Velg en lydfil som skal spilles av når en varsling oppstår",
        sounddir: "Velg en mappe der en lydfil vil bli tilfeldig valgt når en varsling oppstår",
        volume: "Angi avspillingsvolumet for lydfilen",
        preview: "Forhåndsvis den valgte lydfilen eller en tilfeldig valgt lydfil fra mappen",
        bgstyle: "Velg stilen for bakgrunnen til varslingen",
        gradientangle: "Angi vinkelen på gradienten",
        bgimg: "Last inn et bildefil som skal brukes som bakgrunn for varslingen",
        bgachicon: "Bruk ikonet for den låste prestasjonen som bakgrunn for varslingen",
        bgimgbrightness: "Angi lysstyrken på bildet som brukes som bakgrunn for varslingen",
        brightness: "Angi lysstyrken til spillkunsten som brukes som bakgrunn for varslingen",
        blur: "Sett nivået av uskarphet som påføres bakgrunnen av varselet",
        roundness: "Angi avrundingen av varslingens kanter",
        fontsize: "Angi størrelsen på skrifttypen som brukes i varslingen",
        opacity: "Angi den generelle gjennomsiktigheten til varslingen",
        bgonly: "Angi bare gjennomsiktigheten for varslingens bakgrunn, og behold andre elementer med full gjennomsiktighet",
        glow: "Aktiver en glødende effekt som omgir varselet",
        glowcolor: "Sett fargen på glødende effekt",
        glowsize: "Sett størrelsen på glødende effekt",
        glowx: "Juster den horisontale posisjonen til glødeffekten",
        glowy: "Juster den vertikale posisjonen til glødeffekten",
        glowopacity: "Sett gjennomsiktigheten til glødeffekten",
        glowanim: "Velg en forhåndsdefinert animasjon som skal brukes på glødende effekt",
        glowspeed: "Sett hastigheten på animasjonen som brukes på glødende effekt",
        glowrarity: "Endrer fargen på glødeffekten basert på sjeldenheten til den låste opp prestasjonen",
        glowcolorbronze: "Glød-fargen som vises når opplåsningsprosenten er > $semirarity",
        glowcolorsilver: "Glød-fargen som vises når opplåsningsprosenten er < $semirarity og > $rarity",
        glowcolorgold: "Glødefargen som vises når opplåsingsprosenten er < $rarity",
        mask: "Aktiver maske av deler av varselet med et tilpasset bilde",
        maskimg: `Last opp et bildefil som skal brukes som maske<br><br><span class="ttdesc">I CSS fungerer <code class="ttcode">mask-mode: alpha</code> på en motsatt måte enn hva som vanligvis forventes - områder med gjennomsiktighet i bildefilen vil bli skjult, og områder med svart/grå vil tillate elementene under å være synlige</span>`,
        useoutline: "Vis en kontur rundt varslingen",
        outline: "Velg typen kontur som skal vises rundt varslingen",
        outlinecolor: "Angi fargen på konturen rundt varslingen",
        outlinewidth: "Angi bredden på konturen rundt varslingen",
        primarycolor: "Angi primærfargen til varslingen",
        secondarycolor: "Angi sekundærfargen til varslingen",
        tertiarycolor: "Angi tertiærfargen til varslingen",
        fontcolor: "Angi fargen på all tekst som vises i varslingen",
        fontoutline: "Legg til en kontur rundt all tekst som vises i varslingen",
        fontoutlinecolor: "Angi fargen på tekstkonturen",
        fontoutlinescale: "Angi tykkelsen på tekstkonturen",
        fontshadow: "Legg til en skygge på all tekst som vises i varslingen",
        fontshadowcolor: "Angi fargen på tekstskyggen",
        fontshadowscale: "Angi tykkelsen på tekstens skygge",
        fontshadowx: "Forskyver tekstskyggens posisjon horisontalt",
        fontshadowy: "Forskyver tekstskyggens posisjon vertikalt",
        iconroundness: "Angi avrundingen av prestasjons-/spillikonet som vises i varslingen",
        plat: "Last inn en bildefil som skal brukes som 100 % -ikon",
        usegameicon: "Erstatt ikonet for den opplåste prestasjonen med ikonet for det nåværende spillet",
        gameicontype: `Velg hvilken type bilde som skal vises som spillikon`,
        usecustomimgicon: "Erstatt ikonet for den opplåste prestasjonen med en tilpasset bildefil",
        customimgicon: "Last opp en bildefil som skal brukes som tilpasset ikon",
        showhiddenicon: "Vis et bilde som indikerer at prestasjonen er skjult i varselet",
        hiddenicon: "Last opp en bildefil for å erstatte det skjulte prestasjonsikonet",
        logo: "Last inn en bildefil for å erstatte logoikonet",
        decoration: "Last inn en bildefil for å erstatte dekorasjonsikonet",
        showdecoration: "Veksle synligheten til dekorasjonsikonet",
        replacelogo: "Erstatt logoikonet i varselet med den valgte dekorasjonen",
        pos: "Angi skjermposisjonen til varslingen",
        usecustompos: "Aktiver tilpasset plassering for varslingen",
        setcustompos: "Angi tilpasset posisjon for varslingen",
        copycustompos: "Bruk den egendefinerte posisjonen på alle andre varslingstyper",
        resetcustompos: "Tilbakestill posisjonen til varslingen til standard tilpasset posisjon",
        updatetheme: "Oppdater gjeldende tema med valgte tilpasningsalternativer",
        savetheme: "Lagre alle konfigurerte tilpasningsalternativer som et nytt tema",
        visibilitybtn: "Bytt synligheten til elementet i tilpassede forhåndsvisninger og testvarsler",
        delbtn: "Tilbakestill elementet til standard",
        imgpath: "Stedet hvor varsler bilder generert av dette alternativet vil bli lagret",
        ssenabled: "Aktiver eller deaktiver generering av medier for denne typen",
        checkforupdates: `Sjekk om en ny app-versjon har blitt utgitt på GitHub. Hvis en oppdatering er tilgjengelig, vil den automatisk bli lastet ned og installert når den er bekreftet via dialogvinduet <span class="hl">Oppdatering tilgjengelig</span>`,
        linkedgames: `Bypass <span class="hl">automatisk prosesssporing</span> for bestemte Steam-spill<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        exclusionlist: `Forhindre prestasjoner i bestemte Steam-spill fra å bli sporet av appen<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        inclusionlist: `Hindre at alle Steam-spill spores av appen med mindre de er spesifisert<br><br><span class="ttdesc">Dette alternativet bør kun brukes i svært spesifikke tilfeller. Brukere bør ikke trenge å bruke dette alternativet under normale omstendigheter!</span>`,
        ovx: "Forskyvning av varsling som vises i skjermbildet horisontalt",
        ovy: "Forskyvning av varsling som vises i skjermbildet vertikalt",
        importtheme: `Importer tilpasninger via en brukerskapt <span class="hl">temafil</span>`,
        exporttheme: `Eksporter det aktuelt valgte <span class="hl">temaet</span> for deling<br><br><span class="ttdesc">Før du prøver å eksportere, sørg for at ønsket <span class="hl">tema</span> er valgt (via <span class="hl">Tema velg</span> menyen). Sørg også for at tilpasninger er lagret i det valgte <span class="hl">temaet</span> (via <span class="hl">Lagre tema</span> menyen)<br><br><u>Eventuelle tilpasninger som ikke er lagret i gjeldende <span class="hl">tema</span> vil ikke bli eksportert!</u></span>`,
        webhooks: "Bruk en Webhook URL for å poste til en Discord-server hver gang en prestasjon låses opp",
        webhookmain: `Bytt om informasjon om prestasjoner skal postes til en Discord-server når en $main prestasjon låses opp`,
        webhooksemi: `Bytt om informasjon om prestasjoner skal postes til en Discord-server når en $semi prestasjon låses opp`,
        webhookrare: "Bytt om informasjon om prestasjoner skal postes til en Discord-server når en $rare prestasjon låses opp",
        webhookplat: "Bytt om informasjon om prestasjoner skal postes til en Discord-server når en $plat prestasjon låses opp",
        webhooktest: "Bytt om testinformasjon skal sendes til en Discord-server når testvarsler av hvilken som helst type utløses",
        webhookurl: `Angi <span class="hl">Webhook URL</span> for den ønskede Discord-serveren<br><br><span class="ttdesc">En <span class="hl">Webhook URL</span> brukes til å poste til en Discord-server/kanal på vegne av en bruker eller applikasjon. For å sette opp en ny Webhook for en Discord-server, må brukeren ha en rolle på den ønskede serveren som tillater opprettelse av Webhooks<br><br><u>En Webhook URL er nødvendig når du bruker dette alternativet</u><br><br>Se Discsd’s offisielle dokumentasjon for mer informasjon</span>`,
        webhookspoilers: `Legg til et spoiler-merke til "Skjulte" prestasjoner når de legges ut på Discord`,
        webhookappid: "Vis AppID for det nåværende spillet i bunnteksten av webhook-embedet",
        unlockmsg: "Angi plasseringen av låse opp-meldingen/tilpasset tekst innenfor $type",
        title: "Angi plasseringen av prestasjonstittelen innenfor $type",
        desc: "Angi plasseringen av prestasjonsbeskrivelsen innenfor $type",
        notification: "varsling",
        screenshot: "skjermbilde",
        percentpos: "Angi plasseringen av sjeldenhetsprosenten innenfor $type",
        sspercentpos: "Angi plasseringen av sjeldenhetsprosenten innenfor $type",
        hiddeniconpos: "Angi plasseringen av det skjulte/hemmelige prestasjonsikonet innenfor $type",
        sshiddeniconpos: "Angi plasseringen av det skjulte/hemmelige prestasjonsikonet innenfor $type",
        decorationpos: "Angi plasseringen av dekorasjonselementet innenfor $type",
        ssdecorationpos: "Angi plasseringen av dekorasjonselementet innenfor $type",
        percentbadge: "Vis prosentandelen for opplåsning inne i et merke plassert over ikonet for prestasjonen/spillet",
        sspercentbadge: "Vis prosentandelen for opplåsning inne i et merke plassert over ikonet for prestasjonen/spillet",
        percentbadgepos: "Sett merkeplasseringen",
        sspercentbadgepos: "Sett merkeplasseringen",
        percentbadgecolor: "Sett bakgrunnsfargen til merket",
        sspercentbadgecolor: "Sett bakgrunnsfargen til merket",
        percentbadgefontcolor: "Sett fontfargen til merket",
        sspercentbadgefontcolor: "Sett fontfargen til merket",
        percentbadgefontsize: "Sett størrelsen på merket",
        sspercentbadgefontsize: "Sett størrelsen på merket",
        percentbadgeroundness: "Sett rundingen av merket",
        sspercentbadgeroundness: "Sett rundingen av merket",
        percentbadgex: "Forskyv posisjonen til badge-elementet horisontalt",
        sspercentbadgex: "Forskyv posisjonen til badge-elementet horisontalt",
        percentbadgey: "Forskyv posisjonen til badge-elementet vertikalt",
        sspercentbadgey: "Forskyv posisjonen til badge-elementet vertikalt",
        percentbadgeimg: "Vis et ikonsymbol basert på sjeldenhet som badge-element",
        sspercentbadgeimg: "Vis et ikonsymbol basert på sjeldenhet som badge-element",
        percentbadgeimgbronze: "Merkeikonet som vises når opplåsningsprosenten er > $semirarity",
        sspercentbadgeimgbronze: "Merkeikonet som vises når opplåsningsprosenten er > $semirarity",
        percentbadgeimgsilver: "Merkeikonet som vises når opplåsningsprosenten er < $semirarity og > $rarity",
        sspercentbadgeimgsilver: "Merkeikonet som vises når opplåsningsprosenten er < $semirarity og > $rarity",
        percentbadgeimggold: "Ikonet for badge som vises når opplåsningsprosenten er < $rarity",
        sspercentbadgeimggold: "Ikonet for badge som vises når opplåsningsprosenten er < $rarity",
        percentbadgeimgplat: "Merkeikonet som vises når alle prestasjoner er låst opp",
        sspercentbadgeimgplat: "Merkeikonet som vises når alle prestasjoner er låst opp",
        resetpbimgs: "Tilbakestill alle badge-ikoner til standard",
        elemsmatch: `Match innstillingsalternativene for varslingselementene satt i tilpasseren for denne varslingskategorien<br><br><span class="ttdesc">Noen varslingspresets kan ikke fullstendig matche tilpasserinnstillinger på grunn av forskjeller mellom skjermbaserte og skjermbilde-baserte varslingsoppsett</span>`,
        themeswitch: `Bytt automatisk til et lagret <span class="hl">tema</span> når et spesifikt spill oppdages`,
        userthemesync: `Synkroniser tilpasninger i det valgte <span class="hl">tema</span> til alle andre varslingskategorier`,
        showsystrayopts: `Vis alle alternativer som vanligvis ligger under <span class="hl">Systemstatus</span> > <span class="hl">Alternativer</span> i <span class="hl">Innstillinger</span> > <span class="hl">Diverse</span>`,
        releaseshortcut: "Frigjør det nåværende sporet spillet ved å bruke den angitte hurtigtasten",
        themeselect: "Velg et tidligere lagret Tema",
        statwin: `Vis konfigurerbare prestasjonstatistikker for det nåværende spillet i et eksternt vindu<br><br><span class="ttdesc">Når det brukes sammen med alternativet <span class="hl">Oversett prestasjoner til Steam-språk</span>, kan noen oversettelser ikke være tilgjengelige før den spesifikke prestasjonen er låst opp</span>`,
        statwinaot: `Sett Prestasjonsstatistikkvinduet til "Alltid på toppen"-modus, slik at vinduet vises over spillvinduet<br><br><span class="ttdesc">Når dette er aktivert, vil Prestasjonsstatistikkvinduet ikke registrere brukerinteraksjoner, som for eksempel "klikk"-hendelser. For å aktivere interaksjon med vinduet igjen, må dette alternativet deaktiveres</span>`,
        statwinshortcut: "Veksle prestasjonsstatistikk-overlegget ved hjelp av den angitte hurtigtasten",
        ssdisplay: "Vis forhåndsvisning av skjermbildet i varslingen",
        iconscale: "Øk eller reduser størrelsen på prestasjonens ikon",
        showiconborder: "Vis et bilde som ramme rundt prestasjonsikonet",
        iconborderimg: "Last inn et bildefil som skal brukes som ramme rundt prestasjonsikonet",
        iconborderpos: "Angi om rammebildet skal vises foran eller bak prestasjonsikonet",
        iconborderscale: "Øk eller reduser størrelsen på ikonrammen innenfor varslingen",
        iconborderx: "Øk eller reduser den horisontale forskyvningen av ikonrammen innenfor varslingen",
        iconbordery: "Øk eller reduser den vertikale forskyvningen av ikonrammen innenfor varslingen",
        iconborderrarity: "Endrer ikonetrammebildet som vises basert på sjeldenheten til den opplåste prestasjonen",
        iconborderimgbronze: "Ikonrammebildet som vises når opplåsningsprosenten er > $semirarity",
        iconborderimgsilver: "Ikonrammebildet som vises når opplåsningsprosenten er < $semirarity og > $rarity",
        iconshadowcolor: "Angi fargen på skyggeeffekten rundt prestasjonsikonet når en sjelden prestasjon låses opp",
        iconanimcolor: "Angi fargen på animasjonseffekten bak prestasjonsikonet når en sjelden prestasjon låses opp",
        logoscale: "Øk eller reduser størrelsen på logoelementet i varslingen",
        decorationscale: "Øk eller reduser størrelsen på dekorasjonselementet i varslingen",
        usecustomfontsizes: `Øk eller reduser størrelsen på individuelle tekstelementer i varslingen<br><br><span class="ttdesc">Bevaring av den opprinnelige varslingens oppsett kan ikke garanteres når individuelle skrifttstørrelser endres</span>`,
        unlockmsgfontsize: "Øk eller reduser størrelsen på tekstelementet for låse opp melding",
        titlefontsize: "Øk eller reduser størrelsen på tekstelementet for prestasjonstittel",
        descfontsize: "Øk eller reduser størrelsen på tekstelementet for prestasjonsbeskrivelse",
        webhookembedcolormain: "Angi fargen som brukes i webhook-embed når en $main prestasjon låses opp",
        webhookembedcolorsemi: "Angi fargen som brukes i webhook-embed når en $semi prestasjon låses opp",
        webhookembedcolorrare: "Angi fargen som brukes i webhook-embed når en $rare prestasjon låses opp",
        webhookembedcolorplat: "Angi fargen som brukes i webhook-embed når en $plat prestasjon låses opp",
        raemus: "Vis varsler når spill blir oppdaget i støttede emulatorer",
        rauser: "Sett Retro Achievements brukernavn for å spore prestasjoner",
        rakey: `Sett Web API-nøkkelen som skal brukes for autentisering med Retro Achievements API<br><br><span class="ttdesc">En Web API-nøkkel kan kopieres eller regenereres ved å logge inn på Retro Achievements-nettstedet og navigere til <span class="hl">Innstillinger > Nøkler > Web API-nøkkel</span><br><br>🔒 Den oppgitte nøkkelen vil bli kryptert før den lagres lokalt på systemet (hvis det nåværende operativsystemet støtter kryptering)</span>`,
        rapercenttype: "Sett om du vil vise Hardcore eller Softcore prestasjonslåsprosent i varsler",
        retroarch: `Vis Retro Achievements varsler for spill emulert via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Innstillinger > Logging</span> må konfigureres med følgende innstillinger:<br><br><ul><li><span class="hllb">Logging Detaljnivå</span>: <span class="hlgreen">PÅ</span></li><li><span class="hllb">Frontend Logging Nivå</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Logg til Fil</span>: <span class="hlgreen">PÅ</span></li><li><span class="hllb">Tidsstempel Logg Filer</span>: <span class="hlred">AV</span></li></ul></span>`,
        dolphin: `Vis Retro Achievements varsler for spill emulert via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Visning > Vis Loggkonfigurasjon</span> må konfigureres med følgende innstillinger:<br><br><ul><li><span class="hllb">Detaljnivå</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Logger Utganger</span> > <span class="hlgreen">Skriv til Fil</span></li><li><span class="hllb">Loggtyper</span> > <span class="hlgreen">Prestasjoner (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Vis Retro Achievements varsler for spill emulert via PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Verktøy > Aktiver fillogging</span> må være aktivert</span>`,
        duckstation: `Vis Retro Achievements-varsler for spill emulert via Duckstation<br><br><span class="ttdesc">❗ Filen <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> må lastes ned og flyttes til <span class="hl">Duckstations installasjonsmappe</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Innstillinger > Prestasjoner > RAIntegration (Kun for utviklere)</span> må være aktivert</span>`,
        ppsspp: `Vis Retro Achievements-varsler for spill som emuleres via PPSSPP<br><br><span class="ttdesc"><span class="hl">Innstillinger > Verktøy > Utviklerverktøy > Generelt > Logg til fil</span> må være aktivert og konfigurert med følgende innstillinger:<br><br><ul><li><span class="hllb">Prestasjoner</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Angi banen til RetroArchs <span class="hl">"retroarch.log"</span> loggfil<br><br><span class="ttdesc">Ved standard installasjonsinnstillinger, vil <span class="hl">"retroarch.log"</span> bli lagret i <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Angi banen til Dolphins <span class="hl">"dolphin.log"</span> loggfil<br><br><span class="ttdesc">Ved standard installasjonsinnstillinger, vil <span class="hl">"dolphin.log"</span> bli lagret på en av følgende steder:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Angi banen til PCSX2s <span class="hl">"emulog.txt"</span> loggfil<br><br><span class="ttdesc">Ved standard installasjonsinnstillinger, vil <span class="hl">"emulog.txt"</span> bli lagret i <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Angi banen til Duckstations <span class="hl">"RALog.txt"</span> loggfil<br><br><span class="ttdesc">Med standardinstallasjonsinnstillinger lagres <span class="hl">"RALog.txt"</span> i <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Angi banen til PPSSPP sin <span class="hl">"log.txt"</span>-loggfil<br><br><span class="ttdesc">Med standard installasjonsinnstillinger lagres <span class="hl">"log.txt"</span> i <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Sett fargen på tekstelementer innenfor varslingen individuelt",
        unlockmsgfontcolor: "Sett fargen på det første tekstelementet",
        titlefontcolor: "Sett fargen på det andre tekstelementet",
        descfontcolor: "Sett fargen på det tredje tekstelementet",
        exportachdata: `Eksporter prestasjonsdata til en JSON-fil når en prestasjon låses opp<br><br><span class="ttdesc">Når aktivert, vil <span class="ttcode">achdata.json</span> bli eksportert til:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Justere den vertikale avstanden mellom textelementene i varslingen",
        ssmode: `Angi om skjermbilder skal ta opp hele skjermen eller det gjeldende spillvinduet<span style="color: red;">*</span><br><br><span class="ttdesc">Hvis det gjeldende spillets <span class="hl">kjørbare fil</span> ikke kan finnes (<i>enten via <span class="hl">automatisk prosesstracking</span> eller når det er lagt til som en <span class="hl">Spill med automatisk frigivelse</span>-oppføring</i>), vil dette alternativet som standard bruke "Skjerm"-modus</span>`,
        replaynotify: "Gjenta den siste prestasjonsvarslingen",
        replaynotifyshortcut: "Gjenta den siste prestasjonsvarslingen ved å bruke den angitte snarveien",
        replaynotifyempty: `<br><br><span class="ttdesc">Gjentakelseskoen er tom. Lås opp en prestasjon for å gjenta en varsling</span>`,
        customtrigger: "Utløser en tast/kombinasjon som simuleres ved opplåsing av et achievement. Kan brukes til å utløse hurtigtaster registrert i eksterne applikasjoner",
        customtriggershortcut: `Utløs den angitte tast/kombinasjonen når et achievement låses opp<br><br><span class="ttdesc">Støtter mellom 1-3 taster per hurtigtast. For tastetrykk/kombinasjoner med færre enn 3 taster, trykk på ønskede taster og vent til timeren (5s) går ut</span>`,
        customtriggerdelay: "Forsink den angitte egendefinerte tast/kombinasjonen",
        customtriggerusedisplaytime: `Forsink den angitte egendefinerte tast/kombinasjonen basert på visningstidsverdien for den gjeldende varseltypen`,
        trophymode: "Erstatt Hoved/Sjelden/100% varslingstyper med Bronse/Sølv/Gull/Platina",
        lognum: `Antall tidligere loggfiler som lagres før sletting. En ny loggfil genereres hver gang appen startes<br><br><span class="ttdesc">Når satt til 0, slettes alle tidligere loggfiler ved avslutning</span>`, 
        detectedappid: `Bruk <span class="hl">AppID</span> til det spillet som for øyeblikket er oppdaget`,
        listmode: `Angi oppførselen til <span class="hl">Utelukkelsesliste</span>/<span class="hl">Inkluderingsliste</span><br><br><span class="ttdesc">• <span class="hl">Utelukkelse</span>: Ignorer bare spill som er spesifisert i listen<br>• <span class="hl">Inkludering</span>: Ignorer alle spill unntatt de som er spesifisert i listen</span>`,
        notifymax: `Angi maksimalt antall varsler som kan vises samtidig på skjermen<br><br><span class="ttdesc">Å øke antall samtidige varsler krever mer ressurser og kan redusere ytelsen</span>`,
        notifyspace: "Angi avstanden mellom varsler som vises samtidig på skjermen",
        audiocooldown: `Angi hvor lang tid det skal gå før påfølgende varsler kan spille ny lyd<br><br><span class="ttdesc">Lyden påvirkes ikke hvis Maksimalt antall varsler er satt til 1</span>`,
        rauseemudir: "Lagre skjermbilder/varslingsbilder låst opp via RetroAchievements i en undermappe for gjeldende emulator i den angitte katalogen for skjermbilde-/bildefilbane",
        ssext: "Angi filformatet for skjermbilder generert via alternativet Skjermbilde med varslingsoverlay",
        notify1line: `Begrens antall tekstlinjer som vises i alle varsler til 1<br><br><span class="ttdesc">Tekststrenger som ikke får plass på én linje vil bli avkortet med "..."</span>`,
        copytheme: "Kopier det valgte temaet til en annen varslingstype",
        ssaddtosteam: "Legg automatisk til generert media i det nåværende spillets opptak og skjermbilder i Steam",
        createnewpreset: "Lag et nytt varslingsforhåndsinnstilt valg ved å bruke en tom mal for tilpassede design/animasjoner"
    },
    update: {
        updateavailable: "Oppdatering tilgjengelig",
        sub: [
            `<span id="newversion"></span>`,
            "En ny oppdatering til Steam Achievement Notifier er tilgjengelig!",
            `Fullstendige utgivelsesnotater er tilgjengelige på <span id="discordreleasenotes"></span> og <span id="githubreleasenotes"></span>`
        ],
        update: "Oppdater"
    },
    linkgame: {
        content: {
            exepath: "Utførbar filbane",
            managesub: [
                `Hvis Steam fortsatt viser et spill som <i>Spiller</i> etter at spillvinduet er lukket, kan du prøve å legge til en ny oppføring i <span class="hl">Spill med automatisk frigivelse</span>`,
                `Legg til et spesifikt spills <span class="hl">AppID</span> sammen med den forventede <span class="hl">spillkjørbare filen</span>, eller <span class="hl">fjern</span> en eksisterende oppføring`,
                `Nye oppføringer kan også legges til ved å <i>høyreklikke</i> på <span class="hl">systemstatusikonet</span> > <span class="hl">Automatisk frigivelse av spill</span> når et spill er oppdaget`,
                `<span class="hl help" id="appidhelp"><u>Hvordan finner jeg AppID-en til et Steam-spill?</u></span>`
            ],
            linknew: "Ny oppføring",
            linknewsub: [
                `Legg til et nytt spills <span class="hl">AppID</span> sammen med den forventede <span class="hl">spillkjørbare filen</span>`,
                `Når de er lagt til, kan oppføringene <span class="hl">fjernes</span> via den forrige <span class="hl">Spill med automatisk frigivelse</span>-menyen`
            ],
            linkedit: "Rediger oppføring",
            linkeditsub: [
                `Rediger et eksisterende spills <span class="hl">AppID</span> sammen med den forventede <span class="hl">spillkjørbare filen</span>`,
                `Når de er lagt til, kan oppføringene <span class="hl">fjernes</span> via den forrige <span class="hl">Spill med automatisk frigivelse</span>-menyen`
            ],
            link: "Legg til"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Legg til hvilket som helst Steam-spills <span class="hl">AppID</span> til <span class="hl">unntakslisten</span>`,
                `Steam Achievement Notifier vil ikke prøve å spore prestasjonsdata for noen spill med <span class="hl">AppID</span> lagt til <span class="hl">unntakslisten</span>`,
                `<span class="hl" id="appidhelp"><u>Hvordan finner jeg et Steam-spills AppID?</u></span>`
            ],
            exclusionnew: "Ny ekskludering",
            exclusionnewsub: [
                `Skriv inn <span class="hl">AppID</span> for å legge til i <span class="hl">unntakslisten</span>`
            ],
            exclusionedit: "Rediger utelatelse",
            exclusioneditsub: [
                `Rediger den eksisterende <span class="hl">AppID</span> i <span class="hl">utelatelseslisten</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Legg til et Steam-spills <span class="hl">AppID</span> i <span class="hl">Inkluderingslisten</span>`,
                `Steam Achievement Notifier vil bare forsøke å spore prestasjonsdata for spill hvis <span class="hl">AppID</span> er lagt til i <span class="hl">Inkluderingslisten</span>`,
                `<span class="hl help" id="appidhelp"><u>Hvordan finner jeg et Steam-spills AppID?</u></span>`
            ],
            inclusionnew: "Ny inkludering",
            inclusionnewsub: [
                `Skriv inn <span class="hl">AppID</span> som skal legges til i <span class="hl">Inkluderingslisten</span>`
            ],
            inclusionedit: "Rediger inkludering",
            inclusioneditsub: [
                `Rediger eksisterende <span class="hl">AppID</span> i <span class="hl">Inkluderingslisten</span>`
            ]
        }
    },
    notificationelems: {
        title: "Varslingselementer",
        content: {
            unlockmsg: "Låse opp-melding",
            title: "Prestasjonstittel",
            desc: "Prestasjonens beskrivelse",
            hiddeniconpos: "Skjult ikon",
            sshiddeniconpos: "Skjult ikon",
            decorationpos: "Dekorasjon",
            ssdecorationpos: "Dekorasjon",
            percentpos: "Raritet prosentandel",
            sspercentpos: "Raritet prosentandel",
            percentbadge: "Prosentmerke",
            sspercentbadge: "Prosentmerke",
            percentbadgepos: "Merkeplassering",
            sspercentbadgepos: "Merkeplassering",
            percentbadgecolor: "Farge på merke",
            sspercentbadgecolor: "Farge på merke",
            percentbadgefontcolor: "Merke Fontfarge",
            sspercentbadgefontcolor: "Merke Fontfarge",
            percentbadgefontsize: "Størrelse på merke",
            sspercentbadgefontsize: "Størrelse på merke",
            percentbadgeroundness: "Runding av merke",
            sspercentbadgeroundness: "Runding av merke",
            percentbadgex: "Horisontal Offset",
            sspercentbadgex: "Horisontal Offset",
            percentbadgey: "Vertikal Offset",
            sspercentbadgey: "Vertikal Offset",
            percentbadgeimg: "Bruk ikon",
            sspercentbadgeimg: "Bruk ikon",
            percentbadgeimgbronze: "Sjeldenhet: > $semirarity",
            sspercentbadgeimgbronze: "Sjeldenhet: > $semirarity",
            percentbadgeimgsilver: "Sjeldenhet: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Sjeldenhet: < $semirarity & > $rarity",
            percentbadgeimggold: "Sjeldenhet: < $rarity",
            sspercentbadgeimggold: "Sjeldenhet: < $rarity",
            resetpbimgs: "Tilbakestill badge-ikoner",
            elemsmatch: "Match tilpasserinnstillinger",
            ssdisplay: "Skjermbilde Forhåndsvisning"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Legg til hvilken som helst spill <span class="hl">AppID</span> for automatisk å bytte <span class="hl">temaer</span> når de oppdages`,
                `Ethvert lagret <span class="hl">tema</span> kan velges for hver varslingskategori, sammen med ønsket skjerm som skal brukes som <span class="hl">Skjermbildekilde</span>`,
                `<span class="hl" id="appidhelp"><u>Hvordan finner jeg en Steam-spills AppID?</u></span>`
            ],
            themeswitchnew: "Nytt automatisk bytte",
            themeswitchnewsub: [
                `Skriv inn spillets <span class="hl">AppID</span>, sammen med ønsket skjerm som skal brukes som <span class="hl">Skjermbildekilde</span>`,
                `Velg hvilket <span class="hl">tema</span> som skal byttes til for hver varslingskategori når dette spillets <span class="hl">AppID</span> oppdages`
            ],
            themeswitchedit: "Rediger automatisk bytte",
            themeswitcheditsub: [
                `Rediger ønsket skjerm som skal brukes som <span class="hl">skjermbildekilde</span> for dette spillets <span class="hl">AppID</span>`,
                `Endre hvilket <span class="hl">tema</span> som skal byttes til for hver meldingstype når dette spillets <span class="hl">AppID</span> oppdages`
            ],
            themes: "Temaer",
            src: "Skjermbildekilde",
            themedeleted: "Tema slettet"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Det ser ut som du prøver å aktivere valget <span class="hl">${opt}</span>, men dette valget kan ikke aktiveres uten at pakken <code class="dialogcode">${dep}</code> er installert først`,
    `Vennligst kjør <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> for å installere denne avhengigheten`
]