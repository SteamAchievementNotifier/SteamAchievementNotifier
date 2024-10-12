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
        noexesub: `Velg Alternativer > Avslutt spill fra systemstatusfeltet for å avslutte`,
        webhookunlockmsg: "$user har låst opp en prestasjon",
        webhookingame: "i $gamename",
        notconnected: "Ikke tilkoblet"
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
                nowtrackingpos: "Sporingsposisjon",
                shortcuts: "Varsel snarveier",
                noiconcache: "Deaktiver ikonbuffer",
                webhooks: "Post til Discord-server",
                webhookurl: `Webhook URL`,
                webhookcaution: `Ved å aktivere dette alternativet og oppgi en gyldig Discord Webhook-lenke, samtykker du i å forstå at <u>all prestasjons- og spillinformasjon for den nåværende Steam-brukeren</u> vil bli postet til den angitte Discord-serveren via den oppgitte Webhook-lenken.<br><br>Hvis du ikke ønsker at Steam Achievement Notifier skal poste denne informasjonen på dine vegne, vennligst deaktiver dette alternativet.`,
                webhooklaststatus: "Siste status"
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
                hdrmode: "HDR-modus",
                ovpos: "Overlay posisjon",
                ovmatch: "Match tilpasser posisjon",
                ovx: "Horisontal forskyvning",
                ovy: "Vertikal forskyvning",                
                ovpath: "Skjermbilde sti",
                ssdelay: "Skjermbilde forsinkelse",
                notifyimg: "Varslingsbilde",
                imgpath: "Bildesti"
            }
        },
        games: {
            title: "Spill",
            content: {
                linkedgames: "Lenkede spill",
                themeswitch: "Automatisk bytte av temaer",
                exclusionlist: "Unntaksliste"
            }
        },
        accessibility: {
            title: "Tilgjengelighet",
            content: {
                noanim: "Deaktiver App-vindu-animasjoner",
                noupdatedialog: "Deaktiver oppdateringsdialog",
                nvda: "Aktiver NVDA-støtte",
                tooltips: "Vis verktøytips",
                showsystrayopts: "Vis systemstatusalternativer"
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
                glowx: "Horisontal forskyvning",
                glowy: "Vertikal forskyvning",
                glowopacity: "Gjennomsiktighet",
                glowanim: "Animasjon",
                glowspeed: "Hastighet",
                off: "Ingen",
                pulse: "Puls",
                rainbow: "Regnbue",
                mask: "Maske",
                maskimg: "Maskebilde",
                outline: "Kontur",
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
                export: "Eksporter",
                exporterrortitle: "Eksportfeil",
                exporterrorsub: [
                    "Det oppstod en feil under forsøk på å eksportere det valgte temaet",
                    `Prøv å lagre det nåværende temaet (<i>via <span class="hl">Lagre tema</span></i>) og prøv å eksportere på nytt`,
                    `Hvis problemet vedvarer, vennligst kopier feilmeldingen nedenfor, og rapporter via lenkeknappene på <span class="hl">Hjemmeskjermen</span>`
                ],
                synctheme: "Synkroniser tema",
                syncedwith: "Synkronisert med"
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
        rarity: "Prosentandelen der sjeldne prestasjonsvarsler vil bli utløst. Enhver prestasjon med en låseprosent over denne verdien vil bli vist som en hovedvarsling",
        showpercent: "Vis låseprosenten for prestasjonen i varslingen for de valgte typene",
        soundonly: "Deaktiver varsler, og spill bare av lyder som er satt via Tilpasseren",
        extwin: "Opprett et skjult bakgrunnsvindu som dupliserer eventuelle varsler som for øyeblikket vises på skjermen. Dette vinduet kan deretter legges til som en vinduskilde for strømmingsprogramvare, for eksempel OBS",
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
        pollrate: `Sett oppdateringsintervallet for prestasjonsdata under spill<br><br><span class="ttdesc">Ytelsen kan øke/redusere avhengig av verdien eller systemets maskinvare. Høyere verdier fører vanligvis til lavere systembelastning, men kan forsinke varsler</span>`,
        initdelay: `Sett forsinkelsen mellom deteksjon av gjeldende <span class="hl">AppID</span> og når prosess-/prestasjesporing starter<br><br><span class="ttdesc">Øke denne verdien kan forhindre scenarier der Steam ikke klarer å starte gjeldende spill (på grunn av initialisering av applikasjonen i Steamworks før spillet har startet)</span><br><br><span class="ttdesc">Alternativt kan økning av denne verdien også brukes til å omgå feilaktig deteksjon av forhåndslanseringsprosesser</span>`,
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
        glowx: "Juster den horisontale posisjonen til glødeffekten",
        glowy: "Juster den vertikale posisjonen til glødeffekten",
        glowopacity: "Sett gjennomsiktigheten til glødeffekten",
        glowanim: "Velg en forhåndsdefinert animasjon som skal brukes på glødende effekt",
        glowspeed: "Sett hastigheten på animasjonen som brukes på glødende effekt",
        mask: "Aktiver maske av deler av varselet med et tilpasset bilde",
        maskimg: `Last opp et bildefil som skal brukes som maske<br><br><span class="ttdesc">I CSS fungerer <code class="ttcode">mask-mode: alpha</code> på en motsatt måte enn hva som vanligvis forventes - områder med gjennomsiktighet i bildefilen vil bli skjult, og områder med svart/grå vil tillate elementene under å være synlige</span>`,
        outline: "Velg typen kontur som skal vises rundt varslingen",
        outlinecolor: "Angi fargen på konturen rundt varslingen",
        outlinewidth: "Angi bredden på konturen rundt varslingen",
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
        imgpath: "Stedet hvor varsler bilder generert av dette alternativet vil bli lagret",
        checkforupdates: `Sjekk om en ny app-versjon har blitt utgitt på GitHub. Hvis en oppdatering er tilgjengelig, vil den automatisk bli lastet ned og installert når den er bekreftet via dialogvinduet <span class="hl">Oppdatering tilgjengelig</span>`,
        linkedgames: `Bypass <span class="hl">automatisk prosesssporing</span> for bestemte Steam-spill<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        exclusionlist: `Forhindre prestasjoner i bestemte Steam-spill fra å bli sporet av appen<br><br><span class="ttdesc">Denne opsjonen bør kun brukes i svært spesifikke scenarioer. Brukere bør ikke trenge å bruke denne opsjonen under normale omstendigheter!</span>`,
        ovx: "Forskyvning av varsling som vises i skjermbildet horisontalt",
        ovy: "Forskyvning av varsling som vises i skjermbildet vertikalt",
        importtheme: `Importer tilpasninger via en brukerskapt <span class="hl">temafil</span>`,
        exporttheme: `Eksporter det aktuelt valgte <span class="hl">temaet</span> for deling<br><br><span class="ttdesc">Før du prøver å eksportere, sørg for at ønsket <span class="hl">tema</span> er valgt (via <span class="hl">Tema velg</span> menyen). Sørg også for at tilpasninger er lagret i det valgte <span class="hl">temaet</span> (via <span class="hl">Lagre tema</span> menyen)<br><br><u>Eventuelle tilpasninger som ikke er lagret i gjeldende <span class="hl">tema</span> vil ikke bli eksportert!</u></span>`,
        webhooks: "Bruk en Webhook URL for å poste til en Discord-server hver gang en prestasjon låses opp",
        webhookurl: `Angi <span class="hl">Webhook URL</span> for den ønskede Discord-serveren<br><br><span class="ttdesc">En <span class="hl">Webhook URL</span> brukes til å poste til en Discord-server/kanal på vegne av en bruker eller applikasjon. For å sette opp en ny Webhook for en Discord-server, må brukeren ha en rolle på den ønskede serveren som tillater opprettelse av Webhooks<br><br><u>En Webhook URL er nødvendig når du bruker dette alternativet</u><br><br>Se Discsd’s offisielle dokumentasjon for mer informasjon</span>`,
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
        percentbadgeimgbronze: "Ikonet for badge som skal vises når opplåsningsprosenten er > 50%",
        sspercentbadgeimgbronze: "Ikonet for badge som vises når opplåsningsprosenten er > 50%",
        percentbadgeimgsilver: "Ikonet for badge som vises når opplåsningsprosenten er < 50% og > $rarity",
        sspercentbadgeimgsilver: "Ikonet for badge som vises når opplåsningsprosenten er < 50% og > $rarity",
        percentbadgeimggold: "Ikonet for badge som vises når opplåsningsprosenten er < $rarity",
        sspercentbadgeimggold: "Ikonet for badge som vises når opplåsningsprosenten er < $rarity",
        resetpbimgs: "Tilbakestill alle badge-ikoner til standard",
        elemsmatch: `Match innstillingsalternativene for varslingselementene satt i tilpasseren for denne varslingskategorien<br><br><span class="ttdesc">Noen varslingspresets kan ikke fullstendig matche tilpasserinnstillinger på grunn av forskjeller mellom skjermbaserte og skjermbilde-baserte varslingsoppsett</span>`,
        themeswitch: `Bytt automatisk til et lagret <span class="hl">tema</span> når et spesifikt spill oppdages`,
        userthemesync: `Synkroniser tilpasninger i det valgte <span class="hl">tema</span> til alle andre varslingskategorier`,
        showsystrayopts: `Vis alle alternativer som vanligvis ligger under <span class="hl">Systemstatus</span> > <span class="hl">Alternativer</span> i <span class="hl">Innstillinger</span> > <span class="hl">Diverse</span>`
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
            percentbadgeimgbronze: "Sjeldenhet: > 50%",
            sspercentbadgeimgbronze: "Sjeldenhet: > 50%",
            percentbadgeimgsilver: "Sjeldenhet: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Sjeldenhet: < 50% & > $rarity%",
            percentbadgeimggold: "Sjeldenhet: < $rarity%",
            sspercentbadgeimggold: "Sjeldenhet: < $rarity%",
            resetpbimgs: "Tilbakestill badge-ikoner",
            elemsmatch: "Match tilpasserinnstillinger"
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
            themes: "Temaer",
            src: "Skjermbildekilde",
            themedeleted: "Tema slettet"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Det virker som du prøver å aktivere <span class="hl">${opt}</span>-alternativet. Imidlertid kan ikke skjermbilder aktiveres på Linux-systemer uten å installere pakken <code class="dialogcode">${dep}</code> først`,
    `Vennligst kjør <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> for å installere denne avhengigheten. Dette vil sikre at skjermbilder kan tas på denne enheten`
]