(function() {
	'use strict';
	angular.module('myApp').controller('SomeController', SomeController);
	SomeController.$inject = [ 'SomeService', '$log' ];
	function SomeController(SomeService, $log) {
		var vm = this;
		vm.title = SomeService.someMethod();
		vm.myData = {
			Name : 'Jose',
			Country : 'Japan',
		};

		activate();

		function activate() {
			return getRecords().then(function() {
				$log.info('Activated Records View');
			});
		}

		function getRecords() {
			return SomeService.getRecords().then(function(data) {
				vm.myData = data;
				$log.info('Controller' + data);
				return vm.myData;
			});
		}
	}

})();