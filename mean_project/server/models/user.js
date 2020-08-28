console.log('models, CONNECTION: ON')
var mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
	name		: String, 
	_buildings	: [{type:mongoose.Schema.Types.ObjectId, ref:'buildings'}]
}, {timestamps	: true})

mongoose.model('users', userSchema)