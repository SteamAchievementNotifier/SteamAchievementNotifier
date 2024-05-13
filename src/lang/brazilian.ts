export const translations = {
    global: {
        main: "Principal",
        rare: "Raro",
        plat: "100%",
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
        missingdepssub: [
            `Parece que você está tentando habilitar a opção <span class="hl">Tirar Captura de Tela no Steam</span>. No entanto, no Linux, capturas de tela não podem ser acionadas automaticamente sem instalar primeiro o pacote <code class="dialogcode">xdotool</code>`,
            `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> para instalar essa dependência, o que garantirá que capturas de tela no Steam possam ser realizadas neste dispositivo`
        ],
        restartapp: "Reiniciar Aplicativo",
        restartappsub: [
            `Se as coisas não estiverem funcionando corretamente, use esta opção para fechar e reabrir o aplicativo`,
            `Se o problema persistir após reiniciar o aplicativo, considere relatá-lo usando os links no aplicativo na tela inicial`
        ]
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
            title: "Idioma"
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
                extwin: "Notificações de Transmissão",
                audiosrc: "Fonte de Áudio",
                notify: "Notificação",
                app: "Aplicativo",
                nowtracking: "Mostrar Notificação de Rastreamento",
                nowtrackingscale: "Escala de Rastreamento",
                shortcuts: "Atalhos de Notificação"
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
                ovpos: "Posição da Sobreposição",
                ovmatch: "Corresponder Posição Personalizada",
                ovpath: "Caminho da Captura de Tela",
                ssdelay: "Atraso da Captura de Tela",
                notifyimg: "Imagem de Notificação",
                imgpath: "Caminho da Imagem"
            }
        },
        accessibility: {
            title: "Acessibilidade",
            content: {
                noanim: "Desativar Animações da Janela do Aplicativo",
                nvda: "Ativar Suporte NVDA",
                tooltips: "Mostrar Dicas de Ferramentas"
            }
        },
        advanced: {
            title: "Avançado",
            content: {
                pollrate: "Taxa de Pesquisa",
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
                roundness: "Arredondamento",
                fontsize: "Tamanho da Fonte",
                opacity: "Opacidade",
                bgonly: "Apenas Fundo"
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
                savetheme: "Salvar Tema",
                sub: [
                    `Os <span class="hl">Temas do Usuário</span> salvos podem ser selecionados no menu <span class="hl">Selecionar Tema</span> na tela inicial.`,
                    `Certifique-se de que o <span class="hl">Nome do Tema</span> seja <u>único</u> - um nome correspondente a um tema existente <u>irá sobrescrever o anterior</u>!`
                ],
                placeholder: "Nome do Tema",
                theme: "Tema"
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
        desktop: "Alternar um atalho na área de trabalho para executar o aplicativo",
        startwin: "Iniciar o Steam Achievement Notifier automaticamente após fazer login",
        startmin: "Após o lançamento, ocultar a janela da interface do aplicativo até ser aberta pela Bandeja do Sistema",
        nohwa: `Desativar Aceleração de Hardware, o que pode melhorar o desempenho em sistemas com recursos limitados ou sistemas sem uma GPU dedicada<br><br><span class="ttdesc">O aplicativo será reiniciado após ativar/desativar esta opção</span>`,
        litemode: "Desativar todos os elementos interativos da interface do aplicativo, fornecendo apenas funcionalidade limitada por meio do ícone da Bandeja do Sistema. Pode melhorar os recursos consumidos pelo aplicativo",
        rarity: "A porcentagem em que as notificações de conquistas raras serão acionadas. Qualquer conquista com uma porcentagem de desbloqueio acima desse valor será exibida como uma notificação principal",
        showpercent: "Exibir a porcentagem de desbloqueio da conquista na notificação para o(s) tipo(s) selecionado(s)",
        soundonly: "Desativar notificações, reproduzindo apenas sons definidos pelo Personalizador",
        extwin: "Criar uma janela de plano de fundo oculta que duplica quaisquer notificações atualmente sendo exibidas na tela. Essa janela pode ser adicionada como uma fonte de Captura de Janela para uso em software de streaming, como o OBS",
        audiosrc: "Selecionar a origem (ou desativar) o áudio gerado pelo aplicativo",
        nowtracking: "Exibir uma notificação informando ao usuário que as conquistas de um jogo em execução estão sendo rastreadas",
        nowtrackingscale: `Defina o tamanho da notificação de rastreamento`,
        shortcuts: "Acionar uma Notificação de Teste por meio de um atalho de teclado. Os atalhos podem ser personalizados para cada tipo de notificação",
        steamss: "Tirar uma captura de tela do Steam quando uma conquista for desbloqueada",
        screenshots: "Selecionar o tipo de Mídia Adicional a ser criada quando uma notificação for exibida",
        monitors: "O monitor que será capturado ao tirar a captura de tela",
        ovpos: "A posição da sobreposição de notificação na captura de tela",
        ovmatch: "Corresponder à Posição da Tela definida no Personalizador para este tipo de notificação",
        ovpath: "O local onde as capturas de tela geradas por esta opção serão salvas",
        ssdelay: "Adicionar um atraso desde quando a notificação ocorre até quando a captura de tela é tirada",
        sspreview: "Mostrar uma prévia de como a captura de tela será exibida ao ser salva",
        noanim: "Desativar todas as animações de janela no aplicativo e efeitos de transição",
        nvda: "Habilitar a cópia de informações de conquista para a área de transferência quando uma conquista for desbloqueada, para ser lida por software de leitor de tela, como o NVDA",
        tooltips: "Exibir dicas de ferramentas ao passar o mouse sobre determinados elementos da interface do usuário",
        pollrate: `Defina o intervalo de atualização para os dados de conquistas durante o jogo<br><br><span class="ttdesc">O desempenho pode aumentar/diminuir dependendo do valor ou dos recursos do sistema. Valores mais altos geralmente resultam em carga de sistema mais baixa, mas podem causar atrasos nas notificações</span>`,
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
        roundness: "Definir a arredondamento das bordas da notificação",
        fontsize: "Definir o tamanho da fonte usada na notificação",
        opacity: "Definir a opacidade geral da notificação",
        bgonly: "Definir apenas a opacidade para o plano de fundo da notificação, mantendo os outros elementos com opacidade total",
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
        usegameicon: "Substituir o ícone de notificação padrão pelo ícone do jogo atual",
        showhiddenicon: "Exibir uma imagem indicando que a conquista está oculta no aviso",
        hiddenicon: "Carregar um arquivo de imagem para substituir o ícone de conquista oculta",
        logo: "Carregar um arquivo de imagem para substituir o ícone de Logotipo",
        decoration: "Carregar um arquivo de imagem para substituir o ícone de Decoração",
        showdecoration: "Alternar a visibilidade do ícone de Decoração",
        replacelogo: "Substituir o ícone do logotipo na notificação pela Decoração selecionada",
        pos: "Definir a posição na tela da notificação",
        usecustompos: "Habilitar posicionamento personalizado para a notificação",
        setcustompos: "Definir a posição personalizada para a notificação",
        resetcustompos: "Redefinir a posição da notificação para a posição personalizada padrão",
        savetheme: "Salvar todas as opções de personalização configuradas como um novo Tema",
        visibilitybtn: "Alternar a visibilidade do elemento em visualizações personalizadas e notificações de teste",
        delbtn: "Redefinir o elemento para o padrão",
        link: `Abrir <span class="hl">Menu de Gerenciamento de Jogos Vinculados</span>`,
        imgpath: "O local onde as imagens de notificação geradas por esta opção serão salvas"
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
    "linkgame": {
        "content": {
            "exepath": "Caminho do Executável",
            "nodata": "Sem Dados",
            "manage": "Gerenciar Jogos Vinculados",
            "managesub": [
                `Vincule manualmente o arquivo executável de um jogo a um <span class="hl">AppID</span> específico, ou <span class="hl">desvincule</span> um existente`,
                `O Steam Achievement Notifier não usará mais o <span class="hl">rastreamento automático de processos</span> para nenhum <span class="hl">jogo vinculado</span> - em vez disso, o arquivo executável especificado será rastreado sempre que o <span class="hl">AppID</span> associado for detectado`,
                `<span class="hl" id="appidhelp"><u>Como encontrar o AppID de um jogo Steam?</u></span>`
            ],
            "new": "Novo...",
            "linknew": "Novo Jogo Vinculado",
            "linknewsub": [
                `Crie um novo vínculo entre um <span class="hl">arquivo executável de jogo</span> e o <span class="hl">AppID</span> associado`,
                `Uma vez criados, os vínculos podem ser <span class="hl">desvinculados</span> através do diálogo anterior de <span class="hl">Gerenciar Jogos Vinculados</span>`
            ],
            "link": "Vincular",
            "findappid": "Encontrar AppID",
            "findappidsub": [
                `Cada jogo do Steam possui um número único associado a ele - chamado de <span class="hl">AppID</span>. Você pode encontrar o AppID associado a qualquer jogo do Steam verificando um dos seguintes:`,
                `No <span class="hl">cliente Steam</span>, clique com o botão direito do mouse em um jogo em sua <span class="hl">Biblioteca</span> e selecione <i>Propriedades</i> > <i>Atualizações</i> - o AppID será listado aqui`,
                `A <span class="hl">URL</span> da página da <span class="hl">loja</span> do jogo - será o número listado após <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
                `Websites como <span class="hl">SteamDB</span> - a seção <span class="hl">Informações do App</span> listará o AppID para cada jogo`
            ]
        }
    }
}