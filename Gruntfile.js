module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),
      
      babel: {
        options: {
          sourceMap: false
        },
        dist: {
          files: [
            {
                expand: true,
                cwd: 'src/',
                src: '**/*.js',
                dest: 'dist/'
            }
          ]
          
        }
      },

      watch: {
          js: {
              files: ['src/**/*.js'],
              tasks: ['babel']
          }
      }

    

    });
  
    // Load the plugin
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    // grunt.registerTask('default', ['babel']);
  
  };