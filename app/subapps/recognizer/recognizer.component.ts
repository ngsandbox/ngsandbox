import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer} from '@angular/core';
import {NNService} from "./nn.service";
import {CanvasModel} from "./models/canvas.model";
import {Size} from "../../models/size.model";
import {ImageUtils} from "../../utils/image.util";

@Component({
    moduleId: module.id,
    selector: 'recognizer',
    templateUrl: 'recognizer.component.html',
    providers: [NNService]
})
export class RecognizerComponent implements OnInit, AfterViewInit {
    globalListenFuncs: Function[] = [];

    @ViewChild("sketchpad") sketchpadEl: ElementRef;
    @ViewChild("thumbnail") thumbnailEl: ElementRef;

    result: string = "";
    footprint: Size = {
        width: 28,
        height: 28
    };
    isRecognized: boolean = false;
    isDrawing: boolean = false;
    zoom: number = 10;
    maxIndex: number = 0;
    grayscaleImg: number[][];

    constructor(private renderer: Renderer,
                private nnService: NNService) {
    }

    private _sketchpadInfo: CanvasModel = null;

    get Sketchpad(): CanvasModel {
        if (this._sketchpadInfo == null) {
            this._sketchpadInfo = new CanvasModel(this.sketchpadEl);
        }
        return this._sketchpadInfo;
    }

    private _thumbnail: CanvasModel = null;

    get Thumbnail(): CanvasModel {
        if (this._thumbnail == null) {
            this._thumbnail = new CanvasModel(this.thumbnailEl);
        }
        return this._thumbnail;
    }

    /**
     * create a drawer which tracks touch movements
     * */
    drawer = {
        isDrawing: false,
        touchstart: function (coors) {
            this.Sketchpad.Context2d.beginPath();
            this.Sketchpad.Context2d.lineWidth = 20;
            this.Sketchpad.Context2d.lineCap = "round";
            this.Sketchpad.Context2d.moveTo(coors.x - this.Sketchpad.Offset.left, coors.y - this.Sketchpad.Offset.top);
            this.isDrawing = true;
        },
        touchmove: function (coors) {
            if (this.isDrawing) {
                if (this.isRecognized) {
                    this.clearer();
                }
                this.Sketchpad.Context2d.lineTo(coors.x - this.Sketchpad.Offset.left, coors.y - this.Sketchpad.Offset.top);
                this.Sketchpad.Context2d.stroke();
            }
        },
        touchend: function (coors) {
            if (this.isDrawing) {
                this.touchmove(coors);
                this.isDrawing = false;
            }
        }
    };

    ngOnInit() {
    }

    ngOnDestroy() {
        event.preventDefault();
        while (this.globalListenFuncs.length > 0) {
            this.globalListenFuncs.pop()();
        }
    }

    ngAfterViewInit() {
        let self = this;
        this.globalListenFuncs.push(this.renderer.listenGlobal('document', 'keydown', (event: any) => {
            event.preventDefault();
        }));

        this.globalListenFuncs.push(this.renderer.listenGlobal("window", "resize", function (event) {
            event.preventDefault();
            self.Sketchpad.updateOffset();
        }));

        // prevent elastic scrolling
        this.globalListenFuncs.push(this.renderer.listenGlobal("document", 'touchmove', function (event) {
            event.preventDefault();
        }));
    }

    /**
     * pass touch events and coordinates to drawer
     */
    draw(event: any) {
        let type = null;
        // map mouse events to touch events
        switch (event.type) {
            case "mousedown":
                event.touches = [];
                event.touches[0] = {
                    pageX: event.pageX,
                    pageY: event.pageY
                };
                type = "touchstart";
                break;
            case "mousemove":
                event.touches = [];
                event.touches[0] = {
                    pageX: event.pageX,
                    pageY: event.pageY
                };
                type = "touchmove";
                break;
            case "mouseup":
                event.touches = [];
                event.touches[0] = {
                    pageX: event.pageX,
                    pageY: event.pageY
                };
                type = "touchend";
                break;
        }

        // touchend clear the touches[0], so we need to use changedTouches[0]
        let coors;
        if (event.type === "touchend") {
            coors = {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            };
        }
        else {
            // get the touch coordinates
            coors = {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }
        type = type || event.type
        // pass the coordinates to the appropriate handler
        this.drawer[type](coors);
    }

    clearer() {
        this.Sketchpad.clear(this.footprint, this.zoom);
        this.Thumbnail.clear(this.footprint, 1);
        this.result = '';
        this.isRecognized = false;
    };


    clear(event: any) {
        event.preventDefault();
        this.clearer();
    }

    recognise(event: any) {
        event.preventDefault();
        let self = this;
        if (self.isRecognized) return;

        let imgData = self.Sketchpad.Context2d.getImageData(0, 0, 280, 280);

        self.grayscaleImg = ImageUtils.imageDataToGrayscale(imgData);
        const boundingRectangle = ImageUtils.getBoundingRectangle(self.grayscaleImg, 0.01);
        const trans = ImageUtils.centerImage(self.grayscaleImg); // [dX, dY] to center of mass

        //console.log(grayscaleImg);
        //console.log(boundingRectangle);
        //console.log(trans);

        // copy image to hidden canvas, translate to center-of-mass, then
        // scale to fit into a 200x200 box (see MNIST calibration notes on
        // Yann LeCun's website)
        const canvasCopy = document.createElement("canvas");
        canvasCopy.width = imgData.width;
        canvasCopy.height = imgData.height;
        const copyCtx = canvasCopy.getContext("2d");
        const brW = boundingRectangle.maxX + 1 - boundingRectangle.minX;
        const brH = boundingRectangle.maxY + 1 - boundingRectangle.minY;
        const scaling = 190 / (brW > brH ? brW : brH);
        // scale
        copyCtx.translate(this.Sketchpad.Canvas.width / 2, this.Sketchpad.Canvas.height / 2);
        copyCtx.scale(scaling, scaling);
        copyCtx.translate(-this.Sketchpad.Canvas.width / 2, -this.Sketchpad.Canvas.height / 2);
        // translate to center of mass
        copyCtx.translate(trans.transX, trans.transY);

        copyCtx.drawImage(self.Sketchpad.Context2d.canvas, 0, 0);

        // now bin image into 10x10 blocks (giving a 28x28 image)
        imgData = copyCtx.getImageData(0, 0, 280, 280);
        self.grayscaleImg = ImageUtils.imageDataToGrayscale(imgData);
        console.log(self.grayscaleImg);

        const nnInput = new Array(784), nnInput2: number[] = [];
        for (let y = 0; y < 28; y++) {
            for (let x = 0; x < 28; x++) {
                let mean = 0;
                for (let v = 0; v < 10; v++) {
                    for (let h = 0; h < 10; h++) {
                        mean += self.grayscaleImg[y * 10 + v][x * 10 + h];
                    }
                }
                mean = (1 - mean / 100); // average and invert
                nnInput[x * 28 + y] = (mean - .5) / .5;
            }
        }

        const thumbnailData = self.Thumbnail.Context2d.getImageData(0, 0, self.footprint.width, self.footprint.height);


        // for visualization/debugging: paint the input to the neural net.
        //if (document.getElementById('preprocessing').checked == true) {
        //if (true)
        {
            self.Sketchpad.Context2d.clearRect(0, 0, self.Sketchpad.Canvas.width, self.Sketchpad.Canvas.height);
            self.Sketchpad.Context2d.drawImage(copyCtx.canvas, 0, 0);
            for (let y = 0; y < 28; y++) {
                for (let x = 0; x < 28; x++) {
                    const block = self.Sketchpad.Context2d.getImageData(x * 10, y * 10, 10, 10);
                    const newVal = 255 * (0.5 - nnInput[x * 28 + y] / 2);
                    nnInput2.push(Math.round((255 - newVal) / 255 * 100) / 100);
                    for (let i = 0; i < 4 * 10 * 10; i += 4) {
                        block.data[i] = newVal;
                        block.data[i + 1] = newVal;
                        block.data[i + 2] = newVal;
                        block.data[i + 3] = 255;
                    }
                    self.Sketchpad.Context2d.putImageData(block, x * 10, y * 10);

                    thumbnailData.data[(y * 28 + x) * 4] = newVal;
                    thumbnailData.data[(y * 28 + x) * 4 + 1] = newVal;
                    thumbnailData.data[(y * 28 + x) * 4 + 2] = newVal;
                    thumbnailData.data[(y * 28 + x) * 4 + 3] = 255;
                }
            }
        }

        self.Thumbnail.Context2d.putImageData(thumbnailData, 0, 0);

        const output = this.nnService.nn(nnInput2);
        self.maxIndex = 0;
        output.reduce(function (p, c, i) {
            if (p < c) {
                this.maxIndex = i;
                return c;
            } else return p;
        });

        console.log('Detect: ' + self.maxIndex);
        self.result = self.maxIndex.toString();
        self.isRecognized = true;

    }
}