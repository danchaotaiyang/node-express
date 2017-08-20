'use strict';
let mongoose = require('mongoose');

let {Movie} = require('../dbcrawl');

let write = (movies, cb) => {
	Movie.create(movies, cb);
};

module.exports = write;
