"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tour_of_heroes_routing_1 = require("./tour-of-heroes.routing");
var team_component_1 = require("./team.component");
var player_component_1 = require("./team/player.component");
var player_edit_component_1 = require("./team/player-edit.component");
var player_new_component_1 = require("./team/player-new.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var tour_of_heroes_component_1 = require("./tour-of-heroes.component");
var TourOfHeroesModule = (function () {
    function TourOfHeroesModule() {
    }
    TourOfHeroesModule = __decorate([
        core_1.NgModule({
            declarations: [
                team_component_1.TeamComponent,
                player_component_1.PlayerDetailComponent,
                dashboard_component_1.DashboardComponent,
                player_edit_component_1.PlayerEditComponent,
                player_new_component_1.PlayerNewComponent,
                tour_of_heroes_component_1.TourOfHeroesComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                tour_of_heroes_routing_1.TOUR_OF_HEROES_ROUTING
            ],
            exports: [],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], TourOfHeroesModule);
    return TourOfHeroesModule;
}());
exports.TourOfHeroesModule = TourOfHeroesModule;
//# sourceMappingURL=tour-of-heroes.module.js.map