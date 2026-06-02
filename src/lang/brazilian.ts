export const translations = {
    global: {
        main: "Principal",
        semi: "Semi",
        rare: "Raro",
        plat: "100%",
        trophymain: "Bronze",
        trophysemi: "Prata",
        trophyrare: "Ouro",
        trophyplat: "Platina",
        test: "Testar Notificações",
        topleft: "Superior Esquerdo",
        topcenter: "Superior Central",
        topright: "Superior Direito",
        bottomleft: "Inferior Esquerdo",
        bottomcenter: "Inferior Central",
        bottomright: "Inferior Direito",
        ok: "OK",
        edit: "Editar",
        preview: "Visualização",
        save: "Salvar",
        back: "Voltar",
        lockedby: "Bloqueado por $lock",
        settings: "Configurações",
        appversion: "Versão do Aplicativo",
        image: "Imagem",
        audio: "Áudio",
        folder: "Pasta",
        font: "Fonte",
        select: "Selecionar",
        gametitle: "Título do Jogo",
        congrats: "Parabéns!",
        achievementunlocked: "Conquista desbloqueada",
        gamecomplete: "100% Concluído",
        achievementdesc: "Clicou no botão Mostrar Notificação de Teste",
        gamecompletedesc: "Você desbloqueou todas as conquistas!",
        defaultcustomfont: "Padrão (Nenhuma Fonte Selecionada)",
        defaultsoundfile: "Padrão (Nenhum Arquivo Selecionado)",
        defaultsounddir: "Padrão (Nenhuma Pasta Selecionada)",
        nowtracking: "Agora rastreando conquistas para:",
        nopreview: "Visualização não disponível para o sistema operacional nativo",
        options: "Opções",
        resetwindow: "Redefinir Janela",
        show: "Mostrar",
        exit: "Sair",
        donotshowagain: "Não mostrar esta caixa de diálogo novamente",
        releasegame: "Liberar Jogo",
        releasegamesub: [
            `Reinicie o processo do Worker em segundo plano e libere o jogo atual de ser rastreado`,
            `Tente esta opção se você fechou recentemente um jogo, mas o Steam ainda mostra que ele está rodando, ou se o Steam Achievement Notifier ainda mostra como rastreando um jogo que já foi fechado`
        ],
        noupdateavailable: "Nenhuma atualização disponível",
        latestversion: "Última versão instalada",
        missingdeps: "Dependência ausente",
        restartapp: "Reiniciar Aplicativo",
        restartappsub: [
            `Se as coisas não estiverem funcionando corretamente, use esta opção para fechar e reabrir o aplicativo`,
            `Se o problema persistir após reiniciar o aplicativo, considere relatá-lo usando os links no aplicativo na tela inicial`
        ],
        suspend: "Suspender",
        resume: "Retomar",
        new: "Novo...",
        nodata: "Sem Dados",
        findappid: "Encontrar AppID",
        findappidsub: [
            `Cada jogo do Steam possui um número único associado a ele - chamado de <span class="hl">AppID</span>. Você pode encontrar o AppID associado a qualquer jogo do Steam verificando um dos seguintes:`,
            `No <span class="hl">cliente Steam</span>, clique com o botão direito do mouse em um jogo em sua <span class="hl">Biblioteca</span> e selecione <i>Propriedades</i> > <i>Atualizações</i> - o AppID será listado aqui`,
            `A <span class="hl">URL</span> da página da <span class="hl">loja</span> do jogo - será o número listado após <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites como <span class="hl">SteamDB</span> - a seção <span class="hl">Informações do App</span> listará o AppID para cada jogo`
        ],
        noexe: "Arquivo EXE do jogo não encontrado!",
        noexesub: "Clique aqui para mais informações",
        noexedialogsub: [
            `O Steam Achievement Notifier não conseguiu localizar automaticamente o arquivo executável deste jogo. A localização do arquivo executável do jogo é necessária para "liberar" o jogo após ele ser fechado`,
            `Para liberar o jogo manualmente após fechá-lo, <i>clique com o botão direito</i> no <span class="hl">ícone da System Tray</span> > <span class="hl">Opções</span> > <span class="hl">Liberar Jogo</span>, ou use o <span class="hl">Atalho de Liberar Jogo</span>`,
            `Alternativamente, clique no botão <span class="hl">Adicionar</span> abaixo para adicionar o arquivo executável associado a qualquer janela em foco em <span class="hl">Configurações</span> > <span class="hl">Jogos</span> > <span class="hl">Liberação Automática de Jogos</span>`,
        ],
        autorelease: "Liberação Automática de Jogo",
        autoreleasesub: [
            `Se o Steam ainda mostrar um jogo como <i>Jogando</i> após a janela do jogo ser fechada, tente adicionar uma nova entrada em <span class="hl">Liberação Automática de Jogos</span>`,
            `Para fazer isso para o jogo atual, clique no botão <span class="hl">Adicionar</span> abaixo para adicionar o arquivo executável associado a qualquer janela em foco em <span class="hl">Configurações</span> > <span class="hl">Jogos</span> > <span class="hl">Liberação Automática de Jogos</span>`,
        ],
        linkgamehelplink: `<span class="hl help" id="linkgamehelp"><u>O que acontece quando clico no botão Adicionar?</u></span>`,
        linkgamehelp: "Adicionar Entrada via Foco",
        linkgamehelpsub: [
            `Clicar no botão <span class="hl">Adicionar</span> adicionará automaticamente uma nova entrada em <span class="hl">Configurações</span> > <span class="hl">Jogos</span> > <span class="hl">Liberação Automática de Jogos</span>, usando informações da janela atualmente em foco.`,
            `Após clicar no botão <span class="hl">Adicionar</span>, um temporizador de 5 segundos será iniciado`,
            `Antes que o temporizador termine, coloque o foco na janela do jogo`,
            `Quando o temporizador terminar, uma nova entrada para o <span class="hl">AppID</span> atual será adicionada em <span class="hl">Configurações</span> > <span class="hl">Jogos</span> > <span class="hl">Liberação Automática de Jogos</span>, usando o arquivo executável associado à janela em foco`,
            `Novas tentativas substituirão entradas existentes, ou a entrada pode ser removida via <span class="hl">Configurações</span> > <span class="hl">Jogos</span> > <span class="hl">Liberação Automática de Jogos</span> clicando no botão <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Não foi possível adicionar a janela",
        addlinkfailedsub: `Clique no botão <span class="hl">Adicionar</span> para tentar novamente`,
        webhookunlockmsg: "$user desbloqueou uma conquista",
        webhookunlockmsgplat: "$user desbloqueou todas as conquistas",
        webhookingame: "em $gamename",
        notconnected: "Não conectado",
        raloghelp: "Meu jogo não está sendo detectado",
        raenablelog: `Arquivos de log do emulador`,
        raenablelogsub: [
            `Para acessar eventos internos do jogo (como status atual do jogo, informações de desbloqueio de conquistas, etc.), o registro em um <span class="hl">arquivo de log</span> externo <u>deve estar ativado</u> em qualquer emulador selecionado.<br><br>Qualquer emulador selecionado <u>deve usar este <span class="hl">arquivo de log</span></u> como o valor de <span class="hl">Caminho do Arquivo de Log</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    O <span class="hl">RetroArch > Configurações > Registro</span> deve ser configurado com as seguintes opções:
                    <br>
                    <ul>
                        <li><span class="hllb">Detalhamento do Registro</span>: <span class="hlgreen">LIGADO</span></li>
                        <li><span class="hllb">Nível de Registro da Interface</span>: <span class="hlgreen">1 (Informação)</span></li>
                        <li><span class="hllb">Registrar em Arquivo</span>: <span class="hlgreen">LIGADO</span></li>
                        <li><span class="hllb">Arquivos de Log com Carimbo de Data/Hora</span>: <span class="hlred">DESLIGADO</span></li>
                    </ul>
                    <br>
                    Com as configurações padrão de instalação, o <span class="hl">"retroarch.log"</span> é armazenado em:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    O <span class="hl">Dolphin > Exibir > Mostrar Configuração de Log</span> deve ser configurado com as seguintes opções:
                    <br>
                    <ul>
                        <li><span class="hllb">Detalhamento</span>: <span class="hlgreen">Informação</span></li>
                        <li><span class="hllb">Saídas do Registro</span> > <span class="hlgreen">Escrever em Arquivo</span></li>
                        <li><span class="hllb">Tipos de Registro</span> > <span class="hlgreen">Conquistas (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Com as configurações padrão de instalação, o <span class="hl">"dolphin.log"</span> é armazenado em um dos seguintes locais:
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
                    <span class="hl">PCSX2 > Ferramentas > Ativar Registro de Arquivo</span> deve estar ativado
                    <br>
                    <br>
                    Usando as configurações padrão de instalação, o arquivo <span class="hl">"emulog.txt"</span> é salvo em:
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
                        <li>❗ <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> deve ser <span class="hl help" url="https://retroachievements.org/bin/RA_Integration-x64.dll"><u>baixado</u></span> e movido para o <span class="hl">diretório de instalação do Duckstation</span></li>
                    </ul>
                    <br>
                    <span class="hl">Duckstation > Configurações > Conquistas > RAIntegration (Somente para Desenvolvedores)</span> deve estar ativado
                    <br>
                    <br>
                    Usando as configurações padrão de instalação, <span class="hl">"RALog.txt"</span> é armazenado em:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">PPSSPP</summary>
                <div>
                    <span class="hl">PPSSPP > Settings > Developer Tools > General > Log to File</span> deve estar ativado e configurado com as seguintes definições:
                    <br>
                    <ul>
                        <li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></li>
                    </ul>
                    <br>
                    Usando as configurações de instalação padrão, o arquivo <span class="hl">"log.txt"</span> é armazenado em:
                    <br>
                    <ul>
                        <li><span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta não suportado",
        betaunsupportedsub: [
            "Uma nova versão do Steam Achievement Notifier foi lançada!",
            `<u>Esta versão Beta não é mais suportada</u>. Por favor, baixe e instale a versão oficial mais recente pelo Github usando o botão <span class="hl">Lançamentos</span> abaixo.`,
            "Obrigado por testar! 💜"
        ],
        betaghreleases: "Lançamentos",
        checkapplog: "Por favor, verifique o Registro do App para mais detalhes."
    },
    app: {
        content: {
            game: "Nenhum Jogo Detectado",
            customise: "Personalizar",
            test: "Mostrar Notificação de Teste"
        }
    },
    settings: {
        language: {
            title: "Idioma",
            content: {
                steamlang: "Traduzir Conquistas para o Idioma do Steam",
                maxsteamlangretries: "Máximo de Tentativas de Tradução"
            }
        },
        os: {
            title: "SO",
            content: {
                desktop: "Criar Atalho na Área de Trabalho",
                startwin: "Iniciar na Inicialização",
                startmin: "Iniciar Minimizado",
                nohwa: "Desativar Aceleração de Hardware",
                litemode: "Modo Lite"
            }
        },
        notifications: {
            title: "Notificações",
            content: {
                rarity: "Porcentagem de Raridade",
                semirarity: "Porcentagem de Prata",
                rareonly: "Somente Raros",
                all: "Tudo",
                off: "Desativado",
                showpercent: "Mostrar Porcentagem",
                soundonly: "Modo Somente Som",
                nowtracking: "Mostrar Notificação de Rastreamento",
                nowtrackingscale: "Escala de Rastreamento",
                nowtrackingpos: "Rastreamento de Posição",
                shortcuts: "Atalhos de Notificação",
                noiconcache: "Desativar o Cache de Ícones",
                webhooks: "Postar no Servidor Discord",
                webhooktypes: "Tipos de Webhook",
                webhookurl: `URL do Webhook`,
                webhookcaution: `Ao habilitar esta opção e fornecer um link de Webhook do Discord válido, você concorda que entende que <u>todas as informações de conquistas e jogos para o usuário atual do Steam</u> serão postadas no servidor Discord especificado através do link de Webhook fornecido.<br><br>Se você não deseja que o Steam Achievement Notifier poste essas informações em seu nome, desative esta opção.`,
                webhooklaststatus: "Último Status",
                webhookspoilers: `Adicionar Tag de Spoiler`,
                webhookappid: `Mostrar AppID`,
                replaynotify: "Notificação de Repetição",
                replaynotifyshortcut: "Atalho de Repetição",
                customtrigger: "Gatilho Personalizado",
                customtriggershortcut: "Atalho do Gatilho",
                customtriggerdelay: "Atraso do Gatilho",
                customtriggerusedisplaytime: "Usar Tempo de Exibição",
                trophymode: "Modo Troféu",
                notifymax: "Máximo de Notificações", 
                notifyspace: "Espaçamento das Notificações",
                notify1line: "Limitar texto a 1 linha"
            }
        },
        games: {
            title: "Jogos",
            content: {
                linkedgames: "Liberação Automática de Jogos",
                themeswitch: "Trocar Temas Automaticamente",
                exclusionlist: "Lista de Exclusão",
                inclusionlist: "Lista de Inclusão",
                listmode: "Modo de Lista",
                exclusion: "Exclusão",
                inclusion: "Inclusão"
            }
        },
        media: {
            title: "Mídia",
            content: {
                steamss: "Tirar Captura de Tela do Steam",
                screenshots: "Mídia Adicional",
                off: "Desativado",
                ssonly: "Apenas Captura de Tela",
                overlay: "Captura de Tela com Sobreposição de Notificação",
                monitors: "Fonte da Captura de Tela",
                hdrmode: "Modo HDR",
                ovpos: "Posição da Sobreposição",
                ovmatch: "Corresponder Posição Personalizada",
                ovx: "Deslocamento Horizontal",
                ovy: "Deslocamento Vertical",
                ovpath: "Caminho da Captura de Tela",
                ssdelay: "Atraso da Captura de Tela",
                notifyimg: "Imagem de Notificação",
                imgpath: "Caminho da Imagem",
                ssenabled: "Ativar",
                ssmode: "Modo Captura de Tela",
                screen: "Tela",
                window: "Janela",
                rauseemudir: "Salvar em subpasta do emulador",
                ssext: "Formato da captura de tela",
                png: "PNG",
                jpg: "JPG",
                ssaddtosteam: "Adicionar ao Steam"
            }
        },
        streaming: {
            title: "Transmissão",
            content: {
                extwin: "Notificações de Transmissão",
                extwinframerate: "Taxa de Quadros",
                extwinshow: "Mostrar Janela",
                audiosrc: "Fonte de Áudio",
                notify: "Notificação",
                app: "Aplicativo",
                off: "Silenciado",
                statwin: "Janela de Estatísticas de Conquistas",
                statwinaot: "Sempre no Topo",
                noachievements: "Nenhuma conquista para exibir",
                startgame: "Inicie um jogo para mostrar conquistas!",
                max: "Máximo",
                custom: "Personalizado...",
                statwinshortcut: "Atalho do Sobrepor",
                gametimerwin: "Temporizador de Conclusão do Jogo",
                gametimerwinshortcut: "Atalho do Temporizador",
                gametimerwinaot: "Sempre no Topo",
                resetgametimer: "Redefinir Temporizador",
                resetgametimersub: `
                    <div class="wrapper resetsub">
                        <span>Tem certeza?</span>
                        <span>Isso redefinirá o Temporizador de Conclusão do Jogo do jogo atual de volta para 00:00:00.000.</span>
                        <span class="noundo">🛑 Isso não pode ser desfeito!</span>
                    </div>
                `,
                resetgametimerfailed: "Não foi possível redefinir o temporizador.",
                resetgametimercomplete: "O AppID $appid já foi concluído.",
                extwinnotify: "Mostrar Notificação na Tela"
            }
        },
        accessibility: {
            title: "Acessibilidade",
            content: {
                noanim: "Desativar Animações da Janela do Aplicativo",
                noupdatedialog: "Desativar Diálogo de Atualização",
                nvda: "Ativar Suporte NVDA",
                tooltips: "Mostrar Dicas de Ferramentas",
                showsystrayopts: "Mostrar Opções da Bandeja do Sistema",
                releaseshortcut: "Atalho para Liberar Jogo",
                noshortcuts: "Desativar Atalhos de Teclado"
            }
        },
        advanced: {
            title: "Avançado",
            content: {
                pollrate: "Taxa de Pesquisa",
                initdelay: "Atraso de Rastreamento",
                releasedelay: "Atraso no Lançamento",
                maxretries: "Tentativas Máximas de Processamento",
                debug: "Painel de Depuração",
                userust: "Modo de Processamento Alternativo",
                notifydebug: "Mostrar Notificação do Depurador",
                exportachdata: "Exportar Dados de Conquistas",
                lognum: "Arquivos de Log Anteriores", 
                audiocooldown: "Intervalo de Áudio",
                usecustomfiles: "Usar Arquivos de Aplicativo Personalizados",
                showcustomfiles: "Mostrar Arquivos de Aplicativo Personalizados",
                appdatadir: "Mostrar pasta AppData",
                backup: "Backup",
                backuppath: "Caminho do Backup",
                backupsub: [
                    "Faça backup do conteúdo da pasta AppData do app para um local escolhido",
                    "Este backup servirá como ponto de restauração para o estado atual do app",
                    `Restaure qualquer backup anterior através de <span class="hl">Configurações</span> > <span class="hl">Avançado</span> > <span class="hl">Restaurar</span>`
                ],
                backupfailed: "Não foi possível criar o backup.",
                restore: "Restaurar",
                restoresub: [
                    "Restaure o conteúdo da pasta AppData do app a partir de um backup anterior",
                    `Selecione um arquivo de backup <span class="hl">.sanbak</span> para restaurar. Este arquivo será preservado após a restauração ser concluída`,
                    "❗ Uma vez confirmado, o app será reiniciado para restaurar o arquivo de backup selecionado"
                ],
                restorefailed: "Não foi possível restaurar o backup.",
                usesanwatcher: "SANWatcher",
                releasewaittime: "Tempo de Espera para Liberação"
            }
        },
        ra: {
            title: "Retro Achievements",
            content: {
                raemus: "Emuladores",
                rauser: "Nome de usuário",
                rakey: "Chave da API",
                retroarch: "RetroArch",
                dolphin: "Dolphin",
                pcsx2: "PCSX2 [Nightly]",
                duckstation: "Duckstation",
                ppsspp: "PPSSPP",
                installdir: "Caminho do Arquivo de Log",
                rapercenttype: "Tipo de porcentagem",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Insira o caminho do arquivo de log",
                logfile: "Arquivo de Log",
                status: "Status",
                game: "Jogo",
                lastachievement: "ID da Última Conquista",
                wait: "Aguardando pelo emulador",
                idle: "Aguardando pelo evento do jogo",
                start: "Iniciando o jogo",
                stop: "Parando o jogo",
                achievement: "Conquista desbloqueada"
            }
        },
        misc: {
            title: "Diversos",
            content: {
                colorprofile: "Perfil de Cores",
                checkforupdates: "Verificar Atualizações",
                log: "Registro do Aplicativo",
                reset: "Redefinir Aplicativo"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Predefinição",
            content: {
                preset: "Predefinição de Notificação",
                iconanim: "Animação de Ícone Raro",
                alldetails: "Mostrar Todos os Detalhes",
                usepercent: "Usar Porcentagem",
                displaytime: "Tempo de Exibição",
                scale: "Escala",
                customtext: "Texto Personalizado",
                usegametitle: "Usar Título do Jogo",
                customfont: "Fonte Personalizada"
            }
        },
        sound: {
            title: "Som",
            content: {
                soundmode: "Modo de Som",
                file: "Arquivo",
                folder: "Aleatório",
                soundfile: "Arquivo de Som",
                sounddir: "Pasta de Som",
                volume: "Volume"
            }
        },
        style: {
            title: "Estilo",
            content: {
                bgstyle: "Estilo de Fundo",
                solid: "Sólido",
                gradient: "Gradiente",
                img: "Imagem",
                gameart: "Arte do Jogo",
                gradientangle: "Ângulo do Gradiente",
                bgimg: "Imagem de Fundo",
                bgachicon: "Usar Ícone de Conquista",
                bgimgbrightness: "Luminosidade",
                brightness: "Luminosidade",
                blur: "Desfoque",
                roundness: "Arredondamento",
                fontsize: "Tamanho da Fonte",
                usecustomfontsizes: "Usar Tamanhos de Fonte Personalizados",
                unlockmsgfontsize: "Mensagem de Desbloqueio",
                titlefontsize: "Título",
                descfontsize: "Descrição",
                textvspace: "Espaçamento do Texto",
                opacity: "Opacidade",
                bgonly: "Apenas Fundo",
                glow: "Brilho",
                glowcolor: "Cor",
                glowsize: "Tamanho",
                glowx: "Deslocamento Horizontal",
                glowy: "Deslocamento Vertical",
                glowopacity: "Opacidade",
                glowanim: "Animação",
                glowspeed: "Velocidade",
                glowrarity: "Usar Raridade",
                glowcolorbronze: "Raridade: > $semirarity",
                glowcolorsilver: "Raridade: < $semirarity & > $rarity",
                glowcolorgold: "Raridade: < $rarity",
                off: "Nenhum",
                pulse: "Pulso",
                double: "Duplo",
                focus: "Foco",
                orbit: "Órbita",
                fluorescent: "Fluorescente",
                rainbow: "Arco-íris",
                mask: "Máscara",
                maskimg: "Imagem da Máscara",
                useoutline: "Contorno",
                outline: "Tipo de Contorno",
                outlinecolor: "Cor do Contorno",
                outlinewidth: "Largura do Contorno",
                dashed: "Tracejado",
                dotted: "Pontilhado"
            }
        },
        colors: {
            title: "Cores",
            content: {
                primarycolor: "Cor Primária",
                secondarycolor: "Cor Secundária",
                tertiarycolor: "Cor Terciária",
                iconshadowcolor: "Cor da Sombra do Ícone Raro",
                iconanimcolor: "Cor da Animação do Ícone Raro",
                fontcolor: "Cor da Fonte",
                usecustomfontcolors: "Usar Cores Personalizadas para as Fontes",
                unlockmsgfontcolor: "Cor 1",
                titlefontcolor: "Cor 2",
                descfontcolor: "Cor 3",
                fontoutline: "Contorno da Fonte",
                fontoutlinecolor: "Cor do Contorno da Fonte",
                fontoutlinescale: "Escala do Contorno da Fonte",
                fontshadow: "Sombra da Fonte",
                fontshadowcolor: "Cor da Sombra da Fonte",
                fontshadowscale: "Escala da Sombra da Fonte",
                fontshadowx: "Deslocamento Horizontal",
                fontshadowy: "Deslocamento Vertical"
            }
        },
        icons: {
            title: "Ícones",
            content: {
                iconscale: "Escala do Ícone",
                iconroundness: "Arredondamento do Ícone",
                showiconborder: "Mostrar Borda do Ícone",
                iconborderimg: "Borda do Ícone",
                iconborderpos: "Posição da Borda",
                iconborderscale: "Escala da Borda",
                iconborderx: "Deslocamento Horizontal",
                iconbordery: "Deslocamento Vertical",
                iconborderrarity: "Usar Raridade",
                iconborderimgbronze: "Raridade: > $semirarity",
                iconborderimgsilver: "Raridade: < $semirarity & > $rarity",
                front: "Frente",
                back: "Trás",
                plat: "Logotipo 100%",
                usegameicon: "Usar Ícone do Jogo",
                gameicontype: "Tipo de Ícone do Jogo",
                usecustomimgicon: "Usar Ícone Personalizado",
                customimgicon: "Ícone Personalizado",
                icon: "Ícone",
                logoscale: "Escala do Logo",
                logo: "Logotipo",
                decoration: "Decoração",
                decorationscale: "Escala da Decoração",
                showdecoration: "Mostrar Decoração",
                rarity: "Raridade",
                showhiddenicon: "Mostrar Ícone Oculto",
                hiddenicon: "Ícone Oculto",
                replacelogo: "Substituir Logo"
            }
        },
        position: {
            title: "Posição",
            content: {
                pos: "Posição na Tela",
                usecustompos: "Usar Posição Personalizada",
                setcustompos: "Definir",
                copycustompos: "Aplicar a Todos",
                resetcustompos: "Redefinir"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Atualizar Tema",
                savetheme: "Salvar Tema",
                sub: [
                    `Os <span class="hl">Temas do Usuário</span> salvos podem ser selecionados no menu <span class="hl">Selecionar Tema</span> na tela inicial.`,
                    `Certifique-se de que o <span class="hl">Nome do Tema</span> seja <u>único</u> - um nome correspondente a um tema existente <u>irá sobrescrever o anterior</u>!`
                ],
                placeholder: "Nome do Tema",
                theme: "Tema",
                importtheme: "Importar Tema",
                import: "Importar",
                importsub: [
                    `Importar um <span class="hl">arquivo de Tema</span> criado pelo usuário`,
                    `<span class="hl">Temas Importados</span> serão carregados automaticamente após serem importados com sucesso, e podem ser selecionados no menu <span class="hl">Selecionar Tema</span>`,
                ],
                importidle: `Selecione um <span class="hl">arquivo de Tema</span> para importar`,
                importcopied: `Tema copiado com sucesso`,
                importrenamed: `Tema renomeado com sucesso`,
                importextracted: `Tema extraído com sucesso`,
                importrewriting: `Reescrevendo caminhos dos arquivos de Tema...`,
                importconverting: `Convertendo Tema...`,
                importcreating: `Criando Tema...`,
                importdone: `Tema importado com sucesso`,
                importfailed: `Erro ao importar o arquivo de Tema selecionado!`,
                exporttheme: "Exportar Tema",
                export: "Exportar",
                exporterrortitle: "Erro de Exportação",
                exporterrorsub: [
                    "Ocorreu um erro ao tentar exportar o Tema selecionado",
                    `Tente salvar o Tema atual (<i>via <span class="hl">Salvar Tema</span></i>) e tente exportar novamente`,
                    `Se o problema persistir, copie o erro abaixo e reporte via os botões de link na <span class="hl">Tela Inicial</span>`
                ],
                synctheme: "Sincronizar Tema",
                syncedwith: "Sincronizado com",
                themeselect: "Tema Selecionado",
                copytheme: "Copiar tema",
                copythemesub: "Selecione o(s) tipo(s) de notificação para copiar o tema selecionado"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Aqui está o que aconteceu desde que o aplicativo foi iniciado em",
            copylog: "Copiar Conteúdo do Registro"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Você tem certeza?</span>
                    <span>Todos os dados previamente configurados, <u>incluindo Personalizações</u>, serão redefinidos para o padrão.</span>
                    <span>🛑 Isso não pode ser desfeito!</span>
                </div>
            `,
            reset: "Redefinir"
        }
    },
    error: {
        content: {
            subtitle: "O Steam Achievement Notifier encontrou um problema e precisa ser fechado.",
            details: "Aqui estão os detalhes do erro:",
            sub: "Clique nos botões abaixo para relatar este problema através da sua plataforma preferida.",
            report: "Relatar",
            log: "Registro do Aplicativo",
            exit: "Sair"
        }
    },    
    tooltips: {
        game: "O jogo para o qual as conquistas estão sendo rastreadas",
        usertheme: "Selecione um Tema previamente salvo",
        customise: "Personalizar Notificações de Conquistas",
        test: "Mostrar uma Notificação de Teste, incluindo quaisquer personalizações",
        kofi: "Doe no Ko-Fi!",
        discord: "Junte-se ao Discord!",
        github: "Reportar um problema",
        lang: "Selecionar o idioma da interface do usuário usado no aplicativo",
        steamlang: `Tentar carregar traduções localizadas nos arquivos de aplicação do Steam para exibir informações de conquistas no idioma escolhido pelo usuário no cliente Steam<br><br><span class="ttdesc">Essa opção tenta localizar traduções em um arquivo JSON armazenado nos dados da aplicação do Steam. Se uma tradução para a conquista atual não puder ser localizada, as informações da conquista recuperadas do Steamworks serão exibidas em seu lugar.</span>`,
        maxsteamlangretries: `O número de vezes (a cada 100ms) que tentativas de localizar traduções válidas para a conquista atual serão realizadas<br><br><span class="ttdesc">Atualmente, o Steam armazena apenas uma pequena quantidade de dados de conquistas dentro do arquivo JSON associado a cada jogo. Qualquer conquista que não estiver presente nesse arquivo será adicionada após a conquista ser desbloqueada.<br><br>Como a adição de novos dados pode levar tempo, aumentar este valor aumentará a probabilidade de que os dados de tradução para a conquista atual sejam encontrados, mas também pode atrasar a exibição da notificação na tela pelo tempo calculado por esta configuração.<br><br>Se não for possível localizar dados de tradução válidos para a conquista atual, as traduções voltarão ao idioma especificado no Steamworks.</span>`,
        desktop: "Alternar um atalho na área de trabalho para executar o aplicativo",
        startwin: "Iniciar o Steam Achievement Notifier automaticamente após fazer login",
        startmin: "Após o lançamento, ocultar a janela da interface do aplicativo até ser aberta pela Bandeja do Sistema",
        nohwa: `Desativar Aceleração de Hardware, o que pode melhorar o desempenho em sistemas com recursos limitados ou sistemas sem uma GPU dedicada<br><br><span class="ttdesc">O aplicativo será reiniciado após ativar/desativar esta opção</span>`,
        litemode: "Desativar todos os elementos interativos da interface do aplicativo, fornecendo apenas funcionalidade limitada por meio do ícone da Bandeja do Sistema. Pode melhorar os recursos consumidos pelo aplicativo",
        rarity: `A porcentagem na qual notificações de conquistas Raras serão exibidas.<br><br>Qualquer conquista com uma porcentagem de desbloqueio acima deste valor será exibida como uma notificação Principal<br><br><span class="ttdesc">Se o <span class="hl">Modo Troféu</span> estiver ativado, qualquer conquista com uma porcentagem de desbloqueio acima deste valor será exibida como uma notificação Prata em vez disso</span>`,
        semirarity: `A porcentagem na qual os elementos de notificação "Prata" serão exibidos (ex.: <span class="hl">Distintivos de Raridade</span>, <span class="hl">Decorações</span>, etc.).<br><br>Qualquer conquista com uma porcentagem de desbloqueio abaixo (ou igual) a este valor, e acima do valor de <span class="hl">Porcentagem de Raridade</span>, exibirá elementos de notificação configurados para raridades "Prata".<br><br>Qualquer conquista com uma porcentagem de desbloqueio acima deste valor exibirá elementos de notificação configurados para raridades "Bronze"<br><br><span class="ttdesc">Se o <span class="hl">Modo Troféu</span> estiver ativado, qualquer conquista com uma porcentagem de desbloqueio acima deste valor será exibida como uma notificação Bronze em vez disso</span>`,
        showpercent: "Exibir a porcentagem de desbloqueio da conquista na notificação para o(s) tipo(s) selecionado(s)",
        soundonly: "Desativar notificações, reproduzindo apenas sons definidos pelo Personalizador",
        extwin: "Crie uma janela que duplica quaisquer notificações exibidas atualmente na tela. Esta janela pode então ser adicionada como uma fonte de Captura de Janela para uso em softwares de transmissão, como o OBS",
        extwinframerate: "Definir a taxa de quadros alvo para Notificações de Transmissão",
        extwinshow: `Alternar a visibilidade da janela de Notificações de Transmissão<br><br><span class="ttdesc">Quando focado na barra de tarefas, pressione e segure a tecla <code class="ttcode">Ctrl</code> para exibir a localização atual da janela</span>`,
        audiosrc: "Selecionar a origem (ou desativar) o áudio gerado pelo aplicativo",
        nowtracking: "Exibir uma notificação informando ao usuário que as conquistas de um jogo em execução estão sendo rastreadas",
        nowtrackingscale: `Defina o tamanho da notificação de rastreamento`,
        nowtrackingpos: `Defina a posição da notificação de rastreamento`,
        shortcuts: "Acionar uma Notificação de Teste por meio de um atalho de teclado. Os atalhos podem ser personalizados para cada tipo de notificação",
        noiconcache: `Desativa o cache de ícones de conquistas ao iniciar os jogos.<br><br><span class="ttdesc">Isso pode melhorar bastante o desempenho do aplicativo ao iniciar os jogos e também pode resolver problemas de rastreamento com jogos que têm um grande número de conquistas. No entanto, em casos raros, desativar o cache de ícones pode resultar na ausência de ícones de conquistas nas notificações</span>`,
        steamss: "Tirar uma captura de tela do Steam quando uma conquista for desbloqueada",
        screenshots: "Selecionar o tipo de Mídia Adicional a ser criada quando uma notificação for exibida",
        monitors: "O monitor que será capturado ao tirar a captura de tela",
        hdrmode: `Capturar capturas de tela usando um método compatível com monitores que utilizam Alto Alcance Dinâmico (HDR)`,
        ovpos: "A posição da sobreposição de notificação na captura de tela",
        ovmatch: "Corresponder à Posição da Tela definida no Personalizador para este tipo de notificação",
        ovpath: "O local onde as capturas de tela geradas por esta opção serão salvas",
        ssdelay: "Adicionar um atraso desde quando a notificação ocorre até quando a captura de tela é tirada",
        sspreview: "Mostrar uma prévia de como a captura de tela será exibida ao ser salva",
        noanim: "Desativar todas as animações de janela no aplicativo e efeitos de transição",
        noupdatedialog: `Impedir que a caixa de diálogo <span class="hl">Atualização Disponível</span> apareça e foque automaticamente<br><br><span class="ttdesc">A caixa de diálogo ainda pode ser acessada clicando no botão de atualização quando disponível</span>`,
        nvda: "Habilitar a cópia de informações de conquista para a área de transferência quando uma conquista for desbloqueada, para ser lida por software de leitor de tela, como o NVDA",
        tooltips: "Exibir dicas de ferramentas ao passar o mouse sobre determinados elementos da interface do usuário",
        colorprofile: `Forçar todas as janelas do aplicativo a renderizarem usando o perfil de cores selecionado<br><br><span class="ttdesc">Requer reinício do aplicativo</span>`,
        pollrate: `Defina o intervalo de atualização para os dados de conquistas durante o jogo<br><br><span class="ttdesc">O desempenho pode aumentar/diminuir dependendo do valor ou dos recursos do sistema. Valores mais altos geralmente resultam em carga de sistema mais baixa, mas podem causar atrasos nas notificações</span>`,
        initdelay: `Defina o atraso entre a detecção do <span class="hl">AppID</span> atual e o início do rastreamento de processos/conquistas<br><br><span class="ttdesc">Aumentar este valor pode evitar cenários em que o Steam não consegue iniciar o jogo atual (devido à inicialização do aplicativo no Steamworks antes de o jogo ser iniciado)</span><br><br><span class="ttdesc">Alternativamente, aumentar este valor também pode ser usado para evitar a detecção incorreta de processos de inicialização antes do jogo</span>`,
        releasedelay: `Defina por quanto tempo o processo Worker em segundo plano aguarda para reiniciar após o jogo atual ser liberado. Afeta tanto o rastreamento automático de processos quanto a Liberação Automática de Jogos<br><br><span class="ttdesc">Permite um intervalo maior para que o Steamworks seja totalmente liberado do aplicativo. Aumentar esse valor pode evitar comportamentos incomuns, como rastrear um jogo fechado anteriormente</span>`,
        maxretries: `Defina o número máximo de tentativas para vincular um processo em execução a um AppID detectado. Afeta tanto o rastreamento automático de processos quanto a Liberação Automática de Jogos<br><br><span class="ttdesc">As tentativas são feitas uma vez por segundo. Se um processo em execução não for vinculado ao AppID atual após esse número de tentativas, um processo inválido será retornado. Nesses casos, o jogo precisará ser liberado manualmente via System Tray > Opções > Liberar Jogo</span>`,
        debug: "Abra o Painel de Depuração, que exibe informações detalhadas de rastreamento de processos",
        userust: "Use uma função alternativa baseada em Rust para verificar se os processos de jogo rastreados estão atualmente em execução no sistema. Quando desmarcado, o processo de verificação padrão baseado em NodeJS será usado em vez disso.",
        notifydebug: "Criar uma janela DevTools para todas as notificações. Útil para depurar/solucionar problemas de notificação",
        usecustomfiles: "Permite que as notificações carreguem arquivos personalizáveis pelo usuário. É recomendada cautela para usuários regulares",
        showcustomfiles: "Abrir o local dos arquivos personalizados",
        log: "Abrir a janela de Log do Aplicativo, que exibe informações sobre a atividade do processo, avisos e erros",
        reset: "Remover todos os dados de configuração e reiniciar o aplicativo",
        playback: "Pausar/retomar a animação da prévia da notificação",
        replay: "Reiniciar a animação da prévia da notificação",
        preset: "Selecionar o modelo de notificação para personalizar",
        iconanim: "Alternar a borda e animação do ícone de conquista rara",
        alldetails: "Exibir todos os elementos de texto dentro da notificação, incluindo aqueles ocultos por padrão para este modelo",
        usepercent: "Exibir a porcentagem de desbloqueio da conquista, em vez do valor XP/S",
        displaytime: "Definir o número de segundos que a notificação será exibida",
        scale: "Aumentar ou diminuir o tamanho da notificação",
        customtext: "Definir uma mensagem personalizada a ser exibida na notificação",
        usegametitle: "Mostrar o título do jogo atual na notificação",
        customfont: "Carregar uma fonte personalizada a ser usada na notificação",
        soundmode: "Selecionar um único arquivo de áudio ou um arquivo de áudio selecionado aleatoriamente de uma pasta contendo vários arquivos de áudio, quando ocorrer uma notificação",
        soundfile: "Selecionar um arquivo de áudio para reproduzir quando ocorrer uma notificação",
        sounddir: "Selecionar uma pasta da qual um arquivo de áudio será selecionado aleatoriamente quando ocorrer uma notificação",
        volume: "Definir o volume de reprodução do arquivo de áudio",
        preview: "Visualizar o arquivo de áudio selecionado ou um arquivo de áudio selecionado aleatoriamente da pasta",
        bgstyle: "Selecionar o estilo para o plano de fundo da notificação",
        gradientangle: "Definir o ângulo do gradiente",
        bgimg: "Carregar um arquivo de imagem para ser usado como plano de fundo da notificação",
        bgachicon: "Usar o ícone da conquista desbloqueada como o fundo da notificação",
        bgimgbrightness: "Define o brilho da imagem usada como plano de fundo da notificação",
        brightness: "Definir o brilho da arte do jogo usada como plano de fundo da notificação",
        blur: "Defina o nível de desfoque aplicado ao fundo do aviso",
        roundness: "Definir a arredondamento das bordas da notificação",
        fontsize: "Definir o tamanho da fonte usada na notificação",
        opacity: "Definir a opacidade geral da notificação",
        bgonly: "Definir apenas a opacidade para o plano de fundo da notificação, mantendo os outros elementos com opacidade total",
        glow: "Ativar um efeito de brilho que envolve o aviso",
        glowcolor: "Defina a cor do efeito de brilho",
        glowsize: "Defina o tamanho do efeito de brilho",
        glowx: "Desloque a posição do efeito de brilho horizontalmente",
        glowy: "Desloque a posição do efeito de brilho verticalmente",
        glowopacity: "Defina a opacidade do efeito de brilho",
        glowanim: "Selecione uma animação predefinida para ser aplicada ao efeito de brilho",
        glowspeed: "Defina a velocidade da animação aplicada ao efeito de brilho",
        glowrarity: "Alterar a cor do efeito de brilho com base na raridade da conquista desbloqueada",
        glowcolorbronze: "A cor de brilho exibida quando a porcentagem de desbloqueio for > $semirarity",
        glowcolorsilver: "A cor de brilho exibida quando a porcentagem de desbloqueio for < $semirarity e > $rarity",
        glowcolorgold: "A cor do brilho exibida quando a porcentagem de desbloqueio for < $rarity",
        mask: "Ativar a máscara de partes do aviso com uma imagem personalizada",
        maskimg: `Carregar um arquivo de imagem para ser usado como máscara<br><br><span class="ttdesc">No CSS, <code class="ttcode">mask-mode: alpha</code> opera de forma oposta ao que é geralmente esperado - áreas de transparência no arquivo de imagem serão obscurecidas, e áreas pretas/cinzentas permitirão que os elementos abaixo sejam visíveis</span>`,
        useoutline: "Exibir um contorno ao redor da notificação",
        outline: "Selecione o tipo de contorno a ser mostrado ao redor da notificação",
        outlinecolor: "Defina a cor do contorno ao redor da notificação",
        outlinewidth: "Defina a largura do contorno ao redor da notificação",
        primarycolor: "Definir a cor primária da notificação",
        secondarycolor: "Definir a cor secundária da notificação",
        tertiarycolor: "Definir a cor terciária da notificação",
        fontcolor: "Definir a cor do texto exibido na notificação",
        fontoutline: "Adicionar um contorno a todo o texto exibido na notificação",
        fontoutlinecolor: "Definir a cor do contorno do texto",
        fontoutlinescale: "Definir a espessura do contorno do texto",
        fontshadow: "Adicionar uma sombra a todo o texto exibido na notificação",
        fontshadowcolor: "Definir a cor da sombra do texto",
        fontshadowscale: "Definir a espessura da sombra do texto",
        fontshadowx: "Desloca a posição da sombra do texto horizontalmente",
        fontshadowy: "Desloca a posição da sombra do texto verticalmente",
        iconroundness: "Definir o arredondamento do ícone de conquista/jogo exibido na notificação",
        plat: "Carregar um arquivo de imagem para ser usado como o ícone de 100%",
        usegameicon: "Substituir o ícone da conquista desbloqueada pelo ícone do jogo atual",
        gameicontype: `Selecione qual tipo de imagem exibir como Ícone do Jogo`,
        usecustomimgicon: "Substituir o ícone da conquista desbloqueada por um arquivo de imagem personalizado",
        customimgicon: "Carregar um arquivo de imagem para ser usado como Ícone Personalizado",
        showhiddenicon: "Exibir uma imagem indicando que a conquista está oculta no aviso",
        hiddenicon: "Carregar um arquivo de imagem para substituir o ícone de conquista oculta",
        logo: "Carregar um arquivo de imagem para substituir o ícone de Logotipo",
        decoration: "Carregar um arquivo de imagem para substituir o ícone de Decoração",
        showdecoration: "Alternar a visibilidade do ícone de Decoração",
        replacelogo: "Substituir o ícone do logotipo na notificação pela Decoração selecionada",
        pos: "Definir a posição na tela da notificação",
        usecustompos: "Habilitar posicionamento personalizado para a notificação",
        setcustompos: "Definir a posição personalizada para a notificação",
        copycustompos: "Aplicar a posição personalizada a todos os outros tipos de notificação",
        resetcustompos: "Redefinir a posição da notificação para a posição personalizada padrão",
        updatetheme: "Atualizar o Tema atual com as opções de personalização selecionadas",
        savetheme: "Salvar todas as opções de personalização configuradas como um novo Tema",
        visibilitybtn: "Alternar a visibilidade do elemento em visualizações personalizadas e notificações de teste",
        delbtn: "Redefinir o elemento para o padrão",
        imgpath: "O local onde as imagens de notificação geradas por esta opção serão salvas",
        ssenabled: "Ativar ou desativar a geração de mídia para este tipo",
        checkforupdates: `Verifique se uma nova versão do aplicativo foi lançada no GitHub. Se uma atualização estiver disponível, ela será baixada e instalada automaticamente após a confirmação na janela <span class="hl">Atualização Disponível</span>`,
        linkedgames: `Ignorar <span class="hl">rastreamento automático de processos</span> para jogos específicos do Steam<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        exclusionlist: `Prevenir que conquistas em jogos específicos do Steam sejam rastreadas pelo aplicativo<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        inclusionlist: `Impede que todos os jogos da Steam sejam rastreados pelo aplicativo, a menos que especificados<br><br><span class="ttdesc">Esta opção deve ser usada apenas em situações muito específicas. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        ovx: "Deslocar a notificação exibida na captura de tela horizontalmente",
        ovy: "Deslocar a notificação exibida na captura de tela verticalmente",
        importtheme: `Importar personalizações via um <span class="hl">arquivo de Tema</span> criado pelo usuário`,
        exporttheme: `Exportar o <span class="hl">Tema</span> atualmente selecionado para compartilhamento<br><br><span class="ttdesc">Antes de tentar exportar, por favor, certifique-se de que o <span class="hl">Tema</span> desejado foi selecionado (via o menu <span class="hl">Selecionar Tema</span>). Certifique-se também de que as personalizações foram salvas no <span class="hl">Tema</span> selecionado (via o menu <span class="hl">Salvar Tema</span>)<br><br><u>Quaisquer personalizações que ainda não foram salvas no <span class="hl">Tema</span> atual não serão exportadas!</u></span>`,
        webhooks: "Use uma URL de Webhook para postar em um servidor Discord sempre que uma conquista for desbloqueada",
        webhookmain: `Alternar se as informações de conquista devem ser enviadas para um servidor Discord quando uma conquista $main for desbloqueada`,
        webhooksemi: `Alternar se as informações de conquista devem ser enviadas para um servidor Discord quando uma conquista $semi for desbloqueada`,
        webhookrare: "Alternar se as informações de conquista devem ser enviadas para um servidor Discord quando uma conquista $rare for desbloqueada",
        webhookplat: "Alternar se as informações de conquista devem ser enviadas para um servidor Discord quando uma conquista $plat for desbloqueada",
        webhooktest: "Alternar se as informações de teste devem ser enviadas para um servidor do Discord quando notificações de teste de qualquer tipo forem acionadas",
        webhookurl: `Defina a <span class="hl">URL do Webhook</span> para o servidor Discord desejado<br><br><span class="ttdesc">Uma <span class="hl">URL do Webhook</span> é usada para postar em um servidor/canal Discord em nome de um usuário ou aplicativo. Para configurar um novo Webhook para um servidor Discord, o usuário deve ter um papel dentro do servidor desejado que permita a criação de Webhooks<br><br><u>Uma URL do Webhook é necessária ao usar esta opção</u><br><br>Consulte a documentação oficial do Discord para mais informações</span>`,
        webhookspoilers: `Adicionar uma tag de spoiler para conquistas "Ocultas" ao postar no Discord`,
        webhookappid: "Mostrar o AppID do jogo atual no rodapé do embed do webhook",
        unlockmsg: "Defina a posição da mensagem de desbloqueio/texto personalizado dentro do $type",
        title: "Defina a posição do título da conquista dentro do $type",
        desc: "Defina a posição da descrição da conquista dentro do $type",
        notification: "notificação",
        screenshot: "captura de tela",
        percentpos: "Defina a posição da porcentagem de raridade dentro do $type",
        sspercentpos: "Defina a posição da porcentagem de raridade dentro do $type",
        hiddeniconpos: "Defina a posição do ícone de conquista oculta/secreta dentro do $type",
        sshiddeniconpos: "Defina a posição do ícone de conquista oculta/secreta dentro do $type",
        decorationpos: "Defina a posição do elemento de decoração dentro do $type",
        ssdecorationpos: "Defina a posição do elemento de decoração dentro do $type",
        percentbadge: "Exibir a percentagem de desbloqueio dentro de uma insígnia posicionada acima do ícone da conquista/jogo",
        sspercentbadge: "Exibir a percentagem de desbloqueio dentro de uma insígnia posicionada acima do ícone da conquista/jogo",
        percentbadgepos: "Definir a posição da insígnia",
        percentbadgefontcolor: "Defina a cor da fonte do emblema",
        sspercentbadgefontcolor: "Defina a cor da fonte do emblema",
        sspercentbadgepos: "Definir a posição da insígnia",
        percentbadgecolor: "Definir a cor de fundo da insígnia",
        sspercentbadgecolor: "Definir a cor de fundo da insígnia",
        percentbadgefontsize: "Definir o tamanho da insígnia",
        sspercentbadgefontsize: "Definir o tamanho da insígnia",
        percentbadgeroundness: "Definir o arredondamento da insígnia",
        sspercentbadgeroundness: "Definir o arredondamento da insígnia",
        percentbadgex: "Deslocar a posição do elemento de emblema horizontalmente",
        sspercentbadgex: "Deslocar a posição do elemento de emblema horizontalmente",
        percentbadgey: "Deslocar a posição do elemento de emblema verticalmente",
        sspercentbadgey: "Deslocar a posição do elemento de emblema verticalmente",
        percentbadgeimg: "Exibir um ícone baseado em raridade como o elemento de emblema",
        sspercentbadgeimg: "Exibir um ícone baseado em raridade como o elemento de emblema",
        percentbadgeimgbronze: "O ícone de medalha exibido quando a porcentagem de desbloqueio for > $semirarity",
        sspercentbadgeimgbronze: "O ícone de medalha exibido quando a porcentagem de desbloqueio for > $semirarity",
        percentbadgeimgsilver: "O ícone de medalha exibido quando a porcentagem de desbloqueio for < $semirarity e > $rarity",
        sspercentbadgeimgsilver: "O ícone de medalha exibido quando a porcentagem de desbloqueio for < $semirarity e > $rarity",
        percentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < $rarity",
        sspercentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < $rarity",
        percentbadgeimgplat: "O ícone de medalha exibido quando todas as conquistas forem desbloqueadas",
        sspercentbadgeimgplat: "O ícone de medalha exibido quando todas as conquistas forem desbloqueadas",
        resetpbimgs: "Redefinir todos os ícones de emblema para o padrão",
        elemsmatch: `Corresponder às configurações dos Elementos de Notificação definidos no Personalizador para este tipo de notificação<br><br><span class="ttdesc">Alguns modelos de notificação não podem corresponder totalmente às configurações do Personalizador, devido a diferenças entre layouts de notificação na tela e baseados em capturas de tela</span>`,
        themeswitch: `Trocar automaticamente para qualquer <span class="hl">Tema</span> salvo quando um jogo específico for detectado`,
        userthemesync: `Sincronizar personalizações no <span class="hl">Tema</span> selecionado para todos os outros tipos de notificação`,
        showsystrayopts: `Exibir todas as opções geralmente localizadas em <span class="hl">Bandeja do Sistema</span> > <span class="hl">Opções</span> em <span class="hl">Configurações</span> > <span class="hl">Diversos</span>`,
        releaseshortcut: "Liberar o jogo atualmente monitorado usando o atalho de teclado especificado",
        themeselect: "Selecione um Tema salvo anteriormente",
        statwin: `Exibir estatísticas de conquistas configuráveis para o jogo atual em uma janela externa<br><br><span class="ttdesc">Quando usado em conjunto com a opção <span class="hl">Traduzir Conquistas para o Idioma do Steam</span>, algumas traduções podem não estar disponíveis até que a conquista especificada seja desbloqueada</span>`,
        statwinaot: `Defina a Janela de Estatísticas de Conquistas para o modo "Sempre no Topo", permitindo que a janela seja exibida acima da janela do jogo<br><br><span class="ttdesc">Quando ativado, a Janela de Estatísticas de Conquistas não registrará interações do usuário, como eventos de "clique". Para reativar a interação com a janela, essa opção deve ser desativada</span>`,
        statwinshortcut: "Alternar a Sobreposição de Estatísticas de Conquistas usando o atalho de teclado especificado",
        ssdisplay: "Exibir uma prévia da captura de tela dentro da notificação",
        iconscale: "Aumentar ou diminuir o tamanho do ícone de conquista",
        showiconborder: "Exibir uma imagem como borda ao redor do ícone da conquista",
        iconborderimg: "Carregar um arquivo de imagem para usar como borda ao redor do ícone da conquista",
        iconborderpos: "Definir se a imagem da borda do ícone será exibida na frente ou atrás do ícone da conquista",
        iconborderscale: "Aumentar ou diminuir o tamanho da borda do ícone na notificação",
        iconborderx: "Aumentar ou diminuir o deslocamento horizontal da borda do ícone na notificação",
        iconbordery: "Aumentar ou diminuir o deslocamento vertical da borda do ícone na notificação",
        iconborderrarity: "Altera a borda do ícone exibido com base na raridade da conquista desbloqueada",
        iconborderimgbronze: "A borda do ícone exibida quando a porcentagem de desbloqueio for > $semirarity",
        iconborderimgsilver: "A borda do ícone exibida quando a porcentagem de desbloqueio for < $semirarity e > $rarity",
        iconshadowcolor: "Definir a cor do efeito de sombra ao redor do ícone de conquista ao desbloquear uma conquista rara",
        iconanimcolor: "Definir a cor do efeito de animação atrás do ícone de conquista ao desbloquear uma conquista rara",
        logoscale: "Aumentar ou diminuir o tamanho do elemento de Logo dentro da notificação",
        decorationscale: "Aumentar ou diminuir o tamanho do elemento de Decoração dentro da notificação",
        usecustomfontsizes: `Aumentar ou diminuir individualmente o tamanho dos elementos de texto dentro da notificação<br><br><span class="ttdesc">A preservação do layout original da notificação não pode ser garantida ao modificar valores individuais de tamanho de fonte</span>`,
        unlockmsgfontsize: "Aumentar ou diminuir o tamanho do elemento de texto da mensagem de desbloqueio",
        titlefontsize: "Aumentar ou diminuir o tamanho do elemento de texto do título da conquista",
        descfontsize: "Aumentar ou diminuir o tamanho do elemento de texto da descrição da conquista",
        webhookembedcolormain: "Definir a cor usada na embed do webhook quando uma conquista $main for desbloqueada",
        webhookembedcolorsemi: "Definir a cor usada na embed do webhook quando uma conquista $semi for desbloqueada",
        webhookembedcolorrare: "Definir a cor usada na embed do webhook quando uma conquista $rare for desbloqueada",
        webhookembedcolorplat: "Definir a cor usada na embed do webhook quando uma conquista $plat for desbloqueada",
        raemus: "Exibir notificações quando jogos forem detectados em emuladores compatíveis",
        rauser: "Definir o nome de usuário do Retro Achievements para acompanhar as conquistas",
        rakey: `Defina a Chave da API Web para usar na autenticação com a Retro Achievements API<br><br><span class="ttdesc">Uma Chave da API Web pode ser copiada ou regenerada ao fazer login no site da Retro Achievements e navegar até <span class="hl">Configurações > Chaves > Chave da API Web</span><br><br>🔒 A chave fornecida será criptografada antes de ser armazenada localmente no sistema (se o sistema operacional atual oferecer suporte à criptografia)</span>`,
        rapercenttype: "Definir se a porcentagem de desbloqueio de conquistas exibida nas notificações será Hardcore ou Softcore",
        retroarch: `Exibir notificações do Retro Achievements para jogos emulados pelo RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Configurações > Registro</span> deve ser configurado com as seguintes opções:<br><br><ul><li><span class="hllb">Detalhamento do Registro</span>: <span class="hlgreen">LIGADO</span></li><li><span class="hllb">Nível de Registro da Interface</span>: <span class="hlgreen">1 (Informação)</span></li><li><span class="hllb">Registrar em Arquivo</span>: <span class="hlgreen">LIGADO</span></li><li><span class="hllb">Arquivos de Log com Carimbo de Data/Hora</span>: <span class="hlred">DESLIGADO</span></li></ul></span>`,
        dolphin: `Exibir notificações do Retro Achievements para jogos emulados pelo Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Exibir > Mostrar Configuração de Log</span> deve ser configurado com as seguintes opções:<br><br><ul><li><span class="hllb">Detalhamento</span>: <span class="hlgreen">Informação</span></li><li><span class="hllb">Saídas do Registro</span> > <span class="hlgreen">Escrever em Arquivo</span></li><li><span class="hllb">Tipos de Registro</span> > <span class="hlgreen">Conquistas (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Exibir notificações do Retro Achievements para jogos emulados pelo PCSX2 [Nightly]<br><br><span class="ttdesc"><span class="hl">PCSX2 > Ferramentas > Ativar Registro de Arquivo</span> deve estar ativado</span>`,
        duckstation: `Exibir notificações do Retro Achievements para jogos emulados via Duckstation<br><br><span class="ttdesc">❗ O arquivo <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> deve ser baixado e movido para o <span class="hl">diretório de instalação do Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Configurações > Conquistas > RAIntegration (Somente para desenvolvedores)</span> deve estar ativado</span>`,
        ppsspp: `Exibir notificações do Retro Achievements para jogos emulados via PPSSPP<br><br><span class="ttdesc"><span class="hl">Settings > Tools > Developer Tools > General > Log to File</span> deve estar ativado e configurado com as seguintes definições:<br><br><ul><li><span class="hllb">Achievements</span>: <span class="hlgreen">Info</span></span>`,
        retroarchpath: `Definir o caminho para o arquivo de log <span class="hl">"retroarch.log"</span> do RetroArch<br><br><span class="ttdesc">Com as configurações padrão de instalação, o <span class="hl">"retroarch.log"</span> é armazenado em <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Definir o caminho para o arquivo de log <span class="hl">"dolphin.log"</span> do Dolphin<br><br><span class="ttdesc">Com as configurações padrão de instalação, o <span class="hl">"dolphin.log"</span> é armazenado em um dos seguintes locais:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Defina o caminho para o arquivo de log <span class="hl">"emulog.txt"</span> do PCSX2<br><br><span class="ttdesc">Usando as configurações padrão de instalação, o arquivo <span class="hl">"emulog.txt"</span> é salvo em <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Defina o caminho para o arquivo de log <span class="hl">"RALog.txt"</span> do Duckstation<br><br><span class="ttdesc">Com as configurações padrão de instalação, o <span class="hl">"RALog.txt"</span> é salvo em <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        ppsspppath: `Defina o caminho para o arquivo de log <span class="hl">"log.txt"</span> do PPSSPP<br><br><span class="ttdesc">Usando as configurações de instalação padrão, o arquivo <span class="hl">"log.txt"</span> é armazenado em <span class="hllb">%PROGRAMFILES%\\PPSSPP\\PSP\\memstick\\PSP\\SYSTEM\\DUMP</span></span>`,
        usecustomfontcolors: "Definir individualmente a cor dos elementos de texto na notificação",
        unlockmsgfontcolor: "Definir a cor do primeiro elemento de texto",
        titlefontcolor: "Definir a cor do segundo elemento de texto",
        descfontcolor: "Definir a cor do terceiro elemento de texto",
        exportachdata: `Exportar os dados da conquista para um arquivo JSON quando uma conquista for desbloqueada<br><br><span class="ttdesc">Quando ativado, <span class="ttcode">achdata.json</span> será exportado para:<br><br><ul><li><span class="hllb">%localappdata%\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Ajusta o espaçamento vertical entre os elementos de texto dentro da notificação",
        ssmode: `Defina se as capturas de tela devem incluir a tela inteira ou a janela do jogo atual<span style="color: red;">*</span><br><br><span class="ttdesc">Se o <span class="hl">arquivo executável</span> do jogo atual não puder ser localizado (<i>seja via <span class="hl">rastreamento automático de processos</span> ou ao ser adicionado como uma entrada de <span class="hl">Liberação Automática de Jogos</span></i>), esta opção será definida como padrão para o modo "Tela"</span>`,
        replaynotify: "Repetir a última notificação de conquista",
        replaynotifyshortcut: "Repetir a última notificação de conquista usando o atalho de teclado especificado",
        replaynotifyempty: `<br><br><span class="ttdesc">Fila de repetição está vazia. Desbloqueie uma conquista para repetir uma notificação</span>`,
        customtrigger: "Dispara uma tecla/combo a ser simulada ao desbloquear uma conquista. Pode ser usado para acionar atalhos de teclado registrados em aplicativos externos",
        customtriggershortcut: `Dispara a tecla/combo especificada ao desbloquear uma conquista<br><br><span class="ttdesc">Suporta entre 1-3 teclas por atalho. Para pressionamentos/combos com menos de 3 teclas, pressione as teclas desejadas e aguarde o final do temporizador (5s)</span>`,
        customtriggerdelay: "Atrasar a tecla/combo especificada do Gatilho Personalizado",
        customtriggerusedisplaytime: `Atrasar a tecla/combo especificada do Gatilho Personalizado com base no valor de Tempo de Exibição do tipo de notificação atual`,
        trophymode: "Substituir os tipos de notificação Principal/Rara/100% por Bronze/Prata/Ouro/Platina",
        lognum: `O número de arquivos de log anteriores armazenados antes da exclusão. Um novo arquivo de log será gerado a cada inicialização do aplicativo<br><br><span class="ttdesc">Quando definido como 0, todos os arquivos de log anteriores serão excluídos ao sair</span>`, 
        detectedappid: `Usar o <span class="hl">AppID</span> do jogo detectado atualmente`,
        listmode: `Define o comportamento da <span class="hl">Exclusão</span>/<span class="hl">Lista de Inclusão</span><br><br><span class="ttdesc">• <span class="hl">Exclusão</span>: Ignora apenas os jogos especificados na lista<br>• <span class="hl">Inclusão</span>: Ignora todos os jogos, exceto os especificados na lista</span>`,
        notifymax: `Define o número máximo de notificações simultâneas exibidas na tela<br><br><span class="ttdesc">Aumentar o número de notificações simultâneas requer mais recursos e pode resultar em desempenho reduzido</span>`,
        notifyspace: "Define a distância entre notificações simultâneas exibidas na tela",
        audiocooldown: `Define o tempo de espera que as próximas notificações devem aguardar antes que um novo som possa ser reproduzido<br><br><span class="ttdesc">O áudio não será afetado se Máximo de Notificações estiver definido como 1</span>`,
        rauseemudir: "Salvar capturas de tela/imagens de notificações desbloqueadas via RetroAchievements em uma subpasta do emulador atual dentro do diretório de caminho de capturas de tela/imagens especificado",
        ssext: "Definir o formato de arquivo das capturas de tela geradas pela opção de captura de tela com sobreposição de notificação",
        notify1line: `Limitar o número de linhas de texto exibidas em todas as notificações a 1<br><br><span class="ttdesc">Textos excedentes que não couberem em uma única linha serão truncados com "..."</span>`,
        copytheme: "Copiar o tema selecionado para outro tipo de notificação",
        ssaddtosteam: "Adicionar automaticamente a mídia gerada às Gravações e Capturas de Tela do jogo atual no Steam",
        appdatadir: "Abrir o local da pasta AppData do app",
        backup: "Faça backup do conteúdo da pasta AppData do app para um local escolhido, que servirá como ponto de restauração para o estado atual do app",
        restore: "Restaure o conteúdo da pasta AppData do app a partir de um backup anterior",
        gametimerwin: "Exibe um temporizador na tela mostrando o tempo necessário para desbloquear todas as conquistas do jogo atual",
        gametimerwinshortcut: "Alterna o Temporizador de Conclusão do Jogo usando o atalho de teclado especificado",
        gametimerwinaot: `Define o Temporizador de Conclusão do Jogo para o modo "Sempre no Topo", permitindo que a janela seja exibida acima da janela do jogo<br><br><span class="ttdesc">Quando ativado, o Temporizador de Conclusão do Jogo não registrará mais interações do usuário, como eventos de "clique". Para reativar a interação com a janela, esta opção deve ser desativada</span>`,
        resetgametimer: "Redefine o Temporizador de Conclusão do Jogo para o jogo atual",
        noshortcuts: `Desativa todos os atalhos de teclado do aplicativo<br><br><span class="ttdesc">Quando ativado, <u>todos os atalhos do aplicativo deixarão de funcionar</u>. Todas as opções relacionadas a atalhos de teclado também serão ocultadas</span>`,
        extwinnotify: "Alterna a visibilidade de todas as notificações na tela ao usar Stream Notifications",
        usesanwatcher: `Ativar o novo monitor de processos de jogos do SAN<br><br><span class="ttdesc">As diferenças entre o novo SANWatcher e os métodos antigos de rastreamento automático de processos são as seguintes:<br><br><div class="wrapper sanwatcher"><span class="hl">LIGADO</span><ul><li>Monitora ativamente eventos de início/encerramento de qualquer processo armazenado dentro do diretório de instalação do jogo</li><li>Não exige que o executável do jogo seja conhecido para liberar o jogo atual</li><li>O comportamento de inicializadores pré-jogo pode variar, portanto a compatibilidade total com todos os jogos da Steam não é garantida</li></ul></div><br><div class="wrapper sanwatcher"><span class="hl" style="color: firebrick;">DESLIGADO</span><ul><li>Analisa o diretório de instalação do jogo em busca de executáveis em execução após o lançamento do jogo</li><li>Exige que o executável do jogo seja conhecido para liberar o jogo atual</li><li>Se o processo do jogo não puder ser determinado automaticamente, o usuário deverá adicionar manualmente uma nova entrada em <span class="hl">Auto-Release Games</span> para que os jogos sejam liberados automaticamente</li></ul></div>`,
        releasewaittime: `Defina por quanto tempo o SANWatcher aguardará o surgimento de novos processos de jogo antes de liberar o jogo atual<br><br><span class="ttdesc">Por exemplo, se o jogo atual abrir um inicializador ou janela de configuração pré-jogo antes de iniciar o jogo propriamente dito, esta configuração determina o número de segundos que o SANWatcher aguardará o surgimento da janela do jogo após o fechamento da janela de inicialização ou configuração pré-jogo<br><br>Se um novo processo de jogo ativo for detectado dentro desse período de espera, a liberação será cancelada e o novo processo ativo passará a ser monitorado em seu lugar<br><br>💡 O nome do jogo piscará em <span style="color: yellow;">amarelo</span> na caixa <span class="hl">Game Display</span> enquanto o jogo atual estiver aguardando para ser liberado</span>`
    },
    update: {
        updateavailable: "Atualização disponível",
        sub: [
            `<span id="newversion"></span>`,
            "Uma nova atualização para o Steam Achievement Notifier está disponível!",
            `Notas completas da versão disponíveis em <span id="discordreleasenotes"></span> e <span id="githubreleasenotes"></span>`
        ],
        update: "Atualizar"
    },
    linkgame: {
        content: {
            exepath: "Caminho do Executável",
            managesub: [
                `Se o Steam ainda mostrar um jogo como <i>Jogando</i> após a janela do jogo ser fechada, tente adicionar uma nova entrada em <span class="hl">Liberação Automática de Jogos</span>`,
                `Adicione o <span class="hl">AppID</span> de um jogo específico junto com seu <span class="hl">executável do jogo</span> esperado, ou <span class="hl">remova</span> uma entrada existente`,
                `Novas entradas também podem ser adicionadas ao <i>clicar com o botão direito</i> no <span class="hl">ícone da System Tray</span> > <span class="hl">Liberação Automática de Jogo</span> assim que um jogo for detectado`,
                `<span class="hl help" id="appidhelp"><u>Como encontro o AppID de um jogo da Steam?</u></span>`
            ],
            linknew: "Nova Entrada",
            linknewsub: [
                `Adicione o <span class="hl">AppID</span> de um novo jogo junto com seu <span class="hl">executável do jogo</span> esperado`,
                `Após a adição, as entradas podem ser <span class="hl">removidas</span> pelo menu anterior de <span class="hl">Liberação Automática de Jogos</span>`
            ],
            linkedit: "Editar Entrada",
            linkeditsub: [
                `Edite o <span class="hl">AppID</span> de um jogo existente junto com seu <span class="hl">executável do jogo</span> esperado`,
                `Após a adição, as entradas podem ser <span class="hl">removidas</span> pelo menu anterior de <span class="hl">Liberação Automática de Jogos</span>`
            ],
            link: "Adicionar"
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Adicionar o <span class="hl">AppID</span> de qualquer jogo do Steam à <span class="hl">Lista de Exclusão</span>`,
                `O Steam Achievement Notifier não tentará rastrear dados de conquistas para qualquer <span class="hl">AppID</span> de jogo adicionado à <span class="hl">Lista de Exclusão</span>`,
                `<span class="hl" id="appidhelp"><u>Como encontro o AppID de um jogo do Steam?</u></span>`
            ],
            exclusionnew: "Nova Exclusão",
            exclusionnewsub: [
                `Insira o <span class="hl">AppID</span> para adicionar à <span class="hl">Lista de Exclusão</span>`
            ],
            exclusionedit: "Editar Exclusão",
            exclusioneditsub: [
                `Edite o <span class="hl">AppID</span> existente na <span class="hl">Lista de Exclusões</span>`
            ]
        }
    },
    inclusions: {
        content: {
            managesub: [
                `Adicione o <span class="hl">AppID</span> de qualquer jogo da Steam à <span class="hl">Lista de Inclusão</span>`,
                `O Steam Achievement Notifier tentará rastrear dados de conquistas apenas para jogos que tenham o <span class="hl">AppID</span> adicionado à <span class="hl">Lista de Inclusão</span>`,
                `<span class="hl help" id="appidhelp"><u>Como encontro o AppID de um jogo da Steam?</u></span>`
            ],
            inclusionnew: "Nova Inclusão",
            inclusionnewsub: [
                `Insira o <span class="hl">AppID</span> para adicionar à <span class="hl">Lista de Inclusão</span>`
            ],
            inclusionedit: "Editar Inclusão",
            inclusioneditsub: [
                `Edite o <span class="hl">AppID</span> existente na <span class="hl">Lista de Inclusão</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elementos da Notificação",
        content: {
            unlockmsg: "Mensagem de Desbloqueio",
            title: "Título da Conquista",
            desc: "Descrição da Conquista",
            hiddeniconpos: "Ícone Oculto",
            sshiddeniconpos: "Ícone Oculto",
            decorationpos: "Decoração",
            ssdecorationpos: "Decoração",
            percentpos: "Porcentagem de Raridade",
            sspercentpos: "Porcentagem de Raridade",
            percentbadge: "Insígnia de Percentagem",
            sspercentbadge: "Insígnia de Percentagem",
            percentbadgepos: "Posição da Insígnia",
            sspercentbadgepos: "Posição da Insígnia",
            percentbadgecolor: "Cor da Insígnia",
            sspercentbadgecolor: "Cor da Insígnia",
            percentbadgefontcolor: "Cor da Fonte do Emblema",
            sspercentbadgefontcolor: "Cor da Fonte do Emblema",
            percentbadgefontsize: "Tamanho da Insígnia",
            sspercentbadgefontsize: "Tamanho da Insígnia",
            percentbadgeroundness: "Arredondamento da Insígnia",
            sspercentbadgeroundness: "Arredondamento da Insígnia",
            percentbadgex: "Deslocamento Horizontal",
            sspercentbadgex: "Deslocamento Horizontal",
            percentbadgey: "Deslocamento Vertical",
            sspercentbadgey: "Deslocamento Vertical",
            percentbadgeimg: "Usar Ícone",
            sspercentbadgeimg: "Usar Ícone",
            percentbadgeimgbronze: "Raridade: > $semirarity",
            sspercentbadgeimgbronze: "Raridade: > $semirarity",
            percentbadgeimgsilver: "Raridade: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Raridade: < $semirarity & > $rarity",
            percentbadgeimggold: "Raridade: < $rarity",
            sspercentbadgeimggold: "Raridade: < $rarity",
            resetpbimgs: "Redefinir Ícones de Emblema",
            elemsmatch: "Corresponder às Configurações do Personalizador",
            ssdisplay: "Prévia da Captura de Tela"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Adicione o <span class="hl">AppID</span> de qualquer jogo para trocar automaticamente para <span class="hl">Temas</span> quando detectado`,
                `Qualquer <span class="hl">Tema</span> salvo pode ser selecionado para cada tipo de notificação, junto com o monitor desejado para usar como <span class="hl">Fonte de Captura de Tela</span>`,
                `<span class="hl" id="appidhelp"><u>Como encontro o AppID de um jogo da Steam?</u></span>`
            ],
            themeswitchnew: "Novo Troca Automática",
            themeswitchnewsub: [
                `Insira o <span class="hl">AppID</span> do jogo, junto com o monitor desejado para usar como <span class="hl">Fonte de Captura de Tela</span>`,
                `Selecione qual <span class="hl">Tema</span> trocar para cada tipo de notificação quando o <span class="hl">AppID</span> deste jogo for detectado`
            ],
            themeswitchedit: "Editar Troca Automática",
            themeswitcheditsub: [
                `Edite o monitor desejado para usar como <span class="hl">Fonte da Captura de Tela</span> para o <span class="hl">AppID</span> deste jogo`,
                `Altere qual <span class="hl">Tema</span> será usado para cada tipo de notificação quando o <span class="hl">AppID</span> deste jogo for detectado`
            ],
            themes: "Temas",
            src: "Fonte da Captura de Tela",
            themedeleted: "Tema excluído"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Parece que você está tentando ativar a opção <span class="hl">${opt}</span>, mas essa opção não pode ser ativada sem antes instalar o pacote <code class="dialogcode">${dep}</code>`,
    `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar essa dependência`
]