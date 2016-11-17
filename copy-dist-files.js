'use strict';

var fs = require('fs');
var copy = require('recursive-copy');
var path = require('path');

fs.mkdirParent = function(dirPath, mode, callback) {
    //Call the standard fs.mkdir
    fs.mkdir(dirPath, mode, function(error) {
        //When it fail in this way, do the custom steps
        if (error && error.errno === 34) {
            //Create all the parents recursively
            fs.mkdirParent(path.dirname(dirPath), mode, callback);
            //And then the directory
            fs.mkdirParent(dirPath, mode, callback);
        }
        //Manually run the callback since we used our own callback to do all these
        callback && callback(error);
    });
};
function copyDataFiles(pathDest) {
    var resources = [
        {file: 'node_modules/core-js/client/shim.min.js', dest: "js/"},
        {file: 'node_modules/core-js/client/shim.min.js.map', dest: "js/"},
        {file: 'node_modules/zone.js/dist/zone.min.js', dest: "js/"},
        {file: 'node_modules/jquery.cookie/jquery.cookie.js', dest: "js/"},
        {file: 'styles.css', dest: ""},
        {dir: 'node_modules/bootstrap/dist/', dest: "js/bootstrap/"},
        {dir: 'node_modules/modernizr/bin/', dest: "js/"},
        {dir: 'node_modules/jquery/dist/', dest: "js/jquery/"}
    ];

    resources.map(function (f) {
        if (f.file) {
            if (f.dest) {
                var ff = f.file.split('/');
                var t = pathDest + f.dest + ff[ff.length - 1];
                fs.createReadStream(f.file).pipe(fs.createWriteStream(t));
            }
        }
        else {
            //var dirPath = __dirname + "/" + pathDest + f.dest;
            fs.mkdirParent(pathDest + f.dest);
            var options = {
                overwrite: true,
                expand: true
            };
            copy(f.dir, pathDest + f.dest, options, function (err) {
                if (err) {
                    console.error(err);
                    throw err;
                }
                // done
            });
        }
    });
}





copyDataFiles("");
copyDataFiles("aot/");
