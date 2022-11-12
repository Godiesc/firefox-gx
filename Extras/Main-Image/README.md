# How to apply.
<p>This configuration will simulate an image behind all the browser.</p>
<ul><b><< Fast step to apply the config. >></b>
<li>Add the files <code>ogx_main-image.css</code> and <code>ogx_root-personal.css</code> into the <code>chrome/components</code> folder.</li></ul></br>

<p><i>PD: The file <code>ogx_root-personal.css</code> will set the default values of the theme, if you changed some rule in the file you will need to change again in this new file. The wallpaper will be the named <b>>>main-image-dark.png<<</b> and <b>>>main-image-light.png<<</b> in <code>chrome</code> >> <code>images</code> >> <code>newtab</code>, if you want to change them you will need to replace your new images with those names.</br>You will need to edit the line 51 to set the correct number to align the image if you have active the bookmark toolbar or the menu-bar.</i></p>

<p>If you use left-sidebar too, you need to uncomment the code block(lines 66-71) from the <code>ogx_main-image.css</code> file.</p>

<ol><p><b><< Manual steps to apply the config. >></b></p>
  <li>Add the file <code>ogx_main-image.css</code> into the <code>chrome/components</code> folder.</li>
  <li>Edit the line <code>27</code> into the <code>ogx_root-personal.css</code> file with the code: <code>--wallpaper-size: auto auto ;</code>.</li>
  <li>Edit the line <code>20</code> into the <code>ogx_root-personal.css</code> file with the code: <code>--brightness-wallpaper: brightness(51%);</code>.</li>
  <li> Edit the line <code>51</code> into the <code>ogx_root-personal.css</code> file, uncomment it and write the right number, 
  there is a description on the right side of the rule, That's all. 💙</li>
</ol>

<p><i>PD: Make sure you have active a compatible theme, with some image themes the selected tab will display a black line.</i></p>

![imagen](https://user-images.githubusercontent.com/22057609/201480011-086347f8-db3a-4c31-993c-b040d679e393.png)
