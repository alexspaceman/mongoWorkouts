var gulp = require('gulp')
var plumber = require('gulp-plumber')
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var stylus = require('gulp-stylus')

gulp.task('server', function() {
  gulp.src('./source/js/server.jsx')
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('server.build.js'))
    .pipe(gulp.dest('./build'))
})

gulp.task('styles', function() {
  gulp.src('./source/styles/*.styl')
    .pipe(stylus())
    .pipe(concat('styles.build.css'))
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', function() {
  gulp.watch(['source/js/*.jsx', 'source/styles/*.styl'], ['server', 'styles'])
})

gulp.task('default', ['server', 'styles', 'watch'])