var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var path = require('path'); 
var mongoose = require('mongoose'); 
app.use(bodyParser.urlencoded({ extended: true})); 
app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb://localhost/mongoose');

app.get('/', function(request, response){
	//this is where we will retrieve the users from the database and include them into the view page we will be rendering
	response.render('index'); 
})
//Add user request
app.post('/users', function(request, response){
	console.log("POST DATA", request.body); 
	//this is where we will add the user from request.body to the database. 
	//create a new User with the name and age corresponding to those from the request.body 
	var user = new User({name: request.body.name, age: request.body.age}); 
	//Try to save that new user to the database(this is the method that actually inserts into the db) and run callback  with an error(if any) from the operation.
	user.save(function(err){
		if(err){
			console.log('something went wrong'); 
		}
		else{
			console.log('successfully added a user!'); 
			response.redirect('/'); 
		}
	})
})
//create mongoose schemas: 
// var UserSchema = new mongoose.Schema({
// 	name:String, 
// 	age: Number
// })
mongoose.model('User', UserSchema); // we are setting thise Schema in our Models as 'User'
var User = mongoose.model('User')// We are retrieving this Schema from out Models, named 'User'

app.listen(8000, function(){
	console.log("listening on port 8000"); 
})













