export const translations = {
    global: {
        main: "Hlavní",
        rare: "Vzácné",
        plat: "100%",
        topleft: "Vlevo nahoře",
        topcenter: "Nahoře ve středu",
        topright: "Vpravo nahoře",
        bottomleft: "Vlevo dole",
        bottomcenter: "Dole ve středu",
        bottomright: "Vpravo dole",
        ok: "OK",
        preview: "Náhled",
        save: "Uložit",
        back: "Zpět",
        settings: "Nastavení",
        appversion: "Verze aplikace",
        image: "Obrázek",
        audio: "Audio",
        folder: "Složka",
        font: "Písmo",
        select: "Vybrat",
        gametitle: "Název hry",
        congrats: "Gratulujeme!",
        achievementunlocked: "Dosáhli jste úspěchu",
        gamecomplete: "100% Dokončeno",
        achievementdesc: "Kliknutím na tlačítko Zobrazit testovací oznámení",
        gamecompletedesc: "Odemkli jste všechny úspěchy!",
        defaultcustomfont: "Výchozí (Není vybráno písmo)",
        defaultsoundfile: "Výchozí (Není vybrán zvukový soubor)",
        defaultsounddir: "Výchozí (Není vybraná složka)",
        nowtracking: "Nyní sledujete úspěchy pro:",
        nopreview: "Náhled není k dispozici pro nativní operační systém",
        options: "Možnosti",
        resetwindow: "Obnovit okno",
        show: "Zobrazit",
        exit: "Ukončit",
        releasegame: "Uvolnit hru",
        releasegamesub: [
            `Restartujte proces Worker na pozadí a uvolněte aktuální hru z sledování`,
            `Vyzkoušejte tuto možnost, pokud jste nedávno zavřeli hru, ale Steam ji stále ukazuje jako spuštěnou, nebo pokud Steam Achievement Notifier stále ukazuje sledování hry, která už byla zavřena`
        ],
        noupdateavailable: "Žádná aktualizace není k dispozici",
        latestversion: "Nejnovější verze je nainstalována",
        missingdeps: "Chybějící závislost",
        missingdepssub: [
            `Zdá se, že se snažíte povolit možnost <span class="hl">Vytvořit snímek obrazovky ve Steamu</span>. Nicméně v Linuxu nelze snímky obrazovky automaticky spustit bez předchozí instalace balíčku <code class="dialogcode">xdotool</code>`,
            `Prosím, spusťte <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> pro instalaci této závislosti, což zajistí, že na tomto zařízení lze vytvářet snímky obrazovky ve Steamu`
        ],
        restartapp: "Restartovat Aplikaci",
        restartappsub: [
            `Pokud věci nefungují správně, použijte tuto možnost k uzavření a znovuotevření aplikace`,
            `Pokud problém přetrvává i po restartování aplikace, zvažte jeho nahlášení pomocí odkazů v aplikaci na domovské obrazovce`
        ]
    },
    app: {
        content: {
            game: "Žádná zjištěná hra",
            customise: "Přizpůsobit",
            test: "Zobrazit testovací upozornění"
        }
    },
    settings: {
        language: {
            title: "Jazyk"
        },
        os: {
            title: "Operační systém",
            content: {
                desktop: "Vytvořit zástupce na ploše",
                startwin: "Spustit při přihlášení",
                startmin: "Spustit minimalizováno",
                nohwa: "Vypnout hardwarové akcelerace",
                litemode: "Režim Lite"
            }
        },
        notifications: {
            title: "Upozornění",
            content: {
                rarity: "Procento vzácnosti",
                rareonly: "Pouze vzácné",
                all: "Vše",
                off: "Vypnuto",
                showpercent: "Zobrazit procenta",
                soundonly: "Pouze zvuk",
                extwin: "Upozornění na stream",
                audiosrc: "Zdroj zvuku",
                notify: "Upozornění",
                app: "Aplikace",
                nowtracking: "Zobrazit Oznámení o Sledování",
                nowtrackingscale: "Měřítko Sledování",
                shortcuts: "Zkratky upozornění"
            }
        },
        media: {
            title: "Média",
            content: {
                steamss: "Pořídit screenshot z Steamu",
                screenshots: "Další média",
                off: "Vypnuto",
                overlay: "Screenshot s překryvem upozornění",
                monitors: "Zdroj screenshotu",
                ovpos: "Pozice překryvu",
                ovmatch: "Shodovat pozici přizpůsobení",
                ovpath: "Cesta screenshotu",
                ssdelay: "Zpoždění screenshotu",
                notifyimg: "Obrázek oznámení",
                imgpath: "Cesta k obrázku"
            }
        },
        accessibility: {
            title: "Přístupnost",
            content: {
                noanim: "Vypnout animace okna aplikace",
                nvda: "Povolit podporu NVDA",
                tooltips: "Zobrazit tooltipy"
            }
        },
        advanced: {
            title: "Pokročilé",
            content: {
                pollrate: "Frekvence dotazů",
                releasedelay: "Zpoždění Vydání",
                maxretries: "Maximální počet opakování procesu",
                debug: "Panel Ladění",
                userust: "Alternativní Režim Zpracování",
                notifydebug: "Zobrazit oznámení nástrojů pro ladění",
                usecustomfiles: "Použít vlastní soubory aplikace",
                showcustomfiles: "Zobrazit vlastní soubory aplikace"
            }
        },        
        misc: {
            title: "Různé",
            content: {
                checkforupdates: "Zkontrolovat Aktualizace",
                log: "Záznam Aplikace",
                reset: "Resetovat aplikaci"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Přednastavení",
            content: {
                preset: "Přednastavení upozornění",
                iconanim: "Animace vzácné ikony",
                alldetails: "Zobrazit všechny podrobnosti",
                usepercent: "Použít procenta",
                displaytime: "Čas zobrazení",
                scale: "Měřítko",
                customtext: "Vlastní text",
                usegametitle: "Použít název hry",
                customfont: "Vlastní písmo"
            }
        },
        sound: {
            title: "Zvuk",
            content: {
                soundmode: "Režim zvuku",
                file: "Soubor",
                folder: "Náhodné",
                soundfile: "Zvukový soubor",
                sounddir: "Složka zvuku",
                volume: "Hlasitost"
            }
        },
        style: {
            title: "Styl",
            content: {
                bgstyle: "Styl pozadí",
                solid: "Plný",
                gradient: "Přechod",
                img: "Obrázek",
                gameart: "Herní umění",
                gradientangle: "Úhel přechodu",
                bgimg: "Obrázek pozadí",
                bgimgbrightness: "Jas",
                brightness: "Jas",
                roundness: "Zaoblení",
                fontsize: "Velikost písma",
                opacity: "Průhlednost",
                bgonly: "Pouze pozadí"
            }
        },
        colors: {
            title: "Barvy",
            content: {
                primarycolor: "Primární barva",
                secondarycolor: "Sekundární barva",
                tertiarycolor: "Terčiární barva",
                fontcolor: "Barva písma",
                fontoutline: "Obrys písma",
                fontoutlinecolor: "Barva obrysu písma",
                fontshadow: "Stín písma",
                fontshadowcolor: "Barva stínu písma"
            }
        },
        icons: {
            title: "Ikony",
            content: {
                iconroundness: "Zaoblení ikony",
                plat: "100% Logo",
                usegameicon: "Použít ikonu hry",
                logo: "Logo",
                decoration: "Dekorace",
                showdecoration: "Zobrazit dekoraci",
                rarity: "Vzácnost",
                showhiddenicon: "Zobrazit skrytou ikonu",
                hiddenicon: "Skrytá ikona",
                replacelogo: "Nahradit logo"
            }
        },
        position: {
            title: "Pozice",
            content: {
                pos: "Pozice na obrazovce",
                usecustompos: "Použít vlastní pozici",
                setcustompos: "Nastavit",
                resetcustompos: "Resetovat"
            }
        },
        theme: {
            title: "Téma",
            content: {
                savetheme: "Uložit téma",
                sub: [
                    `Uložená <span class="hl">Uživatelská témata</span> mohou být vybrána z nabídky <span class="hl">Vybrat téma</span> na domovské obrazovce.`,
                    `Ujistěte se, že <span class="hl">Název tématu</span> je <u>jedinečný</u> - název, který odpovídá existujícímu tématu <u>přepíše předchozí</u>!`
                ],
                placeholder: "Název tématu",
                theme: "Téma"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Zde je, co se stalo od spuštění aplikace v",
            copylog: "Kopírovat obsah záznamu"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Jste si jisti?</span>
                    <span>Všechna dříve nakonfigurovaná data, <u>včetně přizpůsobení</u>, budou resetována na výchozí hodnoty.</span>
                    <span>🛑 Toto nelze vrátit zpět!</span>
                </div>
            `,
            reset: "Resetovat"
        }
    },
    error: {
        content: {
            subtitle: "Aplikace Steam Achievement Notifier narazila na problém a musí být uzavřena.",
            details: "Zde jsou podrobnosti o chybě:",
            sub: "Klikněte na tlačítka níže, abyste tento problém nahlásili prostřednictvím vaší preferované platformy.",
            report: "Nahlásit",
            log: "Záznam aplikace",
            exit: "Opustit"
        }
    },    
    tooltips: {
        game: "Hra, pro kterou jsou aktuálně sledovány achievementy",
        usertheme: "Vyberte předtím uložené téma",
        customise: "Přizpůsobte oznámení o achievementech",
        test: "Zobrazit testovací oznámení včetně přizpůsobení",
        kofi: "Přispějte na Ko-Fi!",
        discord: "Připojte se na Discord!",
        github: "Nahlásit problém",
        lang: "Vyberte jazyk uživatelského rozhraní používaný v aplikaci",
        desktop: "Přepnout zástupce na ploše pro spuštění aplikace",
        startwin: "Spustit Steam Achievement Notifier automaticky po přihlášení",
        startmin: "Po spuštění skrýt okno aplikace v uživatelském rozhraní, dokud není otevřeno z lišty systému",
        nohwa: `Vypnout hardwarové zrychlení, což může zlepšit výkon na systémech s nižšími zdroji nebo systémech bez dedikované GPU<br><br><span class="ttdesc">Aplikace se restartuje po povolení/zakázání této možnosti</span>`,
        litemode: "Vypnout všechny interaktivní prvky uživatelského rozhraní a poskytnout pouze omezenou funkčnost aplikace prostřednictvím ikony v liště systému. Může zlepšit využití prostředků aplikace",
        rarity: "Procento, při kterém budou spouštěna oznámení o vzácných achievementech. Jakýkoli achievement s procentem odemknutí vyšším než tato hodnota bude zobrazen jako hlavní oznámení",
        showpercent: "Zobrazit procento odemknutí achievementu v oznámení pro vybrané typy",
        soundonly: "Vypnout oznámení a pouze přehrát zvuky nastavené pomocí přizpůsobovače",
        extwin: "Vytvořit skryté pozadí okna, které duplikuje všechna aktuálně zobrazená oznámení na obrazovce. Toto okno lze pak přidat jako zdroj pro zachycení okna do streamovacího softwaru, například OBS",
        audiosrc: "Vyberte zdroj (nebo vypněte) zvuk generovaný aplikací",
        nowtracking: "Zobrazit oznámení upozorňující uživatele, že jsou sledovány achievementy pro běžící hru",
        nowtrackingscale: `Nastavte velikost upozornění na sledování`,
        shortcuts: "Spustit testovací oznámení pomocí klávesové zkratky. Zkratky lze přizpůsobit pro každý typ oznámení",
        steamss: "Po odemknutí achievementu pořídit snímek obrazovky ve službě Steam",
        screenshots: "Vyberte typ dalšího média, které se vytvoří při zobrazení oznámení",
        monitors: "Monitor, který bude zachycen při pořizování snímku obrazovky",
        ovpos: "Pozice překryvu oznámení ve snímku obrazovky",
        ovmatch: "Shoduje se s pozicí na obrazovce nastavenou v přizpůsobovači pro tento typ oznámení",
        ovpath: "Umístění, kam budou uloženy snímky obrazovky generované touto možností",
        ssdelay: "Přidat prodlevu od okamžiku, kdy dojde k oznámení, do okamžiku, kdy je pořízen snímek obrazovky",
        sspreview: "Zobrazit náhled, jak bude snímek obrazovky vypadat po uložení",
        noanim: "Vypnout všechny animace oken a přechodové efekty v aplikaci",
        nvda: "Povolit kopírování informací o achievementu do schránky při odemknutí achievementu, aby je bylo možné číst pomocí čtečky obrazovky, například NVDA",
        tooltips: "Zobrazit popisky při najetí myší na určité prvky uživatelského rozhraní",
        pollrate: `Nastavit interval aktualizace dat o úspěších během hry<br><br><span class="ttdesc">Výkon může stoupat/klesat v závislosti na hodnotě nebo hardwarových zdrojích systému. Vyšší hodnoty obvykle znamenají nižší zátěž systému, ale mohou způsobit zpoždění upozornění</span>`,
        releasedelay: `Nastavuje, jak dlouho bude proces pozadí čekat na restart po uvolnění aktuální hry. Ovlivňuje jak automatické sledování procesu, tak ručně propojené hry.<br><br><span class="ttdesc">Umožňuje delší časový rámec pro úplné uvolnění Steamworks z aplikace. Zvýšení této hodnoty může zabránit neobvyklému chování, jako je sledování dříve uzavřené hry</span>`,
        maxretries: `Nastavuje maximální počet pokusů o propojení běžícího procesu s detekovaným AppID. Ovlivňuje jak automatické sledování procesu, tak ručně propojené hry.<br><br><span class="ttdesc">Pokusy o propojení se provádějí každou sekundu. Pokud běžící proces není po tomto počtu pokusů propojen s aktuálním AppID, bude vrácen neplatný proces. V takových případech bude hra muset být uvolněna ručně pomocí Oznamovací oblasti systému > Možnosti > Uvolnit Hru</span>`,
        debug: "Otevřete Panel Ladění, který zobrazuje podrobné informace o sledování procesů",
        userust: "Použijte alternativní funkci založenou na Rust k ověření, zda jsou sledované herní procesy aktuálně spuštěny na systému. Když není zaškrtnuto, bude místo toho použita výchozí kontrola procesů založená na NodeJS.",
        notifydebug: "Vytvořit okno DevTools pro všechna oznámení. Užitečné pro ladění/problémování problémů s oznámeními",
        usecustomfiles: "Povoluje načítání uživatelsky přizpůsobitelných souborů pro oznámení. Běžným uživatelům se doporučuje opatrnost",
        showcustomfiles: "Otevřít umístění uživatelsky přizpůsobitelných souborů",
        log: "Otevřít okno s protokolem aplikace, které zobrazuje informace o činnosti procesu, varování a chyby",
        reset: "Odstranit všechna konfigurační data a restartovat aplikaci",
        playback: "Pozastavit/pokračovat v animaci náhledu oznámení",
        replay: "Restartovat animaci náhledu oznámení",
        preset: "Vyberte přednastavení oznámení pro přizpůsobení",
        iconanim: "Přepnout ohraničení a animaci vzácné ikony",
        alldetails: "Zobrazit všechny textové prvky v oznámení, včetně těch, které jsou ve výchozím nastavení skryté pro toto přednastavení",
        usepercent: "Zobrazit procento odemknutí úspěchu místo hodnoty XP/S",
        displaytime: "Nastavit počet sekund, po které bude oznámení zobrazeno",
        scale: "Zvětšit nebo zmenšit velikost oznámení",
        customtext: "Nastavit vlastní zprávu, která se zobrazí v oznámení",
        usegametitle: "Zobrazit název aktuální hry v oznámení",
        customfont: "Načíst vlastní písmo, které se použije v oznámení",
        soundmode: "Vyberte buď jediný zvukový soubor nebo náhodně vybraný zvukový soubor z adresáře obsahujícího více zvukových souborů, když dojde k oznámení",
        soundfile: "Vyberte zvukový soubor, který se přehraje při oznámení",
        sounddir: "Vyberte složku, ze které se náhodně vybere zvukový soubor při oznámení",
        volume: "Nastavit hlasitost přehrávání zvukového souboru",
        preview: "Zobrazit náhled vybraného zvukového souboru nebo náhodně vybraného zvukového souboru z adresáře",
        bgstyle: "Vyberte styl pozadí oznámení",
        gradientangle: "Nastavit úhel přechodu",
        bgimg: "Načíst obrázkový soubor, který se použije jako pozadí oznámení",
        bgimgbrightness: "Nastavte jas obrázku použitému jako pozadí upozornění",
        brightness: "Nastavit jas použitého herního umění jako pozadí oznámení",
        roundness: "Nastavit zaoblení okrajů oznámení",
        fontsize: "Nastavit velikost písma použitého v oznámení",
        opacity: "Nastavit celkovou průhlednost oznámení",
        bgonly: "Nastavit průhlednost pouze pro pozadí oznámení a ponechat ostatní prvky na plnou průhlednost",
        primarycolor: "Nastavit primární barvu oznámení",
        secondarycolor: "Nastavit sekundární barvu oznámení",
        tertiarycolor: "Nastavit terciární barvu oznámení",
        fontcolor: "Nastavit barvu všech textů zobrazených v oznámení",
        fontoutline: "Přidat ohraničení ke všem textům zobrazeným v oznámení",
        fontoutlinecolor: "Nastavit barvu ohraničení textu",
        fontshadow: "Přidat stín ke všem textům zobrazeným v oznámení",
        fontshadowcolor: "Nastavit barvu stínu textu",
        iconroundness: "Nastavit zaoblení achievement/game ikony zobrazené v oznámení",
        plat: "Načíst obrázkový soubor, který se použije jako ikona 100%",
        usegameicon: "Nahradit výchozí ikonu oznámení ikonou aktuální hry",
        showhiddenicon: "Zobrazit obrázek označující skrytý úspěch v oznámení",
        hiddenicon: "Načíst soubor s obrázkem k nahrazení ikony skrytého úspěchu",
        logo: "Načíst obrázkový soubor pro nahrazení ikony loga",
        decoration: "Načíst obrázkový soubor pro nahrazení ikony dekorace",
        showdecoration: "Přepnout viditelnost ikony dekorace",
        replacelogo: "Nahraďte ikonu loga v oznámení vybranou dekorací",
        pos: "Nastavit pozici oznámení na obrazovce",
        usecustompos: "Povolit vlastní umístění pro oznámení",
        setcustompos: "Nastavit vlastní pozici pro oznámení",
        resetcustompos: "Obnovit pozici oznámení na výchozí vlastní pozici",
        savetheme: "Uložit všechny nakonfigurované možnosti přizpůsobení jako nové téma",
        visibilitybtn: "Přepnout viditelnost prvku v náhledech nastavení a testovacích oznámeních",
        delbtn: "Obnovit prvek na výchozí hodnoty",
        link: `Otevřít <span class="hl">Menu Správy Propojených Her</span>`,
        imgpath: "Místo, kam budou uloženy obrázky oznámení generované touto možností"
    },
    update: {
        updateavailable: "Aktualizace je k dispozici",
        sub: [
            `<span id="newversion"></span>`,
            "Je k dispozici nová aktualizace pro Steam Achievement Notifier!",
            `Plné poznámky k vydání naleznete na <span id="discordreleasenotes"></span> a <span id="githubreleasenotes"></span>`
        ],
        update: "Aktualizace"
    },
    "linkgame": {
        "content": {
            "exepath": "Cesta k spustitelnému souboru",
            "nodata": "Žádná data",
            "manage": "Spravovat propojené hry",
            "managesub": [
                `Ručně propojte <span class="hl">spustitelný soubor</span> hry s konkrétním <span class="hl">AppID</span> nebo <span class="hl">zrušte propojení</span> existujícího`,
                `Steam Achievement Notifier již nebude používat <span class="hl">automatické sledování procesu</span> pro žádné <span class="hl">propojené hry</span> - místo toho bude sledován určený <span class="hl">spustitelný soubor</span>, pokud je zjištěn odpovídající <span class="hl">AppID</span>`,
                `<span class="hl" id="appidhelp"><u>Jak najdu AppID hry ve službě Steam?</u></span>`
            ],
            "new": "Nové...",
            "linknew": "Nová propojená hra",
            "linknewsub": [
                `Vytvořte nový odkaz mezi <span class="hl">spustitelným souborem hry</span> a příslušným <span class="hl">AppID</span>`,
                `Po vytvoření mohou být odkazy <span class="hl">zrušeny</span> prostřednictvím předchozího dialogu <span class="hl">Spravovat propojené hry</span>`
            ],
            "link": "Propojit",
            "findappid": "Najít AppID",
            "findappidsub": [
                `Každá hra ve službě Steam má unikátní číslo - nazývané <span class="hl">AppID</span>. AppID každé hry ve službě Steam můžete najít pomocí následujících metod:`,
                `V <span class="hl">klientu Steam</span> klikněte pravým tlačítkem myši na hru ve vaší <span class="hl">knihovně</span> a vyberte <i>Vlastnosti</i> > <i>Aktualizace</i> - AppID bude zde uveden`,
                `URL adresa stránky <span class="hl">obchodu</span> s hrou - číslo bude uvedeno za <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Webové stránky jako <span class="hl">SteamDB</span> - sekce <span class="hl">Informace o aplikaci</span> bude seznamovat AppID pro každou hru`
            ]
        }
    }
}