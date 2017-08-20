'use strict';

let request = require('request');
let cheerio = require('cheerio');
let iconv = require('iconv-lite');

let url = 'http://top.baidu.com/category?c=1';
let movies = [];

request({url, encoding: null}, (err, response, body) => {
	if (err && response.statusCode != 200) {
		console.log(err);
		return false;
	}
	let $ = cheerio.load(iconv.decode(body, 'gbk'));
	let boxCont = $('.box-cont');
	boxCont.each((index, item) => {
		let $this = $(item);
		let movie = {
			category: $('.hd h2.title a', $this).text(),
			rankings: []
		};
		$('.bd .item-list li', $this).each((ind, li) => {
			movie.rankings.push({
				order: $('.num-top', li).text() || $('.num-normal', li).text(),
				name: $('.list-title', li).text(),
			});
		});
		movies.push(movie);
		console.log(movie);
	});

	// console.log(movies);
});