'use strict';
const gulp  	   = require('gulp');
const sass  	   = require('gulp-sass');
const pug   	   = require('gulp-pug');
const multipipe  = require('multipipe');
const notify     = require('gulp-notify');
const concatcss  = require('gulp-concat-css');
const concat     = require('gulp-concat');
const bs 		     = require('browser-sync').create();
const autopref   = require('gulp-autoprefixer');

// Static server
gulp.task('server', function () {
  bs.init({
    'server': 'app'
  });
  bs.watch('app/**/*.*').on('change', bs.reload);
});

gulp.task('sass', function () {
  return multipipe(
      gulp.src('app/sass/**/*.sass'),
      sass().on('error', sass.logError),
      concatcss('style.css'),
      gulp.dest('app/')
  ).on('error', notify.onError());
});

/*=== jade(pug) ===*/
gulp.task('js', function(){
  return multipipe(
    gulp.src([
      'app/libs/jquery/jquery.js',
      'app/libs/respond/respond.min.js',
      'app/libs/jq.mmnu/js/jquery.mmenu.all.min.js',
      'app/libs/superfish/dist/js/superfish.js',
      'app/libs/waypoints/waypoints.min.js',
    ]),
    concat("libs.js"),
    gulp.dest('app/js/')
  ).on('error', notify.onError());
});

/*=== jade(pug) ===*/
gulp.task('pug', function buildHTML(){
  return multipipe(
    gulp.src('app/**/*.pug'),
    pug({
      'pretty': true,
      'compileDebug': true
    }),
    gulp.dest('app/')
  ).on('error', notify.onError());
});

/*== watch ==*/
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass',['sass']);
    gulp.watch('app/**/*.pug', ['pug']);
});

///gulp.task('default');
gulp.task('default', ['watch','server']);
