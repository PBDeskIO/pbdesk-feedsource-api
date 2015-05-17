#!/usr/bin/env node

//Loading Configs
var path = require('path');
var nodeProcessExit = require('exit');
var env = process.env.NODE_ENV = (process.env.NODE_ENV  || 'development');

var configs = require('pbdesk-configurator')(process.env.NODE_ENV, path.join(__dirname, './configs'));
if(configs instanceof Error){
    console.log("Error loading configs in pbdesk-configurator module.")
    console.log(configs.message);
    nodeProcessExit(5);
}
global.AppConfigs = configs;

var env = process.env.NODE_ENV = (process.env.NODE_ENV  || 'development');
var port = normalizePort(process.env.PORT || '3002');

var app = require('./server/index');
var debug = require('debug')('server');
var http = require('http');

app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log("...NodeJS Express Http WebServer now runnong on port " + port)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
