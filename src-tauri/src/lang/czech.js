export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Nenalezen žádný uživatel",
                tt: "Uživatel služby Steam, pro kterého se sledují dosažení"
            },
            gamelbl: {
                elem: gameName ? gameName : "Nenalezena žádná hra",
                tt: "Hra, pro kterou se sledují dosažení"
            },
            previewbtn: {
                tt: "Zobrazit náhled vybraného zvuku"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Výchozí (Není vybrán zvukový soubor)" : custom.sounddir ? custom.sounddir : "Výchozí (Není vybraný zvukový adresář)"
            },              
            soundmodelbl: {
                elem: "Režim zvuku:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "soubor" : "náhodné"
            },
            togglemain: {
                elem: "Hlavní",
                tt: "Oznámení o hlavním dosažení"
            },
            togglerare: {
                elem: "Vzácné",
                tt: "Oznámení o vzácném dosažení"
            },
            toggleplat: {
                elem: "100 %",
                tt: "Oznámení o dosažení 100 %"
            },
            progresscirclewrapper: {
                tt: "Zobrazit náhled upraveného oznámení"
            },
            testbtnwrapper: {
                elem: "Zobrazit testovací oznámení",
                tt: "Zobrazit náhled upraveného oznámení",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Přizpůsobit...",
                tt: "Otevřít menu pro přizpůsobení oznámení",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Služba Steam není spuštěna"
            },
            updatebtn: {
                tt: "Je k dispozici aktualizace"
            },
            kofibtn: "Přispět na Ko-Fi!",
            discordbtn: "Připojit se na Discord!",
            githubbtn: "Nahlásit problém na GitHubu!",            
            settingstitlelbl: {
                elem: "Nastavení"
            },
            configuration: {
                elem: "Konfigurace",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Jazyk",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Operační systém",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Oznámení",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Snímky obrazovky",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Přístupnost",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Ostatní",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Verze"
            },            
            apikeybtn: {
                tt: "Klikněte sem pro získání vašeho klíče k Steam Web API"
            },
            apikey: {
                placeholder: "Zadejte váš API klíč",
                tt: "Klíč k Steam Web API přiřazený k vašemu účtu na Steamu"
            },
            eyebtn: {
                tt: "Přepnout viditelnost klíče k API"
            },
            apikeylbl: {
                elem: "Získat klíč k API"
            },
            steam64idbtn: {
                tt: "Klikněte sem pro získání vašeho Steam64 ID"
            },
            steam64id: {
                placeholder: "Zadejte váš Steam64 ID",
                tt: "Steam64 ID přiřazené k vašemu účtu na Steamu"
            },
            steam64idlbl: {
                elem: "Získat Steam64 ID"
            },
            switchaccountspan: {
                elem: "Přepnout účty"
            },
            switchaccountbtn: {
                tt: "Přepínat mezi propojenými účty na Steamu"
            },
            testconnectionlbl: {
                elem: "Otestovat spojení",
                tt: "Otestujte spojení s Steam Web API"
            },
            lang: {
                tt: "Nastavte jazyk pro uživatelské rozhraní a oznámení"
            },            
            desktop: {
                elem: "Vytvořit zástupce na ploše",
                tt: "Vytvořte zástupce na ploše pro spuštění aplikace",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Spustit s Windows",
                tt: "Automaticky spustit aplikaci při spuštění Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Spustit minimalizované",
                tt: "Minimalizovat aplikaci do systémového traye po spuštění",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Vypnout hardwarovou akceleraci",
                tt: "Vypnout hardwarovou akceleraci pro okno aplikace",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite režim",
                tt: "Vypne hlavní okno aplikace, aby se ušetřily systémové prostředky. Minimální možnosti zůstanou dostupné pomocí ikony v systémovém trayi pro interakci s aplikací",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Procento vzácnosti",
                tt: `Zobrazit pouze dosažení s globálním odemknutým procentem nižším než toto číslo jako oznámení "Vzácné"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Režim pouze zvuku",
                tt: "Vypnout oznámení, ale přehrává vybraný zvuk při odemykání dosažení",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Zobrazit všechna procenta odemykání",
                tt: "Zobrazit globální procenta odemykání ve všech typech oznámení",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplikovat do externího okna",
                tt: `Externí okno, které zdvojí všechny oznámení. Lze jej zacílit pomocí softwaru pro streamování / zachycení obrazovky.<div class="ttwarn">Toto okno je <u>zcela průhledné</u>. Pro zvýraznění aktuální pozice okna podržte klávesu <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Zobrazit oznámení "Nyní sledování"`,
                tt: `Přepnout oznámení "Nyní sledování" při spuštění hry`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Zkratky oznámení",
                tt: "Nastavit klávesovou zkratku pro spouštění testovacích oznámení",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Nastavit zkratku pro spuštění testovacího oznámení tohoto typu"
            },
            sctabmain: {
                tt: "Hlavní zkratka oznámení"
            },
            sctabrare: {
                tt: "Vzácná zkratka oznámení"
            },
            sctabplat: {
                tt: "Zkratka oznámení 100%"
            },
            screenshotmode: {
                tt: "Vyberte režim pro automatické snímky obrazovky dosažení"
            },
            displayscreenshot: {
                elem: "Zobrazit snímek obrazovky v oznámení",
                tt: "Zobrazit náhled snímků obrazovky v rámci oznámení o dosažení",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Klávesová zkratka pro Steam",
                tt: "Zařaďte svou klávesovou zkratku v klientu Steam pro pořizování nativních snímků obrazovky při odemykání dosažení",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Překryv hlavního oznámení`
            },
            ovtabrare: {
                tt: `Překryv vzácného oznámení`
            },
            ovtabplat: {
                tt: `Překryv oznámení o 100%`
            },
            monitor: {
                elem: "Monitor",
                tt: "Vyberte monitor jako zdroj snímku obrazovky",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Pozice překryvu",
                tt: "Nastavte pozici překryvu oznámení",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Cesta",
                tt: "Nastavte cestu, kde budou snímky obrazovky uloženy",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Náhled",
                tt: `Náhled překryvu oznámení`,
                query: "label"
            },
            noanim: {
                elem: "Vypnout animace v okně aplikace",
                tt: "Vypnout přechodové animace v okně aplikace",
                query: ".sanboxlbl"
            },            
            nvda: {
                elem: "Povolit podporu NVDA",
                tt: "Zkopírujte obsah oznámení do schránky, aby bylo možné ho přečíst pomocí čtečky obrazovky NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Zobrazovat popisky",
                tt: "Přepnout zobrazování popisků při najetí na prvky aplikace",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Zobrazit DevTools oznámení",
                tt: "Otevřít panel DevTools oznámení při spuštění",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Zobrazit zásady ochrany osobních údajů",
                tt: "Zobrazit zásady ochrany osobních údajů pro Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Připojit se k beta kanálu",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Otevřít záznam aplikace",
                tt: "Zobrazit a sdílet obsah záznamu aplikace",
                query: "label"
            },
            resetbtn: {
                elem: "Obnovit aplikaci",
                tt: "Odstranit všechna uložená data a restartovat aplikaci",
                query: "label"
            },
            customiserplaystate: {
                tt: "Pozastavit/spustit animaci oznámení"
            },
            customiserreplay: {
                tt: "Znovu přehrát animaci oznámení"
            },
            customisersavepreset: {
                tt: "Uložit aktuální přizpůsobení jako novou předvolbu oznámení"
            },
            tabbtnnext: {
                tt: "Další"
            },
            tabbtnprev: {
                tt: "Zpět"
            },            
            notificationpreset: {
                elem: "Předvolba",
                query: ".sanboxtitle > label"
            },
            preset: {
                elem: "Předvolba oznámení",
                tt: "Vyberte předvolbu oznámení pro přizpůsobení",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animace ikony Rare",
                tt: "Přepnout animaci pozadí ikony",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Všechny detaily",
                tt: `Zobrazit všechny dostupné podrobnosti oznámení`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Doba zobrazení",
                tt: "Délka zobrazení oznámení",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Měřítko",
                tt: "Velikost oznámení<br><i>*Nereflektováno ve zobrazeném okně</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Vlastní text",
                tt: "Zobrazit vlastní zprávu v oznámení",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Použít název hry",
                tt: "Zobrazit název aktuální hry v oznámení",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Styl",
                query: ".sanboxtitle > label"
            },
            bgstyle: {
                elem: "Styl pozadí",
                tt: "Nastavit styl pozadí oznámení",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Úhel přechodu",
                tt: "Nastavit úhel barevného přechodu",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Obrázek pozadí",
                tt: "Vybrat obrázkový soubor pro nastavení pozadí oznámení",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Jas herního umění",
                tt: "Nastavit jas pozadí herního umění",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Zaoblenost",
                tt: "Nastavit zaoblenost rohů oznámení",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Velikost písma",
                tt: "Nastavit velikost písma",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Průhlednost",
                tt: "Nastavit průhlednost oznámení",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Pouze pozadí",
                tt: "Aplikovat průhlednost pouze na pozadí, ponechat text a obrázky plně neprůhledné",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Barvy",
                query: ".sanboxtitle > label"
            },
            primarycolor: {
                elem: "Hlavní barva",
                tt: "Nastavit hlavní barvu oznámení",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Sekundární barva",
                tt: "Nastavit sekundární barvu oznámení",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Barva textu",
                tt: "Nastavit barvu textu",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Obrys textu",
                tt: "Použít obrys na veškerý text oznámení",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Barva obrysu",
                tt: "Nastavit barvu obrysu textu",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Stín textu",
                tt: "Použít stín na veškerý text oznámení",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Barva stínu",
                tt: "Nastavit barvu stínu textu",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikona",
                query: ".sanboxtitle > label"
            },
            iconroundness: {
                elem: "Zaoblení ikony",
                tt: "Nastavit zaoblení rohů ikony oznámení",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Použít vlastní ikonu",
                tt: "Použít obrázkový soubor jako vlastní ikonu",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Vlastní ikona",
                tt: "Vybrat obrázkový soubor pro nastavení vlastní ikony",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Obnovit vlastní ikonu`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Vlastní ikona 100%",
                tt: `Použít obrázkový soubor jako vlastní ikonu 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Vlastní ikona 100%",
                tt: `Vybrat obrázkový soubor pro nastavení vlastní ikony 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Obnovit vlastní ikonu 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Použít ikonu hry",
                tt: "Použít ikonu aktuální hry",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Pozice",
                query: ".sanboxtitle > label"
            },
            pos: {
                elem: "Pozice na obrazovce",
                tt: "Nastavit pozici oznámení na obrazovce",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Použít vlastní pozici",
                tt: "Použít vlastní pozici pro oznámení",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Nastavit pozici",
                tt: "Nastavit vlastní pozici pro oznámení",
                query: "label"
            },
            animdir: {
                elem: "Směr animace",
                tt: "Nastavit směr animace oznámení",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "OCHRANA SOUKROMÍ"
            },
            ppusagetitle: {
                elem: "POUŽITÍ DAT ZE STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier používá Valve's <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> pro získání a zobrazení dat souvisejících se Steam účtem/účty uživatele, pomocí kombinace Steam API klíče a Steam64 ID, kterou uživatel poskytne aplikaci. Tato data zahrnují:`
            },
            ppstats: {
                elem: "Statistiky pro uzamčená a odemčená achievementy"
            },
            ppusername: {
                elem: "Vaše Steam uživatelské jméno"
            },
            ppsteamgames: {
                elem: "Hry, které jste hráli na Steamu"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier může v budoucnu využívat další data z Steam Web API pro poskytování dalších funkcí a aktualizací aplikace."
            },
            ppkey64title: {
                elem: "POUŽITÍ STEAM API KLÍČE/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier vyžaduje, aby uživatel zadal kombinaci Steam API klíče a Steam64 ID pro ověřený přístup k Steam Web API."
            },
            ppnoauth: {
                elem: "Bez této informace nelze získat webové odkazy (poskytnuté Valve k přístupu k Steam Web API), které slouží k získání dat souvisejících s účty uživatele na Steamu, včetně dat o achievementech."
            },
            ppstoragetitle: {
                elem: "UKLÁDÁNÍ DAT ZE STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier dočasně ukládá data z Steam Web API místně na PC uživatele pouze pro účely použití v rámci aplikace. Jakákoliv dočasná úložiště těchto dat je určena pouze pro použití Steam Achievement Notifierem a za normálních okolností budou všechna neperzistentní data z Steam Web API smazána z lokálního úložiště při ukončení aplikace."
            },
            pppersist: {
                elem: "Perzistentní data uložená na zařízení uživatele zahrnují pouze data, která jsou ukládána aplikací pro pohodlnost uživatele, například Steam API klíč a Steam64 ID uživatele."
            },
            ppdelete: {
                elem: "Tato data může uživatel kdykoli manuálně smazat, pokud je to nutné. Soubory vytvořené aplikací Steam Achievement Notifier se nacházejí v následujícím adresáři:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Momentálně nepodporováno"
            },
            ppcollecttitle: {
                elem: "POHLED NA SBAÍRKU DAT"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>nikdy</u> neodesílá ani neukládá uživatelská data mimo lokální souborový systém uživatele bez jeho výslovného svolení. Toto zahrnuje jakékoliv informace získané prostřednictvím Steam Web API pro použití v rámci aplikace, včetně kombinace Steam API klíče a Steam64 ID poskytnuté aplikaci pro přístup k Steam Web API."
            },
            ppconsent: {
                elem: "Potvrzením souhlasu a následným použitím již existujících nebo budoucích implementací funkcí navržených pro odesílání informací externě je uživatelem implicitně udělen souhlas k tomuto jednání. V těchto případech bude uživatel vždy informován o povaze odesílaných dat a bude vyzván k potvrzení souhlasu s odesíláním dat mimo aplikaci."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier záměrně neumožňuje externí přístup, prohlížení nebo sběr jakýchkoli informací poskytnutých aplikaci uživatelem, ale prostřednictvím již existujících nebo budoucích implementací funkcí může aplikace odesílat data vně aplikace jménem uživatele, ale pouze s jeho souhlasem."
            },
            pprequests: {
                elem: "Požadavky na přístup k datům z Steam Web API jsou prováděny přímo v rámci aplikace pomocí vestavěných metod, podobně jako funkcionalita poskytovaná webovými prohlížeči. Tyto požadavky obsahují kombinaci Steam API klíče a Steam64 ID uživatele, jak je požadováno Steam Web API, ale nikdy nejsou záměrně dostupné nebo zachytitelné jinými aplikacemi."
            },
            ppusertitle: {
                elem: "ZODPOVĚDNOST UŽIVATELE"
            },
            ppsteamtou: {
                elem: `STÁHNUVŠI SI A POUŽÍVAJE-LI JAKOUKOLIV OFICIÁLNĚ VYDANOU VERZI STEAM ACHIEVEMENT NOTIFIERU POMOCÍ <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFICIÁLNÍHO GITHUB REPOSITORY</span>, VY, JAKO UŽIVATEL, SE TÍMTO TAKÉ DRŽÍTE BODŮ 7 A 8 <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">PODMÍNEK PRO POUŽÍVÁNÍ STEAM WEB API</span>.`
            },
            gamedetails: "Podrobnosti hry",
            mustbepublic: "musí být nastaveno jako Veřejné",            
            nosoundfile: "Výchozí (Není vybrán žádný zvukový soubor)",
            nosoundfolder: "Výchozí (Není vybrána žádná složka se zvuky)",
            file: "Soubor",
            randomised: "Náhodný",                
            audioselectdialog: `Vyberte zvukový ${custom.mode === "file" ? "soubor" : "adresář"}`,
            imgselectdialog: `Vyberte obrázkový soubor`,
            unsupported: "Nepodporovaný soubor!",
            novalidaudiofiles: "Neplatné zvukové soubory!",
            nolocate: "Nepodařilo se lokalizovat soubor!",
            switchaccountstitle: "Přepnout účty",
            noaccounts: "Přidejte účet a začněte!",
            connecting: "Připojování...",
            connected: "Připojeno",
            testsuccessuser: `Vše je v pořádku`,
            testsuccess1: `Ujistěte se, že jsou vaše <span>podrobnosti o hře</span> nastaveny na <span>Veřejné</span> v <a href="${privacysettings}">Nastavení soukromí</a> na Steamu`,
            testsuccess2: `Zkontrolujte, zda je ve vaší hře nastaven zobrazení <span>Okno bez ohraničení</span>, aby se notifikace zobrazovaly nad oknem hry`,
            noapikeytitle: "Chybí API klíč",
            noapikeytxt: "Zadejte prosím váš API klíč",
            noapikeyhint: `Klikněte na ikonu <img src="./icon/key.svg" alt=""> pro získání vašeho API klíče`,
            nosteam64idtitle: "Chybí Steam64 ID",
            nosteam64idtxt: "Zadejte prosím vaše Steam64 ID",
            nosteam64idhint: `Klikněte na ikonu <img src="./icon/id.svg" alt=""> pro získání vašeho Steam64 ID`,
            invalidapikeytitle: "Neplatný API klíč!",
            invalidapikeymsg: "Nepodařilo se přistoupit k Steam Web API s poskytnutým API klíčem",
            invalidapikeydetail1: "Zkontrolujte, zda je váš API klíč správný",
            invalidapikeydetail2: "Vygenerujte nový API klíč pro váš účet",
            invalidsteam64idtitle: "Neplatné Steam64 ID!",
            invalidsteam64idmsg: "Nepodařilo se najít účet na Steamu spojený s poskytnutým Steam64 ID",
            invalidsteam64iddetail1: "Zkontrolujte, zda jste poskytl správnou hodnotu Steam64 ID pro váš účet na Steamu",
            nonetworkfound: "Nebylo nalezeno aktivní síťové připojení",
            connecttonetwork: "Připojte svůj počítač k síti a zkuste to znovu",
            testdefaulterrortitle: "Došlo k chybě!",
            testdefaulterrormsg: "Při připojování k Steam Web API došlo k chybě",
            testdefaulterrordetail1: "Nahlaste tento problém na Discordu nebo GitHubu!",
            sspath: "Vyberte cestu pro snímky obrazovky",
            wronguser: user ? `${user} není přihlášený na Steamu!` : "Nebyly nalezeny žádné propojené uživatelské účty!",
            switchuser: "Klikněte zde pro přepnutí účtů",
            trackingfailed: "Sledování se nezdařilo!",
            checkapplog: "Zkontrolujte protokol aplikace pro podrobnosti",
            soon: "Přichází brzy!",
            gamecomplete: "100% Dokončeno",
            gametitle: "Název hry",
            achievementunlocked: "Dosáhli jste úspěchu",
            achievementtitle: "Název úspěchu",
            allachievements: "Odemkli jste všechny úspěchy!",
            achievementdesc: "Popis úspěchu",
            show: "Zobrazit",
            quit: "Ukončit",
            off: "Vypnuto",
            steamss: "Snímek obrazovky ve hře na Steamu",
            overlayss: "Snímek obrazovky s oznámením na obrazovce",
            match: "Přizpůsobení zápasu",
            topleft: "Vlevo nahoře",
            topcenter: "Nahoře ve středu",
            topright: "Vpravo nahoře",
            bottomleft: "Vlevo dole",
            bottomcenter: "Dole ve středu",
            bottomright: "Vpravo dole",
            solid: "Jednobarevný",
            gradient: "Přechod",
            bgimg: "Obrázek pozadí",
            gameart: "Grafika hry",
            up: "Nahoru",
            down: "Dolů",
            left: "Doleva",
            right: "Doprava",
            tracking: "Nyní Sledování",
            inuse: "Používá",
            invalidshortcut: "Neplatná zkratka"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Vyberte zvukový soubor, který se má přehrát při odemknutí úspěchu" : "Vyberte adresář obsahující zvukové soubory, které se budou přehrávat náhodně při odemknutí úspěchu")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Zde je záznam o tom, co se stalo od spuštění aplikace v"
              },
              copylbl: {
                elem: "Kopírovat obsah záznamu"
              },
              openlbl: {
                elem: "Vytvořit soubor se záznamem"
              },              
        }

        return translations
    }
}