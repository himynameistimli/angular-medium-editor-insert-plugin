'use strict';

module.exports = function(grunt) {

  // Configurable paths
  var config = {
    livereload: 35729,
    src: 'src',
    dist: 'dist'
  };

  // Livereload setup
  var lrSnippet = require('connect-livereload')({port: config.livereload});
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  var pkg = grunt.file.readJSON('./package.json')

  // Load all grunt tasks automatically

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Project configuration
  grunt.initConfig({
    pkg: pkg,
    config: config,
    meta: {
      banner: '/**\n' +
      ' * <%= pkg.name %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.homepage %>\n' +
      ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
      ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
      ' */\n'
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    bump: {
        options: {
            files: [
                "package.json",
                "bower.json",
            ],
            commit: true,
            commitMessage: 'chore(release): v%VERSION%',
            commitFiles: [
                "package.json",
                "bower.json",
            ],
            createTag: false,
            tagName: 'v%VERISION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            pustTo: 'origin'
        }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        // tasks: ['jshint:gruntfile']
      },
      app: {
        files: [
          '<%= config.src %>/{,*/}*.html',
          '{.tmp,<%= config.src %>}/{,*/}*.css',
          '{.tmp,<%= config.src %>}/{,*/}*.js'
        ],
        tasks: ['clean:dist','ngAnnotate:dist','uglify:dist'],
        options: {
          livereload: config.livereload
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0' // Change this to '0.0.0.0' to access the server from outside.
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, config.src)
            ];
          }
        }
      }
    },
    sass: {
      options: {
        // dumpLineNumbers: 'all',
        paths: ['<%= config.src %>']
      },
      dist: {
        files: {
          '<%= config.src %>/<%= config.name %>.css': '<%= config.src %>/<%= config.name %>.scss'
        }
      }
    },
    jshint: {
      // gruntfile: {
      //   options: {
      //     jshintrc: '.jshintrc'
      //   },
      //   src: 'Gruntfile.js'
      // },
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['<%= config.src %>/{,*/}*.js']
      }
    },
    ngAnnotate: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= config.src %>/<%= pkg.name %>.js'],
        dest: '<%= config.dist %>/<%= pkg.name %>.js'
      }
      // dist: {
      //   files: {
      //     '/.js': '/.js'
      //   }
      // }
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= config.src %>/<%= pkg.name %>.js'],
        dest: '<%= config.dist %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= config.dist %>/<%= pkg.name %>.min.js'
      }
    }
  });


  grunt.registerTask('build', [
    'clean:dist',
    'ngAnnotate:dist',
    'uglify:dist',
    'watch',
  ]);

  grunt.registerTask('default', ['build']);

};