"use strict";
var router_1 = require('@angular/router');
var team_component_1 = require('./team.component');
var player_component_1 = require('./team/player.component');
var player_edit_component_1 = require('./team/player-edit.component');
var player_new_component_1 = require('./team/player-new.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var tour_of_heroes_component_1 = require('./tour-of-heroes.component');
var TOUR_OF_HEROES_ROUTES = [
    {
        path: '', component: tour_of_heroes_component_1.TourOfHeroesComponent, children: [
            { path: 'team', component: team_component_1.TeamComponent, pathMatch: 'full' },
            { path: 'team/dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'team/player/new', component: player_new_component_1.PlayerNewComponent },
            { path: 'team/player/detail/:id', component: player_component_1.PlayerDetailComponent },
            { path: 'team/player/edit/:id', component: player_edit_component_1.PlayerEditComponent },
        ]
    }
];
exports.TOUR_OF_HEROES_ROUTING = router_1.RouterModule.forChild(TOUR_OF_HEROES_ROUTES);
//# sourceMappingURL=tour-of-heroes.routing.js.map