'use strict';
var feedSourceController = function(){
    var get = function(req, res, next){
        res.json({
            hello: 'World',
            test: 'success'
        });
    }

    return {
        get: get
    }
}
module.exports = feedSourceController;


