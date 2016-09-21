/*
Because the QuickStart application runs directly in the browser, main.ts imports the platformBrowserDynamic function from @angular/platform-browser-dynamic, not @angular/core. On a mobile device, you might load a module with Apache Cordova or NativeScript, using a bootstrap function that's specific to that platform.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);