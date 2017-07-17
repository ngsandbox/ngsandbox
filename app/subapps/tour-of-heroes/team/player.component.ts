import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {TeamService} from "../services/team.service";
import {IPlayer} from "../model/IPlayer";


@Component({
    moduleId: module.id,
    selector: 'player-detail',
    templateUrl: 'player.component.html',
    providers: [TeamService]
})
export class PlayerDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private id: any;

    constructor(private router: Router,
                private activeRoute: ActivatedRoute,
                private teamService: TeamService) {
    }

    @Input()
    player: IPlayer;

    ngOnInit() {
        this.subscription = this.activeRoute.params.subscribe((param) => this.getPlayer(param['id']));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private getPlayer(id: any) {
        if (id) {
            this.teamService.getPlayer(id).then(player => this.player = player);
        }
    }

    removePlayer() {
        this.teamService.removePlayer(this.player._id).then(r=> this.router.navigate(['/team']));
    }
}
