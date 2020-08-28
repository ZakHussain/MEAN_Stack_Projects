var mongoose = require('mongoose'); 
var Building = mongoose.model('buildings');
var User = mongoose.model('users'); 

function BuildingsController(){
	this.index = function(req, res){
		Building.find(function(err, buildings){
			if(err){
				return res.send(err);
			}
			else{
				res.send(buildings);
			}
		})	
	}, 
	this.create = function(req, res){
		var building = new Building({name: req.body.name, location: req.body.location})
		building.save(function(err){
			if(err){
				res.send('building creation failed');
			}
			else{
				console.log("building was saved into the database")
				User.update({_id: req.session.userId}, { $push : {_buildings : building._id}}, function(err, updated){
					if(err){
						res.send(err);
					}
					else{
						console.log(updated);
						res.json(building);
					}				
				})
			}
		})
	}, 
	this.find = function(req, res){
		Building
			.findOne({ _id : req.params._id })
			.populate('_user') 
			.exec(function(err, building){
				if(err) return res.send(err); 

				res.send()
			})
	}
}
module.exports = new BuildingsController();
