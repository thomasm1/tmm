const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');
 
/* 
-top-level function-      !css/style.css
gulp.task -define tasks       css/*.css
gulp.src - point to files to use  *.+(js|css)
gulp.dist - points to folder to output 
gulp.watch - watch files and folders
*/
// message log
gulp.task('message', function(){
    return console.log('Gulp is running..tmm..');
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
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
        console.log('JS worked!');
});
    // css files
gulp.task('copyCSS', function(){
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
}); 


// DEFAULT ////////////////////////////////////
// all files  ['copyCSS', 'copyJS', 'copyHTML']
gulp.task('default', function() {
    return console.log('gulp is running default');
}); 