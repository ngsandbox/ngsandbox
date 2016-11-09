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
var team_service_1 = require("../services/team.service");
var IPlayer_1 = require("../model/IPlayer");
var sb_router_service_1 = require("../../nav/sb-router.service");
var PlayerNewComponent = (function () {
    function PlayerNewComponent(navService, teamService) {
        this.navService = navService;
        this.teamService = teamService;
        //birthday: moment.Moment;
        this.genders = IPlayer_1.Genders;
    }
    Object.defineProperty(PlayerNewComponent.prototype, "getTeamService", {
        get: function () {
            return this.teamService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerNewComponent.prototype, "getNavService", {
        get: function () {
            return this.navService;
        },
        enumerable: true,
        configurable: true
    });
    PlayerNewComponent.prototype.ngOnInit = function () {
        this.player = { name: "", _id: null };
    };
    PlayerNewComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.teamService.savePlayer(this.player).then(function (r) { return _this.navService.gotoTeam(); });
    };
    PlayerNewComponent.prototype.removePlayer = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerNewComponent.prototype, "player", void 0);
    PlayerNewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player-new',
            templateUrl: 'player-edit.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [sb_router_service_1.SbRouterService, team_service_1.TeamService])
    ], PlayerNewComponent);
    return PlayerNewComponent;
}());
exports.PlayerNewComponent = PlayerNewComponent;
//# sourceMappingURL=player-new.component.js.map