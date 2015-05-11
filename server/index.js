/*
var feedSourceSchema = require('pbdesk-schema-feedsource');
console.log(feedSourceSchema.feedFormats);
console.log(feedSourceSchema.feedCategories);
console.log(feedSourceSchema.model);*/

var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./controllers');

var mongoose = require('mongoose');

var db = mongoose.connect(AppConfigs.dbConStr, function(err) {
    if(err) {
        console.log('Connection Error: Mongoose cannot connect to MongoDB ', err);
    } else {
        console.log('Connection Successful: Mongoose successfully connected to MongoDB ');
    }
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

routes.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;

