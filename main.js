var socket = io();

$('.new-message-form').submit(function(){
  socket.emit('chat message', $('#new-message-field').val());
  $('#new-message-field').val('');
  return false;
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
