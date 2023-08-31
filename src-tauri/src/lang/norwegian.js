export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Ingen bruker oppdaget",
                tt: "Steam-brukeren som for øyeblikket blir fulgt med på prestasjoner"
            },
            gamelbl: {
                elem: gameName ? gameName : "Ingen spill oppdaget",
                tt: "Spillet som for øyeblikket blir fulgt med på prestasjoner"
            },
            previewbtn: {
                tt: "Forhåndsvis valgt lyd"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Standard (Ingen lydfil valgt)" : custom.sounddir ? custom.sounddir : "Standard (Ingen lydmappe valgt)"
            },              
            soundmodelbl: {
                elem: "Lydmodus:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fil" : "tilfeldig"
            },
            togglemain: {
                elem: "Hoved",
                tt: "Hovedprestasjonvarsel"
            },
            togglerare: {
                elem: "Sjelden",
                tt: "Sjelden prestasjonvarsel"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% prestasjonvarsel"
            },
            progresscirclewrapper: {
                tt: "Vis en forhåndsvisning av tilpasset varsel"
            },
            testbtnwrapper: {
                elem: "Vis testvarsel",
                tt: "Vis en forhåndsvisning av tilpasset varsel",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Tilpass...",
                tt: "Åpne varslertilpasningsmenyen",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam kjører ikke"
            },
            updatebtn: {
                tt: "Oppdatering tilgjengelig"
            },
            kofibtn: "Doner på Ko-Fi!",
            discordbtn: "Bli med på Discord!",
            githubbtn: "Rapporter problem på GitHub!",
            settingstitlelbl: {
                elem: "Innstillinger"
            },
            configuration: {
                elem: "Konfigurasjon",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Språk",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Operativsystem",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Varsler",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Skjermbilder",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Tilgjengelighet",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Annet",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versjon"
            },            
            apikeybtn: {
                tt: "Klikk her for å få din Steam Web API-nøkkel"
            },
            apikey: {
                placeholder: "Skriv inn din API-nøkkel",
                tt: "Steam Web API-nøkkelen tilknyttet Steam-kontoen din"
            },
            eyebtn: {
                tt: "Veksle API-nøkkelens synlighet"
            },
            apikeylbl: {
                elem: "Hent API-nøkkel"
            },
            steam64idbtn: {
                tt: "Klikk her for å få din Steam64 ID"
            },
            steam64id: {
                placeholder: "Skriv inn din Steam64-ID",
                tt: "Steam64 ID-en tilknyttet Steam-kontoen din"
            },
            steam64idlbl: {
                elem: "Hent Steam64 ID"
            },
            switchaccountspan: {
                elem: "Bytt konto"
            },
            switchaccountbtn: {
                tt: "Bytt mellom tilknyttede Steam-kontoer"
            },
            testconnectionlbl: {
                elem: "Test tilkobling",
                tt: "Test tilkoblingen din til Steam Web API"
            },
            lang: {
                tt: "Angi språk for både brukergrensesnitt og varsler"
            },            
            desktop: {
                elem: "Opprett skrivebordskort",
                tt: "Opprett en snarvei på skrivebordet for å starte appen",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Start med Windows",
                tt: "Kjør appen automatisk når Windows starter",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Start minimert",
                tt: "Minimer appen til systemstatusfeltet etter oppstart",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Deaktiver maskinvareakselerasjon",
                tt: "Deaktiver maskinvareakselerasjon for appvinduet",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite-modus",
                tt: "Deaktiver hovedappvinduet for å spare systemressurser. Minimale alternativer vil fortsatt være tilgjengelige via systemstatusfeltikonet for å samhandle med appen",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Sjeldenhet prosentandel",
                tt: `Bare prestasjoner med en global opplåsningsprosent under dette tallet vil vises som "Sjelden" varsler`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Bare lyd-modus",
                tt: "Deaktiver varsler, men spill av den valgte lyden når en prestasjon låses opp",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Vis alle opplåsningsprosenter",
                tt: "Vis globale opplåsningsprosenter innenfor alle varslingstyper",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Dupliser til ekstern vindu",
                tt: `Et eksternt vindu som dupliserer alle varsler. Kan målrettes av strømmings-/skjermopptaksprogramvare.<div class="ttwarn">Dette vinduet er <u>fullstendig gjennomsiktig</u>. For å markere vinduets nåværende posisjon, hold nede <span class="ttcode">Ctrl</span>-tasten.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Vis "Nå følger" varsel`,
                tt: `Veksle "Nå følger" varsel ved oppstart av et spill`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Varslingsgenveier",
                tt: "Angi en tastatursnarvei for å utløse testvarsler",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Angi en snarvei for å utløse en testvarsel for denne typen"
            },
            sctabmain: {
                tt: "Hovedvarslingssnarvei"
            },
            sctabrare: {
                tt: "Sjelden varslingssnarvei"
            },
            sctabplat: {
                tt: "100 % varslingssnarvei"
            },
            screenshotmode: {
                tt: "Velg modus for automatisk prestasjonskjermbilder"
            },
            displayscreenshot: {
                elem: "Vis skjermbilde i varsel",
                tt: "Vis en forhåndsvisning av skjermbilder i prestasjonsvarslingen",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam skjermbilde hurtigtast",
                tt: "Samsvarende Steam-klientens hurtigtast for å ta native Steam-skjermbilder når prestasjoner låses opp",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Hovedvarslingsoverlegg`
            },
            ovtabrare: {
                tt: `Sjelden varslingsoverlegg`
            },
            ovtabplat: {
                tt: `100% varslingsoverlegg`
            },
            monitor: {
                elem: "Skjerm",
                tt: "Velg skjermen som skal brukes som kilde til skjermbildene",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overleggposisjon",
                tt: "Angi posisjonen til varslingsoverlegget",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Bane",
                tt: "Angi banen der skjermbildene skal lagres",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Forhåndsvisning",
                tt: `Forhåndsvis varslingsoverlegget`,
                query: "label"
            },
            noanim: {
                elem: "Deaktiver appvindu-animasjoner",
                tt: "Deaktiver overgangsanimasjoner innenfor appvinduet",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Aktiver NVDA-støtte",
                tt: "Kopier varselsinnholdet til utklippstavlen for å bli lest av NVDA-skjermleserprogramvaren",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Vis verktøytips",
                tt: "Veksle verktøytips når du holder musepekeren over app-elementer",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Vis varsels DevTools",
                tt: "Åpne varselsens DevTools-panel når det utløses",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Vis personvernpolicy",
                tt: "Vis Steam Achievement Notifier's personvernpolicy",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Bli med i beta-kanalen",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Åpne app-loggen",
                tt: "Vis og del innholdet i app-loggen",
                query: "label"
            },
            resetbtn: {
                elem: "Tilbakestill appen",
                tt: "Fjern all lagret data og start appen på nytt",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Pause/spill av varslingsanimasjonen"
            },
            customiserreplay: {
                tt: "Spill av varslingsanimasjonen på nytt"
            },
            customisersavepreset: {
                tt: "Lagre gjeldende tilpasninger som en ny varslingsmal"
            },
            tabbtnnext: {
                tt: "Neste"
            },
            tabbtnprev: {
                tt: "Tilbake"
            },
            notificationpreset: {
                elem: "Mal",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Varslingsmal",
                tt: "Velg en varslingsmal å tilpasse",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Sjelden ikonanimasjon",
                tt: `Aktiver/deaktiver animasjonen av ikonbakgrunnen`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Vis alle detaljer",
                tt: `Vis alle tilgjengelige varslingsdetaljer`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Visningstid",
                tt: "Lengden på tiden varselet vil vises",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skala",
                tt: "Størrelsen på varselet<br><i>*Vises ikke i forhåndsvisningsvinduet</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Tilpasset tekst",
                tt: "Vis en tilpasset melding i varselet",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Bruk spilltittel",
                tt: "Vis tittelen på gjeldende spill i varselet",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Egendefinert Skrifttype",
                tt: "Last opp en egendefinert skriftfil for å bruke på alle tekstelementer i varselet",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Tilbakestill til standard skrifttype"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Bakgrunnsstil",
                tt: "Angi stilen til varslingsbakgrunnen",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradientvinkel",
                tt: "Angi vinkelen til fargegradienten",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Bakgrunnsbilde",
                tt: "Velg en bildefil som skal brukes som varslingsbakgrunn",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Lysstyrke",
                tt: "Angi lysstyrken til spillgrafikken i bakgrunnen",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Avrunding",
                tt: "Angi avrunding for varslingshjørnene",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Skriftstørrelse",
                tt: "Angi skriftskalaen",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Gjennomsiktighet",
                tt: "Angi gjennomsiktigheten til varselet",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Bare bakgrunn",
                tt: "Bruk gjennomsiktighet bare på bakgrunnen, slik at teksten og bildene er helt ugjennomsiktige",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Farger",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primærfarge",
                tt: "Angi primærfargen for varselet",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Sekundærfarge",
                tt: "Angi sekundærfargen for varselet",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Tekstfarge",
                tt: "Angi fargen på teksten",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Tekstkontur",
                tt: "Legg til en kontur rundt all tekst i varselet",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Konturfarge",
                tt: "Angi fargen på tekstkonturen",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Tekstskygge",
                tt: "Legg til en skygge på all tekst i varselet",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Skyggefarge",
                tt: "Angi fargen på tekstskyggen",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Ikonavrunding",
                tt: "Angi avrunding for varslingsikonet",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Bruk tilpasset ikon",
                tt: `Bruk en bildefil som et tilpasset ikon`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Tilpasset ikon",
                tt: `Velg en bildefil som skal brukes som et tilpasset ikon`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Tilbakestill egendefinert ikon`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Bruk Tilpasset 100% Ikon",
                tt: `Bruk en bildefil som tilpasset 100% ikon`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Tilpasset 100% Ikon",
                tt: `Velg en bildefil for å sette som tilpasset 100% ikon`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Tilbakestill tilpasset 100% ikon`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Bruk spillikon",
                tt: `Bruk gjeldende spills ikon`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "Posisjon",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Skjermposisjon",
                tt: `Angi posisjonen til varselet på skjermen`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Bruk tilpasset posisjon",
                tt: "Bruk en tilpasset posisjon for varselet",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Angi posisjon",
                tt: "Angi en tilpasset posisjon for varselet",
                query: "label"
            },
            animdir: {
                elem: "Animasjonsretning",
                tt: "Angi retningen til varslingsanimasjonen",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "PERSONVERNREGLEMENT"
            },
            ppusagetitle: {
                elem: "BRUK AV STEAM WEB API-DATA"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier bruker Valves <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> til å hente og vise data relatert til brukerens Steam-konto(er), via kombinasjonen av Steam API-nøkkel og Steam64-ID som brukeren gir til applikasjonen. Disse dataene inkluderer:`
            },
            ppstats: {
                elem: "Statistikk for låste og ulåste prestasjoner"
            },
            ppusername: {
                elem: "Ditt Steam-brukernavn"
            },
            ppsteamgames: {
                elem: "Dine spilte Steam-spill"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier kan i fremtiden bruke ytterligere Steam Web API-data for å gi ekstra funksjoner og oppdateringer til applikasjonen."
            },
            ppkey64title: {
                elem: "BRUK AV STEAM API-NØKKEL/STEAM64-ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier krever at brukeren oppgir kombinasjonen av Steam API-nøkkel og Steam64-ID for autentisert tilgang til Steam Web API."
            },
            ppnoauth: {
                elem: "Uten denne informasjonen kan ikke nettlenker (levert av Valve for å få tilgang til Steam Web API) som brukes til å hente data relatert til brukerens Steam-konto(er) - inkludert prestasjonsdata - få tilgang."
            },
            ppstoragetitle: {
                elem: "LAGRING AV STEAM WEB API-DATA"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier lagrer midlertidig Steam Web API-data lokalt på brukerens PC utelukkende for bruk innenfor applikasjonen. Enhver midlertidig lagring av denne dataen er ment for bruk utelukkende av Steam Achievement Notifier, og under normale omstendigheter vil all ikke-varige Steam Web API-data bli slettet fra lokal lagring ved avslutning av applikasjonen."
            },
            pppersist: {
                elem: "Vedvarende data lagret på brukerens enhet inkluderer kun data som blir lagret av applikasjonen for brukerens bekvemmelighet, for eksempel brukerens Steam Web API-nøkkel og Steam64-ID."
            },
            ppdelete: {
                elem: "Denne dataen kan også slettes manuelt av brukeren når som helst hvis det er nødvendig. Filer opprettet av Steam Achievement Notifier er plassert i følgende katalog:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "For øyeblikket ikke støttet"
            },
            ppcollecttitle: {
                elem: "STANDPUNKT ANGÅENDE DATAINNSAMLING"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier vil <u>aldri</u> sende eller lagre brukerdata utenfor brukerens lokale filsystem uten brukerens eksplisitte tillatelse til å gjøre det. Dette inkluderer all informasjon som blir hentet via Steam Web API for bruk innenfor applikasjonen, inkludert Steam API-nøkkel og Steam64-ID som brukeren oppgir for tilgang til Steam Web API."
            },
            ppconsent: {
                elem: "Gjennom bekreftelse av samtykke og etterfølgende bruk av enten eksisterende eller fremtidige funksjoner som er designet for å sende informasjon eksternt, blir tillatelse automatisk gitt av brukeren for å gjøre dette. I slike tilfeller vil brukeren alltid bli informert om arten av dataene som sendes, og blir bedt om å bekrefte samtykke for å sende data utenfor applikasjonen."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier ekskluderer bevisst alle muligheter for ekstern tilgang, visning eller innsamling av informasjon som brukeren har oppgitt til applikasjonen, men via eksisterende eller fremtidige funksjoner kan applikasjonen kunne sende data eksternt på brukerens vegne, men kun etter deres samtykke."
            },
            pprequests: {
                elem: "Forespørsler om tilgang til data fra Steam Web API blir gjort fra applikasjonen selv ved hjelp av innebygde metoder, tilsvarende funksjonalitet som tilbys av nettlesere. Disse forespørslene inneholder brukerens Steam API-nøkkel og Steam64-ID som kreves av Steam Web API, men blir aldri bevisst gjort tilgjengelig for bruk eller avlytting av andre applikasjoner."
            },
            ppusertitle: {
                elem: "BRUKERANSVAR"
            },
            ppsteamtou: {
                elem: `VED Å LASTE NED OG BRUKE EN OFFISIELT UTGITT VERSJON AV STEAM ACHIEVEMENT NOTIFIER VIA <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFISIELL GITHUB-REPOSITORIUM</span>, SÅ GODTAR DU, SOM BRUKER, VED UTVIDELSE, VILKÅRENE I SEKSJON 7 OG 8 I <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">STEAM WEB API-BRUKSVILKÅR</span>.`
            }, 
            gamedetails: "Spilldetaljer",
            mustbepublic: "må være satt til Offentlig",            
            nosoundfile: "Standard (Ingen lydfil valgt)",
            nosoundfolder: "Standard (Ingen lydmappe valgt)",
            file: "Fil",
            randomised: "Tilfeldig",            
            audioselectdialog: `Velg lydfil ${custom.mode === "file" ? "fil" : "mappe"}`,
            imgselectdialog: `Velg bildefil`,
            unsupported: "Ugyldig fil!",
            novalidaudiofiles: "Ingen gyldige lydfiler!",
            nolocate: "Kan ikke finne filen!",
            switchaccountstitle: "Bytt kontoer",
            noaccounts: "Legg til en konto for å komme i gang!",
            connecting: "Kobler til...",
            connected: "Koblet til",
            testsuccessuser: `Du er klar til å gå`,
            testsuccess1: `Sørg for at dine <span>Spilldetaljer</span> er satt til <span>Offentlig</span> i <a href="${privacysettings}">Steam Personverninnstillinger</a>`,
            testsuccess2: `Sjekk at visningsmodus for spillet ditt er satt til <span>Randløs</span> for at varsler skal vises over spillvinduet`,
            noapikeytitle: "Ingen API-nøkkel",
            noapikeytxt: "Vennligst skriv inn din API-nøkkel",
            noapikeyhint: `Klikk på <img src="./icon/key.svg" alt="">-ikonet for å få din API-nøkkel`,
            nosteam64idtitle: "Ingen Steam64 ID",
            nosteam64idtxt: "Vennligst skriv inn din Steam64 ID",
            nosteam64idhint: `Klikk på <img src="./icon/id.svg" alt="">-ikonet for å få din Steam64 ID`,
            invalidapikeytitle: "Ugyldig API-nøkkel!",
            invalidapikeymsg: "Kan ikke få tilgang til Steam Web API med den angitte API-nøkkelen",
            invalidapikeydetail1: "Sjekk at API-nøkkelen er korrekt",
            invalidapikeydetail2: "Generer en ny API-nøkkel for din konto",
            invalidsteam64idtitle: "Ugyldig Steam64 ID!",
            invalidsteam64idmsg: "Kan ikke finne en Steam-konto knyttet til den angitte Steam64 ID-en",
            invalidsteam64iddetail1: "Sjekk at Steam64 ID-verdien du har oppgitt er korrekt for din Steam-konto",
            nonetworkfound: "Ingen aktiv nettverkstilkobling funnet",
            connecttonetwork: "Koble PC-en til et nettverk og prøv igjen",
            testdefaulterrortitle: "En feil oppstod!",
            testdefaulterrormsg: "Det oppstod en feil ved tilkobling til Steam Web API",
            testdefaulterrordetail1: "Vennligst rapporter dette problemet på Discord eller GitHub!",
            sspath: "Velg skjermbildebane",
            wronguser: user ? `${user} ikke logget inn på Steam!` : "Ingen tilknyttede brukerkontoer funnet!",
            switchuser: "Klikk her for å bytte konto",
            trackingfailed: "Sporing mislyktes!",
            checkapplog: "Sjekk app-loggen for detaljer",
            soon: "Kommer snart!",
            gamecomplete: "100% fullført",
            gametitle: "Spilltittel",
            achievementunlocked: "Prestasjon oppnådd",
            achievementtitle: "Prestasjonstittel",
            allachievements: "Du har oppnådd alle prestasjoner!",
            achievementdesc: "Prestasjonsbeskrivelse",
            show: "Vis",
            quit: "Avslutt",
            off: "Av",
            steamss: "Steam-spillskjermbilde",
            overlayss: "Skjermbilde med varslingsoverlay",
            match: "Tilpasset tilpasning",
            topleft: "Øverst til venstre",
            topcenter: "Øverst i midten",
            topright: "Øverst til høyre",
            bottomleft: "Nederst til venstre",
            bottomcenter: "Nederst i midten",
            bottomright: "Nederst til høyre",
            solid: "Ensfarget",
            gradient: "Gradient",
            bgimg: "Bakgrunnsbilde",
            gameart: "Spillkunst",
            up: "Opp",
            down: "Ned",
            left: "Venstre",
            right: "Høyre",
            tracking: "Nå Sporing",
            inuse: "I bruk av",
            invalidshortcut: "Ugyldig snarvei",
            nofont: "Ingen Skrifttype Valgt",
            fontselectdialog: "Velg Skrifttype Fil"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Velg en lydfil som skal spilles av når en prestasjon låses opp" : "Velg en mappe med lydfiler som skal spilles av tilfeldig når en prestasjon låses opp");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Her er en logg over hva som har skjedd siden appen ble startet kl."
            },
            copylbl: {
                elem: "Kopier logginnhold"
            },
            openlbl: {
                elem: "Generer loggfil"
            },
        }

        return translations
    }
}