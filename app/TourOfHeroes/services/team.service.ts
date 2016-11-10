import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {IPlayer} from "../model/IPlayer";
import {TeamProvider} from "../providers/team-provider.service";

@Injectable()
export class TeamService {

    constructor(private teamProvider: TeamProvider) {
    }

    getPlayers(): Promise<IPlayer[]> {
        return this.teamProvider.getPlayers();
    }

    savePlayer(player: IPlayer): Promise<Response> {
        return this.teamProvider.savePlayer(player);
    }

    removePlayer(id: any): Promise<Response> {
        return this.teamProvider.removePlayer(id);
    }

    getPlayer(id: any): Promise<IPlayer> {
        return this.teamProvider.getPlayer(id);
    }
}
