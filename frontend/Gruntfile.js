(function () {
   'use strict';
}());
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Begin Sass Plugin
          dist: {
            files: {
              '../public/css/app.css': 'scss/app.scss'
            }
          }
        },
        watch: {
            files: ['scss/**/*.scss'],
            tasks: ['sass']
        },
        concat: {
          js: {
            src: ['js/jquery.min.js',
                  'js/bootstrap.min.js'
            ],
            dest: '../public/js/main.js',
          },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass', 'watch', 'js']);
    grunt.registerTask('js', ['concat']);

};
