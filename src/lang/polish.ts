export const translations = {
    global: {
        main: "Główny",
        semi: "Pół",
        rare: "Rzadki",
        plat: "100%",
        trophymain: "Brąz",
        trophysemi: "Srebro",
        trophyrare: "Złoto",
        trophyplat: "Platyna",
        test: "Powiadomienia Testowe",
        topleft: "Górny lewy",
        topcenter: "Górny środek",
        topright: "Górny prawy",
        bottomleft: "Dolny lewy",
        bottomcenter: "Dolny środek",
        bottomright: "Dolny prawy",
        ok: "OK",
        preview: "Podgląd",
        save: "Zapisz",
        back: "Wstecz",
        edit: "Edytuj",
        lockedby: "Zablokowane przez $lock",
        settings: "Ustawienia",
        appversion: "Wersja aplikacji",
        image: "Obraz",
        audio: "Audio",
        folder: "Folder",
        font: "Czcionka",
        select: "Wybierz",
        gametitle: "Tytuł gry",
        congrats: "Gratulacje!",
        achievementunlocked: "Osiągnięcie odblokowane",
        gamecomplete: "100% ukończone",
        achievementdesc: "Kliknięto przycisk Pokaż powiadomienie testowe",
        gamecompletedesc: "Odblokowałeś wszystkie osiągnięcia!",
        defaultcustomfont: "Domyślne (Nie wybrano czcionki)",
        defaultsoundfile: "Domyślne (Nie wybrano pliku dźwiękowego)",
        defaultsounddir: "Domyślne (Nie wybrano folderu)",
        nowtracking: "Aktualnie śledzenie osiągnięć dla:",
        nopreview: "Podgląd niedostępny dla natywnego systemu operacyjnego",
        options: "Opcje",
        resetwindow: "Resetuj okno",
        show: "Pokaż",
        exit: "Wyjście",
        donotshowagain: "Nie pokazuj ponownie tego okna dialogowego",
        releasegame: "Zakończ śledzenie gry",
        releasegamesub: [
            `Zrestartuj proces Workera działającego w tle i zakończ śledzenie aktualnej gry`,
            `Wypróbuj tę opcję, jeśli niedawno zamknąłeś grę, ale Steam nadal pokazuje ją jako uruchomioną, lub jeśli Steam Achievement Notifier nadal pokazuje, że śledzi grę, która już została zamknięta`
        ],
        noupdateavailable: "Brak dostępnych aktualizacji",
        latestversion: "Najnowsza wersja zainstalowana",
        missingdeps: "Brakujące zależności",
        restartapp: "Uruchom ponownie aplikację",
        restartappsub: [
            `Jeśli coś nie działa prawidłowo, skorzystaj z tej opcji, aby zamknąć i ponownie otworzyć aplikację`,
            `Jeśli problem nadal występuje po ponownym uruchomieniu aplikacji, rozważ zgłoszenie go za pomocą wbudowanych linków na ekranie głównym`
        ],
        suspend: "Wstrzymaj",
        resume: "Wznów",
        new: "Nowy...",
        nodata: "Brak danych",
        webhookunlockmsg: "$user odblokował osiągnięcie",
        webhookunlockmsgplat: "$user odblokował wszystkie osiągnięcia",
        webhookingame: "w $gamename",
        notconnected: "Niepołączony",
        raloghelp: "Moja gra nie jest wykrywana",
        raenablelog: `Pliki dziennika emulatora`,
        raenablelogsub: [
            `Aby uzyskać dostęp do wewnętrznych zdarzeń gry (takich jak bieżący status gry, informacje o odblokowywaniu osiągnięć itp.), logowanie do zewnętrznego <span class="hl">pliku logu</span> <u>musi być włączone</u> w wybranych emulatorach.<br><br>Wszystkie wybrane emulatory <u>muszą używać tego <span class="hl">pliku logu</span></u> jako wartości <span class="hl">Ścieżka pliku logu</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Ustawienia > Logowanie</span> musi być skonfigurowane z następującymi ustawieniami:
                    <br>
                    <ul>
                        <li><span class="hllb">Szczegółowość logowania</span>: <span class="hlgreen">WŁĄCZONE</span></li>
                        <li><span class="hllb">Poziom logowania interfejsu</span>: <span class="hlgreen">1 (Informacje)</span></li>
                        <li><span class="hllb">Logowanie do pliku</span>: <span class="hlgreen">WŁĄCZONE</span></li>
                        <li><span class="hllb">Znaczniki czasowe dla plików logów</span>: <span class="hlred">WYŁĄCZONE</span></li>
                    </ul>
                    <br>
                    Przy domyślnych ustawieniach instalacji, <span class="hl">"retroarch.log"</span> jest przechowywany w:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Widok > Pokaż konfigurację logów</span> musi być skonfigurowane z następującymi ustawieniami:
                    <br>
                    <ul>
                        <li><span class="hllb">Szczegółowość</span>: <span class="hlgreen">Informacje</span></li>
                        <li><span class="hllb">Wyniki logowania</span> > <span class="hlgreen">Zapisz do pliku</span></li>
                        <li><span class="hllb">Typy logów</span> > <span class="hlgreen">Osiągnięcia (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Przy domyślnych ustawieniach instalacji, <span class="hl">"dolphin.log"</span> jest przechowywany w jednym z następujących miejsc:
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
                    <span class="hl">PCSX2 > Narzędzia > Włącz logowanie do pliku</span> musi być włączone
                    <br>
                    <br>
                    Przy domyślnych ustawieniach instalacji, <span class="hl">"emulog.txt"</span> jest zapisywane w:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> musi zostać <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>pobrane</u></span> i przeniesione do <span class="hl">katalogu instalacyjnego Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Ustawienia > Osiągnięcia > RAIntegration (tylko dla programistów)</span> musi być włączone
                    <br>
                    <br>
                    Korzystając z domyślnych ustawień instalacji, <span class="hl">"RALog.txt"</span> jest zapisywane w:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Ustawienia > Narzędzia deweloperskie > Ogólne > Zapisuj do pliku</span> musi być włączone i skonfigurowane z następującymi ustawieniami:
                    <br>
                    <ul>
                        <li><span class="hllb">Osiągnięcia</span>: <span class="hlgreen">Informacje</span></li>
                    </ul>
                    <br>
                    Przy domyślnych ustawieniach instalacji plik <span class="hl">"log.txt"</span> jest przechowywany w:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Nieobsługiwana wersja Beta",
        betaunsupportedsub: [
            "Wydano nową wersję Steam Achievement Notifier!",
            `<u>Ta wersja Beta nie jest już obsługiwana</u>. Proszę pobrać i zainstalować najnowszą oficjalną wersję przez Github, używając poniższego przycisku <span class="hl">Releases</span>.`,
            "Dziękujemy za testowanie! 💜"
        ],
        betaghreleases: "Wydania",
        checkapplog: "Sprawdź dziennik aplikacji, aby uzyskać szczegóły.",
        workercrash: "Worker uległ awarii!",
        workercrashsub: "Kliknij tutaj, aby ponownie uruchomić Worker i ponowić śledzenie gry"
    },
    app: {
        content: {
            game: "Nie wykryto gry",
            customise: "Dostosuj",
            test: "Pokaż powiadomienie testowe"
        }
    },
    settings: {
        language: {
            title: "Język",
            content: {
                steamlang: "Przetłumacz osiągnięcia na język Steam",
                maxsteamlangretries: "Maksymalna liczba prób tłumaczenia"
            }
        },
        os: {
            title: "System operacyjny",
            content: {
                desktop: "Utwórz skrót na pulpicie",
                startwin: "Uruchom przy logowaniu",
                startmin: "Uruchom zminimalizowany",
                nohwa: "Wyłącz akcelerację sprzętową",
                litemode: "Tryb lekki"
            }
        },
        notifications: {
            title: "Powiadomienia",
            content: {
                rarity: "Procent rzadkości",
                semirarity: "Procent srebra",
                rareonly: "Tylko rzadkie",
                all: "Wszystkie",
                off: "Wyłączone",
                showpercent: "Pokaż procent",
                soundonly: "Tylko dźwięk",
                nowtracking: "Pokaż powiadomienie o śledzeniu",
                nowtrackingscale: "Skala śledzenia",
                nowtrackingpos: "Śledzenie pozycji",
                shortcuts: "Skróty powiadomień",
                noiconcache: "Wyłącz pamięć podręczną ikon",
                webhooks: "Post na serwer Discord",
                webhookurl: `URL Webhook`,
                webhooktypes: "Rodzaje Webhook",
                webhookcaution: `Włączając tę opcję i podając ważny link Webhook Discord, zgadzasz się zrozumieć, że <u>wszystkie informacje o osiągnięciach i grach dla bieżącego użytkownika Steam</u> zostaną opublikowane na wskazanym serwerze Discord za pośrednictwem podanego linku Webhook.<br><br>Jeśli nie chcesz, aby Steam Achievement Notifier publikował te informacje w Twoim imieniu, wyłącz tę opcję.`,
                webhooklaststatus: "Ostatni status",
                webhookspoilers: `Dodaj tag spoiler`,
                webhookappid: `Pokaż AppID`,
                replaynotify: "Powiadomienie o powtórzeniu",
                replaynotifyshortcut: "Skrót klawiszowy do powtórzenia",
                customtrigger: "Niestandardowy Wyzwalacz",
                customtriggershortcut: "Skrót Wyzwalacza",
                customtriggerdelay: "Opóźnienie Wyzwalacza",
                customtriggerusedisplaytime: "Użyj Czasu Wyświetlania",
                trophymode: "Tryb trofeów",
                notifymax: "Maksymalna liczba powiadomień", 
                notifyspace: "Odstęp między powiadomieniami",
                notify1line: "Ogranicz tekst do 1 linii"
            }
        },
        games: {
            title: "Gry",
            content: {
                linkedgames: "Powiązane gry",
                autoreleasegames: "Gry z automatycznym zwalnianiem",
                themeswitch: "Automatyczna zmiana motywów",
                exclusionlist: "Lista wyłączeń",
                inclusionlist: "Lista dołączania",
                listmode: "Tryb listy",
                exclusion: "Wykluczenie",
                inclusion: "Dołączenie"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Zrób zrzut ekranu Steam",
                screenshots: "Dodatkowe media",
                off: "Wyłączone",
                ssonly: "Tylko zrzut ekranu",
                overlay: "Zrzut ekranu z nakładką powiadomienia",
                monitors: "Źródło zrzutu ekranu",
                hdrmode: "Tryb HDR",
                ovpos: "Pozycja nakładki",
                ovmatch: "Dopasuj pozycję dostosowania",
                ovx: "Przesunięcie poziome",
                ovy: "Przesunięcie pionowe",                
                ovpath: "Ścieżka zrzutu ekranu",
                ssdelay: "Opóźnienie zrzutu ekranu",
                notifyimg: "Obrazek powiadomienia",
                imgpath: "Ścieżka obrazu",
                ssenabled: "Włącz",
                ssmode: "Tryb zrzutu ekranu",
                screen: "Ekran",
                window: "Okno",
                rauseemudir: "Zapisz w podfolderze emulatora",
                ssext: "Format zrzutu ekranu",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Dodaj do Steam"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Powiadomienia strumieniowe",
                extwinframerate: "Częstotliwość klatek",
                extwinshow: "Pokaż okno",
                audiosrc: "Źródło dźwięku",
                notify: "Powiadomienie",
                app: "Aplikacja",
                off: "Wyciszony",
                statwin: "Okno statystyk osiągnięć",
                statwinaot: "Zawsze na wierzchu",
                noachievements: "Brak osiągnięć do wyświetlenia",
                startgame: "Rozpocznij grę, aby wyświetlić osiągnięcia!",
                max: "Maksimum",
                custom: "Niestandardowe...",
                statwinshortcut: "Skrót Nakładki",
                gametimerwin: "Timer Ukończenia Gry",
                gametimerwinshortcut: "Skrót Timera",
                gametimerwinaot: "Zawsze na Wierzchu",
                resetgametimer: "Resetuj Timer",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Czy na pewno?</span>
                        <span>Spowoduje to zresetowanie Timera Ukończenia Gry dla bieżącej gry do wartości 00:00:00.000.</span>
                        <span class="noundo">🛑 Tej operacji nie można cofnąć!</span>
                    </div>
                `,
                resetgametimerfailed: "Nie można zresetować timera.",
                resetgametimercomplete: "AppID $appid został już ukończony.",
                extwinnotify: "Pokaż Powiadomienie na Ekranie"
            }
        },
        accessibility: {
            title: "Dostępność",
            content: {
                noanim: "Wyłącz animacje okna aplikacji",
                noupdatedialog: "Wyłącz okno aktualizacji",
                nvda: "Włącz obsługę NVDA",
                tooltips: "Pokaż etykiety narzędzi",
                showsystrayopts: "Pokaż opcje w zasobniku systemowym",
                releaseshortcut: "Skrót do uwolnienia gry",
                noshortcuts: "Wyłącz Skróty Klawiaturowe"
            }
        },
        advanced: {
            title: "Zaawansowane",
            content: {
                pollrate: "Częstotliwość odpytywania",
                initdelay: "Opóźnienie śledzenia",
                releasedelay: "Opóźnienie Wydania",
                maxretries: "Maksymalna liczba prób przetwarzania",
                debug: "Panel debugowania",
                userust: "Alternatywny tryb przetwarzania",
                notifydebug: "Pokaż powiadomienia debugowania",
                workerdebug: "Pokaż DevTools Workera",
                exportachdata: "Eksportuj dane osiągnięć",
                lognum: "Poprzednie pliki dziennika", 
                audiocooldown: "Czas oczekiwania dźwięku",
                usecustomfiles: "Użyj niestandardowych plików aplikacji",
                showcustomfiles: "Pokaż niestandardowe pliki aplikacji",
                appdatadir: "Pokaż folder AppData",
                backup: "Kopia zapasowa",
                backuppath: "Ścieżka kopii zapasowej",
                backupsub: [
                    "Utwórz kopię zapasową zawartości folderu AppData aplikacji w wybranej lokalizacji",
                    "Ta kopia zapasowa będzie punktem przywracania dla bieżącego stanu aplikacji",
                    `Przywróć dowolną wcześniejszą kopię zapasową przez <span class="hl">Ustawienia</span> > <span class="hl">Zaawansowane</span> > <span class="hl">Przywróć</span>`
                ],
                backupfailed: "Nie udało się utworzyć kopii zapasowej.",
                restore: "Przywróć",
                restoresub: [
                    "Przywróć zawartość folderu AppData aplikacji z wcześniejszej kopii zapasowej",
                    `Wybierz plik kopii zapasowej <span class="hl">.sanbak</span>, z którego chcesz przywrócić. Plik ten zostanie zachowany po zakończeniu przywracania`,
                    "❗ Po potwierdzeniu aplikacja uruchomi się ponownie, aby przywrócić wybrany plik kopii zapasowej"
                ],
                restorefailed: "Nie udało się przywrócić kopii zapasowej.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Czas oczekiwania przed zwolnieniem"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatory",
                rauser: "Nazwa użytkownika",
                rakey: "Klucz API",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Ścieżka do pliku dziennika",
                rapercenttype: "Typ procentowy",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Wprowadź ścieżkę do pliku dziennika",
                logfile: "Plik logu",
                status: "Status",
                game: "Gra",
                lastachievement: "ID ostatniego osiągnięcia",
                wait: "Oczekiwanie na emulator",
                idle: "Oczekiwanie na zdarzenie gry",
                start: "Rozpoczynanie gry",
                stop: "Zatrzymywanie gry",
                achievement: "Osiągnięcie odblokowane"
            }
        },
        misc: {
            title: "Różne",
            content: {
                colorprofile: "Profil kolorów",
                checkforupdates: "Sprawdź Aktualizacje",
                log: "Dziennik Aplikację",
                reset: "Resetuj Aplikację"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Ustawienia wstępne",
            content: {
                preset: "Ustawienia powiadomień",
                iconanim: "Animacja Rzadkiego Ikony",
                alldetails: "Pokaż Wszystkie Szczegóły",
                usepercent: "Użyj procenta",
                displaytime: "Czas Wyświetlania",
                scale: "Skala",
                customtext: "Niestandardowy Tekst",
                usegametitle: "Użyj Tytułu Gry",
                customfont: "Niestandardowa Czcionka",
                platcustomtext: "Niestandardowy tekst 100%"
            }
        },
        sound: {
            title: "Dźwięk",
            content: {
                soundmode: "Tryb Dźwięku",
                file: "Plik",
                folder: "Losowy",
                soundfile: "Plik Dźwiękowy",
                sounddir: "Katalog Dźwiękowy",
                volume: "Głośność"
            }
        },
        style: {
            title: "Styl",
            content: {
                bgstyle: "Styl Tła",
                solid: "Jednolite",
                gradient: "Gradient",
                img: "Obraz",
                gameart: "Sztuka Gry",
                gradientangle: "Kąt Gradientu",
                bgimg: "Obraz Tła",
                bgachicon: "Użyj Ikony Osiągnięcia",
                bgimgbrightness: "Jasność",
                brightness: "Jasność",
                blur: "Rozmycie",
                roundness: "Zaokrąglenie",
                fontsize: "Rozmiar Czcionki",
                usecustomfontsizes: "Użyj niestandardowych rozmiarów czcionek",
                unlockmsgfontsize: "Wiadomość odblokowania",
                titlefontsize: "Tytuł",
                descfontsize: "Opis",
                textvspace: "Odstęp między tekstem",
                opacity: "Nieprzezroczystość",
                bgonly: "Tylko Tło",
                glow: "Poświata",
                glowcolor: "Kolor",
                glowsize: "Rozmiar",
                glowx: "Przesunięcie poziome",
                glowy: "Przesunięcie pionowe",
                glowopacity: "Przezroczystość",
                glowanim: "Animacja",
                glowspeed: "Prędkość",
                glowrarity: "Użyj rzadkości",
                glowcolorbronze: "Rzadkość: > $semirarity",
                glowcolorsilver: "Rzadkość: < $semirarity & > $rarity",
                glowcolorgold: "Rzadkość: < $rarity",
                off: "Brak",
                pulse: "Puls",
                double: "Podwójnie",
                focus: "Fokus",
                orbit: "Orbita",
                fluorescent: "Fluorescencyjny",
                rainbow: "Tęcza",
                mask: "Maska",
                maskimg: "Obraz maski",
                useoutline: "Kontur",
                outline: "Typ konturu",
                outlinecolor: "Kolor konturu",
                outlinewidth: "Szerokość konturu",
                dashed: "Kreskowany",
                dotted: "Kropkowany"
            }
        },
        colors: {
            title: "Kolory",
            content: {
                primarycolor: "Główny Kolor",
                secondarycolor: "Wtórny Kolor",
                tertiarycolor: "Kolor Trzeci",
                iconshadowcolor: "Kolor cienia ikony rzadkiej",
                iconanimcolor: "Kolor animacji ikony rzadkiej",
                fontcolor: "Kolor Czcionki",
                usecustomfontcolors: "Użyj niestandardowych kolorów czcionek",
                unlockmsgfontcolor: "Kolor 1",
                titlefontcolor: "Kolor 2",
                descfontcolor: "Kolor 3",
                fontoutline: "Obrys Czcionki",
                fontoutlinecolor: "Kolor Obrysu Czcionki",
                fontoutlinescale: "Skala Obrysu Czcionki",
                fontshadow: "Cień Czcionki",
                fontshadowcolor: "Kolor Cienia Czcionki",
                fontshadowscale: "Skala Cienia Czcionki",
                fontshadowx: "Przesunięcie Poziome",
                fontshadowy: "Przesunięcie Pionowe",
            }
        },
        icons: {
            title: "Ikony",
            content: {
                iconscale: "Skala ikony",
                iconroundness: "Zaokrąglenie Ikony",
                showiconborder: "Pokaż ramkę ikony",
                iconborderimg: "Obraz ramki ikony",
                iconborderpos: "Pozycja ramki",
                iconborderscale: "Skala ramki",
                iconborderx: "Przesunięcie poziome",
                iconbordery: "Przesunięcie pionowe",
                iconborderrarity: "Użyj rzadkości",
                iconborderimgbronze: "Rzadkość: > $semirarity",
                iconborderimgsilver: "Rzadkość: < $semirarity & > $rarity",
                front: "Z przodu",
                back: "Z tyłu",
                plat: "Logo 100%",
                usegameicon: "Użyj Ikony Gry",
                gameicontype: "Typ ikony gry",
                usecustomimgicon: "Użyj niestandardowej ikony",
                customimgicon: "Niestandardowa ikona",
                icon: "Ikona",
                logo: "Logo",
                logoscale: "Skala logo",
                decoration: "Dekoracja",
                decorationscale: "Skala dekoracji",
                showdecoration: "Pokaż Dekorację",
                rarity: "Rzadkość",
                showhiddenicon: "Pokaż Ukrytą Ikonę",
                hiddenicon: "Ukryta Ikona",
                replacelogo: "Zmień Logo"
            }
        },
        position: {
            title: "Pozycja",
            content: {
                pos: "Pozycja Ekranu",
                usecustompos: "Użyj Niestandardowej Pozycji",
                setcustompos: "Ustaw",
                copycustompos: "Zastosuj do Wszystkich",
                resetcustompos: "Resetuj"
            }
        },
        theme: {
            title: "Motyw",
            content: {
                updatetheme: "Aktualizuj Motyw",
                savetheme: "Zapisz Motyw",
                sub: [
                    `Zapisane <span class="hl">Motywy Użytkownika</span> można wybrać z menu <span class="hl">Wybierz Motyw</span> na ekranie głównym.`,
                    `Upewnij się, że <span class="hl">Nazwa Motywu</span> jest <u>unikalna</u> - nazwa pasująca do istniejącego motywu <u>zastąpi poprzedni</u>!`
                ],
                placeholder: "Nazwa Motywu",
                theme: "Motyw",
                importtheme: "Importuj motyw",
                import: "Importuj",
                importsub: [
                    `Importuj <span class="hl">plik motywu</span> stworzony przez użytkownika`,
                    `Importowane <span class="hl">motywy</span> zostaną automatycznie załadowane po pomyślnym imporcie i mogą być wybrane z menu <span class="hl">Wybierz motyw</span>`,
                ],
                importidle: `Wybierz <span class="hl">plik motywu</span> do zaimportowania`,
                importcopied: `Motyw został pomyślnie skopiowany`,
                importrenamed: `Motyw został pomyślnie zmieniony nazwę`,
                importextracted: `Motyw został pomyślnie rozpakowany`,
                importrewriting: `Przepisywanie ścieżek plików motywu...`,
                importconverting: `Konwertowanie motywu...`,
                importcreating: `Tworzenie motywu...`,
                importdone: `Motyw został pomyślnie zaimportowany`,
                importfailed: `Błąd podczas importowania wybranego pliku motywu!`,
                exporttheme: "Eksportuj motyw",
                export: "Eksportuj",
                exporterrortitle: "Błąd eksportu",
                exporterrorsub: [
                    "Wystąpił błąd podczas próby eksportu wybranego motywu",
                    `Spróbuj zapisać bieżący motyw (<i>poprzez <span class="hl">Zapisz motyw</span></i>) i spróbuj ponownie eksportować`,
                    `Jeśli problem nadal występuje, skopiuj poniższy błąd i zgłoś go za pomocą przycisków linków na <span class="hl">Ekranie głównym</span>`
                ],
                synctheme: "Synchronizuj motyw",
                syncedwith: "Synchronizowane z",
                themeselect: "Wybrany motyw",
                copytheme: "Kopiuj motyw",
                copythemesub: "Wybierz typ(y) powiadomień, do których chcesz skopiować wybrany motyw"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Oto co wydarzyło się od uruchomienia aplikacji",
            copylog: "Skopiuj Zawartość Dziennika"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Czy na pewno?</span>
                    <span>Wszystkie wcześniej skonfigurowane dane, <u>w tym Dostosowania</u>, zostaną zresetowane do domyślnych wartości.</span>
                    <span>🛑 Tej operacji nie można cofnąć!</span>
                </div>
            `,
            reset: "Resetuj"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier napotkał problem i musi zostać zamknięty.",
            details: "Oto szczegóły błędu:",
            sub: "Kliknij poniższe przyciski, aby zgłosić ten problem za pomocą preferowanej platformy.",
            report: "Zgłoś",
            log: "Dziennik Aplikacji",
            exit: "Wyjdź"
        }
    },    
    tooltips: {
        game: "Gra, dla której obecnie śledzone są osiągnięcia",
        usertheme: "Wybierz wcześniej zapisany motyw",
        customise: "Dostosuj powiadomienia o osiągnięciach",
        test: "Pokaż powiadomienie testowe, wraz z wszelkimi dostosowaniami",
        kofi: "Wesprzyj na Ko-Fi!",
        discord: "Dołącz na Discord!",
        github: "Zgłoś problem",
        lang: "Wybierz język interfejsu użytkownika używany w aplikacji",
        steamlang: `Spróbuj załadować tłumaczenia znajdujące się w plikach aplikacji Steam, aby wyświetlić informacje o osiągnięciach w języku wybranym przez użytkownika w kliencie Steam<br><br><span class="ttdesc">Ta opcja próbuje znaleźć tłumaczenia w pliku JSON przechowywanym w danych aplikacji Steam. Jeśli nie można znaleźć tłumaczenia dla aktualnego osiągnięcia, zostaną wyświetlone informacje o osiągnięciu pobrane z Steamworks.</span>`,
        maxsteamlangretries: `Liczba prób (co 100 ms) w celu znalezienia ważnych tłumaczeń dla aktualnego osiągnięcia<br><br><span class="ttdesc">Steam obecnie przechowuje tylko niewielką ilość danych o osiągnięciach w pliku JSON powiązanym z każdą grą. Wszystkie osiągnięcia, które nie znajdują się w tym pliku, zostaną dodane po odblokowaniu osiągnięcia.<br><br>Ponieważ dodanie nowych danych może zająć trochę czasu, zwiększenie tej wartości zwiększy prawdopodobieństwo znalezienia danych tłumaczenia dla aktualnego osiągnięcia, ale może również opóźnić wyświetlanie powiadomienia na ekranie o czas określony przez to ustawienie.<br><br>Jeśli nie można znaleźć ważnych danych tłumaczenia dla aktualnego osiągnięcia, tłumaczenie powróci do języka określonego w Steamworks.</span>`,
        desktop: "Przełącz skrót na pulpicie, aby uruchomić aplikację",
        startwin: "Uruchom Steam Achievement Notifier automatycznie po zalogowaniu",
        startmin: "Po uruchomieniu ukryj okno interfejsu użytkownika aplikacji, aż zostanie otwarte z System Tray",
        nohwa: `Wyłącz akcelerację sprzętową, co może poprawić wydajność na systemach z ograniczonymi zasobami lub systemach bez dedykowanej karty graficznej<br><br><span class="ttdesc">Aplikacja zostanie ponownie uruchomiona po włączeniu/wyłączeniu tej opcji</span>`,
        litemode: "Wyłącz wszystkie interaktywne elementy interfejsu użytkownika, zapewniając jednocześnie ograniczoną funkcjonalność aplikacji za pomocą ikony System Tray. Może poprawić wykorzystanie zasobów przez aplikację",
        rarity: `Procent, przy którym wyzwalane są powiadomienia o rzadkich osiągnięciach.<br><br>Każde osiągnięcie z procentem odblokowania powyżej tej wartości będzie wyświetlane jako główne powiadomienie<br><br><span class="ttdesc">Jeśli włączony jest <span class="hl">Tryb trofeów</span>, każde osiągnięcie z procentem odblokowania powyżej tej wartości będzie zamiast tego wyświetlane jako powiadomienie srebrne</span>`,
        semirarity: `Procent, przy którym wyświetlane są elementy powiadomień "Srebrne" (np. <span class="hl">Odznaki rzadkości</span>, <span class="hl">Dekoracje</span> itp.).<br><br>Każde osiągnięcie z procentem odblokowania poniżej (lub równym) tej wartości i powyżej wartości <span class="hl">Procent rzadkości</span> wyświetli elementy powiadomień skonfigurowane dla rzadkości "Srebrnych".<br><br>Każde osiągnięcie z procentem odblokowania powyżej tej wartości wyświetli elementy powiadomień skonfigurowane dla rzadkości "Brązowych"<br><br><span class="ttdesc">Jeśli włączony jest <span class="hl">Tryb trofeów</span>, każde osiągnięcie z procentem odblokowania powyżej tej wartości będzie zamiast tego wyświetlane jako powiadomienie brązowe</span>`,
        showpercent: "Wyświetl procent odblokowania osiągnięcia w powiadomieniu dla wybranych typów",
        soundonly: "Wyłącz powiadomienia, odtwarzając tylko dźwięki ustawione za pomocą Customiser",
        extwin: "Utwórz okno, które duplikuje wszystkie powiadomienia aktualnie wyświetlane na ekranie. To okno może zostać dodane jako źródło przechwytywania okna do użycia w oprogramowaniu do streamingu, takim jak OBS",
        extwinframerate: "Ustaw docelową częstotliwość klatek dla powiadomień strumieniowych",
        extwinshow: `Przełącz widoczność okna Powiadomień Streamingu<br><br><span class="ttdesc">Gdy okno jest aktywne na pasku zadań, przytrzymaj klawisz <code class="ttcode">Ctrl</code>, aby wyświetlić jego aktualną lokalizację</span>`,
        audiosrc: "Wybierz źródło dźwięku generowanego przez aplikację (lub wyłącz)",
        nowtracking: "Wyświetl powiadomienie informujące użytkownika, że śledzone są osiągnięcia dla uruchomionej gry",
        nowtrackingscale: `Ustaw rozmiar powiadomienia o śledzeniu`,
        nowtrackingpos: `Ustawienie pozycji powiadomienia o śledzeniu`,
        shortcuts: "Wywołaj powiadomienie testowe za pomocą skrótu klawiaturowego. Skróty można dostosować dla każdego typu powiadomienia",
        noiconcache: `Wyłącza buforowanie ikon osiągnięć podczas uruchamiania gier.<br><br><span class="ttdesc">Może to znacząco poprawić wydajność aplikacji podczas uruchamiania gier i rozwiązać problemy z śledzeniem gier, które mają dużą liczbę osiągnięć. Jednakże w rzadkich przypadkach wyłączenie buforowania ikon może skutkować brakiem ikon osiągnięć w powiadomieniach</span>`,
        steamss: "Zrób zrzut ekranu Steam po odblokowaniu osiągnięcia",
        screenshots: "Wybierz rodzaj dodatkowych mediów do utworzenia podczas wyświetlania powiadomienia",
        monitors: "Monitor, który zostanie przechwycony podczas robienia zrzutu ekranu",
        hdrmode: `Wykonuj zrzuty ekranu za pomocą metody kompatybilnej z monitorami obsługującymi technologię High Dynamic Range (HDR)`,
        ovpos: "Pozycja nakładki powiadomienia na zrzucie ekranu",
        ovmatch: "Dopasuj pozycję ekranu ustawioną w Customiser dla tego typu powiadomienia",
        ovpath: "Lokalizacja, w której będą zapisywane zrzuty ekranu generowane przez tę opcję",
        ssdelay: "Dodaj opóźnienie od wystąpienia powiadomienia do wykonania zrzutu ekranu",
        sspreview: "Pokaż podgląd, jak będzie wyglądał zapisany zrzut ekranu",
        noanim: "Wyłącz wszystkie animacje okna aplikacji i efekty przejścia",
        noupdatedialog: `Uniemożliwia automatyczne wyświetlanie i ustawienie w trybie pierwszoplanowym okna dialogowego <span class="hl">Dostępna aktualizacja</span><br><br><span class="ttdesc">Okno dialogowe nadal można otworzyć, klikając przycisk aktualizacji, gdy jest dostępny</span>`,
        nvda: "Włącz kopiowanie informacji o osiągnięciu do schowka po odblokowaniu osiągnięcia, aby można je było odczytać za pomocą oprogramowania czytnika ekranu, takiego jak NVDA",
        tooltips: "Wyświetl podpowiedzi po najechaniu na określone elementy interfejsu użytkownika",
        colorprofile: `Wymusza renderowanie wszystkich okien aplikacji przy użyciu wybranego profilu kolorów<br><br><span class="ttdesc">Wymaga ponownego uruchomienia aplikacji</span>`,
        pollrate: `Ustaw interwał aktualizacji danych o osiągnięciach podczas gry<br><br><span class="ttdesc">Wydajność może wzrosnąć/zmaleć w zależności od wartości lub sprzętu systemowego. Wyższe wartości zazwyczaj prowadzą do mniejszego obciążenia systemu, ale mogą opóźniać powiadomienia</span>`,
        initdelay: `Ustaw opóźnienie między wykryciem bieżącego <span class="hl">AppID</span> a rozpoczęciem śledzenia procesów/osiągnięć<br><br><span class="ttdesc">Zwiększenie tej wartości może zapobiec sytuacjom, w których Steam nie może uruchomić aktualnej gry (ze względu na inicjalizację aplikacji w Steamworks przed uruchomieniem gry)</span><br><br><span class="ttdesc">Alternatywnie, zwiększenie tej wartości może być również używane do pominięcia nieprawidłowego wykrywania procesów przed uruchomieniem gry</span>`,
        releasedelay: `Ustaw, jak długo proces Worker w tle czeka przed ponownym uruchomieniem po zwolnieniu bieżącej gry. Wpływa zarówno na automatyczne śledzenie procesów, jak i Gry z automatycznym zwalnianiem<br><br><span class="ttdesc">Pozwala na dłuższy czas, aby Steamworks został w pełni zwolniony z aplikacji. Zwiększenie tej wartości może zapobiec nietypowemu zachowaniu, takiemu jak śledzenie wcześniej zamkniętej gry</span>`,
        maxretries: `Ustaw maksymalną liczbę prób powiązania uruchomionego procesu z wykrytym AppID. Wpływa zarówno na automatyczne śledzenie procesów, jak i Gry z automatycznym zwalnianiem<br><br><span class="ttdesc">Próby są podejmowane raz na sekundę. Jeśli uruchomiony proces nie zostanie powiązany z bieżącym AppID po tej liczbie prób, zostanie zwrócony nieprawidłowy proces. W takich przypadkach grę należy zwolnić ręcznie przez Zasobnik systemowy > Opcje > Zwolnij grę</span>`,
        debug: "Otwórz panel debugowania, który wyświetla szczegółowe informacje o śledzeniu procesów",
        userust: "Użyj alternatywnej funkcji opartej na Rust, aby sprawdzić, czy śledzone procesy gry są obecnie uruchomione na systemie. Gdy nie jest zaznaczone, zostanie użyta domyślna kontrola procesów oparta na NodeJS.",
        notifydebug: "Utwórz okno narzędzi deweloperskich dla wszystkich powiadomień. Przydatne do debugowania/problemów z powiadomieniami",
        workerdebug: "Utwórz okno DevTools dla procesu Worker. Przydatne do debugowania/rozwiązywania problemów ze śledzeniem gier",
        usecustomfiles: "Włącza ładowanie niestandardowych plików przez powiadomienia. Ostrożność jest zalecana dla zwykłych użytkowników",
        showcustomfiles: "Otwórz lokalizację niestandardowych plików",
        log: "Otwórz okno dziennika aplikacji, które wyświetla informacje o działalności procesu, ostrzeżenia i błędy",
        reset: "Usuń wszystkie dane konfiguracyjne i uruchom aplikację ponownie",
        playback: "Wstrzymaj/wznów animację podglądu powiadomienia",
        replay: "Uruchom ponownie animację podglądu powiadomienia",
        preset: "Wybierz predefiniowany układ powiadomienia do dostosowania",
        iconanim: "Przełącz obramowanie i animację ikony Rzadkiego osiągnięcia",
        alldetails: "Wyświetl wszystkie elementy tekstowe w powiadomieniu, w tym te domyślnie ukryte dla tego predefiniowanego układu",
        usepercent: "Pokaż procent odblokowania osiągnięcia zamiast wartości XP/S",
        displaytime: "Ustaw liczbę sekund, przez które będzie wyświetlane powiadomienie",
        scale: "Zwiększ lub zmniejsz rozmiar powiadomienia",
        customtext: `Ustaw niestandardową wiadomość wyświetlaną w powiadomieniu<br><br><span class="ttdesc">Ta opcja będzie ukryta, gdy Customiser > Ustawienie wstępne > Elementy powiadomień > Wiadomość odblokowania jest wyłączona</span>`,
        usegametitle: "Wyświetl tytuł bieżącej gry w powiadomieniu",
        customfont: "Wczytaj niestandardową czcionkę do użycia w powiadomieniu",
        soundmode: "Wybierz pojedynczy plik dźwiękowy lub losowo wybrany plik dźwiękowy z folderu zawierającego wiele plików dźwiękowych, gdy wystąpi powiadomienie",
        soundfile: "Wybierz plik dźwiękowy do odtwarzania przy wystąpieniu powiadomienia",
        sounddir: "Wybierz folder, z którego zostanie losowo wybrany plik dźwiękowy przy wystąpieniu powiadomienia",
        volume: "Ustaw głośność odtwarzania pliku dźwiękowego",
        preview: "Podgląd wybranego pliku dźwiękowego lub pliku dźwiękowego losowo wybranego z folderu",
        bgstyle: "Wybierz styl tła powiadomienia",
        gradientangle: "Ustaw kąt gradientu",
        bgimg: "Wczytaj plik obrazu do użycia jako tło powiadomienia",
        bgachicon: "Użyj ikony odblokowanego osiągnięcia jako tła powiadomienia",
        bgimgbrightness: "Ustaw jasność obrazu używanego jako tło powiadomienia",
        brightness: "Ustaw jasność grafiki gry używanej jako tło powiadomienia",
        blur: "Ustaw poziom rozmycia stosowanego do tła powiadomienia",
        roundness: "Ustaw zaokrąglenie krawędzi powiadomienia",
        fontsize: "Ustaw rozmiar czcionki używanej w powiadomieniu",
        opacity: "Ustaw ogólną przezroczystość powiadomienia",
        bgonly: "Ustaw tylko przezroczystość tła powiadomienia, zachowując inne elementy w pełnej przezroczystości",
        glow: "Włącz efekt poświaty otaczający powiadomienie",
        glowcolor: "Ustaw kolor efektu poświaty",
        glowsize: "Ustaw rozmiar efektu poświaty",
        glowx: "Ustawienie przesunięcia poziomego efektu świetlnego",
        glowy: "Ustawienie przesunięcia pionowego efektu świetlnego",
        glowopacity: "Ustawienie przeźroczystości efektu świetlnego",
        glowanim: "Wybierz predefiniowaną animację do zastosowania do efektu poświaty",
        glowspeed: "Ustaw prędkość animacji stosowanej do efektu poświaty",
        glowrarity: "Zmienia kolor efektu poświaty na podstawie rzadkości odblokowanego osiągnięcia",
        glowcolorbronze: "Kolor poświaty wyświetlany, gdy procent odblokowania jest > $semirarity",
        glowcolorsilver: "Kolor poświaty wyświetlany, gdy procent odblokowania jest < $semirarity i > $rarity",
        glowcolorgold: "Kolor poświaty wyświetlany, gdy procent odblokowania wynosi < $rarity",
        mask: "Włącz maskowanie części powiadomienia za pomocą niestandardowego obrazu",
        maskimg: `Załaduj plik obrazu, który ma być używany jako maska<br><br><span class="ttdesc">W CSS, <code class="ttcode">mask-mode: alpha</code> działa w sposób przeciwny do oczekiwanego - obszary przezroczystości w pliku obrazu zostaną ukryte, a obszary czarne/szare pozwolą na widoczność elementów poniżej</span>`,
        useoutline: "Pokaż obrys wokół powiadomienia",
        outline: "Wybierz typ konturu, który ma być wyświetlany wokół powiadomienia",
        outlinecolor: "Ustaw kolor konturu wokół powiadomienia",
        outlinewidth: "Ustaw szerokość konturu wokół powiadomienia",
        primarycolor: "Ustaw główny kolor powiadomienia",
        secondarycolor: "Ustaw drugi kolor powiadomienia",
        tertiarycolor: "Ustaw trzeci kolor powiadomienia",
        fontcolor: "Ustaw kolor wszystkich tekstów wyświetlanych w powiadomieniu",
        fontoutline: "Dodaj obrys do wszystkich tekstów wyświetlanych w powiadomieniu",
        fontoutlinecolor: "Ustaw kolor obrysu tekstu",
        fontoutlinescale: "Ustaw grubość obrysu tekstu",
        fontshadow: "Dodaj cień do wszystkich tekstów wyświetlanych w powiadomieniu",
        fontshadowcolor: "Ustaw kolor cienia tekstu",
        fontshadowscale: "Ustaw grubość cienia tekstu",
        fontshadowx: "Przesuwa pozycję cienia tekstu poziomo",
        fontshadowy: "Przesuwa pozycję cienia tekstu pionowo",
        iconroundness: "Ustaw zaokrąglenie ikony osiągnięcia/gry wyświetlanej w powiadomieniu",
        plat: "Wczytaj plik obrazu do użycia jako ikona 100%",
        usegameicon: "Zamień ikonę odblokowanego osiągnięcia na ikonę aktualnej gry",
        gameicontype: `Wybierz typ obrazu, który ma być wyświetlany jako ikona gry`,
        usecustomimgicon: "Zamień ikonę odblokowanego osiągnięcia na niestandardowy plik obrazu",
        customimgicon: "Załaduj plik obrazu, który będzie używany jako niestandardowa ikona",
        showhiddenicon: "Wyświetl obraz wskazujący, że osiągnięcie jest ukryte w powiadomieniu",
        hiddenicon: "Załaduj plik obrazu, aby zastąpić ukrytą ikonę osiągnięcia",
        logo: "Wczytaj plik obrazu, aby zastąpić ikonę Logo",
        decoration: "Wczytaj plik obrazu, aby zastąpić ikonę Dekoracji",
        showdecoration: "Przełącz widoczność ikony Dekoracji",
        replacelogo: "Zmień ikonę loga w powiadomieniu na wybraną dekorację",
        pos: "Ustaw pozycję powiadomienia na ekranie",
        usecustompos: "Włącz niestandardowe pozycjonowanie powiadomienia",
        setcustompos: "Ustaw niestandardową pozycję powiadomienia",
        copycustompos: "Zastosuj niestandardową pozycję do wszystkich pozostałych typów powiadomień",
        resetcustompos: "Zresetuj pozycję powiadomienia do domyślnej niestandardowej pozycji",
        updatetheme: "Aktualizuj bieżący Motyw z wybranymi opcjami dostosowania",
        savetheme: "Zapisz wszystkie skonfigurowane opcje dostosowania jako nowy motyw",
        visibilitybtn: "Przełącz widoczność elementu w niestandardowych podglądach i testowych powiadomieniach",
        delbtn: "Zresetuj element do domyślnej wartości",
        imgpath: "Lokalizacja, w której będą przechowywane obrazy powiadomień generowane przez tę opcję",
        ssenabled: "Włącz lub wyłącz generowanie multimediów dla tego typu",
        checkforupdates: `Sprawdź, czy na GitHubie została wydana nowa wersja aplikacji. Jeśli aktualizacja jest dostępna, zostanie automatycznie pobrana i zainstalowana po potwierdzeniu w oknie dialogowym <span class="hl">Aktualizacja dostępna</span>`,
        linkedgames: `Pomiń <span class="hl">SANWatcher</span> dla określonych gier Steam<br><br><span class="ttdesc">Ta opcja powinna być używana wyłącznie w bardzo specyficznych sytuacjach. W normalnych okolicznościach użytkownicy nie powinni z niej korzystać!</span>`,
        autoreleasegames: `Pomiń <span class="hl">automatyczne śledzenie procesów</span> dla określonych gier Steam<br><br><span class="ttdesc">Ta opcja powinna być używana wyłącznie w bardzo specyficznych sytuacjach. W normalnych okolicznościach użytkownicy nie powinni z niej korzystać!</span>`,
        exclusionlist: `Zapobieganie śledzeniu osiągnięć w konkretnych grach na platformie Steam przez aplikację<br><br><span class="ttdesc">Ta opcja powinna być używana tylko w bardzo konkretnych scenariuszach. Użytkownicy nie powinni potrzebować jej w normalnych warunkach!</span>`,
        inclusionlist: `Zablokuj śledzenie wszystkich gier Steam przez aplikację, chyba że zostały określone<br><br><span class="ttdesc">Ta opcja powinna być używana tylko w bardzo specyficznych przypadkach. Użytkownicy nie powinni jej potrzebować w normalnych okolicznościach!</span>`,
        ovx: "Przesuń powiadomienie wyświetlane na zrzucie ekranu poziomo",
        ovy: "Przesuń powiadomienie wyświetlane na zrzucie ekranu pionowo",
        importtheme: `Importuj dostosowania za pomocą <span class="hl">pliku motywu</span> stworzonego przez użytkownika`,
        exporttheme: `Eksportuj aktualnie wybrany <span class="hl">motyw</span> w celu udostępnienia<br><br><span class="ttdesc">Przed próbą eksportu upewnij się, że wybrany <span class="hl">motyw</span> jest zaznaczony (za pomocą menu <span class="hl">Wybierz motyw</span>). Upewnij się również, że dostosowania zostały zapisane w wybranym <span class="hl">motywie</span> (za pomocą menu <span class="hl">Zapisz motyw</span>)<br><br><u>Wszelkie dostosowania niezapisane w bieżącym <span class="hl">motywie</span> nie zostaną wyeksportowane!</u></span>`,
        webhooks: "Użyj URL Webhook, aby publikować na serwerze Discord za każdym razem, gdy osiągnięcie zostanie odblokowane",
        webhookmain: `Przełącz, czy informacje o osiągnięciach mają być wysyłane na serwer Discord po odblokowaniu osiągnięcia $main`,
        webhooksemi: `Przełącz, czy informacje o osiągnięciach mają być wysyłane na serwer Discord po odblokowaniu osiągnięcia $semi`,
        webhookrare: "Przełącz, czy informacje o osiągnięciach mają być wysyłane na serwer Discord po odblokowaniu osiągnięcia $rare",
        webhookplat: "Przełącz, czy informacje o osiągnięciach mają być wysyłane na serwer Discord po odblokowaniu osiągnięcia $plat",
        webhooktest: "Przełącz, czy informacje testowe mają być wysyłane na serwer Discord, gdy powiadomienia testowe jakiegokolwiek typu zostaną wywołane",
        webhookurl: `Ustaw <span class="hl">URL Webhook</span> dla wybranego serwera Discord<br><br><span class="ttdesc">URL Webhook służy do publikowania na serwerze/kanale Discord w imieniu użytkownika lub aplikacji. Aby skonfigurować nowy Webhook dla serwera Discord, użytkownik musi mieć rolę na wybranym serwerze, która pozwala na tworzenie Webhooków<br><br><u>URL Webhook jest wymagany do korzystania z tej opcji</u><br><br>Więcej informacji znajdziesz w oficjalnej dokumentacji Discorda</span>`,
        webhookspoilers: `Dodaj tag spoiler do "Ukrytych" osiągnięć podczas publikowania na Discordzie`,
        webhookappid: "Pokaż AppID aktualnej gry w stopce osadzenia webhooka",
        unlockmsg: "Ustaw położenie wiadomości odblokowania/tekstów niestandardowych w $type",
        title: "Ustaw położenie tytułu osiągnięcia w $type",
        desc: "Ustaw położenie opisu osiągnięcia w $type",
        notification: "powiadomienie",
        screenshot: "zrzut ekranu",
        percentpos: "Ustaw położenie procentu rzadkości w $type",
        sspercentpos: "Ustaw położenie procentu rzadkości w $type",
        hiddeniconpos: "Ustaw położenie ikony ukrytego/tajnego osiągnięcia w $type",
        sshiddeniconpos: "Ustaw położenie ikony ukrytego/tajnego osiągnięcia w $type",
        decorationpos: "Ustaw położenie elementu dekoracyjnego w $type",
        ssdecorationpos: "Ustaw położenie elementu dekoracyjnego w $type",
        percentbadge: "Wyświetl procent odblokowania w odznace umieszczonej nad ikoną osiągnięcia/gry",
        sspercentbadge: "Wyświetl procent odblokowania w odznace umieszczonej nad ikoną osiągnięcia/gry",
        percentbadgepos: "Ustaw pozycję odznaki",
        sspercentbadgepos: "Ustaw pozycję odznaki",
        percentbadgecolor: "Ustaw kolor tła odznaki",
        sspercentbadgecolor: "Ustaw kolor tła odznaki",
        percentbadgefontcolor: "Ustaw kolor czcionki odznaki",
        sspercentbadgefontcolor: "Ustaw kolor czcionki odznaki",
        percentbadgefontsize: "Ustaw rozmiar odznaki",
        sspercentbadgefontsize: "Ustaw rozmiar odznaki",
        percentbadgeroundness: "Ustaw zaokrąglenie odznaki",
        sspercentbadgeroundness: "Ustaw zaokrąglenie odznaki",
        percentbadgex: "Przesuń pozycję elementu odznaki w poziomie",
        sspercentbadgex: "Przesuń pozycję elementu odznaki w poziomie",
        percentbadgey: "Przesuń pozycję elementu odznaki w pionie",
        sspercentbadgey: "Przesuń pozycję elementu odznaki w pionie",
        percentbadgeimg: "Wyświetl ikonę opartą na rzadkości jako element odznaki",
        sspercentbadgeimg: "Wyświetl ikonę opartą na rzadkości jako element odznaki",
        percentbadgeimgbronze: "Ikona odznaki wyświetlana, gdy procent odblokowania jest > $semirarity",
        sspercentbadgeimgbronze: "Ikona odznaki wyświetlana, gdy procent odblokowania jest > $semirarity",
        percentbadgeimgsilver: "Ikona odznaki wyświetlana, gdy procent odblokowania jest < $semirarity i > $rarity",
        sspercentbadgeimgsilver: "Ikona odznaki wyświetlana, gdy procent odblokowania jest < $semirarity i > $rarity",
        percentbadgeimggold: "Ikona odznaki wyświetlana, gdy procent odblokowania jest < $rarity",
        sspercentbadgeimggold: "Ikona odznaki wyświetlana, gdy procent odblokowania jest < $rarity",
        percentbadgeimgplat: "Ikona odznaki wyświetlana, gdy wszystkie osiągnięcia zostały odblokowane",
        sspercentbadgeimgplat: "Ikona odznaki wyświetlana, gdy wszystkie osiągnięcia zostały odblokowane",
        resetpbimgs: "Przywróć wszystkie ikony odznak do domyślnych",
        elemsmatch: `Dopasuj ustawienia elementów powiadomienia ustawione w dostosowywaczu dla tego typu powiadomienia<br><br><span class="ttdesc">Niektóre domyślne powiadomienia mogą nie być w stanie w pełni dopasować ustawień dostosowywacza z powodu różnic między układami powiadomień opartymi na ekranie i zrzutach ekranu</span>`,
        themeswitch: `Automatycznie przełączaj się na dowolny zapisany <span class="hl">motyw</span>, gdy wykryte jest konkretne gra`,
        userthemesync: `Synchronizuj dostosowania w wybranym <span class="hl">motywie</span> dla wszystkich innych typów powiadomień`,
        showsystrayopts: `Wyświetl wszystkie opcje zazwyczaj znajdujące się w <span class="hl">Zasobniku systemowym</span> > <span class="hl">Opcje</span> w <span class="hl">Ustawieniach</span> > <span class="hl">Różne</span>`,
        releaseshortcut: "Uwolnij aktualnie śledzoną grę za pomocą określonego skrótu klawiaturowego",
        themeselect: "Wybierz wcześniej zapisany motyw",
        statwin: `Wyświetl konfigurowalne statystyki osiągnięć dla bieżącej gry w zewnętrznym oknie<br><br><span class="ttdesc">Używając opcji <span class="hl">Tłumaczenie osiągnięć na język Steam</span>, niektóre tłumaczenia mogą być niedostępne, dopóki konkretne osiągnięcie nie zostanie odblokowane</span>`,
        statwinaot: `Ustaw nakładkę statystyk osiągnięć na tryb "Zawsze na wierzchu", co pozwala na wyświetlanie okna nad oknem gry<br><br><span class="ttdesc">Gdy ta opcja jest włączona, nakładka statystyk osiągnięć nie będzie rejestrować interakcji użytkownika, takich jak zdarzenia "kliknięcia". Aby ponownie włączyć interakcję z oknem, ta opcja musi zostać wyłączona</span>`,
        statwinshortcut: "Przełącz Nakładkę Statystyk Osiągnięć za pomocą określonego skrótu klawiaturowego",
        ssdisplay: "Wyświetl podgląd zrzutu ekranu w powiadomieniu",
        iconscale: "Zwiększ lub zmniejsz rozmiar ikony osiągnięcia",
        showiconborder: "Wyświetl obrazek jako ramkę wokół ikony osiągnięcia",
        iconborderimg: "Załaduj plik graficzny do użycia jako ramkę wokół ikony osiągnięcia",
        iconborderpos: "Ustaw, czy obrazek ramki ma być wyświetlany przed czy za ikoną osiągnięcia",
        iconborderscale: "Zwiększ lub zmniejsz rozmiar ramki ikony w powiadomieniu",
        iconborderx: "Zwiększ lub zmniejsz poziome przesunięcie ramki ikony w powiadomieniu",
        iconbordery: "Zwiększ lub zmniejsz pionowe przesunięcie ramki ikony w powiadomieniu",
        iconborderrarity: "Zmienia obraz obramowania ikony w zależności od rzadkości odblokowanego osiągnięcia",
        iconborderimgbronze: "Obraz obramowania ikony wyświetlany, gdy procent odblokowania jest > $semirarity",
        iconborderimgsilver: "Obraz obramowania ikony wyświetlany, gdy procent odblokowania jest < $semirarity i > $rarity",
        iconshadowcolor: "Ustaw kolor efektu cienia wokół ikony osiągnięcia, gdy odblokowane zostanie rzadkie osiągnięcie",
        iconanimcolor: "Ustaw kolor efektu animacji za ikoną osiągnięcia, gdy odblokowane zostanie rzadkie osiągnięcie",
        logoscale: "Zwiększ lub zmniejsz rozmiar elementu logo w powiadomieniu",
        decorationscale: "Zwiększ lub zmniejsz rozmiar elementu dekoracji w powiadomieniu",
        usecustomfontsizes: `Zwiększ lub zmniejsz rozmiar poszczególnych elementów tekstowych w powiadomieniu<br><br><span class="ttdesc">Zachowanie oryginalnego układu powiadomienia nie jest gwarantowane przy zmianie wartości rozmiaru czcionki dla poszczególnych elementów</span>`,
        unlockmsgfontsize: "Zwiększ lub zmniejsz rozmiar elementu tekstowego wiadomości odblokowania",
        titlefontsize: "Zwiększ lub zmniejsz rozmiar elementu tekstowego tytułu osiągnięcia",
        descfontsize: "Zwiększ lub zmniejsz rozmiar elementu tekstowego opisu osiągnięcia",
        webhookembedcolormain: "Ustaw kolor używany w osadzaniu webhooka, gdy odblokowywane jest osiągnięcie $main",
        webhookembedcolorsemi: "Ustaw kolor używany w osadzaniu webhooka, gdy odblokowywane jest osiągnięcie $semi",
        webhookembedcolorrare: "Ustaw kolor używany w osadzaniu webhooka, gdy odblokowywane jest osiągnięcie $rare",
        webhookembedcolorplat: "Ustaw kolor używany w osadzaniu webhooka, gdy odblokowywane jest osiągnięcie $plat",
        raemus: "Wyświetlaj powiadomienia, gdy gry są wykrywane w obsługiwanych emulatorach",
        rauser: "Ustaw nazwę użytkownika Retro Achievements do śledzenia osiągnięć",
        rakey: `Ustaw klucz Web API, który będzie używany do autentykacji z API Retro Achievements<br><br><span class="ttdesc">Klucz Web API może zostać skopiowany lub ponownie wygenerowany, logując się na stronie Retro Achievements i przechodząc do <span class="hl">Ustawienia > Klucze > Web API Key</span><br><br>🔒 Podany klucz zostanie zaszyfrowany przed zapisaniem go lokalnie w systemie (jeśli aktualny system operacyjny wspiera szyfrowanie)</span>`,
        rapercenttype: "Ustaw, czy chcesz wyświetlać procenty odblokowanych osiągnięć w trybie Hardcore lub Softcore w powiadomieniach",
        retroarch: `Wyświetl powiadomienia Retro Achievements dla gier emulowanych za pomocą RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Ustawienia > Logowanie</span> musi być skonfigurowane z następującymi ustawieniami:<br><br><ul><li><span class="hllb">Szczegółowość logowania</span>: <span class="hlgreen">WŁĄCZONE</span></li><li><span class="hllb">Poziom logowania interfejsu</span>: <span class="hlgreen">1 (Informacje)</span></li><li><span class="hllb">Logowanie do pliku</span>: <span class="hlgreen">WŁĄCZONE</span></li><li><span class="hllb">Znaczniki czasowe dla plików logów</span>: <span class="hlred">WYŁĄCZONE</span></li></ul></span>`,
        dolphin: `Wyświetl powiadomienia Retro Achievements dla gier emulowanych za pomocą Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Widok > Pokaż konfigurację logów</span> musi być skonfigurowane z następującymi ustawieniami:<br><br><ul><li><span class="hllb">Szczegółowość</span>: <span class="hlgreen">Informacje</span></li><li><span class="hllb">Wyniki logowania</span> > <span class="hlgreen">Zapisz do pliku</span></li><li><span class="hllb">Typy logów</span> > <span class="hlgreen">Osiągnięcia (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Wyświetl powiadomienia Retro Achievements dla gier emulowanych za pomocą PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Narzędzia > Włącz logowanie do pliku</span> musi być włączone</span>`,
        duckstation: `Wyświetl powiadomienia Retro Achievements dla gier emulowanych za pomocą Duckstation<br><br><span class="ttdesc">❗ Plik <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> musi zostać pobrany i przeniesiony do <span class="hl">folderu instalacyjnego Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Ustawienia > Osiągnięcia > RAIntegration (Tylko dla deweloperów)</span> musi być włączone</span>`,
        ppsspp: `Wyświetlaj powiadomienia Retro Achievements dla gier emulowanych za pomocą PPSSPP<br><br><span class="ttdesc"><span class="hl">Ustawienia > Narzędzia > Narzędzia deweloperskie > Ogólne > Zapisuj do pliku</span> musi być włączone i skonfigurowane z następującymi ustawieniami:<br><br><ul><li><span class="hllb">Osiągnięcia</span>: <span class="hlgreen">Informacje</span></span>`,
        retroarchpath: `Ustaw ścieżkę do pliku logu <span class="hl">"retroarch.log"</span> RetroArcha<br><br><span class="ttdesc">Przy domyślnych ustawieniach instalacji, <span class="hl">"retroarch.log"</span> jest przechowywany w <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Ustaw ścieżkę do pliku logu <span class="hl">"dolphin.log"</span> Dolphin<br><br><span class="ttdesc">Przy domyślnych ustawieniach instalacji, <span class="hl">"dolphin.log"</span> jest przechowywany w jednym z następujących miejsc:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Ustaw ścieżkę do pliku logu <span class="hl">"emulog.txt"</span> PCSX2<br><br><span class="ttdesc">Przy domyślnych ustawieniach instalacji, <span class="hl">"emulog.txt"</span> jest przechowywany w <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Ustaw ścieżkę do pliku dziennika <span class="hl">"RALog.txt"</span> Duckstation<br><br><span class="ttdesc">Przy domyślnych ustawieniach instalacji, <span class="hl">"RALog.txt"</span> jest przechowywany w <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Ustaw ścieżkę do pliku dziennika <span class="hl">"log.txt"</span> programu PPSSPP<br><br><span class="ttdesc">Przy domyślnych ustawieniach instalacji plik <span class="hl">"log.txt"</span> jest przechowywany w <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Ustaw indywidualnie kolor elementów tekstowych w powiadomieniu",
        unlockmsgfontcolor: "Ustaw kolor pierwszego elementu tekstowego",
        titlefontcolor: "Ustaw kolor drugiego elementu tekstowego",
        descfontcolor: "Ustaw kolor trzeciego elementu tekstowego",
        exportachdata: `Eksportuj dane osiągnięć do pliku JSON, gdy osiągnięcie zostanie odblokowane<br><br><span class="ttdesc">Po włączeniu, plik <span class="ttcode">achdata.json</span> zostanie wyeksportowany do:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Dostosuj pionowy odstęp między elementami tekstowymi w powiadomieniu",
        ssmode: `Ustaw, czy w zrzutach ekranu przechwytywać cały ekran czy bieżące okno gry<span style="color: red;">*</span><br><br><span class="ttdesc">Jeśli <span class="hl">plik wykonywalny</span> bieżącej gry nie może zostać zlokalizowany (<i>ani przez <span class="hl">automatyczne śledzenie procesów</span>, ani gdy został dodany jako wpis w <span class="hl">Gry z automatycznym zwalnianiem</span></i>), ta opcja domyślnie przełączy się w tryb „Ekran”</span>`,
        replaynotify: "Powtórz ostatnie powiadomienie o osiągnięciu",
        replaynotifyshortcut: "Powtórz ostatnie powiadomienie o osiągnięciu za pomocą określonego skrótu klawiszowego",
        replaynotifyempty: `<br><br><span class="ttdesc">Kolejka powtórzeń jest pusta. Odblokuj osiągnięcie, aby powtórzyć powiadomienie</span>`,
        customtrigger: "Wyzwala klawisz/kombinację symulowaną podczas odblokowania osiągnięcia. Może być używany do wywoływania skrótów klawiaturowych zarejestrowanych w aplikacjach zewnętrznych",
        customtriggershortcut: `Wyzwala określony klawisz/kombinację podczas odblokowania osiągnięcia<br><br><span class="ttdesc">Obsługuje od 1 do 3 klawiszy na skrót. Dla naciśnięć/kombinacji wymagających mniej niż 3 klawisze, naciśnij żądane klawisze i poczekaj na zakończenie timera (5 s)</span>`,
        customtriggerdelay: "Opóźnij określony klawisz/kombinację Niestandardowego Wyzwalacza",
        customtriggerusedisplaytime: `Opóźnij określony klawisz/kombinację Niestandardowego Wyzwalacza na podstawie wartości Czasu Wyświetlania bieżącego typu powiadomienia`,
        trophymode: "Zamień typy powiadomień Główne/Rzadkie/100% na Brązowe/Srebrne/Złote/Platynowe",
        lognum: `Liczba poprzednich plików dziennika przechowywanych przed ich usunięciem. Nowy plik dziennika zostanie utworzony przy każdym uruchomieniu aplikacji<br><br><span class="ttdesc">Gdy ustawiono 0, wszystkie poprzednie pliki dziennika zostaną usunięte przy zamknięciu</span>`, 
        detectedappid: `Użyj <span class="hl">AppID</span> aktualnie wykrytej gry`,
        listmode: `Ustaw zachowanie <span class="hl">Listy wykluczeń</span>/<span class="hl">Listy dołączania</span><br><br><span class="ttdesc">• <span class="hl">Wykluczenie</span>: Ignoruj tylko gry określone na liście<br>• <span class="hl">Dołączenie</span>: Ignoruj wszystkie gry oprócz tych określonych na liście</span>`,
        notifymax: `Ustaw maksymalną liczbę jednoczesnych powiadomień na ekranie<br><br><span class="ttdesc">Zwiększenie liczby jednoczesnych powiadomień wymaga więcej zasobów i może obniżyć wydajność</span>`,
        notifyspace: "Ustaw odstęp między jednoczesnymi powiadomieniami na ekranie",
        audiocooldown: `Ustaw czas oczekiwania, zanim kolejne powiadomienia będą mogły odtworzyć nowy dźwięk<br><br><span class="ttdesc">Dźwięk nie będzie mieć wpływu, jeśli Maksymalna liczba powiadomień jest ustawiona na 1</span>`,
        rauseemudir: "Zapisz zrzuty ekranu/obrazy powiadomień odblokowane przez RetroAchievements w podfolderze dla bieżącego emulatora w określonym katalogu ścieżki zrzutów ekranu/obrazów",
        ssext: "Ustaw format pliku zrzutów ekranu generowanych przez opcję Zrzut ekranu z nakładką powiadomienia",
        notify1line: `Ogranicza liczbę linii tekstu wyświetlanych we wszystkich powiadomieniach do 1<br><br><span class="ttdesc">Teksty, które nie mieszczą się w jednej linii, zostaną skrócone do "..."</span>`,
        copytheme: "Kopiuje wybrany motyw do innego typu powiadomienia",
        ssaddtosteam: "Automatycznie dodaj wygenerowane media do nagrań i zrzutów ekranu bieżącej gry w Steam",
        appdatadir: "Otwórz lokalizację folderu AppData aplikacji",
        backup: "Utwórz kopię zapasową zawartości folderu AppData aplikacji w wybranej lokalizacji, która będzie punktem przywracania dla bieżącego stanu aplikacji",
        restore: "Przywróć zawartość folderu AppData aplikacji z wcześniejszej kopii zapasowej",
        gametimerwin: "Wyświetl timer na ekranie pokazujący czas potrzebny do odblokowania wszystkich achievementów dla bieżącej gry",
        gametimerwinshortcut: "Przełącz Timer Ukończenia Gry za pomocą określonego skrótu klawiaturowego",
        gametimerwinaot: `Ustaw Timer Ukończenia Gry w trybie "Zawsze na Wierzchu", umożliwiając wyświetlanie okna nad oknem gry<br><br><span class="ttdesc">Po włączeniu Timer Ukończenia Gry nie będzie już rejestrować interakcji użytkownika, takich jak zdarzenia "click". Aby ponownie włączyć interakcję z oknem, należy wyłączyć tę opcję</span>`,
        resetgametimer: "Resetuj Timer Ukończenia Gry dla bieżącej gry",
        noshortcuts: `Wyłącza wszystkie skróty klawiaturowe w aplikacji<br><br><span class="ttdesc">Po włączeniu <u>wszystkie skróty w aplikacji przestaną działać</u>. Wszystkie opcje związane ze skrótami klawiaturowymi również zostaną ukryte</span>`,
        extwinnotify: "Przełącz widoczność wszystkich powiadomień ekranowych podczas korzystania ze Stream Notifications",
        usesanwatcher: `Włącz nowy monitor procesów gier SAN<br><br><span class="ttdesc">Różnice między nowym SANWatcher a starymi metodami automatycznego śledzenia procesów są następujące:<br><br><div class="wrapper sanwatcher"><span class="hl">ON</span><ul><li>Aktywnie monitoruje zdarzenia uruchomienia/zakończenia dla każdego procesu znajdującego się w katalogu instalacyjnym gry</li><li>Nie wymaga znajomości pliku wykonywalnego gry, aby zwolnić bieżącą grę</li><li>Zachowanie programów uruchamiających przed startem gry może się różnić, dlatego pełna kompatybilność ze wszystkimi grami Steam nie jest gwarantowana</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">OFF</span><ul><li>Po uruchomieniu gry skanuje katalog instalacyjny gry w poszukiwaniu uruchomionych plików wykonywalnych</li><li>Wymaga znajomości pliku wykonywalnego gry, aby zwolnić bieżącą grę</li><li>Jeśli proces gry nie może zostać określony automatycznie, użytkownik musi ręcznie dodać nowy wpis do <span class="hl">Gry z automatycznym zwalnianiem</span>, aby gry były automatycznie zwalniane</li></ul></div>`,
        releasewaittime: `Ustaw, jak długo SANWatcher ma czekać na uruchomienie nowych procesów gry przed zwolnieniem bieżącej gry<br><br><span class="ttdesc">Na przykład, jeśli bieżąca gra uruchamia program startowy lub okno konfiguracji przed uruchomieniem właściwej gry, to ustawienie określa liczbę sekund, przez które SANWatcher będzie czekać na pojawienie się właściwego okna gry po zamknięciu programu startowego lub okna konfiguracji<br><br>Jeśli w tym czasie oczekiwania zostanie wykryty nowy aktywny proces gry, zwolnienie zostanie anulowane, a zamiast tego śledzony będzie nowo aktywny proces<br><br>💡 Nazwa gry będzie <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">migać</span> w polu <span class="hl">Wyświetlanie Gry</span>, gdy bieżąca gra oczekuje na zwolnienie</span>`,
        platcustomtext: `Ustaw niestandardową wiadomość ukończenia gry w 100%, która będzie wyświetlana w powiadomieniu<br><br><span class="ttdesc">Ta opcja będzie ukryta, gdy Customiser > Ustawienie wstępne > Elementy powiadomień > Opis osiągnięcia jest wyłączony</span>`
    },
    update: {
        updateavailable: "Dostępna aktualizacja",
        sub: [
            `<span id="newversion"></span>`,
            "Dostępna jest nowa aktualizacja Steam Achievement Notifier!",
            `Pełne notatki wydania dostępne na <span id="discordreleasenotes"></span> i <span id="githubreleasenotes"></span>`
        ],
        update: "Aktualizuj"
    },
    linkgame: {
        content: {
            exepath: "Ścieżka do pliku wykonywalnego",
            linkedgame: "Powiąż grę",
            autoreleasegame: "Automatyczne zwalnianie gry",
            linkedgamessub: [
                `Zastąp wszystkie uruchomione procesy gier śledzone automatycznie przez <span class="hl">SANWatcher</span> i zamiast tego sprawdzaj tylko, czy wybrany <span class="hl">plik wykonywalny gry</span> jest aktualnie aktywny`,
                `Powiąż <span class="hl">AppID</span> dowolnej gry z docelowym <span class="hl">plikiem wykonywalnym gry</span> lub <span class="hl">usuń</span> istniejące powiązanie`
            ],
            autoreleasegamessub: [
                `Jeśli Steam nadal pokazuje grę jako <i>Uruchomioną</i> po zamknięciu okna gry, spróbuj dodać nowy wpis w <span class="hl">$linkgame</span>`,
                `Dodaj <span class="hl">AppID</span> określonej gry wraz z odpowiadającym jej <span class="hl">plikiem wykonywalnym gry</span> lub <span class="hl">usuń</span> istniejący wpis`,
            ],
            managesub: [
                `Po wykryciu gry nowe wpisy można również dodawać za pomocą <span class="hl">aktywnego okna</span>, klikając <i>prawym przyciskiem myszy</i> <span class="hl">ikonę w zasobniku systemowym</span> > <span class="hl">$linkgame</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak znaleźć AppID gry Steam?</u></span>`
            ],
            linknew: "Nowy wpis",
            linknewsub: [
                `Powiąż <span class="hl">AppID</span> nowej gry z docelowym <span class="hl">plikiem wykonywalnym gry</span>`,
                `Po dodaniu wpisy można <span class="hl">usunąć</span> z poprzedniego menu <span class="hl">$linkgame</span>`
            ],
            linkedit: "Edytuj wpis",
            linkeditsub: [
                `Edytuj istniejące powiązanie między <span class="hl">AppID</span> gry a docelowym <span class="hl">plikiem wykonywalnym gry</span>`,
                `Po dodaniu wpisy można <span class="hl">usunąć</span> z poprzedniego menu <span class="hl">$linkgame</span>`
            ],
            link: "Dodaj",
            findappid: "Znajdź Steam AppID",
            findappidsub: [
                `Każda gra Steam ma przypisany unikalny numer zwany <span class="hl">AppID</span>. AppID dowolnej gry Steam można znaleźć na jeden z następujących sposobów:`,
                `W <span class="hl">kliencie Steam</span> kliknij <i>prawym przyciskiem myszy</i> grę w <span class="hl">Bibliotece</span> i wybierz <i>Właściwości</i> > <i>Aktualizacje</i> — AppID będzie tam wyświetlone`,
                `<span class="hl">Adres URL</span> <span class="hl">strony sklepu</span> gry — będzie to numer znajdujący się po <span class="hl">app/</span>: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Strony internetowe takie jak <span class="hl">SteamDB</span> — sekcja <span class="hl">App Info</span> zawiera AppID każdej gry`
            ],
            noexe: "Nie znaleziono pliku EXE gry!",
            noexesub: "Kliknij tutaj, aby uzyskać więcej informacji",
            noexedialogsub: [
                `Steam Achievement Notifier nie mógł automatycznie zlokalizować pliku wykonywalnego tej gry. Lokalizacja pliku wykonywalnego gry jest wymagana, aby można było „zwolnić” grę po jej zamknięciu`,
                `Aby ręcznie zwolnić grę po jej zamknięciu, <i>kliknij prawym przyciskiem myszy</i> <span class="hl">ikonę w zasobniku systemowym</span> > <span class="hl">Opcje</span> > <span class="hl">Zwolnij grę</span> lub użyj <span class="hl">skrótu Zwolnij grę</span>`,
                `Alternatywnie kliknij poniższy przycisk <span class="hl">Dodaj</span>, aby dodać plik wykonywalny skojarzony z aktualnie aktywnym oknem do <span class="hl">Ustawienia</span> > <span class="hl">Gry</span> > <span class="hl">Gry z automatycznym zwalnianiem</span>`,
            ],
            linkedgamefocussub: `Aby zastąpić wszystkie uruchomione procesy gier śledzone automatycznie przez <span class="hl">SANWatcher</span>, dodaj nowy wpis do <span class="hl">Powiązane gry</span>`,
            autoreleasegamefocussub: `Jeśli Steam nadal pokazuje grę jako <i>Uruchomioną</i> po zamknięciu okna gry, spróbuj dodać nowy wpis do <span class="hl">Gry z automatycznym zwalnianiem</span>`,
            focussub: `Aby zrobić to dla bieżącej gry, kliknij poniższy przycisk <span class="hl">Dodaj</span>, aby dodać plik wykonywalny skojarzony z aktualnie aktywnym oknem do <span class="hl">Ustawienia</span> > <span class="hl">Gry</span> > <span class="hl">$linkgame</span>`,
            linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Co się stanie po kliknięciu przycisku Dodaj?</u></span>`,
            linkgamehelp: "Powiąż przez aktywne okno",
            linkgamehelpsub: [
                `Kliknięcie przycisku <span class="hl">Dodaj</span> automatycznie utworzy nowy wpis w <span class="hl">Ustawienia</span> > <span class="hl">Gry</span> > <span class="hl">Gry z automatycznym zwalnianiem</span>, wykorzystując informacje z aktualnie aktywnego okna.`,
                `Po kliknięciu przycisku <span class="hl">Dodaj</span> rozpocznie się 5-sekundowe odliczanie`,
                `Przed zakończeniem odliczania przełącz fokus na okno gry`,
                `Po zakończeniu odliczania zostanie dodany nowy wpis dla bieżącego <span class="hl">AppID</span> w <span class="hl">Ustawienia</span> > <span class="hl">Gry</span> > <span class="hl">Gry z automatycznym zwalnianiem</span>, wykorzystujący plik wykonywalny skojarzony z aktywnym oknem`,
                `Nowe próby zastąpią istniejące wpisy lub wpis można usunąć w <span class="hl">Ustawienia</span> > <span class="hl">Gry</span> > <span class="hl">Gry z automatycznym zwalnianiem</span>, klikając przycisk <span id="linkhelpunlink"></span>`
            ],
            addlinkfailed: "Nie udało się dodać okna",
            addlinkfailedsub: `Kliknij przycisk <span class="hl">Dodaj</span>, aby spróbować ponownie`
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Dodaj <span class="hl">AppID</span> dowolnej gry na platformie Steam do <span class="hl">listy wyłączeń</span>`,
                `Steam Achievement Notifier nie będzie próbował śledzić danych dotyczących osiągnięć dla żadnej gry, której <span class="hl">AppID</span> zostało dodane do <span class="hl">listy wyłączeń</span>`,
                `<span class="hl" id="appidhelp"><u>Jak znaleźć AppID gry na platformie Steam?</u></span>`
            ],
            exclusionnew: "Nowe wyłączenie",
            exclusionnewsub: [
                `Wpisz <span class="hl">AppID</span>, aby dodać go do <span class="hl">listy wyłączeń</span>`
            ],
            exclusionedit: "Edytuj wykluczenie",
            exclusioneditsub: [
                `Edytuj istniejące <span class="hl">AppID</span> na <span class="hl">liście wykluczeń</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Dodaj <span class="hl">AppID</span> dowolnej gry Steam do <span class="hl">Listy dołączania</span>`,
                `Steam Achievement Notifier będzie próbował śledzić dane osiągnięć tylko dla gier, których <span class="hl">AppID</span> został dodany do <span class="hl">Listy dołączania</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak znaleźć AppID gry Steam?</u></span>`
            ],
            inclusionnew: "Nowe dołączenie",
            inclusionnewsub: [
                `Wprowadź <span class="hl">AppID</span>, aby dodać go do <span class="hl">Listy dołączania</span>`
            ],
            inclusionedit: "Edytuj dołączenie",
            inclusioneditsub: [
                `Edytuj istniejące <span class="hl">AppID</span> na <span class="hl">Liście dołączania</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elementy powiadomień",
        content: {
            unlockmsg: "Wiadomość odblokowania",
            title: "Tytuł osiągnięcia",
            desc: "Opis osiągnięcia",
            hiddeniconpos: "Ukryta ikona",
            sshiddeniconpos: "Ukryta ikona",
            decorationpos: "Dekoracja",
            ssdecorationpos: "Dekoracja",
            percentpos: "Procent rzadkości",
            sspercentpos: "Procent rzadkości",
            percentbadge: "Odznaka procentowa",
            sspercentbadge: "Odznaka procentowa",
            percentbadgepos: "Pozycja odznaki",
            sspercentbadgepos: "Pozycja odznaki",
            percentbadgecolor: "Kolor odznaki",
            sspercentbadgecolor: "Kolor odznaki",
            percentbadgefontcolor: "Kolor czcionki odznaki",
            sspercentbadgefontcolor: "Kolor czcionki odznaki",
            percentbadgefontsize: "Rozmiar odznaki",
            sspercentbadgefontsize: "Rozmiar odznaki",
            percentbadgeroundness: "Zaokrąglenie odznaki",
            sspercentbadgeroundness: "Zaokrąglenie odznaki",    
            percentbadgex: "Poziomy przesunięcie",
            sspercentbadgex: "Poziomy przesunięcie",
            percentbadgey: "Pionowe przesunięcie",
            sspercentbadgey: "Pionowe przesunięcie",
            percentbadgeimg: "Użyj ikony",
            sspercentbadgeimg: "Użyj ikony",
            percentbadgeimgbronze: "Rzadkość: > $semirarity",
            sspercentbadgeimgbronze: "Rzadkość: > $semirarity",
            percentbadgeimgsilver: "Rzadkość: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Rzadkość: < $semirarity & > $rarity",
            percentbadgeimggold: "Rzadkość: < $rarity",
            sspercentbadgeimggold: "Rzadkość: < $rarity",
            resetpbimgs: "Przywróć ikony odznak",
            elemsmatch: "Dopasuj ustawienia dostosowywacza",
            ssdisplay: "Podgląd zrzutu ekranu"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Dodaj <span class="hl">AppID</span>/<span class="hl">GameID</span> dowolnej gry, aby automatycznie przełączać <span class="hl">motywy</span> po jej wykryciu`,
                `Każdy zapisany <span class="hl">motyw</span> może być wybrany dla każdego typu powiadomienia, wraz z wybranym monitorem używanym jako <span class="hl">źródło zrzutu ekranu</span>`,
                `<span class="hl help" id="appidhelp"><u>Jak znaleźć AppID gry Steam?</u></span>`,
                `<span class="hl help" id="ragameidhelp"><u>Jak znaleźć GameID gry RetroAchievements?</u></span>`
            ],
            themeswitchnew: "Nowe automatyczne przełączanie",
            themeswitchnewsub: [
                `Wprowadź <span class="hl">AppID</span>/<span class="hl">GameID</span> gry oraz wybrany monitor jako <span class="hl">źródło zrzutu ekranu</span>`,
                `Wiele <span class="hl">AppID</span>/<span class="hl">GameID</span> można wprowadzić jednocześnie, oddzielając je przecinkiem (<code>,</code>) lub średnikiem (<code>;</code>)`,
                `Wybierz, na jaki <span class="hl">motyw</span> przełączyć się dla każdego typu powiadomienia po wykryciu <span class="hl">AppID</span>/<span class="hl">GameID</span> tej gry`
            ],
            themeswitchedit: "Edytuj automatyczne przełączanie",
            themeswitcheditsub: [
                `Edytuj wybrany monitor używany jako <span class="hl">źródło zrzutu ekranu</span> dla <span class="hl">AppID</span>/<span class="hl">GameID</span> tej gry`,
                `Zmień, na jaki <span class="hl">motyw</span> przełączać się dla każdego typu powiadomienia po wykryciu <span class="hl">AppID</span>/<span class="hl">GameID</span> tej gry`
            ],
            themes: "Motywy",
            src: "Źródło zrzutu ekranu",
            themedeleted: "Motyw usunięty",
            rafindgameid: "Znajdź GameID RA",
            rafindgameidsub: [
                `Każda gra RetroAchievements ma przypisany unikalny numer zwany <span class="hl">GameID</span>. Możesz znaleźć GameID dowolnej gry RetroAchievements, sprawdzając:`,
                `Adres <span class="hl">URL</span> strony gry na stronie RetroAchievements — jest to numer po <span class="hl">game/</span>: <code class="helpcode">https://retroachievements.org/game/<span class="hl">10003</span></code>`
            ]
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Wygląda na to, że próbujesz włączyć opcję <span class="hl">${opt}</span>, ale nie można jej włączyć bez uprzedniego zainstalowania pakietu <code class="dialogcode">${dep}</code>`,
    `Uruchom <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code>, aby zainstalować tę zależność`
]