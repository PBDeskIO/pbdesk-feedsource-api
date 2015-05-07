var mongoose = require("mongoose");

var db = mongoose.connect(AppConfigs.dbConStr);

var feedSourceCRUD = require('./feedSource/feedSourceCRUD');

module.exports = {
    db: db,
    feedSource: feedSourceCRUD
}


