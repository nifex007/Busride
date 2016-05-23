
<<<<<<< HEAD
var familyControllers = angular.module('familyControllers', []);

familyControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
=======
var meApp = angular.module('meApp', []);

meApp.controller('MyController', function($scope, $http){
>>>>>>> d507d316d04070a0b7629c0eda028290a3b10400
		
	$http.get('js/family_data.json').success(function(data) {

		$scope.family = data;
	});
	
<<<<<<< HEAD
}]);

familyControllers.controller('ViewController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('js/family_data.json').success(function(data){
		$scope.family = data;
		$scope.memberId = $routeParams.memberId;
	});
}]);
=======
});
>>>>>>> d507d316d04070a0b7629c0eda028290a3b10400
