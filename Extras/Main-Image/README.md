# How to apply.
<p>This configuration will simulate an image behind all the browser.</p>

<ul><li>Create this preference in about:config page.</li>  
  <table><tr>
    <td width="320px">firefoxgx.main-image</td>
    <td width="50px">true</td></tr>
  </table>
<li>You are forced to use an image with the same width and at least 150px bigger height of the resolution of your monitor for a perfect align, you can resize the image used by default in <code>chrome\images\newtab</code> (main-image-dark.png, main-image-light.png) to your preferences.</li><li>Is compatible with one-line config, left-sidebar config and tree-tabs config.</li></ul></br>

> <p><b>Notice:</b></br><ul><li>If you have active the bookmark-bar or the menu-bar, you will need to edit the line 72 from <code>chrome/components/ogx_root-personal.css</code> to set the correct number to align the image.</li></ul></p>
</br>

## Preview

![imagen](https://user-images.githubusercontent.com/22057609/235237869-7e2aab34-e82f-4fd7-b559-a9e51305ca09.png)
