var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var path = require('path');
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;  
app.use(bodyParser.urlencoded({extended:true})); 
app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb://localhost/mongoose_message_board'); 

//________Schemas____________
var UserMessage = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1, maxlength: 20},
	message: {type: String, required: true, minlength: 5, maxlength: 200},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var UserComment = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1, maxlength: 20},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	comment: {type: String, required: true } 
}, {timestamps: true }); 


mongoose.model('Message', UserMessage);
mongoose.model('Comment', UserComment);

var Message = mongoose.model('Message'); 
var Comment = mongoose.model('Comment'); 


//__________Routes___________
app.get('/', function(req, res){
	Message.find({}).populate('_comments').exec(function(err, messages){
		if(err){
			res.send("object was not successfully found from database");
		}
		else{
			console.log(messages); 
			res.render('index', {Messages: messages});
		}
	})
})

app.post('/post', function(req, res){
	console.log("Post Data", req.body);
	var message = new Message({name:req.body.name, message:req.body.message}); 
	message.save(function(err){
		if(err){
			// res.send("object was not successfully saved in database");
			res.render('index', {title: 'you have errors!', errors: message.errors})
		}
		else{
			console.log("message object was saved into database"); 
			res.redirect('/');
		}
	})
})

app.post('/message/:_id', function(req, res){
	Message.findOne({_id: req.params._id}, function(err, message){
		var comment = new Comment(req.body); 
		comment._message = message._id; 
		comment.save(function(err){
			message._comments.push(comment);
			message.save(function(err){
				if(err) {
					console.log('Error'); 
				}
				else {
					res.redirect('/');
				}
			})	
		})	
	})

})

//_________Port_______________
app.listen(8000, function(){
	console.log("listening on port 8000"); 
})





