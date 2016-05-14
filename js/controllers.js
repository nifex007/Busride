
var meApp = angular.module('meApp', []);

meApp.controller('MyController', function($scope, $http){
		
	$http.get('js/family_data.json').success(function(data) {

		$scope.family = data;
	});
	
});
