gulp = require('gulp')
concat = require('gulp-concat')
webserver = require('gulp-webserver')
jshint = require('gulp-jshint')

src = {
  lib: [
    './bower_components/angular/angular.min.js'
    './bower_components/lodash/dist/lodash.min.js'
  ]
}

gulp.task 'lib', ->
  gulp.src(src.lib)
    .pipe concat('lib.min.js')
    .pipe gulp.dest('./build/')
  return

gulp.task 'server', ->
  gulp.src('build')
    .pipe webserver {
      livereload: true
    };
  return;

gulp.task 'jshint', ->
  gulp.src('*.js')
    .pipe jshint()
    .pipe jshint.reporter('jshint-stylish')

gulp.task 'default', ['lib']
