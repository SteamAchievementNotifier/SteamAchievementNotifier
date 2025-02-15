export const translations = {
    global: {
        main: "Hoved",
        rare: "Sjælden",
        plat: "100%",
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
            `Steam Achievement Notifier kunne ikke automatisk finde spillets eksekverbare fil. Placeringen af den eksekverbare fil er nødvendig for at "frigive" spillet`,
            `For at frigive spillet manuelt skal du <i>højreklikke</i> på <span class="hl">systembakke-ikonet</span> > <span class="hl">Indstillinger</span> > <span class="hl">Frigiv spil</span>, eller bruge <span class="hl">Genvej til frigivelse af spil</span>`,
            `Alternativt kan du klikke på knappen <span class="hl">Link</span> nedenfor for at tilføje den eksekverbare fil, der er forbundet med det aktive vindue, til menuen <span class="hl">Linkede spil</span>`,
            `<span class="hl help" id="linkgamehelp"><u>Hvad sker der, når jeg klikker på Link-knappen?</u></span>`
        ],
        linkgamehelp: "Link spil via vindue",
        linkgamehelpsub: [
            `Ved at klikke på knappen <span class="hl">Link</span> tilføjes en ny post automatisk til menuen <span class="hl">Indstillinger</span> > <span class="hl">Linkede spil</span> med oplysninger fra det aktuelt aktive vindue.`,
            `Efter du har klikket på knappen <span class="hl">Link</span>, starter en nedtælling på 5 sekunder`,
            `Før nedtællingen slutter, skal du fokusere på spilvinduet`,
            `Når nedtællingen er slut, tilføjes en ny post for den aktuelle <span class="hl">AppID</span> til menuen <span class="hl">Indstillinger</span> > <span class="hl">Linkede spil</span> med den eksekverbare fil, der er forbundet med det aktive vindue`,
            `Hvis du har brug for at prøve igen, skal du fjerne posten via <span class="hl">Indstillinger</span> > <span class="hl">Linkede spil</span> ved at klikke på knappen <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Kunne ikke linke vindue",
        addlinkfailedsub: `Klik på knappen <span class="hl">Link</span> for at prøve igen`,
        webhookunlockmsg: "$user låste op for en præstation",
        webhookunlockmsgplat: "$user låste op for alle præstationer",
        webhookingame: "i $gamename",
        notconnected: "Ikke forbundet"
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
                webhookspoilers: `Tilføj spoiler-mærke`
            }
        },
        games: {
            title: "Spil",
            content: {
                linkedgames: "Forbundne spil",
                themeswitch: "Automatisk skift af tema",
                exclusionlist: "Udelukkelsesliste"
            }
        },
        media: {
            title: "Medier",
            content: {
                steamss: "Tag Steam-screenshot",
                screenshots: "Yderligere medier",
                off: "Fra",
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
                releaseshortcut: "Genvej til frigivelse af spil"
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
                usecustomfiles: "Brug tilpassede app-filer",
                showcustomfiles: "Vis tilpassede app-filer"
            }
        },        
        misc: {
            title: "Diverse",
            content: {
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
                bgimgbrightness: "Lysstyrke",
                brightness: "Lysstyrke",
                blur: "Sløring",
                roundness: "Rundhed",
                fontsize: "Skriftstørrelse",
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
                glowcolorbronze: "Sjældenhed: > 50%",
                glowcolorsilver: "Sjældenhed: < 50% & > $rarity",
                glowcolorgold: "Sjældenhed: < $rarity",
                off: "Ingen",
                pulse: "Puls",
                rainbow: "Regnbue",
                mask: "Maske",
                maskimg: "Maske billede",
                outline: "Kontur",
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
                fontcolor: "Skriftfarve",
                fontoutline: "Skriftkontur",
                fontoutlinecolor: "Skriftkonturfarve",
                fontshadow: "Skriftskygge",
                fontshadowcolor: "Skriftskyggefarve"
            }
        },
        icons: {
            title: "Ikon",
            content: {
                iconroundness: "Ikon afrunding",
                plat: "100% Logo",
                usegameicon: "Brug spilikon",
                gameicontype: "Spilikonetype",
                usecustomimgicon: "Brug brugerdefineret ikon",
                customimgicon: "Brugerdefineret ikon",
                icon: "Ikon",
                logo: "Logo",
                decoration: "Dekoration",
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
                themeselect: "Valgt tema"
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
        rarity: "Procentdelen, hvor sjældne præstationsmeddelelser udløses. Enhver præstation med en låseprocent over denne værdi vises som en hovedmeddelelse",
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
        pollrate: `Indstil opdateringsintervallet for præstationsdata under spil<br><br><span class="ttdesc">Ydelsen kan stige/falde afhængigt af værdien eller systemets hardware. Højere værdier resulterer normalt i lavere systembelastning, men kan forsinke meddelelser</span>`,
        initdelay: `Indstil forsinkelsen mellem detektion af det aktuelle <span class="hl">AppID</span> og når sporing af proces/bedrift starter<br><br><span class="ttdesc">Øgning af denne værdi kan forhindre scenarier, hvor Steam ikke kan starte det aktuelle spil (på grund af at appen initialiserer Steamworks, før spillet er startet)</span><br><br><span class="ttdesc">Alternativt kan øgning af denne værdi også bruges til at omgå forkert detektion af processer før spillet</span>`,
        releasedelay: `Angiv, hvor længe baggrundprocessen venter med at genstarte efter den nuværende spil er udgivet. Påvirker både automatisk procesovervågning og manuelt tilknyttede spil.<br><br><span class="ttdesc">Tillader en længere tidsramme for at frigive Steamworks fuldstændigt fra appen. At øge denne værdi kan forhindre unormal adfærd, såsom sporing af et tidligere lukket spil</span>`,
        maxretries: `Angiv det maksimale antal forsøg på at linke en kørende proces til en påvist AppID. Påvirker både automatisk procesovervågning og manuelt tilknyttede spil.<br><br><span class="ttdesc">Forsøg på link gennemføres én gang hvert sekund. Hvis en kørende proces ikke er linket til den aktuelle AppID efter dette antal forsøg, returneres en ugyldig proces. I sådanne tilfælde skal spillet frigives manuelt via Systembakke > Indstillinger > Frigiv Spil</span>`,
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
        glowcolorbronze: "Glødens farve, når oplåsningsprocenten er > 50%",
        glowcolorsilver: "Glødens farve, når oplåsningsprocenten er < 50% og > $rarity",
        glowcolorgold: "Glødens farve, når oplåsningsprocenten er < $rarity",
        mask: "Aktiver maske af dele af meddelelsen med et brugerdefineret billede",
        maskimg: `Indlæs en billedfil, der skal bruges som maske<br><br><span class="ttdesc">I CSS fungerer <code class="ttcode">mask-mode: alpha</code> på en modsat måde end forventet - områder med gennemsigtighed i billedfilen vil blive skjult, og områder af sort/grå vil tillade elementerne nedenfor at være synlige</span>`,
        outline: "Vælg den type kontur, der skal vises omkring notifikationen",
        outlinecolor: "Indstil konturens farve omkring notifikationen",
        outlinewidth: "Indstil konturens bredde omkring notifikationen",
        primarycolor: "Indstil primærfarven for meddelelsen",
        secondarycolor: "Indstil sekundærfarven for meddelelsen",
        tertiarycolor: "Indstil tertiærfarven for meddelelsen",
        fontcolor: "Indstil farven på al tekst, der vises i meddelelsen",
        fontoutline: "Tilføj en omrids til al tekst, der vises i meddelelsen",
        fontoutlinecolor: "Indstil farven på tekstens omrids",
        fontshadow: "Tilføj en skygge til al tekst, der vises i meddelelsen",
        fontshadowcolor: "Indstil farven på tekstens skygge",
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
        ovx: "Forskyd meddelelsen vist på skærmbilledet horisontalt",
        ovy: "Forskyd meddelelsen vist på skærmbilledet vertikalt",
        importtheme: `Importer tilpasninger via en brugeroprettet <span class="hl">temafil</span>`,
        exporttheme: `Eksporter det aktuelt valgte <span class="hl">tema</span> til deling<br><br><span class="ttdesc">Før du forsøger at eksportere, skal du sikre dig, at det ønskede <span class="hl">tema</span> er valgt (via menuen <span class="hl">Vælg Tema</span>). Sørg også for, at tilpasninger er gemt til det valgte <span class="hl">tema</span> (via menuen <span class="hl">Gem Tema</span>)<br><br><u>Enhver tilpasning, der endnu ikke er gemt til det aktuelle <span class="hl">tema</span>, vil ikke blive eksporteret!</u></span>`,
        webhooks: "Brug en webhook-URL til at sende beskeder til en Discord-server, hver gang en præstation låses op",
        webhookmain: `Skift, om oplysninger om præstationer skal sendes til en Discord-server, når en hovedpræstation låses op`,
        webhookrare: "Skift, om oplysninger om præstationer skal sendes til en Discord-server, når en sjælden præstation låses op",
        webhookplat: "Skift, om oplysninger om præstationer skal sendes til en Discord-server, når en 100% præstation låses op",
        webhooktest: "Skift om testinformation skal sendes til en Discord-server, når testnotifikationer af enhver type udløses",
        webhookurl: `Indstil <span class="hl">webhook-URL'en</span> for den ønskede Discord-server<br><br><span class="ttdesc">En <span class="hl">webhook-URL</span> bruges til at sende beskeder til en Discord-server/kanal på vegne af en bruger eller applikation. For at opsætte en ny webhook til en Discord-server, skal brugeren have en rolle på den ønskede server, der tillader oprettelse af webhooks<br><br><u>En webhook-URL er påkrævet, når du bruger denne mulighed</u><br><br>Se Discords officielle dokumentation for flere oplysninger</span>`,
        webhookspoilers: `Tilføj et spoiler-mærke til "Skjulte" præstationer, når de bliver delt på Discord`,
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
        percentbadgeimgbronze: "Badge-ikonet, der vises, når oplåsningsprocenten er > 50%",
        sspercentbadgeimgbronze: "Badge-ikonet, der vises, når oplåsningsprocenten er > 50%",
        percentbadgeimgsilver: "Badge-ikonet, der vises, når oplåsningsprocenten er < 50% og > $rarity",
        sspercentbadgeimgsilver: "Badge-ikonet, der vises, når oplåsningsprocenten er < 50% og > $rarity",
        percentbadgeimggold: "Badge-ikonet, der vises, når oplåsningsprocenten er < $rarity",
        sspercentbadgeimggold: "Badge-ikonet, der vises, når oplåsningsprocenten er < $rarity",
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
        ssdisplay: "Vis en forhåndsvisning af det optagede skærmbillede i meddelelsen"
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
                `Manuelt tilknyt en spils <span class="hl">eksekverbare fil</span> til en specifik <span class="hl">AppID</span>, eller <span class="hl">fjern tilknytningen</span> til en eksisterende`,
                `Steam Achievement Notifier vil ikke længere bruge <span class="hl">automatisk procesovervågning</span> for nogen <span class="hl">tilknyttede spil</span> - i stedet vil den angivne <span class="hl">eksekverbare fil</span> blive overvåget, når den tilknyttede <span class="hl">AppID</span> registreres`,
                `<span class="hl" id="appidhelp"><u>Hvordan finder jeg en Steams spillets AppID?</u></span>`
            ],
            linknew: "Nyt tilknyttet spil",
            linknewsub: [
                `Opret et nyt link mellem en <span class="hl">spils eksekverbare fil</span> og den tilknyttede <span class="hl">AppID</span>`,
                `Når de er oprettet, kan links <span class="hl">fjernes</span> via den tidligere dialog for <span class="hl">Administrer tilknyttede spil</span>`
            ],
            link: "Link",
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
            percentbadgeimgbronze: "Sjældenhed: > 50%",
            sspercentbadgeimgbronze: "Sjældenhed: > 50%",
            percentbadgeimgsilver: "Sjældenhed: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Sjældenhed: < 50% & > $rarity%",
            percentbadgeimggold: "Sjældenhed: < $rarity%",
            sspercentbadgeimggold: "Sjældenhed: < $rarity%",
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
            themes: "Temaer",
            src: "Skærmbilledkilde",
            themedeleted: "Tema slettet"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Det ser ud til, at du forsøger at aktivere indstillingen <span class="hl">${opt}</span>. På Linux-systemer kan skærmbilleder ikke aktiveres uden først at installere pakken <code class="dialogcode">${dep}</code>`,
    `Kør venligst <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> for at installere denne afhængighed. Dette sikrer, at skærmbilleder kan tages på denne enhed`
]