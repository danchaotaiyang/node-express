'use strict';

let request = require('request');

request('http://www.xinfadi.com.cn/', (err, response, body) => {
	if (err && response.statusCode != 200) {
		console.log('Error:' + err);
		return false;
	}

	console.log(body);

});

