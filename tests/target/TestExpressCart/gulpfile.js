"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest,
    series = _require.series,
    watch = _require.watch;

var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

var less = require('gulp-less');

var colors = require('colors');

var cleanCSS = require('gulp-clean-css');

var minify = require('gulp-minify');

var rename = require('gulp-rename');

var nodemonOptions = {
  script: 'app.js',
  ext: 'js json',
  env: {
    NODE_ENV: 'development'
  },
  verbose: false,
  ignore: [],
  watch: ['lib/*', 'config/*', 'routes/*', 'app.js']
};

function lessCss() {
  return gulp.src('public/stylesheets/less/**/*.less').pipe(less({
    paths: ['public/stylesheets/less']
  })).pipe(rename({
    dirname: 'public/stylesheets',
    extname: '.css'
  })).pipe(gulp.dest('./'));
}

;

function compressJS() {
  return src(['public/javascripts/*.js', '!public/javascripts/*.min.js']).pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  })).pipe(dest('public/javascripts'));
}

;

function compressCss() {
  return src(['public/stylesheets/*.css', '!public/stylesheets/*.min.css']).pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(rename({
    dirname: 'public/stylesheets',
    extname: '.min.css'
  })).pipe(dest('./'));
}

;

function compressThemeCss() {
  return src(['views/themes/**/*.css', '!views/themes/**/*.min.css']).pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(rename({
    extname: '.min.css'
  })).pipe(dest('views/themes/'));
}

;

function compressThemeJS() {
  return src(['views/themes/**/*.js', '!views/themes/**/*.min.js']).pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  })).pipe(dest('views/themes/'));
}

; // run the tasks

gulp.task('default', series(lessCss, compressJS, compressCss, compressThemeCss, compressThemeJS));
gulp.task('watch', function (done) {
  // Watch LESS files and generate CSS
  watch(['public/stylesheets/less/**/*.less'], function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lessCss();
            console.log(colors.blue('CSS generation complete'));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // run, watch and restart app

  nodemon(nodemonOptions).once('quit', function () {
    done();
  });
});