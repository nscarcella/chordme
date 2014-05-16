'use strict';

describe('songList.controllers', function(){
  beforeEach(module('songList.controllers'));

  it('should ....', inject(function($controller, $rootScope) {
    console.log("LALALALA CORRI UN TEST DE SONGLIST, NENA");
    
    var myCtrl1 = $controller('SongList',{$scope: $rootScope});
    expect(myCtrl1).toBeDefined();
  }));
}); 
 
