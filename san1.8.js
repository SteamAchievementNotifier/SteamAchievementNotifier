//IMPORT & SET UP MAIN CONTENT
const { ipcRenderer, desktopCapturer, clipboard } = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;
const { exec } = require('child_process');
// const https = require('https');

var localappdata;

if (process.platform == "win32") {
    localappdata = path.join(process.env.LOCALAPPDATA);
} else if (process.platform == "linux") {
    localappdata = path.join(process.env.HOME,".local","share");

    // !!! Re-add if desktop shortcut/start up shortcut creation method is found
    document.getElementById("desktop").style.display = "none";
    document.getElementById("startwin").style.display = "none";
    // !!! Re-add if Steam can be stopped/restarted via shortcut, and if "SkinV5" regkey exists in "registry.vdf" after changing skin
    document.getElementById("nosteam").style.display = "none";
} else if (process.platform == "darwin") {
    localappdata = path.join(process.env.HOME,"Library","Application Support");

    // !!! Re-add if desktop shortcut/start up shortcut creation method is found
    document.getElementById("desktop").style.display = "none";
    document.getElementById("startwin").style.display = "none";
    // !!! Re-add if Steam can be stopped/restarted via shortcut, and if "SkinV5" regkey exists in "registry.vdf" after changing skin
    document.getElementById("nosteam").style.display = "none";
} else {
    alert(`Steam Achievement Notifier is not supported on ${process.platform}!`);
    ipcRenderer.send("uninstallcomplete");
}

const respath = path.join(process.resourcesPath,"app")

const config = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json")));
const gamestats = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","gamestats.json")));
var launcher;
var regkey;

if (process.platform == "win32") {
    if (process.env.npm_lifecycle_event == "devmode") {
        regkey = require('regedit');
    } else {
        if (fs.existsSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","app"))) {
            regkey = require(path.join(respath,'node_modules','regedit'));
        } else {
            regkey = require('regedit');
        }
    }
    
    launcher = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","launcher.json")));
    launcher["firstlaunch"] = false;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","launcher.json"), JSON.stringify(launcher, null, 2));
}

// fs.writeFileSync(path.join(__dirname,"store","local.json"), "");
const rev = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","version.json")));
document.getElementById("rev").innerHTML = rev.version;

//CURRENT VERSION NUMBER
var thisver = "1.84";
var tag = null;

function CheckUpdate() {
    fetch("https://api.github.com/repos/SteamAchievementNotifier/SteamAchievementNotifier/releases").then(response => response.json()).then((data) => {
        tag = data[0].tag_name
        if (tag > thisver) {
            document.getElementById("updateicon").style.display = "flex";
        }
    });
}

try {
    CheckUpdate();
} catch (err) {
    console.log("%cUnable to check for updates: " + err, "color: red");
}

//////////////////////////
// Auto Update Function //
//////////////////////////

// function UpdateSAN() {
//     var updateurl = `https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/${tag}/SANLauncher(V${tag}).exe`
//     https.get(updateurl, response => {
//         var update = fs.createWriteStream(path.join(os.homedir(),"Downloads",`SANLauncher(V${tag}).exe`))
//         response.pipe(update)
//         update.on("finish", () => {
//             update.close()
//             console.log(`%SANLauncher(V${tag}).exe downloaded successfully to ` + path.join(os.homedir(),"Downloads" + " - Restarting..."), "color: deeppink")
//             ipcRenderer.send('updatecomplete', tag)
//         })
//     })
// }

const shortcut = path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V" + thisver + ").lnk");

function OpenUpdateInBrowser() {
    ipcRenderer.send('update', tag);
}

function LoadVer() {
    document.getElementById("footertext1").innerHTML = `Steam Achievement Notifier (V${thisver})`;
}

LoadVer();

var lang;
var nouser;
var nogame;
var nosound;
var novalue;
var resettitle;
var resetdesc;
var resetbtns;
var traylabel;
var trayshow;
var trayexit;
var secret;

//!!!V1.8 Translations
var achievementunlocked;
var rareachievementunlocked;
var testtitle = "Steam Achievement Notifier";
var testdesc;
var addsound;
var invalid;
var addimage;
var file;
var nofolder;
var novalidaudio;
var soundmode;
var randomised;
var presskey;
var gamecomplete;
var allunlocked;
var custompos;
var settingpos;
var settingposrare;

function LoadLang() {
    document.getElementById("lang").value = config.lang;
    lang = config.lang;

    if (config.lang == "english") {
        document.getElementById("username").innerHTML = "No User Detected";
        document.getElementById("gamestatus").innerHTML = "No Game Detected";
        document.getElementById("soundfile").innerHTML = "Default (No Sound Selected)";
        document.getElementById("soundfilerare").innerHTML = "Default (No Sound Selected)";
        document.getElementById("maincheevsound").innerHTML = "Main Achievement Sound";
        document.getElementById("rarecheevsound").innerHTML = "Rare Achievement Sound";
        document.getElementById("test").innerHTML = "SHOW TEST NOTIFICATION";
        document.getElementById("testrare").innerHTML = "SHOW RARE TEST NOTIFICATION";
        document.getElementById("settingstitle").innerHTML = "SETTINGS";
        document.getElementById("configtitle").innerHTML = "CONFIGURATION";
        document.getElementById("apibox").placeholder = "Enter API Key";
        document.getElementById("steam64box").placeholder = "Enter Steam64ID";
        document.getElementById("other").innerHTML = "OTHER";
        document.getElementById("showscreenshotlbl").innerHTML = "Show Achievement Screenshot";
        document.getElementById("showscreenshotlblrare").innerHTML = "Show Achievement Screenshot";
        document.getElementById("desktoplbl").innerHTML = "Create Desktop Shortcut";
        document.getElementById("startwinlbl").innerHTML = "Start with Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimized To System Tray";
        document.getElementById("soundonlylbl").innerHTML = "Sound-Only Mode";
        document.getElementById("trackinglbl").innerHTML = 'Show "Now Tracking" Notification';

        nouser = "No User Detected";
        nogame = "No Game Detected";
        nosound = "Default (No Sound Selected)";
        nosoundrare = "Default (No Sound Selected)";
        rareheader = `'Rare Achievement Unlocked!`;
        unlinked = "UNLINKED";
        linked = "LINKED";
        novalue = "Please enter a value";

        second = "second";
        seconds = "seconds";

        tracknotifymsg = "Now tracking achievements for";

        resettitle = "Reset App To Default?";
        resetdesc = `WARNING: This will remove all user settings!`;
        resetbtns = ["Reset","Uninstall","Cancel"];

        traylabel = "No Game Detected";
        trayshow = "Show";
        trayexit = "Exit";

        //!!!1.8 Translations;
        achievementunlocked = "Achievement Unlocked!";
        rareachievementunlocked = "Rare Achievement Unlocked!";
        testdesc = "Your notifications are working correctly";

        addsound = "Add Selected Sound";
        invalid = 'Invalid File Type';
        addimage = 'Add Selected Image';
        file = "FILE";
        nofolder = "Default (No Folder Selected)";
        novalidaudio = "No valid audio files located in ";
        soundmode = "SOUND MODE: ";
        randomised = "RANDOMISED";
        presskey = "...";
        custompos = "Set Custom Screen Position";
        settingpos = "Setting Main Position...";
        settingposrare = "Setting Rare Position...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Screenshot Keybind:";
        document.getElementById("langlbl").innerHTML = "Language:";
        document.getElementById("raritylbl").innerHTML = "Rarity Percentage: ";
        document.getElementById("nosteamlbl").innerHTML = "Hide Steam Achievement Notification";
        document.getElementById("customiselbl").innerHTML = "CUSTOMISE...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Main';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Rare';
        document.getElementById("customiserstylelbl").innerHTML = "ACHIEVEMENT STYLE:";
        document.getElementById("notifypositionlbl").innerHTML = "SCREEN POSITION:";
        document.getElementById("bgtypelbl").innerHTML = "BACKGROUND TYPE:";
        document.getElementById("colourslbl").innerHTML = "COLOURS";
        document.getElementById("colour1lbl").innerHTML = "Colour 1";
        document.getElementById("colour2lbl").innerHTML = "Colour 2";
        document.getElementById("textcolourlbl").innerHTML = "Text Colour";
        document.getElementById("imgselectlbl").innerHTML = "BACKGROUND IMAGE:"
        document.getElementById("roundnesslbl").innerHTML = "ROUNDNESS:";
        document.getElementById("iconroundnesslbl").innerHTML = "ICON ROUNDNESS:";
        document.getElementById("displaytimelbl").innerHTML = "DISPLAY TIME:";
        document.getElementById("scalelbl").innerHTML = "SCALE:";
        document.getElementById("styledefault").innerHTML = "Default";
        document.getElementById("typesolid").innerHTML = "Solid Colour";
        document.getElementById("typegradient").innerHTML = "Colour Gradient";
        document.getElementById("typeimg").innerHTML = "Background Image";
        document.getElementById("dragposlbl").innerHTML = "Use Custom Screen Position";
        document.getElementById("iconselectlbl").innerHTML = "CUSTOM ICON:";
        document.getElementById("fontsizelbl").innerHTML = "FONT SIZE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Reset Position";
        document.getElementById("gameiconlbl").innerHTML = "Use Game Icon";

        document.getElementById("customiserstylelblrare").innerHTML = "ACHIEVEMENT STYLE:";
        document.getElementById("notifypositionlblrare").innerHTML = "SCREEN POSITION:";
        document.getElementById("bgtypelblrare").innerHTML = "BACKGROUND TYPE:";
        document.getElementById("rarecolourslbl").innerHTML = "COLOURS";
        document.getElementById("colour1lblrare").innerHTML = "Colour 1";
        document.getElementById("colour2lblrare").innerHTML = "Colour 2";
        document.getElementById("textcolourlblrare").innerHTML = "Text Colour";
        document.getElementById("rareimgselectlbl").innerHTML = "BACKGROUND IMAGE:"
        document.getElementById("roundnesslblrare").innerHTML = "ROUNDNESS:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ICON ROUNDNESS:";
        document.getElementById("displaytimelblrare").innerHTML = "DISPLAY TIME:";
        document.getElementById("scalelblrare").innerHTML = "SCALE:";
        document.getElementById("styledefaultrare").innerHTML = "Default";
        document.getElementById("typesolidrare").innerHTML = "Solid Colour";
        document.getElementById("typegradientrare").innerHTML = "Colour Gradient";
        document.getElementById("typeimgrare").innerHTML = "Background Image";
        document.getElementById("dragposlblrare").innerHTML = "Use Custom Screen Position";
        document.getElementById("rareiconselectlbl").innerHTML = "CUSTOM ICON:";
        document.getElementById("fontsizelblrare").innerHTML = "FONT SIZE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Reset Position";
        document.getElementById("gameiconlblrare").innerHTML = "Use Game Icon";

        document.getElementById("trackopacitylbl").innerHTML = "Tracking Opacity:";
        document.getElementById("resetlbl").innerHTML = "Reset App to Default";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Game Details</a> must also be set to "Public".';
        document.getElementById("allpercentlbl").innerHTML = "Show All Achievement Percentages";
        document.getElementById("iconanimationlbl").innerHTML = "Show Rare Icon Animation";
        document.getElementById("hwalbl").innerHTML = "Disable Hardware Acceleration";
        document.getElementById("nvdalbl").innerHTML = "Enable NVDA Support";
        document.getElementById("gamecompletionlbl").innerHTML = "Show Game Completion Notification";
        document.getElementById("ssoverlaylbl").innerHTML = "Save Screenshots with Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Path:";
        document.getElementById("opacitylbl").innerHTML = "Notification Opacity:";
        document.getElementById("ssmaintestbtn").innerHTML = "PREVIEW MAIN OVERLAY";
        document.getElementById("ssraretestbtn").innerHTML = "PREVIEW RARE OVERLAY";

        secret = "Secret";
        gamecomplete = "Game Complete!";
        allunlocked = "You've unlocked all achievements!";
    } else if (config.lang == "arabic") {
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
        document.getElementById("apibox").placeholder = "أدخل API Key";
        document.getElementById("steam64box").placeholder = "أدخل Steam64ID";
        document.getElementById("other").innerHTML = "آخر";
        document.getElementById("showscreenshotlbl").innerHTML = "إظهار لقطة الإنجاز";
        document.getElementById("showscreenshotlblrare").innerHTML = "إظهار لقطة الإنجاز";
        document.getElementById("desktoplbl").innerHTML = "إنشاء اختصار سطح المكتب";
        document.getElementById("startwinlbl").innerHTML = "ابدأ بنظام Windows";
        document.getElementById("startminlbl").innerHTML = "بدء مصغر إلى علبة النظام";
        document.getElementById("soundonlylbl").innerHTML = "وضع الصوت فقط";
        document.getElementById("trackinglbl").innerHTML = 'إظهار إعلام "التتبع الآن"';

        nouser = "لم يتم اكتشاف أي مستخدم";
        nogame = "لم يتم اكتشاف لعبة";
        nosound = "افتراضي (لم يتم تحديد صوت)";
        nosoundrare = "افتراضي (لم يتم تحديد صوت)";
        rareheader = `'إنجاز نادر تم فتحه`;
        unlinked = "غير متصل";
        linked = "متصل";
        novalue = "يرجى إدخال قيمة";

        second = "ثانية";
        seconds = "ثانية";

        tracknotifymsg = "تتبع الإنجازات الآن لـ";

        resettitle = "إعادة تعيين التطبيق إلى الافتراضي؟";
        resetdesc = `تحذير: سيؤدي هذا إلى إزالة كافة إعدادات المستخدم!`;
        resetbtns = ["إعادة ضبط","الغاء التثبيت","عودة"];

        traylabel = "لم يتم اكتشاف لعبة";
        trayshow = "تبين";
        trayexit = "مخرج";

        //!!!1.8 Translations;
        achievementunlocked = "تم فتح الإنجاز!";
        rareachievementunlocked = "إنجاز نادر تم فتحه!";
        testdesc = "الإخطارات الخاصة بك تعمل بشكل صحيح";

        addsound = "أضف الصوت المحدد";
        invalid = 'نوع الملف غير صالح';
        addimage = 'إضافة الصورة المختارة';
        file = "ملف";
        nofolder = "افتراضي (لم يتم تحديد مجلد)";
        novalidaudio = "لا توجد ملفات صوتية صالحة في ...";
        soundmode = "وضع الصوت:";
        randomised = "عشوائي";
        presskey = "...";
        custompos = "اضبط موضع الشاشة المخصص";
        settingpos = "تعيين الموضع الرئيسي ...";
        settingposrare = "تعيين موضع نادر ...";

        document.getElementById("steamkeybindlbl").innerHTML = "زر لقطة الشاشة Steam";
        document.getElementById("langlbl").innerHTML = "لغة:";
        document.getElementById("raritylbl").innerHTML = "نسبة الندرة:";
        document.getElementById("nosteamlbl").innerHTML = "إخفاء تنبيهات Steam";
        document.getElementById("customiselbl").innerHTML = "أضفى طابع شخصي...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">الأساسية';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">نادر';
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

        secret = "سر";
        gamecomplete = "اكتملت اللعبة!";
        allunlocked = "لقد فتحت جميع الإنجازات!";
    } else if (config.lang == "bulgarian") {
        document.getElementById("username").innerHTML = "Няма oткрит потребител";
        document.getElementById("gamestatus").innerHTML = "Не е открита игра";
        document.getElementById("soundfile").innerHTML = "По подразбиране (без избран звук)";
        document.getElementById("soundfilerare").innerHTML = "По подразбиране (без избран звук)";
        document.getElementById("maincheevsound").innerHTML = "Основно постижение Звук";
        document.getElementById("rarecheevsound").innerHTML = "Звук на рядко постижение";
        document.getElementById("test").innerHTML = "ПОКАЖИ ИЗВЕСТИЕ ЗА ТЕСТ";
        document.getElementById("testrare").innerHTML = "ПОКАЗВАНЕ НА ИЗВЕСТИЕ ЗА РЯДЪК ТЕСТ";
        document.getElementById("settingstitle").innerHTML = "НАСТРОЙКИ";
        document.getElementById("configtitle").innerHTML = "КОНФИГУРАЦИЯ";
        document.getElementById("apibox").placeholder = "Въведете API Key";
        document.getElementById("steam64box").placeholder = "Въведете Steam64ID";
        document.getElementById("other").innerHTML = "ДРУГИ";
        document.getElementById("showscreenshotlbl").innerHTML = "Покажи снимка на екрана";
        document.getElementById("showscreenshotlblrare").innerHTML = "Покажи снимка на екрана";
        document.getElementById("desktoplbl").innerHTML = "Пряк път на работния плот";
        document.getElementById("startwinlbl").innerHTML = "Започнете с Windows";
        document.getElementById("startminlbl").innerHTML = "Старт Минимизиран";
        document.getElementById("soundonlylbl").innerHTML = "Режим само за звук";
        document.getElementById("trackinglbl").innerHTML = '"Сега проследяване"';

        nouser = "Няма открит потребител";
        nogame = "Не е открита игра";
        nosound = "По подразбиране (без избран звук)";
        nosoundrare = "По подразбиране (без избран звук)";
        rareheader = `'Отключено рядко постижение!`;
        unlinked = "НЕВЪРЗАН";
        linked = "СВЪРЗАНИ";
        novalue = "Моля въведете стойност";

        resettitle = "Нулиране На Настройките По Подразбиране?";
        resetdesc = `ПРЕДУПРЕЖДЕНИЕ: Това ще премахне всички потребителски настройки!`;
        resetbtns = ["Нулиране","Деинсталиране","Отменям"];
    
        traylabel = "Не е открита игра";
        trayshow = "Покажи";
        trayexit = "Изход";

        //!!!1.8 Translations;
        achievementunlocked = "Постижението Отключено!";
        rareachievementunlocked = "Отключено Рядко Постижение!";
        testdesc = "Вашите известия работят правилно";

        addsound = "Добавете Избран Звук";
        invalid = 'Невалиден Тип Файл';
        addimage = 'Добавяне На Избрано Изображение';
        file = "ФАЙЛ";
        nofolder = "По Подразбиране (не Е Избрана Папка)";
        novalidaudio = "Няма валидни аудио файлове, намиращи се в ";
        soundmode = "РЕЖИМ НА ЗВУК:";
        randomised = "РАНДОМИЗИРАНА";
        presskey = "...";
        custompos = "Задайте Позиция";
        settingpos = "Задаване На Основна Позиция...";
        settingposrare = "Задаване На Рядка Позиция...";

        document.getElementById("steamkeybindlbl").innerHTML = "Бутон За Екранна Снимка:";
        document.getElementById("langlbl").innerHTML = "Език:";
        document.getElementById("raritylbl").innerHTML = "Рядка Стойност: ";
        document.getElementById("nosteamlbl").innerHTML = "Скриване На Известието На Steam";
        document.getElementById("customiselbl").innerHTML = "РЕДАКТИРАНЕ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Основен';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Рядко';
        document.getElementById("customiserstylelbl").innerHTML = "СТИЛ НА ПОСТИЖЕНИЕ:";
        document.getElementById("notifypositionlbl").innerHTML = "ПОЗИЦИЯ НА ЕКРАНА:";
        document.getElementById("bgtypelbl").innerHTML = "ТИП ФОН:";
        document.getElementById("colourslbl").innerHTML = "ЦВЕТОВЕ";
        document.getElementById("colour1lbl").innerHTML = "Цвят 1";
        document.getElementById("colour2lbl").innerHTML = "Цвят 2";
        document.getElementById("textcolourlbl").innerHTML = "Цвят На Текста";
        document.getElementById("imgselectlbl").innerHTML = "ФОНОВО ИЗОБРАЖЕНИЕ:"
        document.getElementById("roundnesslbl").innerHTML = "КРЪГЛЯНЕ:";
        document.getElementById("iconroundnesslbl").innerHTML = "ИКОНА КРЪГЛЯНЕ:";
        document.getElementById("displaytimelbl").innerHTML = "ВРЕМЕ НА ПОКАЗВАНЕ:";
        document.getElementById("scalelbl").innerHTML = "МАЩАБ:";
        document.getElementById("styledefault").innerHTML = "По Подразбиране";
        document.getElementById("typesolid").innerHTML = "Плътен Цвят";
        document.getElementById("typegradient").innerHTML = "Цветен Градиент";
        document.getElementById("typeimg").innerHTML = "Фоново Изображение";
        document.getElementById("dragposlbl").innerHTML = "Използвайте Персонализирана Позиция";
        document.getElementById("iconselectlbl").innerHTML = "ПЕРСОНАЛИЗИРАНА ИКОНА:";
        document.getElementById("fontsizelbl").innerHTML = "РАЗМЕР НА ШРИФТА:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Нулиране На Позицията";
        document.getElementById("gameiconlbl").innerHTML = "Икона На Играта";

        document.getElementById("customiserstylelblrare").innerHTML = "СТИЛ НА ПОСТИЖЕНИЕ:";
        document.getElementById("notifypositionlblrare").innerHTML = "ПОЗИЦИЯ НА ЕКРАНА:";
        document.getElementById("bgtypelblrare").innerHTML = "ТИП ФОН:";
        document.getElementById("rarecolourslbl").innerHTML = "ЦВЕТОВЕ";
        document.getElementById("colour1lblrare").innerHTML = "Цвят 1";
        document.getElementById("colour2lblrare").innerHTML = "Цвят 2";
        document.getElementById("textcolourlblrare").innerHTML = "Цвят На Текста";
        document.getElementById("rareimgselectlbl").innerHTML = "ФОНОВО ИЗОБРАЖЕНИЕ:"
        document.getElementById("roundnesslblrare").innerHTML = "КРЪГЛЯНЕ:";
        document.getElementById("iconroundnesslbl").innerHTML = "ИКОНА КРЪГЛЯНЕ:";
        document.getElementById("displaytimelblrare").innerHTML = "ВРЕМЕ НА ПОКАЗВАНЕ:";
        document.getElementById("scalelblrare").innerHTML = "МАЩАБ:";
        document.getElementById("styledefaultrare").innerHTML = "По Подразбиране";
        document.getElementById("typesolidrare").innerHTML = "Плътен Цвят";
        document.getElementById("typegradientrare").innerHTML = "Цветен Градиент";
        document.getElementById("typeimgrare").innerHTML = "Фоново Изображение";
        document.getElementById("dragposlblrare").innerHTML = "Използвайте Персонализирана Позиция";
        document.getElementById("rareiconselectlbl").innerHTML = "ПЕРСОНАЛИЗИРАНА ИКОНА:";
        document.getElementById("fontsizelblrare").innerHTML = "РАЗМЕР НА ШРИФТА:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Нулиране На Позицията";
        document.getElementById("gameiconlblrare").innerHTML = "Икона На Играта";

        document.getElementById("trackopacitylbl").innerHTML = "Непрозрачност:";
        document.getElementById("resetlbl").innerHTML = "Нулиране На Приложението";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Подробности за играта</a> трябва да е "Публично".';
        document.getElementById("allpercentlbl").innerHTML = "Показване На Всички Проценти";
        document.getElementById("iconanimationlbl").innerHTML = "Показване На Анимация На Редки Икони";
        document.getElementById("hwalbl").innerHTML = "Деактивирайте Хардуерното Ускорение";
        document.getElementById("nvdalbl").innerHTML = "Активирайте Поддръжката На NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Показване На Известие За Завършване На Играта";
        document.getElementById("ssoverlaylbl").innerHTML = "Запазване На Екранни Снимки С Наслагване";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Път:";
        document.getElementById("opacitylbl").innerHTML = "Прозрачност На Известията:";
        document.getElementById("ssmaintestbtn").innerHTML = "ПРЕГЛЕД НА ГЛАВНИЯ ЕКРАН";
        document.getElementById("ssraretestbtn").innerHTML = "ПРЕГЛЕД НА РЕДКИЯ ЕКРАН";

        secret = "Тайна";
        gamecomplete = "Играта Е Завършена!";
        allunlocked = "Отключихте всички постижения!";
    } else if (config.lang == "schinese") {
        document.getElementById("username").innerHTML = "未检测到用户";
        document.getElementById("gamestatus").innerHTML = "未检测到游戏";
        document.getElementById("soundfile").innerHTML = "默认（未选择声音）";
        document.getElementById("soundfilerare").innerHTML = "默认（未选择声音）";
        document.getElementById("maincheevsound").innerHTML = "主要成就音效";
        document.getElementById("rarecheevsound").innerHTML = "稀有成就音效";
        document.getElementById("test").innerHTML = "显示测试通知";
        document.getElementById("testrare").innerHTML = "显示稀有测试通知";
        document.getElementById("settingstitle").innerHTML = "设置";
        document.getElementById("configtitle").innerHTML = "配置";
        document.getElementById("apibox").placeholder = "输入 API Key";
        document.getElementById("steam64box").placeholder = "输入 Steam64ID";
        document.getElementById("other").innerHTML = "其他";
        document.getElementById("showscreenshotlbl").innerHTML = "显示成就截图";
        document.getElementById("showscreenshotlblrare").innerHTML = "显示成就截图";
        document.getElementById("desktoplbl").innerHTML = "创建桌面快捷方式";
        document.getElementById("startwinlbl").innerHTML = "从 Windows 开始";
        document.getElementById("startminlbl").innerHTML = "开始最小化到系统托盘";
        document.getElementById("soundonlylbl").innerHTML = "纯声音模式";
        document.getElementById("trackinglbl").innerHTML = '显示“正在跟踪”通知';

        nouser = "未检测到用户";
        nogame = "未检测到游戏";
        nosound = "默认（未选择声音）";
        nosoundrare = "默认（未选择声音）";
        rareheader = `'罕见成就解锁！`;
        unlinked = "未链接";
        linked = "已链接";
        novalue = "请输入一个值";

        resettitle = "将应用重置为默认值？";
        resetdesc = `警告：这将删除所有用户设置！`;
        resetbtns = ["重启","卸载","取消"];

        traylabel = "未检测到游戏";
        trayshow = "打开";
        trayexit = "出口";

        //!!!1.8 Translations;
        achievementunlocked = "成就解锁！";
        rareachievementunlocked = "稀有成就解锁！";
        testdesc = "您的通知工作正常。";

        addsound = "添加选定的声音";
        invalid = '文件类型无效';
        addimage = '添加所选图像';
        file = "文件";
        nofolder = "默认（未选择文件夹）";
        novalidaudio = "没有有效的音频文件位于";
        soundmode = "声音模式：";
        randomised = "随机";
        presskey = "...";
        custompos = "设置自定义屏幕位置";
        settingpos = "设置主要位置...";
        settingposrare = "设置稀有位置...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam截图按钮：";
        document.getElementById("langlbl").innerHTML = "语：";
        document.getElementById("raritylbl").innerHTML = "稀有度：";
        document.getElementById("nosteamlbl").innerHTML = "隐藏 Steam 成就通知";
        document.getElementById("customiselbl").innerHTML = "个性化...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">主要的';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">稀有的';
        document.getElementById("customiserstylelbl").innerHTML = "成就风格：";
        document.getElementById("notifypositionlbl").innerHTML = "屏幕位置：";
        document.getElementById("bgtypelbl").innerHTML = "背景类型：";
        document.getElementById("colourslbl").innerHTML = "颜色";
        document.getElementById("colour1lbl").innerHTML = "颜色 1";
        document.getElementById("colour2lbl").innerHTML = "颜色 2";
        document.getElementById("textcolourlbl").innerHTML = "文字颜色";
        document.getElementById("imgselectlbl").innerHTML = "背景图："
        document.getElementById("roundnesslbl").innerHTML = "圆度：";
        document.getElementById("iconroundnesslbl").innerHTML = "图标圆度：";
        document.getElementById("displaytimelbl").innerHTML = "展示时间：";
        document.getElementById("scalelbl").innerHTML = "规模：";
        document.getElementById("styledefault").innerHTML = "默认";
        document.getElementById("typesolid").innerHTML = "纯色";
        document.getElementById("typegradient").innerHTML = "颜色渐变";
        document.getElementById("typeimg").innerHTML = "背景图";
        document.getElementById("dragposlbl").innerHTML = "使用自定义屏幕位置";
        document.getElementById("iconselectlbl").innerHTML = "自定义图标：";
        document.getElementById("fontsizelbl").innerHTML = "字体大小：";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "重置位置";
        document.getElementById("gameiconlbl").innerHTML = "使用游戏图标";

        document.getElementById("customiserstylelblrare").innerHTML = "成就风格：";
        document.getElementById("notifypositionlblrare").innerHTML = "屏幕位置：";
        document.getElementById("bgtypelblrare").innerHTML = "背景类型：";
        document.getElementById("rarecolourslbl").innerHTML = "颜色";
        document.getElementById("colour1lblrare").innerHTML = "颜色 1";
        document.getElementById("colour2lblrare").innerHTML = "颜色 2";
        document.getElementById("textcolourlblrare").innerHTML = "文字颜色";
        document.getElementById("rareimgselectlbl").innerHTML = "背景图："
        document.getElementById("roundnesslblrare").innerHTML = "圆度：";
        document.getElementById("iconroundnesslblrare").innerHTML = "图标圆度：";
        document.getElementById("displaytimelblrare").innerHTML = "展示时间：";
        document.getElementById("scalelblrare").innerHTML = "规模：";
        document.getElementById("styledefaultrare").innerHTML = "默认";
        document.getElementById("typesolidrare").innerHTML = "纯色";
        document.getElementById("typegradientrare").innerHTML = "颜色渐变";
        document.getElementById("typeimgrare").innerHTML = "背景图";
        document.getElementById("dragposlblrare").innerHTML = "使用自定义屏幕位置";
        document.getElementById("rareiconselectlbl").innerHTML = "自定义图标：";
        document.getElementById("fontsizelblrare").innerHTML = "字体大小：";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "重置位置";
        document.getElementById("gameiconlblrare").innerHTML = "使用游戏图标";

        document.getElementById("trackopacitylbl").innerHTML = "跟踪不透明度：";
        document.getElementById("resetlbl").innerHTML = "将应用重置为默认值";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">游戏详情</a> 也必须设置为“公开”。';
        document.getElementById("allpercentlbl").innerHTML = "显示所有成就百分比";
        document.getElementById("iconanimationlbl").innerHTML = "显示稀有图标动画";
        document.getElementById("hwalbl").innerHTML = "禁用硬件加速";
        document.getElementById("nvdalbl").innerHTML = "启用 NVDA 支持";
        document.getElementById("gamecompletionlbl").innerHTML = "显示游戏完成通知";
        document.getElementById("ssoverlaylbl").innerHTML = "使用叠加保存屏幕截图";
        document.getElementById("ssoverlaypathlbl").innerHTML = "小路：";
        document.getElementById("opacitylbl").innerHTML = "通知不透明度：";
        document.getElementById("ssmaintestbtn").innerHTML = "预览主要叠加";
        document.getElementById("ssraretestbtn").innerHTML = "预览稀有覆盖";

        secret = "秘密";
        gamecomplete = "游戏完成！";
        allunlocked = "您已解锁所有成就！";
    } else if (config.lang == "tchinese") {
        document.getElementById("username").innerHTML = "未檢測到用戶";
        document.getElementById("gamestatus").innerHTML = "未檢測到遊戲";
        document.getElementById("soundfile").innerHTML = "默認（未選擇聲音）";
        document.getElementById("soundfilerare").innerHTML = "默認（未選擇聲音）";
        document.getElementById("maincheevsound").innerHTML = "主要成就音效";
        document.getElementById("rarecheevsound").innerHTML = "稀有成就音效";
        document.getElementById("test").innerHTML = "顯示測試通知";
        document.getElementById("testrare").innerHTML = "顯示稀有測試通知";
        document.getElementById("settingstitle").innerHTML = "設置";
        document.getElementById("configtitle").innerHTML = "配置";
        document.getElementById("apibox").placeholder = "輸入 API Key";
        document.getElementById("steam64box").placeholder = "輸入 Steam64ID";
        document.getElementById("other").innerHTML = "其他";
        document.getElementById("showscreenshotlbl").innerHTML = "顯示成就截圖";
        document.getElementById("showscreenshotlblrare").innerHTML = "顯示成就截圖";
        document.getElementById("desktoplbl").innerHTML = "創建桌面快捷方式";
        document.getElementById("startwinlbl").innerHTML = "從 Windows 開始";
        document.getElementById("startminlbl").innerHTML = "開始最小化到系統托盤";
        document.getElementById("soundonlylbl").innerHTML = "純聲音模式";
        document.getElementById("trackinglbl").innerHTML = '顯示“正在跟踪”通知';

        nouser = "未檢測到用戶";
        nogame = "未檢測到遊戲";
        nosound = "默認（未選擇聲音）";
        nosoundrare = "默認（未選擇聲音）";
        rareheader = `'罕見成就解鎖！`;
        unlinked = "未鏈接";
        linked = "已鏈接";
        novalue = "請輸入一個值";

        resettitle = "將應用重置為默認值？";
        resetdesc = `警告：這將刪除所有用戶設置！`;
        resetbtns = ["重啟","卸載","取消"];

        traylabel = "未檢測到遊戲";
        trayshow = "打開";
        trayexit = "出口";

        //!!!1.8 Translations;
        achievementunlocked = "成就解鎖！";
        rareachievementunlocked = "稀有成就解鎖！";
        testdesc = "您的通知工作正常。";

        addsound = "添加選定的聲音";
        invalid = '文件類型無效';
        addimage = '添加所選圖像';
        file = "文件";
        nofolder = "默認（未選擇文件夾）";
        novalidaudio = "沒有有效的音頻文件位於 ";
        soundmode = "聲音模式：";
        randomised = "隨機";
        presskey = "...";
        custompos = "設置自定義屏幕位置";
        settingpos = "設置主要位置...";
        settingposrare = "設置稀有位置...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam截圖按鈕：";
        document.getElementById("langlbl").innerHTML = "語：";
        document.getElementById("raritylbl").innerHTML = "稀有度： ";
        document.getElementById("nosteamlbl").innerHTML = "隱藏 Steam 成就通知";
        document.getElementById("customiselbl").innerHTML = "個性化...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">主要的';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">稀有的';
        document.getElementById("customiserstylelbl").innerHTML = "成就風格：";
        document.getElementById("notifypositionlbl").innerHTML = "屏幕位置：";
        document.getElementById("bgtypelbl").innerHTML = "背景類型：";
        document.getElementById("colourslbl").innerHTML = "顏色";
        document.getElementById("colour1lbl").innerHTML = "顏色 1";
        document.getElementById("colour2lbl").innerHTML = "顏色 2";
        document.getElementById("textcolourlbl").innerHTML = "文字顏色";
        document.getElementById("imgselectlbl").innerHTML = "背景圖："
        document.getElementById("roundnesslbl").innerHTML = "圓度：";
        document.getElementById("iconroundnesslbl").innerHTML = "圖標圓度：";
        document.getElementById("displaytimelbl").innerHTML = "顯示時間：";
        document.getElementById("scalelbl").innerHTML = "規模：";
        document.getElementById("styledefault").innerHTML = "Default";
        document.getElementById("typesolid").innerHTML = "純色";
        document.getElementById("typegradient").innerHTML = "顏色漸變";
        document.getElementById("typeimg").innerHTML = "背景圖";
        document.getElementById("dragposlbl").innerHTML = "使用自定義屏幕位置";
        document.getElementById("iconselectlbl").innerHTML = "自定義圖標：";
        document.getElementById("fontsizelbl").innerHTML = "字體大小：";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "重置位置";
        document.getElementById("gameiconlbl").innerHTML = "使用遊戲圖標";

        document.getElementById("customiserstylelblrare").innerHTML = "成就風格：";
        document.getElementById("notifypositionlblrare").innerHTML = "屏幕位置：";
        document.getElementById("bgtypelblrare").innerHTML = "背景類型：";
        document.getElementById("rarecolourslbl").innerHTML = "顏色";
        document.getElementById("colour1lblrare").innerHTML = "顏色 1";
        document.getElementById("colour2lblrare").innerHTML = "顏色 2";
        document.getElementById("textcolourlblrare").innerHTML = "文字顏色";
        document.getElementById("rareimgselectlbl").innerHTML = "背景圖："
        document.getElementById("roundnesslblrare").innerHTML = "圓度：";
        document.getElementById("iconroundnesslblrare").innerHTML = "圖標圓度：";
        document.getElementById("displaytimelblrare").innerHTML = "顯示時間：";
        document.getElementById("scalelblrare").innerHTML = "規模：";
        document.getElementById("styledefaultrare").innerHTML = "Default";
        document.getElementById("typesolidrare").innerHTML = "純色";
        document.getElementById("typegradientrare").innerHTML = "顏色漸變";
        document.getElementById("typeimgrare").innerHTML = "背景圖";
        document.getElementById("dragposlblrare").innerHTML = "使用自定義屏幕位置";
        document.getElementById("rareiconselectlbl").innerHTML = "自定義圖標：";
        document.getElementById("fontsizelblrare").innerHTML = "字體大小：";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "重置位置";
        document.getElementById("gameiconlblrare").innerHTML = "使用遊戲圖標";

        document.getElementById("trackopacitylbl").innerHTML = "跟踪不透明度：";
        document.getElementById("resetlbl").innerHTML = "將應用重置為默認值";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">遊戲詳情</a> 也必須設置為“公開”。';
        document.getElementById("allpercentlbl").innerHTML = "顯示所有成就百分比";
        document.getElementById("iconanimationlbl").innerHTML = "顯示稀有圖標動畫";
        document.getElementById("hwalbl").innerHTML = "禁用硬件加速";
        document.getElementById("nvdalbl").innerHTML = "啟用 NVDA 支持";
        document.getElementById("gamecompletionlbl").innerHTML = "顯示遊戲完成通知";
        document.getElementById("ssoverlaylbl").innerHTML = "使用疊加保存屏幕截圖";
        document.getElementById("ssoverlaypathlbl").innerHTML = "小路：";
        document.getElementById("opacitylbl").innerHTML = "通知不透明度：";
        document.getElementById("ssmaintestbtn").innerHTML = "預覽主要疊加";
        document.getElementById("ssraretestbtn").innerHTML = "預覽稀有覆蓋";

        secret = "秘密";
        gamecomplete = "遊戲完成！";
        allunlocked = "您已解鎖所有成就！";
    } else if (config.lang == "czech") {
        document.getElementById("username").innerHTML = "Nebyl Zjištěn Žádný Uživatel";
        document.getElementById("gamestatus").innerHTML = "Nebyla Zjištěna Žádná Hra";
        document.getElementById("soundfile").innerHTML = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        document.getElementById("soundfilerare").innerHTML = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        document.getElementById("maincheevsound").innerHTML = "Hlavní Zvuk";
        document.getElementById("rarecheevsound").innerHTML = "Vzácný Zvuk";
        document.getElementById("test").innerHTML = "ZOBRAZIT OZNÁMENÍ O TESTU";
        document.getElementById("testrare").innerHTML = "ZOBRAZIT OZNÁMENÍ O VZÁCNÉM TESTU";
        document.getElementById("settingstitle").innerHTML = "NASTAVENÍ";
        document.getElementById("configtitle").innerHTML = "KONFIGURACE";
        document.getElementById("apibox").placeholder = "Zadejte API Key";
        document.getElementById("steam64box").placeholder = "Zadejte Steam64ID";
        document.getElementById("other").innerHTML = "OSTATNÍ";
        document.getElementById("showscreenshotlbl").innerHTML = "Zobrazit Snímek Obrazovky";
        document.getElementById("showscreenshotlblrare").innerHTML = "Zobrazit Snímek Obrazovky";
        document.getElementById("desktoplbl").innerHTML = "Vytvoření Zástupce na Desktop";
        document.getElementById("startwinlbl").innerHTML = "Spustit Při Spuštění Systému Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimalizován";
        document.getElementById("soundonlylbl").innerHTML = "Režim Pouze Zvuk";
        document.getElementById("trackinglbl").innerHTML = 'Zobrazit Upozornění „Sledování“';

        nouser = "Nebyl Zjištěn Žádný Uživatel";
        nogame = "Nebyla Zjištěna Žádná Hra";
        nosound = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        nosoundrare = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        rareheader = `'Vzácný Úspěch Odemčen!`;
        unlinked = "NEPŘIPOJENÝ";
        linked = "PŘIPOJENO";
        novalue = "Zadejte hodnotu";

        resettitle = "Resetovat Aplikaci Na Výchozí?";
        resetdesc = `VAROVÁNÍ: Tímto odstraníte všechna uživatelská nastavení!`;
        resetbtns = ["Resetovat","Odinstalovat","Zrušit"];

        traylabel = "Nebyla Zjištěna Žádná Hra";
        trayshow = "Ukázat";
        trayexit = "Výstup";

        //!!!1.8 Translations;
        achievementunlocked = "Úspěch Odemčen!";
        rareachievementunlocked = "Vzácný Úspěch Odemčen!";
        testdesc = "Vaše oznámení fungují správně";

        addsound = "Přidat Vybraný Zvuk";
        invalid = 'Neplatný Typ Souboru';
        addimage = 'Přidat Vybraný Obrázek';
        file = "SOUBOR";
        nofolder = "Výchozí (Není Vybrána Žádná Složka)";
        novalidaudio = "Žádné platné zvukové soubory umístěné v ";
        soundmode = "REŽIM ZVUKU: ";
        randomised = "NÁHODNÝ";
        presskey = "...";
        custompos = "Nastavit Vlastní Pozici";
        settingpos = "Nastavení Hlavní Pozice...";
        settingposrare = "Nastavení Vzácné Pozice...";

        document.getElementById("steamkeybindlbl").innerHTML = "Tlačítko Snímku Obrazovky:";
        document.getElementById("langlbl").innerHTML = "Jazyk:";
        document.getElementById("raritylbl").innerHTML = "Procento Vzácnosti: ";
        document.getElementById("nosteamlbl").innerHTML = "Skryjte Upozornění Steam";
        document.getElementById("customiselbl").innerHTML = "UPRAVIT...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Hlavní';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Vzácný';
        document.getElementById("customiserstylelbl").innerHTML = "STYL OZNÁMENÍ:";
        document.getElementById("notifypositionlbl").innerHTML = "POLOHA OBRAZOVKY:";
        document.getElementById("bgtypelbl").innerHTML = "TYP POZADÍ:";
        document.getElementById("colourslbl").innerHTML = "BARVY";
        document.getElementById("colour1lbl").innerHTML = "Barva 1";
        document.getElementById("colour2lbl").innerHTML = "Barva 2";
        document.getElementById("textcolourlbl").innerHTML = "Barva Textu";
        document.getElementById("imgselectlbl").innerHTML = "OBRÁZEK ​​NA POZADÍ:"
        document.getElementById("roundnesslbl").innerHTML = "ZAOKROUHLENÍ:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKONY ZAOKROUHLENÍ:";
        document.getElementById("displaytimelbl").innerHTML = "ČAS ZOBRAZENÍ:";
        document.getElementById("scalelbl").innerHTML = "MĚŘÍTKO:";
        document.getElementById("styledefault").innerHTML = "Výchozí";
        document.getElementById("typesolid").innerHTML = "Plná Barva";
        document.getElementById("typegradient").innerHTML = "Barevný Přechod";
        document.getElementById("typeimg").innerHTML = "Obrázek Na Pozadí";
        document.getElementById("dragposlbl").innerHTML = "Použijte Vlastní Pozici";
        document.getElementById("iconselectlbl").innerHTML = "VLASTNÍ IKONA:";
        document.getElementById("fontsizelbl").innerHTML = "VELIKOST PÍSMA:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Resetovat Pozici";
        document.getElementById("gameiconlbl").innerHTML = "Použijte Ikonu Hry";

        document.getElementById("customiserstylelblrare").innerHTML = "STYL OZNÁMENÍ:";
        document.getElementById("notifypositionlblrare").innerHTML = "POLOHA OBRAZOVKY:";
        document.getElementById("bgtypelblrare").innerHTML = "TYP POZADÍ:";
        document.getElementById("rarecolourslbl").innerHTML = "BARVY";
        document.getElementById("colour1lblrare").innerHTML = "Barva 1";
        document.getElementById("colour2lblrare").innerHTML = "Barva 2";
        document.getElementById("textcolourlblrare").innerHTML = "Barva Textu";
        document.getElementById("rareimgselectlbl").innerHTML = "OBRÁZEK ​​NA POZADÍ:"
        document.getElementById("roundnesslblrare").innerHTML = "ZAOKROUHLENÍ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKONY ZAOKROUHLENÍ:";
        document.getElementById("displaytimelblrare").innerHTML = "ČAS ZOBRAZENÍ:";
        document.getElementById("scalelblrare").innerHTML = "MĚŘÍTKO:";
        document.getElementById("styledefaultrare").innerHTML = "Výchozí";
        document.getElementById("typesolidrare").innerHTML = "Plná Barva";
        document.getElementById("typegradientrare").innerHTML = "Barevný Přechod";
        document.getElementById("typeimgrare").innerHTML = "Obrázek Na Pozadí";
        document.getElementById("dragposlblrare").innerHTML = "Použijte Vlastní Pozici";
        document.getElementById("rareiconselectlbl").innerHTML = "VLASTNÍ IKONA:";
        document.getElementById("fontsizelblrare").innerHTML = "VELIKOST PÍSMA:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Resetovat Pozici";
        document.getElementById("gameiconlblrare").innerHTML = "Použijte Ikonu Hry";

        document.getElementById("trackopacitylbl").innerHTML = "Neprůhlednost:";
        document.getElementById("resetlbl").innerHTML = "Resetovat Aplikaci";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Podrobnosti hry</a> musí být „Veřejné“.';
        document.getElementById("allpercentlbl").innerHTML = "Zobrazit Všechna Procenta Úspěchů";
        document.getElementById("iconanimationlbl").innerHTML = "Zobrazit Animaci Vzácných Ikon";
        document.getElementById("hwalbl").innerHTML = "Zakázat Hardwarovou Akceleraci";
        document.getElementById("nvdalbl").innerHTML = "Povolit Podporu NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Zobrazit Oznámení O Dokončení Hry";
        document.getElementById("ssoverlaylbl").innerHTML = "Uložte Snímky Obrazovky s Překrytím";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Cesta:";
        document.getElementById("opacitylbl").innerHTML = "Neprůhlednost Oznámení:";
        document.getElementById("ssmaintestbtn").innerHTML = "NÁHLED HLAVNÍ OBRAZOVKY";
        document.getElementById("ssraretestbtn").innerHTML = "NÁHLED VZÁCNÝCH OBRAZOVKY";

        secret = "Tajný";
        gamecomplete = "Hra Dokončena!";
        allunlocked = "Odemkli jste všechny úspěchy!";
    } else if (config.lang == "danish") {
        document.getElementById("username").innerHTML = "Ingen Bruger Fundet";
        document.getElementById("gamestatus").innerHTML = "Intet Spil Opdaget";
        document.getElementById("soundfile").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("maincheevsound").innerHTML = "Hovedlyd";
        document.getElementById("rarecheevsound").innerHTML = "Sjælden Lyd";
        document.getElementById("test").innerHTML = "VIS TEST";
        document.getElementById("testrare").innerHTML = "VIS SJÆLDEN TEST";
        document.getElementById("settingstitle").innerHTML = "INDSTILLINGER";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("apibox").placeholder = "Indtast API Key";
        document.getElementById("steam64box").placeholder = "Indtast Steam64ID";
        document.getElementById("other").innerHTML = "ANDRE";
        document.getElementById("showscreenshotlbl").innerHTML = "Vis Skærmbillede";
        document.getElementById("showscreenshotlblrare").innerHTML = "Vis Skærmbillede";
        document.getElementById("desktoplbl").innerHTML = "Opret Genvej Til Desktop";
        document.getElementById("startwinlbl").innerHTML = "Start med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimeret Til Systembakken";
        document.getElementById("soundonlylbl").innerHTML = "Kun Lyd-Tilstand";
        document.getElementById("trackinglbl").innerHTML = 'Vis Meddelelse Om "Nu Sporing"';

        nouser = "Ingen Bruger Fundet";
        nogame = "Intet Spil Opdaget";
        nosound = "Standard (Ingen Lyd Valgt)";
        nosoundrare = "Standard (Ingen Lyd Valgt)";
        rareheader = `'Sjælden Præstation Låst Op!`;
        unlinked = "ULINKET";
        linked = "LINKET";
        novalue = "Indtast venligst en værdi";

        resettitle = "Nulstil Applikation Til Standard?";
        resetdesc = `ADVARSEL: Dette vil fjerne alle brugerindstillinger!`;
        resetbtns = ["Nulstil","Afinstaller","Afbestille"];
    
        traylabel = "Intet Spil Opdaget";
        trayshow = "At Vise";
        trayexit = "Afslut";

        //!!!1.8 Translations;
        achievementunlocked = "Præstation Låst Op!";
        rareachievementunlocked = "Sjælden Præstation Låst Op!";
        testdesc = "Dine meddelelser fungerer korrekt";

        addsound = "Tilføj Valgt Lyd";
        invalid = 'Ugyldig Filtype';
        addimage = 'Tilføj Valgt Billede';
        file = "FIL";
        nofolder = "Standard (Ingen Mappe Valgt)";
        novalidaudio = "Der er ingen gyldige lydfiler i ";
        soundmode = "LYDTILSTAND: ";
        randomised = "TILFÆLDIG";
        presskey = "...";
        custompos = "Indstil Brugerdefineret Skærmposition";
        settingpos = "Indstilling Af Hovedposition...";
        settingposrare = "Indstilling Af Sjælden Position...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Skærmbillede Knap:";
        document.getElementById("langlbl").innerHTML = "Sprog:";
        document.getElementById("raritylbl").innerHTML = "Sjældenhedsprocent: ";
        document.getElementById("nosteamlbl").innerHTML = "Skjul Steam-Meddelelse";
        document.getElementById("customiselbl").innerHTML = "TILPASSER...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Hoved';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Sjælden';
        document.getElementById("customiserstylelbl").innerHTML = "MEDDELELSESSTIL:";
        document.getElementById("notifypositionlbl").innerHTML = "SKÆRMPOSITION:";
        document.getElementById("bgtypelbl").innerHTML = "BAGGRUNDSTYPE:";
        document.getElementById("colourslbl").innerHTML = "FARVER";
        document.getElementById("colour1lbl").innerHTML = "Farve 1";
        document.getElementById("colour2lbl").innerHTML = "Farve 2";
        document.getElementById("textcolourlbl").innerHTML = "Tekst Farve";
        document.getElementById("imgselectlbl").innerHTML = "BAGGRUNDSBILLEDE:"
        document.getElementById("roundnesslbl").innerHTML = "RUNDHED:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKON RUNDHED:";
        document.getElementById("displaytimelbl").innerHTML = "DISPLAY TID:";
        document.getElementById("scalelbl").innerHTML = "STØRRELSE:";
        document.getElementById("styledefault").innerHTML = "Standard";
        document.getElementById("typesolid").innerHTML = "Ensfarvet";
        document.getElementById("typegradient").innerHTML = "Farvegradient";
        document.getElementById("typeimg").innerHTML = "Baggrundsbillede";
        document.getElementById("dragposlbl").innerHTML = "Brug Brugerdefineret Position";
        document.getElementById("iconselectlbl").innerHTML = "BRUGERDEFINERET IKON:";
        document.getElementById("fontsizelbl").innerHTML = "SKRIFTSTØRRELSE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Nulstil Position";
        document.getElementById("gameiconlbl").innerHTML = "Brug Spilikonet";

        document.getElementById("customiserstylelblrare").innerHTML = "MEDDELELSESSTIL:";
        document.getElementById("notifypositionlblrare").innerHTML = "SKÆRMPOSITION:";
        document.getElementById("bgtypelblrare").innerHTML = "BAGGRUNDSTYPE:";
        document.getElementById("rarecolourslbl").innerHTML = "FARVER";
        document.getElementById("colour1lblrare").innerHTML = "Farve 1";
        document.getElementById("colour2lblrare").innerHTML = "Farve 2";
        document.getElementById("textcolourlblrare").innerHTML = "Tekst Farve";
        document.getElementById("rareimgselectlbl").innerHTML = "BAGGRUNDSBILLEDE:"
        document.getElementById("roundnesslblrare").innerHTML = "RUNDHED:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKON RUNDHED:";
        document.getElementById("displaytimelblrare").innerHTML = "DISPLAY TID:";
        document.getElementById("scalelblrare").innerHTML = "STØRRELSE:";
        document.getElementById("styledefaultrare").innerHTML = "Standard";
        document.getElementById("typesolidrare").innerHTML = "Ensfarvet";
        document.getElementById("typegradientrare").innerHTML = "Farvegradient";
        document.getElementById("typeimgrare").innerHTML = "Baggrundsbillede";
        document.getElementById("dragposlblrare").innerHTML = "Brug Brugerdefineret Position";
        document.getElementById("rareiconselectlbl").innerHTML = "BRUGERDEFINERET IKON:";
        document.getElementById("fontsizelblrare").innerHTML = "SKRIFTSTØRRELSE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Nulstil Position";
        document.getElementById("gameiconlblrare").innerHTML = "Brug Spilikonet";

        document.getElementById("trackopacitylbl").innerHTML = "Gennemsigtighed:";
        document.getElementById("resetlbl").innerHTML = "Nulstil Applikation";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Spildetaljer</a> skal også indstilles til "Offentlig".';
        document.getElementById("allpercentlbl").innerHTML = "Vis Alle Procenter";
        document.getElementById("iconanimationlbl").innerHTML = "Vis Sjældne Ikonanimationer";
        document.getElementById("hwalbl").innerHTML = "Deaktiver Hardwareacceleration";
        document.getElementById("nvdalbl").innerHTML = "Aktiver NVDA-support";
        document.getElementById("gamecompletionlbl").innerHTML = "Vis Meddelelse Om Spilafslutning";
        document.getElementById("ssoverlaylbl").innerHTML = "Gem Skærmbilleder med Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Sti:";
        document.getElementById("opacitylbl").innerHTML = "Gennemsigtighed:";
        document.getElementById("ssmaintestbtn").innerHTML = "SE HOVEDOVERLAG";
        document.getElementById("ssraretestbtn").innerHTML = "SE SJÆLDNE OVERLAG";

        secret = "Hemmelig";
        gamecomplete = "Spil Færdig!";
        allunlocked = "Du har låst op for alle præstationer!";
    } else if (config.lang == "dutch") {
        document.getElementById("username").innerHTML = "Geen Gebruiker Gedetecteerd";
        document.getElementById("gamestatus").innerHTML = "Geen Spel Gedetecteerd";
        document.getElementById("soundfile").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
        document.getElementById("soundfilerare").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
        document.getElementById("maincheevsound").innerHTML = "Hoofdgeluid";
        document.getElementById("rarecheevsound").innerHTML = "Zeldzaam Geluid";
        document.getElementById("test").innerHTML = "TOON TESTMELDING";
        document.getElementById("testrare").innerHTML = "TOON ZELDZAME TESTMELDING";
        document.getElementById("settingstitle").innerHTML = "INSTELLINGEN";
        document.getElementById("configtitle").innerHTML = "CONFIGURATIE";
        document.getElementById("apibox").placeholder = "Voer API Key in";
        document.getElementById("steam64box").placeholder = "Voer Steam64ID in";
        document.getElementById("other").innerHTML = "ANDERE";
        document.getElementById("showscreenshotlbl").innerHTML = "Schermafbeelding Prestatie Tonen";
        document.getElementById("showscreenshotlblrare").innerHTML = "Schermafbeelding Prestatie Tonen";
        document.getElementById("desktoplbl").innerHTML = "Snelkoppeling Naar Desktop Maken";
        document.getElementById("startwinlbl").innerHTML = "Begin met Windows";
        document.getElementById("startminlbl").innerHTML = "Start Geminimaliseerd";
        document.getElementById("soundonlylbl").innerHTML = "Alleen Geluidsmodus";
        document.getElementById("trackinglbl").innerHTML = 'Spelmelding Weergeven';

        nouser = "Geen Gebruiker Gedetecteerd";
        nogame = "Geen Spel Gedetecteerd";
        nosound = "Standaard (Geen Geluid Geselecteerd)";
        nosoundrare = "Standaard (Geen Geluid Geselecteerd)";
        rareheader = `'Zeldzame Prestatie Ontgrendeld!`;
        unlinked = "NIET GEKOPPELD";
        linked = "GEKOPPELD";
        novalue = "Voer alstublieft een waarde in";
    
        resettitle = "Toepassing Terugzetten Naar Standaard?";
        resetdesc = `WAARSCHUWING: Hiermee worden alle gebruikersinstellingen verwijderd!`;
        resetbtns = ["Resetten","Verwijderen","Annuleren"];
    
        traylabel = "Geen Spel Gedetecteerd";
        trayshow = "Toon";
        trayexit = "Sluit";

        //!!!1.8 Translations;
        achievementunlocked = "Prestatie Ontgrendeld!";
        rareachievementunlocked = "Zeldzame Prestatie Ontgrendeld!";
        testdesc = "Uw meldingen werken correct";

        addsound = "Geluid Toevoegen";
        invalid = 'Ongeldig Bestandstype';
        addimage = 'Voeg Afbeelding Toe';
        file = "DOSSIER";
        nofolder = "Standaard (Geen Map Geselecteerd)";
        novalidaudio = "Geen geldige audiobestanden in ";
        soundmode = "GELUID MODUS: ";
        randomised = "GERANDOMISEERD";
        presskey = "...";
        custompos = "Aangepaste Schermpositie Instellen";
        settingpos = "Hoofdpositie Instellen...";
        settingposrare = "Zeldzame Positie Instellen...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Schermafbeelding Knop";
        document.getElementById("langlbl").innerHTML = "Taal:";
        document.getElementById("raritylbl").innerHTML = "Zeldzaamheid: ";
        document.getElementById("nosteamlbl").innerHTML = "Steam-Melding Verbergen";
        document.getElementById("customiselbl").innerHTML = "BEWERK...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Voornaamst';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Zeldzaam';
        document.getElementById("customiserstylelbl").innerHTML = "STIJL VAN MELDINGEN:";
        document.getElementById("notifypositionlbl").innerHTML = "SCHERMPOSITIE:";
        document.getElementById("bgtypelbl").innerHTML = "ACHTERGRONDTYPE:";
        document.getElementById("colourslbl").innerHTML = "KLEUREN";
        document.getElementById("colour1lbl").innerHTML = "Kleur 1";
        document.getElementById("colour2lbl").innerHTML = "Kleur 2";
        document.getElementById("textcolourlbl").innerHTML = "Tekstkleur";
        document.getElementById("imgselectlbl").innerHTML = "ACHTERGROND AFBEELDING:"
        document.getElementById("roundnesslbl").innerHTML = "RONDHEID:";
        document.getElementById("iconroundnesslbl").innerHTML = "ICOON RONDHEID:";
        document.getElementById("displaytimelbl").innerHTML = "WEERGAVETIJD:";
        document.getElementById("scalelbl").innerHTML = "SCHAAL:";
        document.getElementById("styledefault").innerHTML = "Standaard";
        document.getElementById("typesolid").innerHTML = "Effen Kleur";
        document.getElementById("typegradient").innerHTML = "Kleurverloop";
        document.getElementById("typeimg").innerHTML = "Achtergrond Afbeelding";
        document.getElementById("dragposlbl").innerHTML = "Aangepaste Schermpositie Gebruiken";
        document.getElementById("iconselectlbl").innerHTML = "AANGEPASTE ICOON:";
        document.getElementById("fontsizelbl").innerHTML = "LETTERTYPEGROOTTE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Positie Resetten";
        document.getElementById("gameiconlbl").innerHTML = "Spel Icoon";
        
        document.getElementById("customiserstylelblrare").innerHTML = "STIJL VAN MELDINGEN:";
        document.getElementById("notifypositionlblrare").innerHTML = "SCHERMPOSITIE:";
        document.getElementById("bgtypelblrare").innerHTML = "ACHTERGRONDTYPE:";
        document.getElementById("rarecolourslbl").innerHTML = "KLEUREN";
        document.getElementById("colour1lblrare").innerHTML = "Kleur 1";
        document.getElementById("colour2lblrare").innerHTML = "Kleur 2";
        document.getElementById("textcolourlblrare").innerHTML = "Tekstkleur";
        document.getElementById("rareimgselectlbl").innerHTML = "ACHTERGROND AFBEELDING:"
        document.getElementById("roundnesslblrare").innerHTML = "RONDHEID:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ICOON RONDHEID:";
        document.getElementById("displaytimelblrare").innerHTML = "WEERGAVETIJD:";
        document.getElementById("scalelblrare").innerHTML = "SCHAAL:";
        document.getElementById("styledefaultrare").innerHTML = "Standaard";
        document.getElementById("typesolidrare").innerHTML = "Effen Kleur";
        document.getElementById("typegradientrare").innerHTML = "Kleurverloop";
        document.getElementById("typeimgrare").innerHTML = "Achtergrond Afbeelding";
        document.getElementById("dragposlblrare").innerHTML = "Aangepaste Schermpositie Gebruiken";
        document.getElementById("rareiconselectlbl").innerHTML = "AANGEPASTE ICOON:";
        document.getElementById("fontsizelblrare").innerHTML = "LETTERTYPEGROOTTE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Positie Resetten";
        document.getElementById("gameiconlblrare").innerHTML = "Spel Icoon";
        
        document.getElementById("trackopacitylbl").innerHTML = "Transparantie:";
        document.getElementById("resetlbl").innerHTML = "Applicatie Resetten";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Speldetails</a> moeten ook zijn ingesteld op "Openbaar".';
        document.getElementById("allpercentlbl").innerHTML = "Toon Alle Percentages";
        document.getElementById("iconanimationlbl").innerHTML = "Animatie Van Zeldzame Iconen Weergeven";
        document.getElementById("hwalbl").innerHTML = "Hardwareversnelling Uitschakelen";
        document.getElementById("nvdalbl").innerHTML = "NVDA-Ondersteuning Inschakelen";
        document.getElementById("gamecompletionlbl").innerHTML = "Melding Game-Voltooiing Weergeven";
        document.getElementById("ssoverlaylbl").innerHTML = "Schermafbeeldingen Opslaan met Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Pad:";
        document.getElementById("opacitylbl").innerHTML = "Transparantie:";
        document.getElementById("ssmaintestbtn").innerHTML = "VOORBEELD HOOFDOVERLAY";
        document.getElementById("ssraretestbtn").innerHTML = "VOORBEELD ZELDZAME OVERLAY";

        secret = "Geheim";
        gamecomplete = "Spel Compleet!";
        allunlocked = "Je hebt alle prestaties ontgrendeld!";
    } else if (config.lang == "finnish") {
        document.getElementById("username").innerHTML = "Käyttäjää Ei Havaittu";
        document.getElementById("gamestatus").innerHTML = "Peliä Ei Havaittu";
        document.getElementById("soundfile").innerHTML = "Oletusarvo (Ei Ääntä Valittuna)";
        document.getElementById("soundfilerare").innerHTML = "Oletusarvo (Ei Ääntä Valittuna)";
        document.getElementById("maincheevsound").innerHTML = "Tärkein Saavutus Ääni";
        document.getElementById("rarecheevsound").innerHTML = "Harvinainen Saavutus Ääni";
        document.getElementById("test").innerHTML = "NÄYTÄ TESTI-ILMOITUS";
        document.getElementById("testrare").innerHTML = "NÄYTÄ HARVINAINEN TESTI-ILMOITUS";
        document.getElementById("settingstitle").innerHTML = "ASETUKSET";
        document.getElementById("configtitle").innerHTML = "KONFIGUROINTI";
        document.getElementById("apibox").placeholder = "Anna APIKey";
        document.getElementById("steam64box").placeholder = "Anna Steam64ID";
        document.getElementById("other").innerHTML = "MUUT";
        document.getElementById("showscreenshotlbl").innerHTML = "Näytä Kuvakaappaus";
        document.getElementById("showscreenshotlblrare").innerHTML = "Näytä Kuvakaappaus";
        document.getElementById("desktoplbl").innerHTML = "Luo Desktop Pikakuvake";
        document.getElementById("startwinlbl").innerHTML = "Aloita Windowsista";
        document.getElementById("startminlbl").innerHTML = "Käynnistä Minimoitu";
        document.getElementById("soundonlylbl").innerHTML = "Äänitila";
        document.getElementById("trackinglbl").innerHTML = 'Näytä "Nyt Seuranta"-viesti';

        nouser = "Käyttäjää Ei Havaittu";
        nogame = "Peliä Ei Havaittu";
        nosound = "Oletusarvo (Ei Ääntä Valittuna)";
        nosoundrare = "Oletusarvo (Ei Ääntä Valittuna)";
        rareheader = `'Harvinainen saavutus avattu!`;
        unlinked = "EI LINKITTY";
        linked = "LINKITTY";
        novalue = "Anna arvo";

        resettitle = "Palautetaanko Sovellus Oletusasetuksiin?";
        resetdesc = `VAROITUS: Tämä poistaa kaikki käyttäjäasetukset!`;
        resetbtns = ["Nollaa","Poista Asennus","Peruuttaa"];
    
        traylabel = "Peliä Ei Havaittu";
        trayshow = "Näytä";
        trayexit = "Poistu";

        //!!!1.8 Translations;
        achievementunlocked = "Saavutus Avattu!";
        rareachievementunlocked = "Harvinainen Saavutus Avattu!";
        testdesc = "Ilmoituksesi toimivat oikein";

        addsound = "Lisää Valittu Ääni";
        invalid = 'Väärä Tiedostotyyppi';
        addimage = 'Lisää Valittu Kuva';
        file = "TIEDOSTO";
        nofolder = "Oletus (Ei Valittua Kansiota)";
        novalidaudio = "Ei kelvollisia äänitiedostoja kansiossa ";
        soundmode = "ÄÄNITILA: ";
        randomised = "SATUNNAISTETTU";
        presskey = "...";
        custompos = "Aseta Mukautettu Näytön Sijainti";
        settingpos = "Asetetaan Pääasentoa...";
        settingposrare = "Asetetaan Harvinaista Paikkaa...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Kuvakaappauspainike:";
        document.getElementById("langlbl").innerHTML = "Kieli:";
        document.getElementById("raritylbl").innerHTML = "Harvinainen Prosentti: ";
        document.getElementById("nosteamlbl").innerHTML = "Piilota Steam-ilmoitus";
        document.getElementById("customiselbl").innerHTML = "MUOKKAA...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Tärkein';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Harvinainen';
        document.getElementById("customiserstylelbl").innerHTML = "ILMOITUSTYYLI:";
        document.getElementById("notifypositionlbl").innerHTML = "NÄYTÖN ASENTO:";
        document.getElementById("bgtypelbl").innerHTML = "TAUSTATYYPPI:";
        document.getElementById("colourslbl").innerHTML = "VÄRIT";
        document.getElementById("colour1lbl").innerHTML = "Väri 1";
        document.getElementById("colour2lbl").innerHTML = "Väri 2";
        document.getElementById("textcolourlbl").innerHTML = "Tekstin Väri";
        document.getElementById("imgselectlbl").innerHTML = "TAUSTAKUVA:"
        document.getElementById("roundnesslbl").innerHTML = "PYÖRISTÄMINEN:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKONIN PYÖRISTÄMINEN:";
        document.getElementById("displaytimelbl").innerHTML = "ILMOITUSAIKA:";
        document.getElementById("scalelbl").innerHTML = "SKALE:";
        document.getElementById("styledefault").innerHTML = "Vakio";
        document.getElementById("typesolid").innerHTML = "Yksivärinen";
        document.getElementById("typegradient").innerHTML = "Värigradientti";
        document.getElementById("typeimg").innerHTML = "Taustakuva";
        document.getElementById("dragposlbl").innerHTML = "Käytä Mukautettua Sijaintia";
        document.getElementById("iconselectlbl").innerHTML = "MUKAUTETTU KUVAKE:";
        document.getElementById("fontsizelbl").innerHTML = "FONTTIKOKO:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Palauta Sijainti";
        document.getElementById("gameiconlbl").innerHTML = "Käytä Pelikuvaketta";

        document.getElementById("customiserstylelblrare").innerHTML = "ILMOITUSTYYLI:";
        document.getElementById("notifypositionlblrare").innerHTML = "NÄYTÖN ASENTO:";
        document.getElementById("bgtypelblrare").innerHTML = "TAUSTATYYPPI:";
        document.getElementById("rarecolourslbl").innerHTML = "VÄRIT";
        document.getElementById("colour1lblrare").innerHTML = "Väri 1";
        document.getElementById("colour2lblrare").innerHTML = "Väri 2";
        document.getElementById("textcolourlblrare").innerHTML = "Tekstin väri";
        document.getElementById("rareimgselectlbl").innerHTML = "TAUSTAKUVA:"
        document.getElementById("roundnesslblrare").innerHTML = "PYÖRISTÄMINEN:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKONIN PYÖRISTÄMINEN:";
        document.getElementById("displaytimelblrare").innerHTML = "ILMOITUSAIKA:";
        document.getElementById("scalelblrare").innerHTML = "SKALE:";
        document.getElementById("styledefaultrare").innerHTML = "Vakio";
        document.getElementById("typesolidrare").innerHTML = "Yksivärinen";
        document.getElementById("typegradientrare").innerHTML = "Värigradientti";
        document.getElementById("typeimgrare").innerHTML = "Taustakuva";
        document.getElementById("dragposlblrare").innerHTML = "Käytä Mukautettua Sijaintia";
        document.getElementById("rareiconselectlbl").innerHTML = "MUKAUTETTU KUVAKE:";
        document.getElementById("fontsizelblrare").innerHTML = "FONTTIKOKO:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Palauta Sijainti";
        document.getElementById("gameiconlblrare").innerHTML = "Käytä Pelikuvaketta";

        document.getElementById("trackopacitylbl").innerHTML = "Läpinäkyvyys:";
        document.getElementById("resetlbl").innerHTML = "Nollaa Sovellus";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Pelin tiedot</a> on myös asetettava "Julkinen".';
        document.getElementById("allpercentlbl").innerHTML = "Näytä Kaikki Saavutusprosentit";
        document.getElementById("iconanimationlbl").innerHTML = "Näytä Harvinainen Kuvake-Animaatio";
        document.getElementById("hwalbl").innerHTML = "Poista Hardware Acceleration Käytöstä";
        document.getElementById("nvdalbl").innerHTML = "Ota NVDA-Tuki Käyttöön";
        document.getElementById("gamecompletionlbl").innerHTML = "Näytä Pelin Päättymisilmoitus";
        document.getElementById("ssoverlaylbl").innerHTML = "Tallenna Kuvakaappaukset Peittokuvalla";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Polku:";
        document.getElementById("opacitylbl").innerHTML = "Ilmoituksen Läpinäkyvyys:";
        document.getElementById("ssmaintestbtn").innerHTML = "NÄYTÄ PÄÄKUVA";
        document.getElementById("ssraretestbtn").innerHTML = "NÄYTÄ HARVINAINEN KUVA";

        secret = "Salaisuus";
        gamecomplete = "Peli Valmis!";
        allunlocked = "Olet avannut kaikki saavutukset!";
    } else if (config.lang == "french") {
        document.getElementById("username").innerHTML = "Aucun Utilisateur Détecté";
        document.getElementById("gamestatus").innerHTML = "Aucun Jeu Détecté";
        document.getElementById("soundfile").innerHTML = "Par Défaut (Aucun Son Sélectionné)";
        document.getElementById("soundfilerare").innerHTML = "Par Défaut (Aucun Son Sélectionné)";
        document.getElementById("maincheevsound").innerHTML = "Son Succès Normal";
        document.getElementById("rarecheevsound").innerHTML = "Son Succès Rare";
        document.getElementById("test").innerHTML = "TEST SUCCÈS NORMAL";
        document.getElementById("testrare").innerHTML = "TEST SUCCÈS RARE";
        document.getElementById("settingstitle").innerHTML = "PARAMÈTRES";
        document.getElementById("configtitle").innerHTML = "CONFIGURATION";
        document.getElementById("apibox").placeholder = "Entrez clé API";
        document.getElementById("steam64box").placeholder = "Entrez Steam64ID";
        document.getElementById("other").innerHTML = "AUTRE";
        document.getElementById("showscreenshotlbl").innerHTML = "Afficher la Capture d'Écran";
        document.getElementById("showscreenshotlblrare").innerHTML = "Afficher la Capture d'Écran";
        document.getElementById("desktoplbl").innerHTML = "Crée Un Raccourci Bureau";
        document.getElementById("startwinlbl").innerHTML = "Démarrage Automatique";
        document.getElementById("startminlbl").innerHTML = "Démarrage Minimisé";
        document.getElementById("soundonlylbl").innerHTML = "Mode Audio Uniquement";
        document.getElementById("trackinglbl").innerHTML = 'Afficher "Suivi des Succés"';

        nouser = "Aucun Utilisateur Détecté";
        nogame = "Aucun Jeu Détecté";
        nosound = "Par Défaut (Aucun Son Sélectionné)";
        nosoundrare = "Par Défaut (Aucun Son Sélectionné)";
        rareheader = `'Succès Rare Débloqué!`;
        unlinked = "NON CONNECTÉ";
        linked = "CONNECTÉ";
        novalue = "Veuillez entrer une valeur";
        
        resettitle = "Réinitialiser l'Application Par Défaut?";
        resetdesc = `AVERTISSEMENT: Cela supprimera tous les paramètres utilisateur!`;
        resetbtns = ["Réinitialiser","Désinstaller","Annuler"];
    
        traylabel = "Aucun Jeu Détecté";
        trayshow = "Afficher";
        trayexit = "Sortir";

        //!!!1.8 Translations;
        achievementunlocked = "Succès Déverrouillé!";
        rareachievementunlocked = "Succès Rare Déverrouillé!";
        testdesc = "Vos notifications fonctionnent correctement";

        addsound = "Ajouter Le Son Sélectionné";
        invalid = 'Type De Fichier Invalide';
        addimage = `Ajouter L'image Sélectionnée`;
        file = "FICHIER";
        nofolder = "Par Défaut (Aucun Dossier Sélectionné)";
        novalidaudio = "Aucun fichier audio valide situé dans";
        soundmode = "MODE SON: ";
        randomised = "ALÉATOIRE";
        presskey = "...";
        custompos = "Définir la Position Personnalisée";
        settingpos = "Réglage Principal...";
        settingposrare = "Réglage Rare...";

        document.getElementById("steamkeybindlbl").innerHTML = "Bouton de Capture d'Écran Steam: ";
        document.getElementById("langlbl").innerHTML = "Langue:";
        document.getElementById("raritylbl").innerHTML = "Pourcentage de Rareté: ";
        document.getElementById("nosteamlbl").innerHTML = "Masquer la Notification Steam";
        document.getElementById("customiselbl").innerHTML = "PERSONNALISER...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principal';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Rare';
        document.getElementById("customiserstylelbl").innerHTML = "STYLE DE NOTIFICATION:";
        document.getElementById("notifypositionlbl").innerHTML = "POSITION DE L'ÉCRAN:";
        document.getElementById("bgtypelbl").innerHTML = "TYPE DE FOND:";
        document.getElementById("colourslbl").innerHTML = "COULEURS";
        document.getElementById("colour1lbl").innerHTML = "Couleur 1";
        document.getElementById("colour2lbl").innerHTML = "Couleur 2";
        document.getElementById("textcolourlbl").innerHTML = "Couleur du Texte";
        document.getElementById("imgselectlbl").innerHTML = "IMAGE DE FOND:"
        document.getElementById("roundnesslbl").innerHTML = "RONDEUR:";
        document.getElementById("iconroundnesslbl").innerHTML = "RONDEUR DES ICÔNES:";
        document.getElementById("displaytimelbl").innerHTML = "TEMPS D'AFFICHAGE:";
        document.getElementById("scalelbl").innerHTML = "TAILLE:";
        document.getElementById("styledefault").innerHTML = "Défaut";
        document.getElementById("typesolid").innerHTML = "Couleur Unie";
        document.getElementById("typegradient").innerHTML = "Dégradé de Couleur";
        document.getElementById("typeimg").innerHTML = "Image de Fond";
        document.getElementById("dragposlbl").innerHTML = "Utiliser la Position Personnalisée";
        document.getElementById("iconselectlbl").innerHTML = "ICÔNE PERSONNALISÉE :";
        document.getElementById("fontsizelbl").innerHTML = "TAILLE DE POLICE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Position de Réinitialisation";
        document.getElementById("gameiconlbl").innerHTML = "Utiliser l'Icône Du Jeu";

        document.getElementById("customiserstylelblrare").innerHTML = "STYLE DE NOTIFICATION:";
        document.getElementById("notifypositionlblrare").innerHTML = "POSITION DE L'ÉCRAN:";
        document.getElementById("bgtypelblrare").innerHTML = "TYPE DE FOND:";
        document.getElementById("rarecolourslbl").innerHTML = "COULEURS";
        document.getElementById("colour1lblrare").innerHTML = "Couleur 1";
        document.getElementById("colour2lblrare").innerHTML = "Couleur 2";
        document.getElementById("textcolourlblrare").innerHTML = "Couleur du Texte";
        document.getElementById("rareimgselectlbl").innerHTML = "IMAGE DE FOND:"
        document.getElementById("roundnesslblrare").innerHTML = "RONDEUR:";
        document.getElementById("iconroundnesslblrare").innerHTML = "RONDEUR DES ICÔNES:";
        document.getElementById("displaytimelblrare").innerHTML = "TEMPS D'AFFICHAGE:";
        document.getElementById("scalelblrare").innerHTML = "TAILLE:";
        document.getElementById("styledefaultrare").innerHTML = "Défaut";
        document.getElementById("typesolidrare").innerHTML = "Couleur Unie";
        document.getElementById("typegradientrare").innerHTML = "Dégradé de Couleur";
        document.getElementById("typeimgrare").innerHTML = "Image de Fond";
        document.getElementById("dragposlblrare").innerHTML = "Utiliser la Position Personnalisée";
        document.getElementById("rareiconselectlbl").innerHTML = "ICÔNE PERSONNALISÉE :";
        document.getElementById("fontsizelblrare").innerHTML = "TAILLE DE POLICE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Position de Réinitialisation";
        document.getElementById("gameiconlblrare").innerHTML = "Utiliser l'Icône Du Jeu";

        document.getElementById("trackopacitylbl").innerHTML = "Opacité de Suivi:";
        document.getElementById("resetlbl").innerHTML = "Réinitialiser l'Application";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Les détails du jeu</a> doivent également être définis sur "Public".';
        document.getElementById("allpercentlbl").innerHTML = "Afficher Tous les Pourcentages";
        document.getElementById("iconanimationlbl").innerHTML = "Afficher l'Animation Des Icônes Rares";
        document.getElementById("hwalbl").innerHTML = "Désactiver l'Accélération Matérielle";
        document.getElementById("nvdalbl").innerHTML = "Activer la Prise en Charge de NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Afficher la Notification de Fin de Jeu";
        document.getElementById("ssoverlaylbl").innerHTML = "Enregistrer des Captures d'Écran avec Superposition";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Chemin:";
        document.getElementById("opacitylbl").innerHTML = "Opacité des Notifications:";
        document.getElementById("ssmaintestbtn").innerHTML = "APERÇU DE LA SUPERPOSITION PRINCIPALE";
        document.getElementById("ssraretestbtn").innerHTML = "APERÇU DE LA SUPERPOSITION RARE";

        secret = "Secret";
        gamecomplete = "Jeu Complet!";
        allunlocked = "Vous avez débloqué toutes les réalisations!";
    } else if (config.lang == "german") {
        document.getElementById("username").innerHTML = "Kein Benutzer Erkannt";
        document.getElementById("gamestatus").innerHTML = "Kein Spiel Erkannt";
        document.getElementById("soundfile").innerHTML = "Standard (Kein Ton Ausgewählt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Kein Ton Ausgewählt)";
        document.getElementById("maincheevsound").innerHTML = "Ton Für Normale Errungenschaften";
        document.getElementById("rarecheevsound").innerHTML = "Ton Für Seltene Errungenschaften";
        document.getElementById("test").innerHTML = "TESTBENACHRICHTIGUNG ANZEIGEN";
        document.getElementById("testrare").innerHTML = "SELTENE TESTBENACHRICHTIGUNG ANZEIGEN";
        document.getElementById("settingstitle").innerHTML = "EINSTELLUNGEN";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("apibox").placeholder = "API Key eingeben";
        document.getElementById("steam64box").placeholder = "Steam64ID eingeben";
        document.getElementById("other").innerHTML = "SONSTIGES";
        document.getElementById("showscreenshotlbl").innerHTML = "Bildschirmfoto Anzeigen";
        document.getElementById("showscreenshotlblrare").innerHTML = "Bildschirmfoto Anzeigen";
        document.getElementById("desktoplbl").innerHTML = "Desktopverknüpfung Erstellen";
        document.getElementById("startwinlbl").innerHTML = "Starte mit Windows";
        document.getElementById("startminlbl").innerHTML = "Minimiert Starten";
        document.getElementById("soundonlylbl").innerHTML = "Nur Ton Abspielen";
        document.getElementById("trackinglbl").innerHTML = 'Spielbenachrichtigung Anzeigen';

        nouser = "Kein Benutzer Erkannt";
        nogame = "Kein Spiel Erkannt";
        nosound = "Standard (Kein Ton Ausgewählt)";
        nosoundrare = "Standard (Kein Ton Ausgewählt)";
        rareheader = `'Seltene Errungenschaft Freigeschaltet!`
        unlinked = "NICHT VERKNÜPFT";
        linked = "VERKNÜPFT";
        novalue = "Bitte einen Wert eingeben";

        resettitle = "Anwendung Auf Standard Zurücksetzen?";
        resetdesc = `WARNUNG: Dadurch werden alle Benutzereinstellungen entfernt!`;
        resetbtns = ["Zurücksetzen","Deinstallieren","Kündigen"];

        traylabel = "Kein Spiel Erkannt";
        trayshow = "Anzeigen";
        trayexit = "Ausgang";

        //!!!1.8 Translations;
        achievementunlocked = "Errungenschaft!";
        rareachievementunlocked = "Seltener Errungenschaft!";
        testdesc = "Ihre Benachrichtigungen funktionieren ordnungsgemäß";

        addsound = "Ton Hinzufügen";
        invalid = 'Ungültiger Dateityp';
        addimage = 'Bild Hinzufügen';
        file = "DATEI";
        nofolder = "Standard (Kein Ordner Ausgewählt)";
        novalidaudio = "Es befinden sich keine gültigen Audiodateien in ";
        soundmode = "KLANGMODUS: ";
        randomised = "ZUFÄLLIG";
        presskey = "...";
        custompos = "Benutzerdefinierte Position";
        settingpos = "Hauptposition Einstellen...";
        settingposrare = "Seltene Position Einstellen...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Bildschirmfoto Tastenkombination:";
        document.getElementById("langlbl").innerHTML = "Sprache:";
        document.getElementById("raritylbl").innerHTML = "Seltenheitswert: ";
        document.getElementById("nosteamlbl").innerHTML = "Steam Benachrichtigung ausblenden";
        document.getElementById("customiselbl").innerHTML = "BEARBEITEN...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Haupt';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Selten';
        document.getElementById("customiserstylelbl").innerHTML = "BENACHRICHTIGUNGSSTIL:";
        document.getElementById("notifypositionlbl").innerHTML = "BILDSCHIRMPOSITION:";
        document.getElementById("bgtypelbl").innerHTML = "HINTERGRUNDTYP:";
        document.getElementById("colourslbl").innerHTML = "FARBEN";
        document.getElementById("colour1lbl").innerHTML = "Farbe 1";
        document.getElementById("colour2lbl").innerHTML = "Farbe 2";
        document.getElementById("textcolourlbl").innerHTML = "Textfarbe";
        document.getElementById("imgselectlbl").innerHTML = "HINTERGRUNDBILD:"
        document.getElementById("roundnesslbl").innerHTML = "RUNDHEIT:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKONENRUNDHEIT:";
        document.getElementById("displaytimelbl").innerHTML = "ANZEIGEZEIT:";
        document.getElementById("scalelbl").innerHTML = "SKALA:";
        document.getElementById("styledefault").innerHTML = "Standard";
        document.getElementById("typesolid").innerHTML = "Einfarbig";
        document.getElementById("typegradient").innerHTML = "Farbverlauf";
        document.getElementById("typeimg").innerHTML = "Hintergrundbild";
        document.getElementById("dragposlbl").innerHTML = "Benutzerdefinierte Position";
        document.getElementById("iconselectlbl").innerHTML = "BENUTZERDEFINIERTES SYMBOL:";
        document.getElementById("fontsizelbl").innerHTML = "SCHRIFTGRÖSSE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Position Zurücksetzen";
        document.getElementById("gameiconlbl").innerHTML = "Spielsymbol Verwenden";

        document.getElementById("customiserstylelblrare").innerHTML = "BENACHRICHTIGUNGSSTIL:";
        document.getElementById("notifypositionlblrare").innerHTML = "BILDSCHIRMPOSITION:";
        document.getElementById("bgtypelblrare").innerHTML = "HINTERGRUNDTYP:";
        document.getElementById("rarecolourslbl").innerHTML = "FARBEN";
        document.getElementById("colour1lblrare").innerHTML = "Farbe 1";
        document.getElementById("colour2lblrare").innerHTML = "Farbe 2";
        document.getElementById("textcolourlblrare").innerHTML = "Textfarbe";
        document.getElementById("rareimgselectlbl").innerHTML = "HINTERGRUNDBILD:"
        document.getElementById("roundnesslblrare").innerHTML = "RUNDHEIT:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKONENRUNDHEIT:";
        document.getElementById("displaytimelblrare").innerHTML = "ANZEIGEZEIT:";
        document.getElementById("scalelblrare").innerHTML = "SKALA:";
        document.getElementById("styledefaultrare").innerHTML = "Standard";
        document.getElementById("typesolidrare").innerHTML = "Einfarbig";
        document.getElementById("typegradientrare").innerHTML = "Farbverlauf";
        document.getElementById("typeimgrare").innerHTML = "Hintergrundbild";
        document.getElementById("dragposlblrare").innerHTML = "Benutzerdefinierte Position";
        document.getElementById("rareiconselectlbl").innerHTML = "BENUTZERDEFINIERTES SYMBOL:";
        document.getElementById("fontsizelblrare").innerHTML = "SCHRIFTGRÖSSE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Position Zurücksetzen";
        document.getElementById("gameiconlblrare").innerHTML = "Spielsymbol Verwenden";

        document.getElementById("trackopacitylbl").innerHTML = "Opazität:";
        document.getElementById("resetlbl").innerHTML = "Anwendung Zurücksetzen";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Spieldetails</a> müssen ebenfalls auf "Öffentlich" eingestellt sein.';
        document.getElementById("allpercentlbl").innerHTML = "Alle Prozentsätze Anzeigen";
        document.getElementById("iconanimationlbl").innerHTML = "Seltene Symbolanimation Anzeigen";
        document.getElementById("hwalbl").innerHTML = "Hardwarebeschleunigung Deaktivieren";
        document.getElementById("nvdalbl").innerHTML = "NVDA-Unterstützung Aktivieren";
        document.getElementById("gamecompletionlbl").innerHTML = "Spielabschlussbenachrichtigung Anzeigen";
        document.getElementById("ssoverlaylbl").innerHTML = "Speichern Sie Bildschirmfoto mit Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Pfad:";
        document.getElementById("opacitylbl").innerHTML = "Opazität der Benachrichtigung:";
        document.getElementById("ssmaintestbtn").innerHTML = "VORSCHAU HAUPTBILD";
        document.getElementById("ssraretestbtn").innerHTML = "VORSCHAU SELTENES BILD";

        secret = "Geheim";
        gamecomplete = "Spiel Abgeschlossen!";
        allunlocked = "Du hast alle Erfolge freigeschaltet!";
    } else if (config.lang == "greek") {
        document.getElementById("username").innerHTML = "Δεν εντοπίστηκε χρήστης";
        document.getElementById("gamestatus").innerHTML = "Δεν εντοπίστηκε παιχνίδι";
        document.getElementById("soundfile").innerHTML = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        document.getElementById("soundfilerare").innerHTML = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        document.getElementById("maincheevsound").innerHTML = "Ήχος κύριου επιτεύγματος";
        document.getElementById("rarecheevsound").innerHTML = "Σπάνιος ήχος επιτεύγματος";
        document.getElementById("test").innerHTML = "ΕΜΦΑΝΙΣΗ ΕΙΔΟΠΟΙΗΣΗΣ ΔΟΚΙΜΗΣ";
        document.getElementById("testrare").innerHTML = "ΕΜΦΑΝΙΣΗ ΕΙΔΟΠΟΙΗΣΗΣ ΣΠΑΝΙΩΝ ΔΟΚΙΜΩΝ";
        document.getElementById("settingstitle").innerHTML = "ΡΥΘΜΙΣΕΙΣ";
        document.getElementById("configtitle").innerHTML = "ΔΙΑΜΟΡΦΩΣΗ";
        document.getElementById("apibox").placeholder = "Εισαγάγετε το API Key";
        document.getElementById("steam64box").placeholder = "Εισαγάγετε το Steam64ID";
        document.getElementById("other").innerHTML = "ΑΛΛΑ";
        document.getElementById("showscreenshotlbl").innerHTML = "Εμφάνιση στιγμιότυπου οθόνης";
        document.getElementById("showscreenshotlblrare").innerHTML = "Εμφάνιση στιγμιότυπου οθόνης";
        document.getElementById("desktoplbl").innerHTML = "Συντόμευση Desktop";
        document.getElementById("startwinlbl").innerHTML = "Ξεκινήστε με τα Windows";
        document.getElementById("startminlbl").innerHTML = "Έναρξη Ελαχιστοποιημένη";
        document.getElementById("soundonlylbl").innerHTML = "Μόνο λειτουργία ήχου";
        document.getElementById("trackinglbl").innerHTML = 'Εμφάνιση "Τώρα Παρατηρώντας"';

        nouser = "Δεν εντοπίστηκε χρήστης";
        nogame = "Δεν εντοπίστηκε παιχνίδι";
        nosound = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        nosoundrare = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        rareheader = `'Ξεκλείδωτο σπάνιο επίτευγμα!`;
        unlinked = "ΑΠΟΣΥΝΔΕΣΗ";
        linked = "ΣΥΝΔΕΣΜΕΝΟ";
        novalue = "Παρακαλώ εισάγετε κάτι";
    
        resettitle = "Επαναφορά της εφαρμογής στην προεπιλογή;";
        resetdesc = `ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Αυτό θα καταργήσει όλες τις ρυθμίσεις χρήστη!`;
        resetbtns = ["Επαναφορά","Απεγκατάσταση","Ακυρώνω"];
    
        traylabel = "Δεν εντοπίστηκε παιχνίδι";
        trayshow = "Ανοιξε";
        trayexit = "Έξοδος";

        //!!!1.8 Translations;
        achievementunlocked = "Επίτευγμα!";
        rareachievementunlocked = "Σπάνιο Επίτευγμα!";
        testdesc = "Οι ειδοποιήσεις σας λειτουργούν σωστά";

        addsound = "Προσθήκη Ήχου";
        invalid = 'Μη Έγκυρος Τύπος Αρχείου';
        addimage = 'Προσθέστε Εικόνα';
        file = "ΑΡΧΕΙΟ";
        nofolder = "Προεπιλογή (δεν Έχει Επιλεγεί Φάκελος)";
        novalidaudio = "Δεν υπάρχουν έγκυρα αρχεία ήχου ";
        soundmode = "ΛΕΙΤΟΥΡΓΙΑ ΗΧΟΥ: ";
        randomised = "ΤΥΧΑΙΟΠΟΙΗΜΈΝΗ";
        presskey = "...";
        custompos = "Ορισμός Προσαρμοσμένης Θέσης";
        settingpos = "Ρύθμιση Κύριας Θέσης...";
        settingposrare = "Ρύθμιση Σπάνιας Θέσης...";

        document.getElementById("steamkeybindlbl").innerHTML = "Κουμπί Εικόνας Steam";
        document.getElementById("langlbl").innerHTML = "Γλώσσα:";
        document.getElementById("raritylbl").innerHTML = "Αξία Σπανιότητας: ";
        document.getElementById("nosteamlbl").innerHTML = "Απόκρυψη Ειδοποίησης Steam";
        document.getElementById("customiselbl").innerHTML = "ΕΠΕΞΕΡΓΑΣΙΑ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Κύριος';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Σπάνιος';
        document.getElementById("customiserstylelbl").innerHTML = "ΣΤΥΛ ΕΙΔΟΠΟΙΗΣΗΣ:";
        document.getElementById("notifypositionlbl").innerHTML = "ΘΕΣΗ ΟΘΟΝΗΣ:";
        document.getElementById("bgtypelbl").innerHTML = "ΤΥΠΟΣ ΥΠΟΒΑΘΡΟ:";
        document.getElementById("colourslbl").innerHTML = "ΧΡΩΜΑΤΑ";
        document.getElementById("colour1lbl").innerHTML = "Χρώμα 1";
        document.getElementById("colour2lbl").innerHTML = "Χρώμα 2";
        document.getElementById("textcolourlbl").innerHTML = "Χρώμα Κειμένου";
        document.getElementById("imgselectlbl").innerHTML = "ΕΙΚΟΝΑ ΦΟΝΤΟΥ:"
        document.getElementById("roundnesslbl").innerHTML = "ΣΤΡΟΓΓΥΛΟΤΗΤΑ:";
        document.getElementById("iconroundnesslbl").innerHTML = "ΣΤΡΟΓΓΥΛΟ ΕΙΚΟΝΩΝ:";
        document.getElementById("displaytimelbl").innerHTML = "ΧΡΟΝΟΣ ΕΜΦΑΝΙΣΗΣ:";
        document.getElementById("scalelbl").innerHTML = "ΚΛΙΜΑΚΑ:";
        document.getElementById("styledefault").innerHTML = "Πρότυπο";
        document.getElementById("typesolid").innerHTML = "Μονόχρωμος";
        document.getElementById("typegradient").innerHTML = "Διαβάθμιση Χρώματος";
        document.getElementById("typeimg").innerHTML = "Εικόνα Φόντου";
        document.getElementById("dragposlbl").innerHTML = "Προσαρμοσμένη θέση";
        document.getElementById("iconselectlbl").innerHTML = "ΠΡΟΣΑΡΜΟΣΜΕΝΟ ΕΙΚΟΝΙΔΙΟ:";
        document.getElementById("fontsizelbl").innerHTML = "ΜΕΓΕΘΟΣ ΓΡΑΜΜΑΤΟΣΕΙΡΑΣ:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Επαναφορά θέσης";
        document.getElementById("gameiconlbl").innerHTML = "Εικονίδιο Παιχνιδιού";

        document.getElementById("customiserstylelblrare").innerHTML = "ΣΤΥΛ ΕΙΔΟΠΟΙΗΣΗΣ:";
        document.getElementById("notifypositionlblrare").innerHTML = "ΘΕΣΗ ΟΘΟΝΗΣ:";
        document.getElementById("bgtypelblrare").innerHTML = "ΤΥΠΟΣ ΥΠΟΒΑΘΡΟ:";
        document.getElementById("rarecolourslbl").innerHTML = "ΧΡΩΜΑΤΑ";
        document.getElementById("colour1lblrare").innerHTML = "Χρώμα 1";
        document.getElementById("colour2lblrare").innerHTML = "Χρώμα 2";
        document.getElementById("textcolourlblrare").innerHTML = "Χρώμα Κειμένου";
        document.getElementById("rareimgselectlbl").innerHTML = "ΕΙΚΟΝΑ ΦΟΝΤΟΥ:"
        document.getElementById("roundnesslblrare").innerHTML = "ΣΤΡΟΓΓΥΛΟΤΗΤΑ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ΣΤΡΟΓΓΥΛΟ ΕΙΚΟΝΩΝ:";
        document.getElementById("displaytimelblrare").innerHTML = "ΧΡΟΝΟΣ ΕΜΦΑΝΙΣΗΣ:";
        document.getElementById("scalelblrare").innerHTML = "ΚΛΙΜΑΚΑ:";
        document.getElementById("styledefaultrare").innerHTML = "Πρότυπο";
        document.getElementById("typesolidrare").innerHTML = "Μονόχρωμος";
        document.getElementById("typegradientrare").innerHTML = "Διαβάθμιση Χρώματος";
        document.getElementById("typeimgrare").innerHTML = "Εικόνα Φόντου";
        document.getElementById("dragposlblrare").innerHTML = "Προσαρμοσμένη θέση";
        document.getElementById("rareiconselectlbl").innerHTML = "ΠΡΟΣΑΡΜΟΣΜΕΝΟ ΕΙΚΟΝΙΔΙΟ:";
        document.getElementById("fontsizelblrare").innerHTML = "ΜΕΓΕΘΟΣ ΓΡΑΜΜΑΤΟΣΕΙΡΑΣ:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Επαναφορά θέσης";
        document.getElementById("gameiconlblrare").innerHTML = "Εικονίδιο Παιχνιδιού";

        document.getElementById("trackopacitylbl").innerHTML = "Αδιαφάνεια:";
        document.getElementById("resetlbl").innerHTML = "Επαναφορά Εφαρμογής";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Οι λεπτομέρειες παιχνιδιού</a> πρέπει να είναι "Δημόσιες".';
        document.getElementById("allpercentlbl").innerHTML = "Εμφάνιση Όλων Των Ποσοστών";
        document.getElementById("iconanimationlbl").innerHTML = "Εμφάνιση Σπάνιων Κινούμενων Εικόνων";
        document.getElementById("hwalbl").innerHTML = "Απενεργοποιήστε Την Επιτάχυνση Υλικού";
        document.getElementById("nvdalbl").innerHTML = "Ενεργοποιήστε Την Υποστήριξη NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Εμφάνιση Ειδοποίησης Ολοκλήρωσης Του Παιχνιδιού";
        document.getElementById("ssoverlaylbl").innerHTML = "Αποθήκευση Στιγμιότυπων Οθόνης Με Επικάλυψη";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Μονοπάτι:";
        document.getElementById("opacitylbl").innerHTML = "Αδιαφάνεια Ειδοποίησης:";
        document.getElementById("ssmaintestbtn").innerHTML = "ΚΥΡΙΑ ΠΡΟΕΠΙΣΚΟΠΗΣΗ";
        document.getElementById("ssraretestbtn").innerHTML = "ΣΠΑΝΙΑ ΠΡΟΕΠΙΣΚΟΠΗΣΗ";

        secret = "Μυστικό";
        gamecomplete = "Παιχνίδι Τελείωσε!";
        allunlocked = "Ξεκλειδώσατε όλα τα επιτεύγματα!";
    } else if (config.lang == "hungarian") {
        document.getElementById("username").innerHTML = "Nincs Felhasználó Észlelve";
        document.getElementById("gamestatus").innerHTML = "Nincs Játék Észlelve";
        document.getElementById("soundfile").innerHTML = "Alapértelmezett (Nincs Hang Kiválasztva)";
        document.getElementById("soundfilerare").innerHTML = "Alapértelmezett (Nincs Hang Kiválasztva)";
        document.getElementById("maincheevsound").innerHTML = "Fő Értesítési Hang";
        document.getElementById("rarecheevsound").innerHTML = "Ritka Értesítési Hang";
        document.getElementById("test").innerHTML = "TESZT ÜZENET MUTATÁSA";
        document.getElementById("testrare").innerHTML = "RITKA TESZT ÜZENET MUTATÁSA";
        document.getElementById("settingstitle").innerHTML = "BEÁLLÍTÁSOK";
        document.getElementById("configtitle").innerHTML = "KONFIGURÁCIÓ";
        document.getElementById("apibox").placeholder = "Írja be az API Key-t";
        document.getElementById("steam64box").placeholder = "Írja be a Steam64ID-t";
        document.getElementById("other").innerHTML = "EGYÉB";
        document.getElementById("showscreenshotlbl").innerHTML = "Képernyőkép Megjelenítése";
        document.getElementById("showscreenshotlblrare").innerHTML = "Képernyőkép Megjelenítése";
        document.getElementById("desktoplbl").innerHTML = "Parancsikon Létrehozása";
        document.getElementById("startwinlbl").innerHTML = "Futtassa Amikor A Windows Elindul";
        document.getElementById("startminlbl").innerHTML = "Indítás Minimalizálva";
        document.getElementById("soundonlylbl").innerHTML = "Csak Hang Mód";
        document.getElementById("trackinglbl").innerHTML = '"Most Követési" Értesítés';

        nouser = "Nincs Felhasználó Észlelve";
        nogame = "Nincs Játék Észlelve";
        nosound = "Alapértelmezett (Nincs Hang Kiválasztva)";
        nosoundrare = "Alapértelmezett (Nincs Hang Kiválasztva)";
        rareheader = `'Ritka Teljesítmény Feloldva!`;
        unlinked = "NEM KAPCSOLÓDIK";
        linked = "CSATLAKOZTATVA";
        novalue = "Adjon meg egy értéket";

        resettitle = "Visszaállítja Az Alkalmazást Az Alapértelmezettre?";
        resetdesc = `FIGYELMEZTETÉS: Ezzel eltávolítja az összes felhasználói beállítást!`;
        resetbtns = ["Visszaállítás","Eltávolítás","Megszünteti"];
    
        traylabel = "Nincs Játék Észlelve";
        trayshow = "Mutasd";
        trayexit = "Kilépés";

        //!!!1.8 Translations;
        achievementunlocked = "Teljesítmény Feloldva!";
        rareachievementunlocked = "Ritka Teljesítmény Feloldva!";
        testdesc = "Az értesítések megfelelően működnek";
        
        addsound = "Hang Hozzáadása";
        invalid = 'Érvénytelen Fájltípus';
        addimage = 'Kép Hozzáadása';
        file = "FÁJL";
        nofolder = "Alapértelmezett (Nincs Kiválasztott Mappa)";
        novalidaudio = "Nincsenek érvényes hangfájlok a következő helyen ";
        soundmode = "HANG MÓD: ";
        randomised = "VÉLETLEN";
        presskey = "...";
        custompos = "Állítsa Be a Pozíciót";
        settingpos = "Fő Pozíció Beállítása...";
        settingposrare = "Ritka Pozíció Beállítása...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Képernyőkép Gomb";
        document.getElementById("langlbl").innerHTML = "Nyelv:";
        document.getElementById("raritylbl").innerHTML = "Ritkaság Százaléka: ";
        document.getElementById("nosteamlbl").innerHTML = "Steam Értesítés Elrejtése";
        document.getElementById("customiselbl").innerHTML = "TESTRESZAB...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Fő';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Ritka';
        document.getElementById("customiserstylelbl").innerHTML = "ÉRTESÍTÉSI STÍLUS:";
        document.getElementById("notifypositionlbl").innerHTML = "A KÉPERNYŐ HELYZETE:";
        document.getElementById("bgtypelbl").innerHTML = "HÁTTÉRTÍPUS:";
        document.getElementById("colourslbl").innerHTML = "SZÍNEK";
        document.getElementById("colour1lbl").innerHTML = "Szín 1";
        document.getElementById("colour2lbl").innerHTML = "Szín 2";
        document.getElementById("textcolourlbl").innerHTML = "Szöveg Színe";
        document.getElementById("imgselectlbl").innerHTML = "HÁTTÉRKÉP:"
        document.getElementById("roundnesslbl").innerHTML = "KEREKSÉG:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKON KEREKSÉG:";
        document.getElementById("displaytimelbl").innerHTML = "KIJELZÉSI IDŐ:";
        document.getElementById("scalelbl").innerHTML = "SKÁLA:";
        document.getElementById("styledefault").innerHTML = "Alapértelmezett";
        document.getElementById("typesolid").innerHTML = "Tartós Szín";
        document.getElementById("typegradient").innerHTML = "Színátmenet";
        document.getElementById("typeimg").innerHTML = "Háttérkép";
        document.getElementById("dragposlbl").innerHTML = "Egyéni Pozíció Használata";
        document.getElementById("iconselectlbl").innerHTML = "EGYEDI IKON:";
        document.getElementById("fontsizelbl").innerHTML = "BETŰMÉRET:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Állítsa Vissza A Pozíciót";
        document.getElementById("gameiconlbl").innerHTML = "Használja a Játék Ikont";

        document.getElementById("customiserstylelblrare").innerHTML = "ÉRTESÍTÉSI STÍLUS:";
        document.getElementById("notifypositionlblrare").innerHTML = "A KÉPERNYŐ HELYZETE:";
        document.getElementById("bgtypelblrare").innerHTML = "HÁTTÉRTÍPUS:";
        document.getElementById("rarecolourslbl").innerHTML = "SZÍNEK";
        document.getElementById("colour1lblrare").innerHTML = "Szín 1";
        document.getElementById("colour2lblrare").innerHTML = "Szín 2";
        document.getElementById("textcolourlblrare").innerHTML = "Szöveg Színe";
        document.getElementById("rareimgselectlbl").innerHTML = "HÁTTÉRKÉP:"
        document.getElementById("roundnesslblrare").innerHTML = "KEREKSÉG:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKON KEREKSÉG:";
        document.getElementById("displaytimelblrare").innerHTML = "KIJELZÉSI IDŐ:";
        document.getElementById("scalelblrare").innerHTML = "SKÁLA:";
        document.getElementById("styledefaultrare").innerHTML = "Alapértelmezett";
        document.getElementById("typesolidrare").innerHTML = "Tartós Szín";
        document.getElementById("typegradientrare").innerHTML = "Színátmenet";
        document.getElementById("typeimgrare").innerHTML = "Háttérkép";
        document.getElementById("dragposlblrare").innerHTML = "Egyéni Pozíció Használata";
        document.getElementById("rareiconselectlbl").innerHTML = "EGYEDI IKON:";
        document.getElementById("fontsizelblrare").innerHTML = "BETŰMÉRET:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Állítsa Vissza A Pozíciót";
        document.getElementById("gameiconlblrare").innerHTML = "Használja a Játék Ikont";

        document.getElementById("trackopacitylbl").innerHTML = "Átlátszatlanság:";
        document.getElementById("resetlbl").innerHTML = "Alkalmazás Visszaállítása";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">A játék részleteinek</a> „Nyilvánosnak” kell lennie.';
        document.getElementById("allpercentlbl").innerHTML = "Összes Százalék Megjelenítése";
        document.getElementById("iconanimationlbl").innerHTML = "Ritka Ikon-Animáció Megjelenítése";
        document.getElementById("hwalbl").innerHTML = "Hardveres Gyorsítás Letiltása";
        document.getElementById("nvdalbl").innerHTML = "NVDA Támogatás Engedélyezése";
        document.getElementById("gamecompletionlbl").innerHTML = "A Játék Befejezéséről Szóló Értesítés Megjelenítése";
        document.getElementById("ssoverlaylbl").innerHTML = "Képernyőképek Mentése Átfedéssel";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Pálya:";
        document.getElementById("opacitylbl").innerHTML = "Átlátszatlanság:";
        document.getElementById("ssmaintestbtn").innerHTML = "A FŐKÉP ELŐNÉZÉSE";
        document.getElementById("ssraretestbtn").innerHTML = "RITKA KÉP ELŐNÉZÉSE";

        secret = "Titkos";
        gamecomplete = "A Játék Kész!";
        allunlocked = "Minden jutalmat megszereztél!";
    } else if (config.lang == "italian") {
        document.getElementById("username").innerHTML = "Nessun Utente Rilevato";
        document.getElementById("gamestatus").innerHTML = "Nessun Gioco Rilevato";
        document.getElementById("soundfile").innerHTML = "Predefinito (Nessun Suono Selezionato)";
        document.getElementById("soundfilerare").innerHTML = "Predefinito (Nessun Suono Selezionato)";
        document.getElementById("maincheevsound").innerHTML = "Suono Principale";
        document.getElementById("rarecheevsound").innerHTML = "Suono Raro";
        document.getElementById("test").innerHTML = "MOSTRA NOTIFICA DI PROVA";
        document.getElementById("testrare").innerHTML = "MOSTRA NOTIFICA DI PROVA RARA";
        document.getElementById("settingstitle").innerHTML = "IMPOSTAZIONI";
        document.getElementById("configtitle").innerHTML = "CONFIGURAZIONE";
        document.getElementById("apibox").placeholder = "Inserisci API Key";
        document.getElementById("steam64box").placeholder = "Inserisci Steam64ID";
        document.getElementById("other").innerHTML = "ALTRO";
        document.getElementById("showscreenshotlbl").innerHTML = "Mostra Screenshot";
        document.getElementById("showscreenshotlblrare").innerHTML = "Mostra Screenshot";
        document.getElementById("desktoplbl").innerHTML = "Collegamento Sul Desktop";
        document.getElementById("startwinlbl").innerHTML = "Inizia con Windows";
        document.getElementById("startminlbl").innerHTML = "Inizio Ridotto a Icona";
        document.getElementById("soundonlylbl").innerHTML = "Modalità Solo Audio";
        document.getElementById("trackinglbl").innerHTML = 'Mostra Notifica "Ora Osservando"';

        nouser = "Nessun Utente Rilevato";
        nogame = "Nessun Gioco Rilevato";
        nosound = "Predefinito (Nessun Suono Selezionato)";
        nosoundrare = "Predefinito (Nessun Suono Selezionato)";
        rareheader = `'Obiettivo Raro Sbloccato!`;
        unlinked = "SCOLLEGATO";
        linked = "COLLEGATO";
        novalue = "Per favore inserisci un valore";
    
        resettitle = "Ripristinare l'Applicazione Ai Predefiniti?";
        resetdesc = `ATTENZIONE: Questo rimuoverà tutte le impostazioni utente!`;
        resetbtns = ["Ripristina","Disinstalla","Annulla"];
    
        traylabel = "Nessun Gioco Rilevato";
        trayshow = "Mostra";
        trayexit = "Esci";

        //!!!1.8 Translations;
        achievementunlocked = "Obiettivo Sbloccato!";
        rareachievementunlocked = "Raro Obiettivo Sbloccato!";
        testdesc = "Le tue notifiche funzionano correttamente";

        addsound = "Aggiungi Suono";
        invalid = 'Tipo Di File Non Valido';
        addimage = 'Aggiungi Immagine';
        file = "FILE";
        nofolder = "Predefinito (Nessuna Cartella Selezionata)";
        novalidaudio = "Nessun file audio valido si trova in";
        soundmode = "MODALITÀ SUONO: ";
        randomised = "RANDOMIZZATO";
        presskey = "...";
        custompos = "Imposta Posizione Personalizzata";
        settingpos = "Impostazione Principale...";
        settingposrare = "Impostazione Rara...";

        document.getElementById("steamkeybindlbl").innerHTML = "Schermata di Steam:";
        document.getElementById("langlbl").innerHTML = "Lingua:";
        document.getElementById("raritylbl").innerHTML = "Valore di Rarità: ";
        document.getElementById("nosteamlbl").innerHTML = "Nascondi la Notifica di Steam";
        document.getElementById("customiselbl").innerHTML = "MODIFICARE...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principale';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Raro';
        document.getElementById("customiserstylelbl").innerHTML = "STILE DI NOTIFICA:";
        document.getElementById("notifypositionlbl").innerHTML = "POSIZIONE SCHERMO:";
        document.getElementById("bgtypelbl").innerHTML = "TIPO DI SFONDO:";
        document.getElementById("colourslbl").innerHTML = "COLORI";
        document.getElementById("colour1lbl").innerHTML = "Colore 1";
        document.getElementById("colour2lbl").innerHTML = "Colore 2";
        document.getElementById("textcolourlbl").innerHTML = "Colore Del Testo";
        document.getElementById("imgselectlbl").innerHTML = "IMMAGINE DI SFONDO:"
        document.getElementById("roundnesslbl").innerHTML = "ROTONDITÀ:";
        document.getElementById("iconroundnesslbl").innerHTML = "ROTONDEZZA DELL'ICONA:";
        document.getElementById("displaytimelbl").innerHTML = "TEMPO DI NOTIFICA:";
        document.getElementById("scalelbl").innerHTML = "SCALA:";
        document.getElementById("styledefault").innerHTML = "Predefinito";
        document.getElementById("typesolid").innerHTML = "Colore Solido";
        document.getElementById("typegradient").innerHTML = "Gradiente di Colore";
        document.getElementById("typeimg").innerHTML = "Immagine di Sfondo";
        document.getElementById("dragposlbl").innerHTML = "Posizione Personalizzata";
        document.getElementById("iconselectlbl").innerHTML = "ICONA PERSONALIZZATA:";
        document.getElementById("fontsizelbl").innerHTML = "DIMENSIONE DEL FONT:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Ripristina Posizione";
        document.getElementById("gameiconlbl").innerHTML = "Usa l'Icona del Gioco";

        document.getElementById("customiserstylelblrare").innerHTML = "STILE DI NOTIFICA:";
        document.getElementById("notifypositionlblrare").innerHTML = "POSIZIONE SCHERMO:";
        document.getElementById("bgtypelblrare").innerHTML = "TIPO DI SFONDO:";
        document.getElementById("rarecolourslbl").innerHTML = "COLORI";
        document.getElementById("colour1lblrare").innerHTML = "Colore 1";
        document.getElementById("colour2lblrare").innerHTML = "Colore 2";
        document.getElementById("textcolourlblrare").innerHTML = "Colore Del Testo";
        document.getElementById("rareimgselectlbl").innerHTML = "IMMAGINE DI SFONDO:"
        document.getElementById("roundnesslblrare").innerHTML = "ROTONDITÀ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ROTONDEZZA DELL'ICONA:";
        document.getElementById("displaytimelblrare").innerHTML = "TEMPO DI NOTIFICA:";
        document.getElementById("scalelblrare").innerHTML = "SCALA:";
        document.getElementById("styledefaultrare").innerHTML = "Predefinito";
        document.getElementById("typesolidrare").innerHTML = "Colore Solido";
        document.getElementById("typegradientrare").innerHTML = "Gradiente di Colore";
        document.getElementById("typeimgrare").innerHTML = "Immagine di Sfondo";
        document.getElementById("dragposlblrare").innerHTML = "Posizione Personalizzata";
        document.getElementById("rareiconselectlbl").innerHTML = "ICONA PERSONALIZZATA:";
        document.getElementById("fontsizelblrare").innerHTML = "DIMENSIONE DEL FONT:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Ripristina Posizione";
        document.getElementById("gameiconlblrare").innerHTML = "Usa l'Icona del Gioco";

        document.getElementById("trackopacitylbl").innerHTML = "Opacità:";
        document.getElementById("resetlbl").innerHTML = "Ripristina Applicazione";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">I dettagli del gioco</a> devono essere "Pubblici".';
        document.getElementById("allpercentlbl").innerHTML = "Mostra Tutte le Percentuali";
        document.getElementById("iconanimationlbl").innerHTML = "Mostra Animazione Icona Rara";
        document.getElementById("hwalbl").innerHTML = "Disabilita l'Accelerazione Hardware";
        document.getElementById("nvdalbl").innerHTML = "Abilita il Supporto NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Mostra la Notifica di Completamento del Gioco";
        document.getElementById("ssoverlaylbl").innerHTML = "Salva Screenshot con Sovrapposizione";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Percorso:";
        document.getElementById("opacitylbl").innerHTML = "Opacità di Notifica:";
        document.getElementById("ssmaintestbtn").innerHTML = "ANTEPRIMA IMMAGINE PRINCIPALE";
        document.getElementById("ssraretestbtn").innerHTML = "ANTEPRIMA IMMAGINE RARA";

        secret = "Segreto";
        gamecomplete = "Gioco Completo!";
        allunlocked = "Hai sbloccato tutti gli obiettivi!";
    } else if (config.lang == "japanese") {
        document.getElementById("username").innerHTML = "ユーザーが検出されません";
        document.getElementById("gamestatus").innerHTML = "ゲームが検出されません";
        document.getElementById("soundfile").innerHTML = "デフォルト（サウンドが選択されていません）";
        document.getElementById("soundfilerare").innerHTML = "デフォルト（サウンドが選択されていません）";
        document.getElementById("maincheevsound").innerHTML = "主なアチーブメントサウンド";
        document.getElementById("rarecheevsound").innerHTML = "レアアチーブメントサウンド";
        document.getElementById("test").innerHTML = "テスト通知を表示する";
        document.getElementById("testrare").innerHTML = "まれなテスト通知を表示する";
        document.getElementById("settingstitle").innerHTML = "設定";
        document.getElementById("configtitle").innerHTML = "構成";
        document.getElementById("apibox").placeholder = "API Keyを入力してください";
        document.getElementById("steam64box").placeholder = "Steam64IDを入力してください";
        document.getElementById("other").innerHTML = "他の";
        document.getElementById("showscreenshotlbl").innerHTML = "スクリーンショットを表示";
        document.getElementById("showscreenshotlblrare").innerHTML = "スクリーンショットを表示";
        document.getElementById("desktoplbl").innerHTML = "デスクトップのショートカット";
        document.getElementById("startwinlbl").innerHTML = "Windowsから始める";
        document.getElementById("startminlbl").innerHTML = "システムトレイへの最小化を開始";
        document.getElementById("soundonlylbl").innerHTML = "サウンドオンリーモード";
        document.getElementById("trackinglbl").innerHTML = '「現在監視中」の通知を表示する';
        
        nouser = "ユーザーが検出されません";
        nogame = "ゲームが検出されません";
        nosound = "デフォルト（サウンドが選択されていません）";
        nosoundrare = "デフォルト（サウンドが選択されていません）";
        rareheader = `'珍しい成果が解き放たれる！`;
        unlinked = "リンクされていない";
        linked = "リンク";
        novalue = "値を入力してください";

        resettitle = "アプリケーションをデフォルトにリセットしますか？";
        resetdesc = `警告：これにより、すべてのユーザー設定が削除されます。`;
        resetbtns = ["リセット","アンインストール","キャンセル"];
    
        traylabel = "ゲームが検出されません";
        trayshow = "見せる";
        trayexit = "出口";

        //!!!1.8 Translations;
        achievementunlocked = "成果！";
        rareachievementunlocked = "異常な成果！";
        testdesc = "通知は正しく機能しています。";

        addsound = "選択したサウンドを追加";
        invalid = '無効なファイルタイプ';
        addimage = '選択した画像を追加';
        file = "ファイル";
        nofolder = "デフォルト（フォルダが選択されていません）";
        novalidaudio = "に有効なオーディオファイルがありません ";
        soundmode = "サウンドモード： ";
        randomised = "ランダム";
        presskey = "...";
        custompos = "カスタム画面位置の設定";
        settingpos = "主な位置を設定する...";
        settingposrare = "レアポジションの設定...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steamスクリーンショットボタン:";
        document.getElementById("langlbl").innerHTML = "言語:";
        document.getElementById("raritylbl").innerHTML = "レア度値：";
        document.getElementById("nosteamlbl").innerHTML = "Steam通知を非表示にする";
        document.getElementById("customiselbl").innerHTML = "カスタマイズ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">主要';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">レア';
        document.getElementById("customiserstylelbl").innerHTML = "アチーブメントスタイル:";
        document.getElementById("notifypositionlbl").innerHTML = "画面の位置:";
        document.getElementById("bgtypelbl").innerHTML = "背景タイプ:";
        document.getElementById("colourslbl").innerHTML = "色";
        document.getElementById("colour1lbl").innerHTML = "カラー1";
        document.getElementById("colour2lbl").innerHTML = "カラー2";
        document.getElementById("textcolourlbl").innerHTML = "テキストの色";
        document.getElementById("imgselectlbl").innerHTML = "背景画像:"
        document.getElementById("roundnesslbl").innerHTML = "ラウンドネス:";
        document.getElementById("iconroundnesslbl").innerHTML = "アイコンの丸み：";
        document.getElementById("displaytimelbl").innerHTML = "表示時間:";
        document.getElementById("scalelbl").innerHTML = "規模:";
        document.getElementById("styledefault").innerHTML = "ディフォルト";
        document.getElementById("typesolid").innerHTML = "ソリッドカラー";
        document.getElementById("typegradient").innerHTML = "カラーグラデーション";
        document.getElementById("typeimg").innerHTML = "背景画像";
        document.getElementById("dragposlbl").innerHTML = "カスタム画面位置を使用";
        document.getElementById("iconselectlbl").innerHTML = "カスタムアイコン：";
        document.getElementById("fontsizelbl").innerHTML = "フォントサイズ：";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "位置をリセット";
        document.getElementById("gameiconlbl").innerHTML = "ゲームアイコンを使用する";

        document.getElementById("customiserstylelblrare").innerHTML = "アチーブメントスタイル:";
        document.getElementById("notifypositionlblrare").innerHTML = "画面の位置:";
        document.getElementById("bgtypelblrare").innerHTML = "背景タイプ:";
        document.getElementById("rarecolourslbl").innerHTML = "色";
        document.getElementById("colour1lblrare").innerHTML = "カラー1";
        document.getElementById("colour2lblrare").innerHTML = "カラー2";
        document.getElementById("textcolourlblrare").innerHTML = "テキストの色";
        document.getElementById("rareimgselectlbl").innerHTML = "背景画像:"
        document.getElementById("roundnesslblrare").innerHTML = "ラウンドネス:";
        document.getElementById("iconroundnesslblrare").innerHTML = "アイコンの丸み：";
        document.getElementById("displaytimelblrare").innerHTML = "表示時間:";
        document.getElementById("scalelblrare").innerHTML = "規模:";
        document.getElementById("styledefaultrare").innerHTML = "ディフォルト";
        document.getElementById("typesolidrare").innerHTML = "ソリッドカラー";
        document.getElementById("typegradientrare").innerHTML = "カラーグラデーション";
        document.getElementById("typeimgrare").innerHTML = "背景画像";
        document.getElementById("dragposlblrare").innerHTML = "カスタム画面位置を使用";
        document.getElementById("rareiconselectlbl").innerHTML = "カスタムアイコン：";
        document.getElementById("fontsizelblrare").innerHTML = "フォントサイズ：";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "位置をリセット";
        document.getElementById("gameiconlblrare").innerHTML = "ゲームアイコンを使用する";

        document.getElementById("trackopacitylbl").innerHTML = "不透明度の追跡：";
        document.getElementById("resetlbl").innerHTML = "アプリケーションをリセット";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">ゲームの詳細</a>も「公開」に設定する必要があります。';
        document.getElementById("allpercentlbl").innerHTML = "すべての達成率を表示する";
        document.getElementById("iconanimationlbl").innerHTML = "珍しいアイコンアニメーションを表示";
        document.getElementById("hwalbl").innerHTML = "ハードウェアアクセラレーションを無効にする";
        document.getElementById("nvdalbl").innerHTML = "NVDAサポートを有効にする";
        document.getElementById("gamecompletionlbl").innerHTML = "ゲーム完了通知を表示する";
        document.getElementById("ssoverlaylbl").innerHTML = "オーバーレイでスクリーンショットを保存";
        document.getElementById("ssoverlaypathlbl").innerHTML = "道：";
        document.getElementById("opacitylbl").innerHTML = "通知の不透明度：";
        document.getElementById("ssmaintestbtn").innerHTML = "メインオーバーレイのプレビュー";
        document.getElementById("ssraretestbtn").innerHTML = "プレビューレアオーバーレイ";

        secret = "ひみつ";
        gamecomplete = "ゲーム完了！";
        allunlocked = "すべての実績のロックを解除しました！";
    } else if (config.lang == "korean") {
        document.getElementById("username").innerHTML = "감지된 사용자 없음";
        document.getElementById("gamestatus").innerHTML = "감지된 게임 없음";
        document.getElementById("soundfile").innerHTML = "기본값(선택한 소리 없음)";
        document.getElementById("soundfilerare").innerHTML = "기본값(선택한 소리 없음)";
        document.getElementById("maincheevsound").innerHTML = "주요 업적 사운드";
        document.getElementById("rarecheevsound").innerHTML = "희귀 성취음";
        document.getElementById("test").innerHTML = "테스트 알림 표시";
        document.getElementById("testrare").innerHTML = "희귀 테스트 알림 표시";
        document.getElementById("settingstitle").innerHTML = "설정";
        document.getElementById("configtitle").innerHTML = "구성";
        document.getElementById("apibox").placeholder = "API Key 입력";
        document.getElementById("steam64box").placeholder = "Steam64ID 입력";
        document.getElementById("other").innerHTML = "다른";
        document.getElementById("showscreenshotlbl").innerHTML = "업적 스크린샷 표시";
        document.getElementById("showscreenshotlblrare").innerHTML = "업적 스크린샷 표시";
        document.getElementById("desktoplbl").innerHTML = "바탕 화면 바로 가기 만들기";
        document.getElementById("startwinlbl").innerHTML = "Windows로 시작";
        document.getElementById("startminlbl").innerHTML = "시스템 트레이에 최소화된 시작";
        document.getElementById("soundonlylbl").innerHTML = "사운드 전용 모드";
        document.getElementById("trackinglbl").innerHTML = '"지금 추적" 알림 표시';
        
        nouser = "감지된 사용자 없음";
        nogame = "감지된 게임 없음";
        nosound = "기본값(선택한 소리 없음)";
        nosoundrare = "기본값(선택한 소리 없음)";
        rareheader = `'희귀 업적 잠금 해제!`;
        unlinked = "연결되지 않음";
        linked = "연결됨";
        novalue = "값을 입력 해주세요";

        resettitle = "애플리케이션을 기본값으로 재설정하시겠습니까?";
        resetdesc = `경고: 이렇게 하면 모든 사용자 설정이 제거됩니다!`;
        resetbtns = ["다시 놓다","제거","취소"];
    
        traylabel = "감지된 게임 없음";
        trayshow = "보이다";
        trayexit = "퇴거하다";

        //!!!1.8 Translations;
        achievementunlocked = "잠금 해제 업적!";
        rareachievementunlocked = "희귀 업적 잠금 해제!";
        testdesc = "알림이 올바르게 작동하고 있습니다";

        addsound = "선택한 사운드 추가";
        invalid = '잘못된 파일 형식';
        addimage = '선택한 이미지 추가';
        file = "파일";
        nofolder = "기본값(선택한 폴더 없음)";
        novalidaudio = "유효한 오디오 파일이 없습니다.";
        soundmode = "사운드 모드: ";
        randomised = "무작위";
        presskey = "...";
        custompos = "사용자 정의 화면 위치 설정";
        settingpos = "기본 위치 설정 중...";
        settingposrare = "희귀 위치 설정 중...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam 스크린샷 버튼:";
        document.getElementById("langlbl").innerHTML = "언어:";
        document.getElementById("raritylbl").innerHTML = "희귀도 백분율: ";
        document.getElementById("nosteamlbl").innerHTML = "Steam 알림 숨기기";
        document.getElementById("customiselbl").innerHTML = "커스터마이즈...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">기본';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">희귀 한';
        document.getElementById("customiserstylelbl").innerHTML = "알림 스타일:";
        document.getElementById("notifypositionlbl").innerHTML = "화면 위치:";
        document.getElementById("bgtypelbl").innerHTML = "배경 유형:";
        document.getElementById("colourslbl").innerHTML = "그림 물감";
        document.getElementById("colour1lbl").innerHTML = "색상 1";
        document.getElementById("colour2lbl").innerHTML = "색상 2";
        document.getElementById("textcolourlbl").innerHTML = "텍스트 색상";
        document.getElementById("imgselectlbl").innerHTML = "배경 이미지:"
        document.getElementById("roundnesslbl").innerHTML = "진원도:";
        document.getElementById("iconroundnesslbl").innerHTML = "아이콘 원형:";
        document.getElementById("displaytimelbl").innerHTML = "표시 시간:";
        document.getElementById("scalelbl").innerHTML = "규모:";
        document.getElementById("styledefault").innerHTML = "기본";
        document.getElementById("typesolid").innerHTML = "단색";
        document.getElementById("typegradient").innerHTML = "색상 그라데이션";
        document.getElementById("typeimg").innerHTML = "배경 이미지";
        document.getElementById("dragposlbl").innerHTML = "사용자 정의 화면 위치 사용";
        document.getElementById("iconselectlbl").innerHTML = "사용자 정의 아이콘:";
        document.getElementById("fontsizelbl").innerHTML = "글꼴 크기:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "위치 재설정";
        document.getElementById("gameiconlbl").innerHTML = "게임 아이콘 사용";

        document.getElementById("customiserstylelblrare").innerHTML = "알림 스타일:";
        document.getElementById("notifypositionlblrare").innerHTML = "화면 위치:";
        document.getElementById("bgtypelblrare").innerHTML = "배경 유형:";
        document.getElementById("rarecolourslbl").innerHTML = "그림 물감";
        document.getElementById("colour1lblrare").innerHTML = "색상 1";
        document.getElementById("colour2lblrare").innerHTML = "색상 2";
        document.getElementById("textcolourlblrare").innerHTML = "텍스트 색상";
        document.getElementById("rareimgselectlbl").innerHTML = "배경 이미지:"
        document.getElementById("roundnesslblrare").innerHTML = "진원도:";
        document.getElementById("iconroundnesslblrare").innerHTML = "아이콘 원형:";
        document.getElementById("displaytimelblrare").innerHTML = "표시 시간:";
        document.getElementById("scalelblrare").innerHTML = "규모:";
        document.getElementById("styledefaultrare").innerHTML = "기본";
        document.getElementById("typesolidrare").innerHTML = "단색";
        document.getElementById("typegradientrare").innerHTML = "색상 그라데이션";
        document.getElementById("typeimgrare").innerHTML = "배경 이미지";
        document.getElementById("dragposlblrare").innerHTML = "사용자 정의 화면 위치 사용";
        document.getElementById("rareiconselectlbl").innerHTML = "사용자 정의 아이콘:";
        document.getElementById("fontsizelblrare").innerHTML = "글꼴 크기:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "위치 재설정";
        document.getElementById("gameiconlblrare").innerHTML = "게임 아이콘 사용";

        document.getElementById("trackopacitylbl").innerHTML = "불투명도 추적:";
        document.getElementById("resetlbl").innerHTML = "애플리케이션 재설정";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">게임 세부정보</a>도 "공개"로 설정해야 합니다.';
        document.getElementById("allpercentlbl").innerHTML = "모든 성취도 백분율 표시";
        document.getElementById("iconanimationlbl").innerHTML = "희귀 아이콘 애니메이션 표시";
        document.getElementById("hwalbl").innerHTML = "하드웨어 가속 비활성화";
        document.getElementById("nvdalbl").innerHTML = "NVDA 지원 활성화";
        document.getElementById("gamecompletionlbl").innerHTML = "게임 완료 알림 표시";
        document.getElementById("ssoverlaylbl").innerHTML = "오버레이로 스크린샷 저장";
        document.getElementById("ssoverlaypathlbl").innerHTML = "길:";
        document.getElementById("opacitylbl").innerHTML = "알림 불투명도:";
        document.getElementById("ssmaintestbtn").innerHTML = "기본 오버레이 미리보기";
        document.getElementById("ssraretestbtn").innerHTML = "희귀 오버레이 미리보기";

        secret = "비밀";
        gamecomplete = "게임 완료!";
        allunlocked = "모든 업적을 달성했습니다!";
    } else if (config.lang == "norwegian") {
        document.getElementById("username").innerHTML = "Ingen Bruker Oppdaget";
        document.getElementById("gamestatus").innerHTML = "Ingen Spill Oppdaget";
        document.getElementById("soundfile").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("maincheevsound").innerHTML = "Hovedprestasjonslyd";
        document.getElementById("rarecheevsound").innerHTML = "Sjelden Prestasjonslyd";
        document.getElementById("test").innerHTML = "VIS TESTVARSEL";
        document.getElementById("testrare").innerHTML = "VIS SJELDEN TESTVARSLING";
        document.getElementById("settingstitle").innerHTML = "INNSTILLINGER";
        document.getElementById("configtitle").innerHTML = "KONFIGURASJON";
        document.getElementById("apibox").placeholder = "Skriv inn API Key";
        document.getElementById("steam64box").placeholder = "Skriv inn Steam64ID";
        document.getElementById("other").innerHTML = "ANNEN";
        document.getElementById("showscreenshotlbl").innerHTML = "Vis Skjermbilde";
        document.getElementById("showscreenshotlblrare").innerHTML = "Vis Skjermbilde";
        document.getElementById("desktoplbl").innerHTML = "Lag Desktop Snarvei";
        document.getElementById("startwinlbl").innerHTML = "Start med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimert";
        document.getElementById("soundonlylbl").innerHTML = "Kun Lydmodus";
        document.getElementById("trackinglbl").innerHTML = 'Vis "Nå Sporing"-Varsel';

        nouser = "Ingen Bruker Oppdaget";
        nogame = "Ingen Spill Oppdaget";
        nosound = "Standard (Ingen Lyd Valgt)";
        nosoundrare = "Standard (Ingen Lyd Valgt)";
        rareheader = `'Sjelden Prestasjon Låst Opp!`;
        unlinked = "IKKE KNYTTET";
        linked = "KNYTTET";
        novalue = "Vennligst angi en verdi";
    
        resettitle = "Tilbakestille Applikasjonen Til Standard?";
        resetdesc = `ADVARSEL: Dette vil fjerne alle brukerinnstillinger!`;
        resetbtns = ["Nullstille","Avinstaller","Avbryt"];
    
        traylabel = "Ingen Spill Oppdaget";
        trayshow = "Vise";
        trayexit = "Lukke";

        //!!!1.8 Translations;
        achievementunlocked = "Prestasjon Låst Opp!";
        rareachievementunlocked = "Sjelden Prestasjon Låst Opp!";
        testdesc = "Varslene dine fungerer som de skal";

        addsound = "Legg Til Valgt Lyd";
        invalid = 'Ugyldig Filtype';
        addimage = 'Legg Til Valgt Bilde';
        file = "FIL";
        nofolder = "Standard (Ingen Mappe Er Valgt)";
        novalidaudio = "Ingen gyldige lydfiler er plassert i ";
        soundmode = "LYDMODUS: ";
        randomised = "TILFELDIG";
        presskey = "...";
        custompos = "Angi Egendefinert Skjermposisjon";
        settingpos = "Stiller Inn Hovedposisjon...";
        settingposrare = "Stiller Sjelden Posisjon...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam-Skjermbildeknapp:";
        document.getElementById("langlbl").innerHTML = "Språk:";
        document.getElementById("raritylbl").innerHTML = "Sjeldenhetsprosent: ";
        document.getElementById("nosteamlbl").innerHTML = "Skjul Steam-Varsling";
        document.getElementById("customiselbl").innerHTML = "TILPASSE ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Hoved';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Sjelden';
        document.getElementById("customiserstylelbl").innerHTML = "MELDINGSSTIL:";
        document.getElementById("notifypositionlbl").innerHTML = "SKJERMPOSISJON:";
        document.getElementById("bgtypelbl").innerHTML = "BAKGRUNNSTYPE:";
        document.getElementById("colourslbl").innerHTML = "FARGER";
        document.getElementById("colour1lbl").innerHTML = "Farge 1";
        document.getElementById("colour2lbl").innerHTML = "Farge 2";
        document.getElementById("textcolourlbl").innerHTML = "Tekstfarge";
        document.getElementById("imgselectlbl").innerHTML = "BAKGRUNNSBILDE:"
        document.getElementById("roundnesslbl").innerHTML = "RUNDHET:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKON RUNDHET:";
        document.getElementById("displaytimelbl").innerHTML = "VISNINGSTID:";
        document.getElementById("scalelbl").innerHTML = "SKALA:";
        document.getElementById("styledefault").innerHTML = "Misligholde";
        document.getElementById("typesolid").innerHTML = "Solid Farge";
        document.getElementById("typegradient").innerHTML = "Fargegradient";
        document.getElementById("typeimg").innerHTML = "Bakgrunnsbilde";
        document.getElementById("dragposlbl").innerHTML = "Egendefinert Posisjon";
        document.getElementById("iconselectlbl").innerHTML = "TILPASSET IKONET:";
        document.getElementById("fontsizelbl").innerHTML = "SKRIFTSTØRRELSE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Tilbakestill Posisjon";
        document.getElementById("gameiconlbl").innerHTML = "Bruk Spillikonet";

        document.getElementById("customiserstylelblrare").innerHTML = "MELDINGSSTIL:";
        document.getElementById("notifypositionlblrare").innerHTML = "SKJERMPOSISJON:";
        document.getElementById("bgtypelblrare").innerHTML = "BAKGRUNNSTYPE:";
        document.getElementById("rarecolourslbl").innerHTML = "FARGER";
        document.getElementById("colour1lblrare").innerHTML = "Farge 1";
        document.getElementById("colour2lblrare").innerHTML = "Farge 2";
        document.getElementById("textcolourlblrare").innerHTML = "Tekstfarge";
        document.getElementById("rareimgselectlbl").innerHTML = "BAKGRUNNSBILDE:"
        document.getElementById("roundnesslblrare").innerHTML = "RUNDHET:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKON RUNDHET:";
        document.getElementById("displaytimelblrare").innerHTML = "VISNINGSTID:";
        document.getElementById("scalelblrare").innerHTML = "SKALA:";
        document.getElementById("styledefaultrare").innerHTML = "Misligholde";
        document.getElementById("typesolidrare").innerHTML = "Solid Farge";
        document.getElementById("typegradientrare").innerHTML = "Fargegradient";
        document.getElementById("typeimgrare").innerHTML = "Bakgrunnsbilde";
        document.getElementById("dragposlblrare").innerHTML = "Egendefinert Posisjon";
        document.getElementById("rareiconselectlbl").innerHTML = "TILPASSET IKONET:";
        document.getElementById("fontsizelblrare").innerHTML = "SKRIFTSTØRRELSE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Tilbakestill Posisjon";
        document.getElementById("gameiconlblrare").innerHTML = "Bruk Spillikonet";

        document.getElementById("trackopacitylbl").innerHTML = "Sporingsopasitet:";
        document.getElementById("resetlbl").innerHTML = "Tilbakestill Applikasjon";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Spilldetaljer</a> må også settes til "Offentlig".';
        document.getElementById("allpercentlbl").innerHTML = "Vis Alle Prestasjonsprosent";
        document.getElementById("iconanimationlbl").innerHTML = "Vis Sjeldne Ikonanimasjoner";
        document.getElementById("hwalbl").innerHTML = "Deaktiver Maskinvareakselerasjon";
        document.getElementById("nvdalbl").innerHTML = "Aktiver NVDA-Støtte";
        document.getElementById("gamecompletionlbl").innerHTML = "Vis Varsel om Fullført Spill";
        document.getElementById("ssoverlaylbl").innerHTML = "Lagre Skjermbilder med Overlegg";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Sti:";
        document.getElementById("opacitylbl").innerHTML = "Varslingsopacitet:";
        document.getElementById("ssmaintestbtn").innerHTML = "SE HOVEDBILDE";
        document.getElementById("ssraretestbtn").innerHTML = "SE SJELDENT BILDE";

        secret = "Hemmelig";
        gamecomplete = "Spillet Er Fullført!";
        allunlocked = "Du har låst opp alle prestasjoner!";
    } else if (config.lang == "polish") {
        document.getElementById("username").innerHTML = "Nie Wykryto Użytkownika";
        document.getElementById("gamestatus").innerHTML = "Nie Wykryto Gry";
        document.getElementById("soundfile").innerHTML = "Domyślnie (Nie Wybrano Dźwięku)";
        document.getElementById("soundfilerare").innerHTML = "Domyślnie (Nie Wybrano Dźwięku)";
        document.getElementById("maincheevsound").innerHTML = "Główny Dźwięk";
        document.getElementById("rarecheevsound").innerHTML = "Rzadki Dźwięk";
        document.getElementById("test").innerHTML = "POKAŻ POWIADOMIENIE TESTOWE";
        document.getElementById("testrare").innerHTML = "POKAŻ RZADKIE POWIADOMIENIE TESTOWE";
        document.getElementById("settingstitle").innerHTML = "USTAWIENIA";
        document.getElementById("configtitle").innerHTML = "KONFIGURACJA";
        document.getElementById("apibox").placeholder = "Wpisz API Key";
        document.getElementById("steam64box").placeholder = "Wpisz Steam64ID";
        document.getElementById("other").innerHTML = "INNE";
        document.getElementById("showscreenshotlbl").innerHTML = "Pokaż Zrzut Ekranu Osiągnięcia";
        document.getElementById("showscreenshotlblrare").innerHTML = "Pokaż Zrzut Ekranu Osiągnięcia";
        document.getElementById("desktoplbl").innerHTML = "Utwórz Skrót Na Pulpicie";
        document.getElementById("startwinlbl").innerHTML = "Uruchom z Windows";
        document.getElementById("startminlbl").innerHTML = "Zacznij w Obszarze Powiadomień";
        document.getElementById("soundonlylbl").innerHTML = "Tryb Samego Dźwięku";
        document.getElementById("trackinglbl").innerHTML = 'Wyświetl Powiadomienie "Śledzące"';

        nouser = "Nie Wykryto Użytkownika";
        nogame = "Nie Wykryto Gry";
        nosound = "Domyślnie (Nie Wybrano Dźwięku)";
        nosoundrare = "Domyślnie (Nie Wybrano Dźwięku)";
        rareheader = `'Odblokowane Rzadkie Osiągnięcie!`;
        unlinked = "NIE POŁĄCZONY";
        linked = "POŁĄCZONY";
        novalue = "Proszę wprowadzić wartość";

        resettitle = "Zresetować Aplikację Do Domyślnych?";
        resetdesc = `OSTRZEŻENIE: Spowoduje to usunięcie wszystkich ustawień użytkownika!`;
        resetbtns = ["Resetowanie","Odinstaluj","Anuluj"];
    
        traylabel = "Nie Wykryto Gry";
        trayshow = "Pokaż";
        trayexit = "Wyjdź";

        //!!!1.8 Translations;
        achievementunlocked = "Odblokowano Osiągnięcie!";
        rareachievementunlocked = "Odblokowano Rzadkie Osiągnięcie!";
        testdesc = "Twoje powiadomienia działają prawidłowo";

        addsound = "Dodaj Wybrany Dźwięk";
        invalid = 'Nieprawidłowy Typ Pliku';
        addimage = 'Dodaj Wybrany Obraz';
        file = "PLIK";
        nofolder = "Domyślnie (Nie Wybrano Folderu)";
        novalidaudio = "Brak prawidłowych plików audio znajdujących się w ";
        soundmode = "TRYB DŹWIĘKU: ";
        randomised = "LOSOWY";
        presskey = "...";
        custompos = "Ustaw Pozycję Niestandardową";
        settingpos = "Ustawianie Pozycji Głównej...";
        settingposrare = "Ustawianie Rzadkiej Pozycji...";

        document.getElementById("steamkeybindlbl").innerHTML = "Przycisk Zrzutu Ekranu Steam";
        document.getElementById("langlbl").innerHTML = "Język:";
        document.getElementById("raritylbl").innerHTML = "Procent Rzadkości: ";
        document.getElementById("nosteamlbl").innerHTML = "Ukryj Powiadomienie Steam";
        document.getElementById("customiselbl").innerHTML = "DOSTOSUJ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Główny';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Rzadki';
        document.getElementById("customiserstylelbl").innerHTML = "STYL POWIADOMIENIA:";
        document.getElementById("notifypositionlbl").innerHTML = "POZYCJA EKRANU:";
        document.getElementById("bgtypelbl").innerHTML = "RODZAJ TŁA:";
        document.getElementById("colourslbl").innerHTML = "KOLORYSTYKA";
        document.getElementById("colour1lbl").innerHTML = "Kolor 1";
        document.getElementById("colour2lbl").innerHTML = "Kolor 2";
        document.getElementById("textcolourlbl").innerHTML = "Kolor Tekstu";
        document.getElementById("imgselectlbl").innerHTML = "ZDJĘCIE W TLE:"
        document.getElementById("roundnesslbl").innerHTML = "ZAOKRĄGLENIE:";
        document.getElementById("iconroundnesslbl").innerHTML = "ZAOKRĄGLENIE IKONY:";
        document.getElementById("displaytimelbl").innerHTML = "CZAS WYŚWIETLANIA:";
        document.getElementById("scalelbl").innerHTML = "SKALA:";
        document.getElementById("styledefault").innerHTML = "Domyślnie";
        document.getElementById("typesolid").innerHTML = "Jednolity Kolor";
        document.getElementById("typegradient").innerHTML = "Gradient Kolorów";
        document.getElementById("typeimg").innerHTML = "Zdjęcie w Tle";
        document.getElementById("dragposlbl").innerHTML = "Użyj Pozycji Niestandardowej";
        document.getElementById("iconselectlbl").innerHTML = "NIESTANDARDOWA IKONA:";
        document.getElementById("fontsizelbl").innerHTML = "ROZMIAR CZCIONKI:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Resetuj Pozycję";
        document.getElementById("gameiconlbl").innerHTML = "Użyj Ikony Gry";

        document.getElementById("customiserstylelblrare").innerHTML = "STYL POWIADOMIENIA:";
        document.getElementById("notifypositionlblrare").innerHTML = "POZYCJA EKRANU:";
        document.getElementById("bgtypelblrare").innerHTML = "RODZAJ TŁA:";
        document.getElementById("rarecolourslbl").innerHTML = "KOLORYSTYKA";
        document.getElementById("colour1lblrare").innerHTML = "Kolor 1";
        document.getElementById("colour2lblrare").innerHTML = "Kolor 2";
        document.getElementById("textcolourlblrare").innerHTML = "Kolor Tekstu";
        document.getElementById("rareimgselectlbl").innerHTML = "ZDJĘCIE W TLE:"
        document.getElementById("roundnesslblrare").innerHTML = "ZAOKRĄGLENIE:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ZAOKRĄGLENIE IKONY:";
        document.getElementById("displaytimelblrare").innerHTML = "CZAS WYŚWIETLANIA:";
        document.getElementById("scalelblrare").innerHTML = "SKALA:";
        document.getElementById("styledefaultrare").innerHTML = "Domyślna";
        document.getElementById("typesolidrare").innerHTML = "Jednolity Kolor";
        document.getElementById("typegradientrare").innerHTML = "Gradient Kolorów";
        document.getElementById("typeimgrare").innerHTML = "Zdjęcie w Tle";
        document.getElementById("dragposlblrare").innerHTML = "Użyj Pozycji Niestandardowej";
        document.getElementById("rareiconselectlbl").innerHTML = "NIESTANDARDOWA IKONA:";
        document.getElementById("fontsizelblrare").innerHTML = "ROZMIAR CZCIONKI:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Resetuj Pozycję";
        document.getElementById("gameiconlblrare").innerHTML = "Użyj Ikony Gry";

        document.getElementById("trackopacitylbl").innerHTML = "Krycie Śledzące:";
        document.getElementById("resetlbl").innerHTML = "Zresetuj Aplikację";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Szczegóły gry</a> muszą być również ustawione na „Publiczne”.';
        document.getElementById("allpercentlbl").innerHTML = "Pokaż Wszystkie Procenty Osiągnięć";
        document.getElementById("iconanimationlbl").innerHTML = "Pokaż Rzadką Animację Ikon";
        document.getElementById("hwalbl").innerHTML = "Wyłącz Przyspieszenie Sprzętowe";
        document.getElementById("nvdalbl").innerHTML = "Włącz Obsługę NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Pokaż Powiadomienie o Zakończeniu Gry";
        document.getElementById("ssoverlaylbl").innerHTML = "Zapisz Zrzuty Ekranu z Nakładką";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Ścieżka:";
        document.getElementById("opacitylbl").innerHTML = "Przejrzystość Powiadomień:";
        document.getElementById("ssmaintestbtn").innerHTML = "PODGLĄD GŁÓWNEJ NAKŁADKI";
        document.getElementById("ssraretestbtn").innerHTML = "PODGLĄD RZADKIEJ NAKŁADKI";

        secret = "Sekret";
        gamecomplete = "Gra Zakończona!";
        allunlocked = "Odblokowałeś wszystkie osiągnięcia!";
    } else if (config.lang == "portuguese") {
        document.getElementById("username").innerHTML = "Nenhum Usuário Detectado";
        document.getElementById("gamestatus").innerHTML = "Nenhum Jogo Detectado";
        document.getElementById("soundfile").innerHTML = "Padrão (Nenhum Som Selecionado)";
        document.getElementById("soundfilerare").innerHTML = "Padrão (Nenhum Som Selecionado)";
        document.getElementById("maincheevsound").innerHTML = "Som de Notificação Principal";
        document.getElementById("rarecheevsound").innerHTML = "Som de Notificação Raro";
        document.getElementById("test").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE";
        document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE RARA";
        document.getElementById("settingstitle").innerHTML = "DEFINIÇÕES";
        document.getElementById("configtitle").innerHTML = "CONFIGURAÇÃO";
        document.getElementById("apibox").placeholder = "Digite API Key";
        document.getElementById("steam64box").placeholder = "Digite Steam64ID";
        document.getElementById("other").innerHTML = "OUTROS";
        document.getElementById("showscreenshotlbl").innerHTML = "Mostrar Captura de Tela";
        document.getElementById("showscreenshotlblrare").innerHTML = "Mostrar Captura de Tela";
        document.getElementById("desktoplbl").innerHTML = "Atalho Desktop";
        document.getElementById("startwinlbl").innerHTML = "Executar com Windows";
        document.getElementById("startminlbl").innerHTML = "Iniciar Minimizado";
        document.getElementById("soundonlylbl").innerHTML = "Modo Apenas Som";
        document.getElementById("trackinglbl").innerHTML = 'Mostrar "Agora Rastreando"';

        nouser = "Nenhum Usuário Detectado";
        nogame = "Nenhum Jogo Detectado";
        nosound = "Padrão (Nenhum Som Selecionado)";
        nosoundrare = "Padrão (Nenhum Som Selecionado)";
        rareheader = `'Conquista Rara Desbloqueada!`;
        unlinked = "NÃO CONECTADO";
        linked = "CONECTADO";
        novalue = "Por favor insira um valor";

        resettitle = "Redefinir o Aplicativo Para o Padrão?";
        resetdesc = `AVISO: Isso removerá todas as configurações do usuário!`;
        resetbtns = ["Redefinir","Desinstalar","Cancelar"];
    
        traylabel = "Nenhum Jogo Detectado";
        trayshow = "Mostre";
        trayexit = "Feche";

        //!!!1.8 Translations;
        achievementunlocked = "Conquista Desbloqueada!";
        rareachievementunlocked = "Conquista Raro Desbloqueada!";
        testdesc = "Suas notificações estão funcionando corretamente";

        addsound = "Adicionar Som";
        invalid = 'Tipo de Arquivo Inválido';
        addimage = 'Adicionar Imagem';
        file = "ARQUIVO";
        nofolder = "Padrão (Nenhuma Pasta Selecionada)";
        novalidaudio = "Nenhum arquivo de áudio válido localizado em ";
        soundmode = "MODO DE SOM: ";
        randomised = "RANDOMIZADO";
        presskey = "...";
        custompos = "Definir Posição Personalizada";
        settingpos = "Configurando Principal...";
        settingposrare = "Configuração Rara...";

        document.getElementById("steamkeybindlbl").innerHTML = "Captura de Tela do Steam:";
        document.getElementById("langlbl").innerHTML = "Língua:";
        document.getElementById("raritylbl").innerHTML = "Valor de Raridade: ";
        document.getElementById("nosteamlbl").innerHTML = "Ocultar Notificação do Steam";
        document.getElementById("customiselbl").innerHTML = "CUSTOMIZAR...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principal';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Raro';
        document.getElementById("customiserstylelbl").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
        document.getElementById("notifypositionlbl").innerHTML = "POSIÇÃO DA TELA:";
        document.getElementById("bgtypelbl").innerHTML = "TIPO DE FUNDO:";
        document.getElementById("colourslbl").innerHTML = "CORES";
        document.getElementById("colour1lbl").innerHTML = "Cor 1";
        document.getElementById("colour2lbl").innerHTML = "Cor 2";
        document.getElementById("textcolourlbl").innerHTML = "Cor do Texto";
        document.getElementById("imgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
        document.getElementById("roundnesslbl").innerHTML = "ARREDONDAMENTO:";
        document.getElementById("iconroundnesslbl").innerHTML = "ARREDONDAMENTO DO ÍCONE:";
        document.getElementById("displaytimelbl").innerHTML = "TEMPO DE EXIBIÇÃO:";
        document.getElementById("scalelbl").innerHTML = "TAMANHO:";
        document.getElementById("styledefault").innerHTML = "Padrão";
        document.getElementById("typesolid").innerHTML = "Cor Sólida";
        document.getElementById("typegradient").innerHTML = "Gradiente de Cor";
        document.getElementById("typeimg").innerHTML = "Imagem de Fundo";
        document.getElementById("dragposlbl").innerHTML = "Usar Posição Personalizada";
        document.getElementById("iconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
        document.getElementById("fontsizelbl").innerHTML = "TAMANHO DA FONTE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Redefinir Posição";
        document.getElementById("gameiconlbl").innerHTML = "Use O Ícone Do Jogo";

        document.getElementById("customiserstylelblrare").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
        document.getElementById("notifypositionlblrare").innerHTML = "POSIÇÃO DA TELA:";
        document.getElementById("bgtypelblrare").innerHTML = "TIPO DE FUNDO:";
        document.getElementById("rarecolourslbl").innerHTML = "CORES";
        document.getElementById("colour1lblrare").innerHTML = "Cor 1";
        document.getElementById("colour2lblrare").innerHTML = "Cor 2";
        document.getElementById("textcolourlblrare").innerHTML = "Cor do Texto";
        document.getElementById("rareimgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
        document.getElementById("roundnesslblrare").innerHTML = "ARREDONDAMENTO:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ARREDONDAMENTO DO ÍCONE:";
        document.getElementById("displaytimelblrare").innerHTML = "TEMPO DE EXIBIÇÃO:";
        document.getElementById("scalelblrare").innerHTML = "TAMANHO:";
        document.getElementById("styledefaultrare").innerHTML = "Padrão";
        document.getElementById("typesolidrare").innerHTML = "Cor Sólida";
        document.getElementById("typegradientrare").innerHTML = "Gradiente de Cor";
        document.getElementById("typeimgrare").innerHTML = "Imagem de Fundo";
        document.getElementById("dragposlblrare").innerHTML = "Usar Posição Personalizada";
        document.getElementById("rareiconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
        document.getElementById("fontsizelblrare").innerHTML = "TAMANHO DA FONTE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Redefinir Posição";
        document.getElementById("gameiconlblrare").innerHTML = "Use O Ícone Do Jogo";

        document.getElementById("trackopacitylbl").innerHTML = "Opacidade:";
        document.getElementById("resetlbl").innerHTML = "Redefinir Aplicativo";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Detalhes do jogo</a> devem ser "Públicos".';
        document.getElementById("allpercentlbl").innerHTML = "Mostrar Todas As Porcentagens";
        document.getElementById("iconanimationlbl").innerHTML = "Mostrar Animação de Ícone Raro";
        document.getElementById("hwalbl").innerHTML = "Desativar Aceleração de Hardware";
        document.getElementById("nvdalbl").innerHTML = "Ativar Suporte NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Mostrar Notificação de Conclusão do Jogo";
        document.getElementById("ssoverlaylbl").innerHTML = "Salvar Capturas de Tela com Sobreposição";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Caminho:";
        document.getElementById("opacitylbl").innerHTML = "Opacidade da Notificação:";
        document.getElementById("ssmaintestbtn").innerHTML = "VER SOBREPOSIÇÃO PRINCIPAL";
        document.getElementById("ssraretestbtn").innerHTML = "VER SOBREPOSIÇÃO RARO";

        secret = "Segredo";
        gamecomplete = "Jogo Completo!";
        allunlocked = "Você desbloqueou todas as conquistas!";
    } else if (config.lang == "brazilian") {
        document.getElementById("username").innerHTML = "Nenhum Usuário Detectado";
        document.getElementById("gamestatus").innerHTML = "Nenhum Jogo Detectado";
        document.getElementById("soundfile").innerHTML = "Padrão (Sem Som Selecionado)";
        document.getElementById("soundfilerare").innerHTML = "Padrão (Sem Som Selecionado)";
        document.getElementById("maincheevsound").innerHTML = "Som de Notificação Principal";
        document.getElementById("rarecheevsound").innerHTML = "Som de Notificação Raro";
        document.getElementById("test").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE";
        document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE RARO";
        document.getElementById("settingstitle").innerHTML = "CONFIGURAÇÕES";
        document.getElementById("configtitle").innerHTML = "CONFIGURAÇÃO";
        document.getElementById("apibox").placeholder = "Digite Chave API";
        document.getElementById("steam64box").placeholder = "Digite Steam64ID";
        document.getElementById("other").innerHTML = "OUTROS";
        document.getElementById("showscreenshotlbl").innerHTML = "Mostrar Imagem de Tela";
        document.getElementById("showscreenshotlblrare").innerHTML = "Mostrar Imagem de Tela";
        document.getElementById("desktoplbl").innerHTML = "Criar Atalho de Desktop";
        document.getElementById("startwinlbl").innerHTML = "Comece com Windows";
        document.getElementById("startminlbl").innerHTML = "Início Minimizado";
        document.getElementById("soundonlylbl").innerHTML = "Modo só Som";
        document.getElementById("trackinglbl").innerHTML = 'Mostrar "Agora Rastreamento"';

        nouser = "Nenhum Usuário Detectado";
        nogame = "Nenhum Jogo Detectado";
        nosound = "Padrão (Sem Som Selecionado)";
        nosoundrare = "Padrão (Sem Som Selecionado)";
        rareheader = `'Conquista Rara Desbloqueada!`;
        unlinked = "DESCONECIDO";
        linked = "CONECTADO";
        novalue = "Por favor, digite um valor";

        second = "segundo";
        seconds = "segundos";

        tracknotifymsg = "Agora, o rastreamento de conquistas para";

        resettitle = "Redefinir a Aplicação Padrão?";
        resetdesc = `AVISO: Isto removerá todas as configurações do usuário!`;
        resetbtns = ["Redefinir","Desinstalar","Cancelar"];

        traylabel = "Nenhum Jogo Detectado";
        trayshow = "Mostrar";
        trayexit = "Fechar";

        //!!!1.8 Translations;
        achievementunlocked = "Conquista Desbloqueada!";
        rareachievementunlocked = "Conquista Rara Desbloqueada!";
        testdesc = "Suas notificações estão funcionando corretamente";

        addsound = "Adicionar Som Selecionado";
        invalid = 'Tipo de Arquivo Inválido';
        addimage = 'Adicionar Imagem Selecionada';
        file = "FILE";
        nofolder = "Padrão (Sem Pasta Selecionada)";
        novalidaudio = "Nenhum arquivo de áudio válido localizado em ";
        soundmode = "MODELO DE SOM: ";
        randomised = "RANDOMIZADO";
        presskey = "...";
        custompos = "Definir Posição Personalizada";
        settingpos = "Definindo a Posição Principal...";
        settingposrare = "Definindo Posição Raro...";

        document.getElementById("steamkeybindlbl").innerHTML = "Chave de Imagem Steam:";
        document.getElementById("langlbl").innerHTML = "Língua:";
        document.getElementById("raritylbl").innerHTML = "Valor de Raridade:";
        document.getElementById("nosteamlbl").innerHTML = "Ocultar Notificação de Steam";
        document.getElementById("customiselbl").innerHTML = "PERSONALIZAÇÃO...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principal';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Raro';
        document.getElementById("customiserstylelbl").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
        document.getElementById("notifypositionlbl").innerHTML = "POSIÇÃO DA TELA:";
        document.getElementById("bgtypelbl").innerHTML = "TIPO DE FUNDO:";
        document.getElementById("colourslbl").innerHTML = "COLORES";
        document.getElementById("colour1lbl").innerHTML = "Cor 1";
        document.getElementById("colour2lbl").innerHTML = "Cor 2";
        document.getElementById("textcolourlbl").innerHTML = "Cor do Texto";
        document.getElementById("imgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
        document.getElementById("roundnesslbl").innerHTML = "REDONDEZA:";
        document.getElementById("iconroundnesslbl").innerHTML = "ÍCONE REDONDEZA:";
        document.getElementById("displaytimelbl").innerHTML = "TEMPO DE EXIBIÇÃO:";
        document.getElementById("scalelbl").innerHTML = "ESCALA:";
        document.getElementById("styledefault").innerHTML = "Padrão";
        document.getElementById("typesolid").innerHTML = "Cor Sólida";
        document.getElementById("typegradient").innerHTML = "Gradiente de Cor";
        document.getElementById("typeimg").innerHTML = "Imagem de Fundo";
        document.getElementById("dragposlbl").innerHTML = "Usar Posição Personalizada";
        document.getElementById("iconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
        document.getElementById("fontsizelbl").innerHTML = "TAMANHO DE FONT:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Reinicialização";
        document.getElementById("gameiconlbl").innerHTML = "Usar Ícone de Jogo";

        document.getElementById("customiserstylelblrare").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
        document.getElementById("notifypositionlblrare").innerHTML = "POSIÇÃO DA TELA:";
        document.getElementById("bgtypelblrare").innerHTML = "TIPO DE FUNDO:";
        document.getElementById("rarecolourslbl").innerHTML = "COLORES";
        document.getElementById("colour1lblrare").innerHTML = "Cor 1";
        document.getElementById("colour2lblrare").innerHTML = "Cor 2";
        document.getElementById("textcolourlblrare").innerHTML = "Cor do Texto";
        document.getElementById("rareimgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
        document.getElementById("roundnesslblrare").innerHTML = "REDONDEZA:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ÍCONE REDONDEZA::";
        document.getElementById("displaytimelblrare").innerHTML = "TEMPO DE EXIBIÇÃO:";
        document.getElementById("scalelblrare").innerHTML = "ESCALA:";
        document.getElementById("styledefaultrare").innerHTML = "Padrão";
        document.getElementById("typesolidrare").innerHTML = "Cor Sólida";
        document.getElementById("typegradientrare").innerHTML = "Gradiente de Cor";
        document.getElementById("typeimgrare").innerHTML = "Imagem de Fundo";
        document.getElementById("dragposlblrare").innerHTML = "Usar Posição Personalizada";
        document.getElementById("rareiconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
        document.getElementById("fontsizelblrare").innerHTML = "TAMANHO DE FONT:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Reinicialização";
        document.getElementById("gameiconlblrare").innerHTML = "Usar Ícone de Jogo";

        document.getElementById("trackopacitylbl").innerHTML = "Rastreamento Opacidade:";
        document.getElementById("resetlbl").innerHTML = "Reinicialização";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Detalhes do jogo</a> também deve ser definido como "Público".';
        document.getElementById("allpercentlbl").innerHTML = "Mostrar Todas as Porcentagens";
        document.getElementById("iconanimationlbl").innerHTML = "Mostrar Animação de Ícones Raros";
        document.getElementById("hwalbl").innerHTML = "Desativar Aceleração de Hardware";
        document.getElementById("nvdalbl").innerHTML = "Habilitar o Suporte da NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Mostrar Notificação de Conclusão do Jogo";
        document.getElementById("ssoverlaylbl").innerHTML = "Salvar Imagens com Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Caminho:";
        document.getElementById("opacitylbl").innerHTML = "Notificação Opacidade:";
        document.getElementById("ssmaintestbtn").innerHTML = "VER IMAGEM PRINCIPAL";
        document.getElementById("ssraretestbtn").innerHTML = "VER IMAGEM RARO";

        secret = "Segredo";
        gamecomplete = "Jogo Completo!";
        allunlocked = "Você já Desbloqueou Todas as Conquistas!";
    } else if (config.lang == "romanian") {
        document.getElementById("username").innerHTML = "Niciun Utilizator Detectat";
        document.getElementById("gamestatus").innerHTML = "Niciun Joc Detectat";
        document.getElementById("soundfile").innerHTML = "Implicit (Fără Sunet Selectat)";
        document.getElementById("soundfilerare").innerHTML = "Implicit (Fără Sunet Selectat)";
        document.getElementById("maincheevsound").innerHTML = "Sunet de Notificare Principal";
        document.getElementById("rarecheevsound").innerHTML = "Sunete de Notificare Rar";
        document.getElementById("test").innerHTML = "AFIȘAȚI NOTIFICAREA TESTULUI";
        document.getElementById("testrare").innerHTML = "AFIȘAȚI NOTIFICAREA TESTULUI RAR";
        document.getElementById("settingstitle").innerHTML = "SETĂRI";
        document.getElementById("configtitle").innerHTML = "CONFIGURARE";
        document.getElementById("apibox").placeholder = "Introduceți API Key";
        document.getElementById("steam64box").placeholder = "Introduceți Steam64ID";
        document.getElementById("other").innerHTML = "ALTE";
        document.getElementById("showscreenshotlbl").innerHTML = "Afișează Captura De Ecran";
        document.getElementById("showscreenshotlblrare").innerHTML = "Afișează Captura De Ecran";
        document.getElementById("desktoplbl").innerHTML = "Comandă Rapidă Pe Desktop";
        document.getElementById("startwinlbl").innerHTML = "Rulați Când Windows Pornește";
        document.getElementById("startminlbl").innerHTML = "Începe Minimizat";
        document.getElementById("soundonlylbl").innerHTML = "Modul Numai Sunet";
        document.getElementById("trackinglbl").innerHTML = 'Afișează Notificarea „Urmărire”.';

        nouser = "Niciun Utilizator Detectat";
        nogame = "Niciun Joc Detectat";
        nosound = "Implicit (Fără Sunet Selectat)";
        nosoundrare = "Implicit (Fără Sunet Selectat)";
        rareheader = `'Realizare Rară Deblocată!`;
        unlinked = "NU ESTE CONECTAT";
        linked = "CONECTAT";
        novalue = "Va rugăm să introduceți o valoare";
    
        resettitle = "Resetați Aplicația La Valoarea Implicită?";
        resetdesc = `AVERTISMENT: Acest lucru va elimina toate setările utilizatorului!`;
        resetbtns = ["Resetează","Dezinstalează","Anulare"];
    
        traylabel = "Niciun Joc Detectat";
        trayshow = "Deschideți";
        trayexit = "Ieșiți";

        //!!!1.8 Translations;
        achievementunlocked = "Succes Deblocat!";
        rareachievementunlocked = "Succes Rar Deblocat!";
        testdesc = "Notificările dvs funcționează corect";

        addsound = "Adăugați Sunetul Selectat";
        invalid = 'Tip De Fișier Nevalid';
        addimage = 'Adăugați Imaginea Selectată';
        file = "FIŞIER";
        nofolder = "Implicit (Niciun Folder Selectat)";
        novalidaudio = "Nu există fișiere audio valide aflate în";
        soundmode = "MOD SUNET: ";
        randomised = "ALEATORIZATE";
        presskey = "...";
        custompos = "Setați Poziția Personalizată";
        settingpos = "Setarea Principală...";
        settingposrare = "Setarea Rar...";

        document.getElementById("steamkeybindlbl").innerHTML = "Captură de Ecran Steam:";
        document.getElementById("langlbl").innerHTML = "Limba:";
        document.getElementById("raritylbl").innerHTML = "Procent de Raritate: ";
        document.getElementById("nosteamlbl").innerHTML = "Ascundeți Notificarea Steam";
        document.getElementById("customiselbl").innerHTML = "PERSONALIZĂ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principal';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Rar';
        document.getElementById("customiserstylelbl").innerHTML = "STILUL DE NOTIFICARE:";
        document.getElementById("notifypositionlbl").innerHTML = "POZIȚIA ECRANULUI:";
        document.getElementById("bgtypelbl").innerHTML = "TIP DE FUNDAL:";
        document.getElementById("colourslbl").innerHTML = "CULORI";
        document.getElementById("colour1lbl").innerHTML = "Culoare 1";
        document.getElementById("colour2lbl").innerHTML = "Culoare 2";
        document.getElementById("textcolourlbl").innerHTML = "Culoare Text";
        document.getElementById("imgselectlbl").innerHTML = "IMAGINE DE FUNDAL:"
        document.getElementById("roundnesslbl").innerHTML = "ROTUNJIME:";
        document.getElementById("iconroundnesslbl").innerHTML = "ROTUNJIME ICONA:";
        document.getElementById("displaytimelbl").innerHTML = "ORA DE AFIȘARE:";
        document.getElementById("scalelbl").innerHTML = "SCARĂ:";
        document.getElementById("styledefault").innerHTML = "Implicit";
        document.getElementById("typesolid").innerHTML = "Culoare Solidă";
        document.getElementById("typegradient").innerHTML = "Gradient de Culoare";
        document.getElementById("typeimg").innerHTML = "Imagine de Fundal";
        document.getElementById("dragposlbl").innerHTML = "Utilizați Poziția Personalizată";
        document.getElementById("iconselectlbl").innerHTML = "ICONA PERSONALIZATĂ:";
        document.getElementById("fontsizelbl").innerHTML = "MARIMEA FONTULUI:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Resetează Poziția";
        document.getElementById("gameiconlbl").innerHTML = "Utilizați Pictograma Jocului";

        document.getElementById("customiserstylelblrare").innerHTML = "STILUL DE NOTIFICARE:";
        document.getElementById("notifypositionlblrare").innerHTML = "POZIȚIA ECRANULUI:";
        document.getElementById("bgtypelblrare").innerHTML = "TIP DE FUNDAL:";
        document.getElementById("rarecolourslbl").innerHTML = "CULORI";
        document.getElementById("colour1lblrare").innerHTML = "Culoare 1";
        document.getElementById("colour2lblrare").innerHTML = "Culoare 2";
        document.getElementById("textcolourlblrare").innerHTML = "Culoare Text";
        document.getElementById("rareimgselectlbl").innerHTML = "IMAGINE DE FUNDAL:"
        document.getElementById("roundnesslblrare").innerHTML = "ROTUNJIME:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ROTUNJIME ICONA:";
        document.getElementById("displaytimelblrare").innerHTML = "ORA DE AFIȘARE:";
        document.getElementById("scalelblrare").innerHTML = "SCARĂ:";
        document.getElementById("styledefaultrare").innerHTML = "Implicit";
        document.getElementById("typesolidrare").innerHTML = "Culoare Solidă";
        document.getElementById("typegradientrare").innerHTML = "Gradient de Culoare";
        document.getElementById("typeimgrare").innerHTML = "Imagine de Fundal";
        document.getElementById("dragposlblrare").innerHTML = "Utilizați Poziția Personalizată";
        document.getElementById("rareiconselectlbl").innerHTML = "ICONA PERSONALIZATĂ:";
        document.getElementById("fontsizelblrare").innerHTML = "MARIMEA FONTULUI:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Resetează Poziția";
        document.getElementById("gameiconlblrare").innerHTML = "Utilizați Pictograma Jocului";

        document.getElementById("trackopacitylbl").innerHTML = "Opacitatea Urmăririi:";
        document.getElementById("resetlbl").innerHTML = "Resetați Aplicația";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Detaliile jocului</a> trebuie să fie „Publice”.';
        document.getElementById("allpercentlbl").innerHTML = "Afișați Toate Procentele de Realizare";
        document.getElementById("iconanimationlbl").innerHTML = "Afișați Animație Cu Pictograme Rare";
        document.getElementById("hwalbl").innerHTML = "Dezactivați Accelerația Hardware";
        document.getElementById("nvdalbl").innerHTML = "Activați Suportul NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Afișați Notificarea de Finalizare a Jocului";
        document.getElementById("ssoverlaylbl").innerHTML = "Salvați Capturi de Ecran cu Suprapunere";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Cale:";
        document.getElementById("opacitylbl").innerHTML = "Opacitatea Notificărilor:";
        document.getElementById("ssmaintestbtn").innerHTML = "VEZI IMAGINEA PRINCIPALA";
        document.getElementById("ssraretestbtn").innerHTML = "VEZI IMAGINEA RARE";

        secret = "Secret";
        gamecomplete = "Joc Complet!";
        allunlocked = "Ai deblocat toate realizările!";
    } else if (config.lang == "russian") {
        document.getElementById("username").innerHTML = "Пользователь Не Обнаружен";
        document.getElementById("gamestatus").innerHTML = "Игра Не Обнаружена";
        document.getElementById("soundfile").innerHTML = "По Умолчанию (звук Не Выбран)";
        document.getElementById("soundfilerare").innerHTML = "По Умолчанию (звук Не Выбран)";
        document.getElementById("maincheevsound").innerHTML = "Основной Звук Достижения";
        document.getElementById("rarecheevsound").innerHTML = "Звук Редкого Достижения";
        document.getElementById("test").innerHTML = "ПОКАЗАТЬ ТЕСТОВОЕ УВЕДОМЛЕНИЕ";
        document.getElementById("testrare").innerHTML = "ПОКАЗАТЬ ТЕСТ РЕДКОГО ДОСТИЖЕНИЯ";
        document.getElementById("settingstitle").innerHTML = "НАСТРОЙКИ";
        document.getElementById("configtitle").innerHTML = "КОНФИГУРАЦИЯ";
        document.getElementById("apibox").placeholder = "Введите API Key";
        document.getElementById("steam64box").placeholder = "Введите Steam64ID";
        document.getElementById("other").innerHTML = "ДРУГИЕ";
        document.getElementById("showscreenshotlbl").innerHTML = "Показать Скриншот";
        document.getElementById("showscreenshotlblrare").innerHTML = "Показать Скриншот";
        document.getElementById("desktoplbl").innerHTML = "Ярлык На Рабочий Стол";
        document.getElementById("startwinlbl").innerHTML = "Автозагрузка";
        document.getElementById("startminlbl").innerHTML = "Сворачивание При Автозагрузке";
        document.getElementById("soundonlylbl").innerHTML = "Режим Только Звук";
        document.getElementById("trackinglbl").innerHTML = 'Показать "Сейчас Отслеживается"';

        nouser = "Пользователь Не Обнаружен";
        nogame = "Игра Не Обнаружена";
        nosound = "По Умолчанию (звук Не Выбран)";
        nosoundrare = "По Умолчанию (звук Не Выбран)";
        rareheader = `'Открыто Редкое Достижение!`;
        unlinked = "НЕТ СОЕДИНЕНИЯ";
        linked = "СОПРЯЖЕННО";
        novalue = "Пожалуйста введите значение";

        resettitle = "Сбросить Приложение По Умолчанию?";
        resetdesc = `ВНИМАНИЕ: При этом будут удалены все пользовательские настройки!`;
        resetbtns = ["Сбросить","Удалить","Отменить"];
    
        traylabel = "Игра Не Обнаружена";
        trayshow = "Шоу";
        trayexit = "Выйти";

        //!!!1.8 Translations;
        achievementunlocked = "Достижение!";
        rareachievementunlocked = "Редкое Достижение!";
        testdesc = "Ваши уведомления работают правильно";

        addsound = "Добавить Звук";
        invalid = 'Неверный Тип Файла';
        addimage = 'Добавить Изображение';
        file = "ФАЙЛ";
        nofolder = "По Умолчанию (папка Не Выбрана)";
        novalidaudio = "Нет действительных аудиофайлов, расположенных в";
        soundmode = "ЗВУКОВОЙ РЕЖИМ: ";
        randomised = "СЛУЧАЙНЫЙ";
        presskey = "...";
        custompos = "Пользовательская Позиция";
        settingpos = "Настройка Основного...";
        settingposrare = "Установка Редкого...";

        document.getElementById("steamkeybindlbl").innerHTML = "Кнопка скриншота Steam:";
        document.getElementById("langlbl").innerHTML = "Язык:";
        document.getElementById("raritylbl").innerHTML = "Процент Редкости: ";
        document.getElementById("nosteamlbl").innerHTML = "Скрыть Уведомление Steam";
        document.getElementById("customiselbl").innerHTML = "НАСТРАИВАТЬ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Главный';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Редкий';
        document.getElementById("customiserstylelbl").innerHTML = "СТИЛЬ УВЕДОМЛЕНИЯ:";
        document.getElementById("notifypositionlbl").innerHTML = "ПОЛОЖЕНИЕ ЭКРАНА:";
        document.getElementById("bgtypelbl").innerHTML = "ТИП ФОНА:";
        document.getElementById("colourslbl").innerHTML = "ЦВЕТА";
        document.getElementById("colour1lbl").innerHTML = "Цвет 1";
        document.getElementById("colour2lbl").innerHTML = "Цвет 2";
        document.getElementById("textcolourlbl").innerHTML = "Цвет Текста";
        document.getElementById("imgselectlbl").innerHTML = "ФОНОВАЯ КАРТИНКА:"
        document.getElementById("roundnesslbl").innerHTML = "КРУГЛОСТЬ:";
        document.getElementById("iconroundnesslbl").innerHTML = "КРУГЛОСТЬ ЗНАЧКА:";
        document.getElementById("displaytimelbl").innerHTML = "ПОКАЗАТЬ ВРЕМЯ:";
        document.getElementById("scalelbl").innerHTML = "РАЗМЕР:";
        document.getElementById("styledefault").innerHTML = "Дефолт";
        document.getElementById("typesolid").innerHTML = "Сплошной Цвет";
        document.getElementById("typegradient").innerHTML = "Цветовой Градиент";
        document.getElementById("typeimg").innerHTML = "Фоновая Картинка";
        document.getElementById("dragposlbl").innerHTML = "Пользовательская Позиция";
        document.getElementById("iconselectlbl").innerHTML = "ПОЛЬЗОВАТЕЛЬСКИЙ ЗНАЧОК:";
        document.getElementById("fontsizelbl").innerHTML = "РАЗМЕР ШРИФТА:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Сбросить Положение";
        document.getElementById("gameiconlbl").innerHTML = "Использовать Значок Игры";

        document.getElementById("customiserstylelblrare").innerHTML = "СТИЛЬ УВЕДОМЛЕНИЯ:";
        document.getElementById("notifypositionlblrare").innerHTML = "ПОЛОЖЕНИЕ ЭКРАНА:";
        document.getElementById("bgtypelblrare").innerHTML = "ТИП ФОНА:";
        document.getElementById("rarecolourslbl").innerHTML = "ЦВЕТА";
        document.getElementById("colour1lblrare").innerHTML = "Цвет 1";
        document.getElementById("colour2lblrare").innerHTML = "Цвет 2";
        document.getElementById("textcolourlblrare").innerHTML = "Цвет Текста";
        document.getElementById("rareimgselectlbl").innerHTML = "ФОНОВАЯ КАРТИНКА:"
        document.getElementById("roundnesslblrare").innerHTML = "КРУГЛОСТЬ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "КРУГЛОСТЬ ЗНАЧКА:";
        document.getElementById("displaytimelblrare").innerHTML = "ПОКАЗАТЬ ВРЕМЯ:";
        document.getElementById("scalelblrare").innerHTML = "РАЗМЕР:";
        document.getElementById("styledefaultrare").innerHTML = "Дефолт";
        document.getElementById("typesolidrare").innerHTML = "Сплошной Цвет";
        document.getElementById("typegradientrare").innerHTML = "Цветовой Градиент";
        document.getElementById("typeimgrare").innerHTML = "Фоновая Картинка";
        document.getElementById("dragposlblrare").innerHTML = "Пользовательская Позиция";
        document.getElementById("rareiconselectlbl").innerHTML = "ПОЛЬЗОВАТЕЛЬСКИЙ ЗНАЧОК:";
        document.getElementById("fontsizelblrare").innerHTML = "РАЗМЕР ШРИФТА:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Сбросить Положение";
        document.getElementById("gameiconlblrare").innerHTML = "Использовать Значок Игры";

        document.getElementById("trackopacitylbl").innerHTML = "Непрозрачность:";
        document.getElementById("resetlbl").innerHTML = "Сбросить Приложение";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Детали игры</a> должны быть общедоступными.';
        document.getElementById("allpercentlbl").innerHTML = "Показать Все Проценты Достижений";
        document.getElementById("iconanimationlbl").innerHTML = "Показать Анимацию Редкого Значка";
        document.getElementById("hwalbl").innerHTML = "Отключить Аппаратное Ускорение";
        document.getElementById("nvdalbl").innerHTML = "Включить Поддержку NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Показать Уведомление О Завершении Игры";
        document.getElementById("ssoverlaylbl").innerHTML = "Сохранение Скриншотов С Наложением";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Путь:";
        document.getElementById("opacitylbl").innerHTML = "Непрозрачность:";
        document.getElementById("ssmaintestbtn").innerHTML = "ПОСМОТРЕТЬ ГЛАВНУЮ ОВЕРЛЕЙ";
        document.getElementById("ssraretestbtn").innerHTML = "ПОСМОТРЕТЬ РЕДКИЙ ОВЕРЛЕЙ";

        secret = "Секрет";
        gamecomplete = "Завершенная Игра!";
        allunlocked = "Вы разблокировали все достижения!";
    } else if (config.lang == "spanish") {
        document.getElementById("username").innerHTML = "No Se Detectó Ningún Usuario";
        document.getElementById("gamestatus").innerHTML = "No Se Detectó Ningún Juego";
        document.getElementById("soundfile").innerHTML = "Predeterminado (Sin Sonido Seleccionado)";
        document.getElementById("soundfilerare").innerHTML = "Predeterminado (Sin Sonido Seleccionado)";
        document.getElementById("maincheevsound").innerHTML = "Sonido de Logro Principal";
        document.getElementById("rarecheevsound").innerHTML = "Sonido de Logro Rara";
        document.getElementById("test").innerHTML = "MOSTRAR NOTIFICACIÓN DE PRUEBA";
        document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICACIÓN DE PRUEBA RARA";
        document.getElementById("settingstitle").innerHTML = "AJUSTES";
        document.getElementById("configtitle").innerHTML = "CONFIGURACIÓN";
        document.getElementById("apibox").placeholder = "Introduzca API Key";
        document.getElementById("steam64box").placeholder = "Introduzca Steam64ID";
        document.getElementById("other").innerHTML = "OTRO";
        document.getElementById("showscreenshotlbl").innerHTML = "Mostrar Captura de Pantalla";
        document.getElementById("showscreenshotlblrare").innerHTML = "Mostrar Captura de Pantalla";
        document.getElementById("desktoplbl").innerHTML = "Atajo Desktop";
        document.getElementById("startwinlbl").innerHTML = "Ejecutar con Windows";
        document.getElementById("startminlbl").innerHTML = "Iniciar Minimizado";
        document.getElementById("soundonlylbl").innerHTML = "Modo Solo Sonido";
        document.getElementById("trackinglbl").innerHTML = 'Mostrar "Ahora Observando"';

        nouser = "No Se Detectó Ningún Usuario";
        nogame = "No Se Detectó Ningún Juego";
        nosound = "Predeterminado (Sin Sonido Seleccionado)";
        nosoundrare = "Predeterminado (Sin Sonido Seleccionado)";
        rareheader = `'¡Logro Raro Desbloqueado!`;
        unlinked = "NO VINCULADO";
        linked = "VINCULADO";
        novalue = "Porfavor introduzca un valor";

        resettitle = "¿Restablecer la Aplicación a Los Predeterminados?";
        resetdesc = `ADVERTENCIA: ¡Esto eliminará todas las configuraciones de usuario!`;
        resetbtns = ["Reiniciar","Desinstalar","Cancelar"];
    
        traylabel = "No Se Detectó Ningún Juego";
        trayshow = "Mostrar";
        trayexit = "Salir";

        //!!!1.8 Translations;
        achievementunlocked = "¡Logro Desbloqueado!";
        rareachievementunlocked = "¡Logro Raro Desbloqueado!";
        testdesc = "Tus notificaciones funcionan correctamente";

        addsound = "Agregar Sonido";
        invalid = 'Tipo de Archivo Invalido';
        addimage = 'Agregar Imagen';
        file = "ARCHIVO";
        nofolder = "Predeterminado (Ninguna Carpeta Seleccionada)";
        novalidaudio = "No hay archivos de audio válidos ubicados en ";
        soundmode = "MODO DE SONIDO: ";
        randomised = "ALEATORIZADO";
        presskey = "...";
        custompos = "Establecer Posición Personalizada";
        settingpos = "Configuración Principal...";
        settingposrare = "Configuración Rara...";

        document.getElementById("steamkeybindlbl").innerHTML = "Captura de Pantalla de Steam:";
        document.getElementById("langlbl").innerHTML = "Idioma:";
        document.getElementById("raritylbl").innerHTML = "Valor de Rareza: ";
        document.getElementById("nosteamlbl").innerHTML = "Ocultar Notificación de Steam";
        document.getElementById("customiselbl").innerHTML = "PERSONALIZAR...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Principal';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Raro';
        document.getElementById("customiserstylelbl").innerHTML = "ESTILO DE NOTIFICACIÓN:";
        document.getElementById("notifypositionlbl").innerHTML = "POSICIÓN DE LA PANTALLA:";
        document.getElementById("bgtypelbl").innerHTML = "TIPO DE FONDO:";
        document.getElementById("colourslbl").innerHTML = "COLORES";
        document.getElementById("colour1lbl").innerHTML = "Color 1";
        document.getElementById("colour2lbl").innerHTML = "Color 2";
        document.getElementById("textcolourlbl").innerHTML = "Color del Texto";
        document.getElementById("imgselectlbl").innerHTML = "IMAGEN DE FONDO:"
        document.getElementById("roundnesslbl").innerHTML = "REDONDEZ:";
        document.getElementById("iconroundnesslbl").innerHTML = "REDONDEDAD DEL ICONO:";
        document.getElementById("displaytimelbl").innerHTML = "TIEMPO DE VISUALIZACIÓN:";
        document.getElementById("scalelbl").innerHTML = "ESCALA:";
        document.getElementById("styledefault").innerHTML = "Defecto";
        document.getElementById("typesolid").innerHTML = "Color Solido";
        document.getElementById("typegradient").innerHTML = "Gradiente de Color";
        document.getElementById("typeimg").innerHTML = "Imagen de Fondo";
        document.getElementById("dragposlbl").innerHTML = "Usar Posición Personalizada";
        document.getElementById("iconselectlbl").innerHTML = "ICONO PERSONALIZADO:";
        document.getElementById("fontsizelbl").innerHTML = "TAMAÑO DE FUENTE:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Restablecer Posición";
        document.getElementById("gameiconlbl").innerHTML = "Usar Icono de Juego";

        document.getElementById("customiserstylelblrare").innerHTML = "ESTILO DE NOTIFICACIÓN:";
        document.getElementById("notifypositionlblrare").innerHTML = "POSICIÓN DE LA PANTALLA:";
        document.getElementById("bgtypelblrare").innerHTML = "TIPO DE FONDO:";
        document.getElementById("rarecolourslbl").innerHTML = "COLORES";
        document.getElementById("colour1lblrare").innerHTML = "Color 1";
        document.getElementById("colour2lblrare").innerHTML = "Color 2";
        document.getElementById("textcolourlblrare").innerHTML = "Color del Texto";
        document.getElementById("rareimgselectlbl").innerHTML = "IMAGEN DE FONDO:"
        document.getElementById("roundnesslblrare").innerHTML = "REDONDEZ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "REDONDEDAD DEL ICONO:";
        document.getElementById("displaytimelblrare").innerHTML = "TIEMPO DE VISUALIZACIÓN:";
        document.getElementById("scalelblrare").innerHTML = "ESCALA:";
        document.getElementById("styledefaultrare").innerHTML = "Defecto";
        document.getElementById("typesolidrare").innerHTML = "Color Solido";
        document.getElementById("typegradientrare").innerHTML = "Gradiente de Color";
        document.getElementById("typeimgrare").innerHTML = "Imagen de Fondo";
        document.getElementById("dragposlblrare").innerHTML = "Usar Posición Personalizada";
        document.getElementById("rareiconselectlbl").innerHTML = "ICONO PERSONALIZADO:";
        document.getElementById("fontsizelblrare").innerHTML = "TAMAÑO DE FUENTE:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Restablecer Posición";
        document.getElementById("gameiconlblrare").innerHTML = "Usar Icono de Juego";

        document.getElementById("trackopacitylbl").innerHTML = "Opacidad:";
        document.getElementById("resetlbl").innerHTML = "Restablecer Aplicación";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Detalles del juego</a> debe ser "Público".';
        document.getElementById("allpercentlbl").innerHTML = "Mostrar Todos Los Porcentajes";
        document.getElementById("iconanimationlbl").innerHTML = "Mostrar Animación de Icono Raro";
        document.getElementById("hwalbl").innerHTML = "Deshabilitar la Aceleración de Hardware";
        document.getElementById("nvdalbl").innerHTML = "Habilitar El Soporte de NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Mostrar Notificación de Finalización del Juego";
        document.getElementById("ssoverlaylbl").innerHTML = "Guardar Capturas de Pantalla con Superposición";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Ruta:";
        document.getElementById("opacitylbl").innerHTML = "Opacidad de Notificación:";
        document.getElementById("ssmaintestbtn").innerHTML = "VER SUPERPOSICIÓN PRINCIPAL";
        document.getElementById("ssraretestbtn").innerHTML = "VER SUPERPOSICIÓN RARO";

        secret = "Secreto";
        gamecomplete = "¡Juego Completo!";
        allunlocked = "¡Has desbloqueado todos los logros!";
    } else if (config.lang == "swedish") {
        document.getElementById("username").innerHTML = "Ingen Användare Upptäckt";
        document.getElementById("gamestatus").innerHTML = "Inget Spel Upptäckt";
        document.getElementById("soundfile").innerHTML = "Standard (Inget Ljud Valt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Inget Ljud Valt)";
        document.getElementById("maincheevsound").innerHTML = "Huvudmeddelandeljud";
        document.getElementById("rarecheevsound").innerHTML = "Sällsynt Meddelandeljud";
        document.getElementById("test").innerHTML = "VISA TESTMEDDELANDE";
        document.getElementById("testrare").innerHTML = "VISA SÄLLSAMT TESTMEDDELANDE";
        document.getElementById("settingstitle").innerHTML = "INSTÄLLNINGAR";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("apibox").placeholder = "Ange API Key";
        document.getElementById("steam64box").placeholder = "Ange Steam64ID";
        document.getElementById("other").innerHTML = "ÖVRIG";
        document.getElementById("showscreenshotlbl").innerHTML = "Visa Skärmdump";
        document.getElementById("showscreenshotlblrare").innerHTML = "Visa Skärmdump";
        document.getElementById("desktoplbl").innerHTML = "Skapa Desktop-sökväg";
        document.getElementById("startwinlbl").innerHTML = "Börja med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimerad";
        document.getElementById("soundonlylbl").innerHTML = "Endast Ljudläge";
        document.getElementById("trackinglbl").innerHTML = 'Visa Meddelanden "Nu Spårning"';

        nouser = "Ingen Användare Upptäckt";
        nogame = "Inget Spel Upptäckt";
        nosound = "Standard (Inget Ljud Valt)";
        nosoundrare = "Standard (Inget Ljud Valt)";
        rareheader = `'Sällsynt Prestation Upplåst!`;
        unlinked = "OSLÄNKAD";
        linked = "LÄNKAD";
        novalue = "Var god ange ett värde";
    
        resettitle = "Återställa Programmet Till Standard?";
        resetdesc = `VARNING: Detta tar bort alla användarinställningar!`;
        resetbtns = ["Återställa","Avinstallera","Annullera"];
    
        traylabel = "Inget Spel Upptäckt";
        trayshow = "Visa";
        trayexit = "Avsluta";

        //!!!1.8 Translations;
        achievementunlocked = "Prestation Upplåst!";
        rareachievementunlocked = "Sällsynt Prestation Upplåst!";
        testdesc = "Dina aviseringar fungerar korrekt";

        addsound = "Lägg Till Valt Ljud";
        invalid = 'Ogiltig Filtyp';
        addimage = 'Lägg Till Vald Bild';
        file = "FIL";
        nofolder = "Standard (Ingen Mapp Har Valts)";
        novalidaudio = "Inga giltiga ljudfiler finns i ";
        soundmode = "LJUDLÄGE: ";
        randomised = "RANDOMISERAD";
        presskey = "...";
        custompos = "Ställ in Anpassad Position";
        settingpos = "Ställer in Huvudposition...";
        settingposrare = "Ställer in Sällsynt Position...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Skärmdump-Knapp:";
        document.getElementById("langlbl").innerHTML = "Språk:";
        document.getElementById("raritylbl").innerHTML = "Sällsynthetsprocent: ";
        document.getElementById("nosteamlbl").innerHTML = "Dölj Steam-Meddelande";
        document.getElementById("customiselbl").innerHTML = "PERSONIFIERA...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Huvudsaklig';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Sällsynt';
        document.getElementById("customiserstylelbl").innerHTML = "MEDDELANDE STIL:";
        document.getElementById("notifypositionlbl").innerHTML = "SKÄRMPOSITION:";
        document.getElementById("bgtypelbl").innerHTML = "BAKGRUNDSTYP:";
        document.getElementById("colourslbl").innerHTML = "FÄRGER";
        document.getElementById("colour1lbl").innerHTML = "Färg 1";
        document.getElementById("colour2lbl").innerHTML = "Färg 2";
        document.getElementById("textcolourlbl").innerHTML = "Textfärg";
        document.getElementById("imgselectlbl").innerHTML = "BAKGRUNDSBILD:"
        document.getElementById("roundnesslbl").innerHTML = "RUNDHET:";
        document.getElementById("iconroundnesslbl").innerHTML = "IKON RUNDHET:";
        document.getElementById("displaytimelbl").innerHTML = "VISNINGSTID:";
        document.getElementById("scalelbl").innerHTML = "SCALE:";
        document.getElementById("styledefault").innerHTML = "Standard";
        document.getElementById("typesolid").innerHTML = "Solid Färg";
        document.getElementById("typegradient").innerHTML = "Färggradient";
        document.getElementById("typeimg").innerHTML = "Bakgrundsbild";
        document.getElementById("dragposlbl").innerHTML = "Använd Anpassad Skärmposition";
        document.getElementById("iconselectlbl").innerHTML = "ANPASSAD IKON:";
        document.getElementById("fontsizelbl").innerHTML = "TEXTSTORLEK:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Återställ Position";
        document.getElementById("gameiconlbl").innerHTML = "Använd Spelikonen";

        document.getElementById("customiserstylelblrare").innerHTML = "MEDDELANDE STIL:";
        document.getElementById("notifypositionlblrare").innerHTML = "SKÄRMPOSITION:";
        document.getElementById("bgtypelblrare").innerHTML = "BAKGRUNDSTYP:";
        document.getElementById("rarecolourslbl").innerHTML = "FÄRGER";
        document.getElementById("colour1lblrare").innerHTML = "Färg 1";
        document.getElementById("colour2lblrare").innerHTML = "Färg 2";
        document.getElementById("textcolourlblrare").innerHTML = "Textfärg";
        document.getElementById("rareimgselectlbl").innerHTML = "BAKGRUNDSBILD:"
        document.getElementById("roundnesslblrare").innerHTML = "RUNDHET:";
        document.getElementById("iconroundnesslblrare").innerHTML = "IKON RUNDHET:";
        document.getElementById("displaytimelblrare").innerHTML = "VISNINGSTID:";
        document.getElementById("scalelblrare").innerHTML = "SCALE:";
        document.getElementById("styledefaultrare").innerHTML = "Standard";
        document.getElementById("typesolidrare").innerHTML = "Solid Färg";
        document.getElementById("typegradientrare").innerHTML = "Färggradient";
        document.getElementById("typeimgrare").innerHTML = "Bakgrundsbild";
        document.getElementById("dragposlblrare").innerHTML = "Använd Anpassad Skärmposition";
        document.getElementById("rareiconselectlbl").innerHTML = "ANPASSAD IKON:";
        document.getElementById("fontsizelblrare").innerHTML = "TEXTSTORLEK:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Återställ Position";
        document.getElementById("gameiconlblrare").innerHTML = "Använd Spelikonen";

        document.getElementById("trackopacitylbl").innerHTML = "Spårningsopacitet:";
        document.getElementById("resetlbl").innerHTML = "Återställ Applikation";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Spelinformation</a> måste vara "Offentlig".';
        document.getElementById("allpercentlbl").innerHTML = "Visa Alla Prestationsprocent";
        document.getElementById("iconanimationlbl").innerHTML = "Visa Sällsynt Ikonanimering";
        document.getElementById("hwalbl").innerHTML = "Inaktivera Hårdvaruacceleration";
        document.getElementById("nvdalbl").innerHTML = "Aktivera NVDA Support";
        document.getElementById("gamecompletionlbl").innerHTML = "Visa Meddelande om Spelslut";
        document.getElementById("ssoverlaylbl").innerHTML = "Spara Skärmdumpar med Overlay";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Väg:";
        document.getElementById("opacitylbl").innerHTML = "Opacitet:";
        document.getElementById("ssmaintestbtn").innerHTML = "VISA HUVUDBILD";
        document.getElementById("ssraretestbtn").innerHTML = "VISA SÄLLSYNT BILD";

        secret = "Hemlig";
        gamecomplete = "Spelet Avklarat!";
        allunlocked = "Du har låst upp alla prestationer!";
    } else if (config.lang == "thai") {
        document.getElementById("username").innerHTML = "ไม่พบผู้ใช้";
        document.getElementById("gamestatus").innerHTML = "ไม่พบเกม";
        document.getElementById("soundfile").innerHTML = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        document.getElementById("soundfilerare").innerHTML = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        document.getElementById("maincheevsound").innerHTML = "เสียงความสำเร็จหลัก";
        document.getElementById("rarecheevsound").innerHTML = "เสียงความสำเร็จที่หายาก";
        document.getElementById("test").innerHTML = "แสดงการแจ้งเตือนการทดสอบ";
        document.getElementById("testrare").innerHTML = "แสดงการแจ้งเตือนการทดสอบที่หายาก";
        document.getElementById("settingstitle").innerHTML = "การตั้งค่า";
        document.getElementById("configtitle").innerHTML = "การกำหนดค่า";
        document.getElementById("apibox").placeholder = "เข้าสู่ API Key";
        document.getElementById("steam64box").placeholder = "เข้าสู่ Steam64ID";
        document.getElementById("other").innerHTML = "อื่น ๆ";
        document.getElementById("showscreenshotlbl").innerHTML = "แสดงภาพหน้าจอ";
        document.getElementById("showscreenshotlblrare").innerHTML = "แสดงภาพหน้าจอ";
        document.getElementById("desktoplbl").innerHTML = "สร้างทางลัดบนเดสก์ท็อป";
        document.getElementById("startwinlbl").innerHTML = "เริ่มด้วย Windows";
        document.getElementById("startminlbl").innerHTML = "เริ่มย่อเล็กสุด";
        document.getElementById("soundonlylbl").innerHTML = "โหมดเสียงเท่านั้น";
        document.getElementById("trackinglbl").innerHTML = 'แสดง "กำลังติดตาม" การแจ้งเตือน';

        nouser = "ไม่พบผู้ใช้";
        nogame = "ไม่พบเกม";
        nosound = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        nosoundrare = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        rareheader = `'ปลดล็อกความสำเร็จหายาก!`;
        unlinked = "ไม่เชื่อมโยง";
        linked = "เชื่อมโยง";
        novalue = "กรุณาใส่ค่า";
    
        resettitle = "รีเซ็ตแอปพลิเคชันเป็นค่าเริ่มต้น?";
        resetdesc = `คำเตือน: การดำเนินการนี้จะลบการตั้งค่าผู้ใช้ทั้งหมด!`;
        resetbtns = ["รีเซ็ต","ถอนการติดตั้ง","ยกเลิก"];
    
        traylabel = "ไม่พบเกม";
        trayshow = "แสดง";
        trayexit = "ออกจาก";

        //!!!1.8 Translations;
        achievementunlocked = "ปลดล็อคความสำเร็จ!";
        rareachievementunlocked = "ปลดล็อกความสำเร็จหายาก!";
        testdesc = "การแจ้งเตือนของคุณทำงานอย่างถูกต้อง";

        addsound = "เพิ่มเสียงที่เลือก";
        invalid = 'ประเภทไฟล์ไม่ถูกต้อง';
        addimage = 'เพิ่มรูปภาพที่เลือก';
        file = "ไฟล์";
        nofolder = "ค่าเริ่มต้น (ไม่ได้เลือกโฟลเดอร์)";
        novalidaudio = "ไม่มีไฟล์เสียงที่ถูกต้องอยู่ใน";
        soundmode = "โหมดเสียง: ";
        randomised = "สุ่ม";
        presskey = "...";
        custompos = "ตั้งค่าตำแหน่งหน้าจอที่กำหนดเอง";
        settingpos = "กำลังตั้งค่าตำแหน่งหลัก...";
        settingposrare = "กำลังตั้งตำแหน่งหายาก...";

        document.getElementById("steamkeybindlbl").innerHTML = "ปุ่มสกรีนช็อต Steam:";
        document.getElementById("langlbl").innerHTML = "ภาษา:";
        document.getElementById("raritylbl").innerHTML = "เค่าความหายาก:";
        document.getElementById("nosteamlbl").innerHTML = "ซ่อนการแจ้งเตือน Steam";
        document.getElementById("customiselbl").innerHTML = "ปรับแต่ง...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">หลัก';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">หายาก';
        document.getElementById("customiserstylelbl").innerHTML = "รูปแบบการแจ้งเตือน:";
        document.getElementById("notifypositionlbl").innerHTML = "ตำแหน่งหน้าจอ:";
        document.getElementById("bgtypelbl").innerHTML = "ประเภทพื้นหลัง:";
        document.getElementById("colourslbl").innerHTML = "สี";
        document.getElementById("colour1lbl").innerHTML = "สี 1";
        document.getElementById("colour2lbl").innerHTML = "สี 2";
        document.getElementById("textcolourlbl").innerHTML = "สีข้อความ";
        document.getElementById("imgselectlbl").innerHTML = "ภาพพื้นหลัง:"
        document.getElementById("roundnesslbl").innerHTML = "ความกลม:";
        document.getElementById("iconroundnesslbl").innerHTML = "ไอคอนปัดเศษ:";
        document.getElementById("displaytimelbl").innerHTML = "เวลาแสดงผล:";
        document.getElementById("scalelbl").innerHTML = "มาตราส่วน:";
        document.getElementById("styledefault").innerHTML = "ค่าเริ่มต้น";
        document.getElementById("typesolid").innerHTML = "สีทึบ";
        document.getElementById("typegradient").innerHTML = "การไล่ระดับสี";
        document.getElementById("typeimg").innerHTML = "ภาพพื้นหลัง";
        document.getElementById("dragposlbl").innerHTML = "ใช้ตำแหน่งหน้าจอที่กำหนดเอง";
        document.getElementById("iconselectlbl").innerHTML = "ไอคอนที่กำหนดเอง:";
        document.getElementById("fontsizelbl").innerHTML = "ขนาดตัวอักษร:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "รีเซ็ตตำแหน่ง";
        document.getElementById("gameiconlbl").innerHTML = "ใช้ไอคอนเกม";

        document.getElementById("customiserstylelblrare").innerHTML = "รูปแบบการแจ้งเตือน:";
        document.getElementById("notifypositionlblrare").innerHTML = "ตำแหน่งหน้าจอ:";
        document.getElementById("bgtypelblrare").innerHTML = "ประเภทพื้นหลัง:";
        document.getElementById("rarecolourslbl").innerHTML = "สี";
        document.getElementById("colour1lblrare").innerHTML = "สี 1";
        document.getElementById("colour2lblrare").innerHTML = "สี 2";
        document.getElementById("textcolourlblrare").innerHTML = "สีข้อความ";
        document.getElementById("rareimgselectlbl").innerHTML = "ภาพพื้นหลัง:"
        document.getElementById("roundnesslblrare").innerHTML = "ความกลม:";
        document.getElementById("iconroundnesslblrare").innerHTML = "ไอคอนปัดเศษ:";
        document.getElementById("displaytimelblrare").innerHTML = "เวลาแสดงผล:";
        document.getElementById("scalelblrare").innerHTML = "มาตราส่วน:";
        document.getElementById("styledefaultrare").innerHTML = "ค่าเริ่มต้น";
        document.getElementById("typesolidrare").innerHTML = "สีทึบ";
        document.getElementById("typegradientrare").innerHTML = "การไล่ระดับสี";
        document.getElementById("typeimgrare").innerHTML = "ภาพพื้นหลัง";
        document.getElementById("dragposlblrare").innerHTML = "ใช้ตำแหน่งหน้าจอที่กำหนดเอง";
        document.getElementById("rareiconselectlbl").innerHTML = "ไอคอนที่กำหนดเอง:";
        document.getElementById("fontsizelblrare").innerHTML = "ขนาดตัวอักษร:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "รีเซ็ตตำแหน่ง";
        document.getElementById("gameiconlblrare").innerHTML = "ใช้ไอคอนเกม";

        document.getElementById("trackopacitylbl").innerHTML = "ติดตามความทึบ:";
        document.getElementById("resetlbl").innerHTML = "รีเซ็ตแอปพลิเคชัน";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">รายละเอียดเกม</a>ต้องตั้งค่าเป็น "สาธารณะ" ด้วย';
        document.getElementById("allpercentlbl").innerHTML = "แสดงเปอร์เซ็นต์ความสำเร็จทั้งหมด";
        document.getElementById("iconanimationlbl").innerHTML = "แสดงแอนิเมชั่นไอคอนหายาก";
        document.getElementById("hwalbl").innerHTML = "ปิดใช้งานการเร่งฮาร์ดแวร์";
        document.getElementById("nvdalbl").innerHTML = "เปิดใช้งานการสนับสนุน NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "แสดงการแจ้งเตือนการจบเกม";
        document.getElementById("ssoverlaylbl").innerHTML = "บันทึกภาพหน้าจอด้วยโอเวอร์เลย์";
        document.getElementById("ssoverlaypathlbl").innerHTML = "เส้นทาง:";
        document.getElementById("opacitylbl").innerHTML = "ความทึบของการแจ้งเตือน:";
        document.getElementById("ssmaintestbtn").innerHTML = "ดูตัวอย่างภาพซ้อนทับหลัก";
        document.getElementById("ssraretestbtn").innerHTML = "ดูตัวอย่างภาพซ้อนทับที่หายาก";

        secret = "ความลับ";
        gamecomplete = "เกมจบ!";
        allunlocked = "คุณได้ปลดล็อคความสำเร็จทั้งหมดแล้ว!";
    } else if (config.lang == "turkish") {
        document.getElementById("username").innerHTML = "Kullanıcı Tespit Edilmedi";
        document.getElementById("gamestatus").innerHTML = "Oyun Algılanmadı";
        document.getElementById("soundfile").innerHTML = "Varsayılan (Seçili Ses Yok)";
        document.getElementById("soundfilerare").innerHTML = "Varsayılan (Seçili Ses Yok)";
        document.getElementById("maincheevsound").innerHTML = "Ana Bildirim Sesi";
        document.getElementById("rarecheevsound").innerHTML = "Nadir Bildirim Sesi";
        document.getElementById("test").innerHTML = "TEST BİLDİRİMİNİ GÖSTER";
        document.getElementById("testrare").innerHTML = "NADİR TEST BİLDİRİMİNİ GÖSTER";
        document.getElementById("settingstitle").innerHTML = "AYARLAR";
        document.getElementById("configtitle").innerHTML = "KONFİGÜRASYON";
        document.getElementById("apibox").placeholder = "API Key'i girin";
        document.getElementById("steam64box").placeholder = "Steam64ID'yi girin";
        document.getElementById("other").innerHTML = "BAŞKA";
        document.getElementById("showscreenshotlbl").innerHTML = "Ekran Görüntüsünü Göster";
        document.getElementById("showscreenshotlblrare").innerHTML = "Ekran Görüntüsünü Göster";
        document.getElementById("desktoplbl").innerHTML = "Desktop kısayolu oluştur";
        document.getElementById("startwinlbl").innerHTML = "Windows Başladığında Çalıştır";
        document.getElementById("startminlbl").innerHTML = "Başlangıçta Gizle";
        document.getElementById("soundonlylbl").innerHTML = "Yalnızca Ses Modu";
        document.getElementById("trackinglbl").innerHTML = '"Şimdi İzliyor" Bildirimi';

        nouser = "Kullanıcı Tespit Edilmedi";
        nogame = "Oyun Algılanmadı";
        nosound = "Varsayılan (Seçili Ses Yok)";
        nosoundrare = "Varsayılan (Seçili Ses Yok)";
        rareheader = `'Nadir Başarının Kilidi Açıldı!`;
        unlinked = "BAĞLI DEĞİL";
        linked = "BAĞLI";
        novalue = "Lütfen bir değer girin";
    
        resettitle = "Uygulama Varsayılana Sıfırlansın Mı?";
        resetdesc = `UYARI: Bu tüm kullanıcı ayarlarını kaldıracaktır!`;
        resetbtns = ["Sıfırla","Kaldır","İptal Etmek"];
    
        traylabel = "Oyun Algılanmadı";
        trayshow = "Göster";
        trayexit = "Çık";

        //!!!1.8 Translations;
        achievementunlocked = "Başarım Açıldı!";
        rareachievementunlocked = "Nadir Başarının Kilidi Açıldı!";
        testdesc = "Bildirimleriniz düzgün çalışıyor";

        addsound = "Seçilen Sesi Ekle";
        invalid = 'Geçersiz Dosya Türü';
        addimage = 'Seçili Resmi Ekle';
        file = "DOSYA";
        nofolder = "Varsayılan (Klasör Seçilmedi)";
        novalidaudio = "İçinde geçerli ses dosyası yok ";
        soundmode = "SES MODU: ";
        randomised = "RANDOMİZE";
        presskey = "...";
        custompos = "Özel Ekran Konumunu Ayarla";
        settingpos = "Ana Konum Ayarlanıyor...";
        settingposrare = "Nadir Konum Ayarlanıyor...";

        document.getElementById("steamkeybindlbl").innerHTML = "Steam Ekran Görüntüsü:";
        document.getElementById("langlbl").innerHTML = "Dilim:";
        document.getElementById("raritylbl").innerHTML = "Nadirlik Yüzdesi: ";
        document.getElementById("nosteamlbl").innerHTML = "Steam Bildirimini Gizle";
        document.getElementById("customiselbl").innerHTML = "ÖZELLEŞTİRMEK...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Ana';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Nadir';
        document.getElementById("customiserstylelbl").innerHTML = "BİLDİRİM TARZI:";
        document.getElementById("notifypositionlbl").innerHTML = "EKRAN KONUMU:";
        document.getElementById("bgtypelbl").innerHTML = "ARKA PLAN TİPİ:";
        document.getElementById("colourslbl").innerHTML = "RENKLER";
        document.getElementById("colour1lbl").innerHTML = "Renk 1";
        document.getElementById("colour2lbl").innerHTML = "Renk 2";
        document.getElementById("textcolourlbl").innerHTML = "Metin Rengi";
        document.getElementById("imgselectlbl").innerHTML = "ARKA PLAN GÖRÜNTÜSÜ:"
        document.getElementById("roundnesslbl").innerHTML = "YUVARLAKLIK:";
        document.getElementById("iconroundnesslbl").innerHTML = "SİMGE YUVARLAKLIĞI:";
        document.getElementById("displaytimelbl").innerHTML = "GÖRÜNTÜ SÜRESİ:";
        document.getElementById("scalelbl").innerHTML = "ÖLÇEK:";
        document.getElementById("styledefault").innerHTML = "Varsayılan";
        document.getElementById("typesolid").innerHTML = "Düz Renk";
        document.getElementById("typegradient").innerHTML = "Renk Gradyanı";
        document.getElementById("typeimg").innerHTML = "Arka Plan Görüntüsü";
        document.getElementById("dragposlbl").innerHTML = "Özel Ekran Konumunu Kullan";
        document.getElementById("iconselectlbl").innerHTML = "ÖZEL İKON:";
        document.getElementById("fontsizelbl").innerHTML = "YAZI BOYUTU:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Pozisyonu Sıfırla";
        document.getElementById("gameiconlbl").innerHTML = "Oyun Simgesini Kullan";

        document.getElementById("customiserstylelblrare").innerHTML = "BİLDİRİM TARZI:";
        document.getElementById("notifypositionlblrare").innerHTML = "EKRAN KONUMU:";
        document.getElementById("bgtypelblrare").innerHTML = "ARKA PLAN TİPİ:";
        document.getElementById("rarecolourslbl").innerHTML = "RENKLER";
        document.getElementById("colour1lblrare").innerHTML = "Renk 1";
        document.getElementById("colour2lblrare").innerHTML = "Renk 2";
        document.getElementById("textcolourlblrare").innerHTML = "Metin Rengi";
        document.getElementById("rareimgselectlbl").innerHTML = "ARKA PLAN GÖRÜNTÜSÜ:"
        document.getElementById("roundnesslblrare").innerHTML = "YUVARLAKLIK:";
        document.getElementById("iconroundnesslblrare").innerHTML = "SİMGE YUVARLAKLIĞI:";
        document.getElementById("displaytimelblrare").innerHTML = "GÖRÜNTÜ SÜRESİ:";
        document.getElementById("scalelblrare").innerHTML = "ÖLÇEK:";
        document.getElementById("styledefaultrare").innerHTML = "Varsayılan";
        document.getElementById("typesolidrare").innerHTML = "Düz Renk";
        document.getElementById("typegradientrare").innerHTML = "Renk Gradyanı";
        document.getElementById("typeimgrare").innerHTML = "Arka Plan Görüntüsü";
        document.getElementById("dragposlblrare").innerHTML = "Özel Ekran Konumunu Kullann";
        document.getElementById("rareiconselectlbl").innerHTML = "ÖZEL İKON:";
        document.getElementById("fontsizelblrare").innerHTML = "YAZI BOYUTU:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Pozisyonu Sıfırla";
        document.getElementById("gameiconlblrare").innerHTML = "Oyun Simgesini Kullan";

        document.getElementById("trackopacitylbl").innerHTML = "Opaklığı İzliyor:";
        document.getElementById("resetlbl").innerHTML = "Uygulamayı Sıfırla";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Oyun Ayrıntıları</a> da "Genel" olarak ayarlanmalıdır.';
        document.getElementById("allpercentlbl").innerHTML = "Tüm Başarı Yüzdelerini Göster";
        document.getElementById("iconanimationlbl").innerHTML = "Nadir Simge Animasyonunu Göster";
        document.getElementById("hwalbl").innerHTML = "Donanım Hızlandırmasını Devre Dışı Bırak";
        document.getElementById("nvdalbl").innerHTML = "NVDA Desteğini Etkinleştir";
        document.getElementById("gamecompletionlbl").innerHTML = "Oyun Tamamlama Bildirimini Göster";
        document.getElementById("ssoverlaylbl").innerHTML = "Yer Paylaşımlı Ekran Görüntülerini Kaydet";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Yol:";
        document.getElementById("opacitylbl").innerHTML = "Bildirim Opaklığı:";
        document.getElementById("ssmaintestbtn").innerHTML = "ANA GÖRÜNTÜ ÖNİZLEME";
        document.getElementById("ssraretestbtn").innerHTML = "NADİR GÖRÜNTÜ ÖNİZLEME";

        secret = "Gizli";
        gamecomplete = "Oyun Tamamlandı!";
        allunlocked = "Tüm başarıların kilidini açtınız!";
    } else if (config.lang == "ukrainian") {
        document.getElementById("username").innerHTML = "Користувача Не Виявлено";
        document.getElementById("gamestatus").innerHTML = "Гра Не Виявлена";
        document.getElementById("soundfile").innerHTML = "За замовчуванням (звук не вибрано)";
        document.getElementById("soundfilerare").innerHTML = "За замовчуванням (звук не вибрано)";
        document.getElementById("maincheevsound").innerHTML = "Основний звук досягнення";
        document.getElementById("rarecheevsound").innerHTML = "Звук рідкісного досягнення";
        document.getElementById("test").innerHTML = "ПОКАЗАТИ ПОВІДОМЛЕННЯ ТЕСТ";
        document.getElementById("testrare").innerHTML = "ПОКАЗАТИ РІДКІСНІ ПОВІДОМЛЕННЯ ТЕСТ";
        document.getElementById("settingstitle").innerHTML = "НАЛАШТУВАННЯ";
        document.getElementById("configtitle").innerHTML = "КОНФІГУРАЦІЯ";
        document.getElementById("apibox").placeholder = "Введіть API Key";
        document.getElementById("steam64box").placeholder = "Введіть Steam64ID";
        document.getElementById("other").innerHTML = "ІНШИЙ";
        document.getElementById("showscreenshotlbl").innerHTML = "Показати скріншот досягнення";
        document.getElementById("showscreenshotlblrare").innerHTML = "Показати скріншот досягнення";
        document.getElementById("desktoplbl").innerHTML = "Створіть ярлик на Desktop";
        document.getElementById("startwinlbl").innerHTML = "Почніть з Windows";
        document.getElementById("startminlbl").innerHTML = "Сховати під час запуску";
        document.getElementById("soundonlylbl").innerHTML = "Режим Лише Звуку";
        document.getElementById("trackinglbl").innerHTML = 'Показати "Відстеження"';

        nouser = "Користувача Не Виявлено";
        nogame = "Гра Не Виявлена";
        nosound = "За замовчуванням (звук не вибрано)";
        nosoundrare = "За замовчуванням (звук не вибрано)";
        rareheader = `'Рідкісне досягнення розблоковано!`;
        unlinked = "НЕ ПІД'ЄДНАНО";
        linked = "ПІДКЛЮЧЕНО";
        novalue = "Введіть значення";

        resettitle = "Скинути Програму За Замовчуванням?";
        resetdesc = `ПОПЕРЕДЖЕННЯ: Це призведе до видалення всіх налаштувань користувача!`;
        resetbtns = ["Скинути","Видалити","Скасувати"];
    
        traylabel = "Гра Не Виявлена";
        trayshow = "Показувати";
        trayexit = "Вийти";

        //!!!1.8 Translations;
        achievementunlocked = "Досягнення!";
        rareachievementunlocked = "Рідкісне Досягнення!";
        testdesc = "Ваші сповіщення працюють правильно";

        addsound = "Додати Звук";
        invalid = 'Недійсний Тип Файлу';
        addimage = 'Додати Зображення';
        file = "ФАЙЛ";
        nofolder = "За Замовчуванням (папка Не Вибрано)";
        novalidaudio = "Немає дійсних аудіофайлів ";
        soundmode = "РЕЖИМ ЗВУКУ: ";
        randomised = "ВИПАДКОВИЙ";
        presskey = "...";
        custompos = "Установити Спеціальне Положення";
        settingpos = "Налаштування Головного...";
        settingposrare = "Налаштування Рідкісного...";

        document.getElementById("steamkeybindlbl").innerHTML = "Кнопка Знімка Екрана Steam:";
        document.getElementById("langlbl").innerHTML = "Мову:";
        document.getElementById("raritylbl").innerHTML = "Відсоток Рідкості: ";
        document.getElementById("nosteamlbl").innerHTML = "Приховати Сповіщення Steam";
        document.getElementById("customiselbl").innerHTML = "РЕДАГУВАТИ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Головний';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Рідкісні';
        document.getElementById("customiserstylelbl").innerHTML = "СТИЛЬ ПОВІДОМЛЕННЯ:";
        document.getElementById("notifypositionlbl").innerHTML = "ПОЛОЖЕННЯ ЕКРАНА:";
        document.getElementById("bgtypelbl").innerHTML = "ТИП ФОНУ:";
        document.getElementById("colourslbl").innerHTML = "КОЛЬОРИ";
        document.getElementById("colour1lbl").innerHTML = "Колір 1";
        document.getElementById("colour2lbl").innerHTML = "Колір 2";
        document.getElementById("textcolourlbl").innerHTML = "Колір Тексту";
        document.getElementById("imgselectlbl").innerHTML = "ФОНОВЕ ЗОБРАЖЕННЯ:"
        document.getElementById("roundnesslbl").innerHTML = "КРУГЛИСТЬ:";
        document.getElementById("iconroundnesslbl").innerHTML = "КРУГЛИСТЬ ІКОНИ:";
        document.getElementById("displaytimelbl").innerHTML = "ЧАС ВІДОБРАЖЕННЯ:";
        document.getElementById("scalelbl").innerHTML = "РОЗМІР::";
        document.getElementById("styledefault").innerHTML = "За замовчуванням";
        document.getElementById("typesolid").innerHTML = "Суцільний Колір";
        document.getElementById("typegradient").innerHTML = "Колірний Градієнт";
        document.getElementById("typeimg").innerHTML = "Фонове Зображення";
        document.getElementById("dragposlbl").innerHTML = "Спеціальна Позиція";
        document.getElementById("iconselectlbl").innerHTML = "ВЛАСНИЙ ПІКОНАТ:";
        document.getElementById("fontsizelbl").innerHTML = "РОЗМІР ШРИФТУ:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Скинути Позицію";
        document.getElementById("gameiconlbl").innerHTML = "Використовуйте Значок Гри";

        document.getElementById("customiserstylelblrare").innerHTML = "СТИЛЬ ПОВІДОМЛЕННЯ:";
        document.getElementById("notifypositionlblrare").innerHTML = "ПОЛОЖЕННЯ ЕКРАНА:";
        document.getElementById("bgtypelblrare").innerHTML = "ТИП ФОНУ:";
        document.getElementById("rarecolourslbl").innerHTML = "КОЛЬОРИ";
        document.getElementById("colour1lblrare").innerHTML = "Колір 1";
        document.getElementById("colour2lblrare").innerHTML = "Колір 2";
        document.getElementById("textcolourlblrare").innerHTML = "Колір Тексту";
        document.getElementById("rareimgselectlbl").innerHTML = "ФОНОВЕ ЗОБРАЖЕННЯ:"
        document.getElementById("roundnesslblrare").innerHTML = "КРУГЛИСТЬ:";
        document.getElementById("iconroundnesslblrare").innerHTML = "КРУГЛИСТЬ ІКОНИ:";
        document.getElementById("displaytimelblrare").innerHTML = "ЧАС ВІДОБРАЖЕННЯ:";
        document.getElementById("scalelblrare").innerHTML = "РОЗМІР::";
        document.getElementById("styledefaultrare").innerHTML = "За замовчуванням";
        document.getElementById("typesolidrare").innerHTML = "Суцільний Колір";
        document.getElementById("typegradientrare").innerHTML = "Колірний Градієнт";
        document.getElementById("typeimgrare").innerHTML = "Фонове Зображення";
        document.getElementById("dragposlblrare").innerHTML = "Спеціальна Позиція";
        document.getElementById("rareiconselectlbl").innerHTML = "ВЛАСНИЙ ПІКОНАТ:";
        document.getElementById("fontsizelblrare").innerHTML = "РОЗМІР ШРИФТУ:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Скинути Позицію";
        document.getElementById("gameiconlblrare").innerHTML = "Використовуйте Значок Гри";

        document.getElementById("trackopacitylbl").innerHTML = "Непрозорість:";
        document.getElementById("resetlbl").innerHTML = "Скинути Програму";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Інформація про гру</a> має бути "Загальнодоступною".';
        document.getElementById("allpercentlbl").innerHTML = "Показати Всі Відсотки Досягнень";
        document.getElementById("iconanimationlbl").innerHTML = "Показати Анімацію Рідкісних Значків";
        document.getElementById("hwalbl").innerHTML = "Вимкніть Апаратне Прискорення";
        document.getElementById("nvdalbl").innerHTML = "Увімкніть Підтримку NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Показати Сповіщення Про Завершення Гри";
        document.getElementById("ssoverlaylbl").innerHTML = "Збережіть Знімки Екрана З Накладенням";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Шлях:";
        document.getElementById("opacitylbl").innerHTML = "Непрозорість Сповіщень:";
        document.getElementById("ssmaintestbtn").innerHTML = "ПЕРЕГЛЯНУТИ ГОЛОВНЕ ЗОБРАЖЕННЯ";
        document.getElementById("ssraretestbtn").innerHTML = "ПЕРЕГЛЯНУТИ РІДКІСНІ ЗОБРАЖЕННЯ";

        secret = "Секрет";
        gamecomplete = "Гра Завершено!";
        allunlocked = "Ви розблокували всі досягнення!";
    } else if (config.lang == "vietnamese") {
        document.getElementById("username").innerHTML = "Không Có Người Dùng Nào Được Phát Hiện";
        document.getElementById("gamestatus").innerHTML = "Không Có Trò Chơi Nào Được Phát Hiện";
        document.getElementById("soundfile").innerHTML = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        document.getElementById("soundfilerare").innerHTML = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        document.getElementById("maincheevsound").innerHTML = "Âm Thanh Chính";
        document.getElementById("rarecheevsound").innerHTML = "Âm Thanh Hiếm";
        document.getElementById("test").innerHTML = "HIỂN THỊ THÔNG ĐIỆP KIỂM TRA";
        document.getElementById("testrare").innerHTML = "HIỂN THỊ THÔNG ĐIỆP KIỂM TRA HIẾM";
        document.getElementById("settingstitle").innerHTML = "CÀI ĐẶT";
        document.getElementById("configtitle").innerHTML = "CẤU HÌNH";
        document.getElementById("apibox").placeholder = "Nhập API Key";
        document.getElementById("steam64box").placeholder = "Nhập Steam64ID";
        document.getElementById("other").innerHTML = "KHÁC";
        document.getElementById("showscreenshotlbl").innerHTML = "Hiển Thị Ảnh Chụp Màn Hình";
        document.getElementById("showscreenshotlblrare").innerHTML = "Hiển Thị Ảnh Chụp Màn Hình";
        document.getElementById("desktoplbl").innerHTML = "Tạo lối tắt Desktop";
        document.getElementById("startwinlbl").innerHTML = "Chạy Khi Windows Khởi Động";
        document.getElementById("startminlbl").innerHTML = "Ẩn Khi Khởi Động";
        document.getElementById("soundonlylbl").innerHTML = "Chế Độ Chỉ Âm Thanh";
        document.getElementById("trackinglbl").innerHTML = 'Hiển Thị "Hiện Đang Quan Sát"';

        nouser = "Không Có Người Dùng Nào Được Phát Hiện";
        nogame = "Không Có Trò Chơi Nào Được Phát Hiện";
        nosound = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        nosoundrare = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        rareheader = `'Đã Mở Khóa Thành Tích Hiếm Hoi!`;
        unlinked = "NGẮT KẾT NỐI";
        linked = "LIÊN KẾT";
        novalue = "Vui lòng nhập một giá trị";
    
        resettitle = "Đặt Lại Ứng Dụng Này Về Mặc Định?";
        resetdesc = `CẢNH BÁO: Thao tác này sẽ xóa tất cả cài đặt của người dùng!`;
        resetbtns = ["Cài Lại","Gỡ Cài Đặt","Hủy Bỏ"];
    
        traylabel = "Không Có Trò Chơi";
        trayshow = "Mở";
        trayexit = "Lối Ra";

        //!!!1.8 Translations;
        achievementunlocked = "Thành tích!";
        rareachievementunlocked = "Thành Tựu Hiếm Có!";
        testdesc = "Thông báo của bạn đang hoạt động chính xác";

        addsound = "Thêm Âm Thanh Đã Chọn";
        invalid = 'Loại Tệp Không Hợp Lệ';
        addimage = 'Thêm Hình Ảnh Đã Chọn';
        file = "TẬP TIN";
        nofolder = "Mặc Định (Không Có Thư Mục Nào Được Chọn)";
        novalidaudio = "Không có tệp âm thanh hợp lệ nào nằm trong ";
        soundmode = "CHẾ ĐỘ ÂM THANH: ";
        randomised = "NGẪU NHIÊN";
        presskey = "...";
        custompos = "Đặt Vị Trí Màn Hình Tùy Chỉnh";
        settingpos = "Đặt Vị Trí Chính...";
        settingposrare = "Đặt Vị Trí Hiếm...";

        document.getElementById("steamkeybindlbl").innerHTML = "Ảnh Chụp Màn Hình Steam:";
        document.getElementById("langlbl").innerHTML = "Ngôn Ngữ:";
        document.getElementById("raritylbl").innerHTML = "Giá Trị Quý Hiếm: ";
        document.getElementById("nosteamlbl").innerHTML = "Ẩn Thông Báo Thành Tích Steam";
        document.getElementById("customiselbl").innerHTML = "TÙY CHỈNH ...";
        document.getElementById("customisermaintab").innerHTML = '<img src="./icon/emoji_events_gold.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Chủ Yếu';
        document.getElementById("customiserraretab").innerHTML = '<img src="./icon/emoji_events_purple.png" width="12px" style="margin-right: 3px; padding-bottom: 1px">Hiếm';
        document.getElementById("customiserstylelbl").innerHTML = "PHONG CÁCH THÔNG BÁO:";
        document.getElementById("notifypositionlbl").innerHTML = "VỊ TRÍ MÀN HÌNH:";
        document.getElementById("bgtypelbl").innerHTML = "LOẠI NỀN:";
        document.getElementById("colourslbl").innerHTML = "MÀU SẮC";
        document.getElementById("colour1lbl").innerHTML = "Màu 1";
        document.getElementById("colour2lbl").innerHTML = "Màu 2";
        document.getElementById("textcolourlbl").innerHTML = "Màu Văn Bản";
        document.getElementById("imgselectlbl").innerHTML = "HÌNH NỀN:"
        document.getElementById("roundnesslbl").innerHTML = "VÒNG TRÒN:";
        document.getElementById("iconroundnesslbl").innerHTML = "VÒNG BIỂU TƯỢNG:";
        document.getElementById("displaytimelbl").innerHTML = "HIỂN THỊ THỜI GIAN:";
        document.getElementById("scalelbl").innerHTML = "TỈ LỆ:";
        document.getElementById("styledefault").innerHTML = "Vỡ nợ";
        document.getElementById("typesolid").innerHTML = "Màu Đồng Nhất";
        document.getElementById("typegradient").innerHTML = "Gradient Màu";
        document.getElementById("typeimg").innerHTML = "Hình Nền";
        document.getElementById("dragposlbl").innerHTML = "Sử Dụng Vị Trí Tùy Chỉnh";
        document.getElementById("iconselectlbl").innerHTML = "BIỂU TƯỢNG TÙY CHỈNH:";
        document.getElementById("fontsizelbl").innerHTML = "CỠ CHỮ:";
        document.getElementById("dragposbtn").innerHTML = custompos;
        document.getElementById("recenterbtn").innerHTML = "Đặt Lại Vị Trí";
        document.getElementById("gameiconlbl").innerHTML = "Biểu Tượng Trò Chơi";

        document.getElementById("customiserstylelblrare").innerHTML = "PHONG CÁCH THÔNG BÁO:";
        document.getElementById("notifypositionlblrare").innerHTML = "VỊ TRÍ MÀN HÌNH:";
        document.getElementById("bgtypelblrare").innerHTML = "LOẠI NỀN:";
        document.getElementById("rarecolourslbl").innerHTML = "MÀU SẮC";
        document.getElementById("colour1lblrare").innerHTML = "Màu 1";
        document.getElementById("colour2lblrare").innerHTML = "Màu 2";
        document.getElementById("textcolourlblrare").innerHTML = "Màu Văn Bản";
        document.getElementById("rareimgselectlbl").innerHTML = "HÌNH NỀN:"
        document.getElementById("roundnesslblrare").innerHTML = "VÒNG TRÒN:";
        document.getElementById("iconroundnesslblrare").innerHTML = "VÒNG BIỂU TƯỢNG:";
        document.getElementById("displaytimelblrare").innerHTML = "HIỂN THỊ THỜI GIAN:";
        document.getElementById("scalelblrare").innerHTML = "TỈ LỆ:";
        document.getElementById("styledefaultrare").innerHTML = "Vỡ nợ";
        document.getElementById("typesolidrare").innerHTML = "Màu Đồng Nhất";
        document.getElementById("typegradientrare").innerHTML = "Gradient Màu";
        document.getElementById("typeimgrare").innerHTML = "Hình Nền";
        document.getElementById("dragposlblrare").innerHTML = "Sử Dụng Vị Trí Tùy Chỉnh";
        document.getElementById("rareiconselectlbl").innerHTML = "BIỂU TƯỢNG TÙY CHỈNH:";
        document.getElementById("fontsizelblrare").innerHTML = "CỠ CHỮ:";
        document.getElementById("dragposbtnrare").innerHTML = custompos;
        document.getElementById("recenterbtnrare").innerHTML = "Đặt Lại Vị Trí";
        document.getElementById("gameiconlblrare").innerHTML = "Biểu Tượng Trò Chơi";

        document.getElementById("trackopacitylbl").innerHTML = "Theo Dõi Minh Bạch:";
        document.getElementById("resetlbl").innerHTML = "Đặt Lại Ứng Dụng";
        document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Chi tiết trò chơi</a> phải là "Công khai".';
        document.getElementById("allpercentlbl").innerHTML = "Hiển Thị Tất Cả Các Phần Trăm";
        document.getElementById("iconanimationlbl").innerHTML = "Hiển Thị Hoạt Ảnh Biểu Tượng Hiếm";
        document.getElementById("hwalbl").innerHTML = "Tắt Tăng Tốc Phần Cứng";
        document.getElementById("nvdalbl").innerHTML = "Bật Hỗ Trợ NVDA";
        document.getElementById("gamecompletionlbl").innerHTML = "Hiển Thị Thông Báo Hoàn Thành Trò Chơi";
        document.getElementById("ssoverlaylbl").innerHTML = "Lưu Ảnh Chụp Màn Hình Bằng Lớp Phủ";
        document.getElementById("ssoverlaypathlbl").innerHTML = "Đường Dẫn:";
        document.getElementById("opacitylbl").innerHTML = "ĐỘ MỜ THÔNG BÁO:";
        document.getElementById("ssmaintestbtn").innerHTML = "XEM HÌNH ẢNH CHÍNH";
        document.getElementById("ssraretestbtn").innerHTML = "XEM HÌNH ẢNH HIẾM";

        secret = "Bí Mật";
        gamecomplete = "Hoàn Thành Trò Chơi!";
        allunlocked = "Bạn đã mở khóa tất cả các thành tích!";
    }
    GetPlayerName();

    var apikey = config.apikey;
    var steam64id = config.steam64id;
    
    if (!apikey || !steam64id) {
        document.getElementById("gamestatus").innerHTML = nogame;
        document.getElementById("gamestatus").style.color = "red";
        ipcRenderer.send('changelang', traylabel, trayshow, trayexit);
    } else {
        if (appid == 0 || appid == undefined) {
            document.getElementById("gamestatus").innerHTML = nogame;
            document.getElementById("gamestatus").style.color = "red";
            ipcRenderer.send('changelang', traylabel, trayshow, trayexit);
        } else {
            document.getElementById("gamestatus").innerHTML = gamename;
            document.getElementById("gamestatus").style.color = "white";
            ipcRenderer.send('track', gamename, trayshow, trayexit);
        }
    }
}

LoadLang();

function SetLang() {
    config["lang"] = document.getElementById("lang").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

    LoadLang();
    LoadSound();
    LoadRareSound();
}

function ResetHover() {
    document.getElementById("reseticon").style.transform = "rotate(360deg)";
}

function ResetOut() {
    document.getElementById("reseticon").style.transform = "rotate(0deg)";
}

function ResetAppConfirm() {
    var options = {
        title: "Steam Achievement Notifier",
        icon: (path.join(__dirname, "img","sanlogo.ico")),
        message: resettitle,
        detail: resetdesc,
        buttons: resetbtns,
        noLink: true,
        defaultId: 2,
        cancelId: 2
    }

    ipcRenderer.send('reset', options);
}

function RemoveApp() {
    var tempdir;

    if (process.platform == "win32") {
        tempdir = path.join(localappdata,"Temp");
    } else {
        tempdir = path.join(localappdata);
    }

    console.log("%cStep 1: BACKUP...", "color: deepskyblue;");
    fs.writeFileSync(path.join(tempdir,"sanresetlog.txt"), "Step 1: BACKUP...");
    // Create "SAN1.8BACKUP" backup dir in %localappdata%\Temp
    try {
        fs.mkdirSync(path.join(tempdir,"SAN1.8BACKUP"));
        console.log("%c\"SAN1.8BACKUP\" directory created.", "color: seagreen;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"SAN1.8BACKUP\" directory created.");
    } catch {
        console.log("%c\"SAN1.8BACKUP\" directory already exists", "color: red;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"SAN1.8BACKUP\" directory already exists");
    }
    // Backup config file
    try {
        fs.copyFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), path.join(tempdir,"SAN1.8BACKUP","config.json"));
        console.log("%cSteam Achievement Notifier config backed up", "color: seagreen;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up");
    } catch {
        console.log("%cError backing up Steam Achievement Notifier config", "color: red;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config");
    }
    // Backup logo file
    try {
        fs.copyFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","img","sanlogo.ico"), path.join(tempdir,"SAN1.8BACKUP","sanlogo.ico"));
        console.log("%cSteam Achievement Notifier logo backed up", "color: seagreen;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up");
    } catch {
        console.log("%cError backing up Steam Achievement Notifier logo", "color: red;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo");
    }
    console.log("%cStep 2: DELETING FILES...", "color: deepskyblue;")
    fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nStep 2: DELETING FILES...");
    
    // If "Uninstall" option is selected, delete "Steam Achievement Notifier (V1.8)" dir in %localappdata%
    // Otherwise, just delete "config.json" (to preserve "SteamAchievementNotifier(V1.83).exe" file for restarting in main.js)
    if (resettype == "reset") {
        // Delete "config.json" in %localappdata%\SteamAchievementNotifier(V1.8)\"store"
        try {
            fs.rmSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"));
            console.log("%c\"config.json\" deleted in %localappdata%\\Steam Achievement Notifier (V1.8)\\store.", "color: seagreen;")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"config.json\" deleted in %localappdata%\\Steam Achievement Notifier (V1.8)\\store");
        } catch {
            console.log("%cError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%", "color: red;")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting \"store\" directory in %localappdata%\\Steam Achievement Notifier (V1.8)");
        }
    } else if (resettype == "uninstall") {
        // Delete "Steam Achievement Notifier (V1.8)" dir in %localappdata%
        try {
            fs.rmSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)"), { recursive: true });
            console.log("%c\"Steam Achievement Notifier (V1.8)\" directory deleted in %localappdata%.", "color: seagreen;")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.8)\" directory deleted in %localappdata%");
        } catch {
            console.log("%cError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%", "color: red;")
            fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.8)\" directory in %localappdata%");
        }
    }

    // Remove Desktop shortcut
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V" + thisver + ").lnk"));
        console.log("%cDesktop shortcut deleted.", "color: seagreen;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("%cError deleting Desktop shortcut", "color: red;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    // Remove Startup folder shortcut from "shell:startup"
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V" + thisver + ").lnk"));
        console.log("%cStartup shortcut deleted.", "color: seagreen;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nStartup shortcut deleted.");
    } catch {
        console.log("%cError deleting Startup shortcut", "color: red;")
        fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nError deleting Startup shortcut");
    }
    console.log("%cReset: COMPLETE", "color: deepskyblue;")
    fs.appendFileSync(path.join(tempdir,"sanresetlog.txt"), "\r\nReset: COMPLETE");
}

var resettype;

function ResetApp() {
    resettype = "reset";
    RemoveApp();

    if (process.platform == "win32") {
        launcher["firstlaunch"] = true
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","launcher.json"), JSON.stringify(launcher, null, 2));
    }
    
    ipcRenderer.send('resetcomplete');
}

ipcRenderer.on('resetapp', function() {
    ResetApp();
});

function UninstallApp() {
    resettype = "uninstall";
    RemoveApp();
    ipcRenderer.send('uninstallcomplete');
}

ipcRenderer.on('uninstallapp', function() {
    UninstallApp();
});

document.getElementById("settingscont").style.display = "none";

function ShowSettings() {
    if (document.getElementById("settingscont").style.display == "none") {
        document.getElementById("settingscont").style.display = "block";
        document.getElementById("settingscont").style.animation = "slideright 0.2s forwards";
        document.getElementById("overlay").style.display = "flex";
        document.getElementById("apibox").type = "password";
    } else {
        document.getElementById("settingscont").style.animation = "slideleft 0.2s forwards";
        document.getElementById("overlay").style.display = "none";
        setTimeout(function() {
            document.getElementById("settingscont").style.display = "none";
        }, 200);
    }

    GetAPIKey();
    GetSteam64ID();
    CheckNoSteam();
    CheckShortcut();
    CheckStartWin();
    CheckStartMin();
    CheckSoundOnlyMode();
    CheckNowTracking();
    CheckAllPercent();
    CheckNVDA();
    CheckHWA();
}

function CloseSettings() {
    document.getElementById("settingscont").style.animation = "slideleft 0.2s forwards";
    document.getElementById("overlay").style.display = "none";
    setTimeout(function() {
        document.getElementById("settingscont").style.display = "none";
    }, 200)
}

function CloseWindow() {
    window.close();
}

var queue = [];
var running = false;

function TestNotification() {
    GetNotifyStyle();

    console.log("%cMain Test Notification added to queue.", "color: lightskyblue;");

    var notifyachievement;

    if (config.allpercent == "true") {
        notifyachievement = achievementunlocked + " (50%)";
    } else {
        notifyachievement = achievementunlocked;
    }

    var notifytitle = testtitle;
    var notifydesc = testdesc;
    var notifyicon = "test";

    const queueobj = {
        type: "main",
        width: notifywidth,
        height: notifyheight,
        style: config.notifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.screenshot,
        pos: config.notifypos,
        scale: config.scale,
        audio: document.getElementById("audio").src
    }

    queue.push(queueobj);

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000);
            return;
        } else {
            running = true;
            queue.shift(queueobj);
            NotifyWinPos();
            notifystyle = config.notifystyle;
            ipcRenderer.send('notifywin', queueobj);
            LoadSound();

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc);
            }

            ipcRenderer.once('notrunning', function() {
                running = false;
                if (queue.length == 0) {
                    console.log("Queue is empty.");
                } else {
                    console.log("Queue Position: " + queue.length);
                }
            });
        }
    }

    CheckIfRunning();
}

function TestRareNotification() {
    GetNotifyStyleRare();

    console.log("%cRare Test Notification added to queue.", "color: darkorchid;");

    var notifyachievement = rareachievementunlocked + " (0.0%)";
    var notifytitle = testtitle;
    var notifydesc = testdesc;
    var notifyicon = "test";

    const queueobj = {
        type: "rare",
        width: notifywidth,
        height: notifyheight,
        style: config.rarenotifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.rarescreenshot,
        pos: config.rarenotifypos,
        scale: config.rarescale,
        audio: document.getElementById("audiorare").src
    }

    queue.push(queueobj);

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000);
            return;
        } else {
            running = true;
            queue.shift(queueobj);
            NotifyWinPos();
            notifystyle = config.rarenotifystyle;
            ipcRenderer.send('notifywin', queueobj);
            LoadRareSound();

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc);
            }

            ipcRenderer.once('notrunning', function() {
                running = false;
                if (queue.length == 0) {
                    console.log("%cQueue is empty.", "color: grey;")
                } else {
                    console.log("%cQueue Position: " + queue.length, "color: grey;");
                }
            });
        }
    }

    CheckIfRunning();
}

var defaultsound = "./sound/notify.wav";

function OpenSoundFile() {
    if (config.soundmode == "file") {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = ".wav, .mp3, .flac, .ogg, .m4a, .aiff, .wma";

        input.onchange = function (selection) {
            var file = selection.target.files[0];
            document.getElementById("soundfile").innerHTML = file.path;
            config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            LoadSound();
        }
        
        input.click();
    } else {
        var input = document.createElement("input");
        input.type = "file";
        input.webkitdirectory = "true";

        input.onchange = function(selection) {
            var files = selection.target.files[0];
            var relpath = files.path.split("\\" + files.name);
            config["sounddir"] = relpath[0].replace("\\","\\\\").replace(":\\\\",":\\");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            LoadSound();
        }

        input.click();
    }
}

function OpenRareSoundFile() {
    if (config.raresoundmode == "file") {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = ".wav, .mp3, .flac, .ogg, .m4a, .aiff, .wma";

        input.onchange = function (selection) {
            var file = selection.target.files[0];
            document.getElementById("soundfilerare").innerHTML = file.path;
            config["raresound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            LoadRareSound();
        }
        
        input.click();
    } else {
        var input = document.createElement("input");
        input.type = "file";
        input.webkitdirectory = "true";

        input.onchange = function(selection) {
            var files = selection.target.files[0];
            var relpath = files.path.split("\\" + files.name);
            config["raresounddir"] = relpath[0].replace("\\","\\\\").replace(":\\\\",":\\");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            LoadRareSound();
        }

        input.click();
    }
}

document.getElementById("soundfile").ondragover = function(event) {
    event.preventDefault();

    document.getElementById("soundfile").style.background = "#327a48";
    document.getElementById("soundfile").innerHTML = addsound + " <img src='./icon/add_circle_green.svg' width='16px' style='vertical-align: -3px'>";
}

document.getElementById("soundfile").ondragleave = function(event) {
    event.preventDefault();
    document.getElementById("soundfile").style.background = "#3d3d3d";
    LoadSound();
}

document.getElementById("soundfile").ondragend = function(event) {
    event.preventDefault();
    document.getElementById("soundfile").style.background = "#3d3d3d";
    LoadSound();
}

function DropSound(event) {
    event.preventDefault();

    if (config.soundmode == "file") {
        for (var file of event.dataTransfer.files) {
            if (file.type == "audio/wav" || file.type == "audio/mpeg") {
                document.getElementById("soundfile").innerHTML = file.path;
                config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
                fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
                document.getElementById("soundfile").style.background = "#3d3d3d";
                LoadSound();
            } else {
                document.getElementById("soundfile").style.background = "#7a3232";
                document.getElementById("soundfile").innerHTML = "Invalid File Type <img src='./icon/cancel_red.svg' width='16px' style='vertical-align: -3px'>"
                setTimeout(function() {
                    document.getElementById("soundfile").style.background = "#3d3d3d";
                    LoadSound();
                }, 1000);
            }
        }
    } else {
        var folder = event.dataTransfer.files[0].path;
        config["sounddir"] = folder.replace("\\","\\\\").replace(":\\\\",":\\");
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("soundfile").style.background = "#3d3d3d";
        LoadSound();
    }
}

document.getElementById("soundfilerare").ondragover = function(event) {
    event.preventDefault();

    document.getElementById("soundfilerare").style.background = "#327a48";
    document.getElementById("soundfilerare").innerHTML = addsound + " <img src='./icon/add_circle_green.svg' width='16px' style='vertical-align: -3px'>";
}

document.getElementById("soundfilerare").ondragleave = function(event) {
    event.preventDefault();
    document.getElementById("soundfilerare").style.background = "#3d3d3d";
    LoadRareSound();
}

document.getElementById("soundfilerare").ondragend = function(event) {
    event.preventDefault();
    document.getElementById("soundfilerare").style.background = "#3d3d3d";
    LoadRareSound();
}

function DropRareSound(event) {
    event.preventDefault();

    for (var file of event.dataTransfer.files) {
        if (file.type == "audio/wav" || file.type == "audio/mpeg") {
            document.getElementById("soundfilerare").innerHTML = file.path;
            config["raresound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            document.getElementById("soundfilerare").style.background = "#3d3d3d";
            LoadRareSound();
        } else {
            document.getElementById("soundfilerare").style.background = "#7a3232";
            document.getElementById("soundfilerare").innerHTML = invalid + " <img src='./icon/cancel_red.svg' width='16px' style='vertical-align: -3px'>"
            setTimeout(function() {
                document.getElementById("soundfilerare").style.background = "#3d3d3d";
                LoadRareSound();
            }, 1000);
        }
    }
}

document.getElementById("imgselectcont").ondragover = function(event) {
    event.preventDefault();
    document.getElementById("imgselectcont").style.background = "rgba(50,205,50,0.2)";
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="./icon/add_circle_green.svg" width="16px" style="vertical-align: -3px">' + addimage;
}

document.getElementById("imgselectcont").ondragleave = function(event) {
    event.preventDefault();
    document.getElementById("imgselectcont").style.background = "#1b1b1b";
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">';
    GetBGType();
}

document.getElementById("imgselectcont").ondragend = function(event) {
    event.preventDefault();
    document.getElementById("imgselectcont").style.background = "#1b1b1b";
    document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">';
    GetBGType();
}

function DropImage(event) {
    event.preventDefault();

    for (var file of event.dataTransfer.files) {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
            config["img"] = (file.path).replace(/\\/g,"/");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            document.getElementById("imgselectcont").style.background = "#1b1b1b";
            document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">';
            GetBGType();
        } else {
            document.getElementById("imgselectcont").style.background = "rgba(255,0,0,0.2)";
            document.getElementById("imgselectinnerlbl").innerHTML = '<img src="./icon/cancel_red.svg" width="16px" style="vertical-align: -3px">Invalid File Type'
            setTimeout(function() {
                document.getElementById("imgselectcont").style.background = "#1b1b1b";
                document.getElementById("imgselectinnerlbl").innerHTML = '<img src="" id="imgselecticon" width="169px" height="96px">';
                GetBGType();
            }, 1000);
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        document.getElementById("webview").reload();
    }
}

document.getElementById("rareimgselectcont").ondragover = function(event) {
    event.preventDefault();
    document.getElementById("rareimgselectcont").style.background = "rgba(50,205,50,0.2)";
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="./icon/add_circle_green.svg" width="16px" style="vertical-align: -3px">Add Selected Image'
}

document.getElementById("rareimgselectcont").ondragleave = function(event) {
    event.preventDefault();
    document.getElementById("rareimgselectcont").style.background = "#1b1b1b";
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">';
    GetRareBGType();
}

document.getElementById("rareimgselectcont").ondragend = function(event) {
    event.preventDefault();
    document.getElementById("rareimgselectcont").style.background = "#1b1b1b";
    document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">';
    GetRareBGType();
}

function DropRareImage(event) {
    event.preventDefault();

    for (var file of event.dataTransfer.files) {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
            config["rareimg"] = (file.path).replace(/\\/g,"/");
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            document.getElementById("rareimgselectcont").style.background = "#1b1b1b";
            document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">';
            GetRareBGType();
        } else {
            document.getElementById("rareimgselectcont").style.background = "rgba(255,0,0,0.2)";
            document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="./icon/cancel_red.svg" width="16px" style="vertical-align: -3px">' + invalid;
            setTimeout(function() {
                document.getElementById("rareimgselectcont").style.background = "#1b1b1b";
                document.getElementById("rareimgselectinnerlbl").innerHTML = '<img src="" id="rareimgselecticon" width="169px" height="96px">';
                GetRareBGType();
            }, 1000);
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        document.getElementById("webviewrare").reload();
    }
}

function ShowMouseWheelL() {
    document.getElementById("mousecontL").style.display = "flex";
    document.getElementById("mousecontL").style.animation = "fadein 1s forwards";
    document.getElementById("arrowupL").style.animation = "moveup 1s alternate infinite";
    document.getElementById("arrowdownL").style.animation = "movedown 1s alternate infinite";
    document.getElementById("mousewheelL").style.animation = "fadein 0.25s alternate infinite";
}

function HideMouseWheelL() {
    document.getElementById("mousecontL").style.display = "none";
}

function ShowMouseWheelR() {
    document.getElementById("mousecontR").style.display = "flex";
    document.getElementById("mousecontR").style.animation = "fadein 1s forwards";
    document.getElementById("arrowupR").style.animation = "moveup 1s alternate infinite";
    document.getElementById("arrowdownR").style.animation = "movedown 1s alternate infinite";
    document.getElementById("mousewheelR").style.animation = "fadein 0.25s alternate infinite";
}

function HideMouseWheelR() {
    document.getElementById("mousecontR").style.display = "none";
}

function ShowMouseWheelRareL() {
    document.getElementById("mousecontrareL").style.display = "flex";
    document.getElementById("mousecontrareL").style.animation = "fadein 1s forwards";
    document.getElementById("arrowuprareL").style.animation = "moveup 1s alternate infinite";
    document.getElementById("arrowdownrareL").style.animation = "movedown 1s alternate infinite";
    document.getElementById("mousewheelrareL").style.animation = "fadein 0.25s alternate infinite";
}

function HideMouseWheelRareL() {
    document.getElementById("mousecontrareL").style.display = "none";
}

function ShowMouseWheelRareR() {
    document.getElementById("mousecontrareR").style.display = "flex";
    document.getElementById("mousecontrareR").style.animation = "fadein 1s forwards";
    document.getElementById("arrowuprareR").style.animation = "moveup 1s alternate infinite";
    document.getElementById("arrowdownrareR").style.animation = "movedown 1s alternate infinite";
    document.getElementById("mousewheelrareR").style.animation = "fadein 0.25s alternate infinite";
}

function HideMouseWheelRareR() {
    document.getElementById("mousecontrareR").style.display = "none";
}

if (config.soundmode == "file") {
    document.getElementById("searchhover").style.transform = "translateY(0px)";
    document.getElementById("searchhoverdir").style.transform = "translateY(50px)";
} else {
    document.getElementById("searchhover").style.transform = "translateY(-50px)";
    document.getElementById("searchhoverdir").style.transform = "translateY(0px)";
}

var counter = 0;

function CheckSoundSource() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var sounddir = fs.readdirSync(config.sounddir);
    const random = getRandomInt(sounddir.length);

    if (sounddir[random].includes(".wav") || sounddir[random].includes(".mp3") || sounddir[random].includes(".flac") || sounddir[random].includes(".ogg") || sounddir[random].includes(".m4a") || sounddir[random].includes(".aiff") || sounddir[random].includes(".wma")) {
        // !!! Fix this to use "path.join" instead of concat
        document.getElementById("audio").src = config.sounddir + "\\" + sounddir[random];
    } else {
        counter++;
        if (counter >= 50) {
            alert(novalidaudio + "\"" + sounddir + "\".");
            config["sounddir"] = "";
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            document.getElementById("soundfile").innerHTML = nofolder;
            document.getElementById("audio").src = defaultsound;
        } else {
            CheckSoundSource();
            setTimeout(function() {
                counter = 0;
            }, 2000);
        }
    }
}

function ChangeSoundMode(event) {
    if (config.soundmode == "file") {
        config["soundmode"] = "folder";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverdir").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverdir").style.transition = "0s";
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)";
                document.getElementById("searchhover").style.transform = "translateY(-50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverdir").style.transition = "0.2s";
                    document.getElementById("searchhoverdir").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhover").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverdir").style.transform = "translateY(0px)";
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverdir").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverdir").style.transition = "0s";
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)";
                document.getElementById("searchhover").style.transform = "translateY(50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverdir").style.transition = "0.2s";
                    document.getElementById("searchhoverdir").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhover").style.transform = "translateY(50px)";
                document.getElementById("searchhoverdir").style.transform = "translateY(0px)";
            }
        }

        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder;
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir;
        }
    } else {
        config["soundmode"] = "file";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhover").style.transform == "translateY(-50px)") {
                document.getElementById("searchhover").style.transition = "0s";
                document.getElementById("searchhover").style.transform = "translateY(50px)";
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)";
                setTimeout(function() {
                    document.getElementById("searchhover").style.transition = "0.2s";
                    document.getElementById("searchhover").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverdir").style.transform = "translateY(-50px)";
                document.getElementById("searchhover").style.transform = "translateY(0px)";
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhover").style.transform == "translateY(50px)") {
                document.getElementById("searchhover").style.transition = "0s";
                document.getElementById("searchhover").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)";
                setTimeout(function() {
                    document.getElementById("searchhover").style.transition = "0.2s";
                    document.getElementById("searchhover").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverdir").style.transform = "translateY(50px)";
                document.getElementById("searchhover").style.transform = "translateY(0px)";
            }
        }

        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound;
        } else {
            document.getElementById("soundfile").innerHTML = config.sound;
        }
    }
    LoadSound();
    SearchHover();
}

function SearchHover() {
    if (config.soundmode == "file") {
        document.getElementById("searchhover").src = "./icon/file_black.svg";
        document.getElementById("soundmodediv").innerHTML = "<img src='./icon/audiofile.svg' width='16px' style='margin: 0px 3px 3px 0px'>" + soundmode + " <span style='color: lightskyblue; margin-left: 3px'>" + file + "</span>";
        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound;
        } else {
            document.getElementById("soundfile").innerHTML = config.sound;
        }
    } else {
        document.getElementById("searchhoverdir").src = "./icon/dice_black.svg";
        document.getElementById("soundmodediv").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>";
        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder;
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir;
        }
    }
    document.getElementById("soundfile").style.borderTop = "none";
    document.getElementById("soundfile").style.background = "#101010";
}

function SearchOut() {
    if (config.soundmode == "file") {
        document.getElementById("searchhover").src = "./icon/file_white.svg";
    } else {
        document.getElementById("searchhoverdir").src = "./icon/dice.svg";
    }
    document.getElementById("soundfile").style.borderTop = "1px solid white";
    document.getElementById("soundfile").style.background = "linear-gradient(45deg, #2d2d2d 0%, #3d3d3d 50%, #2d2d2d 100%)";
}

function LoadSound() {
    if (config.soundmode == "file") {
        if (config.sound == "") {
            document.getElementById("soundfile").innerHTML = nosound;
            document.getElementById("audio").src = defaultsound;
        } else {
            document.getElementById("soundfile").innerHTML = config.sound;
            document.getElementById("audio").src = config.sound;
        }
    } else {
        if (config.sounddir == "") {
            document.getElementById("soundfile").innerHTML = nofolder;
            document.getElementById("audio").src = defaultsound;
        } else {
            document.getElementById("soundfile").innerHTML = config.sounddir;
            CheckSoundSource();
        }
    }
}

LoadSound();

function PreviewHover() {
    document.getElementById("previewhover").src = "./icon/volume_up_black.svg";
}

function PreviewOut() {
    document.getElementById("previewhover").src = "./icon/volume_up_white.svg";
}

function PreviewSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "none";
    document.getElementById("stop").style.display = "flex";
    LoadSound();
    audio.play();
    audio.addEventListener('ended', function () {
        document.getElementById("preview").style.display = "flex";
        document.getElementById("stop").style.display = "none";
    });
}

function StopSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "flex";
    document.getElementById("stop").style.display = "none";
    LoadSound();
    audio.pause();
    audio.currentTime = 0;
}

if (config.raresoundmode == "file") {
    document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/audiofile.svg'>" + soundmode + "<span style='color: lightskyblue'>" + file + "</span>";
    document.getElementById("searchhoverrare").style.transform = "translateY(0px)";
    document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)";
} else {
    document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>";
    document.getElementById("searchhoverrare").style.transform = "translateY(-50px)";
    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)";
}

function CheckRareSoundSource() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var raresounddir = fs.readdirSync(config.raresounddir);
    const random = getRandomInt(raresounddir.length);

    if (raresounddir[random].includes(".wav") || raresounddir[random].includes(".mp3") || raresounddir[random].includes(".flac") || raresounddir[random].includes(".ogg") || raresounddir[random].includes(".m4a") || raresounddir[random].includes(".aiff") || raresounddir[random].includes(".wma")) {
        // !!! Fix this to use "path.join" instead of concat
        document.getElementById("audiorare").src = config.raresounddir + "\\" + raresounddir[random];
    } else {
        counter++;
        if (counter >= 50) {
            alert(novalidaudio + "\"" + raresounddir + "\".");
            config["raresounddir"] = "";
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            document.getElementById("soundfilerare").innerHTML = nofolder;
            document.getElementById("audiorare").src = defaultsound;
        } else {
            CheckRareSoundSource();
            setTimeout(function() {
                counter = 0;
            }, 2000);
        }
    }
}

function ChangeRareSoundMode(event) {
    if (config.raresoundmode == "file") {
        config["raresoundmode"] = "folder";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverdirrare").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverdirrare").style.transition = "0s";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)";
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverdirrare").style.transition = "0.2s";
                    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)";
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverdirrare").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverdirrare").style.transition = "0s";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverdirrare").style.transition = "0.2s";
                    document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(0px)";
            }
        }

        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir;
        }
    } else {
        config["raresoundmode"] = "file";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
        if (event.deltaY < 0) {
            if (document.getElementById("searchhoverrare").style.transform == "translateY(-50px)") {
                document.getElementById("searchhoverrare").style.transition = "0s";
                document.getElementById("searchhoverrare").style.transform = "translateY(50px)";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverrare").style.transition = "0.2s";
                    document.getElementById("searchhoverrare").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverdirrare").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverrare").style.transform = "translateY(0px)";
            }
        } else if (event.deltaY > 0) {
            if (document.getElementById("searchhoverrare").style.transform == "translateY(50px)") {
                document.getElementById("searchhoverrare").style.transition = "0s";
                document.getElementById("searchhoverrare").style.transform = "translateY(-50px)";
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)";
                setTimeout(function() {
                    document.getElementById("searchhoverrare").style.transition = "0.2s";
                    document.getElementById("searchhoverrare").style.transform = "translateY(0px)";
                }, 10);
            } else {
                document.getElementById("searchhoverdirrare").style.transform = "translateY(50px)";
                document.getElementById("searchhoverrare").style.transform = "translateY(0px)";
            }
        }

        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound;
        }
    }
    LoadRareSound();
    SearchRareHover();
}

function SearchRareHover() {
    if (config.raresoundmode == "file") {
        document.getElementById("searchhoverrare").src = "./icon/file_black.svg";
        document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/audiofile.svg' width='16px' style='margin: 0px 3px 3px 0px'>" + soundmode + "<span style='color: lightskyblue; margin-left: 3px'>" + file + "</span>";
        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound;
        }
    } else {
        document.getElementById("searchhoverdirrare").src = "./icon/dice_black.svg";
        document.getElementById("soundmodedivrare").innerHTML = "<img src='./icon/dice.svg' width='16px' style='margin-right: 5px'>" + soundmode + "<span style='-webkit-background-clip: text; color: transparent; background-image: linear-gradient(90deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde); background-size: 400%; animation: glow 5s linear infinite; margin-left: 3px'>" + randomised + "</span>";
        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir;
        }
    }
    document.getElementById("soundfilerare").style.borderTop = "none";
    document.getElementById("soundfilerare").style.background = "#101010";
}

function SearchRareOut() {
    if (config.raresoundmode == "file") {
        document.getElementById("searchhoverrare").src = "./icon/file_white.svg";
    } else {
        document.getElementById("searchhoverdirrare").src = "./icon/dice.svg";
    }
    document.getElementById("soundfilerare").style.borderTop = "1px solid white";
    document.getElementById("soundfilerare").style.background = "linear-gradient(45deg, #2d2d2d 0%, #3d3d3d 50%, #2d2d2d 100%)";
}

function LoadRareSound() {
    if (config.raresoundmode == "file") {
        if (config.raresound == "") {
            document.getElementById("soundfilerare").innerHTML = nosound;
            document.getElementById("audiorare").src = defaultsound;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresound;
            document.getElementById("audiorare").src = config.raresound;
        }
    } else {
        if (config.raresounddir == "") {
            document.getElementById("soundfilerare").innerHTML = nofolder;
            document.getElementById("audiorare").src = defaultsound;
        } else {
            document.getElementById("soundfilerare").innerHTML = config.raresounddir;
            CheckRareSoundSource();
        }
    }
}

LoadRareSound();

function PreviewRareHover() {
    document.getElementById("previewhoverrare").src = "./icon/volume_up_black.svg";
}

function PreviewRareOut() {
    document.getElementById("previewhoverrare").src = "./icon/volume_up_white.svg";
}

function PreviewRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "none";
    document.getElementById("stoprare").style.display = "flex";
    LoadRareSound();
    audiorare.play();
    audiorare.addEventListener('ended', function () {
        document.getElementById("previewrare").style.display = "flex";
        document.getElementById("stoprare").style.display = "none";
    });
}

function StopRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "flex";
    document.getElementById("stoprare").style.display = "none";
    LoadRareSound();
    audiorare.pause();
    audiorare.currentTime = 0;
}

var username;

function GetPlayerName() {
    var apikey = config.apikey;
    var steam64id = config.steam64id;
    var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
    
    if (!apikey || !steam64id) {
        document.getElementById("username").innerHTML = nouser;
        document.getElementById("username").style.color = "red";
        document.getElementById("statusdot").src = "./icon/dot_red.svg";
    } else {
        fetch(apiurl).then(response => response.json()).then((data) => {
            username = data.response.players[0].personaname;
            document.getElementById("username").innerHTML = data.response.players[0].personaname;

            if (process.platform == "win32") {
                launcher["user"] = data.response.players[0].personaname;
                fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","launcher.json"), JSON.stringify(launcher, null, 2));
            }

            document.getElementById("username").style.color = "white";
            document.getElementById("statusdot").src = "./icon/dot_green.svg";
        }).catch(error => {
            document.getElementById("username").innerHTML = nouser;
            document.getElementById("username").style.color = "red";
            document.getElementById("statusdot").src = "./icon/dot_red.svg";

            console.log("%USERNAME ERROR: " + error, "color: red")
        });
    }
}

function CheckNowTracking() {
    if (config.tracking == "true") {
        document.getElementById("trackingbox").checked = true;
        document.getElementById("trackopacity").style.opacity = "1";
        document.getElementById("trackopacityslider").style.pointerEvents = "auto";
    } else {
        document.getElementById("trackingbox").checked = false;
        document.getElementById("trackopacity").style.opacity = "0.5";
        document.getElementById("trackopacityslider").style.pointerEvents = "none";
    }
}

function ToggleNowTracking() {
    if (config.tracking == "false") {
        config["tracking"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["tracking"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckNowTracking();
}

document.getElementById("trackopacityslider").value = config.trackopacity;
document.getElementById("trackopacityvalue").innerHTML = config.trackopacity;

function SetTrackOpacity() {
    config["trackopacity"] = document.getElementById("trackopacityslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
}

function CheckSoundOnlyMode() {
    if (config.soundonly == "true") {
        document.getElementById("soundonlybox").checked = true;
    } else {
        document.getElementById("soundonlybox").checked = false;
    }
}

function ToggleSoundOnlyMode() {
    if (config.soundonly == "false") {
        config["soundonly"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["soundonly"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckSoundOnlyMode();
}

function OpenAPILink() {
    ipcRenderer.send('openapilink');
}

function OpenSteam64Link() {
    ipcRenderer.send('opensteam64link');
}

function CheckConfig() {
    if (config.apikey == "") {
        document.getElementById("apibox").value = null;
    } else {
        document.getElementById("apibox").value = config.apikey;
    }

    if (config.steam64id == "") {
        document.getElementById("steam64box").value = null;
    } else {
        document.getElementById("steam64box").value = config.steam64id;
    }
}

function CheckShortcut() {
    if (fs.existsSync(shortcut)) {
        document.getElementById("desktopbox").checked = true;
    } else {
        document.getElementById("desktopbox").checked = false;
    }
}

/////////////////////////////////////////////////////////////////////////////
// TO DO: Edit for Linux/MacOS - don't use Powershell for these platforms  //
// EDIT: Removed option at script start instead                            //
/////////////////////////////////////////////////////////////////////////////
function CreateDesktopShortcut() {
    CheckShortcut();
    if (fs.existsSync(shortcut)) {
        document.getElementById("desktopbox").checked = true;
    } else {
        var desktopspawner = spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + shortcut + `'); $shortcut.IconLocation = '` + path.join(localappdata,"Steam Achievement Notifier (V1.8)","img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + launcher.path + `'; $shortcut.Save(); $sc = "steam achievement notifier (V${thisver})"; $txtinfo = (Get-Culture).TextInfo; $scfix = $txtinfo.ToTitleCase($sc); Rename-Item -Path "` + shortcut + `" -NewName "$scfix.lnk"`]);
        desktopspawner.stderr.on('data', (err) => {
            console.log(`%cError: %cUnable to create Desktop Shortcut:\n%c${err}`, "color: red", "color: white", "color: deeppink")
        })
        desktopspawner.on('close', (code) => {
            if (code == 0) {
                console.log(`%cDesktop shortcut created.`, "color: seagreen")
            } else {
                console.log(`%cError creating Desktop shortcut!`, "color: darkred")
            }
        })
        document.getElementById("desktopbox").checked = true;
    }
}

function ShowAPI() {
    if (document.getElementById("apibox").type == "password") {
        document.getElementById("apibox").type = "text";
        document.getElementById("eye").src = "./icon/visibility.svg";
    } else {
        document.getElementById("apibox").type = "password";
        document.getElementById("eye").src = "./icon/visibility_off.svg";
    }
}

function GetAPIKey() {
    if (config.apikey == "") {
        document.getElementById("apibox").value = null;
        document.getElementById("apibox").style.color = "white";
    } else {
        document.getElementById("apibox").value = config.apikey;
        document.getElementById("apibox").style.color = "white";
    }
}

GetAPIKey();

function CheckAPIKey() {
    var apivalue = document.getElementById("apibox").value;
    if (apivalue == "" || apivalue == novalue) {
        document.getElementById("apibox").type = "text";
        document.getElementById("apibox").value = novalue;
        document.getElementById("apibox").style.color = "red";

        document.getElementById("apibox").addEventListener('click', function() {
            if (document.getElementById("apibox").value == novalue) {
                document.getElementById("apibox").value = null;
            }
        });

        document.getElementById("saveapi").addEventListener('click', function(){
            clearTimeout(apitimer);
        });

        var apitimer = setTimeout(function() {
            if (config.apikey == "") {
                document.getElementById("apibox").value = null;
                document.getElementById("apibox").style.color = "white";
                document.getElementById("apibox").type = "password";
            } else {
                document.getElementById("apibox").value = config.apikey;
                document.getElementById("apibox").style.color = "white";
                document.getElementById("apibox").type = "password";
            }
        }, 2000);
    } else {
        SaveAPIKey();
    }
}

function SaveAPIKey() {
    var apivalue = document.getElementById("apibox").value;
    config["apikey"] = apivalue.replace(/\s+/g, "");
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("apibox").value = apivalue;

    document.getElementById("saveapiimg").style.animation = "shrink 0.1s forwards";
    setTimeout(function() {
        document.getElementById("saveapiimg").style.display = "none";
        document.getElementById("apitick").style.display = "block";
        document.getElementById("apitick").style.animation = "shrinkrev 0.2s forwards";
        setTimeout(function() {
            document.getElementById("apitick").style.animation = "shrink 0.1s forwards";
            setTimeout(function() {
                document.getElementById("apitick").style.display = "none";
                document.getElementById("saveapiimg").style.transform = "scale(0%, 0%)";
                document.getElementById("saveapiimg").style.display = "block";
                document.getElementById("saveapiimg").style.animation = "shrinkrev 0.2s forwards";
            }, 200);
        }, 1000);
    }, 200);
    GetPlayerName();
    GetSteam3ID();
    GetSteamPath();
}

function GetSteam64ID() {
    if (config.steam64id == "") {
        document.getElementById("steam64box").value = null;
        document.getElementById("steam64box").style.color = "white";
    } else {
        document.getElementById("steam64box").value = config.steam64id;
        document.getElementById("steam64box").style.color = "white";
    }
}

GetSteam64ID();

function CheckSteam64ID() {
    var steam64value = document.getElementById("steam64box").value;
    if (steam64value == "" || steam64value == novalue) {
        document.getElementById("steam64box").value = novalue;
        document.getElementById("steam64box").style.color = "red";

        document.getElementById("steam64box").addEventListener('click', function() {
            if (document.getElementById("steam64box").value == novalue) {
                document.getElementById("steam64box").value = null;
                clearTimeout(steam64timer);
            }
        });

        document.getElementById("save64").addEventListener('click', function(){
            clearTimeout(steam64timer);
        });

        var steam64timer = setTimeout(function() {
            if (config.steam64id == "") {
                document.getElementById("steam64box").value = null;
                document.getElementById("steam64box").style.color = "white";
            } else {
                document.getElementById("steam64box").value = config.steam64id;
                document.getElementById("steam64box").style.color = "white";
            }
        }, 2000);
    } else {
        SaveSteam64ID();
    }
}

function SaveSteam64ID() {
    var steam64value = document.getElementById("steam64box").value;
    config["steam64id"] = steam64value.replace(/\s+/g, "");
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("steam64box").value = steam64value;
    
    document.getElementById("save64img").style.animation = "shrink 0.1s forwards";
    setTimeout(function() {
        document.getElementById("save64img").style.display = "none";
        document.getElementById("steam64tick").style.display = "block";
        document.getElementById("steam64tick").style.animation = "shrinkrev 0.2s forwards";
        setTimeout(function() {
            document.getElementById("steam64tick").style.animation = "shrink 0.1s forwards";
            setTimeout(function() {
                document.getElementById("steam64tick").style.display = "none";
                document.getElementById("save64img").style.transform = "scale(0%, 0%)";
                document.getElementById("save64img").style.display = "block";
                document.getElementById("save64img").style.animation = "shrinkrev 0.2s forwards";
            }, 200);
        }, 1000);
    }, 200);
    GetPlayerName();
    GetSteam3ID();
    GetSteamPath();
}

function ShowRareCheev() {
    var maincheev = document.getElementById("maincheevbtn");
    var rarecheev = document.getElementById("rarecheevbtn");
    var maindiv = document.getElementById("maindiv");
    var rarediv = document.getElementById("rarediv");

    maincheev.addEventListener('mouseover', function() {
        maincheev.style.opacity = 1;
    });
    maincheev.addEventListener('mouseleave', function() {
        maincheev.style.opacity = 0.5;
    });
    rarecheev.addEventListener('mouseover', function() {
        rarecheev.style.opacity = 1;
    });
    rarecheev.addEventListener('mouseleave', function() {
        rarecheev.style.opacity = 1;
    });

    maincheev.style.opacity = 0.5;
    maincheev.style.background = "rgba(32,62,122,1)";
    maincheev.style.color = "white";
    
    rarecheev.style.opacity = 1;
    rarecheev.style.background = "white";
    rarecheev.style.color = "black";

    maindiv.style.display = "none";
    rarediv.style.display = "flex";

    document.getElementById("mainimg").style.display = "none";
    document.getElementById("rareimg").style.display = "block";

    document.getElementById("username").style.background = "rebeccapurple";
    document.getElementById("steamimg").style.background = "rebeccapurple";
    document.getElementById("userempty").style.background = "rebeccapurple";

    document.getElementById("gamestatus").style.background = "rebeccapurple";
    document.getElementById("gameimg").style.background = "rebeccapurple";
    document.getElementById("gameempty").style.background = "rebeccapurple";
    
    tabtype = "rare";
}

function ShowMainCheev() {
    var maincheev = document.getElementById("maincheevbtn");
    var rarecheev = document.getElementById("rarecheevbtn");
    var maindiv = document.getElementById("maindiv");
    var rarediv = document.getElementById("rarediv");
    
    rarecheev.addEventListener('mouseover', function() {
        rarecheev.style.opacity = 1;
    });
    rarecheev.addEventListener('mouseleave', function() {
        rarecheev.style.opacity = 0.5;
    });
    maincheev.addEventListener('mouseover', function() {
        maincheev.style.opacity = 1;
    });
    maincheev.addEventListener('mouseleave', function() {
        maincheev.style.opacity = 1;
    });

    maincheev.style.opacity = 1;
    maincheev.style.background = "white";
    maincheev.style.color = "black";
    
    rarecheev.style.opacity = 0.5;
    rarecheev.style.background = "rgba(32,62,122,1)";
    rarecheev.style.color = "white";

    maindiv.style.display = "flex";
    rarediv.style.display = "none";

    document.getElementById("mainimg").style.display = "block";
    document.getElementById("rareimg").style.display = "none";

    document.getElementById("username").style.background = "rgba(32,62,122,1)";
    document.getElementById("steamimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("userempty").style.background = "rgba(32,62,122,1)";

    document.getElementById("gamestatus").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameempty").style.background = "rgba(32,62,122,1)";

    tabtype = "main";
}

function ShowMainTest() {
    document.getElementById("testrare").style.display = "none";
    document.getElementById("test").style.display = "flex";
}

function ShowRareTest() {
    document.getElementById("test").style.display = "none";
    document.getElementById("testrare").style.display = "flex";
}

function CheckScreenshot() {
    if (config.screenshot == "true") {
        document.getElementById("showscreenshotcheckbox").checked = true;
    } else {
        document.getElementById("showscreenshotcheckbox").checked = false;
    }
}

CheckScreenshot();

function CheckRareScreenshot() {
    if (config.rarescreenshot == "true") {
        document.getElementById("showscreenshotcheckboxrare").checked = true;
    } else {
        document.getElementById("showscreenshotcheckboxrare").checked = false;
    }
}

CheckRareScreenshot();

function ToggleScreenshot() {
    if (config.screenshot == "false") {
        config["screenshot"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["screenshot"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckScreenshot();
}

function CheckStartWin() {
    if (config.startwin == "true") {
        document.getElementById("startwinbox").checked = true;
    } else {
        document.getElementById("startwinbox").checked = false;
    }
}

/////////////////////////////////////////////////////////////////////////////////
// TO DO: Edit for Linux/MacOS - potentially remove option on these platforms  //
// EDIT: Removed at script start instead                                       //
/////////////////////////////////////////////////////////////////////////////////
function ToggleStartWin() {
    if (config.startwin == "false") {
        config["startwin"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        var startwinspawner = spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V" + thisver + ").lnk") + `'); $shortcut.IconLocation = '` + path.join(__dirname,"img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + launcher.path + `'; $shortcut.Save();`]);
        startwinspawner.stderr.on('data', (err) => {
            console.log(`%cError: %cUnable to create "Start with Windows" shortcut:\n%c${err}`, "color: red", "color: white", "color: deeppink")
        })
        startwinspawner.on('close', (code) => {
            if (code == 0) {
                console.log(`%cStartWin shortcut created.`, "color: seagreen")
            } else {
                console.log(`%cError creating StartWin shortcut!`, "color: darkred")
            }
        })
    } else {
        config["startwin"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        if (fs.existsSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup",`Steam Achievement Notifier (V${thisver}).lnk`))) {
            var startwinremover = spawn("powershell.exe",["-Command",`Remove-Item -Path '` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V" + thisver + ").lnk") + `'`]);
            startwinremover.stderr.on('data', (err) => {
                console.log(`%cError: %cUnable to remove "Start with Windows" shortcut:\n%c${err}`, "color: red", "color: white", "color: deeppink")
            })
            startwinremover.on('close', (code) => {
                if (code == 0) {
                    console.log(`%cStartWin shortcut removed.`, "color: seagreen")
                } else {
                    console.log(`%cError removing StartWin shortcut!`, "color: darkred")
                }
            })
        } else {
            console.log(`%cStartWin shortcut no longer exists in "shell:startup"!`, "color: darkred")
        }
    }
    CheckStartWin();
}

function CheckStartMin() {
    if (config.startmin == "true") {
        document.getElementById("startminbox").checked = true;
    } else {
        document.getElementById("startminbox").checked = false;
    }
}

function ToggleStartMin() {
    if (config.startmin == "false") {
        config["startmin"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["startmin"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckStartMin();
}

var appid;
var currgame = null;

var gamename;
var desc;

function KoFiIconChange() {
    document.getElementById("kofi").style.opacity = 1;
    document.getElementById("kofi").addEventListener("mouseleave", function() {
        document.getElementById("kofi").style.opacity = 0.5;
    })
}

function OpenKoFi() {
    ipcRenderer.send('kofi');
}

function DiscordIconChange() {
    document.getElementById("discord").style.opacity = 1;
    document.getElementById("discord").addEventListener("mouseleave", function() {
        document.getElementById("discord").style.opacity = 0.5;
    })
}

function OpenDiscord() {
    ipcRenderer.send('discord');
}

function GithubIconChange() {
    document.getElementById("github").style.opacity = 1;
    document.getElementById("github").addEventListener("mouseleave", function() {
        document.getElementById("github").style.opacity = 0.5;
    })
}

function ReportIssue() {
    ipcRenderer.send('report');
}

function LoadNotify() {
    if (config.notifypos == "topleft") {
        pos = "topleft";
        document.getElementById("topleft").style.opacity = "1";
    } else if (config.notifypos == "topcenter") {
        pos = "topcenter";
        document.getElementById("topcenter").style.opacity = "1";
    } else if (config.notifypos == "topright") {
        pos = "topright";
        document.getElementById("topright").style.opacity = "1";
    } else if (config.notifypos == "bottomleft") {
        pos = "bottomleft";
        document.getElementById("bottomleft").style.opacity = "1";
    } else if (config.notifypos == "bottomcenter") {
        pos = "bottomcenter";
        document.getElementById("bottomcenter").style.opacity = "1";
    } else if (config.notifypos == "bottomright") {
        pos = "bottomright";
        document.getElementById("bottomright").style.opacity = "1";
    }
}

function LoadNotifyRare() {
    if (config.rarenotifypos == "topleft") {
        rarepos = "topleft";
        document.getElementById("topleftrare").style.opacity = "1";
    } else if (config.rarenotifypos == "topcenter") {
        rarepos = "topcenter";
        document.getElementById("topcenterrare").style.opacity = "1";
    } else if (config.rarenotifypos == "topright") {
        rarepos = "topright";
        document.getElementById("toprightrare").style.opacity = "1";
    } else if (config.rarenotifypos == "bottomleft") {
        rarepos = "bottomleft";
        document.getElementById("bottomleftrare").style.opacity = "1";
    } else if (config.rarenotifypos == "bottomcenter") {
        rarepos = "bottomcenter";
        document.getElementById("bottomcenterrare").style.opacity = "1";
    } else if (config.rarenotifypos == "bottomright") {
        rarepos = "bottomright";
        document.getElementById("bottomrightrare").style.opacity = "1";
    }
}

LoadNotifyRare();

function ExpandCustomise() {
    document.getElementById("customiselbl").style.display = "flex";
    document.getElementById("customiseicon").src = "./icon/tune_black.svg";
    document.getElementById("customisecont").style.bottom = "64px";
    document.getElementById("customisecont").style.height = "38px";

    document.getElementById("test").style.width = "330px";
    document.getElementById("test").style.transition = "0.2s";
    document.getElementById("testrare").style.width = "330px";
    document.getElementById("testrare").style.transition = "0.2s";
}

function ShrinkCustomise() {
    document.getElementById("customiselbl").style.display = "none";
    document.getElementById("customiseicon").src = "./icon/tune_white.svg";
    document.getElementById("customisecont").style.bottom = "68px";
    document.getElementById("customisecont").style.height = "30px";

    document.getElementById("test").style.width = "490px";
    document.getElementById("test").style.transition = "0.2s";
    document.getElementById("testrare").style.width = "490px";
    document.getElementById("testrare").style.transition = "0.2s";
}

var tabtype = "main";

function ShowCustomise() {
    SetWebViewSrc();
    SetWebViewSrcRare();

    document.getElementById("bodycont").style.display = "none";
    document.getElementById("customisemenu").style.display = "flex";
    document.getElementById("close").onclick = function () { CloseCustomiser() };

    if (tabtype == "main") {
        ToggleMainTab();
    } else {
        ToggleRareTab();
    }

    GetBGType();
    LoadNotify();
}

function CloseCustomiser() {
    document.getElementById("bodycont").style.display = "flex";
    document.getElementById("customisemenu").style.display = "none";
    document.getElementById("webview").remove();
    document.getElementById("webviewrare").remove();
    document.getElementById("close").onclick = function () { CloseWindow() };

    ipcRenderer.send('checkdragwin');
}

function ReplayNotification() {
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webview").reload();
}

var paused = false;

function PauseNotification() {
    if (paused == false) {
        paused = true;
        document.getElementById("pause").src = "./icon/play_white.svg";
        document.getElementById("webview").send('pausenotify');
    } else {
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        document.getElementById("webview").send('playnotify');
    }
}

function ReplayRareNotification() {
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    document.getElementById("webviewrare").reload();
}

function PauseRareNotification() {
    if (paused == false) {
        paused = true;
        document.getElementById("pauserare").src = "./icon/play_white.svg";
        document.getElementById("webviewrare").send('pausenotify');
    } else {
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        document.getElementById("webviewrare").send('playnotify');
    }
}

function SetWebViewSrc() {
    var webviewelem = document.createElement("webview");

    if (config.notifystyle == "default") {
        webviewelem.src = "./notify/default/preview/defaultpreview.html";
    } else if (config.notifystyle == "xbox") {
        webviewelem.src = "./notify/xbox/preview/xboxpreview.html";
    } else if (config.notifystyle == "playstation") {
        webviewelem.src = "./notify/playstation/preview/playstationpreview.html";
    } else if (config.notifystyle == "ps5") {
        webviewelem.src = "./notify/ps5/preview/ps5preview.html";
    } else if (config.notifystyle == "windows") {
        webviewelem.src = "./notify/windows/preview/windowspreview.html";
    } else if (config.notifystyle == "xbox360") {
        webviewelem.src = "./notify/xbox360/preview/xbox360preview.html";
    } else if (config.notifystyle == "xqjan") {
        webviewelem.src = "./notify/xqjan/preview/xqjanpreview.html";
    }

    webviewelem.id = "webview";
    webviewelem.webpreferences = "nodeIntegration = true, contextIsolation = false";
    document.getElementById("notifypreview").appendChild(webviewelem);
}

function SetWebViewSrcRare() {
    var webviewelemrare = document.createElement("webview");

    if (config.rarenotifystyle == "default") {
        webviewelemrare.src = "./notify/default/rarepreview/defaultrarepreview.html";
    } else if (config.rarenotifystyle == "xbox") {
        webviewelemrare.src = "./notify/xbox/rarepreview/xboxrarepreview.html";
    } else if (config.rarenotifystyle == "playstation") {
        webviewelemrare.src = "./notify/playstation/rarepreview/playstationrarepreview.html";
    } else if (config.rarenotifystyle == "ps5") {
        webviewelemrare.src = "./notify/ps5/rarepreview/ps5rarepreview.html";
    } else if (config.rarenotifystyle == "windows") {
        webviewelemrare.src = "./notify/windows/rarepreview/windowsrarepreview.html";
    } else if (config.rarenotifystyle == "xbox360") {
        webviewelemrare.src = "./notify/xbox360/rarepreview/xbox360rarepreview.html";
    } else if (config.rarenotifystyle == "xqjan") {
        webviewelemrare.src = "./notify/xqjan/rarepreview/xqjanrarepreview.html";
    }

    webviewelemrare.id = "webviewrare";
    webviewelemrare.webpreferences = "nodeIntegration = true, contextIsolation = false";
    document.getElementById("notifypreviewrare").appendChild(webviewelemrare);
}

var notifywidth;
var notifyheight;

function SetNotifyStyle() {
    config["notifystyle"] = document.getElementById("customiserstyledropdown").value;
    ipcRenderer.send('storedragwin')

    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    CheckCustomPos();
}

function GetNotifyStyle() {
    document.getElementById("customiserstyledropdown").value = config.notifystyle;
    if (document.getElementById("customiserstyledropdown").value == "default") {
        if (config.screenshot == "true") {
            notifywidth = 300;
            notifyheight = 219;
        } else {
            notifywidth = 300;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/default/preview/defaultpreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "xbox") {
        if (config.screenshot == "true") {
            notifywidth = 315;
            notifyheight = 244;
        } else {
            notifywidth = 315;
            notifyheight = 65;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/xbox/preview/xboxpreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "playstation") {
        if (config.screenshot == "true") {
            notifywidth = 310;
            notifyheight = 224;
        } else {
            notifywidth = 310;
            notifyheight = 55;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/playstation/preview/playstationpreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "ps5") {
        if (config.screenshot == "true") {
            notifywidth = 340;
            notifyheight = 219;
        } else {
            notifywidth = 340;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/ps5/preview/ps5preview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "windows") {
        if (config.screenshot == "true") {
            notifywidth = 300;
            notifyheight = 279;
        } else {
            notifywidth = 300;
            notifyheight = 110;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/windows/preview/windowspreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "xbox360") {
        if (config.screenshot == "true") {
            notifywidth = 300;
            notifyheight = 219;
        } else {
            notifywidth = 300;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/xbox360/preview/xbox360preview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdown").value == "xqjan") {
        if (config.screenshot == "true") {
            notifywidth = 300;
            notifyheight = 239;
        } else {
            notifywidth = 300;
            notifyheight = 70;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webview").src = "./notify/xqjan/preview/xqjanpreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    }

    if (document.getElementById("customiserstyledropdown").value == "xbox" || document.getElementById("customiserstyledropdown").value == "ps5") {
        document.getElementById("iconselectlbl").style.display = "none";
        document.getElementById("iconselectcont").style.display = "none";
        document.getElementById("gameiconcont").style.display = "none";
    } else {
        document.getElementById("iconselectlbl").style.display = "flex";
        document.getElementById("iconselectcont").style.display = "flex";
        document.getElementById("gameiconcont").style.display = "flex";
    }
}

GetNotifyStyle();

function SetNotifyStyleRare() {
    config["rarenotifystyle"] = document.getElementById("customiserstyledropdownrare").value;
    ipcRenderer.send('storedragwin')

    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    CheckCustomPosRare();
}

document.getElementById("customiserstyledropdownrare").value = config.rarenotifystyle;

function GetNotifyStyleRare() {
    document.getElementById("customiserstyledropdownrare").value = config.rarenotifystyle;
    if (document.getElementById("customiserstyledropdownrare").value == "default") {
        if (config.rarescreenshot == "true") {
            notifywidth = 300;
            notifyheight = 219;
        } else {
            notifywidth = 300;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/default/rarepreview/defaultrarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "xbox") {
        if (config.rarescreenshot == "true") {
            notifywidth = 315;
            notifyheight = 244;
        } else {
            notifywidth = 315;
            notifyheight = 65;
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/xbox/rarepreview/xboxrarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "playstation") {
        if (config.rarescreenshot == "true") {
            notifywidth = 310;
            notifyheight = 224;
        } else {
            notifywidth = 310;
            notifyheight = 55;
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/playstation/rarepreview/playstationrarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "ps5") {
        if (config.rarescreenshot == "true") {
            notifywidth = 340;
            notifyheight = 219;
        } else {
            notifywidth = 340;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/ps5/rarepreview/ps5rarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "windows") {
        if (config.rarescreenshot == "true") {
            notifywidth = 300;
            notifyheight = 279;
        } else {
            notifywidth = 300;
            notifyheight = 110;
        }
        paused = false;
        document.getElementById("pauserare").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/windows/rarepreview/windowsrarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "xbox360") {
        if (config.rarescreenshot == "true") {
            notifywidth = 300;
            notifyheight = 219;
        } else {
            notifywidth = 300;
            notifyheight = 50;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/xbox360/rarepreview/xbox360rarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    } else if (document.getElementById("customiserstyledropdownrare").value == "xqjan") {
        if (config.rarescreenshot == "true") {
            notifywidth = 300;
            notifyheight = 239;
        } else {
            notifywidth = 300;
            notifyheight = 70;
        }
        paused = false;
        document.getElementById("pause").src = "./icon/pause_white.svg";
        try {
            document.getElementById("webviewrare").src = "./notify/xqjan/rarepreview/xqjanrarepreview.html";
        } catch (err) {
            // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
        }
    }

    if (document.getElementById("customiserstyledropdownrare").value == "xbox" || document.getElementById("customiserstyledropdownrare").value == "ps5") {
        document.getElementById("rareiconselectlbl").style.display = "none";
        document.getElementById("rareiconselectcont").style.display = "none";
        document.getElementById("gameiconcontrare").style.display = "none";
    } else {
        document.getElementById("rareiconselectlbl").style.display = "flex";
        document.getElementById("rareiconselectcont").style.display = "flex";
        document.getElementById("gameiconcontrare").style.display = "flex";
    }
}

GetNotifyStyleRare();

function SetBGType() {
    if (document.getElementById("customiserbgdropdown").value == "bgsolid") {
        config["bgtype"] = "bgsolid";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else if (document.getElementById("customiserbgdropdown").value == "bg") {
        config["bgtype"] = "bg";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else if (document.getElementById("customiserbgdropdown").value == "img") {
        config["bgtype"] = "img";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    GetBGType();
}

var pos = config.notifypos;
var rarepos = config.rarenotifypos;

function GetBGType() {
    if (config.bgtype == "bgsolid") {
        document.getElementById("customiserbgdropdown").value = "bgsolid";
        document.getElementById("colourslbl").style.display = "flex";
        document.getElementById("colour1").style.display = "flex";
        document.getElementById("colour1box").value = config.colour1;
        document.getElementById("colour2").style.display = "flex";
        document.getElementById("colour2box").value = config.colour2;
        document.getElementById("imgselectlbl").style.display = "none";
        document.getElementById("imgselectcont").style.display = "none";
    } else if (config.bgtype == "bg") {
        document.getElementById("customiserbgdropdown").value = "bg";
        document.getElementById("colourslbl").style.display = "flex";
        document.getElementById("colour1").style.display = "flex";
        document.getElementById("colour1box").value = config.colour1;
        document.getElementById("colour2").style.display = "flex";
        document.getElementById("colour2box").value = config.colour2;
        document.getElementById("imgselectlbl").style.display = "none";
        document.getElementById("imgselectcont").style.display = "none";
    } else if (config.bgtype == "img") {
        document.getElementById("customiserbgdropdown").value = "img";
        document.getElementById("colourslbl").style.display = "flex";
        document.getElementById("colour1").style.display = "none";
        document.getElementById("colour1box").value = config.colour1;
        document.getElementById("colour2").style.display = "none";
        document.getElementById("colour2box").value = config.colour2;
        document.getElementById("imgselectlbl").style.display = "flex";
        document.getElementById("imgselectcont").style.display = "flex";
        if (config.img == "default") {
            document.getElementById("imgselecticon").src = "./img/santextlogobg.png";
        } else {
            document.getElementById("imgselecticon").src = config.img;
        }
    }
    document.getElementById("textcolourbox").value = config.textcolour;
    document.getElementById("roundness").value = config.roundness;
    document.getElementById("roundnesspreview").style.borderRadius = (config.roundness * 0.4) + "px";
    document.getElementById("iconroundness").value = config.iconroundness;
    document.getElementById("iconroundnesspreview").style.borderRadius = (config.iconroundness * 0.6) + "px";
    if (config.icon == "" || config.icon == undefined) {
        document.getElementById("iconselecticon").src = "./img/sanlogosquare.svg";
    } else {
        document.getElementById("iconselecticon").src = config.icon;
    }
}

function SetRareBGType() {
    if (document.getElementById("customiserbgdropdownrare").value == "bgsolid") {
        config["rarebgtype"] = "bgsolid";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else if (document.getElementById("customiserbgdropdownrare").value == "bg") {
        config["rarebgtype"] = "bg";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else if (document.getElementById("customiserbgdropdownrare").value == "img") {
        config["rarebgtype"] = "img";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    GetRareBGType();
}

function GetRareBGType() {
    if (config.rarebgtype == "bgsolid") {
        document.getElementById("customiserbgdropdownrare").value = "bgsolid";
        document.getElementById("rarecolourslbl").style.display = "flex";
        document.getElementById("rarecolour1").style.display = "flex";
        document.getElementById("rarecolour1box").value = config.rarecolour1;
        document.getElementById("rarecolour2").style.display = "flex";
        document.getElementById("rarecolour2box").value = config.rarecolour2;
        document.getElementById("rareimgselectlbl").style.display = "none";
        document.getElementById("rareimgselectcont").style.display = "none";
    } else if (config.rarebgtype == "bg") {
        document.getElementById("customiserbgdropdownrare").value = "bg";
        document.getElementById("rarecolourslbl").style.display = "flex";
        document.getElementById("rarecolour1").style.display = "flex";
        document.getElementById("rarecolour1box").value = config.rarecolour1;
        document.getElementById("rarecolour2").style.display = "flex";
        document.getElementById("rarecolour2box").value = config.rarecolour2;
        document.getElementById("rareimgselectlbl").style.display = "none";
        document.getElementById("rareimgselectcont").style.display = "none";
    } else if (config.rarebgtype == "img") {
        document.getElementById("customiserbgdropdownrare").value = "img";
        document.getElementById("rarecolourslbl").style.display = "flex";
        document.getElementById("rarecolour1").style.display = "none";
        document.getElementById("rarecolour1box").value = config.rarecolour1;
        document.getElementById("rarecolour2").style.display = "none";
        document.getElementById("rarecolour2box").value = config.rarecolour2;
        document.getElementById("rareimgselectlbl").style.display = "flex";
        document.getElementById("rareimgselectcont").style.display = "flex";
        if (config.rareimg == "default") {
            document.getElementById("rareimgselecticon").src = "./img/santextlogobg.png";
        } else {
            document.getElementById("rareimgselecticon").src = config.rareimg;
        }
    }
    document.getElementById("raretextcolourbox").value = config.raretextcolour;
    document.getElementById("roundnessrare").value = config.rareroundness;
    document.getElementById("roundnesspreviewrare").style.borderRadius = (config.rareroundness * 0.4) + "px";
    document.getElementById("iconroundnessrare").value = config.rareiconroundness;
    document.getElementById("iconroundnesspreviewrare").style.borderRadius = (config.rareiconroundness * 0.6) + "px";
    if (config.rareicon == "" || config.rareicon == undefined) {
        document.getElementById("rareiconselecticon").src = "./img/sanlogosquare.svg";
    } else {
        document.getElementById("rareiconselecticon").src = config.rareicon;
    }
}

function NotifyWinPos() {
    if (pos == "bottomcenter") {
        ipcRenderer.send('bottom', config.notifystyle);
    } else if (pos == "bottomleft") {
        ipcRenderer.send('bottomleft', config.notifystyle);
    } else if (pos == "bottomright") {
        ipcRenderer.send('bottomright', config.notifystyle);
    } else if (pos == "topcenter") {
        ipcRenderer.send('top', config.notifystyle);
    } else if (pos == "topleft") {
        ipcRenderer.send('topleft', config.notifystyle);
    } else if (pos == "topright") {
        ipcRenderer.send('topright', config.notifystyle);
    }
}

function SetTopLeft() {
    pos = "topleft";
    document.getElementById("topleft").style.opacity = "1";
    document.getElementById("topcenter").style.opacity = "0.5";
    document.getElementById("topright").style.opacity = "0.5";
    document.getElementById("bottomleft").style.opacity = "0.5";
    document.getElementById("bottomcenter").style.opacity = "0.5";
    document.getElementById("bottomright").style.opacity = "0.5";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));   
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetTopCenter() {
    pos = "topcenter";
    document.getElementById("topleft").style.opacity = "0.5";
    document.getElementById("topcenter").style.opacity = "1";
    document.getElementById("topright").style.opacity = "0.5";
    document.getElementById("bottomleft").style.opacity = "0.5";
    document.getElementById("bottomcenter").style.opacity = "0.5";
    document.getElementById("bottomright").style.opacity = "0.5";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetTopRight() {
    pos = "topright";
    document.getElementById("topleft").style.opacity = "0.5";
    document.getElementById("topcenter").style.opacity = "0.5";
    document.getElementById("topright").style.opacity = "1";
    document.getElementById("bottomleft").style.opacity = "0.5";
    document.getElementById("bottomcenter").style.opacity = "0.5";
    document.getElementById("bottomright").style.opacity = "0.5";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetBottomLeft() {
    pos = "bottomleft";
    document.getElementById("topleft").style.opacity = "0.5";
    document.getElementById("topcenter").style.opacity = "0.5";
    document.getElementById("topright").style.opacity = "0.5";
    document.getElementById("bottomleft").style.opacity = "1";
    document.getElementById("bottomcenter").style.opacity = "0.5";
    document.getElementById("bottomright").style.opacity = "0.5";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetBottomCenter() {
    pos = "bottomcenter";
    document.getElementById("topleft").style.opacity = "0.5";
    document.getElementById("topcenter").style.opacity = "0.5";
    document.getElementById("topright").style.opacity = "0.5";
    document.getElementById("bottomleft").style.opacity = "0.5";
    document.getElementById("bottomcenter").style.opacity = "1";
    document.getElementById("bottomright").style.opacity = "0.5";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetBottomRight() {
    pos = "bottomright";
    document.getElementById("topleft").style.opacity = "0.5";
    document.getElementById("topcenter").style.opacity = "0.5";
    document.getElementById("topright").style.opacity = "0.5";
    document.getElementById("bottomleft").style.opacity = "0.5";
    document.getElementById("bottomcenter").style.opacity = "0.5";
    document.getElementById("bottomright").style.opacity = "1";
    config["notifypos"] = pos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

function SetTopLeftRare() {
    rarepos = "topleft";
    document.getElementById("topleftrare").style.opacity = "1";
    document.getElementById("topcenterrare").style.opacity = "0.5";
    document.getElementById("toprightrare").style.opacity = "0.5";
    document.getElementById("bottomleftrare").style.opacity = "0.5";
    document.getElementById("bottomcenterrare").style.opacity = "0.5";
    document.getElementById("bottomrightrare").style.opacity = "0.5";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));   
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetTopCenterRare() {
    rarepos = "topcenter";
    document.getElementById("topleftrare").style.opacity = "0.5";
    document.getElementById("topcenterrare").style.opacity = "1";
    document.getElementById("toprightrare").style.opacity = "0.5";
    document.getElementById("bottomleftrare").style.opacity = "0.5";
    document.getElementById("bottomcenterrare").style.opacity = "0.5";
    document.getElementById("bottomrightrare").style.opacity = "0.5";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetTopRightRare() {
    rarepos = "topright";
    document.getElementById("topleftrare").style.opacity = "0.5";
    document.getElementById("topcenterrare").style.opacity = "0.5";
    document.getElementById("toprightrare").style.opacity = "1";
    document.getElementById("bottomleftrare").style.opacity = "0.5";
    document.getElementById("bottomcenterrare").style.opacity = "0.5";
    document.getElementById("bottomrightrare").style.opacity = "0.5";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetBottomLeftRare() {
    rarepos = "bottomleft";
    document.getElementById("topleftrare").style.opacity = "0.5";
    document.getElementById("topcenterrare").style.opacity = "0.5";
    document.getElementById("toprightrare").style.opacity = "0.5";
    document.getElementById("bottomleftrare").style.opacity = "1";
    document.getElementById("bottomcenterrare").style.opacity = "0.5";
    document.getElementById("bottomrightrare").style.opacity = "0.5";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetBottomCenterRare() {
    rarepos = "bottomcenter";
    document.getElementById("topleftrare").style.opacity = "0.5";
    document.getElementById("topcenterrare").style.opacity = "0.5";
    document.getElementById("toprightrare").style.opacity = "0.5";
    document.getElementById("bottomleftrare").style.opacity = "0.5";
    document.getElementById("bottomcenterrare").style.opacity = "1";
    document.getElementById("bottomrightrare").style.opacity = "0.5";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetBottomRightRare() {
    rarepos = "bottomright";
    document.getElementById("topleftrare").style.opacity = "0.5";
    document.getElementById("topcenterrare").style.opacity = "0.5";
    document.getElementById("toprightrare").style.opacity = "0.5";
    document.getElementById("bottomleftrare").style.opacity = "0.5";
    document.getElementById("bottomcenterrare").style.opacity = "0.5";
    document.getElementById("bottomrightrare").style.opacity = "1";
    config["rarenotifypos"] = rarepos;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

function SetColour1() {
    document.getElementById("colour1box").addEventListener('change', function() {
        config["colour1"] = document.getElementById("colour1box").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetBGType();
}

function SetColour2() {
    document.getElementById("colour2box").addEventListener('change', function() {
        config["colour2"] = document.getElementById("colour2box").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetBGType();
}

function SetTextColour() {
    document.getElementById("textcolourbox").addEventListener('change', function() {
        config["textcolour"] = document.getElementById("textcolourbox").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetBGType();
}

function SetRareColour1() {
    document.getElementById("rarecolour1box").addEventListener('change', function() {
        config["rarecolour1"] = document.getElementById("rarecolour1box").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetRareBGType();
}

function SetRareColour2() {
    document.getElementById("rarecolour2box").addEventListener('change', function() {
        config["rarecolour2"] = document.getElementById("rarecolour2box").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetRareBGType();
}

function SetRareTextColour() {
    document.getElementById("raretextcolourbox").addEventListener('change', function() {
        config["raretextcolour"] = document.getElementById("raretextcolourbox").value;
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    });
    GetRareBGType();
}

document.getElementById("roundness").addEventListener('input', function() {
    config["roundness"] = document.getElementById("roundness").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    GetBGType();
});

document.getElementById("roundnessrare").addEventListener('input', function() {
    config["rareroundness"] = document.getElementById("roundnessrare").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    GetRareBGType();
});

document.getElementById("iconroundness").addEventListener('input', function() {
    config["iconroundness"] = document.getElementById("iconroundness").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    GetBGType();
});

document.getElementById("iconroundnessrare").addEventListener('input', function() {
    config["rareiconroundness"] = document.getElementById("iconroundnessrare").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    GetRareBGType();
});

document.getElementById("imgselect").onchange = function(selection) {
    var file = selection.target.files[0];
    config["img"] = (file.path).replace(/\\/g,"/");
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    PauseNotification();
    GetBGType();
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

document.getElementById("rareimgselect").onchange = function(selection) {
    var file = selection.target.files[0];
    config["rareimg"] = (file.path).replace(/\\/g,"/");
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    GetRareBGType();
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

// ICON SELECT
document.getElementById("iconselect").onchange = function(selection) {
    var file = selection.target.files[0];
    file = file.path;
    try {
        config["icon"] = file.replace(/\\/g,"/");
    } catch {}
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    PauseNotification();
    GetBGType();
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    ReplayNotification();
}

// RARE ICON SELECT
document.getElementById("rareiconselect").onchange = function(selection) {
    var file = selection.target.files[0];
    file = file.path;
    try {
        config["rareicon"] = file.replace(/\\/g,"/");
    } catch {}
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    GetRareBGType();
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    ReplayRareNotification();
}

document.getElementById("displaytimeslider").value = config.displaytime;
document.getElementById("displaytimevalue").innerHTML = config.displaytime + "s";

function SetDisplayTime() {
    var displaytime = document.getElementById("displaytimeslider").value;
    config["displaytime"] = displaytime;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webview").reload();
}

document.getElementById("displaytimesliderrare").value = config.raredisplaytime;
document.getElementById("displaytimevaluerare").innerHTML = config.raredisplaytime + "s";

function SetRareDisplayTime() {
    var displaytime = document.getElementById("displaytimesliderrare").value;
    config["raredisplaytime"] = displaytime;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    document.getElementById("webviewrare").reload();
}

// !!! TESTING !!!
function OpenDevTools() {
    document.getElementsByTagName('webview')[0].openDevTools()
}

function ToggleShowScreenshot() {
    if (config.screenshot == "true") {
        config["screenshot"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["screenshot"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    document.getElementById("webview").reload();
}

function ToggleShowRareScreenshot() {
    if (config.rarescreenshot == "true") {
        config["rarescreenshot"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["rarescreenshot"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    document.getElementById("webviewrare").reload();
}

function ToggleMainTab() {
    GetBGType();
    GetNotifyStyle();

    document.getElementById("customisermaintab").addEventListener('mouseover', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customisermaintab").addEventListener('mouseleave', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customiserraretab").addEventListener('mouseover', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customiserraretab").addEventListener('mouseleave', function() {
        this.style.opacity = "0.5";
    })

    document.getElementById("customisermaintab").style.background = "white";
    document.getElementById("customisermaintab").style.color = "black";
    document.getElementById("customisermaintab").style.opacity = "1";

    document.getElementById("customiserraretab").style.background = "rgba(32,66,122,1)";
    document.getElementById("customiserraretab").style.color = "white";
    document.getElementById("customiserraretab").style.opacity = "0.5";

    document.getElementById("maintab").style.display = "block";
    document.getElementById("raretab").style.display = "none";
    document.getElementById("notifypreview").style.display = "flex";
    document.getElementById("notifypreviewrare").style.display = "none";
    document.getElementById("notifybtncont").style.display = "flex";
    document.getElementById("notifybtncontrare").style.display = "none";
    try {
        document.getElementById("webview").reload();
    } catch (err) {
        // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
    }
}

document.getElementById("customisermaintab").addEventListener('click', function() {
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
});

document.getElementById("notifyplay").addEventListener('click', function() {
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
});

document.getElementById("customiserstyledropdown").addEventListener('change', function() {
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
});

function ToggleRareTab() {
    GetRareBGType();
    GetNotifyStyleRare();

    document.getElementById("customiserraretab").addEventListener('mouseover', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customiserraretab").addEventListener('mouseleave', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customisermaintab").addEventListener('mouseover', function() {
        this.style.opacity = "1";
    })

    document.getElementById("customisermaintab").addEventListener('mouseleave', function() {
        this.style.opacity = "0.5";
    })

    document.getElementById("customiserraretab").style.background = "white";
    document.getElementById("customiserraretab").style.color = "black";
    document.getElementById("customiserraretab").style.opacity = "1";

    document.getElementById("customisermaintab").style.background = "rgba(32,66,122,1)";
    document.getElementById("customisermaintab").style.color = "white";
    document.getElementById("customisermaintab").style.opacity = "0.5";

    document.getElementById("maintab").style.display = "none";
    document.getElementById("raretab").style.display = "block";
    document.getElementById("notifypreview").style.display = "none";
    document.getElementById("notifypreviewrare").style.display = "flex";
    document.getElementById("notifybtncont").style.display = "none";
    document.getElementById("notifybtncontrare").style.display = "flex";
    try {
        document.getElementById("webviewrare").reload();
    } catch (err) {
        // console.log("%cWEBVIEW ERROR: " + err, "color: orange")
    }
}

document.getElementById("customiserraretab").addEventListener('click', function() {
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
});

document.getElementById("notifyplayrare").addEventListener('click', function() {
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
});

document.getElementById("customiserstyledropdownrare").addEventListener('change', function() {
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
});

var configkeybind = config.keybind;
configkeybind = configkeybind.replace("KEY_","").replace("PAD_","Num ");
document.getElementById("steamkeybind").innerHTML = configkeybind;

function KeybindHover() {
    document.getElementById("steamkeybind").style.background = "white";
    document.getElementById("steamkeybind").style.color = "black";
}

function KeybindOut() {
    document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
    document.getElementById("steamkeybind").style.color = "white";
}

function SetKeybind() {
    document.getElementById("steamkeybind").style.animation = "bluetowhite 0.5s alternate infinite";
    document.getElementById("steamkeybind").innerHTML = presskey;
    
    var keybind;

    document.onkeydown = function KeyDown(event) {
        var keymap = new Map([
            ["Control","invalid"],
            ["Shift","invalid"],
            ["Alt","invalid"],
            ["AltGraph","invalid"],
            ["Meta","invalid"],
            ["`","invalid"],
            ["NumpadAdd","plus"],
            ["NumpadSubtract","minus"],
            ["NumpadDecimal","decimal"],
            ["NumpadMultiply","multiply"],
            ["NumpadDivide","divide"]
        ])

        function GetKeybind(code, key) {
            if (keymap.has(code)) {
                keybind = keymap.get(code)
            } else if (keymap.has(key)) {
                if (keymap.get(key) == "invalid") {
                    keybind = "invalid"
                } else {
                    keybind = keymap.get(key)
                }
            } else {
                if (code.includes("Numpad") && code != "NumpadEnter") {
                    keybind = "Num " + key
                } else {
                    keybind = key
                }
            }

            keybind = keybind.toUpperCase()
        }

        GetKeybind(event.code, event.key)
        
        if (keybind != "INVALID") {
            config["keybind"] = keybind;
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            
            document.getElementById("steamkeybind").innerHTML = keybind;
            document.getElementById("steamkeybind").style.animation = "none";
            document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
            document.getElementById("steamkeybind").style.color = "white";
        } else {
            // TO DO: Change "steamkeybind" element background to red + "Invalid"
            // Reset back to previous value in config["keybind"]
            alert("Invalid key!")
            document.getElementById("steamkeybind").innerHTML = config.keybind;
            document.getElementById("steamkeybind").style.animation = "none";
            document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
            document.getElementById("steamkeybind").style.color = "white";
        }
    
        document.onkeydown = null;
    }
}

// !!! OG SetKeybind (Pre-1.84)
// function SetKeybind() {
//     document.getElementById("steamkeybind").style.animation = "bluetowhite 0.5s alternate infinite";
//     document.getElementById("steamkeybind").innerHTML = presskey;

//     document.onkeydown = function KeyDown(event) {
//         var key = event.key;

//         config["keybind"] = key;
//         fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
//         document.getElementById("steamkeybind").innerHTML = key.toUpperCase();
//         document.getElementById("steamkeybind").style.animation = "none";
//         document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
//         document.getElementById("steamkeybind").style.color = "white";
    
//         document.onkeydown = null;
//     }
// }

// !!! 1.84 VDF File Testing !!!
// function SetKeybind() {
//     document.getElementById("steamkeybind").style.animation = "bluetowhite 0.5s alternate infinite";
//     document.getElementById("steamkeybind").innerHTML = presskey;
    
//     var keybind;

//     document.onkeydown = function KeyDown(event) {
//         var keymap = new Map([
//             [".","period"],
//             [";","semicolon"],
//             [",","comma"],
//             ["'","backquote"],
//             ["[","lbracket"],
//             ["]","rbracket"],
//             ["#","apostrophe"],
//             ["=","equal"],
//             ["-","minus"],
//             [" ","space"],
//             ["\\","backslash"],
//             ["/","slash"],
//             ["ArrowUp","up"],
//             ["ArrowDown","down"],
//             ["ArrowLeft","left"],
//             ["ArrowRight","right"],
//             ["Control","invalid"],
//             ["Shift","invalid"],
//             ["Alt","invalid"],
//             ["AltGraph","invalid"],
//             ["Meta","invalid"],
//             ["`","invalid"],
//             ["NumpadAdd","plus"],
//             ["NumpadSubtract","minus"],
//             ["NumpadDecimal","decimal"],
//             ["NumpadMultiply","multiply"],
//             ["NumpadDivide","divide"],
//             ["Numpad0","PAD_0"],
//             ["Numpad1","PAD_1"],
//             ["Numpad2","PAD_2"],
//             ["Numpad3","PAD_3"],
//             ["Numpad4","PAD_4"],
//             ["Numpad5","PAD_5"],
//             ["Numpad6","PAD_6"],
//             ["Numpad7","PAD_7"],
//             ["Numpad8","PAD_8"],
//             ["Numpad9","PAD_9"],
//             ["Pause","break"]
//         ])

//         function GetKeybind(code, key) {
//             if (keymap.has(code)) {
//                 var replacecode = keymap.get(code)

//                 keybind = "KEY_" + replacecode
//             } else if (keymap.has(key)) {
//                 var replacekey = keymap.get(key)

//                 if (replacekey == "invalid") {
//                     keybind = "invalid"
//                 } else {
//                     keybind = "KEY_" + replacekey
//                 }
//             } else {
//                 if (code.includes("Numpad") && code != "NumpadEnter") {
//                     keybind = "KEY_PAD_" + key
//                 } else {
//                     keybind = "KEY_" + key
//                 }
//             }

//             keybind = keybind.toUpperCase()
//         }

//         GetKeybind(event.code, event.key)
        
//         if (keybind != "INVALID") {
//             if (steampath && steam3id) {
//                 var vdfpath = path.join(steampath,"userdata",steam3id.toString(),"config","localconfig.vdf")
//                 var vdffile = fs.readFileSync(vdfpath)
//                 vdffile = vdffile.toString()
//                 const vdfdata = VDF.parse(vdffile)

//                 vdfdata.UserLocalConfigStore.system["InGameOverlayScreenshotHotKey"] = keybind
//                 fs.writeFileSync(vdfpath, VDF.stringify(vdfdata))
//             }

//             config["keybind"] = keybind;
//             fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
            
//             document.getElementById("steamkeybind").innerHTML = keybind.replace("KEY_","").replace("PAD_","Num ");
//             document.getElementById("steamkeybind").style.animation = "none";
//             document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
//             document.getElementById("steamkeybind").style.color = "white";
//         } else {
//             // TO DO: Change "steamkeybind" element background to red + "Invalid"
//             // Reset back to previous value in config["keybind"]
//             alert("Invalid key!")
//             document.getElementById("steamkeybind").innerHTML = config.keybind;
//             document.getElementById("steamkeybind").style.animation = "none";
//             document.getElementById("steamkeybind").style.background = "rgba(32,66,122,1)";
//             document.getElementById("steamkeybind").style.color = "white";
//         }
    
//         document.onkeydown = null;
//     }
// }

document.getElementById("scaleslider").value = config.scale;
document.getElementById("scalevalue").innerHTML = config.scale + "%";

function SetScale() {
    config["scale"] = document.getElementById("scaleslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webview").reload();
}

document.getElementById("scalesliderrare").value = config.rarescale;
document.getElementById("scalevaluerare").innerHTML = config.rarescale + "%";

function SetRareScale() {
    config["rarescale"] = document.getElementById("scalesliderrare").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    document.getElementById("webviewrare").reload();
}

document.getElementById("rarityslider").value = config.rarity;
document.getElementById("rarityvalue").innerHTML = config.rarity;

function SetRarity() {
    config["rarity"] = document.getElementById("rarityslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
}

document.getElementById("audio").volume = (config.volume * 10) / 100;
document.getElementById("volumeslider").value = config.volume;
document.getElementById("audiorare").volume = (config.rarevolume * 10) / 100;
document.getElementById("volumesliderrare").value = config.rarevolume;

function Volume(event) {
    if (event.deltaY < 0) {
        document.getElementById("volumeslider").value = parseInt(document.getElementById("volumeslider").value) + 1;
    } else {
        document.getElementById("volumeslider").value = parseInt(document.getElementById("volumeslider").value) - 1;
    }
    document.getElementById("audio").volume = (config.volume * 10) / 100;
    config["volume"] = document.getElementById("volumeslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
}

function ShowVolume() {
    document.getElementById("volumeupicon").style.opacity = "1";
    document.getElementById("volumedownicon").style.opacity = "1";
    document.getElementById("volumeslider").style.opacity = "1";
}

function HideVolume() {
    document.getElementById("volumeupicon").style.opacity = "0";
    document.getElementById("volumedownicon").style.opacity = "0";
    document.getElementById("volumeslider").style.opacity = "0";
}

function VolumeRare(event) {
    if (event.deltaY < 0) {
        document.getElementById("volumesliderrare").value = parseInt(document.getElementById("volumesliderrare").value) + 1;
    } else {
        document.getElementById("volumesliderrare").value = parseInt(document.getElementById("volumesliderrare").value) - 1;
    }
    document.getElementById("audiorare").volume = (config.rarevolume * 10) / 100;
    config["rarevolume"] = document.getElementById("volumesliderrare").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
}

function ShowVolumeRare() {
    document.getElementById("volumeupiconrare").style.opacity = "1";
    document.getElementById("volumedowniconrare").style.opacity = "1";
    document.getElementById("volumesliderrare").style.opacity = "1";
}

function HideVolumeRare() {
    document.getElementById("volumeupiconrare").style.opacity = "0";
    document.getElementById("volumedowniconrare").style.opacity = "0";
    document.getElementById("volumesliderrare").style.opacity = "0";
}

var steam3id;
var steampath;

function GetSteam3ID() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\ActiveProcess`], function(err, result) {
            try {
                steam3id = result["HKCU\\SOFTWARE\\Valve\\Steam\\ActiveProcess"].values.ActiveUser.value;
            } catch {
                // console.log("%cSteam3ID not found", "color: red;");
            }
        });
    } else if (process.platform == "linux" || process.platform == "darwin") {
        var steam64id = config.steam64id;
        var steamidio = `https://steamid.io/lookup/${steam64id}`;

        if (steam64id !== "") {
            fetch(steamidio)
            .then(res => res.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/html"))
            .then(data => {
                var lookup = data.body.getElementsByTagName("dd")[1].children[1].innerText;
                lookup = lookup.replace(/U:1:/g,"").replace(/\[/g,"").replace(/\]/g,"");
                
                steam3id = lookup;
            });
        } else {
            console.log("%No steam64id detected","color: darkred");
        }
    }
}

function GetSteamPath() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\`], function(err, result) {
            try {
                steampath = result["HKCU\\SOFTWARE\\Valve\\Steam\\"].values.SteamPath.value;
            } catch {
                // console.log("%cSteam installation path not found", "color: red;");
            }
        });
    } else if (process.platform == "linux") {
        steampath = path.join(process.env.HOME,".steam","steam");
    } else if (process.platform == "darwin") {
        steampath == path.join(localappdata,"Steam")
    }
}

function GetSteamDetails() {
    GetSteam3ID();
    GetSteamPath();
    
    var checksteamdetails = setInterval(function() {
        if (steam3id && steampath) {
            if (steam3id == 0) {
                GetSteam3ID();
            } else {
                clearInterval(checksteamdetails);
                SANIdle();
            }
        } else {
            GetSteam3ID();
            GetSteamPath();
        }
    }, 1000);
}

GetSteamDetails();

var xmllist;
var achievementobj;
var achievementarr = [];

function GetHiddenDescs() {
    if (config.steam64id == "") {
        console.log("%cError fetching achievement information: No Steam64ID provided",`color: red; font-family:${font}`)
    } else {
        fetch(xmllist)
        .then(res => {
            if (res.ok) {
                if (!(res.url).includes(appid) && !(res.url).includes("/?xml=1")) {
                    console.log("%cError: Game uses Community Game Name (instead of appid)! Re-checking...","color:red");
                    xmllist = res.url + "/?xml=1";
                    GetHiddenDescs();
                } else {
                    console.log("%cUsing URL: " + xmllist,"color:limegreen");
                    xmllist = `https://steamcommunity.com/profiles/${config.steam64id}/stats/${appid}/?xml=1`;
                    return res.text();
                }
            } else {
                console.log("%cError fetching achievement information for " + appid,"color:red");
            }
        })
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            var achievementdata = data.getElementsByTagName("achievement")
            for (var i = 0; i < achievementdata.length; i++) {
                achievementobj = {
                    name: achievementdata[i].children[2].textContent,
                    apiname: achievementdata[i].children[3].textContent,
                    desc: achievementdata[i].children[4].textContent
                }
                achievementarr.push(achievementobj)
            }
        })
    }
}

function GetAppIDFromRegKey() {
    if (process.platform == "win32") {
        regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam`], function(err, result) {
            appid = result["HKCU\\SOFTWARE\\Valve\\Steam"].values.RunningAppID.value;
        });
    } else {
        var vdffile;

        if (process.platform == "linux") {
            vdffile = fs.readFileSync(path.join(process.env.HOME,".steam","registry.vdf"));
        } else if (process.platform == "darwin") {
            vdffile = fs.readFileSync(path.join(localappdata,"Steam","registry.vdf"));
        }

        vdffile = vdffile.toString();
        var vdfdata = VDF.parse(vdffile);

        appid = vdfdata.Registry.HKCU.Software.Valve.Steam.RunningAppID;
    }
}

function SANIdle() {
    GetSteam3ID();
    console.log("%cSteam3ID (For user logged into Steam client): " + steam3id, "color: seagreen;");
    GetSteamPath();
    console.log("%cSteam installation path: " + steampath, "color: seagreen;");

    function StoreLocal() {
        var apikey = config.apikey;
        var steam64id = config.steam64id;

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const random = getRandomInt(9999999);
        
        var gpalocal = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}&?__random=${random}`;
        fetch(gpalocal).then(response => response.json()).then((data) => {
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json"), JSON.stringify(data));
        }).catch(error => {
            console.log("%cSTEAM WEB API ERROR: " + error, "color: red");
        });
    }

    var sanidle = setInterval(function() {
        GetAppIDFromRegKey();
        
        if (appid == 0 || appid == undefined) {
            console.log("%cNo game detected", "color: darkred;");
        } else {
            if (process.platform == "win32") {
                regkey.list([`HKCU\\SOFTWARE\\Valve\\Steam\\Apps\\${appid}`], function(err, result) {
                    gamename = result[`HKCU\\SOFTWARE\\Valve\\Steam\\Apps\\${appid}`].values.Name.value;

                    ipcRenderer.send('trackwin', gamename, appid);
                    setTimeout(function() {
                        ipcRenderer.send('trackstop')
                    }, 5000);

                    console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue;");
                    document.getElementById("gamestatus").style.color = "white";
                    document.getElementById("gamestatus").innerHTML = gamename;
                    ipcRenderer.send('track', gamename, trayshow, trayexit);
                });
            } else if (process.platform == "linux") {
                var regvdffile = fs.readFileSync(path.join(process.env.HOME,".steam","registry.vdf"));
                regvdffile = regvdffile.toString();
                var regvdfdata = VDF.parse(regvdffile);

                gamename = regvdfdata.Registry.HKCU.Software.Valve.Steam.apps[appid].name;
                
                ipcRenderer.send('trackwin', gamename, appid);
                setTimeout(function() {
                    ipcRenderer.send('trackstop')
                }, 5000);

                console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue;");
                document.getElementById("gamestatus").style.color = "white";
                document.getElementById("gamestatus").innerHTML = gamename;
                ipcRenderer.send('track', gamename, trayshow, trayexit);
            } else if (process.platform == "darwin") {
                var regvdffile = fs.readFileSync(path.join(localappdata,"Steam","registry.vdf"));
                regvdffile = regvdffile.toString();
                var regvdfdata = VDF.parse(regvdffile);

                gamename = regvdfdata.Registry.HKCU.Software.Valve.Steam.apps[appid].name;
                
                ipcRenderer.send('trackwin', gamename, appid);
                setTimeout(function() {
                    ipcRenderer.send('trackstop')
                }, 5000);

                console.log("%cNow tracking achievements for: " + gamename, "color: deepskyblue;");
                document.getElementById("gamestatus").style.color = "white";
                document.getElementById("gamestatus").innerHTML = gamename;
                ipcRenderer.send('track', gamename, trayshow, trayexit);
            }
            
            xmllist = `https://steamcommunity.com/profiles/${config.steam64id}/stats/${appid}/?xml=1`;
            
            StoreLocal();
            clearInterval(sanidle);
            currgame = appid;
            StartSAN();
        }
    }, 1000);
}

var percentages;
var cheevnum;

function CheckAchievements() {
    return new Promise((resolve, reject) => {
        var ggapfa = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&l=${lang}&format=json`;
        fetch(ggapfa).then(response => response.json()).then((data) => {
            percentages = data.achievementpercentages.achievements;
            cheevnum = data.achievementpercentages.achievements.length;
        
            if (cheevnum !== 0) {
                console.log(`%cAppID ${appid} has achievements (${cheevnum})`, "color: limegreen;");
                
                GetHiddenDescs()
                
                resolve();
            } else {
                console.log(`%cAppID ${appid} has no achievements (${cheevnum})`, "color: red;");
                reject();
            }
        }).catch(() => {
            if (appid !== 0) {
                console.log(`%cAppID ${appid} has no achievements (No API response received)`, "color: orange;");
            }
            reject();
        });
    });
}

async function StartSAN() {
    try {
        await CheckAchievements();

        var apikey = config.apikey;
        var steam64id = config.steam64id;

        var lastmodified;

        var gsfg = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${apikey}&appid=${appid}&l=${lang}&format=json`;
        fetch(gsfg).then(response => response.json()).then((data) => {
            desc = data;
        });

        if (!gamestats.games[appid]) {
            gamestats.games["" + appid + ""] = {};
            gamestats.games[appid]["completed"] = false;
            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","gamestats.json"), JSON.stringify(gamestats, null, 2));
        }

        function GetAchievementsFromURL() {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            const random = getRandomInt(9999999);

            var gpa = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}&?__random=${random}`;
            fetch(gpa).then(response => response.json()).then((data) => {
                var local = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json")));
                var url = data;

                function MainNotification(t, d, i) {
                    GetNotifyStyle();
                
                    console.log("%cMain Notification added to queue.", "color: lightskyblue;");
                
                    var notifyachievement;

                    if (config.allpercent == "true") {
                        notifyachievement = achievementunlocked + ` (${percent}%)`;
                    } else {
                        notifyachievement = achievementunlocked;
                    }

                    var notifytitle = "" + t + "";
                    var notifydesc = "" +  d + "";

                    if (notifydesc == "" || notifydesc == undefined) {
                        achievementarr.forEach((achievement) => {
                            if (notifytitle == achievement.name) {
                                notifydesc = `${achievement.desc} (${secret})`
                            }
                        })
                    }

                    var notifyicon = "" + i + "";
                
                    const queueobj = {
                        type: "main",
                        width: notifywidth,
                        height: notifyheight,
                        style: config.notifystyle,
                        achievement: notifyachievement,
                        title: notifytitle,
                        desc: notifydesc,
                        icon: notifyicon,
                        screenshot: config.screenshot,
                        pos: config.notifypos,
                        scale: config.scale,
                        percent: percent,
                        audio: document.getElementById("audio").src
                    };
                
                    queue.push(queueobj);
                
                    function CheckIfRunning() {
                        if (running == true) {
                            setTimeout(CheckIfRunning, 1000);
                            return;
                        } else {
                            running = true;
                            queue.shift(queueobj);
                            NotifyWinPos();
                            notifystyle = config.notifystyle;
                            if (config.screenshot == "true") {
                                // !!! Need to add alternative for Linux/MacOS
                                if (process.platform == "win32") {
                                    spawn("powershell.exe",["-Command","Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{" + configkeybind + "}');"]);
                                }
                            }
                            ipcRenderer.send('notifywin', queueobj);
                            LoadSound();

                            if (config.nvda == "true") {
                                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc);
                            }

                            //if (config.screenshot == "true" && config.ssoverlay == "true") {
                            if (config.ssoverlay == "true") {
                                ipcRenderer.send('img', notifytitle, notifydesc, notifyicon, gamename, queueobj.type, percent)
                            }

                            ipcRenderer.once('notrunning', function() {
                                running = false;
                                if (queue.length == 0) {
                                    console.log("%cQueue is empty.", "color: grey;");
                                } else {
                                    console.log("%cQueue Position: " + queue.length, "color: grey;");
                                }
                            });
                        }
                    }
                
                    CheckIfRunning();
                }

                function RareNotification(t, d, i) {
                    GetNotifyStyleRare()

                    console.log("%cRare Notification added to queue.", "color: darkorchid;");

                    var notifyachievement = rareachievementunlocked + ` (${percent}%)`;
                    var notifytitle = "" + t + "";
                    var notifydesc = "" + d + "";

                    if (notifydesc == "" || notifydesc == undefined) {
                        achievementarr.forEach((achievement) => {
                            if (notifytitle == achievement.name) {
                                notifydesc = achievement.desc
                            }
                        })
                    }

                    var notifyicon = "" + i + "";
                
                    const queueobj = {
                        type: "rare",
                        width: notifywidth,
                        height: notifyheight,
                        style: config.rarenotifystyle,
                        achievement: notifyachievement,
                        title: notifytitle,
                        desc: notifydesc,
                        icon: notifyicon,
                        screenshot: config.rarescreenshot,
                        pos: config.rarenotifypos,
                        scale: config.rarescale,
                        percent: percent,
                        audio: document.getElementById("audiorare").src
                    };
                
                    queue.push(queueobj);
                
                    function CheckIfRunning() {
                        if (running == true) {
                            setTimeout(CheckIfRunning, 1000);
                            return;
                        } else {
                            running = true;
                            queue.shift(queueobj);
                            NotifyWinPos();
                            notifystyle = config.rarenotifystyle;
                            ipcRenderer.send('notifywin', queueobj);
                            if (config.rarescreenshot == "true") {
                                // !!! Need to add alternative for Linux/MacOS
                                if (process.platform == "win32") {
                                    spawn("powershell.exe",["-Command","Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{" + configkeybind + "}');"]);
                                }
                                // } else if (process.platform == "linux") {
                                //     spawn("gnome-terminal",[`xdotool key ${configkeybind}`])
                                // }
                            }
                            LoadRareSound();

                            if (config.nvda == "true") {
                                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc);
                            }

                            // if (config.rarescreenshot == "true" && config.ssoverlay == "true") {
                            if (config.ssoverlay == "true") { 
                                ipcRenderer.send('img', notifytitle, notifydesc, notifyicon, gamename, queueobj.type, percent)
                            }

                            ipcRenderer.once('notrunning', function() {
                                running = false;
                                if (queue.length == 0) {
                                    console.log("%cQueue is empty.", "color: grey;");
                                } else {
                                    console.log("%cQueue Position: " + queue.length, "color: grey;");
                                }
                            });
                        }
                    }
                
                    CheckIfRunning();
                }

                function MainSoundOnlyMode() {
                    var audio = document.getElementById("audio");
                    audio.play();
                }

                function RareSoundOnlyMode() {
                    var audiorare = document.getElementById("audiorare");
                    audiorare.play();
                }

                setTimeout(() =>{
                    if (config.screenshot == "true") {
                        desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1280, height: 720 }}).then(function(sources) {
                            screenshot = sources[0].thumbnail.toDataURL();
                        });
                    } else if (config.rarescreenshot == "true") {
                        desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1280, height: 720 }}).then(function(sources) {
                            screenshot = sources[0].thumbnail.toDataURL();
                        });
                    }
                }, 250)

                function CheckCompletionViaAPI() {
                    if (gamestats.games[appid].completed == true) {
                        console.log("%cGame already complete!", "color: orange;");
                    } else {
                        var arrurl = url.playerstats.achievements;
                        var acharr = [];
    
                        arrurl.forEach((achievement) => {
                            acharr.push(achievement.achieved);
                        });
    
                        if (acharr.every((achievement) => achievement == 1) == true) {
                            console.log("%cGame Complete!", "color: yellow;");
    
                            GameCompletionNotification();

                            gamestats.games[appid]["completed"] = true;
                            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","gamestats.json"), JSON.stringify(gamestats, null, 2));
                        } else {
                            console.log("%cGame has not yet been completed", "color: orange;");
                        }
                    }
                }

                for (var i = 0; i < url.playerstats.achievements.length; i++) {
                    if (local.playerstats.achievements[i].achieved !== url.playerstats.achievements[i].achieved) {
                        var achievementname = url.playerstats.achievements[i].name;
                        var achievementdesc = url.playerstats.achievements[i].description;
                        var achievementicon = desc.game.availableGameStats.achievements[i].icon;

                        var apiname = url.playerstats.achievements[i].apiname;
                        var percent;

                        percentages.forEach(function(achievement) {
                            if (achievement.name == apiname) {
                                percent = achievement.percent;
                                percent = Math.round(percent * 100) / 100;
                            }
                        });

                        var configpercent = parseFloat(config.rarity);
                        configpercent = Math.round(configpercent * 100) / 100;

                        if (percent < configpercent) {
                            if (config.soundonly == "true") {
                                RareSoundOnlyMode();
                            } else {
                                RareNotification(achievementname, achievementdesc, achievementicon);
                            }
                        } else {
                            if (config.soundonly == "true") {
                                MainSoundOnlyMode();
                            } else {
                                MainNotification(achievementname, achievementdesc, achievementicon);
                            }
                        }

                        setTimeout(function() {
                            fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json"), JSON.stringify(url));
                            local = JSON.parse(fs.readFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json")));
                        }, 100);

                        if (config.gamecomplete == "true") {
                            setTimeout(CheckCompletionViaAPI, 500)
                        }
                    }
                }
                StartSAN();
            }).catch(error => {
                console.log("%cSTEAM WEB API ERROR: " + error, "color: red");
            });
        }

        console.log(`%cTracking changes to file: ${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, "color: seagreen;");

        fs.stat(`${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, function(err, stats) {
            if (err) {
                clearInterval(checkgame)
                StartSAN();
            } else {
                lastmodified = stats.mtime;
            }
        });

        var checkgame = setInterval(function() {
            GetAppIDFromRegKey();

            if (appid == 0 || appid == undefined || appid !== currgame) {
                clearInterval(checkgame);
                fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json"), "");
                document.getElementById("gamestatus").style.color = "red";
                document.getElementById("gamestatus").innerHTML = nogame;
                ipcRenderer.send('idle', traylabel, trayshow, trayexit);
                currgame = null;
                SANIdle();
            } else {
                fs.stat(`${steampath}/appcache/stats/UserGameStats_${steam3id}_${appid}.bin`, function(err, stats) {
                    if (err) {
                        console.log("%cFSSTAT ERROR: " + err, "color: red")
                    } else {
                        if (stats.mtime > lastmodified) {
                            console.log("%cFile was changed!", "color: deepskyblue;");
                            lastmodified = stats.mtime;

                            clearInterval(checkgame);
                            GetAchievementsFromURL();
                        }
                    }
                });
            }
        }, 1000);
    } catch (err) {
        console.log("%cSTARTSAN ERROR: " + err, "color: red");

        var checkappid = setInterval(function() {
            GetAppIDFromRegKey();

            if (appid == 0 || appid == undefined || appid !== currgame) {
                clearInterval(checkappid);
                fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","local.json"), "");
                document.getElementById("gamestatus").style.color = "red";
                document.getElementById("gamestatus").innerHTML = nogame;
                ipcRenderer.send('idle', traylabel, trayshow, trayexit);
                currgame = null;
                SANIdle();
            }
        }, 1000);
    }
}

function CheckNoSteam() {
    if (config.nosteam == "true") {
        document.getElementById("nosteambox").checked = true;
    } else {
        document.getElementById("nosteambox").checked = false;
    }
}

function ToggleNoSteam() {
    function RestartSteam() {
        spawn("powershell.exe",["-Command","taskkill /f /im steam.exe"]);
        setTimeout(function() {
            spawn("powershell.exe",["-Command",`start '` + steampath + `/steam.exe'`]);
            setTimeout(function() {
                document.getElementById("nosteambox").style.display = "flex";
                document.getElementById("nosteamloadcont").style.display = "none";
            }, 5000);
        }, 2500);
    }

    function SetSkinInReg() {
        var skinv5value = {
            'HKCU\\SOFTWARE\\Valve\\Steam': {
                'SkinV5': {
                    value: 'NoSteamNotifications',
                    type: 'REG_SZ'
                }
            }
        }
    
        regkey.putValue(skinv5value, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("%cNoSteamNotifications Steam skin set in Registry.", "color: seagreen;");
                RestartSteam();
            }
        });
    }

    function RemoveSkinInReg() {
        var skinv5value = {
            'HKCU\\SOFTWARE\\Valve\\Steam': {
                'SkinV5': {
                    value: '',
                    type: 'REG_SZ'
                }
            }
        }
    
        regkey.putValue(skinv5value, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("%cDefault Steam skin set in Registry.", "color: seagreen;");
                RestartSteam();
            }
        });
    }

    if (config.nosteam == "false") {
        document.getElementById("nosteambox").style.display = "none";
        document.getElementById("nosteamloadcont").style.display = "flex";

        config["nosteam"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

        if (fs.existsSync(path.join(steampath,"skins","NoSteamNotifications","resource","styles","steam.styles"))) {
            SetSkinInReg();
        } else {
            fs.mkdirSync(path.join(steampath,"skins","NoSteamNotifications","resource","styles"), { recursive: true });
            fs.copyFileSync(path.join(__dirname,"store","steam.styles"), path.join(steampath,"skins","NoSteamNotifications","resource","styles","steam.styles"));

            SetSkinInReg();
        }
    } else {
        document.getElementById("nosteambox").style.display = "none";
        document.getElementById("nosteamloadcont").style.display = "flex";
        
        config["nosteam"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

        RemoveSkinInReg();
    }

    CheckNoSteam();
}

function CheckAllPercent() {
    if (config.allpercent == "true") {
        document.getElementById("allpercentbox").checked = true;
    } else {
        document.getElementById("allpercentbox").checked = false;
    }
}

function ToggleAllPercent() {
    if (config.allpercent == "false") {
        config["allpercent"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["allpercent"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckAllPercent();
}

function CheckNVDA() {
    if (config.nvda == "true") {
        document.getElementById("nvdabox").checked = true;
    } else {
        document.getElementById("nvdabox").checked = false;
    }
}

function ToggleNVDA() {
    if (config.nvda == "false") {
        config["nvda"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["nvda"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckNVDA();
}

function CheckHWA() {
    if (config.hwa == "true") {
        document.getElementById("hwabox").checked = true;
    } else {
        document.getElementById("hwabox").checked = false;
    }
}

function ToggleHWA() {
    if (config.hwa == "false") {
        config["hwa"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","hwa.txt"), "")
        ipcRenderer.send('resetcomplete');
    } else {
        config["hwa"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        fs.rmSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","hwa.txt"))
        ipcRenderer.send('resetcomplete');
    }
}

function CheckIfSteamIsRunning() {
    var execname;
    var tasklist;

    if (process.platform == "win32") {
        execname = "steam.exe";
        tasklist = "tasklist";
    } else if (process.platform == "linux") {
        execname = "steam";
        tasklist = "ps -A";
    } else if (process.platform == "darwin") {
        execname = "steam"
        tasklist = `ps -ax | grep ${execname}`
    }

    exec(tasklist, function(err, process) {
        var steam = process.toLowerCase().indexOf(execname);

        if (steam == -1) {
            var checkprocesses = setInterval(function() {
                exec(tasklist, function(err, process) {
                    var steamrecheck = process.toLowerCase().indexOf(execname);
                    if (steamrecheck !== -1) {
                        clearInterval(checkprocesses);
                        ipcRenderer.send('reloadapp');
                    } else {
                        console.log("%cSteam is NOT running", "color: red");
                    }
                });
            }, 2000);
        } else {
            console.log("%cSteam is running.", "color: cyan");
        }
    });
}

CheckIfSteamIsRunning();

function GameCompletionNotification() {
    GetNotifyStyleRare()

    console.log("%cGame Completion Notification added to queue.", "color: yellow;");

    var notifyachievement = gamecomplete;
    var notifytitle = gamename;
    var notifydesc = allunlocked + " (" + cheevnum + "/" + cheevnum + ")";
    var notifyicon = "../../../img/ribbon.svg";

    const queueobj = {
        type: "rare",
        width: notifywidth,
        height: notifyheight,
        style: config.rarenotifystyle,
        achievement: notifyachievement,
        title: notifytitle,
        desc: notifydesc,
        icon: notifyicon,
        screenshot: config.rarescreenshot,
        pos: config.rarenotifypos,
        scale: config.rarescale
    };

    queue.push(queueobj);

    function CheckIfRunning() {
        if (running == true) {
            setTimeout(CheckIfRunning, 1000);
            return;
        } else {
            running = true;
            queue.shift(queueobj);
            NotifyWinPos();
            notifystyle = config.rarenotifystyle;
            ipcRenderer.send('notifywin', queueobj);
            var audio = document.getElementById("audiorare");
            LoadRareSound();
            audio.play();

            if (config.nvda == "true") {
                clipboard.writeText(notifyachievement + " " + notifytitle + " " + notifydesc);
            }

            ipcRenderer.once('notrunning', function() {
                running = false;
                if (queue.length == 0) {
                    console.log("%cQueue is empty.", "color: grey;");
                } else {
                    console.log("%cQueue Position: " + queue.length, "color: grey;");
                }
            });
        }
    }

    CheckIfRunning();
}

function CheckIconAnimation() {
    if (config.iconanim == "true") {
        document.getElementById("iconanimation").checked = true;
    } else {
        document.getElementById("iconanimation").checked = false;
    }
}

CheckIconAnimation();

function ToggleIconAnimation() {
    if (config.iconanim == "false") {
        config["iconanim"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["iconanim"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckIconAnimation();
}

function CheckSSOverlay() {
    if (!config.ssoverlay) {
        config["ssoverlay"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }

    if (!config.ovpath) {
        config["ovpath"] = ""; 
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    
    if (config.ovpath == "") {
        if (process.platform == "win32") {
            document.getElementById("ssoverlaypath").innerHTML = path.join(process.env.USERPROFILE,"Pictures");
        } else if (process.platform == "linux" || process.platform == "darwin") {
            document.getElementById("ssoverlaypath").innerHTML = path.join(process.env.HOME,"Pictures");
        }
    } else {
        var folder = config.ovpath;

        if (folder.length > 40) {
            var shortfolder = folder.substring((folder.length - 40), folder.length);
            folder = "..." + shortfolder;
        }

        document.getElementById("ssoverlaypath").innerHTML = folder;
    }

    document.getElementById("ssoverlaypathcont").style.transition = "0.2s";
    document.getElementById("ssoverlaypathcont").style.animation = "fadein 0.5s forwards";
    document.getElementById("sstestcont").style.transition = "0.2s";
    document.getElementById("sstestcont").style.animation = "fadein 0.5s forwards";

    if (config.ssoverlay == "true") {
        document.getElementById("ssoverlaybox").checked = true;
        document.getElementById("ssoverlaypathcont").style.display = "flex";
        document.getElementById("sstestcont").style.display = "flex";
    } else {
        document.getElementById("ssoverlaybox").checked = false;
        document.getElementById("ssoverlaypathcont").style.display = "none";
        document.getElementById("sstestcont").style.display = "none";
    }
}

CheckSSOverlay();

function ToggleSSOverlay() {
    if (config.ssoverlay == "false") {
        config["ssoverlay"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    
        // if (config.ssoverlay == "true" && config.screenshot == "false" && config.rarescreenshot == "false") {
        //     document.getElementById("sserror").style.display = "block";
        // } else {
        //     document.getElementById("sserror").style.display = "none";
        // }
    } else {
        config["ssoverlay"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    
        // document.getElementById("sserror").style.display = "none";
    }

    CheckSSOverlay();
}

function SetSSOverlayPath() {
    ipcRenderer.send('ovpath');
}

var pathlocked = false;

function CheckPathLock() {
    if (pathlocked == true) {
        document.getElementById("ssoverlaypath").style.pointerEvents = "none";
        document.getElementById("ssoverlaybox").disabled = true;
    } else {
        document.getElementById("ssoverlaypath").style.pointerEvents = "auto";
        document.getElementById("ssoverlaybox").disabled = false;
    }
}

ipcRenderer.on('lockpath', () => {
    pathlocked = true;
    CheckPathLock();
})

ipcRenderer.on('unlockpath', (event, folder) => {
    pathlocked = false;
    CheckPathLock();

    config["ovpath"] = folder;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

    var folderpath = folder;

    if (folderpath == "") {
        if (process.platform == "win32") {
            folderpath = path.join(process.env.USERPROFILE,"Pictures");
        } else if (process.platform == "linux" || process.platform == "darwin") {
            folderpath = path.join(process.env.HOME,"Pictures");
        }
    }

    // !!! Change to use text-overflow in "path" element instead...
    if (folderpath.length > 40) {
        var shortfolder = folderpath.substring((folderpath.length - 40), folderpath.length);
        folderpath = "..." + shortfolder;
    }

    document.getElementById("ssoverlaypath").innerHTML = folderpath;
})

function CheckGameCompletion() {
    if (!config.gamecomplete) {
        config["gamecomplete"] = "true"; 
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }

    if (config.gamecomplete == "true") {
        document.getElementById("gamecompletionbox").checked = true;
    } else {
        document.getElementById("gamecompletionbox").checked = false;
    }
}

CheckGameCompletion();

function ToggleGameCompletion() {
    if (config.gamecomplete == "false") {
        config["gamecomplete"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["gamecomplete"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckGameCompletion();
}

function CheckCustomPos() {
    if (config.custompos == "false") {
        document.getElementById("dragposbox").checked = false;
        document.getElementById("dragposbtn").style.display = "none";
        document.getElementById("notifypositioncont").style.opacity = "1";
        document.getElementById("notifypositioncont").style.pointerEvents = "auto";
        // document.getElementById("dircont").style.display = "none";
    } else {
        document.getElementById("dragposbox").checked = true;
        document.getElementById("dragposbtn").style.display = "flex";
        document.getElementById("notifypositioncont").style.opacity = "0.5";
        document.getElementById("notifypositioncont").style.pointerEvents = "none";
        
        // if (document.getElementById("customiserstyledropdown").value == "playstation" || document.getElementById("customiserstyledropdown").value == "windows") {
        //     document.getElementById("dircont").style.display = "flex";
        // } else {
        //     document.getElementById("dircont").style.display = "none";
        // }
    }
}

CheckCustomPos()

function ToggleCustomPos() {
    if (config.custompos == "false") {
        config["custompos"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["custompos"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckCustomPos()
}

function CheckCustomPosRare() {
    if (config.rarecustompos == "false") {
        document.getElementById("dragposboxrare").checked = false;
        document.getElementById("dragposbtnrare").style.display = "none";
        document.getElementById("notifypositioncontrare").style.opacity = "1";
        document.getElementById("notifypositioncontrare").style.pointerEvents = "auto";
        // document.getElementById("dircontrare").style.display = "none";
    } else {
        document.getElementById("dragposboxrare").checked = true;
        document.getElementById("dragposbtnrare").style.display = "flex";
        document.getElementById("notifypositioncontrare").style.opacity = "0.5";
        document.getElementById("notifypositioncontrare").style.pointerEvents = "none";

        // if (document.getElementById("customiserstyledropdownrare").value == "playstation" || document.getElementById("customiserstyledropdownrare").value == "windows") {
        //     document.getElementById("dircontrare").style.display = "flex";
        // } else {
        //     document.getElementById("dircontrare").style.display = "none";
        // }
    }
}

CheckCustomPosRare()

function ToggleCustomPosRare() {
    if (config.rarecustompos == "false") {
        config["rarecustompos"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    } else {
        config["rarecustompos"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }
    CheckCustomPosRare()
}

var postype;
var style;

function SetCustomPos() {
    postype = "main";
    style = document.getElementById("customiserstyledropdown").value;
    
    document.getElementById("dragposbox").style.pointerEvents = "none";
    document.getElementById("dragposbtn").style.pointerEvents = "none";
    document.getElementById("dragposbtn").innerHTML = "...";
    document.getElementById("dragposbtn").style.animation = "bluetowhite 0.5s alternate infinite forwards";
    
    document.getElementById("dragposboxrare").style.pointerEvents = "none";
    document.getElementById("dragposbtnrare").style.pointerEvents = "none";
    document.getElementById("dragposbtnrare").innerHTML = settingpos;
    document.getElementById("dragposbtnrare").style.animation = "bluetowhite 0.5s alternate infinite forwards";

    document.getElementById("recenter").style.display = "flex";
    
    ipcRenderer.send('setcustompos', postype, style);
}

function SetCustomPosRare() {
    postype = "rare";
    style = document.getElementById("customiserstyledropdownrare").value;
    
    document.getElementById("dragposboxrare").style.pointerEvents = "none";
    document.getElementById("dragposbtnrare").style.pointerEvents = "none";
    document.getElementById("dragposbtnrare").innerHTML = "...";
    document.getElementById("dragposbtnrare").style.animation = "bluetowhite 0.5s alternate infinite forwards";
    
    document.getElementById("dragposbox").style.pointerEvents = "none";
    document.getElementById("dragposbtn").style.pointerEvents = "none";
    document.getElementById("dragposbtn").innerHTML = settingposrare;
    document.getElementById("dragposbtn").style.animation = "bluetowhite 0.5s alternate infinite forwards";

    document.getElementById("recenterrare").style.display = "flex";

    ipcRenderer.send('setcustompos', postype, style);
}

ipcRenderer.on('dragwinclose', () => {
    document.getElementById("dragposbox").style.pointerEvents = "auto";
    document.getElementById("dragposbtn").style.pointerEvents = "auto";
    document.getElementById("dragposbtn").innerHTML = custompos;
    document.getElementById("dragposbtn").style.animation = "none";

    document.getElementById("dragposboxrare").style.pointerEvents = "auto";
    document.getElementById("dragposbtnrare").style.pointerEvents = "auto";
    document.getElementById("dragposbtnrare").innerHTML = custompos;
    document.getElementById("dragposbtnrare").style.animation = "none";

    document.getElementById("recenter").style.display = "none";
    document.getElementById("recenterrare").style.display = "none";
});

function RecenterDragWin() {
    ipcRenderer.send('recenter');
}

ipcRenderer.on('saveposmain', (event, x, y) => {
    config["x"] = x;
    config["y"] = y;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
});

ipcRenderer.on('saveposrare', (event, x, y) => {
    config["rarex"] = x;
    config["rarey"] = y;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
});

if (config.fontsize == undefined) {
    document.getElementById("fontsizeslider").value = "100";
    document.getElementById("fontsizevalue").innerHTML = "100%";
} else {
    document.getElementById("fontsizeslider").value = config.fontsize;
    document.getElementById("fontsizevalue").innerHTML = config.fontsize + "%";
}

if (config.rarefontsize == undefined) {
    document.getElementById("fontsizesliderrare").value = "100";
    document.getElementById("fontsizevaluerare").innerHTML = "100%";
} else {
    document.getElementById("fontsizesliderrare").value = config.rarefontsize;
    document.getElementById("fontsizevaluerare").innerHTML = config.rarefontsize + "%";
}

function SetFontSize() {
    config["fontsize"] = document.getElementById("fontsizeslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webview").reload();
}

function SetFontSizeRare() {
    config["rarefontsize"] = document.getElementById("fontsizesliderrare").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    paused = false;
    document.getElementById("pauserare").src = "./icon/pause_white.svg";
    document.getElementById("webviewrare").reload();
}

if (config.opacity == undefined) {
    document.getElementById("opacityslider").value = "100";
    document.getElementById("opacityvalue").innerHTML = document.getElementById("opacityslider").value;
} else {
    document.getElementById("opacityslider").value = config.opacity;
    document.getElementById("opacityvalue").innerHTML = document.getElementById("opacityslider").value;
}

function SetOpacity() {
    config["opacity"] = document.getElementById("opacityslider").value;
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
}

function ResetIcon() {
    document.getElementById("iconselecticon").src = "./img/sanlogosquare.svg"

    config["icon"] = "";
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webview").reload();
}

function ResetIconRare() {
    document.getElementById("rareiconselecticon").src = "./img/sanlogosquare.svg"

    config["rareicon"] = "";
    fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

    paused = false;
    document.getElementById("pause").src = "./icon/pause_white.svg";
    document.getElementById("webviewrare").reload();
}

function CheckGameIcon() {
    if (config.gameicon == undefined) {
        config["gameicon"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }

    if (config.gameicon == "true") {
        document.getElementById("gameiconbox").checked = true;
        document.getElementById("iconselectcont").style.pointerEvents = "none";
        document.getElementById("iconselectcont").style.filter = "brightness(50%)";
    } else {
        document.getElementById("gameiconbox").checked = false;
        document.getElementById("iconselectcont").style.pointerEvents = "auto";
        document.getElementById("iconselectcont").style.filter = "brightness(100%)";
    }
}

CheckGameIcon();

function ToggleGameIcon() {
    if (config.gameicon == "false") {
        config["gameicon"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
        
        document.getElementById("webview").reload();
    } else {
        config["gameicon"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

        document.getElementById("webview").reload();
    }
    CheckGameIcon();
}

function CheckGameIconRare() {
    if (config.raregameicon == undefined) {
        config["raregameicon"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));
    }

    if (config.raregameicon == "true") {
        document.getElementById("gameiconboxrare").checked = true;
        document.getElementById("rareiconselectcont").style.pointerEvents = "none";
        document.getElementById("rareiconselectcont").style.filter = "brightness(50%)";
    } else {
        document.getElementById("gameiconboxrare").checked = false;
        document.getElementById("rareiconselectcont").style.pointerEvents = "auto";
        document.getElementById("rareiconselectcont").style.filter = "brightness(100%)";
    }
}

CheckGameIconRare();

function ToggleGameIconRare() {
    if (config.raregameicon == "false") {
        config["raregameicon"] = "true";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

        document.getElementById("webviewrare").reload();
    } else {
        config["raregameicon"] = "false";
        fs.writeFileSync(path.join(localappdata,"Steam Achievement Notifier (V1.8)","store","config.json"), JSON.stringify(config, null, 2));

        document.getElementById("webviewrare").reload();
    }
    CheckGameIconRare();
}

function ShowOverlayTest(type) {
    ipcRenderer.send("overlaytest", type)
}

document.getElementById("ssmaintestbtn").style.display = "flex";
document.getElementById("ssmainbtn").style.display = "flex";
document.getElementById("ssraretestbtn").style.display = "none";
document.getElementById("ssrarebtn").style.display = "none";

function SSHover() {
    document.getElementById("ssmainimg").src = "./icon/replay.svg";
    document.getElementById("ssmainimg").style.filter = "brightness(0%)";
    document.getElementById("ssrareimg").src = "./icon/replay.svg";
    document.getElementById("ssrareimg").style.filter = "brightness(0%)";
}

function SSOut() {
    document.getElementById("ssmainimg").src = "./icon/emoji_events_gold.png";
    document.getElementById("ssmainimg").style.filter = "brightness(100%)";
    document.getElementById("ssrareimg").src = "./icon/emoji_events_purple.png";
    document.getElementById("ssrareimg").style.filter = "brightness(100%)";
}

function ToggleSSTestType() {
    if (document.getElementById("ssmaintestbtn").style.display == "flex") {
        document.getElementById("ssmaintestbtn").style.display = "none";
        document.getElementById("ssmainbtn").style.display = "none";
        document.getElementById("ssraretestbtn").style.display = "flex";
        document.getElementById("ssrarebtn").style.display = "flex";
    } else {
        document.getElementById("ssmaintestbtn").style.display = "flex";
        document.getElementById("ssmainbtn").style.display = "flex";
        document.getElementById("ssraretestbtn").style.display = "none";
        document.getElementById("ssrarebtn").style.display = "none";
    }
}

// Clears webFrame cache every minute
// Removes images from cache which apparently hogs memory
// const { webFrame } = require('electron');
// var clearcache = setInterval(function() {
//     webFrame.clearCache();
// }, 60000);

ipcRenderer.on('warnmsg', (e, m) => {
    console.log(`%c${m}`, "color: orange")
})

ipcRenderer.on('errormsg', (e, m) => {
    console.log(`%c${m}`, "color: red")
})