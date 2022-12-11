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
document.getElementById("showscreenshotlbl").innerHTML = "Екранна Снимка На Steam";
document.getElementById("showscreenshotlblrare").innerHTML = "Екранна Снимка На Steam";
document.getElementById("previewlbl").innerHTML = "Вижте Екранна Снимка"
document.getElementById("previewlblrare").innerHTML = "Вижте Екранна Снимка"
document.getElementById("desktoplbl").innerHTML = "Пряк път на работния плот";
document.getElementById("startwinlbl").innerHTML = "Започнете с Windows";
document.getElementById("startminlbl").innerHTML = "Старт Минимизиран";
document.getElementById("soundonlylbl").innerHTML = "Режим само за звук";
document.getElementById("trackinglbl").innerHTML = '"Сега проследяване"';

var nouser = "Няма открит потребител";
var nogame = "Не е открита игра";
var nosound = "По подразбиране (без избран звук)";
var nosoundrare = "По подразбиране (без избран звук)";
var rareheader = `'Отключено рядко постижение!`;
var unlinked = "НЕВЪРЗАН";
var linked = "СВЪРЗАНИ";
var novalue = "Моля въведете стойност";

var resettitle = "Нулиране На Настройките По Подразбиране?";
var resetdesc = `ПРЕДУПРЕЖДЕНИЕ: Това ще премахне всички потребителски настройки!`;
var resetbtns = ["Нулиране","Деинсталиране","Отменям"];

var traylabel = "Не е открита игра";
var trayshow = "Покажи";
var trayexit = "Изход";

var achievementunlocked = "Постижението Отключено!";
var rareachievementunlocked = "Отключено Рядко Постижение!";
var testdesc = "Вашите известия работят правилно";

var addsound = "Добавете Избран Звук";
var invalid = 'Невалиден Тип Файл';
var addimage = 'Добавяне На Избрано Изображение';
var file = "ФАЙЛ";
var nofolder = "По Подразбиране (не Е Избрана Папка)";
var novalidaudio = "Няма валидни аудио файлове, намиращи се в ";
var soundmode = "РЕЖИМ НА ЗВУК:";
var randomised = "РАНДОМИЗИРАНА";
var presskey = "...";
var custompos = "Задайте Позиция";
var settingpos = "Задаване На Основна Позиция...";
var settingposrare = "Задаване На Рядка Позиция...";

document.getElementById("steamkeybindlbl").innerHTML = "Бутон За Екранна Снимка:";
document.getElementById("langlbl").innerHTML = "Език:";
document.getElementById("raritylbl").innerHTML = "Рядка Стойност: ";
document.getElementById("nosteamlbl").innerHTML = "Скриване На Известието На Steam";
document.getElementById("customiselbl").innerHTML = "РЕДАКТИРАНЕ...";
document.getElementById("customisermainlbl").innerHTML = "Основен";
document.getElementById("customiserrarelbl").innerHTML = "Рядко";
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
document.getElementById("typegame").innerHTML = "Игрово Изкуство"
document.getElementById("brightnesslbl").innerHTML = "ЯРКОСТ"

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
document.getElementById("typegamerare").innerHTML = "Игрово Изкуство"
document.getElementById("brightnesslblrare").innerHTML = "ЯРКОСТ"

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

var secret = "Тайна";
var gamecomplete = "Играта Е Завършена!";
var allunlocked = "Отключихте всички постижения!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `Присъединете се към <span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;бета канала&nbsp;</span> за нови функции!`
document.getElementById("betatest").innerHTML = "Тествайте новите функции преди пускането"
document.getElementById("betaoptin").innerHTML = "Включете/изключете се по всяко време"
document.getElementById("betabugs").innerHTML = "Премахнете грешки и подобрете приложението"
document.getElementById("betadiscord").innerHTML = `Специален <span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span> Discord канал`
document.getElementById("betafb").innerHTML = "Предоставете обратна връзка"
document.getElementById("betabugswarn").innerHTML = "<u>Вероятни са грешки</u>&nbsp;(не за всеки!)"
document.getElementById("betawarntext").innerHTML = "Steam Achievement Notifier ще се рестартира след присъединяване към бета канала"
document.getElementById("betaok").innerHTML = "Да, звучи добре!"
document.getElementById("betacancel").innerHTML = "Не, аз ще остана тук..."

document.getElementById("leavebetatitle").innerHTML = "Да напуснеш ли бета канала?"
document.getElementById("leavebetasub").innerHTML = "Приложението ще се върне към официалната версия"
document.getElementById("leavebetaok").innerHTML = "Напуснете бета канала"
document.getElementById("leavebetacancel").innerHTML = "Останете на бета канала"

var betajoin = "Влезте в бета канала"
var betaleave = "Напуснете бета канала"
var betaerrortext = "Бета каналът се провали!"
var betaerrorsub = "Изглежда нямате мрежова връзка. Няма интернет = няма бета версия!"

document.getElementById("extwinlbltxt").innerHTML = "Дублирани Известия В Прозореца "

// Fullscreen Notifications
// document.getElementById("fullscreenlbl").innerHTML = "Известия На Цял Екран"
// document.getElementById("fswarntitle").innerHTML = "ПРЕДИ ДА ЗАПОЧНЕШ..."
// document.getElementById("fswarncontentmain").innerHTML = `За да наслагвате известия върху игри, настроени на режими на показване в играта „Цял екран“ или „Изключителен цял екран“, известието трябва да бъде инжектирано директно в процеса на играта, за да се покаже върху прозорец на игра на DirectX.<br><br>Това означава, че тъй като кодът на играта е технически променен от програма на трета страна, игрите, използващи технологията Anti-Cheat, могат да гледат на този метод неблагоприятно.<br><br>Въпреки че никоя игра не показа никакви проблеми по време на тестването, обикновено <u>не</u> се препоръчва да използвате опцията „Активиране на известия на цял екран“, когато има риск инжектирането да бъде открито от игри, използващи Anti-Cheat (като както в онлайн игрите).`
// document.getElementById("fswarnimportant").innerHTML = `Като активирате и използвате опцията „Известия на цял екран“, вие се съгласявате, че сте информирани по подходящ начин и разбирате рисковете, свързани с инжектирането на съдържание на трети страни в Steam игри (като метода, използван от Steam Achievement Notifier за показване на съдържание през игри, настроени да използват режими на показване на цял екран в играта), и че като активирате тази опция, вие приемате, че правите това на свой собствен риск и следователно разработчикът на Steam Achievement Notifier (Jackson0ne) не поема никаква отговорност или задължения по отношение на използването на тази опция.`
// document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">Щраквайки върху бутона <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">СЪГЛАСЯВАМ СЕ</span> по-долу, вие приемате горните условия и Опцията „Известия на цял екран“ ще бъде активирана.</div><div style="padding: 0px 10px 10px;">Като щракнете върху бутона <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">НЕ СЪГЛАСЕН</span> по-долу, това съобщение ще бъде затворено и опцията за „Известия на цял екран“ <u>няма</u> да бъде активирана.</div>`
// document.getElementById("fshidemsglbl").innerHTML = "Ще се съглася, не показвайте това съобщение отново"
// document.getElementById("fsok").innerHTML = "СЪГЛАСЕН"
// document.getElementById("fscancel").innerHTML = "НЕ СЪГЛАСЕН"
// document.getElementById("fsselectlbl").innerHTML = "Ръчно Изберете Прозорец На Играта"

// Privacy Policy
document.getElementById("pp").innerHTML = "Вижте Политиката За Поверителност"
document.getElementById("pptitle").innerHTML = "ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">ИЗПОЛЗВАНЕ НА ДАННИ НА STEAM WEB API</span>
    </div>
    <div class="ppbodycont">
    Steam Achievement Notifier използва <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> на Valve, за да извлече и покаже данни, свързани със Steam акаунта на потребителя ( s), чрез комбинацията Steam API ключ/Steam64 ID, предоставена на приложението от потребителя. Тези данни включват:<br><br>
        <div class="ppbodyembed">
            • Статистика за заключени и отключени постижения<br>
            • Вашето потребителско име в Steam<br>
            • Вашите играни Steam игри<br>
        </div>
        <br>
        <i>Steam Achievement Notifier може да използва допълнителни данни на Steam Web API в бъдеще, за да предостави допълнителни функции и актуализации на приложението.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM API КЛЮЧ/STEAM64 ID ИЗПОЛЗВАНЕ</span>
    </div>
    <div class="ppbodycont">
    Steam Achievement Notifier изисква от потребителя да въведе своя Steam API ключ/Steam64 ID комбинация за удостоверен достъп до Steam Web API. Без тази информация уеб връзките (предоставени за използване от Valve за достъп до Steam Web API), използвани за извличане на данни, свързани със Steam акаунт(и) на потребителя – включително данни за постижения – не могат да бъдат достъпни.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM WEB API СЪХРАНЕНИЕ НА ДАННИ</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier временно съхранява данни на Steam Web API локално на компютъра на потребителя единствено за използване в рамките на приложението. Всяко временно съхранение на тези данни е предназначено за използване единствено от Steam Achievement Notifier и при нормални обстоятелства всички непостоянни данни на Steam Web API ще бъдат изчистени от локалното хранилище при излизане от приложението.<br><br>
        Постоянните данни, съхранявани на устройството на потребителя, включват само данни, които се съхраняват от приложението за удобство на потребителя, като потребителския Steam Web API ключ и Steam64 ID.<br><br>
        Тези данни могат също да бъдат ръчно изтрити от потребителя по всяко време, ако е необходимо. Файловете, създадени от Steam Achievement Notifier, се намират в следната директория:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: В момента не се поддържа
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">ПОЗИЦИЯ ЗА СЪБИРАНЕ НА ДАННИ</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier <u>никога</u> няма да изпраща или съхранява потребителски данни извън локалната файлова система на потребителя. Това включва всяка информация, извлечена чрез Steam Web API за използване в рамките на приложението, включително комбинацията Steam API ключ/Steam64 ID, предоставена на приложението за достъп до Steam Web API. Разработчикът на Steam Achievement Notifier (Jackson0ne) умишлено не е включил никакви средства за външен достъп, преглед, събиране или изпращане на информация, предоставена на приложението от потребителя.<br><br>
        Заявките за достъп до данни от Steam Web API се правят от самото приложение, като се използват вградени методи, подобни на функционалността, предоставена от уеб браузърите. Тези заявки съдържат комбинацията Steam API ключ/Steam64 ID, както се изисква от Steam Web API, но не са достъпни за използване или прихващане от други приложения.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">ОТГОВОРНОСТ НА ПОТРЕБИТЕЛЯ</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        ЧРЕЗ ИЗТЕГЛЯНЕ И ИЗПОЛЗВАНЕ НА ВСЯКА ОФИЦИАЛНО ПУСКАНА ВЕРСИЯ НА STEAM ACHIEVEMENT NOTIFER ЧРЕЗ <span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">ОФИЦИАЛНО ХРАНИЛИЩЕ НА GITHUB</span>, ВИЕ, ПОТРЕБИТЕЛЯТ, С РАЗШИРЕНИЕ, СЕ ПРИДЪРЖАВАТЕ КЪМ РАЗДЕЛИ 7 И 8 ОТ <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">УСЛОВИЯТА НА STEAM WEB API ИЗПОЛЗВАНЕ</span>.
    </div>
`

// Achievement Stats Window (Beta Revision 0.6)
document.getElementById("statwinlbltxt").innerHTML = "Отворете прозореца Статистика"

statsresettitle = "Нулиране На Всички Съхранени Данни За Постижения?"
statsresetbody = "Всички съхранени преди това данни за постижения ще бъдат премахнати от това устройство. Вашите най-нови данни за постиженията ще бъдат извлечени, когато прозорецът за статистика на постиженията бъде отворен следващия път.\n\nМоля, имайте предвид, че извличането на данни за постиженията използва извиквания на Steam Web API за всяка притежавана игра в Steam библиотеката на потребителя. Valve ограничава количеството извиквания на Steam Web API до 100,000 на ден за API ключа на всеки потребител.\n\nВ резултат на това, в зависимост от количеството игри във вашата Steam библиотека, това може да повлияе на общата функционалност на приложението, ако функцията за нулиране на вашите данни за постижения се използва значително."
statsresetbtns = ["Нулирайте всички статистики за постиженията", "Отменям"]

statwincurrent = "ТЕКУЩА ИГРА"
statwinall = "ВСИЧКИ ИГРИ"
statwincomplete = "ЗАВЪРШЕН (100%)"
statwintop5 = "ТОП 5 ИГРИ"

// Notify Debug (Beta Revision 0.6)
document.getElementById("notifydebuglbl").innerHTML = "Конзола За Уведомяване"