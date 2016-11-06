import { Component, Input, Output, EventEmitter } from '@angular/core';
export var MySpinner = (function () {
    function MySpinner() {
        this.counterValue = 0;
        this.bdgClass = '';
        this.counterChange = new EventEmitter();
    }
    MySpinner.prototype.increment = function () {
        this.counterValue++;
        this.counterChange.emit({
            value: this.counterValue
        });
    };
    MySpinner.prototype.decrement = function () {
        this.counterValue--;
        this.counterChange.emit({
            value: this.counterValue
        });
    };
    MySpinner.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-spinner',
                    templateUrl: 'my-spinner.component.html',
                    styleUrls: ['my-spinner.component.css']
                },] },
    ];
    /** @nocollapse */
    MySpinner.ctorParameters = [];
    MySpinner.propDecorators = {
        'counterValue': [{ type: Input },],
        'bdgClass': [{ type: Input },],
        'counterChange': [{ type: Output },],
    };
    return MySpinner;
}());
//# sourceMappingURL=my-spinner.component.js.map