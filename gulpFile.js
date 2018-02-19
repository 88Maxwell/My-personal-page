var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync")

gulp.task('browser-sync', function() {
    browserSync({ 
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task("sass", function(){
    return gulp.src('app/sass/main.sass')
      .pipe(sass())
      .pipe(gulp.dest("app/css"))
})

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass',browserSync.reload]);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default',['watch']);
