var mongoose = require('mongoose');
var Person = mongoose.model('People');

module.exports = {
	index: function(req, res) {
		//this will find and display json
		Person.find({}, function(err, people){
			if(err){
				res.send('failed to pull names from database');
			}
			else{
				res.json(people);
			}
		})
	}, 
	add_name: function(req, res){
		//this will add name to database
		var name = new Person({name: req.params.name});
		name.save(function(err){
			if(err){
				res.send('Error: name was not saved to Database');
			}
			else{
				console.log('Success: name was saved to Database');
				res.redirect('/');
			}
		})
	}, 
	remove_name: function(req, res){
		//this will remove name from database
		Person.remove({name: req.params.name}, function(err){
			console.log('name successfully removed from Database')
			res.redirect('/'); 
		})
	}, 
	document: function(req, res){
		//this take me to the document on the individual person 
		Person.findOne({name: req.params.name}, function(err, person){
			if(err){
				res.send("person not found"); 
			}
			else{
				console.log('person not found')
				res.json(person);
			}
		})
	}
}






