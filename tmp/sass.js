'use strict';
const $ 				 = require('gulp-load-plugins')();

const gulp  	   = require('gulp');
const multipipe  = require('multipipe');
const concatcss  = require('gulp-concat-css');

module.exports = function (options) {
  return function(){
    return multipipe(
        gulp.src(options.src),
        $.sass().on('error', $.sass.logError),
        concatcss('style.css'),
        gulp.dest('app/')
    ).on('error', $.notify.onError());
  };
};
