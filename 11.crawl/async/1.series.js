'use strict';

let async = require('async');
console.time('cost');

async.series([
	(cb) => {
		setTimeout(() => {
			console.log(1);
			cb(null, '1');
		}, 2000);
	},
	(cb) => {
		setTimeout(() => {
			console.log(2);
			cb(null, '2');
		}, 3000);
	},
	(cb) => {
		setTimeout(() => {
			console.log(3);
			cb(null, '3');
		}, 1000);
	}
], (err, result) => {
	console.log(err);
	console.log(result);
	console.timeEnd('cost');
});


