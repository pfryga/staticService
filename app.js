'use strict';

import express from 'express';
let app = express();

app.get('/status/ping', function (req, res) {
    res.send('pong');
});

app.listen(3000, function () {
    console.log('server started!');
});