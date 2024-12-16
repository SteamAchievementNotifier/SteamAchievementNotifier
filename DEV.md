<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<h1 align="center">V1.9: Developer Guide</h1>

<h2 align="center" id="prerequisites">PREREQUISITES</h2>

Make sure the following programs are installed:

1. [Node JS](https://nodejs.org/en/download/current) (*with NPM*)
2. [Rust](https://www.rust-lang.org/tools/install) (*Optional - only required if editing `steamworks-rs`/`steamworks.js` dependencies*)
3. [git](https://git-scm.com/) (*Optional*)

> 🐧 On Linux, the `build-essential` package must be installed to build Rust native addons:
> 
> ```shell
> sudo apt-get install build-essential
> ```

> ℹ Builds tested and verified as working on Windows 10/Ubuntu 22.04

<details>
    <summary>
    <h4>🛑 <code>node-gyp</code> errors on <code>npm i</code></h4>
    </summary>

> :window: When using the latest LTS versions of NodeJS on Windows, an NPM bug exists where the `registry-js` dependency (*used by the `node-addon-api` package*) will throw an error when reaching the `node-gyp rebuild` step.
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
    - `main.ts`: The "Main process"
    - `listeners.ts`: An extension of `main.ts` that focuses on managing various event listeners
    - `worker.ts`: A background `BrowserWindow` instance that initialises Steamworks when a game process is detected. Dynamically spawned/destroyed in order to initialise/release Steamworks between game instances

- `lang`: Contains modules for each supported app language.

> ℹ These files only provide translation strings via the exported object - `./src/app/language.ts` contains the logic to apply these translations to elements within the app

- `notify`: Contains `.ts`/`.js` to control `BrowserWindow` instances that are used by notification windows

<h2 align="center" id="steamworks-overview">STEAMWORKS OVERVIEW</h2>

In Steam Achievement Notifier (V1.9), there are two projects that provide Steamworks integration via Rust - [steamworks-rs](https://github.com/SteamAchievementNotifier/san_steamworks-rs) and [steamworks.js](https://github.com/SteamAchievementNotifier/san_steamworks.js).

> ℹ **`steamworks-rs`** converts the original Steamworks functions into **Rust**.

> ℹ **`steamworks.js`** takes the functions provided by `steamworks-rs`, and converts them from **Rust** to **Javascript** using a `.node` addon. This then allows the original Steamworks functions to be made available for use in Electron apps.

Both of these projects have been customised specifically for use within Steam Achievement Notifier, both by extending functionality in terms of achievement info, and removing certain functions beyond the scope of this application (e.g. unlocking/relocking achievements, UGC/Workshop content, networking etc.)

> ⚠ Under normal circumstances, if you only want to edit Steam Achievement Notifier itself, you **will not** need to install the Steamworks dependencies outlined below - the **Basic Installation** section will be enough!

<h2 align="center" id="advanced-installation">ADVANCED INSTALLATION: STEAMWORKS</h2>

Clone both the `steamworks-rs` and `steamworks.js` repositories into `./deps`:

```git
cd deps
git clone https://github.com/SteamAchievementNotifier/san_steamworks-rs.git
git clone https://github.com/SteamAchievementNotifier/san_steamworks.js.git
```

<details>
<summary>
<h4>Adding existing Steamworks functions to <code>steamworks-rs</code></h4>
</summary>

The `./deps/san_steamworks-rs/steamworks-sys/src/windows_bindings.rs` file makes the current **Steamworks** functions (written in **C**) available for use in **Rust**.
> - You can add other available **Steamworks** functions by checking the existing mappings and mimicking them (*although most are already available*).
> - The current **Steamworks SDK** version is **1.57**.

`steamworks.js` requires the **Steamworks** functions present in `steamworks-rs` to enable their use in JS, so any required functionality that is not present in `steamworks.js` needs to be written into `steamworks-rs` first.

> - The two projects here are linked via `./deps/san_steamworks.js/cargo.toml`.

> - You shouldn't need to rebuild `steamworks-rs` when building `steamworks.js` (as it will rebuild automatically), so it's okay to just save the files you have changed in `steamworks-rs` without running `cargo build --release`.
</details>

<details>
<summary>
<h4>Adding existing <code>steamworks-rs</code> functions to <code>steamworks.js</code></h4>
</summary>

If you have written a function in `steamworks-rs` that you want to make available to JS (via `steamworks.js`), you'll need to create a new function like so:

```rust
// Example
#[napi]
pub fn shutdown() {
    unsafe { sys::SteamAPI_Shutdown() }
}
```

The `steamworks.js` build script does all the **Rust** > **JS** conversion for you, so as long as you're not getting any errors, your function should be available in JS after building.
</details>

<details>
<summary>
<h4>Building <code>steamworks.js</code></h4>
</summary>

To build a release version of `steamworks.js`,navigate to `./deps/san_steamworks.js` and run:

```
npm run build
```

This will generate a **release** (*i.e. optimised*) `.node` file in `./deps/san_steamworks/dist/win64` (or `./deps/san_steamworks/dist/linux` on Linux), which is the module needed to load the functions created in `steamworks.js` into Node/Electron.
</details>

<details>
<summary>
<h4>Creating the release project</h4>
</summary>
Including the entirety of both the `steamworks-rs`/`steamworks.js` projects would make GitHub repos/application executables way too big.

A better way to do this is to just include the required dependencies for `steamworks.js` to work as a Node module.

> - The `steamworks-rs`/`steamworks.js` project files are only required to edit the functions and build the resulting module.

```typescript
// TODO: This could probably be automated via a `package.json` command...
```

#### Method
1. Go to `./deps/san_steamworks.js` and copy the following:
- `dist` folder (*and all contents*)
- `callback.d.ts`
- `client.d.ts`
- `index.d.ts`
- `index.js`
- `LICENSE`
- `package.json`
- `README.md`
2. Paste into `./deps/steamworks.js` (create if not present)
3. Go back to the project root
4. If not done already, open `package.json` and add the following:
```json
"dependencies": {
    "steamworks.js": "./deps/steamworks.js"
}
```
5. Run the following command in the root directory:
```
npm i
```

This will add `./deps/steamworks.js` as a dependency (and recreate it in `./node_modules/steamworks.js`), so you can now use `steamworks.js` within Electron - including all your changes!

</details>