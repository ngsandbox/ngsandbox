export var FileState;
(function (FileState) {
    FileState[FileState["front"] = 0] = "front";
    FileState[FileState["back"] = 1] = "back";
})(FileState || (FileState = {}));
export var Lang = (function () {
    function Lang() {
    }
    return Lang;
}());
export var FileInfo = (function () {
    function FileInfo() {
        this.inAction = false;
        this.isFront = true;
    }
    return FileInfo;
}());
//# sourceMappingURL=FileInfo.js.map