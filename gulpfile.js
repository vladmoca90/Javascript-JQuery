var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

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

// Watch task
gulp.task('default', ['minify'], function () {
  return gulp.watch(['content/**/*.scss', 'content/**/*.css'], ['sass', 'minify']);
});
