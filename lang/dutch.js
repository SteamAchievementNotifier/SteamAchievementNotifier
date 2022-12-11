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
document.getElementById("apibox").placeholder = "Voer API-Sleutel in";
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

document.getElementById("extwinlbltxt").innerHTML = "Dubbele Meldingen naar Venster"

// Fullscreen Notifications
// document.getElementById("fullscreenlbl").innerHTML = "Meldingen op Volledig Scherm"
// document.getElementById("fswarntitle").innerHTML = "VOORDAT JE START..."
// document.getElementById("fswarncontentmain").innerHTML = `Om meldingen over games te plaatsen die zijn ingesteld op "Volledig Scherm" of "Exclusief Volledig Scherm" in-game weergavemodi, moet de melding rechtstreeks in het spelproces worden geïnjecteerd om te worden weergegeven via een DirectX-spelvenster.<br><br>Dit betekent dat, aangezien de code van de game technisch wordt gewijzigd door een programma van een derde partij, games die Anti-Cheat-technologie gebruiken deze methode ongunstig kunnen beoordelen.<br><br>Hoewel geen enkele game problemen heeft vertoond tijdens het testen, wordt het over het algemeen aangeraden om <u>niet</u> de optie "Meldingen op Volledig Scherm" te gebruiken wanneer er een risico bestaat dat injectie wordt gedetecteerd door games die gebruik maken van Anti-Cheat-technologie (zoals in online competitieve spellen).`
// document.getElementById("fswarnimportant").innerHTML = `Door de optie "Meldingen op Volledig Scherm" in te schakelen en te gebruiken, stemt u er hierbij mee in dat u naar behoren bent geïnformeerd over en begrijpt welke risico's verbonden zijn aan het injecteren van inhoud van derden in Steam-spellen (zoals de methode die door Steam Achievement Notifier wordt gebruikt om inhoud op de top van games die zijn ingesteld om in het spel weergavemodi op volledig scherm te gebruiken), en dat u door deze optie in te schakelen, accepteert dat u dit op eigen risico doet, en daarom aanvaardt de ontwikkelaar van Steam Achievement Notifier (Jackson0ne) geen verantwoordelijkheid of aansprakelijkheid met betrekking tot het gebruik van deze optie.`
// document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">Door hieronder op de knop <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">AKKOORD</span> te klikken, accepteert u de bovenstaande voorwaarden en de optie "Meldingen op Volledig Scherm" wordt ingeschakeld.</div><div style="padding: 0px 10px 10px;">Door op de knop <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">NIET AKKOORD</span> hieronder te klikken, wordt dit bericht gesloten en wordt de optie "Meldingen op Volledig Scherm" is <u>niet</u> ingeschakeld.</div>`
// document.getElementById("fshidemsglbl").innerHTML = "Ik ga akkoord, laat dit bericht niet meer zien"
// document.getElementById("fsok").innerHTML = "AKKOORD"
// document.getElementById("fscancel").innerHTML = "NIET AKKOORD"
// document.getElementById("fsselectlbl").innerHTML = "Handmatig Spelvenster Selecteren"

// Privacy Policy
document.getElementById("pp").innerHTML = "Privacybeleid Bekijken"
document.getElementById("pptitle").innerHTML = "PRIVACYBELEID"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">GEBRUIK VAN STEAM WEB API-GEGEVENS</span>
    </div>
    <div class="ppbodycont">
    Steam Achievement Notifier gebruikt Valve's <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> om gegevens met betrekking tot het Steam-account van de gebruiker op te halen en weer te geven(s), via de Steam API-Sleutel/Steam64 ID-combinatie die door de gebruiker aan de applicatie is verstrekt. Deze gegevens omvatten:<br><br>
        <div class="ppbodyembed">
            • Statistieken voor vergrendelde en ontgrendelde prestaties<br>
            • Je Steam-gebruikersnaame<br>
            • Je gespeelde Steam-games<br>
        </div>
        <br>
        <i>Steam Achievement Notifier kan in de toekomst meer Steam Web API-gegevens gebruiken om extra applicatiefuncties en updates te bieden.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM API-SLEUTEL/STEAM64 ID GEBRUIK:</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier vereist dat de gebruiker zijn Steam API-Sleutel/Steam64 ID-combinatie invoert voor geverifieerde toegang tot de Steam Web API. Zonder deze informatie zijn weblinks (geleverd voor gebruik door Valve om toegang te krijgen tot de Steam Web API) die worden gebruikt om gegevens op te halen met betrekking tot de Steam-account(s) van een gebruiker - inclusief prestatiegegevens - niet toegankelijk.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM WEB API-GEGEVENSOPSLAG</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier slaat Steam Web API-gegevens tijdelijk lokaal op de pc van de gebruiker op, uitsluitend voor gebruik binnen de applicatie. Elke tijdelijke opslag van deze gegevens is uitsluitend bedoeld voor gebruik door Steam Achievement Notifier, en onder normale omstandigheden worden alle niet-permanente Steam Web API-gegevens gewist uit de lokale opslag bij het afsluiten van de applicatie.<br><br>
        Persistente gegevens die op het apparaat van de gebruiker zijn opgeslagen, bevatten alleen gegevens die door de applicatie zijn opgeslagen voor het gemak van de gebruiker, zoals de Steam Web API Key en Steam64 ID.<br><br>
        Deze gegevens kunnen indien nodig ook op elk moment handmatig door de gebruiker worden verwijderd. Bestanden gemaakt door Steam Achievement Notifier bevinden zich in de volgende map:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: Momenteel niet ondersteund
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STAND OVER GEGEVENSVERZAMELING</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier zal <u>nooit</u> gebruikersgegevens verzenden of opslaan buiten het lokale bestandssysteem van de gebruiker. Dit omvat alle informatie die via de Steam Web API is opgehaald voor gebruik binnen de applicatie, inclusief de Steam API-Sleutel/Steam64 ID-combinatie die aan de applicatie is verstrekt voor toegang tot de Steam Web API. De ontwikkelaar van Steam Achievement Notifier (Jackson0ne) heeft opzettelijk geen middelen toegevoegd om extern toegang te krijgen tot informatie die door de gebruiker aan de applicatie is verstrekt, deze te bekijken, te verzamelen of te verzenden.<br><br>
        Verzoeken om toegang tot gegevens van de Steam Web API worden gedaan vanuit de applicatie zelf met behulp van ingebouwde methoden, vergelijkbaar met functionaliteit die wordt geboden door webbrowsers. Deze verzoeken bevatten de Steam API-Sleutel/Steam64 ID-combinatie van de gebruiker zoals vereist door de Steam Web API, maar worden niet beschikbaar gesteld voor gebruik of onderschepping door andere applicaties.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">VERANTWOORDELIJKHEID VAN DE GEBRUIKER</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        DOOR HET DOWNLOADEN EN GEBRUIKEN VAN EEN OFFICIEEL GEGEVEN VERSIE VAN STEAM ACHIEVEMENT NOTIFIER VIA DE <span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICILE GITHUB REPOSITORY</span >, U, DE GEBRUIKER, HOUDT ZICH UITGEBREID AAN DE SECTIE 7 EN 8 VAN DE <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API-VOORWAARDEN VAN GEBRUIK</span>.
    </div>
`

// Achievement Stats Window (Beta Revision 0.6)
document.getElementById("statwinlbltxt").innerHTML = "Statistiekenvenster Openen"

statsresettitle = "Alle Opgeslagen Prestatiegegevens Resetten?"
statsresetbody = "Alle eerder opgeslagen prestatiegegevens worden van dit apparaat verwijderd. Je meest recente prestatiegegevens worden opgehaald wanneer het venster Prestatiestatistieken de volgende keer wordt geopend.\n\nHoud er rekening mee dat het ophalen van prestatiegegevens Steam Web API-aanroepen gebruikt voor elke game in de Steam-bibliotheek van de gebruiker. Valve beperkt het aantal Steam Web API-aanroepen tot 100,000 per dag voor de API-sleutel van elke gebruiker.\n\nAls gevolg hiervan kan dit, afhankelijk van het aantal games in je Steam-bibliotheek, de algemene functionaliteit van de applicatie beïnvloeden als de functie om je prestatiegegevens te resetten veel te veel wordt gebruikt."
statsresetbtns = ["Alle Prestatiestatistieken resetten", "Annuleren"]

statwincurrent = "HUIDIGE SPEL"
statwinall = "ALLE SPELEN"
statwincomplete = "COMPLEET (100%)"
statwintop5 = "BESTE 5 SPELLEN"

// Notify Debug (Beta Revision 0.6)
document.getElementById("notifydebuglbl").innerHTML = "Meldingsconsole Tonen"