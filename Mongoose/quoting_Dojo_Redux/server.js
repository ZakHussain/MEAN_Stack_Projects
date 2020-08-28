var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var path = require('path');
var mongoose = require('mongoose'); 
app.use(bodyParser.urlencoded({extended:true})); 
app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb://localhost/mongoose_quoting_dojo');


var UserQuotes = new mongoose.Schema({	//here I will create a blueprint of my schema 
	name: String, 
	quote: String
})
mongoose.model('Quote', UserQuotes); 	//here I will set the key of my schema
var Quote = mongoose.model('Quote');	//here I will retrieve this Schema from the models, named Quote

//_________________________________________________________________________________
app.get('/', function(req, res){ 	//here I start working on my routes
	res.render('index'); 
})
app.post('/quotes', function(req, res){	//this is where we will be processing the quotes
	console.log("POST DATA", req.body); 
	var quote = new Quote({name: req.body.name, quote: req.body.quote}); 
	quote.save(function(err){
		if(err){
			res.send('quote was not successfully saved to database ~server.js /quotes'); 
		}
		else{
			console.log("successfully added quote from form");
			res.redirect('/'); 
		}
	})
})
app.get('/quotes', function( req, res){ //this is where I will pass in object to be rendered in quotes
	Quote.find({}, function(err, quotes){
		if(err){
			response.send("your quote was not found");
		}
		else{
			res.render('quotes', {Quote: quotes});
			console.log(quotes);
		}
	})
})

//___________________________________________________________________________________
app.listen(8000, function(){
	console.log("listening on port 8000"); 
})
