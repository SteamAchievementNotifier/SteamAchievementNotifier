export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Не е открит потребител",
                tt: "Steam потребителят, за който в момента се проследяват постижения"
            },
            gamelbl: {
                elem: gameName ? gameName : "Не е открита игра",
                tt: "Играта, за която в момента се проследяват постижения"
            },
            previewbtn: {
                tt: "Преглед на избрания звук"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "По подразбиране (Няма избран звуков файл)" : custom.sounddir ? custom.sounddir : "По подразбиране (Няма избрана папка за звук)"
            },              
            soundmodelbl: {
                elem: "Режим на звука:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "файл" : "случаен"
            },
            togglemain: {
                elem: "Основно",
                tt: "Основно известие за постижение"
            },
            togglerare: {
                elem: "Рядко",
                tt: "Рядко известие за постижение"
            },
            toggleplat: {
                elem: "100%",
                tt: "Известие за постижение 100%"
            },
            progresscirclewrapper: {
                tt: "Показване на преглед на персонализираното известие"
            },
            testbtnwrapper: {
                elem: "Покажи тестово известие",
                tt: "Показване на преглед на персонализираното известие",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Персонализиране...",
                tt: "Отваряне на менюто за персонализиране на известията",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam не работи"
            },
            updatebtn: {
                tt: "Има налична актуализация"
            },
            kofibtn: "Дарете в Ko-Fi!",
            discordbtn: "Присъединете се към Discord!",
            githubbtn: "Съобщете за проблем в GitHub!",
            settingstitlelbl: {
                elem: "Настройки"
            },
            configuration: {
                elem: "Конфигурация",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Език",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "ОС",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Известия",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Снимки на екрана",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Достъпност",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Други",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Версия на приложението"
            },
            apikeybtn: {
                tt: "Натиснете тук, за да получите своя Steam Web API ключ"
            },
            apikey: {
                placeholder: "API ключ",
                tt: "Steam Web API ключът, свързан с вашия Steam акаунт"
            },
            eyebtn: {
                tt: "Превключване на видимостта на API ключа"
            },
            apikeylbl: {
                elem: "Вземете API ключ"
            },
            steam64idbtn: {
                tt: "Натиснете тук, за да получите своя Steam64 ID"
            },
            steam64id: {
                placeholder: "ID на Steam64",
                tt: "Steam64 ID-то, свързано с вашия Steam акаунт"
            },
            steam64idlbl: {
                elem: "Вземете Steam64 ID"
            },
            switchaccountspan: {
                elem: "Смяна на акаунти"
            },
            switchaccountbtn: {
                tt: "Превключване между свързани Steam акаунти"
            },
            testconnectionlbl: {
                elem: "Тест на връзката",
                tt: "Тестване на връзката с Steam Web API"
            },            
            lang: {
                tt: "Задаване на език за интерфейса и известията"
            },
            desktop: {
                elem: "Създайте пряк път",
                tt: "Създаване на пряк път към приложението на работния плот",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Стартиране с Windows",
                tt: "Автоматично стартиране на приложението при стартиране на Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Стартиране в минимизиран режим",
                tt: "Минимизиране на приложението в системния трей след стартиране",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Няма хардуерно ускорение",
                tt: "Изключване на хардуерното ускорение за прозореца на приложението",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Лек режим",
                tt: "Изключва основния прозорец на приложението, за да спести системни ресурси. Минимални опции ще останат достъпни чрез иконата в системния трей за взаимодействие с приложението",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Процент на рядкост",
                tt: `Само постижения с глобален процент на отключване под това число ще се показват като известия "Рядко"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Режим само със звук",
                tt: "Изключване на известията, но възпроизвеждане на избрания звук при отключване на постижение",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Показване на всички проценти",
                tt: "Показване на глобалните проценти на отключване във всички видове известия",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Дублиране на външен прозорец",
                tt: "Дублиране на известията във външен прозорец",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Показване на прозорец с постиженията",
                tt: "Показване на прозорец с постиженията",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Показване на „сега проследява“`,
                tt: `Превключване на известието "Следене в момента" при стартиране на игра`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Избор на режим за автоматични снимки на постижения"
            },
            displayscreenshot: {
                elem: "Показване на екранна снимка",
                tt: "Показване на предварителен изглед на снимките в известието за постижението",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Бърз клавиш за Steam",
                tt: "Съответствие на клавишната комбинация във вашия Steam клиент за правене на снимки с вградения Steam",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Основно известие в преглед"
            },
            ovtabrare: {
                tt: "Рядко известие в преглед"
            },
            ovtabplat: {
                tt: "Известие за 100% в преглед"
            },
            monitor: {
                elem: "Монитор",
                tt: "Избор на монитор за източник на снимките",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Позиция",
                tt: "Задаване на позицията на известията в прегледа",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Път",
                tt: "Задаване на пътя, където ще бъдат запазени снимките",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Преглед",
                tt: "Преглед на известието в прегледа",
                query: "label"
            },
            noanim: {
                elem: "Изключете анимациите",
                tt: "Изключване на преходните анимации в прозореца на приложението",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Поддръжка на NVDA",
                tt: "Копиране на съдържанието на известията в клипборда, за да може да бъде прочетено от софтуера за четене на екрани NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Показване на подсказки",
                tt: "Превключване на подсказките при плъзгане на курсора върху елементите на приложението",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Показване на известие DevTools",
                tt: "Отваряне на панела с инструменти за разработчици на известията при задействане",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Политика за поверителност",
                tt: "Преглед на политиката за поверителност на Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Отидете на бета канал",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Отворен дневник",
                tt: "Преглед и споделяне на съдържанието на дневника на приложението",
                query: "label"
            },
            resetbtn: {
                elem: "Нулиране на приложението",
                tt: "Премахване на всички запазени данни и рестартиране на приложението",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Пауза/Възпроизвеждане на анимацията на известяването"
            },
            customiserreplay: {
                tt: "Повторно възпроизвеждане на анимацията на известяването"
            },
            customisersavepreset: {
                tt: "Запазване на текущите настройки като ново предварително зададено известяване"
            },
            tabbtnnext: {
                tt: "Следващ"
            },
            tabbtnprev: {
                tt: "Назад"
            },
            notificationpreset: {
                elem: "Шаблон",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Шаблон за известие",
                tt: "Изберете предварително зададено известяване, което да промените",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Рядка анимация",
                tt: "Превключване на анимацията на фона на иконата",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Всички подробности",
                tt: `Показване на всички налични детайли на известията`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Време за показване",
                tt: "Продължителността, през която известяването ще се показва",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Мащаб",
                tt: "Размерът на известяването<br><i>*Не се отразява в прозореца за преглед</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Персонализиран текст",
                tt: "Показване на персонализирано съобщение в известяването",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Заглавие на играта",
                tt: "Показване на заглавието на текущата игра в известяването",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Стил",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Стил на фона",
                tt: "Задаване на стила на фона на известяването",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Ъгъл на градиента",
                tt: "Задаване на ъгъла на цветовия градиент",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Фоново изображение",
                tt: "Изберете изображение, което да се зададе като фон на известяването",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Яркост",
                tt: "Задаване на яркостта на фона с игралното изкуство",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Закръгление",
                tt: "Задаване на закръглеността на ъглите на известяването",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Размер на шрифта",
                tt: "Задаване на мащаба на шрифта",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Непрозрачност",
                tt: "Задаване на непрозрачността на известяването",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Само фон",
                tt: "Прилагане на непрозрачност само към фона, като текстът и изображенията остават напълно непрозрачни",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Цветове",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Основен цвят",
                tt: "Задаване на основния цвят на известяването",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Вторичен цвят",
                tt: "Задаване на вторичния цвят на известяването",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Цвят на текста",
                tt: "Задаване на цвета на текста",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Контур на текста",
                tt: "Прилагане на контур на всички текстови елементи в известяването",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Цвят на контура",
                tt: "Задаване на цвета на контура на текста",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Сянка на текста",
                tt: "Прилагане на сянка на всички текстови елементи в известяването",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Цвят на сянката",
                tt: "Задаване на цвета на сянката на текста",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Икона",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Кръгла икона",
                tt: "Задаване на закръглеността на иконата на известяването",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Персонализирана икона",
                tt: "Използване на файл с изображение като персонализирана икона",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Персонализирана икона",
                tt: "Изберете файл с изображение, който да се зададе като персонализирана икона",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Нулиране на персонализирана икона`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "100% икона",
                tt: `Използвайте файл с изображение като персонализирана икона на 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "100% икона",
                tt: `Изберете файл с изображение, за да го зададете като персонализирана икона на 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Нулиране на персонализираната икона на 100%`,
                query: ".sanboxlbl"
            },
            usegameicon: {
                elem: "Икона на играта",
                tt: "Използване на иконата на текущата игра",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Позиция",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Позиция на екрана",
                tt: "Задаване на позицията на известяването върху екрана",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Свободна позиция",
                tt: "Използване на персонализирана позиция за известяването",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Позиция",
                tt: "Задаване на персонализирана позиция за известяването",
                query: "label"
            },
            animdir: {
                elem: "Посока на анимацията",
                tt: "Задаване на посоката на анимацията на известяването",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ"
            },
            ppusagetitle: {
                elem: "ИЗПОЛЗВАНЕ НА ДАННИ ОТ STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier използва <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> на Valve, за да извлича и показва данни, свързани с потребителските Steam акаунти, посредством Steam API Key/Steam64 ID комбинацията, предоставена от потребителя на приложението. Тези данни включват:`
            },
            ppstats: {
                elem: "Статистика за отключени и заключени постижения"
            },
            ppusername: {
                elem: "Твоето Steam потребителско име"
            },
            ppsteamgames: {
                elem: "Твоите играни Steam игри"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier може да използва допълнителни данни от Steam Web API в бъдеще, за да предостави допълнителни функции и актуализации на приложението."
            },
            ppkey64title: {
                elem: "ИЗПОЛЗВАНЕ НА STEAM API KEY/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier изисква от потребителя да въведе комбинацията Steam API Key/Steam64 ID за удостоверен достъп до Steam Web API."
            },
            ppnoauth: {
                elem: "Без тази информация, връзките (предоставени от Valve за достъп до Steam Web API), използвани за извличане на данни, свързани с потребителски Steam акаунти - включително данни за постижения - не могат да бъдат достъпни."
            },
            ppstoragetitle: {
                elem: "ЗАПИСВАНЕ НА ДАННИ ОТ STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier временно съхранява данни от Steam Web API локално на компютъра на потребителя, само за използване в рамките на приложението. Всички временно съхранени данни от Steam Web API се изтриват от локалното хранилище при излизане от приложението в нормални условия."
            },
            pppersist: {
                elem: "Постоянно съхраняваните данни на устройството на потребителя включват само данни, съхранявани от приложението за удобство на потребителя, като Steam Web API Key и Steam64 ID."
            },
            ppdelete: {
                elem: "Тези данни могат да бъдат изтрити ръчно от потребителя по всяко време, ако е необходимо. Файловете, създадени от Steam Achievement Notifier, се намират в следната директория:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "В момента не се поддържа"
            },
            ppcollecttitle: {
                elem: "ПОЗИЦИЯТА ЗА СЪБИРАНЕ НА ДАННИ"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier никога няма да изпраща или съхранява потребителски данни извън локалната файлова система на потребителя без изричното му разрешение. Това включва всякаква информация, извлечена чрез Steam Web API за използване в рамките на приложението, включително комбинацията от Steam API Key/Steam64 ID, предоставена на приложението за достъп до Steam Web API."
            },
            ppconsent: {
                elem: "Чрез потвърждаване на съгласието и последващо използване на вече съществуващи или бъдещи функционалности, предназначени да изпращат информация извън приложението, потребителят неясно дава съгласието си за това. В такива случаи потребителят винаги ще бъде информиран за характера на изпращаната информация и ще бъде помолен да потвърди съгласието си за изпращане на данни извън приложението."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier специално не позволява външен достъп, преглед или събиране на информация, предоставена на приложението от потребителя, но чрез вече съществуващи или бъдещи функционалности приложението може да изпраща данни външно от името на потребителя, но само след изричното му съгласие за това."
            },
            pprequests: {
                elem: "Заявките за достъп до данни от Steam Web API се извършват от самото приложение чрез вградени методи, подобни на функционалността, предоставена от уеб браузъри. Тези заявки съдържат комбинацията от Steam API Key/Steam64 ID на потребителя, както е необходимо от Steam Web API, но никога не са предназначени да бъдат на разположение за използване или прехващане от други приложения."
            },
            ppusertitle: {
                elem: "ОТГОВОРНОСТ НА ПОТРЕБИТЕЛЯ"
            },
            ppsteamtou: {
                elem: `СВАЛИНИ И ИЗПОЛЗВАЙКИ ВСЯКА ОФИЦИАЛНО ИЗДАДЕНА ВЕРСИЯ НА STEAM ACHIEVEMENT NOTIFIER ЧРЕЗ <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">ОФИЦИАЛНИЯ GITHUB РЕПОЗИТОРИЙ</span>, ВЫ, ПОТРЕБИТЕЛЯТ, ЧРЕЗ РАЗШИРЕНИЕ, СЪГЛАСНО ОТДЕЛИ 7 И 8 ОТ <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">УСЛОВИЯТА ЗА ИЗПОЛЗВАНЕ НА STEAM WEB API</span>.`
            },
            gamedetails: "Детайли за играта",
            mustbepublic: "трябва да бъде зададено като Обществено",
            nosoundfile: "По подразбиране (Не е избран файл със звук)",
            nosoundfolder: "По подразбиране (Не е избрана папка със звук)",
            file: "Файл",
            randomised: "Случаен избор",             
            audioselectdialog: `Изберете звуков ${custom.mode === "file" ? "файл" : "папка"}`,
            imgselectdialog: `Изберете изображение`,
            unsupported: "Неподдържан файл!",
            novalidaudiofiles: "Няма валидни аудио файлове!",
            nolocate: "Неуспешно намиране на файла!",
            switchaccountstitle: "Превключете профилите",
            noaccounts: "Добавете профил, за да започнете!",
            connecting: "Свързване...",
            connected: "Свързан",
            testsuccessuser: `Вие сте готови`,
            testsuccess1: `Уверете се, че вашите <span>Детайли за играта</span> са зададени като <span>Публични</span> в <a href="${privacysettings}">Steam Privacy Settings</a>`,
            testsuccess2: `Проверете дали вашият режим на дисплей в играта е зададен като <span>Borderless</span>, за да се показват известията над прозореца на играта`,
            noapikeytitle: "Липсва API ключ",
            noapikeytxt: "Моля, въведете вашия API ключ",
            noapikeyhint: `Щракнете върху иконата <img src="./icon/key.svg" alt=""> за да получите вашия API ключ`,
            nosteam64idtitle: "Липсва Steam64 ID",
            nosteam64idtxt: "Моля, въведете вашия Steam64 ID",
            nosteam64idhint: `Щракнете върху иконата <img src="./icon/id.svg" alt=""> за да получите вашия Steam64 ID`,
            invalidapikeytitle: "Невалиден API ключ!",
            invalidapikeymsg: "Неуспешен достъп до Steam Web API с предоставения API ключ",
            invalidapikeydetail1: "Проверете дали вашият API ключ е вярен",
            invalidapikeydetail2: "Генерирайте нов API ключ за вашия акаунт",
            invalidsteam64idtitle: "Невалиден Steam64 ID!",
            invalidsteam64idmsg: "Не може да бъде намерен Steam акаунт, свързан с предоставения Steam64 ID",
            invalidsteam64iddetail1: "Проверете дали стойността на Steam64 ID, която сте предоставили, е правилната за вашия Steam акаунт",
            nonetworkfound: "Не е открита активна мрежова връзка",
            connecttonetwork: "Свържете вашия компютър към мрежа и опитайте отново",
            testdefaulterrortitle: "Възникна грешка!",
            testdefaulterrormsg: "Възникна грешка при свързването с Steam Web API",
            testdefaulterrordetail1: "Моля, докладвайте този проблем в Discord или GitHub!",
            sspath: "Изберете пътя за снимките на екрана",
            wronguser: user ? `${user} не е влезнал в Steam!` : "Не са намерени свързани потребителски акаунти!",
            switchuser: "Щракнете тук, за да превключите профила",
            trackingfailed: "Проследяването не бе успешно!",
            checkapplog: "Проверете дневника на приложението за подробности",
            soon: "Очаквайте скоро!",
            gamecomplete: "100% Завършено",
            gametitle: "Заглавие на играта",
            achievementunlocked: "Постижение отключено",
            achievementtitle: "Заглавие на постижението",
            allachievements: "Отключихте всички постижения!",
            achievementdesc: "Описание на постижението",
            show: "Покажи",
            quit: "Изход",
            off: "Изключено",
            steamss: "Екранна снимка на Steam в играта",
            overlayss: "Снимка на екрана с известия",
            match: "Настройка за копиране",
            topleft: "Горе вляво",
            topcenter: "Горе в средата",
            topright: "Горе вдясно",
            bottomleft: "Долу вляво",
            bottomcenter: "Долу в средата",
            bottomright: "Долу вдясно",
            solid: "Еднородно",
            gradient: "Градиент",
            bgimg: "Изображение за фон",
            gameart: "Игрово изкуство",
            up: "Нагоре",
            down: "Надолу",
            left: "Наляво",
            right: "Надясно",
            tracking: "В момента проследяване"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Изберете звуков файл, който да се възпроизведе при отключване на постижение" : "Изберете папка, съдържаща аудио файлове, които да се възпроизвеждат на случаен принцип при отключване на постижение")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Ето дневник на всичко, което се е случило от момента на стартиране на приложението в"
            },
            copylbl: {
                elem: "Копирай съдържанието на дневника"
            },
            openlbl: {
                elem: "Генерирай файл с дневник"
            }            
        }

        return translations
    }
}