app.controller('roomController', ['$scope','$location', 'sessionFactory', 'roomFactory', function($scope, $location, sessionFactory, roomFactory){
	$scope.room = {};
	$scope.rooms = []; 


	var index = function(){
		roomFactory.index(function(data){
			$scope.rooms = data; 
		})
	}
	if (!sessionFactory.session) {
		//if not set, see if back end has it set
		sessionFactory.getSession(function(session){
		  //if back end does not have it set either, probably means they need to log in
			if (!session) $location.url('/');
		})
	};
	$scope.create = function(newRoom){
		$scope.room = roomFactory.create(newRoom);
		index();
	}
	//I have to creat a function that will instanciate the serial_comm
	index();
}])