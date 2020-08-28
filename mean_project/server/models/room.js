var mongoose = require('mongoose'); 

var roomSchema = new mongoose.Schema({
	name 		: String, 
	_building 	: {type : mongoose.Schema.Types.ObjectId, ref:'buildings'},
}, {timestamps	: true})

mongoose.model('rooms', roomSchema); 