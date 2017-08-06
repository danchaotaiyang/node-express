'use strict';

let express = require('express');

let app = express();

let users = [];

app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	next();
});

app.get('/users/add', function (req, res) {
	users.push({
		uid: users.length ? users[users.length - 1].uid + 1 : 1,
		name: req.query.name
	});
	res.send(users);
});

app.get('/users', function (req, res) {
	// res.end(JSON.stringify(users));
	res.send(users)
});

app.get('/users/:uid', function (req, res) {
	let user = users.find((item) => {
		return item.uid == req.params.uid;
	});
	res.send(user);

});

app.listen(12138);
