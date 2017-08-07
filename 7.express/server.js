'use strict';

let path = require('path');

let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');

let index = require('./router/index');
let user = require('./router/user');

let app = express();

app.set('view engine', 'html');
app.set('views', path.resolve('view'));
app.engine('html', require('ejs').__express);
app.use(express.static(path.resolve('../node_modules')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'sign'
}));

app.use('/', index);
app.use('/user', user);

app.listen(80);
