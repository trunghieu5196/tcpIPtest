var net = require('net');

var server = net.createServer();

server.on("connection", function(){

	console.log("new connection is made");
});

server.listen(process.env.PORT || 3000,function(){
	console.log("server listen to 3000 port");
});