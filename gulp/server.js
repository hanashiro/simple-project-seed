var gulp = require('gulp'),
    gls = require('gulp-live-server');


gulp.task('server', function() {
    var sources = [
        './public/index.html',
        './public/**/*.css',
        './public/**/*.js'
    ];

    var server = gls.static('./public/',process.env.PORT, process.env.IP);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    return gulp.watch(sources, function (file) {
        server.notify.apply(server, [file]);
    });
}); 


gulp.task('serve', ['watch','server']);