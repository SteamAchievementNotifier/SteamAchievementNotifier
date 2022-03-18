const https = require('https');
const path1 = require('path');
const fs1 = require('fs');

var sanjsfile = "san1.8.js";
var sanjsarray = [];
var sanjslatestver;
var sanjsscript = document.createElement("script");

var tooltipfile = "tooltip.js";
var tooltiparray = [];
var tooltiplatestver;
var tooltipscript = document.createElement("script");

// fetch("https://api.github.com/repos/steamachievementnotifier/steamachievementnotifier/commits").then(response => response.json()).then((data) => {
fetch("https://api.github.com/repos/jackson0ne/testing/commits").then(response => response.json()).then((data) => {

    function FindLatestSANJSVer() {
        return new Promise((resolve, reject) => {
            for (const i in data) {
                if (data[i].commit.message == "Update san1.8.js") {
                    sanjsarray.push(data[i].sha)
                }
            }

            resolve(sanjslatestver = sanjsarray[0]);
        });
    }

    async function GetLatestSANJSVer() {
        await FindLatestSANJSVer();

        // const scripturl = `https://cdn.jsdelivr.net/gh/steamachievementnotifier/steamachievementnotifier@${sanjslatestver}/${sanjsfile}`;
        const scripturl = `https://cdn.jsdelivr.net/gh/jackson0ne/testing@${sanjslatestver}/${sanjsfile}`;

        function CheckScriptURL() {
            return new Promise((resolve, reject) => {
                https.get(scripturl, (response) => {
                    if (response.statusCode == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }

        async function SetScriptSrc() {
            try {
                await CheckScriptURL();
                console.log(`%c"${sanjsfile}" loaded successfully!`, "color: limegreen; font-family: 'Bahnschrift'");
                sanjsscript.src = scripturl;
                document.body.appendChild(sanjsscript);

                https.get(scripturl, (response) => {
                    var jsfile = fs1.createWriteStream(path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",sanjsfile));
                    response.pipe(jsfile);
                    jsfile.on("finish", () => {
                        jsfile.close();
                        console.log(`%cUpdated ${process.env.LOCALAPPDATA}\\Steam Achievement Notifier (V1.8)\\store\\${sanjsfile} to latest version`, "color: yellow; font-family: 'Bahnschrift'");
                    });
                });
            } catch (err) {
                console.log(`%cUnable to load "${sanjsfile}" from URL - loading fallback script...`, "color: orange; font-family: 'Bahnschrift'");
                
                sanjsscript.src = path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",sanjsfile);
                document.body.appendChild(sanjsscript);

                console.log(`%cLocal backup script ("${sanjsfile}") loaded successfully`, "color: limegreen; font-family: 'Bahnschrift'");
            }
        }

        SetScriptSrc();
    }

    GetLatestSANJSVer();

    function FindLatestTooltipVer() {
        return new Promise((resolve, reject) => {
            for (const i in data) {
                if (data[i].commit.message == "Update tooltip.js") {
                    tooltiparray.push(data[i].sha)
                }
            }

            resolve(tooltiplatestver = tooltiparray[0]);
        });
    }

    async function GetLatestTooltipVer() {
        await FindLatestTooltipVer();

        // const scripturl = `https://cdn.jsdelivr.net/gh/steamachievementnotifier/steamachievementnotifier@${tooltiplatestver}/${tooltipfile}`;
        const ttscripturl = `https://cdn.jsdelivr.net/gh/jackson0ne/testing@${tooltiplatestver}/${tooltipfile}`;

        function CheckTTScriptURL() {
            return new Promise((resolve, reject) => {
                https.get(ttscripturl, (response) => {
                    if (response.statusCode == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }

        async function SetTTScriptSrc() {
            try {
                await CheckTTScriptURL();
                console.log(`%c"${tooltipfile}" loaded successfully!`, "color: limegreen; font-family: 'Bahnschrift'");
                tooltipscript.src = ttscripturl;
                document.body.appendChild(tooltipscript);

                https.get(ttscripturl, (response) => {
                    var ttfile = fs1.createWriteStream(path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",tooltipfile));
                    response.pipe(ttfile);
                    ttfile.on("finish", () => {
                        ttfile.close();
                        console.log(`%cUpdated ${process.env.LOCALAPPDATA}\\Steam Achievement Notifier (V1.8)\\store\\${tooltipfile} to latest version`, "color: yellow; font-family: 'Bahnschrift'");
                    });
                });
            } catch (err) {
                console.log(`%cUnable to load "${tooltipfile}" from URL - loading fallback script...`, "color: orange; font-family: 'Bahnschrift'");
                
                tooltipscript.src = path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",tooltipfile);
                document.body.appendChild(tooltipscript);

                console.log(`%cLocal backup script ("${tooltipfile}") loaded successfully`, "color: limegreen; font-family: 'Bahnschrift'");
            }
        }

        SetTTScriptSrc();
    }

    GetLatestTooltipVer();
}).catch((err) => {
    console.log(`%cUnable to load "${sanjsfile}" from URL - loading fallback script...`, "color: orange; font-family: 'Bahnschrift'");
    console.log(`%cUnable to load "${tooltipfile}" from URL - loading fallback script...`, "color: orange; font-family: 'Bahnschrift'");

    sanjsscript.src = path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",sanjsfile);
    document.body.appendChild(sanjsscript);

    console.log(`%cLocal backup script ("${sanjsfile}") loaded successfully`, "color: limegreen; font-family: 'Bahnschrift'");

    tooltipscript.src = path1.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.8)","store",tooltipfile);
    document.body.appendChild(tooltipscript);

    console.log(`%cLocal backup script ("${tooltipfile}") loaded successfully`, "color: limegreen; font-family: 'Bahnschrift'");
});