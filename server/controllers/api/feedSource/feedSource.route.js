(function () {
    "use strict";

    module.exports = function(mongoose){

        var express = require("express");
        var feedSourceApiRouter = express.Router();
        var feedSourceController = require("./feesSource.controller")(mongoose);

        feedSourceApiRouter
            .route("/feedSource")
            .get(feedSourceController.get)
            .post(feedSourceController.post);

        feedSourceApiRouter
            .route("/feedSource/:itemId")
            .get(feedSourceController.getById)
            .put(feedSourceController.updateItem)
            .delete(feedSourceController.deleteItem);

        return feedSourceApiRouter;
    };

}());




