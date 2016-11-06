import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Utils } from "./../utils";
export var GridMemoryService = (function () {
    function GridMemoryService(http) {
        this.http = http;
        this.questionTemplate = "Where is {0}?";
        //this.files = this.getFiles();
    }
    GridMemoryService.prototype.getFiles = function (limit) {
        var _this = this;
        return this.http.get("/components/memory/filesInfo.json")
            .toPromise()
            .then(function (response) { return _this.proceedFiles(response.json(), limit); })
            .catch(GridMemoryService.handleError);
    };
    GridMemoryService.prototype.proceedFiles = function (files, limit) {
        var result = [];
        var start = Utils.getRandomInt(0, files.length - limit * 2);
        var end = Utils.getRandomInt(start + limit * 2, files.length);
        var rest = files.slice(start, end);
        //console.log({ start: start, end: end, rest: rest, length: files.length, limit: limit });
        while (rest.length > 1 && result.length < limit) {
            var i = Utils.getRandomInt(0, rest.length - 1);
            var fileInfo = rest[i];
            fileInfo.path = "/components/memory/" + fileInfo.path;
            fileInfo.name = fileInfo.langs[0].value;
            rest.splice(i, 1);
            result.push(fileInfo);
        }
        return result;
    };
    GridMemoryService.prototype.calcCardColsCount = function (limit) {
        return (limit < 5) ? 6 :
            (limit < 7) ? 4 :
                (limit < 13) ? 3 :
                    (limit < 25) ? 2 : 1;
    };
    GridMemoryService.prototype.setTimeout = function (sec) {
        Utils.save(GridMemoryService.gridMemSecondsKey, sec);
    };
    GridMemoryService.prototype.getTimeout = function () {
        return Utils.load(GridMemoryService.gridMemSecondsKey, 10);
    };
    GridMemoryService.prototype.setLimit = function (limit) {
        Utils.save(GridMemoryService.gridMemLimitKey, limit);
    };
    GridMemoryService.prototype.getLimit = function () {
        return Utils.load(GridMemoryService.gridMemLimitKey, 6);
    };
    GridMemoryService.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GridMemoryService.gridMemSecondsKey = "GridMemorySeconds";
    GridMemoryService.gridMemLimitKey = "GridMemoryLimit";
    GridMemoryService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GridMemoryService.ctorParameters = [
        { type: Http, },
    ];
    return GridMemoryService;
}());
//# sourceMappingURL=grid-memory.service.js.map