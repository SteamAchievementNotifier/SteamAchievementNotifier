document.getElementById("username").innerHTML = "Ingen Bruger Fundet";
document.getElementById("gamestatus").innerHTML = "Intet Spil Opdaget";
document.getElementById("soundfile").innerHTML = "Standard (Ingen Lyd Valgt)";
document.getElementById("soundfilerare").innerHTML = "Standard (Ingen Lyd Valgt)";
document.getElementById("maincheevsound").innerHTML = "Hovedlyd";
document.getElementById("rarecheevsound").innerHTML = "Sjælden Lyd";
document.getElementById("test").innerHTML = "VIS TEST";
document.getElementById("testrare").innerHTML = "VIS SJÆLDEN TEST";
document.getElementById("settingstitle").innerHTML = "INDSTILLINGER";
document.getElementById("configtitle").innerHTML = "KONFIGURATION";
document.getElementById("apibox").placeholder = "Indtast API Key";
document.getElementById("steam64box").placeholder = "Indtast Steam64ID";
document.getElementById("other").innerHTML = "ANDRE";
document.getElementById("showscreenshotlbl").innerHTML = "Tag Steam-Skærmbilledet";
document.getElementById("showscreenshotlblrare").innerHTML = "Tag Steam-Skærmbilledet";
document.getElementById("previewlbl").innerHTML = "Forhåndsvisning af Skærmbillede"
document.getElementById("previewlblrare").innerHTML = "Forhåndsvisning af Skærmbillede"
document.getElementById("desktoplbl").innerHTML = "Opret Genvej Til Desktop";
document.getElementById("startwinlbl").innerHTML = "Start med Windows";
document.getElementById("startminlbl").innerHTML = "Start Minimeret Til Systembakken";
document.getElementById("soundonlylbl").innerHTML = "Kun Lyd-Tilstand";
document.getElementById("trackinglbl").innerHTML = 'Vis Meddelelse Om "Nu Sporing"';

var nouser = "Ingen Bruger Fundet";
var nogame = "Intet Spil Opdaget";
var nosound = "Standard (Ingen Lyd Valgt)";
var nosoundrare = "Standard (Ingen Lyd Valgt)";
var rareheader = `'Sjælden Præstation Låst Op!`;
var unlinked = "ULINKET";
var linked = "LINKET";
var novalue = "Indtast venligst en værdi";

var resettitle = "Nulstil Applikation Til Standard?";
var resetdesc = `ADVARSEL: Dette vil fjerne alle brugerindstillinger!`;
var resetbtns = ["Nulstil","Afinstaller","Afbestille"];

var traylabel = "Intet Spil Opdaget";
var trayshow = "At Vise";
var trayexit = "Afslut";

var achievementunlocked = "Præstation Låst Op!";
var rareachievementunlocked = "Sjælden Præstation Låst Op!";
var testdesc = "Dine meddelelser fungerer korrekt";

var addsound = "Tilføj Valgt Lyd";
var invalid = 'Ugyldig Filtype';
var addimage = 'Tilføj Valgt Billede';
var file = "FIL";
var nofolder = "Standard (Ingen Mappe Valgt)";
var novalidaudio = "Der er ingen gyldige lydfiler i ";
var soundmode = "LYDTILSTAND: ";
var randomised = "TILFÆLDIG";
var presskey = "...";
var custompos = "Indstil Brugerdefineret Skærmposition";
var settingpos = "Indstilling Af Hovedposition...";
var settingposrare = "Indstilling Af Sjælden Position...";

document.getElementById("steamkeybindlbl").innerHTML = "Steam Skærmbillede Knap:";
document.getElementById("langlbl").innerHTML = "Sprog:";
document.getElementById("raritylbl").innerHTML = "Sjældenhedsprocent: ";
document.getElementById("nosteamlbl").innerHTML = "Skjul Steam-Meddelelse";
document.getElementById("customiselbl").innerHTML = "TILPASSER...";
document.getElementById("customisermainlbl").innerHTML = "Hoved";
document.getElementById("customiserrarelbl").innerHTML = "Sjælden";
document.getElementById("customiserstylelbl").innerHTML = "MEDDELELSESSTIL:";
document.getElementById("notifypositionlbl").innerHTML = "SKÆRMPOSITION:";
document.getElementById("bgtypelbl").innerHTML = "BAGGRUNDSTYPE:";
document.getElementById("colourslbl").innerHTML = "FARVER";
document.getElementById("colour1lbl").innerHTML = "Farve 1";
document.getElementById("colour2lbl").innerHTML = "Farve 2";
document.getElementById("textcolourlbl").innerHTML = "Tekst Farve";
document.getElementById("imgselectlbl").innerHTML = "BAGGRUNDSBILLEDE:"
document.getElementById("roundnesslbl").innerHTML = "RUNDHED:";
document.getElementById("iconroundnesslbl").innerHTML = "IKON RUNDHED:";
document.getElementById("displaytimelbl").innerHTML = "DISPLAY TID:";
document.getElementById("scalelbl").innerHTML = "STØRRELSE:";
document.getElementById("styledefault").innerHTML = "Standard";
document.getElementById("typesolid").innerHTML = "Ensfarvet";
document.getElementById("typegradient").innerHTML = "Farvegradient";
document.getElementById("typeimg").innerHTML = "Baggrundsbillede";
document.getElementById("dragposlbl").innerHTML = "Brug Brugerdefineret Position";
document.getElementById("iconselectlbl").innerHTML = "BRUGERDEFINERET IKON:";
document.getElementById("fontsizelbl").innerHTML = "SKRIFTSTØRRELSE:";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "Nulstil Position";
document.getElementById("gameiconlbl").innerHTML = "Brug Spilikonet";
document.getElementById("typegame").innerHTML = "Spilkunst"
document.getElementById("brightnesslbl").innerHTML = "LYSSTYRKE"

document.getElementById("customiserstylelblrare").innerHTML = "MEDDELELSESSTIL:";
document.getElementById("notifypositionlblrare").innerHTML = "SKÆRMPOSITION:";
document.getElementById("bgtypelblrare").innerHTML = "BAGGRUNDSTYPE:";
document.getElementById("rarecolourslbl").innerHTML = "FARVER";
document.getElementById("colour1lblrare").innerHTML = "Farve 1";
document.getElementById("colour2lblrare").innerHTML = "Farve 2";
document.getElementById("textcolourlblrare").innerHTML = "Tekst Farve";
document.getElementById("rareimgselectlbl").innerHTML = "BAGGRUNDSBILLEDE:"
document.getElementById("roundnesslblrare").innerHTML = "RUNDHED:";
document.getElementById("iconroundnesslblrare").innerHTML = "IKON RUNDHED:";
document.getElementById("displaytimelblrare").innerHTML = "DISPLAY TID:";
document.getElementById("scalelblrare").innerHTML = "STØRRELSE:";
document.getElementById("styledefaultrare").innerHTML = "Standard";
document.getElementById("typesolidrare").innerHTML = "Ensfarvet";
document.getElementById("typegradientrare").innerHTML = "Farvegradient";
document.getElementById("typeimgrare").innerHTML = "Baggrundsbillede";
document.getElementById("dragposlblrare").innerHTML = "Brug Brugerdefineret Position";
document.getElementById("rareiconselectlbl").innerHTML = "BRUGERDEFINERET IKON:";
document.getElementById("fontsizelblrare").innerHTML = "SKRIFTSTØRRELSE:";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "Nulstil Position";
document.getElementById("gameiconlblrare").innerHTML = "Brug Spilikonet";
document.getElementById("typegamerare").innerHTML = "Spilkunst"
document.getElementById("brightnesslblrare").innerHTML = "LYSSTYRKE"

document.getElementById("trackopacitylbl").innerHTML = "Gennemsigtighed:";
document.getElementById("resetlbl").innerHTML = "Nulstil Applikation";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Spildetaljer</a> skal også indstilles til "Offentlig".';
document.getElementById("allpercentlbl").innerHTML = "Vis Alle Procenter";
document.getElementById("iconanimationlbl").innerHTML = "Vis Sjældne Ikonanimationer";
document.getElementById("hwalbl").innerHTML = "Deaktiver Hardwareacceleration";
document.getElementById("nvdalbl").innerHTML = "Aktiver NVDA-support";
document.getElementById("gamecompletionlbl").innerHTML = "Vis Meddelelse Om Spilafslutning";
document.getElementById("ssoverlaylbl").innerHTML = "Gem Skærmbilleder med Overlay";
document.getElementById("ssoverlaypathlbl").innerHTML = "Sti:";
document.getElementById("opacitylbl").innerHTML = "Gennemsigtighed:";
document.getElementById("ssmaintestbtn").innerHTML = "SE HOVEDOVERLAG";
document.getElementById("ssraretestbtn").innerHTML = "SE SJÆLDNE OVERLAG";

var secret = "Hemmelig";
var gamecomplete = "Spil Færdig!";
var allunlocked = "Du har låst op for alle præstationer!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `Deltag i <span id="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;Betakanal&nbsp;</span> for at få tidlig adgang til nye funktioner!`
document.getElementById("betatest").innerHTML = "Test nye funktioner før officiel udgivelse"
document.getElementById("betaoptin").innerHTML = "Tilmeld dig/fravælg Betakanalen til enhver tid"
document.getElementById("betabugs").innerHTML = "Fjern fejl og forbedre appen"
document.getElementById("betadiscord").innerHTML = `Dedikeret&nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp;Discord-kanal`
document.getElementById("betafb").innerHTML = "Giv feedback om kommende tilføjelser"
document.getElementById("betabugswarn").innerHTML = "<u>Bugs er sandsynlige</u>&nbsp;(ikke for alle!)"
document.getElementById("betawarntext").innerHTML = "Steam Achievement Notifier vil genstarte efter tilslutning til betakanalen"
document.getElementById("betaok").innerHTML = "Ja, det lyder godt!"
document.getElementById("betacancel").innerHTML = "Nej, jeg bliver her..."

document.getElementById("leavebetatitle").innerHTML = "Forlad Betakanalen?"
document.getElementById("leavebetasub").innerHTML = "Appen vender tilbage til den seneste officielle udgivelse"
document.getElementById("leavebetaok").innerHTML = "Forlad Betakanalen"
document.getElementById("leavebetacancel").innerHTML = "Bliv på Betakanalen"

var betajoin = "Tilmeld dig Betakanalen"
var betaleave = "Forlad Betakanalen"
var betaerrortext = "Kan ikke opdatere til Betakanal!"
var betaerrorsub = "Det ser ud til, at du ikke har en netværksforbindelse. Intet internet = Ingen Beta!"