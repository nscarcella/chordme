'use strict';

angular.module('songList.controllers',[])
  .controller('SongList', ["$scope", function($scope) {
    $scope.mi = {name:"E", variations: [[null,2,2,1,0,0],[0,3,2,1,0,0]]};
    $scope.fa = {name:"Fm7", variations: [[0,0,2,2,2,0]]};
    $scope.la =   {
      name: 'A',
      variations:[[0,2,2,2,0,null],[5,5,6,7,7,5],[9,10,9,11,12,null]]
    };

    $scope.songs = {
    	yesterday: "[F]Yesterday [Emi]all my [A7]troubles seemed so [Dmi]far away [Dmi/C]\n[Bb]now it [C]looks as though they're [F]here to stay\n[C/E]oh [Dmi]I beli[G7]eve in [Bb]yester[F]day."
	};
  }]);
