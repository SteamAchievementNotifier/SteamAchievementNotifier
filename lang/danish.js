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
document.getElementById("apibox").placeholder = "Indtast API Nøgle";
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

document.getElementById("extwinlbltxt").innerHTML = "Dublerede Meddelelser til Vinduet"

// Fullscreen Notifications
// document.getElementById("fullscreenlbl").innerHTML = "Aktiver Fuldskærmsmeddelelser"
// document.getElementById("fswarntitle").innerHTML = "FØR DU STARTER..."
// document.getElementById("fswarncontentmain").innerHTML = `For at overlejre meddelelser oven på spil, der er indstillet til "Fuldskærm" eller "Eksklusiv Fuldskærm" i spillets visningstilstande, skal meddelelsen injiceres direkte i spilprocessen for at blive vist over et DirectX-spilvindue.<br><br>Dette betyder, at da spillets kode teknisk set bliver ændret af et tredjepartsprogram, kan spil, der bruger Anti-Cheat-teknologi, se denne metode ugunstigt.<br><br>Selvom ingen spil har vist nogen problemer under testning, anbefales det generelt <u>ikke</u> at bruge muligheden "Aktiver Fuldskærmsmeddelelser", når der er risiko for, at der bliver opdaget injektion af spil, der bruger Anti-Cheat-teknologi (f.eks. i online konkurrencespil).`
// document.getElementById("fswarnimportant").innerHTML = `Ved at aktivere og bruge valgmuligheden "Aktiver Fuldskærmsmeddelelser", accepterer du hermed, at du har informeret passende om og forstår de risici, der er forbundet med, at injicere tredjepartsindhold i Steam-spil (såsom den metode, Steam Achievement Notifier bruger til at vise indhold over spil, der er indstillet til at bruge fuldskærmsvisningstilstande i spillet), og at du ved at aktivere denne mulighed accepterer, at du gør det på egen risiko, og derfor påtager udvikleren af ​​Steam Achievement Notifier (Jackson0ne) intet ansvar eller erstatningsansvar vedrørende brug af denne mulighed.`
// document.getElementById("fswarninfocont").innerHTML = `<div style="padding: 10px;">Ved at klikke på knappen <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">ENIG</span> nedenfor, accepterer du ovenstående vilkår, og Muligheden "Aktiver Fuldskærmsmeddelelser" vil være aktiveret.</div><div style="padding: 0px 10px 10px;">Ved at klikke på knappen <span style="background: rgb(32,62,122); padding: 0px 5px; margin: 1px; border-radius: 2px;">UENIG</span> nedenfor, lukkes denne meddelelse, og Indstillingen "Aktiver Fuldskærmsmeddelelser" vil <u>ikke</u> være aktiveret.</div>`
// document.getElementById("fshidemsglbl").innerHTML = "Jeg er enig, vis ikke denne besked igen"
// document.getElementById("fsok").innerHTML = "ENIG"
// document.getElementById("fscancel").innerHTML = "UENIG"
// document.getElementById("fsselectlbl").innerHTML = "Vælg Spilvindue Manuelt"

// Privacy Policy
document.getElementById("pp").innerHTML = "Se Privatlivspolitik"
document.getElementById("pptitle").innerHTML = "PRIVATLIVSPOLITIK"
document.getElementById("ppcontent").innerHTML = `
    <div class="ppheader">
        <span class="ppheadercontent" style="border-radius: 5px 5px 0px 0px;">STEAM WEB API DATABRUG</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier bruger Valves <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev')">Steam Web API</span> til at hente og vise data relateret til brugerens Steam-konto(s), via Steam API Nøgle/Steam64 ID-kombinationen, som brugeren har leveret til applikationen. Disse data inkluderer:<br><br>
        <div class="ppbodyembed">
            • Statistik for låste og ulåste præstationer<br>
            • Dit Steam-brugernavn<br>
            • Dine spillede Steam-spil<br>
        </div>
        <br>
        <i>Steam Achievement Notifier kan bruge yderligere Steam Web API-data i fremtiden til at levere yderligere applikationsfunktioner og opdateringer.</i>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">BRUG AF STEAM API NØGLE/STEAM64 ID</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier kræver, at brugeren indtaster deres Steam API Nøgle/Steam64 ID-kombination for autentificeret adgang til Steam Web API. Uden disse oplysninger kan weblinks (leveret til brug af Valve for at få adgang til Steam Web API), der bruges til at hente data relateret til en brugers Steam-konto(r) - inklusive præstationsdata - ikke tilgås.
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STEAM WEB API DATALAGRING</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier gemmer midlertidigt Steam Web API-data lokalt på brugerens pc udelukkende til brug i applikationen. Enhver midlertidig lagring af disse data er udelukkende beregnet til brug af Steam Achievement Notifier, og under normale omstændigheder vil alle ikke-vedvarende Steam Web API-data blive ryddet fra lokal lagring ved afslutning af applikationen.<br><br>
        Vedvarende data, der er gemt på brugerens enhed, omfatter kun data, der er gemt af applikationen af hensyn til brugerens bekvemmelighed, såsom brugerens Steam API Nøgle og Steam64 ID.<br><br>
        Disse data kan også til enhver tid slettes manuelt af brugeren, hvis det kræves. Filer oprettet af Steam Achievement Notifier er placeret i følgende mappe:<br><br>
        <div class="ppbodyembed">
            • Windows: C:\\Users\\%username%\\AppData\\Local\\Steam Achievement Notifier (Vx.x)<br>
            • Linux: /home/user/.local/share/Steam Achievement Notifier (Vx.x)<br>
            • MacOS: I øjeblikket ikke understøttet
        </div>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">STANDNING TIL DATAINDSAMLING</span>
    </div>
    <div class="ppbodycont">
        Steam Achievement Notifier vil <u>aldrig</u> sende eller gemme brugerdata uden for brugerens lokale filsystem. Dette inkluderer enhver information hentet via Steam Web API til brug i applikationen, inklusive Steam API Nøgle/Steam64 ID-kombinationen leveret til applikationen for adgang til Steam Web API. Udvikleren af Steam Achievement Notifier (Jackson0ne) har med vilje ikke inkluderet nogen midler til eksternt at få adgang til, se, indsamle eller sende nogen information, der er givet til applikationen af brugeren.<br><br>
        Anmodninger om at få adgang til data fra Steam Web API er lavet inde fra selve applikationen ved hjælp af indbyggede metoder, svarende til funktionalitet leveret af webbrowsere. Disse anmodninger indeholder brugerens Steam API-nøgle/Steam64 ID-kombination som krævet af Steam Web API, men er ikke gjort tilgængelige til brug eller aflytning af andre applikationer.<br>
    </div>
    <div class="ppheader">
        <span class="ppheadercontent">BRUGERANSVAR</span>
    </div>
    <div class="ppbodycont" style="border-radius: 0px 0px 5px 5px;">
        VED AT DOWNLOADE OG BRUGE EN OFFICIEL UDGIVET VERSION AF STEAM ACHIEVEMENT NOTIFIER VIA DEN <span class="pplink" onclick="OpenLink('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">OFFICIELLE GITHUB REPOSITOR</span>, DU, BRUGEREN, VED UDVIDELSE, OVERHOLDER AFSNIT 7 OG 8 I <span class="pplink" onclick="OpenLink('https://steamcommunity.com/dev/apiterms')">STEAM WEB API VILKÅR TIL BRUG</span>.
    </div>
`

// Achievement Stats Window (Beta Revision 0.6)
// document.getElementById("statwinlbltxt").innerHTML = "Åbn Statistikvinduet"

statsresettitle = "Nulstille Alle Gemte Præstationsdata?"
statsresetbody = "Alle tidligere gemte præstationsdata vil blive fjernet fra denne enhed. Dine seneste præstationsdata vil blive hentet, næste gang vinduet Præstationsstatistik åbnes.\n\nVær opmærksom på, at hentning af præstationsdata bruger Steam Web API-kald for hvert ejet spil i brugerens Steam-bibliotek. Valve begrænser mængden af ​​Steam Web API-kald til 100.000 pr. dag for hver brugers API-nøgle.\n\nSom et resultat, afhængigt af mængden af ​​spil i dit Steam-bibliotek, kan dette påvirke den generelle funktionalitet af applikationen, hvis funktionen til at nulstille dine præstationsdata er meget overudnyttet."
statsresetbtns = ["Nulstil alle Præstationsstatistikker", "Afbestille"]

statwincurrent = "AKTUELLE SPIL"
statwinall = "ALLE SPIL"
statwincomplete = "FULDFØRT (100 %)"
statwintop5 = "BEDSTE 5 SPIL"