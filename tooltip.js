const fstt = require('fs');
const pathtt = require('path');

var usertt;
var gamett;
var mainprevtt;
var rareprevtt;
var maintabtt;
var raretabtt;
var selmaintt;
var selrarett;
var screenshottt;
var shortcuttt;
var startwintt;
var startmintt;
var soundonlytt;
var tracktt;
var displaytt;
var updatett;
var discordtt;
var githubtt;
var resettt;
var apilbltt;
var steam64lbltt;
var savett;
var keybindtt;

var usertippy = tippy(user, {
   allowHTML: true,
   content: usertt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var gametippy = tippy(game, {
   allowHTML: true,
   content: gamett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var mainprevtippy = tippy(preview, {
   allowHTML: true,
   content: mainprevtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var rareprevtippy = tippy(previewrare, {
   allowHTML: true,
   content: rareprevtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var maintabtippy = tippy(maincheevbtn, {
   allowHTML: true,
   content: maintabtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var raretabtippy = tippy(rarecheevbtn, {
   allowHTML: true,
   content: raretabtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var selmaintippy = tippy(sounddiv, {
   allowHTML: true,
   content: selmaintt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var selraretippy = tippy(sounddivrare, {
   allowHTML: true,
   content: selrarett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [1000, 0],
   maxWidth: 250,
   theme: "win",
});

var screenshottippy = tippy(screenshot, {
   content: screenshottt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

var shortcuttippy = tippy(desktop, {
   allowHTML: true,
   content: shortcuttt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

var startwintippy = tippy(startwin, {
   allowHTML: true,
   content: startwintt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

var startmintippy = tippy(startmin, {
  content: startmintt,
  arrow: false,
  followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

var soundonlytippy = tippy(soundonly, {
   allowHTML: true,
   content: soundonlytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

var tracktippy = tippy(tracking, {
   allowHTML: true,
   content: tracktt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

tippy('#updateicon', {
   content: updatett,
   arrow: false,
   placement: "left",
   offset: [0,2],
   theme: "customfit",
});

tippy('#discord', {
   content: discordtt,
   arrow: false,
   placement: "left",
   offset: [0,1],
   theme: "transparent",
});

tippy('#github', {
   content: githubtt,
   arrow: false,
   placement: "left",
   offset: [0,28],
   theme: "transparent",
});

tippy('#reset', {
   content: resettt,
   arrow: false,
   placement: "top",
   offset: [0,0],
   theme: "transparent",
});

tippy('#apikeylbl', {
   allowHTML: true,
   content: apilbltt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [200,0],
   theme: "win",
});

tippy('#steam64lbl', {
   allowHTML: true,
   content: steam64lbltt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [200,0],
   theme: "win",
});

tippy('#saveapi', {
   content: savett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [500,0],
   theme: "win",
});

tippy('#save64', {
   content: savett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [500,0],
   theme: "win",
});

tippy('#slider', {
   allowHTML: true,
   content: displaytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
});

tippy('#keybindicon', {
   content: keybindtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
});

function LoadLangTT() {
   const configtt = JSON.parse(fstt.readFileSync(pathtt.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json")));
   
   if (configtt.lang == "english") {
      usertt = "Steam Username<br><div style='font-size: 6px;'>Achievements are being tracked for this user</div>";
      gamett = "Game Display<br><div style='font-size: 6px;'>Shows the name of the game currently being tracked</div>";
      mainprevtt = "Preview Notification Sound";
      rareprevtt = "Preview Rare Notification Sound";
      maintabtt = "Select Main Achievement Notification Sound";
      raretabtt = "Select Rare Achievement Notification Sound";
      selmaintt = "Select Main Achievement Sound";
      selrarett = "Select Rare Achievement Sound";
      screenshottt = "Takes a screenshot and displays it in the notification when an achievement is unlocked.";
      shortcuttt = "Creates a shortcut on the Desktop<br>to run Steam Achievement Notifier.";
      startwintt = "Automatically starts the application<br>when Windows starts.";
      startmintt = "Hides the application window on startup.";
      soundonlytt = "Hides all notifications, but plays selected<br>sounds when unlocking achievements.<br><span style='font-size: 8px;'>(\"Notification Display Time\" will be unavailable when enabled)</span>";
      tracktt = "Shows the \"Now Tracking\" notification<br>when starting a game.";
      displaytt = "Sets the length of time achievement<br>notifications will display for <br><span style='font-size: 8px;'>(Not available if \"Sound-Only Mode\" has been enabled)</span>";
      updatett = "UPDATE AVAILABLE";
      discordtt = "Join on Discord!";
      githubtt = "Report an issue";
      resettt = "RESET";
      apilbltt = 'Click here to get your API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Click here to get your Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Save";
      keybindtt = "Set Steam Screenshot Keybind";
   } else if (configtt.lang == "arabic") {
      usertt = "اسم مستخدم Steam<br><div style='font-size: 6px;'>يتم تعقب الإنجازات لهذا المستخدم</div>";
      gamett = "لعبة الحالية<br><div style='font-size: 6px;'>يظهر اسم اللعبة التي يتم تعقبها حاليًا</div>";
      mainprevtt = "معاينة صوت الإعلام";
      rareprevtt = "نادر إشعار معاينة الصوت";
      maintabtt = "حدد صوت إخطار الإنجاز الرئيسي";
      raretabtt = "حدد صوت إعلام الإنجاز النادر";
      selmaintt = "حدد صوت الإنجاز الرئيسي";
      selrarett = "حدد صوت الإنجاز النادر";
      screenshottt = "يأخذ لقطة شاشة ويظهرها في الإشعار عند إلغاء قفل أحد الإنجازات.";
      shortcuttt = "يقوم بإنشاء اختصار على سطح المكتب<br>لتشغيل برنامج Steam Achievement Notifier.";
      startwintt = "يبدأ التطبيق تلقائيًا<br>عندما يبدأ Windows.";
      startmintt = "يخفي نافذة التطبيق عند بدء التشغيل.";
      soundonlytt = "يخفي كل الإخطارات ، لكن يلعب المختار<br>يبدو عند فتح الإنجازات.<br><span style='font-size: 8px;'>(\"وقت عرض الإخطار\" لن تكون متاحة عند التمكين)</span>";
      tracktt = "إظهار إشعار\"التتبع الآن\"<br>عند بدء اللعبة.";
      displaytt = "يحدد طول وقت الإنجاز<br>سيتم عرض الإخطارات لـ <br><span style='font-size: 8px;'>(غير متاح إذا تم تمكين\"وضع الصوت فقط\")</span>";
      updatett = "التحديث متاح";
      discordtt = "انضم إلى Discord!";
      githubtt = "الإبلاغ عن خطأ";
      resettt = "إعادة تعيين";
      apilbltt = "انقر هنا للحصول على API Key الخاص بك<img src='./icons/open_in_new.svg' width='12px' style='vertical-align: -3px'>";
      steam64lbltt = "انقر هنا للحصول على Steam64 ID الخاص بك <img src='./icons/open_in_new.svg' width='12px' style='vertical-align: -3px'>";
      savett = "حفظ باسم";
      keybindtt = "تعيين Steam Screenshot Keybind";
   } else if (configtt.lang == "bulgarian") {
      usertt = "Потребителско име на Steam<br><div style='font-size: 6px;'>Постиженията се проследяват за този потребител</div>";
      gamett = "Дисплей На Играта<br><div style='font-size: 6px;'>Показва името на играта, която се проследява в момента</div>";
      mainprevtt = "Тествайте основния звук";
      rareprevtt = "Тествайте редкия звук";
      maintabtt = "Изберете Основен Звук";
      raretabtt = "Изберете Рядък Звук";
      selmaintt = "Изберете Основен Звук";
      selrarett = "Изберете Рядък Звук";
      screenshottt = "Прави екранна снимка и я показва в известието, когато дадено постижение е отключено.";
      shortcuttt = "Създаване на пряк път в Desktop за да стартирате Steam Achievement Notifier.";
      startwintt = "Автоматично стартира приложението при стартиране на Windows.";
      startmintt = "Скрива прозореца на приложението при стартиране.";
      soundonlytt = "Скрива всички известия, но възпроизвежда избрани звуци при отключване на постижения.<br><span style='font-size: 8px;'>(\"Време за показване на известия\" няма да е налично, когато е активирано)</span>";
      tracktt = "Показва известието \"Сега проследяване\" при стартиране на игра.";
      displaytt = "Задава продължителността на времето, за което постиженията ще се показват известията <br><span style='font-size: 8px;'>(Не е налично, ако е активиран \"Режим само за звук\".)</span>";
      updatett = "НАЛИЧНА АКТУАЛИЗАЦИЯ";
      discordtt = "Присъединете се към Discord!";
      githubtt = "Подайте сигнал за проблем";
      resettt = "НУЛИРАНЕ";
      apilbltt = 'Щракнете тук за да получите своя API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Щракнете тук за да получите своя Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Запазете";
      keybindtt = "Задайте Steam Screenshot Keybind";
   } else if (configtt.lang == "schinese") {
      usertt = "Steam 用户名<br><div style='font-size: 6px;'>正在跟踪此用户的成就</div>";
      gamett = "当前游戏<br><div style='font-size: 6px;'>显示当前正在跟踪的游戏名称</div>";
      mainprevtt = "预览通知声音";
      rareprevtt = "预览罕见的通知声音";
      maintabtt = "选择主要成就通知声音";
      raretabtt = "选择稀有成就提示音";
      selmaintt = "选择主要成就声音";
      selrarett = "选择稀有成就音效";
      screenshottt = "当成就解锁时，截取屏幕截图并将其显示在通知中。";
      shortcuttt = "在桌面上创建一个快捷方式来运行 Steam Achievement Notifier。";
      startwintt = "Windows 启动时自动启动应用程序。";
      startmintt = "在启动时隐藏应用程序窗口。";
      soundonlytt = "隐藏所有通知，但在解锁成就时播放选定的声音。<br><span style='font-size: 8px;'>(\"通知显示时间\"在启用时将不可用)</span>";
      tracktt = "开始游戏时显示\"正在跟踪\"通知。";
      displaytt = "设置成就通知将显示的时间长度 <br><span style='font-size: 8px;'>(如果\"仅声音模式\"已启用，则不可用)</span>";
      updatett = "更新可用";
      discordtt = "加入 Discord！";
      githubtt = "报告问题";
      resettt = "重启";
      apilbltt = '单击此处获取您的 API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = '单击此处获取您的 Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "节省";
      keybindtt = "设置 Steam Screenshot Keybind";
   } else if (configtt.lang == "tchinese") {
      usertt = "Steam 用戶名<br><div style='font-size: 6px;'>正在跟踪此用戶的成就</div>";
      gamett = "當前遊戲<br><div style='font-size: 6px;'>顯示當前正在跟踪的遊戲名稱</div>";
      mainprevtt = "預覽通知聲音";
      rareprevtt = "預覽罕見的通知聲音";
      maintabtt = "選擇主要成就通知聲音";
      raretabtt = "選擇稀有成就提示音";
      selmaintt = "選擇主要成就聲音";
      selrarett = "選擇稀有成就音效";
      screenshottt = "當成就解鎖時，截取屏幕截圖並將其顯示在通知中。";
      shortcuttt = "在 Desktop 上創建一個快捷方式來運行 Steam Achievement Notifier。";
      startwintt = "Windows 啟動時自動啟動應用程序。";
      startmintt = "在啟動時隱藏應用程序窗口。";
      soundonlytt = "隱藏所有通知，但在解鎖成就時播放選定的聲音。<br><span style='font-size: 8px;'>(\"通知顯示時間\"在啟用時將不可用)</span>";
      tracktt = "開始遊戲時顯示\"正在跟踪\"通知。";
      displaytt = "設置成就通知顯示的時間長度 <br><span style='font-size: 8px;'>(如果\"僅聲音模式\"已啟用，則不可用)</span>";
      updatett = "更新可用";
      discordtt = "加入 Discord！";
      githubtt = "報告問題";
      resettt = "重啟";
      apilbltt = '單擊此處獲取您的 API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = '單擊此處獲取您的 Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "節省";
      keybindtt = "設置 Steam Screenshot Keybind";
   } else if (configtt.lang == "czech") {
      usertt = "Uživatelské Jméno Pro Steam<br><div style='font-size: 6px;'>Pro tohoto uživatele jsou sledovány úspěchy</div>";
      gamett = "Aktuální Hra<br><div style='font-size: 6px;'>Zobrazuje název aktuálně sledované hry</div>";
      mainprevtt = "Náhled Zvuku";
      rareprevtt = "Náhled Vzácný Zvuk";
      maintabtt = "Vyberte Hlavní Zvuk";
      raretabtt = "Vyberte Vzácný Zvuk";
      selmaintt = "Vyberte Hlavní Zvuk";
      selrarett = "Vyberte Vzácný Zvuk";
      screenshottt = "Pořídí snímek obrazovky a zobrazí jej v oznámení, když je úspěch odemčen.";
      shortcuttt = "Vytvoří zástupce Desktop pro spuštění Steam Achievement Notifier.";
      startwintt = "Automaticky spustí aplikaci při spuštění systému Windows.";
      startmintt = "Skryje okno aplikace při spuštění.";
      soundonlytt = "Skryje všechny zprávy, ale při odemykání úspěchů přehraje vybrané zvuky.<br><span style='font-size: 8px;'>(\"Doba Trvání oznámení\" nebude dostupný, když je povolen)</span>";
      tracktt = "Zobrazuje oznámení \"Nyní sledování\" při spouštění hry.";
      displaytt = "Nastavuje dobu po kterou se budou zobrazovat oznámení o úspěchu <br><span style='font-size: 8px;'>(Není k dispozici, pokud byl povolen \"Režim Pouze Zvuku\".)</span>";
      updatett = "AKTUALIZACE K DISPOZICI";
      discordtt = "Připojte se k Discord!";
      githubtt = "Nahlásit problém";
      resettt = "RESETOVAT";
      apilbltt = 'Klikněte sem a získejte API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klikněte sem a získejte Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Uložit";
      keybindtt = "Nastavte Steam Screenshot Keybind";
   } else if (configtt.lang == "danish") {
      usertt = "Steam Brugernavn<br><div style='font-size: 6px;'>Præstationer bliver sporet for denne bruger</div>";
      gamett = "Spil Display<br><div style='font-size: 6px;'>Viser navnet på det spil, der spores i øjeblikket</div>";
      mainprevtt = "Forhåndsvisning Af Hovedlyd";
      rareprevtt = "Forhåndsvisning Af Sjælden Lyd";
      maintabtt = "Vælg Hovedlyd";
      raretabtt = "Vælg Sjælden Lyd";
      selmaintt = "Vælg Hovedlyd";
      selrarett = "Vælg Sjælden Lyd";
      screenshottt = "Tager et skærmbillede og viser det i notifikationen, når en præstation låses op.";
      shortcuttt = "Opretter en genvej på Desktop til at køre Steam Achievement Notifier.";
      startwintt = "Starter automatisk programmet når Windows starter.";
      startmintt = "Skjuler programvinduet ved opstart.";
      soundonlytt = "Skjuler alle notifikationer, men afspiller udvalgte lyde, når du låser op for præstationer.<br><span style='font-size: 8px;'>(\"Visningstid\" vil ikke være tilgængelig, når den er aktiveret)</span>";
      tracktt = "Viser notifikationen \"Nu sporing\" når du starter et spil.";
      displaytt = "Indstiller hvor længe præstationsmeddelelser skal vises i <br><span style='font-size: 8px;'>(Ikke tilgængelig, hvis \"Kun Lyd-Tilstand\" er blevet aktiveret)</span>";
      updatett = "OPDATERING TILGÆNGELIG";
      discordtt = "Deltag på Discord!";
      githubtt = "Rapporter et problem";
      resettt = "NULSTIL";
      apilbltt = 'Klik her for at få din API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klik her for at få din Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Gemme";
      keybindtt = "Indstil Steam Screenshot Keybind";
   } else if (configtt.lang == "dutch") {
      usertt = "Steam Gebruikersnaam<br><div style='font-size: 6px;'>Prestaties worden bijgehouden voor deze gebruiker</div>";
      gamett = "Huidig ​​Spel<br><div style='font-size: 6px;'>Toont de naam van de game die momenteel wordt gevolgd</div>";
      mainprevtt = "Voorbeeld Van Hoofdgeluid";
      rareprevtt = "Voorbeeld Van Zeldzaam Geluid";
      maintabtt = "Selecteer Hoofdgeluid";
      raretabtt = "Selecteer Zeldzaam Geluid";
      selmaintt = "Selecteer Hoofdgeluid";
      selrarett = "Selecteer Zeldzaam Geluid";
      screenshottt = "Maakt een screenshot en geeft deze weer in de melding wanneer een prestatie is ontgrendeld.";
      shortcuttt = "Creëert een snelkoppeling op de Desktop om Steam Achievement Notifier uit te voeren.";
      startwintt = "Start automatisch de applicatie wanneer Windows start.";
      startmintt = "Verbergt het toepassingsvenster bij het opstarten.";
      soundonlytt = "Verbergt alle meldingen, maar speelt geselecteerde geluiden af ​​bij het ontgrendelen van prestaties.<br><span style='font-size: 8px;'>(\"Tijd Weergeven\" is niet beschikbaar indien ingeschakeld)</span>";
      tracktt = "Geeft het bericht \"Spelmelding\" weer bij het starten van een game.";
      displaytt = "Stelt in hoe lang prestatiemeldingen worden weergegeven <br><span style='font-size: 8px;'>(Niet beschikbaar als \"Alleen Geluidsmodus\" is ingeschakeld)</span>";
      updatett = "UPDATE BESCHIKBAAR";
      discordtt = "Kom bij ons op Discord!";
      githubtt = "Een probleem melden";
      resettt = "RESET";
      apilbltt = 'Klik hier om uw API Key te verkrijgen <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klik hier om je Steam64 ID te krijgen <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Opslaan";
      keybindtt = "Stel Steam Screenshot Keybind in";
   } else if (configtt.lang == "finnish") {
      usertt = "Steam Käyttäjätunnus<br><div style='font-size: 6px;'>Tämän käyttäjän saavutuksia seurataan</div>";
      gamett = "Nykyinen Peli<br><div style='font-size: 6px;'>Näyttää parhaillaan seurattavan pelin nimen</div>";
      mainprevtt = "Esikatsele Ilmoitusääntä";
      rareprevtt = "Esikatsele Harvinaista Ilmoitusääntä";
      maintabtt = "Valitse Pääilmoitusääni";
      raretabtt = "Valitse Harvinainen Ilmoitusääni";
      selmaintt = "Valitse Pääilmoitusääni";
      selrarett = "Valitse Harvinainen Ilmoitusääni";
      screenshottt = "Ottaa kuvakaappauksen ja näyttää sen ilmoituksessa, kun saavutus näytetään.";
      shortcuttt = "Luo Desktop pikakuvakkeen Steam Achievement Notifier ohjelman suorittamiseksi.";
      startwintt = "Käynnistää sovelluksen automaattisesti kun Windows käynnistyy.";
      startmintt = "Piilottaa sovellusikkunan käynnistyksen yhteydessä.";
      soundonlytt = "Piilottaa kaikki ilmoitukset, mutta toistaa valitut äänet saavutuksia avattaessa.<br><span style='font-size: 8px;'>(\"Ilmoituksen Näyttöaika\" ei ole käytettävissä kun se on käytössä)</span>";
      tracktt = "Näyttää \"Nyt Seuranta\" ilmoituksen kun aloitat pelin.";
      displaytt = "Asettaa ajan jonka saavutusilmoitukset näkyvät <br><span style='font-size: 8px;'>(Ei käytettävissä jos \"Äänitila\" on käytössä)</span>";
      updatett = "PÄIVITYS SAATAVILLA";
      discordtt = "Liity Discord!";
      githubtt = "Ilmoita ongelma";
      resettt = "RESET";
      apilbltt = 'Napsauta tätä saadaksesi APIKey <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Napsauta tätä saadaksesi Steam64ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Tallentaa";
      keybindtt = "Aseta Steam Screenshot Keybind";
   } else if (configtt.lang == "french") {
      usertt = "Nom d'Utilisateur Steam<br><div style='font-size: 6px;'>Le suivi des succés est activé pour cet utilisateur</div>";
      gamett = "Affichage du Jeu<br><div style='font-size: 6px;'>Affiche le nom du jeu actuellement suivi</div>";
      mainprevtt = "Aperçu du Son de Notification";
      rareprevtt = "Aperçu du Son de Notification Rare";
      maintabtt = "Sélectionnez le Son de Succés Normal";
      raretabtt = "Sélectionnez le Son de Succés Rare";
      selmaintt = "Sélectionnez le Son de Succés Normal";
      selrarett = "Sélectionnez le Son de Succés Rare";
      screenshottt = "Prend une capture d'écran et l'affiche dans la zone des notifications lorsqu'un succès est débloqué.";
      shortcuttt = "Crée un raccourci Bureau pour exécuter Steam Achievement Notifier.";
      startwintt = "Démarre automatiquement l'application au démarrage de Windows.";
      startmintt = "Minimise l'application au démarrage.";
      soundonlytt = "Masque toutes les notifications, mais joue les sons sélectionnés lors du déverrouillage des succès.<br><span style='font-size: 8px;'>(\"Temps d'Affichage\" ne sera pas disponible lorsqu'il est activé)</span>";
      tracktt = "Affiche la notification \"Suivi des Succés\" lors du démarrage d'un jeu";
      displaytt = "Définit la durée d'affichage des notifications de succès.<br><span style='font-size: 8px;'>(Non disponible si le \"Mode Audio Uniquement\" a été activé)</span>";
      updatett = "MISE À JOUR DISPONIBLE";
      discordtt = "Rejoignez-nous sur Discord!";
      githubtt = "Signaler un problème";
      resettt = "RÉINITIALISER";
      apilbltt = 'Cliquez ici pour obtenir votre clé API <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Cliquez ici pour obtenir votre Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Sauvegarder";
      keybindtt = "Insérez le Raccourci Capture d'Écran Steam";
   } else if (configtt.lang == "german") {
      usertt = "Steam Benutzername<br><div style='font-size: 6px;'>Errungenschaften werden für diesen Benutzer nachverfolgt</div>";
      gamett = "Spielanzeige<br><div style='font-size: 6px;'>Zeigt den Namen des aktuell verfolgten Spiels an</div>";
      mainprevtt = "Vorschau Des Haupttons";
      rareprevtt = "Vorschau Des Deltenen Tons";
      maintabtt = "Benachrichtigungston Für Errungenschafts Auswählen";
      raretabtt = "Benachrichtigungston Für Seltene Errungenschafts Auswählen";
      selmaintt = "Benachrichtigungston Für Normale Errungenschaft Auswählen";
      selrarett = "Benachrichtigungston Für Seltene Errungenschafts Auswählen";
      screenshottt = "Erstellt einen Screenshot und zeigt ihn in der Benachrichtigung an sobald eine Errungenschaft freigeschaltet wird.";
      shortcuttt = "Erstellt eine Desktopverknüpfung um Steam Achievement Notifier auszuführen.";
      startwintt = "Startet die Anwendung automatisch beim Start von Windows.";
      startmintt = "Blendet das Anwendungsfenster beim Start aus.";
      soundonlytt = "Blendet alle Benachrichtigungen aus, spielt aber ausgewählte Töne ab wenn Errungenschaften freigeschaltet werden.<br><span style='font-size: 8px;'>(\"Anzeigezeit\" ist bei Aktivierung nicht verfügbar)</span>";
      tracktt = "Zeigt beim Starten eines Spiels die \"Spielbenachrichtigung\" an.";
      displaytt = "Legt fest wie lange Errungenschaftsbenachrichtigungen angezeigt werden <br><span style='font-size: 8px;'>(Nicht verfügbar wenn \"Nur Ton Abspielen\" aktiviert wurde)</span>";
      updatett = "UPDATE VERFÜGBAR";
      discordtt = "Trete Discord Bei!";
      githubtt = "Ein problem melden";
      resettt = "ZURÜCKSETZEN";
      apilbltt = 'Klicken Sie hier um Ihren API Key zu erhalten <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klicken Sie hier um Ihre Steam64 ID zu erhalten <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Speichern";
      keybindtt = "Steam Screenshot Tastenbelegung Festlegen";
   } else if (configtt.lang == "greek") {
      usertt = "Όνομα χρήστη Steam<br><div style='font-size: 6px;'>Τα επιτεύγματα παρακολουθούνται για αυτόν τον χρήστη</div>";
      gamett = "Εμφάνιση παιχνιδιού<br><div style='font-size: 6px;'>Εμφανίζει το όνομα του παιχνιδιού που παρακολουθείται αυτήν τη στιγμή</div>";
      usertt = "Όνομα Χρήστη Steam<br><div style='font-size: 6px;'>Τα επιτεύγματα παρακολουθούνται για αυτόν τον χρήστη</div>";
      gamett = "Τρέχον Παιχνίδι<br><div style='font-size: 6px;'>Εμφανίζει το όνομα του παιχνιδιού που παρακολουθείται αυτήν τη στιγμή</div>";
      mainprevtt = "Κύρια Προεπισκόπηση Ήχου";
      rareprevtt = "Σπάνια Προεπισκόπηση Ήχου";
      maintabtt = "Επιλέξτε Ήχος Κύριου Επιτεύγματος";
      raretabtt = "Επιλέξτε Ήχος Σπάνιου Επιτεύγματος";
      selmaintt = "Επιλέξτε Ήχος Κύριου Επιτεύγματος";
      selrarett = "Επιλέξτε Ήχος Σπάνιου Επιτεύγματος";
      screenshottt = "Τραβάει ένα στιγμιότυπο οθόνης και το εμφανίζει στην ειδοποίηση όταν ξεκλειδώνεται ένα επίτευγμα.";
      shortcuttt = "Δημιουργεί μια συντόμευση στο Desktop για την εκτέλεση του Steam Achievement Notifier.";
      startwintt = "Εκκινεί αυτόματα την εφαρμογή κατά την εκκίνηση των Windows.";
      startmintt = "Κρύβει το παράθυρο της εφαρμογής κατά την εκκίνηση.";
      soundonlytt = "Αποκρύπτει όλες τις ειδοποιήσεις, αλλά αναπαράγει επιλεγμένους ήχους κατά το ξεκλείδωμα των επιτευγμάτων.<br><span style='font-size: 8px;'>(Η \"Ώρα Εμφάνισης\" δεν θα είναι διαθέσιμη όταν ενεργοποιηθεί)</span>";
      tracktt = "Εμφανίζει την ειδοποίηση \"Τώρα Παρατηρώντας\" κατά την έναρξη ενός παιχνιδιού.";
      displaytt = "Ορίζει το χρονικό διάστημα για το οποίο θα εμφανίζονται οι ειδοποιήσεις επιτευγμάτων <br><span style='font-size: 8px;'>(Δεν είναι διαθέσιμο εάν η \"Λειτουργία μόνο ήχου\" έχει ενεργοποιηθεί)</span>";
      updatett = "ΔΙΑΘΕΣΙΜΕΣ ΕΝΗΜΕΡΩΣΕΙΣ";
      discordtt = "Εγγραφείτε στο Discord!";
      githubtt = "Αναφέρετε ένα πρόβλημα";
      resettt = "ΕΠΑΝΑΦΟΡΑ";
      apilbltt = 'Κάντε κλικ εδώ για να λάβετε το API Key σας <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Κάντε κλικ εδώ για να λάβετε το Steam64 ID σας <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Σώσει";
      keybindtt = "Ρυθμίστε το Steam Screenshot Keybind";
   } else if (configtt.lang == "hungarian") {
      usertt = "Steam Felhasználónév<br><div style='font-size: 6px;'>A felhasználó elért eredményeit nyomon követik</div>";
      gamett = "Játék Kijelző<br><div style='font-size: 6px;'>Az éppen nyomon követett játék nevét mutatja</div>";
      mainprevtt = "Értesítési Hang Előnézete";
      rareprevtt = "Ritka Értesítési Hang Előnézete";
      maintabtt = "Válassza a Fő Értesítési Hang Lehetőséget";
      raretabtt = "Válassza a Ritka Értesítési Hang Lehetőséget";
      selmaintt = "Válassza a Fő Értesítési Hang Lehetőséget";
      selrarett = "Válassza a Ritka Értesítési Hang Lehetőséget";
      screenshottt = "Képernyőképet készít, és megjeleníti az értesítésben, amikor egy jutalom zárolását feloldják.";
      shortcuttt = "Parancsikont hoz létre a Desktopon a Steam Achievement Notifier futtatásához.";
      startwintt = "A Windows indításakor automatikusan elindítja az alkalmazást.";
      startmintt = "Elrejti az alkalmazás ablakát indításkor.";
      soundonlytt = "Elrejti az összes értesítést, de a jutalmak feloldásakor lejátssza a kiválasztott hangokat.<br><span style='font-size: 8px;'>(\"Értesítési Idő\" nem lesz elérhető, ha engedélyezve van)</span>";
      tracktt = "Megjeleníti a \"Most Követési\" értesítést játék indításakor.";
      displaytt = "Beállítja hogy mennyi ideig jelenjenek meg az értesítések <br><span style='font-size: 8px;'>(Nem érhető el ha a \"Csak Hang Mód\" be van kapcsolva)</span>";
      updatett = "FRISSÍTÉS ELÉRHETŐ";
      discordtt = "Csatlakozz a Discordhoz!";
      githubtt = "Probléma bejelentése";
      resettt = "ÚJRAKEZD";
      apilbltt = 'Kattintson ide az API Key beszerzéséhez <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Kattintson ide a Steam64 ID beszerzéséhez <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Megment";
      keybindtt = "Állítsa be a Steam Screenshot Keybind";
   } else if (configtt.lang == "italian") {
      usertt = "Nome Utente Di Steam<br><div style='font-size: 6px;'>I risultati vengono monitorati per questo utente</div>";
      gamett = "Display Di Gioco<br><div style='font-size: 6px;'>Mostra il nome del gioco attualmente monitorato</div>";
      mainprevtt = "Anteprima del Suono di Notifica Principale";
      rareprevtt = "Anteprima del Suono di Notifica Raro";
      maintabtt = "Seleziona il Suono di Notifica Principale";
      raretabtt = "Seleziona il Suono di Notifica Raro";
      selmaintt = "Seleziona il Suono di Notifica Principale";
      selrarett = "Seleziona il Suono di Notifica Raro";
      screenshottt = "Acquisisce uno screenshot e lo visualizza nella notifica quando viene sbloccato un obiettivo.";
      shortcuttt = "Crea un collegamento sul Desktop per eseguire Steam Achievement Notifier.";
      startwintt = "Avvia automaticamente l'applicazione all'avvio di Windows.";
      startmintt = "Nasconde la finestra dell'applicazione all'avvio.";
      soundonlytt = "Nasconde tutte le notifiche, ma riproduce i suoni selezionati quando si sbloccano gli obiettivi.<br><span style='font-size: 8px;'>(\"Durata Della Notifica\" non sarà disponibile se abilitato)</span>";
      tracktt = "Mostra la notifica \"Ora Osservando\" all'avvio di un gioco.";
      displaytt = "Imposta la durata della visualizzazione delle notifiche <br><span style='font-size: 8px;'>(Non disponibile se è stata abilitata la \"Modalità Solo Audio\")</span>";
      updatett = "AGGIORNAMENTO DISPONIBILE";
      discordtt = "Unisciti a Discord!";
      githubtt = "Segnala un problema";
      resettt = "RIPRISTINA";
      apilbltt = 'Clicca qui per ottenere la tua APIKey <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Clicca qui per ottenere il tuo Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Salva";
      keybindtt = "Imposta Steam Screenshot Keybind";
   } else if (configtt.lang == "japanese") {
      usertt = "Steamユーザー名<br><div style='font-size: 6px;'>このユーザーの実績は追跡されています</div>";
      gamett = "ゲームディスプレイ<br><div style='font-size: 6px;'>現在追跡されているゲームの名前を表示します</div>";
      mainprevtt = "通知音のプレビュー";
      rareprevtt = "まれな通知音のプレビュー";
      maintabtt = "主な達成通知音を選択します";
      raretabtt = "レアアチーブメント通知音を選択";
      selmaintt = "メインアチーブメントサウンドを選択します";
      selrarett = "レアアチーブメントサウンドを選択";
      screenshottt = "スクリーンショットを撮り、アチーブメントのロックが解除されたときに通知に表示します。";
      shortcuttt = "DesktopにSteam Achievement Notifierを実行するためのショートカットを作成します。";
      startwintt = "Windowsの起動時にアプリケーションを自動的に起動します。";
      startmintt = "起動時にアプリケーションウィンドウを非表示にします。";
      soundonlytt = "すべての通知を非表示にしますが、実績がロック解除されると、選択したサウンドを再生します。<br><span style='font-size: 8px;'>(「通知表示時間」が有効の場合は使用できません。)</span>";
      tracktt = "ゲーム開始時に「現在監視中」の通知が表示されます。";
      displaytt = "達成通知が表示される時間の長さを設定します <br><span style='font-size: 8px;'>(「音声のみモード」が有効になっている場合は使用できません)</span>";
      updatett = "利用可能な更新";
      discordtt = "Discordに参加しましょう！";
      githubtt = "問題を報告する";
      resettt = "リセット";
      apilbltt = 'API Keyを取得するには、ここをクリックしてください <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Steam64 IDを入手するには、ここをクリックしてください <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "保存する";
      keybindtt = "Steam Screenshot Keybindを設定する";
   } else if (configtt.lang == "korean") {
      usertt = "Steam 사용자 이름<br><div style='font-size: 6px;'>이 사용자의 업적을 추적 중입니다.</div>";
      gamett = "게임 디스플레이<br><div style='font-size: 6px;'>현재 추적 중인 게임의 이름을 표시합니다</div>";
      mainprevtt = "알림 소리 미리보기";
      rareprevtt = "희귀 알림 소리 미리보기";
      maintabtt = "주요 업적 알림음 선택";
      raretabtt = "희귀 업적 알림음 선택";
      selmaintt = "주요 업적 사운드 선택";
      selrarett = "희귀 업적 사운드 선택";
      screenshottt = "업적이 잠금 해제되면 스크린샷이 찍혀 알림에 표시됩니다.";
      shortcuttt = "Steam Achievement Notifier를 실행하기 위해 Desktop에 바로 가기를 만듭니다.";
      startwintt = "Windows가 시작될 때 자동으로 응용 프로그램을 시작합니다.";
      startmintt = "시작 시 응용 프로그램 창을 숨깁니다.";
      soundonlytt = "모든 알림을 숨기지만 업적을 잠금 해제할 때 선택한 소리를 재생합니다.<br><span style='font-size: 8px;'>(활성화되면 \"알림 표시 시간\"을 사용할 수 없습니다.)</span>";
      tracktt = "게임을 시작할 때 \"현재 추적\" 알림을 표시합니다.";
      displaytt = "업적 알림이 표시되는 시간을 설정합니다. <br><span style='font-size: 8px;'>(\"사운드 전용 모드\"가 활성화된 경우 사용할 수 없음)</span>";
      updatett = "업데이트 가능";
      discordtt = "Discord에 가입하세요!";
      githubtt = "문제 신고";
      resettt = "다시 놓기";
      apilbltt = 'API Key를 받으려면 여기를 클릭하세요. <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Steam64 ID를 받으려면 여기를 클릭하세요. <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "구하다";
      keybindtt = "Steam Screenshot Keybind 설정";
   } else if (configtt.lang == "norwegian") {
      usertt = "Steam Brukernavn<br><div style='font-size: 6px;'>Prestasjoner spores for denne brukeren</div>";
      gamett = "Nåværende Spill<br><div style='font-size: 6px;'>Viser navnet på spillet som spores</div>";
      mainprevtt = "Forhåndsvis Varslingslyd";
      rareprevtt = "Forhåndsvis Sjelden Varslingslyd";
      selmaintt = "Velg Hovedvarsellyd";
      selrarett = "Velg Sjelden Varsellyd";
      screenshottt = "Tar et skjermbilde og viser det i varselet når en prestasjon låses opp.";
      shortcuttt = "Oppretter en snarvei på Desktop for å kjøre Steam Achievement Notifier.";
      startwintt = "Starter programmet automatisk når Windows starter.";
      startmintt = "Skjuler programvinduet ved oppstart.";
      soundonlytt = "Skjuler alle varsler, men spiller av valgte lyder når du låser opp prestasjoner.<br><span style='font-size: 8px;'>(\"Varslingsvisningstid\" vil være utilgjengelig når den er aktivert)</span>";
      tracktt = "Viser \"Nå Sporing\"-varselet når du starter et spill.";
      displaytt = "Angir hvor lang tid prestasjonvarsler skal vises for <br><span style='font-size: 8px;'>(Ikke tilgjengelig hvis \"Kun Lydmodus\" er aktivert)</span>";
      updatett = "OPPDATERING TILGJENGELIG";
      discordtt = "Bli med på Discord!";
      githubtt = "Rapporter et problem";
      resettt = "NULLSTILLE";
      apilbltt = 'Klikk her for å få din API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klikk her for å få din Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Lagre";
      keybindtt = "Angi Steam Screenshot Keybind";
   } else if (configtt.lang == "polish") {
      usertt = "Nazwa Użytkownika Steam<br><div style='font-size: 6px;'>Osiągnięcia tego użytkownika są śledzone</div>";
      gamett = "Wyświetlacz Gry<br><div style='font-size: 6px;'>Pokazuje nazwę aktualnie śledzonej gry</div>";
      mainprevtt = "Podgląd Dźwięku Powiadomienia";
      rareprevtt = "Rzadki Dźwięk Powiadomienia Podgląd";
      maintabtt = "Wybierz Główny Dźwięk Powiadomienia";
      raretabtt = "Wybierz Rzadki Dźwięk Powiadomienia";
      selmaintt = "Wybierz Główny Dźwięk Powiadomienia";
      selrarett = "Wybierz Rzadki Dźwięk Powiadomienia";
      screenshottt = "Wykonuje zrzut ekranu i wyświetla go w powiadomieniu po odblokowaniu osiągnięcia.";
      shortcuttt = "Tworzy skrót w Desktop aby uruchomić Steam Achievement Notifier.";
      startwintt = "Automatycznie uruchamia aplikację podczas uruchamiania systemu Windows.";
      startmintt = "Ukrywa okno aplikacji podczas uruchamiania.";
      soundonlytt = "Ukrywa wszystkie powiadomienia, ale odtwarza wybrane dźwięki podczas odblokowywania osiągnięć.<br><span style='font-size: 8px;'>(„Czas Wyświetlania” będzie niedostępny po włączeniu)</span>";
      tracktt = "Wyświetla powiadomienie „Śledzenie” po uruchomieniu gry.";
      displaytt = "Ustawia czas wyświetlania powiadomień o osiągnięciach <br><span style='font-size: 8px;'>(Niedostępne jeśli włączony został „Tryb Tylko Dźwięk”)</span>";
      updatett = "DOSTĘPNA AKTUALIZACJA";
      discordtt = "Dołącz do Discord!";
      githubtt = "Zgłoś problem";
      resettt = "RESETOWANIE";
      apilbltt = 'Kliknij tutaj aby uzyskać API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Kliknij tutaj aby uzyskać Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Zapisać";
      keybindtt = "Ustaw Steam Screenshot Keybind";
   } else if (configtt.lang == "portuguese") {
      usertt = "Nome de Usuário do Steam<br><div style='font-size: 6px;'>Conquistas estão sendo rastreadas para este usuário</div>";
      gamett = "Exibição Do Jogo<br><div style='font-size: 6px;'>Mostra o nome do jogo que está sendo monitorado</div>";
      mainprevtt = "Antevisão do Som de Notificação Principal";
      rareprevtt = "Antevisão do Som de Notificação Rara";
      maintabtt = "Selecione Som de Notificação Principal";
      raretabtt = "Selecione Som de Notificação Raro";
      selmaintt = "Selecione Som de Notificação Principal";
      selrarett = "Selecione Som de Notificação Raro";
      screenshottt = "Tira uma captura de tela e a exibe na notificação quando uma conquista é desbloqueada.";
      shortcuttt = "Cria um atalho no Desktop para executar o Steam Achievement Notifier.";
      startwintt = "Inicia automaticamente o aplicativo quando o Windows é iniciado.";
      startmintt = "Oculta a janela do aplicativo na inicialização.";
      soundonlytt = "Oculta todas as notificações, mas reproduz sons selecionados ao desbloquear conquistas.<br><span style='font-size: 8px;'>(\"Tempo de Exibição\" estará indisponível quando habilitada)</span>";
      tracktt = "Mostra a notificação \"Agora Rastreando\" ao iniciar um jogo.";
      displaytt = "Define por quanto tempo as notificações de conquistas serão exibidas para <br><span style='font-size: 8px;'>(Não disponível se o \"Modo Apenas Som\" estiver habilitado)</span>";
      updatett = "ATUALIZAÇÃO DISPONÍVEL";
      discordtt = "Junte-se ao Discord!";
      githubtt = "Reportar um problema";
      resettt = "REDEFINIR";
      apilbltt = 'Clique aqui para obter sua API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Clique aqui para obter seu Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Salvar";
      keybindtt = "Definir Steam Screenshot Keybind";
   } else if (configtt.lang == "romanian") {
      usertt = "Nume de Utilizator Steam<br><div style='font-size: 6px;'>Realizările sunt urmărite pentru acest utilizator</div>";
      gamett = "Afișarea Jocului<br><div style='font-size: 6px;'>Afișează numele jocului care este urmărit în prezent</div>";
      mainprevtt = "Previzualizare Sunet de Notificare";
      rareprevtt = "Previzualizare Sunet de Notificare Rar";
      maintabtt = "Selectați Sunet de Notificare Principal";
      raretabtt = "Selectați Sunet de Notificare Rar";
      selmaintt = "Selectați Sunet de Notificare Principal";
      selrarett = "Selectați Sunet de Notificare Rar";
      screenshottt = "Face o captură de ecran și o afișează în notificare când o realizare este deblocată.";
      shortcuttt = "Creează o comandă rapidă pe Desktop pentru a rula Steam Achievement Notifier.";
      startwintt = "Pornește automat aplicația când Windows pornește.";
      startmintt = "Ascunde fereastra aplicației la pornire.";
      soundonlytt = "Ascunde toate notificările, dar redă sunete selectate la deblocarea realizărilor.<br><span style='font-size: 8px;'>(„Ora de Afișare” nu va fi disponibil când este activat)</span>";
      tracktt = "Afișează notificarea „Urmărire” când porniți un joc.";
      displaytt = "Setează durata de timp în care vor fi afișate notificările <br><span style='font-size: 8px;'>(Nu este disponibil dacă „Modul Numai Sunet” a fost activat)</span>";
      updatett = "ACTUALIZARE DISPONIBILA";
      discordtt = "Alătură-te Discord!";
      githubtt = "Raportează o problemă";
      resettt = "RESET";
      apilbltt = 'Faceți clic aici pentru a obține API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Faceți clic aici pentru a obține Steam64ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Salva";
      keybindtt = "Setați Steam Screenshot Keybind";
   } else if (configtt.lang == "russian") {
      usertt = "Имя пользователя Steam<br><div style='font-size: 6px;'>Достижения этого пользователя отслеживаются</div>";
      gamett = "Дисплей Игры<br><div style='font-size: 6px;'>Показывает название отслеживаемой в данный момент игры</div>";
      mainprevtt = "Прослушивание Звука Уведомления";
      rareprevtt = "Прослушивание Звука Редкого Достижения";
      maintabtt = "Выберите Основной Звук Уведомления";
      raretabtt = "Выберите Pедкий Звук Уведомления";
      selmaintt = "Выберите Основной Звук Уведомления";
      selrarett = "Выберите Звук Редкого Достижения";
      screenshottt = "Делает снимок экрана и отображает его в уведомлении, когда достижение разблокировано.";
      shortcuttt = "Создает ярлык для Desktop для запуска Steam Achievement Notifier.";
      startwintt = "Автоматически запускает приложение при запуске Windows.";
      startmintt = "Скрывает окно приложения при запуске.";
      soundonlytt = "Скрывает все уведомления, но воспроизводит выбранные звуки при разблокировке достижений.<br><span style='font-size: 8px;'>(\"Время отображения\" будет недоступно, если включено)</span>";
      tracktt = "Показывает уведомление \"Сейчас Oтслеживается\" при запуске игры.";
      displaytt = "Устанавливает продолжительность отображения уведомлений о достижениях <br><span style='font-size: 8px;'>(Недоступно если включен \"Режим Только Звук\")</span>";
      updatett = "ДОСТУПНО ОБНОВЛЕНИЕ";
      discordtt = "Присоединяйтесь к Discord!";
      githubtt = "Сообщить о проблеме";
      resettt = "СБРОС";
      apilbltt = 'Нажмите здесь чтобы получить свой API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Нажмите здесь чтобы получить свой Steam64ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Сохранить";
      keybindtt = "Настроить Клавишу Скриншота Steam";
   } else if (configtt.lang == "spanish") {
      usertt = "Nombre de Usuario de Steam<br><div style='font-size: 6px;'>Se está realizando un seguimiento de los logros de este usuario</div>";
      gamett = "Juego Actual<br><div style='font-size: 6px;'>Muestra el nombre del juego que se está rastreando actualmente</div>";
      mainprevtt = "Vista Previa Del Sonido de Notificación";
      rareprevtt = "Vista Previa Del Sonido de Notificación Raro";
      maintabtt = "Seleccionar Sonido de Notificación Principal";
      raretabtt = "Seleccionar Sonido de Notificación Raro";
      selmaintt = "Seleccionar Sonido de Notificación Principal";
      selrarett = "Seleccionar Sonido de Notificación Raro";
      screenshottt = "Toma una captura de pantalla y la muestra en la notificación cuando se desbloquea un logro.";
      shortcuttt = "Crea un acceso directo en el Desktop para ejecutar Steam Achievement Notifier.";
      startwintt = "Inicia automáticamente la aplicación cuando se inicia Windows.";
      startmintt = "Oculta la ventana de la aplicación al inicio.";
      soundonlytt = "Oculta todas las notificaciones, pero reproduce sonidos seleccionados al desbloquear logros.<br><span style='font-size: 8px;'>(\"Tiempo de Visualización\" no estará disponible cuando esté habilitado)</span>";
      tracktt = "Muestra la notificación \"Ahora Observando\" al iniciar un juego.";
      displaytt = "Establece la cantidad de tiempo que se mostrarán las notificaciones de logros. <br><span style='font-size: 8px;'>(No disponible si se ha habilitado el \"Modo Solo Sonido\")</span>";
      updatett = "ACTUALIZACIÓN DISPONIBLE";
      discordtt = "¡Únete a Discord!";
      githubtt = "Reportar un problema";
      resettt = "REINICIAR";
      apilbltt = 'Haga clic aquí para obtener su API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Haga clic aquí para obtener su Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Salvar";
      keybindtt = "Establecer Steam Screenshot Keybind";
   } else if (configtt.lang == "swedish") {
      usertt = "Användarnamn För Steam<br><div style='font-size: 6px;'>Prestationer spåras för denna användare</div>";
      gamett = "Aktuellt Spel<br><div style='font-size: 6px;'>Visar namnet på spelet som för närvarande spåras</div>";
      mainprevtt = "Förhandsgranska Huvudaviseringsljud";
      rareprevtt = "Förhandsgranska Sällsyntaviseringsljud";
      maintabtt = "Välj Huvudaviseringsljud";
      raretabtt = "Välj Sällsyntaviseringsljud";
      selmaintt = "Välj Huvudaviseringsljud";
      selrarett = "Välj Sällsyntaviseringsljud";
      screenshottt = "Tar en skärmdump och visar den i aviseringen när en prestation låses upp.";
      shortcuttt = "Skapar en genväg på Desktop för att köra Steam Achievement Notifier.";
      startwintt = "Startar automatiskt programmet när Windows startar.";
      startmintt = "Döljer programfönstret vid start.";
      soundonlytt = "Döljer alla aviseringar, men spelar valda ljud när prestationer låses upp.<br><span style='font-size: 8px;'>(\"Aviseringstid\" kommer att vara otillgänglig när den är aktiverad)</span>";
      tracktt = "Visar aviseringen \"Nu Spårning\" när ett spel startas.";
      displaytt = "Ställer in hur lång tid prestationsaviseringar ska visas under <br><span style='font-size: 8px;'>(Inte tillgängligt om \"Endast Ljudläge\" har aktiverats)</span>";
      updatett = "UPPDATERING TILLGÄNGLIG";
      discordtt = "Gå med i Discord!";
      githubtt = "Rapportera ett problem";
      resettt = "ÅTERSTÄLLA";
      apilbltt = 'Klicka här för att få din API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Klicka här för att få ditt Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Spara";
      keybindtt = "Ställ in Steam Screenshot Keybind";
   } else if (configtt.lang == "thai") {
      usertt = "ชื่อผู้ใช้ Steam<br><div style='font-size: 6px;'>กำลังติดตามความสำเร็จสำหรับผู้ใช้รายนี้</div>";
      gamett = "เกมปัจจุบัน<br><div style='font-size: 6px;'>แสดงชื่อเกมที่กำลังติดตาม</div>";
      mainprevtt = "ดูตัวอย่างเสียงแจ้งเตือน";
      rareprevtt = "ดูตัวอย่างเสียงแจ้งเตือนที่หายาก";
      maintabtt = "เลือกเสียงแจ้งเตือนหลัก";
      raretabtt = "เลือกเสียงแจ้งเตือนที่หายาก";
      selmaintt = "เลือกเสียงแจ้งเตือนหลัก";
      selrarett = "เลือกเสียงแจ้งเตือนที่หายาก";
      screenshottt = "จับภาพหน้าจอและแสดงในการแจ้งเตือนเมื่อมีการปลดล็อกรางวัลพิเศษ";
      shortcuttt = "สร้างทางลัดบน Desktop เพื่อเรียกใช้ Steam Achievement Notifier";
      startwintt = "เริ่มแอปพลิเคชันนี้โดยอัตโนมัติเมื่อ Windows เริ่มทำงาน";
      startmintt = "ซ่อนหน้าต่างแอปพลิเคชันเมื่อเริ่มต้น";
      soundonlytt = "ซ่อนการแจ้งเตือนทั้งหมด แต่เล่นเสียงที่เลือกเมื่อปลดล็อกรางวัลพิเศษ <br><span style='font-size: 8px;'>(\"เวลาแสดงการแจ้งเตือน\" จะไม่สามารถใช้ได้เมื่อเปิดใช้งาน)</span>";
      tracktt = "แสดงการแจ้งเตือน \"กำลังติดตาม\" เมื่อเริ่มเกม";
      displaytt = "ตั้งค่าระยะเวลาที่จะแสดงการแจ้งเตือนความสำเร็จสำหรับ <br><span style='font-size: 8px;'>(ไม่สามารถใช้ได้หากเปิดใช้งาน \"โหมดเสียงเท่านั้น\" ไว้)</span>";
      updatett = "อัปเดตพร้อมใช้งาน";
      discordtt = "เข้าร่วม Discord!";
      githubtt = "รายงานปัญหา";
      resettt = "รีเซ็ต";
      apilbltt = 'คลิกที่นี่เพื่อรับ APIKey ของคุณ <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'คลิกที่นี่เพื่อรับ Steam64 ID ของคุณ <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "บันทึก";
      keybindtt = "ตั้งค่า Steam Screenshot Keybind";
   } else if (configtt.lang == "turkish") {
      usertt = "Steam Kullanıcı Adı<br><div style='font-size: 6px;'>Bu kullanıcı için başarılar izleniyor</div>";
      gamett = "Suanki Oyun<br><div style='font-size: 6px;'>Şu anda izlenen oyunun adını gösterir</div>";
      mainprevtt = "Önizleme Bildirim Sesi";
      rareprevtt = "Nadir Bildirim Sesini Önizle";
      maintabtt = "Ana Başarı Bildirim Sesini Seçin";
      raretabtt = "Nadir Başarı Bildirim Sesini Seç";
      selmaintt = "Ana Başarı Sesini Seçin";
      selrarett = "Nadir Başarı Sesini Seç";
      screenshottt = "Ekran görüntüsünü alır ve bir başarının kilidi açıldığında bunu bildirimde görüntüler.";
      shortcuttt = "Steam Achievement Notifier'ı çalıştırmak için Desktop'de bir kısayol oluşturur.";
      startwintt = "Windows başladığında uygulamayı otomatik olarak başlatır.";
      startmintt = "Başlangıçta uygulama penceresini gizler.";
      soundonlytt = "Tüm bildirimleri gizler, ancak başarıların kilidini açarken seçilen sesleri çalar.<br><span style='font-size: 8px;'>(Etkinleştirildiğinde \"Bildirim Görüntüleme Süresi\" kullanılamayacak)</span>";
      tracktt = "Bir oyuna başlarken \"Şimdi İzleniyor\" bildirimini gösterir.";
      displaytt = "Başarı bildirimlerinin görüntüleneceği sürenin uzunluğunu ayarlar <br><span style='font-size: 8px;'>(\"Yalnızca Ses Modu\" etkinleştirildiyse kullanılamaz)</span>";
      updatett = "GÜNCELLEME UYGUN";
      discordtt = "Discord'a Katılın!";
      githubtt = "Sorun bildir";
      resettt = "SIFIRLA";
      apilbltt = 'API Key\'inizi almak için burayı tıklayın <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Steam64ID\'nizi almak için buraya tıklayın <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Kaydetmek";
      keybindtt = "Steam Screenshot Keybind'i Ayarlayın";
   } else if (configtt.lang == "ukrainian") {
      usertt = "Ім'я Користувача Steam<br><div style='font-size: 6px;'>Відстежуються досягнення цього користувача</div>";
      gamett = "Ігровий Дисплей<br><div style='font-size: 6px;'>Показує назву гри, яка в даний момент відстежується</div>";
      mainprevtt = "Перевірте Oсновний Звук";
      rareprevtt = "Перевірте Pідкісний Звук";
      maintabtt = "Виберіть Основний Звук Cповіщень";
      raretabtt = "Виберіть Рідкісний Звук Cповіщень";
      selmaintt = "Виберіть Основний Звук Cповіщень";
      selrarett = "Виберіть Рідкісний Звук Cповіщень";
      screenshottt = "Робить знімок екрана та відображає його в сповіщенні, коли досягнення розблоковано.";
      shortcuttt = "Створює ярлик на Desktop для запуску Steam Achievement Notifier.";
      startwintt = "Автоматично запускає програму при запуску Windows.";
      startmintt = "Приховує вікно програми під час запуску.";
      soundonlytt = "Приховує всі сповіщення, але відтворює вибрані звуки під час розблокування досягнень.<br><span style='font-size: 8px;'>(\"Тривалість\" буде недоступний коли ввімкнено)</span>";
      tracktt = "Показує сповіщення \"Відстеження\" під час запуску гри.";
      displaytt = "Встановлює час протягом якого відображатимуться сповіщення про досягнення <br><span style='font-size: 8px;'>(Недоступно якщо увімкнено \"Режим Лише Звуку\".)</span>";
      updatett = "ДОСТУПНЕ ОНОВЛЕННЯ";
      discordtt = "Приєднуйтесь до Discord!";
      githubtt = "Повідомити про проблему";
      resettt = "СКИНУТИ";
      apilbltt = 'Натисніть тут щоб отримати свій API Key <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Натисніть тут щоб отримати свій Steam64 ID <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Зберегти";
      keybindtt = "Налаштуйте Steam Screenshot Keybind";
   } else if (configtt.lang == "vietnamese") {
      usertt = "Tên Người Dùng Steam<br><div style='font-size: 6px;'>Thành tích đang được theo dõi cho người dùng này</div>";
      gamett = "Trò Chơi Hiện Tại<br><div style='font-size: 6px;'>Hiển thị tên của trò chơi hiện đang được theo dõi</div>";
      mainprevtt = "Xem Trước Âm Thanh Thông Báo";
      rareprevtt = "Xem Trước Âm Thanh Thông Báo Hiếm";
      maintabtt = "Chọn Âm Thanh Thông Báo Thành Tích Chính";
      raretabtt = "Chọn Âm Thanh Thông Báo Thành Tích Hiếm Có";
      selmaintt = "Chọn Âm Thanh Thành Tích Chính";
      selrarett = "Chọn Âm Thanh Thành Tựu Hiếm";
      screenshottt = "Chụp ảnh màn hình và hiển thị nó trong thông báo khi thành tích được mở khóa.";
      shortcuttt = "Tạo lối tắt trên Desktop để chạy Steam Achievement Notifier.";
      startwintt = "Tự động khởi động ứng dụng này khi Windows khởi động.";
      startmintt = "Ẩn cửa sổ ứng dụng khi khởi động.";
      soundonlytt = "Ẩn tất cả thông báo nhưng phát âm thanh đã chọn khi mở khóa thành tích.<br><span style='font-size: 8px;'>(\"Thời Lượng Tin Nhắn\" sẽ không khả dụng khi được bật)</span>";
      tracktt = "Hiển thị thông báo \"Hiện Đang Quan Sát\" khi bắt đầu trò chơi.";
      displaytt = "Đặt khoảng thời gian thông báo thành tích sẽ hiển thị <br><span style='font-size: 8px;'>(Không khả dụng nếu \"Chế Độ Chỉ Âm Thanh\" đã được bật)</span>";
      updatett = "Cập Nhật Có Sẵn";
      discordtt = "Tham gia trên Discord!";
      githubtt = "Báo cáo một vấn đề";
      resettt = "CÀI LẠI";
      apilbltt = 'Nhấp vào đây để tải APIKey của bạn <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      steam64lbltt = 'Nhấp vào đây để tải Steam64 ID của bạn <img src="./icons/open_in_new.svg" width="12px" style="vertical-align: -3px">';
      savett = "Lưu Cái Này";
      keybindtt = "Đặt Steam Screenshot Keybind";
   }
   usertippy.setContent(usertt);
   gametippy.setContent(gamett);
   mainprevtippy.setContent(mainprevtt);
   rareprevtippy.setContent(rareprevtt);
   maintabtippy.setContent(maintabtt);
   raretabtippy.setContent(raretabtt);
   selmaintippy.setContent(selmaintt);
   selraretippy.setContent(selrarett);
   screenshottippy.setContent(screenshottt);
   shortcuttippy.setContent(shortcuttt);
   startwintippy.setContent(startwintt);
   startmintippy.setContent(startmintt);
   soundonlytippy.setContent(soundonlytt);
   tracktippy.setContent(tracktt);

   document.getElementById("updateicon")._tippy.setContent(updatett);
   document.getElementById("discord")._tippy.setContent(discordtt);
   document.getElementById("github")._tippy.setContent(githubtt);
   document.getElementById("reset")._tippy.setContent(resettt);
   document.getElementById("apikeylbl")._tippy.setContent(apilbltt);
   document.getElementById("steam64lbl")._tippy.setContent(steam64lbltt);
   document.getElementById("saveapi")._tippy.setContent(savett);
   document.getElementById("save64")._tippy.setContent(savett);
   document.getElementById("slider")._tippy.setContent(displaytt);
   document.getElementById("keybindicon")._tippy.setContent(keybindtt);
}