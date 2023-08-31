export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Не виявлено користувача",
                tt: "Користувач Steam, для якого відстежуються досягнення"
            },
            gamelbl: {
                elem: gameName ? gameName : "Не виявлено гру",
                tt: "Гра, для якої відстежуються досягнення"
            },
            previewbtn: {
                tt: "Попередній перегляд вибраного звуку"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "За замовчуванням (Не обрано жодного звукового файлу)" : custom.sounddir ? custom.sounddir : "За замовчуванням (Не обрано жодної папки зі звуками)"
            },              
            soundmodelbl: {
                elem: "Режим звуку:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "файл" : "випадковий"
            },
            togglemain: {
                elem: "Головний",
                tt: "Сповіщення про головні досягнення"
            },
            togglerare: {
                elem: "Рідкісний",
                tt: "Сповіщення про рідкісні досягнення"
            },
            toggleplat: {
                elem: "100%",
                tt: "Сповіщення про досягнення на 100%"
            },
            progresscirclewrapper: {
                tt: "Показати попередній перегляд налаштованого сповіщення"
            },
            testbtnwrapper: {
                elem: "Показати тестове сповіщення",
                tt: "Показати попередній перегляд налаштованого сповіщення",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Налаштувати...",
                tt: "Відкрити меню налаштування сповіщень",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam не працює"
            },
            updatebtn: {
                tt: "Доступне оновлення"
            },
            kofibtn: "Пожертвувати на Ko-Fi!",
            discordbtn: "Приєднуйтесь на Discord!",
            githubbtn: "Повідомити про проблему на GitHub!",
            settingstitlelbl: {
                elem: "Налаштування"
            },
            configuration: {
                elem: "Конфігурація",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Мова",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "ОС",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Сповіщення",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Знімки екрана",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Доступність",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Інше",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Версія"
            },            
            apikeybtn: {
                tt: "Натисніть тут, щоб отримати свій ключ Steam Web API"
            },
            apikey: {
                placeholder: "Введіть свій API ключ",
                tt: "Ключ Steam Web API, пов'язаний з вашим обліковим записом Steam"
            },
            eyebtn: {
                tt: "Перемикач видимості ключа API"
            },
            apikeylbl: {
                elem: "Отримати ключ API"
            },
            steam64idbtn: {
                tt: "Натисніть тут, щоб отримати свій ідентифікатор Steam64"
            },
            steam64id: {
                placeholder: "Введіть свій Steam64 ID",
                tt: "Ідентифікатор Steam64, пов'язаний з вашим обліковим записом Steam"
            },
            steam64idlbl: {
                elem: "Отримати ID Steam64"
            },
            switchaccountspan: {
                elem: "Змінити обліковий запис"
            },
            switchaccountbtn: {
                tt: "Перемикатися між пов'язаними обліковими записами Steam"
            },
            testconnectionlbl: {
                elem: "Тест підключення",
                tt: "Перевірте підключення до Steam Web API"
            },
            lang: {
                tt: "Встановіть мову для інтерфейсу та сповіщень"
            },            
            desktop: {
                elem: "Створити ярлик на робочому столі",
                tt: "Створити ярлик на робочому столі для запуску програми",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Запускати разом з Windows",
                tt: "Автоматичний запуск програми при запуску Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Запускати у згорнутому вигляді",
                tt: "Згорнути програму до піктограми в системному лотку після запуску",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Вимкнути апаратне прискорення",
                tt: "Вимкнути апаратне прискорення для вікна програми",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Режим спрощення",
                tt: "Вимкнути головне вікно програми для збереження системних ресурсів. Мінімальні параметри будуть доступні через піктограму в системному лотку для взаємодії з програмою",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Відсоток рідкості",
                tt: `Показувати як "Рідкісні" сповіщення лише досягнень з глобальним відсотком розблокування нижче цього числа`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Режим лише звуку",
                tt: "Вимкнути сповіщення, але відтворювати вибраний звук при розблокуванні досягнення",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Показати всі відсотки",
                tt: "Відображати глобальні відсотки розблокування в усіх типах сповіщень",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Дублювати в зовнішнє вікно",
                tt: `Зовнішнє вікно, яке дублює всі сповіщення. Може бути ціллю програм для стрімінгу / знімання екрану.<div class="ttwarn">Це вікно повністю <u>прозоре</u>. Щоб виділити поточне положення вікна, утримуйте клавішу <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Показати "Зараз відстежується"`,
                tt: `Перемкнути сповіщення "Зараз відстежується" під час запуску гри`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Скорочення повідомлень",
                tt: "Встановіть гарячу клавішу для спрацьовування тестових повідомлень",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Встановіть скорочення для спрацьовування тестового повідомлення цього типу"
            },
            sctabmain: {
                tt: "Основне скорочення повідомлення"
            },
            sctabrare: {
                tt: "Рідкісне скорочення повідомлення"
            },
            sctabplat: {
                tt: "100% скорочення повідомлення"
            },
            screenshotmode: {
                tt: "Виберіть режим для автоматичних знімків досягнень"
            },
            displayscreenshot: {
                elem: "Показати скріншот",
                tt: "Показати попередній перегляд знімків екрана в сповіщенні досягнень",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Гаряча клавіша Steam",
                tt: "Відповідно до вашої гарячої клавіші клієнта Steam, робити знімки екрана в нативному режимі Steam при розблокуванні досягнень",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Основне сповіщення`
            },
            ovtabrare: {
                tt: `Рідкісне сповіщення`
            },
            ovtabplat: {
                tt: `Сповіщення про 100%`
            },
            monitor: {
                elem: "Монітор",
                tt: "Вибрати монітор для використання як джерело знімків екрана",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Позиція",
                tt: "Встановити положення сповіщення",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Шлях",
                tt: "Встановити шлях, де будуть збережені знімки екрана",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Попередній перегляд",
                tt: `Попередній перегляд сповіщення`,
                query: "label"
            },
            noanim: {
                elem: "Вимкнути анімацію вікна програми",
                tt: "Вимкнути анімацію переходів у вікні програми",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Увімкнути підтримку NVDA",
                tt: "Копіювати вміст сповіщення в буфер обміну для читання за допомогою програмного забезпечення для зчитування екрана NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Показувати підказки",
                tt: "Перемкнути показ підказок при наведенні на елементи програми",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Показати сповіщення DevTools",
                tt: "Відкрити панель інструментів розробника сповіщень при її активації",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Політика конфіденційності",
                tt: "Переглянути політику конфіденційності Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Бета-канал",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Відкрити журнал програми",
                tt: "Переглянути та поділитися вмістом журналу програми",
                query: "label"
            },
            resetbtn: {
                elem: "Скинути програму",
                tt: "Видалити всі збережені дані та перезапустити програму",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Пауза/відтворення анімації сповіщення"
            },
            customiserreplay: {
                tt: "Повторити анімацію сповіщення"
            },
            customisersavepreset: {
                tt: "Зберегти поточні налаштування як новий шаблон сповіщення"
            },
            tabbtnnext: {
                tt: "Далі"
            },
            tabbtnprev: {
                tt: "Назад"
            },
            notificationpreset: {
                elem: "Шаблон",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Шаблон сповіщення",
                tt: "Виберіть шаблон сповіщення для налаштування",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Рідкісна анімація",
                tt: "Увімкнути або вимкнути анімацію фону значка",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Показати всі деталі",
                tt: `Показати всі доступні деталі сповіщень`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Час відображення",
                tt: "Тривалість відображення сповіщення",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Масштаб",
                tt: "Розмір сповіщення<br><i>*Не відображається в попередньому вікні</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Власний текст",
                tt: "Показати власне повідомлення у сповіщенні",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Назва гри",
                tt: "Показати назву поточної гри у сповіщенні",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Власний Шрифт",
                tt: "Завантажте файл власного шрифту, щоб застосувати його до всіх елементів тексту в сповіщенні",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Скинути на шрифт за замовчуванням"
            },
            style: {
                elem: "Стиль",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Стиль фону",
                tt: "Встановити стиль фону сповіщення",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Кут градієнта",
                tt: "Встановити кут кольорового градієнту",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Зображення фону",
                tt: "Виберіть файл зображення для встановлення як фон сповіщення",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Яскравість",
                tt: "Встановити яскравість фону графіки гри",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Закругленість",
                tt: "Встановити ступінь закругленості кутиків сповіщення",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Розмір шрифту",
                tt: "Встановити масштаб шрифту",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Прозорість",
                tt: "Встановити прозорість сповіщення",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Тільки фон",
                tt: "Застосовувати прозорість лише до фону, залишаючи текст та зображення повністю непрозорими",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Кольори",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Основний колір",
                tt: "Встановити основний колір сповіщення",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Додатковий колір",
                tt: "Встановити додатковий колір сповіщення",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Колір тексту",
                tt: "Встановити колір тексту",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Контур тексту",
                tt: "Застосувати контур до всього тексту сповіщення",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Колір контуру",
                tt: "Встановити колір контуру тексту",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Тінь тексту",
                tt: "Застосувати тінь до всього тексту сповіщення",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Колір тіні",
                tt: "Встановити колір тіні тексту",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Значок",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Закругленість значка",
                tt: "Встановити закругленість значка сповіщення",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Власний значок",
                tt: "Використовувати зображення файлу як власний значок",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Власний значок",
                tt: "Виберіть файл зображення для встановлення як власний значок",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Скинути користувацьку іконку`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Власний значок 100%",
                tt: `Використовуйте зображення файлу як 100% іконку`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Власний значок 100%",
                tt: `Виберіть зображення файлу для встановлення як 100% іконку`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Скинути зображення 100% іконки`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Значок гри",
                tt: "Використовувати значок поточної гри",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Положення",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Положення на екрані",
                tt: "Встановити положення сповіщення на екрані",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Вільна позиція",
                tt: "Використовувати власне положення для сповіщення",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Позиція",
                tt: "Встановити власне положення для сповіщення",
                query: "label"
            },
            animdir: {
                elem: "Напрям анімації",
                tt: "Встановити напрямок анімації сповіщення",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ"
            },
            ppusagetitle: {
                elem: "ВИКОРИСТАННЯ ДАНИХ ВІД ІНТЕРФЕЙСУ STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier використовує <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> від Valve для отримання та відображення даних, що стосуються облікового запису(ів) Steam користувача, за допомогою комбінації Steam API Key/Steam64 ID, наданої програмі користувачем. Ці дані включають:`
            },
            ppstats: {
                elem: "Статистика для закритих та відкритих досягнень"
            },
            ppusername: {
                elem: "Ваше ім'я користувача Steam"
            },
            ppsteamgames: {
                elem: "Гри, які ви грали в Steam"
            },
            ppusagefooter: {
                elem: "У майбутньому Steam Achievement Notifier може використовувати додаткові дані з Steam Web API, щоб забезпечити додаткові функції та оновлення програми."
            },
            ppkey64title: {
                elem: "ВИКОРИСТАННЯ STEAM API KEY/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier вимагає від користувача ввести комбінацію Steam API Key/Steam64 ID для автентифікованого доступу до Steam Web API."
            },
            ppnoauth: {
                elem: "Без цієї інформації неможливо отримати доступ до веб-посилань (наданих Valve для доступу до Steam Web API), призначених для отримання даних, пов'язаних з обліковим записом(ами) Steam користувача, включаючи дані про досягнення."
            },
            ppstoragetitle: {
                elem: "ЗБЕРІГАННЯ ДАНИХ ВІД STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier тимчасово зберігає дані від Steam Web API локально на комп'ютері користувача виключно для використання у програмі. Будь-яке тимчасове збереження цих даних призначене виключно для використання Steam Achievement Notifier, і за звичайних умов всі дані, які не зберігаються постійно в Steam Web API, будуть видалені з локального сховища при виході з програми."
            },
            pppersist: {
                elem: "Постійні дані, збережені на пристрої користувача, включають лише дані, які зберігаються програмою для зручності користувача, такі як Steam Web API Key та Steam64 ID користувача."
            },
            ppdelete: {
                elem: "Ці дані також можуть бути видалені користувачем вручну в будь-який час, якщо це потрібно. Файли, створені Steam Achievement Notifier, знаходяться в наступному каталозі:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Наразі не підтримується"
            },
            ppcollecttitle: {
                elem: "ПОДАННЯ ЗБОРУ ДАНИХ"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier ніколи не буде надсилати або зберігати користувацькі дані за межами локальної файлової системи користувача без явної згоди користувача на це. Це включає будь-яку інформацію, отриману за допомогою Steam Web API для використання у програмі, включаючи комбінацію Steam API Key/Steam64 ID, надану програмі для доступу до Steam Web API."
            },
            ppconsent: {
                elem: "Підтверджуючи згоду та наступне використання як існуючих, так і майбутніх реалізацій функцій, призначених для надсилання інформації зовнішньо, дозвіл на це неявно надається користувачем. У таких випадках користувач завжди буде повідомлений про характер надсиланої інформації і буде запропоновано підтвердити згоду на надсилання даних за межі програми."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier свідомо не надає можливості зовнішнього доступу, перегляду або збору будь-якої інформації, наданої програмі користувачем, але за допомогою наявних або майбутніх функцій програма може відправляти дані зовнішніми засобами від імені користувача, але лише за його згодою на це."
            },
            pprequests: {
                elem: "Запити на доступ до даних з Steam Web API здійснюються в самій програмі за допомогою вбудованих методів, подібних до функціональності, яку надають веб-браузери. Ці запити містять комбінацію Steam API Key/Steam64 ID користувача, які вимагає Steam Web API, але ніколи не надаються для використання або перехоплення будь-якими іншими програмами."
            },
            ppusertitle: {
                elem: "ВІДПОВІДАЛЬНІСТЬ КОРИСТУВАЧА"
            },
            ppsteamtou: {
                elem: `ЗАВАНТАЖУЮЧИ Й ВИКОРИСТОВУЮЧИ БУДЬ-ЯКУ ОФІЦІЙНУ ВЕРСІЮ STEAM ACHIEVEMENT NOTIFIER ЗА ДОПОМОГОЮ <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">ОФІЦІЙНОГО РЕПОЗИТОРІЮ GITHUB</span>, ВИ, КОРИСТУВАЧ, ВІДПОВІДАЄТЕ ЗА ДОТРИМАННЯ РОЗДІЛІВ 7 І 8 УМОВ ВИКОРИСТАННЯ STEAM WEB API.`
            },      
            gamedetails: "Деталі гри",
            mustbepublic: "має бути встановлено як Публічне",            
            nosoundfile: "За замовчуванням (Не вибрано жодного звукового файлу)",
            nosoundfolder: "За замовчуванням (Не вибрано жодної звукової папки)",
            file: "Файл",
            randomised: "Випадковий",            
            audioselectdialog: `Виберіть звук ${custom.mode === "file" ? "Файл" : "Папку"}`,
            imgselectdialog: `Виберіть файл зображення`,
            unsupported: "Непідтримуваний файл!",
            novalidaudiofiles: "Немає дійсних аудіофайлів!",
            nolocate: "Не вдалося знайти файл!",
            switchaccountstitle: "Переключити облікові записи",
            noaccounts: "Додайте обліковий запис, щоб почати!",
            connecting: "Підключення...",
            connected: "Підключено",
            testsuccessuser: `Ви готові до початку`,
            testsuccess1: `Переконайтеся, що ваші <span>Деталі гри</span> встановлені як <span>Публічний</span> у <a href="${privacysettings}">Параметрах конфіденційності Steam</a>`,
            testsuccess2: `Перевірте, що режим відображення у грі встановлено як <span>Режим на всю ширину</span>, щоб повідомлення відображалися над вікном гри`,
            noapikeytitle: "Відсутній ключ API",
            noapikeytxt: "Будь ласка, введіть ваш ключ API",
            noapikeyhint: `Натисніть на <img src="./icon/key.svg" alt=""> зображення, щоб отримати ваш ключ API`,
            nosteam64idtitle: "Відсутній Steam64 ID",
            nosteam64idtxt: "Будь ласка, введіть ваш Steam64 ID",
            nosteam64idhint: `Натисніть на <img src="./icon/id.svg" alt=""> зображення, щоб отримати ваш Steam64 ID`,
            invalidapikeytitle: "Неправильний ключ API!",
            invalidapikeymsg: "Не вдалося отримати доступ до Steam Web API з вказаним ключем API",
            invalidapikeydetail1: "Перевірте, що ваш ключ API введено правильно",
            invalidapikeydetail2: "Створіть новий ключ API для вашого облікового запису",
            invalidsteam64idtitle: "Неправильний Steam64 ID!",
            invalidsteam64idmsg: "Не вдалося знайти обліковий запис Steam, пов'язаний з вказаним Steam64 ID",
            invalidsteam64iddetail1: "Перевірте, що вказане значення Steam64 ID є правильним значенням для вашого облікового запису Steam",
            nonetworkfound: "Не виявлено активного мережевого підключення",
            connecttonetwork: "Підключіть ваш ПК до мережі і спробуйте знову",
            testdefaulterrortitle: "Виникла помилка!",
            testdefaulterrormsg: "Під час з'єднання з Steam Web API сталася помилка",
            testdefaulterrordetail1: "Будь ласка, повідомте про цю проблему на Discord або GitHub!",
            sspath: "Виберіть шлях знімка екрану",
            wronguser: user ? `${user} не увійшов в обліковий запис Steam!` : "Не знайдено зв'язані облікові записи користувачів!",
            switchuser: "Натисніть тут, щоб переключити облікові записи",
            trackingfailed: "Відстеження не вдалося!",
            checkapplog: "Перевірте журнал додатка для отримання деталей",
            soon: "Скоро!",
            gamecomplete: "100% завершено",
            gametitle: "Назва гри",
            achievementunlocked: "Досягнення отримано",
            achievementtitle: "Назва досягнення",
            allachievements: "Ви отримали всі досягнення!",
            achievementdesc: "Опис досягнення",
            show: "Показати",
            quit: "Вийти",
            off: "Вимкнено",
            steamss: "Скріншот Steam In-Game",
            overlayss: "Скріншот з накладанням повідомлення",
            match: "Налаштування співставлення",
            topleft: "Угорі ліворуч",
            topcenter: "Угорі по центру",
            topright: "Угорі праворуч",
            bottomleft: "Унизу ліворуч",
            bottomcenter: "Унизу по центру",
            bottomright: "Унизу праворуч",
            solid: "Однотонний",
            gradient: "Градієнт",
            bgimg: "Зображення фону",
            gameart: "Графіка гри",
            up: "Вгору",
            down: "Вниз",
            left: "Ліворуч",
            right: "Праворуч",
            tracking: "Зараз відстеження",
            inuse: "Використовується",
            invalidshortcut: "Недійсне скорочення",
            nofont: "Шрифт не вибрано",
            fontselectdialog: "Вибрати файл шрифту"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Виберіть звуковий файл, який відтворюватиметься під час отримання досягнення" : "Виберіть папку з аудіофайлами, які відтворюватимуться випадковим чином під час отримання досягнення");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Ось журнал подій, що відбувалися з моменту запуску додатка о"
            },
            copylbl: {
                elem: "Скопіювати вміст журналу"
            },
            openlbl: {
                elem: "Створити файл журналу"
            },
        }

        return translations
    }
}