(function () {
    "use strict";

    var gulp = require("gulp");
    var gUtils = require("pbdesk-gulp-utils")(gulp);
    var gConfigs = require("./../gulp.config");


    gulp.task("dev-run", function () {
        gUtils.GP.nodemon({
            script: "server.js",
            ext: "js",
            ignore: [
                "node_modules"
            ],
            env: {
                "NODE_ENV": "development",
                "PORT": 3003
            }
        });
    })
    .on("restart", function () {
        console.log("restarted by gulp-nodemon...");
    });

}());
