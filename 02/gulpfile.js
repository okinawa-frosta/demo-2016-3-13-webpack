var gulp = require('gulp');
var path = require('path')
var webpack = require('webpack');

gulp.task('webpack', function() {
  webpack({
    entry: {
      index: [
        './src/main.js',
        './src/hoge.js',
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    }
  }, function(err, status) {
    console.log('webpack completed');
  });
});
