var mongoose = require('mongoose'); 

var buildingSchema = new mongoose.Schema({
	name	: String, 
	location: String, 
	_user	: {type:mongoose.Schema.Types.ObjectId, ref:'users', require : true}, 
	_rooms	: [{type:mongoose.Schema.Types.ObjectId, ref:'rooms'}]
}, {timestamps : true}); 

mongoose.model('buildings', buildingSchema); 