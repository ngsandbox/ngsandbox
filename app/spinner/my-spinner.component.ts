import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[mySpinner]',
    templateUrl: 'my-spinner.component.html',
    styleUrls: ['my-spinner.component.css']
})
export class MySpinner {

    @Input() maxValue: number = 36;
    @Input() minValue: number = 1;
    @Input() counterValue: number = 0;
    @Input() bdgClass: string = '';
    @Output() counterChange = new EventEmitter();

    constructor() {
    }

    increment() {
        this.counterValue++;
        this.counterChange.emit({
            value: this.counterValue
        })
    }

    decrement() {
        this.counterValue--;
        this.counterChange.emit({
            value: this.counterValue
        })
    }
}
