'use strict';

let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
	res.render('index', {title: '欢迎光临登录测试系统'});
});

module.exports = router;
