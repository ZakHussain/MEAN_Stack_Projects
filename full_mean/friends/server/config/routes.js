console.log('config routes')
var friends = require('../controllers/friends.js')

//what is friends referencing
module.exports = function(app){
	app.get('/friends', friends.index);
	app.get('/friends/:id', friends.show);
	app.post('/friends', friends.create);
	app.put('/friends/:_id', friends.update);
	app.delete('/friends/:_id', friends.delete);
}