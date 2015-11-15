var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src(['./client/sass/**/*.scss'])
    .pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true,
        onError: function(err) {
        }
    }))
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulp.dest('./public/css'));
});