'use strict';
let path = require('path');
let {Message} = require('./dbm');

let express = require('express');
let app = express();

app.use(express.static(path.resolve('../node_modules')));
app.use(express.static(path.resolve('./')));

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: __dirname});
});

app.get('/1', function (req, res) {
	res.sendFile('index1.html', {root: __dirname});
});

app.get('/2', function (req, res) {
	res.sendFile('index2.html', {root: __dirname});
});

let server = require('http').createServer(app);
let io = require('socket.io')(server);

let sockets = {};

io.on('connection', (socket) => {

	let curRoom;

	socket.on('message', (msg) => {
		sockets[msg.name] = socket;
		if (msg.name && msg.content) {
			let reg = /@([^\s]+) (.+)/;
			let result = msg.content.match(reg);
			if (result) {
				let toUser = result[1];
				let content = result[2];
				let toSocket = sockets[toUser];
				if (toSocket) {
					sockets[toUser].send({name: msg.name, avatar: msg.avatar, content, createAt: new Date()});
				} else {
					socket.send({content: `<span class="text-primary">${toUser}</span> 不在房间内`});
				}
			} else {
				Message.create({name: msg.name, avatar: msg.avatar, content: msg.content}, (err, doc) => {
					if (err) {
						console.log('Error:' + err);
						return false;
					}
					if (curRoom) {
						io.in(curRoom).emit('message', doc);
					} else {
						io.emit('message', doc);
					}
				});
			}
		} else {
			io.emit('message', {content: `<span class="text-primary">${msg.name}</span> 加入群聊`})
		}
	});

	socket.on('getAllMessage', () => {
		Message.find({}).sort({createAt: -1}).limit(20).exec(function (err, messages) {
			messages.reverse();
			socket.emit('allMessages', messages);
		});
	});

	socket.on('join', (room) => {
		if (curRoom) {
			socket.leave(curRoom);
		}
		socket.join(room);
		curRoom = room;
		socket.emit('joined', room);
	});

	socket.on('revoke', (id) => {
		Message.remove({id}, () => {
			io.emit('revoked', id);
		})
	});
});

server.listen(12138);