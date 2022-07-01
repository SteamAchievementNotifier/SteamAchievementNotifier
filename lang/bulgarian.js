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