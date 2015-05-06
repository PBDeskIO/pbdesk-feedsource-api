;(function () {
    'use strict';
    var gulp = require('gulp');
    var gUtil = require('./gulp/gulp.utils.js')();

    var requireDir;
    requireDir = require('require-dir')('./gulp/tasks', {recurse: true});

    gulp.task('help', gUtil.GP.taskListing);
    gulp.task('default', ['help']);
    
    gulp.task('hello-gulp', function() {
        console.log('Hello Gulp - from my test Gulp Task');
    });
}());
