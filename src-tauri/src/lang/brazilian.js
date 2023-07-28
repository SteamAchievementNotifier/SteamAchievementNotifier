export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "Usuário não detectado",
                tt: "O usuário do Steam para o qual as conquistas estão sendo rastreadas atualmente"
            },
            gamelbl: {
                elem: gameName ? gameName : "Jogo não detectado",
                tt: "O jogo para o qual as conquistas estão sendo rastreadas atualmente"
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
                elem: custom.mode === "file" ? "arquivo" : "aleatorizado"
            },
            togglemain: {
                elem: "Principal",
                tt: "Notificação de conquista principal"
            },
            togglerare: {
                elem: "Raro",
                tt: "Notificação de conquista rara"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notificação de conquista 100%"
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
                tt: "O Steam não está sendo executado"
            },
            updatebtn: {
                tt: "Atualização disponível"
            },
            kofibtn: "Doar no Ko-Fi!",
            discordbtn: "Entrar no Discord!",
            githubbtn: "Reportar Problema no GitHub!",
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
                elem: "Outras Opções",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Versão"
            },            
            apikeybtn: {
                tt: "Clique aqui para obter sua chave da Steam Web API"
            },
            apikey: {
                placeholder: "Digite sua Chave de API",
                tt: "A chave da Steam Web API associada à sua conta da Steam"
            },
            eyebtn: {
                tt: "Alternar visibilidade da chave da API"
            },
            apikeylbl: {
                elem: "Obter Chave da API"
            },
            steam64idbtn: {
                tt: "Clique aqui para obter seu ID Steam64"
            },
            steam64id: {
                placeholder: "Digite seu ID Steam64",
                tt: "O ID Steam64 associado à sua conta da Steam"
            },
            steam64idlbl: {
                elem: "Obter ID Steam64"
            },
            switchaccountspan: {
                elem: "Trocar Contas"
            },
            switchaccountbtn: {
                tt: "Alternar entre contas da Steam vinculadas"
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
                elem: "Modo Simplificado",
                tt: "Desabilita a janela principal do aplicativo para economizar recursos do sistema. Opções mínimas permanecerão disponíveis por meio do ícone da bandeja do sistema para interagir com o aplicativo",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Porcentagem de Raridade",
                tt: `Somente conquistas com uma porcentagem de desbloqueio global abaixo desse número serão exibidas como notificações "Raras"`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Modo Somente Som",
                tt: "Desabilitar notificações, mas reproduz o som selecionado ao desbloquear uma conquista",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Mostrar todas as Porcentagens",
                tt: "Exibir porcentagens de desbloqueio global em todos os tipos de notificação",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicar para Janela Externa",
                tt: "Duplicar para Janela Externa",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Mostrar Janela de Estatísticas",
                tt: "Mostrar Janela de Estatísticas de Conquistas",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Mostrar Notificação "Agora Rastreando"`,
                tt: `Alternar a notificação "Agora Rastreando" ao iniciar um jogo`,
                query: ".sanboxlbl"
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
                tt: "Configure o atalho do cliente Steam para capturar capturas de tela nativas ao desbloquear conquistas",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Sobreposição de Notificação Principal"
            },
            ovtabrare: {
                tt: "Sobreposição de Notificação Rara"
            },
            ovtabplat: {
                tt: "Sobreposição de Notificação 100%"
            },
            monitor: {
                elem: "Monitor",
                tt: "Selecione o monitor a ser usado como origem da captura de tela",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Posição da Sobreposição",
                tt: "Defina a posição da sobreposição de notificação",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Caminho",
                tt: "Defina o caminho onde as capturas de tela serão salvas",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Visualizar",
                tt: "Visualizar a sobreposição de notificação",
                query: "label"
            },
            noanim: {
                elem: "Desativar Animações de Janelas",
                tt: "Desativar animações de transição dentro da janela do aplicativo",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Ativar Suporte para NVDA",
                tt: "Copiar o conteúdo da notificação para a área de transferência para ser lido pelo software leitor de tela NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Mostrar Dicas de Ferramentas",
                tt: "Alternar dicas de ferramentas ao passar o cursor sobre os elementos do aplicativo",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Mostrar Painel de Ferramentas do Desenvolvedor da Notificação",
                tt: "Abrir o Painel de Ferramentas do Desenvolvedor da Notificação quando acionado",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Ver Política de Privacidade",
                tt: "Ver a Política de Privacidade do Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Entrar no Canal Beta",
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
                tt: "Reproduzir novamente a animação da notificação"
            },
            customisersavepreset: {
                tt: "Salvar as personalizações atuais como um novo Preset de Notificação"
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
            style: {
                elem: "Estilo",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Estilo do Plano de Fundo",
                tt: "Definir o estilo do plano de fundo da notificação",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Ângulo do Gradiente",
                tt: "Definir o ângulo do gradiente de cores",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Imagem de Plano de Fundo",
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
                elem: "Somente Plano de Fundo",
                tt: "Aplicar opacidade apenas ao plano de fundo, mantendo o texto e as imagens totalmente opacos",
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
                tt: `Redefinir o ícone personalizado`,
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
                elem: `O Steam Achievement Notifier utiliza a <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">Steam Web API</span> da Valve para recuperar e exibir dados relacionados à(s) conta(s) Steam do usuário, por meio da combinação Chave da API Steam/ID Steam64 fornecida pelo usuário para o aplicativo. Esses dados incluem:`
            },
            ppstats: {
                elem: "Estatísticas de conquistas bloqueadas e desbloqueadas"
            },
            ppusername: {
                elem: "Seu nome de usuário Steam"
            },
            ppsteamgames: {
                elem: "Seus jogos Steam jogados"
            },
            ppusagefooter: {
                elem: "O Steam Achievement Notifier pode utilizar dados adicionais da Steam Web API no futuro para fornecer recursos e atualizações adicionais do aplicativo."
            },
            ppkey64title: {
                elem: "USO DA CHAVE DA API STEAM/ID STEAM64"
            },
            ppauth: {
                elem: "O Steam Achievement Notifier requer que o usuário insira sua combinação de Chave da API Steam/ID Steam64 para acesso autenticado à Steam Web API."
            },
            ppnoauth: {
                elem: "Sem essas informações, os links da web (fornecidos pela Valve para acessar a Steam Web API) usados para recuperar dados relacionados à(s) conta(s) Steam do usuário - incluindo dados de conquistas - não podem ser acessados."
            },
            ppstoragetitle: {
                elem: "ARMAZENAMENTO DE DADOS DA STEAM WEB API"
            },
            ppstorage: {
                elem: "O Steam Achievement Notifier armazena temporariamente dados da Steam Web API localmente no PC do usuário exclusivamente para uso dentro do aplicativo. Qualquer armazenamento temporário desses dados destina-se exclusivamente ao Steam Achievement Notifier e, em circunstâncias normais, todos os dados não persistentes da Steam Web API serão excluídos do armazenamento local ao sair do aplicativo."
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
                elem: "COLETA DE DADOS"
            },
            ppnosend: {
                elem: "O Steam Achievement Notifier <u>jamais</u> enviará ou armazenará dados do usuário fora do sistema de arquivos local do usuário sem a permissão explícita do usuário para fazê-lo. Isso inclui qualquer informação obtida via Steam Web API para uso dentro do aplicativo, incluindo a combinação Chave da API Steam/ID Steam64 fornecida ao aplicativo para acesso à Steam Web API."
            },
            ppconsent: {
                elem: "Por meio da confirmação de consentimento e uso subsequente de implementações de recursos existentes ou futuros projetados para enviar informações externamente, a permissão é implicitamente concedida pelo usuário para fazê-lo. Nesses casos, o usuário sempre será informado sobre a natureza dos dados sendo enviados e será solicitado a confirmar o consentimento para enviar dados fora do aplicativo."
            },
            ppexclude: {
                elem: "O Steam Achievement Notifier intencionalmente exclui qualquer meio de acesso, visualização ou coleta externa de qualquer informação fornecida ao aplicativo pelo usuário, mas, por meio de implementações de recursos existentes ou futuros, o aplicativo pode ser capaz de enviar dados externamente em nome do usuário, mas apenas com seu consentimento para fazê-lo."
            },
            pprequests: {
                elem: "As solicitações de acesso a dados da Steam Web API são feitas dentro do próprio aplicativo usando métodos internos, semelhantes à funcionalidade fornecida pelos navegadores da web. Essas solicitações contêm a combinação Chave da API Steam/ID Steam64 do usuário, conforme exigido pela Steam Web API, mas nunca são intencionalmente disponibilizadas ou interceptadas por outros aplicativos."
            },
            ppusertitle: {
                elem: "RESPONSABILIDADE DO USUÁRIO"
            },
            ppsteamtou: {
                elem: `AO BAIXAR E USAR QUALQUER VERSÃO OFICIALMENTE LANÇADA DO STEAM ACHIEVEMENT NOTIFIER POR MEIO DO <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOSITÓRIO OFICIAL NO GITHUB</span>, VOCÊ, O USUÁRIO, POR EXTENSÃO, ADERE ÀS SEÇÕES 7 E 8 DOS <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">TERMOS DE USO DA STEAM WEB API</span>.`
            },
            gamedetails: "Detalhes do Jogo",
            mustbepublic: "deve ser definido como Público",
            nosoundfile: "Padrão (Nenhum arquivo de som selecionado)",
            nosoundfolder: "Padrão (Nenhum diretório de som selecionado)",
            file: "Arquivo",
            randomised: "Aleatório",                 
            audioselectdialog: `Selecionar ${custom.mode === "file" ? "Arquivo" : "Pasta"} de Som`,
            imgselectdialog: `Selecionar Arquivo de Imagem`,
            unsupported: "Arquivo não suportado!",
            novalidaudiofiles: "Nenhum arquivo de áudio válido!",
            nolocate: "Não foi possível localizar o arquivo!",
            switchaccountstitle: "Trocar contas",
            noaccounts: "Adicione uma conta para começar!",
            connecting: "Conectando...",
            connected: "Conectado",
            testsuccessuser: `Você está pronto para começar`,
            testsuccess1: `Certifique-se de que suas <span>Configurações do Jogo</span> estejam definidas como <span>Públicas</span> em <a href="${privacysettings}">Configurações de Privacidade da Steam</a>`,
            testsuccess2: `Verifique se o modo de exibição do jogo está definido como <span>Janela sem Bordas</span> para que as notificações sejam exibidas acima da janela do jogo`,
            noapikeytitle: "Nenhuma Chave da API",
            noapikeytxt: "Insira sua Chave da API",
            noapikeyhint: `Clique no ícone <img src="./icon/key.svg" alt=""> para obter sua Chave da API`,
            nosteam64idtitle: "Nenhum ID Steam64",
            nosteam64idtxt: "Insira seu ID Steam64",
            nosteam64idhint: `Clique no ícone <img src="./icon/id.svg" alt=""> para obter seu ID Steam64`,
            invalidapikeytitle: "Chave da API Inválida!",
            invalidapikeymsg: "Não foi possível acessar a Steam Web API com a Chave da API fornecida",
            invalidapikeydetail1: "Verifique se sua Chave da API está correta",
            invalidapikeydetail2: "Regenere uma nova Chave da API para sua conta",
            invalidsteam64idtitle: "ID Steam64 Inválido!",
            invalidsteam64idmsg: "Não foi possível encontrar uma conta Steam associada ao ID Steam64 fornecido",
            invalidsteam64iddetail1: "Verifique se o valor do ID Steam64 fornecido corresponde ao valor correto de sua conta Steam",
            nonetworkfound: "Nenhuma conexão de rede ativa encontrada",
            connecttonetwork: "Conecte seu PC a uma rede e tente novamente",
            testdefaulterrortitle: "Ocorreu um Erro!",
            testdefaulterrormsg: "Houve um erro ao conectar-se à Steam Web API",
            testdefaulterrordetail1: "Por favor, relate esse problema no Discord ou GitHub!",
            sspath: "Selecionar Caminho da Captura de Tela",
            wronguser: user ? `${user} não está conectado à Steam!` : "Nenhuma conta de usuário vinculada encontrada!",
            switchuser: "Clique aqui para trocar de conta",
            trackingfailed: "Falha no Rastreamento!",
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
            steamss: "Captura de Tela do Steam no Jogo",
            overlayss: "Captura de Tela com Sobreposição",
            match: "Personalizador de Combinação",
            topleft: "Superior Esquerdo",
            topcenter: "Superior Central",
            topright: "Superior Direito",
            bottomleft: "Inferior Esquerdo",
            bottomcenter: "Inferior Central",
            bottomright: "Inferior Direito",
            solid: "Sólido",
            gradient: "Gradiente",
            bgimg: "Imagem de Fundo",
            gameart: "Arte do Jogo",
            up: "Cima",
            down: "Baixo",
            left: "Esquerda",
            right: "Direita",
            tracking: "Agora Rastreando"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Selecionar um arquivo de som para reproduzir ao desbloquear uma conquista" : "Selecionar uma pasta contendo arquivos de áudio para reproduzir aleatoriamente ao desbloquear uma conquista")
              
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