'use strict';

let ware1 = (req, res, next) => {
	setTimeout(function () {
		console.log(1);
		next();
	}, 3000);
};

let ware2 = (req, res, next) => {
	setTimeout(function () {
		console.log(2);
		next();
	}, 2000);
};

let wares = [ware1, ware2];

// for (let i = 0; i < wares.length; i++) {
// 	wares[i]();
// }
let index = 0;

function next() {
	console.log(index);
	let ware = wares[index++];
	ware(null, null, next);
}

next();

