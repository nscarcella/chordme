'use strict';

angular.module('lyric.directives', [])
  .directive('cmLyric', function(){ return {
    restrict: 'AE',
    templateUrl: 'components/lyric/lyric.html',
    scope: {
      song: '='
    },
    link: function($scope) {
      $scope.lyricLines = $scope.song.split('\n').map(function(line){
        return line.split('[')
          .map(function(section){
            var split = section.split(']');
            return { chord: split[0], lyric: split[1] };
          })
          .filter(function(section){return section.chord || section.lyric;});
      });
    }
  }});