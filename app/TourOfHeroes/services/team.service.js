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
require("rxjs/add/operator/toPromise");
var team_provider_service_1 = require("../providers/team-provider.service");
var TeamService = (function () {
    function TeamService(teamProvider) {
        this.teamProvider = teamProvider;
    }
    TeamService.prototype.getPlayers = function () {
        return this.teamProvider.getPlayers() || [];
    };
    TeamService.prototype.savePlayer = function (player) {
        return this.teamProvider.savePlayer(player);
    };
    TeamService.prototype.removePlayer = function (id) {
        return this.teamProvider.removePlayer(id);
    };
    TeamService.prototype.getPlayer = function (id) {
        return this.teamProvider.getPlayer(id);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [team_provider_service_1.TeamProvider])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map