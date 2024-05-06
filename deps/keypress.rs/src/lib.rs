#[cfg(target_os="windows")]
mod win32 {
    pub extern crate winapi;
    pub use winapi::um::winuser::{INPUT,INPUT_KEYBOARD,KEYEVENTF_KEYUP,SendInput};
    pub use std::mem;
}

#[cfg(target_os="linux")]
pub mod linux {
    pub use std::process::Command;
}

pub fn deps_installed() -> bool {
    #[cfg(target_os="linux")] {
        use linux::*;

        let xdotool = Command::new("sh")
            .args(["-c","which xdotool"])
            .output()
            .map(|output| output.status.success())
            .unwrap_or(false);

        if !xdotool {
            eprintln!("\"xdotool\" not installed");
            return false
        }
    }

    true
}

pub fn simulate_keypress(key_code: u16) {
    #[cfg(target_os="windows")] {
        use win32::*;
    
        unsafe {
            let mut input = INPUT {
                type_: INPUT_KEYBOARD,
                u: mem::zeroed(),
            };

            input.u.ki_mut().wVk = key_code;
            SendInput(1, &mut input, mem::size_of::<INPUT>() as i32);

            input.u.ki_mut().dwFlags = KEYEVENTF_KEYUP;
            SendInput(1, &mut input, mem::size_of::<INPUT>() as i32);
        }
    }

    #[cfg(target_os="linux")] {
        pub use linux::*;

        let cmd = format!("xdotool key {}",key_code);

        Command::new("sh")
            .arg("-c")
            .arg(cmd)
            .output()
            .expect("Failed to execute \"xdotool\" command");
    }
}