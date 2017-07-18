import {Component, OnInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import {ChartService} from "./services/chart.service";

@Component({
    moduleId: module.id,
    selector: 'my-puzzle-2048',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.css'],
    providers: [ChartService]
})
export class ChartComponent implements OnInit, OnDestroy {

    @ViewChild("chartCanvas") chartCanvas: ElementRef;


    constructor(public chartServ: ChartService) {
    }

    initChart() {
        this.chartServ.init(this.chartCanvas);
    }

    ngOnInit() {
        this.initChart();
    }

    onClickAddLine() {
        this.chartServ.addLine();
    }

    ngOnDestroy() {
        event.preventDefault();
    }
}