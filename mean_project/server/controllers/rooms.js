var mongoose = require('mongoose'); 
var Room = mongoose.model('rooms');
var Building = mongoose.model('buildings');
var User = mongoose.model('users'); 

function RoomsController(){
	this.index = function(req, res){
		Room.find(function(err, rooms){
			if(err){
				return res.send(err); 
			}
			else{
				res.send(rooms);
			}
		})
	},
	this.create = function(req, res){
		var room = new Room({name: req.body.name})
		room.save(function(err){
			if(err){
				res.send('room creation failed');
			}
			else{
				console.log('room was saved to database'); 
				Building.update({_id:req.session.userId}, { $push : {_rooms : room._id}}, function(err, updated){
					if(err){
						res.send(err);
					}
					else{
						console.log(updated);
						res.json(room);
					}
				})
			}
		})
	}
}
module.exports = new RoomsController();