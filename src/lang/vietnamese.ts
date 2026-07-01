export const translations = {
    global: {
        main: "Chính",
        semi: "Bán",
        rare: "Hiếm",
        plat: "100%",
        trophymain: "Đồng",
        trophysemi: "Bạc",
        trophyrare: "Vàng",
        trophyplat: "Bạch kim",
        test: "Thông báo kiểm tra",
        topleft: "Trên Trái",
        topcenter: "Trên Giữa",
        topright: "Trên Phải",
        bottomleft: "Dưới Trái",
        bottomcenter: "Dưới Giữa",
        bottomright: "Dưới Phải",
        ok: "OK",
        preview: "Xem Trước",
        save: "Lưu",
        back: "Quay Lại",
        edit: "Chỉnh sửa",
        lockedby: "Đã bị khóa bởi $lock",
        settings: "Cài Đặt",
        appversion: "Phiên Bản Ứng Dụng",
        image: "Hình Ảnh",
        audio: "Âm Thanh",
        folder: "Thư Mục",
        font: "Font Chữ",
        select: "Chọn",
        gametitle: "Tên Trò Chơi",
        congrats: "Chúc Mừng!",
        achievementunlocked: "Thành Tích Mở Khóa",
        gamecomplete: "Hoàn Thành 100%",
        achievementdesc: "Nhấp vào nút để hiển thị thông báo thử nghiệm",
        gamecompletedesc: "Bạn đã mở khóa tất cả các thành tích!",
        defaultcustomfont: "Mặc Định (Không Chọn Font)",
        defaultsoundfile: "Mặc Định (Không Chọn File)",
        defaultsounddir: "Mặc Định (Không Chọn Thư Mục)",
        nowtracking: "Hiện Đang Theo Dõi Thành Tích Cho:",
        nopreview: "Xem trước không khả dụng cho hệ điều hành cục bộ",
        options: "Tùy chọn",
        resetwindow: "Đặt lại Cửa sổ",
        show: "Hiển thị",
        exit: "Thoát",
        donotshowagain: "Không hiển thị hộp thoại này nữa",
        releasegame: "Giải phóng Trò chơi",
        releasegamesub: [
            `Khởi động lại quá trình Worker nền và giải phóng trò chơi hiện tại khỏi việc được theo dõi`,
            `Hãy thử tùy chọn này nếu bạn vừa mới đóng một trò chơi nhưng Steam vẫn hiển thị nó đang chạy, hoặc nếu Steam Achievement Notifier vẫn hiển thị đang theo dõi một trò chơi đã được đóng`
        ],
        noupdateavailable: "Không có bản cập nhật nào khả dụng",
        latestversion: "Phiên bản mới nhất đã được cài đặt",
        missingdeps: "Thiếu phụ thuộc",
        restartapp: "Khởi động lại ứng dụng",
        restartappsub: [
            `Nếu mọi thứ không hoạt động đúng cách, hãy sử dụng tùy chọn này để đóng và mở lại ứng dụng`,
            `Nếu vấn đề vẫn tiếp tục sau khi khởi động lại ứng dụng, xin vui lòng xem xét báo cáo nó bằng cách sử dụng các liên kết tích hợp trên màn hình chính`
        ],
        suspend: "Tạm dừng",
        resume: "Tiếp tục",
        new: "Mới...",
        nodata: "Không có dữ liệu",
        webhookunlockmsg: "$user đã mở khóa một thành tựu",
        webhookunlockmsgplat: "$user đã mở khóa tất cả thành tích",
        webhookingame: "trong $gamename",
        notconnected: "Chưa kết nối",
        raloghelp: "Trò chơi của tôi không được phát hiện",
        raenablelog: `Tệp nhật ký của trình giả lập`,
        raenablelogsub: [
            `Để truy cập các sự kiện nội bộ của trò chơi (chẳng hạn như trạng thái hiện tại của trò chơi, thông tin mở khóa thành tích, v.v.), cần bật ghi log vào một <span class="hl">file log</span> <u>phải được bật</u> trong bất kỳ trình giả lập đã chọn nào.<br><br>Bất kỳ trình giả lập nào đã chọn <u>phải sử dụng <span class="hl">file log</span> này</u> làm giá trị <span class="hl">Đường dẫn đến File Log</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Cài đặt > Ghi log</span> cần được cấu hình với các cài đặt sau:
                    <br>
                    <ul>
                        <li><span class="hllb">Độ chi tiết của ghi log</span>: <span class="hlgreen">BẬT</span></li>
                        <li><span class="hllb">Cấp độ ghi log của giao diện người dùng</span>: <span class="hlgreen">1 (Thông tin)</span></li>
                        <li><span class="hllb">Ghi log vào file</span>: <span class="hlgreen">BẬT</span></li>
                        <li><span class="hllb">Thêm dấu thời gian vào các file log</span>: <span class="hlred">TẮT</span></li>
                    </ul>
                    <br>
                    Với cài đặt mặc định, file log <span class="hl">"retroarch.log"</span> được lưu tại:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Xem > Hiển thị Cấu hình Log</span> cần được cấu hình với các cài đặt sau:
                    <br>
                    <ul>
                        <li><span class="hllb">Độ chi tiết</span>: <span class="hlgreen">Thông tin</span></li>
                        <li><span class="hllb">Kết quả ghi log</span> > <span class="hlgreen">Ghi vào File</span></li>
                        <li><span class="hllb">Các loại log</span> > <span class="hlgreen">Thành tích (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Với cài đặt mặc định, file log <span class="hl">"dolphin.log"</span> được lưu tại một trong các vị trí sau:
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
                    <span class="hl">PCSX2 > Công cụ > Bật ghi vào file</span> phải được bật
                    <br>
                    <br>
                    Với cài đặt mặc định, <span class="hl">"emulog.txt"</span> được lưu ở:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> phải được <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>tải xuống</u></span> và di chuyển vào <span class="hl">thư mục cài đặt của Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Cài đặt > Thành tích > RAIntegration (Chỉ dành cho nhà phát triển)</span> phải được bật
                    <br>
                    <br>
                    Sử dụng cài đặt cài đặt mặc định, <span class="hl">"RALog.txt"</span> được lưu tại:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> phải được bật và cấu hình với các cài đặt sau:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Với cài đặt mặc định khi cài đặt, <span class="hl">"log.txt"</span> được lưu tại:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta không được hỗ trợ",
        betaunsupportedsub: [
            "Một phiên bản mới của Steam Achievement Notifier đã được phát hành!",
            `<u>Phiên bản Beta này không còn được hỗ trợ</u>. Vui lòng tải và cài đặt phiên bản chính thức mới nhất qua Github bằng cách sử dụng nút <span class="hl">Releases</span> bên dưới.`,
            "Cảm ơn bạn đã thử nghiệm! 💜"
        ],
        betaghreleases: "Phiên bản phát hành",
        checkapplog: "Vui lòng kiểm tra Nhật ký Ứng dụng để biết chi tiết.",
        workercrash: "Worker đã gặp sự cố!",
        workercrashsub: "Nhấn vào đây để khởi động lại Worker và thử theo dõi trò chơi lại"
    },
    app: {
        content: {
            game: "Không Phát hiện Trò chơi",
            customise: "Tùy chỉnh",
            test: "Hiển thị Thông báo Kiểm tra"
        }
    },
    settings: {
        language: {
            title: "Ngôn ngữ",
            content: {
                steamlang: "Dịch thành tích sang ngôn ngữ Steam",
                maxsteamlangretries: "Số lần thử dịch tối đa"
            }
        },
        os: {
            title: "Hệ điều hành",
            content: {
                desktop: "Tạo Phím tắt Desktop",
                startwin: "Bắt đầu khi đăng nhập",
                startmin: "Bắt đầu Thu nhỏ",
                nohwa: "Vô hiệu hóa Tăng tốc Phần cứng",
                litemode: "Chế độ Nhẹ"
            }
        },
        notifications: {
            title: "Thông báo",
            content: {
                rarity: "Tỷ lệ hiếm",
                semirarity: "Tỷ lệ bạc",
                rareonly: "Chỉ Hiếm",
                all: "Tất cả",
                off: "Tắt",
                showpercent: "Hiển thị Phần trăm",
                soundonly: "Chỉ Âm thanh",
                nowtracking: "Hiển thị Thông báo Theo dõi",
                nowtrackingscale: "Tỷ lệ Theo dõi",
                nowtrackingpos: "Vị trí Theo dõi",
                shortcuts: "Phím tắt Thông báo",
                noiconcache: "Tắt bộ nhớ cache biểu tượng",
                webhooks: "Đăng lên máy chủ Discord",
                webhookurl: `URL Webhook`,
                webhooktypes: "Loại Webhook",
                webhookcaution: `Bằng cách kích hoạt tùy chọn này và cung cấp liên kết Webhook Discord hợp lệ, bạn đồng ý rằng bạn hiểu rằng <u>tất cả thông tin thành tựu và trò chơi của người dùng Steam hiện tại</u> sẽ được đăng lên máy chủ Discord đã chỉ định thông qua liên kết Webhook được cung cấp.<br><br>Nếu bạn không muốn Steam Achievement Notifier đăng thông tin này thay cho bạn, hãy tắt tùy chọn này.`,
                webhooklaststatus: "Trạng thái cuối cùng",
                webhookspoilers: `Thêm thẻ spoiler`,
                webhookappid: `Hiển thị AppID`,
                replaynotify: "Thông báo phát lại",
                replaynotifyshortcut: "Phím tắt phát lại",
                customtrigger: "Kích Hoạt Tùy Chỉnh",
                customtriggershortcut: "Phím Tắt Kích Hoạt",
                customtriggerdelay: "Độ Trễ Kích Hoạt",
                customtriggerusedisplaytime: "Sử Dụng Thời Gian Hiển Thị",
                trophymode: "Chế độ Cúp",
                notifymax: "Số lượng thông báo tối đa", 
                notifyspace: "Khoảng cách giữa các thông báo",
                notify1line: "Giới hạn văn bản trong 1 dòng"
            }
        },
        games: {
            title: "Trò chơi",
            content: {
                linkedgames: "Trò chơi liên kết",
                autoreleasegames: "Trò chơi tự động giải phóng",
                themeswitch: "Tự động chuyển đổi chủ đề",
                exclusionlist: "Danh sách Loại trừ",
                inclusionlist: "Danh sách bao gồm",
                listmode: "Chế độ danh sách",
                exclusion: "Loại trừ",
                inclusion: "Bao gồm"
            }
        },
        media: {
            title: "Đa phương tiện",
            content: {
                steamss: "Chụp Ảnh Màn hình Steam",
                screenshots: "Phương tiện Bổ sung",
                off: "Tắt",
                ssonly: "Chỉ Ảnh Chụp Màn hình",
                overlay: "Chụp Ảnh Màn hình với Chồng Lên Thông báo",
                monitors: "Nguồn Chụp Ảnh Màn hình",
                hdrmode: "Chế độ HDR",
                ovpos: "Vị trí Chồng Lên",
                ovmatch: "Phù hợp với Vị trí Tùy chỉnh",
                ovx: "Lệch Ngang",
                ovy: "Lệch Dọc",                
                ovpath: "Đường dẫn Chụp Ảnh Màn hình",
                ssdelay: "Độ Trễ Chụp Ảnh Màn hình",
                notifyimg: "Hình ảnh thông báo",
                imgpath: "Đường dẫn hình ảnh",
                ssenabled: "Bật",
                ssmode: "Chế độ Chụp màn hình",
                screen: "Màn hình",
                window: "Cửa sổ",
                rauseemudir: "Lưu vào thư mục con của trình giả lập",
                ssext: "Định dạng ảnh chụp màn hình",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Thêm vào Steam"
            }
        },
        streaming: {
            title: "Phát sóng",
            content: {
                extwin: "Thông báo Luồng",
                extwinframerate: "Tốc độ khung hình",
                extwinshow: "Hiển thị cửa sổ",
                audiosrc: "Nguồn Âm thanh",
                notify: "Thông báo",
                app: "Ứng dụng",
                off: "Tắt tiếng",
                statwin: "Cửa sổ thống kê thành tích",
                statwinaot: "Luôn ở trên cùng",
                noachievements: "Không có thành tích để hiển thị",
                startgame: "Bắt đầu một trò chơi để hiển thị thành tích!",
                max: "Tối đa",
                custom: "Tùy chỉnh...",
                statwinshortcut: "Phím tắt Overlay",
                gametimerwin: "Bộ đếm thời gian hoàn thành trò chơi",
                gametimerwinshortcut: "Phím tắt bộ đếm thời gian",
                gametimerwinaot: "Luôn hiển thị trên cùng",
                resetgametimer: "Đặt lại bộ đếm thời gian",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Bạn có chắc chắn không?</span>
                        <span>Thao tác này sẽ đặt lại Bộ đếm thời gian hoàn thành trò chơi của trò chơi hiện tại về 00:00:00.000.</span>
                        <span class="noundo">🛑 Không thể hoàn tác thao tác này!</span>
                    </div>
                `,
                resetgametimerfailed: "Không thể đặt lại bộ đếm thời gian.",
                resetgametimercomplete: "AppID $appid đã được hoàn thành.",
                extwinnotify: "Hiển thị thông báo trên màn hình"
            }
        },
        accessibility: {
            title: "Tiện ích Truy cập",
            content: {
                noanim: "Vô hiệu hóa Hiệu ứng Cửa sổ Ứng dụng",
                noupdatedialog: "Vô hiệu hóa hộp thoại Cập nhật",
                nvda: "Bật hỗ trợ NVDA",
                tooltips: "Hiển thị Chú giải Công cụ",
                showsystrayopts: "Hiện tùy chọn khay hệ thống",
                releaseshortcut: "Phím tắt phát hành trò chơi",
                noshortcuts: "Tắt phím tắt bàn phím"
            }
        },
        advanced: {
            title: "Nâng cao",
            content: {
                pollrate: "Tần suất thăm dò",
                initdelay: "Độ trễ theo dõi",
                releasedelay: "Độ trễ phát hành",
                maxretries: "Số lần thử lại tối đa",
                debug: "Bảng Gỡ lỗi",
                userust: "Chế độ Xử lý Thay thế",
                notifydebug: "Hiển thị thông báo gỡ lỗi",
                workerdebug: "Hiển thị DevTools của Worker",
                exportachdata: "Xuất dữ liệu thành tích",
                lognum: "Tệp nhật ký trước đó", 
                audiocooldown: "Thời gian chờ âm thanh",
                usecustomfiles: "Sử dụng tập tin ứng dụng tùy chỉnh",
                showcustomfiles: "Hiển thị tập tin ứng dụng tùy chỉnh",
                appdatadir: "Hiển thị Thư mục AppData",
                backup: "Sao lưu",
                backuppath: "Đường dẫn sao lưu",
                backupsub: [
                    "Sao lưu nội dung thư mục AppData của ứng dụng đến vị trí đã chọn",
                    "Bản sao lưu này sẽ hoạt động như điểm khôi phục cho trạng thái hiện tại của ứng dụng",
                    `Khôi phục bất kỳ bản sao lưu trước đó nào thông qua <span class="hl">Cài đặt</span> > <span class="hl">Nâng cao</span> > <span class="hl">Khôi phục</span>`
                ],
                backupfailed: "Không thể tạo bản sao lưu.",
                restore: "Khôi phục",
                restoresub: [
                    "Khôi phục nội dung thư mục AppData của ứng dụng từ bản sao lưu trước đó",
                    `Chọn một tệp sao lưu <span class="hl">.sanbak</span> để khôi phục. Tệp này sẽ được giữ nguyên sau khi khôi phục hoàn tất`,
                    "❗ Sau khi xác nhận, ứng dụng sẽ khởi động lại để khôi phục tệp sao lưu đã chọn"
                ],
                restorefailed: "Không thể khôi phục bản sao lưu.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Thời gian chờ giải phóng"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Trình giả lập",
                rauser: "Tên người dùng",
                rakey: "API Key",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Đường dẫn tệp nhật ký",
                rapercenttype: "Loại phần trăm",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Nhập đường dẫn tệp nhật ký",
                logfile: "File Log",
                status: "Trạng thái",
                game: "Trò chơi",
                lastachievement: "ID thành tựu cuối cùng",
                wait: "Đang chờ trình giả lập",
                idle: "Đang chờ sự kiện trò chơi",
                start: "Bắt đầu trò chơi",
                stop: "Dừng trò chơi",
                achievement: "Thành tựu đã mở khóa",
                raui: "Sử dụng giao diện hiển thị trò chơi"
            }
        },
        misc: {
            title: "Điều bổ sung",
            content: {
                colorprofile: "Hồ sơ màu",
                checkforupdates: "Kiểm tra cập nhật",
                log: "Nhật ký ứng dụng",
                reset: "Đặt lại Ứng dụng"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Cài đặt trước",
            content: {
                preset: "Cài đặt thông báo",
                iconanim: "Hoạt ảnh biểu tượng hiếm",
                alldetails: "Hiển thị tất cả chi tiết",
                usepercent: "Sử dụng Phần trăm",
                displaytime: "Thời gian hiển thị",
                scale: "Tỷ lệ",
                customtext: "Văn bản tùy chỉnh",
                usegametitle: "Sử dụng tiêu đề trò chơi",
                customfont: "Phông chữ tùy chỉnh",
                platcustomtext: "Văn bản 100% tùy chỉnh"
            }
        },
        sound: {
            title: "Âm thanh",
            content: {
                soundmode: "Chế độ âm thanh",
                file: "Tệp",
                folder: "Ngẫu nhiên",
                soundfile: "Tệp âm thanh",
                sounddir: "Thư mục âm thanh",
                volume: "Âm lượng"
            }
        },
        style: {
            title: "Phong cách",
            content: {
                bgstyle: "Kiểu nền",
                solid: "Màu sắc đồng nhất",
                gradient: "Chuyển đổi màu sắc",
                img: "Hình ảnh",
                gameart: "Nghệ thuật game",
                gradientangle: "Góc chuyển đổi màu sắc",
                bgimg: "Hình ảnh nền",
                bgachicon: "Sử dụng biểu tượng thành tựu",
                bgimgbrightness: "Độ sáng",
                brightness: "Độ sáng",
                blur: "Mờ",
                roundness: "Độ tròn",
                fontsize: "Cỡ chữ",
                usecustomfontsizes: "Sử dụng kích thước phông chữ tùy chỉnh",
                unlockmsgfontsize: "Thông điệp mở khóa",
                titlefontsize: "Tiêu đề",
                descfontsize: "Mô tả",
                textvspace: "Khoảng cách giữa các đoạn văn bản",
                opacity: "Độ mờ",
                bgonly: "Chỉ nền",
                glow: "Phát sáng",
                glowcolor: "Màu sắc",
                glowsize: "Kích thước",
                glowanim: "Hoạt hình",
                glowx: "Độ dịch chuyển Ngang",
                glowy: "Độ dịch chuyển Dọc",
                glowopacity: "Độ mờ",
                glowspeed: "Tốc độ",
                glowrarity: "Sử dụng độ hiếm",
                glowcolorbronze: "Độ hiếm: > $semirarity",
                glowcolorsilver: "Độ hiếm: < $semirarity & > $rarity",
                glowcolorgold: "Độ hiếm: < $rarity",
                off: "Tắt",
                pulse: "Nhịp tim",
                double: "Gấp đôi",
                focus: "Tập trung",
                orbit: "Quỹ đạo",
                fluorescent: "Phát quang",
                rainbow: "Cầu vồng",
                mask: "Mặt nạ",
                maskimg: "Hình ảnh mặt nạ",
                useoutline: "Viền",
                outline: "Loại viền",
                outlinecolor: "Màu đường viền",
                outlinewidth: "Độ rộng đường viền",
                dashed: "Gạch chéo",
                dotted: "Chấm chấm"
            }
        },
        colors: {
            title: "Màu sắc",
            content: {
                primarycolor: "Màu chính",
                secondarycolor: "Màu phụ",
                tertiarycolor: "Màu phụ thuộc",
                iconshadowcolor: "Màu bóng đổ của biểu tượng hiếm",
                iconanimcolor: "Màu hoạt ảnh của biểu tượng hiếm",
                fontcolor: "Màu chữ",
                usecustomfontcolors: "Sử dụng màu chữ tùy chỉnh",
                unlockmsgfontcolor: "Màu 1",
                titlefontcolor: "Màu 2",
                descfontcolor: "Màu 3",
                fontoutline: "Viền chữ",
                fontoutlinecolor: "Màu viền chữ",
                fontoutlinescale: "Tỷ lệ viền phông chữ",
                fontshadow: "Bóng chữ",
                fontshadowcolor: "Màu bóng chữ",
                fontshadowscale: "Tỷ lệ bóng chữ",
                fontshadowx: "Độ dịch chuyển ngang",
                fontshadowy: "Độ dịch chuyển dọc"
            }
        },
        icons: {
            title: "Biểu tượng",
            content: {
                iconscale: "Tỉ lệ biểu tượng",
                iconroundness: "Độ tròn của biểu tượng",
                showiconborder: "Hiển thị viền biểu tượng",
                iconborderimg: "Viền biểu tượng",
                iconborderpos: "Vị trí viền",
                iconborderscale: "Tỷ lệ viền",
                iconborderx: "Dịch chuyển ngang",
                iconbordery: "Dịch chuyển dọc",
                iconborderrarity: "Sử dụng độ hiếm",
                iconborderimgbronze: "Độ hiếm: > $semirarity",
                iconborderimgsilver: "Độ hiếm: < $semirarity & > $rarity",
                front: "Trước",
                back: "Sau",
                plat: "Logo 100%",
                usegameicon: "Sử dụng biểu tượng trò chơi",
                gameicontype: "Loại biểu tượng trò chơi",
                usecustomimgicon: "Sử dụng biểu tượng tùy chỉnh",
                customimgicon: "Biểu tượng tùy chỉnh",
                icon: "Biểu tượng",
                logo: "Logo",
                logoscale: "Tỉ lệ logo",
                decoration: "Trang trí",
                decorationscale: "Tỉ lệ trang trí",
                showdecoration: "Hiển thị trang trí",
                rarity: "Độ hiếm",
                showhiddenicon: "Hiển thị biểu tượng ẩn",
                hiddenicon: "Biểu tượng ẩn",
                replacelogo: "Thay Đổi Logo"
            }
        },
        position: {
            title: "Vị trí",
            content: {
                pos: "Vị trí trên màn hình",
                usecustompos: "Sử dụng vị trí tùy chỉnh",
                setcustompos: "Đặt",
                copycustompos: "Áp dụng cho tất cả",
                resetcustompos: "Đặt lại"
            }
        },
        theme: {
            title: "Chủ đề",
            content: {
                updatetheme: "Cập Nhật Chủ Đề",
                savetheme: "Lưu chủ đề",
                sub: [
                    `Các <span class="hl">Chủ đề người dùng đã lưu</span> có thể được chọn từ menu <span class="hl">Chọn chủ đề</span> trên màn hình chính.`,
                    `Đảm bảo rằng <span class="hl">Tên chủ đề</span> là <u>duy nhất</u> - một tên trùng khớp với một chủ đề hiện tại <u>sẽ ghi đè lên chủ đề trước đó</u>!`
                ],
                placeholder: "Tên chủ đề",
                theme: "Chủ đề",
                importtheme: "Nhập Tema",
                import: "Nhập",
                importsub: [
                    `Nhập một <span class="hl">tệp Tema</span> do người dùng tạo ra`,
                    `Các <span class="hl">Tema đã nhập</span> sẽ được tải tự động sau khi nhập thành công và có thể được chọn từ menu <span class="hl">Chọn Tema</span>`,
                ],
                importidle: `Chọn một <span class="hl">tệp Tema</span> để nhập`,
                importcopied: `Sao chép Tema thành công`,
                importrenamed: `Đổi tên Tema thành công`,
                importextracted: `Trích xuất Tema thành công`,
                importrewriting: `Đổi lại đường dẫn tệp Tema...`,
                importconverting: `Chuyển đổi Tema...`,
                importcreating: `Tạo Tema...`,
                importdone: `Nhập Tema thành công`,
                importfailed: `Lỗi khi nhập tệp Tema đã chọn!`,
                exporttheme: "Xuất Tema",
                export: "Xuất",
                exporterrortitle: "Lỗi Xuất",
                exporterrorsub: [
                    "Đã xảy ra lỗi khi cố gắng xuất chủ đề đã chọn",
                    `Hãy thử lưu chủ đề hiện tại (<i>thông qua <span class="hl">Lưu Chủ Đề</span></i>) và thử xuất lại`,
                    `Nếu vấn đề vẫn tiếp diễn, vui lòng sao chép lỗi bên dưới và báo cáo qua các nút liên kết trên <span class="hl">Màn Hình Chính</span>`
                ],
                synctheme: "Đồng bộ chủ đề",
                syncedwith: "Đã đồng bộ với",
                themeselect: "Chủ đề đã chọn",
                copytheme: "Sao chép giao diện",
                copythemesub: "Chọn (các) loại thông báo để sao chép giao diện đã chọn sang"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Dưới đây là những gì đã xảy ra kể từ khi ứng dụng được khởi động:",
            copylog: "Sao chép nội dung nhật ký"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Bạn chắc chắn không?</span>
                    <span>Tất cả dữ liệu đã cấu hình trước đó, <u>bao gồm Các thiết lập Tùy chỉnh</u>, sẽ được đặt lại về giá trị mặc định.</span>
                    <span>🛑 Hành động này không thể hoàn tác!</span>
                </div>
            `,
            reset: "Đặt lại"
        }
    },
    error: {
        content: {
            subtitle: "Ứng dụng Steam Achievement Notifier gặp sự cố và cần đóng lại.",
            details: "Dưới đây là chi tiết lỗi:",
            sub: "Nhấn vào các nút dưới đây để báo cáo sự cố này thông qua nền tảng ưa thích của bạn.",
            report: "Báo cáo",
            log: "Nhật ký ứng dụng",
            exit: "Thoát"
        }
    },    
    tooltips: {
        game: "Trò chơi đang được theo dõi thành tựu",
        usertheme: "Chọn một Chủ đề đã lưu trước đó",
        customise: "Tùy chỉnh Thông báo thành tựu",
        test: "Hiển thị Thông báo Kiểm tra, bao gồm bất kỳ tùy chỉnh nào",
        kofi: "Ủng hộ trên Ko-Fi!",
        discord: "Tham gia trên Discord!",
        github: "Báo cáo sự cố",
        lang: "Chọn ngôn ngữ giao diện người dùng được sử dụng trong ứng dụng",
        steamlang: `Cố gắng tải các bản dịch nằm trong các tệp ứng dụng Steam để hiển thị thông tin thành tích bằng ngôn ngữ mà người dùng đã chọn trong ứng dụng Steam<br><br><span class="ttdesc">Tùy chọn này cố gắng tìm các bản dịch trong một tệp JSON lưu trữ trong dữ liệu ứng dụng Steam. Nếu không thể tìm thấy bản dịch cho thành tích hiện tại, thông tin về thành tích sẽ được hiển thị từ Steamworks thay thế.</span>`,
        maxsteamlangretries: `Số lần thử (mỗi 100 ms) để tìm các bản dịch hợp lệ cho thành tích hiện tại<br><br><span class="ttdesc">Steam hiện chỉ lưu trữ một lượng nhỏ dữ liệu thành tích trong tệp JSON liên kết với mỗi trò chơi. Các thành tích không có trong tệp này sẽ được thêm vào sau khi thành tích được mở khóa.<br><br>Vì việc thêm dữ liệu mới có thể mất thời gian, việc tăng giá trị này sẽ làm tăng khả năng tìm thấy dữ liệu dịch cho thành tích hiện tại, nhưng cũng có thể làm chậm việc hiển thị thông báo trên màn hình theo thời gian tính toán bởi cài đặt này.<br><br>Nếu không thể tìm thấy dữ liệu dịch hợp lệ cho thành tích hiện tại, bản dịch sẽ quay lại ngôn ngữ được chỉ định trong Steamworks.</span>`,
        desktop: "Chuyển đổi một phím tắt trên Màn hình để chạy ứng dụng",
        startwin: "Khởi động Steam Achievement Notifier tự động sau khi đăng nhập",
        startmin: "Sau khi khởi chạy, ẩn cửa sổ giao diện người dùng của ứng dụng cho đến khi mở từ Khay hệ thống",
        nohwa: `Tắt Tăng tốc phần cứng, điều này có thể cải thiện hiệu suất trên các hệ thống có tài nguyên hạn chế hoặc hệ thống không có GPU riêng<br><br><span class="ttdesc">Ứng dụng sẽ khởi động lại sau khi bật/tắt tùy chọn này</span>`,
        litemode: "Vô hiệu hóa tất cả các yếu tố giao diện người dùng tương tác, chỉ cung cấp chức năng ứng dụng giới hạn thông qua biểu tượng Khay hệ thống. Có thể cải thiện tài nguyên tiêu thụ của ứng dụng",
        rarity: `Tỷ lệ phần trăm kích hoạt thông báo thành tích hiếm.<br><br>Bất kỳ thành tích nào có tỷ lệ mở khóa cao hơn giá trị này sẽ hiển thị dưới dạng thông báo Chính<br><br><span class="ttdesc">Nếu <span class="hl">Chế độ Cúp</span> được bật, bất kỳ thành tích nào có tỷ lệ mở khóa cao hơn giá trị này sẽ hiển thị dưới dạng thông báo Bạc thay thế</span>`,
        semirarity: `Tỷ lệ phần trăm mà các phần tử thông báo "Bạc" sẽ hiển thị (ví dụ: <span class="hl">Huy hiệu độ hiếm</span>, <span class="hl">Trang trí</span> v.v.).<br><br>Bất kỳ thành tích nào có tỷ lệ mở khóa thấp hơn (hoặc bằng) giá trị này và cao hơn giá trị <span class="hl">Tỷ lệ hiếm</span> sẽ hiển thị các phần tử thông báo được cấu hình cho độ hiếm "Bạc".<br><br>Bất kỳ thành tích nào có tỷ lệ mở khóa cao hơn giá trị này sẽ hiển thị các phần tử thông báo được cấu hình cho độ hiếm "Đồng"<br><br><span class="ttdesc">Nếu <span class="hl">Chế độ Cúp</span> được bật, bất kỳ thành tích nào có tỷ lệ mở khóa cao hơn giá trị này sẽ hiển thị dưới dạng thông báo Đồng thay thế</span>`,
        showpercent: "Hiển thị phần trăm mở khóa của thành tựu trong thông báo cho các loại đã chọn",
        soundonly: "Vô hiệu hóa thông báo, chỉ phát âm thanh được thiết lập qua Tùy chỉnh",
        extwin: "Tạo một cửa sổ sao chép tất cả thông báo hiện đang hiển thị trên màn hình. Cửa sổ này có thể được thêm vào làm nguồn bắt cửa sổ để sử dụng trong phần mềm phát sóng, chẳng hạn như OBS",
        extwinframerate: "Đặt tốc độ khung hình mục tiêu cho thông báo phát trực tuyến",
        extwinshow: `Chuyển đổi tính năng hiển thị cửa sổ Thông báo Phát sóng<br><br><span class="ttdesc">Khi nó được chọn trên thanh tác vụ, giữ phím <code class="ttcode">Ctrl</code> để hiển thị vị trí hiện tại của cửa sổ</span>`,
        audiosrc: "Chọn nguồn âm thanh (hoặc vô hiệu hóa) được tạo bởi ứng dụng",
        nowtracking: "Hiển thị một thông báo thông báo người dùng rằng thành tựu cho một trò chơi đang chạy đang được theo dõi",
        nowtrackingscale: `Đặt kích thước của Thông báo Theo dõi`,
        nowtrackingpos: `Đặt vị trí của thông báo theo dõi`,
        shortcuts: "Kích hoạt Thông báo Kiểm tra thông qua phím tắt bàn phím. Phím tắt có thể được tùy chỉnh cho mỗi loại thông báo",
        noiconcache: `Tắt việc lưu cache biểu tượng thành tự động khi khởi động trò chơi.<br><br><span class="ttdesc">Điều này có thể cải thiện đáng kể hiệu suất ứng dụng khi khởi động trò chơi và cũng có thể giải quyết các vấn đề theo dõi trong các trò chơi có số lượng thành tựu lớn. Tuy nhiên, trong các trường hợp hiếm hoi, việc tắt bộ nhớ cache biểu tượng có thể dẫn đến việc thiếu biểu tượng thành tựu trong thông báo</span>`,
        steamss: "Chụp ảnh Màn hình Steam khi mở khóa thành tựu",
        screenshots: "Chọn loại Phương tiện Bổ sung để tạo khi hiển thị thông báo",
        monitors: "Màn hình sẽ được chụp ảnh khi chụp ảnh màn hình",
        hdrmode: `Chụp ảnh màn hình bằng phương pháp tương thích với các màn hình sử dụng công nghệ High Dynamic Range (HDR)`,
        ovpos: "Vị trí của lớp chồng thông báo trong ảnh chụp màn hình",
        ovmatch: "Phù hợp với Vị trí Màn hình được thiết lập trong Tùy chỉnh cho loại thông báo này",
        ovpath: "Vị trí nơi ảnh chụp được tạo bởi tùy chọn này sẽ được lưu",
        ssdelay: "Thêm một độ trễ từ khi thông báo xuất hiện đến khi chụp ảnh màn hình",
        sspreview: "Hiển thị một bản xem trước về cách ảnh chụp màn hình sẽ xuất hiện khi được lưu",
        noanim: "Vô hiệu hóa tất cả các hiệu ứng cửa sổ và hiệu ứng chuyển tiếp trong ứng dụng",
        noupdatedialog: `Ngăn chặn hiển thị tự động và tập trung vào hộp thoại <span class="hl">Cập nhật có sẵn</span><br><br><span class="ttdesc">Hộp thoại vẫn có thể truy cập bằng cách nhấp vào nút cập nhật khi có sẵn</span>`,
        nvda: "Bật sao chép thông tin thành tựu vào clipboard khi mở khóa thành tựu, để đọc bằng phần mềm đọc màn hình, chẳng hạn như NVDA",
        tooltips: "Hiển thị gợi ý khi di chuột qua các yếu tố giao diện người dùng cụ thể",
        colorprofile: `Buộc tất cả cửa sổ ứng dụng hiển thị theo hồ sơ màu đã chọn<br><br><span class="ttdesc">Cần khởi động lại ứng dụng</span>`,
        pollrate: `Đặt khoảng thời gian cập nhật cho dữ liệu thành tựu trong khi chơi game<br><br><span class="ttdesc">Hiệu suất có thể tăng/giảm tùy thuộc vào giá trị hoặc phần cứng của hệ thống. Các giá trị cao thường dẫn đến tải hệ thống thấp hơn, nhưng có thể gây trễ trong thông báo</span>`,
        initdelay: `Đặt thời gian chờ giữa khi phát hiện <span class="hl">AppID</span> hiện tại và khi bắt đầu theo dõi quy trình/thành tựu<br><br><span class="ttdesc">Tăng giá trị này có thể ngăn ngừa những tình huống khi Steam không thể khởi động trò chơi hiện tại (do việc khởi tạo ứng dụng trong Steamworks trước khi trò chơi được khởi động)</span><br><br><span class="ttdesc">Hoặc có thể sử dụng giá trị này để tránh phát hiện không chính xác các quy trình khởi động trước trò chơi</span>`,
        releasedelay: `Thiết lập thời gian mà tiến trình Worker chạy nền sẽ chờ trước khi khởi động lại sau khi trò chơi hiện tại đã được giải phóng. Ảnh hưởng đến cả việc theo dõi tiến trình tự động và Trò chơi Giải phóng Tự động<br><br><span class="ttdesc">Cho phép khoảng thời gian dài hơn để Steamworks được giải phóng hoàn toàn khỏi ứng dụng. Việc tăng giá trị này có thể ngăn chặn các hành vi bất thường, chẳng hạn như tiếp tục theo dõi một trò chơi đã đóng trước đó</span>`,
        maxretries: `Thiết lập số lần thử lại tối đa để liên kết một tiến trình đang chạy với AppID được phát hiện. Ảnh hưởng đến cả việc theo dõi tiến trình tự động và Trò chơi Giải phóng Tự động<br><br><span class="ttdesc">Các lần thử lại được thực hiện mỗi giây một lần. Nếu một tiến trình đang chạy không được liên kết với AppID hiện tại sau số lần thử này, một tiến trình không hợp lệ sẽ được trả về. Trong những trường hợp như vậy, trò chơi sẽ cần được giải phóng thủ công thông qua Khay Hệ thống > Tùy chọn > Giải phóng Trò chơi</span>`,
        debug: "Mở Bảng Gỡ lỗi, hiển thị thông tin theo dõi quy trình chi tiết",
        userust: "Sử dụng chức năng thay thế dựa trên Rust để kiểm tra xem các quy trình trò chơi đã được theo dõi có đang chạy trên hệ thống không. Khi không được đánh dấu, kiểm tra quy trình mặc định dựa trên NodeJS sẽ được sử dụng thay vào đó.",
        notifydebug: "Tạo một cửa sổ DevTools cho tất cả các thông báo. Hữu ích để gỡ lỗi/viết mã sửa lỗi vấn đề thông báo",
        workerdebug: "Tạo một cửa sổ DevTools cho tiến trình Worker. Hữu ích để gỡ lỗi và khắc phục sự cố theo dõi trò chơi",
        usecustomfiles: "Cho phép thông báo tải tệp tùy chỉnh của người dùng. Cần thận trọng đối với người dùng thông thường",
        showcustomfiles: "Mở vị trí của các tệp tùy chỉnh",
        log: "Mở cửa sổ Nhật ký Ứng dụng, hiển thị thông tin về hoạt động quá trình, cảnh báo và lỗi",
        reset: "Xóa tất cả dữ liệu cấu hình và khởi động lại ứng dụng",
        playback: "Tạm dừng/tiếp tục hoạt ảnh của xem trước thông báo",
        replay: "Khởi động lại hoạt ảnh của xem trước thông báo",
        preset: "Chọn cài đặt thông báo để tùy chỉnh",
        iconanim: "Chuyển đổi viền và hoạt ảnh biểu tượng Hiếm",
        alldetails: "Hiển thị tất cả các yếu tố văn bản trong thông báo, bao gồm cả những yếu tố bị ẩn theo mặc định cho cài đặt này",
        usepercent: "Hiển thị phần trăm mở khóa của thành tựu, thay vì giá trị XP/S",
        displaytime: "Đặt số giây thông báo sẽ hiển thị",
        scale: "Tăng hoặc giảm kích thước của thông báo",
        customtext: `Đặt một thông báo tùy chỉnh để hiển thị trong thông báo<br><br><span class="ttdesc">Tùy chọn này sẽ bị ẩn khi Customiser > Cài đặt sẵn > Thành phần thông báo > Thông báo mở khóa bị vô hiệu hóa</span>`,
        usegametitle: "Hiển thị tiêu đề của trò chơi hiện tại trong thông báo",
        customfont: "Tải một phông chữ tùy chỉnh để sử dụng trong thông báo",
        soundmode: "Chọn một tệp âm thanh duy nhất hoặc một tệp âm thanh được chọn ngẫu nhiên từ một thư mục chứa nhiều tệp âm thanh khi có thông báo xảy ra",
        soundfile: "Chọn một tệp âm thanh để phát khi có thông báo xảy ra",
        sounddir: "Chọn một thư mục từ đó một tệp âm thanh sẽ được chọn ngẫu nhiên khi có thông báo xảy ra",
        volume: "Đặt âm lượng phát lại của tệp âm thanh",
        preview: "Xem trước tệp âm thanh đã chọn hoặc một tệp âm thanh được chọn ngẫu nhiên từ thư mục",
        bgstyle: "Chọn kiểu cho nền thông báo",
        gradientangle: "Đặt góc của độ dốc",
        bgimg: "Tải một tệp hình ảnh để sử dụng làm nền thông báo",
        bgachicon: "Sử dụng biểu tượng của thành tựu đã mở khóa làm nền thông báo",
        bgimgbrightness: "Thiết lập độ sáng của hình ảnh được sử dụng làm nền thông báo",
        brightness: "Đặt độ sáng của nghệ thuật trò chơi được sử dụng làm nền thông báo",
        blur: "Đặt mức độ mờ được áp dụng vào nền của thông báo",
        roundness: "Đặt độ cong của các cạnh thông báo",
        fontsize: "Đặt kích thước của phông chữ được sử dụng trong thông báo",
        opacity: "Đặt độ mờ tổng thể của thông báo",
        bgonly: "Chỉ đặt độ mờ cho nền thông báo, giữ các yếu tố khác ở độ mờ đầy đủ",
        glow: "Bật hiệu ứng phát sáng bao quanh thông báo",
        glowcolor: "Đặt màu sắc của hiệu ứng phát sáng",
        glowsize: "Đặt kích thước của hiệu ứng phát sáng",
        glowx: "Đặt vị trí dịch chuyển ngang của hiệu ứng sáng",
        glowy: "Đặt vị trí dịch chuyển dọc của hiệu ứng sáng",
        glowopacity: "Đặt độ mờ của hiệu ứng sáng",
        glowanim: "Chọn một hiệu ứng trước định để áp dụng vào hiệu ứng phát sáng",
        glowspeed: "Đặt tốc độ của hoạt hình được áp dụng vào hiệu ứng phát sáng",
        glowrarity: "Thay đổi màu của hiệu ứng phát sáng dựa trên độ hiếm của thành tích đã mở khóa",
        glowcolorbronze: "Màu ánh sáng hiển thị khi phần trăm mở khóa > $semirarity",
        glowcolorsilver: "Màu ánh sáng hiển thị khi phần trăm mở khóa < $semirarity và > $rarity",
        glowcolorgold: "Màu phát sáng hiển thị khi tỷ lệ mở khóa < $rarity",
        mask: "Bật mặt nạ cho các phần của thông báo với một hình ảnh tùy chỉnh",
        maskimg: `Tải lên một tập tin hình ảnh để sử dụng làm mặt nạ<br><br><span class="ttdesc">Trong CSS, <code class="ttcode">mask-mode: alpha</code> hoạt động ngược lại với những gì thường được mong đợi - các vùng trong suốt trong tập tin hình ảnh sẽ bị che khuất và các vùng đen/xám sẽ cho phép các yếu tố phía dưới trở nên hiển thị</span>`,
        useoutline: "Hiển thị viền xung quanh thông báo",
        outline: "Chọn loại đường viền để hiển thị xung quanh thông báo",
        outlinecolor: "Cài đặt màu đường viền xung quanh thông báo",
        outlinewidth: "Cài đặt độ rộng của đường viền xung quanh thông báo",
        primarycolor: "Đặt màu chính của thông báo",
        secondarycolor: "Đặt màu phụ của thông báo",
        tertiarycolor: "Đặt màu thứ cấp của thông báo",
        fontcolor: "Đặt màu của tất cả văn bản hiển thị trong thông báo",
        fontoutline: "Thêm đường viền cho tất cả văn bản hiển thị trong thông báo",
        fontoutlinecolor: "Đặt màu của đường viền văn bản",
        fontoutlinescale: "Đặt độ dày viền của văn bản",
        fontshadow: "Thêm bóng cho tất cả văn bản hiển thị trong thông báo",
        fontshadowcolor: "Đặt màu của bóng văn bản",
        fontshadowscale: "Đặt độ dày bóng của văn bản",
        fontshadowx: "Dịch chuyển vị trí bóng chữ theo chiều ngang",
        fontshadowy: "Dịch chuyển vị trí bóng chữ theo chiều dọc",
        iconroundness: "Đặt độ cong của biểu tượng thành tựu/trò chơi hiển thị trong thông báo",
        plat: "Tải một tệp hình ảnh để sử dụng làm biểu tượng 100%",
        usegameicon: "Thay thế biểu tượng của thành tích đã mở khóa bằng biểu tượng của trò chơi hiện tại",
        gameicontype: `Chọn loại hình ảnh để hiển thị dưới dạng biểu tượng trò chơi`,
        usecustomimgicon: "Thay thế biểu tượng của thành tích đã mở khóa bằng tệp hình ảnh tùy chỉnh",
        customimgicon: "Tải tệp hình ảnh để sử dụng làm biểu tượng tùy chỉnh",
        showhiddenicon: "Hiển thị một hình ảnh chỉ ra rằng thành tựu đang bị ẩn trong thông báo",
        hiddenicon: "Tải lên một tệp hình ảnh để thay thế biểu tượng thành tựu ẩn",
        logo: "Tải một tệp hình ảnh để thay thế biểu tượng Logo",
        decoration: "Tải một tệp hình ảnh để thay thế biểu tượng Trang trí",
        showdecoration: "Chuyển đổi tính hiển thị của biểu tượng Trang trí",
        replacelogo: "Thay thế biểu tượng logo trong thông báo bằng trang trí đã chọn",
        pos: "Đặt vị trí trên màn hình của thông báo",
        usecustompos: "Bật tùy chỉnh vị trí cho thông báo",
        setcustompos: "Đặt vị trí tùy chỉnh cho thông báo",
        copycustompos: "Áp dụng vị trí tùy chỉnh cho tất cả các loại thông báo khác",
        resetcustompos: "Đặt lại vị trí của thông báo về vị trí tùy chỉnh mặc định",
        updatetheme: "Cập nhật Chủ đề hiện tại với các tùy chọn tùy chỉnh đã chọn",
        savetheme: "Lưu tất cả các tùy chọn tùy chỉnh cấu hình như một Chủ đề mới",
        visibilitybtn: "Chuyển đổi tính hiển thị của phần tử trong xem trước tùy chỉnh và thông báo kiểm tra",
        delbtn: "Đặt lại phần tử về giá trị mặc định",
        imgpath: "Vị trí nơi hình ảnh thông báo được tạo ra bởi tùy chọn này sẽ được lưu trữ",
        ssenabled: "Bật hoặc tắt việc tạo phương tiện cho loại này",
        checkforupdates: `Kiểm tra xem có phiên bản ứng dụng mới nào đã được phát hành trên GitHub không. Nếu có bản cập nhật, nó sẽ được tải xuống và cài đặt tự động sau khi được xác nhận qua hộp thoại <span class="hl">Cập nhật có sẵn</span>`,
        linkedgames: `Bỏ qua <span class="hl">SANWatcher</span> cho các trò chơi Steam cụ thể<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các trường hợp rất đặc biệt. Trong điều kiện bình thường, người dùng không cần sử dụng tùy chọn này!</span>`,
        autoreleasegames: `Bỏ qua <span class="hl">theo dõi tiến trình tự động</span> cho các trò chơi Steam cụ thể<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các trường hợp rất đặc biệt. Trong điều kiện bình thường, người dùng không cần sử dụng tùy chọn này!</span>`,
        exclusionlist: `Ngăn chặn ứng dụng theo dõi thành tích trong các trò chơi Steam cụ thể<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các tình huống rất cụ thể. Người dùng không nên cần phải sử dụng tùy chọn này trong điều kiện bình thường!</span>`,
        inclusionlist: `Ngăn tất cả trò chơi Steam bị ứng dụng theo dõi trừ khi được chỉ định<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các trường hợp rất cụ thể. Người dùng thông thường không cần sử dụng tùy chọn này trong điều kiện bình thường!</span>`,
        ovx: "Lệch thông báo hiển thị trên ảnh chụp màn hình theo chiều ngang",
        ovy: "Lệch thông báo hiển thị trên ảnh chụp màn hình theo chiều dọc",
        importtheme: `Nhập các tùy chỉnh thông qua một <span class="hl">tệp Tema</span> do người dùng tạo ra`,
        exporttheme: `Xuất <span class="hl">Tema</span> hiện tại đang chọn để chia sẻ<br><br><span class="ttdesc">Trước khi thử xuất, hãy đảm bảo rằng <span class="hl">Tema</span> mong muốn đã được chọn (qua menu <span class="hl">Chọn Tema</span>). Hãy đảm bảo rằng các tùy chỉnh đã được lưu vào <span class="hl">Tema</span> đã chọn (qua menu <span class="hl">Lưu Tema</span>)<br><br><u>Bất kỳ tùy chỉnh nào chưa được lưu vào <span class="hl">Tema</span> hiện tại sẽ không được xuất!</u></span>`,
        webhooks: "Sử dụng URL Webhook để đăng lên máy chủ Discord mỗi khi một thành tựu được mở khóa",
        webhookmain: `Chuyển đổi việc đăng thông tin thành tích lên máy chủ Discord khi mở khóa thành tích $main`,
        webhooksemi: `Chuyển đổi việc đăng thông tin thành tích lên máy chủ Discord khi mở khóa thành tích $semi`,
        webhookrare: "Chuyển đổi việc đăng thông tin thành tích lên máy chủ Discord khi mở khóa thành tích $rare",
        webhookplat: "Chuyển đổi việc đăng thông tin thành tích lên máy chủ Discord khi mở khóa thành tích $plat",
        webhooktest: "Chuyển đổi xem có gửi thông tin kiểm tra đến máy chủ Discord khi bất kỳ loại thông báo kiểm tra nào được kích hoạt hay không",
        webhookurl: `Cài đặt <span class="hl">URL Webhook</span> cho máy chủ Discord mong muốn<br><br><span class="ttdesc">URL Webhook được sử dụng để đăng lên máy chủ/kanal Discord thay mặt cho người dùng hoặc ứng dụng. Để thiết lập một Webhook mới cho máy chủ Discord, người dùng phải có một vai trò trên máy chủ mong muốn cho phép tạo Webhooks<br><br><u>URL Webhook là cần thiết khi sử dụng tùy chọn này</u><br><br>Xem tài liệu chính thức của Discord để biết thêm thông tin</span>`,
        webhookspoilers: `Thêm thẻ spoiler cho các thành tích "Ẩn" khi đăng lên Discord`,
        webhookappid: "Hiển thị AppID của trò chơi hiện tại trong chân trang của webhook embed",
        unlockmsg: "Cài đặt vị trí của thông báo mở khóa/ văn bản tùy chỉnh trong $type",
        title: "Cài đặt vị trí của tiêu đề thành tựu trong $type",
        desc: "Cài đặt vị trí của mô tả thành tựu trong $type",
        notification: "thông báo",
        screenshot: "ảnh chụp màn hình",
        percentpos: "Cài đặt vị trí của tỷ lệ hiếm có trong $type",
        sspercentpos: "Cài đặt vị trí của tỷ lệ hiếm có trong $type",
        hiddeniconpos: "Cài đặt vị trí của biểu tượng thành tựu ẩn/bí mật trong $type",
        sshiddeniconpos: "Cài đặt vị trí của biểu tượng thành tựu ẩn/bí mật trong $type",
        decorationpos: "Cài đặt vị trí của yếu tố trang trí trong $type",
        ssdecorationpos: "Cài đặt vị trí của yếu tố trang trí trong $type",
        percentbadge: "Hiển thị tỷ lệ mở khóa bên trong huy hiệu đặt trên biểu tượng thành tích/trò chơi",
        sspercentbadge: "Hiển thị tỷ lệ mở khóa bên trong huy hiệu đặt trên biểu tượng thành tích/trò chơi",
        percentbadgepos: "Đặt vị trí của huy hiệu",
        sspercentbadgepos: "Đặt vị trí của huy hiệu",
        percentbadgecolor: "Đặt màu nền của huy hiệu",
        sspercentbadgecolor: "Đặt màu nền của huy hiệu",
        percentbadgefontcolor: "Đặt màu chữ của huy hiệu",
        sspercentbadgefontcolor: "Đặt màu chữ của huy hiệu",
        percentbadgefontsize: "Đặt kích thước của huy hiệu",
        sspercentbadgefontsize: "Đặt kích thước của huy hiệu",
        percentbadgeroundness: "Đặt độ bo của huy hiệu",
        sspercentbadgeroundness: "Đặt độ bo của huy hiệu",
        percentbadgex: "Đưa vị trí của phần tử huy hiệu theo chiều ngang",
        sspercentbadgex: "Đưa vị trí của phần tử huy hiệu theo chiều ngang",
        percentbadgey: "Đưa vị trí của phần tử huy hiệu theo chiều dọc",
        sspercentbadgey: "Đưa vị trí của phần tử huy hiệu theo chiều dọc",
        percentbadgeimg: "Hiển thị biểu tượng dựa trên độ hiếm như một phần tử huy hiệu",
        sspercentbadgeimg: "Hiển thị biểu tượng dựa trên độ hiếm như một phần tử huy hiệu",
        percentbadgeimgbronze: "Biểu tượng huy hiệu hiển thị khi phần trăm mở khóa > $semirarity",
        sspercentbadgeimgbronze: "Biểu tượng huy hiệu hiển thị khi phần trăm mở khóa > $semirarity",
        percentbadgeimgsilver: "Biểu tượng huy hiệu hiển thị khi phần trăm mở khóa < $semirarity và > $rarity",
        sspercentbadgeimgsilver: "Biểu tượng huy hiệu hiển thị khi phần trăm mở khóa < $semirarity và > $rarity",
        percentbadgeimggold: "Biểu tượng huy hiệu hiển thị khi tỷ lệ mở khóa < $rarity",
        sspercentbadgeimggold: "Biểu tượng huy hiệu hiển thị khi tỷ lệ mở khóa < $rarity",
        percentbadgeimgplat: "Biểu tượng huy hiệu hiển thị khi tất cả thành tích đã được mở khóa",
        sspercentbadgeimgplat: "Biểu tượng huy hiệu hiển thị khi tất cả thành tích đã được mở khóa",
        resetpbimgs: "Đặt lại tất cả biểu tượng huy hiệu về mặc định",
        elemsmatch: `Khớp với cài đặt Các yếu tố thông báo đã đặt trong Trình tùy chỉnh cho loại thông báo này<br><br><span class="ttdesc">Một số cài đặt thông báo không thể hoàn toàn khớp với cài đặt Trình tùy chỉnh, do sự khác biệt giữa thông báo trên màn hình và thông báo dựa trên ảnh chụp màn hình</span>`,
        themeswitch: `Tự động chuyển sang bất kỳ <span class="hl">Chủ đề</span> nào đã lưu khi phát hiện một trò chơi cụ thể`,
        userthemesync: `Đồng bộ tùy chỉnh trong <span class="hl">Chủ đề</span> đã chọn với tất cả các loại thông báo khác`,
        showsystrayopts: `Hiển thị tất cả các tùy chọn thường nằm dưới <span class="hl">Khay Hệ thống</span> > <span class="hl">Tùy chọn</span> trong <span class="hl">Cài đặt</span> > <span class="hl">Khác.</span>`,
        releaseshortcut: "Sử dụng phím tắt đã chỉ định để phát hành trò chơi đang theo dõi",
        themeselect: "Chọn một chủ đề đã lưu trước đó",
        statwin: `Hiển thị thống kê thành tích có thể cấu hình cho trò chơi hiện tại trong cửa sổ ngoài<br><br><span class="ttdesc">Khi sử dụng cùng với tùy chọn <span class="hl">Dịch thành tích sang ngôn ngữ Steam</span>, một số bản dịch có thể không khả dụng cho đến khi thành tích cụ thể được mở khóa</span>`,
        statwinaot: `Đặt cửa sổ Thống kê Thành tích vào chế độ "Luôn ở trên cùng", cho phép cửa sổ hiển thị trên cửa sổ game<br><br><span class="ttdesc">Khi bật, cửa sổ Thống kê Thành tích sẽ không còn ghi nhận các tương tác của người dùng, như các sự kiện "click". Để kích hoạt lại tương tác với cửa sổ, tùy chọn này phải được tắt</span>`,
        statwinshortcut: "Chuyển đổi Overlay Thống kê Thành tích bằng phím tắt bàn phím đã chỉ định",
        ssdisplay: "Hiển thị bản xem trước ảnh chụp màn hình trong thông báo",
        iconscale: "Tăng hoặc giảm kích thước của biểu tượng thành tích",
        showiconborder: "Hiển thị một hình ảnh làm viền xung quanh biểu tượng thành tích",
        iconborderimg: "Tải tệp hình ảnh để sử dụng làm viền xung quanh biểu tượng thành tích",
        iconborderpos: "Chọn hiển thị viền biểu tượng trước hoặc sau biểu tượng thành tích",
        iconborderscale: "Tăng hoặc giảm kích thước viền biểu tượng trong thông báo",
        iconborderx: "Tăng hoặc giảm dịch chuyển ngang của viền biểu tượng trong thông báo",
        iconbordery: "Tăng hoặc giảm dịch chuyển dọc của viền biểu tượng trong thông báo",
        iconborderrarity: "Thay đổi hình ảnh viền biểu tượng dựa trên độ hiếm của thành tích đã mở khóa",
        iconborderimgbronze: "Hình ảnh viền biểu tượng hiển thị khi phần trăm mở khóa > $semirarity",
        iconborderimgsilver: "Hình ảnh viền biểu tượng hiển thị khi phần trăm mở khóa < $semirarity và > $rarity",
        iconshadowcolor: "Cài đặt màu bóng đổ xung quanh biểu tượng thành tích khi mở khóa thành tích hiếm",
        iconanimcolor: "Cài đặt màu hoạt ảnh phía sau biểu tượng thành tích khi mở khóa thành tích hiếm",
        logoscale: "Tăng hoặc giảm kích thước của phần tử logo trong thông báo",
        decorationscale: "Tăng hoặc giảm kích thước của phần tử trang trí trong thông báo",
        usecustomfontsizes: `Tăng hoặc giảm kích thước của các phần tử văn bản trong thông báo một cách riêng biệt<br><br><span class="ttdesc">Không thể đảm bảo duy trì bố cục thông báo ban đầu khi thay đổi các giá trị kích thước phông chữ riêng lẻ</span>`,
        unlockmsgfontsize: "Tăng hoặc giảm kích thước của phần tử văn bản thông điệp mở khóa",
        titlefontsize: "Tăng hoặc giảm kích thước của phần tử văn bản tiêu đề thành tích",
        descfontsize: "Tăng hoặc giảm kích thước của phần tử văn bản mô tả thành tích",
        webhookembedcolormain: "Đặt màu được sử dụng trong webhook embed khi mở khóa thành tích $main",
        webhookembedcolorsemi: "Đặt màu được sử dụng trong webhook embed khi mở khóa thành tích $semi",
        webhookembedcolorrare: "Đặt màu được sử dụng trong webhook embed khi mở khóa thành tích $rare",
        webhookembedcolorplat: "Đặt màu được sử dụng trong webhook embed khi mở khóa thành tích $plat",
        raemus: "Hiển thị thông báo khi phát hiện trò chơi trong các trình giả lập hỗ trợ",
        rauser: "Đặt tên người dùng Retro Achievements để theo dõi các thành tích",
        rakey: `Cài đặt Web API Key sẽ được sử dụng để xác thực với API của Retro Achievements<br><br><span class="ttdesc">Một Web API Key có thể được sao chép hoặc tạo lại bằng cách đăng nhập vào trang web Retro Achievements và đi tới <span class="hl">Cài đặt > Khóa > Web API Key</span><br><br>🔒 Khóa đã cung cấp sẽ được mã hóa trước khi lưu trữ trên hệ thống cục bộ (nếu hệ điều hành hiện tại hỗ trợ mã hóa)</span>`,
        rapercenttype: "Đặt xem có hiển thị phần trăm thành tích Hardcore hoặc Softcore trong thông báo không",
        retroarch: `Hiển thị thông báo Retro Achievements cho các trò chơi được giả lập qua RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Cài đặt > Ghi log</span> cần được cấu hình với các cài đặt sau:<br><br><ul><li><span class="hllb">Độ chi tiết của ghi log</span>: <span class="hlgreen">BẬT</span></li><li><span class="hllb">Cấp độ ghi log của giao diện người dùng</span>: <span class="hlgreen">1 (Thông tin)</span></li><li><span class="hllb">Ghi log vào file</span>: <span class="hlgreen">BẬT</span></li><li><span class="hllb">Thêm dấu thời gian vào các file log</span>: <span class="hlred">TẮT</span></li></ul></span>`,
        dolphin: `Hiển thị thông báo Retro Achievements cho các trò chơi được giả lập qua Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Xem > Hiển thị Cấu hình Log</span> cần được cấu hình với các cài đặt sau:<br><br><ul><li><span class="hllb">Độ chi tiết</span>: <span class="hlgreen">Thông tin</span></li><li><span class="hllb">Kết quả ghi log</span> > <span class="hlgreen">Ghi vào File</span></li><li><span class="hllb">Các loại log</span> > <span class="hlgreen">Thành tích (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Hiển thị thông báo Retro Achievements cho các trò chơi được giả lập qua PCSX2<br><br><span class="ttdesc"><span class="hl">PCSX2 > Công cụ > Bật ghi vào file</span> phải được bật</span>`,
        duckstation: `Hiển thị thông báo Retro Achievements cho các trò chơi mô phỏng qua Duckstation<br><br><span class="ttdesc">❗ Tệp <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> phải được tải xuống và di chuyển vào <span class="hl">thư mục cài đặt của Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Cài đặt > Thành tựu > RAIntegration (Chỉ dành cho nhà phát triển)</span> phải được bật</span>`,
        ppsspp: `Hiển thị thông báo Retro Achievements cho các trò chơi được giả lập qua PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> phải được bật và cấu hình với các cài đặt sau:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Cài đặt đường dẫn đến file log của RetroArch <span class="hl">"retroarch.log"</span><br><br><span class="ttdesc">Với cài đặt mặc định, file log <span class="hl">"retroarch.log"</span> được lưu tại <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Cài đặt đường dẫn đến file log của Dolphin <span class="hl">"dolphin.log"</span><br><br><span class="ttdesc">Với cài đặt mặc định, file log <span class="hl">"dolphin.log"</span> được lưu tại một trong các vị trí sau:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Cài đặt đường dẫn đến file log của PCSX2<span class="hl">"emulog.txt"</span><br><br><span class="ttdesc">Với cài đặt mặc định, file log <span class="hl">"emulog.txt"</span> được lưu tại <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Đặt đường dẫn tới tệp nhật ký <span class="hl">"RALog.txt"</span> của Duckstation<br><br><span class="ttdesc">Với cài đặt mặc định, tệp <span class="hl">"RALog.txt"</span> được lưu tại <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Đặt đường dẫn đến tệp nhật ký <span class="hl">"log.txt"</span> của PPSSPP<br><br><span class="ttdesc">Với cài đặt mặc định khi cài đặt, <span class="hl">"log.txt"</span> được lưu tại <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Tùy chỉnh màu sắc của từng phần văn bản trong thông báo",
        unlockmsgfontcolor: "Chọn màu cho phần văn bản đầu tiên",
        titlefontcolor: "Chọn màu cho phần văn bản thứ hai",
        descfontcolor: "Chọn màu cho phần văn bản thứ ba",
        exportachdata: `Xuất dữ liệu thành tích vào tệp JSON khi một thành tích được mở khóa<br><br><span class="ttdesc">Khi bật, <span class="ttcode">achdata.json</span> sẽ được xuất ra tại:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Điều chỉnh khoảng cách dọc giữa các phần tử văn bản trong thông báo",
        ssmode: `Thiết lập việc chụp toàn bộ màn hình hay cửa sổ trò chơi hiện tại<span style="color: red;">*</span> trong ảnh chụp màn hình<br><br><span class="ttdesc">Nếu không thể tìm thấy <span class="hl">tệp thực thi</span> của trò chơi hiện tại (<i>dù là thông qua <span class="hl">theo dõi tiến trình tự động</span> hay khi được thêm làm một mục <span class="hl">Trò chơi Giải phóng Tự động</span></i>), tùy chọn này sẽ mặc định sử dụng chế độ "Màn hình"</span>`,
        replaynotify: "Phát lại thông báo thành tích cuối cùng",
        replaynotifyshortcut: "Phát lại thông báo thành tích cuối cùng bằng cách sử dụng phím tắt được chỉ định",
        replaynotifyempty: `<br><br><span class="ttdesc">Hàng đợi phát lại trống. Mở khóa một thành tích để phát lại thông báo</span>`,
        customtrigger: "Kích hoạt phím/tổ hợp phím được mô phỏng khi mở khóa thành tích. Có thể dùng để kích hoạt phím tắt bàn phím đã đăng ký trong các ứng dụng bên ngoài",
        customtriggershortcut: `Kích hoạt phím/tổ hợp phím được chỉ định khi mở khóa thành tích<br><br><span class="ttdesc">Hỗ trợ từ 1 đến 3 phím cho mỗi phím tắt. Đối với các phím nhấn/tổ hợp dưới 3 phím, nhấn các phím mong muốn và đợi bộ đếm thời gian (5 giây) kết thúc</span>`,
        customtriggerdelay: "Trì hoãn phím/tổ hợp phím được chỉ định của Kích Hoạt Tùy Chỉnh",
        customtriggerusedisplaytime: `Trì hoãn phím/tổ hợp phím được chỉ định của Kích Hoạt Tùy Chỉnh dựa trên giá trị Thời Gian Hiển Thị của loại thông báo hiện tại`,
        trophymode: "Thay thế loại thông báo Chính/Hiếm/100% bằng Đồng/Bạc/Vàng/Bạch kim",
        lognum: `Số lượng tệp nhật ký trước đó được lưu trữ trước khi xóa. Một tệp nhật ký mới sẽ được tạo mỗi khi ứng dụng khởi động<br><br><span class="ttdesc">Khi đặt là 0, tất cả các tệp nhật ký trước đó sẽ bị xóa khi thoát</span>`, 
        detectedappid: `Sử dụng <span class="hl">AppID</span> của trò chơi hiện được phát hiện`,
        listmode: `Đặt hành vi của <span class="hl">Danh sách loại trừ</span>/<span class="hl">Danh sách bao gồm</span><br><br><span class="ttdesc">• <span class="hl">Loại trừ</span>: Chỉ bỏ qua các trò chơi được chỉ định trong danh sách<br>• <span class="hl">Bao gồm</span>: Bỏ qua tất cả các trò chơi ngoại trừ những trò được chỉ định trong danh sách</span>`,
        notifymax: `Đặt số lượng thông báo tối đa có thể hiển thị cùng lúc trên màn hình<br><br><span class="ttdesc">Tăng số lượng thông báo hiển thị cùng lúc sẽ tiêu tốn nhiều tài nguyên hơn và có thể làm giảm hiệu suất</span>`,
        notifyspace: "Đặt khoảng cách giữa các thông báo hiển thị cùng lúc trên màn hình",
        audiocooldown: `Đặt khoảng thời gian chờ trước khi thông báo tiếp theo có thể phát âm thanh mới<br><br><span class="ttdesc">Âm thanh sẽ không bị ảnh hưởng nếu Số lượng thông báo tối đa được đặt là 1</span>`,
        rauseemudir: "Lưu ảnh chụp màn hình/hình ảnh thông báo mở khóa qua RetroAchievements vào thư mục con cho trình giả lập hiện tại trong thư mục đường dẫn ảnh/chụp màn hình đã chỉ định",
        ssext: "Đặt định dạng tệp của ảnh chụp màn hình được tạo thông qua tùy chọn Screenshot with Notification Overlay",
        notify1line: `Giới hạn số dòng văn bản hiển thị trong tất cả thông báo xuống 1<br><br><span class="ttdesc">Các chuỗi văn bản không thể vừa trong một dòng sẽ bị cắt ngắn bằng "..."</span>`,
        copytheme: "Sao chép giao diện đã chọn sang loại thông báo khác",
        ssaddtosteam: "Tự động thêm phương tiện đã tạo vào Bản ghi và Ảnh chụp màn hình của trò chơi hiện tại trong Steam",
        appdatadir: "Mở vị trí thư mục AppData của ứng dụng",
        backup: "Sao lưu nội dung thư mục AppData của ứng dụng đến vị trí đã chọn, sẽ hoạt động như điểm khôi phục cho trạng thái hiện tại của ứng dụng",
        restore: "Khôi phục nội dung thư mục AppData của ứng dụng từ bản sao lưu trước đó",
        gametimerwin: "Hiển thị bộ đếm thời gian trên màn hình cho biết khoảng thời gian đã dùng để mở khóa tất cả thành tựu của trò chơi hiện tại",
        gametimerwinshortcut: "Bật/tắt Bộ đếm thời gian hoàn thành trò chơi bằng phím tắt bàn phím đã chỉ định",
        gametimerwinaot: `Đặt Bộ đếm thời gian hoàn thành trò chơi sang chế độ "Luôn hiển thị trên cùng", cho phép cửa sổ hiển thị phía trên cửa sổ trò chơi<br><br><span class="ttdesc">Khi được bật, Bộ đếm thời gian hoàn thành trò chơi sẽ không còn ghi nhận các tương tác của người dùng, chẳng hạn như sự kiện "click". Để bật lại khả năng tương tác với cửa sổ, tùy chọn này phải được tắt</span>`,
        resetgametimer: "Đặt lại Bộ đếm thời gian hoàn thành trò chơi cho trò chơi hiện tại",
        noshortcuts: `Tắt tất cả phím tắt bàn phím trong ứng dụng<br><br><span class="ttdesc">Khi được bật, <u>tất cả phím tắt trong ứng dụng sẽ không còn hoạt động</u>. Tất cả các tùy chọn liên quan đến phím tắt bàn phím cũng sẽ bị ẩn</span>`,
        extwinnotify: "Bật/tắt hiển thị tất cả thông báo trên màn hình khi sử dụng Stream Notifications",
        usesanwatcher: `Bật trình theo dõi tiến trình trò chơi mới của SAN<br><br><span class="ttdesc">Sự khác biệt giữa SANWatcher mới và các phương pháp theo dõi tiến trình tự động cũ như sau:<br><br><div class="wrapper sanwatcher"><span class="hl">BẬT</span><ul><li>Chủ động theo dõi các sự kiện khởi động và kết thúc của mọi tiến trình nằm trong thư mục cài đặt trò chơi</li><li>Không yêu cầu phải biết tệp thực thi của trò chơi để giải phóng trò chơi hiện tại</li><li>Hành vi của các trình khởi chạy trước khi vào trò chơi có thể khác nhau, vì vậy không đảm bảo khả năng tương thích hoàn toàn với tất cả các trò chơi Steam</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">TẮT</span><ul><li>Quét thư mục cài đặt trò chơi để tìm các tệp thực thi đang chạy sau khi trò chơi được khởi động</li><li>Yêu cầu phải biết tệp thực thi của trò chơi để giải phóng trò chơi hiện tại</li><li>Nếu không thể tự động xác định tiến trình trò chơi, người dùng phải tự thêm một mục mới vào <span class="hl">Trò chơi Giải phóng Tự động</span> để trò chơi có thể được giải phóng tự động</li></ul></div>`,
        releasewaittime: `Đặt khoảng thời gian SANWatcher sẽ chờ các tiến trình trò chơi mới khởi chạy trước khi giải phóng trò chơi hiện tại<br><br><span class="ttdesc">Ví dụ: nếu trò chơi hiện tại khởi chạy một trình khởi chạy/cửa sổ cấu hình trước khi vào trò chơi trước khi khởi chạy trò chơi thực tế, cài đặt này sẽ xác định số giây SANWatcher sẽ chờ cửa sổ trò chơi thực tế xuất hiện sau khi trình khởi chạy/cửa sổ cấu hình trước trò chơi đã đóng<br><br>Nếu một tiến trình trò chơi đang hoạt động mới được phát hiện trong khoảng thời gian chờ này, việc giải phóng sẽ bị hủy và tiến trình mới được kích hoạt sẽ được theo dõi thay thế<br><br>💡 Tên trò chơi sẽ <span style="animation: release calc(var(--transition) * 2.5) linear alternate infinite;">nhấp nháy</span> trong hộp <span class="hl">Hiển thị trò chơi</span> khi trò chơi hiện tại đang chờ được giải phóng</span>`,
        platcustomtext: `Đặt thông báo tùy chỉnh cho việc hoàn thành 100% trò chơi để hiển thị trong thông báo<br><br><span class="ttdesc">Tùy chọn này sẽ bị ẩn khi Customiser > Cài đặt sẵn > Thành phần thông báo > Mô tả thành tích bị vô hiệu hóa</span>`,
        raui: `Hiển thị tên các trò chơi RetroAchievements được phát hiện trong giao diện hiển thị trò chơi/khu vực khay hệ thống<br><br><span class="ttdesc">Khi được bật, có thể xảy ra hành vi không mong muốn của giao diện hiển thị trò chơi/khu vực khay hệ thống nếu trò chơi Steam và RetroAchievements đang chạy đồng thời</span>`
    },
    update: {
        updateavailable: "Có bản cập nhật mới",
        sub: [
            `<span id="newversion"></span>`,
            "Có bản cập nhật mới cho Steam Achievement Notifier!",
            `Ghi chú phát hành đầy đủ có sẵn trên <span id="discordreleasenotes"></span> và <span id="githubreleasenotes"></span>`
        ],
        update: "Cập nhật"
    },
    linkgame: {
        content: {
            exepath: "Đường dẫn tệp thực thi",
            linkedgame: "Liên kết trò chơi",
            autoreleasegame: "Tự động giải phóng trò chơi",
            linkedgamessub: [
                `Ghi đè tất cả tiến trình trò chơi đang chạy được theo dõi tự động bởi <span class="hl">SANWatcher</span>, và thay vào đó chỉ kiểm tra xem <span class="hl">tệp thực thi của trò chơi</span> đã chọn có đang hoạt động hay không`,
                `Liên kết <span class="hl">AppID</span> của bất kỳ trò chơi nào với <span class="hl">tệp thực thi trò chơi</span> mục tiêu, hoặc <span class="hl">xóa</span> liên kết hiện có`
            ],
            autoreleasegamessub: [
                `Nếu Steam vẫn hiển thị trò chơi là <i>Đang chơi</i> sau khi cửa sổ trò chơi đã đóng, hãy thử thêm một mục mới vào <span class="hl">$linkgame</span>`,
                `Thêm <span class="hl">AppID</span> của một trò chơi cụ thể cùng với <span class="hl">tệp thực thi trò chơi</span> dự kiến, hoặc <span class="hl">xóa</span> mục hiện có`,
            ],
            managesub: [
                `Sau khi phát hiện trò chơi, các mục mới cũng có thể được thêm qua <span class="hl">cửa sổ đang được focus</span> bằng cách <i>nhấp chuột phải</i> vào <span class="hl">biểu tượng khay hệ thống</span> > <span class="hl">$linkgame</span>`,
                `<span class="hl help" id="appidhelp"><u>Làm thế nào để tìm AppID của một trò chơi Steam?</u></span>`
            ],
            linknew: "Mục mới",
            linknewsub: [
                `Liên kết <span class="hl">AppID</span> của trò chơi mới với <span class="hl">tệp thực thi trò chơi</span> mục tiêu`,
                `Sau khi thêm, các mục có thể được <span class="hl">xóa</span> thông qua menu <span class="hl">$linkgame</span> trước đó`
            ],
            linkedit: "Chỉnh sửa mục",
            linkeditsub: [
                `Chỉnh sửa liên kết hiện có giữa <span class="hl">AppID</span> của trò chơi và <span class="hl">tệp thực thi trò chơi</span> mục tiêu`,
                `Sau khi thêm, các mục có thể được <span class="hl">xóa</span> thông qua menu <span class="hl">$linkgame</span> trước đó`
            ],
            link: "Thêm",
            findappid: "Tìm Steam AppID",
            findappidsub: [
                `Mỗi trò chơi Steam đều có một số duy nhất gọi là <span class="hl">AppID</span>. Bạn có thể tìm AppID của bất kỳ trò chơi Steam nào bằng một trong các cách sau:`,
                `Trong <span class="hl">ứng dụng Steam</span>, <i>nhấp chuột phải</i> vào trò chơi trong <span class="hl">Thư viện</span> và chọn <i>Thuộc tính</i> > <i>Cập nhật</i> - AppID sẽ được hiển thị ở đây`,
                `URL của <span class="hl">trang cửa hàng</span> trò chơi - đó là số nằm sau <span class="hl">app/</span>: <code class="helpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Các trang web như <span class="hl">SteamDB</span> - mục <span class="hl">App Info</span> sẽ hiển thị AppID của từng trò chơi`
            ],
            noexe: "Không tìm thấy file EXE của trò chơi!",
            noexesub: "Nhấn vào đây để biết thêm thông tin",
            noexedialogsub: [
                `Steam Achievement Notifier không thể tự động xác định tệp thực thi của trò chơi này. Vị trí của tệp thực thi là cần thiết để "giải phóng" trò chơi sau khi đóng`,
                `Để giải phóng trò chơi thủ công sau khi đóng, <i>nhấp chuột phải</i> vào <span class="hl">biểu tượng khay hệ thống</span> > <span class="hl">Tùy chọn</span> > <span class="hl">Giải phóng trò chơi</span>, hoặc sử dụng <span class="hl">phím tắt Giải phóng trò chơi</span>`,
                `Hoặc nhấn nút <span class="hl">Thêm</span> bên dưới để thêm tệp thực thi của cửa sổ đang focus vào <span class="hl">Cài đặt</span> > <span class="hl">Trò chơi</span> > <span class="hl">Trò chơi tự động giải phóng</span>`,
            ],
            linkedgamefocussub: `Để ghi đè tất cả tiến trình trò chơi đang chạy được theo dõi tự động bởi <span class="hl">SANWatcher</span>, hãy thêm một mục mới trong <span class="hl">Trò chơi liên kết</span>`,
            autoreleasegamefocussub: `Nếu Steam vẫn hiển thị trò chơi là <i>Đang chơi</i> sau khi cửa sổ trò chơi đã đóng, hãy thử thêm một mục mới trong <span class="hl">Trò chơi tự động giải phóng</span>`,
            focussub: `Để thực hiện điều này cho trò chơi hiện tại, hãy nhấn nút <span class="hl">Thêm</span> bên dưới để thêm tệp thực thi của cửa sổ đang focus vào <span class="hl">Cài đặt</span> > <span class="hl">Trò chơi</span> > <span class="hl">$linkgame</span>`,
            linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>Điều gì xảy ra khi tôi nhấn nút Thêm?</u></span>`,
            linkgamehelp: "Liên kết qua cửa sổ đang focus",
            linkgamehelpsub: [
                `Khi nhấn nút <span class="hl">Thêm</span>, một mục mới sẽ tự động được thêm vào <span class="hl">Cài đặt</span> > <span class="hl">Trò chơi</span> > <span class="hl">Trò chơi tự động giải phóng</span>, sử dụng thông tin từ cửa sổ đang focus.`,
                `Sau khi nhấn nút <span class="hl">Thêm</span>, sẽ bắt đầu đếm ngược 5 giây`,
                `Trước khi hết thời gian, hãy chuyển focus sang cửa sổ trò chơi`,
                `Khi hết thời gian, một mục mới cho <span class="hl">AppID</span> hiện tại sẽ được thêm vào <span class="hl">Cài đặt</span> > <span class="hl">Trò chơi</span> > <span class="hl">Trò chơi tự động giải phóng</span>, sử dụng tệp thực thi của cửa sổ đang focus`,
                `Các lần thử mới sẽ ghi đè mục hiện có, hoặc mục có thể được xóa trong <span class="hl">Cài đặt</span> > <span class="hl">Trò chơi</span> > <span class="hl">Trò chơi tự động giải phóng</span> bằng cách nhấn nút <span id="linkhelpunlink"></span>`
            ],
            addlinkfailed: "Không thể thêm cửa sổ",
            addlinkfailedsub: `Nhấn nút <span class="hl">Thêm</span> để thử lại`
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Thêm <span class="hl">AppID</span> của bất kỳ trò chơi Steam nào vào <span class="hl">Danh sách Loại trừ</span>`,
                `Steam Achievement Notifier sẽ không cố gắng theo dõi dữ liệu thành tích cho bất kỳ trò chơi nào mà có <span class="hl">AppID</span> đã được thêm vào <span class="hl">Danh sách Loại trừ</span>`,
                `<span class="hl" id="appidhelp"><u>Làm thế nào để tìm AppID của một trò chơi Steam?</u></span>`
            ],
            exclusionnew: "Loại trừ Mới",
            exclusionnewsub: [
                `Nhập <span class="hl">AppID</span> để thêm vào <span class="hl">Danh sách Loại trừ</span>`
            ],
            exclusionedit: "Chỉnh sửa Loại trừ",
            exclusioneditsub: [
                `Chỉnh sửa <span class="hl">AppID</span> hiện có trong <span class="hl">Danh sách Loại trừ</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Thêm <span class="hl">AppID</span> của bất kỳ trò chơi Steam nào vào <span class="hl">Danh sách bao gồm</span>`,
                `Steam Achievement Notifier chỉ theo dõi dữ liệu thành tựu cho các trò chơi có <span class="hl">AppID</span> được thêm vào <span class="hl">Danh sách bao gồm</span>`,
                `<span class="hl help" id="appidhelp"><u>Làm cách nào để tìm AppID của trò chơi Steam?</u></span>`
            ],
            inclusionnew: "Thêm bao gồm mới",
            inclusionnewsub: [
                `Nhập <span class="hl">AppID</span> để thêm vào <span class="hl">Danh sách bao gồm</span>`
            ],
            inclusionedit: "Chỉnh sửa bao gồm",
            inclusioneditsub: [
                `Chỉnh sửa <span class="hl">AppID</span> hiện có trong <span class="hl">Danh sách bao gồm</span>`
            ]
        }
    },
    notificationelems: {
        title: "Các yếu tố thông báo",
        content: {
            unlockmsg: "Thông báo mở khóa",
            title: "Tiêu đề thành tựu",
            desc: "Mô tả thành tựu",
            hiddeniconpos: "Biểu tượng ẩn",
            sshiddeniconpos: "Biểu tượng ẩn",
            decorationpos: "Trang trí",
            ssdecorationpos: "Trang trí",
            percentpos: "Tỷ lệ hiếm có",
            sspercentpos: "Tỷ lệ hiếm có",
            percentbadge: "Huy hiệu Phần trăm",
            sspercentbadge: "Huy hiệu Phần trăm",
            percentbadgepos: "Vị trí Huy hiệu",
            sspercentbadgepos: "Vị trí Huy hiệu",
            percentbadgecolor: "Màu Huy hiệu",
            sspercentbadgecolor: "Màu Huy hiệu",
            percentbadgefontcolor: "Màu Chữ Huy Hiệu",
            sspercentbadgefontcolor: "Màu Chữ Huy Hiệu",
            percentbadgefontsize: "Kích thước Huy hiệu",
            sspercentbadgefontsize: "Kích thước Huy hiệu",
            percentbadgeroundness: "Độ Bo của Huy hiệu",
            sspercentbadgeroundness: "Độ Bo của Huy hiệu",
            percentbadgex: "Offset theo chiều ngang",
            sspercentbadgex: "Offset theo chiều ngang",
            percentbadgey: "Offset theo chiều dọc",
            sspercentbadgey: "Offset theo chiều dọc",
            percentbadgeimg: "Sử dụng Biểu tượng",
            sspercentbadgeimg: "Sử dụng Biểu tượng",
            percentbadgeimgbronze: "Độ hiếm: > $semirarity",
            sspercentbadgeimgbronze: "Độ hiếm: > $semirarity",
            percentbadgeimgsilver: "Độ hiếm: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Độ hiếm: < $semirarity & > $rarity",
            percentbadgeimggold: "Độ hiếm: < $rarity",
            sspercentbadgeimggold: "Độ hiếm: < $rarity",
            resetpbimgs: "Đặt lại Biểu tượng Huy hiệu",
            elemsmatch: "Khớp với Cài đặt Trình tùy chỉnh",
            ssdisplay: "Bản xem trước ảnh chụp màn hình"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Thêm <span class="hl">AppID</span>/<span class="hl">GameID</span> của bất kỳ trò chơi nào để tự động chuyển <span class="hl">chủ đề</span> khi được phát hiện`,
                `Bất kỳ <span class="hl">chủ đề</span> đã lưu nào cũng có thể được chọn cho từng loại thông báo, cùng với màn hình dùng làm <span class="hl">nguồn ảnh chụp màn hình</span>`,
                `<span class="hl help" id="appidhelp"><u>Làm thế nào để tìm AppID của trò chơi Steam?</u></span>`,
                `<span class="hl help" id="ragameidhelp"><u>Làm thế nào để tìm GameID của trò chơi RetroAchievements?</u></span>`
            ],
            themeswitchnew: "Chuyển đổi tự động mới",
            themeswitchnewsub: [
                `Nhập <span class="hl">AppID</span>/<span class="hl">GameID</span> của trò chơi, cùng với màn hình dùng làm <span class="hl">nguồn ảnh chụp màn hình</span>`,
                `Có thể nhập nhiều <span class="hl">AppID</span>/<span class="hl">GameID</span> cùng lúc bằng cách phân tách bằng dấu phẩy (<code>,</code>) hoặc dấu chấm phẩy (<code>;</code>)`,
                `Chọn <span class="hl">chủ đề</span> sẽ chuyển sang cho từng loại thông báo khi phát hiện <span class="hl">AppID</span>/<span class="hl">GameID</span> của trò chơi này`
            ],
            themeswitchedit: "Chỉnh sửa chuyển đổi tự động",
            themeswitcheditsub: [
                `Chỉnh sửa màn hình dùng làm <span class="hl">nguồn ảnh chụp màn hình</span> cho <span class="hl">AppID</span>/<span class="hl">GameID</span> của trò chơi này`,
                `Thay đổi <span class="hl">chủ đề</span> sẽ chuyển sang cho từng loại thông báo khi phát hiện <span class="hl">AppID</span>/<span class="hl">GameID</span> của trò chơi này`
            ],
            themes: "Chủ đề",
            src: "Nguồn ảnh chụp màn hình",
            themedeleted: "Đã xóa chủ đề",
            rafindgameid: "Tìm RA GameID",
            rafindgameidsub: [
                `Mỗi trò chơi RetroAchievements có một số duy nhất gọi là <span class="hl">GameID</span>. Bạn có thể tìm GameID của bất kỳ trò chơi RetroAchievements nào bằng cách kiểm tra:`,
                `URL của <span class="hl">trang trò chơi</span> trên trang RetroAchievements — đó là số nằm sau <span class="hl">game/</span>: <code class="helpcode">https://retroachievements.org/game/<span class="hl">10003</span></code>`
            ]
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Có vẻ như bạn đang cố gắng bật tùy chọn <span class="hl">${opt}</span>, nhưng tùy chọn này không thể bật được nếu chưa cài đặt gói <code class="dialogcode">${dep}</code>`,
    `Vui lòng chạy <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> để cài đặt phụ thuộc này`
]