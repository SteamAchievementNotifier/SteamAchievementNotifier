<p align="center">
<img width="75%" src="./img/santextlogo.svg">
</p>

<h1 align="center">Custom Presets</h1>

Want to create your own preset with customised designs/animations in **Steam Achievement Notifier (V1.9)**?

If so, this guide will provide information on how to create a brand new preset, which files you'll need to edit, plus a reference for tags, classes, IDs and available CSS variables.

> [!IMPORTANT]
> Prior knowledge of how to use and edit HTML/CSS/JS files is required to create your own preset.
> 
> Unless something isn't working as intended, no support will be given via GitHub or Discord for questions regarding how to use and edit HTML/CSS/JS files in general (that's what search engines are for) or how to make something work for your specific custom preset (you'll just need to figure it out yourself).

:information_source: `<appdatadir>` in the below documentation refers to:
- **Windows**: `C:/Users/%username%/AppData/Local`
- **Linux**: `~/.local/share`

<h2 align="center" id="setup">Setup</h2>

<details>
    <summary><h3 align="center" id="createnewpreset">Create a New Preset</h3></summary>

Starting in **V1.9.39**, a **+ Create New Preset** button will appear under the **Customiser** > **Presets** > **Notification Preset** dropdown.

> [!WARNING]
> The **+ Create New Preset** button will only be displayed when **Settings** > **Advanced** > **Use Custom App Files** is enabled.

To create a new preset, click the **+ Create New Preset** button. In the dialog that appears, add a **name** for your preset, then select either a **Logo** element, a **Decoration** element or one of each from the associated dropdowns.

> [!INFO]
> The preset name is used only as a label.
> 
> An internal key will be created for each new custom preset automatically, which will always follow the format `custom<number>` (e.g. `custom0`).

- **Logo**: A static image used to display an integral, unchanging element within the preset (e.g. a Steam icon).
    - **None**: Do not include a **Logo** element in the preset
    - **Fixed**: A single image file to always display as the **Logo** element

- **Decoration**: Can be set as either a static image as above, or a dynamic image that changes based on the rarity of the unlocked achievement. This is usually placed inline within a text element.
    - **None**: Do not include a **Decoration** element in the preset
    - **Fixed**: A single image file to always display as the **Decoration** element
    - **Dynamic**: 3 separate images denoting the rarity of the unlocked achievement (i.e. bronze, silver and gold)\*

\***100%**/**Platinum** **Decoration** elements are not dynamic, as no valid rarity value is used for this notification type. As such, this type's **Decoration** image will always be set manually by the user via **Customiser** > **Icons** > **Decoration**.

> [!TIP]
> You can replace any **Logo**/**Decoration** image(s) with a file of your choice by clicking the image element below the dropdown.
> 
> This will then open a file select menu where you can choose a custom image file.

Click the **OK** button to create your new custom preset. The preset's files will then be available in `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>`.

> [!TIP]
> If you don't know what `custom<number>` key has been assigned to your created preset, check `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/presets.json`, which will contain an entry for your chosen label next to its `custom<number>` key.
</details>

<details>
    <summary><h3 align="center" id="updatenewpreset">Manually Update a New Preset</h3></summary>

If you change your mind after creating the preset, you can change each of the elements manually:

<h4>Preset Name</h4>

- Open `<appdatadir>/customfiles/notify/presets/preset.json`
- Change the **value**\* of the `custom0` key:

```json
// Before:
{
    ...,
    "custom0": "OLD Preset"
}
```


```json
// After:
{
    ...,
    "custom0": "NEW Preset"
}
```

> [!CAUTION]
> 🛑 \*Do not change the name of the `custom<number>` key itself:
> 
> ```json
> // Before:
> {
>    ...,
>     "custom0": "OLD Preset"
> }
> ```
> 
> 
> ```json
> // After:
> {
>    ...,
>     "whydidichangethis": "NEW Preset"
> }
> ```
> 
> **Doing so will break stuff.**

<h4>Logo/Decoration</h4>

- Open `<appdatadir>/customfiles/notify/presets/custom<number>/defaulticons.json`
- Change the **values** of the `logo`/`decoration` keys to one of the following:

|  | None | Fixed | Dynamic | 
| --- | --- | --- | --- |
| Logo | `null` | `string`  | ❌ |
| Decoration | `null` | `string` | `string[]` |

- `null`: Excludes the icon from appearing in the preset
- `string`: The full path\* to an image file within the `<appdatadir>/customfiles/notify/presets/custom<number>/assets` directory
- `string[]`: An ordered array\*\* of full paths to 3 image files present in the `.../custom<number>/assets` directory

> [!WARNING]
> \*Regardless of platform, all image paths must replace all backslash (`\`) characters with forward slash (`/`) characters instead.
> 
> e.g: `C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/customicon.png`
> 
> This is to ensure the path can be read when loaded via HTML.

> [!WARNING]
> \*\*Bronze/silver/gold image paths **must appear in order** - e.g.:
      >       
> ```json
> [
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/bronze.png",
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/silver.png",
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/gold.png"
> ]
> ```

> [!IMPORTANT] 
> When manually editing a preset, all images used for **Logo**/**Decoration** elements should be manually copied to the preset's `<appdatadir>/customfiles/notify/presets/custom<number>/assets` directory for consistency.
> 
> Images set via the **+ Create New Preset** dialog will be copied to this directory automatically.
</details>

<details>
    <summary><h3 align="center" id="deletenewpreset">Delete a Preset</h3></summary>

Any custom preset can be deleted at any time after creation. To delete a custom preset:

- Ensure **Settings** > **Advanced** > **Use Custom App Files** is enabled
- Select the custom preset under **Customiser** > **Presets** > **Notification Preset**
- Click the trash icon (next to the **+ Create New Preset** button)
- Click the **OK** button in the confirmation dialog

The preset will then be removed from **Steam Achievement Notifier**, and any files associated with this preset will be deleted.

Additionally, any other notification types/saved **Themes** currently referencing this now-deleted custom preset will be reset to the **Default** preset\* instead.

> [!INFO]
> \*If a custom preset is loaded when it shouldn't be, **Steam Achievement Notifier** will fall back to the **Default** preset instead.
> 
> Example scenarios:
> - **Settings** > **Advanced** > **Use Custom App Files** has been disabled while a custom preset is selected
> - The currently selected custom preset has now been deleted
> - A different notification type was using a now-deleted custom preset
> - A saved **Theme** using a now-deleted custom preset was loaded
> 
> Most scenarios which reset to the **Default** preset should be logged under **Settings** > **Misc.** > **App Log**.

> [!CAUTION]
> If you encounter an error in the confirmation dialog while deleting a custom preset, it may be left in a partially-deleted state.
> 
> If this happens, you can manually remove all associated entries/files by doing the following:
> 
> - Open `<appdatadir>/customfiles/notify/presets/preset.json`
> - Remove the entry containing the deleted preset - e.g:
> 
> ```json
>   // Before:
>   {
>       ...,
>       "custom0": "This shouldn't be here"
>   }
> ```
> 
> ```json
>   // After:
>   {
>       ...
>   }
> ```
> 
> - Manually delete `<appdatadir>/customfiles/notify/presets/custom<number>`
> 
> Once completed, **Steam Achievement Notifier** should no longer be able to access or display this custom preset, and all previously-associated files will have been deleted.
</details>

<h2 align="center" id="files">Notification Files</h2>

<details>
    <summary><h3 align="center" id="html">HTML</h3></summary>

Location: `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>/index.html`

Each preset's HTML file contains only a partial HTML structure. Surrounding standard tags - such as `<!DOCTYPE html>`/`<html>`/`<body>` etc. - are specified in `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/base.html`.

Each preset's partial HTML is loaded within `base.html`, which then creates a complete HTML file.

<h4>Tags</h4>

- `<meta width="300" height="50" offset="20">`

The `meta` tag controls the default `width`/`height` values of unscaled notifications - i.e. when **Customiser** > **Presets** > **Scale** is set to **100%**.

An optional `offset` attribute can be specified, which offsets the placement of the on-screen notification - e.g. `offset="0"` would place the notification at the very edge of the selected monitor's boundary.

If `offset` is not specified - i.e. `<meta width="300" height="50">` - the notification will use the default `offset` value of `20`.


</details>

<details>
    <summary><h3 align="center" id="css">CSS</h3></summary>
</details>

<details>
    <summary><h3 align="center" id="customjs">Custom JS</h3></summary>
</details>