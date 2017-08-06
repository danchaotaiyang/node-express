'use strict';

let exp = require('express');
let url = require('url');

let app = exp();

app.get('/user/:uid', function (req, res) {
	res.setHeader('Content-type', 'text/plan;charset=utf8');
	console.log(req.method);
	console.log(req.url);
	// console.log(url.parse(req.url, true).pathname);
	// console.log(url.parse(req.url, true).query);
	console.log(req.path);
	console.log(req.query);
	console.log(req.headers);
	console.log(req.params);
	res.end('蛋炒太阳')
});

app.listen(12138);
