export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "ユーザーが検出されません",
                tt: "現在トラッキングされている実績のSteamユーザー"
            },
            gamelbl: {
                elem: gameName ? gameName : "ゲームが検出されません",
                tt: "現在トラッキングされている実績のゲーム"
            },
            previewbtn: {
                tt: "選択したサウンドのプレビュー"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "デフォルト（音声ファイルが選択されていません）" : custom.sounddir ? custom.sounddir : "デフォルト（音声フォルダが選択されていません）"
            },              
            soundmodelbl: {
                elem: "サウンドモード:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "ファイル" : "ランダム"
            },
            togglemain: {
                elem: "メイン",
                tt: "メイン実績通知"
            },
            togglerare: {
                elem: "レア",
                tt: "レア実績通知"
            },
            toggleplat: {
                elem: "100%",
                tt: "100%実績通知"
            },
            progresscirclewrapper: {
                tt: "カスタマイズ通知のプレビューを表示する"
            },
            testbtnwrapper: {
                elem: "テスト通知を表示",
                tt: "カスタマイズ通知のプレビューを表示する",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "カスタマイズ...",
                tt: "通知カスタマイズメニューを開く",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steamは起動していません"
            },
            updatebtn: {
                tt: "利用可能な更新があります"
            },
            kofibtn: "Ko-Fiで寄付する！",
            discordbtn: "Discordに参加する！",
            githubbtn: "GitHubで問題を報告する！",
            settingstitlelbl: {
                elem: "設定"
            },
            configuration: {
                elem: "設定",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "言語",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "オペレーティングシステム",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "通知",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "スクリーンショット",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "アクセシビリティ",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "その他",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "バージョン"
            },            
            apikeybtn: {
                tt: "Steam Web APIキーを取得するにはここをクリック"
            },
            apikey: {
                placeholder: "APIキーを追加",
                tt: "あなたのSteamアカウントに関連付けられたSteam Web APIキー"
            },
            eyebtn: {
                tt: "APIキーの表示を切り替える"
            },
            apikeylbl: {
                elem: "APIキーを取得"
            },
            steam64idbtn: {
                tt: "Steam64 IDを取得するにはここをクリック"
            },
            steam64id: {
                placeholder: "Steam64 IDを追加",
                tt: "あなたのSteamアカウントに関連付けられたSteam64 ID"
            },
            steam64idlbl: {
                elem: "Steam64 IDを取得"
            },
            switchaccountspan: {
                elem: "アカウントの切り替え"
            },
            switchaccountbtn: {
                tt: "リンクされたSteamアカウント間を切り替える"
            },
            testconnectionlbl: {
                elem: "接続をテストする",
                tt: "Steam Web APIへの接続をテストする"
            },
            lang: {
                tt: "UIと通知の言語を設定する"
            },
            desktop: {
                elem: "デスクトップショートカットの作成",
                tt: "アプリを起動するためのデスクトップショートカットを作成します",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Windowsで起動",
                tt: "Windowsの起動時にアプリを自動的に実行します",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "最小化で起動",
                tt: "起動後にアプリをシステムトレイに最小化します",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "ハードウェアアクセラレーションの無効化",
                tt: "アプリウィンドウのハードウェアアクセラレーションを無効にします",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "ライトモード",
                tt: "システムリソースを節約するために、メインのアプリウィンドウを無効にします。アプリとのやり取りはシステムトレイアイコンを介して最小限になります",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "レア度のパーセンテージ",
                tt: `グローバルのアンロックパーセンテージがこの数値以下の場合にのみ「レア」通知として表示されます`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "サウンドのみモード",
                tt: "通知を無効にし、しかしアチーブメント解除時に選択したサウンドを再生します",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "全てのアンロックパーセンテージを表示",
                tt: "すべての通知タイプでグローバルのアンロックパーセンテージを表示します",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "外部ウィンドウに複製",
                tt: `すべての通知を複製する外部ウィンドウ。ストリーミング/画面キャプチャソフトウェアで対象にできます。<div class="ttwarn">このウィンドウは<u>完全に透明</u>です。ウィンドウの現在位置を強調表示するには、<span class="ttcode">Ctrl</span>キーを押し続けます。</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `「現在追跡中」通知の表示`,
                tt: `ゲームを起動する際に「現在追跡中」通知を切り替えます`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "通知ショートカット",
                tt: "テスト通知をトリガーするキーボードショートカットを設定します",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "このタイプのテスト通知をトリガーするショートカットを設定します"
            },
            sctabmain: {
                tt: "メイン通知ショートカット"
            },
            sctabrare: {
                tt: "レア通知ショートカット"
            },
            sctabplat: {
                tt: "100%通知ショートカット"
            },
            screenshotmode: {
                tt: "自動実績スクリーンショットのモードを選択します"
            },
            displayscreenshot: {
                elem: "通知内でスクリーンショットを表示",
                tt: "アチーブメント通知内でスクリーンショットのプレビューを表示します",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steamスクリーンショットキーバインド",
                tt: "アチーブメント解除時にネイティブのSteamスクリーンショットを撮るために、Steamクライアントのキーバインドを合わせます",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `メイン通知オーバーレイ`
            },
            ovtabrare: {
                tt: `レア通知オーバーレイ`
            },
            ovtabplat: {
                tt: `100%通知オーバーレイ`
            },
            monitor: {
                elem: "モニター",
                tt: "スクリーンショットのソースとして使用するモニターを選択します",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "オーバーレイの位置",
                tt: "通知オーバーレイの位置を設定します",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "パス",
                tt: "スクリーンショットの保存先パスを設定します",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "プレビュー",
                tt: `通知オーバーレイをプレビューします`,
                query: "label"
            },
            noanim: {
                elem: "アプリウィンドウのアニメーションを無効にする",
                tt: "アプリウィンドウ内のトランジションアニメーションを無効にします",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDAサポートの有効化",
                tt: "通知の内容をNVDAスクリーンリーダーソフトウェアで読み上げるために、通知の内容をクリップボードにコピーします",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "ツールチップの表示",
                tt: "アプリ要素にマウスオーバーした際にツールチップを表示/非表示に切り替えます",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "通知デバッグツールの表示",
                tt: "トリガされた時に通知のデバッグツールパネルを開きます",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "プライバシーポリシーの表示",
                tt: "Steam Achievement Notifierのプライバシーポリシーを表示します",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "ベータチャンネルに参加",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "アプリログの表示",
                tt: "アプリログの内容を表示して共有します",
                query: "label"
            },
            resetbtn: {
                elem: "アプリのリセット",
                tt: "すべての保存データを削除してアプリを再起動します",
                query: "label"
            },
            customiserplaystate: {
                tt: "通知アニメーションの一時停止/再生"
            },
            customiserreplay: {
                tt: "通知アニメーションを再生します"
            },
            customisersavepreset: {
                tt: "現在のカスタマイズを新しい通知プリセットとして保存します"
            },
            tabbtnnext: {
                tt: "次へ"
            },
            tabbtnprev: {
                tt: "戻る"
            },
            notificationpreset: {
                elem: "プリセット",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "通知プリセット",
                tt: "カスタマイズする通知プリセットを選択します",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "レアアイコンアニメーション",
                tt: "アイコン背景のアニメーションを切り替えます",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "すべての詳細を表示",
                tt: `利用可能なすべての通知の詳細を表示します`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "表示時間",
                tt: "通知が表示される時間の長さ",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "スケール",
                tt: "通知のサイズ<br><i>*プレビューウィンドウには反映されません</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "カスタムテキスト",
                tt: "通知内にカスタムメッセージを表示します",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "ゲームタイトルの使用",
                tt: "通知内に現在のゲームのタイトルを表示します",
                query: ".sanboxlbl"
            },
            style: {
                elem: "スタイル",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "背景スタイル",
                tt: "通知の背景スタイルを設定します",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "グラデーションの角度",
                tt: "色のグラデーションの角度を設定します",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "背景画像",
                tt: "通知の背景に設定する画像ファイルを選択します",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "ゲームアートの明るさ",
                tt: "ゲームアートの背景の明るさを設定します",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "角の丸み",
                tt: "通知の角の丸みを設定します",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "フォントサイズ",
                tt: "フォントの拡大率を設定します",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "不透明度",
                tt: "通知の不透明度を設定します",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "背景のみ",
                tt: "背景にのみ不透明度を適用し、テキストと画像は完全に不透明のままにします",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "色",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "プライマリーカラー",
                tt: "通知のプライマリーカラーを設定します",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "セカンダリーカラー",
                tt: "通知のセカンダリーカラーを設定します",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "テキストの色",
                tt: "テキストの色を設定します",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "テキストのアウトライン",
                tt: "すべての通知テキストにアウトラインを適用します",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "アウトラインの色",
                tt: "テキストのアウトラインの色を設定します",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "テキストのシャドウ",
                tt: "すべての通知テキストにシャドウを適用します",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "シャドウの色",
                tt: "テキストのシャドウの色を設定します",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "アイコン",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "アイコンの丸み",
                tt: "通知のアイコンの丸みを設定します",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "カスタムアイコンの使用",
                tt: "画像ファイルをカスタムアイコンとして使用します",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "カスタムアイコン",
                tt: "カスタムアイコンとして設定する画像ファイルを選択します",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `カスタムアイコンをリセット`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "カスタム100％アイコンを使用する",
                tt: `画像ファイルをカスタム100％アイコンとして使用します`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "カスタム100％アイコン",
                tt: `カスタム100％アイコンとして設定するための画像ファイルを選択します`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `カスタム100％アイコンをリセットします`,
                query: ".sanboxlbl"
            },                   
            usegameicon: {
                elem: "ゲームアイコンの使用",
                tt: "現在のゲームのアイコンを使用します",
                query: ".sanboxlbl"
            },
            position: {
                elem: "位置",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "画面上の位置",
                tt: "通知の画面上での位置を設定します",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "カスタム位置の使用",
                tt: "通知のためにカスタム位置を使用します",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "位置の設定",
                tt: "通知のためにカスタム位置を設定します",
                query: "label"
            },
            animdir: {
                elem: "アニメーションの方向",
                tt: "通知のアニメーションの方向を設定します",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "プライバシーポリシー"
            },
            ppusagetitle: {
                elem: "STEAM WEB APIのデータ使用状況"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifierは、ユーザーのSteamアカウントに関連するデータを表示するために、ユーザーからアプリケーションに提供されるSteam APIキー/Steam64 IDの組み合わせを使用して、Valveの<span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span>を使用します。このデータには次のものが含まれます：`
            },
            ppstats: {
                elem: "ロックされた実績と解除された実績の統計"
            },
            ppusername: {
                elem: "あなたのSteamユーザー名"
            },
            ppsteamgames: {
                elem: "プレイしたSteamゲーム"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifierは、追加のアプリケーションの機能と更新を提供するために将来的にさらなるSteam Web APIデータを使用する場合があります。"
            },
            ppkey64title: {
                elem: "STEAM APIキー/STEAM64 IDの使用状況"
            },
            ppauth: {
                elem: "Steam Achievement Notifierは、Steam Web APIへの認証済みアクセスのためにユーザーにSteam APIキー/Steam64 IDの組み合わせの入力を要求します。"
            },
            ppnoauth: {
                elem: "この情報がない場合、ユーザーのSteamアカウントに関連するデータ（実績データを含む）を取得するために使用されるValveによって提供されたWebリンクにアクセスできません。"
            },
            ppstoragetitle: {
                elem: "STEAM WEB APIデータの保存"
            },
            ppstorage: {
                elem: "Steam Achievement Notifierは、アプリケーション内での使用のためにユーザーのPCに一時的にSteam Web APIデータを保存します。このデータの一時的な保存は、Steam Achievement Notifier専用であり、通常の状況ではアプリケーションの終了時にすべての非永続的なSteam Web APIデータはローカルストレージから削除されます。"
            },
            pppersist: {
                elem: "ユーザーのデバイスに永続的に保存されるデータには、ユーザーのSteam Web APIキーとSteam64 IDなど、ユーザーの利便性のためにアプリケーションによって保存されるデータのみが含まれます。"
            },
            ppdelete: {
                elem: "このデータは必要に応じてユーザーによっていつでも手動で削除することもできます。Steam Achievement Notifierによって作成されたファイルは、次のディレクトリにあります："
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "現在未対応"
            },
            ppcollecttitle: {
                elem: "データ収集に対する姿勢"
            },
            ppnosend: {
                elem: "Steam Achievement Notifierは、ユーザーの明示的な許可なしに、ユーザーのローカルファイルシステムの外部にユーザーデータを送信または保存することは<u>決してありません</u>。これには、Steam Web APIからアプリケーション内で取得される情報、およびSteam Web APIへのアクセスに使用されるSteam APIキー/Steam64 IDの組み合わせも含まれます。"
            },
            ppconsent: {
                elem: "同意の確認とその後の外部への情報の送信を目的とした既存の機能または将来の機能実装の使用により、ユーザーは暗黙のうちにその許可を与えます。これらの場合、ユーザーには送信されるデータの性質が常に通知され、アプリケーションの外部へのデータ送信に対する同意を確認するよう促されます。"
            },
            ppexclude: {
                elem: "Steam Achievement Notifierは、ユーザーからアプリケーションに提供される情報を外部でアクセス、表示、または収集する手段を故意に除外していますが、既存の機能または将来の機能実装により、アプリケーションはユーザーの同意を得て、ユーザーの代わりにデータを外部に送信することができる場合があります。"
            },
            pprequests: {
                elem: "Steam Web APIからのデータアクセス要求は、ウェブブラウザが提供する機能と同様のビルトインメソッドを使用してアプリケーション内から行われます。これらの要求には、Steam Web APIが要求するように、ユーザーのSteam APIキー/Steam64 IDの組み合わせが含まれますが、これらは意図的に他のアプリケーションによる使用や傍受のために利用可能にされることはありません。"
            },
            ppusertitle: {
                elem: "ユーザーの責任"
            },
            ppsteamtou: {
                elem: `公式のGithubリポジトリ<span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">https://github.com/steamachievementnotifier/steamachievementnotifier/releases</span>から公式にリリースされたSteam Achievement Notifierのバージョンをダウンロードして使用することで、ユーザーは、拡張を通じてセクション7および8の<span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">Steam Web API利用規約</span>に従うことになります。`
            }, 
            gamedetails: "ゲームの詳細",
            mustbepublic: "公開に設定する必要があります",            
            nosoundfile: "デフォルト（音声ファイルが選択されていません）",
            nosoundfolder: "デフォルト（音声フォルダが選択されていません）",
            file: "ファイル",
            randomised: "ランダム",
            audioselectdialog: `サウンドを選択してください ${custom.mode === "file" ? "ファイル" : "フォルダー"}`,
            imgselectdialog: `画像ファイルを選択してください`,
            unsupported: "サポートされていないファイルです！",
            novalidaudiofiles: "有効なオーディオファイルがありません！",
            nolocate: "ファイルが見つかりません！",
            switchaccountstitle: "アカウントの切り替え",
            noaccounts: "開始するためにアカウントを追加してください！",
            connecting: "接続中...",
            connected: "接続済み",
            testsuccessuser: `準備完了です`,
            testsuccess1: `Steamの<a href="${privacysettings}">プライバシー設定</a>で<span>ゲームの詳細</span>が<span>公開</span>に設定されていることを確認してください`,
            testsuccess2: `ゲーム内のディスプレイモードが<span>ボーダーレス</span>に設定されていることを確認してください。通知がゲームウィンドウの上に表示されます`,
            noapikeytitle: "APIキーがありません",
            noapikeytxt: "APIキーを入力してください",
            noapikeyhint: `APIキーを取得するには、<img src="./icon/key.svg" alt="">アイコンをクリックしてください`,
            nosteam64idtitle: "Steam64 IDがありません",
            nosteam64idtxt: "Steam64 IDを入力してください",
            nosteam64idhint: `Steam64 IDを取得するには、<img src="./icon/id.svg" alt="">アイコンをクリックしてください`,
            invalidapikeytitle: "無効なAPIキーです！",
            invalidapikeymsg: "提供されたAPIキーでSteam Web APIにアクセスできません",
            invalidapikeydetail1: "APIキーが正しいか確認してください",
            invalidapikeydetail2: "アカウントに対して新しいAPIキーを再生成してください",
            invalidsteam64idtitle: "無効なSteam64 IDです！",
            invalidsteam64idmsg: "提供されたSteam64 IDに関連するSteamアカウントが見つかりません",
            invalidsteam64iddetail1: "提供したSteam64 IDの値が正しいか確認してください",
            nonetworkfound: "アクティブなネットワーク接続が見つかりません",
            connecttonetwork: "PCをネットワークに接続して、再試行してください",
            testdefaulterrortitle: "エラーが発生しました！",
            testdefaulterrormsg: "Steam Web APIへの接続中にエラーが発生しました",
            testdefaulterrordetail1: "この問題を報告するには、DiscordまたはGitHubにお問い合わせください！",
            sspath: "スクリーンショットの保存場所を選択",
            wronguser: user ? `${user} はSteamにサインインしていません！` : "リンクされたユーザーアカウントが見つかりません！",
            switchuser: "アカウントを切り替えるにはここをクリック",
            trackingfailed: "トラッキングに失敗しました！",
            checkapplog: "詳細についてはアプリのログを確認してください",
            soon: "近日公開予定！",
            gamecomplete: "100％達成",
            gametitle: "ゲームタイトル",
            achievementunlocked: "実績が解除されました",
            achievementtitle: "実績タイトル",
            allachievements: "すべての実績を解除しました！",
            achievementdesc: "実績の説明",
            show: "表示",
            quit: "終了",
            off: "オフ",
            steamss: "Steamインゲームスクリーンショット",
            overlayss: "通知オーバーレイ付きスクリーンショット",
            match: "カスタマイズ",
            topleft: "左上",
            topcenter: "上中央",
            topright: "右上",
            bottomleft: "左下",
            bottomcenter: "下中央",
            bottomright: "右下",
            solid: "ソリッド",
            gradient: "グラデーション",
            bgimg: "背景画像",
            gameart: "ゲームアート",
            up: "上",
            down: "下",
            left: "左",
            right: "右",
            tracking: "現在の追跡",
            inuse: "使用中",
            invalidshortcut: "無効なショートカット"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "実績の解除時に再生されるサウンドファイルを選択してください" : "実績の解除時にランダムで再生されるオーディオファイルが含まれるフォルダを選択してください")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "アプリが起動してからのログです"
            },
            copylbl: {
                elem: "ログの内容をコピー"
            },
            openlbl: {
                elem: "ログファイルを生成"
            }            
        }

        return translations
    }
}