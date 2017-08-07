'use strict';

let express = require('express');
let path = require('path');

let cokieParser = require('cookie-parser');

let index = require('./router/index');
let user = require('./router/user');

let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'html');
app.set('views', path.resolve('view'));
app.engine('html', require('ejs').__express);
app.use(express.static(path.resolve('../node_modules')));
app.use(cokieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/user', user);

app.listen(80);
