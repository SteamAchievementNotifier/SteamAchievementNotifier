export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Nessun utente rilevato",
                tt: "L'utente di Steam per il quale vengono attualmente monitorati gli achievement"
            },
            gamelbl: {
                elem: gameName ? gameName : "Nessun gioco rilevato",
                tt: "Il gioco per il quale vengono attualmente monitorati gli achievement"
            },
            previewbtn: {
                tt: "Anteprima del suono selezionato"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Predefinito (Nessun file audio selezionato)" : custom.sounddir ? custom.sounddir : "Predefinito (Nessuna cartella audio selezionata)"
            },              
            soundmodelbl: {
                elem: "Modalità audio:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "file" : "casuale"
            },
            togglemain: {
                elem: "Principale",
                tt: "Notifica dell'achievement principale"
            },
            togglerare: {
                elem: "Raro",
                tt: "Notifica dell'achievement raro"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notifica dell'achievement al 100%"
            },
            progresscirclewrapper: {
                tt: "Mostra un'anteprima della notifica personalizzata"
            },
            testbtnwrapper: {
                elem: "Mostra notifica di prova",
                tt: "Mostra un'anteprima della notifica personalizzata",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Personalizza...",
                tt: "Apri il menu di personalizzazione delle notifiche",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam non è in esecuzione"
            },
            updatebtn: {
                tt: "Aggiornamento disponibile"
            },
            kofibtn: "Dona su Ko-Fi!",
            discordbtn: "Unisciti su Discord!",
            githubbtn: "Segnala un problema su GitHub!",
            settingstitlelbl: {
                elem: "Impostazioni"
            },
            configuration: {
                elem: "Configurazione",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Lingua",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Sistema operativo",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notifiche",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Screenshot",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Accessibilità",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Altro",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versione"
            },            
            apikeybtn: {
                tt: "Fai clic qui per ottenere la tua chiave API di Steam Web"
            },
            apikey: {
                placeholder: "Aggiungi chiave API",
                tt: "La chiave API di Steam Web associata al tuo account Steam"
            },
            eyebtn: {
                tt: "Mostra/Nascondi la chiave API"
            },
            apikeylbl: {
                elem: "Ottieni chiave API"
            },
            steam64idbtn: {
                tt: "Fai clic qui per ottenere il tuo ID Steam64"
            },
            steam64id: {
                placeholder: "Aggiungi l'ID Steam64",
                tt: "L'ID Steam64 associato al tuo account Steam"
            },
            steam64idlbl: {
                elem: "Ottieni ID Steam64"
            },
            switchaccountspan: {
                elem: "Cambia account"
            },
            switchaccountbtn: {
                tt: "Passa tra gli account Steam collegati"
            },
            testconnectionlbl: {
                elem: "Test connessione",
                tt: "Testa la connessione con Steam Web API"
            },
            lang: {
                tt: "Imposta la lingua per l'interfaccia utente e le notifiche"
            },            
            desktop: {
                elem: "Crea collegamento sul desktop",
                tt: "Crea un collegamento sul desktop per avviare l'app",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Avvia con Windows",
                tt: "Esegui automaticamente l'app all'avvio di Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Avvia minimizzata",
                tt: "Minimizza l'app nella traybar dopo l'avvio",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Disabilita accelerazione hardware",
                tt: "Disabilita l'accelerazione hardware per la finestra dell'app",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Modalità Lite",
                tt: "Disabilita la finestra principale dell'app per risparmiare risorse di sistema. Restano disponibili opzioni minime tramite l'icona nella traybar per interagire con l'app",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Percentuale di rarità",
                tt: `Verranno visualizzate solo le notifiche degli achievement con una percentuale di sblocco globale inferiore a questo numero`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Modalità solo suono",
                tt: "Disabilita le notifiche, ma riproduce il suono selezionato quando viene sbloccato un achievement",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Mostra tutte le percentuali di sblocco",
                tt: "Visualizza le percentuali di sblocco globali in tutti i tipi di notifica",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplica in finestra esterna",
                tt: `Una finestra esterna che duplica tutte le notifiche. Può essere presa di mira da software di streaming/cattura schermo.<div class="ttwarn">Questa finestra è <u>completamente trasparente</u>. Per evidenziare la posizione attuale della finestra, tieni premuto il tasto <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Mostra notifica "In monitoraggio"`,
                tt: `Attiva/disattiva la notifica "In monitoraggio" quando si avvia un gioco`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Scorciatoie Notifica",
                tt: "Imposta una scorciatoia da tastiera per attivare le Notifiche di Test",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Imposta una scorciatoia per attivare una Notifica di Test per questo tipo"
            },
            sctabmain: {
                tt: "Scorciatoia Notifica Principale"
            },
            sctabrare: {
                tt: "Scorciatoio Notifica Rara"
            },
            sctabplat: {
                tt: "Scorciatoia Notifica 100%"
            },
            screenshotmode: {
                tt: "Scegli la modalità per gli screenshot automatici degli achievement"
            },
            displayscreenshot: {
                elem: "Mostra screenshot nella notifica",
                tt: "Visualizza un'anteprima degli screenshot all'interno della notifica dell'achievement",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Tasto di scatto screenshot Steam",
                tt: "Associa il tasto di scatto screenshot del client Steam per scattare screenshot nativi Steam quando si sbloccano achievement",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Overlay notifica principale"
            },
            ovtabrare: {
                tt: "Overlay notifica rara"
            },
            ovtabplat: {
                tt: "Overlay notifica 100%"
            },
            monitor: {
                elem: "Monitor",
                tt: "Seleziona il monitor da utilizzare come sorgente per gli screenshot",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Posizione overlay",
                tt: "Imposta la posizione dell'overlay di notifica",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Percorso",
                tt: "Imposta il percorso in cui verranno salvati gli screenshot",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Anteprima",
                tt: `Anteprima dell'overlay di notifica`,
                query: "label"
            },
            noanim: {
                elem: "Disabilita animazioni finestra app",
                tt: "Disabilita le animazioni di transizione all'interno della finestra dell'app",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Abilita supporto NVDA",
                tt: "Copia il contenuto della notifica negli appunti per essere letto dal software screen-reader NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Mostra suggerimenti",
                tt: "Attiva/disattiva i suggerimenti al passaggio del mouse sugli elementi dell'app",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Mostra DevTools notifiche",
                tt: "Apre il pannello DevTools delle notifiche quando viene attivato",
                query: ".sanboxlbl"
            },
            filesystem: {
                elem: "Caricamento file",
                tt: `Carica file di notifica e risorse dalla directory eseguibile dell'applicazione, invece di farlo internamente`,
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Visualizza politica privacy",
                tt: "Visualizza la politica sulla privacy di Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Entra nel canale Beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Apri registro app",
                tt: "Visualizza e condividi il contenuto del registro app",
                query: "label"
            },
            resetbtn: {
                elem: "Reimposta app",
                tt: "Rimuovi tutti i dati memorizzati e riavvia l'app",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Metti in pausa/riproduci l'animazione della notifica"
            },
            customiserreplay: {
                tt: "Ripeti l'animazione della notifica"
            },
            customisersavepreset: {
                tt: "Salva le personalizzazioni correnti come un nuovo preset di notifica"
            },
            tabbtnnext: {
                tt: "Avanti"
            },
            tabbtnprev: {
                tt: "Indietro"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Preset di Notifica",
                tt: "Seleziona un preset di notifica da personalizzare",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animazione Icona Rara",
                tt: "Attiva/disattiva l'animazione dello sfondo dell'icona",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Mostra Tutti i Dettagli",
                tt: `Visualizza tutti i dettagli disponibili delle notifiche`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Tempo di Visualizzazione",
                tt: "La durata di visualizzazione della notifica",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Scala",
                tt: "La dimensione della notifica<br><i>*Non riflessa nella finestra di anteprima</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Testo Personalizzato",
                tt: "Mostra un messaggio personalizzato nella notifica",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Utilizza Titolo del Gioco",
                tt: "Mostra il titolo del gioco corrente nella notifica",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Carattere",
                tt: "Carica un file di carattere personalizzato da applicare a tutti gli elementi di testo nella notifica",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Ripristina al carattere predefinito"
            },
            style: {
                elem: "Stile",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Stile Sfondo",
                tt: "Imposta lo stile dello sfondo della notifica",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Angolo Gradiente",
                tt: "Imposta l'angolo del gradiente di colore",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Immagine di Sfondo",
                tt: "Seleziona un file immagine da impostare come sfondo della notifica",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Luminosità",
                tt: "Imposta la luminosità dello sfondo dell'arte del gioco",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Arrotondamento",
                tt: "Imposta l'arrotondamento degli angoli della notifica",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Dimensione del Testo",
                tt: "Imposta la dimensione del carattere",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacità",
                tt: "Imposta l'opacità della notifica",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Solo Sfondo",
                tt: "Applica l'opacità solo allo sfondo, lasciando il testo e le immagini completamente opachi",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Colori",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Colore Primario",
                tt: "Imposta il colore primario della notifica",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Colore Secondario",
                tt: "Imposta il colore secondario della notifica",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Colore del Testo",
                tt: "Imposta il colore del testo",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Contorno del Testo",
                tt: "Applica un contorno a tutto il testo della notifica",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Colore del Contorno",
                tt: "Imposta il colore del contorno del testo",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Ombra del Testo",
                tt: "Applica un'ombra a tutto il testo della notifica",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Colore dell'Ombra",
                tt: "Imposta il colore dell'ombra del testo",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Icona",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Arrotondamento Icona",
                tt: "Imposta l'arrotondamento dell'icona della notifica",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Icona Personalizzata",
                tt: "Utilizza un file immagine come icona personalizzata",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Icona Personalizzata",
                tt: "Seleziona un file immagine da impostare come icona personalizzata",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Ripristina Icona Personalizzata`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Icona al 100%",
                tt: `Utilizza un file immagine come icona personalizzata al 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Icona al 100%",
                tt: `Seleziona un file immagine da impostare come icona personalizzata al 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Reimposta l'icona personalizzata al 100%`,
                query: ".sanboxlbl"
            },
            usegameicon: {
                elem: "Icona del Gioco",
                tt: "Utilizza l'icona del gioco corrente",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Posizione",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Posizione Schermo",
                tt: "Imposta la posizione della notifica sullo schermo",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Posizione Libera",
                tt: "Utilizza una posizione personalizzata per la notifica",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Imposta Posizione",
                tt: "Imposta una posizione personalizzata per la notifica",
                query: "label"
            },
            animdir: {
                elem: "Direzione Animazione",
                tt: "Imposta la direzione dell'animazione della notifica",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "INFORMATIVA SULLA PRIVACY"
            },
            ppusagetitle: {
                elem: "UTILIZZO DEI DATI DELLA STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier utilizza la <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> di Valve per recuperare e visualizzare dati relativi all'account Steam dell'utente, tramite la combinazione di chiave API Steam/ID Steam64 fornita all'applicazione dall'utente. Questi dati includono:`
            },
            ppstats: {
                elem: "Statistiche per obiettivi completati e non completati"
            },
            ppusername: {
                elem: "Il tuo nome utente Steam"
            },
            ppsteamgames: {
                elem: "I tuoi giochi Steam giocati"
            },
            ppusagefooter: {
                elem: "In futuro, Steam Achievement Notifier potrebbe utilizzare ulteriori dati della Steam Web API per fornire funzionalità e aggiornamenti aggiuntivi dell'applicazione."
            },
            ppkey64title: {
                elem: "UTILIZZO DELLA CHIAVE API STEAM/ID STEAM64"
            },
            ppauth: {
                elem: "Steam Achievement Notifier richiede all'utente di inserire la combinazione di chiave API Steam/ID Steam64 per l'accesso autenticato alla Steam Web API."
            },
            ppnoauth: {
                elem: "Senza queste informazioni, i collegamenti web (forniti da Valve per accedere alla Steam Web API) utilizzati per recuperare dati relativi all'account Steam dell'utente, inclusi i dati sugli obiettivi, non possono essere accessibili."
            },
            ppstoragetitle: {
                elem: "ARCHIVIAZIONE DEI DATI DELLA STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier memorizza temporaneamente i dati della Steam Web API localmente sul PC dell'utente esclusivamente per l'uso nell'applicazione. Ogni archiviazione temporanea di questi dati è destinata esclusivamente a Steam Achievement Notifier e, in circostanze normali, tutti i dati non persistenti della Steam Web API verranno cancellati dall'archivio locale all'uscita dell'applicazione."
            },
            pppersist: {
                elem: "I dati persistenti archiviati sul dispositivo dell'utente includono solo i dati archiviati dall'applicazione per comodità dell'utente, come la chiave API Steam Web e l'ID Steam64 dell'utente."
            },
            ppdelete: {
                elem: "Questi dati possono essere eliminati manualmente dall'utente in qualsiasi momento, se necessario. I file creati da Steam Achievement Notifier si trovano nella seguente directory:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Attualmente non supportato"
            },
            ppcollecttitle: {
                elem: "POLITICA DI RACCOLTA DATI"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>non invierà mai</u> o memorizzerà dati dell'utente al di fuori del file system locale dell'utente senza il suo esplicito consenso. Ciò include qualsiasi informazione recuperata tramite la Steam Web API per l'uso all'interno dell'applicazione, incluso la combinazione di chiave API Steam/ID Steam64 fornita all'applicazione per l'accesso alla Steam Web API."
            },
            ppconsent: {
                elem: "Con la conferma del consenso e l'uso successivo delle implementazioni di funzioni esistenti o future progettate per inviare informazioni esternamente, l'utente implicitamente concede il permesso di farlo. In questi casi, all'utente verrà sempre comunicata la natura dei dati inviati e verrà richiesto di confermare il consenso all'invio dei dati al di fuori dell'applicazione."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier esclude intenzionalmente qualsiasi mezzo per accedere, visualizzare o raccogliere esternamente qualsiasi informazione fornita all'applicazione dall'utente, ma tramite implementazioni di funzioni esistenti o future, l'applicazione potrebbe essere in grado di inviare dati esternamente per conto dell'utente, ma solo previo suo consenso."
            },
            pprequests: {
                elem: "Le richieste di accesso ai dati della Steam Web API vengono effettuate dall'interno dell'applicazione stessa utilizzando metodi integrati, simili alla funzionalità fornita dai browser web. Queste richieste contengono la combinazione di chiave API Steam/ID Steam64 dell'utente, come richiesto dalla Steam Web API, ma non sono mai intenzionalmente rese disponibili per l'uso o l'intercettazione da parte di altre applicazioni."
            },
            ppusertitle: {
                elem: "RESPONSABILITÀ DELL'UTENTE"
            },
            ppsteamtou: {
                elem: `SCARICANDO E UTILIZZANDO QUALSIASI VERSIONE UFFICIALMENTE RILASCIATA DI STEAM ACHIEVEMENT NOTIFIER TRAMITE <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOSITORY UFFICIALE DI GITHUB</span>, TU, L'UTENTE, DI CONSEGUENZA, TI ATTIENI ALLE SEZIONI 7 E 8 DELLE <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">CONDIZIONI D'USO DELLA STEAM WEB API</span>.`
            },        
            gamedetails: "Dettagli del gioco",
            mustbepublic: "deve essere impostato su Pubblico",            
            nosoundfile: "Predefinito (Nessun file audio selezionato)",
            nosoundfolder: "Predefinito (Nessuna cartella audio selezionata)",
            file: "File",
            randomised: "Casuale",
            audioselectdialog: `Seleziona ${custom.mode === "file" ? "File" : "Cartella"} Audio`,
            imgselectdialog: `Seleziona File Immagine`,
            unsupported: "File non supportato!",
            novalidaudiofiles: "Nessun file audio valido!",
            nolocate: "Impossibile individuare il file!",
            switchaccountstitle: "Cambia account",
            noaccounts: "Aggiungi un account per iniziare!",
            connecting: "Connessione in corso...",
            connected: "Connesso",
            testsuccessuser: `Sei pronto`,
            testsuccess1: `Assicurati che le tue <span>Informazioni di Gioco</span> siano impostate su <span>Pubbliche</span> in <a href="${privacysettings}">Impostazioni sulla Privacy di Steam</a>`,
            testsuccess2: `Verifica che la modalità di visualizzazione del gioco sia impostata su <span>Senza bordi</span> per consentire la visualizzazione delle notifiche sopra la finestra del gioco`,
            noapikeytitle: "Nessuna chiave API",
            noapikeytxt: "Inserisci la tua chiave API",
            noapikeyhint: `Clicca sull'icona <img src="./icon/key.svg" alt=""> per ottenere la tua chiave API`,
            nosteam64idtitle: "Nessun ID Steam64",
            nosteam64idtxt: "Inserisci il tuo ID Steam64",
            nosteam64idhint: `Clicca sull'icona <img src="./icon/id.svg" alt=""> per ottenere il tuo ID Steam64`,
            invalidapikeytitle: "Chiave API non valida!",
            invalidapikeymsg: "Impossibile accedere alla Steam Web API con la chiave API fornita",
            invalidapikeydetail1: "Verifica che la tua chiave API sia corretta",
            invalidapikeydetail2: "Genera una nuova chiave API per il tuo account",
            invalidsteam64idtitle: "ID Steam64 non valido!",
            invalidsteam64idmsg: "Impossibile trovare un account Steam associato all'ID Steam64 fornito",
            invalidsteam64iddetail1: "Verifica che il valore dell'ID Steam64 fornito sia corretto per il tuo account Steam",
            nonetworkfound: "Nessuna connessione di rete attiva trovata",
            connecttonetwork: "Collega il tuo PC a una rete e riprova",
            testdefaulterrortitle: "Si è verificato un errore!",
            testdefaulterrormsg: "Si è verificato un errore durante la connessione alla Steam Web API",
            testdefaulterrordetail1: "Segnala questo problema su Discord o GitHub!",
            sspath: "Seleziona Percorso Immagine",
            wronguser: user ? `${user} non ha effettuato l'accesso a Steam!` : "Nessun account utente collegato trovato!",
            switchuser: "Clicca qui per cambiare account",
            trackingfailed: "Rilevamento fallito!",
            checkapplog: "Verifica il registro dell'applicazione per i dettagli",
            soon: "Prossimamente!",
            gamecomplete: "Completamento al 100%",
            gametitle: "Titolo del Gioco",
            achievementunlocked: "Obiettivo sbloccato",
            achievementtitle: "Titolo dell'Obiettivo",
            allachievements: "Hai sbloccato tutti gli obiettivi!",
            achievementdesc: "Descrizione dell'Obiettivo",
            show: "Mostra",
            quit: "Esci",
            off: "Disattivato",
            steamss: "Immagine In-Gioco di Steam",
            overlayss: "Screenshot con Sovrapposizione",
            match: "Impostazioni di Copia",
            topleft: "In alto a sinistra",
            topcenter: "In alto al centro",
            topright: "In alto a destra",
            bottomleft: "In basso a sinistra",
            bottomcenter: "In basso al centro",
            bottomright: "In basso a destra",
            solid: "Solido",
            gradient: "Gradiente",
            bgimg: "Immagine di Sfondo",
            gameart: "Arte del Gioco",
            up: "Su",
            down: "Giù",
            left: "Sinistra",
            right: "Destra",
            tracking: "Monitoraggio",
            inuse: "In uso da",
            invalidshortcut: "Scorciatoia non valida",
            nofont: "Nessun Carattere",
            fontselectdialog: "Seleziona File del Carattere"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Seleziona un file audio da riprodurre quando viene sbloccato un obiettivo" : "Seleziona una cartella contenente file audio da riprodurre in modo casuale quando viene sbloccato un obiettivo");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Ecco un registro di quanto è successo dall'avvio dell'applicazione alle"
            },
            copylbl: {
                elem: "Copia contenuti registro"
            },
            openlbl: {
                elem: "Genera file di registro"
            },            
        }

        return translations
    }
}