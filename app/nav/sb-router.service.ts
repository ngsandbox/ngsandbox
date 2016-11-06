import {Injectable} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Injectable()
export class SbRouterService {

    private subscription: Subscription;

    constructor(private router: Router) {
    }

    gotoTeam() {
        this.router.navigate(['/team']);
    }

    subscribeParams<T>(activeRoute: ActivatedRoute, next: (value: T) => void) {
        this.subscription = activeRoute.params.subscribe(next,
            (error: any)=> console.error("Error retreiving route parameters", error));
    }

    unSubscribeParams() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }


}