#[derive(Debug,Clone)]
pub struct MonitorInfo {
    pub electron_display_id: u32,
    pub label: String,
    pub edid: Option<Vec<u8>>
}

#[cfg(target_os="windows")]
pub mod win32 {
    use crate::hash::super_fast_hash;

    pub fn utf16_to_string(buf: &[u16]) -> String {
        let len = buf.iter().position(|c| *c == 0).unwrap_or(buf.len());
        String::from_utf16_lossy(&buf[..len])
    }
    
    pub struct WindowsMonitor {
        pub low: u32,
        pub high: u32,
        pub id: u32
    }
    
    pub fn chromium_display_id(monitor: WindowsMonitor) -> u32 {
        let input = format!("{}/{}/{}",monitor.low,monitor.high,monitor.id);
        super_fast_hash(input.as_bytes())
    }
}

#[cfg(target_os="linux")]
pub mod linux {
    pub fn get_output_edid(conn: &x11rb::rust_connection::RustConnection,output: u32,atom: u32) -> Result<Option<Vec<u8>>,Box<dyn std::error::Error>> {
        use x11rb::protocol::randr::ConnectionExt;
    
        let output_property = conn.randr_get_output_property(output,atom,0u32,0,1024,false,false)?.reply()?;
    
        Ok(if output_property.data.is_empty() {
            None
        } else {
            Some(output_property.data)
        })
    }
    
    pub fn parse_monitor_name(edid: &[u8]) -> Option<String> {
        if edid.len() < 128 {
            return None
        }
    
        const DESCRIPTOR_OFFSET: usize = 54;
        const DESCRIPTOR_LENGTH: usize = 18;
        const NUM_DESCRIPTORS: usize = 4;
        const MONITOR_NAME_DESCRIPTOR: u8 = 0xFC;
    
        for i in 0..NUM_DESCRIPTORS {
            let offset = DESCRIPTOR_OFFSET + (i * DESCRIPTOR_LENGTH);
    
            if offset + DESCRIPTOR_LENGTH > edid.len() {
                break
            }
    
            if edid[offset] == 0 && edid[offset + 1] == 0 && edid[offset + 2] == 0 && edid[offset + 3] == MONITOR_NAME_DESCRIPTOR && edid[offset + 4] == 0 {
                let raw = &edid[offset + 5..offset + DESCRIPTOR_LENGTH];
    
                let name = raw
                    .iter()
                    .copied()
                    .take_while(|b| *b != b'\n' && *b != b'\r' && *b != 0)
                    .filter(|b| b.is_ascii_graphic() || *b == b' ')
                    .collect::<Vec<u8>>();
    
                let name = String::from_utf8_lossy(&name).trim().to_string();
    
                if !name.is_empty() {
                    return Some(name)
                }
            }
        }
    
        None
    }
    
    fn edid_based_display_id(edid: &[u8],output_index: u8) -> u32 {
        let manufacturer_id: u16 = if edid.len() >= 10 {
            u16::from_be_bytes([edid[8],edid[9]])
        } else {
            0
        };
    
        let product_code_hash: u32 = parse_monitor_name(edid).map(|name| super_fast_hash(name.as_bytes())).unwrap_or(0);
        let display_id: i64 = ((manufacturer_id as i64) << 40) | ((product_code_hash as i64) << 8) | (output_index as i64);
    
        display_id as u32
    }
    
    pub struct LinuxMonitor<'a> {
        pub edid: Option<&'a [u8]>,
        pub output_index: u8
    }
    
    pub fn chromium_display_id(monitor: LinuxMonitor) -> u32 {
        match monitor.edid {
            Some(edid) => edid_based_display_id(edid,monitor.output_index),
            None => monitor.output_index as u32
        }
    }
}