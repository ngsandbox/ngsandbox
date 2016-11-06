import {Component} from '@angular/core';
import {TeamService} from './TourOfHeroes/services/team.service'
import {TeamFirebaseProvider} from "./TourOfHeroes/providers/team-firebase-provider.service";
import {TeamProvider} from "./TourOfHeroes/providers/team-provider.service";
import {SbRouterService} from "./nav/sb-router.service";

@Component({
    selector: 'my-app',
    template: `
  <my-nav></my-nav>
	<div class="container">
    <router-outlet></router-outlet>
	</div>
  `,
    providers: [{provide: TeamProvider, useClass: TeamFirebaseProvider}, TeamService, SbRouterService]
})
export class AppComponent {
    title = '';
}