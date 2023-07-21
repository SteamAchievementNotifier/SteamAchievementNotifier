# Tauri Plugin Snapshot

![Test](https://github.com/Fractal-Tess/tauri-plugin-snapshot/actions/workflows/test.yml/badge.svg)

This plugin provides an easy to use `rust` and `javascript` APIs for capturing snapshots of the webview window.

## **DISCLAIMER: This plugin is missing a MacOS implementation!!!**

## Architecture

This repo shape might appear to be strange, but it is really just a hybrid Rust / Typescript project that recommends a specific type of consumption, namely using GIT as the secure distribution mechanism, and referencing specific unforgeable git hashes. Of course, it can also be consumed via Cargo and NPM.

### `/src`

Rust source code that implements the webview capturing behavior.

### `/webview-src`

Typescript source for the /webview-dist folder that provides an API to interface with the rust code.

### `/webview-dist`

Tree-shakeable transpiled JS to be consumed in a Tauri application.

## Installation

There are three general methods of installation that we can recommend.

1. Pull sources directly from Github using git tags / revision hashes (most secure, good for development, shown below)
2. Git submodule install this repo in your tauri project and then use `file` protocol to ingest the source
3. Use crates.io and npm (easiest, and requires you to trust that our publishing pipeline worked)

For more details and usage, see [example app](example/).

Please note, below in the dependencies you can also lock to a revision/tag in both the `Cargo.toml` and `package.json`

### RUST

`src-tauri/Cargo.toml`

```yaml
[dependencies.tauri-plugin-snapshot]
git = "https://github.com/Fractal-Tess/tauri-plugin-snapshot"
# tag = "v0.1.0" Not available yet
```

Use in `src-tauri/src/main.rs`:

```rust
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_snapshot::init()) <-
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

```

### WEBVIEW

`Install from a tagged release`

**This is not available yet**

```sh
npm install github:/Fractal-Tess/tauri-plugin-snapshot#v0.1.0
```

`Install from a commit`

```sh
npm install github:Fractal-Tess/tauri-plugin-snapshot#a62b3804ba9cf678c08099789ea32fa4ba467ac4
```

`Install from a branch (dev)`

```sh
npm install github:Fractal-Tess/tauri-plugin-snapshot#dev
```

`package.json`

```json
  "dependencies": {
    "tauri-plugin-snapshot-api": " github:Fractal-Tess/tauri-plugin-snapshot",
    ...
  }
```

### Examples

#### Javascript/Typescript

```ts
import { snapshotViewport, snapshotDocument } from 'tauri-plugin-snapshot-api';

// Capture the content in the current viewport (only works on linux)
const pngImageBuffer = await snapshotViewport();

// Capture the content of the entire DOM
const pngImageBuffer = await snapshotDocument();

// You may also choose to pass in options for capturing transparency and highlighted nodes (only works on linux)
const pngImageBuffer = await snapshotViewport({
  capture: {
    highlighted: true,
    transparentBackground: true,
  },
});

// You can also tell the plugin to write the png to disk like so:
import { pictureDir } from '@tauri-apps/api/path';
const pngImageBuffer = await snapshotViewport({
  save: {
    path: (await pictureDir()) + 'snapshot.png', //Save path
    overwrite: true, // Whether or not to overwrite the image if it already exists
  },
});
```

#### Rust

In rust code, you can call the `snapshot` function the plugin exports to get this functionality.

```rs
use tauri_plugin_snapshot::{snapshot, Options, Region};

// For example in a command
#[tauri::command]
fn example_command(window: tauri::Window) -> Result<(), String> {
    let options = Options {
        capture: None,
        region: Some(Region::Viewport),
        save: None,
    };

    let img_buffer = snapshot(window, options).map_err(|error| error.to_string())?;

    // Do stuff with the image buffer

    Ok(())
}

// Or in setup
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_snapshot::init())
        .invoke_handler(tauri::generate_handler![example_command])
        .setup(|app_handle| {
            let window_handle = app_handle.get_window("main").unwrap();

            let options = Options {
                capture: None,
                region: Some(Region::Viewport),
                save: None,
            };

            let img_buffer = snapshot(window_handle, options)?;
            // Do stuff with the image buffer

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Or wherever you like, as long as you have a window handle
```

## License

MIT
