var mongoose = require('mongoose'); 
var topicSchema = new mongoose.Schema({
	title		: String, 
	description	: String, 
	category	: String, 
	_user		: {type : mongoose.Schema.Types.ObjectId, ref:'users', required : true}, 
	_answers	: [{type:mongoose.Schema.Types.ObjectId, ref:'answers'}]
}, {timestamps	: true});

mongoose.model('topics', topicSchema);