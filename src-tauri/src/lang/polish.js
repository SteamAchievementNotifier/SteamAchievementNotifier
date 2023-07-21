export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Brak wykrytego użytkownika",
                tt: "Użytkownik Steam, dla którego obecnie śledzone są osiągnięcia"
            },
            gamelbl: {
                elem: gameName ? gameName : "Brak wykrytej gry",
                tt: "Gra, dla której obecnie śledzone są osiągnięcia"
            },
            previewbtn: {
                tt: "Podgląd wybranego dźwięku"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Domyślny (Nie wybrano pliku dźwiękowego)" : custom.sounddir ? custom.sounddir : "Domyślny (Nie wybrano folderu dźwięków)"
            },              
            soundmodelbl: {
                elem: "Tryb dźwięku:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "plik" : "losowy"
            },
            togglemain: {
                elem: "Główne",
                tt: "Powiadomienie o głównym osiągnięciu"
            },
            togglerare: {
                elem: "Rzadkie",
                tt: "Powiadomienie o rzadkim osiągnięciu"
            },
            toggleplat: {
                elem: "100%",
                tt: "Powiadomienie o osiągnięciu 100%"
            },
            progresscirclewrapper: {
                tt: "Pokaż podgląd dostosowanego powiadomienia"
            },
            testbtnwrapper: {
                elem: "Pokaż testowe powiadomienie",
                tt: "Pokaż podgląd dostosowanego powiadomienia",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Dostosuj...",
                tt: "Otwórz menu dostosowywania powiadomień",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam nie jest uruchomiony"
            },
            updatebtn: {
                tt: "Dostępna aktualizacja"
            },
            kofibtn: "Wesprzyj na Ko-Fi!",
            discordbtn: "Dołącz na Discordzie!",
            githubbtn: "Zgłoś problem na GitHubie!",
            settingstitlelbl: {
                elem: "Ustawienia"
            },
            configuration: {
                elem: "Konfiguracja",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Język",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "System operacyjny",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Powiadomienia",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Zrzuty ekranu",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Dostępność",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Inne",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Rewizja aplikacji"
            },
            apikeybtn: {
                tt: "Kliknij tutaj, aby uzyskać swój klucz API Steam Web"
            },
            apikey: {
                placeholder: "Wprowadź klucz API",
                tt: "Klucz API Steam Web powiązany z Twoim kontem Steam"
            },
            eyebtn: {
                tt: "Przełącz widoczność klucza API"
            },
            apikeylbl: {
                elem: "Uzyskaj klucz API"
            },
            steam64idbtn: {
                tt: "Kliknij tutaj, aby uzyskać swój ID Steam64"
            },
            steam64id: {
                placeholder: "Wprowadź ID Steam64",
                tt: "ID Steam64 powiązany z Twoim kontem Steam"
            },
            steam64idlbl: {
                elem: "Uzyskaj ID Steam64"
            },
            switchaccountspan: {
                elem: "Przełącz konta"
            },
            switchaccountbtn: {
                tt: "Przełącz się między powiązanymi kontami Steam"
            },
            testconnectionlbl: {
                elem: "Testuj połączenie",
                tt: "Przetestuj połączenie z API Steam Web"
            },
            lang: {
                tt: "Ustaw język dla interfejsu użytkownika i powiadomień"
            }, 
            desktop: {
                elem: "Utwórz skrót na pulpicie",
                tt: "Utwórz skrót na pulpicie do uruchamiania aplikacji",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Uruchamiaj wraz z systemem Windows",
                tt: "Automatyczne uruchamianie aplikacji przy starcie systemu Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Uruchom zminimalizowane",
                tt: "Minimalizuj aplikację do zasobnika systemowego po uruchomieniu",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Wyłącz akcelerację sprzętową",
                tt: "Wyłącz akcelerację sprzętową dla okna aplikacji",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Tryb Lite",
                tt: "Wyłącza główne okno aplikacji w celu oszczędzania zasobów systemowych. Minimalne opcje pozostaną dostępne za pośrednictwem ikony w zasobniku systemowym",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Procentowość Rzadkości",
                tt: `Wyświetla tylko osiągnięcia o globalnym wskaźniku odblokowania poniżej tej liczby jako powiadomienia "Rzadkie"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Tryb Tylko Dźwięk",
                tt: "Wyłącz powiadomienia, ale odtwarzaj wybrany dźwięk podczas odblokowywania osiągnięcia",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Pokaż Wszystkie Procenty",
                tt: "Wyświetlaj globalne wskaźniki odblokowania we wszystkich rodzajach powiadomień",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplikuj do Zewnętrznego Okna",
                tt: "Duplikuj do zewnętrznego okna",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Pokaż Okno Statystyk Osiągnięć",
                tt: "Pokaż okno statystyk osiągnięć",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Pokaż powiadomienie "Śledzenie teraz"`,
                tt: `Przełącz powiadomienie "Śledzenie teraz" podczas uruchamiania gry`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Wybierz tryb automatycznych zrzutów ekranu dla osiągnięć"
            },
            displayscreenshot: {
                elem: "Pokaż zrzut ekranu powiadomienia",
                tt: "Wyświetl podgląd zrzutów ekranu w powiadomieniach o osiągnięciach",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Skrót klawiszowy Steam",
                tt: "Dopasuj klawisz w klient Steam do robienia natywnych zrzutów ekranu Steam podczas odblokowywania osiągnięć",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Główny nakładka powiadomień"
            },
            ovtabrare: {
                tt: "Rzadki nakładka powiadomień"
            },
            ovtabplat: {
                tt: "Nakładka powiadomień 100%"
            },
            monitor: {
                elem: "Monitor",
                tt: "Wybierz monitor do użycia jako źródło zrzutu ekranu",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Pozycja",
                tt: "Ustaw pozycję nakładki powiadomień",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Ścieżka",
                tt: "Ustaw ścieżkę, gdzie będą zapisywane zrzuty ekranu",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Podgląd",
                tt: `Podgląd nakładki powiadomień`,
                query: "label"
            },
            noanim: {
                elem: "Wyłącz animacje okna aplikacji",
                tt: "Wyłącz animacje przejść w oknie aplikacji",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Włącz obsługę NVDA",
                tt: "Kopiuj zawartość powiadomień do schowka, aby mogła być odczytana przez oprogramowanie NVDA do odczytu ekranowego",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Pokaż podpowiedzi",
                tt: "Przełącz podpowiedzi podczas najechania na elementy aplikacji",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Pokaż narzędzia developerskie powiadomień",
                tt: "Otwórz panel narzędziowy powiadomień podczas wywoływania",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Zobacz Politykę Prywatności",
                tt: "Zobacz Politykę Prywatności Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Dołącz do Kanału Beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Otwórz Logi Aplikacji",
                tt: "Wyświetl i udostępnij zawartość logu aplikacji",
                query: "label"
            },
            resetbtn: {
                elem: "Resetuj Aplikację",
                tt: "Usuń wszystkie przechowywane dane i uruchom aplikację ponownie",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Zatrzymaj/Odtwórz animację powiadomienia"
            },
            customiserreplay: {
                tt: "Ponownie odtwórz animację powiadomienia"
            },
            customisersavepreset: {
                tt: "Zapisz bieżące dostosowania jako nowy zestaw powiadomień"
            },
            tabbtnnext: {
                tt: "Następne"
            },
            tabbtnprev: {
                tt: "Wstecz"
            },
            notificationpreset: {
                elem: "Zestaw",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Zestaw Powiadomień",
                tt: "Wybierz zestaw powiadomień do dostosowania",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animacja Rzadkiego Ikony",
                tt: `Przełącz animację tła ikony`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Wszystkie szczegóły",
                tt: `Wyświetl wszystkie dostępne szczegóły powiadomień`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Czas Wyświetlania",
                tt: "Czas wyświetlania powiadomienia",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skala",
                tt: "Rozmiar powiadomienia<br><i>*Nie odzwierciedla się w oknie podglądu</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Niestandardowy Tekst",
                tt: "Wyświetl niestandardową wiadomość w powiadomieniu",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Użyj Tytułu Gry",
                tt: "Wyświetl tytuł bieżącej gry w powiadomieniu",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Styl",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Styl Tła",
                tt: "Ustaw styl tła powiadomienia",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Kąt Gradientu",
                tt: "Ustaw kąt gradientu kolorów",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Obraz Tła",
                tt: "Wybierz plik obrazu jako tło powiadomienia",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Jasność Grafiki Gry",
                tt: "Ustaw jasność tła grafiki gry",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Zaokrąglenie",
                tt: "Ustaw zaokrąglenie rogów powiadomienia",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Rozmiar Czcionki",
                tt: "Ustaw skalę czcionki",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Przezroczystość",
                tt: "Ustaw przezroczystość powiadomienia",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Tylko Tło",
                tt: "Zastosuj przezroczystość tylko do tła, pozostawiając tekst i obrazy w pełnej nieprzezroczystości",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Kolory",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Główny Kolor",
                tt: "Ustaw główny kolor powiadomienia",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Dodatkowy Kolor",
                tt: "Ustaw dodatkowy kolor powiadomienia",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Kolor Tekstu",
                tt: "Ustaw kolor tekstu",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Kontur Tekstu",
                tt: "Dodaj kontur do wszystkich tekstów powiadomienia",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Kolor Konturu",
                tt: "Ustaw kolor konturu tekstu",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Cień Tekstu",
                tt: "Dodaj cień do wszystkich tekstów powiadomienia",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Kolor Cienia",
                tt: "Ustaw kolor cienia tekstu",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ikona",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Zaokrąglenie Ikony",
                tt: "Ustaw zaokrąglenie ikony powiadomienia",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Ikony Użytkownika",
                tt: `Użyj pliku obrazu jako niestandardowej ikony`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Ikony Użytkownika",
                tt: `Wybierz plik obrazu jako niestandardową ikonę`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Resetuj niestandardową ikonę`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Ikona Użytkownika 100%",
                tt: `Użyj pliku graficznego jako niestandardowej ikony 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Ikona Użytkownika 100%",
                tt: `Wybierz plik graficzny, aby ustawić jako niestandardową ikonę 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Zresetuj niestandardową ikonę 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Ikony Gry",
                tt: `Użyj ikony bieżącej gry`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "Pozycja",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Pozycja na Ekranie",
                tt: `Ustaw pozycję powiadomienia na ekranie`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Niestandardowej Pozycji",
                tt: "Użyj niestandardowej pozycji dla powiadomienia",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Ustaw Pozycję",
                tt: "Ustaw niestandardową pozycję powiadomienia",
                query: "label"
            },
            animdir: {
                elem: "Kierunek Animacji",
                tt: "Ustaw kierunek animacji powiadomienia",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "POLITYKA PRYWATNOŚCI"
            },
            ppusagetitle: {
                elem: "WYKORZYSTANIE DANYCH ZE STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier korzysta z <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> Valve do pobierania i wyświetlania danych dotyczących konta/kont Steam użytkownika za pomocą klucza API Steam/Steam64 ID podanego przez użytkownika w aplikacji. Dane te obejmują:`
            },
            ppstats: {
                elem: "Statystyki zablokowanych i odblokowanych osiągnięć"
            },
            ppusername: {
                elem: "Twój nick Steam"
            },
            ppsteamgames: {
                elem: "Twoje zagraniczne gry Steam"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier może w przyszłości wykorzystywać dodatkowe dane ze Steam Web API, aby dostarczać dodatkowe funkcje i aktualizacje aplikacji."
            },
            ppkey64title: {
                elem: "WYKORZYSTANIE KLUCZA API STEAM/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier wymaga od użytkownika podania kombinacji klucza API Steam/Steam64 ID w celu uwierzytelnienia dostępu do Steam Web API."
            },
            ppnoauth: {
                elem: "Bez tych informacji, linki internetowe (dostarczane przez Valve do dostępu do Steam Web API), które służą do pobierania danych związanych z kontem/kontami Steam użytkownika, w tym danych dotyczących osiągnięć, nie będą dostępne."
            },
            ppstoragetitle: {
                elem: "PRZECHOWYWANIE DANYCH ZE STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier tymczasowo przechowuje dane ze Steam Web API lokalnie na komputerze użytkownika wyłącznie w celu użytku w aplikacji. Jakakolwiek tymczasowa przechowalnia tych danych ma służyć wyłącznie aplikacji Steam Achievement Notifier, a w normalnych okolicznościach wszelkie dane niepermanente ze Steam Web API zostaną usunięte z lokalnego magazynu po zamknięciu aplikacji."
            },
            pppersist: {
                elem: "Trwałe dane przechowywane na urządzeniu użytkownika obejmują jedynie dane przechowywane przez aplikację dla wygody użytkownika, takie jak klucz API Steam Web i Steam64 ID."
            },
            ppdelete: {
                elem: "Te dane można również ręcznie usunąć w dowolnym momencie, jeśli zajdzie taka potrzeba. Pliki utworzone przez Steam Achievement Notifier znajdują się w następującym katalogu:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Obecnie nieobsługiwane"
            },
            ppcollecttitle: {
                elem: "POZYCJA W ZBIERANIU DANYCH"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>nigdy</u> nie będzie wysyłać ani przechowywać danych użytkownika poza lokalnym systemem plików użytkownika bez jego wyraźnej zgody. Dotyczy to również wszelkich informacji pobranych za pośrednictwem Steam Web API do użytku w ramach aplikacji, w tym kombinacji klucza API Steam/Steam64 ID podanej aplikacji w celu uzyskania dostępu do Steam Web API."
            },
            ppconsent: {
                elem: "Potwierdzając zgodę i korzystając z istniejących lub przyszłych funkcji przeznaczonych do wysyłania informacji na zewnątrz, zgoda jest udzielana przez użytkownika w sposób domyślny. W takich przypadkach użytkownik zawsze zostanie poinformowany o charakterze wysyłanych danych i zostanie poproszony o potwierdzenie zgody na wysłanie danych poza aplikację."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier celowo wyklucza możliwość zewnętrznego dostępu, przeglądania lub zbierania jakichkolwiek informacji podanych aplikacji przez użytkownika, ale za pomocą istniejących lub przyszłych funkcji implementowanych w aplikacji może ona wysyłać dane na zewnątrz w imieniu użytkownika, ale tylko po uzyskaniu zgody użytkownika na to."
            },
            pprequests: {
                elem: "Żądania dostępu do danych z Steam Web API są dokonywane wyłącznie z poziomu aplikacji za pomocą wbudowanych metod, podobnie jak funkcje oferowane przez przeglądarki internetowe. Te żądania zawierają kombinację klucza API Steam/Steam64 ID użytkownika, zgodnie z wymaganiami Steam Web API, ale nie są one celowo udostępniane do użytku ani przechwytu przez inne aplikacje."
            },
            ppusertitle: {
                elem: "ODPOWIEDZIALNOŚĆ UŻYTKOWNIKA"
            },
            ppsteamtou: {
                elem: `PO POBRANIU I UŻYCIU JAKIEJKOLWIEK OFICJALNIE WYDANEJ WERSJI STEAM ACHIEVEMENT NOTIFIER Z WYKORZYSTANIEM <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFICJALNEGO REPOZYTORIUM GITHUB</span>, TY, JAKO UŻYTKOWNIK, ZGADZASZ SIĘ NA PRZESTRZEGANIE SEKCJI 7 I 8 <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">ZASADY UŻYTKOWANIA STEAM WEB API</span>.`
            },
            gamedetails: "Szczegóły gry",
            mustbepublic: "musi być ustawione na Publiczne",            
            nosoundfile: "Domyślny (Nie wybrano pliku dźwiękowego)",
            nosoundfolder: "Domyślny (Nie wybrano folderu dźwiękowego)",
            file: "Plik",
            randomised: "Losowy",            
            audioselectdialog: `Wybierz ${custom.mode === "file" ? "plik dźwiękowy" : "folder dźwiękowy"}`,
            imgselectdialog: `Wybierz plik obrazu`,
            unsupported: "Nieobsługiwany plik!",
            novalidaudiofiles: "Brak prawidłowych plików dźwiękowych!",
            nolocate: "Nie można odnaleźć pliku!",
            switchaccountstitle: "Przełącz konta",
            noaccounts: "Dodaj konto, aby rozpocząć!",
            connecting: "Łączenie...",
            connected: "Połączono",
            testsuccessuser: `Wszystko w porządku`,
            testsuccess1: `Upewnij się, że Twoje <span>Ustawienia gry</span> są ustawione jako <span>Publiczne</span> w <a href="${privacysettings}">Ustawieniach prywatności Steam</a>`,
            testsuccess2: `Sprawdź, czy tryb wyświetlania gry jest ustawiony na <span>Borderless</span>, aby powiadomienia wyświetlały się nad oknem gry`,
            noapikeytitle: "Brak klucza API",
            noapikeytxt: "Wprowadź swój klucz API",
            noapikeyhint: `Kliknij ikonę <img src="./icon/key.svg" alt="">, aby uzyskać swój klucz API`,
            nosteam64idtitle: "Brak identyfikatora Steam64",
            nosteam64idtxt: "Wprowadź swój identyfikator Steam64",
            nosteam64idhint: `Kliknij ikonę <img src="./icon/id.svg" alt="">, aby uzyskać swój identyfikator Steam64`,
            invalidapikeytitle: "Nieprawidłowy klucz API!",
            invalidapikeymsg: "Nie można uzyskać dostępu do Steam Web API za pomocą podanego klucza API",
            invalidapikeydetail1: "Sprawdź, czy klucz API jest poprawny",
            invalidapikeydetail2: "Wygeneruj nowy klucz API dla swojego konta",
            invalidsteam64idtitle: "Nieprawidłowy identyfikator Steam64!",
            invalidsteam64idmsg: "Nie można znaleźć konta Steam powiązanego z podanym identyfikatorem Steam64",
            invalidsteam64iddetail1: "Sprawdź, czy podany identyfikator Steam64 jest prawidłowy dla Twojego konta Steam",
            nonetworkfound: "Nie wykryto aktywnego połączenia sieciowego",
            connecttonetwork: "Podłącz swój komputer do sieci i spróbuj ponownie",
            testdefaulterrortitle: "Wystąpił błąd!",
            testdefaulterrormsg: "Wystąpił błąd podczas łączenia z Steam Web API",
            testdefaulterrordetail1: "Zgłoś ten problem na Discordzie lub GitHubie!",
            sspath: "Wybierz ścieżkę zrzutu ekranu",
            wronguser: user ? `${user} nie jest zalogowany do Steam!` : "Nie znaleziono powiązanych kont użytkownika!",
            switchuser: "Kliknij tutaj, aby przełączyć konta",
            trackingfailed: "Śledzenie nie powiodło się!",
            checkapplog: "Sprawdź dziennik aplikacji, aby uzyskać szczegóły",
            soon: "Już wkrótce!",
            gamecomplete: "100% Ukończono",
            gametitle: "Tytuł gry",
            achievementunlocked: "Odblokowano osiągnięcie",
            achievementtitle: "Tytuł osiągnięcia",
            allachievements: "Odblokowałeś wszystkie osiągnięcia!",
            achievementdesc: "Opis osiągnięcia",
            show: "Pokaż",
            quit: "Wyjdź",
            off: "Wyłącz",
            steamss: "Zrzut ekranu w grze Steam",
            overlayss: "Zrzut ekranu z nakładką powiadomienia",
            match: "Dopasowanie niestandardowe",
            topleft: "Górny lewy",
            topcenter: "Górny środek",
            topright: "Górny prawy",
            bottomleft: "Dolny lewy",
            bottomcenter: "Dolny środek",
            bottomright: "Dolny prawy",
            solid: "Jednolity",
            gradient: "Gradient",
            bgimg: "Obraz tła",
            gameart: "Grafika gry",
            up: "Góra",
            down: "Dół",
            left: "Lewo",
            right: "Prawo",
            tracking: "Obecnie śledzenie"        
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Wybierz plik dźwiękowy do odtwarzania przy odblokowywaniu osiągnięcia" : "Wybierz folder zawierający pliki dźwiękowe do odtwarzania losowo przy odblokowywaniu osiągnięcia")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Oto dziennik zdarzeń od momentu uruchomienia aplikacji o"
            },
            copylbl: {
                elem: "Kopiuj zawartość dziennika"
            },
            openlbl: {
                elem: "Generuj plik dziennika"
            }
        }

        return translations
    }
}