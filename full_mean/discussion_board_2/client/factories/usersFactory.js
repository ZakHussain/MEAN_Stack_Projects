app.factory('userFactory', function($http){
	var factory = {};

	factory.login = function(user, callback){
		$http.post('/users', user).success(function(data){
			callback(data);
		})
	}
	return factory;
})