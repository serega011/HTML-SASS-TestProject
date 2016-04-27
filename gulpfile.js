var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifyCss    = require('gulp-minify-css'),
		browserSync = require('browser-sync').create(),
        rename = require("gulp-rename"),
        bourbon = require('node-bourbon');

/* Next tasks for main_page app*/

gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('min', function() {
  return gulp.src('app/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', prefix : ''}))

    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'));
});
/*Start server with main page*/
gulp.task('main', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./app",
            index: "main.html"
        }
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload),['html'];
    gulp.watch("app/css/*.css",['min']);
});

/*start server for property page*/
gulp.task('property', ['sass'], function() {

    browserSync.init({
        server: "./app",
        index: "property.html"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/css/*.css",['min']);
});

gulp.task('default',['main']);