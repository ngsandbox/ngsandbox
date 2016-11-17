import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TOUR_OF_HEROES_ROUTING} from "./tour-of-heroes.routing";
import {TeamComponent} from "./team.component";
import {PlayerDetailComponent} from "./team/player.component";
import {PlayerEditComponent} from "./team/player-edit.component";
import {PlayerNewComponent} from "./team/player-new.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TourOfHeroesComponent} from "./tour-of-heroes.component";

@NgModule({
    declarations: [
        TeamComponent,
        PlayerDetailComponent,
        DashboardComponent,
        PlayerEditComponent,
        PlayerNewComponent,
        TourOfHeroesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TOUR_OF_HEROES_ROUTING
    ],
    exports: [],
    providers: [],
})
export class TourOfHeroesModule {
}
