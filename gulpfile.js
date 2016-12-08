'use strict';

const gulp = require('gulp');
//let merge = require('merge-stream');
const del = require('del');
const browserify = require('gulp-browserify');

// Basic usage
gulp.task('browser', function () {
    // Single entry point to browserify
    gulp.src('./node_modules/brain.js/lib/brain.js')
        .pipe(browserify({
            insertGlobals: true
            //,debug: !gulp.env.production
        })).pipe(gulp.dest('./js/brainjs/'));
    gulp.src('./node_modules/modernizr/src/Modernizr.js')
        .pipe(browserify({
            insertGlobals: true
            //,debug: !gulp.env.production
        })).pipe(gulp.dest('./js'));
});


gulp.task('default', ['browser', 'copy:libraries']);


gulp.task('copy:libraries', function () {
    function copyFiles(destPath) {
        gulp.src('./node_modules/core-js/client/shim.min.{js,js.map}').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/zone.js/dist/zone.{js,min.js}').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/jquery.cookie/jquery.cookie.js').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/reflect-metadata/Reflect.{js,js.map}').pipe(gulp.dest(destPath + '/js/reflect-metadata'));
        gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(destPath + '/js/systemjs'));
        gulp.src('./node_modules/bootstrap/dist/**').pipe(gulp.dest(destPath + '/js/bootstrap'));
        gulp.src('./node_modules/jquery/dist/**').pipe(gulp.dest(destPath + '/js/jquery'));
        gulp.src('./node_modules/hammer-timejs/dist/**').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/hammerjs/hammer.min.{js,js.map}').pipe(gulp.dest(destPath + '/js'));
        gulp.src('./node_modules/requirejs/require.js').pipe(gulp.dest(destPath + '/js'));
        //gulp.src('./node_modules/modernizr/src/**.{js,js.map}').pipe(gulp.dest(destPath + '/js/modernizr'));

        if (destPath !== '.') {
            gulp.src('./js/brainjs/**').pipe(gulp.dest(destPath + '/js/brainjs'));
            gulp.src('./js/Modernizr.js').pipe(gulp.dest(destPath + '/js'));
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