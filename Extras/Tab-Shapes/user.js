/* Source file made available under Mozilla Public License v. 2.0 See the main repository for updates as well as full license text. 
   https://github.com/Godiesc/opera-gx */

/* Default rules */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true); 
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

/* Make it all false if you don't want other forms of tabs than default */
user_pref("userChrome.tab.bottom_rounded_corner", true);

/* Make it True (only one) the rule with the form of the tab you want */
user_pref("userChrome.tab.bottom_rounded_corner.wave",          false);
user_pref("userChrome.tab.bottom_rounded_corner.australis",     false);
user_pref("userChrome.tab.bottom_rounded_corner.chrome",        true);
user_pref("userChrome.tab.bottom_rounded_corner.chrome_legacy", false);
user_pref("userChrome.tab.bottom_rounded_corner.edge",          false);
