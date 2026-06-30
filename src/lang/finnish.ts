export const translations = {
    global: {
        main: "Pää",
        semi: "Puoli",
        rare: "Harvinainen",
        plat: "100%",
        trophymain: "Pronssi",
        trophysemi: "Hopea",
        trophyrare: "Kulta",
        trophyplat: "Platina",
        test: "Testaa ilmoituksia",
        topleft: "Ylävasen",
        topcenter: "Yläkeski",
        topright: "Yläoikea",
        bottomleft: "Alavasen",
        bottomcenter: "Alakeski",
        bottomright: "Alaoikea",
        ok: "OK",
        preview: "Esikatselu",
        save: "Tallenna",
        back: "Takaisin",
        edit: "Muokkaa",
        lockedby: "Lukittu käyttäjän $lock toimesta",
        settings: "Asetukset",
        appversion: "Sovellusversio",
        image: "Kuva",
        audio: "Ääni",
        folder: "Kansio",
        font: "Fontti",
        select: "Valitse",
        gametitle: "Pelin nimi",
        congrats: "Onnittelut!",
        achievementunlocked: "Saavutus avattu",
        gamecomplete: "100% Valmis",
        achievementdesc: "Klikkasi Testi-ilmoituksen näyttöpainiketta",
        gamecompletedesc: "Olet avannut kaikki saavutukset!",
        defaultcustomfont: "Oletus (Ei valittua fonttia)",
        defaultsoundfile: "Oletus (Ei valittua äänitiedostoa)",
        defaultsounddir: "Oletus (Ei valittua kansioita)",
        nowtracking: "Seuraa saavutuksia nyt kohteelle:",
        nopreview: "Esikatselua ei ole saatavilla käyttöjärjestelmälle",
        options: "Asetukset",
        resetwindow: "Nollaa ikkuna",
        show: "Näytä",
        exit: "Poistu",
        donotshowagain: "Älä näytä tätä valintaikkunaa uudelleen",
        releasegame: "Vapauta peli",
        releasegamesub: [
            `Käynnistä taustalla oleva Worker-prosessi uudelleen ja vapauta nykyinen peli seurannasta`,
            `Kokeile tätä vaihtoehtoa, jos olet äskettäin sulkenut pelin, mutta Steam näyttää sen edelleen käynnissä olevana, tai jos Steam Achievement Notifier näyttää edelleen seuraavan jo suljettua peliä`
        ],
        noupdateavailable: "Ei päivityksiä saatavilla",
        latestversion: "Uusin versio asennettu",
        missingdeps: "Puuttuva riippuvuus",
        restartapp: "Käynnistä sovellus uudelleen",
        restartappsub: [
            `Jos asiat eivät toimi oikein, käytä tätä vaihtoehtoa sulkeaksesi ja avataksesi sovelluksen uudelleen`,
            `Jos ongelma jatkuu sovelluksen uudelleenkäynnistyksen jälkeen, harkitse sen raportoimista käyttämällä sisäänrakennettuja linkkejä aloitusnäytössä`
        ],
        suspend: "Keskeytä",
        resume: "Jatka",
        new: "Uusi...",
        nodata: "Ei tietoja",
        webhookunlockmsg: "$user avasi saavutuksen",
        webhookunlockmsgplat: "$user avasi kaikki saavutukset",
        webhookingame: "pelissä $gamename",
        notconnected: "Ei yhdistetty",
        raloghelp: "Peliäni ei havaita",
        raenablelog: `Emulaattorin lokitiedostot`,
        raenablelogsub: [
            `Jotta pääsy pelin sisäisiin tapahtumiin (kuten nykyinen pelitila, saavutusten avaamistiedot jne.) olisi mahdollista, ulkoiseen <span class="hl">lokitiedostoon</span> <u>kirjaaminen on oltava käytössä</u> kaikissa valituissa emulaattoreissa.<br><br>Kaikkien valittujen emulaattoreiden <u>on käytettävä tätä <span class="hl">lokitiedostoa</span></u> arvona <span class="hl">Lokitiedoston polku</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Asetukset > Lokitus</span> on määritettävä seuraavilla asetuksilla:
                    <br>
                    <ul>
                        <li><span class="hllb">Lokituksen yksityiskohtaisuus</span>: <span class="hlgreen">PÄÄLLÄ</span></li>
                        <li><span class="hllb">Frontend-lokitaso</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Kirjaa lokiin</span>: <span class="hlgreen">PÄÄLLÄ</span></li>
                        <li><span class="hllb">Aikaleimat lokitiedostoissa</span>: <span class="hlred">POIS PÄÄLTÄ</span></li>
                    </ul>
                    <br>
                    Oletusasennuksen mukaan <span class="hl">"retroarch.log"</span> tallennetaan sijaintiin:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Näytä > Näytä lokiasetukset</span> on määritettävä seuraavilla asetuksilla:
                    <br>
                    <ul>
                        <li><span class="hllb">Yksityiskohtaisuus</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Lokin ulostulot</span> > <span class="hlgreen">Kirjoita tiedostoon</span></li>
                        <li><span class="hllb">Lokityypit</span> > <span class="hlgreen">Saavutukset (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Oletusasennuksen mukaan <span class="hl">"dolphin.log"</span> tallennetaan johonkin seuraavista sijainneista:
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
                    <span class="hl">PCSX2 > Työkalut > Ota tiedostolokitus käyttöön</span> täytyy olla käytössä
                    <br>
                    <br>
                    Oletusasennuksilla <span class="hl">"emulog.txt"</span> tallennetaan seuraavaan paikkaan:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> on <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>ladattava</u></span> ja siirrettävä <span class="hl">Duckstationin asennuskansioon</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Asetukset > Saavutukset > RAIntegration (vain kehittäjille)</span> on oltava käytössä
                    <br>
                    <br>
                    Oletusasetuksilla asennettaessa <span class="hl">"RALog.txt"</span> tallennetaan sijaintiin:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> täytyy olla otettuna käyttöön ja määritetty seuraavilla asetuksilla:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Oletusasennoilla asennettuna tiedosto <span class="hl">"log.txt"</span> tallennetaan sijaintiin:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta-versio ei ole tuettu",
        betaunsupportedsub: [
            "Uusi versio Steam Achievement Notifierista on julkaistu!",
            `<u>Tätä Beta-versiota ei enää tueta</u>. Lataa ja asenna uusin virallinen versio Githubista käyttämällä alla olevaa <span class="hl">Julkaisut</span> painiketta.`,
            "Kiitos testauksesta! 💜"
        ],
        betaghreleases: "Julkaisut",
        checkapplog: "Tarkista sovelluksen loki lisätietoja varten.",
        workercrash: "Worker kaatui!",
        workercrashsub: "Käynnistä Worker uudelleen ja yritä pelin seurantaa uudelleen napsauttamalla tästä"
    },
    app: {
        content: {
            game: "Ei havaittuja pelejä",
            customise: "Mukauta",
            test: "Näytä testi-ilmoitus"
        }
    },
    settings: {
        language: {
            title: "Kieli",
            content: {
                steamlang: "Käännä saavutukset Steamin kielelle",
                maxsteamlangretries: "Maksimi määrä käännösyrityksiä"
            }
        },
        os: {
            title: "Käyttöjärjestelmä",
            content: {
                desktop: "Luo työpöydän pikakuvake",
                startwin: "Käynnistä kirjautumisen yhteydessä",
                startmin: "Käynnistä pienennettynä",
                nohwa: "Poista laitteistokiihdytys käytöstä",
                litemode: "Lite-tila"
            }
        },
        notifications: {
            title: "Ilmoitukset",
            content: {
                rarity: "Harvinaisuusprosentti",
                semirarity: "Hopeaprosentti",
                rareonly: "Vain harvinaiset",
                all: "Kaikki",
                off: "Pois päältä",
                showpercent: "Näytä prosenttiosuus",
                soundonly: "Vain ääni",
                nowtracking: "Näytä seurantan ilmoitus",
                nowtrackingscale: "Seurantamittakaava",
                nowtrackingpos: "Seurannan Sijainti",
                shortcuts: "Ilmoituspikakuvakkeet",
                noiconcache: "Poista kuvakkeiden välimuisti käytöstä",
                webhooks: "Lähetä Discord-palvelimelle",
                webhooktypes: "Webhook-tyypit",
                webhookurl: `Webhook-URL`,
                webhookcaution: `Ottamalla tämän asetuksen käyttöön ja antamalla kelvollisen Discord-webhook-linkin, hyväksyt, että ymmärrät <u>kaiken nykyisen Steam-käyttäjän saavutuksiin ja peleihin liittyvän tiedon</u> julkaistavan määritettyyn Discord-palvelimeen annetun webhook-linkin kautta.<br><br>Jos et halua, että Steam Achievement Notifier julkaisee näitä tietoja puolestasi, poista tämä asetus käytöstä.`,
                webhooklaststatus: "Viimeinen Tila",
                webhookspoilers: `Lisää spoiler-tunniste`,
                webhookappid: `Näytä AppID`,
                replaynotify: "Toistoviesti",
                replaynotifyshortcut: "Toistoviestin pikanäppäin",
                customtrigger: "Mukautettu Laukaisin",
                customtriggershortcut: "Laukaisimen Pikanäppäin",
                customtriggerdelay: "Laukaisimen Viive",
                customtriggerusedisplaytime: "Käytä Näyttöaikaa",
                trophymode: "Trophymoodi",
                notifymax: "Ilmoitusten enimmäismäärä", 
                notifyspace: "Ilmoitusten väli",
                notify1line: "Rajoita teksti yhteen riviin"
            }
        },
        games: {
            title: "Pelit",
            content: {
                linkedgames: "Linkitetyt pelit",
                autoreleasegames: "Automaattisesti vapautettavat pelit",
                themeswitch: "Vaihda teemoja automaattisesti",
                exclusionlist: "Poissulkemislista",
                inclusionlist: "Sisällysluettelo",
                listmode: "Luettelotila",
                exclusion: "Poissulkeminen",
                inclusion: "Sisällyttäminen"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Ota Steam-ruutukaappaus",
                screenshots: "Lisämedia",
                off: "Pois päältä",
                ssonly: "Vain kuvakaappaus",
                overlay: "Ruutukaappaus ilmoituksen päällekkäisyydellä",
                monitors: "Ruutukaappauksen lähde",
                hdrmode: "HDR-tila",
                ovpos: "Päällekkäisyyden sijainti",
                ovmatch: "Vastaava mukautuksen sijainti",
                ovx: "Vaakasuuntainen siirto",
                ovy: "Pystysuuntainen siirto",                
                ovpath: "Ruutukaappauksen polku",
                ssdelay: "Ruutukaappauksen viive",
                notifyimg: "Ilmoituskuva",
                imgpath: "Kuvan polku",
                ssenabled: "Ota käyttöön",
                ssmode: "Näyttökuvatila",
                screen: "Näyttö",
                window: "Ikkuna",
                rauseemudir: "Tallenna emulaattorin alikansioon",
                ssext: "Kuvakaappauksen muoto",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Lisää Steamiin"
            }
        },
        streaming: {
            title: "Suoratoisto",
            content: {
                extwin: "Virtailmoitukset",
                extwinframerate: "Kuvataajuus",
                extwinshow: "Näytä ikkuna",
                audiosrc: "Äänilähde",
                notify: "Ilmoitus",
                app: "Sovellus",
                off: "Mykistetty",
                statwin: "Saavutustilastojen ikkuna",
                statwinaot: "Aina päällimmäisenä",
                noachievements: "Ei saavutuksia näytettäväksi",
                startgame: "Aloita peli näyttääksesi saavutukset!",
                max: "Maksimi",
                custom: "Mukautettu...",
                statwinshortcut: "Pikapainike Overlaylle",
                gametimerwin: "Pelin valmistumisajastin",
                gametimerwinshortcut: "Ajastimen pikanäppäin",
                gametimerwinaot: "Aina päällimmäisenä",
                resetgametimer: "Nollaa ajastin",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Oletko varma?</span>
                        <span>Tämä nollaa nykyisen pelin valmistumisajastimen takaisin aikaan 00:00:00.000.</span>
                        <span class="noundo">🛑 Tätä ei voi kumota!</span>
                    </div>
                `,
                resetgametimerfailed: "Ajastimen nollaaminen epäonnistui.",
                resetgametimercomplete: "AppID $appid on jo suoritettu.",
                extwinnotify: "Näytä ilmoitus näytöllä"
            }
        },
        accessibility: {
            title: "Saatavuus",
            content: {
                noanim: "Poista sovellusikkunan animaatiot käytöstä",
                noupdatedialog: "Poista päivitysikkuna käytöstä",
                nvda: "Ota NVDA-tuki käyttöön",
                tooltips: "Näytä työkaluvihjeet",
                showsystrayopts: "Näytä järjestelmäpalkin asetukset",
                releaseshortcut: "Pelin vapautuksen pikanäppäin",
                noshortcuts: "Poista pikanäppäimet käytöstä"
            }
        },
        advanced: {
            title: "Edistynyt",
            content: {
                pollrate: "Kyselytaajuus",
                initdelay: "Seurannan viive",
                releasedelay: "Julkaisuviive",
                maxretries: "Maksimi Uudelleenyritysmäärä",
                debug: "Vianetsintäpaneeli",
                userust: "Vaihtoehtoinen käsittelytila",
                notifydebug: "Näytä Ilmoitus Vianmäärityksestä",
                workerdebug: "Näytä Workerin DevTools",
                exportachdata: "Vie saavutustiedot",
                lognum: "Aiemmat lokitiedostot", 
                audiocooldown: "Äänien viive",
                usecustomfiles: "Käytä Mukautettuja Sovellustiedostoja",
                showcustomfiles: "Näytä Mukautetut Sovellustiedostot",
                appdatadir: "Näytä AppData-kansio",
                backup: "Varmuuskopio",
                backuppath: "Varmuuskopion sijainti",
                backupsub: [
                    "Tee varmuuskopio sovelluksen AppData-kansion sisällöstä valittuun sijaintiin",
                    "Tämä varmuuskopio toimii palautuspisteenä sovelluksen nykyiselle tilalle",
                    `Palauta aiempi varmuuskopio valitsemalla <span class="hl">Asetukset</span> > <span class="hl">Lisäasetukset</span> > <span class="hl">Palauta</span>`
                ],
                backupfailed: "Varmuuskopion luonti epäonnistui.",
                restore: "Palauta",
                restoresub: [
                    "Palauta sovelluksen AppData-kansion sisältö aiemmasta varmuuskopiosta",
                    `Valitse <span class="hl">.sanbak</span> varmuuskopiotiedosto palautettavaksi. Tämä tiedosto säilyy palautuksen jälkeen`,
                    "❗ Vahvistamisen jälkeen sovellus käynnistyy uudelleen palauttaakseen valitun varmuuskopiotiedoston"
                ],
                restorefailed: "Varmuuskopion palautus epäonnistui.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Vapautuksen odotusaika"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emulaattorit",
                rauser: "Käyttäjätunnus",
                rakey: "API-avain",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Lokitiedoston polku",
                rapercenttype: "Prosenttityyppi",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Syötä lokitiedoston polku",
                logfile: "Lokitiedosto",
                status: "Tila",
                game: "Peli",
                lastachievement: "Viimeisen saavutuksen ID",
                wait: "Odottaminen emulaattoria",
                idle: "Odottaminen pelitapahtumaa",
                start: "Pelin aloitus",
                stop: "Pelin lopetus",
                achievement: "Saavutus avattu"
            }
        },
        misc: {
            title: "Sekalaiset",
            content: {
                colorprofile: "Väritila",
                checkforupdates: "Tarkista Päivitykset",
                log: "Sovelluslokimerkintä",
                reset: "Nollaa sovellus"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Esiasetus",
            content: {
                preset: "Ilmoituksen Esiasetus",
                iconanim: "Harvinainen Ikonianimaatio",
                alldetails: "Näytä Kaikki Tiedot",
                usepercent: "Käytä prosenttia",
                displaytime: "Näyttöaika",
                scale: "Mittakaava",
                customtext: "Mukautettu Teksti",
                usegametitle: "Käytä Pelin Otsikkoa",
                customfont: "Mukautettu Fontti",
                platcustomtext: "Mukautettu 100 % -teksti"
            }
        },
        sound: {
            title: "Ääni",
            content: {
                soundmode: "Äänitila",
                file: "Tiedosto",
                folder: "Satunnainen",
                soundfile: "Äänitiedosto",
                sounddir: "Äänikansio",
                volume: "Äänenvoimakkuus"
            }
        },
        style: {
            title: "Tyyli",
            content: {
                bgstyle: "Taustatyyli",
                solid: "Yhtenäinen",
                gradient: "Gradientti",
                img: "Kuva",
                gameart: "Peliteos",
                gradientangle: "Gradientin Kulma",
                bgimg: "Taustakuva",
                bgachicon: "Käytä Saavutuksen Ikonia",
                bgimgbrightness: "Kirkkaus",
                brightness: "Kirkkaus",
                blur: "Sumentaa",
                roundness: "Pyöristys",
                fontsize: "Fontin Koko",
                usecustomfontsizes: "Käytä mukautettuja fonttikokoja",
                unlockmsgfontsize: "Lukituksen avausviesti",
                titlefontsize: "Otsikko",
                descfontsize: "Kuvaus",
                textvspace: "Tekstin välistys",
                opacity: "Läpinäkyvyys",
                bgonly: "Vain Tausta",
                glow: "Hehku",
                glowcolor: "Väri",
                glowsize: "Koko",
                glowx: "Vaakasiirto",
                glowy: "Pystysiirto",
                glowopacity: "Läpinäkyvyys",
                glowanim: "Animaatio",
                glowspeed: "Nopeus",
                glowrarity: "Käytä harvinaisuutta",
                glowcolorbronze: "Harvinaisuus: > $semirarity",
                glowcolorsilver: "Harvinaisuus: < $semirarity & > $rarity",
                glowcolorgold: "Harvinaisuus: < $rarity",
                off: "Ei mitään",
                pulse: "Pulssi",
                double: "Kaksois",
                focus: "Tarkennus",
                orbit: "Kierrä",
                fluorescent: "Fluoresoiva",
                rainbow: "Sateenkaari",
                mask: "Maski",
                maskimg: "Maskin kuva",
                useoutline: "Ääriviiva",
                outline: "Ääriviivan tyyppi",
                outlinecolor: "Ääriviivan väri",
                outlinewidth: "Ääriviivan leveys",
                dashed: "Katkoviiva",
                dotted: "Pisteviiva"
            }
        },
        colors: {
            title: "Värit",
            content: {
                primarycolor: "Ensisijainen Väri",
                secondarycolor: "Toissijainen Väri",
                tertiarycolor: "Kolmanneksi Väri",
                iconshadowcolor: "Harvinaisen kuvakkeen varjon väri",
                iconanimcolor: "Harvinaisen kuvakkeen animaation väri",
                fontcolor: "Fontin Väri",
                usecustomfontcolors: "Käytä mukautettuja fonttivärejä",
                unlockmsgfontcolor: "Väri 1",
                titlefontcolor: "Väri 2",
                descfontcolor: "Väri 3",
                fontoutline: "Fontin Reunaviiva",
                fontoutlinecolor: "Reunaviivan Väri",
                fontoutlinescale: "Fontin ääriviivan skaala",
                fontshadow: "Fontin Varjo",
                fontshadowcolor: "Varjon Väri",
                fontshadowscale: "Fontin varjon skaala",
                fontshadowx: "Vaakasuora Siirtymä",
                fontshadowy: "Pystysuora Siirtymä"
            }
        },
        icons: {
            title: "Kuvakkeet",
            content: {
                iconscale: "Kuvakkeen skaalaus",
                iconroundness: "Kuvakkeen Pyöristys",
                showiconborder: "Näytä kuvakeraja",
                iconborderimg: "Kuvakeraja",
                iconborderpos: "Reunan sijainti",
                iconborderscale: "Reunan koko",
                iconborderx: "Vaakasiirto",
                iconbordery: "Pystysiirto",
                iconborderrarity: "Käytä harvinaisuutta",
                iconborderimgbronze: "Harvinaisuus: > $semirarity",
                iconborderimgsilver: "Harvinaisuus: < $semirarity & > $rarity",
                front: "Edessä",
                back: "Takana",
                plat: "100% Logo",
                usegameicon: "Käytä Peli-ikonia",
                gameicontype: "Pelikuvaikoni",
                usecustomimgicon: "Käytä mukautettua ikonia",
                customimgicon: "Mukautettu ikoni",
                icon: "Ikoni",
                logo: "Logo",
                logoscale: "Logon skaalaus",
                decoration: "Koristelu",
                decorationscale: "Koriste-elementin skaalaus",
                showdecoration: "Näytä Koristelu",
                rarity: "Harvinaisuus",
                showhiddenicon: "Näytä piilotettu kuvake",
                hiddenicon: "Piilotettu kuvake",
                replacelogo: "Korvaa logo"
            }
        },
        position: {
            title: "Sijainti",
            content: {
                pos: "Näytön Sijainti",
                usecustompos: "Käytä Mukautettua Sijaintia",
                setcustompos: "Aseta",
                copycustompos: "Käytä Kaikkiin",
                resetcustompos: "Palauta"
            }
        },
        theme: {
            title: "Teema",
            content: {
                updatetheme: "Päivitä Teema",
                savetheme: "Tallenna Teema",
                sub: [
                    `Tallennetut <span class="hl">Käyttäjän Teemat</span> voidaan valita <span class="hl">Valitse Teema</span> -valikosta Aloitusnäytössä.`,
                    `Varmista, että <span class="hl">Teeman Nimi</span> on <u>yksilöllinen</u> - nimi, joka vastaa olemassa olevaa teemaa, <u>korvaa aiemman</u>!`
                ],
                placeholder: "Teeman Nimi",
                theme: "Teema",
                importtheme: "Tuo teema",
                import: "Tuo",
                importsub: [
                    `Tuo käyttäjän luoma <span class="hl">teematiedosto</span>`,
                    `<span class="hl">Tuodut teemat</span> ladataan automaattisesti onnistuneen tuonnin jälkeen, ja ne voidaan valita <span class="hl">Teeman valinta</span> -valikosta`,
                ],
                importidle: `Valitse <span class="hl">teematiedosto</span> tuodaksesi`,
                importcopied: `Teema kopioitu onnistuneesti`,
                importrenamed: `Teema nimetty uudelleen onnistuneesti`,
                importextracted: `Teema purettu onnistuneesti`,
                importrewriting: `Kirjoitetaan teematiedoston polkuja uudelleen...`,
                importconverting: `Muunnetaan teemaa...`,
                importcreating: `Luodaan teemaa...`,
                importdone: `Teema tuotu onnistuneesti`,
                importfailed: `Virhe valitun teematiedoston tuonnissa!`,
                exporttheme: "Vie teema",
                export: "Vie",
                exporterrortitle: "Vienti virhe",
                exporterrorsub: [
                    "Virhe tapahtui yritettäessä viedä valittua teemaa",
                    `Yritä tallentaa nykyinen teema (<i>käyttämällä <span class="hl">Tallenna teema</span></i>) ja yritä viedä uudelleen`,
                    `Jos ongelma jatkuu, kopioi alla oleva virhe ja raportoi se linkkinäppäimillä <span class="hl">Aloitusnäytöllä</span>`
                ],
                synctheme: "Synkronoi teema",
                syncedwith: "Synkronoitu kanssa",
                themeselect: "Valittu teema",
                copytheme: "Kopioi teema",
                copythemesub: "Valitse ilmoitustyyppi(t), joihin valittu teema kopioidaan"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Tässä mitä on tapahtunut sovelluksen käynnistymisen jälkeen klo",
            copylog: "Kopioi Lokin Sisältö"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Oletko varma?</span>
                    <span>Kaikki aiemmin määritetyt tiedot, <u>mukaan lukien Mukautukset</u>, palautetaan oletusarvoihin.</span>
                    <span>🛑 Tätä ei voi peruuttaa!</span>
                </div>
            `,
            reset: "Palauta"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier törmäsi ongelmaan ja on suljettava.",
            details: "Tässä virheen tiedot:",
            sub: "Napsauta alla olevia painikkeita raportoidaksesi tämän ongelman haluamallasi alustalla.",
            report: "Raportti",
            log: "Sovelluksen Loke",
            exit: "Poistu"
        }
    },    
    tooltips: {
        game: "Se peli, jota saavutuksia tällä hetkellä seurataan",
        usertheme: "Valitse aiemmin tallennettu teema",
        customise: "Muokkaa saavutusilmoituksia",
        test: "Näytä testi-ilmoitus mukautuksineen",
        kofi: "Lahjoita Ko-Fi:ssa!",
        discord: "Liity Discordiin!",
        github: "Ilmoita ongelmasta",
        lang: "Valitse sovelluksen käyttöliittymän kieli",
        steamlang: `Yritä ladata käännöksiä Steamin sovellustiedostoista näyttääksesi saavutustiedot käyttäjän valitsemalla kielellä Steam-asiakasohjelmassa<br><br><span class="ttdesc">Tämä asetus yrittää löytää käännöksiä Steam-sovelluksen tiedoissa tallennetusta JSON-tiedostosta. Jos nykyiselle saavutukselle ei löydy käännöstä, näytetään sen sijaan Steamworksistä haetut saavutustiedot.</span>`,
        maxsteamlangretries: `Nykyisen saavutuksen käännösten etsimisyritysten määrä (100 ms välein)<br><br><span class="ttdesc">Steam tallentaa tällä hetkellä vain pienen määrän saavutustietoja jokaisen pelin yhteydessä olevaan JSON-tiedostoon. Kaikki saavutukset, jotka eivät ole tässä tiedostossa, lisätään, kun saavutus on avattu.<br><br>Koska uusien tietojen lisääminen voi kestää, tämän arvon nostaminen lisää todennäköisyyttä, että käännöstiedot löydetään, mutta se voi myös viivästyttää näytöllä näkyvää ilmoitusta asetuksen mukaisella ajalla.<br><br>Jos saavutukselle ei löydy kelvollisia käännöstietoja, käännös palaa Steamworksissä määritettyyn kieleen.</span>`,
        desktop: "Vaihda työpöydän pikakuvaketta sovelluksen käynnistämiseksi",
        startwin: "Käynnistä Steam Achievement Notifier automaattisesti kirjautumisen jälkeen",
        startmin: "Piilota sovelluksen käyttöliittymäikkuna käynnistyksen jälkeen, kunnes se avataan järjestelmälokista",
        nohwa: `Poista käytöstä laitteistokiihdytys, mikä voi parantaa suorituskykyä järjestelmissä, joissa on vähemmän resursseja tai järjestelmissä ilman omistettua GPU:ta<br><br><span class="ttdesc">Sovellus käynnistyy uudelleen tämän asetuksen käyttöönoton/poistamisen jälkeen</span>`,
        litemode: "Poista käytöstä kaikki vuorovaikutteiset käyttöliittymäelementit ja tarjoa vain rajoitettu sovellustoiminnallisuus järjestelmälokikuvakkeen kautta. Saattaa parantaa sovelluksen käyttämien resurssien käyttöä",
        rarity: `Prosentti, jolla harvinaisten saavutusten ilmoitukset laukeavat.<br><br>Kaikki saavutukset, joiden avausprosentti on tämän arvon yläpuolella, näytetään pääilmoituksena<br><br><span class="ttdesc">Jos <span class="hl">Trophymoodi</span> on käytössä, kaikki saavutukset, joiden avausprosentti ylittää tämän arvon, näytetään sen sijaan hopeailmoituksena</span>`,
        semirarity: `"Hopea"-ilmoituselementit näytetään, kun tämä prosentti ylittyy (esim. <span class="hl">Harvinaisuusmerkit</span>, <span class="hl">Koristeet</span> jne.).<br><br>Kaikki saavutukset, joiden avausprosentti on tämän arvon alapuolella (tai yhtä suuri), ja suurempi kuin <span class="hl">Harvinaisuusprosentti</span>, näyttävät ilmoituselementit, jotka on määritetty "Hopea"-harvinaisuudelle.<br><br>Kaikki saavutukset, joiden avausprosentti on tämän arvon yläpuolella, näyttävät "Pronssi"-harvinaisuudelle määritetyt ilmoituselementit<br><br><span class="ttdesc">Jos <span class="hl">Trophymoodi</span> on käytössä, kaikki saavutukset, joiden avausprosentti ylittää tämän arvon, näytetään sen sijaan pronssi-ilmoituksena</span>`,
        showpercent: "Näytä saavutuksen lukitusprosentti ilmoituksessa valituille tyypeille",
        soundonly: "Poista ilmoitukset käytöstä ja toista vain äänet, jotka on määritetty Mukauttajassa",
        extwin: "Luo ikkuna, joka toistaa kaikki näytöllä tällä hetkellä näkyvät ilmoitukset. Tämä ikkuna voidaan sitten lisätä Ikkunan kaappauksen lähteeksi suoratoisto-ohjelmissa, kuten OBS:ssä",
        extwinframerate: "Aseta tavoitekuvataajuus suoratoistoilmoituksille",
        extwinshow: `Vaihda suoratoistoilmoitusten ikkunan näkyvyyttä<br><br><span class="ttdesc">Kun ikkuna on valittuna tehtäväpalkissa, pidä <code class="ttcode">Ctrl</code>-näppäintä alhaalla nähdäksesi ikkunan nykyisen sijainnin</span>`,
        audiosrc: "Valitse äänilähde (tai poista käytöstä), jota sovellus tuottaa",
        nowtracking: "Näytä ilmoitus, joka ilmoittaa, että juoksevan pelin saavutuksia seurataan",
        nowtrackingscale: `Aseta seurantan ilmoituksen koko`,
        nowtrackingpos: `Aseta seuranta-ilmoituksen sijainti`,
        shortcuts: "Lähetä testi-ilmoitus näppäinkomennolla. Pikakuvakkeet voidaan mukauttaa kullekin ilmoitustyypille",
        noiconcache: `Poistaa saavutuskuvakkeiden välimuistin käytöstä pelien käynnistyksen yhteydessä.<br><br><span class="ttdesc">Tämä voi parantaa huomattavasti sovelluksen suorituskykyä pelien käynnistyksen yhteydessä ja ratkaista myös seurantakysymykset peleissä, joissa on suuri määrä saavutuksia. Kuitenkin harvinaisissa tapauksissa kuvakkeiden välimuistin poistaminen käytöstä voi johtaa puuttuviin saavutuskuvakkeisiin ilmoituksissa</span>`,
        steamss: "Ota Steam-ruutukaappaus, kun saavutus avataan",
        screenshots: "Valitse lisämedian tyyppi, joka luodaan ilmoituksen näyttämisen yhteydessä",
        monitors: "Näyttö, joka tallennetaan ruutukaappauksessa",
        hdrmode: `Ota näyttökuvia käyttäen menetelmää, joka on yhteensopiva HDR-näyttöjä käyttävien monitorien kanssa`,
        ovpos: "Ilmoituksen päällekkäisyyden sijainti ruutukaappauksessa",
        ovmatch: "Vastaava näytön sijainti Mukauttajassa tälle ilmoitustyypille",
        ovpath: "Polku, johon tämän asetuksen avulla luodut ruutukaappaukset tallennetaan",
        ssdelay: "Viive ilmoituksen näyttämisestä ruutukaappauksen ottamiseen",
        sspreview: "Näytä esikatselu, miten ruutukaappaus näyttää tallennettaessa",
        noanim: "Poista sovellusikkunan kaikki animaatiot ja siirtymäefektit käytöstä",
        noupdatedialog: `Estä <span class="hl">Päivitys saatavilla</span> -dialogin automaattinen näyttäminen ja fokusoituminen<br><br><span class="ttdesc">Dialogi on edelleen saatavilla klikkaamalla päivityspainiketta, kun se on saatavilla</span>`,
        nvda: "Kopioi saavutustiedot leikepöydälle, kun saavutus avataan, jotta ne voidaan lukea näytönlukijasovelluksella, kuten NVDA",
        tooltips: "Näytä työkaluvihjeet, kun hiiren kohdistin on tiettyjen käyttöliittymäelementtien päällä",
        colorprofile: `Pakota kaikki sovellusikkunat käyttämään valittua väritilaa<br><br><span class="ttdesc">Vaatii sovelluksen uudelleenkäynnistyksen</span>`,
        pollrate: `Aseta päivitysväli saavutustietojen aikana pelattaessa<br><br><span class="ttdesc">Suorituskyky voi lisääntyä/vähentyä arvon tai järjestelmän laitteiston mukaan. Korkeammat arvot johtavat yleensä pienempään järjestelmän kuormitukseen, mutta voivat viivästyttää ilmoituksia</span>`,
        initdelay: `Aseta viive nykyisen <span class="hl">AppID</span>-tunnuksen havaitsemisen ja prosessin/saavutusten seurannan aloittamisen välillä<br><br><span class="ttdesc">Tämän arvon suurentaminen voi estää tilanteita, joissa Steam ei pysty käynnistämään nykyistä peliä (koska sovellus käynnistää Steamworksin ennen kuin peli on käynnistynyt)</span><br><br><span class="ttdesc">Vaihtoehtoisesti tämän arvon suurentamista voidaan myös käyttää ohittamaan esipelin käynnistysprosessien virheellinen havaitseminen</span>`,
        releasedelay: `Määritä, kuinka kauan taustalla toimiva Worker-prosessi odottaa ennen uudelleenkäynnistystä, kun nykyinen peli on vapautettu. Vaikuttaa sekä automaattiseen prosessien seurantaan että Pelien automaattiseen vapautukseen<br><br><span class="ttdesc">Mahdollistaa pidemmän aikavälin, jotta Steamworks voidaan vapauttaa kokonaan sovelluksesta. Tämän arvon kasvattaminen voi estää epätavallista toimintaa, kuten aiemmin suljetun pelin seuraamisen</span>`,
        maxretries: `Määritä enimmäismäärä yrityksiä käynnissä olevan prosessin yhdistämiseksi havaittuun AppID:hen. Vaikuttaa sekä automaattiseen prosessien seurantaan että Pelien automaattiseen vapautukseen<br><br><span class="ttdesc">Yritykset tehdään kerran sekunnissa. Jos käynnissä olevaa prosessia ei yhdistetä nykyiseen AppID:hen tämän yritysmäärän jälkeen, palautetaan virheellinen prosessi. Tällaisissa tapauksissa peli on vapautettava manuaalisesti System Tray > Asetukset > Vapauta peli</span>`,
        debug: "Avaa Vianetsintäpaneeli, joka näyttää yksityiskohtaiset prosessiseurantatiedot",
        userust: "Käytä vaihtoehtoista Rust-pohjaista toimintoa tarkistaaksesi, ovatko seuratut peliprosessit tällä hetkellä käynnissä järjestelmässä. Kun ei ole valittu, oletusarvoinen NodeJS-pohjainen prosessin tarkistus otetaan käyttöön sen sijaan.",
        notifydebug: "Luo DevTools-ikkuna kaikille ilmoituksille. Hyödyllinen vianmääritykseen ja ongelmanratkaisuun ilmoitusongelmien yhteydessä",
        workerdebug: "Luo DevTools-ikkuna Worker-prosessille. Hyödyllinen pelien seurantaongelmien virheenkorjaukseen/vianmääritykseen",
        usecustomfiles: "Mahdollistaa käyttäjän mukautettujen tiedostojen lataamisen ilmoituksiin. Varovaisuutta suositellaan tavallisille käyttäjille",
        showcustomfiles: "Avaa mukautettujen tiedostojen sijainti",
        log: "Avaa sovellusloki-ikkuna, joka näyttää tietoja prosessitoiminnasta, varoituksista ja virheistä",
        reset: "Poistaa kaikki määritystiedot ja käynnistää sovelluksen uudelleen",
        playback: "Keskeytä/jatka ilmoituksen esikatselun animaatiota",
        replay: "Käynnistä ilmoituksen esikatselun animaatio uudelleen",
        preset: "Valitse mukautuksen esiasetus",
        iconanim: "Vaihda harvinaisen saavutuksen kuvakkeen kehys ja animaatio",
        alldetails: "Näytä kaikki ilmoituksessa oletusarvoisesti piilotetut tekstielementit tässä esiasetuksessa",
        usepercent: "Näytä saavutuksen lukitusprosentti XP/S-arvon sijaan",
        displaytime: "Aseta ilmoituksen näyttöaika sekunteina",
        scale: "Kasvata tai pienennä ilmoituksen kokoa",
        customtext: `Aseta mukautettu viesti näytettäväksi ilmoituksessa<br><br><span class="ttdesc">Tämä asetus piilotetaan, kun Customiser > Esiasetus > Ilmoituksen elementit > Avausviesti on poistettu käytöstä</span>`,
        usegametitle: "Näytä nykyisen pelin nimi ilmoituksessa",
        customfont: "Lataa mukautettu fontti ilmoituksessa käytettäväksi",
        soundmode: "Valitse joko yksi äänitiedosto tai satunnaisesti valittu äänitiedosto kansiossa, joka sisältää useita äänitiedostoja, kun ilmoitus tapahtuu",
        soundfile: "Valitse äänitiedosto, joka toistetaan ilmoituksen tapahtuessa",
        sounddir: "Valitse kansio, josta äänitiedosto valitaan satunnaisesti ilmoituksen tapahtuessa",
        volume: "Aseta äänitiedoston toiston äänenvoimakkuus",
        preview: "Esikatsele valittua äänitiedostoa tai kansiossa satunnaisesti valittua äänitiedostoa",
        bgstyle: "Valitse ilmoituksen taustan tyyli",
        gradientangle: "Aseta gradientin kulma",
        bgimg: "Lataa kuvatiedosto ilmoituksen taustaksi",
        bgachicon: "Käytä avatun saavutuksen ikonia ilmoituksen taustana",
        bgimgbrightness: "Aseta kuvan kirkkaus ilmoituksen taustaksi",
        brightness: "Aseta pelitaiteen kirkkaus ilmoituksen taustaksi",
        blur: "Aseta sumennuksen taso, joka lisätään ilmoituksen taustaan",
        roundness: "Aseta ilmoituksen reunojen pyöristys",
        fontsize: "Aseta fontin koko ilmoituksessa",
        opacity: "Aseta ilmoituksen kokonaisläpinäkyvyys",
        bgonly: "Aseta läpinäkyvyys vain ilmoituksen taustalle, pitäen muut elementit täydessä läpinäkyvyydessä",
        glow: "Ota käyttöön hehkuefekti, joka ympäröi ilmoituksen",
        glowcolor: "Aseta hehkuefektin väri",
        glowsize: "Aseta hehkuefektin koko",
        glowx: "Siirrä hehkuvaikutuksen sijaintia vaakasuunnassa",
        glowy: "Siirrä hehkuvaikutuksen sijaintia pystysuunnassa",
        glowopacity: "Aseta hehkuvaikutuksen läpinäkyvyys",
        glowanim: "Valitse valmiiksi määritetty animaatio, joka lisätään hehkuefektiin",
        glowspeed: "Aseta animaation nopeus, joka lisätään hehkuefektiin",
        glowrarity: "Muuta hehkun värin saavutuksen harvinaisuuden perusteella",
        glowcolorbronze: "Hehkun väri, joka näytetään, kun avaamisprosentti on > $semirarity",
        glowcolorsilver: "Hehkun väri, joka näytetään, kun avaamisprosentti on < $semirarity ja > $rarity",
        glowcolorgold: "Hehkun väri, kun avaamisprosentti on < $rarity",
        mask: "Ota käyttöön osien peittäminen mukautetulla kuvalla",
        maskimg: `Lataa kuvatiedosto, jota käytetään naamiona<br><br><span class="ttdesc">CSS:ssä <code class="ttcode">mask-mode: alpha</code> toimii päinvastaisesti kuin yleensä odotetaan - kuvatiedoston läpinäkyvyysalueet piilotetaan ja mustat/harmaat alueet sallivat alla olevien elementtien näkymisen</span>`,
        useoutline: "Näytä ääriviiva ilmoituksen ympärillä",
        outline: "Valitse reunustyyppi, joka näkyy ilmoituksen ympärillä",
        outlinecolor: "Aseta reunuksen väri ilmoituksen ympärille",
        outlinewidth: "Aseta reunuksen leveys ilmoituksen ympärille",
        primarycolor: "Aseta ilmoituksen ensisijainen väri",
        secondarycolor: "Aseta ilmoituksen toissijainen väri",
        tertiarycolor: "Aseta ilmoituksen kolmas väri",
        fontcolor: "Aseta kaiken ilmoituksessa näkyvän tekstin väri",
        fontoutline: "Lisää ääriviiva kaikelle ilmoituksessa näkyvälle tekstille",
        fontoutlinecolor: "Aseta tekstin ääriviivan väri",
        fontoutlinescale: "Aseta tekstin ääriviivan paksuus",
        fontshadow: "Lisää varjostus kaikelle ilmoituksessa näkyvälle tekstille",
        fontshadowcolor: "Aseta tekstin varjostuksen väri",
        fontshadowscale: "Aseta tekstin varjon paksuus",
        fontshadowx: "Siirtää tekstin varjon sijaintia vaakasuunnassa",
        fontshadowy: "Siirtää tekstin varjon sijaintia pystysuunnassa",
        iconroundness: "Aseta saavutuksen/pelin kuvakkeen pyöristys ilmoituksessa",
        plat: "Lataa kuvatiedosto 100% -kuvakkeeksi",
        usegameicon: "Korvaa avatun saavutuksen ikoni nykyisen pelin ikonilla",
        gameicontype: `Valitse, minkä tyyppinen kuva näytetään pelikuvaikonina`,
        usecustomimgicon: "Korvaa avatun saavutuksen ikoni mukautetulla kuvatiedostolla",
        customimgicon: "Lataa kuvatiedosto, jota käytetään mukautettuna ikonina",
        showhiddenicon: "Näytä kuva, joka osoittaa, että saavutus on piilotettu ilmoituksessa",
        hiddenicon: "Lataa kuvatiedosto korvaamaan piilotetun saavutuksen kuvake",
        logo: "Lataa kuvatiedosto korvaamaan Logo-kuvake",
        decoration: "Lataa kuvatiedosto korvaamaan Decoration-kuvake",
        showdecoration: "Vaihda Decoration-kuvakkeen näkyvyys",
        replacelogo: "Korvaa ilmoituksen logoikoni valitulla koristeella",
        pos: "Aseta ilmoituksen näytöllä oleva sijainti",
        usecustompos: "Ota käyttöön mukautettu sijainti ilmoitukselle",
        setcustompos: "Aseta mukautettu sijainti ilmoitukselle",
        copycustompos: "Käytä mukautettua sijaintia kaikkiin muihin ilmoitustyyppeihin",
        resetcustompos: "Palauta ilmoituksen sijainti oletusmukautettuun sijaintiin",
        updatetheme: "Päivitä nykyinen Teema valituilla mukautusasetuksilla",
        savetheme: "Tallenna kaikki mukauttamisasetukset uutena teemana",
        visibilitybtn: "Vaihda elementin näkyvyys mukautettuihin esikatseluihin ja testi-ilmoituksiin",
        delbtn: "Palauta elementti oletusarvoon",
        imgpath: "De locatie waar meldingsafbeeldingen die door deze optie zijn gegenereerd, worden opgeslagen",
        ssenabled: "Ota käyttöön tai poista käytöstä median luonti tälle tyypille",
        checkforupdates: `Tarkista, onko GitHubissa julkaistu uusi sovellusversio. Jos päivitys on saatavilla, se ladataan ja asennetaan automaattisesti, kun se on vahvistettu <span class="hl">Päivitys saatavilla</span> -valintaikkunassa`,
        linkedgames: `Ohita <span class="hl">SANWatcher</span> tietyille Steam-peleille<br><br><span class="ttdesc">Tätä asetusta tulisi käyttää vain hyvin erityisissä tilanteissa. Normaalisti käyttäjien ei pitäisi tarvita tätä asetusta!</span>`,
        autoreleasegames: `Ohita <span class="hl">automaattinen prosessien seuranta</span> tietyille Steam-peleille<br><br><span class="ttdesc">Tätä asetusta tulisi käyttää vain hyvin erityisissä tilanteissa. Normaalisti käyttäjien ei pitäisi tarvita tätä asetusta!</span>`,
        exclusionlist: `Estä saavutusten seuranta tietyissä Steam-peleissä sovelluksen avulla<br><br><span class="ttdesc">Tätä vaihtoehtoa tulisi käyttää vain hyvin erityisissä tilanteissa. Käyttäjien ei pitäisi tarvita tätä vaihtoehtoa normaaleissa olosuhteissa!</span>`,
        inclusionlist: `Estää kaikkien Steam-pelien seuraamisen sovelluksessa, ellei niitä ole erikseen määritetty<br><br><span class="ttdesc">Tätä vaihtoehtoa tulisi käyttää vain hyvin erityisissä tilanteissa. Käyttäjien ei normaalisti pitäisi tarvita tätä asetusta!</span>`,
        ovx: "Siirrä ilmoitusta, joka näkyy kuvakaappauksessa, vaakasuunnassa",
        ovy: "Siirrä ilmoitusta, joka näkyy kuvakaappauksessa, pystysuunnassa",
        importtheme: `Tuo mukautuksia käyttäjän luoman <span class="hl">teematiedoston</span> kautta`,
        exporttheme: `Vie tällä hetkellä valittu <span class="hl">teema</span> jakamista varten<br><br><span class="ttdesc">Ennen vientiä varmista, että haluttu <span class="hl">teema</span> on valittu (valikon <span class="hl">Teeman valinta</span> kautta). Varmista myös, että mukautukset on tallennettu valittuun <span class="hl">teemaan</span> (valikon <span class="hl">Tallenna teema</span> kautta)<br><br><u>Mukautukset, joita ei ole vielä tallennettu nykyiseen <span class="hl">teemaan</span>, eivät tule mukaan vientiin!</u></span>`,
        webhooks: "Käytä Webhook-URL:ia julkaistaksesi viestin Discord-palvelimella, kun saavutus on avattu",
        webhookmain: `Vaihda, lähetetäänkö saavutustiedot Discord-palvelimelle, kun $main saavutus avataan`,
        webhooksemi: `Vaihda, lähetetäänkö saavutustiedot Discord-palvelimelle, kun $semi saavutus avataan`,
        webhookrare: "Vaihda, lähetetäänkö saavutustiedot Discord-palvelimelle, kun $rare saavutus avataan",
        webhookplat: "Vaihda, lähetetäänkö saavutustiedot Discord-palvelimelle, kun $plat saavutus avataan",
        webhooktest: "Vaihda, lähetetäänkö testitietoja Discord-palvelimelle, kun minkä tahansa tyyppiset testailmoitukset käynnistyvät",
        webhookurl: `Aseta <span class="hl">Webhook-URL</span> halutulle Discord-palvelimelle<br><br><span class="ttdesc"><span class="hl">Webhook-URL</span> käytetään julkaisemaan viesti Discord-palvelimelle/kanavalle käyttäjän tai sovelluksen puolesta. Jos haluat asettaa uuden Webhookin Discord-palvelimelle, käyttäjällä on oltava rooli palvelimella, joka sallii Webhookien luomisen<br><br><u>Webhook-URL vaaditaan tämän asetuksen käyttämiseen</u><br><br>Katso lisätietoja Discordin virallisesta dokumentaatiosta</span>`,
        webhookspoilers: `Lisää spoiler-tunniste "Piilotetuille" saavutuksille, kun ne julkaistaan Discordissa`,
        webhookappid: "Näytä nykyisen pelin AppID webhook-upotteen alatunnisteessa",
        unlockmsg: "Aseta avausviestin/mukautetun tekstin sijainti $type:ssa",
        title: "Aseta saavutuksen otsikon sijainti $type:ssa",
        desc: "Aseta saavutuksen kuvauksen sijainti $type:ssa",
        notification: "ilmoitus",
        screenshot: "kuvakaappaus",
        percentpos: "Aseta harvinaisuusprosentin sijainti $type:ssa",
        sspercentpos: "Aseta harvinaisuusprosentin sijainti $type:ssa",
        hiddeniconpos: "Aseta piilotetun/salaisen saavutuksen kuvakkeen sijainti $type:ssa",
        sshiddeniconpos: "Aseta piilotetun/salaisen saavutuksen kuvakkeen sijainti $type:ssa",
        decorationpos: "Aseta koristeluelementin sijainti $type:ssa",
        ssdecorationpos: "Aseta koristeluelementin sijainti $type:ssa",
        percentbadge: "Näytä avautumisprosentti merkillä, joka on sijoitettu saavutuksen/pelin kuvakkeen ylle",
        sspercentbadge: "Näytä avautumisprosentti merkillä, joka on sijoitettu saavutuksen/pelin kuvakkeen ylle",
        percentbadgepos: "Aseta merkin sijainti",
        sspercentbadgepos: "Aseta merkin sijainti",
        percentbadgecolor: "Aseta merkin taustaväri",
        sspercentbadgecolor: "Aseta merkin taustaväri",
        percentbadgefontcolor: "Aseta mitalin fontin väri",
        sspercentbadgefontcolor: "Aseta mitalin fontin väri",
        percentbadgefontsize: "Aseta merkin koko",
        sspercentbadgefontsize: "Aseta merkin koko",
        percentbadgeroundness: "Aseta merkin pyöristyminen",
        sspercentbadgeroundness: "Aseta merkin pyöristyminen",
        percentbadgex: "Siirrä merkkielementtiä vaakasuunnassa",
        sspercentbadgex: "Siirrä merkkielementtiä vaakasuunnassa",
        percentbadgey: "Siirrä merkkielementtiä pystysuunnassa",
        sspercentbadgey: "Siirrä merkkielementtiä pystysuunnassa",
        percentbadgeimg: "Näytä harvinaisuuteen perustuva kuvake merkkielementtinä",
        sspercentbadgeimg: "Näytä harvinaisuuteen perustuva kuvake merkkielementtinä",
        percentbadgeimgbronze: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on > $semirarity",
        sspercentbadgeimgbronze: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on > $semirarity",
        percentbadgeimgsilver: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on < $semirarity ja > $rarity",
        sspercentbadgeimgsilver: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on < $semirarity ja > $rarity",
        percentbadgeimggold: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on < $rarity",
        sspercentbadgeimggold: "Merkki-ikoni, joka näytetään, kun avaamisprosentti on < $rarity",
        percentbadgeimgplat: "Merkki-ikoni, joka näytetään, kun kaikki saavutukset on avattu",
        sspercentbadgeimgplat: "Merkki-ikoni, joka näytetään, kun kaikki saavutukset on avattu",
        resetpbimgs: "Palauta kaikki merkkikuvakkeet oletukseksi",
        elemsmatch: `Vastaa ilmoituselementtien asetukset, jotka on määritetty mukauttajassa tätä ilmoitustyyppiä varten<br><br><span class="ttdesc">Jotkin ilmoitusmallit eivät voi täysin vastata mukauttajan asetuksia erojen vuoksi ruutu- ja kuvakaappauspohjaisten ilmoitusten välillä</span>`,
        themeswitch: `Vaihda automaattisesti tallennettuun <span class="hl">Teemaan</span> kun tietty peli havaitaan`,
        userthemesync: `Synkronoi mukautukset valitussa <span class="hl">Teemassa</span> kaikkiin muihin ilmoitustyyppeihin`,
        showsystrayopts: `Näytä kaikki vaihtoehdot, jotka sijaitsevat yleensä kohdassa <span class="hl">Järjestelmäpalkki</span> > <span class="hl">Asetukset</span> kohdassa <span class="hl">Asetukset</span> > <span class="hl">Sekalaiset</span>`,
        releaseshortcut: "Vapauta tällä hetkellä seurattava peli määritetyllä pikanäppäimellä",
        themeselect: "Valitse aiemmin tallennettu Teema",
        statwin: `Näytä mukautettavat saavutustilastot nykyiselle pelille ulkoisessa ikkunassa<br><br><span class="ttdesc">Kun käytetään yhdessä <span class="hl">Käännä saavutukset Steamin kielelle</span> -vaihtoehdon kanssa, jotkin käännökset saattavat olla saatavilla vasta, kun kyseinen saavutus on avattu</span>`,
        statwinaot: `Aseta Saavutustilastot-ikkuna "Aina päällimmäisenä" -tilaan, jolloin ikkuna pysyy pelin ikkunan yläpuolella<br><br><span class="ttdesc">Kun tämä asetus on käytössä, Saavutustilastot-ikkuna ei enää rekisteröi käyttäjän toimintoja, kuten "klikkaus"-tapahtumia. Ottaaksesi vuorovaikutuksen uudelleen käyttöön, tämä asetus on poistettava käytöstä</span>`,
        statwinshortcut: "Vaihda Saavutustilastojen ikkuna käyttämällä määritettyä pikanäppäintä",
        ssdisplay: "Näytä otetun ruutukaappauksen esikatselu ilmoituksessa",
        iconscale: "Suurentaa tai pienentää saavutuksen kuvakkeen kokoa",
        showiconborder: "Näytä kuva reunuksena saavutuksen kuvakkeen ympärillä",
        iconborderimg: "Lataa kuvatiedosto käytettäväksi saavutuksen kuvakkeen reunuksena",
        iconborderpos: "Määritä, näytetäänkö kuvakerajan kuva saavutuksen kuvakkeen edessä vai takana",
        iconborderscale: "Säädä kuvakerajan kokoa ilmoituksessa",
        iconborderx: "Säädä kuvakerajan vaakasiirtoa ilmoituksessa",
        iconbordery: "Säädä kuvakerajan pystysiirtoa ilmoituksessa",
        iconborderrarity: "Muuttaa kuvakkeen reunuksen harvinaisuuden perusteella saavutuksen avautuessa",
        iconborderimgbronze: "Kuvakkeen reunakuva, joka näytetään, kun avaamisprosentti on > $semirarity",
        iconborderimgsilver: "Kuvakkeen reunakuva, joka näytetään, kun avaamisprosentti on < $semirarity ja > $rarity",
        iconshadowcolor: "Aseta varjotehosteen väri, joka ympäröi saavutuksen kuvaketta harvinaisen saavutuksen avautuessa",
        iconanimcolor: "Aseta animaatiotehosteen väri saavutuksen kuvakkeen taakse harvinaisen saavutuksen avautuessa",
        logoscale: "Suurentaa tai pienentää logoelementin kokoa ilmoituksessa",
        decorationscale: "Suurentaa tai pienentää koriste-elementin kokoa ilmoituksessa",
        usecustomfontsizes: `Suurentaa tai pienentää yksittäisten tekstielementtien kokoa ilmoituksessa<br><br><span class="ttdesc">Ilmoituksen alkuperäisen asettelun säilymistä ei voida taata, jos yksittäisten fonttikokojen arvoja muutetaan</span>`,
        unlockmsgfontsize: "Suurentaa tai pienentää lukituksen avausviestin tekstielementin kokoa",
        titlefontsize: "Suurentaa tai pienentää saavutuksen otsikon tekstielementin kokoa",
        descfontsize: "Suurentaa tai pienentää saavutuksen kuvauksen tekstielementin kokoa",
        webhookembedcolormain: "Aseta väri, jota käytetään webhook-upotuksessa, kun $main saavutus avataan",
        webhookembedcolorsemi: "Aseta väri, jota käytetään webhook-upotuksessa, kun $semi saavutus avataan",
        webhookembedcolorrare: "Aseta väri, jota käytetään webhook-upotuksessa, kun $rare saavutus avataan",
        webhookembedcolorplat: "Aseta väri, jota käytetään webhook-upotuksessa, kun $plat saavutus avataan",
        raemus: "Näytä ilmoitukset, kun pelejä havaitaan tuetuissa emulaattoreissa",
        rauser: "Aseta Retro Achievements -käyttäjätunnus saavutusten seuraamista varten",
        rakey: `Aseta Web API -avain, jota käytetään tunnistautumiseen Retro Achievements API:ssa<br><br><span class="ttdesc">Web API -avaimen voi kopioida tai luoda uudelleen kirjautumalla sisään Retro Achievements -sivustolle ja siirtymällä kohtaan <span class="hl">Asetukset > Avaimet > Web API -avain</span><br><br>🔒 Annettu avain salataan ennen sen tallentamista paikallisesti järjestelmään (jos nykyinen käyttöjärjestelmä tukee salausta)</span>`,
        rapercenttype: "Määritä, näytetäänkö ilmoituksissa Hardcore- vai Softcore-saavutusten avausprosentit",
        retroarch: `Näytä Retro Achievements -ilmoitukset peleille, jotka emuloidaan RetroArchilla<br><br><span class="ttdesc"><span class="hl">RetroArch > Asetukset > Lokitus</span> on määritettävä seuraavilla asetuksilla:<br><br><ul><li><span class="hllb">Lokituksen yksityiskohtaisuus</span>: <span class="hlgreen">PÄÄLLÄ</span></li><li><span class="hllb">Frontend-lokitaso</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Kirjaa lokiin</span>: <span class="hlgreen">PÄÄLLÄ</span></li><li><span class="hllb">Aikaleimat lokitiedostoissa</span>: <span class="hlred">POIS PÄÄLTÄ</span></li></ul></span>`,
        dolphin: `Näytä Retro Achievements -ilmoitukset peleille, jotka emuloidaan Dolphinilla<br><br><span class="ttdesc"><span class="hl">Dolphin > Näytä > Näytä lokiasetukset</span> on määritettävä seuraavilla asetuksilla:<br><br><ul><li><span class="hllb">Yksityiskohtaisuus</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Lokin ulostulot</span> > <span class="hlgreen">Kirjoita tiedostoon</span></li><li><span class="hllb">Lokityypit</span> > <span class="hlgreen">Saavutukset (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Näytä Retro Achievements -ilmoitukset peleille, jotka emuloidaan PCSX2illa<br><br><span class="ttdesc"><span class="hl">PCSX2 > Työkalut > Ota tiedostolokitus käyttöön</span> täytyy olla käytössä</span>`,
        duckstation: `Näytä Retro Achievements -ilmoitukset Duckstationin kautta emuloiduista peleistä<br><br><span class="ttdesc">❗ Tiedosto <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> täytyy ladata ja siirtää <span class="hl">Duckstationin asennuskansioon</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Asetukset > Saavutukset > RAIntegration (Vain kehittäjille)</span> täytyy olla käytössä</span>`,
        ppsspp: `Näytä Retro Achievements -ilmoitukset peleille, joita emuloidaan PPSSPP:n kautta<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> täytyy olla otettuna käyttöön ja määritetty seuraavilla asetuksilla:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Aseta polku RetroArchin <span class="hl">"retroarch.log"</span> -lokitiedostoon<br><br><span class="ttdesc">Oletusasennuksen mukaan <span class="hl">"retroarch.log"</span> tallennetaan sijaintiin <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Aseta polku Dolphin <span class="hl">"dolphin.log"</span> -lokitiedostoon<br><br><span class="ttdesc">Oletusasennuksen mukaan <span class="hl">"dolphin.log"</span> tallennetaan johonkin seuraavista sijainneista:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Aseta polku PCSX2 <span class="hl">"emulog.txt"</span> -lokitiedostoon<br><br><span class="ttdesc">Oletusasennuksilla <span class="hl">"emulog.txt"</span> tallennetaan polkuun <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Aseta polku Duckstationin lokitiedostoon <span class="hl">"RALog.txt"</span><br><br><span class="ttdesc">Oletusasetuksilla <span class="hl">"RALog.txt"</span> tallennetaan sijaintiin <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Aseta PPSSPP:n lokitiedoston <span class="hl">"log.txt"</span> polku<br><br><span class="ttdesc">Oletusasennoilla asennettuna tiedosto <span class="hl">"log.txt"</span> tallennetaan sijaintiin <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Aseta ilmoituksen tekstielementtien värit erikseen",
        unlockmsgfontcolor: "Aseta ensimmäisen tekstielementin väri",
        titlefontcolor: "Aseta toisen tekstielementin väri",
        descfontcolor: "Aseta kolmannen tekstielementin väri",
        exportachdata: `Vie saavutustiedot JSON-tiedostoon, kun saavutus avataan<br><br><span class="ttdesc">Kun käytössä, <span class="ttcode">achdata.json</span> viedään sijaintiin:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Säätää pystysuuntaista välistystä ilmoituksen tekstielementtien välillä",
        ssmode: `Määritä, tallennetaanko kuvakaappauksiin koko näyttö vai nykyinen pelin ikkuna<span style="color: red;">*</span><br><br><span class="ttdesc">Jos nykyisen pelin <span class="hl">suoritettavaa tiedostoa</span> ei voida paikantaa (<i>joko <span class="hl">automaattisen prosessiseurannan</span> kautta tai kun se on lisätty merkintänä kohtaan <span class="hl">Pelien automaattinen vapautus</span></i>), tämä asetus määritetään oletuksena tilaan "Näyttö"</span>`,
        replaynotify: "Toista viimeisin saavutuksen ilmoitus",
        replaynotifyshortcut: "Toista viimeisin saavutuksen ilmoitus käyttämällä määritettyä pikanäppäintä",
        replaynotifyempty: `<br><br><span class="ttdesc">Toistovuoro on tyhjä. Avaa saavutus toistaaksesi ilmoituksen</span>`,
        customtrigger: "Laukaisee näppäimen/yhdistelmän, kun saavutus avataan. Voidaan käyttää ulkoisissa sovelluksissa rekisteröityjen pikanäppäinten laukaisuun",
        customtriggershortcut: `Laukaisee määritetyn näppäimen/yhdistelmän, kun saavutus avataan<br><br><span class="ttdesc">Tukee 1–3 näppäintä per pikanäppäin. Alle 3 näppäimen yhdistelmissä paina haluttuja näppäimiä ja odota ajastimen (5s) päättymistä</span>`,
        customtriggerdelay: "Viivästyttää määritetyn mukautetun näppäimen/yhdistelmän laukaisua",
        customtriggerusedisplaytime: `Viivästyttää määritetyn mukautetun näppäimen/yhdistelmän laukaisua nykyisen ilmoitustyypin Näyttöaika-arvon perusteella`,
        trophymode: "Korvaa Pää/Harvinainen/100% ilmoitustyypit Pronssi/Hopea/Kulta/Platina -versioilla",
        lognum: `Aiemmin tallennettujen lokitiedostojen määrä ennen poistamista. Uusi lokitiedosto luodaan aina, kun sovellus käynnistetään<br><br><span class="ttdesc">Kun asetuksena on 0, kaikki aiemmat lokitiedostot poistetaan suljettaessa</span>`, 
        detectedappid: `Käytä parhaillaan tunnistetun pelin <span class="hl">AppID</span>-tunnusta`,
        listmode: `Määrittää <span class="hl">Poissulkeminen</span>/<span class="hl">Sisällysluettelo</span> -toiminnan<br><br><span class="ttdesc">• <span class="hl">Poissulkeminen</span>: Ohittaa vain luetteloon merkityt pelit<br>• <span class="hl">Sisällyttäminen</span>: Ohittaa kaikki pelit paitsi ne, jotka on lisätty luetteloon</span>`,
        notifymax: `Määrittää, kuinka monta ilmoitusta voi näkyä samanaikaisesti näytöllä<br><br><span class="ttdesc">Samanaikaisten ilmoitusten määrän kasvattaminen vaatii enemmän resursseja ja voi heikentää suorituskykyä</span>`,
        notifyspace: "Määrittää etäisyyden samanaikaisesti näkyvien ilmoitusten välillä näytöllä",
        audiocooldown: `Määrittää ajan, jonka seuraavat ilmoitukset odottavat ennen kuin uusi ääni voidaan toistaa<br><br><span class="ttdesc">Ääni ei muutu, jos Ilmoitusten enimmäismäärä on asetettu arvoon 1</span>`,
        rauseemudir: "Tallenna kuvakaappaukset/ilmoituskuvat, jotka on avattu RetroAchievementsin kautta, nykyisen emulaattorin alikansioon määritellyn kuvakaappaus-/kuvapolun hakemiston sisällä",
        ssext: "Määritä tiedostomuoto kuvakaappauksille, jotka luodaan kuvakaappaus ilmoituspeitteellä -asetuksella",
        notify1line: `Rajoita kaikissa ilmoituksissa näytettävien tekstirivien määrä yhteen<br><br><span class="ttdesc">Yhteen riviin mahtumattomat tekstit katkaistaan merkillä "..."</span>`,
        copytheme: "Kopioi valittu teema toiseen ilmoitustyyppiin",
        ssaddtosteam: "Lisää automaattisesti luotu media nykyisen pelin Tallenteisiin ja Kuvakaappauksiin Steamissa",
        appdatadir: "Avaa sovelluksen AppData-kansion sijainti",
        backup: "Tee varmuuskopio sovelluksen AppData-kansion sisällöstä valittuun sijaintiin, joka toimii palautuspisteenä sovelluksen nykyiselle tilalle",
        restore: "Palauta sovelluksen AppData-kansion sisältö aiemmasta varmuuskopiosta",
        gametimerwin: "Näyttää näytöllä ajastimen, joka näyttää ajan, joka kului kaikkien saavutusten avaamiseen nykyisessä pelissä",
        gametimerwinshortcut: "Kytkee pelin valmistumisajastimen päälle tai pois määritetyllä pikanäppäimellä",
        gametimerwinaot: `Asettaa pelin valmistumisajastimen "Aina päällimmäisenä" -tilaan, jolloin ikkuna voidaan näyttää peli-ikkunan yläpuolella<br><br><span class="ttdesc">Kun tämä on käytössä, pelin valmistumisajastin ei enää rekisteröi käyttäjän toimintoja, kuten "klikkaus"-tapahtumia. Vuorovaikutuksen palauttamiseksi tämän asetuksen kanssa se on poistettava käytöstä</span>`,
        resetgametimer: "Nollaa nykyisen pelin valmistumisajastimen",
        noshortcuts: `Poistaa kaikki sovelluksen pikanäppäimet käytöstä<br><br><span class="ttdesc">Kun tämä on käytössä, <u>mikään sovelluksen pikanäppäimistä ei enää toimi</u>. Kaikki pikanäppäimiin liittyvät asetukset piilotetaan myös</span>`,
        extwinnotify: "Vaihtaa kaikkien näytöllä näkyvien ilmoitusten näkyvyyttä käytettäessä Stream Notifications -ominaisuutta",
        usesanwatcher: `Ota käyttöön SAN:n uusi peliprosessien valvonta<br><br><span class="ttdesc">Uuden SANWatcherin ja vanhojen automaattisten prosessienseurantamenetelmien erot ovat seuraavat:<br><br><div class="wrapper sanwatcher"><span class="hl">PÄÄLLÄ</span><ul><li>Valvoo aktiivisesti kaikkien pelin asennushakemistossa olevien prosessien käynnistys- ja lopetustapahtumia</li><li>Ei edellytä pelin suoritettavan tiedoston tuntemista nykyisen pelin vapauttamiseksi</li><li>Peliä edeltävien käynnistysohjelmien toiminta voi vaihdella, joten täyttä yhteensopivuutta kaikkien Steam-pelien kanssa ei voida taata</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">POIS PÄÄLTÄ</span><ul><li>Tarkistaa pelin asennushakemistosta käynnissä olevat suoritettavat tiedostot pelin käynnistyksen jälkeen</li><li>Edellyttää pelin suoritettavan tiedoston tuntemista nykyisen pelin vapauttamiseksi</li><li>Jos peliprosessia ei voida määrittää automaattisesti, käyttäjän on lisättävä manuaalisesti uusi merkintä kohtaan <span class="hl">Pelien automaattinen vapautus</span>, jotta pelit voidaan vapauttaa automaattisesti</li></ul></div>`,
        releasewaittime: `Määritä, kuinka kauan SANWatcher odottaa uusien peliprosessien käynnistymistä ennen nykyisen pelin vapauttamista<br><br><span class="ttdesc">Jos esimerkiksi nykyinen peli käynnistää ennen varsinaista peliä esikäynnistys- tai asetusikkunan, tämä asetus määrittää, kuinka monta sekuntia SANWatcher odottaa varsinaisen peli-ikkunan ilmestymistä sen jälkeen, kun esikäynnistys- tai asetusikkuna on suljettu<br><br>Jos uusi aktiivinen peliprosessi havaitaan tämän odotusajan kuluessa, vapautus peruutetaan ja uutta aktiivista prosessia seurataan sen sijaan<br><br>💡 Pelin nimi <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">vilkkuu</span> <span class="hl">Pelinäyttö</span>-ruudussa, kun nykyinen peli odottaa vapauttamista</span>`,
        platcustomtext: `Aseta mukautettu viesti pelin 100 %:n läpäisystä näytettäväksi ilmoituksessa<br><br><span class="ttdesc">Tämä asetus piilotetaan, kun Customiser > Esiasetus > Ilmoituksen elementit > Saavutuksen kuvaus on poistettu käytöstä</span>`
    },
    update: {
        updateavailable: "Päivitys saatavilla",
        sub: [
            `<span id="newversion"></span>`,
            "Uusi päivitys Steam Achievement Notifier -sovellukselle on saatavilla!",
            `Koko julkaisutiedot saatavilla <span id="discordreleasenotes"></span> ja <span id="githubreleasenotes"></span>`
        ],
        update: "Päivitä"
    },
    linkgame: {
        content: {
            exepath: "Suoritettavan tiedoston polku",
            linkedgame: "Linkitä peli",
            autoreleasegame: "Automaattisesti vapautettava peli",
            linkedgamessub: [
                `Ohita kaikki <span class="hl">SANWatcher</span>:n automaattisesti seuraamat käynnissä olevat peliprosessit ja tarkista sen sijaan vain, onko valittu <span class="hl">pelin suoritettava tiedosto</span> tällä hetkellä aktiivinen`,
                `Linkitä minkä tahansa pelin <span class="hl">AppID</span> kohteena olevaan <span class="hl">pelin suoritettavaan tiedostoon</span> tai <span class="hl">poista</span> olemassa oleva linkitys`
            ],
            autoreleasegamessub: [
                `Jos Steam näyttää pelin edelleen tilassa <i>Käynnissä</i> pelin ikkunan sulkemisen jälkeen, kokeile lisätä uusi merkintä kohtaan <span class="hl">$linkgame</span>`,
                `Lisää tietyn pelin <span class="hl">AppID</span> yhdessä odotetun <span class="hl">pelin suoritettavan tiedoston</span> kanssa tai <span class="hl">poista</span> olemassa oleva merkintä`,
            ],
            managesub: [
                `Kun peli on havaittu, uusia merkintöjä voidaan lisätä myös <span class="hl">ikkunan kohdistuksen</span> kautta <i>napsauttamalla hiiren oikealla painikkeella</i> <span class="hl">ilmoitusalueen kuvaketta</span> > <span class="hl">$linkgame</span>`,
                `<span class="hl help" id="appidhelp"><u>Miten löydän Steam-pelin AppID:n?</u></span>`
            ],
            linknew: "Uusi merkintä",
            linknewsub: [
                `Linkitä uuden pelin <span class="hl">AppID</span> kohteena olevaan <span class="hl">pelin suoritettavaan tiedostoon</span>`,
                `Lisäämisen jälkeen merkinnät voidaan <span class="hl">poistaa</span> aiemmasta <span class="hl">$linkgame</span>-valikosta`
            ],
            linkedit: "Muokkaa merkintää",
            linkeditsub: [
                `Muokkaa olemassa olevaa linkitystä pelin <span class="hl">AppID</span>:n ja kohteena olevan <span class="hl">pelin suoritettavan tiedoston</span> välillä`,
                `Lisäämisen jälkeen merkinnät voidaan <span class="hl">poistaa</span> aiemmasta <span class="hl">$linkgame</span>-valikosta`
            ],
            link: "Lisää",
            findappid: "Etsi Steam AppID",
            findappidsub: [
                `Jokaisella Steam-pelillä on yksilöllinen numero, jota kutsutaan <span class="hl">AppID</span>:ksi. Voit löytää minkä tahansa Steam-pelin AppID:n jollakin seuraavista tavoista:`,
                `Napsauta <span class="hl">Steam-asiakasohjelmassa</span> pelin nimeä <i>hiiren oikealla painikkeella</i> <span class="hl">Kirjastossasi</span> ja valitse <i>Ominaisuudet</i> > <i>Päivitykset</i> – AppID näkyy siellä`,
                `Pelin <span class="hl">kauppasivun</span> <span class="hl">URL-osoitteesta</span> – se on numero, joka tulee kohdan <span class="hl">app/</span> jälkeen: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Sivustoilta, kuten <span class="hl">SteamDB</span> – <span class="hl">App Info</span> -osio näyttää jokaisen pelin AppID:n`
            ],
            noexe: "Pelin EXE-tiedostoa ei löytynyt!",
            noexesub: "Napsauta tästä saadaksesi lisätietoja",
            noexedialogsub: [
                `Steam Achievement Notifier ei pystynyt löytämään tämän pelin suoritettavaa tiedostoa automaattisesti. Pelin suoritettavan tiedoston sijainti tarvitaan, jotta peli voidaan "vapauttaa" sen sulkemisen jälkeen`,
                `Voit vapauttaa pelin manuaalisesti sen sulkemisen jälkeen napsauttamalla <span class="hl">ilmoitusalueen kuvaketta</span> <i>hiiren oikealla painikkeella</i> > <span class="hl">Asetukset</span> > <span class="hl">Vapauta peli</span> tai käyttämällä <span class="hl">Pelin vapautuksen pikanäppäintä</span>`,
                `Vaihtoehtoisesti napsauta alla olevaa <span class="hl">Lisää</span>-painiketta lisätäksesi aktiivisen ikkunan suoritettavan tiedoston kohtaan <span class="hl">Asetukset</span> > <span class="hl">Pelit</span> > <span class="hl">Automaattisesti vapautettavat pelit</span>`,
            ],
            linkedgamefocussub: `Jos haluat ohittaa kaikki <span class="hl">SANWatcher</span>:n automaattisesti seuraamat käynnissä olevat peliprosessit, lisää uusi merkintä kohtaan <span class="hl">Linkitetyt pelit</span>`,
            autoreleasegamefocussub: `Jos Steam näyttää pelin edelleen tilassa <i>Käynnissä</i> pelin ikkunan sulkemisen jälkeen, kokeile lisätä uusi merkintä kohtaan <span class="hl">Automaattisesti vapautettavat pelit</span>`,
            focussub: `Voit tehdä tämän nykyiselle pelille napsauttamalla alla olevaa <span class="hl">Lisää</span>-painiketta lisätäksesi aktiivisen ikkunan suoritettavan tiedoston kohtaan <span class="hl">Asetukset</span> > <span class="hl">Pelit</span> > <span class="hl">$linkgame</span>`,
            linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Mitä tapahtuu, kun napsautan Lisää-painiketta?</u></span>`,
            linkgamehelp: "Linkitä kohdistuksen kautta",
            linkgamehelpsub: [
                `Kun napsautat <span class="hl">Lisää</span>-painiketta, uusi merkintä lisätään automaattisesti kohtaan <span class="hl">Asetukset</span> > <span class="hl">Pelit</span> > <span class="hl">Automaattisesti vapautettavat pelit</span> käyttäen parhaillaan aktiivisen ikkunan tietoja.`,
                `Kun napsautat <span class="hl">Lisää</span>-painiketta, 5 sekunnin ajastin käynnistyy`,
                `Kohdista peli-ikkuna ennen kuin ajastin päättyy`,
                `Kun ajastin päättyy, uusi merkintä nykyiselle <span class="hl">AppID</span>:lle lisätään kohtaan <span class="hl">Asetukset</span> > <span class="hl">Pelit</span> > <span class="hl">Automaattisesti vapautettavat pelit</span> käyttäen aktiivisen ikkunan suoritettavaa tiedostoa`,
                `Uudet yritykset korvaavat olemassa olevat merkinnät, tai merkintä voidaan poistaa kohdasta <span class="hl">Asetukset</span> > <span class="hl">Pelit</span> > <span class="hl">Automaattisesti vapautettavat pelit</span> napsauttamalla painiketta <span id="linkhelpunlink"></span>`
            ],
            addlinkfailed: "Ikkunaa ei voitu lisätä",
            addlinkfailedsub: `Yritä uudelleen napsauttamalla <span class="hl">Lisää</span>-painiketta`
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Lisää minkä tahansa Steam-pelin <span class="hl">AppID</span> <span class="hl">poissulkemislistaan</span>`,
                `Steam Achievement Notifier ei yritä seurata saavutusdataa millekään pelille, jonka <span class="hl">AppID</span> on lisätty <span class="hl">poissulkemislistaan</span>`,
                `<span class="hl" id="appidhelp"><u>Kuinka löydän Steam-pelin AppID:n?</u></span>`
            ],
            exclusionnew: "Uusi poissulkeminen",
            exclusionnewsub: [
                `Syötä <span class="hl">AppID</span> lisätäksesi sen <span class="hl">poissulkemislistaan</span>`
            ],
            exclusionedit: "Muokkaa poissulkemista",
            exclusioneditsub: [
                `Muokkaa olemassa olevaa <span class="hl">AppID:tä</span> <span class="hl">Poissulkulistassa</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Lisää minkä tahansa Steam-pelin <span class="hl">AppID</span> <span class="hl">Sisällysluetteloon</span>`,
                `Steam Achievement Notifier seuraa saavutustietoja vain peleistä, joiden <span class="hl">AppID</span> on lisätty <span class="hl">Sisällysluetteloon</span>`,
                `<span class="hl help" id="appidhelp"><u>Kuinka löydän Steam-pelin AppID-tunnuksen?</u></span>`
            ],
            inclusionnew: "Uusi sisällytys",
            inclusionnewsub: [
                `Syötä <span class="hl">AppID</span> lisättäväksi <span class="hl">Sisällysluetteloon</span>`
            ],
            inclusionedit: "Muokkaa sisällytystä",
            inclusioneditsub: [
                `Muokkaa olemassa olevaa <span class="hl">AppID</span>-tunnusta <span class="hl">Sisällysluettelossa</span>`
            ]
        }
    },
    notificationelems: {
        title: "Ilmoituselementit",
        content: {
            unlockmsg: "Avauksen Viesti",
            title: "Saavutuksen Otsikko",
            desc: "Saavutuksen Kuvaus",
            hiddeniconpos: "Piilotettu Kuvake",
            sshiddeniconpos: "Piilotettu Kuvake",
            decorationpos: "Koriste",
            ssdecorationpos: "Koriste",
            percentpos: "Harvinaisuusprosentti",
            sspercentpos: "Harvinaisuusprosentti",
            percentbadge: "Prosenttimerkki",
            sspercentbadge: "Prosenttimerkki",
            percentbadgepos: "Merkin sijainti",
            sspercentbadgepos: "Merkin sijainti",
            percentbadgecolor: "Merkin väri",
            sspercentbadgecolor: "Merkin väri",
            percentbadgefontcolor: "Mitalin fontin väri",
            sspercentbadgefontcolor: "Mitalin fontin väri",
            percentbadgefontsize: "Merkin koko",
            sspercentbadgefontsize: "Merkin koko",
            percentbadgeroundness: "Merkin pyöristys",
            sspercentbadgeroundness: "Merkin pyöristys",
            percentbadgex: "Vaakasiirto",
            sspercentbadgex: "Vaakasiirto",
            percentbadgey: "Pystysiirto",
            sspercentbadgey: "Pystysiirto",
            percentbadgeimg: "Käytä kuvaketta",
            sspercentbadgeimg: "Käytä kuvaketta",
            percentbadgeimgbronze: "Harvinaisuus: > $semirarity",
            sspercentbadgeimgbronze: "Harvinaisuus: > $semirarity",
            percentbadgeimgsilver: "Harvinaisuus: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Harvinaisuus: < $semirarity & > $rarity",
            percentbadgeimggold: "Harvinaisuus: < $rarity",
            sspercentbadgeimggold: "Harvinaisuus: < $rarity",
            resetpbimgs: "Palauta merkkikuvakkeet",
            elemsmatch: "Vastaa mukauttajien asetuksia",
            ssdisplay: "Ruutukaappauksen esikatselu"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Lisää minkä tahansa pelin <span class="hl">AppID</span>/<span class="hl">GameID</span>, jotta <span class="hl">Teemat</span> vaihtuvat automaattisesti, kun peli havaitaan`,
                `Mikä tahansa tallennettu <span class="hl">Teema</span> voidaan valita jokaiselle ilmoitustyypille sekä haluttu näyttö käytettäväksi <span class="hl">Kuvakaappauslähteenä</span>`,
                `<span class="hl help" id="appidhelp"><u>Miten löydän Steam-pelin AppID:n?</u></span>`,
                `<span class="hl help" id="ragameidhelp"><u>Miten löydän RetroAchievements-pelin GameID:n?</u></span>`
            ],
            themeswitchnew: "Uusi automaattinen vaihto",
            themeswitchnewsub: [
                `Syötä pelin <span class="hl">AppID</span>/<span class="hl">GameID</span> sekä haluttu näyttö käytettäväksi <span class="hl">Kuvakaappauslähteenä</span>`,
                `Useita <span class="hl">AppID</span>-/<span class="hl">GameID</span>-tunnuksia voidaan syöttää kerralla erottamalla ne pilkulla (<code>,</code>) tai puolipisteellä (<code>;</code>)`,
                `Valitse, mihin <span class="hl">Teemaan</span> vaihdetaan kullekin ilmoitustyypille, kun tämän pelin <span class="hl">AppID</span>/<span class="hl">GameID</span> havaitaan`
            ],
            themeswitchedit: "Muokkaa automaattista vaihtoa",
            themeswitcheditsub: [
                `Muokkaa haluttua näyttöä käytettäväksi <span class="hl">Kuvakaappauslähteenä</span> tämän pelin <span class="hl">AppID</span>/<span class="hl">GameID</span>:lle`,
                `Vaihda, mihin <span class="hl">Teemaan</span> siirrytään kullekin ilmoitustyypille, kun tämän pelin <span class="hl">AppID</span>/<span class="hl">GameID</span> havaitaan`
            ],
            themes: "Teemat",
            src: "Kuvakaappauslähde",
            themedeleted: "Teema poistettu",
            rafindgameid: "Etsi RA GameID",
            rafindgameidsub: [
                `Jokaisella RetroAchievements-pelillä on yksilöllinen numero, jota kutsutaan <span class="hl">GameID</span>:ksi. Löydät minkä tahansa RetroAchievements-pelin GameID:n tarkistamalla:`,
                `RetroAchievements-sivuston <span class="hl">pelisivun</span> <span class="hl">URL-osoitteen</span> – numero löytyy kohdan <span class="hl">game/</span> jälkeen: <code class="helpcode">https://retroachievements.org/game/<span class="hl">10003</span></code>`
            ]
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Näyttää siltä, että yrität ottaa käyttöön asetusta <span class="hl">${opt}</span>, mutta tämä asetus ei toimi ilman, että paketti <code class="dialogcode">${dep}</code> on ensin asennettu`,
    `Suorita komento <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> asentaaksesi tämän riippuvuuden`
]