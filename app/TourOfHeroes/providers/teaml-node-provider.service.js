"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Vasilenko on 05-Nov-16.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var team_provider_service_1 = require("./team-provider.service");
var TeamNodeProvider = (function (_super) {
    __extends(TeamNodeProvider, _super);
    function TeamNodeProvider(http) {
        _super.call(this);
        this.http = http;
        this.localNodejsUrl = '/api/player';
    }
    TeamNodeProvider.prototype.getPlayers = function () {
        var players = this.http.get(this.localNodejsUrl).toPromise().then(function (response) { return response.json().data; })
            .catch(this.handleError);
        return players;
    };
    TeamNodeProvider.prototype.savePlayer = function (player) {
        var pId = player._id ? player._id.toString() : "";
        return this.http.put(this.localNodejsUrl + "/" + pId, player).toPromise().catch(this.handleError);
    };
    TeamNodeProvider.prototype.removePlayer = function (id) {
        return this.http.delete(this.localNodejsUrl + '/' + id).toPromise().catch(this.handleError);
    };
    TeamNodeProvider.prototype.getPlayer = function (id) {
        var player = this.http.get(this.localNodejsUrl + '/' + id)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        return player;
    };
    TeamNodeProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeamNodeProvider.prototype.ngOnDestroy = function () {
    };
    TeamNodeProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamNodeProvider);
    return TeamNodeProvider;
}(team_provider_service_1.TeamProvider));
exports.TeamNodeProvider = TeamNodeProvider;
//# sourceMappingURL=teaml-node-provider.service.js.map