export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "사용자 없음",
                tt: "현재 업적을 추적하는 Steam 사용자"
            },
            gamelbl: {
                elem: gameName ? gameName : "게임 없음",
                tt: "현재 업적을 추적하는 게임"
            },
            previewbtn: {
                tt: "선택한 소리 미리 보기"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "기본값 (음원 파일이 선택되지 않음)" : custom.sounddir ? custom.sounddir : "기본값 (음원 폴더가 선택되지 않음)"
            },              
            soundmodelbl: {
                elem: "소리 모드:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "파일" : "임의"
            },
            togglemain: {
                elem: "메인",
                tt: "주 업적 알림"
            },
            togglerare: {
                elem: "희귀",
                tt: "희귀 업적 알림"
            },
            toggleplat: {
                elem: "100%",
                tt: "100% 업적 알림"
            },
            progresscirclewrapper: {
                tt: "사용자 정의 알림 미리 보기 표시"
            },
            testbtnwrapper: {
                elem: "테스트 알림 표시",
                tt: "사용자 정의 알림 미리 보기 표시",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "사용자 정의...",
                tt: "알림 사용자 정의 메뉴 열기",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam이 실행되지 않음"
            },
            updatebtn: {
                tt: "사용 가능한 업데이트"
            },
            kofibtn: "Ko-Fi에서 기부하기!",
            discordbtn: "Discord에서 참여하기!",
            githubbtn: "GitHub에서 문제 보고하기!",
            settingstitlelbl: {
                elem: "설정"
            },
            configuration: {
                elem: "구성",
                query: ".sanboxtitle > label"
            },
            language: {
                elem: "언어",
                query: ".sanboxtitle > label"
            },
            os: {
                elem: "운영 체제",
                query: ".sanboxtitle > label"
            },
            notifications: {
                elem: "알림",
                query: ".sanboxtitle > label"
            },
            screenshots: {
                elem: "스크린샷",
                query: ".sanboxtitle > label"
            },
            accessibility: {
                elem: "접근성",
                query: ".sanboxtitle > label"
            },
            other: {
                elem: "기타",
                query: ".sanboxtitle > label"
            },
            apprevlbl: {
                elem: "버전"
            },            
            apikeybtn: {
                tt: "Steam 웹 API 키를 가져오려면 여기를 클릭"
            },
            apikey: {
                placeholder: "API 키를 입력하세요",
                tt: "Steam 계정과 연결된 Steam 웹 API 키"
            },
            eyebtn: {
                tt: "API 키 표시 전환"
            },
            apikeylbl: {
                elem: "API 키 가져오기"
            },
            steam64idbtn: {
                tt: "Steam64 ID를 가져오려면 여기를 클릭"
            },
            steam64id: {
                placeholder: "Steam64 ID를 입력하세요",
                tt: "Steam 계정과 연결된 Steam64 ID"
            },
            steam64idlbl: {
                elem: "Steam64 ID 가져오기"
            },
            switchaccountspan: {
                elem: "계정 전환"
            },
            switchaccountbtn: {
                tt: "연결된 Steam 계정 간 전환"
            },
            testconnectionlbl: {
                elem: "연결 테스트",
                tt: "Steam 웹 API와의 연결 테스트"
            },
            lang: {
                tt: "UI 및 알림에 대한 언어 설정"
            },            
            desktop: {
                elem: "바탕 화면 바로 가기 생성",
                tt: "앱을 실행하기 위해 바탕 화면에 바로 가기 생성",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Windows 시작 시 실행",
                tt: "Windows 시작 시 자동으로 앱 실행",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "시작 시 최소화",
                tt: "실행 후 앱을 시스템 트레이로 최소화",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "하드웨어 가속 비활성화",
                tt: "앱 창의 하드웨어 가속 비활성화",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "라이트 모드",
                tt: "주 앱 창을 비활성화하여 시스템 리소스를 저장합니다. 최소한의 옵션은 시스템 트레이 아이콘을 통해 앱과 상호 작용할 수 있습니다.",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "희귀성 비율",
                tt: `글로벌 잠금 해제 비율이 이 숫자보다 낮은 업적만 "희귀" 알림으로 표시됩니다.`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "사운드 전용 모드",
                tt: "알림을 비활성화하고 업적 잠금 해제 시 선택한 소리를 재생합니다.",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "모든 잠금 해제 비율 표시",
                tt: "모든 알림 유형에서 글로벌 잠금 해제 비율 표시",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "외부 창에 복제",
                tt: "외부 창에 복제",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "업적 통계 창 표시",
                tt: "업적 통계 창 표시",
                query: ".sanboxlbl"
            },
            track: {
                elem: `"현재 추적 중" 알림 표시`,
                tt: `"현재 추적 중" 알림 토글. 게임 실행 시 표시됩니다.`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "자동 업적 스크린샷 모드 선택"
            },
            displayscreenshot: {
                elem: "알림에 스크린샷 표시",
                tt: "알림 내에서 스크린샷 미리 보기 표시",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Steam 스크린샷 단축키",
                tt: "업적 잠금 해제 시 네이티브 Steam 스크린샷을 캡처하기 위해 Steam 클라이언트 단축키와 일치시킵니다.",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "기본 알림 오버레이"
            },
            ovtabrare: {
                tt: "희귀 알림 오버레이"
            },
            ovtabplat: {
                tt: "100% 알림 오버레이"
            },
            monitor: {
                elem: "모니터",
                tt: "스크린샷 원본으로 사용할 모니터 선택",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "오버레이 위치",
                tt: "알림 오버레이 위치 설정",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "경로",
                tt: "스크린샷이 저장될 경로 설정",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "미리 보기",
                tt: "알림 오버레이 미리 보기",
                query: "label"
            },
            noanim: {
                elem: "앱 창 애니메이션 비활성화",
                tt: "앱 창 내 전환 애니메이션 비활성화",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "NVDA 지원 활성화",
                tt: "알림 내용을 NVDA 스크린 리더 소프트웨어에서 읽을 수 있도록 클립보드로 복사",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "도구 설명 표시",
                tt: "앱 요소에 마우스를 올릴 때 도구 설명 표시 토글",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "알림 개발 도구 표시",
                tt: "알림이 트리거될 때 알림 개발 도구 패널 열기",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "개인 정보 보호 정책 보기",
                tt: "Steam Achievement Notifier의 개인 정보 보호 정책 보기",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "베타 채널 참여",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "앱 로그 열기",
                tt: "앱 로그의 내용 보기 및 공유",
                query: "label"
            },
            resetbtn: {
                elem: "앱 재설정",
                tt: "모든 저장된 데이터 제거 및 앱 재시작",
                query: "label"
            },            
            customiserplaystate: {
                tt: "알림 애니메이션 일시 정지/재생"
            },
            customiserreplay: {
                tt: "알림 애니메이션 다시 재생"
            },
            customisersavepreset: {
                tt: "현재 사용자 정의를 새로운 알림 프리셋으로 저장"
            },
            tabbtnnext: {
                tt: "다음"
            },
            tabbtnprev: {
                tt: "이전"
            },
            notificationpreset: {
                elem: "프리셋",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "알림 프리셋",
                tt: "사용자 정의할 알림 프리셋 선택",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "희귀 아이콘 애니메이션",
                tt: "아이콘 배경의 애니메이션 토글",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "모든 세부 정보 표시",
                tt: `가능한 모든 알림 세부 정보 표시`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "표시 시간",
                tt: "알림이 표시되는 시간",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "크기",
                tt: "알림의 크기<br><i>*미리 보기 창에는 반영되지 않습니다.</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "사용자 정의 텍스트",
                tt: "알림에 사용자 정의 메시지 표시",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "게임 제목 사용",
                tt: "알림에 현재 게임의 제목 표시",
                query: ".sanboxlbl"
            },
            style: {
                elem: "스타일",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "배경 스타일",
                tt: "알림 배경의 스타일 설정",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "그라데이션 각도",
                tt: "색상 그라데이션의 각도 설정",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "배경 이미지",
                tt: "알림 배경으로 설정할 이미지 파일 선택",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "게임 아트 밝기",
                tt: "게임 아트 배경의 밝기 설정",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "둥근 정도",
                tt: "알림 모서리의 둥근 정도 설정",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "글꼴 크기",
                tt: "글꼴의 크기 비율 설정",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "불투명도",
                tt: "알림의 불투명도 설정",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "배경 전용",
                tt: "배경에만 불투명도 적용하여 텍스트와 이미지를 완전히 불투명하게 유지",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "색상",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "기본 색상",
                tt: "기본 알림 색상 설정",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "보조 색상",
                tt: "보조 알림 색상 설정",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "텍스트 색상",
                tt: "텍스트의 색상 설정",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "텍스트 외곽선",
                tt: "모든 알림 텍스트에 외곽선 적용",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "외곽선 색상",
                tt: "텍스트 외곽선의 색상 설정",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "텍스트 그림자",
                tt: "모든 알림 텍스트에 그림자 적용",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "그림자 색상",
                tt: "텍스트 그림자의 색상 설정",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "아이콘",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "아이콘 둥근 정도",
                tt: "알림 아이콘의 둥근 정도 설정",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "사용자 정의 아이콘 사용",
                tt: "이미지 파일을 사용자 정의 아이콘으로 사용",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "사용자 정의 아이콘",
                tt: "사용자 정의 아이콘으로 설정할 이미지 파일 선택",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `사용자 정의 아이콘 재설정`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "사용자 정의 100% 아이콘 사용",
                tt: `이미지 파일을 100% 사용자 정의 아이콘으로 사용합니다`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "사용자 정의 100% 아이콘",
                tt: `사용자 정의 100% 아이콘으로 설정할 이미지 파일을 선택합니다`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `사용자 정의 100% 아이콘 재설정`,
                query: ".sanboxlbl"
            },                     
            usegameicon: {
                elem: "게임 아이콘 사용",
                tt: "현재 게임의 아이콘 사용",
                query: ".sanboxlbl"
            },
            position: {
                elem: "위치",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "화면 위치",
                tt: "알림의 화면 위치 설정",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "사용자 정의 위치 사용",
                tt: "알림의 사용자 정의 위치 사용",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "위치 설정",
                tt: "알림의 사용자 정의 위치 설정",
                query: "label"
            },
            animdir: {
                elem: "애니메이션 방향",
                tt: "알림의 애니메이션 방향 설정",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "개인 정보 보호 정책"
            },
            ppusagetitle: {
                elem: "스팀 웹 API 데이터 사용"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier는 사용자의 스팀 계정과 관련된 데이터를 검색하고 표시하기 위해 Valve의 <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">스팀 웹 API</span>를 사용합니다. 이를 위해 사용자가 응용 프로그램에 제공하는 스팀 API 키/Steam64 ID 조합을 통해 데이터를 검색하고 표시합니다. 이 데이터에는 다음이 포함됩니다:`
            },
            ppstats: {
                elem: "잠긴 업적 및 해제된 업적에 대한 통계"
            },
            ppusername: {
                elem: "사용자의 스팀 사용자 이름"
            },
            ppsteamgames: {
                elem: "플레이한 스팀 게임"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier는 앞으로 추가적인 응용 프로그램 기능 및 업데이트를 제공하기 위해 더 많은 스팀 웹 API 데이터를 사용할 수 있습니다."
            },
            ppkey64title: {
                elem: "스팀 API 키/Steam64 ID 사용"
            },
            ppauth: {
                elem: "Steam Achievement Notifier는 사용자가 스팀 웹 API에 인증된 액세스를 위해 스팀 API 키/Steam64 ID 조합을 입력해야 합니다."
            },
            ppnoauth: {
                elem: "이 정보가 없으면 사용자의 스팀 계정과 관련된 데이터(업적 데이터를 포함한)를 검색하기 위해 Valve가 제공하는 웹 링크(스팀 웹 API에 액세스하기 위해 제공되는)에 액세스할 수 없습니다."
            },
            ppstoragetitle: {
                elem: "스팀 웹 API 데이터 저장"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier는 응용 프로그램 내에서만 사용하기 위해 사용자의 PC에 스팀 웹 API 데이터를 일시적으로 저장합니다. 이러한 데이터의 임시 저장은 Steam Achievement Notifier만을 위해 사용되며, 일반적인 경우에는 비지속적인 스팀 웹 API 데이터는 응용 프로그램 종료 시 로컬 저장소에서 지워집니다."
            },
            pppersist: {
                elem: "사용자 장치에 영구적으로 저장된 데이터에는 사용자의 스팀 웹 API 키와 Steam64 ID와 같이 사용자의 편의를 위해 응용 프로그램이 저장하는 데이터만 포함됩니다."
            },
            ppdelete: {
                elem: "이 데이터는 필요한 경우 언제든지 사용자에 의해 수동으로 삭제할 수도 있습니다. Steam Achievement Notifier가 생성한 파일은 다음 디렉토리에 위치합니다:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "현재 지원되지 않음"
            },
            ppcollecttitle: {
                elem: "데이터 수집 정책"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier는 사용자의 명시적 허락 없이 사용자 데이터를 로컬 파일 시스템 외부로 보내거나 저장하지 <u>않습니다</u>. 이에는 응용 프로그램 내에서 검색된 스팀 웹 API를 통해 검색된 정보(스팀 API 키/Steam64 ID 조합 포함)도 포함됩니다."
            },
            ppconsent: {
                elem: "사용자는 동의 확인 및 이에 따른 기존 또는 향후 기능 구현을 통해 정보를 외부로 보내는 것에 대한 암묵적인 허락을 부여합니다. 이러한 경우에는 보내는 데이터의 성격에 대해 사용자에게 항상 알림이 표시되며, 응용 프로그램 외부로 데이터를 보내기 위한 동의를 확인하기 위한 메시지가 표시됩니다."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier는 사용자가 응용 프로그램에 제공한 정보를 외부에서 액세스하거나 볼 수 있는 방법을 일부러 배제하지만, 기존 또는 향후 기능 구현을 통해 응용 프로그램이 사용자의 동의에 따라 사용자 대신 데이터를 외부로 보낼 수 있을 수도 있습니다. 이러한 경우에만 사용자의 동의를 받습니다."
            },
            pprequests: {
                elem: "스팀 웹 API에서 데이터에 액세스하는 요청은 응용 프로그램 자체에서 내장된 방법을 사용하여 웹 브라우저에서 제공하는 기능과 유사하게 처리됩니다. 이러한 요청에는 사용자의 스팀 API 키/Steam64 ID 조합이 스팀 웹 API에서 요구하는대로 포함되지만, 다른 애플리케이션에서 사용하거나 가로채는 것은 의도적으로 방지됩니다."
            },
            ppusertitle: {
                elem: "사용자 책임"
            },
            ppsteamtou: {
                elem: `공식 GitHub 리포지토리(<span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">https://github.com/steamachievementnotifier/steamachievementnotifier/releases</span>)를 통해 공식적으로 출시된 Steam Achievement Notifier의 모든 버전을 다운로드하고 사용함으로써, 사용자는 스팀 웹 API 이용 약관의 섹션 7과 8을 준수합니다.`
            },
            gamedetails: "게임 상세 정보",
            mustbepublic: "공개로 설정되어야 합니다",            
            nosoundfile: "기본값 (음성 파일이 선택되지 않음)",
            nosoundfolder: "기본값 (음성 폴더가 선택되지 않음)",
            file: "파일",
            randomised: "랜덤",
            audioselectdialog: `사운드 ${custom.mode === "file" ? "파일" : "폴더"} 선택`,
            imgselectdialog: "이미지 파일 선택",
            unsupported: "지원되지 않는 파일입니다!",
            novalidaudiofiles: "유효한 오디오 파일이 없습니다!",
            nolocate: "파일을 찾을 수 없습니다!",
            switchaccountstitle: "계정 전환",
            noaccounts: "시작하려면 계정을 추가하세요!",
            connecting: "연결 중...",
            connected: "연결됨",
            testsuccessuser: "사용 준비가 되었습니다",
            testsuccess1: `<span>Steam 개인 정보 설정</span>에서 <span>게임 세부 정보</span>가 <a href="${privacysettings}">공개</a>로 설정되어 있는지 확인하세요`,
            testsuccess2: "게임 내 디스플레이 모드가 <span>창 없음</span>으로 설정되어야 알림이 게임 창 위에 표시됩니다",
            noapikeytitle: "API 키 없음",
            noapikeytxt: "API 키를 입력하세요",
            noapikeyhint: `<img src="./icon/key.svg" alt=""> 아이콘을 클릭하여 API 키를 가져옵니다`,
            nosteam64idtitle: "Steam64 ID 없음",
            nosteam64idtxt: "Steam64 ID를 입력하세요",
            nosteam64idhint: `<img src="./icon/id.svg" alt=""> 아이콘을 클릭하여 Steam64 ID를 가져옵니다`,
            invalidapikeytitle: "유효하지 않은 API 키!",
            invalidapikeymsg: "제공된 API 키로 Steam 웹 API에 액세스할 수 없습니다",
            invalidapikeydetail1: "API 키가 올바른지 확인하세요",
            invalidapikeydetail2: "계정에 대한 새로운 API 키를 생성하세요",
            invalidsteam64idtitle: "유효하지 않은 Steam64 ID!",
            invalidsteam64idmsg: "제공된 Steam64 ID와 연결된 Steam 계정을 찾을 수 없습니다",
            invalidsteam64iddetail1: "제공한 Steam64 ID 값이 Steam 계정에 대한 올바른 값인지 확인하세요",
            nonetworkfound: "활성 네트워크 연결을 찾을 수 없음",
            connecttonetwork: "PC를 네트워크에 연결하고 다시 시도하세요",
            testdefaulterrortitle: "오류 발생!",
            testdefaulterrormsg: "Steam 웹 API에 연결하는 중 오류가 발생했습니다",
            testdefaulterrordetail1: "이 문제를 Discord나 GitHub에서 보고하세요!",
            sspath: "스크린샷 경로 선택",
            wronguser: user ? `${user}님이 Steam에 로그인하지 않았습니다!` : "연결된 사용자 계정이 없습니다!",
            switchuser: "계정 전환을 위해 여기를 클릭하세요",
            trackingfailed: "추적 실패!",
            checkapplog: "자세한 내용은 앱 로그를 확인하세요",
            soon: "곧 출시됩니다!",
            gamecomplete: "100% 완료",
            gametitle: "게임 제목",
            achievementunlocked: "업적 해제됨",
            achievementtitle: "업적 제목",
            allachievements: "모든 업적을 해제했습니다!",
            achievementdesc: "업적 설명",
            show: "보기",
            quit: "종료",
            off: "끄기",
            steamss: "Steam 인게임 스크린샷",
            overlayss: "알림 오버레이와 함께 스크린샷",
            match: "맞춤 설정",
            topleft: "왼쪽 상단",
            topcenter: "중앙 상단",
            topright: "오른쪽 상단",
            bottomleft: "왼쪽 하단",
            bottomcenter: "중앙 하단",
            bottomright: "오른쪽 하단",
            solid: "단색",
            gradient: "그래디언트",
            bgimg: "배경 이미지",
            gameart: "게임 아트",
            up: "위",
            down: "아래",
            left: "왼쪽",
            right: "오른쪽",
            tracking: "현재 추적 중"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "업적 해제 시 재생할 사운드 파일을 선택하세요" : "업적 해제 시 임의로 재생할 오디오 파일이 포함된 폴더를 선택하세요")

    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "앱이 시작된 이후에 발생한 사항에 대한 로그입니다"
            },
            copylbl: {
                elem: "로그 내용 복사"
            },
            openlbl: {
                elem: "로그 파일 생성"
            }            
        }

        return translations
    }
}