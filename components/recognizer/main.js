'use strict';

let brain = require('brain.js'),
    net = new brain.NeuralNetwork(),
    json = require('json!./mnistTrain.json');

net.fromJSON(json);
window['nn'] = function (input) {
    return net.run(input);
};

//window['nn'] = require('./nn');
