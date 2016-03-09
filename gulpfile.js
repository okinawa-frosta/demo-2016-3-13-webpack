var gulp = require('gulp');
var path = require('path')
var webpack = require('webpack');

gulp.task('webpack', function() {
  webpack({
    entry: {
      index: [
        './src/main.js',
        './src/sample-1',
        './src/sample-2'
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    }
    // resolve: {
    //   root: [ path.join(__dirname, 'bower_components') ],
    //   extensions: [ '', '.js' ],
    // },
  }, function(err, status) {
    console.log('webpack completed');
  });
});
