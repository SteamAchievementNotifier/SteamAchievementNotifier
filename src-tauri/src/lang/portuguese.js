export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Nenhum usuário detectado",
                tt: "O usuário do Steam para o qual as conquistas estão sendo rastreadas"
            },
            gamelbl: {
                elem: gameName ? gameName : "Nenhum jogo detectado",
                tt: "O jogo para o qual as conquistas estão sendo rastreadas"
            },
            previewbtn: {
                tt: "Visualizar o som selecionado"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Padrão (Nenhum arquivo de som selecionado)" : custom.sounddir ? custom.sounddir : "Padrão (Nenhum diretório de som selecionado)"
            },              
            soundmodelbl: {
                elem: "Modo de Som:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "arquivo" : "aleatório"
            },
            togglemain: {
                elem: "Principal",
                tt: "Notificação de Conquista Principal"
            },
            togglerare: {
                elem: "Raro",
                tt: "Notificação de Conquista Rara"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notificação de Conquista 100%"
            },
            progresscirclewrapper: {
                tt: "Mostrar uma prévia da notificação personalizada"
            },
            testbtnwrapper: {
                elem: "Mostrar Notificação de Teste",
                tt: "Mostrar uma prévia da notificação personalizada",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Personalizar...",
                tt: "Abrir o menu de personalização da notificação",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam não está em execução"
            },
            updatebtn: {
                tt: "Atualização disponível"
            },
            kofibtn: "Faça uma doação no Ko-Fi!",
            discordbtn: "Junte-se no Discord!",
            githubbtn: "Reportar problema no GitHub!",
            settingstitlelbl: {
                elem: "Configurações"
            },
            configuration: {
                elem: "Configuração",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Idioma",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "Sistema Operacional",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notificações",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Capturas de Tela",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Acessibilidade",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Outros",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versão"
            },            
            apikeybtn: {
                tt: "Clique aqui para obter sua chave da Steam Web API"
            },
            apikey: {
                placeholder: "Digite sua chave de API",
                tt: "A chave da Steam Web API associada à sua conta Steam"
            },
            eyebtn: {
                tt: "Alternar visibilidade da chave da API"
            },
            apikeylbl: {
                elem: "Obter Chave da API"
            },
            steam64idbtn: {
                tt: "Clique aqui para obter seu Steam64 ID"
            },
            steam64id: {
                placeholder: "Digite seu ID Steam64",
                tt: "O Steam64 ID associado à sua conta Steam"
            },
            steam64idlbl: {
                elem: "Obter Steam64 ID"
            },
            switchaccountspan: {
                elem: "Trocar Contas"
            },
            switchaccountbtn: {
                tt: "Alternar entre contas Steam vinculadas"
            },
            testconnectionlbl: {
                elem: "Testar Conexão",
                tt: "Teste sua conexão com a Steam Web API"
            },
            lang: {
                tt: "Definir idioma para a interface do usuário e notificações"
            },            
            desktop: {
                elem: "Criar Atalho na Área de Trabalho",
                tt: "Criar um atalho na área de trabalho para iniciar o aplicativo",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Iniciar com o Windows",
                tt: "Executar o aplicativo automaticamente quando o Windows iniciar",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Iniciar Minimizado",
                tt: "Minimizar o aplicativo para a bandeja do sistema após o lançamento",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Desativar Aceleração de Hardware",
                tt: "Desativar a aceleração de hardware para a janela do aplicativo",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Modo Lite",
                tt: "Desativa a janela principal do aplicativo para economizar recursos do sistema. Opções mínimas permanecerão disponíveis por meio do ícone da bandeja do sistema para interagir com o aplicativo",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Porcentagem de Raridade",
                tt: `Apenas conquistas com uma porcentagem global de desbloqueio abaixo desse número serão exibidas como notificações "Raras"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Modo Somente Som",
                tt: "Desativar notificações, mas reproduz o som selecionado ao desbloquear uma conquista",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Mostrar Todas as Porcentagens",
                tt: "Exibir as porcentagens de desbloqueio global em todos os tipos de notificação",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicar para Janela Externa",
                tt: `Uma janela externa que duplica todas as notificações. Pode ser alvo de software de streaming/captura de ecrã.<div class="ttwarn">Esta janela é <u>totalmente transparente</u>. Para destacar a posição atual da janela, mantenha premida a tecla <span class="ttcode">Ctrl</span>.</div>`,
                query: ".sanboxlbl"
            },
            track: {
                elem: `Mostrar Notificação "Agora Rastreando"`,
                tt: `Alternar a notificação "Agora Rastreando" ao iniciar um jogo`,
                query: ".sanboxlbl"
            },
            shortcuts: {
                elem: "Atalhos de Notificação",
                tt: "Defina um atalho de teclado para acionar Notificações de Teste",
                query: ".sanboxlbl"
            },
            scbtn: {
                tt: "Defina um atalho para acionar uma Notificação de Teste para este tipo"
            },
            sctabmain: {
                tt: "Atalho Principal de Notificação"
            },
            sctabrare: {
                tt: "Atalho Raro de Notificação"
            },
            sctabplat: {
                tt: "Atalho de Notificação 100%"
            },
            screenshotmode: {
                tt: "Escolha o modo para capturas de tela automáticas de conquistas"
            },
            displayscreenshot: {
                elem: "Exibir Captura de Tela na Notificação",
                tt: "Exibir uma prévia das capturas de tela dentro da notificação de conquista",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Atalho de Captura de Tela do Steam",
                tt: "Combine o atalho do cliente Steam para capturar capturas de tela nativas do Steam ao desbloquear conquistas",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: `Overlay de Notificação Principal`
            },
            ovtabrare: {
                tt: `Overlay de Notificação Rara`
            },
            ovtabplat: {
                tt: `Overlay de Notificação 100%`
            },
            monitor: {
                elem: "Monitor",
                tt: "Selecione o monitor a ser usado como fonte de captura de tela",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Posição",
                tt: "Defina a posição do overlay de notificação",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Caminho",
                tt: "Defina o caminho onde as capturas de tela serão salvas",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Visualizar",
                tt: `Visualizar o overlay de notificação`,
                query: "label"
            },
            noanim: {
                elem: "Desativar Animações da Janela",
                tt: "Desativar animações de transição dentro da janela do aplicativo",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Ativar Suporte NVDA",
                tt: "Copiar o conteúdo da notificação para a área de transferência para ser lido pelo software de leitor de tela NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Mostrar Dicas de Ferramentas",
                tt: "Alternar dicas de ferramentas ao passar o mouse sobre os elementos do aplicativo",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Mostrar DevTools de Notificação",
                tt: "Abrir o painel de DevTools de notificação ao ser acionado",
                query: ".sanboxlbl"
            },
            filesystem: {
                elem: "Carregamento de Arquivos",
                tt: `Carregar arquivos de notificação e recursos a partir do diretório executável do aplicativo, em vez de internamente`,
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Visualizar Política de Privacidade",
                tt: "Visualizar a Política de Privacidade do Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Participar do Canal Beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Abrir Log do Aplicativo",
                tt: "Visualizar e compartilhar o conteúdo do log do aplicativo",
                query: "label"
            },
            resetbtn: {
                elem: "Redefinir Aplicativo",
                tt: "Remover todos os dados armazenados e reiniciar o aplicativo",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Pausar/reproduzir a animação da notificação"
            },
            customiserreplay: {
                tt: "Repetir a animação da notificação"
            },
            customisersavepreset: {
                tt: "Salvar as customizações atuais como um novo Preset de Notificação"
            },
            tabbtnnext: {
                tt: "Próximo"
            },
            tabbtnprev: {
                tt: "Voltar"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Preset de Notificação",
                tt: "Selecione um preset de notificação para personalizar",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animação do Ícone Raro",
                tt: `Alternar a animação do plano de fundo do ícone`,
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Todos os Detalhes",
                tt: `Exibir todos os detalhes disponíveis das notificações`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Tempo de Exibição",
                tt: "O tempo de exibição da notificação",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Escala",
                tt: "O tamanho da notificação<br><i>*Não refletido na janela de visualização</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Texto Personalizado",
                tt: "Mostrar uma mensagem personalizada na notificação",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Usar Título do Jogo",
                tt: "Mostrar o título do jogo atual na notificação",
                query: ".sanboxlbl"
            },
            customfont: {
                elem: "Fonte",
                tt: "Carregue um arquivo de fonte personalizada para aplicar a todos os elementos de texto na notificação",
                query: ".sanboxlbl"
            },
            fontdeletebtn: {
                tt: "Redefinir para fonte padrão"
            },
            style: {
                elem: "Estilo",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Estilo do Fundo",
                tt: "Definir o estilo do fundo da notificação",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Ângulo do Gradiente",
                tt: "Definir o ângulo do gradiente de cores",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Imagem de Fundo",
                tt: "Selecione um arquivo de imagem para definir como plano de fundo da notificação",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Brilho",
                tt: "Definir o brilho do plano de fundo da arte do jogo",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Arredondamento",
                tt: "Definir o arredondamento dos cantos da notificação",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Tamanho da Fonte",
                tt: "Definir a escala da fonte",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacidade",
                tt: "Definir a opacidade da notificação",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Somente Fundo",
                tt: "Aplicar opacidade apenas ao fundo, deixando texto e imagens completamente opacos",
                query: ".sanboxlbl"
            },            
            colors: {
                elem: "Cores",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Cor Primária",
                tt: "Definir a cor primária da notificação",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Cor Secundária",
                tt: "Definir a cor secundária da notificação",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Cor do Texto",
                tt: "Definir a cor do texto",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Contorno do Texto",
                tt: "Aplicar um contorno a todo o texto da notificação",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Cor do Contorno",
                tt: "Definir a cor do contorno do texto",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Sombra do Texto",
                tt: "Aplicar uma sombra a todo o texto da notificação",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Cor da Sombra",
                tt: "Definir a cor da sombra do texto",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Ícone",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Arredondamento do Ícone",
                tt: "Definir o arredondamento do ícone da notificação",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Ícone Personalizado",
                tt: "Usar um arquivo de imagem como ícone personalizado",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Ícone Personalizado",
                tt: "Selecione um arquivo de imagem para definir como ícone personalizado",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Redefinir Ícone Personalizado`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Ícone Personalizado 100%",
                tt: `Usar um arquivo de imagem como ícone personalizado 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Ícone Personalizado 100%",
                tt: `Selecionar um arquivo de imagem para definir como ícone personalizado 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Redefinir o ícone personalizado 100%`,
                query: ".sanboxlbl"
            },            
            usegameicon: {
                elem: "Ícone do Jogo",
                tt: "Usar o ícone do jogo atual",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Posição",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Posição na Tela",
                tt: "Definir a posição da notificação na tela",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Posição Personalizada",
                tt: "Usar uma posição personalizada para a notificação",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Definir Posição",
                tt: "Definir uma posição personalizada para a notificação",
                query: "label"
            },
            animdir: {
                elem: "Direção da Animação",
                tt: "Definir a direção da animação da notificação",
                query: ".sanboxlbl"
            },            
            pptitle: {
                elem: "POLÍTICA DE PRIVACIDADE"
            },
            ppusagetitle: {
                elem: "USO DE DADOS DA STEAM WEB API"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier utiliza a <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> da Valve para recuperar e exibir dados relacionados à(s) conta(s) Steam do usuário, por meio da combinação Chave da API Steam/ID Steam64 fornecida pelo usuário para o aplicativo. Esses dados incluem:`
            },
            ppstats: {
                elem: "Estatísticas para conquistas bloqueadas e desbloqueadas"
            },
            ppusername: {
                elem: "Seu nome de usuário Steam"
            },
            ppsteamgames: {
                elem: "Seus jogos jogados na Steam"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier pode usar dados adicionais da Steam Web API no futuro para fornecer recursos e atualizações adicionais do aplicativo."
            },
            ppkey64title: {
                elem: "USO DE CHAVE DE API STEAM/ID STEAM64"
            },
            ppauth: {
                elem: "Steam Achievement Notifier requer que o usuário insira sua combinação Chave da API Steam/ID Steam64 para acessar autenticado à Steam Web API."
            },
            ppnoauth: {
                elem: "Sem essas informações, os links da web (fornecidos pela Valve para acessar a Steam Web API) usados para recuperar dados relacionados às contas Steam do usuário - incluindo dados de conquistas - não podem ser acessados."
            },
            ppstoragetitle: {
                elem: "ARMAZENAMENTO DE DADOS DA STEAM WEB API"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier armazena temporariamente dados da Steam Web API localmente no PC do usuário exclusivamente para uso dentro do aplicativo. Qualquer armazenamento temporário desses dados destina-se exclusivamente ao Steam Achievement Notifier e, em circunstâncias normais, todos os dados não persistentes da Steam Web API serão apagados do armazenamento local ao sair do aplicativo."
            },
            pppersist: {
                elem: "Os dados persistentes armazenados no dispositivo do usuário incluem apenas dados armazenados pelo aplicativo para conveniência do usuário, como a Chave da API Steam Web e o ID Steam64 do usuário."
            },
            ppdelete: {
                elem: "Esses dados também podem ser excluídos manualmente pelo usuário a qualquer momento, se necessário. Os arquivos criados pelo Steam Achievement Notifier estão localizados no seguinte diretório:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Atualmente não suportado"
            },
            ppcollecttitle: {
                elem: "POSTURA SOBRE COLETA DE DADOS"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>jamais</u> enviará ou armazenará dados do usuário fora do sistema de arquivos local do usuário sem a permissão explícita do usuário para fazê-lo. Isso inclui qualquer informação obtida por meio da Steam Web API para uso dentro do aplicativo, incluindo a combinação Chave da API Steam/ID Steam64 fornecida ao aplicativo para acesso à Steam Web API."
            },
            ppconsent: {
                elem: "Por meio da confirmação de consentimento e uso subsequente de implementações de recursos existentes ou futuros projetados para enviar informações externamente, permissão é implicitamente concedida pelo usuário para fazê-lo. Nesses casos, o usuário sempre será informado sobre a natureza dos dados enviados e será solicitado a confirmar o consentimento para enviar dados fora do aplicativo."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier intencionalmente exclui qualquer meio de acesso, visualização ou coleta externa de qualquer informação fornecida ao aplicativo pelo usuário, mas por meio de implementações de recursos existentes ou futuros, o aplicativo pode ser capaz de enviar dados externamente em nome do usuário, mas somente com o consentimento dele."
            },
            pprequests: {
                elem: "As solicitações de acesso a dados da Steam Web API são feitas dentro do próprio aplicativo usando métodos integrados, semelhantes à funcionalidade fornecida pelos navegadores da web. Essas solicitações contêm a combinação Chave da API Steam/ID Steam64 do usuário, conforme exigido pela Steam Web API, mas nunca são intencionalmente disponibilizadas para uso ou interceptação por outros aplicativos."
            },
            ppusertitle: {
                elem: "RESPONSABILIDADE DO USUÁRIO"
            },
            ppsteamtou: {
                elem: `AO BAIXAR E USAR QUALQUER VERSÃO OFICIALMENTE LANÇADA DO STEAM ACHIEVEMENT NOTIFIER ATRAVÉS DO <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOSITÓRIO OFICIAL DO GITHUB</span>, VOCÊ, O USUÁRIO, POR EXTENSÃO, ADERE ÀS SEÇÕES 7 E 8 DOS <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">TERMOS DE USO DA STEAM WEB API</span>.`
            },       
            gamedetails: "Detalhes do Jogo",
            mustbepublic: "deve ser definido como Público",            
            nosoundfile: "Padrão (Nenhum arquivo de som selecionado)",
            nosoundfolder: "Padrão (Nenhuma pasta de som selecionada)",
            file: "Arquivo",
            randomised: "Aleatório",            
            audioselectdialog: `Selecionar Som ${custom.mode === "file" ? "Arquivo" : "Pasta"}`,
            imgselectdialog: `Selecionar Arquivo de Imagem`,
            unsupported: "Arquivo não suportado!",
            novalidaudiofiles: "Nenhum arquivo de áudio válido!",
            nolocate: "Não foi possível localizar o arquivo!",
            switchaccountstitle: "Trocar contas",
            noaccounts: "Adicione uma conta para começar!",
            connecting: "Conectando...",
            connected: "Conectado",
            testsuccessuser: `Você está pronto`,
            testsuccess1: `Certifique-se de que suas <span>Configurações de Detalhes do Jogo</span> estejam definidas como <span>Público</span> em <a href="${privacysettings}">Configurações de Privacidade do Steam</a>`,
            testsuccess2: `Verifique se o modo de exibição em tela do jogo está definido como <span>Sem bordas</span> para que as notificações sejam exibidas acima da janela do jogo`,
            noapikeytitle: "Nenhuma Chave da API",
            noapikeytxt: "Digite sua Chave da API",
            noapikeyhint: `Clique no ícone <img src="./icon/key.svg" alt=""> para obter sua Chave da API`,
            nosteam64idtitle: "Nenhum Steam64 ID",
            nosteam64idtxt: "Digite seu Steam64 ID",
            nosteam64idhint: `Clique no ícone <img src="./icon/id.svg" alt=""> para obter seu Steam64 ID`,
            invalidapikeytitle: "Chave da API Inválida!",
            invalidapikeymsg: "Não foi possível acessar a Steam Web API com a Chave da API fornecida",
            invalidapikeydetail1: "Verifique se sua Chave da API está correta",
            invalidapikeydetail2: "Regenere uma nova Chave da API para sua conta",
            invalidsteam64idtitle: "Steam64 ID Inválido!",
            invalidsteam64idmsg: "Não foi possível encontrar uma conta Steam associada ao Steam64 ID fornecido",
            invalidsteam64iddetail1: "Verifique se o valor do Steam64 ID fornecido é o valor correto para sua Conta Steam",
            nonetworkfound: "Nenhuma conexão de rede ativa encontrada",
            connecttonetwork: "Conecte seu PC a uma rede e tente novamente",
            testdefaulterrortitle: "Ocorreu um Erro!",
            testdefaulterrormsg: "Houve um erro ao conectar à Steam Web API",
            testdefaulterrordetail1: "Por favor, relate esse problema no Discord ou GitHub!",
            sspath: "Selecionar Caminho da Captura de Tela",
            wronguser: user ? `${user} não conectado ao Steam!` : "Nenhuma conta de usuário vinculada encontrada!",
            switchuser: "Clique aqui para trocar de conta",
            trackingfailed: "Rastreamento Falhou!",
            checkapplog: "Verifique o log do aplicativo para obter detalhes",
            soon: "Em breve!",
            gamecomplete: "100% Completo",
            gametitle: "Título do Jogo",
            achievementunlocked: "Conquista desbloqueada",
            achievementtitle: "Título da Conquista",
            allachievements: "Você desbloqueou todas as conquistas!",
            achievementdesc: "Descrição da Conquista",
            show: "Mostrar",
            quit: "Sair",
            off: "Desligado",
            steamss: "Captura de Tela In-Game do Steam",
            overlayss: "Captura de Tela com Sobreposição de Notificação",
            match: "Personalizador de Combinação",
            topleft: "Superior Esquerdo",
            topcenter: "Superior Centro",
            topright: "Superior Direito",
            bottomleft: "Inferior Esquerdo",
            bottomcenter: "Inferior Centro",
            bottomright: "Inferior Direito",
            solid: "Sólido",
            gradient: "Gradiente",
            bgimg: "Imagem de Fundo",
            gameart: "Arte do Jogo",
            up: "Cima",
            down: "Baixo",
            left: "Esquerda",
            right: "Direita",
            tracking: "Agora em Rastreamento",
            inuse: "Em uso por",
            invalidshortcut: "Atalho inválido",
            nofont: "Nenhuma Fonte",
            fontselectdialog: "Selecionar Arquivo de Fonte"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Selecione um arquivo de som para reproduzir ao desbloquear uma conquista" : "Selecione uma pasta contendo arquivos de áudio para reproduzir aleatoriamente ao desbloquear uma conquista")
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Aqui está um registro do que aconteceu desde que o aplicativo foi iniciado em"
            },
            copylbl: {
                elem: "Copiar Conteúdo do Registro"
            },
            openlbl: {
                elem: "Gerar Arquivo de Registro"
            },
        }        

        return translations
    }
}