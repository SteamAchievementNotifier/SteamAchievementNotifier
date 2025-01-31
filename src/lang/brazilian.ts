export const translations = {
    global: {
        main: "Principal",
        rare: "Raro",
        plat: "100%",
        test: "Testar Notificações",
        topleft: "Superior Esquerdo",
        topcenter: "Superior Central",
        topright: "Superior Direito",
        bottomleft: "Inferior Esquerdo",
        bottomcenter: "Inferior Central",
        bottomright: "Inferior Direito",
        ok: "OK",
        preview: "Visualização",
        save: "Salvar",
        back: "Voltar",
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
            `O Steam Achievement Notifier não conseguiu localizar automaticamente o arquivo executável deste jogo. O local do arquivo executável é necessário para "liberar" o jogo`,
            `Para liberar o jogo manualmente, <i>clique com o botão direito</i> no <span class="hl">ícone da Bandeja do Sistema</span> > <span class="hl">Opções</span> > <span class="hl">Liberar Jogo</span>, ou use o <span class="hl">Atalho para Liberar Jogo</span>`,
            `Como alternativa, clique no botão <span class="hl">Vincular</span> abaixo para adicionar o arquivo executável associado à janela em foco ao menu <span class="hl">Jogos Vinculados</span>`,
            `<span class="hl help" id="linkgamehelp"><u>O que acontece quando eu clico no botão Vincular?</u></span>`
        ],
        linkgamehelp: "Vincular Jogo pela Janela",
        linkgamehelpsub: [
            `Clicar no botão <span class="hl">Vincular</span> adicionará automaticamente uma nova entrada ao menu <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span>, usando as informações da janela atualmente em foco.`,
            `Após clicar no botão <span class="hl">Vincular</span>, um cronômetro de 5 segundos será iniciado`,
            `Antes de o cronômetro terminar, coloque a janela do jogo em foco`,
            `Quando o cronômetro terminar, uma nova entrada para o <span class="hl">AppID</span> atual será adicionada ao menu <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span>, usando o arquivo executável associado à janela em foco`,
            `Se precisar tentar novamente, remova a entrada em <span class="hl">Configurações</span> > <span class="hl">Jogos Vinculados</span> clicando no botão <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "Não foi possível vincular a janela",
        addlinkfailedsub: `Clique no botão <span class="hl">Vincular</span> para tentar novamente`,
        webhookunlockmsg: "$user desbloqueou uma conquista",
        webhookunlockmsgplat: "$user desbloqueou todas as conquistas",
        webhookingame: "em $gamename",
        notconnected: "Não conectado"
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
                webhookspoilers: `Adicionar Tag de Spoiler`
            }
        },
        games: {
            title: "Jogos",
            content: {
                linkedgames: "Jogos Vinculados",
                themeswitch: "Trocar Temas Automaticamente",
                exclusionlist: "Lista de Exclusão"
            }
        },
        media: {
            title: "Mídia",
            content: {
                steamss: "Tirar Captura de Tela do Steam",
                screenshots: "Mídia Adicional",
                off: "Desativado",
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
                statwinshortcut: "Atalho do Sobrepor"
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
                releaseshortcut: "Atalho para Liberar Jogo"
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
                usecustomfiles: "Usar Arquivos de Aplicativo Personalizados",
                showcustomfiles: "Mostrar Arquivos de Aplicativo Personalizados"
            }
        },
        misc: {
            title: "Diversos",
            content: {
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
                bgimgbrightness: "Luminosidade",
                brightness: "Luminosidade",
                blur: "Desfoque",
                roundness: "Arredondamento",
                fontsize: "Tamanho da Fonte",
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
                off: "Nenhum",
                pulse: "Pulso",
                rainbow: "Arco-íris",
                mask: "Máscara",
                maskimg: "Imagem da Máscara",
                outline: "Contorno",
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
                fontcolor: "Cor da Fonte",
                fontoutline: "Contorno da Fonte",
                fontoutlinecolor: "Cor do Contorno da Fonte",
                fontshadow: "Sombra da Fonte",
                fontshadowcolor: "Cor da Sombra da Fonte"
            }
        },
        icons: {
            title: "Ícones",
            content: {
                iconroundness: "Arredondamento do Ícone",
                plat: "Logotipo 100%",
                usegameicon: "Usar Ícone do Jogo",
                gameicontype: "Tipo de Ícone do Jogo",
                usecustomimgicon: "Usar Ícone Personalizado",
                customimgicon: "Ícone Personalizado",
                icon: "Ícone",
                logo: "Logotipo",
                decoration: "Decoração",
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
                themeselect: "Tema Selecionado"
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
        rarity: "A porcentagem em que as notificações de conquistas raras serão acionadas. Qualquer conquista com uma porcentagem de desbloqueio acima desse valor será exibida como uma notificação principal",
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
        pollrate: `Defina o intervalo de atualização para os dados de conquistas durante o jogo<br><br><span class="ttdesc">O desempenho pode aumentar/diminuir dependendo do valor ou dos recursos do sistema. Valores mais altos geralmente resultam em carga de sistema mais baixa, mas podem causar atrasos nas notificações</span>`,
        initdelay: `Defina o atraso entre a detecção do <span class="hl">AppID</span> atual e o início do rastreamento de processos/conquistas<br><br><span class="ttdesc">Aumentar este valor pode evitar cenários em que o Steam não consegue iniciar o jogo atual (devido à inicialização do aplicativo no Steamworks antes de o jogo ser iniciado)</span><br><br><span class="ttdesc">Alternativamente, aumentar este valor também pode ser usado para evitar a detecção incorreta de processos de inicialização antes do jogo</span>`,
        releasedelay: `Define por quanto tempo o processo de Fundo espera para reiniciar após o jogo atual ser lançado. Afeta tanto o rastreamento automático do processo quanto os jogos vinculados manualmente.<br><br><span class="ttdesc">Permite um período maior para que o Steamworks seja totalmente liberado do aplicativo. Aumentar esse valor pode prevenir comportamentos incomuns, como rastrear um jogo previamente fechado</span>`,
        maxretries: `Define o número máximo de tentativas para vincular um processo em execução a um AppID detectado. Afeta tanto o rastreamento automático do processo quanto os jogos vinculados manualmente.<br><br><span class="ttdesc">As tentativas de retenção são realizadas a cada segundo. Se um processo em execução não estiver vinculado ao AppID atual após esse número de tentativas, um processo inválido será retornado. Nesses casos, o jogo precisará ser lançado manualmente através de Bandeja do Sistema > Opções > Lançar o Jogo</span>`,
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
        mask: "Ativar a máscara de partes do aviso com uma imagem personalizada",
        maskimg: `Carregar um arquivo de imagem para ser usado como máscara<br><br><span class="ttdesc">No CSS, <code class="ttcode">mask-mode: alpha</code> opera de forma oposta ao que é geralmente esperado - áreas de transparência no arquivo de imagem serão obscurecidas, e áreas pretas/cinzentas permitirão que os elementos abaixo sejam visíveis</span>`,
        outline: "Selecione o tipo de contorno a ser mostrado ao redor da notificação",
        outlinecolor: "Defina a cor do contorno ao redor da notificação",
        outlinewidth: "Defina a largura do contorno ao redor da notificação",
        primarycolor: "Definir a cor primária da notificação",
        secondarycolor: "Definir a cor secundária da notificação",
        tertiarycolor: "Definir a cor terciária da notificação",
        fontcolor: "Definir a cor do texto exibido na notificação",
        fontoutline: "Adicionar um contorno a todo o texto exibido na notificação",
        fontoutlinecolor: "Definir a cor do contorno do texto",
        fontshadow: "Adicionar uma sombra a todo o texto exibido na notificação",
        fontshadowcolor: "Definir a cor da sombra do texto",
        iconroundness: "Definir o arredondamento do ícone de conquista/jogo exibido na notificação",
        plat: "Carregar um arquivo de imagem para ser usado como o ícone de 100%",
        showhiddenicon: "Exibir uma imagem indicando que a conquista está oculta no aviso",
        usegameicon: "Substituir o ícone da conquista desbloqueada pelo ícone do jogo atual",
        gameicontype: `Selecione qual tipo de imagem exibir como Ícone do Jogo`,
        usecustomimgicon: "Substituir o ícone da conquista desbloqueada por um arquivo de imagem personalizado",
        customimgicon: "Carregar um arquivo de imagem para ser usado como Ícone Personalizado",
        hiddenicon: "Carregar um arquivo de imagem para substituir o ícone de conquista oculta",
        logo: "Carregar um arquivo de imagem para substituir o ícone de Logotipo",
        decoration: "Carregar um arquivo de imagem para substituir o ícone de Decoração",
        showdecoration: "Alternar a visibilidade do ícone de Decoração",
        replacelogo: "Substituir o ícone do logotipo na notificação pela Decoração selecionada",
        pos: "Definir a posição na tela da notificação",
        usecustompos: "Habilitar posicionamento personalizado para a notificação",
        setcustompos: "Definir a posição personalizada para a notificação",
        resetcustompos: "Redefinir a posição da notificação para a posição personalizada padrão",
        updatetheme: "Atualizar o Tema atual com as opções de personalização selecionadas",
        savetheme: "Salvar todas as opções de personalização configuradas como um novo Tema",
        visibilitybtn: "Alternar a visibilidade do elemento em visualizações personalizadas e notificações de teste",
        delbtn: "Redefinir o elemento para o padrão",
        imgpath: "O local onde as imagens de notificação geradas por esta opção serão salvas",
        checkforupdates: `Verifique se uma nova versão do aplicativo foi lançada no GitHub. Se uma atualização estiver disponível, ela será baixada e instalada automaticamente após a confirmação na janela <span class="hl">Atualização Disponível</span>`,
        linkedgames: `Ignorar <span class="hl">rastreamento automático de processos</span> para jogos específicos do Steam<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        exclusionlist: `Prevenir que conquistas em jogos específicos do Steam sejam rastreadas pelo aplicativo<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        ovx: "Deslocar a notificação exibida na captura de tela horizontalmente",
        ovy: "Deslocar a notificação exibida na captura de tela verticalmente",
        importtheme: `Importar personalizações via um <span class="hl">arquivo de Tema</span> criado pelo usuário`,
        exporttheme: `Exportar o <span class="hl">Tema</span> atualmente selecionado para compartilhamento<br><br><span class="ttdesc">Antes de tentar exportar, por favor, certifique-se de que o <span class="hl">Tema</span> desejado foi selecionado (via o menu <span class="hl">Selecionar Tema</span>). Certifique-se também de que as personalizações foram salvas no <span class="hl">Tema</span> selecionado (via o menu <span class="hl">Salvar Tema</span>)<br><br><u>Quaisquer personalizações que ainda não foram salvas no <span class="hl">Tema</span> atual não serão exportadas!</u></span>`,
        webhooks: "Use uma URL de Webhook para postar em um servidor Discord sempre que uma conquista for desbloqueada",
        webhookmain: `Alternar se as informações de conquistas serão enviadas para um servidor Discord ao desbloquear uma conquista principal`,
        webhookrare: "Alternar se as informações de conquistas serão enviadas para um servidor Discord ao desbloquear uma conquista rara",
        webhookplat: "Alternar se as informações de conquistas serão enviadas para um servidor Discord ao desbloquear uma conquista de 100%",
        webhooktest: "Alternar se as informações de teste devem ser enviadas para um servidor do Discord quando notificações de teste de qualquer tipo forem acionadas",
        webhookurl: `Defina a <span class="hl">URL do Webhook</span> para o servidor Discord desejado<br><br><span class="ttdesc">Uma <span class="hl">URL do Webhook</span> é usada para postar em um servidor/canal Discord em nome de um usuário ou aplicativo. Para configurar um novo Webhook para um servidor Discord, o usuário deve ter um papel dentro do servidor desejado que permita a criação de Webhooks<br><br><u>Uma URL do Webhook é necessária ao usar esta opção</u><br><br>Consulte a documentação oficial do Discord para mais informações</span>`,
        webhookspoilers: `Adicionar uma tag de spoiler para conquistas "Ocultas" ao postar no Discord`,
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
        percentbadgeimgbronze: "O ícone do emblema a ser exibido quando a porcentagem de desbloqueio for > 50%",
        sspercentbadgeimgbronze: "O ícone do emblema exibido quando a porcentagem de desbloqueio for > 50%",
        percentbadgeimgsilver: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < 50% e > $rarity",
        sspercentbadgeimgsilver: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < 50% e > $rarity",
        percentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < $rarity",
        sspercentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio for < $rarity",
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
        ssdisplay: "Exibir uma prévia da captura de tela dentro da notificação"
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
                `Vincule manualmente o arquivo executável de um jogo a um <span class="hl">AppID</span> específico, ou <span class="hl">desvincule</span> um existente`,
                `O Steam Achievement Notifier não usará mais o <span class="hl">rastreamento automático de processos</span> para nenhum <span class="hl">jogo vinculado</span> - em vez disso, o arquivo executável especificado será rastreado sempre que o <span class="hl">AppID</span> associado for detectado`,
                `<span class="hl" id="appidhelp"><u>Como encontrar o AppID de um jogo Steam?</u></span>`
            ],
            linknew: "Novo Jogo Vinculado",
            linknewsub: [
                `Crie um novo vínculo entre um <span class="hl">arquivo executável de jogo</span> e o <span class="hl">AppID</span> associado`,
                `Uma vez criados, os vínculos podem ser <span class="hl">desvinculados</span> através do diálogo anterior de <span class="hl">Gerenciar Jogos Vinculados</span>`
            ],
            link: "Vincular",
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
            percentbadgeimgbronze: "Raridade: > 50%",
            sspercentbadgeimgbronze: "Raridade: > 50%",
            percentbadgeimgsilver: "Raridade: < 50% e > $rarity%",
            sspercentbadgeimgsilver: "Raridade: < 50% e > $rarity%",
            percentbadgeimggold: "Raridade: < $rarity%",
            sspercentbadgeimggold: "Raridade: < $rarity%",
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
            themes: "Temas",
            src: "Fonte da Captura de Tela",
            themedeleted: "Tema excluído"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Parece que você está tentando ativar a opção <span class="hl">${opt}</span>. No entanto, no Linux, as capturas de tela não podem ser ativadas sem instalar o pacote <code class="dialogcode">${dep}</code> primeiro`,
    `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar essa dependência. Isso garantirá que capturas de tela possam ser tiradas neste dispositivo`
]