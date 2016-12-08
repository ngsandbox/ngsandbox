import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GridMemoryComponent } from './subapps/grid-memory/grid-memory.component';
import {Puzzle2048Component} from "./subapps/2048/puzzle-2048.component";
import {RecognizerComponent} from "./subapps/recognizer/recognizer.component";


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'team', loadChildren: "app/subapps//tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule" },
    { path: 'memory-grid', component: GridMemoryComponent },
    { path: '2048', component: Puzzle2048Component },
    { path: 'recognizer', component: RecognizerComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
