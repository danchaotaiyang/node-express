'use strict';

let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/dbcrawl');

let MovieSchema = new mongoose.Schema({
	name: String,
	url: String,
	createAt: {type: Date, default: Date.now}
});

exports.Movie = conn.model('Movie', MovieSchema);
