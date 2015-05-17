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

    var getById = function(req, res, next){
        dal.feedSource.getById(req.params.itemId, function(err, data){
           if(err){
               res.status(500).json(err);
           }
            else{
               res.status(200).json(data);
           }
        });
    }

    return {
        get: get,
        post: post,
        getById: getById
    };
};
module.exports = feedSourceController;
