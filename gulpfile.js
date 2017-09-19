const gulp = require('gulp');
 
gulp.task('message', function(){
return console.log('Gulp is Running ..');
});

gulp.task('default', function(){
	gulp.task('copyHtml', function(){
		gulp.src('*html')('Gulp is Running ..');
});