# Steam Achievement Notifier - Decky Loader plugin

Runs Steam Achievement Notifier (SAN) in Steam Deck/SteamOS **Game Mode**.

## How it works

Game Mode runs under the gamescope compositor, which only displays the focused game and Steam's own overlay. Ordinary "always on top" windows are never shown.

gamescope does, however, composite any X11 window with the `GAMESCOPE_EXTERNAL_OVERLAY` atom set on top of the game (this is how `mangoapp`/the performance overlay works). When SAN detects a gamescope session (`--gamescope`, `$GAMESCOPE_WAYLAND_DISPLAY` or `XDG_CURRENT_DESKTOP=gamescope`), it:

- Renders the notification, "Now Tracking" and error notification windows offscreen, and draws their frames in a single fullscreen overlay window at each notification's position (`src/app/gamescope.ts`). gamescope always draws an external overlay from the top-left of the screen, and only one at a time, so marking the notification windows directly would ignore the user's position setting
- Sets `GAMESCOPE_EXTERNAL_OVERLAY` on that overlay window via `xprop`, falling back to `libX11` through Python `ctypes`
- Keeps the main window hidden, so it doesn't steal focus from the game
- Skips the "Release Game" dialog

This plugin is just a launcher: it starts the SAN AppImage with the Game Mode session's environment (copied from the running `steam` process), and adds a Quick Access Menu panel to start/stop SAN, trigger a test notification, and show the currently tracked game.

The tracked game is shared via a JSON status file: the plugin passes its path to SAN in `SAN_STATUS_FILE`, and SAN writes the game's AppID, name and achievement progress there whenever a game starts/stops being tracked or an achievement is unlocked.

## Requirements

- A SAN AppImage built from a version containing `src/app/gamescope.ts` (`npm run linux`, on Linux)
- The AppImage placed in `~/Applications` (or `~/AppImages`, `~/Downloads`, `~/Desktop`, `~`). The newest matching `SteamAchievementNotifier*.AppImage` is used
- SAN configured beforehand in Desktop Mode (the settings window isn't accessible in Game Mode). The "OS" notification preset is not supported in Game Mode - use any other preset

## Known limitations

- **Notifications are not visible while Steam's Performance Overlay (MangoHud) is enabled.** gamescope only composites one external overlay window at a time, and prefers `mangoapp`'s (tagged via `GAMESCOPE_MANGOAPP_MSG_TYPE`) over any untagged window, so SAN's overlay is never drawn while it's active. Notification sounds still play.

## Quick test without the plugin

Over SSH (or Konsole before switching), with Game Mode active and a game running:

```sh
DISPLAY=:0 ~/Applications/SteamAchievementNotifier_V1.9.49.AppImage --ozone-platform=x11 --gamescope
# then, from a second shell:
DISPLAY=:0 ~/Applications/SteamAchievementNotifier_V1.9.49.AppImage --ozone-platform=x11 --gamescope --testnotify
```

If the test notification doesn't appear, try `DISPLAY=:1`, and check `~/.local/share/Steam Achievement Notifier (V1.9)/logs` for `GAMESCOPE_EXTERNAL_OVERLAY` warnings.

## Build & install

```sh
cd decky
pnpm i
pnpm build
```

Copy `plugin.json`, `package.json`, `main.py` and `dist/` into `~/homebrew/plugins/SteamAchievementNotifier/` (requires `sudo`), then restart Decky - or zip that folder and use **Decky Settings > Developer > Install Plugin from ZIP**.

Plugin logs: `~/homebrew/logs/SteamAchievementNotifier/` (SAN's stdout/stderr is written to `san.log` there).
