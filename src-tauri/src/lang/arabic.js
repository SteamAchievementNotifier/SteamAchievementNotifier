export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "لا يوجد مستخدم مكتشف",
                tt: "مستخدم Steam الذي يتم تتبع إنجازاته حاليًا"
            },
            gamelbl: {
                elem: gameName ? gameName : "لا يوجد لعبة مكتشفة",
                tt: "اللعبة التي يتم تتبع إنجازاتها حاليًا"
            },
            previewbtn: {
                tt: "عرض الملف الصوتي المحدد"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "الافتراضي (لم يتم تحديد ملف صوت)" : custom.sounddir ? custom.sounddir : "الافتراضي (لم يتم تحديد مجلد صوت)"
            },              
            soundmodelbl: {
                elem: "وضع الصوت:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "ملف" : "عشوائي"
            },
            togglemain: {
                elem: "الرئيسية",
                tt: "إشعار إنجاز رئيسي"
            },
            togglerare: {
                elem: "نادر",
                tt: "إشعار إنجاز نادر"
            },
            toggleplat: {
                elem: "100%",
                tt: "إشعار إنجاز 100%"
            },
            progresscirclewrapper: {
                tt: "عرض معاينة للإشعار المخصص"
            },
            testbtnwrapper: {
                elem: "عرض إشعار اختباري",
                tt: "عرض معاينة للإشعار المخصص",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "تخصيص...",
                tt: "فتح قائمة تخصيص الإشعار",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "تطبيق Steam غير مشغّل"
            },
            updatebtn: {
                tt: "تحديث متاح"
            },
            kofibtn: "التبرع على Ko-Fi!",
            discordbtn: "الانضمام على Discord!",
            githubbtn: "الإبلاغ عن مشكلة على GitHub!",
            settingstitlelbl: {
                elem: "الإعدادات"
            },
            configuration: {
                elem: "التكوين",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "اللغة",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "نظام التشغيل",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "الإشعارات",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "لقطات الشاشة",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "سهولة الوصول",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "أخرى",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "نسخة"
            },
            apikeybtn: {
                tt: "انقر هنا للحصول على مفتاح API لـ Steam Web"
            },
            apikey: {
                placeholder: "أدخل مفتاح API الخاص بك",
                tt: "مفتاح API لـ Steam Web المرتبط بحساب Steam الخاص بك"
            },
            eyebtn: {
                tt: "تبديل ظهور مفتاح API"
            },
            apikeylbl: {
                elem: "الحصول على مفتاح API"
            },
            steam64idbtn: {
                tt: "انقر هنا للحصول على معرف Steam64 الخاص بك"
            },
            steam64id: {
                placeholder: "أدخل مُعرِّف Steam64 الخاص بك",
                tt: "معرف Steam64 المرتبط بحساب Steam الخاص بك"
            },
            steam64idlbl: {
                elem: "الحصول على معرف Steam64"
            },
            switchaccountspan: {
                elem: "تبديل الحسابات"
            },
            switchaccountbtn: {
                tt: "التبديل بين حسابات Steam المرتبطة"
            },
            testconnectionlbl: {
                elem: "اختبار الاتصال",
                tt: "اختبار الاتصال بـ Steam Web API"
            },
            lang: {
                tt: "تحديد اللغة للواجهة والإشعارات"
            },
            desktop: {
                elem: "إنشاء اختصار سطح المكتب",
                tt: "إنشاء اختصار على سطح المكتب لتشغيل التطبيق",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "تشغيل مع بدء تشغيل Windows",
                tt: "تشغيل التطبيق تلقائيًا عند بدء تشغيل Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "تشغيل مصغر",
                tt: "تصغير التطبيق إلى علبة النظام بعد التشغيل",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "تعطيل تسريع الأجهزة",
                tt: "تعطيل تسريع الأجهزة لنافذة التطبيق",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "وضع مبسط",
                tt: "تعطيل نافذة التطبيق الرئيسية لتوفير موارد النظام. ستظل الخيارات الأساسية متاحة عبر أيقونة علبة النظام للتفاعل مع التطبيق",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "نسبة الندرة",
                tt: `سيتم عرض إشعارات "نادرة" فقط للإنجازات التي يكون معدل إنجازها العالمي أقل من هذا الرقم`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "وضع الصوت فقط",
                tt: "تعطيل الإشعارات، ولكن يتم تشغيل الصوت المحدد عند فتح إنجاز",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "عرض جميع نسب الإنجاز",
                tt: "عرض نسب الإنجاز العالمية في جميع أنواع الإشعارات",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "تكرار في نافذة خارجية",
                tt: `نافذة خارجية تكرر جميع الإشعارات. يمكن استهدافها بواسطة برامج البث المباشر / التقاط الشاشة.<div class="ttwarn">هذه النافذة شفافة بالكامل. لتحديد موقع النافذة الحالي، اضغط مع الاستمرار على مفتاح <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `عرض إشعار "تتبع الآن"`,
                tt: `تبديل إشعار "تتبع الآن" عند بدء تشغيل لعبة`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "اختصارات الإشعارات",
                tt: "قم بتعيين اختصار لوحة المفاتيح لتنشيط إشعارات الاختبار",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "تعيين اختصار لتنشيط إشعار اختبار لهذا النوع"
            },
            sctabmain: {
                tt: "اختصار إشعار رئيسي"
            },
            sctabrare: {
                tt: "اختصار إشعار نادر"
            },
            sctabplat: {
                tt: "اختصار إشعار 100٪"
            },
            screenshotmode: {
                tt: "اختر وضع اللقطات الشاشة التلقائي للإنجازات"
            },
            displayscreenshot: {
                elem: "عرض اللقطة الشاشة في الإشعار",
                tt: "عرض معاينة اللقطات الشاشة ضمن إشعار الإنجاز",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "اختصار مفتاح اللقطة في Steam",
                tt: "استخدام اختصار مفتاح Steam لالتقاط لقطات شاشة Steam الأصلية عند فتح إنجازات",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "التراكيب السابقة الرئيسية"
            },
            ovtabrare: {
                tt: "التراكيب السابقة النادرة"
            },
            ovtabplat: {
                tt: "التراكيب السابقة 100%"
            },
            monitor: {
                elem: "شاشة",
                tt: "تحديد الشاشة المستخدمة كمصدر للقطات الشاشة",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "موضع الأفق",
                tt: "تحديد موضع التراكيب السابقة للإشعار",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "المسار",
                tt: "تحديد المسار الذي ستحفظ فيه اللقطات الشاشة",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "معاينة",
                tt: "معاينة التراكيب السابقة للإشعار",
                query: "label"
            },
            noanim: {
                elem: "تعطيل تحريك نافذة التطبيق",
                tt: "تعطيل تحريك الانتقال داخل نافذة التطبيق",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "تمكين دعم NVDA",
                tt: "نسخ محتويات الإشعار إلى الحافظة لتكون مقروءة بواسطة برنامج قراءة الشاشة NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "عرض تلميحات",
                tt: "تفعيل أو إلغاء تفعيل التلميحات عند تحويم المؤشر فوق عناصر التطبيق",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "عرض أدوات تطوير الإشعار",
                tt: "فتح لوحة أدوات تطوير الإشعار عند التنشيط",
                query: ".sanboxlbl"
            },
            filesystem: {
                elem: "تمكين تحميل النظام الملفي",
                tt: `تحميل ملفات الإشعار والأصول من دليل التنفيذ التطبيقي للتطبيق، بدلاً من التنفيذ داخلياً`,
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "عرض سياسة الخصوصية",
                tt: "عرض سياسة الخصوصية لتطبيق Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "الانضمام إلى قناة التجريبية",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "فتح سجل التطبيق",
                tt: "عرض ومشاركة محتويات سجل التطبيق",
                query: "label"
            },
            resetbtn: {
                elem: "إعادة تعيين التطبيق",
                tt: "حذف جميع البيانات المخزنة وإعادة تشغيل التطبيق",
                query: "label"
            },            
            customiserplaystate: {
                tt: "توقف/استمرار تشغيل رسوم الإشعار"
            },
            customiserreplay: {
                tt: "إعادة تشغيل رسوم الإشعار"
            },
            customisersavepreset: {
                tt: "حفظ التخصيصات الحالية كمجموعة تنبيه جديدة"
            },
            tabbtnnext: {
                tt: "التالي"
            },
            tabbtnprev: {
                tt: "السابق"
            },
            notificationpreset: {
                elem: "الإعداد المسبق",
                query: ".sanboxtitle > label"
            },
            preset: {
                elem: "مجموعة تنبيه",
                tt: "تحديد مجموعة تنبيه للتخصيص",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "رسوم الرمز النادر",
                tt: "تشغيل/إيقاف تشغيل رسوم الرمز النادر",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "عرض جميع التفاصيل",
                tt: `عرض جميع التفاصيل المتاحة للإشعارات`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "وقت العرض",
                tt: "مدة عرض الإشعار",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "المقياس",
                tt: "حجم الإشعار<br><i>*غير معكوس في نافذة المعاينة</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "نص مخصص",
                tt: "عرض رسالة مخصصة في الإشعار",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "استخدام عنوان اللعبة",
                tt: "عرض عنوان اللعبة الحالية في الإشعار",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "خط مخصص",
                tt: "تحميل ملف خط مخصص لتطبيقه على جميع عناصر النص داخل الإشعار",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "إعادة تعيين الخط إلى الوضع الافتراضي"
            },
            style: {
                elem: "نمط",
                query: ".sanboxtitle > label"
            },
            bgstyle: {
                elem: "نمط الخلفية",
                tt: "تحديد نمط خلفية الإشعار",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "زاوية التدرج",
                tt: "تحديد زاوية التدرج اللوني",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "صورة الخلفية",
                tt: "تحديد ملف صورة لتعيينه كخلفية الإشعار",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "سطوع صورة اللعبة",
                tt: "تحديد سطوع خلفية صورة اللعبة",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "الانحناء",
                tt: "تحديد انحناء زوايا الإشعار",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "حجم الخط",
                tt: "تحديد حجم الخط",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "الشفافية",
                tt: "تحديد شفافية الإشعار",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "الخلفية فقط",
                tt: "تطبيق الشفافية فقط على الخلفية، مع الاحتفاظ بالنص والصور معتمة بشكل كامل",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "الألوان",
                query: ".sanboxtitle > label"
            },
            primarycolor: {
                elem: "اللون الأساسي",
                tt: "تحديد اللون الأساسي للإشعار",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "اللون الثانوي",
                tt: "تحديد اللون الثانوي للإشعار",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "لون النص",
                tt: "تحديد لون النص",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "خط النص",
                tt: "تطبيق حاشية لجميع نصوص الإشعار",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "لون الحاشية",
                tt: "تحديد لون حاشية النص",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "ظل النص",
                tt: "تطبيق ظل لجميع نصوص الإشعار",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "لون الظل",
                tt: "تحديد لون ظل النص",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "الرمز",
                query: ".sanboxtitle > label"
            },
            iconroundness: {
                elem: "انحناء الرمز",
                tt: "تحديد انحناء رمز الإشعار",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "استخدام رمز مخصص",
                tt: "استخدام ملف صورة كرمز مخصص",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "رمز مخصص",
                tt: "تحديد ملف صورة لتعيينه كرمز مخصص",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `إعادة تعيين الأيقونة المخصصة`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "استخدام أيقونة مخصصة 100%",
                tt: `استخدم ملف صورة كأيقونة مخصصة بنسبة 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "أيقونة مخصصة 100%",
                tt: `حدد ملف صورة لتعيينه كأيقونة مخصصة بنسبة 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `إعادة تعيين الأيقونة المخصصة بنسبة 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "استخدام رمز اللعبة",
                tt: "استخدام رمز اللعبة الحالية",
                query: ".sanboxlbl"
            },
            position: {
                elem: "الموضع",
                query: ".sanboxtitle > label"
            },
            pos: {
                elem: "موضع الشاشة",
                tt: "تحديد موضع الإشعار على الشاشة",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "استخدام موضع مخصص",
                tt: "استخدام موضع مخصص للإشعار",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "تعيين الموضع",
                tt: "تحديد موضع مخصص للإشعار",
                query: "label"
            },
            animdir: {
                elem: "اتجاه الحركة",
                tt: "تحديد اتجاه حركة الإشعار",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "سياسة الخصوصية"
            },
            ppusagetitle: {
                elem: "استخدام بيانات واجهة برمجة تطبيقات Steam"
            },
            ppusagecontent: {
                elem: `تستخدم Steam Achievement Notifier واجهة برمجة تطبيقات Steam الخاصة بشركة Valve لاسترداد وعرض البيانات المتعلقة بحسابات Steam للمستخدم، من خلال مفتاح واجهة برمجة تطبيقات Steam / معرّف Steam64 التي يقدمها المستخدم للتطبيق. تشمل هذه البيانات:`
            },
            ppstats: {
                elem: "إحصاءات الإنجازات المفتوحة والمغلقة"
            },
            ppusername: {
                elem: "اسم مستخدم Steam الخاص بك"
            },
            ppsteamgames: {
                elem: "ألعاب Steam التي لعبتها"
            },
            ppusagefooter: {
                elem: "يمكن لـ Steam Achievement Notifier استخدام مزيد من بيانات واجهة برمجة تطبيقات Steam في المستقبل لتوفير ميزات تطبيق إضافية وتحديثات."
            },
            ppkey64title: {
                elem: "استخدام مفتاح واجهة برمجة تطبيقات Steam/معرّف Steam64"
            },
            ppauth: {
                elem: "يتطلب Steam Achievement Notifier من المستخدم إدخال مفتاح واجهة برمجة تطبيقات Steam/معرّف Steam64 للوصول المصادق عليه إلى واجهة برمجة تطبيقات Steam."
            },
            ppnoauth: {
                elem: "بدون هذه المعلومات، لا يمكن الوصول إلى الروابط الإلكترونية (المقدمة لاستخدامها بواسطة Valve للوصول إلى واجهة برمجة تطبيقات Steam) المستخدمة لاسترداد البيانات المتعلقة بحسابات Steam للمستخدم، بما في ذلك بيانات الإنجازات."
            },
            ppstoragetitle: {
                elem: "تخزين بيانات واجهة برمجة تطبيقات Steam"
            },
            ppstorage: {
                elem: "يقوم Steam Achievement Notifier بتخزين بيانات واجهة برمجة تطبيقات Steam مؤقتًا محليًا على جهاز المستخدم فقط للاستخدام داخل التطبيق. يتم تخزين هذه البيانات المؤقتة للاستخدام الحصري في Steam Achievement Notifier، وبظروف طبيعية، يتم مسح جميع بيانات واجهة برمجة تطبيقات Steam غير الدائمة من التخزين المحلي عند خروج المستخدم من التطبيق."
            },
            pppersist: {
                elem: "تشمل البيانات الدائمة التي يتم تخزينها على جهاز المستخدم فقط البيانات التي يتم تخزينها بواسطة التطبيق لراحة المستخدم، مثل مفتاح واجهة برمجة تطبيقات Steam الخاص بالمستخدم ومعرّف Steam64."
            },
            ppdelete: {
                elem: "يمكن أيضًا حذف هذه البيانات يدويًا من قبل المستخدم في أي وقت إذا لزم الأمر. توجد الملفات التي تم إنشاؤها بواسطة Steam Achievement Notifier في الدليل التالي:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "غير مدعوم حاليًا"
            },
            ppcollecttitle: {
                elem: "موقفنا بشأن جمع البيانات"
            },
            ppnosend: {
                elem: "لن يرسل Steam Achievement Notifier أبدًا أو يخزن بيانات المستخدم خارج نظام الملفات المحلي للمستخدم بدون إذن صريح من المستخدم للقيام بذلك. يشمل ذلك أي معلومات يتم استردادها عبر واجهة برمجة تطبيقات Steam للاستخدام داخل التطبيق، بما في ذلك مفتاح واجهة برمجة تطبيقات Steam / معرّف Steam64 المقدم للتطبيق للوصول إلى واجهة برمجة تطبيقات Steam."
            },
            ppconsent: {
                elem: "من خلال تأكيد الإذن واستخدام ميزات التنفيذ الحالية أو المستقبلية المصممة لإرسال المعلومات خارجيًا، يتم منح الإذن ضمنيًا من قبل المستخدم للقيام بذلك. في هذه الحالات، سيتم إبلاغ المستخدم دائمًا بطبيعة البيانات التي يتم إرسالها، وسيتم طلب موافقته على تأكيد الإذن لإرسال البيانات خارج التطبيق."
            },
            ppexclude: {
                elem: "يستبعد Steam Achievement Notifier أي وسيلة للوصول الخارجي أو عرض أو جمع أي معلومات تم توفيرها للتطبيق من قبل المستخدم، ولكن من خلال التنفيذات الحالية أو المستقبلية للميزات، قد يكون التطبيق قادرًا على إرسال البيانات خارجيًا نيابة عن المستخدم، ولكن فقط بعد موافقته على ذلك."
            },
            pprequests: {
                elem: "يتم إجراء طلبات للوصول إلى البيانات من واجهة برمجة تطبيقات Steam داخل التطبيق نفسه باستخدام طرق مدمجة، على غرار الوظائف المقدمة من قبل المتصفحات الإلكترونية. تحتوي هذه الطلبات على مفتاح واجهة برمجة تطبيقات Steam / معرّف Steam64 الخاص بالمستخدم كما يتطلبه واجهة برمجة تطبيقات Steam، ولكنها لا تتاح بشكل مقصود للاستخدام أو اعتراضه من قبل أي تطبيقات أخرى."
            },
            ppusertitle: {
                elem: "مسؤولية المستخدم"
            },
            ppsteamtou: {
                elem: `من خلال تنزيل واستخدام أي نسخة رسمية من Steam Achievement Notifier عبر <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">مستودع GitHub الرسمي</span>، أنت، كمستخدم، ونتيجة لذلك، تلتزم بالأبواب 7 و 8 من <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">شروط استخدام واجهة برمجة تطبيقات Steam</span> (Steam API Terms of Use). تلتزم أيضًا بسياسة الخصوصية وشروط الاستخدام المطبقة على تطبيق Steam Achievement Notifier، والتي يمكن الوصول إليها عبر الروابط المقدمة في التطبيق نفسه.`
            },
            gamedetails: "تفاصيل اللعبة",
            mustbepublic: "يجب أن تكون عامة",
            nosoundfile: "الافتراضي (لم يتم تحديد ملف صوت)",
            nosoundfolder: "الافتراضي (لم يتم تحديد مجلد صوت)",
            file: "ملف",
            randomised: "عشوائي",
            audioselectdialog: `اختر صوت ${custom.mode === "file" ? "ملف" : "مجلد"}`,
            imgselectdialog: `اختر ملف صورة`,
            unsupported: "نوع الملف غير مدعوم!",
            novalidaudiofiles: "لا توجد ملفات صوت صالحة!",
            nolocate: "تعذر تحديد موقع الملف!",
            switchaccountstitle: "تبديل الحسابات",
            noaccounts: "أضف حسابًا للبدء!",
            connecting: "جارٍ الاتصال...",
            connected: "متصل",
            testsuccessuser: `أنت جاهز`,
            testsuccess1: `تأكد من أن <span>تفاصيل اللعبة</span> مضبوطة على <span>عام</span> في <a href="${privacysettings}">إعدادات الخصوصية في Steam</a>`,
            testsuccess2: `تحقق مما إذا كان وضع العرض في اللعبة مضبوطًا على <span>بدون حدود</span> حتى يمكن عرض الإشعارات فوق نافذة اللعبة`,
            noapikeytitle: "لا توجد مفتاح API",
            noapikeytxt: "يرجى إدخال مفتاح API الخاص بك",
            noapikeyhint: `انقر على أيقونة <img src="./icon/key.svg" alt=""> للحصول على مفتاح API الخاص بك`,
            nosteam64idtitle: "لا يوجد معرّف Steam64",
            nosteam64idtxt: "يرجى إدخال معرّف Steam64 الخاص بك",
            nosteam64idhint: `انقر على أيقونة <img src="./icon/id.svg" alt=""> للحصول على معرّف Steam64 الخاص بك`,
            invalidapikeytitle: "مفتاح API غير صالح!",
            invalidapikeymsg: "تعذر الوصول إلى واجهة برمجة تطبيقات Steam عبر مفتاح API المقدم",
            invalidapikeydetail1: "تحقق من صحة مفتاح API الخاص بك",
            invalidapikeydetail2: "أنشئ مفتاح API جديد لحسابك",
            invalidsteam64idtitle: "معرّف Steam64 غير صالح!",
            invalidsteam64idmsg: "تعذر العثور على حساب Steam مرتبط بمعرّف Steam64 المقدم",
            invalidsteam64iddetail1: "تحقق من أن قيمة معرّف Steam64 التي قدمتها هي القيمة الصحيحة لحساب Steam الخاص بك",
            nonetworkfound: "لم يتم العثور على اتصال شبكة نشط",
            connecttonetwork: "قم بتوصيل جهاز الكمبيوتر بشبكة وحاول مرة أخرى",
            testdefaulterrortitle: "حدث خطأ!",
            testdefaulterrormsg: "حدث خطأ أثناء الاتصال بواجهة برمجة تطبيقات Steam",
            testdefaulterrordetail1: "يرجى الإبلاغ عن هذه المشكلة على Discord أو GitHub!",
            sspath: "حدد مسار اللقطة",
            wronguser: user ? `${user} غير مسجل في Steam!` : "لم يتم العثور على حسابات مستخدم مرتبطة!",
            switchuser: "انقر هنا للتبديل بين الحسابات",
            trackingfailed: "فشل التتبع!",
            checkapplog: "تحقق من سجل التطبيق للحصول على التفاصيل",
            soon: "قريبًا!",
            gamecomplete: "اكتمال بنسبة 100%",
            gametitle: "عنوان اللعبة",
            achievementunlocked: "تم فتح الإنجاز",
            achievementtitle: "عنوان الإنجاز",
            allachievements: "لقد فتحت جميع الإنجازات!",
            achievementdesc: "وصف الإنجاز",
            show: "عرض",
            quit: "إنهاء",
            off: "إيقاف",
            steamss: "لقطة شاشة داخل اللعبة في Steam",
            overlayss: "لقطة شاشة مع طبقة تراكب الإشعار",
            match: "مطابقة مخصصة",
            topleft: "الأعلى اليسار",
            topcenter: "الأعلى الوسط",
            topright: "الأعلى اليمين",
            bottomleft: "الأسفل اليسار",
            bottomcenter: "الأسفل الوسط",
            bottomright: "الأسفل اليمين",
            solid: "صلب",
            gradient: "تدرج",
            bgimg: "صورة الخلفية",
            gameart: "فن اللعبة",
            up: "أعلى",
            down: "أسفل",
            left: "يسار",
            right: "يمين",
            tracking: "المتابعة الآن",
            inuse: "يستخدم بواسطة",
            invalidshortcut: "اختصار غير صالح",
            nofont: "لم يتم تحديد خط",
            fontselectdialog: "اختيار ملف الخط"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "حدد ملف صوتي للتشغيل عند فتح إنجاز" : "حدد مجلدًا يحتوي على ملفات صوتية للتشغيل عشوائيًا عند فتح إنجاز")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "إليك سجل بما حدث منذ بدء تشغيل التطبيق في"
            },
            copylbl: {
                elem: "نسخ محتويات السجل"
            },
            openlbl: {
                elem: "إنشاء ملف سجل"
            }
        }

        return translations
    }
}