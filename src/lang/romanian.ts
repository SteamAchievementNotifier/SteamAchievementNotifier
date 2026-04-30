export const translations = {
    global: {
        main: "Principal",
        semi: "Semi",
        rare: "Rar",
        plat: "100%",
        trophymain: "Bronz",
        trophysemi: "Argint",
        trophyrare: "Aur",
        trophyplat: "Platină",
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
        edit: "Editare",
        lockedby: "Blocat de $lock",
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
        donotshowagain: "Nu mai afișa acest dialog",
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
            `Steam Achievement Notifier nu a reușit să localizeze automat fișierul executabil al acestui joc. Locația fișierului executabil al jocului este necesară pentru a putea „elibera” jocul după ce este închis`,
            `Pentru a elibera manual jocul după ce este închis, <i>faceți clic dreapta</i> pe <span class="hl">pictograma din zona de notificare</span> > <span class="hl">Opțiuni</span> > <span class="hl">Eliberează jocul</span> sau utilizați <span class="hl">Comanda rapidă de eliberare a jocului</span>`,
            `Alternativ, faceți clic pe butonul <span class="hl">Adaugă</span> de mai jos pentru a adăuga fișierul executabil asociat oricărei ferestre aflate în prezent în focus la <span class="hl">Setări</span> > <span class="hl">Jocuri</span> > <span class="hl">Jocuri cu eliberare automată</span>`,
        ],
        autorelease: "Eliberare automată a jocului",
        autoreleasesub: [
            `Dacă Steam afișează în continuare un joc ca <i>În joc</i> după ce fereastra jocului a fost închisă, încercați să adăugați o nouă intrare la <span class="hl">Jocuri cu eliberare automată</span>`,
            `Pentru a face acest lucru pentru jocul curent, faceți clic pe butonul <span class="hl">Adaugă</span> de mai jos pentru a adăuga fișierul executabil asociat oricărei ferestre aflate în prezent în focus la <span class="hl">Setări</span> > <span class="hl">Jocuri</span> > <span class="hl">Jocuri cu eliberare automată</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Ce se întâmplă când fac clic pe butonul Adaugă?</u></span>`,
        linkgamehelp: "Adaugă intrare prin focus",
        linkgamehelpsub: [
            `Făcând clic pe butonul <span class="hl">Adaugă</span>, va fi adăugată automat o nouă intrare la <span class="hl">Setări</span> > <span class="hl">Jocuri</span> > <span class="hl">Jocuri cu eliberare automată</span>, folosind informațiile din fereastra aflată în prezent în focus.`,
            `După ce faceți clic pe butonul <span class="hl">Adaugă</span>, va începe un temporizator de 5 secunde`,
            `Înainte ca temporizatorul să se termine, aduceți fereastra jocului în prim-plan`,
            `Odată ce temporizatorul s-a încheiat, va fi adăugată o nouă intrare pentru <span class="hl">AppID</span>-ul curent la <span class="hl">Setări</span> > <span class="hl">Jocuri</span> > <span class="hl">Jocuri cu eliberare automată</span>, folosind fișierul executabil asociat ferestrei aflate în focus`,
            `Încercările noi vor suprascrie intrările existente sau intrarea poate fi eliminată prin <span class="hl">Setări</span> > <span class="hl">Jocuri</span> > <span class="hl">Jocuri cu eliberare automată</span> făcând clic pe butonul <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Nu se poate adăuga fereastra",
        addlinkfailedsub: `Faceți clic pe butonul <span class="hl">Adaugă</span> pentru a încerca din nou`,
        webhookunlockmsg: "$user a deblocat o realizare",
        webhookunlockmsgplat: "$user a deblocat toate realizările",
        webhookingame: "în $gamename",
        notconnected: "Nu este conectat",
        raloghelp: "Jocul meu nu este detectat",
        raenablelog: `Fișierele de jurnal ale emulatorului`,
        raenablelogsub: [
            `Pentru a accesa evenimentele interne ale jocului (cum ar fi starea curentă a jocului, informațiile despre deblocarea realizărilor, etc.), jurnalizarea într-un <span class="hl">fișier de log</span> <u>trebuie activată</u> în orice emulator selectat.<br><br>Emulatoarele selectate <u>trebuie să folosească acest <span class="hl">fișier de log</span></u> ca valoare pentru <span class="hl">Calea fișierului de log</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Setări > Jurnalizare</span> trebuie configurat cu următoarele setări:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbiajul jurnalizării</span>: <span class="hlgreen">LIGAT</span></li>
                        <li><span class="hllb">Nivelul de jurnalizare al interfeței</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Jurnalizează în fișier</span>: <span class="hlgreen">LIGAT</span></li>
                        <li><span class="hllb">Marca de timp pentru fișierele de log</span>: <span class="hlred">DEZLIGAT</span></li>
                    </ul>
                    <br>
                    Cu setările implicite de instalare, <span class="hl">"retroarch.log"</span> este stocat în:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Vizualizare > Afișează configurația logului</span> trebuie configurat cu următoarele setări:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbiajul</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Ieșiri din jurnal</span> > <span class="hlgreen">Scrie în fișier</span></li>
                        <li><span class="hllb">Tipuri de log</span> > <span class="hlgreen">Realizări (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Cu setările implicite de instalare, <span class="hl">"dolphin.log"</span> este stocat în una dintre următoarele locații:
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
                    <span class="hl">PCSX2 > Unelte > Activare jurnalizare fișiere</span> trebuie să fie activat
                    <br>
                    <br>
                    Cu setările de instalare implicite, <span class="hl">"emulog.txt"</span> este salvat în:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> trebuie să fie <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>descărcat</u></span> și mutat în <span class="hl">directorul de instalare Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Setări > Realizări > RAIntegration (doar pentru dezvoltatori)</span> trebuie să fie activat
                    <br>
                    <br>
                    Folosind setările de instalare implicite, <span class="hl">"RALog.txt"</span> este salvat în:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Setări > Instrumente pentru dezvoltatori > General > Înregistrare în fișier</span> trebuie să fie activată și configurată cu următoarele setări:
                    <br>
                    <ul>
                        <li><span class="hllb">Realizări</span>: <span class="hlgreen">Informații</span></li>
                    </ul>
                    <br>
                    Cu setările implicite de instalare, fișierul <span class="hl">"log.txt"</span> este salvat în:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta neregăsită",
        betaunsupportedsub: [
            "A fost lansată o nouă versiune a Steam Achievement Notifier!",
            `<u>Această versiune Beta nu mai este susținută</u>. Te rugăm să descarci și să instalezi ultima versiune oficială prin Github, folosind butonul <span class="hl">Releases</span> de mai jos.`,
            "Mulțumim că ai testat! 💜"
        ],
        betaghreleases: "Versiuni",
        createnewpreset: "Creează un Nou Predefinit",
        createnewpresetplaceholder: "Numele Predefinitului",
        createnewpreseterror: "Nu s-a putut crea noul predefinit. Verifică Jurnalul Aplicației pentru detalii.",
        createnewpresetlogo: "Logo",
        createnewpresetdecoration: "Decorație",
        none: "Niciunul",
        fixed: "Fix",
        dynamic: "Dinamic"
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
                rarity: "Procentaj de raritate",
                semirarity: "Procentaj de argint",
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
                webhookspoilers: `Adaugă etichetă spoiler`,
                webhookappid: `Afișați AppID`,
                replaynotify: "Notificare de repetare",
                replaynotifyshortcut: "Scurtătură pentru repetare",
                customtrigger: "Declanșator Personalizat",
                customtriggershortcut: "Scurtătură Declanșator",
                customtriggerdelay: "Întârziere Declanșator",
                customtriggerusedisplaytime: "Folosește Timpul de Afișare",
                trophymode: "Mod Trofeu",
                notifymax: "Notificări Maxime", 
                notifyspace: "Spațierea Notificărilor",
                notify1line: "Limitează textul la 1 linie"
            }
        },
        games: {
            title: "Jocuri",
            content: {
                linkedgames: "Jocuri cu eliberare automată",
                themeswitch: "Comutare automată a temelor",
                exclusionlist: "Listă de Excludere",
                inclusionlist: "Listă de Incluziune",
                listmode: "Mod Listă",
                exclusion: "Excludere",
                inclusion: "Incluziune"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Fă Captură Steam",
                screenshots: "Media Suplimentară",
                off: "Oprit",
                ssonly: "Doar Captură de Ecran",
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
                imgpath: "Calea Imaginii",
                ssenabled: "Activare",
                ssmode: "Mod Captură Ecran",
                screen: "Ecran",
                window: "Fereastră",
                rauseemudir: "Salvează în subfolderul emulatorului",
                ssext: "Format captură de ecran",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Adaugă în Steam"
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
                exportachdata: "Exportă datele realizărilor",
                lognum: "Fișiere de Jurnal Anterioare", 
                audiocooldown: "Timp de Așteptare Audio",
                usecustomfiles: "Utilizare Fișiere de Aplicație Personalizate",
                showcustomfiles: "Afișare Fișiere de Aplicație Personalizate"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulatori",
                rauser: "Nume de utilizator",
                rakey: "Cheia API",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Calea fișierului de log",
                rapercenttype: "Tipul procentajului",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Introduceți calea fișierului de log",
                logfile: "Fișier de log",
                status: "Stare",
                game: "Joc",
                lastachievement: "Ultimul ID de Realizare",
                wait: "Așteptând emulatorul",
                idle: "Așteptând evenimentul jocului",
                start: "Pornirea jocului",
                stop: "Oprirea jocului",
                achievement: "Realizare deblocată"
            }
        },
        misc: {
            title: "Diverse",
            content: {
                colorprofile: "Profil de culoare",
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
                bgachicon: "Folosește Iconița Realizării",
                bgimgbrightness: "Luminozitate",
                brightness: "Luminozitate",
                blur: "Încețoșare",
                roundness: "Rotunjime",
                fontsize: "Dimensiune Font",
                usecustomfontsizes: "Folosește dimensiuni personalizate ale fontului",
                unlockmsgfontsize: "Mesaj de deblocare",
                titlefontsize: "Titlu",
                descfontsize: "Descriere",
                textvspace: "Spațiere Text",
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
                glowrarity: "Folosește raritatea",
                glowcolorbronze: "Raritate: > $semirarity",
                glowcolorsilver: "Raritate: < $semirarity & > $rarity",
                glowcolorgold: "Raritate: < $rarity",
                off: "Niciunul",
                pulse: "Puls",
                double: "Dublu",
                focus: "Focalizare",
                orbit: "Orbită",
                fluorescent: "Fluorescent",
                rainbow: "Curcubeu",
                mask: "Mască",
                maskimg: "Imaginea măștii",
                useoutline: "Contur",
                outline: "Tipul Conturului",
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
                iconshadowcolor: "Culoare umbră iconiță rară",
                iconanimcolor: "Culoare animație iconiță rară",
                fontcolor: "Culoare Font",
                usecustomfontcolors: "Folosește culori personalizate pentru fonturi",
                unlockmsgfontcolor: "Culoare 1",
                titlefontcolor: "Culoare 2",
                descfontcolor: "Culoare 3",
                fontoutline: "Contur Font",
                fontoutlinecolor: "Culoare Contur Font",
                fontoutlinescale: "Scara Contur Font",
                fontshadow: "Umbra Font",
                fontshadowcolor: "Culoare Umbră Font",
                fontshadowscale: "Scara Umbră Font",
                fontshadowx: "Deplasare orizontală",
                fontshadowy: "Deplasare verticală"
            }
        },
        icons: {
            title: "Iconițe",
            content: {
                iconscale: "Scală iconiță",
                iconroundness: "Rotunjire Iconiță",
                showiconborder: "Arată bordura iconiței",
                iconborderimg: "Imagine bordură",
                iconborderpos: "Poziția bordurii",
                iconborderscale: "Scalarea bordurii",
                iconborderx: "Deplasare orizontală",
                iconbordery: "Deplasare verticală",
                iconborderrarity: "Folosește Raritate",
                iconborderimgbronze: "Raritate: > $semirarity",
                iconborderimgsilver: "Raritate: < $semirarity & > $rarity",
                front: "Față",
                back: "Spate",
                plat: "Logo 100%",
                usegameicon: "Utilizare Iconiță Joc",
                gameicontype: "Tipul iconiței jocului",
                usecustomimgicon: "Utilizați o iconiță personalizată",
                customimgicon: "Iconiță personalizată",
                icon: "Iconiță",
                logo: "Logo",
                logoscale: "Scală logo",
                decoration: "Decorație",
                decorationscale: "Scală decorațiune",
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
                copycustompos: "Aplică Tuturor",
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
                themeselect: "Tema selectată",
                copytheme: "Copiază tema",
                copythemesub: "Selectează tipul/tipurile de notificare în care dorești să copiezi tema selectată"
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
        rarity: `Procentajul la care se declanșează notificările pentru realizările rare.<br><br>Orice realizare cu un procentaj de deblocare peste această valoare va fi afișată ca o notificare Principală<br><br><span class="ttdesc">Dacă este activat <span class="hl">Modul Trofeu</span>, orice realizare cu un procentaj de deblocare peste această valoare va fi afișată ca o notificare Argint în schimb</span>`,
        semirarity: `Procentajul la care vor fi afișate elementele de notificare „Argint” (de ex. <span class="hl">Insigne de Raritate</span>, <span class="hl">Decorațiuni</span> etc.).<br><br>Orice realizare cu un procentaj de deblocare sub (sau egal cu) această valoare și peste valoarea <span class="hl">Procentajului de Raritate</span> va afișa elemente de notificare configurate pentru rarități „Argint”.<br><br>Orice realizare cu un procentaj de deblocare peste această valoare va afișa elemente de notificare configurate pentru rarități „Bronz”<br><br><span class="ttdesc">Dacă este activat <span class="hl">Modul Trofeu</span>, orice realizare cu un procentaj de deblocare peste această valoare va fi afișată ca o notificare Bronz în schimb</span>`,
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
        colorprofile: `Forțează toate feroneriile aplicației să se redea folosind profilul de culoare selectat<br><br><span class="ttdesc">Este necesar un restart al aplicației</span>`,
        pollrate: `Setați intervalul de actualizare pentru datele de realizare în timpul jocului<br><br><span class="ttdesc">Performanța poate crește/scădea în funcție de valoarea sau de resursele hardware ale sistemului. Valorile mai mari duc de obicei la o încărcare mai mică a sistemului, dar pot întârzia notificările</span>`,
        initdelay: `Setează întârzierea între detectarea actualului <span class="hl">AppID</span> și începutul urmăririi proceselor/realizărilor<br><br><span class="ttdesc">Creșterea acestei valori poate preveni scenarii în care Steam nu poate porni jocul curent (din cauza inițializării aplicației în Steamworks înainte ca jocul să fie lansat)</span><br><br><span class="ttdesc">Alternativ, creșterea acestei valori poate fi folosită și pentru a evita detectarea incorectă a proceselor de pre-lansare ale jocului</span>`,
        releasedelay: `Setați cât timp procesul Worker din fundal așteaptă înainte de a reporni după ce jocul curent a fost eliberat. Afectează atât urmărirea automată a proceselor, cât și Jocurile cu eliberare automată<br><br><span class="ttdesc">Permite un interval de timp mai lung pentru ca Steamworks să fie complet eliberat din aplicație. Creșterea acestei valori poate preveni comportamente neobișnuite, cum ar fi urmărirea unui joc închis anterior</span>`,
        maxretries: `Setați numărul maxim de reîncercări pentru a asocia un proces în execuție cu un AppID detectat. Afectează atât urmărirea automată a proceselor, cât și Jocurile cu eliberare automată<br><br><span class="ttdesc">Reîncercările sunt efectuate o dată pe secundă. Dacă un proces în execuție nu este asociat cu AppID-ul curent după acest număr de reîncercări, va fi returnat un proces invalid. În astfel de cazuri, jocul va trebui eliberat manual prin Zona de notificare > Opțiuni > Eliberează jocul</span>`,
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
        bgachicon: "Folosește pictograma realizării deblocate ca fundal pentru notificare",
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
        glowrarity: "Schimbă culoarea efectului de strălucire în funcție de raritatea realizării deblocate",
        glowcolorbronze: "Culoarea strălucirii afișată când procentajul de deblocare este > $semirarity",
        glowcolorsilver: "Culoarea strălucirii afișată când procentajul de deblocare este < $semirarity și > $rarity",
        glowcolorgold: "Culoarea strălucirii afișată când procentul de deblocare este < $rarity",
        mask: "Activați mascațiunea părților notificării cu o imagine personalizată",
        maskimg: `Încărcați un fișier de imagine care să fie utilizat ca mască<br><br><span class="ttdesc">În CSS, <code class="ttcode">mask-mode: alpha</code> funcționează în mod invers față de ceea ce se așteaptă în mod normal - zonele de transparență din fișierul de imagine vor fi acoperite, iar zonele negre/cenușii vor permite elementelor de sub ele să fie vizibile</span>`,
        useoutline: "Afișează un contur în jurul notificării",
        outline: "Selectează tipul de contur care va fi afișat în jurul notificării",
        outlinecolor: "Setează culoarea conturului din jurul notificării",
        outlinewidth: "Setează lățimea conturului din jurul notificării",
        primarycolor: "Setați culoarea primară a notificării",
        secondarycolor: "Setați culoarea secundară a notificării",
        tertiarycolor: "Setați culoarea terțiară a notificării",
        fontcolor: "Setați culoarea textului afișat în notificare",
        fontoutline: "Adăugați un contur la textul afișat în notificare",
        fontoutlinecolor: "Setați culoarea conturului textului",
        fontoutlinescale: "Setează grosimea conturului textului",
        fontshadow: "Adăugați o umbră la textul afișat în notificare",
        fontshadowcolor: "Setați culoarea umbrei textului",
        fontshadowscale: "Setează grosimea umbrei textului",
        fontshadowx: "Mută poziția umbrei textului orizontal",
        fontshadowy: "Mută poziția umbrei textului vertical",
        iconroundness: "Setați rotunjimea iconului realizării/jocului afișat în notificare",
        plat: "Încărcați un fișier de imagine care să înlocuiască iconul 100%",
        usegameicon: "Înlocuiți iconița realizării deblocate cu iconița jocului curent",
        gameicontype: `Selectați tipul de imagine care va fi afișată ca iconiță a jocului`,
        usecustomimgicon: "Înlocuiți iconița realizării deblocate cu un fișier de imagine personalizat",
        customimgicon: "Încărcați un fișier de imagine care va fi folosit ca iconiță personalizată",
        showhiddenicon: "Afișare unei imagini care indică faptul că realizarea este ascunsă în notificare",
        hiddenicon: "Încărcare fișier de imagine pentru a înlocui pictograma realizării ascunse",
        logo: "Încărcați un fișier de imagine pentru a înlocui iconul Logo",
        decoration: "Încărcați un fișier de imagine pentru a înlocui iconul Decorare",
        showdecoration: "Comutați vizibilitatea iconului Decorare",
        replacelogo: "Înlocuiți pictograma logo-ului în notificare cu decorația selectată",
        pos: "Setați poziția notificării pe ecran",
        usecustompos: "Activați poziționarea personalizată pentru notificare",
        setcustompos: "Setați poziția personalizată pentru notificare",
        copycustompos: "Aplică poziția personalizată tuturor celorlalte tipuri de notificări",
        resetcustompos: "Resetați poziția notificării la poziția personalizată implicită",
        updatetheme: "Actualizați Tema curentă cu opțiunile de personalizare selectate",
        savetheme: "Salvați toate opțiunile de personalizare configurate ca o nouă Temă",
        visibilitybtn: "Comutare vizibilitate element în previzualizări personalizate și notificări de test",
        delbtn: "Resetare element la valoarea implicită",
        imgpath: "Locația unde vor fi salvate imaginile de notificare generate de această opțiune",
        ssenabled: "Activează sau dezactivează generarea de media pentru acest tip",
        checkforupdates: `Verificați dacă a fost lansată o nouă versiune a aplicației pe GitHub. Dacă este disponibilă o actualizare, aceasta va fi descărcată și instalată automat odată ce a fost confirmată prin fereastra de dialog <span class="hl">Actualizare disponibilă</span>`,
        linkedgames: `Ocolirea <span class="hl">urmaririi automate a proceselor</span> pentru anumite jocuri Steam<br><br><span class="ttdesc">Această opțiune ar trebui utilizată doar în scenarii foarte specifice. Utilizatorii nu ar trebui să aibă nevoie să folosească această opțiune în circumstanțe normale!</span>`,
        exclusionlist: `Prevenirea urmăririi realizărilor în anumite jocuri Steam de către aplicație<br><br><span class="ttdesc">Această opțiune ar trebui utilizată doar în scenarii foarte specifice. Utilizatorii nu ar trebui să aibă nevoie să folosească această opțiune în circumstanțe normale!</span>`,
        inclusionlist: `Împiedică toate jocurile Steam să fie urmărite de aplicație, cu excepția celor specificate<br><br><span class="ttdesc">Această opțiune ar trebui utilizată doar în scenarii foarte specifice. Utilizatorii nu ar trebui să aibă nevoie să folosească această opțiune în condiții normale!</span>`,
        ovx: "Deplasați notificarea afișată în captura de ecran pe orizontală",
        ovy: "Deplasați notificarea afișată în captura de ecran pe verticală",
        importtheme: `Importați personalizările printr-un <span class="hl">fișier temă</span> creat de utilizator`,
        exporttheme: `Exportați <span class="hl">tema</span> selectată curent pentru partajare<br><br><span class="ttdesc">Înainte de a încerca să exportați, asigurați-vă că <span class="hl">tema</span> dorită este selectată (prin meniul <span class="hl">Selectare Temă</span>). Asigurați-vă și că personalizările au fost salvate în <span class="hl">tema</span> selectată (prin meniul <span class="hl">Salvare Temă</span>)<br><br><u>Orice personalizări nesalvate în <span class="hl">tema</span> curent nu vor fi exportate!</u></span>`,
        webhooks: "Folosește un URL Webhook pentru a posta pe un server Discord de fiecare dată când o realizare este deblocat",
        webhookmain: `Comută dacă să posteze informații despre realizări pe un server Discord când se deblochează o realizare $main`,
        webhooksemi: `Comută dacă să posteze informații despre realizări pe un server Discord când se deblochează o realizare $semi`,
        webhookrare: "Comută dacă să posteze informații despre realizări pe un server Discord când se deblochează o realizare $rare",
        webhookplat: "Comută dacă să posteze informații despre realizări pe un server Discord când se deblochează o realizare $plat",
        webhooktest: "Comută dacă informațiile de test trebuie trimise către un server Discord atunci când sunt declanșate notificări de test de orice tip",
        webhookurl: `Setează <span class="hl">URL Webhook</span> pentru serverul Discord dorit<br><br><span class="ttdesc">Un <span class="hl">URL Webhook</span> este folosit pentru a posta pe un server/canal Discord în numele unui utilizator sau aplicație. Pentru a configura un nou Webhook pentru un server Discord, utilizatorul trebuie să aibă un rol pe serverul dorit care permite crearea de Webhook-uri<br><br><u>Un URL Webhook este necesar atunci când folosești această opțiune</u><br><br>Consultă documentația oficială Discord pentru mai multe informații</span>`,
        webhookspoilers: `Adaugă o etichetă spoiler pentru "Realizări ascunse" atunci când sunt postate pe Discord`,
        webhookappid: "Afișați AppID-ul jocului curent în subsolul embedului webhook",
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
        percentbadgeimgbronze: "Pictograma insignă afișată când procentajul de deblocare este > $semirarity",
        sspercentbadgeimgbronze: "Pictograma insignă afișată când procentajul de deblocare este > $semirarity",
        percentbadgeimgsilver: "Pictograma insignă afișată când procentajul de deblocare este < $semirarity și > $rarity",
        sspercentbadgeimgsilver: "Pictograma insignă afișată când procentajul de deblocare este < $semirarity și > $rarity",
        percentbadgeimggold: "Iconița badge care se va afișa când procentajul de deblocare este < $rarity",
        sspercentbadgeimggold: "Iconița badge care se va afișa când procentajul de deblocare este < $rarity",
        percentbadgeimgplat: "Pictograma insignă afișată când toate realizările au fost deblocate",
        sspercentbadgeimgplat: "Pictograma insignă afișată când toate realizările au fost deblocate",
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
        ssdisplay: "Afișează o previzualizare a capturii de ecran în notificare",
        iconscale: "Mărește sau micșorează dimensiunea iconiței realizării",
        showiconborder: "Afișează o imagine ca bordură în jurul iconiței realizării",
        iconborderimg: "Încarcă un fișier de imagine pentru a-l folosi ca bordură în jurul iconiței realizării",
        iconborderpos: "Setează dacă să afișezi imaginea bordurii în fața sau în spatele iconiței realizării",
        iconborderscale: "Crește sau micșorează dimensiunea bordurii iconiței în notificare",
        iconborderx: "Crește sau micșorează deplasarea orizontală a bordurii iconiței în notificare",
        iconbordery: "Crește sau micșorează deplasarea verticală a bordurii iconiței în notificare",
        iconborderrarity: "Schimbă imaginea bordurii iconiței pe baza rarității realizării deblocată",
        iconborderimgbronze: "Imaginea marginii iconiței afișată când procentajul de deblocare este > $semirarity",
        iconborderimgsilver: "Imaginea marginii iconiței afișată când procentajul de deblocare este < $semirarity și > $rarity",
        iconshadowcolor: "Setează culoarea efectului de umbră din jurul iconiței realizării când se deblochează o realizare rară",
        iconanimcolor: "Setează culoarea efectului de animație din spatele iconiței realizării când se deblochează o realizare rară",
        logoscale: "Mărește sau micșorează dimensiunea elementului logo din notificare",
        decorationscale: "Mărește sau micșorează dimensiunea elementului de decorațiune din notificare",
        usecustomfontsizes: `Mărește sau micșorează dimensiunea elementelor de text din notificare<br><br><span class="ttdesc">Nu se poate garanta păstrarea aspectului original al notificării atunci când se modifică valorile dimensiunii fontului pentru elemente individuale</span>`,
        unlockmsgfontsize: "Mărește sau micșorează dimensiunea elementului de text al mesajului de deblocare",
        titlefontsize: "Mărește sau micșorează dimensiunea elementului de text al titlului realizării",
        descfontsize: "Mărește sau micșorează dimensiunea elementului de text al descrierii realizării",
        webhookembedcolormain: "Setează culoarea folosită în embed-ul webhook când se deblochează o realizare $main",
        webhookembedcolorsemi: "Setează culoarea folosită în embed-ul webhook când se deblochează o realizare $semi",
        webhookembedcolorrare: "Setează culoarea folosită în embed-ul webhook când se deblochează o realizare $rare",
        webhookembedcolorplat: "Setează culoarea folosită în embed-ul webhook când se deblochează o realizare $plat",
        raemus: "Afișează notificări atunci când jocurile sunt detectate în emulatorii acceptați",
        rauser: "Setează numele de utilizator Retro Achievements pentru a urmări realizările",
        rakey: `Setează cheia Web API care va fi folosită pentru autentificare cu API-ul Retro Achievements<br><br><span class="ttdesc">O cheie Web API poate fi copiată sau regeneratoră prin conectarea la site-ul Retro Achievements și navigând la <span class="hl">Setări > Chei > Web API Key</span><br><br>🔒 Cheia furnizată va fi criptată înainte de a fi salvată local pe sistem (dacă sistemul de operare curent suportă criptarea)</span>`,
        rapercenttype: "Setează dacă vrei să afișezi procentele de realizare Hardcore sau Softcore în notificări",
        retroarch: `Afișează notificările Retro Achievements pentru jocurile emulate prin RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Setări > Jurnalizare</span> trebuie configurat cu următoarele setări:<br><br><ul><li><span class="hllb">Verbiajul jurnalizării</span>: <span class="hlgreen">LIGAT</span></li><li><span class="hllb">Nivelul de jurnalizare al interfeței</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Jurnalizează în fișier</span>: <span class="hlgreen">LIGAT</span></li><li><span class="hllb">Marca de timp pentru fișierele de log</span>: <span class="hlred">DEZLIGAT</span></li></ul></span>`,
        dolphin: `Afișează notificările Retro Achievements pentru jocurile emulate prin Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Vizualizare > Afișează configurația logului</span> trebuie configurat cu următoarele setări:<br><br><ul><li><span class="hllb">Verbiajul</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Ieșiri din jurnal</span> > <span class="hlgreen">Scrie în fișier</span></li><li><span class="hllb">Tipuri de log</span> > <span class="hlgreen">Realizări (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Afișează notificările Retro Achievements pentru jocurile emulate prin PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Unelte > Activare jurnalizare fișiere</span> trebuie să fie activat</span>`,
        duckstation: `Afișează notificările Retro Achievements pentru jocurile emulate prin Duckstation<br><br><span class="ttdesc">❗ Fișierul <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> trebuie descărcat și mutat în <span class="hl">directorul de instalare al Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Setări > Realizări > RAIntegration (Doar pentru dezvoltatori)</span> trebuie să fie activat</span>`,
        ppsspp: `Afișează notificările Retro Achievements pentru jocurile emulate prin PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> trebuie să fie activat și configurat cu următoarele setări:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Setează calea către fișierul de log <span class="hl">"retroarch.log"</span> al RetroArch<br><br><span class="ttdesc">Cu setările implicite de instalare, <span class="hl">"retroarch.log"</span> este stocat în <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Setează calea către fișierul de log <span class="hl">"dolphin.log"</span> al Dolphin<br><br><span class="ttdesc">Cu setările implicite de instalare, <span class="hl">"dolphin.log"</span> este stocat în una dintre următoarele locații:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Setează calea către fișierul de log <span class="hl">"emulog.txt"</span> al PCSX2<br><br><span class="ttdesc">Cu setările implicite de instalare, <span class="hl">"emulog.txt"</span> este stocat în <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Setează calea către fișierul jurnal <span class="hl">"RALog.txt"</span> al Duckstation<br><br><span class="ttdesc">Cu setările de instalare implicite, <span class="hl">"RALog.txt"</span> este salvat în <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Setează calea către fișierul jurnal <span class="hl">"log.txt"</span> al PPSSPP<br><br><span class="ttdesc">Folosind setările implicite de instalare, <span class="hl">"log.txt"</span> este stocat în <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Setează individual culoarea elementelor de text din notificare",
        unlockmsgfontcolor: "Setează culoarea primului element de text",
        titlefontcolor: "Setează culoarea celui de-al doilea element de text",
        descfontcolor: "Setează culoarea celui de-al treilea element de text",
        exportachdata: `Exportă datele realizărilor într-un fișier JSON atunci când o realizare este deblocat<br><br><span class="ttdesc">Când este activat, <span class="ttcode">achdata.json</span> va fi exportat în:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Ajustează spațierea verticală dintre elementele de text din notificare",
        ssmode: `Setați dacă în capturile de ecran să fie capturat întregul ecran sau fereastra jocului curent<span style="color: red;">*</span><br><br><span class="ttdesc">Dacă <span class="hl">fișierul executabil</span> al jocului curent nu poate fi localizat (<i>fie prin <span class="hl">urmărirea automată a proceselor</span>, fie atunci când este adăugat ca intrare în <span class="hl">Jocuri cu eliberare automată</span></i>), această opțiune va fi implicit setată pe modul „Ecran”</span>`,
        replaynotify: "Repetă ultima notificare de realizare",
        replaynotifyshortcut: "Repetă ultima notificare de realizare folosind scurtătura de tastatură specificată",
        replaynotifyempty: `<br><br><span class="ttdesc">Coada de repetare este goală. Deblochează o realizare pentru a repeta o notificare</span>`,
        customtrigger: "Declanșează o tastă/combo simulată la deblocarea unui achievement. Poate fi folosit pentru a activa scurtături de tastatură înregistrate în aplicații externe",
        customtriggershortcut: `Declanșează tasta/combo specificată la deblocarea unui achievement<br><br><span class="ttdesc">Acceptă între 1 și 3 taste per scurtătură. Pentru apăsări/combo-uri cu mai puțin de 3 taste, apasă tastele dorite și așteaptă până expiră temporizatorul (5s)</span>`,
        customtriggerdelay: "Întârzie tasta/combo specificată a Declanșatorului Personalizat",
        customtriggerusedisplaytime: `Întârzie tasta/combo specificată a Declanșatorului Personalizat pe baza valorii Timpului de Afișare pentru tipul curent de notificare`,
        trophymode: "Înlocuiește tipurile de notificare Principal/Rar/100% cu Bronze/Argint/Aur/Platină",
        lognum: `Numărul de fișiere de jurnal anterioare stocate înainte de ștergere. Un nou fișier de jurnal va fi generat la fiecare lansare a aplicației<br><br><span class="ttdesc">Când este setat la 0, toate fișierele de jurnal anterioare vor fi șterse la ieșire</span>`, 
        detectedappid: `Folosește <span class="hl">AppID</span>-ul jocului detectat în prezent`,
        listmode: `Setează comportamentul pentru <span class="hl">Lista de Excludere</span>/<span class="hl">Lista de Incluziune</span><br><br><span class="ttdesc">• <span class="hl">Excludere</span>: Ignoră doar jocurile specificate în listă<br>• <span class="hl">Incluziune</span>: Ignoră toate jocurile, cu excepția celor specificate în listă</span>`,
        notifymax: `Setează numărul maxim de notificări afișate simultan pe ecran<br><br><span class="ttdesc">Creșterea numărului de notificări simultane necesită mai multe resurse și poate duce la performanță redusă</span>`,
        notifyspace: "Setează distanța dintre notificările afișate simultan pe ecran",
        audiocooldown: `Setează timpul de așteptare înainte ca notificările următoare să poată reda un nou sunet<br><br><span class="ttdesc">Audio nu va fi afectat dacă Notificări Maxime este setat la 1</span>`,
        rauseemudir: "Salvează capturile de ecran/imaginile de notificare deblocate prin RetroAchievements într-un subfolder pentru emulatorul curent, în directorul specificat pentru calea capturilor de ecran/imaginilor",
        ssext: "Setează formatul fișierului pentru capturile de ecran generate prin opțiunea Captură de ecran cu suprapunere de notificare",
        notify1line: `Limitează numărul de linii de text afișate în toate notificările la 1<br><br><span class="ttdesc">Textele care nu încap pe o singură linie vor fi trunchiate cu "..."</span>`,
        copytheme: "Copiază tema selectată într-un alt tip de notificare",
        ssaddtosteam: "Adaugă automat media generată la Înregistrările și Capturile de ecran ale jocului curent în Steam",
        createnewpreset: "Creează un nou predefinit de notificare folosind un șablon gol pentru designuri/animatii personalizate"
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
                `Dacă Steam afișează în continuare un joc ca <i>În joc</i> după ce fereastra jocului a fost închisă, încercați să adăugați o nouă intrare la <span class="hl">Jocuri cu eliberare automată</span>`,
                `Adăugați <span class="hl">AppID</span>-ul unui joc specific împreună cu <span class="hl">fișierul executabil al jocului</span> așteptat sau <span class="hl">eliminați</span> o intrare existentă`,
                `Intrările noi pot fi adăugate și făcând <i>clic dreapta</i> pe <span class="hl">pictograma din zona de notificare</span> > <span class="hl">Eliberare automată a jocului</span> odată ce un joc a fost detectat`,
                `<span class="hl help" id="appidhelp"><u>Cum găsesc AppID-ul unui joc Steam?</u></span>`
            ],
            linknew: "Intrare nouă",
            linknewsub: [
                `Adăugați <span class="hl">AppID</span>-ul unui joc nou împreună cu <span class="hl">fișierul executabil al jocului</span> așteptat`,
                `Odată adăugate, intrările pot fi <span class="hl">eliminate</span> din meniul anterior <span class="hl">Jocuri cu eliberare automată</span>`
            ],
            linkedit: "Editează intrarea",
            linkeditsub: [
                `Editați <span class="hl">AppID</span>-ul unui joc existent împreună cu <span class="hl">fișierul executabil al jocului</span> așteptat`,
                `Odată adăugate, intrările pot fi <span class="hl">eliminate</span> din meniul anterior <span class="hl">Jocuri cu eliberare automată</span>`
            ],
            link: "Adaugă"
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
            ],
            exclusionedit: "Editează excluderea",
            exclusioneditsub: [
                `Editează <span class="hl">AppID</span>-ul existent din <span class="hl">Lista de excluderi</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Adaugă <span class="hl">AppID</span>-ul oricărui joc Steam în <span class="hl">Lista de Incluziune</span>`,
                `Steam Achievement Notifier va încerca să urmărească datele de realizări doar pentru jocurile care au un <span class="hl">AppID</span> adăugat în <span class="hl">Lista de Incluziune</span>`,
                `<span class="hl help" id="appidhelp"><u>Cum pot găsi AppID-ul unui joc Steam?</u></span>`
            ],
            inclusionnew: "Incluziune Nouă",
            inclusionnewsub: [
                `Introdu <span class="hl">AppID</span>-ul care va fi adăugat în <span class="hl">Lista de Incluziune</span>`
            ],
            inclusionedit: "Editează Incluziunea",
            inclusioneditsub: [
                `Editează <span class="hl">AppID</span>-ul existent în <span class="hl">Lista de Incluziune</span>`
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
            percentbadgeimgbronze: "Raritate: > $semirarity",
            sspercentbadgeimgbronze: "Raritate: > $semirarity",
            percentbadgeimgsilver: "Raritate: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Raritate: < $semirarity & > $rarity",
            percentbadgeimggold: "Raritate: < $rarity",
            sspercentbadgeimggold: "Raritate: < $rarity",
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
            themeswitchedit: "Editează comutarea automată",
            themeswitcheditsub: [
                `Editează monitorul dorit pentru a fi folosit ca <span class="hl">Sursa capturilor de ecran</span> pentru <span class="hl">AppID</span>-ul acestui joc`,
                `Schimbă tema la care se comută pentru fiecare tip de notificare când este detectat <span class="hl">AppID</span>-ul acestui joc`
            ],
            themes: "Teme",
            src: "Sursă de Captură de Ecran",
            themedeleted: "Tema șters"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Se pare că încerci să activezi opțiunea <span class="hl">${opt}</span>, dar această opțiune nu poate fi activată fără a instala mai întâi pachetul <code class="dialogcode">${dep}</code>`,
    `Te rog să rulezi <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> pentru a instala această dependență`
]