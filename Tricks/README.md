# Tricks

<p>You can add to the theme some little extra features. You should create and set true the preference in <code>about:config</code> page.</p>
<hr>

### Solid background in themes that use images
<table><tr>
<td width="320px">firefoxgx.solid-background</td>
<td width="50px">true</td></tr>
</table>

![SolidBackground](https://github.com/user-attachments/assets/5689832c-c30a-4f7d-823a-86f1ae721bdc)
<hr>

### Image in menus (contextual menu and arrowpanel menus)

<p><b>Warning: </b>For solid themes the image will be <code>chrome/newtab/menu-image.png</code>, If you use a theme with images and any extension to change some color, you should use too '<a href="https://github.com/Godiesc/firefox-gx/tree/main/Extras/Main-Image">Main-image</a>' config. Themes that use an animated image will cause a high cpu use.</p>
<table><tr>
<td width="320px">firefoxgx.image-in-menus</td>
<td width="50px">true</td></tr>
</table>

![ImageInMenus](https://user-images.githubusercontent.com/22057609/228356808-02b9cb92-ba4b-4769-a870-8b41b638c18f.png)
<hr>

### Arrow in popup menus

<p><b>⚠ Warning: </b>In some situations the arrow will appears in the wrong side.</p>
<table><tr>
<td width="320px">firefoxgx.arrow-in-menus</td>
<td width="50px">true</td></tr>
</table>

![PanelArrow](https://github.com/user-attachments/assets/cc6dcc16-01c0-4d56-aa1a-8e488df5386e)
<hr>

### Gradient border in menus

<p>Replace the default border with a gradient and without roundness.</p>
<table><tr>
<td width="320px">firefoxgx.gradientBorder-in-menus</td>
<td width="50px">true</td></tr>
</table>

![gradientBorder1](https://github.com/user-attachments/assets/c95288e8-7e8c-402d-936d-57ecf5f34ac4)
<hr>

### Compatibility with [Adaptive Tab Bar Color](https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour/) extension.
<p>You can add the code in <code>ogx_tricks.css</code> file.</p>
<details><summary>Code Here</summary>
    
```
:root {
  --my-new-accent-color: lch(from var(--lwt-accent-color) calc(l + 70) c h) !important;
  --toolbarbutton-icon-fill-attention: var(--my-new-accent-color) !important;
}

:root,
:root[lwtheme],
:root:not([lwtheme]) {
  --lwt-accent-color: color-mix(in srgb, var(--toolbar-bgcolor) 70%, var(--contrast-color)) !important;
}
```
</details>

https://github.com/user-attachments/assets/c0c91173-77e3-41f9-88d6-59de914a6cab
