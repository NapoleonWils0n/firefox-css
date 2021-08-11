// ** Theme Related Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// disable firefox sync
user_pref("identity.fxaccounts.enabled", false);

// disable geo location
user_pref("geo.enabled", false);

// disable referer
user_pref("network.http.sendRefererHeader", false);

// disable network prefetch
user_pref("network.prefetch-next", false);

// privacy.firstparty.isolate
user_pref("privacy.firstparty.isolate", true);

// privacy.resistFingerprinting
user_pref("privacy.resistFingerprinting", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);
