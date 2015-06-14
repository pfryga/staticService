'use strict';

import express from 'express';
import configure from './lib/configure';
import routes from './controllers';

let app = express();

configure(app);

app.use(routes);

app.listen(app.set('port'), function () {
    console.log('server started!');
});