export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "未检测到用户",
                tt: "当前正在跟踪成就的 Steam 用户"
            },
            gamelbl: {
                elem: gameName ? gameName : "未检测到游戏",
                tt: "当前正在跟踪成就的游戏"
            },
            previewbtn: {
                tt: "预览所选声音"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "預設（未選擇音訊檔案）" : custom.sounddir ? custom.sounddir : "預設（未選擇音訊資料夾）"
            },
            soundmodelbl: {
                elem: "声音模式:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "文件" : "随机"
            },
            togglemain: {
                elem: "主要",
                tt: "主要成就通知"
            },
            togglerare: {
                elem: "稀有",
                tt: "稀有成就通知"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% 成就通知"
            },
            progresscirclewrapper: {
                tt: "显示定制通知的预览"
            },
            testbtnwrapper: {
                elem: "显示测试通知",
                tt: "显示定制通知的预览",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "自定义...",
                tt: "打开通知定制菜单",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "未运行 Steam"
            },
            updatebtn: {
                tt: "有可用更新"
            },
            kofibtn: "在 Ko-Fi 上捐赠！",
            discordbtn: "加入 Discord！",
            githubbtn: "在 GitHub 上报告问题！",            
            settingstitlelbl: {
                elem: "设置"
            },
            configuration: {
                elem: "配置",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "语言",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "操作系统",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "通知",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "截图",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "辅助功能",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "其他",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "版本"
            },            
            apikeybtn: {
                tt: "点击此处获取您的 Steam Web API 密钥"
            },
            apikey: {
                placeholder: "輸入您的 API 金鑰",
                tt: "与您的 Steam 帐户关联的 Steam Web API 密钥"
            },
            eyebtn: {
                tt: "切换 API 密钥可见性"
            },
            apikeylbl: {
                elem: "获取 API 密钥"
            },
            steam64idbtn: {
                tt: "点击此处获取您的 Steam64 ID"
            },
            steam64id: {
                placeholder: "輸入您的 Steam64 ID",
                tt: "与您的 Steam 帐户关联的 Steam64 ID"
            },
            steam64idlbl: {
                elem: "获取 Steam64 ID"
            },
            switchaccountspan: {
                elem: "切换帐户"
            },
            switchaccountbtn: {
                tt: "在关联的 Steam 帐户之间切换"
            },
            testconnectionlbl: {
                elem: "测试连接",
                tt: "测试与 Steam Web API 的连接"
            },            
            lang: {
                tt: "设置界面和通知的语言"
            },
            desktop: {
                elem: "创建桌面快捷方式",
                tt: "在桌面上创建一个启动应用程序的快捷方式",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "开机启动",
                tt: "在 Windows 启动时自动运行应用程序",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "启动后最小化",
                tt: "启动应用程序后将其最小化到系统托盘",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "禁用硬件加速",
                tt: "禁用应用程序窗口的硬件加速",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "精简模式",
                tt: "禁用主应用程序窗口以节省系统资源。通过系统托盘图标仍然可以使用最少选项与应用程序进行交互",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "稀有度百分比",
                tt: `只有全球解锁百分比低于此数值的成就将显示为“稀有”通知`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "仅声音模式",
                tt: "禁用通知，但在解锁成就时播放所选声音",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "显示所有解锁百分比",
                tt: "在所有通知类型中显示全球解锁百分比",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "复制到外部窗口",
                tt: `外部視窗，複製所有通知。可以被流媒體/螢幕捕捉軟體定位。<div class="ttwarn">此視窗完全<u>透明</u>。若要標記視窗的目前位置，請按住<span class="ttcode">Ctrl</span>鍵。</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `显示“正在跟踪”通知`,
                tt: `在启动游戏时切换“正在跟踪”通知`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "通知快捷方式",
                tt: "設定鍵盤快捷鍵以觸發測試通知",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "設定快捷鍵以觸發此類型的測試通知"
            },
            sctabmain: {
                tt: "主要通知快捷鍵"
            },
            sctabrare: {
                tt: "罕見通知快捷鍵"
            },
            sctabplat: {
                tt: "100%通知快捷鍵"
            },
            screenshotmode: {
                tt: "选择自动成就截图的模式"
            },
            displayscreenshot: {
                elem: "在通知中显示截图",
                tt: "在成就通知中显示截图预览",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam 成就截图按键",
                tt: "将 Steam 客户端的按键与解锁成就时进行原生 Steam 截图匹配",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `主通知覆盖层`
            },
            ovtabrare: {
                tt: `稀有通知覆盖层`
            },
            ovtabplat: {
                tt: `100% 通知覆盖层`
            },
            monitor: {
                elem: "显示器",
                tt: "选择用作截图来源的显示器",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "覆盖层位置",
                tt: "设置通知覆盖层的位置",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "路径",
                tt: "设置保存截图的路径",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "预览",
                tt: `预览通知覆盖层`,
                query: "label"
            },
            noanim: {
                elem: "禁用应用程序窗口动画",
                tt: "禁用应用程序窗口内的过渡动画",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "启用 NVDA 支持",
                tt: "将通知内容复制到剪贴板，以便由 NVDA 屏幕阅读器软件阅读",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "显示工具提示",
                tt: "在悬停在应用程序元素上时切换工具提示",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "显示通知开发工具",
                tt: "在触发时打开通知的开发工具面板",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "查看隐私政策",
                tt: "查看 Steam 成就通知的隐私政策",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "加入测试通道",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "打开应用程序日志",
                tt: "查看并共享应用程序日志的内容",
                query: "label"
            },
            resetbtn: {
                elem: "重置应用程序",
                tt: "删除所有存储的数据并重新启动应用程序",
                query: "label"
            },            
            customiserplaystate: {
                tt: "暂停/播放通知动画"
            },
            customiserreplay: {
                tt: "重新播放通知动画"
            },
            customisersavepreset: {
                tt: "将当前自定义保存为新的通知预设"
            },
            tabbtnnext: {
                tt: "下一步"
            },
            tabbtnprev: {
                tt: "返回"
            },
            notificationpreset: {
                elem: "预设",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "通知预设",
                tt: "选择一个要自定义的通知预设",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "稀有图标动画",
                tt: `切换图标背景的动画`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "顯示所有詳情",
                tt: `顯示所有可用通知詳情`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "显示时间",
                tt: "通知将显示的时间长度",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "缩放",
                tt: "通知的大小<br><i>*不在预览窗口中反映</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "自定义文本",
                tt: "在通知中显示自定义消息",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "使用游戏标题",
                tt: "在通知中显示当前游戏的标题",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "自訂字型",
                tt: "上傳自訂字型檔案，套用於通知內所有文字元素",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "重設為預設字型"
            },
            style: {
                elem: "样式",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "背景样式",
                tt: "设置通知背景的样式",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "渐变角度",
                tt: "设置颜色渐变的角度",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "背景图片",
                tt: "选择一个图像文件作为通知的背景",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "游戏艺术亮度",
                tt: "设置游戏艺术背景的亮度",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "圆角度",
                tt: "设置通知的圆角度数",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "字体大小",
                tt: "设置字体的比例",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "不透明度",
                tt: "设置通知的不透明度",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "仅背景",
                tt: "只对背景应用不透明度，使文本和图像完全不透明",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "颜色",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "主要颜色",
                tt: "设置主要的通知颜色",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "次要颜色",
                tt: "设置次要的通知颜色",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "文本颜色",
                tt: "设置文本的颜色",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "文本描边",
                tt: "给所有通知文本应用描边",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "描边颜色",
                tt: "设置文本描边的颜色",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "文本阴影",
                tt: "给所有通知文本应用阴影",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "阴影颜色",
                tt: "设置文本阴影的颜色",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "图标",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "图标圆角度",
                tt: "设置通知图标的圆角度数",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "使用自定义图标",
                tt: `使用图像文件作为自定义图标`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "自定义图标",
                tt: `选择一个图像文件作为自定义图标`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `重置自訂圖示`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "使用自訂 100% 圖示",
                tt: `使用圖像檔案作為自訂 100% 圖示`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "自訂 100% 圖示",
                tt: `選擇一個圖像檔案設定為自訂 100% 圖示`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `重設自訂 100% 圖示`,
                query: ".sanboxlbl"
            },                     
            usegameicon: {
                elem: "使用游戏图标",
                tt: `使用当前游戏的图标`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "位置",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "屏幕位置",
                tt: `设置通知在屏幕上的位置`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "使用自定义位置",
                tt: "使用自定义位置来设置通知",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "设置位置",
                tt: "设置通知的自定义位置",
                query: "label"
            },
            animdir: {
                elem: "动画方向",
                tt: "设置通知的动画方向",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "隐私政策"
            },
            ppusagetitle: {
                elem: "STEAM WEB API 数据使用"
            },
            ppusagecontent: {
                elem: `Steam 成就通知器使用 Valve 的 <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> 来检索和显示与用户的 Steam 帐户相关的数据，通过用户提供给应用程序的 Steam API 密钥/Steam64 ID 组合。这些数据包括：`
            },
            ppstats: {
                elem: "已锁定和已解锁成就的统计信息"
            },
            ppusername: {
                elem: "您的 Steam 用户名"
            },
            ppsteamgames: {
                elem: "您已玩过的 Steam 游戏"
            },
            ppusagefooter: {
                elem: "Steam 成就通知器将来可能使用更多的 Steam Web API 数据来提供额外的应用程序功能和更新。"
            },
            ppkey64title: {
                elem: "STEAM API 密钥/STEAM64 ID 使用"
            },
            ppauth: {
                elem: "Steam 成就通知器需要用户输入他们的 Steam API 密钥/Steam64 ID 组合以进行对 Steam Web API 的身份验证访问。"
            },
            ppnoauth: {
                elem: "如果没有这些信息，无法访问用于检索与用户的 Steam 帐户相关的数据（包括成就数据）的 Web 链接（由 Valve 提供用于访问 Steam Web API）。"
            },
            ppstoragetitle: {
                elem: "STEAM WEB API 数据存储"
            },
            ppstorage: {
                elem: "Steam 成就通知器在用户的计算机上临时存储 Steam Web API 数据，仅供应用程序内部使用。任何临时存储的数据仅用于 Steam 成就通知器，并且在正常情况下，所有非持久性的 Steam Web API 数据将在退出应用程序时从本地存储中清除。"
            },
            pppersist: {
                elem: "存储在用户设备上的持久数据仅包括应用程序为用户方便而存储的数据，例如用户的 Steam Web API 密钥和 Steam64 ID。"
            },
            ppdelete: {
                elem: "如果需要，用户还可以随时手动删除这些数据。Steam 成就通知器创建的文件位于以下目录："
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "目前不支持"
            },
            ppcollecttitle: {
                elem: "数据收集立场"
            },
            ppnosend: {
                elem: "Steam 成就通知器将<u>永远不会</u>在未经用户明确许可的情况下发送或存储用户数据到用户的本地文件系统之外。这包括通过 Steam Web API 检索到的用于应用程序内部使用的任何信息，包括为访问 Steam Web API 提供给应用程序的 Steam API 密钥/Steam64 ID 组合。"
            },
            ppconsent: {
                elem: "通过确认同意并随后使用现有或未来的旨在发送信息到外部的功能实现，用户会隐含地授予应用程序进行此操作的权限。在这些情况下，用户将始终被告知发送的数据的性质，并将被提示确认是否同意将数据发送到应用程序之外。"
            },
            ppexclude: {
                elem: "Steam 成就通知器有意排除任何外部访问、查看或收集用户提供给应用程序的任何信息的方式，但通过现有或未来的功能实现，应用程序可能能够代表用户外部发送数据，但前提是用户同意这样做。"
            },
            pprequests: {
                elem: "从应用程序内部发出的对 Steam Web API 数据的访问请求使用内置方法进行，类似于网页浏览器提供的功能。这些请求包含用户的 Steam API 密钥/Steam64 ID 组合，按照 Steam Web API 的要求，但绝不会故意提供给其他任何应用程序使用或截取。"
            },
            ppusertitle: {
                elem: "用户责任"
            },
            ppsteamtou: {
                elem: `通过通过 <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">官方 GitHub 存储库</span> 下载和使用任何正式发布的 Steam 成就通知器版本，您，作为用户，自然而然地遵守 <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">Steam Web API 使用条款</span> 的第 7 和第 8 节。`
            },
            gamedetails: "遊戲詳細資料",
            mustbepublic: "必須設置為公開",            
            nosoundfile: "預設值（未選擇音訊檔案）",
            nosoundfolder: "預設值（未選擇音訊資料夾）",
            file: "檔案",
            randomised: "隨機",            
            audioselectdialog: `选择${custom.mode === "file" ? "音频文件" : "文件夹"}`,
            imgselectdialog: `选择图片文件`,
            unsupported: "不支持的文件！",
            novalidaudiofiles: "没有有效的音频文件！",
            nolocate: "无法找到文件！",
            switchaccountstitle: "切换帐户",
            noaccounts: "添加一个帐户以开始使用！",
            connecting: "连接中...",
            connected: "已连接",
            testsuccessuser: `您可以开始使用`,
            testsuccess1: `请确保您的<a href="${privacysettings}">Steam隐私设置</a>中的<span>游戏详细信息</span>设置为<span>公开</span>`,
            testsuccess2: `检查您的游戏显示模式是否设置为<span>无边框</span>，以便通知显示在游戏窗口上方`,
            noapikeytitle: "没有 API 密钥",
            noapikeytxt: "请输入您的 API 密钥",
            noapikeyhint: `单击 <img src="./icon/key.svg" alt=""> 图标以获取您的 API 密钥`,
            nosteam64idtitle: "没有 Steam64 ID",
            nosteam64idtxt: "请输入您的 Steam64 ID",
            nosteam64idhint: `单击 <img src="./icon/id.svg" alt=""> 图标以获取您的 Steam64 ID`,
            invalidapikeytitle: "无效的 API 密钥！",
            invalidapikeymsg: "无法使用提供的 API 密钥访问 Steam Web API",
            invalidapikeydetail1: "请检查您的 API 密钥是否正确",
            invalidapikeydetail2: "为您的帐户重新生成一个新的 API 密钥",
            invalidsteam64idtitle: "无效的 Steam64 ID！",
            invalidsteam64idmsg: "无法找到与提供的 Steam64 ID 相关联的 Steam 帐户",
            invalidsteam64iddetail1: "请检查您提供的 Steam64 ID 值是否正确",
            nonetworkfound: "未找到活动网络连接",
            connecttonetwork: "将您的计算机连接到网络，然后重试",
            testdefaulterrortitle: "发生错误！",
            testdefaulterrormsg: "连接到 Steam Web API 时发生错误",
            testdefaulterrordetail1: "请在 Discord 或 GitHub 上报告此问题！",
            sspath: "选择截图路径",
            wronguser: user ? `${user}未登录 Steam！` : "未找到关联的用户帐户！",
            switchuser: "点击此处切换帐户",
            trackingfailed: "跟踪失败！",
            checkapplog: "查看应用程序日志以获取详细信息",
            soon: "即将推出！",
            gamecomplete: "100% 完成",
            gametitle: "游戏标题",
            achievementunlocked: "解锁成就",
            achievementtitle: "成就标题",
            allachievements: "您已解锁所有成就！",
            achievementdesc: "成就描述",
            show: "显示",
            quit: "退出",
            off: "关闭",
            steamss: "Steam 游戏内截图",
            overlayss: "带有通知覆盖的截图",
            match: "匹配定制",
            topleft: "左上",
            topcenter: "上居中",
            topright: "右上",
            bottomleft: "左下",
            bottomcenter: "下居中",
            bottomright: "右下",
            solid: "纯色",
            gradient: "渐变",
            bgimg: "背景图像",
            gameart: "游戏艺术",
            up: "上",
            down: "下",
            left: "左",
            right: "右",            
            tracking: "現在追蹤",
            inuse: "使用中",
            invalidshortcut: "無效快捷鍵",
            nofont: "未選取字型",
            fontselectdialog: "選取字型檔案"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "选择一个声音文件，在解锁成就时播放" : "选择一个包含音频文件的文件夹，在解锁成就时随机播放")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "自应用启动以来的日志记录如下"
            },
            copylbl: {
                elem: "复制日志内容"
            },
            openlbl: {
                elem: "生成日志文件"
            },            
        }

        return translations
    }
}