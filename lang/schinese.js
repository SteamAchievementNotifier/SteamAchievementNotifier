document.getElementById("username").innerHTML = "未检测到用户";
document.getElementById("gamestatus").innerHTML = "未检测到游戏";
document.getElementById("soundfile").innerHTML = "默认（未选择声音）";
document.getElementById("soundfilerare").innerHTML = "默认（未选择声音）";
document.getElementById("maincheevsound").innerHTML = "主要成就音效";
document.getElementById("rarecheevsound").innerHTML = "稀有成就音效";
document.getElementById("test").innerHTML = "显示测试通知";
document.getElementById("testrare").innerHTML = "显示稀有测试通知";
document.getElementById("settingstitle").innerHTML = "设置";
document.getElementById("configtitle").innerHTML = "配置";
document.getElementById("apibox").placeholder = "输入 API 密钥";
document.getElementById("steam64box").placeholder = "输入 Steam64ID";
document.getElementById("other").innerHTML = "其他";
document.getElementById("showscreenshotlbl").innerHTML = "捕获 Steam 屏幕截图";
document.getElementById("showscreenshotlblrare").innerHTML = "捕获 Steam 屏幕截图";
document.getElementById("previewlbl").innerHTML = "显示截图预览"
document.getElementById("previewlblrare").innerHTML = "显示截图预览"
document.getElementById("desktoplbl").innerHTML = "创建桌面快捷方式";
document.getElementById("startwinlbl").innerHTML = "从 Windows 开始";
document.getElementById("startminlbl").innerHTML = "开始最小化到系统托盘";
document.getElementById("soundonlylbl").innerHTML = "纯声音模式";
document.getElementById("trackinglbl").innerHTML = '显示“正在跟踪”通知';

nouser = "未检测到用户";
nogame = "未检测到游戏";
nosound = "默认（未选择声音）";
nosoundrare = "默认（未选择声音）";
rareheader = `'罕见成就解锁！`;
unlinked = "未链接";
linked = "已链接";
novalue = "请输入一个值";

resettitle = "将应用重置为默认值？";
resetdesc = `警告：这将删除所有用户设置！`;
resetbtns = ["重启","卸载","取消"];

traylabel = "未检测到游戏";
trayshow = "打开";
trayexit = "出口";

//!!!1.8 Translations;
achievementunlocked = "成就解锁！";
rareachievementunlocked = "稀有成就解锁！";
testdesc = "您的通知工作正常。";

addsound = "添加选定的声音";
invalid = '文件类型无效';
addimage = '添加所选图像';
file = "文件";
nofolder = "默认（未选择文件夹）";
novalidaudio = "没有有效的音频文件位于";
soundmode = "声音模式：";
randomised = "随机";
presskey = "...";
custompos = "设置自定义屏幕位置";
settingpos = "设置主要位置...";
settingposrare = "设置稀有位置...";

document.getElementById("steamkeybindlbl").innerHTML = "Steam截图按钮：";
document.getElementById("langlbl").innerHTML = "语：";
document.getElementById("raritylbl").innerHTML = "稀有度：";
document.getElementById("nosteamlbl").innerHTML = "隐藏 Steam 成就通知";
document.getElementById("customiselbl").innerHTML = "个性化...";
document.getElementById("customisermainlbl").innerHTML = "主要的";
document.getElementById("customiserrarelbl").innerHTML = "稀有的";
document.getElementById("customiserstylelbl").innerHTML = "成就风格：";
document.getElementById("notifypositionlbl").innerHTML = "屏幕位置：";
document.getElementById("bgtypelbl").innerHTML = "背景类型：";
document.getElementById("colourslbl").innerHTML = "颜色";
document.getElementById("colour1lbl").innerHTML = "颜色 1";
document.getElementById("colour2lbl").innerHTML = "颜色 2";
document.getElementById("textcolourlbl").innerHTML = "文字颜色";
document.getElementById("imgselectlbl").innerHTML = "背景图："
document.getElementById("roundnesslbl").innerHTML = "圆度：";
document.getElementById("iconroundnesslbl").innerHTML = "图标圆度：";
document.getElementById("displaytimelbl").innerHTML = "展示时间：";
document.getElementById("scalelbl").innerHTML = "规模：";
document.getElementById("styledefault").innerHTML = "默认";
document.getElementById("typesolid").innerHTML = "纯色";
document.getElementById("typegradient").innerHTML = "颜色渐变";
document.getElementById("typeimg").innerHTML = "背景图";
document.getElementById("dragposlbl").innerHTML = "使用自定义屏幕位置";
document.getElementById("iconselectlbl").innerHTML = "自定义图标：";
document.getElementById("fontsizelbl").innerHTML = "字体大小：";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "重置位置";
document.getElementById("gameiconlbl").innerHTML = "使用游戏图标";
document.getElementById("typegame").innerHTML = "游戏美术"
document.getElementById("brightnesslbl").innerHTML = "亮度"

document.getElementById("customiserstylelblrare").innerHTML = "成就风格：";
document.getElementById("notifypositionlblrare").innerHTML = "屏幕位置：";
document.getElementById("bgtypelblrare").innerHTML = "背景类型：";
document.getElementById("rarecolourslbl").innerHTML = "颜色";
document.getElementById("colour1lblrare").innerHTML = "颜色 1";
document.getElementById("colour2lblrare").innerHTML = "颜色 2";
document.getElementById("textcolourlblrare").innerHTML = "文字颜色";
document.getElementById("rareimgselectlbl").innerHTML = "背景图："
document.getElementById("roundnesslblrare").innerHTML = "圆度：";
document.getElementById("iconroundnesslblrare").innerHTML = "图标圆度：";
document.getElementById("displaytimelblrare").innerHTML = "展示时间：";
document.getElementById("scalelblrare").innerHTML = "规模：";
document.getElementById("styledefaultrare").innerHTML = "默认";
document.getElementById("typesolidrare").innerHTML = "纯色";
document.getElementById("typegradientrare").innerHTML = "颜色渐变";
document.getElementById("typeimgrare").innerHTML = "背景图";
document.getElementById("dragposlblrare").innerHTML = "使用自定义屏幕位置";
document.getElementById("rareiconselectlbl").innerHTML = "自定义图标：";
document.getElementById("fontsizelblrare").innerHTML = "字体大小：";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "重置位置";
document.getElementById("gameiconlblrare").innerHTML = "使用游戏图标";
document.getElementById("typegamerare").innerHTML = "游戏美术"
document.getElementById("brightnesslblrare").innerHTML = "亮度"

document.getElementById("trackopacitylbl").innerHTML = "跟踪不透明度：";
document.getElementById("resetlbl").innerHTML = "将应用重置为默认值";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">游戏详情</a> 也必须设置为“公开”。';
document.getElementById("allpercentlbl").innerHTML = "显示所有成就百分比";
document.getElementById("iconanimationlbl").innerHTML = "显示稀有图标动画";
document.getElementById("hwalbl").innerHTML = "禁用硬件加速";
document.getElementById("nvdalbl").innerHTML = "启用 NVDA 支持";
document.getElementById("gamecompletionlbl").innerHTML = "显示游戏完成通知";
document.getElementById("ssoverlaylbl").innerHTML = "使用叠加保存屏幕截图";
document.getElementById("ssoverlaypathlbl").innerHTML = "小路：";
document.getElementById("opacitylbl").innerHTML = "通知不透明度：";
document.getElementById("ssmaintestbtn").innerHTML = "预览主要叠加";
document.getElementById("ssraretestbtn").innerHTML = "预览稀有覆盖";

secret = "秘密";
gamecomplete = "游戏完成！";
allunlocked = "您已解锁所有成就！";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `加入 <span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;贝塔通道&nbsp;</span> 抢先体验新功能！`
document.getElementById("betatest").innerHTML = "正式发布前测试新功能"
document.getElementById("betaoptin").innerHTML = "随时选择加入/退出测试版频道"
document.getElementById("betabugs").innerHTML = "消除错误并改进应用程序"
document.getElementById("betadiscord").innerHTML = `专用的&nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp;Discord 频道`
document.getElementById("betafb").innerHTML = "提供有关即将添加的内容的反馈"
document.getElementById("betabugswarn").innerHTML = "<u>错误很可能</u>&nbsp;(并不适合所有人！)"
document.getElementById("betawarntext").innerHTML = "Steam Achievement Notifier 加入后会重启"
document.getElementById("betaok").innerHTML = "是的，听起来不错！"
document.getElementById("betacancel").innerHTML = "不，我会留在这里..."

document.getElementById("leavebetatitle").innerHTML = "离开测试频道？"
document.getElementById("leavebetasub").innerHTML = "应用程序将恢复到最新的官方版本"
document.getElementById("leavebetaok").innerHTML = "离开测试频道"
document.getElementById("leavebetacancel").innerHTML = "留在测试频道"

betajoin = "加入测试频道"
betaleave = "离开测试频道"
betaerrortext = "无法更新到测试频道！"
betaerrorsub = "看起来你没有网络连接。没有互联网 = 没有测试版！"

// Fullscreen Notifications
document.getElementById("fullscreenlbl").innerHTML = "启用全屏通知"
document.getElementById("extwinlbltxt").innerHTML = "将通知复制到窗口"
document.getElementById("fswarntitle").innerHTML = "在你开始之前..."
document.getElementById("fswarncontentmain").innerHTML = `为了在游戏内显示模式设置为“全屏”或“独占全屏”的游戏上覆盖通知，必须将通知直接注入游戏进程以在 DirectX 游戏窗口上显示。<br><br>这意味着，由于游戏的代码在技术上被第三方程序更改，使用反作弊技术的游戏可能会对这种方法不利。<br><br>虽然没有游戏在测试时出现任何问题，但一般建议<u>不要</u>在使用反作弊技术的游戏存在被检测到注入风险的情况下使用“启用全屏通知”选项（例如在在线竞技游戏中）。`
document.getElementById("fswarnimportant").innerHTML = `通过启用和使用“启用全屏通知”选项，您在此同意您已适当告知并了解将第三方内容注入 Steam 游戏的相关风险（例如 Steam Achievement Notifier 用于在游戏中显示内容的方法）设置为使用全屏游戏内显示模式），并且通过启用此选项，您接受您自行承担风险，因此，Steam Achievement Notifier (Jackson0ne) 的开发者对使用此选项不承担任何责任或义务.`
document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">点击下方的 <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">同意</span> 按钮，即表示您接受上述条款，并且“启用全屏通知”选项将被启用。</div><div style="padding: 0px 10px 10px;">点击下方的<span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px;border-radius: 2px;">不同意</span>按钮，此消息将关闭，并且“启用全屏通知”选项将<u>不</u>启用。</div>`
document.getElementById("fshidemsglbl").innerHTML = "我同意，不再显示此消息"
document.getElementById("fsok").innerHTML = "同意"
document.getElementById("fscancel").innerHTML = "不同意"
document.getElementById("fsselectlbl").innerHTML = "手动选择游戏窗口"

// Privacy Policy
document.getElementById("pp").innerHTML = "查看隐私政策"
document.getElementById("pptitle").innerHTML = "隐私政策"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">STEAM WEB API 数据使用</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier 使用 Valve 的 <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> 来检索和显示与用户 Steam 帐户数据相关的信息，通过用户提供给应用程序的 Steam API 密钥/Steam64 ID 组合。这些数据包括：<br><br>
        <div class="ppbodyembed">
            • 锁定和解锁成就的统计数据<br>
            • 您的 Steam 用户名<br>
            • 您玩过的 Steam 游戏<br>
        </div>
        <br>
        <i>Steam Achievement Notifier 将来可能会使用更多 Steam Web API 数据来提供额外的应用程序功能和更新。</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">Steam API 密钥/STEAM64 ID 使用情况</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier 要求用户输入他们的 Steam API 密钥/Steam64 ID 组合来验证 SteamWebAPI。如果没有此信息，将无法访问用于检索与用户 Steam 帐户相关的数据（包括成就数据）的 Web 链接（由 Valve 提供以访问 SteamWebAPI）.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM WEB API 数据存储</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier 将 Steam Web API 数据临时存储在用户计算机本地，仅供应用程序使用。此数据的任何临时存储仅由 Steam Achievement Notifier 使用，在正常情况下，所有非持久性 Steam Web API 数据将在应用程序退出时从本地存储中清除。<br><br>
        存储在用户设备上的持久性数据仅包括应用程序为方便用户而存储的数据，例如用户的 Steam Web API 密钥和 Steam64 ID。<br><br>
        如果需要，用户也可以随时手动删除这些数据。 Steam Achievement Notifier 创建的文件位于以下目录中：<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: 目前不支持
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">数据收集的立场</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier <u>从不</u>在用户本地文件系统之外发送或存储用户数据。这包括通过 Steam Web API 检索并在应用程序中使用的任何信息，包括提供给应用程序以访问 Steam Web API 的 Steam API 密钥/Steam64 ID 组合。 Steam Achievement Notifier (Jackson0ne) 的开发者故意不包含任何外部手段来访问、查看、收集或发送用户提供的信息给应用程序。<br><br>
        从 Steam Web API 访问数据的请求是由应用程序本身使用内置方法发出的，类似于浏览器提供的方法。这些请求包含 Steam Web API 所需的用户 Steam API 密钥/Steam64 ID 组合，但不会被任何其他应用程序使用或拦截。<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">用户责任</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        通过<span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">官方 GITHUB 存储库</span> 下载和使用任何正式发布的 STEAM ACHIEVEMENT NOTIFIER 版本，作为扩展的用户，您遵守 <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API 使用条款</span> 的第 7 和 8 节.
    </div>
`