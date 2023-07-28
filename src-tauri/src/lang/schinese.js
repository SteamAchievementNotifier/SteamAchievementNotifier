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
                tt: "预览所选的声音"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "默认（未选择音频文件）" : custom.sounddir ? custom.sounddir : "默认（未选择音频文件夹）"
            },              
            soundmodelbl: {
                elem: "声音模式："
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "文件" : "随机化"
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
                tt: "Steam 未运行"
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
                placeholder: "请输入您的API密钥",
                tt: "与您的 Steam 帐户关联的 Steam Web API 密钥"
            },
            eyebtn: {
                tt: "切换 API 密钥的可见性"
            },
            apikeylbl: {
                elem: "获取 API 密钥"
            },
            steam64idbtn: {
                tt: "点击此处获取您的 Steam64 ID"
            },
            steam64id: {
                placeholder: "请输入您的Steam64 ID",
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
                elem: "开机自启动",
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
                tt: "禁用主应用程序窗口以节省系统资源。通过系统托盘图标提供最少选项与应用程序交互",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "稀有度百分比",
                tt: `只显示全球解锁百分比低于该数字的成就为"稀有"通知`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "仅声音模式",
                tt: "禁用通知，但在解锁成就时播放所选的声音",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "显示所有解锁百分比",
                tt: "在所有通知类型中显示全球解锁百分比",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "复制到外部窗口",
                tt: "复制到外部窗口",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "显示成就统计窗口",
                tt: "显示成就统计窗口",
                query: ".sanboxlbl"
            },
            track: {
                elem: `显示“正在跟踪中”通知`,
                tt: `启动游戏时切换“正在跟踪中”通知`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "选择自动截图的模式"
            },
            displayscreenshot: {
                elem: "在通知中显示截图",
                tt: "在成就通知中显示截图预览",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam 截图按键绑定",
                tt: "将 Steam 客户端截图按键与解锁成就时进行原生 Steam 截图匹配",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "主要通知覆盖层"
            },
            ovtabrare: {
                tt: "稀有通知覆盖层"
            },
            ovtabplat: {
                tt: "100% 通知覆盖层"
            },
            monitor: {
                elem: "显示器",
                tt: "选择用作截图源的显示器",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "覆盖层位置",
                tt: "设置通知覆盖层的位置",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "路径",
                tt: "设置截图保存的路径",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "预览",
                tt: "预览通知覆盖层",
                query: "label"
            },
            noanim: {
                elem: "禁用应用程序窗口动画",
                tt: "禁用应用程序窗口的过渡动画",
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
                tt: "触发时打开通知的开发工具面板",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "查看隐私政策",
                tt: "查看 Steam Achievement Notifier 的隐私政策",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "加入 Beta 渠道",
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
                tt: "下一个"
            },
            tabbtnprev: {
                tt: "返回"
            },
            notificationpreset: {
                elem: "预设",
                query: ".sanboxtitle > label"
            },
            preset: {
                elem: "通知预设",
                tt: "选择要自定义的通知预设",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "稀有图标动画",
                tt: "切换图标背景的动画",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "显示所有详情",
                tt: `显示所有可用通知详情`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "显示时间",
                tt: "通知显示的时长",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "缩放",
                tt: "通知的尺寸<br><i>*在预览窗口中不会反映</i>",
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
            style: {
                elem: "风格",
                query: ".sanboxtitle > label"
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
                elem: "背景图像",
                tt: "选择要设置为通知背景的图像文件",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "游戏艺术亮度",
                tt: "设置游戏艺术背景的亮度",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "圆角",
                tt: "设置通知的圆角程度",
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
                tt: "设置主要通知颜色",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "次要颜色",
                tt: "设置次要通知颜色",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "文本颜色",
                tt: "设置文本颜色",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "文本轮廓",
                tt: "为所有通知文本添加轮廓",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "轮廓颜色",
                tt: "设置文本轮廓的颜色",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "文本阴影",
                tt: "为所有通知文本添加阴影",
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
                elem: "图标圆角",
                tt: "设置通知图标的圆角程度",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "使用自定义图标",
                tt: "使用图像文件作为自定义图标",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "自定义图标",
                tt: "选择要设置为自定义图标的图像文件",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `重置自定义图标`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "使用自定义 100% 图标",
                tt: `将图像文件用作自定义 100% 图标`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "自定义 100% 图标",
                tt: `选择一个图像文件设置为自定义 100% 图标`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `重置自定义 100% 图标`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "使用游戏图标",
                tt: "使用当前游戏的图标",
                query: ".sanboxlbl"
            },
            position: {
                elem: "位置",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "屏幕位置",
                tt: "设置通知在屏幕上的位置",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "使用自定义位置",
                tt: "为通知使用自定义位置",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "设置位置",
                tt: "为通知设置自定义位置",
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
                elem: "Steam Web API 数据使用"
            },
            ppusagecontent: {
                elem: `Steam 成就通知器使用 Valve 的 <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> 通过用户提供给应用程序的 Steam API 密钥/Steam64 ID 组合来检索和显示与用户的 Steam 帐户相关的数据。这些数据包括：`
            },
            ppstats: {
                elem: "已锁定和已解锁成就的统计数据"
            },
            ppusername: {
                elem: "您的 Steam 用户名"
            },
            ppsteamgames: {
                elem: "您已玩的 Steam 游戏"
            },
            ppusagefooter: {
                elem: "Steam 成就通知器将来可能使用更多的 Steam Web API 数据来提供其他应用程序功能和更新。"
            },
            ppkey64title: {
                elem: "Steam API 密钥/Steam64 ID 使用"
            },
            ppauth: {
                elem: "Steam 成就通知器要求用户输入其 Steam API 密钥/Steam64 ID 组合以通过 Steam Web API 进行身份验证访问。"
            },
            ppnoauth: {
                elem: "如果没有这些信息，将无法访问用于检索与用户的 Steam 帐户相关的数据（包括成就数据）的网页链接（由 Valve 提供，用于访问 Steam Web API）。"
            },
            ppstoragetitle: {
                elem: "Steam Web API 数据存储"
            },
            ppstorage: {
                elem: "Steam 成就通知器在用户的个人电脑上临时存储 Steam Web API 数据，仅供应用程序内部使用。所有非持久性的 Steam Web API 数据在应用程序退出时将从本地存储中清除，这是正常情况下的操作。"
            },
            pppersist: {
                elem: "仅存储在用户设备上的持久数据包括应用程序为用户方便存储的数据，如用户的 Steam Web API 密钥和 Steam64 ID。"
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
                elem: "Steam 成就通知器绝对不会在未经用户明确许可的情况下发送或存储用户数据到用户的本地文件系统之外。这包括通过 Steam Web API 检索的任何用于应用程序内部使用的信息，包括为访问 Steam Web API 提供给应用程序的 Steam API 密钥/Steam64 ID 组合。"
            },
            ppconsent: {
                elem: "通过确认同意并随后使用现有或未来的功能实现来将信息发送到外部，用户会默认授予此类权限。在这些情况下，用户将始终被告知发送的数据的性质，并被提示确认是否同意将数据发送到应用程序之外。"
            },
            ppexclude: {
                elem: "Steam 成就通知器有意排除任何外部访问、查看或收集用户向应用程序提供的任何信息的方式，但通过现有或未来的功能实现，应用程序可能能够代表用户向外部发送数据，但只有在用户同意的情况下才能这样做。"
            },
            pprequests: {
                elem: "从应用程序内部发起对 Steam Web API 数据的访问请求时，使用的是内置方法，类似于网页浏览器提供的功能。这些请求包含用户的 Steam API 密钥/Steam64 ID 组合，根据 Steam Web API 的要求，但绝不会故意提供给其他任何应用程序使用或拦截。"
            },
            ppusertitle: {
                elem: "用户责任"
            },
            ppsteamtou: {
                elem: `通过下载并使用 Steam 成就通知器的任何正式发布版本，您作为用户，顺带地遵守 <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">Steam Web API 使用条款</span> 的第 7 和第 8 节。`
            },
            gamedetails: "游戏详情",
            mustbepublic: "必须设置为公开",            
            nosoundfile: "默认（未选择声音文件）",
            nosoundfolder: "默认（未选择声音文件夹）",
            file: "文件",
            randomised: "随机",            
            audioselectdialog: `选择声音文件${custom.mode === "file" ? "路径" : "文件夹"}`,
            imgselectdialog: `选择图像文件`,
            unsupported: "不支持的文件！",
            novalidaudiofiles: "没有有效的音频文件！",
            nolocate: "无法找到文件！",
            switchaccountstitle: "切换账户",
            noaccounts: "添加一个账户以开始使用！",
            connecting: "连接中...",
            connected: "已连接",
            testsuccessuser: `一切正常`,
            testsuccess1: `请确保您的 <span>游戏详情</span> 在 <a href="${privacysettings}">Steam 的隐私设置</a> 中设置为 <span>公开</span>`,
            testsuccess2: `检查您的游戏显示模式是否设置为 <span>无边框</span>，以便通知显示在游戏窗口上方`,
            noapikeytitle: "无 API 密钥",
            noapikeytxt: "请输入您的 API 密钥",
            noapikeyhint: `点击 <img src="./icon/key.svg" alt=""> 图标获取您的 API 密钥`,
            nosteam64idtitle: "无 Steam64 ID",
            nosteam64idtxt: "请输入您的 Steam64 ID",
            nosteam64idhint: `点击 <img src="./icon/id.svg" alt=""> 图标获取您的 Steam64 ID`,
            invalidapikeytitle: "无效的 API 密钥！",
            invalidapikeymsg: "使用提供的 API 密钥无法访问 Steam Web API",
            invalidapikeydetail1: "检查您的 API 密钥是否正确",
            invalidapikeydetail2: "为您的账户重新生成一个新的 API 密钥",
            invalidsteam64idtitle: "无效的 Steam64 ID！",
            invalidsteam64idmsg: "找不到与提供的 Steam64 ID 关联的 Steam 账户",
            invalidsteam64iddetail1: "检查您提供的 Steam64 ID 值是否是您的 Steam 账户的正确值",
            nonetworkfound: "未找到活动网络连接",
            connecttonetwork: "将您的 PC 连接到网络，然后重试",
            testdefaulterrortitle: "发生错误！",
            testdefaulterrormsg: "连接到 Steam Web API 时发生错误",
            testdefaulterrordetail1: "请在 Discord 或 GitHub 上报告此问题！",
            sspath: "选择截图路径",
            wronguser: user ? `${user} 未登录 Steam！` : "找不到关联的用户账户！",
            switchuser: "点击此处切换账户",
            trackingfailed: "跟踪失败！",
            checkapplog: "查看应用日志获取详细信息",
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
            overlayss: "带有通知叠加层的截图",
            match: "自定义匹配",
            topleft: "左上角",
            topcenter: "上居中",
            topright: "右上角",
            bottomleft: "左下角",
            bottomcenter: "下居中",
            bottomright: "右下角",
            solid: "纯色",
            gradient: "渐变",
            bgimg: "背景图像",
            gameart: "游戏艺术",
            up: "上",
            down: "下",
            left: "左",
            right: "右",
            tracking: "正在跟踪"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "选择一个声音文件，在解锁成就时播放" : "选择一个包含音频文件的文件夹，在解锁成就时随机播放")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "这是自应用启动以来发生的日志记录"
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