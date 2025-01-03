export const translations = {
    global: {
        main: "Principal",
        rare: "Rar",
        plat: "100%",
        test: "Notificări de Test",
        topleft: "Stânga Sus",
        topcenter: "Centru Sus",
        topright: "Dreapta Sus",
        bottomleft: "Stânga Jos",
        bottomcenter: "Centru Jos",
        bottomright: "Dreapta Jos",
        ok: "OK",
        preview: "Previzualizare",
        save: "Salvare",
        back: "Înapoi",
        settings: "Setări",
        appversion: "Versiunea Aplicației",
        image: "Imagine",
        audio: "Audio",
        folder: "Dosar",
        font: "Font",
        select: "Selectare",
        gametitle: "Titlul Jocului",
        congrats: "Felicitări!",
        achievementunlocked: "Realizare Deblocată",
        gamecomplete: "100% Complet",
        achievementdesc: "Ați făcut clic pe butonul pentru a afișa notificarea de test",
        gamecompletedesc: "Ați deblocat toate realizările!",
        defaultcustomfont: "Implicit (Niciun font selectat)",
        defaultsoundfile: "Implicit (Niciun fișier selectat)",
        defaultsounddir: "Implicit (Niciun dosar selectat)",
        nowtracking: "Urmărind realizările pentru:",
        nopreview: "Previzualizarea nu este disponibilă pentru sistemul de operare nativ",
        options: "Opțiuni",
        resetwindow: "Resetare Fereastră",
        show: "Afișare",
        exit: "Ieșire",
        releasegame: "Eliberează Jocul",
        releasegamesub: [
            `Reporniți procesul Worker din fundal și eliberați jocul curent de la urmărire`,
            `Încercați această opțiune dacă ați închis recent un joc, dar Steam încă îl arată ca fiind în execuție, sau dacă Steam Achievement Notifier încă arată ca urmărind un joc care a fost deja închis`
        ],
        noupdateavailable: "Nicio actualizare disponibilă",
        latestversion: "Ultima versiune instalată",
        missingdeps: "Dependență lipsă",
        restartapp: "Reporniți Aplicația",
        restartappsub: [
            `Dacă lucrurile nu funcționează corect, utilizați această opțiune pentru a închide și a redeschide aplicația`,
            `Dacă problema persistă după repornirea aplicației, vă rugăm să luați în considerare raportarea ei folosind linkurile din aplicație de pe ecranul de start`
        ],
        suspend: "Suspendă",
        resume: "Reia",
        new: "Nou...",
        nodata: "Fără Date",
        findappid: "Găsește AppID",
        findappidsub: [
            `Fiecare joc Steam are un număr unic asociat - numit <span class="hl">AppID</span>. Puteți găsi AppID-ul asociat oricărui joc Steam verificând una dintre următoarele:`,
            `În <span class="hl">clientul Steam</span>, faceți clic dreapta pe un joc din <span class="hl">Biblioteca</span> și selectați <i>Proprietăți</i> > <i>Actualizări</i> - AppID-ul va fi listat aici`,
            `URL-ul paginii <span class="hl">magazinului</span> jocului - va fi numărul listat după <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Site-uri precum <span class="hl">SteamDB</span> - secțiunea de <span class="hl">Informații despre App</span> va lista AppID-ul pentru fiecare joc`
        ],
        noexe: "Fișierul EXE al jocului nu a fost găsit!",
        noexesub: "Apasă aici pentru mai multe informații",
        noexedialogsub: [
            `Steam Achievement Notifier nu a reușit să localizeze automat fișierul executabil al acestui joc. Locatia fișierului executabil al jocului este necesară pentru a "lansa" jocul`,
            `Pentru a lansa jocul manual, <i>clic dreapta</i> pe <span class="hl">icoana din bara de sistem</span> > <span class="hl">Opțiuni</span> > <span class="hl">Lansează jocul</span>, sau folosește <span class="hl">Scurtătura pentru lansarea jocului</span>`,
            `Alternativ, apasă pe butonul <span class="hl">Link</span> de mai jos pentru a adăuga fișierul executabil asociat ferestrei în focus în meniul <span class="hl">Jocuri conectate</span>`,
            `<span class="hl help" id="linkgamehelp"><u>Ce se întâmplă când apas pe butonul Link?</u></span>`
        ],
        linkgamehelp: "Conectează joc prin fereastră",
        linkgamehelpsub: [
            `Apăsând butonul <span class="hl">Link</span>, o nouă intrare va fi adăugată automat în meniul <span class="hl">Setări</span> > <span class="hl">Jocuri conectate</span>, folosind informațiile din fereastra activă.`,
            `După ce apeși pe butonul <span class="hl">Link</span>, un cronometru de 5 secunde va începe`,
            `Înainte ca cronometru să se termine, focalizează fereastra jocului`,
            `Când cronometru se va termina, o nouă intrare pentru <span class="hl">AppID</span> va fi adăugată în meniul <span class="hl">Setări</span> > <span class="hl">Jocuri conectate</span>, folosind fișierul executabil asociat ferestrei active`,
            `Dacă trebuie să încerci din nou, elimină intrarea din <span class="hl">Setări</span> > <span class="hl">Jocuri conectate</span> făcând clic pe butonul <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Nu s-a putut conecta fereastra",
        addlinkfailedsub: `Apasă pe butonul <span class="hl">Link</span> pentru a încerca din nou`,
        webhookunlockmsg: "$user a deblocat o realizare",
        webhookunlockmsgplat: "$user a deblocat toate realizările",
        webhookingame: "în $gamename",
        notconnected: "Nu este conectat"
    },
    app: {
        content: {
            game: "Niciun joc detectat",
            customise: "Personalizează",
            test: "Afișează Notificare de Test"
        }
    },
    settings: {
        language: {
            title: "Limba",
            content: {
                steamlang: "Tradu realizările în limba Steam",
                maxsteamlangretries: "Număr maxim de încercări de traducere"
            }
        },
        os: {
            title: "Sistem de operare",
            content: {
                desktop: "Creează scurtătură pe desktop",
                startwin: "Pornire la autentificare",
                startmin: "Pornire Minimizată",
                nohwa: "Dezactivează Accelerarea Hardware",
                litemode: "Modul Ușor"
            }
        },
        notifications: {
            title: "Notificări",
            content: {
                rarity: "Procentaj Raritate",
                rareonly: "Doar Rare",
                all: "Toate",
                off: "Oprit",
                showpercent: "Afișare Procentaj",
                soundonly: "Doar Sunet",
                nowtracking: "Afișează Notificarea de Urmărire",
                nowtrackingscale: "Scară de Urmărire",
                nowtrackingpos: "Poziționare Urmărire",
                shortcuts: "Scurtături Notificări",
                noiconcache: "Dezactivează Cache-ul de Pictograme",
                webhooks: "Postează pe serverul Discord",
                webhookurl: `URL Webhook`,
                webhooktypes: "Tipuri de Webhook",
                webhookcaution: `Activând această opțiune și furnizând un link valid Webhook Discord, accepți că înțelegi că <u>toate informațiile despre realizări și jocuri pentru utilizatorul Steam actual</u> vor fi postate pe serverul Discord specificat prin intermediul linkului Webhook furnizat.<br><br>Dacă nu dorești ca Steam Achievement Notifier să posteze aceste informații în numele tău, dezactivează această opțiune.`,
                webhooklaststatus: "Ultimul Statut",
                webhookspoilers: `Adaugă etichetă spoiler`
            }
        },
        games: {
            title: "Jocuri",
            content: {
                linkedgames: "Jocuri Conectate",
                themeswitch: "Comutare automată a temelor",
                exclusionlist: "Listă de Excludere"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Fă Captură Steam",
                screenshots: "Media Suplimentară",
                off: "Oprit",
                overlay: "Captură cu Suprapunere Notificare",
                monitors: "Sursă Captură",
                hdrmode: "Mod HDR",
                ovpos: "Poziție Suprapunere",
                ovmatch: "Potrivire Poziție Personalizată",
                ovx: "Deplasare Orizontală",
                ovy: "Deplasare Verticală",                
                ovpath: "Cale Captură",
                ssdelay: "Întârziere Captură",
                notifyimg: "Imagine Notificare",
                imgpath: "Calea Imaginii"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Notificări de Streaming",
                extwinframerate: "Rata cadrelor",
                extwinshow: "Arată fereastra",
                audiosrc: "Sursă Audio",
                notify: "Notificare",
                app: "Aplicație",
                off: "Redus",
                statwin: "Fereastră cu statistici despre realizări",
                statwinaot: "Întotdeauna în față",
                noachievements: "Nu există realizări de afișat",
                startgame: "Pornește un joc pentru a arăta realizările!",
                max: "Maxim",
                custom: "Personalizat...",
                statwinshortcut: "Scurtătură Overlay",
            }
        },
        accessibility: {
            title: "Accesibilitate",
            content: {
                noanim: "Dezactivează Animații Fereastră Aplicație",
                noupdatedialog: "Dezactivați dialogul de actualizare",
                nvda: "Activează Suport NVDA",
                tooltips: "Afișare Sfaturi Instrumente",
                showsystrayopts: "Afișează opțiunile din zona de notificare",
                releaseshortcut: "Scurtătură pentru a lansa jocul"
            }
        },
        advanced: {
            title: "Avansat",
            content: {
                pollrate: "Rată de interogare",
                initdelay: "Întârziere de urmărire",
                releasedelay: "Întârziere Lansare",
                maxretries: "Număr maxim de reîncercări de procesare",
                debug: "Panou de Depanare",
                userust: "Mod Alternativ de Procesare",
                notifydebug: "Afișare Notificări de Depanare",
                usecustomfiles: "Utilizare Fișiere de Aplicație Personalizate",
                showcustomfiles: "Afișare Fișiere de Aplicație Personalizate"
            }
        },        
        misc: {
            title: "Diverse",
            content: {
                checkforupdates: "Verifică Actualizări",
                log: "Jurnalul Aplicației",
                reset: "Resetare Aplicație"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Preconfigurare",
            content: {
                preset: "Preconfigurare Notificare",
                iconanim: "Animare Iconiță Rară",
                alldetails: "Afișare Toate Detaliile",
                usepercent: "Utilizare Procentaj",
                displaytime: "Timp de Afișare",
                scale: "Scară",
                customtext: "Text Personalizat",
                usegametitle: "Utilizare Titlu Joc",
                customfont: "Font Personalizat"
            }
        },
        sound: {
            title: "Sunet",
            content: {
                soundmode: "Mod Sunet",
                file: "Fișier",
                folder: "Aleatoriu",
                soundfile: "Fișier Sunet",
                sounddir: "Director Sunet",
                volume: "Volum"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Stil Fundal",
                solid: "Solid",
                gradient: "Gradient",
                img: "Imagine",
                gameart: "Artă Joc",
                gradientangle: "Unghi Gradient",
                bgimg: "Imagine Fundal",
                bgimgbrightness: "Luminozitate",
                brightness: "Luminozitate",
                blur: "Încețoșare",
                roundness: "Rotunjime",
                fontsize: "Dimensiune Font",
                opacity: "Opacitate",
                bgonly: "Doar Fundal",
                glow: "Strălucire",
                glowcolor: "Culoare",
                glowsize: "Dimensiune",
                glowx: "Deplasare Orizontală",
                glowy: "Deplasare Verticală",
                glowopacity: "Opacitate",
                glowanim: "Animație",
                glowspeed: "Viteză",
                off: "Niciunul",
                pulse: "Puls",
                rainbow: "Curcubeu",
                mask: "Mască",
                maskimg: "Imaginea măștii",
                outline: "Contur",
                outlinecolor: "Culoarea Conturului",
                outlinewidth: "Lățimea Conturului",
                dashed: "Liniuțat",
                dotted: "Punctat"
            }
        },
        colors: {
            title: "Culori",
            content: {
                primarycolor: "Culoare Primară",
                secondarycolor: "Culoare Secundară",
                tertiarycolor: "Culoare Tertiară",
                fontcolor: "Culoare Font",
                fontoutline: "Contur Font",
                fontoutlinecolor: "Culoare Contur Font",
                fontshadow: "Umbra Font",
                fontshadowcolor: "Culoare Umbră Font"
            }
        },
        icons: {
            title: "Iconițe",
            content: {
                iconroundness: "Rotunjire Iconiță",
                plat: "Logo 100%",
                usegameicon: "Utilizare Iconiță Joc",
                logo: "Logo",
                decoration: "Decorație",
                showdecoration: "Afișare Decorație",
                rarity: "Raritate",
                showhiddenicon: "Afișare Pictogramă Ascunsă",
                hiddenicon: "Pictogramă Ascunsă",
                replacelogo: "Înlocuiți Logo"
            }
        },
        position: {
            title: "Poziție",
            content: {
                pos: "Poziție Ecran",
                usecustompos: "Utilizare Poziție Personalizată",
                setcustompos: "Setare",
                resetcustompos: "Resetare"
            }
        },
        theme: {
            title: "Tematică",
            content: {
                updatetheme: "Actualizare Temă",
                savetheme: "Salvare Temă",
                sub: [
                    `Temele de utilizator <span class="hl">salvate</span> pot fi selectate din meniul <span class="hl">Selectare Temă</span> de pe ecranul de start.`,
                    `Asigurați-vă că <span class="hl">Numele Tema</span> este <u>unic</u> - un nume care se potrivește cu o temă existentă <u>va suprascrie tema precedentă</u>!`
                ],
                placeholder: "Nume Temă",
                theme: "Temă",
                importtheme: "Importare Temă",
                import: "Importare",
                importsub: [
                    `Importați un <span class="hl">fișier temă</span> creat de utilizator`,
                    `Temele <span class="hl">importate</span> vor fi încărcate automat după importare cu succes și pot fi selectate din meniul <span class="hl">Selectare Temă</span>`,
                ],
                importidle: `Selectați un <span class="hl">fișier temă</span> pentru a-l importa`,
                importcopied: `Temă copiată cu succes`,
                importrenamed: `Temă redenumită cu succes`,
                importextracted: `Temă extrasă cu succes`,
                importrewriting: `Se reînnoiesc căile fișierelor temei...`,
                importconverting: `Se convertește tema...`,
                importcreating: `Se creează tema...`,
                importdone: `Temă importată cu succes`,
                importfailed: `Eroare la importarea fișierului temei selectate!`,
                exporttheme: "Exportare Temă",
                export: "Exportare",
                exporterrortitle: "Eroare de Exportare",
                exporterrorsub: [
                    "A apărut o eroare în timpul încercării de a exporta tema selectată",
                    `Încercați să salvați tema curentă (<i>prin <span class="hl">Salvează Tema</span></i>) și încercați din nou să exportați`,
                    `Dacă problema persistă, vă rugăm să copiați eroarea de mai jos și să o raportați prin butoanele de link de pe <span class="hl">Ecranul Principal</span>`
                ],
                synctheme: "Sincronizează tema",
                syncedwith: "Sincronizat cu",
                themeselect: "Tema selectată"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Iată ce s-a întâmplat de la pornirea aplicației",
            copylog: "Copiază Conținutul Jurnalului"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Sunteți sigur?</span>
                    <span>Toate datele configurate anterior, <u>inclusiv Personalizările</u>, vor fi resetate la valorile implicite.</span>
                    <span>🛑 Această acțiune nu poate fi anulată!</span>
                </div>
            `,
            reset: "Resetare"
        }
    },
    error: {
        content: {
            subtitle: "Notificatorul de Realizări Steam a întâmpinat o problemă și trebuie închis.",
            details: "Iată detaliile erorii:",
            sub: "Faceți clic pe butoanele de mai jos pentru a raporta această problemă prin platforma preferată.",
            report: "Raport",
            log: "Jurnal Aplicație",
            exit: "Ieșire"
        }
    },    
    tooltips: {
        game: "Jocul pentru care se urmăresc realizările în prezent",
        usertheme: "Selectați un Temă salvată anterior",
        customise: "Personalizați notificările de realizare",
        test: "Afișați o notificare de test, inclusiv orice personalizări",
        kofi: "Donați pe Ko-Fi!",
        discord: "Alăturați-vă pe Discord!",
        github: "Raportați o problemă",
        lang: "Selectați limba UI utilizată în aplicație",
        steamlang: `Încercați să încărcați traduceri aflate în fișierele aplicației Steam pentru a afișa informațiile despre realizări în limba aleasă de utilizator în clientul Steam<br><br><span class="ttdesc">Această opțiune încearcă să găsească traduceri într-un fișier JSON stocat în datele aplicației Steam. Dacă nu se găsește o traducere pentru realizarea curentă, vor fi afișate informațiile despre realizare recuperate din Steamworks.</span>`,
        maxsteamlangretries: `Numărul de încercări (la fiecare 100 ms) pentru a găsi traduceri valide pentru realizarea curentă<br><br><span class="ttdesc">Steam stochează în prezent doar o mică cantitate de date despre realizări în fișierul JSON asociat fiecărui joc. Orice realizări care nu sunt prezente în acest fișier vor fi adăugate după ce realizarea este deblocată.<br><br>Deoarece adăugarea de noi date poate dura, creșterea acestei valori va crește șansele de a găsi datele de traducere pentru realizarea curentă, dar poate întârzia, de asemenea, apariția notificării pe ecran cu timpul calculat de această setare.<br><br>Dacă nu se găsesc date valide de traducere pentru realizarea curentă, traducerea va reveni la limba specificată în Steamworks.</span>`,
        desktop: "Comutați o scurtătură pe Desktop pentru a rula aplicația",
        startwin: "Porniți Steam Achievement Notifier automat după autentificare",
        startmin: "După lansare, ascundeți fereastra UI a aplicației până când este deschisă din Tava de sistem",
        nohwa: `Dezactivați accelerarea hardware, ceea ce poate îmbunătăți performanța pe sisteme cu resurse limitate sau sisteme fără un GPU dedicat<br><br><span class="ttdesc">Aplicația se va reporni după activarea/dezactivarea acestei opțiuni</span>`,
        litemode: "Dezactivați toate elementele interactive ale UI, oferind în același timp funcționalitate limitată a aplicației prin intermediul pictogramei din Tava de sistem. Poate îmbunătăți resursele consumate de aplicație",
        rarity: "Procentajul la care notificările de realizare rară vor fi declanșate. Orice realizare cu un procentaj de deblocare mai mare decât această valoare va fi afișată ca o notificare principală",
        showpercent: "Afișați procentajul de deblocare al realizării în notificare pentru tipurile selectate",
        soundonly: "Dezactivați notificările, redând doar sunetele setate prin Personalizator",
        extwin: "Creează o fereastră care duplică toate notificările afișate pe ecran. Această fereastră poate fi adăugată ulterior ca sursă de captură de fereastră pentru utilizare în software-ul de streaming, cum ar fi OBS",
        extwinframerate: "Setează rata cadrelor țintă pentru notificările de flux",
        extwinshow: `Comută vizibilitatea ferestrei de Notificări de Streaming<br><br><span class="ttdesc">Când este focalizată în bara de activități, ține apăsată tasta <code class="ttcode">Ctrl</code> pentru a afișa locația actuală a ferestrei</span>`,
        audiosrc: "Selectați sursa (sau dezactivați) audio generat de aplicație",
        nowtracking: "Afișați o notificare care anunță utilizatorul că se urmăresc realizările pentru un joc în execuție",
        nowtrackingscale: `Setați dimensiunea notificării de urmărire`,
        nowtrackingpos: `Setează poziția notificării de urmărire`,
        shortcuts: "Declanșați o notificare de test printr-o comandă rapidă de tastatură. Comenzile rapide pot fi personalizate pentru fiecare tip de notificare",
        noiconcache: `Dezactivează cache-ul de pictograme pentru realizări la pornirea jocurilor.<br><br><span class="ttdesc">Acest lucru poate îmbunătăți semnificativ performanța aplicației la pornirea jocurilor și poate rezolva, de asemenea, problemele de urmărire cu jocurile care au un număr mare de realizări. Cu toate acestea, în cazuri rare, dezactivarea cache-ului de pictograme poate duce la lipsa pictogramelor de realizări în notificări</span>`,
        steamss: "Faceți o captură de ecran Steam atunci când se deblochează o realizare",
        screenshots: "Selectați tipul de Media suplimentară de creat atunci când se afișează o notificare",
        monitors: "Monitorul care va fi capturat atunci când se face captura de ecran",
        hdrmode: `Captură de ecran utilizând o metodă compatibilă cu monitoarele care folosesc High Dynamic Range (HDR)`,
        ovpos: "Poziția suprapunerii notificării în captura de ecran",
        ovmatch: "Potrivirea poziției ecranului setată în Personalizator pentru acest tip de notificare",
        ovpath: "Locația în care vor fi salvate capturile de ecran generate de această opțiune",
        ssdelay: "Adăugați o întârziere de la momentul în care apare notificarea până la momentul în care se face captura de ecran",
        sspreview: "Afișați o previzualizare a modului în care va apărea captura de ecran când este salvată",
        noanim: "Dezactivați toate animațiile ferestrei în aplicație și efectele de tranziție",
        noupdatedialog: `Previne afișarea automată și focalizarea dialogului <span class="hl">Actualizare disponibilă</span><br><br><span class="ttdesc">Dialogul poate fi totuși accesat prin clic pe butonul de actualizare când este disponibil</span>`,
        nvda: "Permiteți copierea informațiilor despre realizare în clipboard atunci când se deblochează o realizare, pentru a fi citite de software-ul de citire a ecranului, cum ar fi NVDA",
        tooltips: "Afișați sfaturi instrumente atunci când plasați cursorul pe anumite elemente UI",
        pollrate: `Setați intervalul de actualizare pentru datele de realizare în timpul jocului<br><br><span class="ttdesc">Performanța poate crește/scădea în funcție de valoarea sau de resursele hardware ale sistemului. Valorile mai mari duc de obicei la o încărcare mai mică a sistemului, dar pot întârzia notificările</span>`,
        initdelay: `Setează întârzierea între detectarea actualului <span class="hl">AppID</span> și începutul urmăririi proceselor/realizărilor<br><br><span class="ttdesc">Creșterea acestei valori poate preveni scenarii în care Steam nu poate porni jocul curent (din cauza inițializării aplicației în Steamworks înainte ca jocul să fie lansat)</span><br><br><span class="ttdesc">Alternativ, creșterea acestei valori poate fi folosită și pentru a evita detectarea incorectă a proceselor de pre-lansare ale jocului</span>`,
        releasedelay: `Stabilește cât timp așteaptă procesul de fundal să se repornească după ce jocul curent a fost lansat. Afectează atât urmărirea automată a procesului, cât și jocurile legate manual.<br><br><span class="ttdesc">Permite un interval mai lung de timp pentru a elibera complet Steamworks de aplicație. Creșterea acestei valori poate preveni comportamente neobișnuite, cum ar fi urmărirea unui joc închis anterior</span>`,
        maxretries: `Stabilește numărul maxim de încercări de a lega un proces în execuție la un AppID detectat. Afectează atât urmărirea automată a procesului, cât și jocurile legate manual.<br><br><span class="ttdesc">Încercările de legare sunt efectuate o dată pe secundă. Dacă un proces în execuție nu este legat la AppID-ul curent după această numărătoare de încercări, un proces nevalid va fi returnat. În astfel de cazuri, jocul va trebui eliberat manual prin intermediul Tavă de Sistem > Opțiuni > Eliberează Joc</span>`,
        debug: "Deschideți Panoul de Depanare, care afișează informații detaliate de urmărire a proceselor",
        userust: "Utilizați o funcție alternativă bazată pe Rust pentru a verifica dacă procesele de joc urmărite rulează în prezent pe sistem. Atunci când nu este bifat, se va folosi în schimb verificarea procesului implicită bazată pe NodeJS.",
        notifydebug: "Creați o fereastră DevTools pentru toate notificările. Util pentru depanarea problemelor de notificare",
        usecustomfiles: "Permite notificărilor să încarce fișiere personalizabile de către utilizator. Se recomandă prudență pentru utilizatorii obișnuiți",
        showcustomfiles: "Deschideți locația fișierelor personalizate",
        log: "Deschideți fereastra Jurnal aplicație, care afișează informații despre activitatea procesului, avertismente și erori",
        reset: "Eliminați toate datele de configurare și reporniți aplicația",
        playback: "Pauză/Reluați animația previzualizării notificării",
        replay: "Reîncepeți animația previzualizării notificării",
        preset: "Selectați presetarea de notificare pentru a o personaliza",
        iconanim: "Comutați bordura și animația iconului Rare",
        alldetails: "Afișați toate elementele de text din notificare, inclusiv cele ascunse în mod implicit pentru această presetare",
        usepercent: "Afișare procentul de deblocare al realizării, în locul valorii XP/S",
        displaytime: "Setați numărul de secunde în care va fi afișată notificarea",
        scale: "Măriți sau micșorați dimensiunea notificării",
        customtext: "Setați un mesaj personalizat care va fi afișat în notificare",
        usegametitle: "Afișați titlul jocului curent în notificare",
        customfont: "Încărcați o fontă personalizată care va fi utilizată în notificare",
        soundmode: "Selectați fie un singur fișier audio, fie un fișier audio selectat aleatoriu dintr-un folder care conține mai multe fișiere audio, atunci când apare o notificare",
        soundfile: "Selectați un fișier audio care va fi redat atunci când apare o notificare",
        sounddir: "Selectați un folder din care va fi selectat aleatoriu un fișier audio atunci când apare o notificare",
        volume: "Setați volumul redării fișierului audio",
        preview: "Previzualizați fișierul audio selectat sau un fișier audio selectat aleatoriu din folder",
        bgstyle: "Selectați stilul pentru fundalul notificării",
        gradientangle: "Setați unghiul gradientului",
        bgimg: "Încărcați un fișier de imagine care va fi utilizat ca fundal al notificării",
        bgimgbrightness: "Setați luminozitatea imaginii folosite ca fundal pentru notificare",
        brightness: "Setați luminozitatea artei jocului utilizată ca fundal al notificării",
        blur: "Setați nivelul de estompare aplicat fundalului notificării",
        roundness: "Setați rotunjimea marginilor notificării",
        fontsize: "Setați dimensiunea fontului utilizat în notificare",
        opacity: "Setați opacitatea generală a notificării",
        bgonly: "Setați doar opacitatea pentru fundalul notificării, menținând celelalte elemente la opacitate completă",
        glow: "Activați un efect de sclipire care înconjoară notificarea",
        glowcolor: "Setați culoarea efectului de sclipire",
        glowsize: "Setați dimensiunea efectului de sclipire",
        glowx: "Deplasează efectul de luminozitate pe orizontală",
        glowy: "Deplasează efectul de luminozitate pe verticală",
        glowopacity: "Setează opacitatea efectului de luminozitate",
        glowanim: "Selectați o animație presetată care să fie aplicată efectului de sclipire",
        glowspeed: "Setați viteza animației aplicată efectului de sclipire",
        mask: "Activați mascațiunea părților notificării cu o imagine personalizată",
        maskimg: `Încărcați un fișier de imagine care să fie utilizat ca mască<br><br><span class="ttdesc">În CSS, <code class="ttcode">mask-mode: alpha</code> funcționează în mod invers față de ceea ce se așteaptă în mod normal - zonele de transparență din fișierul de imagine vor fi acoperite, iar zonele negre/cenușii vor permite elementelor de sub ele să fie vizibile</span>`,
        outline: "Selectează tipul de contur care va fi afișat în jurul notificării",
        outlinecolor: "Setează culoarea conturului din jurul notificării",
        outlinewidth: "Setează lățimea conturului din jurul notificării",
        primarycolor: "Setați culoarea primară a notificării",
        secondarycolor: "Setați culoarea secundară a notificării",
        tertiarycolor: "Setați culoarea terțiară a notificării",
        fontcolor: "Setați culoarea textului afișat în notificare",
        fontoutline: "Adăugați un contur la textul afișat în notificare",
        fontoutlinecolor: "Setați culoarea conturului textului",
        fontshadow: "Adăugați o umbră la textul afișat în notificare",
        fontshadowcolor: "Setați culoarea umbrei textului",
        iconroundness: "Setați rotunjimea iconului realizării/jocului afișat în notificare",
        plat: "Încărcați un fișier de imagine care să înlocuiască iconul 100%",
        usegameicon: "Înlocuiți iconul implicit al notificării cu iconul pentru jocul curent",
        showhiddenicon: "Afișare unei imagini care indică faptul că realizarea este ascunsă în notificare",
        hiddenicon: "Încărcare fișier de imagine pentru a înlocui pictograma realizării ascunse",
        logo: "Încărcați un fișier de imagine pentru a înlocui iconul Logo",
        decoration: "Încărcați un fișier de imagine pentru a înlocui iconul Decorare",
        showdecoration: "Comutați vizibilitatea iconului Decorare",
        replacelogo: "Înlocuiți pictograma logo-ului în notificare cu decorația selectată",
        pos: "Setați poziția notificării pe ecran",
        usecustompos: "Activați poziționarea personalizată pentru notificare",
        setcustompos: "Setați poziția personalizată pentru notificare",
        resetcustompos: "Resetați poziția notificării la poziția personalizată implicită",
        updatetheme: "Actualizați Tema curentă cu opțiunile de personalizare selectate",
        savetheme: "Salvați toate opțiunile de personalizare configurate ca o nouă Temă",
        visibilitybtn: "Comutare vizibilitate element în previzualizări personalizate și notificări de test",
        delbtn: "Resetare element la valoarea implicită",
        imgpath: "Locația unde vor fi salvate imaginile de notificare generate de această opțiune",
        checkforupdates: `Verificați dacă a fost lansată o nouă versiune a aplicației pe GitHub. Dacă este disponibilă o actualizare, aceasta va fi descărcată și instalată automat odată ce a fost confirmată prin fereastra de dialog <span class="hl">Actualizare disponibilă</span>`,
        linkedgames: `Ocolirea <span class="hl">urmaririi automate a proceselor</span> pentru anumite jocuri Steam<br><br><span class="ttdesc">Această opțiune ar trebui utilizată doar în scenarii foarte specifice. Utilizatorii nu ar trebui să aibă nevoie să folosească această opțiune în circumstanțe normale!</span>`,
        exclusionlist: `Prevenirea urmăririi realizărilor în anumite jocuri Steam de către aplicație<br><br><span class="ttdesc">Această opțiune ar trebui utilizată doar în scenarii foarte specifice. Utilizatorii nu ar trebui să aibă nevoie să folosească această opțiune în circumstanțe normale!</span>`,
        ovx: "Deplasați notificarea afișată în captura de ecran pe orizontală",
        ovy: "Deplasați notificarea afișată în captura de ecran pe verticală",
        importtheme: `Importați personalizările printr-un <span class="hl">fișier temă</span> creat de utilizator`,
        exporttheme: `Exportați <span class="hl">tema</span> selectată curent pentru partajare<br><br><span class="ttdesc">Înainte de a încerca să exportați, asigurați-vă că <span class="hl">tema</span> dorită este selectată (prin meniul <span class="hl">Selectare Temă</span>). Asigurați-vă și că personalizările au fost salvate în <span class="hl">tema</span> selectată (prin meniul <span class="hl">Salvare Temă</span>)<br><br><u>Orice personalizări nesalvate în <span class="hl">tema</span> curent nu vor fi exportate!</u></span>`,
        webhooks: "Folosește un URL Webhook pentru a posta pe un server Discord de fiecare dată când o realizare este deblocat",
        webhookmain: `Comută dacă trebuie sau nu să postezi informații despre realizări pe un server Discord când o realizare principală este deblocată`,
        webhookrare: "Comută dacă trebuie sau nu să postezi informații despre realizări pe un server Discord când o realizare rară este deblocată",
        webhookplat: "Comută dacă trebuie sau nu să postezi informații despre realizări pe un server Discord când o realizare de 100% este deblocată",
        webhooktest: "Comută dacă informațiile de test trebuie trimise către un server Discord atunci când sunt declanșate notificări de test de orice tip",
        webhookurl: `Setează <span class="hl">URL Webhook</span> pentru serverul Discord dorit<br><br><span class="ttdesc">Un <span class="hl">URL Webhook</span> este folosit pentru a posta pe un server/canal Discord în numele unui utilizator sau aplicație. Pentru a configura un nou Webhook pentru un server Discord, utilizatorul trebuie să aibă un rol pe serverul dorit care permite crearea de Webhook-uri<br><br><u>Un URL Webhook este necesar atunci când folosești această opțiune</u><br><br>Consultă documentația oficială Discord pentru mai multe informații</span>`,
        webhookspoilers: `Adaugă o etichetă spoiler pentru "Realizări ascunse" atunci când sunt postate pe Discord`,
        unlockmsg: "Setează poziția mesajului de deblocare/textului personalizat în $type",
        title: "Setează poziția titlului realizării în $type",
        desc: "Setează poziția descrierii realizării în $type",
        notification: "notificare",
        screenshot: "captură de ecran",
        percentpos: "Setează poziția procentului de raritate în $type",
        sspercentpos: "Setează poziția procentului de raritate în $type",
        hiddeniconpos: "Setează poziția iconiței de realizare ascunsă/secretă în $type",
        sshiddeniconpos: "Setează poziția iconiței de realizare ascunsă/secretă în $type",
        decorationpos: "Setează poziția elementului de decorație în $type",
        ssdecorationpos: "Setează poziția elementului de decorație în $type",
        percentbadge: "Afișează procentul de deblocare într-un badge plasat deasupra pictogramei realizării/jocului",
        sspercentbadge: "Afișează procentul de deblocare într-un badge plasat deasupra pictogramei realizării/jocului",
        percentbadgepos: "Setează poziția badge-ului",
        sspercentbadgepos: "Setează poziția badge-ului",
        percentbadgecolor: "Setează culoarea de fundal a badge-ului",
        sspercentbadgecolor: "Setează culoarea de fundal a badge-ului",
        percentbadgefontcolor: "Culoarea fontului badge-ului",
        sspercentbadgefontcolor: "Culoarea fontului badge-ului",
        percentbadgefontsize: "Setează dimensiunea badge-ului",
        sspercentbadgefontsize: "Setează dimensiunea badge-ului",
        percentbadgeroundness: "Setează rotunjirea badge-ului",
        sspercentbadgeroundness: "Setează rotunjirea badge-ului",
        percentbadgex: "Săgeată poziția elementului badge orizontal",
        sspercentbadgex: "Săgeată poziția elementului badge orizontal",
        percentbadgey: "Săgeată poziția elementului badge vertical",
        sspercentbadgey: "Săgeată poziția elementului badge vertical",
        percentbadgeimg: "Afișează un icon bazat pe raritate ca element badge",
        sspercentbadgeimg: "Afișează un icon bazat pe raritate ca element badge",
        percentbadgeimgbronze: "Iconița badge care se va afișa când procentajul de deblocare este > 50%",
        sspercentbadgeimgbronze: "Iconița badge care se va afișa când procentajul de deblocare este > 50%",
        percentbadgeimgsilver: "Iconița badge care se va afișa când procentajul de deblocare este < 50% și > $rarity",
        sspercentbadgeimgsilver: "Iconița badge care se va afișa când procentajul de deblocare este < 50% și > $rarity",
        percentbadgeimggold: "Iconița badge care se va afișa când procentajul de deblocare este < $rarity",
        sspercentbadgeimggold: "Iconița badge care se va afișa când procentajul de deblocare este < $rarity",
        resetpbimgs: "Resetare toate iconițele badge la valorile implicite",
        elemsmatch: `Se potrivesc setările Elementelor de Notificare stabilite în Personalizator pentru acest tip de notificare<br><br><span class="ttdesc">Unele Predefiniri de Notificare nu pot corespunde pe deplin setărilor Personalizatorului, din cauza diferențelor între layout-urile de notificare pe ecran și cele bazate pe capturi de ecran</span>`,
        themeswitch: `Comutare automată la orice <span class="hl">Temă</span> salvată atunci când un joc specific este detectat`,
        userthemesync: `Sincronizează personalizările din <span class="hl">Tema</span> selectată pentru toate celelalte tipuri de notificări`,
        showsystrayopts: `Afișează toate opțiunile de obicei localizate sub <span class="hl">Zona de Notificare</span> > <span class="hl">Opțiuni</span> în <span class="hl">Setări</span> > <span class="hl">Diverse</span>`,
        releaseshortcut: "Lansează jocul activ urmărit folosind scurtătura de tastatură specificată",
        themeselect: "Selectează un Tema salvat anterior",
        statwin: `Afișează statistici configurabile ale realizărilor pentru jocul curent într-o fereastră externă<br><br><span class="ttdesc">Atunci când este folosit împreună cu opțiunea <span class="hl">Tradu realizările în limba Steam</span>, anumite traduceri pot să nu fie disponibile până când realizarea specifică nu este deblocată</span>`,
        statwinaot: `Setează fereastra de Statistici ale Realizărilor în modul "Întotdeauna în față", permițându-i să fie afișată deasupra ferestrei jocului<br><br><span class="ttdesc">Când este activată, fereastra de Statistici ale Realizărilor nu va mai înregistra interacțiuni cu utilizatorul, cum ar fi evenimentele de "click". Pentru a reactiva interacțiunea cu fereastra, această opțiune trebuie dezactivată</span>`,
        statwinshortcut: "Comută Overlay-ul de Statistici ale Realizărilor folosind scurtătura de tastatură specificată",
        ssdisplay: "Afișează o previzualizare a capturii de ecran în notificare"
    },
    update: {
        updateavailable: "Actualizare disponibilă",
        sub: [
            `<span id="newversion"></span>`,
            "O nouă actualizare a Steam Achievement Notifier este disponibilă!",
            `Note complete de lansare disponibile pe <span id="discordreleasenotes"></span> și <span id="githubreleasenotes"></span>`
        ],
        update: "Actualizare"
    },
    linkgame: {
        content: {
            exepath: "Calea către Executabil",
            managesub: [
                `Asociați manual <span class="hl">fișierul executabil</span> al unui joc la un <span class="hl">AppID</span> specific sau <span class="hl">dezasociați</span> unul existent`,
                `Steam Achievement Notifier nu va mai utiliza <span class="hl">urmarirea automată a proceselor</span> pentru niciunul dintre <span class="hl">jocurile asociate</span> - în schimb, fișierul executabil specificat va fi urmărit de fiecare dată când AppID-ul asociat este detectat`,
                `<span class="hl" id="appidhelp"><u>Cum găsesc AppID-ul unui joc Steam?</u></span>`
            ],
            linknew: "Joc Nou Asociat",
            linknewsub: [
                `Creați o nouă legătură între un <span class="hl">fișier executabil al jocului</span> și <span class="hl">AppID</span>-ul asociat`,
                `După ce este creat, legăturile pot fi <span class="hl">dezasociate</span> prin fereastra de <span class="hl">Administrare Jocuri Asociate</span>`
            ],
            link: "Asociază",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Adaugă <span class="hl">AppID</span>-ul oricărui joc Steam la <span class="hl">Lista de Excludere</span>`,
                `Steam Achievement Notifier nu va încerca să urmărească datele de realizare pentru niciun joc al cărui <span class="hl">AppID</span> a fost adăugat la <span class="hl">Lista de Excludere</span>`,
                `<span class="hl" id="appidhelp"><u>Cum găsesc AppID-ul unui joc Steam?</u></span>`
            ],
            exclusionnew: "Excludere Nouă",
            exclusionnewsub: [
                `Introduceți <span class="hl">AppID</span>-ul pentru a-l adăuga la <span class="hl">Lista de Excludere</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elemente de Notificare",
        content: {
            unlockmsg: "Mesaj de Deblocare",
            title: "Titlu Realizare",
            desc: "Descriere Realizare",
            hiddeniconpos: "Iconiță Ascunsă",
            sshiddeniconpos: "Iconiță Ascunsă",
            decorationpos: "Decorație",
            ssdecorationpos: "Decorație",
            percentpos: "Procent Raritate",
            sspercentpos: "Procent Raritate",
            percentbadge: "Badge de Procent",
            sspercentbadge: "Badge de Procent",
            percentbadgepos: "Poziția Badge-ului",
            sspercentbadgepos: "Poziția Badge-ului",
            percentbadgecolor: "Culoarea Badge-ului",
            sspercentbadgecolor: "Culoarea Badge-ului",
            percentbadgefontcolor: "Culoarea fontului Badge",
            sspercentbadgefontcolor: "Culoarea fontului Badge",
            percentbadgefontsize: "Dimensiunea Badge-ului",
            sspercentbadgefontsize: "Dimensiunea Badge-ului",
            percentbadgeroundness: "Rotunjirea Badge-ului",
            sspercentbadgeroundness: "Rotunjirea Badge-ului",
            percentbadgex: "Offset orizontal",
            sspercentbadgex: "Offset orizontal",
            percentbadgey: "Offset vertical",
            sspercentbadgey: "Offset vertical",
            percentbadgeimg: "Folosește iconiță",
            sspercentbadgeimg: "Folosește iconiță",
            percentbadgeimgbronze: "Raritate: > 50%",
            sspercentbadgeimgbronze: "Raritate: > 50%",
            percentbadgeimgsilver: "Raritate: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Raritate: < 50% & > $rarity%",
            percentbadgeimggold: "Raritate: < $rarity%",
            sspercentbadgeimggold: "Raritate: < $rarity%",
            resetpbimgs: "Resetare iconițe badge",
            elemsmatch: "Potrivire setări Personalizator",
            ssdisplay: "Previzualizare captură de ecran"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Adaugă <span class="hl">AppID</span> al oricărui joc pentru a comuta automat <span class="hl">Temele</span> când este detectat`,
                `Orice <span class="hl">Temă</span> salvată poate fi selectată pentru fiecare tip de notificare, împreună cu monitorul dorit de utilizat ca <span class="hl">Sursă de Captură de Ecran</span>`,
                `<span class="hl" id="appidhelp"><u>Cum găsesc AppID-ul unui joc Steam?</u></span>`
            ],
            themeswitchnew: "Nouă comutare automată",
            themeswitchnewsub: [
                `Introdu <span class="hl">AppID</span> al jocului, împreună cu monitorul dorit de utilizat ca <span class="hl">Sursă de Captură de Ecran</span>`,
                `Selectează care <span class="hl">Temă</span> să comute pentru fiecare tip de notificare atunci când <span class="hl">AppID</span> al acestui joc este detectat`
            ],
            themes: "Teme",
            src: "Sursă de Captură de Ecran",
            themedeleted: "Tema șters"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Se pare că încercați să activați opțiunea <span class="hl">${opt}</span>. Cu toate acestea, pe sistemele Linux, capturile de ecran nu pot fi activate fără a instala mai întâi pachetul <code class="dialogcode">${dep}</code>`,
    `Vă rugăm să rulați <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> pentru a instala această dependență. Acest lucru va asigura că capturile de ecran pot fi făcute pe acest dispozitiv`
]