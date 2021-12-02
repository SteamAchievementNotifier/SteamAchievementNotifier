const { app, BrowserWindow, Menu, Tray, nativeImage, nativeTheme, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const shell = require('electron').shell;

let win;
let tray = null;

function createWindow() {
   win = new BrowserWindow({
      width: 700,
      height: 500,
      transparent: true,
      autoHideMenuBar: true,
      frame: false,
      center: true,
      title: "Steam Achievement Notifier (V1.71)",
      icon: (path.join(__dirname, "img","sanlogo.ico")),
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      show: false,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
         enableRemoteModule: true,
         backgroundThrottling: false
      }
   })
   win.loadFile(path.join(__dirname, "index.html"));
   win.on('close', function(action) {
      action.preventDefault();
      win.hide();
   });
   win.once('ready-to-show', function() {
      try {
         const config = JSON.parse(fs.readFileSync(path.join(process.env.LOCALAPPDATA,"Steam Achievement Notifier (V1.7)","store","config.json")));
         if (config.startmin == "true") {
            win.hide();
         } else {
            win.show();
         }
      } catch {
         win.show();
      }
   });
}

app.whenReady().then(function() {
   tray = new Tray(path.join(__dirname,"img","sanlogo.ico"));
   
   const menuTemplate = [
      {
         label: "No Game Detected",
         icon: nativeImage.createFromPath(path.join(__dirname,"icons","dot_red.png")).resize({ width:16 }),
         enabled: false
      },
      {
         label: "",
         type: "separator"
      },
      {
         label: 'Show',
         icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
         click: function() {
            win.show();
         }
      },
      {
         label: 'Exit',
         icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
         click: function() {
            app.exit(0);
         }
      }
   ];
   
   const contextMenu = Menu.buildFromTemplate(menuTemplate);
   tray.setToolTip("Steam Achievement Notifier (V1.71)");
   tray.setContextMenu(contextMenu);
   tray.on('double-click', function() {
      win.show();
   });
   ipcMain.on('track', function(event, gamename) {
      console.log("Track has been sent");
      var gamenamelbl = gamename;
      if (gamenamelbl.length > 25) {
         gamenamelbl = gamenamelbl.substring(0, 25) + "...";
      }
      const menuTemplate = [
         {
            label: `${gamenamelbl}`,
            icon: nativeImage.createFromPath(path.join(__dirname,"icons","dot_green.png")).resize({ width:16 }),
            enabled: false
         },
         {
            label: "",
            type: "separator"
         },
         {
            label: 'Show',
            icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
            click: function() {
               win.show();
            }
         },
         {
            label: 'Exit',
            icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
            click: function() {
               app.exit(0);
            }
         }
      ];
      const contextMenu = Menu.buildFromTemplate(menuTemplate);
      tray.setToolTip("Steam Achievement Notifier (V1.71)");
      tray.setContextMenu(contextMenu);
   });
   ipcMain.on('idle', function() {
      console.log("Idle has been sent");
      const menuTemplate = [
         {
            label: "No Game Detected",
            icon: nativeImage.createFromPath(path.join(__dirname,"icons","dot_red.png")).resize({ width:16 }),
            enabled: false,
         },
         {
            label: "",
            type: "separator"
         },
         {
            label: 'Show',
            icon: nativeImage.createFromPath(path.join(__dirname,"img","show.png")).resize({ width:16 }),
            click: function() {
               win.show();
            }
         },
         {
            label: 'Exit',
            icon: nativeImage.createFromPath(path.join(__dirname,"img","close.png")).resize({ width:16 }),
            click: function() {
               app.exit(0);
            }
         }
      ];
      const contextMenu = Menu.buildFromTemplate(menuTemplate);
      tray.setToolTip("Steam Achievement Notifier (V1.71)");
      tray.setContextMenu(contextMenu);
   });
});

ipcMain.on('reset', function() {
   var resetoptions = {
      title: "Steam Achievement Notifier",
      icon: (path.join(__dirname, "img","sanlogo.ico")),
      message: "Reset App To Default?",
      detail: `WARNING: This will remove all user settings!`,
      buttons: ["Reset","Uninstall","Cancel"],
      defaultId: 2,
      cancelId: 2
   }

   var msg = dialog.showMessageBoxSync(win, resetoptions)
   if (msg == 0) {
      win.webContents.send('resetapp')
   } else if (msg == 1) {
      win.webContents.send('uninstallapp')
   }
});

ipcMain.on('resetcomplete', function() {
   app.relaunch();
   app.exit();
});

ipcMain.on('uninstallcomplete', function() {
   app.exit();
});

ipcMain.on('openapilink', function() {
   shell.openExternal("https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey");
});

ipcMain.on('opensteam64link', function() {
   shell.openExternal("https://steamid.io/lookup");
});

ipcMain.on('discord', function() {
   shell.openExternal("https://discord.gg/FxCFtpd3eu");
});

ipcMain.on('report', function() {
   shell.openExternal("https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/issues");
});

ipcMain.on('update', function(event, args) {
   var tag = args;
   shell.openExternal(`https://github.com/SteamAchievementNotifier/SteamAchievementNotifier/releases/tag/${tag}`);
});

ipcMain.on('reloadapp', function() {
   win.webContents.reloadIgnoringCache();
});

nativeTheme.themeSource = "dark";

const appLock = app.requestSingleInstanceLock();

if (!appLock) {
   app.quit();
} else {
   app.on('second-instance', function() {
      if (win) {
         win.show();
         win.focus();
      }
   })
}

app.on('ready', createWindow);