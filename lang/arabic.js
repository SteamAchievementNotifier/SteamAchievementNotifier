document.getElementById("username").innerHTML = "لم يتم اكتشاف أي مستخدم";
document.getElementById("gamestatus").innerHTML = "لم يتم اكتشاف لعبة";
document.getElementById("soundfile").innerHTML = "افتراضي (لم يتم تحديد صوت)";
document.getElementById("soundfilerare").innerHTML = "افتراضي (لم يتم تحديد صوت)";
document.getElementById("maincheevsound").innerHTML = "صوت الإنجاز الرئيسي";
document.getElementById("rarecheevsound").innerHTML = "نادر صوت الإنجاز";
document.getElementById("test").innerHTML = "إظهار إخطار الاختبار";
document.getElementById("testrare").innerHTML = "إظهار إخطار اختبار نادر";
document.getElementById("settingstitle").innerHTML = "الإعدادات";
document.getElementById("configtitle").innerHTML = "إعدادات";
document.getElementById("apibox").placeholder = "أدخل مفتاح API";
document.getElementById("steam64box").placeholder = "أدخل Steam64ID";
document.getElementById("other").innerHTML = "آخر";
document.getElementById("showscreenshotlbl").innerHTML = "التقاط لقطة شاشة Steam";
document.getElementById("showscreenshotlblrare").innerHTML = "التقاط لقطة شاشة Steam";
document.getElementById("previewlbl").innerHTML = "إظهار معاينة لقطة الشاشة"
document.getElementById("previewlblrare").innerHTML = "إظهار معاينة لقطة الشاشة"
document.getElementById("desktoplbl").innerHTML = "إنشاء اختصار سطح المكتب";
document.getElementById("startwinlbl").innerHTML = "ابدأ بنظام Windows";
document.getElementById("startminlbl").innerHTML = "بدء مصغر إلى علبة النظام";
document.getElementById("soundonlylbl").innerHTML = "وضع الصوت فقط";
document.getElementById("trackinglbl").innerHTML = 'إظهار إعلام "التتبع الآن"';

var nouser = "لم يتم اكتشاف أي مستخدم";
var nogame = "لم يتم اكتشاف لعبة";
var nosound = "افتراضي (لم يتم تحديد صوت)";
var nosoundrare = "افتراضي (لم يتم تحديد صوت)";
var rareheader = `'إنجاز نادر تم فتحه`;
var unlinked = "غير متصل";
var linked = "متصل";
var novalue = "يرجى إدخال قيمة";

var second = "ثانية";
var seconds = "ثانية";

var tracknotifymsg = "تتبع الإنجازات الآن لـ";

var resettitle = "إعادة تعيين التطبيق إلى الافتراضي؟";
var resetdesc = `تحذير: سيؤدي هذا إلى إزالة كافة إعدادات المستخدم!`;
var resetbtns = ["إعادة ضبط","الغاء التثبيت","عودة"];

var traylabel = "لم يتم اكتشاف لعبة";
var trayshow = "تبين";
var trayexit = "مخرج";

var achievementunlocked = "تم فتح الإنجاز!";
var rareachievementunlocked = "إنجاز نادر تم فتحه!";
var testdesc = "الإخطارات الخاصة بك تعمل بشكل صحيح";

var addsound = "أضف الصوت المحدد";
var invalid = 'نوع الملف غير صالح';
var addimage = 'إضافة الصورة المختارة';
var file = "ملف";
var nofolder = "افتراضي (لم يتم تحديد مجلد)";
var novalidaudio = "لا توجد ملفات صوتية صالحة في ...";
var soundmode = "وضع الصوت:";
var randomised = "عشوائي";
var presskey = "...";
var custompos = "اضبط موضع الشاشة المخصص";
var settingpos = "تعيين الموضع الرئيسي ...";
var settingposrare = "تعيين موضع نادر ...";

document.getElementById("steamkeybindlbl").innerHTML = "زر لقطة الشاشة Steam";
document.getElementById("langlbl").innerHTML = "لغة:";
document.getElementById("raritylbl").innerHTML = "نسبة الندرة:";
document.getElementById("nosteamlbl").innerHTML = "إخفاء تنبيهات Steam";
document.getElementById("customiselbl").innerHTML = "أضفى طابع شخصي...";
document.getElementById("customisermainlbl").innerHTML = "الأساسية";
document.getElementById("customiserrarelbl").innerHTML = "نادر";
document.getElementById("customiserstylelbl").innerHTML = "أسلوب الإنجاز:";
document.getElementById("notifypositionlbl").innerHTML = "موضع الشاشة:";
document.getElementById("bgtypelbl").innerHTML = "نوع الخلفية:";
document.getElementById("colourslbl").innerHTML = "الألوان";
document.getElementById("colour1lbl").innerHTML = "اللون 1";
document.getElementById("colour2lbl").innerHTML = "اللون 2";
document.getElementById("textcolourlbl").innerHTML = "لون النص";
document.getElementById("imgselectlbl").innerHTML = "الصورة الخلفية:"
document.getElementById("roundnesslbl").innerHTML = "التقريب:";
document.getElementById("iconroundnesslbl").innerHTML = "تقريب الرمز:";
document.getElementById("displaytimelbl").innerHTML = "وقت الإخطار:";
document.getElementById("scalelbl").innerHTML = "بحجم:";
document.getElementById("styledefault").innerHTML = "طبيعي";
document.getElementById("typesolid").innerHTML = "اللون الصامد";
document.getElementById("typegradient").innerHTML = "التدرج اللون";
document.getElementById("typeimg").innerHTML = "الصورة الخلفية";
document.getElementById("dragposlbl").innerHTML = "استخدم موضع الشاشة المخصص";
document.getElementById("iconselectlbl").innerHTML = "صورة مخصصة:";
document.getElementById("fontsizelbl").innerHTML = "حجم الخط:";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "إعادة تعيين الموقف";
document.getElementById("gameiconlbl").innerHTML = "استخدم أيقونة اللعبة";
document.getElementById("typegame").innerHTML = "لعبة الفن"
document.getElementById("brightnesslbl").innerHTML = "سطوع"

document.getElementById("customiserstylelblrare").innerHTML = "أسلوب الإنجاز:";
document.getElementById("notifypositionlblrare").innerHTML = "موضع الشاشة:";
document.getElementById("bgtypelblrare").innerHTML = "نوع الخلفية:";
document.getElementById("rarecolourslbl").innerHTML = "الألوان";
document.getElementById("colour1lblrare").innerHTML = "اللون 1";
document.getElementById("colour2lblrare").innerHTML = "اللون 2";
document.getElementById("textcolourlblrare").innerHTML = "لون النص";
document.getElementById("rareimgselectlbl").innerHTML = "الصورة الخلفية:"
document.getElementById("roundnesslblrare").innerHTML = "التقريب:";
document.getElementById("iconroundnesslblrare").innerHTML = "تقريب الرمز:";
document.getElementById("displaytimelblrare").innerHTML = "وقت الإخطار:";
document.getElementById("scalelblrare").innerHTML = "بحجم:";
document.getElementById("styledefaultrare").innerHTML = "طبيعي";
document.getElementById("typesolidrare").innerHTML = "اللون الصامد";
document.getElementById("typegradientrare").innerHTML = "التدرج اللون";
document.getElementById("typeimgrare").innerHTML = "الصورة الخلفية";
document.getElementById("dragposlblrare").innerHTML = "استخدم موضع الشاشة المخصص";
document.getElementById("rareiconselectlbl").innerHTML = "صورة مخصصة:";
document.getElementById("fontsizelblrare").innerHTML = "حجم الخط:";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "إعادة تعيين الموقف";
document.getElementById("gameiconlblrare").innerHTML = "استخدم أيقونة اللعبة";
document.getElementById("typegamerare").innerHTML = "لعبة الفن"
document.getElementById("brightnesslblrare").innerHTML = "سطوع"

document.getElementById("trackopacitylbl").innerHTML = "عتامة التتبع:";
document.getElementById("resetlbl").innerHTML = "إعادة تعيين التطبيق";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">تفاصيل اللعبة </a> يجب أيضًا تعيينها على "عام".';
document.getElementById("allpercentlbl").innerHTML = "إظهار كافة نسب الإنجاز";
document.getElementById("iconanimationlbl").innerHTML = "إظهار الرسوم المتحركة للأيقونات النادرة";
document.getElementById("hwalbl").innerHTML = "تعطيل تسريع الأجهزة";
document.getElementById("nvdalbl").innerHTML = "تفعيل دعم NVDA";
document.getElementById("gamecompletionlbl").innerHTML = "إظهار إشعار إكمال اللعبة";
document.getElementById("ssoverlaylbl").innerHTML = "حفظ لقطات الشاشة مع التراكب";
document.getElementById("ssoverlaypathlbl").innerHTML = "طريق:";
document.getElementById("opacitylbl").innerHTML = "شفافية الإخطار:";
document.getElementById("ssmaintestbtn").innerHTML = "معاينة التراكب الرئيسي";
document.getElementById("ssraretestbtn").innerHTML = "معاينة تراكب نادر";

var secret = "سر";
var gamecomplete = "اكتملت اللعبة!";
var allunlocked = "لقد فتحت جميع الإنجازات!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `انضم إلى <span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;قناة بيتا&nbsp;</span> للوصول مبكرًا إلى الميزات الجديدة!`
document.getElementById("betatest").innerHTML = "اختبار الميزات الجديدة قبل الإصدار الرسمي"
document.getElementById("betaoptin").innerHTML = "الاشتراك / الخروج من القناة التجريبية في أي وقت"
document.getElementById("betabugs").innerHTML = "البق الاسكواش وتحسين التطبيق"
document.getElementById("betadiscord").innerHTML = `مخصصة &nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp; قناة Discord`
document.getElementById("betafb").innerHTML = "تقديم ملاحظات على الإضافات القادمة"
document.getElementById("betabugswarn").innerHTML = "<u>البق على الأرجح</u>&nbsp;(ليست للجميع!)"
document.getElementById("betawarntext").innerHTML = "ستتم إعادة تشغيل برنامج Steam Achievement Notifier بعد الانضمام إلى القناة التجريبية"
document.getElementById("betaok").innerHTML = "نعم ، تبدو جيدة!"
document.getElementById("betacancel").innerHTML = "لا ، سأبقى هنا ..."

document.getElementById("leavebetatitle").innerHTML = "مغادرة القناة التجريبية؟"
document.getElementById("leavebetasub").innerHTML = "سيعود التطبيق إلى أحدث إصدار رسمي"
document.getElementById("leavebetaok").innerHTML = "اترك القناة التجريبية"
document.getElementById("leavebetacancel").innerHTML = "ابق على قناة بيتا"

var betajoin = "انضم إلى قناة بيتا"
var betaleave = "اترك القناة التجريبية"
var betaerrortext = "تعذر التحديث إلى القناة التجريبية!"
var betaerrorsub = "يبدو أنه ليس لديك اتصال بالشبكة. لا يوجد إنترنت = لا يوجد بيتا!"

document.getElementById("extwinlbltxt").innerHTML = "نسخ الإخطارات إلى النافذة"

// Fullscreen Notifications
// document.getElementById("fullscreenlbl").innerHTML = "تفعيل إخطارات ملء الشاشة"
// document.getElementById("fswarntitle").innerHTML = "قبل ان تبدا..."
// document.getElementById("fswarncontentmain").innerHTML = `من أجل تراكب الإشعارات أعلى الألعاب التي تم ضبطها على أوضاع العرض في اللعبة "ملء الشاشة" أو "ملء الشاشة الحصري" ، يجب إدخال الإشعار مباشرةً في عملية اللعبة ليتم عرضه عبر نافذة لعبة DirectX.<br><br>هذا يعني أنه نظرًا لأنه يتم تغيير رمز اللعبة تقنيًا بواسطة برنامج جهة خارجية ، فإن الألعاب التي تستخدم تقنية Anti-Cheat قد تنظر إلى هذه الطريقة بشكل غير موات.<br><br>على الرغم من عدم ظهور أي مشاكل في الألعاب أثناء الاختبار ، يوصى عمومًا بعدم استخدام خيار "تمكين إشعارات ملء الشاشة" عندما يكون هناك خطر اكتشاف الحقن بواسطة الألعاب التي تستخدم تقنية Anti-Cheat (كما هو الحال في الألعاب التنافسية عبر الإنترنت) .`
// document.getElementById("fswarnimportant").innerHTML = `من خلال تمكين واستخدام خيار "تمكين إشعارات ملء الشاشة" ، فإنك توافق على أنك قد أبلغت بشكل مناسب وفهمت المخاطر المرتبطة بحقن محتوى جهة خارجية في ألعاب Steam (مثل الطريقة التي تستخدمها Steam Achievement Notifier لعرض المحتوى على الألعاب تعيين لاستخدام أوضاع العرض بملء الشاشة داخل اللعبة) ، وبتمكين هذا الخيار ، فإنك تقبل أن تقوم بذلك على مسؤوليتك الخاصة ، وبالتالي ، لا يتحمل مطور Steam Achievement Notifier (Jackson0ne) أي مسؤولية أو التزام فيما يتعلق باستخدام هذا الخيار .`
// document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">بالنقر فوق الزر "يوافق على" أدناه ، فإنك تقبل الشروط المذكورة أعلاه ، وسيتم تمكين خيار "تمكين إشعارات ملء الشاشة".</div><div style="padding: 0px 10px 10px;">بالنقر فوق الزر "تعارض" أدناه ، سيتم إغلاق هذه الرسالة ، ولن يتم تمكين خيار "تمكين إشعارات ملء الشاشة".</div>`
// document.getElementById("fshidemsglbl").innerHTML = "أوافق ، لا تظهر هذه الرسالة مرة أخرى"
// document.getElementById("fsok").innerHTML = "يوافق على"
// document.getElementById("fscancel").innerHTML = "تعارض"
// document.getElementById("fsselectlbl").innerHTML = "حدد نافذة اللعبة يدويًا"

// Privacy Policy
document.getElementById("pp").innerHTML = "عرض سياسة الخصوصية"
document.getElementById("pptitle").innerHTML = "سياسة الخصوصية"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">استخدام بيانات واجهة برمجة تطبيقات الويب STEAM</span>
    </div>
    <div class="ppbodycont">
    يستخدم برنامج Steam Achievement Notifier تطبيق Valve <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> لاسترداد البيانات وعرض بيانات حساب Steam ، عبر تركيبة مفتاح Steam API / Steam64 ID التي يستخدمها المستخدم. تتضمن هذه البيانات:<br><br>
        <div class="ppbodyembed">
            • إحصائيات عن الإنجازات<br>
            • اسم مستخدم Steam الخاص بك<br>
            • ألعاب Steam التي لعبتها<br>
        </div>
        <br>
        <i>قد يستخدم برنامج Steam Achievement Notifier المزيد من بيانات Steam Web API في المستقبل لتوفير ميزات وتحديثات إضافية للتطبيق.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">مفتاح STEAM API / STEAM 64 ID الاستخدام</span>
    </div>
    <div class="ppbodycont">
        يتطلب برنامج Steam Achievement Notifier من المستخدم إدخال مجموعة مفتاح Steam API / معرف Steam64 للوصول المصدق إلى واجهة Steam Web API. بدون هذه المعلومات ، لا يمكن الوصول إلى روابط الويب (المقدمة للاستخدام من قبل Valve للوصول إلى Steam Web API) المستخدمة لاسترداد البيانات المتعلقة بحساب (حسابات) المستخدم على Steam - بما في ذلك بيانات الإكمال.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">تخزين البيانات بواجهة برمجة تطبيقات STEAM WEB</span>
    </div>
    <div class="ppbodycont">
        يقوم برنامج Steam Achievement Notifier بتخزين بيانات Steam Web API مؤقتًا محليًا على كمبيوتر المستخدم فقط للاستخدام داخل التطبيق. أي تخزين مؤقت لهذه البيانات مخصص للاستخدام فقط بواسطة Steam Achievement Notifier ، وفي ظل الظروف العادية ، سيتم مسح جميع بيانات Steam Web API غير الدائمة من التخزين المحلي عند الخروج من التطبيق.<br><br>
        تتضمن البيانات الثابتة المخزنة على جهاز المستخدم فقط البيانات التي يتم تخزينها بواسطة التطبيق لراحة المستخدم ، مثل Steam Web API Key الخاص بالمستخدم ومعرف Steam64.<br><br>
        يمكن أيضًا حذف هذه البيانات يدويًا بواسطة المستخدم في أي وقت إذا لزم الأمر. توجد الملفات التي تم إنشاؤها بواسطة Steam Achievement Notifier في الدليل التالي:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: غير مدعوم حاليًا
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">الوقوف على جمع البيانات</span>
    </div>
    <div class="ppbodycont">
        لن يقوم برنامج Steam Achievement Notifier بإرسال أو تخزين بيانات المستخدم خارج نظام الملفات المحلي للمستخدم. يتضمن ذلك أي معلومات يتم استردادها عبر Steam Web API للاستخدام داخل التطبيق ، بما في ذلك مفتاح Steam API ومجموعة معرف Steam64 المقدمة إلى التطبيق للوصول إلى Steam Web API. لم يقم مطور Steam Achievement Notifier (Jackson0ne) عن قصد بتضمين أي وسيلة وصول خارجي أو عرض أو جمع أو نقل أي معلومات مقدمة من المستخدم إلى التطبيق.<br><br>
        يتم إجراء طلبات الوصول إلى البيانات من Steam Web API من داخل التطبيق نفسه باستخدام طرق مضمنة ، على غرار الوظائف التي توفرها متصفحات الويب. تحتوي هذه الطلبات على مفتاح Steam API / Steam64 ID للمستخدم كما هو مطلوب بواسطة Steam Web API ، ولكنها غير متاحة للاستخدام أو الاعتراض من قبل أي تطبيقات أخرى.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">مسؤولية المستخدم</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        عن طريق تنزيل واستخدام أي إصدار رسمي من STEAM ACHIEVEMENT NOTIFIER عبر مستودع GITHUB الرسمي, أنت ، المستخدم ، بالتوسيع ، تلتزم بالمادتين 7 و 8 من شروط استخدام<span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API</span>.
    </div>
`

// Achievement Stats Window (Beta Revision 0.6)
document.getElementById("statwinlbltxt").innerHTML = "افتح نافذة إحصائيات الإنجاز"

statsresettitle = "إعادة تعيين كافة بيانات الإنجازات المخزنة؟"
statsresetbody = "ستتم إزالة جميع بيانات الإنجاز المخزنة مسبقًا من هذا الجهاز. سيتم استرداد بيانات الإنجاز الحالية عند فتح نافذة إحصائيات الإنجاز بعد ذلك.\n\nيرجى العلم أن استرداد بيانات الإنجاز يستخدم استدعاءات Steam Web API لكل لعبة مملوكة في مكتبة Steam الخاصة بالمستخدم. يحد Valve مقدار مكالمات Steam Web API إلى 100,000 يوميًا لكل مفتاح API لكل مستخدم.\n\nنتيجة لذلك ، اعتمادًا على كمية الألعاب في مكتبة Steam الخاصة بك ، قد يؤثر ذلك على الوظيفة العامة للتطبيق إذا تم الإفراط في استخدام وظيفة إعادة تعيين بيانات الإنجاز الخاصة بك."
statsresetbtns = ["إعادة تعيين جميع إحصائيات الإنجاز", "عودة"]

statwincurrent = "لعبة الحالية"
statwinall = "كل الألعاب"
statwincomplete = "مكتمل (100٪)"
statwintop5 = "أفضل 5 ألعاب"

// Notify Debug (Beta Revision 0.6)
document.getElementById("notifydebuglbl").innerHTML = "إظهار وحدة التحكم بالإخطارات"