#!/usr/bin/env node
var debug = require('debug')('app');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

console.log('starting on port', 3000, process.env.PORT)
debug('starting on port', process.env.PORT)
var server = app.listen(app.get('port'), '0.0.0.0', function() {
  debug('Express server listening on port ' + server.address().port);
});
