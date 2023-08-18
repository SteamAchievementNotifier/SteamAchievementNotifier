export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Ei tunnistettua käyttäjää",
                tt: "Steam-käyttäjä, jonka saavutuksia seurataan tällä hetkellä"
            },
            gamelbl: {
                elem: gameName ? gameName : "Ei tunnistettua peliä",
                tt: "Peli, jonka saavutuksia seurataan tällä hetkellä"
            },
            previewbtn: {
                tt: "Esikatsele valittua ääntä"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Oletus (Äänitiedostoa ei valittu)" : custom.sounddir ? custom.sounddir : "Oletus (Äänikansiota ei valittu)"
            },              
            soundmodelbl: {
                elem: "Äänitila:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "tiedosto" : "satunnainen"
            },
            togglemain: {
                elem: "Pää",
                tt: "Tärkeä saavutusilmoitus"
            },
            togglerare: {
                elem: "Harvinainen",
                tt: "Harvinaisen saavutuksen ilmoitus"
            },
            toggleplat: {
                elem: "100%",
                tt: "100 %:n saavutuksen ilmoitus"
            },
            progresscirclewrapper: {
                tt: "Näytä muokatun ilmoituksen esikatselu"
            },
            testbtnwrapper: {
                elem: "Näytä testi-ilmoitus",
                tt: "Näytä muokatun ilmoituksen esikatselu",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Muokkaa...",
                tt: "Avaa ilmoituksen mukauttamisvalikko",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam ei ole käynnissä"
            },
            updatebtn: {
                tt: "Päivitys saatavilla"
            },
            kofibtn: "Lahjoita Ko-Fi:ssa!",
            discordbtn: "Liity Discordiin!",
            githubbtn: "Raportoi ongelma GitHubissa!",
            settingstitlelbl: {
                elem: "Asetukset"
            },
            configuration: {
                elem: "Asettelu",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Kieli",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Käyttöjärjestelmä",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Ilmoitukset",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Näyttökuvat",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Saavutettavuus",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Muut",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versio"
            },                  
            apikeybtn: {
                tt: "Klikkaa tästä saadaksesi Steam Web API -avaimen"
            },
            apikey: {
                placeholder: "Syötä API-avain",
                tt: "Steam-tiliisi liitetty Steam Web API -avain"
            },
            eyebtn: {
                tt: "Näytä/piilota API-avain"
            },
            apikeylbl: {
                elem: "Hae API-avain"
            },
            steam64idbtn: {
                tt: "Klikkaa tästä saadaksesi Steam64-tunnuksesi"
            },
            steam64id: {
                placeholder: "Syötä Steam64 ID",
                tt: "Steam-tiliisi liitetty Steam64-tunnus"
            },
            steam64idlbl: {
                elem: "Hae Steam64-tunnus"
            },
            switchaccountspan: {
                elem: "Vaihda tilejä"
            },
            switchaccountbtn: {
                tt: "Vaihda liitettyjen Steam-tilien välillä"
            },
            testconnectionlbl: {
                elem: "Testaa yhteys",
                tt: "Testaa yhteys Steam Web API:in"
            },
            lang: {
                tt: "Aseta kieli käyttöliittymälle ja ilmoituksille"
            },
            desktop: {
                elem: "Luo työpöytäkuvake",
                tt: "Luo sovelluksen käynnistämiseen tarkoitettu kuvake työpöydälle",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Käynnistyksen yhteydessä",
                tt: "Aja sovellus automaattisesti Windowsin käynnistyessä",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Käynnistyksen jälkeen pienennettynä",
                tt: "Pienennä sovellus järjestelmälokerossa sen käynnistämisen jälkeen",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Poista laitteistokiihdytys käytöstä",
                tt: "Poista laitteistokiihdytys käytöstä sovellusikkunassa",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Lite-tila",
                tt: "Poistaa käytöstä pääsovellusikkunan säästääkseen järjestelmäresursseja. Vain vähimmäisvalinnat ovat käytettävissä järjestelmälokeron kuvakkeen kautta vuorovaikutuksessa sovelluksen kanssa",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Harvinaisuusprosentti",
                tt: `Näyttää vain ne saavutukset, joiden globaali lukitusprosentti on alle tämän numeron, "Harvinaisena" ilmoituksena`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Vain äänitila",
                tt: "Poista ilmoitukset käytöstä, mutta soita valittu ääni saavutuksia avattaessa",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Näytä kaikki lukitusprosentit",
                tt: "Näytä globaalit lukitusprosentit kaikentyyppisissä ilmoituksissa",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Toista ulkoisessa ikkunassa",
                tt: `Ulkoikkuna, joka kahdentaa kaikki ilmoitukset. Voidaan kohdistaa suoratoisto-/näytönkaappausohjelmilla.<div class="ttwarn">Tämä ikkuna on <u>täysin läpinäkyvä</u>. Ikkunan nykyisen sijainnin esittämiseksi pidä <span class="ttcode">Ctrl</span>-näppäin alhaalla.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Näytä "Nyt seurataan"-ilmoitus`,
                tt: `Vaihda "Nyt seurataan"-ilmoitus, kun peli käynnistetään`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Ilmoituspikakuvakkeet",
                tt: "Aseta näppäinpikanäppäin Testi-ilmoitusten laukaisemiseksi",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Aseta pikakuvake testi-ilmoituksen laukaisemiseksi tälle tyypille"
            },
            sctabmain: {
                tt: "Pääilmoitus Pikakuvake"
            },
            sctabrare: {
                tt: "Harvinainen ilmoitus Pikakuvake"
            },
            sctabplat: {
                tt: "100 % ilmoitus Pikakuvake"
            },
            screenshotmode: {
                tt: "Valitse automaattisten saavutuskuvakaappausten tila"
            },
            displayscreenshot: {
                elem: "Näytä kuvakaappaus ilmoituksessa",
                tt: "Näytä kuvakaappaus esikatseluna saavutusilmoituksessa",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steamin kuvakaappausnäppäin",
                tt: "Määritä Steam-asiakkaasi kuvakaappausnäppäin ottamaan Steamin omia kuvakaappauksia saavutuksia avattaessa",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Pääilmoituksen päällekkäisyys"
            },
            ovtabrare: {
                tt: "Harvinaisen ilmoituksen päällekkäisyys"
            },
            ovtabplat: {
                tt: "100 %:n ilmoituksen päällekkäisyys"
            },
            monitor: {
                elem: "Näyttö",
                tt: "Valitse näyttö, jota käytetään kuvakaappauksen lähteenä",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Päällekkäisyysasento",
                tt: "Aseta ilmoituksen päällekkäisyysasento",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Polku",
                tt: "Aseta tallennuskohde, jonne kuvakaappaukset tallennetaan",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Esikatselu",
                tt: "Esikatsele ilmoituksen päällekkäisyys",
                query: "label"
            },
            noanim: {
                elem: "Poista ikkunaanimaatiot käytöstä",
                tt: "Poista siirtymäanimaatiot sovellusikkunassa käytöstä",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Ota käyttöön NVDA-tuki",
                tt: "Kopioi ilmoituksen sisältö leikepöydälle NVDA-näytönlukuohjelmiston lukemista varten",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Näytä työkaluvinkit",
                tt: "Vaihda työkaluvihjeiden näyttäminen, kun sovelluksen elementtien päällä leijutaan",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Näytä ilmoituksen DevTools",
                tt: "Avaa ilmoituksen kehittäjätyökalupaneeli laukaistessa",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Näytä tietosuojakäytäntö",
                tt: "Näytä Steam Achievement Notifierin tietosuojakäytäntö",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Liity beetakanavaan",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Avaa sovellusloki",
                tt: "Näytä ja jaa sovelluslokin sisältö",
                query: "label"
            },
            resetbtn: {
                elem: "Nollaa sovellus",
                tt: "Poista kaikki tallennetut tiedot ja käynnistä sovellus uudelleen",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Keskeytä/toista ilmoituksen animaatio"
            },
            customiserreplay: {
                tt: "Toista ilmoituksen animaatio uudelleen"
            },
            customisersavepreset: {
                tt: "Tallenna nykyiset muokkaukset uutena ilmoituspohjana"
            },
            tabbtnnext: {
                tt: "Seuraava"
            },
            tabbtnprev: {
                tt: "Takaisin"
            },
            notificationpreset: {
                elem: "Esiasetus",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Ilmoituspohja",
                tt: "Valitse ilmoituspohja muokkaamista varten",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Harvinainen animaatio",
                tt: "Vaihda kuvakkeen taustan animaatio",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Näytä kaikki tiedot",
                tt: `Näytä kaikki saatavilla olevat ilmoituksen tiedot`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Näyttöaika",
                tt: "Ilmoituksen näyttöaika",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Skaala",
                tt: "Ilmoituksen koko<br><i>*Ei näy esikatseluikkunassa</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Mukautettu teksti",
                tt: "Näytä mukautettu viesti ilmoituksessa",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Käytä pelin nimeä",
                tt: "Näytä nykyisen pelin nimi ilmoituksessa",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Tyyli",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Taustan tyyli",
                tt: "Aseta ilmoituksen taustan tyyli",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Väriaste",
                tt: "Aseta väriasteen suunta",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Taustakuva",
                tt: "Valitse kuva tiedostona ilmoituksen taustaksi",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Pelin kuvan kirkkaus",
                tt: "Aseta pelin kuvan taustan kirkkaus",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Pyöristys",
                tt: "Aseta ilmoituksen kulmien pyöristys",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Fontin koko",
                tt: "Aseta fontin skaala",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Läpinäkyvyys",
                tt: "Aseta ilmoituksen läpinäkyvyys",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Vain tausta",
                tt: "Käytä läpinäkyvyyttä vain taustassa, jättäen tekstin ja kuvat täysin peittäviksi",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Värit",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Ensisijainen väri",
                tt: "Aseta ensisijainen ilmoituksen väri",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Toissijainen väri",
                tt: "Aseta toissijainen ilmoituksen väri",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Tekstin väri",
                tt: "Aseta tekstin väri",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Tekstin ääriviiva",
                tt: "Lisää ääriviiva kaikelle ilmoituksen tekstille",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Ääriviivan väri",
                tt: "Aseta tekstin ääriviivan väri",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Tekstin varjo",
                tt: "Lisää varjo kaikelle ilmoituksen tekstille",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Varjon väri",
                tt: "Aseta tekstin varjon väri",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Kuvake",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Kuvakkeen pyöristys",
                tt: "Aseta ilmoituksen kuvakkeen pyöristys",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Mukautettu kuvake",
                tt: "Käytä kuvatiedostoa mukautettuna kuvakkeena",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Mukautettu kuvake",
                tt: "Valitse kuva tiedostona mukautettuna kuvakkeena",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Palauta mukautettu kuvake`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Räätälöity 100%-kuvake",
                tt: `Käytä kuvatiedostoa räätälöitynä 100% -kuvakkeena`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Räätälöity 100%-kuvake",
                tt: `Valitse kuvatiedosto määritettäväksi räätälöitynä 100% -kuvakkeena`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Palauta räätälöity 100% -kuvake`,
                query: ".sanboxlbl"
            },                   
            usegameicon: {
                elem: "Käytä pelin kuvaketta",
                tt: "Käytä nykyisen pelin kuvaketta",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Sijainti",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Näytön sijainti",
                tt: "Aseta ilmoituksen sijainti näytöllä",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Mukautettu sijainti",
                tt: "Käytä mukautettua sijaintia ilmoitukselle",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Aseta sijainti",
                tt: "Aseta mukautettu sijainti ilmoitukselle",
                query: "label"
            },
            animdir: {
                elem: "Animaation suunta",
                tt: "Aseta ilmoituksen animaation suunta",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "TIETOSUOJAKÄYTÄNTÖ"
            },
            ppusagetitle: {
                elem: "STEAM WEB API -DATAN KÄYTTÖ"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier käyttää Valven <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API:a</span> käyttäjän Steam-tilien tietojen noutamiseen ja näyttämiseen käyttäjän tarjoaman Steam API Key/Steam64 ID -yhdistelmän avulla. Tämä tieto sisältää:`
            },
            ppstats: {
                elem: "Lukittujen ja avattujen saavutusten tilastot"
            },
            ppusername: {
                elem: "Steam-käyttäjänimesi"
            },
            ppsteamgames: {
                elem: "Pelatut Steam-pelisi"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier saattaa tulevaisuudessa käyttää lisää Steam Web API -dataa tarjotakseen lisätoimintoja ja päivityksiä."
            },
            ppkey64title: {
                elem: "STEAM API KEY/STEAM64 ID -KÄYTTÖ"
            },
            ppauth: {
                elem: "Steam Achievement Notifier edellyttää käyttäjän syöttävän Steam API Key/Steam64 ID -yhdistelmän pääsyn saamiseksi Steam Web API:in."
            },
            ppnoauth: {
                elem: "Ilman tätä tietoa verkkolinkkejä (jotka on tarjottu Valven käyttämiseksi Steam Web API:in tietojen noutamiseksi) käyttäjän Steam-tilien tietoihin - mukaan lukien saavutustietoihin - ei voida käyttää."
            },
            ppstoragetitle: {
                elem: "STEAM WEB API -DATAN TALLENNUSTAPA"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier tallentaa tilapäisesti Steam Web API -dataa käyttäjän tietokoneelle ainoastaan sovelluksen käyttöön. Kaikki tämän datan tilapäinen tallennus on tarkoitettu ainoastaan Steam Achievement Notifierin käyttöön, ja normaaleissa olosuhteissa kaikki ei-pysyvä Steam Web API -data poistetaan paikallisesta tallennustilasta sovelluksen sulkemisen yhteydessä."
            },
            pppersist: {
                elem: "Käyttäjän laitteella pysyvästi tallennettu data sisältää ainoastaan sovelluksen käyttöön tallennettuja tietoja käyttäjän mukavuuden vuoksi, kuten Steam Web API -avain ja Steam64 ID."
            },
            ppdelete: {
                elem: "Tämä data voidaan myös poistaa manuaalisesti käyttäjän toimesta milloin tahansa tarvittaessa. Steam Achievement Notifierin luomat tiedostot sijaitsevat seuraavassa hakemistossa:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Tällä hetkellä ei tueta"
            },
            ppcollecttitle: {
                elem: "SUHTAUTUMINEN DATANKERUUSEEN"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier ei koskaan lähetä tai tallenna käyttäjän tietoja käyttäjän paikallisesta tiedostojärjestelmästä ulkopuolelle ilman käyttäjän nimenomaista lupaa. Tämä sisältää kaiken tiedon, joka on noudettu Steam Web API:lla sovelluksen käyttöä varten, mukaan lukien Steam API Key/Steam64 ID -yhdistelmä, joka on annettu sovellukselle pääsyn saamiseksi Steam Web API:in."
            },
            ppconsent: {
                elem: "Käyttäjän suostumuksen vahvistamisen ja sen jälkeen käytön kautta joko nykyisten tai tulevien ominaisuuksien käyttöönotolla, jotka on suunniteltu lähettämään tietoa ulkopuolelle, käyttäjän oletetaan antaneen siihen hiljaisen suostumuksen. Näissä tapauksissa käyttäjälle ilmoitetaan aina lähetettävän tiedon luonteesta, ja käyttäjälle esitetään pyyntö vahvistaa suostumuksensa tiedon lähettämiseen sovelluksen ulkopuolelle."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier sulkee tarkoituksella pois kaikki keinot ulkoisesti päästä, tarkastella tai kerätä mitään tietoja, jotka on annettu sovellukselle käyttäjän toimesta, mutta nykyisten tai tulevien ominaisuuksien avulla sovellus saattaa pystyä lähettämään tietoa ulkoisesti käyttäjän puolesta, mutta vain heidän suostumuksellaan."
            },
            pprequests: {
                elem: "Pyynnöt Steam Web API:sta saatavan datan noutamiseksi tehdään sovelluksen sisällä käyttäen sisäänrakennettuja menetelmiä, samankaltaisella toiminnallisuudella kuin selaimet tarjoavat. Nämä pyynnöt sisältävät käyttäjän Steam API Key/Steam64 ID -yhdistelmän, joka vaaditaan Steam Web API:n toimesta, mutta niitä ei tarkoituksella tehdä saataville tai altisteta käytettäväksi muissa sovelluksissa."
            },
            ppusertitle: {
                elem: "KÄYTTÄJÄN VASTUU"
            },
            ppsteamtou: {
                elem: `LATAAMALLA JA KÄYTTÄMÄLLÄ MITÄ TAHANSA VIRALLISESTI JULKAISTUA STEAM ACHIEVEMENT NOTIFIERIN VERSIOTA <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">VIRALLISESTA GITHUB-ARKISTOSTA</span>, SINÄ, KÄYTTÄJÄ, NOUDATAT VÄLILLISESTI STEAM WEB API:N KÄYTTÖEHTOJEN KOHTIA 7 JA 8.`
            },
            gamedetails: "Pelin tiedot",
            mustbepublic: "tulee asettaa julkiseksi",            
            nosoundfile: "Oletus (Äänitiedostoa ei valittu)",
            nosoundfolder: "Oletus (Äänikansiota ei valittu)",
            file: "Tiedosto",
            randomised: "Satunnainen",              
            audioselectdialog: `Valitse äänitiedosto ${custom.mode === "file" ? "tiedostona" : "kansiona"}`,
            imgselectdialog: "Valitse kuvatiedosto",
            unsupported: "Tiedostomuoto ei ole tuettu!",
            novalidaudiofiles: "Ei kelvollisia äänitiedostoja!",
            nolocate: "Tiedostoa ei löydetty!",
            switchaccountstitle: "Vaihda käyttäjää",
            noaccounts: "Lisää käyttäjä aloittaaksesi!",
            connecting: "Yhdistetään...",
            connected: "Yhdistetty",
            testsuccessuser: "Valmis",
            testsuccess1: `Varmista, että <span>Pelitiedot</span> on asetettu <span>Julkiseksi</span> <a href="${privacysettings}">Steamin yksityisyysasetuksissa</a>`,
            testsuccess2: `Tarkista, että pelinäytön tila on asetettu <span>Reunukseton</span>, jotta ilmoitukset näkyvät peli-ikkunan yläpuolella`,
            noapikeytitle: "API-avain puuttuu",
            noapikeytxt: "Syötä API-avain",
            noapikeyhint: `Napsauta <img src="./icon/key.svg" alt=""> -kuvaketta saadaksesi API-avaimen`,
            nosteam64idtitle: "Steam64 ID puuttuu",
            nosteam64idtxt: "Syötä Steam64 ID",
            nosteam64idhint: `Napsauta <img src="./icon/id.svg" alt=""> -kuvaketta saadaksesi Steam64 ID:n`,
            invalidapikeytitle: "Virheellinen API-avain!",
            invalidapikeymsg: "Steam Web API:ta ei voida käyttää annetulla API-avaimella",
            invalidapikeydetail1: "Tarkista, että API-avain on oikein",
            invalidapikeydetail2: "Luo uusi API-avain tilillesi",
            invalidsteam64idtitle: "Virheellinen Steam64 ID!",
            invalidsteam64idmsg: "Steam-tilaa ei löydy annetulla Steam64 ID:llä",
            invalidsteam64iddetail1: "Tarkista, että olet antanut oikean Steam64 ID:n Steam-tilillesi",
            nonetworkfound: "Yhteyttä ei löytynyt",
            connecttonetwork: "Yhdistä tietokone verkkoon ja yritä uudelleen",
            testdefaulterrortitle: "Virhe!",
            testdefaulterrormsg: "Virhe yhdistettäessä Steam Web API:in",
            testdefaulterrordetail1: "Ilmoita tästä ongelmasta Discordissa tai GitHubissa!",
            sspath: "Valitse kuvakaappauksen tallennuskansio",
            wronguser: user ? `${user} ei ole kirjautunut Steamiin!` : "Ei löydetty linkitettyjä käyttäjätilejä!",
            switchuser: "Klikkaa tästä vaihtaaksesi käyttäjää",
            trackingfailed: "Seuranta epäonnistui!",
            checkapplog: "Tarkista sovelluksen lokitiedosto tiedoista",
            soon: "Tulossa pian!",
            gamecomplete: "100% suoritettu",
            gametitle: "Pelin nimi",
            achievementunlocked: "Saavutus saavutettu",
            achievementtitle: "Saavutuksen nimi",
            allachievements: "Olet saavuttanut kaikki saavutukset!",
            achievementdesc: "Saavutuksen kuvaus",
            show: "Näytä",
            quit: "Lopeta",
            off: "Pois",
            steamss: "Steam-pelin sisäinen kuvakaappaus",
            overlayss: "Kuvakaappaus ilmoitusten kanssa",
            match: "Sovita muokkaus",
            topleft: "Ylävasen",
            topcenter: "Yläkeskusta",
            topright: "Yläoikea",
            bottomleft: "Alavasen",
            bottomcenter: "Alakeskusta",
            bottomright: "Alaoikea",
            solid: "Yksivärinen",
            gradient: "Liukuvärjäys",
            bgimg: "Taustakuva",
            gameart: "Pelimainos",
            up: "Ylös",
            down: "Alas",
            left: "Vasemmalle",
            right: "Oikealle",
            tracking: "Seurataan Nyt",
            inuse: "Käytössä",
            invalidshortcut: "Virheellinen pikakuvake"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Valitse äänitiedosto toistettavaksi saavutuksen saavuttamisen yhteydessä" : "Valitse kansio, joka sisältää äänitiedostoja satunnaisesti toistettavaksi saavutuksen saavuttamisen yhteydessä")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Tässä on loki siitä, mitä on tapahtunut sovelluksen käynnistämisestä lähtien"
            },
            copylbl: {
                elem: "Kopioi lokin sisältö"
            },
            openlbl: {
                elem: "Luo lokitiedosto"
            },
        }    

        return translations
    }
}