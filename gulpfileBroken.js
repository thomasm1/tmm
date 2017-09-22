

// ///////////////////
// Require
// // ///////////////////
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  compass = require('gulp-compass'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
var imagemin = require('imagemin');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminPngquant = require('imagemin-pngquant');
// Scripts Tasks
// // ///////////////////
// ///////////////////
gulp.task('scripts', function () {

  gulp.src(['src/js/*.js', '!src/js/*min.js'])
.pipe(rename({suffix:'.min'}))
    .pipe(uglify)
    .pipe(gulp.dest('app/js'));
});
// Ccompass / Sass Tasks  Tasks
// // ///////////////////
gulp.task('compass', function () {
  gulp.src('sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: 'sass/*.css',
      sass: 'sass/*.scss',
      require: ['susy']
    }))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('imagemin', function(){
  return console.log('Gulp-imagemin is Running ..');

  imagemin(['src/img/*.{jpg,png}'], 'app/img', {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({quality: '65-80'})
    ]
  }).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
});
// ///////////////////

// Watch Tasks
// // ///////////////////
gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts','watch']);
  gulp.watch(['src/img/*.{jpg,png}', ['imagemin','watch']]);
  gulp.watch('src/sass/*.scss', ['compass','watch']);
});
// ///////////////////
// Default Task
// // ///////////////////
gulp.task('default', [ 'scripts','imagemin',  'compass', 'watch']);
// ///////////////////
