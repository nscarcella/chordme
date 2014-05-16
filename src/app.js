'use strict';

angular.module('chordme', ['ngRoute','songList', 'chord', 'lyric'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs', {templateUrl: 'components/songList/songList.html', controller: 'SongList'});
    $routeProvider.otherwise({redirectTo: '/songs'});
  }]);