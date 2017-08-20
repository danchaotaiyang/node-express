'use strict';

let files = [
	{name: '1.txt', content: '1'},
	{name: '2.txt', content: '2'},
	{name: '3.txt', content: '3'}
];

let file = require('fs');
let async = require('async');

async.forEach(files, (item, cb) => {
	file.writeFile(item.name, item.content, cb);
}, err => {
	console.log('全部写入完毕');
});
