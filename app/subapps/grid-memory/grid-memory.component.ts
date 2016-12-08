import {Component, OnInit} from "@angular/core";
import {FileInfo} from "./models/file-info.model";
import {GridMemoryService} from "./grid-memory.service";
import {CommonUtils} from "../../utils/common.util";

const CAPTION: string = "Try to remember the sequence of pictures below";

@Component({
moduleId: module.id,
selector: 'my-grid-memory',
templateUrl: 'grid-memory.component.html',
styleUrls: ['grid-memory.component.css'],
providers: [GridMemoryService]
})
export class GridMemoryComponent implements OnInit {
    private static GridCardColumnClasses: string = "col-lg-{0} col-md-{0} col-sm-{0} col-xs-{0}";
    startTimeoutHndl: any;

    start: boolean = false;
    currentFile: FileInfo;
    cardClasses: string = "";
    files: FileInfo[] = [];
    restFiles: FileInfo[] = [];
    countSuc: number = 0;
    countErr: number = 0;
    limit: number = 6;
    seconds: number = 10;
    question: string = CAPTION;

    constructor(private service: GridMemoryService) {
    }

    ngOnInit() {
        if (this.startTimeoutHndl) {
            clearTimeout(this.startTimeoutHndl);
            this.startTimeoutHndl = null;
        }

        this.question = CAPTION;
        this.start = false;
        this.limit = this.service.getLimit();
        this.seconds = this.service.getTimeout();
        this.service.getFiles(this.limit).then(f => this.loadData(f));
    }

    onClickReload() {
        this.ngOnInit();
    }

    loadData(f: FileInfo[]) {
        f.forEach(file => {
            file.inAction = false;
            file.isFront = true;
        });
        this.files = f.slice();
        this.restFiles = f;
        this.currentFile = null;
        this.limit = this.service.getLimit();
        this.seconds = this.service.getTimeout();
        this.countSuc = this.countErr = 0;
        this.startTimeoutHndl = setTimeout(() => {
            this.switchAreas(true);
            this.start = true;
            this.setNextFile();
        }, this.seconds * 1000);
        this.calcCardClasses();
    }

    switchAreas(close: boolean) {
        this.restFiles.forEach(file => {
            file.isFront = !close;
        });
    }

    flipCard(file: FileInfo) {
        if (!this.start || file.inAction) {
            return;
        }

        file.inAction = true;
        if (!this.start || this.restFiles.indexOf(file) < 0) {
            return;
        }

        file.isFront = true;
        if (this.isSelectedFileRight(file)) {
            this.countSuc++;
            var index = this.restFiles.indexOf(file, 0);
            if (index > -1) {
                this.restFiles.splice(index, 1);
            }
            this.setNextFile();
        }
        else {
            this.countErr++;
            setTimeout(() => {
                file.isFront = false;
                file.inAction = false;
            }, 2000);
        }
    }

    calcCardClasses() {
        var count = this.service.calcCardColsCount(this.limit);
        this.cardClasses = CommonUtils.format(GridMemoryComponent.GridCardColumnClasses, count);
    }

    setNextFile() {
        if (this.restFiles && this.restFiles.length > 0) {
            var pos = CommonUtils.getRandomInt(0, this.restFiles.length);
            this.currentFile = this.restFiles[pos];
            this.question = CommonUtils.format(this.service.questionTemplate, this.currentFile.name);
        }
    }

    isSelectedFileRight(file: FileInfo) {
        return this.currentFile && file && this.currentFile.path === file.path;
    }

    onChangeLimit(e: any) {
        this.service.setLimit(e.value);
        this.ngOnInit();
    }

    onChangeTimeout(e: any) {
        this.service.setTimeout(e.value);
    }
}