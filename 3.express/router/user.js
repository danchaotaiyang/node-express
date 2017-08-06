'use strict';

let express = require('express');
let router = express.Router();

// let userData = require('../data/user.json');
let userData = [];

router.get('/sign-in', function (req, res) {
	// res.send('用户登录');
	res.render('user/sign-in', {title: '欢迎登录测试系统'});
});

router.post('/sign-in', function (req, res) {
	let userInfo = req.body;
	let flag = userData.find(function (item) {
		return item.username == userInfo.username && item.password == userInfo.password;
	});
	res.redirect(flag ? '/' : 'back');
});

router.get('/sign-up', function (req, res) {
	res.render('user/sign-up', {title: '用户注册'});
});

router.post('/sign-up', function (req, res) {
	let user = req.body;
	user.uid = userData.length ? userData[userData.length - 1] + 1 : 1;
	userData.push(user);
	res.redirect('/user/sign-in');

});

module.exports = router;
