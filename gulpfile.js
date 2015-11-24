var gulp = require('gulp')
var plumber = require('gulp-plumber')
var concat = require('gulp-concat')
var babel = require('gulp-babel')

gulp.task('server', function() {
  gulp.src('./source/js/server.jsx')
  .pipe(plumber())
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(concat('server.build.js'))
  .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch(['source/js/*.jsx'], ['server'])
})

gulp.task('default', ['server', 'watch'])
