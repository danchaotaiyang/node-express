'use strict';
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');

let logger = require('debug')('crawl: read');


let read = (url, cb) => {
	request({url, encoding: null}, (err, response,body) => {
		if (err && response.statusCode != 200) {
			console.log(err);
			return false;
		}
		let $ = cheerio.load(iconv.decode(body, 'gbk'));

		let movies = [];

		$('.keyword .list-title').each((index, item) => {
			let $this = $(item);
			logger(`读到电影: ${$this.text()}`);
			movies.push({
				name: $this.text(),
				url: $this.attr('href')
			});
		});
		cb(err, movies);
	});
};

read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1', (err, movies) => {
	// console.log(movies);
});

module.exports = read;