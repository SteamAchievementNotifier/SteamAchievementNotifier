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
        test: "Notificações de Teste",
        topleft: "Superior Esquerdo",
        topcenter: "Superior Centro",
        topright: "Superior Direito",
        bottomleft: "Inferior Esquerdo",
        bottomcenter: "Inferior Centro",
        bottomright: "Inferior Direito",
        ok: "OK",
        preview: "Pré-visualização",
        save: "Salvar",
        back: "Voltar",
        edit: "Editar",
        settings: "Configurações",
        appversion: "Versão do Aplicativo",
        image: "Imagem",
        audio: "Áudio",
        folder: "Pasta",
        font: "Fonte",
        select: "Selecionar",
        gametitle: "Título do Jogo",
        congrats: "Parabéns!",
        achievementunlocked: "Conquista Desbloqueada",
        gamecomplete: "100% Completo",
        achievementdesc: "Clicou no botão para mostrar a notificação de teste",
        gamecompletedesc: "Você desbloqueou todas as conquistas!",
        defaultcustomfont: "Padrão (Nenhuma fonte selecionada)",
        defaultsoundfile: "Padrão (Nenhum arquivo selecionado)",
        defaultsounddir: "Padrão (Nenhuma pasta selecionada)",
        nowtracking: "Acompanhando conquistas para:",
        nopreview: "Pré-visualização não disponível para o sistema operacional nativo",
        options: "Opções",
        resetwindow: "Redefinir Janela",
        show: "Mostrar",
        exit: "Sair",
        releasegame: "Liberar Jogo",
        releasegamesub: [
            `Reinicie o processo Worker em segundo plano e libere o jogo atual de ser rastreado`,
            `Tente esta opção se você fechou recentemente um jogo, mas o Steam ainda mostra que está rodando, ou se o Steam Achievement Notifier ainda mostra como rastreando um jogo que já foi fechado`
        ],
        noupdateavailable: "Nenhuma atualização disponível",
        latestversion: "Última versão instalada",
        missingdeps: "Dependência Ausente",
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
            `Cada jogo Steam tem um número único associado a ele - chamado de <span class="hl">AppID</span>. Você pode encontrar o AppID associado a qualquer jogo Steam verificando um dos seguintes:`,
            `No <span class="hl">cliente Steam</span>, clique com o botão direito do mouse em um jogo na sua <span class="hl">Biblioteca</span> e selecione <i>Propriedades</i> > <i>Atualizações</i> - o AppID será listado aqui`,
            `A <span class="hl">URL</span> da página da <span class="hl">loja</span> do jogo - será o número listado após <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Sites como o <span class="hl">SteamDB</span> - a seção de <span class="hl">Informações do App</span> listará o AppID para cada jogo`
        ],
        noexe: "Arquivo EXE do jogo não encontrado!",
        noexesub: "Clique aqui para mais informações",
        noexedialogsub: [
            `O Steam Achievement Notifier não conseguiu localizar automaticamente o arquivo executável deste jogo. A localização do arquivo executável do jogo é necessária para "liberar" o jogo`,
            `Para liberar o jogo manualmente, <i>clique com o botão direito</i> no <span class="hl">ícone da bandeja do sistema</span> > <span class="hl">Opções</span> > <span class="hl">Liberar Jogo</span>, ou use o <span class="hl">Atalho para Liberar Jogo</span>`,
            `Alternativamente, clique no botão <span class="hl">Link</span> abaixo para adicionar o arquivo executável associado à janela em foco ao menu <span class="hl">Jogos Vinculados</span>`,
            `<span class="hl help" id="linkgamehelp"><u>O que acontece quando eu clico no botão Link?</u></span>`
        ],
        linkgamehelp: "Linkar Jogo via Janela",
        linkgamehelpsub: [
            `Ao clicar no botão <span class="hl">Link</span>, uma nova entrada será adicionada automaticamente ao menu <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span>, usando informações da janela em foco.`,
            `Após clicar no botão <span class="hl">Link</span>, um timer de 5 segundos começará`,
            `Antes que o timer termine, foque na janela do jogo`,
            `Quando o timer terminar, uma nova entrada para o <span class="hl">AppID</span> atual será adicionada ao menu <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span>, usando o arquivo executável associado à janela em foco`,
            `Se precisar tentar novamente, remova a entrada via <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span> clicando no botão <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Não foi possível vincular a janela",
        addlinkfailedsub: `Clique no botão <span class="hl">Link</span> para tentar novamente`,
        webhookunlockmsg: "$user desbloqueou uma conquista",
        webhookunlockmsgplat: "$user desbloqueou todas as conquistas",
        webhookingame: "em $gamename",
        notconnected: "Não conectado",
        raloghelp: "Meu jogo não está sendo detectado",
        raenablelog: `Arquivos de log do emulador`,
        raenablelogsub: [
            `Para acessar eventos internos do jogo (como o status atual do jogo, informações sobre o desbloqueio de conquistas, etc.), o registro em um <span class="hl">arquivo de log</span> <u>deve ser habilitado</u> dentro de qualquer emulador selecionado.<br><br>Os emuladores selecionados <u>devem usar este <span class="hl">arquivo de log</span></u> como o valor de <span class="hl">Caminho do Arquivo de Log</span>.`,
            `<details>
                <summary id="retroarch">RetroArch</summary>
                <div>
                    <span class="hl">RetroArch > Configurações > Log</span> deve ser configurado com as seguintes configurações:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbosity do Log</span>: <span class="hlgreen">LIGADO</span></li>
                        <li><span class="hllb">Nível de Log do Frontend</span>: <span class="hlgreen">1 (Info)</span></li>
                        <li><span class="hllb">Log para Arquivo</span>: <span class="hlgreen">LIGADO</span></li>
                        <li><span class="hllb">Timestamp para Arquivos de Log</span>: <span class="hlred">DESLIGADO</span></li>
                    </ul>
                    <br>
                    Com as configurações padrão de instalação, <span class="hl">"retroarch.log"</span> é armazenado em:
                    <br>
                    <ul>
                        <li><span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></li>
                    </ul>
                </div>
            </details>`,
            `<details>
                <summary id="dolphin">Dolphin</summary>
                <div>
                    <span class="hl">Dolphin > Exibir > Mostrar Configuração de Log</span> deve ser configurado com as seguintes configurações:
                    <br>
                    <ul>
                        <li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li>
                        <li><span class="hllb">Saídas do Log</span> > <span class="hlgreen">Escrever para Arquivo</span></li>
                        <li><span class="hllb">Tipos de Log</span> > <span class="hlgreen">Conquistas (RetroAchievements)</span></li>
                    </ul>
                    <br>
                    Com as configurações padrão de instalação, <span class="hl">"dolphin.log"</span> é armazenado em um dos seguintes locais:
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
                    <span class="hl">PCSX2 > Ferramentas > Ativar registro de arquivo</span> deve estar ativado
                    <br>
                    <br>
                    Com as configurações de instalação padrão, <span class="hl">"emulog.txt"</span> é armazenado em:
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
                    <span class="hl">Duckstation > Configurações > Conquistas > RAIntegration (Somente para desenvolvedores)</span> deve estar ativado
                    <br>
                    <br>
                    Usando as configurações de instalação padrão, <span class="hl">"RALog.txt"</span> é armazenado em:
                    <br>
                    <ul>
                        <li><span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></li>
                    </ul>
                </div>
            </details>`
        ],
        betaunsupported: "Beta não suportada",
        betaunsupportedsub: [
            "Uma nova versão do Steam Achievement Notifier foi lançada!",
            `<u>Esta versão Beta não é mais suportada</u>. Por favor, baixe e instale a versão oficial mais recente pelo Github usando o botão <span class="hl">Releases</span> abaixo.`,
            "Obrigado por testar! 💜"
        ],
        betaghreleases: "Lançamentos",
    },
    app: {
        content: {
            game: "Nenhum jogo detectado",
            customise: "Personalizar",
            test: "Mostrar Notificação de Teste"
        }
    },
    settings: {
        language: {
            title: "Idioma",
            content: {
                steamlang: "Traduzir conquistas para o idioma do Steam",
                maxsteamlangretries: "Número máximo de tentativas de tradução"
            }
        },
        os: {
            title: "Sistema Operativo",
            content: {
                desktop: "Criar Atalho no Ambiente de Trabalho",
                startwin: "Iniciar no login",
                startmin: "Iniciar Minimizado",
                nohwa: "Desativar Aceleração de Hardware",
                litemode: "Modo Leve"
            }
        },
        notifications: {
            title: "Notificações",
            content: {
                rarity: "Percentagem de raridade",
                semirarity: "Percentagem de prata",
                rareonly: "Apenas Raros",
                all: "Tudo",
                off: "Desligado",
                showpercent: "Mostrar Percentagem",
                soundonly: "Apenas Som",
                nowtracking: "Mostrar Notificação de Rastreio",
                nowtrackingscale: "Escala de Rastreio",
                nowtrackingpos: "Posição de Rastreio",
                shortcuts: "Atalhos de Notificação",
                noiconcache: "Desativar o Cache de Ícones",
                webhooks: "Postar no servidor Discord",
                webhookurl: `URL do Webhook`,
                webhooktypes: "Tipos de Webhook",
                webhookcaution: `Ao habilitar esta opção e fornecer um link de Webhook do Discord válido, você concorda que entende que <u>todas as informações sobre conquistas e jogos para o usuário Steam atual</u> serão postadas no servidor Discord especificado através do link de Webhook fornecido.<br><br>Se você não deseja que o Steam Achievement Notifier publique essas informações em seu nome, desative esta opção.`,
                webhooklaststatus: "Último Status",
                webhookspoilers: `Adicionar tag de spoiler`,
                replaynotify: "Notificação de Repetição",
                replaynotifyshortcut: "Atalho de Repetição",
                customtrigger: "Gatilho Personalizado",
                customtriggershortcut: "Atalho do Gatilho",
                customtriggerdelay: "Atraso do Gatilho",
                customtriggerusedisplaytime: "Usar Tempo de Exibição",
                trophymode: "Modo Troféu"
            }
        },
        games: {
            title: "Jogos",
            content: {
                linkedgames: "Jogos Associados",
                themeswitch: "Troca automática de temas",
                exclusionlist: "Lista de Exclusão"
            }
        },
        media: {
            title: "Mídia",
            content: {
                steamss: "Tirar Captura de Tela do Steam",
                screenshots: "Mídia Adicional",
                off: "Desligado",
                overlay: "Captura de Tela com Overlay de Notificação",
                monitors: "Fonte da Captura de Tela",
                hdrmode: "Modo HDR",
                ovpos: "Posição da Overlay",
                ovmatch: "Corresponder Posição Personalizada",
                ovx: "Deslocamento Horizontal",
                ovy: "Deslocamento Vertical",                
                ovpath: "Caminho da Captura de Tela",
                ssdelay: "Atraso na Captura de Tela",
                notifyimg: "Imagem de Notificação",
                imgpath: "Caminho da Imagem",
                ssenabled: "Ativar",
                ssmode: "Modo de Captura de Tela",
                screen: "Tela",
                window: "Janela"
            }
        },
        streaming: {
            title: "Transmissão",
            content: {
                extwin: "Notificações de Transmissão",
                extwinframerate: "Taxa de quadros",
                extwinshow: "Mostrar janela",
                audiosrc: "Fonte de Áudio",
                notify: "Notificar",
                app: "Aplicativo",
                off: "Silenciado",
                statwin: "Janela de Estatísticas de Conquistas",
                statwinaot: "Sempre no Topo",
                noachievements: "Nenhuma conquista para exibir",
                startgame: "Inicie um jogo para mostrar conquistas!",
                max: "Máximo",
                custom: "Personalizado...",
                statwinshortcut: "Atalho da Sobreposição",
            }
        },
        accessibility: {
            title: "Acessibilidade",
            content: {
                noanim: "Desativar Animações da Janela do Aplicativo",
                noupdatedialog: "Desativar diálogo de atualização",
                nvda: "Ativar Suporte NVDA",
                tooltips: "Mostrar Dicas de Ferramentas",
                showsystrayopts: "Mostrar opções da área de notificação",
                releaseshortcut: "Atalho para Liberar Jogo"
            }
        },
        advanced: {
            title: "Avançado",
            content: {
                pollrate: "Taxa de Pesquisa",
                initdelay: "Opóźnienie śledzenia",
                releasedelay: "Atraso de Lançamento",
                maxretries: "Tentativas Máximas de Processamento",
                debug: "Painel de Depuração",
                userust: "Modo de Processamento Alternativo",
                notifydebug: "Mostrar Notificações de Depuração",
                exportachdata: "Exportar Dados de Conquista",
                uselegacynotifytimer: "Usar Timer de Notificação Antigo",
                usecustomfiles: "Utilizar Arquivos Personalizados da Aplicação",
                showcustomfiles: "Mostrar Arquivos Personalizados da Aplicação"
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
                installdir: "Caminho do arquivo de log",
                rapercenttype: "Tipo de porcentagem",
                hard: "Hardcore",
                soft: "Softcore",
                placeholder: "Digite o caminho do arquivo de log",
                logfile: "Arquivo de Log",
                status: "Status",
                game: "Jogo",
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
                colorprofile: "Perfil de Cor",
                checkforupdates: "Verificar Atualizações",
                log: "Registo da Aplicação",
                reset: "Redefinir Aplicativo"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Predefinições",
            content: {
                preset: "Predefinição de Notificação",
                iconanim: "Animação de Ícone Raro",
                alldetails: "Mostrar Todos os Detalhes",
                usepercent: "Usar Percentagem",
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
                bgimgbrightness: "Brilho",
                brightness: "Brilho",
                blur: "Desfoque",
                roundness: "Arredondamento",
                fontsize: "Tamanho da Fonte",
                usecustomfontsizes: "Usar tamanhos de fonte personalizados",
                unlockmsgfontsize: "Mensagem de desbloqueio",
                titlefontsize: "Título",
                descfontsize: "Descrição",
                textvspace: "Espaçamento do Texto",
                opacity: "Opacidade",
                bgonly: "Somente Fundo",
                glow: "Brilho",
                glowcolor: "Cor",
                glowsize: "Tamanho",
                glowx: "Deslocamento Horizontal",
                glowy: "Deslocamento Vertical",
                glowopacity: "Opacidade",
                glowanim: "Animação",
                glowspeed: "Velocidade",
                glowrarity: "Usar raridade",
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
                iconshadowcolor: "Cor da sombra do ícone raro",
                iconanimcolor: "Cor da animação do ícone raro",
                fontcolor: "Cor da Fonte",
                usecustomfontcolors: "Usar Cores de Fonte Personalizadas",
                unlockmsgfontcolor: "Cor 1",
                titlefontcolor: "Cor 2",
                descfontcolor: "Cor 3",
                fontoutline: "Contorno da Fonte",
                fontoutlinecolor: "Cor do Contorno da Fonte",
                fontoutlinescale: "Escala do Contorno da Fonte",
                fontshadow: "Sombra da Fonte",
                fontshadowcolor: "Cor da Sombra da Fonte",
                fontshadowscale: "Escala da Sombra da Fonte"
            }
        },
        icons: {
            title: "Ícones",
            content: {
                iconscale: "Escala do ícone",
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
                back: "Verso",
                plat: "Logo 100%",
                usegameicon: "Usar Ícone do Jogo",
                gameicontype: "Tipo de Ícone do Jogo",
                usecustomimgicon: "Usar Ícone Personalizado",
                customimgicon: "Ícone Personalizado",
                icon: "Ícone",
                logo: "Logo",
                logoscale: "Escala do logo",
                decoration: "Decoração",
                decorationscale: "Escala da decoração",
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
                    `Certifique-se de que o <span class="hl">Nome do Tema</span> seja <u>único</u> - um nome que corresponda a um tema existente <u>irá substituí-lo</u>!`
                ],
                placeholder: "Nome do Tema",
                theme: "Tema",
                importtheme: "Importar Tema",
                import: "Importar",
                importsub: [
                    `Importar um <span class="hl">arquivo de tema</span> criado pelo usuário`,
                    `Os <span class="hl">temas importados</span> serão carregados automaticamente após a importação bem-sucedida e podem ser selecionados no menu <span class="hl">Selecionar Tema</span>`,
                ],
                importidle: `Selecione um <span class="hl">arquivo de tema</span> para importar`,
                importcopied: `Tema copiado com sucesso`,
                importrenamed: `Tema renomeado com sucesso`,
                importextracted: `Tema extraído com sucesso`,
                importrewriting: `Reescrevendo caminhos de arquivo do tema...`,
                importconverting: `Convertendo tema...`,
                importcreating: `Criando tema...`,
                importdone: `Tema importado com sucesso`,
                importfailed: `Erro ao importar o arquivo de tema selecionado!`,
                exporttheme: "Exportar Tema",
                export: "Exportar",
                exporterrortitle: "Erro de Exportação",
                exporterrorsub: [
                    "Ocorreu um erro ao tentar exportar o tema selecionado",
                    `Tente salvar o tema atual (<i>via <span class="hl">Salvar Tema</span></i>) e tente exportar novamente`,
                    `Se o problema persistir, copie o erro abaixo e reporte-o através dos botões de link na <span class="hl">Tela Inicial</span>`
                ],
                synctheme: "Sincronizar tema",
                syncedwith: "Sincronizado com",
                themeselect: "Tema Selecionado"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Aqui está o que aconteceu desde que o aplicativo foi iniciado",
            copylog: "Copiar Conteúdo do Log"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Tem certeza?</span>
                    <span>Todos os dados previamente configurados, <u>incluindo Personalizações</u>, serão redefinidos para o padrão.</span>
                    <span>🛑 Esta ação não pode ser desfeita!</span>
                </div>
            `,
            reset: "Redefinir"
        }
    },
    error: {
        content: {
            subtitle: "O Notificador de Conquistas Steam encontrou um problema e precisa ser fechado.",
            details: "Aqui estão os detalhes do erro:",
            sub: "Clique nos botões abaixo para relatar este problema através da sua plataforma preferida.",
            report: "Relatório",
            log: "Log do Aplicativo",
            exit: "Sair"
        }
    },     
    tooltips: {
        game: "O jogo para o qual as conquistas estão sendo rastreadas atualmente",
        usertheme: "Selecione um tema salvo anteriormente",
        customise: "Personalizar notificações de conquistas",
        test: "Mostrar uma notificação de teste, incluindo quaisquer personalizações",
        kofi: "Faça uma doação no Ko-Fi!",
        discord: "Junte-se ao Discord!",
        github: "Reportar um problema",
        lang: "Selecione o idioma da interface do usuário usado no aplicativo",
        steamlang: `Tente carregar traduções localizadas nos arquivos do aplicativo Steam para exibir informações sobre conquistas no idioma escolhido pelo usuário no cliente Steam<br><br><span class="ttdesc">Esta opção tenta localizar traduções em um arquivo JSON armazenado nos dados do aplicativo Steam. Se uma tradução para a conquista atual não puder ser encontrada, serão exibidas as informações sobre a conquista recuperadas do Steamworks.</span>`,
        maxsteamlangretries: `O número de tentativas (a cada 100 ms) para encontrar traduções válidas para a conquista atual<br><br><span class="ttdesc">O Steam atualmente armazena apenas uma pequena quantidade de dados sobre conquistas no arquivo JSON associado a cada jogo. Quaisquer conquistas que não estejam presentes neste arquivo serão adicionadas após a conquista ser desbloqueada.<br><br>Como a adição de novos dados pode levar tempo, aumentar este valor aumentará a probabilidade de encontrar dados de tradução para a conquista atual, mas também pode atrasar a exibição da notificação na tela pelo tempo calculado por esta configuração.<br><br>Se não for possível encontrar dados de tradução válidos para a conquista atual, a tradução reverterá para o idioma especificado no Steamworks.</span>`,
        desktop: "Alternar um atalho na área de trabalho para executar o aplicativo",
        startwin: "Iniciar o Steam Achievement Notifier automaticamente após fazer login",
        startmin: "Após o lançamento, ocultar a janela da interface do aplicativo até ser aberta pela bandeja do sistema",
        nohwa: `Desativar Aceleração de Hardware, o que pode melhorar o desempenho em sistemas com recursos limitados ou sistemas sem uma GPU dedicada<br><br><span class="ttdesc">O aplicativo será reiniciado após ativar/desativar esta opção</span>`,
        litemode: "Desativar todos os elementos interativos da interface do usuário, fornecendo apenas funcionalidade limitada do aplicativo por meio do ícone da bandeja do sistema. Pode melhorar os recursos consumidos pelo aplicativo",
        rarity: `A percentagem na qual as notificações de conquistas raras serão ativadas.<br><br>Qualquer conquista com uma percentagem de desbloqueio superior a este valor será mostrada como uma notificação Principal<br><br><span class="ttdesc">Se o <span class="hl">Modo Troféu</span> estiver ativado, qualquer conquista com uma percentagem de desbloqueio superior a este valor será mostrada como uma notificação Prata em vez disso</span>`,
        semirarity: `A percentagem na qual os elementos de notificação "Prata" serão exibidos (por ex. <span class="hl">Emblemas de Raridade</span>, <span class="hl">Decorações</span> etc.).<br><br>Qualquer conquista com uma percentagem de desbloqueio inferior (ou igual) a este valor e superior ao valor de <span class="hl">Percentagem de Raridade</span>, exibirá elementos de notificação configurados para raridades "Prata".<br><br>Qualquer conquista com uma percentagem de desbloqueio superior a este valor exibirá elementos de notificação configurados para raridades "Bronze"<br><br><span class="ttdesc">Se o <span class="hl">Modo Troféu</span> estiver ativado, qualquer conquista com uma percentagem de desbloqueio superior a este valor será mostrada como uma notificação Bronze em vez disso</span>`,
        showpercent: "Exibir a porcentagem de desbloqueio da conquista na notificação para o(s) tipo(s) selecionado(s)",
        soundonly: "Desativar notificações, reproduzindo apenas sons definidos por meio do Personalizador",
        extwin: "Crie uma janela que duplica todas as notificações atualmente exibidas na tela. Esta janela pode ser adicionada como uma fonte de Captura de Janela para uso em softwares de transmissão, como o OBS",
        extwinframerate: "Definir a taxa de quadros alvo para notificações de transmissão",
        extwinshow: `Alternar a visibilidade da janela de Notificações de Transmissão<br><br><span class="ttdesc">Quando focada na barra de tarefas, mantenha pressionada a tecla <code class="ttcode">Ctrl</code> para exibir a localização atual da janela</span>`,
        audiosrc: "Selecionar a fonte (ou desativar) o áudio gerado pelo aplicativo",
        nowtracking: "Exibir uma notificação informando ao usuário que as conquistas de um jogo em execução estão sendo rastreadas",
        nowtrackingscale: `Defina o tamanho da notificação de rastreio`,
        nowtrackingpos: `Defina a posição da notificação de rastreamento`,
        shortcuts: "Acionar uma notificação de teste por meio de um atalho de teclado. Os atalhos podem ser personalizados para cada tipo de notificação",
        noiconcache: `Desativa o cache de ícones de conquistas ao iniciar os jogos.<br><br><span class="ttdesc">Isso pode melhorar bastante o desempenho do aplicativo ao iniciar os jogos e também pode resolver problemas de rastreamento com jogos que têm um grande número de conquistas. No entanto, em casos raros, desativar o cache de ícones pode resultar na ausência de ícones de conquistas nas notificações</span>`,
        steamss: "Tirar uma captura de tela do Steam quando uma conquista for desbloqueada",
        screenshots: "Selecionar o tipo de mídia adicional a ser criada quando uma notificação for exibida",
        monitors: "O monitor que será capturado ao tirar a captura de tela",
        hdrmode: `Captura de tela utilizando um método compatível com monitores que utilizam High Dynamic Range (HDR)`,
        ovpos: "A posição da sobreposição de notificação na captura de tela",
        ovmatch: "Corresponder à posição da tela definida no Personalizador para este tipo de notificação",
        ovpath: "O local onde as capturas de tela geradas por esta opção serão salvas",
        ssdelay: "Adicionar um atraso desde o momento em que a notificação ocorre até o momento em que a captura de tela é tirada",
        sspreview: "Mostrar uma prévia de como a captura de tela será exibida ao ser salva",
        noanim: "Desativar todas as animações de janela do aplicativo e efeitos de transição",
        noupdatedialog: `Impede que o diálogo <span class="hl">Atualização Disponível</span> seja exibido automaticamente e receba foco<br><br><span class="ttdesc">O diálogo ainda pode ser acessado clicando no botão de atualização quando estiver disponível</span>`,
        nvda: "Habilitar a cópia de informações de conquista para a área de transferência quando uma conquista for desbloqueada, para ser lida por software de leitor de tela, como o NVDA",
        tooltips: "Exibir dicas de ferramentas ao passar o mouse sobre determinados elementos da interface do usuário",
        colorprofile: `Forçar todas as janelas do aplicativo a renderizar usando o perfil de cor selecionado<br><br><span class="ttdesc">Requer reinício do aplicativo</span>`,
        pollrate: `Defina o intervalo de atualização para dados de conquistas durante o jogo<br><br><span class="ttdesc">O desempenho pode aumentar/diminuir dependendo do valor ou dos recursos de hardware do sistema. Valores mais altos normalmente resultam em uma carga de sistema mais baixa, mas podem atrasar as notificações</span>`,
        initdelay: `Ustaw opóźnienie między wykryciem bieżącego <span class="hl">AppID</span> a rozpoczęciem śledzenia procesów/osiągnięć<br><br><span class="ttdesc">Zwiększenie tej wartości może zapobiec sytuacjom, w których Steam nie może uruchomić aktualnej gry (ze względu na inicjalizację aplikacji w Steamworks przed uruchomieniem gry)</span><br><br><span class="ttdesc">Alternatywnie, zwiększenie tej wartości może być również używane do pominięcia nieprawidłowego wykrywania procesów przed uruchomieniem gry</span>`,
        releasedelay: `Define quanto tempo o processo em segundo plano espera para reiniciar após o jogo atual ser lançado. Afeta tanto o rastreamento automático de processos quanto os jogos vinculados manualmente.<br><br><span class="ttdesc">Permite um período maior para que o Steamworks seja totalmente liberado do aplicativo. Aumentar esse valor pode prevenir comportamentos incomuns, como rastrear um jogo previamente fechado</span>`,
        maxretries: `Define o número máximo de tentativas para vincular um processo em execução a um AppID detectado. Afeta tanto o rastreamento automático de processos quanto os jogos vinculados manualmente.<br><br><span class="ttdesc">As tentativas de vinculação são realizadas uma vez a cada segundo. Se um processo em execução não estiver vinculado ao AppID atual após esse número de tentativas, um processo inválido será retornado. Nessas situações, o jogo precisará ser liberado manualmente por meio da Bandeja do Sistema > Opções > Liberar Jogo</span>`,
        debug: "Abra o Painel de Depuração, que exibe informações detalhadas de rastreamento de processos",
        userust: "Use uma função alternativa baseada em Rust para verificar se os processos de jogo rastreados estão atualmente em execução no sistema. Quando não marcado, o controle de processo padrão baseado em NodeJS será usado em vez disso.",
        notifydebug: "Criar uma janela DevTools para todas as notificações. Útil para depurar/solucionar problemas de notificação",
        usecustomfiles: "Permite que as notificações carreguem arquivos personalizáveis pelo usuário. É recomendada cautela para usuários regulares",
        showcustomfiles: "Abrir o local dos arquivos personalizados",
        log: "Abrir a janela de log do aplicativo, que exibe informações sobre a atividade do processo, avisos e erros",
        reset: "Remover todos os dados de configuração e reiniciar o aplicativo",
        playback: "Pausar/continuar a animação da visualização da notificação",
        replay: "Reiniciar a animação da visualização da notificação",
        preset: "Selecionar o predefinição de notificação para personalizar",
        iconanim: "Alternar a borda e a animação do ícone de conquista rara",
        alldetails: "Exibir todos os elementos de texto dentro da notificação, incluindo aqueles ocultos por padrão para esta predefinição",
        usepercent: "Mostrar a percentagem de desbloqueio da conquista, em vez do valor XP/S",
        displaytime: "Definir o número de segundos que a notificação será exibida",
        scale: "Aumentar ou diminuir o tamanho da notificação",
        customtext: "Definir uma mensagem personalizada a ser exibida na notificação",
        usegametitle: "Mostrar o título do jogo atual na notificação",
        customfont: "Carregar uma fonte personalizada a ser usada na notificação",
        soundmode: "Selecionar um único arquivo de áudio ou um arquivo de áudio selecionado aleatoriamente de uma pasta contendo vários arquivos de áudio, quando ocorrer uma notificação",
        soundfile: "Selecionar um arquivo de áudio para reproduzir quando ocorrer uma notificação",
        sounddir: "Selecionar uma pasta na qual um arquivo de áudio será selecionado aleatoriamente quando ocorrer uma notificação",
        volume: "Definir o volume de reprodução do arquivo de áudio",
        preview: "Visualizar o arquivo de áudio selecionado ou um arquivo de áudio selecionado aleatoriamente da pasta",
        bgstyle: "Selecionar o estilo para o plano de fundo da notificação",
        gradientangle: "Definir o ângulo do gradiente",
        bgimg: "Carregar um arquivo de imagem para ser usado como plano de fundo da notificação",
        bgimgbrightness: "Defina o brilho da imagem usada como plano de fundo da notificação",
        brightness: "Definir o brilho da arte do jogo usada como plano de fundo da notificação",
        blur: "Defina o nível de desfoque aplicado ao fundo da notificação",
        roundness: "Definir a arredondamento das bordas da notificação",
        fontsize: "Definir o tamanho da fonte usada na notificação",
        opacity: "Definir a opacidade geral da notificação",
        bgonly: "Definir apenas a opacidade para o plano de fundo da notificação, mantendo os outros elementos com opacidade total",
        glow: "Ativar um efeito de brilho que envolve a notificação",
        glowcolor: "Definir a cor do efeito de brilho",
        glowsize: "Definir o tamanho do efeito de brilho",
        glowx: "Desloque a posição do efeito de brilho horizontalmente",
        glowy: "Desloque a posição do efeito de brilho verticalmente",
        glowopacity: "Defina a opacidade do efeito de brilho",
        glowanim: "Selecionar uma animação predefinida para ser aplicada ao efeito de brilho",
        glowspeed: "Definir a velocidade da animação aplicada ao efeito de brilho",
        glowrarity: "Altera a cor do efeito de brilho com base na raridade da conquista desbloqueada",
        glowcolorbronze: "A cor do brilho exibida quando a percentagem de desbloqueio é > $semirarity",
        glowcolorsilver: "A cor do brilho exibida quando a percentagem de desbloqueio é < $semirarity e > $rarity",
        glowcolorgold: "A cor do brilho exibida quando a porcentagem de desbloqueio for < $rarity",
        mask: "Ativar a máscara de partes da notificação com uma imagem personalizada",
        maskimg: `Carregar um arquivo de imagem para ser usado como máscara<br><br><span class="ttdesc">No CSS, <code class="ttcode">mask-mode: alpha</code> funciona de forma oposta ao que é normalmente esperado - áreas de transparência no arquivo de imagem serão obscurecidas e áreas pretas/cinzentas permitirão que os elementos abaixo sejam visíveis</span>`,
        useoutline: "Exibir um contorno ao redor da notificação",
        outline: "Escolha o tipo de contorno a ser exibido ao redor da notificação",
        outlinecolor: "Defina a cor do contorno ao redor da notificação",
        outlinewidth: "Defina a largura do contorno ao redor da notificação",
        primarycolor: "Definir a cor primária da notificação",
        secondarycolor: "Definir a cor secundária da notificação",
        tertiarycolor: "Definir a cor terciária da notificação",
        fontcolor: "Definir a cor de todo o texto exibido na notificação",
        fontoutline: "Adicionar um contorno a todo o texto exibido na notificação",
        fontoutlinecolor: "Definir a cor do contorno do texto",
        fontoutlinescale: "Definir a espessura do contorno do texto",
        fontshadow: "Adicionar uma sombra a todo o texto exibido na notificação",
        fontshadowcolor: "Definir a cor da sombra do texto",
        fontshadowscale: "Definir a espessura da sombra do texto",
        iconroundness: "Definir o arredondamento do ícone de conquista/jogo exibido na notificação",
        plat: "Carregar um arquivo de imagem para ser usado como o ícone de 100%",
        usegameicon: "Substituir o ícone da conquista desbloqueada pelo ícone do jogo atual",
        gameicontype: `Escolha o tipo de imagem a ser exibida como Ícone do Jogo`,
        usecustomimgicon: "Substituir o ícone da conquista desbloqueada por um arquivo de imagem personalizado",
        customimgicon: "Carregar um arquivo de imagem a ser usado como Ícone Personalizado",
        showhiddenicon: "Mostrar uma imagem indicando que a conquista está oculta na notificação",
        hiddenicon: "Carregar um arquivo de imagem para substituir o ícone da conquista oculta",
        logo: "Carregar um arquivo de imagem para substituir o ícone do Logotipo",
        decoration: "Carregar um arquivo de imagem para substituir o ícone de Decoração",
        showdecoration: "Alternar a visibilidade do ícone de Decoração",
        replacelogo: "Substituir o ícone do logotipo na notificação pela Decoração selecionada",
        pos: "Definir a posição na tela da notificação",
        usecustompos: "Ativar o posicionamento personalizado para a notificação",
        setcustompos: "Definir a posição personalizada para a notificação",
        resetcustompos: "Redefinir a posição da notificação para a posição personalizada padrão",
        updatetheme: "Atualizar o tema atual com as opções de personalização selecionadas",
        savetheme: "Salvar todas as opções de personalização configuradas como um novo tema",
        visibilitybtn: "Alternar a visibilidade do elemento em visualizações personalizadas e notificações de teste",
        delbtn: "Redefinir o elemento para o padrão",
        imgpath: "O local onde as imagens de notificação geradas por esta opção serão salvas",
        ssenabled: "Ativar ou desativar a geração de mídia para este tipo",
        checkforupdates: `Verifique se uma nova versão do aplicativo foi lançada no GitHub. Se uma atualização estiver disponível, ela será baixada e instalada automaticamente uma vez confirmada através da janela <span class="hl">Atualização Disponível</span>`,
        linkedgames: `Ignorar <span class="hl">rastreamento automático de processos</span> para jogos específicos da Steam<br><br><span class="ttdesc">Esta opção deve ser usada apenas em cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        exclusionlist: `Prevenir a rastreabilidade de conquistas em jogos específicos da Steam pela aplicação<br><br><span class="ttdesc">Esta opção deve ser usada apenas em cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        ovx: "Desloque o aviso exibido na captura de tela horizontalmente",
        ovy: "Desloque o aviso exibido na captura de tela verticalmente",
        importtheme: `Importar personalizações através de um <span class="hl">arquivo de tema</span> criado pelo usuário`,
        exporttheme: `Exportar o <span class="hl">tema</span> atualmente selecionado para compartilhamento<br><br><span class="ttdesc">Antes de tentar exportar, certifique-se de que o <span class="hl">tema</span> desejado esteja selecionado (através do menu <span class="hl">Selecionar Tema</span>). Certifique-se também de que as personalizações tenham sido salvas no <span class="hl">tema</span> selecionado (através do menu <span class="hl">Salvar Tema</span>)<br><br><u>Quaisquer personalizações ainda não salvas no <span class="hl">tema</span> atual não serão exportadas!</u></span>`,
        webhooks: "Use um URL de Webhook para postar em um servidor Discord sempre que uma conquista for desbloqueada",
        webhookmain: `Alternar se deve publicar informações de conquistas num servidor Discord quando uma conquista $main é desbloqueada`,
        webhooksemi: `Alternar se deve publicar informações de conquistas num servidor Discord quando uma conquista $semi é desbloqueada`,
        webhookrare: "Alternar se deve publicar informações de conquistas num servidor Discord quando uma conquista $rare é desbloqueada",
        webhookplat: "Alternar se deve publicar informações de conquistas num servidor Discord quando uma conquista $plat é desbloqueada",
        webhooktest: "Alternar se as informações de teste devem ser enviadas para um servidor Discord quando notificações de teste de qualquer tipo forem acionadas",
        webhookurl: `Defina o <span class="hl">URL do Webhook</span> para o servidor Discord desejado<br><br><span class="ttdesc">Um <span class="hl">URL do Webhook</span> é usado para postar em um servidor/canal Discord em nome de um usuário ou aplicativo. Para configurar um novo Webhook para um servidor Discord, o usuário deve ter um cargo no servidor desejado que permita a criação de Webhooks<br><br><u>Um URL de Webhook é necessário ao usar esta opção</u><br><br>Consulte a documentação oficial do Discord para mais informações</span>`,
        webhookspoilers: `Adicionar uma tag de spoiler para "Conquistas Ocultas" ao serem postadas no Discord`,
        unlockmsg: "Defina a posição da mensagem de desbloqueio/texto personalizado dentro do $type",
        title: "Defina a posição do título da conquista dentro do $type",
        desc: "Defina a posição da descrição da conquista dentro do $type",
        notification: "notificação",
        screenshot: "captura de tela",
        percentpos: "Defina a posição da porcentagem de raridade dentro do $type",
        sspercentpos: "Defina a posição da porcentagem de raridade dentro do $type",
        hiddeniconpos: "Defina a posição do ícone de conquista oculta/secreta dentro do $type",
        sshiddeniconpos: "Defina a posição do ícone de conquista oculta/secreta dentro do $type",
        decorationpos: "Defina a posição do elemento decorativo dentro do $type",
        ssdecorationpos: "Defina a posição do elemento decorativo dentro do $type",
        percentbadge: "Exibir a porcentagem de desbloqueio dentro de um badge colocado acima do ícone de conquista/jogo",
        sspercentbadge: "Exibir a porcentagem de desbloqueio dentro de um badge colocado acima do ícone de conquista/jogo",
        percentbadgepos: "Definir a posição do badge",
        sspercentbadgepos: "Definir a posição do badge",
        percentbadgecolor: "Definir a cor de fundo do badge",
        sspercentbadgecolor: "Definir a cor de fundo do badge",
        percentbadgefontcolor: "Defina a cor da fonte do badge",
        sspercentbadgefontcolor: "Defina a cor da fonte do badge",
        percentbadgefontsize: "Definir o tamanho do badge",
        sspercentbadgefontsize: "Definir o tamanho do badge",
        percentbadgeroundness: "Definir o arredondamento do badge",
        sspercentbadgeroundness: "Definir o arredondamento do badge",
        percentbadgex: "Deslocar a posição do elemento de emblema horizontalmente",
        sspercentbadgex: "Deslocar a posição do elemento de emblema horizontalmente",
        percentbadgey: "Deslocar a posição do elemento de emblema verticalmente",
        sspercentbadgey: "Deslocar a posição do elemento de emblema verticalmente",
        percentbadgeimg: "Exibir um ícone baseado em raridade como o elemento de emblema",
        sspercentbadgeimg: "Exibir um ícone baseado em raridade como o elemento de emblema",
        percentbadgeimgbronze: "O ícone do emblema exibido quando a percentagem de desbloqueio é > $semirarity",
        sspercentbadgeimgbronze: "O ícone do emblema exibido quando a percentagem de desbloqueio é > $semirarity",
        percentbadgeimgsilver: "O ícone do emblema exibido quando a percentagem de desbloqueio é < $semirarity e > $rarity",
        sspercentbadgeimgsilver: "O ícone do emblema exibido quando a percentagem de desbloqueio é < $semirarity e > $rarity",
        percentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < $rarity",
        sspercentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < $rarity",
        percentbadgeimgplat: "O ícone do emblema exibido quando todas as conquistas foram desbloqueadas",
        sspercentbadgeimgplat: "O ícone do emblema exibido quando todas as conquistas foram desbloqueadas",
        resetpbimgs: "Redefinir todos os ícones de emblemas para o padrão",
        elemsmatch: `Correspondência das configurações dos Elementos de Notificação definidas no Personalizador para este tipo de notificação<br><br><span class="ttdesc">Algumas Predefinições de Notificação podem não corresponder totalmente às configurações do Personalizador, devido a diferenças entre os layouts de notificação na tela e baseados em captura de tela</span>`,
        themeswitch: `Alternar automaticamente para qualquer <span class="hl">Tema</span> salvo quando um jogo específico for detectado`,
        userthemesync: `Sincronizar personalizações no <span class="hl">Tema</span> selecionado para todos os outros tipos de notificação`,
        showsystrayopts: `Exibir todas as opções geralmente localizadas em <span class="hl">Área de Notificação</span> > <span class="hl">Opções</span> em <span class="hl">Configurações</span> > <span class="hl">Diversos</span>`,
        releaseshortcut: "Liberar o jogo atualmente rastreado usando o atalho de teclado especificado",
        themeselect: "Selecione um Tema salvo anteriormente",
        statwin: `Exibir estatísticas de conquistas configuráveis para o jogo atual em uma janela externa<br><br><span class="ttdesc">Quando usado em conjunto com a opção <span class="hl">Traduzir Conquistas para o Idioma do Steam</span>, algumas traduções podem não estar disponíveis até que a conquista especificada seja desbloqueada</span>`,
        statwinaot: `Defina a sobreposição de Estatísticas de Conquistas para o modo "Sempre no Topo", permitindo que a janela seja exibida acima da janela do jogo<br><br><span class="ttdesc">Quando ativado, a sobreposição de Estatísticas de Conquistas não registrará mais interações do usuário, como eventos de "clique". Para reabilitar a interação com a janela, essa opção deve ser desativada</span>`,
        statwinshortcut: "Alternar a Sobreposição de Estatísticas de Conquistas usando o atalho de teclado especificado",
        ssdisplay: "Exibir uma prévia da captura de tela na notificação",
        iconscale: "Aumentar ou diminuir o tamanho do ícone de conquista",
        showiconborder: "Exibir uma imagem como borda ao redor do ícone de conquista",
        iconborderimg: "Carregar um arquivo de imagem para usar como borda ao redor do ícone de conquista",
        iconborderpos: "Definir se a imagem da borda será exibida à frente ou atrás do ícone de conquista",
        iconborderscale: "Aumentar ou diminuir o tamanho da borda do ícone na notificação",
        iconborderx: "Aumentar ou diminuir o deslocamento horizontal da borda do ícone na notificação",
        iconbordery: "Aumentar ou diminuir o deslocamento vertical da borda do ícone na notificação",
        iconborderrarity: "Muda a imagem da borda do ícone com base na raridade da conquista desbloqueada",
        iconborderimgbronze: "A imagem da borda do ícone exibida quando a percentagem de desbloqueio é > $semirarity",
        iconborderimgsilver: "A imagem da borda do ícone exibida quando a percentagem de desbloqueio é < $semirarity e > $rarity",
        iconshadowcolor: "Defina a cor do efeito de sombra ao redor do ícone de conquista ao desbloquear uma conquista rara",
        iconanimcolor: "Defina a cor do efeito de animação atrás do ícone de conquista ao desbloquear uma conquista rara",
        logoscale: "Aumentar ou diminuir o tamanho do elemento logo dentro da notificação",
        decorationscale: "Aumentar ou diminuir o tamanho do elemento decoração dentro da notificação",
        usecustomfontsizes: `Aumente ou diminua o tamanho de elementos de texto individuais dentro da notificação<br><br><span class="ttdesc">A preservação do layout original da notificação não pode ser garantida ao alterar os valores de tamanho de fonte individuais</span>`,
        unlockmsgfontsize: "Aumentar ou diminuir o tamanho do elemento de texto da mensagem de desbloqueio",
        titlefontsize: "Aumentar ou diminuir o tamanho do elemento de texto do título da conquista",
        descfontsize: "Aumentar ou diminuir o tamanho do elemento de texto da descrição da conquista",
        webhookembedcolormain: "Definir a cor usada na incorporação webhook quando uma conquista $main é desbloqueada",
        webhookembedcolorsemi: "Definir a cor usada na incorporação webhook quando uma conquista $semi é desbloqueada",
        webhookembedcolorrare: "Definir a cor usada na incorporação webhook quando uma conquista $rare é desbloqueada",
        webhookembedcolorplat: "Definir a cor usada na incorporação webhook quando uma conquista $plat é desbloqueada",
        raemus: "Exibir notificações quando jogos forem detectados em emuladores suportados",
        rauser: "Defina o nome de usuário do Retro Achievements para rastrear conquistas",
        rakey: `Defina a chave Web API para autenticação com a API Retro Achievements<br><br><span class="ttdesc">Uma chave Web API pode ser copiada ou regenerada ao fazer login no site do Retro Achievements e navegar para <span class="hl">Configurações > Chaves > Web API Key</span><br><br>🔒 A chave fornecida será criptografada antes de ser armazenada localmente no sistema (se o sistema operacional atual suportar criptografia)</span>`,
        rapercenttype: "Defina se deseja exibir as porcentagens de desbloqueio de conquistas Hardcore ou Softcore nas notificações",
        retroarch: `Exibir notificações do Retro Achievements para jogos emulados via RetroArch<br><br><span class="ttdesc"><span class="hl">RetroArch > Configurações > Log</span> deve ser configurado com as seguintes configurações:<br><br><ul><li><span class="hllb">Verbosity do Log</span>: <span class="hlgreen">LIGADO</span></li><li><span class="hllb">Nível de Log do Frontend</span>: <span class="hlgreen">1 (Info)</span></li><li><span class="hllb">Log para Arquivo</span>: <span class="hlgreen">LIGADO</span></li><li><span class="hllb">Timestamp para Arquivos de Log</span>: <span class="hlred">DESLIGADO</span></li></ul></span>`,
        dolphin: `Exibir notificações do Retro Achievements para jogos emulados via Dolphin<br><br><span class="ttdesc"><span class="hl">Dolphin > Exibir > Mostrar Configuração de Log</span> deve ser configurado com as seguintes configurações:<br><br><ul><li><span class="hllb">Verbosity</span>: <span class="hlgreen">Info</span></li><li><span class="hllb">Saídas do Log</span> > <span class="hlgreen">Escrever para Arquivo</span></li><li><span class="hllb">Tipos de Log</span> > <span class="hlgreen">Conquistas (RetroAchievements)</span></li></ul></span>`,
        pcsx2: `Exibir notificações do Retro Achievements para jogos emulados via PCSX2 [Nightly]<br><br><span class="ttdesc"><span class="hl">PCSX2 > Ferramentas > Ativar registro de arquivo</span> deve estar ativado</span><br><br><span class="ttdesc">❗ Devido a atualizações recentes, o conteúdo de <span class="hl">"emulog.txt"</span> só pode ser acessado na versão Nightly do PCSX2</span>`,
        duckstation: `Exibir notificações de Retro Achievements para jogos emulados via Duckstation<br><br><span class="ttdesc">❗ O arquivo <span class="dialogcode" style="background-color: var(--mediumgrey);">RA_Integration-x64.dll</span> deve ser baixado e movido para o <span class="hl">diretório de instalação do Duckstation</span></span><br><br><span class="ttdesc"><span class="hl">Duckstation > Configurações > Conquistas > RAIntegration (Somente para desenvolvedores)</span> deve estar ativado</span>`,
        retroarchpath: `Defina o caminho para o arquivo de log <span class="hl">"retroarch.log"</span> do RetroArch<br><br><span class="ttdesc">Com as configurações padrão de instalação, <span class="hl">"retroarch.log"</span> é armazenado em <span class="hllb">%SYSTEMDRIVE%\\RetroArch-Win64\\Logs</span></span>`,
        dolphinpath: `Defina o caminho para o arquivo de log <span class="hl">"dolphin.log"</span> do Dolphin<br><br><span class="ttdesc">Com as configurações padrão de instalação, <span class="hl">"dolphin.log"</span> é armazenado em um dos seguintes locais:<br><br><ul><li><span class="hllb">%APPDATA%\\Dolphin Emulator\\Logs</span></li><li><span class="hllb">%USERPROFILE%\\Documents\\Dolphin Emulator\\Logs</span></li><li>🐧 <span class="hllb">$XDG_DATA_HOME/dolphin-emu/Logs</span></li></ul></span>`,
        pcsx2path: `Defina o caminho para o arquivo de log <span class="hl">"emulog.txt"</span> do PCSX2<br><br><span class="ttdesc">Com as configurações padrão de instalação, <span class="hl">"emulog.txt"</span> é armazenado em <span class="hllb">%USERPROFILE%\\Documents\\PCSX2\\Logs</span></span>`,
        duckstationpath: `Defina o caminho para o arquivo de log <span class="hl">"RALog.txt"</span> do Duckstation<br><br><span class="ttdesc">Com as configurações padrão de instalação, <span class="hl">"RALog.txt"</span> é armazenado em <span class="hllb">%USERPROFILE%\\Downloads\\duckstation-windows-x64-release\\RACache</span></span>`,
        usecustomfontcolors: "Definir individualmente a cor dos elementos de texto na notificação",
        unlockmsgfontcolor: "Definir a cor do primeiro elemento de texto",
        titlefontcolor: "Definir a cor do segundo elemento de texto",
        descfontcolor: "Definir a cor do terceiro elemento de texto",
        exportachdata: `Exportar dados de conquista para um arquivo JSON quando uma conquista for desbloqueada<br><br><span class="ttdesc">Quando ativado, <span class="ttcode">achdata.json</span> será exportado para:<br><br><ul><li><span class="hllb">%localappdata\\Steam Achievement Notifier (V1.9)</span></li><li>🐧 <span class="hllb">~/.local/share/Steam Achievement Notifier (V1.9)</span></li></ul></span>`,
        textvspace: "Ajusta o espaçamento vertical entre os elementos de texto na notificação",
        ssmode: `Define se a captura de tela deve pegar toda a tela ou apenas a janela do jogo atual<span style="color: red;">*</span><br><br><span class="ttdesc">Se o <span class="hl">arquivo executável</span> do jogo atual não puder ser encontrado (<i>seja por meio do <span class="hl">rastreamento automático de processos</span> ou adicionando-o como um <span class="hl">Jogo Vinculado</span></i>), esta opção será definida como "Tela" por padrão</span>` ,
        replaynotify: "Repetir a última notificação de conquista",
        replaynotifyshortcut: "Repetir a última notificação de conquista usando o atalho de teclado especificado",
        replaynotifyempty: `<br><br><span class="ttdesc">A fila de repetição está vazia. Desbloqueie uma conquista para repetir uma notificação</span>`,
        uselegacynotifytimer: `Esconder notificações usando um timer estático fora da janela de notificação<br><br><span class="ttdesc">Ativar essa opção pode fazer com que as animações de notificação falhem</span>`,
        customtrigger: "Dispara uma tecla/combo a ser simulada ao desbloquear uma conquista. Pode ser usado para ativar atalhos de teclado registados em aplicações externas",
        customtriggershortcut: `Dispara a tecla/combo especificada ao desbloquear uma conquista<br><br><span class="ttdesc">Suporta entre 1-3 teclas por atalho. Para pressionamentos/combinações com menos de 3 teclas, pressione as teclas desejadas e aguarde o fim do temporizador (5s)</span>`,
        customtriggerdelay: "Atrasar a tecla/combo especificada do Gatilho Personalizado",
        customtriggerusedisplaytime: `Atrasar a tecla/combo especificada do Gatilho Personalizado com base no valor de Tempo de Exibição do tipo de notificação atual`,
        trophymode: "Substituir os tipos de notificação Principal/Raro/100% por Bronze/Prata/Ouro/Platina"
    },
    update: {
        updateavailable: "Atualização disponível",
        sub: [
            `<span id="newversion"></span>`,
            "Uma nova atualização para o Steam Achievement Notifier está disponível!",
            `Notas de lançamento completas disponíveis em <span id="discordreleasenotes"></span> e <span id="githubreleasenotes"></span>`
        ],
        update: "Atualizar"
    },
    linkgame: {
        content: {
            exepath: "Caminho do Executável",
            managesub: [
                `Associe manualmente o <span class="hl">arquivo executável</span> de um jogo a um <span class="hl">AppID</span> específico, ou <span class="hl">desassocie</span> um existente`,
                `O Steam Achievement Notifier não usará mais o <span class="hl">rastreamento automático de processos</span> para nenhum dos <span class="hl">jogos associados</span> - em vez disso, o <span class="hl">arquivo executável</span> especificado será rastreado sempre que o <span class="hl">AppID</span> associado for detectado`,
                `<span class="hl" id="appidhelp"><u>Como encontrar o AppID de um jogo Steam?</u></span>`
            ],
            linknew: "Novo Jogo Associado",
            linknewsub: [
                `Crie um novo link entre um <span class="hl">arquivo executável do jogo</span> e o <span class="hl">AppID</span> associado`,
                `Após criado, os links podem ser <span class="hl">desassociados</span> através da janela de <span class="hl">Gerenciar Jogos Associados</span>`
            ],
            linkedit: "Editar Jogo Ligado",
            linkeditsub: [
                `Edite uma ligação existente entre um <span class="hl">executável do jogo</span> e o <span class="hl">AppID</span> associado`,
                `Depois de criadas, as ligações podem ser <span class="hl">desligadas</span> através da janela anterior <span class="hl">Gerir Jogos Ligados</span>`
            ],
            link: "Associar",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Adicione o <span class="hl">AppID</span> de qualquer jogo da Steam à <span class="hl">Lista de Exclusão</span>`,
                `O Steam Achievement Notifier não tentará rastrear dados de conquistas para nenhum jogo cujo <span class="hl">AppID</span> tenha sido adicionado à <span class="hl">Lista de Exclusão</span>`,
                `<span class="hl" id="appidhelp"><u>Como encontrar o AppID de um jogo da Steam?</u></span>`
            ],
            exclusionnew: "Nova Exclusão",
            exclusionnewsub: [
                `Digite o <span class="hl">AppID</span> para adicionar à <span class="hl">Lista de Exclusão</span>`
            ],
            exclusionedit: "Editar Exclusão",
            exclusioneditsub: [
                `Edite o <span class="hl">AppID</span> existente na <span class="hl">Lista de Exclusões</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elementos de Notificação",
        content: {
            unlockmsg: "Mensagem de Desbloqueio",
            title: "Título do Conquista",
            desc: "Descrição da Conquista",
            hiddeniconpos: "Ícone Oculto",
            sshiddeniconpos: "Ícone Oculto",
            decorationpos: "Decoração",
            ssdecorationpos: "Decoração",
            percentpos: "Percentual de Raridade",
            sspercentpos: "Percentual de Raridade",
            percentbadge: "Badge de Porcentagem",
            sspercentbadge: "Badge de Porcentagem",
            percentbadgepos: "Posição do Badge",
            sspercentbadgepos: "Posição do Badge",
            percentbadgecolor: "Cor do Badge",
            sspercentbadgecolor: "Cor do Badge",
            percentbadgefontcolor: "Cor da Fonte do Badge",
            sspercentbadgefontcolor: "Cor da Fonte do Badge",
            percentbadgefontsize: "Tamanho do Badge",
            sspercentbadgefontsize: "Tamanho do Badge",
            percentbadgeroundness: "Arredondamento do Badge",
            sspercentbadgeroundness: "Arredondamento do Badge",
            percentbadgex: "Deslocamento horizontal",
            sspercentbadgex: "Deslocamento horizontal",
            percentbadgey: "Deslocamento vertical",
            sspercentbadgey: "Deslocamento vertical",
            percentbadgeimg: "Usar ícone",
            sspercentbadgeimg: "Usar ícone",
            percentbadgeimgbronze: "Raridade: > $semirarity",
            sspercentbadgeimgbronze: "Raridade: > $semirarity",
            percentbadgeimgsilver: "Raridade: < $semirarity & > $rarity",
            sspercentbadgeimgsilver: "Raridade: < $semirarity & > $rarity",
            percentbadgeimggold: "Raridade: < $rarity",
            sspercentbadgeimggold: "Raridade: < $rarity",
            resetpbimgs: "Redefinir ícones de emblemas",
            elemsmatch: "Correspondência das configurações do Personalizador",
            ssdisplay: "Prévia da captura de tela"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Adicionar o <span class="hl">AppID</span> de qualquer jogo para alternar automaticamente os <span class="hl">Temas</span> quando detectado`,
                `Qualquer <span class="hl">Tema</span> salvo pode ser selecionado para cada tipo de notificação, juntamente com o monitor desejado para ser usado como <span class="hl">Fonte de Captura de Tela</span>`,
                `<span class="hl" id="appidhelp"><u>Como encontro o AppID de um jogo da Steam?</u></span>`
            ],
            themeswitchnew: "Nova troca automática",
            themeswitchnewsub: [
                `Insira o <span class="hl">AppID</span> do jogo, juntamente com o monitor desejado para ser usado como <span class="hl">Fonte de Captura de Tela</span>`,
                `Selecione qual <span class="hl">Tema</span> alternar para cada tipo de notificação quando o <span class="hl">AppID</span> deste jogo for detectado`
            ],
            themeswitchedit: "Editar Troca Automática",
            themeswitcheditsub: [
                `Edite o monitor desejado para usar como <span class="hl">Fonte de Captura de Ecrã</span> para o <span class="hl">AppID</span> deste jogo`,
                `Altere qual <span class="hl">Tema</span> trocar para cada tipo de notificação quando for detetado o <span class="hl">AppID</span> deste jogo`
            ],
            themes: "Temas",
            src: "Fonte de Captura de Tela",
            themedeleted: "Tema excluído"
        }
    }
}

export const missingdepssub = (opt: string,dep: string) => [
    `Parece que está a tentar ativar a opção <span class="hl">${opt}</span>, mas esta opção não pode ser ativada sem primeiro instalar o pacote <code class="dialogcode">${dep}</code>`,
    `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar esta dependência`
]