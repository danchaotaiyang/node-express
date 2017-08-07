'use strict';

let express = require('express');
let session = require('express-session');

let app = express();
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'dcty'
}));
app.get('/write', function (req, res) {
	req.session.name = 'dcty';
	res.send('OK');
});
app.get('/read', function (req, res) {
	res.send(req.session.name);
});
app.listen(80);

