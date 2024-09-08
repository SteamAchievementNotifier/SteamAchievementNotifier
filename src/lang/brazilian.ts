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
        elemselector: "Elementos da Notificação",
        unlockmsg: "Mensagem de Desbloqueio",
        title: "Título da Conquista",
        desc: "Descrição da Conquista",
        hiddeniconpos: "Ícone Oculto",
        sshiddeniconpos: "Ícone Oculto",
        decorationpos: "Decoração",
        ssdecorationpos: "Decoração",
        percentpos: "Porcentagem de Raridade",
        sspercentpos: "Porcentagem de Raridade",
        noexe: "Arquivo EXE do jogo não encontrado!",
        noexesub: `Selecione Opções > Liberar Jogo na Bandeja do Sistema para sair`,
        webhookunlockmsg: "$user desbloqueou uma conquista",
        webhookingame: "em $gamename"
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
                nowtrackingpos: "Rastreamento de Posição",
                shortcuts: "Atalhos de Notificação",
                noiconcache: "Desativar o Cache de Ícones",
                webhooks: "Postar no Servidor Discord",
                webhookurl: `URL do Webhook`,
                webhookcaution: `Ao habilitar esta opção e fornecer um link de Webhook do Discord válido, você concorda que entende que <u>todas as informações de conquistas e jogos para o usuário atual do Steam</u> serão postadas no servidor Discord especificado através do link de Webhook fornecido.<br><br>Se você não deseja que o Steam Achievement Notifier poste essas informações em seu nome, desative esta opção.`,
                webhooklaststatus: "Último Status"
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
                imgpath: "Caminho da Imagem"
            }
        },
        games: {
            title: "Jogos",
            content: {
                linkedgames: "Jogos Vinculados",
                exclusionlist: "Lista de Exclusão"
            }
        },
        accessibility: {
            title: "Acessibilidade",
            content: {
                noanim: "Desativar Animações da Janela do Aplicativo",
                noupdatedialog: "Desativar Diálogo de Atualização",
                nvda: "Ativar Suporte NVDA",
                tooltips: "Mostrar Dicas de Ferramentas"
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
                export: "Exportar"
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
        blur: "Defina o nível de desfoque aplicado ao fundo do aviso",
        brightness: "Definir o brilho da arte do jogo usada como plano de fundo da notificação",
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
        updatetheme: "Atualizar o Tema atual com as opções de personalização selecionadas",
        savetheme: "Salvar todas as opções de personalização configuradas como um novo Tema",
        visibilitybtn: "Alternar a visibilidade do elemento em visualizações personalizadas e notificações de teste",
        delbtn: "Redefinir o elemento para o padrão",
        link: `Abrir <span class="hl">Menu de Gerenciamento de Jogos Vinculados</span>`,
        imgpath: "O local onde as imagens de notificação geradas por esta opção serão salvas",
        linkedgames: `Ignorar <span class="hl">rastreamento automático de processos</span> para jogos específicos do Steam<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        exclusionlist: `Prevenir que conquistas em jogos específicos do Steam sejam rastreadas pelo aplicativo<br><br><span class="ttdesc">Esta opção deve ser usada apenas para cenários muito específicos. Os usuários não devem precisar usar esta opção em circunstâncias normais!</span>`,
        ovx: "Deslocar a notificação exibida na captura de tela horizontalmente",
        ovy: "Deslocar a notificação exibida na captura de tela verticalmente",
        importtheme: `Importar personalizações via um <span class="hl">arquivo de Tema</span> criado pelo usuário`,
        exporttheme: `Exportar o <span class="hl">Tema</span> atualmente selecionado para compartilhamento<br><br><span class="ttdesc">Antes de tentar exportar, por favor, certifique-se de que o <span class="hl">Tema</span> desejado foi selecionado (via o menu <span class="hl">Selecionar Tema</span>). Certifique-se também de que as personalizações foram salvas no <span class="hl">Tema</span> selecionado (via o menu <span class="hl">Salvar Tema</span>)<br><br><u>Quaisquer personalizações que ainda não foram salvas no <span class="hl">Tema</span> atual não serão exportadas!</u></span>`,
        webhooks: "Use uma URL de Webhook para postar em um servidor Discord sempre que uma conquista for desbloqueada",
        webhookurl: `Defina a <span class="hl">URL do Webhook</span> para o servidor Discord desejado<br><br><span class="ttdesc">Uma <span class="hl">URL do Webhook</span> é usada para postar em um servidor/canal Discord em nome de um usuário ou aplicativo. Para configurar um novo Webhook para um servidor Discord, o usuário deve ter um papel dentro do servidor desejado que permita a criação de Webhooks<br><br><u>Uma URL do Webhook é necessária ao usar esta opção</u><br><br>Consulte a documentação oficial do Discord para mais informações</span>`,
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
        ssdecorationpos: "Defina a posição do elemento de decoração dentro do $type"
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
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Parece que você está tentando ativar a opção <span class="hl">${opt}</span>. No entanto, no Linux, as capturas de tela não podem ser ativadas sem instalar o pacote <code class="dialogcode">${dep}</code> primeiro`,
    `Por favor, execute <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar essa dependência. Isso garantirá que capturas de tela possam ser tiradas neste dispositivo`
]