module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/styles/main.css': 'public/styles/scss/include.scss'
				}
			}
		},
		jshint: {
	    	      all: ['Gruntfile.js', 'public/**/*.js']
	  	},
		watch: {
			gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
            	files: ['public/styles/scss/*.scss'],
            	tasks: ['sass']
            },
            css: {
            	files: ['public/styles/*.css'],
            	options: {
            		livereload: true
            	}
            },
            js: {
            	files: ['public/**/*.js'],
            	tasks: ['jshint'],
            	options: {
            		livereload: true
            	}
            },
            html: {
            	files: ['public/*.html'],
            	options: {
            		livereload: true
            	}
            }
		}
	});

	grunt.registerTask("default", ["watch"]);

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
};