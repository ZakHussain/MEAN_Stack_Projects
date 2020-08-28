console.log('models');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: String, 
	last_name: String, 
	birthday: Date
})

mongoose.model('Friend', FriendSchema);