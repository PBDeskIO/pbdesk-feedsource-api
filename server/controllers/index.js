(function (routes) {
    "use strict";

    routes.init = function(app, mongoose){

        var homeRoutes = require("./home/home.route");
        var feedSourceApiRoute = require("./api/feedSource/feedSource.route")(mongoose);

        app.use("/", homeRoutes);
        app.use("/api", [feedSourceApiRoute]);
    };

})(module.exports);
