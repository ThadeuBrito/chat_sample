var express  = require('express');
var http     = require('http');

var app      = express();
var server   = http.Server(app);

server.listen(3000, function() {
  console.log('listening on *:3000');
});

app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>')
});
