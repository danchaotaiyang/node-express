'use strict';
let {Movie} = require('./dbcrawl');
let express = require('express');
let app = express();

app.get('/', (req, res) => {
	Movie.find({}, (err, movies) => {
		res.json(movies);
	});
});

app.listen(80);

