'use strict';

let Socket = require('ws');

let sk = new Socket('ws://localhost:8080');

sk.on('open', () => {
	console.log('连接成功');
	sk.send('你好');
});

sk.on('message', (msg) => {
	console.log(msg);
});