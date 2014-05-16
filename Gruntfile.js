var COMPONENTS_PATH = 'components';
var SOURCE_PATH = 'src';
var MAIN_HTML = 'index.html';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    fileblocks: {
      options: {
        removeFiles: true,
      },
      dev: {
        src: SOURCE_PATH + '/' + MAIN_HTML,
        blocks: {
          'component-code': { cwd: SOURCE_PATH, src: [COMPONENTS_PATH + '/**/*.js', '!**/*.unit.js', '!**/*.e2e.js'] },
          'component-styles': { cwd: SOURCE_PATH, src: COMPONENTS_PATH + '/**/*.css' }
        }
      }
    }
  });
  
  require('load-grunt-tasks')(grunt);  

  grunt.registerTask('default', '', ['fileblocks']);
};