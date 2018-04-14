var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('content/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('content/'))
});
 
gulp.task('minify', function() {
    return gulp.src('content/**/*.css')
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('content/'));
});

gulp.task('concat', function() {
    return gulp.src('content/**/*.css')
        .pipe(concat())
        .pipe(gulp.dest('content/'));
});
 
// Watch task
gulp.task('default', function () {
  return gulp.watch('content/**/*.scss', 'sass');
});