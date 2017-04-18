'use strict';
const $ 				 = require('gulp-load-plugins')();

const gulp  	   = require('gulp');
const multipipe  = require('multipipe');
const pug   	 	 = require('gulp-pug');

module.exports = function(options) {
  return function buildHTML(){
    return multipipe(
      gulp.src('app/blog.pug'),
      pug({
        'pretty': true,
        'compileDebug': true
      }),
      gulp.dest('app/')
    ).on('error', $.notify.onError());
  };
};
