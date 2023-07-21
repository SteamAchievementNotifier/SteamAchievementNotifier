use crate::prelude::*;
use std::ffi::c_void;
use std::sync::mpsc::Sender;
use tauri::window::PlatformWebview;
use webview2_com::CapturePreviewCompletedHandler;
use webview2_com::Microsoft::Web::WebView2::Win32::COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG;
use windows::Win32::UI::Shell::SHCreateMemStream;

pub fn snapshot(webview: PlatformWebview, tx: Sender<Result<Vec<u8>>>) {
    unsafe {
        let image_stream = match SHCreateMemStream(std::ptr::null(), 0) {
            Some(stream) => stream,
            None => {
                let _ = tx.send(Err(Error::Other(
                    "Unable to create image stream".to_string(),
                )));
                return;
            }
        };

        let image_stream_copy = match image_stream.Clone() {
            Ok(stream) => stream,
            Err(error) => {
                let _ = tx.send(Err(Error::Windows(error)));
                return;
            }
        };
        let tx_clone = tx.clone();

        let handler = CapturePreviewCompletedHandler::create(Box::new(move |_| {
            let mut image_buffer = Vec::new();
            let mut read_buffer: [u8; 1024] = [0; 1024];

            loop {
                let mut cb_read = 0;

                if let Err(error) = image_stream_copy
                    .Read(
                        read_buffer.as_mut_ptr() as *mut c_void,
                        read_buffer.len() as u32,
                        &mut cb_read,
                    )
                    .ok()
                {
                    let _ = tx.send(Err(Error::Windows(error)));
                    return Ok(());
                }

                if cb_read == 0 {
                    break;
                }

                image_buffer.extend_from_slice(&read_buffer[..(cb_read as usize)]);
            }
            let _ = tx.send(Ok(image_buffer));
            Ok(())
        }));

        let core_webview = webview.controller().CoreWebView2().unwrap();

        if let Err(error) = core_webview.CapturePreview(
            COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG,
            &image_stream,
            &handler,
        ) {
            let _ = tx_clone.send(Err(Error::Windows(error)));
        };
    }
}
