import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {APP_ROUTING} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import {TourOfHeroesModule} from "./subapps/tour-of-heroes/tour-of-heroes.module";
import {GridMemoryComponent} from "./subapps/grid-memory/grid-memory.component";
import {MySpinner} from "./spinner/my-spinner.component";
import {Puzzle2048Component} from "./subapps/2048/puzzle-2048.component";
import {TilesComponent} from "./subapps/2048/tiles.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        MySpinner,
        GridMemoryComponent,
        Puzzle2048Component,
        TilesComponent],
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


