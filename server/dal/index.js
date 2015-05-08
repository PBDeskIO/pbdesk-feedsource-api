var mongoose = require("mongoose");

var db = mongoose.connect(AppConfigs.dbConStr);

var feedSourceCRUD = require('./feedSource/feedSourceCRUD', function(err) {
    if(err) {
        console.log('Connection Error: Mongoose cannot connect to MongoDB ', err);
    } else {
        console.log('Connection Successful: Mongoose successfully connected to MongoDB ');
    }
});

module.exports = {
    db: db,
    feedSource: feedSourceCRUD
}


