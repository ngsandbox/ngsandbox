import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GridMemoryComponent } from './GridMemory/grid-memory.component';
var APP_ROUTES = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'team', loadChildren: "app/TourOfHeroes/tour-of-heroes.module#TourOfHeroesModule" },
    { path: 'memory-grid', component: GridMemoryComponent }
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map