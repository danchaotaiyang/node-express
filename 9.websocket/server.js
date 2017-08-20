'use strict';

let WSS = require('ws').Server;

let server = new WSS({port: 8080});

server.on('connection', (socket) => {
	console.log('连接成功');


	socket.on('message', (msg) => {
		console.log(msg);
		socket.send('服务器说：' + msg);
	});
});



