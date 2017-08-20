'use strict';

let async = require('async');

console.time('cost');

async.waterfall([
	(cb) => {
		setTimeout(() => {
			console.log(1);
			cb(null, '1');
		}, 2000);
	},
	(data, cb) => {
		setTimeout(() => {
			console.log(2 + data);
			cb(null, '2' + data);
		}, 3000);
	},
	(data, cb) => {
		setTimeout(() => {
			console.log(3 + data);
			cb(null, '3' + data);
		}, 1000);
	}
], (err, result) => {
	console.log(err);
	console.log(result);
	console.timeEnd('cost');
});
