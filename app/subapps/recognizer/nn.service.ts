import {Injectable} from "@angular/core";

declare let nn: any;


@Injectable()
export class NNService {


    constructor() {
    }

    recognoze(input: number[]): number[] {
        console.log(nn, input);
        let brainResult: number[] = nn(input);
        return this.softmax(brainResult);
    }

    softmax(output: number[]) {
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

        const result = new Array(output.length);

        for (let i = 0; i < output.length; i++) {
            result[i] = (i == maxIndex) ? 1 : 0;
        }

        return result;
    }

}