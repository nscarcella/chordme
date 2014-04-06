'use strict';

angular.module('myApp.controllers',[])
  .controller('SongList', ["$scope", function($scope) {
    $scope.mi = {name:"E", variations: [[null,2,2,1,0,0],[0,3,2,1,0,0]]};
    $scope.fa = {name:"Fm7", variations: [[0,0,2,2,2,0]]};
    $scope.la =   {
      name: 'A',
      variations:[[0,2,2,2,0,null],[5,5,6,7,7,5],[9,10,9,11,12,null]]
    }
  }]);
