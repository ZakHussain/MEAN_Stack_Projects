app.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory, $location) {

	var index = function(){
        friendsFactory.index(function(returnedData){
          $scope.friends = returnedData;
          // console.log($scope.friends);
        });
	};
	index();

	$scope.create = function(newFriend){
		$scope.friends = friendsFactory.create(newFriend);
		$location.url('/index');	
	}
}]);