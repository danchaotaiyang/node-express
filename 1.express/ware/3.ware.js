'use strict';

let express = require('express');

let app = express();

app.use(function (req, res, next) {
	next();
});

app.get('', function (req, res) {
});

app.listen(12138);
