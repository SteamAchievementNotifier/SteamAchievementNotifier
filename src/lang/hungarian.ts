export const translations = {
    global: {
        main: "Fő",
        rare: "Ritka",
        plat: "100%",
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
        findappid: "AppID keresése",
        findappidsub: [
            `Minden Steam-játékhoz egyedi szám tartozik - ezt nevezzük <span class="hl">AppID</span>-nek. Bármely Steam-játékhoz tartozó AppID-t bármelyik következő módszerrel megtalálhatja:`,
            `A <span class="hl">Steam kliensben</span> kattintson jobb gombbal egy játékra a <span class="hl">könyvtárában</span>, majd válassza az <i>Ingatlanok</i> > <i>Frissítések</i> lehetőséget - az AppID itt lesz felsorolva`,
            `A játék <span class="hl">Bolt oldalának URL-címe</span> - ez lesz az a szám, amely az <span class="hl">app/</span> után következik: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Olyan webhelyek, mint a <span class="hl">SteamDB</span> - az <span class="hl">App Info</span> szakasz felsorolja az AppID-t minden játékhoz`
        ],
        noexe: "A játék EXE fájl nem található!",
        noexesub: "Kattints ide a további információkért",
        noexedialogsub: [
            `A Steam Achievement Notifier nem találta meg automatikusan a játék végrehajtható fájlját. A végrehajtható fájl elérhetősége szükséges a játék "felszabadításához"`,
            `A játék kézi felszabadításához <i>jobb kattintás</i> a <span class="hl">rendszertálca ikonra</span> > <span class="hl">Beállítások</span> > <span class="hl">Játék felszabadítása</span>, vagy használja a <span class="hl">Játék felszabadítása billentyűparancsot</span>`,
            `Alternatívaként kattintson az alábbi <span class="hl">Linkelés</span> gombra, hogy hozzáadja az aktív ablakhoz tartozó végrehajtható fájlt a <span class="hl">Kapcsolt játékok</span> menühöz`,
            `<span class="hl help" id="linkgamehelp"><u>Mi történik, ha rákattintok a Linkelés gombra?</u></span>`
        ],
        linkgamehelp: "Játék csatlakoztatása ablakon keresztül",
        linkgamehelpsub: [
            `A <span class="hl">Linkelés</span> gombra kattintva automatikusan hozzáadódik egy új bejegyzés a <span class="hl">Beállítások</span> > <span class="hl">Kapcsolt játékok</span> menübe az aktuálisan fókuszált ablak információi alapján.`,
            `A <span class="hl">Linkelés</span> gombra kattintás után elindul egy 5 másodperces visszaszámlálás`,
            `A visszaszámlálás lejárta előtt fókuszáljon a játék ablakára`,
            `Miután lejárt a visszaszámlálás, egy új bejegyzés kerül hozzáadásra az aktuális <span class="hl">AppID</span> számára a <span class="hl">Beállítások</span> > <span class="hl">Kapcsolt játékok</span> menübe, az aktív ablak végrehajtható fájljának használatával`,
            `Ha újra meg kell próbálnia, távolítsa el a bejegyzést a <span class="hl">Beállítások</span> > <span class="hl">Kapcsolt játékok</span> menüből, a <span id="linkhelpunlink"></span> gombra kattintva`
        ],
        addlinkfailed: "Nem sikerült csatlakoztatni az ablakot",
        addlinkfailedsub: `Kattintson a <span class="hl">Linkelés</span> gombra a próbálkozáshoz`,
        webhookunlockmsg: "$user teljesítményt oldott fel",
        webhookunlockmsgplat: "$user feloldotta az összes teljesítményt",
        webhookingame: "a $gamename játékban",
        notconnected: "Nincs csatlakoztatva",
        raloghelp: "A játékom nem észlelhető",
        raenablelog: `Engedélyezze az emulátor naplófájlokat`,
        raenablelogsub: [
            `A támogatott emulátorok belső eseményeinek eléréséhez (mint például a játék aktuális állapota, az elért eredmények információi stb.), a <span class="hl">naplófájlokat</span> engedélyezni kell az egyes kiválasztott emulátorokban.<br><br>Minden naplófájl a <span class="hl">Logs</span> mappában lesz elérhető az egyes kiválasztott emulátorok számára meghatározott mappában.`,
            `<span class="hl">RetroArch</span>: Menjen a <i class="hllb">Beállítások > Naplózás</i> menüpontra, és állítsa be <i><span class="hllb">Naplózási részletesség</span>: <span class="hlgreen">BE</span>, <span class="hllb">Frontend naplózási szint</span>: <span class="hlgreen">1 (Információ)</span></i>, valamint <i><span class="hllb">Naplózás fájlba</span>: <span class="hlgreen">BE</span></i>`,
            `<span class="hl">Dolphin</span>: Menjen a <i class="hllb">Nézet > Naplóbeállítások megjelenítése</i> menüpontra, és állítsa be <i><span class="hllb">Részletesség</span>: <span class="hlgreen">Információ</span>, <span class="hllb">Napló kimenetek</span> > <span class="hlgreen">Írás fájlba</span></i>, és <i><span class="hllb">Naplótípusok</span> > <span class="hlgreen">Eredmények (RetroAchievements)</span></i>`,
            `<span class="hl">PCSX2</span>: Jelölje be az <i class="hllb">Eszközök > Naplózás fájlba engedélyezése</i> lehetőséget`
        ]
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
                rarity: "Ritkaság százalék",
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
                webhookspoilers: `Spoiler címke hozzáadása`
            }
        },
        games: {
            title: "Játékok",
            content: {
                linkedgames: "Kapcsolt játékok",
                themeswitch: "Automatikus téma váltás",
                exclusionlist: "Kizárások listája"
            }
        },
        media: {
            title: "Média",
            content: {
                steamss: "Steam képernyőkép készítése",
                screenshots: "További média",
                off: "Ki",
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
                releaseshortcut: "Játék felszabadítása billentyűparancs"
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
                usecustomfiles: "Egyedi alkalmazásfájlok használata",
                showcustomfiles: "Egyedi alkalmazásfájlok megjelenítése"
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
                ppspp: "PPSPP",
                installdir: "Adat elérési út",
                rapercenttype: "Százalék típus",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Adja meg az telepítési elérési utat"
            }
        },
        misc: {
            title: "Egyéb",
            content: {
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
                bgimgbrightness: "Fényerő",
                brightness: "Fényerő",
                blur: "Homályosítás",
                roundness: "Kerekítés",
                fontsize: "Betűméret",
                usecustomfontsizes: "Egyedi betűméretek használata",
                unlockmsgfontsize: "Feloldó üzenet",
                titlefontsize: "Cím",
                descfontsize: "Leírás",
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
                glowcolorbronze: "Ritkaság: > 50%",
                glowcolorsilver: "Ritkaság: < 50% & > $rarity",
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
                outline: "Kontúr",
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
                fontoutline: "Betű körvonal",
                fontoutlinecolor: "Betű körvonal színe",
                fontshadow: "Betűárnyék",
                fontshadowcolor: "Betűárnyék színe"
            }
        },
        icons: {
            title: "Ikonok",
            content: {
                iconscale: "Ikon skálázás",
                iconroundness: "Ikon kerekítése",
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
                themeselect: "Kiválasztott téma"
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
        rarity: "A ritka eredmények értesítésének százaléka. Azok az eredmények, amelyeknek feloldási aránya meghaladja ezt az értéket, fő értesítésként jelennek meg",
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
        pollrate: `Állítsa be a teljesítményadatok frissítési intervallumát játék közben<br><br><span class="ttdesc">A teljesítmény növekedhet/csökkenhet az érték vagy a rendszer hardverének függvényében. A magasabb értékek általában alacsonyabb rendszerterhelést eredményeznek, de késleltethetik az értesítéseket</span>`,
        initdelay: `Állítsa be a késleltetést a jelenlegi <span class="hl">AppID</span> érzékelése és a folyamat-/teljesítménykövetés kezdete között<br><br><span class="ttdesc">Ennek az értéknek a növelése megakadályozhatja azokat a helyzeteket, amikor a Steam nem tudja elindítani a jelenlegi játékot (a Steamworks alkalmazás inicializálása miatt, mielőtt a játék elindulna)</span><br><br><span class="ttdesc">Alternatívaként ennek az értéknek a növelése használható arra is, hogy kijavítsuk a játék előtti indítófolyamatok hibás érzékelését</span>`,
        releasedelay: `Állítsa be, hogy a háttér folyamat mennyi ideig várjon a jelenlegi játék kiadása után a újraindításra. Mind az automatikus folyamatkövetést, mind a kézi kapcsolt játékokat érinti.<br><br><span class="ttdesc">Lehetőséget biztosít a Steamworks teljes felszabadítására az alkalmazástól. Ennek az értéknek a növelése megakadályozhatja az szokatlan viselkedést, mint például egy korábban bezárt játék követését</span>`,
        maxretries: `Állítsa be a maximális újrapróbálkozások számát egy futó folyamat kapcsolásához egy érzékelt AppID-hoz. Mind az automatikus folyamatkövetést, mind a kézi kapcsolt játékokat érinti.<br><br><span class="ttdesc">A kapcsolódási kísérleteket másodpercenként egyszer végzik el. Ha egy futó folyamat nem kapcsolódik az aktuális AppID-hez ezen kísérletek számát követően, egy érvénytelen folyamatot ad vissza. Ilyen esetekben a játékot kézzel ki kell adni a Rendszertálca > Beállítások > Játék kiadása menüponton keresztül</span>`,
        debug: "Nyissa meg a Hibakereső panelt, amely részletes folyamatkövetési információkat jelenít meg",
        userust: "Használjon alternatív, Rust alapú funkciót annak ellenőrzésére, hogy a követett játékfolyamatok jelenleg futnak-e a rendszeren. Ha nincs bejelölve, akkor a NodeJS alapú alapértelmezett folyamatellenőrzés lesz helyette használva.",
        notifydebug: "DevTools ablak létrehozása minden értesítéshez. Hasznos hibakereséshez/hibaelhárításhoz",
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
        glowcolorbronze: "A fény színe, amikor a feloldás százaléka > 50%",
        glowcolorsilver: "A fény színe, amikor a feloldás százaléka < 50% és > $rarity",
        glowcolorgold: "A fény színe, amikor a feloldás százaléka < $rarity",
        mask: "Engedélyezze az értesítés egyes részeinek maszkolását egyéni képpel",
        maskimg: `Töltsön be egy képfájlt, amelyet maszkként szeretne használni<br><br><span class="ttdesc">A CSS-ben a <code class="ttcode">mask-mode: alpha</code> ellentétesen működik a megszokott módon - a képfájl átlátszó területei el lesznek rejtve, és a fekete/szürke területek engedélyezik a alatti elemek láthatóságát</span>`,
        outline: "Válassza ki a kontúr típusát, amely megjelenik az értesítés körül",
        outlinecolor: "Állítsa be a kontúr színét az értesítés körül",
        outlinewidth: "Állítsa be a kontúr szélességét az értesítés körül",
        primarycolor: "Állítsa be az értesítés elsődleges színét",
        secondarycolor: "Állítsa be az értesítés másodlagos színét",
        tertiarycolor: "Állítsa be az értesítés harmadlagos színét",
        fontcolor: "Állítsa be a betűszínét az értesítésben megjelenített összes szövegnek",
        fontoutline: "Keret hozzáadása az értesítésben megjelenített összes szöveghez",
        fontoutlinecolor: "Állítsa be a szöveg keretének színét",
        fontshadow: "Árnyék hozzáadása az értesítésben megjelenített összes szöveghez",
        fontshadowcolor: "Állítsa be a szöveg árnyékának színét",
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
        resetcustompos: "Az értesítés pozíciójának visszaállítása az alapértelmezett egyéni pozícióra",
        updatetheme: "Frissítsd a jelenlegi témát a kiválasztott testreszabási lehetőségekkel",
        savetheme: "Mentse el az összes konfigurált testreszabási beállítást új témaként",
        visibilitybtn: "Az elem láthatóságának váltása az egyéni előnézetekben és tesztértesítésekben",
        delbtn: "Az elem visszaállítása az alapértelmezett értékre",
        imgpath: "Az a hely, ahol ezen beállítás által generált értesítési képek lesznek mentve",
        ssenabled: "Média generálás engedélyezése vagy letiltása erre a típusra",
        checkforupdates: `Ellenőrizze, hogy megjelent-e új verzió az alkalmazásból a GitHubon. Ha elérhető frissítés van, az automatikusan letöltésre és telepítésre kerül, miután megerősítette a <span class="hl">Frissítés elérhető</span> párbeszédablakban`,
        linkedgames: `Kerüld meg a <span class="hl">automatikus folyamatkövetést</span> bizonyos Steam-játékokhoz<br><br><span class="ttdesc">Ezt a lehetőséget csak nagyon speciális esetekben kellene használni. A felhasználóknak normál körülmények között nem kellene ezt a lehetőséget használniuk!</span>`,
        exclusionlist: `Akadályozd meg a Steam-játékok bizonyos teljesítményeinek követését az alkalmazásban<br><br><span class="ttdesc">Ezt a lehetőséget csak nagyon speciális esetekben kellene használni. A felhasználóknak normál körülmények között nem kellene ezt a lehetőséget használniuk!</span>`,
        ovx: "A képernyőképen megjelenő értesítés vízszintes eltolása",
        ovy: "A képernyőképen megjelenő értesítés függőleges eltolása",
        importtheme: `Testreszabások importálása egy felhasználó által létrehozott <span class="hl">témafájl</span> segítségével`,
        exporttheme: `Az aktuálisan kiválasztott <span class="hl">téma</span> exportálása megosztáshoz<br><br><span class="ttdesc">Az exportálás előtt győződjön meg róla, hogy az kívánt <span class="hl">téma</span> van kiválasztva (a <span class="hl">Téma kiválasztása</span> menüponton keresztül). Továbbá, győződjön meg róla, hogy a testreszabások el vannak mentve az kiválasztott <span class="hl">témában</span> (a <span class="hl">Téma mentése</span> menüponton keresztül)<br><br><u>Bármilyen testreszabás, amely még nem lett elmentve az aktuális <span class="hl">témába</span>, nem fog exportálódni!</u></span>`,
        webhooks: "Használjon Webhook URL-t, hogy egy Discord szerveren tegyen közzé egy üzenetet, amikor egy teljesítmény feloldódik",
        webhookmain: `Váltás, hogy küldjenek-e teljesítményinformációkat egy Discord szerverre, amikor egy fő teljesítmény elérhető`,
        webhookrare: "Váltás, hogy küldjenek-e teljesítményinformációkat egy Discord szerverre, amikor egy ritka teljesítmény elérhető",
        webhookplat: "Váltás, hogy küldjenek-e teljesítményinformációkat egy Discord szerverre, amikor egy 100%-os teljesítmény elérhető",
        webhooktest: "Váltás, hogy küldjön-e teszt információkat egy Discord szerverre, amikor bármilyen típusú teszt értesítés aktiválódik",
        webhookurl: `Állítsa be a <span class="hl">Webhook URL</span> a kívánt Discord szerverhez<br><br><span class="ttdesc">Egy <span class="hl">Webhook URL</span> arra szolgál, hogy közzétegyen egy üzenetet egy Discord szerveren/csatornán felhasználó vagy alkalmazás nevében. Új Webhook beállításához egy Discord szerveren, a felhasználónak szerepet kell vállalnia a kívánt szerveren, amely engedélyezi a Webhook-ok létrehozását<br><br><u>Webhook URL szükséges ezen opció használatához</u><br><br>További információkért nézze meg a Discord hivatalos dokumentációját</span>`,
        webhookspoilers: `Spoiler címke hozzáadása a "Rejtett" eredményekhez, amikor azok a Discordra kerülnek`,
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
        percentbadgeimgbronze: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék > 50%",
        sspercentbadgeimgbronze: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék > 50%",
        percentbadgeimgsilver: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < 50% és > $rarity",
        sspercentbadgeimgsilver: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < 50% és > $rarity",
        percentbadgeimggold: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < $rarity",
        sspercentbadgeimggold: "A jelvény ikon, amely akkor jelenik meg, amikor a feloldási százalék < $rarity",
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
        iconshadowcolor: "Állítsa be a siker ikont körülvevő árnyék effektus színét, amikor ritka siker oldódik fel",
        iconanimcolor: "Állítsa be az animációs effektus színét a siker ikon mögött, amikor ritka siker oldódik fel",
        logoscale: "A logó elem méretének növelése vagy csökkentése az értesítésen belül",
        decorationscale: "A díszítő elem méretének növelése vagy csökkentése az értesítésen belül",
        usecustomfontsizes: `A szöveges elemek méretének növelése vagy csökkentése egyedileg az értesítésben<br><br><span class="ttdesc">Nem garantálható az értesítés eredeti elrendezésének megőrzése, ha egyedi betűméret értékeket módosítanak</span>`,
        unlockmsgfontsize: "A feloldó üzenet szöveges elemének méretének növelése vagy csökkentése",
        titlefontsize: "A siker címének szöveges elemének méretének növelése vagy csökkentése",
        descfontsize: "A siker leírásának szöveges elemének méretének növelése vagy csökkentése",
        webhookembedcolormain: "Állítsa be a színt, amely a webhook beágyazásban használatos, amikor egy fő siker oldódik fel",
        webhookembedcolorrare: "Állítsa be a színt, amely a webhook beágyazásban használatos, amikor egy ritka siker oldódik fel",
        webhookembedcolorplat: "Állítsa be a színt, amely a webhook beágyazásban használatos, amikor egy 100%-os siker oldódik fel",
        raemus: "Értesítések megjelenítése, amikor játékokat észlelnek támogatott emulátorokban",
        rauser: "A Retro Achievements felhasználónevet beállítani az elért eredmények nyomon követéséhez",
        rakey: `Web API kulcs beállítása a Retro Achievements API hitelesítéséhez<br><br><span class="ttdesc">A Web API kulcsot a Retro Achievements weboldalon történő bejelentkezéssel és a Beállítások > Kulcsok > Web API Kulcs menüpontra navigálva másolhatja vagy újragenerálhatja<br><br>🔒 A megadott kulcs titkosítva lesz, mielőtt helyileg tárolódna a rendszeren</span>`,
        rapercenttype: "Beállíthatja, hogy a Hardcore vagy Softcore eredmények százaléka jelenjen meg az értesítésekben",
        retroarch: `Retro Achievements értesítések megjelenítése a RetroArch-on emulált játékokhoz<br><br><span class="ttdesc"><i class="hllb">RetroArch > Beállítások > Naplózás</i> a következő beállításokkal kell konfigurálni:<br><br><ul><li><span class="hllb">Naplózási részletesség</span>: <span class="hlgreen">BE</span></li><li><span class="hllb">Frontend naplózási szint</span>: <span class="hlgreen">1 (Információ)</span></li><li><span class="hllb">Naplózás fájlba</span>: <span class="hlgreen">BE</span></li></ul></span>`,  
        dolphin: `Retro Achievements értesítések megjelenítése a Dolphin-on emulált játékokhoz<br><br><span class="ttdesc"><i class="hllb">Dolphin > Nézet > Naplóbeállítások megjelenítése</i> a következő beállításokkal kell konfigurálni:<br><br><ul><li><span class="hllb">Részletesség</span>: <span class="hlgreen">Információ</span></li><li><span class="hllb">Napló kimenetek</span> > <span class="hlgreen">Írás fájlba</span></li><li><span class="hllb">Napló típusok</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li></ul></span>`,  
        pcsx2: `Retro Achievements értesítések megjelenítése a PCSX2-n emulált játékokhoz<br><br><span class="ttdesc"><i class="hllb">PCSX2 > Eszközök > Fájlnaplózás engedélyezése</i> be kell kapcsolni</span>`,  
        retroarchpath: `A "Logs" könyvtárat tartalmazó mappa elérési útjának beállítása a RetroArch számára<br><br><span class="ttdesc">A RetroArch adatai az alkalmazás telepítési könyvtárában találhatók</span>`,  
        dolphinpath: `A "Logs" könyvtárat tartalmazó mappa elérési útjának beállítása a Dolphin számára<br><br><span class="ttdesc">A Dolphin adatai az alábbi helyek egyikén találhatók:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu</span></li></ul></span>`,  
        pcsx2path: `A "Logs" könyvtárat tartalmazó mappa elérési útjának beállítása a PCSX2 számára<br><br><span class="ttdesc">A PCSX2 adatai az alkalmazás telepítési könyvtárában találhatók</span>`,  
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
            managesub: [
                `Kézzel csatlakoztassa a játék <span class="hl">végrehajtható fájlját</span> egy adott <span class="hl">AppID</span>-hoz, vagy <span class="hl">szakítsa meg</span> egy meglévő kapcsolatot`,
                `A Steam Achievement Notifier már nem fog <span class="hl">automatikus folyamatkövetést</span> használni bármely <span class="hl">csatlakoztatott játékhoz</span> - ehelyett a megadott <span class="hl">végrehajtható fájl</span> követése történik, amikor a kapcsolódó <span class="hl">AppID</span> észlelhető`,
                `<span class="hl" id="appidhelp"><u>Hogyan találom meg a Steam-játék AppID-jét?</u></span>`
            ],
            linknew: "Új csatlakoztatott játék",
            linknewsub: [
                `Hozzon létre egy új kapcsolatot egy <span class="hl">játék végrehajtható fájlja</span> és az azt kísérő <span class="hl">AppID</span> között`,
                `Létrehozás után a kapcsolatokat a korábbi <span class="hl">Csatlakoztatott játékok kezelése</span> párbeszédpanelen lehet <span class="hl">szakítani</span>`
            ],
            link: "Csatlakozás",
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
            percentbadgeimgbronze: "Raritás: > 50%",
            sspercentbadgeimgbronze: "Raritás: > 50%",
            percentbadgeimgsilver: "Raritás: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Raritás: < 50% & > $rarity%",
            percentbadgeimggold: "Raritás: < $rarity%",
            sspercentbadgeimggold: "Raritás: < $rarity%",
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
            themes: "Témák",
            src: "Képernyőkép forrás",
            themedeleted: "Téma törölve"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Úgy tűnik, hogy megpróbálja engedélyezni a <span class="hl">${opt}</span> beállítást. Azonban Linux rendszereken nem lehet képernyőképeket készíteni anélkül, hogy először telepítené a(z) <code class="dialogcode">${dep}</code> csomagot`,
    `Kérjük, futtassa a <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> parancsot, hogy telepítse ezt a függőséget. Ez biztosítja, hogy képernyőképeket lehessen készíteni ezen eszközön`
]