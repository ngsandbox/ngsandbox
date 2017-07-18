/**
 * Created by Vasilenko on 12-Nov-16.
 */
import {ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import {CommonUtils} from "../../../utils/common.util";


@Injectable()
export class ChartService {

    _canvas: HTMLCanvasElement;
    _context: CanvasRenderingContext2D;
    _chart: Chart;
    _data: any = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            gridLines: {
                display: false
            },
            borderWidth: 1
        }]
    };

    constructor() {
    }

    addLine(){
        this._data.labels.push("Black");
        let dataset = this._data.datasets[0];

        dataset.data.push(CommonUtils.getRandomInt(0,20));
        //dataset.backgroundColor.push("rgba(122, 159, 64, 0.2)");
        dataset.borderColor.push("rgba(255, 77, 122, 1)");
        this._chart.update();
    }

    init(chartCanvas: ElementRef){
        this._canvas = <HTMLCanvasElement>chartCanvas.nativeElement;
        this._context = <CanvasRenderingContext2D>this._canvas.getContext("2d");
        this._chart = new Chart(this._context, {
            type: 'line',
            data: this._data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {

                            //beginAtZero:true
                        }
                    }]
                }
            }
        });

    }
}