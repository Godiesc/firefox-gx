# Tricks

<p>You can add the code below to give the theme some little extra feature. <b>You should add the code into the <code>chrome/components/tricks.css</code> file.</b></p>

## Non Image in the left-sidebar in themes that use images

```
/* Non Image in the left-sidebar in themes that use images */

:root:not([chromehidden~="toolbar"]):is([lwtheme-image]) #PersonalToolbar, 
:root:not([chromehidden~="toolbar"]):is([style*="--lwt-additional-images"]) #PersonalToolbar {
    background-image: none !important;
}
```

![NonImageInLeftSidebar](https://user-images.githubusercontent.com/22057609/228630330-a32dbd11-6800-4cb2-a402-4793cdfe805c.png)

## Image in menus (contextual menu and arrowpanel menus)

<p><b>Warning: </b>In themes that use  an animated image could cause a hight cpu use, in themes with static image I didn't notice any inconvenient. </p>

```
/* Image in menus in themes with images */

@media (prefers-color-scheme: dark){
    :root[style*="--lwt-additional-images"], :root[lwtheme-image]{
        --arrowpanel-background: #101019cf !important;
    }}

@media (prefers-color-scheme: light){
    :root[style*="--lwt-additional-images"], :root[lwtheme-image]{
        --arrowpanel-background: #f9f9f9cf !important;
    }}

.menupopup-arrowscrollbox, slot, panelview {
    background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                      linear-gradient(transparent, transparent), 
                      var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    backdrop-filter: brightness(10%) !important;
    background-size: cover !important;
    background-position: -1px 0px !important;
}

@media (-moz-platform: windows-win7), (-moz-platform: windows-win10), (-moz-platform: linux) {
    :root:not([chromehidden~="toolbar"]) #PanelUI-menu-button[open]>.toolbarbutton-badge-stack {
        background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                          linear-gradient(transparent, transparent), 
                          var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    }}
```

![ImageInMenus](https://user-images.githubusercontent.com/22057609/228356808-02b9cb92-ba4b-4769-a870-8b41b638c18f.png)

