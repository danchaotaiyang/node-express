'use strict';

let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
	let success = req.session.success;
	// res.clearCookie('success');
	res.render('index', {title: '欢迎光临登录测试系统', username: req.session.username, success});
});

module.exports = router;
