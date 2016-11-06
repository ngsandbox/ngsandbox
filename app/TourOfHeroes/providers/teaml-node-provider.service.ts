/**
 * Created by Vasilenko on 05-Nov-16.
 */
import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";
import {TeamProvider} from "./team-provider.service";
import {IPlayer} from "../model/IPlayer";

@Injectable()
export class TeamNodeProvider extends TeamProvider {

    localNodejsUrl: string = '/api/player';

    constructor(private http: Http) {
        super();
    }

    getPlayers(): Promise<IPlayer[]> {
        let players = this.http.get(this.localNodejsUrl).toPromise().then(response => response.json().data)
            .catch(this.handleError);
        return players;
    }

    savePlayer(player: IPlayer): Promise<Response> {
        let pId = player._id ? player._id.toString() : "";
        return this.http.put(this.localNodejsUrl + "/" + pId, player).toPromise().catch(this.handleError);
    }

    removePlayer(id: any): Promise<Response> {
        return this.http.delete(this.localNodejsUrl + '/' + id).toPromise().catch(this.handleError);
    }

    getPlayer(id: any): Promise<IPlayer> {
        let player = this.http.get(this.localNodejsUrl + '/' + id)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
        return player;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    ngOnDestroy(){

    }
}