import {Component} from '@angular/core';
import {TeamService} from './subapps/tour-of-heroes/services/team.service'
import {TeamFirebaseProvider} from "./subapps/tour-of-heroes/providers/team-firebase-provider.service";
import {TeamProvider} from "./subapps/tour-of-heroes/providers/team-provider.service";
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