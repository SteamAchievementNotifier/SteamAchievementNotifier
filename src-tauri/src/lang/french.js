export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Aucun utilisateur détecté",
                tt: "L'utilisateur Steam pour lequel les réalisations sont actuellement suivies"
            },
            gamelbl: {
                elem: gameName ? gameName : "Aucun jeu détecté",
                tt: "Le jeu pour lequel les réalisations sont actuellement suivies"
            },
            previewbtn: {
                tt: "Prévisualiser le son sélectionné"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Par défaut (Aucun fichier audio sélectionné)" : custom.sounddir ? custom.sounddir : "Par défaut (Aucun dossier audio sélectionné)"
            },              
            soundmodelbl: {
                elem: "Mode audio :"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "fichier" : "aléatoire"
            },
            togglemain: {
                elem: "Principal",
                tt: "Notification de réalisation principale"
            },
            togglerare: {
                elem: "Rare",
                tt: "Notification de réalisation rare"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notification de réalisation à 100%"
            },
            progresscirclewrapper: {
                tt: "Afficher un aperçu de la notification personnalisée"
            },
            testbtnwrapper: {
                elem: "Afficher une notification de test",
                tt: "Afficher un aperçu de la notification personnalisée",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Personnaliser...",
                tt: "Ouvrir le menu de personnalisation des notifications",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam n'est pas en cours d'exécution"
            },
            updatebtn: {
                tt: "Mise à jour disponible"
            },
            kofibtn: "Faire un don sur Ko-Fi !",
            discordbtn: "Rejoindre sur Discord !",
            githubbtn: "Signaler un problème sur GitHub !",
            settingstitlelbl: {
                elem: "Paramètres"
            },
            configuration: {
                elem: "Configuration",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Langue",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Système d'exploitation",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notifications",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Captures d'écran",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Accessibilité",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Autre",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Version"
            },            
            apikeybtn: {
                tt: "Cliquez ici pour obtenir votre clé d'API Web Steam"
            },
            apikey: {
                placeholder: "Entrez votre Clé API",
                tt: "La clé d'API Web Steam associée à votre compte Steam"
            },
            eyebtn: {
                tt: "Activer/désactiver la visibilité de la clé d'API"
            },
            apikeylbl: {
                elem: "Obtenir une Clé d'API"
            },
            steam64idbtn: {
                tt: "Cliquez ici pour obtenir votre identifiant Steam64"
            },
            steam64id: {
                placeholder: "Entrez votre ID Steam64",
                tt: "L'identifiant Steam64 associé à votre compte Steam"
            },
            steam64idlbl: {
                elem: "Obtenir un Steam64 ID"
            },
            switchaccountspan: {
                elem: "Changer de compte"
            },
            switchaccountbtn: {
                tt: "Changer entre les comptes Steam liés"
            },
            testconnectionlbl: {
                elem: "Tester la connexion",
                tt: "Tester votre connexion à l'API Web Steam"
            },            
            lang: {
                tt: "Définir la langue à la fois pour l'interface utilisateur et les notifications"
            },
            desktop: {
                elem: "Créer un raccourci sur le bureau",
                tt: "Créer un raccourci sur le bureau pour lancer l'application",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Démarrer avec Windows",
                tt: "Exécuter l'application automatiquement au démarrage de Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Démarrer en mode réduit",
                tt: "Réduire l'application dans la barre d'état système après son lancement",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Désactiver l'accélération matérielle",
                tt: "Désactiver l'accélération matérielle pour la fenêtre de l'application",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Mode léger",
                tt: "Désactive la fenêtre principale de l'application pour économiser les ressources système. Des options minimales resteront disponibles via l'icône de la barre d'état système pour interagir avec l'application",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Pourcentage de rareté",
                tt: `Seules les réalisations dont le pourcentage de déblocage mondial est inférieur à ce nombre seront affichées comme des notifications "Rares"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Mode son uniquement",
                tt: "Désactive les notifications, mais joue le son sélectionné lors du déblocage d'une réalisation",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Afficher tous les pourcentages",
                tt: "Afficher les pourcentages de déblocage globaux dans tous les types de notification",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Dupliquer vers une fenêtre externe",
                tt: "Dupliquer vers une fenêtre externe",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Afficher la fenêtre des statistiques",
                tt: "Afficher la fenêtre des statistiques de réalisation",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Afficher la notification "Suivi en cours"`,
                tt: `Activer/désactiver la notification "Suivi en cours" lors du lancement d'un jeu`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Raccourcis",
                tt: "Définir un raccourci clavier pour déclencher des notifications de test",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Définir un raccourci pour déclencher une notification de test pour ce type"
            },
            sctabmain: {
                tt: "Raccourci de notification principal"
            },
            sctabrare: {
                tt: "Raccourci de notification rare"
            },
            sctabplat: {
                tt: "Raccourci de notification à 100%"
            },
            screenshotmode: {
                tt: "Choisissez le mode pour les captures d'écran automatiques des réalisations"
            },
            displayscreenshot: {
                elem: "Afficher la capture d'écran",
                tt: "Afficher un aperçu des captures d'écran dans la notification de réalisation",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Raccourci Steam",
                tt: "Associez votre raccourci clavier client Steam pour prendre des captures d'écran Steam natives lors du déblocage de réalisations",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Superposition de notification principale"
            },
            ovtabrare: {
                tt: "Superposition de notification rare"
            },
            ovtabplat: {
                tt: "Superposition de notification 100%"
            },
            monitor: {
                elem: "Moniteur",
                tt: "Sélectionnez le moniteur à utiliser comme source pour les captures d'écran",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Position",
                tt: "Définir la position de la superposition de notification",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Chemin",
                tt: "Définir le chemin où les captures d'écran seront enregistrées",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Aperçu",
                tt: `Aperçu de la superposition de notification`,
                query: "label"
            },
            noanim: {
                elem: "Désactiver les animations de fenêtre",
                tt: "Désactiver les animations de transition dans la fenêtre de l'application",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Activer le support NVDA",
                tt: "Copier le contenu de la notification dans le presse-papiers afin qu'il puisse être lu par le logiciel de lecteur d'écran NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Afficher les info-bulles",
                tt: "Activer/désactiver les info-bulles lors du survol des éléments de l'application",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Afficher la console de notification",
                tt: "Ouvrir le panneau des outils de développement de la notification lorsqu'il est déclenché",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Afficher la politique de confidentialité",
                tt: "Afficher la politique de confidentialité de Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Chaîne Bêta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Ouvrir le journal",
                tt: "Afficher et partager le contenu du journal de l'application",
                query: "label"
            },
            resetbtn: {
                elem: "Réinitialiser l'application",
                tt: "Supprimer toutes les données stockées et redémarrer l'application",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Met en pause/lance l'animation de notification"
            },
            customiserreplay: {
                tt: "Rejoue l'animation de notification"
            },
            customisersavepreset: {
                tt: "Enregistrer les personnalisations actuelles en tant que nouveau modèle de notification"
            },
            tabbtnnext: {
                tt: "Suivant"
            },
            tabbtnprev: {
                tt: "Précédent"
            },
            notificationpreset: {
                elem: "Modèle",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Modèle de notification",
                tt: "Sélectionnez un modèle de notification à personnaliser",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animation de l'icône rare",
                tt: "Activer/désactiver l'animation de l'arrière-plan de l'icône",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Afficher tous les détails",
                tt: `Afficher tous les détails disponibles des notifications`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Durée d'affichage",
                tt: "Durée pendant laquelle la notification restera affichée",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Échelle",
                tt: "La taille de la notification<br><i>*Non visible dans la fenêtre d'aperçu</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Texte personnalisé",
                tt: "Afficher un message personnalisé dans la notification",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Utiliser le titre du jeu",
                tt: "Afficher le titre du jeu en cours dans la notification",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Style",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Style de fond",
                tt: "Définir le style du fond de la notification",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Angle du dégradé",
                tt: "Définir l'angle du dégradé de couleur",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Image de fond",
                tt: "Sélectionner un fichier image à utiliser comme fond de la notification",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Luminosité",
                tt: "Définir la luminosité de l'arrière-plan de l'art du jeu",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Arrondi",
                tt: "Définir le degré d'arrondi des coins de la notification",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Taille de police",
                tt: "Définir l'échelle de la police",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacité",
                tt: "Définir l'opacité de la notification",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Fond uniquement",
                tt: "Appliquer l'opacité uniquement au fond, laissant le texte et les images entièrement opaques",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Couleurs",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Couleur principale",
                tt: "Définir la couleur principale de la notification",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Couleur secondaire",
                tt: "Définir la couleur secondaire de la notification",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Couleur du texte",
                tt: "Définir la couleur du texte",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Contour du texte",
                tt: "Appliquer un contour à tout le texte de la notification",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Couleur du contour",
                tt: "Définir la couleur du contour du texte",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Ombre du texte",
                tt: "Appliquer une ombre à tout le texte de la notification",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Couleur de l'ombre",
                tt: "Définir la couleur de l'ombre du texte",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Icône",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Arrondi de l'icône",
                tt: "Définir le degré d'arrondi de l'icône de la notification",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Icône personnalisée",
                tt: "Utiliser un fichier image comme icône personnalisée",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Icône personnalisée",
                tt: "Sélectionner un fichier image à utiliser comme icône personnalisée",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Réinitialiser l'icône personnalisée`,
                query: ".sanboxlbl"
            },        
            useplaticon: {
                elem: "Icône personnalisée à 100%",
                tt: `Utiliser un fichier image comme icône personnalisée à 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Icône personnalisée à 100%",
                tt: `Sélectionner un fichier image à définir comme icône personnalisée à 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Réinitialiser l'icône personnalisée à 100%`,
                query: ".sanboxlbl"
            },
            usegameicon: {
                elem: "Icône du jeu",
                tt: "Utiliser l'icône du jeu en cours",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Position",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Position à l'écran",
                tt: "Définir la position de la notification à l'écran",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Positionner librement",
                tt: "Utiliser une position personnalisée pour la notification",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Définir la position",
                tt: "Définir une position personnalisée pour la notification",
                query: "label"
            },
            animdir: {
                elem: "Direction de l'animation",
                tt: "Définir la direction de l'animation de la notification",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "POLITIQUE DE CONFIDENTIALITÉ"
            },
            ppusagetitle: {
                elem: "UTILISATION DES DONNÉES DE L'API WEB DE STEAM"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier utilise l'<span class="link" onclick="shell.open('https://steamcommunity.com/dev')">API Web de Steam</span> de Valve pour récupérer et afficher des données relatives au(x) compte(s) Steam de l'utilisateur, via la combinaison clé d'API Steam/ID Steam64 fournie à l'application par l'utilisateur. Ces données comprennent :`
            },
            ppstats: {
                elem: "Statistiques pour les succès verrouillés et déverrouillés"
            },
            ppusername: {
                elem: "Votre nom d'utilisateur Steam"
            },
            ppsteamgames: {
                elem: "Vos jeux Steam joués"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier peut utiliser ultérieurement des données supplémentaires de l'API Web de Steam pour fournir des fonctionnalités et des mises à jour supplémentaires de l'application."
            },
            ppkey64title: {
                elem: "UTILISATION DE LA CLÉ D'API STEAM/ID STEAM64"
            },
            ppauth: {
                elem: "Steam Achievement Notifier nécessite que l'utilisateur saisisse sa combinaison clé d'API Steam/ID Steam64 pour accéder de manière authentifiée à l'API Web de Steam."
            },
            ppnoauth: {
                elem: "Sans ces informations, les liens Web (fournis par Valve pour accéder à l'API Web de Steam) utilisés pour récupérer des données relatives aux comptes Steam d'un utilisateur - y compris les données de succès - ne peuvent pas être accessibles."
            },
            ppstoragetitle: {
                elem: "STOCKAGE DES DONNÉES DE L'API WEB DE STEAM"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier stocke temporairement localement les données de l'API Web de Steam uniquement pour une utilisation au sein de l'application. Tout stockage temporaire de ces données est destiné uniquement à Steam Achievement Notifier, et en règle générale, toutes les données non persistantes de l'API Web de Steam seront effacées du stockage local à la fermeture de l'application."
            },
            pppersist: {
                elem: "Les données persistantes stockées sur l'appareil de l'utilisateur incluent uniquement les données stockées par l'application pour la commodité de l'utilisateur, telles que la clé d'API Web Steam et l'ID Steam64 de l'utilisateur."
            },
            ppdelete: {
                elem: "Ces données peuvent également être supprimées manuellement par l'utilisateur à tout moment si nécessaire. Les fichiers créés par Steam Achievement Notifier se trouvent dans le répertoire suivant :"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Actuellement non pris en charge"
            },
            ppcollecttitle: {
                elem: "POSITION SUR LA COLLECTE DE DONNÉES"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier ne <u>transmettra jamais</u> ni ne stockera de données utilisateur en dehors du système de fichiers local de l'utilisateur sans l'autorisation explicite de celui-ci. Cela inclut toutes les informations récupérées via l'API Web de Steam pour une utilisation dans l'application, y compris la combinaison clé d'API Steam/ID Steam64 fournie à l'application pour accéder à l'API Web de Steam."
            },
            ppconsent: {
                elem: "Par la confirmation du consentement et l'utilisation ultérieure de fonctionnalités existantes ou futures conçues pour envoyer des informations de manière externe, l'utilisateur donne implicitement son autorisation pour le faire. Dans ces cas, l'utilisateur sera toujours informé de la nature des données envoyées et sera invité à confirmer son consentement pour envoyer des données en dehors de l'application."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier exclut intentionnellement toute possibilité d'accéder, de visualiser ou de collecter de manière externe des informations fournies à l'application par l'utilisateur, mais via des fonctionnalités existantes ou futures, l'application peut être en mesure d'envoyer des données de manière externe au nom de l'utilisateur, mais uniquement après son consentement."
            },
            pprequests: {
                elem: "Les demandes d'accès aux données de l'API Web de Steam sont effectuées à partir de l'application elle-même à l'aide de méthodes intégrées, de manière similaire à la fonctionnalité fournie par les navigateurs Web. Ces demandes contiennent la combinaison clé d'API Steam/ID Steam64 de l'utilisateur, comme requis par l'API Web de Steam, mais ne sont jamais intentionnellement mises à disposition ou interceptées par d'autres applications."
            },
            ppusertitle: {
                elem: "RESPONSABILITÉ DE L'UTILISATEUR"
            },
            ppsteamtou: {
                elem: `EN TÉLÉCHARGEANT ET EN UTILISANT TOUTE VERSION OFFICIELLEMENT PUBLIÉE DE STEAM ACHIEVEMENT NOTIFIER VIA LE <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">DÉPÔT GITHUB OFFICIEL</span>, VOUS, L'UTILISATEUR, PAR EXTENSION, ADHÉREZ AUX SECTIONS 7 ET 8 DES <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">CONDITIONS D'UTILISATION DE L'API WEB DE STEAM</span>.`
            },
            gamedetails: "Détails du jeu",
            mustbepublic: "doit être défini comme Public",            
            nosoundfile: "Par défaut (Aucun fichier audio sélectionné)",
            nosoundfolder: "Par défaut (Aucun dossier audio sélectionné)",
            file: "Fichier",
            randomised: "Aléatoire",                   
            audioselectdialog: `Sélectionner un ${custom.mode === "file" ? "fichier audio" : "dossier audio"}`,
            imgselectdialog: `Sélectionner un fichier image`,
            unsupported: "Fichier non pris en charge !",
            novalidaudiofiles: "Aucun fichier audio valide !",
            nolocate: "Impossible de localiser le fichier !",
            switchaccountstitle: "Changer de compte",
            noaccounts: "Ajoutez un compte pour commencer !",
            connecting: "Connexion en cours...",
            connected: "Connecté",
            testsuccessuser: `Vous êtes prêt à continuer`,
            testsuccess1: `Assurez-vous que vos <span>Détails du jeu</span> sont définis sur <span>Public</span> dans <a href="${privacysettings}">les paramètres de confidentialité de Steam</a>`,
            testsuccess2: `Vérifiez que votre mode d'affichage en jeu est défini sur <span>Bordure sans fenêtre</span> afin que les notifications s'affichent au-dessus de la fenêtre du jeu`,
            noapikeytitle: "Pas de clé API",
            noapikeytxt: "Veuillez entrer votre clé API",
            noapikeyhint: `Cliquez sur l'icône <img src="./icon/key.svg" alt=""> pour obtenir votre clé API`,
            nosteam64idtitle: "Pas d'ID Steam64",
            nosteam64idtxt: "Veuillez entrer votre ID Steam64",
            nosteam64idhint: `Cliquez sur l'icône <img src="./icon/id.svg" alt=""> pour obtenir votre ID Steam64`,
            invalidapikeytitle: "Clé API invalide !",
            invalidapikeymsg: "Impossible d'accéder à l'API Web de Steam avec la clé API fournie",
            invalidapikeydetail1: "Vérifiez que votre clé API est correcte",
            invalidapikeydetail2: "Générez une nouvelle clé API pour votre compte",
            invalidsteam64idtitle: "ID Steam64 invalide !",
            invalidsteam64idmsg: "Impossible de trouver un compte Steam associé à l'ID Steam64 fourni",
            invalidsteam64iddetail1: "Vérifiez que la valeur de l'ID Steam64 que vous avez fournie est la valeur correcte pour votre compte Steam",
            nonetworkfound: "Aucune connexion réseau active trouvée",
            connecttonetwork: "Connectez votre PC à un réseau et réessayez",
            testdefaulterrortitle: "Une erreur s'est produite !",
            testdefaulterrormsg: "Une erreur s'est produite lors de la connexion à l'API Web de Steam",
            testdefaulterrordetail1: "Veuillez signaler ce problème sur Discord ou GitHub !",
            sspath: "Sélectionner le chemin de capture d'écran",
            wronguser: user ? `${user} n'est pas connecté à Steam !` : "Aucun compte utilisateur lié trouvé !",
            switchuser: "Cliquez ici pour changer de compte",
            trackingfailed: "Suivi échoué !",
            checkapplog: "Vérifiez le journal de l'application pour plus de détails",
            soon: "Bientôt disponible !",
            gamecomplete: "100% Terminé",
            gametitle: "Titre du jeu",
            achievementunlocked: "Succès débloqué",
            achievementtitle: "Titre du succès",
            allachievements: "Vous avez débloqué tous les succès !",
            achievementdesc: "Description du succès",
            show: "Afficher",
            quit: "Quitter",
            off: "Désactivé",
            steamss: "Capture d'écran en jeu Steam",
            overlayss: "Capture d'écran avec superposition de notification",
            match: "Paramètre de copie",
            topleft: "En haut à gauche",
            topcenter: "En haut au centre",
            topright: "En haut à droite",
            bottomleft: "En bas à gauche",
            bottomcenter: "En bas au centre",
            bottomright: "En bas à droite",
            solid: "Couleur unie",
            gradient: "Dégradé",
            bgimg: "Image de fond",
            gameart: "Art du jeu",
            up: "Haut",
            down: "Bas",
            left: "Gauche",
            right: "Droite",
            tracking: "En Cours de Suivi",
            inuse: "Utilisé par",
            invalidshortcut: "Invalide"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Sélectionner un fichier audio à jouer lors du déblocage d'un succès" : "Sélectionner un dossier contenant des fichiers audio à jouer aléatoirement lors du déblocage d'un succès");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Voici un journal des événements qui se sont produits depuis le démarrage de l'application à"
            },
            copylbl: {
                elem: "Copier le contenu du journal"
            },
            openlbl: {
                elem: "Générer un fichier journal"
            },
        }     

        return translations
    }
}