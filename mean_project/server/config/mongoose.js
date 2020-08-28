var mongoose = require('mongoose'); 
var path = require('path'); 
var fs = require('fs'); 

mongoose.connect("mongodb://localhost/factory", function(err){
	console.log('mongo db CONNECTION: ON');
})

var models_path = path.join(__dirname, '..', 'models'); 

fs.readdirSync(models_path).forEach(function(file){
	require(models_path +'/'+file); 
})