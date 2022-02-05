//MAIN CONTENT FUNCTIONS
const { ipcRenderer, app } = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;
const shortcut = path.join(os.homedir(), "Desktop", "Steam Achievement Notifier (V1.73).lnk");

//INITIAL SETUP
spawn("powershell.exe",["-Command","$policy = Get-ExecutionPolicy; if ($policy -ne 'Bypass') { Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass; }"]);
console.log("Execution Policy updated to Bypass.")

const sanlocalappdata = path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)");
console.log(sanlocalappdata)
if (!fs.existsSync(sanlocalappdata)) {
    console.log("\"Steam Achievement Notifier (V1.7)\" directory does not exist in LocalAppData. Creating...")
    fs.mkdirSync(sanlocalappdata);
    fs.mkdirSync(path.join(sanlocalappdata,"store"));
    fs.mkdirSync(path.join(sanlocalappdata,"img"));
    fs.copyFileSync(path.join(__dirname,"store","config.json"), path.join(sanlocalappdata,"store","config.json"));
    fs.copyFileSync(path.join(__dirname,"img","sanlogo.ico"), path.join(sanlocalappdata,"img","sanlogo.ico"));
    console.log("\"Steam Achievement Notifier (V1.7)\" directory created in LocalAppData. WARNING: \"config.json\" has been reset to Default.")
} else {
    console.log("\"Steam Achievement Notifier (V1.7)\" directory already exists.")
}

const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json")));

fs.writeFileSync(path.join(__dirname,"store","local.json"), "");

//CURRENT VERSION NUMBER
var thisver = "1.73";
var tag = null;

function CheckUpdate() {
    fetch("https://api.github.com/repos/SteamAchievementNotifier/SteamAchievementNotifier/releases").then(response => response.json()).then((data) => {
        tag = data[0].tag_name
        if (tag > thisver) {
            document.getElementById("updateicon").style.display = "flex";
        }
    });
}

CheckUpdate();

function OpenUpdateInBrowser() {
    ipcRenderer.send('update', tag);
}

function CreateStartMenuShortcut() {
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
    } catch (error) {
        console.log("Could not locate/remove Steam Achievement Notifier (V1.7).lnk");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.71).lnk"));
    } catch (error) {
        console.log("Could not locate/remove Steam Achievement Notifier (V1.71).lnk");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.72).lnk"));
    } catch (error) {
        console.log("Could not locate/remove Steam Achievement Notifier (V1.72).lnk");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.73).lnk"));
    } catch (error) {
        console.log("Could not locate/remove Steam Achievement Notifier (V1.73).lnk");
    }

    spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V" + thisver + ").lnk") + `'); $shortcut.IconLocation = '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save(); $sc = "steam achievement notifier (V${thisver})"; $txtinfo = (Get-Culture).TextInfo; $scfix = $txtinfo.ToTitleCase($sc); Rename-Item -Path "` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V" + thisver + ").lnk") + `" -NewName "$scfix.lnk"`]);
    console.log("\"Steam Achievement Notifier (V" + thisver + ").lnk\" created in Start Menu.")
}

CreateStartMenuShortcut();

function ReplaceBTConfig() {
    const btconfig = JSON.parse(fs.readFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json")));

    if (btconfig.AppId !== path.join(process.env.PORTABLE_EXECUTABLE_FILE)) {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(__dirname,"BurntToast","0.8.5","config.json.old"));
        btconfig["AppId"] = process.env.PORTABLE_EXECUTABLE_FILE.replace("\\","\\\\").replace(":\\\\",":\\");
        btconfig["AppLogo"] = path.join(__dirname, "img", "sanlogo.ico");
        fs.writeFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), JSON.stringify(btconfig, null, 2));
        console.log("BurntToast AppId/AppLogo have been set to \"Steam Achievement Notifier (" + thisver + ").exe\".");
    } else {
        console.log("BurntToast AppId is set correctly.");
    }
}

ReplaceBTConfig();

function LoadVer() {
    document.getElementById("footertext1").innerHTML = `Steam Achievement Notifier (V${thisver})`;
}

var lang;
var testdesc;
var rareheader;
var nouser;
var nogame;
var nosound;
var nosoundrare;
var unlinked;
var linked;
var novalue;
var screenshotmsg;
var desktopexistsmsg;
var desktopmsg;
var startwinmsg;
var startminmsg;
var soundonlymsg;
var trackingmsg;
var tracknotifymsg;
var second;
var seconds;
var resettitle;
var resetdesc;
var resetbtns;
var traylabel;
var trayshow;
var trayexit;

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
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installed";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID set";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu shortcut";
        document.getElementById("settingstitle").innerHTML = "SETTINGS";
        document.getElementById("configtitle").innerHTML = "CONFIGURATION";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Click to type/paste API Key";
        document.getElementById("steam64box").placeholder = "Click to type/paste Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Your API Key will be updated to:";
        document.getElementById("steam64confirmbody").innerHTML = "Your Steam64ID will be updated to:";
        document.getElementById("other").innerHTML = "OTHER";
        document.getElementById("screenshotlbl").innerHTML = "Show Achievement Screenshot";
        document.getElementById("keybindtitle").innerHTML = "Steam Screenshot Keybind";
        document.getElementById("keybindsub").innerHTML = "Click the button, then press the key that matches<br>your screenshot keybind set in Steam.";
        document.getElementById("desktoplbl").innerHTML = "Create Desktop Shortcut";
        document.getElementById("startwinlbl").innerHTML = "Start with Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimized To System Tray";
        document.getElementById("soundonlylbl").innerHTML = "Sound-Only Mode";
        document.getElementById("trackinglbl").innerHTML = 'Show "Now Tracking" Notification';
        document.getElementById("slidervaluelbl").innerHTML = "Notification Display Time:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "second";
        } else {
            document.getElementById("seconds").innerHTML = "seconds";
        }

        nouser = "No User Detected";
        nogame = "No Game Detected";
        nosound = "Default (No Sound Selected)";
        nosoundrare = "Default (No Sound Selected)";
        testdesc = `'Your notifications are working correctly.'`;
        rareheader = `'Rare Achievement Unlocked!`;
        unlinked = "UNLINKED";
        linked = "LINKED";
        novalue = "Please enter a value";
        screenshotmsg = "Achievement Screenshot";
        desktopexistsmsg = "Desktop shortcut already exists";
        desktopmsg = "Desktop Shortcut";
        startwinmsg = "Start with Windows";
        startminmsg = "Start Minimized";
        soundonlymsg = "Sound-Only Mode";
        trackingmsg = '"Now Tracking" Notification';

        second = "second";
        seconds = "seconds";

        tracknotifymsg = "Now tracking achievements for";

        resettitle = "Reset App To Default?";
        resetdesc = `WARNING: This will remove all user settings!`;
        resetbtns = ["Reset","Uninstall","Cancel"];

        traylabel = "No Game Detected";
        trayshow = "Show";
        trayexit = "Exit";
    } else if (config.lang == "arabic") {
        document.getElementById("username").innerHTML = "لم يتم اكتشاف أي مستخدم";
        document.getElementById("gamestatus").innerHTML = "لم يتم اكتشاف لعبة";
        document.getElementById("soundfile").innerHTML = "افتراضي (لم يتم تحديد صوت)";
        document.getElementById("soundfilerare").innerHTML = "افتراضي (لم يتم تحديد صوت)";
        document.getElementById("maincheevsound").innerHTML = "صوت الإنجاز الرئيسي";
        document.getElementById("rarecheevsound").innerHTML = "نادر صوت الإنجاز";
        document.getElementById("test").innerHTML = "إظهار إخطار الاختبار";
        document.getElementById("testrare").innerHTML = "إظهار إخطار اختبار نادر";
        document.getElementById("btinstalllbl").innerHTML = "تم تثبيت BurntToast";
        document.getElementById("btappidlbl").innerHTML = "مجموعة BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "اختصار Start Menu";
        document.getElementById("settingstitle").innerHTML = "الإعدادات";
        document.getElementById("configtitle").innerHTML = "إعدادات";
        document.getElementById("statustitle").innerHTML = "الحالة:";
        document.getElementById("apibox").placeholder = "انقر لكتابة / لصق API Key";
        document.getElementById("steam64box").placeholder = "انقر لكتابة / لصق Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "سيتم تحديث API Key الخاص بك إلى:";
        document.getElementById("steam64confirmbody").innerHTML = "سيتم تحديث Steam64ID الخاص بك إلى:";
        document.getElementById("other").innerHTML = "آخر";
        document.getElementById("screenshotlbl").innerHTML = "إظهار لقطة الإنجاز";
        document.getElementById("keybindsub").innerHTML = "انقر فوق الزر ، ثم اضغط على المفتاح الذي يتطابق مع رابط مفتاح لقطة الشاشة الذي تم تعيينه في Steam.";
        document.getElementById("desktoplbl").innerHTML = "إنشاء اختصار سطح المكتب";
        document.getElementById("startwinlbl").innerHTML = "ابدأ بنظام Windows";
        document.getElementById("startminlbl").innerHTML = "بدء مصغر إلى علبة النظام";
        document.getElementById("soundonlylbl").innerHTML = "وضع الصوت فقط";
        document.getElementById("trackinglbl").innerHTML = 'إظهار إعلام "التتبع الآن"';
        document.getElementById("slidervaluelbl").innerHTML = "وقت عرض الإخطار:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "ثانية";
        } else {
            document.getElementById("seconds").innerHTML = "ثانية";
        }

        nouser = "لم يتم اكتشاف أي مستخدم";
        nogame = "لم يتم اكتشاف لعبة";
        nosound = "افتراضي (لم يتم تحديد صوت)";
        nosoundrare = "افتراضي (لم يتم تحديد صوت)";
        testdesc = `'الإخطارات الخاصة بك تعمل بشكل صحيح.'`;
        rareheader = `'إنجاز نادر تم فتحه`;
        unlinked = "غير متصل";
        linked = "متصل";
        novalue = "يرجى إدخال قيمة";
        screenshotmsg = "لقطة شاشة الإنجاز";
        desktopexistsmsg = "اختصار سطح المكتب موجود بالفعل";
        desktopmsg = "اختصار سطح المكتب";
        startwinmsg = "ابدأ بنظام Windows";
        startminmsg = "بداية الحد الادنى";
        soundonlymsg = "وضع الصوت فقط";
        trackingmsg = 'إعلام "التتبع الآن"';

        second = "ثانية";
        seconds = "ثانية";

        tracknotifymsg = "تتبع الإنجازات الآن لـ";

        resettitle = "إعادة تعيين التطبيق إلى الافتراضي؟";
        resetdesc = `تحذير: سيؤدي هذا إلى إزالة كافة إعدادات المستخدم!`;
        resetbtns = ["إعادة ضبط","الغاء التثبيت","عودة"];

        traylabel = "لم يتم اكتشاف لعبة";
        trayshow = "تبين";
        trayexit = "مخرج";
    } else if (config.lang == "bulgarian") {
        document.getElementById("username").innerHTML = "Няма oткрит потребител";
        document.getElementById("gamestatus").innerHTML = "Не е открита игра";
        document.getElementById("soundfile").innerHTML = "По подразбиране (без избран звук)";
        document.getElementById("soundfilerare").innerHTML = "По подразбиране (без избран звук)";
        document.getElementById("maincheevsound").innerHTML = "Основно постижение Звук";
        document.getElementById("rarecheevsound").innerHTML = "Звук на рядко постижение";
        document.getElementById("test").innerHTML = "ПОКАЖИ ИЗВЕСТИЕ ЗА ТЕСТ";
        document.getElementById("testrare").innerHTML = "ПОКАЗВАНЕ НА ИЗВЕСТИЕ ЗА РЯДЪК ТЕСТ";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast инсталиран";
        document.getElementById("btappidlbl").innerHTML = "Набор BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "Пряк път на Start Menu";
        document.getElementById("settingstitle").innerHTML = "НАСТРОЙКИ";
        document.getElementById("configtitle").innerHTML = "КОНФИГУРАЦИЯ";
        document.getElementById("statustitle").innerHTML = "СТАТУС:";
        document.getElementById("apibox").placeholder = "Щракнете за да въведете/поставите API Key";
        document.getElementById("steam64box").placeholder = "Щракнете за да въведете/поставите Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Вашият API Key ще бъде актуализиран до:";
        document.getElementById("steam64confirmbody").innerHTML = "Вашият Steam64ID ще бъде актуализиран до:";
        document.getElementById("other").innerHTML = "ДРУГИ";
        document.getElementById("screenshotlbl").innerHTML = "Покажи снимка на екрана";
        document.getElementById("keybindsub").innerHTML = "Кликнете върху бутона, след което натиснете клавиша, който съответства на горещата клавишна комбинация, зададена в Steam.";
        document.getElementById("desktoplbl").innerHTML = "Пряк път на работния плот";
        document.getElementById("startwinlbl").innerHTML = "Започнете с Windows";
        document.getElementById("startminlbl").innerHTML = "Старт Минимизиран";
        document.getElementById("soundonlylbl").innerHTML = "Режим само за звук";
        document.getElementById("trackinglbl").innerHTML = '"Сега проследяване"';
        document.getElementById("slidervaluelbl").innerHTML = "показване на времето:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "секунда";
        } else {
            document.getElementById("seconds").innerHTML = "секунди";
        }

        nouser = "Няма открит потребител";
        nogame = "Не е открита игра";
        nosound = "По подразбиране (без избран звук)";
        nosoundrare = "По подразбиране (без избран звук)";
        testdesc = `'Вашите известия работят правилно.'`;
        rareheader = `'Отключено рядко постижение!`;
        unlinked = "НЕВЪРЗАН";
        linked = "СВЪРЗАНИ";
        novalue = "Моля въведете стойност";
        screenshotmsg = "Екранна снимка";
        desktopexistsmsg = "Пряк път на работния плот вече съществува";
        desktopmsg = "Пряк път на работния плот";
        startwinmsg = "Започнете с Windows";
        startminmsg = "Старт минимизиран";
        soundonlymsg = "Режим само за звук";
        trackingmsg = 'Известие „Сега проследяване“.';

        second = "секунда";
        seconds = "секунди";

        tracknotifymsg = "Сега проследяване на постиженията за";

        resettitle = "Нулиране На Настройките По Подразбиране?";
        resetdesc = `ПРЕДУПРЕЖДЕНИЕ: Това ще премахне всички потребителски настройки!`;
        resetbtns = ["Нулиране","Деинсталиране","Отменям"];
    
        traylabel = "Не е открита игра";
        trayshow = "Покажи";
        trayexit = "Изход";
    } else if (config.lang == "schinese") {
        document.getElementById("username").innerHTML = "未检测到用户";
        document.getElementById("gamestatus").innerHTML = "未检测到游戏";
        document.getElementById("soundfile").innerHTML = "默认（未选择声音）";
        document.getElementById("soundfilerare").innerHTML = "默认（未选择声音）";
        document.getElementById("maincheevsound").innerHTML = "主要成就音效";
        document.getElementById("rarecheevsound").innerHTML = "稀有成就音效";
        document.getElementById("test").innerHTML = "显示测试通知";
        document.getElementById("testrare").innerHTML = "显示稀有测试通知";
        document.getElementById("btinstalllbl").innerHTML = "安装了 BurntToast";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID 集";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu 快捷方式";
        document.getElementById("settingstitle").innerHTML = "设置";
        document.getElementById("configtitle").innerHTML = "配置";
        document.getElementById("statustitle").innerHTML = "地位:";
        document.getElementById("apibox").placeholder = "单击以键入/粘贴 API Key";
        document.getElementById("steam64box").placeholder = "点击输入/粘贴 Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "您的 API Key 将更新为:";
        document.getElementById("steam64confirmbody").innerHTML = "您的 Steam64ID 将更新为:";
        document.getElementById("other").innerHTML = "其他";
        document.getElementById("screenshotlbl").innerHTML = "显示成就截图";
        document.getElementById("keybindsub").innerHTML = "单击按钮，然后按下与您在 Steam 中设置的屏幕截图键绑定匹配的键。";
        document.getElementById("desktoplbl").innerHTML = "创建桌面快捷方式";
        document.getElementById("startwinlbl").innerHTML = "从 Windows 开始";
        document.getElementById("startminlbl").innerHTML = "开始最小化到系统托盘";
        document.getElementById("soundonlylbl").innerHTML = "纯声音模式";
        document.getElementById("trackinglbl").innerHTML = '显示“正在跟踪”通知';
        document.getElementById("slidervaluelbl").innerHTML = "通知显示时间:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "秒";
        } else {
            document.getElementById("seconds").innerHTML = "秒";
        }

        nouser = "未检测到用户";
        nogame = "未检测到游戏";
        nosound = "默认（未选择声音）";
        nosoundrare = "默认（未选择声音）";
        testdesc = `'您的通知工作正常。'`;
        rareheader = `'罕见成就解锁！`;
        unlinked = "未链接";
        linked = "已链接";
        novalue = "请输入一个值";
        screenshotmsg = "成就截图";
        desktopexistsmsg = "桌面快捷方式已存在";
        desktopmsg = "桌面快捷方式";
        startwinmsg = "从 Windows 开始";
        startminmsg = "开始最小化";
        soundonlymsg = "纯声音模式";
        trackingmsg = '“正在追踪”通知';

        second = "秒";
        seconds = "秒";

        tracknotifymsg = "现在跟踪成就";

        resettitle = "将应用重置为默认值？";
        resetdesc = `警告：这将删除所有用户设置！`;
        resetbtns = ["重启","卸载","取消"];

        traylabel = "未检测到游戏";
        trayshow = "打开";
        trayexit = "出口";
    } else if (config.lang == "tchinese") {
        document.getElementById("username").innerHTML = "未檢測到用戶";
        document.getElementById("gamestatus").innerHTML = "未檢測到遊戲";
        document.getElementById("soundfile").innerHTML = "默認（未選擇聲音）";
        document.getElementById("soundfilerare").innerHTML = "默認（未選擇聲音）";
        document.getElementById("maincheevsound").innerHTML = "主要成就音效";
        document.getElementById("rarecheevsound").innerHTML = "稀有成就音效";
        document.getElementById("test").innerHTML = "顯示測試通知";
        document.getElementById("testrare").innerHTML = "顯示稀有測試通知";
        document.getElementById("btinstalllbl").innerHTML = "安裝了 BurntToast";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID 集";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu 快捷方式";
        document.getElementById("settingstitle").innerHTML = "設置";
        document.getElementById("configtitle").innerHTML = "配置";
        document.getElementById("statustitle").innerHTML = "地位:";
        document.getElementById("apibox").placeholder = "單擊以鍵入/粘貼 API Key";
        document.getElementById("steam64box").placeholder = "點擊輸入/粘貼 Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "您的 API Key 將更新為:";
        document.getElementById("steam64confirmbody").innerHTML = "您的 Steam64ID 將更新為:";
        document.getElementById("other").innerHTML = "其他";
        document.getElementById("screenshotlbl").innerHTML = "顯示成就截圖";
        document.getElementById("keybindsub").innerHTML = "單擊按鈕，然後按下與您在 Steam 中設置的屏幕截圖鍵綁定匹配的鍵。";
        document.getElementById("desktoplbl").innerHTML = "創建桌面快捷方式";
        document.getElementById("startwinlbl").innerHTML = "從 Windows 開始";
        document.getElementById("startminlbl").innerHTML = "開始最小化到系統托盤";
        document.getElementById("soundonlylbl").innerHTML = "純聲音模式";
        document.getElementById("trackinglbl").innerHTML = '顯示“正在跟踪”通知';
        document.getElementById("slidervaluelbl").innerHTML = "通知顯示時間:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "秒";
        } else {
            document.getElementById("seconds").innerHTML = "秒";
        }

        nouser = "未檢測到用戶";
        nogame = "未檢測到遊戲";
        nosound = "默認（未選擇聲音）";
        nosoundrare = "默認（未選擇聲音）";
        testdesc = `'您的通知工作正常。'`;
        rareheader = `'罕見成就解鎖！`;
        unlinked = "未鏈接";
        linked = "已鏈接";
        novalue = "請輸入一個值";
        screenshotmsg = "成就截圖";
        desktopexistsmsg = "桌面快捷方式已存在";
        desktopmsg = "桌面快捷方式";
        startwinmsg = "從 Windows 開始";
        startminmsg = "開始最小化";
        soundonlymsg = "純聲音模式";
        trackingmsg = '“正在追踪”通知';

        second = "秒";
        seconds = "秒";

        tracknotifymsg = "現在跟踪成就";

        resettitle = "將應用重置為默認值？";
        resetdesc = `警告：這將刪除所有用戶設置！`;
        resetbtns = ["重啟","卸載","取消"];

        traylabel = "未檢測到遊戲";
        trayshow = "打開";
        trayexit = "出口";
    } else if (config.lang == "czech") {
        document.getElementById("username").innerHTML = "Nebyl Zjištěn Žádný Uživatel";
        document.getElementById("gamestatus").innerHTML = "Nebyla Zjištěna Žádná Hra";
        document.getElementById("soundfile").innerHTML = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        document.getElementById("soundfilerare").innerHTML = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        document.getElementById("maincheevsound").innerHTML = "Hlavní Zvuk";
        document.getElementById("rarecheevsound").innerHTML = "Vzácný Zvuk";
        document.getElementById("test").innerHTML = "ZOBRAZIT OZNÁMENÍ O TESTU";
        document.getElementById("testrare").innerHTML = "ZOBRAZIT OZNÁMENÍ O VZÁCNÉM TESTU";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast nainstalován";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID nastaveno";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu zástupce";
        document.getElementById("settingstitle").innerHTML = "NASTAVENÍ";
        document.getElementById("configtitle").innerHTML = "KONFIGURACE";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Kliknutím zadejte/vložte API Key";
        document.getElementById("steam64box").placeholder = "Kliknutím zadejte/vložte Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Váš API Key bude aktualizován na:";
        document.getElementById("steam64confirmbody").innerHTML = "Váš Steam64ID bude aktualizován na:";
        document.getElementById("other").innerHTML = "OSTATNÍ";
        document.getElementById("screenshotlbl").innerHTML = "Zobrazit Snímek Obrazovky";
        document.getElementById("keybindsub").innerHTML = "Klikněte na tlačítko a stiskněte klávesu, která odpovídá vaší klávesové zkratce nastavené ve službě Steam.";
        document.getElementById("desktoplbl").innerHTML = "Vytvoření Zástupce na Desktop";
        document.getElementById("startwinlbl").innerHTML = "Spustit Při Spuštění Systému Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimalizován";
        document.getElementById("soundonlylbl").innerHTML = "Režim Pouze Zvuk";
        document.getElementById("trackinglbl").innerHTML = 'Zobrazit Upozornění „Sledování“';
        document.getElementById("slidervaluelbl").innerHTML = "Doba Trvání oznámení:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekunda";
        } else {
            document.getElementById("seconds").innerHTML = "sekundy";
        }

        nouser = "Nebyl Zjištěn Žádný Uživatel";
        nogame = "Nebyla Zjištěna Žádná Hra";
        nosound = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        nosoundrare = "Výchozí Nastavení (Není Vybrán Žádný Zvuk)";
        testdesc = `'Vaše oznámení fungují správně.'`;
        rareheader = `'Vzácný Úspěch Odemčen!`;
        unlinked = "NEPŘIPOJENÝ";
        linked = "PŘIPOJENO";
        novalue = "Zadejte hodnotu";
        screenshotmsg = "Snímek Obrazovky";
        desktopexistsmsg = "Zástupce na ploše již existuje";
        desktopmsg = "Zástupce na Desktop";
        startwinmsg = "Spustit Při Spuštění Systému Windows";
        startminmsg = "Start Minimalizován";
        soundonlymsg = "Režim Pouze Zvuk";
        trackingmsg = 'Zobrazit Upozornění „Sledování“';

        second = "sekunda";
        seconds = "sekundy";
        
        tracknotifymsg = "Nyní sledujeme úspěchy pro";

        resettitle = "Resetovat Aplikaci Na Výchozí?";
        resetdesc = `VAROVÁNÍ: Tímto odstraníte všechna uživatelská nastavení!`;
        resetbtns = ["Resetovat","Odinstalovat","Zrušit"];

        traylabel = "Nebyla Zjištěna Žádná Hra";
        trayshow = "Ukázat";
        trayexit = "Výstup";
    } else if (config.lang == "danish") {
        document.getElementById("username").innerHTML = "Ingen Bruger Fundet";
        document.getElementById("gamestatus").innerHTML = "Intet Spil Opdaget";
        document.getElementById("soundfile").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("maincheevsound").innerHTML = "Hovedlyd";
        document.getElementById("rarecheevsound").innerHTML = "Sjælden Lyd";
        document.getElementById("test").innerHTML = "VIS TEST";
        document.getElementById("testrare").innerHTML = "VIS SJÆLDEN TEST";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installeret";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID sæt";
        document.getElementById("startshortcutlbl").innerHTML = "StartMenu genvej";
        document.getElementById("settingstitle").innerHTML = "INDSTILLINGER";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Klik for at skrive/indsætte API Key";
        document.getElementById("steam64box").placeholder = "Klik for at skrive/indsætte Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Din API Key vil blive opdateret til:";
        document.getElementById("steam64confirmbody").innerHTML = "Din Steam64ID vil blive opdateret til:";
        document.getElementById("other").innerHTML = "ANDRE";
        document.getElementById("screenshotlbl").innerHTML = "Vis Skærmbillede";
        document.getElementById("keybindsub").innerHTML = "Klik på knappen, og tryk derefter på den tast, der svarer til din genvejstast for skærmbilleder, som er indstillet i Steam.";
        document.getElementById("desktoplbl").innerHTML = "Opret Genvej Til Desktop";
        document.getElementById("startwinlbl").innerHTML = "Start med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimeret Til Systembakken";
        document.getElementById("soundonlylbl").innerHTML = "Kun Lyd-Tilstand";
        document.getElementById("trackinglbl").innerHTML = 'Vis Meddelelse Om "Nu Sporing"';
        document.getElementById("slidervaluelbl").innerHTML = "Visningstid:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekund";
        } else {
            document.getElementById("seconds").innerHTML = "sekunder";
        }

        nouser = "Ingen Bruger Fundet";
        nogame = "Intet Spil Opdaget";
        nosound = "Standard (Ingen Lyd Valgt)";
        nosoundrare = "Standard (Ingen Lyd Valgt)";
        testdesc = `'Dine meddelelser fungerer korrekt.'`;
        rareheader = `'Sjælden Præstation Låst Op!`;
        unlinked = "ULINKET";
        linked = "LINKET";
        novalue = "Indtast venligst en værdi";
        screenshotmsg = "Skærmbillede";
        desktopexistsmsg = "Desktop Genvej findes allerede";
        desktopmsg = "Desktop Genvej";
        startwinmsg = "Start med Windows";
        startminmsg = "Start Minimeret";
        soundonlymsg = "Kun Lydtilstand";
        trackingmsg = '"Nu Sporing" Meddelelse';

        second = "sekund";
        seconds = "sekunder";

        tracknotifymsg = "Sporer nu præstationer for";

        resettitle = "Nulstil Applikation Til Standard?";
        resetdesc = `ADVARSEL: Dette vil fjerne alle brugerindstillinger!`;
        resetbtns = ["Nulstil","Afinstaller","Afbestille"];
    
        traylabel = "Intet Spil Opdaget";
        trayshow = "At Vise";
        trayexit = "Afslut";
    } else if (config.lang == "dutch") {
        document.getElementById("username").innerHTML = "Geen Gebruiker Gedetecteerd";
        document.getElementById("gamestatus").innerHTML = "Geen Spel Gedetecteerd";
        document.getElementById("soundfile").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
        document.getElementById("soundfilerare").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
        document.getElementById("maincheevsound").innerHTML = "Hoofdgeluid";
        document.getElementById("rarecheevsound").innerHTML = "Zeldzaam Geluid";
        document.getElementById("test").innerHTML = "TOON TESTMELDING";
        document.getElementById("testrare").innerHTML = "TOON ZELDZAME TESTMELDING";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast geïnstalleerd";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID set";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu snelkoppeling";
        document.getElementById("settingstitle").innerHTML = "INSTELLINGEN";
        document.getElementById("configtitle").innerHTML = "CONFIGURATIE";
        document.getElementById("statustitle").innerHTML = "TOESTAND:";
        document.getElementById("apibox").placeholder = "Klik om APIKey te typen/plakken";
        document.getElementById("steam64box").placeholder = "Klik om Steam64ID te typen/plakken";
        document.getElementById("apiconfirmbody").innerHTML = "Uw API Key zal worden bijgewerkt naar:";
        document.getElementById("steam64confirmbody").innerHTML = "Uw Steam64ID zal worden bijgewerkt naar:";
        document.getElementById("other").innerHTML = "ANDERE";
        document.getElementById("screenshotlbl").innerHTML = "Toon Prestatie Screenshot";
        document.getElementById("keybindsub").innerHTML = "Klik op de knop, en druk dan op de toets die overeenkomt met de sneltoets die je in Steam hebt ingesteld voor screenshots.";
        document.getElementById("desktoplbl").innerHTML = "Snelkoppeling Naar Desktop Maken";
        document.getElementById("startwinlbl").innerHTML = "Begin met Windows";
        document.getElementById("startminlbl").innerHTML = "Start Geminimaliseerd";
        document.getElementById("soundonlylbl").innerHTML = "Alleen Geluidsmodus";
        document.getElementById("trackinglbl").innerHTML = 'Spelmelding Weergeven';
        document.getElementById("slidervaluelbl").innerHTML = "Tijd Weergeven:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "seconde";
        } else {
            document.getElementById("seconds").innerHTML = "seconden";
        }

        nouser = "Geen Gebruiker Gedetecteerd";
        nogame = "Geen Spel Gedetecteerd";
        nosound = "Standaard (Geen Geluid Geselecteerd)";
        nosoundrare = "Standaard (Geen Geluid Geselecteerd)";
        testdesc = `'Uw meldingen werken correct.'`;
        rareheader = `'Zeldzame Prestatie Ontgrendeld!`;
        unlinked = "NIET GEKOPPELD";
        linked = "GEKOPPELD";
        novalue = "Voer alstublieft een waarde in";
        screenshotmsg = "Schermafbeelding";
        desktopexistsmsg = "Desktop snelkoppeling bestaat al";
        desktopmsg = "Desktop Snelkoppeling";
        startwinmsg = "Begin met Windows";
        startminmsg = "Begin Geminimaliseerd";
        soundonlymsg = "Alleen Geluid Modus";
        trackingmsg = 'Spelmelding';

        second = "seconde";
        seconds = "seconden";

        tracknotifymsg = "Nu prestaties bijhouden voor";
    
        resettitle = "Toepassing Terugzetten Naar Standaard?";
        resetdesc = `WAARSCHUWING: Hiermee worden alle gebruikersinstellingen verwijderd!`;
        resetbtns = ["Resetten","Verwijderen","Annuleren"];
    
        traylabel = "Geen Spel Gedetecteerd";
        trayshow = "Toon";
        trayexit = "Sluit";
    } else if (config.lang == "finnish") {
        document.getElementById("username").innerHTML = "Käyttäjää Ei Havaittu";
        document.getElementById("gamestatus").innerHTML = "Peliä Ei Havaittu";
        document.getElementById("soundfile").innerHTML = "Oletusarvo (Ei Ääntä Valittuna)";
        document.getElementById("soundfilerare").innerHTML = "Oletusarvo (Ei Ääntä Valittuna)";
        document.getElementById("maincheevsound").innerHTML = "Tärkein Saavutus Ääni";
        document.getElementById("rarecheevsound").innerHTML = "Harvinainen Saavutus Ääni";
        document.getElementById("test").innerHTML = "NÄYTÄ TESTI-ILMOITUS";
        document.getElementById("testrare").innerHTML = "NÄYTÄ HARVINAINEN TESTI-ILMOITUS";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast asennettu";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID setti";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu pikakuvake";
        document.getElementById("settingstitle").innerHTML = "ASETUKSET";
        document.getElementById("configtitle").innerHTML = "KONFIGUROINTI";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Kirjoita/liitä APIKey napsauttamalla";
        document.getElementById("steam64box").placeholder = "Kirjoita/liitä Steam64ID napsauttamalla";
        document.getElementById("apiconfirmbody").innerHTML = "API Key päivitetään muotoon:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID päivitetään muotoon:";
        document.getElementById("other").innerHTML = "MUUT";
        document.getElementById("screenshotlbl").innerHTML = "Näytä Kuvakaappaus";
        document.getElementById("keybindsub").innerHTML = "Napsauta painiketta ja paina sitten näppäintä, joka vastaa Steamissä asetettua kuvakaappauksen pikanäppäintä.";
        document.getElementById("desktoplbl").innerHTML = "Luo Desktop Pikakuvake";
        document.getElementById("startwinlbl").innerHTML = "Aloita Windowsista";
        document.getElementById("startminlbl").innerHTML = "Käynnistä Minimoitu";
        document.getElementById("soundonlylbl").innerHTML = "Äänitila";
        document.getElementById("trackinglbl").innerHTML = 'Näytä "Nyt Seuranta"-viesti';
        document.getElementById("slidervaluelbl").innerHTML = "Ilmoituksen Näyttöaika:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekunti";
        } else {
            document.getElementById("seconds").innerHTML = "sekuntia";
        }

        nouser = "Käyttäjää Ei Havaittu";
        nogame = "Peliä Ei Havaittu";
        nosound = "Oletusarvo (Ei Ääntä Valittuna)";
        nosoundrare = "Oletusarvo (Ei Ääntä Valittuna)";
        testdesc = `'Ilmoituksesi toimivat oikein.'`;
        rareheader = `'Harvinainen saavutus avattu!`;
        unlinked = "EI LINKITTY";
        linked = "LINKITTY";
        novalue = "Anna arvo";
        screenshotmsg = "Kuvakaappaus";
        desktopexistsmsg = "Desktop pikakuvake op on jo olemassa";
        desktopmsg = "Desktop pikakuvake";
        startwinmsg = "Aloita Windowsilla";
        startminmsg = "Aloita minimoitu";
        soundonlymsg = "Vain ääni -tila";
        trackingmsg = '"Nyt seuranta" -ilmoitus';

        second = "sekunti";
        seconds = "sekuntia";

        tracknotifymsg = "Nyt seurataan saavutuksia";

        resettitle = "Palautetaanko Sovellus Oletusasetuksiin?";
        resetdesc = `VAROITUS: Tämä poistaa kaikki käyttäjäasetukset!`;
        resetbtns = ["Nollaa","Poista Asennus","Peruuttaa"];
    
        traylabel = "Peliä Ei Havaittu";
        trayshow = "Näytä";
        trayexit = "Poistu";
    } else if (config.lang == "french") {
        document.getElementById("username").innerHTML = "Aucun Utilisateur Détecté";
        document.getElementById("gamestatus").innerHTML = "Aucun Jeu Détecté";
        document.getElementById("soundfile").innerHTML = "Par Défaut (Aucun Son Sélectionné)";
        document.getElementById("soundfilerare").innerHTML = "Par Défaut (Aucun Son Sélectionné)";
        document.getElementById("maincheevsound").innerHTML = "Son Succès Normal";
        document.getElementById("rarecheevsound").innerHTML = "Son Succès Rare";
        document.getElementById("test").innerHTML = "TEST SUCCÈS NORMAL";
        document.getElementById("testrare").innerHTML = "TEST SUCCÈS RARE";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installé";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID configuré";
        document.getElementById("startshortcutlbl").innerHTML = "Raccourci du Menu Démarrer";
        document.getElementById("settingstitle").innerHTML = "PARAMÈTRES";
        document.getElementById("configtitle").innerHTML = "CONFIGURATION";
        document.getElementById("statustitle").innerHTML = "STATUT:";
        document.getElementById("apibox").placeholder = "Cliquez pour saisir/coller votre clé API";
        document.getElementById("steam64box").placeholder = "Cliquez pour saisir/coller votre Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Votre clé API sera mise à jour pour:";
        document.getElementById("steam64confirmbody").innerHTML = "Votre Steam64ID sera mise à jour pour:";
        document.getElementById("other").innerHTML = "AUTRE";
        document.getElementById("screenshotlbl").innerHTML = "Capture d'Écran";
        document.getElementById("keybindsub").innerHTML = "Cliquez sur le bouton, puis appuyez sur la touche qui correspond à votre raccourci clavier de capture d'écran défini dans Steam.";
        document.getElementById("desktoplbl").innerHTML = "Crée Un Raccourci Bureau";
        document.getElementById("startwinlbl").innerHTML = "Démarrage Automatique";
        document.getElementById("startminlbl").innerHTML = "Démarrage Minimisé";
        document.getElementById("soundonlylbl").innerHTML = "Mode Audio Uniquement";
        document.getElementById("trackinglbl").innerHTML = 'Afficher "Suivi des Succés"';
        document.getElementById("slidervaluelbl").innerHTML = "Temps d'Affichage:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "seconde";
        } else {
            document.getElementById("seconds").innerHTML = "secondes";
        }

        nouser = "Aucun Utilisateur Détecté";
        nogame = "Aucun Jeu Détecté";
        nosound = "Par Défaut (Aucun Son Sélectionné)";
        nosoundrare = "Par Défaut (Aucun Son Sélectionné)";
        testdesc = `'Vos notifications fonctionnent correctement.'`;
        rareheader = `'Succès Rare Débloqué!`;
        unlinked = "NON CONNECTÉ";
        linked = "CONNECTÉ";
        novalue = "Veuillez entrer une valeur";
        screenshotmsg = "Capture d'Écran";
        desktopexistsmsg = "Le raccourci Bureau existe déjà";
        desktopmsg = "Raccourci Bureau";
        startwinmsg = "Commencez par Windows";
        startminmsg = "Début Minimisé";
        soundonlymsg = "Mode Audio Uniquement";
        trackingmsg = 'Afficher "Suivi des Succés"';

        second = "seconde";
        seconds = "secondes";

        tracknotifymsg = "Suivi des succés activé pour";
        
        resettitle = "Réinitialiser l'Application Par Défaut?";
        resetdesc = `AVERTISSEMENT: Cela supprimera tous les paramètres utilisateur!`;
        resetbtns = ["Réinitialiser","Désinstaller","Annuler"];
    
        traylabel = "Aucun Jeu Détecté";
        trayshow = "Afficher";
        trayexit = "Sortir";
    } else if (config.lang == "german") {
        document.getElementById("username").innerHTML = "Kein Benutzer Erkannt";
        document.getElementById("gamestatus").innerHTML = "Kein Spiel Erkannt";
        document.getElementById("soundfile").innerHTML = "Standard (Kein Ton Ausgewählt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Kein Ton Ausgewählt)";
        document.getElementById("maincheevsound").innerHTML = "Ton Für Normale Errungenschaften";
        document.getElementById("rarecheevsound").innerHTML = "Ton Für Seltene Errungenschaften";
        document.getElementById("test").innerHTML = "TESTBENACHRICHTIGUNG ANZEIGEN";
        document.getElementById("testrare").innerHTML = "SELTENE TESTBENACHRICHTIGUNG ANZEIGEN";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installiert";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID konfiguriert";
        document.getElementById("startshortcutlbl").innerHTML = "Verknüpfung im Startmenü";
        document.getElementById("settingstitle").innerHTML = "EINSTELLUNGEN";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Klicken Sie hier um den API Key einzugeben/einzufügen";
        document.getElementById("steam64box").placeholder = "Klicken Sie hier um die Steam64ID einzugeben/einzufügen";
        document.getElementById("apiconfirmbody").innerHTML = "Ihr API Key wird aktualisiert auf:";
        document.getElementById("steam64confirmbody").innerHTML = "Ihr Steam64ID wird aktualisiert auf:";
        document.getElementById("other").innerHTML = "SONSTIGES";
        document.getElementById("screenshotlbl").innerHTML = "Screenshot Anzeigen";
        document.getElementById("keybindsub").innerHTML = "Klicken Sie auf die Schaltfläche und drücken Sie dann die Taste, die Ihrer Screenshot-Tastenbelegung in Steam entspricht.";
        document.getElementById("desktoplbl").innerHTML = "Desktopverknüpfung Erstellen";
        document.getElementById("startwinlbl").innerHTML = "Starte mit Windows";
        document.getElementById("startminlbl").innerHTML = "Minimiert Starten";
        document.getElementById("soundonlylbl").innerHTML = "Nur Ton Abspielen";
        document.getElementById("trackinglbl").innerHTML = 'Spielbenachrichtigung Anzeigen';
        document.getElementById("slidervaluelbl").innerHTML = "Anzeigezeit:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekunde";
        } else {
            document.getElementById("seconds").innerHTML = "sekunden";
        }

        nouser = "Kein Benutzer Erkannt";
        nogame = "Kein Spiel Erkannt";
        nosound = "Standard (Kein Ton Ausgewählt)";
        nosoundrare = "Standard (Kein Ton Ausgewählt)";
        testdesc = `'Ihre Benachrichtigungen funktionieren ordnungsgemäß.'`;
        rareheader = `'Seltene Errungenschaft Freigeschaltet!`
        unlinked = "NICHT VERKNÜPFT";
        linked = "VERKNÜPFT";
        novalue = "Bitte einen Wert eingeben";
        screenshotmsg = "Benachrichtigungs Screenshot";
        desktopexistsmsg = "Desktopverknüpfung existiert bereits";
        desktopmsg = "Desktopverknüpfung";
        startwinmsg = "Starte mit Windows";
        startminmsg = "Minimiert Starten";
        soundonlymsg = "Nur Ton Abspielen";
        trackingmsg = 'Spielbenachrichtigung';

        second = "sekunde";
        seconds = "sekunden";
    
        tracknotifymsg = "Errungenschaft werden jetzt angezeigt für";

        resettitle = "Anwendung Auf Standard Zurücksetzen?";
        resetdesc = `WARNUNG: Dadurch werden alle Benutzereinstellungen entfernt!`;
        resetbtns = ["Zurücksetzen","Deinstallieren","Kündigen"];

        traylabel = "Kein Spiel Erkannt";
        trayshow = "Anzeigen";
        trayexit = "Ausgang";
    } else if (config.lang == "greek") {
        document.getElementById("username").innerHTML = "Δεν εντοπίστηκε χρήστης";
        document.getElementById("gamestatus").innerHTML = "Δεν εντοπίστηκε παιχνίδι";
        document.getElementById("soundfile").innerHTML = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        document.getElementById("soundfilerare").innerHTML = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        document.getElementById("maincheevsound").innerHTML = "Ήχος κύριου επιτεύγματος";
        document.getElementById("rarecheevsound").innerHTML = "Σπάνιος ήχος επιτεύγματος";
        document.getElementById("test").innerHTML = "ΕΜΦΑΝΙΣΗ ΕΙΔΟΠΟΙΗΣΗΣ ΔΟΚΙΜΗΣ";
        document.getElementById("testrare").innerHTML = "ΕΜΦΑΝΙΣΗ ΕΙΔΟΠΟΙΗΣΗΣ ΣΠΑΝΙΩΝ ΔΟΚΙΜΩΝ";
        document.getElementById("btinstalllbl").innerHTML = "Εγκαταστάθηκε το BurntToast";
        document.getElementById("btappidlbl").innerHTML = "Σύνολο BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "Συντόμευση StartMenu";
        document.getElementById("settingstitle").innerHTML = "ΡΥΘΜΙΣΕΙΣ";
        document.getElementById("configtitle").innerHTML = "ΔΙΑΜΟΡΦΩΣΗ";
        document.getElementById("statustitle").innerHTML = "ΚΑΤΑΣΤΑΣΗ:";
        document.getElementById("apibox").placeholder = "Κάντε κλικ για να πληκτρολογήσετε/επικολλήσετε API Key";
        document.getElementById("steam64box").placeholder = "Κάντε κλικ για να πληκτρολογήσετε/επικολλήσετε Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Το API Key σας θα ενημερωθεί σε:";
        document.getElementById("steam64confirmbody").innerHTML = "Το Steam64ID σας θα ενημερωθεί σε:";
        document.getElementById("other").innerHTML = "ΑΛΛΑ";
        document.getElementById("screenshotlbl").innerHTML = "Εμφάνιση στιγμιότυπου οθόνης";
        document.getElementById("keybindsub").innerHTML = "Κάντε κλικ στο κουμπί και, στη συνέχεια, πατήστε το πλήκτρο που ταιριάζει με το στιγμιότυπο οθόνης που έχετε ορίσει στο Steam.";
        document.getElementById("desktoplbl").innerHTML = "Συντόμευση Desktop";
        document.getElementById("startwinlbl").innerHTML = "Ξεκινήστε με τα Windows";
        document.getElementById("startminlbl").innerHTML = "Έναρξη Ελαχιστοποιημένη";
        document.getElementById("soundonlylbl").innerHTML = "Μόνο λειτουργία ήχου";
        document.getElementById("trackinglbl").innerHTML = 'Εμφάνιση "Τώρα Παρατηρώντας"';
        document.getElementById("slidervaluelbl").innerHTML = "Ώρα Εμφάνισης:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "δευτερόλεπτο";
        } else {
            document.getElementById("seconds").innerHTML = "δευτερόλεπτα";
        }

        nouser = "Δεν εντοπίστηκε χρήστης";
        nogame = "Δεν εντοπίστηκε παιχνίδι";
        nosound = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        nosoundrare = "Προεπιλογή (Δεν έχει επιλεγεί ήχος)";
        testdesc = `'Οι ειδοποιήσεις σας λειτουργούν σωστά.'`;
        rareheader = `'Ξεκλείδωτο σπάνιο επίτευγμα!`;
        unlinked = "ΑΠΟΣΥΝΔΕΣΗ";
        linked = "ΣΥΝΔΕΣΜΕΝΟ";
        novalue = "Παρακαλώ εισάγετε κάτι";
        screenshotmsg = "Στιγμιότυπο οθόνης επιτεύγματος";
        desktopexistsmsg = "Η συντόμευση επιφάνειας εργασίας υπάρχει ήδη";
        desktopmsg = "Συντομευση ΕΠΙΦΑΝΕΙΑΣ ΕΡΓΑΣΙΑΣ";
        startwinmsg = "Ξεκινήστε με τα Windows";
        startminmsg = "Έναρξη Ελαχιστοποιημένη";
        soundonlymsg = "Λειτουργία μόνο ήχου";
        trackingmsg = 'Ειδοποίηση "Τώρα Παρατηρώντας"';

        second = "δευτερόλεπτο";
        seconds = "δευτερόλεπτα";

        tracknotifymsg = "Τώρα παρατηρώντας τα επιτεύγματα για";
    
        resettitle = "Επαναφορά της εφαρμογής στην προεπιλογή;";
        resetdesc = `ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Αυτό θα καταργήσει όλες τις ρυθμίσεις χρήστη!`;
        resetbtns = ["Επαναφορά","Απεγκατάσταση","Ακυρώνω"];
    
        traylabel = "Δεν εντοπίστηκε παιχνίδι";
        trayshow = "Ανοιξε";
        trayexit = "Έξοδος";
    } else if (config.lang == "hungarian") {
        document.getElementById("username").innerHTML = "Nincs Felhasználó Észlelve";
        document.getElementById("gamestatus").innerHTML = "Nincs Játék Észlelve";
        document.getElementById("soundfile").innerHTML = "Alapértelmezett (Nincs Hang Kiválasztva)";
        document.getElementById("soundfilerare").innerHTML = "Alapértelmezett (Nincs Hang Kiválasztva)";
        document.getElementById("maincheevsound").innerHTML = "Fő Értesítési Hang";
        document.getElementById("rarecheevsound").innerHTML = "Ritka Értesítési Hang";
        document.getElementById("test").innerHTML = "TESZT ÜZENET MUTATÁSA";
        document.getElementById("testrare").innerHTML = "RITKA TESZT ÜZENET MUTATÁSA";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast telepítve";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID készlet";
        document.getElementById("startshortcutlbl").innerHTML = "Start menü parancsikonja";
        document.getElementById("settingstitle").innerHTML = "BEÁLLÍTÁSOK";
        document.getElementById("configtitle").innerHTML = "KONFIGURÁCIÓ";
        document.getElementById("statustitle").innerHTML = "ÁLLAPOT:";
        document.getElementById("apibox").placeholder = "Kattintson az API Key beírásához/beillesztéséhez";
        document.getElementById("steam64box").placeholder = "Kattintson a Steam64ID beírásához/beillesztéséhez";
        document.getElementById("apiconfirmbody").innerHTML = "Az APIKEY a következőre frissül:";
        document.getElementById("steam64confirmbody").innerHTML = "Az Steam64ID a következőre frissül:";
        document.getElementById("other").innerHTML = "EGYÉB";
        document.getElementById("screenshotlbl").innerHTML = "Képernyőkép Megjelenítése";
        document.getElementById("keybindsub").innerHTML = "Kattintson a gombra, majd nyomja meg azt a gombot, amely megfelel a Steamben beállított képernyőkép-billentyűkombinációnak.";
        document.getElementById("desktoplbl").innerHTML = "Parancsikon Létrehozása";
        document.getElementById("startwinlbl").innerHTML = "Futtassa Amikor A Windows Elindul";
        document.getElementById("startminlbl").innerHTML = "Indítás Minimalizálva";
        document.getElementById("soundonlylbl").innerHTML = "Csak Hang Mód";
        document.getElementById("trackinglbl").innerHTML = '"Most Követési" Értesítés';
        document.getElementById("slidervaluelbl").innerHTML = "Értesítési Idő";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "másodperc";
        } else {
            document.getElementById("seconds").innerHTML = "másodperc";
        }

        nouser = "Nincs Felhasználó Észlelve";
        nogame = "Nincs Játék Észlelve";
        nosound = "Alapértelmezett (Nincs Hang Kiválasztva)";
        nosoundrare = "Alapértelmezett (Nincs Hang Kiválasztva)";
        testdesc = `'Az értesítések megfelelően működnek.'`;
        rareheader = `'Ritka Teljesítmény Feloldva!`;
        unlinked = "NEM KAPCSOLÓDIK";
        linked = "CSATLAKOZTATVA";
        novalue = "Adjon meg egy értéket";
        screenshotmsg = "Képernyőkép";
        desktopexistsmsg = "Az Desktop parancsikon már létezik";
        desktopmsg = "Desktop parancsikon";
        startwinmsg = "Futtassa Amikor A Windows Elindul";
        startminmsg = "Indítás Minimalizálva";
        soundonlymsg = "Csak Hang Mód";
        trackingmsg = '"Most Követési" Értesítés';

        second = "másodperc";
        seconds = "másodperc";

        tracknotifymsg = "Most követés";

        resettitle = "Visszaállítja Az Alkalmazást Az Alapértelmezettre?";
        resetdesc = `FIGYELMEZTETÉS: Ezzel eltávolítja az összes felhasználói beállítást!`;
        resetbtns = ["Visszaállítás","Eltávolítás","Megszünteti"];
    
        traylabel = "Nincs Játék Észlelve";
        trayshow = "Mutasd";
        trayexit = "Kilépés";
    } else if (config.lang == "italian") {
        document.getElementById("username").innerHTML = "Nessun Utente Rilevato";
        document.getElementById("gamestatus").innerHTML = "Nessun Gioco Rilevato";
        document.getElementById("soundfile").innerHTML = "Predefinito (Nessun Suono Selezionato)";
        document.getElementById("soundfilerare").innerHTML = "Predefinito (Nessun Suono Selezionato)";
        document.getElementById("maincheevsound").innerHTML = "Suono Principale";
        document.getElementById("rarecheevsound").innerHTML = "Suono Raro";
        document.getElementById("test").innerHTML = "MOSTRA NOTIFICA DI PROVA";
        document.getElementById("testrare").innerHTML = "MOSTRA NOTIFICA DI PROVA RARA";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installato";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID impostato";
        document.getElementById("startshortcutlbl").innerHTML = "Scorciatoia del menu Start";
        document.getElementById("settingstitle").innerHTML = "IMPOSTAZIONI";
        document.getElementById("configtitle").innerHTML = "CONFIGURAZIONE";
        document.getElementById("statustitle").innerHTML = "STATO:";
        document.getElementById("apibox").placeholder = "Fare clic per digitare/incollare API Key";
        document.getElementById("steam64box").placeholder = "Fare clic per digitare/incollare Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Il tuo API Key verrà aggiornata a:";
        document.getElementById("steam64confirmbody").innerHTML = "Il tuo Steam64ID verrà aggiornato a:";
        document.getElementById("other").innerHTML = "ALTRO";
        document.getElementById("screenshotlbl").innerHTML = "Mostra Screenshot";
        document.getElementById("keybindsub").innerHTML = "Fai clic sul pulsante, quindi premi il tasto che corrisponde al set di combinazioni di tasti dello screenshot in Steam.";
        document.getElementById("desktoplbl").innerHTML = "Collegamento Sul Desktop";
        document.getElementById("startwinlbl").innerHTML = "Inizia con Windows";
        document.getElementById("startminlbl").innerHTML = "Inizio Ridotto a Icona";
        document.getElementById("soundonlylbl").innerHTML = "Modalità Solo Audio";
        document.getElementById("trackinglbl").innerHTML = 'Mostra Notifica "Ora Osservando"';
        document.getElementById("slidervaluelbl").innerHTML = "Durata Della Notifica:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "secondo";
        } else {
            document.getElementById("seconds").innerHTML = "secondi";
        }

        nouser = "Nessun Utente Rilevato";
        nogame = "Nessun Gioco Rilevato";
        nosound = "Predefinito (Nessun Suono Selezionato)";
        nosoundrare = "Predefinito (Nessun Suono Selezionato)";
        testdesc = `'Le tue notifiche funzionano correttamente.'`;
        rareheader = `'Obiettivo Raro Sbloccato!`;
        unlinked = "SCOLLEGATO";
        linked = "COLLEGATO";
        novalue = "Per favore inserisci un valore";
        screenshotmsg = "Immagine Di Notifica";
        desktopexistsmsg = "Il collegamento sul Desktop esiste già";
        desktopmsg = "Collegamento Sul Desktop";
        startwinmsg = "Inizia con Windows";
        startminmsg = "Inizio Ridotto a Icona";
        soundonlymsg = "Modalità Solo Audio";
        trackingmsg = 'Mostra Notifica Di Gioco';

        second = "secondo";
        seconds = "secondi";

        tracknotifymsg = "Ora monitorando i risultati per";
    
        resettitle = "Ripristinare l'Applicazione Ai Predefiniti?";
        resetdesc = `ATTENZIONE: Questo rimuoverà tutte le impostazioni utente!`;
        resetbtns = ["Ripristina","Disinstalla","Annulla"];
    
        traylabel = "Nessun Gioco Rilevato";
        trayshow = "Mostra";
        trayexit = "Esci";
    } else if (config.lang == "japanese") {
        document.getElementById("username").innerHTML = "ユーザーが検出されません";
        document.getElementById("gamestatus").innerHTML = "ゲームが検出されません";
        document.getElementById("soundfile").innerHTML = "デフォルト（サウンドが選択されていません）";
        document.getElementById("soundfilerare").innerHTML = "デフォルト（サウンドが選択されていません）";
        document.getElementById("maincheevsound").innerHTML = "主なアチーブメントサウンド";
        document.getElementById("rarecheevsound").innerHTML = "レアアチーブメントサウンド";
        document.getElementById("test").innerHTML = "テスト通知を表示する";
        document.getElementById("testrare").innerHTML = "まれなテスト通知を表示する";
        document.getElementById("btinstalllbl").innerHTML = "BurntToastがインストールされました";
        document.getElementById("btappidlbl").innerHTML = "BurntToastAppIDセット";
        document.getElementById("startshortcutlbl").innerHTML = "StartMenuショートカット";
        document.getElementById("settingstitle").innerHTML = "設定";
        document.getElementById("configtitle").innerHTML = "構成";
        document.getElementById("statustitle").innerHTML = "状態:";
        document.getElementById("apibox").placeholder = "クリックしてAPIKeyを入力/貼り付け";
        document.getElementById("steam64box").placeholder = "クリックしてSteam64IDを入力/貼り付け";
        document.getElementById("apiconfirmbody").innerHTML = "APIKeyは次のように更新されます:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64IDは次のように更新されます:";
        document.getElementById("other").innerHTML = "他の";
        document.getElementById("screenshotlbl").innerHTML = "スクリーンショットを表示";
        document.getElementById("keybindsub").innerHTML = "ボタンをクリックしてから、Steamで設定されているスクリーンショットのキーバインドに一致するキーを押します.";
        document.getElementById("desktoplbl").innerHTML = "デスクトップのショートカット";
        document.getElementById("startwinlbl").innerHTML = "Windowsから始める";
        document.getElementById("startminlbl").innerHTML = "システムトレイへの最小化を開始";
        document.getElementById("soundonlylbl").innerHTML = "サウンドオンリーモード";
        document.getElementById("trackinglbl").innerHTML = '「現在監視中」の通知を表示する';
        document.getElementById("slidervaluelbl").innerHTML = "通知表示時間:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "秒";
        } else {
            document.getElementById("seconds").innerHTML = "秒";
        }
        
        nouser = "ユーザーが検出されません";
        nogame = "ゲームが検出されません";
        nosound = "デフォルト（サウンドが選択されていません）";
        nosoundrare = "デフォルト（サウンドが選択されていません）";
        testdesc = `'通知は正しく機能しています。'`;
        rareheader = `'珍しい成果が解き放たれる！`;
        unlinked = "リンクされていない";
        linked = "リンク";
        novalue = "値を入力してください";
        screenshotmsg = "実績のスクリーンショット";
        desktopexistsmsg = "デスクトップショートカットはすでに存在します";
        desktopmsg = "デスクトップのショートカット";
        startwinmsg = "Windowsから始める";
        startminmsg = "最小化を開始";
        soundonlymsg = "サウンドオンリーモード";
        trackingmsg = '「現在監視中」の通知';

        second = "秒";
        seconds = "秒";

        tracknotifymsg = "の実績を追跡する";

        resettitle = "アプリケーションをデフォルトにリセットしますか？";
        resetdesc = `警告：これにより、すべてのユーザー設定が削除されます。`;
        resetbtns = ["リセット","アンインストール","キャンセル"];
    
        traylabel = "ゲームが検出されません";
        trayshow = "見せる";
        trayexit = "出口";
    } else if (config.lang == "korean") {
        document.getElementById("username").innerHTML = "감지된 사용자 없음";
        document.getElementById("gamestatus").innerHTML = "감지된 게임 없음";
        document.getElementById("soundfile").innerHTML = "기본값(선택한 소리 없음)";
        document.getElementById("soundfilerare").innerHTML = "기본값(선택한 소리 없음)";
        document.getElementById("maincheevsound").innerHTML = "주요 업적 사운드";
        document.getElementById("rarecheevsound").innerHTML = "희귀 성취음";
        document.getElementById("test").innerHTML = "테스트 알림 표시";
        document.getElementById("testrare").innerHTML = "희귀 테스트 알림 표시";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast 설치";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID 설정";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu 단축키";
        document.getElementById("settingstitle").innerHTML = "설정";
        document.getElementById("configtitle").innerHTML = "구성";
        document.getElementById("statustitle").innerHTML = "상태:";
        document.getElementById("apibox").placeholder = "클릭하여 API Key 입력/붙여넣기";
        document.getElementById("steam64box").placeholder = "클릭하여 Steam64ID를 입력/붙여넣기";
        document.getElementById("apiconfirmbody").innerHTML = "API Key가 다음으로 업데이트됩니다.:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID가 다음으로 업데이트됩니다.:";
        document.getElementById("other").innerHTML = "다른";
        document.getElementById("screenshotlbl").innerHTML = "업적 스크린샷 표시";
        document.getElementById("keybindsub").innerHTML = "버튼을 클릭한 다음 Steam에 설정된 스크린샷 키 바인딩과 일치하는 키를 누르십시오.";
        document.getElementById("desktoplbl").innerHTML = "바탕 화면 바로 가기 만들기";
        document.getElementById("startwinlbl").innerHTML = "Windows로 시작";
        document.getElementById("startminlbl").innerHTML = "시스템 트레이에 최소화된 시작";
        document.getElementById("soundonlylbl").innerHTML = "사운드 전용 모드";
        document.getElementById("trackinglbl").innerHTML = '"지금 추적" 알림 표시';
        document.getElementById("slidervaluelbl").innerHTML = "알림 표시 시간:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "초";
        } else {
            document.getElementById("seconds").innerHTML = "초";
        }
        
        nouser = "감지된 사용자 없음";
        nogame = "감지된 게임 없음";
        nosound = "기본값(선택한 소리 없음)";
        nosoundrare = "기본값(선택한 소리 없음)";
        testdesc = `'알림이 올바르게 작동하고 있습니다.'`;
        rareheader = `'희귀 업적 잠금 해제!`;
        unlinked = "연결되지 않음";
        linked = "연결됨";
        novalue = "값을 입력 해주세요";
        screenshotmsg = "업적 스크린샷";
        desktopexistsmsg = "바탕 화면 바로 가기가 이미 있습니다.";
        desktopmsg = "바탕 화면 바로 가기";
        startwinmsg = "Windows로 시작";
        startminmsg = "최소화 시작";
        soundonlymsg = "사운드 전용 모드";
        trackingmsg = '"지금 추적 중" 알림';

        second = "초";
        seconds = "초";

        tracknotifymsg = "이제 에 대한 업적을 추적합니다";

        resettitle = "애플리케이션을 기본값으로 재설정하시겠습니까?";
        resetdesc = `경고: 이렇게 하면 모든 사용자 설정이 제거됩니다!`;
        resetbtns = ["다시 놓다","제거","취소"];
    
        traylabel = "감지된 게임 없음";
        trayshow = "보이다";
        trayexit = "퇴거하다";
    } else if (config.lang == "norwegian") {
        document.getElementById("username").innerHTML = "Ingen Bruker Oppdaget";
        document.getElementById("gamestatus").innerHTML = "Ingen Spill Oppdaget";
        document.getElementById("soundfile").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Ingen Lyd Valgt)";
        document.getElementById("maincheevsound").innerHTML = "Hovedprestasjonslyd";
        document.getElementById("rarecheevsound").innerHTML = "Sjelden Prestasjonslyd";
        document.getElementById("test").innerHTML = "VIS TESTVARSEL";
        document.getElementById("testrare").innerHTML = "VIS SJELDEN TESTVARSLING";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installert";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID satt";
        document.getElementById("startshortcutlbl").innerHTML = "Startmeny snarvei";
        document.getElementById("settingstitle").innerHTML = "INNSTILLINGER";
        document.getElementById("configtitle").innerHTML = "KONFIGURASJON";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Klikk for å skrive inn/lime inn API Key";
        document.getElementById("steam64box").placeholder = "Klikk for å skrive/lime inn Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Din API Key vil bli oppdatert til:";
        document.getElementById("steam64confirmbody").innerHTML = "Din Steam64ID vil bli oppdatert til:";
        document.getElementById("other").innerHTML = "ANNEN";
        document.getElementById("screenshotlbl").innerHTML = "Vis Skjermbilde";
        document.getElementById("keybindsub").innerHTML = "Klikk på knappen, og trykk deretter på tasten som samsvarer med skjermbilde-tastebindingen i Steam.";
        document.getElementById("desktoplbl").innerHTML = "Lag Desktop Snarvei";
        document.getElementById("startwinlbl").innerHTML = "Start med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimert";
        document.getElementById("soundonlylbl").innerHTML = "Kun Lydmodus";
        document.getElementById("trackinglbl").innerHTML = 'Vis "Nå Sporing"-Varsel';
        document.getElementById("slidervaluelbl").innerHTML = "Varslingsvisningstid:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekund";
        } else {
            document.getElementById("seconds").innerHTML = "sekunder";
        }

        nouser = "Ingen Bruker Oppdaget";
        nogame = "Ingen Spill Oppdaget";
        nosound = "Standard (Ingen Lyd Valgt)";
        nosoundrare = "Standard (Ingen Lyd Valgt)";
        testdesc = `'Varslene dine fungerer som de skal.'`;
        rareheader = `'Sjelden Prestasjon Låst Opp!`;
        unlinked = "IKKE KNYTTET";
        linked = "KNYTTET";
        novalue = "Vennligst angi en verdi";
        screenshotmsg = "Skjermbilde";
        desktopexistsmsg = "Desktop-snarveien finnes allerede";
        desktopmsg = "Desktop-snarvei";
        startwinmsg = "Start med Windows";
        startminmsg = "Start Minimert";
        soundonlymsg = "Kun Lydmodus";
        trackingmsg = '"Nå Sporing"-Varsel';

        second = "sekund";
        seconds = "sekunder";

        tracknotifymsg = "Nå sporing prestasjoner for";
    
        resettitle = "Tilbakestille Applikasjonen Til Standard?";
        resetdesc = `ADVARSEL: Dette vil fjerne alle brukerinnstillinger!`;
        resetbtns = ["Nullstille","Avinstaller","Avbryt"];
    
        traylabel = "Ingen Spill Oppdaget";
        trayshow = "Vise";
        trayexit = "Lukke";
    } else if (config.lang == "polish") {
        document.getElementById("username").innerHTML = "Nie Wykryto Użytkownika";
        document.getElementById("gamestatus").innerHTML = "Nie Wykryto Gry";
        document.getElementById("soundfile").innerHTML = "Domyślnie (Nie Wybrano Dźwięku)";
        document.getElementById("soundfilerare").innerHTML = "Domyślnie (Nie Wybrano Dźwięku)";
        document.getElementById("maincheevsound").innerHTML = "Główny Dźwięk";
        document.getElementById("rarecheevsound").innerHTML = "Rzadki Dźwięk";
        document.getElementById("test").innerHTML = "POKAŻ POWIADOMIENIE TESTOWE";
        document.getElementById("testrare").innerHTML = "POKAŻ RZADKIE POWIADOMIENIE TESTOWE";
        document.getElementById("btinstalllbl").innerHTML = "Zainstalowano BurntToast";
        document.getElementById("btappidlbl").innerHTML = "Zestaw BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "Skrót do menu Start";
        document.getElementById("settingstitle").innerHTML = "USTAWIENIA";
        document.getElementById("configtitle").innerHTML = "KONFIGURACJA";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Kliknij aby wpisać/wkleić API Key";
        document.getElementById("steam64box").placeholder = "Kliknij aby wpisać/wkleić Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Twój API Key zostanie zaktualizowany do:";
        document.getElementById("steam64confirmbody").innerHTML = "Twój Steam64ID zostanie zaktualizowany do:";
        document.getElementById("other").innerHTML = "INNE";
        document.getElementById("screenshotlbl").innerHTML = "Pokaż Zrzut Ekranu Osiągnięcia";
        document.getElementById("keybindsub").innerHTML = "Kliknij przycisk, a następnie naciśnij klawisz, który odpowiada Twojemu skrótowi klawiszowemu zrzutu ekranu na Steam.";
        document.getElementById("desktoplbl").innerHTML = "Utwórz Skrót Na Pulpicie";
        document.getElementById("startwinlbl").innerHTML = "Uruchom z Windows";
        document.getElementById("startminlbl").innerHTML = "Zacznij w Zasobniku";
        document.getElementById("soundonlylbl").innerHTML = "Tryb Samego Dźwięku";
        document.getElementById("trackinglbl").innerHTML = 'Wyświetl Powiadomienie „Śledzace”';
        document.getElementById("slidervaluelbl").innerHTML = "Czas Wyświetlania:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekunda";
        } else {
            document.getElementById("seconds").innerHTML = "sekundy";
        }

        nouser = "Nie Wykryto Użytkownika";
        nogame = "Nie Wykryto Gry";
        nosound = "Domyślnie (Nie Wybrano Dźwięku)";
        nosoundrare = "Domyślnie (Nie Wybrano Dźwięku)";
        testdesc = `'Twoje powiadomienia działają poprawnie.'`;
        rareheader = `'Odblokowane Rzadkie Osiągnięcie!`;
        unlinked = "NIE POŁĄCZONY";
        linked = "POŁĄCZONY";
        novalue = "Proszę wprowadzić wartość";
        screenshotmsg = "Zrzut Ekranu Osiągnięć";
        desktopexistsmsg = "Skrót na Desktop już istnieje";
        desktopmsg = "Skrót Na Desktop";
        startwinmsg = "Uruchom z Windows";
        startminmsg = "Zacznij w Zasobniku";
        soundonlymsg = "Tryb Tylko Dźwięk";
        trackingmsg = 'Powiadomienie „Śledzenie”';

        second = "sekunda";
        seconds = "sekundy";

        tracknotifymsg = "Pokazywanie osiągnięć dla";

        resettitle = "Zresetować Aplikację Do Domyślnych?";
        resetdesc = `OSTRZEŻENIE: Spowoduje to usunięcie wszystkich ustawień użytkownika!`;
        resetbtns = ["Resetowanie","Odinstaluj","Anuluj"];
    
        traylabel = "Nie Wykryto Gry";
        trayshow = "Pokaż";
        trayexit = "Wyjdź";
    } else if (config.lang == "portuguese") {
        document.getElementById("username").innerHTML = "Nenhum Usuário Detectado";
        document.getElementById("gamestatus").innerHTML = "Nenhum Jogo Detectado";
        document.getElementById("soundfile").innerHTML = "Padrão (Nenhum Som Selecionado)";
        document.getElementById("soundfilerare").innerHTML = "Padrão (Nenhum Som Selecionado)";
        document.getElementById("maincheevsound").innerHTML = "Som de Notificação Principal";
        document.getElementById("rarecheevsound").innerHTML = "Som de Notificação Raro";
        document.getElementById("test").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE";
        document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE RARA";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast instalado";
        document.getElementById("btappidlbl").innerHTML = "Conjunto BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "Atalho do Menu Iniciar";
        document.getElementById("settingstitle").innerHTML = "DEFINIÇÕES";
        document.getElementById("configtitle").innerHTML = "CONFIGURAÇÃO";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Clique para digitar/colar API Key";
        document.getElementById("steam64box").placeholder = "Clique para digitar/colar Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Sua API Key será atualizada para:";
        document.getElementById("steam64confirmbody").innerHTML = "Seu Steam64ID será atualizado para:";
        document.getElementById("other").innerHTML = "OUTROS";
        document.getElementById("screenshotlbl").innerHTML = "Mostrar Captura de Tela";
        document.getElementById("keybindsub").innerHTML = "Clique no botão e, a seguir, pressione a tecla que corresponde à combinação de teclas da captura de tela definida no Steam.";
        document.getElementById("desktoplbl").innerHTML = "Atalho Desktop";
        document.getElementById("startwinlbl").innerHTML = "Executar com Windows";
        document.getElementById("startminlbl").innerHTML = "Iniciar Minimizado";
        document.getElementById("soundonlylbl").innerHTML = "Modo Apenas Som";
        document.getElementById("trackinglbl").innerHTML = 'Mostrar "Agora Rastreando"';
        document.getElementById("slidervaluelbl").innerHTML = "Tempo de Exibição:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "segundo";
        } else {
            document.getElementById("seconds").innerHTML = "segundos";
        }

        nouser = "Nenhum Usuário Detectado";
        nogame = "Nenhum Jogo Detectado";
        nosound = "Padrão (Nenhum Som Selecionado)";
        nosoundrare = "Padrão (Nenhum Som Selecionado)";
        testdesc = `'Suas notificações estão funcionando corretamente.'`;
        rareheader = `'Conquista Rara Desbloqueada!`;
        unlinked = "NÃO CONECTADO";
        linked = "CONECTADO";
        novalue = "Por favor insira um valor";
        screenshotmsg = "Captura de Tela";
        desktopexistsmsg = "O atalho Desktop já existe";
        desktopmsg = "Atalho Desktop";
        startwinmsg = "Executar com Windows";
        startminmsg = "Iniciar Minimizado";
        soundonlymsg = "Modo Apenas Som";
        trackingmsg = 'Mostrar "Agora Rastreando"';

        second = "segundo";
        seconds = "segundos";
    
        tracknotifymsg = "Agora rastreando conquistas para";

        resettitle = "Redefinir o Aplicativo Para o Padrão?";
        resetdesc = `AVISO: Isso removerá todas as configurações do usuário!`;
        resetbtns = ["Redefinir","Desinstalar","Cancelar"];
    
        traylabel = "Nenhum Jogo Detectado";
        trayshow = "Mostre";
        trayexit = "Feche";
    } else if (config.lang == "romanian") {
        document.getElementById("username").innerHTML = "Niciun Utilizator Detectat";
        document.getElementById("gamestatus").innerHTML = "Niciun Joc Detectat";
        document.getElementById("soundfile").innerHTML = "Implicit (Fără Sunet Selectat)";
        document.getElementById("soundfilerare").innerHTML = "Implicit (Fără Sunet Selectat)";
        document.getElementById("maincheevsound").innerHTML = "Sunet de Notificare Principal";
        document.getElementById("rarecheevsound").innerHTML = "Sunete de Notificare Rar";
        document.getElementById("test").innerHTML = "AFIȘAȚI NOTIFICAREA TESTULUI";
        document.getElementById("testrare").innerHTML = "AFIȘAȚI NOTIFICAREA TESTULUI RAR";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast instalat";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID setat";
        document.getElementById("startshortcutlbl").innerHTML = "Comandă rapidă Start Menu";
        document.getElementById("settingstitle").innerHTML = "SETĂRI";
        document.getElementById("configtitle").innerHTML = "CONFIGURARE";
        document.getElementById("statustitle").innerHTML = "STARE:";
        document.getElementById("apibox").placeholder = "Faceți clic pentru a tasta/lipi API Key";
        document.getElementById("steam64box").placeholder = "Faceți clic pentru a tasta/lipi Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "API Key-ul dvs va fi actualizat la:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID-ul dvs va fi actualizat la:";
        document.getElementById("other").innerHTML = "ALTE";
        document.getElementById("screenshotlbl").innerHTML = "Captură de Ecran";
        document.getElementById("keybindsub").innerHTML = "Faceți clic pe butonul, apoi apăsați tasta care se potrivește cu combinația de taste pentru captura de ecran setată în Steam.";
        document.getElementById("desktoplbl").innerHTML = "Comandă Rapidă Pe Desktop";
        document.getElementById("startwinlbl").innerHTML = "Rulați Când Windows Pornește";
        document.getElementById("startminlbl").innerHTML = "Începe Minimizat";
        document.getElementById("soundonlylbl").innerHTML = "Modul Numai Sunet";
        document.getElementById("trackinglbl").innerHTML = 'Afișează Notificarea „Urmărire”.';
        document.getElementById("slidervaluelbl").innerHTML = "Ora de Afișare:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "secunda";
        } else {
            document.getElementById("seconds").innerHTML = "secunde";
        }

        nouser = "Niciun Utilizator Detectat";
        nogame = "Niciun Joc Detectat";
        nosound = "Implicit (Fără Sunet Selectat)";
        nosoundrare = "Implicit (Fără Sunet Selectat)";
        testdesc = `'Notificările dvs funcționează corect.'`;
        rareheader = `'Realizare Rară Deblocată!`;
        unlinked = "NU ESTE CONECTAT";
        linked = "CONECTAT";
        novalue = "Va rugăm să introduceți o valoare";
        screenshotmsg = "Captură de Ecran";
        desktopexistsmsg = "Comanda rapidă pe Desktop există deja";
        desktopmsg = "Comandă Rapidă Pe Desktop";
        startwinmsg = "Rulați Când Windows Pornește";
        startminmsg = "Începe Minimizat";
        soundonlymsg = "Modul Numai Sunet";
        trackingmsg = 'Notificarea „Urmărire”';

        second = "secunda";
        seconds = "secunde";

        tracknotifymsg = "Acum urmărim realizările pentru";
    
        resettitle = "Resetați Aplicația La Valoarea Implicită?";
        resetdesc = `AVERTISMENT: Acest lucru va elimina toate setările utilizatorului!`;
        resetbtns = ["Resetează","Dezinstalează","Anulare"];
    
        traylabel = "Niciun Joc Detectat";
        trayshow = "Deschideți";
        trayexit = "Ieșiți";
    } else if (config.lang == "russian") {
        document.getElementById("username").innerHTML = "Пользователь Не Обнаружен";
        document.getElementById("gamestatus").innerHTML = "Игра Не Обнаружена";
        document.getElementById("soundfile").innerHTML = "По Умолчанию (звук Не Выбран)";
        document.getElementById("soundfilerare").innerHTML = "По Умолчанию (звук Не Выбран)";
        document.getElementById("maincheevsound").innerHTML = "Основной Звук Достижения";
        document.getElementById("rarecheevsound").innerHTML = "Звук Редкого Достижения";
        document.getElementById("test").innerHTML = "ПОКАЗАТЬ ТЕСТОВОЕ УВЕДОМЛЕНИЕ";
        document.getElementById("testrare").innerHTML = "ПОКАЗАТЬ ТЕСТ РЕДКОГО ДОСТИЖЕНИЯ";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast установлен";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID настроен";
        document.getElementById("startshortcutlbl").innerHTML = "Ярлык Start Menu";
        document.getElementById("settingstitle").innerHTML = "НАСТРОЙКИ";
        document.getElementById("configtitle").innerHTML = "КОНФИГУРАЦИЯ";
        document.getElementById("statustitle").innerHTML = "СТАТУС:";
        document.getElementById("apibox").placeholder = "Нажмите чтобы ввести/вставить API Key";
        document.getElementById("steam64box").placeholder = "Нажмите чтобы ввести/вставить Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Ваш API Key будет обновлен на:";
        document.getElementById("steam64confirmbody").innerHTML = "Ваш Steam64ID будет обновлен на:";
        document.getElementById("other").innerHTML = "ДРУГИЕ";
        document.getElementById("screenshotlbl").innerHTML = "Показать Скриншот";
        document.getElementById("keybindsub").innerHTML = "Нажмите кнопку, а затем нажмите клавишу, соответствующую клавише скриншота,в Steam.";
        document.getElementById("desktoplbl").innerHTML = "Ярлык На Рабочий Стол";
        document.getElementById("startwinlbl").innerHTML = "Автозагрузка";
        document.getElementById("startminlbl").innerHTML = "Сворачивание При Автозагрузке";
        document.getElementById("soundonlylbl").innerHTML = "Режим Только Звук";
        document.getElementById("trackinglbl").innerHTML = 'Показать "Сейчас Отслеживается"';
        document.getElementById("slidervaluelbl").innerHTML = "Время Отображения:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "секунда";
        } else {
            document.getElementById("seconds").innerHTML = "секунды";
        }

        nouser = "Пользователь Не Обнаружен";
        nogame = "Игра Не Обнаружена";
        nosound = "По Умолчанию (звук Не Выбран)";
        nosoundrare = "По Умолчанию (звук Не Выбран)";
        testdesc = `'Ваши уведомления работают правильно.'`;
        rareheader = `'Открыто Редкое Достижение!`;
        unlinked = "НЕТ СОЕДИНЕНИЯ";
        linked = "СОПРЯЖЕННО";
        novalue = "Пожалуйста введите значение";
        screenshotmsg = "Показать Скриншот";
        desktopexistsmsg = "Ярлык Desktop уже существует";
        desktopmsg = "Ярлык На Рабочий Стол";
        startwinmsg = "Автозагрузка";
        startminmsg = "Сворачивание При Автозагрузке";
        soundonlymsg = "Режим Только Звук";
        trackingmsg = 'Показать "Сейчас Отслеживается"';
    
        second = "секунда";
        seconds = "секунды";

        tracknotifymsg = "Теперь отслеживаются достижения для";

        resettitle = "Сбросить Приложение По Умолчанию?";
        resetdesc = `ВНИМАНИЕ: При этом будут удалены все пользовательские настройки!`;
        resetbtns = ["Сбросить","Удалить","Отменить"];
    
        traylabel = "Игра Не Обнаружена";
        trayshow = "Шоу";
        trayexit = "Выйти";
    } else if (config.lang == "spanish") {
        document.getElementById("username").innerHTML = "No Se Detectó Ningún Usuario";
        document.getElementById("gamestatus").innerHTML = "No Se Detectó Ningún Juego";
        document.getElementById("soundfile").innerHTML = "Predeterminado (Sin Sonido Seleccionado)";
        document.getElementById("soundfilerare").innerHTML = "Predeterminado (Sin Sonido Seleccionado)";
        document.getElementById("maincheevsound").innerHTML = "Sonido de Logro Principal";
        document.getElementById("rarecheevsound").innerHTML = "Sonido de Logro Rara";
        document.getElementById("test").innerHTML = "MOSTRAR NOTIFICACIÓN DE PRUEBA";
        document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICACIÓN DE PRUEBA RARA";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast instalado";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID configurado";
        document.getElementById("startshortcutlbl").innerHTML = "Atajo de Start Menu";
        document.getElementById("settingstitle").innerHTML = "AJUSTES";
        document.getElementById("configtitle").innerHTML = "CONFIGURACIÓN";
        document.getElementById("statustitle").innerHTML = "ESTADO:";
        document.getElementById("apibox").placeholder = "Haga clic para escribir/pegar API Key";
        document.getElementById("steam64box").placeholder = "Haga clic para escribir/pegar Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Su API Key se actualizará a:";
        document.getElementById("steam64confirmbody").innerHTML = "Su Steam64ID se actualizará a:";
        document.getElementById("other").innerHTML = "OTRO";
        document.getElementById("screenshotlbl").innerHTML = "Mostrar Captura de Pantalla";
        document.getElementById("keybindsub").innerHTML = "Haga clic en el botón, luego presione la tecla que coincida con su combinación de teclas de captura de pantalla configurada en Steam.";
        document.getElementById("desktoplbl").innerHTML = "Atajo Desktop";
        document.getElementById("startwinlbl").innerHTML = "Ejecutar con Windows";
        document.getElementById("startminlbl").innerHTML = "Iniciar Minimizado";
        document.getElementById("soundonlylbl").innerHTML = "Modo Solo Sonido";
        document.getElementById("trackinglbl").innerHTML = 'Mostrar "Ahora Observando"';
        document.getElementById("slidervaluelbl").innerHTML = "Tiempo de Visualización:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "segundo";
        } else {
            document.getElementById("seconds").innerHTML = "segundos";
        }

        nouser = "No Se Detectó Ningún Usuario";
        nogame = "No Se Detectó Ningún Juego";
        nosound = "Predeterminado (Sin Sonido Seleccionado)";
        nosoundrare = "Predeterminado (Sin Sonido Seleccionado)";
        testdesc = `'Tus notificaciones funcionan correctamente.'`;
        rareheader = `'¡Logro Raro Desbloqueado!`;
        unlinked = "NO VINCULADO";
        linked = "VINCULADO";
        novalue = "Porfavor introduzca un valor";
        screenshotmsg = "Captura de Pantalla";
        desktopexistsmsg = "El acceso directo Desktop ya existe";
        desktopmsg = "Atajo Desktop";
        startwinmsg = "Ejecutar con Windows";
        startminmsg = "Iniciar Minimizado";
        soundonlymsg = "Modo Solo Sonido";
        trackingmsg = 'Mostrar "Ahora Observando"';

        second = "segundo";
        seconds = "segundos";
    
        tracknotifymsg = "Ahora rastreando los logros de";

        resettitle = "¿Restablecer la Aplicación a Los Predeterminados?";
        resetdesc = `ADVERTENCIA: ¡Esto eliminará todas las configuraciones de usuario!`;
        resetbtns = ["Reiniciar","Desinstalar","Cancelar"];
    
        traylabel = "No Se Detectó Ningún Juego";
        trayshow = "Mostrar";
        trayexit = "Salir";
    } else if (config.lang == "swedish") {
        document.getElementById("username").innerHTML = "Ingen Användare Upptäckt";
        document.getElementById("gamestatus").innerHTML = "Inget Spel Upptäckt";
        document.getElementById("soundfile").innerHTML = "Standard (Inget Ljud Valt)";
        document.getElementById("soundfilerare").innerHTML = "Standard (Inget Ljud Valt)";
        document.getElementById("maincheevsound").innerHTML = "Huvudmeddelandeljud";
        document.getElementById("rarecheevsound").innerHTML = "Sällsynt Meddelandeljud";
        document.getElementById("test").innerHTML = "VISA TESTMEDDELANDE";
        document.getElementById("testrare").innerHTML = "VISA SÄLLSAMT TESTMEDDELANDE";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast installerat";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID inställd";
        document.getElementById("startshortcutlbl").innerHTML = "Startmenygenväg";
        document.getElementById("settingstitle").innerHTML = "INSTÄLLNINGAR";
        document.getElementById("configtitle").innerHTML = "KONFIGURATION";
        document.getElementById("statustitle").innerHTML = "STATUS:";
        document.getElementById("apibox").placeholder = "Klicka för att skriva/klistra in API Key";
        document.getElementById("steam64box").placeholder = "Klicka för att skriva/klistra in Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Din API Key kommer att uppdateras till:";
        document.getElementById("steam64confirmbody").innerHTML = "Din Steam64ID kommer att uppdateras till:";
        document.getElementById("other").innerHTML = "ÖVRIG";
        document.getElementById("screenshotlbl").innerHTML = "Visa Skärmdump";
        document.getElementById("keybindsub").innerHTML = "Klicka på knappen och tryck sedan på tangenten som matchar din Steam-kommando.";
        document.getElementById("desktoplbl").innerHTML = "Skapa Desktop-sökväg";
        document.getElementById("startwinlbl").innerHTML = "Börja med Windows";
        document.getElementById("startminlbl").innerHTML = "Start Minimerad";
        document.getElementById("soundonlylbl").innerHTML = "Endast Ljudläge";
        document.getElementById("trackinglbl").innerHTML = 'Visa Meddelanden "Nu Spårning"';
        document.getElementById("slidervaluelbl").innerHTML = "Aviseringstid:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "sekund";
        } else {
            document.getElementById("seconds").innerHTML = "sekunder";
        }

        nouser = "Ingen Användare Upptäckt";
        nogame = "Inget Spel Upptäckt";
        nosound = "Standard (Inget Ljud Valt)";
        nosoundrare = "Standard (Inget Ljud Valt)";
        testdesc = `'Dina aviseringar fungerar korrekt.'`;
        rareheader = `'Sällsynt Prestation Upplåst!`;
        unlinked = "OSLÄNKAD";
        linked = "LÄNKAD";
        novalue = "Var god ange ett värde";
        screenshotmsg = "Skärmdump";
        desktopexistsmsg = "Desktop-genväg finns redan";
        desktopmsg = "Desktop genväg";
        startwinmsg = "Börja med Windows";
        startminmsg = "Start Minimerad";
        soundonlymsg = "Endast Ljudläge";
        trackingmsg = 'Meddelande "Nu Spårning"';

        second = "sekund";
        seconds = "sekunder";

        tracknotifymsg = "Spårar nu prestationer för";
    
        resettitle = "Återställa Programmet Till Standard?";
        resetdesc = `VARNING: Detta tar bort alla användarinställningar!`;
        resetbtns = ["Återställa","Avinstallera","Annullera"];
    
        traylabel = "Inget Spel Upptäckt";
        trayshow = "Visa";
        trayexit = "Avsluta";
    } else if (config.lang == "thai") {
        document.getElementById("username").innerHTML = "ไม่พบผู้ใช้";
        document.getElementById("gamestatus").innerHTML = "ไม่พบเกม";
        document.getElementById("soundfile").innerHTML = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        document.getElementById("soundfilerare").innerHTML = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        document.getElementById("maincheevsound").innerHTML = "เสียงความสำเร็จหลัก";
        document.getElementById("rarecheevsound").innerHTML = "เสียงความสำเร็จที่หายาก";
        document.getElementById("test").innerHTML = "แสดงการแจ้งเตือนการทดสอบ";
        document.getElementById("testrare").innerHTML = "แสดงการแจ้งเตือนการทดสอบที่หายาก";
        document.getElementById("btinstalllbl").innerHTML = "ติดตั้ง BurntToast แล้ว";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID ชุด";
        document.getElementById("startshortcutlbl").innerHTML = "ทางลัดเมนูเริ่ม";
        document.getElementById("settingstitle").innerHTML = "การตั้งค่า";
        document.getElementById("configtitle").innerHTML = "การกำหนดค่า";
        document.getElementById("statustitle").innerHTML = "สถานะ:";
        document.getElementById("apibox").placeholder = "คลิกเพื่อพิมพ์/วาง API Key";
        document.getElementById("steam64box").placeholder = "คลิกเพื่อพิมพ์/วาง Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "APIKey ของคุณจะได้รับการอัปเดตเป็น:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID ของคุณจะได้รับการอัปเดตเป็น:";
        document.getElementById("other").innerHTML = "อื่น ๆ";
        document.getElementById("screenshotlbl").innerHTML = "แสดงภาพหน้าจอ";
        document.getElementById("keybindsub").innerHTML = "คลิกปุ่ม จากนั้นกดปุ่มที่ตรงกับชุดปุ่มลัดสกรีนช็อตของคุณที่ตั้งไว้ใน Steam.";
        document.getElementById("desktoplbl").innerHTML = "สร้างทางลัดบนเดสก์ท็อป";
        document.getElementById("startwinlbl").innerHTML = "เริ่มด้วย Windows";
        document.getElementById("startminlbl").innerHTML = "เริ่มย่อเล็กสุด";
        document.getElementById("soundonlylbl").innerHTML = "โหมดเสียงเท่านั้น";
        document.getElementById("trackinglbl").innerHTML = 'แสดง "กำลังติดตาม" การแจ้งเตือน';
        document.getElementById("slidervaluelbl").innerHTML = "เวลาแสดงการแจ้งเตือน:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "วินาที";
        } else {
            document.getElementById("seconds").innerHTML = "วินาที";
        }

        nouser = "ไม่พบผู้ใช้";
        nogame = "ไม่พบเกม";
        nosound = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        nosoundrare = "ค่าเริ่มต้น (ไม่ได้เลือกเสียง)";
        testdesc = `'การแจ้งเตือนของคุณทำงานอย่างถูกต้อง'`;
        rareheader = `'ปลดล็อกความสำเร็จหายาก!`;
        unlinked = "ไม่เชื่อมโยง";
        linked = "เชื่อมโยง";
        novalue = "กรุณาใส่ค่า";
        screenshotmsg = "ภาพหน้าจอความสำเร็จ";
        desktopexistsmsg = "มีทางลัดบนเดสก์ท็อปอยู่แล้ว";
        desktopmsg = "ทางลัดบนเดสก์ท็อป";
        startwinmsg = "เริ่มด้วย Windows";
        startminmsg = "เริ่มย่อเล็กสุด";
        soundonlymsg = "โหมดเสียงเท่านั้น";
        trackingmsg = '"กำลังติดตาม" การแจ้งเตือน';

        second = "วินาที";
        seconds = "วินาที";

        tracknotifymsg = "กำลังแสดงการแจ้งเตือนสำหรับ";
    
        resettitle = "รีเซ็ตแอปพลิเคชันเป็นค่าเริ่มต้น?";
        resetdesc = `คำเตือน: การดำเนินการนี้จะลบการตั้งค่าผู้ใช้ทั้งหมด!`;
        resetbtns = ["รีเซ็ต","ถอนการติดตั้ง","ยกเลิก"];
    
        traylabel = "ไม่พบเกม";
        trayshow = "แสดง";
        trayexit = "ออกจาก";
    } else if (config.lang == "turkish") {
        document.getElementById("username").innerHTML = "Kullanıcı Tespit Edilmedi";
        document.getElementById("gamestatus").innerHTML = "Oyun Algılanmadı";
        document.getElementById("soundfile").innerHTML = "Varsayılan (Seçili Ses Yok)";
        document.getElementById("soundfilerare").innerHTML = "Varsayılan (Seçili Ses Yok)";
        document.getElementById("maincheevsound").innerHTML = "Ana Bildirim Sesi";
        document.getElementById("rarecheevsound").innerHTML = "Nadir Bildirim Sesi";
        document.getElementById("test").innerHTML = "TEST BİLDİRİMİNİ GÖSTER";
        document.getElementById("testrare").innerHTML = "NADİR TEST BİLDİRİMİNİ GÖSTER";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast yüklü";
        document.getElementById("btappidlbl").innerHTML = "BurntToast AppID seti";
        document.getElementById("startshortcutlbl").innerHTML = "Start Menu kısayolu";
        document.getElementById("settingstitle").innerHTML = "AYARLAR";
        document.getElementById("configtitle").innerHTML = "KONFİGÜRASYON";
        document.getElementById("statustitle").innerHTML = "DURUM:";
        document.getElementById("apibox").placeholder = "API Key yazmak/yapıştırmak için tıklayın";
        document.getElementById("steam64box").placeholder = "Steam64ID yazmak/yapıştırmak için tıklayın";
        document.getElementById("apiconfirmbody").innerHTML = "API Key'iniz şu şekilde güncellenecek:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID'niz şu şekilde güncellenecek:";
        document.getElementById("other").innerHTML = "BAŞKA";
        document.getElementById("screenshotlbl").innerHTML = "Ekran Görüntüsünü Göster";
        document.getElementById("keybindsub").innerHTML = "Düğmeye tıklayın, ardından Steam'deki ekran görüntüsü tuş takımınızla eşleşen tuşa basın.";
        document.getElementById("desktoplbl").innerHTML = "Desktop kısayolu oluştur";
        document.getElementById("startwinlbl").innerHTML = "Windows Başladığında Çalıştır";
        document.getElementById("startminlbl").innerHTML = "Başlangıçta Gizle";
        document.getElementById("soundonlylbl").innerHTML = "Yalnızca Ses Modu";
        document.getElementById("trackinglbl").innerHTML = '"Şimdi İzliyor" Bildirimi';
        document.getElementById("slidervaluelbl").innerHTML = "Bildirim Görüntüleme Süresi:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "saniye";
        } else {
            document.getElementById("seconds").innerHTML = "saniye";
        }

        nouser = "Kullanıcı Tespit Edilmedi";
        nogame = "Oyun Algılanmadı";
        nosound = "Varsayılan (Seçili Ses Yok)";
        nosoundrare = "Varsayılan (Seçili Ses Yok)";
        testdesc = `'Bildirimleriniz düzgün çalışıyor.'`;
        rareheader = `'Nadir Başarının Kilidi Açıldı!`;
        unlinked = "BAĞLI DEĞİL";
        linked = "BAĞLI";
        novalue = "Lütfen bir değer girin";
        screenshotmsg = "Ekran görüntüsü";
        desktopexistsmsg = "Desktop kısayolu zaten var";
        desktopmsg = "Desktop Kısayolu";
        startwinmsg = "Windows Başladığında Çalıştır";
        startminmsg = "Başlangıçta Gizle";
        soundonlymsg = "Yalnızca Ses Modu";
        trackingmsg = '"Şimdi İzliyor" Bildirimi';
    
        second = "saniye";
        seconds = "saniye";

        tracknotifymsg = "Şu an için başarıları izliyor";
    
        resettitle = "Uygulama Varsayılana Sıfırlansın Mı?";
        resetdesc = `UYARI: Bu tüm kullanıcı ayarlarını kaldıracaktır!`;
        resetbtns = ["Sıfırla","Kaldır","İptal Etmek"];
    
        traylabel = "Oyun Algılanmadı";
        trayshow = "Göster";
        trayexit = "Çık";
    } else if (config.lang == "ukrainian") {
        document.getElementById("username").innerHTML = "Користувача Не Виявлено";
        document.getElementById("gamestatus").innerHTML = "Гра Не Виявлена";
        document.getElementById("soundfile").innerHTML = "За замовчуванням (звук не вибрано)";
        document.getElementById("soundfilerare").innerHTML = "За замовчуванням (звук не вибрано)";
        document.getElementById("maincheevsound").innerHTML = "Основний звук досягнення";
        document.getElementById("rarecheevsound").innerHTML = "Звук рідкісного досягнення";
        document.getElementById("test").innerHTML = "ПОКАЗАТИ ПОВІДОМЛЕННЯ ТЕСТ";
        document.getElementById("testrare").innerHTML = "ПОКАЗАТИ РІДКІСНІ ПОВІДОМЛЕННЯ ТЕСТ";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast встановлено";
        document.getElementById("btappidlbl").innerHTML = "Набір BurntToast AppID";
        document.getElementById("startshortcutlbl").innerHTML = "Ярлик Start Menu";
        document.getElementById("settingstitle").innerHTML = "НАЛАШТУВАННЯ";
        document.getElementById("configtitle").innerHTML = "КОНФІГУРАЦІЯ";
        document.getElementById("statustitle").innerHTML = "СТАТУС:";
        document.getElementById("apibox").placeholder = "Натисніть щоб ввести/вставити API Key";
        document.getElementById("steam64box").placeholder = "Натисніть щоб ввести/вставити Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "Ваш API Key буде оновлено до:";
        document.getElementById("steam64confirmbody").innerHTML = "Ваш Steam64ID буде оновлено до:";
        document.getElementById("other").innerHTML = "ІНШИЙ";
        document.getElementById("screenshotlbl").innerHTML = "Показати скріншот досягнення";
        document.getElementById("keybindsub").innerHTML = "Натисніть кнопку, а потім натисніть клавішу, яка відповідає прив’язці клавіатури знімка екрана, встановленої в Steam.";
        document.getElementById("desktoplbl").innerHTML = "Створіть ярлик на Desktop";
        document.getElementById("startwinlbl").innerHTML = "Почніть з Windows";
        document.getElementById("startminlbl").innerHTML = "Сховати під час запуску";
        document.getElementById("soundonlylbl").innerHTML = "Режим Лише Звуку";
        document.getElementById("trackinglbl").innerHTML = 'Показати "Відстеження"';
        document.getElementById("slidervaluelbl").innerHTML = "Тривалість:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "секунда";
        } else {
            document.getElementById("seconds").innerHTML = "секунди";
        }

        nouser = "Користувача Не Виявлено";
        nogame = "Гра Не Виявлена";
        nosound = "За замовчуванням (звук не вибрано)";
        nosoundrare = "За замовчуванням (звук не вибрано)";
        testdesc = `'Ваші сповіщення працюють правильно.'`;
        rareheader = `'Рідкісне досягнення розблоковано!`;
        unlinked = "НЕ ПІД'ЄДНАНО";
        linked = "ПІДКЛЮЧЕНО";
        novalue = "Введіть значення";
        screenshotmsg = "Скріншот досягнення";
        desktopexistsmsg = "Ярлик Desktop вже існує";
        desktopmsg = "Ярлик на Desktop";
        startwinmsg = "Почніть з Windows";
        startminmsg = "Сховати під час запуску";
        soundonlymsg = "Режим Лише Звуку";
        trackingmsg = 'Показати "Відстеження"';
    
        second = "секунда";
        seconds = "секунди";

        tracknotifymsg = "Показано досягнення для";

        resettitle = "Скинути Програму За Замовчуванням?";
        resetdesc = `ПОПЕРЕДЖЕННЯ: Це призведе до видалення всіх налаштувань користувача!`;
        resetbtns = ["Скинути","Видалити","Скасувати"];
    
        traylabel = "Гра Не Виявлена";
        trayshow = "Показувати";
        trayexit = "Вийти";
    } else if (config.lang == "vietnamese") {
        document.getElementById("username").innerHTML = "Không Có Người Dùng Nào Được Phát Hiện";
        document.getElementById("gamestatus").innerHTML = "Không Có Trò Chơi Nào Được Phát Hiện";
        document.getElementById("soundfile").innerHTML = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        document.getElementById("soundfilerare").innerHTML = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        document.getElementById("maincheevsound").innerHTML = "Âm Thanh Chính";
        document.getElementById("rarecheevsound").innerHTML = "Âm Thanh Hiếm";
        document.getElementById("test").innerHTML = "HIỂN THỊ THÔNG ĐIỆP KIỂM TRA";
        document.getElementById("testrare").innerHTML = "HIỂN THỊ THÔNG ĐIỆP KIỂM TRA HIẾM";
        document.getElementById("btinstalllbl").innerHTML = "BurntToast đã cài đặt";
        document.getElementById("btappidlbl").innerHTML = "BurntToast đã định cấu hình";
        document.getElementById("startshortcutlbl").innerHTML = "Phím tắt Start Menu";
        document.getElementById("settingstitle").innerHTML = "CÀI ĐẶT";
        document.getElementById("configtitle").innerHTML = "CẤU HÌNH";
        document.getElementById("statustitle").innerHTML = "TRẠNG THÁI:";
        document.getElementById("apibox").placeholder = "Nhấp để nhập/dán APIKey";
        document.getElementById("steam64box").placeholder = "Nhấp để nhập/dán Steam64ID";
        document.getElementById("apiconfirmbody").innerHTML = "API Key của bạn sẽ được cập nhật lên:";
        document.getElementById("steam64confirmbody").innerHTML = "Steam64ID của bạn sẽ được cập nhật lên:";
        document.getElementById("other").innerHTML = "KHÁC";
        document.getElementById("screenshotlbl").innerHTML = "Hiển Thị Ảnh Chụp Màn Hình";
        document.getElementById("keybindsub").innerHTML = "Nhấp vào nút, sau đó nhấn phím phù hợp với mã khóa ảnh chụp màn hình của bạn được đặt trong Steam.";
        document.getElementById("desktoplbl").innerHTML = "Tạo lối tắt Desktop";
        document.getElementById("startwinlbl").innerHTML = "Chạy Khi Windows Khởi Động";
        document.getElementById("startminlbl").innerHTML = "Ẩn Khi Khởi Động";
        document.getElementById("soundonlylbl").innerHTML = "Chế Độ Chỉ Âm Thanh";
        document.getElementById("trackinglbl").innerHTML = 'Hiển Thị "Hiện Đang Quan Sát"';
        document.getElementById("slidervaluelbl").innerHTML = "Thời Lượng Tin Nhắn:";
        
        if (slider.value < 2) {
            document.getElementById("seconds").innerHTML = "giây";
        } else {
            document.getElementById("seconds").innerHTML = "giây";
        }

        nouser = "Không Có Người Dùng Nào Được Phát Hiện";
        nogame = "Không Có Trò Chơi Nào Được Phát Hiện";
        nosound = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        nosoundrare = "Mặc Định (Không Có Âm Thanh Được Chọn)";
        testdesc = `'Thông báo của bạn đang hoạt động chính xác.'`;
        rareheader = `'Đã Mở Khóa Thành Tích Hiếm Hoi!`;
        unlinked = "NGẮT KẾT NỐI";
        linked = "LIÊN KẾT";
        novalue = "Vui lòng nhập một giá trị";
        screenshotmsg = "Ảnh Chụp Màn Hình Thành Tích";
        desktopexistsmsg = "Phím tắt Desktop đã tồn tại";
        desktopmsg = "Phím Tắt Desktop";
        startwinmsg = "Chạy Khi Windows Khởi Động";
        startminmsg = "Ẩn Khi Khởi Động";
        soundonlymsg = "Chế Độ Chỉ Âm Thanh";
        trackingmsg = 'Hiển Thị "Hiện Đang Quan Sát"';

        second = "giây";
        seconds = "giây";
    
        tracknotifymsg = "Hiện đang theo dõi thành tích cho";
    
        resettitle = "Đặt Lại Ứng Dụng Này Về Mặc Định?";
        resetdesc = `CẢNH BÁO: Thao tác này sẽ xóa tất cả cài đặt của người dùng!`;
        resetbtns = ["Cài Lại","Gỡ Cài Đặt","Hủy Bỏ"];
    
        traylabel = "Không Có Trò Chơi";
        trayshow = "Mở";
        trayexit = "Lối Ra";
    }
    GetPlayerName();

    var apikey = config.apikey;
    var steam64id = config.steam64id;
    var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
    
    if (!apikey || !steam64id) {
        document.getElementById("gamestatus").innerHTML = nogame;
        document.getElementById("gamestatus").style.color = "red";
        ipcRenderer.send('changelang', traylabel, trayshow, trayexit);
    } else {
        fetch(apiurl).then(response => response.json()).then((data) => {
            gamename = data.response.players[0].gameextrainfo;
        
            if (!gamename) {
                document.getElementById("gamestatus").innerHTML = nogame;
                document.getElementById("gamestatus").style.color = "red";
                ipcRenderer.send('changelang', traylabel, trayshow, trayexit);
            } else {
                document.getElementById("gamestatus").innerHTML = gamename;
                document.getElementById("gamestatus").style.color = "white";
                ipcRenderer.send('track', gamename, trayshow, trayexit);
            }
        }).catch(error => {
            document.getElementById("gamestatus").innerHTML = nogame;
            document.getElementById("gamestatus").style.color = "red";
            ipcRenderer.send('changelang', traylabel, trayshow, trayexit);
        });
    }
}

function SetLang() {
    config["lang"] = document.getElementById("lang").value;
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));

    LoadLang();
    LoadSound();
    LoadRareSound();
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

function ResetApp() {
    console.log("Step 1: BACKUP...")
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "Step 1: BACKUP...");
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP"));
        console.log("\"SAN1.7BACKUP\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory already exists");
    }
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT"))
        console.log("\"SAN1.7BACKUP\\BT\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\\BT\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory already exists");
    }
    try {
        fs.copyFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT","config.json"));
        console.log("BurntToast config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config backed up");
    } catch {
        console.log("Error backing up BurntToast config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up BurntToast config");
    }
    console.log("Step 2: RESETTING BURNTTOAST CONFIG...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 2: RESETTING BURNTTOAST CONFIG...");
    try {
        fs.rmSync(path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast custom config deleted")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast custom config deleted");
    } catch {
        console.log("Error deleting BurntToast custom config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting BurntToast custom config");
    }
    try {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json.old"), path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast config reset to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config reset to default");
    } catch {
        console.log("Error resetting BurntToast config to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError resetting BurntToast config to default");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","config.json"));
        console.log("Steam Achievement Notifier config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","sanlogo.ico"));
        console.log("Steam Achievement Notifier logo backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier logo")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo");
    }
    console.log("Step 3: DELETING FILES...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 3: DELETING FILES...");
    try {
        fs.rmSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)"), { recursive: true });
        console.log("\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%");
    } catch {
        console.log("Error deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
        console.log("Start Menu shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStart Menu shortcut deleted.");
    } catch {
        console.log("Error deleting Start Menu shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Start Menu shortcut");
    }
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V1.73).lnk"));
        console.log("Desktop shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("Error deleting Desktop shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.73).lnk"));
        console.log("Startup shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStartup shortcut deleted.");
    } catch {
        console.log("Error deleting Startup shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Startup shortcut");
    }
    console.log("Reset: COMPLETE")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nReset: COMPLETE");
    ipcRenderer.send('resetcomplete')
}

ipcRenderer.on('resetapp', function() {
    ResetApp();
});

function UninstallApp() {
    console.log("Step 1: BACKUP...")
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "Step 1: BACKUP...");
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP"));
        console.log("\"SAN1.7BACKUP\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\" directory already exists");
    }
    try {
        fs.mkdirSync(path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT"))
        console.log("\"SAN1.7BACKUP\\BT\" directory created.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory created.");
    } catch {
        console.log("\"SAN1.7BACKUP\\BT\" directory already exists")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"SAN1.7BACKUP\\BT\" directory already exists");
    }
    try {
        fs.copyFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","BT","config.json"));
        console.log("BurntToast config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config backed up");
    } catch {
        console.log("Error backing up BurntToast config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up BurntToast config");
    }
    console.log("Step 2: RESETTING BURNTTOAST CONFIG...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 2: RESETTING BURNTTOAST CONFIG...");
    try {
        fs.rmSync(path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast custom config deleted")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast custom config deleted");
    } catch {
        console.log("Error deleting BurntToast custom config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting BurntToast custom config");
    }
    try {
        fs.renameSync(path.join(__dirname,"BurntToast","0.8.5","config.json.old"), path.join(__dirname,"BurntToast","0.8.5","config.json"));
        console.log("BurntToast config reset to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nBurntToast config reset to default");
    } catch {
        console.log("Error resetting BurntToast config to default")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError resetting BurntToast config to default");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","config.json"));
        console.log("Steam Achievement Notifier config backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier config backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier config")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier config");
    }
    try {
        fs.copyFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico"), path.join(process.env.LOCALAPPDATA,"Temp","SAN1.7BACKUP","sanlogo.ico"));
        console.log("Steam Achievement Notifier logo backed up")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nSteam Achievement Notifier logo backed up");
    } catch {
        console.log("Error backing up Steam Achievement Notifier logo")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError backing up Steam Achievement Notifier logo");
    }
    console.log("Step 3: DELETING FILES...")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStep 3: DELETING FILES...");
    try {
        fs.rmSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)"), { recursive: true });
        console.log("\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\n\"Steam Achievement Notifier (V1.7)\" directory deleted in %localappdata%");
    } catch {
        console.log("Error deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting \"Steam Achievement Notifier (V1.7)\" directory in %localappdata%");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.7).lnk"));
        console.log("Start Menu shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStart Menu shortcut deleted.");
    } catch {
        console.log("Error deleting Start Menu shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Start Menu shortcut");
    }
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V1.72).lnk"));
        console.log("Desktop shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("Error deleting Desktop shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    try {
        fs.rmSync(path.join(os.homedir(),"Desktop","Steam Achievement Notifier (V1.73).lnk"));
        console.log("Desktop shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nDesktop shortcut deleted.");
    } catch {
        console.log("Error deleting Desktop shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Desktop shortcut");
    }
    try {
        fs.rmSync(path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.73).lnk"));
        console.log("Startup shortcut deleted.")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nStartup shortcut deleted.");
    } catch {
        console.log("Error deleting Startup shortcut")
        fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nError deleting Startup shortcut");
    }
    console.log("Uninstall: COMPLETE")
    fs.appendFileSync(path.join(process.env.LOCALAPPDATA,"Temp","sanresetlog.txt"), "\r\nUninstall: COMPLETE");
    ipcRenderer.send('uninstallcomplete')
}

ipcRenderer.on('uninstallapp', function() {
    UninstallApp();
});

function DependencyChecks() {
    var btinstall = document.getElementById("btinstall");
    var btappid = document.getElementById("btappid");
    var startshortcut = document.getElementById("startshortcut");

    var btfolder = path.join(__dirname,"BurntToast");
    if (fs.existsSync(btfolder)) {
        btinstall.src = "./icons/dot_green.svg";
    } else {
        btinstall.src = "./icons/dot_red.svg";
    }

    var readbtappid = JSON.parse(fs.readFileSync(path.join(__dirname,"BurntToast","0.8.5","config.json")));
    if (readbtappid.AppId == process.env.PORTABLE_EXECUTABLE_FILE.replace("\\","\\\\").replace(":\\\\",":\\")) {
        btappid.src = "./icons/dot_green.svg";
    } else {
        btappid.src = "./icons/dot_red.svg";
    }

    var getstartshortcut = path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Steam Achievement Notifier (V1.73).lnk");
    if (fs.existsSync(getstartshortcut)) {
        startshortcut.src = "./icons/dot_green.svg";
    } else {
        startshortcut.src = "./icons/dot_red.svg";
    }
}

function ShowDependencyChecks() {
    document.getElementById("checks").style.opacity = "1";
    document.getElementById("checks").style.transition = "0.2s";
}

function HideDependencyChecks() {
    document.getElementById("checks").style.opacity = "0";
    document.getElementById("checks").style.transition = "0.2s";
}

function ShowSettings() {
    document.getElementById("bodycont").style.display = "none";
    document.getElementById("settingscont").style.display = "flex";
    document.getElementById("close").onclick = function () { CloseSettings() };
    document.getElementById("settings").onclick = function () { CloseSettings() };

    CheckConfig();
    CheckScreenshot();
    CheckShortcut();
    CheckStartWin();
    CheckStartMin()
    CheckNowTracking();
    CheckSoundOnlyMode();
    GetPlayerName();
    DependencyChecks();
    GetDisplayTime();
    LoadKeybind();
    LoadLang();
    LoadSound();
    LoadRareSound();
}

function CloseSettings() {
    document.getElementById("bodycont").style.display = "flex";
    document.getElementById("settingscont").style.display = "none";
    document.getElementById("close").onclick = function () { CloseWindow() };
    document.getElementById("settings").onclick = function () { ShowSettings() };
    GetPlayerName();
}

function CloseWindow() {
    window.close();
}

var queue = [];
var running = false;

function TestNotification() {
    var mainps = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
    $screenshot = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).screenshot;
    $gif = '` + path.join(__dirname,"img","santoasttest.gif") + `';
    $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
    $play = New-Object System.Media.SoundPlayer; $play.SoundLocation = $sound;
    if ($screenshot -eq 'true') {
        New-BurntToastNotification -UniqueIdentifier 'testss' -Text 'Steam Achievement Notifier',` + testdesc + ` -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -HeroImage $gif -Silent;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'testss';
    } else {
        New-BurntToastNotification -UniqueIdentifier 'test' -Text 'Steam Achievement Notifier',` + testdesc + ` -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'test';
    }`

    queue.push(mainps);
    console.log("Main Test Notification pushed")
    function CheckIfRunning(){
        if(running == true) {
            setTimeout(CheckIfRunning, 1000);
            return
        } else {
            running = true;
            queue.shift(spawn("powershell",["-Command",mainps]));
            console.log("Main Test Notification shifted");
            setTimeout(function(){
                running = false;
            }, slider.valueAsNumber * 1000 + 500);
        }
        console.log("Queue Length is now: " + queue.length);
    }
    CheckIfRunning();
}

function TestRareNotification() {
    var rareps = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
    $screenshot = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).screenshot;
    $gif = '` + path.join(__dirname,"img","santoasttest.gif") + `';
    $header = New-BTHeader -Title ` + rareheader + ` (0%)';
    $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
    $play = New-Object System.Media.SoundPlayer;
    $play.SoundLocation = $sound;
    if ($screenshot -eq 'true') {
        New-BurntToastNotification -UniqueIdentifier 'raretestss' -Text 'Steam Achievement Notifier',` + testdesc + ` -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -HeroImage $gif -Silent -Header $header;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'raretestss';
    } else {
        New-BurntToastNotification -UniqueIdentifier 'raretest' -Text 'Steam Achievement Notifier',` + testdesc + ` -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent -Header $header;
        sleep -Milliseconds 275;
        $play.Play();
        sleep ${slider.value};
        Remove-BTNotification -UniqueIdentifier 'raretest';
    }`

    queue.push(rareps);
    console.log("Rare Test Notification pushed")
    function CheckIfRunning(){
        if(running == true) {
            setTimeout(CheckIfRunning, 1000);
            return
        } else {
            running = true;
            queue.shift(spawn("powershell",["-Command",rareps]));
            console.log("Rare Test Notification shifted");
            setTimeout(function(){
                running = false;
            }, slider.valueAsNumber * 1000 + 500);
        }
        console.log("Queue Length is now: " + queue.length);
    }

    CheckIfRunning();
}

function OpenSoundFile() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = ".wav";

    input.onchange = function (selection) {
        var file = selection.target.files[0];
        document.getElementById("soundfile").innerHTML = file.path;
        config["sound"] = (file.path).replace("\\","\\\\").replace(":\\\\",":\\");
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        LoadSound();
    }
    
    input.click();
}

function SearchHover() {
    document.getElementById("searchhover").src = "./icons/search_black.svg";
}

function SearchOut() {
    document.getElementById("searchhover").src = "./icons/search_white.svg";
}

function LoadSound() {
    if (config.sound == "") {
        document.getElementById("soundfile").innerHTML = nosound;
        document.getElementById("audio").src = "file:///C:/Windows/Media/Windows%20Background.wav";
    } else {
        document.getElementById("soundfile").innerHTML = config.sound;
        document.getElementById("audio").src = config.sound;
    }
}

function PreviewSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "none";
    document.getElementById("stop").style.display = "flex";
    audio.play();
    audio.addEventListener('ended', function () {
        document.getElementById("preview").style.display = "flex";
        document.getElementById("stop").style.display = "none";
    });
}

function PreviewHover() {
    document.getElementById("previewhover").src = "./icons/volume_up_black.svg";
}

function PreviewOut() {
    document.getElementById("previewhover").src = "./icons/volume_up_white.svg";
}

function StopSound() {
    var audio = document.getElementById("audio");
    document.getElementById("preview").style.display = "flex";
    document.getElementById("stop").style.display = "none";
    audio.pause();
    audio.currentTime = 0;
}

function OpenRareSoundFile() {
    var inputrare = document.createElement('input');
    inputrare.type = 'file';
    inputrare.accept = ".wav";

    inputrare.onchange = function (selection) {
        var filerare = selection.target.files[0];
        document.getElementById("soundfilerare").innerHTML = filerare.path;
        config["raresound"] = (filerare.path).replace("\\","\\\\").replace(":\\\\",":\\");
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        LoadRareSound();
    }
    
    inputrare.click();
}

function SearchRareHover() {
    document.getElementById("searchhoverrare").src = "./icons/search_black.svg";
}

function SearchRareOut() {
    document.getElementById("searchhoverrare").src = "./icons/search_white.svg";
}

function LoadRareSound() {
    if (config.raresound == "") {
        document.getElementById("soundfilerare").innerHTML = nosoundrare;
        document.getElementById("audiorare").src = "file:///C:/Windows/Media/Windows%20Background.wav";
    } else {
        document.getElementById("soundfilerare").innerHTML = config.raresound;
        document.getElementById("audiorare").src = config.raresound;
    }
}

function PreviewRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "none";
    document.getElementById("stoprare").style.display = "flex";
    audiorare.play();
    audiorare.addEventListener('ended', function () {
        document.getElementById("previewrare").style.display = "flex";
        document.getElementById("stoprare").style.display = "none";
    });
}

function PreviewRareHover() {
    document.getElementById("previewhoverrare").src = "./icons/volume_up_black.svg";
}

function PreviewRareOut() {
    document.getElementById("previewhoverrare").src = "./icons/volume_up_white.svg";
}

function StopRareSound() {
    var audiorare = document.getElementById("audiorare");
    document.getElementById("previewrare").style.display = "flex";
    document.getElementById("stoprare").style.display = "none";
    audiorare.pause();
    audiorare.currentTime = 0;
}

function GetPlayerName() {
    var apikey = config.apikey;
    var steam64id = config.steam64id;
    var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
    
    if (!apikey || !steam64id) {
        document.getElementById("username").innerHTML = nouser;
        document.getElementById("username").style.color = "red";
        document.getElementById("status").innerHTML = unlinked;
        document.getElementById("status").style.color = "red";
    } else {
        fetch(apiurl).then(response => response.json()).then((data) => {
            document.getElementById("username").innerHTML = data.response.players[0].personaname;
            document.getElementById("username").style.color = "white";
            document.getElementById("status").innerHTML = linked;
            document.getElementById("status").style.color = "green";
        }).catch(error => {
            document.getElementById("username").innerHTML = nouser;
            document.getElementById("username").style.color = "red";
            document.getElementById("status").innerHTML = unlinked;
            document.getElementById("status").style.color = "red";
        });
    }
}

function CheckNowTracking() {
    if (config.tracking == "true") {
        document.getElementById("tracking").checked = true;
    } else {
        document.getElementById("tracking").checked = false;
    }
}

function ToggleNowTracking() {
    if (config.tracking == "false") {
        config["tracking"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + trackingmsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("tracking").addEventListener('click', function(){
            clearTimeout(trackingon);
            clearTimeout(trackingoff);
        });
        var trackingon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["tracking"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + trackingmsg + ': <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("tracking").addEventListener('click', function(){
            clearTimeout(trackingon);
            clearTimeout(trackingoff);
        });
        var trackingoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckNowTracking();
}

function CheckSoundOnlyMode() {
    if (config.soundonly == "true") {
        document.getElementById("soundonly").checked = true;
        document.getElementById("slider").disabled = true;
        document.getElementById("slider").style.opacity = 0.5;
        document.getElementById("slidervaluetitle").style.opacity = 0.5;
    } else {
        document.getElementById("soundonly").checked = false;
        document.getElementById("slider").disabled = false;
        document.getElementById("slider").style.opacity = 1;
        document.getElementById("slidervaluetitle").style.opacity = 1;
    }
}

function ToggleSoundOnlyMode() {
    if (config.soundonly == "false") {
        config["soundonly"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + soundonlymsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("soundonly").addEventListener('click', function(){
            clearTimeout(soundonlyon);
            clearTimeout(soundonlyoff);
        });
        var soundonlyon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
        document.getElementById("slider").disabled = true;
        document.getElementById("slider").style.opacity = 0.5;
        document.getElementById("slidervaluetitle").style.opacity = 0.5;
    } else {
        config["soundonly"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + soundonlymsg + ': <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("soundonly").addEventListener('click', function(){
            clearTimeout(soundonlyon);
            clearTimeout(soundonlyoff);
        });
        var soundonlyoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
        document.getElementById("slider").disabled = false;
        document.getElementById("slider").style.opacity = 1;
        document.getElementById("slidervaluetitle").style.opacity = 1;
    }
    CheckSoundOnlyMode();
}

var gamename = null;

function CheckGame() {
    var checkgame = setInterval(function() {
        var apikey = config.apikey;
        var steam64id = config.steam64id;
        var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
        fetch(apiurl).then(response => response.json()).then((data) => {
            gamename = data.response.players[0].gameextrainfo;
            appid = data.response.players[0].gameid;

            if (!gamename) {
                GetGame();
                clearInterval(checkgame);
                ipcRenderer.send('idle', traylabel, trayshow, trayexit);
            }
        
        }).catch(error => {});
    }, 1000);
}

function GetGame() {
    var getgame = setInterval(function() {
            var apikey = config.apikey;
            var steam64id = config.steam64id;
            var apiurl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${steam64id}`;
            
            if (!apikey || !steam64id) {
                document.getElementById("gamestatus").innerHTML = nogame;
                document.getElementById("gamestatus").style.color = "red";
            } else {
                fetch(apiurl).then(response => response.json()).then((data) => {
                    gamename = data.response.players[0].gameextrainfo;
                    appid = data.response.players[0].gameid;
                
                    if (!gamename) {
                        document.getElementById("gamestatus").innerHTML = nogame;
                        document.getElementById("gamestatus").style.color = "red";
                    } else {
                        document.getElementById("gamestatus").innerHTML = gamename;
                        document.getElementById("gamestatus").style.color = "white";
                        clearInterval(getgame);
                        if (config.tracking == "true") {
                            var tracknotification = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                            New-BurntToastNotification -UniqueIdentifier "Track" -Text "Steam Achievement Notifier","` + tracknotifymsg + `: ${gamename}" -AppLogo '` + path.join(__dirname,"img","sanlogo.ico") + `' -Silent; sleep 3;
                            Remove-BTNotification -UniqueIdentifier "Track"`

                            queue.push(tracknotification);
                            console.log("Tracking Notification pushed")
                            function CheckIfRunning(){
                                if(running == true) {
                                    setTimeout(CheckIfRunning, 1000);
                                    return
                                } else {
                                    running = true;
                                    queue.shift(spawn("powershell",["-Command",tracknotification]));
                                    console.log("Tracking Notification shifted");
                                    setTimeout(function(){
                                        running = false;
                                    }, 3000);
                                }
                                console.log("Queue Length is now: " + queue.length);
                            }
                            CheckIfRunning();
                        }
                        ipcRenderer.send('track', gamename, trayshow, trayexit);
                        CheckGame();
                    }
                }).catch(error => {});
            }
    }, 1000);
}

GetGame();

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
        document.getElementById("desktop").checked = true;
    } else {
        document.getElementById("desktop").checked = false;
    }
}

function CreateDesktopShortcut() {
    CheckShortcut();
    if (fs.existsSync(shortcut)) {
        document.getElementById("msg").innerHTML = desktopexistsmsg;
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msg").style.color = "lightskyblue";
        document.getElementById("desktop").checked = true;
        document.getElementById("desktop").addEventListener('click', function(){
            clearTimeout(desktopon);
            clearTimeout(desktopoff);
        });
        var desktopon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        spawn("powershell.exe",["-NoExit","-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + shortcut + `'); $shortcut.IconLocation = '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save(); $sc = "steam achievement notifier (V1.73)"; $txtinfo = (Get-Culture).TextInfo; $scfix = $txtinfo.ToTitleCase($sc); Rename-Item -Path "` + shortcut + `" -NewName "$scfix.lnk"`]);
        document.getElementById("desktop").checked = true;
        document.getElementById("msg").outerHTML = '<div id="msg">' + desktopmsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("desktop").checked = true;
        document.getElementById("desktop").addEventListener('click', function(){
            clearTimeout(desktopon);
            clearTimeout(desktopoff);
        });
        var desktopoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
}

function CheckAPI() {
    var apivalue = document.getElementById("apibox").value;
    if (apivalue == "" || apivalue == novalue) {
        document.getElementById("apibox").value = novalue;
        document.getElementById("apibox").style.color = "red";
        document.getElementById("saveapi").addEventListener('click', function(){
            clearTimeout(apitimer);
        });
        var apitimer = setTimeout(function() {
            document.getElementById("apibox").value = null;
            document.getElementById("apibox").style.color = "white";
        }, 2000);
    } else {
        document.getElementById("confirmapi").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("confirmapivalue").innerHTML = apivalue;
    }
}

function SaveAPI() {
    var apivalue = document.getElementById("apibox").value;
    config["apikey"] = apivalue.replace(/\s+/g, "");
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("apibox").value = apivalue;
    GetPlayerName();
    document.getElementById("confirmapi").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function SaveAPIHover() {
    document.getElementById("saveapihover").src = "./icons/save_black.svg";
}

function SaveAPIOut() {
    document.getElementById("saveapihover").src = "./icons/save_white.svg";
}

function CancelAPI() {
    document.getElementById("confirmapi").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function CheckSteam64() {
    var steam64value = document.getElementById("steam64box").value;
    if (steam64value == "" || steam64value == novalue) {
        document.getElementById("steam64box").value = novalue;
        document.getElementById("steam64box").style.color = "red";
        document.getElementById("save64").addEventListener('click', function(){
            clearTimeout(steam64timer);
        });
        var steam64timer = setTimeout(function() {
            document.getElementById("steam64box").value = null;
            document.getElementById("steam64box").style.color = "white";
        }, 2000);
    } else {
        document.getElementById("confirmsteam64").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("confirmsteam64value").innerHTML = steam64value;
    }
}

function SaveSteam64() {
    var steam64value = document.getElementById("steam64box").value;
    config["steam64id"] = steam64value.replace(/\s+/g, "");
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("steam64box").value = steam64value;
    GetPlayerName();
    document.getElementById("confirmsteam64").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function Save64Hover() {
    document.getElementById("save64hover").src = "./icons/save_black.svg";
}

function Save64Out() {
    document.getElementById("save64hover").src = "./icons/save_white.svg";
}

function CancelSteam64() {
    document.getElementById("confirmsteam64").style.display = "none";
    document.getElementById("overlay").style.display = "none";
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

    document.getElementById("username").style.background = "rebeccapurple";
    document.getElementById("steamimg").style.background = "rebeccapurple";
    document.getElementById("userempty").style.background = "rebeccapurple";

    document.getElementById("gamestatus").style.background = "rebeccapurple";
    document.getElementById("gameimg").style.background = "rebeccapurple";
    document.getElementById("gameempty").style.background = "rebeccapurple";
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

    document.getElementById("username").style.background = "rgba(32,62,122,1)";
    document.getElementById("steamimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("userempty").style.background = "rgba(32,62,122,1)";

    document.getElementById("gamestatus").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameimg").style.background = "rgba(32,62,122,1)";
    document.getElementById("gameempty").style.background = "rgba(32,62,122,1)";
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
        document.getElementById("screenshot").checked = true;
    } else {
        document.getElementById("screenshot").checked = false;
    }
}

function ToggleScreenshot() {
    if (config.screenshot == "false") {
        config["screenshot"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + screenshotmsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("screenshot").addEventListener('click', function(){
            clearTimeout(screenshoton);
            clearTimeout(screenshotoff);
        });
        var screenshoton = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["screenshot"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + screenshotmsg + ': <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("screenshot").addEventListener('click', function(){
            clearTimeout(screenshoton);
            clearTimeout(screenshotoff);
        });
        var screenshotoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckScreenshot();
}

document.getElementById("keybind").addEventListener('mouseover', function() {
    document.getElementById("keybind").style.background = "white";
    document.getElementById("keybind").style.color = "black";
    document.getElementById("keybind").style.transition = "0.2s";
})

document.getElementById("keybind").addEventListener('mouseleave', function() {
    document.getElementById("keybind").style.background = "rgba(32,62,122,1)";
    document.getElementById("keybind").style.color = "white";
    document.getElementById("keybind").style.transition = "0.2s";
});

var keybind = config.keybind;

function LoadKeybind() {
    if (keybind == "PageUp") {
        keybind = "PGUP";
    } else if (keybind == "PageDown") {
        keybind = "PGDN";
    }
    console.log("Keybind is set to: " + keybind);
    document.getElementById("keybind").innerHTML = keybind;
}

function ShowKeybindMenu() {
    document.getElementById("keybind").innerHTML = keybind;
    document.getElementById("keybindcont").style.display = "flex";
    document.getElementById("overlay").style.display = "flex";
}

function KeybindClose() {
    document.getElementById("keybind").innerHTML = keybind;
    document.getElementById("keybindcont").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function KeyDown(event) {
    var key = event.key;
    if (key == "PageUp") {
        key = "PGUP";
    } else if (key == "PageDown") {
        key = "PGDN";
    }
    config["keybind"] = key;
    keybind = key;
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
    document.getElementById("keybind").innerHTML = keybind;
}

function StopKeyDown() {
    document.removeEventListener('keydown', KeyDown);
    document.getElementById("keybind").style.background = "rgba(32,62,122,1)";
    document.getElementById("keybind").style.color = "white";
    document.getElementById("keybind").style.animation = "none";
}

function GetKeybind() {
    document.getElementById("keybind").style.animation = "bluetowhite 0.5s alternate infinite";
    document.getElementById("keybind").innerHTML = "...";
    document.addEventListener('keydown', KeyDown);
    document.addEventListener('keyup', StopKeyDown);
}

function CheckStartWin() {
    if (config.startwin == "true") {
        document.getElementById("startwin").checked = true;
    } else {
        document.getElementById("startwin").checked = false;
    }
}

function ToggleStartWin() {
    if (config.startwin == "false") {
        config["startwin"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        spawn("powershell.exe",["-Command",`$shell = New-Object -ComObject WScript.Shell; $shortcut = $shell.CreateShortcut('` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.73).lnk") + `'); $shortcut.IconLocation = '` + path.join(__dirname,"img","sanlogo.ico") + `'; $shortcut.TargetPath = '` + path.join(process.env.PORTABLE_EXECUTABLE_FILE) + `'; $shortcut.Save();`]);
        document.getElementById("msg").outerHTML = '<div id="msg">' + startwinmsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("startwin").addEventListener('click', function(){
            clearTimeout(startwinon);
            clearTimeout(startwinoff);
        });
        var startwinon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["startwin"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        spawn("powershell.exe",["-Command",`Remove-Item -Path '` + path.join(process.env.APPDATA,"Microsoft","Windows","Start Menu","Programs","Startup","Steam Achievement Notifier (V1.73).lnk") + `'`]);
        document.getElementById("msg").outerHTML = '<div id="msg">' + startwinmsg + ': <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("startwin").addEventListener('click', function(){
            clearTimeout(startwinon);
            clearTimeout(startwinoff);
        });
        var startwinoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckStartWin();
}

function CheckStartMin() {
    if (config.startmin == "true") {
        document.getElementById("startmin").checked = true;
    } else {
        document.getElementById("startmin").checked = false;
    }
}

function ToggleStartMin() {
    if (config.startmin == "false") {
        config["startmin"] = "true";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + startminmsg + ': <p id="msgresult">ON</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "green";
        document.getElementById("startmin").addEventListener('click', function(){
            clearTimeout(startminon);
            clearTimeout(startminoff);
        });
        var startminon = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    } else {
        config["startmin"] = "false";
        fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
        document.getElementById("msg").outerHTML = '<div id="msg">' + startminmsg + ': <p id="msgresult">OFF</p></div>';
        document.getElementById("msg").style.display = "inline-block";
        document.getElementById("msgresult").style.color = "red";
        document.getElementById("startmin").addEventListener('click', function(){
            clearTimeout(startminon);
            clearTimeout(startminoff);
        });
        var startminoff = setTimeout(function(){
            document.getElementById("msg").style.display = "none";
        }, 2000);
    }
    CheckStartMin();
}

var slider = document.getElementById("slider");
var slidervalue = document.getElementById("slidervalue");

slidervalue.innerHTML = slider.value;

slider.addEventListener("input", function() {
    slidervalue.innerHTML = slider.value;
    if (slider.value < 2) {
        document.getElementById("seconds").innerHTML = second;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }
    config["displaytime"] = slider.value;
    fs.writeFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json"), JSON.stringify(config, null, 2));
});

function GetDisplayTime() {
    slider.value = config.displaytime;
    slidervalue.innerHTML = config.displaytime;
    if (slider.value < 2) {
        document.getElementById("seconds").innerHTML = second;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }
}

var appid = null;
var currgame = null;

function SANIdle() {
    var sanidle = setInterval(function() {
        var apikey = config.apikey;
        var steam64id = config.steam64id;

        function StoreLocal() {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            const random = getRandomInt(9999999);
            
            var gpalocal = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}?__random=${random}`;
            fetch(gpalocal).then(response => response.json()).then((data) => {
                fs.writeFileSync(path.join(__dirname,"store","local.json"), JSON.stringify(data));
            }).catch(error => {
                error;
            });
        }

        if (!appid) {
            appid = null;
        } else {
            clearInterval(sanidle);
            currgame = appid;
            StoreLocal();
            setTimeout(function() {
                try {
                    StartSAN();
                } catch {
                    ipcRenderer.send('reloadapp');
                }
            }, 500);
        }
    }, 1000);
}

SANIdle();

var url = null;
var desc = null;
var getpercent = null;

function StartSAN() {
    var local = JSON.parse(fs.readFileSync(path.join(__dirname,"store","local.json")));
    
    var apikey = config.apikey;
    var steam64id = config.steam64id;
    
    var gsfg = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${apikey}&appid=${appid}&l=${lang}&format=json`;
    fetch(gsfg).then(response => response.json()).then((data) => {
        desc = data;
    });

    var startsan = setInterval(function() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const random = getRandomInt(9999999);

        var gpa = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${apikey}&steamid=${steam64id}&l=${lang}?__random=${random}`;
        fetch(gpa).then(response => response.json()).then((data) => {
            url = data;
        }).catch((error) => {});

        for (var i = 0; i < url.playerstats.achievements.length; i++) {
            if (local.playerstats.achievements[i].achieved !== url.playerstats.achievements[i].achieved) {
                var game = url.playerstats.gameName;
                var cheev = desc.game.availableGameStats.achievements[i].displayName;
                var description = desc.game.availableGameStats.achievements[i].description;
                var icon = desc.game.availableGameStats.achievements[i].icon;

                var percent;

                function GetPercentages() {
                    var ggapfa = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&l=${lang}&format=json`;
                    fetch(ggapfa).then(response => response.json()).then((data) => {
                        getpercent = data;
                    });
    
                    var apiname = url.playerstats.achievements[i].apiname;
                    var percentobj = getpercent.achievementpercentages.achievements

                    percentobj.forEach(function(element) {
                        if (element.name == apiname) {
                            percent = element.percent
                            percent = +percent.toFixed(2);
                        }
                    });
                }

                GetPercentages();

                function MainNotification() {
                    if (config.screenshot == "true") {
                        var maincheevss = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        Add-Type -AssemblyName System.Windows.Forms;
                        [System.Windows.Forms.SendKeys]::SendWait('{` + keybind + `}');
                        sleep -Milliseconds 50;
                        $sort = Get-ChildItem -Path '` + path.join(process.env.HOMEDRIVE,"Program Files (x86)","steam","userdata") + `' -Filter *.jpg -Recurse -File | Where { $_.FullName -notlike '*\\thumbnails\\*' } | sort LastWriteTime | select -Last 1;
                        $location = $sort.FullName;
                        $screenshot = New-BTImage -Source $location;
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "cheevss" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -HeroImage $screenshot;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "cheevss"`

                        queue.push(maincheevss);
                        console.log("Main Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",maincheevss]));
                                console.log("Main Achievement Notification w/ Screenshot shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    } else {
                        var maincheev = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).sound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "cheev" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "cheev"`

                        queue.push(maincheev);
                        console.log("Main Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",maincheev]));
                                console.log("Main Achievement Notification shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    }
                }

                function RareNotification() {
                    if (config.screenshot == "true") {
                        var rarecheevss = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        Add-Type -AssemblyName System.Windows.Forms;
                        [System.Windows.Forms.SendKeys]::SendWait('{` + keybind + `}');
                        sleep -Milliseconds 50;
                        $sort = Get-ChildItem -Path '` + path.join(process.env.HOMEDRIVE,"Program Files (x86)","steam","userdata") + `' -Filter *.jpg -Recurse -File | Where { $_.FullName -notlike '*\\thumbnails\\*' } | sort LastWriteTime | select -Last 1;
                        $location = $sort.FullName;
                        $screenshot = New-BTImage -Source $location;
                        $header = New-BTHeader -Title ` + rareheader + ` (${percent}%)';
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "rarecheevss" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -HeroImage $screenshot -Header $header;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "rarecheevss"`

                        queue.push(rarecheevss);
                        console.log("Rare Achievement Notification w/ Screenshot pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",rarecheevss]));
                                console.log("Rare Achievement Notification w/ Screenshot shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    } else {
                        var rarecheev = `Import-Module '` + path.join(__dirname,"BurntToast","0.8.5","BurntToast.psm1") + `';
                        $header = New-BTHeader -Title ` + rareheader + ` (${percent}%)';
                        $sound = (Get-Content '` + path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json") + `' | ConvertFrom-Json).raresound;
                        $player = New-Object System.Media.SoundPlayer;
                        $player.SoundLocation = $sound;
                        New-BurntToastNotification -UniqueIdentifier "rarecheev" -Text "${game}: ${cheev}","${description}" -AppLogo ${icon} -Silent -Header $header;
                        $player.play();
                        sleep ${slider.value};
                        Remove-BTNotification -UniqueIdentifier "rarecheev"`

                        queue.push(rarecheev);
                        console.log("Rare Achievement Notification pushed")
                        function CheckIfRunning(){
                            if(running == true) {
                                setTimeout(CheckIfRunning, 1000);
                                return
                            } else {
                                running = true;
                                queue.shift(spawn("powershell",["-Command",rarecheev]));
                                console.log("Rare Achievement Notification shifted");
                                setTimeout(function(){
                                    running = false;
                                }, slider.valueAsNumber * 1000 + 500);
                            }
                            console.log("Queue Length is now: " + queue.length);
                        }

                        CheckIfRunning();

                    }
                }

                function MainSoundOnlyMode() {
                    var audio = document.getElementById("audio");
                    audio.play();
                }

                function RareSoundOnlyMode() {
                    var audiorare = document.getElementById("audiorare");
                    audiorare.play();
                }
                
                function ShowNotification() {
                    if (percent > 10) {
                        if (config.soundonly == "true") {
                            MainSoundOnlyMode();
                        } else {
                            MainNotification();
                        }
                        console.log(`ACHIEVEMENT UNLOCKED! | Game: ${game} | Achievement: ${cheev} | percent = ` + percent);
                    } else {
                        if (config.soundonly == "true") {
                            RareSoundOnlyMode();
                        } else {
                            RareNotification();
                        }
                        console.log(`RARE ACHIEVEMENT UNLOCKED! | Game: ${game} | Achievement: ${cheev} | percent = ` + percent);
                    }
    
                    setTimeout(function() {
                        fs.writeFileSync(path.join(__dirname,"store","local.json"), JSON.stringify(url));
                        local = JSON.parse(fs.readFileSync(path.join(__dirname,"store","local.json")));
                    }, 100);
                }

                if (percent == undefined) {
                    console.log("Achievement percentage is \"undefined\" - checking again...");
                    GetPercentages();
                } else {
                    ShowNotification();
                }
            }
        }

        if (!appid) {
            appid = null;
            clearInterval(startsan);
            fs.writeFileSync(path.join(__dirname,"store","local.json"), "");
            SANIdle();
        } else if (appid !== currgame) {
            ipcRenderer.send('reloadapp');
        }
    }, 1000);
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