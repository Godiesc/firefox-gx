# Tricks

<p>You can add the code below to give the theme some little extra feature. <b>You should add the code into the <code>chrome/components/tricks.css</code> file.</b></p>

## Image in the left-sidebar

```
/* Image in the left-sidebar in themes tha use images */

:root:not([chromehidden~="toolbar"]):is([lwtheme-image]) #PersonalToolbar, 
:root:not([chromehidden~="toolbar"]):is([style*="--lwt-additional-images"]) #PersonalToolbar {
    --toolbar-bgcolor: transparent !important;
    background-image: linear-gradient(var(--toolbar-bgcolor, transparent), var(--toolbar-bgcolor, transparent)),
    linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor)), var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    background-position: left top !important;
    background-repeat: repeat-y !important;
    background-size: cover !important;
}
```

![ImageInLeftSidebar](https://user-images.githubusercontent.com/22057609/228342105-0aadebca-eb96-407c-b0d3-a6bdfe5ba3f4.png)

## Image in menus (contextual menu and arrowpanel menus)

<p><b>Warning: </b>In themes that use  an animated image could cause a hight cpu use, in themes with static image I didn't notice any inconvenient. </p>

```
/* Image in menus in themes with images */
  
:root[style*="--lwt-additional-images"], :root[lwtheme-image]{
    --arrowpanel-background: var(--toolbar-bgcolor) !important;
}  
.menupopup-arrowscrollbox {
    background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                      linear-gradient(transparent, transparent), var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    backdrop-filter: blur(12px) !important;
    background-size: cover !important;
    background-position: -1px 0px !important;
}
panelview {
    background-image: linear-gradient(var(--arrowpanel-background, transparent), var(--arrowpanel-background, transparent)), 
                      linear-gradient(transparent, transparent), var(--lwt-header-image, var(--lwt-additional-images, none)) !important;
    backdrop-filter: brightness(10%) !important;
    background-size: cover !important;
    background-position: -1px 0px !important;
}
```

![ImageInMenus](https://user-images.githubusercontent.com/22057609/228356808-02b9cb92-ba4b-4769-a870-8b41b638c18f.png)

