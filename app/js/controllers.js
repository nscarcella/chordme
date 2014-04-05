'use strict';

angular.module('myApp.controllers',[])
  .controller('SongList', ["$scope", function($scope) {
    $scope.mi = {name:"E", variations: [{base: 1, positions:[null,2,2,1,0,0]},{base: 3, positions:[0,3,2,1,0,0]}]};
    $scope.fa = {name:"Fm7", variations: [{base: 1, positions:[0,0,2,2,2,0]}]};
  }]);
