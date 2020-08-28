console.log('controller');
var mongoose = require('mongoose'); 
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function( err, friends){
    	if(err){
    		res.send('index die')
    	}
    	else{
    		// console.log("from index:" + friends);
    		res.json(friends);	
    	}
    })
  };
  this.create = function(req,res){
    var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday})
    console.log(req.body);
    friend.save(function(err){
    	if(err){
        // console.log(err);
    		res.send('create die')
    	}
    	else{
    		console.log("friend was saved in database");
    		res.json(friend);
    	}
    })
  };
  this.update = function(req,res){
    Friend.update({_id: req.params._id}, {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday},
    function(err, message){
      console.log('*************')
      console.log(req.params._id)
      console.log(req.body);
      if(err){
        console.log('update went wrong');
      }
      else{
        Friend.findOne({_id: req.params._id}, function(err, message){
          console.log(message);
        });
        res.json({placeholder:'update'});
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params._id}, function(err, message){
    	console.log(message)
    	res.json({sucess:true})
    })
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController();