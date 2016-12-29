'use strict';

const gulp  = require('gulp');
const sass  = require('gulp-sass');
const pug   = require('gulp-pug');
const notify    = require('gulp-notify');
const multipipe = require('multipipe');
const bs = require('browser-sync').create();

// Static server
gulp.task('server', function () {
  bs.init({
    'server': 'app'
  });
  bs.watch('app/**/*.*').on('change', bs.reload);
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style.css'));
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