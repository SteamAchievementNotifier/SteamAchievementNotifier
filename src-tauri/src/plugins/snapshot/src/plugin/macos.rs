#![allow(unused)]
use std::sync::mpsc::Sender;

use tauri::window::PlatformWebview;

use super::types::{CaptureOptions, Region};
use crate::prelude::*;

pub fn snapshot(
    webview: PlatformWebview,
    region: Option<Region>,
    capture_options: Option<CaptureOptions>,
    tx: Sender<Result<Vec<u8>>>,
) {
    todo!();
}
