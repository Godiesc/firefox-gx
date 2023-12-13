# Tricks

<p>You can add the code below to give the theme some little extra feature. <b>You should add the code into the <code>chrome/components/ogx_tricks.css</code> file, if not exist be free to create it.</b></p>

## Non Image in the left-sidebar in themes that use images
<details><summary>Code Here</summary>
    
```
/* Non Image in the left-sidebar in themes that use images */

:root:not([chromehidden~="toolbar"]):is([lwtheme-image]) #PersonalToolbar, 
:root:not([chromehidden~="toolbar"]):is([style*="--lwt-additional-images"]) #PersonalToolbar {
    background-image: none !important;
}
```

</details>

![NonImageInLeftSidebar](https://user-images.githubusercontent.com/22057609/228630330-a32dbd11-6800-4cb2-a402-4793cdfe805c.png)

## Image in menus (contextual menu and arrowpanel menus)

<p><b>Warning: </b>Not compatible if you use "Firefox Color" extension", with Main-Image config you will get some bugs. Themes that use an animated image will cause a high cpu use, in themes with static image I didn't notice any inconvenience. </p>
<details><summary>Code Here</summary>
    
```
/* Image in menus in themes with images */

@media (prefers-color-scheme: dark){
    :root[style*="--lwt-additional-images"], :root[lwtheme-image]{
        --arrowpanel-background: #101019b0 !important;
    }}

@media (prefers-color-scheme: light){
    :root[style*="--lwt-additional-images"], :root[lwtheme-image]{
        --arrowpanel-background: #f9f9f9b0 !important;
    }}

.menupopup-arrowscrollbox, slot, panelview {
    background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                      linear-gradient(transparent, transparent), 
                      var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    background-size: auto 104vh !important;
    background-position: -1px 0px !important;
}

@media (-moz-platform: windows), (-moz-platform: linux) {
    :root:not([chromehidden~="toolbar"]) #PanelUI-menu-button[open]>.toolbarbutton-badge-stack {
        background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                          linear-gradient(transparent, transparent), 
                          var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
        background-size: auto 104vh !important;
    }}
```
</details>

![ImageInMenus](https://user-images.githubusercontent.com/22057609/228356808-02b9cb92-ba4b-4769-a870-8b41b638c18f.png)

## Extensions button into the "left-sidebar" - Immovable
<details><summary>Code Here</summary>
    
```
/* Extensions button into the "left-sidebar" - Immovable */

:root:not([chromehidden~="toolbar"],[sizemode="fullscreen"]) #PersonalToolbar {
    --padding-top-left-sidebar: 146px !important; /* 182px to one-line config */
}

:root:not([chromehidden~="toolbar"], [sizemode="fullscreen"]) #unified-extensions-button {
    --toolbarbutton-hover-background: transparent !important;
    --toolbarbutton-active-background: transparent !important;
    position: fixed;
    display: flex;
    top: 76px !important;
    left: inherit !important;
    z-index: 2 !important;
    fill: var(--general-color) !important;
    width: calc(var(--uc-vertical-toolbar-width) - 4px) !important;
}

:root:not([chromehidden~="toolbar"], [sizemode="fullscreen"]) #unified-extensions-button:hover, 
:root:not([chromehidden~="toolbar"], [sizemode="fullscreen"]) #unified-extensions-button[open] {
    transform: scale(1.12) !important;
    transition: ease-in-out !important;
}

:root:not([chromehidden~="toolbar"], [sizemode="fullscreen"]) #unified-extensions-button:active {
    transform: scale(1.0) !important;
    transition-duration: 0ms !important;
}
```
</details>

![ExtensionButtonLeftSidebar](https://user-images.githubusercontent.com/22057609/232178144-499c9c9b-995d-4e9d-9f2b-1356aa34fd84.png)
