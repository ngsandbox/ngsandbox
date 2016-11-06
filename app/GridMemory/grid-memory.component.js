import { Component } from "@angular/core";
import { GridMemoryService } from "./grid-memory.service";
import { Utils } from "./../utils";
export var GridMemoryComponent = (function () {
    function GridMemoryComponent(service) {
        this.service = service;
        this.start = false;
        this.cardClasses = "";
        this.files = [];
        this.restFiles = [];
        this.countSuc = 0;
        this.countErr = 0;
        this.limit = 6;
        this.seconds = 10;
        this.question = "";
    }
    GridMemoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.startTimeoutHndl) {
            clearTimeout(this.startTimeoutHndl);
            this.startTimeoutHndl = null;
        }
        this.start = false;
        this.service.getFiles(this.limit).then(function (f) { return _this.loadData(f); });
    };
    GridMemoryComponent.prototype.onClickReload = function () {
        this.ngOnInit();
    };
    GridMemoryComponent.prototype.loadData = function (f) {
        var _this = this;
        f.forEach(function (file) {
            file.inAction = false;
            file.isFront = true;
        });
        this.files = f.slice();
        this.restFiles = f;
        this.currentFile = null;
        this.calcCardClasses();
        this.limit = this.service.getLimit();
        this.seconds = this.service.getTimeout();
        this.countSuc = this.countErr = 0;
        this.startTimeoutHndl = setTimeout(function () {
            _this.switchAreas(true);
            _this.start = true;
            _this.setNextFile();
        }, this.seconds * 1000);
    };
    GridMemoryComponent.prototype.switchAreas = function (close) {
        this.restFiles.forEach(function (file) {
            file.isFront = !close;
        });
    };
    GridMemoryComponent.prototype.flipCard = function (file) {
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
            setTimeout(function () {
                file.isFront = false;
                file.inAction = false;
            }, 2000);
        }
    };
    GridMemoryComponent.prototype.calcCardClasses = function () {
        var count = this.service.calcCardColsCount(this.limit);
        this.cardClasses = Utils.format(GridMemoryComponent.GridCardColumnClasses, count);
    };
    GridMemoryComponent.prototype.setNextFile = function () {
        if (this.restFiles && this.restFiles.length > 0) {
            var pos = Utils.getRandomInt(0, this.restFiles.length);
            this.currentFile = this.restFiles[pos];
            this.question = Utils.format(this.service.questionTemplate, this.currentFile.name);
        }
    };
    GridMemoryComponent.prototype.isSelectedFileRight = function (file) {
        return this.currentFile && file && this.currentFile.path === file.path;
    };
    GridMemoryComponent.prototype.onChangeLimit = function (e) {
        this.service.setLimit(e.value);
        this.ngOnInit();
    };
    GridMemoryComponent.prototype.onChangeTimeout = function (e) {
        this.service.setTimeout(e.value);
    };
    GridMemoryComponent.GridCardColumnClasses = "col-lg-{0} col-md-{0} col-sm-{0} col-xs-{0}";
    GridMemoryComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-grid-memory',
                    templateUrl: 'grid-memory.component.html',
                    styleUrls: ['grid-memory.component.css'],
                    providers: [GridMemoryService]
                },] },
    ];
    /** @nocollapse */
    GridMemoryComponent.ctorParameters = [
        { type: GridMemoryService, },
    ];
    return GridMemoryComponent;
}());
//# sourceMappingURL=grid-memory.component.js.map