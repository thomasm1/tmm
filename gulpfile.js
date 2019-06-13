const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const uglify = require('gulp-uglify'); 
const concat = require('gulp-concat');


// Logs Message
gulp.task('message', function(){
    return console.log('Gulp TMM is running...');
  });

// Copy All HTML files
//gulp.task('copyHtml', function(){
//    gulp.src(['public/*.html','public/app/templates/*.html'])
//        .pipe(gulp.dest('public/dist/html'));
//  });
  
// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
    return gulp.src(['public/src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/dist/css"))
        .pipe(browserSync.stream());
});
 
// Optimize img
gulp.task('imageMin', () =>
	gulp.src('public/src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/dist/img'))
);

// Minify JS
gulp.task('minify', function(){
    gulp.src('public/src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
  });

// Scripts
gulp.task('scripts', function(){
    gulp.src('public/src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
  });
  
// Watch Sass & Serve
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./public/"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['public/*.html','public/templates/*.html','public/templates/views/*.html']).on('change', browserSync.reload);
});

// Default Task   // gulp
gulp.task('default', ['sass', 'message',  'imageMin']); // 'copyHtml'  (unneeded)
// gulp serve
