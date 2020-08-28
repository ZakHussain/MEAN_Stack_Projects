var mongoose = require('mongoose'); 
var Topic = mongoose.model('topics');
var User = mongoose.model('users');

function topicsController(){
	this.index = function(req, res) { 
		Topic.find(function(err, topics){
			if(err) return res.send(err); 
			res.send(topics);
		});
	}
	this.create = function(req, res){
		// var topic = new topic({title: req.body.title, description: req.body.description, category: req.body.category})
		console.log('hi')
	}
}
module.exports = new topicsController();