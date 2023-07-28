export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Пользователь не обнаружен",
                tt: "Steam-пользователь, для которого в настоящее время отслеживаются достижения"
            },
            gamelbl: {
                elem: gameName ? gameName : "Игра не обнаружена",
                tt: "Игра, для которой в настоящее время отслеживаются достижения"
            },
            previewbtn: {
                tt: "Просмотр выбранного звука"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "По умолчанию (Файл звука не выбран)" : custom.sounddir ? custom.sounddir : "По умолчанию (Папка со звуком не выбрана)"
            },              
            soundmodelbl: {
                elem: "Режим звука:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "файл" : "случайный"
            },
            togglemain: {
                elem: "Основной",
                tt: "Уведомление об основном достижении"
            },
            togglerare: {
                elem: "Редкое",
                tt: "Уведомление о редком достижении"
            },
            toggleplat: {
                elem: "100%",
                tt: "Уведомление о достижении 100%"
            },
            progresscirclewrapper: {
                tt: "Показать предварительный просмотр настраиваемого уведомления"
            },
            testbtnwrapper: {
                elem: "Показать тестовое уведомление",
                tt: "Показать предварительный просмотр настраиваемого уведомления",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Настроить...",
                tt: "Открыть меню настройки уведомлений",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam не запущен"
            },
            updatebtn: {
                tt: "Доступно обновление"
            },
            kofibtn: "Пожертвовать на Ko-Fi!",
            discordbtn: "Присоединиться на Discord!",
            githubbtn: "Сообщить о проблеме на GitHub!",
            settingstitlelbl: {
                elem: "Настройки"
            },
            configuration: {
                elem: "Конфигурация",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Язык",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "ОС",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Уведомления",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Скриншоты",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Доступность",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Другое",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Версия"
            },            
            apikeybtn: {
                tt: "Нажмите здесь, чтобы получить ваш Steam Web API Key"
            },
            apikey: {
                placeholder: "Введите ваш API ключ",
                tt: "Steam Web API ключ, связанный с вашей учетной записью Steam"
            },
            eyebtn: {
                tt: "Переключить видимость API Key"
            },
            apikeylbl: {
                elem: "Получить API Key"
            },
            steam64idbtn: {
                tt: "Нажмите здесь, чтобы получить ваш Steam64 ID"
            },
            steam64id: {
                placeholder: "Введите ваш Steam64 ID",
                tt: "Steam64 ID, связанный с вашей учетной записью Steam"
            },
            steam64idlbl: {
                elem: "Получить Steam64 ID"
            },
            switchaccountspan: {
                elem: "Переключить аккаунты"
            },
            switchaccountbtn: {
                tt: "Переключение между связанными аккаунтами Steam"
            },
            testconnectionlbl: {
                elem: "Проверить соединение",
                tt: "Проверьте ваше соединение с Steam Web API"
            },
            lang: {
                tt: "Установить язык для пользовательского интерфейса и уведомлений"
            },            
            desktop: {
                elem: "Создать ярлык на рабочем столе",
                tt: "Создать ярлык на рабочем столе для запуска приложения",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Запускать с Windows",
                tt: "Запускать приложение автоматически при запуске Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Запускать свернутым",
                tt: "Свернуть приложение в системный трей после запуска",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Отключить аппаратное ускорение",
                tt: "Отключить аппаратное ускорение для окна приложения",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Легкий режим",
                tt: "Отключает основное окно приложения для экономии системных ресурсов. Минимальные параметры останутся доступными через иконку в системном трее для взаимодействия с приложением",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Процент редкости",
                tt: `Отображать только достижения, у которых глобальный процент выполнения ниже этого числа, как уведомления "Редких" достижений`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Режим только звука",
                tt: "Отключает уведомления, но проигрывает выбранный звук при получении достижения",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Показать все проценты",
                tt: "Отображать глобальные проценты выполнения во всех типах уведомлений",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Дублировать во внешнее окно",
                tt: "Дублировать во внешнее окно",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Показать статистику достижений",
                tt: "Показать окно статистики достижений",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Показать «Теперь отслеживание»`,
                tt: `Включение/выключение уведомления "Сейчас отслеживается" при запуске игры`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Выберите режим автоматических скриншотов достижений"
            },
            displayscreenshot: {
                elem: "Показать скриншот уведомления",
                tt: "Отображать предварительный просмотр скриншотов в уведомлении о достижении",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Горячая клавиша Steam",
                tt: "Настройте горячую клавишу вашего клиента Steam для создания снимков экрана при получении достижений",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Основное уведомление-наложение`
            },
            ovtabrare: {
                tt: `Редкое уведомление-наложение`
            },
            ovtabplat: {
                tt: `Уведомление-наложение "100%"`
            },
            monitor: {
                elem: "Монитор",
                tt: "Выберите монитор в качестве источника скриншота",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Позиция наложения",
                tt: "Установите положение уведомления-наложения",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Путь",
                tt: "Установите путь, где будут сохраняться скриншоты",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Предпросмотр",
                tt: `Предпросмотр уведомления-наложения`,
                query: "label"
            },
            noanim: {
                elem: "Отключить анимацию окон",
                tt: "Отключить анимации перехода в окне приложения",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Включить поддержку NVDA",
                tt: "Копировать содержимое уведомления в буфер обмена для чтения программой чтения с экрана NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Показывать подсказки",
                tt: "Переключение подсказок при наведении на элементы приложения",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Показать DevTools уведомления",
                tt: "Открыть панель инструментов DevTools уведомления при срабатывании",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Политика конфиденциальности",
                tt: "Просмотреть политику конфиденциальности Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Присоединиться к бета-каналу",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Открыть журнал приложения",
                tt: "Просмотр и обмен содержимым журнала приложения",
                query: "label"
            },
            resetbtn: {
                elem: "Сбросить приложение",
                tt: "Удалить все сохраненные данные и перезапустить приложение",
                query: "label"
            },
            customiserplaystate: {
                tt: "Поставить на паузу/воспроизвести анимацию уведомления"
            },
            customiserreplay: {
                tt: "Повторить анимацию уведомления"
            },
            customisersavepreset: {
                tt: "Сохранить текущие настройки как новый предустановленный шаблон уведомления"
            },
            tabbtnnext: {
                tt: "Далее"
            },
            tabbtnprev: {
                tt: "Назад"
            },
            notificationpreset: {
                elem: "Предустановка",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Предустановка",
                tt: "Выберите предустановленный шаблон уведомления для настройки",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Редкие анимации",
                tt: "Переключить анимацию фона значка",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Показать все детали",
                tt: `Отобразить все доступные детали уведомлений`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Время отображения",
                tt: "Продолжительность отображения уведомления",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Масштаб",
                tt: "Размер уведомления<br><i>*Не отражается в окне предварительного просмотра</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Пользовательский текст",
                tt: "Отображать пользовательское сообщение в уведомлении",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Название игры",
                tt: "Отображать название текущей игры в уведомлении",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Стиль",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Стиль фона",
                tt: "Установить стиль фона уведомления",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Угол градиента",
                tt: "Установить угол цветового градиента",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Фоновое изображение",
                tt: "Выберите файл изображения для установки в качестве фонового изображения уведомления",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Яркость",
                tt: "Установить яркость фоновой графики игры",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Скругление",
                tt: "Установить степень скругления углов уведомления",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Размер шрифта",
                tt: "Установить масштаб шрифта",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Непрозрачность",
                tt: "Установить непрозрачность уведомления",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Только фон",
                tt: "Применить непрозрачность только к фону, оставив текст и изображения полностью непрозрачными",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Цвета",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Основной цвет",
                tt: "Установить основной цвет уведомления",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Вторичный цвет",
                tt: "Установить вторичный цвет уведомления",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Цвет текста",
                tt: "Установить цвет текста",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Обводка текста",
                tt: "Применить обводку ко всему тексту уведомления",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Цвет обводки",
                tt: "Установить цвет обводки текста",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Тень текста",
                tt: "Применить тень ко всему тексту уведомления",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Цвет тени",
                tt: "Установить цвет тени текста",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Значок",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Скругление значка",
                tt: "Установить степень скругления значка уведомления",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Икона",
                tt: "Использовать файл изображения в качестве пользовательского значка",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Икона",
                tt: "Выберите файл изображения для установки в качестве пользовательского значка",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Сбросить настраиваемую иконку`,
                query: ".sanboxlbl"
            },            
            useplaticon: {
                elem: "Икона 100%",
                tt: `Использовать изображение в качестве пользовательской иконки 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Икона 100%",
                tt: `Выберите изображение для установки в качестве пользовательской иконки 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Сбросить пользовательскую иконку 100%`,
                query: ".sanboxlbl"
            },        
            usegameicon: {
                elem: "Значок игры",
                tt: "Использовать значок текущей игры",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Позиция",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Положение на экране",
                tt: "Установить положение уведомления на экране",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Свободное положение",
                tt: "Использовать пользовательское положение для уведомления",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Позиция",
                tt: "Установить пользовательское положение для уведомления",
                query: "label"
            },
            animdir: {
                elem: "Направление анимации",
                tt: "Установить направление анимации уведомления",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ"
            },
            ppusagetitle: {
                elem: "ИСПОЛЬЗОВАНИЕ ДАННЫХ STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier использует <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> Valve для получения и отображения данных, относящихся к аккаунтам Steam пользователя, с использованием комбинации ключа Steam API/Steam64 ID, предоставленной пользователем приложению. Эти данные включают:`
            },
            ppstats: {
                elem: "Статистика для открытых и закрытых достижений"
            },
            ppusername: {
                elem: "Ваше имя пользователя Steam"
            },
            ppsteamgames: {
                elem: "Ваши сыгранные игры Steam"
            },
            ppusagefooter: {
                elem: "В будущем Steam Achievement Notifier может использовать дополнительные данные Steam Web API для предоставления дополнительных функций и обновлений приложения."
            },
            ppkey64title: {
                elem: "ИСПОЛЬЗОВАНИЕ КЛЮЧА STEAM API/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier требует, чтобы пользователь ввел комбинацию ключа Steam API/Steam64 ID для аутентифицированного доступа к Steam Web API."
            },
            ppnoauth: {
                elem: "Без этих данных невозможно получить доступ к веб-ссылкам (предоставленным Valve для доступа к Steam Web API), используемым для получения данных, связанных с аккаунтами Steam пользователя, включая данные о достижениях."
            },
            ppstoragetitle: {
                elem: "ХРАНЕНИЕ ДАННЫХ STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier временно хранит данные Steam Web API локально на ПК пользователя исключительно для использования в приложении. Любое временное хранение этих данных предназначено исключительно для использования Steam Achievement Notifier, и в обычных условиях все непостоянные данные Steam Web API будут удалены из локального хранилища при выходе из приложения."
            },
            pppersist: {
                elem: "Постоянные данные, хранящиеся на устройстве пользователя, включают только данные, которые хранятся приложением для удобства пользователя, такие как ключ Steam Web API и Steam64 ID пользователя."
            },
            ppdelete: {
                elem: "Эти данные также могут быть вручную удалены пользователем в любое время при необходимости. Файлы, созданные Steam Achievement Notifier, находятся в следующем каталоге:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "В настоящее время не поддерживается"
            },
            ppcollecttitle: {
                elem: "ПОЗИЦИЯ ОТНОСИТЕЛЬНО СБОРА ДАННЫХ"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>никогда</u> не отправляет и не хранит пользовательские данные за пределами файловой системы пользователя без явного разрешения пользователя. Это включает любую информацию, полученную через Steam Web API для использования в приложении, включая комбинацию ключа Steam API/Steam64 ID, предоставленную приложению для доступа к Steam Web API."
            },
            ppconsent: {
                elem: "Подтверждая согласие и последующее использование как существующих, так и будущих реализаций функций, предназначенных для отправки информации внешне, разрешение неявно предоставляется пользователем. В этих случаях пользователь всегда будет проинформирован о характере отправляемых данных и ему будет предложено подтвердить согласие на отправку данных вне приложения."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier намеренно исключает возможность внешнего доступа, просмотра или сбора любой информации, предоставленной пользователем приложению, но с помощью существующих или будущих реализаций функций приложение может отправлять данные внешне от имени пользователя, но только после его согласия."
            },
            pprequests: {
                elem: "Запросы на доступ к данным из Steam Web API выполняются в самом приложении с использованием встроенных методов, аналогичных функциональности, предоставляемой веб-браузерами. Эти запросы содержат комбинацию ключа Steam API/Steam64 ID пользователя, как требуется Steam Web API, но никогда не предоставляются или намеренно не делаются доступными для использования или перехвата другими приложениями."
            },
            ppusertitle: {
                elem: "ОТВЕТСТВЕННОСТЬ ПОЛЬЗОВАТЕЛЯ"
            },
            ppsteamtou: {
                elem: `ЗАГРУЖАЯ И ИСПОЛЬЗУЯ ЛЮБУЮ ОФИЦИАЛЬНО ВЫПУЩЕННУЮ ВЕРСИЮ STEAM ACHIEVEMENT NOTIFIER ЧЕРЕЗ <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">ОФИЦИАЛЬНЫЙ РЕПОЗИТОРИЙ GITHUB</span>, ВЫ, ПОЛЬЗОВАТЕЛЬ, АВТОМАТИЧЕСКИ СОБЛЮДАЕТЕ ПОЛОЖЕНИЯ 7 И 8 <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ STEAM WEB API</span>.`
            },
            gamedetails: "Детали игры",
            mustbepublic: "должно быть установлено на Публичное",            
            nosoundfile: "По умолчанию (Не выбран звуковой файл)",
            nosoundfolder: "По умолчанию (Не выбрана папка со звуками)",
            file: "Файл",
            randomised: "Случайный",            
            audioselectdialog: `Выберите звуковой ${custom.mode === "file" ? "файл" : "папку"}`,
            imgselectdialog: `Выберите файл изображения`,
            unsupported: "Неподдерживаемый файл!",
            novalidaudiofiles: "Нет допустимых звуковых файлов!",
            nolocate: "Не удалось найти файл!",
            switchaccountstitle: "Переключение аккаунтов",
            noaccounts: "Добавьте аккаунт, чтобы начать!",
            connecting: "Подключение...",
            connected: "Подключено",
            testsuccessuser: `Вы готовы к работе`,
            testsuccess1: `Убедитесь, что ваши <span>Детали игры</span> установлены как <span>Публичные</span> в <a href="${privacysettings}">Настройках конфиденциальности Steam</a>`,
            testsuccess2: `Проверьте, что режим отображения в игре установлен на <span>Без границ</span>, чтобы уведомления отображались над окном игры`,
            noapikeytitle: "Отсутствует ключ API",
            noapikeytxt: "Введите ваш ключ API",
            noapikeyhint: `Нажмите на иконку <img src="./icon/key.svg" alt="">, чтобы получить ваш ключ API`,
            nosteam64idtitle: "Отсутствует Steam64 ID",
            nosteam64idtxt: "Введите ваш Steam64 ID",
            nosteam64idhint: `Нажмите на иконку <img src="./icon/id.svg" alt="">, чтобы получить ваш Steam64 ID`,
            invalidapikeytitle: "Недействительный ключ API!",
            invalidapikeymsg: "Невозможно получить доступ к Steam Web API с предоставленным ключом API",
            invalidapikeydetail1: "Проверьте правильность вашего ключа API",
            invalidapikeydetail2: "Сгенерируйте новый ключ API для вашей учетной записи",
            invalidsteam64idtitle: "Недействительный Steam64 ID!",
            invalidsteam64idmsg: "Не удалось найти учетную запись Steam, связанную с предоставленным Steam64 ID",
            invalidsteam64iddetail1: "Убедитесь, что значение Steam64 ID, которое вы предоставили, является правильным для вашей учетной записи Steam",
            nonetworkfound: "Не найдено активное сетевое подключение",
            connecttonetwork: "Подключите ваш компьютер к сети и повторите попытку",
            testdefaulterrortitle: "Произошла ошибка!",
            testdefaulterrormsg: "При подключении к Steam Web API произошла ошибка",
            testdefaulterrordetail1: "Пожалуйста, сообщите об этой проблеме на Discord или GitHub!",
            sspath: "Выберите путь для сохранения скриншотов",
            wronguser: user ? `${user} не вошел в систему Steam!` : "Не найдены связанные пользовательские аккаунты!",
            switchuser: "Нажмите здесь, чтобы сменить аккаунт",
            trackingfailed: "Отслеживание не удалось!",
            checkapplog: "Проверьте журнал приложения для получения подробностей",
            soon: "Скоро!",
            gamecomplete: "100% завершено",
            gametitle: "Название игры",
            achievementunlocked: "Достижение разблокировано",
            achievementtitle: "Название достижения",
            allachievements: "Вы разблокировали все достижения!",
            achievementdesc: "Описание достижения",
            show: "Показать",
            quit: "Выйти",
            off: "Выкл.",
            steamss: "Скриншот Steam в игре",
            overlayss: "Скриншот с наложением уведомления",
            match: "Настройка подбора",
            topleft: "Верхний левый",
            topcenter: "Верхний центр",
            topright: "Верхний правый",
            bottomleft: "Нижний левый",
            bottomcenter: "Нижний центр",
            bottomright: "Нижний правый",
            solid: "Сплошной",
            gradient: "Градиент",
            bgimg: "Фоновое изображение",
            gameart: "Игровое искусство",
            up: "Вверх",
            down: "Вниз",
            left: "Влево",
            right: "Вправо",
            tracking: "Сейчас отслеживание"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Выберите звуковой файл для воспроизведения при разблокировке достижения" : "Выберите папку с аудиофайлами для проигрывания случайного звука при разблокировке достижения");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Вот журнал событий с момента запуска приложения в"
            },
            copylbl: {
                elem: "Копировать содержимое журнала"
            },
            openlbl: {
                elem: "Создать файл журнала"
            },
        }

        return translations
    }
}