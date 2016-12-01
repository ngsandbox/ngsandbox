import {Directive, AfterViewInit, Output, EventEmitter, ElementRef} from "@angular/core";
/**
 * Created by Vasilenko on 28-Nov-16.
 */


@Directive({
    selector: '[hammer-gestures]'
})
export class HammerGesturesDirective implements AfterViewInit {
    @Output() onGesture = new EventEmitter();
    static hammerInitialized = false;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        if (!HammerGesturesDirective.hammerInitialized) {
            let hammertime = new Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({direction: Hammer.DIRECTION_ALL});
            hammertime.on("swipeup", (ev: any) => {
                this.onGesture.emit("swipeup");
            });
            hammertime.on("swipedown", (ev: any) => {
                this.onGesture.emit("swipedown");
            });
            hammertime.on("swipeleft", (ev: any) => {
                this.onGesture.emit("swipeleft");
            });
            hammertime.on("swiperight", (ev: any) => {
                this.onGesture.emit("swiperight");
            });
            hammertime.on("tap", (ev: any) => {
                this.onGesture.emit("tap");
            });

            HammerGesturesDirective.hammerInitialized = true;
        }
    }
}