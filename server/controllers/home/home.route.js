(function () {
    "use strict";

    var express = require("express");
    var homeRouter = express.Router();
    var homeController = require("./home.controller")();

    homeRouter
        .route("/")
        .get(homeController.get);

    module.exports = homeRouter;

}());
