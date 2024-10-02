// ** Theme Related Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// beacon = false
user_pref("beacon.enabled", false);
// about config warning = false
user_pref("browser.aboutConfig.showWarning", false); 
// strictcontent blocking
user_pref("browser.contentblocking.category", "strict");
// download dont open panel in toolbar
user_pref("browser.download.alwaysOpenPanel", false);
// downloads button
user_pref("browser.engagement.downloads-button.has-used", true);
// tab manager = false
user_pref("browser.tabs.tabmanager.enabled", false);
// safebrowsing = false
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.malware.enabled", false);
// browser search
user_pref("browser.search.hiddenOneOffs", "Google,Yahoo,Bing,Amazon.com,Twitter");
// browser search suggest = false
user_pref("browser.search.suggest.enabled", true);
// search bar in toolbar
user_pref("browser.search.widget.inNavBar", true);
// browser send pings = false
user_pref("browser.send_pings", false);
// homepage blank
user_pref("browser.startup.homepage", "about:blank");
// startup page
user_pref("browser.startup.page", "3");
// startup homepage = blank
user_pref("browser.startup.homepage", "about:blank");
// tabs firefox view = false
user_pref("browser.tabs.firefox-view", false);
// tabmanager = false
user_pref("browser.tabs.tabmanager.enabled", false);
// newtab = false
user_pref("browser.newtabpage.enabled", false);
// activity stream
user_pref("browser.newtabpage.activity-stream.showSeach", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// bookmarks toolbar visibility = never
user_pref("browser.toolbars.bookmarks.visibility", "never");
// browser ui density
user_pref("browser.uidensity", "1");
// urlbar speculativeconnect = false
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// urlbar bookmarks = false
user_pref("browser.urlbar.shortcuts.bookmarks", false);
// urlbar history = false
user_pref("browser.urlbar.shortcuts.history", false);
// urlbar shortcuts tabs = false
user_pref("browser.urlbar.shortcuts.tabs", false);
// urlbar show search suggestions first = false
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
// urlbar suggest bookmarks = false
user_pref("browser.urlbar.suggest.bookmark", false);
// urlbar suggest engines = false
user_pref("browser.urlbar.suggest.engines", false);
// urlbar suggest history = false
user_pref("browser.urlbar.suggest.history", false);
// urlbar suggest open page = false
user_pref("browser.urlbar.suggest.openpage", false);
// urlbar suggest searches = false
user_pref("browser.urlbar.suggest.searches", false);
// urlbar suggest topsites = false
user_pref("browser.urlbar.suggest.topsites", false);
// firefox healthreport upload = false
user_pref("datareporting.healthreport.uploadEnabled", false);
// dont let sites disable copy and paste
user_pref("dom.event.clipboardevents.enabled", false);
// https mode = true
user_pref("dom.security.https_only_mode", true);
// experiments = false
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
// remove unifiedextensions
user_pref("extensions.unifiedExtensions.enabled", false);
// pocket show on home screen = false
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.onSaveRecs", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// creditcards autofill = false
user_pref("extensions.formautofill.creditCards.available", false);
// smoothscroll = false
user_pref("general.smoothScroll", false);
// geo = false
user_pref("geo.enabled", false);
// general
user_pref("gfx.webrender.all", true);
user_pref("layout.css.devPixelsPerPx", "1");
// media autoplay = 5
user_pref("media.autoplay.default", "5");
user_pref("media.navigator.enabled", false);
user_pref("media.video_stats.enabled", false);
// show punycode in the urlbar
user_pref("network.IDN_show_punycode", true);
// network
user_pref("network.allow-experiments", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.referer.XOriginPolicy", "2");
user_pref("network.http.referer.XOriginTrimmingPolicy", "2");
user_pref("network.http.referer.trimmingPolicy", "1");
user_pref("network.prefetch-next", false);
// magnet links
user_pref("network.protocol-handler.expose.magnet", false);
// default shortcuts
user_pref("permissions.default.shortcuts", "2");
// privacy dont track = true
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", "1");
user_pref("privacy.firstparty.isolate", true);
user_pref("signon.rememberSignons", false);
// disable firefox vpn ad
user_pref("browser.vpn_promo.enabled", false);
// custom google search
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
// freebsd use sndio audio instead of pulse audio
user_pref("media.cubeb.backend", "oss");
// disable privacy-preserving attribution 
user_pref("dom.private-attribution.submission.enabled", false);
// desktop notifications
user_pref("alerts.useSystemBackend", true);
// sidebar - off
user_pref("sidebar.revamp", false);
// sidebar visibility
user_pref("sidebar.visibility", "hide-sidebar");
// sidebar tools
user_pref("sidebar.main.tools", "history");
// vertical tabs - off
user_pref("sidebar.verticalTabs", false);
