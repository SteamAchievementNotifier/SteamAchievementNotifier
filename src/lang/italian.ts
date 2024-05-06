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
        missingdepssub: [
            `Sembra che tu stia cercando di abilitare l'opzione <span class="hl">Cattura schermata Steam</span>. Tuttavia, su Linux le schermate non possono essere attivate automaticamente senza prima installare il pacchetto <code class="dialogcode">xdotool</code>`,
            `Esegui il comando <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> per installare questa dipendenza, che permetterà di catturare le schermate su Steam su questo dispositivo`
        ],
        restartapp: "Riavvia App",
        restartappsub: [
            `Se le cose non funzionano correttamente, utilizza questa opzione per chiudere e riaprire l'applicazione`,
            `Se il problema persiste dopo aver riavviato l'applicazione, considera di segnalarlo utilizzando i collegamenti integrati nella schermata iniziale`
        ]
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
            title: "Lingua"
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
                audiosrc: "Sorgente audio",
                notify: "Notifica",
                app: "Applicazione",
                nowtracking: "Mostra notifica di tracciamento",
                nowtrackingscale: "Scala di tracciamento",
                shortcuts: "Scorciatoie notifica"
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
                ovpos: "Posizione sovrapposizione",
                ovmatch: "Corrispondenza posizione personalizzata",
                ovpath: "Percorso screenshot",
                ssdelay: "Ritardo screenshot",
                notifyimg: "Immagine notifica",
                imgpath: "Percorso dell'immagine"
            }
        },
        accessibility: {
            title: "Accessibilità",
            content: {
                noanim: "Disabilita animazioni finestra app",
                nvda: "Abilita supporto NVDA",
                tooltips: "Mostra suggerimenti"
            }
        },
        advanced: {
            title: "Avanzate",
            content: {
                pollrate: "Frequenza di interrogazione",
                releasedelay: "Ritardo di Rilascio",
                maxretries: "Numero massimo di nuovi tentativi",
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
                roundness: "Arrotondamento",
                fontsize: "Dimensione Carattere",
                opacity: "Opacità",
                bgonly: "Solo Sfondo"
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
                savetheme: "Salva Tema",
                sub: [
                    `I <span class="hl">Temi Utente</span> salvati possono essere selezionati dal menu <span class="hl">Seleziona Tema</span> nella schermata Home.`,
                    `Assicurati che il <span class="hl">Nome Tema</span> sia <u>unico</u> - un nome che corrisponde a un tema esistente <u>sovrascriverà il precedente</u>!`
                ],
                placeholder: "Nome Tema",
                theme: "Tema"
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
        desktop: "Attiva o disattiva una scorciatoia sul desktop per avviare l'app",
        startwin: "Avvia Steam Achievement Notifier automaticamente dopo l'accesso",
        startmin: "Dopo il lancio, nascondi la finestra dell'interfaccia utente dell'app fino a quando non viene aperta dalla barra delle applicazioni",
        nohwa: `Disabilita l'accelerazione hardware, che potrebbe migliorare le prestazioni su sistemi con risorse limitate o sistemi senza una GPU dedicata<br><br><span class="ttdesc">L'applicazione si riavvierà dopo aver abilitato/disabilitato questa opzione</span>`,
        litemode: "Disabilita tutti gli elementi interattivi dell'interfaccia utente, fornendo solo una funzionalità limitata tramite l'icona della barra delle applicazioni. Potrebbe migliorare le risorse utilizzate dall'app",
        rarity: "La percentuale a cui verranno attivate le notifiche per gli obiettivi rari. Qualsiasi obiettivo con una percentuale di sblocco superiore a questo valore verrà visualizzato come notifica principale",
        showpercent: "Mostra la percentuale di sblocco dell'obiettivo nella notifica per i tipi selezionati",
        soundonly: "Disabilita le notifiche, riproducendo solo i suoni impostati tramite il Personalizzatore",
        extwin: "Crea una finestra di sfondo nascosta che duplica qualsiasi notifica attualmente visualizzata sullo schermo. Questa finestra può quindi essere aggiunta come sorgente di cattura finestra per l'utilizzo in software di streaming, come OBS",
        audiosrc: "Seleziona la sorgente (o disabilita) l'audio generato dall'app",
        nowtracking: "Mostra una notifica che informa l'utente che gli obiettivi per un gioco in esecuzione vengono tracciati",
        nowtrackingscale: `Imposta la dimensione della notifica di tracciamento`,
        shortcuts: "Attiva una notifica di prova tramite una scorciatoia da tastiera. Le scorciatoie possono essere personalizzate per ogni tipo di notifica",
        steamss: "Scatta uno screenshot di Steam quando viene sbloccato un obiettivo",
        screenshots: "Seleziona il tipo di media aggiuntivo da creare quando viene visualizzata una notifica",
        monitors: "Il monitor che verrà catturato durante la creazione dello screenshot",
        ovpos: "La posizione dell'overlay della notifica nello screenshot",
        ovmatch: "Corrispondi alla posizione dello schermo impostata nel Personalizzatore per questo tipo di notifica",
        ovpath: "La posizione in cui verranno salvati gli screenshot generati da questa opzione",
        ssdelay: "Aggiungi un ritardo tra l'occorrenza della notifica e la creazione dello screenshot",
        sspreview: "Mostra un'anteprima di come apparirà lo screenshot quando viene salvato",
        noanim: "Disabilita tutte le animazioni delle finestre dell'app e gli effetti di transizione",
        nvda: "Abilita la copia delle informazioni sugli obiettivi negli appunti quando viene sbloccato un obiettivo, in modo da poter essere letto da software di lettura dello schermo, come NVDA",
        tooltips: "Mostra le descrizioni comandi quando si passa il mouse su determinati elementi dell'interfaccia utente",
        pollrate: `Imposta l'intervallo di aggiornamento per i dati sugli obiettivi durante il gioco<br><br><span class="ttdesc">Le prestazioni possono aumentare/diminuire a seconda del valore o dell'hardware del sistema. Valori più alti di solito comportano un carico di sistema inferiore, ma possono ritardare le notifiche</span>`,
        releasedelay: `Imposta quanto tempo il processo in background deve attendere per riavviarsi dopo che il gioco attuale è stato rilasciato. Influenza sia il monitoraggio automatico dei processi che i giochi collegati manualmente.<br><br><span class="ttdesc">Consente un periodo più lungo per il completo rilascio di Steamworks dall'applicazione. Aumentare questo valore può prevenire comportamenti insoliti, come il tracciamento di un gioco precedentemente chiuso</span>`,
        maxretries: `Imposta il numero massimo di tentativi per collegare un processo in esecuzione a un AppID rilevato. Influenza sia il monitoraggio automatico dei processi che i giochi collegati manualmente.<br><br><span class="ttdesc">I tentativi di collegamento vengono effettuati una volta al secondo. Se un processo in esecuzione non è collegato all'AppID corrente dopo questo numero di tentativi, verrà restituito un processo non valido. In tali casi, il gioco dovrà essere rilasciato manualmente tramite Tray di Sistema > Opzioni > Rilascia Gioco</span>`,
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
        roundness: "Imposta l'arrotondamento dei bordi della notifica",
        fontsize: "Imposta la dimensione del carattere utilizzato nella notifica",
        opacity: "Imposta l'opacità complessiva della notifica",
        bgonly: "Imposta solo l'opacità dello sfondo della notifica, mantenendo gli altri elementi a piena opacità",
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
        pos: "Imposta la posizione della notifica sullo schermo",
        usecustompos: "Abilita il posizionamento personalizzato per la notifica",
        setcustompos: "Imposta la posizione personalizzata per la notifica",
        resetcustompos: "Reimposta la posizione della notifica alla posizione personalizzata predefinita",
        savetheme: "Salva tutte le opzioni di personalizzazione configurate come un nuovo tema",
        visibilitybtn: "Attiva/disattiva la visibilità dell'elemento nelle anteprime personalizzate e nelle notifiche di test",
        delbtn: "Ripristina l'elemento al valore predefinito",
        link: `Apri <span class="hl">Menu Gestione Giochi Collegati</span>`,
        imgpath: "Il luogo in cui verranno salvate le immagini di notifica generate da questa opzione"
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
    "linkgame": {
        "content": {
            "exepath": "Percorso del file eseguibile",
            "nodata": "Nessun dato",
            "manage": "Gestisci Giochi Collegati",
            "managesub": [
                `Collega manualmente il <span class="hl">file eseguibile</span> di un gioco a uno specifico <span class="hl">AppID</span>, o <span class="hl">scollega</span> uno esistente`,
                `Steam Achievement Notifier non utilizzerà più il <span class="hl">tracciamento automatico dei processi</span> per nessun <span class="hl">gioco collegato</span> - invece, il file eseguibile specificato verrà tracciato ogni volta che l'AppID associato viene rilevato`,
                `<span class="hl" id="appidhelp"><u>Come posso trovare l'AppID di un gioco Steam?</u></span>`
            ],
            "new": "Nuovo...",
            "linknew": "Nuovo Gioco Collegato",
            "linknewsub": [
                `Crea un nuovo collegamento tra un <span class="hl">file eseguibile del gioco</span> e l'AppID associato`,
                `Una volta creati, i collegamenti possono essere <span class="hl">scollegati</span> tramite la precedente finestra di dialogo <span class="hl">Gestisci Giochi Collegati</span>`
            ],
            "link": "Collega",
            "findappid": "Trova AppID",
            "findappidsub": [
                `Ogni gioco Steam ha un numero univoco associato - chiamato <span class="hl">AppID</span>. Puoi trovare l'AppID associato a qualsiasi gioco Steam controllando uno dei seguenti metodi:`,
                `Nel <span class="hl">client Steam</span>, fai clic con il pulsante destro del mouse su un gioco nella tua <span class="hl">Biblioteca</span> e seleziona <i>Proprietà</i> > <i>Aggiornamenti</i> - l'AppID verrà elencato qui`,
                `L' <span class="hl">URL</span> della pagina del <span class="hl">Negozio</span> del gioco - sarà il numero elencato dopo <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Siti web come <span class="hl">SteamDB</span> - la sezione <span class="hl">Info App</span> elencherà l'AppID per ogni gioco`
            ]
        }
    }
}