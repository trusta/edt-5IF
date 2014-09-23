'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Watch Config
        watch: {
            express: {
                files: ['app.js', '!**/node_modules/**', '!Gruntfile.js', 'config/*.js'],
                tasks: ['jshint:all', 'express:dev'],
                options: {
                    nospawn: true // Without this option specified express won't be reloaded
                }
            }
        },

        // Clean Config
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*',
                        '!dist/.git*'
                    ]
                }]
            },
            server: ['.tmp']
        },

        // Hint Config
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app.js',
                'config/*.js'
            ]
        },

        // Express Config
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        }
    });

    // Register Tasks
    // Workon
    grunt.registerTask('serve', 'Start working on this project.', [
        'jshint',
        'express:dev',
        'watch'
    ]);


    // Restart
    grunt.registerTask('restart', 'Restart the server.', [
        'express:dev',
        'watch'
    ]);

};
