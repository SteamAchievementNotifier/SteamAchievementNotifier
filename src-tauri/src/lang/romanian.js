export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Niciun utilizator detectat",
                tt: "Utilizatorul Steam pentru care se urmăresc realizările în prezent"
            },
            gamelbl: {
                elem: gameName ? gameName : "Niciun joc detectat",
                tt: "Jocul pentru care se urmăresc realizările în prezent"
            },
            previewbtn: {
                tt: "Previzualizează sunetul selectat"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Implicit (Niciun fișier audio selectat)" : custom.sounddir ? custom.sounddir : "Implicit (Niciun director audio selectat)"
            },              
            soundmodelbl: {
                elem: "Mod sunet:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fișier" : "aleator"
            },
            togglemain: {
                elem: "Principal",
                tt: "Notificare realizare principală"
            },
            togglerare: {
                elem: "Rară",
                tt: "Notificare realizare rară"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notificare realizare 100%"
            },
            progresscirclewrapper: {
                tt: "Arată o previzualizare a notificării personalizate"
            },
            testbtnwrapper: {
                elem: "Afișează notificare de test",
                tt: "Arată o previzualizare a notificării personalizate",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Personalizează...",
                tt: "Deschide meniul de personalizare al notificării",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam nu rulează"
            },
            updatebtn: {
                tt: "Actualizare disponibilă"
            },
            kofibtn: "Donează pe Ko-Fi!",
            discordbtn: "Alătură-te pe Discord!",
            githubbtn: "Raportează o problemă pe GitHub!",
            settingstitlelbl: {
                elem: "Setări"
            },
            configuration: {
                elem: "Configurație",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Limbă",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Sistem de operare",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notificări",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Capturi de ecran",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Accesibilitate",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Altele",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versiune"
            },            
            apikeybtn: {
                tt: "Apasă aici pentru a obține cheia API Steam Web"
            },
            apikey: {
                placeholder: "Adăugați cheia API",
                tt: "Cheia API Steam Web asociată contului tău Steam"
            },
            eyebtn: {
                tt: "Comută vizibilitatea cheii API"
            },
            apikeylbl: {
                elem: "Obține cheia API"
            },
            steam64idbtn: {
                tt: "Apasă aici pentru a obține ID-ul Steam64"
            },
            steam64id: {
                placeholder: "Adăugați ID-ul Steam64",
                tt: "ID-ul Steam64 asociat contului tău Steam"
            },
            steam64idlbl: {
                elem: "Obține ID-ul Steam64"
            },
            switchaccountspan: {
                elem: "Comută conturile"
            },
            switchaccountbtn: {
                tt: "Comută între conturile Steam asociate"
            },
            testconnectionlbl: {
                elem: "Testează conexiunea",
                tt: "Testează conexiunea la Steam Web API"
            },
            lang: {
                tt: "Setează limba pentru interfața utilizatorului și notificări"
            },            
            desktop: {
                elem: "Creează scurtătură pe desktop",
                tt: "Creează o scurtătură pe desktop pentru a lansa aplicația",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Pornește odată cu Windows",
                tt: "Rulează aplicația automat la pornirea Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Pornește minimizată",
                tt: "Minimizează aplicația întray-ul sistemului după lansare",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Dezactivează accelerarea hardware",
                tt: "Dezactivează accelerarea hardware pentru fereastra aplicației",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Mod redus",
                tt: "Dezactivează fereastra principală a aplicației pentru a economisi resurse de sistem. Opțiuni minime vor rămâne disponibile prin intermediul pictogramei întray pentru a interacționa cu aplicația",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Procentaj raritate",
                tt: `Numai realizările cu un procentaj global de deblocare mai mic decât acest număr vor fi afișate ca notificări "Rar"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Mod doar sunet",
                tt: "Dezactivează notificările, dar redă sunetul selectat la deblocarea unei realizări",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Afișează toate procentele de deblocare",
                tt: "Afișează procentele globale de deblocare în toate tipurile de notificări",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicare în fereastră externă",
                tt: "Duplică în fereastră externă",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Afișează fereastra de statistici",
                tt: "Afișează fereastra de statistici a realizărilor",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Afișează notificarea "Urmărire în curs"`,
                tt: `Comută notificarea "Urmărire în curs" la lansarea unui joc`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Scurtături Notificări",
                tt: "Setați o tastă rapidă pentru a declanșa Notificări de Test",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Setați o scurtătură pentru a declanșa o Notificare de Test pentru acest tip"
            },
            sctabmain: {
                tt: "Scurtătură Principală Notificare"
            },
            sctabrare: {
                tt: "Scurtătură Rară Notificare"
            },
            sctabplat: {
                tt: "Scurtătură Notificare 100%"
            },
            screenshotmode: {
                tt: "Alege modul pentru capturile de ecran automate ale realizărilor"
            },
            displayscreenshot: {
                elem: "Afișează captura de ecran în notificare",
                tt: "Afișează o previzualizare a capturilor de ecran în notificarea realizării",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Tasta rapidă Steam",
                tt: "Potrivește tasta de captură de ecran a clientului Steam pentru a face capturi de ecran native Steam la deblocarea realizărilor",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Suprapunere notificare principală`
            },
            ovtabrare: {
                tt: `Suprapunere notificare rară`
            },
            ovtabplat: {
                tt: `Suprapunere notificare 100%`
            },
            monitor: {
                elem: "Monitor",
                tt: "Selectează monitorul de utilizat ca sursă pentru capturile de ecran",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Poziție suprapunere",
                tt: "Setează poziția suprapunerii notificării",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Cale",
                tt: "Setează calea unde vor fi salvate capturile de ecran",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Previzualizare",
                tt: `Previzualizează suprapunerea notificării`,
                query: "label"
            },
            noanim: {
                elem: "Dezactivează Animațiile Ferestrelor",
                tt: "Dezactivează animațiile de tranziție în fereastra aplicației",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Activează Suport NVDA",
                tt: "Copiați conținutul notificării în clipboard pentru a fi citit de software-ul de citire a ecranului NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Afișează Sugestiile",
                tt: "Comută sugestiile când plasați cursorul pe elementele aplicației",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Afișează DevTools Pentru Notificări",
                tt: "Deschide panoul DevTools pentru notificări când este declanșat",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Vezi Politica de Confidențialitate",
                tt: "Vezi Politica de confidențialitate a Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Alătură-te canalului beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Deschide jurnalul aplicației",
                tt: "Vizualizați și partajați conținutul jurnalului aplicației",
                query: "label"
            },
            resetbtn: {
                elem: "Resetează aplicația",
                tt: "Șterge toate datele stocate și repornește aplicația",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Pauză/redare animația notificării"
            },
            customiserreplay: {
                tt: "Reia animația notificării"
            },
            customisersavepreset: {
                tt: "Salvează personalizările curente ca un nou preset de notificare"
            },
            tabbtnnext: {
                tt: "Următorul"
            },
            tabbtnprev: {
                tt: "Înapoi"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Preset notificare",
                tt: "Selectați un preset de notificare pentru a personaliza",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animație iconiță rară",
                tt: `Comutați animația fundalului iconiței`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Afișează Toate Detaliile",
                tt: `Afișează toate detaliile disponibile ale notificărilor`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Timp de afișare",
                tt: "Durata de timp pentru care va fi afișată notificarea",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Scară",
                tt: "Mărimea notificării<br><i>* Nu se reflectă în fereastra de previzualizare</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Text personalizat",
                tt: "Afișați un mesaj personalizat în notificare",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Utilizați titlul jocului",
                tt: "Afișați titlul jocului curent în notificare",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Stil fundal",
                tt: "Setați stilul fundalului notificării",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Unghi de gradient",
                tt: "Setați unghiul gradientului de culoare",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Imagine fundal",
                tt: "Selectați un fișier de imagine pentru a seta fundalul notificării",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Luminozitate artă joc",
                tt: "Setați luminozitatea fundalului cu arta jocului",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Rotunjime",
                tt: "Setați rotunjimea colțurilor notificării",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Dimensiune font",
                tt: "Setați scara fontului",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacitate",
                tt: "Setați opacitatea notificării",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Doar fundal",
                tt: "Aplicați doar opacitate fundalului, lăsând textul și imaginile complet opace",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Culori",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Culoare primară",
                tt: "Setați culoarea primară a notificării",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Culoare secundară",
                tt: "Setați culoarea secundară a notificării",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Culoare text",
                tt: "Setați culoarea textului",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Contur text",
                tt: "Aplicați un contur tuturor textelor notificărilor",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Culoare contur",
                tt: "Setați culoarea conturului textului",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Umbră text",
                tt: "Aplicați o umbră tuturor textelor notificărilor",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Culoare umbră",
                tt: "Setați culoarea umbrei textului",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Iconiță",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Rotunjime iconiță",
                tt: "Setați rotunjimea iconiței notificării",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Iconiță Personalizată",
                tt: "Utilizați un fișier de imagine ca iconiță personalizată",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Iconiță Personalizată",
                tt: "Selectați un fișier de imagine pentru a o seta ca iconiță personalizată",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Resetează Pictograma Personalizată`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Iconiță Personalizată 100%",
                tt: `Utilizează un fișier de imagine ca pictogramă personalizată 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Iconiță Personalizată 100%",
                tt: `Selectează un fișier de imagine pentru a-l seta ca pictogramă personalizată 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Resetează pictograma personalizată 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Iconița jocului",
                tt: "Utilizați iconița jocului curent",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Poziție",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Poziție pe ecran",
                tt: "Setați poziția notificării pe ecran",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Poziție personalizată",
                tt: "Utilizați o poziție personalizată pentru notificare",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Setați poziția",
                tt: "Setați o poziție personalizată pentru notificare",
                query: "label"
            },
            animdir: {
                elem: "Direcție animație",
                tt: "Setați direcția animației notificării",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "POLITICA DE CONFIDENȚIALITATE"
            },
            ppusagetitle: {
                elem: "UTILIZAREA DATELOR DIN STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier utilizează <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> de la Valve pentru a obține și afișa date referitoare la contul Steam al utilizatorului, prin intermediul combinației cheie API Steam/ID Steam64 furnizate aplicației de către utilizator. Aceste date includ:`
            },
            ppstats: {
                elem: "Statistici pentru realizări blocate și deblocate"
            },
            ppusername: {
                elem: "Numele dvs. de utilizator Steam"
            },
            ppsteamgames: {
                elem: "Jocurile Steam pe care le-ați jucat"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier poate utiliza în viitor și alte date din Steam Web API pentru a oferi caracteristici suplimentare și actualizări ale aplicației."
            },
            ppkey64title: {
                elem: "UTILIZAREA CHEII API STEAM/ID STEAM64"
            },
            ppauth: {
                elem: "Steam Achievement Notifier necesită introducerea combinației cheie API Steam/ID Steam64 pentru acces autentificat la Steam Web API."
            },
            ppnoauth: {
                elem: "Fără aceste informații, linkurile web (furnizate de Valve pentru a accesa Steam Web API) utilizate pentru a obține date legate de contul Steam al utilizatorului - inclusiv datele despre realizări - nu pot fi accesate."
            },
            ppstoragetitle: {
                elem: "STOCAREA DATELOR DIN STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier stochează temporar date din Steam Web API local pe PC-ul utilizatorului doar în scopul utilizării în cadrul aplicației. Orice stocare temporară a acestor date este destinată exclusiv utilizării de către Steam Achievement Notifier, iar în condiții normale, toate datele non-persistente din Steam Web API vor fi șterse din stocarea locală la închiderea aplicației."
            },
            pppersist: {
                elem: "Datele persistente stocate pe dispozitivul utilizatorului includ doar datele stocate de aplicație în scopul confortului utilizatorului, cum ar fi cheia API Steam Web și ID-ul Steam64 al utilizatorului."
            },
            ppdelete: {
                elem: "Aceste date pot fi șterse manual de către utilizator în orice moment, dacă este necesar. Fișierele create de Steam Achievement Notifier sunt localizate în următorul director:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "În prezent nu este suportat"
            },
            ppcollecttitle: {
                elem: "ABORDAREA PRIVIND COLECTAREA DE DATE"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>niciodată</u> nu va trimite sau stoca datele utilizatorului în afara sistemului de fișiere local al utilizatorului fără permisiunea explicită a acestuia. Aceasta include orice informație obținută prin intermediul Steam Web API pentru utilizarea în cadrul aplicației, inclusiv combinația cheie API Steam/ID Steam64 furnizată aplicației pentru acces la Steam Web API."
            },
            ppconsent: {
                elem: "Prin confirmarea consimțământului și utilizarea ulterioară a funcționalităților existente sau viitoare concepute pentru a trimite informații în mod extern, utilizatorul acordă implicit permisiunea de a face acest lucru. În aceste cazuri, utilizatorul va fi întotdeauna informat cu privire la natura datelor trimise și va fi solicitat să confirme consimțământul de a trimite date în afara aplicației."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier exclude intenționat orice mijloace de acces, vizualizare sau colectare externă a informațiilor furnizate aplicației de către utilizator, dar prin intermediul funcționalităților existente sau viitoare, aplicația poate fi capabilă să trimită date extern în numele utilizatorului, dar numai cu consimțământul acestuia."
            },
            pprequests: {
                elem: "Cererile de acces la date din Steam Web API sunt făcute din cadrul aplicației utilizând metode încorporate, similare funcționalității oferite de browserele web. Aceste cereri conțin combinația cheie API Steam/ID Steam64 a utilizatorului, așa cum este cerut de Steam Web API, dar nu sunt niciodată disponibile sau intenționat interceptate de alte aplicații."
            },
            ppusertitle: {
                elem: "RESPONSABILITATEA UTILIZATORULUI"
            },
            ppsteamtou: {
                elem: `PRIN DESCĂRCAREA ȘI UTILIZAREA ORICĂREI VERSIUNI OFICIAL LANSATE A STEAM ACHIEVEMENT NOTIFIER PRIN <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOZITORIUL OFICIAL GITHUB</span>, DUMNEAVOASTRĂ, UTILIZATORUL, ÎN EXTENSIUNE, VĂ SUPUNEȚI SECȚIUNILOR 7 ȘI 8 ALE <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">TERMENILOR DE UTILIZARE A STEAM WEB API</span>.`
            },
            gamedetails: "Detalii despre joc",
            mustbepublic: "trebuie să fie setat ca Public",            
            nosoundfile: "Implicit (Niciun fișier audio selectat)",
            nosoundfolder: "Implicit (Niciun folder audio selectat)",
            file: "Fișier",
            randomised: "Aleatoriu",            
            audioselectdialog: `Selectați Sunetul ${custom.mode === "file" ? "Fișier" : "Folder"}`,
            imgselectdialog: `Selectați Fișierul Imagine`,
            unsupported: "Fișier neacceptat!",
            novalidaudiofiles: "Nu există fișiere audio valide!",
            nolocate: "Imposibil de localizat fișierul!",
            switchaccountstitle: "Schimbați conturile",
            noaccounts: "Adăugați un cont pentru a începe!",
            connecting: "Conectare...",
            connected: "Conectat",
            testsuccessuser: `Totul este în regulă`,
            testsuccess1: `Asigurați-vă că detaliile jocului dvs. sunt setate pe <span>Public</span> în <a href="${privacysettings}">Setările de confidențialitate Steam</a>`,
            testsuccess2: `Verificați dacă modul de afișare în joc este setat pe <span>Fără margini</span> pentru ca notificările să apară deasupra ferestrei jocului`,
            noapikeytitle: "Nicio cheie API",
            noapikeytxt: "Vă rugăm să introduceți cheia API",
            noapikeyhint: `Faceți clic pe iconița <img src="./icon/key.svg" alt=""> pentru a obține cheia API`,
            nosteam64idtitle: "Niciun ID Steam64",
            nosteam64idtxt: "Vă rugăm să introduceți ID-ul Steam64",
            nosteam64idhint: `Faceți clic pe iconița <img src="./icon/id.svg" alt=""> pentru a obține ID-ul Steam64`,
            invalidapikeytitle: "Cheie API nevalidă!",
            invalidapikeymsg: "Nu se poate accesa Steam Web API cu cheia API furnizată",
            invalidapikeydetail1: "Verificați dacă cheia API este corectă",
            invalidapikeydetail2: "Regenerați o nouă cheie API pentru contul dvs.",
            invalidsteam64idtitle: "ID Steam64 nevalid!",
            invalidsteam64idmsg: "Nu s-a găsit un cont Steam asociat cu ID-ul Steam64 furnizat",
            invalidsteam64iddetail1: "Verificați dacă valoarea ID-ului Steam64 furnizată este valoarea corectă pentru contul dvs. Steam",
            nonetworkfound: "Nu s-a găsit o conexiune de rețea activă",
            connecttonetwork: "Conectați-vă PC-ul la o rețea și încercați din nou",
            testdefaulterrortitle: "A apărut o eroare!",
            testdefaulterrormsg: "A apărut o eroare la conectarea la Steam Web API",
            testdefaulterrordetail1: "Vă rugăm să raportați această problemă pe Discord sau GitHub!",
            sspath: "Selectați Calea Screenshot-ului",
            wronguser: user ? `${user} nu este conectat la Steam!` : "Nu s-au găsit conturi de utilizator asociate!",
            switchuser: "Faceți clic aici pentru a schimba conturile",
            trackingfailed: "Urmărirea a eșuat!",
            checkapplog: "Verificați jurnalul aplicației pentru detalii",
            soon: "Disponibil în curând!",
            gamecomplete: "100% Complet",
            gametitle: "Titlul Jocului",
            achievementunlocked: "Realizare deblocată",
            achievementtitle: "Titlul Realizării",
            allachievements: "Ați deblocat toate realizările!",
            achievementdesc: "Descrierea Realizării",
            show: "Arată",
            quit: "Ieși",
            off: "Dezactivat",
            steamss: "Screenshot în Jocul Steam",
            overlayss: "Screenshot cu Suprapunere de Notificări",
            match: "Personalizare Meci",
            topleft: "Stânga Sus",
            topcenter: "Centru Sus",
            topright: "Dreapta Sus",
            bottomleft: "Stânga Jos",
            bottomcenter: "Centru Jos",
            bottomright: "Dreapta Jos",
            solid: "Solid",
            gradient: "Gradient",
            bgimg: "Imagine de Fundal",
            gameart: "Arta Jocului",
            up: "Sus",
            down: "Jos",
            left: "Stânga",
            right: "Dreapta",  
            tracking: "Urmărire în Curs",
            inuse: "În uz de",
            invalidshortcut: "Scurtătură nevalidă"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Selectați un fișier audio pentru redarea acestuia la deblocarea unei realizări" : "Selectați un folder care conține fișiere audio pentru redarea aleatorie la deblocarea unei realizări")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Iată un jurnal al evenimentelor care au avut loc de la pornirea aplicației la"
            },
            copylbl: {
                elem: "Copiați conținutul jurnalului"
            },
            openlbl: {
                elem: "Generați fișierul jurnalului"
            },
        }        

        return translations
    }
}