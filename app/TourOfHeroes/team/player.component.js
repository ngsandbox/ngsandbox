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
var router_1 = require("@angular/router");
var team_service_1 = require("../services/team.service");
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(router, activeRoute, teamService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.teamService = teamService;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activeRoute.params.subscribe(function (param) { return _this.getPlayer(param['id']); });
    };
    PlayerDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PlayerDetailComponent.prototype.getPlayer = function (id) {
        var _this = this;
        if (id) {
            this.teamService.getPlayer(id).then(function (player) { return _this.player = player; });
        }
    };
    PlayerDetailComponent.prototype.removePlayer = function () {
        var _this = this;
        this.teamService.removePlayer(this.player._id).then(function (r) { return _this.router.navigate(['/team']); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerDetailComponent.prototype, "player", void 0);
    PlayerDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player-detail',
            templateUrl: 'player.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, team_service_1.TeamService])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player.component.js.map