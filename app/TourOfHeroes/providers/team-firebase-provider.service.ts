/**
 * Created by Vasilenko on 05-Nov-16.
 */
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {TeamProvider} from "./team-provider.service";
import {IPlayer} from "../model/IPlayer";

declare var firebase: any;

@Injectable()
export class TeamFirebaseProvider extends TeamProvider {

    dbRef: any = firebase.database().ref();
    playersRef: any = firebase.database().ref("players");
    childPlayersRef: any = this.dbRef.child('players');

    constructor() {
        super();
    }

    getPlayers(): Promise<IPlayer[]> {
        return this.childPlayersRef.once('value').then((snap: any) => {
            let res: IPlayer[] = [];
            let vals: any = snap.val();
            Object.keys(vals).forEach((key: any) => {
                res.push(this.parseFBPlayer(key, vals[key]));
            });

            return res;
        }).catch((err: any) => this.handleError(err));
    }

    savePlayer(player: IPlayer): Promise<Response> {
        let playerRef: any;
        if (!player._id) {
            playerRef = this.childPlayersRef.push().set(player);
        } else {
            var updates = {};
            updates[player._id] = player;
            playerRef = this.childPlayersRef.update(updates);
        }

        return playerRef.catch((err: any) => this.handleError(err));
    }

    removePlayer(id: any): Promise<Response> {
        // return this.playersRef.child(id).once('value').then((snap: any) => {
        //     console.log("Player was removed", id, snap);
        //     snap.remove();
        // }).catch((err: any) => this.handleError(err));

        var updates = {};
        updates[id] = null;
        return this.playersRef.update(updates).then((r: any) => {
            console.log("Player was removed", id, r);
        }).catch((err: any) => this.handleError(err));


        // return this.childPlayersRef.child(id).remove().then((r: any) => {
        //     console.log("Player was removed", id);
        // }).catch((err: any) => this.handleError(err));
    }

    getPlayer(id: any): Promise<IPlayer> {
        return this.childPlayersRef.child(id).once('value').then((snap: any) => {
            let res: IPlayer = snap.val();
            res._id = id;
            return res;
        }).catch((err: any) => this.handleError(err));
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private parseFBPlayer(key: any, val: any): IPlayer {
        let player: IPlayer = val;
        player._id = key;
        return player;
    }

    ngOnDestroy() {

    }
}