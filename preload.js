function LoadSuccess() {
    console.log("Successfully loaded \"san.js\".");
}

function LoadError() {
    console.log("Unable to load \"san.js\" - Please check your network connection.");
    document.getElementById("warn").style.display = "flex";
    document.getElementById("maincont").style.display = "none";
    document.getElementById("offlinecont").style.display = "flex";

    var check = setInterval(function() {
        fetch("https://dl.dropboxusercontent.com/s/tgyuzxtx5dn50d1/san.js", { cache: 'no-store', credentials: 'omit' }).then((response) => {
            if (response.status == 200) {
                clearInterval(check);
                const { ipcRenderer } = require('electron');
                ipcRenderer.send('resetcomplete');
            }
        }).catch((error) => {});
    }, 1000);
}

function ShowErrorMsg() {
    document.getElementById("warnmsg").style.display = "block";
}

function HideErrorMsg() {
    document.getElementById("warnmsg").style.display = "none";
}

function Reload() {
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('reloadapp');
}