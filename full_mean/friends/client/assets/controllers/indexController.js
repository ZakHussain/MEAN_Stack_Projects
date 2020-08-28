app.controller('indexController', ['$scope','friendsFactory', function($scope, friendsFactory){
	$scope.friends = []; 
	
	$scope.remove = function(id, num){
		friendsFactory.remove(id, num);
	}
	
	friendsFactory.index(function(data){
		$scope.friends = data; 
		// console.log($scope.friends);
	})
}])