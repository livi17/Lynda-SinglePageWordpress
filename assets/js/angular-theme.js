var wpApp = new angular.module('wpAngularTheme', ['ui.router', 'ngResource']);

wpApp.factory('Post', function($resource){
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
});