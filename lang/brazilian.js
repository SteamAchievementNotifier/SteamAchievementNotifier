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