/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    'gh-pages': {
       options: {
         base: '_site',
         branch: 'master'
       },
       src: ['**/*']
     }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
};
