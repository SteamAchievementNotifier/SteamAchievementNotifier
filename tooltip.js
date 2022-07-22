const fstt = require('fs')
const pathtt = require('path')
const appdirtt = "V1.8"

var usertt
var gamett
var mainprevtt
var rareprevtt
var maintabtt
var raretabtt
var selmaintt
var selrarett
var screenshottt
var raritytt
var nosteamtt
var shortcuttt
var startwintt
var startmintt
var soundonlytt
var tracktt
var updatett
var kofitt
var discordtt
var githubtt
var resettt
var apilbltt
var steam64lbltt
var savett
var keybindtt
var eyett
var customisett
var trackopacitytt
var allpercenttt
var hwatt
var nvdatt
var iconanimtt
var gamecompletiontt
var ssoverlaytt
var sserrortt
var fullscreentt
var extwintt

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
})

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
})

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
})

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
})

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
})

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
})

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
})

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
})

var screenshottippy = tippy(showscreenshotlbl, {
   content: screenshottt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 230,
   theme: "win",
})

var rarescreenshottippy = tippy(showscreenshotlblrare, {
   content: screenshottt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 230,
   theme: "win",
})

var iconanimtippy = tippy(iconanimationlbl, {
   content: iconanimtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 150,
   theme: "win",
})

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
})

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
})

var startmintippy = tippy(startmin, {
  content: startmintt,
  arrow: false,
  followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
})

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
})

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
})

tippy('#fullscreen', {
   allowHTML: true,
   content: fullscreentt,
   arrow: false,
   followCursor: true,
   maxWidth: 200,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#extwin', {
   allowHTML: true,
   content: extwintt,
   arrow: false,
   followCursor: true,
   maxWidth: 185,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#updateicon', {
   content: updatett,
   arrow: false,
   placement: "left",
   offset: [0,2],
   theme: "customfit",
})

tippy('#kofi', {
   content: kofitt,
   arrow: false,
   placement: "left",
   offset: [0,0],
   theme: "transparent",
})

tippy('#discord', {
   content: discordtt,
   arrow: false,
   placement: "left",
   offset: [0,28],
   theme: "transparent",
})

tippy('#github', {
   content: githubtt,
   arrow: false,
   placement: "left",
   offset: [0,55],
   theme: "transparent",
})

tippy('#reset', {
   content: resettt,
   arrow: false,
   placement: "top",
   offset: [0,0],
   theme: "transparent",
})

tippy('#apikeylbl', {
   allowHTML: true,
   content: apilbltt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [200,0],
   theme: "win",
})

tippy('#steam64lbl', {
   allowHTML: true,
   content: steam64lbltt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [200,0],
   theme: "win",
})

tippy('#saveapi', {
   content: savett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [500,0],
   theme: "win",
})

tippy('#save64', {
   content: savett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [500,0],
   theme: "win",
})

/*tippy('#slider', {
   allowHTML: true,
   content: displaytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [400, 0],
   maxWidth: 250,
   theme: "win",
})*/

tippy('#steamkeybindlbl', {
   allowHTML: true,
   content: keybindtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#steamkeybind', {
   allowHTML: true,
   content: keybindtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#rarity', {
   allowHTML: true,
   content: raritytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#rarityslider', {
   allowHTML: true,
   content: raritytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#nosteam', {
   allowHTML: true,
   content: nosteamtt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#eye', {
   content: eyett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

/*tippy('#statusdot', {
   allowHTML: true,
   content: statustt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})*/

tippy('#customisecont', {
   content: customisett,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#trackopacity', {
   content: trackopacitytt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#allpercent', {
   allowHTML: true,
   content: allpercenttt,
   arrow: false,
   followCursor: true,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#gamecompletion', {
   allowHTML: true,
   content: gamecompletiontt,
   arrow: false,
   followCursor: true,
   maxWidth: 170,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#ssoverlay', {
   allowHTML: true,
   content: ssoverlaytt,
   arrow: false,
   followCursor: true,
   maxWidth: 195,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#hwa', {
   allowHTML: true,
   content: hwatt,
   arrow: false,
   followCursor: true,
   maxWidth: 205,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#nvda', {
   allowHTML: true,
   content: nvdatt,
   arrow: false,
   followCursor: true,
   maxWidth: 195,
   placement: "right",
   offset: [30,15],
   delay: [250,0],
   theme: "win",
})

tippy('#sserror', {
   allowHTML: true,
   content: sserrortt,
   arrow: true,
   followCursor: true,
   maxWidth: 195,
   placement: "left",
   offset: [0,15],
   delay: [250,0],
   theme: "win",
})

function LoadLangTT() {
   var localappdata

   if (process.platform == "win32") {
      localappdata = pathtt.join(process.env.LOCALAPPDATA)
   } else if (process.platform == "linux") {
      localappdata = pathtt.join(process.env.HOME,".local","share")
   } else if (process.platform == "darwin") {
      localappdata = pathtt.join(process.env.HOME,"Library","Application Support")
   }

   const sanlocalappdata = pathtt.join(localappdata,`Steam Achievement Notifier (${appdirtt})`)

   const configtt = JSON.parse(fstt.readFileSync(pathtt.join(sanlocalappdata,"store","config.json")))
   
   if (configtt.lang == "english") {
      usertt = "Steam Username<br><div style='font-size: 6px'>Achievements are being tracked for this user</div>"
      gamett = "Game Display<br><div style='font-size: 6px'>Shows the name of the game currently being tracked</div>"
      mainprevtt = "Preview Notification Sound"
      rareprevtt = "Preview Rare Notification Sound"
      maintabtt = "Select Main Achievement Notification Sound"
      raretabtt = "Select Rare Achievement Notification Sound"
      selmaintt = "Select Main Achievement Sound"
      selrarett = "Select Rare Achievement Sound"
      screenshottt = "Takes a screenshot and displays it in the notification when an achievement is unlocked."
      shortcuttt = "Creates a shortcut on the Desktop<br>to run Steam Achievement Notifier."
      startwintt = "Automatically starts the application<br>when Windows starts."
      startmintt = "Hides the application window on startup."
      soundonlytt = "Hides all notifications, but plays selected<br>sounds when unlocking achievements."
      tracktt = "Shows the \"Now Tracking\" notification<br>when starting a game."
      displaytt = "Sets the length of time achievement<br>notifications will display for <br><span style='font-size: 8px'>(Not available if \"Sound-Only Mode\" has been enabled)</span>"
      updatett = "UPDATE AVAILABLE"
      kofitt = "Donate on Ko-Fi!"
      discordtt = "Join on Discord!"
      githubtt = "Report an issue"
      resettt = "RESET"
      apilbltt = 'Click here to get your API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Click here to get your Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Save"
      keybindtt = "Click the button to start listening for a keypress (\"...\"), then<br>press the key that corresponds to your screenshot key in Steam"

      raritytt = "\"Rare\" sounds/notifications will only show for<br>achievements with a rarity value below this percentage."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Enabling this option will restart Steam.</span><br>Hides the default Steam notification<br>when unlocking an achievement."
      customisett = "Customise Achievement Notification"
      eyett = "Show/Hide API Key"
      kofitt = "Donate on Ko-Fi!"
      trackopacitytt = "Sets the opacity of the \"Now Tracking\" notification."
      allpercenttt = "Achievement percentages will also<br>be shown for non-rare notifications."
      hwatt = "<div style='font-weight: bold; color: red'>*Application will restart when checked</div><div style='color: white font-weight: normal'>Disables hardware acceleration and enables manual garbage collection, which greatly reduces memory usage on systems using integrated/lower-end graphics hardware."
      nvdatt = "<div style='font-weight: bold; color: red'>*Requires NVDA ClipReader addon</div><div style='color: white font-weight: normal'>Copies all achievement information to the clipboard, which can then be read by the NVDA Screen Reader software.</div>"
      iconanimtt = "Toggles the gold outline on the rare achievement icon."
      gamecompletiontt = "Shows an additional notification when all achievements in a game have been unlocked."
      ssoverlaytt = `Takes a non-Steam screenshot and overlays the details of the unlocked achievement. These non-Steam screenshots can be saved in a specific directory using the "Path" option.`
      sserrortt = "<span style='color: red; font-weight: bold'>No screenshot option enabled!</span>"
      fullscreentt = `Enables notifications to be displayed over games set to use "Fullscreen" or "Exclusive Fullscreen" display modes.`
      customposwarn = `Unavailable when "Enable Fullscreen Notifications" option is enabled!`
      extwintt = "Spawns an additional external window which will playback all achievement notifications.<br><br><i>Suitable for window capture in OBS or other streaming software.</i>"
   } else if (configtt.lang == "arabic") {
      usertt = "اسم مستخدم Steam<br><div style='font-size: 6px'>يتم تعقب الإنجازات لهذا المستخدم</div>"
      gamett = "لعبة الحالية<br><div style='font-size: 6px'>يظهر اسم اللعبة التي يتم تعقبها حاليًا</div>"
      mainprevtt = "معاينة صوت الإعلام"
      rareprevtt = "نادر إشعار معاينة الصوت"
      maintabtt = "حدد صوت إخطار الإنجاز الرئيسي"
      raretabtt = "حدد صوت إعلام الإنجاز النادر"
      selmaintt = "حدد صوت الإنجاز الرئيسي"
      selrarett = "حدد صوت الإنجاز النادر"
      screenshottt = "يأخذ لقطة شاشة ويظهرها في الإشعار عند إلغاء قفل أحد الإنجازات."
      shortcuttt = "يقوم بإنشاء اختصار على سطح المكتب<br>لتشغيل برنامج Steam Achievement Notifier."
      startwintt = "يبدأ التطبيق تلقائيًا<br>عندما يبدأ Windows."
      startmintt = "يخفي نافذة التطبيق عند بدء التشغيل."
      soundonlytt = "يخفي كل الإخطارات ، لكن يلعب المختار<br>يبدو عند فتح الإنجازات."
      tracktt = "إظهار إشعار\"التتبع الآن\"<br>عند بدء اللعبة."
      displaytt = "يحدد طول وقت الإنجاز<br>سيتم عرض الإخطارات لـ <br><span style='font-size: 8px'>(غير متاح إذا تم تمكين\"وضع الصوت فقط\")</span>"
      updatett = "التحديث متاح"
      discordtt = "انضم إلى Discord!"
      githubtt = "الإبلاغ عن خطأ"
      resettt = "إعادة تعيين"
      apilbltt = "انقر هنا للحصول على API Key الخاص بك<img src='./icon/open_in_new.svg' width='12px' style='vertical-align: -3px'>"
      steam64lbltt = "انقر هنا للحصول على Steam64ID الخاص بك <img src='./icon/open_in_new.svg' width='12px' style='vertical-align: -3px'>"
      savett = "حفظ باسم"
      keybindtt = "انقر فوق الزر لبدء الاستماع إلى الضغط على مفتاح (\"...\") ، ثم اضغط على المفتاح الذي يتوافق مع مفتاح لقطة الشاشة في Steam"

      raritytt = "ستظهر الأصوات / الإشعارات \"النادرة\" فقط للإنجازات ذات القيمة النادرة أقل من هذه النسبة المئوية."
      nosteamtt = "<span style='color: red; font-weight: bold'>*سيؤدي تمكين هذا الخيار إلى إعادة تشغيل Steam.</span><br>يخفي إشعار Steam الافتراضي عند فتح أحد الإنجازات."
      customisett = "تخصيص إعلام الإنجاز"
      eyett = "إظهار / إخفاء API Key"
      kofitt = "تبرع على Ko-Fi!"
      trackopacitytt = "يضبط عتامة إشعار\"التتبع الآن\"."
      allpercenttt = "سيتم أيضًا عرض نسب الإنجاز<br>للإشعارات غير النادرة."
      hwatt = "<div style='font-weight: bold; color: red'>*سيتم إعادة تشغيل التطبيق عند التحقق منه</div><div style='color: white font-weight: normal'>لتعطيل تسريع الأجهزة وتمكين جمع البيانات المهملة يدويًا ، مما يقلل بشكل كبير من استخدام الذاكرة على الأنظمة التي تستخدم أجهزة رسومات متكاملة / منخفضة النهاية."
      nvdatt = "<div style='font-weight: bold; color: red'>*يتطلب إضافة NVDA ClipReader</div><div style='color: white font-weight: normal'>ينسخ جميع معلومات الإنجاز إلى الحافظة ، والتي يمكن قراءتها بعد ذلك بواسطة برنامج NVDA.</div>"
      iconanimtt = "يبدل المخطط التفصيلي الذهبي على أيقونة الإنجاز النادرة."
      gamecompletiontt = "يعرض إشعارًا إضافيًا عند إلغاء قفل جميع الإنجازات في اللعبة."
      ssoverlaytt = `يأخذ لقطة شاشة غير Steam ويغطي تفاصيل الإنجاز غير المؤمّن. يمكن حفظ لقطات الشاشة غير Steam في دليل محدد باستخدام خيار "المسار".`
      sserrortt = "<span style='color: red; font-weight: bold'>لم يتم تمكين خيار لقطة الشاشة!</span>"
   } else if (configtt.lang == "bulgarian") {
      usertt = "Потребителско име на Steam<br><div style='font-size: 6px'>Постиженията се проследяват за този потребител</div>"
      gamett = "Дисплей На Играта<br><div style='font-size: 6px'>Показва името на играта, която се проследява в момента</div>"
      mainprevtt = "Тествайте основния звук"
      rareprevtt = "Тествайте редкия звук"
      maintabtt = "Изберете Основен Звук"
      raretabtt = "Изберете Рядък Звук"
      selmaintt = "Изберете Основен Звук"
      selrarett = "Изберете Рядък Звук"
      screenshottt = "Прави екранна снимка и я показва в известието, когато дадено постижение е отключено."
      shortcuttt = "Създаване на пряк път в Desktop за да стартирате Steam Achievement Notifier."
      startwintt = "Автоматично стартира приложението при стартиране на Windows."
      startmintt = "Скрива прозореца на приложението при стартиране."
      soundonlytt = "Скрива всички известия, но възпроизвежда избрани звуци при отключване на постижения."
      tracktt = "Показва известието \"Сега проследяване\" при стартиране на игра."
      displaytt = "Задава продължителността на времето, за което постиженията ще се показват известията <br><span style='font-size: 8px'>(Не е налично, ако е активиран \"Режим само за звук\".)</span>"
      updatett = "НАЛИЧНА АКТУАЛИЗАЦИЯ"
      discordtt = "Присъединете се към Discord!"
      githubtt = "Подайте сигнал за проблем"
      resettt = "НУЛИРАНЕ"
      apilbltt = 'Щракнете тук за да получите своя API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Щракнете тук за да получите своя Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Запазете"
      keybindtt = "Щракнете върху бутона, за да започнете да слушате за натискане на клавиш (\"...\"), след което натиснете клавиша, който съответства на клавиша за екранна снимка в Steam"

      raritytt = "\"Редки\" звуци/известия ще се показват само за<br>постижения със стойност на рядкост под този процент."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Активирането на тази опция<br>ще рестартира Steam.</span><br>Скрива известието по<br>подразбиране на Steam при<br>отключване на постижение."
      customisett = "Персонализирайте Известието Си За Постижения"
      eyett = "Показване/скриване на API Key"
      kofitt = "Дарете в Ko-Fi!"
      trackopacitytt = "Задава непрозрачността на известието \"Сега проследяване\"."
      allpercenttt = "Процентите на постиженията също ще<br>бъдат показани за нередки известия."
      hwatt = "<div style='font-weight: bold; color: red'>*Приложението ще се рестартира при отметка</div><div style='color: white font-weight: normal'>Деактивира хардуерното ускорение и позволява ръчно събиране на боклука, което значително намалява използването на памет в системи, използващи интегриран/по-нисък графичен хардуер."
      nvdatt = "<div style='font-weight: bold; color: red'>*Изисква добавка NVDA ClipReader</div><div style='color: white font-weight: normal'>Копира цялата информация за постиженията в клипборда, която след това може да бъде прочетена от софтуера на NVDA.</div>"
      iconanimtt = "Превключва златния контур на иконата за рядко постижение."
      gamecompletiontt = "Показва допълнително известие, когато всички постижения в играта са отключени."
      ssoverlaytt = `Прави екранна снимка извън Steam и наслагва детайлите на отключеното постижение. Тези екранни снимки, различни от Steam, могат да бъдат записани в определена директория с помощта на опцията "Път".`
      sserrortt = "<span style='color: red; font-weight: bold'>Опцията за екранна снимка не е активирана!</span>"
   } else if (configtt.lang == "schinese") {
      usertt = "Steam 用户名<br><div style='font-size: 6px'>正在跟踪此用户的成就</div>"
      gamett = "当前游戏<br><div style='font-size: 6px'>显示当前正在跟踪的游戏名称</div>"
      mainprevtt = "预览通知声音"
      rareprevtt = "预览罕见的通知声音"
      maintabtt = "选择主要成就通知声音"
      raretabtt = "选择稀有成就提示音"
      selmaintt = "选择主要成就声音"
      selrarett = "选择稀有成就音效"
      screenshottt = "当成就解锁时，截取屏幕截图并将其显示在通知中。"
      shortcuttt = "在桌面上创建一个快捷方式来运行 Steam Achievement Notifier。"
      startwintt = "Windows 启动时自动启动应用程序。"
      startmintt = "在启动时隐藏应用程序窗口。"
      soundonlytt = "隐藏所有通知，但在解锁成就时播放选定的声音。"
      tracktt = "开始游戏时显示\"正在跟踪\"通知。"
      displaytt = "设置成就通知将显示的时间长度 <br><span style='font-size: 8px'>(如果\"仅声音模式\"已启用，则不可用)</span>"
      updatett = "更新可用"
      discordtt = "加入 Discord！"
      githubtt = "报告问题"
      resettt = "重启"
      apilbltt = '单击此处获取您的 API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = '单击此处获取您的 Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "节省"
      keybindtt = "单击按钮开始监听按键（\"...\"），<br>然后按下与 Steam 中的屏幕截图键对应的键"

      raritytt = "“稀有”声音/通知只会显示<br>稀有度低于此百分比的成就。"
      nosteamtt = "<span style='color: red; font-weight: bold'>*启用此选项将重新启动 Steam。</span><br>在解锁成就时隐藏默认 Steam 通知。"
      customisett = "自定义成就通知"
      eyett = "显示/隐藏 API Key"
      kofitt = "在 Ko-Fi 上捐款！"
      trackopacitytt = "设置“追踪”通知的不透明度。"
      allpercenttt = "非稀有通知也将显示成就百分比。"
      hwatt = "<div style='font-weight: bold; color: red'>*选中后应用程序将重新启动</div><div style='color: white font-weight: normal'>禁用硬件加速并启用手动垃圾收集，这大大减少了使用集成/低端图形硬件的系统上的内存使用量。"
      nvdatt = "<div style='font-weight: bold; color: red'>*需要 NVDA ClipReader 插件</div><div style='color: white font-weight: normal'>将所有成就信息复制到剪贴板，然后可以通过 NVDA 屏幕阅读器软件读取。</div>"
      iconanimtt = "切换稀有成就图标上的金色轮廓。"
      gamecompletiontt = "当游戏中的所有成就都已解锁时显示附加通知。"
      ssoverlaytt = `截取非 Steam 屏幕截图并覆盖解锁成就的详细信息。这些非 Steam 屏幕截图可以使用“路径”选项保存在特定目录中。`
      sserrortt = "<span style='color: red; font-weight: bold'>没有启用截图选项！</span>"
   } else if (configtt.lang == "tchinese") {
      usertt = "Steam 用戶名<br><div style='font-size: 6px'>正在跟踪此用戶的成就</div>"
      gamett = "當前遊戲<br><div style='font-size: 6px'>顯示當前正在跟踪的遊戲名稱</div>"
      mainprevtt = "預覽通知聲音"
      rareprevtt = "預覽罕見的通知聲音"
      maintabtt = "選擇主要成就通知聲音"
      raretabtt = "選擇稀有成就提示音"
      selmaintt = "選擇主要成就聲音"
      selrarett = "選擇稀有成就音效"
      screenshottt = "當成就解鎖時，截取屏幕截圖並將其顯示在通知中。"
      shortcuttt = "在 Desktop 上創建一個快捷方式來運行 Steam Achievement Notifier。"
      startwintt = "Windows 啟動時自動啟動應用程序。"
      startmintt = "在啟動時隱藏應用程序窗口。"
      soundonlytt = "隱藏所有通知，但在解鎖成就時播放選定的聲音。"
      tracktt = "開始遊戲時顯示\"正在跟踪\"通知。"
      displaytt = "設置成就通知顯示的時間長度 <br><span style='font-size: 8px'>(如果\"僅聲音模式\"已啟用，則不可用)</span>"
      updatett = "更新可用"
      discordtt = "加入 Discord！"
      githubtt = "報告問題"
      resettt = "重啟"
      apilbltt = '單擊此處獲取您的 API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = '單擊此處獲取您的 Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "節省"
      keybindtt = "單擊按鈕開始監聽按鍵 (\"...\")，<br>然後按下與您在 Steam 中的屏幕截圖鍵對應的鍵"

      raritytt = "“稀有”聲音/通知只會顯示<br>稀有度低於此百分比的成就。"
      nosteamtt = "<span style='color: red; font-weight: bold'>*啟用此選項將重新啟動 Steam。</span><br>在解鎖成就時隱藏默認 Steam 通知。"
      customisett = "自定義成就通知"
      eyett = "顯示/隱藏 API Key"
      kofitt = "在 Ko-Fi 上捐款！"
      trackopacitytt = "设置“追踪”通知的不透明度。"
      allpercenttt = "非稀有通知也將顯示成就百分比。"
      hwatt = "<div style='font-weight: bold; color: red'>*選中後應用程序將重新啟動</div><div style='color: white font-weight: normal'>禁用硬件加速並啟用手動垃圾收集，這大大減少了使用集成/低端圖形硬件的系統上的內存使用量。"
      nvdatt = "<div style='font-weight: bold; color: red'>*需要 NVDA ClipReader 插件</div><div style='color: white font-weight: normal'>將所有成就信息複製到剪貼板，然後可以通過 NVDA 屏幕閱讀器軟件讀取。</div>"
      iconanimtt = "切換稀有成就圖標上的金色輪廓。"
      gamecompletiontt = "當遊戲中的所有成就都已解鎖時顯示附加通知。"
      ssoverlaytt = `拍攝非 Steam 屏幕截圖並覆蓋解鎖的成就詳情。這些非 Steam 屏幕截圖可以使用“路徑”選項保存在特定目錄中。`
      sserrortt = "<span style='color: red; font-weight: bold'>沒有啟用截圖選項！</span>"
   } else if (configtt.lang == "czech") {
      usertt = "Uživatelské Jméno Pro Steam<br><div style='font-size: 6px'>Pro tohoto uživatele jsou sledovány úspěchy</div>"
      gamett = "Aktuální Hra<br><div style='font-size: 6px'>Zobrazuje název aktuálně sledované hry</div>"
      mainprevtt = "Náhled Zvuku"
      rareprevtt = "Náhled Vzácný Zvuk"
      maintabtt = "Vyberte Hlavní Zvuk"
      raretabtt = "Vyberte Vzácný Zvuk"
      selmaintt = "Vyberte Hlavní Zvuk"
      selrarett = "Vyberte Vzácný Zvuk"
      screenshottt = "Pořídí snímek obrazovky a zobrazí jej v oznámení, když je úspěch odemčen."
      shortcuttt = "Vytvoří zástupce Desktop pro spuštění Steam Achievement Notifier."
      startwintt = "Automaticky spustí aplikaci při spuštění systému Windows."
      startmintt = "Skryje okno aplikace při spuštění."
      soundonlytt = "Skryje všechny zprávy, ale při odemykání úspěchů přehraje vybrané zvuky."
      tracktt = "Zobrazuje oznámení \"Nyní sledování\" při spouštění hry."
      displaytt = "Nastavuje dobu po kterou se budou zobrazovat oznámení o úspěchu <br><span style='font-size: 8px'>(Není k dispozici, pokud byl povolen \"Režim Pouze Zvuku\".)</span>"
      updatett = "AKTUALIZACE K DISPOZICI"
      discordtt = "Připojte se k Discord!"
      githubtt = "Nahlásit problém"
      resettt = "RESETOVAT"
      apilbltt = 'Klikněte sem a získejte API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klikněte sem a získejte Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Uložit"
      keybindtt = "Kliknutím na tlačítko začněte poslouchat stisknutí klávesy (\"...\") a poté stiskněte klávesu, která odpovídá vašemu klíči snímku obrazovky ve službě Steam"

      raritytt = "\"Vzácné\" zvuky/oznámení se zobrazí pouze u<br>úspěchů s hodnotou vzácnosti nižší než toto procento."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Povolením této možnosti<br>restartujete Steam.</span><br>Skryje výchozí oznámení<br>Steam při odemykání úspěchu."
      customisett = "Přizpůsobte Si Oznámení O Úspěchu"
      eyett = "Zobrazit/Skrýt APIKey"
      kofitt = "Darujte na Ko-Fi!"
      trackopacitytt = "Nastaví neprůhlednost oznámení \"Sledování\"."
      allpercenttt = "Procenta úspěchu se zobrazí také<br>u oznámení, která nejsou vzácná."
      hwatt = "<div style='font-weight: bold; color: red'>*Po zaškrtnutí se aplikace restartuje</div><div style='color: white font-weight: normal'>Deaktivuje hardwarovou akceleraci a umožňuje ruční shromažďování odpadu, což výrazně snižuje využití paměti v systémech využívajících integrovaný/nižší grafický hardware."
      nvdatt = "<div style='font-weight: bold; color: red'>*Vyžaduje doplněk NVDA ClipReader</div><div style='color: white font-weight: normal'>Zkopíruje všechny informace o úspěchu do schránky, kterou pak může číst software NVDA.</div>"
      iconanimtt = "Přepíná zlatý obrys na ikoně vzácného úspěchu."
      gamecompletiontt = "Zobrazí další upozornění, když byly odemčeny všechny úspěchy ve hře."
      ssoverlaytt = `Pořídí snímek obrazovky mimo Steam a překryje podrobnosti o odemčeném úspěchu. Tyto snímky obrazovky mimo Steam lze uložit do konkrétního adresáře pomocí možnosti "Cesta".`
      sserrortt = "<span style='color: red; font-weight: bold'>Není nastavena žádná možnost snímku obrazovky!</span>"
   } else if (configtt.lang == "danish") {
      usertt = "Steam Brugernavn<br><div style='font-size: 6px'>Præstationer bliver sporet for denne bruger</div>"
      gamett = "Spil Display<br><div style='font-size: 6px'>Viser navnet på det spil, der spores i øjeblikket</div>"
      mainprevtt = "Forhåndsvisning Af Hovedlyd"
      rareprevtt = "Forhåndsvisning Af Sjælden Lyd"
      maintabtt = "Vælg Hovedlyd"
      raretabtt = "Vælg Sjælden Lyd"
      selmaintt = "Vælg Hovedlyd"
      selrarett = "Vælg Sjælden Lyd"
      screenshottt = "Tager et skærmbillede og viser det i notifikationen, når en præstation låses op."
      shortcuttt = "Opretter en genvej på Desktop til at køre Steam Achievement Notifier."
      startwintt = "Starter automatisk programmet når Windows starter."
      startmintt = "Skjuler programvinduet ved opstart."
      soundonlytt = "Skjuler alle notifikationer, men afspiller udvalgte lyde, når du låser op for præstationer."
      tracktt = "Viser notifikationen \"Nu sporing\" når du starter et spil."
      displaytt = "Indstiller hvor længe præstationsmeddelelser skal vises i <br><span style='font-size: 8px'>(Ikke tilgængelig, hvis \"Kun Lyd-Tilstand\" er blevet aktiveret)</span>"
      updatett = "OPDATERING TILGÆNGELIG"
      discordtt = "Deltag på Discord!"
      githubtt = "Rapporter et problem"
      resettt = "NULSTIL"
      apilbltt = 'Klik her for at få din API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klik her for at få din Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Gemme"
      keybindtt = "Klik på knappen for at begynde at lytte efter et tastetryk (\"...\"), og tryk derefter på den tast, der svarer til din skærmbilledetast i Steam"

      raritytt = "\"Sjældne\" lyde/meddelelser vises kun for præstationer<br>med en sjældenhedsværdi under denne procentdel."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Aktivering af denne<br>mulighed genstarter Steam.</span><br>Skjuler standard Steam-meddelelsen<br>når du låser op for en præstation."
      customisett = "Tilpas Præstationsmeddelelse"
      eyett = "Vis/skjul API Key"
      kofitt = "Doner på Ko-Fi!"
      trackopacitytt = "Indstiller opaciteten af ​​\"Nu Sporing\" meddelelsen."
      allpercenttt = "Præstationsprocenter vil også blive<br>vist for ikke-sjældne notifikationer."
      hwatt = "<div style='font-weight: bold; color: red'>*Applikationen genstartes, når den er markeret</div><div style='color: white font-weight: normal'>Deaktiverer hardwareacceleration og muliggør manuel indsamling af skrald, hvilket i høj grad reducerer hukommelsesforbruget på systemer, der bruger integreret/lavere grafikhardware."
      nvdatt = "<div style='font-weight: bold; color: red'>*Kræver NVDA ClipReader-tilføjelse</div><div style='color: white font-weight: normal'>Kopierer alle præstationsoplysninger til udklipsholderen, som derefter kan læses af NVDA-softwaren.</div>"
      iconanimtt = "Skifter guldkonturen på det sjældne præstationsikon."
      gamecompletiontt = "Viser en ekstra notifikation, når alle præstationer i et spil er blevet låst op."
      ssoverlaytt = `Tager et ikke-Steam-skærmbillede og overlejrer detaljerne for den ulåste præstation. Disse ikke-Steam-skærmbilleder kan gemmes i en specifik mappe ved at bruge "Sti"-indstillingen.`
      sserrortt = "<span style='color: red; font-weight: bold'>Ingen mulighed for skærmbillede aktiveret!</span>"
   } else if (configtt.lang == "dutch") {
      usertt = "Steam Gebruikersnaam<br><div style='font-size: 6px'>Prestaties worden bijgehouden voor deze gebruiker</div>"
      gamett = "Huidig ​​Spel<br><div style='font-size: 6px'>Toont de naam van de game die momenteel wordt gevolgd</div>"
      mainprevtt = "Voorbeeld Van Hoofdgeluid"
      rareprevtt = "Voorbeeld Van Zeldzaam Geluid"
      maintabtt = "Selecteer Hoofdgeluid"
      raretabtt = "Selecteer Zeldzaam Geluid"
      selmaintt = "Selecteer Hoofdgeluid"
      selrarett = "Selecteer Zeldzaam Geluid"
      screenshottt = "Maakt een screenshot en geeft deze weer in de melding wanneer een prestatie is ontgrendeld."
      shortcuttt = "Creëert een snelkoppeling op de Desktop om Steam Achievement Notifier uit te voeren."
      startwintt = "Start automatisch de applicatie wanneer Windows start."
      startmintt = "Verbergt het toepassingsvenster bij het opstarten."
      soundonlytt = "Verbergt alle meldingen, maar speelt geselecteerde geluiden af ​​bij het ontgrendelen van prestaties.<br><span style='font-size: 8px'>(\"Tijd Weergeven\" is niet beschikbaar indien ingeschakeld)</span>"
      tracktt = "Geeft het bericht \"Spelmelding\" weer bij het starten van een game."
      displaytt = "Stelt in hoe lang prestatiemeldingen worden weergegeven <br><span style='font-size: 8px'>(Niet beschikbaar als \"Alleen Geluidsmodus\" is ingeschakeld)</span>"
      updatett = "UPDATE BESCHIKBAAR"
      discordtt = "Kom bij ons op Discord!"
      githubtt = "Een probleem melden"
      resettt = "RESET"
      apilbltt = 'Klik hier om uw API Key te verkrijgen <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klik hier om je Steam64ID te krijgen <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Opslaan"
      keybindtt = "Klik op de knop om te luisteren naar een toetsaanslag (\"...\") en druk vervolgens op de toets die overeenkomt met je screenshot-toets in Steam"

      raritytt = "\"Zeldzame\" geluiden/meldingen worden alleen weergegeven voor<br>prestaties met een zeldzaamheidswaarde onder dit percentage."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Als u deze optie inschakelt,<br>wordt Steam opnieuw gestart.</span><br>Verbergt de standaard Steam-melding<br>bij het ontgrendelen van een prestatie."
      customisett = "Prestatiemelding Aanpassen"
      eyett = "Toon/verberg API Key"
      kofitt = "Doneer op Ko-Fi!"
      trackopacitytt = "Stelt de dekking van de melding \"Spelmelding\" in."
      allpercenttt = "Prestatiepercentages worden ook<br>getoond voor niet-zeldzame meldingen."
      hwatt = "<div style='font-weight: bold; color: red'>*Applicatie zal herstarten wanneer aangevinkt</div><div style='color: white font-weight: normal'>Schakelt hardwareversnelling uit en maakt handmatige afvalverzameling mogelijk, waardoor het geheugengebruik op systemen met geïntegreerde/lagere grafische hardware aanzienlijk wordt verminderd."
      nvdatt = "<div style='font-weight: bold; color: red'>*Vereist NVDA ClipReader-add-on</div><div style='color: white font-weight: normal'>Kopieert alle prestatie-informatie naar het klembord, dat vervolgens kan worden gelezen door de NVDA-software.</div>"
      iconanimtt = "Schakelt de gouden omtrek op het zeldzame prestatie icoon."
      gamecompletiontt = "Toont een extra melding wanneer alle prestaties in een game zijn ontgrendeld."
      ssoverlaytt = `Maakt een niet-Steam-screenshot en overlapt de details van de ontgrendelde prestatie. Deze niet-Steam-screenshots kunnen in een specifieke map worden opgeslagen met de optie "Pad".`
      sserrortt = "<span style='color: red; font-weight: bold'>Geen screenshot-optie ingeschakeld!</span>"
   } else if (configtt.lang == "finnish") {
      usertt = "Steam Käyttäjätunnus<br><div style='font-size: 6px'>Tämän käyttäjän saavutuksia seurataan</div>"
      gamett = "Nykyinen Peli<br><div style='font-size: 6px'>Näyttää parhaillaan seurattavan pelin nimen</div>"
      mainprevtt = "Esikatsele Ilmoitusääntä"
      rareprevtt = "Esikatsele Harvinaista Ilmoitusääntä"
      maintabtt = "Valitse Pääilmoitusääni"
      raretabtt = "Valitse Harvinainen Ilmoitusääni"
      selmaintt = "Valitse Pääilmoitusääni"
      selrarett = "Valitse Harvinainen Ilmoitusääni"
      screenshottt = "Ottaa kuvakaappauksen ja näyttää sen ilmoituksessa, kun saavutus näytetään."
      shortcuttt = "Luo Desktop pikakuvakkeen Steam Achievement Notifier ohjelman suorittamiseksi."
      startwintt = "Käynnistää sovelluksen automaattisesti kun Windows käynnistyy."
      startmintt = "Piilottaa sovellusikkunan käynnistyksen yhteydessä."
      soundonlytt = "Piilottaa kaikki ilmoitukset, mutta toistaa valitut äänet saavutuksia avattaessa.<br><span style='font-size: 8px'>(\"Ilmoituksen Näyttöaika\" ei ole käytettävissä kun se on käytössä)</span>"
      tracktt = "Näyttää \"Nyt Seuranta\" ilmoituksen kun aloitat pelin."
      displaytt = "Asettaa ajan jonka saavutusilmoitukset näkyvät <br><span style='font-size: 8px'>(Ei käytettävissä jos \"Äänitila\" on käytössä)</span>"
      updatett = "PÄIVITYS SAATAVILLA"
      discordtt = "Liity Discord!"
      githubtt = "Ilmoita ongelma"
      resettt = "RESET"
      apilbltt = 'Napsauta tätä saadaksesi APIKey <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Napsauta tätä saadaksesi Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Tallentaa"
      keybindtt = "Napsauta painiketta aloittaaksesi näppäinpainalluksen kuuntelemisen (\"...\") ja paina sitten näppäintä, joka vastaa kuvakaappausnäppäintä Steamissä"

      raritytt = "\"Harvinaiset\" äänet/ilmoitukset näkyvät vain saavutuksista,<br>joiden harvinaisuus on tätä prosenttiosuutta pienempi."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Tämän vaihtoehdon käyttöönotto<br>käynnistää Steamin uudelleen.</span><br>Piilota oletusarvoinen Steam ilmoitus,<br>kun saavutus avataan."
      customisett = "Mukauta Ilmoitusta"
      eyett = "Näytä/Piilota API Key"
      kofitt = "Lahjoita Ko-Fi!"
      trackopacitytt = "Asettaa \"Nyt Seuranta\" ilmoituksen läpinäkyvyyden."
      allpercenttt = "Saavutusprosentit näytetään myös<br>ei-harvinaisten ilmoitusten kohdalla."
      hwatt = "<div style='font-weight: bold; color: red'>*Sovellus käynnistyy uudelleen, kun se on valittuna</div><div style='color: white font-weight: normal'>Poistaa laitteistokiihdytyksen käytöstä ja mahdollistaa manuaalisen roskien keräämisen, mikä vähentää huomattavasti muistin käyttöä järjestelmissä, joissa käytetään integroitua/alempia grafiikkalaitteita."
      nvdatt = "<div style='font-weight: bold; color: red'>*Vaatii NVDA ClipReader-lisäosan</div><div style='color: white font-weight: normal'>Kopioi kaikki saavutustiedot leikepöydälle, jonka NVDA-ohjelmisto voi sitten lukea.</div>"
      iconanimtt = "Vaihtaa harvinaisen saavutuskuvakkeen kultaisen ääriviivan."
      gamecompletiontt = "Näyttää lisäilmoituksen, kun kaikki pelin saavutukset on avattu."
      ssoverlaytt = `Ottaa muun kuin Steam-kuvakaappauksen ja näyttää avatun saavutuksen yksityiskohdat. Nämä muut kuin Steam-kuvakaappaukset voidaan tallentaa tiettyyn hakemistoon "Polku"-vaihtoehdon avulla.`
      sserrortt = "<span style='color: red; font-weight: bold'>Kuvakaappausvaihtoehtoa ei ole asetettu!</span>"
   } else if (configtt.lang == "french") {
      usertt = "Nom d'Utilisateur Steam<br><div style='font-size: 6px'>Le suivi des succés est activé pour cet utilisateur</div>"
      gamett = "Affichage du Jeu<br><div style='font-size: 6px'>Affiche le nom du jeu actuellement suivi</div>"
      mainprevtt = "Aperçu du Son de Notification"
      rareprevtt = "Aperçu du Son de Notification Rare"
      maintabtt = "Sélectionnez le Son de Succés Normal"
      raretabtt = "Sélectionnez le Son de Succés Rare"
      selmaintt = "Sélectionnez le Son de Succés Normal"
      selrarett = "Sélectionnez le Son de Succés Rare"
      screenshottt = "Prend une capture d'écran et l'affiche dans la zone des notifications lorsqu'un succès est débloqué."
      shortcuttt = "Crée un raccourci Bureau pour exécuter Steam Achievement Notifier."
      startwintt = "Démarre automatiquement l'application au démarrage de Windows."
      startmintt = "Minimise l'application au démarrage."
      soundonlytt = "Masque toutes les notifications, mais joue les sons sélectionnés lors du déverrouillage des succès.<br><span style='font-size: 8px'>(\"Temps d'Affichage\" ne sera pas disponible lorsqu'il est activé)</span>"
      tracktt = "Affiche la notification \"Suivi des Succés\" lors du démarrage d'un jeu"
      displaytt = "Définit la durée d'affichage des notifications de succès.<br><span style='font-size: 8px'>(Non disponible si le \"Mode Audio Uniquement\" a été activé)</span>"
      updatett = "MISE À JOUR DISPONIBLE"
      discordtt = "Rejoignez-nous sur Discord!"
      githubtt = "Signaler un problème"
      resettt = "RÉINITIALISER"
      apilbltt = 'Cliquez ici pour obtenir votre clé API <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Cliquez ici pour obtenir votre Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Sauvegarder"
      keybindtt = "Cliquez sur le bouton pour commencer à écouter une pression sur une touche (\"...\"), puis appuyez sur la touche qui correspond à votre touche de capture d'écran dans Steam"

      raritytt = "Les sons/notifications \"Rares\" ne s'afficheront que pour les<br>réalisations dont la valeur de rareté est inférieure à ce pourcentage."
      nosteamtt = "<span style='color: red; font-weight: bold'>*L'activation de cette<br>option redémarrera Steam.</span><br>Masque la notification<br>Steam par défaut lors du<br>déverrouillage d'un succès."
      customisett = "Personnaliser la Notification de Succès"
      eyett = "Afficher/Masquer la clé API"
      kofitt = "Faites un don sur Ko-Fi !"
      trackopacitytt = "Définit l'opacité de la notification \"Suivi des Succés\"."
      allpercenttt = "Les pourcentages de réussite seront également<br>affichés pour les notifications non rares."
      hwatt = "<div style='font-weight: bold; color: red'>*L'application redémarrera une fois cochée</div><div style='color: white font-weight: normal'>Désactive l'accélération matérielle et active la récupération de place manuelle, ce qui réduit considérablement l'utilisation de la mémoire sur les systèmes utilisant du matériel graphique intégré/bas de gamme."
      nvdatt = "<div style='font-weight: bold; color: red'>*Nécessite l'extension NVDA ClipReader</div><div style='color: white font-weight: normal'>Copie toutes les informations sur les réalisations dans le presse-papiers, qui peuvent ensuite être lues par le logiciel NVDA.</div>"
      iconanimtt = "Bascule le contour doré sur l'icône de réalisation rare."
      gamecompletiontt = "Affiche une notification supplémentaire lorsque tous les succès d'un jeu ont été déverrouillés."
      ssoverlaytt = `Prend une capture d'écran non-Steam et superpose les détails de la réussite déverrouillée. Ces captures d'écran non Steam peuvent être enregistrées dans un répertoire spécifique à l'aide de l'option "Chemin".`
      sserrortt = "<span style='color: red; font-weight: bold'>Aucune option de capture d'écran activée!</span>"
   } else if (configtt.lang == "german") {
      usertt = "Steam Benutzername<br><div style='font-size: 6px'>Errungenschaften werden für diesen Benutzer nachverfolgt</div>"
      gamett = "Spielanzeige<br><div style='font-size: 6px'>Zeigt den Namen des aktuell verfolgten Spiels an</div>"
      mainprevtt = "Vorschau Des Haupttons"
      rareprevtt = "Vorschau Des Deltenen Tons"
      maintabtt = "Benachrichtigungston Für Errungenschafts Auswählen"
      raretabtt = "Benachrichtigungston Für Seltene Errungenschafts Auswählen"
      selmaintt = "Benachrichtigungston Für Normale Errungenschaft Auswählen"
      selrarett = "Benachrichtigungston Für Seltene Errungenschafts Auswählen"
      screenshottt = "Erstellt einen Screenshot und zeigt ihn in der Benachrichtigung an sobald eine Errungenschaft freigeschaltet wird."
      shortcuttt = "Erstellt eine Desktopverknüpfung um Steam Achievement Notifier auszuführen."
      startwintt = "Startet die Anwendung automatisch beim Start von Windows."
      startmintt = "Blendet das Anwendungsfenster beim Start aus."
      soundonlytt = "Blendet alle Benachrichtigungen aus, spielt aber ausgewählte Töne ab wenn Errungenschaften freigeschaltet werden.<br><span style='font-size: 8px'>(\"Anzeigezeit\" ist bei Aktivierung nicht verfügbar)</span>"
      tracktt = "Zeigt beim Starten eines Spiels die \"Spielbenachrichtigung\" an."
      displaytt = "Legt fest wie lange Errungenschaftsbenachrichtigungen angezeigt werden <br><span style='font-size: 8px'>(Nicht verfügbar wenn \"Nur Ton Abspielen\" aktiviert wurde)</span>"
      updatett = "UPDATE VERFÜGBAR"
      discordtt = "Trete Discord Bei!"
      githubtt = "Ein problem melden"
      resettt = "ZURÜCKSETZEN"
      apilbltt = 'Klicken Sie hier um Ihren API Key zu erhalten <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klicken Sie hier um Ihre Steam64ID zu erhalten <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Speichern"
      keybindtt = "Klicken Sie auf die Schaltfläche, um auf einen Tastendruck zu hören (\"...\"), und drücken Sie dann die Taste, die Ihrer Bildschirmfoto-Taste in Steam entspricht"

      raritytt = "\"Seltene\" Sounds/Benachrichtigungen werden nur für Errungenschafts<br>mit einem Seltenheitswert unter diesem Prozentsatz angezeigt."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Wenn Sie diese Option aktivieren,<br>wird Steam neu gestartet.</span><br>Blendet die standardmäßige Steam<br>Benachrichtigung beim freischalten<br>eines Errungenschafts aus."
      customisett = "Benachrichtigung Errungenschafts Anpassen"
      eyett = "API Key Anzeigen/Ausblenden"
      kofitt = "Spenden Sie auf Ko-Fi!"
      trackopacitytt = "Legt die Deckkraft der \"Spielbenachrichtigung\" fest."
      allpercenttt = "Erfolgsprozentsätze werden auch für<br>nicht seltene Benachrichtigungen angezeigt."
      hwatt = "<div style='font-weight: bold; color: red'>*Die Anwendung wird neu gestartet, wenn sie aktiviert ist</div><div style='color: white font-weight: normal'>Deaktiviert die Hardwarebeschleunigung und aktiviert die manuelle Garbage Collection, wodurch die Speichernutzung auf Systemen mit integrierter/unterwertiger Grafikhardware erheblich reduziert wird."
      nvdatt = "<div style='font-weight: bold; color: red'>*Erfordert das NVDA ClipReader-Addon</div><div style='color: white font-weight: normal'>Kopiert alle Leistungsinformationen in die Zwischenablage, die dann von der NVDA-Software gelesen werden können.</div>"
      iconanimtt = "Schaltet die goldene Umrandung des seltenen Erfolgssymbols um."
      gamecompletiontt = "Zeigt eine zusätzliche Benachrichtigung an, wenn alle Errungschafts in einem Spiel freigeschaltet wurden."
      ssoverlaytt = `Macht einen Nicht-Steam-Screenshot und blendet die Details des freigeschalteten Erfolgs ein. Diese Nicht-Steam-Screenshots können mit der Option "Pfad" in einem bestimmten Verzeichnis gespeichert werden.`
      sserrortt = "<span style='color: red; font-weight: bold'>Keine Bildschirmfoto-option aktiviert!</span>"
   } else if (configtt.lang == "greek") {
      usertt = "Όνομα χρήστη Steam<br><div style='font-size: 6px'>Τα επιτεύγματα παρακολουθούνται για αυτόν τον χρήστη</div>"
      gamett = "Εμφάνιση παιχνιδιού<br><div style='font-size: 6px'>Εμφανίζει το όνομα του παιχνιδιού που παρακολουθείται αυτήν τη στιγμή</div>"
      usertt = "Όνομα Χρήστη Steam<br><div style='font-size: 6px'>Τα επιτεύγματα παρακολουθούνται για αυτόν τον χρήστη</div>"
      gamett = "Τρέχον Παιχνίδι<br><div style='font-size: 6px'>Εμφανίζει το όνομα του παιχνιδιού που παρακολουθείται αυτήν τη στιγμή</div>"
      mainprevtt = "Κύρια Προεπισκόπηση Ήχου"
      rareprevtt = "Σπάνια Προεπισκόπηση Ήχου"
      maintabtt = "Επιλέξτε Ήχος Κύριου Επιτεύγματος"
      raretabtt = "Επιλέξτε Ήχος Σπάνιου Επιτεύγματος"
      selmaintt = "Επιλέξτε Ήχος Κύριου Επιτεύγματος"
      selrarett = "Επιλέξτε Ήχος Σπάνιου Επιτεύγματος"
      screenshottt = "Τραβάει ένα στιγμιότυπο οθόνης και το εμφανίζει στην ειδοποίηση όταν ξεκλειδώνεται ένα επίτευγμα."
      shortcuttt = "Δημιουργεί μια συντόμευση στο Desktop για την εκτέλεση του Steam Achievement Notifier."
      startwintt = "Εκκινεί αυτόματα την εφαρμογή κατά την εκκίνηση των Windows."
      startmintt = "Κρύβει το παράθυρο της εφαρμογής κατά την εκκίνηση."
      soundonlytt = "Αποκρύπτει όλες τις ειδοποιήσεις, αλλά αναπαράγει επιλεγμένους ήχους κατά το ξεκλείδωμα των επιτευγμάτων.<br><span style='font-size: 8px'>(Η \"Ώρα Εμφάνισης\" δεν θα είναι διαθέσιμη όταν ενεργοποιηθεί)</span>"
      tracktt = "Εμφανίζει την ειδοποίηση \"Τώρα Παρατηρώντας\" κατά την έναρξη ενός παιχνιδιού."
      displaytt = "Ορίζει το χρονικό διάστημα για το οποίο θα εμφανίζονται οι ειδοποιήσεις επιτευγμάτων <br><span style='font-size: 8px'>(Δεν είναι διαθέσιμο εάν η \"Λειτουργία μόνο ήχου\" έχει ενεργοποιηθεί)</span>"
      updatett = "ΔΙΑΘΕΣΙΜΕΣ ΕΝΗΜΕΡΩΣΕΙΣ"
      discordtt = "Εγγραφείτε στο Discord!"
      githubtt = "Αναφέρετε ένα πρόβλημα"
      resettt = "ΕΠΑΝΑΦΟΡΑ"
      apilbltt = 'Κάντε κλικ εδώ για να λάβετε το API Key σας <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Κάντε κλικ εδώ για να λάβετε το Steam64ID σας <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Σώσει"
      keybindtt = "Κάντε κλικ στο κουμπί για να ξεκινήσετε να ακούτε ένα πάτημα πλήκτρων (\"...\") και, στη συνέχεια, πατήστε το πλήκτρο που αντιστοιχεί στο πλήκτρο στιγμιότυπου οθόνης σας στο Steam"

      raritytt = "Οι ήχοι/ειδοποιήσεις \"Σπάνιοι\" θα εμφανίζονται μόνο για<br>επιτεύγματα με τιμή σπανιότητας κάτω από αυτό το ποσοστό."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Η ενεργοποίηση αυτής της επιλογής<br>θα επανεκκινήσει το Steam.</span><br>Αποκρύπτει την προεπιλεγμένη ειδοποίηση<br>Steam κατά το ξεκλείδωμα ενός επιτεύγματος."
      customisett = "Προσαρμογή Ειδοποίησης Επιτεύγματος"
      eyett = "Εμφάνιση/Απόκρυψη API Key"
      kofitt = "Κάντε δωρεά στο Ko-Fi!"
      trackopacitytt = "Ορίζει την αδιαφάνεια της ειδοποίησης \"Τώρα Παρατηρώντας\"."
      allpercenttt = "Τα ποσοστά επιτεύγματος θα εμφανίζονται<br>επίσης για μη σπάνιες ειδοποιήσεις."
      hwatt = "<div style='font-weight: bold; color: red'>*Η εφαρμογή θα επανεκκινήσει όταν επιλεγεί</div><div style='color: white font-weight: normal'>Απενεργοποιεί την επιτάχυνση υλικού και ενεργοποιεί τη μη αυτόματη συλλογή σκουπιδιών, η οποία μειώνει σημαντικά τη χρήση μνήμης σε συστήματα που χρησιμοποιούν ενσωματωμένο/κατώτερο υλικό γραφικών."
      nvdatt = "<div style='font-weight: bold; color: red'>*Απαιτείται πρόσθετο NVDA ClipReader</div><div style='color: white font-weight: normal'>Αντιγράφει όλες τις πληροφορίες επιτεύγματος στο πρόχειρο, το οποίο στη συνέχεια μπορεί να διαβαστεί από το λογισμικό NVDA.</div>"
      iconanimtt = "Εναλλάσσει το χρυσό περίγραμμα στο εικονίδιο σπάνιων επιτευγμάτων."
      gamecompletiontt = "Εμφανίζει μια πρόσθετη ειδοποίηση όταν όλα τα επιτεύγματα σε ένα παιχνίδι έχουν ξεκλειδωθεί."
      ssoverlaytt = `Λαμβάνει ένα στιγμιότυπο οθόνης εκτός Steam και επικαλύπτει τις λεπτομέρειες του ξεκλειδωμένου επιτεύγματος. Αυτά τα στιγμιότυπα οθόνης που δεν ανήκουν στο Steam μπορούν να αποθηκευτούν σε έναν συγκεκριμένο κατάλογο χρησιμοποιώντας την επιλογή "Μονοπάτι".`
      sserrortt = "<span style='color: red; font-weight: bold'>Η επιλογή Στιγμιότυπων δεν είναι ενεργοποιημένη!</span>"
   } else if (configtt.lang == "hungarian") {
      usertt = "Steam Felhasználónév<br><div style='font-size: 6px'>A felhasználó elért eredményeit nyomon követik</div>"
      gamett = "Játék Kijelző<br><div style='font-size: 6px'>Az éppen nyomon követett játék nevét mutatja</div>"
      mainprevtt = "Értesítési Hang Előnézete"
      rareprevtt = "Ritka Értesítési Hang Előnézete"
      maintabtt = "Válassza a Fő Értesítési Hang Lehetőséget"
      raretabtt = "Válassza a Ritka Értesítési Hang Lehetőséget"
      selmaintt = "Válassza a Fő Értesítési Hang Lehetőséget"
      selrarett = "Válassza a Ritka Értesítési Hang Lehetőséget"
      screenshottt = "Képernyőképet készít, és megjeleníti az értesítésben, amikor egy jutalom zárolását feloldják."
      shortcuttt = "Parancsikont hoz létre a Desktopon a Steam Achievement Notifier futtatásához."
      startwintt = "A Windows indításakor automatikusan elindítja az alkalmazást."
      startmintt = "Elrejti az alkalmazás ablakát indításkor."
      soundonlytt = "Elrejti az összes értesítést, de a jutalmak feloldásakor lejátssza a kiválasztott hangokat.<br><span style='font-size: 8px'>(\"Értesítési Idő\" nem lesz elérhető, ha engedélyezve van)</span>"
      tracktt = "Megjeleníti a \"Most Követési\" értesítést játék indításakor."
      displaytt = "Beállítja hogy mennyi ideig jelenjenek meg az értesítések <br><span style='font-size: 8px'>(Nem érhető el ha a \"Csak Hang Mód\" be van kapcsolva)</span>"
      updatett = "FRISSÍTÉS ELÉRHETŐ"
      discordtt = "Csatlakozz a Discordhoz!"
      githubtt = "Probléma bejelentése"
      resettt = "ÚJRAKEZD"
      apilbltt = 'Kattintson ide az API Key beszerzéséhez <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Kattintson ide a Steam64ID beszerzéséhez <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Megment"
      keybindtt = "Kattintson a gombra a gombnyomás meghallgatásához (\"...\"), majd nyomja meg azt a gombot, amely megfelel a Steamben lévő képernyőképednek"

      raritytt = "A \"Ritka\" hangok/értesítések csak azoknál az<br>eredményeknél jelennek meg, amelyek ritkasága<br>ez alatt a százalékos érték alatt van."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Ennek az opciónak a bekapcsolásával<br>újraindul a Steam.</span><br>Elrejti az alapértelmezett Steam<br>értesítést egy jutalom feloldásakor."
      customisett = "Értesítés Testreszabása"
      eyett = "API Key Megjelenítése/Elrejtése"
      kofitt = "Adományozz a Ko-Fi!"
      trackopacitytt = "Beállítja a \"Most Követési\" értesítés átlátszatlanságát."
      allpercenttt = "A teljesítmény százalékos aránya a<br>nem ritka értesítéseknél is megjelenik."
      hwatt = "<div style='font-weight: bold; color: red'>*Az alkalmazás újraindul, ha be van jelölve</div><div style='color: white font-weight: normal'>Letiltja a hardveres gyorsítást és lehetővé teszi a kézi szemétgyűjtést, ami nagymértékben csökkenti a memóriahasználatot az integrált/alacsonyabb kategóriás grafikus hardvert használó rendszereken."
      nvdatt = "<div style='font-weight: bold; color: red'>*NVDA ClipReader kiegészítő szükséges</div><div style='color: white font-weight: normal'>Az összes elért információt a vágólapra másolja, amelyet az NVDA szoftver elolvashat.</div>"
      iconanimtt = "Bekapcsolja az arany körvonalat a ritka jutalom ikonján."
      gamecompletiontt = "További értesítést jelenít meg, ha egy játékban az összes jutalmat feloldották."
      ssoverlaytt = `Nem Steam képernyőképet készít, és ráfedi a feloldott jutalom részleteit. Ezek a nem Steam képernyőképek egy adott könyvtárba menthetők az "Pálya" opció használatával.`
      sserrortt = "<span style='color: red; font-weight: bold'>Nincs engedélyezve a képernyőkép opció!</span>"
   } else if (configtt.lang == "italian") {
      usertt = "Nome Utente Di Steam<br><div style='font-size: 6px'>I risultati vengono monitorati per questo utente</div>"
      gamett = "Display Di Gioco<br><div style='font-size: 6px'>Mostra il nome del gioco attualmente monitorato</div>"
      mainprevtt = "Anteprima del Suono di Notifica Principale"
      rareprevtt = "Anteprima del Suono di Notifica Raro"
      maintabtt = "Seleziona il Suono di Notifica Principale"
      raretabtt = "Seleziona il Suono di Notifica Raro"
      selmaintt = "Seleziona il Suono di Notifica Principale"
      selrarett = "Seleziona il Suono di Notifica Raro"
      screenshottt = "Acquisisce uno screenshot e lo visualizza nella notifica quando viene sbloccato un obiettivo."
      shortcuttt = "Crea un collegamento sul Desktop per eseguire Steam Achievement Notifier."
      startwintt = "Avvia automaticamente l'applicazione all'avvio di Windows."
      startmintt = "Nasconde la finestra dell'applicazione all'avvio."
      soundonlytt = "Nasconde tutte le notifiche, ma riproduce i suoni selezionati quando si sbloccano gli obiettivi.<br><span style='font-size: 8px'>(\"Durata Della Notifica\" non sarà disponibile se abilitato)</span>"
      tracktt = "Mostra la notifica \"Ora Osservando\" all'avvio di un gioco."
      displaytt = "Imposta la durata della visualizzazione delle notifiche <br><span style='font-size: 8px'>(Non disponibile se è stata abilitata la \"Modalità Solo Audio\")</span>"
      updatett = "AGGIORNAMENTO DISPONIBILE"
      discordtt = "Unisciti a Discord!"
      githubtt = "Segnala un problema"
      resettt = "RIPRISTINA"
      apilbltt = 'Clicca qui per ottenere la tua APIKey <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Clicca qui per ottenere il tuo Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Salva"
      keybindtt = "Fai clic sul pulsante per iniziare ad ascoltare la pressione di un tasto (\"...\"), quindi premi il tasto che corrisponde alla chiave dello screenshot in Steam"

      raritytt = "Suoni/notifiche \"Rari\" verranno mostrati solo per traguardi<br>con un valore di rarità inferiore a questa percentuale."
      nosteamtt = "<span style='color: red; font-weight: bold'>*L'abilitazione di questa<br>opzione riavvierà Steam.</span><br>Nasconde la notifica predefinita di<br>Steam quando si sblocca un obiettivo."
      customisett = "Personalizza la Notifica"
      eyett = "Mostra/Nascondi API Key"
      kofitt = "Dona su Ko-Fi!"
      trackopacitytt = "Imposta l'opacità della notifica \"Ora Osservando\"."
      allpercenttt = "Le percentuali di raggiungimento verranno<br>mostrate anche per le notifiche non rare."
      hwatt = "<div style='font-weight: bold; color: red'>*L'applicazione si riavvierà una volta selezionata</div><div style='color: white font-weight: normal'>Disabilita l'accelerazione hardware e abilita la raccolta manuale dei dati inutili, che riduce notevolmente l'utilizzo della memoria sui sistemi che utilizzano hardware grafico integrato/di fascia bassa."
      nvdatt = "<div style='font-weight: bold; color: red'>*Richiede il componente aggiuntivo NVDA ClipReader</div><div style='color: white font-weight: normal'>Copia tutte le informazioni sui risultati negli appunti, che possono quindi essere lette dal software NVDA.</div>"
      iconanimtt = "Attiva o disattiva il contorno dorato sull'icona dell'obiettivo raro."
      gamecompletiontt = "Mostra una notifica aggiuntiva quando tutti gli obiettivi in ​​un gioco sono stati sbloccati."
      ssoverlaytt = `Acquisisce uno screenshot non di Steam e sovrappone i dettagli dell'obiettivo sbloccato. Questi screenshot non di Steam possono essere salvati in una directory specifica utilizzando l'opzione "Percorso".`
      sserrortt = "<span style='color: red; font-weight: bold'>Nessuna opzione screenshot abilitata!</span>"
   } else if (configtt.lang == "japanese") {
      usertt = "Steamユーザー名<br><div style='font-size: 6px'>このユーザーの実績は追跡されています</div>"
      gamett = "ゲームディスプレイ<br><div style='font-size: 6px'>現在追跡されているゲームの名前を表示します</div>"
      mainprevtt = "通知音のプレビュー"
      rareprevtt = "まれな通知音のプレビュー"
      maintabtt = "主な達成通知音を選択します"
      raretabtt = "レアアチーブメント通知音を選択"
      selmaintt = "メインアチーブメントサウンドを選択します"
      selrarett = "レアアチーブメントサウンドを選択"
      screenshottt = "スクリーンショットを撮り、アチーブメントのロックが解除されたときに通知に表示します。"
      shortcuttt = "DesktopにSteam Achievement Notifierを実行するためのショートカットを作成します。"
      startwintt = "Windowsの起動時にアプリケーションを自動的に起動します。"
      startmintt = "起動時にアプリケーションウィンドウを非表示にします。"
      soundonlytt = "すべての通知を非表示にしますが、実績がロック解除されると、選択したサウンドを再生します。<br><span style='font-size: 8px'>(「通知表示時間」が有効の場合は使用できません。)</span>"
      tracktt = "ゲーム開始時に「現在監視中」の通知が表示されます。"
      displaytt = "達成通知が表示される時間の長さを設定します <br><span style='font-size: 8px'>(「音声のみモード」が有効になっている場合は使用できません)</span>"
      updatett = "利用可能な更新"
      discordtt = "Discordに参加しましょう！"
      githubtt = "問題を報告する"
      resettt = "リセット"
      apilbltt = 'API Keyを取得するには、ここをクリックしてください <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Steam64IDを入手するには、ここをクリックしてください <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "保存する"
      keybindtt = "ボタンをクリックしてキープレス（\"...\"）のリッスンを開始し、Steamのスクリーンショットキーに対応するキーを押します"

      raritytt = "「レア」サウンド/通知は、レアリティ値がこのパーセ<br>ンテージを下回る実績に対してのみ表示されます。"
      nosteamtt = "<span style='color: red; font-weight: bold'>*このオプションを有効にすると、<br>Steamが再起動します。</span><br>アチーブメントのロックを解除するときに、<br>デフォルトのSteam通知を非表示にします。"
      customisett = "達成通知をカスタマイズする"
      eyett = "API Keyの表示/非表示"
      kofitt = "Ko-Fiに寄付してください！"
      trackopacitytt = "「現在監視中」通知の不透明度を設定します。"
      allpercenttt = "まれではない通知についても、達成率が表示されます。"
      hwatt = "<div style='font-weight: bold; color: red'>*チェックするとアプリケーションが再起動します</div><div style='color: white font-weight: normal'>ハードウェアアクセラレーションを無効にし、手動のガベージコレクションを有効にします。これにより、統合/ローエンドのグラフィックハードウェアを使用するシステムのメモリ使用量が大幅に削減されます。"
      nvdatt = "<div style='font-weight: bold; color: red'>*NVDAClipReaderアドオンが必要です</div><div style='color: white font-weight: normal'>すべての実績情報をクリップボードにコピーし、NVDAソフトウェアで読み取ることができます。</div>"
      iconanimtt = "レアアチーブメントアイコンのゴールドアウトラインを切り替えます。"
      gamecompletiontt = "ゲーム内のすべてのアチーブメントのロックが解除されたときに追加の通知を表示します。"
      ssoverlaytt = `Steamの外でスクリーンショットを撮り、ロック解除されたアチーブメントの詳細をオーバーレイします。これらの非Steamスクリーンショットは、「パス」オプションを使用して特定のディレクトリに保存できます。`
      sserrortt = "<span style='color: red; font-weight: bold'>スクリーンショットオプションが有効になっていません！</span>"
   } else if (configtt.lang == "korean") {
      usertt = "Steam 사용자 이름<br><div style='font-size: 6px'>이 사용자의 업적을 추적 중입니다.</div>"
      gamett = "게임 디스플레이<br><div style='font-size: 6px'>현재 추적 중인 게임의 이름을 표시합니다</div>"
      mainprevtt = "알림 소리 미리보기"
      rareprevtt = "희귀 알림 소리 미리보기"
      maintabtt = "주요 업적 알림음 선택"
      raretabtt = "희귀 업적 알림음 선택"
      selmaintt = "주요 업적 사운드 선택"
      selrarett = "희귀 업적 사운드 선택"
      screenshottt = "업적이 잠금 해제되면 스크린샷이 찍혀 알림에 표시됩니다."
      shortcuttt = "Steam Achievement Notifier를 실행하기 위해 Desktop에 바로 가기를 만듭니다."
      startwintt = "Windows가 시작될 때 자동으로 응용 프로그램을 시작합니다."
      startmintt = "시작 시 응용 프로그램 창을 숨깁니다."
      soundonlytt = "모든 알림을 숨기지만 업적을 잠금 해제할 때 선택한 소리를 재생합니다.<br><span style='font-size: 8px'>(활성화되면 \"알림 표시 시간\"을 사용할 수 없습니다.)</span>"
      tracktt = "게임을 시작할 때 \"현재 추적\" 알림을 표시합니다."
      displaytt = "업적 알림이 표시되는 시간을 설정합니다. <br><span style='font-size: 8px'>(\"사운드 전용 모드\"가 활성화된 경우 사용할 수 없음)</span>"
      updatett = "업데이트 가능"
      discordtt = "Discord에 가입하세요!"
      githubtt = "문제 신고"
      resettt = "다시 놓기"
      apilbltt = 'API Key를 받으려면 여기를 클릭하세요. <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Steam64ID를 받으려면 여기를 클릭하세요. <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "구하다"
      keybindtt = "버튼을 클릭하여 키 누르기(\"...\") 수신을 시작한 다음 Steam의 스크린샷 키에 해당하는 키를 누르십시오."

      raritytt = "\"희귀\" 소리/알림은 희귀도 값이 이 백분<br>율미만인업적에 대해서만 표시됩니다."
      nosteamtt = "<span style='color: red; font-weight: bold'>*이 옵션을 활성화하면 Steam 이 다시 시작됩니다.</span><br>업적을 잠금 해제할 때기본 Steam 알림을 숨깁니다."
      customisett = "업적 알림 사용자 지정"
      eyett = "API Key 표시/숨기기"
      kofitt = "Ko-Fi에서 기부하세요!"
      trackopacitytt = "\"지금 추적\" 알림의 불투명도를 설정합니다."
      allpercenttt = "희귀하지 않은 알림에 대한 성취도 백분율도 표시됩니다."
      hwatt = "<div style='font-weight: bold; color: red'>*선택하면 응용 프로그램이 다시 시작됩니다.</div><div style='color: white font-weight: normal'>하드웨어 가속을 비활성화하고 수동 가비지 수집을 활성화하여 통합/저급 그래픽 하드웨어를 사용하는 시스템의 메모리 사용량을 크게 줄입니다."
      nvdatt = "<div style='font-weight: bold; color: red'>*NVDA ClipReader 애드온 필요</div><div style='color: white font-weight: normal'>모든 업적 정보를 NVDA 소프트웨어에서 읽을 수 있는 클립보드에 복사합니다.</div>"
      iconanimtt = "희귀 업적 아이콘의 금색 윤곽선을 토글합니다."
      gamecompletiontt = "게임의 모든 업적이 잠금 해제되면 추가 알림을 표시합니다."
      ssoverlaytt = `Steam이 아닌 스크린샷을 찍고 잠금 해제된 업적의 세부 정보를 오버레이합니다. Steam이 아닌 스크린샷은 "경로" 옵션을 사용하여 특정 디렉토리에 저장할 수 있습니다.`
      sserrortt = "<span style='color: red; font-weight: bold'>활성화된 스크린샷 옵션이 없습니다!</span>"
   } else if (configtt.lang == "norwegian") {
      usertt = "Steam Brukernavn<br><div style='font-size: 6px'>Prestasjoner spores for denne brukeren</div>"
      gamett = "Nåværende Spill<br><div style='font-size: 6px'>Viser navnet på spillet som spores</div>"
      mainprevtt = "Forhåndsvis Varslingslyd"
      rareprevtt = "Forhåndsvis Sjelden Varslingslyd"
      selmaintt = "Velg Hovedvarsellyd"
      selrarett = "Velg Sjelden Varsellyd"
      screenshottt = "Tar et skjermbilde og viser det i varselet når en prestasjon låses opp."
      shortcuttt = "Oppretter en snarvei på Desktop for å kjøre Steam Achievement Notifier."
      startwintt = "Starter programmet automatisk når Windows starter."
      startmintt = "Skjuler programvinduet ved oppstart."
      soundonlytt = "Skjuler alle varsler, men spiller av valgte lyder når du låser opp prestasjoner.<br><span style='font-size: 8px'>(\"Varslingsvisningstid\" vil være utilgjengelig når den er aktivert)</span>"
      tracktt = "Viser \"Nå Sporing\"-varselet når du starter et spill."
      displaytt = "Angir hvor lang tid prestasjonvarsler skal vises for <br><span style='font-size: 8px'>(Ikke tilgjengelig hvis \"Kun Lydmodus\" er aktivert)</span>"
      updatett = "OPPDATERING TILGJENGELIG"
      discordtt = "Bli med på Discord!"
      githubtt = "Rapporter et problem"
      resettt = "NULLSTILLE"
      apilbltt = 'Klikk her for å få din API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klikk her for å få din Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Lagre"
      keybindtt = "Klikk på knappen for å begynne å lytte etter et tastetrykk (\"...\"), og trykk deretter på tasten som tilsvarer skjermbildetasten din i Steam"

      raritytt = "\"Sjeldne\" lyder/varsler vises kun for prestasjoner<br>med en sjeldenhetsverdi under denne prosentandelen."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Aktivering av dette alternativet<br>vil starte Steam på nytt.</span><br>Skjuler standard Steam-varsling<br>når du låser opp en prestasjon."
      customisett = "Tilpass Varsling"
      eyett = "Vis/skjul API Key"
      kofitt = "Doner på Ko-Fi!"
      trackopacitytt = "Angir opasiteten til \"Nå Sporing\" varselet."
      allpercenttt = "Prestasjonsprosent vil også<br>vises for ikke-sjeldne varsler.."
      hwatt = "<div style='font-weight: bold; color: red'>*Applikasjonen starter på nytt når det er merket av</div><div style='color: white font-weight: normal'>Deaktiverer maskinvareakselerasjon og muliggjør manuell søppelinnsamling, noe som i stor grad reduserer minnebruken på systemer som bruker integrert/lavere grafisk maskinvare."
      nvdatt = "<div style='font-weight: bold; color: red'>*Krever NVDA ClipReader-tillegg</div><div style='color: white font-weight: normal'>Kopierer all prestasjonsinformasjon til utklippstavlen, som deretter kan leses av NVDA-programvaren.</div>"
      iconanimtt = "Bytter gullomrisset på det sjeldne prestasjonsikonet."
      gamecompletiontt = "Viser et ekstra varsel når alle prestasjoner i et spill har blitt låst opp."
      ssoverlaytt = `Tar et ikke-Steam-skjermbilde og legger over detaljene for den ulåste prestasjonen. Disse ikke-Steam-skjermbildene kan lagres i en spesifikk katalog ved å bruke "Sti"-alternativet.`
      sserrortt = "<span style='color: red; font-weight: bold'>Ingen skjermdumper er aktivert!</span>"
   } else if (configtt.lang == "polish") {
      usertt = "Nazwa Użytkownika Steam<br><div style='font-size: 6px'>Osiągnięcia tego użytkownika są śledzone</div>"
      gamett = "Wyświetlacz Gry<br><div style='font-size: 6px'>Pokazuje nazwę aktualnie śledzonej gry</div>"
      mainprevtt = "Podgląd Dźwięku Powiadomienia"
      rareprevtt = "Rzadki Dźwięk Powiadomienia Podgląd"
      maintabtt = "Wybierz Główny Dźwięk Powiadomienia"
      raretabtt = "Wybierz Rzadki Dźwięk Powiadomienia"
      selmaintt = "Wybierz Główny Dźwięk Powiadomienia"
      selrarett = "Wybierz Rzadki Dźwięk Powiadomienia"
      screenshottt = "Wykonuje zrzut ekranu i wyświetla go w powiadomieniu po odblokowaniu osiągnięcia."
      shortcuttt = "Tworzy skrót w pulpicie aby uruchomić Steam Achievement Notifier."
      startwintt = "Automatycznie uruchamia aplikację podczas uruchamiania systemu Windows."
      startmintt = "Ukrywa okno aplikacji podczas uruchamiania."
      soundonlytt = "Ukrywa wszystkie powiadomienia, ale odtwarza wybrane dźwięki podczas odblokowywania osiągnięć."
      tracktt = "Wyświetla powiadomienie \"Śledzące\" po uruchomieniu gry."
      displaytt = "Ustawia czas wyświetlania powiadomień o osiągnięciach <br><span style='font-size: 8px'>(Niedostępne jeśli włączony został „Tryb Tylko Dźwięk”)</span>"
      updatett = "DOSTĘPNA AKTUALIZACJA"
      discordtt = "Dołącz na Discord!"
      githubtt = "Zgłoś problem"
      resettt = "RESETOWANIE"
      apilbltt = 'Kliknij tutaj aby uzyskać API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Kliknij tutaj aby uzyskać Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Zapisać"
      keybindtt = "Kliknij przycisk, aby rozpocząć nasłuchiwanie naciśnięcia klawisza (\"...\"), a następnie naciśnij klawisz odpowiadający klawiszowi zrzutu ekranu w Steam"

      raritytt = "\"Rzadkie\" dźwięki/powiadomienia będą wyświetlane tylko w przypadku<br>osiągnięć o wartości rzadkości poniżej wartości procentowej."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Włączenie tej opcji spowoduje<br>ponowne uruchomienie Steam.</span><br>Ukrywa domyślne powiadomienie Steam<br>w trakcie odblokowania osiągnięcia."
      customisett = "Dostosuj Powiadomienie Osiągnięć"
      eyett = "Pokaż/Ukryj klucz API"
      kofitt = "Przekaż darowiznę na Ko-Fi!"
      trackopacitytt = "Ustawia przezroczystość powiadomienia \"Śledzące\"."
      allpercenttt = "Procenty osiągnięć będą również wyświetlane<br>w przypadku powiadomień, które nie są rzadkie."
      hwatt = "<div style='font-weight: bold; color: red'>*Po zaznaczeniu aplikacja uruchomi się ponownie</div><div style='color: white font-weight: normal'>Wyłącza przyspieszenie sprzętowe i umożliwia ręczne usuwanie elementów bezużytecznych, co znacznie zmniejsza zużycie pamięci w systemach korzystających ze zintegrowanego/niższej klasy sprzętu graficznego."
      nvdatt = "<div style='font-weight: bold; color: red'>*Wymaga dodatku NVDA ClipReader</div><div style='color: white font-weight: normal'>Kopiuje wszystkie informacje o osiągnięciach do schowka, które mogą być następnie odczytane przez oprogramowanie NVDA.</div>"
      iconanimtt = "Przełącza złoty kontur na ikonie rzadkiego osiągnięcia."
      gamecompletiontt = "Wyświetla dodatkowe powiadomienie, gdy wszystkie osiągnięcia w grze zostaną odblokowane."
      ssoverlaytt = `Wykonuje zrzut ekranu spoza Steam i nakłada szczegóły odblokowanego osiągnięcia. Te zrzuty ekranu spoza Steam można zapisać w określonym katalogu za pomocą opcji "Ścieżka".`
      sserrortt = "<span style='color: red; font-weight: bold'>Brak włączonej opcji zrzutu ekranu!</span>"
   } else if (configtt.lang == "portuguese") {
      usertt = "Nome de Usuário do Steam<br><div style='font-size: 6px'>Conquistas estão sendo rastreadas para este usuário</div>"
      gamett = "Exibição Do Jogo<br><div style='font-size: 6px'>Mostra o nome do jogo que está sendo monitorado</div>"
      mainprevtt = "Antevisão do Som de Notificação Principal"
      rareprevtt = "Antevisão do Som de Notificação Rara"
      maintabtt = "Selecione Som de Notificação Principal"
      raretabtt = "Selecione Som de Notificação Raro"
      selmaintt = "Selecione Som de Notificação Principal"
      selrarett = "Selecione Som de Notificação Raro"
      screenshottt = "Tira uma captura de tela e a exibe na notificação quando uma conquista é desbloqueada."
      shortcuttt = "Cria um atalho no Desktop para executar o Steam Achievement Notifier."
      startwintt = "Inicia automaticamente o aplicativo quando o Windows é iniciado."
      startmintt = "Oculta a janela do aplicativo na inicialização."
      soundonlytt = "Oculta todas as notificações, mas reproduz sons selecionados ao desbloquear conquistas.<br><span style='font-size: 8px'>(\"Tempo de Exibição\" estará indisponível quando habilitada)</span>"
      tracktt = "Mostra a notificação \"Agora Rastreando\" ao iniciar um jogo."
      displaytt = "Define por quanto tempo as notificações de conquistas serão exibidas para <br><span style='font-size: 8px'>(Não disponível se o \"Modo Apenas Som\" estiver habilitado)</span>"
      updatett = "ATUALIZAÇÃO DISPONÍVEL"
      discordtt = "Junte-se ao Discord!"
      githubtt = "Reportar um problema"
      resettt = "REDEFINIR"
      apilbltt = 'Clique aqui para obter sua API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Clique aqui para obter seu Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Salvar"
      keybindtt = "Clique no botão para começar a ouvir um pressionamento de tecla (\"...\") e pressione a tecla que corresponde à sua tecla de captura de tela no Steam"

      raritytt = "Os sons/notificações \"Raros\" serão exibidos apenas para<br>conquistas com um valor de raridade abaixo dessa porcentagem."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Ativar esta opção irá reiniciar o Steam.</span><br>Oculta a notificação padrão do<br>Steam ao desbloquear uma conquista."
      customisett = "Personalizar Notificação de Conquista"
      eyett = "Mostrar/ocultar API Key"
      kofitt = "Doe no Ko-Fi!"
      trackopacitytt = "Define a opacidade da notificação \"Agora Rastreando\"."
      allpercenttt = "As porcentagens de conquista também serão<br>mostradas para notificações não raras."
      hwatt = "<div style='font-weight: bold; color: red'>*O aplicativo será reiniciado quando marcado</div><div style='color: white font-weight: normal'>Desativa a aceleração de hardware e permite a coleta de lixo manual, o que reduz bastante o uso de memória em sistemas que usam hardware gráfico integrado/de baixo custo."
      nvdatt = "<div style='font-weight: bold; color: red'>*Requer o complemento NVDA ClipReader</div><div style='color: white font-weight: normal'>Copia todas as informações de conquistas para a área de transferência, que pode ser lida pelo software NVDA.</div>"
      iconanimtt = "Alterna o contorno dourado no ícone de conquista rara."
      gamecompletiontt = "Mostra uma notificação adicional quando todas as conquistas de um jogo foram desbloqueadas."
      ssoverlaytt = `Faz uma captura de tela não Steam e sobrepõe os detalhes da conquista desbloqueada. Essas capturas de tela que não são do Steam podem ser salvas em um diretório específico usando a opção "Caminho".`
      sserrortt = "<span style='color: red; font-weight: bold'>Nenhuma opção de captura de tela ativada!</span>"
   } else if (configtt.lang == "brazilian") {
      usertt = "Nome de usuário Steam<br><div style='font-size: 6px'>As conquistas estão sendo rastreadas para este usuário</div>"
      gamett = "Mostrador do Jogo<br><div style='font-size: 6px'>Mostra o nome do jogo que está sendo rastreado atualmente</div>"
      mainprevtt = "Som de Notificação Principal"
      rareprevtt = "Som de Notificação Raro"
      maintabtt = "Selecione Som de Notificação Principal"
      raretabtt = "Selecione Som de Notificação Raro"
      selmaintt = "Selecione Som de Notificação Principal"
      selrarett = "Selecione Som de Notificação Raro"
      screenshottt = "Tira uma foto da tela e a exibe na notificação quando uma conquista é desbloqueada."
      shortcuttt = "Cria um atalho na área de trabalho<br>para executar o Steam Achievement Notifier."
      startwintt = "Automaticamente inicia a aplicação<br>quando o Windows é iniciado."
      startmintt = "Oculta a janela de aplicação na inicialização."
      soundonlytt = "Ele esconde todas as notificações, mas toca sons selecionados ao desbloquear conquistas."
      tracktt = "Mostra a notificação de \"Agora Rastreando\" quando se inicia um jogo."
      displaytt = "Define o período de tempo de conquistas<br>notificações serão exibidas para <br><span style='font-size: 8px'>(Não disponível se o \"Modo só Som\" tiver sido ativado)</span>"
      updatett = "ATUALIZAÇÃO DISPONÍVEL"
      kofitt = "Faça uma doação na Ko-Fi!"
      discordtt = "Participe da Discord!"
      githubtt = "Relatar um problema"
      resettt = "REINICIAR"
      apilbltt = 'Clique aqui para obter sua Chave API <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Clique aqui para obter seu Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Salvar"
      keybindtt = "Clique no botão para começar a ouvir uma tecla (\"...\"), depois pressione a tecla que corresponde à sua tecla de captura de tela em Steam."

      raritytt = "\"Raros\" sons/notificações só se mostrarão para conquistas com um valor de raridade abaixo deste percentual."
      nosteamtt = "<span style='color: red; font-weight: bold'>*A ativação desta opção reiniciará o Steam.</span><br>Esconde a notificação de vapor padrão<br>quando se desbloqueia uma conquista."
      customisett = "Notificação de Conquista Personalizada"
      eyett = "Mostrar/ocultar Chave API"
      kofitt = "Faça uma doação em Ko-Fi!"
      trackopacitytt = "Define a opacidade da notificação do \"Agora Rastreamento\"."
      allpercenttt = "As porcentagens de conquista também serão mostradas para notificações não raras."
      hwatt = "<div style='font-weight: bold; color: red'>*Aplicação será reiniciada quando verificada</div><div style='color: white font-weight: normal'>Desativa a aceleração do hardware e permite a coleta manual de lixo, o que reduz muito o uso de memória em sistemas que utilizam hardware gráfico integrado/baixo."
      nvdatt = "<div style='font-weight: bold; color: red'>*Requere-se um addon NVDA ClipReader</div><div style='color: white font-weight: normal'>Copia todas as informações de realização para a prancheta, que pode então ser lida pelo software NVDA Screen Reader.</div>"
      iconanimtt = "Alterna o contorno dourado sobre o raro ícone de conquista."
      gamecompletiontt = "Mostra uma notificação adicional quando todas as conquistas em um jogo foram desbloqueadas."
      ssoverlaytt = `Tira uma foto de tela não-Steam e sobrepõe os detalhes da conquista desbloqueada. Estas capturas de tela não-Steam podem ser salvas em um diretório específico usando a opção "Caminho".`
      sserrortt = "<span style='color: red; font-weight: bold'>Nenhuma opção de captura de tela ativada!</span>"
   } else if (configtt.lang == "romanian") {
      usertt = "Nume de Utilizator Steam<br><div style='font-size: 6px'>Realizările sunt urmărite pentru acest utilizator</div>"
      gamett = "Afișarea Jocului<br><div style='font-size: 6px'>Afișează numele jocului care este urmărit în prezent</div>"
      mainprevtt = "Previzualizare Sunet de Notificare"
      rareprevtt = "Previzualizare Sunet de Notificare Rar"
      maintabtt = "Selectați Sunet de Notificare Principal"
      raretabtt = "Selectați Sunet de Notificare Rar"
      selmaintt = "Selectați Sunet de Notificare Principal"
      selrarett = "Selectați Sunet de Notificare Rar"
      screenshottt = "Face o captură de ecran și o afișează în notificare când o realizare este deblocată."
      shortcuttt = "Creează o comandă rapidă pe Desktop pentru a rula Steam Achievement Notifier."
      startwintt = "Pornește automat aplicația când Windows pornește."
      startmintt = "Ascunde fereastra aplicației la pornire."
      soundonlytt = "Ascunde toate notificările, dar redă sunete selectate la deblocarea realizărilor.<br><span style='font-size: 8px'>(„Ora de Afișare” nu va fi disponibil când este activat)</span>"
      tracktt = "Afișează notificarea „Urmărire” când porniți un joc."
      displaytt = "Setează durata de timp în care vor fi afișate notificările <br><span style='font-size: 8px'>(Nu este disponibil dacă „Modul Numai Sunet” a fost activat)</span>"
      updatett = "ACTUALIZARE DISPONIBILA"
      discordtt = "Alătură-te Discord!"
      githubtt = "Raportează o problemă"
      resettt = "RESET"
      apilbltt = 'Faceți clic aici pentru a obține API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Faceți clic aici pentru a obține Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Salva"
      keybindtt = "Faceți clic pe butonul pentru a începe să ascultați apăsarea unei taste (\"...\"), apoi apăsați tasta care corespunde tastei capturii de ecran din Steam"

      raritytt = "Sunetele/notificările „Rare” vor apărea numai pentru<br>realizările cu o valoare a rarității sub acest procent."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Activarea acestei opțiuni<br>va reporni Steam.</span><br>Ascunde notificarea implicită<br>Steam la deblocarea unei realizări."
      customisett = "Personalizați Notificarea"
      eyett = "Afișați/Ascundeți API Key"
      kofitt = "Donează pe Ko-Fi!"
      trackopacitytt = "Setează opacitatea notificării „Urmărire”."
      allpercenttt = "Procentele de realizare vor fi afișate și<br>pentru notificările care nu sunt rare."
      hwatt = "<div style='font-weight: bold; color: red'>*Aplicația va reporni când este bifată</div><div style='color: white font-weight: normal'>Dezactivează accelerarea hardware și activează colectarea manuală a gunoiului, ceea ce reduce considerabil utilizarea memoriei pe sistemele care utilizează hardware grafic integrat/de gamă inferioară."
      nvdatt = "<div style='font-weight: bold; color: red'>*Necesită suplimentul NVDA ClipReader</div><div style='color: white font-weight: normal'>Copiază toate informațiile despre realizare în clipboard, care pot fi apoi citite de software-ul NVDA.</div>"
      iconanimtt = "Comută conturul auriu pe pictograma realizarii rare."
      gamecompletiontt = "Afișează o notificare suplimentară când toate realizările dintr-un joc au fost deblocate."
      ssoverlaytt = `Face o captură de ecran non-Steam și suprapune detaliile realizării deblocate. Aceste capturi de ecran non-Steam pot fi salvate într-un anumit director folosind opțiunea "Cale".`
      sserrortt = "<span style='color: red; font-weight: bold'>Nicio opțiune de captură de ecran activată!</span>"
   } else if (configtt.lang == "russian") {
      usertt = "Имя пользователя Steam<br><div style='font-size: 6px'>Достижения этого пользователя отслеживаются</div>"
      gamett = "Дисплей Игры<br><div style='font-size: 6px'>Показывает название отслеживаемой в данный момент игры</div>"
      mainprevtt = "Прослушивание Звука Уведомления"
      rareprevtt = "Прослушивание Звука Редкого Достижения"
      maintabtt = "Выберите Основной Звук Уведомления"
      raretabtt = "Выберите Pедкий Звук Уведомления"
      selmaintt = "Выберите Основной Звук Уведомления"
      selrarett = "Выберите Звук Редкого Достижения"
      screenshottt = "Делает снимок экрана и отображает его в уведомлении, когда достижение разблокировано."
      shortcuttt = "Создает ярлык для Desktop для запуска Steam Achievement Notifier."
      startwintt = "Автоматически запускает приложение при запуске Windows."
      startmintt = "Скрывает окно приложения при запуске."
      soundonlytt = "Скрывает все уведомления, но воспроизводит выбранные звуки при разблокировке достижений.<br><span style='font-size: 8px'>(\"Время отображения\" будет недоступно, если включено)</span>"
      tracktt = "Показывает уведомление \"Сейчас Oтслеживается\" при запуске игры."
      displaytt = "Устанавливает продолжительность отображения уведомлений о достижениях <br><span style='font-size: 8px'>(Недоступно если включен \"Режим Только Звук\")</span>"
      updatett = "ДОСТУПНО ОБНОВЛЕНИЕ"
      discordtt = "Присоединяйтесь к Discord!"
      githubtt = "Сообщить о проблеме"
      resettt = "СБРОС"
      apilbltt = 'Нажмите здесь чтобы получить свой API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Нажмите здесь чтобы получить свой Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Сохранить"
      keybindtt = "Нажмите кнопку, чтобы начать прослушивание нажатия клавиши (\"...\"), затем нажмите клавишу, соответствующую клавише вашего скриншота в Steam."

      raritytt = "\"Редкие\" звуки/уведомления будут отображаться только<br>для достижений со значением редкости ниже этого процента."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Включение этой опции приведет к перезапуску Steam.</span><br>Скрывает уведомление Steam по умолчанию<br>при разблокировке достижения."
      customisett = "Настроить Уведомление О Достижении"
      eyett = "Показать/скрыть API Key"
      kofitt = "Пожертвовать Ko-Fi!"
      trackopacitytt = "Устанавливает непрозрачность уведомления \"Сейчас Отслеживается\"."
      allpercenttt = "Проценты достижений также будут<br>показаны для нередких уведомлений."
      hwatt = "<div style='font-weight: bold; color: red'>*Приложение перезапустится при проверке</div><div style='color: white font-weight: normal'>Отключает аппаратное ускорение и включает ручную сборку мусора, что значительно снижает использование памяти в системах, использующих встроенное/младшее графическое оборудование."
      nvdatt = "<div style='font-weight: bold; color: red'>*Требуется дополнение NVDA ClipReader</div><div style='color: white font-weight: normal'>Копирует всю информацию о достижениях в буфер обмена, который затем может быть прочитан программным обеспечением NVDA.</div>"
      iconanimtt = "Переключает золотой контур на значке редкого достижения."
      gamecompletiontt = "Показывает дополнительное уведомление, когда все достижения в игре разблокированы."
      ssoverlaytt = `Делает снимок экрана не из Steam и накладывает детали разблокированного достижения. Эти сторонние скриншоты можно сохранить в определенном каталоге с помощью параметра "Путь".`
      sserrortt = "<span style='color: red; font-weight: bold'>Опция скриншота не включена!</span>"
   } else if (configtt.lang == "spanish") {
      usertt = "Nombre de Usuario de Steam<br><div style='font-size: 6px'>Se está realizando un seguimiento de los logros de este usuario</div>"
      gamett = "Juego Actual<br><div style='font-size: 6px'>Muestra el nombre del juego que se está rastreando actualmente</div>"
      mainprevtt = "Vista Previa Del Sonido de Notificación"
      rareprevtt = "Vista Previa Del Sonido de Notificación Raro"
      maintabtt = "Seleccionar Sonido de Notificación Principal"
      raretabtt = "Seleccionar Sonido de Notificación Raro"
      selmaintt = "Seleccionar Sonido de Notificación Principal"
      selrarett = "Seleccionar Sonido de Notificación Raro"
      screenshottt = "Toma una captura de pantalla y la muestra en la notificación cuando se desbloquea un logro."
      shortcuttt = "Crea un acceso directo en el Desktop para ejecutar Steam Achievement Notifier."
      startwintt = "Inicia automáticamente la aplicación cuando se inicia Windows."
      startmintt = "Oculta la ventana de la aplicación al inicio."
      soundonlytt = "Oculta todas las notificaciones, pero reproduce sonidos seleccionados al desbloquear logros.<br><span style='font-size: 8px'>(\"Tiempo de Visualización\" no estará disponible cuando esté habilitado)</span>"
      tracktt = "Muestra la notificación \"Ahora Observando\" al iniciar un juego."
      displaytt = "Establece la cantidad de tiempo que se mostrarán las notificaciones de logros. <br><span style='font-size: 8px'>(No disponible si se ha habilitado el \"Modo Solo Sonido\")</span>"
      updatett = "ACTUALIZACIÓN DISPONIBLE"
      discordtt = "¡Únete a Discord!"
      githubtt = "Reportar un problema"
      resettt = "REINICIAR"
      apilbltt = 'Haga clic aquí para obtener su API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Haga clic aquí para obtener su Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Salvar"
      keybindtt = "Haga clic en el botón para comenzar a escuchar una pulsación de tecla (\"...\"), luego presione la tecla que corresponde a su tecla de captura de pantalla en Steam"

      raritytt = "Los sonidos/notificaciones \"Raros\" solo se mostrarán para logros<br>con un valor de rareza por debajo de este porcentaje."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Habilitar esta opción reiniciará Steam.</span><br>Oculta la notificación de Steam<br>predeterminada al desbloquear un logro."
      customisett = "Personalizar Notificación"
      eyett = "Mostrar/Ocultar API Key"
      kofitt = "¡Dona en Ko-Fi!"
      trackopacitytt = "Establece la opacidad de la notificación \"Ahora Observando\"."
      allpercenttt = "Los porcentajes de logros también se<br>mostrarán para notificaciones no raras."
      hwatt = "<div style='font-weight: bold; color: red'>*La aplicación se reiniciará cuando esté marcada</div><div style='color: white font-weight: normal'>Deshabilita la aceleración de hardware y habilita la recolección manual de elementos no utilizados, lo que reduce en gran medida el uso de memoria en los sistemas que utilizan hardware de gráficos integrado/de gama baja."
      nvdatt = "<div style='font-weight: bold; color: red'>*Requiere el complemento NVDA ClipReader</div><div style='color: white font-weight: normal'>Copia toda la información de logros en el portapapeles, que luego puede ser leído por el software NVDA.</div>"
      iconanimtt = "Alterna el contorno dorado en el ícono de logro raro."
      gamecompletiontt = "Muestra una notificación adicional cuando se han desbloqueado todos los logros de un juego."
      ssoverlaytt = `Toma una captura de pantalla que no es de Steam y superpone los detalles del logro desbloqueado. Estas capturas de pantalla que no son de Steam se pueden guardar en un directorio específico usando la opción "Ruta".`
      sserrortt = "<span style='color: red; font-weight: bold'>¡No hay opción de captura de pantalla habilitada!</span>"
   } else if (configtt.lang == "swedish") {
      usertt = "Användarnamn För Steam<br><div style='font-size: 6px'>Prestationer spåras för denna användare</div>"
      gamett = "Aktuellt Spel<br><div style='font-size: 6px'>Visar namnet på spelet som för närvarande spåras</div>"
      mainprevtt = "Förhandsgranska Huvudaviseringsljud"
      rareprevtt = "Förhandsgranska Sällsyntaviseringsljud"
      maintabtt = "Välj Huvudaviseringsljud"
      raretabtt = "Välj Sällsyntaviseringsljud"
      selmaintt = "Välj Huvudaviseringsljud"
      selrarett = "Välj Sällsyntaviseringsljud"
      screenshottt = "Tar en skärmdump och visar den i aviseringen när en prestation låses upp."
      shortcuttt = "Skapar en genväg på Desktop för att köra Steam Achievement Notifier."
      startwintt = "Startar automatiskt programmet när Windows startar."
      startmintt = "Döljer programfönstret vid start."
      soundonlytt = "Döljer alla aviseringar, men spelar valda ljud när prestationer låses upp.<br><span style='font-size: 8px'>(\"Aviseringstid\" kommer att vara otillgänglig när den är aktiverad)</span>"
      tracktt = "Visar aviseringen \"Nu Spårning\" när ett spel startas."
      displaytt = "Ställer in hur lång tid prestationsaviseringar ska visas under <br><span style='font-size: 8px'>(Inte tillgängligt om \"Endast Ljudläge\" har aktiverats)</span>"
      updatett = "UPPDATERING TILLGÄNGLIG"
      discordtt = "Gå med i Discord!"
      githubtt = "Rapportera ett problem"
      resettt = "ÅTERSTÄLLA"
      apilbltt = 'Klicka här för att få din API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Klicka här för att få ditt Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Spara"
      keybindtt = "Klicka på knappen för att börja lyssna efter en knapptryckning (\"...\"), tryck sedan på tangenten som motsvarar din skärmdump-nyckel i Steam"

      raritytt = "\"Sällsynta\" ljud/aviseringar visas endast för prestationer<br>med ett sällsynthetsvärde under denna procentandel."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Om du aktiverar det här<br>alternativet startas Steam om.</span><br>Döljer Steam standardaviseringen<br>när en prestation låses upp."
      customisett = "Anpassa Avisering"
      eyett = "Visa/Dölj API Key"
      kofitt = "Donera på Ko-Fi!"
      trackopacitytt = "Ställer in opaciteten för aviseringen \"Nu Spårning\"."
      allpercenttt = "Prestationsprocent kommer också att<br>visas för icke-sällsynta meddelanden."
      hwatt = "<div style='font-weight: bold; color: red'>*Applikationen startar om när det är markerat</div><div style='color: white font-weight: normal'>Inaktiverar hårdvaruacceleration och möjliggör manuell sophämtning, vilket avsevärt minskar minnesanvändningen på system som använder integrerad/lägre grafikhårdvara."
      nvdatt = "<div style='font-weight: bold; color: red'>*Kräver NVDA ClipReader-tillägg</div><div style='color: white font-weight: normal'>Kopierar all prestationsinformation till klippbordet, som sedan kan läsas av NVDA-programvaran.</div>"
      iconanimtt = "Växlar guldkonturen på den sällsynta prestationsikonen."
      gamecompletiontt = "Visar ytterligare ett meddelande när alla prestationer i ett spel har låsts upp."
      ssoverlaytt = `Tar en skärmdump som inte är Steam och lägger över detaljerna om den upplåsta prestationen. Dessa skärmdumpar som inte är Steam kan sparas i en specifik katalog med alternativet "Väg".`
      sserrortt = "<span style='color: red; font-weight: bold'>Inget alternativ för skärmdump är aktiverat!</span>"
   } else if (configtt.lang == "thai") {
      usertt = "ชื่อผู้ใช้ Steam<br><div style='font-size: 6px'>กำลังติดตามความสำเร็จสำหรับผู้ใช้รายนี้</div>"
      gamett = "เกมปัจจุบัน<br><div style='font-size: 6px'>แสดงชื่อเกมที่กำลังติดตาม</div>"
      mainprevtt = "ดูตัวอย่างเสียงแจ้งเตือน"
      rareprevtt = "ดูตัวอย่างเสียงแจ้งเตือนที่หายาก"
      maintabtt = "เลือกเสียงแจ้งเตือนหลัก"
      raretabtt = "เลือกเสียงแจ้งเตือนที่หายาก"
      selmaintt = "เลือกเสียงแจ้งเตือนหลัก"
      selrarett = "เลือกเสียงแจ้งเตือนที่หายาก"
      screenshottt = "จับภาพหน้าจอและแสดงในการแจ้งเตือนเมื่อมีการปลดล็อกรางวัลพิเศษ"
      shortcuttt = "สร้างทางลัดบน Desktop เพื่อเรียกใช้ Steam Achievement Notifier"
      startwintt = "เริ่มแอปพลิเคชันนี้โดยอัตโนมัติเมื่อ Windows เริ่มทำงาน"
      startmintt = "ซ่อนหน้าต่างแอปพลิเคชันเมื่อเริ่มต้น"
      soundonlytt = "ซ่อนการแจ้งเตือนทั้งหมด แต่เล่นเสียงที่เลือกเมื่อปลดล็อกรางวัลพิเศษ <br><span style='font-size: 8px'>(\"เวลาแสดงการแจ้งเตือน\" จะไม่สามารถใช้ได้เมื่อเปิดใช้งาน)</span>"
      tracktt = "แสดงการแจ้งเตือน \"กำลังติดตาม\" เมื่อเริ่มเกม"
      displaytt = "ตั้งค่าระยะเวลาที่จะแสดงการแจ้งเตือนความสำเร็จสำหรับ <br><span style='font-size: 8px'>(ไม่สามารถใช้ได้หากเปิดใช้งาน \"โหมดเสียงเท่านั้น\" ไว้)</span>"
      updatett = "อัปเดตพร้อมใช้งาน"
      discordtt = "เข้าร่วม Discord!"
      githubtt = "รายงานปัญหา"
      resettt = "รีเซ็ต"
      apilbltt = 'คลิกที่นี่เพื่อรับ APIKey ของคุณ <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'คลิกที่นี่เพื่อรับ Steam64ID ของคุณ <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "บันทึก"
      keybindtt = "คลิกปุ่มเพื่อเริ่มฟังการกดปุ่ม (\"...\") จากนั้นกดปุ่มที่ตรงกับปุ่มภาพหน้าจอของคุณใน Steam"

      raritytt = "เสียง/การแจ้งเตือน \"หายาก\" จะแสดงเฉพาะสำหรับ<br>ความสำเร็จที่มีค่าความหายากต่ำกว่าเปอร์เซ็นต์นี้"
      nosteamtt = "<span style='color: red; font-weight: bold'>*การเปิดใช้งานตัวเลือกนี้จะเป็นการรีสตาร์ท Steam</span><br>ซ่อนการแจ้งเตือน Steam เริ่มต้นเมื่อปลดล็อกรางวัลพิเศษ"
      customisett = "ปรับแต่งการแจ้งเตือนความสำเร็จ"
      eyett = "แสดง/ซ่อน API Key"
      kofitt = "บริจาคบน Ko-Fi!"
      trackopacitytt = "ตั้งค่าความทึบของการแจ้งเตือน \"กำลังติดตาม\""
      allpercenttt = "เปอร์เซ็นต์ความสำเร็จจะแสดงสำหรับการแจ้งเตือนที่ไม่บ่อย"
      hwatt = "<div style='font-weight: bold; color: red'>*แอปพลิเคชันจะรีสตาร์ทเมื่อเลือก</div><div style='color: white font-weight: normal'>ปิดใช้งานการเร่งด้วยฮาร์ดแวร์และเปิดใช้งานการรวบรวมขยะด้วยตนเอง ซึ่งช่วยลดการใช้หน่วยความจำบนระบบได้มากโดยใช้ฮาร์ดแวร์กราฟิกแบบรวม/ระดับล่าง"
      nvdatt = "<div style='font-weight: bold; color: red'>*ต้องใช้โปรแกรมเสริม NVDA ClipReader</div><div style='color: white font-weight: normal'>คัดลอกข้อมูลความสำเร็จทั้งหมดไปยังคลิปบอร์ด ซึ่งซอฟต์แวร์ NVDA สามารถอ่านได้</div>"
      iconanimtt = "สลับโครงร่างสีทองบนไอคอนความสำเร็จที่หายาก"
      gamecompletiontt = "แสดงการแจ้งเตือนเพิ่มเติมเมื่อปลดล็อกความสำเร็จทั้งหมดในเกมแล้ว"
      ssoverlaytt = `จับภาพหน้าจอที่ไม่ใช่ Steam และซ้อนทับรายละเอียดของรางวัลพิเศษที่ปลดล็อค ภาพหน้าจอที่ไม่ใช่ Steam สามารถบันทึกในไดเร็กทอรีเฉพาะโดยใช้ตัวเลือก "เส้นทาง"`
      sserrortt = "<span style='color: red; font-weight: bold'>ไม่ได้เปิดใช้งานตัวเลือกภาพหน้าจอ!</span>"
   } else if (configtt.lang == "turkish") {
      usertt = "Steam Kullanıcı Adı<br><div style='font-size: 6px'>Bu kullanıcı için başarılar izleniyor</div>"
      gamett = "Suanki Oyun<br><div style='font-size: 6px'>Şu anda izlenen oyunun adını gösterir</div>"
      mainprevtt = "Önizleme Bildirim Sesi"
      rareprevtt = "Nadir Bildirim Sesini Önizle"
      maintabtt = "Ana Başarı Bildirim Sesini Seçin"
      raretabtt = "Nadir Başarı Bildirim Sesini Seç"
      selmaintt = "Ana Başarı Sesini Seçin"
      selrarett = "Nadir Başarı Sesini Seç"
      screenshottt = "Ekran görüntüsünü alır ve bir başarının kilidi açıldığında bunu bildirimde görüntüler."
      shortcuttt = "Steam Achievement Notifier'ı çalıştırmak için Desktop'de bir kısayol oluşturur."
      startwintt = "Windows başladığında uygulamayı otomatik olarak başlatır."
      startmintt = "Başlangıçta uygulama penceresini gizler."
      soundonlytt = "Tüm bildirimleri gizler, ancak başarıların kilidini açarken seçilen sesleri çalar.<br><span style='font-size: 8px'>(Etkinleştirildiğinde \"Bildirim Görüntüleme Süresi\" kullanılamayacak)</span>"
      tracktt = "Bir oyuna başlarken \"Şimdi İzleniyor\" bildirimini gösterir."
      displaytt = "Başarı bildirimlerinin görüntüleneceği sürenin uzunluğunu ayarlar <br><span style='font-size: 8px'>(\"Yalnızca Ses Modu\" etkinleştirildiyse kullanılamaz)</span>"
      updatett = "GÜNCELLEME UYGUN"
      discordtt = "Discord'a Katılın!"
      githubtt = "Sorun bildir"
      resettt = "SIFIRLA"
      apilbltt = 'API Key\'inizi almak için burayı tıklayın <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Steam64ID\'nizi almak için buraya tıklayın <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Kaydetmek"
      keybindtt = "Bir tuşa basmayı (\"...\") dinlemeye başlamak için düğmeye tıklayın, ardından Steam'deki ekran görüntüsü anahtarınıza karşılık gelen tuşa basın"

      raritytt = "\"Nadir\" sesler/bildirimler yalnızca bu yüzdenin altında<br>bir nadirlik değerine sahip başarılar için gösterilecektir."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Bu seçeneği etkinleştirmek<br>Steam'i yeniden başlatır.</span><br>Bir başarının kilidini açarken<br>varsayılan Steam bildirimini gizler."
      customisett = "Başarı Bildirimini Özelleştir"
      eyett = "API Key'i Göster/Gizle"
      kofitt = "Ko-Fi'ye bağış yapın!"
      trackopacitytt = "\"Şimdi İzliyor\" bildiriminin opaklığını ayarlar."
      allpercenttt = "Nadir olmayan bildirimler için başarı<br>yüzdeleri de gösterilecektir."
      hwatt = "<div style='font-weight: bold; color: red'>*Kontrol edildiğinde uygulama yeniden başlayacak</div><div style='color: white font-weight: normal'>Donanım hızlandırmayı devre dışı bırakır ve tümleşik/alt uç grafik donanımı kullanan sistemlerde bellek kullanımını büyük ölçüde azaltan manuel çöp toplamayı etkinleştirir."
      nvdatt = "<div style='font-weight: bold; color: red'>*NVDA ClipReader eklentisi gerektirir</div><div style='color: white font-weight: normal'>Tüm başarı bilgilerini daha sonra NVDA yazılımı tarafından okunabilen panoya kopyalar.</div>"
      iconanimtt = "Nadir başarı simgesindeki altın anahattı değiştirir."
      gamecompletiontt = "Bir oyundaki tüm başarıların kilidi açıldığında ek bir bildirim gösterir."
      ssoverlaytt = `Steam dışı bir ekran görüntüsü alır ve kilidi açılmış başarının ayrıntılarını kaplar. Bu Steam dışı ekran görüntüleri "Yol" seçeneği kullanılarak belirli bir dizine kaydedilebilir.`
      sserrortt = "<span style='color: red; font-weight: bold'>Ekran görüntüsü seçeneği etkin değil!</span>"
   } else if (configtt.lang == "ukrainian") {
      usertt = "Ім'я Користувача Steam<br><div style='font-size: 6px'>Відстежуються досягнення цього користувача</div>"
      gamett = "Ігровий Дисплей<br><div style='font-size: 6px'>Показує назву гри, яка в даний момент відстежується</div>"
      mainprevtt = "Перевірте Oсновний Звук"
      rareprevtt = "Перевірте Pідкісний Звук"
      maintabtt = "Виберіть Основний Звук Cповіщень"
      raretabtt = "Виберіть Рідкісний Звук Cповіщень"
      selmaintt = "Виберіть Основний Звук Cповіщень"
      selrarett = "Виберіть Рідкісний Звук Cповіщень"
      screenshottt = "Робить знімок екрана та відображає його в сповіщенні, коли досягнення розблоковано."
      shortcuttt = "Створює ярлик на Desktop для запуску Steam Achievement Notifier."
      startwintt = "Автоматично запускає програму при запуску Windows."
      startmintt = "Приховує вікно програми під час запуску."
      soundonlytt = "Приховує всі сповіщення, але відтворює вибрані звуки під час розблокування досягнень.<br><span style='font-size: 8px'>(\"Тривалість\" буде недоступний коли ввімкнено)</span>"
      tracktt = "Показує сповіщення \"Відстеження\" під час запуску гри."
      displaytt = "Встановлює час протягом якого відображатимуться сповіщення про досягнення <br><span style='font-size: 8px'>(Недоступно якщо увімкнено \"Режим Лише Звуку\".)</span>"
      updatett = "ДОСТУПНЕ ОНОВЛЕННЯ"
      discordtt = "Приєднуйтесь до Discord!"
      githubtt = "Повідомити про проблему"
      resettt = "СКИНУТИ"
      apilbltt = 'Натисніть тут щоб отримати свій API Key <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Натисніть тут щоб отримати свій Steam64ID <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Зберегти"
      keybindtt = "Натисніть кнопку, щоб почати слухати натискання клавіші (\"...\"), а потім натисніть клавішу, яка відповідає вашій клавіші знімка екрана в Steam"

      raritytt = "\"Рідкісні\" звуки/сповіщення відображатимуться лише для<br>досягнень із значенням рідкості нижче цього відсотка."
      nosteamtt = "<span style='color: red; font-weight: bold'>*Увімкнення цієї опції перезапустить Steam.</span><br>Приховує сповіщення Steam за умовчанням<br>під час розблокування досягнення."
      customisett = "Налаштувати Сповіщення Про Досягнення"
      eyett = "Показати/Приховати API Key"
      kofitt = "Пожертвуйте на Ko-Fi!"
      trackopacitytt = "Встановлює непрозорість сповіщення \"Відстеження\"."
      allpercenttt = "Відсотки досягнень також відображатимуться<br>для нерідких сповіщень."
      hwatt = "<div style='font-weight: bold; color: red'>*Програма перезапуститься, коли буде встановлено прапорець</div><div style='color: white font-weight: normal'>Вимикає апаратне прискорення та вмикає збір сміття вручну, що значно зменшує використання пам’яті в системах, що використовують інтегроване або графічне обладнання нижчого класу."
      nvdatt = "<div style='font-weight: bold; color: red'>*Потрібен аддон NVDA ClipReader</div><div style='color: white font-weight: normal'>Копіює всю інформацію про досягнення в буфер обміну, яку потім може прочитати програмне забезпечення NVDA.</div>"
      iconanimtt = "Перемикає золотий контур на значку рідкісного досягнення."
      gamecompletiontt = "Показує додаткове сповіщення, коли всі досягнення в грі розблоковано."
      ssoverlaytt = `Робить знімок екрана не в Steam і накладає деталі розблокованого досягнення. Ці знімки екрана не в Steam можна зберегти в певному каталозі за допомогою параметра "Шлях".`
      sserrortt = "<span style='color: red;; font-weight: bold'>Не ввімкнено опцію знімка екрана!</span>"
   } else if (configtt.lang == "vietnamese") {
      usertt = "Tên Người Dùng Steam<br><div style='font-size: 6px'>Thành tích đang được theo dõi cho người dùng này</div>"
      gamett = "Trò Chơi Hiện Tại<br><div style='font-size: 6px'>Hiển thị tên của trò chơi hiện đang được theo dõi</div>"
      mainprevtt = "Xem Trước Âm Thanh Thông Báo"
      rareprevtt = "Xem Trước Âm Thanh Thông Báo Hiếm"
      maintabtt = "Chọn Âm Thanh Thông Báo Thành Tích Chính"
      raretabtt = "Chọn Âm Thanh Thông Báo Thành Tích Hiếm Có"
      selmaintt = "Chọn Âm Thanh Thành Tích Chính"
      selrarett = "Chọn Âm Thanh Thành Tựu Hiếm"
      screenshottt = "Chụp ảnh màn hình và hiển thị nó trong thông báo khi thành tích được mở khóa."
      shortcuttt = "Tạo lối tắt trên Desktop để chạy Steam Achievement Notifier."
      startwintt = "Tự động khởi động ứng dụng này khi Windows khởi động."
      startmintt = "Ẩn cửa sổ ứng dụng khi khởi động."
      soundonlytt = "Ẩn tất cả thông báo nhưng phát âm thanh đã chọn khi mở khóa thành tích.<br><span style='font-size: 8px'>(\"Thời Lượng Tin Nhắn\" sẽ không khả dụng khi được bật)</span>"
      tracktt = "Hiển thị thông báo \"Hiện Đang Quan Sát\" khi bắt đầu trò chơi."
      displaytt = "Đặt khoảng thời gian thông báo thành tích sẽ hiển thị <br><span style='font-size: 8px'>(Không khả dụng nếu \"Chế Độ Chỉ Âm Thanh\" đã được bật)</span>"
      updatett = "Cập Nhật Có Sẵn"
      discordtt = "Tham gia trên Discord!"
      githubtt = "Báo cáo một vấn đề"
      resettt = "CÀI LẠI"
      apilbltt = 'Nhấp vào đây để tải APIKey của bạn <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      steam64lbltt = 'Nhấp vào đây để tải Steam64ID của bạn <img src="./icon/open_in_new.svg" width="12px" style="vertical-align: -3px">'
      savett = "Lưu Cái Này"
      keybindtt = "Nhấp vào nút để bắt đầu nghe khi nhấn phím (\"...\"), sau đó nhấn phím tương ứng với phím chụp màn hình của bạn trong Steam"

      raritytt = "Âm thanh/thông báo \"Hiếm\" sẽ chỉ hiển thị cho<br>thành tích có giá trị hiếm dưới phần trăm này."
      nosteamtt = "<span style='color: red;; font-weight: bold'>*Bật tùy chọn này sẽ khởi động lại Steam.</span><br>Ẩn thông báo Steam mặc định khi mở khóa thành tích."
      customisett = "Tùy Chỉnh Thông Báo Thành Tích"
      eyett = "Hiển Thị/Ẩn APIKey"
      kofitt = "Đóng góp trên Ko-Fi!"
      trackopacitytt = "Đặt độ mờ của thông báo \"Hiện Đang Quan Sát\"."
      allpercenttt = "Phần trăm thành tích cũng sẽ được<br>hiển thị cho các thông báo không hiếm."
      hwatt = "<div style='font-weight: bold; color: red'>*Ứng dụng sẽ khởi động lại khi được chọn</div><div style='color: white font-weight: normal'>Tắt tăng tốc phần cứng và cho phép thu gom rác thủ công, điều này giúp giảm đáng kể mức sử dụng bộ nhớ trên các hệ thống sử dụng phần cứng đồ họa tích hợp / cấp thấp hơn."
      nvdatt = "<div style='font-weight: bold; color: red'>*Yêu cầu addon NVDA ClipReader</div><div style='color: white font-weight: normal'>Sao chép tất cả thông tin thành tích vào khay nhớ tạm, sau đó phần mềm NVDA có thể đọc được.</div>"
      iconanimtt = "Chuyển đổi đường viền vàng trên biểu tượng thành tích hiếm có."
      gamecompletiontt = "Hiển thị thông báo bổ sung khi tất cả thành tích trong trò chơi đã được mở khóa."
      ssoverlaytt = `Chụp ảnh màn hình không phải Steam và phủ lên các chi tiết của thành tích đã mở khóa. Các ảnh chụp màn hình không phải Steam này có thể được lưu trong một thư mục cụ thể bằng cách sử dụng tùy chọn "Đường Dẫn".`
      sserrortt = "<span style='color: red; font-weight: bold'>Không có tùy chọn ảnh chụp màn hình nào được bật!</span>"
   }
   usertippy.setContent(usertt)
   gametippy.setContent(gamett)
   mainprevtippy.setContent(mainprevtt)
   rareprevtippy.setContent(rareprevtt)
   maintabtippy.setContent(maintabtt)
   raretabtippy.setContent(raretabtt)
   selmaintippy.setContent(selmaintt)
   selraretippy.setContent(selrarett)
   screenshottippy.setContent(screenshottt)
   rarescreenshottippy.setContent(screenshottt)
   shortcuttippy.setContent(shortcuttt)
   startwintippy.setContent(startwintt)
   startmintippy.setContent(startmintt)
   soundonlytippy.setContent(soundonlytt)
   tracktippy.setContent(tracktt)
   iconanimtippy.setContent(iconanimtt)

   document.getElementById("updateicon")._tippy.setContent(updatett)
   document.getElementById("discord")._tippy.setContent(discordtt)
   document.getElementById("github")._tippy.setContent(githubtt)
   document.getElementById("kofi")._tippy.setContent(kofitt)
   //document.getElementById("reset")._tippy.setContent(resettt)
   document.getElementById("apikeylbl")._tippy.setContent(apilbltt)
   document.getElementById("steam64lbl")._tippy.setContent(steam64lbltt)
   document.getElementById("saveapi")._tippy.setContent(savett)
   document.getElementById("save64")._tippy.setContent(savett)
   //document.getElementById("slider")._tippy.setContent(displaytt)
   document.getElementById("steamkeybindlbl")._tippy.setContent(keybindtt)
   document.getElementById("steamkeybind")._tippy.setContent(keybindtt)

   //V1.8 Tooltip Translations
   document.getElementById("rarity")._tippy.setContent(raritytt)
   document.getElementById("rarityslider")._tippy.setContent(raritytt)
   document.getElementById("nosteam")._tippy.setContent(nosteamtt)
   document.getElementById("eye")._tippy.setContent(eyett)
   document.getElementById("customisecont")._tippy.setContent(customisett)
   document.getElementById("trackopacity")._tippy.setContent(trackopacitytt)
   document.getElementById("allpercent")._tippy.setContent(allpercenttt)
   document.getElementById("hwa")._tippy.setContent(hwatt)
   document.getElementById("nvda")._tippy.setContent(nvdatt)
   document.getElementById("gamecompletion")._tippy.setContent(gamecompletiontt)
   document.getElementById("ssoverlay")._tippy.setContent(ssoverlaytt)
   document.getElementById("fullscreen")._tippy.setContent(fullscreentt)
   document.getElementById("extwin")._tippy.setContent(extwintt)
}

LoadLangTT()