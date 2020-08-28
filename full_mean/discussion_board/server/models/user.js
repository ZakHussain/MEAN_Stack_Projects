var mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
	name		: String, 
	_topics		: [{type:mongoose.Schema.Types.ObjectId, ref:'topics'}],
	_answers	: [{type:mongoose.Schema.Types.ObjectId, ref:'answers'}]
}, {timestamps	: true});

mongoose.model('users', userSchema);

// console.log('*******')
// console.log(mongoose);
// console.log('********')