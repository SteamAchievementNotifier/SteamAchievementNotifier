use super::types::{CaptureOptions, Region};
use crate::prelude::*;
use cairo::ImageSurface;
use std::sync::mpsc::Sender;
use tauri::window::PlatformWebview;
use webkit2gtk::{gio::Cancellable, traits::WebViewExt, SnapshotOptions, SnapshotRegion};

pub fn snapshot(
    webview: PlatformWebview,
    region: Option<Region>,
    capture_options: Option<CaptureOptions>,
    tx: Sender<Result<Vec<u8>>>,
) {
    // TODO: On linux, it is not possible to capture an area
    // If the other webviews do not support this, remove the `area` variant
    let region = match region {
        Some(Region::Document) => SnapshotRegion::FullDocument,
        _ => SnapshotRegion::Visible,
    };
    let mut snapshot_options = SnapshotOptions::empty();
    if let Some(capture_options) = capture_options {
        if capture_options.highlighted {
            snapshot_options.insert(SnapshotOptions::INCLUDE_SELECTION_HIGHLIGHTING)
        }
        if capture_options.transparent_background {
            snapshot_options.insert(SnapshotOptions::TRANSPARENT_BACKGROUND)
        }
    }

    webview.inner().snapshot(
        region,
        snapshot_options,
        Cancellable::NONE,
        move |surface| {
            let surface = match surface {
                Ok(surface) => surface,
                Err(error) => {
                    let _ = tx.send(Err(Error::Surface(error)));
                    return;
                }
            };
            let image_surface = match ImageSurface::try_from(surface) {
                Ok(surface) => surface,
                Err(_) => {
                    let _ = tx.send(Err(Error::Other(
                        "Cannot convert Surface to ImageSurface".to_string(),
                    )));
                    return;
                }
            };

            let mut buffer = Vec::new();

            match image_surface.write_to_png(&mut buffer) {
                Ok(_) => {}
                Err(error) => {
                    let _ = tx.send(Err(Error::CairoIo(error)));
                    return;
                }
            };
            let _ = tx.send(Ok(buffer));
        },
    );
}
