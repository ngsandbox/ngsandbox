"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/merode');
//db.on('error', console.error.bind(console, 'connection error:'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/app', express.static(__dirname + '/app'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/js', express.static(__dirname + '/js'));
var players_api_1 = require("./players-api");
players_api_1.regPlayersApi(app);
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
//# sourceMappingURL=server.js.map