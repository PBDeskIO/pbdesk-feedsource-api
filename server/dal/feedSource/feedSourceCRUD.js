var mongoose = require('mongoose');
var feedSourceSchema = require('pbdesk-schema-feedsource')(mongoose);
var model = feedSourceSchema.feedSourceModel;

module.exports = {
    getAll: _getAll,
    create: _create
};

function _getAll(cb) {
    try {
        //cb(null, {title: 'test1'});
        model.find(function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, data);
            }
        });
    }
    catch (ex){
        console.log(ex);
    }
}

function _create(item, cb){
    var itemToCreate = new model(item);
    itemToCreate.save(function(err, newItem){
        if(err){
            cb(err, null);
            //res.state(500).json(err);
        }
        else{
            cb(null, newItem);
            //res.json(newItem);
        }
    });
}
