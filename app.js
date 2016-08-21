var debug = require('debug')('babymonitor2:server');

var http = require('http');
var https = require('https');
var fs = require('fs');


var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));
app.use(favicon(path.join(__dirname,'public','images','icons','favicon.ico')));

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
