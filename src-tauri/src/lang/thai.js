export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "ไม่พบผู้ใช้",
                tt: "ผู้ใช้ Steam ที่กำลังติดตามความสำเร็จ"
            },
            gamelbl: {
                elem: gameName ? gameName : "ไม่พบเกม",
                tt: "เกมที่กำลังติดตามความสำเร็จ"
            },
            previewbtn: {
                tt: "ดูตัวอย่างเสียงที่เลือก"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "ค่าเริ่มต้น (ไม่ได้เลือกไฟล์เสียง)" : custom.sounddir ? custom.sounddir : "ค่าเริ่มต้น (ไม่ได้เลือกโฟลเดอร์เสียง)"
            },              
            soundmodelbl: {
                elem: "โหมดเสียง:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "ไฟล์" : "สุ่ม"
            },
            togglemain: {
                elem: "หลัก",
                tt: "การแจ้งเตือนความสำเร็จหลัก"
            },
            togglerare: {
                elem: "หายาก",
                tt: "การแจ้งเตือนความสำเร็จหายาก"
            },
            toggleplat: {
                elem: "100%",
                tt: "การแจ้งเตือนความสำเร็จ 100%"
            },
            progresscirclewrapper: {
                tt: "แสดงตัวอย่างการแจ้งเตือนที่กำหนดเอง"
            },
            testbtnwrapper: {
                elem: "แสดงการแจ้งเตือนทดสอบ",
                tt: "แสดงตัวอย่างการแจ้งเตือนที่กำหนดเอง",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "ปรับแต่ง...",
                tt: "เปิดเมนูการปรับแต่งการแจ้งเตือน",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam ไม่ได้ทำงาน"
            },
            updatebtn: {
                tt: "มีการอัปเดตใหม่"
            },
            kofibtn: "บริจาคบน Ko-Fi!",
            discordbtn: "เข้าร่วมกลุ่ม Discord!",
            githubbtn: "รายงานปัญหาบน GitHub!",
            settingstitlelbl: {
                elem: "ตั้งค่า"
            },
            configuration: {
                elem: "การกำหนดค่า",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "ภาษา",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "ระบบปฏิบัติการ",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "การแจ้งเตือน",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "ภาพหน้าจอ",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "สามารถใช้งานได้",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "อื่นๆ",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "เวอร์ชัน"
            },            
            apikeybtn: {
                tt: "คลิกที่นี่เพื่อรับ Steam Web API Key ของคุณ"
            },
            apikey: {
                placeholder: "กรอก API Key ของคุณ",
                tt: "Steam Web API key ที่เชื่อมโยงกับบัญชี Steam ของคุณ"
            },
            eyebtn: {
                tt: "สลับการมองเห็น API Key"
            },
            apikeylbl: {
                elem: "รับ API Key"
            },
            steam64idbtn: {
                tt: "คลิกที่นี่เพื่อรับ Steam64 ID ของคุณ"
            },
            steam64id: {
                placeholder: "กรอก Steam64 ID ของคุณ",
                tt: "Steam64 ID ที่เชื่อมโยงกับบัญชี Steam ของคุณ"
            },
            steam64idlbl: {
                elem: "รับ Steam64 ID"
            },
            switchaccountspan: {
                elem: "เปลี่ยนบัญชี"
            },
            switchaccountbtn: {
                tt: "สลับระหว่างบัญชี Steam ที่เชื่อมโยง"
            },
            testconnectionlbl: {
                elem: "ทดสอบการเชื่อมต่อ",
                tt: "ทดสอบการเชื่อมต่อกับ Steam Web API ของคุณ"
            },
            lang: {
                tt: "ตั้งค่าภาษาสำหรับอินเตอร์เฟซและการแจ้งเตือน"
            },            
            desktop: {
                elem: "สร้างทางลัด",
                tt: "สร้างทางลัดบนเดสก์ทอป",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "เริ่มต้นพร้อม Windows",
                tt: "เรียกใช้แอปโดยอัตโนมัติเมื่อ Windows เริ่มต้น",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "เริ่มต้นเป็นรูปแบบย่อ",
                tt: "ย่อแอปเข้าไปที่ถาดระบบหลังจากเปิดใช้งาน",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "ปิดการใช้งานฮาร์ดแวร์แอคเซลเลอร์",
                tt: "ปิดใช้งานฮาร์ดแวร์แอคเซลเลอร์สำหรับหน้าต่างแอป",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "โหมด Lite",
                tt: "ปิดใช้งานหน้าต่างแอปหลักเพื่อประหยัดทรัพยากรระบบ ตัวเลือกเบาๆ จะยังคงพร้อมใช้งานผ่านไอคอนถาดระบบ",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "เปอร์เซ็นต์ความหายาก",
                tt: `แสดงเฉพาะความสำเร็จที่มีเปอร์เซ็นต์ความสำเร็จทั่วโลกต่ำกว่าตัวเลขนี้ในการแจ้งเตือน "หายาก"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "โหมดเสียงเท่านั้น",
                tt: "ปิดใช้งานการแจ้งเตือน แต่จะเล่นเสียงที่เลือกเมื่อปลดล็อกความสำเร็จ",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "แสดงเปอร์เซ็นต์ปลดล็อกทั้งหมด",
                tt: "แสดงเปอร์เซ็นต์ปลดล็อกทั่วโลกภายในประเภทการแจ้งเตือนทั้งหมด",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "ทำซ้ำไปยังหน้าต่างภายนอก",
                tt: "ทำซ้ำไปยังหน้าต่างภายนอก",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "แสดงหน้าต่างสถิติความสำเร็จ",
                tt: "แสดงหน้าต่างสถิติความสำเร็จ",
                query: ".sanboxlbl"
            },
            track: {
                elem: `แสดงการแจ้งเตือน "กำลังติดตาม"`,
                tt: `สลับการแจ้งเตือน "กำลังติดตาม" เมื่อเริ่มเกม`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "ทางลัดการแจ้งเตือน",
                tt: "ตั้งค่าทางลัดบนแป้นพิมพ์เพื่อเรียกใช้การแจ้งเตือนทดสอบ",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "ตั้งค่าทางลัดเพื่อเรียกใช้การแจ้งเตือนทดสอบสำหรับประเภทนี้"
            },
            sctabmain: {
                tt: "ทางลัดการแจ้งเตือนหลัก"
            },
            sctabrare: {
                tt: "ทางลัดการแจ้งเตือนที่หายาก"
            },
            sctabplat: {
                tt: "ทางลัดการแจ้งเตือน 100%"
            },
            screenshotmode: {
                tt: "เลือกโหมดสำหรับการรับภาพหน้าจอความสำเร็จอัตโนมัติ"
            },
            displayscreenshot: {
                elem: "แสดงภาพหน้าจอในการแจ้งเตือน",
                tt: "แสดงภาพตัวอย่างของภาพหน้าจอในการแจ้งเตือนความสำเร็จ",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "คีย์ไบน์ภาพหน้าจอ Steam",
                tt: "จับคีย์ไบน์ของลูกค้า Steam เพื่อใช้ภาพหน้าจอ Steam ภายในเมื่อปลดล็อกความสำเร็จ",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "แท็บแสดงการแจ้งเตือนหลัก"
            },
            ovtabrare: {
                tt: "แท็บแสดงการแจ้งเตือนหายาก"
            },
            ovtabplat: {
                tt: "แท็บแสดงการแจ้งเตือน 100%"
            },
            monitor: {
                elem: "จอภาพ",
                tt: "เลือกจอภาพที่จะใช้เป็นแหล่งอ้างอิงของภาพหน้าจอ",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "ตำแหน่ง",
                tt: "ตั้งค่าตำแหน่งของการแสดงผลแจ้งเตือน",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "เส้นทาง",
                tt: "ตั้งค่าเส้นทางที่ภาพหน้าจอจะถูกบันทึก",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "แสดงตัวอย่าง",
                tt: `แสดงตัวอย่างการแจ้งเตือน`,
                query: "label"
            },
            noanim: {
                elem: "ปิดใช้งานภาพเคลื่อนไหวของหน้าต่าง",
                tt: "ปิดใช้งานภาพเคลื่อนไหวของการเปลี่ยนแปลงภายในหน้าต่างแอป",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "เปิดใช้งานการสนับสนุน NVDA",
                tt: "คัดลอกเนื้อหาการแจ้งเตือนไปยังคลิปบอร์ดเพื่ออ่านโดยซอฟต์แวร์อ่านหน้าจอ NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "แสดงคำแนะนำ",
                tt: "สลับคำแนะนำเมื่อนำเมาส์ไปวางบนองค์ประกอบแอป",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "แสดงเครื่องมือผู้พัฒนาการแจ้งเตือน",
                tt: "เปิดแผงเครื่องมือผู้พัฒนาของการแจ้งเตือนเมื่อเรียกใช้งาน",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "ดูนโยบายความเป็นส่วนตัว",
                tt: "ดูนโยบายความเป็นส่วนตัวของ Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "เข้าร่วมช่องทางเบต้า",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "เปิดบันทึกแอป",
                tt: "ดูและแบ่งปันเนื้อหาของบันทึกแอป",
                query: "label"
            },
            resetbtn: {
                elem: "รีเซ็ตแอป",
                tt: "ลบข้อมูลทั้งหมดและเริ่มต้นใหม่แอป",
                query: "label"
            },            
            customiserplaystate: {
                tt: "หยุด/เล่นอนิเมชั่นการแจ้งเตือน"
            },
            customiserreplay: {
                tt: "เล่นอนิเมชั่นการแจ้งเตือนอีกครั้ง"
            },
            customisersavepreset: {
                tt: "บันทึกการกำหนดค่าปัจจุบันเป็น Preset การแจ้งเตือนใหม่"
            },
            tabbtnnext: {
                tt: "ถัดไป"
            },
            tabbtnprev: {
                tt: "ย้อนกลับ"
            },
            notificationpreset: {
                elem: "ตั้งค่าล่วงหน้า",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "ตั้งค่าการแจ้งเตือนล่วงหน้า",
                tt: "เลือก Preset การแจ้งเตือนเพื่อกำหนดค่าแต่งตั้ง",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "อนิเมชั่นไอคอนหายาก",
                tt: `สลับอนิเมชั่นของพื้นหลังไอคอน`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "รายละเอียดทั้งหมด",
                tt: `แสดงรายละเอียดทั้งหมดของการแจ้งเตือนที่มีอยู่`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "เวลาแสดง",
                tt: "ระยะเวลาที่แจ้งเตือนจะแสดง",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "มาตราส่วน",
                tt: "ขนาดของการแจ้งเตือน<br><i>*ไม่แสดงผลในหน้าต่างพรีวิว</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "ข้อความแบบกำหนดเอง",
                tt: "แสดงข้อความแบบกำหนดเองในการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "ใช้ชื่อเกม",
                tt: "แสดงชื่อของเกมปัจจุบันในการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            style: {
                elem: "สไตล์",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "สไตล์พื้นหลัง",
                tt: "ตั้งค่าสไตล์ของพื้นหลังในการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "มุมสีแบบไล่ระดับ",
                tt: "ตั้งค่ามุมของการไล่ระดับสี",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "รูปภาพพื้นหลัง",
                tt: "เลือกไฟล์รูปภาพเพื่อตั้งเป็นพื้นหลังการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "ความสว่างของภาพเกม",
                tt: "ตั้งค่าความสว่างของพื้นหลังภาพเกม",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "ความโค้ง",
                tt: "ตั้งค่าความโค้งของมุมการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "ขนาดตัวอักษร",
                tt: "ตั้งค่าขนาดตัวอักษร",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "ความทึบ",
                tt: "ตั้งค่าความทึบของการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "พื้นหลังเท่านั้น",
                tt: "ใช้เฉพาะความทึบกับพื้นหลังเท่านั้น ทิ้งข้อความและภาพโดยสมบูรณ์",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "สี",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "สีหลัก",
                tt: "ตั้งค่าสีหลักของการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "สีรอง",
                tt: "ตั้งค่าสีรองของการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "สีข้อความ",
                tt: "ตั้งค่าสีของตัวอักษร",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "เส้นขอบข้อความ",
                tt: "ใส่เส้นขอบให้กับข้อความในการแจ้งเตือนทั้งหมด",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "สีเส้นขอบ",
                tt: "ตั้งค่าสีของเส้นขอบข้อความ",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "เงาข้อความ",
                tt: "ใส่เงาให้กับข้อความในการแจ้งเตือนทั้งหมด",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "สีเงา",
                tt: "ตั้งค่าสีของเงาข้อความ",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "ไอคอน",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "ความโค้งของไอคอน",
                tt: "ตั้งค่าความโค้งของไอคอนในการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "ใช้ไอคอนกำหนดเอง",
                tt: `ใช้ไฟล์รูปภาพเป็นไอคอนกำหนดเอง`,
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "ไอคอนกำหนดเอง",
                tt: `เลือกไฟล์รูปภาพเพื่อตั้งเป็นไอคอนกำหนดเอง`,
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `รีเซ็ตไอคอนที่กำหนดเอง`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "ใช้ไอคอนที่กำหนดเอง 100%",
                tt: `ใช้ไฟล์รูปภาพเป็นไอคอนที่กำหนดเอง 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "ไอคอนที่กำหนดเอง 100%",
                tt: `เลือกไฟล์รูปภาพเพื่อตั้งค่าให้เป็นไอคอนที่กำหนดเอง 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `รีเซ็ตไอคอนที่กำหนดเอง 100%`,
                query: ".sanboxlbl"
            }, 
            usegameicon: {
                elem: "ใช้ไอคอนเกม",
                tt: `ใช้ไอคอนของเกมปัจจุบัน`,
                query: ".sanboxlbl"
            },
            position: {
                elem: "ตำแหน่ง",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "ตำแหน่งบนหน้าจอ",
                tt: `ตั้งค่าตำแหน่งของการแจ้งเตือนบนหน้าจอ`,
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "ใช้ตำแหน่งกำหนดเอง",
                tt: "ใช้ตำแหน่งกำหนดเองสำหรับการแจ้งเตือน",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "ตั้งค่าตำแหน่ง",
                tt: "ตั้งค่าตำแหน่งกำหนดเองสำหรับการแจ้งเตือน",
                query: "label"
            },
            animdir: {
                elem: "ทิศทางการเคลื่อนไหว",
                tt: "ตั้งค่าทิศทางของการเคลื่อนไหวของการแจ้งเตือน",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "นโยบายความเป็นส่วนตัว"
            },
            ppusagetitle: {
                elem: "การใช้ข้อมูล Steam Web API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier ใช้ <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> ของ Valve เพื่อเรียกดูและแสดงข้อมูลที่เกี่ยวข้องกับบัญชี Steam ของผู้ใช้ ผ่านความสัมพันธ์ระหว่าง Steam API Key/Steam64 ID ที่ผู้ใช้ให้กับแอปพลิเคชันนี้ ข้อมูลเหล่านี้รวมถึง:`
            },
            ppstats: {
                elem: "สถิติการปิดและปลดล็อกความสำเร็จ"
            },
            ppusername: {
                elem: "ชื่อผู้ใช้ Steam ของคุณ"
            },
            ppsteamgames: {
                elem: "เกม Steam ที่คุณเล่น"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier อาจใช้ข้อมูลเพิ่มเติมจาก Steam Web API ในอนาคตเพื่อให้มีคุณลักษณะและการอัปเดตแอปพลิเคชันเพิ่มเติม"
            },
            ppkey64title: {
                elem: "การใช้งาน Steam API Key/Steam64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier ต้องการให้ผู้ใช้ป้อน Steam API Key/Steam64 ID เพื่อเข้าถึง Steam Web API ในลักษณะการตรวจสอบสิทธิ์"
            },
            ppnoauth: {
                elem: "หากไม่มีข้อมูลเหล่านี้ เชื่อมโยงเว็บ (ที่ Valve ให้ไว้สำหรับการเข้าถึง Steam Web API) ที่ใช้ในการเรียกดูข้อมูลที่เกี่ยวข้องกับบัญชี Steam ของผู้ใช้ - รวมถึงข้อมูลความสำเร็จ - จะไม่สามารถเข้าถึงได้"
            },
            ppstoragetitle: {
                elem: "การเก็บข้อมูล Steam Web API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier จัดเก็บข้อมูล Steam Web API ชั่วคราวไว้ในเครื่อง PC ของผู้ใช้เพื่อใช้ในแอปพลิเคชันเท่านั้น การจัดเก็บข้อมูลชั่วคราวเหล่านี้ได้รับการออกแบบมาเพื่อให้ Steam Achievement Notifier เท่านั้นที่จะใช้ และในสถานการณ์ปกติ ข้อมูล Steam Web API ที่ไม่ถาวรทั้งหมดจะถูกล้างจากการเก็บข้อมูลในเครื่อง PC ทันทีเมื่อออกจากแอปพลิเคชัน"
            },
            pppersist: {
                elem: "ข้อมูลถาวรที่จัดเก็บในอุปกรณ์ของผู้ใช้รวมถึงเฉพาะข้อมูลที่ถูกจัดเก็บโดยแอปพลิเคชันเพื่อความสะดวกสบายของผู้ใช้ เช่น Steam Web API Key และ Steam64 ID ของผู้ใช้"
            },
            ppdelete: {
                elem: "ข้อมูลเหล่านี้ยังสามารถลบด้วยตนเองได้ทุกเมื่อตามความจำเป็น ไฟล์ที่สร้างขึ้นโดย Steam Achievement Notifier ตั้งอยู่ในไดเรกทอรีต่อไปนี้:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "ไม่รองรับในปัจจุบัน"
            },
            ppcollecttitle: {
                elem: "ทัศนคติต่อการสะสมข้อมูล"
            },            
            ppnosend: {
                elem: "Steam Achievement Notifier จะไม่<b>เคย</b>ส่งหรือเก็บข้อมูลผู้ใช้นอกเหนือจากระบบไฟล์ในเครื่อง PC ของผู้ใช้โดยไม่ได้รับอนุญาตโดยชัดแจ้งจากผู้ใช้ เช่น ข้อมูลใด ๆ ที่ได้รับผ่าน Steam Web API เพื่อใช้ในแอปพลิเคชัน รวมถึง Steam API Key/Steam64 ID ที่ผู้ใช้ให้แก่แอปพลิเคชันเพื่อเข้าถึง Steam Web API"
            },
            ppconsent: {
                elem: "ผ่านการยืนยันความยินยอมและการใช้งานที่ต่อมาของฟีเจอร์ที่มีอยู่หรือที่จะเพิ่มเติมในอนาคตที่ออกแบบมาเพื่อส่งข้อมูลไปยังภายนอก การอนุญาตถูกต้องจากผู้ใช้เป็นที่สมมุติและถูกให้ไว้ ในกรณีเหล่านี้ผู้ใช้จะได้รับข้อมูลเกี่ยวกับลักษณะของข้อมูลที่จะส่งไป และจะถูกแสดงให้ผู้ใช้ยืนยันความยินยอมในการส่งข้อมูลไปภายนอกแอปพลิเคชันเสมอ"
            },
            ppexclude: {
                elem: "Steam Achievement Notifier ปลอดจากวิธีใด ๆ ในการเข้าถึงข้อมูลภายนอก ดูหรือสะสมข้อมูลใด ๆ ที่ผู้ใช้ให้แก่แอปพลิเคชัน แต่ผ่านทางฟีเจอร์ที่มีอยู่หรือที่จะเพิ่มเติมในอนาคต แอปพลิเคชันอาจสามารถส่งข้อมูลไปยังภายนอกแทนผู้ใช้ แต่เฉพาะในกรณีที่ผู้ใช้ยินยอมที่จะทำเช่นนั้นเท่านั้น"
            },
            pprequests: {
                elem: "คำขอการเข้าถึงข้อมูลจาก Steam Web API ทำโดยตนเองภายในแอปพลิเคชันโดยใช้เมธอดที่มีอยู่ เช่นการทำงานของเบราว์เซอร์เว็บ คำขอเหล่านี้ประกอบด้วย Steam API Key/Steam64 ID ของผู้ใช้ตามที่ Steam Web API ต้องการ แต่ไม่มีการเปิดเผยให้แอปพลิเคชันอื่น ๆ เข้าถึงหรือแอบแฝงไว้"
            },
            ppusertitle: {
                elem: "ความรับผิดชอบของผู้ใช้"
            },
            ppsteamtou: {
                elem: `ด้วยการดาวน์โหลดและใช้เวอร์ชันที่เผยแพร่อย่างเป็นทางการของ Steam Achievement Notifier ผ่าน <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">เก็บรักษาเรื่องราว GitHub อย่างเป็นทางการ</span> คุณผู้ใช้ เป็นผู้ที่ยอมรับข้อกำหนดการใช้งาน Steam Web API ส่วนที่ 7 และ 8 ใน<span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">ข้อกำหนดการใช้งาน Steam Web API</span>`
            },         
            gamedetails: "รายละเอียดเกม",
            mustbepublic: "ต้องตั้งค่าเป็นสาธารณะ",            
            nosoundfile: "ค่าเริ่มต้น (ไม่ได้เลือกไฟล์เสียง)",
            nosoundfolder: "ค่าเริ่มต้น (ไม่ได้เลือกโฟลเดอร์เสียง)",
            file: "ไฟล์",
            randomised: "สุ่ม",            
            audioselectdialog: `เลือกไฟล์เสียง ${custom.mode === "file" ? "ไฟล์" : "โฟลเดอร์"}`,
            imgselectdialog: `เลือกไฟล์รูปภาพ`,
            unsupported: "ไฟล์ที่ไม่รองรับ!",
            novalidaudiofiles: "ไม่มีไฟล์เสียงที่ถูกต้อง!",
            nolocate: "ไม่สามารถระบุตำแหน่งของไฟล์ได้!",
            switchaccountstitle: "สลับบัญชี",
            noaccounts: "เพิ่มบัญชีเพื่อเริ่มต้น!",
            connecting: "กำลังเชื่อมต่อ...",
            connected: "เชื่อมต่อแล้ว",
            testsuccessuser: `คุณพร้อมใช้งานแล้ว`,
            testsuccess1: `ตรวจสอบให้แน่ใจว่า <span>รายละเอียดของเกม</span> ของคุณตั้งค่าเป็น <span>สาธารณะ</span> ใน <a href="${privacysettings}">การตั้งค่าความเป็นส่วนตัวของ Steam</a>`,
            testsuccess2: `ตรวจสอบโหมดการแสดงผลในเกมของคุณว่าตั้งค่าเป็น <span>Borderless</span> เพื่อให้การแจ้งเตือนแสดงข้างบนหน้าต่างเกม`,
            noapikeytitle: "ไม่มี API Key",
            noapikeytxt: "โปรดป้อน API Key ของคุณ",
            noapikeyhint: `คลิกที่ไอคอน <img src="./icon/key.svg" alt=""> เพื่อรับ API Key ของคุณ`,
            nosteam64idtitle: "ไม่มี Steam64 ID",
            nosteam64idtxt: "โปรดป้อน Steam64 ID ของคุณ",
            nosteam64idhint: `คลิกที่ไอคอน <img src="./icon/id.svg" alt=""> เพื่อรับ Steam64 ID ของคุณ`,
            invalidapikeytitle: "API Key ไม่ถูกต้อง!",
            invalidapikeymsg: "ไม่สามารถเข้าถึง Steam Web API ด้วย API Key ที่ระบุได้",
            invalidapikeydetail1: "ตรวจสอบว่า API Key ของคุณถูกต้องหรือไม่",
            invalidapikeydetail2: "สร้าง API Key ใหม่สำหรับบัญชีของคุณ",
            invalidsteam64idtitle: "Steam64 ID ไม่ถูกต้อง!",
            invalidsteam64idmsg: "ไม่พบบัญชี Steam ที่เกี่ยวข้องกับ Steam64 ID ที่ระบุ",
            invalidsteam64iddetail1: "ตรวจสอบค่า Steam64 ID ที่คุณให้ว่าเป็นค่าที่ถูกต้องสำหรับบัญชี Steam ของคุณ",
            nonetworkfound: "ไม่พบการเชื่อมต่อเครือข่ายที่ใช้งานอยู่",
            connecttonetwork: "เชื่อมต่อคอมพิวเตอร์ของคุณกับเครือข่ายและลองอีกครั้ง",
            testdefaulterrortitle: "เกิดข้อผิดพลาด!",
            testdefaulterrormsg: "เกิดข้อผิดพลาดในการเชื่อมต่อกับ Steam Web API",
            testdefaulterrordetail1: "โปรดรายงานปัญหานี้ทาง Discord หรือ GitHub!",
            sspath: "เลือกที่เก็บภาพหน้าจอ",
            wronguser: user ? `${user} ไม่ได้ลงชื่อเข้าใช้ Steam!` : "ไม่พบบัญชีผู้ใช้ที่เชื่อมโยง!",
            switchuser: "คลิกที่นี่เพื่อสลับบัญชี",
            trackingfailed: "การติดตามล้มเหลว!",
            checkapplog: "ตรวจสอบบันทึกแอปพลิเคชันเพื่อดูรายละเอียด",
            soon: "เร็ว ๆ นี้!",
            gamecomplete: "เสร็จสิ้น 100%",
            gametitle: "ชื่อเกม",
            achievementunlocked: "ปลดล็อกดัชนีความสำเร็จ",
            achievementtitle: "ชื่อดัชนีความสำเร็จ",
            allachievements: "คุณปลดล็อกดัชนีความสำเร็จทั้งหมดแล้ว!",
            achievementdesc: "คำอธิบายดัชนีความสำเร็จ",
            show: "แสดง",
            quit: "ออก",
            off: "ปิด",
            steamss: "สกรีนช็อตของ Steam ในเกม",
            overlayss: "สกรีนช็อตพร้อมกับการแจ้งเตือนทับภาพ",
            match: "ปรับแต่งตามต้องการ",
            topleft: "มุมบนซ้าย",
            topcenter: "ตรงกลางด้านบน",
            topright: "มุมบนขวา",
            bottomleft: "มุมล่างซ้าย",
            bottomcenter: "ตรงกลางด้านล่าง",
            bottomright: "มุมล่างขวา",
            solid: "สีทึบ",
            gradient: "ไล่ระดับสี",
            bgimg: "ภาพพื้นหลัง",
            gameart: "ภาพเกม",
            up: "ขึ้น",
            down: "ลง",
            left: "ซ้าย",
            right: "ขวา",
            tracking: "กำลังติดตามอยู่",
            inuse: "ใช้โดย",
            invalidshortcut: "ทางลัดไม่ถูกต้อง"     
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "เลือกไฟล์เสียงที่จะเล่นเมื่อปลดล็อกดัชนีความสำเร็จ" : "เลือกโฟลเดอร์ที่มีไฟล์เสียงเพื่อเล่นแบบสุ่มเมื่อปลดล็อกดัชนีความสำเร็จ")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "นี่คือบันทึกของสิ่งที่เกิดขึ้นตั้งแต่แอปเริ่มทำงานเมื่อ"
            },
            copylbl: {
                elem: "คัดลอกเนื้อหาบันทึก"
            },
            openlbl: {
                elem: "สร้างไฟล์บันทึก"
            },
        }

        return translations
    }
}