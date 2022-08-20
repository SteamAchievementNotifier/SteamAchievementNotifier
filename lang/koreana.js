document.getElementById("username").innerHTML = "감지된 사용자 없음";
document.getElementById("gamestatus").innerHTML = "감지된 게임 없음";
document.getElementById("soundfile").innerHTML = "기본값(선택한 소리 없음)";
document.getElementById("soundfilerare").innerHTML = "기본값(선택한 소리 없음)";
document.getElementById("maincheevsound").innerHTML = "주요 업적 사운드";
document.getElementById("rarecheevsound").innerHTML = "희귀 성취음";
document.getElementById("test").innerHTML = "테스트 알림 표시";
document.getElementById("testrare").innerHTML = "희귀 테스트 알림 표시";
document.getElementById("settingstitle").innerHTML = "설정";
document.getElementById("configtitle").innerHTML = "구성";
document.getElementById("apibox").placeholder = "API 키 입력";
document.getElementById("steam64box").placeholder = "Steam64ID 입력";
document.getElementById("other").innerHTML = "다른";
document.getElementById("showscreenshotlbl").innerHTML = "Steam 스크린샷 찍기";
document.getElementById("showscreenshotlblrare").innerHTML = "Steam 스크린샷 찍기";
document.getElementById("previewlbl").innerHTML = "스크린샷 미리보기 표시"
document.getElementById("previewlblrare").innerHTML = "스크린샷 미리보기 표시"
document.getElementById("desktoplbl").innerHTML = "바탕 화면 바로 가기 만들기";
document.getElementById("startwinlbl").innerHTML = "Windows로 시작";
document.getElementById("startminlbl").innerHTML = "시스템 트레이에 최소화된 시작";
document.getElementById("soundonlylbl").innerHTML = "사운드 전용 모드";
document.getElementById("trackinglbl").innerHTML = '"지금 추적" 알림 표시';

nouser = "감지된 사용자 없음";
nogame = "감지된 게임 없음";
nosound = "기본값(선택한 소리 없음)";
nosoundrare = "기본값(선택한 소리 없음)";
rareheader = `'희귀 업적 잠금 해제!`;
unlinked = "연결되지 않음";
linked = "연결됨";
novalue = "값을 입력 해주세요";

resettitle = "애플리케이션을 기본값으로 재설정하시겠습니까?";
resetdesc = `경고: 이렇게 하면 모든 사용자 설정이 제거됩니다!`;
resetbtns = ["다시 놓다","제거","취소"];

traylabel = "감지된 게임 없음";
trayshow = "보이다";
trayexit = "퇴거하다";

//!!!1.8 Translations;
achievementunlocked = "잠금 해제 업적!";
rareachievementunlocked = "희귀 업적 잠금 해제!";
testdesc = "알림이 올바르게 작동하고 있습니다";

addsound = "선택한 사운드 추가";
invalid = '잘못된 파일 형식';
addimage = '선택한 이미지 추가';
file = "파일";
nofolder = "기본값(선택한 폴더 없음)";
novalidaudio = "유효한 오디오 파일이 없습니다.";
soundmode = "사운드 모드: ";
randomised = "무작위";
presskey = "...";
custompos = "사용자 정의 화면 위치 설정";
settingpos = "기본 위치 설정 중...";
settingposrare = "희귀 위치 설정 중...";

document.getElementById("steamkeybindlbl").innerHTML = "Steam 스크린샷 버튼:";
document.getElementById("langlbl").innerHTML = "언어:";
document.getElementById("raritylbl").innerHTML = "희귀도 백분율: ";
document.getElementById("nosteamlbl").innerHTML = "Steam 알림 숨기기";
document.getElementById("customiselbl").innerHTML = "커스터마이즈...";
document.getElementById("customisermainlbl").innerHTML = "기본";
document.getElementById("customiserrarelbl").innerHTML = "희귀 한";
document.getElementById("customiserstylelbl").innerHTML = "알림 스타일:";
document.getElementById("notifypositionlbl").innerHTML = "화면 위치:";
document.getElementById("bgtypelbl").innerHTML = "배경 유형:";
document.getElementById("colourslbl").innerHTML = "그림 물감";
document.getElementById("colour1lbl").innerHTML = "색상 1";
document.getElementById("colour2lbl").innerHTML = "색상 2";
document.getElementById("textcolourlbl").innerHTML = "텍스트 색상";
document.getElementById("imgselectlbl").innerHTML = "배경 이미지:"
document.getElementById("roundnesslbl").innerHTML = "진원도:";
document.getElementById("iconroundnesslbl").innerHTML = "아이콘 원형:";
document.getElementById("displaytimelbl").innerHTML = "표시 시간:";
document.getElementById("scalelbl").innerHTML = "규모:";
document.getElementById("styledefault").innerHTML = "기본";
document.getElementById("typesolid").innerHTML = "단색";
document.getElementById("typegradient").innerHTML = "색상 그라데이션";
document.getElementById("typeimg").innerHTML = "배경 이미지";
document.getElementById("dragposlbl").innerHTML = "사용자 정의 화면 위치 사용";
document.getElementById("iconselectlbl").innerHTML = "사용자 정의 아이콘:";
document.getElementById("fontsizelbl").innerHTML = "글꼴 크기:";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "위치 재설정";
document.getElementById("gameiconlbl").innerHTML = "게임 아이콘 사용";
document.getElementById("typegame").innerHTML = "게임 아트"
document.getElementById("brightnesslbl").innerHTML = "명도"

document.getElementById("customiserstylelblrare").innerHTML = "알림 스타일:";
document.getElementById("notifypositionlblrare").innerHTML = "화면 위치:";
document.getElementById("bgtypelblrare").innerHTML = "배경 유형:";
document.getElementById("rarecolourslbl").innerHTML = "그림 물감";
document.getElementById("colour1lblrare").innerHTML = "색상 1";
document.getElementById("colour2lblrare").innerHTML = "색상 2";
document.getElementById("textcolourlblrare").innerHTML = "텍스트 색상";
document.getElementById("rareimgselectlbl").innerHTML = "배경 이미지:"
document.getElementById("roundnesslblrare").innerHTML = "진원도:";
document.getElementById("iconroundnesslblrare").innerHTML = "아이콘 원형:";
document.getElementById("displaytimelblrare").innerHTML = "표시 시간:";
document.getElementById("scalelblrare").innerHTML = "규모:";
document.getElementById("styledefaultrare").innerHTML = "기본";
document.getElementById("typesolidrare").innerHTML = "단색";
document.getElementById("typegradientrare").innerHTML = "색상 그라데이션";
document.getElementById("typeimgrare").innerHTML = "배경 이미지";
document.getElementById("dragposlblrare").innerHTML = "사용자 정의 화면 위치 사용";
document.getElementById("rareiconselectlbl").innerHTML = "사용자 정의 아이콘:";
document.getElementById("fontsizelblrare").innerHTML = "글꼴 크기:";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "위치 재설정";
document.getElementById("gameiconlblrare").innerHTML = "게임 아이콘 사용";
document.getElementById("typegamerare").innerHTML = "게임 아트"
document.getElementById("brightnesslblrare").innerHTML = "명도"

document.getElementById("trackopacitylbl").innerHTML = "불투명도 추적:";
document.getElementById("resetlbl").innerHTML = "애플리케이션 재설정";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">게임 세부정보</a>도 "공개"로 설정해야 합니다.';
document.getElementById("allpercentlbl").innerHTML = "모든 성취도 백분율 표시";
document.getElementById("iconanimationlbl").innerHTML = "희귀 아이콘 애니메이션 표시";
document.getElementById("hwalbl").innerHTML = "하드웨어 가속 비활성화";
document.getElementById("nvdalbl").innerHTML = "NVDA 지원 활성화";
document.getElementById("gamecompletionlbl").innerHTML = "게임 완료 알림 표시";
document.getElementById("ssoverlaylbl").innerHTML = "오버레이로 스크린샷 저장";
document.getElementById("ssoverlaypathlbl").innerHTML = "길:";
document.getElementById("opacitylbl").innerHTML = "알림 불투명도:";
document.getElementById("ssmaintestbtn").innerHTML = "기본 오버레이 미리보기";
document.getElementById("ssraretestbtn").innerHTML = "희귀 오버레이 미리보기";

secret = "비밀";
gamecomplete = "게임 완료!";
allunlocked = "모든 업적을 달성했습니다!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `<span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;베타 채널&nbsp;</span>에 가입하여 새로운 기능을 미리 사용해 보세요!`
document.getElementById("betatest").innerHTML = "공식 출시 전에 새로운 기능 테스트"
document.getElementById("betaoptin").innerHTML = "언제든지 베타 채널 옵트인/아웃"
document.getElementById("betabugs").innerHTML = "버그 수정 및 앱 개선"
document.getElementById("betadiscord").innerHTML = `&nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp;전용 Discord 채널`
document.getElementById("betafb").innerHTML = "향후 추가 사항에 대한 피드백 제공"
document.getElementById("betabugswarn").innerHTML = "<u>버그 가능성</u>&nbsp;(모두를 위해 아닙니다!)"
document.getElementById("betawarntext").innerHTML = "베타 채널에 참여하면 SteamAchievementNotifier가 다시 시작됩니다."
document.getElementById("betaok").innerHTML = "예, 좋은 것 같습니다!"
document.getElementById("betacancel").innerHTML = "아니 여기 남을게..."

document.getElementById("leavebetatitle").innerHTML = "베타 채널 나가기?"
document.getElementById("leavebetasub").innerHTML = "앱이 가장 최근의 공식 릴리스로 되돌아갑니다."
document.getElementById("leavebetaok").innerHTML = "베타 채널 나가기"
document.getElementById("leavebetacancel").innerHTML = "베타 채널 유지"

betajoin = "베타 채널 가입"
betaleave = "베타 채널 나가기"
betaerrortext = "베타 채널로 업데이트할 수 없습니다!"
betaerrorsub = "네트워크에 연결되어 있지 않은 것 같습니다. 인터넷 없음 = 베타 없음!"

// Fullscreen Notifications
document.getElementById("fullscreenlbl").innerHTML = "전체 화면 알림 활성화"
document.getElementById("extwinlbltxt").innerHTML = "창에 알림 복제 "
document.getElementById("fswarntitle").innerHTML = "시작하기 전에..."
document.getElementById("fswarncontentmain").innerHTML = `"전체 화면" 또는 "독점적인 전체 화면" 게임 내 표시 모드로 설정된 게임 위에 알림을 오버레이하려면 알림이 DirectX 게임 창에 표시될 게임 프로세스에 직접 주입되어야 합니다.<br><br>즉, 게임 코드가 기술적으로 타사 프로그램에 의해 변경되기 때문에 Anti-Cheat 기술을 사용하는 게임이 이 방법을 불리하게 볼 수 있습니다.<br><br>테스트하는 동안 문제가 표시된 게임은 없지만 Anti-Cheat 기술을 사용하는 게임(예: 온라인 경쟁 게임에서와 같이).`
document.getElementById("fswarnimportant").innerHTML = `"전체 화면 알림 활성화" 옵션을 활성화하고 사용함으로써 귀하는 Steam 게임에 제3자 콘텐츠를 삽입하는 것과 관련된 위험(예: Steam Achievement Notifier가 표시하는 방법 전체 화면 게임 내 표시 모드를 사용하도록 설정된 게임의 콘텐츠), 이 옵션을 활성화하면 귀하가 위험을 감수하는 데 동의하는 것으로 간주되므로 Steam Achievement Notifier(Jackson0ne) 개발자는 다음과 같은 책임을 지지 않습니다. 이 옵션의 사용.`
document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">아래 <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">동의하다</span> 버튼을 클릭하면 위의 이용약관에 동의하는 것입니다. "화면 알림 활성화" 옵션이 활성화됩니다.</div><div style="padding: 0px 10px 10px;">아래의 <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">동의하지 않는다</span> 버튼을 클릭하면 이 메시지가 닫히고 "전체 화면 알림 활성화" 옵션이 활성화되지 <u>않습니다</u>.</div>`
document.getElementById("fshidemsglbl").innerHTML = "동의합니다. 이 메시지를 다시 표시하지 않습니다."
document.getElementById("fsok").innerHTML = "동의하다"
document.getElementById("fscancel").innerHTML = "동의하지 않는다"
document.getElementById("fsselectlbl").innerHTML = "수동으로 게임 창 선택"

// Privacy Policy
document.getElementById("pp").innerHTML = "개인정보 보호정책 보기"
document.getElementById("pptitle").innerHTML = "개인 정보 정책"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">STEAM WEB API 데이터 사용</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier는 <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> 를 사용하여 사용자가 애플리케이션에 제공한 Steam API 키/Steam64 ID 조합을 사용하여 사용자의 Steam 계정과 관련된 데이터를 검색하고 표시합니다. 이 데이터에는 다음이 포함됩니다:<br><br>
        <div class="ppbodyembed">
            • 잠긴 업적과 잠금 해제된 업적에 대한 통계<br>
            • Steam 사용자 이름<br>
            • 플레이한 Steam 게임<br>
        </div>
        <br>
        <i>Steam Achievement Notifier는 향후 추가 애플리케이션 기능 및 업데이트를 제공하기 위해 추가 Steam Web API 데이터를 사용할 수 있습니다.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM API 키/STEAM64ID 사용</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier는 사용자가 Steam Web API에 대한 인증된 액세스를 위해 STEAM API 키/Steam64 ID 조합을 입력하도록 요구합니다. 이 정보가 없으면 업적 데이터(Steam Web API에 대한 액세스를 제공)를 포함하여 사용자의 Steam 계정과 관련된 데이터를 검색하는 데 사용되는 웹 링크에 액세스할 수 없습니다.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM WEB API 데이터 스토리지</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier는 애플리케이션 내에서만 사용할 수 있도록 Steam Web API 데이터를 사용자의 PC에 로컬로 임시로 저장합니다. 이 데이터의 모든 임시 저장은 Steam Achievement Notifier에서만 사용하기 위한 것이며, 정상적인 상황에서 모든 비영구 Steam Web API 데이터는 애플리케이션 종료 시 로컬 저장소에서 지워집니다.<br><br>
        사용자의 장치에 저장되는 영구 데이터에는 사용자의 Steam Web API 키 및 Steam64 ID와 같이 사용자 편의를 위해 애플리케이션에서 저장하는 데이터만 포함됩니다.<br><br>
        이 데이터는 필요한 경우 사용자가 언제든지 수동으로 삭제할 수도 있습니다. Steam Achievement Notifier로 생성된 파일은 다음 디렉터리에 있습니다:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: 현재 지원되지 않음
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">데이터 수집에 대한 입장</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier는 사용자의 로컬 파일 시스템 외부로 사용자 데이터를 보내거나 저장하지 <u>않습니다</u>. 여기에는 Steam Web API에 액세스하기 위해 애플리케이션에 제공된 Steam API 키/Steam64 ID 조합을 포함하여 애플리케이션 내에서 사용하기 위해 Steam Web API를 통해 검색된 모든 정보가 포함됩니다. Steam Achievement Notifier(Jackson0ne)의 개발자는 사용자가 애플리케이션에 제공한 정보를 외부에서 액세스, 조회, 수집 또는 전송하는 수단을 의도적으로 포함하지 않았습니다.<br><br>
        Steam Web API의 데이터 액세스 요청은 웹 브라우저에서 제공하는 기능과 유사한 내장 메서드를 사용하여 애플리케이션 자체에서 이루어집니다. 이러한 요청에는 Steam Web API에서 요구하는 사용자의 Steam API 키/Steam64 ID 조합이 포함되어 있지만 다른 애플리케이션에서 사용하거나 가로챌 수 없습니다.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">사용자 책임</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        <span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">공식 GITHUB REPOSITORY</span>를 통해 SteamAchievementNotifier의 공식 출시 버전을 다운로드하고 사용함으로써 귀하는 더 나아가 <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API 사용 약관</span> 의 섹션 7 및 8을 준수하게 됩니다.
    </div>
`