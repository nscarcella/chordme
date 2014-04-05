'use strict';

describe('ChordMe', function() {

  browser.get('index.html');

  it('should automatically redirect to /songs when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/songs");
  });


  describe('songs', function() {

    beforeEach(function() {
      browser.get('#/songs');
    });


    it('should render songs when user navigates to /songs', function() {
      expect(element.all(by.css('[ng-view] div')).first().getText()).toMatch(/Some songs/);
    });

  });

});
