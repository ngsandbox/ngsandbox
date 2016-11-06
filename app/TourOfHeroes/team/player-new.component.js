import { Component, Input } from "@angular/core";
import { TeamService } from "../services/team.service";
import { Genders } from "../model/IPlayer";
import { SbRouterService } from "../../nav/sb-router.service";
export var PlayerNewComponent = (function () {
    function PlayerNewComponent(navService, teamService) {
        this.navService = navService;
        this.teamService = teamService;
        //birthday: moment.Moment;
        this.genders = Genders;
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
    PlayerNewComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'player-new',
                    templateUrl: 'player-edit.component.html',
                    providers: [TeamService]
                },] },
    ];
    /** @nocollapse */
    PlayerNewComponent.ctorParameters = [
        { type: SbRouterService, },
        { type: TeamService, },
    ];
    PlayerNewComponent.propDecorators = {
        'player': [{ type: Input },],
    };
    return PlayerNewComponent;
}());
//# sourceMappingURL=player-new.component.js.map