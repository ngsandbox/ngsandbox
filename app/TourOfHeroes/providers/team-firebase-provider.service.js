/**
 * Created by Vasilenko on 05-Nov-16.
 */
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
var core_1 = require("@angular/core");
var team_provider_service_1 = require("./team-provider.service");
var TeamFirebaseProvider = (function (_super) {
    __extends(TeamFirebaseProvider, _super);
    function TeamFirebaseProvider() {
        _super.call(this);
        this.config = {
            apiKey: "AIzaSyAXkSTZ5OUd9xUBvpu9Au232rsFYEd2y_E",
            authDomain: "devproj-dbd21.firebaseapp.com",
            databaseURL: "https://devproj-dbd21.firebaseio.com",
            storageBucket: "devproj-dbd21.appspot.com",
            messagingSenderId: "470528161968"
        };
        this.dbRef = firebase.database().ref();
        this.playersRef = firebase.database().ref("players");
        this.childPlayersRef = this.dbRef.child('players');
        console.log("Firebase initialization", firebase.apps);
        if (!firebase.apps || !firebase.apps.length) {
            firebase.initializeApp(this.config);
        }
    }
    TeamFirebaseProvider.prototype.getPlayers = function () {
        var _this = this;
        return this.childPlayersRef.once('value').then(function (snap) {
            var res = [];
            var vals = snap.val();
            if (vals) {
                Object.keys(vals).forEach(function (key) {
                    res.push(_this.parseFBPlayer(key, vals[key]));
                });
            }
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
        var ref = this.childPlayersRef;
        return ref.child(id).once("value", function (snapshot) {
            var updates = {};
            updates[snapshot.key] = null;
            ref.update(updates).then(function (r) { return console.log("Player removed with id: ", r); });
        });
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
        player.birthday = val.birthday || Date.now();
        return player;
    };
    TeamFirebaseProvider.prototype.ngOnDestroy = function () {
    };
    TeamFirebaseProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TeamFirebaseProvider);
    return TeamFirebaseProvider;
}(team_provider_service_1.TeamProvider));
exports.TeamFirebaseProvider = TeamFirebaseProvider;
//# sourceMappingURL=team-firebase-provider.service.js.map