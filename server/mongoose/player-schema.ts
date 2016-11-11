import * as mongoose from "mongoose";
import { IPlayer, Genders } from "../../app/tour-of-heroes/model/IPlayer"

interface IPlayerModel extends IPlayer, mongoose.Document { }

var playerSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    birthday: Date,
    gender: {
        type: String,
        enum: Genders,
        default: Genders[0]
    },
    email: String
});

var Player = mongoose.model<IPlayerModel>("Player", playerSchema);

export = Player;




