export const translations = {
    global: {
        main: "메인",
        semi: "세미",
        rare: "희귀",
        plat: "100%",
        trophymain: "브론즈",
        trophysemi: "실버",
        trophyrare: "골드",
        trophyplat: "플래티넘",
        test: "테스트 알림",
        topleft: "왼쪽 상단",
        topcenter: "상단 중앙",
        topright: "오른쪽 상단",
        bottomleft: "왼쪽 하단",
        bottomcenter: "하단 중앙",
        bottomright: "오른쪽 하단",
        ok: "확인",
        preview: "미리보기",
        save: "저장",
        back: "뒤로",
        edit: "편집",
        lockedby: "$lock 에 의해 잠김",
        settings: "설정",
        appversion: "앱 버전",
        image: "이미지",
        audio: "오디오",
        folder: "폴더",
        font: "폰트",
        select: "선택",
        gametitle: "게임 제목",
        congrats: "축하합니다!",
        achievementunlocked: "업적 잠금 해제됨",
        gamecomplete: "100% 완료",
        achievementdesc: "테스트 알림 버튼을 클릭했습니다",
        gamecompletedesc: "모든 업적이 잠금 해제되었습니다!",
        defaultcustomfont: "기본값 (선택된 폰트 없음)",
        defaultsoundfile: "기본값 (선택된 파일 없음)",
        defaultsounddir: "기본값 (선택된 폴더 없음)",
        nowtracking: "현재 업적 추적 중:",
        nopreview: "네이티브 OS에는 미리보기를 사용할 수 없습니다",
        options: "옵션",
        resetwindow: "창 초기화",
        show: "보이기",
        exit: "종료",
        donotshowagain: "이 대화 상자를 다시 표시하지 않음",
        releasegame: "게임 릴리즈",
        releasegamesub: [
            `백그라운드 Worker 프로세스를 재시작하고 현재 게임의 추적을 해제합니다`,
            `최근에 게임을 종료했지만 Steam이 여전히 실행 중으로 표시하거나, Steam Achievement Notifier가 이미 종료된 게임을 추적 중으로 표시하는 경우 이 옵션을 시도해보세요`
        ],
        noupdateavailable: "사용 가능한 업데이트가 없습니다",
        latestversion: "최신 버전이 설치되어 있습니다",
        missingdeps: "부족한 종속성",
        restartapp: "앱 다시 시작하기",
        restartappsub: [
            `만약 작동이 제대로 이루어지지 않는다면, 앱을 닫고 다시 열기 위해 이 옵션을 사용하세요`,
            `앱을 다시 시작한 후에도 문제가 지속된다면, 홈 화면의 내부 링크를 사용하여 보고해 주시기 바랍니다`
        ],
        suspend: "일시 중지",
        resume: "다시 시작",
        new: "새로 만들기...",
        nodata: "데이터 없음",
        findappid: "AppID 찾기",
        findappidsub: [
            `모든 Steam 게임에는 고유한 번호가 있습니다. 이를 <span class="hl">AppID</span>라고 합니다. Steam 게임의 관련 AppID를 확인하려면 다음 중 하나를 확인하십시오.`,
            `<span class="hl">Steam 클라이언트</span>에서 <span class="hl">라이브러리</span>에서 게임을 마우스 오른쪽 단추로 클릭하고 <i>속성</i> > <i>업데이트</i>를 선택합니다. 여기에 AppID가 나열됩니다`,
            `게임의 <span class="hl">상점 페이지</span>의 <span class="hl">URL</span> - <span class="hl">app/</span> 뒤에 나열된 숫자입니다: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `<span class="hl">SteamDB</span>와 같은 웹 사이트 - <span class="hl">App Info</span> 섹션에 각 게임의 AppID가 나열됩니다`
        ],
        noexe: "게임 EXE 파일을 찾을 수 없습니다!",
        noexesub: "자세한 정보를 보려면 여기를 클릭하세요",
        noexedialogsub: [
            `Steam Achievement Notifier가 이 게임의 실행 파일을 자동으로 찾을 수 없었습니다. 게임을 종료한 후 "릴리스"하려면 게임의 실행 파일 위치가 필요합니다`,
            `게임 종료 후 수동으로 릴리스하려면 <i>마우스 오른쪽 버튼</i>으로 <span class="hl">시스템 트레이 아이콘</span> > <span class="hl">옵션</span> > <span class="hl">게임 릴리스</span>를 선택하거나 <span class="hl">게임 릴리스 바로가기</span>를 사용하세요`,
            `또는 아래의 <span class="hl">추가</span> 버튼을 클릭하여 현재 포커스된 창과 연결된 실행 파일을 <span class="hl">설정</span> > <span class="hl">게임</span> > <span class="hl">자동 릴리스 게임</span>에 추가하세요`,
        ],
        autorelease: "자동 릴리스 게임",
        autoreleasesub: [
            `게임 창을 닫은 후에도 Steam에서 게임이 <i>플레이 중</i>으로 표시된다면 <span class="hl">자동 릴리스 게임</span>에 새 항목을 추가해 보세요`,
            `현재 게임에 대해 이를 수행하려면 아래의 <span class="hl">추가</span> 버튼을 클릭하여 현재 포커스된 창과 연결된 실행 파일을 <span class="hl">설정</span> > <span class="hl">게임</span> > <span class="hl">자동 릴리스 게임</span>에 추가하세요`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>추가 버튼을 클릭하면 어떻게 되나요?</u></span>`,
        linkgamehelp: "포커스를 통해 항목 추가",
        linkgamehelpsub: [
            `<span class="hl">추가</span> 버튼을 클릭하면 현재 포커스된 창의 정보를 사용하여 <span class="hl">설정</span> > <span class="hl">게임</span> > <span class="hl">자동 릴리스 게임</span>에 새 항목이 자동으로 추가됩니다.`,
            `<span class="hl">추가</span> 버튼을 클릭하면 5초 타이머가 시작됩니다`,
            `타이머가 끝나기 전에 게임 창에 포커스를 맞추세요`,
            `타이머가 종료되면 현재 <span class="hl">AppID</span>에 대한 새 항목이 포커스된 창과 연결된 실행 파일을 사용하여 <span class="hl">설정</span> > <span class="hl">게임</span> > <span class="hl">자동 릴리스 게임</span>에 추가됩니다`,
            `새 시도는 기존 항목을 덮어쓰며, 또는 <span class="hl">설정</span> > <span class="hl">게임</span> > <span class="hl">자동 릴리스 게임</span>에서 <span id="linkhelpunlink"></span> 버튼을 클릭하여 항목을 제거할 수 있습니다`
        ],
        addlinkfailed: "창을 추가할 수 없습니다",
        addlinkfailedsub: `<span class="hl">추가</span> 버튼을 클릭하여 다시 시도하세요`,
        webhookunlockmsg: "$user가 업적을 잠금 해제했습니다",
        webhookunlockmsgplat: "$user 님이 모든 업적을 해제했습니다",
        webhookingame: "$gamename에서",
        notconnected: "연결되지 않음",
        raloghelp: "게임이 감지되지 않습니다",
        raenablelog: `에뮬레이터 로그 파일`,
        raenablelogsub: [
            `게임의 내부 이벤트(예: 현재 게임 상태, 업적 잠금 정보 등)에 액세스하려면 선택한 에뮬레이터에서 외부 <span class="hl">로그 파일</span> 기록이 <u>활성화되어야 합니다</u>.<br><br>선택된 에뮬레이터는 <u>이 <span class="hl">로그 파일</span></u>을 <span class="hl">로그 파일 경로</span> 값으로 사용해야 합니다.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > 설정 > 로깅</span>을 다음 설정으로 구성해야 합니다:
                    <br>
                    <ul>
                        <li><span class="hllb">로깅 상세도</span>: <span class="hlgreen">ON</span></li>
                        <li><span class="hllb">프론트엔드 로깅 레벨</span>: <span class="hlgreen">1 (정보)</span></li>
                        <li><span class="hllb">파일에 로깅</span>: <span class="hlgreen">ON</span></li>
                        <li><span class="hllb">로그 파일에 타임스탬프 추가</span>: <span class="hlred">OFF</span></li>
                    </ul>
                    <br>
                    기본 설치 설정을 사용할 경우, <span class="hl">"retroarch.log"</span>는 다음 위치에 저장됩니다:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > 보기 > 로그 구성 표시</span>를 다음 설정으로 구성해야 합니다:
                    <br>
                    <ul>
                        <li><span class="hllb">상세도</span>: <span class="hlgreen">정보</span></li>
                        <li><span class="hllb">로거 출력</span> > <span class="hlgreen">파일에 쓰기</span></li>
                        <li><span class="hllb">로그 유형</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    기본 설치 설정을 사용할 경우, <span class="hl">"dolphin.log"</span>는 다음 위치 중 하나에 저장됩니다:
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
                    <span class="hl">PCSX2 > 도구 > 파일 로깅 활성화</span>가 활성화되어야 합니다
                    <br>
                    <br>
                    기본 설치 설정에서는 <span class="hl">"emulog.txt"</span>가 다음 위치에 저장됩니다:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span>은 <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>다운로드</u></span>하여 <span class="hl">Duckstation 설치 디렉토리</span>로 이동해야 합니다</li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > 설정 > 업적 > RAIntegration (개발자 전용)</span>을 활성화해야 합니다
                    <br>
                    <br>
                    기본 설치 설정을 사용하면, <span class="hl">"RALog.txt"</span>는 다음 위치에 저장됩니다:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > 설정 > 개발자 도구 > 일반 > 파일에 로그 기록</span> 옵션이 활성화되어 있으며, 다음 설정으로 구성되어야 합니다:
                    <br>
                    <ul>
                        <li><span class="hllb">도전 과제</span>: <span class="hlgreen">정보</span></li>
                    </ul>
                    <br>
                    기본 설치 설정을 사용하는 경우, <span class="hl">"log.txt"</span> 파일은 다음 위치에 저장됩니다:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "지원되지 않는 Beta",
        betaunsupportedsub: [
            "Steam Achievement Notifier의 새로운 버전이 출시되었습니다!",
            `<u>이 Beta 버전은 더 이상 지원되지 않습니다</u>. 아래의 <span class="hl">Releases</span> 버튼을 사용하여 Github에서 최신 공식 버전을 다운로드하고 설치해주세요.`,
            "테스트해 주셔서 감사합니다! 💜"
        ],
        betaghreleases: "릴리스",
    },
    app: {
        content: {
            game: "게임이 감지되지 않았습니다",
            customise: "사용자 정의",
            test: "테스트 알림 표시"
        }
    },
    settings: {
        language: {
            title: "언어",
            content: {
                steamlang: "성취를 Steam 언어로 번역하기",
                maxsteamlangretries: "최대 번역 시도 횟수"
            }
        },
        os: {
            title: "운영 체제",
            content: {
                desktop: "데스크톱 바로 가기 만들기",
                startwin: "로그온 시 시작",
                startmin: "최소화하여 시작",
                nohwa: "하드웨어 가속 비활성화",
                litemode: "라이트 모드"
            }
        },
        notifications: {
            title: "알림",
            content: {
                rarity: "희귀도 비율",
                semirarity: "실버 비율",
                rareonly: "희귀 항목만",
                all: "모두",
                off: "끔",
                showpercent: "백분율 표시",
                soundonly: "사운드만",
                nowtracking: "추적 알림 표시",
                nowtrackingscale: "추적 스케일",
                nowtrackingpos: "추적 위치",
                shortcuts: "알림 단축키",
                noiconcache: "아이콘 캐시 비활성화",
                webhooks: "Discord 서버에 게시",
                webhooktypes: "Webhook 종류",
                webhookurl: `Webhook URL`,
                webhookcaution: `이 옵션을 활성화하고 유효한 Discord Webhook 링크를 제공함으로써 <u>현재 Steam 사용자에 대한 모든 업적 및 게임 정보</u>가 제공된 Webhook 링크를 통해 지정된 Discord 서버에 게시될 것임을 이해하는 데 동의합니다.<br><br>Steam Achievement Notifier가 이 정보를 대신 게시하는 것을 원하지 않는 경우, 이 옵션을 비활성화해 주세요.`,
                webhooklaststatus: "최종 상태",
                webhookspoilers: `스포일러 태그 추가`,
                webhookappid: `AppID 표시`,
                replaynotify: "재생 알림",
                replaynotifyshortcut: "재생 단축키",
                customtrigger: "사용자 지정 트리거",
                customtriggershortcut: "트리거 단축키",
                customtriggerdelay: "트리거 지연",
                customtriggerusedisplaytime: "표시 시간 사용",
                trophymode: "트로피 모드",
                notifymax: "최대 알림 수", 
                notifyspace: "알림 간격"
            }
        },
        games: {
            title: "게임",
            content: {
                linkedgames: "자동 릴리스 게임",
                themeswitch: "테마 자동 전환",
                exclusionlist: "제외 목록",
                inclusionlist: "포함 목록",
                listmode: "목록 모드",
                exclusion: "제외",
                inclusion: "포함"
            }
        },
        media: {
            title: "미디어",
            content: {
                steamss: "Steam 스크린 샷 찍기",
                screenshots: "추가 미디어",
                off: "끔",
                overlay: "알림 오버레이가있는 스크린 샷",
                monitors: "스크린 샷 소스",
                hdrmode: "HDR 모드",
                ovpos: "오버레이 위치",
                ovmatch: "맞춤 위치와 일치",
                ovx: "수평 오프셋",
                ovy: "수직 오프셋",                
                ovpath: "스크린 샷 경로",
                ssdelay: "스크린 샷 지연",
                notifyimg: "알림 이미지",
                screenshot_only: "네이티브 스크린샷만",
                imgpath: "이미지 경로",
                ssenabled: "활성화",
                ssmode: "스크린샷 모드",
                screen: "화면",
                window: "창"
            }
        },
        streaming: {
            title: "스트리밍",
            content: {
                extwin: "스트림 알림",
                extwinframerate: "프레임 속도",
                extwinshow: "창 표시",
                audiosrc: "오디오 소스",
                notify: "알림",
                app: "앱",
                off: "음소거됨",
                statwin: "업적 통계 창",
                statwinaot: "항상 위에",
                noachievements: "표시할 업적이 없습니다",
                startgame: "업적을 표시하려면 게임을 시작하세요!",
                max: "최대",
                custom: "사용자 정의...",
                statwinshortcut: "오버레이 단축키",
            }
        },
        accessibility: {
            title: "접근성",
            content: {
                noanim: "앱 창 애니메이션 비활성화",
                noupdatedialog: "업데이트 대화상자 비활성화",
                nvda: "NVDA 지원 활성화",
                tooltips: "도구 설명 표시",
                showsystrayopts: "시스템 트레이 옵션 표시",
                releaseshortcut: "게임 릴리스 단축키"
            }
        },
        advanced: {
            title: "고급 설정",
            content: {
                pollrate: "폴링 속도",
                initdelay: "추적 지연",
                releasedelay: "릴리스 지연",
                maxretries: "최대 재시도 횟수",
                debug: "디버그 패널",
                userust: "대체 처리 모드",
                notifydebug: "디버그 알림 표시",
                exportachdata: "업적 데이터 내보내기",
                lognum: "이전 로그 파일", 
                audiocooldown: "오디오 대기 시간",
                usecustomfiles: "사용자 정의 앱 파일 사용",
                showcustomfiles: "사용자 정의 앱 파일 표시"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "에뮬레이터",
                rauser: "사용자 이름",
                rakey: "API 키",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "로그 파일 경로",
                rapercenttype: "퍼센트 유형",
                hard: "하드코어",
                soft: "소프트코어",
                placeholder: "로그 파일 경로를 입력하세요",
                logfile: "로그 파일",
                status: "상태",
                game: "게임",
                lastachievement: "마지막 업적 ID",
                wait: "에뮬레이터 대기 중",
                idle: "게임 이벤트 대기 중",
                start: "게임 시작",
                stop: "게임 종료",
                achievement: "업적 해제"
            }
        },
        misc: {
            title: "기타",
            content: {
                colorprofile: "색상 프로필",
                checkforupdates: "업데이트 확인",
                log: "앱 로그",
                reset: "앱 재설정"
            }
        }
    },    
    customiser: {
        preset: {
            title: "프리셋",
            content: {
                preset: "알림 프리셋",
                iconanim: "희귀 아이콘 애니메이션",
                alldetails: "모든 세부사항 표시",
                usepercent: "백분율 사용",
                displaytime: "표시 시간",
                scale: "크기 조절",
                customtext: "사용자 정의 텍스트",
                usegametitle: "게임 제목 사용",
                customfont: "사용자 정의 글꼴"
            }
        },
        sound: {
            title: "사운드",
            content: {
                soundmode: "사운드 모드",
                file: "파일",
                folder: "랜덤",
                soundfile: "사운드 파일",
                sounddir: "사운드 폴더",
                volume: "볼륨"
            }
        },
        style: {
            title: "스타일",
            content: {
                bgstyle: "배경 스타일",
                solid: "단색",
                gradient: "그라데이션",
                img: "이미지",
                gameart: "게임 아트",
                gradientangle: "그라데이션 각도",
                bgimg: "배경 이미지",
                bgachicon: "업적 아이콘 사용",
                bgimgbrightness: "밝기",
                brightness: "밝기",
                blur: "흐림",
                roundness: "둥근 모양",
                fontsize: "글꼴 크기",
                usecustomfontsizes: "사용자 정의 글꼴 크기 사용",
                unlockmsgfontsize: "해제 메시지",
                titlefontsize: "제목",
                descfontsize: "설명",
                textvspace: "텍스트 간격",
                opacity: "불투명도",
                bgonly: "배경만",
                glow: "발광",
                glowcolor: "색상",
                glowsize: "크기",
                glowx: "수평 오프셋",
                glowy: "수직 오프셋",
                glowopacity: "불투명도",
                glowanim: "애니메이션",
                glowspeed: "속도",
                glowrarity: "희귀도 사용",
                glowcolorbronze: "희귀도: > $semirarity",
                glowcolorsilver: "희귀도: < $semirarity & > $rarity",
                glowcolorgold: "희귀도: < $rarity",
                off: "없음",
                pulse: "맥박",
                double: "더블",
                focus: "포커스",
                orbit: "궤도",
                fluorescent: "형광",
                rainbow: "무지개",
                mask: "마스크",
                maskimg: "마스크 이미지",
                useoutline: "윤곽선",
                outline: "윤곽선 유형",
                outlinecolor: "윤곽선 색상",
                outlinewidth: "윤곽선 너비",
                dashed: "점선",
                dotted: "점선"
            }
        },
        colors: {
            title: "색상",
            content: {
                primarycolor: "기본 색상",
                secondarycolor: "보조 색상",
                tertiarycolor: "제3 색상",
                iconshadowcolor: "레어 아이콘 그림자 색상",
                iconanimcolor: "레어 아이콘 애니메이션 색상",
                fontcolor: "글꼴 색상",
                usecustomfontcolors: "사용자 정의 글꼴 색상 사용",
                unlockmsgfontcolor: "색상 1",
                titlefontcolor: "색상 2",
                descfontcolor: "색상 3",
                fontoutline: "글꼴 외곽선",
                fontoutlinecolor: "글꼴 외곽선 색상",
                fontoutlinescale: "폰트 윤곽선 크기",
                fontshadow: "글꼴 그림자",
                fontshadowcolor: "글꼴 그림자 색상",
                fontshadowscale: "폰트 그림자 크기",
                fontshadowx: "수평 오프셋",
                fontshadowy: "수직 오프셋"
            }
        },
        icons: {
            title: "아이콘",
            content: {
                iconscale: "아이콘 크기",
                iconroundness: "아이콘 둥글기",
                showiconborder: "아이콘 테두리 표시",
                iconborderimg: "아이콘 테두리 이미지",
                iconborderpos: "테두리 위치",
                iconborderscale: "테두리 크기",
                iconborderx: "수평 오프셋",
                iconborderrarity: "희귀도 사용",
                iconborderimgbronze: "희귀도: > $semirarity",
                iconborderimgsilver: "희귀도: < $semirarity & > $rarity",
                iconbordery: "수직 오프셋",
                front: "앞",
                back: "뒤",
                plat: "100% 로고",
                usegameicon: "게임 아이콘 사용",
                gameicontype: "게임 아이콘 유형",
                usecustomimgicon: "사용자 정의 아이콘 사용",
                customimgicon: "사용자 정의 아이콘",
                icon: "아이콘",
                logo: "로고",
                logoscale: "로고 크기",
                decoration: "장식",
                decorationscale: "장식 크기",
                showdecoration: "장식 표시",
                rarity: "희귀도",
                showhiddenicon: "숨은 아이콘 표시",
                hiddenicon: "숨은 아이콘",
                replacelogo: "로고 바꾸기"
            }
        },
        position: {
            title: "위치",
            content: {
                pos: "화면 위치",
                usecustompos: "사용자 정의 위치 사용",
                setcustompos: "설정",
                copycustompos: "모두에 적용",
                resetcustompos: "재설정"
            }
        },
        theme: {
            title: "테마",
            content: {
                updatetheme: "테마 업데이트",
                savetheme: "테마 저장",
                sub: [
                    `저장된 <span class="hl">사용자 테마</span>는 홈 화면의 <span class="hl">테마 선택</span> 메뉴에서 선택할 수 있습니다.`,
                    `테마 이름이 <u>고유해야</u>합니다. - 기존 테마와 일치하는 이름은 <u>이전 것을 덮어쓸 것</u>입니다!`
                ],
                placeholder: "테마 이름",
                theme: "테마",
                importtheme: "테마 가져오기",
                import: "가져오기",
                importsub: [
                    `사용자가 생성한 <span class="hl">테마 파일</span>을 가져옵니다`,
                    `<span class="hl">가져온 테마</span>는 성공적으로 가져온 후 자동으로 로드되며, <span class="hl">테마 선택</span> 메뉴에서 선택할 수 있습니다`,
                ],
                importidle: `가져올 <span class="hl">테마 파일</span>을 선택하세요`,
                importcopied: `테마가 성공적으로 복사되었습니다`,
                importrenamed: `테마 이름이 성공적으로 변경되었습니다`,
                importextracted: `테마가 성공적으로 추출되었습니다`,
                importrewriting: `테마 파일 경로를 다시 작성 중입니다...`,
                importconverting: `테마를 변환 중입니다...`,
                importcreating: `테마를 생성 중입니다...`,
                importdone: `테마가 성공적으로 가져왔습니다`,
                importfailed: `선택한 테마 파일을 가져오는 중 오류가 발생했습니다!`,
                exporttheme: "테마 내보내기",
                export: "내보내기",
                exporterrortitle: "내보내기 오류",
                exporterrorsub: [
                    "선택한 테마를 내보내는 동안 오류가 발생했습니다",
                    `현재 테마를 저장해 보세요 (<i><span class="hl">테마 저장</span></i>를 통해) 그리고 다시 내보내기를 시도해 보세요`,
                    `문제가 지속되면 아래의 오류를 복사하고 <span class="hl">홈 화면</span>의 링크 버튼을 통해 신고해 주세요`
                ],
                synctheme: "테마 동기화",
                syncedwith: "동기화됨",
                themeselect: "선택된 테마"
            }
        }
    },
    logwin: {
        content: {
            tagline: "앱을 시작한 이후에 발생한 사항은 다음과 같습니다",
            copylog: "로그 내용 복사"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>정말로 확실합니까?</span>
                    <span>이전에 구성된 모든 데이터, <u>사용자 정의를 포함한</u> 모두 기본값으로 재설정됩니다.</span>
                    <span>🛑 이 작업은 취소할 수 없습니다!</span>
                </div>
            `,
            reset: "재설정"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier에 문제가 발생하여 종료해야 합니다.",
            details: "다음은 오류 세부 정보입니다:",
            sub: "선호하는 플랫폼을 통해 이 문제를 보고하려면 아래 버튼을 클릭하십시오.",
            report: "보고",
            log: "앱 로그",
            exit: "종료"
        }
    },    
    tooltips: {
        game: "현재 추적 중인 업적이 있는 게임",
        usertheme: "이전에 저장된 테마 선택",
        customise: "업적 알림 사용자 정의",
        test: "테스트 알림 표시, 사용자 정의 포함",
        kofi: "Ko-Fi에서 기부하기!",
        discord: "Discord에 가입하기!",
        github: "문제 보고",
        lang: "앱에서 사용되는 UI 언어 선택",
        steamlang: `Steam의 애플리케이션 파일에 있는 번역을 로드하여 사용자가 선택한 언어로 성취 정보를 표시하려고 시도합니다<br><br><span class="ttdesc">이 옵션은 Steam의 애플리케이션 데이터에 저장된 JSON 파일에서 번역을 찾으려고 시도합니다. 현재 성취의 번역을 찾을 수 없는 경우, 대신 Steamworks에서 가져온 성취 정보가 표시됩니다.</span>`,
        maxsteamlangretries: `현재 성취에 대한 유효한 번역을 찾기 위한 시도 횟수 (100ms마다)<br><br><span class="ttdesc">Steam은 현재 각 게임과 연결된 JSON 파일에 적은 양의 성취 데이터만 저장합니다. 이 파일에 없는 성취는 성취가 잠금 해제된 후에 추가됩니다.<br><br>새로운 데이터를 추가하는 데 시간이 걸릴 수 있으므로 이 값을 높이면 현재 성취에 대한 번역 데이터를 찾을 가능성이 높아지지만, 이 설정에 의해 계산된 시간만큼 화면에 알림이 표시되는 것이 지연될 수도 있습니다.<br><br>현재 성취에 대한 유효한 번역 데이터를 찾을 수 없는 경우, 번역은 Steamworks에서 지정한 언어로 돌아갑니다.</span>`,
        desktop: "데스크톱에 앱 실행 바로 가기 전환",
        startwin: "로그인 후 Steam Achievement Notifier 자동 시작",
        startmin: "실행 후, 시스템 트레이에서 열릴 때까지 앱 UI 창 숨기기",
        nohwa: `하드웨어 가속을 비활성화하면 리소스가 제한된 시스템이나 전용 GPU가없는 시스템의 성능을 향상시킬 수 있습니다<br><br><span class="ttdesc">이 옵션을 활성화/비활성화하면 응용 프로그램이 다시 시작됩니다</span>`,
        litemode: "모든 상호 작용 UI 요소 비활성화, 시스템 트레이 아이콘을 통한 제한된 앱 기능만 제공. 앱이 사용하는 리소스 개선 가능",
        rarity: `희귀 업적 알림이 표시되는 비율입니다.<br><br>이 값보다 높은 잠금 해제 비율을 가진 모든 업적은 메인 알림으로 표시됩니다<br><br><span class="ttdesc"><span class="hl">트로피 모드</span>가 활성화된 경우, 이 값보다 높은 잠금 해제 비율을 가진 모든 업적은 대신 실버 알림으로 표시됩니다</span>`,
        semirarity: `"실버" 알림 요소가 표시되는 비율입니다 (예: <span class="hl">희귀 배지</span>, <span class="hl">장식</span> 등).<br><br>이 값 이하(또는 같고)이며 <span class="hl">희귀도 비율</span>보다 높은 잠금 해제 비율을 가진 모든 업적은 "실버" 희귀도용으로 설정된 알림 요소를 표시합니다.<br><br>이 값보다 높은 잠금 해제 비율을 가진 모든 업적은 "브론즈" 희귀도용으로 설정된 알림 요소를 표시합니다<br><br><span class="ttdesc"><span class="hl">트로피 모드</span>가 활성화된 경우, 이 값보다 높은 잠금 해제 비율을 가진 모든 업적은 대신 브론즈 알림으로 표시됩니다</span>`,
        showpercent: "선택한 유형의 알림에 업적의 잠금 해제 백분율 표시",
        soundonly: "알림 비활성화, Customiser에서 설정한 사운드만 재생",
        extwin: "현재 화면에 표시되는 모든 알림을 복제하는 창을 생성합니다. 이 창은 OBS와 같은 스트리밍 소프트웨어에서 창 캡처 소스로 추가할 수 있습니다",
        extwinframerate: "스트림 알림을 위한 목표 프레임 속도 설정",
        extwinshow: `스트림 알림 창의 가시성을 전환합니다<br><br><span class="ttdesc">작업 표시줄에서 포커스가 있는 경우 <code class="ttcode">Ctrl</code> 키를 누르고 있으면 창의 현재 위치가 표시됩니다</span>`,
        audiosrc: "앱에서 생성되는 오디오의 소스 선택(또는 비활성화)",
        nowtracking: "실행 중인 게임의 업적이 추적되고 있음을 알리는 알림 표시",
        nowtrackingscale: `추적 알림 크기 설정`,
        nowtrackingpos: `추적 알림 위치 설정`,
        shortcuts: "키보드 단축키를 통해 테스트 알림 트리거. 각 알림 유형에 대해 사용자 정의 가능한 단축키",
        noiconcache: `게임 시작시 성취 아이콘 캐시를 비활성화합니다.<br><br><span class="ttdesc">이렇게 하면 게임을 시작할 때 앱 성능이 크게 향상되고 많은 성취가 있는 게임의 추적 문제도 해결될 수 있습니다. 그러나 아이콘 캐시를 비활성화하면 드물게 알림에서 성취 아이콘이 누락될 수 있습니다</span>`,
        steamss: "업적이 잠금 해제될 때 Steam 스크린샷 찍기",
        screenshots: "알림이 표시될 때 생성할 추가 미디어 유형 선택",
        monitors: "스크린샷을 찍을 모니터 선택",
        hdrmode: `고 다이내믹 레인지 (HDR) 모니터와 호환되는 방법으로 스크린샷을 촬영합니다`,
        ovpos: "스크린샷 내 알림 오버레이 위치",
        ovmatch: "Customiser에서 설정한 화면 위치와 일치",
        ovpath: "이 옵션으로 생성된 스크린샷이 저장될 위치",
        ssdelay: "알림이 발생한 후 스크린샷이 찍히기까지의 지연 시간 추가",
        sspreview: "스크린샷이 저장될 때의 미리보기 표시",
        noanim: "앱 창 애니메이션 및 전환 효과 비활성화",
        noupdatedialog: `자동으로 표시되고 초점이 맞춰지는 <span class="hl">업데이트 가능</span> 대화상자를 방지합니다<br><br><span class="ttdesc">업데이트 버튼을 클릭하여 여전히 대화상자에 접근할 수 있습니다</span>`,
        nvda: "업적이 잠금 해제될 때 클립보드로 업적 정보 복사하여 NVDA와 같은 스크린 리더 소프트웨어에서 읽을 수 있도록 활성화",
        tooltips: "특정 UI 요소 위에 마우스를 올렸을 때 도구 설명 표시",
        colorprofile: `선택한 색상 프로필을 사용하여 모든 애플리케이션 창을 렌더링하도록 강제<br><br><span class="ttdesc">앱 재시작이 필요합니다</span>`,
        pollrate: `게임 중 성취 데이터의 업데이트 간격을 설정합니다<br><br><span class="ttdesc">값이나 시스템 하드웨어에 따라 성능이 증가하거나 감소할 수 있습니다. 일반적으로 높은 값은 시스템 부하를 줄이지만 알림이 지연될 수 있습니다</span>`,
        initdelay: `현재 <span class="hl">AppID</span> 감지와 프로세스/성취 추적 시작 사이의 지연을 설정합니다<br><br><span class="ttdesc">이 값을 증가시키면 Steam이 현재 게임을 시작할 수 없는 시나리오를 방지할 수 있습니다 (게임이 시작되기 전에 Steamworks가 애플리케이션을 초기화하는 경우)</span><br><br><span class="ttdesc">또한 이 값을 증가시켜 게임 전 시작 프로세스의 잘못된 감지를 우회하는 데 사용할 수도 있습니다</span>`,
        releasedelay: `현재 게임이 릴리스된 후 백그라운드 Worker 프로세스가 다시 시작되기까지 대기하는 시간을 설정합니다. 자동 프로세스 추적과 자동 릴리스 게임 모두에 영향을 미칩니다<br><br><span class="ttdesc">Steamworks가 앱에서 완전히 해제될 수 있도록 더 긴 시간을 허용합니다. 이 값을 늘리면 이전에 종료된 게임을 추적하는 것과 같은 비정상적인 동작을 방지할 수 있습니다</span>`,
        maxretries: `실행 중인 프로세스를 감지된 AppID에 연결하기 위한 최대 재시도 횟수를 설정합니다. 자동 프로세스 추적과 자동 릴리스 게임 모두에 영향을 미칩니다<br><br><span class="ttdesc">재시도는 1초마다 수행됩니다. 이 횟수 내에 실행 중인 프로세스가 현재 AppID에 연결되지 않으면 잘못된 프로세스가 반환됩니다. 이러한 경우 시스템 트레이 > 옵션 > 게임 릴리스를 통해 수동으로 게임을 릴리스해야 합니다</span>`,
        debug: "디버그 패널을 열면 프로세스 추적 정보가 자세하게 표시됩니다.",
        userust: "시스템에서 추적된 게임 프로세스가 현재 실행 중인지 확인하기 위해 Rust 기반의 대체 기능을 사용합니다. 체크를 해제하면 대신 기본 NodeJS 기반 프로세스 확인이 사용됩니다.",
        notifydebug: "모든 알림에 대한 DevTools 창 생성. 알림 문제의 디버깅/문제 해결에 유용",
        usecustomfiles: "사용자 정의 가능한 파일을 알림에로드 가능하게 함. 일반 사용자에게 주의가 필요",
        showcustomfiles: "사용자 정의 파일의 위치 열기",
        log: "앱 로그 창 열기, 프로세스 활동, 경고 및 오류에 대한 정보 표시",
        reset: "모든 구성 데이터 제거 및 앱 재시작",
        playback: "알림 미리보기 애니메이션 일시 중지/재개",
        replay: "알림 미리보기 애니메이션 다시 시작",
        preset: "사용자 정의할 알림 프리셋 선택",
        iconanim: "희귀 아이콘 테두리 및 애니메이션 전환",
        alldetails: "이 프리셋에 대해 기본적으로 숨겨진 모든 텍스트 요소를 알림에 표시",
        usepercent: "XP/S 값 대신 업적의 잠금 해제 백분율 표시",
        displaytime: "알림이 표시될 시간(초) 설정",
        scale: "알림의 크기를 확대 또는 축소",
        customtext: "알림 내에 표시될 사용자 정의 메시지 설정",
        usegametitle: "알림 내에 현재 게임의 제목 표시",
        customfont: "알림 내에서 사용할 사용자 정의 글꼴 로드",
        soundmode: "알림이 발생할 때 단일 오디오 파일 또는 여러 오디오 파일이 포함된 폴더에서 무작위로 선택된 오디오 파일 중 하나 선택",
        soundfile: "알림이 발생할 때 재생할 오디오 파일 선택",
        sounddir: "알림이 발생할 때 무작위로 선택될 오디오 파일이 포함된 폴더 선택",
        volume: "오디오 파일의 재생 볼륨 설정",
        preview: "선택한 오디오 파일 또는 폴더에서 무작위로 선택된 오디오 파일 미리보기",
        bgstyle: "알림 배경의 스타일 선택",
        gradientangle: "그라디언트의 각도 설정",
        bgimg: "알림 배경으로 사용할 이미지 파일 로드",
        bgachicon: "잠금 해제된 업적 아이콘을 알림 배경으로 사용",
        bgimgbrightness: "알림 배경으로 사용되는 이미지의 밝기 설정",
        brightness: "알림 배경으로 사용되는 게임 아트의 밝기 설정",
        roundness: "알림 모서리의 둥글기 설정",
        blur: "알림 배경에 적용되는 흐림 수준을 설정합니다",
        fontsize: "알림에서 사용되는 글꼴 크기 설정",
        opacity: "알림의 전체 투명도 설정",
        bgonly: "알림 배경에만 투명도 설정, 다른 요소는 완전한 불투명도 유지",
        glow: "알림을 둘러싸는 발광 효과를 활성화합니다",
        glowcolor: "발광 효과의 색상을 설정합니다",
        glowsize: "발광 효과의 크기를 설정합니다",
        glowx: "글로우 효과의 수평 오프셋 설정",
        glowy: "글로우 효과의 수직 오프셋 설정",
        glowopacity: "글로우 효과의 불투명도 설정",
        glowanim: "발광 효과에 적용되는 사전 정의된 애니메이션을 선택합니다",
        glowspeed: "발광 효과에 적용되는 애니메이션 속도를 설정합니다",
        glowrarity: "잠금 해제된 업적의 희귀도에 따라 빛 효과의 색상을 변경합니다",
        glowcolorbronze: "잠금 해제 비율이 > $semirarity 일 때 표시되는 빛 색상",
        glowcolorsilver: "잠금 해제 비율이 < $semirarity 이고 > $rarity 일 때 표시되는 빛 색상",
        glowcolorgold: "잠금 해제 비율이 < $rarity일 때 표시되는 빛 색상",
        mask: "사용자 지정 이미지로 알림의 일부를 마스킹합니다",
        maskimg: `마스크로 사용할 이미지 파일을 로드합니다<br><br><span class="ttdesc">CSS에서 <code class="ttcode">mask-mode: alpha</code>는 일반적으로 기대하는 것과 반대로 작동합니다. 이미지 파일의 투명 영역은 숨겨지고, 검은/회색 영역은 아래의 요소를 표시합니다</span>`,
        useoutline: "알림 주위에 윤곽선을 표시",
        outline: "알림 주위에 표시할 윤곽선 유형을 선택하세요",
        outlinecolor: "알림 주위의 윤곽선 색상을 설정하세요",
        outlinewidth: "알림 주위의 윤곽선 너비를 설정하세요",
        primarycolor: "알림의 기본 색상 설정",
        secondarycolor: "알림의 보조 색상 설정",
        tertiarycolor: "알림의 제3 색상 설정",
        fontcolor: "알림 내에 표시되는 모든 텍스트의 색상 설정",
        fontoutline: "알림 내에 표시되는 모든 텍스트에 외곽선 추가",
        fontoutlinecolor: "텍스트 외곽선의 색상 설정",
        fontoutlinescale: "텍스트 윤곽선 두께 설정",
        fontshadow: "알림 내에 표시되는 모든 텍스트에 그림자 추가",
        fontshadowcolor: "텍스트 그림자의 색상 설정",
        fontshadowscale: "텍스트 그림자 두께 설정",
        fontshadowx: "텍스트 그림자의 위치를 수평으로 이동",
        fontshadowy: "텍스트 그림자의 위치를 수직으로 이동",
        iconroundness: "알림 내에 표시되는 업적/게임 아이콘의 둥글기 설정",
        plat: "100% 아이콘으로 사용할 이미지 파일 로드",
        usegameicon: "잠금 해제된 업적의 아이콘을 현재 게임의 아이콘으로 교체",
        gameicontype: `게임 아이콘으로 표시할 이미지 유형 선택`,
        usecustomimgicon: "잠금 해제된 업적의 아이콘을 사용자 정의 이미지 파일로 교체",
        customimgicon: "사용자 정의 아이콘으로 사용할 이미지 파일을 로드",
        showhiddenicon: "알림에 업적이 숨겨져 있음을 나타내는 이미지 표시",
        hiddenicon: "숨은 업적 아이콘을 대체하기 위한 이미지 파일 로드",
        logo: "로고 아이콘을 대체할 이미지 파일 로드",
        decoration: "장식 아이콘을 대체할 이미지 파일 로드",
        showdecoration: "장식 아이콘의 가시성 전환",
        replacelogo: "선택한 장식으로 알림 내 로고 아이콘을 바꿉니다",
        pos: "알림의 화면 위치 설정",
        usecustompos: "알림에 대한 사용자 정의 위치 활성화",
        setcustompos: "알림에 대한 사용자 정의 위치 설정",
        copycustompos: "사용자 지정 위치를 다른 모든 알림 유형에 적용합니다",
        resetcustompos: "알림의 위치를 기본 사용자 정의 위치로 재설정",
        updatetheme: "선택한 사용자 정의 옵션으로 현재 테마를 업데이트합니다",
        savetheme: "구성된 모든 사용자 정의 옵션을 새로운 테마로 저장",
        visibilitybtn: "사용자 지정 미리보기 및 테스트 알림에서 요소의 가시성 전환",
        delbtn: "요소를 기본값으로 재설정",
        imgpath: "이 옵션으로 생성된 알림 이미지가 저장되는 위치",
        ssenabled: "이 유형의 미디어 생성을 활성화하거나 비활성화합니다",
        checkforupdates: `GitHub에 새 앱 버전이 출시되었는지 확인합니다. 업데이트가 가능한 경우, <span class="hl">업데이트 가능</span> 대화 상자를 통해 확인된 후 자동으로 다운로드 및 설치됩니다`,
        linkedgames: `특정 Steam 게임의 <span class="hl">자동 프로세스 추적</span> 우회<br><br><span class="ttdesc">이 옵션은 매우 특정한 시나리오에서만 사용해야 합니다. 사용자는 일반적인 상황에서 이 옵션을 사용할 필요가 없습니다!</span>`,
        exclusionlist: `앱에서 특정 Steam 게임의 업적 추적 방지<br><br><span class="ttdesc">이 옵션은 매우 특정한 시나리오에서만 사용해야 합니다. 사용자는 일반적인 상황에서 이 옵션을 사용할 필요가 없습니다!</span>`,
        inclusionlist: `명시되지 않은 한, 모든 Steam 게임이 앱에 의해 추적되지 않도록 합니다<br><br><span class="ttdesc">이 옵션은 매우 특정한 상황에서만 사용해야 합니다. 일반적인 상황에서는 이 옵션을 사용할 필요가 없습니다!</span>`,
        ovx: "스크린샷에 표시된 알림을 수평으로 오프셋합니다",
        ovy: "스크린샷에 표시된 알림을 수직으로 오프셋합니다",
        importtheme: `사용자가 생성한 <span class="hl">테마 파일</span>을 통해 맞춤 설정을 가져옵니다`,
        exporttheme: `현재 선택한 <span class="hl">테마</span>를 공유할 수 있도록 내보냅니다<br><br><span class="ttdesc">내보내기 전에 원하는 <span class="hl">테마</span>가 선택되었는지 확인하십시오 (<span class="hl">테마 선택</span> 메뉴를 통해). 또한 선택한 <span class="hl">테마</span>에 맞춤 설정이 저장되어 있는지 확인하십시오 (<span class="hl">테마 저장</span> 메뉴를 통해)<br><br><u>현재 <span class="hl">테마</span>에 저장되지 않은 모든 맞춤 설정은 내보내지 않습니다!</u></span>`,
        webhooks: "업적이 잠금 해제될 때마다 Discord 서버에 게시하기 위해 Webhook URL을 사용하세요",
        webhookmain: `$main 업적이 잠금 해제될 때 Discord 서버에 업적 정보를 게시할지 전환`,
        webhooksemi: `$semi 업적이 잠금 해제될 때 Discord 서버에 업적 정보를 게시할지 전환`,
        webhookrare: `$rare 업적이 잠금 해제될 때 Discord 서버에 업적 정보를 게시할지 전환`,
        webhookplat: `$plat 업적이 잠금 해제될 때 Discord 서버에 업적 정보를 게시할지 전환`,
        webhooktest: "모든 유형의 테스트 알림이 트리거될 때 테스트 정보를 Discord 서버에 게시할지 여부를 전환",
        webhookurl: `원하는 Discord 서버를 위한 <span class="hl">Webhook URL</span>을 설정하세요<br><br><span class="ttdesc">Webhook URL은 사용자 또는 애플리케이션을 대신하여 Discord 서버/채널에 게시하는 데 사용됩니다. Discord 서버에 새로운 Webhook을 설정하려면 사용자가 Webhook 생성을 허용하는 역할을 가진 서버의 멤버여야 합니다<br><br><u>이 옵션을 사용하려면 Webhook URL이 필요합니다</u><br><br>자세한 내용은 Discord의 공식 문서를 참조하세요</span>`,
        webhookspoilers: `Discord에 게시할 때 "숨겨진" 업적에 스포일러 태그 추가`,
        webhookappid: "웹훅 임베드 하단에 현재 게임의 AppID를 표시",
        unlockmsg: "$type 내에서 잠금 해제 메시지/맞춤 텍스트의 위치를 설정하세요",
        title: "$type 내에서 업적 제목의 위치를 설정하세요",
        desc: "$type 내에서 업적 설명의 위치를 설정하세요",
        notification: "알림",
        screenshot: "스크린샷",
        percentpos: "$type 내에서 희귀도 백분율의 위치를 설정하세요",
        sspercentpos: "$type 내에서 희귀도 백분율의 위치를 설정하세요",
        hiddeniconpos: "$type 내에서 숨겨진/비밀 업적 아이콘의 위치를 설정하세요",
        sshiddeniconpos: "$type 내에서 숨겨진/비밀 업적 아이콘의 위치를 설정하세요",
        decorationpos: "$type 내에서 장식 요소의 위치를 설정하세요",
        ssdecorationpos: "$type 내에서 장식 요소의 위치를 설정하세요",
        percentbadge: "업적/게임 아이콘 위에 위치한 배지 안에 잠금 해제 비율 표시",
        sspercentbadge: "업적/게임 아이콘 위에 위치한 배지 안에 잠금 해제 비율 표시",
        percentbadgepos: "배지 위치 설정",
        sspercentbadgepos: "배지 위치 설정",
        percentbadgecolor: "배지 배경색 설정",
        sspercentbadgecolor: "배지 배경색 설정",
        percentbadgefontcolor: "배지의 글꼴 색상 설정",
        sspercentbadgefontcolor: "배지의 글꼴 색상 설정",
        percentbadgefontsize: "배지 크기 설정",
        sspercentbadgefontsize: "배지 크기 설정",
        percentbadgeroundness: "배지 둥글기 설정",
        sspercentbadgeroundness: "배지 둥글기 설정",
        percentbadgex: "배지 요소의 수평 위치 오프셋",
        sspercentbadgex: "배지 요소의 수평 위치 오프셋",
        percentbadgey: "배지 요소의 수직 위치 오프셋",
        sspercentbadgey: "배지 요소의 수직 위치 오프셋",
        percentbadgeimg: "배지 요소로 희귀도 기반 아이콘 표시",
        sspercentbadgeimg: "배지 요소로 희귀도 기반 아이콘 표시",
        percentbadgeimgbronze: "잠금 해제 비율이 > $semirarity 일 때 표시되는 배지 아이콘",
        sspercentbadgeimgbronze: "잠금 해제 비율이 > $semirarity 일 때 표시되는 배지 아이콘",
        percentbadgeimgsilver: "잠금 해제 비율이 < $semirarity 이고 > $rarity 일 때 표시되는 배지 아이콘",
        sspercentbadgeimgsilver: "잠금 해제 비율이 < $semirarity 이고 > $rarity 일 때 표시되는 배지 아이콘",
        percentbadgeimggold: "잠금 비율이 < $rarity일 때 표시되는 배지 아이콘",
        sspercentbadgeimggold: "잠금 비율이 < $rarity일 때 표시되는 배지 아이콘",
        percentbadgeimgplat: "모든 업적이 잠금 해제되었을 때 표시되는 배지 아이콘",
        sspercentbadgeimgplat: "모든 업적이 잠금 해제되었을 때 표시되는 배지 아이콘",
        resetpbimgs: "모든 배지 아이콘을 기본값으로 재설정",
        elemsmatch: `이 알림 유형에 대해 커스터마이저에서 설정한 알림 요소 설정을 일치시킵니다.<br><br><span class="ttdesc">일부 알림 프리셋은 화면 기반 알림 레이아웃과 스크린샷 기반 알림 레이아웃 간의 차이로 인해 커스터마이저 설정과 완전히 일치하지 않을 수 있습니다.</span>`,
        themeswitch: `특정 게임이 감지될 때 저장된 <span class="hl">테마</span>로 자동 전환`,
        userthemesync: `선택한 <span class="hl">테마</span>의 사용자 정의를 모든 다른 알림 유형에 동기화`,
        showsystrayopts: `보통 <span class="hl">시스템 트레이</span> > <span class="hl">옵션</span> 아래에 위치하는 모든 옵션을 표시 <span class="hl">설정</span> > <span class="hl">기타</span>`,
        releaseshortcut: "지정된 키보드 단축키를 사용하여 현재 추적 중인 게임을 릴리스합니다",
        themeselect: "이전에 저장된 테마 선택",
        statwin: `현재 게임에 대한 구성 가능한 업적 통계를 외부 창에 표시<br><br><span class="ttdesc">"<span class="hl">Steam 언어로 업적 번역</span>" 옵션과 함께 사용 시, 특정 업적이 잠금 해제될 때까지 일부 번역이 제공되지 않을 수 있습니다</span>`,
        statwinaot: `성취 통계 오버레이를 "항상 위에" 모드로 설정하여 게임 창 위에 표시되도록 합니다<br><br><span class="ttdesc">이 옵션이 활성화되면 성취 통계 오버레이는 더 이상 사용자 상호작용(예: "클릭" 이벤트)을 등록하지 않습니다. 창과의 상호작용을 다시 활성화하려면 이 옵션을 비활성화해야 합니다</span>`,
        statwinshortcut: "지정된 키보드 단축키를 사용하여 업적 통계 오버레이를 전환합니다",
        ssdisplay: "알림 내에 캡처한 스크린샷 미리보기 표시",
        iconscale: "성공 아이콘의 크기를 늘리거나 줄입니다",
        showiconborder: "업적 아이콘 주위에 이미지를 테두리로 표시",
        iconborderimg: "업적 아이콘 주위에 사용할 이미지 파일을 로드",
        iconborderpos: "업적 아이콘 앞이나 뒤에 테두리 이미지를 표시할지 설정",
        iconborderscale: "알림 내에서 아이콘 테두리의 크기를 늘리거나 줄이기",
        iconborderx: "알림 내에서 아이콘 테두리의 수평 오프셋을 늘리거나 줄이기",
        iconbordery: "알림 내에서 아이콘 테두리의 수직 오프셋을 늘리거나 줄이기",
        iconborderrarity: "잠금 해제된 업적의 희귀도에 따라 아이콘 테두리 이미지를 변경",
        iconborderimgbronze: "잠금 해제 비율이 > $semirarity 일 때 표시되는 아이콘 테두리 이미지",
        iconborderimgsilver: "잠금 해제 비율이 < $semirarity 이고 > $rarity 일 때 표시되는 아이콘 테두리 이미지",
        iconshadowcolor: "레어 성공이 해제될 때 성공 아이콘 주위의 그림자 효과 색상을 설정합니다",
        iconanimcolor: "레어 성공이 해제될 때 성공 아이콘 뒤의 애니메이션 효과 색상을 설정합니다",
        logoscale: "알림 내의 로고 요소 크기를 늘리거나 줄입니다",
        decorationscale: "알림 내의 장식 요소 크기를 늘리거나 줄입니다",
        usecustomfontsizes: `알림 내 텍스트 요소의 크기를 개별적으로 늘리거나 줄입니다<br><br><span class="ttdesc">개별 글꼴 크기 값을 변경하면 원래 알림 레이아웃이 유지되지 않을 수 있습니다</span>`,
        unlockmsgfontsize: "해제 메시지 텍스트 요소의 크기를 늘리거나 줄입니다",
        titlefontsize: "성공 제목 텍스트 요소의 크기를 늘리거나 줄입니다",
        descfontsize: "성공 설명 텍스트 요소의 크기를 늘리거나 줄입니다",
        webhookembedcolormain: `$main 업적이 잠금 해제될 때 웹후크 임베드에 사용되는 색상 설정`,
        webhookembedcolorsemi: `$semi 업적이 잠금 해제될 때 웹후크 임베드에 사용되는 색상 설정`,
        webhookembedcolorrare: `$rare 업적이 잠금 해제될 때 웹후크 임베드에 사용되는 색상 설정`,
        webhookembedcolorplat: `$plat 업적이 잠금 해제될 때 웹후크 임베드에 사용되는 색상 설정`,
        raemus: "지원되는 에뮬레이터에서 게임이 감지될 때 알림 표시",
        rauser: "업적 추적에 사용할 Retro Achievements 사용자 이름 설정",
        rakey: `Retro Achievements API 인증에 사용할 Web API 키를 설정합니다<br><br><span class="ttdesc">Web API 키는 Retro Achievements 웹사이트에 로그인하고 <span class="hl">설정 > 키 > Web API 키</span>로 이동하여 복사하거나 다시 생성할 수 있습니다<br><br>🔒 제공된 키는 시스템에 로컬로 저장되기 전에 암호화됩니다 (현재 운영 체제가 암호화를 지원하는 경우)</span>`,
        rapercenttype: "알림에서 하드코어 또는 소프트코어 업적 잠금 퍼센트 표시 여부 설정",
        retroarch: `RetroArch를 사용하여 에뮬레이트된 게임의 Retro Achievements 알림을 표시<br><br><span class="ttdesc"><span class="hl">RetroArch > 설정 > 로깅</span>을 다음 설정으로 구성해야 합니다:<br><br><ul><li><span class="hllb">로깅 상세도</span>: <span class="hlgreen">ON</span></li><li><span class="hllb">프론트엔드 로깅 레벨</span>: <span class="hlgreen">1 (정보)</span></li><li><span class="hllb">파일에 로깅</span>: <span class="hlgreen">ON</span></li><li><span class="hllb">로그 파일에 타임스탬프 추가</span>: <span class="hlred">OFF</span></li></ul></span>`,
        dolphin: `Dolphin을 사용하여 에뮬레이트된 게임의 Retro Achievements 알림을 표시<br><br><span class="ttdesc"><span class="hl">Dolphin > 보기 > 로그 구성 표시</span>를 다음 설정으로 구성해야 합니다:<br><br><ul><li><span class="hllb">상세도</span>: <span class="hlgreen">정보</span></li><li><span class="hllb">로거 출력</span> > <span class="hlgreen">파일에 쓰기</span></li><li><span class="hllb">로그 유형</span> > <span class="hlgreen">Achievements (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `PCSX2로 에뮬레이션된 게임의 Retro Achievements 알림을 표시합니다<br><br><span class="ttdesc"><span class="hl">PCSX2 > 도구 > 파일 로깅 활성화</span>가 활성화되어야 합니다</span>`,
        duckstation: `Duckstation을 통해 에뮬레이션된 게임의 Retro Achievements 알림을 표시<br><br><span class="ttdesc">❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> 파일을 다운로드하여 <span class="hl">Duckstation의 설치 디렉토리</span>로 이동해야 합니다</span><br><br><span class="ttdesc"><span class="hl">Duckstation > 설정 > 업적 > RAIntegration (개발자 전용)</span>을 활성화해야 합니다</span>`,
        ppsspp: `PPSSPP를 통해 에뮬레이트된 게임의 Retro Achievements 알림 표시<br><br><span class="ttdesc"><span class="hl">설정 > 도구 > 개발자 도구 > 일반 > 파일에 로그 기록</span> 옵션이 활성화되어 있으며, 다음 설정으로 구성되어야 합니다:<br><br><ul><li><span class="hllb">도전 과제</span>: <span class="hlgreen">정보</span></span>`,
        retroarchpath: `RetroArch의 <span class="hl">"retroarch.log"</span> 로그 파일 경로 설정<br><br><span class="ttdesc">기본 설치 설정을 사용할 경우, <span class="hl">"retroarch.log"</span>는 <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span>에 저장됩니다.</span>`,
        dolphinpath: `Dolphin의 <span class="hl">"dolphin.log"</span> 로그 파일 경로 설정<br><br><span class="ttdesc">기본 설치 설정을 사용할 경우, <span class="hl">"dolphin.log"</span>는 다음 위치 중 하나에 저장됩니다:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `PCSX2의 <span class="hl">"emulog.txt"</span> 로그 파일 경로를 설정합니다<br><br><span class="ttdesc">기본 설치 설정에서는 <span class="hl">"emulog.txt"</span>가 <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span>에 저장됩니다</span>`,
        duckstationpath: `Duckstation의 <span class="hl">"RALog.txt"</span> 로그 파일 경로 설정<br><br><span class="ttdesc">기본 설치 설정에서 <span class="hl">"RALog.txt"</span>는 <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span>에 저장됩니다</span>`,
        ppsspppath: `PPSSPP의 <span class="hl">"log.txt"</span> 로그 파일 경로를 설정<br><br><span class="ttdesc">기본 설치 설정을 사용하는 경우, <span class="hl">"log.txt"</span> 파일은 다음 위치에 저장됩니다: <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "알림 내 텍스트 요소의 색상을 개별적으로 설정",
        unlockmsgfontcolor: "첫 번째 텍스트 요소의 색상 설정",
        titlefontcolor: "두 번째 텍스트 요소의 색상 설정",
        descfontcolor: "세 번째 텍스트 요소의 색상 설정",
        exportachdata: `업적이 잠금 해제되면 JSON 파일로 업적 데이터를 내보냅니다<br><br><span class="ttdesc">활성화하면, <span class="ttcode">achdata.json</span>이 다음 경로에 내보내집니다:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "알림 내 텍스트 요소 간의 수직 간격을 조정",
        ssmode: `스크린샷에서 전체 화면을 캡처할지, 현재 게임 창<span style="color: red;">*</span>을 캡처할지 설정합니다<br><br><span class="ttdesc">현재 게임의 <span class="hl">실행 파일</span>을 찾을 수 없는 경우(<i><span class="hl">자동 프로세스 추적</span>을 통해서든, <span class="hl">자동 릴리스 게임</span> 항목으로 추가된 경우든</i>), 이 옵션은 기본적으로 "화면" 모드로 설정됩니다</span>`,
        replaynotify: "최근 성취 알림을 재생",
        replaynotifyshortcut: "지정된 단축키를 사용하여 최근 성취 알림을 재생",
        replaynotifyempty: `<br><br><span class="ttdesc">재생 대기열이 비어 있습니다. 알림을 재생하려면 성취를 해제하세요</span>`,
        customtrigger: "업적을 해제할 때 키/조합을 시뮬레이션하도록 트리거합니다. 외부 응용 프로그램에 등록된 키보드 단축키를 트리거하는 데 사용할 수 있습니다",
        customtriggershortcut: `업적이 해제될 때 지정된 키/조합을 트리거합니다<br><br><span class="ttdesc">단축키당 1~3개의 키를 지원합니다. 3개 미만의 키를 누르는 경우 원하는 키를 누르고 타이머(5초)가 종료될 때까지 기다리세요</span>`,
        customtriggerdelay: "지정된 사용자 지정 트리거 키/조합을 지연합니다",
        customtriggerusedisplaytime: `현재 알림 유형의 표시 시간 값을 기준으로 지정된 사용자 지정 트리거 키/조합을 지연합니다`,
        trophymode: "메인/레어/100% 알림 유형을 브론즈/실버/골드/플래티넘으로 교체",
        lognum: `삭제되기 전에 저장되는 이전 로그 파일의 수입니다. 앱이 시작될 때마다 새로운 로그 파일이 생성됩니다<br><br><span class="ttdesc">0으로 설정하면, 종료 시 모든 이전 로그 파일이 삭제됩니다</span>`, 
        detectedappid: `현재 감지된 게임의 <span class="hl">AppID</span> 사용`,
        listmode: `<span class="hl">제외 목록</span>/<span class="hl">포함 목록</span>의 동작을 설정합니다<br><br><span class="ttdesc">• <span class="hl">제외</span>: 목록에 지정된 게임만 무시<br>• <span class="hl">포함</span>: 목록에 지정된 게임을 제외한 모든 게임을 무시</span>`,
        notifymax: `화면에 동시에 표시될 수 있는 최대 알림 수를 설정합니다<br><br><span class="ttdesc">동시에 표시되는 알림 수를 늘리면 더 많은 리소스가 필요하며 성능이 저하될 수 있습니다</span>`,
        notifyspace: "화면에 동시에 표시되는 알림 간의 거리를 설정합니다",
        audiocooldown: `다음 알림이 새로운 오디오를 재생하기 전에 대기해야 하는 시간을 설정합니다<br><br><span class="ttdesc">최대 알림 수가 1로 설정된 경우 오디오는 영향을 받지 않습니다</span>`
    },
    update: {
        updateavailable: "업데이트 가능",
        sub: [
            `<span id="newversion"></span>`,
            "Steam Achievement Notifier에 새로운 업데이트가 있습니다!",
            `<span id="discordreleasenotes"></span> 및 <span id="githubreleasenotes"></span>에서 전체 릴리스 노트 확인 가능`
        ],
        update: "업데이트"
    },
    linkgame: {
        content: {
            exepath: "실행 파일 경로",
            managesub: [
                `게임 창을 닫은 후에도 Steam에서 게임이 <i>플레이 중</i>으로 표시된다면 <span class="hl">자동 릴리스 게임</span>에 새 항목을 추가해 보세요`,
                `특정 게임의 <span class="hl">AppID</span>와 예상되는 <span class="hl">게임 실행 파일</span>을 추가하거나 기존 항목을 <span class="hl">제거</span>할 수 있습니다`,
                `게임이 감지되면 <span class="hl">시스템 트레이 아이콘</span>을 <i>마우스 오른쪽 버튼</i>으로 클릭 > <span class="hl">자동 릴리스 게임</span>을 통해 새 항목을 추가할 수도 있습니다`,
                `<span class="hl help" id="appidhelp"><u>Steam 게임의 AppID는 어떻게 찾나요?</u></span>`
            ],
            linknew: "새 항목",
            linknewsub: [
                `새 게임의 <span class="hl">AppID</span>와 예상되는 <span class="hl">게임 실행 파일</span>을 추가합니다`,
                `추가된 후에는 이전 <span class="hl">자동 릴리스 게임</span> 메뉴를 통해 항목을 <span class="hl">제거</span>할 수 있습니다`
            ],
            linkedit: "항목 편집",
            linkeditsub: [
                `기존 게임의 <span class="hl">AppID</span>와 예상되는 <span class="hl">게임 실행 파일</span>을 편집합니다`,
                `추가된 후에는 이전 <span class="hl">자동 릴리스 게임</span> 메뉴를 통해 항목을 <span class="hl">제거</span>할 수 있습니다`
            ],
            link: "추가"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `어떤 Steam 게임의 <span class="hl">AppID</span>를 <span class="hl">제외 목록</span>에 추가합니다`,
                `Steam Achievement Notifier는 <span class="hl">제외 목록</span>에 추가된 어떤 게임의 <span class="hl">AppID</span>에 대한 업적 데이터를 추적하지 않습니다`,
                `<span class="hl" id="appidhelp"><u>Steam 게임의 AppID를 찾는 방법</u></span>`
            ],
            exclusionnew: "새로운 제외",
            exclusionnewsub: [
                `<span class="hl">제외 목록</span>에 추가할 <span class="hl">AppID</span>를 입력하세요`
            ],
            exclusionedit: "제외 편집",
            exclusioneditsub: [
                `<span class="hl">제외 목록</span>에 있는 기존 <span class="hl">AppID</span>를 편집합니다`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `아무 Steam 게임의 <span class="hl">AppID</span>를 <span class="hl">포함 목록</span>에 추가합니다`,
                `Steam Achievement Notifier는 <span class="hl">AppID</span>가 <span class="hl">포함 목록</span>에 추가된 게임의 업적 데이터만 추적합니다`,
                `<span class="hl help" id="appidhelp"><u>Steam 게임의 AppID는 어떻게 찾나요?</u></span>`
            ],
            inclusionnew: "새 포함 항목",
            inclusionnewsub: [
                `<span class="hl">AppID</span>를 입력하여 <span class="hl">포함 목록</span>에 추가합니다`
            ],
            inclusionedit: "포함 항목 편집",
            inclusioneditsub: [
                `<span class="hl">포함 목록</span>에 있는 기존 <span class="hl">AppID</span>를 편집합니다`
            ]
        }
    },
    notificationelems: {
        title: "알림 요소",
        content: {
            unlockmsg: "잠금 해제 메시지",
            title: "업적 제목",
            desc: "업적 설명",
            hiddeniconpos: "숨겨진 아이콘",
            sshiddeniconpos: "숨겨진 아이콘",
            decorationpos: "장식",
            ssdecorationpos: "장식",
            percentpos: "희귀도 백분율",
            sspercentpos: "희귀도 백분율",
            percentbadge: "퍼센트 배지",
            sspercentbadge: "퍼센트 배지",
            percentbadgepos: "배지 위치",
            sspercentbadgepos: "배지 위치",
            percentbadgecolor: "배지 색상",
            sspercentbadgecolor: "배지 색상",
            percentbadgefontcolor: "배지 글꼴 색상",
            sspercentbadgefontcolor: "배지 글꼴 색상",
            percentbadgefontsize: "배지 크기",
            sspercentbadgefontsize: "배지 크기",
            percentbadgeroundness: "배지 둥글기",
            sspercentbadgeroundness: "배지 둥글기",
            percentbadgex: "수평 오프셋",
            sspercentbadgex: "수평 오프셋",
            percentbadgey: "수직 오프셋",
            sspercentbadgey: "수직 오프셋",
            percentbadgeimg: "아이콘 사용",
            sspercentbadgeimg: "아이콘 사용",
            percentbadgeimgbronze: "희귀도: > $semirarity",
            sspercentbadgeimgbronze: "희귀도: > $semirarity",
            percentbadgeimgsilver: "희귀도: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "희귀도: < $semirarity & > $rarity",
            percentbadgeimggold: "희귀도: < $rarity",
            sspercentbadgeimggold: "희귀도: < $rarity",
            resetpbimgs: "배지 아이콘 재설정",
            elemsmatch: "커스터마이저 설정 일치",
            ssdisplay: "스크린샷 미리보기"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `任意 게임의 <span class="hl">AppID</span>를 추가하여 감지될 때 <span class="hl">테마</span>를 자동으로 전환`,
                `저장된 모든 <span class="hl">테마</span>를 각 알림 유형에 선택할 수 있으며, 사용할 모니터를 <span class="hl">스크린샷 소스</span>로 지정할 수 있습니다.`,
                `<span class="hl" id="appidhelp"><u>Steam 게임의 AppID는 어떻게 찾나요?</u></span>`
            ],
            themeswitchnew: "새 자동 전환",
            themeswitchnewsub: [
                `게임의 <span class="hl">AppID</span>와 사용할 모니터를 <span class="hl">스크린샷 소스</span>로 지정하세요.`,
                `이 게임의 <span class="hl">AppID</span>가 감지될 때 각 알림 유형에 전환할 <span class="hl">테마</span>를 선택하세요.`
            ],
            themeswitchedit: "자동 전환 편집",
            themeswitcheditsub: [
                `이 게임의 <span class="hl">AppID</span>에 대한 <span class="hl">스크린샷 소스</span>로 사용할 모니터를 편집합니다`,
                `이 게임의 <span class="hl">AppID</span>가 감지되었을 때 각 알림 유형에 대해 전환할 <span class="hl">테마</span>를 변경합니다`
            ],
            themes: "테마",
            src: "스크린샷 소스",
            themedeleted: "테마가 삭제되었습니다"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `<span class="hl">${opt}</span> 옵션을 활성화하려고 하는 것 같지만, 이 옵션은 <code class="dialogcode">${dep}</code> 패키지를 먼저 설치해야 활성화할 수 없습니다`,
    `이 의존성을 설치하려면 <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> 명령을 실행하세요`
]