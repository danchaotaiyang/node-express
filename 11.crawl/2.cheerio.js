'use strict';

let html =
`<li class="conLi conLiji">
	<em style="width:100px;text-align:left;padding-left:5px;">芹菜</em>
	<em style="width:80px;">0.60</em>
	<em style="width:80px;">0.80</em>
	<em style="width:80px;">1.00</em>
	<em style="width:80px;">普通</em>
	<em style="width:80px;">斤</em>
	<em style="width:106px;">2017-08-19</em>
	<em style="width:60px;">&nbsp;</em>
</li>`;

let cheerio = require('cheerio');


let $ = cheerio.load(html);

$('.conLi em').each((index, item) => {
	let $this = $(item);
	// console.log($this.text());
});

