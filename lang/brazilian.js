document.getElementById("username").innerHTML = "Nenhum Usuário Detectado";
document.getElementById("gamestatus").innerHTML = "Nenhum Jogo Detectado";
document.getElementById("soundfile").innerHTML = "Padrão (Sem Som Selecionado)";
document.getElementById("soundfilerare").innerHTML = "Padrão (Sem Som Selecionado)";
document.getElementById("maincheevsound").innerHTML = "Som de Notificação Principal";
document.getElementById("rarecheevsound").innerHTML = "Som de Notificação Raro";
document.getElementById("test").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE";
document.getElementById("testrare").innerHTML = "MOSTRAR NOTIFICAÇÃO DE TESTE RARO";
document.getElementById("settingstitle").innerHTML = "CONFIGURAÇÕES";
document.getElementById("configtitle").innerHTML = "CONFIGURAÇÃO";
document.getElementById("apibox").placeholder = "Digite Chave API";
document.getElementById("steam64box").placeholder = "Digite Steam64ID";
document.getElementById("other").innerHTML = "OUTROS";
document.getElementById("showscreenshotlbl").innerHTML = "Captura de Tela do Steam";
document.getElementById("showscreenshotlblrare").innerHTML = "Captura de Tela do Steam";
document.getElementById("previewlbl").innerHTML = "Mostrar Pré-Visualização"
document.getElementById("previewlblrare").innerHTML = "Mostrar Pré-Visualização"
document.getElementById("desktoplbl").innerHTML = "Criar Atalho de Desktop";
document.getElementById("startwinlbl").innerHTML = "Comece com Windows";
document.getElementById("startminlbl").innerHTML = "Início Minimizado";
document.getElementById("soundonlylbl").innerHTML = "Modo só Som";
document.getElementById("trackinglbl").innerHTML = 'Mostrar "Agora Rastreamento"';

var nouser = "Nenhum Usuário Detectado";
var nogame = "Nenhum Jogo Detectado";
var nosound = "Padrão (Sem Som Selecionado)";
var nosoundrare = "Padrão (Sem Som Selecionado)";
var rareheader = `'Conquista Rara Desbloqueada!`;
var unlinked = "DESCONECIDO";
var linked = "CONECTADO";
var novalue = "Por favor, digite um valor";

var second = "segundo";
var seconds = "segundos";

var tracknotifymsg = "Agora, o rastreamento de conquistas para";

var resettitle = "Redefinir a Aplicação Padrão?";
var resetdesc = `AVISO: Isto removerá todas as configurações do usuário!`;
var resetbtns = ["Redefinir","Desinstalar","Cancelar"];

var traylabel = "Nenhum Jogo Detectado";
var trayshow = "Mostrar";
var trayexit = "Fechar";

var achievementunlocked = "Conquista Desbloqueada!";
var rareachievementunlocked = "Conquista Rara Desbloqueada!";
var testdesc = "Suas notificações estão funcionando corretamente";

var addsound = "Adicionar Som Selecionado";
var invalid = 'Tipo de Arquivo Inválido';
var addimage = 'Adicionar Imagem Selecionada';
var file = "FILE";
var nofolder = "Padrão (Sem Pasta Selecionada)";
var novalidaudio = "Nenhum arquivo de áudio válido localizado em ";
var soundmode = "MODELO DE SOM: ";
var randomised = "RANDOMIZADO";
var presskey = "...";
var custompos = "Definir Posição Personalizada";
var settingpos = "Definindo a Posição Principal...";
var settingposrare = "Definindo Posição Raro...";

document.getElementById("steamkeybindlbl").innerHTML = "Chave de Imagem Steam:";
document.getElementById("langlbl").innerHTML = "Língua:";
document.getElementById("raritylbl").innerHTML = "Valor de Raridade:";
document.getElementById("nosteamlbl").innerHTML = "Ocultar Notificação de Steam";
document.getElementById("customiselbl").innerHTML = "PERSONALIZAÇÃO...";
document.getElementById("customisermainlbl").innerHTML = "Principal";
document.getElementById("customiserrarelbl").innerHTML = "Raro";
document.getElementById("customiserstylelbl").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
document.getElementById("notifypositionlbl").innerHTML = "POSIÇÃO DA TELA:";
document.getElementById("bgtypelbl").innerHTML = "TIPO DE FUNDO:";
document.getElementById("colourslbl").innerHTML = "COLORES";
document.getElementById("colour1lbl").innerHTML = "Cor 1";
document.getElementById("colour2lbl").innerHTML = "Cor 2";
document.getElementById("textcolourlbl").innerHTML = "Cor do Texto";
document.getElementById("imgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
document.getElementById("roundnesslbl").innerHTML = "REDONDEZA:";
document.getElementById("iconroundnesslbl").innerHTML = "ÍCONE REDONDEZA:";
document.getElementById("displaytimelbl").innerHTML = "TEMPO DE EXIBIÇÃO:";
document.getElementById("scalelbl").innerHTML = "ESCALA:";
document.getElementById("styledefault").innerHTML = "Padrão";
document.getElementById("typesolid").innerHTML = "Cor Sólida";
document.getElementById("typegradient").innerHTML = "Gradiente de Cor";
document.getElementById("typeimg").innerHTML = "Imagem de Fundo";
document.getElementById("dragposlbl").innerHTML = "Usar Posição Personalizada";
document.getElementById("iconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
document.getElementById("fontsizelbl").innerHTML = "TAMANHO DE FONT:";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "Reinicialização";
document.getElementById("gameiconlbl").innerHTML = "Usar Ícone de Jogo";
document.getElementById("typegame").innerHTML = "Arte do Jogo"
document.getElementById("brightnesslbl").innerHTML = "BRILHO"

document.getElementById("customiserstylelblrare").innerHTML = "ESTILO DE NOTIFICAÇÃO:";
document.getElementById("notifypositionlblrare").innerHTML = "POSIÇÃO DA TELA:";
document.getElementById("bgtypelblrare").innerHTML = "TIPO DE FUNDO:";
document.getElementById("rarecolourslbl").innerHTML = "COLORES";
document.getElementById("colour1lblrare").innerHTML = "Cor 1";
document.getElementById("colour2lblrare").innerHTML = "Cor 2";
document.getElementById("textcolourlblrare").innerHTML = "Cor do Texto";
document.getElementById("rareimgselectlbl").innerHTML = "IMAGEM DE FUNDO:"
document.getElementById("roundnesslblrare").innerHTML = "REDONDEZA:";
document.getElementById("iconroundnesslblrare").innerHTML = "ÍCONE REDONDEZA::";
document.getElementById("displaytimelblrare").innerHTML = "TEMPO DE EXIBIÇÃO:";
document.getElementById("scalelblrare").innerHTML = "ESCALA:";
document.getElementById("styledefaultrare").innerHTML = "Padrão";
document.getElementById("typesolidrare").innerHTML = "Cor Sólida";
document.getElementById("typegradientrare").innerHTML = "Gradiente de Cor";
document.getElementById("typeimgrare").innerHTML = "Imagem de Fundo";
document.getElementById("dragposlblrare").innerHTML = "Usar Posição Personalizada";
document.getElementById("rareiconselectlbl").innerHTML = "ÍCONE PERSONALIZADO:";
document.getElementById("fontsizelblrare").innerHTML = "TAMANHO DE FONT:";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "Reinicialização";
document.getElementById("gameiconlblrare").innerHTML = "Usar Ícone de Jogo";
document.getElementById("typegamerare").innerHTML = "Arte do Jogo"
document.getElementById("brightnesslblrare").innerHTML = "BRILHO"

document.getElementById("trackopacitylbl").innerHTML = "Rastreamento Opacidade:";
document.getElementById("resetlbl").innerHTML = "Reinicialização";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Detalhes do jogo</a> também deve ser definido como "Público".';
document.getElementById("allpercentlbl").innerHTML = "Mostrar Todas as Porcentagens";
document.getElementById("iconanimationlbl").innerHTML = "Mostrar Animação de Ícones Raros";
document.getElementById("hwalbl").innerHTML = "Desativar Aceleração de Hardware";
document.getElementById("nvdalbl").innerHTML = "Habilitar o Suporte da NVDA";
document.getElementById("gamecompletionlbl").innerHTML = "Mostrar Notificação de Conclusão do Jogo";
document.getElementById("ssoverlaylbl").innerHTML = "Salvar Imagens com Overlay";
document.getElementById("ssoverlaypathlbl").innerHTML = "Caminho:";
document.getElementById("opacitylbl").innerHTML = "Notificação Opacidade:";
document.getElementById("ssmaintestbtn").innerHTML = "VER IMAGEM PRINCIPAL";
document.getElementById("ssraretestbtn").innerHTML = "VER IMAGEM RARO";

var secret = "Segredo";
var gamecomplete = "Jogo Completo!";
var allunlocked = "Você já Desbloqueou Todas as Conquistas!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `Junte-se à <span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;Canal Beta&nbsp;</span> para acesso antecipado!`
document.getElementById("betatest").innerHTML = "Teste as novas características antes do lançamento"
document.getElementById("betaoptin").innerHTML = "Optar por entrar/sair do Canal Beta a qualquer momento"
document.getElementById("betabugs").innerHTML = "Corrigir bugs e melhorar o aplicativo"
document.getElementById("betadiscord").innerHTML = `Canal dedicado &nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp;Discord`
document.getElementById("betafb").innerHTML = "Fornecer feedback sobre os próximos acréscimos"
document.getElementById("betabugswarn").innerHTML = "<u>Os erros são prováveis</u>&nbsp;(não para todos!)"
document.getElementById("betawarntext").innerHTML = "O Steam Achievement Notifier será reiniciado após a adesão ao Canal Beta"
document.getElementById("betaok").innerHTML = "Sim, soa bem!"
document.getElementById("betacancel").innerHTML = "Não, eu fico aqui..."

document.getElementById("leavebetatitle").innerHTML = "Abandonar Canal Beta?"
document.getElementById("leavebetasub").innerHTML = "O aplicativo voltará ao mais recente lançamento oficial"
document.getElementById("leavebetaok").innerHTML = "Abandonar Canal Beta"
document.getElementById("leavebetacancel").innerHTML = "Stay on Beta Channel"

var betajoin = "Entre no Canal Beta"
var betaleave = "Abandonar Canal Beta"
var betaerrortext = "Incapaz de atualizar para o Canal Beta!"
var betaerrorsub = "Parece que você não tem uma conexão de rede. Sem internet = Sem Beta!"

document.getElementById("extwinlbltxt").innerHTML = "Notificações Duplicadas à Janela "

// Fullscreen Notifications
// document.getElementById("fullscreenlbl").innerHTML = "Notificações em Tela Cheia"
// document.getElementById("fswarntitle").innerHTML = "ANTES DE COMEÇAR..."
// document.getElementById("fswarncontentmain").innerHTML = `A fim de sobrepor as notificações no topo dos jogos definidos para os modos de exibição em tela cheia ou tela cheia exclusiva, a notificação deve ser injetada diretamente no processo do jogo para ser exibida sobre uma janela de jogo DirectX.<br><br>Isto significa que, como o código do jogo está sendo tecnicamente alterado por um programa de terceiros, os jogos que utilizam a tecnologia Anti-Cheat podem ver este método de forma desfavorável.<br><br>Embora nenhum jogo tenha apresentado problemas durante os testes, geralmente é aconselhável <u>não</u> utilizar a opção "Notificações em Tela Cheia" quando há o risco de injeção ser detectada por jogos que utilizam a tecnologia Anti-Cheat (como em jogos competitivos on-line).`
// document.getElementById("fswarnimportant").innerHTML = `Ao ativar e usar a opção "Notificações em Tela Cheia", você concorda que informou adequadamente e entendeu os riscos associados à injeção de conteúdo de terceiros em jogos Steam (como o método usado pela Steam Achievement Notifier para exibir conteúdo sobre jogos configurados para usar os modos de exibição em tela cheia), e que ao ativar esta opção, você aceita que o faça por sua própria conta e risco e, portanto, o desenvolvedor da Steam Achievement Notifier (Jackson0ne) não aceita nenhuma responsabilidade ou obrigação com relação ao uso desta opção.`
// document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">Ao clicar no botão <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">ACORDO</span> abaixo, você aceita os termos acima, e a opção "Notificações em Tela Cheia" será ativada.</div><div style="padding: 0px 10px 10px;">Ao clicar no botão <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">DISCORDAR</span> abaixo, esta mensagem será fechada, e a opção "Notificações em Tela Cheia" será <u>não</u> habilitada.</div>`
// document.getElementById("fshidemsglbl").innerHTML = "Eu concordo, não mostre esta mensagem novamente"
// document.getElementById("fsok").innerHTML = "ACORDO"
// document.getElementById("fscancel").innerHTML = "DISCORDAR"
// document.getElementById("fsselectlbl").innerHTML = "Janela de Seleção Manual do Jogo"

// Privacy Policy
document.getElementById("pp").innerHTML = "Ver Política de Privacidade"
document.getElementById("pptitle").innerHTML = "POLÍTICA DE PRIVACIDADE"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">USO DE DADOS STEAM WEB API</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier usa <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> para recuperar e exibir dados relacionados à(s) conta(s) de vapor do usuário, através da combinação Chave Steam API/Steam64 ID fornecida ao aplicativo pelo usuário. Estes dados incluem:<br><br>
        <div class="ppbodyembed">
            • Estatísticas para realizações bloqueadas e desbloqueadas<br>
            • Seu nome de usuário Steam<br>
            • Seus jogos Steam jogados<br>
        </div>
        <br>
        <i>O Steam Achievement Notifier pode usar mais dados Steam Web API no futuro para fornecer recursos adicionais de aplicação e atualizações.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">CHAVE API A STEAM/STEAM64 ID USO</span>
    </div>
    <div class="ppbodycont">
        O Steam Achievement Notifier requer que o usuário insira sua combinação Chave Steam API/Steam64 ID para acesso autenticado ao Steam Web API. Sem esta informação, os links web (fornecidos para uso pela Valve para acessar o Steam Web API) usados para recuperar dados relacionados à(s) conta(s) de Steam de um usuário - incluindo dados de realização - não podem ser acessados.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">ARMAZENAMENTO DE DADOS STEAM WEB API</span>
    </div>
    <div class="ppbodycont">
        O Steam Achievement Notifier armazena temporariamente os dados do Steam Web API localmente no PC do usuário apenas para uso dentro da aplicação. Qualquer armazenamento temporário destes dados é destinado ao uso exclusivo do Steam Achievement Notifier, e sob circunstâncias normais, todos os dados não-persisentes do Steam Web API serão liberados do armazenamento local na saída da aplicação.<br><br>
        Dados persistentes armazenados no dispositivo do usuário só incluem dados que são armazenados pela aplicação para conveniência do usuário, tais como a chave Steam Web API do usuário e o Steam64 ID.<br><br>
        Estes dados também podem ser apagados manualmente pelo usuário a qualquer momento, se necessário. Os arquivos criados pelo Steam Achievement Notifier estão localizados no diretório a seguir:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: Atualmente sem suporte
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">POSIÇÃO SOBRE A COLETA DE DADOS</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier irá <u>nunca</u> enviar ou armazenar dados do usuário fora do sistema de arquivos local do usuário. Isto inclui qualquer informação recuperada através do Steam Web API para uso dentro da aplicação, incluindo a combinação Chave Steam API/Steam64 ID fornecida à aplicação para acesso ao Steam Web API. O desenvolvedor do Steam Achievement Notifier (Jackson0ne) não incluiu intencionalmente nenhum meio para acessar, visualizar, coletar ou enviar externamente qualquer informação fornecida ao aplicativo pelo usuário.<br><br>
        Os pedidos de acesso aos dados da Steam Web API são feitos a partir da própria aplicação usando métodos integrados, semelhantes às funcionalidades fornecidas pelos navegadores web. Essas solicitações contêm a combinação da chave Steam API do usuário/Steam64 ID, conforme requerido pela Steam Web API, mas não são disponibilizadas para uso ou interceptação por quaisquer outras aplicações.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">RESPONSABILIDADE DO USUÁRIO</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        AO BAIXAR E USAR QUALQUER VERSÃO LANÇADA OFICIALMENTE DO STEAM ACHIEVEMENT NOTIFIER ATRAVÉS DA <span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOSITÓRIO OFICIAL DO GITHUB</span>, VOCÊ, O USUÁRIO, POR EXTENSÃO, ADERE ÀS SEÇÕES 7 E 8 DA <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API TERMOS DE USO</span>.
    </div>
`

// Achievement Stats Window (Beta Revision 0.6)
document.getElementById("statwinlbltxt").innerHTML = "Abrir Janela de Estatísticas"

statsresettitle = "Redefinir todos os dados de Realizações Armazenadas?"
statsresetbody = "Todos os dados de realização previamente armazenados serão removidos deste dispositivo. Seus dados de conquistas mais recentes serão recuperados quando a janela de Estatísticas de conquistas for aberta em seguida.\n\nPor favor, esteja ciente de que a recuperação de dados de realizações utiliza as chamadas Steam Web API para cada jogo de propriedade do usuário na Biblioteca Steam do usuário. A Valve limita a quantidade de chamadas de Steam Web API a 100.000 por dia para a chave API de cada usuário.\n\nComo resultado, dependendo da quantidade de jogos em sua biblioteca Steam, isto pode afetar a funcionalidade geral da aplicação se a função de redefinir seus dados de realização for muito utilizada."
statsresetbtns = ["Redefinir todas as Estatísticas de Realizações", "Cancelar"]

statwincurrent = "JOGO CORRENTE"
statwinall = "TODOS OS JOGOS"
statwincomplete = "COMPLETO (100%)"
statwintop5 = "5 MELHORES JOGOS"

// Notify Debug (Beta Revision 0.6)
document.getElementById("notifydebuglbl").innerHTML = "Mostrar Console de Notificação"