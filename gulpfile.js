const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload
      compass = require('gulp-compass'),
      plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename');
 
/* 

-top-level function-   !css/style.css
gulp.task -define tasks       css/*.css
gulp.src - point to files to use  *.+(js|css)
gulp.dist - points to folder to output 
gulp.watch - watch files and folders
*/


// message log
gulp.task('message', function(){
    return console.log('great job!');
});
// html files
gulp.task('copyHTML', function(){
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});
// SCRIPTS////////////////////////////////////
// ['/js/**/**/*.js','/js/**/*.js','/js/*.js','!app/js/**/**/*min.js']
// js files
gulp.task('copyJS', function(){
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
        console.log('JS worked!');
});

// COMPASS / SASS ////////////////////////////////////
//  
gulp.task('compass', function() {
    gulp.src('sass/*.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file: './config.rb',
            css: 'css',
            sass: 'sass',
            require: ['susy']
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/scss'))
            .pipe(reload({stream:true}));
});
// gulp.task('copyCSS', function(){
  //  gulp.src('css/*.css')
    //    .pipe(gulp.dest('dist/css'));
// }); 

// HTMLl ////////////////////////////////////
// 
gulp.task('html', function() {
        gulp.src('*.html');
});
// BROWSERSYNC ////////////////////////////////////
// 
gulp.task('browser-sync', function() {
        browserSync({
            server:{
            baseDir: "./"
        }
    });
}); 
// WATCH ////////////////////////////////////
// 
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['copyJS']);
    gulp.watch('scss/**/*.scss', ['compass']);
    gulp.watch('*.html', ['html']);
});

// DEFAULT ////////////////////////////////////
// all files  ['copyCSS', 'copyJS', 'copyHTML']
gulp.task('default', 
    ['copyJS', 'compass', 'copyHTML', 'html', 'message']
); 