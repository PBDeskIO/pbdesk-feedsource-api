'use strict';

var homeController = function(){

    var get = function(req, res, next){
        res.redirect('http://pbdesk.io');
    };

    return {
        get: get
    };
};

module.exports = homeController;
