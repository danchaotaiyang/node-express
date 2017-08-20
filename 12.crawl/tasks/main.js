'use strict';

let {Movie} = require('../dbcrawl');
let read = require('./read');
let write = require('./write');
let async = require('async');

let logger = require('debug')('crawl: main');

const url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let start = () => {
	async.waterfall([
		cb => {
			Movie.remove({}, cb);
		},
		(data, cb) => {
			read(url, cb);
		},
		(movies, cb) => {
			write(movies, cb);
		}
	], (err, result) => {
		if (err) {
			console.log(err);
			return false;
		}
		logger('任务全部执行');
		process.exit(0);
	});
};

start();