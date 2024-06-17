export const translations = {
    global: {
        main: "メイン",
        rare: "レア",
        plat: "100%",
        topleft: "左上",
        topcenter: "上中央",
        topright: "右上",
        bottomleft: "左下",
        bottomcenter: "下中央",
        bottomright: "右下",
        ok: "OK",
        preview: "プレビュー",
        save: "保存",
        back: "戻る",
        settings: "設定",
        appversion: "アプリのバージョン",
        image: "画像",
        audio: "オーディオ",
        folder: "フォルダ",
        font: "フォント",
        select: "選択",
        gametitle: "ゲームのタイトル",
        congrats: "おめでとうございます！",
        achievementunlocked: "実績が解除されました",
        gamecomplete: "100% 完了",
        achievementdesc: "テスト通知ボタンをクリックしました",
        gamecompletedesc: "すべての実績を解除しました！",
        defaultcustomfont: "デフォルト（フォントが選択されていません）",
        defaultsoundfile: "デフォルト（ファイルが選択されていません）",
        defaultsounddir: "デフォルト（フォルダが選択されていません）",
        nowtracking: "現在の実績のトラッキング：",
        nopreview: "ネイティブOSではプレビューを利用できません",
        options: "オプション",
        resetwindow: "ウィンドウをリセット",
        show: "表示",
        exit: "終了",
        releasegame: "ゲームのリリース",
        releasegamesub: [
            `バックグラウンドのWorkerプロセスを再起動し、現在のゲームの追跡を解除します`,
            `最近ゲームを閉じたがSteamがまだ実行中と表示されている場合、またはSteam Achievement Notifierがすでに閉じられたゲームの追跡をまだ表示している場合は、このオプションを試してみてください`
        ],
        noupdateavailable: "利用可能な更新はありません",
        latestversion: "最新バージョンがインストールされています",
        missingdeps: "依存関係が不足しています",
        missingdepssub: [
            `Steam スクリーンショットを有効にしようとしているようです。ただし、Linux 上では、<code class="dialogcode">xdotool</code> パッケージを先にインストールしないとスクリーンショットを自動的にトリガーすることはできません`,
            `この依存関係をインストールするには、<code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> を実行してください。これにより、このデバイスで Steam スクリーンショットを撮影できるようになります`
        ],
        restartapp: "アプリを再起動する",
        restartappsub: [
            `もし何かが正常に動作していない場合は、このオプションを使ってアプリを閉じて再度開いてください`,
            `アプリを再起動しても問題が解決しない場合は、ホーム画面のアプリ内リンクを使用して報告してください`
        ],
        suspend: "一時停止",
        resume: "再開",
        new: "新規...",
        nodata: "データがありません",
        findappid: "AppIDを検索",
        findappidsub: [
            `各Steamゲームには固有の番号があります - これを <span class="hl">AppID</span> と呼びます。任意のSteamゲームの関連するAppIDを見つけるには、次のいずれかを確認してください：`,
            ` <span class="hl">Steamクライアント</span> で、<span class="hl">ライブラリ</span>内のゲームを右クリックし、<i>プロパティ</i> > <i>更新</i> を選択します - ここにAppIDがリストされます`,
            `ゲームの <span class="hl">ストアページ</span> の <span class="hl">URL</span> - <span class="hl">app/</span> の後にリストされる番号です： <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `<span class="hl">SteamDB</span> のようなウェブサイト - 各ゲームのAppIDが <span class="hl">App Info</span> セクションにリストされます`
        ]
    },
    app: {
        content: {
            game: "ゲームが検出されません",
            customise: "カスタマイズ",
            test: "テスト通知を表示"
        }
    },
    settings: {
        language: {
            title: "言語"
        },
        os: {
            title: "オペレーティングシステム",
            content: {
                desktop: "デスクトップショートカットの作成",
                startwin: "ログオン時に開始",
                startmin: "最小化して開始",
                nohwa: "ハードウェアアクセラレーションを無効にする",
                litemode: "ライトモード"
            }
        },
        notifications: {
            title: "通知",
            content: {
                rarity: "レア度の割合",
                rareonly: "レアのみ",
                all: "すべて",
                off: "オフ",
                showpercent: "パーセンテージを表示",
                soundonly: "サウンドのみ",
                extwin: "ストリーム通知",
                audiosrc: "オーディオソース",
                notify: "通知",
                app: "アプリ",
                nowtracking: "トラッキング通知を表示する",
                nowtrackingscale: "トラッキングスケール",
                shortcuts: "通知ショートカット",
                noiconcache: "アイコンキャッシュの無効化"
            }
        },
        media: {
            title: "メディア",
            content: {
                steamss: "Steamスクリーンショットを撮る",
                screenshots: "追加のメディア",
                off: "オフ",
                overlay: "通知オーバーレイ付きスクリーンショット",
                monitors: "スクリーンショットのソース",
                ovpos: "オーバーレイの位置",
                ovmatch: "カスタマイズ位置と一致",
                ovx: "水平オフセット",
                ovy: "垂直オフセット",                
                ovpath: "スクリーンショットのパス",
                ssdelay: "スクリーンショットの遅延",
                notifyimg: "通知画像",
                imgpath: "画像のパス"
            }
        },
        games: {
            title: "ゲーム",
            content: {
                linkedgames: "リンクされたゲーム",
                exclusionlist: "除外リスト"
            }
        },
        accessibility: {
            title: "アクセシビリティ",
            content: {
                noanim: "アプリウィンドウのアニメーションを無効にする",
                nvda: "NVDAサポートを有効にする",
                tooltips: "ツールチップを表示"
            }
        },
        advanced: {
            title: "高度な設定",
            content: {
                pollrate: "ポーリングレート",
                releasedelay: "リリース遅延",
                maxretries: "最大リトライ回数",
                debug: "デバッグパネル",
                userust: "代替処理モード",
                notifydebug: "デバッグ通知の表示",
                usecustomfiles: "カスタムアプリファイルの使用",
                showcustomfiles: "カスタムアプリファイルの表示"
            }
        },        
        misc: {
            title: "その他",
            content: {
                checkforupdates: "更新を確認",
                log: "アプリケーションログ",
                reset: "アプリをリセット"
            }
        }
    },    
    customiser: {
        preset: {
            title: "プリセット",
            content: {
                preset: "通知プリセット",
                iconanim: "レアアイコンアニメーション",
                alldetails: "全詳細表示",
                usepercent: "パーセンテージを使用",
                displaytime: "表示時間",
                scale: "スケール",
                customtext: "カスタムテキスト",
                usegametitle: "ゲームタイトルを使用",
                customfont: "カスタムフォント"
            }
        },
        sound: {
            title: "サウンド",
            content: {
                soundmode: "サウンドモード",
                file: "ファイル",
                folder: "ランダム",
                soundfile: "サウンドファイル",
                sounddir: "サウンドフォルダ",
                volume: "音量"
            }
        },
        style: {
            title: "スタイル",
            content: {
                bgstyle: "背景スタイル",
                solid: "ソリッド",
                gradient: "グラデーション",
                img: "画像",
                gameart: "ゲームアート",
                gradientangle: "グラデーション角度",
                bgimg: "背景画像",
                bgimgbrightness: "明るさ",
                brightness: "明るさ",
                blur: "ぼかし",
                roundness: "丸み",
                fontsize: "フォントサイズ",
                opacity: "不透明度",
                bgonly: "背景のみ",
                glow: "発光",
                glowcolor: "色",
                glowsize: "サイズ",
                glowanim: "アニメーション",
                glowspeed: "速度",
                off: "なし",
                pulse: "パルス",
                rainbow: "虹",
                mask: "マスク",
                maskimg: "マスク画像"
            }
        },
        colors: {
            title: "色",
            content: {
                primarycolor: "プライマリカラー",
                secondarycolor: "セカンダリカラー",
                tertiarycolor: "第三色",
                fontcolor: "フォントカラー",
                fontoutline: "フォントアウトライン",
                fontoutlinecolor: "フォントアウトラインカラー",
                fontshadow: "フォントシャドウ",
                fontshadowcolor: "フォントシャドウカラー"
            }
        },
        icons: {
            title: "アイコン",
            content: {
                iconroundness: "アイコンの角丸",
                plat: "100％ロゴ",
                usegameicon: "ゲームアイコンを使用",
                logo: "ロゴ",
                decoration: "装飾",
                showdecoration: "装飾を表示",
                rarity: "希少度",
                showhiddenicon: "隠しアイコンを表示",
                hiddenicon: "隠しアイコン",
                replacelogo: "ロゴの置換"
            }
        },
        position: {
            title: "位置",
            content: {
                pos: "画面位置",
                usecustompos: "カスタム位置を使用",
                setcustompos: "設定",
                resetcustompos: "リセット"
            }
        },
        theme: {
            title: "テーマ",
            content: {
                savetheme: "テーマを保存",
                sub: [
                    `保存された<span class="hl">ユーザーテーマ</span>は、ホーム画面の<span class="hl">テーマ選択</span>メニューから選択できます。`,
                    `テーマ名が<u>一意</u>であることを確認してください - 既存のテーマと一致する名前は、<u>前のテーマを上書き</u>します！`
                ],
                placeholder: "テーマ名",
                theme: "テーマ",
                importtheme: "テーマのインポート",
                import: "インポート",
                importsub: [
                    `ユーザーが作成した<span class="hl">テーマファイル</span>をインポートします`,
                    `<span class="hl">インポートされたテーマ</span>は、正常にインポートされると自動的に読み込まれ、<span class="hl">テーマ選択</span>メニューから選択できます`,
                ],
                importidle: `インポートする<span class="hl">テーマファイル</span>を選択してください`,
                importcopied: `テーマが正常にコピーされました`,
                importrenamed: `テーマが正常に名前変更されました`,
                importextracted: `テーマが正常に抽出されました`,
                importrewriting: `テーマファイルのパスを書き換えています...`,
                importconverting: `テーマを変換しています...`,
                importcreating: `テーマを作成しています...`,
                importdone: `テーマが正常にインポートされました`,
                importfailed: `選択したテーマファイルのインポート中にエラーが発生しました！`,
                exporttheme: "テーマのエクスポート",
                export: "エクスポート"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "アプリケーションの起動以来の出来事はこちらです",
            copylog: "ログ内容をコピー"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>本当によろしいですか？</span>
                    <span>以前に構成されたすべてのデータ、<u>カスタマイズを含む</u>は、デフォルトにリセットされます。</span>
                    <span>🛑 これは元に戻すことができません！</span>
                </div>
            `,
            reset: "リセット"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifierに問題が発生し、閉じる必要があります。",
            details: "エラーの詳細は次のとおりです：",
            sub: "お好みのプラットフォームを使用して、この問題を報告するための下のボタンをクリックしてください。",
            report: "レポート",
            log: "アプリログ",
            exit: "終了"
        }
    },    
    tooltips: {
        game: "現在追跡中の実績のゲーム",
        usertheme: "以前に保存したテーマを選択",
        customise: "実績通知をカスタマイズ",
        test: "テスト通知を表示し、カスタマイズを含める",
        kofi: "Ko-Fiで寄付する！",
        discord: "Discordに参加する！",
        github: "問題を報告する",
        lang: "アプリ内で使用するUI言語を選択",
        desktop: "アプリを実行するためのデスクトップショートカットを切り替える",
        startwin: "ログイン後にSteam Achievement Notifierを自動的に開始する",
        startmin: "起動後、システムトレイから開かれるまでアプリUIウィンドウを非表示にする",
        nohwa: `ハードウェアアクセラレーションを無効にし、リソースが限られたシステムや専用のGPUを持たないシステムでのパフォーマンスを向上させることができます<br><br><span class="ttdesc">このオプションを有効化/無効化すると、アプリケーションが再起動します</span>`,
        litemode: "すべての対話型UI要素を無効にし、システムトレイアイコン経由で限定的なアプリ機能のみを提供する。アプリのリソース消費を改善する可能性があります",
        rarity: "レアな実績通知がトリガーされるパーセンテージ。この値を超えるアンロックパーセンテージを持つ実績はメイン通知として表示されます",
        showpercent: "選択したタイプの通知に実績のアンロックパーセンテージを表示する",
        soundonly: "通知を無効にし、カスタマイザで設定されたサウンドのみ再生する",
        extwin: "現在表示されている通知を重複させる非表示のバックグラウンドウィンドウを作成します。このウィンドウは、OBSなどのストリーミングソフトウェアで使用するためのウィンドウキャプチャソースとして追加できます",
        audiosrc: "アプリによって生成されるオーディオのソースを選択（または無効化）します",
        nowtracking: "実行中のゲームの実績が追跡されていることをユーザーに通知する",
        nowtrackingscale: `トラッキング通知のサイズを設定する`,
        shortcuts: "キーボードショートカットを使用してテスト通知をトリガーします。各通知タイプごとにショートカットをカスタマイズできます",
        steamss: "実績がアンロックされたときにSteamスクリーンショットを撮影する",
        noiconcache: `ゲームの起動時に実績アイコンのキャッシュを無効にします。<br><br><span class="ttdesc">これにより、ゲームの起動時にアプリのパフォーマンスが大幅に向上し、多くの実績を持つゲームのトラッキング問題も解消される場合があります。ただし、アイコンキャッシュを無効にすると、稀に通知で実績アイコンが表示されなくなる場合があります</span>`,
        screenshots: "通知が表示されるときに作成する追加メディアのタイプを選択します",
        monitors: "スクリーンショットを撮影するモニター",
        ovpos: "スクリーンショット内の通知オーバーレイの位置",
        ovmatch: "この通知タイプのカスタマイザで設定された画面位置に一致させる",
        ovpath: "このオプションで生成されたスクリーンショットの保存場所",
        ssdelay: "通知が発生してからスクリーンショットが撮影されるまでの遅延を追加",
        sspreview: "スクリーンショットが保存されるときの表示プレビューを表示",
        noanim: "アプリ内のすべてのウィンドウアニメーションとトランジション効果を無効にする",
        nvda: "実績がアンロックされたときにクリップボードに実績情報をコピーして、NVDAなどのスクリーンリーダーソフトウェアで読み取ることを有効にする",
        tooltips: "特定のUI要素にマウスオーバーしたときにツールチップを表示する",
        pollrate: `ゲームプレイ中の実績データの更新間隔を設定します<br><br><span class="ttdesc">値やシステムのハードウェアに応じて、パフォーマンスが向上または低下することがあります。通常、高い値はシステム負荷を低減させますが、通知の遅延を引き起こす可能性があります</span>`,
        releasedelay: `現在のゲームがリリースされた後、バックグラウンドプロセスが再起動するまでの待機時間を設定します。自動プロセス追跡と手動でリンクされたゲームの両方に影響します。<br><br><span class="ttdesc">Steamworksがアプリケーションから完全に解放されるためのより長い時間枠を提供します。この値を増やすと、以前に閉じたゲームの追跡などの異常な動作を防ぐことができます</span>`,
        maxretries: `実行中のプロセスを検出されたAppIDにリンクする試行の最大数を設定します。自動プロセス追跡と手動でリンクされたゲームの両方に影響します。<br><br><span class="ttdesc">リンクの試行は1秒ごとに行われます。この試行回数後に実行中のプロセスが現在のAppIDにリンクされていない場合、無効なプロセスが返されます。そのような場合、ゲームはシステムトレイ > オプション > ゲームのリリースを手動で行う必要があります</span>`,
        debug: "デバッグパネルを開きます。これにより、プロセスの詳細なトラッキング情報が表示されます。",
        userust: "システム上でトラックされたゲームプロセスが現在実行されているかどうかを確認するために、Rustベースの代替機能を使用します。チェックが外れている場合、代わりにデフォルトのNodeJSベースのプロセスチェックが使用されます。",
        notifydebug: "すべての通知に対してDevToolsウィンドウを作成します。通知のデバッグ/トラブルシューティングに便利です",
        usecustomfiles: "ユーザーがカスタマイズ可能なファイルを通知に読み込むことを有効にします。通常のユーザーには注意が必要です",
        showcustomfiles: "カスタムファイルの場所を開く",
        log: "プロセスのアクティビティ、警告、エラーに関する情報を表示するアプリログウィンドウを開く",
        reset: "すべての設定データを削除してアプリを再起動する",
        playback: "通知プレビューのアニメーションを一時停止/再開する",
        replay: "通知プレビューのアニメーションを再起動する",
        preset: "カスタマイズする通知プリセットを選択",
        iconanim: "レアアイコンの枠とアニメーションを切り替える",
        alldetails: "このプリセットではデフォルトで非表示になっているすべてのテキスト要素を通知内に表示する",
        usepercent: "XP/S値の代わりに実績の解除パーセンテージを表示",
        displaytime: "通知が表示される秒数を設定する",
        scale: "通知のサイズを拡大または縮小する",
        customtext: "通知内に表示されるカスタムメッセージを設定する",
        usegametitle: "通知内に現在のゲームのタイトルを表示する",
        customfont: "通知内で使用するカスタムフォントを読み込む",
        soundmode: "通知が発生したときに、単一のオーディオファイルまたは複数のオーディオファイルが含まれるフォルダからランダムに選択されるオーディオファイルを選択する",
        soundfile: "通知が発生したときに再生するオーディオファイルを選択する",
        sounddir: "通知が発生したときにランダムに選択されるオーディオファイルが含まれるフォルダを選択する",
        volume: "オーディオファイルの再生音量を設定する",
        preview: "選択したオーディオファイル、またはフォルダからランダムに選択されたオーディオファイルのプレビューを表示する",
        bgstyle: "通知の背景のスタイルを選択する",
        gradientangle: "グラデーションの角度を設定する",
        bgimg: "通知の背景に使用する画像ファイルを読み込む",
        bgimgbrightness: "通知の背景として使用される画像の明るさを設定します",
        brightness: "通知の背景として使用されるゲームアートの明るさを設定する",
        blur: "通知の背景に適用されるぼかしのレベルを設定します",
        roundness: "通知の角の丸みを設定する",
        fontsize: "通知で使用されるフォントのサイズを設定する",
        opacity: "通知の全体的な不透明度を設定する",
        bgonly: "通知の背景の不透明度のみを設定し、他の要素は完全な不透明度のままにする",
        glow: "通知を囲むグローエフェクトを有効にします",
        glowcolor: "グローエフェクトの色を設定します",
        glowsize: "グローエフェクトのサイズを設定します",
        glowanim: "グローエフェクトに適用されるプリセットのアニメーションを選択します",
        glowspeed: "グローエフェクトに適用されるアニメーションの速度を設定します",
        mask: "カスタム画像で通知の一部をマスキングします",
        maskimg: `マスクとして使用する画像ファイルを読み込みます<br><br><span class="ttdesc">CSSでは、<code class="ttcode">mask-mode: alpha</code> は通常の期待とは逆に機能します。画像ファイルの透明な領域は非表示になり、黒/グレーの領域は下の要素を表示します</span>`,
        primarycolor: "通知のプライマリカラーを設定する",
        secondarycolor: "通知のセカンダリカラーを設定する",
        tertiarycolor: "通知の第三カラーを設定する",
        fontcolor: "通知内に表示されるすべてのテキストの色を設定する",
        fontoutline: "通知内に表示されるすべてのテキストにアウトラインを追加する",
        fontoutlinecolor: "テキストのアウトラインの色を設定する",
        fontshadow: "通知内に表示されるすべてのテキストにシャドウを追加する",
        fontshadowcolor: "テキストのシャドウの色を設定する",
        iconroundness: "通知内に表示される実績/ゲームアイコンの角の丸みを設定する",
        plat: "100%アイコンとして使用する画像ファイルを読み込む",
        usegameicon: "デフォルトの通知アイコンを現在のゲームのアイコンで置き換える",
        showhiddenicon: "通知に実績が隠されていることを示す画像を表示",
        hiddenicon: "隠れた実績のアイコンを置き換えるための画像ファイルを読み込む",
        logo: "ロゴアイコンを置き換える画像ファイルを読み込む",
        decoration: "装飾アイコンを置き換える画像ファイルを読み込む",
        showdecoration: "装飾アイコンの表示を切り替える",
        replacelogo: "通知内のロゴアイコンを選択した装飾で置換する",
        pos: "通知の画面上の位置を設定する",
        usecustompos: "通知のカスタム位置を有効にする",
        setcustompos: "通知のカスタム位置を設定する",
        resetcustompos: "通知の位置をデフォルトのカスタム位置にリセットする",
        savetheme: "すべての設定されたカスタマイズオプションを新しいテーマとして保存する",
        visibilitybtn: "カスタマイザーのプレビューとテスト通知で要素の表示/非表示を切り替える",
        delbtn: "要素をデフォルトにリセット",
        link: `開く <span class="hl">リンクされたゲームの管理メニュー</span>`,
        imgpath: "このオプションによって生成された通知画像が保存される場所",
        linkedgames: `特定のSteamゲームの<span class="hl">自動プロセス追跡</span>をバイパス<br><br><span class="ttdesc">このオプションは非常に特定のシナリオでのみ使用する必要があります。ユーザーは通常の状況でこのオプションを使用する必要はありません！</span>`,
        exclusionlist: `アプリによる特定のSteamゲームの実績の追跡を防止<br><br><span class="ttdesc">このオプションは非常に特定のシナリオでのみ使用する必要があります。ユーザーは通常の状況でこのオプションを使用する必要はありません！</span>`,
        ovx: "スクリーンショットに表示される通知を水平方向にオフセットします",
        ovy: "スクリーンショットに表示される通知を垂直方向にオフセットします",
        importtheme: `ユーザーが作成した<span class="hl">テーマファイル</span>を通じてカスタマイズをインポートします`,
        exporttheme: `現在選択されている<span class="hl">テーマ</span>を共有するためにエクスポートします<br><br><span class="ttdesc">エクスポートを試みる前に、選択した<span class="hl">テーマ</span>が正しく選択されていることを確認してください（<span class="hl">テーマ選択</span>メニューを使用して）。また、カスタマイズが選択した<span class="hl">テーマ</span>に保存されていることを確認してください（<span class="hl">テーマ保存</span>メニューを使用して）<br><br><u>現在の<span class="hl">テーマ</span>にまだ保存されていないカスタマイズはエクスポートされません！</u></span>`        
    },
    update: {
        updateavailable: "アップデートが利用可能です",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifierの新しいアップデートが利用可能です！",
            `<span id="discordreleasenotes"></span>と<span id="githubreleasenotes"></span>で利用可能な完全なリリースノート`
        ],
        update: "アップデート"
    },
    linkgame: {
        content: {
            exepath: "実行可能ファイルのパス",
            managesub: [
                `特定の <span class="hl">AppID</span> にゲームの <span class="hl">実行可能ファイル</span> を手動でリンクするか、既存のリンクを <span class="hl">解除</span> します`,
                `Steam Achievement Notifier は <span class="hl">リンクされたゲーム</span> のいずれにも <span class="hl">自動プロセス追跡</span> を使用しなくなります - 代わりに、関連する <span class="hl">AppID</span> が検出されるたびに指定された <span class="hl">実行可能ファイル</span> が追跡されます`,
                `<span class="hl" id="appidhelp"><u>SteamゲームのAppIDを見つける方法は？</u></span>`
            ],
            linknew: "新しいリンクされたゲーム",
            linknewsub: [
                `ゲームの <span class="hl">実行可能ファイル</span> と関連する <span class="hl">AppID</span> の間に新しいリンクを作成します`,
                `作成された後、リンクは以前の <span class="hl">リンクされたゲームを管理</span> ダイアログを介して <span class="hl">解除</span> できます`
            ],
            link: "リンク",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `任意のSteamゲームの<span class="hl">AppID</span>を<span class="hl">除外リスト</span>に追加`,
                `Steam Achievement Notifierは、<span class="hl">除外リスト</span>に追加された任意のゲームの<span class="hl">AppID</span>に関して実績データを追跡しません`,
                `<span class="hl" id="appidhelp"><u>SteamゲームのAppIDを見つける方法</u></span>`
            ],
            exclusionnew: "新しい除外",
            exclusionnewsub: [
                `<span class="hl">除外リスト</span>に追加する<span class="hl">AppID</span>を入力してください`
            ]
        }
    }
}