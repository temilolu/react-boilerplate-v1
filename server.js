'use strict';

/**
 * Plentyspots NodeJS Server
 */
var express = require('express');
var compression = require('compression');
var app = express();
var port = process.env.PORT || 7000;
var environment = process.env.APP_ENV; // use in lieu of NODE_ENV because of Heroku keeps using production
var path = require('path');

// compress all responses
app.use(compression());

// set the view engine to Jade
app.set('view engine', 'jade');

// public files
app.use(express.static(path.join(__dirname + '/public')));

// send all page requests to index page
app.get('*', function(request, response) {

  var fullUrl = '//' + request.get('host'); // protocol relative
  var bundleSrc, parsed, redirectUrl;

  // bundle to be used based on environment
  if (environment == 'development') {
    bundleSrc = 'http://127.0.0.1:8080/build/bundle.js';
  } else if (environment == 'staging') {
    bundleSrc = fullUrl + '/build/bundle.js';
  } else {
    bundleSrc = fullUrl + '/build/bundle.min.js';
  }

  // redirec to secure url if not secured
  if (environment !== 'development' && request.headers['x-forwarded-proto'] !== 'https') {
    redirectUrl = 'https://' + request.get('host') + request.originalUrl;
    response.redirect(redirectUrl);
  } else {

    response.render(__dirname + '/index.jade', {
      'bundleSrc': bundleSrc
    });

  }

});

// start server
app.listen(port, function() {
  console.log('VirtualQ Dashboard running on port ' + port + ' in ' + environment + ' mode');
});
