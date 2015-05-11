'use strict';
var feedSourceController = function(){

    var dal = require('./../../../dal');

    var get = function(req, res, next){
        dal.feedSource.getAll(function(err, data){
            if(err){
                console.log(err);
                res.status(500).json(err);
            }
            else{
                res.json(data);
            }
        });

    };

    var post = function(req, res, next){
        dal.feedSource.create(req.body, function(err, data){
            if(err) {
                console.log(err);
                res.status(500).json(err);
            }
            else {
                res.status(201).json(data);
            }
        });
    };

    return {
        get: get,
        post: post
    };
};
module.exports = feedSourceController;
