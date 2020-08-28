var app = angular.module('B.O.S.S.', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/enter.html',
			controller: 'userController'
		})
		.when('/buildings', {
			templateUrl: '/partials/buildings.html',
			controller: 'buildingController'
		})
		.when('/building_rooms', {
			templateUrl: '/partials/rooms.html',
			controller: 'roomController'
		})
		.otherwise({
			redirectTo: '/'
		})
})
