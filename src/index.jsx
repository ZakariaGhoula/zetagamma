'use strict';
require('babel-core/register')({});

const PORT = process.env.PORT || 3000;
const HOST = 'localhost'
import app from './server/server';

import http from 'http';
import socketServer from './server/socket-server';


const webServer = app.listen(PORT,HOST, function (err) {
    if (err) throw err;
    console.log('Web server listening at http://%s:%d', HOST, PORT);
});
socketServer(webServer);