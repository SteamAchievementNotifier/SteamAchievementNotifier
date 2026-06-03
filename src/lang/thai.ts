export const translations = {
    global: {
        main: "หลัก",
        semi: "กึ่ง",
        rare: "หายาก",
        plat: "100%",
        trophymain: "บรอนซ์",
        trophysemi: "เงิน",
        trophyrare: "ทอง",
        trophyplat: "แพลตินัม",
        test: "การแจ้งเตือนทดสอบ",
        topleft: "มุมบนซ้าย",
        topcenter: "กลางบน",
        topright: "มุมบนขวา",
        bottomleft: "มุมล่างซ้าย",
        bottomcenter: "กลางล่าง",
        bottomright: "มุมล่างขวา",
        ok: "ตกลง",
        preview: "ตัวอย่าง",
        save: "บันทึก",
        back: "กลับ",
        edit: "แก้ไข",
        lockedby: "ถูกล็อกโดย $lock",
        settings: "การตั้งค่า",
        appversion: "เวอร์ชันแอปพลิเคชัน",
        image: "ภาพ",
        audio: "เสียง",
        folder: "โฟลเดอร์",
        font: "ฟอนต์",
        select: "เลือก",
        gametitle: "ชื่อเกม",
        congrats: "ขอแสดงความยินดี!",
        achievementunlocked: "ประสบความสำเร็จ",
        gamecomplete: "เกมสมบูรณ์ 100%",
        achievementdesc: "คลิกที่ปุ่มเพื่อแสดงการแจ้งเตือนทดสอบ",
        gamecompletedesc: "คุณปลดล็อคผลงานทั้งหมดแล้ว!",
        defaultcustomfont: "ค่าเริ่มต้น (ไม่ได้เลือกฟอนต์)",
        defaultsoundfile: "ค่าเริ่มต้น (ไม่ได้เลือกไฟล์)",
        defaultsounddir: "ค่าเริ่มต้น (ไม่ได้เลือกโฟลเดอร์)",
        nowtracking: "กำลังติดตามความสำเร็จสำหรับ:",
        nopreview: "ไม่สามารถดูตัวอย่างสำหรับระบบปฏิบัติการธรรมดาได้",
        options: "ตัวเลือก",
        resetwindow: "รีเซ็ตหน้าต่าง",
        show: "แสดง",
        exit: "ออก",
        donotshowagain: "ไม่ต้องแสดงกล่องโต้ตอบนี้อีก",
        releasegame: "ปล่อยเกม",
        releasegamesub: [
            `รีสตาร์ทกระบวนการ Worker ที่ทำงานในพื้นหลังและปล่อยเกมปัจจุบันจากการถูกติดตาม`,
            `ลองใช้ตัวเลือกนี้ถ้าคุณเพิ่งปิดเกมแต่ Steam ยังแสดงว่ามันกำลังทำงาน, หรือถ้า Steam Achievement Notifier ยังแสดงว่ากำลังติดตามเกมที่ถูกปิดไปแล้ว`
        ],
        noupdateavailable: "ไม่มีการอัปเดตที่ใช้ได้",
        latestversion: "ติดตั้งเวอร์ชันล่าสุดแล้ว",
        missingdeps: "ความขาดแคลนของขึ้นอยู่กับ",
        restartapp: "เริ่มใหม่แอปพลิเคชัน",
        restartappsub: [
            `หากสิ่งต่าง ๆ ไม่ทำงานอย่างถูกต้อง ให้ใช้ตัวเลือกนี้เพื่อปิดและเปิดแอปพลิเคชันอีกครั้ง`,
            `หากปัญหายังคงอยู่หลังจากเริ่มใหม่แอปพลิเคชัน โปรดพิจารณาที่จะรายงานโดยใช้ลิงก์ภายในบนหน้าจอหลัก`
        ],
        suspend: "พัก",
        resume: "ดำเนินการต่อ",
        new: "ใหม่...",
        nodata: "ไม่มีข้อมูล",
        findappid: "ค้นหา AppID",
        findappidsub: [
            `ทุกเกมของ Steam มีหมายเลขที่ไม่ซ้ำกันที่เกี่ยวข้อง - เรียกว่า <span class="hl">AppID</span> คุณสามารถค้นหา AppID ที่เกี่ยวข้องกับเกม Steam ใด ๆ ได้โดยตรวจสอบหนึ่งในวิธีต่อไปนี้:`,
            `ใน <span class="hl">ไคลเอนต์ Steam</span> คลิกขวาที่เกมใน <span class="hl">คลัง</span> ของคุณและเลือก <i>คุณสมบัติ</i> > <i>อัพเดท</i> - AppID จะถูกแสดงที่นี่`,
            `ที่ <span class="hl">URL</span> ของ <span class="hl">หน้าร้านของเกม</span> - จะเป็นตัวเลขที่ระบุหลังจาก <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `เว็บไซต์เช่น <span class="hl">SteamDB</span> - ส่วนข้อมูลเกี่ยวกับ <span class="hl">App</span> จะระบุ AppID สำหรับแต่ละเกม`
        ],
        noexe: "ไม่พบไฟล์ EXE ของเกม!",
        noexesub: "คลิกที่นี่เพื่อข้อมูลเพิ่มเติม",
        noexedialogsub: [
            `Steam Achievement Notifier ไม่สามารถค้นหาไฟล์ปฏิบัติการของเกมนี้โดยอัตโนมัติได้ จำเป็นต้องระบุตำแหน่งของไฟล์ปฏิบัติการของเกมเพื่อให้สามารถ "ปล่อย" เกมได้หลังจากปิดเกมแล้ว`,
            `หากต้องการปล่อยเกมด้วยตนเองหลังจากปิดเกมแล้ว ให้ <i>คลิกขวา</i> ที่ <span class="hl">ไอคอน System Tray</span> > <span class="hl">ตัวเลือก</span> > <span class="hl">ปล่อยเกม</span> หรือใช้ <span class="hl">ทางลัดการปล่อยเกม</span>`,
            `หรืออีกทางหนึ่ง ให้คลิกปุ่ม <span class="hl">เพิ่ม</span> ด้านล่างเพื่อเพิ่มไฟล์ปฏิบัติการที่เชื่อมโยงกับหน้าต่างที่กำลังโฟกัสไปยัง <span class="hl">การตั้งค่า</span> > <span class="hl">เกม</span> > <span class="hl">เกมปล่อยอัตโนมัติ</span>`,
        ],
        autorelease: "ปล่อยเกมอัตโนมัติ",
        autoreleasesub: [
            `หาก Steam ยังคงแสดงเกมว่า <i>กำลังเล่น</i> หลังจากที่หน้าต่างเกมถูกปิดแล้ว ให้ลองเพิ่มรายการใหม่ใน <span class="hl">เกมปล่อยอัตโนมัติ</span>`,
            `หากต้องการทำสิ่งนี้กับเกมปัจจุบัน ให้คลิกปุ่ม <span class="hl">เพิ่ม</span> ด้านล่างเพื่อเพิ่มไฟล์ปฏิบัติการที่เชื่อมโยงกับหน้าต่างที่กำลังโฟกัสไปยัง <span class="hl">การตั้งค่า</span> > <span class="hl">เกม</span> > <span class="hl">เกมปล่อยอัตโนมัติ</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>จะเกิดอะไรขึ้นเมื่อฉันคลิกปุ่ม เพิ่ม?</u></span>`,
        linkgamehelp: "เพิ่มรายการผ่านโฟกัส",
        linkgamehelpsub: [
            `การคลิกปุ่ม <span class="hl">เพิ่ม</span> จะเพิ่มรายการใหม่ไปยัง <span class="hl">การตั้งค่า</span> > <span class="hl">เกม</span> > <span class="hl">เกมปล่อยอัตโนมัติ</span> โดยอัตโนมัติ โดยใช้ข้อมูลจากหน้าต่างที่กำลังโฟกัสอยู่`,
            `หลังจากคลิกปุ่ม <span class="hl">เพิ่ม</span> จะเริ่มนับเวลาถอยหลัง 5 วินาที`,
            `ก่อนที่ตัวจับเวลาจะสิ้นสุด ให้โฟกัสไปที่หน้าต่างเกม`,
            `เมื่อการนับเวลาสิ้นสุด ระบบจะเพิ่มรายการใหม่สำหรับ <span class="hl">AppID</span> ปัจจุบันไปยัง <span class="hl">การตั้งค่า</span> > <span class="hl">เกม</span> > <span class="hl">เกมปล่อยอัตโนมัติ</span> โดยใช้ไฟล์ปฏิบัติการที่เชื่อมโยงกับหน้าต่างที่กำลังโฟกัสอยู่`,
            `ความพยายามใหม่จะเขียนทับรายการที่มีอยู่ หรือสามารถลบรายการได้ผ่าน <span class="hl">การตั้งค่า</span> > <span class="hl">เกม</span> > <span class="hl">เกมปล่อยอัตโนมัติ</span> โดยคลิกปุ่ม <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "ไม่สามารถเพิ่มหน้าต่างได้",
        addlinkfailedsub: `คลิกปุ่ม <span class="hl">เพิ่ม</span> เพื่อลองอีกครั้ง`,
        webhookunlockmsg: "$user ได้ปลดล็อกความสำเร็จ",
        webhookunlockmsgplat: "$user ปลดล็อกความสำเร็จทั้งหมด",
        webhookingame: "ใน $gamename",
        notconnected: "ไม่เชื่อมต่อ",
        raloghelp: "เกมของฉันไม่ถูกตรวจจับ",
        raenablelog: `ไฟล์บันทึกของอีมูเลเตอร์`,
        raenablelogsub: [
            `เพื่อเข้าถึงเหตุการณ์ภายในเกม (เช่น สถานะเกมปัจจุบัน ข้อมูลการปลดล็อกความสำเร็จ ฯลฯ) ต้องเปิดการบันทึกไปยัง <span class="hl">ไฟล์บันทึก</span> ภายนอก <u>ต้องเปิดใช้งาน</u> ในทุกอีมูเลเตอร์ที่เลือก<br><br>ทุกอีมูเลเตอร์ที่เลือก <u>ต้องใช้ <span class="hl">ไฟล์บันทึก</span> นี้</u> เป็นค่าของ <span class="hl">เส้นทางไฟล์บันทึก</span>`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > การตั้งค่า > การบันทึก</span> ต้องตั้งค่าด้วยการตั้งค่าต่อไปนี้:
                    <br>
                    <ul>
                        <li><span class="hllb">ความละเอียดของการบันทึก</span>: <span class="hlgreen">เปิดใช้งาน</span></li>
                        <li><span class="hllb">ระดับการบันทึกของหน้าต่าง</span>: <span class="hlgreen">1 (ข้อมูล)</span></li>
                        <li><span class="hllb">บันทึกไปยังไฟล์</span>: <span class="hlgreen">เปิดใช้งาน</span></li>
                        <li><span class="hllb">เพิ่มเวลาในไฟล์บันทึก</span>: <span class="hlred">ปิด</span></li>
                    </ul>
                    <br>
                    เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"retroarch.log"</span> จะถูกเก็บไว้ที่:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > มุมมอง > แสดงการตั้งค่าบันทึก</span> ต้องตั้งค่าด้วยการตั้งค่าต่อไปนี้:
                    <br>
                    <ul>
                        <li><span class="hllb">ความละเอียด</span>: <span class="hlgreen">ข้อมูล</span></li>
                        <li><span class="hllb">ผลลัพธ์ของบันทึก</span> > <span class="hlgreen">เขียนไปยังไฟล์</span></li>
                        <li><span class="hllb">ประเภทบันทึก</span> > <span class="hlgreen">ความสำเร็จ (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"dolphin.log"</span> จะถูกเก็บไว้ที่ตำแหน่งใดตำแหน่งหนึ่งดังนี้:
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
                    <span class="hl">PCSX2 > เครื่องมือ > เปิดใช้งานการบันทึกไฟล์</span> ต้องเปิดใช้งาน
                    <br>
                    <br>
                    ด้วยการตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"emulog.txt"</span> จะถูกเก็บไว้ที่:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> จะต้อง <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>ดาวน์โหลด</u></span> และย้ายไปยัง <span class="hl">ไดเรกทอรีการติดตั้งของ Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > การตั้งค่า > ความสำเร็จ > RAIntegration (สำหรับนักพัฒนาหรือผู้พัฒนาเท่านั้น)</span> ต้องเปิดใช้งาน
                    <br>
                    <br>
                    หากใช้การตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"RALog.txt"</span> จะถูกจัดเก็บไว้ที่:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> ต้องเปิดใช้งานและกำหนดค่าด้วยการตั้งค่าดังต่อไปนี้:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น <span class="hl">"log.txt"</span> จะถูกจัดเก็บไว้ที่:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "เบต้าไม่รองรับ",
        betaunsupportedsub: [
            "มีการปล่อยเวอร์ชันใหม่ของ Steam Achievement Notifier!",
            `<u>รุ่นเบต้านี้ไม่รองรับอีกต่อไป</u> กรุณาดาวน์โหลดและติดตั้งเวอร์ชันทางการล่าสุดจาก Github โดยใช้ปุ่ม <span class="hl">Releases</span> ด้านล่าง.`,
            "ขอบคุณที่ทดสอบ! 💜"
        ],
        betaghreleases: "การปล่อย",
        checkapplog: "กรุณาตรวจสอบบันทึกของแอปเพื่อดูรายละเอียด"
    },
    app: {
        content: {
            game: "ไม่พบเกม",
            customise: "ปรับแต่ง",
            test: "แสดงการแจ้งเตือนทดสอบ"
        }
    },
    settings: {
        language: {
            title: "ภาษา",
            content: {
                steamlang: "แปลความสำเร็จเป็นภาษา Steam",
                maxsteamlangretries: "จำนวนครั้งสูงสุดในการพยายามแปล"
            }
        },
        os: {
            title: "ระบบปฏิบัติการ",
            content: {
                desktop: "สร้างทางลัดบนเดสก์ท็อป",
                startwin: "เริ่มต้นเมื่อเข้าสู่ระบบ",
                startmin: "เริ่มต้นในโหมดย่อ",
                nohwa: "ปิดใช้งานการเร่งฮาร์ดแวร์",
                litemode: "โหมดไลท์"
            }
        },
        notifications: {
            title: "การแจ้งเตือน",
            content: {
                rarity: "เปอร์เซ็นต์ความหายาก",
                semirarity: "เปอร์เซ็นต์เงิน",
                rareonly: "เฉพาะหายาก",
                all: "ทั้งหมด",
                off: "ปิด",
                showpercent: "แสดงเปอร์เซ็นต์",
                soundonly: "เสียงเท่านั้น",
                nowtracking: "แสดงการแจ้งเตือนการติดตาม",
                nowtrackingscale: "มาตราส่วนการติดตาม",
                nowtrackingpos: "ตำแหน่งการติดตาม",
                shortcuts: "ทางลัดการแจ้งเตือน",
                noiconcache: "ปิดใช้งานแคชไอคอน",
                webhooks: "โพสต์ไปยังเซิร์ฟเวอร์ Discord",
                webhooktypes: "ประเภท Webhook",
                webhookurl: `Webhook URL`,
                webhookcaution: `เมื่อเปิดใช้งานตัวเลือกนี้และให้ลิงก์ Webhook Discord ที่ถูกต้อง คุณยอมรับว่าคุณเข้าใจว่า <u>ข้อมูลความสำเร็จและเกมทั้งหมดสำหรับผู้ใช้ Steam ปัจจุบัน</u> จะถูกโพสต์ไปยังเซิร์ฟเวอร์ Discord ที่ระบุผ่านลิงก์ Webhook ที่ให้ไว้<br><br>หากคุณไม่ต้องการให้ Steam Achievement Notifier โพสต์ข้อมูลนี้ในนามของคุณ โปรดปิดใช้งานตัวเลือกนี้.`,
                webhooklaststatus: "สถานะล่าสุด",
                webhookspoilers: `เพิ่มแท็กสปอยเลอร์`,
                webhookappid: `แสดง AppID`,
                replaynotify: "การแจ้งเตือนการเล่นซ้ำ",
                replaynotifyshortcut: "ทางลัดการเล่นซ้ำ",
                customtrigger: "ทริกเกอร์กำหนดเอง",
                customtriggershortcut: "ทางลัดทริกเกอร์",
                customtriggerdelay: "ดีเลย์ทริกเกอร์",
                customtriggerusedisplaytime: "ใช้เวลาการแสดงผล",
                trophymode: "โหมดถ้วยรางวัล",
                notifymax: "จำนวนการแจ้งเตือนสูงสุด", 
                notifyspace: "ระยะห่างระหว่างการแจ้งเตือน",
                notify1line: "จำกัดข้อความให้เหลือ 1 บรรทัด"
            }
        },
        games: {
            title: "เกม",
            content: {
                linkedgames: "เกมปล่อยอัตโนมัติ",
                themeswitch: "เปลี่ยนธีมอัตโนมัติ",
                exclusionlist: "รายการยกเว้น",
                inclusionlist: "รายชื่อที่รวมไว้",
                listmode: "โหมดรายการ",
                exclusion: "ไม่รวม",
                inclusion: "รวม"
            }
        },
        media: {
            title: "สื่อ",
            content: {
                steamss: "ถ่ายภาพหน้าจอ Steam",
                screenshots: "สื่อเพิ่มเติม",
                off: "ปิด",
                ssonly: "เฉพาะภาพหน้าจอ",
                overlay: "การถ่ายภาพหน้าจอพร้อมภาพนิ่ง",
                monitors: "แหล่งข้อมูลภาพหน้าจอ",
                hdrmode: "โหมด HDR",
                ovpos: "ตำแหน่งการฝังภาพ",
                ovmatch: "ตรงกับตำแหน่งที่กำหนดเอง",
                ovx: "การเคลื่อนที่แนวนอน",
                ovy: "การเคลื่อนที่แนวตั้ง",                
                ovpath: "เส้นทางการถ่ายภาพหน้าจอ",
                ssdelay: "ความล่าช้าในการถ่ายภาพหน้าจอ",
                notifyimg: "รูปภาพการแจ้งเตือน",
                imgpath: "เส้นทางรูปภาพ",
                ssenabled: "เปิดใช้งาน",
                ssmode: "โหมดจับภาพหน้าจอ",
                screen: "หน้าจอ",
                window: "หน้าต่าง",
                rauseemudir: "บันทึกไปยังโฟลเดอร์ย่อยของอีมูเลเตอร์",
                ssext: "รูปแบบภาพหน้าจอ",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "เพิ่มไปยัง Steam"
            }
        },
        streaming: {
            title: "สตรีมมิ่ง",
            content: {
                extwin: "การแจ้งเตือนการสตรีม",
                extwinframerate: "อัตราเฟรม",
                extwinshow: "แสดงหน้าต่าง",
                audiosrc: "แหล่งเสียง",
                notify: "แจ้ง",
                app: "แอปพลิเคชัน",
                off: "ปิดเสียง",
                statwin: "หน้าต่างสถิติความสำเร็จ",
                statwinaot: "อยู่เสมอที่ด้านบน",
                noachievements: "ไม่มีความสำเร็จที่จะแสดง",
                startgame: "เริ่มเกมเพื่อแสดงความสำเร็จ!",
                max: "สูงสุด",
                custom: "กำหนดเอง...",
                statwinshortcut: "ทางลัดโอเวอร์เลย์",
                gametimerwin: "ตัวจับเวลาการเล่นเกมจนจบ",
                gametimerwinshortcut: "ปุ่มลัดตัวจับเวลา",
                gametimerwinaot: "อยู่ด้านบนเสมอ",
                resetgametimer: "รีเซ็ตตัวจับเวลา",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>คุณแน่ใจหรือไม่?</span>
                        <span>การดำเนินการนี้จะรีเซ็ตตัวจับเวลาการเล่นเกมจนจบของเกมปัจจุบันกลับไปเป็น 00:00:00.000</span>
                        <span class="noundo">🛑 ไม่สามารถย้อนกลับได้!</span>
                    </div>
                `,
                resetgametimerfailed: "ไม่สามารถรีเซ็ตตัวจับเวลาได้",
                resetgametimercomplete: "AppID $appid เสร็จสมบูรณ์แล้ว",
                extwinnotify: "แสดงการแจ้งเตือนบนหน้าจอ"
            }
        },
        accessibility: {
            title: "การเข้าถึง",
            content: {
                noanim: "ปิดใช้งานการเคลื่อนไหวของหน้าต่างแอปพลิเคชัน",
                noupdatedialog: "ปิดการใช้งานกล่องโต้ตอบการอัปเดต",
                nvda: "เปิดใช้งานการสนับสนุน NVDA",
                tooltips: "แสดงเคล็ดลับเครื่องมือ",
                showsystrayopts: "แสดงตัวเลือกในถาดระบบ",
                releaseshortcut: "ทางลัดปล่อยเกม",
                noshortcuts: "ปิดใช้งานปุ่มลัดแป้นพิมพ์"
            }
        },
        advanced: {
            title: "ขั้นสูง",
            content: {
                pollrate: "อัตราการสำรวจ",
                initdelay: "ความล่าช้าในการติดตาม",
                releasedelay: "การเลื่อนการเผยแพร่",
                maxretries: "จำนวนการลองทำใหม่สูงสุด",
                debug: "แผงดีบัก",
                userust: "โหมดการประมวลผลทางเลือก",
                notifydebug: "แสดงการแจ้งเตือนในการดีบัก",
                exportachdata: "ส่งออกข้อมูลความสำเร็จ",
                lognum: "ไฟล์บันทึกก่อนหน้า", 
                audiocooldown: "เวลาหน่วงเสียง",
                usecustomfiles: "ใช้ไฟล์แอปพลิเคชันที่กำหนดเอง",
                showcustomfiles: "แสดงไฟล์แอปพลิเคชันที่กำหนดเอง",
                appdatadir: "แสดงโฟลเดอร์ AppData",
                backup: "สำรองข้อมูล",
                backuppath: "เส้นทางสำรองข้อมูล",
                backupsub: [
                    "สำรองเนื้อหาในโฟลเดอร์ AppData ของแอปไปยังตำแหน่งที่เลือก",
                    "การสำรองข้อมูลนี้จะทำหน้าที่เป็นจุดกู้คืนสำหรับสถานะปัจจุบันของแอป",
                    `กู้คืนการสำรองข้อมูลก่อนหน้าผ่าน <span class="hl">การตั้งค่า</span> > <span class="hl">ขั้นสูง</span> > <span class="hl">กู้คืน</span>`
                ],
                backupfailed: "ไม่สามารถสร้างการสำรองข้อมูลได้",
                restore: "กู้คืน",
                restoresub: [
                    "กู้คืนเนื้อหาในโฟลเดอร์ AppData ของแอปจากการสำรองข้อมูลก่อนหน้า",
                    `เลือกไฟล์สำรอง <span class="hl">.sanbak</span> เพื่อกู้คืน ไฟล์นี้จะถูกเก็บไว้หลังจากการกู้คืนเสร็จสิ้น`,
                    "❗ หลังจากยืนยัน แอปจะรีสตาร์ทเพื่อกู้คืนไฟล์สำรองที่เลือก"
                ],
                restorefailed: "ไม่สามารถกู้คืนการสำรองข้อมูลได้",
                usesanwatcher: "SANWatcher",
                releasewaittime: "เวลารอก่อนปล่อยเกม"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "อีมูเลเตอร์",
                rauser: "ชื่อผู้ใช้",
                rakey: "API Key",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "เส้นทางไฟล์ล็อก",
                rapercenttype: "ประเภทเปอร์เซ็นต์",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "กรอกเส้นทางไฟล์ล็อก",
                logfile: "ไฟล์บันทึก",
                status: "สถานะ",
                game: "เกม",
                lastachievement: "ID ความสำเร็จล่าสุด",
                wait: "รอสำหรับอีมูเลเตอร์",
                idle: "รอเหตุการณ์ในเกม",
                start: "เริ่มเกม",
                stop: "หยุดเกม",
                achievement: "ปลดล็อกความสำเร็จ"
            }
        },
        misc: {
            title: "เบ็ดเตล็ด",
            content: {
                colorprofile: "โปรไฟล์สี",
                checkforupdates: "ตรวจสอบการอัปเดต",
                log: "บันทึกแอปพลิเคชัน",
                reset: "รีเซ็ตแอปพลิเคชัน"
            }
        }
    },
    customiser: {
        preset: {
            title: "การตั้งค่าพรีเซ็ต",
            content: {
                preset: "พรีเซ็ตการแจ้งเตือน",
                iconanim: "การเคลื่อนไหวไอคอนหายาก",
                alldetails: "แสดงรายละเอียดทั้งหมด",
                usepercent: "ใช้เปอร์เซ็นต์",
                displaytime: "เวลาที่แสดง",
                scale: "ขนาด",
                customtext: "ข้อความที่กำหนดเอง",
                usegametitle: "ใช้ชื่อเกม",
                customfont: "แบบอักษรที่กำหนดเอง"
            }
        },
        sound: {
            title: "เสียง",
            content: {
                soundmode: "โหมดเสียง",
                file: "ไฟล์",
                folder: "สุ่ม",
                soundfile: "ไฟล์เสียง",
                sounddir: "โฟลเดอร์เสียง",
                volume: "ระดับเสียง"
            }
        },
        style: {
            title: "สไตล์",
            content: {
                bgstyle: "สไตล์พื้นหลัง",
                solid: "สีเดียว",
                gradient: "ไล่สี",
                img: "รูปภาพ",
                gameart: "ศิลปะเกม",
                gradientangle: "มุมไล่สี",
                bgimg: "รูปภาพพื้นหลัง",
                bgachicon: "ใช้ไอคอนความสำเร็จ",
                bgimgbrightness: "ความสว่าง",
                brightness: "ความสว่าง",
                blur: "เบลอ",
                roundness: "โค้ง",
                fontsize: "ขนาดตัวอักษร",
                usecustomfontsizes: "ใช้ขนาดฟอนต์ที่กำหนดเอง",
                unlockmsgfontsize: "ข้อความปลดล็อค",
                titlefontsize: "ชื่อเรื่อง",
                descfontsize: "คำอธิบาย",
                textvspace: "ระยะห่างของข้อความ",
                opacity: "ความโปร่งใส",
                bgonly: "เฉพาะพื้นหลัง",
                glow: "เรืองแสง",
                glowcolor: "สี",
                glowsize: "ขนาด",
                glowx: "การเคลื่อนที่แนวนอน",
                glowy: "การเคลื่อนที่แนวตั้ง",
                glowopacity: "ความทึบ",
                glowanim: "อนิเมชัน",
                glowspeed: "ความเร็ว",
                glowrarity: "ใช้ความหายาก",
                glowcolorbronze: "ความหายาก: > $semirarity",
                glowcolorsilver: "ความหายาก: < $semirarity & > $rarity",
                glowcolorgold: "ความหายาก: < $rarity",
                off: "ปิด",
                pulse: "ชีพจร",
                double: "คู่",
                focus: "โฟกัส",
                orbit: "วงโคจร",
                fluorescent: "เรืองแสง",
                rainbow: "รุ้ง",
                mask: "หน้ากาก",
                maskimg: "ภาพหน้ากาก",
                useoutline: "ขอบเขต",
                outline: "ประเภทขอบเขต",
                outlinecolor: "สีขอบ",
                outlinewidth: "ความกว้างของขอบ",
                dashed: "เส้นประ",
                dotted: "เส้นจุด"
            }
        },
        colors: {
            title: "สี",
            content: {
                primarycolor: "สีหลัก",
                secondarycolor: "สีรอง",
                tertiarycolor: "สีระดับที่สาม",
                iconshadowcolor: "สีเงาของไอคอนหายาก",
                iconanimcolor: "สีแอนิเมชันของไอคอนหายาก",
                fontcolor: "สีตัวอักษร",
                usecustomfontcolors: "ใช้สีแบบกำหนดเองสำหรับแบบอักษร",
                unlockmsgfontcolor: "สี 1",
                titlefontcolor: "สี 2",
                descfontcolor: "สี 3",
                fontoutline: "เส้นขอบตัวอักษร",
                fontoutlinecolor: "สีขอบตัวอักษร",
                fontoutlinescale: "ขนาดขอบเขตของฟอนต์",
                fontshadow: "เงาตัวอักษร",
                fontshadowcolor: "สีเงาตัวอักษร",
                fontshadowscale: "ขนาดเงาของฟอนต์",
                fontshadowx: "การเลื่อนแนวนอน",
                fontshadowy: "การเลื่อนแนวตั้ง"
            }
        },
        icons: {
            title: "ไอคอน",
            content: {
                iconscale: "ขนาดไอคอน",
                iconroundness: "ความโค้งของไอคอน",
                showiconborder: "แสดงกรอบไอคอน",
                iconborderimg: "กรอบไอคอน",
                iconborderpos: "ตำแหน่งกรอบ",
                iconborderscale: "ขนาดกรอบ",
                iconborderx: "การเลื่อนแนวนอน",
                iconbordery: "การเลื่อนแนวตั้ง",
                iconborderrarity: "ใช้ความหายาก",
                iconborderimgbronze: "ความหายาก: > $semirarity",
                iconborderimgsilver: "ความหายาก: < $semirarity & > $rarity",
                front: "ด้านหน้า",
                back: "ด้านหลัง",
                plat: "โลโก้ 100%",
                usegameicon: "ใช้ไอคอนเกม",
                gameicontype: "ประเภทไอคอนเกม",
                usecustomimgicon: "ใช้ไอคอนที่กำหนดเอง",
                customimgicon: "ไอคอนที่กำหนดเอง",
                icon: "ไอคอน",
                logo: "โลโก้",
                logoscale: "ขนาดโลโก้",
                decoration: "ตกแต่ง",
                decorationscale: "ขนาดตกแต่ง",
                showdecoration: "แสดงการตกแต่ง",
                rarity: "ความหายาก",
                showhiddenicon: "แสดงไอคอนที่ซ่อนอยู่",
                hiddenicon: "ไอคอนที่ซ่อนอยู่",
                replacelogo: "แทนที่โลโก้"
            }
        },
        position: {
            title: "ตำแหน่ง",
            content: {
                pos: "ตำแหน่งบนหน้าจอ",
                usecustompos: "ใช้ตำแหน่งที่กำหนดเอง",
                setcustompos: "ตั้งค่า",
                copycustompos: "ใช้กับทั้งหมด",
                resetcustompos: "รีเซ็ต"
            }
        },
        theme: {
            title: "ธีม",
            content: {
                updatetheme: "อัปเดตธีม",
                savetheme: "บันทึกธีม",
                sub: [
                    `สามารถเลือก <span class="hl">ธีมของผู้ใช้</span> ที่บันทึกไว้จากเมนู <span class="hl">เลือกธีม</span> บนหน้าจอหลักได้`,
                    `โปรดตรวจสอบว่า <span class="hl">ชื่อธีม</span> เป็น <u>ไม่ซ้ำกัน</u> - ชื่อที่ตรงกับธีมที่มีอยู่ <u>จะเขียนทับข้อมูลเดิม</u>!`
                ],
                placeholder: "ชื่อธีม",
                theme: "ธีม",
                importtheme: "นำเข้าธีม",
                import: "นำเข้า",
                importsub: [
                    `นำเข้า <span class="hl">ไฟล์ธีมที่สร้างโดยผู้ใช้</span>`,
                    `ธีมที่<span class="hl">นำเข้า</span>จะถูกโหลดโดยอัตโนมัติหลังจากนำเข้าเรียบร้อยแล้ว และสามารถเลือกได้จากเมนู <span class="hl">เลือกธีม</span>`,
                ],
                importidle: `เลือก <span class="hl">ไฟล์ธีม</span> เพื่อนำเข้า`,
                importcopied: `คัดลอกธีมสำเร็จ`,
                importrenamed: `เปลี่ยนชื่อธีมสำเร็จ`,
                importextracted: `แยกธีมสำเร็จ`,
                importrewriting: `เขียนทับเส้นทางของไฟล์ธีม...`,
                importconverting: `แปลงธีม...`,
                importcreating: `สร้างธีม...`,
                importdone: `นำเข้าธีมสำเร็จ`,
                importfailed: `เกิดข้อผิดพลาดในการนำเข้าไฟล์ธีมที่เลือก!`,
                exporttheme: "ส่งออกธีม",
                export: "ส่งออก",
                exporterrortitle: "ข้อผิดพลาดในการส่งออก",
                exporterrorsub: [
                    "เกิดข้อผิดพลาดระหว่างการพยายามส่งออกธีมที่เลือก",
                    `โปรดลองบันทึกธีมปัจจุบัน (<i>ผ่าน <span class="hl">บันทึกธีม</span></i>) และลองส่งออกอีกครั้ง`,
                    `หากปัญหายังคงอยู่ โปรดคัดลอกข้อผิดพลาดด้านล่างและรายงานผ่านปุ่มลิงก์ที่อยู่ใน <span class="hl">หน้าหลัก</span>`
                ],
                synctheme: "ซิงค์ธีม",
                syncedwith: "ซิงค์กับ",
                themeselect: "ธีมที่เลือก",
                copytheme: "คัดลอกธีม",
                copythemesub: "เลือกประเภทการแจ้งเตือนที่จะคัดลอกธีมที่เลือกไปยัง"
            }
        }
    },
    logwin: {
        content: {
            tagline: "นี่คือสิ่งที่เกิดขึ้นตั้งแต่แอปเริ่มต้น",
            copylog: "คัดลอกเนื้อหาบันทึก"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>แน่ใจหรือไม่?</span>
                    <span>ข้อมูลที่กำหนดไว้ก่อนหน้านี้ <u>รวมถึงการปรับแต่งทั้งหมด</u> จะถูกตั้งค่าเป็นค่าเริ่มต้น</span>
                    <span>🛑 ไม่สามารถย้อนกลับได้!</span>
                </div>
            `,
            reset: "รีเซ็ต"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier พบปัญหาและต้องปิด",
            details: "นี่คือรายละเอียดข้อผิดพลาด:",
            sub: "คลิกที่ปุ่มด้านล่างเพื่อรายงานปัญหานี้ผ่านแพลตฟอร์มที่คุณชอบ",
            report: "รายงาน",
            log: "บันทึกแอป",
            exit: "ออก"
        }
    },    
    tooltips: {
        game: "เกมที่กำลังติดตามความสำเร็จอยู่ในขณะนี้",
        usertheme: "เลือกธีมที่บันทึกไว้ก่อนหน้านี้",
        customise: "ปรับแต่งการแจ้งเตือนความสำเร็จ",
        test: "แสดงการแจ้งเตือนทดสอบ รวมถึงการปรับแต่งที่กำหนดเอง",
        kofi: "บริจาคบน Ko-Fi!",
        discord: "เข้าร่วม Discord!",
        github: "รายงานปัญหา",
        lang: "เลือกภาษาของ UI ที่ใช้ในแอป",
        steamlang: `พยายามโหลดการแปลที่อยู่ในไฟล์แอปพลิเคชันของ Steam เพื่อแสดงข้อมูลความสำเร็จในภาษาที่ผู้ใช้เลือกในไคลเอนต์ Steam<br><br><span class="ttdesc">ตัวเลือกนี้พยายามค้นหาการแปลในไฟล์ JSON ที่เก็บอยู่ในข้อมูลแอปพลิเคชันของ Steam หากไม่สามารถค้นหาการแปลสำหรับความสำเร็จปัจจุบันได้ ข้อมูลความสำเร็จที่ดึงมาจาก Steamworks จะแสดงแทน</span>`,
        maxsteamlangretries: `จำนวนครั้ง (ทุก 100 มิลลิวินาที) ที่พยายามค้นหาการแปลที่ถูกต้องสำหรับความสำเร็จปัจจุบัน<br><br><span class="ttdesc">Steam ขณะนี้เก็บข้อมูลความสำเร็จเพียงเล็กน้อยในไฟล์ JSON ที่เชื่อมโยงกับแต่ละเกม ความสำเร็จที่ไม่อยู่ในไฟล์นี้จะถูกเพิ่มหลังจากความสำเร็จได้รับการปลดล็อก<br><br>เนื่องจากการเพิ่มข้อมูลใหม่อาจใช้เวลา การเพิ่มค่านี้จะเพิ่มโอกาสในการค้นหาข้อมูลการแปลสำหรับความสำเร็จปัจจุบัน แต่ยังอาจทำให้การแจ้งเตือนบนหน้าจอช้าลงตามระยะเวลาที่คำนวณโดยการตั้งค่านี้<br><br>หากไม่สามารถค้นหาข้อมูลการแปลที่ถูกต้องสำหรับความสำเร็จปัจจุบันได้ การแปลจะตกกลับไปยังภาษาที่ระบุใน Steamworks</span>`,
        desktop: "สลับการเปิด-ปิดทางลัดบนเดสก์ท็อปเพื่อเรียกใช้แอป",
        startwin: "เริ่ม Steam Achievement Notifier โดยอัตโนมัติหลังจากเข้าสู่ระบบ",
        startmin: "หลังจากเปิดแอป ซ่อนหน้าต่าง UI จนกว่าจะเปิดจาก System Tray",
        nohwa: `ปิดการใช้งานการเร่งฮาร์ดแวร์ซึ่งอาจเพิ่มประสิทธิภาพในระบบที่มีทรัพยากรจำกัดหรือระบบที่ไม่มี GPU ที่ได้รับการจัดสรร<br><br><span class="ttdesc">แอปพลิเคชันจะรีบูตหลังจากเปิดใช้งาน/ปิดใช้งานตัวเลือกนี้</span>`,
        litemode: "ปิดใช้งานองค์ประกอบ UI ทั้งหมด และให้ความสามารถของแอปเฉพาะผ่านไอคอน System Tray เท่านั้น อาจเพิ่มทรัพยากรที่ใช้โดยแอป",
        rarity: `เปอร์เซ็นต์ที่การแจ้งเตือนความสำเร็จที่หายากจะถูกเปิดใช้งาน<br><br>ความสำเร็จใด ๆ ที่มีเปอร์เซ็นต์ปลดล็อกเกินค่านี้จะแสดงเป็นการแจ้งเตือนหลัก<br><br><span class="ttdesc">ถ้าเปิดใช้งาน <span class="hl">โหมดถ้วยรางวัล</span> ความสำเร็จใด ๆ ที่มีเปอร์เซ็นต์ปลดล็อกเกินค่านี้จะแสดงเป็นการแจ้งเตือนเงินแทน</span>`,
        semirarity: `เปอร์เซ็นต์ที่จะแสดงองค์ประกอบการแจ้งเตือน "เงิน" (เช่น <span class="hl">ตราความหายาก</span>, <span class="hl">การตกแต่ง</span> เป็นต้น)<br><br>ความสำเร็จใด ๆ ที่มีเปอร์เซ็นต์ปลดล็อกต่ำกว่าหรือเท่ากับค่านี้ และสูงกว่าค่าของ <span class="hl">เปอร์เซ็นต์ความหายาก</span> จะแสดงองค์ประกอบการแจ้งเตือนที่ตั้งค่าสำหรับความหายาก "เงิน"<br><br>ความสำเร็จใด ๆ ที่มีเปอร์เซ็นต์ปลดล็อกเกินค่านี้จะแสดงองค์ประกอบการแจ้งเตือนที่ตั้งค่าสำหรับความหายาก "บรอนซ์"<br><br><span class="ttdesc">ถ้าเปิดใช้งาน <span class="hl">โหมดถ้วยรางวัล</span> ความสำเร็จใด ๆ ที่มีเปอร์เซ็นต์ปลดล็อกเกินค่านี้จะแสดงเป็นการแจ้งเตือนบรอนซ์แทน</span>`,
        showpercent: "แสดงเปอร์เซ็นต์การปลดล็อคของความสำเร็จในการแจ้งเตือนสำหรับประเภทที่เลือก",
        soundonly: "ปิดการแจ้งเตือน และเล่นเสียงที่ตั้งค่าไว้ผ่าน Customiser เท่านั้น",
        extwin: "สร้างหน้าต่างที่คัดลอกการแจ้งเตือนทั้งหมดที่กำลังแสดงอยู่บนหน้าจอ หน้าต่างนี้สามารถเพิ่มเป็นแหล่งจับภาพหน้าต่างเพื่อใช้ในซอฟต์แวร์สตรีมมิ่ง เช่น OBS",
        extwinframerate: "ตั้งค่าอัตราเฟรมเป้าหมายสำหรับการแจ้งเตือนสตรีม",
        extwinshow: `สลับการมองเห็นหน้าต่างการแจ้งเตือนของสตรีม<br><br><span class="ttdesc">เมื่อหน้าต่างมีโฟกัสในแถบงาน ให้กดค้างที่ปุ่ม <code class="ttcode">Ctrl</code> เพื่อแสดงตำแหน่งปัจจุบันของหน้าต่าง</span>`,
        audiosrc: "เลือกแหล่งที่มาของเสียง (หรือปิดใช้งาน) ที่สร้างขึ้นโดยแอป",
        nowtracking: "แสดงการแจ้งเตือนแจ้งให้ผู้ใช้ทราบว่ากำลังติดตามความสำเร็จสำหรับเกมที่กำลังเล่นอยู่",
        nowtrackingscale: `ตั้งค่าขนาดการแจ้งเตือนการติดตาม`,
        nowtrackingpos: `ตั้งค่าตำแหน่งการแจ้งเตือนการติดตาม`,
        shortcuts: "เรียกใช้การแจ้งเตือนทดสอบผ่านทางแป้นพิมพ์ลัด สามารถปรับแต่งที่แต่ละประเภทของการแจ้งเตือน",
        noiconcache: `ปิดใช้งานการเก็บแคชไอคอนของความสำเร็จขณะเริ่มเกม<br><br><span class="ttdesc">สามารถปรับปรุงประสิทธิภาพแอปเมื่อเริ่มเกมและแก้ไขปัญหาการติดตามเกมที่มีจำนวนความสำเร็จมาก อย่างไรก็ตามการปิดใช้งานแคชไอคอนอาจทำให้ขาดไอคอนความสำเร็จในการแจ้งเตือนได้ในกรณีที่หายาก</span>`,
        steamss: "ถ่ายรูปหน้าจอ Steam เมื่อปลดล็อคความสำเร็จ",
        screenshots: "เลือกประเภทของสื่อเพิ่มเติมที่จะสร้างเมื่อแสดงการแจ้งเตือน",
        monitors: "จอที่จะถูกบันทึกเมื่อถ่ายภาพหน้าจอ",
        hdrmode: `ถ่ายภาพหน้าจอโดยใช้วิธีที่เข้ากันได้กับหน้าจอที่ใช้เทคโนโลยี High Dynamic Range (HDR)`,
        ovpos: "ตำแหน่งของการแสดงผลบนภาพหน้าจอ",
        ovmatch: "จับคู่ตำแหน่งหน้าจอที่ตั้งค่าใน Customiser สำหรับประเภทการแจ้งเตือนนี้",
        ovpath: "ตำแหน่งที่จะบันทึกภาพหน้าจอที่สร้างขึ้นโดยตัวเลือกนี้",
        ssdelay: "เพิ่มความล่าช้าจากเวลาที่เกิดการแจ้งเตือนไปจนถึงเวลาที่ถ่ายภาพหน้าจอ",
        sspreview: "แสดงตัวอย่างว่าภาพหน้าจอจะปรากฏอย่างไรเมื่อบันทึก",
        noanim: "ปิดใช้งานเอฟเฟกต์การเคลื่อนไหวและการเปลี่ยนแปลงหน้าต่างภายในแอปทั้งหมด",
        noupdatedialog: `ป้องกันกล่องโต้ตอบ <span class="hl">มีการอัปเดตใหม่</span> จากการแสดงผลโดยอัตโนมัติและเน้นไปที่<br><br><span class="ttdesc">ยังสามารถเปิดกล่องโต้ตอบได้โดยการคลิกที่ปุ่มอัปเดตเมื่อมีอยู่</span>`,
        nvda: "เปิดใช้งานการคัดลอกข้อมูลความสำเร็จไปยังคลิปบอร์ดเมื่อปลดล็อคความสำเร็จ เพื่อให้สามารถอ่านได้โดยซอฟต์แวร์อ่านหน้าจอ เช่น NVDA",
        tooltips: "แสดงคำแนะนำเมื่อเลื่อนเมาส์ไปที่องค์ประกอบ UI บางอย่าง",
        colorprofile: `บังคับให้หน้าต่างทั้งหมดของแอปพลิเคชันใช้โปรไฟล์สีที่เลือก<br><br><span class="ttdesc">ต้องรีสตาร์ทแอป</span>`,
        pollrate: `ตั้งค่าช่วงเวลาการอัปเดตสำหรับข้อมูลความสำเร็จขณะเล่นเกม<br><br><span class="ttdesc">ประสิทธิภาพอาจเพิ่มขึ้น/ลดลงขึ้นอยู่กับค่าหรือฮาร์ดแวร์ของระบบ ค่าที่สูงขึ้นมักจะทำให้มีการโหลดระบบต่ำลง แต่อาจทำให้การแจ้งเตือนช้าลง</span>`,
        initdelay: `ตั้งค่าความล่าช้าระหว่างการตรวจจับ <span class="hl">AppID</span> ปัจจุบันและเริ่มต้นการติดตามกระบวนการ/ความสำเร็จ<br><br><span class="ttdesc">การเพิ่มค่านี้สามารถป้องกันสถานการณ์ที่ Steam ไม่สามารถเริ่มเกมปัจจุบันได้ (เนื่องจากการเริ่มต้นแอปพลิเคชันใน Steamworks ก่อนที่จะเริ่มเกม)</span><br><br><span class="ttdesc">อีกทางเลือกคือ เพิ่มค่านี้ยังสามารถใช้ในการหลีกเลี่ยงการตรวจจับกระบวนการเริ่มต้นก่อนเกมที่ไม่ถูกต้อง</span>`,
        releasedelay: `ตั้งค่าระยะเวลาที่กระบวนการ Worker ที่ทำงานอยู่เบื้องหลังจะรอก่อนเริ่มใหม่ หลังจากที่เกมปัจจุบันถูกปล่อยแล้ว การตั้งค่านี้ส่งผลต่อทั้งการติดตามกระบวนการอัตโนมัติและเกมปล่อยอัตโนมัติ<br><br><span class="ttdesc">ช่วยให้มีช่วงเวลาที่นานขึ้นเพื่อให้ Steamworks ถูกปล่อยออกจากแอปอย่างสมบูรณ์ การเพิ่มค่านี้สามารถป้องกันพฤติกรรมที่ผิดปกติ เช่น การติดตามเกมที่ปิดไปแล้ว</span>`,
        maxretries: `ตั้งค่าจำนวนครั้งสูงสุดในการลองเชื่อมโยงกระบวนการที่กำลังทำงานกับ AppID ที่ตรวจพบ การตั้งค่านี้ส่งผลต่อทั้งการติดตามกระบวนการอัตโนมัติและเกมปล่อยอัตโนมัติ<br><br><span class="ttdesc">จะมีการลองใหม่ทุก ๆ หนึ่งวินาที หากกระบวนการที่กำลังทำงานไม่ถูกเชื่อมโยงกับ AppID ปัจจุบันภายในจำนวนครั้งที่กำหนด ระบบจะส่งคืนกระบวนการที่ไม่ถูกต้อง ในกรณีดังกล่าว จำเป็นต้องปล่อยเกมด้วยตนเองผ่าน System Tray > ตัวเลือก > ปล่อยเกม</span>`,
        debug: "เปิดแผงดีบักซึ่งแสดงข้อมูลการติดตามกระบวนการอย่างละเอียด",
        userust: "ใช้ฟังก์ชันทางเลือกที่ใช้ Rust เพื่อตรวจสอบว่ากระบวนการเกมที่ติดตามกำลังทำงานอยู่ในระบบหรือไม่ กรณีที่ไม่ได้ทำเครื่องหมายเป็นถูก จะใช้การตรวจสอบกระบวนการที่เป็นค่าเริ่มต้นที่ใช้ NodeJS แทนกัน",
        notifydebug: "สร้างหน้าต่าง DevTools สำหรับการแจ้งเตือนทั้งหมด มีประโยชน์ในการแก้ไขปัญหา/การตรวจหาข้อบกพร่องของการแจ้งเตือน",
        usecustomfiles: "เปิดใช้งานการโหลดไฟล์ที่กำหนดเองสำหรับการแจ้งเตือน แต่ควรใช้ความระมัดระวังสำหรับผู้ใช้ทั่วไป",
        showcustomfiles: "เปิดตำแหน่งของไฟล์ที่กำหนดเอง",
        log: "เปิดหน้าต่างบันทึกแอปฯ ซึ่งแสดงข้อมูลเกี่ยวกับกิจกรรมของกระบวนการ คำเตือน และข้อผิดพลาด",
        reset: "ลบข้อมูลการกำหนดค่าทั้งหมดและเริ่มแอปใหม่",
        playback: "หยุด/เริ่มเล่นอนิเมชันของการแจ้งเตือนตัวอย่าง",
        replay: "เริ่มเล่นอนิเมชันของการแจ้งเตือนตัวอย่างใหม่",
        preset: "เลือกการตั้งค่าการแจ้งเตือนที่จะปรับแต่ง",
        iconanim: "สลับเส้นขอบและอนิเมชันของไอคอน Rare",
        alldetails: "แสดงองค์ประกอบข้อความทั้งหมดภายในการแจ้งเตือน รวมถึงองค์ประกอบที่ซ่อนอยู่โดยค่าเริ่มต้นสำหรับการตั้งค่านี้",
        usepercent: "แสดงเปอร์เซ็นต์การปลดล็อกของความสำเร็จแทนค่า XP/S",
        displaytime: "ตั้งค่าจำนวนวินาทีที่การแจ้งเตือนจะแสดง",
        scale: "เพิ่มหรือลดขนาดของการแจ้งเตือน",
        customtext: "ตั้งค่าข้อความที่กำหนดเองที่จะแสดงในการแจ้งเตือน",
        usegametitle: "แสดงชื่อเกมปัจจุบันในการแจ้งเตือน",
        customfont: "โหลดฟอนต์ที่กำหนดเองที่จะใช้ในการแจ้งเตือน",
        soundmode: "เลือกไฟล์เสียงเดียวหรือเลือกไฟล์เสียงแบบสุ่มจากโฟลเดอร์ที่มีไฟล์เสียงหลายไฟล์เมื่อเกิดการแจ้งเตือน",
        soundfile: "เลือกไฟล์เสียงที่จะเล่นเมื่อเกิดการแจ้งเตือน",
        sounddir: "เลือกโฟลเดอร์ที่จะเลือกไฟล์เสียงแบบสุ่มเมื่อเกิดการแจ้งเตือน",
        volume: "ตั้งค่าระดับเสียงของไฟล์เสียง",
        preview: "แสดงตัวอย่างไฟล์เสียงที่เลือก หรือไฟล์เสียงที่เลือกแบบสุ่มจากโฟลเดอร์",
        bgstyle: "เลือกสไตล์สีพื้นหลังของการแจ้งเตือน",
        gradientangle: "ตั้งค่ามุมของการไล่ระดับสี",
        bgimg: "โหลดไฟล์รูปภาพที่จะใช้เป็นพื้นหลังของการแจ้งเตือน",
        bgachicon: "ใช้ไอคอนของความสำเร็จที่ปลดล็อกแล้วเป็นพื้นหลังการแจ้งเตือน",
        bgimgbrightness: "ตั้งค่าความสว่างของรูปภาพที่ใช้เป็นพื้นหลังการแจ้งเตือน",
        brightness: "ตั้งค่าความสว่างของภาพเกมที่ใช้เป็นพื้นหลังของการแจ้งเตือน",
        blur: "ตั้งระดับของความเบลอที่ใช้กับพื้นหลังของการแจ้งเตือน",
        roundness: "ตั้งค่าความโค้งของขอบของการแจ้งเตือน",
        fontsize: "ตั้งค่าขนาดของตัวอักษรที่ใช้ในการแจ้งเตือน",
        opacity: "ตั้งค่าความทึบทั่วไปของการแจ้งเตือน",
        bgonly: "ตั้งค่าความทึบสำหรับพื้นหลังของการแจ้งเตือนเท่านั้น ให้คงค่าความทึบขององค์ประกอบอื่นเป็นค่าเต็ม",
        glow: "เปิดใช้งานเอฟเฟกต์การเรืองแสงที่ล้อมรอบการแจ้งเตือน",
        glowcolor: "ตั้งค่าสีของเอฟเฟกต์การเรืองแสง",
        glowsize: "ตั้งค่าขนาดของเอฟเฟกต์การเรืองแสง",
        glowx: "ปรับตำแหน่งเอฟเฟกต์การสะท้อนแสงแนวนอน",
        glowy: "ปรับตำแหน่งเอฟเฟกต์การสะท้อนแสงแนวตั้ง",
        glowopacity: "ตั้งค่าความทึบของเอฟเฟกต์การสะท้อนแสง",
        glowanim: "เลือกการ์ตูนที่กำหนดไว้เพื่อใช้กับเอฟเฟกต์การเรืองแสง",
        glowspeed: "ตั้งค่าความเร็วของการ์ตูนที่ใช้กับเอฟเฟกต์การเรืองแสง",
        glowrarity: "เปลี่ยนสีของเอฟเฟกต์การเรืองแสงตามความหายากของความสำเร็จที่ปลดล็อก",
        glowcolorbronze: "สีเรืองแสงที่แสดงเมื่อเปอร์เซ็นต์การปลดล็อก > $semirarity",
        glowcolorsilver: "สีเรืองแสงที่แสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $semirarity และ > $rarity",
        glowcolorgold: "สีของการเรืองแสงที่แสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $rarity",
        mask: "เปิดใช้งานการปกปิดบางส่วนของการแจ้งเตือนด้วยภาพที่กำหนดเอง",
        maskimg: `อัปโหลดไฟล์ภาพที่จะใช้เป็นหน้ากาก<br><br><span class="ttdesc">ใน CSS <code class="ttcode">mask-mode: alpha</code> ทำงานในทิศทางตรงกันข้ามกับที่คาดหวัง - พื้นที่โปร่งในไฟล์ภาพจะถูกซ่อนเอาไว้และพื้นที่สีดำ/เทาจะทำให้ส่วนองค์ประกอบด้านล่างเห็นได้</span>`,
        useoutline: "แสดงขอบเขตรอบการแจ้งเตือน",
        outline: "เลือกประเภทขอบที่จะแสดงรอบๆ การแจ้งเตือน",
        outlinecolor: "ตั้งค่าสีของขอบรอบๆ การแจ้งเตือน",
        outlinewidth: "ตั้งค่าความกว้างของขอบรอบๆ การแจ้งเตือน",
        primarycolor: "ตั้งค่าสีหลักของการแจ้งเตือน",
        secondarycolor: "ตั้งค่าสีรองของการแจ้งเตือน",
        tertiarycolor: "ตั้งค่าสีรองสุดของการแจ้งเตือน",
        fontcolor: "ตั้งค่าสีของข้อความทั้งหมดที่แสดงในการแจ้งเตือน",
        fontoutline: "เพิ่มเส้นขอบให้กับข้อความทั้งหมดที่แสดงในการแจ้งเตือน",
        fontoutlinecolor: "ตั้งค่าสีของเส้นขอบของข้อความ",
        fontoutlinescale: "ตั้งค่าความหนาของขอบเขตข้อความ",
        fontshadow: "เพิ่มเงาให้กับข้อความทั้งหมดที่แสดงในการแจ้งเตือน",
        fontshadowcolor: "ตั้งค่าสีของเงาของข้อความ",
        fontshadowscale: "ตั้งค่าความหนาของเงาข้อความ",
        fontshadowx: "เลื่อนตำแหน่งเงาของข้อความในแนวนอน",
        fontshadowy: "เลื่อนตำแหน่งเงาของข้อความในแนวตั้ง",
        iconroundness: "ตั้งค่าความโค้งของไอคอนความสำเร็จ/เกมที่แสดงในการแจ้งเตือน",
        plat: "โหลดไฟล์รูปภาพที่จะใช้เป็นไอคอน 100%",
        usegameicon: "แทนที่ไอคอนของความสำเร็จที่ปลดล็อกด้วยไอคอนของเกมปัจจุบัน",
        gameicontype: `เลือกประเภทของภาพที่จะใช้แสดงเป็นไอคอนของเกม`,
        usecustomimgicon: "แทนที่ไอคอนของความสำเร็จที่ปลดล็อกด้วยไฟล์ภาพที่กำหนดเอง",
        customimgicon: "โหลดไฟล์ภาพที่จะใช้เป็นไอคอนที่กำหนดเอง",
        showhiddenicon: "แสดงภาพที่บ่งชี้ว่าความสำเร็จถูกซ่อนในการแจ้งเตือน",
        hiddenicon: "โหลดไฟล์รูปภาพเพื่อแทนที่ไอคอนความสำเร็จที่ซ่อนอยู่",
        logo: "โหลดไฟล์รูปภาพเพื่อแทนที่ไอคอนโลโก้",
        decoration: "โหลดไฟล์รูปภาพเพื่อแทนที่ไอคอนตกแต่ง",
        showdecoration: "สลับการมองเห็นของไอคอนตกแต่ง",
        replacelogo: "แทนที่ไอคอนโลโก้ในการแจ้งเตือนด้วยการตกแต่งที่เลือก",
        pos: "ตั้งค่าตำแหน่งบนหน้าจอของการแจ้งเตือน",
        usecustompos: "เปิดใช้งานตำแหน่งที่กำหนดเองสำหรับการแจ้งเตือน",
        setcustompos: "ตั้งค่าตำแหน่งที่กำหนดเองสำหรับการแจ้งเตือน",
        copycustompos: "ใช้ตำแหน่งที่กำหนดเองกับประเภทการแจ้งเตือนอื่นทั้งหมด",
        resetcustompos: "รีเซ็ตตำแหน่งของการแจ้งเตือนเป็นตำแหน่งที่กำหนดเองเริ่มต้น",
        updatetheme: "อัปเดตธีมปัจจุบันด้วยตัวเลือกการปรับแต่งที่เลือกไว้",
        savetheme: "บันทึกตัวเลือกการปรับแต่งทั้งหมดเป็นธีมใหม่",
        visibilitybtn: "สลับความเป็นปกติขององค์ประกอบในการแสดงตัวอย่างและการแจ้งเตือนทดสอบ",
        delbtn: "รีเซ็ตองค์ประกอบเป็นค่าเริ่มต้น",
        imgpath: "สถานที่ที่รูปภาพการแจ้งเตือนที่สร้างขึ้นโดยตัวเลือกนี้จะถูกบันทึก",
        ssenabled: "เปิดหรือปิดการสร้างสื่อสำหรับประเภทนี้",
        checkforupdates: `ตรวจสอบว่าได้มีการปล่อยเวอร์ชันใหม่ของแอปบน GitHub หรือไม่ หากมีการอัปเดตให้ดาวน์โหลดและติดตั้งโดยอัตโนมัติเมื่อได้รับการยืนยันผ่านกล่องโต้ตอบ <span class="hl">อัปเดตที่มีอยู่</span>`,
        linkedgames: `หลีกเลี่ยง <span class="hl">การติดตามกระบวนการอัตโนมัติ</span> สำหรับเกม Steam ที่เฉพาะเจาะจง<br><br><span class="ttdesc">ตัวเลือกนี้ควรใช้เฉพาะในสถานการณ์ที่เฉพาะเจาะจงมากๆ เราไม่ควรจะต้องใช้ตัวเลือกนี้ในสถานการณ์ปกติ!</span>`,
        exclusionlist: `ป้องกันไม่ให้แอปติดตามความสำเร็จในเกม Steam ที่ระบุไว้<br><br><span class="ttdesc">ตัวเลือกนี้ควรใช้เฉพาะในสถานการณ์ที่เฉพาะเจาะจงมากๆ เราไม่ควรจะต้องใช้ตัวเลือกนี้ในสถานการณ์ปกติ!</span>`,
        inclusionlist: `ป้องกันไม่ให้เกม Steam ทั้งหมดถูกติดตามโดยแอป เว้นแต่จะระบุไว้<br><br><span class="ttdesc">ตัวเลือกนี้ควรใช้เฉพาะในกรณีเฉพาะเท่านั้น ผู้ใช้ทั่วไปไม่จำเป็นต้องใช้ตัวเลือกนี้ในสถานการณ์ปกติ!</span>`,
        ovx: "เลื่อนการแจ้งเตือนที่แสดงในภาพหน้าจอตามแนวนอน",
        ovy: "เลื่อนการแจ้งเตือนที่แสดงในภาพหน้าจอตามแนวตั้ง",
        importtheme: `นำเข้าการปรับแต่งผ่าน <span class="hl">ไฟล์ธีมที่สร้างโดยผู้ใช้</span>`,
        exporttheme: `ส่งออก <span class="hl">ธีม</span> ที่เลือกอยู่ในปัจจุบันเพื่อแชร์<br><br><span class="ttdesc">ก่อนพยายามที่จะส่งออก โปรดตรวจสอบให้แน่ใจว่า <span class="hl">ธีม</span> ที่ต้องการได้รับการเลือกแล้ว (ผ่านทางเมนู <span class="hl">เลือกธีม</span>) และยังตรวจสอบให้แน่ใจว่าการปรับแต่งได้รับการบันทึกไว้ใน <span class="hl">ธีม</span> ที่เลือก (ผ่านทางเมนู <span class="hl">บันทึกธีม</span>)<br><br><u>การปรับแต่งใด ๆ ที่ยังไม่ได้รับการบันทึกใน <span class="hl">ธีม</span> ปัจจุบันจะไม่ถูกส่งออก!</u></span>`,
        webhooks: "ใช้ Webhook URL เพื่อโพสต์ในเซิร์ฟเวอร์ Discord ทุกครั้งที่ปลดล็อกความสำเร็จ",
        webhookmain: `สลับการโพสต์ข้อมูลความสำเร็จไปยังเซิร์ฟเวอร์ Discord เมื่อปลดล็อกความสำเร็จ $main`,
        webhooksemi: `สลับการโพสต์ข้อมูลความสำเร็จไปยังเซิร์ฟเวอร์ Discord เมื่อปลดล็อกความสำเร็จ $semi`,
        webhookrare: "สลับการโพสต์ข้อมูลความสำเร็จไปยังเซิร์ฟเวอร์ Discord เมื่อปลดล็อกความสำเร็จ $rare",
        webhookplat: "สลับการโพสต์ข้อมูลความสำเร็จไปยังเซิร์ฟเวอร์ Discord เมื่อปลดล็อกความสำเร็จ $plat",
        webhooktest: "สลับว่าเมื่อการแจ้งเตือนทดสอบประเภทใดก็ตามถูกกระตุ้น จะส่งข้อมูลทดสอบไปยังเซิร์ฟเวอร์ Discord หรือไม่",
        webhookurl: `ตั้งค่า <span class="hl">Webhook URL</span> สำหรับเซิร์ฟเวอร์ Discord ที่ต้องการ<br><br><span class="ttdesc">URL ของ Webhook ใช้สำหรับโพสต์ในเซิร์ฟเวอร์/ช่อง Discord ในนามของผู้ใช้หรือแอปพลิเคชัน เพื่อตั้งค่า Webhook ใหม่สำหรับเซิร์ฟเวอร์ Discord ผู้ใช้จะต้องมีบทบาทในเซิร์ฟเวอร์ที่ต้องการซึ่งอนุญาตให้สร้าง Webhooks<br><br><u>ต้องใช้ Webhook URL เมื่อใช้ตัวเลือกนี้</u><br><br>ดูเอกสารอย่างเป็นทางการของ Discord สำหรับข้อมูลเพิ่มเติม</span>`,
        webhookspoilers: `เพิ่มแท็กสปอยเลอร์ให้กับความสำเร็จ "ซ่อน" เมื่อโพสต์ไปยัง Discord`,
        webhookappid: "แสดง AppID ของเกมปัจจุบันในส่วนท้ายของการฝัง webhook",
        unlockmsg: "ตั้งค่าตำแหน่งของข้อความปลดล็อก/ข้อความที่กำหนดเองภายใน $type",
        title: "ตั้งค่าตำแหน่งของชื่อความสำเร็จภายใน $type",
        desc: "ตั้งค่าตำแหน่งของคำอธิบายความสำเร็จภายใน $type",
        notification: "การแจ้งเตือน",
        screenshot: "ภาพหน้าจอ",
        percentpos: "ตั้งค่าตำแหน่งของเปอร์เซ็นต์ความหายากภายใน $type",
        sspercentpos: "ตั้งค่าตำแหน่งของเปอร์เซ็นต์ความหายากภายใน $type",
        hiddeniconpos: "ตั้งค่าตำแหน่งของไอคอนความสำเร็จที่ซ่อน/ลับภายใน $type",
        sshiddeniconpos: "ตั้งค่าตำแหน่งของไอคอนความสำเร็จที่ซ่อน/ลับภายใน $type",
        decorationpos: "ตั้งค่าตำแหน่งขององค์ประกอบการตกแต่งภายใน $type",
        ssdecorationpos: "ตั้งค่าตำแหน่งขององค์ประกอบการตกแต่งภายใน $type",
        percentbadge: "แสดงเปอร์เซ็นต์การปลดล็อคภายในตราสัญลักษณ์ที่ตั้งอยู่เหนือไอคอนความสำเร็จ/เกม",
        sspercentbadge: "แสดงเปอร์เซ็นต์การปลดล็อคภายในตราสัญลักษณ์ที่ตั้งอยู่เหนือไอคอนความสำเร็จ/เกม",
        percentbadgepos: "ตั้งค่าตำแหน่งตราสัญลักษณ์",
        sspercentbadgepos: "ตั้งค่าตำแหน่งตราสัญลักษณ์",
        percentbadgecolor: "ตั้งค่าสีพื้นหลังของตราสัญลักษณ์",
        sspercentbadgecolor: "ตั้งค่าสีพื้นหลังของตราสัญลักษณ์",
        percentbadgefontcolor: "ตั้งค่าสีตัวอักษรของป้าย",
        sspercentbadgefontcolor: "ตั้งค่าสีตัวอักษรของป้าย",
        percentbadgefontsize: "ตั้งค่าขนาดตราสัญลักษณ์",
        sspercentbadgefontsize: "ตั้งค่าขนาดตราสัญลักษณ์",
        percentbadgeroundness: "ตั้งค่าความโค้งของตราสัญลักษณ์",
        sspercentbadgeroundness: "ตั้งค่าความโค้งของตราสัญลักษณ์",
        percentbadgex: "เลื่อนตำแหน่งขององค์ประกอบเหรียญในแนวนอน",
        sspercentbadgex: "เลื่อนตำแหน่งขององค์ประกอบเหรียญในแนวนอน",
        percentbadgey: "เลื่อนตำแหน่งขององค์ประกอบเหรียญในแนวตั้ง",
        sspercentbadgey: "เลื่อนตำแหน่งขององค์ประกอบเหรียญในแนวตั้ง",
        percentbadgeimg: "แสดงไอคอนตามความหายากเป็นองค์ประกอบเหรียญ",
        sspercentbadgeimg: "แสดงไอคอนตามความหายากเป็นองค์ประกอบเหรียญ",
        percentbadgeimgbronze: "ไอคอนตราแสดงเมื่อเปอร์เซ็นต์การปลดล็อก > $semirarity",
        sspercentbadgeimgbronze: "ไอคอนตราแสดงเมื่อเปอร์เซ็นต์การปลดล็อก > $semirarity",
        percentbadgeimgsilver: "ไอคอนตราแสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $semirarity และ > $rarity",
        sspercentbadgeimgsilver: "ไอคอนตราแสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $semirarity และ > $rarity",
        percentbadgeimggold: "ไอคอนเหรียญที่แสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $rarity",
        sspercentbadgeimggold: "ไอคอนเหรียญที่แสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $rarity",
        percentbadgeimgplat: "ไอคอนตราแสดงเมื่อปลดล็อกความสำเร็จทั้งหมดแล้ว",
        sspercentbadgeimgplat: "ไอคอนตราแสดงเมื่อปลดล็อกความสำเร็จทั้งหมดแล้ว",
        resetpbimgs: "รีเซ็ตไอคอนเหรียญทั้งหมดเป็นค่าเริ่มต้น",
        elemsmatch: `ตรงตามการตั้งค่าองค์ประกอบการแจ้งเตือนที่ตั้งไว้ในตัวปรับแต่งสำหรับประเภทการแจ้งเตือนนี้<br><br><span class="ttdesc">บางพรีเซ็ตการแจ้งเตือนอาจไม่สามารถตรงตามการตั้งค่าตัวปรับแต่งได้อย่างสมบูรณ์ เนื่องจากความแตกต่างระหว่างการแจ้งเตือนบนหน้าจอกับเลย์เอาต์การแจ้งเตือนที่เป็นภาพหน้าจอ</span>`,
        themeswitch: `เปลี่ยนไปยัง <span class="hl">ธีม</span> ที่บันทึกไว้เมื่อมีการตรวจพบเกมเฉพาะ`,
        userthemesync: `ซิงค์การปรับแต่งใน <span class="hl">ธีม</span> ที่เลือกไปยังประเภทการแจ้งเตือนอื่นทั้งหมด`,
        showsystrayopts: `แสดงตัวเลือกทั้งหมดที่มักอยู่ภายใต้ <span class="hl">ถาดระบบ</span> > <span class="hl">ตัวเลือก</span> ใน <span class="hl">การตั้งค่า</span> > <span class="hl">อื่นๆ</span>`,
        releaseshortcut: "ปล่อยเกมที่ติดตามอยู่ด้วยทางลัดคีย์บอร์ดที่กำหนด",
        themeselect: "เลือกธีมที่บันทึกไว้ก่อนหน้านี้",
        statwin: `แสดงสถิติความสำเร็จที่ปรับแต่งได้สำหรับเกมปัจจุบันในหน้าต่างภายนอก<br><br><span class="ttdesc">เมื่อใช้ร่วมกับตัวเลือก <span class="hl">แปลความสำเร็จเป็นภาษาของ Steam</span> การแปลบางอย่างอาจไม่สามารถใช้งานได้จนกว่าความสำเร็จที่ระบุจะปลดล็อค</span>`,
        statwinaot: `ตั้งค่าหน้าต่างสถิติความสำเร็จเป็นโหมด "อยู่เสมอที่ด้านบน" ซึ่งทำให้หน้าต่างแสดงอยู่เหนือหน้าต่างเกม<br><br><span class="ttdesc">เมื่อเปิดใช้งาน หน้าต่างสถิติความสำเร็จจะไม่บันทึกการโต้ตอบของผู้ใช้ เช่น เหตุการณ์ "คลิก" เพื่อเปิดใช้งานการโต้ตอบกับหน้าต่างอีกครั้ง ต้องปิดใช้งานตัวเลือกนี้</span>`,
        statwinshortcut: "สลับโอเวอร์เลย์สถิติของความสำเร็จโดยใช้ทางลัดคีย์บอร์ดที่กำหนด",
        ssdisplay: "แสดงตัวอย่างของภาพหน้าจอที่จับได้ในการแจ้งเตือน",
        iconscale: "เพิ่มหรือลดขนาดของไอคอนความสำเร็จ",
        showiconborder: "แสดงภาพเป็นกรอบรอบไอคอนความสำเร็จ",
        iconborderimg: "โหลดไฟล์ภาพเพื่อใช้เป็นกรอบรอบไอคอนความสำเร็จ",
        iconborderpos: "ตั้งค่าการแสดงผลของภาพกรอบไอคอนให้อยู่ด้านหน้าหรือด้านหลังไอคอนความสำเร็จ",
        iconborderscale: "เพิ่มหรือลดขนาดของกรอบไอคอนในแจ้งเตือน",
        iconborderx: "เพิ่มหรือลดการเลื่อนแนวนอนของกรอบไอคอนในแจ้งเตือน",
        iconbordery: "เพิ่มหรือลดการเลื่อนแนวตั้งของกรอบไอคอนในแจ้งเตือน",
        iconborderrarity: "เปลี่ยนภาพกรอบไอคอนตามความหายากของความสำเร็จที่ปลดล็อก",
        iconborderimgbronze: "รูปขอบไอคอนแสดงเมื่อเปอร์เซ็นต์การปลดล็อก > $semirarity",
        iconborderimgsilver: "รูปขอบไอคอนแสดงเมื่อเปอร์เซ็นต์การปลดล็อก < $semirarity และ > $rarity",
        iconshadowcolor: "ตั้งค่าสีของเงาที่ล้อมรอบไอคอนความสำเร็จเมื่อปลดล็อคความสำเร็จหายาก",
        iconanimcolor: "ตั้งค่าสีของแอนิเมชันที่อยู่หลังไอคอนความสำเร็จเมื่อปลดล็อคความสำเร็จหายาก",
        logoscale: "เพิ่มหรือลดขนาดของโลโก้ภายในการแจ้งเตือน",
        decorationscale: "เพิ่มหรือลดขนาดของตกแต่งภายในการแจ้งเตือน",
        usecustomfontsizes: `เพิ่มหรือลดขนาดของแต่ละข้อความในการแจ้งเตือน<br><br><span class="ttdesc">ไม่สามารถรับประกันการรักษารูปแบบการแจ้งเตือนเดิมเมื่อเปลี่ยนค่าขนาดฟอนต์แต่ละตัว</span>`,
        unlockmsgfontsize: "เพิ่มหรือลดขนาดของข้อความปลดล็อค",
        titlefontsize: "เพิ่มหรือลดขนาดของข้อความชื่อเรื่องของความสำเร็จ",
        descfontsize: "เพิ่มหรือลดขนาดของข้อความคำอธิบายของความสำเร็จ",
        webhookembedcolormain: "ตั้งค่าสีที่ใช้ใน webhook embed เมื่อปลดล็อกความสำเร็จ $main",
        webhookembedcolorsemi: "ตั้งค่าสีที่ใช้ใน webhook embed เมื่อปลดล็อกความสำเร็จ $semi",
        webhookembedcolorrare: "ตั้งค่าสีที่ใช้ใน webhook embed เมื่อปลดล็อกความสำเร็จ $rare",
        webhookembedcolorplat: "ตั้งค่าสีที่ใช้ใน webhook embed เมื่อปลดล็อกความสำเร็จ $plat",
        raemus: "แสดงการแจ้งเตือนเมื่อเกมถูกตรวจจับในอีมูเลเตอร์ที่รองรับ",
        rauser: "ตั้งค่าชื่อผู้ใช้ Retro Achievements เพื่อการติดตามความสำเร็จ",
        rakey: `ตั้งค่า Web API Key ที่จะใช้ในการยืนยันตัวตนกับ API ของ Retro Achievements<br><br><span class="ttdesc">Web API Key สามารถคัดลอกหรือสร้างใหม่ได้โดยการเข้าสู่ระบบเว็บไซต์ของ Retro Achievements และไปที่ <span class="hl">การตั้งค่า > คีย์ > Web API Key</span><br><br>🔒 คีย์ที่ให้มาจะถูกเข้ารหัสก่อนที่จะถูกจัดเก็บในระบบท้องถิ่น (หากระบบปฏิบัติการปัจจุบันรองรับการเข้ารหัส)</span>`,
        rapercenttype: "ตั้งค่าการแสดงเปอร์เซ็นต์การปลดล็อกความสำเร็จแบบ Hardcore หรือ Softcore ในการแจ้งเตือน",
        retroarch: `แสดงการแจ้งเตือน Retro Achievements สำหรับเกมที่จำลองผ่าน RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > การตั้งค่า > การบันทึก</span> ต้องตั้งค่าด้วยการตั้งค่าต่อไปนี้：<br><br><ul><li><span class="hllb">ความละเอียดของการบันทึก</span>: <span class="hlgreen">เปิดใช้งาน</span></li><li><span class="hllb">ระดับการบันทึกของหน้าต่าง</span>: <span class="hlgreen">1 (ข้อมูล)</span></li><li><span class="hllb">บันทึกไปยังไฟล์</span>: <span class="hlgreen">เปิดใช้งาน</span></li><li><span class="hllb">เพิ่มเวลาในไฟล์บันทึก</span>: <span class="hlred">ปิด</span></li></ul></span>`,
        dolphin: `แสดงการแจ้งเตือน Retro Achievements สำหรับเกมที่จำลองผ่าน Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > มุมมอง > แสดงการตั้งค่าบันทึก</span> ต้องตั้งค่าด้วยการตั้งค่าต่อไปนี้：<br><br><ul><li><span class="hllb">ความละเอียด</span>: <span class="hlgreen">ข้อมูล</span></li><li><span class="hllb">ผลลัพธ์ของบันทึก</span> > <span class="hlgreen">เขียนไปยังไฟล์</span></li><li><span class="hllb">ประเภทบันทึก</span> > <span class="hlgreen">ความสำเร็จ (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `แสดงการแจ้งเตือน Retro Achievements สำหรับเกมที่จำลองโดย PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > เครื่องมือ > เปิดใช้งานการบันทึกไฟล์</span> ต้องเปิดใช้งาน</span>`,
        duckstation: `แสดงการแจ้งเตือน Retro Achievements สำหรับเกมที่จำลองผ่าน Duckstation<br><br><span class="ttdesc">❗ ไฟล์ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> จะต้องดาวน์โหลดและย้ายไปยัง <span class="hl">ไดเรกทอรีการติดตั้งของ Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > การตั้งค่า > ความสำเร็จ > RAIntegration (สำหรับนักพัฒนาเท่านั้น)</span> ต้องเปิดใช้งาน</span>`,
        ppsspp: `แสดงการแจ้งเตือน Retro Achievements สำหรับเกมที่จำลองผ่าน PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> ต้องเปิดใช้งานและกำหนดค่าด้วยการตั้งค่าดังต่อไปนี้:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `ตั้งค่าเส้นทางของไฟล์บันทึก <span class="hl">"retroarch.log"</span> ของ RetroArch<br><br><span class="ttdesc">เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"retroarch.log"</span> จะถูกเก็บไว้ที่ <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `ตั้งค่าเส้นทางของไฟล์บันทึก <span class="hl">"dolphin.log"</span> ของ Dolphin<br><br><span class="ttdesc">เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"dolphin.log"</span> จะถูกเก็บไว้ที่ตำแหน่งใดตำแหน่งหนึ่งดังนี้：<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `ตั้งค่าพาธไปยังไฟล์บันทึก <span class="hl">"emulog.txt"</span> ของ PCSX2<br><br><span class="ttdesc">ด้วยการตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"emulog.txt"</span> จะถูกเก็บไว้ที่ <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `ตั้งค่าพาธไปยังไฟล์บันทึก <span class="hl">"RALog.txt"</span> ของ Duckstation<br><br><span class="ttdesc">ในการตั้งค่าการติดตั้งเริ่มต้น, <span class="hl">"RALog.txt"</span> จะถูกบันทึกใน <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `ตั้งค่าเส้นทางไปยังไฟล์บันทึก <span class="hl">"log.txt"</span> ของ PPSSPP<br><br><span class="ttdesc">เมื่อใช้การตั้งค่าการติดตั้งเริ่มต้น <span class="hl">"log.txt"</span> จะถูกจัดเก็บไว้ที่ <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "ตั้งค่าสีขององค์ประกอบข้อความแต่ละส่วนในแจ้งเตือน",
        unlockmsgfontcolor: "ตั้งค่าสีขององค์ประกอบข้อความแรก",
        titlefontcolor: "ตั้งค่าสีขององค์ประกอบข้อความที่สอง",
        descfontcolor: "ตั้งค่าสีขององค์ประกอบข้อความที่สาม",
        exportachdata: `ส่งออกข้อมูลความสำเร็จเป็นไฟล์ JSON เมื่อปลดล็อกความสำเร็จ<br><br><span class="ttdesc">เมื่อเปิดใช้งาน <span class="ttcode">achdata.json</span> จะถูกส่งออกไปยัง:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "ปรับระยะห่างในแนวตั้งระหว่างองค์ประกอบข้อความในการแจ้งเตือน",
        ssmode: `ตั้งค่าว่าจะจับภาพหน้าจอทั้งหน้าจอหรือหน้าต่างเกมปัจจุบัน<span style="color: red;">*</span><br><br><span class="ttdesc">หากไม่สามารถค้นหา <span class="hl">ไฟล์ปฏิบัติการ</span> ของเกมปัจจุบันได้ (<i>ไม่ว่าจะผ่าน <span class="hl">การติดตามกระบวนการอัตโนมัติ</span> หรือเมื่อเพิ่มเป็นรายการ <span class="hl">เกมปล่อยอัตโนมัติ</span></i>) ตัวเลือกนี้จะใช้โหมด "หน้าจอ" เป็นค่าเริ่มต้น</span>`,
        replaynotify: "เล่นซ้ำการแจ้งเตือนความสำเร็จล่าสุด",
        replaynotifyshortcut: "เล่นซ้ำการแจ้งเตือนความสำเร็จล่าสุดโดยใช้ทางลัดที่ระบุ",
        replaynotifyempty: `<br><br><span class="ttdesc">คิวการเล่นซ้ำว่างเปล่า ปลดล็อกความสำเร็จเพื่อเล่นซ้ำการแจ้งเตือน</span>`,
        customtrigger: "ทริกเกอร์การจำลองกดปุ่ม/ชุดปุ่มเมื่อปลดล็อกความสำเร็จ สามารถใช้เพื่อเรียกทางลัดแป้นพิมพ์ที่ลงทะเบียนในแอปพลิเคชันภายนอก",
        customtriggershortcut: `ทริกเกอร์ปุ่ม/ชุดปุ่มที่กำหนดไว้เมื่อปลดล็อกความสำเร็จ<br><br><span class="ttdesc">รองรับ 1-3 ปุ่มต่อทางลัด สำหรับการกดปุ่ม/ชุดปุ่มที่น้อยกว่า 3 ปุ่ม ให้กดปุ่มที่ต้องการแล้วรอให้ตัวจับเวลาหมด (5 วินาที)</span>`,
        customtriggerdelay: "หน่วงเวลาปุ่ม/ชุดปุ่มของทริกเกอร์กำหนดเองที่ระบุ",
        customtriggerusedisplaytime: `หน่วงเวลาปุ่ม/ชุดปุ่มของทริกเกอร์กำหนดเองที่ระบุโดยอิงตามค่าระยะเวลาการแสดงผลของประเภทการแจ้งเตือนปัจจุบัน`,
        trophymode: "แทนที่ประเภทการแจ้งเตือน หลัก/หายาก/100% ด้วย บรอนซ์/เงิน/ทอง/แพลตินัม",
        lognum: `จำนวนไฟล์บันทึกก่อนหน้าที่จัดเก็บไว้ก่อนลบ ไฟล์บันทึกใหม่จะถูกสร้างขึ้นทุกครั้งที่เปิดแอป<br><br><span class="ttdesc">เมื่อกำหนดค่าเป็น 0 ไฟล์บันทึกก่อนหน้าทั้งหมดจะถูกลบเมื่อออกจากแอป</span>`, 
        detectedappid: `ใช้ <span class="hl">AppID</span> ของเกมที่ตรวจพบในขณะนี้`,
        listmode: `ตั้งค่าพฤติกรรมของ <span class="hl">รายการไม่รวม</span>/<span class="hl">รายการที่รวมไว้</span><br><br><span class="ttdesc">• <span class="hl">ไม่รวม</span>: ข้ามเฉพาะเกมที่ระบุในรายการ<br>• <span class="hl">รวม</span>: ข้ามเกมทั้งหมด ยกเว้นเกมที่ระบุในรายการ</span>`,
        notifymax: `ตั้งค่าจำนวนการแจ้งเตือนสูงสุดที่สามารถแสดงบนหน้าจอพร้อมกัน<br><br><span class="ttdesc">การเพิ่มจำนวนการแจ้งเตือนที่แสดงพร้อมกันจะใช้ทรัพยากรมากขึ้น และอาจทำให้ประสิทธิภาพลดลง</span>`,
        notifyspace: "ตั้งค่าระยะห่างระหว่างการแจ้งเตือนที่แสดงพร้อมกันบนหน้าจอ",
        audiocooldown: `ตั้งค่าระยะเวลาที่การแจ้งเตือนต่อไปจะต้องรอก่อนเล่นเสียงใหม่<br><br><span class="ttdesc">เสียงจะไม่ถูกจำกัดหากจำนวนการแจ้งเตือนสูงสุดตั้งค่าเป็น 1</span>`,
        rauseemudir: "บันทึกภาพหน้าจอ/ภาพการแจ้งเตือนที่ปลดล็อกผ่าน RetroAchievements ลงในโฟลเดอร์ย่อยของอีมูเลเตอร์ปัจจุบันภายในไดเรกทอรีเส้นทางภาพหน้าจอ/ภาพที่ระบุ",
        ssext: "กำหนดรูปแบบไฟล์ของภาพหน้าจอที่สร้างผ่านตัวเลือก Screenshot with Notification Overlay",
        notify1line: `จำกัดจำนวนบรรทัดของข้อความที่แสดงในทุกการแจ้งเตือนให้เหลือ 1<br><br><span class="ttdesc">ข้อความที่ยาวเกินและไม่สามารถแสดงในบรรทัดเดียวได้จะถูกตัดให้เหลือ "..."</span>`,
        copytheme: "คัดลอกธีมที่เลือกไปยังประเภทการแจ้งเตือนอื่น",
        ssaddtosteam: "เพิ่มสื่อที่สร้างขึ้นไปยังการบันทึกและภาพหน้าจอของเกมปัจจุบันใน Steam โดยอัตโนมัติ",
        appdatadir: "เปิดตำแหน่งโฟลเดอร์ AppData ของแอป",
        backup: "สำรองเนื้อหาในโฟลเดอร์ AppData ของแอปไปยังตำแหน่งที่เลือก ซึ่งจะทำหน้าที่เป็นจุดกู้คืนสำหรับสถานะปัจจุบันของแอป",
        restore: "กู้คืนเนื้อหาในโฟลเดอร์ AppData ของแอปจากการสำรองข้อมูลก่อนหน้า",
        gametimerwin: "แสดงตัวจับเวลาบนหน้าจอเพื่อแสดงระยะเวลาที่ใช้ในการปลดล็อกความสำเร็จทั้งหมดของเกมปัจจุบัน",
        gametimerwinshortcut: "สลับการแสดงตัวจับเวลาการเล่นเกมจนจบโดยใช้ปุ่มลัดแป้นพิมพ์ที่กำหนด",
        gametimerwinaot: `ตั้งค่าตัวจับเวลาการเล่นเกมจนจบเป็นโหมด "อยู่ด้านบนเสมอ" เพื่อให้หน้าต่างแสดงอยู่เหนือหน้าต่างเกม<br><br><span class="ttdesc">เมื่อเปิดใช้งาน ตัวจับเวลาการเล่นเกมจนจบจะไม่ตอบสนองต่อการโต้ตอบของผู้ใช้อีกต่อไป เช่น เหตุการณ์ "click" หากต้องการเปิดใช้งานการโต้ตอบกับหน้าต่างอีกครั้ง ต้องปิดตัวเลือกนี้</span>`,
        resetgametimer: "รีเซ็ตตัวจับเวลาการเล่นเกมจนจบสำหรับเกมปัจจุบัน",
        noshortcuts: `ปิดใช้งานปุ่มลัดแป้นพิมพ์ทั้งหมดภายในแอป<br><br><span class="ttdesc">เมื่อเปิดใช้งาน <u>ปุ่มลัดทั้งหมดภายในแอปจะไม่สามารถใช้งานได้อีกต่อไป</u> ตัวเลือกทั้งหมดที่เกี่ยวข้องกับปุ่มลัดแป้นพิมพ์จะถูกซ่อนด้วย</span>`,
        extwinnotify: "สลับการมองเห็นของการแจ้งเตือนบนหน้าจอทั้งหมดขณะใช้ Stream Notifications",
        usesanwatcher: `เปิดใช้งานตัวเฝ้าติดตามโปรเซสเกมตัวใหม่ของ SAN<br><br><span class="ttdesc">ความแตกต่างระหว่าง SANWatcher ใหม่กับวิธีติดตามโปรเซสอัตโนมัติแบบเดิมมีดังนี้:<br><br><div class="wrapper sanwatcher"><span class="hl">เปิด</span><ul><li>ตรวจสอบเหตุการณ์การเริ่มต้นและการสิ้นสุดของทุกโปรเซสที่อยู่ภายในโฟลเดอร์ติดตั้งเกมอย่างต่อเนื่อง</li><li>ไม่จำเป็นต้องทราบไฟล์ปฏิบัติการของเกมเพื่อปล่อยเกมปัจจุบัน</li><li>พฤติกรรมของตัวเรียกใช้งานก่อนเข้าเกมอาจแตกต่างกัน จึงไม่สามารถรับประกันความเข้ากันได้อย่างสมบูรณ์กับเกม Steam ทุกเกม</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">ปิด</span><ul><li>สแกนโฟลเดอร์ติดตั้งเกมเพื่อค้นหาไฟล์ปฏิบัติการที่กำลังทำงานอยู่หลังจากเปิดเกม</li><li>จำเป็นต้องทราบไฟล์ปฏิบัติการของเกมเพื่อปล่อยเกมปัจจุบัน</li><li>หากไม่สามารถระบุโปรเซสของเกมได้โดยอัตโนมัติ ผู้ใช้จะต้องเพิ่มรายการใหม่ลงใน <span class="hl">เกมปล่อยอัตโนมัติ</span> ด้วยตนเอง เพื่อให้สามารถปล่อยเกมโดยอัตโนมัติได้</li></ul></div>`,
        releasewaittime: `กำหนดระยะเวลาที่ SANWatcher จะรอให้กระบวนการของเกมใหม่เริ่มทำงานก่อนที่จะปล่อยเกมปัจจุบัน<br><br><span class="ttdesc">ตัวอย่างเช่น หากเกมปัจจุบันเปิดตัวเรียกใช้งาน/หน้าต่างการตั้งค่าก่อนเกมก่อนที่จะเปิดเกมจริง การตั้งค่านี้จะกำหนดจำนวนวินาทีที่ SANWatcher จะรอให้หน้าต่างของเกมจริงเปิดขึ้นหลังจากที่ตัวเรียกใช้งาน/หน้าต่างการตั้งค่าก่อนเกมปิดลง<br><br>หากตรวจพบกระบวนการเกมที่กำลังทำงานใหม่ภายในช่วงเวลารอนี้ การปล่อยเกมจะถูกยกเลิก และจะติดตามกระบวนการที่เพิ่งทำงานแทน<br><br>💡 ชื่อเกมจะ<span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">กะพริบ</span>ในกล่อง <span class="hl">การแสดงผลเกม</span> ขณะที่เกมปัจจุบันกำลังรอการปล่อย</span>`
    },
    update: {
        updateavailable: "มีการอัปเดตใหม่",
        sub: [
            `<span id="newversion"></span>`,
            "มีการอัปเดตใหม่สำหรับ Steam Achievement Notifier!",
            `อ่านรายละเอียดการอัปเดตเพิ่มเติมได้ที่ <span id="discordreleasenotes"></span> และ <span id="githubreleasenotes"></span>`
        ],
        update: "อัปเดต"
    },
    linkgame: {
        content: {
            exepath: "เส้นทางของไฟล์เรียกใช้",
            managesub: [
                `หาก Steam ยังคงแสดงเกมว่า <i>กำลังเล่น</i> หลังจากที่หน้าต่างเกมถูกปิดแล้ว ให้ลองเพิ่มรายการใหม่ใน <span class="hl">เกมปล่อยอัตโนมัติ</span>`,
                `เพิ่ม <span class="hl">AppID</span> ของเกมที่ระบุพร้อมกับ <span class="hl">ไฟล์ปฏิบัติการของเกม</span> ที่คาดไว้ หรือ <span class="hl">ลบ</span> รายการที่มีอยู่`,
                `สามารถเพิ่มรายการใหม่ได้โดย <i>คลิกขวา</i> ที่ <span class="hl">ไอคอน System Tray</span> > <span class="hl">ปล่อยเกมอัตโนมัติ</span> เมื่อมีการตรวจพบเกมแล้ว`,
                `<span class="hl help" id="appidhelp"><u>ฉันจะหา AppID ของเกม Steam ได้อย่างไร?</u></span>`
            ],
            linknew: "รายการใหม่",
            linknewsub: [
                `เพิ่ม <span class="hl">AppID</span> ของเกมใหม่พร้อมกับ <span class="hl">ไฟล์ปฏิบัติการของเกม</span> ที่คาดไว้`,
                `เมื่อเพิ่มแล้ว สามารถ <span class="hl">ลบ</span> รายการได้ผ่านเมนู <span class="hl">เกมปล่อยอัตโนมัติ</span> ก่อนหน้า`
            ],
            linkedit: "แก้ไขรายการ",
            linkeditsub: [
                `แก้ไข <span class="hl">AppID</span> ของเกมที่มีอยู่พร้อมกับ <span class="hl">ไฟล์ปฏิบัติการของเกม</span> ที่คาดไว้`,
                `เมื่อเพิ่มแล้ว สามารถ <span class="hl">ลบ</span> รายการได้ผ่านเมนู <span class="hl">เกมปล่อยอัตโนมัติ</span> ก่อนหน้า`
            ],
            link: "เพิ่ม"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `เพิ่ม <span class="hl">AppID</span> ของเกม Steam ใดๆ เข้าไปใน <span class="hl">รายการยกเว้น</span>`,
                `Steam Achievement Notifier จะไม่พยายามติดตามข้อมูลความสำเร็จสำหรับเกมใดที่มี <span class="hl">AppID</span> ถูกเพิ่มเข้าไปใน <span class="hl">รายการยกเว้น</span>`,
                `<span class="hl" id="appidhelp"><u>ฉันจะหา AppID ของเกม Steam ได้อย่างไร?</u></span>`
            ],
            exclusionnew: "การยกเว้นใหม่",
            exclusionnewsub: [
                `ป้อน <span class="hl">AppID</span> เพื่อเพิ่มลงใน <span class="hl">รายการยกเว้น</span>`
            ],
            exclusionedit: "แก้ไขการยกเว้น",
            exclusioneditsub: [
                `แก้ไข <span class="hl">AppID</span> ที่มีอยู่ใน <span class="hl">รายการยกเว้น</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `เพิ่ม <span class="hl">AppID</span> ของเกม Steam ใดๆ ไปยัง <span class="hl">รายการที่รวมไว้</span>`,
                `Steam Achievement Notifier จะพยายามติดตามข้อมูลความสำเร็จเฉพาะเกมที่มี <span class="hl">AppID</span> อยู่ใน <span class="hl">รายการที่รวมไว้</span>`,
                `<span class="hl help" id="appidhelp"><u>ฉันจะหาค่า AppID ของเกม Steam ได้อย่างไร?</u></span>`
            ],
            inclusionnew: "เพิ่มรายการที่รวมใหม่",
            inclusionnewsub: [
                `ใส่ <span class="hl">AppID</span> เพื่อเพิ่มลงใน <span class="hl">รายการที่รวมไว้</span>`
            ],
            inclusionedit: "แก้ไขรายการที่รวม",
            inclusioneditsub: [
                `แก้ไข <span class="hl">AppID</span> ที่มีอยู่ใน <span class="hl">รายการที่รวมไว้</span>`
            ]
        }
    },
    notificationelems: {
        title: "องค์ประกอบการแจ้งเตือน",
        content: {
            unlockmsg: "ข้อความปลดล็อก",
            title: "ชื่อความสำเร็จ",
            desc: "คำอธิบายความสำเร็จ",
            hiddeniconpos: "ไอคอนที่ซ่อนอยู่",
            sshiddeniconpos: "ไอคอนที่ซ่อนอยู่",
            decorationpos: "การตกแต่ง",
            ssdecorationpos: "การตกแต่ง",
            percentpos: "เปอร์เซ็นต์ความหายาก",
            sspercentpos: "เปอร์เซ็นต์ความหายาก",
            percentbadge: "ตราสัญลักษณ์เปอร์เซ็นต์",
            sspercentbadge: "ตราสัญลักษณ์เปอร์เซ็นต์",
            percentbadgepos: "ตำแหน่งตราสัญลักษณ์",
            sspercentbadgepos: "ตำแหน่งตราสัญลักษณ์",
            percentbadgecolor: "สีตราสัญลักษณ์",
            sspercentbadgecolor: "สีตราสัญลักษณ์",
            percentbadgefontcolor: "สีตัวอักษรของป้าย",
            sspercentbadgefontcolor: "สีตัวอักษรของป้าย",
            percentbadgefontsize: "ขนาดตราสัญลักษณ์",
            sspercentbadgefontsize: "ขนาดตราสัญลักษณ์",
            percentbadgeroundness: "ความโค้งของตราสัญลักษณ์",
            sspercentbadgeroundness: "ความโค้งของตราสัญลักษณ์",
            percentbadgex: "การเลื่อนในแนวนอน",
            sspercentbadgex: "การเลื่อนในแนวนอน",
            percentbadgey: "การเลื่อนในแนวตั้ง",
            sspercentbadgey: "การเลื่อนในแนวตั้ง",
            percentbadgeimg: "ใช้ไอคอน",
            sspercentbadgeimg: "ใช้ไอคอน",
            percentbadgeimgbronze: "ความหายาก: > $semirarity",
            sspercentbadgeimgbronze: "ความหายาก: > $semirarity",
            percentbadgeimgsilver: "ความหายาก: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "ความหายาก: < $semirarity & > $rarity",
            percentbadgeimggold: "ความหายาก: < $rarity",
            sspercentbadgeimggold: "ความหายาก: < $rarity",
            resetpbimgs: "รีเซ็ตไอคอนเหรียญ",
            elemsmatch: "ตรงตามการตั้งค่าตัวปรับแต่ง",
            ssdisplay: "ตัวอย่างภาพหน้าจอ"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `เพิ่ม <span class="hl">AppID</span> ของเกมใด ๆ เพื่อเปลี่ยน <span class="hl">ธีม</span> โดยอัตโนมัติเมื่อถูกตรวจพบ`,
                `สามารถเลือก <span class="hl">ธีม</span> ที่บันทึกไว้สำหรับแต่ละประเภทการแจ้งเตือน พร้อมกับจอแสดงผลที่ต้องการใช้เป็น <span class="hl">แหล่งภาพหน้าจอ</span>`,
                `<span class="hl" id="appidhelp"><u>ฉันจะหาข้อมูล AppID ของเกม Steam ได้อย่างไร?</u></span>`
            ],
            themeswitchnew: "การเปลี่ยนแปลงอัตโนมัติใหม่",
            themeswitchnewsub: [
                `ป้อน <span class="hl">AppID</span> ของเกม พร้อมกับจอแสดงผลที่ต้องการใช้เป็น <span class="hl">แหล่งภาพหน้าจอ</span>`,
                `เลือก <span class="hl">ธีม</span> ที่จะเปลี่ยนไปยังสำหรับแต่ละประเภทการแจ้งเตือนเมื่อตรวจพบ <span class="hl">AppID</span> ของเกมนี้`
            ],
            themeswitchedit: "แก้ไขการสลับอัตโนมัติ",
            themeswitcheditsub: [
                `แก้ไขจอภาพที่ต้องการใช้เป็น <span class="hl">แหล่งที่มาของภาพหน้าจอ</span> สำหรับ <span class="hl">AppID</span> ของเกมนี้`,
                `เปลี่ยน <span class="hl">ธีม</span> ที่จะสลับไปสำหรับแต่ละประเภทการแจ้งเตือนเมื่อพบ <span class="hl">AppID</span> ของเกมนี้`
            ],
            themes: "ธีม",
            src: "แหล่งภาพหน้าจอ",
            themedeleted: "ลบธีมแล้ว"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `ดูเหมือนว่าคุณพยายามเปิดใช้งานตัวเลือก <span class="hl">${opt}</span> แต่ตัวเลือกนี้ไม่สามารถเปิดใช้งานได้หากไม่ได้ติดตั้งแพ็กเกจ <code class="dialogcode">${dep}</code> ก่อน`,
    `กรุณารัน <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> เพื่อติดตั้งการพึ่งพานี้`
]