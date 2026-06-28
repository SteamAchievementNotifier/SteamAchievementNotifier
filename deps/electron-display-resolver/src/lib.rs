use std::error::Error;
use core::result::Result;
mod hash;
pub mod utils;
use utils::MonitorInfo;

#[cfg(target_os="windows")]
mod win32 {
    pub use windows::{core::{Error,HRESULT},Win32::{Devices::Display::*,Foundation::ERROR_SUCCESS}};
    pub use crate::utils::win32::{WindowsMonitor,utf16_to_string,chromium_display_id,screenshots_displayinfo_id};
}

#[cfg(target_os="linux")]
mod linux {
    pub use x11rb::connection::Connection;
    pub use x11rb::rust_connection::RustConnection;
    pub use x11rb::protocol::{randr::{Connection as RandRConnection,ConnectionExt},xproto::ConnectionExt as _};
    pub use crate::utils::linux::{LinuxMonitor,get_output_edid,parse_monitor_name,chromium_display_id};
}

pub fn get_monitors() -> Result<Vec<MonitorInfo>,Box<dyn Error>> {
    let mut monitors = Vec::new();

    #[cfg(target_os="windows")] {
        use win32::*;

        unsafe {
            let mut path_count = 0u32;
            let mut mode_count = 0u32;

            let err = GetDisplayConfigBufferSizes(
                QDC_ONLY_ACTIVE_PATHS,
                &mut path_count,
                &mut mode_count
            );

            if err != ERROR_SUCCESS {
                return Err(Box::new(Error::from_hresult(HRESULT::from_win32(err.0))));
            }

            let mut paths = vec![DISPLAYCONFIG_PATH_INFO::default();path_count as usize];
            let mut modes = vec![DISPLAYCONFIG_MODE_INFO::default();mode_count as usize];

            let err = QueryDisplayConfig(
                QDC_ONLY_ACTIVE_PATHS,
                &mut path_count,
                paths.as_mut_ptr(),
                &mut mode_count,
                modes.as_mut_ptr(),
                None
            );

            if err != ERROR_SUCCESS {
                return Err(Box::new(Error::from_hresult(HRESULT::from_win32(err.0))));
            }

            for path in paths.iter() {
                let mut dc_target_device_name = DISPLAYCONFIG_TARGET_DEVICE_NAME::default();

                dc_target_device_name.header.r#type = DISPLAYCONFIG_DEVICE_INFO_GET_TARGET_NAME;
                dc_target_device_name.header.size = std::mem::size_of::<DISPLAYCONFIG_TARGET_DEVICE_NAME>() as u32;
                dc_target_device_name.header.adapterId = path.targetInfo.adapterId;
                dc_target_device_name.header.id = path.targetInfo.id;

                let _ = DisplayConfigGetDeviceInfo(&mut dc_target_device_name as *mut _ as *mut DISPLAYCONFIG_DEVICE_INFO_HEADER);
                let mut dc_source_device_name = DISPLAYCONFIG_SOURCE_DEVICE_NAME::default();

                dc_source_device_name.header.r#type = DISPLAYCONFIG_DEVICE_INFO_GET_SOURCE_NAME;
                dc_source_device_name.header.size = std::mem::size_of::<DISPLAYCONFIG_SOURCE_DEVICE_NAME>() as u32;
                dc_source_device_name.header.adapterId = path.sourceInfo.adapterId;
                dc_source_device_name.header.id = path.sourceInfo.id;

                let _ = DisplayConfigGetDeviceInfo(&mut dc_source_device_name as *mut _ as *mut DISPLAYCONFIG_DEVICE_INFO_HEADER);
                let gdi_device_name = utf16_to_string(&dc_source_device_name.viewGdiDeviceName);

                let electron_display_id = chromium_display_id(WindowsMonitor {
                    low: path.targetInfo.adapterId.LowPart,
                    high: path.targetInfo.adapterId.HighPart as u32,
                    id: path.targetInfo.id
                });

                let screenshots_displayinfo_id = screenshots_displayinfo_id(&gdi_device_name);

                let label = utf16_to_string(&dc_target_device_name.monitorFriendlyDeviceName);

                monitors.push(MonitorInfo {
                    electron_display_id,
                    screenshots_displayinfo_id,
                    label,
                    edid: None
                });
            }
        }
    }

    #[cfg(target_os = "linux")] {
        use linux::*;

        let (conn,screen_num) = RustConnection::connect(None)?;
        let screen = &conn.setup().roots[screen_num];

        let res = conn.randr_get_screen_resources_current(screen.root)?.reply()?;
        let atom = conn.intern_atom(false,b"EDID")?.reply()?.atom;

        for (i,output) in res.outputs.iter().enumerate() {
            let info = conn.randr_get_output_info(*output,res.config_timestamp)?.reply()?;

            if info.connection != RandRConnection::CONNECTED {
                continue
            }

            if info.crtc == 0 {
                continue
            }

            let output_name = String::from_utf8_lossy(&info.name).to_string();
            let edid = get_output_edid(&conn,output.resource_id(),atom)?;

            let electron_display_id = chromium_display_id(LinuxMonitor {
                edid: edid.as_deref(),
                output_index: i as u8
            });

            let screenshots_displayinfo_id = output.resource_id();
            let label = edid.as_deref().and_then(parse_monitor_name).unwrap_or_else(|| output_name.clone());

            monitors.push(MonitorInfo {
                electron_display_id,
                screenshots_displayinfo_id,
                label,
                edid,
            });
        }
    }

    Ok(monitors)
}