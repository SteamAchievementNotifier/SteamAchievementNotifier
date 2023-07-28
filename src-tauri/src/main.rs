#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager,Window,SystemTray,SystemTrayMenu,SystemTrayEvent,CustomMenuItem};
use std::{fs,path::{Path,PathBuf},time::{Duration,SystemTime,},thread::{sleep,spawn},process::Command,str,env,sync::{Arc,atomic::{AtomicBool,Ordering}}};
use serde::{Deserialize,Serialize};
use tauri_plugin_autostart::MacosLauncher;
use screenshots::Screen;
use tauri_plugin_window_state::{WindowExt,AppHandleExt,StateFlags};
use log::{LevelFilter,error,warn,info};
// use backtrace;

#[cfg(target_os="windows")]
mod windows_module {
    pub use std::{io,os::windows::process::CommandExt};
    pub use winreg::{enums::*, RegKey};
    pub use mslnk::ShellLink;
}

#[cfg(target_os="windows")]
use windows_module::*;

static mut STATUS: bool = false;

#[derive(Clone, Deserialize, Serialize)]
struct Payload {
    msg: Option<serde_json::Value>,
    optional: Option<serde_json::Value>
}

#[cfg(target_os="windows")]
fn get_reg_value<T: winreg::types::FromRegValue>(path: &str,value: &str) -> io::Result<T> {
    let result = RegKey::predef(HKEY_CURRENT_USER).open_subkey(&path)?.get_value(&value)?;
    Ok(result)
}

#[tauri::command]
fn get_steam_path() -> serde_json::Value {
    #[cfg(target_os="windows")]
    {
        match get_reg_value::<String>("SOFTWARE\\Valve\\Steam", "SteamPath") {
            Ok(value) => serde_json::Value::String(value),
            Err(_) => serde_json::Value::Null,
        }
    }

    #[cfg(target_os="linux")]
    {
        let home = match env::var("HOME") {
            Ok(val) => val,
            Err(_) => {
                return serde_json::Value::String(String::from("Unable to retrieve HOME environmental variable!"));
            }
        };

        let steam_path = format!("{}/.steam/steam",home);
        let flatpak_path = format!("{}/.var/app/com.valvesoftware.steam/.steam/steam",home);

        let file_path = if Path::new(&steam_path).exists() {
            Path::new(&steam_path)
        } else if Path::new(&flatpak_path).exists() {
            Path::new(&flatpak_path)
        } else {
            return serde_json::Value::Null;
        };

        serde_json::Value::String(file_path.to_string_lossy().into_owned())
    }
}

fn get_last_modified(path: &PathBuf) -> Result<i64, std::io::Error> {
    let metadata = fs::metadata(path)?;
    let modified = metadata.modified()?;

    Ok(modified.duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs() as i64)
}

fn start_san(window: Window) {
    unsafe {
        if STATUS {
            // return println!("\"start_san\" is already running!");
            return warn!("\"start_san\" is already running!");
        }
    }

    let mut pollrate: u64 = 1000;
    let should_break = Arc::new(AtomicBool::new(false));
    
    spawn(move || {
        let mut fnappid: u32 = 0;
        let mut running = false;
        let mut path = PathBuf::new();
        let mut last_modified: i64 = 0;

        loop {
            if should_break.load(Ordering::Relaxed) {
                break;
            }

            let should_break_clone = Arc::clone(&should_break);
            let handler = window.once("stop_san", move |_event| {
                // println!("\"stop_san\" event received");
                info!("\"stop_san\" event received");
                should_break_clone.store(true, Ordering::Relaxed);

                unsafe {
                    STATUS = false;
                }
            });

            #[cfg(target_os="windows")]
            match get_reg_value::<u32>("SOFTWARE\\Valve\\Steam","RunningAppID") {
                Ok(appid) if appid != 0 => {
                    if !running {
                        fnappid = appid;

                        window.emit("startsan",Payload { msg: Some("Starting SAN!".into()), optional: None })
                        .expect("Failed to emit \"startsan\" event!");

                        path.push(format!(
                            "{}/appcache/stats/UserGameStats_{}_{}.bin",
                            get_reg_value::<String>("SOFTWARE\\Valve\\Steam","SteamPath").unwrap(),
                            get_reg_value::<u32>("SOFTWARE\\Valve\\Steam\\ActiveProcess","ActiveUser").unwrap(),
                            fnappid,
                        ));

                        window.emit("track", Payload { msg: Some(format!("Tracking changes to file: {}", path.display()).into()), optional: Some(appid.to_string().into()) })
                        .expect("Failed to \"emit\" track event!");

                        last_modified = get_last_modified(&path).unwrap();
                        running = true;
                        pollrate = 100;
                    }

                    if let Ok(current_modified) = get_last_modified(&path) {
                        if current_modified != last_modified {
                            window.emit("modified", Payload { msg: Some("File has been modified - Checking achievement progress...".into()), optional: Some(appid.to_string().into()) })
                            .expect("Failed to emit \"modified\" event!");
                            last_modified = current_modified;
                        }
                    } else {
                        // eprintln!("Failed to get last modified time: {}", path.display());
                        error!("Failed to get last modified time: {}", path.display());
                    }
                },
                Ok(_) => {
                    running = false;
                    if fnappid != 0 {
                        fnappid = 0;
                        window.emit("appid", Payload { msg: Some("AppID is 0".into()), optional: Some(fnappid.into()) })
                        .expect("Failed to emit \"appid\" event!");
                    }

                    pollrate = 1000;
                },
                Err(err) => {
                    return window.emit("appid", Payload { msg: Some(serde_json::Value::String(err.to_string())), optional: None })
                    .expect("Failed to emit \"appiderr\" event!");
                }
            }

            // println!("{}",fnappid);
            sleep(Duration::from_millis(pollrate));
            window.unlisten(handler);
        }
    });
}

static mut WINSTATE: bool = true;

#[tauri::command]
fn close_window(window: Window) {
    if window.label() != "main" {
        // println!("\"{}\" closed",window.label());
        info!("\"{}\" closed",window.label());
        window.close().unwrap();
    } else {
        // window.hide().unwrap();
        unsafe {
            window.emit("hideui", Payload { msg: Some(serde_json::Value::Bool(WINSTATE)), optional: None }).expect("Failed to emit \"hideui\" event!");
            window.set_skip_taskbar(WINSTATE).unwrap();
            window.set_ignore_cursor_events(WINSTATE).unwrap();
            WINSTATE = !WINSTATE;
        }
    }
}

#[tauri::command]
async fn is_steam_running(window: Window) -> Result<bool, String> {
    #[cfg(target_os="windows")]
    const CREATE_NO_WINDOW: u32 = 0x08000000;

    loop {
        #[cfg(target_os="windows")]
        let output = Command::new("tasklist")
        .arg("/fi")
        .arg("imagename eq steam.exe")
        .creation_flags(CREATE_NO_WINDOW)
        .output()
        .expect("Failed to execute tasklist!");

        #[cfg(target_os="linux")]
        let output = Command::new("pgrep")
        .arg("-x")
        .arg("steam")
        .output()
        .expect("Failed to execute prgrep!");

        let processes = String::from_utf8_lossy(&output.stdout);

        if (cfg!(target_os="windows") && processes.contains("steam.exe")) || (cfg!(target_os="linux") && !output.stdout.is_empty()) {
            // println!("Steam is running");
            info!("Steam is running");
            window.emit("steam_running", Payload { msg: None, optional: None })
            .expect("Failed to emit \"steam_running\" event!");

            // println!("Running \"start_san\"...");
            info!("Running \"start_san\"...");
            start_san(window);
            unsafe { STATUS = true; }

            return Ok(true);
        } else {
            // println!("Steam is not running. Checking...");
            info!("Steam is not running. Checking...");
            std::thread::sleep(std::time::Duration::from_secs(1));
        }
    }
}

// Window Event Creation
// 2.Once Rust receives the "webviewready" event from an external window, emit the "webviewready" event back to the main window 
#[tauri::command]
fn ipc(window: Window, eventname: &str, payload: Payload) {
    // println!("Received event: \"{}\"", eventname);
    info!("Received event: \"{}\"", eventname);
    if eventname == "close" {
        window.close().unwrap();
    } else {
        if eventname == "startprogress" {
            if let Some(true) = payload.msg.clone().expect("Unable to clone \"payload.msg\"").as_bool() {
                window.open_devtools();
            }
        }

        window.emit(eventname,payload).unwrap();
    }
}

#[tauri::command]
async fn get_url_redirect(window: Window,steam64id: String,appid: String) -> Result<(), String> {
    let xmllist = format!("https://steamcommunity.com/profiles/{}/stats/{}/",steam64id,appid);
    let res = reqwest::get(&xmllist).await.map_err(|err| err.to_string())?;

    // println!("Status: {}", res.status());
    info!("Status: {}", res.status());
    // println!("Redirected: {}", res.url());
    info!("Redirected: {}", res.url());

    if res.status().to_string() == "200 OK" {
        window.emit("redirect", Payload { msg: Some(serde_json::Value::String(res.url().to_string())), optional: None }).map_err(|err| err.to_string())?;
    } else {
        window.emit("redirect", Payload { msg: None, optional: None }).unwrap();
    }

    Ok(())
}

#[tauri::command]
fn desktop_shortcut(path: String) {
    match env::current_exe() {
        Ok(exepath) => {
            #[cfg(target_os="windows")]
            {
                let target = format!(r"{}",exepath.to_string_lossy());
                let lnk = format!(r"{}",path);
                let sl = ShellLink::new(&target).unwrap();
                sl.create_lnk(&lnk).unwrap();
                
                // println!("{} {}",target,lnk);
                info!("{} {}",target,lnk);
            }
            
            #[cfg(target_os="linux")]
            {
                let content = format!(
                    r#"
                    [Desktop Entry]
                    Version=1.85
                    Name=Steam Achievement Notifier (V1.85)
                    Comment=Enhance your Steam achievement experience!
                    Exec={}
                    Terminal=false
                    Type=Application
                    Categories=Utility;
                    "#,
                    exepath.to_string_lossy(),
                    // Icon
                );

                let mut file = fs::File::create(path)?;
                file.write_all(content.as_bytes())?;
            }
        },
        Err(error) => {
            // println!("Error: {error}");
            error!("Error: {error}");
        },
    }
}

fn check_dir_for_file(file: &str) -> Result<String, String> {
    #[cfg(target_os="windows")]
    let local_app_data = match env::var("LOCALAPPDATA") {
        Ok(val) => val,
        Err(_) => {
            return Err(String::from("Unable to retrieve LOCALAPPDATA environmental variable!"));
        }
    };

    #[cfg(target_os="linux")]
    let local_app_data = match env::var("HOME") {
        Ok(val) => format!("{}/.cache",val),
        Err(_) => {
            return Err(String::from("Unable to retrieve HOME environmental variable!"));
        }
    };

    let file_path = Path::new(&local_app_data).join("SteamAchievementNotifierV1.85").join(file);

    if file_path.exists() {
        Ok(String::from(format!("{}",file_path.display())))
    } else {
        Err(String::from(format!("{}",file_path.display())))
    }
}

fn exit_app(handle: &tauri::AppHandle) {
    handle.save_window_state(StateFlags::all()).expect("Failed to save window state!");
    handle.exit(0);
}

#[tauri::command]
fn available_monitors() -> Vec<serde_json::Value> {
    let screens = Screen::all().unwrap();

    let mut monitors: Vec<serde_json::Value> = Vec::new();

    for screen in screens {
        let display_info = serde_json::json!({
            "id": screen.display_info.id,
            "width": screen.display_info.width,
            "height": screen.display_info.height,
            "is_primary": screen.display_info.is_primary
        });

        monitors.push(display_info);
    }

    return monitors;
}

#[tauri::command]
fn take_screenshot(handle: tauri::AppHandle, window: Window, id: &str) {
    let appcachedir = handle.path_resolver().app_cache_dir().expect("Unable to retrieve appCacheDir!");
    let file_path = Path::new(&appcachedir).join("src.png");

    let id: u32 = id.parse().expect("Unable to parse \"id\" &str!");
    let screens = Screen::all().unwrap();

    for screen in screens {
        if screen.display_info.id == id {
            let image = screen.capture().expect("Failed to capture screenshot");
            let buffer = image.to_png().expect("Failed to create PNG Buffer");
            fs::write(file_path.clone(),buffer).expect("Failed to write screenshot");
            window.emit("ssready", Payload { msg: None, optional: None }).unwrap();
        }
    }
}

#[tauri::command]
fn press_key(key: &str) {
    let cmd: String = format!("Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait(\"{}\");",&key);

    // println!("{}",cmd);
    info!("{}",cmd);

    let status = if cfg!(target_os = "windows") {
        Command::new("powershell.exe")
        .args(&["-Command",&cmd])
        .status()
        .expect("failed to execute process")
    } else {
        Command::new("sh")
        .arg("-c")
        .arg("echo hello")
        .status()
        .expect("failed to execute process")
    };

    match status.code() {
        Some(code) => {
            // println!("Exited with status code: {code}");
            info!("Exited with status code: {code}");
        },
        None => {
            // println!("Process terminated by signal");
            warn!("Process terminated by signal");
        }
    }
}

fn setup_logger(app: &tauri::App) -> Result<(), Box<dyn std::error::Error>> {
    let appcachedir = app.path_resolver().app_cache_dir().expect("Unable to retrieve appCacheDir!");
    let log_path = Path::new(&appcachedir).join("rust.log");
    let log_file = fs::File::create(log_path).expect("Failed to create log file");
    let logger_config = fern::Dispatch::new()
    .format(|out, message, record| {
        out.finish(format_args!(
            "[{}][{}] {}",
            record.level(),
            record.target(),
            message
        ))
    })
    .level(LevelFilter::Debug)
    .chain(log_file)
    .apply();

    if let Err(e) = logger_config {
        eprintln!("Failed to initialize logger: {}", e);
        return Err(e.into());
    }

    Ok(())
}

#[tauri::command]
fn test_panic() {
    panic!("This is a test panic");
}

fn main() {
    match check_dir_for_file("hwa") {
        Ok(file_path) => {
            env::set_var("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--disable-gpu --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-renderer-backgrounding");
            // println!("HWA DISABLED (\"{}\" exists!)",file_path);
            info!("HWA DISABLED (\"{}\" exists!)",file_path);
        }
        Err(file_path) => {
            env::set_var("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-renderer-backgrounding");
            // println!("HWA ENABLED (\"{}\" does not exist!)",file_path);
            info!("HWA ENABLED (\"{}\" does not exist!)",file_path);
        }
    }

    let quit = CustomMenuItem::new("quit".to_string(),"Quit");
    let show = CustomMenuItem::new("show".to_string(),"Show");
    let tray_menu = SystemTrayMenu::new()
    // .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(show)
    .add_item(quit);

    let tray = SystemTray::new()
    .with_menu(tray_menu)
    .with_tooltip("Steam Achievement Notifier (V1.85)");
    
    tauri::Builder::default()
    .plugin(tauri_plugin_fs_extra::init())
    .plugin(tauri_plugin_upload::init())
    .plugin(tauri_plugin_autostart::init(MacosLauncher::LaunchAgent, Some(vec!["--flag1", "--flag2"])))
    .plugin(tauri_plugin_snapshot::init())
    .plugin(tauri_plugin_window_state::Builder::default()
    .with_denylist(&[&"notify",&"info",&"ss",&"poswin"])
    .build())
    .system_tray(tray)
    .on_system_tray_event(|app,event| match event {
        SystemTrayEvent::DoubleClick {..} => {
            let window = app.get_window("main").unwrap();
            // window.show().unwrap();
            unsafe { WINSTATE = false; }
            close_window(window);
        },
        SystemTrayEvent::MenuItemClick { id, .. } => {
            match id.as_str() {
                "quit" => { exit_app(app) }
                "show" => {
                    let window = app.get_window("main").unwrap();
                    // window.show().unwrap();
                    unsafe { WINSTATE = false; }
                    close_window(window);
                }
                _ => {}
            }
        }
        _ => {}
    })
    .setup(|app| {
        setup_logger(app).unwrap_or_else(|e| {
            eprintln!("Failed to set up logger: {}",e);
        });

        std::panic::set_hook(Box::new(|panic_info| {
            // let backtrace = backtrace::Backtrace::new();
            error!("PANIC: {:?}",panic_info);
            // error!("Backtrace: {:?}",backtrace);
        }));

        let window = app.get_window("main").unwrap();
        
        #[cfg(debug_assertions)]
        window.open_devtools();

        match check_dir_for_file("startmin") {
            Ok(file_path) => {
                // window.hide().unwrap();
                unsafe { WINSTATE = false; }
                close_window(window);
                // println!("\"{}\" exists!",file_path);
                info!("\"{}\" exists!",file_path);
            }
            Err(file_path) => {
                window.show().unwrap();
                window.restore_state(StateFlags::all()).expect("Failed to restore window state!");
                // println!("\"{}\" does not exist!",file_path);
                info!("\"{}\" does not exist!",file_path);
            }
        }
        
        Ok(())
    })
    .invoke_handler(tauri::generate_handler![
        close_window,
        get_steam_path,
        is_steam_running,
        ipc,
        get_url_redirect,
        desktop_shortcut,
        take_screenshot,
        available_monitors,
        press_key,
        test_panic
    ])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}