'use strict';

var stringCount = 6;
var defaultFretCount = 5;
var defaultStringDistance = 16;
var defaultFretDistance = 20;
var defaultAirMargin = 5;

angular.module('myApp.directives', [])
  .directive('cmChord', function(){ return {
    restrict: 'AE',
    templateUrl: 'partials/chord.html',
    scope: {
      note:'=',
      fretCount:'=?',
      stringDistance:'=?',
      fretDistance:'=?',
      airMargin:'=?'
    },
    link: function(scope) {
      scope.fretCount = scope.fretCount || defaultFretCount;
      scope.stringDistance = scope.stringDistance || defaultStringDistance;
      scope.fretDistance = scope.fretDistance || defaultFretDistance;
      scope.airMargin = scope.airMargin || defaultAirMargin;
      
      var stringCoord = function(string){ return scope.stringDistance + scope.stringDistance * (stringCount - 1 - string) };
      var fretCoord = function(fret){ return scope.pressSize * 2 + scope.airMargin + scope.fretDistance * fret };

      scope.pressSize = Math.min(scope.fretDistance,scope.stringDistance) / 4 + 1;
      scope.width = scope.stringDistance + stringCount * scope.stringDistance;
      scope.height = scope.pressSize * 3 + scope.airMargin + (scope.fretCount -1) * scope.fretDistance;
      scope.baseFretX = stringCoord(5) - scope.stringDistance / 2;
      scope.baseFretY = fretCoord(0) + scope.fretDistance / 2;
      
      scope.lines = [];
      for(var j=0; j<scope.fretCount; j++) scope.lines.push({x1:stringCoord(0), y1:fretCoord(j), x2:stringCoord(stringCount - 1), y2:fretCoord(j)});
      for(var i=0; i<stringCount; i++) scope.lines.push({x1:stringCoord(i), y1:fretCoord(0), x2:stringCoord(i), y2:fretCoord(scope.fretCount - 1)});
      
      scope.coords = [];
      scope.$watch("currentVariation",function(currentVariation){
        var pressed = scope.note.variations[currentVariation].filter(function(e){return e > 0});
        var max = Math.max.apply(null, pressed);
        var min = Math.min.apply(null, pressed);
        scope.base = max < scope.fretCount ? 1 : min;
        
        for(var i=0; i<stringCount; i++) {
          var position = scope.note.variations[currentVariation][i];
          scope.coords[i] = {
            pressed: position != null,
            x: stringCoord(i),
            y: position > 0 ? fretCoord(position - scope.base + 1) - scope.fretDistance / 2 : scope.pressSize
          };
        }
      });
      scope.currentVariation = 0;
      
      scope.setNextVariation = function(){ if(scope.currentVariation + 1 < scope.note.variations.length) scope.currentVariation++; }
      scope.setPreviousVariation = function(){ if(scope.currentVariation > 0) scope.currentVariation--; }
    }
  }});