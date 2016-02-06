(function() {
	'use strict';
	angular.module('myApp').service('SomeService', SomeService);
	SomeService.$inject = [ '$http','$log' ];
	function SomeService($http, $log) {
		var someValue = 1;
		var service = {
			someMethod : someMethod,
			getRecords: getRecords
		};
		return service;

		function someMethod() {
			return someValue + 10;
		}
		
		function getRecords(){
			 return $http.get('http://www.w3schools.com/angular/customers.php')
	            .then(getRecordsComplete)
	            .catch(getRecordsFailed);

	        function getRecordsComplete(response) {
	        	$log.info('XHR Sucess for getRecords.'+ response);
	            return response.data.records;
	        }

	        function getRecordsFailed(error) {
	            $log.error('XHR Failed for getRecords.' + error.data);
	        }
		}
	}
})();