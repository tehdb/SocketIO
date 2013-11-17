var socket = require('socket.io-client')('http://localhost');
console.log("try to connect");
socket.on('connect', function(){
console.log("connection steht");
// socket.on('event', function(data){});
// socket.on('disconnect', fucntion(){});
});

