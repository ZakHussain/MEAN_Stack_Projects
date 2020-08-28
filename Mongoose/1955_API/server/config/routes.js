var people = require('../controllers/1995.js'); 

module.exports = function(app){
	//this will hold my application get/post routes
	app.get('/', function(req, res){
		people.index(req, res);
	})
	app.get('/new/:name/', function(req, res){
		people.add_name(req, res);
	})
	app.get('/remove/:name/', function(req, res){
		people.remove_name(req, res);
	})
	app.get('/:name', function(req, res){
		people.document(req, res);
	})
}