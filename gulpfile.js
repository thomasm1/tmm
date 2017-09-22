

// ///////////////////
// Require
// // ///////////////////
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

// Scripts Tasks
// // ///////////////////
// ///////////////////
gulp.task('message', function(){
  return console.log('Gulp is running.ta-da one!!');

});
gulp.task('copyhtml', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('app/'));
});

gulp.task('imagemin', () =>
  gulp.src('src/img/*')
   .pipe(imagemin())
  .pipe(gulp.dest('app/img'))
);

gulp.task('concatug', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function(){
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});
// Watch & Serve
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './src'
  });
  gulp.watch(['src/sass/*.scss'], ['sass']);
  gulp.watch(['*.html']).on('change', browserSync.reload);
});

gulp.task('webserver', function(){
  gulp.src('./')
    .pipe(webserver({
      port: '4000',
      livereload: true,
      open: true
    }));
});

gulp.task('default',['copyhtml','imagemin','concatug','sass','webserver','message' ]);

gulp.task('watch', function(){
  gulp.watch('/*.html', ['copyhtml']);
  gulp.watch('src/img/*.*', ['imagemin']);
  gulp.watch('src/js/*.js', ['concatug']);
  gulp.watch('src/js/*.js', ['message']);
  gulp.watch('src/sass/*.scss', ['sass']);
});

