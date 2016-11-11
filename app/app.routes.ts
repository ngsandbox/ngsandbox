import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GridMemoryComponent } from './grid-memory/grid-memory.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'team', loadChildren: "app/tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule" },
    { path: 'memory-grid', component: GridMemoryComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
