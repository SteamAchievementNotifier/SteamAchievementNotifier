export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Kein Benutzer erkannt",
                tt: "Der Steam-Benutzer, für den derzeit Erfolge verfolgt werden"
            },
            gamelbl: {
                elem: gameName ? gameName : "Kein Spiel erkannt",
                tt: "Das Spiel, für das derzeit Erfolge verfolgt werden"
            },
            previewbtn: {
                tt: "Vorschau des ausgewählten Sounds"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Standard (Keine Sounddatei ausgewählt)" : custom.sounddir ? custom.sounddir : "Standard (Kein Soundordner ausgewählt)"
            },              
            soundmodelbl: {
                elem: "Sound-Modus:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "Datei" : "Zufällig"
            },
            togglemain: {
                elem: "Haupt",
                tt: "Benachrichtigung für Haupterfolge"
            },
            togglerare: {
                elem: "Selten",
                tt: "Benachrichtigung für seltene Erfolge"
            },
            toggleplat: {
                elem: "100%",
                tt: "Benachrichtigung für 100% Erfolge"
            },
            progresscirclewrapper: {
                tt: "Zeigt eine Vorschau der angepassten Benachrichtigung"
            },
            testbtnwrapper: {
                elem: "Test-Benachrichtigung anzeigen",
                tt: "Zeigt eine Vorschau der angepassten Benachrichtigung",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Anpassen...",
                tt: "Öffnet das Benachrichtigungs-Anpassungsmenü",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam läuft nicht"
            },
            updatebtn: {
                tt: "Update verfügbar"
            },
            kofibtn: "Auf Ko-Fi spenden!",
            discordbtn: "Beitreten auf Discord!",
            githubbtn: "Fehler auf GitHub melden!",
            settingstitlelbl: {
                elem: "Einstellungen"
            },
            configuration: {
                elem: "Konfiguration",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Sprache",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Betriebssystem",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Benachrichtigungen",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Screenshots",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Barrierefreiheit",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Andere",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "App-Revision"
            },
            apikeybtn: {
                tt: "Klicken Sie hier, um Ihren Steam Web API-Schlüssel zu erhalten"
            },
            apikey: {
                placeholder: "API-Schlüssel hinzufügen",
                tt: "Der mit Ihrem Steam-Konto verknüpfte Steam Web API-Schlüssel"
            },
            eyebtn: {
                tt: "Sichtbarkeit des API-Schlüssels umschalten"
            },
            apikeylbl: {
                elem: "API-Schlüssel erhalten"
            },
            steam64idbtn: {
                tt: "Klicken Sie hier, um Ihre Steam64-ID zu erhalten"
            },
            steam64id: {
                placeholder: "Steam64-ID hinzufügen",
                tt: "Die mit Ihrem Steam-Konto verknüpfte Steam64-ID"
            },
            steam64idlbl: {
                elem: "Steam64-ID erhalten"
            },
            switchaccountspan: {
                elem: "Benutzer wechseln"
            },
            switchaccountbtn: {
                tt: "Zwischen verknüpften Steam-Konten wechseln"
            },
            testconnectionlbl: {
                elem: "Verbindung testen",
                tt: "Testen Sie Ihre Verbindung zur Steam Web API"
            },
            lang: {
                tt: "Sprache für die Benutzeroberfläche und Benachrichtigungen festlegen"
            },
            desktop: {
                elem: "Desktop-Verknüpfung erstellen",
                tt: "Erstellen Sie eine Verknüpfung auf dem Desktop, um die App zu starten",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Mit Windows starten",
                tt: "Die App automatisch ausführen, wenn Windows startet",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Minimiert starten",
                tt: "Die App nach dem Start minimieren und in der Taskleiste anzeigen",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Hardwarebeschleunigung deaktivieren",
                tt: "Deaktivieren der Hardwarebeschleunigung für das App-Fenster",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite-Modus",
                tt: "Deaktiviert das Haupt-App-Fenster, um Systemressourcen zu sparen. Über das Symbol in der Taskleiste stehen nur minimale Optionen zur Interaktion mit der App zur Verfügung",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Seltenheitsprozentsatz",
                tt: `Es werden nur Erfolge mit einem globalen Freischaltungsprozentsatz unter diesem Wert als "Selten" angezeigt`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Nur Sound-Modus",
                tt: "Deaktiviert Benachrichtigungen, spielt jedoch den ausgewählten Sound ab, wenn ein Erfolg freigeschaltet wird",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Alle Prozentsätze anzeigen",
                tt: "Zeigt globale Freischaltungsprozentsätze in allen Benachrichtigungstypen an",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplizieren in externem Fenster",
                tt: "In externem Fenster duplizieren",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Erfolgsstatistik-Fenster anzeigen",
                tt: "Erfolgsstatistik-Fenster anzeigen",
                query: ".sanboxlbl"
            },
            track: {
                elem: `„Jetzt verfolgen“ anzeigen`,
                tt: `Aktivieren oder deaktivieren der Benachrichtigung "Jetzt verfolgen", wenn ein Spiel gestartet wird`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Modus für automatische Erfolgs-Bildschirmfoto auswählen"
            },
            displayscreenshot: {
                elem: "Bildschirmfoto anzeigen",
                tt: "Zeigt eine Vorschau der Screenshots in der Erfolgsbenachrichtigung an",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam-Tastenkombination",
                tt: "Passen Sie Ihre Steam-Client-Tastenkombination an, um native Steam-Screenshots aufzunehmen, wenn Erfolge freigeschaltet werden",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Hauptbenachrichtigungs-Overlay`
            },
            ovtabrare: {
                tt: `Seltene Benachrichtigungs-Overlay`
            },
            ovtabplat: {
                tt: `100% Benachrichtigungs-Overlay`
            },
            monitor: {
                elem: "Monitor",
                tt: "Wählen Sie den Monitor als Quelle für Screenshots",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overlay-Position",
                tt: "Setzen Sie die Position des Benachrichtigungs-Overlays",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Pfad",
                tt: "Setzen Sie den Pfad, in dem Screenshots gespeichert werden",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Vorschau",
                tt: `Vorschau des Benachrichtigungs-Overlays`,
                query: "label"
            },
            noanim: {
                elem: "App-Fensteranimationen deaktivieren",
                tt: "Übergangsanimationen im App-Fenster deaktivieren",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDA-Unterstützung aktivieren",
                tt: "Inhalt der Benachrichtigung in die Zwischenablage kopieren, um von der NVDA-Bildschirmlese-Software gelesen zu werden",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Tooltips anzeigen",
                tt: "Tooltips beim Überfahren von App-Elementen ein- oder ausschalten",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Benachrichtigungs-DevTools anzeigen",
                tt: "Das DevTools-Panel der Benachrichtigung öffnen, wenn es ausgelöst wird",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Datenschutzrichtlinie anzeigen",
                tt: "Steam Achievement Notifier Datenschutzrichtlinie anzeigen",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Dem Beta-Kanal beitreten",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "App-Protokoll öffnen",
                tt: "Inhalt des App-Protokolls anzeigen und teilen",
                query: "label"
            },
            resetbtn: {
                elem: "App zurücksetzen",
                tt: "Alle gespeicherten Daten löschen und die App neu starten",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Animation der Benachrichtigung pausieren/wiedergeben"
            },
            customiserreplay: {
                tt: "Benachrichtigungsanimation wiederholen"
            },
            customisersavepreset: {
                tt: "Aktuelle Anpassungen als neuen Benachrichtigungsvorlage speichern"
            },
            tabbtnnext: {
                tt: "Weiter"
            },
            tabbtnprev: {
                tt: "Zurück"
            },
            notificationpreset: {
                elem: "Vorlage",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Benachrichtigungsvorlage",
                tt: "Wähle eine Benachrichtigungsvorlage zur Anpassung aus",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Seltene Icon-Animation",
                tt: "Animation des Icon-Hintergrunds umschalten",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Alle Details anzeigen",
                tt: `Alle verfügbaren Benachrichtigungsdetails anzeigen`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Anzeigedauer",
                tt: "Länge der Zeit, in der die Benachrichtigung angezeigt wird",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skalierung",
                tt: "Größe der Benachrichtigung<br><i>*Wird nicht im Vorschaufenster angezeigt</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Benutzerdefinierter Text",
                tt: "Benutzerdefinierte Nachricht in der Benachrichtigung anzeigen",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Spielname verwenden",
                tt: "Titel des aktuellen Spiels in der Benachrichtigung anzeigen",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Hintergrundstil",
                tt: "Stil des Benachrichtigungshintergrunds festlegen",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Farbverlaufswinkel",
                tt: "Winkel des Farbverlaufs festlegen",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Hintergrundbild",
                tt: "Wähle eine Bilddatei als Benachrichtigungshintergrund aus",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Helligkeit des Spielarts",
                tt: "Helligkeit des Hintergrunds des Spielarts festlegen",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Rundung",
                tt: "Rundung der Ecken der Benachrichtigung festlegen",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Schriftgröße",
                tt: "Größe der Schrift festlegen",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Deckkraft",
                tt: "Deckkraft der Benachrichtigung festlegen",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Nur Hintergrund",
                tt: "Nur die Deckkraft auf den Hintergrund anwenden und Text und Bilder vollständig deckend lassen",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Farben",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Primärfarbe",
                tt: "Primäre Benachrichtigungsfarbe festlegen",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Sekundärfarbe",
                tt: "Sekundäre Benachrichtigungsfarbe festlegen",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Textfarbe",
                tt: "Farbe des Texts festlegen",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Textumrandung",
                tt: "Umrandung für den gesamten Text der Benachrichtigung anwenden",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Umrandungsfarbe",
                tt: "Farbe der Textumrandung festlegen",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Textschatten",
                tt: "Schatten für den gesamten Text der Benachrichtigung anwenden",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Schattenfarbe",
                tt: "Farbe des Textschattens festlegen",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Symbol",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Symbolrundung",
                tt: "Rundung des Benachrichtigungssymbols festlegen",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Benutzersymbol",
                tt: "Bilddatei als benutzerdefiniertes Symbol verwenden",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Benutzersymbol",
                tt: "Wähle eine Bilddatei als benutzerdefiniertes Symbol aus",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Benutzersymbol zurücksetzen`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "100%-Benutzersymbol",
                tt: `Verwenden Sie eine Bilddatei als benutzerdefiniertes 100%-Symbol`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "100%-Benutzersymbol",
                tt: `Wählen Sie eine Bilddatei aus, um sie als benutzerdefiniertes 100%-Symbol festzulegen`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Benutzerdefiniertes 100%-Symbol zurücksetzen`,
                query: ".sanboxlbl"
            },                 
            usegameicon: {
                elem: "Spiel-Symbol verwenden",
                tt: "Aktuelles Spielsymbol verwenden",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Position",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Bildschirmposition",
                tt: "Position der Benachrichtigung auf dem Bildschirm festlegen",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Frei positionierbar",
                tt: "Benutzerdefinierte Position für die Benachrichtigung verwenden",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Position festlegen",
                tt: "Benutzerdefinierte Position für die Benachrichtigung festlegen",
                query: "label"
            },
            animdir: {
                elem: "Animationsrichtung",
                tt: "Richtung der Benachrichtigungsanimation festlegen",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "DATENSCHUTZRICHTLINIE"
            },
            ppusagetitle: {
                elem: "DATENNUTZUNG DER STEAM-WEB-API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier verwendet Valves <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span>, um Daten im Zusammenhang mit den Steam-Konten des Benutzers abzurufen und anzuzeigen, über die Steam-API-Schlüssel/Steam64-ID-Kombination, die dem Programm vom Benutzer bereitgestellt wird. Diese Daten umfassen:`
            },
            ppstats: {
                elem: "Statistiken für gesperrte und freigeschaltete Errungenschaften"
            },
            ppusername: {
                elem: "Ihr Steam-Benutzername"
            },
            ppsteamgames: {
                elem: "Ihre gespielten Steam-Spiele"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier kann zukünftig weitere Steam Web API-Daten verwenden, um zusätzliche Anwendungsmerkmale und Updates bereitzustellen."
            },
            ppkey64title: {
                elem: "NUTZUNG VON STEAM API KEY/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier erfordert, dass der Benutzer seine Steam API Key/Steam64 ID-Kombination eingibt, um authentifizierten Zugriff auf die Steam Web API zu erhalten."
            },
            ppnoauth: {
                elem: "Ohne diese Informationen können Web-Links (bereitgestellt von Valve zur Nutzung der Steam Web API), die verwendet werden, um Daten im Zusammenhang mit den Steam-Konten eines Benutzers abzurufen - einschließlich Errungenschaftsdaten - nicht abgerufen werden."
            },
            ppstoragetitle: {
                elem: "DATENSPEICHERUNG DER STEAM-WEB-API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier speichert vorübergehend Steam Web API-Daten lokal auf dem PC des Benutzers ausschließlich für die Verwendung innerhalb der Anwendung. Jegliche vorübergehende Speicherung dieser Daten ist ausschließlich für die Verwendung durch Steam Achievement Notifier vorgesehen, und unter normalen Umständen werden alle nicht dauerhaften Steam Web API-Daten beim Beenden der Anwendung aus dem lokalen Speicher gelöscht."
            },
            pppersist: {
                elem: "Auf dem Gerät des Benutzers dauerhaft gespeicherte Daten umfassen ausschließlich Daten, die von der Anwendung für die Benutzerfreundlichkeit gespeichert werden, wie z. B. der Steam Web API Key und die Steam64 ID des Benutzers."
            },
            ppdelete: {
                elem: "Diese Daten können vom Benutzer auch bei Bedarf jederzeit manuell gelöscht werden. Von Steam Achievement Notifier erstellte Dateien befinden sich im folgenden Verzeichnis:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Derzeit nicht unterstützt"
            },
            ppcollecttitle: {
                elem: "STANDPUNKT ZUR DATENSAMMLUNG"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier sendet oder speichert <u>niemals</u> Benutzerdaten außerhalb des lokalen Dateisystems des Benutzers ohne dessen ausdrückliche Erlaubnis. Dies umfasst alle Informationen, die über die Steam Web API für die Verwendung in der Anwendung abgerufen werden, einschließlich der Steam API Key/Steam64 ID-Kombination, die der Anwendung für den Zugriff auf die Steam Web API bereitgestellt wird."
            },
            ppconsent: {
                elem: "Durch die Bestätigung der Zustimmung und die anschließende Verwendung von bereits vorhandenen oder zukünftigen Funktionalitäten, die entwickelt wurden, um Informationen extern zu senden, wird die Erlaubnis des Benutzers implizit erteilt. In diesen Fällen wird der Benutzer immer über die Art der gesendeten Daten informiert und aufgefordert, seine Zustimmung zur Übermittlung von Daten außerhalb der Anwendung zu bestätigen."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier schließt absichtlich alle Möglichkeiten aus, auf, anzuzeigen oder Informationen zu sammeln, die dem Programm vom Benutzer bereitgestellt werden. Über bereits vorhandene oder zukünftige Funktionalitäten kann die Anwendung jedoch möglicherweise Daten im Namen des Benutzers extern senden, jedoch nur mit dessen Zustimmung."
            },
            pprequests: {
                elem: "Anfragen zum Zugriff auf Daten von der Steam Web API werden innerhalb der Anwendung selbst mit integrierten Methoden durchgeführt, ähnlich wie bei Webbrowsern bereitgestellte Funktionalitäten. Diese Anfragen enthalten die Steam API Key/Steam64 ID-Kombination des Benutzers, wie von der Steam Web API benötigt, werden aber niemals absichtlich für die Verwendung oder Abfangung durch andere Anwendungen zur Verfügung gestellt."
            },
            ppusertitle: {
                elem: "BENUTZERVERANTWORTUNG"
            },
            ppsteamtou: {
                elem: `DURCH DAS HERUNTERLADEN UND DIE VERWENDUNG EINER OFFIZIELL VERÖFFENTLICHTEN VERSION VON STEAM ACHIEVEMENT NOTIFIER ÜBER DAS <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFIZIELLE GITHUB-REPOSITORY</span> ERKLÄREN SIE, DER BENUTZER, IM WEITEREN SINNE, DASS SIE SICH AN ABSCHNITT 7 UND 8 DER <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">NUTZUNGSBEDINGUNGEN DER STEAM WEB API</span> HALTEN.`
            },
            gamedetails: "Spieldetails",
            mustbepublic: "muss auf Öffentlich gesetzt werden",            
            nosoundfile: "Standard (Keine Tondatei ausgewählt)",
            nosoundfolder: "Standard (Kein Tonordner ausgewählt)",
            file: "Datei",
            randomised: "Zufällig", 
            audioselectdialog: `Wählen Sie ${custom.mode === "file" ? "Audiodatei" : "Ordner"} aus`,
            imgselectdialog: `Wählen Sie eine Bilddatei aus`,
            unsupported: "Nicht unterstützte Datei!",
            novalidaudiofiles: "Keine gültigen Audiodateien!",
            nolocate: "Datei konnte nicht gefunden werden!",
            switchaccountstitle: "Konten wechseln",
            noaccounts: "Fügen Sie ein Konto hinzu, um zu beginnen!",
            connecting: "Verbindung wird hergestellt...",
            connected: "Verbunden",
            testsuccessuser: `Sie sind bereit`,
            testsuccess1: `Stellen Sie sicher, dass Ihre <span>Spiel-Details</span> in den <a href="${privacysettings}">Privatsphäre-Einstellungen von Steam</a> auf <span>Öffentlich</span> eingestellt sind`,
            testsuccess2: `Überprüfen Sie, ob der Anzeigemodus im Spiel auf <span>Rahmenlos</span> eingestellt ist, damit Benachrichtigungen über dem Spielbildschirm angezeigt werden können`,
            noapikeytitle: "Kein API-Schlüssel",
            noapikeytxt: "Geben Sie Ihren API-Schlüssel ein",
            noapikeyhint: `Klicken Sie auf das <img src="./icon/key.svg" alt=""> Symbol, um Ihren API-Schlüssel zu erhalten`,
            nosteam64idtitle: "Keine Steam64 ID",
            nosteam64idtxt: "Geben Sie Ihre Steam64 ID ein",
            nosteam64idhint: `Klicken Sie auf das <img src="./icon/id.svg" alt=""> Symbol, um Ihre Steam64 ID zu erhalten`,
            invalidapikeytitle: "Ungültiger API-Schlüssel!",
            invalidapikeymsg: "Es konnte keine Verbindung zur Steam Web API mit dem angegebenen API-Schlüssel hergestellt werden",
            invalidapikeydetail1: "Überprüfen Sie, ob Ihr API-Schlüssel korrekt ist",
            invalidapikeydetail2: "Generieren Sie einen neuen API-Schlüssel für Ihr Konto",
            invalidsteam64idtitle: "Ungültige Steam64 ID!",
            invalidsteam64idmsg: "Es konnte kein Steam-Konto mit der angegebenen Steam64 ID gefunden werden",
            invalidsteam64iddetail1: "Überprüfen Sie den Wert der Steam64 ID, den Sie für Ihr Steam-Konto angegeben haben",
            nonetworkfound: "Es wurde keine aktive Netzwerkverbindung gefunden",
            connecttonetwork: "Verbinden Sie Ihren PC mit einem Netzwerk und versuchen Sie es erneut",
            testdefaulterrortitle: "Ein Fehler ist aufgetreten!",
            testdefaulterrormsg: "Es ist ein Fehler beim Verbinden mit der Steam Web API aufgetreten",
            testdefaulterrordetail1: "Bitte melden Sie dieses Problem auf Discord oder GitHub!",
            sspath: "Screenshot-Pfad auswählen",
            wronguser: user ? `${user} ist nicht bei Steam angemeldet!` : "Es wurden keine verknüpften Benutzerkonten gefunden!",
            switchuser: "Klicken Sie hier, um Benutzerkonten zu wechseln",
            trackingfailed: "Tracking fehlgeschlagen!",
            checkapplog: "Überprüfen Sie das Anwendungsprotokoll für weitere Details",
            soon: "Demnächst verfügbar!",
            gamecomplete: "100% abgeschlossen",
            gametitle: "Spiel-Titel",
            achievementunlocked: "Erfolg freigeschaltet",
            achievementtitle: "Erfolgstitel",
            allachievements: "Du hast alle Erfolge freigeschaltet!",
            achievementdesc: "Beschreibung des Erfolgs",
            show: "Anzeigen",
            quit: "Beenden",
            off: "Aus",
            steamss: "Steam-Ingame-Screenshot",
            overlayss: "Screenshot mit Benachrichtigungs-Overlay",
            match: "Anpassung",
            topleft: "Oben links",
            topcenter: "Oben zentriert",
            topright: "Oben rechts",
            bottomleft: "Unten links",
            bottomcenter: "Unten zentriert",
            bottomright: "Unten rechts",
            solid: "Einfarbig",
            gradient: "Verlauf",
            bgimg: "Hintergrundbild",
            gameart: "Spielgrafik",
            up: "Oben",
            down: "Unten",
            left: "Links",
            right: "Rechts",
            tracking: "Jetzt Verfolgen"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Wählen Sie eine Sounddatei aus, die abgespielt werden soll, wenn ein Erfolg freigeschaltet wird" : "Wählen Sie einen Ordner mit Audiodateien aus, die zufällig abgespielt werden sollen, wenn ein Erfolg freigeschaltet wird")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Hier ist eine Aufzeichnung dessen, was seit dem Start der App um"
            },
            copylbl: {
                elem: "Log-Inhalt kopieren"
            },
            openlbl: {
                elem: "Log-Datei generieren"
            },
        }        

        return translations
    }
}