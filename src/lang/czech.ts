export const translations = {
    global: {
        main: "Hlavní",
        semi: "Poloviční",
        rare: "Vzácné",
        plat: "100%",
        trophymain: "Bronzová",
        trophysemi: "Stříbrná",
        trophyrare: "Zlatá",
        trophyplat: "Platinová",
        test: "Testovat oznámení",
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
        edit: "Upravit",
        lockedby: "Uzamčeno pomocí $lock",
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
        donotshowagain: "Znovu nezobrazovat toto dialogové okno",
        releasegame: "Uvolnit hru",
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
        ],
        suspend: "Pozastavit",
        resume: "Obnovit",
        new: "Nové...",
        nodata: "Žádná data",
        webhookunlockmsg: "$user odemkl úspěch",
        webhookunlockmsgplat: "$user odemkl všechny úspěchy",
        webhookingame: "ve $gamename",
        notconnected: "Nepřipojeno",
        raloghelp: "Moje hra není detekována",
        raenablelog: `Soubory protokolu emulátoru`,
        raenablelogsub: [
            `Aby bylo možné získat přístup k interním herním událostem (například aktuální stav hry, informace o odemčených úspěších atd.), musí být v jakémkoli vybraném emulátoru <u>povoleno</u> zapisování do externího <span class="hl">souboru s logy</span>.<br><br>Jakýkoli vybraný emulátor <u>musí používat tento <span class="hl">soubor s logy</span></u> jako hodnotu <span class="hl">Cesta k souboru s logy</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Nastavení > Záznam</span> musí být nakonfigurováno s následujícími nastaveními:
                    <br>
                    <ul>
                        <li><span class="hllb">Podrobnost záznamu</span>: <span class="hlgreen">ZAPNUTO</span></li>
                        <li><span class="hllb">Úroveň záznamu uživatelského rozhraní</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Záznam do souboru</span>: <span class="hlgreen">ZAPNUTO</span></li>
                        <li><span class="hllb">Časové značky v logu</span>: <span class="hlred">VYPNUTO</span></li>
                    </ul>
                    <br>
                    Při výchozím nastavení instalace je <span class="hl">"retroarch.log"</span> uložen v:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Zobrazit > Zobrazit konfiguraci záznamu</span> musí být nakonfigurováno s následujícími nastaveními:
                    <br>
                    <ul>
                        <li><span class="hllb">Podrobnost</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Výstupy záznamu</span> > <span class="hlgreen">Zapsat do souboru</span></li>
                        <li><span class="hllb">Typy záznamu</span> > <span class="hlgreen">Úspěchy (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Při výchozím nastavení instalace je <span class="hl">"dolphin.log"</span> uložen na jednom z následujících míst:
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2</summary>
                <div>
                    <span class="hl">PCSX2 > Nástroje > Povolit protokolování do souboru</span> musí být povoleno
                    <br>
                    <br>
                    Při použití výchozího nastavení instalace je <span class="hl">"emulog.txt"</span> uložen v:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="duckstation">Duckstation</summary>
                <div>
                    <ul style="background-color: var(--primary); outline: 0.1rem solid red;">
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> musí být <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>stažen</u></span> a přesunut do <span class="hl">instalační složky Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Nastavení > Úspěchy > RAIntegration (pouze pro vývojáře)</span> musí být povoleno
                    <br>
                    <br>
                    Při použití výchozího nastavení instalace je <span class="hl">"RALog.txt"</span> uložen v:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> musí být povoleno a nakonfigurováno s následujícím nastavením:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Při použití výchozího nastavení instalace je soubor <span class="hl">"log.txt"</span> uložen v:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Nepodporovaná Beta",
        betaunsupportedsub: [
            "Byla vydána nová verze Steam Achievement Notifier!",
            `<u>Tato Beta verze již není podporována</u>. Stáhněte a nainstalujte si prosím nejnovější oficiální verzi přes Github pomocí tlačítka <span class="hl">Vydání</span> níže.`,
            "Děkujeme za testování! 💜"
        ],
        betaghreleases: "Vydání",
        checkapplog: "Zkontrolujte prosím protokol aplikace pro podrobnosti.",
        workercrash: "Worker selhal!",
        workercrashsub: "Klikněte sem pro restartování Worker a opětovné spuštění sledování hry"
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
            title: "Jazyk",
            content: {
                steamlang: "Přeložit úspěchy do jazyka Steamu",
                maxsteamlangretries: "Maximální počet pokusů o překlad"
            }
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
                semirarity: "Procento stříbrné",
                rareonly: "Pouze vzácné",
                all: "Vše",
                off: "Vypnuto",
                showpercent: "Zobrazit procenta",
                soundonly: "Pouze zvuk",
                nowtracking: "Zobrazit Oznámení o Sledování",
                nowtrackingscale: "Měřítko Sledování",
                nowtrackingpos: "Sledování Pozice",
                shortcuts: "Zkratky upozornění",
                noiconcache: "Zakázat mezipaměť ikon",
                webhooks: "Odeslat na Discord server",
                webhooktypes: "Typy webhooků",
                webhookurl: `URL Webhooku`,
                webhookcaution: `Povolením této možnosti a poskytnutím platného odkazu na Webhook Discordu souhlasíte s tím, že rozumíte, že <u>veškeré informace o úspěších a hrách aktuálního uživatele Steamu</u> budou odeslány na určený server Discord prostřednictvím poskytnutého odkazu Webhooku.<br><br>Pokud nechcete, aby Steam Achievement Notifier odesílal tyto informace vaším jménem, prosím deaktivujte tuto možnost.`,
                webhooklaststatus: "Poslední stav",
                webhookspoilers: `Přidat označení spoileru`,
                webhookappid: `Zobrazit AppID`,
                replaynotify: "Oznámení o opakování",
                replaynotifyshortcut: "Zkratka pro opakování",
                customtrigger: "Vlastní Spouštěč",
                customtriggershortcut: "Zkratka Spouštěče",
                customtriggerdelay: "Zpoždění Spouštěče",
                customtriggerusedisplaytime: "Použít Čas Zobrazení",
                trophymode: "Režim trofejí",
                notifymax: "Maximální počet oznámení", 
                notifyspace: "Rozestup mezi oznámeními",
                notify1line: "Omezit text na 1 řádek"
            }
        },
        games: {
            title: "Hry",
            content: {
                linkedgames: "Propojené hry",
                autoreleasegames: "Hry s automatickým uvolněním",
                themeswitch: "Automatické přepínání témat",
                exclusionlist: "Seznam vyloučení",
                inclusionlist: "Seznam zahrnutí",
                listmode: "Režim seznamu",
                exclusion: "Vyloučení",
                inclusion: "Zahrnutí"
            }
        },
        media: {
            title: "Média",
            content: {
                steamss: "Pořídit screenshot z Steamu",
                screenshots: "Další média",
                off: "Vypnuto",
                ssonly: "Pouze Snímek Obrazovky",
                overlay: "Screenshot s překryvem upozornění",
                monitors: "Zdroj screenshotu",
                hdrmode: "Režim HDR",
                ovpos: "Pozice překryvu",
                ovmatch: "Shodovat pozici přizpůsobení",
                ovx: "Horizontální posun",
                ovy: "Vertikální posun",
                ovpath: "Cesta screenshotu",
                ssdelay: "Zpoždění screenshotu",
                notifyimg: "Obrázek oznámení",
                imgpath: "Cesta k obrázku",
                ssenabled: "Povolit",
                ssmode: "Režim snímku obrazovky",
                screen: "Obrazovka",
                window: "Okno",
                rauseemudir: "Uložit do podsložky emulátoru",
                ssext: "Formát snímku obrazovky",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Přidat do Steam"
            }
        },
        streaming: {
            title: "Streamování",
            content: {
                extwin: "Upozornění na stream",
                extwinframerate: "Snímková frekvence",
                extwinshow: "Zobrazit okno",
                audiosrc: "Zdroj zvuku",
                notify: "Upozornění",
                app: "Aplikace",
                off: "Ztlumeno",
                statwin: "Přehled statistik úspěchů",
                statwinaot: "Vždy navrchu",
                noachievements: "Žádné úspěchy k zobrazení",
                startgame: "Spusťte hru pro zobrazení úspěchů!",
                max: "Maximum",
                custom: "Vlastní...",
                statwinshortcut: "Zkratka pro překrytí",
                gametimerwin: "Časovač dokončení hry",
                gametimerwinshortcut: "Klávesová zkratka časovače",
                gametimerwinaot: "Vždy navrchu",
                resetgametimer: "Resetovat časovač",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Jste si jisti?</span>
                        <span>Tímto se časovač dokončení aktuální hry resetuje zpět na 00:00:00.000.</span>
                        <span class="noundo">🛑 Toto nelze vrátit zpět!</span>
                    </div>
                `,
                resetgametimerfailed: "Nepodařilo se resetovat časovač.",
                resetgametimercomplete: "AppID $appid již byl dokončen.",
                extwinnotify: "Zobrazit oznámení na obrazovce"
            }
        },
        accessibility: {
            title: "Přístupnost",
            content: {
                noanim: "Vypnout animace okna aplikace",
                noupdatedialog: "Deaktivovat dialog Aktualizace",
                nvda: "Povolit podporu NVDA",
                tooltips: "Zobrazit tooltipy",
                showsystrayopts: "Zobrazit možnosti systémové lišty",
                releaseshortcut: "Klávesová zkratka pro uvolnění hry",
                noshortcuts: "Zakázat klávesové zkratky"
            }
        },
        advanced: {
            title: "Pokročilé",
            content: {
                pollrate: "Frekvence dotazů",
                initdelay: "Zpoždění sledování",
                releasedelay: "Zpoždění Vydání",
                maxretries: "Maximální počet opakování procesu",
                debug: "Panel Ladění",
                userust: "Alternativní Režim Zpracování",
                notifydebug: "Zobrazit oznámení nástrojů pro ladění",
                workerdebug: "Zobrazit DevTools pro Worker",
                exportachdata: "Exportovat data o úspěších",
                lognum: "Předchozí soubory protokolu", 
                audiocooldown: "Časový odstup zvuku",
                usecustomfiles: "Použít vlastní soubory aplikace",
                showcustomfiles: "Zobrazit vlastní soubory aplikace",
                appdatadir: "Zobrazit složku AppData",
                backup: "Záloha",
                backuppath: "Cesta zálohy",
                backupsub: [
                    "Zálohujte obsah složky AppData aplikace do vybraného umístění",
                    "Tato záloha bude sloužit jako bod obnovení aktuálního stavu aplikace",
                    `Obnovte jakoukoli předchozí zálohu přes <span class="hl">Nastavení</span> > <span class="hl">Pokročilé</span> > <span class="hl">Obnovit</span>`
                ],
                backupfailed: "Nepodařilo se vytvořit zálohu.",
                restore: "Obnovit",
                restoresub: [
                    "Obnovte obsah složky AppData aplikace z předchozí zálohy",
                    `Vyberte záložní soubor <span class="hl">.sanbak</span> pro obnovení. Tento soubor bude zachován po dokončení obnovení`,
                    "❗ Po potvrzení se aplikace restartuje, aby obnovila vybraný záložní soubor"
                ],
                restorefailed: "Nepodařilo se obnovit zálohu.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Doba čekání na uvolnění"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulátory",
                rauser: "Uživatelské jméno",
                rakey: "API klíč",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Cesta k souboru protokolu",
                rapercenttype: "Typ procentuálního zobrazení",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Zadejte cestu k souboru protokolu",
                logfile: "Soubor s logy",
                status: "Stav",
                game: "Hra",
                lastachievement: "ID posledního úspěchu",
                wait: "Čekání na emulátor",
                idle: "Čekání na událost ve hře",
                start: "Spuštění hry",
                stop: "Zastavení hry",
                achievement: "Odemknutý úspěch",
                raui: "Použít rozhraní zobrazení hry"
            }
        },
        misc: {
            title: "Různé",
            content: {
                colorprofile: "Barevný profil",
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
                customfont: "Vlastní písmo",
                platcustomtext: "Vlastní text pro 100%"
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
                bgachicon: "Použít ikonu úspěchu",
                bgimgbrightness: "Jas",
                brightness: "Jas",
                blur: "Rozmazání",
                roundness: "Zaoblení",
                fontsize: "Velikost písma",
                usecustomfontsizes: "Použít vlastní velikosti písma",
                unlockmsgfontsize: "Zpráva o odemčení",
                titlefontsize: "Název",
                descfontsize: "Popis",
                textvspace: "Rozestup textu",
                opacity: "Průhlednost",
                bgonly: "Pouze pozadí",
                glow: "Záře",
                glowcolor: "Barva",
                glowsize: "Velikost",
                glowx: "Horizontální Posun",
                glowy: "Vertikální Posun",
                glowopacity: "Průhlednost",
                glowanim: "Animace",
                glowspeed: "Rychlost",
                glowrarity: "Použít vzácnost",
                glowcolorbronze: "Vzácnost: > $semirarity",
                glowcolorsilver: "Vzácnost: < $semirarity & > $rarity",
                glowcolorgold: "Vzácnost: < $rarity",
                off: "Žádný",
                pulse: "Puls",
                double: "Dvojité",
                focus: "Zaměření",
                orbit: "Oběžná dráha",
                fluorescent: "Fluorescenční",
                rainbow: "Duha",
                mask: "Maska",
                maskimg: "Obrázek masky",
                useoutline: "Obrys",
                outline: "Typ obrysu",
                outlinecolor: "Barva obrysu",
                outlinewidth: "Šířka obrysu",
                dashed: "Čárkovaný",
                dotted: "Tečkovaný"
            }
        },
        colors: {
            title: "Barvy",
            content: {
                primarycolor: "Primární barva",
                secondarycolor: "Sekundární barva",
                tertiarycolor: "Terčiární barva",
                iconshadowcolor: "Barva stínu vzácné ikony",
                iconanimcolor: "Barva animace vzácné ikony",
                fontcolor: "Barva písma",
                usecustomfontcolors: "Použít vlastní barvy písma",
                unlockmsgfontcolor: "Barva 1",
                titlefontcolor: "Barva 2",
                descfontcolor: "Barva 3",
                fontoutline: "Obrys písma",
                fontoutlinecolor: "Barva obrysu písma",
                fontoutlinescale: "Měřítko obrysu písma",
                fontshadow: "Stín písma",
                fontshadowcolor: "Barva stínu písma",
                fontshadowscale: "Měřítko stínu písma",
                fontshadowx: "Horizontální posunutí",
                fontshadowy: "Vertikální posunutí"
            }
        },
        icons: {
            title: "Ikony",
            content: {
                iconscale: "Měřítko ikony",
                iconroundness: "Zaoblení ikony",
                showiconborder: "Zobrazit ohraničení ikony",
                iconborderimg: "Ohraničení ikony",
                iconborderpos: "Pozice ohraničení",
                iconborderscale: "Měřítko ohraničení",
                iconborderx: "Vodorovný posun",
                iconbordery: "Svislý posun",
                iconborderrarity: "Použít vzácnost",
                iconborderimgbronze: "Vzácnost: > $semirarity",
                iconborderimgsilver: "Vzácnost: < $semirarity & > $rarity",
                front: "Předek",
                back: "Zadek",
                plat: "100% Logo",
                usegameicon: "Použít ikonu hry",
                gameicontype: "Typ ikony hry",
                usecustomimgicon: "Použít vlastní ikonu",
                customimgicon: "Vlastní ikona",
                icon: "Ikona",
                logo: "Logo",
                logoscale: "Měřítko loga",
                decoration: "Dekorace",
                decorationscale: "Měřítko dekorace",
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
                copycustompos: "Použít na Vše",
                resetcustompos: "Resetovat"
            }
        },
        theme: {
            title: "Téma",
            content: {
                updatetheme: "Aktualizovat Téma",
                savetheme: "Uložit téma",
                sub: [
                    `Uložená <span class="hl">Uživatelská témata</span> mohou být vybrána z nabídky <span class="hl">Vybrat téma</span> na domovské obrazovce.`,
                    `Ujistěte se, že <span class="hl">Název tématu</span> je <u>jedinečný</u> - název, který odpovídá existujícímu tématu <u>přepíše předchozí</u>!`
                ],
                placeholder: "Název tématu",
                theme: "Téma",
                importtheme: "Importovat téma",
                import: "Importovat",
                importsub: [
                    `Importovat uživatelem vytvořený <span class="hl">soubor tématu</span>`,
                    `<span class="hl">Importovaná témata</span> budou automaticky načtena po úspěšném importu a mohou být vybrána z nabídky <span class="hl">Výběr tématu</span>`,
                ],
                importidle: `Vyberte <span class="hl">soubor tématu</span> k importu`,
                importcopied: `Téma úspěšně zkopírováno`,
                importrenamed: `Téma úspěšně přejmenováno`,
                importextracted: `Téma úspěšně extrahováno`,
                importrewriting: `Přepisování cest k souborům tématu...`,
                importconverting: `Konverze tématu...`,
                importcreating: `Vytváření tématu...`,
                importdone: `Téma úspěšně importováno`,
                importfailed: `Chyba při importu vybraného souboru tématu!`,
                exporttheme: "Exportovat téma",
                export: "Exportovat",
                exporterrortitle: "Chyba při exportu",
                exporterrorsub: [
                    "Při pokusu o export vybraného motivu došlo k chybě",
                    `Zkuste uložit aktuální motiv (<i>pomocí <span class="hl">Uložit motiv</span></i>) a zkuste export znovu`,
                    `Pokud problém přetrvává, zkopírujte chybu níže a nahlaste ji pomocí odkazových tlačítek na <span class="hl">Domovské obrazovce</span>`
                ],
                synctheme: "Synchronizace tématu",
                syncedwith: "Synchronizováno s",
                themeselect: "Vybrané téma",
                copytheme: "Kopírovat motiv",
                copythemesub: "Vyberte typ(y) oznámení, do kterých chcete zkopírovat vybraný motiv"
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
        steamlang: `Pokuste se načíst překlady umístěné v aplikačních souborech Steamu, aby se zobrazily informace o úspěších ve zvoleném jazyce uživatele v klientu Steamu<br><br><span class="ttdesc">Tato možnost se pokusí najít překlady v souboru JSON uloženém v aplikačních datech Steamu. Pokud nelze najít překlad pro aktuální úspěch, místo toho se zobrazí informace o úspěchu získané ze Steamworks.</span>`,
        maxsteamlangretries: `Počet pokusů (za každých 100 ms) o nalezení platných překladů pro aktuální úspěch<br><br><span class="ttdesc">Steam aktuálně ukládá jen malé množství dat o úspěších do souboru JSON spojeného s každou hrou. Jakékoliv úspěchy, které nejsou v tomto souboru, budou přidány po jejich odemčení.<br><br>Vzhledem k tomu, že přidání nových dat může nějaký čas trvat, zvýšení této hodnoty zvýší pravděpodobnost, že se najdou překlady pro aktuální úspěch, ale může to také zpozdit zobrazení oznámení na obrazovce o čas vypočítaný tímto nastavením.<br><br>Pokud se nepodaří najít platné překlady pro aktuální úspěch, překládání se vrátí na jazyk určený ve Steamworks.</span>`,
        desktop: "Přepnout zástupce na ploše pro spuštění aplikace",
        startwin: "Spustit Steam Achievement Notifier automaticky po přihlášení",
        startmin: "Po spuštění skrýt okno aplikace v uživatelském rozhraní, dokud není otevřeno z lišty systému",
        nohwa: `Vypnout hardwarové zrychlení, což může zlepšit výkon na systémech s nižšími zdroji nebo systémech bez dedikované GPU<br><br><span class="ttdesc">Aplikace se restartuje po povolení/zakázání této možnosti</span>`,
        litemode: "Vypnout všechny interaktivní prvky uživatelského rozhraní a poskytnout pouze omezenou funkčnost aplikace prostřednictvím ikony v liště systému. Může zlepšit využití prostředků aplikace",
        rarity: `Procento, při kterém budou spuštěna oznámení o vzácných úspěších.<br><br>Jakýkoli úspěch s procentem odemknutí nad touto hodnotou bude zobrazen jako Hlavní oznámení<br><br><span class="ttdesc">Pokud je povolen <span class="hl">Režim trofejí</span>, bude jakýkoli úspěch s procentem odemknutí nad touto hodnotou zobrazen jako Stříbrné oznámení</span>`,
        semirarity: `Procento, při kterém budou zobrazeny prvky oznámení typu "Stříbrné" (např. <span class="hl">Odznaky vzácnosti</span>, <span class="hl">Dekorace</span> atd.).<br><br>Jakýkoli úspěch s procentem odemknutí nižším (nebo rovným) této hodnotě a vyšším než hodnota <span class="hl">Procenta vzácnosti</span> zobrazí prvky oznámení určené pro "Stříbrné" vzácnosti.<br><br>Jakýkoli úspěch s procentem odemknutí vyšším než tato hodnota zobrazí prvky oznámení určené pro "Bronzové" vzácnosti<br><br><span class="ttdesc">Pokud je povolen <span class="hl">Režim trofejí</span>, bude jakýkoli úspěch s procentem odemknutí nad touto hodnotou zobrazen jako Bronzové oznámení</span>`,
        showpercent: "Zobrazit procento odemknutí achievementu v oznámení pro vybrané typy",
        soundonly: "Vypnout oznámení a pouze přehrát zvuky nastavené pomocí přizpůsobovače",
        extwin: "Vytvořte okno, které duplikuje všechna oznámení momentálně zobrazená na obrazovce. Toto okno může být následně přidáno jako zdroj zachytávání okna pro použití v softwaru pro streamování, jako je OBS",
        extwinframerate: "Nastavit cílovou snímkovou frekvenci pro oznámení streamu",
        extwinshow: `Přepnout viditelnost okna Oznámení pro streamování<br><br><span class="ttdesc">Pokud je okno zaměřeno na lištu úloh, stiskněte a držte klávesu <code class="ttcode">Ctrl</code>, abyste zobrazili aktuální polohu okna</span>`,
        audiosrc: "Vyberte zdroj (nebo vypněte) zvuk generovaný aplikací",
        nowtracking: "Zobrazit oznámení upozorňující uživatele, že jsou sledovány achievementy pro běžící hru",
        nowtrackingscale: `Nastavte velikost upozornění na sledování`,
        nowtrackingpos: `Nastavte polohu upozornění na sledování`,
        shortcuts: "Spustit testovací oznámení pomocí klávesové zkratky. Zkratky lze přizpůsobit pro každý typ oznámení",
        noiconcache: `Zakáže mezipaměť ikon úspěchů při spouštění her.<br><br><span class="ttdesc">To může výrazně zlepšit výkon aplikace při spouštění her a také vyřešit problémy s sledováním her, které mají velké množství úspěchů. Nicméně v ojedinělých případech může zakázání mezipaměti ikon způsobit, že ikony úspěchů v oznámeních chybí</span>`,
        steamss: "Po odemknutí achievementu pořídit snímek obrazovky ve službě Steam",
        screenshots: "Vyberte typ dalšího média, které se vytvoří při zobrazení oznámení",
        monitors: "Monitor, který bude zachycen při pořizování snímku obrazovky",
        hdrmode: `Pořizování snímků obrazovky pomocí metody kompatibilní s monitory používajícími High Dynamic Range (HDR)`,
        ovpos: "Pozice překryvu oznámení ve snímku obrazovky",
        ovmatch: "Shoduje se s pozicí na obrazovce nastavenou v přizpůsobovači pro tento typ oznámení",
        ovpath: "Umístění, kam budou uloženy snímky obrazovky generované touto možností",
        ssdelay: "Přidat prodlevu od okamžiku, kdy dojde k oznámení, do okamžiku, kdy je pořízen snímek obrazovky",
        sspreview: "Zobrazit náhled, jak bude snímek obrazovky vypadat po uložení",
        noanim: "Vypnout všechny animace oken a přechodové efekty v aplikaci",
        noupdatedialog: `Zabraňte automatickému zobrazení a zaměření dialogu <span class="hl">Dostupná aktualizace</span><br><br><span class="ttdesc">Dialog stále můžete zobrazit kliknutím na tlačítko aktualizace, pokud je k dispozici</span>`,
        nvda: "Povolit kopírování informací o achievementu do schránky při odemknutí achievementu, aby je bylo možné číst pomocí čtečky obrazovky, například NVDA",
        tooltips: "Zobrazit popisky při najetí myší na určité prvky uživatelského rozhraní",
        colorprofile: `Vynutit vykreslování všech oken aplikace pomocí vybraného barevného profilu<br><br><span class="ttdesc">Vyžaduje restart aplikace</span>`,
        pollrate: `Nastavit interval aktualizace dat o úspěších během hry<br><br><span class="ttdesc">Výkon může stoupat/klesat v závislosti na hodnotě nebo hardwarových zdrojích systému. Vyšší hodnoty obvykle znamenají nižší zátěž systému, ale mohou způsobit zpoždění upozornění</span>`,
        initdelay: `Nastavte zpoždění mezi detekcí aktuálního <span class="hl">AppID</span> a zahájením sledování procesů/úspěchů<br><br><span class="ttdesc">Zvýšení této hodnoty může zabránit scénářům, kdy Steam není schopen spustit aktuální hru (kvůli inicializaci aplikace ve Steamworks před spuštěním hry)</span><br><br><span class="ttdesc">Alternativně lze zvýšení této hodnoty také použít k obejití nesprávné detekce procesů spouštění před hrou</span>`,
        releasedelay: `Nastavte, jak dlouho proces Worker běžící na pozadí čeká na restart po uvolnění aktuální hry. Ovlivňuje jak automatické sledování procesů, tak Automatické uvolnění her<br><br><span class="ttdesc">Umožňuje delší časový rámec pro úplné uvolnění Steamworks z aplikace. Zvýšení této hodnoty může zabránit neobvyklému chování, například sledování dříve zavřené hry</span>`,
        maxretries: `Nastavte maximální počet pokusů o propojení běžícího procesu s detekovaným AppID. Ovlivňuje jak automatické sledování procesů, tak Automatické uvolnění her<br><br><span class="ttdesc">Pokusy probíhají jednou za sekundu. Pokud běžící proces nebude po tomto počtu pokusů propojen s aktuálním AppID, bude vrácen neplatný proces. V takových případech bude nutné hru uvolnit ručně přes System Tray > Možnosti > Uvolnit hru</span>`,
        debug: "Otevřete Panel Ladění, který zobrazuje podrobné informace o sledování procesů",
        userust: "Použijte alternativní funkci založenou na Rust k ověření, zda jsou sledované herní procesy aktuálně spuštěny na systému. Když není zaškrtnuto, bude místo toho použita výchozí kontrola procesů založená na NodeJS.",
        notifydebug: "Vytvořit okno DevTools pro všechna oznámení. Užitečné pro ladění/problémování problémů s oznámeními",
        workerdebug: "Vytvořit okno DevTools pro proces Worker. Užitečné pro ladění/řešení problémů se sledováním her",
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
        customtext: `Nastavte vlastní zprávu, která se zobrazí v oznámení<br><br><span class="ttdesc">Tato možnost bude skryta, pokud je vypnuto Customiser > Předvolba > Prvky oznámení > Zpráva o odemknutí</span>`,
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
        bgachicon: "Použít ikonu odemčeného úspěchu jako pozadí notifikace",
        bgimgbrightness: "Nastavte jas obrázku použitému jako pozadí upozornění",
        brightness: "Nastavit jas použitého herního umění jako pozadí oznámení",
        blur: "Nastavte úroveň rozmazání aplikované na pozadí oznámení",
        roundness: "Nastavit zaoblení okrajů oznámení",
        fontsize: "Nastavit velikost písma použitého v oznámení",
        opacity: "Nastavit celkovou průhlednost oznámení",
        bgonly: "Nastavit průhlednost pouze pro pozadí oznámení a ponechat ostatní prvky na plnou průhlednost",
        glow: "Povolit efekt záření, který obklopuje oznámení",
        glowcolor: "Nastavte barvu efektu záření",
        glowsize: "Nastavte velikost efektu záření",
        glowx: "Posuňte polohu efektu záře horizontálně",
        glowy: "Posuňte polohu efektu záře vertikálně",
        glowopacity: "Nastavte průhlednost efektu záře",
        glowanim: "Vyberte přednastavenou animaci, která se má aplikovat na efekt záření",
        glowspeed: "Nastavte rychlost animace aplikované na efekt záření",
        glowrarity: "Změní barvu efektu záře na základě vzácnosti odemčeného úspěchu",
        glowcolorbronze: "Barva záře zobrazená, když je procento odemčení > $semirarity",
        glowcolorsilver: "Barva záře zobrazená, když je procento odemčení < $semirarity a > $rarity",
        glowcolorgold: "Barva záře zobrazená, když je procento odemčení < $rarity",
        mask: "Povolit maskování částí oznámení vlastním obrázkem",
        maskimg: `Načíst soubor s obrázkem, který se má použít jako maska<br><br><span class="ttdesc">V CSS, <code class="ttcode">mask-mode: alpha</code> pracuje opačným způsobem, než je obvykle očekáváno - oblasti průhlednosti v souboru s obrázkem budou zastíněny a černé/šedé oblasti umožní viditelnost prvků pod nimi</span>`,
        useoutline: "Zobrazit obrys kolem oznámení",
        outline: "Vyberte typ obrysu, který se zobrazí kolem oznámení",
        outlinecolor: "Nastavte barvu obrysu kolem oznámení",
        outlinewidth: "Nastavte šířku obrysu kolem oznámení",
        primarycolor: "Nastavit primární barvu oznámení",
        secondarycolor: "Nastavit sekundární barvu oznámení",
        tertiarycolor: "Nastavit terciární barvu oznámení",
        fontcolor: "Nastavit barvu všech textů zobrazených v oznámení",
        fontoutline: "Přidat ohraničení ke všem textům zobrazeným v oznámení",
        fontoutlinecolor: "Nastavit barvu ohraničení textu",
        fontoutlinescale: "Nastavit tloušťku obrysu textu",
        fontshadow: "Přidat stín ke všem textům zobrazeným v oznámení",
        fontshadowcolor: "Nastavit barvu stínu textu",
        fontshadowscale: "Nastavit tloušťku stínu textu",
        fontshadowx: "Posune pozici textového stínu horizontálně",
        fontshadowy: "Posune pozici textového stínu vertikálně",
        iconroundness: "Nastavit zaoblení achievement/game ikony zobrazené v oznámení",
        plat: "Načíst obrázkový soubor, který se použije jako ikona 100%",
        usegameicon: "Nahradit ikonu odemčeného úspěchu ikonou aktuální hry",
        gameicontype: `Vyberte, jaký typ obrázku se zobrazí jako ikona hry`,
        usecustomimgicon: "Nahradit ikonu odemčeného úspěchu vlastním obrázkovým souborem",
        customimgicon: "Načíst obrázkový soubor, který bude použit jako vlastní ikona",
        showhiddenicon: "Zobrazit obrázek označující skrytý úspěch v oznámení",
        hiddenicon: "Načíst soubor s obrázkem k nahrazení ikony skrytého úspěchu",
        logo: "Načíst obrázkový soubor pro nahrazení ikony loga",
        decoration: "Načíst obrázkový soubor pro nahrazení ikony dekorace",
        showdecoration: "Přepnout viditelnost ikony dekorace",
        replacelogo: "Nahraďte ikonu loga v oznámení vybranou dekorací",
        pos: "Nastavit pozici oznámení na obrazovce",
        usecustompos: "Povolit vlastní umístění pro oznámení",
        setcustompos: "Nastavit vlastní pozici pro oznámení",
        copycustompos: "Použít vlastní pozici na všechny ostatní typy oznámení",
        resetcustompos: "Obnovit pozici oznámení na výchozí vlastní pozici",
        updatetheme: "Aktualizovat aktuální Téma s vybranými možnostmi přizpůsobení",
        savetheme: "Uložit všechny nakonfigurované možnosti přizpůsobení jako nové téma",
        visibilitybtn: "Přepnout viditelnost prvku v náhledech nastavení a testovacích oznámeních",
        delbtn: "Obnovit prvek na výchozí hodnoty",
        imgpath: "Místo, kam budou uloženy obrázky oznámení generované touto možností",
        ssenabled: "Povolit nebo zakázat generování médií pro tento typ",
        checkforupdates: `Zkontrolujte, zda byla na GitHubu vydána nová verze aplikace. Pokud je k dispozici aktualizace, bude automaticky stažena a nainstalována po potvrzení v dialogovém okně <span class="hl">Aktualizace k dispozici</span>`,
        linkedgames: `Obejít <span class="hl">SANWatcher</span> pro vybrané hry ve službě Steam<br><br><span class="ttdesc">Tato možnost by měla být použita pouze ve velmi specifických situacích. Za běžných okolností by ji uživatelé neměli potřebovat!</span>`,
        autoreleasegames: `Obejít <span class="hl">automatické sledování procesů</span> pro vybrané hry ve službě Steam<br><br><span class="ttdesc">Tato možnost by měla být použita pouze ve velmi specifických situacích. Za běžných okolností by ji uživatelé neměli potřebovat!</span>`,
        exclusionlist: `Zabránit sledování úspěchů v konkrétních hrách ve službě Steam aplikací<br><br><span class="ttdesc">Tuto možnost by měli používat pouze ve velmi specifických případech. Uživatelé by tuto možnost neměli používat za běžných okolností!</span>`,
        inclusionlist: `Zabraňuje sledování všech her ze služby Steam aplikací, pokud nejsou výslovně uvedeny<br><br><span class="ttdesc">Tato možnost by měla být použita pouze ve velmi specifických případech. Uživatelé by tuto možnost za běžných okolností neměli potřebovat!</span>`,
        ovx: "Posunout upozornění zobrazené na snímku obrazovky horizontálně",
        ovy: "Posunout upozornění zobrazené na snímku obrazovky vertikálně",
        importtheme: `Importovat úpravy prostřednictvím uživatelem vytvořeného <span class="hl">souboru tématu</span>`,
        exporttheme: `Exportovat aktuálně vybrané <span class="hl">téma</span> k sdílení<br><br><span class="ttdesc">Před pokusem o export si prosím ověřte, že je vybráno požadované <span class="hl">téma</span> (pomocí nabídky <span class="hl">Výběr tématu</span>). Ujistěte se také, že byly úpravy uloženy ve vybraném <span class="hl">tématu</span> (pomocí nabídky <span class="hl">Uložit téma</span>)<br><br><u>Veškeré úpravy, které nebyly dosud uloženy v aktuálním <span class="hl">tématu</span>, nebudou exportovány!</u></span>`,
        webhooks: "Použijte URL Webhooku k odesílání na Discord server při každém odemknutí úspěchu",
        webhookmain: `Přepnout, zda se mají odesílat informace o úspěchu na Discord server při odemčení $main úspěchu`,
        webhooksemi: `Přepnout, zda se mají odesílat informace o úspěchu na Discord server při odemčení $semi úspěchu`,
        webhookrare: "Přepnout, zda se mají odesílat informace o úspěchu na Discord server při odemčení $rare úspěchu",
        webhookplat: "Přepnout, zda se mají odesílat informace o úspěchu na Discord server při odemčení $plat úspěchu",
        webhooktest: "Přepnout, zda se mají odesílat testovací informace na Discord server, když jsou spuštěna testovací oznámení jakéhokoli typu",
        webhookurl: `Nastavte <span class="hl">URL Webhooku</span> pro požadovaný Discord server<br><br><span class="ttdesc"> <span class="hl">URL Webhooku</span> slouží k odesílání na Discord server/kanál jménem uživatele nebo aplikace. Aby bylo možné nastavit nový Webhook pro Discord server, uživatel musí mít v požadovaném serveru roli, která umožňuje vytváření Webhooků<br><br><u>Při použití této možnosti je vyžadována URL Webhooku</u><br><br>Pro více informací se podívejte do oficiální dokumentace Discordu</span>`,
        webhookspoilers: `Přidat označení spoileru ke "Skrytým" úspěchům při zveřejnění na Discordu`,
        webhookappid: "Zobrazit AppID aktuální hry v zápatí vloženého webhooku",
        unlockmsg: "Nastavte polohu zprávy o odemknutí/vlastního textu v $type",
        title: "Nastavte polohu názvu úspěchu v $type",
        desc: "Nastavte polohu popisu úspěchu v $type",
        notification: "oznámení",
        screenshot: "snímek obrazovky",
        percentpos: "Nastavte polohu procenta vzácnosti v $type",
        sspercentpos: "Nastavte polohu procenta vzácnosti v $type",
        hiddeniconpos: "Nastavte polohu ikony skrytého/tajného úspěchu v $type",
        sshiddeniconpos: "Nastavte polohu ikony skrytého/tajného úspěchu v $type",
        decorationpos: "Nastavte polohu dekorativního prvku v $type",
        ssdecorationpos: "Nastavte polohu dekorativního prvku v $type",
        percentbadge: "Zobrazit procento odemknutí v odznaku umístěném nad ikonou úspěchu/hry",
        sspercentbadge: "Zobrazit procento odemknutí v odznaku umístěném nad ikonou úspěchu/hry",
        percentbadgepos: "Nastavit pozici odznaku",
        sspercentbadgepos: "Nastavit pozici odznaku",
        percentbadgecolor: "Nastavit barvu pozadí odznaku",
        sspercentbadgecolor: "Nastavit barvu pozadí odznaku",
        percentbadgefontcolor: "Nastavte barvu písma odznaku",
        sspercentbadgefontcolor: "Nastavte barvu písma odznaku",
        percentbadgefontsize: "Nastavit velikost odznaku",
        sspercentbadgefontsize: "Nastavit velikost odznaku",
        percentbadgeroundness: "Nastavit zaoblení odznaku",
        sspercentbadgeroundness: "Nastavit zaoblení odznaku",
        percentbadgex: "Posun prvku odznaku horizontálně",
        sspercentbadgex: "Posun prvku odznaku horizontálně",
        percentbadgey: "Posun prvku odznaku vertikálně",
        sspercentbadgey: "Posun prvku odznaku vertikálně",
        percentbadgeimg: "Zobrazit ikonu založenou na vzácnosti jako prvek odznaku",
        sspercentbadgeimg: "Zobrazit ikonu založenou na vzácnosti jako prvek odznaku",
        percentbadgeimgbronze: "Ikona odznaku zobrazená, když je procento odemčení > $semirarity",
        sspercentbadgeimgbronze: "Ikona odznaku zobrazená, když je procento odemčení > $semirarity",
        percentbadgeimgsilver: "Ikona odznaku zobrazená, když je procento odemčení < $semirarity a > $rarity",
        sspercentbadgeimgsilver: "Ikona odznaku zobrazená, když je procento odemčení < $semirarity a > $rarity",
        percentbadgeimggold: "Ikona odznaku, která se zobrazí, když je procento odemčení < $rarity",
        sspercentbadgeimggold: "Ikona odznaku, která se zobrazí, když je procento odemčení < $rarity",
        percentbadgeimgplat: "Ikona odznaku zobrazená, když byly odemčeny všechny úspěchy",
        sspercentbadgeimgplat: "Ikona odznaku zobrazená, když byly odemčeny všechny úspěchy",
        resetpbimgs: "Obnovit všechny ikony odznaků na výchozí",
        elemsmatch: `Odpovídá nastavení prvků oznámení zadaných v přizpůsobení pro tento typ oznámení<br><br><span class="ttdesc">Některé přednastavení oznámení nemohou plně odpovídat nastavení přizpůsobení, kvůli rozdílům mezi rozvržením oznámení na obrazovce a oznámením založeným na snímcích obrazovky</span>`,
        themeswitch: `Automaticky přepněte na jakékoli uložené <span class="hl">Téma</span>, když je detekována určitá hra`,
        userthemesync: `Synchronizujte přizpůsobení v vybraném <span class="hl">Téma</span> se všemi ostatními typy oznámení`,
        showsystrayopts: `Zobrazit všechny možnosti obvykle umístěné pod <span class="hl">Systémová lišta</span> > <span class="hl">Možnosti</span> v <span class="hl">Nastavení</span> > <span class="hl">Různé</span>`,
        releaseshortcut: "Uvolnění aktuálně sledované hry pomocí zadané klávesové zkratky",
        themeselect: "Vyberte dříve uložené téma",
        statwin: `Zobrazte přizpůsobitelné statistiky úspěchů pro aktuální hru v externím okně<br><br><span class="ttdesc">Při použití společně s možností <span class="hl">Přeložit úspěchy do jazyka služby Steam</span> nemusí být některé překlady dostupné, dokud nebude daný úspěch odemčen</span>`,
        statwinaot: `Nastavte okno Statistik úspěchů do režimu "Vždy navrchu", což umožní zobrazit okno nad oknem hry<br><br><span class="ttdesc">Když je tato možnost povolena, okno Statistik úspěchů již nebude registrovat uživatelské interakce, jako jsou události "kliknutí". Pro opětovné povolení interakce s oknem musí být tato možnost zakázána</span>`,
        statwinshortcut: "Přepnout překrytí statistik úspěchů pomocí specifikované klávesové zkratky",
        ssdisplay: "Zobrazit náhled zachycené obrazovky v oznámení",
        iconscale: "Zvětšit nebo zmenšit velikost ikony úspěchu",
        showiconborder: "Zobrazit obrázek jako ohraničení kolem ikony úspěchu",
        iconborderimg: "Načíst soubor s obrázkem pro použití jako ohraničení kolem ikony úspěchu",
        iconborderpos: "Nastavit, zda se obrázek ohraničení ikony zobrazí před nebo za ikonou úspěchu",
        iconborderscale: "Zvětšit nebo zmenšit velikost ohraničení ikony v oznámení",
        iconborderx: "Zvětšit nebo zmenšit vodorovný posun ohraničení ikony v oznámení",
        iconbordery: "Zvětšit nebo zmenšit svislý posun ohraničení ikony v oznámení",
        iconborderrarity: "Změní zobrazený rámeček ikony podle vzácnosti odemčeného úspěchu",
        iconborderimgbronze: "Obrázek okraje ikony zobrazený, když je procento odemčení > $semirarity",
        iconborderimgsilver: "Obrázek okraje ikony zobrazený, když je procento odemčení < $semirarity a > $rarity",
        iconshadowcolor: "Nastavit barvu efektu stínu kolem ikony úspěchu při odemčení vzácného úspěchu",
        iconanimcolor: "Nastavit barvu animačního efektu za ikonou úspěchu při odemčení vzácného úspěchu",
        logoscale: "Zvětšit nebo zmenšit velikost prvku loga v oznámení",
        decorationscale: "Zvětšit nebo zmenšit velikost prvku dekorace v oznámení",
        usecustomfontsizes: `Individuálně zvětšit nebo zmenšit velikost textových prvků v oznámení<br><br><span class="ttdesc">Zachování původního rozložení oznámení nelze zaručit při změně jednotlivých hodnot velikosti písma</span>`,
        unlockmsgfontsize: "Zvětšit nebo zmenšit velikost textového prvku zprávy o odemčení",
        titlefontsize: "Zvětšit nebo zmenšit velikost textového prvku názvu úspěchu",
        descfontsize: "Zvětšit nebo zmenšit velikost textového prvku popisu úspěchu",
        webhookembedcolormain: "Nastavit barvu použitou ve vložené zprávě webhooku při odemčení $main úspěchu",
        webhookembedcolorsemi: "Nastavit barvu použitou ve vložené zprávě webhooku při odemčení $semi úspěchu",
        webhookembedcolorrare: "Nastavit barvu použitou ve vložené zprávě webhooku při odemčení $rare úspěchu",
        webhookembedcolorplat: "Nastavit barvu použitou ve vložené zprávě webhooku při odemčení $plat úspěchu",
        raemus: "Zobrazit oznámení, když jsou hry detekovány v podporovaných emulátorech",
        rauser: "Nastavit uživatelské jméno Retro Achievements pro sledování úspěchů",
        rakey: `Nastavte Web API klíč pro ověřování k Retro Achievements API<br><br><span class="ttdesc">Web API klíč lze zkopírovat nebo znovu vygenerovat po přihlášení na web Retro Achievements a přechodu na <span class="hl">Nastavení > Klíče > Web API klíč</span><br><br>🔒 Zadaný klíč bude před uložením na systém místně zašifrován (pokud aktuální OS podporuje šifrování)</span>`,
        rapercenttype: "Nastavit, zda se v oznámeních zobrazí procento odemčených úspěchů pro Hardcore nebo Softcore režim",
        retroarch: `Zobrazovat oznámení o Retro Achievements pro hry emulované v RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Nastavení > Záznam</span> musí být nakonfigurováno s následujícími nastaveními:<br><br><ul><li><span class="hllb">Podrobnost záznamu</span>: <span class="hlgreen">ZAPNUTO</span></li><li><span class="hllb">Úroveň záznamu uživatelského rozhraní</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Záznam do souboru</span>: <span class="hlgreen">ZAPNUTO</span></li><li><span class="hllb">Časové značky v logu</span>: <span class="hlred">VYPNUTO</span></li></ul></span>`,
        dolphin: `Zobrazovat oznámení o Retro Achievements pro hry emulované v Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Zobrazit > Zobrazit konfiguraci záznamu</span> musí být nakonfigurováno s následujícími nastaveními:<br><br><ul><li><span class="hllb">Podrobnost</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Výstupy záznamu</span> > <span class="hlgreen">Zapsat do souboru</span></li><li><span class="hllb">Typy záznamu</span> > <span class="hlgreen">Úspěchy (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Zobrazovat oznámení o Retro Achievements pro hry emulované v PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Nástroje > Povolit protokolování do souboru</span> musí být povoleno</span>`,
        duckstation: `Zobrazit oznámení Retro Achievements pro hry emulované pomocí Duckstation<br><br><span class="ttdesc">❗ Soubor <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> musí být stažen a přesunut do <span class="hl">instalační složky Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Nastavení > Úspěchy > RAIntegration (Pouze pro vývojáře)</span> musí být povoleno</span>`,
        ppsspp: `Zobrazovat oznámení Retro Achievements pro hry emulované pomocí PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> musí být povoleno a nakonfigurováno s následujícím nastavením:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Nastavte cestu k log souboru <span class="hl">"retroarch.log"</span> pro RetroArch<br><br><span class="ttdesc">Při výchozím nastavení instalace je <span class="hl">"retroarch.log"</span> uložen v <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Nastavte cestu k log souboru <span class="hl">"dolphin.log"</span> pro Dolphin<br><br><span class="ttdesc">Při výchozím nastavení instalace je <span class="hl">"dolphin.log"</span> uložen na jednom z následujících míst:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Nastavte cestu k log souboru <span class="hl">"emulog.txt"</span> pro PCSX2<br><br><span class="ttdesc">Při výchozím nastavení instalace je <span class="hl">"emulog.txt"</span> uložen v <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Nastavte cestu k log souboru <span class="hl">"RALog.txt"</span> Duckstation<br><br><span class="ttdesc">Při výchozím nastavení instalace je <span class="hl">"RALog.txt"</span> uložen v <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Nastavte cestu k log souboru PPSSPP <span class="hl">"log.txt"</span><br><br><span class="ttdesc">Při použití výchozího nastavení instalace je soubor <span class="hl">"log.txt"</span> uložen v <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Individuálně nastavit barvu textových prvků v oznámení",
        unlockmsgfontcolor: "Nastavit barvu prvního textového prvku",
        titlefontcolor: "Nastavit barvu druhého textového prvku",
        descfontcolor: "Nastavit barvu třetího textového prvku",
        exportachdata: `Exportovat data o úspěších do souboru JSON při odemknutí úspěchu<br><br><span class="ttdesc">Pokud je povoleno, <span class="ttcode">achdata.json</span> bude exportován do:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Upraví svislý rozestup mezi textovými prvky v oznámení",
        ssmode: `Nastavte, zda mají snímky obrazovky zachycovat celou obrazovku nebo aktuální okno hry<span style="color: red;">*</span><br><br><span class="ttdesc">Pokud nelze najít <span class="hl">spustitelný soubor</span> aktuální hry (<i>ať už prostřednictvím <span class="hl">automatického sledování procesů</span> nebo při přidání jako položky do <span class="hl">Automatické uvolnění her</span></i>), bude tato možnost ve výchozím nastavení nastavena na režim „Obrazovka“</span>`,
        replaynotify: "Zopakovat poslední oznámení o úspěchu",
        replaynotifyshortcut: "Zopakovat poslední oznámení o úspěchu pomocí zadané klávesové zkratky",
        replaynotifyempty: `<br><br><span class="ttdesc">Fronta opakování je prázdná. Odemkni úspěch pro opakování oznámení</span>`,
        customtrigger: "Spustí klávesu/kombinaci při odemčení achievementu. Lze použít ke spuštění klávesových zkratek registrovaných v externích aplikacích",
        customtriggershortcut: `Spustí zadanou klávesu/kombinaci při odemčení achievementu<br><br><span class="ttdesc">Podporuje 1–3 klávesy na zkratku. Pro stisknutí/kombinace s méně než 3 klávesami stiskněte požadované klávesy a počkejte na vypršení časovače (5 s)</span>`,
        customtriggerdelay: "Zpoždění zadané klávesy/kombinace vlastního spouštěče",
        customtriggerusedisplaytime: `Zpoždění zadané klávesy/kombinace vlastního spouštěče podle hodnoty Času Zobrazení aktuálního typu oznámení`,
        trophymode: "Nahradit typy oznámení Hlavní/Vzácné/100% za Bronzové/Stříbrné/Zlaté/Platinové",
        lognum: `Počet předchozích souborů protokolu uložených před odstraněním. Při každém spuštění aplikace se vytvoří nový soubor protokolu<br><br><span class="ttdesc">Pokud je nastavena hodnota 0, všechny předchozí soubory protokolu budou při ukončení odstraněny</span>`, 
        detectedappid: `Použít <span class="hl">AppID</span> aktuálně zjištěné hry`,
        listmode: `Nastaví chování pro <span class="hl">Vyloučení</span>/<span class="hl">Seznam zahrnutí</span><br><br><span class="ttdesc">• <span class="hl">Vyloučení</span>: Ignoruje pouze hry uvedené v seznamu<br>• <span class="hl">Zahrnutí</span>: Ignoruje všechny hry kromě těch, které jsou uvedeny v seznamu</span>`,
        notifymax: `Nastaví maximální počet současně zobrazených oznámení na obrazovce<br><br><span class="ttdesc">Zvýšení počtu současně zobrazených oznámení vyžaduje více prostředků a může snížit výkon</span>`,
        notifyspace: "Nastaví vzdálenost mezi současně zobrazenými oznámeními na obrazovce",
        audiocooldown: `Nastaví dobu, po kterou musí další oznámení čekat, než může být přehrán nový zvuk<br><br><span class="ttdesc">Zvuk nebude ovlivněn, pokud je Maximální počet oznámení nastaven na 1</span>`,
        rauseemudir: "Uložit snímky obrazovky/obrázky oznámení odemčené prostřednictvím RetroAchievements do podsložky aktuálního emulátoru v rámci zadaného adresáře pro snímky/obrázky",
        ssext: "Nastavit formát souboru snímků obrazovky generovaných pomocí možnosti snímku obrazovky s překrytím oznámení",
        notify1line: `Omezit počet řádků textu zobrazovaných ve všech oznámeních na 1<br><br><span class="ttdesc">Přetékající textové řetězce, které se nevejdou na jeden řádek, budou zkráceny pomocí "..."</span>`,
        copytheme: "Zkopírovat vybraný motiv do jiného typu oznámení",
        ssaddtosteam: "Automaticky přidat vygenerovaná média do záznamů a snímků obrazovky aktuální hry ve Steam",
        appdatadir: "Otevřít umístění složky AppData aplikace",
        backup: "Zálohujte obsah složky AppData aplikace do vybraného umístění, které bude sloužit jako bod obnovení aktuálního stavu aplikace",
        restore: "Obnovte obsah složky AppData aplikace z předchozí zálohy",
        gametimerwin: "Zobrazí časovač na obrazovce ukazující čas potřebný k odemčení všech achievementů pro aktuální hru",
        gametimerwinshortcut: "Přepíná časovač dokončení hry pomocí zadané klávesové zkratky",
        gametimerwinaot: `Nastaví časovač dokončení hry do režimu „Vždy navrchu“, což umožní zobrazení okna nad oknem hry<br><br><span class="ttdesc">Pokud je povoleno, časovač dokončení hry již nebude registrovat interakce uživatele, například události „kliknutí“. Pro opětovné povolení interakce s oknem musí být tato možnost vypnuta</span>`,
        resetgametimer: "Resetuje časovač dokončení aktuální hry",
        noshortcuts: `Zakáže všechny klávesové zkratky v aplikaci<br><br><span class="ttdesc">Pokud je povoleno, <u>všechny klávesové zkratky v aplikaci přestanou fungovat</u>. Všechny možnosti související s klávesovými zkratkami budou také skryty</span>`,
        extwinnotify: "Přepíná viditelnost všech oznámení na obrazovce při používání Stream Notifications",
        usesanwatcher: `Povolit nový sledovač herních procesů SAN<br><br><span class="ttdesc">Rozdíly mezi novým SANWatcherem a starými metodami automatického sledování procesů jsou následující:<br><br><div class="wrapper sanwatcher"><span class="hl">ZAPNUTO</span><ul><li>Aktivně sleduje události spuštění/ukončení všech procesů uložených v instalačním adresáři hry</li><li>Pro uvolnění aktuální hry není nutné znát spustitelný soubor hry</li><li>Chování spouštěčů před samotnou hrou se může lišit, proto není zaručena úplná kompatibilita se všemi hrami na Steam</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">VYPNUTO</span><ul><li>Po spuštění hry prohledává instalační adresář hry a hledá spuštěné spustitelné soubory</li><li>Pro uvolnění aktuální hry je nutné znát spustitelný soubor hry</li><li>Pokud nelze herní proces určit automaticky, musí uživatel ručně přidat novou položku do <span class="hl">Automatické uvolnění her</span>, aby byly hry uvolňovány automaticky</li></ul></div>`,
        releasewaittime: `Nastavte, jak dlouho bude SANWatcher čekat na spuštění nových herních procesů, než uvolní aktuální hru<br><br><span class="ttdesc">Například pokud aktuální hra před spuštěním samotné hry otevře spouštěcí nebo konfigurační okno, toto nastavení určuje počet sekund, po které bude SANWatcher čekat na zobrazení skutečného herního okna po zavření spouštěcího nebo konfiguračního okna<br><br>Pokud bude během této čekací doby zjištěn nový aktivní herní proces, uvolnění bude zrušeno a místo toho bude sledován nově aktivní proces<br><br>💡 Název hry bude <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">blikat</span> v poli <span class="hl">Zobrazení hry</span>, zatímco aktuální hra čeká na uvolnění</span>`,
        platcustomtext: `Nastavte vlastní zprávu o 100% dokončení hry, která se zobrazí v oznámení<br><br><span class="ttdesc">Tato možnost bude skryta, pokud je vypnuto Customiser > Předvolba > Prvky oznámení > Popis achievementu</span>`,
        raui: "Zobrazuje názvy rozpoznaných her RetroAchievements v rozhraní zobrazení hry / v oznamovací oblasti"
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
    linkgame: {
        content: {
            exepath: "Cesta ke spustitelnému souboru",
            linkedgame: "Propojit hru",
            autoreleasegame: "Automatické uvolnění hry",
            linkedgamessub: [
                `Přepište automatické sledování všech spuštěných herních procesů pomocí <span class="hl">SANWatcher</span> a místo toho kontrolujte pouze, zda je vybraný <span class="hl">spustitelný soubor hry</span> aktuálně aktivní`,
                `Propojte <span class="hl">AppID</span> libovolné hry s cílovým <span class="hl">spustitelným souborem hry</span> nebo <span class="hl">odstraňte</span> existující propojení`
            ],
            autoreleasegamessub: [
                `Pokud Steam stále zobrazuje hru jako <i>Spuštěnou</i> i po zavření okna hry, zkuste přidat novou položku do <span class="hl">$linkgame</span>`,
                `Přidejte <span class="hl">AppID</span> konkrétní hry spolu s očekávaným <span class="hl">spustitelným souborem hry</span> nebo <span class="hl">odstraňte</span> existující položku`,
            ],
            managesub: [
                `Jakmile je hra rozpoznána, lze nové položky přidávat také prostřednictvím <span class="hl">zaměření okna</span> kliknutím <i>pravým tlačítkem myši</i> na <span class="hl">ikonu v oznamovací oblasti</span> > <span class="hl">$linkgame</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak zjistím AppID hry ve službě Steam?</u></span>`
            ],
            linknew: "Nová položka",
            linknewsub: [
                `Propojte <span class="hl">AppID</span> nové hry s cílovým <span class="hl">spustitelným souborem hry</span>`,
                `Po přidání lze položky <span class="hl">odstranit</span> prostřednictvím předchozí nabídky <span class="hl">$linkgame</span>`
            ],
            linkedit: "Upravit položku",
            linkeditsub: [
                `Upravte existující propojení mezi <span class="hl">AppID</span> hry a cílovým <span class="hl">spustitelným souborem hry</span>`,
                `Po přidání lze položky <span class="hl">odstranit</span> prostřednictvím předchozí nabídky <span class="hl">$linkgame</span>`
            ],
            link: "Přidat",
            findappid: "Najít Steam AppID",
            findappidsub: [
                `Každá hra ve službě Steam má jedinečné číslo nazývané <span class="hl">AppID</span>. AppID libovolné hry ve službě Steam můžete zjistit jedním z následujících způsobů:`,
                `V <span class="hl">klientu Steam</span> klikněte <i>pravým tlačítkem myši</i> na hru ve své <span class="hl">Knihovně</span> a vyberte <i>Vlastnosti</i> > <i>Aktualizace</i> – zde bude uvedeno AppID`,
                `V <span class="hl">URL adrese</span> <span class="hl">stránky obchodu</span> hry – jedná se o číslo uvedené za <span class="hl">app/</span>: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Na webových stránkách, jako je <span class="hl">SteamDB</span> – sekce <span class="hl">App Info</span> obsahuje AppID každé hry`
            ],
            noexe: "Spustitelný soubor hry nebyl nalezen!",
            noexesub: "Klikněte sem pro více informací",
            noexedialogsub: [
                `Steam Achievement Notifier nedokázal automaticky najít spustitelný soubor této hry. Umístění spustitelného souboru hry je vyžadováno, aby bylo možné hru po jejím ukončení „uvolnit“`,
                `Chcete-li hru po jejím ukončení uvolnit ručně, klikněte <i>pravým tlačítkem myši</i> na <span class="hl">ikonu v oznamovací oblasti</span> > <span class="hl">Možnosti</span> > <span class="hl">Uvolnit hru</span> nebo použijte <span class="hl">Klávesovou zkratku pro uvolnění hry</span>`,
                `Případně klikněte na tlačítko <span class="hl">Přidat</span> níže a přidejte spustitelný soubor aktuálně zaměřeného okna do <span class="hl">Nastavení</span> > <span class="hl">Hry</span> > <span class="hl">Hry s automatickým uvolněním</span>`,
            ],
            linkedgamefocussub: `Chcete-li přepsat automatické sledování všech spuštěných herních procesů pomocí <span class="hl">SANWatcher</span>, přidejte novou položku do <span class="hl">Propojených her</span>`,
            autoreleasegamefocussub: `Pokud Steam stále zobrazuje hru jako <i>Spuštěnou</i> i po zavření okna hry, zkuste přidat novou položku do <span class="hl">Her s automatickým uvolněním</span>`,
            focussub: `Chcete-li to provést pro aktuální hru, klikněte na tlačítko <span class="hl">Přidat</span> níže a přidejte spustitelný soubor aktuálně zaměřeného okna do <span class="hl">Nastavení</span> > <span class="hl">Hry</span> > <span class="hl">$linkgame</span>`,
            linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Co se stane, když kliknu na tlačítko Přidat?</u></span>`,
            linkgamehelp: "Propojit pomocí zaměření",
            linkgamehelpsub: [
                `Kliknutím na tlačítko <span class="hl">Přidat</span> se automaticky přidá nová položka do <span class="hl">Nastavení</span> > <span class="hl">Hry</span> > <span class="hl">Hry s automatickým uvolněním</span> s využitím informací z aktuálně zaměřeného okna.`,
                `Po kliknutí na tlačítko <span class="hl">Přidat</span> se spustí pětisekundový odpočet`,
                `Před vypršením odpočtu zaměřte okno hry`,
                `Po skončení odpočtu bude přidána nová položka pro aktuální <span class="hl">AppID</span> do <span class="hl">Nastavení</span> > <span class="hl">Hry</span> > <span class="hl">Hry s automatickým uvolněním</span> s využitím spustitelného souboru aktuálně zaměřeného okna`,
                `Nové pokusy přepíší existující položky nebo lze položku odstranit v <span class="hl">Nastavení</span> > <span class="hl">Hry</span> > <span class="hl">Hry s automatickým uvolněním</span> kliknutím na tlačítko <span id="linkhelpunlink"></span>`
            ],
            addlinkfailed: "Okno se nepodařilo přidat",
            addlinkfailedsub: `Klikněte na tlačítko <span class="hl">Přidat</span> a zkuste to znovu`
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Přidat <span class="hl">AppID</span> jakékoli hry ve službě Steam do <span class="hl">seznamu vyloučení</span>`,
                `Steam Achievement Notifier se nebude snažit sledovat údaje o úspěších pro jakékoli <span class="hl">AppID</span> hry přidané do <span class="hl">seznamu vyloučení</span>`,
                `<span class="hl" id="appidhelp"><u>Jak najdu AppID hry ve službě Steam?</u></span>`
            ],
            exclusionnew: "Nové vyloučení",
            exclusionnewsub: [
                `Zadejte <span class="hl">AppID</span>, které chcete přidat do <span class="hl">seznamu vyloučení</span>`
            ],
            exclusionedit: "Upravit vyloučení",
            exclusioneditsub: [
                `Upravit existující <span class="hl">AppID</span> v <span class="hl">seznamu vyloučení</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Přidejte <span class="hl">AppID</span> libovolné hry ze služby Steam do <span class="hl">Seznamu zahrnutí</span>`,
                `Steam Achievement Notifier se pokusí sledovat data o úspěších pouze u her, které mají své <span class="hl">AppID</span> přidané do <span class="hl">Seznamu zahrnutí</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak zjistím AppID hry ze služby Steam?</u></span>`
            ],
            inclusionnew: "Nové zahrnutí",
            inclusionnewsub: [
                `Zadejte <span class="hl">AppID</span> pro přidání do <span class="hl">Seznamu zahrnutí</span>`
            ],
            inclusionedit: "Upravit zahrnutí",
            inclusioneditsub: [
                `Upravte existující <span class="hl">AppID</span> v <span class="hl">Seznamu zahrnutí</span>`
            ]
        }
    },
    notificationelems: {
        title: "Prvky oznámení",
        content: {
            unlockmsg: "Zpráva o odemknutí",
            title: "Název úspěchu",
            desc: "Popis úspěchu",
            hiddeniconpos: "Skrytá ikona",
            sshiddeniconpos: "Skrytá ikona",
            decorationpos: "Dekorace",
            ssdecorationpos: "Dekorace",
            percentpos: "Procento vzácnosti",
            sspercentpos: "Procento vzácnosti",
            percentbadge: "Procentuální odznak",
            sspercentbadge: "Procentuální odznak",
            percentbadgepos: "Pozice odznaku",
            sspercentbadgepos: "Pozice odznaku",
            percentbadgecolor: "Barva odznaku",
            sspercentbadgecolor: "Barva odznaku",
            percentbadgefontcolor: "Barva písma odznaku",
            sspercentbadgefontcolor: "Barva písma odznaku",
            percentbadgefontsize: "Velikost odznaku",
            sspercentbadgefontsize: "Velikost odznaku",
            percentbadgeroundness: "Zaoblení odznaku",
            sspercentbadgeroundness: "Zaoblení odznaku",
            percentbadgex: "Horizontální posun",
            sspercentbadgex: "Horizontální posun",
            percentbadgey: "Vertikální posun",
            sspercentbadgey: "Vertikální posun",
            percentbadgeimg: "Použít ikonu",
            sspercentbadgeimg: "Použít ikonu",
            percentbadgeimgbronze: "Vzácnost: > $semirarity",
            sspercentbadgeimgbronze: "Vzácnost: > $semirarity",
            percentbadgeimgsilver: "Vzácnost: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Vzácnost: < $semirarity & > $rarity",
            percentbadgeimggold: "Vzácnost: < $rarity",
            sspercentbadgeimggold: "Vzácnost: < $rarity",
            resetpbimgs: "Obnovit ikony odznaků",
            elemsmatch: "Odpovídá nastavení přizpůsobení",
            ssdisplay: "Náhled obrazovky"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Přidejte <span class="hl">AppID</span>/<span class="hl">GameID</span> libovolné hry, aby se při jejím rozpoznání automaticky přepínala <span class="hl">Témata</span>`,
                `Pro každý typ oznámení lze vybrat jakékoli uložené <span class="hl">Téma</span> spolu s požadovaným monitorem, který se použije jako <span class="hl">Zdroj snímku obrazovky</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak zjistím AppID hry na Steamu?</u></span>`,
                `<span class="hl help" id="ragameidhelp"><u>Jak zjistím GameID hry na RetroAchievements?</u></span>`
            ],
            themeswitchnew: "Nové automatické přepínání",
            themeswitchnewsub: [
                `Zadejte <span class="hl">AppID</span>/<span class="hl">GameID</span> hry spolu s požadovaným monitorem, který se použije jako <span class="hl">Zdroj snímku obrazovky</span>`,
                `Najednou lze zadat více <span class="hl">AppID</span>/<span class="hl">GameID</span>, pokud jsou odděleny čárkou (<code>,</code>) nebo středníkem (<code>;</code>)`,
                `Vyberte, na které <span class="hl">Téma</span> se má přepnout pro každý typ oznámení, když bude rozpoznáno <span class="hl">AppID</span>/<span class="hl">GameID</span> této hry`
            ],
            themeswitchedit: "Upravit automatické přepínání",
            themeswitcheditsub: [
                `Upravte požadovaný monitor, který se použije jako <span class="hl">Zdroj snímku obrazovky</span> pro <span class="hl">AppID</span>/<span class="hl">GameID</span> této hry`,
                `Změňte, na které <span class="hl">Téma</span> se má přepnout pro každý typ oznámení, když bude rozpoznáno <span class="hl">AppID</span>/<span class="hl">GameID</span> této hry`
            ],
            themes: "Témata",
            src: "Zdroj snímku obrazovky",
            themedeleted: "Téma bylo odstraněno",
            rafindgameid: "Najít RA GameID",
            rafindgameidsub: [
                `Každá hra na RetroAchievements má jedinečné číslo, které je s ní spojeno – nazývá se <span class="hl">GameID</span>. GameID libovolné hry na RetroAchievements najdete zde:`,
                `V <span class="hl">URL</span> <span class="hl">stránky hry</span> na webu RetroAchievements – jedná se o číslo uvedené za <span class="hl">game/</span>: <code class="helpcode">https://retroachievements.org/game/<span class="hl">10003</span></code>`
            ]
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Vypadá to, že se pokoušíte povolit volbu <span class="hl">${opt}</span>, ale tato volba nemůže být povolena bez nejprve nainstalovaného balíčku <code class="dialogcode">${dep}</code>`,
    `Spusťte prosím <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> pro instalaci této závislosti`
]