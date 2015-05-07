;(function (routes) {
    'use strict';

    var homeRoutes = require('./home/home.route');
    var feedSourceApiRoute = require('./api/feedSource/feedSource.route');

    routes.init = function(app){
        app.use('/api', [feedSourceApiRoute]);
        app.use('*', homeRoutes);
    };

})(module.exports);
