import asyncio
import json
import os
import re
import pwd
import signal
import subprocess

import decky

# Launches the Steam Achievement Notifier AppImage inside the Game Mode (gamescope) session.
# SAN itself detects gamescope and marks its notification windows with `GAMESCOPE_EXTERNAL_OVERLAY`, so they are composited above the running game.

SETTINGS_PATH = os.path.join(decky.DECKY_PLUGIN_SETTINGS_DIR, "settings.json")
LOG_PATH = os.path.join(decky.DECKY_PLUGIN_LOG_DIR, "san.log")
# SAN writes the currently tracked game here (see `gamescope.writestatus()` in `src/app/gamescope.ts`)
STATUS_PATH = os.path.join(decky.DECKY_PLUGIN_RUNTIME_DIR, "status.json")
DEFAULT_SETTINGS = {"appimage": "", "autostart": True}
SEARCH_SUBDIRS = ("Applications", "AppImages", "Downloads", "Desktop", "")

# Only these vars are copied from Steam's environment - Steam's own `LD_PRELOAD`/`LD_LIBRARY_PATH` (overlay renderer, Steam Runtime)
# and Decky's PyInstaller `LD_LIBRARY_PATH` would otherwise break the AppImage
ENV_WHITELIST = [
    "DISPLAY",
    "XAUTHORITY",
    "XDG_RUNTIME_DIR",
    "XDG_CURRENT_DESKTOP",
    "XDG_SESSION_TYPE",
    "DBUS_SESSION_BUS_ADDRESS",
    "GAMESCOPE_WAYLAND_DISPLAY",
    "PULSE_SERVER",
    "PIPEWIRE_RUNTIME_DIR",
    "HOME",
    "USER",
    "LOGNAME",
    "LANG",
    "LC_ALL",
]


class Plugin:
    proc: subprocess.Popen | None = None
    settings: dict = dict(DEFAULT_SETTINGS)
    last_found: str | None = ""

    # ---- Settings ----

    def _load_settings(self):
        try:
            with open(SETTINGS_PATH) as f:
                self.settings = {**DEFAULT_SETTINGS, **json.load(f)}
        except (FileNotFoundError, json.JSONDecodeError):
            self.settings = dict(DEFAULT_SETTINGS)

    def _save_settings(self):
        os.makedirs(os.path.dirname(SETTINGS_PATH), exist_ok=True)
        with open(SETTINGS_PATH, "w") as f:
            json.dump(self.settings, f, indent=4)

    # ---- Helpers ----

    def _search_dirs(self) -> list[str]:
        # `DECKY_USER_HOME` alone isn't always the deck user's home (e.g. depending on how the plugin was installed), so check every likely candidate
        homes = [decky.DECKY_USER_HOME, os.environ.get("HOME"), os.path.expanduser("~"), "/home/deck"]
        try:
            homes.append(pwd.getpwnam(decky.DECKY_USER).pw_dir)
        except (KeyError, AttributeError):
            pass

        dirs = []
        for home in filter(None, homes):
            for sub in SEARCH_SUBDIRS:
                d = os.path.normpath(os.path.join(home, sub))
                d not in dirs and dirs.append(d)
        return dirs

    @staticmethod
    def _is_san_appimage(name: str) -> bool:
        # Matches "SteamAchievementNotifier_V1.9.49.AppImage", "Steam Achievement Notifier (1).appimage" etc.
        normalised = name.lower().replace(" ", "").replace("_", "").replace("-", "")
        return normalised.endswith(".appimage") and "achievementnotifier" in normalised

    def _find_appimage(self) -> str | None:
        configured = self.settings.get("appimage")
        if configured and os.path.isfile(configured):
            return configured

        matches, errors = [], []
        for d in self._search_dirs():
            try:
                matches += [os.path.join(d, n) for n in os.listdir(d) if self._is_san_appimage(n) and os.path.isfile(os.path.join(d, n))]
            except FileNotFoundError:
                continue
            except OSError as err:
                errors.append(f"{d}: {err}")

        # Prefer the most recently modified AppImage (usually the newest version)
        found = max(matches, key=os.path.getmtime) if matches else None

        # `get_status` is polled by the frontend, so only log when the result changes
        if found != self.last_found:
            self.last_found = found
            if found:
                decky.logger.info(f"Using AppImage: {found}")
            else:
                decky.logger.warning(f"No SAN AppImage found (uid {os.getuid()}). Searched: {self._search_dirs()}")
            for err in errors:
                decky.logger.warning(f"Unable to read {err}")

        return found

    def _steam_env(self) -> dict | None:
        uid = os.getuid()
        for pid in filter(str.isdigit, os.listdir("/proc")):
            try:
                if os.stat(f"/proc/{pid}").st_uid != uid:
                    continue
                with open(f"/proc/{pid}/comm") as f:
                    if f.read().strip() != "steam":
                        continue
                with open(f"/proc/{pid}/environ", "rb") as f:
                    raw = f.read().split(b"\0")
            except (FileNotFoundError, PermissionError, ProcessLookupError):
                continue

            env = dict(e.decode(errors="replace").split("=", 1) for e in raw if b"=" in e)
            if "DISPLAY" in env:
                return env
        return None

    def _build_env(self, steamenv: dict) -> dict:
        env = {k: steamenv[k] for k in ENV_WHITELIST if k in steamenv}
        env["PATH"] = "/usr/local/bin:/usr/bin:/bin"
        env.setdefault("HOME", decky.DECKY_USER_HOME)
        env.setdefault("XDG_CURRENT_DESKTOP", "gamescope")
        env["SAN_STATUS_FILE"] = STATUS_PATH
        return env

    def _tracking(self) -> dict | None:
        if not self._running():
            return None
        try:
            with open(STATUS_PATH) as f:
                return json.load(f).get("tracking")
        except (FileNotFoundError, json.JSONDecodeError):
            return None

    def _running(self) -> bool:
        return self.proc is not None and self.proc.poll() is None

    # ---- Callables (frontend) ----

    async def get_status(self) -> dict:
        appimage = self._find_appimage()
        version = re.search(r"V(\d+(?:\.\d+)+)", os.path.basename(appimage)) if appimage else None

        return {
            "running": self._running(),
            "appimage": appimage,
            "version": version.group(1) if version else None,
            "tracking": self._tracking(),
            "autostart": self.settings.get("autostart", True),
            "log": LOG_PATH,
            "searched": self._search_dirs(),
        }

    async def set_autostart(self, value: bool) -> bool:
        self.settings["autostart"] = bool(value)
        self._save_settings()
        return self.settings["autostart"]

    async def set_appimage(self, path: str) -> str | None:
        self.settings["appimage"] = path.strip()
        self._save_settings()
        return self._find_appimage()

    async def start(self, args: list[str] | None = None) -> dict:
        if self._running() and not args:
            return {"ok": True, "message": "Already running"}

        appimage = self._find_appimage()
        if not appimage:
            return {"ok": False, "message": "SteamAchievementNotifier AppImage not found"}

        steamenv = self._steam_env()
        if not steamenv:
            return {"ok": False, "message": "Steam process/display not found"}

        os.chmod(appimage, os.stat(appimage).st_mode | 0o111)

        if not args:
            # Clear any stale status left over from a previous run
            os.makedirs(os.path.dirname(STATUS_PATH), exist_ok=True)
            try:
                os.remove(STATUS_PATH)
            except FileNotFoundError:
                pass

        cmd = [appimage, "--ozone-platform=x11", "--gamescope", *(args or [])]
        decky.logger.info(f"Launching: {cmd} (DISPLAY={steamenv.get('DISPLAY')})")

        log = open(LOG_PATH, "a")
        proc = subprocess.Popen(
            cmd,
            env=self._build_env(steamenv),
            cwd=decky.DECKY_USER_HOME,
            stdout=log,
            stderr=subprocess.STDOUT,
            stdin=subprocess.DEVNULL,
            start_new_session=True,
        )
        log.close()

        # Extra args (e.g. `--testnotify`) are forwarded to the running instance via Electron's single instance lock, and that process exits immediately
        if not args or not self._running():
            self.proc = proc

        return {"ok": True, "message": "Started"}

    async def stop(self) -> dict:
        if not self._running():
            self.proc = None
            return {"ok": True, "message": "Not running"}

        try:
            os.killpg(self.proc.pid, signal.SIGTERM)
            await asyncio.get_running_loop().run_in_executor(None, self.proc.wait, 10)
        except subprocess.TimeoutExpired:
            os.killpg(self.proc.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass

        self.proc = None
        return {"ok": True, "message": "Stopped"}

    async def test_notification(self) -> dict:
        if not self._running():
            return {"ok": False, "message": "SAN is not running"}
        return await self.start(["--testnotify"])

    # ---- Lifecycle ----

    async def _autostart(self):
        # Decky loads before Steam has fully started in Game Mode, so wait for the Steam process to appear
        for _ in range(60):
            if self._steam_env():
                await asyncio.sleep(5)  # Give Steam a moment to finish initialising
                result = await self.start()
                decky.logger.info(f"Autostart: {result['message']}")
                return
            await asyncio.sleep(2)
        decky.logger.warning("Autostart: Steam process not found - giving up")

    async def _main(self):
        self._load_settings()
        if self.settings.get("autostart"):
            asyncio.get_running_loop().create_task(self._autostart())

    async def _unload(self):
        await self.stop()

    async def _uninstall(self):
        pass
