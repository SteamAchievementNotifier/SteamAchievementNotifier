export const translations = {
    global: {
        main: "主要",
        rare: "稀有",
        plat: "100%",
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
        settings: "設置",
        appversion: "應用程式版本",
        image: "圖像",
        audio: "音頻",
        folder: "文件夾",
        font: "字體",
        select: "選擇",
        gametitle: "遊戲標題",
        achievementunlocked: "成就解鎖",
        gamecomplete: "100% 完成",
        congrats: "恭喜！",
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
        releasegame: "釋放遊戲",
        releasegamesub: [
            `重新啟動背景的 Worker 程序並停止追蹤當前遊戲`,
            `如果你最近關閉了一個遊戲，但 Steam 仍然顯示它正在運行，或者 Steam Achievement Notifier 仍然顯示正在追蹤已經關閉的遊戲，請嘗試此選項`
        ],
        noupdateavailable: "沒有可用的更新",
        latestversion: "最新版本已安裝",
        missingdeps: "缺少依賴",
        missingdepssub: [
            `看起來您正嘗試啟用 <span class="hl">在 Steam 上截圖</span> 的選項。但是，在 Linux 上，若沒有先安裝 <code class="dialogcode">xdotool</code> 套件，截圖將無法自動觸發`,
            `請執行 <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> 以安裝此依賴，這將確保在此設備上能夠進行 Steam 截圖`
        ],
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
        ]
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
            title: "語言"
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
                rareonly: "僅顯示稀有",
                all: "全部",
                off: "關閉",
                showpercent: "顯示百分比",
                soundonly: "僅聲音",
                extwin: "流通知",
                audiosrc: "音訊來源",
                notify: "通知",
                app: "應用程式",
                nowtracking: "顯示追蹤通知",
                nowtrackingscale: "追蹤比例",
                shortcuts: "通知捷徑",
                noiconcache: "停用圖示快取"
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
                ovpos: "疊加位置",
                ovmatch: "符合自訂位置",
                ovpath: "截圖路徑",
                ssdelay: "截圖延遲",
                notifyimg: "通知圖片",
                imgpath: "圖片路徑"
            }
        },
        games: {
            title: "遊戲",
            content: {
                linkedgames: "已連結的遊戲",
                exclusionlist: "排除清單"
            }
        },
        accessibility: {
            title: "可及性",
            content: {
                noanim: "停用應用程式視窗動畫",
                nvda: "啟用 NVDA 支援",
                tooltips: "顯示工具提示"
            }
        },
        advanced: {
            title: "進階",
            content: {
                pollrate: "輪詢率",
                releasedelay: "發布延遲",
                maxretries: "最大重試次數",
                debug: "除錯面板",
                userust: "替代處理模式",
                notifydebug: "顯示偵錯通知",
                usecustomfiles: "使用自定義應用程式檔案",
                showcustomfiles: "顯示自定義應用程式檔案"
            }
        },        
        misc: {
            title: "其他",
            content: {
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
                bgimgbrightness: "亮度",
                brightness: "亮度",
                blur: "模糊",
                roundness: "圓角",
                fontsize: "字型大小",
                opacity: "不透明度",
                bgonly: "僅背景",
                glow: "發光",
                glowcolor: "顏色",
                glowsize: "大小",
                glowanim: "動畫",
                glowspeed: "速度",
                off: "關閉",
                pulse: "脈動",
                rainbow: "彩虹",
                mask: "遮罩",
                maskimg: "遮罩圖片"
            }
        },
        colors: {
            title: "顏色",
            content: {
                primarycolor: "主要顏色",
                secondarycolor: "次要顏色",
                tertiarycolor: "第三顏色",
                fontcolor: "文字顏色",
                fontoutline: "文字輪廓",
                fontoutlinecolor: "文字輪廓顏色",
                fontshadow: "文字陰影",
                fontshadowcolor: "文字陰影顏色"
            }
        },
        icons: {
            title: "圖示",
            content: {
                iconroundness: "圖示圓角",
                plat: "100% 圖示",
                usegameicon: "使用遊戲圖示",
                logo: "標誌",
                decoration: "裝飾",
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
                resetcustompos: "重設"
            }
        },
        theme: {
            title: "主題",
            content: {
                savetheme: "儲存主題",
                sub: [
                    `儲存的 <span class="hl">用戶主題</span> 可以從主畫面的 <span class="hl">選擇主題</span> 選單中選擇。`,
                    `請確保 <span class="hl">主題名稱</span> 是 <u>唯一</u> 的 - 若名稱與現有主題重複 <u>將覆寫之前的</u>！`
                ],
                placeholder: "主題名稱",
                theme: "主題"
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
        desktop: "切換桌面捷徑以運行應用程式",
        startwin: "在登錄後自動啟動 Steam Achievement Notifier",
        startmin: "啟動後，將應用程式 UI 視窗隱藏，直到從系統匣中打開",
        nohwa: `停用硬體加速，這可能會改善資源有限或沒有專用 GPU 的系統效能<br><br><span class="ttdesc">啟用/停用此選項後，應用程式將重新啟動</span>`,
        litemode: "停用所有互動式 UI 元素，僅通過系統匣圖示提供有限的應用程式功能。可能提高應用程式消耗的資源",
        rarity: "稀有成就通知觸發的百分比。任何解鎖百分比高於此值的成就將顯示為主要通知",
        showpercent: "在所選類型的通知中顯示成就的解鎖百分比",
        soundonly: "僅播放通過自訂器設置的聲音，禁用通知",
        extwin: "創建一個隱藏的背景視窗，複製當前正在顯示的任何通知。然後，可以將此視窗添加為流媒體軟體（如 OBS）中的視窗捕獲來源",
        audiosrc: "選擇應用程式生成的音訊來源（或禁用音訊）",
        nowtracking: "顯示通知，通知用戶正在追蹤運行中遊戲的成就",
        nowtrackingscale: `設置追蹤通知的大小`,
        shortcuts: "通過鍵盤快捷鍵觸發測試通知。可以為每種通知類型自定義快捷鍵",
        noiconcache: `啟動遊戲時停用成就圖示快取。<br><br><span class="ttdesc">這可以顯著提升應用程式在啟動遊戲時的效能，也可能解決具有大量成就的遊戲中的追蹤問題。然而，在罕見的情況下，停用圖示快取可能導致通知中缺少成就圖示</span>`,
        steamss: "解鎖成就時拍攝 Steam 截圖",
        screenshots: "顯示通知時創建的其他媒體類型",
        monitors: "拍攝截圖的顯示器",
        ovpos: "通知疊加在截圖中的位置",
        ovmatch: "與自訂器中設定的屏幕位置匹配",
        ovpath: "此選項生成的截圖的保存位置",
        ssdelay: "通知發生後到拍攝截圖之間的延遲時間",
        sspreview: "顯示截圖保存時的預覽",
        noanim: "停用應用程式窗口的所有動畫和過渡效果",
        nvda: "解鎖成就時將成就信息複製到剪貼板，以便屏幕閱讀器軟體（如 NVDA）讀取",
        tooltips: "在應用程式的某些 UI 元素上懸停時顯示工具提示",
        pollrate: `設定遊戲中成就資料的更新間隔<br><br><span class="ttdesc">效能可能會因系統值或硬體而增加/減少。較高的值通常會導致較低的系統負載，但可能會造成通知延遲</span>`,
        releasedelay: `設定背景處理程序在當前遊戲發布後重新啟動前等待的時間。影響自動處理追蹤和手動連結的遊戲。<br><br><span class="ttdesc">提供更長的時間間隔，完全從應用中釋放 Steamworks。增加此值可防止異常行為，例如追蹤先前關閉的遊戲</span>`,
        maxretries: `設定將運行中的處理程序連結到檢測到的 AppID 的最大重試次數。影響自動處理追蹤和手動連結的遊戲。<br><br><span class="ttdesc">連結嘗試每秒執行一次。如果運行中的處理程序在此重試次數後未連結到當前 AppID，將返回無效的處理程序。在這種情況下，需要通過系統托盤 > 選項 > 釋放遊戲來手動釋放遊戲</span>`,
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
        glowanim: "選擇要套用於發光效果的預設動畫",
        glowspeed: "設定套用於發光效果的動畫速度",
        mask: "使用自訂圖像啟用通知部分的遮罩",
        maskimg: `上傳要用作遮罩的圖像檔案<br><br><span class="ttdesc">在 CSS 中，<code class="ttcode">mask-mode: alpha</code> 的工作方式與通常預期的相反 - 圖像檔案中的透明區域將被隱藏，而黑色/灰色區域將允許下方元素可見</span>`,
        primarycolor: "設置通知的主要顏色",
        secondarycolor: "設置通知的次要顏色",
        tertiarycolor: "設置通知的第三顏色",
        fontcolor: "設置通知中顯示的所有文本的顏色",
        fontoutline: "為通知中顯示的所有文本添加輪廓",
        fontoutlinecolor: "設置文本輪廓的顏色",
        fontshadow: "為通知中顯示的所有文本添加陰影",
        fontshadowcolor: "設置文本陰影的顏色",
        iconroundness: "設置通知中顯示的成就/遊戲圖標的圓角程度",
        plat: "加載要用作 100% 圖標的圖像文件",
        usegameicon: "將默認通知圖標替換為當前遊戲的圖標",
        showhiddenicon: "在通知中顯示指示成就已隱藏的圖像",
        hiddenicon: "加載圖像文件以替換隱藏成就圖示",
        logo: "加載要替換 Logo 圖標的圖像文件",
        decoration: "加載要替換裝飾圖標的圖像文件",
        showdecoration: "切換裝飾圖標的可見性",
        replacelogo: "以選定的裝飾替換通知中的標誌圖標",
        pos: "設置通知在屏幕上的位置",
        usecustompos: "啟用通知的自定義定位",
        setcustompos: "設置通知的自定義位置",
        resetcustompos: "將通知的位置重置為默認的自定義位置",
        savetheme: "將所有配置的自定義選項保存為新主題",
        visibilitybtn: "在自訂預覽和測試通知中切換元素的可見性",
        delbtn: "將元素重置為默認值",
        link: `開啟 <span class="hl">管理已連結遊戲選單</span>`,
        imgpath: "這個選項生成的通知圖像將保存在的位置",
        linkedgames: `為特定的Steam遊戲<span class="hl">繞過自動進程追蹤</span><br><br><span class="ttdesc">此選項應僅在非常特定的情況下使用。使用者不應該在正常情況下使用此選項！</span>`,
        exclusionlist: `防止應用程式追蹤特定Steam遊戲的成就<br><br><span class="ttdesc">此選項應僅在非常特定的情況下使用。使用者不應該在正常情況下使用此選項！</span>`
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
                `手動將遊戲的 <span class="hl">執行檔</span> 關聯至特定的 <span class="hl">AppID</span>，或 <span class="hl">取消關聯</span> 一個現有的`,
                `Steam 成就通知器將不再對任何 <span class="hl">已關聯的遊戲</span> 使用 <span class="hl">自動進程追蹤</span> - 取而代之的是，指定的 <span class="hl">執行檔</span> 將在檢測到相應的 <span class="hl">AppID</span> 時被追蹤`,
                `<span class="hl" id="appidhelp"><u>如何找到 Steam 遊戲的 AppID？</u></span>`
            ],
            linknew: "新增關聯遊戲",
            linknewsub: [
                `創建一個新的連結，將遊戲的 <span class="hl">執行檔</span> 與關聯的 <span class="hl">AppID</span> 連接`,
                `創建後，這些連結可以通過之前的 <span class="hl">管理已關聯的遊戲</span> 對話框進行 <span class="hl">取消關聯</span>`
            ],
            link: "關聯",
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
            ]
        }
    }
}