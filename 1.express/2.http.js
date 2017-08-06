'use strict';

let http = require('http');

http
	.createServer(function (req, res) {
		let method = req.method,
		    url    = req.url;

		if (method == 'GET' && url == '/') {
			res.end('home');
		} else if (method == 'GET' && url == '/user') {
			res.end('user');
		} else {
			res.end(`Cannot ${method} ${url}`);
		}
	})
	.listen(12139);
