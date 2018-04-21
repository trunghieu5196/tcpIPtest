var net = require('net');

var server = net.createServer();

server.on("connection", function(socket){

	console.log("new connection is made");

	socket.on("data",function(d){
		console.log("data is %s",d);
	});
});

server.listen(process.env.PORT || 1333, function(){
	console.log("server listen to 3000 port");
});