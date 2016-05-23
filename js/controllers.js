

var familyControllers = angular.module('familyControllers', []);

familyControllers.controller('ListController', ['$scope', '$http', function($scope, $http){

		
	$http.get('js/family_data.json').success(function(data) {

		$scope.family = data;
	});
	

}]);

familyControllers.controller('ViewController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('js/family_data.json').success(function(data){
		$scope.family = data;
		$scope.memberId = $routeParams.memberId;
	});
}]);

