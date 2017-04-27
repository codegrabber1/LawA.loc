'use strict';
//const $ 				 = require('gulp-load-plugins')();
const gulp  	   = require('gulp');
// const sass  	   = require('gulp-sass');
// const pug   	 	 = require('gulp-pug');
const multipipe  = require('multipipe');
const notify     = require('gulp-notify');
// const concatcss  = require('gulp-concat-css');
// const cached     = require('gulp-cached');
// const path       = require('path');
// const remember   = require('gulp-remember');
const concat     = require('gulp-concat');
const bs 		 		 = require('browser-sync').create();
//const autopref   = require('gulp-autoprefixer');

function lazyRequireTask(taskName,path,options){
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback){
		let task = require(path).call(this,options);

		return task(callback);
	});
}

// Static server
gulp.task('server', function () {
  bs.init({
    'server': 'app'
  });
  bs.watch('app/**/*.*').on('change', bs.reload);
});

/*=== sass ===*/
lazyRequireTask('sass','./tmp/sass', {
	src: 'app/sass/**/*.sass'
});

/*=== js ===*/
gulp.task('js', function(){
  return multipipe(
    gulp.src([
      'app/libs/jquery/jquery.js',
      'app/libs/respond/respond.min.js',
      'app/libs/jq.mmnu/js/jquery.mmenu.all.min.js',
      'app/libs/superfish/dist/js/superfish.js',
      'app/libs/semantic/js/semantic.min.js',
			'app/libs/animate/animate-css.js',
			'app/libs/wow.min.js',
      'app/libs/OwlCarousel/js/owl.carousel.min.js',
			//'app/libs/masonry/masonry.pkgd.min.js',
    ]),
    concat("libs.js"),
    gulp.dest('app/js/')
  ).on('error', notify.onError());
});

/*=== jade(pug) ===*/
lazyRequireTask('pug','./tmp/pug', {
	src: 'app/**/*.pug'
});


/*== watch ==*/
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));

    gulp.watch('app/**/*.pug', gulp.series('pug'));
});

///gulp.task('default');
gulp.task('default', gulp.parallel('server','watch'));
