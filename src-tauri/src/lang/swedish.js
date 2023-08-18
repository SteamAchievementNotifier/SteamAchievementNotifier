export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Ingen användare upptäckt",
                tt: "Steam-användaren för vilken prestationer för närvarande spåras"
            },
            gamelbl: {
                elem: gameName ? gameName : "Inget spel upptäckt",
                tt: "Spelet för vilket prestationer för närvarande spåras"
            },
            previewbtn: {
                tt: "Förhandsgranska det valda ljudet"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Standard (Inget ljudfil valt)" : custom.sounddir ? custom.sounddir : "Standard (Ingen ljudmapp vald)"
            },              
            soundmodelbl: {
                elem: "Ljudläge:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fil" : "slumpmässig"
            },
            togglemain: {
                elem: "Huvud",
                tt: "Huvudprestationsnotifiering"
            },
            togglerare: {
                elem: "Sällsynt",
                tt: "Sällsynt prestationnotifiering"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% prestationnotifiering"
            },
            progresscirclewrapper: {
                tt: "Visa en förhandsgranskning av den anpassade notifieringen"
            },
            testbtnwrapper: {
                elem: "Visa testnotifiering",
                tt: "Visa en förhandsgranskning av den anpassade notifieringen",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Anpassa...",
                tt: "Öppna menyn för anpassning av notifieringen",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam körs inte"
            },
            updatebtn: {
                tt: "Uppdatering tillgänglig"
            },
            kofibtn: "Donera på Ko-Fi!",
            discordbtn: "Gå med på Discord!",
            githubbtn: "Rapportera problem på GitHub!",
            settingstitlelbl: {
                elem: "Inställningar"
            },
            configuration: {
                elem: "Konfiguration",
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
                elem: "Notifikationer",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Skärmbilder",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Tillgänglighet",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Övrigt",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Version"
            },            
            apikeybtn: {
                tt: "Klicka här för att få din Steam Web API-nyckel"
            },
            apikey: {
                placeholder: "Ange din API-nyckel",
                tt: "Steam Web API-nyckeln associerad med ditt Steam-konto"
            },
            eyebtn: {
                tt: "Växla API-nyckelsynlighet"
            },
            apikeylbl: {
                elem: "Få API-nyckel"
            },
            steam64idbtn: {
                tt: "Klicka här för att få din Steam64 ID"
            },
            steam64id: {
                placeholder: "Ange din Steam64-ID",
                tt: "Steam64 ID associerad med ditt Steam-konto"
            },
            steam64idlbl: {
                elem: "Få Steam64 ID"
            },
            switchaccountspan: {
                elem: "Byt konto"
            },
            switchaccountbtn: {
                tt: "Växla mellan länkade Steam-konton"
            },
            testconnectionlbl: {
                elem: "Testa anslutning",
                tt: "Testa din anslutning till Steam Web API"
            },
            lang: {
                tt: "Ställ in språk för både gränssnitt och notifikationer"
            },
            desktop: {
                elem: "Skapa skrivbordsgenväg",
                tt: "Skapa en genväg på skrivbordet för att starta appen",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Starta med Windows",
                tt: "Kör appen automatiskt när Windows startar",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Starta minimerad",
                tt: "Minimera appen till systemfältet efter start",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Inaktivera hårdvaruacceleration",
                tt: "Inaktivera hårdvaruacceleration för appfönstret",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Läge för låga resurser",
                tt: "Inaktiverar huvudappfönstret för att spara systemresurser. Minimala alternativ kommer att vara tillgängliga via systemfältets ikon för att interagera med appen",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Raritetsprocent",
                tt: `Endast prestationer med en global låsprocent under det här numret kommer att visas som "Sällsynta" notifikationer`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Endast ljudläge",
                tt: "Inaktivera notifikationer, men spela det valda ljudet vid upplåsning av en prestation",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Se alla procentsatser",
                tt: "Visa globala upplåsningsprocent i alla typer av notifikationer",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicera till externt fönster",
                tt: "Duplicera till externt fönster",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Visa prestationstatistikfönster",
                tt: "Visa prestationstatistikfönster",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Visa "Nu spåras" notifikation`,
                tt: `Växla "Nu spåras" notifikation när du startar ett spel`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Meddelandesnabbval",
                tt: "Ange en tangentbordsgenväg för att aktivera testmeddelanden",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Ange en genväg för att aktivera ett testmeddelande för denna typ"
            },
            sctabmain: {
                tt: "Huvudmeddelandesnabbval"
            },
            sctabrare: {
                tt: "Sällsynt meddelandesnabbval"
            },
            sctabplat: {
                tt: "100 % meddelandesnabbval"
            },
            screenshotmode: {
                tt: "Välj läge för automatiska prestationsskärmdumpar"
            },
            displayscreenshot: {
                elem: "Visa skärmdump i notifikation",
                tt: "Visa en förhandsgranskning av skärmdumpar i prestationnotifieringen",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam skärmdumpknapp",
                tt: "Matcha din Steam-klients knappbindning för att ta nativa Steam skärmdumpar vid upplåsning av prestationer",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Huvudnotifieringsöverlag"
            },
            ovtabrare: {
                tt: "Sällsynt notifieringsöverlag"
            },
            ovtabplat: {
                tt: "100% notifieringsöverlag"
            },
            monitor: {
                elem: "Skärm",
                tt: "Välj skärmen att använda som källa för skärmdumpar",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Överlagsposition",
                tt: "Ställ in positionen för notifikationsöverlaget",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Sökväg",
                tt: "Ställ in sökvägen där skärmdumpar kommer att sparas",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Förhandsvisa",
                tt: "Förhandsvisa notifikationsöverlaget",
                query: "label"
            },
            noanim: {
                elem: "Inaktivera appfönster-animationer",
                tt: "Inaktivera övergångsanimationer inom appfönstret",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Aktivera NVDA-stöd",
                tt: "Kopiera notifikationsinnehållet till urklipp för att läsas av skärmläsaren NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Visa verktygstips",
                tt: "Växla verktygstips när du hovrar över app-element",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Visa notifikationsutvecklarverktyg",
                tt: "Öppna notifikationens utvecklarpanel när den aktiveras",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Visa sekretesspolicy",
                tt: "Visa Steam Achievement Notifiers sekretesspolicy",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Gå med i beta-kanalen",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Öppna apploggen",
                tt: "Visa och dela innehållet i apploggen",
                query: "label"
            },
            resetbtn: {
                elem: "Återställ appen",
                tt: "Ta bort all lagrad data och starta om appen",
                query: "label"
            },
            customiserplaystate: {
                tt: "Pausa/spela upp animationsmeddelandet"
            },
            customiserreplay: {
                tt: "Spela upp animationsmeddelandet igen"
            },
            customisersavepreset: {
                tt: "Spara nuvarande anpassningar som en ny meddelandeförinställning"
            },
            tabbtnnext: {
                tt: "Nästa"
            },
            tabbtnprev: {
                tt: "Tillbaka"
            },
            notificationpreset: {
                elem: "Förinställning",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Meddelandeförinställning",
                tt: "Välj en meddelandeförinställning att anpassa",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Sällsynt ikonanimation",
                tt: `Växla animationen av ikonens bakgrund`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Visa Alla Detaljer",
                tt: `Visa alla tillgängliga meddelandedetaljer`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Visningstid",
                tt: "Längden på tiden som meddelandet kommer att visas",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skala",
                tt: "Storleken på meddelandet<br><i>*Återspeglas inte i förhandsvisningsfönstret</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Anpassad text",
                tt: "Visa ett anpassat meddelande i meddelandet",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Använd spelnamn",
                tt: "Visa namnet på det aktuella spelet i meddelandet",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Bakgrundsstil",
                tt: "Ställ in stilen på meddelandets bakgrund",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradientvinkel",
                tt: "Ställ in vinkeln på färggradienten",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Bakgrundsbild",
                tt: "Välj en bildfil att använda som meddelandets bakgrund",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Ljusstyrka",
                tt: "Ställ in ljusstyrkan på spelkonstens bakgrund",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Rundhet",
                tt: "Ställ in rundheten på meddelandets hörn",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Teckenstorlek",
                tt: "Ställ in skalan på teckensnittet",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacitet",
                tt: "Ställ in opaciteten på meddelandet",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Endast bakgrund",
                tt: "Tillämpa endast opacitet på bakgrunden, så att text och bilder är helt opaka",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Färger",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primärfärg",
                tt: "Ställ in primärfärgen för meddelandet",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Sekundärfärg",
                tt: "Ställ in sekundärfärgen för meddelandet",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Textfärg",
                tt: "Ställ in färgen på texten",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Textkontur",
                tt: "Tillämpa en kontur på all text i meddelandet",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Konturfärg",
                tt: "Ställ in färgen på textkonturen",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Textskugga",
                tt: "Tillämpa en skugga på all text i meddelandet",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Skuggfärg",
                tt: "Ställ in färgen på textskuggan",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Ikonens rundhet",
                tt: "Ställ in rundheten på meddelandeikonen",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Använd anpassad ikon",
                tt: `Använd en bildfil som anpassad ikon`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Anpassad ikon",
                tt: `Välj en bildfil att använda som anpassad ikon`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Återställ Anpassad Ikon`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Anpassad 100% Ikon",
                tt: `Använd en bildfil som anpassad 100% ikon`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Anpassad 100% Ikon",
                tt: `Välj en bildfil för att ställa in som anpassad 100% ikon`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Återställ anpassad 100% ikon`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Använd spelikon",
                tt: `Använd ikonen för det aktuella spelet`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "Position",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Skärmposition",
                tt: `Ställ in positionen för meddelandet på skärmen`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Använd anpassad position",
                tt: "Använd en anpassad position för meddelandet",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Ställ in position",
                tt: "Ställ in en anpassad position för meddelandet",
                query: "label"
            },
            animdir: {
                elem: "Animationsriktning",
                tt: "Ställ in riktningen för meddelandets animation",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "SEKRETESSPOLICY"
            },
            ppusagetitle: {
                elem: "ANVÄNDNING AV STEAM WEB API-DATA"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier använder Valves <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> för att hämta och visa data relaterad till användarens Steam-konto/konton, via kombinationen av Steam API-nyckel/Steam64 ID som tillhandahålls till applikationen av användaren. Denna data inkluderar:`
            },
            ppstats: {
                elem: "Statistik för låsta och upplåsta prestationer"
            },
            ppusername: {
                elem: "Ditt Steam-användarnamn"
            },
            ppsteamgames: {
                elem: "Dina spelade Steam-spel"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier kan i framtiden använda ytterligare Steam Web API-data för att erbjuda ytterligare funktioner och uppdateringar."
            },
            ppkey64title: {
                elem: "ANVÄNDNING AV STEAM API-KEY/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier kräver att användaren anger sin Steam API-nyckel/Steam64 ID-kombination för autentiserad åtkomst till Steam Web API."
            },
            ppnoauth: {
                elem: "Utan denna information kan webblänkar (som tillhandahålls av Valve för åtkomst till Steam Web API) som används för att hämta data relaterad till användarens Steam-konto/konton, inklusive prestationer, inte nås."
            },
            ppstoragetitle: {
                elem: "LAGRING AV STEAM WEB API-DATA"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier lagrar tillfälligt Steam Web API-data lokalt på användarens dator endast för användning inom applikationen. Eventuell tillfällig lagring av denna data är avsedd endast för användning av Steam Achievement Notifier, och under normala omständigheter kommer all icke-varaktig Steam Web API-data att rensas från den lokala lagringen när applikationen avslutas."
            },
            pppersist: {
                elem: "Permanent data som lagras på användarens enhet inkluderar endast data som lagras av applikationen för användarbekvämlighet, såsom användarens Steam Web API-nyckel och Steam64 ID."
            },
            ppdelete: {
                elem: "Denna data kan även raderas manuellt av användaren när som helst om det behövs. Filerna som skapas av Steam Achievement Notifier finns i följande mapp:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "För närvarande inte supportad"
            },
            ppcollecttitle: {
                elem: "HÅLLNING AV DATAINSAMLING"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier kommer <u>aldrig</u> att skicka eller lagra användardata utanför användarens lokala filsystem utan användarens uttryckliga tillstånd. Detta inkluderar all information som hämtas via Steam Web API för användning inom applikationen, inklusive Steam API-nyckel/Steam64 ID-kombinationen som tillhandahålls till applikationen för åtkomst till Steam Web API."
            },
            ppconsent: {
                elem: "Genom att bekräfta samtycke och därefter använda befintliga eller framtida funktioner som är utformade för att skicka information externt, ges användaren implicit tillstånd att göra detta. I dessa fall kommer användaren alltid att informeras om den data som skickas och ombedd att bekräfta sitt samtycke att skicka data utanför applikationen."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier utesluter medvetet alla möjligheter att externt nå, visa eller samla in någon information som användaren tillhandahåller applikationen, men genom befintliga eller framtida funktioner kan applikationen eventuellt skicka data externt för användarens räkning, men endast efter deras samtycke."
            },
            pprequests: {
                elem: "Begäranden om åtkomst till data från Steam Web API görs inifrån applikationen själv med inbyggda metoder, liknande funktionalitet som tillhandahålls av webbläsare. Dessa begäranden innehåller användarens Steam API-nyckel/Steam64 ID-kombination enligt kraven från Steam Web API, men görs aldrig med avsikt att göras tillgängliga för användning eller avlyssning av andra applikationer."
            },
            ppusertitle: {
                elem: "ANVÄNDARANSVAR"
            },
            ppsteamtou: {
                elem: `GENOM ATT LADDA NER OCH ANVÄNDA NÅGON OFFICIELL VERSION AV STEAM ACHIEVEMENT NOTIFIER VIA <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICIELLA GITHUB-REPOSITORY</span> FÖLJER DU SOM ANVÄNDARE, I FÖRLÄNGNINGEN, SEKTION 7 OCH 8 I <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">STEAM WEB API TERMS OF USE</span>.`
            },
            gamedetails: "Speldetaljer",
            mustbepublic: "måste sättas till Offentlig",            
            nosoundfile: "Standard (Inget ljudfil valt)",
            nosoundfolder: "Standard (Ingen ljudmapp vald)",
            file: "Fil",
            randomised: "Slumpmässig",            
            audioselectdialog: `Välj ljud ${custom.mode === "file" ? "fil" : "mapp"}`,
            imgselectdialog: `Välj bildfil`,
            unsupported: "Ogiltig fil!",
            novalidaudiofiles: "Inga giltiga ljudfiler!",
            nolocate: "Kunde inte hitta filen!",
            switchaccountstitle: "Byt konto",
            noaccounts: "Lägg till ett konto för att komma igång!",
            connecting: "Ansluter...",
            connected: "Ansluten",
            testsuccessuser: `Du är redo att köra`,
            testsuccess1: `Se till att dina <span>Speldetaljer</span> är inställda på <span>Offentlig</span> i <a href="${privacysettings}">Steam:s sekretessinställningar</a>`,
            testsuccess2: `Kontrollera att din in-game display mode är inställd på <span>Borderless</span> för att få meddelanden att visas ovanför spelet`,
            noapikeytitle: "Ingen API-nyckel",
            noapikeytxt: "Ange din API-nyckel",
            noapikeyhint: `Klicka på <img src="./icon/key.svg" alt=""> ikonen för att få din API-nyckel`,
            nosteam64idtitle: "Ingen Steam64 ID",
            nosteam64idtxt: "Ange ditt Steam64 ID",
            nosteam64idhint: `Klicka på <img src="./icon/id.svg" alt=""> ikonen för att få ditt Steam64 ID`,
            invalidapikeytitle: "Ogiltig API-nyckel!",
            invalidapikeymsg: "Kunde inte få åtkomst till Steam Web API med den angivna API-nyckeln",
            invalidapikeydetail1: "Kontrollera att din API-nyckel är korrekt",
            invalidapikeydetail2: "Generera en ny API-nyckel för ditt konto",
            invalidsteam64idtitle: "Ogiltigt Steam64 ID!",
            invalidsteam64idmsg: "Kunde inte hitta ett Steam-konto som är associerat med det angivna Steam64 ID",
            invalidsteam64iddetail1: "Kontrollera att värdet för Steam64 ID du har angett är korrekt för ditt Steam-konto",
            nonetworkfound: "Ingen aktiv nätverksanslutning hittades",
            connecttonetwork: "Anslut din dator till ett nätverk och försök igen",
            testdefaulterrortitle: "Ett fel uppstod!",
            testdefaulterrormsg: "Det uppstod ett fel vid anslutning till Steam Web API",
            testdefaulterrordetail1: "Rapportera detta problem på Discord eller GitHub!",
            sspath: "Välj skärmdumpsmapp",
            wronguser: user ? `${user} inte inloggad på Steam!` : "Inga länkade användarkonton hittades!",
            switchuser: "Klicka här för att byta konto",
            trackingfailed: "Spårning misslyckades!",
            checkapplog: "Kontrollera apploggen för detaljer",
            soon: "Kommer snart!",
            gamecomplete: "100% Slutfört",
            gametitle: "Spelets titel",
            achievementunlocked: "Prestation uppnådd",
            achievementtitle: "Prestationstitel",
            allachievements: "Du har låst upp alla prestationer!",
            achievementdesc: "Prestationsbeskrivning",
            show: "Visa",
            quit: "Avsluta",
            off: "Av",
            steamss: "Steam-Skärmdump i Spelet",
            overlayss: "Skärmdump med Meddelandeöverlägg",
            match: "Anpassad matchning",
            topleft: "Överst till vänster",
            topcenter: "Överst i mitten",
            topright: "Överst till höger",
            bottomleft: "Nederst till vänster",
            bottomcenter: "Nederst i mitten",
            bottomright: "Nederst till höger",
            solid: "Enfärgad",
            gradient: "Gradient",
            bgimg: "Bakgrundsbild",
            gameart: "Spelkonst",
            up: "Upp",
            down: "Ner",
            left: "Vänster",
            right: "Höger",
            tracking: "Spårar Nu",
            inuse: "Används av",
            invalidshortcut: "Ogiltigt snabbval"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Välj en ljudfil att spela när en prestation låses upp" : "Välj en mapp med ljudfiler att spela slumpmässigt när en prestation låses upp")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Här är en logg över vad som har hänt sedan appen startades vid"
            },
            copylbl: {
                elem: "Kopiera logg innehåll"
            },
            openlbl: {
                elem: "Generera loggfil"
            },
        }        

        return translations
    }
}