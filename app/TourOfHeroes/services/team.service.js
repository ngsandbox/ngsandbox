import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { TeamProvider } from "../providers/team-provider.service";
export var TeamService = (function () {
    function TeamService(teamProvider) {
        this.teamProvider = teamProvider;
    }
    TeamService.prototype.getPlayers = function () {
        return this.teamProvider.getPlayers();
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
    TeamService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TeamService.ctorParameters = [
        { type: TeamProvider, },
    ];
    return TeamService;
}());
//# sourceMappingURL=team.service.js.map