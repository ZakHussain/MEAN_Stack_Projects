var path = require('path'); 
var users = require(path.join(__dirname, '..', 'controllers', 'users.js')); 
var topics = require(path.join(__dirname, '..', 'controllers', 'topics.js')); 
var answers = require(path.join(__dirname, '..', 'controllers', 'answers.js'));

module.exports = function(app){
	
	//users endpoints
	app.get('/users/session', users.session);
	app.get('/users', users.index);
	app.post('/users', users.login);
	//topics endpoints
	//answers endpoints
}