#[cfg(target_os = "linux")]
mod linux;
#[cfg(target_os = "macos")]
mod macos;
#[cfg(target_os = "windows")]
mod windows;

mod save;
mod types;

pub use types::*;

use crate::prelude::*;
use std::sync::mpsc::channel;
use tauri::{command, Window};

use self::save::save_to_disk;

#[command(async)]
pub fn snapshot(window: Window, options: Options) -> Result<Vec<u8>> {
    let (tx, rx) = channel::<Result<Vec<u8>>>();

    #[allow(unused_variables)]
    let Options {
        region,
        capture,
        save,
    } = options;

    window.with_webview(|webview| {
        #[cfg(target_os = "linux")]
        linux::snapshot(webview, region, capture, tx);

        #[cfg(target_os = "windows")]
        windows::snapshot(webview, tx);

        #[cfg(target_os = "macos")]
        macos::snapshot(webview, region, capture, tx);
    })?;

    let png_buffer = rx.recv()??;

    if let Some(save) = save {
        save_to_disk(save, &png_buffer)?;
    };

    Ok(png_buffer)
}
