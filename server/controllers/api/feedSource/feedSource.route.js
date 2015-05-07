'use strict';

var express = require('express');
var feedSourceApiRouter = express.Router();
var feedSourceController = require('./feesSource.controller')();


feedSourceApiRouter
    .route('/feedSource')
    .get(feedSourceController.get);

module.exports = feedSourceApiRouter;