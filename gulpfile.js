'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var del = require('del');

gulp.task('default', ['copy:libraries']);
gulp.task('copy:libraries', function () {
    function copyFiles(destPath) {
        gulp.src('./node_modules/core-js/client/shim.min.{js,js.map}').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/zone.js/dist/zone.{js,min.js}').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/jquery.cookie/jquery.cookie.js').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/reflect-metadata/Reflect.{js,js.map}').pipe(gulp.dest(destPath + '/js/reflect-metadata'));
        gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(destPath + '/js/systemjs'));
        gulp.src('./node_modules/bootstrap/dist/**').pipe(gulp.dest(destPath + '/js/bootstrap'));
        gulp.src('./node_modules/jquery/dist/**').pipe(gulp.dest(destPath + '/js/jquery'));
        gulp.src('./node_modules/hammerjs/hammer.min.{js,js.map}').pipe(gulp.dest(destPath + '/js'));
        if (destPath !== '.') {
            //gulp.src('./node_modules/@angular/*/src/**/**.{ts,js,js.map}').pipe(gulp.dest(destPath + '/node_modules/@angular'));
            gulp.src('./styles.css').pipe(gulp.dest(destPath + '/'));
            gulp.src('./components/**').pipe(gulp.dest(destPath + '/components'));
        }
    }

    copyFiles(".");
    copyFiles("./aot");
});

gulp.task('clean', ['clean:app']);

gulp.task('clean:app', function () {
    return del([
        'js',
        'aot/node_modules',
        'aot/js',
        'aot/dist',
        'aot/components',
        'aot/app'
    ]);
});