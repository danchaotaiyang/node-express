'use strict';

let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

app.get('/write', function (req, res) {
	res.cookie('name', '蛋炒太阳', {
		path: '/read'
	});
	res.send('ok')
});
app.get('/read', function (req, res) {

	res.json(req.cookies);

});
app.get('/read2', function (req, res) {

	res.json(req.cookies);

});
app.listen(80);
