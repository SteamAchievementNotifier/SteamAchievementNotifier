export const translations = {
    global: {
        main: "Principal",
        rare: "Raro",
        plat: "100%",
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
        noexesub: `Selecione Opções > Sair do Jogo na Bandeja do Sistema para sair`,
        webhookunlockmsg: "$user desbloqueou uma conquista",
        webhookingame: "em $gamename",
        notconnected: "Não conectado"
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
                rarity: "Percentagem de Raridade",
                rareonly: "Apenas Raros",
                all: "Tudo",
                off: "Desligado",
                showpercent: "Mostrar Percentagem",
                soundonly: "Apenas Som",
                extwin: "Notificações de Transmissão",
                audiosrc: "Fonte de Áudio",
                notify: "Notificar",
                app: "Aplicativo",
                nowtracking: "Mostrar Notificação de Rastreio",
                nowtrackingscale: "Escala de Rastreio",
                nowtrackingpos: "Posição de Rastreio",
                shortcuts: "Atalhos de Notificação",
                noiconcache: "Desativar o Cache de Ícones",
                webhooks: "Postar no servidor Discord",
                webhookurl: `URL do Webhook`,
                webhookcaution: `Ao habilitar esta opção e fornecer um link de Webhook do Discord válido, você concorda que entende que <u>todas as informações sobre conquistas e jogos para o usuário Steam atual</u> serão postadas no servidor Discord especificado através do link de Webhook fornecido.<br><br>Se você não deseja que o Steam Achievement Notifier publique essas informações em seu nome, desative esta opção.`,
                webhooklaststatus: "Último Status"
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
                imgpath: "Caminho da Imagem"
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
        accessibility: {
            title: "Acessibilidade",
            content: {
                noanim: "Desativar Animações da Janela do Aplicativo",
                noupdatedialog: "Desativar diálogo de atualização",
                nvda: "Ativar Suporte NVDA",
                tooltips: "Mostrar Dicas de Ferramentas",
                showsystrayopts: "Mostrar opções da área de notificação"
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
                usecustomfiles: "Utilizar Arquivos Personalizados da Aplicação",
                showcustomfiles: "Mostrar Arquivos Personalizados da Aplicação"
            }
        },        
        misc: {
            title: "Diversos",
            content: {
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
                plat: "Logo 100%",
                usegameicon: "Usar Ícone do Jogo",
                logo: "Logo",
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
                syncedwith: "Sincronizado com"
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
        rarity: "A porcentagem em que as notificações de conquistas raras serão acionadas. Qualquer conquista com uma porcentagem de desbloqueio acima desse valor será exibida como uma notificação principal",
        showpercent: "Exibir a porcentagem de desbloqueio da conquista na notificação para o(s) tipo(s) selecionado(s)",
        soundonly: "Desativar notificações, reproduzindo apenas sons definidos por meio do Personalizador",
        extwin: "Criar uma janela de plano de fundo oculta que duplica quaisquer notificações atualmente sendo exibidas na tela. Essa janela pode ser adicionada como uma fonte de captura de janela para uso em software de streaming, como OBS",
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
        mask: "Ativar a máscara de partes da notificação com uma imagem personalizada",
        maskimg: `Carregar um arquivo de imagem para ser usado como máscara<br><br><span class="ttdesc">No CSS, <code class="ttcode">mask-mode: alpha</code> funciona de forma oposta ao que é normalmente esperado - áreas de transparência no arquivo de imagem serão obscurecidas e áreas pretas/cinzentas permitirão que os elementos abaixo sejam visíveis</span>`,
        outline: "Escolha o tipo de contorno a ser exibido ao redor da notificação",
        outlinecolor: "Defina a cor do contorno ao redor da notificação",
        outlinewidth: "Defina a largura do contorno ao redor da notificação",
        primarycolor: "Definir a cor primária da notificação",
        secondarycolor: "Definir a cor secundária da notificação",
        tertiarycolor: "Definir a cor terciária da notificação",
        fontcolor: "Definir a cor de todo o texto exibido na notificação",
        fontoutline: "Adicionar um contorno a todo o texto exibido na notificação",
        fontoutlinecolor: "Definir a cor do contorno do texto",
        fontshadow: "Adicionar uma sombra a todo o texto exibido na notificação",
        fontshadowcolor: "Definir a cor da sombra do texto",
        iconroundness: "Definir o arredondamento do ícone de conquista/jogo exibido na notificação",
        plat: "Carregar um arquivo de imagem para ser usado como o ícone de 100%",
        usegameicon: "Substituir o ícone de notificação padrão pelo ícone do jogo atual",
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
        checkforupdates: `Verifique se uma nova versão do aplicativo foi lançada no GitHub. Se uma atualização estiver disponível, ela será baixada e instalada automaticamente uma vez confirmada através da janela <span class="hl">Atualização Disponível</span>`,
        linkedgames: `Ignorar <span class="hl">rastreamento automático de processos</span> para jogos específicos da Steam<br><br><span class="ttdesc">Esta opção deve ser usada apenas em cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        exclusionlist: `Prevenir a rastreabilidade de conquistas em jogos específicos da Steam pela aplicação<br><br><span class="ttdesc">Esta opção deve ser usada apenas em cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        ovx: "Desloque o aviso exibido na captura de tela horizontalmente",
        ovy: "Desloque o aviso exibido na captura de tela verticalmente",
        importtheme: `Importar personalizações através de um <span class="hl">arquivo de tema</span> criado pelo usuário`,
        exporttheme: `Exportar o <span class="hl">tema</span> atualmente selecionado para compartilhamento<br><br><span class="ttdesc">Antes de tentar exportar, certifique-se de que o <span class="hl">tema</span> desejado esteja selecionado (através do menu <span class="hl">Selecionar Tema</span>). Certifique-se também de que as personalizações tenham sido salvas no <span class="hl">tema</span> selecionado (através do menu <span class="hl">Salvar Tema</span>)<br><br><u>Quaisquer personalizações ainda não salvas no <span class="hl">tema</span> atual não serão exportadas!</u></span>`,
        webhooks: "Use um URL de Webhook para postar em um servidor Discord sempre que uma conquista for desbloqueada",
        webhookurl: `Defina o <span class="hl">URL do Webhook</span> para o servidor Discord desejado<br><br><span class="ttdesc">Um <span class="hl">URL do Webhook</span> é usado para postar em um servidor/canal Discord em nome de um usuário ou aplicativo. Para configurar um novo Webhook para um servidor Discord, o usuário deve ter um cargo no servidor desejado que permita a criação de Webhooks<br><br><u>Um URL de Webhook é necessário ao usar esta opção</u><br><br>Consulte a documentação oficial do Discord para mais informações</span>`,
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
        percentbadgeimgbronze: "O ícone do emblema a ser exibido quando a porcentagem de desbloqueio é > 50%",
        sspercentbadgeimgbronze: "O ícone do emblema exibido quando a porcentagem de desbloqueio é > 50%",
        percentbadgeimgsilver: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < 50% e > $rarity",
        sspercentbadgeimgsilver: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < 50% e > $rarity",
        percentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < $rarity",
        sspercentbadgeimggold: "O ícone do emblema exibido quando a porcentagem de desbloqueio é < $rarity",
        resetpbimgs: "Redefinir todos os ícones de emblemas para o padrão",
        elemsmatch: `Correspondência das configurações dos Elementos de Notificação definidas no Personalizador para este tipo de notificação<br><br><span class="ttdesc">Algumas Predefinições de Notificação podem não corresponder totalmente às configurações do Personalizador, devido a diferenças entre os layouts de notificação na tela e baseados em captura de tela</span>`,
        themeswitch: `Alternar automaticamente para qualquer <span class="hl">Tema</span> salvo quando um jogo específico for detectado`,
        userthemesync: `Sincronizar personalizações no <span class="hl">Tema</span> selecionado para todos os outros tipos de notificação`,
        showsystrayopts: `Exibir todas as opções geralmente localizadas em <span class="hl">Área de Notificação</span> > <span class="hl">Opções</span> em <span class="hl">Configurações</span> > <span class="hl">Diversos</span>`
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
            percentbadgeimgbronze: "Raridade: > 50%",
            sspercentbadgeimgbronze: "Raridade: > 50%",
            percentbadgeimgsilver: "Raridade: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Raridade: < 50% & > $rarity%",
            percentbadgeimggold: "Raridade: < $rarity%",
            sspercentbadgeimggold: "Raridade: < $rarity%",
            resetpbimgs: "Redefinir ícones de emblemas",
            elemsmatch: "Correspondência das configurações do Personalizador"
        }
    },
    themeswitch: {
        content: {
            "managesub": [
                `Adicionar o <span class="hl">AppID</span> de qualquer jogo para alternar automaticamente os <span class="hl">Temas</span> quando detectado`,
                `Qualquer <span class="hl">Tema</span> salvo pode ser selecionado para cada tipo de notificação, juntamente com o monitor desejado para ser usado como <span class="hl">Fonte de Captura de Tela</span>`,
                `<span class="hl" id="appidhelp"><u>Como encontro o AppID de um jogo da Steam?</u></span>`
            ],
            "themeswitchnew": "Nova troca automática",
            "themeswitchnewsub": [
                `Insira o <span class="hl">AppID</span> do jogo, juntamente com o monitor desejado para ser usado como <span class="hl">Fonte de Captura de Tela</span>`,
                `Selecione qual <span class="hl">Tema</span> alternar para cada tipo de notificação quando o <span class="hl">AppID</span> deste jogo for detectado`
            ],
            "themes": "Temas",
            "src": "Fonte de Captura de Tela"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Parece que você está tentando habilitar a opção <span class="hl">${opt}</span>. No entanto, em sistemas Linux, não é possível habilitar capturas de tela sem instalar primeiro o pacote <code class="dialogcode">${dep}</code>`,
    `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar esta dependência. Isso garantirá que capturas de tela possam ser feitas neste dispositivo`
]