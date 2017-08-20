'use strict';
let {start} = require('./tasks/main');
let {Movie} = require('./dbcrawl');
let express = require('express');
let app = express();

app.get('/', (req, res) => {
	Movie.find({}, (err, movies) => {
		res.json(movies);
	});
});

app.listen(80);

let CronJob = require('cron').CronJob;
let job = new CronJob('0 0 * * * *', start);

job.start();

