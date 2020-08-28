var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 

//require models
require('./server/config/mongoose.js');

//require routes___________________
var routes_setter = require('./server/config/routes.js'); 
routes_setter(app);

//______Port______
app.listen(8000, function(){
	console.log("listening on port 8000"); 
})