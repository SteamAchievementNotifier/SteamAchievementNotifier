export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Nem észlelt felhasználó",
                tt: "Azok a Steam felhasználók, akiknek az eredményeit jelenleg követi"
            },
            gamelbl: {
                elem: gameName ? gameName : "Nem észlelt játék",
                tt: "Azok a játékok, amelyeknek az eredményeit jelenleg követi"
            },
            previewbtn: {
                tt: "Kiválasztott hang előnézete"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Alapértelmezett (Nincs hangfájl kiválasztva)" : custom.sounddir ? custom.sounddir : "Alapértelmezett (Nincs hangkönyvtár kiválasztva)"
            },
            soundmodelbl: {
                elem: "Hang mód:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fájl" : "véletlenszerű"
            },
            togglemain: {
                elem: "Fő",
                tt: "Fő teljesítmény értesítés"
            },
            togglerare: {
                elem: "Ritka",
                tt: "Ritka teljesítmény értesítés"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% teljesítmény értesítés"
            },
            progresscirclewrapper: {
                tt: "Egyéni értesítés előnézetének megjelenítése"
            },
            testbtnwrapper: {
                elem: "Teszt értesítés megjelenítése",
                tt: "Egyéni értesítés előnézetének megjelenítése",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Testreszabás...",
                tt: "Értesítés testreszabási menüjének megnyitása",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "A Steam nem fut"
            },
            updatebtn: {
                tt: "Frissítés elérhető"
            },
            kofibtn: "Adományozz a Ko-Fi-n!",
            discordbtn: "Csatlakozz a Discordhoz!",
            githubbtn: "Jelents problémát a GitHub-on!",
            settingstitlelbl: {
                elem: "Beállítások"
            },
            configuration: {
                elem: "Konfiguráció",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Nyelv",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Operációs rendszer",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Értesítések",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Képernyőképek",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Elérhetőség",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Egyéb",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Verzió"
            },
            apikeybtn: {
                tt: "Kattints ide a Steam Web API kulcsának megszerzéséhez"
            },
            apikey: {
                placeholder: "Adja meg az API kulcsát",
                tt: "A Steam Web API kulcsa a Steam fiókodhoz"
            },
            eyebtn: {
                tt: "API kulcs láthatóságának váltása"
            },
            apikeylbl: {
                elem: "API kulcs lekérése"
            },
            steam64idbtn: {
                tt: "Kattints ide a Steam64 azonosítód megszerzéséhez"
            },
            steam64id: {
                placeholder: "Adja meg a Steam64 ID",
                tt: "A Steam64 azonosítód a Steam fiókodhoz"
            },
            steam64idlbl: {
                elem: "Steam64 azonosító lekérése"
            },
            switchaccountspan: {
                elem: "Fiókok váltása"
            },
            switchaccountbtn: {
                tt: "Váltás a kapcsolt Steam fiókok között"
            },
            testconnectionlbl: {
                elem: "Kapcsolat tesztelése",
                tt: "Kapcsolat tesztelése a Steam Web API-val"
            },            
            lang: {
                tt: "Nyelv beállítása a felhasználói felülethez és értesítésekhez"
            },
            desktop: {
                elem: "Asztali gyorsindító létrehozása",
                tt: "Gyorsindító létrehozása az asztalon az alkalmazás indításához",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Indítás a Windows indításakor",
                tt: "Az alkalmazás automatikus futtatása Windows indításakor",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Indítás minimalizálva",
                tt: "Az alkalmazás minimálisra csökkentése a rendszer tálca ikonra való indítás után",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Hardveres gyorsítás letiltása",
                tt: "Hardveres gyorsítás letiltása az alkalmazás ablakához",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite mód",
                tt: "A fő alkalmazásablak letiltása a rendszer erőforrásainak megtakarítása érdekében. A minimális beállítások elérhetőek maradnak az alkalmazás rendszer tálca ikonjával történő interakcióhoz",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Ritkaság százalék",
                tt: `Csak olyan teljesítmények jelennek meg "Ritka" értesítésként, amelyeknek globális feloldási százaléka az alábbi számnál alacsonyabb`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Csak hang mód",
                tt: "Értesítések letiltása, de a kiválasztott hang lejátszása, amikor feloldasz egy teljesítményt",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Összes feloldási százalék megjelenítése",
                tt: "Globális feloldási százalékok megjelenítése az összes értesítési típusban",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Képernyők duplikálása külső ablakban",
                tt: "Képernyők duplikálása külső ablakban",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Teljesítmény statisztika ablak megjelenítése",
                tt: "Teljesítmény statisztika ablak megjelenítése",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Most követett" értesítés megjelenítése`,
                tt: `A "Most követett" értesítés ki- vagy bekapcsolása, amikor elindítasz egy játékot`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Parancsikonok",
                tt: "Állítson be egy billentyűparancsot a Teszt Értesítések kiváltásához",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Állítson be egy gyorsbillentyűt a Teszt Értesítés kiváltásához ehhez a típushoz"
            },
            sctabmain: {
                tt: "Fő Értesítés Gyorsbillentyű"
            },
            sctabrare: {
                tt: "Ritka Értesítés Gyorsbillentyű"
            },
            sctabplat: {
                tt: "100% Értesítés Gyorsbillentyű"
            },
            screenshotmode: {
                tt: "Válassz módot az automatikus teljesítmény képernyőképekhez"
            },
            displayscreenshot: {
                elem: "Értesítési képernyőkép megjelenítése",
                tt: "Képernyőkép előnézet megjelenítése a teljesítmény értesítésben",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam parancsikon",
                tt: "Illeszd a Steam kliens billentyűkombinációját a natív Steam képernyőképek készítéséhez teljesítmények feloldásakor",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Fő értesítési átfedés"
            },
            ovtabrare: {
                tt: "Ritka értesítési átfedés"
            },
            ovtabplat: {
                tt: "100% értesítési átfedés"
            },
            monitor: {
                elem: "Monitor",
                tt: "Válaszd ki a képernyőt a képernyőképek forrásaként",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Átfedés pozíciója",
                tt: "Állítsd be az értesítési átfedés pozícióját",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Útvonal",
                tt: "Állítsd be a képernyőképek mentésének helyét",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Előnézet",
                tt: `Az értesítési átfedés előnézetének megjelenítése`,
                query: "label"
            },
            noanim: {
                elem: "Alkalmazásablak animációk letiltása",
                tt: "Átmeneti animációk letiltása az alkalmazásablakban",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDA támogatás engedélyezése",
                tt: "Az értesítés tartalmának másolása a vágólapra az NVDA képernyőolvasó szoftver általi olvasáshoz",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "ToolTip-ok megjelenítése",
                tt: "ToolTip-ok ki- vagy bekapcsolása az alkalmazás elemei felett lebegéskor",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Értesítés DevTools megjelenítése",
                tt: "Az értesítés fejlesztői eszköztárában történő megnyitása, amikor az triggerelődik",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Adatvédelmi irányelvek megtekintése",
                tt: "Tekintsd meg a Steam Achievement Notifier adatvédelmi irányelveit",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Béta csatorna",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Nyissa meg a Naplót",
                tt: "Nézd meg és oszd meg az alkalmazás naplójának tartalmát",
                query: "label"
            },
            resetbtn: {
                elem: "Alkalmazás visszaállítása",
                tt: "Az összes tárolt adat törlése és az alkalmazás újraindítása",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Az értesítés animációjának szüneteltetése/lejátszása"
            },
            customiserreplay: {
                tt: "Az értesítés animációjának újrajátszása"
            },
            customisersavepreset: {
                tt: "Jelenlegi testreszabások mentése új Értesítési Előre beállításként"
            },
            tabbtnnext: {
                tt: "Következő"
            },
            tabbtnprev: {
                tt: "Vissza"
            },
            notificationpreset: {
                elem: "Előre beállítás",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Értesítési Előre beállítás",
                tt: "Válasszon egy értesítési előre beállítást testre szabáshoz",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Ritka ikon animáció",
                tt: "Az ikon háttér animációjának kapcsolása",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Minden részlet",
                tt: `Az értesítések összes elérhető részletének megjelenítése`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Kijelzési idő",
                tt: "Az értesítés megjelenésének időtartama",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Méret",
                tt: "Az értesítés mérete<br><i>*A megjelenítési ablakban nem tükröződik</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Egyéni szöveg",
                tt: "Egyéni üzenet megjelenítése az értesítésben",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Játékcím használata",
                tt: "A jelenlegi játék címének megjelenítése az értesítésben",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stílus",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Háttér stílusa",
                tt: "Állítsa be az értesítés háttér stílusát",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Szárnyszög",
                tt: "Állítsa be a színátmenet szögét",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Háttérkép",
                tt: "Válasszon egy képfájlt az értesítés háttérképként való beállításához",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Fényerősség",
                tt: "Állítsa be a játék művészeti hátterének fényerősségét",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Kerekesség",
                tt: "Állítsa be az értesítés sarkainak kerekességét",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Betűméret",
                tt: "Állítsa be a betű méretét",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Átlátszóság",
                tt: "Állítsa be az értesítés átlátszóságát",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Csak háttér",
                tt: "Csak az értesítés háttérére alkalmazzon átlátszóságot, a szöveg és a képek maradjanak teljesen átlátszatlanok",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Színek",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Elsődleges szín",
                tt: "Állítsa be az elsődleges értesítés színét",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Másodlagos szín",
                tt: "Állítsa be a másodlagos értesítés színét",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Szöveg színe",
                tt: "Állítsa be a szöveg színét",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Szöveg körvonal",
                tt: "Körvonal alkalmazása az összes értesítési szövegre",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Körvonal színe",
                tt: "Állítsa be a szöveg körvonalának színét",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Szöveg árnyéka",
                tt: "Árnyék alkalmazása az összes értesítési szövegre",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Árnyék színe",
                tt: "Állítsa be a szöveg árnyékának színét",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Ikon kerekessége",
                tt: "Állítsa be az értesítés ikonjának kerekességét",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Egyéni ikon használata",
                tt: "Egy képfájl használata egyéni ikonként",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Egyéni ikon",
                tt: "Válasszon egy képfájlt egyéni ikonként való beállításhoz",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Egyéni ikon visszaállítása`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Egyedi 100%-os ikon",
                tt: `Egy képfájl használata egyedi 100%-os ikonként`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Egyedi 100%-os ikon",
                tt: `Válasszon ki egy képfájlt egyedi 100%-os ikonként való beállításhoz`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Egyedi 100%-os ikon visszaállítása`,
                query: ".sanboxlbl"
            },                    
            usegameicon: {
                elem: "Játék ikon használata",
                tt: "A jelenlegi játék ikonjának használata",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Pozíció",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Képernyő pozíció",
                tt: "Állítsa be az értesítés pozícióját a képernyőn",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Egyéni pozíció használata",
                tt: "Egyéni pozíció használata az értesítésnél",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Pozíció beállítása",
                tt: "Egyéni pozíció beállítása az értesítéshez",
                query: "label"
            },
            animdir: {
                elem: "Animáció iránya",
                tt: "Állítsa be az értesítés animációjának irányát",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "Adatvédelmi irányelvek"
            },
            ppusagetitle: {
                elem: "STEAM WEB API ADATFELHASZNÁLÁS"
            },
            ppusagecontent: {
                elem: `A Steam Achievement Notifier a Valve <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span>-ját használja a felhasználó Steam-fiókjához kapcsolódó adatok lekérdezéséhez és megjelenítéséhez, a felhasználó által megadott Steam API kulcs/Steam64 azonosító kombináció segítségével. Ezek az adatok a következőket tartalmazzák:`
            },
            ppstats: {
                elem: "Statisztikák a lezárt és feloldott teljesítményekhez"
            },
            ppusername: {
                elem: "A Steam felhasználóneved"
            },
            ppsteamgames: {
                elem: "A játszott Steam-játékaid"
            },
            ppusagefooter: {
                elem: "A Steam Achievement Notifier a jövőben további Steam Web API adatokat is felhasználhat az alkalmazás kiegészítő funkcióinak és frissítéseinek biztosításához."
            },
            ppkey64title: {
                elem: "STEAM API KULCS/STEAM64 AZONOSÍTÓ FELHASZNÁLÁSA"
            },
            ppauth: {
                elem: "A Steam Achievement Notifiernek a felhasználói Steam API kulcs/Steam64 azonosító kombináció megadására van szüksége az azonosított hozzáféréshez a Steam Web API-hoz."
            },
            ppnoauth: {
                elem: "Ezen információk nélkül nem érhetők el webhivatkozások (amelyeket a Valve biztosít a Steam Web API eléréséhez) a felhasználó Steam-fiókjához kapcsolódó adatok - beleértve a teljesítményadatokat - lekérdezéséhez."
            },
            ppstoragetitle: {
                elem: "STEAM WEB API ADATTAÁROLÁS"
            },
            ppstorage: {
                elem: "A Steam Achievement Notifier ideiglenesen helyi szinten tárolja a Steam Web API adatokat kizárólag az alkalmazásban való használatra. Az adatok ideiglenes tárolása kizárólag a Steam Achievement Notifier által történő felhasználásra szolgál, és normál körülmények között minden nem tartós Steam Web API adatot törölnek a helyi tárolóból az alkalmazás bezárásakor."
            },
            pppersist: {
                elem: "A felhasználó eszközén csak a felhasználói kényelem érdekében tárolt, a Steam Web API kulcsát és Steam64 azonosítóját tartalmazó adatok vannak tartósan tárolva."
            },
            ppdelete: {
                elem: "Ezen adatokat a felhasználó szükség esetén bármikor kézzel törölheti. A Steam Achievement Notifier által létrehozott fájlok az alábbi könyvtárban találhatók:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Jelenleg nem támogatott"
            },
            ppcollecttitle: {
                elem: "ADATGYŰJTÉSI IRÁNYELV"
            },
            ppnosend: {
                elem: "A Steam Achievement Notifier soha nem küldi vagy tárolja a felhasználói adatokat a felhasználó helyi fájlrendszerén kívül a felhasználó kifejezett engedélye nélkül. Ideértve az alkalmazásban történő felhasználásra letöltött adatokat is, beleértve a Steam API kulcsot és Steam64 azonosítót, amelyeket az alkalmazás hozzáféréshez a Steam Web API-hoz megadott."
            },
            ppconsent: {
                elem: "Az adattovábbításra vonatkozó beleegyezés megerősítése és a már meglévő vagy jövőbeli funkcióimplementációk használata által a felhasználó hozzájárulása nyilvánvalóvá válik a külső adattovábbításhoz. Ebben az esetben a felhasználót mindig tájékoztatják az adattovábbítás jellegéről, és felkérik az engedély megerősítésére az alkalmazáson kívüli adatok küldése esetén."
            },
            ppexclude: {
                elem: "A Steam Achievement Notifier szándékosan nem tartalmaz semmilyen módszert a felhasználó által a programnak megadott információk külső hozzáférésére, megtekintésére vagy gyűjtésére, de az alkalmazás már meglévő vagy jövőbeli funkcióimplementációin keresztül lehetőség nyílik az alkalmazás adatok külső küldésére a felhasználó nevében, de csak a felhasználó erre vonatkozó hozzájárulásával."
            },
            pprequests: {
                elem: "A Steam Web API adatainak hozzáféréséhez szükséges kéréseket az alkalmazás maga végzi beépített módszerek segítségével, hasonlóan a böngészők által nyújtott funkcionalitáshoz. Ezek a kérések tartalmazzák a felhasználó Steam API kulcs/Steam64 azonosító kombinációját, amint azt a Steam Web API által előírtak szerint. Azonban ezek a kérések soha nem szándékosan elérhetőek vagy elfogadhatóak más alkalmazások által történő használatra vagy lehallgatásra."
            },
            ppusertitle: {
                elem: "FELHASZNÁLÓI FELELŐSSÉG"
            },
            ppsteamtou: {
                elem: `A Steam Achievement Notifier hivatalosan kiadott bármely verziójának letöltésével és használatával a <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">hivatalos GitHub tárolóból</span>, te, mint felhasználó, automatikusan elfogadod a STEAM WEB API HASZNÁLATI FELTÉTELEINEK 7. ÉS 8. SZAKASZÁT.`
            },
            gamedetails: "Játék részletei",
            mustbepublic: "nyilvánosra kell állítani",
            nosoundfile: "Alapértelmezett (Nincs hangfájl kiválasztva)",
            nosoundfolder: "Alapértelmezett (Nincs hangmappa kiválasztva)",
            file: "Fájl",
            randomised: "Véletlenszerű",
            audioselectdialog: `Hang kiválasztása ${custom.mode === "file" ? "Fájl" : "Mappa"}`,
            imgselectdialog: `Képfájl kiválasztása`,
            unsupported: "Nem támogatott fájl!",
            novalidaudiofiles: "Nincsenek érvényes hangfájlok!",
            nolocate: "A fájl nem található!",
            switchaccountstitle: "Fiókok váltása",
            noaccounts: "Kezdéshez adj hozzá egy fiókot!",
            connecting: "Kapcsolódás...",
            connected: "Csatlakozva",
            testsuccessuser: `Készen állsz`,
            testsuccess1: `Győződj meg róla, hogy a <span>Játék részletei</span> <span>Publikus</span> beállítással van-e beállítva <a href="${privacysettings}">a Steam adatvédelmi beállításaiban</a>`,
            testsuccess2: `Ellenőrizd, hogy a játékban a kijelző módja <span>Keret nélküli</span> legyen, hogy a értesítések megjelenjenek a játékablak felett`,
            noapikeytitle: "Nincs API kulcs",
            noapikeytxt: "Kérlek add meg az API kulcsodat",
            noapikeyhint: `Kattints az <img src="./icon/key.svg" alt=""> ikonra az API kulcs lekéréséhez`,
            nosteam64idtitle: "Nincs Steam64 azonosító",
            nosteam64idtxt: "Kérlek add meg a Steam64 azonosítódat",
            nosteam64idhint: `Kattints az <img src="./icon/id.svg" alt=""> ikonra a Steam64 azonosító lekéréséhez`,
            invalidapikeytitle: "Érvénytelen API kulcs!",
            invalidapikeymsg: "Nem lehet hozzáférni a Steam Web API-hoz a megadott API kulcs segítségével",
            invalidapikeydetail1: "Ellenőrizd, hogy az API kulcsod helyes-e",
            invalidapikeydetail2: "Regenerálj egy új API kulcsot a fiókodhoz",
            invalidsteam64idtitle: "Érvénytelen Steam64 azonosító!",
            invalidsteam64idmsg: "Nem található Steam fiók a megadott Steam64 azonosítóhoz kapcsolódva",
            invalidsteam64iddetail1: "Ellenőrizd, hogy a megadott Steam64 azonosító helyes-e a Steam fiókodhoz",
            nonetworkfound: "Nem található aktív hálózati kapcsolat",
            connecttonetwork: "Csatlakoztasd a számítógépet a hálózathoz, majd próbáld újra",
            testdefaulterrortitle: "Hiba történt!",
            testdefaulterrormsg: "Hiba történt a Steam Web API-hoz való kapcsolódáskor",
            testdefaulterrordetail1: "Kérlek jelentsd a problémát a Discord-on vagy a GitHub-on!",
            sspath: "Képernyőkép elérési útjának kiválasztása",
            wronguser: user ? `${user} nincs bejelentkezve a Steam fiókjába!` : "Nem találhatók kapcsolt felhasználói fiókok!",
            switchuser: "Kattints ide a fiókok közötti váltáshoz",
            trackingfailed: "Követés sikertelen!",
            checkapplog: "Ellenőrizd az alkalmazás naplóját részletekért",
            soon: "Hamarosan!",
            gamecomplete: "100% kész",
            gametitle: "Játékcím",
            achievementunlocked: "Teljesítmény feloldva",
            achievementtitle: "Teljesítmény címe",
            allachievements: "Minden teljesítményt feloldottál!",
            achievementdesc: "Teljesítmény leírása",
            show: "Mutat",
            quit: "Kilépés",
            off: "Kikapcsolva",
            steamss: "Steam játékon belüli képernyőkép",
            overlayss: "Képernyőkép értesítési átfedéssel",
            match: "Testreszabott illesztés",
            topleft: "Bal felső",
            topcenter: "Felső közép",
            topright: "Jobb felső",
            bottomleft: "Bal alsó",
            bottomcenter: "Alsó közép",
            bottomright: "Jobb alsó",
            solid: "Egyszínű",
            gradient: "Fokozatos",
            bgimg: "Háttérkép",
            gameart: "Játék művészet",
            up: "Fel",
            down: "Le",
            left: "Balra",
            right: "Jobbra",
            tracking: "Most Követés",
            inuse: "Használja",
            invalidshortcut: "Érvénytelen"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Hangfájl kiválasztása az achievement feloldásakor történő lejátszáshoz" : "Hangfájlokat tartalmazó mappa kiválasztása véletlenszerű lejátszáshoz az achievement feloldásakor")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Itt található egy napló azokról az eseményekről, amelyek a program indítása óta történtek"
            },
            copylbl: {
                elem: "Napló tartalmának másolása"
            },
            openlbl: {
                elem: "Naplófájl generálása"
            },
        }

        return translations
    }
}