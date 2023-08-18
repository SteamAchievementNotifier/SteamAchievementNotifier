export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Kullanıcı Tespit Edilemedi",
                tt: "Başarımların şu anda takip edildiği Steam kullanıcısı"
            },
            gamelbl: {
                elem: gameName ? gameName : "Oyun Tespit Edilemedi",
                tt: "Şu anda başarımların takip edildiği oyun"
            },
            previewbtn: {
                tt: "Seçili sesi önizleyin"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Varsayılan (Hiçbir Ses Dosyası Seçilmedi)" : custom.sounddir ? custom.sounddir : "Varsayılan (Hiçbir Ses Klasörü Seçilmedi)"
            },              
            soundmodelbl: {
                elem: "Ses Modu:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "dosya" : "rastgele"
            },
            togglemain: {
                elem: "Ana",
                tt: "Ana Başarı Bildirimi"
            },
            togglerare: {
                elem: "Nadir",
                tt: "Nadir Başarı Bildirimi"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% Başarı Bildirimi"
            },
            progresscirclewrapper: {
                tt: "Özelleştirilmiş bildirim önizlemesi göster"
            },
            testbtnwrapper: {
                elem: "Test Bildirimi Göster",
                tt: "Özelleştirilmiş bildirimin önizlemesini göster",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Özelleştir...",
                tt: "Bildirim özelleştirme menüsünü aç",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam çalışmıyor"
            },
            updatebtn: {
                tt: "Güncelleme mevcut"
            },
            kofibtn: "Ko-Fi'de Bağış Yapın!",
            discordbtn: "Discord'a Katılın!",
            githubbtn: "GitHub'ta Sorun Bildir!",
            settingstitlelbl: {
                elem: "Ayarlar"
            },
            configuration: {
                elem: "Yapılandırma",
                query: ".sanboxtitle > label"
            },
            language: {
                elem: "Dil",
                query: ".sanboxtitle > label"
            },
            os: {
                elem: "İşletim Sistemi",
                query: ".sanboxtitle > label"
            },
            notifications: {
                elem: "Bildirimler",
                query: ".sanboxtitle > label"
            },
            screenshots: {
                elem: "Ekran Görüntüleri",
                query: ".sanboxtitle > label"
            },
            accessibility: {
                elem: "Erişilebilirlik",
                query: ".sanboxtitle > label"
            },
            other: {
                elem: "Diğer",
                query: ".sanboxtitle > label"
            },
            apprevlbl: {
                elem: "Sürüm"
            },
            apikeybtn: {
                tt: "Steam Web API Anahtarınızı almak için buraya tıklayın"
            },
            apikey: {
                placeholder: "API Anahtarınızı Girin",
                tt: "Steam hesabınıza bağlı Steam Web API anahtarı"
            },
            eyebtn: {
                tt: "API Anahtarının görünürlüğünü aç/kapat"
            },
            apikeylbl: {
                elem: "API Anahtarı Al"
            },
            steam64idbtn: {
                tt: "Steam64 Kimliğinizi almak için buraya tıklayın"
            },
            steam64id: {
                placeholder: "Steam64 Kimliğinizi Girin",
                tt: "Steam hesabınıza bağlı Steam64 Kimliği"
            },
            steam64idlbl: {
                elem: "Steam64 Kimliği Al"
            },
            switchaccountspan: {
                elem: "Hesap Değiştir"
            },
            switchaccountbtn: {
                tt: "Bağlı Steam hesapları arasında geçiş yapın"
            },
            testconnectionlbl: {
                elem: "Bağlantıyı Test Et",
                tt: "Steam Web API'ye bağlantınızı test edin"
            },
            lang: {
                tt: "UI ve bildirimler için dil ayarını belirleyin"
            },            
            desktop: {
                elem: "Masaüstü Kısayolu Oluştur",
                tt: "Uygulamayı başlatmak için masaüstünde bir kısayol oluştur",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Windows ile Başlat",
                tt: "Windows başladığında uygulamayı otomatik olarak çalıştır",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Simge Durumunda Başlat",
                tt: "Uygulamayı başlattıktan sonra simge durumuna küçült",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Donanım Hızlandırması Yok",
                tt: "Uygulama penceresi için donanım hızlandırmasını devre dışı bırak",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Hafif Mod",
                tt: "Sistem kaynaklarını korumak için ana uygulama penceresini devre dışı bırakır. Uygulamayla etkileşime geçmek için sistem tepsisi simgesi üzerinden minimum seçenekler kullanılabilir",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Nadirlik Yüzdesi",
                tt: `Küresel bir açma yüzdesi bu sayıdan düşük olan başarımlar "Nadir" bildirimler olarak görüntülenir`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Sadece Ses Modu",
                tt: "Bildirimleri devre dışı bırakır, ancak bir başarı açıldığında seçilen sesi çalar",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Tüm Açma Yüzdesini Göster",
                tt: "Tüm bildirim türlerinde küresel açma yüzdesini görüntüler",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Harici Pencereye Kopyala",
                tt: `Tüm bildirimleri çoğaltan harici bir pencere. Akış/yakalama yazılımları tarafından hedef alınabilir.<div class="ttwarn">Bu pencere <u>tamamen şeffaftır</u>. Pencerenin geçerli konumunu vurgulamak için <span class="ttcode">Ctrl</span> tuşuna basılı tutun.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `""Şimdi Takip Ediliyor"u göster`,
                tt: `"Şu Anda Takip Ediliyor" bildirimini başlatırken aç/kapat`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Bildirim Kısayolları",
                tt: "Test Bildirimlerini tetiklemek için bir klavye kısayolu belirleyin",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Bu tür için bir Test Bildirimi tetiklemek için bir kısayol belirleyin"
            },
            sctabmain: {
                tt: "Ana Bildirim Kısayolu"
            },
            sctabrare: {
                tt: "Nadir Bildirim Kısayolu"
            },
            sctabplat: {
                tt: "100% Bildirim Kısayolu"
            },
            screenshotmode: {
                tt: "Otomatik başarı ekran görüntüleri için mod seçin"
            },
            displayscreenshot: {
                elem: "Bildirimde Ekran Görüntüsünü Göster",
                tt: "Başarı bildiriminde ekran görüntüsünün önizlemesini göster",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam Kısayol Tuşu",
                tt: "Başarı açıldığında Steam istemci tuş bağlamınızı eşleştirin",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Ana Bildirim Overlay'i"
            },
            ovtabrare: {
                tt: "Nadir Bildirim Overlay'i"
            },
            ovtabplat: {
                tt: "100% Bildirim Overlay'i"
            },
            monitor: {
                elem: "Monitör",
                tt: "Ekran görüntüsü kaynağı olarak kullanılacak monitörü seçin",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Overlay Konumu",
                tt: "Bildirim overlay'inin konumunu ayarlayın",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Yol",
                tt: "Ekran görüntülerinin kaydedileceği yolu belirleyin",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Önizleme",
                tt: `Bildirim overlay'ini önizleyin`,
                query: "label"
            },
            noanim: {
                elem: "Pencere Animasyonlarını Devre Dışı Bırak",
                tt: "Uygulama penceresi içinde geçiş animasyonlarını devre dışı bırak",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDA Desteğini Etkinleştir",
                tt: "Bildirim içeriğini NVDA ekran okuyucu yazılımı tarafından okunabilmesi için panoya kopyalar",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Tooltipleri Göster",
                tt: "Uygulama öğelerinin üzerine gelindiğinde tooltip'leri aç/kapat",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Bildirim Geliştirici Araçlarını Göster",
                tt: "Tetiklendiğinde bildirim Geliştirici Araçları Panelini açar",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Gizlilik Politikasını Görüntüle",
                tt: "Steam Achievement Notifier'ın Gizlilik Politikasını görüntüleyin",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Beta Kanalına Katıl",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Uygulama Günlüğünü Aç",
                tt: "Uygulama günlüğünün içeriğini görüntüleyin ve paylaşın",
                query: "label"
            },
            resetbtn: {
                elem: "Uygulamayı Sıfırla",
                tt: "Tüm depolanan verileri silerek uygulamayı yeniden başlat",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Bildirim animasyonunu duraklat/oynat"
            },
            customiserreplay: {
                tt: "Bildirim animasyonunu yeniden oynat"
            },
            customisersavepreset: {
                tt: "Mevcut özelleştirmeleri yeni bir Bildirim Ön Ayarı olarak kaydet"
            },
            tabbtnnext: {
                tt: "İleri"
            },
            tabbtnprev: {
                tt: "Geri"
            },
            notificationpreset: {
                elem: "Ön Ayar",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Bildirim Ön Ayarı",
                tt: "Özelleştirmek için bir bildirim ön ayarı seçin",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Nadir İkon Animasyonu",
                tt: `İkon arka planının animasyonunu aç/kapat`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Tüm Detayları Göster",
                tt: `Mevcut tüm bildirim detaylarını göster`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Görüntüleme Süresi",
                tt: "Bildirimin görüntülenme süresi",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Ölçek",
                tt: "Bildirimin boyutu<br><i>*Önizleme penceresine yansımaz</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Özel Metin",
                tt: "Bildirimde özel bir ileti göster",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Oyun Başlığını Kullan",
                tt: "Bildirimde mevcut oyunun başlığını göster",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Stil",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Arka Plan Stili",
                tt: "Bildirim arka planının stili",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Gradyan Açısı",
                tt: "Renk gradyanının açısını ayarla",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Arka Plan Resmi",
                tt: "Bildirim arka planı olarak ayarlamak için bir resim dosyası seçin",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Oyun Sanatı Parlaklığı",
                tt: "Oyun sanatının arka plan parlaklığını ayarla",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Yuvarlaklık",
                tt: "Bildirim köşelerinin yuvarlaklığını ayarla",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Yazı Tipi Boyutu",
                tt: "Yazı tipinin ölçeğini ayarla",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Saydamlık",
                tt: "Bildirim saydamlığını ayarla",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Sadece Arka Plan",
                tt: "Yalnızca arka plana saydamlık uygula, metin ve resimler tamamen opak kalsın",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Renkler",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Birincil Renk",
                tt: "Bildirim birincil rengini ayarla",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "İkincil Renk",
                tt: "Bildirim ikincil rengini ayarla",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Metin Rengi",
                tt: "Metnin rengini ayarla",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Metin Dış Çizgisi",
                tt: "Tüm bildirim metnine dış çizgi uygula",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Dış Çizgi Rengi",
                tt: "Metin dış çizgisinin rengini ayarla",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Metin Gölgesi",
                tt: "Tüm bildirim metnine gölge uygula",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Gölge Rengi",
                tt: "Metin gölgesinin rengini ayarla",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "İkon",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "İkon Yuvarlaklığı",
                tt: "Bildirim ikonunun yuvarlaklığını ayarla",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Özel İkon Kullan",
                tt: "Bir resim dosyasını özel ikon olarak kullan",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Özel İkon",
                tt: "Özel bir ikon olarak ayarlamak için bir resim dosyası seçin",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Özel İkonu Sıfırla`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Özel 100% İkonu Kullan",
                tt: `Özel bir resim dosyasını 100% ikonu olarak kullanın`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Özel 100% İkonu Seç",
                tt: `Özel bir 100% ikonu olarak kullanmak için bir resim dosyası seçin`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Özel 100% İkonu Sıfırla`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Oyun İkonu Kullan",
                tt: "Mevcut oyunun ikonunu kullan",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Pozisyon",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Ekran Pozisyonu",
                tt: "Bildirimin ekrandaki konumunu ayarla",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Özel Pozisyon Kullan",
                tt: "Bildirim için özel bir konum kullan",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Pozisyon Ayarla",
                tt: "Bildirim için özel bir konum ayarla",
                query: "label"
            },
            animdir: {
                elem: "Animasyon Yönü",
                tt: "Bildirimin animasyonunun yönünü ayarla",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "GİZLİLİK POLİTİKASI"
            },
            ppusagetitle: {
                elem: "STEAM WEB API VERİ KULLANIMI"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier, kullanıcının Steam hesaplarıyla ilgili verileri almak ve görüntülemek için Valve'ın <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span>'sini kullanır. Bu veriler, kullanıcı tarafından uygulamaya sağlanan Steam API Anahtarı/Steam64 Kimliği kombinasyonu aracılığıyla uygulamaya iletilebilir. Bu veriler şunları içerir:`
            },
            ppstats: {
                elem: "Kilitli ve kilitsiz başarı istatistikleri"
            },
            ppusername: {
                elem: "Steam kullanıcı adınız"
            },
            ppsteamgames: {
                elem: "Oynadığınız Steam oyunları"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier, gelecekte ek uygulama özellikleri ve güncellemeler sağlamak için ileride daha fazla Steam Web API verisi kullanabilir."
            },
            ppkey64title: {
                elem: "STEAM API ANAHTARI/STEAM64 KİMLİK KULLANIMI"
            },
            ppauth: {
                elem: "Steam Achievement Notifier, Steam Web API'ye yetkili erişim için kullanıcının Steam API Anahtarı/Steam64 Kimliği kombinasyonunu girmesini gerektirir."
            },
            ppnoauth: {
                elem: "Bu bilgi olmadan, kullanıcının Steam hesaplarıyla ilgili verileri - başarı verileri de dahil olmak üzere - almak için kullanılan Valve tarafından sağlanan web bağlantılarına erişilemez."
            },
            ppstoragetitle: {
                elem: "STEAM WEB API VERİ SAKLAMA"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier, Steam Web API verilerini yalnızca uygulama içinde kullanım için kullanıcının yerel bilgisayarında geçici olarak depolar. Bu verilerin geçici depolanması yalnızca Steam Achievement Notifier tarafından kullanılması için tasarlanmıştır ve normal koşullarda tüm geçici olmayan Steam Web API verileri, uygulamanın kapatılmasıyla birlikte yerel depolamadan temizlenir."
            },
            pppersist: {
                elem: "Kullanıcının cihazında kalıcı olarak depolanan veriler, kullanıcı kolaylığı için uygulama tarafından depolanan verileri içerir, örneğin kullanıcının Steam Web API Anahtarı ve Steam64 Kimliği."
            },
            ppdelete: {
                elem: "Bu veriler ayrıca kullanıcı tarafından gerektiğinde herhangi bir zamanda manuel olarak silinebilir. Steam Achievement Notifier tarafından oluşturulan dosyalar aşağıdaki dizinde bulunur:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Şu anda desteklenmiyor"
            },
            ppcollecttitle: {
                elem: "VERİ TOPLAMA POLİTİKASI"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier, kullanıcının açık izni olmadan kullanıcı verilerini kullanıcının yerel dosya sisteminden dışarıya göndermez veya depolamaz. Bu, uygulama içinde kullanım için Steam Web API aracılığıyla alınan herhangi bir bilgiyi, Steam Web API'ye erişim için uygulamaya sağlanan Steam API Anahtarı/Steam64 Kimliği kombinasyonu dahil olmak üzere içerir."
            },
            ppconsent: {
                elem: "Onayın doğrulanması ve ardından dışarıya bilgi göndermek amacıyla mevcut veya gelecekteki özellik uygulamalarını kullanmanın izin verilen kullanımıyla, kullanıcı tarafından bunun için zımni izin verilir. Bu durumlarda, kullanıcı her zaman gönderilen verinin niteliği hakkında bilgilendirilir ve uygulama dışına veri gönderimi için izni onaylamak için uyarılır."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier, kullanıcı tarafından uygulamaya sağlanan herhangi bir bilgiye dışarıdan erişim, görüntüleme veya toplama yöntemlerini bilinçli olarak dışarıda bırakır, ancak mevcut veya gelecekteki özellik uygulamaları aracılığıyla uygulama, kullanıcının onayıyla verileri kullanıcının adına dışarıya gönderebilir."
            },
            pprequests: {
                elem: "Steam Web API'den veri almak için uygulama içinden yapılan istekler, web tarayıcıları tarafından sağlanan işlevselliğe benzer şekilde uygulama içinde yapılır. Bu istekler, Steam Web API tarafından gereken şekilde kullanıcının Steam API Anahtarı/Steam64 Kimliği kombinasyonunu içerir, ancak diğer uygulamalar tarafından kullanım veya onaylanması için bilerek kullanıma sunulmaz."
            },
            ppusertitle: {
                elem: "KULLANICI SORUMLULUĞU"
            },
            ppsteamtou: {
                elem: `HERHANGİ BİR RESMİ OLARAK YAYINLANAN STEAM ACHIEVEMENT NOTIFIER'IN HERHANGİ BİR RESMİ VERSİYONUNU <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">RESMİ GITHUB DEPOSU</span> ÜZERİNDEN İNDİRİP KULLANARAK, KULLANICI OLARAK, DOLAYISIYLA, STEAM WEB API KULLANIM KOŞULLARININ 7. VE 8. BÖLÜMLERİNE UYAR.`
            },   
            gamedetails: "Oyun Detayları",
            mustbepublic: "Herkese Açık olarak ayarlanmalıdır",            
            nosoundfile: "Varsayılan (Hiç Ses Dosyası Seçilmedi)",
            nosoundfolder: "Varsayılan (Hiç Ses Klasörü Seçilmedi)",
            file: "Dosya",
            randomised: "Rastgele",            
            audioselectdialog: `Ses ${custom.mode === "file" ? "Dosyası" : "Klasörü"} Seçin`,
            imgselectdialog: `Resim Dosyası Seçin`,
            unsupported: "Desteklenmeyen dosya!",
            novalidaudiofiles: "Geçerli ses dosyası bulunamadı!",
            nolocate: "Dosya bulunamıyor!",
            switchaccountstitle: "Hesap Değiştir",
            noaccounts: "Başlamak için bir hesap ekleyin!",
            connecting: "Bağlanıyor...",
            connected: "Bağlandı",
            testsuccessuser: `Hazırsınız`,
            testsuccess1: `<span>Oyun Ayrıntılarınızın</span> <a href="${privacysettings}">Steam Gizlilik Ayarları</a>'nda <span>Herkese Açık</span> olarak ayarlandığından emin olun`,
            testsuccess2: `Oyun içi görüntüleme modunun <span>Sınırlandırılmamış</span> olarak ayarlı olduğundan, bildirimler oyun penceresinin üzerinde görüntülenebilir`,
            noapikeytitle: "API Anahtarı Yok",
            noapikeytxt: "Lütfen API Anahtarınızı girin",
            noapikeyhint: `<img src="./icon/key.svg" alt=""> simgesine tıklayarak API Anahtarınızı alın`,
            nosteam64idtitle: "Steam64 Kimliği Yok",
            nosteam64idtxt: "Lütfen Steam64 Kimliğinizi girin",
            nosteam64idhint: `<img src="./icon/id.svg" alt=""> simgesine tıklayarak Steam64 Kimliğinizi alın`,
            invalidapikeytitle: "Geçersiz API Anahtarı!",
            invalidapikeymsg: "Sağlanan API Anahtarı ile Steam Web API'ye erişilemiyor",
            invalidapikeydetail1: "API Anahtarınızın doğru olduğundan emin olun",
            invalidapikeydetail2: "Hesabınız için yeni bir API Anahtarı oluşturun",
            invalidsteam64idtitle: "Geçersiz Steam64 Kimliği!",
            invalidsteam64idmsg: "Sağlanan Steam64 Kimliği ile ilişkilendirilmiş bir Steam hesabı bulunamıyor",
            invalidsteam64iddetail1: "Sağladığınız Steam64 Kimliği değerinin hesabınız için doğru değer olduğunu kontrol edin",
            nonetworkfound: "Aktif bir ağ bağlantısı bulunamadı",
            connecttonetwork: "Bilgisayarınızı bir ağa bağlayın ve tekrar deneyin",
            testdefaulterrortitle: "Bir Hata Oluştu!",
            testdefaulterrormsg: "Steam Web API'ye bağlanırken bir hata oluştu",
            testdefaulterrordetail1: "Lütfen bu sorunu Discord veya GitHub üzerinden bildirin!",
            sspath: "Ekran Görüntüsü Yolu Seçin",
            wronguser: user ? `${user} Steam'e giriş yapmamış!` : "Bağlı kullanıcı hesapları bulunamadı!",
            switchuser: "Hesapları değiştirmek için buraya tıklayın",
            trackingfailed: "Takip Başarısız!",
            checkapplog: "Ayrıntılar için uygulama günlüğünü kontrol edin",
            soon: "Yakında!",
            gamecomplete: "Tamamlandı: %100",
            gametitle: "Oyun Başlığı",
            achievementunlocked: "Başarı Kilidi Açıldı",
            achievementtitle: "Başarı Başlığı",
            allachievements: "Tüm başarıları kilitlemeyi başardınız!",
            achievementdesc: "Başarı açıklaması",
            show: "Göster",
            quit: "Çıkış",
            off: "Kapalı",
            steamss: "Steam Oyun İçi Ekran Görüntüsü",
            overlayss: "Bildirim Örtüsü ile Ekran Görüntüsü",
            match: "Özelleştirme Eşleştir",
            topleft: "Sol Üst",
            topcenter: "Üst Orta",
            topright: "Sağ Üst",
            bottomleft: "Sol Alt",
            bottomcenter: "Alt Orta",
            bottomright: "Sağ Alt",
            solid: "Düz Renk",
            gradient: "Gradyan",
            bgimg: "Arka Plan Resmi",
            gameart: "Oyun Sanatı",
            up: "Yukarı",
            down: "Aşağı",
            left: "Sol",
            right: "Sağ",    
            tracking: "Şimdi Takip",
            inuse: "Tarafından kullanılıyor",
            invalidshortcut: "Geçersiz kısayol"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Bir başarı kilidi açıldığında çalınacak ses dosyasını seçin" : "Bir başarı kilidi açıldığında rastgele çalınacak ses dosyalarını içeren bir klasörü seçin")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
              elem: "Uygulama başlatıldığından beri olanları içeren bir günlüğü aşağıda bulabilirsiniz"
            },
            copylbl: {
              elem: "Günlük İçeriğini Kopyala"
            },
            openlbl: {
              elem: "Günlük Dosyası Oluştur"
            },
        }          

        return translations
    }
}