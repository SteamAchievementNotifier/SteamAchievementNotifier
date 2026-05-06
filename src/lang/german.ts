export const translations = {
    global: {
        main: "Haupt",
        semi: "Halb",
        rare: "Selten",
        plat: "100%",
        trophymain: "Bronze",
        trophysemi: "Silber",
        trophyrare: "Gold",
        trophyplat: "Platin",
        test: "Testbenachrichtigungen",
        topleft: "Oben Links",
        topcenter: "Oben Mitte",
        topright: "Oben Rechts",
        bottomleft: "Unten Links",
        bottomcenter: "Unten Mitte",
        bottomright: "Unten Rechts",
        ok: "OK",
        preview: "Vorschau",
        save: "Speichern",
        back: "Zurück",
        edit: "Bearbeiten",
        lockedby: "Gesperrt von $lock",
        settings: "Einstellungen",
        appversion: "App-Version",
        image: "Bild",
        audio: "Audio",
        folder: "Ordner",
        font: "Schriftart",
        select: "Auswählen",
        gametitle: "Spiel-Titel",
        congrats: "Herzlichen Glückwunsch!",
        achievementunlocked: "Erfolg freigeschaltet",
        gamecomplete: "100% Abgeschlossen",
        achievementdesc: "Auf die Schaltfläche Testbenachrichtigung anzeigen geklickt",
        gamecompletedesc: "Du hast alle Erfolge freigeschaltet!",
        defaultcustomfont: "Standard (Keine Schriftart ausgewählt)",
        defaultsoundfile: "Standard (Keine Datei ausgewählt)",
        defaultsounddir: "Standard (Kein Ordner ausgewählt)",
        nowtracking: "Verfolgt jetzt Erfolge für:",
        nopreview: "Vorschau nicht verfügbar für natives Betriebssystem",
        options: "Optionen",
        resetwindow: "Fenster Zurücksetzen",
        show: "Anzeigen",
        exit: "Verlassen",
        donotshowagain: "Diesen Dialog nicht erneut anzeigen",
        releasegame: "Spiel Freigeben",
        releasegamesub: [
            `Starten Sie den Hintergrund-Workerprozess neu und hören Sie auf das aktuelle Spiel zu verfolgen`,
            `Probieren Sie diese Option, wenn Sie kürzlich ein Spiel geschlossen haben, aber Steam es immer noch als laufend anzeigt oder wenn Steam Achievement Notifier immer noch ein bereits geschlossenes Spiel als verfolgt anzeigt`
        ],
        noupdateavailable: "Kein Update Verfügbar",
        latestversion: "Neueste Version Installiert",
        missingdeps: "Fehlende Abhängigkeit",
        restartapp: "App Neu Starten",
        restartappsub: [
            `Wenn irgendwas nicht richtig funktioniert, verwenden Sie diese Option um die App zu schließen und wieder neu zu öffnen`,
            `Wenn das Problem nach dem Neustart der App weiterhin besteht, ziehen Sie bitte in Erwägung es über die integrierten Links auf dem Startbildschirm der App zu melden`
        ],
        suspend: "Anhalten",
        resume: "Fortsetzen",
        new: "Neu...",
        nodata: "Keine Daten",
        findappid: "AppID finden",
        findappidsub: [
            `Jedes Steam-Spiel hat eine einzigartige Nummer - die <span class="hl">AppID</span>. Sie können die zugehörige AppID eines beliebigen Steam-Spiels finden, indem Sie eines der folgenden überprüfen:`,
            `Im <span class="hl">Steam-Client</span> mit der rechten Maustaste auf ein Spiel in Ihrer <span class="hl">Bibliothek</span> klicken und <i>Eigenschaften</i> > <i>Updates</i> auswählen - die AppID wird hier aufgelistet`,
            `Die <span class="hl">URL</span> der <span class="hl">Shop-Seite</span> des Spiels - es handelt sich um die Zahl, die nach <span class="hl">app/</span> aufgelistet ist: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites wie <span class="hl">SteamDB</span> - der Abschnitt <span class="hl">App-Informationen</span> listet die AppID für jedes Spiel auf`
        ],
        noexe: "Spiel-EXE nicht gefunden!",
        noexesub: "Klicken Sie hier für mehr Informationen",
        noexedialogsub: [
            `Steam Achievement Notifier konnte die ausführbare Datei dieses Spiels nicht automatisch finden. Der Speicherort der ausführbaren Datei des Spiels ist erforderlich, um das Spiel nach dem Schließen „freizugeben“`,
            `Um das Spiel nach dem Schließen manuell freizugeben, <i>klicken Sie mit der rechten Maustaste</i> auf das <span class="hl">System-Tray-Symbol</span> > <span class="hl">Optionen</span> > <span class="hl">Spiel freigeben</span>, oder verwenden Sie die <span class="hl">Verknüpfung zum Freigeben des Spiels</span>`,
            `Alternativ klicken Sie unten auf die Schaltfläche <span class="hl">Hinzufügen</span>, um die mit einem fokussierten Fenster verknüpfte ausführbare Datei zu <span class="hl">Einstellungen</span> > <span class="hl">Spiele</span> > <span class="hl">Automatische Spielfreigabe</span> hinzuzufügen`,
        ],
        autorelease: "Automatische Spielfreigabe",
        autoreleasesub: [
            `Wenn Steam ein Spiel nach dem Schließen des Spielfensters weiterhin als <i>Wird gespielt</i> anzeigt, versuchen Sie, einen neuen Eintrag zu <span class="hl">Automatische Spielfreigabe</span> hinzuzufügen`,
            `Um dies für das aktuelle Spiel zu tun, klicken Sie unten auf die Schaltfläche <span class="hl">Hinzufügen</span>, um die mit einem fokussierten Fenster verknüpfte ausführbare Datei zu <span class="hl">Einstellungen</span> > <span class="hl">Spiele</span> > <span class="hl">Automatische Spielfreigabe</span> hinzuzufügen`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Was passiert, wenn ich auf die Schaltfläche Hinzufügen klicke?</u></span>`,
        linkgamehelp: "Eintrag per Fokus hinzufügen",
        linkgamehelpsub: [
            `Durch Klicken auf die Schaltfläche <span class="hl">Hinzufügen</span> wird automatisch ein neuer Eintrag zu <span class="hl">Einstellungen</span> > <span class="hl">Spiele</span> > <span class="hl">Automatische Spielfreigabe</span> hinzugefügt, basierend auf Informationen aus dem aktuell fokussierten Fenster.`,
            `Nach dem Klicken auf die Schaltfläche <span class="hl">Hinzufügen</span> startet ein 5-Sekunden-Timer`,
            `Bevor der Timer abläuft, fokussieren Sie das Spielfenster`,
            `Sobald der Timer abgelaufen ist, wird ein neuer Eintrag für die aktuelle <span class="hl">AppID</span> zu <span class="hl">Einstellungen</span> > <span class="hl">Spiele</span> > <span class="hl">Automatische Spielfreigabe</span> hinzugefügt, unter Verwendung der mit dem fokussierten Fenster verknüpften ausführbaren Datei`,
            `Neue Versuche überschreiben bestehende Einträge, oder der Eintrag kann über <span class="hl">Einstellungen</span> > <span class="hl">Spiele</span> > <span class="hl">Automatische Spielfreigabe</span> durch Klicken auf die Schaltfläche <span id="linkhelpunlink"></span> entfernt werden`
        ],
        addlinkfailed: "Fenster konnte nicht hinzugefügt werden",
        addlinkfailedsub: `Klicken Sie auf die Schaltfläche <span class="hl">Hinzufügen</span>, um es erneut zu versuchen`,
        webhookunlockmsg: "$user hat einen Erfolg freigeschaltet",
        webhookunlockmsgplat: "$user hat alle Erfolge freigeschaltet",
        webhookingame: "in $gamename",
        notconnected: "Nicht verbunden",
        raloghelp: "Mein Spiel wird nicht erkannt",
        raenablelog: `Emulator-Protokolldateien`,
        raenablelogsub: [
            `Um auf interne Spielereignisse zuzugreifen (wie den aktuellen Spielstatus, Informationen zum Freischalten von Erfolgen usw.), muss das Protokollieren in eine externe <span class="hl">Protokolldatei</span> <u>aktiviert sein</u> in allen ausgewählten Emulatoren.<br><br>Jeder ausgewählte Emulator <u>muss diese <span class="hl">Protokolldatei</span></u> als Wert für den <span class="hl">Protokolldateipfad</span> verwenden.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Einstellungen > Protokollierung</span> muss mit den folgenden Einstellungen konfiguriert werden:
                    <br>
                    <ul>
                        <li><span class="hllb">Ausführlichkeit der Protokolle</span>: <span class="hlgreen">EIN</span></li>
                        <li><span class="hllb">Frontend-Protokollierungsstufe</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Protokoll in Datei schreiben</span>: <span class="hlgreen">EIN</span></li>
                        <li><span class="hllb">Protokolldateien mit Zeitstempel versehen</span>: <span class="hlred">AUS</span></li>
                    </ul>
                    <br>
                    Mit den Standardeinstellungen wird <span class="hl">"retroarch.log"</span> gespeichert in:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Ansicht > Protokollkonfiguration anzeigen</span> muss mit den folgenden Einstellungen konfiguriert werden:
                    <br>
                    <ul>
                        <li><span class="hllb">Ausführlichkeit</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Protokollausgaben</span> > <span class="hlgreen">In Datei schreiben</span></li>
                        <li><span class="hllb">Protokolltypen</span> > <span class="hlgreen">Erfolge (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Mit den Standardeinstellungen wird <span class="hl">"dolphin.log"</span> in einem der folgenden Verzeichnisse gespeichert:
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
                    <span class="hl">PCSX2 > Werkzeuge > Dateiprotokollierung aktivieren</span> muss aktiviert sein
                    <br>
                    <br>
                    Mit den Standardinstallationseinstellungen wird <span class="hl">"emulog.txt"</span> gespeichert unter:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> muss <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>heruntergeladen</u></span> und in das <span class="hl">Installationsverzeichnis von Duckstation</span> verschoben werden</li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Einstellungen > Erfolge > RAIntegration (nur für Entwickler)</span> muss aktiviert sein
                    <br>
                    <br>
                    Bei Verwendung der Standardinstallation wird <span class="hl">"RALog.txt"</span> gespeichert unter:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> muss aktiviert und mit den folgenden Einstellungen konfiguriert sein:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Bei Verwendung der Standardinstallations-Einstellungen wird <span class="hl">"log.txt"</span> gespeichert unter:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Nicht unterstützte Beta",
        betaunsupportedsub: [
            "Eine neue Version von Steam Achievement Notifier wurde veröffentlicht!",
            `<u>Diese Beta-Version wird nicht mehr unterstützt</u>. Bitte lade und installiere die neueste offizielle Version über Github, indem du den <span class="hl">Releases</span> Button unten verwendest.`,
            "Danke fürs Testen! 💜"
        ],
        betaghreleases: "Releases",
        checkapplog: "Bitte prüfen Sie das App-Protokoll für weitere Details."
    },
    app: {
        content: {
            game: "Kein Spiel Erkannt",
            customise: "Anpassen",
            test: "Testbenachrichtigung Anzeigen"
        }
    },
    settings: {
        language: {
            title: "Sprache",
            content: {
                steamlang: "Erfolge in die Steam-Sprache übersetzen",
                maxsteamlangretries: "Maximale Anzahl an Übersetzungsversuchen"
            }
        },
        os: {
            title: "Betriebssystem",
            content: {
                desktop: "Desktop-Verknüpfung Erstellen",
                startwin: "Beim Anmelden Starten",
                startmin: "Minimiert Starten",
                nohwa: "Hardwarebeschleunigung Deaktivieren",
                litemode: "Lite-Modus"
            }
        },
        notifications: {
            title: "Benachrichtigungen",
            content: {
                rarity: "Seltenheitsprozentsatz",
                semirarity: "Silberprozentsatz",
                rareonly: "Nur Selten",
                all: "Alle",
                off: "Aus",
                showpercent: "Prozentsatz Anzeigen",
                soundonly: "Nur Ton",
                nowtracking: "Verfolgungshinweis anzeigen",
                nowtrackingscale: "Verfolgungsskala",
                nowtrackingpos: "Position verfolgen",
                shortcuts: "Benachrichtigungs-Verknüpfungen",
                noiconcache: "Icon-Cache deaktivieren",
                webhooks: "Auf Discord-Server posten",
                webhookurl: `Webhook-URL`,
                webhooktypes: "Webhook-Typen",
                webhookcaution: `Indem Sie diese Option aktivieren und einen gültigen Discord-Webhook-Link angeben, erklären Sie sich damit einverstanden, dass Sie verstehen, dass <u>alle Erfolgs- und Spieledaten des aktuellen Steam-Benutzers</u> über den angegebenen Discord-Server-Link gepostet werden.<br><br>Wenn Sie nicht möchten, dass der Steam Achievement Notifier diese Informationen in Ihrem Namen veröffentlicht, deaktivieren Sie bitte diese Option.`,
                webhooklaststatus: "Letzter Status",
                webhookspoilers: `Spoiler-Tag hinzufügen`,
                webhookappid: `AppID anzeigen`,
                replaynotify: "Benachrichtigung wiederholen",
                replaynotifyshortcut: "Tastenkombination für Wiederholung",
                customtrigger: "Benutzerdefinierter Auslöser",
                customtriggershortcut: "Auslöser-Tastenkombination",
                customtriggerdelay: "Auslöserverzögerung",
                customtriggerusedisplaytime: "Anzeigezeit verwenden",
                trophymode: "Trophäenmodus",
                notifymax: "Maximale Benachrichtigungen", 
                notifyspace: "Benachrichtigungsabstand",
                notify1line: "Text auf 1 Zeile begrenzen"
            }
        },
        games: {
            title: "Spiele",
            content: {
                linkedgames: "Automatische Spielfreigabe",
                themeswitch: "Automatischer Designwechsel",
                exclusionlist: "Ausschlussliste",
                inclusionlist: "Einschlussliste",
                listmode: "Listenmodus",
                exclusion: "Ausschluss",
                inclusion: "Einschluss"
            }
        },
        media: {
            title: "Medien",
            content: {
                steamss: "Steam-Screenshot Aufnehmen",
                screenshots: "Zusätzliche Medien",
                off: "Aus",
                ssonly: "Nur Screenshot",
                overlay: "Screenshot mit Benachrichtigungs-Overlay",
                monitors: "Screenshot-Quelle",
                hdrmode: "HDR-Modus",
                ovpos: "Overlay-Position",
                ovmatch: "Anpassungsposition Anpassen",
                ovx: "Horizontaler Versatz",
                ovy: "Vertikaler Versatz",                
                ovpath: "Screenshot-Pfad",
                ssdelay: "Screenshot-Verzögerung",
                notifyimg: "Benachrichtigungsbild",
                imgpath: "Bildpfad",
                ssenabled: "Aktivieren",
                ssmode: "Screenshot-Modus",
                screen: "Bildschirm",
                window: "Fenster",
                rauseemudir: "Im Emulator-Unterordner speichern",
                ssext: "Screenshot-Format",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Zu Steam hinzufügen"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Stream-Benachrichtigungen",
                extwinframerate: "Bildwiederholrate",
                extwinshow: "Fenster anzeigen",
                audiosrc: "Audioquelle",
                notify: "Benachrichtigung",
                app: "Anwendung",
                off: "Stummgeschaltet",
                statwin: "Statistikfenster für Erfolge",
                statwinaot: "Immer im Vordergrund",
                noachievements: "Keine Erfolge zum Anzeigen",
                startgame: "Starte ein Spiel, um Erfolge anzuzeigen!",
                max: "Max",
                custom: "Benutzerdefiniert...",
                statwinshortcut: "Overlay-Verknüpfung",
            }
        },
        accessibility: {
            title: "Barrierefreiheit",
            content: {
                noanim: "App-Fensteranimationen Deaktivieren",
                noupdatedialog: "Update-Dialog deaktivieren",
                nvda: "NVDA-Unterstützung Aktivieren",
                tooltips: "Tooltips Anzeigen",
                showsystrayopts: "System-Tray-Optionen anzeigen",
                releaseshortcut: "Spiel-Freigabe-Verknüpfung"
            }
        },
        advanced: {
            title: "Erweitert",
            content: {
                pollrate: "Abfrageintervall",
                initdelay: "Verzögerungsverfolgung",
                releasedelay: "Freigabeverzögerung",
                maxretries: "Maximale Wiederholungsversuche",
                debug: "Debug-Panel",
                userust: "Alternativer Verarbeitungsmodus",
                notifydebug: "Debug-Benachrichtigungen Anzeigen",
                exportachdata: "Erfolgsdaten exportieren",
                lognum: "Vorherige Protokolldateien", 
                audiocooldown: "Audio-Abklingzeit",
                usecustomfiles: "Benutzerdefinierte App-Dateien Verwenden",
                showcustomfiles: "Benutzerdefinierte App-Dateien Anzeigen",
                appdatadir: "AppData-Ordner anzeigen",
                backup: "Sicherung",
                backuppath: "Sicherungspfad",
                backupsub: [
                    "Sichern Sie den Inhalt des AppData-Ordners der App an einem ausgewählten Ort",
                    "Diese Sicherung dient als Wiederherstellungspunkt für den aktuellen Zustand der App",
                    `Stellen Sie eine vorherige Sicherung über <span class="hl">Einstellungen</span> > <span class="hl">Erweitert</span> > <span class="hl">Wiederherstellen</span> wieder her`
                ],
                backupfailed: "Sicherung konnte nicht erstellt werden.",
                restore: "Wiederherstellen",
                restoresub: [
                    "Stellen Sie den Inhalt des AppData-Ordners der App aus einer vorherigen Sicherung wieder her",
                    `Wählen Sie eine <span class="hl">.sanbak</span>-Sicherungsdatei zur Wiederherstellung aus. Diese Datei bleibt nach Abschluss der Wiederherstellung erhalten`,
                    "❗ Nach Bestätigung wird die App neu gestartet, um die ausgewählte Sicherungsdatei wiederherzustellen"
                ],
                restorefailed: "Sicherung konnte nicht wiederhergestellt werden."
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatoren",
                rauser: "Benutzername",
                rakey: "API-Schlüssel",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Pfad zur Protokolldatei",
                rapercenttype: "Prozent-Typ",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Geben Sie den Pfad zur Protokolldatei ein",
                logfile: "Protokolldatei",
                status: "Status",
                game: "Spiel",
                lastachievement: "Letzte Errungenschafts-ID",
                wait: "Warten auf Emulator",
                idle: "Warten auf Spielereignis",
                start: "Spiel starten",
                stop: "Spiel stoppen",
                achievement: "Erfolg freigeschaltet"
            }
        },
        misc: {
            title: "Verschiedenes",
            content: {
                colorprofile: "Farbprofil",
                checkforupdates: "Nach Updates Suchen",
                log: "Anwendungsprotokoll",
                reset: "App Zurücksetzen"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Voreinstellung",
            content: {
                preset: "Benachrichtigungsvoreinstellung",
                iconanim: "Seltene Symbol-Animation",
                alldetails: "Alle Details anzeigen",
                usepercent: "Prozent verwenden",
                displaytime: "Anzeigedauer",
                scale: "Skalierung",
                customtext: "Benutzerdefinierter Text",
                usegametitle: "Spielname verwenden",
                customfont: "Benutzerdefinierte Schriftart"
            }
        },
        sound: {
            title: "Ton",
            content: {
                soundmode: "Tonmodus",
                file: "Datei",
                folder: "Zufällig",
                soundfile: "Tondatei",
                sounddir: "Tonordner",
                volume: "Lautstärke"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Hintergrundstil",
                solid: "Einfarbig",
                gradient: "Verlauf",
                img: "Bild",
                gameart: "Spielgrafik",
                gradientangle: "Verlaufswinkel",
                bgimg: "Hintergrundbild",
                bgachicon: "Erfolgssymbol Verwenden",
                bgimgbrightness: "Helligkeit",
                brightness: "Helligkeit",
                blur: "Unschärfe",
                roundness: "Rundung",
                fontsize: "Schriftgröße",
                usecustomfontsizes: "Benutzerdefinierte Schriftgrößen verwenden",
                unlockmsgfontsize: "Freischaltmeldung",
                titlefontsize: "Titel",
                descfontsize: "Beschreibung",
                textvspace: "Textabstand",
                opacity: "Deckkraft",
                bgonly: "Nur Hintergrund",
                glow: "Leuchten",
                glowcolor: "Farbe",
                glowsize: "Größe",
                glowx: "Horizontale Verschiebung",
                glowy: "Vertikale Verschiebung",
                glowopacity: "Deckkraft",
                glowanim: "Animation",
                glowspeed: "Geschwindigkeit",
                glowrarity: "Seltenheit verwenden",
                glowcolorbronze: "Seltenheit: > $semirarity",
                glowcolorsilver: "Seltenheit: < $semirarity & > $rarity",
                glowcolorgold: "Seltenheit: < $rarity",
                off: "Aus",
                pulse: "Pulsieren",
                double: "Doppelt",
                focus: "Fokus",
                orbit: "Umkreisen",
                fluorescent: "Fluoreszierend",
                rainbow: "Regenbogen",
                mask: "Maske",
                maskimg: "Maskenbild",
                useoutline: "Umriss",
                outline: "Umriss-Typ",
                outlinecolor: "Umrissfarbe",
                outlinewidth: "Umrissbreite",
                dashed: "Gestrichelt",
                dotted: "Gepunktet"
            }
        },
        colors: {
            title: "Farben",
            content: {
                primarycolor: "Primärfarbe",
                secondarycolor: "Sekundärfarbe",
                tertiarycolor: "Tertiärfarbe",
                iconshadowcolor: "Schattenfarbe des seltenen Symbols",
                iconanimcolor: "Animationsfarbe des seltenen Symbols",
                fontcolor: "Schriftfarbe",
                usecustomfontcolors: "Benutzerdefinierte Schriftfarben verwenden",
                unlockmsgfontcolor: "Farbe 1",
                titlefontcolor: "Farbe 2",
                descfontcolor: "Farbe 3",
                fontoutline: "Schriftkontur",
                fontoutlinecolor: "Farbe der Schriftkontur",
                fontoutlinescale: "Skalierung des Schriftumrisses",
                fontshadow: "Schriftschatten",
                fontshadowcolor: "Farbe des Schriftschattens",
                fontshadowscale: "Skalierung des Schriftschattens",
                fontshadowx: "Horizontale Verschiebung",
                fontshadowy: "Vertikale Verschiebung"
            }
        },
        icons: {
            title: "Symbole",
            content: {
                iconscale: "Symbol-Skalierung",
                iconroundness: "Symbole abrunden",
                showiconborder: "Symbolrahmen anzeigen",
                iconborderimg: "Symbolrahmen",
                iconborderpos: "Rahmenposition",
                iconborderscale: "Rahmengröße",
                iconborderx: "Horizontale Verschiebung",
                iconbordery: "Vertikale Verschiebung",
                iconborderrarity: "Seltenheit verwenden",
                iconborderimgbronze: "Seltenheit: > $semirarity",
                iconborderimgsilver: "Seltenheit: < $semirarity & > $rarity",
                front: "Vorne",
                back: "Hinten",
                plat: "100%-Logo",
                usegameicon: "Spiel-Symbol verwenden",
                gameicontype: "Spielsymboltyp",
                usecustomimgicon: "Benutzerdefiniertes Symbol verwenden",
                customimgicon: "Benutzerdefiniertes Symbol",
                icon: "Symbol",
                logo: "Logo",
                logoscale: "Logo-Skalierung",
                decoration: "Dekoration",
                decorationscale: "Dekorations-Skalierung",
                showdecoration: "Dekoration anzeigen",
                rarity: "Seltenheit",
                showhiddenicon: "Verstecktes Symbol anzeigen",
                hiddenicon: "Verstecktes Symbol",
                replacelogo: "Logo Ersetzen",
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Bildschirmposition",
                usecustompos: "Benutzerdefinierte Position verwenden",
                setcustompos: "Festlegen",
                copycustompos: "Auf alle Anwenden",
                resetcustompos: "Zurücksetzen"
            }
        },
        theme: {
            title: "Design",
            content: {
                updatetheme: "Design Aktualisieren",
                savetheme: "Design speichern",
                sub: [
                    `Gespeicherte <span class="hl">Benutzerdesigns</span> können im Menü <span class="hl">Design auswählen</span> auf dem Startbildschirm ausgewählt werden.`,
                    `Stellen Sie sicher, dass der <span class="hl">Designname</span> <u>eindeutig</u> ist - ein Name, der mit einem vorhandenen Design übereinstimmt, <u>überschreibt das vorherige</u>!`
                ],
                placeholder: "Designname",
                theme: "Design",
                importtheme: "Design importieren",
                import: "Importieren",
                importsub: [
                    `Importieren einer vom Benutzer erstellten <span class="hl">Designdatei</span>`,
                    `<span class="hl">Importierte Designs</span> werden nach erfolgreichem Import automatisch geladen und können im Menü <span class="hl">Design auswählen</span> ausgewählt werden`,
                ],
                importidle: `Wählen Sie eine <span class="hl">Designdatei</span> zum Importieren`,
                importcopied: `Design erfolgreich kopiert`,
                importrenamed: `Design erfolgreich umbenannt`,
                importextracted: `Design erfolgreich extrahiert`,
                importrewriting: `Schreibe Designdateipfade neu...`,
                importconverting: `Konvertiere Design...`,
                importcreating: `Erstelle Design...`,
                importdone: `Design erfolgreich importiert`,
                importfailed: `Fehler beim Importieren der ausgewählten Designdatei!`,
                exporttheme: "Design exportieren",
                export: "Exportieren",
                exporterrortitle: "Exportfehler",
                exporterrorsub: [
                    "Beim Versuch, das ausgewählte Design zu exportieren, ist ein Fehler aufgetreten",
                    `Versuchen Sie, das aktuelle Design (<i>über <span class="hl">Design speichern</span></i>) zu speichern, und versuchen Sie erneut zu exportieren`,
                    `Wenn das Problem weiterhin besteht, kopieren Sie bitte den Fehler unten und melden Sie ihn über die Linkschaltflächen auf dem <span class="hl">Startbildschirm</span>`
                ],
                synctheme: "Design synchronisieren",
                syncedwith: "Synchronisiert mit",
                themeselect: "Ausgewähltes Design",
                copytheme: "Design kopieren",
                copythemesub: "Wählen Sie die Benachrichtigungstyp(en), in die das ausgewählte Design kopiert werden soll"
            }
        }        
    },
    logwin: {
        content: {
            tagline: "Hier ist, was seit dem Start der App passiert ist um",
            copylog: "Protokollinhalt kopieren"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Sind Sie sicher?</span>
                    <span>Alle zuvor konfigurierten Daten, <u>einschließlich Anpassungen</u>, werden auf die Standardeinstellungen zurückgesetzt.</span>
                    <span>🛑 Dies kann nicht rückgängig gemacht werden!</span>
                </div>
            `,
            reset: "Zurücksetzen"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier ist auf ein Problem gestoßen und muss geschlossen werden.",
            details: "Hier sind die Fehlerdetails:",
            sub: "Klicken Sie auf die unten stehenden Schaltflächen, um dieses Problem über Ihre bevorzugte Plattform zu melden.",
            report: "Bericht",
            log: "App-Protokoll",
            exit: "Beenden"
        }
    },    
    tooltips: {
        game: "Das Spiel, für das derzeit Erfolge verfolgt werden",
        usertheme: "Wählen Sie ein zuvor gespeichertes Design",
        customise: "Passe Erfolgsmeldungen An",
        test: "Zeigen Sie eine Testbenachrichtigung an, einschließlich aller Anpassungen",
        kofi: "Spenden Sie auf Ko-Fi!",
        discord: "Treten Sie dem Discord bei!",
        github: "Melden Sie ein Problem",
        lang: "Wählen Sie die Nutzeroberflächen-Sprache, die in der App verwendet wird",
        steamlang: `Versuchen Sie, Übersetzungen aus den Anwendungsdateien von Steam zu laden, um Erfolgsinformationen in der vom Benutzer gewählten Sprache des Steam-Clients anzuzeigen<br><br><span class="ttdesc">Diese Option versucht, Übersetzungen in einer JSON-Datei zu finden, die in den Anwendungsdaten von Steam gespeichert ist. Wenn keine Übersetzung für den aktuellen Erfolg gefunden werden kann, werden stattdessen die von Steamworks abgerufenen Erfolgsinformationen angezeigt.</span>`,
        maxsteamlangretries: `Die Anzahl der Versuche (alle 100ms), um gültige Übersetzungen für den aktuellen Erfolg zu finden<br><br><span class="ttdesc">Steam speichert derzeit nur eine kleine Menge an Erfolgsdaten in der mit jedem Spiel verbundenen JSON-Datei. Alle Erfolge, die nicht in dieser Datei enthalten sind, werden hinzugefügt, nachdem der Erfolg freigeschaltet wurde.<br><br>Da das Hinzufügen neuer Daten Zeit in Anspruch nehmen kann, erhöht eine Erhöhung dieses Werts die Wahrscheinlichkeit, dass Übersetzungsdaten für den aktuellen Erfolg gefunden werden, kann jedoch auch die Anzeige der Benachrichtigung auf dem Bildschirm um die durch diese Einstellung berechnete Zeit verzögern.<br><br>Wenn keine gültigen Übersetzungsdaten für den aktuellen Erfolg gefunden werden können, wird die Übersetzung auf die in Steamworks festgelegte Sprache zurückgesetzt.</span>`,
        desktop: "Schalten Sie eine Verknüpfung auf dem Desktop ein, um die App auszuführen",
        startwin: "Starten Sie Steam Achievement Notifier automatisch nach dem Anmelden",
        startmin: "Nach dem Starten die App-Benutzeroberfläche ausblenden, bis sie aus dem System Tray geöffnet wird",
        nohwa: `Deaktivieren Sie die Hardwarebeschleunigung, um die Leistung auf Systemen mit geringeren Ressourcen oder Systemen ohne dedizierte GPU zu verbessern<br><br><span class="ttdesc">Die App wird nach Aktivierung/Deaktivierung dieser Option neu gestartet</span>`,
        litemode: "Deaktivieren Sie alle interaktiven Nutzeroberflächen-Elemente und bieten Sie nur begrenzte App-Funktionalität über das System Tray-Symbol. Kann die von der App verbrauchten Ressourcen verbessern",
        rarity: `Der Prozentsatz, bei dem Benachrichtigungen für seltene Erfolge ausgelöst werden.<br><br>Jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert wird als Hauptbenachrichtigung angezeigt<br><br><span class="ttdesc">Wenn der <span class="hl">Trophäenmodus</span> aktiviert ist, wird jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert stattdessen als Silber-Benachrichtigung angezeigt</span>`,
        semirarity: `Der Prozentsatz, bei dem "Silber"-Benachrichtigungselemente angezeigt werden (z. B. <span class="hl">Seltenheitsabzeichen</span>, <span class="hl">Dekorationen</span> usw.).<br><br>Jeder Erfolg mit einem Freischaltungsprozentsatz unter (oder gleich) diesem Wert und über dem <span class="hl">Seltenheitsprozentsatz</span> zeigt Benachrichtigungselemente an, die für "Silber"-Seltenheiten konfiguriert sind.<br><br>Jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert zeigt Benachrichtigungselemente an, die für "Bronze"-Seltenheiten konfiguriert sind<br><br><span class="ttdesc">Wenn der <span class="hl">Trophäenmodus</span> aktiviert ist, wird jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert stattdessen als Bronze-Benachrichtigung angezeigt</span>`,
        showpercent: "Zeigen Sie den Freischaltungsprozentsatz des Erfolgs in der Benachrichtigung für die ausgewählten Typen an",
        soundonly: "Deaktivieren Sie Benachrichtigungen und spielen Sie nur Sounds ab, die über den Customiser festgelegt wurden",
        extwin: "Erstellen Sie ein Fenster, das alle derzeit auf dem Bildschirm angezeigten Benachrichtigungen dupliziert. Dieses Fenster kann dann als Fensteraufnahmequelle für Streaming-Software wie OBS hinzugefügt werden",
        extwinframerate: "Ziel-Bildwiederholrate für Stream-Benachrichtigungen festlegen",
        extwinshow: `Sichtbarkeit des Stream-Benachrichtigungsfensters umschalten<br><br><span class="ttdesc">Wenn es in der Taskleiste fokussiert ist, halten Sie die <code class="ttcode">Strg</code>-Taste gedrückt, um den aktuellen Standort des Fensters anzuzeigen</span>`,
        audiosrc: "Wählen Sie die Quelle des vom Programm generierten Audios aus (oder deaktivieren Sie es)",
        nowtracking: "Zeigen Sie eine Benachrichtigung an, die den Benutzer darüber informiert, dass Erfolge für ein laufendes Spiel verfolgt werden",
        nowtrackingscale: `Größe der Verfolgungsbenachrichtigung festlegen`,
        nowtrackingpos: `Legen Sie den Ort der Verfolgungsbenachrichtigung fest`,
        shortcuts: "Lösen Sie eine Testbenachrichtigung über eine Tastenkombination aus. Die Tastenkombinationen können für jeden Benachrichtigungstyp individuell angepasst werden",
        noiconcache: `Deaktiviert das Zwischenspeichern von Erfolgssymbolen beim Starten von Spielen.<br><br><span class="ttdesc">Dies kann die Leistung der App beim Starten von Spielen erheblich verbessern und auch Probleme mit der Verfolgung von Spielen mit einer großen Anzahl von Erfolgen lösen. Die Deaktivierung des Icon-Caches kann jedoch in seltenen Fällen dazu führen, dass Erfolgssymbole in Benachrichtigungen fehlen</span>`,
        steamss: "Erstellen Sie einen Steam-Screenshot, wenn ein Erfolg freigeschaltet wird",
        screenshots: "Wählen Sie den Typ des zusätzlichen Mediums aus, das erstellt werden soll, wenn eine Benachrichtigung angezeigt wird",
        monitors: "Der Monitor, der erfasst wird, wenn der Screenshot aufgenommen wird",
        hdrmode: `Screenshots aufnehmen mit einer Methode, die mit Monitoren kompatibel ist, die High Dynamic Range (HDR) verwenden`,
        ovpos: "Die Position der Benachrichtigung im Screenshot",
        ovmatch: "Übereinstimmung mit der im Customiser festgelegten Bildschirmposition für diesen Benachrichtigungstyp",
        ovpath: "Der Speicherort, an dem Screenshots gespeichert werden, die von dieser Option generiert werden",
        ssdelay: "Fügen Sie eine Verzögerung von der Benachrichtigung bis zur Aufnahme des Screenshots hinzu",
        sspreview: "Zeigen Sie eine Vorschau an, wie der Screenshot aussehen wird wenn er gespeichert wird",
        noanim: "Deaktivieren Sie alle Fensteranimationen und Übergangseffekte in der App",
        noupdatedialog: `Verhindert das automatische Anzeigen und Fokussieren des <span class="hl">Verfügbare Updates</span>-Dialogs<br><br><span class="ttdesc">Der Dialog kann weiterhin durch Klicken auf die Update-Schaltfläche geöffnet werden, wenn verfügbar</span>`,
        nvda: "Aktivieren Sie das Kopieren von Erfolgsinformationen in die Zwischenablage, wenn ein Erfolg freigeschaltet wird, um von Bildschirmleseprogrammen wie NVDA gelesen zu werden",
        tooltips: "Zeigen Sie Tooltips an, wenn Sie den Mauszeiger über bestimmte Nutzeroberflächen-Elemente halten",
        colorprofile: `Erzwingt, dass alle Anwendungsfenster mit dem ausgewählten Farbprofil gerendert werden<br><br><span class="ttdesc">Erfordert einen Neustart der Anwendung</span>`,
        pollrate: `Legen Sie das Aktualisierungsintervall für Erfolgsdaten während des Spiels fest<br><br><span class="ttdesc">Die Leistung kann je nach Wert oder Systemhardware steigen/abfallen. Höhere Werte führen normalerweise zu einer geringeren Systemlast, können aber auch zu einer stärkeren Verzögerung bei Benachrichtigungen führen</span>`,
        initdelay: `Legen Sie die Verzögerung zwischen der Erkennung der aktuellen <span class="hl">AppID</span> und dem Beginn der Prozess-/Erfolgsverfolgung fest<br><br><span class="ttdesc">Durch Erhöhen dieses Werts können Szenarien vermieden werden, in denen Steam das aktuelle Spiel nicht starten kann (aufgrund der Initialisierung der Anwendung in Steamworks, bevor das Spiel gestartet wurde)</span><br><br><span class="ttdesc">Alternativ kann das Erhöhen dieses Werts auch verwendet werden, um eine falsche Erkennung von Vor-Spielstart-Prozessen zu umgehen</span>`,
        releasedelay: `Legen Sie fest, wie lange der im Hintergrund laufende Worker-Prozess wartet, bevor er nach der Freigabe des aktuellen Spiels neu gestartet wird. Betrifft sowohl die automatische Prozessverfolgung als auch die Automatische Spielfreigabe<br><br><span class="ttdesc">Ermöglicht ein längeres Zeitfenster, damit Steamworks vollständig aus der Anwendung freigegeben werden kann. Eine Erhöhung dieses Werts kann ungewöhnliches Verhalten verhindern, z. B. das Verfolgen eines zuvor geschlossenen Spiels</span>`,
        maxretries: `Legen Sie die maximale Anzahl von Versuchen fest, um einen laufenden Prozess mit einer erkannten AppID zu verknüpfen. Betrifft sowohl die automatische Prozessverfolgung als auch die Automatische Spielfreigabe<br><br><span class="ttdesc">Versuche werden einmal pro Sekunde durchgeführt. Wenn ein laufender Prozess nach dieser Anzahl von Versuchen nicht mit der aktuellen AppID verknüpft ist, wird ein ungültiger Prozess zurückgegeben. In solchen Fällen muss das Spiel manuell über System Tray > Optionen > Spiel freigeben freigegeben werden</span>`,
        debug: "Öffnen Sie das Debug-Panel, das detaillierte Prozessverfolgungsinformationen anzeigt",
        userust: "Verwenden Sie eine alternative Rust-basierte Funktion, um zu überprüfen, ob die verfolgten Spielprozesse derzeit auf dem System ausgeführt werden. Wenn diese Option nicht aktiviert ist, wird stattdessen die Standardprozessüberprüfung auf NodeJS-Basis verwendet.",
        notifydebug: "Erstellen Sie ein DevTools-Fenster für alle Benachrichtigungen. Nützlich zum Debuggen/Beheben von Benachrichtigungsproblemen",
        usecustomfiles: "Aktivieren Sie Benachrichtigungen, um benutzerdefinierbare Dateien zu laden. Vorsicht ist für normale Benutzer geboten",
        showcustomfiles: "Öffnen Sie den Speicherort der benutzerdefinierten Dateien",
        log: "Öffnen Sie das App-Protokollfenster, das Informationen über Prozessaktivitäten, Warnungen und Fehler anzeigt",
        reset: "Entfernen Sie alle Konfigurationsdaten und starten Sie die App neu",
        playback: "Pausieren/Fortsetzen der Animation der Benachrichtigungsvorschau",
        replay: "Starten Sie die Animation der Benachrichtigungsvorschau neu",
        preset: "Wählen Sie die zu bearbeitende Benachrichtigungsvorlage aus",
        iconanim: "Aktivieren/Deaktivieren des animierten Rahmens und der Animation des seltenen Symbols",
        alldetails: "Zeigen Sie alle Textelemente in der Benachrichtigung an, einschließlich der standardmäßig ausgeblendeten Elemente für diese Vorlage",
        usepercent: "Den Freischaltprozentsatz des Erfolges anzeigen, anstelle des XP/S-Werts",
        displaytime: "Legen Sie die Anzeigedauer der Benachrichtigung in Sekunden fest",
        scale: "Vergrößern oder verkleinern Sie die Größe der Benachrichtigung",
        customtext: "Legen Sie eine benutzerdefinierte Nachricht fest, die in der Benachrichtigung angezeigt werden soll",
        usegametitle: "Zeigen Sie den Titel des aktuellen Spiels in der Benachrichtigung an",
        customfont: "Verwenden Sie eine benutzerdefinierte Schriftart, die in der Benachrichtigung verwendet werden soll",
        soundmode: "Wählen Sie entweder eine einzelne Audiodatei oder eine zufällig ausgewählte Audiodatei aus einem Ordner mit mehreren Audiodateien aus, wenn eine Benachrichtigung auftritt",
        soundfile: "Wählen Sie eine Audiodatei aus, die abgespielt werden soll, wenn eine Benachrichtigung auftritt",
        sounddir: "Wählen Sie einen Ordner aus, aus dem eine Audiodatei zufällig ausgewählt wird, wenn eine Benachrichtigung auftritt",
        volume: "Legen Sie die Wiedergabelautstärke der Audiodatei fest",
        preview: "Vorschau der ausgewählten Audiodatei oder einer zufällig ausgewählten Audiodatei aus dem Ordner",
        bgstyle: "Wählen Sie den Stil für den Hintergrund der Benachrichtigung aus",
        gradientangle: "Legen Sie den Winkel des Farbverlaufs fest",
        bgimg: "Laden Sie eine Bilddatei, die als Hintergrund der Benachrichtigung verwendet werden soll",
        bgachicon: "Das Symbol des freigeschalteten Erfolgs als Hintergrund der Benachrichtigung verwenden",
        bgimgbrightness: "Legen Sie die Helligkeit des Bildes fest, das als Hintergrund für die Benachrichtigung verwendet wird",
        brightness: "Legen Sie die Helligkeit des als Hintergrund der Benachrichtigung verwendeten Spielbildes fest",
        blur: "Legen Sie das Maß an Unschärfe fest, das auf den Hintergrund der Benachrichtigung angewendet wird",
        roundness: "Legen Sie die Rundung der Benachrichtigungskanten fest",
        fontsize: "Legen Sie die Schriftgröße in der Benachrichtigung fest",
        opacity: "Legen Sie die Gesamttransparenz der Benachrichtigung fest",
        bgonly: "Legen Sie nur die Transparenz für den Benachrichtigungshintergrund fest während andere Elemente ihre volle Transparenz behalten",
        glow: "Aktivieren Sie einen Leuchteffekt, der die Benachrichtigung umgibt",
        glowcolor: "Legen Sie die Farbe des Leuchteffekts fest",
        glowsize: "Legen Sie die Größe des Leuchteffekts fest",
        glowx: "Verschieben Sie die Position des Leuchteffekts horizontal",
        glowy: "Verschieben Sie die Position des Leuchteffekts vertikal",
        glowopacity: "Legen Sie die Transparenz des Leuchteffekts fest",
        glowanim: "Wählen Sie eine vordefinierte Animation aus, die auf den Leuchteffekt angewendet werden soll",
        glowspeed: "Legen Sie die Geschwindigkeit der Animation fest, die auf den Leuchteffekt angewendet wird",
        glowrarity: "Ändert die Farbe des Leuchteffekts basierend auf der Seltenheit der freigeschalteten Errungenschaft",
        glowcolorbronze: "Die Leuchtfarbe, die angezeigt wird, wenn der Entsperrprozentsatz > $semirarity ist",
        glowcolorsilver: "Die Leuchtfarbe, die angezeigt wird, wenn der Entsperrprozentsatz < $semirarity und > $rarity ist",
        glowcolorgold: "Die Leuchtfarbe, wenn der Entsperrprozentsatz < $rarity ist",
        mask: "Aktivieren Sie das Maskieren von Teilen der Benachrichtigung mit einem benutzerdefinierten Bild",
        maskimg: `Laden Sie eine Bilddatei hoch, die als Maske verwendet werden soll<br><br><span class="ttdesc">In CSS funktioniert <code class="ttcode">mask-mode: alpha</code> entgegen der üblichen Erwartung - Bereiche der Transparenz in der Bilddatei werden verdeckt, und schwarze/graue Bereiche lassen die darunterliegenden Elemente sichtbar werden</span>`,
        useoutline: "Einen Umriss um die Benachrichtigung anzeigen",
        outline: "Wählen Sie den Typ des Umrisses aus, der um die Benachrichtigung angezeigt werden soll",
        outlinecolor: "Stellen Sie die Farbe des Umrisses um die Benachrichtigung ein",
        outlinewidth: "Stellen Sie die Breite des Umrisses um die Benachrichtigung ein",
        primarycolor: "Legen Sie die Primärfarbe der Benachrichtigung fest",
        secondarycolor: "Legen Sie die Sekundärfarbe der Benachrichtigung fest",
        tertiarycolor: "Legen Sie die Tertiärfarbe der Benachrichtigung fest",
        fontcolor: "Legen Sie die Farbe des in der Benachrichtigung angezeigten Textes fest",
        fontoutline: "Fügen Sie allen in der Benachrichtigung angezeigten Texten eine Kontur hinzu",
        fontoutlinecolor: "Legen Sie die Farbe der Textkontur fest",
        fontoutlinescale: "Die Dicke des Schriftumrisses festlegen",
        fontshadow: "Fügen Sie allen in der Benachrichtigung angezeigten Texten einen Schatten hinzu",
        fontshadowcolor: "Legen Sie die Farbe des Textschattens fest",
        fontshadowscale: "Die Dicke des Schattens des Textes festlegen",
        fontshadowx: "Verschiebt die Position des Textschattens horizontal",
        fontshadowy: "Verschiebt die Position des Textschattens vertikal",
        iconroundness: "Legen Sie die Rundung des Erfolgs-/Spielsymbols in der Benachrichtigung fest",
        plat: "Verwenden Sie eine Bilddatei, die als 100%-Symbol verwendet werden soll",
        usegameicon: "Ersetze das Symbol der freigeschalteten Errungenschaft durch das Symbol des aktuellen Spiels",
        gameicontype: `Wähle aus, welcher Bildtyp als Spielsymbol angezeigt wird`,
        usecustomimgicon: "Ersetze das Symbol der freigeschalteten Errungenschaft durch eine benutzerdefinierte Bilddatei",
        customimgicon: "Verwende eine Bilddatei, die als benutzerdefiniertes Symbol verwendet werden soll",
        showhiddenicon: "Ein Symbol anzeigen, das anzeigt, dass der Erfolg in der Benachrichtigung versteckt ist",
        hiddenicon: "Eine Bilddatei laden, um das Symbol für den versteckten Erfolg zu ersetzen",
        logo: "Laden Sie eine Bilddatei, um das Logo-Symbol zu ersetzen",
        decoration: "Laden Sie eine Bilddatei, um das Dekorationssymbol zu ersetzen",
        showdecoration: "Aktivieren/Deaktivieren der Sichtbarkeit des Dekorationssymbols",
        replacelogo: "Ersetze das Logo-Symbol in der Benachrichtigung durch die ausgewählte Dekoration",
        pos: "Legen Sie die Bildschirmposition der Benachrichtigung fest",
        usecustompos: "Aktivieren Sie die benutzerdefinierte Positionierung für die Benachrichtigung",
        setcustompos: "Legen Sie die benutzerdefinierte Position für die Benachrichtigung fest",
        copycustompos: "Die benutzerdefinierte Position auf alle anderen Benachrichtigungstypen anwenden",
        resetcustompos: "Setzen Sie die Position der Benachrichtigung auf die Standardbenutzerposition zurück",
        updatetheme: "Das aktuelle Design mit den ausgewählten Anpassungsoptionen aktualisieren",
        savetheme: "Speichern Sie alle konfigurierten Anpassungsoptionen als neues Design",
        visibilitybtn: "Die Sichtbarkeit des Elements in benutzerdefinierten Vorschauen und Testbenachrichtigungen umschalten",
        delbtn: "Das Element auf den Standardwert zurücksetzen",
        imgpath: "Der Speicherort, an dem Benachrichtigungsbilder, die von dieser Option generiert wurden, gespeichert werden",
        ssenabled: "Aktivieren oder Deaktivieren der Medienerstellung für diesen Typ",
        checkforupdates: `Überprüfen Sie, ob eine neue App-Version auf GitHub veröffentlicht wurde. Wenn ein Update verfügbar ist, wird es automatisch heruntergeladen und installiert, sobald es über das Dialogfeld <span class="hl">Update verfügbar</span> bestätigt wurde`,
        linkedgames: `Umgehen Sie die <span class="hl">automatische Prozess-Verfolgung</span> für bestimmte Steam-Spiele<br><br><span class="ttdesc">Diese Option sollte nur in sehr spezifischen Szenarien verwendet werden. Benutzer sollten diese Option unter normalen Umständen nicht benötigen!</span>`,
        exclusionlist: `Verhindern Sie, dass Errungenschaften in bestimmten Steam-Spielen von der App verfolgt werden<br><br><span class="ttdesc">Diese Option sollte nur in sehr spezifischen Szenarien verwendet werden. Benutzer sollten diese Option unter normalen Umständen nicht benötigen!</span>`,
        inclusionlist: `Verhindert, dass alle Steam-Spiele von der App verfolgt werden, es sei denn, sie sind angegeben<br><br><span class="ttdesc">Diese Option sollte nur für sehr spezifische Szenarien verwendet werden. Benutzer sollten diese Option unter normalen Umständen nicht benötigen!</span>`,
        ovx: "Verschieben Sie die Benachrichtigung, die im Screenshot angezeigt wird, horizontal",
        ovy: "Verschieben Sie die Benachrichtigung, die im Screenshot angezeigt wird, vertikal",
        importtheme: `Importieren Sie Anpassungen über eine vom Benutzer erstellte <span class="hl">Designdatei</span>`,
        exporttheme: `Exportieren Sie das aktuell ausgewählte <span class="hl">Design</span> zum Teilen<br><br><span class="ttdesc">Bevor Sie exportieren, stellen Sie bitte sicher, dass das gewünschte <span class="hl">Design</span> ausgewählt ist (über das Menü <span class="hl">Design auswählen</span>). Stellen Sie auch sicher, dass Anpassungen in das ausgewählte <span class="hl">Design</span> gespeichert wurden (über das Menü <span class="hl">Design speichern</span>)<br><br><u>Anpassungen, die noch nicht im aktuellen <span class="hl">Design</span> gespeichert wurden, werden nicht exportiert!</u></span>`,
        webhooks: "Verwenden Sie eine Webhook-URL, um in einem Discord-Server eine Nachricht zu posten, wenn ein Erfolg freigeschaltet wird",
        webhookmain: `Aktivieren, ob Erfolgsinformationen an einen Discord-Server gesendet werden, wenn ein $main-Erfolg freigeschaltet wird`,
        webhooksemi: `Aktivieren, ob Erfolgsinformationen an einen Discord-Server gesendet werden, wenn ein $semi-Erfolg freigeschaltet wird`,
        webhookrare: "Aktivieren, ob Erfolgsinformationen an einen Discord-Server gesendet werden, wenn ein $rare-Erfolg freigeschaltet wird",
        webhookplat: "Aktivieren, ob Erfolgsinformationen an einen Discord-Server gesendet werden, wenn ein $plat-Erfolg freigeschaltet wird",
        webhooktest: "Umschalten, ob Testinformationen an einen Discord-Server gesendet werden sollen, wenn Testbenachrichtigungen irgendeines Typs ausgelöst werden",
        webhookurl: `Stellen Sie die <span class="hl">Webhook-URL</span> für den gewünschten Discord-Server ein<br><br><span class="ttdesc">Eine <span class="hl">Webhook-URL</span> wird verwendet, um im Namen eines Benutzers oder einer Anwendung auf einem Discord-Server/Kanal zu posten. Um einen neuen Webhook für einen Discord-Server einzurichten, muss der Benutzer eine Rolle im gewünschten Server haben, die das Erstellen von Webhooks erlaubt<br><br><u>Eine Webhook-URL ist erforderlich, wenn Sie diese Option verwenden</u><br><br>Weitere Informationen finden Sie in der offiziellen Discord-Dokumentation</span>`,
        webhookspoilers: `Füge einen Spoiler-Tag zu "versteckten" Erfolgen hinzu, wenn sie auf Discord gepostet werden`,
        webhookappid: "Die AppID des aktuellen Spiels im Fußbereich des Webhook-Embeds anzeigen",
        unlockmsg: "Stellen Sie die Position der Freischalt-Nachricht/des benutzerdefinierten Textes im $type ein",
        title: "Stellen Sie die Position des Erfolgstitels im $type ein",
        desc: "Stellen Sie die Position der Erfolgsbeschreibung im $type ein",
        notification: "Benachrichtigung",
        screenshot: "Screenshot",
        percentpos: "Stellen Sie die Position des Seltenheitsprozentsatzes im $type ein",
        sspercentpos: "Stellen Sie die Position des Seltenheitsprozentsatzes im $type ein",
        hiddeniconpos: "Stellen Sie die Position des versteckten Erfolgssymbols im $type ein",
        sshiddeniconpos: "Stellen Sie die Position des versteckten Erfolgssymbols im $type ein",
        decorationpos: "Stellen Sie die Position des Dekorationselements im $type ein",
        ssdecorationpos: "Stellen Sie die Position des Dekorationselements im $type ein",
        percentbadge: "Zeige den Freischaltungsprozentsatz in einem Abzeichen, das über dem Symbol der Errungenschaft/des Spiels platziert ist",
        sspercentbadge: "Zeige den Freischaltungsprozentsatz in einem Abzeichen, das über dem Symbol der Errungenschaft/des Spiels platziert ist",
        percentbadgepos: "Position des Abzeichens festlegen",
        sspercentbadgepos: "Position des Abzeichens festlegen",
        percentbadgecolor: "Hintergrundfarbe des Abzeichens festlegen",
        sspercentbadgecolor: "Hintergrundfarbe des Abzeichens festlegen",
        percentbadgefontcolor: "Legen Sie die Schriftfarbe des Abzeichens fest",
        sspercentbadgefontcolor: "Legen Sie die Schriftfarbe des Abzeichens fest",
        percentbadgefontsize: "Größe des Abzeichens festlegen",
        sspercentbadgefontsize: "Größe des Abzeichens festlegen",
        percentbadgeroundness: "Rundung des Abzeichens festlegen",
        sspercentbadgeroundness: "Rundung des Abzeichens festlegen",
        percentbadgex: "Versetzt die Position des Abzeichens horizontal",
        sspercentbadgex: "Versetzt die Position des Abzeichens horizontal",
        percentbadgey: "Versetzt die Position des Abzeichens vertikal",
        sspercentbadgey: "Versetzt die Position des Abzeichens vertikal",
        percentbadgeimg: "Zeigt ein Seltenheits-basiertes Symbol als Abzeichen-Element an",
        sspercentbadgeimg: "Zeigt ein Seltenheits-basiertes Symbol als Abzeichen-Element an",
        percentbadgeimgbronze: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz > $semirarity ist",
        sspercentbadgeimgbronze: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz > $semirarity ist",
        percentbadgeimgsilver: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz < $semirarity und > $rarity ist",
        sspercentbadgeimgsilver: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz < $semirarity und > $rarity ist",
        percentbadgeimggold: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz < $rarity ist",
        sspercentbadgeimggold: "Das Abzeichen-Symbol, das angezeigt wird, wenn der Freischaltprozentsatz < $rarity ist",
        percentbadgeimgplat: "Das Abzeichen-Symbol, das angezeigt wird, wenn alle Erfolge freigeschaltet sind",
        sspercentbadgeimgplat: "Das Abzeichen-Symbol, das angezeigt wird, wenn alle Erfolge freigeschaltet sind",
        resetpbimgs: "Alle Abzeichen-Symbole auf Standard zurücksetzen",
        elemsmatch: `Stimme mit den Benachrichtigungselement-Einstellungen im Customiser für diesen Benachrichtigungstyp überein<br><br><span class="ttdesc">Einige Benachrichtigungsvoreinstellungen können aufgrund von Unterschieden zwischen Bildschirm- und Screenshot-basierter Benachrichtigungsgestaltung nicht vollständig mit den Customiser-Einstellungen übereinstimmen</span>`,
        themeswitch: `Automatisch auf ein gespeichertes <span class="hl">Design</span> wechseln, wenn ein bestimmtes Spiel erkannt wird`,
        userthemesync: `Synchronisiere Anpassungen im ausgewählten <span class="hl">Design</span> mit allen anderen Benachrichtigungstypen`,
        showsystrayopts: `Zeigt alle Optionen an, die normalerweise unter <span class="hl">System Tray</span> > <span class="hl">Optionen</span> in <span class="hl">Einstellungen</span> > <span class="hl">Verschiedenes</span> zu finden sind`,
        releaseshortcut: "Das aktuell verfolgte Spiel mit der angegebenen Tastenkombination freigeben",
        themeselect: "Wählen Sie ein zuvor gespeichertes Design",
        statwin: `Konfigurierbare Erfolgsstatistiken für das aktuelle Spiel in einem externen Fenster anzeigen<br><br><span class="ttdesc">Bei Verwendung in Kombination mit der Option <span class="hl">Erfolge in die Steam-Sprache übersetzen</span> können einige Übersetzungen erst verfügbar sein, wenn der entsprechende Erfolg freigeschaltet wurde</span>`,
        statwinaot: `Setzen Sie das Fenster für Erfolgsstatistiken in den Modus "Immer im Vordergrund", sodass das Fenster über dem Spiel angezeigt wird<br><br><span class="ttdesc">Wenn diese Option aktiviert ist, reagiert das Fenster für Erfolgsstatistiken nicht mehr auf Benutzerinteraktionen wie "Klick"-Ereignisse. Um die Interaktion mit dem Fenster wieder zu aktivieren, muss diese Option deaktiviert werden</span>`,
        statwinshortcut: "Die Erfolgsstatistik-Überlagerung mit der angegebenen Tastenkombination umschalten",
        ssdisplay: "Zeige eine Vorschau des aufgenommenen Screenshots in der Benachrichtigung an",
        iconscale: "Größe des Erfolgssymbols vergrößern oder verkleinern",
        showiconborder: "Ein Bild als Rahmen um das Erfolgssymbol anzeigen",
        iconborderimg: "Eine Bilddatei laden, die als Rahmen um das Erfolgssymbol verwendet wird",
        iconborderpos: "Festlegen, ob das Rahmenbild vor oder hinter dem Erfolgssymbol angezeigt wird",
        iconborderscale: "Die Größe des Symbolrahmens innerhalb der Benachrichtigung vergrößern oder verkleinern",
        iconborderx: "Die horizontale Verschiebung des Symbolrahmens innerhalb der Benachrichtigung ändern",
        iconbordery: "Die vertikale Verschiebung des Symbolrahmens innerhalb der Benachrichtigung ändern",
        iconborderrarity: "Ändert den angezeigten Symbolrahmen basierend auf der Seltenheit der freigeschalteten Errungenschaft",
        iconborderimgbronze: "Das Symbolrahmenbild, das angezeigt wird, wenn der Freischaltprozentsatz > $semirarity ist",
        iconborderimgsilver: "Das Symbolrahmenbild, das angezeigt wird, wenn der Freischaltprozentsatz < $semirarity und > $rarity ist",
        iconshadowcolor: "Stellen Sie die Farbe des Schatteneffekts um das Erfolgssymbol ein, wenn ein seltener Erfolg freigeschaltet wird",
        iconanimcolor: "Stellen Sie die Farbe des Animationseffekts hinter dem Erfolgssymbol ein, wenn ein seltener Erfolg freigeschaltet wird",
        logoscale: "Größe des Logoelements in der Benachrichtigung vergrößern oder verkleinern",
        decorationscale: "Größe des Dekorationselements in der Benachrichtigung vergrößern oder verkleinern",
        usecustomfontsizes: `Individuelle Schriftgrößen der Textelemente in der Benachrichtigung vergrößern oder verkleinern<br><br><span class="ttdesc">Die Erhaltung des ursprünglichen Layouts der Benachrichtigung kann nicht garantiert werden, wenn die einzelnen Schriftgrößen geändert werden</span>`,
        unlockmsgfontsize: "Größe des Textelements der Freischaltmeldung vergrößern oder verkleinern",
        titlefontsize: "Größe des Textelements des Erfolgstitels vergrößern oder verkleinern",
        descfontsize: "Größe des Textelements der Erfolgsbeschreibung vergrößern oder verkleinern",
        webhookembedcolormain: "Lege die Farbe fest, die im Webhook-Embed verwendet wird, wenn ein $main-Erfolg freigeschaltet wird",
        webhookembedcolorsemi: "Lege die Farbe fest, die im Webhook-Embed verwendet wird, wenn ein $semi-Erfolg freigeschaltet wird",
        webhookembedcolorrare: "Lege die Farbe fest, die im Webhook-Embed verwendet wird, wenn ein $rare-Erfolg freigeschaltet wird",
        webhookembedcolorplat: "Lege die Farbe fest, die im Webhook-Embed verwendet wird, wenn ein $plat-Erfolg freigeschaltet wird",
        raemus: "Benachrichtigungen anzeigen, wenn Spiele in unterstützten Emulatoren erkannt werden",
        rauser: "Den Retro Achievements-Benutzernamen festlegen, um Erfolge zu verfolgen",
        rakey: `Legen Sie den Web-API-Schlüssel fest, der für die Authentifizierung mit der Retro Achievements API verwendet wird<br><br><span class="ttdesc">Ein Web-API-Schlüssel kann kopiert oder neu generiert werden, indem Sie sich auf der Retro Achievements-Website anmelden und zu <span class="hl">Einstellungen > Schlüssel > Web-API-Schlüssel</span> navigieren<br><br>🔒 Der angegebene Schlüssel wird verschlüsselt, bevor er lokal auf dem System gespeichert wird (sofern das aktuelle Betriebssystem Verschlüsselung unterstützt)</span>`,
        rapercenttype: "Festlegen, ob in den Benachrichtigungen der Freischaltprozentsatz für Hardcore- oder Softcore-Erfolge angezeigt wird",
        retroarch: `Zeige Retro Achievements-Benachrichtigungen für Spiele, die über RetroArch emuliert werden<br><br><span class="ttdesc"><span class="hl">RetroArch > Einstellungen > Protokollierung</span> muss mit den folgenden Einstellungen konfiguriert werden:<br><br><ul><li><span class="hllb">Protokollierungsdetails</span>: <span class="hlgreen">EIN</span></li><li><span class="hllb">Frontend-Protokollierungsstufe</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Protokoll in Datei schreiben</span>: <span class="hlgreen">EIN</span></li><li><span class="hllb">Protokolldateien mit Zeitstempel versehen</span>: <span class="hlred">AUS</span></li></ul></span>`,
        dolphin: `Zeige Retro Achievements-Benachrichtigungen für Spiele, die über Dolphin emuliert werden<br><br><span class="ttdesc"><span class="hl">Dolphin > Ansicht > Protokollkonfiguration anzeigen</span> muss mit den folgenden Einstellungen konfiguriert werden:<br><br><ul><li><span class="hllb">Detailgrad</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Protokollausgaben</span> > <span class="hlgreen">In Datei schreiben</span></li><li><span class="hllb">Protokolltypen</span> > <span class="hlgreen">Erfolge (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Zeige Retro Achievements-Benachrichtigungen für Spiele, die über PCSX2 emuliert werden<br><br><span class="ttdesc"><span class="hl">PCSX2 > Werkzeuge > Dateiprotokollierung aktivieren</span> muss aktiviert sein</span>`,
        duckstation: `Retro Achievements-Benachrichtigungen für Spiele anzeigen, die über Duckstation emuliert werden<br><br><span class="ttdesc">❗ Die Datei <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> muss heruntergeladen und in das <span class="hl">Installationsverzeichnis von Duckstation</span> verschoben werden</span><br><br><span class="ttdesc"><span class="hl">Duckstation > Einstellungen > Erfolge > RAIntegration (Nur für Entwickler)</span> muss aktiviert sein</span>`,
        ppsspp: `Zeige Retro Achievements-Benachrichtigungen für Spiele, die über PPSSPP emuliert werden<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> muss aktiviert und mit den folgenden Einstellungen konfiguriert sein:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Lege den Pfad zur Protokolldatei <span class="hl">"retroarch.log"</span> von RetroArch fest<br><br><span class="ttdesc">Mit den Standardeinstellungen wird <span class="hl">"retroarch.log"</span> gespeichert in <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Lege den Pfad zur Protokolldatei <span class="hl">"dolphin.log"</span> von Dolphin fest<br><br><span class="ttdesc">Mit den Standardeinstellungen wird <span class="hl">"dolphin.log"</span> in einem der folgenden Verzeichnisse gespeichert:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Lege den Pfad zur Protokolldatei <span class="hl">"emulog.txt"</span> von PCSX2 fest<br><br><span class="ttdesc">Mit den Standardeinstellungen wird <span class="hl">"emulog.txt"</span> gespeichert in <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Geben Sie den Pfad zur Logdatei <span class="hl">"RALog.txt"</span> von Duckstation an<br><br><span class="ttdesc">Mit den Standardinstallationseinstellungen wird <span class="hl">"RALog.txt"</span> in <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span> gespeichert</span>`,
        ppsspppath: `Lege den Pfad zur PPSSPP-Protokolldatei <span class="hl">"log.txt"</span> fest<br><br><span class="ttdesc">Bei Verwendung der Standardinstallations-Einstellungen wird die Datei <span class="hl">"log.txt"</span> gespeichert unter <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Farben der Textelemente in der Benachrichtigung individuell festlegen",
        unlockmsgfontcolor: "Die Farbe des ersten Textelements festlegen",
        titlefontcolor: "Die Farbe des zweiten Textelements festlegen",
        descfontcolor: "Die Farbe des dritten Textelements festlegen",
        exportachdata: `Erfolgsdaten in eine JSON-Datei exportieren, wenn ein Erfolg freigeschaltet wird<br><br><span class="ttdesc">Wenn aktiviert, wird <span class="ttcode">achdata.json</span> exportiert nach:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Passt den vertikalen Abstand zwischen den Textelementen in der Benachrichtigung an",
        ssmode: `Legen Sie fest, ob Screenshots den gesamten Bildschirm oder das aktuelle Spielfenster erfassen<span style="color: red;">*</span><br><br><span class="ttdesc">Wenn die <span class="hl">ausführbare Datei</span> des aktuellen Spiels nicht gefunden werden kann (<i>entweder über die <span class="hl">automatische Prozessverfolgung</span> oder beim Hinzufügen als Eintrag in <span class="hl">Automatische Spielfreigabe</span></i>), wird diese Option standardmäßig auf den Modus „Bildschirm“ gesetzt</span>`,
        replaynotify: "Wiederhole die letzte Erfolgsbenachrichtigung",
        replaynotifyshortcut: "Wiederhole die letzte Erfolgsbenachrichtigung mit der angegebenen Tastenkombination",
        replaynotifyempty: `<br><br><span class="ttdesc">Die Wiederholungswarteschlange ist leer. Schalte einen Erfolg frei, um eine Benachrichtigung zu wiederholen</span>`,
        customtrigger: "Löst eine Taste/Kombination aus, wenn ein Achievement freigeschaltet wird. Kann verwendet werden, um Tastenkombinationen in externen Anwendungen auszulösen",
        customtriggershortcut: `Löst die angegebene Taste/Kombination aus, wenn ein Achievement freigeschaltet wird<br><br><span class="ttdesc">Unterstützt 1–3 Tasten pro Tastenkombination. Für Tastendrücke/Kombinationen mit weniger als 3 Tasten, drücke die gewünschten Tasten und warte, bis der Timer (5s) abläuft</span>`,
        customtriggerdelay: "Verzögert die angegebene Taste/Kombination des benutzerdefinierten Auslösers",
        customtriggerusedisplaytime: `Verzögert die angegebene Taste/Kombination des benutzerdefinierten Auslösers basierend auf dem Anzeigezeitwert des aktuellen Benachrichtigungstyps`,
        trophymode: "Haupt/Selten/100 %-Benachrichtigungstypen durch Bronze/Silber/Gold/Platin ersetzen",
        lognum: `Die Anzahl der gespeicherten vorherigen Protokolldateien vor dem Löschen. Bei jedem Start der App wird eine neue Protokolldatei erstellt<br><br><span class="ttdesc">Wenn auf 0 gesetzt, werden alle vorherigen Protokolldateien beim Beenden gelöscht</span>`, 
        detectedappid: `Verwende die <span class="hl">AppID</span> des aktuell erkannten Spiels`,
        listmode: `Lege das Verhalten der <span class="hl">Ausschlussliste</span>/<span class="hl">Einschlussliste</span> fest<br><br><span class="ttdesc">• <span class="hl">Ausschluss</span>: Ignoriere nur Spiele, die in der Liste angegeben sind<br>• <span class="hl">Einschluss</span>: Ignoriere alle Spiele außer denen, die in der Liste angegeben sind</span>`,
        notifymax: `Lege die maximale Anzahl gleichzeitiger Benachrichtigungen auf dem Bildschirm fest<br><br><span class="ttdesc">Das Erhöhen der Anzahl gleichzeitiger Benachrichtigungen erfordert mehr Ressourcen und kann die Leistung beeinträchtigen</span>`,
        notifyspace: "Lege den Abstand zwischen gleichzeitigen Benachrichtigungen auf dem Bildschirm fest",
        audiocooldown: `Lege fest, wie lange nachfolgende Benachrichtigungen warten müssen, bevor neuer Ton abgespielt werden kann<br><br><span class="ttdesc">Audio wird nicht beeinflusst, wenn Maximale Benachrichtigungen auf 1 gesetzt ist</span>`,
        rauseemudir: "Screenshots/Benachrichtigungsbilder, die über RetroAchievements freigeschaltet wurden, in einem Unterordner für den aktuellen Emulator innerhalb des angegebenen Screenshot-/Bildpfadverzeichnisses speichern",
        ssext: "Das Dateiformat für Screenshots festlegen, die über die Option Screenshot mit Benachrichtigungs-Overlay erstellt werden",
        notify1line: `Die Anzahl der in allen Benachrichtigungen angezeigten Textzeilen auf 1 begrenzen<br><br><span class="ttdesc">Überlaufende Textzeichenfolgen, die nicht in eine einzelne Zeile passen, werden mit "..." gekürzt</span>`,
        copytheme: "Das ausgewählte Design in einen anderen Benachrichtigungstyp kopieren",
        ssaddtosteam: "Generierte Medien automatisch zu den Aufnahmen und Screenshots des aktuellen Spiels in Steam hinzufügen",
        appdatadir: "Öffne den Speicherort des AppData-Ordners der App",
        backup: "Sichern Sie den Inhalt des AppData-Ordners der App an einem ausgewählten Ort, der als Wiederherstellungspunkt für den aktuellen Zustand der App dient",
        restore: "Stellen Sie den Inhalt des AppData-Ordners der App aus einer vorherigen Sicherung wieder her"
    },
    update: {
        updateavailable: "Update verfügbar",
        sub: [
            `<span id="newversion"></span>`,
            "Ein neues Update für Steam Achievement Notifier ist verfügbar!",
            `Vollständige Versionshinweise finden Sie auf <span id="discordreleasenotes"></span> und <span id="githubreleasenotes"></span>`
        ],
        update: "Update"
    },
    linkgame: {
        content: {
            exepath: "Ausführungspfad",
            managesub: [
                `Wenn Steam ein Spiel nach dem Schließen des Spielfensters weiterhin als <i>Wird gespielt</i> anzeigt, versuchen Sie, einen neuen Eintrag zu <span class="hl">Automatische Spielfreigabe</span> hinzuzufügen`,
                `Fügen Sie die <span class="hl">AppID</span> eines bestimmten Spiels zusammen mit der erwarteten <span class="hl">ausführbaren Spieldatei</span> hinzu, oder <span class="hl">entfernen</span> Sie einen bestehenden Eintrag`,
                `Neue Einträge können auch hinzugefügt werden, indem Sie <i>mit der rechten Maustaste klicken</i> auf das <span class="hl">System-Tray-Symbol</span> > <span class="hl">Automatische Spielfreigabe</span>, sobald ein Spiel erkannt wurde`,
                `<span class="hl help" id="appidhelp"><u>Wie finde ich die AppID eines Steam-Spiels?</u></span>`
            ],
            linknew: "Neuer Eintrag",
            linknewsub: [
                `Fügen Sie die <span class="hl">AppID</span> eines neuen Spiels zusammen mit der erwarteten <span class="hl">ausführbaren Spieldatei</span> hinzu`,
                `Nach dem Hinzufügen können Einträge über das vorherige Menü <span class="hl">Automatische Spielfreigabe</span> <span class="hl">entfernt</span> werden`
            ],
            linkedit: "Eintrag bearbeiten",
            linkeditsub: [
                `Bearbeiten Sie die <span class="hl">AppID</span> eines bestehenden Spiels zusammen mit der erwarteten <span class="hl">ausführbaren Spieldatei</span>`,
                `Nach dem Hinzufügen können Einträge über das vorherige Menü <span class="hl">Automatische Spielfreigabe</span> <span class="hl">entfernt</span> werden`
            ],
            link: "Hinzufügen"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Fügen Sie die <span class="hl">AppID</span> eines beliebigen Steam-Spiels der <span class="hl">Ausschlussliste</span> hinzu`,
                `Steam Achievement Notifier wird nicht versuchen, Erfolgsdaten für jedes Spiel zu verfolgen, dessen <span class="hl">AppID</span> der <span class="hl">Ausschlussliste</span> hinzugefügt wurde`,
                `<span class="hl" id="appidhelp"><u>Wie finde ich die AppID eines Steam-Spiels?</u></span>`
            ],
            exclusionnew: "Neuer Ausschluss",
            exclusionnewsub: [
                `Geben Sie die <span class="hl">AppID</span> ein, um sie der <span class="hl">Ausschlussliste</span> hinzuzufügen`
            ],
            exclusionedit: "Ausschluss bearbeiten",
            exclusioneditsub: [
                `Die bestehende <span class="hl">AppID</span> in der <span class="hl">Ausschlussliste</span> bearbeiten`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Füge die <span class="hl">AppID</span> eines beliebigen Steam-Spiels zur <span class="hl">Einschlussliste</span> hinzu`,
                `Steam Achievement Notifier versucht nur, Erfolgsdaten für Spiele zu verfolgen, deren <span class="hl">AppID</span> zur <span class="hl">Einschlussliste</span> hinzugefügt wurde`,
                `<span class="hl help" id="appidhelp"><u>Wie finde ich die AppID eines Steam-Spiels?</u></span>`
            ],
            inclusionnew: "Neue Einschlussliste",
            inclusionnewsub: [
                `Gib die <span class="hl">AppID</span> ein, die zur <span class="hl">Einschlussliste</span> hinzugefügt werden soll`
            ],
            inclusionedit: "Einschluss bearbeiten",
            inclusioneditsub: [
                `Bearbeite die vorhandene <span class="hl">AppID</span> in der <span class="hl">Einschlussliste</span>`
            ]
        }
    },
    notificationelems: {
        title: "Benachrichtigungselemente",
        content: {
            unlockmsg: "Freischalt-Nachricht",
            title: "Erfolgstitel",
            desc: "Erfolgsbeschreibung",
            hiddeniconpos: "Versteckt-Symbol",
            sshiddeniconpos: "Versteckt-Symbol",
            decorationpos: "Dekoration",
            ssdecorationpos: "Dekoration",
            percentpos: "Seltenheitsprozentsatz",
            sspercentpos: "Seltenheitsprozentsatz",
            percentbadge: "Prozentabzeichen",
            sspercentbadge: "Prozentabzeichen",
            percentbadgepos: "Position des Abzeichens",
            sspercentbadgepos: "Position des Abzeichens",
            percentbadgecolor: "Farbe des Abzeichens",
            sspercentbadgecolor: "Farbe des Abzeichens",
            percentbadgefontcolor: "Schriftfarbe des Abzeichens",
            sspercentbadgefontcolor: "Schriftfarbe des Abzeichens",
            percentbadgefontsize: "Größe des Abzeichens",
            sspercentbadgefontsize: "Größe des Abzeichens",
            percentbadgeroundness: "Rundheit des Abzeichens",
            sspercentbadgeroundness: "Rundheit des Abzeichens",     
            percentbadgex: "Horizontaler Versatz",
            sspercentbadgex: "Horizontaler Versatz",
            percentbadgey: "Vertikaler Versatz",
            sspercentbadgey: "Vertikaler Versatz",
            percentbadgeimg: "Symbol verwenden",
            sspercentbadgeimg: "Symbol verwenden",
            percentbadgeimgbronze: "Seltenheit: > $semirarity",
            sspercentbadgeimgbronze: "Seltenheit: > $semirarity",
            percentbadgeimgsilver: "Seltenheit: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Seltenheit: < $semirarity & > $rarity",
            percentbadgeimggold: "Seltenheit: < $rarity",
            sspercentbadgeimggold: "Seltenheit: < $rarity",
            resetpbimgs: "Abzeichen-Symbole zurücksetzen",
            elemsmatch: "Customiser-Einstellungen übereinstimmen",
            ssdisplay: "Screenshot-Vorschau"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Füge die <span class="hl">AppID</span> eines Spiels hinzu, um automatisch die <span class="hl">Designs</span> zu wechseln, wenn es erkannt wird`,
                `Jedes gespeicherte <span class="hl">Design</span> kann für jeden Benachrichtigungstyp ausgewählt werden, zusammen mit dem gewünschten Monitor, der als <span class="hl">Screenshot-Quelle</span> verwendet wird`,
                `<span class="hl" id="appidhelp"><u>Wie finde ich die AppID eines Steam-Spiels?</u></span>`
            ],
            themeswitchnew: "Neuer automatischer Wechsel",
            themeswitchnewsub: [
                `Geben Sie die <span class="hl">AppID</span> des Spiels ein, zusammen mit dem gewünschten Monitor, der als <span class="hl">Screenshot-Quelle</span> verwendet wird`,
                `Wählen Sie das <span class="hl">Design</span>, zu dem für jeden Benachrichtigungstyp gewechselt werden soll, wenn die <span class="hl">AppID</span> dieses Spiels erkannt wird`
            ],
            themeswitchedit: "Automatischen Wechsel bearbeiten",
            themeswitcheditsub: [
                `Den gewünschten Monitor bearbeiten, der als <span class="hl">Screenshot-Quelle</span> für die <span class="hl">AppID</span> dieses Spiels verwendet wird`,
                `Ändern, zu welchem <span class="hl">Thema</span> für jeden Benachrichtigungstyp gewechselt wird, wenn die <span class="hl">AppID</span> dieses Spiels erkannt wird`
            ],
            themes: "Designs",
            src: "Screenshot-Quelle",
            themedeleted: "Design gelöscht"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Es scheint, dass du versuchst, die Option <span class="hl">${opt}</span> zu aktivieren, aber diese Option kann nicht aktiviert werden, ohne zuerst das Paket <code class="dialogcode">${dep}</code> zu installieren`,
    `Bitte führe <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> aus, um diese Abhängigkeit zu installieren`
]