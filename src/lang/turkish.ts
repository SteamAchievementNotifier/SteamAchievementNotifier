export const translations = {
    global: {
        main: "Ana",
        rare: "Nadir",
        plat: "100%",
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
        missingdepssub: [
            `Sanırım <span class="hl">Steam Ekran Görüntüsü Al</span> seçeneğini etkinleştirmeye çalışıyorsunuz. Ancak, Linux'ta ekran görüntüleri <code class="dialogcode">xdotool</code> paketi yüklenmeden otomatik olarak tetiklenemez`,
            `Bu bağımlılığı kurmak için lütfen <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> komutunu çalıştırın, bu da Steam ekran görüntülerinin bu cihazda alınabilmesini sağlar`
        ],
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
        ]
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
            title: "Dil"
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
                extwin: "Akış Bildirimleri",
                audiosrc: "Ses Kaynağı",
                notify: "Bildir",
                app: "Uygulama",
                nowtracking: "Takip Bildirimini Göster",
                nowtrackingscale: "Takip Ölçeği",
                nowtrackingpos: "Takip Konumu",
                shortcuts: "Bildirim Kısayolları",
                noiconcache: "Simge Önbelleğini Devre Dışı Bırak"
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
                ovpos: "Üzerine Yerleştirme Konumu",
                ovmatch: "Özel Konumu Eşleştir",
                ovx: "Yatay Kaydırma",
                ovy: "Dikey Kaydırma",                
                ovpath: "Görüntü Yolu",
                ssdelay: "Görüntü Gecikmesi",
                notifyimg: "Bildirim Görseli",
                imgpath: "Görsel Yolu"
            }
        },
        games: {
            title: "Oyunlar",
            content: {
                linkedgames: "Bağlantılı Oyunlar",
                exclusionlist: "Dışlama Listesi"
            }
        },
        accessibility: {
            title: "Erişilebilirlik",
            content: {
                noanim: "Uygulama Pencere Animasyonlarını Devre Dışı Bırak",
                nvda: "NVDA Desteğini Etkinleştir",
                tooltips: "İpuçlarını Göster"
            }
        },
        advanced: {
            title: "Gelişmiş",
            content: {
                pollrate: "Anket Oranı",
                releasedelay: "Yayımlama Gecikmesi",
                maxretries: "Maksimum Yeniden Deneme Sayısı",
                debug: "Hata Ayıkla Paneli",
                userust: "Alternatif İşleme Modu",
                notifydebug: "Hata Ayıklama Bildirimlerini Göster",
                usecustomfiles: "Özel Uygulama Dosyalarını Kullan",
                showcustomfiles: "Özel Uygulama Dosyalarını Göster"
            }
        },        
        misc: {
            title: "Çeşitli",
            content: {
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
                off: "Kapalı",
                pulse: "Nabız",
                rainbow: "Gökkuşağı",
                mask: "Maske",
                maskimg: "Maske Resmi"
            }
        },
        colors: {
            title: "Renkler",
            content: {
                primarycolor: "Birincil Renk",
                secondarycolor: "İkincil Renk",
                tertiarycolor: "Üçüncül Renk",
                fontcolor: "Yazı Rengi",
                fontoutline: "Yazı Çerçevesi",
                fontoutlinecolor: "Yazı Çerçevesi Rengi",
                fontshadow: "Yazı Gölgesi",
                fontshadowcolor: "Yazı Gölgesi Rengi"
            }
        },
        icons: {
            title: "İkonlar",
            content: {
                iconroundness: "İkon Yuvarlaklığı",
                plat: "100% Logosu",
                usegameicon: "Oyun İkonunu Kullan",
                logo: "Logo",
                decoration: "Dekorasyon",
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
                export: "Dışa Aktar"                
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
        desktop: "Uygulamayı çalıştırmak için Masaüstünde bir kısayol aç/kapat",
        startwin: "Oturum açtıktan sonra Steam Achievement Notifier'ı otomatik olarak başlat",
        startmin: "Başlatıldıktan sonra, uygulama arayüz penceresini Sistem Tepsisi'nden açılmadıkça gizle",
        nohwa: `Donanım Hızlandırmayı Devre Dışı Bırakın, bu, sınırlı kaynaklara sahip sistemlerde veya ayrılmış bir GPU olmayan sistemlerde performansı artırabilir<br><br><span class="ttdesc">Bu seçeneği etkinleştirdikten/devre dışı bıraktıktan sonra uygulama yeniden başlatılacaktır</span>`,
        litemode: "Tüm etkileşimli UI öğelerini devre dışı bırakırken, yalnızca Sistem Tepsisi simgesi aracılığıyla sınırlı uygulama işlevselliği sağlar. Uygulama tarafından tüketilen kaynakları iyileştirebilir",
        rarity: "Nadir başarı bildirimlerinin tetikleneceği yüzde. Bu değerin üzerinde bir kilitleme yüzdesine sahip olan her başarı Ana bir bildirim olarak görüntülenir",
        showpercent: "Seçilen tür(ler) için bildirimde başarının kilitleme yüzdesini göster",
        soundonly: "Bildirimleri devre dışı bırakır, yalnızca Customiser tarafından ayarlanan sesleri çalar",
        extwin: "Mevcut ekranda görüntülenen bildirimleri çoğaltan gizli bir arka plan penceresi oluşturur. Bu pencere daha sonra OBS gibi yayın yazılımlarında bir Pencere Yakalama kaynağı olarak eklenir",
        audiosrc: "Uygulama tarafından üretilen sesin kaynağını seçin (veya devre dışı bırakın)",
        nowtracking: "Çalışan bir oyun için başarımların takip edildiğini bildiren bir bildirim göster",
        nowtrackingscale: `Takip Bildiriminin Boyutunu Ayarlayın`,
        nowtrackingpos: `Takip bildirim konumunu ayarlayın`,
        shortcuts: "Bir klavye kısayolu aracılığıyla bir Test Bildirimi tetikle. Her bildirim türü için özelleştirilebilir kısayollar",
        noiconcache: `Oyunları başlatırken başarı simgelerinin önbelleğini devre dışı bırakır.<br><br><span class="ttdesc">Bu, uygulamanın oyunları başlatırken performansını önemli ölçüde artırabilir ve aynı zamanda büyük miktarda başarıya sahip oyunlardaki takip sorunlarını çözebilir. Ancak, simge önbelleğini devre dışı bırakma nadir durumlarda bildirimlerde başarı simgelerinin eksik olmasına neden olabilir</span>`,
        steamss: "Bir başarı kilidini açtığında Steam ekran görüntüsü al",
        screenshots: "Bir bildirim görüntülendiğinde oluşturulacak Ek Medya türünü seçin",
        monitors: "Ekran görüntüsü alınacak monitör",
        ovpos: "Ekran görüntüsü içindeki bildirim yerleşimini belirleyin",
        ovmatch: "Bu bildirim türü için Customiser'da belirtilen Ekran Konumu ile eşleştir",
        ovpath: "Bu seçenekle oluşturulan ekran görüntülerinin kaydedileceği konum",
        ssdelay: "Bildirimin gerçekleştiği zamandan ekran görüntüsünün alınması arasında bir gecikme ekleyin",
        sspreview: "Kaydedildiğinde ekran görüntüsünün nasıl görüneceğini önizleyin",
        noanim: "Uygulama pencere animasyonlarını ve geçiş efektlerini devre dışı bırak",
        nvda: "Bir başarı kilidini açtığında başarı bilgilerini panoya kopyalayarak, NVDA gibi ekran okuyucu yazılımlar tarafından okunmasını sağlayın",
        tooltips: "Belirli UI öğelerinin üzerine gelindiğinde ipuçlarını göster",
        pollrate: `Oyun sırasında başarı verileri için güncelleme aralığını ayarlayın<br><br><span class="ttdesc">Performans, değer veya sistem donanımına bağlı olarak artabilir/azalabilir. Daha yüksek değerler genellikle daha düşük sistem yüküne yol açar, ancak bildirimlerin gecikmesine neden olabilir</span>`,
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
        mask: "Bildirimin belirli bölümlerini özel bir resimle maskelemeyi etkinleştirin",
        maskimg: `Maske olarak kullanılacak bir resim dosyası yükleyin<br><br><span class="ttdesc">CSS'de <code class="ttcode">mask-mode: alpha</code>, genellikle beklenenin tam tersi şekilde çalışır - resim dosyasındaki şeffaflık alanları gizlenirken, siyah/grinin alanları alttaki öğelerin görünmesine izin verir</span>`,
        primarycolor: "Bildirimin birincil rengini ayarlayın",
        secondarycolor: "Bildirimin ikincil rengini ayarlayın",
        tertiarycolor: "Bildirimin üçüncül rengini ayarlayın",
        fontcolor: "Bildirimde görüntülenen tüm metnin rengini ayarlayın",
        fontoutline: "Bildirimde görüntülenen tüm metne bir dış çizgi ekleyin",
        fontoutlinecolor: "Metin dış çizgisinin rengini ayarlayın",
        fontshadow: "Bildirimde görüntülenen tüm metne bir gölge ekleyin",
        fontshadowcolor: "Metin gölgesinin rengini ayarlayın",
        iconroundness: "Bildirimde görüntülenen başarı/oyun ikonunun yuvarlaklığını ayarlayın",
        plat: "100% ikonu olarak kullanılacak bir resim dosyası yükleyin",
        usegameicon: "Varsayılan bildirim ikonunu mevcut oyun ikonuyla değiştirin",
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
        link: `Aç <span class="hl">Bağlı Oyunları Yönet Menüsü</span>`,
        imgpath: "Bu seçenek tarafından oluşturulan bildirim görüntülerinin kaydedileceği konum",
        linkedgames: `Belirli Steam oyunları için <span class="hl">otomatik işlem takibini</span> atlayın<br><br><span class="ttdesc">Bu seçenek yalnızca çok belirli senaryolarda kullanılmalıdır. Kullanıcıların normal koşullarda bu seçeneği kullanmaları gerekmez!</span>`,
        exclusionlist: `Uygulamanın belirli Steam oyunlarının başarılarını izlemesini engelleyin<br><br><span class="ttdesc">Bu seçenek yalnızca çok belirli senaryolarda kullanılmalıdır. Kullanıcıların normal koşullarda bu seçeneği kullanmaları gerekmez!</span>`,
        ovx: "Ekran görüntüsünde gösterilen bildirimi yatay olarak kaydırma",
        ovy: "Ekran görüntüsünde gösterilen bildirimi dikey olarak kaydırma",
        importtheme: `Kullanıcı tarafından oluşturulan <span class="hl">tema dosyası</span> aracılığıyla özelleştirmeleri içe aktarın`,
        exporttheme: `Paylaşmak için şu anda seçili olan <span class="hl">temayı</span> dışa aktarın<br><br><span class="ttdesc">Dışa aktarmadan önce lütfen istenen <span class="hl">temanın</span> seçildiğinden (<span class="hl">Tema Seç</span> menüsü üzerinden) emin olun. Ayrıca özelleştirmelerin seçilen <span class="hl">temaya</span> kaydedilmiş olmasından (<span class="hl">Tema Kaydet</span> menüsü üzerinden) emin olun<br><br><u>Mevcut <span class="hl">temada</span> henüz kaydedilmemiş herhangi bir özelleştirme dışa aktarılmayacaktır!</u></span>`        
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
    }
}