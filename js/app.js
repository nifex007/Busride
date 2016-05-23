var meApp = angular.module('meApp', [
	'ngRoute',
	'familyControllers'
	]);

meApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/view/:memberId', {
		templateUrl: 'partials/view.html',
		controller: 'ViewController'
	}).
	otherwise({
		redirecTo: '/'
	});
	
}]);