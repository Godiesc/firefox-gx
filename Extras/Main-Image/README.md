# How to apply.
<p>This configuration will simulate an image behind all the browser.</p>

<ul><li>Create this preference in about:config page.</li>  
  <table><tr>
    <td width="320px">firefoxgx.main-image</td>
    <td width="50px">true</td></tr>
  </table>
<li>You are forced to use an image with at least the same width and height of the resolution of your monitor for a perfect align, if the image is smaller the image will not be align at all, the image used by default is in <code>chrome\newtab</code> called: <code>main-image-dark.png</code> and <code>main-image-light.png</code>.</li>
<li>It will align only when Firefox is in maximized window.</li>
<li>Is compatible with one-line config, left-sidebar config and tree-tabs config.</li></ul></br>

> <p><b>Notice:</b></br><ul><li>If you have active the bookmark-bar or the menu-bar, you will need to edit the line 89 from <code>chrome/components/ogx_root-personal.css</code> to set the correct number to align the image.</li></ul></p>
</br>

## Preview

![imagen](https://user-images.githubusercontent.com/22057609/235237869-7e2aab34-e82f-4fd7-b559-a9e51305ca09.png)
