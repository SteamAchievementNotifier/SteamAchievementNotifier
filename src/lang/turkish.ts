export const translations = {
    global: {
        main: "Ana",
        rare: "Nadir",
        plat: "100%",
        test: "Test Bildirimleri",
        topleft: "Sol Üst",
        topcenter: "Üst Orta",
        topright: "Sağ Üst",
        bottomleft: "Sol Alt",
        bottomcenter: "Alt Orta",
        bottomright: "Sağ Alt",
        ok: "Tamam",
        preview: "Önizleme",
        save: "Kaydet",
        back: "Geri",
        settings: "Ayarlar",
        appversion: "Uygulama Sürümü",
        image: "Resim",
        audio: "Ses",
        folder: "Klasör",
        font: "Yazı Tipi",
        select: "Seç",
        gametitle: "Oyun Başlığı",
        congrats: "Tebrikler!",
        achievementunlocked: "Başarı Kilidi Açıldı",
        gamecomplete: "Oyun Tamamlandı: 100%",
        achievementdesc: "Test Bildirimini Göster düğmesine tıklandı",
        gamecompletedesc: "Tüm başarılarınızı kilidini açtınız!",
        defaultcustomfont: "Varsayılan (Yazı Tipi Seçilmedi)",
        defaultsoundfile: "Varsayılan (Dosya Seçilmedi)",
        defaultsounddir: "Varsayılan (Klasör Seçilmedi)",
        nowtracking: "Şu anda takip edilen başarılar:",
        nopreview: "Önizleme yerel işletim sistemi için kullanılamaz",
        options: "Seçenekler",
        resetwindow: "Pencereyi Sıfırla",
        show: "Göster",
        exit: "Çıkış",
        releasegame: "Oyunu Serbest Bırak",
        releasegamesub: [
            `Arka plan Worker sürecini yeniden başlatın ve mevcut oyunun izlenmesini bırakın`,
            `Son zamanlarda bir oyunu kapattıysanız ancak Steam hala onu çalışıyor olarak gösteriyorsa veya Steam Achievement Notifier hala kapalı bir oyunu izliyor olarak gösteriyorsa, bu seçeneği deneyin`
        ],
        noupdateavailable: "Güncelleme Yok",
        latestversion: "En Son Sürüm Yüklü",
        missingdeps: "Eksik Bağımlılık",
        restartapp: "Uygulamayı Yeniden Başlat",
        restartappsub: [
            `Eğer işler düzgün çalışmıyorsa, uygulamayı kapatıp yeniden açmak için bu seçeneği kullanın`,
            `Uygulamayı yeniden başlattıktan sonra sorun devam ederse, lütfen ana ekrandaki yerleşik bağlantıları kullanarak bildirin`
        ],
        suspend: "Askıya al",
        resume: "Devam et",
        new: "Yeni...",
        nodata: "Veri Yok",
        findappid: "AppID Bul",
        findappidsub: [
            `Her Steam oyununun onunla ilişkili benzersiz bir numarası vardır - <span class="hl">AppID</span> olarak adlandırılır. Herhangi bir Steam oyununun ilişkili AppID'sini aşağıdakilerden birini kontrol ederek bulabilirsiniz:`,
            `<span class="hl">Steam istemcisinde</span>, <i>Kütüphanem</i>'deki bir oyuna sağ tıklayın ve <i>Özellikler</i> > <i>Güncellemeler</i> - AppID burada listelenir`,
            `Oyunun <span class="hl">Mağaza sayfasının URL</span>'si - <span class="hl">app/</span>'den sonraki listedir: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `<span class="hl">SteamDB</span> gibi web siteleri - <span class="hl">App Bilgisi</span> bölümü her oyun için AppID'yi listeleyecektir`
        ],
        noexe: "Oyunun EXE dosyası bulunamadı!",
        noexesub: "Daha fazla bilgi için buraya tıklayın",
        noexedialogsub: [
            `Steam Achievement Notifier, bu oyunun çalıştırılabilir dosyasını otomatik olarak bulamadı. Oyunun çalıştırılabilir dosyasının yeri, oyunu "yayınlamak" için gereklidir`,
            `Oyunu manuel olarak yayınlamak için, <i>sağa tıklayın</i> <span class="hl">Sistem tepsisi simgesi</span> > <span class="hl">Seçenekler</span> > <span class="hl">Oyunu Yayınla</span>, veya <span class="hl">Oyunu Yayınla Kısayolu</span>nu kullanın`,
            `Alternatif olarak, aşağıdaki <span class="hl">Link</span> butonuna tıklayarak odaklanmış pencerenin ilişkilendirilmiş çalıştırılabilir dosyasını <span class="hl">Bağlantılı Oyunlar</span> menüsüne ekleyin`,
            `<span class="hl help" id="linkgamehelp"><u>Link butonuna tıkladığımda ne olur?</u></span>`
        ],
        linkgamehelp: "Pencere ile Oyunu Bağla",
        linkgamehelpsub: [
            `<span class="hl">Link</span> butonuna tıkladığınızda, mevcut odaklanmış pencereden alınan bilgilerle <span class="hl">Ayarlar</span> > <span class="hl">Bağlantılı Oyunlar</span> menüsüne yeni bir giriş otomatik olarak eklenir.`,
            `<span class="hl">Link</span> butonuna tıkladıktan sonra 5 saniyelik bir zamanlayıcı başlar`,
            `Zamanlayıcı bitmeden önce, oyun penceresini odaklayın`,
            `Zamanlayıcı sona erdiğinde, mevcut <span class="hl">AppID</span> için yeni bir giriş <span class="hl">Ayarlar</span> > <span class="hl">Bağlantılı Oyunlar</span> menüsüne eklenir, odaklanmış pencerenin ilişkilendirilmiş çalıştırılabilir dosyasını kullanarak`,
            `Tekrar denemeniz gerekiyorsa, <span class="hl">Ayarlar</span> > <span class="hl">Bağlantılı Oyunlar</span> üzerinden girişi kaldırarak <span id="linkhelpunlink"></span> butonuna tıklayın`
        ],
        addlinkfailed: "Pencere bağlantısı kurulamadı",
        addlinkfailedsub: `Yeniden denemek için <span class="hl">Link</span> butonuna tıklayın`,
        webhookunlockmsg: "$user bir başarıyı kilidini açtı",
        webhookunlockmsgplat: "$user tüm başarıları açtı",
        webhookingame: "$gamename'de",
        notconnected: "Bağlantı yok",
        raloghelp: "Oyunum algılanmıyor",
        raenablelog: `Emülatör günlük dosyaları`,
        raenablelogsub: [
            `İç oyun etkinliklerine (mevcut oyun durumu, başarı kilidi bilgisi vb.) erişebilmek için, seçilen her emülatörde harici bir <span class="hl">log dosyasına</span> <u>loglama etkinleştirilmelidir</u>.<br><br>Seçilen her emülatör <u>bu <span class="hl">log dosyasını</span></u> <span class="hl">Log Dosyası Yolu</span> değeri olarak kullanmalıdır.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Ayarlar > Günlük Kaydı</span> aşağıdaki ayarlarla yapılandırılmalıdır:
                    <br>
                    <ul>
                        <li><span class="hllb">Günlük Kaydı Ayrıntı Düzeyi</span>: <span class="hlgreen">AÇIK</span></li>
                        <li><span class="hllb">Önyüz Günlük Kaydı Seviyesi</span>: <span class="hlgreen">1 (Bilgi)</span></li>
                        <li><span class="hllb">Dosyaya Günlük Kaydı</span>: <span class="hlgreen">AÇIK</span></li>
                        <li><span class="hllb">Günlük Dosyalarına Zaman Damgası</span>: <span class="hlred">KAPALI</span></li>
                    </ul>
                    <br>
                    Varsayılan kurulum ayarları kullanıldığında, <span class="hl">"retroarch.log"</span> şu konumda saklanır:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Görünüm > Günlük Konfigürasyonunu Göster</span> aşağıdaki ayarlarla yapılandırılmalıdır:
                    <br>
                    <ul>
                        <li><span class="hllb">Ayrıntı Düzeyi</span>: <span class="hlgreen">Bilgi</span></li>
                        <li><span class="hllb">Günlük Çıktıları</span> > <span class="hlgreen">Dosyaya Yaz</span></li>
                        <li><span class="hllb">Günlük Türleri</span> > <span class="hlgreen">Başarılar (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Varsayılan kurulum ayarları kullanıldığında, <span class="hl">"dolphin.log"</span> şu konumlarda saklanır:
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2 [Nightly]</summary>
                <div>
                    <span class="hl">PCSX2 > Araçlar > Dosya Kaydı Etkinleştir</span> etkinleştirilmelidir
                    <br>
                    <br>
                    Varsayılan kurulum ayarlarıyla, <span class="hl">"emulog.txt"</span> şu konumda saklanır:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> <span class="hl">Duckstation'ın kurulum dizinine</span> <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>indirilip</u></span> taşınmalıdır</li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Ayarlar > Başarılar > RAIntegration (Yalnızca geliştirici)</span> etkinleştirilmelidir
                    <br>
                    <br>
                    Varsayılan kurulum ayarları kullanıldığında, <span class="hl">"RALog.txt"</span> şu konumda saklanır:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Desteklenmeyen Beta",
        betaunsupportedsub: [
            "Steam Achievement Notifier'ın yeni bir sürümü yayımlandı!",
            `<u>Bu Beta sürümü artık desteklenmiyor</u>. Lütfen aşağıdaki <span class="hl">Releases</span> butonunu kullanarak Github'dan en son resmi sürümü indirin ve kurun.`,
            "Test ettiğiniz için teşekkürler! 💜"
        ],
        betaghreleases: "Sürümler",
    },
    app: {
        content: {
            game: "Oyun Bulunamadı",
            customise: "Özelleştir",
            test: "Test Bildirimini Göster"
        }
    },
    settings: {
        language: {
            title: "Dil",
            content: {
                steamlang: "Başarıları Steam diline çevir",
                maxsteamlangretries: "Maksimum Çeviri Deneme Sayısı"
            }
        },
        os: {
            title: "İşletim Sistemi",
            content: {
                desktop: "Masaüstü Kısayolu Oluştur",
                startwin: "Oturum açıldığında başlat",
                startmin: "Küçük Boyutta Başlat",
                nohwa: "Donanım Hızlandırmasını Devre Dışı Bırak",
                litemode: "Hafif Mod"
            }
        },
        notifications: {
            title: "Bildirimler",
            content: {
                rarity: "Nadirlik Yüzdesi",
                rareonly: "Yalnızca Nadirler",
                all: "Tümü",
                off: "Kapalı",
                showpercent: "Yüzdeyi Göster",
                soundonly: "Sesli Bildirim",
                nowtracking: "Takip Bildirimini Göster",
                nowtrackingscale: "Takip Ölçeği",
                nowtrackingpos: "Takip Konumu",
                shortcuts: "Bildirim Kısayolları",
                noiconcache: "Simge Önbelleğini Devre Dışı Bırak",
                webhooks: "Discord Sunucusuna Gönder",
                webhooktypes: "Webhook Türleri",
                webhookurl: `Webhook URL`,
                webhookcaution: `Bu seçeneği etkinleştirip geçerli bir Discord Webhook bağlantısı sağladığınızda, <u>mevcut Steam kullanıcısının tüm başarı ve oyun bilgilerini</u> belirtilen Discord sunucusuna Webhook bağlantısı aracılığıyla göndereceğinizi kabul etmiş olursunuz.<br><br>Bu bilgilerin sizin adınıza gönderilmesini istemiyorsanız, bu seçeneği devre dışı bırakın.`,
                webhooklaststatus: "Son Durum",
                webhookspoilers: `Spoiler etiketi ekle`,
                replaynotify: "Tekrar Bildirimi",
                replaynotifyshortcut: "Tekrar Kısayolu"
            }
        },
        games: {
            title: "Oyunlar",
            content: {
                linkedgames: "Bağlantılı Oyunlar",
                themeswitch: "Tema Değişimini Otomatik Yap",
                exclusionlist: "Dışlama Listesi"
            }
        },
        media: {
            title: "Medya",
            content: {
                steamss: "Steam Ekran Görüntüsü Al",
                screenshots: "Ek Medya",
                off: "Kapalı",
                overlay: "Bildirim Üzerine Ekran Görüntüsü",
                monitors: "Görüntü Kaynağı",
                hdrmode: "HDR Modu",
                ovpos: "Üzerine Yerleştirme Konumu",
                ovmatch: "Özel Konumu Eşleştir",
                ovx: "Yatay Kaydırma",
                ovy: "Dikey Kaydırma",                
                ovpath: "Görüntü Yolu",
                ssdelay: "Görüntü Gecikmesi",
                notifyimg: "Bildirim Görseli",
                imgpath: "Görsel Yolu",
                ssenabled: "Etkinleştir",
                ssmode: "Ekran Görüntüsü Modu",
                screen: "Ekran",
                window: "Pencere"
            }
        },
        streaming: {
            title: "Yayın",
            content: {
                extwin: "Akış Bildirimleri",
                extwinframerate: "Kare Hızı",
                extwinshow: "Pencereyi Göster",
                audiosrc: "Ses Kaynağı",
                notify: "Bildir",
                app: "Uygulama",
                off: "Susturuldu",
                statwin: "Başarı İstatistikleri Penceresi",
                statwinaot: "Her Zaman Üstte",
                noachievements: "Gösterilecek başarı yok",
                startgame: "Başarıları göstermek için bir oyun başlatın!",
                max: "Maksimum",
                custom: "Özel...",
                statwinshortcut: "Örtü Kısayolu",
            }
        },
        accessibility: {
            title: "Erişilebilirlik",
            content: {
                noanim: "Uygulama Pencere Animasyonlarını Devre Dışı Bırak",
                noupdatedialog: "Güncelleme İletişim Kutusunu Devre Dışı Bırak",
                nvda: "NVDA Desteğini Etkinleştir",
                tooltips: "İpuçlarını Göster",
                showsystrayopts: "Sistem Tepsisi Seçeneklerini Göster",
                releaseshortcut: "Oyunu Yayınlama Kısayolu"
            }
        },
        advanced: {
            title: "Gelişmiş",
            content: {
                pollrate: "Anket Oranı",
                initdelay: "İzleme Gecikmesi",
                releasedelay: "Yayımlama Gecikmesi",
                maxretries: "Maksimum Yeniden Deneme Sayısı",
                debug: "Hata Ayıkla Paneli",
                userust: "Alternatif İşleme Modu",
                notifydebug: "Hata Ayıklama Bildirimlerini Göster",
                exportachdata: "Başarım Verilerini Dışa Aktar",
                uselegacynotifytimer: "Eski Bildirim Zamanlayıcısını Kullan",
                usecustomfiles: "Özel Uygulama Dosyalarını Kullan",
                showcustomfiles: "Özel Uygulama Dosyalarını Göster"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emülatörler",
                rauser: "Kullanıcı Adı",
                rakey: "API Anahtarı",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2 [Nightly]",
                duckstation: "Duckstation",
                installdir: "Log Dosyası Yolu",
                rapercenttype: "Yüzde Türü",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Log dosyasının yolunu girin",
                logfile: "Log Dosyası",
                status: "Durum",
                game: "Oyun",
                wait: "Emülatör bekleniyor",
                idle: "Oyun olayı bekleniyor",
                start: "Oyunu başlatıyor",
                stop: "Oyunu durduruyor",
                achievement: "Başarı açıldı"
            }
        },
        misc: {
            title: "Çeşitli",
            content: {
                colorprofile: "Renk Profili",
                checkforupdates: "Güncellemeleri Kontrol Et",
                log: "Uygulama Günlüğü",
                reset: "Uygulamayı Sıfırla"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Ön Ayar",
            content: {
                preset: "Bildirim Ön Ayarı",
                iconanim: "Nadir İkon Animasyonu",
                alldetails: "Tüm Detayları Göster",
                usepercent: "Yüzdeyi Kullan",
                displaytime: "Görüntüleme Süresi",
                scale: "Ölçek",
                customtext: "Özel Metin",
                usegametitle: "Oyun Başlığını Kullan",
                customfont: "Özel Font"
            }
        },
        sound: {
            title: "Ses",
            content: {
                soundmode: "Ses Modu",
                file: "Dosya",
                folder: "Rastgele",
                soundfile: "Ses Dosyası",
                sounddir: "Ses Klasörü",
                volume: "Ses Seviyesi"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Arka Plan Stili",
                solid: "Düz Renk",
                gradient: "Renk Geçişli",
                img: "Resim",
                gameart: "Oyun Sanatı",
                gradientangle: "Renk Geçiş Açısı",
                bgimg: "Arka Plan Resmi",
                bgimgbrightness: "Parlaklık",
                brightness: "Parlaklık",
                blur: "Bulanıklık",
                roundness: "Yuvarlaklık",
                fontsize: "Yazı Tipi Boyutu",
                usecustomfontsizes: "Özel Yazı Tipi Boyutlarını Kullan",
                unlockmsgfontsize: "Kilitleme Mesajı",
                titlefontsize: "Başlık",
                descfontsize: "Açıklama",
                textvspace: "Metin Aralığı",
                opacity: "Opaklık",
                bgonly: "Sadece Arka Plan",
                glow: "Parlama",
                glowcolor: "Renk",
                glowsize: "Boyut",
                glowx: "Yatay Ofset",
                glowy: "Dikey Ofset",
                glowopacity: "Opaklık",
                glowanim: "Animasyon",
                glowspeed: "Hız",
                glowrarity: "Nadırlığı kullan",
                glowcolorbronze: "Nadırlık: > 50%",
                glowcolorsilver: "Nadırlık: < 50% & > $rarity",
                glowcolorgold: "Nadırlık: < $rarity",
                off: "Kapalı",
                pulse: "Nabız",
                double: "Çift",
                focus: "Odak",
                orbit: "Yörünge",
                fluorescent: "Floresan",
                rainbow: "Gökkuşağı",
                mask: "Maske",
                maskimg: "Maske Resmi",
                useoutline: "Çerçeve",
                outline: "Çerçeve Türü",
                outlinecolor: "Çerçeve Rengi",
                outlinewidth: "Çerçeve Genişliği",
                dashed: "Kesik Çizgi",
                dotted: "Noktalı"
            }
        },
        colors: {
            title: "Renkler",
            content: {
                primarycolor: "Birincil Renk",
                secondarycolor: "İkincil Renk",
                tertiarycolor: "Üçüncül Renk",
                iconshadowcolor: "Nadir İkon Gölgesi Rengi",
                iconanimcolor: "Nadir İkon Animasyon Rengi",
                fontcolor: "Yazı Rengi",
                usecustomfontcolors: "Özel Yazı Tipi Renklerini Kullan",
                unlockmsgfontcolor: "Renk 1",
                titlefontcolor: "Renk 2",
                descfontcolor: "Renk 3",
                fontoutline: "Yazı Çerçevesi",
                fontoutlinecolor: "Yazı Çerçevesi Rengi",
                fontoutlinescale: "Yazı Tipi Çerçeve Ölçeği",
                fontshadow: "Yazı Gölgesi",
                fontshadowcolor: "Yazı Gölgesi Rengi",
                fontshadowscale: "Yazı Tipi Gölgesi Ölçeği"
            }
        },
        icons: {
            title: "İkonlar",
            content: {
                iconscale: "İkon Ölçeği",
                iconroundness: "İkon Yuvarlaklığı",
                showiconborder: "Simge Kenarlığını Göster",
                iconborderimg: "Simge Kenarlığı",
                iconborderpos: "Kenarlık Konumu",
                iconborderscale: "Kenarlık Ölçeği",
                iconborderx: "Yatay Kaydırma",
                iconbordery: "Dikey Kaydırma",
                iconborderrarity: "Nadırlık Kullan",
                iconborderimgbronze: "Nadırlık > 50%",
                iconborderimgsilver: "Nadırlık: < 50% ve > $rarity",
                front: "Ön",
                back: "Arka",
                plat: "100% Logosu",
                usegameicon: "Oyun İkonunu Kullan",
                gameicontype: "Oyun İkonu Türü",
                usecustomimgicon: "Özel İkon Kullan",
                customimgicon: "Özel İkon",
                icon: "İkon",
                logo: "Logo",
                logoscale: "Logo Ölçeği",
                decoration: "Dekorasyon",
                decorationscale: "Dekorasyon Ölçeği",
                showdecoration: "Dekorasyonu Göster",
                rarity: "Nadirlik",
                showhiddenicon: "Gizli Simgeleri Göster",
                hiddenicon: "Gizli Simge",
                replacelogo: "Logoyu Değiştir"
            }
        },
        position: {
            title: "Konum",
            content: {
                pos: "Ekran Konumu",
                usecustompos: "Özel Konumu Kullan",
                setcustompos: "Ayarla",
                resetcustompos: "Sıfırla"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Tema Güncelle",
                savetheme: "Temayı Kaydet",
                sub: [
                    `Kaydedilen <span class="hl">Kullanıcı Temaları</span>, Ana Ekran'daki <span class="hl">Tema Seçimi</span> menüsünden seçilebilir.`,
                    `<span class="hl">Tema Adı</span>'nın <u>benzersiz</u> olduğundan emin olun - mevcut bir tema ile eşleşen bir isim önceki temayı <u>üzerine yazacaktır</u>!`
                ],
                placeholder: "Tema Adı",
                theme: "Tema",
                importtheme: "Tema İçe Aktar",
                import: "İçe Aktar",
                importsub: [
                    `Kullanıcı tarafından oluşturulan bir <span class="hl">tema dosyasını</span> içe aktarın`,
                    `<span class="hl">İçe aktarılan temalar</span>, başarıyla içe aktarıldıktan sonra otomatik olarak yüklenecek ve <span class="hl">Tema Seç</span> menüsünden seçilebilir`,
                ],
                importidle: `İçe aktarmak için bir <span class="hl">tema dosyası</span> seçin`,
                importcopied: `Tema başarıyla kopyalandı`,
                importrenamed: `Tema başarıyla yeniden adlandırıldı`,
                importextracted: `Tema başarıyla çıkartıldı`,
                importrewriting: `Tema dosya yolları yeniden yazılıyor...`,
                importconverting: `Tema dönüştürülüyor...`,
                importcreating: `Tema oluşturuluyor...`,
                importdone: `Tema başarıyla içe aktarıldı`,
                importfailed: `Seçilen tema dosyasını içe aktarma hatası!`,
                exporttheme: "Tema Dışa Aktar",
                export: "Dışa Aktar",
                exporterrortitle: "Dışa Aktarma Hatası",
                exporterrorsub: [
                    "Seçilen temayı dışa aktarmaya çalışırken bir hata oluştu",
                    `Mevcut temayı kaydetmeyi deneyin (<i><span class="hl">Temayı Kaydet</span></i> aracılığıyla) ve tekrar dışa aktarmayı deneyin`,
                    `Sorun devam ederse, lütfen aşağıdaki hatayı kopyalayın ve <span class="hl">Ana Ekran</span>'daki bağlantı düğmeleri aracılığıyla bildirin`
                ],
                synctheme: "Tema Senkronizasyonu",
                syncedwith: "Şu ile senkronize",
                themeselect: "Seçilen Tema"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Uygulama başlatıldığından beri olanlar:",
            copylog: "Günlük İçeriğini Kopyala"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Emin misiniz?</span>
                    <span>Önceki yapılandırılmış tüm veriler, <u>Özelleştirmeler dahil</u>, varsayılan olarak sıfırlanacaktır.</span>
                    <span>🛑 Bu işlem geri alınamaz!</span>
                </div>
            `,
            reset: "Sıfırla"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier bir sorunla karşılaştı ve kapanması gerekiyor.",
            details: "İşte hata detayları:",
            sub: "Sorunu tercih ettiğiniz platform aracılığıyla bildirmek için aşağıdaki düğmelere tıklayın.",
            report: "Raporla",
            log: "Uygulama Günlüğü",
            exit: "Çıkış"
        }
    },    
    tooltips: {
        game: "Şu anda takip edilen başarımların oyunu",
        usertheme: "Daha önce kaydedilmiş bir Tema seçin",
        customise: "Başarı Bildirimlerini Özelleştir",
        test: "Test Bildirimi Göster, özelleştirmeler dahil",
        kofi: "Ko-Fi'de Bağış Yap!",
        discord: "Discord'a Katıl!",
        github: "Bir sorun bildir",
        lang: "Uygulama içinde kullanılan UI dilini seçin",
        steamlang: `Steam uygulama dosyalarında bulunan çevirileri yüklemeyi deneyin ve başarı bilgilerini kullanıcının seçtiği Steam istemci dilinde görüntüleyin<br><br><span class="ttdesc">Bu seçenek, Steam uygulama verilerinde saklanan JSON dosyasında çevirileri bulmayı dener. Mevcut başarı için bir çeviri bulunamazsa, Steamworks'ten alınan başarı bilgileri görüntülenecektir.</span>`,
        maxsteamlangretries: `Mevcut başarı için geçerli çevirileri bulmak amacıyla yapılan deneme sayısı (her 100 ms’de bir)<br><br><span class="ttdesc">Steam şu anda her oyuna bağlı JSON dosyasında yalnızca küçük bir miktarda başarı verisi saklamaktadır. Bu dosyada bulunmayan herhangi bir başarı, başarı kilidi açıldığında eklenecektir.<br><br>Yeni verilerin eklenmesi zaman alabileceğinden, bu değeri artırmak, mevcut başarı için çeviri verilerini bulma olasılığını artıracaktır ancak bu ayar tarafından hesaplanan süre kadar ekran üzerindeki bildirimlerin görünmesini da geciktirebilir.<br><br>Mevcut başarı için geçerli çeviri verileri bulunamazsa, çeviri Steamworks'te belirtilen dile geri dönecektir.</span>`,
        desktop: "Uygulamayı çalıştırmak için Masaüstünde bir kısayol aç/kapat",
        startwin: "Oturum açtıktan sonra Steam Achievement Notifier'ı otomatik olarak başlat",
        startmin: "Başlatıldıktan sonra, uygulama arayüz penceresini Sistem Tepsisi'nden açılmadıkça gizle",
        nohwa: `Donanım Hızlandırmayı Devre Dışı Bırakın, bu, sınırlı kaynaklara sahip sistemlerde veya ayrılmış bir GPU olmayan sistemlerde performansı artırabilir<br><br><span class="ttdesc">Bu seçeneği etkinleştirdikten/devre dışı bıraktıktan sonra uygulama yeniden başlatılacaktır</span>`,
        litemode: "Tüm etkileşimli UI öğelerini devre dışı bırakırken, yalnızca Sistem Tepsisi simgesi aracılığıyla sınırlı uygulama işlevselliği sağlar. Uygulama tarafından tüketilen kaynakları iyileştirebilir",
        rarity: "Nadir başarı bildirimlerinin tetikleneceği yüzde. Bu değerin üzerinde bir kilitleme yüzdesine sahip olan her başarı Ana bir bildirim olarak görüntülenir",
        showpercent: "Seçilen tür(ler) için bildirimde başarının kilitleme yüzdesini göster",
        soundonly: "Bildirimleri devre dışı bırakır, yalnızca Customiser tarafından ayarlanan sesleri çalar",
        extwin: "Ekranda şu anda görüntülenen tüm bildirimleri kopyalayan bir pencere oluşturun. Bu pencere, OBS gibi yayın yazılımlarında pencere yakalama kaynağı olarak eklenebilir",
        extwinframerate: "Yayın Bildirimleri için hedef kare hızını ayarla",
        extwinshow: `Yayın Bildirimleri penceresinin görünürlüğünü geçiş yap<br><br><span class="ttdesc">Görev çubuğunda odaklandığında, <code class="ttcode">Ctrl</code> tuşuna basılı tutarak pencerenin mevcut konumunu görüntüleyebilirsiniz</span>`,
        audiosrc: "Uygulama tarafından üretilen sesin kaynağını seçin (veya devre dışı bırakın)",
        nowtracking: "Çalışan bir oyun için başarımların takip edildiğini bildiren bir bildirim göster",
        nowtrackingscale: `Takip Bildiriminin Boyutunu Ayarlayın`,
        nowtrackingpos: `Takip bildirim konumunu ayarlayın`,
        shortcuts: "Bir klavye kısayolu aracılığıyla bir Test Bildirimi tetikle. Her bildirim türü için özelleştirilebilir kısayollar",
        noiconcache: `Oyunları başlatırken başarı simgelerinin önbelleğini devre dışı bırakır.<br><br><span class="ttdesc">Bu, uygulamanın oyunları başlatırken performansını önemli ölçüde artırabilir ve aynı zamanda büyük miktarda başarıya sahip oyunlardaki takip sorunlarını çözebilir. Ancak, simge önbelleğini devre dışı bırakma nadir durumlarda bildirimlerde başarı simgelerinin eksik olmasına neden olabilir</span>`,
        steamss: "Bir başarı kilidini açtığında Steam ekran görüntüsü al",
        screenshots: "Bir bildirim görüntülendiğinde oluşturulacak Ek Medya türünü seçin",
        monitors: "Ekran görüntüsü alınacak monitör",
        hdrmode: `Yüksek Dinamik Aralık (HDR) destekleyen monitörlerle uyumlu bir yöntem kullanarak ekran görüntüsü al`,
        ovpos: "Ekran görüntüsü içindeki bildirim yerleşimini belirleyin",
        ovmatch: "Bu bildirim türü için Customiser'da belirtilen Ekran Konumu ile eşleştir",
        ovpath: "Bu seçenekle oluşturulan ekran görüntülerinin kaydedileceği konum",
        ssdelay: "Bildirimin gerçekleştiği zamandan ekran görüntüsünün alınması arasında bir gecikme ekleyin",
        sspreview: "Kaydedildiğinde ekran görüntüsünün nasıl görüneceğini önizleyin",
        noanim: "Uygulama pencere animasyonlarını ve geçiş efektlerini devre dışı bırak",
        noupdatedialog: `Otomatik olarak gösterilen ve odaklanan <span class="hl">Güncelleme Mevcut</span> iletişim kutusunu engeller<br><br><span class="ttdesc">İletişim kutusu, güncelleme mevcut olduğunda hala kullanılabilir durumdaysa, güncelleme düğmesine tıklayarak açılabilir</span>`,
        nvda: "Bir başarı kilidini açtığında başarı bilgilerini panoya kopyalayarak, NVDA gibi ekran okuyucu yazılımlar tarafından okunmasını sağlayın",
        tooltips: "Belirli UI öğelerinin üzerine gelindiğinde ipuçlarını göster",
        colorprofile: `Tüm uygulama pencerelerinin seçilen renk profiliyle render edilmesini zorla<br><br><span class="ttdesc">Uygulamanın yeniden başlatılması gerekir</span>`,
        pollrate: `Oyun sırasında başarı verileri için güncelleme aralığını ayarlayın<br><br><span class="ttdesc">Performans, değer veya sistem donanımına bağlı olarak artabilir/azalabilir. Daha yüksek değerler genellikle daha düşük sistem yüküne yol açar, ancak bildirimlerin gecikmesine neden olabilir</span>`,
        initdelay: `Mevcut <span class="hl">AppID</span> tespiti ile işlem/başarı takibinin başlaması arasındaki gecikmeyi ayarlayın<br><br><span class="ttdesc">Bu değeri artırmak, Steam'in mevcut oyunu başlatamama senaryolarını önleyebilir (oyun başlatılmadan önce Steamworks uygulamasını başlatma nedeniyle)</span><br><br><span class="ttdesc">Alternatif olarak, bu değerin artırılması aynı zamanda oyun öncesi başlatıcı işlemlerin yanlış tespitini geçersiz kılma amacıyla da kullanılabilir</span>`,
        releasedelay: `Mevcut oyunun yayımlandıktan sonra arka plan işleminin ne kadar süre bekleyeceğini ayarlar. Hem otomatik işlem izleme hem de manuel olarak bağlanmış oyunları etkiler.<br><br><span class="ttdesc">Steamworks'in uygulamadan tamamen serbest bırakılması için daha uzun bir zaman aralığı sağlar. Bu değeri artırmak, önceki kapatılmış bir oyunun takibini engelleyebilecek anormal davranışları önleyebilir</span>`,
        maxretries: `Çalışan bir işlemi algılanan bir AppID'ye bağlama girişimlerinin maksimum sayısını ayarlar. Hem otomatik işlem izleme hem de manuel olarak bağlanmış oyunları etkiler.<br><br><span class="ttdesc">Bağlama denemeleri her saniye bir kez gerçekleştirilir. Bir çalışan işlem, bu denemelerin sayısından sonra geçerli AppID'ye bağlanmazsa, geçersiz bir işlem döndürülür. Bu durumlarda, oyunun Sistem Tepsisi > Ayarlar > Oyunu Serbest Bırak seçeneğiyle manuel olarak serbest bırakılması gerekir</span>`,
        debug: "Hata Ayıkla Panelini açın, bu panel işlem takip bilgilerini detaylı bir şekilde gösterir",
        userust: "Takip edilen oyun işlemlerinin şu anda sistemde çalışıp çalışmadığını kontrol etmek için Rust tabanlı alternatif bir işlev kullanın. İşaretlenmediğinde, varsayılan NodeJS tabanlı işlem kontrolü kullanılacaktır.",
        notifydebug: "Tüm bildirimler için bir DevTools penceresi oluştur. Bildirim sorunlarını gidermek/çözmek için kullanışlıdır",
        usecustomfiles: "Bildirimlerin kullanıcı tarafından özelleştirilebilir dosyaları yüklemesine izin verir. Düzenli kullanıcılar için dikkatli olunması önerilir",
        showcustomfiles: "Özel dosyaların konumunu aç",
        log: "Uygulama Günlük penceresini açar, işlem etkinliği, uyarılar ve hatalar hakkında bilgi görüntüler",
        reset: "Tüm yapılandırma verilerini siler ve uygulamayı yeniden başlatır",
        playback: "Bildirim önizleme animasyonunu duraklat/devam ettir",
        replay: "Bildirim önizleme animasyonunu yeniden başlat",
        preset: "Özelleştirilecek bildirim ön ayarını seçin",
        iconanim: "Nadir ikon kenarını ve animasyonunu aç/kapat",
        alldetails: "Bu ön ayar için varsayılan olarak gizlenen tüm metin öğelerini bildirimde görüntüle",
        usepercent: "Başarı kilidini açma yüzdesini, XP/S değeri yerine göster",
        displaytime: "Bildirimin görüntüleneceği saniye sayısını ayarlayın",
        scale: "Bildirimin boyutunu artırın veya azaltın",
        customtext: "Bildirim içinde görüntülenecek özel bir mesaj belirleyin",
        usegametitle: "Bildirim içinde mevcut oyunun başlığını göster",
        customfont: "Bildirim içinde kullanılacak özel bir yazı tipi yükleyin",
        soundmode: "Bir bildirim gerçekleştiğinde tek bir ses dosyası veya birden çok ses dosyası içeren bir klasörden rastgele seçilen bir ses dosyası seçin",
        soundfile: "Bir bildirim gerçekleştiğinde çalınacak bir ses dosyası seçin",
        sounddir: "Bir bildirim gerçekleştiğinde rastgele seçilecek bir ses dosyasının bulunduğu bir klasör seçin",
        volume: "Ses dosyasının oynatma ses düzeyini ayarlayın",
        preview: "Seçilen ses dosyasını veya klasörden rastgele seçilen bir ses dosyasını önizleyin",
        bgstyle: "Bildirim arka planının stili seçin",
        gradientangle: "Gradyanın açısını ayarlayın",
        bgimg: "Bildirim arka planı olarak kullanılacak bir resim dosyası yükleyin",
        bgimgbrightness: "Bildirim arka planı olarak kullanılan resmin parlaklığını ayarlayın",
        brightness: "Bildirim arka planı olarak kullanılan oyun sanatının parlaklığını ayarlayın",
        blur: "Bildirim arka planına uygulanan bulanıklık seviyesini ayarlayın",
        roundness: "Bildirim kenarlarının yuvarlaklığını ayarlayın",
        fontsize: "Bildirimde kullanılan yazı tipinin boyutunu ayarlayın",
        opacity: "Bildirimin genel saydamlığını ayarlayın",
        bgonly: "Yalnızca bildirim arka planı için saydamlık ayarlayın, diğer öğeleri tam saydamlıkta tutun",
        glow: "Bildirimi saran bir parıltı efekti etkinleştirin",
        glowcolor: "Parıltı efektinin rengini ayarlayın",
        glowsize: "Parıltı efektinin boyutunu ayarlayın",
        glowx: "Parlama efektinin yatay ofsetini ayarlayın",
        glowy: "Parlama efektinin dikey ofsetini ayarlayın",
        glowopacity: "Parlama efektinin opaklığını ayarlayın",
        glowanim: "Parıltı efektine uygulanacak önceden tanımlanmış bir animasyon seçin",
        glowspeed: "Parıltı efektine uygulanan animasyonun hızını ayarlayın",
        glowrarity: "Açılan başarıya göre ışık efektinin rengini değiştirin",
        glowcolorbronze: "Kilitleme yüzdesi > 50% olduğunda gösterilen ışık rengi",
        glowcolorsilver: "Kilitleme yüzdesi < 50% ve > $rarity olduğunda gösterilen ışık rengi",
        glowcolorgold: "Kilitleme yüzdesi < $rarity olduğunda gösterilen ışık rengi",
        mask: "Bildirimin belirli bölümlerini özel bir resimle maskelemeyi etkinleştirin",
        maskimg: `Maske olarak kullanılacak bir resim dosyası yükleyin<br><br><span class="ttdesc">CSS'de <code class="ttcode">mask-mode: alpha</code>, genellikle beklenenin tam tersi şekilde çalışır - resim dosyasındaki şeffaflık alanları gizlenirken, siyah/grinin alanları alttaki öğelerin görünmesine izin verir</span>`,
        useoutline: "Bildirim etrafında bir çerçeve göster",
        outline: "Bildirim etrafında gösterilecek çerçeve türünü seçin",
        outlinecolor: "Bildirim etrafındaki çerçevenin rengini ayarlayın",
        outlinewidth: "Bildirim etrafındaki çerçevenin genişliğini ayarlayın",
        primarycolor: "Bildirimin birincil rengini ayarlayın",
        secondarycolor: "Bildirimin ikincil rengini ayarlayın",
        tertiarycolor: "Bildirimin üçüncül rengini ayarlayın",
        fontcolor: "Bildirimde görüntülenen tüm metnin rengini ayarlayın",
        fontoutline: "Bildirimde görüntülenen tüm metne bir dış çizgi ekleyin",
        fontoutlinecolor: "Metin dış çizgisinin rengini ayarlayın",
        fontoutlinescale: "Metnin çerçevesinin kalınlığını ayarla",
        fontshadow: "Bildirimde görüntülenen tüm metne bir gölge ekleyin",
        fontshadowcolor: "Metin gölgesinin rengini ayarlayın",
        fontshadowscale: "Metnin gölgesinin kalınlığını ayarla",
        iconroundness: "Bildirimde görüntülenen başarı/oyun ikonunun yuvarlaklığını ayarlayın",
        plat: "100% ikonu olarak kullanılacak bir resim dosyası yükleyin",
        usegameicon: "Kilidi açılan başarının ikonunu, mevcut oyun ikonu ile değiştir",
        gameicontype: `Oyun İkonu olarak görüntülenecek resim türünü seç`,
        usecustomimgicon: "Kilidi açılan başarının ikonunu, özel bir resim dosyası ile değiştir",
        customimgicon: "Özel İkon olarak kullanılacak bir resim dosyasını yükle",
        showhiddenicon: "Başarının bildirimde gizli olduğunu gösteren bir resim göster",
        hiddenicon: "Gizli başarı simgesini değiştirmek için bir resim dosyası yükle",
        logo: "Logo ikonunu değiştirmek için bir resim dosyası yükleyin",
        decoration: "Süsleme ikonunu değiştirmek için bir resim dosyası yükleyin",
        showdecoration: "Süsleme ikonunun görünürlüğünü aç/kapat",
        replacelogo: "Bildirimdeki Logoyu Seçilen Süsleme ile Değiştir",
        pos: "Bildirimin ekran üzerindeki konumunu ayarlayın",
        usecustompos: "Bildirim için özel konumlandırmayı etkinleştirin",
        setcustompos: "Bildirim için özel konumu ayarlayın",
        resetcustompos: "Bildirim konumunu varsayılan özel konuma sıfırlayın",
        updatetheme: "Seçilen özelleştirme seçenekleriyle mevcut Temayı güncelle",
        savetheme: "Tüm yapılandırılmış özelleştirme seçeneklerini yeni bir Tema olarak kaydedin",
        visibilitybtn: "Özelleştirici önizlemelerinde ve test bildirimlerinde öğenin görünürlüğünü aç/kapat",
        delbtn: "Öğeyi varsayılan değere sıfırla",
        imgpath: "Bu seçenek tarafından oluşturulan bildirim görüntülerinin kaydedileceği konum",
        ssenabled: "Bu tür için medya oluşturmayı etkinleştir veya devre dışı bırak",
        checkforupdates: `GitHub'da yeni bir uygulama sürümünün yayımlanıp yayımlanmadığını kontrol edin. Bir güncelleme mevcutsa, <span class="hl">Güncelleme Mevcut</span> iletişim kutusu aracılığıyla onaylandıktan sonra otomatik olarak indirilecek ve yüklenecektir,`,
        linkedgames: `Belirli Steam oyunları için <span class="hl">otomatik işlem takibini</span> atlayın<br><br><span class="ttdesc">Bu seçenek yalnızca çok belirli senaryolarda kullanılmalıdır. Kullanıcıların normal koşullarda bu seçeneği kullanmaları gerekmez!</span>`,
        exclusionlist: `Uygulamanın belirli Steam oyunlarının başarılarını izlemesini engelleyin<br><br><span class="ttdesc">Bu seçenek yalnızca çok belirli senaryolarda kullanılmalıdır. Kullanıcıların normal koşullarda bu seçeneği kullanmaları gerekmez!</span>`,
        ovx: "Ekran görüntüsünde gösterilen bildirimi yatay olarak kaydırma",
        ovy: "Ekran görüntüsünde gösterilen bildirimi dikey olarak kaydırma",
        importtheme: `Kullanıcı tarafından oluşturulan <span class="hl">tema dosyası</span> aracılığıyla özelleştirmeleri içe aktarın`,
        exporttheme: `Paylaşmak için şu anda seçili olan <span class="hl">temayı</span> dışa aktarın<br><br><span class="ttdesc">Dışa aktarmadan önce lütfen istenen <span class="hl">temanın</span> seçildiğinden (<span class="hl">Tema Seç</span> menüsü üzerinden) emin olun. Ayrıca özelleştirmelerin seçilen <span class="hl">temaya</span> kaydedilmiş olmasından (<span class="hl">Tema Kaydet</span> menüsü üzerinden) emin olun<br><br><u>Mevcut <span class="hl">temada</span> henüz kaydedilmemiş herhangi bir özelleştirme dışa aktarılmayacaktır!</u></span>`,
        webhooks: "Bir başarı kilidini açıldığında Discord sunucusunda paylaşmak için Webhook URL kullanın",
        webhookmain: `Ana başarımların kilidi açıldığında Discord sunucusuna başarımları gönderip göndermemeyi açın`,
        webhookrare: "Nadir başarımların kilidi açıldığında Discord sunucusuna başarımları gönderip göndermemeyi açın",
        webhookplat: "100% başarımı açıldığında Discord sunucusuna başarımları gönderip göndermemeyi açın",
        webhooktest: "Herhangi bir türde test bildirimi tetiklendiğinde, test bilgilerini Discord sunucusuna gönderip göndermemeyi geçiş yap",
        webhookurl: `İstenilen Discord sunucusu için <span class="hl">Webhook URL</span> ayarlayın<br><br><span class="ttdesc"><span class="hl">Webhook URL</span>, bir kullanıcı veya uygulama adına Discord sunucusunda/kanalında paylaşım yapmak için kullanılır. Bir Discord sunucusu için yeni bir Webhook ayarlamak için kullanıcı, Webhooks oluşturulmasına izin veren bir role sahip olmalıdır<br><br><u>Bu seçeneği kullanırken Webhook URL gereklidir</u><br><br>Daha fazla bilgi için Discord'un resmi belgelerine başvurun</span>`,
        webhookspoilers: `Discord'a gönderildiğinde "Gizli" başarılarına spoiler etiketi ekle`,
        unlockmsg: "$type içindeki kilidi açma mesajının/özelleştirilmiş metnin konumunu ayarlayın",
        title: "$type içindeki başarı başlığının konumunu ayarlayın",
        desc: "$type içindeki başarı açıklamasının konumunu ayarlayın",
        notification: "bildirim",
        screenshot: "ekran görüntüsü",
        percentpos: "$type içindeki nadirlik yüzdesinin konumunu ayarlayın",
        sspercentpos: "$type içindeki nadirlik yüzdesinin konumunu ayarlayın",
        hiddeniconpos: "$type içindeki gizli/özel başarı ikonunun konumunu ayarlayın",
        sshiddeniconpos: "$type içindeki gizli/özel başarı ikonunun konumunu ayarlayın",
        decorationpos: "$type içindeki süsleme öğesinin konumunu ayarlayın",
        ssdecorationpos: "$type içindeki süsleme öğesinin konumunu ayarlayın",
        percentbadge: "Başarı/oyun simgesinin üstünde bulunan bir rozette kilit açma yüzdesini göster",
        sspercentbadge: "Başarı/oyun simgesinin üstünde bulunan bir rozette kilit açma yüzdesini göster",
        percentbadgepos: "Rozet pozisyonunu ayarla",
        sspercentbadgepos: "Rozet pozisyonunu ayarla",
        percentbadgecolor: "Rozetin arka plan rengini ayarla",
        sspercentbadgecolor: "Rozetin arka plan rengini ayarla",
        percentbadgefontcolor: "Rozetin yazı rengini ayarlayın",
        sspercentbadgefontcolor: "Rozetin yazı rengini ayarlayın",
        percentbadgefontsize: "Rozet boyutunu ayarla",
        sspercentbadgefontsize: "Rozet boyutunu ayarla",
        percentbadgeroundness: "Rozetin kenar yuvarlaklığını ayarla",
        sspercentbadgeroundness: "Rozetin kenar yuvarlaklığını ayarla",
        percentbadgex: "Rozet öğesinin yatay konumunu kaydır",
        sspercentbadgex: "Rozet öğesinin yatay konumunu kaydır",
        percentbadgey: "Rozet öğesinin dikey konumunu kaydır",
        sspercentbadgey: "Rozet öğesinin dikey konumunu kaydır",
        percentbadgeimg: "Rozet öğesi olarak nadirlik tabanlı bir simge göster",
        sspercentbadgeimg: "Rozet öğesi olarak nadirlik tabanlı bir simge göster",
        percentbadgeimgbronze: "Kilitleme yüzdesi > %50 olduğunda gösterilecek rozet simgesi",
        sspercentbadgeimgbronze: "Kilitleme yüzdesi > %50 olduğunda gösterilecek rozet simgesi",
        percentbadgeimgsilver: "Kilitleme yüzdesi < %50 ve > $rarity olduğunda gösterilecek rozet simgesi",
        sspercentbadgeimgsilver: "Kilitleme yüzdesi < %50 ve > $rarity olduğunda gösterilecek rozet simgesi",
        percentbadgeimggold: "Kilitleme yüzdesi < $rarity olduğunda gösterilecek rozet simgesi",
        sspercentbadgeimggold: "Kilitleme yüzdesi < $rarity olduğunda gösterilecek rozet simgesi",
        resetpbimgs: "Tüm rozet simgelerini varsayılan ayarlara sıfırla",
        elemsmatch: `Bu bildirim türü için özelleştiricide ayarlanan Bildirim Öğeleri ayarlarıyla eşleşir<br><br><span class="ttdesc">Bazı Bildirim Ön Ayarları, ekran üzerindeki ve ekran görüntüsü tabanlı bildirim düzenleri arasındaki farklılıklar nedeniyle özelleştirici ayarlarıyla tam olarak eşleşemez</span>`,
        themeswitch: `Belirli bir oyun tespit edildiğinde herhangi bir kaydedilmiş <span class="hl">Temaya</span> otomatik olarak geçiş yap`,
        userthemesync: `Seçilen <span class="hl">Tema</span> üzerindeki özelleştirmeleri tüm diğer bildirim türlerine senkronize et`,
        showsystrayopts: `Genellikle <span class="hl">Sistem Tepsisi</span> > <span class="hl">Seçenekler</span> altında yer alan tüm seçenekleri <span class="hl">Ayarlar</span> > <span class="hl">Diğer</span> kısmında göster`,
        releaseshortcut: "Belirtilen klavye kısayolunu kullanarak şu anda izlenen oyunu yayınlayın",
        themeselect: "Önceden kaydedilmiş bir Tema seçin",
        statwin: `Geçerli oyun için yapılandırılabilir başarı istatistiklerini dış bir pencerede görüntüle<br><br><span class="ttdesc">"<span class="hl">Başarıları Steam diline çevir</span>" seçeneğiyle birlikte kullanıldığında, belirli bir başarı açılana kadar bazı çeviriler kullanılamayabilir</span>`,
        statwinaot: `Başarı İstatistikleri penceresini "Her Zaman Üstte" moduna ayarlayarak, pencerenin oyun penceresinin üzerinde görüntülenmesini sağlar<br><br><span class="ttdesc">Bu seçenek etkinleştirildiğinde, Başarı İstatistikleri penceresi kullanıcı etkileşimlerini, örneğin "tıklama" olaylarını kaydetmeyecek. Pencereyle etkileşimi yeniden etkinleştirmek için bu seçenek devre dışı bırakılmalıdır</span>`,
        statwinshortcut: "Belirtilen klavye kısayolunu kullanarak Başarı İstatistikleri Örtüsünü geçiş yap",
        ssdisplay: "Bildirimde yakalanan ekran görüntüsünün önizlemesini göster",
        iconscale: "Başarı simgesinin boyutunu artırın veya azaltın",
        showiconborder: "Başarım simgesinin etrafında bir kenarlık olarak bir resim görüntüleyin",
        iconborderimg: "Başarım simgesinin kenarlığı olarak kullanılacak bir resim dosyası yükleyin",
        iconborderpos: "Simge kenarlık resminin başarım simgesinin önünde mi yoksa arkasında mı görüntüleneceğini ayarlayın",
        iconborderscale: "Bildirim içindeki simge kenarlığının boyutunu artırın veya azaltın",
        iconborderx: "Bildirim içindeki simge kenarlığının yatay kaydırmasını artırın veya azaltın",
        iconbordery: "Bildirim içindeki simge kenarlığının dikey kaydırmasını artırın veya azaltın",
        iconborderrarity: "Açık başarıların nadırlığına göre ikonun kenarlık görüntüsünü değiştir",
        iconborderimgbronze: "Kilit açma yüzdesi > %50 olduğunda gösterilen ikon kenarlık görüntüsü",
        iconborderimgsilver: "Kilit açma yüzdesi < %50 ve > $rarity olduğunda gösterilen ikon kenarlık görüntüsü",
        iconshadowcolor: "Nadir bir başarıyı kilitlediğinizde başarı simgesinin etrafındaki gölge efektinin rengini ayarlayın",
        iconanimcolor: "Nadir bir başarıyı kilitlediğinizde başarı simgesinin arkasındaki animasyon efektinin rengini ayarlayın",
        logoscale: "Bildirimdeki Logo öğesinin boyutunu artırın veya azaltın",
        decorationscale: "Bildirimdeki Dekorasyon öğesinin boyutunu artırın veya azaltın",
        usecustomfontsizes: `Bildirimdeki her bir metin öğesinin boyutunu tek tek artırın veya azaltın<br><br><span class="ttdesc">Bireysel yazı tipi boyutları değiştirilerek orijinal bildirim düzeninin korunması garanti edilemez</span>`,
        unlockmsgfontsize: "Kilitleme mesajı metin öğesinin boyutunu artırın veya azaltın",
        titlefontsize: "Başarı başlığı metin öğesinin boyutunu artırın veya azaltın",
        descfontsize: "Başarı açıklaması metin öğesinin boyutunu artırın veya azaltın",
        webhookembedcolormain: "Ana başarı açıldığında webhook embed'inde kullanılan rengi ayarlayın",
        webhookembedcolorrare: "Nadir başarı açıldığında webhook embed'inde kullanılan rengi ayarlayın",
        webhookembedcolorplat: "Yüzde 100 başarı açıldığında webhook embed'inde kullanılan rengi ayarlayın",
        raemus: "Desteklenen emülatörlerde oyunlar tespit edildiğinde bildirim göster",
        rauser: "Başarıları takip etmek için Retro Achievements kullanıcı adını ayarlayın",
        rakey: `Retro Achievements API'si ile kimlik doğrulama için kullanılacak Web API Anahtarını ayarlayın<br><br><span class="ttdesc">Bir Web API Anahtarı, Retro Achievements web sitesine giriş yaparak ve <span class="hl">Ayarlar > Anahtarlar > Web API Key</span> bölümüne giderek kopyalanabilir veya yeniden oluşturulabilir<br><br>🔒 Verilen anahtar, yerel sisteme kaydedilmeden önce şifrelenir (eğer mevcut işletim sistemi şifrelemeyi destekliyorsa)</span>`,
        rapercenttype: "Bildirimlerde Hardcore veya Softcore başarı yüzdelerinin gösterilmesini ayarlayın",
        retroarch: `Retro Achievements bildirimlerini RetroArch ile simüle edilen oyunlar için göster<br><br><span class="ttdesc"><span class="hl">RetroArch > Ayarlar > Günlük Kaydı</span> aşağıdaki ayarlarla yapılandırılmalıdır:<br><br><ul><li><span class="hllb">Günlük Kaydı Ayrıntı Düzeyi</span>: <span class="hlgreen">AÇIK</span></li><li><span class="hllb">Önyüz Günlük Kaydı Seviyesi</span>: <span class="hlgreen">1 (Bilgi)</span></li><li><span class="hllb">Dosyaya Günlük Kaydı</span>: <span class="hlgreen">AÇIK</span></li><li><span class="hllb">Günlük Dosyalarına Zaman Damgası</span>: <span class="hlred">KAPALI</span></li></ul></span>`,
        dolphin: `Retro Achievements bildirimlerini Dolphin ile simüle edilen oyunlar için göster<br><br><span class="ttdesc"><span class="hl">Dolphin > Görünüm > Günlük Konfigürasyonunu Göster</span> aşağıdaki ayarlarla yapılandırılmalıdır:<br><br><ul><li><span class="hllb">Ayrıntı Düzeyi</span>: <span class="hlgreen">Bilgi</span></li><li><span class="hllb">Günlük Çıktıları</span> > <span class="hlgreen">Dosyaya Yaz</span></li><li><span class="hllb">Günlük Türleri</span> > <span class="hlgreen">Başarılar (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Retro Achievements bildirimlerini PCSX2 [Nightly] ile simüle edilen oyunlar için göster<br><br><span class="ttdesc"><span class="hl">PCSX2 > Araçlar > Dosya Kaydı Etkinleştir</span> etkinleştirilmelidir</span><br><br><span class="ttdesc">❗ Son güncellemeler nedeniyle, <span class="hl">"emulog.txt"</span> içeriğine şu anda yalnızca PCSX2'nin Nightly sürümünde erişilebilir</span>`,
        duckstation: `Duckstation üzerinden emüle edilen oyunlar için Retro Achievements bildirimlerini göster<br><br><span class="ttdesc">❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> dosyasının indirilip <span class="hl">Duckstation'ın kurulum dizinine</span> taşınması gerekir</span><br><br><span class="ttdesc"><span class="hl">Duckstation > Ayarlar > Başarılar > RAIntegration (Sadece geliştiriciler için)</span> etkinleştirilmiş olmalıdır</span>`,
        retroarchpath: `RetroArch'ın <span class="hl">"retroarch.log"</span> günlük dosyasının yolunu ayarlayın<br><br><span class="ttdesc">Varsayılan kurulum ayarlarıyla, <span class="hl">"retroarch.log"</span> şu konumda saklanır: <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Dolphin'in <span class="hl">"dolphin.log"</span> günlük dosyasının yolunu ayarlayın<br><br><span class="ttdesc">Varsayılan kurulum ayarlarıyla, <span class="hl">"dolphin.log"</span> şu konumlarda saklanır:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `PCSX2'in <span class="hl">"emulog.txt"</span> günlük dosyasının yolunu ayarlayın<br><br><span class="ttdesc">Varsayılan kurulum ayarlarıyla, <span class="hl">"emulog.txt"</span> şu konumda saklanır: <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Duckstation'ın <span class="hl">"RALog.txt"</span> günlük dosyasının yolunu ayarla<br><br><span class="ttdesc">Varsayılan kurulum ayarlarıyla, <span class="hl">"RALog.txt"</span> <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span> içinde saklanır</span>`,
        usecustomfontcolors: "Bildirim içindeki metin öğelerinin rengini ayrı ayrı ayarlayın",
        unlockmsgfontcolor: "İlk metin öğesinin rengini ayarlayın",
        titlefontcolor: "İkinci metin öğesinin rengini ayarlayın",
        descfontcolor: "Üçüncü metin öğesinin rengini ayarlayın",
        exportachdata: `Bir başarı kilidi açıldığında başarı verilerini bir JSON dosyasına dışa aktar<br><br><span class="ttdesc">Etkinleştirildiğinde, <span class="ttcode">achdata.json</span> şu konuma dışa aktarılacaktır:<br><br><ul><li><span class="hllb">%localappdata\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Bildirimdeki metin öğeleri arasındaki dikey boşluğu ayarla",
        ssmode: `Ekran görüntülerinde tüm ekranı mı yoksa yalnızca mevcut oyun penceresini mi yakalayacağını ayarla<span style="color: red;">*</span><br><br><span class="ttdesc">Eğer mevcut oyunun <span class="hl">çalıştırılabilir dosyası</span> bulunamazsa (<i>ya <span class="hl">otomatik işlem takibi</span> ile ya da bir <span class="hl">Bağlantılı Oyun</span> olarak eklenerek</i>), bu seçenek varsayılan olarak "Ekran" moduna dönecektir</span>` ,
        replaynotify: "Son Başarı Bildirimini Tekrarla",
        replaynotifyshortcut: "Belirtilen kısayol ile son başarı bildirimini tekrarla",
        replaynotifyempty: `<br><br><span class="ttdesc">Tekrar kuyruğu boş. Bir başarıyı açarak bir bildirimi tekrar edebilirsiniz</span>`,
        uselegacynotifytimer: `Bildirim penceresinin dışında statik bir zamanlayıcı kullanarak bildirimleri gizle<br><br><span class="ttdesc">Bu seçeneği etkinleştirmek, bildirim animasyonlarının tamamlanmamasına neden olabilir</span>`
    },
    update: {
        updateavailable: "Güncelleme mevcut",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifier için yeni bir güncelleme mevcut!",
            `<span id="discordreleasenotes"></span> ve <span id="githubreleasenotes"></span> üzerinde Tam Sürüm Notları bulunmaktadır`
        ],
        update: "Güncelle"
    },
    linkgame: {
        content: {
            exepath: "Yürütülebilir Dosya Yolu",
            managesub: [
                `Bir oyunun <span class="hl">yürütülebilir dosyasını</span> belirli bir <span class="hl">AppID</span>'ye manuel olarak bağlayın veya var olan bağlantıyı <span class="hl">bağlantısız</span> yapın`,
                `Steam Başarı Bildirimi artık herhangi bir <span class="hl">bağlı oyun</span> için <span class="hl">otomatik işlem takibi</span> kullanmayacak - bunun yerine, belirtilen <span class="hl">yürütülebilir dosya</span>, ilişkili <span class="hl">AppID</span> algılandığında izlenecektir`,
                `<span class="hl" id="appidhelp"><u>Bir Steam oyununun AppID'sini nasıl bulabilirim?</u></span>`
            ],
            linknew: "Yeni Bağlı Oyun",
            linknewsub: [
                `Bir <span class="hl">oyunun yürütülebilir dosyası</span> ile ilişkili <span class="hl">AppID</span> arasında yeni bir bağlantı oluşturun`,
                `Oluşturulduktan sonra, bağlantılar önceki <span class="hl">Bağlı Oyunları Yönet</span> iletişim kutusu üzerinden <span class="hl">bağlantısız</span> yapılabilir`
            ],
            link: "Bağla",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Herhangi bir Steam oyununun <span class="hl">AppID</span>'sini <span class="hl">Dışlama Listesi</span>'ne ekleyin`,
                `Steam Achievement Notifier, <span class="hl">Dışlama Listesi</span>'ne eklenen herhangi bir oyunun <span class="hl">AppID</span>'sini başarı verilerini izlemeye çalışmayacak`,
                `<span class="hl" id="appidhelp"><u>Bir Steam oyununun AppID'sini nasıl bulabilirim?</u></span>`
            ],
            exclusionnew: "Yeni Dışlama",
            exclusionnewsub: [
                `<span class="hl">Dışlama Listesi</span>'ne eklemek için bir <span class="hl">AppID</span> girin`
            ]
        }
    },
    notificationelems: {
        title: "Bildirim Öğeleri",
        content: {
            unlockmsg: "Kilidi Açma Mesajı",
            title: "Başarı Başlığı",
            desc: "Başarı Açıklaması",
            hiddeniconpos: "Gizli İkon",
            sshiddeniconpos: "Gizli İkon",
            decorationpos: "Süsleme",
            ssdecorationpos: "Süsleme",
            percentpos: "Nadirlik Yüzdesi",
            sspercentpos: "Nadirlik Yüzdesi",
            percentbadge: "Yüzde Rozeti",
            sspercentbadge: "Yüzde Rozeti",
            percentbadgepos: "Rozet Pozisyonu",
            sspercentbadgepos: "Rozet Pozisyonu",
            percentbadgecolor: "Rozet Rengi",
            sspercentbadgecolor: "Rozet Rengi",
            percentbadgefontcolor: "Rozet Yazı Rengi",
            sspercentbadgefontcolor: "Rozet Yazı Rengi",
            percentbadgefontsize: "Rozet Boyutu",
            sspercentbadgefontsize: "Rozet Boyutu",
            percentbadgeroundness: "Rozet Kenar Yuvarlaklığı",
            sspercentbadgeroundness: "Rozet Kenar Yuvarlaklığı",
            percentbadgex: "Yatay Kaydırma",
            sspercentbadgex: "Yatay Kaydırma",
            percentbadgey: "Dikey Kaydırma",
            sspercentbadgey: "Dikey Kaydırma",
            percentbadgeimg: "Simge Kullan",
            sspercentbadgeimg: "Simge Kullan",
            percentbadgeimgbronze: "Nadirlik: > %50",
            sspercentbadgeimgbronze: "Nadirlik: > %50",
            percentbadgeimgsilver: "Nadirlik: < %50 & > $rarity%",
            sspercentbadgeimgsilver: "Nadirlik: < %50 & > $rarity%",
            percentbadgeimggold: "Nadirlik: < $rarity%",
            sspercentbadgeimggold: "Nadirlik: < $rarity%",
            resetpbimgs: "Rozet Simgelerini Sıfırla",
            elemsmatch: "Özelleştirici Ayarlarıyla Eşleş",
            ssdisplay: "Ekran görüntüsü önizlemesi"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Herhangi bir oyunun <span class="hl">AppID</span>'sini ekleyin, tespit edildiğinde otomatik olarak <span class="hl">Temaları</span> değiştirmek için`,
                `Her bildirim türü için seçilecek kaydedilmiş <span class="hl">Tema</span> ile birlikte kullanılacak <span class="hl">Ekran Görüntüsü Kaynağı</span> olarak istenen monitör seçilebilir`,
                `<span class="hl" id="appidhelp"><u>Bir Steam oyununun AppID'sini nasıl bulabilirim?</u></span>`
            ],
            themeswitchnew: "Yeni Otomatik Değişim",
            themeswitchnewsub: [
                `Oyunun <span class="hl">AppID</span>'sini girin, ayrıca kullanılacak monitörü <span class="hl">Ekran Görüntüsü Kaynağı</span> olarak belirtin`,
                `Bu oyunun <span class="hl">AppID</span>'si tespit edildiğinde her bildirim türü için hangi <span class="hl">Temaya</span> geçileceğini seçin`
            ],
            themes: "Temalar",
            src: "Ekran Görüntüsü Kaynağı",
            themedeleted: "Tema silindi"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Görünüşe göre <span class="hl">${opt}</span> seçeneğini etkinleştirmeye çalışıyorsunuz. Ancak Linux sistemlerinde, <code class="dialogcode">${dep}</code> paketini önce yüklemeden ekran görüntüsü alamazsınız`,
    `Bu bağımlılığı yüklemek için lütfen <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> komutunu çalıştırın. Bu, bu cihazda ekran görüntüsü alınabilmesini sağlayacaktır`
]