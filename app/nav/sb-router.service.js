import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
export var SbRouterService = (function () {
    function SbRouterService(router) {
        this.router = router;
    }
    SbRouterService.prototype.gotoTeam = function () {
        this.router.navigate(['/team']);
    };
    SbRouterService.prototype.subscribeParams = function (activeRoute, next) {
        this.subscription = activeRoute.params.subscribe(next, function (error) { return console.error("Error retreiving route parameters", error); });
    };
    SbRouterService.prototype.unSubscribeParams = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    SbRouterService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SbRouterService.ctorParameters = [
        { type: Router, },
    ];
    return SbRouterService;
}());
//# sourceMappingURL=sb-router.service.js.map