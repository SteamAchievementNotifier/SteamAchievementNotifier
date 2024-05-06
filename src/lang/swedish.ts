export const translations = {
    global: {
        main: "Huvud",
        rare: "Sällsynt",
        plat: "100%",
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
        releasegame: "Frigör Spel",
        releasegamesub: [
            `Starta om bakgrundsprocessen för Worker och frigör det nuvarande spelet från att spåras`,
            `Prova detta alternativ om du nyligen har stängt ett spel men Steam visar fortfarande att det körs, eller om Steam Achievement Notifier fortfarande visar att det spårar ett spel som redan har stängts`
        ],
        noupdateavailable: "Inga uppdateringar tillgängliga",
        latestversion: "Senaste versionen installerad",
        missingdeps: "Saknad beroende",
        missingdepssub: [
            `Det verkar som att du försöker aktivera alternativet <span class="hl">Ta Steam-skärmbild</span>. Dock kan skärmbilder inte aktiveras automatiskt på Linux utan att först installera paketet <code class="dialogcode">xdotool</code>`,
            `Kör <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> för att installera detta beroende, vilket kommer att säkerställa att Steam-skärmbilder kan tas på denna enhet`
        ],
        restartapp: "Starta om appen",
        restartappsub: [
            `Om sakerna inte fungerar korrekt, använd detta alternativ för att stänga och öppna appen igen`,
            `Om problemet kvarstår efter att ha startat om appen, överväg att rapportera det genom att använda de inbyggda länkarna på startsidan`
        ]
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
            title: "Språk"
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
                rareonly: "Endast sällsynta",
                all: "Alla",
                off: "Av",
                showpercent: "Visa procent",
                soundonly: "Endast ljud",
                extwin: "Strömma aviseringar",
                audiosrc: "Ljudkälla",
                notify: "Avisera",
                app: "Applikation",
                nowtracking: "Visa spårningsmeddelande",
                nowtrackingscale: "Spårningsskala",
                shortcuts: "Aviseringsgenvägar"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Ta Steam-skärmdump",
                screenshots: "Ytterligare media",
                off: "Av",
                overlay: "Skärmdump med aviseringens överlagring",
                monitors: "Skärmdumpskälla",
                ovpos: "Överlagringsposition",
                ovmatch: "Matcha anpassad position",
                ovpath: "Skärmdumpssökväg",
                ssdelay: "Skärmdumpsfördröjning",
                notifyimg: "Meddelandebild",
                imgpath: "Bildsökväg"
            }
        },
        accessibility: {
            title: "Tillgänglighet",
            content: {
                noanim: "Inaktivera appfönsteranimationer",
                nvda: "Aktivera NVDA-stöd",
                tooltips: "Visa verktygstips"
            }
        },
        advanced: {
            title: "Avancerad",
            content: {
                pollrate: "Undersökningsfrekvens",
                releasedelay: "Utgivningsfördröjning",
                maxretries: "Maximalt antal återförsök",
                notifydebug: "Visa felsökningsaviseringar",
                usecustomfiles: "Använd anpassade appfiler",
                showcustomfiles: "Visa anpassade appfiler"
            }
        },        
        misc: {
            title: "Övrigt",
            content: {
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
                bgimgbrightness: "Ljusstyrka",
                brightness: "Ljusstyrka",
                roundness: "Rundhet",
                fontsize: "Typsnittstorlek",
                opacity: "Opacitet",
                bgonly: "Endast bakgrund"
            }
        },
        colors: {
            title: "Färger",
            content: {
                primarycolor: "Primärfärg",
                secondarycolor: "Sekundärfärg",
                tertiarycolor: "Tertiärfärg",
                fontcolor: "Typsnittsfärg",
                fontoutline: "Typsnittets kontur",
                fontoutlinecolor: "Typsnittets konturfärg",
                fontshadow: "Typsnittsskugga",
                fontshadowcolor: "Typsnittsskuggans färg"
            }
        },
        icons: {
            title: "Ikoner",
            content: {
                iconroundness: "Ikonens rundhet",
                plat: "100 % -logotyp",
                usegameicon: "Använd spelikonen",
                logo: "Logotyp",
                decoration: "Dekoration",
                showdecoration: "Visa dekoration",
                rarity: "Sällsynthet",
                showhiddenicon: "Visa Dold ikon",
                hiddenicon: "Dold ikon",
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Skärmposition",
                usecustompos: "Använd anpassad position",
                setcustompos: "Ange",
                resetcustompos: "Återställ"
            }
        },
        theme: {
            title: "Tema",
            content: {
                savetheme: "Spara tema",
                sub: [
                    `Sparade <span class="hl">Användarteman</span> kan väljas från menyn <span class="hl">Välj tema</span> på startskärmen.`,
                    `Se till att <span class="hl">Temans namn</span> är <u>unikt</u> - ett namn som matchar ett befintligt tema <u>kommer att skriva över det föregående</u>!`
                ],
                placeholder: "Temans namn",
                theme: "Tema"
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
        desktop: "Växla en genväg på skrivbordet för att köra appen",
        startwin: "Starta Steam Achievement Notifier automatiskt efter inloggning",
        startmin: "Efter starten dölj appens användargränssnittsfönster tills det öppnas från systemfältet",
        nohwa: `Inaktivera hårdvaruacceleration, vilket kan förbättra prestandan på system med begränsade resurser eller system utan dedikerad GPU<br><br><span class="ttdesc">Appen kommer att starta om efter aktivering/inaktivering av detta alternativ</span>`,
        litemode: "Inaktivera alla interaktiva användargränssnittselement och erbjuda endast begränsad appfunktionalitet via systemfältets ikon. Kan förbättra resursförbrukningen av appen",
        rarity: "Procentandelen vid vilken sällsynta prestationaviseringar kommer att utlösas. Alla prestationer med en upplåsningsprocent över detta värde visas som huvudaviseringar",
        showpercent: "Visa upplåsningsprocenten för prestationen i aviseringen för de valda typerna",
        soundonly: "Inaktivera aviseringar och spela endast ljud som är inställt via anpassaren",
        extwin: "Skapa ett dolt bakgrundsfönster som duplicerar alla aviseringar som för närvarande visas på skärmen. Detta fönster kan sedan läggas till som en Window Capture-källa för användning i streamingprogramvara, som OBS",
        audiosrc: "Välj källan för (eller inaktivera) ljud som genereras av appen",
        nowtracking: "Visa en avisering som meddelar användaren att prestationer för ett körande spel spåras",
        nowtrackingscale: `Ange storleken på spårningsmeddelandet`,
        shortcuts: "Utlös ett testmeddelande via en tangentbordsgenväg. Genvägar kan anpassas för varje typ av avisering",
        steamss: "Ta en Steam-skärmdump när en prestation låses upp",
        screenshots: "Välj typen av ytterligare media som ska skapas när en avisering visas",
        monitors: "Monitorn som kommer att fångas när skärmdumpen tas",
        ovpos: "Positionen för aviseringens överlagring i skärmdumpen",
        ovmatch: "Matcha skärmläget som är inställt i anpassaren för denna typ av avisering",
        ovpath: "Platsen där skärmdumpar som genereras av detta alternativ kommer att sparas",
        ssdelay: "Lägg till en fördröjning från när aviseringen inträffar till när skärmdumpen tas",
        sspreview: "Visa en förhandsgranskning av hur skärmdumpen kommer att se ut när den sparas",
        noanim: "Inaktivera alla fönsteranimationer och övergångseffekter i appen",
        nvda: "Aktivera kopiering av prestationinformation till urklipp när en prestation låses upp, för att läsas av skärmläsarprogramvara, som NVDA",
        tooltips: "Visa verktygstips när du håller musen över vissa användargränssnittselement",
        pollrate: `Ställ in uppdateringsintervallet för prestationdata under spel<br><br><span class="ttdesc">Prestandan kan öka/minska beroende på värdet eller systemets maskinvara. Högre värden resulterar vanligtvis i lägre systembelastning, men kan orsaka fördröjningar i aviseringar</span>`,
        releasedelay: `Anger hur länge bakgrundsprocessen ska vänta innan den startar om efter att det aktuella spelet har släppts. Påverkar både automatisk processövervakning och manuellt länkade spel.<br><br><span class="ttdesc">Ger en längre tidsram för att helt frigöra Steamworks från appen. Att öka detta värde kan förhindra ovanligt beteende, som att spåra ett tidigare stängt spel</span>`,
        maxretries: `Anger det maximala antalet försök att länka en körande process till en upptäckt AppID. Påverkar både automatisk processövervakning och manuellt länkade spel.<br><br><span class="ttdesc">Försök att länka utförs en gång per sekund. Om en körande process inte är länkad till det aktuella AppID:et efter detta antal försök returneras en ogiltig process. I sådana fall måste spelet släppas manuellt via Systemfältet > Alternativ > Släpp Spel</span>`,
        notifydebug: "Skapa ett DevTools-fönster för alla aviseringar. Användbart för felsökning av aviseringar",
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
        bgimgbrightness: "Ställ in ljusstyrkan för bilden som används som bakgrund för aviseringen",
        brightness: "Ställ in ljusstyrkan för spelkonst som används som bakgrund för aviseringen",
        roundness: "Ställ in rundheten för aviseringens kanter",
        fontsize: "Ställ in storleken på teckensnittet som används i aviseringen",
        opacity: "Ställ in den totala opaciteten för aviseringen",
        bgonly: "Ställ endast in opaciteten för aviseringens bakgrund och behåll andra element med full opacitet",
        primarycolor: "Ställ in primärfärgen för aviseringen",
        secondarycolor: "Ställ in sekundärfärgen för aviseringen",
        tertiarycolor: "Ställ in tertiärfärgen för aviseringen",
        fontcolor: "Ställ in färgen på all text som visas i aviseringen",
        fontoutline: "Lägg till en kontur till all text som visas i aviseringen",
        fontoutlinecolor: "Ställ in färgen på textens kontur",
        fontshadow: "Lägg till en skugga till all text som visas i aviseringen",
        fontshadowcolor: "Ställ in färgen på textens skugga",
        iconroundness: "Ställ in rundheten för prestation/spelikonen som visas i aviseringen",
        plat: "Ladda en bildfil som ska användas som 100% ikon",
        usegameicon: "Ersätt standardaviseringssymbolen med ikonen för det aktuella spelet",
        showhiddenicon: "Visa en bild som indikerar att prestationen är dold i meddelandet",
        hiddenicon: "Ladda upp en bildfil för att ersätta den dolda prestationens ikon",
        logo: "Ladda en bildfil för att ersätta logotypen",
        decoration: "Ladda en bildfil för att ersätta dekorationsikonen",
        showdecoration: "Växla synligheten för dekorationsikonen",
        pos: "Ställ in skärmläget för aviseringen",
        usecustompos: "Aktivera anpassad positionering för aviseringen",
        setcustompos: "Ställ in den anpassade positionen för aviseringen",
        resetcustompos: "Återställ aviseringens position till standardanpassad position",
        savetheme: "Spara alla konfigurerade anpassningsalternativ som ett nytt tema",
        visibilitybtn: "Växla synligheten för elementet i anpassade förhandsvisningar och testmeddelanden",
        delbtn: "Återställ elementet till standardvärdet",
        link: `Öppna <span class="hl">Menyn för hantering av länkade spel</span>`,
        imgpath: "Platsen där meddelandebilder genererade av detta alternativ kommer att sparas"
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
    "linkgame": {
        "content": {
            "exepath": "Sökväg till Körbar Fil",
            "nodata": "Inga Data",
            "manage": "Hantera Länkade Spel",
            "managesub": [
                `Länka manuellt en <span class="hl">körbar fil</span> för ett spel till en specifik <span class="hl">AppID</span>, eller <span class="hl">avlägsna länkning</span> för en befintlig`,
                `Steam Achievement Notifier kommer inte längre använda <span class="hl">automatisk processpårning</span> för några <span class="hl">länkade spel</span> - istället kommer den angivna <span class="hl">körbara filen</span> att spåras varje gång den associerade <span class="hl">AppID</span> upptäcks`,
                `<span class="hl" id="appidhelp"><u>Hur hittar jag ett Steam-spels AppID?</u></span>`
            ],
            "new": "Nytt...",
            "linknew": "Nytt Länkat Spel",
            "linknewsub": [
                `Skapa en ny länk mellan en <span class="hl">körbar fil för spelet</span> och det associerade <span class="hl">AppID</span>`,
                `Efter att ha skapats kan länkar <span class="hl">avlägsnas</span> via den tidigare <span class="hl">Hantera Länkade Spel</span>-dialogrutan`
            ],
            "link": "Länka",
            "findappid": "Hitta AppID",
            "findappidsub": [
                `Varje Steam-spel har ett unikt nummer associerat med det - kallat <span class="hl">AppID</span>. Du kan hitta ett Steam-spels associerade AppID genom att kontrollera en av följande:`,
                `I <span class="hl">Steam-klienten</span>, högerklicka på ett spel i ditt <span class="hl">Bibliotek</span> och välj <i>Egenskaper</i> > <i>Uppdateringar</i> - AppID:et kommer att listas här`,
                `URL:en till spelets <span class="hl">Butikssida</span> - det kommer att vara numret listat efter <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Webbplatser som <span class="hl">SteamDB</span> - avsnittet <span class="hl">App Info</span> kommer att lista AppID för varje spel`
            ]
        }
    }
}