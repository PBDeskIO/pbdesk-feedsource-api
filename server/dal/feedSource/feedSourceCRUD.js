var mongoose = require("mongoose");
var feedSourceSchema = require('pbdesk-schema-feedsource');
var model = feedSourceSchema.model;

module.exports = {
    getAll: _getAll
}

function _getAll() {
    model.find(function(err, sources){
        if(err){
            console.log(err);
            return null;
        }
        else{
            return sources;
        }
    });
}
