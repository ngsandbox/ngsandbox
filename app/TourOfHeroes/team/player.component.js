import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TeamService } from "../services/team.service";
export var PlayerDetailComponent = (function () {
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
    PlayerDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'player-detail',
                    templateUrl: 'player.component.html',
                    providers: [TeamService]
                },] },
    ];
    /** @nocollapse */
    PlayerDetailComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
        { type: TeamService, },
    ];
    PlayerDetailComponent.propDecorators = {
        'player': [{ type: Input },],
    };
    return PlayerDetailComponent;
}());
//# sourceMappingURL=player.component.js.map