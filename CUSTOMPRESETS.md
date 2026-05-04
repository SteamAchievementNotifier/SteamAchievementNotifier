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

> :information_source: `<appdatadir>` in the below documentation refers to:
> - **Windows**: `C:/Users/%username%/AppData/Local`
> - **Linux**: `~/.local/share`

<h2 align="center" id="setup">Setup</h2>

<details>
    <summary><h3 align="center" id="createnewpreset">Create a New Preset</h3></summary>

Starting in **V1.9.39**, a **+ Create New Preset** button will appear under the **Customiser** > **Presets** > **Notification Preset** dropdown.

> :warning: The **+ Create New Preset** button will only be displayed when **Settings** > **Advanced** > **Use Custom App Files** is enabled.

To create a new preset, click the **+ Create New Preset** button. In the dialog that appears, add a **name** for your preset, then select either a **Logo** element, a **Decoration** element or one of each from the associated dropdowns.

> :information_source: The preset name is used only as a label.
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

> :bulb: You can replace any **Logo**/**Decoration** image(s) with a file of your choice by clicking the image element below the dropdown.
> 
> This will then open a file select menu where you can choose a custom image file.

Click the **OK** button to create your new custom preset. The preset's files will then be available in `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>`.

> :bulb: If you don't know what `custom<number>` key has been assigned to your created preset, check `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/presets.json`, which will contain an entry for your chosen label next to its `custom<number>` key.
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
    // ...Other keys/values
    "custom0": "OLD Preset"
}
```


```json
// After:
{
    // ...Other keys/values
    "custom0": "NEW Preset"
}
```

> :stop: 🛑 \*Do not change the name of the `custom<number>` key itself:
> 
> ```json
> // Before:
> {
>    // ...Other keys/values
>     "custom0": "OLD Preset"
> }
> ```
> 
> 
> ```json
> // After:
> {
>    // ...Other keys/values
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

> :warning: \*Regardless of platform, all image paths must replace all backslash (`\`) characters with forward slash (`/`) characters instead.
> 
> e.g: `C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/customicon.png`
> 
> This is to ensure the path can be read when loaded via HTML.

> :warning: \*\*Bronze/silver/gold image paths **must appear in order** - e.g.:
      >       
> ```json
> [
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/bronze.png",
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/silver.png",
>     "C:/Users/User/AppData/Local/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom0/assets/gold.png"
> ]
> ```

> :exclamation: When manually editing a preset, all images used for **Logo**/**Decoration** elements should be manually copied to the preset's `<appdatadir>/customfiles/notify/presets/custom<number>/assets` directory for consistency.
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

> :information_source: \*If a custom preset is loaded when it shouldn't be, **Steam Achievement Notifier** will fall back to the **Default** preset instead.
> 
> Example scenarios:
> - **Settings** > **Advanced** > **Use Custom App Files** has been disabled while a custom preset is selected
> - The currently selected custom preset has now been deleted
> - A different notification type was using a now-deleted custom preset
> - A saved **Theme** using a now-deleted custom preset was loaded
> 
> Most scenarios which reset to the **Default** preset should be logged under **Settings** > **Misc.** > **App Log**.

> :stop: If you encounter an error in the confirmation dialog while deleting a custom preset, cleanup logic has been added when creating/deleting custom presets to mitigate scenarios where the custom preset's files and directories may be left in a partially-deleted state.
> 
> However, you may still encounter situations where cleanup cannot be fully performed automatically. If this happens, you can manually remove all entries/files/directories associated with the affected custom preset by doing the following:
> 
> - Open `<appdatadir>/customfiles/notify/presets/preset.json`
> - Remove the entry containing the deleted preset - e.g:
> 
> ```json
>   // Before:
>   {
>       // ...Other keys/values
>       "custom0": "This shouldn't be here"
>   }
> ```
> 
> ```json
>   // After:
>   {
>       // ...Other keys/values
>   }
> ```
> 
> - If present, manually delete `<appdatadir>/customfiles/notify/presets/preset_TEMP.json`
> - Manually delete the `<appdatadir>/customfiles/notify/presets/custom<number>` directory
> 
> Once completed, **Steam Achievement Notifier** should no longer be able to access or display this custom preset, and all previously-associated files will have been deleted.
</details>

<h2 align="center" id="files">Notification Files</h2>

<details>
    <summary><h3 align="center" id="html">HTML</h3></summary>

> :information_source: File location: `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>/index.html`

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

> :warning: If **+ Create New Preset** > **Logo** is set to *None* when creating a new preset, **Logo**-related options will be hidden in the **Customiser** menu.

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

> :warning: If **+ Create New Preset** > **Decoration** is set to *None* when creating a new preset, **Decoration**-related options will be hidden in the **Customiser** menu.

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

> :warning: Overriding the default inline position will cause the position set by **Preset** > **Notification Elements** to no longer function.

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

> :information_source: File location: `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/presets/custom<number>/styles.css`

Each customisation option set via the **Customiser** menu is automatically applied to each of the above HTML elements via the following files:

- `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/base.css`: The main global CSS rules loaded by all presets, which apply the user's current notification configuration via specific HTML classes, IDs, variables and attributes
- `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/notify/baseanim.css`: Contains global CSS rules loaded by all presets, which control global animation states - especially HTML classes, IDs variables and attributes relating to Customiser preview and screenshot behaviours
- `<appdatadir>/Steam Achievement Notifier (V1.9)/customfiles/dist/notify/base.js`: Transpiled JS generated from `src/notify/base.ts`, which dynamically inserts CSS variables/attributes relevant to the user's current notification configuration into the notification DOM

> :stop: While any changes made to the above files will be reflected in notifications, changes to global CSS variables/attirbutes and/or JS functions/values will affect ALL notification presets while **Settings** > **Advanced** > **Use Custom App Files** is enabled.

<h3>CSS Variables</h3>

All notification presets have access to the following CSS variables:

<h4>Dimensions</h4>

| `--notifywidth` | `px` |
| - | - |

| `--notifyheight` | `px` |
| - | - |

The value of the notification's absolute width/height in `px`, multiplied by the value of **Customiser** > **Presets** > **Scale**, divided by 100:

| `width\|height x (scale / 100)` |
| - |

```css
.wrapper#outerwrapper {
    width: var(--notifywidth);
    height: var(--notifyheight);
}
```

<hr style="height: 1px;"/>

<h4>Customiser > Presets</h4>

| `--displaytime` | `number` |
| - | - |

The value of **Customiser** > **Presets** > **Display Time**.

```css
.wrapper#achcont {
    --transition: 0.2s;
    animation:
        slidein calc(var(--transition) * 2) forwards,
        slideout calc(var(--transition) * 2) calc(var(--displaytime) - calc(var(--transition) * 2)) forwards;
}
```

<hr style="height: 1px;"/>

| `--scale` | `number` |
| - | - |

The value of **Customiser** > **Presets** > **Scale**, divided by 100.

```css
.wrapper#achiconwrapper {
    width: calc(var(--notifyheight) - (10px * var(--scale)));
    height: calc(var(--notifyheight) - (10px * var(--scale)));
}
```

<hr style="height: 1px;"/>

<h4>Customiser > Presets > Notification Elements > Rarity Badge</h4>

| `--badgeposx` | `px px` |
| - | - |

Two `calc()` functions used for the `inset-inline` property to calculate the horizontal position of the **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** element.

```css
#badge {
    inset-inline: var(--badgeposx);
}

```

> :information_source: The value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Horizontal Offset** is added to the above `calc()` functions automatically.

<hr style="height: 1px;"/>

| `--badgeposy` | `px px` |
| - | - |

Two `calc()` functions used for the `inset-block` property to calculate the vertical position of the **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** element.

```css
#badge {
    inset-block: var(--badgeposy);
}

```

> :information_source: The value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Vertical Offset** is added to the above `calc()` functions automatically.

<hr style="height: 1px;"/>

| `--badgecolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Badge Color**, used as the **Rarity Badge**'s background color.

```css
#badge {
    background-color: var(--badgecolor);
}
```

> :information_source:When **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Use Icon** is checked, this value is unused.

<hr style="height: 1px;"/>

| `--badgefontcolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Badge Font Color**, used as the **Rarity Badge**'s font color.

```css
#badge {
    color: var(--badgefontcolor);
}
```

> :information_source: When **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Use Icon** is checked, this value is unused.

<hr style="height: 1px;"/>

| `--badgesize` | `px` |
| - | - |

The value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Badge Size** as `px`, divided by 100.

```css
#badge:not([badgeimg]) {
    height: calc(var(--badgesize) * 1.5);
}
```

<hr style="height: 1px;"/>

| `--badgeroundness` | `px` |
| - | - |

The value of **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Badge Roundness** as `px`, divided by 100.

```css
#badge {
    border-radius: var(--badgeroundness);
}
```

> :information_source: When **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Use Icon** is checked, this value is unused.

<hr style="height: 1px;"/>

| `--badgeimg` | `url()` |
| - | - |

The filepath of the rarity-appropriate image set under **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Use Icon**, wrapped in a `url()` function.

> :information_source: The image used as the **Rarity Badge** is dynamically inserted based on the rarity value of the unlocked achievement.

```css
#badge[badgeimg] {
    width: calc(var(--badgesize) * 1.5);
    height: calc(var(--badgesize) * 1.5);
    background: var(--badgeimg) center / contain no-repeat;
    background-color: transparent;
}
```

> :information_source: When **Customiser** > **Presets** > **Notification Elements** > **Rarity Badge** > **Use Icon** is unchecked, this value is unused.

<hr style="height: 1px;"/>

<h4>Customiser > Style</h4>

| `--gradientangle` | `deg` |
| - | - |

The value of **Customiser** > **Style** > **Background Style** > **Gradient** > **Gradient Angle**.

```css
body[gradient] .wrapper#bg {
    background-image: linear-gradient(var(--gradientangle),var(--primarycolor),var(--secondarycolor));
}
```

<hr style="height: 1px;"/>

| `--bgimg` | `url()` |
| - | - |

The filepath of the image set under **Customiser** > **Style** > **Background Style** > **Background Image** > **Background Image**, wrapped in a `url()` function.

```css
body[bgimg] .wrapper#bg::after,
body[gameart] .wrapper#bg::after {
    background: var(--bgimg) center / cover no-repeat;
}
```

<hr style="height: 1px;"/>

| `--bgimgbrightness` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Background Style** > **Background Image** > **Brightness**.

```css
body[bgimg] .wrapper#bg {
    filter: brightness(var(--bgimgbrightness));
}
```

<hr style="height: 1px;"/>

| `--brightness` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Background Style** > **Game Art** > **Brightness**.

```css
body[gameart] .wrapper#bg {
    filter: brightness(var(--brightness));
}
```
<hr style="height: 1px;"/>

| `--blur` | `px` |
| - | - |

The value of **Customiser** > **Style** > **Background Style** > **Background Image**/**Game Art** > **Blur** in `px`.

```css
body[bgimg] .wrapper#bg::after,
body[gameart] .wrapper#bg::after {
    filter: blur(var(--blur));
}
```

<hr style="height: 1px;"/>

| `--roundness` | `px` |
| - | - |

The value of **Customiser** > **Style** > **Roundness** in `px`.

```css
.wrapper#bg {
    border-radius: var(--roundness);
}
```

<hr style="height: 1px;"/>

| `--fontsize` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Font Size**, divided by 100.

```css
#achcontent {
    font-size: calc(1rem * var(--fontsize));
}
```

<hr style="height: 1px;"/>

| `--unlockmsgfontsize` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** > **Unlock Message**, divided by 100.

```css
#achcontent > #unlockmsg {
    font-size: calc(1rem * var(--unlockmsgfontsize));
}
```

> :information_source: When **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** is unchecked, this value uses the **Customiser** > **Style** > **Font Size** value instead.

<hr style="height: 1px;"/>

| `--titlefontsize` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** > **Title**, divided by 100.

```css
#achcontent > #title {
    font-size: calc(1rem * var(--titlefontsize));
}
```

> :information_source: When **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** is unchecked, this value uses the **Customiser** > **Style** > **Font Size** value instead.

<hr style="height: 1px;"/>

| `--descfontsize` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** > **Description**, divided by 100.

```css
#achcontent > #desc {
    font-size: calc(1rem * var(--descfontsize));
}
```

> :information_source: When **Customiser** > **Style** > **Font Size** > **Use Custom Font Sizes** is unchecked, this value uses the **Customiser** > **Style** > **Font Size** value instead.

<hr style="height: 1px;"/>

| `--textvspace` | `px` |
| - | - |

The value of **Customiser** > **Style** > **Text Spacing** in `px`.

```css
#achcontent > span,
#header > span {
    margin-block: calc(((var(--textvspace) * 1px) - 1.5px) * var(--scale));
}
```

<hr style="height: 1px;"/>

| `--opacity` | `number` |
| - | - |

The value of **Customiser** > **Style** > **Opacity**, divided by 100.

```css
.wrapper#bg {
    opacity: var(--opacity);
}
```

<hr style="height: 1px;"/>

| `--outline` | `solid \| dashed \| dotted` |
| - | - |

| `--outlinecolor` | `hex` |
| - | - |

| `--outlinewidth` | `px` |
| - | - |

The values of the **Customiser** > **Style** > **Outline** sub-options:

- **Outline Type**: `--outline`
- **Outline Color**: `--outlinecolor`
- **Outline Width**: `--outlinewidth`

```css
.wrapper#bg {
    border: var(--outlinewidth) var(--outline) var(--outlinecolor);
}
```

<hr style="height: 1px;"/>

| `--glow` | `drop-shadow()` |
| - | - |

| `--glowsize` | `rem` |
| - | - |

| `--glowcolor` | `hex` |
| - | - |

| `--glowanim` | `animation` |
| - | - |

| `--glowspeed` | `number` |
| - | - |

The values of the **Customiser** > **Style** > **Glow** option (`--glow`), plus its sub-options:

- **Size**: `--glowsize`
- **Horizontal Offset**: `--glow`
- **Vertical Offset**: `--glow`
- **Color**/**Use Rarity**: `--glowcolor`
- **Animation**: `--glowanim`
- **Speed**: `--glowspeed`

```css
body {
    /* Horizontal/Vertical Offset are appended to `--glow` as `drop-shadow(<HO>px <VO>px)` automatically via `base.ts` */
    --glow: drop-shadow(0px 0px var(--glowsize) var(--glowcolor));
    --glowsize: 0.3rem;
    --glowcolor: #8a2be2;
    --glowanim: pulse calc(var(--transition) * var(--glowspeed)) linear infinite;
    --glowspeed: 50;
}

.wrapper#outerwrapper {
    --filter: var(--glow);
    filter: var(--filter);
    animation: var(--glowanim);
}
```

> :information_source: The values of the **Glow** sub-options are calculated and applied automatically via `base.ts`.

<hr style="height: 1px;"/>

| `--mask` | `url() center / contain no-repeat` |
| - | - |

The filepath of the image set under **Customiser** > **Style** > **Background Style** > **Mask** > **Mask Image**, wrapped in a `url() center / contain no-repeat` function and applied to the `body` element.

```css
body {
    mask: var(--mask);
}
```

<hr style="height: 1px;"/>

<h4>Customiser > Colors</h4>

| `--primarycolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Primary Color**.

```css
body[solid] .wrapper#bg {
    background-color: var(--primarycolor);
}
```

<hr style="height: 1px;"/>

| `--secondarycolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Secondary Color**.

```css
body[gradient] .wrapper#bg {
    background-image: linear-gradient(var(--gradientangle),var(--primarycolor),var(--secondarycolor));
}
```

<hr style="height: 1px;"/>

| `--tertiarycolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Tertiary Color**.

```css
/* PS Modern Preset */
.wrapper#logo::after {
    content: "";
    width: 3rem;
    height: 3rem;
    scale: 0;
    background-color: transparent;
    outline: calc(1px * var(--scale)) solid var(--tertiarycolor);
    border-radius: 50%;
    filter: blur(calc(0.65px * var(--scale)));
    z-index: -1;
    animation: expandcircle calc(var(--transition) * 5) calc(var(--displaytime) / 4) linear forwards;
}
```

<hr style="height: 1px;"/>

| `--iconshadow`| `drop-shadow()` |
| - | - |

| `--iconshadowcolor`| `hex` |
| - | - |

The value of **Customiser** > **Colors** > **Rare Icon Shadow Color**, wrapped in a repeated `drop-shadow()` function.

```css
/*
    --iconshadowcolor: #<hex>;
    --iconshadow: drop-shadow(0 0 0.25rem var(--iconshadowcolor)) drop-shadow(0 0 0.5rem var(--iconshadowcolor));
*/
body[rare]:not([noiconanim]) .wrapper#achiconwrapper,
body[plat]:not([noiconanim]) .wrapper#achiconwrapper {
    filter: var(--iconshadow);
}
```

<hr style="height: 1px;"/>

| `--iconanimcolor`| `hex` |
| - | - |

| `--iconbefore`| `radial-gradient()` |
| - | - |

| `--iconafter`| `repeating-conic-gradient()` |
| - | - |

Two layered animations using the value of **Customiser** > **Colors** > **Rare Icon Animation Color**, wrapped in `radial-gradient()`/`repeating-conic-gradient()` functions.

```css
/*
    --iconanimcolor: #<hex>;
    --iconbefore: radial-gradient(circle,var(--iconanimcolor),transparent);
    --iconafter: repeating-conic-gradient(var(--iconanimcolor),transparent);
*/

body[rare]:not([noiconanim]) .wrapper#achiconwrapper::before,
body[plat]:not([noiconanim]) .wrapper#achiconwrapper::before {
    background-image: var(--iconbefore);
    overflow: hidden;
    z-index: -1;
    animation: steamrotate calc(var(--anim) * 18) linear infinite reverse;
}

body[rare]:not([noiconanim]) .wrapper#achiconwrapper::after,
body[plat]:not([noiconanim]) .wrapper#achiconwrapper::after {
    animation: steamrotate calc(var(--anim) * 6) linear infinite;
    mix-blend-mode: overlay;
    background: var(--iconafter);
    overflow: hidden;
    z-index: -1;
    filter: blur(1rem);
}
```

<hr style="height: 1px;"/>

| `--fontcolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Font Color**.

```css
#achcontent {
    color: var(--fontcolor);
}
```

<hr style="height: 1px;"/>

| `--unlockmsgfontcolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** > **Color 1**.

```css
#achcontent > #unlockmsg {
    color: var(--unlockmsgfontcolor);
}
```

> :information_source: When **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** is unchecked, this value uses the **Customiser** > **Colors** > **Font Color** value instead.

<hr style="height: 1px;"/>

| `--titlefontcolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** > **Color 2**.

```css
#achcontent > #title {
    color: var(--titlefontcolor);
}
```

> :information_source: When **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** is unchecked, this value uses the **Customiser** > **Colors** > **Font Color** value instead.

<hr style="height: 1px;"/>

| `--descfontcolor` | `hex` |
| - | - |

The hex code value of **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** > **Color 3**.

```css
#achcontent > #desc {
    color: var(--descfontcolor);
}
```

> :information_source: When **Customiser** > **Colors** > **Font Color** > **Use Custom Font Colors** is unchecked, this value uses the **Customiser** > **Colors** > **Font Color** value instead.

<hr style="height: 1px;"/>

| `--fontoutline` | `px hex` |
| - | - |

The combined values of the **Customiser** > **Colors** > **Font Outline** sub-options, applied via `-webkit-text-stroke`:

- **Font Outline Color**: `hex`
- **Font Outline Scale**: `px`

```css
#achcontent {
    /* --fontoutline: <scale>px #<color>; */
    -webkit-text-stroke: var(--fontoutline);
    paint-order: stroke fill;
}
```

<hr style="height: 1px;"/>

| `--fontshadow` | `drop-shadow() hex px px px` |
| - | - |

The combined values of the **Customiser** > **Colors** > **Font Shadow** sub-options, applied via the `filter: drop-shadow()` function:

- **Font Shadow Color**: `hex`
- **Font Shadow Scale**: `px`
- **Horizontal Offset**: `px`
- **Vertical Offset**: `px`

```css
#achcontent {
    /* --fontshadow: drop-shadow(<HO>px <VO>px <scale>px #<color>); */
    filter: var(--fontshadow);
}
```

<hr style="height: 1px;"/>

<h4>Customiser > Icons</h4>

| `--iconscale` | `number` |
| - | - |

The value of **Customiser** > **Icons** > **Icon Scale**, divided by 100.

```css
.wrapper#achiconwrapper {
    transform: scale(var(--iconscale));
}
```

<hr style="height: 1px;"/>

| `--iconroundness` | `px` |
| - | - |

The value of **Customiser** > **Icons** > **Icon Roundness** in `px`.

```css
#achicon {
    border-radius: var(--iconroundness);
}
```

<hr style="height: 1px;"/>

| `--iconborder` | `url()` |
| - | - |

| `--iconborderpos` | `number` |
| - | - |

| `--iconborderscale` | `number` |
| - | - |

| `--iconborderx` | `px` |
| - | - |

| `--iconbordery` | `px` |
| - | - |

The values of the **Customiser** > **Icons** > **Show Icon Border** sub-options:

- **Icon Border**: `--iconborder`
- **Border Position**: `--iconborderpos`
- **Border Scale**: `--iconborderscale`
- **Horizontal Offset**: `--iconborderx`
- **Vertical Offset**: `--iconbordery`

```css
#iconborder {
    /* 
        --iconborder: url('<filepath>');
        --iconborderpos: <99 | -1>;
        --iconborderscale: <scale / 100>;
        --iconborderx: <HO>px;
        --iconbordery: <VO>px;
    */
    transform: translate(calc(var(--iconborderx) * 1px),calc(var(--iconbordery) * 1px));
    background: var(--iconborder) center / contain no-repeat;
    scale: var(--iconborderscale);
    z-index: var(--iconborderpos);
}
```

<hr style="height: 1px;"/>

| `--hiddenicon` | `url()` |
| - | - |

The filepath of the image set under **Customiser** > **Icons** > **Show Hidden Icon** > **Hidden Icon**, wrapped in a `url()` function.

```css
#hiddenicon {
    display: inline-block;
    width: calc(0.85rem * var(--fontsize));
    height: calc(0.85rem * var(--fontsize));
    background: var(--hiddenicon) center / contain no-repeat;
    margin-right: calc(0.25rem * var(--fontsize));
    vertical-align: calc(-0.5px * var(--fontsize));
}
```

<hr style="height: 1px;"/>

| `--logo` | `url()` |
| - | - |

The filepath of the image set under **Customiser** > **Icons** > **Logo**, wrapped in a `url()` function.

```css
/* PS Modern Preset */
.wrapper#logo::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background: var(--logo) center / contain no-repeat;
}
```

<hr style="height: 1px;"/>

| `--logoscale` | `number` |
| - | - |

The value of **Customiser** > **Icons** > **Logo Scale**, divided by 100.

```css
.wrapper#logo {
    transform: scale(var(--logoscale));
}
```

<hr style="height: 1px;"/>

| `--decoration` | `url()` |
| - | - |

The filepath of the image (or rarity-appropriate image) set under **Customiser** > **Icons** > **Decoration**, wrapped in a `url()` function.

| `--decorationscale` | `number` |
| - | - |

The value of **Customiser** > **Icons** > **Decoration Scale**, divided by 100.

| `--decorationindex` | `number` |
| - | - |

The selected index value of **Customiser** > **Preset** > **Notification Elements** > **Decoration**.

```css
.wrapper#achcontent::before {
    /* --decorationdisplaytype: block; */
    content: "";
    display: var(--decorationdisplaytype);
    width: 0.5rem;
    height: 0.5rem;
    scale: calc(1.75 * var(--fontsize));
    background: var(--decoration) center / contain no-repeat;
    grid-column-start: 1;
    grid-row-start: var(--decorationindex);
    transform: scale(var(--decorationscale));
}
```

> :information_source: When **Decoration** is set to **Dynamic**, the image used as the **Decoration** is dynamically inserted based on the rarity value of the unlocked achievement.

<hr style="height: 1px;"/>

<h4>Misc.</h4>

| `--gs` | `number` |
| - | - |

Calculates the inverse of the achievement unlock percentage (rounded down to the nearest 5) to use as an XP value for certain presets - e.g. An achievement unlock percentage of `10` would have a `--gs` value of `90`.

`100 - <unlockpercentage> / 5) * 5`

> :information_source: The `--gs` value is reverted to the original achievement unlock percentage value when **Customiser** > **Presets** > **Use Percentage** is checked.

<hr style="height: 1px;"/>

| `--raritycolor` | `#a05526 \| #828282 \| #b4904a` |
| - | - |

A hardcoded hex code value displaying a color related to the unlock percentage of the achievement.

- Bronze: `#a05526`
- Silver: `#828282`
- Gold: `#b4904a`

<hr style="height: 1px;"/>

Additionally, the following attributes are dynamically applied to the notification's `<body>` element:

- `[main]`/`[semi]`/`[rare]`/`[plat]`: 
- `[topleft]`/`[topcenter]`/`[topright]`/`[bottomleft]`/`[bottomcenter]`/`[bottomright]`: 
- `[noiconanim]`: 
- `[solid]`/`[gradient]`/`[bgimg]`/`[gameart]`: 
- `[bgonly]`: 

```css
body[bgonly] .wrapper#bg {
    opacity: var(--opacity);
}
```

- `[nodecoration]`: 
- `[alldetails]`: 
- `[fastanim]`: 
- `[ss]`: 
- `[ssdisplay]`: 

> :bulb: CSS variables/attributes may be added/removed as part of future updates. As such, this list may not fully reflect all CSS variables/attributes currently available within the app.

</details>