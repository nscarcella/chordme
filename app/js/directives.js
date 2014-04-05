'use strict';

var fretCount = 5;
var stringCount = 6;
var stringDistance = 16 * 0.5;
var fretDistance = 16 * 0.75;
var airMargin = 5;

angular.module('myApp.directives', [])
  .directive('cmChord', function(){ return {
    restrict: 'AE',
    templateUrl: 'partials/chord.html',
    scope: {
      key:'='
    },
    link: function(scope) {
      var stringCoord = function(string){ return stringDistance + stringDistance * string };
      var fretCoord = function(fret){ return scope.pressSize * 2 + airMargin + fretDistance * fret };

      scope.pressSize = Math.min(fretDistance,stringDistance) / 4 + 1;
      scope.width = stringDistance + stringCount * stringDistance;
      scope.height = scope.pressSize * 3 + airMargin + (fretCount -1) * fretDistance;
      scope.baseFretX = stringCoord(0) - stringDistance / 2;
      scope.baseFretY = fretCoord(0) + fretDistance / 2;
      
      scope.lines = [];
      for(var j=0; j<fretCount; j++) scope.lines.push({x1:stringCoord(0), y1:fretCoord(j), x2:stringCoord(stringCount - 1), y2:fretCoord(j)});
      for(var i=0; i<stringCount; i++) scope.lines.push({x1:stringCoord(i), y1:fretCoord(0), x2:stringCoord(i), y2:fretCoord(fretCount - 1)});
      
      scope.coords = [];
      scope.$watch("currentVariation",function(newValue){
        for(var i=0; i<stringCount; i++) {
          var position = scope.key.variations[scope.currentVariation].positions[i];
          scope.coords[i] = {
            pressed: position != null,
            x: stringCoord(i),
            y: position > 0 ? fretCoord(position) - fretDistance / 2 : scope.pressSize
          };
        }
      });
      scope.currentVariation = 0;
      
      scope.setNextVariation = function(){ if(scope.currentVariation + 1 < scope.key.variations.length) scope.currentVariation++; }
      scope.setPreviousVariation = function(){ if(scope.currentVariation > 0) scope.currentVariation--; }
    }
  }});