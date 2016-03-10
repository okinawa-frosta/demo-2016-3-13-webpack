var gulp = require('gulp');
var path = require('path')
var webpack = require('webpack');

gulp.task('webpack', function() {
  webpack({
    entry: {
      index: [
        './src/main.js',
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    resolve: {
      root: [ path.join(__dirname, 'bower_components') ],
      extensions: [ '', '.js' ]
      // alias: {
      //   'lodash': 'lodash/dist/lodash.min'
      // }
    },
  }, function(err, status) {
    console.log('webpack completed');
  });
});
