//Services
weatherApp.service('$city', function () {
	this.cityName = 'New York, NY';
});

weatherApp.service('$weatherData', ['$resource', function ($resource) {
	return {
		getData: function (cityName, days, appId) {
			var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
			return weatherAPI.get({ q: cityName, cnt: days, APPID: appId, units: 'metric' });
		}
	};
}]);