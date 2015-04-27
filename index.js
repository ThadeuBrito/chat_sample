var express  = require('express');
var http     = require('http');
var socketio = require('socket.io');

var app      = express();
var server   = http.Server(app);
var io       = socketio(server);

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket) {

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});

server.listen(3000, function() {
  console.log('listening on localhost:3000');
});
