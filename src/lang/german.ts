export const translations = {
    global: {
        main: "Haupt",
        rare: "Selten",
        plat: "100%",
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
        exit: "Ausgang",
        releasegame: "Spiel Freigeben",
        releasegamesub: [
            `Starten Sie den Hintergrundprozess des Workers neu und geben Sie das aktuelle Spiel zur Verfolgung frei`,
            `Versuchen Sie diese Option, wenn Sie kürzlich ein Spiel geschlossen haben, aber Steam zeigt es immer noch als laufend an, oder wenn Steam Achievement Notifier immer noch ein bereits geschlossenes Spiel als verfolgt anzeigt`
        ],
        noupdateavailable: "Kein Update Verfügbar",
        latestversion: "Neueste Version Installiert",
        missingdeps: "Fehlende Abhängigkeit",
        missingdepssub: [
            `Es scheint, dass Sie versuchen, die Option <span class="hl">Steam-Screenshot aufnehmen</span> zu aktivieren. Auf Linux können jedoch keine Bildschirmfotos automatisch ausgelöst werden, ohne zuerst das Paket <code class="dialogcode">xdotool</code> zu installieren`,
            `Bitte führen Sie <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> aus, um diese Abhängigkeit zu installieren, damit Steam-Screenshots auf diesem Gerät gemacht werden können`
        ],
        restartapp: "App Neu Starten",
        restartappsub: [
            `Wenn die Dinge nicht richtig funktionieren, verwenden Sie diese Option, um die App zu schließen und neu zu öffnen`,
            `Wenn das Problem nach dem Neustart der App weiterhin besteht, erwägen Sie bitte, es über die integrierten Links auf dem Startbildschirm zu melden`
        ],
        suspend: "Anhalten",
        resume: "Fortsetzen"
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
            title: "Sprache"
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
                rareonly: "Nur Selten",
                all: "Alle",
                off: "Aus",
                showpercent: "Prozentsatz Anzeigen",
                soundonly: "Nur Ton",
                extwin: "Stream-Benachrichtigungen",
                audiosrc: "Audioquelle",
                notify: "Benachrichtigung",
                app: "Anwendung",
                nowtracking: "Verfolgungshinweis anzeigen",
                nowtrackingscale: "Verfolgungsskala",
                shortcuts: "Benachrichtigungs-Verknüpfungen",
                noiconcache: "Icon-Cache deaktivieren"
            }
        },
        media: {
            title: "Medien",
            content: {
                steamss: "Steam-Screenshot Machen",
                screenshots: "Zusätzliche Medien",
                off: "Aus",
                overlay: "Screenshot mit Benachrichtigungs-Overlay",
                monitors: "Screenshot-Quelle",
                ovpos: "Overlay-Position",
                ovmatch: "Anpassungsposition Anpassen",
                ovpath: "Screenshot-Pfad",
                ssdelay: "Screenshot-Verzögerung",
                notifyimg: "Benachrichtigungsbild",
                imgpath: "Bildpfad"
            }
        },
        accessibility: {
            title: "Barrierefreiheit",
            content: {
                noanim: "App-Fensteranimationen Deaktivieren",
                nvda: "NVDA-Unterstützung Aktivieren",
                tooltips: "Tooltips Anzeigen"
            }
        },
        advanced: {
            title: "Erweitert",
            content: {
                pollrate: "Abfrageintervall",
                releasedelay: "Veröffentlichungsverzögerung",
                maxretries: "Maximale Wiederholungsversuche",
                debug: "Debug-Panel",
                userust: "Alternativer Verarbeitungsmodus",
                notifydebug: "Debug-Benachrichtigungen Anzeigen",
                usecustomfiles: "Benutzerdefinierte App-Dateien Verwenden",
                showcustomfiles: "Benutzerdefinierte App-Dateien Anzeigen"
            }
        },        
        misc: {
            title: "Verschiedenes",
            content: {
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
                iconanim: "Seltene Icon-Animation",
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
                bgimgbrightness: "Helligkeit",
                brightness: "Helligkeit",
                roundness: "Abgerundetheit",
                fontsize: "Schriftgröße",
                opacity: "Deckkraft",
                bgonly: "Nur Hintergrund"
            }
        },
        colors: {
            title: "Farben",
            content: {
                primarycolor: "Primärfarbe",
                secondarycolor: "Sekundärfarbe",
                tertiarycolor: "Tertiärfarbe",
                fontcolor: "Schriftfarbe",
                fontoutline: "Schriftumrandung",
                fontoutlinecolor: "Farbe der Schriftumrandung",
                fontshadow: "Schriftschatten",
                fontshadowcolor: "Farbe des Schriftschattens"
            }
        },
        icons: {
            title: "Symbole",
            content: {
                iconroundness: "Symbole abrunden",
                plat: "100%-Logo",
                usegameicon: "Spiel-Symbol verwenden",
                logo: "Logo",
                decoration: "Dekoration",
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
                resetcustompos: "Zurücksetzen"
            }
        },
        theme: {
            title: "Thema",
            content: {
                savetheme: "Thema speichern",
                sub: [
                    `Gespeicherte <span class="hl">Benutzerthemen</span> können im Menü <span class="hl">Thema auswählen</span> auf dem Startbildschirm ausgewählt werden.`,
                    `Stellen Sie sicher, dass der <span class="hl">Themenname</span> <u>eindeutig</u> ist - ein Name, der mit einem vorhandenen Thema übereinstimmt, <u>überschreibt das vorherige</u>!`
                ],
                placeholder: "Themenname",
                theme: "Thema"
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
        customise: "Benutzerdefinierte Anpassung der Erfolgsmeldungen",
        test: "Zeigen Sie eine Testbenachrichtigung an, einschließlich aller Anpassungen",
        kofi: "Spenden Sie auf Ko-Fi!",
        discord: "Treten Sie dem Discord bei!",
        github: "Melden Sie ein Problem",
        lang: "Wählen Sie die UI-Sprache, die in der App verwendet wird",
        desktop: "Schalten Sie eine Verknüpfung auf dem Desktop ein, um die App auszuführen",
        startwin: "Starten Sie Steam Achievement Notifier automatisch nach dem Anmelden",
        startmin: "Nach dem Starten die App-Benutzeroberfläche ausblenden, bis sie aus dem System Tray geöffnet wird",
        nohwa: `Deaktivieren Sie die Hardwarebeschleunigung, um die Leistung auf Systemen mit geringeren Ressourcen oder Systemen ohne dedizierte GPU zu verbessern<br><br><span class="ttdesc">Die App wird nach Aktivierung/Deaktivierung dieser Option neu gestartet</span>`,
        litemode: "Deaktivieren Sie alle interaktiven UI-Elemente und bieten Sie nur begrenzte App-Funktionalität über das System Tray-Symbol. Kann die von der App verbrauchten Ressourcen verbessern",
        rarity: "Der Prozentsatz, bei dem seltene Erfolgsmeldungen ausgelöst werden. Jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert wird als Hauptbenachrichtigung angezeigt",
        showpercent: "Zeigen Sie den Freischaltungsprozentsatz des Erfolgs in der Benachrichtigung für die ausgewählten Typen an",
        soundonly: "Deaktivieren Sie Benachrichtigungen und spielen Sie nur Sounds ab, die über den Customiser festgelegt wurden",
        extwin: "Erstellen Sie ein verstecktes Hintergrundfenster, das alle derzeit angezeigten Benachrichtigungen dupliziert. Dieses Fenster kann dann als Fenstererfassungsquelle für Streaming-Software wie OBS hinzugefügt werden",
        audiosrc: "Wählen Sie die Quelle des vom Programm generierten Audios aus (oder deaktivieren Sie es)",
        nowtracking: "Zeigen Sie eine Benachrichtigung an, die den Benutzer darüber informiert, dass Erfolge für ein laufendes Spiel verfolgt werden",
        nowtrackingscale: `Größe der Verfolgungshinweis festlegen`,
        shortcuts: "Lösen Sie eine Testbenachrichtigung über eine Tastenkombination aus. Die Tastenkombinationen können für jeden Benachrichtigungstyp angepasst werden",
        noiconcache: `Deaktiviert das Zwischenspeichern von Erfolgsymbolen beim Starten von Spielen.<br><br><span class="ttdesc">Dies kann die Leistung der App beim Starten von Spielen erheblich verbessern und auch Probleme mit der Verfolgung von Spielen mit einer großen Anzahl von Erfolgen lösen. Die Deaktivierung des Icon-Caches kann jedoch in seltenen Fällen dazu führen, dass Erfolgssymbole in Benachrichtigungen fehlen</span>`,
        steamss: "Erstellen Sie einen Steam-Screenshot, wenn ein Erfolg freigeschaltet wird",
        screenshots: "Wählen Sie den Typ des zusätzlichen Mediums aus, das erstellt werden soll, wenn eine Benachrichtigung angezeigt wird",
        monitors: "Der Monitor, der erfasst wird, wenn der Screenshot aufgenommen wird",
        ovpos: "Die Position der Benachrichtigungsüberlagerung im Screenshot",
        ovmatch: "Übereinstimmung mit der im Customiser festgelegten Bildschirmposition für diesen Benachrichtigungstyp",
        ovpath: "Der Speicherort, an dem Screenshots gespeichert werden, die von dieser Option generiert werden",
        ssdelay: "Fügen Sie eine Verzögerung von der Benachrichtigung bis zur Aufnahme des Screenshots hinzu",
        sspreview: "Zeigen Sie eine Vorschau an, wie der Screenshot gespeichert wird",
        noanim: "Deaktivieren Sie alle Fensteranimationen und Übergangseffekte in der App",
        nvda: "Aktivieren Sie das Kopieren von Erfolgsinformationen in die Zwischenablage, wenn ein Erfolg freigeschaltet wird, um von Bildschirmleseprogrammen wie NVDA gelesen zu werden",
        tooltips: "Zeigen Sie Tooltips an, wenn Sie über bestimmte UI-Elemente schweben",
        pollrate: `Legen Sie das Aktualisierungsintervall für Erfolgsdaten während des Spiels fest<br><br><span class="ttdesc">Die Leistung kann je nach Wert oder Systemhardware steigen/abfallen. Höhere Werte führen normalerweise zu einer geringeren Systemlast, können aber auch zu einer stärkeren Verzögerung bei Benachrichtigungen führen</span>`,
        releasedelay: `Legt fest, wie lange der Hintergrundprozess warten soll, um nach der Veröffentlichung des aktuellen Spiels neu zu starten. Beeinflusst sowohl die automatische Prozessüberwachung als auch manuell verknüpfte Spiele.<br><br><span class="ttdesc">Ermöglicht einen längeren Zeitrahmen, um Steamworks vollständig von der App freizugeben. Eine Erhöhung dieses Werts kann ungewöhnliches Verhalten verhindern, wie z.B. das Verfolgen eines zuvor geschlossenen Spiels</span>`,
        maxretries: `Legt die maximale Anzahl von Versuchen fest, um einen laufenden Prozess mit einer erkannten AppID zu verknüpfen. Beeinflusst sowohl die automatische Prozessüberwachung als auch manuell verknüpfte Spiele.<br><br><span class="ttdesc">Verbindungsversuche werden einmal pro Sekunde durchgeführt. Wenn ein laufender Prozess nach dieser Anzahl von Versuchen nicht mit der aktuellen AppID verknüpft ist, wird ein ungültiger Prozess zurückgegeben. In solchen Fällen muss das Spiel manuell über das System-Tray > Optionen > Spiel freigeben freigegeben werden</span>`,
        debug: "Öffnen Sie das Debug-Panel, das detaillierte Prozessverfolgungsinformationen anzeigt",
        userust: "Verwenden Sie eine alternative Rust-basierte Funktion, um zu überprüfen, ob die verfolgten Spielprozesse derzeit auf dem System ausgeführt werden. Wenn nicht aktiviert, wird stattdessen die Standardprozessüberprüfung auf NodeJS-Basis verwendet.",
        notifydebug: "Erstellen Sie ein DevTools-Fenster für alle Benachrichtigungen. Nützlich zum Debuggen/Beheben von Benachrichtigungsproblemen",
        usecustomfiles: "Aktivieren Sie Benachrichtigungen, um benutzerdefinierbare Dateien zu laden. Vorsicht ist für normale Benutzer geboten",
        showcustomfiles: "Öffnen Sie den Speicherort der benutzerdefinierten Dateien",
        log: "Öffnen Sie das App-Protokollfenster, das Informationen über Prozessaktivitäten, Warnungen und Fehler anzeigt",
        reset: "Entfernen Sie alle Konfigurationsdaten und starten Sie die App neu",
        playback: "Pausieren/Fortsetzen der Animation der Benachrichtigungsvorschau",
        replay: "Starten Sie die Animation der Benachrichtigungsvorschau neu",
        preset: "Wählen Sie das zu bearbeitende Benachrichtigungsvorlagen aus",
        iconanim: "Aktivieren/Deaktivieren des animierten Rahmens und der Animation des seltenen Symbols",
        alldetails: "Zeigen Sie alle Textelemente in der Benachrichtigung an, einschließlich der standardmäßig ausgeblendeten Elemente für diese Vorlage",
        usepercent: "Den Freischaltprozentsatz der Leistung anzeigen, anstelle des XP/S-Werts",
        displaytime: "Legen Sie die Anzeigedauer der Benachrichtigung in Sekunden fest",
        scale: "Vergrößern oder verkleinern Sie die Größe der Benachrichtigung",
        customtext: "Legen Sie eine benutzerdefinierte Nachricht fest, die in der Benachrichtigung angezeigt werden soll",
        usegametitle: "Zeigen Sie den Titel des aktuellen Spiels in der Benachrichtigung an",
        customfont: "Laden Sie eine benutzerdefinierte Schriftart, die in der Benachrichtigung verwendet werden soll",
        soundmode: "Wählen Sie entweder eine einzelne Audiodatei oder eine zufällig ausgewählte Audiodatei aus einem Ordner mit mehreren Audiodateien aus, wenn eine Benachrichtigung auftritt",
        soundfile: "Wählen Sie eine Audiodatei aus, die abgespielt werden soll, wenn eine Benachrichtigung auftritt",
        sounddir: "Wählen Sie einen Ordner aus, aus dem eine Audiodatei zufällig ausgewählt wird, wenn eine Benachrichtigung auftritt",
        volume: "Legen Sie die Wiedergabelautstärke der Audiodatei fest",
        preview: "Vorschau der ausgewählten Audiodatei oder einer zufällig ausgewählten Audiodatei aus dem Ordner",
        bgstyle: "Wählen Sie den Stil für den Hintergrund der Benachrichtigung aus",
        gradientangle: "Legen Sie den Winkel des Farbverlaufs fest",
        bgimg: "Laden Sie eine Bilddatei, die als Hintergrund der Benachrichtigung verwendet werden soll",
        bgimgbrightness: "Legen Sie die Helligkeit des Bildes fest, das als Hintergrund für die Benachrichtigung verwendet wird",
        brightness: "Legen Sie die Helligkeit des als Hintergrund der Benachrichtigung verwendeten Spielbildes fest",
        roundness: "Legen Sie die Rundheit der Benachrichtigungskanten fest",
        fontsize: "Legen Sie die Schriftgröße in der Benachrichtigung fest",
        opacity: "Legen Sie die Gesamttransparenz der Benachrichtigung fest",
        bgonly: "Legen Sie nur die Transparenz für den Benachrichtigungshintergrund fest und behalten Sie andere Elemente bei voller Transparenz",
        primarycolor: "Legen Sie die Primärfarbe der Benachrichtigung fest",
        secondarycolor: "Legen Sie die Sekundärfarbe der Benachrichtigung fest",
        tertiarycolor: "Legen Sie die Tertiärfarbe der Benachrichtigung fest",
        fontcolor: "Legen Sie die Farbe des in der Benachrichtigung angezeigten Textes fest",
        fontoutline: "Fügen Sie allen in der Benachrichtigung angezeigten Texten eine Kontur hinzu",
        fontoutlinecolor: "Legen Sie die Farbe der Textkontur fest",
        fontshadow: "Fügen Sie allen in der Benachrichtigung angezeigten Texten einen Schatten hinzu",
        fontshadowcolor: "Legen Sie die Farbe des Textschattens fest",
        iconroundness: "Legen Sie die Rundheit des Erfolgs-/Spielsymbols in der Benachrichtigung fest",
        plat: "Laden Sie eine Bilddatei, die als 100%-Symbol verwendet werden soll",
        usegameicon: "Ersetzen Sie das Standardbenachrichtigungssymbol durch das Symbol des aktuellen Spiels",
        showhiddenicon: "Ein Bild anzeigen, das anzeigt, dass die Leistung in der Benachrichtigung versteckt ist",
        hiddenicon: "Eine Bilddatei laden, um das Symbol für die versteckte Leistung zu ersetzen",
        logo: "Laden Sie eine Bilddatei, um das Logo-Symbol zu ersetzen",
        decoration: "Laden Sie eine Bilddatei, um das Dekorationssymbol zu ersetzen",
        showdecoration: "Aktivieren/Deaktivieren der Sichtbarkeit des Dekorationssymbols",
        replacelogo: "Ersetze das Logo-Symbol in der Benachrichtigung durch die ausgewählte Dekoration",
        pos: "Legen Sie die Bildschirmposition der Benachrichtigung fest",
        usecustompos: "Aktivieren Sie die benutzerdefinierte Positionierung für die Benachrichtigung",
        setcustompos: "Legen Sie die benutzerdefinierte Position für die Benachrichtigung fest",
        resetcustompos: "Setzen Sie die Position der Benachrichtigung auf die Standardbenutzerposition zurück",
        savetheme: "Speichern Sie alle konfigurierten Anpassungsoptionen als neues Design",
        visibilitybtn: "Die Sichtbarkeit des Elements in benutzerdefinierten Vorschauen und Testbenachrichtigungen umschalten",
        delbtn: "Das Element auf den Standardwert zurücksetzen",
        link: `Öffne <span class="hl">Menü für verknüpfte Spiele verwalten</span>`,
        imgpath: "Der Speicherort, an dem Benachrichtigungsbilder, die von dieser Option generiert wurden, gespeichert werden"
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
    "linkgame": {
        "content": {
            "exepath": "Ausführungspfad",
            "nodata": "Keine Daten",
            "manage": "Verknüpfte Spiele verwalten",
            "managesub": [
                `Verknüpfen Sie manuell die <span class="hl">Ausführungsdatei</span> eines Spiels mit einer bestimmten <span class="hl">AppID</span> oder <span class="hl">heben Sie eine bestehende Verknüpfung auf</span>`,
                `Steam Achievement Notifier wird nicht mehr den <span class="hl">automatischen Prozess-Tracking</span> für irgendwelche <span class="hl">verknüpften Spiele</span> verwenden - stattdessen wird die angegebene <span class="hl">Ausführungsdatei</span> verfolgt, sobald die zugehörige <span class="hl">AppID</span> erkannt wird`,
                `<span class="hl" id="appidhelp"><u>Wie finde ich eine AppID für ein Steam-Spiel?</u></span>`
            ],
            "new": "Neu...",
            "linknew": "Neues verknüpftes Spiel",
            "linknewsub": [
                `Erstellen Sie eine neue Verknüpfung zwischen einer <span class="hl">Spiel-Ausführungsdatei</span> und der zugehörigen <span class="hl">AppID</span>`,
                `Nachdem sie erstellt wurden, können Verknüpfungen über den vorherigen <span class="hl">Dialog „Verknüpfte Spiele verwalten“</span> <span class="hl">aufgehoben</span> werden`
            ],
            "link": "Verknüpfen",
            "findappid": "AppID finden",
            "findappidsub": [
                `Jedes Steam-Spiel hat eine eindeutige Nummer - die <span class="hl">AppID</span>. Sie können die zugehörige AppID eines beliebigen Steam-Spiels finden, indem Sie eines der folgenden überprüfen:`,
                `Im <span class="hl">Steam-Client</span> mit der rechten Maustaste auf ein Spiel in Ihrer <span class="hl">Bibliothek</span> klicken und <i>Eigenschaften</i> > <i>Updates</i> auswählen - die AppID wird hier aufgelistet`,
                `Die <span class="hl">URL</span> der <span class="hl">Shop-Seite</span> des Spiels - es handelt sich um die Zahl, die nach <span class="hl">app/</span> aufgelistet ist: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Websites wie <span class="hl">SteamDB</span> - der Abschnitt <span class="hl">App-Informationen</span> listet die AppID für jedes Spiel auf`
            ]
        }
    }
}