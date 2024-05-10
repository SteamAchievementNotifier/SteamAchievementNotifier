export const translations = {
    global: {
        main: "Pää",
        rare: "Harvinainen",
        plat: "100%",
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
        releasegame: "Vapauta peli",
        releasegamesub: [
            `Käynnistä taustalla oleva Worker-prosessi uudelleen ja vapauta nykyinen peli seurannasta`,
            `Kokeile tätä vaihtoehtoa, jos olet äskettäin sulkenut pelin, mutta Steam näyttää sen edelleen käynnissä olevana, tai jos Steam Achievement Notifier näyttää edelleen seuraavan jo suljettua peliä`
        ],
        noupdateavailable: "Ei päivityksiä saatavilla",
        latestversion: "Uusin versio asennettu",
        missingdeps: "Puuttuva riippuvuus",
        missingdepssub: [
            `Näyttää siltä, että yrität ottaa käyttöön vaihtoehdon <span class="hl">Ota Steam-näyttökuva</span>. Kuitenkin Linuxissa näyttökuvia ei voida laukaista automaattisesti ilman ensin asentamalla paketti <code class="dialogcode">xdotool</code>`,
            `Suorita <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> asentaaksesi tämän riippuvuuden, mikä mahdollistaa Steam-näyttökuvien ottamisen tällä laitteella`
        ],
        restartapp: "Käynnistä sovellus uudelleen",
        restartappsub: [
            `Jos asiat eivät toimi oikein, käytä tätä vaihtoehtoa sulkeaksesi ja avataksesi sovelluksen uudelleen`,
            `Jos ongelma jatkuu sovelluksen uudelleenkäynnistyksen jälkeen, harkitse sen raportoimista käyttämällä sisäänrakennettuja linkkejä aloitusnäytössä`
        ]
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
            title: "Kieli"
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
                rareonly: "Vain harvinaiset",
                all: "Kaikki",
                off: "Pois päältä",
                showpercent: "Näytä prosenttiosuus",
                soundonly: "Vain ääni",
                extwin: "Virtailmoitukset",
                audiosrc: "Äänilähde",
                notify: "Ilmoitus",
                app: "Sovellus",
                nowtracking: "Näytä seurantan ilmoitus",
                nowtrackingscale: "Seurantamittakaava",
                shortcuts: "Ilmoituspikakuvakkeet"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Ota Steam-ruutukaappaus",
                screenshots: "Lisämedia",
                off: "Pois päältä",
                overlay: "Ruutukaappaus ilmoituksen päällekkäisyydellä",
                monitors: "Ruutukaappauksen lähde",
                ovpos: "Päällekkäisyyden sijainti",
                ovmatch: "Vastaava mukautuksen sijainti",
                ovpath: "Ruutukaappauksen polku",
                ssdelay: "Ruutukaappauksen viive",
                notifyimg: "Ilmoituskuva",
                imgpath: "Kuvan polku"
            }
        },
        accessibility: {
            title: "Saatavuus",
            content: {
                noanim: "Poista sovellusikkunan animaatiot käytöstä",
                nvda: "Ota NVDA-tuki käyttöön",
                tooltips: "Näytä työkaluvihjeet"
            }
        },
        advanced: {
            title: "Edistynyt",
            content: {
                pollrate: "Kyselytaajuus",
                releasedelay: "Julkaisuviive",
                maxretries: "Maksimi Uudelleenyritysmäärä",
                notifydebug: "Näytä Ilmoitus Vianmäärityksestä",
                usecustomfiles: "Käytä Mukautettuja Sovellustiedostoja",
                showcustomfiles: "Näytä Mukautetut Sovellustiedostot"
            }
        },        
        misc: {
            title: "Sekalaiset",
            content: {
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
                customfont: "Mukautettu Fontti"
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
                bgimgbrightness: "Kirkkaus",
                brightness: "Kirkkaus",
                roundness: "Pyöristys",
                fontsize: "Fontin Koko",
                opacity: "Läpinäkyvyys",
                bgonly: "Vain Tausta"
            }
        },
        colors: {
            title: "Värit",
            content: {
                primarycolor: "Ensisijainen Väri",
                secondarycolor: "Toissijainen Väri",
                tertiarycolor: "Kolmanneksi Väri",
                fontcolor: "Fontin Väri",
                fontoutline: "Fontin Reunaviiva",
                fontoutlinecolor: "Reunaviivan Väri",
                fontshadow: "Fontin Varjo",
                fontshadowcolor: "Varjon Väri"
            }
        },
        icons: {
            title: "Kuvakkeet",
            content: {
                iconroundness: "Kuvakkeen Pyöristys",
                plat: "100% Logo",
                usegameicon: "Käytä Peli-ikonia",
                logo: "Logo",
                decoration: "Koristelu",
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
                resetcustompos: "Palauta"
            }
        },
        theme: {
            title: "Teema",
            content: {
                savetheme: "Tallenna Teema",
                sub: [
                    `Tallennetut <span class="hl">Käyttäjän Teemat</span> voidaan valita <span class="hl">Valitse Teema</span> -valikosta Aloitusnäytössä.`,
                    `Varmista, että <span class="hl">Teeman Nimi</span> on <u>yksilöllinen</u> - nimi, joka vastaa olemassa olevaa teemaa, <u>korvaa aiemman</u>!`
                ],
                placeholder: "Teeman Nimi",
                theme: "Teema"
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
        desktop: "Vaihda työpöydän pikakuvaketta sovelluksen käynnistämiseksi",
        startwin: "Käynnistä Steam Achievement Notifier automaattisesti kirjautumisen jälkeen",
        startmin: "Piilota sovelluksen käyttöliittymäikkuna käynnistyksen jälkeen, kunnes se avataan järjestelmälokista",
        nohwa: `Poista käytöstä laitteistokiihdytys, mikä voi parantaa suorituskykyä järjestelmissä, joissa on vähemmän resursseja tai järjestelmissä ilman omistettua GPU:ta<br><br><span class="ttdesc">Sovellus käynnistyy uudelleen tämän asetuksen käyttöönoton/poistamisen jälkeen</span>`,
        litemode: "Poista käytöstä kaikki vuorovaikutteiset käyttöliittymäelementit ja tarjoa vain rajoitettu sovellustoiminnallisuus järjestelmälokikuvakkeen kautta. Saattaa parantaa sovelluksen käyttämien resurssien käyttöä",
        rarity: "Prosenttiosuus, jolla harvinaiset saavutusilmoitukset laukaistaan. Kaikki saavutukset, joiden lukitusprosentti on tämän arvon yläpuolella, näytetään pääilmoituksena",
        showpercent: "Näytä saavutuksen lukitusprosentti ilmoituksessa valituille tyypeille",
        soundonly: "Poista ilmoitukset käytöstä ja toista vain äänet, jotka on määritetty Mukauttajassa",
        extwin: "Luo piilotettu taustailmoitusikkuna, joka kuvaa parhaillaan näytöllä näkyviä ilmoituksia. Tämä ikkuna voidaan lisätä ikkunan kaappaussisällöksi suoratoistosovelluksissa, kuten OBS",
        audiosrc: "Valitse äänilähde (tai poista käytöstä), jota sovellus tuottaa",
        nowtracking: "Näytä ilmoitus, joka ilmoittaa, että juoksevan pelin saavutuksia seurataan",
        nowtrackingscale: `Aseta seurantan ilmoituksen koko`,
        shortcuts: "Lähetä testi-ilmoitus näppäinkomennolla. Pikakuvakkeet voidaan mukauttaa kullekin ilmoitustyypille",
        steamss: "Ota Steam-ruutukaappaus, kun saavutus avataan",
        screenshots: "Valitse lisämedian tyyppi, joka luodaan ilmoituksen näyttämisen yhteydessä",
        monitors: "Näyttö, joka tallennetaan ruutukaappauksessa",
        ovpos: "Ilmoituksen päällekkäisyyden sijainti ruutukaappauksessa",
        ovmatch: "Vastaava näytön sijainti Mukauttajassa tälle ilmoitustyypille",
        ovpath: "Polku, johon tämän asetuksen avulla luodut ruutukaappaukset tallennetaan",
        ssdelay: "Viive ilmoituksen näyttämisestä ruutukaappauksen ottamiseen",
        sspreview: "Näytä esikatselu, miten ruutukaappaus näyttää tallennettaessa",
        noanim: "Poista sovellusikkunan kaikki animaatiot ja siirtymäefektit käytöstä",
        nvda: "Kopioi saavutustiedot leikepöydälle, kun saavutus avataan, jotta ne voidaan lukea näytönlukijasovelluksella, kuten NVDA",
        tooltips: "Näytä työkaluvihjeet, kun hiiren kohdistin on tiettyjen käyttöliittymäelementtien päällä",
        pollrate: `Aseta päivitysväli saavutustietojen aikana pelattaessa<br><br><span class="ttdesc">Suorituskyky voi lisääntyä/vähentyä arvon tai järjestelmän laitteiston mukaan. Korkeammat arvot johtavat yleensä pienempään järjestelmän kuormitukseen, mutta voivat viivästyttää ilmoituksia</span>`,
        releasedelay: `Aseta kuinka kauan taustaprosessin on odotettava uudelleenkäynnistymistä sen jälkeen, kun nykyinen peli on julkaistu. Vaikuttaa sekä automaattiseen prosessin seurantaan että manuaalisesti linkitettyihin peleihin.<br><br><span class="ttdesc">Mahdollistaa pidemmän aikajakson Steamworksin täydelliseen vapauttamiseen sovelluksesta. Tämän arvon lisääminen voi estää epätavallista käyttäytymistä, kuten aiemmin suljetun pelin seurannan</span>`,
        maxretries: `Aseta enimmäismäärä uudelleenyrittämisiä linkittää käynnissä oleva prosessi havaittuun AppID:hun. Vaikuttaa sekä automaattiseen prosessin seurantaan että manuaalisesti linkitettyihin peleihin.<br><br><span class="ttdesc">Yrityksiä linkittää suoritetaan kerran sekunnissa. Jos käynnissä oleva prosessi ei ole linkitetty nykyiseen AppID:hun tämän yritysmäärän jälkeen, palautetaan virheellinen prosessi. Tällaisissa tapauksissa peli on vapautettava manuaalisesti Järjestelmälokero > Asetukset > Vapauta peli -välilehdellä</span>`,
        notifydebug: "Luo DevTools-ikkuna kaikille ilmoituksille. Hyödyllinen vianmääritykseen ja ongelmanratkaisuun ilmoitusongelmien yhteydessä",
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
        customtext: "Aseta mukautettu viesti, joka näytetään ilmoituksessa",
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
        bgimgbrightness: "Aseta kuvan kirkkaus ilmoituksen taustaksi",
        brightness: "Aseta pelitaiteen kirkkaus ilmoituksen taustaksi",
        roundness: "Aseta ilmoituksen reunojen pyöristys",
        fontsize: "Aseta fontin koko ilmoituksessa",
        opacity: "Aseta ilmoituksen kokonaisläpinäkyvyys",
        bgonly: "Aseta läpinäkyvyys vain ilmoituksen taustalle, pitäen muut elementit täydessä läpinäkyvyydessä",
        primarycolor: "Aseta ilmoituksen ensisijainen väri",
        secondarycolor: "Aseta ilmoituksen toissijainen väri",
        tertiarycolor: "Aseta ilmoituksen kolmas väri",
        fontcolor: "Aseta kaiken ilmoituksessa näkyvän tekstin väri",
        fontoutline: "Lisää ääriviiva kaikelle ilmoituksessa näkyvälle tekstille",
        fontoutlinecolor: "Aseta tekstin ääriviivan väri",
        fontshadow: "Lisää varjostus kaikelle ilmoituksessa näkyvälle tekstille",
        fontshadowcolor: "Aseta tekstin varjostuksen väri",
        iconroundness: "Aseta saavutuksen/pelin kuvakkeen pyöristys ilmoituksessa",
        plat: "Lataa kuvatiedosto 100% -kuvakkeeksi",
        usegameicon: "Korvaa oletusilmoituksen kuvake nykyisen pelin kuvakkeella",
        showhiddenicon: "Näytä kuva, joka osoittaa, että saavutus on piilotettu ilmoituksessa",
        hiddenicon: "Lataa kuvatiedosto korvaamaan piilotetun saavutuksen kuvake",
        logo: "Lataa kuvatiedosto korvaamaan Logo-kuvake",
        decoration: "Lataa kuvatiedosto korvaamaan Decoration-kuvake",
        showdecoration: "Vaihda Decoration-kuvakkeen näkyvyys",
        replacelogo: "Korvaa ilmoituksen logoikoni valitulla koristeella",
        pos: "Aseta ilmoituksen näytöllä oleva sijainti",
        usecustompos: "Ota käyttöön mukautettu sijainti ilmoitukselle",
        setcustompos: "Aseta mukautettu sijainti ilmoitukselle",
        resetcustompos: "Palauta ilmoituksen sijainti oletusmukautettuun sijaintiin",
        savetheme: "Tallenna kaikki mukauttamisasetukset uutena teemana",
        visibilitybtn: "Vaihda elementin näkyvyys mukautettuihin esikatseluihin ja testi-ilmoituksiin",
        delbtn: "Palauta elementti oletusarvoon",
        link: `Avaa <span class="hl">Hallinnoi Liitettyjen Pelien Valikko</span>`,
        imgpath: "De locatie waar meldingsafbeeldingen die door deze optie zijn gegenereerd, worden opgeslagen"
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
    "linkgame": {
        "content": {
            "exepath": "Suoritettavan tiedoston polku",
            "nodata": "Ei tietoja",
            "manage": "Hallinnoi liitettyjä pelejä",
            "managesub": [
                `Liitä pelin <span class="hl">suoritettava tiedosto</span> tiettyyn <span class="hl">AppID</span>:hen manuaalisesti tai <span class="hl">poista liitos</span> olemassa olevalta`,
                `Steam Achievement Notifier ei enää käytä <span class="hl">automaattista prosessiseurantaa</span> millekään <span class="hl">liitetyille peleille</span> - sen sijaan määritettyä <span class="hl">suoritettavaa tiedostoa</span> seurataan aina, kun vastaava <span class="hl">AppID</span> havaitaan`,
                `<span class="hl" id="appidhelp"><u>Kuinka löydän Steam-pelin AppID:n?</u></span>`
            ],
            "new": "Uusi...",
            "linknew": "Uusi liitetty peli",
            "linknewsub": [
                `Luo uusi linkki <span class="hl">pelinsuoritettavan tiedoston</span> ja siihen liittyvän <span class="hl">AppID:n</span> välille`,
                `Luotuaan linkkejä ne voidaan <span class="hl">poistaa</span> aikaisemman <span class="hl">Hallinnoi liitettyjä pelejä</span> -valintaikkunan kautta`
            ],
            "link": "Linkitä",
            "findappid": "Etsi AppID",
            "findappidsub": [
                `Jokaisella Steam-pelillä on siihen liittyvä yksilöllinen numero - kutsutaan <span class="hl">AppID:ksi</span>. Voit löytää minkä tahansa Steam-pelin AppID:n tarkistamalla yhden seuraavista tavoista:`,
                `Steam-asiakkaassa, napsauta hiiren kakkospainikkeella peliä <span class="hl">Kirjastossa</span> ja valitse <i>Ominaisuudet</i> > <i>Päivitykset</i> - AppID näkyy täällä`,
                `Pelin <span class="hl">Kaupan sivun URL-osoite</span> - se on numero, joka on listattu <span class="hl">app/</span> -jälkeen: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Verkkosivustot kuten <span class="hl">SteamDB</span> - <span class="hl">App-tiedot</span> -osio listaa AppID:n jokaiselle pelille`
            ]
        }
    }
}