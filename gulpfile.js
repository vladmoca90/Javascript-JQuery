
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compile sass into css and auto-inject into browsers
gulp.task('sass', function() {
return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'Javascript-JQuery-Practice/content/*/*.scss'])
.pipe(sass())
.pipe(gulp.dest("Javascript-JQuery-Practice/content/*/*.scss"))
.pipe(browserSync.stream());

});

//Move the javascript files into our src/js folder
gulp.task('js', function() {
return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'mode_modules/jquery/dist/jquery.min.js'])
.pipe(gulp.dest("src/js"))
.pipe(browserSync.stream());

});

//Static server + watching scss/html files
gulp.task('serve', ['sass'], function() {

browserSync.init({
server: "./src"
});

gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss'], ['src/scss/*.scss'], ['sass']);
gulp.watch("src/*.html").on('changed', browserSync.reload);
});

gulp.task('default', ['js', 'server']);