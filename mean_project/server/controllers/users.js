console.log('controllers, CONNECTION: ON');
var mongoose = require('mongoose'); 
var User = mongoose.model('users'); 

function UsersController(){
	this.session = function(req, res){
		if (!req.session.userId) return res.send({error : 'not_logged_in'});
		return res.send({ userId : req.session.userId, name : req.session.name });
	}
	this.index = function(req, res){
		User.find(function(err, users){
			console.log(users);
			if(err){
				return res.send(err); 
			}
			else{
				res.send(users)
			}
		})
	}
	this.login = function(req, res) {
		if(!req.body.name) return res.send({error : 'no_name_in_body'}); 
		User.create(req.body, function(err, newUser){
			if(err){
				return User.findOne({name : req.body.name }, function(err, existingUser){
					if(err){
					}
					else{
					req.session.name = existingUser.name; 
					req.session.userId = existingUser._id; 
					return res.send(existingUser); 
					}
				})
			}
			req.session.name = newUser.name; 
			req.session.userId = newUser._id; 
			return res.send(newUser);
		})
	}
}
module.exports = new UsersController();



