app.controller('buildingController', ['$scope','$location', 'sessionFactory', 'buildingFactory', function($scope, $location, sessionFactory, buildingFactory){
	$scope.building = {};
	$scope.buildings = [];  


	var index = function(){
		buildingFactory.index(function(data){
		$scope.buildings = data;
		})
	}
  //check if session variable is set
	if (!sessionFactory.session) {
		//if not set, see if back end has it set
		sessionFactory.getSession(function(session){
			console.log(session);
		  //if back end does not have it set either, probably means they need to log in
			if (!session) $location.url('/');
		})
	};
	$scope.create = function(newBuilding){
		console.log(newBuilding);
		$scope.building = buildingFactory.create(newBuilding);
		index();
	}
	index();
}])