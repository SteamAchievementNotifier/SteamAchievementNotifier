use std::path::PathBuf;

use serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Region {
    Document,
    Viewport,
}

#[derive(Debug, Deserialize, Default)]
#[serde(default, rename_all = "camelCase")]
pub struct CaptureOptions {
    pub transparent_background: bool,
    pub highlighted: bool,
}

#[derive(Debug, Deserialize)]
pub struct SaveOptions {
    pub path: PathBuf,
    #[serde(default)]
    pub overwrite: bool,
}

#[derive(Debug, Deserialize)]
pub struct Options {
    pub region: Option<Region>,
    pub save: Option<SaveOptions>,
    pub capture: Option<CaptureOptions>,
}
