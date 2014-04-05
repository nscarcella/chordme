'use strict';

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should ....', inject(function($controller, $rootScope) {
    var myCtrl1 = $controller('SongList',{$scope: $rootScope});
    expect(myCtrl1).toBeDefined();
  }));
});