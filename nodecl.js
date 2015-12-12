var socket = require('socket.io-client')('https://ds-fall-15-aaronxhill.c9.io/');
socket.on('connect', function(){
	socket.emit('my other event', { from: 'client' });
});
socket.on('news', function(data){
	console.log(data)
});
// socket.on('disconnect', function(){});