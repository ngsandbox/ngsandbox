"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var team_service_1 = require("../services/team.service");
var player_new_component_1 = require("./player-new.component");
var sb_router_service_1 = require("../../nav/sb-router.service");
var router_1 = require("@angular/router");
var PlayerEditComponent = (function (_super) {
    __extends(PlayerEditComponent, _super);
    function PlayerEditComponent(activeRoute, navService, teamService) {
        _super.call(this, navService, teamService);
        this.activeRoute = activeRoute;
    }
    PlayerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNavService.subscribeParams(this.activeRoute, function (param) { return _this.getPlayer(param['id']); });
    };
    PlayerEditComponent.prototype.ngOnDestroy = function () {
        this.getNavService.unSubscribeParams();
    };
    PlayerEditComponent.prototype.getPlayer = function (id) {
        var _this = this;
        if (id) {
            this.getTeamService.getPlayer(id).then(function (player) {
                _this.player = player;
                //this.birthday = moment(this.player.birthday);
            });
        }
    };
    PlayerEditComponent.prototype.removePlayer = function () {
        var _this = this;
        this.getTeamService.removePlayer(this.player._id).then(function (r) { return _this.getNavService.gotoTeam(); });
    };
    PlayerEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player-edit',
            templateUrl: 'player-edit.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, sb_router_service_1.SbRouterService, team_service_1.TeamService])
    ], PlayerEditComponent);
    return PlayerEditComponent;
}(player_new_component_1.PlayerNewComponent));
exports.PlayerEditComponent = PlayerEditComponent;
//# sourceMappingURL=player-edit.component.js.map