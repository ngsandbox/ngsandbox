import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {APP_ROUTING} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import {TourOfHeroesModule} from "./tour-of-heroes/tour-of-heroes.module";
import {GridMemoryComponent} from "./grid-memory/grid-memory.component";
import {MySpinner} from "./spinner/my-spinner.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        MySpinner,
        GridMemoryComponent],
    imports: [
        HttpModule,
        BrowserModule,
        TourOfHeroesModule,
        APP_ROUTING
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}


