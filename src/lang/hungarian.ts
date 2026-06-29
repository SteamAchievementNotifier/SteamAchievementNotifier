export const translations = {
    global: {
        main: "Fő",
        semi: "Fél",
        rare: "Ritka",
        plat: "100%",
        trophymain: "Bronz",
        trophysemi: "Ezüst",
        trophyrare: "Arany",
        trophyplat: "Platina",
        test: "Teszt értesítések",
        topleft: "Bal felső",
        topcenter: "Felső közép",
        topright: "Jobb felső",
        bottomleft: "Bal alsó",
        bottomcenter: "Alsó közép",
        bottomright: "Jobb alsó",
        ok: "OK",
        preview: "Előnézet",
        save: "Mentés",
        back: "Vissza",
        edit: "Szerkesztés",
        lockedby: "Zárolva: $lock",
        settings: "Beállítások",
        appversion: "App verzió",
        image: "Kép",
        audio: "Hang",
        folder: "Mappa",
        font: "Betűtípus",
        select: "Kiválasztás",
        gametitle: "Játékcím",
        congrats: "Gratulálok!",
        achievementunlocked: "Teljesítmény feloldva",
        gamecomplete: "100% Befejezve",
        achievementdesc: "Kattintás a Teszt értesítés megjelenítése gombra",
        gamecompletedesc: "Összes teljesítmény feloldva!",
        defaultcustomfont: "Alapértelmezett (Nincs kiválasztott betűtípus)",
        defaultsoundfile: "Alapértelmezett (Nincs kiválasztott hangfájl)",
        defaultsounddir: "Alapértelmezett (Nincs kiválasztott mappa)",
        nowtracking: "Most követi a teljesítményeket:",
        nopreview: "Az előnézet nem érhető el a natív operációs rendszerhez",
        options: "Beállítások",
        resetwindow: "Ablak visszaállítása",
        show: "Mutat",
        exit: "Kilépés",
        donotshowagain: "Ne jelenjen meg újra ez a párbeszédablak",
        releasegame: "Játék Felszabadítása",
        releasegamesub: [
            `Indítsa újra a háttérben futó Worker folyamatot és szabadítsa fel a jelenleg nyomon követett játékot`,
            `Próbálja ki ezt az opciót, ha nemrég bezárt egy játékot, de a Steam még mindig futtatja, vagy ha a Steam Achievement Notifier még mindig nyomon követi a már bezárt játékot`
        ],
        noupdateavailable: "Nincs frissítés elérhető",
        latestversion: "Legújabb verzió telepítve",
        missingdeps: "Hiányzó függőség",
        restartapp: "Alkalmazás újraindítása",
        restartappsub: [
            `Ha a dolgok nem működnek megfelelően, használd ezt a lehetőséget az alkalmazás bezárásához és újraindításához`,
            `Ha a probléma továbbra is fennáll az alkalmazás újraindítása után, kérlek fontold meg, hogy jelented be azt a kezdőképernyőn található beépített linkeken keresztül`
        ],
        suspend: "Felfüggesztés",
        resume: "Folytatás",
        new: "Új...",
        nodata: "Nincsenek adatok",
        webhookunlockmsg: "$user teljesítményt oldott fel",
        webhookunlockmsgplat: "$user feloldotta az összes teljesítményt",
        webhookingame: "a $gamename játékban",
        notconnected: "Nincs csatlakoztatva",
        raloghelp: "A játékom nem észlelhető",
        raenablelog: `Emulátor naplófájlok`,
        raenablelogsub: [
            `Ahhoz, hogy hozzáférj a belső játék eseményekhez (például a jelenlegi játék állapota, teljesítmény értesítések stb.), egy külső <span class="hl">naplófájlba</span> történő naplózás <u>engedélyezve kell legyen</u> minden kiválasztott emulátorban.<br><br>A kiválasztott emulátorok <u>használják ezt a <span class="hl">naplófájlt</span></u> mint a <span class="hl">Naplófájl Elérési Út</span> értékét.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    A <span class="hl">RetroArch > Beállítások > Naplózás</span> beállításait az alábbi módon kell konfigurálni:
                    <br>
                    <ul>
                        <li><span class="hllb">Naplózási Részletesség</span>: <span class="hlgreen">BE</span></li>
                        <li><span class="hllb">Előlap Naplózási Szint</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Naplózás Fájlba</span>: <span class="hlgreen">BE</span></li>
                        <li><span class="hllb">Időbélyeg a Napló Fájlokhoz</span>: <span class="hlred">KI</span></li>
                    </ul>
                    <br>
                    Alapértelmezett telepítési beállításokkal a <span class="hl">"retroarch.log"</span> itt található:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    A <span class="hl">Dolphin > Nézet > Naplózási Beállítások Megjelenítése</span> beállításait az alábbi módon kell konfigurálni:
                    <br>
                    <ul>
                        <li><span class="hllb">Részletesség</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Napló Kimenetek</span> > <span class="hlgreen">Írás Fájlba</span></li>
                        <li><span class="hllb">Napló Típusok</span> > <span class="hlgreen">Teljesítmények (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Alapértelmezett telepítési beállításokkal a <span class="hl">"dolphin.log"</span> az alábbi helyek egyikén található:
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
                    <span class="hl">PCSX2 > Eszközök > Fájl naplózás engedélyezése</span> engedélyezve kell, hogy legyen
                    <br>
                    <br>
                    Alapértelmezett telepítési beállításokkal a <span class="hl">"emulog.txt"</span> itt van mentve:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>letöltve</u></span> kell lennie, és át kell helyezni a <span class="hl">Duckstation telepítési könyvtárába</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Beállítások > Eredmények > RAIntegration (csak fejlesztőknek)</span> engedélyezve kell, hogy legyen
                    <br>
                    <br>
                    Alapértelmezett telepítési beállításokkal a <span class="hl">"RALog.txt"</span> a következő helyen tárolódik:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Beállítások > Fejlesztői eszközök > Általános > Naplózás fájlba</span> engedélyezve kell legyen, és a következő beállításokkal kell konfigurálni:
                    <br>
                    <ul>
                        <li><span class="hllb">Teljesítmények</span>: <span class="hlgreen">Információ</span></li>
                    </ul>
                    <br>
                    Alapértelmezett telepítési beállítások esetén a <span class="hl">"log.txt"</span> fájl itt található:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Nem támogatott Beta",
        betaunsupportedsub: [
            "Új verzió jelent meg a Steam Achievement Notifierből!",
            `<u>Ez a Beta verzió már nem támogatott</u>. Kérjük, töltse le és telepítse a legújabb hivatalos verziót a Githubról a <span class="hl">Releases</span> gomb használatával lentebb.`,
            "Köszönjük, hogy tesztelted! 💜"
        ],
        betaghreleases: "Kiadások",
        checkapplog: "Kérjük, ellenőrizze az alkalmazás naplóját a részletekért.",
        workercrash: "A Worker összeomlott!",
        workercrashsub: "Kattints ide a Worker újraindításához és a játék követésének újbóli megkísérléséhez"
    },
    app: {
        content: {
            game: "Nincs észlelt játék",
            customise: "Testreszabás",
            test: "Teszt értesítés megjelenítése"
        }
    },
    settings: {
        language: {
            title: "Nyelv",
            content: {
                steamlang: "Fordítsd az eredményeket a Steam nyelvére",
                maxsteamlangretries: "Maximális fordítási kísérletek száma"
            }
        },
        os: {
            title: "Operációs rendszer",
            content: {
                desktop: "Asztali parancsikon létrehozása",
                startwin: "Indítás bejelentkezéskor",
                startmin: "Indítás minimalizálva",
                nohwa: "Hardvergyorsítás kikapcsolása",
                litemode: "Könnyű mód"
            }
        },
        notifications: {
            title: "Értesítések",
            content: {
                rarity: "Ritkasági százalék",
                semirarity: "Ezüst százalék",
                rareonly: "Csak ritka",
                all: "Mind",
                off: "Ki",
                showpercent: "Százalék megjelenítése",
                soundonly: "Csak hang",
                nowtracking: "Követési értesítés megjelenítése",
                nowtrackingscale: "Követési skála",
                nowtrackingpos: "Követési Pozíció",
                shortcuts: "Értesítési gyorsbillentyűk",
                noiconcache: "Ikon gyorsítótár kikapcsolása",
                webhooks: "Postázás Discord szerverre",
                webhooktypes: "Webhook típusok",
                webhookurl: `Webhook URL`,
                webhookcaution: `Ezeket a beállításokat aktiválva és érvényes Discord Webhook linket adva meg, elfogadja, hogy megérti, hogy <u>minden jelenlegi Steam felhasználóra vonatkozó teljesítmény- és játékadat</u> közzétételre kerül az adott Discord szerveren a megadott Webhook linken keresztül.<br><br>Ha nem szeretné, hogy a Steam Achievement Notifier közzétegye ezeket az információkat az Ön nevében, kérjük, tiltsa le ezt az opciót.`,
                webhooklaststatus: "Utolsó Állapot",
                webhookspoilers: `Spoiler címke hozzáadása`,
                webhookappid: `AppID megjelenítése`,
                replaynotify: "Újraértesítés",
                replaynotifyshortcut: "Újraértesítés gyorsbillentyű",
                customtrigger: "Egyedi Trigger",
                customtriggershortcut: "Trigger Gyorsbillentyű",
                customtriggerdelay: "Trigger Késleltetés",
                customtriggerusedisplaytime: "Megjelenítési Idő Használata",
                trophymode: "Trófea mód",
                notifymax: "Maximális értesítések", 
                notifyspace: "Értesítések közötti távolság",
                notify1line: "Szöveg korlátozása 1 sorra"
            }
        },
        games: {
            title: "Játékok",
            content: {
                linkedgames: "Kapcsolt játékok",
                autoreleasegames: "Automatikusan kiadott játékok",
                themeswitch: "Automatikus téma váltás",
                exclusionlist: "Kizárások listája",
                inclusionlist: "Belefoglalási lista",
                listmode: "Lista mód",
                exclusion: "Kizárás",
                inclusion: "Belefoglalás"
            }
        },
        media: {
            title: "Média",
            content: {
                steamss: "Steam képernyőkép készítése",
                screenshots: "További média",
                off: "Ki",
                ssonly: "Csak képernyőkép",
                overlay: "Képernyőkép értesítési átfedéssel",
                monitors: "Képernyőkép forrás",
                hdrmode: "HDR mód",
                ovpos: "Átfedés pozíció",
                ovmatch: "Pozíció igazítása",
                ovx: "Vízszintes eltolás",
                ovy: "Függőleges eltolás",                
                ovpath: "Képernyőkép útvonal",
                ssdelay: "Képernyőkép késleltetés",
                notifyimg: "Értesítési kép",
                imgpath: "Kép elérési útvonala",
                ssenabled: "Engedélyezés",
                ssmode: "Képernyőképfogó mód",
                screen: "Képernyő",
                window: "Ablak",
                rauseemudir: "Mentés az emulátor almappájába",
                ssext: "Képernyőkép formátum",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Hozzáadás a Steamhez"
            }
        },
        streaming: {
            title: "Közvetítés",
            content: {
                extwin: "Stream értesítések",
                extwinframerate: "Képfrissítési sebesség",
                extwinshow: "Ablak megjelenítése",
                audiosrc: "Hangforrás",
                notify: "Értesítés",
                app: "Alkalmazás",
                off: "Némítva",
                statwin: "Eredménystatisztika ablak",
                statwinaot: "Mindig a tetején",
                noachievements: "Nincsenek eredmények megjelenítésre",
                startgame: "Indíts el egy játékot az eredmények megjelenítéséhez!",
                max: "Max",
                custom: "Egyedi...",
                statwinshortcut: "Átfedés gyorsbillentyű",
                gametimerwin: "Játék Befejezési Időzítő",
                gametimerwinshortcut: "Időzítő Gyorsbillentyű",
                gametimerwinaot: "Mindig Felül",
                resetgametimer: "Időzítő Visszaállítása",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Biztos vagy benne?</span>
                        <span>Ez visszaállítja az aktuális játék Játék Befejezési Időzítőjét 00:00:00.000 értékre.</span>
                        <span class="noundo">🛑 Ez a művelet nem vonható vissza!</span>
                    </div>
                `,
                resetgametimerfailed: "Nem sikerült visszaállítani az időzítőt.",
                resetgametimercomplete: "Az AppID $appid már teljesítve lett.",
                extwinnotify: "Képernyőértesítés Megjelenítése"
            }
        },
        accessibility: {
            title: "Hozzáférhetőség",
            content: {
                noanim: "Alkalmazás ablakanimációk kikapcsolása",
                noupdatedialog: "Frissítési párbeszédpanel kikapcsolása",
                nvda: "NVDA támogatás engedélyezése",
                tooltips: "Eszközleírások megjelenítése",
                showsystrayopts: "Rendszer tálca opciók megjelenítése",
                releaseshortcut: "Játék felszabadítása billentyűparancs",
                noshortcuts: "Billentyűparancsok Letiltása"
            }
        },
        advanced: {
            title: "Haladó",
            content: {
                pollrate: "Szavazási ráta",
                initdelay: "Követési késleltetés",
                releasedelay: "Kiadási késleltetés",
                maxretries: "Maximális újrapróbálkozások száma",
                debug: "Hibakereső panel",
                userust: "Alternatív feldolgozási mód",
                notifydebug: "Hibakeresési értesítések megjelenítése",
                workerdebug: "Worker DevTools megjelenítése",
                exportachdata: "Teljesítményadatok exportálása",
                lognum: "Korábbi naplófájlok", 
                audiocooldown: "Hang-várakozási idő",
                usecustomfiles: "Egyedi alkalmazásfájlok használata",
                showcustomfiles: "Egyedi alkalmazásfájlok megjelenítése",
                appdatadir: "AppData mappa megjelenítése",
                backup: "Biztonsági mentés",
                backuppath: "Mentési útvonal",
                backupsub: [
                    "Készítsen biztonsági másolatot az alkalmazás AppData mappájának tartalmáról egy kiválasztott helyre",
                    "Ez a biztonsági mentés a jelenlegi állapot visszaállítási pontjaként szolgál az alkalmazás számára",
                    `Bármely korábbi biztonsági mentés visszaállítása a <span class="hl">Beállítások</span> > <span class="hl">Speciális</span> > <span class="hl">Visszaállítás</span> menüpontból`
                ],
                backupfailed: "A biztonsági mentés létrehozása sikertelen.",
                restore: "Visszaállítás",
                restoresub: [
                    "Állítsa vissza az alkalmazás AppData mappájának tartalmát egy korábbi biztonsági mentésből",
                    `Válasszon egy <span class="hl">.sanbak</span> biztonsági mentési fájlt a visszaállításhoz. Ez a fájl megmarad a visszaállítás után`,
                    "❗ A megerősítés után az alkalmazás újraindul a kiválasztott biztonsági mentési fájl visszaállításához"
                ],
                restorefailed: "A biztonsági mentés visszaállítása sikertelen.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Felszabadítási várakozási idő"
            }
        },    
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulátorok",
                rauser: "Felhasználónév",
                rakey: "API Kulcs",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Naplófájl elérési út",
                rapercenttype: "Százalék típus",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Adja meg a naplófájl elérési útját",
                logfile: "Napló Fájl",
                status: "Állapot",
                game: "Játék",
                lastachievement: "Utolsó teljesítményazonosító",
                wait: "Várakozás az emulátorra",
                idle: "Várakozás a játékeseményre",
                start: "Játék indítása",
                stop: "Játék leállítása",
                achievement: "Teljesítmény feloldva"
            }
        },
        misc: {
            title: "Egyéb",
            content: {
                colorprofile: "Színprofil",
                checkforupdates: "Frissítések keresése",
                log: "Alkalmazás napló",
                reset: "Alkalmazás visszaállítása"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Előre beállított",
            content: {
                preset: "Értesítés előre beállítása",
                iconanim: "Ritka ikon-animáció",
                alldetails: "Összes részlet megjelenítése",
                usepercent: "Százalék használata",
                displaytime: "Megjelenítési idő",
                scale: "Méretarány",
                customtext: "Egyéni szöveg",
                usegametitle: "Játékcím használata",
                customfont: "Egyéni betűtípus"
            }
        },
        sound: {
            title: "Hang",
            content: {
                soundmode: "Hang mód",
                file: "Fájl",
                folder: "Véletlenszerű",
                soundfile: "Hangfájl",
                sounddir: "Hangmappa",
                volume: "Hangerő"
            }
        },
        style: {
            title: "Stílus",
            content: {
                bgstyle: "Háttér stílusa",
                solid: "Egyszínű",
                gradient: "Gradiens",
                img: "Kép",
                gameart: "Játékművészet",
                gradientangle: "Gradiens szög",
                bgimg: "Háttérkép",
                bgachicon: "Használja a sikerikonot",
                bgimgbrightness: "Fényerő",
                brightness: "Fényerő",
                blur: "Homályosítás",
                roundness: "Kerekítés",
                fontsize: "Betűméret",
                usecustomfontsizes: "Egyedi betűméretek használata",
                unlockmsgfontsize: "Feloldó üzenet",
                titlefontsize: "Cím",
                descfontsize: "Leírás",
                textvspace: "Szöveg közötti távolság",
                opacity: "Átlátszóság",
                bgonly: "Csak háttér",
                glow: "Fénylés",
                glowcolor: "Szín",
                glowsize: "Méret",
                glowx: "Vízszintes Eltolás",
                glowy: "Függőleges Eltolás",
                glowopacity: "Átlátszatlanság",
                glowanim: "Animáció",
                glowspeed: "Sebesség",
                glowrarity: "Ritkaság használata",
                glowcolorbronze: "Ritkaság: > $semirarity",
                glowcolorsilver: "Ritkaság: < $semirarity & > $rarity",
                glowcolorgold: "Ritkaság: < $rarity",
                off: "Nincs",
                pulse: "Pulzus",
                double: "Kettős",
                focus: "Fókusz",
                orbit: "Pálya",
                fluorescent: "Fluoreszkáló",
                rainbow: "Szivárvány",
                mask: "Maszk",
                maskimg: "Maszk kép",
                useoutline: "Kontúr",
                outline: "Kontúrtípus",
                outlinecolor: "Kontúr Szín",
                outlinewidth: "Kontúr Szélesség",
                dashed: "Szakaszos",
                dotted: "Pontozott"
            }
        },
        colors: {
            title: "Színek",
            content: {
                primarycolor: "Elsődleges szín",
                secondarycolor: "Másodlagos szín",
                tertiarycolor: "Harmadlagos szín",
                iconshadowcolor: "Ritka ikon árnyék színe",
                iconanimcolor: "Ritka ikon animáció színe",
                fontcolor: "Betűszín",
                usecustomfontcolors: "Egyedi betűszín használata",
                unlockmsgfontcolor: "Szín 1",
                titlefontcolor: "Szín 2",
                descfontcolor: "Szín 3",
                fontoutline: "Betű körvonal",
                fontoutlinecolor: "Betű körvonal színe",
                fontoutlinescale: "Betűkontúrok mérete",
                fontshadow: "Betűárnyék",
                fontshadowcolor: "Betűárnyék színe",
                fontshadowscale: "Betűárnyék mérete",
                fontshadowx: "Vízszintes eltolás",
                fontshadowy: "Függőleges eltolás"
            }
        },
        icons: {
            title: "Ikonok",
            content: {
                iconscale: "Ikon skálázás",
                iconroundness: "Ikon kerekítése",
                showiconborder: "Ikon keret megjelenítése",
                iconborderimg: "Ikon keret",
                iconborderpos: "Keret pozíciója",
                iconborderscale: "Keret mérete",
                iconborderx: "Vízszintes eltolás",
                iconbordery: "Függőleges eltolás",
                iconborderrarity: "Használja a ritkaságot",
                iconborderimgbronze: "Ritkaság: > $semirarity",
                iconborderimgsilver: "Ritkaság: < $semirarity & > $rarity",
                front: "Elöl",
                back: "Hátul",
                plat: "100% logó",
                usegameicon: "Játék ikon használata",
                gameicontype: "Játék ikon típus",
                usecustomimgicon: "Egyéni ikont használni",
                customimgicon: "Egyéni ikon",
                icon: "Ikon",
                logo: "Logó",
                logoscale: "Logó skálázás",
                decoration: "Dekoráció",
                decorationscale: "Díszítés skálázás",
                showdecoration: "Dekoráció megjelenítése",
                rarity: "Ritkaság",
                showhiddenicon: "Rejtett ikon megjelenítése",
                hiddenicon: "Rejtett ikon",
                replacelogo: "Logó cseréje"
            }
        },
        position: {
            title: "Pozíció",
            content: {
                pos: "Képernyő pozíció",
                usecustompos: "Egyéni pozíció használata",
                setcustompos: "Beállítás",
                copycustompos: "Alkalmazás az összesre",
                resetcustompos: "Visszaállítás"
            }
        },
        theme: {
            title: "Téma",
            content: {
                updatetheme: "Téma Frissítése",
                savetheme: "Téma mentése",
                sub: [
                    `A mentett <span class="hl">Felhasználói Témák</span> kiválaszthatók a <span class="hl">Téma kiválasztása</span> menüből a Kezdőképernyőn.`,
                    `Győződjön meg róla, hogy a <span class="hl">Téma neve</span> <u>egyedülálló</u> - egy már létező téma neve <u>felülírja az előzőt</u>!`
                ],
                placeholder: "Téma neve",
                theme: "Téma",
                importtheme: "Téma importálása",
                import: "Importálás",
                importsub: [
                    `Felhasználó által létrehozott <span class="hl">témafájl</span> importálása`,
                    `Az <span class="hl">importált témák</span> sikeres importálás után automatikusan betöltődnek, és kiválaszthatók a <span class="hl">Téma kiválasztása</span> menüből`,
                ],
                importidle: `Válasszon ki egy <span class="hl">témafájlt</span> importáláshoz`,
                importcopied: `Téma sikeresen másolva`,
                importrenamed: `Téma sikeresen átnevezve`,
                importextracted: `Téma sikeresen kicsomagolva`,
                importrewriting: `Témafájl útvonalainak újraírása...`,
                importconverting: `Téma konvertálása...`,
                importcreating: `Téma létrehozása...`,
                importdone: `Téma sikeresen importálva`,
                importfailed: `Hiba történt a kiválasztott témafájl importálásakor!`,
                exporttheme: "Téma exportálása",
                export: "Exportálás",
                exporterrortitle: "Exportálási hiba",
                exporterrorsub: [
                    "Hiba történt a kiválasztott téma exportálása közben",
                    `Próbálja meg elmenteni a jelenlegi témát (<i>a <span class="hl">Téma mentése</span></i> lehetőséggel), és próbálja meg újra exportálni`,
                    `Ha a probléma továbbra is fennáll, kérjük, másolja ki az alábbi hibát, majd jelentsen be a <span class="hl">Kezdőképernyő</span> hivatkozásgombjaival`
                ],
                synctheme: "Téma szinkronizálása",
                syncedwith: "Szinkronizálva ezzel:",
                themeselect: "Kiválasztott téma",
                copytheme: "Téma másolása",
                copythemesub: "Válaszd ki az értesítés típusát/típusait, ahová a kiválasztott témát másolni szeretnéd"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Itt az, ami történt az alkalmazás indítása óta",
            copylog: "Napló tartalmának másolása"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Biztos benne?</span>
                    <span>Minden korábban beállított adat, <u>beleértve az egyéni beállításokat</u>, visszaáll az alapértelmezettre.</span>
                    <span>🛑 Ezt nem lehet visszavonni!</span>
                </div>
            `,
            reset: "Visszaállítás"
        }
    },
    error: {
        content: {
            subtitle: "A Steam Achievement Notifier problémát észlelt, és be kell zárni.",
            details: "Itt vannak a hiba részletei:",
            sub: "Kattintson az alábbi gombokra a probléma jelentéséhez a preferált platformján keresztül.",
            report: "Jelentés",
            log: "Alkalmazásnapló",
            exit: "Kilépés"
        }
    },    
    tooltips: {
        game: "A játék, amelynek eredményeit jelenleg követi",
        usertheme: "Válasszon korábban mentett témát",
        customise: "Egyéni beállítások az értesítések testreszabásához",
        test: "Teszt értesítés megjelenítése, beleértve az egyéni beállításokat",
        kofi: "Támogatás a Ko-Fi-n keresztül!",
        discord: "Csatlakozzon a Discordhoz!",
        github: "Probléma jelentése",
        lang: "Válassza ki az alkalmazásban használt felhasználói felület nyelvét",
        steamlang: `Próbálj meg betölteni fordításokat a Steam alkalmazásfájljaiból, hogy az eredményinformációkat a felhasználó által választott nyelven jelenítse meg a Steam kliensben<br><br><span class="ttdesc">Ez a lehetőség megpróbálja megtalálni a fordításokat egy JSON fájlban, amely a Steam alkalmazásadataiban van tárolva. Ha nem található fordítás a jelenlegi eredményhez, akkor a Steamworks-ból lekért eredményinformációk jelennek meg helyette.</span>`,
        maxsteamlangretries: `Az érvényes fordítások keresési kísérleteinek száma (100 ms-onként) az aktuális eredményhez<br><br><span class="ttdesc">A Steam jelenleg csak egy kis mennyiségű eredményadatot tárol minden játékhoz tartozó JSON fájlban. Minden olyan eredményt, amely nem található ebben a fájlban, hozzáadnak az eredmény feloldása után.<br><br>Mivel az új adatok hozzáadása időt vehet igénybe, ennek az értéknek a növelése növeli annak esélyét, hogy megtalálhatók a fordítási adatok a jelenlegi eredményhez, de ez késleltetheti az értesítés megjelenését a képernyőn a beállítás szerint kiszámított idővel.<br><br>Ha nem találhatók érvényes fordítási adatok a jelenlegi eredményhez, a fordítás visszaáll a Steamworks-ben megadott nyelvre.</span>`,
        desktop: "Parancsikon váltása az asztalon az alkalmazás futtatásához",
        startwin: "Az Steam Achievement Notifier automatikus indítása bejelentkezés után",
        startmin: "Indítás után elrejti az alkalmazás felhasználói felületét, amíg a rendszertálcáról meg nem nyitják",
        nohwa: `Hardvergyorsítás letiltása, ami javíthatja a teljesítményt az alacsonyabb erőforrású rendszereken vagy olyan rendszereken, amelyek nem rendelkeznek dedikált GPU-val<br><br><span class="ttdesc">Az alkalmazás újraindul ennek az opciónak az engedélyezése vagy letiltása után</span>`,
        litemode: "Az összes interaktív felhasználói felületi elem letiltása, miközben csak korlátozott alkalmazásfunkciókat biztosít a rendszerikonon keresztül. Javíthatja az alkalmazás által felhasznált erőforrásokat",
        rarity: `Az az arányszám, amelynél ritka eredmény értesítések jelennek meg.<br><br>Bármely eredmény, amelynek feloldási százaléka meghaladja ezt az értéket, Fő értesítésként jelenik meg<br><br><span class="ttdesc">Ha a <span class="hl">Trófea mód</span> engedélyezve van, bármely eredmény, amelynek feloldási százaléka meghaladja ezt az értéket, ezüst értesítésként jelenik meg</span>`,
        semirarity: `Az az arányszám, amelynél az "Ezüst" értesítési elemek megjelennek (pl. <span class="hl">Ritkasági jelvények</span>, <span class="hl">Díszítések</span> stb.).<br><br>Bármely eredmény, amelynek feloldási százaléka ennél az értéknél alacsonyabb (vagy egyenlő) és a <span class="hl">Ritkasági százalék</span> értékénél magasabb, az "Ezüst" ritkaságokra konfigurált értesítési elemeket jeleníti meg.<br><br>Bármely eredmény, amelynek feloldási százaléka meghaladja ezt az értéket, a "Bronz" ritkaságokra konfigurált értesítési elemeket jeleníti meg<br><br><span class="ttdesc">Ha a <span class="hl">Trófea mód</span> engedélyezve van, bármely eredmény, amelynek feloldási százaléka meghaladja ezt az értéket, bronz értesítésként jelenik meg</span>`,
        showpercent: "Az eredmény feloldási százalékának megjelenítése az értesítésben a kiválasztott típusokhoz",
        soundonly: "Értesítések letiltása, csak a Customiser által beállított hangok lejátszása",
        extwin: "Hozzon létre egy ablakot, amely megkettőzi a képernyőn jelenleg megjelenő értesítéseket. Ez az ablak ezután hozzáadható ablakrögzítési forrásként a közvetítőszoftverekhez, például az OBS-hez",
        extwinframerate: "Cél képfrissítési sebesség beállítása a stream értesítésekhez",
        extwinshow: `A Közvetítési Értesítések ablak láthatóságának váltása<br><br><span class="ttdesc">Amikor a tálcán van a fókuszban, tartsa lenyomva a <code class="ttcode">Ctrl</code> billentyűt az ablak aktuális helyének megjelenítéséhez</span>`,
        audiosrc: "Hangforrás kiválasztása (vagy letiltása), amelyet az alkalmazás generál",
        nowtracking: "Értesítés megjelenítése arról, hogy egy futó játék eredményeit követi",
        nowtrackingscale: `Állítsa be a követési értesítés méretét`,
        nowtrackingpos: `Állítsa be a követési értesítés pozícióját`,
        shortcuts: "Teszt értesítés kiváltása billentyűparancs segítségével. A gyorsbillentyűk testreszabhatók minden értesítéstípushoz",
        noiconcache: `Kikapcsolja az ikon gyorsítótárazást a játékok indításakor.<br><br><span class="ttdesc">Ez jelentősen javíthatja az alkalmazás teljesítményét a játékok indításakor, és megoldhatja a követési problémákat olyan játékoknál, amelyek nagyszámú teljesítményt tartalmaznak. Az ikon gyorsítótárazás kikapcsolása azonban ritka esetekben hiányzó teljesítmény ikonokhoz vezethet az értesítéseknél</span>`,
        steamss: "Steam képernyőkép készítése, amikor egy eredmény feloldódik",
        screenshots: "Válassza ki a további média típusát, amikor egy értesítés megjelenik",
        monitors: "A monitor, amelyet a képernyőkép készítésekor rögzít",
        hdrmode: `Képernyőképek készítése olyan módszerrel, amely kompatibilis a HDR (High Dynamic Range) monitorokkal`,
        ovpos: "Az értesítés átfedésének pozíciója a képernyőképen",
        ovmatch: "A Customiserben beállított képernyőpozíció igazítása ehhez az értesítéstípushoz",
        ovpath: "Az ezen opció által generált képernyőképek mentési helye",
        ssdelay: "Késleltetés hozzáadása az értesítés megjelenése és a képernyőkép készítése között",
        sspreview: "Előnézet megjelenítése, hogyan fog kinézni a képernyőkép mentésekor",
        noanim: "Az alkalmazás ablakanimációinak és átmeneti effektjeinek letiltása",
        noupdatedialog: `Megakadályozza, hogy az <span class="hl">Elérhető frissítés</span> párbeszédpanel automatikusan megjelenjen és előtérbe kerüljön<br><br><span class="ttdesc">A párbeszédpanel továbbra is elérhető marad a frissítés gombra kattintva, ha az elérhető</span>`,
        nvda: "Engedélyezze az eredmény információinak másolását a vágólapra, amikor egy eredmény feloldódik, hogy képernyőolvasó szoftverek, például az NVDA által olvasható legyen",
        tooltips: "Eszközleírások megjelenítése bizonyos felhasználói felületi elemek fölé húzva",
        colorprofile: `Kényszeríti az összes alkalmazásablakot, hogy a kiválasztott színprofilt használja<br><br><span class="ttdesc">Újraindítást igényel</span>`,
        pollrate: `Állítsa be a teljesítményadatok frissítési intervallumát játék közben<br><br><span class="ttdesc">A teljesítmény növekedhet/csökkenhet az érték vagy a rendszer hardverének függvényében. A magasabb értékek általában alacsonyabb rendszerterhelést eredményeznek, de késleltethetik az értesítéseket</span>`,
        initdelay: `Állítsa be a késleltetést a jelenlegi <span class="hl">AppID</span> érzékelése és a folyamat-/teljesítménykövetés kezdete között<br><br><span class="ttdesc">Ennek az értéknek a növelése megakadályozhatja azokat a helyzeteket, amikor a Steam nem tudja elindítani a jelenlegi játékot (a Steamworks alkalmazás inicializálása miatt, mielőtt a játék elindulna)</span><br><br><span class="ttdesc">Alternatívaként ennek az értéknek a növelése használható arra is, hogy kijavítsuk a játék előtti indítófolyamatok hibás érzékelését</span>`,
        releasedelay: `Állítsa be, mennyi ideig várjon a háttérben futó Worker folyamat az újraindítás előtt, miután az aktuális játék release megtörtént. Hatással van az automatikus folyamatkövetésre és az Automatikus játék release funkcióra is<br><br><span class="ttdesc">Hosszabb időtartamot biztosít ahhoz, hogy a Steamworks teljesen leváljon az alkalmazásról. Az érték növelése megelőzheti a szokatlan viselkedést, például egy korábban bezárt játék követését</span>`,
        maxretries: `Állítsa be a maximális újrapróbálkozások számát egy futó folyamat észlelt AppID-hez való társításához. Hatással van az automatikus folyamatkövetésre és az Automatikus játék release funkcióra is<br><br><span class="ttdesc">Az újrapróbálkozások másodpercenként történnek. Ha ennyi próbálkozás után sem sikerül a futó folyamatot az aktuális AppID-hez kapcsolni, érvénytelen folyamat kerül visszaadásra. Ilyen esetekben a játékot manuálisan kell felszabadítani a System Tray > Beállítások > Játék felszabadítása útvonalon</span>`,
        debug: "Nyissa meg a Hibakereső panelt, amely részletes folyamatkövetési információkat jelenít meg",
        userust: "Használjon alternatív, Rust alapú funkciót annak ellenőrzésére, hogy a követett játékfolyamatok jelenleg futnak-e a rendszeren. Ha nincs bejelölve, akkor a NodeJS alapú alapértelmezett folyamatellenőrzés lesz helyette használva.",
        notifydebug: "DevTools ablak létrehozása minden értesítéshez. Hasznos hibakereséshez/hibaelhárításhoz",
        workerdebug: "DevTools ablak létrehozása a Worker folyamathoz. Hasznos a játékfigyelési problémák hibakereséséhez/elhárításához",
        usecustomfiles: "Engedélyezze az értesítések számára a felhasználó által testreszabható fájlok betöltését. A rendszeres felhasználók számára óvatosság javasolt",
        showcustomfiles: "Nyissa meg az egyéni fájlok helyét",
        log: "Az alkalmazás naplóablakának megnyitása, amely információkat jelenít meg a folyamat tevékenységéről, figyelmeztetésekről és hibákról",
        reset: "Az alkalmazás összes konfigurációs adata törlése és újraindítása",
        playback: "Az értesítés előnézetének animációjának szüneteltetése/folytatása",
        replay: "Az értesítés előnézetének animációjának újraindítása",
        preset: "Válassza ki az értesítés előre beállított konfigurációját a testreszabáshoz",
        iconanim: "Ritka ikon keretének és animációjának váltása",
        alldetails: "Az értesítésben rejtett alapértelmezés szerinti összes szöveges elem megjelenítése",
        usepercent: "A teljesítmény feloldási százalékának megjelenítése az XP/S érték helyett",
        displaytime: "Állítsa be az értesítés megjelenítési idejét másodpercben",
        scale: "Növelje vagy csökkentse az értesítés méretét",
        customtext: "Egyéni üzenet beállítása az értesítésben való megjelenítéshez",
        usegametitle: "A jelenlegi játék címének megjelenítése az értesítésben",
        customfont: "Egyéni betűtípus betöltése az értesítésben való használathoz",
        soundmode: "Válasszon egyetlen hangfájlt vagy véletlenszerűen kiválasztott hangfájlt egy mappából, amikor egy értesítés történik",
        soundfile: "Válasszon egy hangfájlt, amelyet lejátszanak, amikor egy értesítés történik",
        sounddir: "Válasszon egy mappát, amelyből véletlenszerűen kiválasztanak egy hangfájlt, amikor egy értesítés történik",
        volume: "Állítsa be a hangfájl lejátszásának hangerősségét",
        preview: "Az kiválasztott hangfájl vagy egy véletlenszerűen kiválasztott hangfájl előnézetének megtekintése a mappából",
        bgstyle: "Válassza ki az értesítés háttérstílusát",
        gradientangle: "Állítsa be a gradiens szögét",
        bgimg: "Képfájl betöltése az értesítés háttérképeként",
        bgachicon: "Használja a feloldott siker ikonját az értesítés háttérjeként",
        bgimgbrightness: "Állítsa be a kép fényességét, amelyet értesítési háttérképként használnak",
        brightness: "Állítsa be a játék művészeti elemeként használt kép fényerejét az értesítés háttérképeként",
        blur: "Állítsa be a háttér értesítésre történő elmosódásának szintjét",
        roundness: "Állítsa be az értesítés élek kerekességét",
        fontsize: "Állítsa be a betűméretet az értesítésben",
        opacity: "Állítsa be az értesítés átlátszóságát",
        bgonly: "Csak az értesítés háttérképének átlátszóságát állítsa be, a többi elemet teljes átlátszóságon tartva",
        glow: "Engedélyezzen egy fényeffektust, amely körbeveszi az értesítést",
        glowcolor: "Állítsa be a fényeffektus színét",
        glowsize: "Állítsa be a fényeffektus méretét",
        glowx: "Állítsa be a fénylő hatás vízszintes eltolását",
        glowy: "Állítsa be a fénylő hatás függőleges eltolását",
        glowopacity: "Állítsa be a fénylő hatás átlátszatlanságát",
        glowanim: "Válasszon előre meghatározott animációt, amelyet alkalmazni kell a fényeffektusra",
        glowspeed: "Állítsa be a fényeffektusra alkalmazott animáció sebességét",
        glowrarity: "A fényhatás színének megváltoztatása az elért ritkaság alapján",
        glowcolorbronze: "A ragyogás színe, amely megjelenik, ha a feloldási százalék > $semirarity",
        glowcolorsilver: "A ragyogás színe, amely megjelenik, ha a feloldási százalék < $semirarity és > $rarity",
        glowcolorgold: "A ragyogás színe, amely megjelenik, ha a feloldási százalék < $rarity",
        mask: "Engedélyezze az értesítés egyes részeinek maszkolását egyéni képpel",
        maskimg: `Töltsön be egy képfájlt, amelyet maszkként szeretne használni<br><br><span class="ttdesc">A CSS-ben a <code class="ttcode">mask-mode: alpha</code> ellentétesen működik a megszokott módon - a képfájl átlátszó területei el lesznek rejtve, és a fekete/szürke területek engedélyezik a alatti elemek láthatóságát</span>`,
        useoutline: "Kontúr megjelenítése az értesítés körül",
        outline: "Válassza ki a kontúr típusát, amely megjelenik az értesítés körül",
        outlinecolor: "Állítsa be a kontúr színét az értesítés körül",
        outlinewidth: "Állítsa be a kontúr szélességét az értesítés körül",
        primarycolor: "Állítsa be az értesítés elsődleges színét",
        secondarycolor: "Állítsa be az értesítés másodlagos színét",
        tertiarycolor: "Állítsa be az értesítés harmadlagos színét",
        fontcolor: "Állítsa be a betűszínét az értesítésben megjelenített összes szövegnek",
        fontoutline: "Keret hozzáadása az értesítésben megjelenített összes szöveghez",
        fontoutlinecolor: "Állítsa be a szöveg keretének színét",
        fontoutlinescale: "A szöveg kontúrvastagságának beállítása",
        fontshadow: "Árnyék hozzáadása az értesítésben megjelenített összes szöveghez",
        fontshadowcolor: "Állítsa be a szöveg árnyékának színét",
        fontshadowscale: "A szöveg árnyékának vastagságának beállítása",
        fontshadowx: "Elmozdítja a szöveg árnyékának pozícióját vízszintesen",
        fontshadowy: "Elmozdítja a szöveg árnyékának pozícióját függőlegesen",
        iconroundness: "Állítsa be az értesítésben megjelenített eredmény/játék ikon kerekességét",
        plat: "Képfájl betöltése a 100% ikonként való használathoz",
        usegameicon: "Az elérhető jutalom ikonját cseréld le a jelenlegi játék ikonjára",
        gameicontype: `Válaszd ki, melyik típusú képet jelenítse meg játék ikonként`,
        usecustomimgicon: "Az elérhető jutalom ikonját cseréld le egy egyéni képfájlra",
        customimgicon: "Tölts fel egy képfájlt, amely egyéni ikonként lesz használva",
        showhiddenicon: "Egy kép megjelenítése, ami jelzi, hogy a teljesítmény rejtett az értesítésben",
        hiddenicon: "Egy képfájl betöltése a rejtett teljesítmény ikonjának helyettesítéséhez",
        logo: "Képfájl betöltése a Logó ikon cseréjéhez",
        decoration: "Képfájl betöltése a Díszítés ikon cseréjéhez",
        showdecoration: "A Díszítés ikon láthatóságának váltása",
        replacelogo: "Cserélje le a logó ikont az értesítésben a kiválasztott dísszel",
        pos: "Állítsa be az értesítés képernyőn való pozícióját",
        usecustompos: "Egyéni pozícionálás engedélyezése az értesítéshez",
        setcustompos: "Egyéni pozíció beállítása az értesítéshez",
        copycustompos: "Az egyéni pozíció alkalmazása az összes többi értesítéstípusra",
        resetcustompos: "Az értesítés pozíciójának visszaállítása az alapértelmezett egyéni pozícióra",
        updatetheme: "Frissítsd a jelenlegi témát a kiválasztott testreszabási lehetőségekkel",
        savetheme: "Mentse el az összes konfigurált testreszabási beállítást új témaként",
        visibilitybtn: "Az elem láthatóságának váltása az egyéni előnézetekben és tesztértesítésekben",
        delbtn: "Az elem visszaállítása az alapértelmezett értékre",
        imgpath: "Az a hely, ahol ezen beállítás által generált értesítési képek lesznek mentve",
        ssenabled: "Média generálás engedélyezése vagy letiltása erre a típusra",
        checkforupdates: `Ellenőrizze, hogy megjelent-e új verzió az alkalmazásból a GitHubon. Ha elérhető frissítés van, az automatikusan letöltésre és telepítésre kerül, miután megerősítette a <span class="hl">Frissítés elérhető</span> párbeszédablakban`,
        linkedgames: `A <span class="hl">SANWatcher</span> megkerülése meghatározott Steam játékok esetén<br><br><span class="ttdesc">Ezt a lehetőséget csak nagyon speciális esetekben érdemes használni. Normál körülmények között a felhasználóknak nincs szükségük erre a beállításra!</span>`,
        autoreleasegames: `Az <span class="hl">automatikus folyamatkövetés</span> megkerülése meghatározott Steam játékok esetén<br><br><span class="ttdesc">Ezt a lehetőséget csak nagyon speciális esetekben érdemes használni. Normál körülmények között a felhasználóknak nincs szükségük erre a beállításra!</span>`,
        exclusionlist: `Akadályozd meg a Steam-játékok bizonyos teljesítményeinek követését az alkalmazásban<br><br><span class="ttdesc">Ezt a lehetőséget csak nagyon speciális esetekben kellene használni. A felhasználóknak normál körülmények között nem kellene ezt a lehetőséget használniuk!</span>`,
        inclusionlist: `Megakadályozza, hogy az alkalmazás minden Steam-játékot kövessen, kivéve ha külön meg van adva<br><br><span class="ttdesc">Ezt az opciót csak nagyon speciális esetekben érdemes használni. Normál körülmények között a felhasználóknak nem kellene ezt választaniuk!</span>`,
        ovx: "A képernyőképen megjelenő értesítés vízszintes eltolása",
        ovy: "A képernyőképen megjelenő értesítés függőleges eltolása",
        importtheme: `Testreszabások importálása egy felhasználó által létrehozott <span class="hl">témafájl</span> segítségével`,
        exporttheme: `Az aktuálisan kiválasztott <span class="hl">téma</span> exportálása megosztáshoz<br><br><span class="ttdesc">Az exportálás előtt győződjön meg róla, hogy az kívánt <span class="hl">téma</span> van kiválasztva (a <span class="hl">Téma kiválasztása</span> menüponton keresztül). Továbbá, győződjön meg róla, hogy a testreszabások el vannak mentve az kiválasztott <span class="hl">témában</span> (a <span class="hl">Téma mentése</span> menüponton keresztül)<br><br><u>Bármilyen testreszabás, amely még nem lett elmentve az aktuális <span class="hl">témába</span>, nem fog exportálódni!</u></span>`,
        webhooks: "Használjon Webhook URL-t, hogy egy Discord szerveren tegyen közzé egy üzenetet, amikor egy teljesítmény feloldódik",
        webhookmain: `Kapcsoló, hogy teljesítményinformációk kerüljenek-e elküldésre egy Discord szerverre, amikor egy $main teljesítmény feloldódik`,
        webhooksemi: `Kapcsoló, hogy teljesítményinformációk kerüljenek-e elküldésre egy Discord szerverre, amikor egy $semi teljesítmény feloldódik`,
        webhookrare: "Kapcsoló, hogy teljesítményinformációk kerüljenek-e elküldésre egy Discord szerverre, amikor egy $rare teljesítmény feloldódik",
        webhookplat: "Kapcsoló, hogy teljesítményinformációk kerüljenek-e elküldésre egy Discord szerverre, amikor egy $plat teljesítmény feloldódik",
        webhooktest: "Váltás, hogy küldjön-e teszt információkat egy Discord szerverre, amikor bármilyen típusú teszt értesítés aktiválódik",
        webhookurl: `Állítsa be a <span class="hl">Webhook URL</span> a kívánt Discord szerverhez<br><br><span class="ttdesc">Egy <span class="hl">Webhook URL</span> arra szolgál, hogy közzétegyen egy üzenetet egy Discord szerveren/csatornán felhasználó vagy alkalmazás nevében. Új Webhook beállításához egy Discord szerveren, a felhasználónak szerepet kell vállalnia a kívánt szerveren, amely engedélyezi a Webhook-ok létrehozását<br><br><u>Webhook URL szükséges ezen opció használatához</u><br><br>További információkért nézze meg a Discord hivatalos dokumentációját</span>`,
        webhookspoilers: `Spoiler címke hozzáadása a "Rejtett" eredményekhez, amikor azok a Discordra kerülnek`,
        webhookappid: "A jelenlegi játék AppID-jának megjelenítése a webhook beágyazott láblécében",
        unlockmsg: "Állítsa be a feloldó üzenet/személyre szabott szöveg helyét a $type-ban",
        title: "Állítsa be a teljesítmény címének helyét a $type-ban",
        desc: "Állítsa be a teljesítmény leírásának helyét a $type-ban",
        notification: "értesítés",
        screenshot: "képernyőkép",
        percentpos: "Állítsa be a ritkasági százalék helyét a $type-ban",
        sspercentpos: "Állítsa be a ritkasági százalék helyét a $type-ban",
        hiddeniconpos: "Állítsa be a rejtett/titkos teljesítmény ikon helyét a $type-ban",
        sshiddeniconpos: "Állítsa be a rejtett/titkos teljesítmény ikon helyét a $type-ban",
        decorationpos: "Állítsa be a díszítő elem helyét a $type-ban",
        ssdecorationpos: "Állítsa be a díszítő elem helyét a $type-ban",
        percentbadge: "A zárolási százalék megjelenítése egy jelvényben, amely a teljesítmény/játék ikonja fölött helyezkedik el",
        sspercentbadge: "A zárolási százalék megjelenítése egy jelvényben, amely a teljesítmény/játék ikonja fölött helyezkedik el",
        percentbadgepos: "A jelvény pozíciójának beállítása",
        sspercentbadgepos: "A jelvény pozíciójának beállítása",
        percentbadgecolor: "A jelvény háttérszínének beállítása",
        sspercentbadgecolor: "A jelvény háttérszínének beállítása",
        percentbadgefontcolor: "Állítsa be a jelvény betűszínét",
        sspercentbadgefontcolor: "Állítsa be a jelvény betűszínét",
        percentbadgefontsize: "A jelvény méretének beállítása",
        sspercentbadgefontsize: "A jelvény méretének beállítása",
        percentbadgeroundness: "A jelvény lekerekítettségének beállítása",
        sspercentbadgeroundness: "A jelvény lekerekítettségének beállítása",
        percentbadgex: "A jelvény elem vízszintes eltolása",
        sspercentbadgex: "A jelvény elem vízszintes eltolása",
        percentbadgey: "A jelvény elem függőleges eltolása",
        sspercentbadgey: "A jelvény elem függőleges eltolása",
        percentbadgeimg: "Raritás-alapú ikon megjelenítése jelvény elemként",
        sspercentbadgeimg: "Raritás-alapú ikon megjelenítése jelvény elemként",
        percentbadgeimgbronze: "A jelvény ikon, amely megjelenik, ha a feloldási százalék > $semirarity",
        sspercentbadgeimgbronze: "A jelvény ikon, amely megjelenik, ha a feloldási százalék > $semirarity",
        percentbadgeimgsilver: "A jelvény ikon, amely megjelenik, ha a feloldási százalék < $semirarity és > $rarity",
        sspercentbadgeimgsilver: "A jelvény ikon, amely megjelenik, ha a feloldási százalék < $semirarity és > $rarity",
        percentbadgeimggold: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < $rarity",
        sspercentbadgeimggold: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < $rarity",
        percentbadgeimgplat: "A jelvény ikonja, amely megjelenik, amikor az összes teljesítmény fel van oldva",
        sspercentbadgeimgplat: "A jelvény ikonja, amely megjelenik, amikor az összes teljesítmény fel van oldva",
        resetpbimgs: "Az összes jelvény ikont alapértelmezett értékre állítja vissza",
        elemsmatch: `A figyelmeztető elemek beállításainak egyeztetése a testreszabóban ennek a figyelmeztetési típusnak<br><br><span class="ttdesc">Néhány figyelmeztetési előre beállított beállítás nem tud teljesen megfelelni a testreszabó beállításainak, a képernyőn megjelenő és a képernyőképen alapuló figyelmeztetési elrendezések közötti eltérések miatt</span>`,
        themeswitch: `Automatikusan váltson bármely mentett <span class="hl">Témára</span>, amikor egy adott játékot észlel`,
        userthemesync: `Szinkronizálja a testreszabásokat a kiválasztott <span class="hl">Témában</span> minden más figyelmeztetési típushoz`,
        showsystrayopts: `Az összes lehetőség megjelenítése, amely általában a <span class="hl">Rendszer tálca</span> > <span class="hl">Opciók</span> alatt található a <span class="hl">Beállítások</span> > <span class="hl">Vegyesek</span> részen`,
        releaseshortcut: "A jelenleg nyomon követett játék felszabadítása a megadott billentyűparanccsal",
        themeselect: "Válassz egy korábban mentett témát",
        statwin: `Konfigurálható eredmény statisztikák megjelenítése az aktuális játékhoz egy külön ablakban<br><br><span class="ttdesc">Amikor a <span class="hl">Eredmények fordítása Steam nyelvre</span> opción keresztül használod, egyes fordítások csak akkor lesznek elérhetők, ha a megfelelő eredmény feloldódik</span>`,
        statwinaot: `Állítsa be az Elért statisztikák ablakát "Mindig a tetején" módba, lehetővé téve az ablak megjelenítését a játék ablakán felül<br><br><span class="ttdesc">Ha engedélyezve van, az Elért statisztikák ablak már nem regisztrálja a felhasználói interakciókat, például a "kattintás" eseményeket. Az ablak interakcióinak újbóli engedélyezéséhez ezt az opciót le kell tiltani</span>`,
        statwinshortcut: "A Teljesítmény Statisztikák Átfedésének váltása a megadott billentyűparancs használatával",
        ssdisplay: "A készített képernyőkép előnézete az értesítésben",
        iconscale: "A siker ikon méretének növelése vagy csökkentése",
        showiconborder: "Kép megjelenítése a teljesítményikon körüli keretként",
        iconborderimg: "Kép fájl betöltése, amely a teljesítményikon körüli keretként használható",
        iconborderpos: "Állítsa be, hogy az ikon keret képének az ikon előtt vagy mögött kell megjelennie",
        iconborderscale: "Növelje vagy csökkentse az ikon keretének méretét az értesítésen belül",
        iconborderx: "Növelje vagy csökkentse az ikon keretének vízszintes eltolását az értesítésen belül",
        iconbordery: "Növelje vagy csökkentse az ikon keretének függőleges eltolását az értesítésen belül",
        iconborderrarity: "Módosítja az ikon körvonalának képét az elért siker ritkasága alapján",
        iconborderimgbronze: "Az ikonkeret képe, amely megjelenik, ha a feloldási százalék > $semirarity",
        iconborderimgsilver: "Az ikonkeret képe, amely megjelenik, ha a feloldási százalék < $semirarity és > $rarity",
        iconshadowcolor: "Állítsa be a siker ikont körülvevő árnyék effektus színét, amikor ritka siker oldódik fel",
        iconanimcolor: "Állítsa be az animációs effektus színét a siker ikon mögött, amikor ritka siker oldódik fel",
        logoscale: "A logó elem méretének növelése vagy csökkentése az értesítésen belül",
        decorationscale: "A díszítő elem méretének növelése vagy csökkentése az értesítésen belül",
        usecustomfontsizes: `A szöveges elemek méretének növelése vagy csökkentése egyedileg az értesítésben<br><br><span class="ttdesc">Nem garantálható az értesítés eredeti elrendezésének megőrzése, ha egyedi betűméret értékeket módosítanak</span>`,
        unlockmsgfontsize: "A feloldó üzenet szöveges elemének méretének növelése vagy csökkentése",
        titlefontsize: "A siker címének szöveges elemének méretének növelése vagy csökkentése",
        descfontsize: "A siker leírásának szöveges elemének méretének növelése vagy csökkentése",
        webhookembedcolormain: "Állítsa be a webhook beágyazásban használt színt, amikor egy $main teljesítmény feloldódik",
        webhookembedcolorsemi: "Állítsa be a webhook beágyazásban használt színt, amikor egy $semi teljesítmény feloldódik",
        webhookembedcolorrare: "Állítsa be a webhook beágyazásban használt színt, amikor egy $rare teljesítmény feloldódik",
        webhookembedcolorplat: "Állítsa be a webhook beágyazásban használt színt, amikor egy $plat teljesítmény feloldódik",
        raemus: "Értesítések megjelenítése, amikor játékokat észlelnek támogatott emulátorokban",
        rauser: "A Retro Achievements felhasználónevet beállítani az elért eredmények nyomon követéséhez",
        rakey: `Állítsa be a Web API kulcsot, amely az autentikációhoz használható a Retro Achievements API-val<br><br><span class="ttdesc">Egy Web API kulcs másolható vagy újragenerálható úgy, hogy bejelentkezik a Retro Achievements weboldalra, és átmegy a <span class="hl">Beállítások > Kulcsok > Web API kulcs</span> menüpontra<br><br>🔒 A megadott kulcs titkosítva lesz, mielőtt helyben tárolódna a rendszeren (ha az aktuális operációs rendszer támogatja a titkosítást)</span>`,
        rapercenttype: "Beállíthatja, hogy a Hardcore vagy Softcore eredmények százaléka jelenjen meg az értesítésekben",
        retroarch: `Teljesítmények értesítéseinek megjelenítése RetroArch-ban emulált játékokhoz<br><br><span class="ttdesc"><span class="hl">RetroArch > Beállítások > Naplózás</span> beállításait az alábbi módon kell konfigurálni:<br><br><ul><li><span class="hllb">Naplózási Részletesség</span>: <span class="hlgreen">BE</span></li><li><span class="hllb">Előlap Naplózási Szint</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Naplózás Fájlba</span>: <span class="hlgreen">BE</span></li><li><span class="hllb">Időbélyeg a Napló Fájlokhoz</span>: <span class="hlred">KI</span></li></ul></span>`,
        dolphin: `Teljesítmények értesítéseinek megjelenítése Dolphin-ban emulált játékokhoz<br><br><span class="ttdesc"><span class="hl">Dolphin > Nézet > Naplózási Beállítások Megjelenítése</span> beállításait az alábbi módon kell konfigurálni:<br><br><ul><li><span class="hllb">Részletesség</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Napló Kimenetek</span> > <span class="hlgreen">Írás Fájlba</span></li><li><span class="hllb">Napló Típusok</span> > <span class="hlgreen">Teljesítmények (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Teljesítmények értesítéseinek megjelenítése PCSX2-ban emulált játékokhoz<br><br><span class="ttdesc"><span class="hl">PCSX2 > Eszközök > Fájl naplózás engedélyezése</span> engedélyezve kell, hogy legyen</span>`,
        duckstation: `Retro Achievements értesítések megjelenítése Duckstation segítségével emulált játékokhoz<br><br><span class="ttdesc">❗ A <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> fájlt le kell tölteni és áthelyezni a <span class="hl">Duckstation telepítési könyvtárába</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Beállítások > Eredmények > RAIntegration (Csak fejlesztőknek)</span> engedélyezve kell lennie</span>`,
        ppsspp: `Retro Achievements értesítések megjelenítése a PPSSPP-n keresztül emulált játékokhoz<br><br><span class="ttdesc"><span class="hl">Beállítások > Eszközök > Fejlesztői eszközök > Általános > Naplózás fájlba</span> engedélyezve kell legyen, és a következő beállításokkal kell konfigurálni:<br><br><ul><li><span class="hllb">Teljesítmények</span>: <span class="hlgreen">Információ</span></span>`,
        retroarchpath: `Állítsd be a RetroArch <span class="hl">"retroarch.log"</span> napló fájl elérési útját<br><br><span class="ttdesc">Alapértelmezett telepítési beállításokkal a <span class="hl">"retroarch.log"</span> itt található: <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Állítsd be a Dolphin <span class="hl">"dolphin.log"</span> napló fájl elérési útját<br><br><span class="ttdesc">Alapértelmezett telepítési beállításokkal a <span class="hl">"dolphin.log"</span> az alábbi helyek egyikén található:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Állítsd be a PCSX2 <span class="hl">"emulog.txt"</span> napló fájl elérési útját<br><br><span class="ttdesc">Alapértelmezett telepítési beállításokkal a <span class="hl">"emulog.txt"</span> itt található: <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Állítsa be a <span class="hl">"RALog.txt"</span> fájl elérési útját a Duckstationhoz<br><br><span class="ttdesc">Alapértelmezett telepítési beállításokkal a <span class="hl">"RALog.txt"</span> fájl a következő helyen található: <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Adja meg a PPSSPP <span class="hl">"log.txt"</span> naplófájl elérési útját<br><br><span class="ttdesc">Alapértelmezett telepítési beállítások esetén a <span class="hl">"log.txt"</span> fájl itt található: <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Állítsa be a szövegelemek színét az értesítésen belül egyedileg",
        unlockmsgfontcolor: "Állítsa be az első szövegelem színét",
        titlefontcolor: "Állítsa be a második szövegelem színét",
        descfontcolor: "Állítsa be a harmadik szövegelem színét",
        exportachdata: `Teljesítményadatok exportálása JSON fájlba, amikor egy teljesítmény feloldódik<br><br><span class="ttdesc">Ha engedélyezve van, az <span class="ttcode">achdata.json</span> a következő helyre lesz exportálva:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Beállítja a vertikális távolságot a szövegelemek között az értesítésben",
        ssmode: `Beállítja, hogy a képernyőkép teljes képernyőt vagy csak az aktuális játékablakot<span style="color: red;">*</span> rögzítse<br><br><span class="ttdesc">Ha az aktuális játék <span class="hl">végrehajtható fájlja</span> nem található (<i>akár <span class="hl">automatikus folyamatfigyeléssel</span>, akár <span class="hl">Linked Game</span> hozzáadásával</i>), akkor ez az opció alapértelmezés szerint "Képernyő" módra vált</span>`,
        replaynotify: "Ismételd meg az utolsó teljesítmény értesítést",
        replaynotifyshortcut: "Ismételd meg az utolsó teljesítmény értesítést a megadott gyorsbillentyűvel",
        replaynotifyempty: `<br><br><span class="ttdesc">Az ismétlési sor üres. Nyiss meg egy teljesítményt az értesítés ismétléséhez</span>`,
        customtrigger: "Egy billentyű/kombináció szimulálása achievement feloldásakor. Használható külső alkalmazásokban regisztrált billentyűparancsok indítására",
        customtriggershortcut: `A megadott billentyű/kombináció aktiválása achievement feloldásakor<br><br><span class="ttdesc">1–3 billentyűt támogat gyorsbillentyűként. Kevesebb mint 3 billentyűből álló kombináció esetén nyomja meg a kívánt billentyűket, majd várja meg az időzítő (5 mp) lejártát</span>`,
        customtriggerdelay: "A megadott egyedi trigger billentyű/kombináció késleltetése",
        customtriggerusedisplaytime: `A megadott egyedi trigger billentyű/kombináció késleltetése az aktuális értesítéstípus Megjelenítési Idő értéke alapján`,
        trophymode: "Cserélje le a Fő/Ritka/100%-os értesítési típusokat Bronz/Ezüst/Arany/Platina típusokra",
        lognum: `A törlés előtt megőrzött korábbi naplófájlok száma. Az alkalmazás minden indításakor új naplófájl jön létre<br><br><span class="ttdesc">Ha 0-ra van állítva, az összes korábbi naplófájl törlődik kilépéskor</span>`, 
        detectedappid: `A jelenleg észlelt játék <span class="hl">AppID</span>-jének használata`,
        listmode: `A <span class="hl">Kizárási lista</span>/<span class="hl">Belefoglalási lista</span> működésének beállítása<br><br><span class="ttdesc">• <span class="hl">Kizárás</span>: Csak a listában szereplő játékokat hagyja figyelmen kívül<br>• <span class="hl">Belefoglalás</span>: Minden játékot figyelmen kívül hagy, kivéve a listában szereplőket</span>`,
        notifymax: `A képernyőn egyszerre megjelenő értesítések maximális számának beállítása<br><br><span class="ttdesc">A több egyidejű értesítés több erőforrást igényelhet, és ronthatja a teljesítményt</span>`,
        notifyspace: "Az egyszerre megjelenő értesítések közötti távolság beállítása",
        audiocooldown: `Annak az időnek a beállítása, amennyit a következő értesítéseknek várniuk kell, mielőtt új hang lejátszható<br><br><span class="ttdesc">A hangot nem érinti, ha a Maximális értesítések értéke 1</span>`,
        rauseemudir: "A RetroAchievements által feloldott képernyőképek/értesítési képek mentése egy almappába az aktuális emulátor számára a megadott Képernyőkép/Kép elérési út könyvtárán belül",
        ssext: "Állítsd be a képernyőképek fájlformátumát, amelyeket a Képernyőkép értesítési átfedéssel opció hoz létre",
        notify1line: `Korlátozza az összes értesítésben megjelenített szövegsorok számát 1-re<br><br><span class="ttdesc">Azok a szövegek, amelyek nem férnek el egy sorban, "..." jellel lesznek levágva</span>`,
        copytheme: "A kiválasztott téma másolása egy másik értesítési típushoz",
        ssaddtosteam: "A generált média automatikus hozzáadása az aktuális játék Felvételeihez és Képernyőképeihez a Steamen",
        appdatadir: "Nyissa meg az alkalmazás AppData mappájának helyét",
        backup: "Készítsen biztonsági másolatot az alkalmazás AppData mappájának tartalmáról egy kiválasztott helyre, amely a jelenlegi állapot visszaállítási pontjaként szolgál",
        restore: "Állítsa vissza az alkalmazás AppData mappájának tartalmát egy korábbi biztonsági mentésből",
        gametimerwin: "Egy képernyőn megjelenő időzítő megjelenítése, amely mutatja, mennyi idő kellett az aktuális játék összes achievementjének feloldásához",
        gametimerwinshortcut: "A Játék Befejezési Időzítő be- vagy kikapcsolása a megadott billentyűparancs használatával",
        gametimerwinaot: `A Játék Befejezési Időzítő beállítása "Mindig Felül" módba, amely lehetővé teszi, hogy az ablak a játék ablaka felett jelenjen meg<br><br><span class="ttdesc">Ha engedélyezve van, a Játék Befejezési Időzítő többé nem fogja érzékelni a felhasználói interakciókat, például a "click" eseményeket. Az ablakkal való interakció újbóli engedélyezéséhez ezt az opciót ki kell kapcsolni</span>`,
        resetgametimer: "Az aktuális játék Játék Befejezési Időzítőjének visszaállítása",
        noshortcuts: `Letiltja az alkalmazáson belüli összes billentyűparancsot<br><br><span class="ttdesc">Ha engedélyezve van, <u>az alkalmazáson belüli összes billentyűparancs többé nem fog működni</u>. A billentyűparancsokhoz kapcsolódó összes opció is el lesz rejtve</span>`,
        extwinnotify: "Az összes képernyőértesítés láthatóságának váltása Stream Notifications használata közben",
        usesanwatcher: `A SAN új játékfolyamat-figyelőjének engedélyezése<br><br><span class="ttdesc">Az új SANWatcher és a régi automatikus folyamatkövetési módszerek közötti különbségek a következők:<br><br><div class="wrapper sanwatcher"><span class="hl">ON</span><ul><li>Aktívan figyeli az indítási/kilépési eseményeket minden olyan folyamat esetén, amely a játék telepítési könyvtárában található</li><li>Nem szükséges ismerni a játék futtatható állományát az aktuális játék felszabadításához</li><li>A játék előtti indítók viselkedése eltérő lehet, ezért a teljes kompatibilitás nem garantált minden Steam játék esetén</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">OFF</span><ul><li>A játék indítása után átvizsgálja a játék telepítési könyvtárát futó végrehajtható fájlok után</li><li>Az aktuális játék felszabadításához ismerni kell a játék futtatható állományát</li><li>Ha a játék folyamata nem határozható meg automatikusan, a felhasználónak manuálisan kell új bejegyzést hozzáadnia az <span class="hl">Kapcsolt játékok</span> listához, hogy a játékok automatikusan felszabaduljanak</li></ul></div>`,
        releasewaittime: `Állítsa be, hogy a SANWatcher mennyi ideig várjon új játékfolyamatok elindulására, mielőtt elengedné a jelenlegi játékot<br><br><span class="ttdesc">Például, ha a jelenlegi játék a tényleges játék indítása előtt egy indító-/beállítóablakot nyit meg, ez a beállítás határozza meg, hogy a SANWatcher hány másodpercig várjon a tényleges játékablak megjelenésére azután, hogy az indító-/beállítóablak bezárult<br><br>Ha ezen várakozási időn belül új aktív játékfolyamat észlelhető, az elengedés megszakad, és a rendszer ezután az újonnan aktív folyamatot fogja követni<br><br>💡 A játék neve <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">villogni fog</span> a <span class="hl">Játékmegjelenítő</span> mezőben, miközben a jelenlegi játék az elengedésre vár</span>`
    },
    update: {
        updateavailable: "Frissítés elérhető",
        sub: [
            `<span id="newversion"></span>`,
            "Új frissítés érhető el a Steam Achievement Notifier számára!",
            `Teljes kiadási megjegyzések elérhetők a <span id="discordreleasenotes"></span> és a <span id="githubreleasenotes"></span> oldalon`
        ],
        update: "Frissítés"
    },
    linkgame: {
        content: {
            exepath: "Végrehajtható fájl elérési útja",
            linkedgame: "Játék összekapcsolása",
            autoreleasegame: "Játék automatikus kiadása",
            linkedgamessub: [
                `Felülírja a <span class="hl">SANWatcher</span> által automatikusan követett összes futó játékfolyamatot, és ehelyett csak azt ellenőrzi, hogy a kiválasztott <span class="hl">játék futtatható fájlja</span> jelenleg aktív-e`,
                `Kapcsold össze bármely játék <span class="hl">AppID</span>-jét egy cél <span class="hl">játék futtatható fájllal</span>, vagy <span class="hl">távolíts el</span> egy meglévő kapcsolatot`
            ],
            autoreleasegamessub: [
                `Ha a Steam továbbra is <i>Fut</i> állapotban mutat egy játékot a játékablak bezárása után, próbálj meg új bejegyzést hozzáadni a <span class="hl">$linkgame</span> menüben`,
                `Adj hozzá egy adott játék <span class="hl">AppID</span>-jét a hozzá tartozó <span class="hl">játék futtatható fájllal</span>, vagy <span class="hl">távolíts el</span> egy meglévő bejegyzést`,
            ],
            managesub: [
                `Miután egy játékot észlelt a rendszer, új bejegyzéseket is hozzáadhatsz az <span class="hl">aktív ablak</span> alapján a <span class="hl">Rendszertálca ikonra</span> történő <i>jobb gombos kattintással</i> > <span class="hl">$linkgame</span>`,
                `<span class="hl help" id="appidhelp"><u>Hogyan találom meg egy Steam játék AppID-jét?</u></span>`
            ],
            linknew: "Új bejegyzés",
            linknewsub: [
                `Kapcsold össze egy új játék <span class="hl">AppID</span>-jét egy cél <span class="hl">játék futtatható fájllal</span>`,
                `Hozzáadás után a bejegyzések <span class="hl">eltávolíthatók</span> az előző <span class="hl">$linkgame</span> menüből`
            ],
            linkedit: "Bejegyzés szerkesztése",
            linkeditsub: [
                `Szerkessz egy meglévő kapcsolatot egy játék <span class="hl">AppID</span>-je és a cél <span class="hl">játék futtatható fájlja</span> között`,
                `Hozzáadás után a bejegyzések <span class="hl">eltávolíthatók</span> az előző <span class="hl">$linkgame</span> menüből`
            ],
            link: "Hozzáadás",
            findappid: "AppID keresése",
            findappidsub: [
                `Minden Steam játékhoz egy egyedi szám tartozik – ezt <span class="hl">AppID</span>-nek nevezik. Bármely Steam játék AppID-jét az alábbi módok egyikével találhatod meg:`,
                `A <span class="hl">Steam kliensben</span> kattints <i>jobb gombbal</i> a játékra a <span class="hl">Könyvtárban</span>, majd válaszd a <i>Tulajdonságok</i> > <i>Frissítések</i> menüpontot – itt megtalálod az AppID-t`,
                `A játék <span class="hl">Áruház oldalának</span> <span class="hl">URL</span>-jében – ez az <span class="hl">app/</span> utáni szám: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Olyan weboldalakon, mint a <span class="hl">SteamDB</span> – az <span class="hl">App Info</span> szakaszban minden játék AppID-je megtalálható`
            ],
            noexe: "A játék EXE fájlja nem található!",
            noexesub: "Kattints ide további információkért",
            noexedialogsub: [
                `A Steam Achievement Notifier nem tudta automatikusan megtalálni a játék futtatható fájlját. A játék futtatható fájljának helye szükséges ahhoz, hogy bezárás után a játék „kiadható” legyen`,
                `Ha a játékot bezárás után manuálisan szeretnéd kiadni, kattints <i>jobb gombbal</i> a <span class="hl">Rendszertálca ikonra</span> > <span class="hl">Beállítások</span> > <span class="hl">Játék kiadása</span>, vagy használd a <span class="hl">Játék kiadása gyorsbillentyűt</span>`,
                `Alternatívaként kattints az alábbi <span class="hl">Hozzáadás</span> gombra, hogy a fókuszban lévő ablakhoz tartozó futtatható fájlt hozzáadd a <span class="hl">Beállítások</span> > <span class="hl">Játékok</span> > <span class="hl">Automatikusan kiadott játékok</span> menühöz`,
            ],
            linkedgamefocussub: `Az összes, a <span class="hl">SANWatcher</span> által automatikusan követett futó játékfolyamat felülírásához adj hozzá egy új bejegyzést a <span class="hl">Kapcsolt játékok</span> menüben`,
            autoreleasegamefocussub: `Ha a Steam továbbra is <i>Fut</i> állapotban mutat egy játékot a játékablak bezárása után, próbálj meg új bejegyzést hozzáadni az <span class="hl">Automatikusan kiadott játékok</span> menüben`,
            focussub: `Ehhez az aktuális játék esetén kattints az alábbi <span class="hl">Hozzáadás</span> gombra, hogy a fókuszban lévő ablakhoz tartozó futtatható fájlt hozzáadd a <span class="hl">Beállítások</span> > <span class="hl">Játékok</span> > <span class="hl">$linkgame</span> menühöz`,
            linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Mi történik, ha a Hozzáadás gombra kattintok?</u></span>`,
            linkgamehelp: "Összekapcsolás fókusz alapján",
            linkgamehelpsub: [
                `A <span class="hl">Hozzáadás</span> gombra kattintva automatikusan létrejön egy új bejegyzés a <span class="hl">Beállítások</span> > <span class="hl">Játékok</span> > <span class="hl">Automatikusan kiadott játékok</span> menüben, a jelenleg fókuszban lévő ablak adatai alapján.`,
                `A <span class="hl">Hozzáadás</span> gombra kattintás után egy 5 másodperces időzítő indul`,
                `Mielőtt az időzítő lejár, helyezd fókuszba a játék ablakát`,
                `Miután az időzítő lejárt, az aktuális <span class="hl">AppID</span>-hez egy új bejegyzés kerül a <span class="hl">Beállítások</span> > <span class="hl">Játékok</span> > <span class="hl">Automatikusan kiadott játékok</span> menübe, a fókuszban lévő ablakhoz tartozó futtatható fájl használatával`,
                `Az új próbálkozások felülírják a meglévő bejegyzéseket, vagy a bejegyzés eltávolítható a <span class="hl">Beállítások</span> > <span class="hl">Játékok</span> > <span class="hl">Automatikusan kiadott játékok</span> menüben a <span id="linkhelpunlink"></span> gombra kattintva`
            ],
            addlinkfailed: "Nem sikerült hozzáadni az ablakot",
            addlinkfailedsub: `Kattints a <span class="hl">Hozzáadás</span> gombra az újbóli próbálkozáshoz`
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Add hozzá bármely Steam-játék <span class="hl">AppID</span>-jét a <span class="hl">kizárások listájához</span>`,
                `A Steam Achievement Notifier nem fogja megpróbálni követni a teljesítményadatokat bármely játékhoz, amelynek az <span class="hl">AppID</span>-je hozzá lett adva a <span class="hl">kizárások listájához</span>`,
                `<span class="hl" id="appidhelp"><u>Hogyan találom meg egy Steam-játék AppID-jét?</u></span>`
            ],
            exclusionnew: "Új kizárás",
            exclusionnewsub: [
                `Írd be az <span class="hl">AppID</span>-t a <span class="hl">kizárások listájához</span> való hozzáadáshoz`
            ],
            exclusionedit: "Kizárás szerkesztése",
            exclusioneditsub: [
                `A meglévő <span class="hl">AppID</span> szerkesztése a <span class="hl">Kizárási listában</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Adj hozzá bármely Steam-játék <span class="hl">AppID</span>-ját a <span class="hl">Belefoglalási listához</span>`,
                `A Steam Achievement Notifier csak azoknak a játékoknak a teljesítményadatait próbálja követni, amelyek <span class="hl">AppID</span>-ja hozzá lett adva a <span class="hl">Belefoglalási listához</span>`,
                `<span class="hl help" id="appidhelp"><u>Hogyan találom meg egy Steam-játék AppID-ját?</u></span>`
            ],
            inclusionnew: "Új belefoglalás",
            inclusionnewsub: [
                `Add meg a <span class="hl">AppID</span>-t, amelyet hozzá szeretnél adni a <span class="hl">Belefoglalási listához</span>`
            ],
            inclusionedit: "Belefoglalás szerkesztése",
            inclusioneditsub: [
                `Szerkeszd a meglévő <span class="hl">AppID</span>-t a <span class="hl">Belefoglalási listában</span>`
            ]
        }
    },
    notificationelems: {
        title: "Értesítési elemek",
        content: {
            unlockmsg: "Feloldó Üzenet",
            title: "Teljesítmény Cím",
            desc: "Teljesítmény Leírás",
            hiddeniconpos: "Rejtett Ikon",
            sshiddeniconpos: "Rejtett Ikon",
            decorationpos: "Díszítés",
            ssdecorationpos: "Díszítés",
            percentpos: "Ritkasági Százalék",
            sspercentpos: "Ritkasági Százalék",
            percentbadge: "Százalékos jelvény",
            sspercentbadge: "Százalékos jelvény",
            percentbadgepos: "Jelvény pozíciója",
            sspercentbadgepos: "Jelvény pozíciója",
            percentbadgecolor: "Jelvény színe",
            sspercentbadgecolor: "Jelvény színe",
            percentbadgefontcolor: "Jelvény Betűszíne",
            sspercentbadgefontcolor: "Jelvény Betűszíne",
            percentbadgefontsize: "Jelvény mérete",
            sspercentbadgefontsize: "Jelvény mérete",
            percentbadgeroundness: "Jelvény lekerekítettsége",
            sspercentbadgeroundness: "Jelvény lekerekítettsége",   
            percentbadgex: "Vízszintes eltolás",
            sspercentbadgex: "Vízszintes eltolás",
            percentbadgey: "Függőleges eltolás",
            sspercentbadgey: "Függőleges eltolás",
            percentbadgeimg: "Ikon használata",
            sspercentbadgeimg: "Ikon használata",
            percentbadgeimgbronze: "Ritkaság: > $semirarity",
            sspercentbadgeimgbronze: "Ritkaság: > $semirarity",
            percentbadgeimgsilver: "Ritkaság: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Ritkaság: < $semirarity & > $rarity",
            percentbadgeimggold: "Ritkaság: < $rarity",
            sspercentbadgeimggold: "Ritkaság: < $rarity",
            resetpbimgs: "Jelvény ikonok visszaállítása",
            elemsmatch: "A testreszabó beállításainak egyeztetése",
            ssdisplay: "Képernyőkép előnézet"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Adja hozzá bármely játék <span class="hl">AppID</span>-ját, hogy automatikusan válthasson <span class="hl">Témákra</span>, amikor észlelik`,
                `Bármely mentett <span class="hl">Téma</span> választható minden figyelmeztetési típushoz, valamint a kívánt monitor kiválasztható, amelyet <span class="hl">Képernyőkép forrásként</span> szeretne használni`,
                `<span class="hl" id="appidhelp"><u>Hogyan találom meg egy Steam játék AppID-ját?</u></span>`
            ],
            themeswitchnew: "Új automatikus váltás",
            themeswitchnewsub: [
                `Adja meg a játék <span class="hl">AppID</span>-ját, valamint a kívánt monitort, amelyet <span class="hl">Képernyőkép forrásként</span> szeretne használni`,
                `Válassza ki, hogy melyik <span class="hl">Témára</span> szeretne váltani minden figyelmeztetési típushoz, amikor a játék <span class="hl">AppID</span>-ját észlelik`
            ],
            themeswitchedit: "Automatikus váltás szerkesztése",
            themeswitcheditsub: [
                `A kívánt monitor szerkesztése, amely <span class="hl">képernyőkép forrásként</span> szolgál ehhez a játékhoz tartozó <span class="hl">AppID</span> esetén`,
                `Módosítsa, hogy melyik <span class="hl">téma</span> váltson be minden értesítéstípus esetén, amikor ez a játék <span class="hl">AppID</span> észlelhető`
            ],
            themes: "Témák",
            src: "Képernyőkép forrás",
            themedeleted: "Téma törölve"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Úgy tűnik, megpróbálod engedélyezni a <span class="hl">${opt}</span> opciót, de ezt az opciót nem lehet engedélyezni, amíg először nem telepíted a <code class="dialogcode">${dep}</code> csomagot`,
    `Kérlek, futtasd a <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> parancsot a függőség telepítéséhez`
]