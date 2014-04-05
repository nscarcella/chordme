'use strict';

angular.module('myApp.controllers',[])
  .controller('SongList', ["$scope", function($scope) {
    $scope.mi = {name:"E", base: 1, positions: [null,2,2,1,0,0]};
    $scope.fa = {name:"Fm7", base: 1, positions: [0,0,2,2,2,0]};
  }]);
