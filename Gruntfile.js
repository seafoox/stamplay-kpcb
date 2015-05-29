module.exports = function (grunt) {
  'use strict';

  require('./grunt-task/build-task')(grunt);


  require('load-grunt-config')(grunt, {
    init: true,
    config: {
      pkg: grunt.file.readJSON('package.json')
    }
  });
};



/*global module:false*/
// module.exports = function (grunt) {

//   // Project configuration.


//   // These plugins provide necessary tasks.
//   grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-sass');

//   // Default task.
//   grunt.registerTask('default', ['sass', 'concat', 'uglify']);

// };