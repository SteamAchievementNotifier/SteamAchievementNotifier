export const translations = {
    global: {
        main: "主要",
        semi: "半",
        rare: "稀有",
        plat: "100%",
        trophymain: "青銅",
        trophysemi: "白銀",
        trophyrare: "黃金",
        trophyplat: "白金",
        test: "測試通知",
        topleft: "左上",
        topcenter: "上方中間",
        topright: "右上",
        bottomleft: "左下",
        bottomcenter: "底部中間",
        bottomright: "右下",
        ok: "確定",
        preview: "預覽",
        save: "保存",
        back: "返回",
        edit: "編輯",
        lockedby: "由 $lock 鎖定",
        settings: "設置",
        appversion: "應用程式版本",
        image: "圖像",
        audio: "音頻",
        folder: "文件夾",
        font: "字體",
        select: "選擇",
        gametitle: "遊戲標題",
        congrats: "恭喜！",
        achievementunlocked: "成就解鎖",
        gamecomplete: "100% 完成",
        achievementdesc: "點擊按鈕以顯示測試通知",
        gamecompletedesc: "您已解鎖所有成就！",
        defaultcustomfont: "默認（未選擇字體）",
        defaultsoundfile: "默認（未選擇文件）",
        defaultsounddir: "默認（未選擇文件夾）",
        nowtracking: "現在正在追踪成就：",
        nopreview: "原生操作系統無法預覽",
        options: "選項",
        resetwindow: "重置視窗",
        show: "顯示",
        exit: "退出",
        donotshowagain: "不再顯示此對話框",
        releasegame: "釋放遊戲",
        releasegamesub: [
            `重新啟動背景的 Worker 程序並停止追蹤當前遊戲`,
            `如果你最近關閉了一個遊戲，但 Steam 仍然顯示它正在運行，或者 Steam Achievement Notifier 仍然顯示正在追蹤已經關閉的遊戲，請嘗試此選項`
        ],
        noupdateavailable: "沒有可用的更新",
        latestversion: "最新版本已安裝",
        missingdeps: "缺少依賴",
        restartapp: "重新啟動應用程式",
        restartappsub: [
            `如果事情沒有正常運作，請使用此選項關閉並重新打開應用程式`,
            `如果重新啟動應用程式後問題仍然存在，請考慮使用主畫面上的內建連結回報問題`
        ],
        suspend: "暫停",
        resume: "恢復",
        new: "新增...",
        nodata: "無資料",
        findappid: "尋找 AppID",
        findappidsub: [
            `每個 Steam 遊戲都有一個唯一的數字與之關聯 - 稱為 <span class="hl">AppID</span>。您可以通過以下任一方法找到任何 Steam 遊戲的關聯 AppID：`,
            `在 <span class="hl">Steam 客戶端</span> 中，右鍵點擊您的 <span class="hl">遊戲庫</span> 中的遊戲，然後選擇 <i>屬性</i> > <i>更新</i> - 這裡將列出 AppID`,
            `遊戲的 <span class="hl">商店頁面</span> 的 <span class="hl">URL</span> - 這將是 <span class="hl">app/</span> 之後列出的數字： <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `像 <span class="hl">SteamDB</span> 這樣的網站 - <span class="hl">應用程式資訊</span> 部分將列出每個遊戲的 AppID`
        ],
        noexe: "未找到遊戲的 EXE 檔案！",
        noexesub: "點擊這裡了解更多資訊",
        noexedialogsub: [
            `Steam Achievement Notifier 無法自動找到此遊戲的可執行檔。若要在遊戲關閉後「釋放」遊戲，必須提供遊戲可執行檔的位置`,
            `若要在遊戲關閉後手動釋放遊戲，請在 <span class="hl">系統匣圖示</span> 上 <i>按一下滑鼠右鍵</i> > <span class="hl">選項</span> > <span class="hl">釋放遊戲</span>，或使用 <span class="hl">釋放遊戲快捷鍵</span>`,
            `或者，按一下下方的 <span class="hl">新增</span> 按鈕，將任何目前取得焦點之視窗所關聯的可執行檔新增至 <span class="hl">設定</span> > <span class="hl">遊戲</span> > <span class="hl">自動釋放遊戲</span>`,
        ],
        autorelease: "自動釋放遊戲",
        autoreleasesub: [
            `如果在遊戲視窗關閉後，Steam 仍顯示遊戲為 <i>遊玩中</i>，請嘗試在 <span class="hl">自動釋放遊戲</span> 中新增一個項目`,
            `若要針對目前的遊戲進行此操作，請按一下下方的 <span class="hl">新增</span> 按鈕，將任何目前取得焦點之視窗所關聯的可執行檔新增至 <span class="hl">設定</span> > <span class="hl">遊戲</span> > <span class="hl">自動釋放遊戲</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>當我按一下「新增」按鈕時會發生什麼事？</u></span>`,
        linkgamehelp: "透過焦點新增項目",
        linkgamehelpsub: [
            `按一下 <span class="hl">新增</span> 按鈕後，系統將會使用目前取得焦點之視窗的資訊，自動在 <span class="hl">設定</span> > <span class="hl">遊戲</span> > <span class="hl">自動釋放遊戲</span> 中新增一個項目。`,
            `按下 <span class="hl">新增</span> 按鈕後，將會開始 5 秒倒數計時`,
            `在倒數結束前，請將焦點切換至遊戲視窗`,
            `倒數結束後，系統將會使用取得焦點之視窗所關聯的可執行檔，在 <span class="hl">設定</span> > <span class="hl">遊戲</span> > <span class="hl">自動釋放遊戲</span> 中新增目前 <span class="hl">AppID</span> 的項目`,
            `新的嘗試將會覆寫現有項目，或可在 <span class="hl">設定</span> > <span class="hl">遊戲</span> > <span class="hl">自動釋放遊戲</span> 中按一下 <span id="linkhelpunlink"></span> 按鈕來移除該項目`
        ],
        addlinkfailed: "無法新增視窗",
        addlinkfailedsub: `請按一下 <span class="hl">新增</span> 按鈕以再試一次`,
        webhookunlockmsg: "$user 解鎖了一個成就",
        webhookunlockmsgplat: "$user 解鎖了所有成就",
        webhookingame: "在 $gamename",
        notconnected: "未連接",
        raloghelp: "我的遊戲未被偵測到",
        raenablelog: `模擬器日誌檔案`,
        raenablelogsub: [
            `為了訪問內部遊戲事件（如當前遊戲狀態、成就解鎖信息等），必須在所有選定的模擬器中啟用日誌記錄到外部 <span class="hl">日誌檔案</span> <u>必須啟用</u>。<br><br>所有選定的模擬器 <u>必須使用這個 <span class="hl">日誌檔案</span></u> 作為 <span class="hl">日誌檔案路徑</span> 的值。`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > 設定 > 日誌記錄</span> 必須配置以下設定：
                    <br>
                    <ul>
                        <li><span class="hllb">日誌詳細程度</span>: <span class="hlgreen">開啟</span></li>
                        <li><span class="hllb">前端日誌級別</span>: <span class="hlgreen">1 (信息)</span></li>
                        <li><span class="hllb">寫入日誌檔案</span>: <span class="hlgreen">開啟</span></li>
                        <li><span class="hllb">時間戳日誌檔案</span>: <span class="hlred">關閉</span></li>
                    </ul>
                    <br>
                    使用預設安裝設定，<span class="hl">"retroarch.log"</span> 儲存在：
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > 檢視 > 顯示日誌設定</span> 必須配置以下設定：
                    <br>
                    <ul>
                        <li><span class="hllb">詳細程度</span>: <span class="hlgreen">信息</span></li>
                        <li><span class="hllb">日誌輸出</span> > <span class="hlgreen">寫入檔案</span></li>
                        <li><span class="hllb">日誌類型</span> > <span class="hlgreen">成就（RetroAchievements）</span></li>
                    </ul>
                    <br>
                    使用預設安裝設定，<span class="hl">"dolphin.log"</span> 儲存在以下位置之一：
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2</summary>
                <div>
                    <span class="hl">PCSX2 > 工具 > 啟用文件日誌</span> 必須啟用
                    <br>
                    <br>
                    使用預設安裝設定，<span class="hl">"emulog.txt"</span> 檔案儲存於：
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="duckstation">Duckstation</summary>
                <div>
                    <ul style="background-color: var(--primary); outline: 0.1rem solid red;">
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> 必須 <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>下載</u></span> 並移動到 <span class="hl">Duckstation 的安裝目錄</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > 設定 > 成就 > RAIntegration (僅限開發者)</span> 必須啟用
                    <br>
                    <br>
                    使用預設安裝設定，<span class="hl">"RALog.txt"</span> 將儲存在：
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> 必須啟用並依照以下設定進行配置：
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    使用預設安裝設定時，<span class="hl">"log.txt"</span> 會儲存在：
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "不支援的Beta版",
        betaunsupportedsub: [
            "Steam Achievement Notifier已發布新版本！",
            `<u>此Beta版不再支援</u>。請使用下面的<span class="hl">Releases</span>按鈕，從Github下載並安裝最新的正式版本.`,
            "感謝您的測試！ 💜"
        ],
        betaghreleases: "版本發佈",
    },
    app: {
        content: {
            game: "未檢測到遊戲",
            customise: "自定義",
            test: "顯示測試通知"
        }
    },
    settings: {
        language: {
            title: "語言",
            content: {
                steamlang: "將成就翻譯為 Steam 語言",
                maxsteamlangretries: "最大翻譯嘗試次數"
            }
        },
        os: {
            title: "操作系統",
            content: {
                desktop: "建立桌面捷徑",
                startwin: "登錄時啟動",
                startmin: "最小化啟動",
                nohwa: "停用硬體加速",
                litemode: "輕量模式"
            }
        },
        notifications: {
            title: "通知",
            content: {
                rarity: "稀有度百分比",
                semirarity: "白銀百分比",
                rareonly: "僅顯示稀有",
                all: "全部",
                off: "關閉",
                showpercent: "顯示百分比",
                soundonly: "僅聲音",
                nowtracking: "顯示追蹤通知",
                nowtrackingscale: "追蹤比例",
                nowtrackingpos: "追蹤位置",
                shortcuts: "通知捷徑",
                noiconcache: "停用圖示快取",
                webhooks: "發布到 Discord 伺服器",
                webhooktypes: "Webhook 類型",
                webhookurl: `Webhook URL`,
                webhookcaution: `啟用此選項並提供有效的 Discord Webhook 連結，即表示您同意您了解 <u>當前 Steam 用戶的所有成就和遊戲信息</u> 將通過提供的 Webhook 連結發佈到指定的 Discord 伺服器。<br><br>如果您不希望 Steam Achievement Notifier 代表您發佈這些信息，請禁用此選項。`,
                webhooklaststatus: "最後狀態",
                webhookspoilers: `添加劇透標籤`,
                webhookappid: `顯示 AppID`,
                replaynotify: "重播通知",
                replaynotifyshortcut: "重播快捷鍵",
                customtrigger: "自訂觸發器",
                customtriggershortcut: "觸發捷徑",
                customtriggerdelay: "觸發延遲",
                customtriggerusedisplaytime: "使用顯示時間",
                trophymode: "獎盃模式",
                notifymax: "最大通知數量", 
                notifyspace: "通知間距"
            }
        },
        games: {
            title: "遊戲",
            content: {
                linkedgames: "自動釋放遊戲",
                themeswitch: "自動切換主題",
                exclusionlist: "排除清單",
                inclusionlist: "包含清單",
                listmode: "清單模式",
                exclusion: "排除",
                inclusion: "包含"
            }
        },
        media: {
            title: "媒體",
            content: {
                steamss: "進行 Steam 截圖",
                screenshots: "其他媒體",
                off: "關閉",
                overlay: "帶通知疊加的截圖",
                monitors: "截圖來源",
                hdrmode: "HDR 模式",
                ovpos: "疊加位置",
                ovmatch: "符合自訂位置",
                ovx: "水平偏移",
                ovy: "垂直偏移",
                ovpath: "截圖路徑",
                ssdelay: "截圖延遲",
                notifyimg: "通知圖片",
                screenshot_only: "僅原生截圖",
                imgpath: "圖片路徑",
                ssenabled: "啟用",
                ssmode: "截圖模式",
                screen: "螢幕",
                window: "視窗"
            }
        },
        streaming: {
            title: "直播",
            content: {
                extwin: "流通知",
                extwinframerate: "幀率",
                extwinshow: "顯示視窗",
                audiosrc: "音訊來源",
                notify: "通知",
                app: "應用程式",
                off: "靜音",
                statwin: "成就統計窗口",
                statwinaot: "始終置於最前面",
                noachievements: "沒有成就可顯示",
                startgame: "啟動遊戲以顯示成就！",
                max: "最大值",
                custom: "自定義...",
                statwinshortcut: "疊加層快捷鍵",
            }
        },
        accessibility: {
            title: "可及性",
            content: {
                noanim: "停用應用程式視窗動畫",
                noupdatedialog: "停用更新對話框",
                nvda: "啟用 NVDA 支援",
                tooltips: "顯示工具提示",
                showsystrayopts: "顯示系統托盤選項",
                releaseshortcut: "釋放遊戲快捷鍵"
            }
        },
        advanced: {
            title: "進階",
            content: {
                pollrate: "輪詢率",
                initdelay: "追踪延迟",
                releasedelay: "發布延遲",
                maxretries: "最大重試次數",
                debug: "除錯面板",
                userust: "替代處理模式",
                notifydebug: "顯示偵錯通知",
                exportachdata: "匯出成就數據",
                lognum: "先前的日誌檔案", 
                audiocooldown: "音訊冷卻時間",
                usecustomfiles: "使用自定義應用程式檔案",
                showcustomfiles: "顯示自定義應用程式檔案"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "模擬器",
                rauser: "使用者名稱",
                rakey: "API 密鑰",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "日志文件路徑",
                rapercenttype: "百分比類型",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "輸入日志文件路徑",
                logfile: "日誌檔案",
                status: "狀態",
                game: "遊戲",
                lastachievement: "最後成就 ID",
                wait: "等待模擬器",
                idle: "等待遊戲事件",
                start: "啟動遊戲",
                stop: "停止遊戲",
                achievement: "成就解鎖"
            }
        },
        misc: {
            title: "其他",
            content: {
                colorprofile: "顏色設定檔",
                checkforupdates: "檢查更新",
                log: "應用程式記錄",
                reset: "重設應用程式"
            }
        }
    },    
    customiser: {
        preset: {
            title: "預設",
            content: {
                preset: "通知預設",
                iconanim: "稀有圖示動畫",
                alldetails: "顯示所有詳細資訊",
                usepercent: "使用百分比",
                displaytime: "顯示時間",
                scale: "比例",
                customtext: "自訂文字",
                usegametitle: "使用遊戲標題",
                customfont: "自訂字型"
            }
        },
        sound: {
            title: "音效",
            content: {
                soundmode: "音效模式",
                file: "檔案",
                folder: "隨機選取",
                soundfile: "音效檔案",
                sounddir: "音效資料夾",
                volume: "音量"
            }
        },
        style: {
            title: "風格",
            content: {
                bgstyle: "背景風格",
                solid: "純色",
                gradient: "漸層",
                img: "圖片",
                gameart: "遊戲藝術",
                gradientangle: "漸層角度",
                bgimg: "背景圖片",
                bgachicon: "使用成就圖示",
                bgimgbrightness: "亮度",
                brightness: "亮度",
                blur: "模糊",
                roundness: "圓角",
                fontsize: "字型大小",
                usecustomfontsizes: "使用自訂字型大小",
                unlockmsgfontsize: "解鎖訊息",
                titlefontsize: "標題",
                descfontsize: "描述",
                textvspace: "文字間距",
                opacity: "不透明度",
                bgonly: "僅背景",
                glow: "發光",
                glowcolor: "顏色",
                glowsize: "大小",
                glowx: "水平位移",
                glowy: "垂直位移",
                glowopacity: "不透明度",
                glowanim: "動畫",
                glowspeed: "速度",
                glowrarity: "使用稀有度",
                glowcolorbronze: "稀有度: > $semirarity",
                glowcolorsilver: "稀有度: < $semirarity & > $rarity",
                glowcolorgold: "稀有度: < $rarity",
                off: "關閉",
                pulse: "脈動",
                double: "雙倍",
                focus: "焦點",
                orbit: "軌道",
                fluorescent: "熒光",
                rainbow: "彩虹",
                mask: "遮罩",
                maskimg: "遮罩圖片",
                useoutline: "輪廓",
                outline: "輪廓類型",
                outlinecolor: "輪廓顏色",
                outlinewidth: "輪廓寬度",
                dashed: "虛線",
                dotted: "點線"
            }
        },
        colors: {
            title: "顏色",
            content: {
                primarycolor: "主要顏色",
                secondarycolor: "次要顏色",
                tertiarycolor: "第三顏色",
                iconshadowcolor: "稀有圖示陰影顏色",
                iconanimcolor: "稀有圖示動畫顏色",
                fontcolor: "文字顏色",
                usecustomfontcolors: "使用自訂字體顏色",
                unlockmsgfontcolor: "顏色 1",
                titlefontcolor: "顏色 2",
                descfontcolor: "顏色 3",
                fontoutline: "文字輪廓",
                fontoutlinecolor: "文字輪廓顏色",
                fontoutlinescale: "字型輪廓縮放",
                fontshadow: "文字陰影",
                fontshadowcolor: "文字陰影顏色",
                fontshadowscale: "字型陰影縮放",
                fontshadowx: "水平偏移",
                fontshadowy: "垂直偏移"
            }
        },
        icons: {
            title: "圖示",
            content: {
                iconscale: "圖示縮放",
                iconroundness: "圖示圓角",
                showiconborder: "顯示圖示邊框",
                iconborderimg: "圖示邊框",
                iconborderpos: "邊框位置",
                iconborderscale: "邊框縮放",
                iconborderx: "水平偏移",
                iconbordery: "垂直偏移",
                iconborderrarity: "使用稀有度",
                iconborderimgbronze: "稀有度: > $semirarity",
                iconborderimgsilver: "稀有度: < $semirarity & > $rarity",
                front: "前面",
                back: "後面",
                plat: "100% 圖示",
                usegameicon: "使用遊戲圖示",
                gameicontype: "遊戲圖示類型",
                usecustomimgicon: "使用自訂圖示",
                customimgicon: "自訂圖示",
                icon: "圖示",
                logo: "標誌",
                logoscale: "Logo縮放",
                decoration: "裝飾",
                decorationscale: "裝飾縮放",
                showdecoration: "顯示裝飾",
                rarity: "稀有度",
                showhiddenicon: "顯示隱藏圖示",
                hiddenicon: "隱藏圖示",
                replacelogo: "替換標誌"
            }
        },
        position: {
            title: "位置",
            content: {
                pos: "螢幕位置",
                usecustompos: "使用自訂位置",
                setcustompos: "設定",
                copycustompos: "套用至全部",
                resetcustompos: "重設"
            }
        },
        theme: {
            title: "主題",
            content: {
                updatetheme: "更新主題",
                savetheme: "儲存主題",
                sub: [
                    `儲存的 <span class="hl">用戶主題</span> 可以從主畫面的 <span class="hl">選擇主題</span> 選單中選擇。`,
                    `請確保 <span class="hl">主題名稱</span> 是 <u>唯一</u> 的 - 若名稱與現有主題重複 <u>將覆寫之前的</u>！`
                ],
                placeholder: "主題名稱",
                theme: "主題",
                importtheme: "匯入主題",
                import: "匯入",
                importsub: [
                    `匯入使用者建立的 <span class="hl">主題檔案</span>`,
                    `成功匯入後，<span class="hl">匯入的主題</span> 將自動載入並可從 <span class="hl">主題選擇</span> 選單中選擇`,
                ],
                importidle: `選擇要匯入的 <span class="hl">主題檔案</span>`,
                importcopied: `主題複製成功`,
                importrenamed: `主題重新命名成功`,
                importextracted: `主題成功提取`,
                importrewriting: `重新撰寫主題檔案路徑中...`,
                importconverting: `轉換主題中...`,
                importcreating: `建立主題中...`,
                importdone: `主題匯入成功`,
                importfailed: `匯入選定的主題檔案時發生錯誤！`,
                exporttheme: "匯出主題",
                export: "匯出",
                exporterrortitle: "匯出錯誤",
                exporterrorsub: [
                    "嘗試匯出選定主題時發生錯誤",
                    `請嘗試保存當前主題 (<i>透過 <span class="hl">保存主題</span></i>)，然後再次嘗試匯出`,
                    `如果問題仍然存在，請複製下面的錯誤，並透過<span class="hl">主畫面</span>上的連結按鈕進行報告`
                ],
                synctheme: "同步主題",
                syncedwith: "已同步至",
                themeselect: "已選擇的主題"
            }
        }
    },
    logwin: {
        content: {
            tagline: "這是應用程式啟動後發生的事件",
            copylog: "複製日誌內容"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>確定要執行此操作嗎？</span>
                    <span>所有先前設定的資料，<u>包括自訂設置</u>，將被重置為預設值。</span>
                    <span>🛑 此操作無法還原！</span>
                </div>
            `,
            reset: "重設"
        }
    },
    error: {
        content: {
            subtitle: "Steam 成就通知器遇到問題，需要關閉。",
            details: "以下是錯誤詳細資訊：",
            sub: "請按下方按鈕報告此問題至您偏好的平台。",
            report: "報告",
            log: "應用程式日誌",
            exit: "退出"
        }
    },    
    tooltips: {
        game: "目前正在追踪成就的遊戲",
        usertheme: "選擇先前保存的主題",
        customise: "自定義成就通知",
        test: "顯示測試通知，包括任何自定義",
        kofi: "在 Ko-Fi 上捐款！",
        discord: "加入 Discord！",
        github: "報告問題",
        lang: "選擇應用程式中使用的 UI 語言",
        steamlang: `嘗試從 Steam 應用程式檔案中載入翻譯，以在用戶選擇的 Steam 客戶端語言中顯示成就資訊<br><br><span class="ttdesc">此選項會嘗試在存儲於 Steam 應用程式數據中的 JSON 文件中查找翻譯。如果找不到當前成就的翻譯，則會顯示從 Steamworks 獲取的成就資訊。</span>`,
        maxsteamlangretries: `查找當前成就有效翻譯的嘗試次數（每 100 毫秒）<br><br><span class="ttdesc">Steam 目前僅在與每個遊戲相關聯的 JSON 文件中儲存少量的成就數據。任何不在此文件中的成就將在成就解鎖後添加。<br><br>由於添加新數據可能需要時間，增加此值將提高找到當前成就翻譯數據的機率，但也可能會延遲通知在螢幕上顯示的時間，根據此設定計算的時間。<br><br>如果無法找到當前成就的有效翻譯數據，翻譯將回退到 Steamworks 中指定的語言。</span>`,
        desktop: "切換桌面捷徑以運行應用程式",
        startwin: "在登錄後自動啟動 Steam Achievement Notifier",
        startmin: "啟動後，將應用程式 UI 視窗隱藏，直到從系統匣中打開",
        nohwa: `停用硬體加速，這可能會改善資源有限或沒有專用 GPU 的系統效能<br><br><span class="ttdesc">啟用/停用此選項後，應用程式將重新啟動</span>`,
        litemode: "停用所有互動式 UI 元素，僅通過系統匣圖示提供有限的應用程式功能。可能提高應用程式消耗的資源",
        rarity: `觸發稀有成就通知的百分比。<br><br>任何解鎖百分比高於此值的成就將顯示為主要通知<br><br><span class="ttdesc">如果啟用了<span class="hl">獎盃模式</span>，任何解鎖百分比高於此值的成就將改為顯示為白銀通知</span>`,
        semirarity: `顯示「白銀」通知元素的百分比（例如<span class="hl">稀有度徽章</span>、<span class="hl">裝飾</span>等）。<br><br>任何解鎖百分比低於（或等於）此值且高於<span class="hl">稀有度百分比</span>的成就，將顯示為配置為「白銀」稀有度的通知元素。<br><br>任何解鎖百分比高於此值的成就，將顯示為配置為「青銅」稀有度的通知元素<br><br><span class="ttdesc">如果啟用了<span class="hl">獎盃模式</span>，任何解鎖百分比高於此值的成就將改為顯示為青銅通知</span>`,
        showpercent: "在所選類型的通知中顯示成就的解鎖百分比",
        soundonly: "僅播放通過自訂器設置的聲音，禁用通知",
        extwin: "創建一個窗口，複製當前屏幕上顯示的所有通知。然後，可以將該窗口作為窗口捕捉源添加到流媒體軟體中，如 OBS",
        extwinframerate: "設置流通知的目標幀率",
        extwinshow: `切換流通知窗口的可見性<br><br><span class="ttdesc">當它在任務欄中獲得焦點時，按住 <code class="ttcode">Ctrl</code> 鍵可以顯示窗口的當前位置</span>`,
        audiosrc: "選擇應用程式生成的音訊來源（或禁用音訊）",
        nowtracking: "顯示通知，通知用戶正在追蹤運行中遊戲的成就",
        nowtrackingscale: `設置追蹤通知的大小`,
        nowtrackingpos: `設置追蹤通知的位置`,
        shortcuts: "通過鍵盤快捷鍵觸發測試通知。可以為每種通知類型自定義快捷鍵",
        noiconcache: `啟動遊戲時停用成就圖示快取。<br><br><span class="ttdesc">這可以顯著提升應用程式在啟動遊戲時的效能，也可能解決具有大量成就的遊戲中的追蹤問題。然而，在罕見的情況下，停用圖示快取可能導致通知中缺少成就圖示</span>`,
        steamss: "解鎖成就時拍攝 Steam 截圖",
        screenshots: "顯示通知時創建的其他媒體類型",
        monitors: "拍攝截圖的顯示器",
        hdrmode: `使用與支援高動態範圍（HDR）顯示器兼容的方法進行截圖`,
        ovpos: "通知疊加在截圖中的位置",
        ovmatch: "與自訂器中設定的屏幕位置匹配",
        ovpath: "此選項生成的截圖的保存位置",
        ssdelay: "通知發生後到拍攝截圖之間的延遲時間",
        sspreview: "顯示截圖保存時的預覽",
        noanim: "停用應用程式窗口的所有動畫和過渡效果",
        noupdatedialog: `防止自動顯示並將焦點放在 <span class="hl">更新可用</span> 對話框上<br><br><span class="ttdesc">仍可透過點擊更新按鈕開啟對話框</span>`,
        nvda: "解鎖成就時將成就信息複製到剪貼板，以便屏幕閱讀器軟體（如 NVDA）讀取",
        tooltips: "在應用程式的某些 UI 元素上懸停時顯示工具提示",
        colorprofile: `強制所有應用程式視窗使用選定的顏色設定檔<br><br><span class="ttdesc">需要重新啟動應用程式</span>`,
        pollrate: `設定遊戲中成就資料的更新間隔<br><br><span class="ttdesc">效能可能會因系統值或硬體而增加/減少。較高的值通常會導致較低的系統負載，但可能會造成通知延遲</span>`,
        initdelay: `設定當前 <span class="hl">AppID</span> 檢測與進程/成就追踪開始之間的延遲<br><br><span class="ttdesc">增加此值可以避免 Steam 無法啟動當前遊戲的情況（因為在遊戲啟動之前 Steamworks 初始化應用程序）</span><br><br><span class="ttdesc">另外，增加此值也可以用於繞過遊戲前啟動進程錯誤檢測</span>`,
        releasedelay: `設定目前遊戲被釋放後，背景 Worker 處理程序在重新啟動前所等待的時間。此設定會影響自動處理程序追蹤與自動釋放遊戲<br><br><span class="ttdesc">可提供較長的時間讓 Steamworks 完全從應用程式中釋放。提高此數值可避免異常行為，例如持續追蹤已關閉的遊戲</span>`,
        maxretries: `設定將執行中的處理程序連結至偵測到之 AppID 的最大重試次數。此設定會影響自動處理程序追蹤與自動釋放遊戲<br><br><span class="ttdesc">每秒會嘗試一次重試。若在此重試次數後，執行中的處理程序仍未連結至目前的 AppID，將會回傳無效的處理程序。在此情況下，必須透過 系統匣 > 選項 > 釋放遊戲 手動釋放該遊戲</span>`,
        debug: "打開除錯面板，顯示詳細的處理追蹤資訊",
        userust: "使用基於 Rust 的替代功能來檢查系統上目前是否正在執行追蹤的遊戲處理。未選中時，將使用基於 NodeJS 的預設處理檢查。",
        notifydebug: "為所有通知創建 DevTools 視窗。用於調試/排除通知問題",
        usecustomfiles: "啟用通知加載用戶自定義文件。建議常規用戶謹慎使用",
        showcustomfiles: "打開自定義文件的位置",
        log: "打開應用程式日誌窗口，顯示有關進程活動、警告和錯誤的信息",
        reset: "刪除所有配置數據並重新啟動應用程式",
        playback: "暫停/恢復通知預覽的動畫",
        replay: "重新開始通知預覽的動畫",
        preset: "選擇要自定義的通知預設",
        iconanim: "切換稀有成就圖標邊框和動畫",
        alldetails: "顯示通知中的所有文本元素，包括此預設情況下默認隱藏的元素",
        usepercent: "顯示成就解鎖百分比，而不是XP/S值",
        displaytime: "設置通知顯示的秒數",
        scale: "增加或減小通知的大小",
        customtext: "設置要在通知中顯示的自定義消息",
        usegametitle: "在通知中顯示當前遊戲的標題",
        customfont: "加載要在通知中使用的自定義字體",
        soundmode: "在通知發生時選擇單個音訊文件或從包含多個音訊文件的文件夾中隨機選擇音訊文件",
        soundfile: "選擇通知發生時播放的音訊文件",
        sounddir: "選擇通知發生時將從中隨機選擇音訊文件的文件夾",
        volume: "設置音訊文件的播放音量",
        preview: "預覽所選音訊文件或從文件夾中隨機選擇的音訊文件",
        bgstyle: "選擇通知背景的樣式",
        gradientangle: "設置漸變的角度",
        bgimg: "加載要用作通知背景的圖像文件",
        bgachicon: "將解鎖的成就圖示作為通知背景使用",
        bgimgbrightness: "設置通知背景圖片的亮度",
        brightness: "設置用作通知背景的遊戲圖片的亮度",
        blur: "設定套用於通知背景的模糊程度",
        roundness: "設置通知邊緣的圓角程度",
        fontsize: "設置通知中使用的字體大小",
        opacity: "設置通知的整體不透明度",
        bgonly: "僅設置通知背景的不透明度，使其他元素完全不透明",
        glow: "啟用環繞通知的發光效果",
        glowcolor: "設定發光效果的顏色",
        glowsize: "設定發光效果的大小",
        glowx: "水平調整光暈效果位置",
        glowy: "垂直調整光暈效果位置",
        glowopacity: "設置光暈效果的不透明度",
        glowanim: "選擇要套用於發光效果的預設動畫",
        glowspeed: "設定套用於發光效果的動畫速度",
        glowrarity: "根據解鎖成就的稀有度更改光暈效果的顏色",
        glowcolorbronze: "當解鎖百分比 > $semirarity 時顯示的光暈顏色",
        glowcolorsilver: "當解鎖百分比 < $semirarity 且 > $rarity 時顯示的光暈顏色",
        glowcolorgold: "當解鎖百分比 < $rarity 時顯示的光暈顏色",
        mask: "使用自訂圖像啟用通知部分的遮罩",
        maskimg: `上傳要用作遮罩的圖像檔案<br><br><span class="ttdesc">在 CSS 中，<code class="ttcode">mask-mode: alpha</code> 的工作方式與通常預期的相反 - 圖像檔案中的透明區域將被隱藏，而黑色/灰色區域將允許下方元素可見</span>`,
        useoutline: "在通知周圍顯示輪廓",
        outline: "選擇顯示在通知周圍的輪廓類型",
        outlinecolor: "設置通知周圍輪廓的顏色",
        outlinewidth: "設置通知周圍輪廓的寬度",
        primarycolor: "設置通知的主要顏色",
        secondarycolor: "設置通知的次要顏色",
        tertiarycolor: "設置通知的第三顏色",
        fontcolor: "設置通知中顯示的所有文本的顏色",
        fontoutline: "為通知中顯示的所有文本添加輪廓",
        fontoutlinecolor: "設置文本輪廓的顏色",
        fontoutlinescale: "設定文本輪廓的厚度",
        fontshadow: "為通知中顯示的所有文本添加陰影",
        fontshadowcolor: "設置文本陰影的顏色",
        fontshadowscale: "設定文本陰影的厚度",
        fontshadowx: "水平移動文字陰影的位置",
        fontshadowy: "垂直移動文字陰影的位置",
        iconroundness: "設置通知中顯示的成就/遊戲圖標的圓角程度",
        plat: "加載要用作 100% 圖標的圖像文件",
        usegameicon: "將解鎖的成就圖示替換為當前遊戲的圖示",
        gameicontype: `選擇顯示為遊戲圖示的圖片類型`,
        usecustomimgicon: "將解鎖的成就圖示替換為自訂圖片檔案",
        customimgicon: "載入一個圖片檔案作為自訂圖示",
        showhiddenicon: "在通知中顯示指示成就已隱藏的圖像",
        hiddenicon: "加載圖像文件以替換隱藏成就圖示",
        logo: "加載要替換 Logo 圖標的圖像文件",
        decoration: "加載要替換裝飾圖標的圖像文件",
        showdecoration: "切換裝飾圖標的可見性",
        replacelogo: "以選定的裝飾替換通知中的標誌圖標",
        pos: "設置通知在屏幕上的位置",
        usecustompos: "啟用通知的自定義定位",
        setcustompos: "設置通知的自定義位置",
        copycustompos: "將自訂位置套用至所有其他通知類型",
        resetcustompos: "將通知的位置重置為默認的自定義位置",
        updatetheme: "使用選擇的自定義選項更新當前主題",
        savetheme: "將所有配置的自定義選項保存為新主題",
        visibilitybtn: "在自訂預覽和測試通知中切換元素的可見性",
        delbtn: "將元素重置為默認值",
        imgpath: "這個選項生成的通知圖像將保存在的位置",
        ssenabled: "啟用或禁用此類型的媒體生成",
        checkforupdates: `檢查是否在GitHub上發布了新的應用版本。如果有可用的更新，將在透過<span class="hl">更新可用</span>對話框確認後自動下載並安裝，`,
        linkedgames: `為特定的Steam遊戲<span class="hl">繞過自動進程追蹤</span><br><br><span class="ttdesc">此選項應僅在非常特定的情況下使用。使用者不應該在正常情況下使用此選項！</span>`,
        exclusionlist: `防止應用程式追蹤特定Steam遊戲的成就<br><br><span class="ttdesc">此選項應僅在非常特定的情況下使用。使用者不應該在正常情況下使用此選項！</span>`,
        inclusionlist: `除非特別指定，否則防止所有 Steam 遊戲被此應用程式追蹤<br><br><span class="ttdesc">此選項僅應在非常特定的情況下使用。一般使用者在正常情況下不應使用此選項！</span>`,
        ovx: "水平偏移在螢幕截圖中顯示的通知",
        ovy: "垂直偏移在螢幕截圖中顯示的通知",
        importtheme: `透過使用者建立的 <span class="hl">主題檔案</span> 匯入自訂設置`,
        exporttheme: `匯出當前選取的 <span class="hl">主題</span> 以供分享<br><br><span class="ttdesc">在嘗試匯出之前，請確保已選取所需的 <span class="hl">主題</span>（透過 <span class="hl">主題選擇</span> 選單）。同時確保已將自訂設置保存到選取的 <span class="hl">主題</span>（透過 <span class="hl">儲存主題</span> 選單）<br><br><u>未保存到當前 <span class="hl">主題</span> 的任何自訂設置將不會匯出！</u></span>`,
        webhooks: "使用 Webhook URL 在每次解鎖成就時發布到 Discord 伺服器",
        webhookmain: `切換是否在解鎖 $main 成就時向 Discord 伺服器發布成就資訊`,
        webhooksemi: `切換是否在解鎖 $semi 成就時向 Discord 伺服器發布成就資訊`,
        webhookrare: "切換是否在解鎖 $rare 成就時向 Discord 伺服器發布成就資訊",
        webhookplat: "切換是否在解鎖 $plat 成就時向 Discord 伺服器發布成就資訊",
        webhooktest: "切換是否在觸發任何類型的測試通知時，將測試資訊發佈到Discord伺服器",
        webhookurl: `設置所需 Discord 伺服器的 <span class="hl">Webhook URL</span><br><br><span class="ttdesc">Webhook URL 用於代表用戶或應用程序在 Discord 伺服器/頻道上發布。要為 Discord 伺服器設置新的 Webhook，用戶必須在所需伺服器上擁有允許創建 Webhook 的角色<br><br><u>使用此選項時需要 Webhook URL</u><br><br>詳情請參閱 Discord 的官方文檔</span>`,
        webhookspoilers: `在發布到Discord時，為「隱藏」成就添加劇透標籤`,
        webhookappid: "在 webhook 嵌入的頁腳顯示當前遊戲的 AppID",
        unlockmsg: "設置 $type 內解鎖消息/自定義文本的位置",
        title: "設置 $type 內成就標題的位置",
        desc: "設置 $type 內成就描述的位置",
        notification: "通知",
        screenshot: "截圖",
        percentpos: "設置 $type 內稀有度百分比的位置",
        sspercentpos: "設置 $type 內稀有度百分比的位置",
        hiddeniconpos: "設置 $type 內隱藏/秘密成就圖標的位置",
        sshiddeniconpos: "設置 $type 內隱藏/秘密成就圖標的位置",
        decorationpos: "設置 $type 內裝飾元素的位置",
        ssdecorationpos: "設置 $type 內裝飾元素的位置",
        percentbadge: "在放置於成就/遊戲圖示上方的徽章內顯示解鎖百分比",
        sspercentbadge: "在放置於成就/遊戲圖示上方的徽章內顯示解鎖百分比",
        percentbadgepos: "設定徽章位置",
        sspercentbadgepos: "設定徽章位置",
        percentbadgecolor: "設定徽章背景顏色",
        sspercentbadgecolor: "設定徽章背景顏色",
        percentbadgefontcolor: "設定徽章的字體顏色",
        sspercentbadgefontcolor: "設定徽章的字體顏色",
        percentbadgefontsize: "設定徽章大小",
        sspercentbadgefontsize: "設定徽章大小",
        percentbadgeroundness: "設定徽章圓角",
        sspercentbadgeroundness: "設定徽章圓角",
        percentbadgex: "水平偏移徽章元素的位置",
        sspercentbadgex: "水平偏移徽章元素的位置",
        percentbadgey: "垂直偏移徽章元素的位置",
        sspercentbadgey: "垂直偏移徽章元素的位置",
        percentbadgeimg: "顯示基於稀有度的圖示作為徽章元素",
        sspercentbadgeimg: "顯示基於稀有度的圖示作為徽章元素",
        percentbadgeimgbronze: "當解鎖百分比 > $semirarity 時顯示的徽章圖示",
        sspercentbadgeimgbronze: "當解鎖百分比 > $semirarity 時顯示的徽章圖示",
        percentbadgeimgsilver: "當解鎖百分比 < $semirarity 且 > $rarity 時顯示的徽章圖示",
        sspercentbadgeimgsilver: "當解鎖百分比 < $semirarity 且 > $rarity 時顯示的徽章圖示",
        percentbadgeimggold: "當解鎖百分比 < $rarity 時顯示的徽章圖示",
        sspercentbadgeimggold: "當解鎖百分比 < $rarity 時顯示的徽章圖示",
        percentbadgeimgplat: "當所有成就皆已解鎖時顯示的徽章圖示",
        sspercentbadgeimgplat: "當所有成就皆已解鎖時顯示的徽章圖示",
        resetpbimgs: "重置所有徽章圖示為預設",
        elemsmatch: `與自定義器為此通知類型設置的通知元素設置匹配<br><br><span class="ttdesc">某些通知預設無法完全匹配自定義器設置，因為屏幕通知與截圖通知佈局之間存在差異</span>`,
        themeswitch: `當檢測到特定遊戲時，自動切換到任何已保存的 <span class="hl">主題</span>`,
        userthemesync: `將所選 <span class="hl">主題</span> 中的自定義同步到所有其他通知類型`,
        showsystrayopts: `顯示通常位於 <span class="hl">系統托盤</span> > <span class="hl">選項</span> 下的所有選項，在 <span class="hl">設置</span> > <span class="hl">其他</span>`,
        releaseshortcut: "使用指定的鍵盤快捷鍵釋放當前跟蹤的遊戲",
        themeselect: "選擇之前保存的主題",
        statwin: `在外部窗口中顯示當前遊戲的可配置成就統計<br><br><span class="ttdesc">當與“<span class="hl">將成就翻譯為 Steam 語言</span>”選項一起使用時，某些翻譯可能在解鎖特定成就之前無法使用</span>`,
        statwinaot: `將成就統計覆蓋層設置為「始終置於最前面」模式，讓視窗顯示在遊戲視窗的上方<br><br><span class="ttdesc">啟用後，成就統計覆蓋層將不再註冊用戶互動，例如「點擊」事件。要重新啟用與視窗的互動，必須禁用此選項</span>`,
        statwinshortcut: "使用指定的快捷鍵切換成就統計疊加層",
        ssdisplay: "在通知中顯示截取的螢幕截圖預覽",
        iconscale: "增大或減小成就圖示的大小",
        showiconborder: "將圖像作為邊框顯示在成就圖示周圍",
        iconborderimg: "載入圖像文件作為成就圖示的邊框",
        iconborderpos: "設定圖示邊框圖片應顯示在成就圖示的前方或後方",
        iconborderscale: "調整通知內圖示邊框的大小",
        iconborderx: "調整通知內圖示邊框的水平偏移",
        iconbordery: "調整通知內圖示邊框的垂直偏移",
        iconborderrarity: "根據解鎖的成就稀有度更改顯示的圖標邊框圖片",
        iconborderimgbronze: "當解鎖百分比 > $semirarity 時顯示的圖標邊框圖片",
        iconborderimgsilver: "當解鎖百分比 < $semirarity 且 > $rarity 時顯示的圖標邊框圖片",
        iconshadowcolor: "設定解鎖稀有成就時，圍繞成就圖示的陰影效果顏色",
        iconanimcolor: "設定解鎖稀有成就時，成就圖示背後的動畫效果顏色",
        logoscale: "增大或減小通知中的Logo元素大小",
        decorationscale: "增大或減小通知中的裝飾元素大小",
        usecustomfontsizes: `單獨增大或減小通知中各個文字元素的大小<br><br><span class="ttdesc">當變更個別字型大小時，無法保證保持原始通知佈局</span>`,
        unlockmsgfontsize: "增大或減小解鎖訊息文字元素的大小",
        titlefontsize: "增大或減小成就標題文字元素的大小",
        descfontsize: "增大或減小成就描述文字元素的大小",
        webhookembedcolormain: "設定在解鎖 $main 成就時 webhook 內嵌使用的顏色",
        webhookembedcolorsemi: "設定在解鎖 $semi 成就時 webhook 內嵌使用的顏色",
        webhookembedcolorrare: "設定在解鎖 $rare 成就時 webhook 內嵌使用的顏色",
        webhookembedcolorplat: "設定在解鎖 $plat 成就時 webhook 內嵌使用的顏色",
        raemus: "當遊戲在支持的模擬器中被偵測到時顯示通知",
        rauser: "設定 Retro Achievements 使用者名稱來追蹤成就",
        rakey: `設定用於與 Retro Achievements API 進行身份驗證的 Web API 密鑰<br><br><span class="ttdesc">Web API 密鑰可以通過登入 Retro Achievements 網站並前往 <span class="hl">設定 > 密鑰 > Web API Key</span> 來複製或重新生成<br><br>🔒 提供的密鑰將在儲存在本地系統之前進行加密（如果當前操作系統支持加密）</span>`,
        rapercenttype: "設定是否顯示 Hardcore 或 Softcore 成就解鎖百分比通知",
        retroarch: `顯示 Retro Achievements 通知，適用於透過 RetroArch 模擬的遊戲<br><br><span class="ttdesc"><span class="hl">RetroArch > 設定 > 日誌記錄</span> 必須配置以下設定：<br><br><ul><li><span class="hllb">日誌詳細程度</span>: <span class="hlgreen">開啟</span></li><li><span class="hllb">前端日誌級別</span>: <span class="hlgreen">1 (信息)</span></li><li><span class="hllb">寫入日誌檔案</span>: <span class="hlgreen">開啟</span></li><li><span class="hllb">時間戳日誌檔案</span>: <span class="hlred">關閉</span></li></ul></span>`,
        dolphin: `顯示 Retro Achievements 通知，適用於透過 Dolphin 模擬的遊戲<br><br><span class="ttdesc"><span class="hl">Dolphin > 檢視 > 顯示日誌設定</span> 必須配置以下設定：<br><br><ul><li><span class="hllb">詳細程度</span>: <span class="hlgreen">信息</span></li><li><span class="hllb">日誌輸出</span> > <span class="hlgreen">寫入檔案</span></li><li><span class="hllb">日誌類型</span> > <span class="hlgreen">成就（RetroAchievements）</span></li></ul></span>`,
        pcsx2: `顯示 Retro Achievements 通知，適用於透過 PCSX2 模擬的遊戲<br><br><span class="ttdesc"><span class="hl">PCSX2 > 工具 > 啟用文件日誌</span> 必須啟用</span>`,
        duckstation: `顯示透過 Duckstation 模擬的遊戲的 Retro Achievements 通知<br><br><span class="ttdesc">❗ 檔案 <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> 必須下載並移動到 <span class="hl">Duckstation 的安裝目錄</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > 設定 > 成就 > RAIntegration（僅限開發者）</span> 必須啟用</span>`,
        ppsspp: `為透過 PPSSPP 模擬的遊戲顯示 Retro Achievements 通知<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> 必須啟用並依照以下設定進行配置：<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `設置 RetroArch 的 <span class="hl">"retroarch.log"</span> 日誌檔案路徑<br><br><span class="ttdesc">使用預設安裝設定，<span class="hl">"retroarch.log"</span> 儲存在 <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `設置 Dolphin 的 <span class="hl">"dolphin.log"</span> 日誌檔案路徑<br><br><span class="ttdesc">使用預設安裝設定，<span class="hl">"dolphin.log"</span> 儲存在以下位置之一：<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `設定 PCSX2 的 <span class="hl">"emulog.txt"</span> 日誌檔案路徑<br><br><span class="ttdesc">使用預設安裝設定，<span class="hl">"emulog.txt"</span> 檔案儲存於 <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `設置 Duckstation 的 <span class="hl">"RALog.txt"</span> 日誌檔案路徑<br><br><span class="ttdesc">使用預設安裝設定，<span class="hl">"RALog.txt"</span> 檔案保存在 <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `設定 PPSSPP 的日誌檔案 <span class="hl">"log.txt"</span> 路徑<br><br><span class="ttdesc">使用預設安裝設定時，<span class="hl">"log.txt"</span> 會儲存在 <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "單獨設定通知內文字元素的顏色",
        unlockmsgfontcolor: "設定第一個文字元素的顏色",
        titlefontcolor: "設定第二個文字元素的顏色",
        descfontcolor: "設定第三個文字元素的顏色",
        exportachdata: `當成就解鎖時，將成就數據匯出為 JSON 文件<br><br><span class="ttdesc">啟用後，<span class="ttcode">achdata.json</span> 將匯出至:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "調整通知中各文本元素之間的垂直間距",
        ssmode: `設定螢幕截圖時要擷取整個螢幕或目前的遊戲視窗<span style="color: red;">*</span><br><br><span class="ttdesc">如果無法找到目前遊戲的 <span class="hl">可執行檔</span>（<i>無論是透過 <span class="hl">自動處理程序追蹤</span>，或是新增為 <span class="hl">自動釋放遊戲</span> 項目時</i>），此選項將預設使用「螢幕」模式</span>`,
        replaynotify: "重播最後的成就通知",
        replaynotifyshortcut: "使用指定的快捷鍵重播最後的成就通知",
        replaynotifyempty: `<br><br><span class="ttdesc">重播隊列為空。解鎖一個成就以重播通知</span>`,
        customtrigger: "在解鎖成就時觸發模擬按鍵/組合鍵。可用於觸發外部應用程式中註冊的鍵盤捷徑",
        customtriggershortcut: `在解鎖成就時觸發指定的按鍵/組合鍵<br><br><span class="ttdesc">支援每個捷徑1至3個按鍵。對於少於3個按鍵的按鍵/組合，請按下所需按鍵並等待計時器（5秒）結束</span>`,
        customtriggerdelay: "延遲指定的自訂觸發器按鍵/組合",
        customtriggerusedisplaytime: `根據當前通知類型的顯示時間值延遲指定的自訂觸發器按鍵/組合`,
        trophymode: "將主要/稀有/100%通知類型替換為青銅/白銀/黃金/白金",
        lognum: `儲存並在刪除前保留的先前日誌檔案數量。每次啟動應用程式時都會產生新的日誌檔案<br><br><span class="ttdesc">當設定為 0 時，所有先前的日誌檔案會在退出時被刪除</span>`, 
        detectedappid: `使用目前偵測到遊戲的 <span class="hl">AppID</span>`,
        listmode: `設定 <span class="hl">排除</span>/<span class="hl">包含清單</span> 的行為<br><br><span class="ttdesc">• <span class="hl">排除</span>：只忽略清單中指定的遊戲<br>• <span class="hl">包含</span>：忽略所有遊戲，除了清單中指定的遊戲</span>`,
        notifymax: `設定同時在螢幕上顯示的最大通知數量<br><br><span class="ttdesc">增加同時顯示的通知數量會需要更多資源，並可能導致效能降低</span>`,
        notifyspace: "設定同時在螢幕上顯示的通知之間的距離",
        audiocooldown: `設定後續通知在播放新音訊前需等待的時間<br><br><span class="ttdesc">若最大通知數量設為 1，音訊將不受影響</span>`
    },
    update: {
        updateavailable: "有可用更新",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifier 有新的更新可用！",
            `完整的發行說明在 <span id="discordreleasenotes"></span> 和 <span id="githubreleasenotes"></span> 上可用`
        ],
        update: "更新"
    },
    linkgame: {
        content: {
            exepath: "執行檔路徑",
            managesub: [
                `如果在遊戲視窗關閉後，Steam 仍顯示遊戲為 <i>遊玩中</i>，請嘗試在 <span class="hl">自動釋放遊戲</span> 中新增一個項目`,
                `新增特定遊戲的 <span class="hl">AppID</span> 及其預期的 <span class="hl">遊戲可執行檔</span>，或 <span class="hl">移除</span> 現有項目`,
                `當偵測到遊戲後，也可在 <span class="hl">系統匣圖示</span> 上 <i>按一下滑鼠右鍵</i> > <span class="hl">自動釋放遊戲</span> 來新增項目`,
                `<span class="hl help" id="appidhelp"><u>我要如何找到 Steam 遊戲的 AppID？</u></span>`
            ],
            linknew: "新增項目",
            linknewsub: [
                `新增新遊戲的 <span class="hl">AppID</span> 及其預期的 <span class="hl">遊戲可執行檔</span>`,
                `新增後，可透過先前的 <span class="hl">自動釋放遊戲</span> 選單 <span class="hl">移除</span> 這些項目`
            ],
            linkedit: "編輯項目",
            linkeditsub: [
                `編輯現有遊戲的 <span class="hl">AppID</span> 及其預期的 <span class="hl">遊戲可執行檔</span>`,
                `新增後，可透過先前的 <span class="hl">自動釋放遊戲</span> 選單 <span class="hl">移除</span> 這些項目`
            ],
            link: "新增"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `將任何Steam遊戲的<span class="hl">AppID</span>新增至<span class="hl">排除清單</span>`,
                `Steam成就通知器不會嘗試追蹤已新增至<span class="hl">排除清單</span>的任何遊戲的成就資料`,
                `<span class="hl" id="appidhelp"><u>如何找到Steam遊戲的AppID？</u></span>`
            ],
            exclusionnew: "新增排除",
            exclusionnewsub: [
                `輸入要新增至<span class="hl">排除清單</span>的<span class="hl">AppID</span>`
            ],
            exclusionedit: "編輯排除清單",
            exclusioneditsub: [
                `編輯<span class="hl">排除清單</span>中現有的<span class="hl">AppID</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `將任意 Steam 遊戲的 <span class="hl">AppID</span> 新增至 <span class="hl">包含清單</span>`,
                `Steam Achievement Notifier 只會嘗試追蹤已新增至 <span class="hl">包含清單</span> 的遊戲成就資料`,
                `<span class="hl help" id="appidhelp"><u>如何查找 Steam 遊戲的 AppID？</u></span>`
            ],
            inclusionnew: "新增包含項目",
            inclusionnewsub: [
                `輸入要新增至 <span class="hl">包含清單</span> 的 <span class="hl">AppID</span>`
            ],
            inclusionedit: "編輯包含項目",
            inclusioneditsub: [
                `編輯 <span class="hl">包含清單</span> 中現有的 <span class="hl">AppID</span>`
            ]
        }
    },
    notificationelems: {
        title: "通知元素",
        content: {
            unlockmsg: "解鎖消息",
            title: "成就標題",
            desc: "成就描述",
            hiddeniconpos: "隱藏圖標",
            sshiddeniconpos: "隱藏圖標",
            decorationpos: "裝飾",
            ssdecorationpos: "裝飾",
            percentpos: "稀有度百分比",
            sspercentpos: "稀有度百分比",
            percentbadge: "百分比徽章",
            sspercentbadge: "百分比徽章",
            percentbadgepos: "徽章位置",
            sspercentbadgepos: "徽章位置",
            percentbadgecolor: "徽章顏色",
            sspercentbadgecolor: "徽章顏色",
            percentbadgefontcolor: "徽章字體顏色",
            sspercentbadgefontcolor: "徽章字體顏色",
            percentbadgefontsize: "徽章大小",
            sspercentbadgefontsize: "徽章大小",
            percentbadgeroundness: "徽章圓角",
            sspercentbadgeroundness: "徽章圓角",
            percentbadgex: "水平偏移",
            sspercentbadgex: "水平偏移",
            percentbadgey: "垂直偏移",
            sspercentbadgey: "垂直偏移",
            percentbadgeimg: "使用圖示",
            sspercentbadgeimg: "使用圖示",
            percentbadgeimgbronze: "稀有度: > $semirarity",
            sspercentbadgeimgbronze: "稀有度: > $semirarity",
            percentbadgeimgsilver: "稀有度: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "稀有度: < $semirarity & > $rarity",
            percentbadgeimggold: "稀有度: < $rarity",
            sspercentbadgeimggold: "稀有度: < $rarity",
            resetpbimgs: "重置徽章圖示",
            elemsmatch: "匹配自定義器設置",
            ssdisplay: "螢幕截圖預覽"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `將任何遊戲的 <span class="hl">AppID</span> 添加到自動切換 <span class="hl">主題</span> 當檢測到時`,
                `可以為每個通知類型選擇任何已保存的 <span class="hl">主題</span>，以及用作 <span class="hl">截圖來源</span> 的所需顯示器`,
                `<span class="hl" id="appidhelp"><u>我該如何找到Steam遊戲的AppID?</u></span>`
            ],
            themeswitchnew: "新自動切換",
            themeswitchnewsub: [
                `輸入遊戲的 <span class="hl">AppID</span>，以及用作 <span class="hl">截圖來源</span> 的所需顯示器`,
                `選擇當檢測到此遊戲的 <span class="hl">AppID</span> 時，要為每個通知類型切換到哪個 <span class="hl">主題</span>`
            ],
            themeswitchedit: "編輯自動切換",
            themeswitcheditsub: [
                `編輯用作此遊戲<span class="hl">AppID</span>的<span class="hl">截圖來源</span>的目標顯示器`,
                `更改當偵測到此遊戲的<span class="hl">AppID</span>時，針對每種通知類型切換的<span class="hl">主題</span>`
            ],
            themes: "主題",
            src: "截圖來源",
            themedeleted: "主題已刪除"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `看起來你正在嘗試啟用選項 <span class="hl">${opt}</span>，但在安裝 <code class="dialogcode">${dep}</code> 套件之前無法啟用此選項`,
    `請執行 <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> 來安裝此相依套件`
]