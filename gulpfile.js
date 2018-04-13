var gulp = require('gulp');
var sass = require('gulp-sass');
var min = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('content/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('content/'))
});

gulp.task('uglify', function() {
    return gulp.src('content/**/*.css')
        .pipe(min())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('content/'));
});

// Watch task
gulp.task('default', function () {
  return gulp.watch('content/**/*.scss', ['sass']);
});
