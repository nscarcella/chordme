'use strict';

var stringCoord = function(string){return 32 + 16 * string};
var fretCoord = function(fret){return 28 + 16 * fret};

angular.module('myApp.directives', [])
  .directive('cmChord', function(){ return {
    restrict: 'AE',
    templateUrl: 'partials/chord.html',
    scope: {
      key:'='
    },
    controller: function($scope){
      $scope.lines = [];
      for(var j=0; j<6; j++) $scope.lines.push({x1:stringCoord(0), y1:fretCoord(j), x2:stringCoord(5), y2:fretCoord(j)});
      for(var i=0; i<6; i++) $scope.lines.push({x1:stringCoord(i), y1:fretCoord(0), x2:stringCoord(i), y2:fretCoord(5)});
    },
    link: function(scope) {
      scope.coords = [0,1,2,3,4,5].map(function(i){return {
        pressed: scope.key.positions[i] != null,
        x: stringCoord(i),
        y: fretCoord(scope.key.positions[i])
      }});
    }
  }});