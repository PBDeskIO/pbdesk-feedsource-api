;(function () {
    'use strict';

    var gUtil = require('./../gulp.utils.js')();

    gUtil.gulp.task('dev-run', function () {
        gUtil.GP.nodemon({
            script: 'server.js',
            ext: 'js',
            ignore: [
                'node_modules'
            ],
            env: {
                'NODE_ENV': 'development',
                'PORT': 3003
            }
        });
    })
    .on('restart', function () {
        console.log('restarted by gulp-nodemon...');
    });

}());
