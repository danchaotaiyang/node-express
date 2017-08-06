'use strict';

let http = require('http');
let querystring = require('querystring');

http
	.createServer(function (req, res) {
		let cookie = querystring.parse(req.headers.cookie, ';');
		let count = isNaN(cookie.count) ? 1 : parseInt(cookie.count) + 1;
		res.setHeader('Content-Type', 'text/plan;charset=utf-8');
		res.setHeader('Set-Cookie', 'count=' + count);
		res.end(`欢迎第${count}次访问`);
	})
	.listen(80);
