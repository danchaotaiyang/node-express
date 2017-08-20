'use strict';

let CronJob = require('cron').CronJob;

let job = new CronJob('* * * * * 1,5', () => {
	console.log(new Date().toLocaleString());
});

job.start();
