'use strict';

let express = require('express');

let router = express.Router();

// router.use(function (req, res, next) {
// 	res.setHeader('Content-Type', 'text/plan;charset=utf-8');
// 	next();
// });

router.get('/', function (req, res) {
	res.send('八宝粥 & 皮蛋瘦肉粥');
});

router.get('/eight', function (req, res) {
	res.send('八宝粥');
});

router.get('/egg', function (req, res) {
	res.send('皮蛋瘦肉粥');
});

module.exports = router;
