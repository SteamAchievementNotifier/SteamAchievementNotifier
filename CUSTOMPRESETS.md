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

> [!INFO]
> File location: `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>/index.html`

Each preset's HTML file contains only a partial HTML structure. Surrounding standard tags - such as `<!DOCTYPE html>`/`<html>`/`<body>` etc. - are specified in `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/base.html`.

Each preset's partial HTML is loaded within `base.html`, which then creates a complete HTML file.

<h3>Tags, Classes & IDs</h3>

The following tags, classes & IDs are common between all notification presets, and dynamically control the display of the various customisation options available in the **Customiser** menu.

<hr style="height: 1px;"/>

<h4>Dimensions/Placement</h4>

| `<meta width="300" height="50" offset="20">` |
| - |

The `meta` tag controls the default `width`/`height` values of unscaled notifications - i.e. when **Customiser** > **Presets** > **Scale** is set to **100%**.

An optional `offset` attribute can be specified, which offsets the placement of the on-screen notification - e.g. `offset="0"` would place the notification at the very edge of the selected monitor's boundary.

If `offset` is not specified - i.e. `<meta width="300" height="50">` - the notification will use the default `offset` value of `20`.

<hr style="height: 1px;"/>

<h4><code>.wrapper</code> Class</h4>

The `.wrapper` class simply adds `display: grid` to any element using it, which prevents having to assign `display: grid` to each element individually.

<hr style="height: 1px;"/>

<h4>Containers/Background</h4>

| `<div class="wrapper" id="outerwrapper">` |
| - |

The `div.wrapper#outerwrapper` element is the main container for all other notification content.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Style** > **Glow**

<hr style="height: 1px;"/>

| `<div class="wrapper" id="achcont">` |
| - |

The `div.wrapper#achcont` element is an inner container for the notification background, icon and text element.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Style** > **Opacity** (when **Style** > **Opacity** > **BG Only** is unchecked)

<hr style="height: 1px;"/>

| `<div class="wrapper" id="bg"></div>` |
| - |

The `div.wrapper#bg` element displays the chosen **Style** > **Background Style**.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Style** > **Background Style** > **Background Image**/**Game Art** > **Brightness** (when **Style** > **Background Style** > **Background Image**/**Game Art** is selected)
- **Style** > **Roundness**
- **Style** > **Opacity** (when **Style** > **Opacity** > **BG Only** is checked)
- **Style** > **Outline**
- **Colors** > **Primary Color**
- **Colors** > **Secondary Color**
- **Colors** > **Primary Color**

<hr style="height: 1px;"/>

| `<div class="wrapper" id="bg">::after</div>` |
| - |

The following **Customiser** options are applied to the `div.wrapper#bg` element's inner `::after` element when enabled:

- **Style** > **Background Style** > **Background Image**/**Game Art**
- **Style** > **Background Style** > **Background Image** > **Use Achievement Icon**
- **Style** > **Background Style** > **Background Image**/**Game Art** > **Blur**

<hr style="height: 1px;"/>

<h4>Icons</h4>

| `<div class="wrapper" id="achiconwrapper">` |
| - |

The `div.wrapper#achiconwrapper` element is a container for notification icon elements.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Icons** > **Icon Scale**

<hr style="height: 1px;"/>

| `<div id="iconborder"></div>` |
| - |

The `div#iconborder` element displays the image(s) selected for **Icons** > **Show Icon Border**.

<hr style="height: 1px;"/>

| `<img src="../img/achicon.png" id="achicon" draggable="false">` |
| - |

The `img#achicon` element displays the icon of the unlocked achievement.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Icons** > **Icon Scale**
- **Icons** > **Icon Roundness**
- **Icons** > **Use Game Icon** (which replaces the unlocked achievement icon)
- **Icons** > **Use Custom Icon** (which replaces the unlocked achievement icon)

<hr style="height: 1px;"/>

| `<div class="wrapper" id="logo"></div>` |
| - |

> [!WARNING]
> If **+ Create New Preset** > **Logo** is set to *None* when creating a new preset, **Logo**-related options will be hidden in the **Customiser** menu.

The `div.wrapper#logo` element displays the image used for the **Icons** > **Logo** option.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Icons** > **Logo Scale**
- The image used for the **Icons** > **Decoration** option when **Icons** > **Use Decoration** is enabled

<hr style="height: 1px;"/>

<h4>Text</h4>

| `<div class="wrapper" id="achcontent">` |
| - |

The `div.wrapper#achcontent` element is the container for all text elements.

<hr style="height: 1px;"/>

| `<span id="unlockmsg"></span>` |
| - |

The `span#unlockmsg` element displays the default "Achievement unlocked" message.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Preset** > **Custom Text**
- **Preset** > **Custom Text** > **Use Game Title**
- **Style** > **Font Size**
- **Style** > **Font Size** > **Use Custom Font Sizes** > **Unlock Message**
- **Style** > **Text Spacing** (where applicable)
- **Style** > **Font Color**
- **Style** > **Font Color** > **Use Custom Font Colors** > **Color 1/2/3** (dependent on position set by **Preset** > **Notification Elements**)
- **Style** > **Font Outline**
- **Style** > **Font Shadow**

<hr style="height: 1px;"/>

| `<span id="decoration"></span>` :zap: |
| - |

> [!WARNING]
> If **+ Create New Preset** > **Decoration** is set to *None* when creating a new preset, **Decoration**-related options will be hidden in the **Customiser** menu.

> [!INFO]
> :zap: This element is dynamically inserted as a child of the `span#unlockmsg` element via `.../customfiles/dist/notify/base.js`.

The presence of the `span#decoration` element indicates that a decoration element is active for the current preset and serves only as a CSS target. In most core notification presets, a `::before` psuedo-element within `.wrapper#achcontent` is used to display the **Decoration** image instead:

```css
.wrapper#achcontent::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    grid-column-start: 1;
    display: var(--decorationdisplaytype);
    grid-row-start: var(--decorationindex);
    background: var(--decoration) center / contain no-repeat;
    transform: scale(var(--decorationscale));
    scale: calc(1.75 * var(--fontsize));
}
```

This is done in order to support the dynamic positioning controlled by **Customiser** > **Preset** > **Notification Elements** via the `var(--decorationindex)` variable.

Although this element usually appears inline alongside text elements, this behaviour can be overridden:

```css
.wrapper#achcont:has(span#unlockmsg > span#decoration) #mycustomelement {
    background: url(var(--decoration)) center / contain no-repeat;
    ...
}
```

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Icons** > **Decoration Scale**
- **Icons** > **Rarity: \>/\< X%** (when **+ Create New Preset** > **Decoration** is set to **Dynamic** or `...customfiles/notify/presets/custom<number>/defaulticons.json` > `"decoration"` is set to `string[]`)

<hr style="height: 1px;"/>

| `<span id="title"></span>` |
| - |

The `span#title` element displays the title of the unlocked achievement.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Style** > **Font Size**
- **Style** > **Font Size** > **Use Custom Font Sizes** > **Title**
- **Style** > **Text Spacing** (where applicable)
- **Style** > **Font Color**
- **Style** > **Font Color** > **Use Custom Font Colors** > **Color 1/2/3** (dependent on position set by **Preset** > **Notification Elements**)
- **Style** > **Font Outline**
- **Style** > **Font Shadow**

<hr style="height: 1px;"/>

| `<span id="hiddenicon"></span>` :zap: |
| - |

> [!INFO]
> :zap: This element is dynamically inserted as a child of the `span#title` element via `.../customfiles/dist/notify/base.js`.

The `span#hiddenicon` element displays the chosen **Icons** > **Hidden Icon** image when a "hidden"/"secret" achievement is unlocked.

Although this element usually appears inline alongside the `span#title` element, this behaviour can be overridden\*:

```css
#hiddenicon {
    display: none;
}

#mycustomelement {
    background: url(var(--hiddenicon)) center / contain no-repeat;
    ...
}
```

> [!WARNING]
> Overriding the default inline position will cause the position set by **Preset** > **Notification Elements** to no longer function.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Icons** > **Show Hidden Icon**

<hr style="height: 1px;"/>

| `<span id="desc"></span>` |
| - |

The `span#desc` element displays the description of the unlocked achievement.

Additionally, the following **Customiser** options are also applied to this element when enabled:

- **Style** > **Font Size**
- **Style** > **Font Size** > **Use Custom Font Sizes** > **Description**
- **Style** > **Text Spacing** (where applicable)
- **Style** > **Font Color**
- **Style** > **Font Color** > **Use Custom Font Colors** > **Color 1/2/3** (dependent on position set by **Preset** > **Notification Elements**)
- **Style** > **Font Outline**
- **Style** > **Font Shadow**

</details>

<details>
    <summary><h3 align="center" id="css">CSS</h3></summary>

Each customisation option set via the **Customiser** menu is automatically applied to each of the above HTML elements via the following files:

- `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/base.css`
- `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/dist/notify/base.js`

> [!WARNING]
> While any changes made to the above files will be reflected in notifications, changes to global CSS variables and/or JS functions/values will affect ALL notification presets while **Settings** > **Advanced** > **Use Custom App Files** is enabled.

All notification presets have access to the following CSS variables:

- `--displaytime`: 
- `--scale`: 
- `--gradientangle`: 
- `--bgimg`: 
- `--bgimgbrightness`: 
- `--brightness`: 
- `--roundness`: 
- `--fontsize`: 
- `--opacity`: 
- `--iconroundness`: 
- `--primarycolor`: 
- `--secondarycolor`: 
- `--tertiarycolor`: 
- `--fontcolor`: 
- `--fontoutline`: 
- `--fontshadow`: 
- `--logo`: 
- `--decoration`: 
- `--decorationdisplaytype`: 
- `--gs`: 
- `--unit`: 
- `--raritycolor`: 
- `--hiddenicon`: 
- `--glow`: 
- `--glowsize`: 
- `--glowcolor`: 
- `--glowanim`: 
- `--glowspeed`: 
- `--blur`: 
- `--mask`: 
- `--outline`: 
- `--outlinecolor`: 
- `--outlinewidth`: 
- `--badgeposx`: 
- `--badgeposy`: 
- `--badgecolor`: 
- `--badgefontcolor`: 
- `--badgesize`: 
- `--badgeroundness`: 
- `--badgeimg`: 
- `--iconscale`: 
- `--iconshadowcolor`: 
- `--iconanimcolor`: 
- `--logoscale`: 
- `--decorationscale`: 
- `--unlockmsgfontsize`: 
- `--titlefontsize`: 
- `--descfontsize`: 
- `--unlockmsgfontcolor`: 
- `--titlefontcolor`: 
- `--descfontcolor`: 
- `--iconborder`: 
- `--iconborderpos`: 
- `--iconborderscale`: 
- `--iconborderx`: 
- `--iconbordery`: 
- `--textvspace`: 
- `--bgstyle`: 
- `--bgonly`: 
- `--pos`: 
- `--ovpos`: 

Additionally, the following attributes are dynamically applied to the notification's `<body>` element:

- `[main]`/`[semi]`/`[rare]`/`[plat]`: 
- `[topleft]`/`[topcenter]`/`[topright]`/`[bottomleft]`/`[bottomcenter]`/`[bottomright]`: 
- `[solid]`/`[gradient]`/`[bgimg]`/`[gameart]`: 
- `[bgonly]`: 
- `[nodecoration]`: 
- `[alldetails]`: 
- `[fastanim]`: 
- `[ss]`: 
- `[ssdisplay]`: 

> [!IMPORTANT]
> CSS variables/attributes may be added/removed as part of future updates. As such, this list may not fully reflect all CSS variables/attributes currently available within the app.

</details>