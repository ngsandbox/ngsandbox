import * as express from "express";
import * as Player from "./mongoose/player-schema";

export function regPlayersApi(app: express.Express) {

    /* Create or save */
    app.put('/api/player/:id?', function (req, res) {
        console.log("Received player: ", req.body, req.params.id);
        var newPlayer = new Player(req.body);
        if (req.params.id) {
            // Convert the Model instance to a simple object using Model's 'toObject' function
            // to prevent weirdness like infinite looping...
            var upsertData: any = newPlayer.toObject();

            // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
            delete upsertData._id;

            // Do the upsert, which works like this: If no Contact document exists with 
            // _id = contact.id, then create a new doc using upsertData.
            // Otherwise, update the existing doc with upsertData
            Player.update({ _id: req.params.id }, upsertData, { upsert: true },
                (err) => savePlayer(newPlayer, res, err));
        } else {
            newPlayer.save((err) => savePlayer(newPlayer, res, err));
        }
    });

    function savePlayer(player, res, err) {
        if (err) {
            console.log("Error on save player: ", err, player);
            res.json({ info: 'error during player create', error: err });
        }
        else {
            res.json({ info: 'player saved successfully', data: player });
        }
    }

    /* Read */
    app.get('/api/player', function (req, res) {
        Player.find((err, players) => {
            if (err) {
                res.json({ info: 'error during find players', error: err });
            }
            else {
                res.json({ info: 'players found successfully', data: players });
            }
        });
    });

    app.delete('/api/player/:id', function (req, res) {
        var query = { _id: req.params.id };
        Player.remove(query, function (err) {
            if (err) {
                res.json({ info: 'error during find player', error: err });
            }
            else {
                res.json({ info: 'player not found with name:' + req.params.id });
            }
            console.log("Player deleted: ", req.params.id, err);
        });
    });

    app.get('/api/player/:id', function (req, res) {
        var query = { _id: req.params.id };
        Player.findOne(query, function (err, player) {
            if (err) {
                res.json({ info: 'error during find player', error: err });
            }
            else {
                if (player) {
                    res.json({ info: 'player found successfully', data: player });
                } else {
                    res.json({ info: 'player not found with name:' + req.params.name });
                }
            }
            console.log("Requested player: ", player, err);
        });
    });
}