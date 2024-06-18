export const translations = {
    global: {
        main: "Hoved",
        rare: "Sjelden",
        plat: "100%",
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
        releasegame: "Frigi Spill",
        releasegamesub: [
            `Restart bakgrunnsprosessen til Worker og frigi det nåværende spillet fra å bli sporet`,
            `Prøv denne alternativet hvis du nylig har lukket et spill, men Steam viser det fortsatt som kjører, eller hvis Steam Achievement Notifier fortsatt viser at det sporer et spill som allerede har blitt lukket`
        ],
        noupdateavailable: "Ingen oppdateringer tilgjengelig",
        latestversion: "Siste versjon er installert",
        missingdeps: "Manglende avhengighet",
        missingdepssub: [
            `Det virker som om du prøver å aktivere alternativet <span class="hl">Ta Steam skjermbilde</span>. Imidlertid kan ikke skjermbilder automatisk utløses på Linux uten å først installere pakken <code class="dialogcode">xdotool</code>`,
            `Vennligst kjør <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> for å installere denne avhengigheten, som vil sikre at Steam skjermbilder kan tas på denne enheten`
        ],
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
        ]
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
            title: "Språk"
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
                rarity: "Sjeldenhet prosentandel",
                rareonly: "Bare sjeldne",
                all: "Alle",
                off: "Av",
                showpercent: "Vis prosent",
                soundonly: "Bare lyd",
                extwin: "Strømvarsler",
                audiosrc: "Lyd kilde",
                notify: "Varsel",
                app: "Applikasjon",
                nowtracking: "Vis sporingsvarsel",
                nowtrackingscale: "Sporingsskala",
                shortcuts: "Varsel snarveier",
                noiconcache: "Deaktiver ikonbuffer"
            }
        },
        media: {
            title: "Medier",
            content: {
                steamss: "Ta Steam skjermbilde",
                screenshots: "Ekstra medier",
                off: "Av",
                overlay: "Skjermbilde med varsel overlay",
                monitors: "Skjermbilde kilde",
                ovpos: "Overlay posisjon",
                ovmatch: "Match tilpasser posisjon",
                ovpath: "Skjermbilde sti",
                ovx: "Horisontal forskyvning",
                ovy: "Vertikal forskyvning",                
                ssdelay: "Skjermbilde forsinkelse",
                notifyimg: "Varslingsbilde",
                imgpath: "Bildesti"
            }
        },
        games: {
            title: "Spill",
            content: {
                linkedgames: "Lenkede spill",
                exclusionlist: "Unntaksliste"
            }
        },
        accessibility: {
            title: "Tilgjengelighet",
            content: {
                noanim: "Deaktiver App-vindu-animasjoner",
                nvda: "Aktiver NVDA-støtte",
                tooltips: "Vis verktøytips"
            }
        },
        advanced: {
            title: "Avansert",
            content: {
                pollrate: "Avstemningsfrekvens",
                releasedelay: "Utgivelsesforsinkelse",
                maxretries: "Maksimalt antall forsøk på prosessering",
                debug: "Feilsøkingspanel",
                userust: "Alternativ prosessbehandlingmodus",
                notifydebug: "Vis feilsøkingsvarsler",
                usecustomfiles: "Bruk egendefinerte app-filer",
                showcustomfiles: "Vis egendefinerte app-filer"
            }
        },        
        misc: {
            title: "Diverse",
            content: {
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
                bgimgbrightness: "Lysstyrke",
                brightness: "Lysstyrke",
                blur: "Uskarphet",
                roundness: "Avrunding",
                fontsize: "Font Størrelse",
                opacity: "Gjennomsiktighet",
                bgonly: "Bare Bakgrunn",
                glow: "Glimt",
                glowcolor: "Farge",
                glowsize: "Størrelse",
                glowanim: "Animasjon",
                glowspeed: "Hastighet",
                off: "Ingen",
                pulse: "Puls",
                rainbow: "Regnbue",
                mask: "Maske",
                maskimg: "Maskebilde"
            }
        },
        colors: {
            title: "Farger",
            content: {
                primarycolor: "Primærfarge",
                secondarycolor: "Sekundærfarge",
                tertiarycolor: "Tertiærfarge",
                fontcolor: "Fontfarge",
                fontoutline: "Fontkontur",
                fontoutlinecolor: "Fontkontur Farge",
                fontshadow: "Fontskygge",
                fontshadowcolor: "Fontskygge Farge"
            }
        },
        icons: {
            title: "Ikon",
            content: {
                iconroundness: "Ikon Avrunding",
                plat: "100% Logo",
                usegameicon: "Bruk Spillikon",
                logo: "Logo",
                decoration: "Dekorasjon",
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
                export: "Eksporter"                
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
        desktop: "Veksle en snarvei på skrivebordet for å kjøre appen",
        startwin: "Start Steam Achievement Notifier automatisk etter pålogging",
        startmin: "Etter oppstart, skjul appens brukergrensesnittvindu til det åpnes fra systemstatusfeltet",
        nohwa: `Deaktiver maskinvareakselerasjon, noe som kan forbedre ytelsen på systemer med begrensede ressurser eller systemer uten dedikert GPU<br><br><span class="ttdesc">Appen vil starte på nytt etter aktivering/deaktivering av dette alternativet</span>`,
        litemode: "Deaktiver alle interaktive brukergrensesnittelementer, og tilbyr bare begrenset appfunksjonalitet via systemstatusfeltikonet. Kan forbedre ressursene som brukes av appen",
        rarity: "Prosentandelen der sjeldne prestasjonsvarsler vil bli utløst. Enhver prestasjon med en låseprosent over denne verdien vil bli vist som en hovedvarsling",
        showpercent: "Vis låseprosenten for prestasjonen i varslingen for de valgte typene",
        soundonly: "Deaktiver varsler, og spill bare av lyder som er satt via Tilpasseren",
        extwin: "Opprett et skjult bakgrunnsvindu som dupliserer eventuelle varsler som for øyeblikket vises på skjermen. Dette vinduet kan deretter legges til som en vinduskilde for strømmingsprogramvare, for eksempel OBS",
        audiosrc: "Velg kilden til (eller deaktiver) lyd generert av appen",
        nowtracking: "Vis en varsling som informerer brukeren om at prestasjoner for et kjørende spill blir sporet",
        nowtrackingscale: `Angi størrelsen på sporingsvarslingen`,
        shortcuts: "Utløs en testvarsel via en tastatursnarvei. Snarveier kan tilpasses for hver varslingstype",
        noiconcache: `Deaktiver ikonbuffer ved oppstart av spill.<br><br><span class="ttdesc">Dette kan betydelig forbedre appens ytelse ved oppstart av spill, og løse sporingsproblemer med spill som har et stort antall prestasjoner. Imidlertid kan deaktivering av ikonbuffer i sjeldne tilfeller føre til manglende prestasjonsikoner i varsler</span>`,
        steamss: "Ta et Steam-skjermbilde når en prestasjon blir låst opp",
        screenshots: "Velg typen ekstra medier som skal opprettes når en varsling vises",
        monitors: "Skjermen som vil bli fanget når skjermbildet tas",
        ovpos: "Posisjonen til varslingsoverlegget i skjermbildet",
        ovmatch: "Samsvare med skjermposisjonen som er satt i Tilpasseren for denne varslingstypen",
        ovpath: "Plasseringen der skjermbilder generert av denne opsjonen vil bli lagret",
        ssdelay: "Legg til en forsinkelse fra når varslingen oppstår til når skjermbildet tas",
        sspreview: "Vis en forhåndsvisning av hvordan skjermbildet vil se ut når det lagres",
        noanim: "Deaktiver alle animasjoner og overgangseffekter for appvinduer",
        nvda: "Aktiver kopiering av prestasjonsinformasjon til utklippstavlen når en prestasjon blir låst opp, for å bli lest av skjermleserprogramvare, for eksempel NVDA",
        tooltips: "Vis verktøytips når du holder musepekeren over visse brukergrensesnittelementer",
        pollrate: `Sett oppdateringsintervallet for prestasjonsdata under spill<br><br><span class="ttdesc">Ytelsen kan øke/redusere avhengig av verdien eller systemets maskinvare. Høyere verdier fører vanligvis til lavere systembelastning, men kan forsinke varsler</span>`,
        releasedelay: `Angir hvor lenge bakgrunnsprosessen skal vente med å starte på nytt etter at det nåværende spillet er utgitt. Påvirker både automatisk prosessovervåking og manuelt tilknyttede spill.<br><br><span class="ttdesc">Gir en lengre tidsramme for å frigjøre Steamworks fullstendig fra appen. Å øke denne verdien kan forhindre unormal atferd, som sporing av et tidligere lukket spill</span>`,
        maxretries: `Angir det maksimale antallet forsøk på å koble en kjørende prosess til en oppdaget AppID. Påvirker både automatisk prosessovervåking og manuelt tilknyttede spill.<br><br><span class="ttdesc">Koblingsforsøk utføres én gang per sekund. Hvis en kjørende prosess ikke er koblet til gjeldende AppID etter dette antall forsøk, returneres en ugyldig prosess. I slike tilfeller må spillet frigjøres manuelt via systemstatusfeltet > Alternativer > Slipp spill</span>`,
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
        glowanim: "Velg en forhåndsdefinert animasjon som skal brukes på glødende effekt",
        glowspeed: "Sett hastigheten på animasjonen som brukes på glødende effekt",
        mask: "Aktiver maske av deler av varselet med et tilpasset bilde",
        maskimg: `Last opp et bildefil som skal brukes som maske<br><br><span class="ttdesc">I CSS fungerer <code class="ttcode">mask-mode: alpha</code> på en motsatt måte enn hva som vanligvis forventes - områder med gjennomsiktighet i bildefilen vil bli skjult, og områder med svart/grå vil tillate elementene under å være synlige</span>`,
        primarycolor: "Angi primærfargen til varslingen",
        secondarycolor: "Angi sekundærfargen til varslingen",
        tertiarycolor: "Angi tertiærfargen til varslingen",
        fontcolor: "Angi fargen på all tekst som vises i varslingen",
        fontoutline: "Legg til en kontur rundt all tekst som vises i varslingen",
        fontoutlinecolor: "Angi fargen på tekstkonturen",
        fontshadow: "Legg til en skygge på all tekst som vises i varslingen",
        fontshadowcolor: "Angi fargen på tekstskyggen",
        iconroundness: "Angi avrundingen av prestasjons-/spillikonet som vises i varslingen",
        plat: "Last inn en bildefil som skal brukes som 100 % -ikon",
        usegameicon: "Erstatt standardvarslingikonet med ikonet for gjeldende spill",
        showhiddenicon: "Vis et bilde som indikerer at prestasjonen er skjult i varselet",
        hiddenicon: "Last opp en bildefil for å erstatte det skjulte prestasjonsikonet",
        logo: "Last inn en bildefil for å erstatte logoikonet",
        decoration: "Last inn en bildefil for å erstatte dekorasjonsikonet",
        showdecoration: "Veksle synligheten til dekorasjonsikonet",
        replacelogo: "Erstatt logoikonet i varselet med den valgte dekorasjonen",
        pos: "Angi skjermposisjonen til varslingen",
        usecustompos: "Aktiver tilpasset plassering for varslingen",
        setcustompos: "Angi tilpasset posisjon for varslingen",
        resetcustompos: "Tilbakestill posisjonen til varslingen til standard tilpasset posisjon",
        updatetheme: "Oppdater gjeldende tema med valgte tilpasningsalternativer",
        savetheme: "Lagre alle konfigurerte tilpasningsalternativer som et nytt tema",
        visibilitybtn: "Bytt synligheten til elementet i tilpassede forhåndsvisninger og testvarsler",
        delbtn: "Tilbakestill elementet til standard",
        link: `Åpne <span class="hl">Administrer Lenkede Spillmenyen</span>`,
        imgpath: "Stedet hvor varsler bilder generert av dette alternativet vil bli lagret",
        linkedgames: `Bypass <span class="hl">automatisk prosesssporing</span> for bestemte Steam-spill<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        exclusionlist: `Forhindre prestasjoner i bestemte Steam-spill fra å bli sporet av appen<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        ovx: "Forskyvning av varsling som vises i skjermbildet horisontalt",
        ovy: "Forskyvning av varsling som vises i skjermbildet vertikalt",
        importtheme: `Importer tilpasninger via en brukerskapt <span class="hl">temafil</span>`,
        exporttheme: `Eksporter det aktuelt valgte <span class="hl">temaet</span> for deling<br><br><span class="ttdesc">Før du prøver å eksportere, sørg for at ønsket <span class="hl">tema</span> er valgt (via <span class="hl">Tema velg</span> menyen). Sørg også for at tilpasninger er lagret i det valgte <span class="hl">temaet</span> (via <span class="hl">Lagre tema</span> menyen)<br><br><u>Eventuelle tilpasninger som ikke er lagret i gjeldende <span class="hl">tema</span> vil ikke bli eksportert!</u></span>`        
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
                `Koble manuelt et spill sin <span class="hl">utførbare fil</span> til en spesifikk <span class="hl">AppID</span>, eller <span class="hl">koble fra</span> en eksisterende`,
                `Steam Achievement Notifier vil ikke lenger bruke <span class="hl">automatisk prosessporing</span> for noen <span class="hl">tilknyttede spill</span> - i stedet vil den angitte <span class="hl">utførbare filen</span> bli sporet hver gang den tilhørende <span class="hl">AppID</span> oppdages`,
                `<span class="hl" id="appidhelp"><u>Hvordan finner jeg AppID-en til et Steam-spill?</u></span>`
            ],
            linknew: "Nytt tilknyttet spill",
            linknewsub: [
                `Opprett en ny kobling mellom et <span class="hl">spills utførbare fil</span> og den tilknyttede <span class="hl">AppID</span>`,
                `Etter opprettelsen kan koblingene <span class="hl">kobles fra</span> via den forrige <span class="hl">Administrer tilknyttede spill</span> dialogboksen`
            ],
            link: "Koble",
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
            ]
        }
    }
}