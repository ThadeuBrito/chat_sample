var socket = io();

$('.new-message-form').submit(function(){
  socket.emit('chat message', $('#new-message-field').val());
  $('#new-message-field').val('');
  return false;
});

function addMessage(msg) {
  $('#messages').append($('<li>').text(msg));
}

socket.on('chat message', function(msg){
  addMessage(msg);
});

socket.on('new user logged', function(username){
  addMessage(username + ' logged.');
});

socket.on('user disconnected', function(username){
  addMessage(username + ' disconnected.');
});
