var mongoose = require('mongoose'); 

var answerSchema = new mongoose.Schema({
	message : {type: String, required:true}, 
	upvote : {type: Number, default : 0}, 
	downvote : {type: Number, default : 0}, 
	_user: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
	_topic: {type: mongoose.Schema.Types.ObjectId, ref:'topics'} 
}, {timestamps: true}); 

mongoose.model('answers', answerSchema); 
