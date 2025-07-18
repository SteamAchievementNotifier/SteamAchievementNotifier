export const translations = {
    global: {
        main: "Principal",
        rare: "Rare",
        plat: "100%",
        test: "Notifications de Test",
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
        achievementunlocked: "Succès déverrouillé",
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
        restartapp: "Redémarrer l'Application",
        restartappsub: [
            `Si les choses ne fonctionnent pas correctement, utilisez cette option pour fermer et rouvrir l'application`,
            `Si le problème persiste après le redémarrage de l'application, veuillez envisager de le signaler en utilisant les liens intégrés sur l'écran d'accueil`
        ],
        suspend: "Suspendre",
        resume: "Reprendre",
        new: "Nouveau...",
        nodata: "Aucune donnée",
        findappid: "Trouver l'AppID",
        findappidsub: [
            `Chaque jeu Steam a un numéro unique associé - appelé <span class="hl">AppID</span>. Vous pouvez trouver l'AppID associé à n'importe quel jeu Steam en vérifiant l'une des méthodes suivantes :`,
            `Dans le <span class="hl">client Steam</span>, faites un clic droit sur un jeu dans votre <span class="hl">Bibliothèque</span> et sélectionnez <i>Propriétés</i> > <i>Mises à jour</i> - l'AppID sera listé ici`,
            `L' <span class="hl">URL</span> de la page <span class="hl">Store</span> du jeu - ce sera le numéro indiqué après <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Des sites Web tels que <span class="hl">SteamDB</span> - la section <span class="hl">Infos App</span> listera l'AppID de chaque jeu`
        ],
        noexe: "Fichier EXE du jeu non trouvé !",
        noexesub: "Cliquez ici pour plus d'informations",
        noexedialogsub: [
            `Steam Achievement Notifier n'a pas pu localiser automatiquement le fichier exécutable de ce jeu. L'emplacement du fichier exécutable est nécessaire pour "libérer" le jeu`,
            `Pour libérer manuellement le jeu, <i>clic droit</i> sur l'<span class="hl">icône de la barre d'état système</span> > <span class="hl">Options</span> > <span class="hl">Libérer le jeu</span>, ou utilisez le <span class="hl">Raccourci Libérer le Jeu</span>`,
            `Sinon, cliquez sur le bouton <span class="hl">Lier</span> ci-dessous pour ajouter le fichier exécutable associé à la fenêtre active au menu <span class="hl">Jeux Liés</span>`,
            `<span class="hl help" id="linkgamehelp"><u>Que se passe-t-il lorsque je clique sur le bouton Lier ?</u></span>`
        ],
        linkgamehelp: "Lier le jeu via la fenêtre",
        linkgamehelpsub: [
            `En cliquant sur le bouton <span class="hl">Lier</span>, une nouvelle entrée sera automatiquement ajoutée au menu <span class="hl">Paramètres</span> > <span class="hl">Jeux Liés</span> en utilisant les informations de la fenêtre active.`,
            `Après avoir cliqué sur le bouton <span class="hl">Lier</span>, un compte à rebours de 5 secondes commencera`,
            `Avant la fin du compte à rebours, focalisez-vous sur la fenêtre du jeu`,
            `Une fois le compte à rebours terminé, une nouvelle entrée pour l'<span class="hl">AppID</span> actuel sera ajoutée au menu <span class="hl">Paramètres</span> > <span class="hl">Jeux Liés</span>, en utilisant le fichier exécutable associé à la fenêtre active`,
            `Si vous devez réessayer, supprimez l'entrée via <span class="hl">Paramètres</span> > <span class="hl">Jeux Liés</span> en cliquant sur le bouton <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Impossible de lier la fenêtre",
        addlinkfailedsub: `Cliquez sur le bouton <span class="hl">Lier</span> pour réessayer`,
        webhookunlockmsg: "$user a débloqué un succès",
        webhookunlockmsgplat: "$user a débloqué tous les succès",
        webhookingame: "dans $gamename",
        notconnected: "Non connecté",
        raloghelp: "Mon jeu n'est pas détecté",
        raenablelog: `Fichiers de log de l'émulateur`,
        raenablelogsub: [
            `Afin d'accéder aux événements internes du jeu (comme l'état actuel du jeu, les informations de déverrouillage des succès, etc.), l'enregistrement dans un <span class="hl">fichier journal</span> externe <u>doit être activé</u> dans tous les émulateurs sélectionnés.<br><br>Tout émulateur sélectionné <u>doit utiliser ce <span class="hl">fichier journal</span></u> comme valeur du <span class="hl">chemin du fichier journal</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Paramètres > Journalisation</span> doit être configuré avec les paramètres suivants :
                    <br>
                    <ul>
                        <li><span class="hllb">Niveau de détail des journaux</span> : <span class="hlgreen">ACTIVÉ</span></li>
                        <li><span class="hllb">Niveau de journalisation du frontend</span> : <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Journaliser dans un fichier</span> : <span class="hlgreen">ACTIVÉ</span></li>
                        <li><span class="hllb">Horodater les fichiers journaux</span> : <span class="hlred">DÉSACTIVÉ</span></li>
                    </ul>
                    <br>
                    Avec les paramètres d'installation par défaut, <span class="hl">"retroarch.log"</span> est enregistré dans :
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Affichage > Afficher la configuration du journal</span> doit être configuré avec les paramètres suivants :
                    <br>
                    <ul>
                        <li><span class="hllb">Niveau de détail</span> : <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Sorties du journal</span> > <span class="hlgreen">Écrire dans un fichier</span></li>
                        <li><span class="hllb">Types de journal</span> > <span class="hlgreen">Succès (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Avec les paramètres d'installation par défaut, <span class="hl">"dolphin.log"</span> est enregistré dans l'un des emplacements suivants :
                    <br>
                    <ul>
                        <li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li>
                        <li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li>
                        <li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="pcsx2">PCSX2 [Nightly]</summary>
                <div>
                    <span class="hl">PCSX2 > Outils > Activer la journalisation des fichiers</span> doit être activé
                    <br>
                    <br>
                    Avec les paramètres d'installation par défaut, <span class="hl">"emulog.txt"</span> est stocké dans :
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> doit être <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>téléchargé</u></span> et déplacé dans <span class="hl">le répertoire d'installation de Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Paramètres > Succès > RAIntegration (Développeur uniquement)</span> doit être activé
                    <br>
                    <br>
                    Avec les paramètres d'installation par défaut, <span class="hl">"RALog.txt"</span> est enregistré dans :
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta non supportée",
        betaunsupportedsub: [
            "Une nouvelle version de Steam Achievement Notifier a été publiée !",
            `<u>Cette version Beta n'est plus supportée</u>. Veuillez télécharger et installer la dernière version officielle via Github en utilisant le bouton <span class="hl">Releases</span> ci-dessous.`,
            "Merci d'avoir testé ! 💜"
        ],
        betaghreleases: "Releases",
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
            title: "Langue",
            content: {
                steamlang: "Traduire les succès dans la langue de Steam",
                maxsteamlangretries: "Nombre maximum de tentatives de traduction"
            }
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
                nowtracking: "Afficher la notification de suivi",
                nowtrackingscale: "Échelle de suivi",
                nowtrackingpos: "Position de suivi",
                shortcuts: "Raccourcis de notification",
                noiconcache: "Désactiver le cache des icônes",
                webhooks: "Publier sur le serveur Discord",
                webhooktypes: "Types de Webhook",
                webhookurl: `URL du Webhook`,
                webhookcaution: `En activant cette option et en fournissant un lien Webhook Discord valide, vous acceptez que vous comprenez que <u>toutes les informations sur les succès et les jeux pour l'utilisateur Steam actuel</u> seront publiées sur le serveur Discord spécifié via le lien Webhook fourni.<br><br>Si vous ne souhaitez pas que Steam Achievement Notifier publie ces informations en votre nom, veuillez désactiver cette option.`,
                webhooklaststatus: "Dernier statut",
                webhookspoilers: `Ajouter un tag spoiler`,
                replaynotify: "Notification de répétition",
                replaynotifyshortcut: "Raccourci de répétition",
                customtrigger: "Déclencheur Personnalisé",
                customtriggershortcut: "Raccourci du Déclencheur",
                customtriggerdelay: "Délai du Déclencheur",
                customtriggerusedisplaytime: "Utiliser le Temps d’Affichage"
            }
        },
        games: {
            title: "Jeux",
            content: {
                linkedgames: "Jeux liés",
                themeswitch: "Changement automatique de thème",
                exclusionlist: "Liste d'exclusion"
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
                hdrmode: "Mode HDR",
                ovpos: "Position de superposition",
                ovmatch: "Correspondance de la position personnalisée",
                ovx: "Décalage horizontal",
                ovy: "Décalage vertical",                
                ovpath: "Chemin de la capture d'écran",
                ssdelay: "Délai de capture d'écran",
                notifyimg: "Image de notification",
                imgpath: "Chemin de l'image",
                ssenabled: "Activer",
                ssmode: "Mode Capture d’écran",
                screen: "Écran",
                window: "Fenêtre"
            }
        },
        streaming: {
            title: "Streaming",
            content: {
                extwin: "Notifications de flux",
                extwinframerate: "Taux de trame",
                extwinshow: "Afficher la fenêtre",
                audiosrc: "Source audio",
                notify: "Notification",
                app: "Application",
                off: "Muet",
                statwin: "Fenêtre des Statistiques de Succès",
                statwinaot: "Toujours au premier plan",
                noachievements: "Aucun succès à afficher",
                startgame: "Lancez une partie pour afficher les succès !",
                max: "Max",
                custom: "Personnalisé...",
                statwinshortcut: "Raccourci de superposition",
            }
        },
        accessibility: {
            title: "Accessibilité",
            content: {
                noanim: "Désactiver les animations de fenêtre d'application",
                noupdatedialog: "Désactiver la boîte de dialogue de mise à jour",
                nvda: "Activer le support NVDA",
                tooltips: "Afficher les info-bulles",
                showsystrayopts: "Afficher les options de la barre système",
                releaseshortcut: "Raccourci Libérer le Jeu"
            }
        },
        advanced: {
            title: "Avancé",
            content: {
                pollrate: "Taux de Sondage",
                initdelay: "Délai de Suivi",
                releasedelay: "Délai de Sortie",
                maxretries: "Nombre maximal de tentatives de traitement",
                debug: "Panneau de débogage",
                userust: "Mode de traitement alternatif",
                notifydebug: "Afficher les notifications de débogage",
                exportachdata: "Exporter les données de succès",
                uselegacynotifytimer: "Utiliser le minuterie de notification legacy",
                usecustomfiles: "Utiliser des fichiers d'application personnalisés",
                showcustomfiles: "Afficher les fichiers d'application personnalisés"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Émulateurs",
                rauser: "Nom d'utilisateur",
                rakey: "Clé API",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2 [Nightly]",
                duckstation: "Duckstation",
                installdir: "Chemin du fichier log",
                rapercenttype: "Type de pourcentage",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Entrez le chemin du fichier log",
                logfile: "Fichier journal",
                status: "Statut",
                game: "Jeu",
                wait: "En attente de l'émulateur",
                idle: "En attente d'un événement du jeu",
                start: "Démarrer le jeu",
                stop: "Arrêter le jeu",
                achievement: "Succès débloqué"
            }
        },
        misc: {
            title: "Divers",
            content: {
                colorprofile: "Profil de couleur",
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
                blur: "Flou",
                roundness: "Arrondi",
                fontsize: "Taille de la Police",
                usecustomfontsizes: "Utiliser des tailles de police personnalisées",
                unlockmsgfontsize: "Message de déverrouillage",
                titlefontsize: "Titre",
                descfontsize: "Description",
                textvspace: "Espacement du texte",
                opacity: "Opacité",
                bgonly: "Fond Seulement",
                glow: "Lueur",
                glowcolor: "Couleur",
                glowsize: "Taille",
                glowx: "Décalage Horizontal",
                glowy: "Décalage Vertical",
                glowopacity: "Opacité",
                glowanim: "Animation",
                glowspeed: "Vitesse",
                glowrarity: "Utiliser la rareté",
                glowcolorbronze: "Rareté : > 50%",
                glowcolorsilver: "Rareté : < 50% & > $rarity",
                glowcolorgold: "Rareté : < $rarity",
                off: "Aucun",
                pulse: "Pouls",
                double: "Double",
                focus: "Focus",
                orbit: "Orbite",
                fluorescent: "Fluorescent",
                rainbow: "Arc-en-ciel",
                mask: "Masque",
                maskimg: "Image du masque",
                useoutline: "Contour",
                outline: "Type de Contour",
                outlinecolor: "Couleur du Contour",
                outlinewidth: "Largeur du Contour",
                dashed: "Tireté",
                dotted: "Pointillé"
            }
        },
        colors: {
            title: "Couleurs",
            content: {
                primarycolor: "Couleur Principale",
                secondarycolor: "Couleur Secondaire",
                tertiarycolor: "Couleur Tertiaire",
                iconshadowcolor: "Couleur de l'ombre de l'icône rare",
                iconanimcolor: "Couleur de l'animation de l'icône rare",
                fontcolor: "Couleur de la Police",
                usecustomfontcolors: "Utiliser des couleurs de police personnalisées",
                unlockmsgfontcolor: "Couleur 1",
                titlefontcolor: "Couleur 2",
                descfontcolor: "Couleur 3",
                fontoutline: "Contour de la Police",
                fontoutlinecolor: "Couleur du Contour de la Police",
                fontoutlinescale: "Échelle du Contour de la Police",
                fontshadow: "Ombre de la Police",
                fontshadowcolor: "Couleur de l'Ombre de la Police",
                fontshadowscale: "Échelle de l'Ombre de la Police"
            }
        },
        icons: {
            title: "Icônes",
            content: {
                iconscale: "Échelle de l'icône",
                iconroundness: "Arrondi de l'Icône",
                showiconborder: "Afficher la bordure de l'icône",
                iconborderimg: "Bordure de l'icône",
                iconborderpos: "Position de la bordure",
                iconborderscale: "Échelle de la bordure",
                iconborderx: "Décalage horizontal",
                iconbordery: "Décalage vertical",
                iconborderrarity: "Utiliser la rareté",
                iconborderimgbronze: "Rareté > 50%",
                iconborderimgsilver: "Rareté : < 50% et > $rarity",
                front: "Devant",
                back: "Derrière",
                plat: "Logo à 100%",
                usegameicon: "Utiliser l'Icône du Jeu",
                gameicontype: "Type d'icône du jeu",
                usecustomimgicon: "Utiliser une icône personnalisée",
                customimgicon: "Icône personnalisée",
                icon: "Icône",
                logo: "Logo",
                logoscale: "Échelle du logo",
                decoration: "Décoration",
                decorationscale: "Échelle de la décoration",
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
                updatetheme: "Mettre à jour le Thème",
                savetheme: "Enregistrer le Thème",
                sub: [
                    `Les <span class="hl">Thèmes Utilisateur</span> enregistrés peuvent être sélectionnés dans le menu <span class="hl">Sélectionner Thème</span> sur l'écran d'accueil.`,
                    `Assurez-vous que le <span class="hl">Nom du Thème</span> est <u>unique</u> - un nom correspondant à un thème existant <u>écrasera le précédent</u> !`
                ],
                placeholder: "Nom du Thème",
                theme: "Thème",
                importtheme: "Importer un thème",
                import: "Importer",
                importsub: [
                    `Importer un <span class="hl">fichier de thème</span> créé par l'utilisateur`,
                    `<span class="hl">Les thèmes importés</span> seront chargés automatiquement une fois importés avec succès et peuvent être sélectionnés depuis le menu <span class="hl">Sélection du thème</span>`,
                ],
                importidle: `Sélectionnez un <span class="hl">fichier de thème</span> à importer`,
                importcopied: `Thème copié avec succès`,
                importrenamed: `Thème renommé avec succès`,
                importextracted: `Thème extrait avec succès`,
                importrewriting: `Réécriture des chemins de fichiers du thème...`,
                importconverting: `Conversion du thème...`,
                importcreating: `Création du thème...`,
                importdone: `Thème importé avec succès`,
                importfailed: `Erreur lors de l'importation du fichier de thème sélectionné !`,
                exporttheme: "Exporter le thème",
                export: "Exporter",
                exporterrortitle: "Erreur d'exportation",
                exporterrorsub: [
                    "Une erreur est survenue lors de la tentative d'exportation du thème sélectionné",
                    `Essayez de sauvegarder le thème actuel (<i>via <span class="hl">Sauvegarder le thème</span></i>) et tentez d'exporter à nouveau`,
                    `Si le problème persiste, veuillez copier l'erreur ci-dessous, puis signaler via les boutons de lien sur l'<span class="hl">Écran d'accueil</span>`
                ],
                synctheme: "Synchroniser le thème",
                syncedwith: "Synchronisé avec",
                themeselect: "Thème sélectionné"
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
        steamlang: `Tenter de charger les traductions situées dans les fichiers de l'application Steam afin d'afficher les informations des succès dans la langue choisie par l'utilisateur dans le client Steam<br><br><span class="ttdesc">Cette option tente de localiser les traductions dans un fichier JSON stocké dans les données de l'application Steam. Si une traduction pour le succès actuel ne peut pas être trouvée, les informations du succès récupérées depuis Steamworks seront affichées à la place.</span>`,
        maxsteamlangretries: `Le nombre de tentatives (toutes les 100 ms) pour trouver des traductions valides pour le succès actuel<br><br><span class="ttdesc">Actuellement, Steam ne stocke qu'une petite quantité de données sur les succès dans le fichier JSON associé à chaque jeu. Tous les succès qui ne sont pas présents dans ce fichier seront ajoutés après le déverrouillage du succès.<br><br>Étant donné que l'ajout de nouvelles données peut prendre du temps, augmenter cette valeur augmentera la probabilité de trouver des données de traduction pour le succès actuel, mais cela peut également retarder l'apparition de la notification à l'écran du temps calculé par ce paramètre.<br><br>Si aucune donnée de traduction valide ne peut être trouvée pour le succès actuel, la traduction reviendra à la langue spécifiée dans Steamworks.</span>`,
        desktop: "Activez un raccourci sur le bureau pour exécuter l'application",
        startwin: "Démarrer Steam Achievement Notifier automatiquement après la connexion",
        startmin: "Après le lancement, masquez la fenêtre de l'interface utilisateur de l'application jusqu'à son ouverture depuis la barre d'état système",
        nohwa: `Désactiver l'accélération matérielle, ce qui peut améliorer les performances sur les systèmes avec des ressources limitées ou sans GPU dédié<br><br><span class="ttdesc">L'application redémarrera après avoir activé/désactivé cette option</span>`,
        litemode: "Désactiver tous les éléments interactifs de l'interface utilisateur, tout en fournissant uniquement une fonctionnalité limitée de l'application via l'icône de la barre d'état système. Peut améliorer les ressources consommées par l'application",
        rarity: "Le pourcentage à partir duquel les notifications de succès rares seront déclenchées. Tout succès avec un pourcentage de déverrouillage supérieur à cette valeur sera affiché comme une notification principale",
        showpercent: "Affiche le pourcentage de déverrouillage du succès dans la notification pour le(s) type(s) sélectionné(s)",
        soundonly: "Désactive les notifications, en jouant uniquement les sons définis via le Personnaliseur",
        extwin: "Créez une fenêtre qui duplique toutes les notifications actuellement affichées à l'écran. Cette fenêtre peut ensuite être ajoutée comme source de capture de fenêtre pour être utilisée dans un logiciel de streaming, comme OBS",
        extwinframerate: "Définir le taux de trame cible pour les notifications de diffusion",
        extwinshow: `Basculer la visibilité de la fenêtre des notifications de streaming<br><br><span class="ttdesc">Lorsqu'elle est focalisée dans la barre des tâches, maintenez la touche <code class="ttcode">Ctrl</code> enfoncée pour afficher l'emplacement actuel de la fenêtre</span>`,
        audiosrc: "Sélectionnez la source du son généré par l'application (ou désactivez-le)",
        nowtracking: "Affiche une notification informant l'utilisateur que les succès pour un jeu en cours d'exécution sont suivis",
        nowtrackingpos: `Définissez la position de la notification de suivi`,
        nowtrackingscale: `Définir la taille de la notification de suivi`,
        shortcuts: "Déclenche une notification de test via un raccourci clavier. Les raccourcis peuvent être personnalisés pour chaque type de notification",
        noiconcache: `Désactive le cache des icônes de succès lors du lancement des jeux.<br><br><span class="ttdesc">Cela peut grandement améliorer les performances de l'application lors du lancement des jeux et résoudre également les problèmes de suivi avec les jeux comportant un grand nombre de succès. Cependant, dans de rares cas, la désactivation du cache des icônes peut entraîner l'absence d'icônes de succès dans les notifications</span>`,
        steamss: "Prendre une capture d'écran Steam lorsqu'un succès est déverrouillé",
        screenshots: "Sélectionnez le type de média supplémentaire à créer lorsqu'une notification est affichée",
        monitors: "L'écran qui sera capturé lors de la prise de capture d'écran",
        hdrmode: `Prendre des captures d'écran en utilisant une méthode compatible avec les moniteurs utilisant la plage dynamique élevée (HDR)`,
        ovpos: "La position de la superposition de notification dans la capture d'écran",
        ovmatch: "Correspond à la position d'écran définie dans le Personnaliseur pour ce type de notification",
        ovpath: "L'emplacement où les captures d'écran générées par cette option seront enregistrées",
        ssdelay: "Ajoute un délai entre l'apparition de la notification et la prise de la capture d'écran",
        sspreview: "Affiche un aperçu de l'apparence de la capture d'écran lorsqu'elle est enregistrée",
        noanim: "Désactive toutes les animations de fenêtre de l'application et les effets de transition",
        noupdatedialog: `Empêcher l'affichage automatique et la mise au premier plan de la boîte de dialogue <span class="hl">Mise à jour disponible</span><br><br><span class="ttdesc">La boîte de dialogue peut toujours être ouverte en cliquant sur le bouton de mise à jour lorsque disponible</span>`,
        nvda: "Active la copie des informations de succès dans le presse-papiers lorsqu'un succès est déverrouillé, afin d'être lu par un logiciel de lecteur d'écran, tel que NVDA",
        tooltips: "Affiche des info-bulles lors du survol de certains éléments de l'interface utilisateur",
        colorprofile: `Forcer toutes les fenêtres de l'application à s'afficher avec le profil de couleur sélectionné<br><br><span class="ttdesc">Nécessite un redémarrage de l'application</span>`,
        pollrate: `Définir l'intervalle de mise à jour des données de réalisation pendant le jeu<br><br><span class="ttdesc">Les performances peuvent augmenter/diminuer en fonction de la valeur ou du matériel du système. Les valeurs plus élevées entraînent généralement une charge système plus faible, mais peuvent retarder les notifications</span>`,
        initdelay: `Définissez le délai entre la détection de l'<span class="hl">AppID</span> actuel et le début du suivi des processus/réalisations<br><br><span class="ttdesc">Augmenter cette valeur peut empêcher des scénarios où Steam ne peut pas lancer le jeu actuel (en raison de l'initialisation de l'application dans Steamworks avant le lancement du jeu)</span><br><br><span class="ttdesc">Alternativement, augmenter cette valeur peut également être utilisé pour contourner la détection incorrecte des processus de pré-lancement du jeu</span>`,
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
        blur: "Définir le niveau de flou appliqué à l'arrière-plan de la notification",
        roundness: "Définir l'arrondi des bords de la notification",
        fontsize: "Définir la taille de la police utilisée dans la notification",
        opacity: "Définir l'opacité globale de la notification",
        bgonly: "Définir uniquement l'opacité de l'arrière-plan de la notification, en maintenant les autres éléments à une opacité maximale",
        glow: "Activer un effet de lueur qui entoure la notification",
        glowcolor: "Définir la couleur de l'effet de lueur",
        glowsize: "Définir la taille de l'effet de lueur",
        glowx: "Déplacez horizontalement la position de l'effet de lueur",
        glowy: "Déplacez verticalement la position de l'effet de lueur",
        glowopacity: "Définissez l'opacité de l'effet de lueur",
        glowanim: "Sélectionner une animation prédéfinie à appliquer à l'effet de lueur",
        glowspeed: "Définir la vitesse de l'animation appliquée à l'effet de lueur",
        glowrarity: "Modifier la couleur de l'effet lumineux en fonction de la rareté du succès déverrouillé",
        glowcolorbronze: "La couleur de l'effet lumineux lorsque le pourcentage de déverrouillage est > 50%",
        glowcolorsilver: "La couleur de l'effet lumineux lorsque le pourcentage de déverrouillage est < 50% et > $rarity",
        glowcolorgold: "La couleur de l'effet lumineux lorsque le pourcentage de déverrouillage est < $rarity",
        mask: "Activer le masquage de parties de la notification avec une image personnalisée",
        maskimg: `Charger un fichier image à utiliser comme masque<br><br><span class="ttdesc">En CSS, <code class="ttcode">mask-mode: alpha</code> fonctionne de manière opposée à ce qui est généralement attendu - les zones de transparence dans le fichier image seront obscurcies, et les zones noires/grises permettront aux éléments en dessous d'être visibles</span>`,
        useoutline: "Afficher un contour autour de la notification",
        outline: "Sélectionnez le type de contour à afficher autour de la notification",
        outlinecolor: "Définissez la couleur du contour autour de la notification",
        outlinewidth: "Définissez la largeur du contour autour de la notification",
        primarycolor: "Définir la couleur principale de la notification",
        secondarycolor: "Définir la couleur secondaire de la notification",
        tertiarycolor: "Définir la couleur tertiaire de la notification",
        fontcolor: "Définir la couleur du texte affiché dans la notification",
        fontoutline: "Ajouter un contour à tout le texte affiché dans la notification",
        fontoutlinecolor: "Définir la couleur du contour du texte",
        fontoutlinescale: "Définir l'épaisseur du contour du texte",
        fontshadow: "Ajouter une ombre à tout le texte affiché dans la notification",
        fontshadowcolor: "Définir la couleur de l'ombre du texte",
        fontshadowscale: "Définir l'épaisseur de l'ombre du texte",
        iconroundness: "Définir l'arrondi de l'icône de succès/jeu affichée dans la notification",
        plat: "Charger un fichier image pour utiliser comme icône 100%",
        usegameicon: "Remplacer l'icône du succès débloqué par l'icône du jeu actuel",
        gameicontype: `Sélectionnez le type d'image à afficher comme icône du jeu`,
        usecustomimgicon: "Remplacer l'icône du succès débloqué par un fichier image personnalisé",
        customimgicon: "Charger un fichier image à utiliser comme icône personnalisée",
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
        updatetheme: "Mettre à jour le Thème actuel avec les options de personnalisation sélectionnées",
        savetheme: "Enregistrer toutes les options de personnalisation configurées en tant que nouveau thème",
        visibilitybtn: "Basculer la visibilité de l'élément dans les prévisualisations personnalisées et les notifications de test",
        delbtn: "Réinitialiser l'élément par défaut",
        imgpath: "L'emplacement où les images de notification générées par cette option seront enregistrées",
        ssenabled: "Activer ou désactiver la génération de médias pour ce type",
        checkforupdates: `Vérifiez si une nouvelle version de l'application a été publiée sur GitHub. Si une mise à jour est disponible, elle sera téléchargée et installée automatiquement une fois confirmée via la boîte de dialogue <span class="hl">Mise à jour disponible</span>`,
        linkedgames: `Contourner le <span class="hl">suivi automatique des processus</span> pour des jeux Steam spécifiques<br><br><span class="ttdesc">Cette option ne devrait être utilisée que dans des cas très spécifiques. Les utilisateurs ne devraient pas avoir besoin d'utiliser cette option dans des circonstances normales !</span>`,
        exclusionlist: `Empêcher le suivi des réalisations dans des jeux Steam spécifiques par l'application<br><br><span class="ttdesc">Cette option ne devrait être utilisée que dans des cas très spécifiques. Les utilisateurs ne devraient pas avoir besoin d'utiliser cette option dans des circonstances normales !</span>`,
        ovx: "Décalez la notification affichée dans la capture d'écran horizontalement",
        ovy: "Décalez la notification affichée dans la capture d'écran verticalement",
        importtheme: `Importez des personnalisations via un <span class="hl">fichier de thème</span> créé par l'utilisateur`,
        exporttheme: `Exportez le <span class="hl">thème</span> actuellement sélectionné pour le partage<br><br><span class="ttdesc">Avant de tenter l'exportation, veuillez vous assurer que le <span class="hl">thème</span> souhaité est sélectionné (via le menu <span class="hl">Sélection du thème</span>). Assurez-vous également que les personnalisations ont été enregistrées dans le <span class="hl">thème</span> sélectionné (via le menu <span class="hl">Enregistrer le thème</span>)<br><br><u>Toutes les personnalisations qui ne sont pas encore enregistrées dans le <span class="hl">thème</span> actuel ne seront pas exportées !</u></span>`,
        webhooks: "Utilisez une URL de Webhook pour publier sur un serveur Discord chaque fois qu'un succès est débloqué",
        webhookmain: `Basculer pour savoir si les informations sur les succès doivent être envoyées à un serveur Discord lorsqu'un succès principal est débloqué`,
        webhookrare: "Basculer pour savoir si les informations sur les succès doivent être envoyées à un serveur Discord lorsqu'un succès rare est débloqué",
        webhookplat: "Basculer pour savoir si les informations sur les succès doivent être envoyées à un serveur Discord lorsqu'un succès à 100% est débloqué",
        webhooktest: "Activer ou désactiver l'envoi d'informations de test à un serveur Discord lorsque des notifications de test de tout type sont déclenchées",
        webhookurl: `Définissez la <span class="hl">URL du Webhook</span> pour le serveur Discord souhaité<br><br><span class="ttdesc">Une <span class="hl">URL de Webhook</span> est utilisée pour publier sur un serveur/kanal Discord au nom d'un utilisateur ou d'une application. Pour configurer un nouveau Webhook pour un serveur Discord, l'utilisateur doit avoir un rôle dans le serveur souhaité qui autorise la création de Webhooks<br><br><u>Une URL de Webhook est requise lorsque vous utilisez cette option</u><br><br>Consultez la documentation officielle de Discord pour plus d'informations</span>`,
        webhookspoilers: `Ajouter un tag spoiler aux réalisations "Cachées" lors de leur publication sur Discord`,
        unlockmsg: "Définissez la position du message de déverrouillage/texte personnalisé dans le $type",
        title: "Définissez la position du titre du succès dans le $type",
        desc: "Définissez la position de la description du succès dans le $type",
        notification: "notification",
        screenshot: "capture d'écran",
        percentpos: "Définissez la position du pourcentage de rareté dans le $type",
        sspercentpos: "Définissez la position du pourcentage de rareté dans le $type",
        hiddeniconpos: "Définissez la position de l'icône de succès caché/secrète dans le $type",
        sshiddeniconpos: "Définissez la position de l'icône de succès caché/secrète dans le $type",
        decorationpos: "Définissez la position de l'élément de décoration dans le $type",
        ssdecorationpos: "Définissez la position de l'élément de décoration dans le $type",
        percentbadge: "Afficher le pourcentage de déverrouillage à l'intérieur d'un insigne placé au-dessus de l'icône de la réussite/du jeu",
        sspercentbadge: "Afficher le pourcentage de déverrouillage à l'intérieur d'un insigne placé au-dessus de l'icône de la réussite/du jeu",
        percentbadgepos: "Définir la position de l'insigne",
        sspercentbadgepos: "Définir la position de l'insigne",
        percentbadgecolor: "Définir la couleur de fond de l'insigne",
        sspercentbadgecolor: "Définir la couleur de fond de l'insigne",
        percentbadgefontcolor: "Définissez la couleur de la police de l'insigne",
        sspercentbadgefontcolor: "Définissez la couleur de la police de l'insigne",
        percentbadgefontsize: "Définir la taille de l'insigne",
        sspercentbadgefontsize: "Définir la taille de l'insigne",
        percentbadgeroundness: "Définir l'arrondi de l'insigne",
        sspercentbadgeroundness: "Définir l'arrondi de l'insigne",
        percentbadgex: "Déplacer horizontalement l'élément du badge",
        sspercentbadgex: "Déplacer horizontalement l'élément du badge",
        percentbadgey: "Déplacer verticalement l'élément du badge",
        sspercentbadgey: "Déplacer verticalement l'élément du badge",
        percentbadgeimg: "Afficher une icône basée sur la rareté en tant qu'élément badge",
        sspercentbadgeimg: "Afficher une icône basée sur la rareté en tant qu'élément badge",
        percentbadgeimgbronze: "L'icône du badge affichée lorsque le pourcentage de déblocage est > 50%",
        sspercentbadgeimgbronze: "L'icône du badge affichée lorsque le pourcentage de déblocage est > 50%",
        percentbadgeimgsilver: "L'icône du badge affichée lorsque le pourcentage de déblocage est < 50% et > $rarity",
        sspercentbadgeimgsilver: "L'icône du badge affichée lorsque le pourcentage de déblocage est < 50% et > $rarity",
        percentbadgeimggold: "L'icône du badge affichée lorsque le pourcentage de déblocage est < $rarity",
        sspercentbadgeimggold: "L'icône du badge affichée lorsque le pourcentage de déblocage est < $rarity",
        resetpbimgs: "Réinitialiser toutes les icônes de badge par défaut",
        elemsmatch: `Correspondre aux paramètres des éléments de notification définis dans le personnalisateur pour ce type de notification<br><br><span class="ttdesc">Certains préréglages de notification ne peuvent pas entièrement correspondre aux paramètres du personnalisateur en raison des différences entre les notifications à l'écran et celles basées sur les captures d'écran</span>`,
        themeswitch: `Changer automatiquement pour tout <span class="hl">Thème</span> enregistré lorsqu'un jeu spécifique est détecté`,
        userthemesync: `Synchroniser les personnalisations du <span class="hl">Thème</span> sélectionné avec tous les autres types de notification`,
        showsystrayopts: `Afficher toutes les options généralement situées sous <span class="hl">Barre système</span> > <span class="hl">Options</span> dans <span class="hl">Paramètres</span> > <span class="hl">Divers</span>`,
        releaseshortcut: "Libérer le jeu actuellement suivi à l'aide du raccourci clavier spécifié",
        themeselect: "Sélectionnez un Thème enregistré précédemment",
        statwin: `Affichez des statistiques de succès configurables pour le jeu en cours dans une fenêtre externe<br><br><span class="ttdesc">Lorsqu'elle est utilisée avec l'option <span class="hl">Traduire les succès dans la langue de Steam</span>, certaines traductions peuvent ne pas être disponibles tant que le succès spécifié n'est pas débloqué</span>`,
        statwinaot: `Activez le mode "Toujours au premier plan" pour la fenêtre des statistiques de succès, permettant à la fenêtre d'apparaître au-dessus de la fenêtre du jeu<br><br><span class="ttdesc">Lorsqu'elle est activée, la fenêtre des statistiques de succès ne prendra plus en compte les interactions de l'utilisateur, telles que les événements de "clic". Pour réactiver les interactions avec la fenêtre, cette option doit être désactivée</span>`,
        statwinshortcut: "Basculer la superposition des statistiques de succès à l'aide du raccourci clavier spécifié",
        ssdisplay: "Afficher un aperçu de la capture d'écran dans la notification",
        iconscale: "Agrandir ou réduire la taille de l'icône de la réussite",
        showiconborder: "Afficher une image en tant que bordure autour de l'icône du succès",
        iconborderimg: "Charger un fichier image à utiliser comme bordure autour de l'icône du succès",
        iconborderpos: "Définir si l'image de la bordure doit être affichée devant ou derrière l'icône du succès",
        iconborderscale: "Agrandir ou réduire la taille de la bordure de l'icône dans la notification",
        iconborderx: "Augmenter ou diminuer le décalage horizontal de la bordure dans la notification",
        iconbordery: "Augmenter ou diminuer le décalage vertical de la bordure dans la notification",
        iconborderrarity: "Change l’image de bordure de l’icône affichée en fonction de la rareté du succès déverrouillé",
        iconborderimgbronze: "Image de bordure de l’icône affichée lorsque le pourcentage de déverrouillage est > 50%",
        iconborderimgsilver: "Image de bordure de l’icône affichée lorsque le pourcentage de déverrouillage est < 50% et > $rarity",
        iconshadowcolor: "Définir la couleur de l'effet d'ombre autour de l'icône de la réussite lors du déverrouillage d'une réussite rare",
        iconanimcolor: "Définir la couleur de l'effet d'animation derrière l'icône de la réussite lors du déverrouillage d'une réussite rare",
        logoscale: "Agrandir ou réduire la taille de l'élément du logo dans la notification",
        decorationscale: "Agrandir ou réduire la taille de l'élément de décoration dans la notification",
        usecustomfontsizes: `Agrandir ou réduire individuellement la taille des éléments textuels dans la notification<br><br><span class="ttdesc">La préservation de la mise en page d'origine de la notification ne peut être garantie lors du changement des tailles de police individuelles</span>`,
        unlockmsgfontsize: "Agrandir ou réduire la taille de l'élément de texte du message de déverrouillage",
        titlefontsize: "Agrandir ou réduire la taille de l'élément de texte du titre de la réussite",
        descfontsize: "Agrandir ou réduire la taille de l'élément de texte de la description de la réussite",
        webhookembedcolormain: "Définir la couleur utilisée dans l'intégration webhook lors du déverrouillage d'une réussite principale",
        webhookembedcolorrare: "Définir la couleur utilisée dans l'intégration webhook lors du déverrouillage d'une réussite rare",
        webhookembedcolorplat: "Définir la couleur utilisée dans l'intégration webhook lors du déverrouillage d'une réussite 100%",
        raemus: "Afficher des notifications lorsque des jeux sont détectés dans des émulateurs pris en charge",
        rauser: "Définir le nom d'utilisateur Retro Achievements pour suivre les succès",
        rakey: `Définissez la clé Web API à utiliser pour l'authentification à l'API Retro Achievements<br><br><span class="ttdesc">Une clé Web API peut être copiée ou régénérée en vous connectant au site Retro Achievements et en accédant à <span class="hl">Paramètres > Clés > Clé Web API</span><br><br>🔒 La clé fournie sera chiffrée avant d'être stockée localement sur le système (si le système d'exploitation actuel prend en charge le chiffrement)</span>`,
        rapercenttype: "Définir si les notifications doivent afficher le pourcentage de déverrouillage des succès Hardcore ou Softcore",
        retroarch: `Afficher les notifications Retro Achievements pour les jeux émulés via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Paramètres > Journalisation</span> doit être configuré avec les paramètres suivants :<br><br><ul><li><span class="hllb">Niveau de détail des journaux</span> : <span class="hlgreen">ACTIVÉ</span></li><li><span class="hllb">Niveau de journalisation du frontend</span> : <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Journaliser dans un fichier</span> : <span class="hlgreen">ACTIVÉ</span></li><li><span class="hllb">Horodater les fichiers journaux</span> : <span class="hlred">DÉSACTIVÉ</span></li></ul></span>`,
        dolphin: `Afficher les notifications Retro Achievements pour les jeux émulés via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Affichage > Afficher la configuration du journal</span> doit être configuré avec les paramètres suivants :<br><br><ul><li><span class="hllb">Niveau de détail</span> : <span class="hlgreen">Info</span></li><li><span class="hllb">Sorties du journal</span> > <span class="hlgreen">Écrire dans un fichier</span></li><li><span class="hllb">Types de journal</span> > <span class="hlgreen">Succès (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Afficher les notifications Retro Achievements pour les jeux émulés via PCSX2 [Nightly]<br><br><span class="ttdesc"><span class="hl">PCSX2 > Outils > Activer la journalisation des fichiers</span> doit être activé</span><br><br><span class="ttdesc">❗ En raison des mises à jour récentes, le contenu de <span class="hl">"emulog.txt"</span> est actuellement uniquement accessible dans la version Nightly de PCSX2</span>`,
        duckstation: `Afficher les notifications Retro Achievements pour les jeux émulés via Duckstation<br><br><span class="ttdesc">❗ Le fichier <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> doit être téléchargé et déplacé dans le <span class="hl">répertoire d'installation de Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Paramètres > Succès > RAIntegration (Développeurs uniquement)</span> doit être activé</span>`,
        retroarchpath: `Définir le chemin du fichier journal <span class="hl">"retroarch.log"</span> de RetroArch<br><br><span class="ttdesc">Avec les paramètres d'installation par défaut, <span class="hl">"retroarch.log"</span> est enregistré dans <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Définir le chemin du fichier journal <span class="hl">"dolphin.log"</span> de Dolphin<br><br><span class="ttdesc">Avec les paramètres d'installation par défaut, <span class="hl">"dolphin.log"</span> est enregistré dans l'un des emplacements suivants :<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Définir le chemin du fichier journal <span class="hl">"emulog.txt"</span> de PCSX2<br><br><span class="ttdesc">Avec les paramètres d'installation par défaut, <span class="hl">"emulog.txt"</span> est enregistré dans <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Définissez le chemin vers le fichier journal <span class="hl">"RALog.txt"</span> de Duckstation<br><br><span class="ttdesc">Avec les paramètres d'installation par défaut, <span class="hl">"RALog.txt"</span> est enregistré dans <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        usecustomfontcolors: "Définir individuellement la couleur des éléments de texte dans la notification",
        unlockmsgfontcolor: "Définir la couleur du premier élément de texte",
        titlefontcolor: "Définir la couleur du deuxième élément de texte",
        descfontcolor: "Définir la couleur du troisième élément de texte",
        exportachdata: `Exporter les données de succès vers un fichier JSON lorsqu'un succès est débloqué<br><br><span class="ttdesc">Lorsqu'il est activé, <span class="ttcode">achdata.json</span> sera exporté vers :<br><br><ul><li><span class="hllb">%localappdata\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Ajuste l’espacement vertical entre les éléments de texte dans la notification",
        ssmode: `Définit si la capture d’écran doit inclure tout l’écran ou uniquement la fenêtre du jeu en cours<span style="color: red;">*</span><br><br><span class="ttdesc">Si le <span class="hl">fichier exécutable</span> du jeu en cours ne peut pas être localisé (<i>soit via le <span class="hl">suivi automatique des processus</span>, soit en l’ajoutant comme un <span class="hl">Jeu Lié</span></i>), cette option reviendra par défaut au mode "Écran"</span>`,
        replaynotify: "Répéter la dernière notification de réussite",
        replaynotifyshortcut: "Répéter la dernière notification de réussite en utilisant le raccourci clavier spécifié",
        replaynotifyempty: `<br><br><span class="ttdesc">La file d'attente de répétition est vide. Débloquez une réussite pour répéter une notification</span>`,
        uselegacynotifytimer: `Masquer les notifications à l'aide d'un minuterie statique externe à la fenêtre de notification<br><br><span class="ttdesc">L'activation de cette option peut entraîner l'échec des animations de notification</span>`,
        customtrigger: "Déclenche une touche/combinaison simulée lors du déverrouillage d’un succès. Peut être utilisé pour activer des raccourcis clavier enregistrés dans des applications externes",
        customtriggershortcut: `Déclenche la touche/combinaison spécifiée lors du déverrouillage d’un succès<br><br><span class="ttdesc">Prend en charge entre 1 et 3 touches par raccourci. Pour des pressions/combinaisons nécessitant moins de 3 touches, appuyez sur les touches souhaitées et attendez la fin du compte à rebours (5s)</span>`,
        customtriggerdelay: "Retarde la touche/combinaison du Déclencheur Personnalisé spécifié",
        customtriggerusedisplaytime: `Retarde la touche/combinaison du Déclencheur Personnalisé en fonction de la valeur du Temps d’Affichage du type de notification actuel`
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
    linkgame: {
        content: {
            exepath: "Chemin du fichier exécutable",
            managesub: [
                `Lie manuellement le <span class="hl">fichier exécutable</span> d'un jeu à un <span class="hl">AppID</span> spécifique, ou <span class="hl">dissociez</span> un existant`,
                `Steam Achievement Notifier n'utilisera plus le <span class="hl">suivi automatique des processus</span> pour aucun des <span class="hl">jeux liés</span> - à la place, le fichier exécutable spécifié sera suivi chaque fois que l'ID d'application associé est détecté`,
                `<span class="hl" id="appidhelp"><u>Comment trouver l'AppID d'un jeu Steam ?</u></span>`
            ],
            linknew: "Nouveau jeu lié",
            linknewsub: [
                `Créez un nouveau lien entre un <span class="hl">fichier exécutable de jeu</span> et l' <span class="hl">AppID</span> associé`,
                `Une fois créés, les liens peuvent être <span class="hl">dissociés</span> via la boîte de dialogue <span class="hl">Gérer les jeux liés</span> précédente`
            ],
            link: "Lier",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Ajouter l'<span class="hl">AppID</span> de n'importe quel jeu Steam à la <span class="hl">liste d'exclusion</span>`,
                `Steam Achievement Notifier ne tentera pas de suivre les données de réalisation pour n'importe quel <span class="hl">AppID</span> de jeu ajouté à la <span class="hl">liste d'exclusion</span>`,
                `<span class="hl" id="appidhelp"><u>Comment trouver l'AppID d'un jeu Steam ?</u></span>`
            ],
            exclusionnew: "Nouvelle exclusion",
            exclusionnewsub: [
                `Entrez l'<span class="hl">AppID</span> à ajouter à la <span class="hl">liste d'exclusion</span>`
            ]
        }
    },
    notificationelems: {
        title: "Éléments de notification",
        content: {
            unlockmsg: "Message de déverrouillage",
            title: "Titre du succès",
            desc: "Description du succès",
            hiddeniconpos: "Icône cachée",
            sshiddeniconpos: "Icône cachée",
            decorationpos: "Décoration",
            ssdecorationpos: "Décoration",
            percentpos: "Pourcentage de rareté",
            sspercentpos: "Pourcentage de rareté",
            percentbadge: "Insigne de pourcentage",
            sspercentbadge: "Insigne de pourcentage",
            percentbadgepos: "Position de l'insigne",
            sspercentbadgepos: "Position de l'insigne",
            percentbadgecolor: "Couleur de l'insigne",
            sspercentbadgecolor: "Couleur de l'insigne",
            percentbadgefontcolor: "Couleur de la police de l'insigne",
            sspercentbadgefontcolor: "Couleur de la police de l'insigne",
            percentbadgefontsize: "Taille de l'insigne",
            sspercentbadgefontsize: "Taille de l'insigne",
            percentbadgeroundness: "Arrondi de l'insigne",
            sspercentbadgeroundness: "Arrondi de l'insigne",
            percentbadgex: "Décalage horizontal",
            sspercentbadgex: "Décalage horizontal",
            percentbadgey: "Décalage vertical",
            sspercentbadgey: "Décalage vertical",
            percentbadgeimg: "Utiliser une icône",
            sspercentbadgeimg: "Utiliser une icône",
            percentbadgeimgbronze: "Rareté : > 50%",
            sspercentbadgeimgbronze: "Rareté : > 50%",
            percentbadgeimgsilver: "Rareté : < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Rareté : < 50% & > $rarity%",
            percentbadgeimggold: "Rareté : < $rarity%",
            sspercentbadgeimggold: "Rareté : < $rarity%",
            resetpbimgs: "Réinitialiser les icônes de badge",
            elemsmatch: "Correspondre aux paramètres du personnalisateur",
            ssdisplay: "Aperçu de la capture d'écran"     
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Ajouter l'<span class="hl">AppID</span> d'un jeu pour changer automatiquement de <span class="hl">Thème</span> lorsqu'il est détecté`,
                `Tout <span class="hl">Thème</span> enregistré peut être sélectionné pour chaque type de notification, avec le moniteur souhaité utilisé comme <span class="hl">Source de capture d'écran</span>`,
                `<span class="hl" id="appidhelp"><u>Comment trouver l'AppID d'un jeu Steam ?</u></span>`
            ],
            themeswitchnew: "Nouveau Changement Automatique",
            themeswitchnewsub: [
                `Entrez l'<span class="hl">AppID</span> du jeu, ainsi que le moniteur souhaité utilisé comme <span class="hl">Source de capture d'écran</span>`,
                `Sélectionnez le <span class="hl">Thème</span> à utiliser pour chaque type de notification lorsque l'<span class="hl">AppID</span> de ce jeu est détecté`
            ],
            themes: "Thèmes",
            src: "Source de capture d'écran",
            themedeleted: "Thème supprimé"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Il semble que vous essayez d’activer l’option <span class="hl">${opt}</span>, mais cette option ne peut pas être activée sans avoir d’abord installé le paquet <code class="dialogcode">${dep}</code>`,
    `Veuillez exécuter <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> afin d’installer cette dépendance`
]