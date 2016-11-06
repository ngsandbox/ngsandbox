var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from "@angular/core";
import { TeamProvider } from "./team-provider.service";
export var TeamFirebaseProvider = (function (_super) {
    __extends(TeamFirebaseProvider, _super);
    function TeamFirebaseProvider() {
        _super.call(this);
        this.dbRef = firebase.database().ref();
        this.playersRef = firebase.database().ref("players");
        this.childPlayersRef = this.dbRef.child('players');
    }
    TeamFirebaseProvider.prototype.getPlayers = function () {
        var _this = this;
        return this.childPlayersRef.once('value').then(function (snap) {
            var res = [];
            var vals = snap.val();
            Object.keys(vals).forEach(function (key) {
                res.push(_this.parseFBPlayer(key, vals[key]));
            });
            return res;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TeamFirebaseProvider.prototype.savePlayer = function (player) {
        var _this = this;
        var playerRef;
        if (!player._id) {
            playerRef = this.childPlayersRef.push().set(player);
        }
        else {
            var updates = {};
            updates[player._id] = player;
            playerRef = this.childPlayersRef.update(updates);
        }
        return playerRef.catch(function (err) { return _this.handleError(err); });
    };
    TeamFirebaseProvider.prototype.removePlayer = function (id) {
        // return this.playersRef.child(id).once('value').then((snap: any) => {
        //     console.log("Player was removed", id, snap);
        //     snap.remove();
        // }).catch((err: any) => this.handleError(err));
        var _this = this;
        var updates = {};
        updates[id] = null;
        return this.playersRef.update(updates).then(function (r) {
            console.log("Player was removed", id, r);
        }).catch(function (err) { return _this.handleError(err); });
        // return this.childPlayersRef.child(id).remove().then((r: any) => {
        //     console.log("Player was removed", id);
        // }).catch((err: any) => this.handleError(err));
    };
    TeamFirebaseProvider.prototype.getPlayer = function (id) {
        var _this = this;
        return this.childPlayersRef.child(id).once('value').then(function (snap) {
            var res = snap.val();
            res._id = id;
            return res;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TeamFirebaseProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeamFirebaseProvider.prototype.parseFBPlayer = function (key, val) {
        var player = val;
        player._id = key;
        return player;
    };
    TeamFirebaseProvider.prototype.ngOnDestroy = function () {
    };
    TeamFirebaseProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TeamFirebaseProvider.ctorParameters = [];
    return TeamFirebaseProvider;
}(TeamProvider));
//# sourceMappingURL=team-firebase-provider.service.js.map