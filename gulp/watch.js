var gulp = require('gulp');


gulp.task('watch', function(){
	gulp.watch(['./client/sass/**/*.scss'], ['sass']);
	gulp.watch(['./client/scripts/**/*.js'], ['webpack']);
});