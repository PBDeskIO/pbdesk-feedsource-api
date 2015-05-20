(function () {
    "use strict";

    var feedSourceController = function(mongoose){

        var feedSourceDAL = require("pbdesk-feedsource-dal")(mongoose);

        var get = function(req, res, next){
            feedSourceDAL.getAll(function(err, data){
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
            feedSourceDAL.create(req.body, function(err, data){
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
            feedSourceDAL.getById(req.params.itemId, function(err, data){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json(data);
                }
            });
        };

        var updateItem = function (req, res, next) {
            var itemId = req.params.itemId;
            var item = req.body;
            if(itemId === item._id){
                feedSourceDAL.update(item, function(err, data){
                    if(err){
                        res.status(500).json(err);
                    }
                    else{
                        res.status(200).json(data);
                    }
                });
            }
            else{
                res.status(500).json({Error: "Invalid Data or operation"});
            }
        }

        var deleteItem = function(req, res,next){
            var itemId = req.params.itemId;
            feedSourceDAL.deleteItem(itemId, function(err,data){
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
            getById: getById,
            updateItem: updateItem,
            deleteItem: deleteItem
        };
    };

    module.exports = feedSourceController;

}());

