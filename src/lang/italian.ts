export const translations = {
    global: {
        main: "Principale",
        rare: "Raro",
        plat: "100%",
        topleft: "In alto a sinistra",
        topcenter: "In alto al centro",
        topright: "In alto a destra",
        bottomleft: "In basso a sinistra",
        bottomcenter: "In basso al centro",
        bottomright: "In basso a destra",
        ok: "OK",
        preview: "Anteprima",
        save: "Salva",
        back: "Indietro",
        settings: "Impostazioni",
        appversion: "Versione dell'app",
        image: "Immagine",
        audio: "Audio",
        folder: "Cartella",
        font: "Carattere",
        select: "Seleziona",
        gametitle: "Titolo del gioco",
        congrats: "Congratulazioni!",
        achievementunlocked: "Obiettivo sbloccato",
        gamecomplete: "100% Completato",
        achievementdesc: "Cliccato sul pulsante Mostra notifica di test",
        gamecompletedesc: "Hai sbloccato tutti gli obiettivi!",
        defaultcustomfont: "Predefinito (Nessun carattere selezionato)",
        defaultsoundfile: "Predefinito (Nessun file audio selezionato)",
        defaultsounddir: "Predefinito (Nessuna cartella selezionata)",
        nowtracking: "Segui ora gli obiettivi per:",
        nopreview: "Anteprima non disponibile per il sistema operativo nativo",
        options: "Opzioni",
        resetwindow: "Ripristina Finestra",
        show: "Mostra",
        exit: "Esci",
        releasegame: "Rilascia Gioco",
        releasegamesub: [
            `Riavvia il processo Worker in background e rilascia il gioco corrente dal tracciamento`,
            `Prova questa opzione se hai recentemente chiuso un gioco ma Steam lo mostra ancora come in esecuzione, o se Steam Achievement Notifier mostra ancora il tracciamento di un gioco che è già stato chiuso`
        ],
        noupdateavailable: "Nessun aggiornamento disponibile",
        latestversion: "Ultima versione installata",
        missingdeps: "Dipendenza mancante",
        restartapp: "Riavvia App",
        restartappsub: [
            `Se le cose non funzionano correttamente, utilizza questa opzione per chiudere e riaprire l'applicazione`,
            `Se il problema persiste dopo aver riavviato l'applicazione, considera di segnalarlo utilizzando i collegamenti integrati nella schermata iniziale`
        ],
        suspend: "Sospendi",
        resume: "Riprendi",
        new: "Nuovo...",
        nodata: "Nessun dato",
        findappid: "Trova AppID",
        findappidsub: [
            `Ogni gioco Steam ha un numero univoco associato - chiamato <span class="hl">AppID</span>. Puoi trovare l'AppID associato a qualsiasi gioco Steam controllando uno dei seguenti metodi:`,
            `Nel <span class="hl">client Steam</span>, fai clic con il pulsante destro del mouse su un gioco nella tua <span class="hl">Biblioteca</span> e seleziona <i>Proprietà</i> > <i>Aggiornamenti</i> - l'AppID verrà elencato qui`,
            `L' <span class="hl">URL</span> della pagina del <span class="hl">Negozio</span> del gioco - sarà il numero elencato dopo <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Siti web come <span class="hl">SteamDB</span> - la sezione <span class="hl">Info App</span> elencherà l'AppID per ogni gioco`
        ],
        noexe: "File EXE del gioco non trovato!",
        noexesub: "Clicca qui per maggiori informazioni",
        noexedialogsub: [
            `Steam Achievement Notifier non è riuscito a trovare automaticamente il file eseguibile per questo gioco. È necessaria la posizione del file eseguibile per "rilasciare" il gioco`,
            `Per rilasciare il gioco manualmente, <i>clicca con il tasto destro</i> sull'icona della <span class="hl">barra delle applicazioni</span> > <span class="hl">Opzioni</span> > <span class="hl">Rilascia gioco</span>, oppure usa la <span class="hl">Scorciatoia per Rilasciare il Gioco</span>`,
            `In alternativa, clicca sul pulsante <span class="hl">Collega</span> qui sotto per aggiungere il file eseguibile associato alla finestra attiva al menu <span class="hl">Giochi collegati</span>`,
            `<span class="hl help" id="linkgamehelp"><u>Cosa succede quando clicco sul pulsante Collega?</u></span>`
        ],
        linkgamehelp: "Collega il gioco tramite la finestra",
        linkgamehelpsub: [
            `Cliccando sul pulsante <span class="hl">Collega</span> verrà automaticamente aggiunta una nuova voce al menu <span class="hl">Impostazioni</span> > <span class="hl">Giochi collegati</span>, utilizzando le informazioni dalla finestra attiva.`,
            `Dopo aver cliccato sul pulsante <span class="hl">Collega</span>, verrà avviato un timer di 5 secondi`,
            `Prima che il timer scada, concentra la finestra del gioco`,
            `Quando il timer sarà scaduto, verrà aggiunta una nuova voce per l'attuale <span class="hl">AppID</span> nel menu <span class="hl">Impostazioni</span> > <span class="hl">Giochi collegati</span>, utilizzando il file eseguibile della finestra attiva`,
            `Se hai bisogno di riprovare, rimuovi la voce da <span class="hl">Impostazioni</span> > <span class="hl">Giochi collegati</span> cliccando sul pulsante <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Impossibile collegare la finestra",
        addlinkfailedsub: `Clicca sul pulsante <span class="hl">Collega</span> per riprovare`,
        webhookunlockmsg: "$user ha sbloccato un successo",
        webhookingame: "in $gamename",
        notconnected: "Non connesso"
    },
    app: {
        content: {
            game: "Nessun gioco rilevato",
            customise: "Personalizza",
            test: "Mostra notifica di test"
        }
    },
    settings: {
        language: {
            title: "Lingua",
            content: {
                steamlang: "Traduci i successi nella lingua di Steam",
                maxsteamlangretries: "Numero massimo di tentativi di traduzione"
            }
        },
        os: {
            title: "Sistema operativo",
            content: {
                desktop: "Crea collegamento sul desktop",
                startwin: "Avvia all'avvio",
                startmin: "Avvia minimizzato",
                nohwa: "Disabilita accelerazione hardware",
                litemode: "Modalità leggera"
            }
        },
        notifications: {
            title: "Notifiche",
            content: {
                rarity: "Percentuale di rarità",
                rareonly: "Solo rare",
                all: "Tutto",
                off: "Spento",
                showpercent: "Mostra percentuale",
                soundonly: "Solo audio",
                extwin: "Notifiche di streaming",
                extwinframerate: "Frequenza dei fotogrammi",
                extwinshow: "Mostra finestra",
                audiosrc: "Sorgente audio",
                notify: "Notifica",
                app: "Applicazione",
                nowtracking: "Mostra notifica di tracciamento",
                nowtrackingscale: "Scala di tracciamento",
                nowtrackingpos: "Posizione di tracciamento",
                shortcuts: "Scorciatoie notifica",
                noiconcache: "Disabilita la cache delle icone",
                webhooks: "Pubblica sul server Discord",
                webhooktypes: "Tipi di Webhook",
                webhookurl: `URL del Webhook`,
                webhookcaution: `Abilitando questa opzione e fornendo un link Webhook Discord valido, accetti di comprendere che <u>tutte le informazioni sui successi e sui giochi per l'attuale utente Steam</u> saranno pubblicate sul server Discord specificato tramite il link Webhook fornito.<br><br>Se non desideri che Steam Achievement Notifier pubblichi queste informazioni per tuo conto, disabilita questa opzione.`,
                webhooklaststatus: "Ultimo Stato"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Fai uno screenshot di Steam",
                screenshots: "Media aggiuntivi",
                off: "Spento",
                overlay: "Screenshot con sovrapposizione notifica",
                monitors: "Sorgente screenshot",
                hdrmode: "Modalità HDR",
                ovpos: "Posizione sovrapposizione",
                ovmatch: "Corrispondenza posizione personalizzata",
                ovx: "Spostamento orizzontale",
                ovy: "Spostamento verticale",                
                ovpath: "Percorso screenshot",
                ssdelay: "Ritardo screenshot",
                notifyimg: "Immagine notifica",
                imgpath: "Percorso dell'immagine",
                statwin: "Finestra delle statistiche dei successi",
                noachievements: "Nessun successo da visualizzare",
                startgame: "Avvia una partita per visualizzare i successi!",
                max: "Massimo",
                custom: "Personalizzato..."
            }
        },
        games: {
            title: "Giochi",
            content: {
                linkedgames: "Giochi collegati",
                themeswitch: "Cambia tema automaticamente",
                exclusionlist: "Lista di esclusione"
            }
        },
        accessibility: {
            title: "Accessibilità",
            content: {
                noanim: "Disabilita animazioni finestra app",
                noupdatedialog: "Disabilita il dialogo degli aggiornamenti",
                nvda: "Abilita supporto NVDA",
                tooltips: "Mostra suggerimenti",
                showsystrayopts: "Mostra opzioni della barra di sistema",
                releaseshortcut: "Scorciatoia per Rilasciare il Gioco"
            }
        },
        advanced: {
            title: "Avanzate",
            content: {
                pollrate: "Frequenza di interrogazione",
                initdelay: "Ritardo di tracciamento",
                releasedelay: "Ritardo di rilascio",
                maxretries: "Numero massimo di nuovi tentativi",
                debug: "Pannello di Debug",
                userust: "Modalità di Elaborazione Alternativa",
                notifydebug: "Mostra notifiche di debug",
                usecustomfiles: "Utilizza file personalizzati dell'applicazione",
                showcustomfiles: "Mostra file personalizzati dell'applicazione"
            }
        },        
        misc: {
            title: "Varie",
            content: {
                checkforupdates: "Controlla gli aggiornamenti",
                log: "Log dell'Applicazione",
                reset: "Reset app"
            }
        }
    },
    customiser: {
        preset: {
            title: "Preset",
            content: {
                preset: "Preset Notifica",
                iconanim: "Animazione Icona Rara",
                alldetails: "Mostra Tutti i Dettagli",
                usepercent: "Usa Percentuale",
                displaytime: "Tempo di Visualizzazione",
                scale: "Scala",
                customtext: "Testo Personalizzato",
                usegametitle: "Usa Titolo Gioco",
                customfont: "Carattere Personalizzato"
            }
        },
        sound: {
            title: "Suono",
            content: {
                soundmode: "Modalità Suono",
                file: "File",
                folder: "Casuale",
                soundfile: "File Audio",
                sounddir: "Cartella Audio",
                volume: "Volume"
            }
        },
        style: {
            title: "Stile",
            content: {
                bgstyle: "Stile Sfondo",
                solid: "Solido",
                gradient: "Gradiente",
                img: "Immagine",
                gameart: "Arte del Gioco",
                gradientangle: "Angolo Gradiente",
                bgimg: "Immagine di Sfondo",
                bgimgbrightness: "Luminosità",
                brightness: "Luminosità",
                blur: "Sfocatura",
                roundness: "Arrotondamento",
                fontsize: "Dimensione Carattere",
                opacity: "Opacità",
                bgonly: "Solo Sfondo",
                glow: "Bagliore",
                glowcolor: "Colore",
                glowsize: "Dimensione",
                glowx: "Spostamento Orizzontale",
                glowy: "Spostamento Verticale",
                glowopacity: "Opacità",
                glowanim: "Animazione",
                glowspeed: "Velocità",
                off: "Nessuno",
                pulse: "Impulso",
                rainbow: "Arcobaleno",
                mask: "Maschera",
                maskimg: "Immagine della maschera",
                outline: "Contorno",
                outlinecolor: "Colore del Contorno",
                outlinewidth: "Larghezza del Contorno",
                dashed: "Tratteggiato",
                dotted: "Puntinato"
            }
        },
        colors: {
            title: "Colori",
            content: {
                primarycolor: "Colore Primario",
                secondarycolor: "Colore Secondario",
                tertiarycolor: "Colore Terziario",
                fontcolor: "Colore Carattere",
                fontoutline: "Contorno Carattere",
                fontoutlinecolor: "Colore Contorno Carattere",
                fontshadow: "Ombra Carattere",
                fontshadowcolor: "Colore Ombra Carattere"
            }
        },
        icons: {
            title: "Icone",
            content: {
                iconroundness: "Arrotondamento Icona",
                plat: "Logo 100%",
                usegameicon: "Usa Icona Gioco",
                logo: "Logo",
                decoration: "Decorazione",
                showdecoration: "Mostra Decorazione",
                rarity: "Rarità",
                showhiddenicon: "Mostra Icona Nascosta",
                hiddenicon: "Icona Nascosta",
                replacelogo: "Sostituisci Logo"
            }
        },
        position: {
            title: "Posizione",
            content: {
                pos: "Posizione Schermo",
                usecustompos: "Usa Posizione Personalizzata",
                setcustompos: "Imposta",
                resetcustompos: "Reimposta"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Aggiorna Tema",
                savetheme: "Salva Tema",
                sub: [
                    `I <span class="hl">Temi Utente</span> salvati possono essere selezionati dal menu <span class="hl">Seleziona Tema</span> nella schermata Home.`,
                    `Assicurati che il <span class="hl">Nome Tema</span> sia <u>unico</u> - un nome che corrisponde a un tema esistente <u>sovrascriverà il precedente</u>!`
                ],
                placeholder: "Nome Tema",
                theme: "Tema",
                importtheme: "Importa Tema",
                import: "Importa",
                importsub: [
                    `Importa un <span class="hl">file del tema</span> creato dall'utente`,
                    `I <span class="hl">temi importati</span> verranno caricati automaticamente una volta importati con successo e potranno essere selezionati dal menu <span class="hl">Seleziona tema</span>`,
                ],
                importidle: `Seleziona un <span class="hl">file del tema</span> da importare`,
                importcopied: `Tema copiato con successo`,
                importrenamed: `Tema rinominato con successo`,
                importextracted: `Tema estratto con successo`,
                importrewriting: `Riscrittura dei percorsi del file del tema...`,
                importconverting: `Conversione del tema...`,
                importcreating: `Creazione del tema...`,
                importdone: `Tema importato con successo`,
                importfailed: `Errore durante l'importazione del file del tema selezionato!`,
                exporttheme: "Esporta Tema",
                export: "Esporta",
                exporterrortitle: "Errore di Esportazione",
                exporterrorsub: [
                    "Si è verificato un errore durante il tentativo di esportare il tema selezionato",
                    `Prova a salvare il tema attuale (<i>tramite <span class="hl">Salva Tema</span></i>) e riprova a esportare`,
                    `Se il problema persiste, copia l'errore qui sotto e riportalo tramite i pulsanti di collegamento nella <span class="hl">Schermata Iniziale</span>`
                ],
                synctheme: "Sincronizza tema",
                syncedwith: "Sincronizzato con",
                themeselect: "Tema selezionato"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Ecco cosa è successo dall'avvio dell'applicazione alle",
            copylog: "Copia Contenuto Registro"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Sei sicuro?</span>
                    <span>Tutti i dati configurati in precedenza, <u>inclusi i Personalizzazioni</u>, saranno reimpostati ai valori predefiniti.</span>
                    <span>🛑 Questa operazione non può essere annullata!</span>
                </div>
            `,
            reset: "Reimposta"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier ha riscontrato un problema e deve essere chiuso.",
            details: "Ecco i dettagli dell'errore:",
            sub: "Fai clic sui pulsanti sottostanti per segnalare questo problema tramite la tua piattaforma preferita.",
            report: "Segnala",
            log: "Registro App",
            exit: "Esci"
        }
    },
    tooltips: {
        game: "Il gioco per il quale vengono attualmente tracciati gli obiettivi",
        usertheme: "Seleziona un tema precedentemente salvato",
        customise: "Personalizza le notifiche degli obiettivi",
        test: "Mostra una notifica di prova, inclusi eventuali personalizzazioni",
        kofi: "Fai una donazione su Ko-Fi!",
        discord: "Unisciti su Discord!",
        github: "Segnala un problema",
        lang: "Seleziona la lingua dell'interfaccia utente utilizzata nell'app",
        steamlang: `Prova a caricare le traduzioni presenti nei file dell'applicazione di Steam per visualizzare le informazioni sui successi nella lingua scelta dall'utente nel client Steam<br><br><span class="ttdesc">Questa opzione tenta di trovare le traduzioni in un file JSON memorizzato nei dati dell'applicazione di Steam. Se non è possibile trovare una traduzione per il successo attuale, verranno invece mostrate le informazioni sui successi recuperate da Steamworks.</span>`,
        maxsteamlangretries: `Il numero di tentativi (ogni 100 ms) per trovare traduzioni valide per il successo attuale<br><br><span class="ttdesc">Attualmente, Steam memorizza solo una piccola quantità di dati sui successi nel file JSON associato a ciascun gioco. Qualsiasi successo non presente in questo file sarà aggiunto dopo il sblocco del successo.<br><br>Poiché l'aggiunta di nuovi dati può richiedere tempo, aumentare questo valore aumenterà la probabilità di trovare i dati di traduzione per il successo attuale, ma potrebbe anche ritardare la visualizzazione della notifica sullo schermo di quanto calcolato da questa impostazione.<br><br>Se non è possibile trovare dati di traduzione validi per il successo attuale, la traduzione tornerà alla lingua specificata in Steamworks.</span>`,
        desktop: "Attiva o disattiva una scorciatoia sul desktop per avviare l'app",
        startwin: "Avvia Steam Achievement Notifier automaticamente dopo l'accesso",
        startmin: "Dopo il lancio, nascondi la finestra dell'interfaccia utente dell'app fino a quando non viene aperta dalla barra delle applicazioni",
        nohwa: `Disabilita l'accelerazione hardware, che potrebbe migliorare le prestazioni su sistemi con risorse limitate o sistemi senza una GPU dedicata<br><br><span class="ttdesc">L'applicazione si riavvierà dopo aver abilitato/disabilitato questa opzione</span>`,
        litemode: "Disabilita tutti gli elementi interattivi dell'interfaccia utente, fornendo solo una funzionalità limitata tramite l'icona della barra delle applicazioni. Potrebbe migliorare le risorse utilizzate dall'app",
        rarity: "La percentuale a cui verranno attivate le notifiche per gli obiettivi rari. Qualsiasi obiettivo con una percentuale di sblocco superiore a questo valore verrà visualizzato come notifica principale",
        showpercent: "Mostra la percentuale di sblocco dell'obiettivo nella notifica per i tipi selezionati",
        soundonly: "Disabilita le notifiche, riproducendo solo i suoni impostati tramite il Personalizzatore",
        extwin: "Crea una finestra di sfondo nascosta che duplica qualsiasi notifica attualmente visualizzata sullo schermo. Questa finestra può quindi essere aggiunta come sorgente di cattura finestra per l'utilizzo in software di streaming, come OBS",
        extwinframerate: "Imposta la frequenza dei fotogrammi di destinazione per le notifiche di streaming",
        extwinshow: "Attiva/disattiva la visibilità della finestra delle notifiche di streaming",
        audiosrc: "Seleziona la sorgente (o disabilita) l'audio generato dall'app",
        nowtracking: "Mostra una notifica che informa l'utente che gli obiettivi per un gioco in esecuzione vengono tracciati",
        nowtrackingscale: `Imposta la dimensione della notifica di tracciamento`,
        nowtrackingpos: `Imposta la posizione della notifica di tracciamento`,
        shortcuts: "Attiva una notifica di prova tramite una scorciatoia da tastiera. Le scorciatoie possono essere personalizzate per ogni tipo di notifica",
        noiconcache: `Disabilita la cache delle icone dei traguardi durante l'avvio dei giochi.<br><br><span class="ttdesc">Ciò può migliorare notevolmente le prestazioni dell'app durante l'avvio dei giochi e risolvere anche problemi di tracciamento con giochi che hanno un gran numero di traguardi. Tuttavia, in casi rari, disabilitare la cache delle icone può comportare la mancanza di icone di traguardi nelle notifiche</span>`,
        steamss: "Scatta uno screenshot di Steam quando viene sbloccato un obiettivo",
        screenshots: "Seleziona il tipo di media aggiuntivo da creare quando viene visualizzata una notifica",
        monitors: "Il monitor che verrà catturato durante la creazione dello screenshot",
        hdrmode: `Scatta screenshot utilizzando un metodo compatibile con i monitor che utilizzano l'High Dynamic Range (HDR)`,
        ovpos: "La posizione dell'overlay della notifica nello screenshot",
        ovmatch: "Corrispondi alla posizione dello schermo impostata nel Personalizzatore per questo tipo di notifica",
        ovpath: "La posizione in cui verranno salvati gli screenshot generati da questa opzione",
        ssdelay: "Aggiungi un ritardo tra l'occorrenza della notifica e la creazione dello screenshot",
        sspreview: "Mostra un'anteprima di come apparirà lo screenshot quando viene salvato",
        noanim: "Disabilita tutte le animazioni delle finestre dell'app e gli effetti di transizione",
        noupdatedialog: `Impedisce che il dialogo <span class="hl">Aggiornamento disponibile</span> venga visualizzato e messo automaticamente in primo piano<br><br><span class="ttdesc">Il dialogo può comunque essere aperto cliccando sul pulsante di aggiornamento quando disponibile</span>`,
        nvda: "Abilita la copia delle informazioni sugli obiettivi negli appunti quando viene sbloccato un obiettivo, in modo da poter essere letto da software di lettura dello schermo, come NVDA",
        tooltips: "Mostra le descrizioni comandi quando si passa il mouse su determinati elementi dell'interfaccia utente",
        pollrate: `Imposta l'intervallo di aggiornamento per i dati sugli obiettivi durante il gioco<br><br><span class="ttdesc">Le prestazioni possono aumentare/diminuire a seconda del valore o dell'hardware del sistema. Valori più alti di solito comportano un carico di sistema inferiore, ma possono ritardare le notifiche</span>`,
        initdelay: `Imposta il ritardo tra il rilevamento dell'attuale <span class="hl">AppID</span> e l'avvio del tracciamento dei processi/conquiste<br><br><span class="ttdesc">Aumentando questo valore è possibile evitare scenari in cui Steam non riesce a avviare il gioco corrente (a causa dell'inizializzazione dell'applicazione in Steamworks prima del lancio del gioco)</span><br><br><span class="ttdesc">In alternativa, aumentare questo valore può anche essere utilizzato per evitare la rilevazione errata dei processi di avvio pre-gioco</span>`,
        releasedelay: `Imposta quanto tempo il processo in background deve attendere per riavviarsi dopo che il gioco attuale è stato rilasciato. Influenza sia il monitoraggio automatico dei processi che i giochi collegati manualmente.<br><br><span class="ttdesc">Consente un periodo più lungo per il completo rilascio di Steamworks dall'applicazione. Aumentare questo valore può prevenire comportamenti insoliti, come il tracciamento di un gioco precedentemente chiuso</span>`,
        maxretries: `Imposta il numero massimo di tentativi per collegare un processo in esecuzione a un AppID rilevato. Influenza sia il monitoraggio automatico dei processi che i giochi collegati manualmente.<br><br><span class="ttdesc">I tentativi di collegamento vengono effettuati una volta al secondo. Se un processo in esecuzione non è collegato all'AppID corrente dopo questo numero di tentativi, verrà restituito un processo non valido. In tali casi, il gioco dovrà essere rilasciato manualmente tramite Tray di Sistema > Opzioni > Rilascia Gioco</span>`,
        debug: "Apri il Pannello di Debug, che mostra informazioni dettagliate sul tracciamento dei processi",
        userust: "Utilizza una funzione alternativa basata su Rust per verificare se i processi di gioco tracciati sono attualmente in esecuzione sul sistema. Quando non selezionato, verrà utilizzato invece il controllo dei processi predefinito basato su NodeJS.",
        notifydebug: "Crea una finestra DevTools per tutte le notifiche. Utile per il debug/risoluzione dei problemi delle notifiche",
        usecustomfiles: "Abilita le notifiche per caricare file personalizzabili dall'utente. Si consiglia cautela per gli utenti comuni",
        showcustomfiles: "Apri la posizione dei file personalizzati",
        log: "Apri la finestra del registro dell'app, che visualizza informazioni sull'attività del processo, avvisi ed errori",
        reset: "Rimuove tutti i dati di configurazione e riavvia l'app",
        playback: "Metti in pausa/riprendi l'animazione dell'anteprima della notifica",
        replay: "Riavvia l'animazione dell'anteprima della notifica",
        preset: "Seleziona il preset di notifica da personalizzare",
        iconanim: "Attiva o disattiva il bordo e l'animazione dell'icona rara",
        alldetails: "Mostra tutti gli elementi di testo all'interno della notifica, inclusi quelli nascosti per impostazione predefinita per questo preset",
        usepercent: "Mostra la percentuale di sblocco dell'obiettivo, invece del valore XP/S",
        displaytime: "Imposta il numero di secondi in cui verrà visualizzata la notifica",
        scale: "Aumenta o diminuisci le dimensioni della notifica",
        customtext: "Imposta un messaggio personalizzato da visualizzare nella notifica",
        usegametitle: "Mostra il titolo del gioco corrente nella notifica",
        customfont: "Carica un carattere personalizzato da utilizzare nella notifica",
        soundmode: "Seleziona un singolo file audio o un file audio selezionato casualmente da una cartella contenente più file audio quando si verifica una notifica",
        soundfile: "Seleziona un file audio da riprodurre quando si verifica una notifica",
        sounddir: "Seleziona una cartella da cui verrà selezionato casualmente un file audio quando si verifica una notifica",
        volume: "Imposta il volume di riproduzione del file audio",
        preview: "Anteprima del file audio selezionato o di un file audio selezionato casualmente dalla cartella",
        bgstyle: "Seleziona lo stile dello sfondo della notifica",
        gradientangle: "Imposta l'angolo del gradiente",
        bgimg: "Carica un file immagine da utilizzare come sfondo della notifica",
        bgimgbrightness: "Imposta la luminosità dell'immagine utilizzata come sfondo della notifica",
        brightness: "Imposta la luminosità dell'immagine del gioco utilizzata come sfondo della notifica",
        blur: "Imposta il livello di sfocatura applicato allo sfondo della notifica",
        roundness: "Imposta l'arrotondamento dei bordi della notifica",
        fontsize: "Imposta la dimensione del carattere utilizzato nella notifica",
        opacity: "Imposta l'opacità complessiva della notifica",
        bgonly: "Imposta solo l'opacità dello sfondo della notifica, mantenendo gli altri elementi a piena opacità",
        glow: "Abilita un effetto di glow che circonda la notifica",
        glowcolor: "Imposta il colore dell'effetto glow",
        glowsize: "Imposta la dimensione dell'effetto glow",
        glowx: "Sposta l'effetto di glow orizzontalmente",
        glowy: "Sposta l'effetto di glow verticalmente",
        glowopacity: "Imposta l'opacità dell'effetto di glow",
        glowanim: "Seleziona un'animazione predefinita da applicare all'effetto glow",
        glowspeed: "Imposta la velocità dell'animazione applicata all'effetto glow",
        mask: "Abilita la mascheratura di parti della notifica con un'immagine personalizzata",
        maskimg: `Carica un file immagine da utilizzare come maschera<br><br><span class="ttdesc">In CSS, <code class="ttcode">mask-mode: alpha</code> funziona in modo opposto a quanto ci si aspetta di solito: le aree di trasparenza nel file immagine verranno oscurate, mentre le aree nere/grigie permetteranno agli elementi sottostanti di essere visibili</span>`,
        outline: "Seleziona il tipo di contorno da mostrare attorno alla notifica",
        outlinecolor: "Imposta il colore del contorno attorno alla notifica",
        outlinewidth: "Imposta la larghezza del contorno attorno alla notifica",
        primarycolor: "Imposta il colore primario della notifica",
        secondarycolor: "Imposta il colore secondario della notifica",
        tertiarycolor: "Imposta il colore terziario della notifica",
        fontcolor: "Imposta il colore del testo visualizzato nella notifica",
        fontoutline: "Aggiungi un contorno a tutto il testo visualizzato nella notifica",
        fontoutlinecolor: "Imposta il colore del contorno del testo",
        fontshadow: "Aggiungi un'ombra a tutto il testo visualizzato nella notifica",
        fontshadowcolor: "Imposta il colore dell'ombra del testo",
        iconroundness: "Imposta l'arrotondamento dell'icona dell'obiettivo/gioco visualizzata nella notifica",
        plat: "Carica un file immagine da utilizzare come icona al 100%",
        usegameicon: "Sostituisci l'icona predefinita della notifica con l'icona del gioco corrente",
        showhiddenicon: "Mostra un'immagine che indica che l'obiettivo è nascosto nella notifica",
        hiddenicon: "Carica un file immagine per sostituire l'icona dell'obiettivo nascosto",
        logo: "Carica un file immagine per sostituire l'icona del logo",
        decoration: "Carica un file immagine per sostituire l'icona di decorazione",
        showdecoration: "Attiva o disattiva la visibilità dell'icona di decorazione",
        replacelogo: "Sostituisci l'icona del logo nella notifica con la decorazione selezionata",
        pos: "Imposta la posizione della notifica sullo schermo",
        usecustompos: "Abilita il posizionamento personalizzato per la notifica",
        setcustompos: "Imposta la posizione personalizzata per la notifica",
        resetcustompos: "Reimposta la posizione della notifica alla posizione personalizzata predefinita",
        updatetheme: "Aggiorna il Tema attuale con le opzioni di personalizzazione selezionate",
        savetheme: "Salva tutte le opzioni di personalizzazione configurate come un nuovo tema",
        visibilitybtn: "Attiva/disattiva la visibilità dell'elemento nelle anteprime personalizzate e nelle notifiche di test",
        delbtn: "Ripristina l'elemento al valore predefinito",
        imgpath: "Il luogo in cui verranno salvate le immagini di notifica generate da questa opzione",
        checkforupdates: `Controlla se è stata rilasciata una nuova versione dell'app su GitHub. Se è disponibile un aggiornamento, verrà scaricato e installato automaticamente una volta confermato tramite la finestra di dialogo <span class="hl">Aggiornamento disponibile</span>`,
        linkedgames: `Evita il <span class="hl">tracciamento automatico dei processi</span> per giochi Steam specifici<br><br><span class="ttdesc">Questa opzione dovrebbe essere utilizzata solo in scenari molto specifici. Gli utenti non dovrebbero avere bisogno di utilizzare questa opzione in circostanze normali!</span>`,
        exclusionlist: `Impedisci il tracciamento degli obiettivi in giochi Steam specifici dall'applicazione<br><br><span class="ttdesc">Questa opzione dovrebbe essere utilizzata solo in scenari molto specifici. Gli utenti non dovrebbero avere bisogno di utilizzare questa opzione in circostanze normali!</span>`,
        ovx: "Sposta la notifica visualizzata nello screenshot in orizzontale",
        ovy: "Sposta la notifica visualizzata nello screenshot in verticale",
        importtheme: `Importa personalizzazioni tramite un <span class="hl">file del tema</span> creato dall'utente`,
        exporttheme: `Esporta il <span class="hl">tema</span> attualmente selezionato per la condivisione<br><br><span class="ttdesc">Prima di procedere con l'esportazione, assicurati che il <span class="hl">tema</span> desiderato sia stato selezionato (tramite il menu <span class="hl">Seleziona tema</span>). Assicurati inoltre che le personalizzazioni siano state salvate nel <span class="hl">tema</span> selezionato (tramite il menu <span class="hl">Salva tema</span>)<br><br><u>Eventuali personalizzazioni non ancora salvate nel <span class="hl">tema</span> corrente non saranno esportate!</u></span>`,
        webhooks: "Utilizza un URL Webhook per pubblicare su un server Discord ogni volta che un successo viene sbloccato",
        webhooktypesmain: `Attiva/disattiva l'invio delle informazioni sugli achievement a un server Discord quando viene sbloccato un achievement principale`,
        webhooktypesrare: "Attiva/disattiva l'invio delle informazioni sugli achievement a un server Discord quando viene sbloccato un achievement raro",
        webhooktypesplat: "Attiva/disattiva l'invio delle informazioni sugli achievement a un server Discord quando viene sbloccato un achievement al 100%",
        webhookurl: `Imposta la <span class="hl">URL del Webhook</span> per il server Discord desiderato<br><br><span class="ttdesc">Una <span class="hl">URL del Webhook</span> viene utilizzata per pubblicare su un server/canale Discord per conto di un utente o di un'applicazione. Per impostare un nuovo Webhook per un server Discord, l'utente deve avere un ruolo nel server desiderato che consenta la creazione di Webhook<br><br><u>Un URL del Webhook è necessario quando si utilizza questa opzione</u><br><br>Consulta la documentazione ufficiale di Discord per ulteriori informazioni</span>`,
        unlockmsg: "Imposta la posizione del messaggio di sblocco/testo personalizzato all'interno del $type",
        title: "Imposta la posizione del titolo del successo all'interno del $type",
        desc: "Imposta la posizione della descrizione del successo all'interno del $type",
        notification: "notifica",
        screenshot: "screenshot",
        percentpos: "Imposta la posizione della percentuale di rarità all'interno del $type",
        sspercentpos: "Imposta la posizione della percentuale di rarità all'interno del $type",
        hiddeniconpos: "Imposta la posizione dell'icona del successo nascosto/segreto all'interno del $type",
        sshiddeniconpos: "Imposta la posizione dell'icona del successo nascosto/segreto all'interno del $type",
        decorationpos: "Imposta la posizione dell'elemento decorativo all'interno del $type",
        ssdecorationpos: "Imposta la posizione dell'elemento decorativo all'interno del $type",
        percentbadge: "Mostra la percentuale di sblocco all'interno di un badge posizionato sopra l'icona del traguardo/gioco",
        sspercentbadge: "Mostra la percentuale di sblocco all'interno di un badge posizionato sopra l'icona del traguardo/gioco",
        percentbadgepos: "Imposta la posizione del badge",
        sspercentbadgepos: "Imposta la posizione del badge",
        percentbadgecolor: "Imposta il colore di sfondo del badge",
        sspercentbadgecolor: "Imposta il colore di sfondo del badge",
        percentbadgefontcolor: "Imposta il colore del carattere del badge",
        sspercentbadgefontcolor: "Imposta il colore del carattere del badge",
        percentbadgefontsize: "Imposta la dimensione del badge",
        sspercentbadgefontsize: "Imposta la dimensione del badge",
        percentbadgeroundness: "Imposta la rondità del badge",
        sspercentbadgeroundness: "Imposta la rondità del badge",
        percentbadgex: "Sposta orizzontalmente l'elemento badge",
        sspercentbadgex: "Sposta orizzontalmente l'elemento badge",
        percentbadgey: "Sposta verticalmente l'elemento badge",
        sspercentbadgey: "Sposta verticalmente l'elemento badge",
        percentbadgeimg: "Mostra un'icona basata sulla rarità come elemento badge",
        sspercentbadgeimg: "Mostra un'icona basata sulla rarità come elemento badge",
        percentbadgeimgbronze: "L'icona badge da visualizzare quando la percentuale di sblocco è > 50%",
        sspercentbadgeimgbronze: "L'icona badge visualizzata quando la percentuale di sblocco è > 50%",
        percentbadgeimgsilver: "L'icona badge visualizzata quando la percentuale di sblocco è < 50% e > $rarity",
        sspercentbadgeimgsilver: "L'icona badge visualizzata quando la percentuale di sblocco è < 50% e > $rarity",
        percentbadgeimggold: "L'icona badge visualizzata quando la percentuale di sblocco è < $rarity",
        sspercentbadgeimggold: "L'icona badge visualizzata quando la percentuale di sblocco è < $rarity",
        resetpbimgs: "Ripristina tutte le icone badge ai valori predefiniti",
        elemsmatch: `Corrispondenza delle impostazioni degli elementi di notifica impostate nel personalizzatore per questo tipo di notifica<br><br><span class="ttdesc">Alcuni preset di notifica non possono corrispondere completamente alle impostazioni del personalizzatore, a causa delle differenze tra i layout delle notifiche su schermo e basati su screenshot</span>`,
        themeswitch: `Cambia automaticamente a qualsiasi <span class="hl">Tema</span> salvato quando viene rilevato un gioco specifico`,
        userthemesync: `Sincronizza le personalizzazioni nel <span class="hl">Tema</span> selezionato a tutti gli altri tipi di notifica`,
        showsystrayopts: `Mostra tutte le opzioni di solito situate sotto <span class="hl">Barra di sistema</span> > <span class="hl">Opzioni</span> in <span class="hl">Impostazioni</span> > <span class="hl">Vari</span>`,
        releaseshortcut: "Rilascia il gioco attualmente tracciato utilizzando la scorciatoia da tastiera specificata",
        themeselect: "Seleziona un tema salvato precedentemente",
        statwin: `Visualizza statistiche configurabili dei successi per il gioco attuale in una finestra esterna<br><br><span class="ttdesc">Quando utilizzato in combinazione con l'opzione <span class="hl">Traduci i successi nella lingua di Steam</span>, alcune traduzioni potrebbero non essere disponibili finché il successo specifico non viene sbloccato</span>`
    },
    update: {
        updateavailable: "Aggiornamento disponibile",
        sub: [
            `<span id="newversion"></span>`,
            "È disponibile un nuovo aggiornamento per Steam Achievement Notifier!",
            `Note di rilascio complete disponibili su <span id="discordreleasenotes"></span> e <span id="githubreleasenotes"></span>`
        ],
        update: "Aggiorna"
    },
    linkgame: {
        content: {
            exepath: "Percorso del file eseguibile",
            managesub: [
                `Collega manualmente il <span class="hl">file eseguibile</span> di un gioco a uno specifico <span class="hl">AppID</span>, o <span class="hl">scollega</span> uno esistente`,
                `Steam Achievement Notifier non utilizzerà più il <span class="hl">tracciamento automatico dei processi</span> per nessun <span class="hl">gioco collegato</span> - invece, il file eseguibile specificato verrà tracciato ogni volta che l'AppID associato viene rilevato`,
                `<span class="hl" id="appidhelp"><u>Come posso trovare l'AppID di un gioco Steam?</u></span>`
            ],
            linknew: "Nuovo Gioco Collegato",
            linknewsub: [
                `Crea un nuovo collegamento tra un <span class="hl">file eseguibile del gioco</span> e l'AppID associato`,
                `Una volta creati, i collegamenti possono essere <span class="hl">scollegati</span> tramite la precedente finestra di dialogo <span class="hl">Gestisci Giochi Collegati</span>`
            ],
            link: "Collega",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Aggiungi l'<span class="hl">AppID</span> di qualsiasi gioco Steam alla <span class="hl">lista di esclusione</span>`,
                `Steam Achievement Notifier non proverà a tracciare i dati sugli obiettivi per qualsiasi gioco con un <span class="hl">AppID</span> aggiunto alla <span class="hl">lista di esclusione</span>`,
                `<span class="hl" id="appidhelp"><u>Come trovo l'AppID di un gioco Steam?</u></span>`
            ],
            exclusionnew: "Nuova esclusione",
            exclusionnewsub: [
                `Inserisci l'<span class="hl">AppID</span> da aggiungere alla <span class="hl">lista di esclusione</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elementi di notifica",
        content: {
            unlockmsg: "Messaggio di Sblocco",
            title: "Titolo del Successo",
            desc: "Descrizione del Successo",
            hiddeniconpos: "Icona Nascosta",
            sshiddeniconpos: "Icona Nascosta",
            decorationpos: "Decorazione",
            ssdecorationpos: "Decorazione",
            percentpos: "Percentuale di Rarità",
            sspercentpos: "Percentuale di Rarità",
            percentbadge: "Badge Percentuale",
            sspercentbadge: "Badge Percentuale",
            percentbadgepos: "Posizione del Badge",
            sspercentbadgepos: "Posizione del Badge",
            percentbadgecolor: "Colore del Badge",
            sspercentbadgecolor: "Colore del Badge",
            percentbadgefontcolor: "Colore del carattere del Badge",
            sspercentbadgefontcolor: "Colore del carattere del Badge",
            percentbadgefontsize: "Dimensione del Badge",
            sspercentbadgefontsize: "Dimensione del Badge",
            percentbadgeroundness: "Rondità del Badge",
            sspercentbadgeroundness: "Rondità del Badge",
            percentbadgex: "Offset orizzontale",
            sspercentbadgex: "Offset orizzontale",
            percentbadgey: "Offset verticale",
            sspercentbadgey: "Offset verticale",
            percentbadgeimg: "Usa icona",
            sspercentbadgeimg: "Usa icona",
            percentbadgeimgbronze: "Rarità: > 50%",
            sspercentbadgeimgbronze: "Rarità: > 50%",
            percentbadgeimgsilver: "Rarità: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Rarità: < 50% & > $rarity%",
            percentbadgeimggold: "Rarità: < $rarity%",
            sspercentbadgeimggold: "Rarità: < $rarity%",
            resetpbimgs: "Ripristina icone badge",
            elemsmatch: "Corrispondenza impostazioni personalizzatore"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Aggiungi l'<span class="hl">AppID</span> di qualsiasi gioco per cambiare automaticamente <span class="hl">Temi</span> quando viene rilevato`,
                `Qualsiasi <span class="hl">Tema</span> salvato può essere selezionato per ciascun tipo di notifica, insieme al monitor desiderato da usare come <span class="hl">Sorgente Screenshot</span>`,
                `<span class="hl" id="appidhelp"><u>Come posso trovare l'AppID di un gioco Steam?</u></span>`
            ],
            themeswitchnew: "Nuova auto-cambio",
            themeswitchnewsub: [
                `Inserisci l'<span class="hl">AppID</span> del gioco, insieme al monitor desiderato da usare come <span class="hl">Sorgente Screenshot</span>`,
                `Seleziona quale <span class="hl">Tema</span> cambiare per ciascun tipo di notifica quando viene rilevato l'<span class="hl">AppID</span> di questo gioco`
            ],
            themes: "Temi",
            src: "Sorgente Screenshot",
            themedeleted: "Tema eliminato"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Sembra che stai cercando di attivare l'opzione <span class="hl">${opt}</span>. Tuttavia, su sistemi Linux, non è possibile abilitare gli screenshot senza prima installare il pacchetto <code class="dialogcode">${dep}</code>`,
    `Si prega di eseguire <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> per installare questa dipendenza. Questo assicurerà che gli screenshot possano essere presi su questo dispositivo`
]