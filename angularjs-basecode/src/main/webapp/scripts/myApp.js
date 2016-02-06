(function() {
	function config($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'views/list.html',
			controllerAs : 'sc',
			controller : 'SomeController'
		});
	}

	angular.module("myApp", [ 'ngRoute', ]).config(config);
})();