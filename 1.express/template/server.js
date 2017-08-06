'use strict';
let path    = require('path');
let express = require('express');

let app = express();

/*
 app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, '/view/index.html'));
 res.sendFile('./view/index.html', {root: __dirname});
 });
 */

let user = [
	{uid: 1, name: '111'},
	{uid: 2, name: '222'}
];

app.set('view engine', 'html');
app.set('views', path.resolve('tmpl'));
app.engine('html', require('ejs').__express);

let title = '首页';

app.get('/', function (req, res) {
	res.render('index', {title, user});
});

app.listen(80);


