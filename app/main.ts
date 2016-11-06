import {AppModule} from "./app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

var platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

