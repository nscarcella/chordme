'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/songs', {templateUrl: 'partials/songList.html', controller: 'SongList'});
  $routeProvider.otherwise({redirectTo: '/songs'});
}]);