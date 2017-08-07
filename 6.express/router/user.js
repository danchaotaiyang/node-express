'use strict';

let express = require('express');
let router = express.Router();

let userData = [];

router.get('/sign-in', function (req, res) {
	let success = req.cookies.success;
	let error = req.cookies.error;
	res.clearCookie('success');
	res.clearCookie('error');
	res.render('user/sign-in', {title: '欢迎登录测试系统', success, error});
});

router.post('/sign-in', function (req, res) {
	let userInfo = req.body;
	let flag = userData.find(function (item) {
		return item.username == userInfo.username && item.password == userInfo.password;
	});
	if (!flag) {
		res.cookie('error', '请输入正确的用户名和密码');
		res.redirect('back');
		return false;
	}
	res.cookie('success', '登陆成功');
	res.cookie('username', userInfo.username);
	res.redirect('/');
});

router.get('/sign-up', function (req, res) {
	let error = req.cookies.error;
	res.clearCookie('error');
	res.render('user/sign-up', {title: '用户注册', error});
});

router.post('/sign-up', function (req, res) {
	let user = req.body;
	let cur = userData.find(function (item) {
		return item.username == user.username;
	});
	if (!user.username || !user.password) {
		res.cookie('error', '请输入用户名和密码');
		res.redirect('back');
		return false;
	}
	if (cur) {
		res.cookie('error', '此用户名被占用');
		res.redirect('back');
		return false;
	}
	res.cookie('success', '注册成功');
	user.uid = userData.length ? userData[userData.length - 1] + 1 : 1;
	userData.push(user);
	res.redirect('/user/sign-in');
});

module.exports = router;
