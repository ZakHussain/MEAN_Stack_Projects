var mongoose = require('mongoose'); 
var User = mongoose.model('users'); 

function UsersController(){
	this.session = function(req, res){
		if(!req.session.userId) return res.send({err:'not_logged_in'}); 
		return res.send({ userId : req.session.userId, name : req.session.name});
	}, 
	this.login = function(req, res) {
		console.log('in login')
		if(!req.body.name) return res.send({error : 'no_name_in_body'}); 
		console.log('*************')
		console.log(req.body.name);
		console.log('*************')
		User.create(req.body, function(err, newUser){
			if(err){
				console.log('I made it into User.create in err');
				return User.findOne({name : req.body.name }, function(err, existingUser){
					console.log(req.body.name);
					if(err){
						console.log('error inside conditional');
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
	}, 
	this.index = function(req, res){
		User.find(function(err, users){
			if(err) return res.send(err); 
			res.send(users);
		});
	}
}
module.exports = new UsersController();