'use strict';

module.exports = function (app) {
    app.set('view engine', 'jade');
    app.set('views', process.cwd() + '/app/views');
    app.set('port', process.env.PORT || 8080);
};