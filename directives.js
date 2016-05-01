//Directives
weatherApp.directive('weatherResult', function() {
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherResult.html',
		replace: true,
		scope: {
			weatherDay: '=',
			roundDegree: '&',
			getDate: '&',
			dateFormat: '@'
		}
	};
});