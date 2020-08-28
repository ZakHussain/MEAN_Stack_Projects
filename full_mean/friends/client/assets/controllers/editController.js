app.controller('editController', ['$scope','friendsFactory','$location', '$routeParams',function($scope, friendsFactory, $location, $routeParams) {
  var friend = [];
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
  	var id = $routeParams._id;
	friendsFactory.getFriend(id, function(returnedData){
		$scope.friend = returnedData;
		console.log($scope.friend);
		});
	
	$scope.update = function(updateFriend){
		// console.log(updateFriend);
		friendsFactory.update(id, updateFriend);
		$location.url('/index');
	};

  /*
    <-- $scope because we need to access this method 
    with ng-submit or ng-click. 
     Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);