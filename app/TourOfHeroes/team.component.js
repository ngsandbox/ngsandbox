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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var team_service_1 = require('./services/team.service');
var TeamComponent = (function () {
    function TeamComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getPlayers().then(function (players) { return _this.team = players; });
    };
    TeamComponent.prototype.addPlayer = function () {
        this.router.navigate(['/team/player/new']);
    };
    TeamComponent.prototype.gotoDetail = function (player) {
        this.router.navigate(['/team/player', player._id]);
    };
    TeamComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-team',
            templateUrl: 'team.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map