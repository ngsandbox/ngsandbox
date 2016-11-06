import { Component } from '@angular/core';
import { TeamService } from './TourOfHeroes/services/team.service';
import { TeamFirebaseProvider } from "./TourOfHeroes/providers/team-firebase-provider.service";
import { TeamProvider } from "./TourOfHeroes/providers/team-provider.service";
import { SbRouterService } from "./nav/sb-router.service";
export var AppComponent = (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "\n  <my-nav></my-nav>\n\t<div class=\"container\">\n    <router-outlet></router-outlet>\n\t</div>\n  ",
                    providers: [{ provide: TeamProvider, useClass: TeamFirebaseProvider }, TeamService, SbRouterService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map