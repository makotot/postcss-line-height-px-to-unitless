var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  lineHeightToUnitless = require('./index'),
  eslint = require('gulp-eslint');


gulp.task('lint', function () {

  return gulp
    .src('./index.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('css', function () {

  return gulp
    .src('./fixture/src/fixture.css')
    .pipe(postcss([
      lineHeightToUnitless()
    ]))
    .pipe(gulp.dest('./fixture/dist'));
});

gulp.task('default', ['lint'], function () {
});
