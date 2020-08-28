console.log('routes, CONNECTION: ON')
var path = require('path');
var users = require(path.join(__dirname, '..', 'controllers', 'users.js'));
var buildings = require(path.join(__dirname, '..', 'controllers', 'buildings.js'));
var rooms = require(path.join(__dirname, '..', 'controllers', 'rooms.js'));
// var serial_comm = require(path.join(__dirname, '..', '..', 'serial_comm', 'main.js'));
module.exports = function(app){
	//users endpoints
	app.get('/users/session', users.session);
	app.get('/users', users.index); 
	app.post('/users', users.login); 
	//buildings endpoints
	app.get('/buildings', buildings.index);
	app.post('/buildings', buildings.create);
	//rooms endpoints
	app.get('/rooms', rooms.index);
	app.post('/rooms', rooms.create);
	//serial comm

}