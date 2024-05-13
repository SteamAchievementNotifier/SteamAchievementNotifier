export const translations = {
    global: {
        main: "Principal",
        rare: "Rare",
        plat: "100%",
        topleft: "En haut à gauche",
        topcenter: "En haut au centre",
        topright: "En haut à droite",
        bottomleft: "En bas à gauche",
        bottomcenter: "En bas au centre",
        bottomright: "En bas à droite",
        ok: "OK",
        preview: "Aperçu",
        save: "Enregistrer",
        back: "Retour",
        settings: "Paramètres",
        appversion: "Version de l'application",
        image: "Image",
        audio: "Audio",
        folder: "Dossier",
        font: "Police",
        select: "Sélectionner",
        gametitle: "Titre du jeu",
        congrats: "Félicitations!",
        achievementunlocked: "Réussite débloquée",
        gamecomplete: "100% Terminé",
        achievementdesc: "Cliqué sur le bouton Afficher la notification de test",
        gamecompletedesc: "Vous avez débloqué tous les succès !",
        defaultcustomfont: "Par défaut (Aucune police sélectionnée)",
        defaultsoundfile: "Par défaut (Aucun fichier sélectionné)",
        defaultsounddir: "Par défaut (Aucun dossier sélectionné)",
        nowtracking: "Suivi des succès pour:",
        nopreview: "Aperçu non disponible pour le système d'exploitation natif",
        options: "Options",
        resetwindow: "Réinitialiser la fenêtre",
        show: "Afficher",
        exit: "Quitter",
        releasegame: "Libérer le Jeu",
        releasegamesub: [
            `Redémarrez le processus Worker en arrière-plan et libérez le jeu actuel du suivi`,
            `Essayez cette option si vous avez récemment fermé un jeu mais que Steam l'affiche toujours comme en cours d'exécution, ou si Steam Achievement Notifier indique toujours le suivi d'un jeu qui a déjà été fermé`
        ],
        noupdateavailable: "Aucune mise à jour disponible",
        latestversion: "Dernière version installée",
        missingdeps: "Dépendance manquante",
        missingdepssub: [
            `Il semble que vous essayez d'activer l'option <span class="hl">Prendre une capture d'écran Steam</span>. Cependant, sur Linux, les captures d'écran ne peuvent pas être déclenchées automatiquement sans d'abord installer le paquet <code class="dialogcode">xdotool</code>`,
            `Veuillez exécuter <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> pour installer cette dépendance, ce qui permettra de prendre des captures d'écran Steam sur cet appareil`
        ],
        restartapp: "Redémarrer l'Application",
        restartappsub: [
            `Si les choses ne fonctionnent pas correctement, utilisez cette option pour fermer et rouvrir l'application`,
            `Si le problème persiste après le redémarrage de l'application, veuillez envisager de le signaler en utilisant les liens intégrés sur l'écran d'accueil`
        ]
    },
    app: {
        content: {
            game: "Aucun jeu détecté",
            customise: "Personnaliser",
            test: "Afficher la notification de test"
        }
    },
    settings: {
        language: {
            title: "Langue"
        },
        os: {
            title: "Système d'exploitation",
            content: {
                desktop: "Créer un raccourci sur le bureau",
                startwin: "Démarrer à la connexion",
                startmin: "Démarrer minimisé",
                nohwa: "Désactiver l'accélération matérielle",
                litemode: "Mode léger"
            }
        },
        notifications: {
            title: "Notifications",
            content: {
                rarity: "Pourcentage de rareté",
                rareonly: "Rares seulement",
                all: "Tout",
                off: "Désactivé",
                showpercent: "Afficher le pourcentage",
                soundonly: "Mode son uniquement",
                extwin: "Notifications de flux",
                audiosrc: "Source audio",
                notify: "Notification",
                app: "Application",
                nowtracking: "Afficher la notification de suivi",
                nowtrackingscale: "Échelle de suivi",
                shortcuts: "Raccourcis de notification"
            }
        },
        media: {
            title: "Médias",
            content: {
                steamss: "Prendre une capture d'écran de Steam",
                screenshots: "Médias supplémentaires",
                off: "Désactivé",
                overlay: "Capture d'écran avec superposition de notification",
                monitors: "Source de capture d'écran",
                ovpos: "Position de superposition",
                ovmatch: "Correspondance de la position personnalisée",
                ovpath: "Chemin de la capture d'écran",
                ssdelay: "Délai de capture d'écran",
                notifyimg: "Image de notification",
                imgpath: "Chemin de l'image"
            }
        },
        accessibility: {
            title: "Accessibilité",
            content: {
                noanim: "Désactiver les animations de fenêtre d'application",
                nvda: "Activer le support NVDA",
                tooltips: "Afficher les info-bulles"
            }
        },
        advanced: {
            title: "Avancé",
            content: {
                pollrate: "Taux de Sondage",
                releasedelay: "Délai de Sortie",
                maxretries: "Nombre maximal de tentatives de traitement",
                debug: "Panneau de débogage",
                userust: "Mode de traitement alternatif",
                notifydebug: "Afficher les notifications de débogage",
                usecustomfiles: "Utiliser des fichiers d'application personnalisés",
                showcustomfiles: "Afficher les fichiers d'application personnalisés"
            }
        },        
        misc: {
            title: "Divers",
            content: {
                checkforupdates: "Vérifier les Mises à Jour",
                log: "Journal de l'Application",
                reset: "Réinitialiser l'application"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Préréglage",
            content: {
                preset: "Préréglage de Notification",
                iconanim: "Animation d'Icône Rare",
                alldetails: "Afficher Tous les Détails",
                usepercent: "Utiliser le Pourcentage",
                displaytime: "Temps d'Affichage",
                scale: "Échelle",
                customtext: "Texte Personnalisé",
                usegametitle: "Utiliser le Titre du Jeu",
                customfont: "Police Personnalisée"
            }
        },
        sound: {
            title: "Son",
            content: {
                soundmode: "Mode Sonore",
                file: "Fichier",
                folder: "Aléatoire",
                soundfile: "Fichier Audio",
                sounddir: "Dossier Audio",
                volume: "Volume"
            }
        },
        style: {
            title: "Style",
            content: {
                bgstyle: "Style de Fond",
                solid: "Uni",
                gradient: "Dégradé",
                img: "Image",
                gameart: "Art du Jeu",
                gradientangle: "Angle du Dégradé",
                bgimg: "Image de Fond",
                bgimgbrightness: "Luminosité",
                brightness: "Luminosité",
                roundness: "Arrondi",
                fontsize: "Taille de la Police",
                opacity: "Opacité",
                bgonly: "Fond Seulement"
            }
        },
        colors: {
            title: "Couleurs",
            content: {
                primarycolor: "Couleur Principale",
                secondarycolor: "Couleur Secondaire",
                tertiarycolor: "Couleur Tertiaire",
                fontcolor: "Couleur de la Police",
                fontoutline: "Contour de la Police",
                fontoutlinecolor: "Couleur du Contour de la Police",
                fontshadow: "Ombre de la Police",
                fontshadowcolor: "Couleur de l'Ombre de la Police"
            }
        },
        icons: {
            title: "Icônes",
            content: {
                iconroundness: "Arrondi de l'Icône",
                plat: "Logo à 100%",
                usegameicon: "Utiliser l'Icône du Jeu",
                logo: "Logo",
                decoration: "Décoration",
                showdecoration: "Afficher la Décoration",
                rarity: "Rareté",
                showhiddenicon: "Afficher l'Icône Masquée",
                hiddenicon: "Icône Masquée",
                replacelogo: "Remplacer le logo"
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Position à l'Écran",
                usecustompos: "Utiliser une Position Personnalisée",
                setcustompos: "Définir",
                resetcustompos: "Réinitialiser"
            }
        },
        theme: {
            title: "Thème",
            content: {
                savetheme: "Enregistrer le Thème",
                sub: [
                    `Les <span class="hl">Thèmes Utilisateur</span> enregistrés peuvent être sélectionnés dans le menu <span class="hl">Sélectionner Thème</span> sur l'écran d'accueil.`,
                    `Assurez-vous que le <span class="hl">Nom du Thème</span> est <u>unique</u> - un nom correspondant à un thème existant <u>écrasera le précédent</u> !`
                ],
                placeholder: "Nom du Thème",
                theme: "Thème"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Voici ce qui s'est passé depuis le démarrage de l'application à",
            copylog: "Copier le Contenu du Journal"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Êtes-vous sûr ?</span>
                    <span>Toutes les données précédemment configurées, <u>y compris les Personnalisations</u>, seront réinitialisées aux valeurs par défaut.</span>
                    <span>🛑 Cela ne peut pas être annulé !</span>
                </div>
            `,
            reset: "Réinitialiser"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier a rencontré un problème et doit être fermé.",
            details: "Voici les détails de l'erreur :",
            sub: "Cliquez sur les boutons ci-dessous pour signaler ce problème via votre plateforme préférée.",
            report: "Signaler",
            log: "Journal de l'Application",
            exit: "Quitter"
        }
    },    
    tooltips: {
        game: "Le jeu pour lequel les succès sont actuellement suivis",
        usertheme: "Sélectionnez un thème précédemment enregistré",
        customise: "Personnalisez les notifications de succès",
        test: "Affiche une notification de test, y compris toutes les personnalisations",
        kofi: "Faire un don sur Ko-Fi !",
        discord: "Rejoindre sur Discord !",
        github: "Signaler un problème",
        lang: "Sélectionnez la langue de l'interface utilisateur utilisée dans l'application",
        desktop: "Activez un raccourci sur le bureau pour exécuter l'application",
        startwin: "Démarrer Steam Achievement Notifier automatiquement après la connexion",
        startmin: "Après le lancement, masquez la fenêtre de l'interface utilisateur de l'application jusqu'à son ouverture depuis la barre d'état système",
        nohwa: `Désactiver l'accélération matérielle, ce qui peut améliorer les performances sur les systèmes avec des ressources limitées ou sans GPU dédié<br><br><span class="ttdesc">L'application redémarrera après avoir activé/désactivé cette option</span>`,
        litemode: "Désactiver tous les éléments interactifs de l'interface utilisateur, tout en fournissant uniquement une fonctionnalité limitée de l'application via l'icône de la barre d'état système. Peut améliorer les ressources consommées par l'application",
        rarity: "Le pourcentage à partir duquel les notifications de succès rares seront déclenchées. Tout succès avec un pourcentage de déverrouillage supérieur à cette valeur sera affiché comme une notification principale",
        showpercent: "Affiche le pourcentage de déverrouillage du succès dans la notification pour le(s) type(s) sélectionné(s)",
        soundonly: "Désactive les notifications, en jouant uniquement les sons définis via le Personnaliseur",
        extwin: "Crée une fenêtre de fond cachée qui duplique toutes les notifications actuellement affichées à l'écran. Cette fenêtre peut ensuite être ajoutée en tant que source de capture de fenêtre pour une utilisation dans un logiciel de streaming, tel que OBS",
        audiosrc: "Sélectionnez la source du son généré par l'application (ou désactivez-le)",
        nowtracking: "Affiche une notification informant l'utilisateur que les succès pour un jeu en cours d'exécution sont suivis",
        nowtrackingscale: `Définir la taille de la notification de suivi`,
        shortcuts: "Déclenche une notification de test via un raccourci clavier. Les raccourcis peuvent être personnalisés pour chaque type de notification",
        steamss: "Prendre une capture d'écran Steam lorsqu'un succès est déverrouillé",
        screenshots: "Sélectionnez le type de média supplémentaire à créer lorsqu'une notification est affichée",
        monitors: "L'écran qui sera capturé lors de la prise de capture d'écran",
        ovpos: "La position de la superposition de notification dans la capture d'écran",
        ovmatch: "Correspond à la position d'écran définie dans le Personnaliseur pour ce type de notification",
        ovpath: "L'emplacement où les captures d'écran générées par cette option seront enregistrées",
        ssdelay: "Ajoute un délai entre l'apparition de la notification et la prise de la capture d'écran",
        sspreview: "Affiche un aperçu de l'apparence de la capture d'écran lorsqu'elle est enregistrée",
        noanim: "Désactive toutes les animations de fenêtre de l'application et les effets de transition",
        nvda: "Active la copie des informations de succès dans le presse-papiers lorsqu'un succès est déverrouillé, afin d'être lu par un logiciel de lecteur d'écran, tel que NVDA",
        tooltips: "Affiche des info-bulles lors du survol de certains éléments de l'interface utilisateur",
        pollrate: `Définir l'intervalle de mise à jour des données de réalisation pendant le jeu<br><br><span class="ttdesc">Les performances peuvent augmenter/diminuer en fonction de la valeur ou du matériel du système. Les valeurs plus élevées entraînent généralement une charge système plus faible, mais peuvent retarder les notifications</span>`,
        releasedelay: `Définit pendant combien de temps le processus d'arrière-plan attend de redémarrer après que le jeu actuel a été publié. Affecte à la fois le suivi automatique des processus et les jeux liés manuellement.<br><br><span class="ttdesc">Permet une période plus longue pour que Steamworks soit entièrement libéré de l'application. Augmenter cette valeur peut prévenir les comportements inhabituels, tels que le suivi d'un jeu précédemment fermé</span>`,
        maxretries: `Définit le nombre maximal de tentatives pour lier un processus en cours à un AppID détecté. Affecte à la fois le suivi automatique des processus et les jeux liés manuellement.<br><br><span class="ttdesc">Les tentatives de liaison sont effectuées une fois par seconde. Si un processus en cours n'est pas lié à l'AppID actuel après ce nombre de tentatives, un processus non valide sera renvoyé. Dans de tels cas, le jeu devra être libéré manuellement via la zone de notification système > Options > Libérer le Jeu</span>`,
        debug: "Ouvrez le panneau de débogage, qui affiche des informations détaillées de suivi des processus",
        userust: "Utilisez une fonction alternative basée sur Rust pour vérifier si les processus de jeu suivis sont actuellement en cours d'exécution sur le système. Lorsque non cochée, le contrôle de processus par défaut basé sur NodeJS sera utilisé à la place.",
        notifydebug: "Crée une fenêtre DevTools pour toutes les notifications. Utile pour le débogage / le dépannage des problèmes de notification",
        usecustomfiles: "Permet aux notifications de charger des fichiers personnalisables par l'utilisateur. La prudence est recommandée pour les utilisateurs réguliers",
        showcustomfiles: "Ouvrir l'emplacement des fichiers personnalisés",
        log: "Ouvrir la fenêtre du journal de l'application, qui affiche des informations sur l'activité du processus, les avertissements et les erreurs",
        reset: "Supprime toutes les données de configuration et redémarre l'application",
        playback: "Mettre en pause / reprendre l'animation de l'aperçu de la notification",
        replay: "Redémarrer l'animation de l'aperçu de la notification",
        preset: "Sélectionnez le préréglage de notification à personnaliser",
        iconanim: "Activer/désactiver la bordure et l'animation de l'icône Rare",
        alldetails: "Affiche tous les éléments de texte dans la notification, y compris ceux masqués par défaut pour ce préréglage",
        usepercent: "Afficher le pourcentage de déblocage de l'exploit, au lieu de la valeur XP/S",
        displaytime: "Définir le nombre de secondes pendant lesquelles la notification sera affichée",
        scale: "Augmenter ou diminuer la taille de la notification",
        customtext: "Définir un message personnalisé à afficher dans la notification",
        usegametitle: "Afficher le titre du jeu en cours dans la notification",
        customfont: "Charger une police personnalisée à utiliser dans la notification",
        soundmode: "Sélectionnez soit un seul fichier audio, soit un fichier audio sélectionné au hasard dans un dossier contenant plusieurs fichiers audio, lorsqu'une notification se produit",
        soundfile: "Sélectionnez un fichier audio à lire lorsqu'une notification se produit",
        sounddir: "Sélectionnez un dossier à partir duquel un fichier audio sera sélectionné au hasard lorsqu'une notification se produit",
        volume: "Définir le volume de lecture du fichier audio",
        preview: "Prévisualiser le fichier audio sélectionné, ou un fichier audio sélectionné au hasard dans le dossier",
        bgstyle: "Sélectionnez le style de l'arrière-plan de la notification",
        gradientangle: "Définir l'angle du dégradé",
        bgimg: "Charger un fichier image à utiliser comme arrière-plan de la notification",
        bgimgbrightness: "Définissez la luminosité de l'image utilisée comme arrière-plan de la notification",
        brightness: "Définir la luminosité de l'art du jeu utilisé comme arrière-plan de la notification",
        roundness: "Définir l'arrondi des bords de la notification",
        fontsize: "Définir la taille de la police utilisée dans la notification",
        opacity: "Définir l'opacité globale de la notification",
        bgonly: "Définir uniquement l'opacité de l'arrière-plan de la notification, en maintenant les autres éléments à une opacité maximale",
        primarycolor: "Définir la couleur principale de la notification",
        secondarycolor: "Définir la couleur secondaire de la notification",
        tertiarycolor: "Définir la couleur tertiaire de la notification",
        fontcolor: "Définir la couleur du texte affiché dans la notification",
        fontoutline: "Ajouter un contour à tout le texte affiché dans la notification",
        fontoutlinecolor: "Définir la couleur du contour du texte",
        fontshadow: "Ajouter une ombre à tout le texte affiché dans la notification",
        fontshadowcolor: "Définir la couleur de l'ombre du texte",
        iconroundness: "Définir l'arrondi de l'icône de succès/jeu affichée dans la notification",
        plat: "Charger un fichier image pour utiliser comme icône 100%",
        usegameicon: "Remplacer l'icône de notification par l'icône du jeu en cours",
        showhiddenicon: "Afficher une image indiquant que l'exploit est masqué dans la notification",
        hiddenicon: "Charger un fichier image pour remplacer l'icône de l'exploit masqué",
        logo: "Charger un fichier image pour remplacer l'icône de Logo",
        decoration: "Charger un fichier image pour remplacer l'icône de Décoration",
        showdecoration: "Activer/désactiver la visibilité de l'icône de Décoration",
        replacelogo: "Remplacez l'icône du logo dans la notification par la décoration sélectionnée",
        pos: "Définir la position à l'écran de la notification",
        usecustompos: "Activer le positionnement personnalisé pour la notification",
        setcustompos: "Définir la position personnalisée pour la notification",
        resetcustompos: "Réinitialiser la position de la notification à la position personnalisée par défaut",
        savetheme: "Enregistrer toutes les options de personnalisation configurées en tant que nouveau thème",
        visibilitybtn: "Basculer la visibilité de l'élément dans les prévisualisations personnalisées et les notifications de test",
        delbtn: "Réinitialiser l'élément par défaut",
        link: `Ouvrir <span class="hl">Menu de Gestion des Jeux Liés</span>`,
        imgpath: "L'emplacement où les images de notification générées par cette option seront enregistrées"
    },
    update: {
        updateavailable: "Mise à jour disponible",
        sub: [
            `<span id="newversion"></span>`,
            "Une nouvelle mise à jour de Steam Achievement Notifier est disponible !",
            `Notes de version complètes disponibles sur <span id="discordreleasenotes"></span> et <span id="githubreleasenotes"></span>`
        ],
        update: "Mise à jour"
    },
    "linkgame": {
        "content": {
            "exepath": "Chemin du fichier exécutable",
            "nodata": "Aucune donnée",
            "manage": "Gérer les jeux liés",
            "managesub": [
                `Lie manuellement le <span class="hl">fichier exécutable</span> d'un jeu à un <span class="hl">AppID</span> spécifique, ou <span class="hl">dissociez</span> un existant`,
                `Steam Achievement Notifier n'utilisera plus le <span class="hl">suivi automatique des processus</span> pour aucun des <span class="hl">jeux liés</span> - à la place, le fichier exécutable spécifié sera suivi chaque fois que l'ID d'application associé est détecté`,
                `<span class="hl" id="appidhelp"><u>Comment trouver l'AppID d'un jeu Steam ?</u></span>`
            ],
            "new": "Nouveau...",
            "linknew": "Nouveau jeu lié",
            "linknewsub": [
                `Créez un nouveau lien entre un <span class="hl">fichier exécutable de jeu</span> et l' <span class="hl">AppID</span> associé`,
                `Une fois créés, les liens peuvent être <span class="hl">dissociés</span> via la boîte de dialogue <span class="hl">Gérer les jeux liés</span> précédente`
            ],
            "link": "Lier",
            "findappid": "Trouver l'AppID",
            "findappidsub": [
                `Chaque jeu Steam a un numéro unique associé - appelé <span class="hl">AppID</span>. Vous pouvez trouver l'AppID associé à n'importe quel jeu Steam en vérifiant l'une des méthodes suivantes :`,
                `Dans le <span class="hl">client Steam</span>, faites un clic droit sur un jeu dans votre <span class="hl">Bibliothèque</span> et sélectionnez <i>Propriétés</i> > <i>Mises à jour</i> - l'AppID sera listé ici`,
                `L' <span class="hl">URL</span> de la page <span class="hl">Store</span> du jeu - ce sera le numéro indiqué après <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Des sites Web tels que <span class="hl">SteamDB</span> - la section <span class="hl">Infos App</span> listera l'AppID de chaque jeu`
            ]
        }
    }
}