var app = angular.module('discussion', ['ngRoute']); 

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html', 
			controller: 'userController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html', 
			controller: 'topicController'
		})
		.when('/topic/:_id', {
			templateUrl: 'partials/topic.html'
		})
		.when('/user/:_id', {
			templateUrl: 'partials/user.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})