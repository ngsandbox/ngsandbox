"use strict";
var mongoose = require("mongoose");
var IPlayer_1 = require("../../app/TourOfHeroes/model/IPlayer");
var playerSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    birthday: Date,
    gender: {
        type: String,
        enum: IPlayer_1.Genders,
        default: IPlayer_1.Genders[0]
    },
    email: String
});
var Player = mongoose.model("Player", playerSchema);
module.exports = Player;
//# sourceMappingURL=player-schema.js.map