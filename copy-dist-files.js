var fs = require('fs');
var resources = [
    {source: 'node_modules/core-js/client/shim.min.js', dest: "aot/js/"},
    {source: 'node_modules/core-js/client/shim.min.js.map', dest: "aot/js/"},
    {source: 'node_modules/zone.js/dist/zone.min.js', dest: "aot/js/"},
    {source: 'node_modules/jquery.cookie/jquery.cookie.js', dest: "aot/js/"},
    {source: 'client/styles.css', dest: "aot/"},
];
resources.map(function (f) {
    var path = f.source.split('/');
    var t = f.dest + path[path.length - 1];
    fs.createReadStream(f.source).pipe(fs.createWriteStream(t));
});
