//Controllers definition
weatherApp.controller('homeCtrl', ['$scope', '$location', '$city', function ($scope, $location, $city) {
	$scope.cityName = $city.cityName;

	$scope.$watch('cityName', function () {
		$city.cityName = $scope.cityName;
	});

	$scope.submit = function () {
		$location.path('/forecast');
	};
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', '$city', function ($scope, $resource, $routeParams, $city) {
	var appId = 'd7e06782f4458fccb0e3007d6587cc41';

	$scope.cityName = $city.cityName;
	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
	$scope.weatherResults = $scope.weatherAPI.get({ q: $scope.cityName, cnt: $scope.days, APPID: appId, units: 'metric' });

	$scope.roundDegree = function (deg) {
		return Math.round(deg);
	}

	$scope.getDate = function (time) {
		return new Date(time * 1000);
	}
}]);