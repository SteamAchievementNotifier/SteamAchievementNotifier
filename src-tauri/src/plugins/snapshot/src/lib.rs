mod error;
mod plugin;
mod prelude;

use tauri::{
    plugin::{Builder, TauriPlugin},
    Wry,
};

pub use plugin::*;

pub fn init() -> TauriPlugin<Wry> {
    Builder::new("snapshot")
        .invoke_handler(tauri::generate_handler![snapshot])
        .build()
}
