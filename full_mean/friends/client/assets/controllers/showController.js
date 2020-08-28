app.controller('showController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory){
	var id = $routeParams._id;
	friendsFactory.getFriend(id, function(returnedData){
		$scope.friend = returnedData;
		console.log($scope.friend);
		});
}])