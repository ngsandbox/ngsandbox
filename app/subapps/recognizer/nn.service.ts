import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class NNService {

    net: any;
    initialized: boolean = false;

    constructor(private http: Http) {
        let nn = require('brainjs');
        //json = require('json!/components/recognizer/mnistTrain.json');
        this.http.get("/components/recognizer/mnistTrain.json")
            .toPromise()
            .then(response => {
                let json = <any>response.json();
                console.log(nn.NeuralNetwork);
                this.net = new nn.NeuralNetwork();
                this.net.fromJSON(json);
                this.initialized = true;
            })
            .catch(err => console.log("Error receiving training set", err));
    }

    nn(input) {
        let output = this.net.run(input);

        return this.softmax(output);
    }

    private softmax(output): number[] {
        const maximum = output.reduce(function (p, c) {
            return p > c ? p : c;
        });
        const nominators = output.map(function (e) {
            return Math.exp(e - maximum);
        });
        const denominator = nominators.reduce(function (p, c) {
            return p + c;
        });
        const softmax = nominators.map(function (e) {
            return e / denominator;
        });

        let maxIndex = 0;
        softmax.reduce(function (p, c, i) {
            if (p < c) {
                maxIndex = i;
                return c;
            } else return p;
        });

        const result: number[] = [];

        for (let i = 0; i < output.length; i++) {
            if (i == maxIndex)
                result.push(1);
            else
                result.push(0);
        }

        return result;
    }

}