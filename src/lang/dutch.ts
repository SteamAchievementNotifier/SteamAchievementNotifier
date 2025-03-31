export const translations = {
    global: {
        main: "Hoofd",
        rare: "Zeldzaam",
        plat: "100%",
        test: "Meldingen testen",
        topleft: "Linksboven",
        topcenter: "Boven in het midden",
        topright: "Rechtsboven",
        bottomleft: "Linksonder",
        bottomcenter: "Onder in het midden",
        bottomright: "Rechtsonder",
        ok: "OK",
        preview: "Voorbeeld",
        save: "Opslaan",
        back: "Terug",
        settings: "Instellingen",
        appversion: "App-versie",
        image: "Afbeelding",
        audio: "Audio",
        folder: "Map",
        font: "Lettertype",
        select: "Selecteren",
        gametitle: "Speltitel",
        congrats: "Gefeliciteerd!",
        achievementunlocked: "Prestatie ontgrendeld",
        gamecomplete: "100% Voltooid",
        achievementdesc: "Klikte op de knop Testmelding weergeven",
        gamecompletedesc: "Je hebt alle prestaties ontgrendeld!",
        defaultcustomfont: "Standaard (Geen lettertype geselecteerd)",
        defaultsoundfile: "Standaard (Geen bestand geselecteerd)",
        defaultsounddir: "Standaard (Geen map geselecteerd)",
        nowtracking: "Volgt nu prestaties voor:",
        nopreview: "Voorbeeld niet beschikbaar voor het native besturingssysteem",
        options: "Opties",
        resetwindow: "Venster herstellen",
        show: "Weergeven",
        exit: "Afsluiten",
        releasegame: "Spel vrijgeven",
        releasegamesub: [
            `Herstart het achtergrondproces van de Worker en geef het huidige spel vrij om te worden gevolgd`,
            `Probeer deze optie als je onlangs een spel hebt gesloten, maar Steam toont het nog steeds als actief, of als Steam Achievement Notifier nog steeds een spel volgt dat al is gesloten`
        ],
        noupdateavailable: "Geen update beschikbaar",
        latestversion: "Laatste versie geïnstalleerd",
        missingdeps: "Ontbrekende afhankelijkheid",
        restartapp: "App Herstarten",
        restartappsub: [
            `Als dingen niet goed werken, gebruik deze optie om de app te sluiten en opnieuw te openen`,
            `Als het probleem aanhoudt na het herstarten van de app, overweeg dan om het te melden door de ingebouwde links op het startscherm te gebruiken`
        ],
        suspend: "Onderbreken",
        resume: "Hervatten",
        new: "Nieuw...",
        nodata: "Geen gegevens",
        findappid: "AppID vinden",
        findappidsub: [
            `Elk Steam-spel heeft een uniek nummer - genaamd een <span class="hl">AppID</span>. U kunt de bijbehorende AppID van elk Steam-spel vinden door een van de volgende methoden te controleren:`,
            `In de <span class="hl">Steam-client</span>, klik met de rechtermuisknop op een spel in uw <span class="hl">Bibliotheek</span> en selecteer <i>Eigenschappen</i> > <i>Updates</i> - de AppID wordt hier vermeld`,
            `De <span class="hl">URL</span> van de <span class="hl">Winkel pagina</span> van het spel - het zal het nummer zijn dat na <span class="hl">app/</span> wordt vermeld: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites zoals <span class="hl">SteamDB</span> - de sectie <span class="hl">App Info</span> zal de AppID voor elk spel vermelden`
        ],
        noexe: "EXE-bestand van het spel niet gevonden!",
        noexesub: "Klik hier voor meer informatie",
        noexedialogsub: [
            `Steam Achievement Notifier kon het uitvoerbare bestand van dit spel niet automatisch vinden. De locatie van het uitvoerbare bestand is vereist om het spel te "vrijgeven"`,
            `Om het spel handmatig vrij te geven, <i>klik met de rechtermuisknop</i> op het <span class="hl">Systeemvakpictogram</span> > <span class="hl">Opties</span> > <span class="hl">Spel vrijgeven</span>, of gebruik de <span class="hl">Sneltoets voor Spel Vrijgeven</span>`,
            `Klik anders op de knop <span class="hl">Koppelen</span> hieronder om het uitvoerbare bestand van het actieve venster toe te voegen aan het menu <span class="hl">Gekoppelde Spellen</span>`,
            `<span class="hl help" id="linkgamehelp"><u>Wat gebeurt er als ik op de knop Koppelen klik?</u></span>`
        ],
        linkgamehelp: "Koppel spel via venster",
        linkgamehelpsub: [
            `Door op de knop <span class="hl">Koppelen</span> te klikken, wordt automatisch een nieuw item toegevoegd aan het menu <span class="hl">Instellingen</span> > <span class="hl">Gekoppelde Spellen</span>, met informatie van het huidige actieve venster.`,
            `Na het klikken op de knop <span class="hl">Koppelen</span> start een timer van 5 seconden`,
            `Zorg ervoor dat het spelvenster gefocust is voordat de timer afloopt`,
            `Wanneer de timer afloopt, wordt een nieuw item voor de huidige <span class="hl">AppID</span> toegevoegd aan het menu <span class="hl">Instellingen</span> > <span class="hl">Gekoppelde Spellen</span>, met het uitvoerbare bestand van het actieve venster`,
            `Als je het opnieuw wilt proberen, verwijder dan het item via <span class="hl">Instellingen</span> > <span class="hl">Gekoppelde Spellen</span> door op de knop <span id="linkhelpunlink"></span> te klikken`
        ],
        addlinkfailed: "Kan venster niet koppelen",
        addlinkfailedsub: `Klik op de knop <span class="hl">Koppelen</span> om opnieuw te proberen`,
        webhookunlockmsg: "$user heeft een prestatie ontgrendeld",
        webhookunlockmsgplat: "$user ontgrendelde alle prestaties",
        webhookingame: "in $gamename",
        notconnected: "Niet verbonden",
        raloghelp: "Mijn spel wordt niet gedetecteerd",
        raenablelog: `Schakel emulator logbestanden in`,
        raenablelogsub: [
            `Om toegang te krijgen tot interne gebeurtenissen van ondersteunde emulators (zoals de huidige spelstatus, informatie over behaalde achievements, etc.), moeten <span class="hl">logbestanden</span> worden ingeschakeld in de geselecteerde emulators.<br><br>Elk logbestand wordt opgeslagen in de map <span class="hl">Logs</span> binnen de opgegeven directory van elke emulator.`,
            `<span class="hl">RetroArch</span>: Ga naar <i class="hllb">Instellingen > Loggen</i> en stel in: <i><span class="hllb">Logging Details</span>: <span class="hlgreen">AAN</span>, <span class="hllb">Frontend Logging Niveau</span>: <span class="hlgreen">1 (Info)</span></i> en <i><span class="hllb">Log naar Bestand</span>: <span class="hlgreen">AAN</span></i>`,
            `<span class="hl">Dolphin</span>: Ga naar <i class="hllb">Weergave > Toon Log Configuratie</i> en stel in: <i><span class="hllb">Details</span>: <span class="hlgreen">Info</span>, <span class="hllb">Logger Uitgangen</span> > <span class="hlgreen">Schrijf naar Bestand</span></i> en <i><span class="hllb">Logtypen</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></i>`,
            `<span class="hl">PCSX2</span>: Vink aan: <i class="hllb">Hulpmiddelen > Bestand Loggen Inschakelen</i>`
        ]
    },
    app: {
        content: {
            game: "Geen spel gedetecteerd",
            customise: "Aanpassen",
            test: "Toon testmelding"
        }
    },
    settings: {
        language: {
            title: "Taal",
            content: {
                steamlang: "Vertaal prestaties naar de taal van Steam",
                maxsteamlangretries: "Maximaal aantal vertaalpogingen"
            }
        },
        os: {
            title: "Besturingssysteem",
            content: {
                desktop: "Maak bureaublad snelkoppeling",
                startwin: "Starten bij aanmelden",
                startmin: "Start geminimaliseerd",
                nohwa: "Hardwareversnelling uitschakelen",
                litemode: "Lite modus"
            }
        },
        notifications: {
            title: "Meldingen",
            content: {
                rarity: "Zeldzaamheidspercentage",
                rareonly: "Alleen zeldzaam",
                all: "Alle",
                off: "Uit",
                showpercent: "Percentage tonen",
                soundonly: "Alleen geluid",
                nowtracking: "Toon volgwaarschuwing",
                nowtrackingscale: "Volgschaal",
                nowtrackingpos: "Volgpositie",
                shortcuts: "Meldings snelkoppelingen",
                noiconcache: "Pictogramcache uitschakelen",
                webhooks: "Plaatsen op Discord-server",
                webhooktypes: "Webhooktypes",
                webhookurl: `Webhook URL`,
                webhookcaution: `Door deze optie in te schakelen en een geldige Discord-webhook-link op te geven, ga je ermee akkoord dat je begrijpt dat <u>alle prestatie- en spelinformatie voor de huidige Steam-gebruiker</u> zal worden geplaatst op de opgegeven Discord-server via de verstrekte webhook-link.<br><br>Als je niet wilt dat Steam Achievement Notifier deze informatie namens jou plaatst, schakel dan deze optie uit.`,
                webhooklaststatus: "Laatste Status",
                webhookspoilers: `Spoilerlabel toevoegen`
            }
        },
        games: {
            title: "Spellen",
            content: {
                linkedgames: "Gekoppelde spellen",
                themeswitch: "Automatisch Thema's Wisselen",
                exclusionlist: "Uitsluitingslijst"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Stoom screenshot nemen",
                screenshots: "Extra media",
                off: "Uit",
                overlay: "Screenshot met meldingen-overlay",
                monitors: "Screenshot bron",
                hdrmode: "HDR-modus",
                ovpos: "Overlay positie",
                ovmatch: "Pas aanpas positie toe",
                ovx: "Horizontale verplaatsing",
                ovy: "Verticale verplaatsing",                
                ovpath: "Screenshot pad",
                ssdelay: "Screenshot vertraging",
                notifyimg: "Meldingsafbeelding",
                imgpath: "Afbeeldingspad",
                ssenabled: "Inschakelen",
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Streammeldingen",
                extwinframerate: "Beeldsnelheid",
                extwinshow: "Venster weergeven",
                audiosrc: "Audiobron",
                notify: "Melding",
                app: "App",
                off: "Gedempt",
                statwin: "Prestatiestatistiekenvenster",
                statwinaot: "Altijd bovenaan",
                noachievements: "Geen prestaties om weer te geven",
                startgame: "Start een spel om prestaties te tonen!",
                max: "Max",
                custom: "Aangepast...",
                statwinshortcut: "Overlay Snelkoppeling",
            }
        },
        accessibility: {
            title: "Toegankelijkheid",
            content: {
                noanim: "App-vensteranimaties uitschakelen",
                noupdatedialog: "Updatevenster uitschakelen",
                nvda: "NVDA-ondersteuning inschakelen",
                tooltips: "Tooltips weergeven",
                showsystrayopts: "Systeemvakopties Weergeven",
                releaseshortcut: "Sneltoets voor Spel Vrijgeven"
            }
        },
        advanced: {
            title: "Geavanceerd",
            content: {
                pollrate: "Pollfrequentie",
                initdelay: "Vertragingsbewaking",
                releasedelay: "Uitgavevertraging",
                maxretries: "Maximale Aantal Herpogingen",
                debug: "Debugpaneel",
                userust: "Alternatieve Verwerkingsmodus",
                notifydebug: "Melding Debugger Weergeven",
                usecustomfiles: "Aangepaste App-bestanden Gebruiken",
                showcustomfiles: "Aangepaste App-bestanden Weergeven"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulators",
                rauser: "Gebruikersnaam",
                rakey: "API Sleutel",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                ppspp: "PPSPP",
                installdir: "Gegevenspad",
                rapercenttype: "Percentage Type",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Voer het installatiepad in"
            }
        },
        misc: {
            title: "Diversen",
            content: {
                checkforupdates: "Controleren Op Updates",
                log: "Applicatielog",
                reset: "App resetten"
            }
        }
    },
    customiser: {
        preset: {
            title: "Voorinstelling",
            content: {
                preset: "Notificatie Voorinstelling",
                iconanim: "Zeldzame Icoonanimatie",
                alldetails: "Toon Alle Details",
                usepercent: "Gebruik Percentage",
                displaytime: "Weergavetijd",
                scale: "Schaal",
                customtext: "Aangepaste Tekst",
                usegametitle: "Gebruik Speltitel",
                customfont: "Aangepast Lettertype"
            }
        },
        sound: {
            title: "Geluid",
            content: {
                soundmode: "Geluidsmodus",
                file: "Bestand",
                folder: "Willekeurig",
                soundfile: "Geluidsbestand",
                sounddir: "Geluidmap",
                volume: "Volume"
            }
        },
        style: {
            title: "Stijl",
            content: {
                bgstyle: "Achtergrondstijl",
                solid: "Effen",
                gradient: "Verloop",
                img: "Afbeelding",
                gameart: "Spelkunst",
                gradientangle: "Verloop Hoek",
                bgimg: "Achtergrondafbeelding",
                bgimgbrightness: "Helderheid",
                brightness: "Helderheid",
                blur: "Vervagen",
                roundness: "Rondheid",
                fontsize: "Lettergrootte",
                usecustomfontsizes: "Aangepaste lettergroottes gebruiken",
                unlockmsgfontsize: "Ontgrendelingsbericht",
                titlefontsize: "Titel",
                descfontsize: "Beschrijving",
                opacity: "Doorzichtigheid",
                bgonly: "Alleen Achtergrond",
                glow: "Gloed",
                glowcolor: "Kleur",
                glowsize: "Grootte",
                glowx: "Horizontale Verschuiving",
                glowy: "Verticale Verschuiving",
                glowopacity: "Transparantie",
                glowanim: "Animatie",
                glowspeed: "Snelheid",
                glowrarity: "Zeldzaamheid gebruiken",
                glowcolorbronze: "Zeldzaamheid: > 50%",
                glowcolorsilver: "Zeldzaamheid: < 50% & > $rarity",
                glowcolorgold: "Zeldzaamheid: < $rarity",
                off: "Geen",
                pulse: "Puls",
                double: "Dubbel",
                focus: "Focus",
                orbit: "Omloop",
                fluorescent: "Fluorescerend",
                rainbow: "Regenboog",
                mask: "Masker",
                maskimg: "Masker afbeelding",
                outline: "Omlijning",
                outlinecolor: "Kleur van Omlijning",
                outlinewidth: "Breedte van Omlijning",
                dashed: "Gestreept",
                dotted: "Gestippeld"
            }
        },
        colors: {
            title: "Kleuren",
            content: {
                primarycolor: "Primaire Kleur",
                secondarycolor: "Secundaire Kleur",
                tertiarycolor: "Tertiaire Kleur",
                iconshadowcolor: "Schaduwkleur van zeldzaam pictogram",
                iconanimcolor: "Animatiekleur van zeldzaam pictogram",
                fontcolor: "Letterkleur",
                fontoutline: "Letteromlijning",
                fontoutlinecolor: "Kleur Letteromlijning",
                fontshadow: "Letter Schaduw",
                fontshadowcolor: "Kleur Letter Schaduw"
            }
        },
        icons: {
            title: "Iconen",
            content: {
                iconscale: "Pictogram schaal",
                iconroundness: "Icoon Ronding",
                plat: "100% Logo",
                usegameicon: "Gebruik Spelicoon",
                gameicontype: "Type spelpictogram",
                usecustomimgicon: "Aangepast pictogram gebruiken",
                customimgicon: "Aangepast pictogram",
                icon: "Pictogram",
                logo: "Logo",
                logoscale: "Logo schaal",
                decoration: "Decoratie",
                decorationscale: "Decoratie schaal",
                showdecoration: "Toon Decoratie",
                rarity: "Zeldzaamheid",
                showhiddenicon: "Toon Verborgen Pictogram",
                hiddenicon: "Verborgen Pictogram",
                replacelogo: "Vervang Logo"
            }
        },
        position: {
            title: "Positie",
            content: {
                pos: "Schermpositie",
                usecustompos: "Gebruik Aangepaste Positie",
                setcustompos: "Instellen",
                resetcustompos: "Herstel"
            }
        },
        theme: {
            title: "Thema",
            content: {
                updatetheme: "Thema Bijwerken",
                savetheme: "Thema Opslaan",
                sub: [
                    `Opgeslagen <span class="hl">Gebruikersthema's</span> kunnen worden geselecteerd uit het <span class="hl">Selecteer Thema</span> menu op het startscherm.`,
                    `Zorg ervoor dat de <span class="hl">Thema Naam</span> <u>uniek</u> is - een naam die overeenkomt met een bestaand thema <u>zal het vorige overschrijven</u>!`
                ],
                placeholder: "Thema Naam",
                theme: "Thema",
                importtheme: "Thema importeren",
                import: "Importeren",
                importsub: [
                    `Importeer een door de gebruiker aangemaakt <span class="hl">themabestand</span>`,
                    `<span class="hl">Geïmporteerde thema's</span> worden automatisch geladen zodra ze succesvol zijn geïmporteerd en kunnen worden geselecteerd in het <span class="hl">Thema selecteren</span> menu`,
                ],
                importidle: `Selecteer een <span class="hl">themabestand</span> om te importeren`,
                importcopied: `Thema succesvol gekopieerd`,
                importrenamed: `Thema succesvol hernoemd`,
                importextracted: `Thema succesvol uitgepakt`,
                importrewriting: `Themapad herschrijven...`,
                importconverting: `Thema converteren...`,
                importcreating: `Thema maken...`,
                importdone: `Thema succesvol geïmporteerd`,
                importfailed: `Fout bij het importeren van het geselecteerde themabestand!`,
                exporttheme: "Thema exporteren",
                export: "Exporteren",
                exporterrortitle: "Exportfout",
                exporterrorsub: [
                    "Er is een fout opgetreden bij het proberen het geselecteerde thema te exporteren",
                    `Probeer het huidige thema op te slaan (<i>via <span class="hl">Thema opslaan</span></i>) en probeer opnieuw te exporteren`,
                    `Als het probleem aanhoudt, kopieer dan de fout hieronder en rapporteer deze via de linkknoppen op het <span class="hl">Startscherm</span>`
                ],  
                synctheme: "Thema Synchroniseren",
                syncedwith: "Gesynchroniseerd met",
                themeselect: "Geselecteerd thema"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Dit is er gebeurd sinds de app werd gestart om",
            copylog: "Kopieer Log Inhoud"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Weet u het zeker?</span>
                    <span>Alle eerder geconfigureerde gegevens, <u>inclusief Aanpassingen</u>, worden teruggezet naar standaard.</span>
                    <span>🛑 Dit kan niet ongedaan worden gemaakt!</span>
                </div>
            `,
            reset: "Herstellen"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier is tegen een probleem aangelopen en moet worden gesloten.",
            details: "Hier zijn de foutdetails:",
            sub: "Klik op de knoppen hieronder om dit probleem te rapporteren via uw voorkeursplatform.",
            report: "Rapport",
            log: "App Log",
            exit: "Afsluiten"
        }
    },    
    tooltips: {
        game: "Het spel waarvoor prestaties momenteel worden gevolgd",
        usertheme: "Selecteer een eerder opgeslagen thema",
        customise: "Pas prestatienotificaties aan",
        test: "Toon een testmelding, inclusief eventuele aanpassingen",
        kofi: "Doneer op Ko-Fi!",
        discord: "Doe mee op Discord!",
        github: "Meld een probleem",
        lang: "Selecteer de UI-taal die in de app wordt gebruikt",
        steamlang: `Probeer vertalingen te laden die zich in de applicatiebestanden van Steam bevinden om prestatie-informatie weer te geven in de door de gebruiker gekozen taal van de Steam-client<br><br><span class="ttdesc">Deze optie probeert vertalingen te vinden in een JSON-bestand dat is opgeslagen in de applicatiegegevens van Steam. Als er geen vertaling voor de huidige prestatie kan worden gevonden, wordt in plaats daarvan prestatie-informatie weergegeven die is opgehaald uit Steamworks.</span>`,
        maxsteamlangretries: `Het aantal pogingen (per 100ms) om geldige vertalingen voor de huidige prestatie te vinden<br><br><span class="ttdesc">Steam slaat momenteel slechts een kleine hoeveelheid prestatiegegevens op in het bijbehorende JSON-bestand van elke game. Eventuele prestaties die niet in dit bestand aanwezig zijn, worden toegevoegd nadat de prestatie is ontgrendeld.<br><br>Aangezien het toevoegen van nieuwe gegevens tijd kan kosten, zal het verhogen van deze waarde de kans vergroten dat vertaalgegevens voor de huidige prestatie worden gevonden, maar het kan ook de melding op het scherm vertragen met de tijd die door deze instelling wordt berekend.<br><br>Als er geen geldige vertaalgegevens voor de huidige prestatie kunnen worden gevonden, wordt de vertaling teruggezet naar de taal die is gespecificeerd in Steamworks.</span>`,
        desktop: "Schakel een snelkoppeling op het bureaublad in om de app uit te voeren",
        startwin: "Start Steam Achievement Notifier automatisch na het inloggen",
        startmin: "Verberg het app-UI-venster na het starten totdat het wordt geopend vanuit het systeemvak",
        nohwa: `Hardwareversnelling uitschakelen, wat de prestaties kan verbeteren op systemen met minder middelen of systemen zonder een toegewijde GPU<br><br><span class="ttdesc">De app wordt opnieuw opgestart na het inschakelen/uitschakelen van deze optie</span>`,
        litemode: "Schakel alle interactieve UI-elementen uit en bied alleen beperkte app-functionaliteit via het systeemvakpictogram. Kan de bronnen die door de app worden verbruikt verbeteren",
        rarity: "Het percentage waarbij zeldzame prestatienotificaties worden geactiveerd. Elke prestatie met een ontgrendelingspercentage hoger dan deze waarde wordt weergegeven als een hoofdmelding",
        showpercent: "Toon het ontgrendelingspercentage van de prestatie in de melding voor de geselecteerde type(n)",
        soundonly: "Schakel meldingen uit en speel alleen geluiden af die zijn ingesteld via de Customiser",
        extwin: "Maak een venster dat alle meldingen dupliceert die momenteel op het scherm worden weergegeven. Dit venster kan vervolgens worden toegevoegd als een Window Capture-bron voor gebruik in streamingsoftware, zoals OBS",
        extwinframerate: "Stel de doelbeeldsnelheid in voor streammeldingen",
        extwinshow: `Schakel de zichtbaarheid van het Stream Notifications-venster in of uit<br><br><span class="ttdesc">Wanneer gefocust op de taakbalk, houd de <code class="ttcode">Ctrl</code>-toets ingedrukt om de huidige locatie van het venster weer te geven</span>`,
        audiosrc: "Selecteer de bron van (of schakel uit) audio die door de app wordt gegenereerd",
        nowtracking: "Toon een melding waarin de gebruiker wordt geïnformeerd dat prestaties voor een actief spel worden gevolgd",
        nowtrackingscale: `Stel de grootte van de volgwaarschuwing in`,
        nowtrackingpos: `Stel de positie van de volgnmelding in`,
        shortcuts: "Activeer een testmelding via een sneltoets. Sneltoetsen kunnen worden aangepast voor elk meldingstype",
        noiconcache: `Schakel het cachen van prestatiepictogrammen uit bij het starten van spellen.<br><br><span class="ttdesc">Dit kan de app-prestaties aanzienlijk verbeteren bij het starten van spellen en kan ook problemen met het volgen oplossen bij spellen met een groot aantal prestaties. Het uitschakelen van de pictogramcache kan echter in zeldzame gevallen leiden tot het ontbreken van prestatiepictogrammen in meldingen</span>`,
        steamss: "Maak een Steam-screenshot wanneer een prestatie wordt ontgrendeld",
        screenshots: "Selecteer het type Extra Media dat moet worden gemaakt wanneer een melding wordt weergegeven",
        monitors: "De monitor die wordt vastgelegd bij het maken van de screenshot",
        hdrmode: `Maak screenshots met een methode die compatibel is met monitoren die High Dynamic Range (HDR) gebruiken`,
        ovpos: "De positie van de meldingen-overlay in de screenshot",
        ovmatch: "Pas de schermpositie aan die is ingesteld in de Customiser voor dit meldingstype",
        ovpath: "De locatie waar screenshots die door deze optie worden gegenereerd, worden opgeslagen",
        ssdelay: "Voeg een vertraging toe vanaf het moment dat de melding optreedt tot het moment dat de screenshot wordt gemaakt",
        sspreview: "Toon een voorbeeld van hoe de screenshot eruit zal zien wanneer deze is opgeslagen",
        noanim: "Schakel alle vensteranimaties en overgangseffecten in de app uit",
        noupdatedialog: `Voorkom dat het <span class="hl">Beschikbare update</span>-venster automatisch wordt weergegeven en gefocust<br><br><span class="ttdesc">Het venster kan nog steeds worden geopend door op de updateknop te klikken wanneer deze beschikbaar is</span>`,
        nvda: "Schakel het kopiëren van prestatie-informatie naar het klembord in wanneer een prestatie wordt ontgrendeld, om te worden gelezen door schermlezer-software, zoals NVDA",
        tooltips: "Toon tooltips bij het zweven over bepaalde UI-elementen",
        pollrate: `Stel het update-interval in voor prestatiegegevens tijdens het spelen<br><br><span class="ttdesc">De prestaties kunnen toenemen/afnemen, afhankelijk van de waarde of de hardware van het systeem. Hogere waarden resulteren doorgaans in lagere systeembelasting, maar kunnen notificaties vertragen</span>`,
        initdelay: `Stel de vertraging in tussen de detectie van de huidige <span class="hl">AppID</span> en wanneer het volgen van processen/prestaties begint<br><br><span class="ttdesc">Het verhogen van deze waarde kan scenario's voorkomen waarin Steam niet in staat is om het huidige spel te starten (doordat de app Steamworks initialiseert voordat het spel is gestart)</span><br><br><span class="ttdesc">Als alternatief kan het verhogen van deze waarde ook worden gebruikt om onjuiste detectie van pre-game launcher-processen te omzeilen</span>`,
        releasedelay: `Stel in hoelang het achtergrondproces moet wachten om opnieuw op te starten nadat het huidige spel is uitgebracht. Beïnvloedt zowel automatische procesbewaking als handmatig gekoppelde spellen.<br><br><span class="ttdesc">Biedt een langere tijdsperiode om Steamworks volledig vrij te geven van de app. Het verhogen van deze waarde kan ongebruikelijk gedrag voorkomen, zoals het volgen van een eerder gesloten spel</span>`,
        maxretries: `Stel het maximale aantal pogingen in om een lopend proces te koppelen aan een gedetecteerde AppID. Beïnvloedt zowel automatische procesbewaking als handmatig gekoppelde spellen.<br><br><span class="ttdesc">Pogingen tot koppeling worden één keer per seconde uitgevoerd. Als een lopend proces niet is gekoppeld aan de huidige AppID na dit aantal pogingen, wordt een ongeldig proces geretourneerd. In dergelijke gevallen moet het spel handmatig worden vrijgegeven via Systeemvak > Opties > Spel Vrijgeven</span>`,
        debug: "Open het Debugpaneel, dat gedetailleerde procesvolginformatie weergeeft",
        userust: "Gebruik een alternatieve Rust-gebaseerde functie om te controleren of de getrackte gameprocessen momenteel actief zijn op het systeem. Wanneer niet aangevinkt, zal de standaard NodeJS-gebaseerde procescontrole in plaats daarvan worden gebruikt.",
        notifydebug: "Maak een DevTools-venster voor alle meldingen. Handig voor het oplossen van problemen met meldingen",
        usecustomfiles: "Hiermee kunnen meldingen gebruikersaanpasbare bestanden laden. Voorzichtigheid is geboden voor reguliere gebruikers",
        showcustomfiles: "Open de locatie van de aangepaste bestanden",
        log: "Open het App-logvenster, waarin informatie wordt weergegeven over procesactiviteit, waarschuwingen en fouten",
        reset: "Verwijder alle configuratiegegevens en start de app opnieuw",
        playback: "Pauzeer/hervat de animatie van de meldingsvoorbeeld",
        replay: "Start de animatie van de meldingsvoorbeeld opnieuw",
        preset: "Selecteer het meldingsvoorinstelling om aan te passen",
        iconanim: "Schakel de rand en animatie van het zeldzame pictogram in",
        alldetails: "Toon alle tekstelementen in de melding, inclusief die standaard verborgen zijn voor deze voorinstelling",
        usepercent: "Toon het ontgrendelingspercentage van de prestatie, in plaats van de XP/S-waarde",
        displaytime: "Stel het aantal seconden in dat de melding wordt weergegeven",
        scale: "Vergroot of verklein de grootte van de melding",
        customtext: "Stel een aangepast bericht in dat binnen de melding wordt weergegeven",
        usegametitle: "Toon de titel van het huidige spel in de melding",
        customfont: "Laad een aangepast lettertype dat binnen de melding wordt gebruikt",
        soundmode: "Selecteer een enkel audiobestand of een willekeurig geselecteerd audiobestand uit een map met meerdere audiobestanden wanneer een melding optreedt",
        soundfile: "Selecteer een audiobestand dat wordt afgespeeld wanneer een melding optreedt",
        sounddir: "Selecteer een map waaruit een audiobestand willekeurig wordt geselecteerd wanneer een melding optreedt",
        volume: "Stel het afspeelvolume van het audiobestand in",
        preview: "Bekijk het geselecteerde audiobestand of een willekeurig geselecteerd audiobestand uit de map",
        bgstyle: "Selecteer de stijl voor de achtergrond van de melding",
        gradientangle: "Stel de hoek van de gradiënt in",
        bgimg: "Laad een afbeeldingsbestand om als achtergrond van de melding te gebruiken",
        bgimgbrightness: "Stel de helderheid in van de afbeelding die als achtergrond voor de melding wordt gebruikt",
        brightness: "Stel de helderheid in van de game-art die als achtergrond van de melding wordt gebruikt",
        blur: "Stel het niveau van vervaging in dat wordt toegepast op de achtergrond van de melding",
        roundness: "Stel de rondheid van de meldingsranden in",
        fontsize: "Stel de grootte van het lettertype in dat in de melding wordt gebruikt",
        opacity: "Stel de algehele dekking van de melding in",
        bgonly: "Stel alleen de dekking in voor de meldingsachtergrond en behoud andere elementen op volledige dekking",
        glow: "Activeer een gloei-effect dat de melding omringt",
        glowcolor: "Stel de kleur van het gloei-effect in",
        glowsize: "Stel de grootte van het gloei-effect in",
        glowx: "Verschuif de positie van het gloeieffect horizontaal",
        glowy: "Verschuif de positie van het gloeieffect verticaal",
        glowopacity: "Stel de transparantie van het gloeieffect in",
        glowanim: "Kies een vooraf ingestelde animatie die moet worden toegepast op het gloei-effect",
        glowspeed: "Stel de snelheid van de animatie in die wordt toegepast op het gloei-effect",
        glowrarity: "Wijzigt de kleur van het gloedeffect op basis van de zeldzaamheid van de ontgrendelde prestatie",
        glowcolorbronze: "De kleur van de gloed wanneer het ontgrendelingspercentage > 50% is",
        glowcolorsilver: "De kleur van de gloed wanneer het ontgrendelingspercentage < 50% en > $rarity is",
        glowcolorgold: "De kleur van de gloed wanneer het ontgrendelingspercentage < $rarity is",
        mask: "Activeer het maskeren van delen van de melding met een aangepaste afbeelding",
        maskimg: `Laad een afbeeldingsbestand om te gebruiken als masker<br><br><span class="ttdesc">In CSS werkt <code class="ttcode">mask-mode: alpha</code> op een tegenovergestelde manier dan verwacht - gebieden van transparantie in het afbeeldingsbestand worden verborgen en gebieden van zwart/grijs laten de elementen eronder zichtbaar zijn</span>`,
        outline: "Selecteer het type omlijning om rond de melding te tonen",
        outlinecolor: "Stel de kleur in van de omlijning rond de melding",
        outlinewidth: "Stel de breedte in van de omlijning rond de melding",
        primarycolor: "Stel de primaire kleur van de melding in",
        secondarycolor: "Stel de secundaire kleur van de melding in",
        tertiarycolor: "Stel de tertiaire kleur van de melding in",
        fontcolor: "Stel de kleur in van alle tekst die binnen de melding wordt weergegeven",
        fontoutline: "Voeg een contour toe aan alle tekst die binnen de melding wordt weergegeven",
        fontoutlinecolor: "Stel de kleur in van de tekstcontour",
        fontshadow: "Voeg een schaduw toe aan alle tekst die binnen de melding wordt weergegeven",
        fontshadowcolor: "Stel de kleur in van de tekstschaduw",
        iconroundness: "Stel de rondheid in van het prestatie-/spelpictogram dat binnen de melding wordt weergegeven",
        plat: "Laad een afbeeldingsbestand om als 100% pictogram te gebruiken",
        usegameicon: "Vervang het pictogram van de ontgrendelde prestatie door het pictogram van het huidige spel",
        gameicontype: `Selecteer welk type afbeelding als spelpictogram wordt weergegeven`,
        usecustomimgicon: "Vervang het pictogram van de ontgrendelde prestatie door een aangepast afbeeldingsbestand",
        customimgicon: "Laad een afbeeldingsbestand om te gebruiken als aangepast pictogram",
        showhiddenicon: "Toon een afbeelding die aangeeft dat de prestatie verborgen is in de melding",
        hiddenicon: "Laad een afbeeldingsbestand om het verborgen prestatiepictogram te vervangen",
        logo: "Laad een afbeeldingsbestand om het Logo-pictogram te vervangen",
        decoration: "Laad een afbeeldingsbestand om de Decoratie te vervangen",
        showdecoration: "Schakel de zichtbaarheid van de Decoratie in/uit",
        replacelogo: `Vervangt het Logo icoon in de prestatie melding met de geselecteerde Decoratie`,
        pos: "Stel de on-screen positie van de melding in",
        usecustompos: "Schakel aangepaste positionering in voor de melding",
        setcustompos: "Stel de aangepaste positie voor de melding in",
        resetcustompos: "Stel de positie van de melding opnieuw in op de standaard aangepaste positie",
        updatetheme: "Het huidige Thema bijwerken met de geselecteerde aanpassingsopties",
        savetheme: "Sla alle geconfigureerde aanpassingsopties op als een nieuw thema",
        visibilitybtn: "Wijzig de zichtbaarheid van het element in Customiser-voorbeelden en Testmeldingen",
        delbtn: "Stel het element terug naar de standaardwaarde",
        imgpath: "De locatie waar meldingsafbeeldingen die door deze optie zijn gegenereerd, worden opgeslagen",
        ssenabled: "In- of uitschakelen van het genereren van media voor dit type",
        checkforupdates: `Controleer of er een nieuwe app-versie is uitgebracht op GitHub. Als er een update beschikbaar is, wordt deze automatisch gedownload en geïnstalleerd zodra deze is bevestigd via de <span class="hl">Update Beschikbaar</span> dialoog`,
        linkedgames: `Omzeil <span class="hl">automatische procestracking</span> voor specifieke Steam-spellen<br><br><span class="ttdesc">Deze optie moet alleen worden gebruikt in zeer specifieke scenario's. Gebruikers hoeven deze optie normaal gesproken niet te gebruiken!</span>`,
        exclusionlist: `Voorkom dat prestaties in specifieke Steam-spellen door de app worden gevolgd<br><br><span class="ttdesc">Deze optie moet alleen worden gebruikt in zeer specifieke scenario's. Gebruikers hoeven deze optie normaal gesproken niet te gebruiken!</span>`,
        ovx: "Verplaats de melding die op de schermafbeelding wordt weergegeven horizontaal",
        ovy: "Verplaats de melding die op de schermafbeelding wordt weergegeven verticaal",
        importtheme: `Importeer aanpassingen via een door de gebruiker aangemaakt <span class="hl">themabestand</span>`,
        exporttheme: `Exporteer het momenteel geselecteerde <span class="hl">thema</span> voor delen<br><br><span class="ttdesc">Controleer voor het exporteren of het gewenste <span class="hl">thema</span> is geselecteerd (via het menu <span class="hl">Thema selecteren</span>). Zorg er ook voor dat aanpassingen zijn opgeslagen in het geselecteerde <span class="hl">thema</span> (via het menu <span class="hl">Thema opslaan</span>)<br><br><u>Eventuele aanpassingen die nog niet zijn opgeslagen in het huidige <span class="hl">thema</span> worden niet geëxporteerd!</u></span>`,
        webhooks: "Gebruik een webhook-URL om een bericht te plaatsen in een Discord-server wanneer een prestatie is ontgrendeld",
        webhookmain: `Schakel in of informatie over prestaties naar een Discord-server moet worden verzonden wanneer een hoofdprestatie wordt ontgrendeld`,
        webhookrare: "Schakel in of informatie over prestaties naar een Discord-server moet worden verzonden wanneer een zeldzame prestatie wordt ontgrendeld",
        webhookplat: "Schakel in of informatie over prestaties naar een Discord-server moet worden verzonden wanneer een 100%-prestatie wordt ontgrendeld",
        webhooktest: "Schakel in of er testinformatie naar een Discord-server moet worden gestuurd wanneer testmeldingen van welk type dan ook worden geactiveerd",
        webhookurl: `Stel de <span class="hl">webhook-URL</span> in voor de gewenste Discord-server<br><br><span class="ttdesc">Een <span class="hl">webhook-URL</span> wordt gebruikt om namens een gebruiker of applicatie te plaatsen in een Discord-server/kanaal. Om een nieuwe webhook in te stellen voor een Discord-server, moet de gebruiker een rol hebben binnen de gewenste server die het maken van webhooks toestaat<br><br><u>Een webhook-URL is vereist bij gebruik van deze optie</u><br><br>Raadpleeg de officiële documentatie van Discord voor meer informatie</span>`,
        webhookspoilers: `Voeg een spoilerlabel toe aan "Verborgen" prestaties bij het posten naar Discord`,
        unlockmsg: "Stel de positie in van het ontgrendelbericht/aangepaste tekst binnen de $type",
        title: "Stel de positie in van de prestatie titel binnen de $type",
        desc: "Stel de positie in van de prestatie beschrijving binnen de $type",
        notification: "melding",
        screenshot: "screenshot",
        percentpos: "Stel de positie in van het zeldzaamheidspercentage binnen de $type",
        sspercentpos: "Stel de positie in van het zeldzaamheidspercentage binnen de $type",
        hiddeniconpos: "Stel de positie in van het verborgen/geheime prestatie-icoon binnen de $type",
        sshiddeniconpos: "Stel de positie in van het verborgen/geheime prestatie-icoon binnen de $type",
        decorationpos: "Stel de positie in van het decoratie-element binnen de $type",
        ssdecorationpos: "Stel de positie in van het decoratie-element binnen de $type",
        percentbadge: "Toon het ontgrendelpercentage binnen een badge boven het pictogram van de prestatie/het spel",
        sspercentbadge: "Toon het ontgrendelpercentage binnen een badge boven het pictogram van de prestatie/het spel",
        percentbadgepos: "Stel de positie van de badge in",
        sspercentbadgepos: "Stel de positie van de badge in",
        percentbadgecolor: "Stel de achtergrondkleur van de badge in",
        sspercentbadgecolor: "Stel de achtergrondkleur van de badge in",
        percentbadgefontsize: "Stel de grootte van de badge in",
        sspercentbadgefontsize: "Stel de grootte van de badge in",
        percentbadgefontcolor: "Stel de letterkleur van de badge in",
        sspercentbadgefontcolor: "Stel de letterkleur van de badge in",
        percentbadgeroundness: "Stel de afgerondheid van de badge in",
        sspercentbadgeroundness: "Stel de afgerondheid van de badge in",
        percentbadgex: "Verplaats de positie van het badge-element horizontaal",
        sspercentbadgex: "Verplaats de positie van het badge-element horizontaal",
        percentbadgey: "Verplaats de positie van het badge-element verticaal",
        sspercentbadgey: "Verplaats de positie van het badge-element verticaal",
        percentbadgeimg: "Toon een op zeldzaamheid gebaseerd pictogram als badge-element",
        sspercentbadgeimg: "Toon een op zeldzaamheid gebaseerd pictogram als badge-element",
        percentbadgeimgbronze: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage > 50% is",
        sspercentbadgeimgbronze: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage > 50% is",
        percentbadgeimgsilver: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage < 50% en > $rarity is",
        sspercentbadgeimgsilver: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage < 50% en > $rarity is",
        percentbadgeimggold: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage < $rarity is",
        sspercentbadgeimggold: "Het badge-pictogram dat wordt weergegeven wanneer het ontgrendelingspercentage < $rarity is",
        resetpbimgs: "Alle badge-pictogrammen terugzetten naar standaard",
        elemsmatch: `Stem de instellingen van de meldingelementen af op die in de Customiser voor dit meldingstype<br><br><span class="ttdesc">Sommige meldingssjablonen kunnen niet volledig overeenkomen met de Customiser-instellingen vanwege verschillen tussen scherm- en schermafbeelding-gebaseerde meldingen</span>`,
        themeswitch: `Wissel automatisch naar een opgeslagen <span class="hl">Thema</span> wanneer een specifiek spel wordt gedetecteerd`,
        userthemesync: `Synchroniseer aanpassingen in het geselecteerde <span class="hl">Thema</span> naar alle andere meldingstypen`,
        showsystrayopts: `Weergeef alle opties die normaal te vinden zijn onder <span class="hl">Systeemvak</span> > <span class="hl">Opties</span> in <span class="hl">Instellingen</span> > <span class="hl">Diversen</span>`,
        releaseshortcut: "Geef het momenteel gevolgde spel vrij met de opgegeven sneltoets",
        themeselect: "Selecteer een eerder opgeslagen Thema",
        statwin: `Toon configureerbare prestatiestatistieken voor het huidige spel in een extern venster<br><br><span class="ttdesc">Wanneer gebruikt in combinatie met de optie <span class="hl">Vertaal Prestaties naar de Steam-taal</span>, kunnen sommige vertalingen pas beschikbaar zijn zodra de specifieke prestatie is ontgrendeld</span>`,
        statwinaot: `Stel het venster voor Prestatiestatistieken in op de modus "Altijd bovenaan", zodat het venster boven het spelvenster wordt weergegeven<br><br><span class="ttdesc">Wanneer deze optie is ingeschakeld, registreert het venster voor Prestatiestatistieken geen gebruikersinteracties meer, zoals "klik"-gebeurtenissen. Om interactie met het venster opnieuw in te schakelen, moet deze optie worden uitgeschakeld</span>`,
        statwinshortcut: "Schakel de Achievement Stats Overlay in met de opgegeven sneltoets",
        ssdisplay: "Toon een voorbeeld van de vastgelegde schermafbeelding in de melding",
        iconscale: "Vergroot of verklein de grootte van het prestatiepictogram",
        iconshadowcolor: "Stel de kleur in van het schaduweffect rond het prestatiepictogram bij het ontgrendelen van een zeldzame prestatie",
        iconanimcolor: "Stel de kleur in van het animatie-effect achter het prestatiepictogram bij het ontgrendelen van een zeldzame prestatie",
        logoscale: "Vergroot of verklein de grootte van het logo-element binnen de notificatie",
        decorationscale: "Vergroot of verklein de grootte van het decoratie-element binnen de notificatie",
        usecustomfontsizes: `Vergroot of verklein afzonderlijk de grootte van tekstelementen binnen de notificatie<br><br><span class="ttdesc">Behoud van de oorspronkelijke lay-out van de notificatie kan niet worden gegarandeerd bij het wijzigen van individuele lettergroottes</span>`,
        unlockmsgfontsize: "Vergroot of verklein de grootte van het tekstelement voor het ontgrendelingsbericht",
        titlefontsize: "Vergroot of verklein de grootte van het tekstelement voor de prestatietitel",
        descfontsize: "Vergroot of verklein de grootte van het tekstelement voor de prestatiebeschrijving",
        webhookembedcolormain: "Stel de kleur in die wordt gebruikt in de webhook-embed bij het ontgrendelen van een hoofdprestatie",
        webhookembedcolorrare: "Stel de kleur in die wordt gebruikt in de webhook-embed bij het ontgrendelen van een zeldzame prestatie",
        webhookembedcolorplat: "Stel de kleur in die wordt gebruikt in de webhook-embed bij het ontgrendelen van een 100% prestatie",
        raemus: "Meldingen weergeven wanneer spellen worden gedetecteerd in ondersteunde emulators",
        rauser: "Stel de Retro Achievements-gebruikersnaam in om achievements bij te houden",
        rakey: `Stel de Web API Sleutel in voor authenticatie met de Retro Achievements API<br><br><span class="ttdesc">Een Web API Sleutel kan worden gekopieerd of opnieuw gegenereerd door in te loggen op de Retro Achievements-website en te navigeren naar Instellingen > Sleutels > Web API Sleutel<br><br>🔒 De ingevoerde sleutel wordt versleuteld voordat deze lokaal op het systeem wordt opgeslagen</span>`,
        rapercenttype: "Stel in of het percentage ontgrendelde Hardcore- of Softcore-achievements wordt weergegeven in meldingen",
        retroarch: `Toon Retro Achievements-meldingen voor games die worden geëmuleerd via RetroArch<br><br><span class="ttdesc"><i class="hllb">RetroArch > Instellingen > Logboekregistratie</i> moet geconfigureerd worden met de volgende instellingen:<br><br><ul><li><span class="hllb">Details logboekregistratie</span>: <span class="hlgreen">AAN</span></li><li><span class="hllb">Frontend-logniveau</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Log naar bestand</span>: <span class="hlgreen">AAN</span></li></ul></span>`,  
        dolphin: `Toon Retro Achievements-meldingen voor games die worden geëmuleerd via Dolphin<br><br><span class="ttdesc"><i class="hllb">Dolphin > Weergave > Toon logconfiguratie</i> moet geconfigureerd worden met de volgende instellingen:<br><br><ul><li><span class="hllb">Detailniveau</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Log-uitvoer</span> > <span class="hlgreen">Schrijven naar bestand</span></li><li><span class="hllb">Logtypen</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li></ul></span>`,  
        pcsx2: `Toon Retro Achievements-meldingen voor games die worden geëmuleerd via PCSX2<br><br><span class="ttdesc"><i class="hllb">PCSX2 > Hulpmiddelen > Bestand-logboekregistratie inschakelen</i> moet ingeschakeld zijn</span>`,  
        retroarchpath: `Stel het pad in naar de map die de "Logs"-map voor RetroArch bevat<br><br><span class="ttdesc">RetroArch-gegevens worden opgeslagen in de installatiemap van de applicatie</span>`,  
        dolphinpath: `Stel het pad in naar de map die de "Logs"-map voor Dolphin bevat<br><br><span class="ttdesc">Dolphin-gegevens worden opgeslagen op een van de volgende locaties:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu</span></li></ul></span>`,  
        pcsx2path: `Stel het pad in naar de map die de "Logs"-map voor PCSX2 bevat<br><br><span class="ttdesc">PCSX2-gegevens worden opgeslagen in de installatiemap van de applicatie</span>`,  
    },
    update: {
        updateavailable: "Update beschikbaar",
        sub: [
            `<span id="newversion"></span>`,
            "Er is een nieuwe update beschikbaar voor Steam Achievement Notifier!",
            `Volledige release-opmerkingen beschikbaar op <span id="discordreleasenotes"></span> en <span id="githubreleasenotes"></span>`
        ],
        update: "Update"
    },
    linkgame: {
        content: {
            exepath: "Pad naar uitvoerbaar bestand",
            managesub: [
                `Koppel handmatig het <span class="hl">uitvoerbare bestand</span> van een spel aan een specifieke <span class="hl">AppID</span>, of <span class="hl">ontkoppel</span> een bestaande`,
                `Steam Achievement Notifier zal niet langer <span class="hl">automatisch proces tracking</span> gebruiken voor eventuele <span class="hl">gekoppelde spellen</span> - in plaats daarvan zal het gespecificeerde <span class="hl">uitvoerbare bestand</span> worden gevolgd wanneer de bijbehorende <span class="hl">AppID</span> wordt gedetecteerd`,
                `<span class="hl" id="appidhelp"><u>Hoe vind ik de AppID van een Steam-spel?</u></span>`
            ],
            linknew: "Nieuw Gekoppeld Spel",
            linknewsub: [
                `Maak een nieuwe koppeling tussen een <span class="hl">spel uitvoerbaar bestand</span> en de bijbehorende <span class="hl">AppID</span>`,
                `Eenmaal gemaakt, kunnen koppelingen worden <span class="hl">ontkoppeld</span> via het vorige <span class="hl">Beheer Gekoppelde Spellen</span> dialoogvenster`
            ],
            link: "Koppelen"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Voeg de <span class="hl">AppID</span> van elk Steam-spel toe aan de <span class="hl">uitsluitingslijst</span>`,
                `Steam Achievement Notifier zal niet proberen prestatiegegevens te volgen voor elk spel waarvan de <span class="hl">AppID</span> is toegevoegd aan de <span class="hl">uitsluitingslijst</span>`,
                `<span class="hl" id="appidhelp"><u>Hoe vind ik de AppID van een Steam-spel?</u></span>`
            ],
            exclusionnew: "Nieuwe uitsluiting",
            exclusionnewsub: [
                `Voer de <span class="hl">AppID</span> in om deze toe te voegen aan de <span class="hl">uitsluitingslijst</span>`
            ]
        }
    },
    notificationelems: {
        title: "Meldingselementen",
        content: {
            unlockmsg: "Ontgrendelbericht",
            title: "Prestatie Titel",
            desc: "Prestatie Beschrijving",
            hiddeniconpos: "Verborgen Icoon",
            sshiddeniconpos: "Verborgen Icoon",
            decorationpos: "Decoratie",
            ssdecorationpos: "Decoratie",
            percentpos: "Zeldzaamheidspercentage",
            sspercentpos: "Zeldzaamheidspercentage",
            percentbadge: "Percentage Badge",
            sspercentbadge: "Percentage Badge",
            percentbadgepos: "Badgepositie",
            sspercentbadgepos: "Badgepositie",
            percentbadgecolor: "Badgekleur",
            sspercentbadgecolor: "Badgekleur",
            percentbadgefontsize: "Badgrootte",
            percentbadgefontcolor: "Badge Letterkleur",
            sspercentbadgefontcolor: "Badge Letterkleur",
            sspercentbadgefontsize: "Badgrootte",
            percentbadgeroundness: "Badge-afgerondheid",
            sspercentbadgeroundness: "Badge-afgerondheid",
            percentbadgex: "Horizontale Verplaatsing",
            sspercentbadgex: "Horizontale Verplaatsing",
            percentbadgey: "Verticale Verplaatsing",
            sspercentbadgey: "Verticale Verplaatsing",
            percentbadgeimg: "Gebruik Pictogram",
            sspercentbadgeimg: "Gebruik Pictogram",
            percentbadgeimgbronze: "Zeldzaamheid: > 50%",
            sspercentbadgeimgbronze: "Zeldzaamheid: > 50%",
            percentbadgeimgsilver: "Zeldzaamheid: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Zeldzaamheid: < 50% & > $rarity%",
            percentbadgeimggold: "Zeldzaamheid: < $rarity%",
            sspercentbadgeimggold: "Zeldzaamheid: < $rarity%",
            resetpbimgs: "Badge-pictogrammen Terugzetten",
            elemsmatch: "Customiser-instellingen Overeenstemmen",
            ssdisplay: "Schermafbeelding Voorbeeld"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Voeg de <span class="hl">AppID</span> van een spel toe om automatisch <span class="hl">Thema's</span> te wisselen wanneer het wordt gedetecteerd`,
                `Elk opgeslagen <span class="hl">Thema</span> kan worden geselecteerd voor elk meldingstype, samen met de gewenste monitor om te gebruiken als <span class="hl">Schermafbeeldingsbron</span>`,
                `<span class="hl" id="appidhelp"><u>Hoe vind ik de AppID van een Steam-spel?</u></span>`
            ],
            themeswitchnew: "Nieuwe Automatische Wissel",
            themeswitchnewsub: [
                `Voer de <span class="hl">AppID</span> van het spel in, samen met de gewenste monitor om te gebruiken als <span class="hl">Schermafbeeldingsbron</span>`,
                `Selecteer welk <span class="hl">Thema</span> moet worden gewisseld voor elk meldingstype wanneer de <span class="hl">AppID</span> van dit spel wordt gedetecteerd`
            ],
            themes: "Thema's",
            src: "Schermafbeeldingsbron",
            themedeleted: "Thema verwijderd"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Het lijkt erop dat je probeert de optie <span class="hl">${opt}</span> in te schakelen. Op Linux-systemen kunnen screenshots echter niet worden ingeschakeld zonder eerst het pakket <code class="dialogcode">${dep}</code> te installeren`,
    `Voer alstublieft <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> uit om deze afhankelijkheid te installeren. Dit zorgt ervoor dat screenshots kunnen worden gemaakt op dit apparaat`
]