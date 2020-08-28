app.controller('topicController', ['$scope', '$location', 'sessionFactory', 'topicFactory', function($scope, $location, sessionFactory, topicFactory){
	$scope.topic= {};
	$scope.topics = []; 
	//check for session
	if(!sessionFactory.session){
		//if not set, see if back end has it set
		sessionFactory.getSession(function(session){
			console.log(session);
			//if back end does not have it set either, means the user is not logged in
			if(!session) $location.url('/'); 
		})
	};
	//index to get all info from topics
	var index = function(){
		topicFactory.index(function(data){
			$scope.topic = data; 
			console.log($scope.topics);
		})
	}
	index();
	//create function
	$scope.create = function(newTopic){
		topicFactory.create(newTopic);
		index();
	}
}])