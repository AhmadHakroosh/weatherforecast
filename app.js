//Main application module
angular.module('weatherApp', ['ngRoute', 'ngResource'])

//Routing configuration
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'pages/home.html',
			controller: 'homeCtrl'
		}).
		when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastCtrl'
		});
}])

//Controllers definition
.controller('homeCtrl', ['$scope', function ($scope) {
	
}])

.controller('forecastCtrl', ['$scope', function ($scope) {
	
}])