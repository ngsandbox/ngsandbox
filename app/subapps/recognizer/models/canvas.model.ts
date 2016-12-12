import {ElementRef} from "@angular/core";
import {Offset} from "../../../models/offset.model";
import {Size} from "../../../models/size.model";

export class CanvasModel {

    private _context: CanvasRenderingContext2D = null;
    private _canvas: HTMLCanvasElement = null;
    private _canvasOffset: Offset = null;

    constructor(private el: ElementRef) {
    }


    get Canvas(): HTMLCanvasElement {
        if (this._canvas == null) {
            this._canvas = <HTMLCanvasElement>this.el.nativeElement;
        }
        return this._canvas;
    }

    get Context2d(): CanvasRenderingContext2D {
        if (this._context == null) {
            this._context = this.Canvas.getContext('2d');
        }

        return this._context;
    }


    get Offset(): Offset {
        if (this._canvasOffset == null) {
            this.updateOffset();
        }

        return this._canvasOffset;
    }

    clear(footprint: Size, zoom: number) {
        this.Context2d.fillStyle = "white";
        this.Context2d.fillRect(0, 0, footprint.width * zoom, footprint.height * zoom);

    }

    updateOffset() {
        this._canvasOffset = this.getOffsetSum(this.Canvas);
    }

    private getOffsetSum(elem: HTMLElement): Offset {
        let top = 0, left = 0;
        while (elem) {
            top = top + <number>elem.offsetTop;
            left = left + <number>elem.offsetLeft;
            elem = <HTMLElement>elem.offsetParent;
        }

        return {top: top, left: left}
    }
}