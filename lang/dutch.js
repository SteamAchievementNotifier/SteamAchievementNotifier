document.getElementById("username").innerHTML = "Geen Gebruiker Gedetecteerd";
document.getElementById("gamestatus").innerHTML = "Geen Spel Gedetecteerd";
document.getElementById("soundfile").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
document.getElementById("soundfilerare").innerHTML = "Standaard (Geen Geluid Geselecteerd)";
document.getElementById("maincheevsound").innerHTML = "Hoofdgeluid";
document.getElementById("rarecheevsound").innerHTML = "Zeldzaam Geluid";
document.getElementById("test").innerHTML = "TOON TESTMELDING";
document.getElementById("testrare").innerHTML = "TOON ZELDZAME TESTMELDING";
document.getElementById("settingstitle").innerHTML = "INSTELLINGEN";
document.getElementById("configtitle").innerHTML = "CONFIGURATIE";
document.getElementById("apibox").placeholder = "Voer API Key in";
document.getElementById("steam64box").placeholder = "Voer Steam64ID in";
document.getElementById("other").innerHTML = "ANDERE";
document.getElementById("showscreenshotlbl").innerHTML = "Steam-Schermafbeelding Maken";
document.getElementById("showscreenshotlblrare").innerHTML = "Steam-Schermafbeelding Maken";
document.getElementById("previewlbl").innerHTML = "Schermafbeelding Voorbeeld"
document.getElementById("previewlblrare").innerHTML = "Schermafbeelding Voorbeeld"
document.getElementById("desktoplbl").innerHTML = "Snelkoppeling Naar Desktop Maken";
document.getElementById("startwinlbl").innerHTML = "Begin met Windows";
document.getElementById("startminlbl").innerHTML = "Start Geminimaliseerd";
document.getElementById("soundonlylbl").innerHTML = "Alleen Geluidsmodus";
document.getElementById("trackinglbl").innerHTML = 'Spelmelding Weergeven';

var nouser = "Geen Gebruiker Gedetecteerd";
var nogame = "Geen Spel Gedetecteerd";
var nosound = "Standaard (Geen Geluid Geselecteerd)";
var nosoundrare = "Standaard (Geen Geluid Geselecteerd)";
var rareheader = `'Zeldzame Prestatie Ontgrendeld!`;
var unlinked = "NIET GEKOPPELD";
var linked = "GEKOPPELD";
var novalue = "Voer alstublieft een waarde in";

var resettitle = "Toepassing Terugzetten Naar Standaard?";
var resetdesc = `WAARSCHUWING: Hiermee worden alle gebruikersinstellingen verwijderd!`;
var resetbtns = ["Resetten","Verwijderen","Annuleren"];

var traylabel = "Geen Spel Gedetecteerd";
var trayshow = "Toon";
var trayexit = "Sluit";


var achievementunlocked = "Prestatie Ontgrendeld!";
var rareachievementunlocked = "Zeldzame Prestatie Ontgrendeld!";
var testdesc = "Uw meldingen werken correct";

var addsound = "Geluid Toevoegen";
var invalid = 'Ongeldig Bestandstype';
var addimage = 'Voeg Afbeelding Toe';
var file = "DOSSIER";
var nofolder = "Standaard (Geen Map Geselecteerd)";
var novalidaudio = "Geen geldige audiobestanden in ";
var soundmode = "GELUID MODUS: ";
var randomised = "GERANDOMISEERD";
var presskey = "...";
var custompos = "Aangepaste Schermpositie Instellen";
var settingpos = "Hoofdpositie Instellen...";
var settingposrare = "Zeldzame Positie Instellen...";

document.getElementById("steamkeybindlbl").innerHTML = "Steam Schermafbeelding Knop";
document.getElementById("langlbl").innerHTML = "Taal:";
document.getElementById("raritylbl").innerHTML = "Zeldzaamheid: ";
document.getElementById("nosteamlbl").innerHTML = "Steam-Melding Verbergen";
document.getElementById("customiselbl").innerHTML = "BEWERK...";
document.getElementById("customisermainlbl").innerHTML = "Voornaamst";
document.getElementById("customiserrarelbl").innerHTML = "Zeldzaam";
document.getElementById("customiserstylelbl").innerHTML = "STIJL VAN MELDINGEN:";
document.getElementById("notifypositionlbl").innerHTML = "SCHERMPOSITIE:";
document.getElementById("bgtypelbl").innerHTML = "ACHTERGRONDTYPE:";
document.getElementById("colourslbl").innerHTML = "KLEUREN";
document.getElementById("colour1lbl").innerHTML = "Kleur 1";
document.getElementById("colour2lbl").innerHTML = "Kleur 2";
document.getElementById("textcolourlbl").innerHTML = "Tekstkleur";
document.getElementById("imgselectlbl").innerHTML = "ACHTERGROND AFBEELDING:"
document.getElementById("roundnesslbl").innerHTML = "RONDHEID:";
document.getElementById("iconroundnesslbl").innerHTML = "ICOON RONDHEID:";
document.getElementById("displaytimelbl").innerHTML = "WEERGAVETIJD:";
document.getElementById("scalelbl").innerHTML = "SCHAAL:";
document.getElementById("styledefault").innerHTML = "Standaard";
document.getElementById("typesolid").innerHTML = "Effen Kleur";
document.getElementById("typegradient").innerHTML = "Kleurverloop";
document.getElementById("typeimg").innerHTML = "Achtergrond Afbeelding";
document.getElementById("dragposlbl").innerHTML = "Aangepaste Schermpositie Gebruiken";
document.getElementById("iconselectlbl").innerHTML = "AANGEPASTE ICOON:";
document.getElementById("fontsizelbl").innerHTML = "LETTERTYPEGROOTTE:";
document.getElementById("dragposbtn").innerHTML = custompos;
document.getElementById("recenterbtn").innerHTML = "Positie Resetten";
document.getElementById("gameiconlbl").innerHTML = "Spel Icoon";
document.getElementById("typegame").innerHTML = "Spelkunst"
document.getElementById("brightnesslbl").innerHTML = "HELDERHEID"

document.getElementById("customiserstylelblrare").innerHTML = "STIJL VAN MELDINGEN:";
document.getElementById("notifypositionlblrare").innerHTML = "SCHERMPOSITIE:";
document.getElementById("bgtypelblrare").innerHTML = "ACHTERGRONDTYPE:";
document.getElementById("rarecolourslbl").innerHTML = "KLEUREN";
document.getElementById("colour1lblrare").innerHTML = "Kleur 1";
document.getElementById("colour2lblrare").innerHTML = "Kleur 2";
document.getElementById("textcolourlblrare").innerHTML = "Tekstkleur";
document.getElementById("rareimgselectlbl").innerHTML = "ACHTERGROND AFBEELDING:"
document.getElementById("roundnesslblrare").innerHTML = "RONDHEID:";
document.getElementById("iconroundnesslblrare").innerHTML = "ICOON RONDHEID:";
document.getElementById("displaytimelblrare").innerHTML = "WEERGAVETIJD:";
document.getElementById("scalelblrare").innerHTML = "SCHAAL:";
document.getElementById("styledefaultrare").innerHTML = "Standaard";
document.getElementById("typesolidrare").innerHTML = "Effen Kleur";
document.getElementById("typegradientrare").innerHTML = "Kleurverloop";
document.getElementById("typeimgrare").innerHTML = "Achtergrond Afbeelding";
document.getElementById("dragposlblrare").innerHTML = "Aangepaste Schermpositie Gebruiken";
document.getElementById("rareiconselectlbl").innerHTML = "AANGEPASTE ICOON:";
document.getElementById("fontsizelblrare").innerHTML = "LETTERTYPEGROOTTE:";
document.getElementById("dragposbtnrare").innerHTML = custompos;
document.getElementById("recenterbtnrare").innerHTML = "Positie Resetten";
document.getElementById("gameiconlblrare").innerHTML = "Spel Icoon";
document.getElementById("typegamerare").innerHTML = "Spelkunst"
document.getElementById("brightnesslblrare").innerHTML = "HELDERHEID"

document.getElementById("trackopacitylbl").innerHTML = "Transparantie:";
document.getElementById("resetlbl").innerHTML = "Applicatie Resetten";
document.getElementById("details").innerHTML = '<a id="gamedetails" href="steam://openurl/https://steamcommunity.com/id/' + username + '/edit/settings">Speldetails</a> moeten ook zijn ingesteld op "Openbaar".';
document.getElementById("allpercentlbl").innerHTML = "Toon Alle Percentages";
document.getElementById("iconanimationlbl").innerHTML = "Animatie Van Zeldzame Iconen Weergeven";
document.getElementById("hwalbl").innerHTML = "Hardwareversnelling Uitschakelen";
document.getElementById("nvdalbl").innerHTML = "NVDA-Ondersteuning Inschakelen";
document.getElementById("gamecompletionlbl").innerHTML = "Melding Game-Voltooiing Weergeven";
document.getElementById("ssoverlaylbl").innerHTML = "Schermafbeeldingen Opslaan met Overlay";
document.getElementById("ssoverlaypathlbl").innerHTML = "Pad:";
document.getElementById("opacitylbl").innerHTML = "Transparantie:";
document.getElementById("ssmaintestbtn").innerHTML = "VOORBEELD HOOFDOVERLAY";
document.getElementById("ssraretestbtn").innerHTML = "VOORBEELD ZELDZAME OVERLAY";

var secret = "Geheim";
var gamecomplete = "Spel Compleet!";
var allunlocked = "Je hebt alle prestaties ontgrendeld!";

// Beta Translations (App Revision 0.8)
document.getElementById("betatagline").innerHTML = `Doe mee met de <span of="betahighlight" style="color: blueviolet; font-weight: bold;">&nbsp;Bètakanaal&nbsp;</span> voor nieuwe functies!`
document.getElementById("betatest").innerHTML = "Test nieuwe functies vóór officiële release"
document.getElementById("betaoptin").innerHTML = "U kunt zich op elk moment afmelden voor het Bètakanaal"
document.getElementById("betabugs").innerHTML = "Verwijder bugs en verbeter de app"
document.getElementById("betadiscord").innerHTML = `Toegewijd&nbsp;<span style="background: #5662f6; padding: 2px 3px; border-radius: 2px;">#beta-testing</span>&nbsp;Discord-kanaal`
document.getElementById("betafb").innerHTML = "Feedback geven over aankomende toevoegingen"
document.getElementById("betabugswarn").innerHTML = "<u>Bugs zijn waarschijnlijk</u>&nbsp;(niet voor iedereen!)"
document.getElementById("betawarntext").innerHTML = "Steam Achievement Notifier wordt opnieuw opgestart nadat je lid bent geworden van het Bètakanaal"
document.getElementById("betaok").innerHTML = "Ja, klinkt goed!"
document.getElementById("betacancel").innerHTML = "Nee, ik blijf hier..."

document.getElementById("leavebetatitle").innerHTML = "Bètakanaal Verlaten?"
document.getElementById("leavebetasub").innerHTML = "App keert terug naar de meest recente officiële release"
document.getElementById("leavebetaok").innerHTML = "Bètakanaal Verlaten"
document.getElementById("leavebetacancel").innerHTML = "Blijf op Bètakanaal"

var betajoin = "Deelnemen aan Bètakanaal"
var betaleave = "Bètakanaal Verlaten"
var betaerrortext = "Kan niet updaten naar Bètakanaal!"
var betaerrorsub = "Het lijkt erop dat je geen netwerkverbinding hebt. Geen internet = geen Bèta!"