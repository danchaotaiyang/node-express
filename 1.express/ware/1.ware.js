'use strict';

let express = require('express');

let app = express();

app.use(function (req, res, next) {
	console.log(`${req.method} ${req.path}`);
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	next();
});

app.get('/order', function (req, res) {
	res.end('我的订单');
});

app.get('/dou', function (req, res) {
	res.end('我的京豆');
});

app.listen(12138);


