var babel = require('gulp-babel')
var gulp = require('gulp')
var replace = require('gulp-replace')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var webpack = require('webpack')

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'))
})

gulp.task('dist', ['build'], function (done) {
  webpack({
    entry: [
      'babel-polyfill',
      './lib/index.js'
    ],
    output: {
      path: './dist',
      filename: 'mjml.js',
      libraryTarget: 'umd'
    }
  }, function (err, stats) {
    done()
  })
})