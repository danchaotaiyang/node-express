'use strict';

let express = require('express');
let parser = require('cookie-parser');

let app = express();

app.use(parser());

app.get('/', function (req, res) {
	res.send(`欢迎访问`);
});

app.get('/visit', function (req, res) {
	let count = parseInt(req.cookies.count);
	count = isNaN(count) ? 1 : count + 1;
	console.log(count)
	res.cookie('count', count);
	res.send(`欢迎第${count}次访问`);
});

app.listen(80);
