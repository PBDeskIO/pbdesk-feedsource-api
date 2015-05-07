'use strict';
var feedSourceController = function(){

    var dal = require('./../../../dal');


    var get = function(req, res, next){
        var result = dal.feedSource.getAll();
        res.json(result);
    };

    return {
        get: get
    };
};
module.exports = feedSourceController;
