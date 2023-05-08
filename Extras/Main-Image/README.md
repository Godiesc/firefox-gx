# How to apply.
<p>This configuration will simulate an image behind all the browser.</p>
<p><b>Fast step to apply the config.</b></p>

- Add the files <code>ogx_main-image.css</code> and <code>ogx_root-personal.css</code> into the <code>chrome/components</code> folder.</br></br>

> <p><b>Notice:</b></br><ul><li>You are forced to use an image with the same width and at least 150px bigger height of the resolution of your monitor.</li><li>The file <code>ogx_root-personal.css</code> will set the default values of the theme, if you changed some rule in the file you will need to change again in this new file. <li>The wallpaper will be the named <b>>main-image-dark.png<</b> and <b>>main-image-light.png<</b> in <code>chrome/images/newtab</code>, if you want to change them you will need to replace your new images with those names.</li><li>If you have active the bookmark toolbar or the menu-bar you will need to edit the line 56 from <code>ogx_root-personal.css</code> to set the correct number to align the image.</li><li>If you use it with <b>left-sidebar</b> config you will need to uncomment (deleting the line 67 and line 74) the last code block into the <b>ogx_main-image.css</b> file.</li></ul></p>
</br>

<p><b>Manual steps to apply the config.</b></p>
<ol>
  <li>Add the file <code>ogx_main-image.css</code> into the <code>chrome/components</code> folder.</li>
  <li>Edit the line <code>31</code> into the <code>ogx_root-personal.css</code> file with the code: <code>--wallpaper-size: auto auto ;</code>.</li>
  <li>Edit the line <code>21</code> into the <code>ogx_root-personal.css</code> file with the code: <code>--brightness-wallpaper: brightness(51%);</code>.</li>
  <li> Edit the line <code>56</code> into the <code>ogx_root-personal.css</code> file, uncomment it and write the right number, 
  there is a description on the right side of the rule, That's all. 💙</li>
</ol>

## Preview

![imagen](https://user-images.githubusercontent.com/22057609/235237869-7e2aab34-e82f-4fd7-b559-a9e51305ca09.png)
