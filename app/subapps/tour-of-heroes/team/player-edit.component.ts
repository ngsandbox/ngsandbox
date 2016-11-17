import {Component, OnDestroy} from "@angular/core";
import {TeamService} from "../services/team.service";
import {PlayerNewComponent} from "./player-new.component";
import {SbRouterService} from "../../../nav/sb-router.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'player-edit',
    templateUrl: 'player-edit.component.html',
    providers: [TeamService]
})
export class PlayerEditComponent extends PlayerNewComponent implements OnDestroy {

    private id: any;

    constructor(private activeRoute: ActivatedRoute,
                navService: SbRouterService,
                teamService: TeamService) {
        super(navService, teamService)
    }

    ngOnInit() {
        this.getNavService.subscribeParams(this.activeRoute, (param: any) => this.getPlayer(param['id']));
    }

    ngOnDestroy() {
        this.getNavService.unSubscribeParams();
    }

    private getPlayer(id: any) {
        if (id) {
            this.getTeamService.getPlayer(id).then(player => {
                this.player = player;
            });
        }
    }

    removePlayer() {
        this.disabled = true;
        this.getTeamService.removePlayer(this.player._id).then(r=> this.getNavService.gotoTeam())
            .catch((err: any) => this.disabled = false);
    }
}
