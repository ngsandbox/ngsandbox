var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component } from "@angular/core";
import { TeamService } from "../services/team.service";
import { PlayerNewComponent } from "./player-new.component";
import { SbRouterService } from "../../nav/sb-router.service";
import { ActivatedRoute } from "@angular/router";
export var PlayerEditComponent = (function (_super) {
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
    PlayerEditComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'player-edit',
                    templateUrl: 'player-edit.component.html',
                    providers: [TeamService]
                },] },
    ];
    /** @nocollapse */
    PlayerEditComponent.ctorParameters = [
        { type: ActivatedRoute, },
        { type: SbRouterService, },
        { type: TeamService, },
    ];
    return PlayerEditComponent;
}(PlayerNewComponent));
//# sourceMappingURL=player-edit.component.js.map