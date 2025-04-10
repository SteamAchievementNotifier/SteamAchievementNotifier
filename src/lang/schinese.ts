export const translations = {
    global: {
        main: "主要",
        rare: "稀有",
        plat: "100%",
        test: "测试通知",
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
        ],
        noexe: "未找到游戏的 EXE 文件！",
        noexesub: "点击这里获取更多信息",
        noexedialogsub: [
            `Steam Achievement Notifier 无法自动找到此游戏的可执行文件。游戏的可执行文件位置是释放游戏所必需的`,
            `要手动释放游戏，<i>右键点击</i> <span class="hl">系统托盘图标</span> > <span class="hl">选项</span> > <span class="hl">释放游戏</span>，或使用 <span class="hl">释放游戏快捷键</span>`,
            `另外，点击下面的 <span class="hl">链接</span> 按钮，将焦点窗口的相关可执行文件添加到 <span class="hl">已链接游戏</span> 菜单中`,
            `<span class="hl help" id="linkgamehelp"><u>点击链接按钮会发生什么？</u></span>`
        ],
        linkgamehelp: "通过窗口链接游戏",
        linkgamehelpsub: [
            `点击 <span class="hl">链接</span> 按钮将自动将一个新条目添加到 <span class="hl">设置</span> > <span class="hl">已链接游戏</span> 菜单中，使用当前焦点窗口的信息。`,
            `点击 <span class="hl">链接</span> 按钮后，会启动一个 5 秒钟的计时器`,
            `在计时器结束前，聚焦到游戏窗口`,
            `计时器结束后，当前 <span class="hl">AppID</span> 的新条目将被添加到 <span class="hl">设置</span> > <span class="hl">已链接游戏</span> 菜单中，使用焦点窗口的可执行文件`,
            `如果需要重试，可以通过 <span class="hl">设置</span> > <span class="hl">已链接游戏</span> 删除该条目，点击 <span id="linkhelpunlink"></span> 按钮`
        ],
        addlinkfailed: "无法链接窗口",
        addlinkfailedsub: `点击 <span class="hl">链接</span> 按钮重试`,
        webhookunlockmsg: "$user 解锁了一个成就",
        webhookunlockmsgplat: "$user 解锁了所有成就",
        webhookingame: "在 $gamename",
        notconnected: "未连接",
        raloghelp: "我的游戏未被检测到",
        raenablelog: `模拟器日志文件`,
        raenablelogsub: [
            `为了访问游戏的内部事件（如当前游戏状态、成就解锁信息等），必须在任何选定的模拟器中启用记录到外部 <span class="hl">日志文件</span> <u>必须启用</u>。<br><br>任何选定的模拟器 <u>必须将此 <span class="hl">日志文件</span></u> 用作 <span class="hl">日志文件路径</span> 的值。`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > 设置 > 日志</span> 必须按照以下设置进行配置：
                    <br>
                    <ul>
                        <li><span class="hllb">日志详细级别</span>: <span class="hlgreen">开启</span></li>
                        <li><span class="hllb">前端日志级别</span>: <span class="hlgreen">1（信息）</span></li>
                        <li><span class="hllb">记录到文件</span>: <span class="hlgreen">开启</span></li>
                        <li><span class="hllb">时间戳日志文件</span>: <span class="hlred">关闭</span></li>
                    </ul>
                    <br>
                    使用默认安装设置时，<span class="hl">"retroarch.log"</span> 存储在：
                    <br>
                    <ul>
                        <li><span class="hllb">C:\\RetroArch-x64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > 查看 > 显示日志配置</span> 必须按照以下设置进行配置：
                    <br>
                    <ul>
                        <li><span class="hllb">详细级别</span>: <span class="hlgreen">信息</span></li>
                        <li><span class="hllb">日志输出</span> > <span class="hlgreen">写入文件</span></li>
                        <li><span class="hllb">日志类型</span> > <span class="hlgreen">成就（RetroAchievements）</span></li>
                    </ul>
                    <br>
                    使用默认安装设置时，<span class="hl">"dolphin.log"</span> 存储在以下位置之一：
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`
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
            title: "语言",
            content: {
                steamlang: "将成就翻译为 Steam 语言",
                maxsteamlangretries: "最大翻译尝试次数"
            }
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
                nowtracking: "显示跟踪通知",
                nowtrackingscale: "跟踪比例",
                nowtrackingpos: "跟踪位置",
                shortcuts: "通知快捷方式",
                noiconcache: "禁用图标缓存",
                webhooks: "发布到 Discord 服务器",
                webhooktypes: "Webhook 类型",
                webhookurl: `Webhook URL`,
                webhookcaution: `启用此选项并提供有效的 Discord Webhook 链接即表示您同意，您了解 <u>当前 Steam 用户的所有成就和游戏信息</u> 将通过提供的 Webhook 链接发布到指定的 Discord 服务器。<br><br>如果您不希望 Steam Achievement Notifier 代表您发布这些信息，请禁用此选项。`,
                webhooklaststatus: "最后状态",
                webhookspoilers: `添加剧透标签`
            }
        },
        games: {
            title: "游戏",
            content: {
                linkedgames: "已连接的游戏",
                themeswitch: "自动切换主题",
                exclusionlist: "排除列表"
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
                hdrmode: "HDR 模式",
                ovpos: "叠加位置",
                ovmatch: "与自定义位置匹配",
                ovx: "水平偏移",
                ovy: "垂直偏移",                
                ovpath: "截图路径",
                ssdelay: "截图延迟",
                notifyimg: "通知图片",
                imgpath: "图片路径",
                ssenabled: "启用",
                ssmode: "截图模式",
                screen: "屏幕",
                window: "窗口"
            }
        },
        streaming: {
            title: "直播",
            content: {
                extwin: "流通知",
                extwinframerate: "帧率",
                extwinshow: "显示窗口",
                audiosrc: "音频来源",
                notify: "通知",
                app: "应用",
                off: "静音",
                statwin: "成就统计窗口",
                statwinaot: "始终在最前面",
                noachievements: "没有成就可显示",
                startgame: "启动游戏以显示成就！",
                max: "最大值",
                custom: "自定义...",
                statwinshortcut: "覆盖层快捷键",
            }
        },
        accessibility: {
            title: "辅助功能",
            content: {
                noanim: "禁用应用程序窗口动画",
                noupdatedialog: "禁用更新对话框",
                nvda: "启用NVDA支持",
                tooltips: "显示工具提示",
                showsystrayopts: "显示系统托盘选项",
                releaseshortcut: "释放游戏快捷键"
            }
        },
        advanced: {
            title: "高级",
            content: {
                pollrate: "轮询速率",
                initdelay: "跟踪延迟",
                releasedelay: "发布延迟",
                maxretries: "最大重试次数",
                debug: "调试面板",
                userust: "替代处理模式",
                notifydebug: "显示调试通知",
                exportachdata: "导出成就数据",
                usecustomfiles: "使用自定义应用文件",
                showcustomfiles: "显示自定义应用文件"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "模拟器",
                rauser: "用户名",
                rakey: "API 密钥",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                installdir: "日志文件路径",
                rapercenttype: "百分比类型",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "输入日志文件路径",
                logfile: "日志文件",
                status: "状态",
                game: "游戏",
                wait: "等待模拟器",
                idle: "等待游戏事件",
                start: "启动游戏",
                stop: "停止游戏",
                achievement: "成就解锁"
            }
        },
        misc: {
            title: "其他",
            content: {
                colorprofile: "颜色配置文件",
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
                usecustomfontsizes: "使用自定义字体大小",
                unlockmsgfontsize: "解锁消息",
                titlefontsize: "标题",
                descfontsize: "描述",
                textvspace: "文本间距",
                opacity: "透明度",
                bgonly: "仅背景",
                glow: "发光",
                glowcolor: "颜色",
                glowsize: "大小",
                glowx: "水平偏移",
                glowy: "垂直偏移",
                glowopacity: "不透明度",
                glowanim: "动画",
                glowspeed: "速度",
                glowrarity: "使用稀有度",
                glowcolorbronze: "稀有度: > 50%",
                glowcolorsilver: "稀有度: < 50% & > $rarity",
                glowcolorgold: "稀有度: < $rarity",
                off: "关闭",
                pulse: "脉动",
                double: "双倍",
                focus: "聚焦",
                orbit: "轨道",
                fluorescent: "荧光",
                rainbow: "彩虹",
                mask: "蒙版",
                maskimg: "蒙版图像",
                outline: "轮廓",
                outlinecolor: "轮廓颜色",
                outlinewidth: "轮廓宽度",
                dashed: "虚线",
                dotted: "点线"
            }
        },
        colors: {
            title: "颜色",
            content: {
                primarycolor: "主要颜色",
                secondarycolor: "次要颜色",
                tertiarycolor: "第三颜色",
                iconshadowcolor: "稀有图标阴影颜色",
                iconanimcolor: "稀有图标动画颜色",
                fontcolor: "字体颜色",
                usecustomfontcolors: "使用自定义字体颜色",
                unlockmsgfontcolor: "颜色 1",
                titlefontcolor: "颜色 2",
                descfontcolor: "颜色 3",
                fontoutline: "字体轮廓",
                fontoutlinecolor: "字体轮廓颜色",
                fontshadow: "字体阴影",
                fontshadowcolor: "字体阴影颜色"
            }
        },
        icons: {
            title: "图标",
            content: {
                iconscale: "图标缩放",
                iconroundness: "图标圆角",
                showiconborder: "显示图标边框",
                iconborderimg: "图标边框",
                iconborderpos: "边框位置",
                iconborderscale: "边框缩放",
                iconborderx: "水平偏移",
                iconbordery: "垂直偏移",
                iconborderrarity: "使用稀有度",
                iconborderimgbronze: "稀有度 > 50%",
                iconborderimgsilver: "稀有度: < 50% 且 > $rarity",
                front: "前面",
                back: "后面",
                plat: "100% 图标",
                usegameicon: "使用游戏图标",
                gameicontype: "游戏图标类型",
                usecustomimgicon: "使用自定义图标",
                customimgicon: "自定义图标",
                icon: "图标",
                logo: "徽标",
                logoscale: "Logo缩放",
                decoration: "装饰",
                decorationscale: "装饰缩放",
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
                export: "导出",
                exporterrortitle: "导出错误",
                exporterrorsub: [
                    "尝试导出选定主题时发生错误",
                    `请尝试保存当前主题 (<i>通过 <span class="hl">保存主题</span></i>)，然后再次尝试导出`,
                    `如果问题仍然存在，请复制下面的错误，并通过 <span class="hl">主屏幕</span> 上的链接按钮进行报告`
                ],
                synctheme: "同步主题",
                syncedwith: "已同步至",
                themeselect: "已选择的主题"
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
        steamlang: `尝试加载位于 Steam 应用程序文件中的翻译，以在用户选择的 Steam 客户端语言中显示成就信息<br><br><span class="ttdesc">此选项尝试在 Steam 应用程序数据中存储的 JSON 文件中查找翻译。如果找不到当前成就的翻译，则会显示从 Steamworks 获取的成就信息。</span>`,
        maxsteamlangretries: `查找当前成就有效翻译的尝试次数（每 100 毫秒一次）<br><br><span class="ttdesc">Steam 当前仅在与每个游戏关联的 JSON 文件中存储少量的成就数据。该文件中未包含的任何成就将在成就解锁后添加。<br><br>由于添加新数据可能需要时间，增加此值将提高找到当前成就翻译数据的可能性，但也可能会延迟通知在屏幕上出现的时间，具体取决于此设置计算的时间。<br><br>如果无法找到当前成就的有效翻译数据，翻译将回退到 Steamworks 中指定的语言。</span>`,
        desktop: "在桌面上切换运行应用程序的快捷方式",
        startwin: "登录后自动启动Steam Achievement Notifier",
        startmin: "启动后，隐藏应用程序UI窗口，直到从系统托盘中打开",
        nohwa: `禁用硬件加速，这可能会改善资源有限或没有专用 GPU 的系统性能<br><br><span class="ttdesc">启用/禁用此选项后，应用程序将重新启动</span>`,
        litemode: "禁用所有交互式UI元素，仅通过系统托盘图标提供有限的应用程序功能。可能会提高应用程序消耗的资源",
        rarity: "稀有成就通知触发的百分比。任何解锁百分比高于此值的成就将显示为主要通知",
        showpercent: "在所选类型的通知中显示成就的解锁百分比",
        soundonly: "禁用通知，仅播放通过Customiser设置的声音",
        extwin: "创建一个窗口，复制当前屏幕上显示的所有通知。然后，可以将该窗口作为窗口捕捉源添加到流媒体软件中，如 OBS",
        extwinframerate: "设置流通知的目标帧率",
        extwinshow: `切换流通知窗口的可见性<br><br><span class="ttdesc">当它在任务栏中获得焦点时，按住 <code class="ttcode">Ctrl</code> 键可以显示窗口的当前位置</span>`,
        audiosrc: "选择（或禁用）应用程序生成的音频的来源",
        nowtracking: "显示通知，通知用户正在跟踪运行中游戏的成就",
        nowtrackingscale: `设置跟踪通知的大小`,
        nowtrackingpos: `设置跟踪通知的位置`,
        shortcuts: "通过键盘快捷键触发测试通知。可以为每种通知类型自定义快捷键",
        noiconcache: `启动游戏时禁用成就图标缓存。<br><br><span class="ttdesc">这可以显著提高应用程序在启动游戏时的性能，并可能解决具有大量成就的游戏中的跟踪问题。然而，在罕见的情况下，禁用图标缓存可能导致通知中缺少成就图标</span>`,
        steamss: "在解锁成就时进行Steam截图",
        screenshots: "在显示通知时选择要创建的其他媒体类型",
        monitors: "在进行截图时要捕获的显示器",
        hdrmode: `使用与支持高动态范围（HDR）显示器兼容的方法进行截图`,
        ovpos: "通知叠加在截图中的位置",
        ovmatch: "与Customiser中设置的屏幕位置匹配",
        ovpath: "此选项生成的截图保存位置",
        ssdelay: "从通知发生到截图被拍摄的延迟时间",
        sspreview: "显示截图保存时的预览",
        noanim: "禁用应用程序窗口的所有动画和过渡效果",
        noupdatedialog: `防止自动显示和将焦点放在 <span class="hl">更新可用</span> 对话框上<br><br><span class="ttdesc">仍然可以通过单击更新按钮来打开对话框</span>`,
        nvda: "在解锁成就时将成就信息复制到剪贴板，以供屏幕阅读器软件（如NVDA）阅读",
        tooltips: "在悬停在某些UI元素上时显示工具提示",
        colorprofile: `强制所有应用窗口使用所选的颜色配置文件<br><br><span class="ttdesc">需要重启应用程序</span>`,
        pollrate: `设置游戏过程中成就数据的更新间隔<br><br><span class="ttdesc">性能可能会因系统值或硬件而增加/减少。更高的值通常会导致较低的系统负载，但可能会导致通知延迟</span>`,
        initdelay: `设置当前 <span class="hl">AppID</span> 检测和进程/成就跟踪开始之间的延迟<br><br><span class="ttdesc">增加此值可以避免 Steam 无法启动当前游戏的情况（因为在游戏启动之前 Steamworks 初始化应用程序）</span><br><br><span class="ttdesc">另外，增加此值也可以用于绕过游戏前启动进程错误检测</span>`,
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
        glowx: "水平偏移光晕效果",
        glowy: "垂直偏移光晕效果",
        glowopacity: "设置光晕效果的不透明度",
        glowanim: "选择要应用于发光效果的预设动画",
        glowspeed: "设置应用于发光效果的动画速度",
        glowrarity: "根据解锁成就的稀有度更改光晕效果的颜色",
        glowcolorbronze: "当解锁百分比 > 50% 时显示的光晕颜色",
        glowcolorsilver: "当解锁百分比 < 50% 且 > $rarity 时显示的光晕颜色",
        glowcolorgold: "当解锁百分比 < $rarity 时显示的光晕颜色",
        mask: "使用自定义图像启用通知部分的遮罩",
        maskimg: `加载图像文件以用作蒙版<br><br><span class="ttdesc">在 CSS 中，<code class="ttcode">mask-mode: alpha</code> 的工作方式与通常预期的相反 - 图像文件中的透明区域将被隐藏，而黑色/灰色区域将允许下面的元素可见</span>`,
        outline: "选择显示在通知周围的轮廓类型",
        outlinecolor: "设置通知周围轮廓的颜色",
        outlinewidth: "设置通知周围轮廓的宽度",
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
        usegameicon: "将解锁的成就图标替换为当前游戏的图标",
        gameicontype: `选择显示为游戏图标的图片类型`,
        usecustomimgicon: "将解锁的成就图标替换为自定义图片文件",
        customimgicon: "加载一个图像文件作为自定义图标",
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
        imgpath: "此选项生成的通知图像将保存在的位置",
        ssenabled: "启用或禁用对此类型的媒体生成",
        checkforupdates: `检查是否在GitHub上发布了新的应用版本。如果有可用的更新，将在通过<span class="hl">更新可用</span>对话框确认后自动下载并安装，`,
        linkedgames: `针对特定的Steam游戏绕过<span class="hl">自动进程跟踪</span><br><br><span class="ttdesc">此选项仅应在非常特定的情况下使用。用户不应在正常情况下使用此选项！</span>`,
        exclusionlist: `防止应用程序跟踪特定Steam游戏中的成就<br><br><span class="ttdesc">此选项仅应在非常特定的情况下使用。用户不应在正常情况下使用此选项！</span>`,
        ovx: "水平偏移屏幕截图中显示的通知",
        ovy: "垂直偏移屏幕截图中显示的通知",
        importtheme: `通过用户创建的<span class="hl">主题文件</span>导入自定义设置`,
        exporttheme: `导出当前选择的<span class="hl">主题</span>以供分享<br><br><span class="ttdesc">在尝试导出之前，请确保选择了所需的<span class="hl">主题</span>（通过<span class="hl">主题选择</span>菜单）。还请确保将自定义保存到所选<span class="hl">主题</span>中（通过<span class="hl">保存主题</span>菜单）<br><br><u>尚未保存到当前<span class="hl">主题</span>的任何自定义设置将不会被导出！</u></span>`,
        webhooks: "使用 Webhook URL 每当解锁成就时在 Discord 服务器上发布",
        webhookmain: `切换是否在 Discord 服务器发布主成就解锁信息`,
        webhookrare: "切换是否在 Discord 服务器发布稀有成就解锁信息",
        webhookplat: "切换是否在 Discord 服务器发布 100% 成就解锁信息",
        webhooktest: "切换是否在触发任何类型的测试通知时，将测试信息发布到Discord服务器",
        webhookurl: `设置所需 Discord 服务器的 <span class="hl">Webhook URL</span><br><br><span class="ttdesc">Webhook URL 用于代表用户或应用程序在 Discord 服务器/频道上发布。要为 Discord 服务器设置新的 Webhook，用户必须在所需服务器上拥有允许创建 Webhook 的角色<br><br><u>使用此选项时需要 Webhook URL</u><br><br>有关更多信息，请参阅 Discord 的官方文档</span>`,
        webhookspoilers: `在发布到Discord时，为“隐藏”成就添加剧透标签`,
        unlockmsg: "设置 $type 内解锁消息/自定义文本的位置",
        title: "设置 $type 内成就标题的位置",
        desc: "设置 $type 内成就描述的位置",
        notification: "通知",
        screenshot: "截图",
        percentpos: "设置 $type 内稀有度百分比的位置",
        sspercentpos: "设置 $type 内稀有度百分比的位置",
        hiddeniconpos: "设置 $type 内隐藏/秘密成就图标的位置",
        sshiddeniconpos: "设置 $type 内隐藏/秘密成就图标的位置",
        decorationpos: "设置 $type 内装饰元素的位置",
        ssdecorationpos: "设置 $type 内装饰元素的位置",
        percentbadge: "在放置于成就/游戏图标上方的徽章内显示解锁百分比",
        sspercentbadge: "在放置于成就/游戏图标上方的徽章内显示解锁百分比",
        percentbadgepos: "设置徽章位置",
        sspercentbadgepos: "设置徽章位置",
        percentbadgecolor: "设置徽章背景颜色",
        sspercentbadgecolor: "设置徽章背景颜色",
        percentbadgefontcolor: "徽章字体颜色",
        sspercentbadgefontcolor: "徽章字体颜色",
        percentbadgefontsize: "设置徽章大小",
        sspercentbadgefontsize: "设置徽章大小",
        percentbadgeroundness: "设置徽章圆角",
        sspercentbadgeroundness: "设置徽章圆角",
        percentbadgex: "水平偏移徽章元素的位置",
        sspercentbadgex: "水平偏移徽章元素的位置",
        percentbadgey: "垂直偏移徽章元素的位置",
        sspercentbadgey: "垂直偏移徽章元素的位置",
        percentbadgeimg: "将基于稀有度的图标显示为徽章元素",
        sspercentbadgeimg: "将基于稀有度的图标显示为徽章元素",
        percentbadgeimgbronze: "当解锁百分比 > 50% 时显示的徽章图标",
        sspercentbadgeimgbronze: "当解锁百分比 > 50% 时显示的徽章图标",
        percentbadgeimgsilver: "当解锁百分比 < 50% 且 > $rarity 时显示的徽章图标",
        sspercentbadgeimgsilver: "当解锁百分比 < 50% 且 > $rarity 时显示的徽章图标",
        percentbadgeimggold: "当解锁百分比 < $rarity 时显示的徽章图标",
        sspercentbadgeimggold: "当解锁百分比 < $rarity 时显示的徽章图标",
        resetpbimgs: "将所有徽章图标重置为默认值",
        elemsmatch: `匹配为此通知类型在自定义设置中设置的通知元素设置<br><br><span class="ttdesc">某些通知预设可能无法完全匹配自定义设置，因为屏幕和基于截图的通知布局之间存在差异</span>`,
        themeswitch: `当检测到特定游戏时自动切换到任何保存的 <span class="hl">主题</span>`,
        userthemesync: `将选定的 <span class="hl">主题</span> 中的自定义同步到所有其他通知类型`,
        showsystrayopts: `显示通常位于 <span class="hl">系统托盘</span> > <span class="hl">选项</span> 下的所有选项，在 <span class="hl">设置</span> > <span class="hl">其他</span>`,
        releaseshortcut: "使用指定的快捷键释放当前跟踪的游戏",
        themeselect: "选择之前保存的主题",
        statwin: `在外部窗口中显示当前游戏的可配置成就统计<br><br><span class="ttdesc">与“<span class="hl">将成就翻译为 Steam 语言</span>”选项一起使用时，某些翻译可能在解锁特定成就之前不可用</span>`,
        statwinaot: `将成就统计覆盖层设置为“始终在最前面”模式，使窗口显示在游戏窗口的上方<br><br><span class="ttdesc">启用时，成就统计覆盖层将不再注册用户交互，如“点击”事件。要重新启用与窗口的交互，必须禁用此选项</span>`,
        statwinshortcut: "使用指定的快捷键切换成就统计覆盖层",
        ssdisplay: "在通知中显示捕获的截图预览",
        iconscale: "增加或减少成就图标的大小",
        showiconborder: "将图像作为边框显示在成就图标周围",
        iconborderimg: "加载图像文件作为成就图标的边框",
        iconborderpos: "设置图标边框图像是显示在成就图标前面还是后面",
        iconborderscale: "增加或减少通知中图标边框的大小",
        iconborderx: "增加或减少通知中图标边框的水平偏移",
        iconbordery: "增加或减少通知中图标边框的垂直偏移",
        iconborderrarity: "根据解锁的成就稀有度更改显示的图标边框图像",
        iconborderimgbronze: "当解锁百分比 > 50% 时显示的图标边框图像",
        iconborderimgsilver: "当解锁百分比 < 50% 且 > $rarity 时显示的图标边框图像",
        iconshadowcolor: "设置解锁稀有成就时围绕成就图标的阴影效果颜色",
        iconanimcolor: "设置解锁稀有成就时成就图标背后的动画效果颜色",
        logoscale: "增加或减少通知中Logo元素的大小",
        decorationscale: "增加或减少通知中装饰元素的大小",
        usecustomfontsizes: `单独增加或减少通知中各个文本元素的大小<br><br><span class="ttdesc">修改单个字体大小时无法保证原始通知布局的保留</span>`,
        unlockmsgfontsize: "增加或减少解锁消息文本元素的大小",
        titlefontsize: "增加或减少成就标题文本元素的大小",
        descfontsize: "增加或减少成就描述文本元素的大小",
        webhookembedcolormain: "设置在解锁主要成就时Webhook嵌入中使用的颜色",
        webhookembedcolorrare: "设置在解锁稀有成就时Webhook嵌入中使用的颜色",
        webhookembedcolorplat: "设置在解锁100%成就时Webhook嵌入中使用的颜色",
        raemus: "当游戏在受支持的模拟器中被检测到时显示通知",
        rauser: "设置 Retro Achievements 用户名以跟踪成就",
        rakey: `设置用于认证 Retro Achievements API 的 Web API 密钥<br><br><span class="ttdesc">您可以通过登录 Retro Achievements 网站并导航到 <span class="hl">设置 > 密钥 > Web API 密钥</span> 来复制或重新生成 Web API 密钥<br><br>🔒 提供的密钥将在存储到系统本地之前进行加密</span>`,
        rapercenttype: "设置是否在通知中显示 Hardcore 或 Softcore 成就解锁百分比",
        retroarch: `显示 Retro Achievements 的通知，适用于通过 RetroArch 模拟的游戏<br><br><span class="ttdesc"><span class="hl">RetroArch > 设置 > 日志</span> 必须按照以下设置进行配置：<br><br><ul><li><span class="hllb">日志详细级别</span>: <span class="hlgreen">开启</span></li><li><span class="hllb">前端日志级别</span>: <span class="hlgreen">1（信息）</span></li><li><span class="hllb">记录到文件</span>: <span class="hlgreen">开启</span></li><li><span class="hllb">时间戳日志文件</span>: <span class="hlred">关闭</span></li></ul></span>`,
        dolphin: `显示 Retro Achievements 的通知，适用于通过 Dolphin 模拟的游戏<br><br><span class="ttdesc"><span class="hl">Dolphin > 查看 > 显示日志配置</span> 必须按照以下设置进行配置：<br><br><ul><li><span class="hllb">详细级别</span>: <span class="hlgreen">信息</span></li><li><span class="hllb">日志输出</span> > <span class="hlgreen">写入文件</span></li><li><span class="hllb">日志类型</span> > <span class="hlgreen">成就（RetroAchievements）</span></li></ul></span>`,
        retroarchpath: `设置 RetroArch 的 <span class="hl">"retroarch.log"</span> 日志文件路径<br><br><span class="ttdesc">使用默认安装设置时，<span class="hl">"retroarch.log"</span> 存储在 <span class="hllb">C:\\RetroArch-x64\\Logs</span></span>`,
        dolphinpath: `设置 Dolphin 的 <span class="hl">"dolphin.log"</span> 日志文件路径<br><br><span class="ttdesc">使用默认安装设置时，<span class="hl">"dolphin.log"</span> 存储在以下位置之一：<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        usecustomfontcolors: "单独设置通知中文本元素的颜色",
        unlockmsgfontcolor: "设置第一个文本元素的颜色",
        titlefontcolor: "设置第二个文本元素的颜色",
        descfontcolor: "设置第三个文本元素的颜色",
        exportachdata: `当成就解锁时，将成就数据导出到 JSON 文件<br><br><span class="ttdesc">启用时，<span class="ttcode">achdata.json</span> 将导出到:<br><br><ul><li><span class="hllb">%localappdata\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "调整通知中文本元素之间的垂直间距",
        ssmode: `设置截图时是捕获整个屏幕还是仅捕获当前游戏窗口<span style="color: red;">*</span><br><br><span class="ttdesc">如果无法找到当前游戏的<span class="hl">可执行文件</span>（<i>无论是通过<span class="hl">自动进程追踪</span>，还是将其添加为<span class="hl">关联游戏</span></i>），此选项将默认为“屏幕”模式</span>` 
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
    },
    notificationelems: {
        title: "通知元素",
        content: {
            unlockmsg: "解锁消息",
            title: "成就标题",
            desc: "成就描述",
            hiddeniconpos: "隐藏图标",
            sshiddeniconpos: "隐藏图标",
            decorationpos: "装饰",
            ssdecorationpos: "装饰",
            percentpos: "稀有度百分比",
            sspercentpos: "稀有度百分比",
            percentbadge: "百分比徽章",
            sspercentbadge: "百分比徽章",
            percentbadgepos: "徽章位置",
            sspercentbadgepos: "徽章位置",
            percentbadgecolor: "徽章颜色",
            sspercentbadgecolor: "徽章颜色",
            percentbadgefontcolor: "设置徽章的字体颜色",
            sspercentbadgefontcolor: "设置徽章的字体颜色",
            percentbadgefontsize: "徽章大小",
            sspercentbadgefontsize: "徽章大小",
            percentbadgeroundness: "徽章圆角",
            sspercentbadgeroundness: "徽章圆角",
            percentbadgex: "水平偏移",
            sspercentbadgex: "水平偏移",
            percentbadgey: "垂直偏移",
            sspercentbadgey: "垂直偏移",
            percentbadgeimg: "使用图标",
            sspercentbadgeimg: "使用图标",
            percentbadgeimgbronze: "稀有度: > 50%",
            sspercentbadgeimgbronze: "稀有度: > 50%",
            percentbadgeimgsilver: "稀有度: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "稀有度: < 50% & > $rarity%",
            percentbadgeimggold: "稀有度: < $rarity%",
            sspercentbadgeimggold: "稀有度: < $rarity%",
            resetpbimgs: "重置徽章图标",
            elemsmatch: "匹配自定义设置",
            ssdisplay: "截图预览"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `将任何游戏的 <span class="hl">AppID</span> 添加到自动切换 <span class="hl">主题</span> 时`,
                `可以为每种通知类型选择任何保存的 <span class="hl">主题</span>，以及所需的显示器作为 <span class="hl">截图源</span>`,
                `<span class="hl" id="appidhelp"><u>我如何找到 Steam 游戏的 AppID？</u></span>`
            ],
            themeswitchnew: "新自动切换",
            themeswitchnewsub: [
                `输入游戏的 <span class="hl">AppID</span>，以及所需的显示器作为 <span class="hl">截图源</span>`,
                `选择在检测到该游戏的 <span class="hl">AppID</span> 时为每种通知类型切换到哪个 <span class="hl">主题</span>`
            ],
            themes: "主题",
            src: "截图源",
            themedeleted: "主题已删除"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `看起来您正在尝试启用 <span class="hl">${opt}</span> 选项。但是，在 Linux 系统上，如果没有先安装 <code class="dialogcode">${dep}</code> 包，无法启用截图功能`,
    `请运行 <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> 来安装此依赖项。这将确保您可以在此设备上进行截图`
]