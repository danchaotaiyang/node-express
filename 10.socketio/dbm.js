'use strict';

let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/dbChatRoom');

let MsgSchema = new mongoose.Schema({
	name: String,
	avatar: String,
	content: String,
	createAt: {type: Date, default: Date.now}
});

exports.Message = conn.model('Message', MsgSchema);