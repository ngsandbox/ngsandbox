"use strict";
(function (FileState) {
    FileState[FileState["front"] = 0] = "front";
    FileState[FileState["back"] = 1] = "back";
})(exports.FileState || (exports.FileState = {}));
var FileState = exports.FileState;
var Lang = (function () {
    function Lang() {
    }
    return Lang;
}());
exports.Lang = Lang;
var FileInfo = (function () {
    function FileInfo() {
        this.inAction = false;
        this.isFront = true;
    }
    return FileInfo;
}());
exports.FileInfo = FileInfo;
//# sourceMappingURL=FileInfo.js.map