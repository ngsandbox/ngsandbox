import { Component } from "@angular/core";
import { TeamService } from "../services/team.service";
export var DashboardComponent = (function () {
    function DashboardComponent(teamService) {
        this.teamService = teamService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getPlayers().then(function (players) {
            _this.players = players;
        });
    };
    DashboardComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-dashboard',
                    templateUrl: 'dashboard.component.html'
                },] },
    ];
    /** @nocollapse */
    DashboardComponent.ctorParameters = [
        { type: TeamService, },
    ];
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map