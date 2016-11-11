import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team.component';
import { PlayerDetailComponent } from './team/player.component';
import { PlayerEditComponent } from './team/player-edit.component';
import { PlayerNewComponent } from './team/player-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

const TOUR_OF_HEROES_ROUTES: Routes = [
    {
        path: '', component: TourOfHeroesComponent, children: [
            { path: 'team', component: TeamComponent, pathMatch: 'full' },
            { path: 'team/dashboard', component: DashboardComponent },
            { path: 'team/player/new', component: PlayerNewComponent },
            { path: 'team/player/detail/:id', component: PlayerDetailComponent },
            { path: 'team/player/edit/:id', component: PlayerEditComponent },
        ]
    }
];

export const TOUR_OF_HEROES_ROUTING = RouterModule.forChild(TOUR_OF_HEROES_ROUTES)