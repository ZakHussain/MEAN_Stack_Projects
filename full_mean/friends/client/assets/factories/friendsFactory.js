
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;
    //_this will allow me to create attributes inside the friendsFactory 
    //from within a function within a method. 
    //look at like 17/18 expample
    // -->> this will be created -> this.loh = data.data 

    // console.log(_this)                   
    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log(returned_data.data);
        friends.push({first_name: returned_data.first_name, last_name: returned_data.last_name, birthday: returned_data.birthday})
        // -->> this is where i can create a 
        //method within friendsFactory 
        // >>  _this.loh = data.data; 
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, updateFriend){ 
      $http.put('/friends/'+id, updateFriend).then(function(updated_data){
      	console.log(updated_data);
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      })
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.remove = function(id, index){
        $http.delete('/friends/'+id).then(function(index){
        	friends.splice(index,1);
        	console.log('i spliced that mofo')
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    //this will get a specific friend
    this.getFriend = function(id, callback){
    	friend = [];
    	console.log('1' + id)
    	console.log(friends.length);
    	for(var i=0; i<friends.length; i++){
    		console.log('2')
    		if(friends[i]._id === id){
    			console.log('3')
    			friend.push(friends[i]);
    			return callback(friend);
    		}
    	}
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}])  
