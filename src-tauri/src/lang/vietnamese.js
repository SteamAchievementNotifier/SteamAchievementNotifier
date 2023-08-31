export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Không phát hiện Người dùng",
                tt: "Người dùng Steam đang được theo dõi thành tựu hiện tại"
            },
            gamelbl: {
                elem: gameName ? gameName : "Không phát hiện Trò chơi",
                tt: "Trò chơi đang được theo dõi thành tựu hiện tại"
            },
            previewbtn: {
                tt: "Xem trước âm thanh đã chọn"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Mặc định (Chưa chọn tệp âm thanh)" : custom.sounddir ? custom.sounddir : "Mặc định (Chưa chọn thư mục âm thanh)"
            },              
            soundmodelbl: {
                elem: "Chế độ âm thanh:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "file" : "ngẫu nhiên"
            },
            togglemain: {
                elem: "Chính",
                tt: "Thông báo Thành tựu Chính"
            },
            togglerare: {
                elem: "Hiếm",
                tt: "Thông báo Thành tựu Hiếm"
            },
            toggleplat: {
                elem: "100%",
                tt: "Thông báo Thành tựu 100%"
            },
            progresscirclewrapper: {
                tt: "Hiển thị xem trước thông báo tùy chỉnh"
            },
            testbtnwrapper: {
                elem: "Hiển thị Thông báo Kiểm tra",
                tt: "Hiển thị xem trước thông báo tùy chỉnh",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Tùy chỉnh...",
                tt: "Mở menu tùy chỉnh thông báo",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam không hoạt động"
            },
            updatebtn: {
                tt: "Cập nhật có sẵn"
            },
            kofibtn: "Ủng hộ trên Ko-Fi!",
            discordbtn: "Tham gia Discord!",
            githubbtn: "Báo cáo vấn đề trên GitHub!",
            settingstitlelbl: {
                elem: "Cài đặt"
            },
            configuration: {
                elem: "Cấu hình",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Ngôn ngữ",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Hệ điều hành",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Thông báo",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Ảnh chụp màn hình",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Tiện ích",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Khác",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Phiên bản"
            },            
            apikeybtn: {
                tt: "Nhấp vào đây để lấy Khóa API Web Steam của bạn"
            },
            apikey: {
                placeholder: "Nhập khóa API của bạn",
                tt: "Khóa API Web Steam liên kết với tài khoản Steam của bạn"
            },
            eyebtn: {
                tt: "Chuyển đổi hiển thị Khóa API"
            },
            apikeylbl: {
                elem: "Lấy Khóa API"
            },
            steam64idbtn: {
                tt: "Nhấp vào đây để lấy Steam64 ID của bạn"
            },
            steam64id: {
                placeholder: "Nhập Steam64 ID của bạn",
                tt: "Steam64 ID liên kết với tài khoản Steam của bạn"
            },
            steam64idlbl: {
                elem: "Lấy Steam64 ID"
            },
            switchaccountspan: {
                elem: "Chuyển Đổi Tài khoản"
            },
            switchaccountbtn: {
                tt: "Chuyển đổi giữa các tài khoản Steam đã liên kết"
            },
            testconnectionlbl: {
                elem: "Kiểm Tra Kết Nối",
                tt: "Kiểm tra kết nối với Steam Web API"
            },
            lang: {
                tt: "Đặt ngôn ngữ cho giao diện và thông báo"
            },            
            desktop: {
                elem: "Tạo một phím tắt trên màn hình",
                tt: "Tạo một lối tắt trên desktop để khởi chạy ứng dụng",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Khởi động cùng Windows",
                tt: "Tự động chạy ứng dụng khi Windows khởi động",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Khởi động ở chế độ Thu nhỏ",
                tt: "Thu nhỏ ứng dụng vào khay hệ thống sau khi khởi động",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Tắt Tăng tốc Phần cứng",
                tt: "Tắt Tăng tốc Phần cứng cho cửa sổ ứng dụng",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Chế độ Nhẹ",
                tt: "Tắt cửa sổ chính của ứng dụng để tiết kiệm tài nguyên hệ thống. Các tùy chọn tối thiểu sẽ vẫn có sẵn thông qua biểu tượng khay hệ thống để tương tác với ứng dụng",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Phần trăm Hiếm",
                tt: `Chỉ hiển thị thành tựu có tỷ lệ mở khóa toàn cầu dưới con số này như thông báo "Hiếm"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Chế độ Chỉ âm thanh",
                tt: "Tắt thông báo, nhưng phát âm thanh đã chọn khi mở khóa một thành tựu",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Hiển thị Tỷ lệ Mở khóa Tất cả",
                tt: "Hiển thị tỷ lệ mở khóa toàn cầu trong tất cả các loại thông báo",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Sao chép sang Cửa sổ Bên ngoài",
                tt: `Một cửa sổ bên ngoài sao chép tất cả thông báo. Có thể là mục tiêu của phần mềm thu phát sóng/chụp màn hình.<div class="ttwarn">Cửa sổ này là <u>hoàn toàn trong suốt</u>. Để làm nổi bật vị trí hiện tại của cửa sổ, giữ phím <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Hiển thị Thông báo "Đang Theo dõi"`,
                tt: `Bật/tắt thông báo "Đang Theo dõi" khi khởi động trò chơi`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Phím tắt thông báo",
                tt: "Thiết lập phím tắt để kích hoạt Thông báo Kiểm tra",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Thiết lập phím tắt để kích hoạt Thông báo Kiểm tra cho loại này"
            },
            sctabmain: {
                tt: "Phím tắt thông báo chính"
            },
            sctabrare: {
                tt: "Phím tắt thông báo hiếm"
            },
            sctabplat: {
                tt: "Phím tắt thông báo 100%"
            },
            screenshotmode: {
                tt: "Chọn chế độ chụp ảnh tự động khi mở khóa thành tựu"
            },
            displayscreenshot: {
                elem: "Hiển thị ảnh chụp màn hình thông báo",
                tt: "Hiển thị xem trước ảnh chụp màn hình trong thông báo thành tựu",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Phím tắt chụp màn hình Steam",
                tt: "Phù hợp phím tắt của bạn trên Steam để chụp ảnh màn hình Steam nguyên bản khi mở khóa thành tựu",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Giao diện Thông báo Chính`
            },
            ovtabrare: {
                tt: `Giao diện Thông báo Hiếm`
            },
            ovtabplat: {
                tt: `Giao diện Thông báo 100%`
            },
            monitor: {
                elem: "Màn hình",
                tt: "Chọn màn hình để sử dụng làm nguồn ảnh chụp màn hình",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Vị trí lớp phủ",
                tt: "Đặt vị trí của thông báo giao diện",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Đường dẫn",
                tt: "Đặt đường dẫn nơi ảnh chụp màn hình sẽ được lưu",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Xem trước",
                tt: `Xem trước thông báo giao diện`,
                query: "label"
            },
            noanim: {
                elem: "Tắt Hiệu ứng Cửa sổ Ứng dụng",
                tt: "Tắt hiệu ứng chuyển tiếp trong cửa sổ ứng dụng",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Bật Hỗ trợ NVDA",
                tt: "Sao chép nội dung thông báo vào clipboard để đọc bằng phần mềm đọc màn hình NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Hiển thị Gợi ý",
                tt: "Bật/tắt gợi ý khi di chuột qua các phần tử của ứng dụng",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Hiển thị Công cụ Phát triển Thông báo",
                tt: "Mở Bảng công cụ Phát triển Thông báo khi kích hoạt",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Xem Chính sách Bảo mật",
                tt: "Xem Chính sách Bảo mật của Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Tham gia Kênh Beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Mở Nhật ký Ứng dụng",
                tt: "Xem và chia sẻ nội dung của nhật ký ứng dụng",
                query: "label"
            },
            resetbtn: {
                elem: "Đặt lại Ứng dụng",
                tt: "Xóa tất cả dữ liệu đã lưu và khởi động lại ứng dụng",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Tạm dừng/phát lại hoạt hình thông báo"
            },
            customiserreplay: {
                tt: "Phát lại hoạt hình thông báo"
            },
            customisersavepreset: {
                tt: "Lưu các tùy chỉnh hiện tại dưới dạng Mẫu thông báo mới"
            },
            tabbtnnext: {
                tt: "Tiếp theo"
            },
            tabbtnprev: {
                tt: "Quay lại"
            },
            notificationpreset: {
                elem: "Mẫu",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Mẫu Thông báo",
                tt: "Chọn một mẫu thông báo để tùy chỉnh",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Hoạt hình hiếm",
                tt: "Chuyển đổi hoạt hình nền biểu tượng",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Hiển thị tất cả chi tiết",
                tt: `Hiển thị tất cả các chi tiết thông báo có sẵn`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Thời gian hiển thị",
                tt: "Thời gian hiển thị của thông báo",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Tỷ lệ",
                tt: "Kích thước của thông báo<br><i>*Không phản ánh trong cửa sổ xem trước</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Văn bản Tùy chỉnh",
                tt: "Hiển thị một tin nhắn tùy chỉnh trong thông báo",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Sử dụng Tiêu đề Trò chơi",
                tt: "Hiển thị tiêu đề của trò chơi hiện tại trong thông báo",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Phông Chữ Tùy Chỉnh",
                tt: "Tải lên tệp phông chữ tùy chỉnh để áp dụng cho tất cả các yếu tố văn bản trong thông báo",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Đặt lại thành phông chữ mặc định"
            },
            style: {
                elem: "Phong cách",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Phong cách Nền",
                tt: "Thiết lập phong cách nền của thông báo",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Góc Gradient",
                tt: "Thiết lập góc gradient màu sắc",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Hình nền",
                tt: "Chọn một tệp hình ảnh để đặt làm nền thông báo",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Độ sáng",
                tt: "Thiết lập độ sáng của hình nền hình ảnh trò chơi",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Độ bo góc",
                tt: "Thiết lập độ bo góc của các góc thông báo",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Cỡ chữ",
                tt: "Thiết lập tỷ lệ phóng đại của chữ",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Độ mờ",
                tt: "Thiết lập độ mờ của thông báo",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Chỉ nền",
                tt: "Chỉ áp dụng độ mờ cho nền, giữ văn bản và hình ảnh hoàn toàn không mờ",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Màu sắc",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Màu chính",
                tt: "Thiết lập màu chính của thông báo",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Màu phụ",
                tt: "Thiết lập màu phụ của thông báo",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Màu chữ",
                tt: "Thiết lập màu chữ",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Đường viền chữ",
                tt: "Áp dụng đường viền cho tất cả văn bản thông báo",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Màu đường viền",
                tt: "Thiết lập màu đường viền chữ",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Bóng chữ",
                tt: "Áp dụng bóng cho tất cả văn bản thông báo",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Màu bóng",
                tt: "Thiết lập màu bóng chữ",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Biểu tượng",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Độ bo góc biểu tượng",
                tt: "Thiết lập độ bo góc của biểu tượng thông báo",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Biểu tượng tùy chỉnh",
                tt: "Sử dụng một tệp hình ảnh làm biểu tượng tùy chỉnh",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Biểu tượng tùy chỉnh",
                tt: "Chọn một tệp hình ảnh để đặt làm biểu tượng tùy chỉnh",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Đặt lại biểu tượng tùy chỉnh`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Biểu tượng tùy chỉnh 100%",
                tt: `Sử dụng một tệp hình ảnh làm biểu tượng tùy chỉnh 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Biểu tượng tùy chỉnh 100%",
                tt: `Chọn một tệp hình ảnh để đặt làm biểu tượng tùy chỉnh 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Đặt lại biểu tượng tùy chỉnh 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Biểu tượng trò chơi",
                tt: "Sử dụng biểu tượng của trò chơi hiện tại",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Vị trí",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Vị trí Màn hình",
                tt: "Thiết lập vị trí của thông báo trên màn hình",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Vị trí tùy chỉnh",
                tt: "Sử dụng vị trí tùy chỉnh cho thông báo",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Thiết lập Vị trí",
                tt: "Thiết lập vị trí tùy chỉnh cho thông báo",
                query: "label"
            },
            animdir: {
                elem: "Hướng hoạt hình",
                tt: "Thiết lập hướng của hiệu ứng chuyển động của thông báo",
                query: ".sanboxlbl"
            },
            pptitle: {
                elem: "CHÍNH SÁCH BẢO MẬT"
            },
            ppusagetitle: {
                elem: "SỬ DỤNG DỮ LIỆU STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier sử dụng <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> của Valve để lấy và hiển thị dữ liệu liên quan đến tài khoản Steam của người dùng, thông qua việc cung cấp Steam API Key/Steam64 ID cho ứng dụng bởi người dùng. Dữ liệu này bao gồm:`
            },
            ppstats: {
                elem: "Thống kê về thành tựu đã mở và đã khóa"
            },
            ppusername: {
                elem: "Tên người dùng Steam của bạn"
            },
            ppsteamgames: {
                elem: "Các trò chơi Steam đã chơi của bạn"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier có thể sử dụng thêm dữ liệu Steam Web API trong tương lai để cung cấp các tính năng và cập nhật ứng dụng bổ sung."
            },
            ppkey64title: {
                elem: "SỬ DỤNG STEAM API KEY/STEAM64 ID"
            },
            ppauth: {
                elem: "Steam Achievement Notifier yêu cầu người dùng nhập Steam API Key/Steam64 ID để truy cập xác thực vào Steam Web API."
            },
            ppnoauth: {
                elem: "Mà không có thông tin này, các liên kết web (do Valve cung cấp để truy cập Steam Web API) được sử dụng để lấy dữ liệu liên quan đến tài khoản Steam của người dùng, bao gồm dữ liệu thành tựu, không thể được truy cập."
            },
            ppstoragetitle: {
                elem: "LƯU TRỮ DỮ LIỆU STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier tạm thời lưu trữ dữ liệu Steam Web API trên máy tính cá nhân của người dùng chỉ cho việc sử dụng trong ứng dụng. Bất kỳ lưu trữ tạm thời nào của dữ liệu này chỉ dành cho việc sử dụng bởi Steam Achievement Notifier và theo các điều kiện bình thường, tất cả dữ liệu Steam Web API không lưu trữ vĩnh viễn sẽ được xóa khỏi bộ nhớ địa phương khi người dùng thoát khỏi ứng dụng."
            },
            pppersist: {
                elem: "Dữ liệu lưu trữ lâu dài trên thiết bị của người dùng chỉ bao gồm dữ liệu được ứng dụng lưu trữ cho tiện ích người dùng, chẳng hạn như Steam API Key và Steam64 ID của người dùng."
            },
            ppdelete: {
                elem: "Người dùng cũng có thể xóa dữ liệu này bằng cách thủ công bất kỳ lúc nào nếu cần. Các tệp được tạo bởi Steam Achievement Notifier được lưu trữ trong thư mục sau:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Hiện chưa được hỗ trợ"
            },
            ppcollecttitle: {
                elem: "THÁI ĐỘ VỀ VIỆC THU THẬP DỮ LIỆU"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier sẽ <u>không bao giờ</u> gửi hoặc lưu trữ dữ liệu người dùng bên ngoài hệ thống tệp cục bộ của người dùng mà không có sự cho phép rõ ràng của người dùng. Điều này bao gồm bất kỳ thông tin nào được lấy qua Steam Web API để sử dụng trong ứng dụng, bao gồm cả Steam API Key/Steam64 ID được cung cấp cho ứng dụng để truy cập vào Steam Web API."
            },
            ppconsent: {
                elem: "Thông qua việc xác nhận đồng ý và việc sử dụng các tính năng hiện có hoặc sau này được thiết kế để gửi thông tin ra bên ngoài, người dùng ngầm đồng ý cho phép làm như vậy. Trong các trường hợp này, người dùng sẽ luôn được thông báo về tính chất của dữ liệu đang được gửi và sẽ được yêu cầu xác nhận đồng ý gửi dữ liệu ra bên ngoài ứng dụng."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier có ý định loại trừ bất kỳ phương tiện nào để truy cập, xem hoặc thu thập bất kỳ thông tin nào được người dùng cung cấp cho ứng dụng, nhưng thông qua các tính năng hiện có hoặc sau này, ứng dụng có thể gửi dữ liệu ra bên ngoài thay mặt người dùng, nhưng chỉ khi có sự cho phép của họ."
            },
            pprequests: {
                elem: "Yêu cầu truy cập dữ liệu từ Steam Web API được thực hiện từ bên trong ứng dụng bằng cách sử dụng các phương thức tích hợp sẵn, tương tự các chức năng được cung cấp bởi trình duyệt web. Các yêu cầu này chứa Steam API Key/Steam64 ID của người dùng như yêu cầu bắt buộc từ Steam Web API, nhưng không bao giờ được cung cấp hoặc tiết lộ cho bất kỳ ứng dụng khác nào."
            },
            ppusertitle: {
                elem: "TRÁCH NHIỆM CỦA NGƯỜI DÙNG"
            },
            ppsteamtou: {
                elem: `BẰNG CÁCH TẢI XUỐNG VÀ SỬ DỤNG BẤT KỲ PHIÊN BẢN CHÍNH THỨC NÀO CỦA STEAM ACHIEVEMENT NOTIFIER QUA <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">KHO LƯU TRỮ CHÍNH THỨC TRÊN GITHUB</span>, BẠN, NGƯỜI DÙNG, ĐỒNG NGHĨA VỚI VIỆC TUÂN THỦ CÁC MỤC 7 VÀ 8 CỦA <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">ĐIỀU KHOẢN SỬ DỤNG STEAM WEB API</span>.`
            },   
            gamedetails: "Chi tiết trò chơi",
            mustbepublic: "phải được đặt là Công khai",            
            nosoundfile: "Mặc định (Không có tệp âm thanh được chọn)",
            nosoundfolder: "Mặc định (Không có thư mục âm thanh được chọn)",
            file: "Tệp",
            randomised: "Ngẫu nhiên",            
            audioselectdialog: `Chọn Tệp Âm thanh ${custom.mode === "file" ? "File" : "Thư mục"}`,
            imgselectdialog: `Chọn Tệp Hình ảnh`,
            unsupported: "Tệp không được hỗ trợ!",
            novalidaudiofiles: "Không có tệp âm thanh hợp lệ!",
            nolocate: "Không thể xác định vị trí tệp!",
            switchaccountstitle: "Chuyển đổi tài khoản",
            noaccounts: "Thêm một tài khoản để bắt đầu!",
            connecting: "Đang kết nối...",
            connected: "Đã kết nối",
            testsuccessuser: `Bạn đã sẵn sàng`,
            testsuccess1: `Hãy đảm bảo <span>Chi tiết Trò chơi</span> của bạn được đặt là <span>Công khai</span> trong <a href="${privacysettings}">Cài đặt Quyền riêng tư</a> của Steam`,
            testsuccess2: `Kiểm tra chế độ hiển thị trong trò chơi của bạn đã được đặt là <span>Borderless</span> để thông báo hiển thị trên cửa sổ trò chơi`,
            noapikeytitle: "Không có API Key",
            noapikeytxt: "Vui lòng nhập API Key của bạn",
            noapikeyhint: `Nhấp vào biểu tượng <img src="./icon/key.svg" alt=""> để lấy API Key của bạn`,
            nosteam64idtitle: "Không có Steam64 ID",
            nosteam64idtxt: "Vui lòng nhập Steam64 ID của bạn",
            nosteam64idhint: `Nhấp vào biểu tượng <img src="./icon/id.svg" alt=""> để lấy Steam64 ID của bạn`,
            invalidapikeytitle: "API Key không hợp lệ!",
            invalidapikeymsg: "Không thể truy cập Steam Web API với API Key đã cung cấp",
            invalidapikeydetail1: "Kiểm tra xem API Key của bạn có chính xác không",
            invalidapikeydetail2: "Tạo một API Key mới cho tài khoản của bạn",
            invalidsteam64idtitle: "Steam64 ID không hợp lệ!",
            invalidsteam64idmsg: "Không tìm thấy tài khoản Steam liên quan đến Steam64 ID đã cung cấp",
            invalidsteam64iddetail1: "Kiểm tra giá trị Steam64 ID bạn đã cung cấp có phải là giá trị chính xác cho Tài khoản Steam của bạn",
            nonetworkfound: "Không tìm thấy kết nối mạng hoạt động",
            connecttonetwork: "Kết nối PC của bạn với mạng và thử lại",
            testdefaulterrortitle: "Đã xảy ra lỗi!",
            testdefaulterrormsg: "Đã xảy ra lỗi khi kết nối với Steam Web API",
            testdefaulterrordetail1: "Vui lòng báo cáo vấn đề này trên Discord hoặc GitHub!",
            sspath: "Chọn Đường dẫn Ảnh chụp màn hình",
            wronguser: user ? `${user} không đăng nhập vào Steam!` : "Không tìm thấy tài khoản người dùng liên kết!",
            switchuser: "Nhấp vào đây để chuyển đổi tài khoản",
            trackingfailed: "Theo dõi không thành công!",
            checkapplog: "Kiểm tra nhật ký ứng dụng để biết chi tiết",
            soon: "Sắp ra mắt!",
            gamecomplete: "100% Hoàn thành",
            gametitle: "Tiêu đề Trò chơi",
            achievementunlocked: "Đã mở khóa thành tích",
            achievementtitle: "Tiêu đề Thành tích",
            allachievements: "Bạn đã mở khóa tất cả thành tích!",
            achievementdesc: "Mô tả Thành tích",
            show: "Hiển thị",
            quit: "Thoát",
            off: "Tắt",
            steamss: "Ảnh chụp màn hình trong trò chơi Steam",
            overlayss: "Ảnh chụp màn hình với Lớp phủ thông báo",
            match: "Tùy chỉnh Phù hợp",
            topleft: "Góc trên bên trái",
            topcenter: "Góc trên giữa",
            topright: "Góc trên bên phải",
            bottomleft: "Góc dưới bên trái",
            bottomcenter: "Góc dưới giữa",
            bottomright: "Góc dưới bên phải",
            solid: "Màu đơn",
            gradient: "Màu chuyển động",
            bgimg: "Hình ảnh nền",
            gameart: "Nghệ thuật Trò chơi",
            up: "Lên",
            down: "Xuống",
            left: "Trái",
            right: "Phải",
            tracking: "Đang theo dõi",
            inuse: "Đang sử dụng bởi",
            invalidshortcut: "Phím tắt không hợp lệ",
            nofont: "Không Chọn Phông Chữ",
            fontselectdialog: "Chọn Tệp Phông Chữ"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Chọn một tệp âm thanh để phát khi mở khóa thành tích" : "Chọn một thư mục chứa các tệp âm thanh để phát ngẫu nhiên khi mở khóa thành tích")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Dưới đây là một nhật ký về những gì đã xảy ra kể từ khi ứng dụng được khởi động lúc"
            },
            copylbl: {
                elem: "Sao chép Nội dung Nhật ký"
            },
            openlbl: {
                elem: "Tạo Tệp Nhật ký"
            },
        }        

        return translations
    }
}