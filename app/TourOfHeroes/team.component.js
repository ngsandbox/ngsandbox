import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from './services/team.service';
export var TeamComponent = (function () {
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
    TeamComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-team',
                    templateUrl: 'team.component.html'
                },] },
    ];
    /** @nocollapse */
    TeamComponent.ctorParameters = [
        { type: Router, },
        { type: TeamService, },
    ];
    return TeamComponent;
}());
//# sourceMappingURL=team.component.js.map