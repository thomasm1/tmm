const gulp = require('gulp'); 
 
 
/* 
-top-level function-
gulp.task -define tasks
gulp.src - point to files to use
gulp.dist - points to folder to output
gulp.watch - watch files and folders
*/
// message log
gulp.task('message', function(){
    return console.log('Gulp is running..tmm..');
});
// html files
gulp.task('copyHTML', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});
    
// js files
gulp.task('copyJS', function(){
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});
    // css files
gulp.task('copyCSS', function(){
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
}); 

gulp.task('default', function() {
    return console.log('gulp is running default');
}); 