export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Ingen bruger fundet",
                tt: "Den Steam-bruger, hvis præstationer der i øjeblikket bliver fulgt"
            },
            gamelbl: {
                elem: gameName ? gameName : "Ingen spil fundet",
                tt: "Det spil, hvis præstationer der i øjeblikket bliver fulgt"
            },
            previewbtn: {
                tt: "Forhåndsvis den valgte lyd"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Standard (Ingen lydfil valgt)" : custom.sounddir ? custom.sounddir : "Standard (Ingen lydmappe valgt)"
            },              
            soundmodelbl: {
                elem: "Lydtilstand:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fil" : "tilfældig"
            },
            togglemain: {
                elem: "Hoved",
                tt: "Meddelelse om hovedpræstation"
            },
            togglerare: {
                elem: "Sjælden",
                tt: "Meddelelse om sjælden præstation"
            },
            toggleplat: {
                elem: "100%",
                tt: "Meddelelse om 100% præstation"
            },
            progresscirclewrapper: {
                tt: "Vis en forhåndsvisning af den tilpassede meddelelse"
            },
            testbtnwrapper: {
                elem: "Vis testmeddelelse",
                tt: "Vis en forhåndsvisning af den tilpassede meddelelse",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Tilpas...",
                tt: "Åbn menuen for tilpasning af meddelelse",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam kører ikke"
            },
            updatebtn: {
                tt: "Opdatering tilgængelig"
            },
            kofibtn: "Donér på Ko-Fi!",
            discordbtn: "Deltag på Discord!",
            githubbtn: "Rapporter problem på GitHub!",            
            settingstitlelbl: {
                elem: "Indstillinger"
            },
            configuration: {
                elem: "Konfiguration",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Sprog",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Operativsystem",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Meddelelser",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Skærmbilleder",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Tilgængelighed",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Andet",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "App Revision"
            },
            apikeybtn: {
                tt: "Klik her for at få din Steam Web API-nøgle"
            },
            apikey: {
                placeholder: "Indtast din API-nøgle",
                tt: "Steam Web API-nøglen forbundet med din Steam-konto"
            },
            eyebtn: {
                tt: "Skift synlighed for API-nøgle"
            },
            apikeylbl: {
                elem: "Få API-nøgle"
            },
            steam64idbtn: {
                tt: "Klik her for at få din Steam64 ID"
            },
            steam64id: {
                placeholder: "Indtast din Steam64 ID",
                tt: "Steam64 ID'et forbundet med din Steam-konto"
            },
            steam64idlbl: {
                elem: "Få Steam64 ID"
            },
            switchaccountspan: {
                elem: "Skift Konti"
            },
            switchaccountbtn: {
                tt: "Skift mellem tilknyttede Steam-konti"
            },
            testconnectionlbl: {
                elem: "Test Forbindelse",
                tt: "Test din forbindelse til Steam Web API'en"
            },            
            lang: {
                tt: "Indstil sprog for både brugerflade og meddelelser"
            },
            desktop: {
                elem: "Opret skrivebordsgenvej",
                tt: "Opret en genvej på skrivebordet for at starte appen",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Start med Windows",
                tt: "Kør appen automatisk, når Windows starter",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Start minimeret",
                tt: "Minimer appen til systembakken efter start",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Deaktiver hardwareacceleration",
                tt: "Deaktiver hardwareacceleration for appvinduet",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite-tilstand",
                tt: "Deaktiver hovedappvinduet for at spare systemressourcer. Der vil stadig være minimale muligheder tilgængelige via systembakkeikonet for at interagere med appen",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Sjældenhedsprocent",
                tt: `Kun præstationer med en global låseprocent under dette tal vises som "Sjældne" meddelelser`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Kun lydtilstand",
                tt: "Deaktiver meddelelser, men afspil den valgte lyd, når der låses en præstation op",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Vis alle låseprocenter",
                tt: "Vis globale låseprocenter inden for alle meddelelstyper",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplikér til eksternt vindue",
                tt: "Duplikér til eksternt vindue",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Vis præstationsstatistikvindue",
                tt: "Vis præstationsstatistikvindue",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Vis "Nu Sporings" meddelelse`,
                tt: `Skift "Nu Sporings" meddelelsen, når et spil startes`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Vælg tilstanden for automatisk præstationsskærmbilleder"
            },
            displayscreenshot: {
                elem: "Vis skærmbillede i meddelelse",
                tt: "Vis en forhåndsvisning af skærmbilleder inden for præstationsmeddelelsen",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam Skærmbilledetast",
                tt: "Match din Steam-klientstast til at tage native Steam-præstationsskærmbilleder, når præstationer låses op",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Hovedmeddelelses Overlay`
            },
            ovtabrare: {
                tt: `Sjælden meddelelses overlay`
            },
            ovtabplat: {
                tt: `100% meddelelses overlay`
            },
            monitor: {
                elem: "Monitor",
                tt: "Vælg monitoren som kilde til skærmbilledet",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overlay Position",
                tt: "Indstil positionen for meddelelsesoverlayet",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Sti",
                tt: "Indstil stien, hvor skærmbilleder vil blive gemt",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Forhåndsvisning",
                tt: `Forhåndsvis meddelelsesoverlayet`,
                query: "label"
            },
            noanim: {
                elem: "Deaktiver appvinduesanimationer",
                tt: "Deaktiver overgangsanimationer inden for appvinduet",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Aktivér NVDA-support",
                tt: "Kopier meddelelsesindholdet til udklipsholderen for at blive læst af NVDA-skærmlæser-softwaren",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Vis værktøjstips",
                tt: "Skift værktøjstips, når du holder musen over app-elementer",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Vis meddelelsesudviklerværktøjer",
                tt: "Åbn meddelelsens DevTools-panel, når det udløses",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Se privatlivspolitik",
                tt: "Se Steam Achievement Notifiers privatlivspolitik",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Deltag i betakanalen",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Åbn applog",
                tt: "Se og del indholdet af apploggen",
                query: "label"
            },
            resetbtn: {
                elem: "Nulstil app",
                tt: "Fjern al gemt data og genstart appen",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Pause/afspil meddelelsesanimationen"
            },
            customiserreplay: {
                tt: "Gentag meddelelsesanimationen"
            },
            customisersavepreset: {
                tt: "Gem nuværende tilpasninger som en ny meddelelsesforudindstilling"
            },
            tabbtnnext: {
                tt: "Næste"
            },
            tabbtnprev: {
                tt: "Tilbage"
            },
            notificationpreset: {
                elem: "Forudindstilling",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Meddelelsesforudindstilling",
                tt: "Vælg en meddelelsesforudindstilling for at tilpasse",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Sjælden ikonanimation",
                tt: `Skift animationen af ikonets baggrund`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Vis alle detaljer",
                tt: `Vis alle tilgængelige meddelelsesdetaljer`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Visningstid",
                tt: "Længden af tid, som meddelelsen vil være synlig",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skalér",
                tt: "Størrelsen på meddelelsen<br><i>*Ikke afspejlet i forhåndsvisningsvinduet</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Brugerdefineret tekst",
                tt: "Vis en brugerdefineret besked i meddelelsen",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Brug spiltitel",
                tt: "Vis titlen på det aktuelle spil i meddelelsen",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Baggrundsstil",
                tt: "Indstil stilen for meddelelsesbaggrunden",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradientvinkel",
                tt: "Indstil vinklen for farvegradienten",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Baggrundsbillede",
                tt: "Vælg en billedfil som meddelelsesbaggrund",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Spilarts lysstyrke",
                tt: "Indstil lysstyrken for spilartsbaggrunden",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Rundhed",
                tt: "Indstil rundheden for meddelelseshjørnerne",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Skriftstørrelse",
                tt: "Indstil størrelsen på skriften",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Gennemsigtighed",
                tt: "Indstil meddelelsens gennemsigtighed",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Kun baggrund",
                tt: "Anvend kun gennemsigtighed på baggrunden og efterlad tekst og billeder fuldt synlige",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Farver",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primærfarve",
                tt: "Indstil primær farve for meddelelsen",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Sekundærfarve",
                tt: "Indstil sekundær farve for meddelelsen",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Tekstfarve",
                tt: "Indstil farven på teksten",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Tekstkant",
                tt: "Anvend en kantlinje til al tekst i meddelelsen",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Kantlinjefarve",
                tt: "Indstil farven på tekstens kantlinje",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Tekstskygge",
                tt: "Anvend en skygge til al tekst i meddelelsen",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Skyggefarve",
                tt: "Indstil farven på tekstens skygge",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Ikonrundhed",
                tt: "Indstil rundheden for meddelelsens ikon",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Brug brugerdefineret ikon",
                tt: `Brug en billedfil som brugerdefineret ikon`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Brugerdefineret ikon",
                tt: `Vælg en billedfil som brugerdefineret ikon`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Nulstil brugerdefineret ikon`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Brugerdefineret 100% Ikon",
                tt: `Brug en billedfil som brugerdefineret 100% ikon`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Brugerdefineret 100% Ikon",
                tt: `Vælg en billedfil for at indstille som brugerdefineret 100% ikon`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Nulstil det brugerdefinerede 100% ikon`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Brug spilikon",
                tt: `Brug det aktuelle spils ikon`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "Position",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Skærmposition",
                tt: `Indstil positionen for meddelelsen på skærmen`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Brug tilpasset position",
                tt: "Brug en brugerdefineret position for meddelelsen",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Indstil position",
                tt: "Indstil en brugerdefineret position for meddelelsen",
                query: "label"
            },
            animdir: {
                elem: "Animationsretning",
                tt: "Indstil retningen for meddelelsens animation",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "PRIVATLIVSPOLITIK"
            },
            ppusagetitle: {
                elem: "DATAANVENDELSE FOR STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier bruger Valves <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> til at hente og vise data relateret til brugerens Steam-konto(er), via Steam API-nøgle/Steam64 ID-kombinationen, som brugeren angiver til applikationen. Disse data inkluderer:`
            },
            ppstats: {
                elem: "Statistik for låste og ulåste præstationer"
            },
            ppusername: {
                elem: "Dit Steam-brugernavn"
            },
            ppsteamgames: {
                elem: "Dine spillede Steam-spil"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier kan i fremtiden bruge yderligere data fra Steam Web API til at levere yderligere applikationsfunktioner og opdateringer."
            },
            ppkey64title: {
                elem: "ANVENDELSE AF STEAM API-NØGLE/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier kræver, at brugeren indtaster deres Steam API-nøgle/Steam64 ID-kombination for at få adgang til Steam Web API."
            },
            ppnoauth: {
                elem: "Uden disse oplysninger kan websteder (som Valve leverer til at få adgang til Steam Web API) til at hente data relateret til en brugers Steam-konto(er) - herunder præstationsdata - ikke få adgang til dataene."
            },
            ppstoragetitle: {
                elem: "DATAOPBEVARING FOR STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier gemmer midlertidigt Steam Web API-data lokalt på brugerens pc udelukkende til brug i applikationen. Enhver midlertidig opbevaring af disse data er udelukkende beregnet til brug af Steam Achievement Notifier, og under normale omstændigheder vil al ikke-varig Steam Web API-data blive slettet fra lokal lagring, når applikationen afsluttes."
            },
            pppersist: {
                elem: "Vedvarende data, der er gemt på brugerens enhed, inkluderer kun data, der er gemt af applikationen af hensyn til brugerens bekvemmelighed, såsom brugerens Steam Web API-nøgle og Steam64 ID."
            },
            ppdelete: {
                elem: "Disse data kan også slettes manuelt af brugeren når som helst, hvis det er nødvendigt. Filer oprettet af Steam Achievement Notifier findes i følgende mappe:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "I øjeblikket ikke understøttet"
            },
            ppcollecttitle: {
                elem: "INDSTILLING TIL DATAINDSAMLING"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier vil <u>aldrig</u> sende eller gemme brugerdata uden for brugerens lokale filsystem uden brugerens udtrykkelige tilladelse til at gøre det. Dette inkluderer enhver information, der hentes via Steam Web API til brug i applikationen, herunder Steam API-nøgle/Steam64 ID-kombinationen, som brugeren angiver til applikationen for at få adgang til Steam Web API."
            },
            ppconsent: {
                elem: "Ved bekræftelse af samtykke og efterfølgende brug af eksisterende eller fremtidige funktioner designet til at sende oplysninger eksternt, gives der implicit tilladelse fra brugeren til at gøre dette. I disse tilfælde vil brugeren altid blive informeret om arten af de data, der sendes, og bliver bedt om at bekræfte samtykke til at sende data uden for applikationen."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier udelukker bevidst enhver mulighed for ekstern adgang, visning eller indsamling af nogen oplysninger, som brugeren giver til applikationen, men via eksisterende eller fremtidige funktioner kan applikationen muligvis sende data eksternt på brugerens vegne, men kun efter deres samtykke til at gøre det."
            },
            pprequests: {
                elem: "Anmodninger om adgang til data fra Steam Web API foretages fra applikationen selv ved hjælp af indbyggede metoder, der ligner funktionaliteten i webbrowsere. Disse anmodninger indeholder brugerens Steam API-nøgle/Steam64 ID-kombination, som kræves af Steam Web API, men de gøres aldrig bevidst tilgængelige til brug eller opfanging af andre applikationer."
            },
            ppusertitle: {
                elem: "BRUGERANSVAR"
            },
            ppsteamtou: {
                elem: `VED AT DOWNLOADE OG BRUGE ENHVER OFFICIELT FRIGIVET VERSION AF STEAM ACHIEVEMENT NOTIFIER VIA <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICIELL GITHUB REPOSITORY</span> OVERHOLDER DU, SOM BRUGER, I FORLÆNGELSE HERAF SEKTION 7 OG 8 I <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">STEAM WEB API-BRUGSBETINGELSERNE</span>.`
            },
            gamedetails: "Spiloplysninger",
            mustbepublic: "skal være offentlig",            
            nosoundfile: "Standard (Ingen lydfil valgt)",
            nosoundfolder: "Standard (Ingen lydmappe valgt)",
            file: "Fil",
            randomised: "Tilfældig",                  
            audioselectdialog: `Vælg Lyd ${custom.mode === "file" ? "Fil" : "Mappe"}`,
            imgselectdialog: `Vælg Billedefil`,
            unsupported: "Ikke-understøttet fil!",
            novalidaudiofiles: "Ingen gyldige lydfiler!",
            nolocate: "Kan ikke finde filen!",
            switchaccountstitle: "Skift konti",
            noaccounts: "Tilføj en konto for at komme i gang!",
            connecting: "Forbinder...",
            connected: "Forbundet",
            testsuccessuser: `Du er klar til at fortsætte`,
            testsuccess1: `Sørg for, at dine <span>Spiloplysninger</span> er indstillet til <span>Offentlig</span> i <a href="${privacysettings}">Steam's Privatlivsindstillinger</a>`,
            testsuccess2: `Kontrollér, at din in-game-visningstilstand er indstillet til <span>Randløs</span> for at vise meddelelser over spilvinduet`,
            noapikeytitle: "Ingen API-nøgle",
            noapikeytxt: "Indtast venligst din API-nøgle",
            noapikeyhint: `Klik på <img src="./icon/key.svg" alt=""> ikonet for at få din API-nøgle`,
            nosteam64idtitle: "Ingen Steam64 ID",
            nosteam64idtxt: "Indtast venligst din Steam64 ID",
            nosteam64idhint: `Klik på <img src="./icon/id.svg" alt=""> ikonet for at få din Steam64 ID`,
            invalidapikeytitle: "Ugyldig API-nøgle!",
            invalidapikeymsg: "Kunne ikke få adgang til Steam Web API med den angivne API-nøgle",
            invalidapikeydetail1: "Kontrollér, at din API-nøgle er korrekt",
            invalidapikeydetail2: "Generer en ny API-nøgle til din konto",
            invalidsteam64idtitle: "Ugyldig Steam64 ID!",
            invalidsteam64idmsg: "Kunne ikke finde en Steam-konto, der er forbundet med den angivne Steam64 ID",
            invalidsteam64iddetail1: "Kontrollér, at den angivne Steam64 ID-værdi er korrekt for din Steam-konto",
            nonetworkfound: "Ingen aktiv netværksforbindelse fundet",
            connecttonetwork: "Tilslut din pc til et netværk og prøv igen",
            testdefaulterrortitle: "Der opstod en fejl!",
            testdefaulterrormsg: "Der opstod en fejl ved forbindelsen til Steam Web API",
            testdefaulterrordetail1: "Rapporter venligst dette problem på Discord eller GitHub!",
            sspath: "Vælg Skærmbillede Sti",
            wronguser: user ? `${user} er ikke logget ind på Steam!` : "Ingen tilknyttede brugerkonti fundet!",
            switchuser: "Klik her for at skifte bruger",
            trackingfailed: "Registrering mislykkedes!",
            checkapplog: "Tjek app-loggen for detaljer",
            soon: "Kommer snart!",
            gamecomplete: "100% Færdiggjort",
            gametitle: "Spiltitel",
            achievementunlocked: "Præstation låst op",
            achievementtitle: "Præstationstitel",
            allachievements: "Du har låst alle præstationer op!",
            achievementdesc: "Præstationsbeskrivelse",
            show: "Vis",
            quit: "Afslut",
            off: "Fra",
            steamss: "Steam In-Game Skærmbillede",
            overlayss: "Skærmbillede med Meddelelsesoverlay",
            match: "Tilpasning af Udseende",
            topleft: "Øverst til venstre",
            topcenter: "Øverst i midten",
            topright: "Øverst til højre",
            bottomleft: "Nederst til venstre",
            bottomcenter: "Nederst i midten",
            bottomright: "Nederst til højre",
            solid: "Solid",
            gradient: "Gradient",
            bgimg: "Baggrundsbillede",
            gameart: "Spilkunst",
            up: "Op",
            down: "Ned",
            left: "Venstre",
            right: "Højre",
            tracking: "Nu Sporing"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Vælg en lydfil, der skal afspilles, når en præstation låses op" : "Vælg en mappe med lydfiler, der skal afspilles tilfældigt, når en præstation låses op");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Her er en log over, hvad der er sket siden appen blev startet kl."
            },
            copylbl: {
                elem: "Kopier logindhold"
            },
            openlbl: {
                elem: "Generer logfil"
            },
        }        

        return translations
    }
}