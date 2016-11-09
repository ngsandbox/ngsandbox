"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var grid_memory_component_1 = require('./GridMemory/grid-memory.component');
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'team', loadChildren: "app/TourOfHeroes/tour-of-heroes.module#TourOfHeroesModule" },
    { path: 'memory-grid', component: grid_memory_component_1.GridMemoryComponent }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map