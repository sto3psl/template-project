/*
 * File: favicons.js
 *
 * Script to generate all necessary favicons for iOS and Android.
 */

var favicons = require('favicons')

var config = {
  files: {
    src: 'assets/images/favicon.png',                // Path(s) for file to produce the favicons. `string` or `object`
    dest: '../dist/',               // Path for writing the favicons to. `string`
    html: null,               // Path(s) for HTML file to write or append metadata. `string` or `array`
    iconsPath: null,          // Path for overriding default icons path. `string`
    androidManifest: null,    // Path for an existing android_chrome_manifest.json. `string`
    browserConfig: null,      // Path for an existing browserconfig.xml. `string`
    firefoxManifest: null,    // Path for an existing manifest.webapp. `string`
    yandexManifest: null      // Path for an existing yandex-browser-manifest.json. `string`
  },
  icons: {
    android: true,            // Create Android homescreen icon. `boolean`
    appleIcon: true,          // Create Apple touch icons. `boolean`
    appleStartup: false,       // Create Apple startup images. `boolean`
    coast: false,              // Create Opera Coast icon. `boolean`
    favicons: true,           // Create regular favicons. `boolean`
    firefox: false,            // Create Firefox OS icons. `boolean`
    opengraph: false,          // Create Facebook OpenGraph. `boolean`
    windows: false,            // Create Windows 8 tiles. `boolean`
    yandex: false              // Create Yandex browser icon. `boolean`
  },
  settings: {
    appName: 'project-template',            // Your application's name. `string`
    appDescription: null,     // Your application's description. `string`
    developer: 'Fabian Gündel',          // Your (or your developer's) name. `string`
    developerURL: null,       // Your (or your developer's) URL. `string`
    version: 1.0,             // Your application's version number. `number`
    background: null,         // Background colour for flattened icons. `string`
    index: null,              // Path for the initial page on the site. `string`
    url: null,                // URL for your website. `string`
    silhouette: false,        // Turn the logo into a white silhouette for Windows 8. `boolean`
    logging: true            // Print logs to console? `boolean`
  },
  favicon_generation: null      // Complete JSON overwrite for the favicon_generation object. `object`
}

favicons(config, function () {
  console.log('Done')
})
