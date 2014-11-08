gulp = require('gulp')
concat = require('gulp-concat')

src = {
  lib: [
    './bower_components/angular/angular.min.js'
    './bower_components/lodash/dist/lodash.min.js'
  ]
}

gulp.task 'lib', ->
  gulp.src(src.lib)
    .pipe(concat('lib.min.js'))
    .pipe gulp.dest('./build/')
  return
gulp.task 'default', ['lib']
