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

weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', '$city', '$weatherData', function ($scope, $routeParams, $city, $weatherData) {
	var appId = 'd7e06782f4458fccb0e3007d6587cc41';

	$scope.cityName = $city.cityName;
	$scope.days = $routeParams.days || '2';

	$scope.weatherResults = $weatherData.getData($scope.cityName, $scope.days, appId);

	$scope.roundDegree = function (deg) {
		return Math.round(deg);
	}

	$scope.getDate = function (time) {
		return new Date(time * 1000);
	}
}]);