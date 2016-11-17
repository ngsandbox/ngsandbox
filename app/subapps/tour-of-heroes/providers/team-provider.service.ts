import {IPlayer} from "../model/IPlayer";
import {Response} from "@angular/http";
import any = jasmine.any;
import {OnDestroy} from "@angular/core";

export abstract class TeamProvider implements OnDestroy {

    abstract getPlayers(): Promise<IPlayer[]>;

    abstract savePlayer(player: IPlayer): Promise<Response>;

    abstract removePlayer(id: any): Promise<Response> ;

    abstract getPlayer(id: any): Promise<IPlayer> ;

    abstract ngOnDestroy(): void;
}