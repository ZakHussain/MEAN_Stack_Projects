var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/index', {
			templateUrl: '/assets/partials/index.html',
			controller: 'indexController'
		})
		.when('/new', {
			templateUrl: '/assets/partials/new.html',
			controller: 'newController'
		})
		.when('/edit/:_id', {
			templateUrl: '/assets/partials/edit.html',
			controller: 'editController'
		})
		.when('/show/:_id',{
			templateUrl: '/assets/partials/show.html', 
			controller: 'showController'
		})
		.otherwise({
			redirectTo: '/index'
		})

});