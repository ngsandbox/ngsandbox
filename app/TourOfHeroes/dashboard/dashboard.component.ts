import {Component, OnInit} from "@angular/core";
import {IPlayer} from "../model/IPlayer";
import {TeamService} from "../services/team.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    players: IPlayer[];

    constructor(private teamService: TeamService) {
    }

    ngOnInit() {
        this.teamService.getPlayers().then(players => {
            this.players = players;
        })
    }
}
