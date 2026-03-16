use new_vdf_parser::appinfo_vdf_parser::open_appinfo_vdf;
use serde_json::{Map, Value, Value::{Object, Number}};
use std::path::PathBuf;

const LAUNCH_KEYS: &[&str] = &[
    "arguments",
    "executable",
    "workingdir"
];

const LAUNCH_CONFIG_KEYS: &[&str] = &[
    "oslist"
];

fn get_launch_keys(launch_keys: &Map<String,Value>) -> Option<Value> {
    let launchmap: Map<_, _> = launch_keys
        .iter()
        .filter_map(|(key,value)|
    {
        let launch = value.as_object()?;

        let mut entrymap = Map::new();

        for prop in LAUNCH_KEYS {
            if let Some(value) = launch.get(*prop) {
                entrymap.insert(prop.to_string(), value.clone());
            }
        }

        if let Some(launchconfig) = launch
            .get("config")
            .and_then(|value| value.as_object())
        {
            let mut launchconfigmap = Map::new();

            for prop in LAUNCH_CONFIG_KEYS {
                if let Some(value) = launchconfig.get(*prop) {
                    launchconfigmap.insert(prop.to_string(),value.clone());
                }
            }

            if !launchconfigmap.is_empty() {
                entrymap.insert("config".to_string(), Object(launchconfigmap));
            }
        }

        if !entrymap.is_empty() {
            return Some((key.clone(),Object(entrymap)));
        }

        None
    }).collect();

    if !launchmap.is_empty() {
        return Some(Object(launchmap))
    }

    None
}

fn get_config_keys(config: &Map<String, Value>) -> Option<Value> {
    let mut configmap = Map::new();

    if let Some(launch) = config.get("launch").and_then(|value| value.as_object()) {
        if let Some(value) = get_launch_keys(launch) {
            configmap.insert("launch".to_string(), value);
        }
    }

    if !configmap.is_empty() {
        return Some(Object(configmap))
    }

    None
}

pub fn get_vdf_content(steampath: &str) -> Map<String,Value> {
    let appinfo_path = PathBuf::from(format!("{}/appcache/appinfo.vdf",steampath));
    open_appinfo_vdf(&appinfo_path,Some(false))
}

pub fn get_appinfo(steampath: &str) -> Value {
    Object(get_vdf_content(steampath))
}

pub fn get_appinfo_for_appid(appid: u32,steampath: &str) -> Option<Value> {
    let appinfo = get_vdf_content(steampath);

    let entries = match appinfo.get("entries") {
        Some(Value::Array(arr)) => arr,
        _ => return None,
    };

    entries.iter().find_map(|entry| {
        if let Object(app) = entry {
            if let Some(Value::Number(n)) = app.get("appid") {
                if n.as_u64().map(|v| v as u32) != Some(appid) {
                    return None;
                }
            } else {
                return None;
            }

            let mut app_map = Map::new();
            app_map.insert("appid".to_string(), Number(appid.into()));

            if let Some(cfg) = app.get("config").and_then(|v| v.as_object()).and_then(get_config_keys) {
                app_map.insert("config".to_string(), cfg);
                Some(Object(app_map))
            } else {
                None
            }
        } else {
            None
        }
    })
}
