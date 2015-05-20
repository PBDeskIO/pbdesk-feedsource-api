(function () {
    "use strict";
    var gulp = require("gulp");
    var gUtils = require("pbdesk-gulp-utils")(gulp);
    var gConfigs = require("./gulp/gulp.config");

    require("require-dir")("./gulp/tasks", {recurse: true});

    require("pbdesk-gulp-codereview")(gulp, gConfigs.serverJS);

    gulp.task("help", gUtils.GP.taskListing);
    gulp.task("default", ["help"]);

    gulp.task("hello-gulp", function() {
        console.log("Hello Gulp - from my test Gulp Task");
    });
}());
