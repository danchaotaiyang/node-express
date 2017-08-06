'use strict';

let express = require('express');
let path = require('path');
let fs = require('fs');

let app = express();

app.use(express.static(path.resolve('asset')));

app.get('/', function (req, res) {
	res.sendFile('./index.html', {root: __dirname});
	// res.send('home');
});

app.listen(80);
