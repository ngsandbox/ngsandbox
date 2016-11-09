"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var utils_1 = require("./../utils");
var GridMemoryService = (function () {
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
        var start = utils_1.Utils.getRandomInt(0, files.length - limit * 2);
        var end = utils_1.Utils.getRandomInt(start + limit * 2, files.length);
        var rest = files.slice(start, end);
        //console.log({ start: start, end: end, rest: rest, length: files.length, limit: limit });
        while (rest.length > 1 && result.length < limit) {
            var i = utils_1.Utils.getRandomInt(0, rest.length - 1);
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
        utils_1.Utils.save(GridMemoryService.gridMemSecondsKey, sec);
    };
    GridMemoryService.prototype.getTimeout = function () {
        return utils_1.Utils.load(GridMemoryService.gridMemSecondsKey, 10);
    };
    GridMemoryService.prototype.setLimit = function (limit) {
        utils_1.Utils.save(GridMemoryService.gridMemLimitKey, limit);
    };
    GridMemoryService.prototype.getLimit = function () {
        return utils_1.Utils.load(GridMemoryService.gridMemLimitKey, 6);
    };
    GridMemoryService.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GridMemoryService.gridMemSecondsKey = "GridMemorySeconds";
    GridMemoryService.gridMemLimitKey = "GridMemoryLimit";
    GridMemoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GridMemoryService);
    return GridMemoryService;
}());
exports.GridMemoryService = GridMemoryService;
//# sourceMappingURL=grid-memory.service.js.map