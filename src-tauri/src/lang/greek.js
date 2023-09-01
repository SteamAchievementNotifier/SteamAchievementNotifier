export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Δεν Εντοπίστηκε Χρήστης",
                tt: "Ο χρήστης του Steam για τον οποίο παρακολουθούνται αυτή τη στιγμή τα επιτεύγματα"
            },
            gamelbl: {
                elem: gameName ? gameName : "Δεν Εντοπίστηκε Παιχνίδι",
                tt: "Το παιχνίδι για το οποίο παρακολουθούνται αυτή τη στιγμή τα επιτεύγματα"
            },
            previewbtn: {
                tt: "Προεπισκόπηση του επιλεγμένου ήχου"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Προεπιλογή (Δεν έχει επιλεγεί αρχείο ήχου)" : custom.sounddir ? custom.sounddir : "Προεπιλογή (Δεν έχει επιλεγεί φάκελος ήχου)"
            },              
            soundmodelbl: {
                elem: "Λειτουργία Ήχου:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "αρχείο" : "τυχαία"
            },
            togglemain: {
                elem: "Κύρια",
                tt: "Ειδοποίηση Κύριου Επιτεύγματος"
            },
            togglerare: {
                elem: "Σπάνια",
                tt: "Ειδοποίηση Σπάνιου Επιτεύγματος"
            },
            toggleplat: {
                elem: "100%",
                tt: "Ειδοποίηση Επιτευγμένου 100%"
            },
            progresscirclewrapper: {
                tt: "Εμφάνιση προεπισκόπησης της προσαρμοσμένης ειδοποίησης"
            },
            testbtnwrapper: {
                elem: "Εμφάνιση Δοκιμαστικής Ειδοποίησης",
                tt: "Εμφάνιση προεπισκόπησης της προσαρμοσμένης ειδοποίησης",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Προσαρμογή...",
                tt: "Άνοιγμα μενού προσαρμογής ειδοποιήσεων",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Το Steam δεν εκτελείται"
            },
            updatebtn: {
                tt: "Διαθέσιμη ενημέρωση"
            },
            kofibtn: "Δωρεά στο Ko-Fi!",
            discordbtn: "Εγγραφή στο Discord!",
            githubbtn: "Αναφορά Προβλήματος στο GitHub!",
            settingstitlelbl: {
                elem: "Ρυθμίσεις"
            },
            configuration: {
                elem: "Διαμόρφωση",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Γλώσσα",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Λειτουργικό Σύστημα",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Ειδοποιήσεις",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Στιγμιότυπα οθόνης",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Προσβασιμότητα",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Άλλα",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Έκδοση"
            },            
            apikeybtn: {
                tt: "Κάντε κλικ εδώ για να λάβετε το Steam Web API Key σας"
            },
            apikey: {
                placeholder: "Προσθήκη κλειδιού API",
                tt: "Το Steam Web API key που σχετίζεται με τον λογαριασμό σας στο Steam"
            },
            eyebtn: {
                tt: "Εναλλαγή ορατότητας του API Key"
            },
            apikeylbl: {
                elem: "Λήψη API Key"
            },
            steam64idbtn: {
                tt: "Κάντε κλικ εδώ για να λάβετε το Steam64 ID σας"
            },
            steam64id: {
                placeholder: "Προσθήκη Steam64 ID",
                tt: "Το Steam64 ID που σχετίζεται με τον λογαριασμό σας στο Steam"
            },
            steam64idlbl: {
                elem: "Λήψη Steam64 ID"
            },
            switchaccountspan: {
                elem: "Αλλαγή Λογαριασμών"
            },
            switchaccountbtn: {
                tt: "Αλλαγή μεταξύ συνδεδεμένων λογαριασμών Steam"
            },
            testconnectionlbl: {
                elem: "Δοκιμή Σύνδεσης",
                tt: "Δοκιμάστε τη σύνδεσή σας με το Steam Web API"
            },            
            lang: {
                tt: "Ορίστε τη γλώσσα για το UI και τις ειδοποιήσεις"
            },
            desktop: {
                elem: "Δημιουργία συντόμευσης",
                tt: "Δημιουργία συντόμευσης στην επιφάνεια εργασίας για να εκκινήσετε την εφαρμογή",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Εκκίνηση με τα Windows",
                tt: "Εκτέλεση της εφαρμογής αυτόματα όταν εκκινούν τα Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Έναρξη με Ελάχιστη Μείωση",
                tt: "Ελαχιστοποίηση της εφαρμογής στη γραμμή εργασιών μετά την εκκίνηση",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Χωρίς επιτάχυνση υλικού",
                tt: "Απενεργοποίηση της επιτάχυνσης υλικού για το παράθυρο της εφαρμογής",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Λειτουργία Ελαφρού Καθεστώτος",
                tt: "Απενεργοποιεί το κύριο παράθυρο της εφαρμογής για να εξοικονομήσει πόρους συστήματος. Θα παραμείνουν διαθέσιμες ελάχιστες επιλογές μέσω του εικονιδίου στη γραμμή εργασιών για την αλληλεπίδραση με την εφαρμογή",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Ποσοστό Σπανιότητας",
                tt: `Θα εμφανίζονται μόνο επιτεύγματα με παγκόσμιο ποσοστό ξεκλειδώματος κάτω από αυτό τον αριθμό ως ειδοποιήσεις "Σπάνιο"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Λειτουργία Μόνο Ήχου",
                tt: "Απενεργοποίηση ειδοποιήσεων, αλλά αναπαραγωγή του επιλεγμένου ήχου κατά το ξεκλείδωμα ενός επιτεύγματος",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Εμφάνιση όλων των ποσοστών",
                tt: "Εμφάνιση παγκόσμιων ποσοστών ξεκλειδώματος σε όλους τους τύπους ειδοποιήσεων",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Διπλότυπο στο παράθυρο",
                tt: `Ένα εξωτερικό παράθυρο που αντιγράφει όλες τις ειδοποιήσεις. Μπορεί να είναι στόχος λογισμικού ροής/καταγραφής οθόνης.<div class="ttwarn">Αυτό το παράθυρο είναι <u>πλήρως διαφανές</u>. Για να επισημάνετε την τρέχουσα θέση του παραθύρου, κρατήστε πατημένο το πλήκτρο <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Εμφάνιση "Τώρα παρακολουθώ"`,
                tt: `Εναλλαγή της ειδοποίησης "Τώρα Παρακολουθείται" όταν ξεκινάτε ένα παιχνίδι`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Συντομεύσεις",
                tt: "Ορίστε μια συντόμευση πληκτρολογίου για την ενεργοποίηση δοκιμαστικών ειδοποιήσεων",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Ορίστε μια συντόμευση για την ενεργοποίηση δοκιμαστικής ειδοποίησης για αυτόν τον τύπο"
            },
            sctabmain: {
                tt: "Κύρια συντόμευση ειδοποίησης"
            },
            sctabrare: {
                tt: "Σπάνια συντόμευση ειδοποίησης"
            },
            sctabplat: {
                tt: "Συντόμευση ειδοποίησης 100%"
            },
            screenshotmode: {
                tt: "Επιλέξτε τη λειτουργία για αυτόματες στιγμιότυπα επιτευγμάτων"
            },
            displayscreenshot: {
                elem: "Εμφάνιση στιγμιότυπου οθόνης",
                tt: "Εμφάνιση προεπισκόπησης των στιγμιοτύπων οθόνης μέσα στην ειδοποίηση επιτευγμάτων",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Συντόμευση Steam",
                tt: "Ταιριάξτε τη συντόμευση κλειδιού του πελάτη Steam για να πάρετε φυσικά στιγμιότυπα Steam κατά το ξεκλείδωμα επιτευγμάτων",
                query: ".sanboxlbl"
            },            
            ovtabmain: {
                tt: `Κύρια Επικάλυψη Ειδοποιήσεων`
            },
            ovtabrare: {
                tt: `Σπάνια Επικάλυψη Ειδοποιήσεων`
            },
            ovtabplat: {
                tt: `Επικάλυψη Ειδοποιήσεων 100%`
            },
            monitor: {
                elem: "Οθόνη",
                tt: "Επιλέξτε την οθόνη που θα χρησιμοποιηθεί ως πηγή στιγμιότυπου οθόνης",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Θέση",
                tt: "Ορίστε τη θέση της επικάλυψης ειδοποιήσεων",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Διαδρομή",
                tt: "Ορίστε τη διαδρομή όπου θα αποθηκεύονται τα στιγμιότυπα",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Προεπισκόπηση",
                tt: `Προεπισκόπηση της επικάλυψης ειδοποιήσεων`,
                query: "label"
            },
            noanim: {
                elem: "Χωρίς κινούμενα σχέδια",
                tt: "Απενεργοποίηση μεταβατικών κινήσεων μέσα στο παράθυρο της εφαρμογής",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Ενεργοποίηση Υποστήριξης NVDA",
                tt: "Αντιγραφή περιεχομένου ειδοποίησης στο πρόχειρο για να διαβαστεί από το λογισμικό ανάγνωσης οθόνης NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Εμφάνιση Συμβουλών",
                tt: "Εναλλαγή συμβουλών όταν τοποθετείτε το ποντίκι πάνω από στοιχεία της εφαρμογής",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Ειδοποιήσεις DevTools",
                tt: "Άνοιγμα του παραθύρου εργαλείων ειδοποιήσεων όταν ενεργοποιείται",
                query: ".sanboxlbl"
            },
            filesystem: {
                elem: "Φόρτωση αρχείου",
                tt: `Φόρτωση αρχείων ειδοποιήσεων και πόρων από τον κατάλογο εκτελέσιμου του εφαρμογικού αντί για εσωτερικά`,
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Προβολή Πολιτικής Απορρήτου",
                tt: "Προβολή της Πολιτικής Απορρήτου του Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Κανάλι Beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Αρχείο καταγραφής",
                tt: "Προβολή και κοινοποίηση του περιεχομένου της καταγραφής της εφαρμογής",
                query: "label"
            },
            resetbtn: {
                elem: "Επαναφορά Εφαρμογής",
                tt: "Αφαιρέστε όλα τα αποθηκευμένα δεδομένα και επανεκκινήστε την εφαρμογή",
                query: "label"
            },
            customiserplaystate: {
                tt: "Παύση/αναπαραγωγή της κινούμενης εικόνας ειδοποίησης"
            },
            customiserreplay: {
                tt: "Επανάληψη της κινούμενης εικόνας ειδοποίησης"
            },
            customisersavepreset: {
                tt: "Αποθήκευση των τρέχουσων προσαρμογών ως νέο πρότυπο ειδοποίησης"
            },
            tabbtnnext: {
                tt: "Επόμενο"
            },
            tabbtnprev: {
                tt: "Πίσω"
            },
            notificationpreset: {
                elem: "Πρότυπο",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Πρότυπο Ειδοποίησης",
                tt: "Επιλέξτε ένα πρότυπο ειδοποίησης για προσαρμογή",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Κινούμενο σπάνιο εικονίδιο",
                tt: `Εναλλαγή της κινούμενης εικόνας φόντου`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Όλες οι λεπτομέρειες",
                tt: `Εμφάνιση όλων των διαθέσιμων λεπτομερειών ειδοποιήσεων`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Χρόνος Εμφάνισης",
                tt: "Η διάρκεια εμφάνισης της ειδοποίησης",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Κλίμακα",
                tt: "Το μέγεθος της ειδοποίησης<br><i>*Δεν αποτυπώνεται στο παράθυρο προεπισκόπησης</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Προσαρμοσμένο Κείμενο",
                tt: "Εμφάνιση προσαρμοσμένου μηνύματος στην ειδοποίηση",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Χρήση Τίτλου Παιχνιδιού",
                tt: "Εμφάνιση του τίτλου του τρέχοντος παιχνιδιού στην ειδοποίηση",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Γραμματοσειρά",
                tt: "Φορτώστε ένα προσαρμοσμένο αρχείο γραμματοσειράς για να εφαρμόσετε σε όλα τα στοιχεία κειμένου μέσα στην ειδοποίηση",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Επαναφορά στην προεπιλεγμένη γραμματοσειρά"
            },
            style: {
                elem: "Στυλ",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Στυλ Φόντου",
                tt: "Ορισμός του στυλ του φόντου της ειδοποίησης",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Γωνία Ομαλής Μετάβασης",
                tt: "Ορισμός της γωνίας του χρωματικού μεταβαλλόμενου φόντου",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Εικόνα Φόντου",
                tt: "Επιλογή εικόνας για το φόντο της ειδοποίησης",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Φωτεινότητα",
                tt: "Ορισμός της φωτεινότητας του φόντου του καλλιτέχνη παιχνιδιού",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Στρογγυλότητα",
                tt: "Ορισμός της στρογγυλότητας των γωνιών της ειδοποίησης",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Μέγεθος κειμένου",
                tt: "Ορισμός της κλίμακας της γραμματοσειράς",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Αδιαφάνεια",
                tt: "Ορισμός της αδιαφάνειας της ειδοποίησης",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Μόνο Φόντο",
                tt: "Εφαρμογή αδιαφάνειας μόνο στο φόντο, αφήνοντας το κείμενο και τις εικόνες πλήρως αδιαφανείς",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Χρώματα",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Κύριο Χρώμα",
                tt: "Ορισμός του κύριου χρώματος ειδοποίησης",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Δευτερεύον Χρώμα",
                tt: "Ορισμός του δευτερεύοντος χρώματος ειδοποίησης",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Χρώμα Κειμένου",
                tt: "Ορισμός του χρώματος του κειμένου",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Περίγραμμα Κειμένου",
                tt: "Εφαρμογή περιγράμματος σε όλο το κείμενο της ειδοποίησης",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Χρώμα Περιγράμματος",
                tt: "Ορισμός του χρώματος του περιγράμματος του κειμένου",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Σκιά Κειμένου",
                tt: "Εφαρμογή σκιάς σε όλο το κείμενο της ειδοποίησης",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Χρώμα Σκιάς",
                tt: "Ορισμός του χρώματος της σκιάς του κειμένου",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Εικονίδιο",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Στρογγυλό εικονίδιο",
                tt: "Ορισμός της στρογγυλότητας του εικονιδίου της ειδοποίησης",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Εικονίδιο χρήστη",
                tt: "Χρήση ενός αρχείου εικόνας ως προσαρμοσμένο εικονίδιο",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Εικονίδιο χρήστη",
                tt: "Επιλογή ενός αρχείου εικόνας για να το ορίσετε ως προσαρμοσμένο εικονίδιο",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Επαναφορά Προσαρμοσμένου Εικονιδίου`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Εικονίδιο χρήστη 100%",
                tt: `Χρησιμοποιήστε ένα αρχείο εικόνας ως προσαρμοσμένο εικονίδιο 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Εικονίδιο χρήστη 100%",
                tt: `Επιλέξτε ένα αρχείο εικόνας για να το ορίσετε ως προσαρμοσμένο εικονίδιο 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Επαναφορά του προσαρμοσμένου εικονιδίου 100%`,
                query: ".sanboxlbl"
            },                   
            usegameicon: {
                elem: "Εικονίδιο παιχνιδιού",
                tt: "Χρήση του εικονιδίου του τρέχοντος παιχνιδιού",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Θέση",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Θέση Οθόνης",
                tt: "Ορισμός της θέσης της ειδοποίησης στην οθόνη",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Ελεύθερα Θέση",
                tt: "Χρήση μιας προσαρμοσμένης θέσης για την ειδοποίηση",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Ρύθμιση θέσης",
                tt: "Ορισμός μιας προσαρμοσμένης θέσης για την ειδοποίηση",
                query: "label"
            },
            animdir: {
                elem: "Κατεύθυνση Κίνησης",
                tt: "Ορισμός της κατεύθυνσης της κίνησης της ειδοποίησης",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ"
            },
            ppusagetitle: {
                elem: "ΧΡΗΣΗ ΔΕΔΟΜΕΝΩΝ ΑΠΟ ΤΗ STEAM WEB API"
            },
            ppusagecontent: {
                elem: "Το Steam Achievement Notifier χρησιμοποιεί την Steam Web API της Valve για να ανακτήσει και να εμφανίσει δεδομένα που σχετίζονται με τον λογαριασμό Steam του χρήστη, μέσω του συνδυασμού Κλειδιού Steam API/Steam64 ID που παρέχεται στην εφαρμογή από τον χρήστη. Αυτά τα δεδομένα περιλαμβάνουν:"
            },
            ppstats: {
                elem: "Στατιστικά για ξεκλείδωτα και κλειδωμένα επιτεύγματα"
            },
            ppusername: {
                elem: "Το όνομα χρήστη Steam σας"
            },
            ppsteamgames: {
                elem: "Τα παιχνίδια που έχετε παίξει στο Steam"
            },
            ppusagefooter: {
                elem: "Το Steam Achievement Notifier μπορεί να χρησιμοποιήσει επιπλέον δεδομένα από την Steam Web API στο μέλλον για να παρέχει επιπλέον χαρακτηριστικά και ενημερώσεις στην εφαρμογή."
            },
            ppkey64title: {
                elem: "ΧΡΗΣΗ ΚΛΕΙΔΙΟΥ STEAM API/STEAM64 ID"
            },
            ppauth: {
                elem: "Το Steam Achievement Notifier απαιτεί από τον χρήστη να εισάγει τον συνδυασμό Κλειδιού Steam API/Steam64 ID για πιστοποιημένη πρόσβαση στην Steam Web API."
            },
            ppnoauth: {
                elem: "Χωρίς αυτές τις πληροφορίες, οι ιστοσελίδες (που παρέχονται από τη Valve για πρόσβαση στη Steam Web API) που χρησιμοποιούνται για να ανακτήσουν δεδομένα σχετικά με τον λογαριασμό Steam του χρήστη - συμπεριλαμβανομένων των δεδομένων επιτευγμάτων - δεν μπορούν να αποκτηθούν πρόσβαση."
            },
            ppstoragetitle: {
                elem: "ΑΠΟΘΗΚΕΥΣΗ ΔΕΔΟΜΕΝΩΝ ΑΠΟ ΤΗ STEAM WEB API"
            },            
            ppstorage: {
                elem: "Το Steam Achievement Notifier αποθηκεύει προσωρινά δεδομένα της Steam Web API τοπικά στον υπολογιστή του χρήστη αποκλειστικά για χρήση εντός της εφαρμογής. Οποιαδήποτε προσωρινή αποθήκευση αυτών των δεδομένων προορίζεται αποκλειστικά για τη χρήση από το Steam Achievement Notifier και, κατά τις φυσιολογικές συνθήκες, όλα τα μη μόνιμα δεδομένα της Steam Web API θα διαγράφονται από την τοπική αποθήκευση κατά την έξοδο από την εφαρμογή."
            },
            pppersist: {
                elem: "Τα μόνιμα δεδομένα που αποθηκεύονται στη συσκευή του χρήστη περιλαμβάνουν μόνο δεδομένα που αποθηκεύονται από την εφαρμογή για την ευκολία του χρήστη, όπως το Steam Web API Key και το Steam64 ID του χρήστη."
            },
            ppdelete: {
                elem: "Αυτά τα δεδομένα μπορούν επίσης να διαγραφούν χειροκίνητα από τον χρήστη οποιαδήποτε στιγμή αν απαιτείται. Τα αρχεία που δημιουργούνται από το Steam Achievement Notifier βρίσκονται στον ακόλουθο φάκελο:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Προς το παρόν μη υποστηρίζεται"
            },
            ppcollecttitle: {
                elem: "ΘΕΣΗ ΑΠΟΣΤΟΛΗΣ ΔΕΔΟΜΕΝΩΝ"
            },
            ppnosend: {
                elem: "Το Steam Achievement Notifier δεν θα <u>ποτέ</u> αποστείλει ή θα αποθηκεύσει δεδομένα του χρήστη έξω από το τοπικό σύστημα αρχείων του χρήστη χωρίς την ρητή άδεια του χρήστη να το κάνει. Αυτό περιλαμβάνει οποιεσδήποτε πληροφορίες ανακτηθούν μέσω της Steam Web API για χρήση εντός της εφαρμογής, συμπεριλαμβανομένου του συνδυασμού Steam API Key/Steam64 ID που παρέχεται στην εφαρμογή για πρόσβαση στη Steam Web API."
            },
            ppconsent: {
                elem: "Μέσω της επιβεβαίωσης της συναίνεσης και της επακόλουθης χρήσης είτε υπάρχοντων είτε μελλοντικών υλοποιήσεων λειτουργιών σχεδιασμένων να αποστέλλουν πληροφορίες εξωτερικά, η άδεια παρέχεται αυτοδίκαια από το χρήστη για να γίνει αυτό. Σε αυτές τις περιπτώσεις, ο χρήστης θα ενημερώνεται πάντα για τη φύση των δεδομένων που αποστέλλονται και θα κληθεί να επιβεβαιώσει τη συναίνεσή του για την αποστολή δεδομένων έξω από την εφαρμογή."
            },
            ppexclude: {
                elem: "Το Steam Achievement Notifier αποκλείει σκόπιμα οποιονδήποτε τρόπο εξωτερικής πρόσβασης, προβολής ή συλλογής οποιωνδήποτε πληροφοριών που παρέχονται στην εφαρμογή από τον χρήστη, αλλά μέσω υφιστάμενων ή μελλοντικών υλοποιήσεων λειτουργιών, η εφαρμογή μπορεί να αποστείλει δεδομένα εξωτερικά εξ ονόματος του χρήστη, αλλά μόνο με τη συναίνεσή του."
            },
            pprequests: {
                elem: "Οι αιτήσεις για πρόσβαση σε δεδομένα από τη Steam Web API γίνονται από την ίδια την εφαρμογή χρησιμοποιώντας ενσωματωμένες μεθόδους, παρόμοιες με τις λειτουργίες που παρέχονται από τους web browsers. Αυτές οι αιτήσεις περιέχουν τον συνδυασμό Steam API Key/Steam64 ID του χρήστη, όπως απαιτείται από τη Steam Web API, αλλά δεν παρέχονται πρόθεση να είναι διαθέσιμες για χρήση ή παρεμβολή από άλλες εφαρμογές."
            },
            ppusertitle: {
                elem: "ΥΠΕΥΘΥΝΟΤΗΤΑ ΧΡΗΣΤΗ"
            },
            ppsteamtou: {
                elem: `ΜΕ ΤΟ ΝΑ ΚΑΤΕΒΑΣΕΤΕ ΚΑΙ ΝΑ ΧΡΗΣΙΜΟΠΟΙΗΣΕΤΕ ΟΠΟΙΑΔΗΠΟΤΕ ΕΠΙΣΗΜΟΠΟΙΗΜΕΝΗ ΕΚΔΟΣΗ ΤΟΥ STEAM ACHIEVEMENT NOTIFIER ΜΕ ΤΗ ΧΡΗΣΗ ΤΟΥ <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">ΕΠΙΣΗΜΟΥ ΑΠΟΘΕΤΗΡΙΟΥ ΤΟΥ GITHUB</span>, ΕΣΕΙΣ, Ο ΧΡΗΣΤΗΣ, ΜΕ ΕΠΕΚΤΑΣΗ, ΣΥΜΜΟΡΦΩΝΕΣΤΕ ΜΕ ΤΙΣ ΕΝΟΤΗΤΕΣ 7 ΚΑΙ 8 ΤΩΝ <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">ΟΡΩΝ ΧΡΗΣΗΣ ΤΗΣ STEAM WEB API</span>.`
            },     
            gamedetails: "Λεπτομέρειες Παιχνιδιού",
            mustbepublic: "πρέπει να οριστεί ως Δημόσιο",            
            nosoundfile: "Προεπιλογή (Δεν επιλέχθηκε αρχείο ήχου)",
            nosoundfolder: "Προεπιλογή (Δεν επιλέχθηκε φάκελος ήχου)",
            file: "Αρχείο",
            randomised: "Τυχαίο",
            audioselectdialog: `Επιλέξτε ${custom.mode === "file" ? "Αρχείο" : "Φάκελο"} Ήχου`,
            imgselectdialog: `Επιλέξτε Αρχείο Εικόνας`,
            unsupported: "Μη υποστηριζόμενο αρχείο!",
            novalidaudiofiles: "Δεν υπάρχουν έγκυρα αρχεία ήχου!",
            nolocate: "Δεν είναι δυνατή η εντοπισμός του αρχείου!",
            switchaccountstitle: "Αλλαγή λογαριασμών",
            noaccounts: "Προσθέστε έναν λογαριασμό για να ξεκινήσετε!",
            connecting: "Σύνδεση...",
            connected: "Συνδεδεμένος",
            testsuccessuser: `Είστε έτοιμοι να ξεκινήσετε`,
            testsuccess1: `Βεβαιωθείτε ότι η <span>Λεπτομέρειες Παιχνιδιού</span> σας είναι ρυθμισμένες ως <span>Δημόσιες</span> στις <a href="${privacysettings}">Ρυθμίσεις Απορρήτου του Steam</a>`,
            testsuccess2: `Ελέγξτε ότι η λειτουργία εμφάνισης κατά την εκτέλεση του παιχνιδιού σας είναι ρυθμισμένη ως <span>Πλαίσιο χωρίς περιθώρια</span> για να εμφανίζονται οι ειδοποιήσεις πάνω από το παράθυρο του παιχνιδιού`,
            noapikeytitle: "Δεν υπάρχει Κλειδί API",
            noapikeytxt: "Παρακαλούμε εισάγετε το Κλειδί API σας",
            noapikeyhint: `Κάντε κλικ στο εικονίδιο <img src="./icon/key.svg" alt=""> για να λάβετε το Κλειδί API σας`,
            nosteam64idtitle: "Δεν υπάρχει Steam64 ID",
            nosteam64idtxt: "Παρακαλούμε εισάγετε το Steam64 ID σας",
            nosteam64idhint: `Κάντε κλικ στο εικονίδιο <img src="./icon/id.svg" alt=""> για να λάβετε το Steam64 ID σας`,
            invalidapikeytitle: "Μη έγκυρο Κλειδί API!",
            invalidapikeymsg: "Δεν είναι δυνατή η πρόσβαση στη Steam Web API με το παρεχόμενο Κλειδί API",
            invalidapikeydetail1: "Ελέγξτε ότι το Κλειδί API είναι σωστό",
            invalidapikeydetail2: "Δημιουργήστε ένα νέο Κλειδί API για τον λογαριασμό σας",
            invalidsteam64idtitle: "Μη έγκυρο Steam64 ID!",
            invalidsteam64idmsg: "Δεν είναι δυνατός ο εντοπισμός ενός λογαριασμού Steam που σχετίζεται με το παρεχόμενο Steam64 ID",
            invalidsteam64iddetail1: "Ελέγξτε ότι η τιμή του Steam64 ID που έχετε δώσει είναι η σωστή για τον λογαριασμό Steam σας",
            nonetworkfound: "Δεν βρέθηκε ενεργή σύνδεση δικτύου",
            connecttonetwork: "Συνδέστε τον υπολογιστή σας σε ένα δίκτυο και προσπαθήστε ξανά",
            testdefaulterrortitle: "Παρουσιάστηκε Σφάλμα!",
            testdefaulterrormsg: "Παρουσιάστηκε σφάλμα κατά τη σύνδεση με την Steam Web API",
            testdefaulterrordetail1: "Παρακαλούμε αναφέρετε αυτό το πρόβλημα στο Discord ή το GitHub!",
            sspath: "Επιλέξτε Διαδρομή Στιγμιότυπου Οθόνης",
            wronguser: user ? `${user} δεν έχει συνδεθεί στο Steam!` : "Δεν βρέθηκαν συνδεδεμένοι λογαριασμοί χρήστη!",
            switchuser: "Κάντε κλικ εδώ για να αλλάξετε λογαριασμούς",
            trackingfailed: "Αποτυχία Καταγραφής!",
            checkapplog: "Ελέγξτε το αρχείο καταγραφής της εφαρμογής για λεπτομέρειες",
            soon: "Έρχεται σύντομα!",
            gamecomplete: "Ολοκλήρωση 100%",
            gametitle: "Τίτλος Παιχνιδιού",
            achievementunlocked: "Ξεκλείδωση Επίτευγματος",
            achievementtitle: "Τίτλος Επιτεύγματος",
            allachievements: "Ξεκλειδώσατε όλα τα επιτεύγματα!",
            achievementdesc: "Περιγραφή Επιτεύγματος",
            show: "Εμφάνιση",
            quit: "Έξοδος",
            off: "Ανενεργό",
            steamss: "Στιγμιότυπο οθόνης Steam",
            overlayss: "Στιγμιότυπο οθόνης με επικάλυψη",
            match: "Προσαρμογή Εμφάνισης",
            topleft: "Πάνω Αριστερά",
            topcenter: "Πάνω Κέντρο",
            topright: "Πάνω Δεξιά",
            bottomleft: "Κάτω Αριστερά",
            bottomcenter: "Κάτω Κέντρο",
            bottomright: "Κάτω Δεξιά",
            solid: "Συμπαγές",
            gradient: "Σταδιακή",
            bgimg: "Εικόνα Φόντου",
            gameart: "Καλλιτεχνικό Έργο Παιχνιδιού",
            up: "Πάνω",
            down: "Κάτω",
            left: "Αριστερά",
            right: "Δεξιά",
            tracking: "Παρακολούθηση τώρα",
            inuse: "Σε χρήση από",
            invalidshortcut: "Μη έγκυρη συντόμευση",
            nofont: "Χωρίς γραμματοσειρά",
            fontselectdialog: "Επιλογή Αρχείου Γραμματοσειράς"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Επιλέξτε ένα αρχείο ήχου για αναπαραγωγή όταν ξεκλειδώνετε ένα επίτευγμα" : "Επιλέξτε ένα φάκελο που περιέχει αρχεία ήχου για αναπαραγωγή τυχαία κατά την ξεκλείδωση ενός επιτεύγματος")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Εδώ είναι ένα αρχείο καταγραφής των γεγονότων από τότε που η εφαρμογή ξεκίνησε στις"
            },
            copylbl: {
                elem: "Αντιγραφή Περιεχομένων Καταγραφής"
            },
            openlbl: {
                elem: "Δημιουργία Αρχείου Καταγραφής"
            },
        }

        return translations
    }
}