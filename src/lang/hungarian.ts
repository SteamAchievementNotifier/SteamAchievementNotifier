export const translations = {
    global: {
        main: "Fő",
        rare: "Ritka",
        plat: "100%",
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
        missingdepssub: [
            `Úgy tűnik, hogy aktiválni próbálod a <span class="hl">Steam képernyőkép készítése</span> lehetőséget. Azonban Linuxon nem lehet automatikusan képernyőképeket készíteni anélkül, hogy először telepítenéd a <code class="dialogcode">xdotool</code> csomagot`,
            `Kérlek, futtasd a <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> parancsot ennek a függőségnek a telepítéséhez, ami biztosítja, hogy a Steam képernyőképeket készíthess ezen az eszközön`
        ],
        restartapp: "Alkalmazás újraindítása",
        restartappsub: [
            `Ha a dolgok nem működnek megfelelően, használd ezt a lehetőséget az alkalmazás bezárásához és újraindításához`,
            `Ha a probléma továbbra is fennáll az alkalmazás újraindítása után, kérlek fontold meg, hogy jelented be azt a kezdőképernyőn található beépített linkeken keresztül`
        ],
        suspend: "Felfüggesztés",
        resume: "Folytatás"
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
            title: "Nyelv"
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
                extwin: "Stream értesítések",
                audiosrc: "Hangforrás",
                notify: "Értesítés",
                app: "Alkalmazás",
                nowtracking: "Követési értesítés megjelenítése",
                nowtrackingscale: "Követési skála",
                shortcuts: "Értesítési gyorsbillentyűk",
                noiconcache: "Ikon gyorsítótár kikapcsolása"
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
                ovpos: "Átfedés pozíció",
                ovmatch: "Pozíció igazítása",
                ovpath: "Képernyőkép útvonal",
                ssdelay: "Képernyőkép késleltetés",
                notifyimg: "Értesítési kép",
                imgpath: "Kép elérési útvonala"
            }
        },
        accessibility: {
            title: "Hozzáférhetőség",
            content: {
                noanim: "Alkalmazás ablakanimációk kikapcsolása",
                nvda: "NVDA támogatás engedélyezése",
                tooltips: "Eszközleírások megjelenítése"
            }
        },
        advanced: {
            title: "Haladó",
            content: {
                pollrate: "Szavazási ráta",
                releasedelay: "Kiadási késleltetés",
                maxretries: "Maximális újrapróbálkozások száma",
                debug: "Hibakereső panel",
                userust: "Alternatív feldolgozási mód",
                notifydebug: "Hibakeresési értesítések megjelenítése",
                usecustomfiles: "Egyedi alkalmazásfájlok használata",
                showcustomfiles: "Egyedi alkalmazásfájlok megjelenítése"
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
                roundness: "Kerekítés",
                fontsize: "Betűméret",
                opacity: "Átlátszóság",
                bgonly: "Csak háttér"
            }
        },
        colors: {
            title: "Színek",
            content: {
                primarycolor: "Elsődleges szín",
                secondarycolor: "Másodlagos szín",
                tertiarycolor: "Harmadlagos szín",
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
                iconroundness: "Ikon kerekítése",
                plat: "100% logó",
                usegameicon: "Játék ikon használata",
                logo: "Logó",
                decoration: "Dekoráció",
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
                savetheme: "Téma mentése",
                sub: [
                    `A mentett <span class="hl">Felhasználói Témák</span> kiválaszthatók a <span class="hl">Téma kiválasztása</span> menüből a Kezdőképernyőn.`,
                    `Győződjön meg róla, hogy a <span class="hl">Téma neve</span> <u>egyedülálló</u> - egy már létező téma neve <u>felülírja az előzőt</u>!`
                ],
                placeholder: "Téma neve",
                theme: "Téma"
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
        desktop: "Parancsikon váltása az asztalon az alkalmazás futtatásához",
        startwin: "Az Steam Achievement Notifier automatikus indítása bejelentkezés után",
        startmin: "Indítás után elrejti az alkalmazás felhasználói felületét, amíg a rendszertálcáról meg nem nyitják",
        nohwa: `Hardvergyorsítás letiltása, ami javíthatja a teljesítményt az alacsonyabb erőforrású rendszereken vagy olyan rendszereken, amelyek nem rendelkeznek dedikált GPU-val<br><br><span class="ttdesc">Az alkalmazás újraindul ennek az opciónak az engedélyezése vagy letiltása után</span>`,
        litemode: "Az összes interaktív felhasználói felületi elem letiltása, miközben csak korlátozott alkalmazásfunkciókat biztosít a rendszerikonon keresztül. Javíthatja az alkalmazás által felhasznált erőforrásokat",
        rarity: "A ritka eredmények értesítésének százaléka. Azok az eredmények, amelyeknek feloldási aránya meghaladja ezt az értéket, fő értesítésként jelennek meg",
        showpercent: "Az eredmény feloldási százalékának megjelenítése az értesítésben a kiválasztott típusokhoz",
        soundonly: "Értesítések letiltása, csak a Customiser által beállított hangok lejátszása",
        extwin: "Létrehoz egy rejtett háttérablakot, amely megduplázza a jelenleg képernyőn megjelenő értesítéseket. Ez az ablak hozzáadható egy ablakrögzítési forrásként a streaming szoftverekhez, például az OBS-hez",
        audiosrc: "Hangforrás kiválasztása (vagy letiltása), amelyet az alkalmazás generál",
        nowtracking: "Értesítés megjelenítése arról, hogy egy futó játék eredményeit követi",
        nowtrackingscale: `Állítsa be a követési értesítés méretét`,
        shortcuts: "Teszt értesítés kiváltása billentyűparancs segítségével. A gyorsbillentyűk testreszabhatók minden értesítéstípushoz",
        noiconcache: `Kikapcsolja az ikon gyorsítótárazást a játékok indításakor.<br><br><span class="ttdesc">Ez jelentősen javíthatja az alkalmazás teljesítményét a játékok indításakor, és megoldhatja a követési problémákat olyan játékoknál, amelyek nagyszámú teljesítményt tartalmaznak. Az ikon gyorsítótárazás kikapcsolása azonban ritka esetekben hiányzó teljesítmény ikonokhoz vezethet az értesítéseknél</span>`,
        steamss: "Steam képernyőkép készítése, amikor egy eredmény feloldódik",
        screenshots: "Válassza ki a további média típusát, amikor egy értesítés megjelenik",
        monitors: "A monitor, amelyet a képernyőkép készítésekor rögzít",
        ovpos: "Az értesítés átfedésének pozíciója a képernyőképen",
        ovmatch: "A Customiserben beállított képernyőpozíció igazítása ehhez az értesítéstípushoz",
        ovpath: "Az ezen opció által generált képernyőképek mentési helye",
        ssdelay: "Késleltetés hozzáadása az értesítés megjelenése és a képernyőkép készítése között",
        sspreview: "Előnézet megjelenítése, hogyan fog kinézni a képernyőkép mentésekor",
        noanim: "Az alkalmazás ablakanimációinak és átmeneti effektjeinek letiltása",
        nvda: "Engedélyezze az eredmény információinak másolását a vágólapra, amikor egy eredmény feloldódik, hogy képernyőolvasó szoftverek, például az NVDA által olvasható legyen",
        tooltips: "Eszközleírások megjelenítése bizonyos felhasználói felületi elemek fölé húzva",
        pollrate: `Állítsa be a teljesítményadatok frissítési intervallumát játék közben<br><br><span class="ttdesc">A teljesítmény növekedhet/csökkenhet az érték vagy a rendszer hardverének függvényében. A magasabb értékek általában alacsonyabb rendszerterhelést eredményeznek, de késleltethetik az értesítéseket</span>`,
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
        roundness: "Állítsa be az értesítés élek kerekességét",
        fontsize: "Állítsa be a betűméretet az értesítésben",
        opacity: "Állítsa be az értesítés átlátszóságát",
        bgonly: "Csak az értesítés háttérképének átlátszóságát állítsa be, a többi elemet teljes átlátszóságon tartva",
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
        usegameicon: "A jelenlegi játék alapértelmezett értesítésikonjának cseréje",
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
        savetheme: "Mentse el az összes konfigurált testreszabási beállítást új témaként",
        visibilitybtn: "Az elem láthatóságának váltása az egyéni előnézetekben és tesztértesítésekben",
        delbtn: "Az elem visszaállítása az alapértelmezett értékre",
        link: `Megnyitás <span class="hl">Kapcsolt Játékok Kezelése Menüben</span>`,
        imgpath: "Az a hely, ahol ezen beállítás által generált értesítési képek lesznek mentve"
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
    "linkgame": {
        "content": {
            "exepath": "Végrehajtható fájl elérési útja",
            "nodata": "Nincsenek adatok",
            "manage": "Csatlakoztatott játékok kezelése",
            "managesub": [
                `Kézzel csatlakoztassa a játék <span class="hl">végrehajtható fájlját</span> egy adott <span class="hl">AppID</span>-hoz, vagy <span class="hl">szakítsa meg</span> egy meglévő kapcsolatot`,
                `A Steam Achievement Notifier már nem fog <span class="hl">automatikus folyamatkövetést</span> használni bármely <span class="hl">csatlakoztatott játékhoz</span> - ehelyett a megadott <span class="hl">végrehajtható fájl</span> követése történik, amikor a kapcsolódó <span class="hl">AppID</span> észlelhető`,
                `<span class="hl" id="appidhelp"><u>Hogyan találom meg a Steam-játék AppID-jét?</u></span>`
            ],
            "new": "Új...",
            "linknew": "Új csatlakoztatott játék",
            "linknewsub": [
                `Hozzon létre egy új kapcsolatot egy <span class="hl">játék végrehajtható fájlja</span> és az azt kísérő <span class="hl">AppID</span> között`,
                `Létrehozás után a kapcsolatokat a korábbi <span class="hl">Csatlakoztatott játékok kezelése</span> párbeszédpanelen lehet <span class="hl">szakítani</span>`
            ],
            "link": "Csatlakozás",
            "findappid": "AppID keresése",
            "findappidsub": [
                `Minden Steam-játékhoz egyedi szám tartozik - ezt nevezzük <span class="hl">AppID</span>-nek. Bármely Steam-játékhoz tartozó AppID-t bármelyik következő módszerrel megtalálhatja:`,
                `A <span class="hl">Steam kliensben</span> kattintson jobb gombbal egy játékra a <span class="hl">könyvtárában</span>, majd válassza az <i>Ingatlanok</i> > <i>Frissítések</i> lehetőséget - az AppID itt lesz felsorolva`,
                `A játék <span class="hl">Bolt oldalának URL-címe</span> - ez lesz az a szám, amely az <span class="hl">app/</span> után következik: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Olyan webhelyek, mint a <span class="hl">SteamDB</span> - az <span class="hl">App Info</span> szakasz felsorolja az AppID-t minden játékhoz`
            ]
        }
    }
}