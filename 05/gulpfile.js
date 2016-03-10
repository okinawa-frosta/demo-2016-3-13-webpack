var gulp = require('gulp');
var path = require('path');
var through = require('through2');
var webpack = require('webpack');
var _ = require('lodash');

gulp.task('webpack', function() {

  var build = function(opts) {
    var webpackBaseOpts = function(entry, outputPath, outputFilename) {
      return {
        entry: entry,
        output: {
          path: outputPath,
          filename: outputFilename + '.js'
        }
      }
    };

    var transform = function(data, encode, callback) {
      var destDirname    = path.dirname(path.join(opts.basedir, opts.dest, path.relative(opts.src, data.path)));
      var destFilename   = path.basename(data.path, '.js');
      var webpackAllOpts = _.merge(webpackBaseOpts(data.path, destDirname, destFilename), opts.webpackOhterOpts);
      webpack(webpackAllOpts, function(err, stats) {
        callback();
      });
    };

    var flush = function(callback) {
      callback();
    };

    return through.obj(transform, flush);
  };

  gulp.src('./webpack/src/**/*.js')
    .pipe(build({
      basedir         : __dirname,
      src             : './webpack/src/',
      dest            : './htdocs/',
      webpackOhterOpts: {
        devtool: 'source-map'
      }
    }));

});
