'use strict';

let express = require('express');

let app = express();

app.get('/', function (req, res) {
	res.end('home');
});

app.get('/user', function (req, res) {
	res.end('user');
});

app.all('*', function (req, res) {
	res.statusCode = 404;
	res.end('404');
});

app.listen(12138);
