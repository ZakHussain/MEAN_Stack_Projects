var mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
	name		: String, 
	_topics		: [{type:mongoose.Schema.Types.ObjectId, ref: 'topics'}],
	_answers	: [{type:mongoose.Schema.Types.ObjectId, ref: 'posts'}]
}, {timestamps  : true});

mongoose.model('users', userSchema); 