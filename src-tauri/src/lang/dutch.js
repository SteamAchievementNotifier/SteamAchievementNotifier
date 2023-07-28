export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Geen gebruiker gedetecteerd",
                tt: "De Steam-gebruiker waarvoor momenteel prestaties worden bijgehouden"
            },
            gamelbl: {
                elem: gameName ? gameName : "Geen spel gedetecteerd",
                tt: "Het spel waarvoor momenteel prestaties worden bijgehouden"
            },
            previewbtn: {
                tt: "Voorbeeld van het geselecteerde geluid"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Standaard (Geen geluidsbestand geselecteerd)" : custom.sounddir ? custom.sounddir : "Standaard (Geen geluidsmap geselecteerd)"
            },              
            soundmodelbl: {
                elem: "Geluidsmodus:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "bestand" : "willekeurig"
            },
            togglemain: {
                elem: "Hoofd",
                tt: "Hoofdprestatie-melding"
            },
            togglerare: {
                elem: "Zeldzaam",
                tt: "Zeldzame prestatie-melding"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% prestatie-melding"
            },
            progresscirclewrapper: {
                tt: "Toon een voorbeeld van de aangepaste melding"
            },
            testbtnwrapper: {
                elem: "Toon testmelding",
                tt: "Toon een voorbeeld van de aangepaste melding",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Aanpassen...",
                tt: "Open het menu voor het aanpassen van de melding",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam is niet actief"
            },
            updatebtn: {
                tt: "Update beschikbaar"
            },
            kofibtn: "Doneer op Ko-Fi!",
            discordbtn: "Doe mee op Discord!",
            githubbtn: "Meld probleem op GitHub!",
            settingstitlelbl: {
                elem: "Instellingen"
            },
            configuration: {
                elem: "Configuratie",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Taal",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Besturingssysteem",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Meldingen",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Screenshots",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Toegankelijkheid",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Overige",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versie"
            },            
            apikeybtn: {
                tt: "Klik hier om uw Steam Web API-sleutel te krijgen"
            },
            apikey: {
                placeholder: "Voer uw API-sleutel in",
                tt: "De Steam Web API-sleutel gekoppeld aan uw Steam-account"
            },
            eyebtn: {
                tt: "Schakel zichtbaarheid API-sleutel in/uit"
            },
            apikeylbl: {
                elem: "API-sleutel ophalen"
            },
            steam64idbtn: {
                tt: "Klik hier om uw Steam64 ID te krijgen"
            },
            steam64id: {
                placeholder: "Voer uw Steam64-ID in",
                tt: "De Steam64 ID gekoppeld aan uw Steam-account"
            },
            steam64idlbl: {
                elem: "Steam64 ID ophalen"
            },
            switchaccountspan: {
                elem: "Accounts wisselen"
            },
            switchaccountbtn: {
                tt: "Wissel tussen gekoppelde Steam-accounts"
            },
            testconnectionlbl: {
                elem: "Verbinding testen",
                tt: "Test uw verbinding met de Steam Web API"
            },
            lang: {
                tt: "Stel de taal in voor zowel de gebruikersinterface als meldingen"
            },
            desktop: {
                elem: "Maak bureaubladkoppeling",
                tt: "Maak een snelkoppeling op het bureaublad om de app te starten",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Start met Windows",
                tt: "Voer de app automatisch uit wanneer Windows start",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Minimaliseer bij starten",
                tt: "Minimaliseer de app naar het systeemvak na het starten",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Hardwareversnelling uitschakelen",
                tt: "Schakel hardwareversnelling uit voor het app-venster",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite-modus",
                tt: "Schakelt het hoofdapp-venster uit om systeembronnen te besparen. Minimale opties blijven beschikbaar via het systeemvakpictogram om met de app te communiceren",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Zeldzaamheidspercentage",
                tt: `Alleen prestaties met een wereldwijd ontgrendelingspercentage onder dit aantal worden weergegeven als "Zeldzaam" meldingen`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Alleen geluidsmodus",
                tt: "Schakel meldingen uit, maar speel het geselecteerde geluid af bij het ontgrendelen van een prestatie",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Toon alle ontgrendelingspercentages",
                tt: "Toon wereldwijde ontgrendelingspercentages in alle meldingstypen",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Dupliceer naar extern venster",
                tt: "Dupliceer naar extern venster",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Toon venster met prestatiegegevens",
                tt: "Toon venster met prestatiegegevens",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Toon "Nu volgen" melding`,
                tt: `Schakel de "Nu volgen" melding in/uit bij het starten van een spel`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Kies de modus voor automatische prestatiescreenshots"
            },
            displayscreenshot: {
                elem: "Toon screenshot in melding",
                tt: "Toon een voorbeeld van screenshots in de prestatie-melding",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Stoomschermafbeeldingstoets",
                tt: "Pas uw Steam-clienttoetsenbord aan om native Steam-schermafbeeldingen te maken bij het ontgrendelen van prestaties",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Hoofd meldingsoverlay"
            },
            ovtabrare: {
                tt: "Zeldzame meldingsoverlay"
            },
            ovtabplat: {
                tt: "100% meldingsoverlay"
            },
            monitor: {
                elem: "Monitor",
                tt: "Selecteer de monitor die als bron voor schermafbeeldingen moet worden gebruikt",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overlaypositie",
                tt: "Stel de positie van de meldingsoverlay in",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Pad",
                tt: "Stel het pad in waar screenshots worden opgeslagen",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Voorbeeld",
                tt: "Voorbeeld van de meldingsoverlay",
                query: "label"
            },
            noanim: {
                elem: "Animaties in app-venster uitschakelen",
                tt: "Schakel overgangsanimaties uit in het app-venster",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDA-ondersteuning inschakelen",
                tt: "Kopieer meldingsinhoud naar het klembord om te worden voorgelezen door de NVDA-schermleessoftware",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Tooltips tonen",
                tt: "Schakel tooltips in bij het zweven over app-elementen",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "DevTools voor meldingen tonen",
                tt: "Open het DevTools-paneel voor meldingen wanneer het wordt geactiveerd",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Privacybeleid bekijken",
                tt: "Bekijk het privacybeleid van Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Word lid van het bèta-kanaal",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Open app-logboek",
                tt: "Bekijk en deel de inhoud van het app-logboek",
                query: "label"
            },
            resetbtn: {
                elem: "App resetten",
                tt: "Verwijder alle opgeslagen gegevens en start de app opnieuw",
                query: "label"
            },
            customiserplaystate: {
                tt: "Pauzeer/afspeel de animatie van de melding"
            },
            customiserreplay: {
                tt: "Speel de animatie van de melding opnieuw af"
            },
            customisersavepreset: {
                tt: "Sla de huidige aanpassingen op als een nieuwe meldingspreset"
            },
            tabbtnnext: {
                tt: "Volgende"
            },
            tabbtnprev: {
                tt: "Terug"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Meldingspreset",
                tt: "Selecteer een meldingspreset om aan te passen",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animatie zeldzaam icoon",
                tt: "Schakel de animatie van de achtergrond van het icoon in/uit",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Toon Alle Details",
                tt: `Toon alle beschikbare meldingsdetails`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Weergavetijd",
                tt: "De tijdsduur waarin de melding wordt weergegeven",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Schaal",
                tt: "De grootte van de melding<br><i>*Niet zichtbaar in het voorbeeldvenster</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Aangepaste tekst",
                tt: "Toon een aangepast bericht in de melding",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Gebruik speltitel",
                tt: "Toon de titel van het huidige spel in de melding",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stijl",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Achtergrondstijl",
                tt: "Stel de stijl van de meldingsachtergrond in",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradiënt hoek",
                tt: "Stel de hoek van de kleurgradiënt in",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Achtergrondafbeelding",
                tt: "Selecteer een afbeeldingsbestand om als achtergrond van de melding in te stellen",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Helderheid",
                tt: "Stel de helderheid van de spelafbeelding als achtergrond in",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Afgerondheid",
                tt: "Stel de afgerondheid van de hoeken van de melding in",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Tekengrootte",
                tt: "Stel de schaal van de tekst in",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Doorzichtigheid",
                tt: "Stel de doorzichtigheid van de melding in",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Alleen achtergrond",
                tt: "Pas alleen doorzichtigheid toe op de achtergrond, waardoor tekst en afbeeldingen volledig ondoorzichtig blijven",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Kleuren",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primaire kleur",
                tt: "Stel de primaire meldingskleur in",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Secundaire kleur",
                tt: "Stel de secundaire meldingskleur in",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Tekstkleur",
                tt: "Stel de kleur van de tekst in",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Tekstomlijning",
                tt: "Voeg een omlijning toe aan alle tekst in de melding",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Omlijningskleur",
                tt: "Stel de kleur van de tekstomlijning in",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Tekstschaduw",
                tt: "Voeg een schaduw toe aan alle tekst in de melding",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Schaduwkleur",
                tt: "Stel de kleur van de tekstschaduw in",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Icoon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Afgerondheid icoon",
                tt: "Stel de afgerondheid van het meldingsicoon in",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Aangepast icoon",
                tt: "Gebruik een afbeeldingsbestand als aangepast icoon",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Aangepast icoon",
                tt: "Selecteer een afbeeldingsbestand om als aangepast icoon in te stellen",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Herstel Aangepast Icoon`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Aangepast 100% icoon",
                tt: `Gebruik een afbeeldingsbestand als aangepast 100% icoon`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Aangepast 100% icoon",
                tt: `Selecteer een afbeeldingsbestand om in te stellen als aangepast 100% icoon`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Herstel het aangepaste 100% icoon`,
                query: ".sanboxlbl"
            },
            usegameicon: {
                elem: "Gebruik spelicoon",
                tt: "Gebruik het icoon van het huidige spel",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Positie",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Schermpositie",
                tt: "Stel de positie van de melding op het scherm in",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Aangepaste positie",
                tt: "Gebruik een aangepaste positie voor de melding",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Positie instellen",
                tt: "Stel een aangepaste positie voor de melding in",
                query: "label"
            },
            animdir: {
                elem: "Animatierichting",
                tt: "Stel de richting van de animatie van de melding in",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "PRIVACYBELEID"
            },
            ppusagetitle: {
                elem: `GEBRUIK VAN STEAM WEB API-GEGEVENS`
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier maakt gebruik van Valve's <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> om gegevens op te halen en weer te geven die betrekking hebben op de Steam-accounts van de gebruiker, via de Steam API-sleutel/Steam64 ID-combinatie die door de gebruiker aan de applicatie wordt verstrekt. Deze gegevens omvatten:`
            },
            ppstats: {
                elem: "Statistieken voor vergrendelde en ontgrendelde prestaties"
            },
            ppusername: {
                elem: "Uw Steam-gebruikersnaam"
            },
            ppsteamgames: {
                elem: "Uw gespeelde Steam-games"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier kan in de toekomst meer Steam Web API-gegevens gebruiken om extra functies en updates voor de applicatie te bieden."
            },
            ppkey64title: {
                elem: "GEBRUIK VAN STEAM API-SLEUTEL/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier vereist dat de gebruiker hun Steam API-sleutel/Steam64 ID-combinatie invoert voor geauthenticeerde toegang tot de Steam Web API."
            },
            ppnoauth: {
                elem: "Zonder deze informatie kunnen webkoppelingen (die door Valve worden verstrekt om toegang te krijgen tot de Steam Web API) die worden gebruikt om gegevens met betrekking tot de Steam-accounts van de gebruiker op te halen, inclusief prestatiegegevens, niet worden geopend."
            },
            ppstoragetitle: {
                elem: "OPSLAG VAN STEAM WEB API-GEGEVENS"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier slaat tijdelijk Steam Web API-gegevens lokaal op op de computer van de gebruiker, uitsluitend voor gebruik binnen de applicatie. Alle tijdelijke opslag van deze gegevens is uitsluitend bedoeld voor gebruik door Steam Achievement Notifier, en onder normale omstandigheden worden alle niet-persistente Steam Web API-gegevens gewist uit de lokale opslag bij het afsluiten van de applicatie."
            },
            pppersist: {
                elem: "Persistente gegevens die op het apparaat van de gebruiker worden opgeslagen, omvatten alleen gegevens die door de applicatie worden opgeslagen voor het gemak van de gebruiker, zoals de Steam Web API-sleutel en Steam64 ID van de gebruiker."
            },
            ppdelete: {
                elem: "Deze gegevens kunnen ook op elk gewenst moment handmatig door de gebruiker worden verwijderd indien nodig. Bestanden die zijn gemaakt door Steam Achievement Notifier bevinden zich in de volgende map:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Momenteel niet ondersteund"
            },
            ppcollecttitle: {
                elem: "STANDPUNT BETREFFENDE GEGEVENSVERZAMELING"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier zal <u>nooit</u> gebruikersgegevens verzenden of buiten het lokale bestandssysteem van de gebruiker opslaan zonder de expliciete toestemming van de gebruiker. Dit omvat alle informatie die via de Steam Web API wordt opgehaald voor gebruik binnen de applicatie, inclusief de Steam API-sleutel/Steam64 ID-combinatie die aan de applicatie wordt verstrekt voor toegang tot de Steam Web API."
            },
            ppconsent: {
                elem: "Door bevestiging van toestemming en daaropvolgend gebruik van bestaande of toekomstige implementaties van functies die zijn ontworpen om informatie extern te verzenden, wordt impliciet toestemming verleend door de gebruiker om dit te doen. In deze gevallen wordt de gebruiker altijd op de hoogte gesteld van de aard van de verzonden gegevens en wordt hem gevraagd om toestemming te bevestigen om gegevens buiten de applicatie te verzenden."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier sluit opzettelijk elke mogelijkheid uit om extern toegang te krijgen, informatie te bekijken of gegevens te verzamelen die door de gebruiker aan de applicatie zijn verstrekt, maar via bestaande of toekomstige implementaties van functies kan de applicatie mogelijk gegevens extern verzenden namens de gebruiker, maar alleen na hun toestemming om dit te doen."
            },
            pprequests: {
                elem: "Verzoeken om toegang tot gegevens van de Steam Web API worden vanuit de applicatie zelf gedaan met behulp van ingebouwde methoden, vergelijkbaar met de functionaliteit die webbrowsers bieden. Deze verzoeken bevatten de Steam API-sleutel/Steam64 ID-combinatie van de gebruiker zoals vereist door de Steam Web API, maar worden nooit opzettelijk beschikbaar gesteld voor gebruik of onderschepping door andere applicaties."
            },
            ppusertitle: {
                elem: "GEBRUIKERSVERANTWOORDELIJKHEID"
            },
            ppsteamtou: {
                elem: `DOOR HET DOWNLOADEN EN GEBRUIKEN VAN ENIGE OFFICIEEL UITGEBRACHTE VERSIE VAN STEAM ACHIEVEMENT NOTIFIER VIA HET <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICIËLE GITHUB-REPOSITORY</span>, GAAT U ALS GEBRUIKER, BIJ UITBREIDING, AKKOORD MET SECTIES 7 EN 8 VAN DE <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">GEBRUIKSVOORWAARDEN VAN DE STEAM WEB API</span>.`
            },
            gamedetails: "Spelgegevens",
            mustbepublic: "moet ingesteld worden als Openbaar",            
            nosoundfile: "Standaard (Geen geluidsbestand geselecteerd)",
            nosoundfolder: "Standaard (Geen geluidsmap geselecteerd)",
            file: "Bestand",
            randomised: "Willekeurig",            
            audioselectdialog: `Selecteer Geluid ${custom.mode === "file" ? "Bestand" : "Map"}`,
            imgselectdialog: `Selecteer Afbeeldingsbestand`,
            unsupported: "Niet-ondersteund bestand!",
            novalidaudiofiles: "Geen geldige audiobestanden!",
            nolocate: "Kan bestand niet vinden!",
            switchaccountstitle: "Accounts wisselen",
            noaccounts: "Voeg een account toe om te beginnen!",
            connecting: "Verbinden...",
            connected: "Verbonden",
            testsuccessuser: `Je bent er klaar voor`,
            testsuccess1: `Zorg ervoor dat je <span>Spelgegevens</span> zijn ingesteld op <span>Openbaar</span> in <a href="${privacysettings}">de privacy-instellingen van Steam</a>`,
            testsuccess2: `Controleer of je in-game weergavemodus is ingesteld op <span>Borderless</span> zodat meldingen boven het speelvenster worden weergegeven`,
            noapikeytitle: "Geen API-sleutel",
            noapikeytxt: "Voer je API-sleutel in",
            noapikeyhint: `Klik op het <img src="./icon/key.svg" alt=""> pictogram om je API-sleutel te krijgen`,
            nosteam64idtitle: "Geen Steam64 ID",
            nosteam64idtxt: "Voer je Steam64 ID in",
            nosteam64idhint: `Klik op het <img src="./icon/id.svg" alt=""> pictogram om je Steam64 ID te krijgen`,
            invalidapikeytitle: "Ongeldige API-sleutel!",
            invalidapikeymsg: "Kan geen toegang krijgen tot de Steam Web API met de opgegeven API-sleutel",
            invalidapikeydetail1: "Controleer of je API-sleutel juist is",
            invalidapikeydetail2: "Genereer een nieuwe API-sleutel voor je account",
            invalidsteam64idtitle: "Ongeldige Steam64 ID!",
            invalidsteam64idmsg: "Kan geen Steam-account vinden dat is gekoppeld aan de opgegeven Steam64 ID",
            invalidsteam64iddetail1: "Controleer of de opgegeven waarde voor Steam64 ID de juiste waarde is voor je Steam-account",
            nonetworkfound: "Geen actieve netwerkverbinding gevonden",
            connecttonetwork: "Verbind je pc met een netwerk en probeer het opnieuw",
            testdefaulterrortitle: "Er is een fout opgetreden!",
            testdefaulterrormsg: "Er is een fout opgetreden bij het verbinden met de Steam Web API",
            testdefaulterrordetail1: "Meld dit probleem op Discord of GitHub!",
            sspath: "Selecteer Screenshot-pad",
            wronguser: user ? `${user} niet ingelogd bij Steam!` : "Geen gekoppelde gebruikersaccounts gevonden!",
            switchuser: "Klik hier om accounts te wisselen",
            trackingfailed: "Tracking mislukt!",
            checkapplog: "Controleer de app-log voor details",
            soon: "Binnenkort!",
            gamecomplete: "100% Voltooid",
            gametitle: "Speltitel",
            achievementunlocked: "Behaalde prestatie",
            achievementtitle: "Prestatietitel",
            allachievements: "Je hebt alle prestaties behaald!",
            achievementdesc: "Beschrijving van de prestatie",
            show: "Weergeven",
            quit: "Afsluiten",
            off: "Uit",
            steamss: "Steam Spel Schermafbeelding",
            overlayss: "Schermafbeelding met Meldingsoverlay",
            match: "Customiser Instelling",
            topleft: "Linksboven",
            topcenter: "Middenboven",
            topright: "Rechtsboven",
            bottomleft: "Linksonder",
            bottomcenter: "Middenonder",
            bottomright: "Rechtsonder",
            solid: "Effen",
            gradient: "Verloop",
            bgimg: "Achtergrondafbeelding",
            gameart: "Spelafbeelding",
            up: "Omhoog",
            down: "Omlaag",
            left: "Links",
            right: "Rechts",
            tracking: "Nu Volgen"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Selecteer een geluidsbestand om af te spelen bij het ontgrendelen van een prestatie" : "Selecteer een map met audiobestanden om willekeurig af te spelen bij het ontgrendelen van een prestatie")    
        
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Hier is een logboek van wat er is gebeurd sinds de app werd gestart om"
            },
            copylbl: {
                elem: "Kopieer Logboekinhoud"
            },
            openlbl: {
                elem: "Genereer Logbestand"
            }
        }

        return translations
    }
}