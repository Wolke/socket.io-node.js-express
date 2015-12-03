(function(){
	console.log("done");
var socket = io.connect();
      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
      });
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });
      socket.on('broad', function(data) {
        $('#messages').append($('<li>').text("broad:"+data));
      });
  })();