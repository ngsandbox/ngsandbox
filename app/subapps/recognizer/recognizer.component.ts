import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer} from "@angular/core";
import {NNService} from "./nn.service";
import {DrawerService} from "./drawer.service";

@Component({
    moduleId: module.id,
    selector: 'recognizer',
    templateUrl: 'recognizer.component.html',
    providers: [DrawerService, NNService]
})
export class RecognizerComponent implements OnInit, AfterViewInit {
    globalListenFuncs: Function[] = [];

    @ViewChild("sketchpad") sketchpadEl: ElementRef;
    @ViewChild("thumbnail") thumbnailEl: ElementRef;

    zoom: number = 10;

    constructor(private renderer: Renderer,
                public drawerService: DrawerService) {
    }


    ngOnInit() {
    }

    ngOnDestroy() {
        while (this.globalListenFuncs.length > 0) {
            this.globalListenFuncs.pop()();
        }
    }

    ngAfterViewInit() {
        let self = this;
        let s: MouseEvent
        this.globalListenFuncs.push(this.renderer.listenGlobal('document', 'keydown', (event: any) => {
            event.preventDefault();
        }));

        this.globalListenFuncs.push(this.renderer.listenGlobal("window", "resize", function (event: any) {
            event.preventDefault();
            self.drawerService.resize();
        }));

        // prevent elastic scrolling
        this.globalListenFuncs.push(this.renderer.listenGlobal("document", 'touchmove', function (event: any) {
            event.preventDefault();
        }));

        this.drawerService.init(this.sketchpadEl, this.thumbnailEl);
    }

    /**
     * pass touch events and coordinates to drawer
     */
    draw(event: any) {
        this.drawerService.draw(event);
    }


    clear() {
        this.drawerService.clear();
    }

    recognise() {
        this.drawerService.recognise();
    }
}