'use strict';

let {Movie} = require('../dbcrawl');
let read = require('./read');
let write = require('./write');
let async = require('async');

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

	});
};
