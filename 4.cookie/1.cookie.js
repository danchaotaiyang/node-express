'use strict';

let http = require('http');
let url = require('url');



http
	.createServer(function (req, res) {
		let _url= url.parse(req.url, true);
		let {pathname} = _url;
		if (pathname == '/write') {
			res.setHeader('Set-Cookie', 'name=test');
			res.end('write ok');
		} else if (pathname == '/read') {
			console.log(req.headers.cookie);
			res.end('read');
		}
	})
	.listen(80);