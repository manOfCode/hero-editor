/*
Because the QuickStart application runs directly in the browser, main.ts imports the platformBrowserDynamic function from @angular/platform-browser-dynamic, not @angular/core. On a mobile device, you might load a module with Apache Cordova or NativeScript, using a bootstrap function that's specific to that platform.
*/
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map