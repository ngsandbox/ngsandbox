var gulp = require('gulp');
var merge = require('merge-stream');
var rimraf = require("rimraf");
var gulpRimRaf = require('gulp-rimraf');

var jsPath = './js';
var angularPath = jsPath + '/@angular';
var rxjsPath = jsPath + '/rxjs';
var appjsPath = './app/**/*.{js,js.map}';


gulp.task('default', ['copy:libraries']);

gulp.task('copy:libraries', function () {
    gulp.src('./node_modules/core-js/client/shim.min.{js,js.map}').pipe(gulp.dest(jsPath + '/core-js'));
    gulp.src('./node_modules/zone.js/dist/zone.js').pipe(gulp.dest(jsPath + '/zone.js'));
    gulp.src('./node_modules/reflect-metadata/Reflect.{js,js.map}').pipe(gulp.dest(jsPath + '/reflect-metadata'));
    gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(jsPath + '/systemjs'));
    gulp.src('./node_modules/jquery.cookie/jquery.cookie.js').pipe(gulp.dest(jsPath + '/jquery.cookie'));
    gulp.src('./node_modules/hammerjs/hammer.min.{js,js.map}').pipe(gulp.dest(jsPath + '/hammerjs'));
});

gulp.task('clean', ['clean:js', 'clean:app']);
gulp.task('clean:app', function () {
    return gulp.src(appjsPath, {read: false})
        .pipe(gulpRimRaf());
});

gulp.task('clean:js', ['clean:angular', 'clean:rxjs']);
gulp.task('clean:angular', function (cb) {
    rimraf(angularPath, cb);
});

gulp.task('clean:rxjs', function (cb) {
    rimraf(rxjsPath, cb);
});

