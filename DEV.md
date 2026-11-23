<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<h1 align="center">Developer Guide</h1>

<h2 align="center" id="prerequisites">PREREQUISITES</h2>

Make sure the following programs are installed:

1. [Node JS](https://nodejs.org/en/download/current) (*with NPM*)
2. [Rust](https://www.rust-lang.org/tools/install) (*Optional: *Only required if editing `sanhelper.rs`*)
3. [git](https://git-scm.com/) (*Optional*)

> 🐧 On Linux, the `build-essential` package must be installed to build Rust native addons:
> 
> ```shell
> sudo apt-get install build-essential
> ```

> ✔ Builds tested and verified as working on Windows 10/Ubuntu 22.04

<details>
    <summary>
    <h4>🛑 Windows: <code>node-gyp</code> errors on <code>npm i</code></h4>
    </summary>

> When using the latest LTS versions of NodeJS on Windows, an NPM bug exists where the `registry-js` dependency (*used by the `node-addon-api` package*) will throw an error when reaching the `node-gyp rebuild` step.
> 
> To bypass this:
> 
> - If you currently have the latest LTS release of NodeJS installed, temporarily uninstall it
> - Download version `14.16.0` of NodeJS (*[Direct download link](https://nodejs.org/dist/v14.16.0/)*)
> - Run through the installer with default options
> - Once ***Step 2*** of the [Basic Installation](#basic-installation) section is complete, reinstall the latest LTS version of NodeJS
</details>

<h2 align="center" id="basic-installation">BASIC INSTALLATION</h2>

> ℹ Rust is not required for basic installation

1. Clone the repository:

```git
git clone https://github.com/SteamAchievementNotifier/SteamAchievementNotifier.git -b master
```

> ℹ If you do not have `git` installed, select **Code** > **Download ZIP** and extract it.

2. In the project root, run the following command to build all dependencies:

```npm
npm i
```

3. Once complete, run the following command to start Steam Achievement Notifier in `devmode`:

```npm
npm run dev
```

4. Run the following command to build the executable:

```npm
// Windows
npm run win

// Linux
npm run linux
```

> ℹ The output directory for executables is `_release`.

<h2 align="center" id="project-structure">PROJECT STRUCTURE</h2>

The project follows a standard TS structure:

- Source `.ts` files are located under `./src`
- Compiled `.js` files are located under `./dist`

Within `src`/`dist`, there are several subfolders to separate core app functionality from additional features:

- `app`: Contains `.ts`/`.js` files and associated `HTML`/`CSS` for core `BrowserWindow` instances used for in-app pages, menus and dialogs. Also contains:

    - `app.ts`: The entry point to the Electron app
    - `main.ts`: Electron's "Main process"
    - `listeners.ts`: An extension of `main.ts` that focuses on managing various event listeners, setting up `BrowserWindow` instances etc.
    - `steam.ts`: Handles parsing Steam users/`UserGameStats`/`UserGameStatsSchema` BIN files etc. required for gathering the current user's achievement information
    - `worker.ts`: A background `BrowserWindow` instance that initialises Steamworks when a game process is detected. Dynamically spawned/destroyed between game instances

- `lang`: Contains modules for each supported app language.

> ℹ These files only provide translation strings via the exported object - `./src/app/language.ts` contains the logic to apply these translations to elements within the app

- `notify`: Contains `.ts`/`.js` to control `BrowserWindow` instances that are used by notification windows

<h2 align="center" id="advanced-installation">ADVANCED INSTALLATION</h2>

Steam Achievement Notifier uses `sanhelper.rs`, an [napi-rs](https://napi.rs/) native addon which provides the ability to call low-level Rust functions in TS.

> ⚠ Under normal circumstances, if you only want to edit Steam Achievement Notifier itself, you **will not** need to install the `sanhelper.rs` dependency outlined below - the **Basic Installation** section will be enough!

To get started, clone the `sanhelper.rs` repository into `deps`:

```git
cd deps
git clone https://github.com/SteamAchievementNotifier/san_sanhelper.rs.git
```

<details>
<summary>
<h4>Adding functions to <code>sanhelper.rs</code></h4>
</summary>

If you have written a function in `sanhelper.rs` that you want to make available to TS, you'll need to create a new function like so:

```rust
// Example
#[napi]
pub fn hello_world() -> string {
    return "hello world!".to_string()
}
```

The `sanhelper.rs` build script does all the **Rust** > **JS** conversion for you, so as long as you're not getting any errors, your function should be available in JS after building.
</details>

<details>
<summary>
<h4>Building <code>sanhelper.rs</code></h4>
</summary>

To build a release version of `sanhelper.rs` (including any changes) navigate to `./deps/san_sanhelper.rs` and run:

```npm
npm run build
```

This will generate a **release** (*i.e. optimised*) `.node` file in `./deps/sanhelper.rs` , which is the module needed to load the functions created in `sanhelper.rs` into Node/Electron.

Additionally, it will automatically copy the required files into `deps/sanhelper.rs` (*the directory SAN loads the dependency from*):

- `index.d.ts`
- `index.js`
- `package.json`
- `sanhelperrs.win32-x64-msvc.node`/`sanhelperrs.linux-x64-gnu.node`

</details>

<details>
<summary>
<h4>Creating the release project</h4>
</summary>

Include the required dependencies for `sanhelper.rs` to work as a Node module.

1. If not present already, open `package.json` and add the following:

```json
"dependencies": {
    "sanhelper.rs": "./deps/sanhelper.rs"
}
```

> :information_source: SAN includes the `sanhelper.rs` dependency by default.
> 
> If `package.json` > `dependencies` already includes `sanhelper.rs`, no changes are required.

2. Run the following command in the root directory of the project:

```npm
npm i
```

This will add `./deps/sanhelper.rs` as a dependency (and recreate it in `./node_modules/sanhelper.rs`), so you can now use `sanhelper.rs` within Electron - including all your changes!

</details>