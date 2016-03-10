var gulp = require('gulp');
var path = require('path')
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  gulp.src('./src/*.js')
    .pipe(webpack({
      output: {
        filename: 'index.js'
      }
    }))
    .pipe(gulp.dest('dist'));
});
