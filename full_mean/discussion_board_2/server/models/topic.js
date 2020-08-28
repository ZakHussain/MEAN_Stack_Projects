
var mongoose = require('mongoose'); 

var topicSchema = new mongoose.Schema({
	title		: {type:String, required:true} ,
	description	: {type:String, required:true},
	category	: {type:String, required:true},  
	_user 		: {type:mongoose.Schema.Types.ObjectId, ref:'users', required:true}, 
	_answers	: [{type:mongoose.Schema.Types.ObjectId, ref: 'posts'}]
}, {timestamps  : true});

mongoose.model('topics', topicSchema);