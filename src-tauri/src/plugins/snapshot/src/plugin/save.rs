use std::fs::File;
use std::io::Write;

use super::types::SaveOptions;
use crate::prelude::*;

// TODO: Error handling
pub fn save_to_disk(save_options: SaveOptions, buffer: &[u8]) -> Result<()> {
    if save_options.path.as_os_str().is_empty() {
        return Err(Error::Other("Path cannot be empty".to_string()));
    }
    let mut file = match save_options.overwrite {
        true => File::create(&save_options.path),
        _ => File::options()
            .write(true)
            .create_new(true)
            .open(&save_options.path),
    }?;

    file.write_all(buffer)?;
    Ok(())
}
