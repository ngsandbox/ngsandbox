import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {IPlayer} from './model/IPlayer';
import {TeamService} from './services/team.service'


@Component({
    moduleId: module.id,
    selector: 'my-team',
    templateUrl: 'team.component.html'
})
export class TeamComponent implements OnInit {

    team: IPlayer[];

    constructor(private router: Router,
                private teamService: TeamService) {
    }

    ngOnInit() {
        this.teamService.getPlayers().then(players =>this.team = players);
    }

    addPlayer() {
        this.router.navigate(['/team/player/new']);
    }

    gotoDetail(player: IPlayer) {
        this.router.navigate(['/team/player', player._id]);
    }
}