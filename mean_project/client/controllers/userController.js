app.controller('userController', ['$scope','$location', 'sessionFactory', 'userFactory', function($scope, $location, sessionFactory, userFactory){
	$scope.user = {}; 
	$scope.showLogin = true; 

	if(sessionFactory.session){
		return $location.url('/buildings'); 
	}
	else{
		sessionFactory.getSession(function(session){
			if(!session) $scope.showLogin = true; 
		});
	}

	$scope.login = function(){
		userFactory.login($scope.user, function(data){
			sessionFactory.getSession(function(session){
				$location.url('/buildings');
			})
		})
	}
}])