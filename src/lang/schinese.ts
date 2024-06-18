export const translations = {
    global: {
        main: "主要",
        rare: "稀有",
        plat: "100%",
        topleft: "左上角",
        topcenter: "顶部中心",
        topright: "右上角",
        bottomleft: "左下角",
        bottomcenter: "底部中心",
        bottomright: "右下角",
        ok: "确定",
        preview: "预览",
        save: "保存",
        back: "返回",
        settings: "设置",
        appversion: "应用程序版本",
        image: "图片",
        audio: "音频",
        folder: "文件夹",
        font: "字体",
        select: "选择",
        gametitle: "游戏标题",
        congrats: "恭喜！",
        achievementunlocked: "解锁成就",
        gamecomplete: "100%完成",
        achievementdesc: "点击显示测试通知按钮",
        gamecompletedesc: "您已解锁所有成就！",
        defaultcustomfont: "默认（未选择字体）",
        defaultsoundfile: "默认（未选择文件）",
        defaultsounddir: "默认（未选择文件夹）",
        nowtracking: "当前跟踪成就：",
        nopreview: "本机操作系统无法预览",
        options: "选项",
        resetwindow: "重置窗口",
        show: "显示",
        exit: "退出",
        releasegame: "释放游戏",
        releasegamesub: [
            `重启后台Worker进程并停止追踪当前游戏`,
            `如果你最近关闭了一个游戏，但Steam仍显示它在运行，或者Steam Achievement Notifier仍显示正在追踪一个已经关闭的游戏，试试这个选项`
        ],
        noupdateavailable: "没有可用的更新",
        latestversion: "已安装最新版本",
        missingdeps: "缺失依赖",
        missingdepssub: [
            `看起来您正在尝试启用 <span class="hl">在 Steam 上截图</span> 的选项。但是，在 Linux 上，没有安装 <code class="dialogcode">xdotool</code> 包，截图是无法自动触发的`,
            `请运行 <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> 来安装此依赖项，这将确保在此设备上可以进行 Steam 截图`
        ],
        restartapp: "重新启动应用",
        restartappsub: [
            `如果事情没有正常工作，请使用此选项关闭并重新打开应用程序`,
            `如果重新启动应用后问题仍然存在，请考虑使用主屏幕上的内置链接报告问题`
        ],
        suspend: "暂停",
        resume: "恢复",
        new: "新建...",
        nodata: "无数据",
        findappid: "查找 AppID",
        findappidsub: [
            `每个 Steam 游戏都有一个唯一的数字与之关联 - 称为 <span class="hl">AppID</span>。您可以通过以下任一方法找到任何 Steam 游戏的关联 AppID：`,
            `在 <span class="hl">Steam 客户端</span> 中，右键单击 <span class="hl">库</span> 中的游戏，然后选择 <i>属性</i> > <i>更新</i> - 这里将列出 AppID`,
            `游戏的 <span class="hl">商店页面</span> 的 <span class="hl">URL</span> - 它将在 <span class="hl">app/</span> 之后列出的数字： <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `诸如 <span class="hl">SteamDB</span> 之类的网站 - <span class="hl">App 信息</span> 部分将列出每个游戏的 AppID`
        ]
    },
    app: {
        content: {
            game: "未检测到游戏",
            customise: "自定义",
            test: "显示测试通知"
        }
    },
    settings: {
        language: {
            title: "语言"
        },
        os: {
            title: "操作系统",
            content: {
                desktop: "创建桌面快捷方式",
                startwin: "登录时启动",
                startmin: "最小化启动",
                nohwa: "禁用硬件加速",
                litemode: "轻量模式"
            }
        },
        notifications: {
            title: "通知",
            content: {
                rarity: "稀有度百分比",
                rareonly: "仅显示稀有",
                all: "全部",
                off: "关闭",
                showpercent: "显示百分比",
                soundonly: "仅声音模式",
                extwin: "流通知",
                audiosrc: "音频来源",
                notify: "通知",
                app: "应用",
                nowtracking: "显示跟踪通知",
                nowtrackingscale: "跟踪比例",
                shortcuts: "通知快捷方式",
                noiconcache: "禁用图标缓存"
            }
        },
        media: {
            title: "媒体",
            content: {
                steamss: "进行Steam截图",
                screenshots: "其他媒体",
                off: "关闭",
                overlay: "带通知叠加的截图",
                monitors: "截图来源",
                ovpos: "叠加位置",
                ovmatch: "与自定义位置匹配",
                ovx: "水平偏移",
                ovy: "垂直偏移",                
                ovpath: "截图路径",
                ssdelay: "截图延迟",
                notifyimg: "通知图片",
                imgpath: "图片路径"
            }
        },
        games: {
            title: "游戏",
            content: {
                linkedgames: "已连接的游戏",
                exclusionlist: "排除列表"
            }
        },
        accessibility: {
            title: "辅助功能",
            content: {
                noanim: "禁用应用程序窗口动画",
                nvda: "启用NVDA支持",
                tooltips: "显示工具提示"
            }
        },
        advanced: {
            title: "高级",
            content: {
                pollrate: "轮询速率",
                releasedelay: "发布延迟",
                maxretries: "最大重试次数",
                debug: "调试面板",
                userust: "替代处理模式",
                notifydebug: "显示调试通知",
                usecustomfiles: "使用自定义应用文件",
                showcustomfiles: "显示自定义应用文件"
            }
        },        
        misc: {
            title: "其他",
            content: {
                checkforupdates: "检查更新",
                log: "应用日志",
                reset: "重置应用"
            }
        }
    },    
    customiser: {
        preset: {
            title: "预设",
            content: {
                preset: "通知预设",
                iconanim: "稀有图标动画",
                alldetails: "显示所有细节",
                usepercent: "使用百分比",
                displaytime: "显示时间",
                scale: "比例",
                customtext: "自定义文本",
                usegametitle: "使用游戏标题",
                customfont: "自定义字体"
            }
        },
        sound: {
            title: "声音",
            content: {
                soundmode: "声音模式",
                file: "文件",
                folder: "随机",
                soundfile: "声音文件",
                sounddir: "声音文件夹",
                volume: "音量"
            }
        },
        style: {
            title: "样式",
            content: {
                bgstyle: "背景样式",
                solid: "纯色",
                gradient: "渐变",
                img: "图像",
                gameart: "游戏艺术",
                gradientangle: "渐变角度",
                bgimg: "背景图像",
                bgimgbrightness: "亮度",
                brightness: "亮度",
                blur: "模糊",
                roundness: "圆角",
                fontsize: "字体大小",
                opacity: "透明度",
                bgonly: "仅背景",
                glow: "发光",
                glowcolor: "颜色",
                glowsize: "大小",
                glowanim: "动画",
                glowspeed: "速度",
                off: "关闭",
                pulse: "脉动",
                rainbow: "彩虹",
                mask: "蒙版",
                maskimg: "蒙版图像"
            }
        },
        colors: {
            title: "颜色",
            content: {
                primarycolor: "主要颜色",
                secondarycolor: "次要颜色",
                tertiarycolor: "第三颜色",
                fontcolor: "字体颜色",
                fontoutline: "字体轮廓",
                fontoutlinecolor: "字体轮廓颜色",
                fontshadow: "字体阴影",
                fontshadowcolor: "字体阴影颜色"
            }
        },
        icons: {
            title: "图标",
            content: {
                iconroundness: "图标圆角",
                plat: "100% 图标",
                usegameicon: "使用游戏图标",
                logo: "徽标",
                decoration: "装饰",
                showdecoration: "显示装饰",
                rarity: "稀有度",
                showhiddenicon: "显示隐藏图标",
                hiddenicon: "隐藏图标",
                replacelogo: "替换徽标"
            }
        },
        position: {
            title: "位置",
            content: {
                pos: "屏幕位置",
                usecustompos: "使用自定义位置",
                setcustompos: "设置",
                resetcustompos: "重置"
            }
        },
        theme: {
            title: "主题",
            content: {
                updatetheme: "更新主题",
                savetheme: "保存主题",
                sub: [
                    `保存的 <span class="hl">用户主题</span> 可以从主屏幕的 <span class="hl">选择主题</span> 菜单中选择。`,
                    `确保 <span class="hl">主题名称</span> 是 <u>唯一</u> 的 - 与现有主题匹配的名称 <u>将覆盖先前的</u>！`
                ],
                placeholder: "主题名称",
                theme: "主题",
                importtheme: "导入主题",
                import: "导入",
                importsub: [
                    `导入用户创建的<span class="hl">主题文件</span>`,
                    `成功导入后，<span class="hl">导入的主题</span>将自动加载，并可从<span class="hl">主题选择</span>菜单中选择`,
                ],
                importidle: `选择要导入的<span class="hl">主题文件</span>`,
                importcopied: `主题复制成功`,
                importrenamed: `主题重命名成功`,
                importextracted: `主题提取成功`,
                importrewriting: `正在重写主题文件路径...`,
                importconverting: `正在转换主题...`,
                importcreating: `正在创建主题...`,
                importdone: `主题导入成功`,
                importfailed: `导入选定的主题文件时出错！`,
                exporttheme: "导出主题",
                export: "导出"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "这是自启动应用程序启动后发生的事情",
            copylog: "复制日志内容"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>您确定吗？</span>
                    <span>所有先前配置的数据，包括 <u>自定义设置</u>，将重置为默认值。</span>
                    <span>🛑 这个操作无法撤销！</span>
                </div>
            `,
            reset: "重置"
        }
    },
    error: {
        content: {
            subtitle: "Steam 成就通知器遇到了问题，需要关闭。",
            details: "以下是错误详细信息：",
            sub: "单击下面的按钮通过您喜欢的平台报告此问题。",
            report: "报告",
            log: "应用程序日志",
            exit: "退出"
        }
    },    
    tooltips: {
        game: "当前正在跟踪成就的游戏",
        usertheme: "选择先前保存的主题",
        customise: "自定义成就通知",
        test: "显示测试通知，包括任何自定义内容",
        kofi: "在Ko-Fi上捐赠！",
        discord: "加入Discord！",
        github: "报告问题",
        lang: "选择应用程序中使用的UI语言",
        desktop: "在桌面上切换运行应用程序的快捷方式",
        startwin: "登录后自动启动Steam Achievement Notifier",
        startmin: "启动后，隐藏应用程序UI窗口，直到从系统托盘中打开",
        nohwa: `禁用硬件加速，这可能会改善资源有限或没有专用 GPU 的系统性能<br><br><span class="ttdesc">启用/禁用此选项后，应用程序将重新启动</span>`,
        litemode: "禁用所有交互式UI元素，仅通过系统托盘图标提供有限的应用程序功能。可能会提高应用程序消耗的资源",
        rarity: "稀有成就通知触发的百分比。任何解锁百分比高于此值的成就将显示为主要通知",
        showpercent: "在所选类型的通知中显示成就的解锁百分比",
        soundonly: "禁用通知，仅播放通过Customiser设置的声音",
        extwin: "创建一个隐藏的后台窗口，复制当前正在显示的任何通知。然后可以将此窗口添加为窗口捕获源，用于流媒体软件（如OBS）",
        audiosrc: "选择（或禁用）应用程序生成的音频的来源",
        nowtracking: "显示通知，通知用户正在跟踪运行中游戏的成就",
        nowtrackingscale: `设置跟踪通知的大小`,
        shortcuts: "通过键盘快捷键触发测试通知。可以为每种通知类型自定义快捷键",
        noiconcache: `启动游戏时禁用成就图标缓存。<br><br><span class="ttdesc">这可以显著提高应用程序在启动游戏时的性能，并可能解决具有大量成就的游戏中的跟踪问题。然而，在罕见的情况下，禁用图标缓存可能导致通知中缺少成就图标</span>`,
        steamss: "在解锁成就时进行Steam截图",
        screenshots: "在显示通知时选择要创建的其他媒体类型",
        monitors: "在进行截图时要捕获的显示器",
        ovpos: "通知叠加在截图中的位置",
        ovmatch: "与Customiser中设置的屏幕位置匹配",
        ovpath: "此选项生成的截图保存位置",
        ssdelay: "从通知发生到截图被拍摄的延迟时间",
        sspreview: "显示截图保存时的预览",
        noanim: "禁用应用程序窗口的所有动画和过渡效果",
        nvda: "在解锁成就时将成就信息复制到剪贴板，以供屏幕阅读器软件（如NVDA）阅读",
        tooltips: "在悬停在某些UI元素上时显示工具提示",
        pollrate: `设置游戏过程中成就数据的更新间隔<br><br><span class="ttdesc">性能可能会因系统值或硬件而增加/减少。更高的值通常会导致较低的系统负载，但可能会导致通知延迟</span>`,
        releasedelay: `设置当前游戏发布后，后台进程等待重新启动的时间。影响自动进程跟踪和手动链接的游戏。<br><br><span class="ttdesc">为完全释放 Steamworks 应用提供更长的时间间隔。增加此值可防止异常行为，如跟踪先前关闭的游戏</span>`,
        maxretries: `设置将运行中的进程链接到检测到的 AppID 的最大重试次数。影响自动进程跟踪和手动链接的游戏。<br><br><span class="ttdesc">链接重试每秒尝试一次。如果运行中的进程在此重试次数后未链接到当前 AppID，则将返回无效进程。在这种情况下，游戏需要通过系统托盘 > 选项 > 释放游戏来手动释放</span>`,
        debug: "打开调试面板，显示详细的进程跟踪信息",
        userust: "使用基于 Rust 的替代功能来检查系统上当前是否正在运行跟踪的游戏进程。未选中时，将使用基于 NodeJS 的默认进程检查。",
        notifydebug: "为所有通知创建一个DevTools窗口。用于调试/故障排除通知问题",
        usecustomfiles: "启用通知加载用户可自定义文件。对于常规用户，建议谨慎使用",
        showcustomfiles: "打开自定义文件的位置",
        log: "打开应用程序日志窗口，显示有关进程活动、警告和错误的信息",
        reset: "删除所有配置数据并重新启动应用程序",
        playback: "暂停/恢复通知预览的动画",
        replay: "重新开始通知预览的动画",
        preset: "选择要自定义的通知预设",
        iconanim: "切换稀有成就图标的边框和动画",
        alldetails: "显示通知中的所有文本元素，包括此预设默认隐藏的元素",
        usepercent: "显示成就解锁百分比，而不是XP/S值",
        displaytime: "设置通知显示的秒数",
        scale: "增加或减小通知的大小",
        customtext: "设置要在通知中显示的自定义消息",
        usegametitle: "在通知中显示当前游戏的标题",
        customfont: "加载要在通知中使用的自定义字体",
        soundmode: "在通知发生时选择单个音频文件或从包含多个音频文件的文件夹中随机选择音频文件",
        soundfile: "选择通知发生时播放的音频文件",
        sounddir: "选择通知发生时将从中随机选择音频文件的文件夹",
        volume: "设置音频文件的播放音量",
        preview: "预览所选音频文件或从文件夹中随机选择的音频文件",
        bgstyle: "选择通知背景的样式",
        gradientangle: "设置渐变的角度",
        bgimg: "加载要用作通知背景的图像文件",
        bgimgbrightness: "设置作为通知背景的图像的亮度",
        brightness: "设置用作通知背景的游戏艺术的亮度",
        blur: "设置应用于通知背景的模糊级别",
        roundness: "设置通知边缘的圆角度",
        fontsize: "设置通知中使用的字体大小",
        opacity: "设置通知的整体不透明度",
        bgonly: "仅设置通知背景的不透明度，保持其他元素完全不透明",
        glow: "启用环绕通知的发光效果",
        glowcolor: "设置发光效果的颜色",
        glowsize: "设置发光效果的大小",
        glowanim: "选择要应用于发光效果的预设动画",
        glowspeed: "设置应用于发光效果的动画速度",
        mask: "使用自定义图像启用通知部分的遮罩",
        maskimg: `加载图像文件以用作蒙版<br><br><span class="ttdesc">在 CSS 中，<code class="ttcode">mask-mode: alpha</code> 的工作方式与通常预期的相反 - 图像文件中的透明区域将被隐藏，而黑色/灰色区域将允许下面的元素可见</span>`,
        primarycolor: "设置通知的主要颜色",
        secondarycolor: "设置通知的次要颜色",
        tertiarycolor: "设置通知的第三颜色",
        fontcolor: "设置在通知中显示的所有文本的颜色",
        fontoutline: "为通知中显示的所有文本添加轮廓",
        fontoutlinecolor: "设置文本轮廓的颜色",
        fontshadow: "为通知中显示的所有文本添加阴影",
        fontshadowcolor: "设置文本阴影的颜色",
        iconroundness: "设置通知中显示的成就/游戏图标的圆角度",
        plat: "加载要用作100%图标的图像文件",
        usegameicon: "将默认通知图标替换为当前游戏的图标",
        showhiddenicon: "在通知中显示指示成就已隐藏的图像",
        hiddenicon: "加载图像文件以替换隐藏成就图标",
        logo: "加载要替换Logo图标的图像文件",
        decoration: "加载要替换装饰图标的图像文件",
        showdecoration: "切换装饰图标的可见性",
        replacelogo: "使用选定的装饰替换通知中的徽标图标",
        pos: "设置通知在屏幕上的位置",
        usecustompos: "启用通知的自定义定位",
        setcustompos: "设置通知的自定义位置",
        resetcustompos: "将通知的位置重置为默认的自定义位置",
        updatetheme: "使用选择的自定义选项更新当前主题",
        savetheme: "将所有配置的自定义选项保存为新主题",
        visibilitybtn: "在自定义预览和测试通知中切换元素的可见性",
        delbtn: "将元素重置为默认值",
        link: `打开 <span class="hl">管理链接游戏菜单</span>`,
        imgpath: "此选项生成的通知图像将保存在的位置",
        linkedgames: `针对特定的Steam游戏绕过<span class="hl">自动进程跟踪</span><br><br><span class="ttdesc">此选项仅应在非常特定的情况下使用。用户不应在正常情况下使用此选项！</span>`,
        exclusionlist: `防止应用程序跟踪特定Steam游戏中的成就<br><br><span class="ttdesc">此选项仅应在非常特定的情况下使用。用户不应在正常情况下使用此选项！</span>`,
        ovx: "水平偏移屏幕截图中显示的通知",
        ovy: "垂直偏移屏幕截图中显示的通知",
        importtheme: `通过用户创建的<span class="hl">主题文件</span>导入自定义设置`,
        exporttheme: `导出当前选择的<span class="hl">主题</span>以供分享<br><br><span class="ttdesc">在尝试导出之前，请确保选择了所需的<span class="hl">主题</span>（通过<span class="hl">主题选择</span>菜单）。还请确保将自定义保存到所选<span class="hl">主题</span>中（通过<span class="hl">保存主题</span>菜单）<br><br><u>尚未保存到当前<span class="hl">主题</span>的任何自定义设置将不会被导出！</u></span>`        
    },
    update: {
        updateavailable: "有可用更新",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifier有新的更新可用！",
            `完整的发布说明可在<span id="discordreleasenotes"></span>和<span id="githubreleasenotes"></span>上找到`
        ],
        update: "更新"
    },
    linkgame: {
        content: {
            exepath: "可执行文件路径",
            managesub: [
                `手动将游戏的 <span class="hl">可执行文件</span> 关联到特定的 <span class="hl">AppID</span>，或者 <span class="hl">取消关联</span> 现有的关联`,
                `Steam 成就通知器将不再对任何 <span class="hl">关联游戏</span> 使用 <span class="hl">自动进程跟踪</span> - 取而代之的是，指定的 <span class="hl">可执行文件</span> 将在检测到关联的 <span class="hl">AppID</span> 时被跟踪`,
                `<span class="hl" id="appidhelp"><u>如何找到 Steam 游戏的 AppID？</u></span>`
            ],
            linknew: "新建关联游戏",
            linknewsub: [
                `创建游戏的 <span class="hl">可执行文件</span> 与关联的 <span class="hl">AppID</span> 之间的新关联`,
                `创建后，可以通过先前的 <span class="hl">管理关联游戏</span> 对话框 <span class="hl">取消关联</span>`
            ],
            link: "关联",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `将任何Steam游戏的<span class="hl">AppID</span>添加到<span class="hl">排除列表</span>`,
                `Steam成就通知器将不会尝试跟踪任何添加到<span class="hl">排除列表</span>的游戏的成就数据`,
                `<span class="hl" id="appidhelp"><u>如何找到Steam游戏的AppID？</u></span>`
            ],
            exclusionnew: "新排除",
            exclusionnewsub: [
                `输入要添加到<span class="hl">排除列表</span>的<span class="hl">AppID</span>`
            ]
        }
    }
}